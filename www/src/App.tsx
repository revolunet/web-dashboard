import * as React from "react";

import report from "./report.json";

import { Gauge } from "./components/Gauge";

import {
  Alert,
  CardDeck,
  Badge,
  Card,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const smallUrl = (url: string) =>
  url
    .toLowerCase()
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");

const TopBar = () => (
  <Navbar
    variant="dark"
    bg="dark"
    sticky="top"
    expand="lg"
    className="p-0 flex-md-nowrap shadow"
  >
    <Navbar.Brand className="px-3 col-sm-3 col-md-4 col-lg-3 mr-0" href="/">
      Meteo web
    </Navbar.Brand>
    <FormControl
      type="text"
      placeholder="Search url"
      className=" form-control-dark w-100"
    />
  </Navbar>
);

type SidebarProps = {
  urls: any[];
};

const Sidebar: React.FC<SidebarProps> = ({ urls }) => {
  return (
    <Nav className="col-md-4 col-lg-3 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Dashboard
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Urls</span>
          <a
            className="d-flex align-items-center text-muted"
            href="#"
            aria-label="Urls"
          ></a>
        </h6>

        <ul className="nav flex-column">
          {urls.map((url) => (
            <li className="nav-item" key={url}>
              <Link className="nav-link" to={`/url/${url}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-file-text"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                {smallUrl(url)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Nav>
  );
};

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return <div>Dashboard</div>;
};

type UrlProps = {};

interface ParamTypes {
  url: string;
}

type LightHouseProps = { data: any };

type Category = {
  score: number;
  [any: string]: any;
};

const LightHouse: React.FC<LightHouseProps> = ({ data }) => {
  return (
    <Panel title="LightHouse">
      <p>Metriques récoltées par l'outil Google LightHouse</p>
      {data.map((row: any) => {
        return (
          <React.Fragment>
            <Row>
              <Col>
                <h5>
                  {smallUrl(row.url)}{" "}
                  <a
                    target="_blank"
                    href={`/report/${row.filename.replace(/\.json$/, ".html")}`}
                  >
                    details
                  </a>
                </h5>
              </Col>
            </Row>
            <Row>
              {Object.keys(row.result.categories)
                .filter((key) => key !== "pwa")
                .map((key: any, i: number) => {
                  const category = row.result.categories[key] as Category;
                  return (
                    <Col xs={12} md={6} lg={3} className="text-center mb-3">
                      <Card key={category.title}>
                        <Gauge
                          width={100}
                          height={60}
                          value={category.score * 100}
                          minValue={0}
                          maxValue={100}
                          animationSpeed={32}
                        />
                        <Card.Body>
                          <Card.Title>{category.title}</Card.Title>
                          <Card.Title
                            style={{ fontSize: "2rem", fontWeight: "bold" }}
                          >
                            {category.score}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </React.Fragment>
        );
      })}
    </Panel>
  );
};

type PanelProps = { title: string; children: any };

const Panel: React.FC<PanelProps> = ({ title, children }) => (
  <Card>
    <Card.Title style={{ background: "#000091", color: "white", padding: 10 }}>
      {title}
    </Card.Title>
    <Card.Body>{children}</Card.Body>
  </Card>
);

type SSLProps = { data: any };

const SSL: React.FC<SSLProps> = ({ data }) => {
  console.log("data", data);
  return (
    <Panel title="SSL">
      <p>Metriques récoltées par SSLlabs</p>
      {data.map((row: any) => {
        return (
          <React.Fragment>
            <Row>
              <Col>
                <h5>
                  {smallUrl(row.url)}{" "}
                  <a
                    href={`https://www.ssllabs.com/ssltest/analyze.html?d=${row.url}`}
                    target="_blank"
                  >
                    details
                  </a>{" "}
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                {row.result.endpoints
                  // .filter((key) => key !== "pwa")
                  .map((endpoint: any, i: number) => {
                    return (
                      <div>
                        {endpoint.host}
                        <h6>
                          {(endpoint.statusMessage === "Ready" && (
                            <div>
                              <Grade grade={endpoint.grade} />
                              {endpoint.hasWarnings && <div>WARNINGS</div>}
                              IP: {endpoint.ipAddress}
                            </div>
                          )) || (
                            <Alert variant="danger">
                              {endpoint.statusMessage}
                            </Alert>
                          )}
                        </h6>
                      </div>
                    );
                  })}
              </Col>
            </Row>
          </React.Fragment>
        );
      })}
    </Panel>
  );
};

const HttpRowBadge = (row: any) => {
  const severity = Math.abs(row.score_modifier);
  const variant =
    severity > 50
      ? "danger"
      : severity > 30
      ? "danger"
      : severity > 20
      ? "warning"
      : severity > 10
      ? "info"
      : "success";
  return (
    <Badge className="w-100" variant={variant}>
      {severity}
    </Badge>
  );
};

type GradeProps = { grade: string };

const Grade: React.FC<GradeProps> = ({ grade }) => {
  const variant = grade === "F" ? "danger" : "success";
  return (
    <Badge variant={variant} style={{ fontSize: "3rem" }}>
      {grade}
    </Badge>
  );
};

type HTTPProps = { data: any };

const HTTP: React.FC<HTTPProps> = ({ data }) => {
  console.log("data", data);
  return (
    <Panel title="HTTP">
      <p>Metriques récoltées par Mozilla HTTP observatory</p>

      {data.map((row: any) => {
        const failures = Object.keys(row.result.details)
          .filter((key) => !row.result.details[key].pass)
          .map((key) => row.result.details[key]);
        failures.sort((a, b) => a.score_modifier - b.score_modifier);
        return (
          <div>
            <Grade grade={row.result.grade} />
            <Row>
              <Col>
                <h5>
                  {row.url}{" "}
                  <a
                    href={`https://observatory.mozilla.org/analyze/${row.url}`}
                    target="_blank"
                  >
                    details
                  </a>{" "}
                </h5>
              </Col>
            </Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>impact</th>
                  <th>description</th>
                </tr>
              </thead>
              <tbody>
                {failures.map((failure) => (
                  <tr key={failure.name}>
                    <td>{failure.name}</td>
                    <td>
                      <HttpRowBadge {...failure} />
                    </td>
                    <td>{failure.score_description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        );
      })}
    </Panel>
  );
};

type NucleiProps = { data: any };

const NucleiBadge = (row: any) => {
  const severity = row.info.severity;
  const variant =
    severity === "critical"
      ? "danger"
      : severity === "high"
      ? "danger"
      : severity === "medium"
      ? "warning"
      : severity === "low"
      ? "info"
      : "success";
  return (
    <Badge className="w-100" variant={variant}>
      {severity}
    </Badge>
  );
};

const nucleiSeverities = "info,low,medium,high,critical".split(",");
const nucleiOrder = (a: any, b: any) => {
  return (
    nucleiSeverities.indexOf(a.info.severity) -
    nucleiSeverities.indexOf(b.info.severity)
  );
};

// const makeBadge = (severity, count) => {
//   if (count === 0) {
//     badge = "🏆";
//   }
//   const color =
//     severity === "critical"
//       ? "red"
//       : severity === "high"
//       ? "red"
//       : severity === "medium"
//       ? "orange"
//       : severity === "low"
//       ? "orange"
//       : "success";

//   badge = `![](https://img.shields.io/static/v1?label=${severity}&message=${count}&color=${color})`;
//   return badge;
// };

const Nuclei: React.FC<NucleiProps> = ({ data }) => {
  console.log("data", data);
  const rows = data;
  rows.sort(nucleiOrder);
  return (
    <Panel title="Nuclei">
      <p>Metriques récoltées par nuclei</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>severity</th>
            <th>name</th>
            <th>matcher</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((failure: any) => {
            return (
              <tr key={failure.templateID}>
                <td>{failure.templateID}</td>
                <td>
                  <NucleiBadge {...failure} />
                </td>
                <td>{failure.info.name}</td>
                <td>{failure.matcher_name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Panel>
  );
};

const Url: React.FC<UrlProps> = ({ ...props }) => {
  const { url } = useParams<ParamTypes>();
  //@ts-expect-error
  const urlData = report[url] as any;
  return (
    <div>
      <h3>{smallUrl(url)}</h3>
      <LightHouse data={urlData.lhr} />
      <br />
      <SSL data={urlData.ssl} />
      <br />
      <HTTP data={urlData.http} />
      <br />
      <Nuclei data={urlData.nuclei} />
    </div>
  );
};

const App = () => {
  // const [manifests, setManifests] = React.useState([]);
  // const onLoaded = (data: any) => {
  //   setManifests(data);
  // };
  // const namespaces = manifests
  //   ? Array.from(new Set(manifests.map((m: any) => m.metadata.namespace)))
  //   : [];
  // namespaces.sort();
  const urls = Object.keys(report);

  return (
    <Router>
      <div>
        <TopBar />
        <Container fluid>
          <Row>
            <Sidebar urls={urls} />
            <main role="main" className="col-md-8 ml-sm-auto col-lg-9 px-md-4">
              <Switch>
                <Route path="/url/:url">
                  <Url />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </main>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
