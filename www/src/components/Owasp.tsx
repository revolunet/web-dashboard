import * as React from "react";

import { Table, Badge } from "react-bootstrap";

import { Panel } from "./Panel";

const orderBySeverity = (a: any, b: any) => {
  // high criticity first
  const order = parseInt(b.riskcode) - parseInt(a.riskcode);
  if (order === 0) {
    // high confidence first
    return parseInt(b.confidence) - parseInt(a.confidence);
  }
  return order;
};

const OwaspBadge = (row: any) => {
  const severity = row.riskcode;
  const variant =
    severity === "0"
      ? "info"
      : severity === "1"
      ? "warning"
      : severity === "2"
      ? "danger"
      : severity === "3"
      ? "danger"
      : "info";
  return (
    <Badge className="w-100" variant={variant}>
      {row.riskdesc}
    </Badge>
  );
};

type OwaspProps = { data: any };

export const Owasp: React.FC<OwaspProps> = ({ data }) => {
  const alerts = data.flatMap((row: any) => {
    return row.result && row.result.site.flatMap((site: any) => site.alerts);
  });
  alerts.sort(orderBySeverity);
  const url =
    data.length &&
    `/web-dashboard/report/${data[0].filename.replace(/\.json$/, ".html")}`;
  return (
    (alerts.length && (
      <Panel
        title="OWASP"
        url={url}
        info="Scan de vulnérabiliés OWASP baseline"
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>name</th>
              <th className="text-center">count</th>
              <th className="text-center">risk/confidence</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert: any, i: number) => {
              return (
                <tr key={alert.name + i}>
                  <td>{alert.name}</td>
                  <td className="text-center">{alert.count}</td>
                  <td className="text-center">
                    <OwaspBadge {...alert} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Panel>
    )) ||
    null
  );
};
