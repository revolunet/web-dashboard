import * as React from "react";

import { Card } from "react-bootstrap";
import { ExternalLink } from "react-feather";

type PanelProps = {
  title: string;
  children: any;
  info?: string;
  url?: string;
};

export const Panel: React.FC<PanelProps> = ({ title, children, info, url }) => (
  <Card>
    <Card.Title style={{ background: "#000091", color: "white", padding: 10 }}>
      {title}
      {info && (
        <span
          style={{ fontWeight: "normal", fontSize: "0.6em", marginLeft: 10 }}
        >
          {info}
        </span>
      )}
      {url && (
        <a
          style={{ color: "white", float: "right" }}
          href={url}
          target="_blank"
        >
          <ExternalLink />
        </a>
      )}
    </Card.Title>
    <Card.Body>{children}</Card.Body>
  </Card>
);
