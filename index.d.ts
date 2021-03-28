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

type DnsScanResults = {
  url: string;
};

type ThirdPartiesScanResults = {
  url: string;
};

type ThirdPartiesScanResult = {
  trackers: [] | null;
  cookies: [] | null;
  headers: [] | null;
};

type ThirdPartyCheckParams = { url: string };
type ThirdPartyCheckResult = boolean;

type ThirdParty = {
  id: string;
  check: (ThirdPartyCheckParams) => ThirdPartyCheckResult;
  message: string;
};

type ThirdParties = ThirdParty[];
