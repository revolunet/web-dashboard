import * as React from "react";

import { Alert, Table } from "react-bootstrap";

import { Panel } from "./Panel";

type TrackersProps = { data: any };

export const Trackers: React.FC<TrackersProps> = ({ data }) => {
  const rows = data;
  //rows.sort(nucleiOrder);
  const hasIssues =
    data.flatMap((row: any) => [...row.cookies, ...row.trackers]).length > 0;
  return (
    (hasIssues && (
      <Panel title="Trackers" info="Scripts tiers embarqués dans la page web">
        {data.map((row: any, i: number) => {
          return (
            <div key={row.url + i}>
              {(row.cookies && row.cookies.length && (
                <Table striped bordered hover style={{ marginBottom: 10 }}>
                  <thead>
                    <tr>
                      <th className="bg-dark text-white" colSpan={4}>
                        Cookies
                      </th>
                    </tr>
                    <tr>
                      <th>name</th>
                      <th>domain</th>
                      <th className="text-center">httpOnly</th>
                      <th className="text-center">secure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {row.cookies.map((cookie: any, i: number) => {
                      return (
                        <tr key={cookie.templateID + "" + i}>
                          <td>{cookie.name}</td>
                          <td>{cookie.domain}</td>
                          <td className="text-center">
                            {cookie.httpOnly ? "✔️" : "❌"}
                          </td>
                          <td className="text-center">
                            {cookie.secure ? "✔️" : "❌"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )) ||
                null}
              {(row.trackers && row.trackers.length && (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th className="bg-dark text-white" colSpan={4}>
                        Third-parties ressources
                      </th>
                    </tr>
                    <tr>
                      <th>type</th>
                      <th>value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {row.trackers.map((tracker: any, i: number) => {
                      return (
                        <tr key={tracker.value + i}>
                          <td>{tracker.type}</td>
                          <td>{tracker.value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )) ||
                null}
            </div>
          );
        })}
      </Panel>
    )) || (
      <Panel title="Trackers" info="Scripts tiers embarqués dans la page web">
        <Alert variant="success">Aucun script third-party detecté</Alert>
      </Panel>
    )
  );
};
