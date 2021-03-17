import * as React from "react";

import { Row, Col, Alert } from "react-bootstrap";

import { Panel } from "./Panel";
import { Grade } from "./Grade";

type SSLProps = { data: any };

export const SSL: React.FC<SSLProps> = ({ data }) => {
  const firstGrade = data[0].result.endpoints[0].grade;
  const url =
    (data.length &&
      `https://www.ssllabs.com/ssltest/analyze.html?d=${data[0].url}`) ||
    null;
  return (
    url && (
      <Panel title="SSL" info="Informations collectées via SSLlabs" url={url}>
        {data.map((row: any) => {
          return (
            <React.Fragment key={row.url}>
              <Row>
                <Col>
                  {row.result.endpoints.map((endpoint: any, i: number) => {
                    return (
                      <div key={endpoint.host + i}>
                        {endpoint.host}
                        <h6>
                          {(endpoint.statusMessage === "Ready" && (
                            <div>
                              <Grade grade={endpoint.grade} />
                              <br />
                              <br />
                              {endpoint.hasWarnings && (
                                <div>Certificate has WARNINGS</div>
                              )}
                              <br />
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
    )
  );
};
