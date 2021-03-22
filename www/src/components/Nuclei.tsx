import * as React from "react";

import { Table, Badge } from "react-bootstrap";

import { Panel } from "./Panel";

type NucleiProps = { data: any };

const NucleiBadge = (row: any) => {
  const severity = (row.info && row.info.severity) || "critical";
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

export const Nuclei: React.FC<NucleiProps> = ({ data }) => {
  const rows = data;
  rows.sort(nucleiOrder);
  return (
    (rows.length && (
      <Panel
        title="Nuclei"
        info="Détection d'erreurs de configuration et vulnérabilités"
      >
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
            {rows.map((failure: any, i: number) => {
              return (
                <tr key={failure.templateID + i}>
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
    )) ||
    null
  );
};
