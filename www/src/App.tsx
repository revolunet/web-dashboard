import * as React from "react";

import { Container, Row } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import report from "./report.json";

import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Dashboard } from "./components/Dashboard";
import { Url } from "./components/Url";

const App = () => {
  const urls = Object.keys(report);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Topbar />
        <Container fluid>
          <Row>
            <Sidebar urls={urls} />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route path="/url/*">
                  <Url report={report} />
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
