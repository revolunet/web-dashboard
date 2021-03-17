import * as React from "react";

import { Nav, Table, Badge } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import { smallUrl } from "../utils";

import { Grade } from "./Grade";

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

export const Dashboard: React.FC<DashboardProps> = ({ report }) => {
  console.log("report", report);

  return (
    <div>
      <br />
      <h3>Results</h3>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>url</th>
            <th className="text-center">a11y</th>
            <th className="text-center">perf</th>
            <th className="text-center">SEO</th>
            <th className="text-center">SSL</th>
            <th className="text-center">HTTP</th>
            <th className="text-center">OWASP</th>
            <th className="text-center">Trackers</th>
            <th className="text-center">Nuclei</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(report).map((key) => {
            const a11y =
              report[key].lhr.length &&
              (report[key].lhr[0].result.categories.accessibility
                .score as number);
            const webPerf =
              report[key].lhr.length &&
              (report[key].lhr[0].result.categories.performance
                .score as number);
            const seo =
              report[key].lhr.length &&
              (report[key].lhr[0].result.categories.seo.score as number);
            const ssl =
              report[key].ssl.length &&
              report[key].ssl[0].result.endpoints &&
              report[key].ssl[0].result.endpoints.length &&
              report[key].ssl[0].result.endpoints[0].grade;
            const http =
              report[key].http.length && report[key].http[0].result.grade;
            const owaspAlerts =
              (report[key].owasp.length &&
                report[key].owasp[0].result.site[0].alerts.filter(
                  (a: any) => a.riskcode !== "0"
                )) ||
              [];
            const owasp = owaspAlerts.length;
            const trackers =
              report[key].trackers.length &&
              report[key].trackers[0].trackers.length;
            const trackersGrade =
              trackers > 10
                ? "F"
                : trackers > 4
                ? "C"
                : trackers > 0
                ? "B"
                : "A";
            const nuclei = report[key].nuclei.filter(
              (n: any) => n.info.severity !== "info"
            ).length;
            const nucleiGrade = report[key].nuclei.filter(
              (n: any) =>
                n.info.severity === "critical" || n.info.severity === "high"
            ).length
              ? "F"
              : nuclei.length
              ? "B"
              : "A";
            const owaspMax = Math.max(
              ...owaspAlerts.map((o: any) => parseInt(o.riskcode) || 0)
            );

            const owaspGrade =
              owaspMax > 3
                ? "F"
                : owaspMax > 2
                ? "D"
                : owaspMax > 1
                ? "C"
                : owaspMax > 0
                ? "B"
                : "A";
            return (
              <tr key={key}>
                <td>
                  <Link to={`/url/${key}`}>{smallUrl(key)}</Link>
                </td>
                <td className="text-center">
                  <Grade
                    grade={scoreToGrade(1 - a11y)}
                    label={(a11y * 100).toFixed() + " %"}
                  />
                </td>
                <td className="text-center">
                  <Grade
                    grade={scoreToGrade(1 - webPerf)}
                    label={(webPerf * 100).toFixed() + " %"}
                  />
                </td>
                <td className="text-center">
                  <Grade
                    grade={scoreToGrade(1 - seo)}
                    label={(seo * 100).toFixed() + " %"}
                  />
                </td>
                <td className="text-center">
                  {ssl ? <Grade grade={ssl} /> : <Grade grade="F" label="-" />}
                </td>
                <td className="text-center">
                  {http ? (
                    <Grade grade={http} />
                  ) : (
                    <Grade grade="F" label="-" />
                  )}
                </td>
                <td className="text-center">
                  <Grade grade={owaspGrade} label={owasp} />
                </td>
                <td className="text-center">
                  <Grade grade={trackersGrade} label={trackers} />
                </td>
                <td className="text-center">
                  <Grade grade={nucleiGrade} label={nuclei} />
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
              >
                Google LightHouse
              </a>
            </td>
            <td>Automated tool for improving the quality of web pages.</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.zaproxy.org/" target="_blank">
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
              <a href="https://www.ssllabs.com/" target="_blank">
                SSLLabs
              </a>
            </td>
            <td>Deep analysis of SSL configuration</td>
          </tr>
          <tr>
            <td>
              <a href="https://observatory.mozilla.org/" target="_blank">
                Mozilla HTTP observatory
              </a>
            </td>
            <td>Mozilla's web security guidelines scan</td>
          </tr>
          <tr>
            <td>Trackers</td>
            <td>Built-in third-party trackers list</td>
          </tr>
          <tr>
            <td>
              <a href="https://nuclei.projectdiscovery.io/" target="_blank">
                Nuclei
              </a>
            </td>
            <td>Scan server misconfigurations</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
