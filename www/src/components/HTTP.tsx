import * as React from "react";

import { Table, Badge } from "react-bootstrap";

import { Panel } from "./Panel";
import { Grade } from "./Grade";

type HTTPProps = { data: any };

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

export const HTTP: React.FC<HTTPProps> = ({ data }) => {
  const url =
    (data.length && `https://observatory.mozilla.org/analyze/${data[0].url}`) ||
    null;
  return (
    url && (
      <Panel
        title="HTTP"
        info="Informations collectées par le Mozilla HTTP observatory"
        url={url}
      >
        {data.map((row: any, i: number) => {
          const failures = Object.keys(row.result.details)
            .filter((key) => !row.result.details[key].pass)
            .map((key) => row.result.details[key]);
          failures.sort((a, b) => a.score_modifier - b.score_modifier);
          return (
            <div key={row.url + i}>
              <Grade grade={row.result.grade} />
              <br />
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>impact</th>
                    <th>description</th>
                  </tr>
                </thead>
                <tbody>
                  {failures.map((failure, i) => (
                    <tr key={failure.name + i}>
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
    )
  );
};
