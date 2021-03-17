import * as React from "react";

import { Badge } from "react-bootstrap";

type GradeProps = { grade: string; label?: string };

export const Grade: React.FC<GradeProps> = ({ grade, label }) => {
  const variant =
    grade === "F"
      ? "danger"
      : grade === "E"
      ? "danger"
      : grade === "D"
      ? "warning"
      : grade === "C"
      ? "warning"
      : grade === "B"
      ? "info"
      : "success";
  return (
    <Badge variant={variant} style={{ fontSize: "2em" }}>
      {label !== undefined ? label : grade}
    </Badge>
  );
};
