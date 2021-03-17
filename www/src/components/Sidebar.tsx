import * as React from "react";

import { Nav, Table, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Home, Search } from "react-feather";

import { smallUrl } from "../utils";

type SidebarProps = {
  urls: any[];
};

export const Sidebar: React.FC<SidebarProps> = ({ urls }) => {
  return (
    <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
              exact={true}
            >
              <Home size={16} style={{ marginTop: -5, marginRight: 5 }} />
              Tableau de bord
            </NavLink>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Urls</span>
        </h6>

        <ul className="nav flex-column">
          {urls.map((url) => (
            <li
              className="nav-item"
              key={url}
              style={{
                whiteSpace: "pre",
              }}
            >
              <NavLink
                className="nav-link"
                to={`/url/${url}`}
                activeClassName="active"
                exact={true}
              >
                <Search size={16} style={{ marginTop: -5, marginRight: 5 }} />
                {smallUrl(url)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </Nav>
  );
};
