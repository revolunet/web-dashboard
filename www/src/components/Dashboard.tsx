import * as React from "react";

import { Alert, Table } from "react-bootstrap";
import { ExternalLink, Slash, Info } from "react-feather";
import { Link } from "react-router-dom";
import Tooltip from "rc-tooltip";

import { smallUrl } from "../utils";

import { Grade } from "./Grade";

import "rc-tooltip/assets/bootstrap.css";

type DashboardProps = { report: any };

const remap = (value: number, x1: number, y1: number, x2: number, y2: number) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

const scoreToGrade = (score: number) => {
  const grades = "A,B,C,D,E,F".split(",");

  const newGrade = Math.min(
    grades.length - 1,
    Math.floor(remap(score, 0, 1, 0, 6))
  );

  return grades[newGrade];
};

const IconUnknown = () => <Slash size={20} />;

const getGradeTrackers = (count: number) => {
  return count > 10 ? "F" : count > 2 ? "C" : count > 0 ? "B" : "A";
};

const getGradeCookies = (count: number) => {
  return count > 10
    ? "F"
    : count > 5
    ? "E"
    : count > 2
    ? "C"
    : count > 0
    ? "B"
    : "A";
};

const getNucleiGrade = (events: any) => {
  return events.filter(
    (n: any) => n.info.severity === "critical" || n.info.severity === "high"
  ).length
    ? "F"
    : events.length
    ? "B"
    : "A";
};

const getOwaspGrade = (owaspAlerts: any) => {
  const maxSeverity = Math.max(
    ...owaspAlerts.map((o: any) => parseInt(o.riskcode) || 0)
  );

  return maxSeverity > 3
    ? "F"
    : maxSeverity > 2
    ? "D"
    : maxSeverity > 1
    ? "C"
    : maxSeverity > 0
    ? "B"
    : "A";
};

type ColumnHeaderProps = {
  title: string;
  info: string;
};

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ title, info }) => (
  <th className="text-center">
    <Tooltip
      placement="bottom"
      trigger={["hover"]}
      overlay={<span>{info}</span>}
    >
      <span>
        {title} <Info size={16} style={{ marginLeft: 5 }} />
      </span>
    </Tooltip>
  </th>
);

