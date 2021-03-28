type HttpScanRule = {
  name: string;
  output: {
    [any: string]: any;
  };
  pass: boolean;
  result: string;
  score_description: string;
  score_modifier: number;
};

type HttpScanRules = {
  [any: string]: HttpScanRule;
};

type HttpScanResults = {
  url: string;
  scan_id: number;
  grade: string;
  score: number;
  details: HttpScanRules;
};

type DnsScanResult = string;

type ThirdPartiesScanResults = {
  url: string;
};

type ThirdPartyEndpoint = {
  hostname: string;
  ip: string;
  geoip: object;
};

type ThirdPartiesScanResult = {
  trackers: ThirdPartyResult[] | null;
  cookies: [] | null;
  headers: [] | null;
  endpoints: ThirdPartyEndpoint[] | null;
};

type ThirdPartyCheckParams = { url: string };
type ThirdPartyCheckResult = boolean;

type ThirdParty = {
  id: string;
  check: (ThirdPartyCheckParams) => ThirdPartyCheckResult;
  message: string;
};

type ThirdParties = ThirdParty[];

type ThirdPartyResult = {
  type: string;
  url: string;
  details?: object;
};
type SSLScanResult = {};
