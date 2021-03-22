import * as React from "react";

import { useParams } from "react-router-dom";

import { Jumbotron } from "react-bootstrap";

import { GeoIP } from "./GeoIP";
import { HTTP } from "./HTTP";
import { LightHouse } from "./LightHouse";
import { Nuclei } from "./Nuclei";
import { Owasp } from "./Owasp";
import { SSL } from "./SSL";
import { Trackers } from "./Trackers";

type UrlDetailProps = { report: any };

// for some reason react-router `:url*` didnt work, use `*` only
interface ParamTypes {
  "0": string;
}

export const Url: React.FC<UrlDetailProps> = ({ report, ...props }) => {
  const params = useParams<ParamTypes>();
  const url = params["0"];
  const urlData = report[url] as any;
  return (
    <div>
      <Jumbotron
        style={{ height: 50, marginTop: 10, paddingTop: 20, marginBottom: 10 }}
      >
        <h3 className="text-center">
          <a href={url} rel="noreferrer noopener" target="_blank">
            {url}
          </a>
        </h3>
      </Jumbotron>
      <LightHouse data={urlData.lhr} />
      <br />
      <SSL data={urlData.ssl} />
      <br />
      <HTTP data={urlData.http} />
      <br />
      <Nuclei data={urlData.nuclei} />
      <br />
      <Trackers data={urlData.trackers} />
      <br />
      <GeoIP data={urlData.geoip} />
      <br />
      <Owasp data={urlData.owasp} />
    </div>
  );
};