export const Dashboard: React.FC<DashboardProps> = ({ report }) => {
  console.log("report", report);

  return (
    <div>
      <br />
      <Alert variant="info">
        Cliquez sur une des URLs pour obtenir le détail puis sur{" "}
        <ExternalLink size={16} /> pour accéder au rapport par produit. Pour
        ajouter votre URL, éditez{" "}
        <a
          href="https://github.com/SocialGouv/web-dashboard/edit/master/urls.txt"
          target="_blank"
          rel="noreferrer noopener"
        >
          ce fichier
        </a>
        .
      </Alert>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>url</th>
            <ColumnHeader
              title="Accessibilité"
              info="Bonnes pratiques en matière d'accessibilité web"
            />
            <ColumnHeader
              title="Performance"
              info="Performances de chargement des pages web"
            />
            <ColumnHeader
              title="SEO"
              info="Bonnes pratiques en matière de référencement naturel"
            />
            <ColumnHeader
              title="SSL"
              info="Niveau de sécurité du certificat SSL"
            />
            <ColumnHeader
              title="HTTP"
              info="Bonnes pratiques de configuration HTTP"
            />
            <ColumnHeader
              title="OWASP"
              info="Bonnes pratiques de sécurité OWASP"
            />
            <ColumnHeader
              title="Trackers"
              info="Nombre de scripts externes présents"
            />
            <ColumnHeader title="Cookies" info="Nombre de cookies présents" />
            <ColumnHeader title="Nuclei" info="Erreurs de configuration" />
          </tr>
        </thead>
        <tbody>
          {Object.keys(report).map((key) => {
            // compute values

            // LightHouse
            const lhrCategories =
              report[key].lhr.length && report[key].lhr[0].categories;
            const a11y =
              lhrCategories && (lhrCategories.accessibility.score as number);
            const webPerf =
              lhrCategories && (lhrCategories.performance.score as number);
            const seo = lhrCategories && (lhrCategories.seo.score as number);

            // SSL
            const ssl =
              report[key].ssl.length &&
              report[key].ssl[0].endpoints &&
              report[key].ssl[0].endpoints.length &&
              report[key].ssl[0].endpoints[0].grade;

            // HTTP
            const http = report[key].http.length && report[key].http[0].grade;

            // OWASP
            const owaspAlerts =
              (report[key].owasp.length &&
                report[key].owasp[0].site.flatMap((site: any) =>
                  site.alerts.filter((a: any) => a.riskcode !== "0")
                )) ||
              [];
            const owaspCount = report[key].owasp.length && owaspAlerts.length;
            const owaspGrade = getOwaspGrade(owaspAlerts);

            // TRACKERS
            const trackersCount =
              (report[key].trackers &&
                report[key].trackers.length &&
                report[key].trackers[0].trackers.length) ||
              0;
            const trackersGrade = getGradeTrackers(trackersCount);

            // COOKIES
            const cookiesCount =
              (report[key].trackers &&
                report[key].trackers.length &&
                report[key].trackers[0].cookies.length) ||
              0;
            const cookiesGrade = getGradeCookies(cookiesCount);

            // NUCLEI
            const nucleiCount = report[key].nuclei.length;
            const nucleiGrade = getNucleiGrade(report[key].nuclei);

            return (
              <tr key={key}>
                <td>
                  <Link to={`/url/${key}`}>{smallUrl(key)}</Link>
                </td>
                <td className="text-center">
                  {lhrCategories ? (
                    <Grade
                      small
                      grade={scoreToGrade(1 - a11y)}
                      label={(a11y * 100).toFixed() + " %"}
                    />
                  ) : (
                    <IconUnknown />
                  )}
                </td>
                <td className="text-center">
                  {lhrCategories ? (
                    <Grade
                      small
                      grade={scoreToGrade(1 - webPerf)}
                      label={(webPerf * 100).toFixed() + " %"}
                    />
                  ) : (
                    <IconUnknown />
                  )}
                </td>
                <td className="text-center">
                  {lhrCategories ? (
                    <Grade
                      small
                      grade={scoreToGrade(1 - seo)}
                      label={(seo * 100).toFixed() + " %"}
                    />
                  ) : (
                    <IconUnknown />
                  )}
                </td>
                <td className="text-center">
                  {ssl ? <Grade small grade={ssl} /> : <IconUnknown />}
                </td>
                <td className="text-center">
                  {http ? <Grade small grade={http} /> : <IconUnknown />}
                </td>
                <td className="text-center">
                  {owaspCount ? (
                    <Grade small grade={owaspGrade} label={owaspCount} />
                  ) : (
                    <IconUnknown />
                  )}
                </td>
                <td className="text-center">
                  <Grade small grade={trackersGrade} label={trackersCount} />
                </td>
                <td className="text-center">
                  <Grade small grade={cookiesGrade} label={cookiesCount} />
                </td>
                <td className="text-center">
                  <Grade small grade={nucleiGrade} label={nucleiCount} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <br />
      <h3>Methodology</h3>
      <p>
        This dashboard is based on third-parties tools and is generated once a
        week.
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>tool</th>
            <th>usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="https://developers.google.com/web/tools/lighthouse"
                target="_blank"
                rel="noreferrer noopener"
              >
                Google LightHouse
              </a>
            </td>
            <td>Automated tool for improving the quality of web pages.</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.zaproxy.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                ZA proxy
              </a>
            </td>
            <td>
              Run OWASP ZAP Baseline scan to find vulnerabilities in your web
              application.
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.ssllabs.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                SSLLabs
              </a>
            </td>
            <td>Deep analysis of SSL configuration</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://observatory.mozilla.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Mozilla HTTP observatory
              </a>
            </td>
            <td>Mozilla's web security guidelines scan</td>
          </tr>
          <tr>
            <td>Trackers</td>
            <td>Extract third-parties requests and cookies</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://nuclei.projectdiscovery.io/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Nuclei
              </a>
            </td>
            <td>Scan server misconfigurations</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://www.maxmind.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                GeoIP
              </a>
            </td>
            <td>MaxMind GeoIP detection for all requests</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
