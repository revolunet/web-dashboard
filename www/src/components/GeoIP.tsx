import * as React from "react";
import { Table } from "react-bootstrap";
import Flags from "country-flag-icons/react/3x2";

import { Panel } from "./Panel";

type GeoIPProps = { data: any };

export const GeoIP: React.FC<GeoIPProps> = ({ data }) => {
  return (
    (data.length && (
      <Panel title="GeoIP" info="Géolocalisation des requêtes de la page">
        <Table striped bordered hover style={{ marginBottom: 10 }}>
          <thead>
            <tr>
              <th>Flag</th>
              <th>Hostname</th>
              <th>IP</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {data.flatMap(
              (row: any, i: number) =>
                row.result &&
                row.result.map((host: any, j: number) => {
                  const Flag =
                    (host.geoip.country &&
                      Flags[host.geoip.country.iso_code]) ||
                    null;
                  return (
                    <tr key={host.hostname + "-" + i + "-" + j}>
                      <td className="text-center">
                        {Flag && (
                          <Flag
                            style={{ width: 60 }}
                            title={host.geoip.country.names.fr}
                          />
                        )}
                      </td>
                      <td>{host.hostname}</td>
                      <td>{host.ip}</td>
                      <td>
                        {(host.geoip.city && host.geoip.city.names.fr) || "?"}
                      </td>

                      <td>
                        {(host.geoip.country && host.geoip.country.names.fr) ||
                          "?"}
                      </td>
                    </tr>
                  );
                })
            )}
          </tbody>
        </Table>
      </Panel>
    )) ||
    null
  );
};
