import * as React from "react";
import { Cloud } from "react-feather";
import { Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

export const Topbar = () => (
  <Navbar
    variant="dark"
    bg="dark"
    sticky="top"
    expand="lg"
    className="p-0 flex-md-nowrap shadow"
  >
    <Link to="/">
      <div
        className="px-3"
        style={{ height: 30, fontSize: "1.3rem", color: "var(--white)" }}
      >
        <Cloud size={16} style={{ marginTop: -5, marginRight: 10 }} />
        Météo apps
      </div>
    </Link>
    {/*<FormControl
      type="text"
      placeholder="Search url"
      className=" form-control-dark w-100"
    />*/}
  </Navbar>
);
