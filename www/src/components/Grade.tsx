import * as React from "react";

import { Badge } from "react-bootstrap";

type GradeProps = { grade: string; label?: string };

export const Grade: React.FC<GradeProps> = ({ grade, label }) => {
  const newGrade = grade.substring(0, 1).toUpperCase();
  const variant =
    newGrade === "F"
      ? "danger"
      : newGrade === "E"
      ? "danger"
      : newGrade === "D"
      ? "warning"
      : newGrade === "C"
      ? "info"
      : newGrade === "B"
      ? "info"
      : "success";
  return (
    <Badge variant={variant} style={{ fontSize: "2em" }}>
      {label !== undefined ? label : grade}
    </Badge>
  );
};
