import * as React from "react";
import { Home, Search, Cloud, ExternalLink } from "react-feather";

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
  NavLink,
  useParams,
} from "react-router-dom";

import report from "./report.json";

import { Dashboard } from "./components/Dashboard";
import { LightHouse } from "./components/LightHouse";
import { SSL } from "./components/SSL";
import { HTTP } from "./components/HTTP";
import { Trackers } from "./components/Trackers";
import { Owasp } from "./components/Owasp";
import { Nuclei } from "./components/Nuclei";
import { Sidebar } from "./components/Sidebar";

const TopBar = () => (
  <Navbar
    variant="dark"
    bg="dark"
    sticky="top"
    expand="lg"
    className="p-0 flex-md-nowrap shadow"
  >
    <Navbar.Brand className="px-3 col-sm-2 col-md-3 col-lg-2 mr-0" href="/">
      <Cloud size={16} style={{ marginTop: -5, marginRight: 10 }} />
      Meteo web
    </Navbar.Brand>
    <FormControl
      type="text"
      placeholder="Search url"
      className=" form-control-dark w-100"
    />
  </Navbar>
);

type UrlDetailProps = {};

interface ParamTypes {
  url: string;
}

const UrlDetail: React.FC<UrlDetailProps> = ({ ...props }) => {
  const { url } = useParams<ParamTypes>();
  //@ts-expect-error
  const urlData = report[url] as any;
  return (
    <div>
      <h1 className="text-center">{url}</h1>
      <LightHouse data={urlData.lhr} />
      <br />
      <SSL data={urlData.ssl} />
      <br />
      <HTTP data={urlData.http} />
      <br />
      <Nuclei data={urlData.nuclei} />
      <br />
      <Trackers data={urlData.trackers} />
      <br />
      <Owasp data={urlData.owasp} />
    </div>
  );
};

const App = () => {
  const urls = Object.keys(report);
  return (
    <Router>
      <div>
        <TopBar />
        <Container fluid>
          <Row>
            <Sidebar urls={urls} />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route path="/url/:url*">
                  <UrlDetail />
                </Route>
                <Route path="/">
                  <Dashboard report={report} />
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
