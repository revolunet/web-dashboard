import * as React from "react";

import { Row, Col, Card } from "react-bootstrap";

import { Gauge } from "./Gauge";
import { Panel } from "./Panel";

type Category = {
  score: number;
  [any: string]: any;
};

type LightHouseProps = { data: any };

export const LightHouse: React.FC<LightHouseProps> = ({ data }) => {
  const url =
    (data.length &&
      `/report/${data[0].filename.replace(/\.json$/, ".html")}`) ||
    null;

  return (
    url && (
      <Panel
        title="LightHouse"
        info="Informations collectées par l'outil Google LightHouse"
        url={url}
      >
        {data.map((row: any) => {
          return (
            <Row key={row.url}>
              {Object.keys(row.result.categories)
                .filter((key) => key !== "pwa")
                .map((key: any, i: number) => {
                  const category = row.result.categories[key] as Category;
                  return (
                    <Col
                      key={category.title}
                      xs={12}
                      md={6}
                      lg={3}
                      className="text-center mb-3"
                    >
                      <Card>
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
          );
        })}
      </Panel>
    )
  );
};
