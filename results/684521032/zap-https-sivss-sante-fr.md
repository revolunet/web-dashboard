
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 20:00:43


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 5 |
| Low | 11 |
| Informational | 6 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 5 | 
| Cross-Domain Misconfiguration | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 4 | 
| Vulnerable JS Library | Medium | 1 | 
| X-Frame-Options Header Not Set | Medium | 2 | 
| Absence of Anti-CSRF Tokens | Low | 83 | 
| Cookie Without SameSite Attribute | Low | 1 | 
| Cookie Without Secure Flag | Low | 1 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 2 | 
| Dangerous JS Functions | Low | 1 | 
| Feature Policy Header Not Set | Low | 6 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 5 | 
| In Page Banner Information Leak | Low | 1 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 10 | 
| X-Content-Type-Options Header Missing | Low | 7 | 
| Base64 Disclosure | Informational | 1 | 
| Information Disclosure - Suspicious Comments | Informational | 7 | 
| Modern Web Application | Informational | 3 | 
| Non-Storable Content | Informational | 2 | 
| Storable and Cacheable Content | Informational | 9 | 
| Timestamp Disclosure - Unix | Informational | 6 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://sivss.sante.fr/robots.txt](https://sivss.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/sivss-web/](https://sivss.sante.fr/sivss-web/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/sitemap.xml](https://sivss.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header, to achieve optimal browser support: "Content-Security-Policy" for Chrome 25+, Firefox 23+ and Safari 7+, "X-Content-Security-Policy" for Firefox 4.0+ and Internet Explorer 10+, and "X-WebKit-CSP" for Chrome 14+ and Safari 6+.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
* https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
* http://www.w3.org/TR/CSP/
* http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.html
* http://www.html5rocks.com/en/tutorials/security/content-security-policy/
* http://caniuse.com/#feat=contentsecuritypolicy
* http://content-security-policy.com/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Cross-Domain Misconfiguration
##### Medium (Medium)
  
  
  
  
#### Description
<p>Web browser data loading may be possible, due to a Cross Origin Resource Sharing (CORS) misconfiguration on the web server</p>
  
  
  
* URL: [https://sivss.sante.fr/sivss-web/](https://sivss.sante.fr/sivss-web/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://sivss.sante.fr/sivss-web](https://sivss.sante.fr/sivss-web)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that sensitive data is not available in an unauthenticated manner (using IP address white-listing, for instance).</p><p>Configure the "Access-Control-Allow-Origin" HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner.</p>
  
### Other information
<p>The CORS misconfiguration on the web server permits cross-domain read requests from arbitrary third party domains, using unauthenticated APIs on this domain. Web browser implementations do not permit arbitrary third parties to read the response from authenticated APIs, however. This reduces the risk somewhat. This misconfiguration could be used by an attacker to access data that is available in an unauthenticated manner, but which uses some other form of security, such as IP address white-listing.</p>
  
### Reference
* http://www.hpenterprisesecurity.com/vulncat/en/vulncat/vb/html5_overly_permissive_cors_policy.html

  
#### CWE Id : 264
  
#### WASC Id : 14
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise"></script>`
  
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise"></script>`
  
  
  
  
Instances: 4
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library angularjs, version 1.2.13 is vulnerable.</p>
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://errors.angularjs.org/1.2.13/`
  
  
  
  
Instances: 1
  
### Solution
<p>Please upgrade to the latest version of angularjs.</p>
  
### Other information
<p>CVE-2020-7676</p><p></p>
  
### Reference
* https://github.com/mozilla/addons-linter/issues/1000#issuecomment-282083435
* https://github.com/angular/angular.js/blob/master/CHANGELOG.md
* http://pastebin.com/raw/kGrdaypP
* https://github.com/angular/angular.js/commit/726f49dcf6c23106ddaf5cfd5e2e592841db743a
* https://github.com/advisories/GHSA-5cp4-xmrw-59wf
* https://github.com/angular/angular.js/blob/master/CHANGELOG.md#1230-patronal-resurrection-2016-07-21
* https://github.com/angular/angular.js/commit/8f31f1ff43b673a24f84422d5c13d6312b2c4d94
* https://nvd.nist.gov/vuln/detail/CVE-2020-7676
* https://github.com/angular/angular.js/blob/master/CHANGELOG.md#179-pollution-eradication-2019-11-19
* https://github.com/angular/angular.js/pull/15699
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 2
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="form" >`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="form">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="form" >`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="clear">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form ng-submit="submit(premiereConnexion);" id="form-premiere-connexion">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="form">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="ng-scope ng-pristine ng-valid" ng-if="signal.typeFiche !== \'FSS_ESIN\' && signal.typeFiche !== \'FSS_IAS_HORS_ES\'">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form ng-submit="submit(changementMdpTemporaire);" id="form-changement-mdp-temporaire">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="form">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="clear" ng-if="signal.geaVolet1DTO != null">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="clear eigs eigsDeux">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form-recherche-admin">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="clear">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form>`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form>`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="modalMesure">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="form">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="form">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="modalReglage">`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="modalTransmissionSisac">`
  
  
  
  
Instances: 83
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 19: "intitule" "abreviation" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://sivss.sante.fr/sivss-web/](https://sivss.sante.fr/sivss-web/)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without Secure Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the secure flag, which means that the cookie can be accessed via unencrypted connections.</p>
  
  
  
* URL: [https://sivss.sante.fr/sivss-web/](https://sivss.sante.fr/sivss-web/)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
Instances: 1
  
### Solution
<p>Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html

  
#### CWE Id : 614
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise`
  
  
  * Evidence: `<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise"></script>`
  
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise`
  
  
  * Evidence: `<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise"></script>`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>
  
### Reference
* 

  
#### CWE Id : 829
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `trustAsHtml`
  
  
  
  
Instances: 1
  
### Solution
<p>See the references for security advice on the use of these functions.</p>
  
### Reference
* https://angular.io/guide/security

  
#### CWE Id : 749
  
#### Source ID : 3

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://sivss.sante.fr/robots.txt](https://sivss.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/sitemap.xml](https://sivss.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/sivss-web/](https://sivss.sante.fr/sivss-web/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  
  
Instances: 6
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Feature-Policy header.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
* https://developers.google.com/web/updates/2018/06/feature-policy
* https://scotthelme.co.uk/a-new-security-header-feature-policy/
* https://w3c.github.io/webappsec-feature-policy/
* https://www.smashingmagazine.com/2018/12/feature-policy/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Incomplete or No Cache-control and Pragma HTTP Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control and pragma HTTP header have not been set properly or are missing allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://sivss.sante.fr/assets/css/bootstrap.min.css](https://sivss.sante.fr/assets/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/css/styles.css](https://sivss.sante.fr/assets/css/styles.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.css](https://sivss.sante.fr/assets/sivss-angular.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 5
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### In Page Banner Information Leak
##### Low (High)
  
  
  
  
#### Description
<p>The server returned a version banner string in the response content. Such information leaks may allow attackers to further target specific issues impacting the product and version in use.</p>
  
  
  
* URL: [https://sivss.sante.fr/sivss-web/](https://sivss.sante.fr/sivss-web/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Tomcat/7.0.41`
  
  
  
  
Instances: 1
  
### Solution
<p>Configure the server to prevent such information leaks. For example:</p><p>Under Tomcat this is done via the "server" directive and implementation of custom error pages.</p><p>Under Apache this is done via the "ServerSignature" and "ServerTokens" directives.</p>
  
### Other information
<p>There is a chance that the highlight in the finding is on a value in the headers, versus the actual matched string in the response body.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Server Leaks Version Information via "Server" HTTP Response Header Field
##### Low (High)
  
  
  
  
#### Description
<p>The web/application server is leaking version information via the "Server" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.</p>
  
  
  
* URL: [https://sivss.sante.fr/assets/css/bootstrap.min.css](https://sivss.sante.fr/assets/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.2.15 (CentOS)`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/img/logo-ars.png](https://sivss.sante.fr/assets/img/logo-ars.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.2.15 (CentOS)`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/css/styles.css](https://sivss.sante.fr/assets/css/styles.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.2.15 (CentOS)`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.css](https://sivss.sante.fr/assets/sivss-angular.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.2.15 (CentOS)`
  
  
  
  
* URL: [https://sivss.sante.fr/sitemap.xml](https://sivss.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.2.15 (CentOS)`
  
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.2.15 (CentOS)`
  
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.2.15 (CentOS)`
  
  
  
  
* URL: [https://sivss.sante.fr/sivss-web](https://sivss.sante.fr/sivss-web)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache-Coyote/1.1`
  
  
  
  
* URL: [https://sivss.sante.fr/sivss-web/](https://sivss.sante.fr/sivss-web/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache-Coyote/1.1`
  
  
  
  
* URL: [https://sivss.sante.fr/robots.txt](https://sivss.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.2.15 (CentOS)`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.2.15 (CentOS)`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to suppress the "Server" header or provide generic details.</p>
  
### Reference
* http://httpd.apache.org/docs/current/mod/core.html#servertokens
* http://msdn.microsoft.com/en-us/library/ff648552.aspx#ht_urlscan_007
* http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspx
* http://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://sivss.sante.fr/assets/css/bootstrap.min.css](https://sivss.sante.fr/assets/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/sitemap.xml](https://sivss.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/robots.txt](https://sivss.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/css/styles.css](https://sivss.sante.fr/assets/css/styles.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/img/logo-ars.png](https://sivss.sante.fr/assets/img/logo-ars.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/sivss-web/](https://sivss.sante.fr/sivss-web/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.css](https://sivss.sante.fr/assets/sivss-angular.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  
  
Instances: 10
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to enforce Strict-Transport-Security.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html
* https://owasp.org/www-community/Security_Headers
* http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
* http://caniuse.com/stricttransportsecurity
* http://tools.ietf.org/html/rfc6797

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.css](https://sivss.sante.fr/assets/sivss-angular.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/css/styles.css](https://sivss.sante.fr/assets/css/styles.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/css/bootstrap.min.css](https://sivss.sante.fr/assets/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/img/logo-ars.png](https://sivss.sante.fr/assets/img/logo-ars.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 7
  
### Solution
<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>
  
### Other information
<p>This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p><p>At "High" threshold this scan rule will not alert on client or server error responses.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx
* https://owasp.org/www-community/Security_Headers

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `D27CDB6E-AE6D-11cf-96B8-444553540000`
  
  
  
  
Instances: 1
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>\x000fn�\x000c\x001e��\x0001:\x000f�uq���\x001f>�9�~x�M4</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `db`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
Instances: 7
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected 20 times, the first in the element starting with: "!function(a,b){"use strict";function c(a){var b=a.length,c=ha.type(a);return ha.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c|", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='"+N+"'></a>`
  
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="logo-main">
						<img src="assets/img/logo-ars.png" alt="ARS Agence régionale de Santé" class="logo-ars"/>
						<img ng-src="assets/img/{{environnement}}.png" alt="{{environnement}}" class="environnement" ng-if="environnement!=='prod'"/>
					</a>`
  
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="logo-main">
						<img src="assets/img/logo-ars.png" alt="ARS Agence régionale de Santé" class="logo-ars"/>
						<img ng-src="assets/img/{{environnement}}.png" alt="{{environnement}}" class="environnement" ng-if="environnement!=='prod'"/>
					</a>`
  
  
  
  
Instances: 3
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://sivss.sante.fr/sivss-web/](https://sivss.sante.fr/sivss-web/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://sivss.sante.fr/sivss-web](https://sivss.sante.fr/sivss-web)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 2
  
### Solution
<p>The content may be marked as storable by ensuring that the following conditions are satisfied:</p><p>The request method must be understood by the cache and defined as being cacheable ("GET", "HEAD", and "POST" are currently defined as cacheable)</p><p>The response status code must be understood by the cache (one of the 1XX, 2XX, 3XX, 4XX, or 5XX response classes are generally understood)</p><p>The "no-store" cache directive must not appear in the request or response header fields</p><p>For caching by "shared" caches such as "proxy" caches, the "private" response directive must not appear in the response</p><p>For caching by "shared" caches such as "proxy" caches, the "Authorization" header field must not appear in the request, unless the response explicitly allows it (using one of the "must-revalidate", "public", or "s-maxage" Cache-Control response directives)</p><p>In addition to the conditions above, at least one of the following conditions must also be satisfied by the response:</p><p>It must contain an "Expires" header field</p><p>It must contain a "max-age" response directive</p><p>For "shared" caches such as "proxy" caches, it must contain a "s-maxage" response directive</p><p>It must contain a "Cache Control Extension" that allows it to be cached</p><p>It must have a status code that is defined as cacheable by default (200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501).   </p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://sivss.sante.fr/assets/css/bootstrap.min.css](https://sivss.sante.fr/assets/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/css/styles.css](https://sivss.sante.fr/assets/css/styles.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/img/logo-ars.png](https://sivss.sante.fr/assets/img/logo-ars.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/robots.txt](https://sivss.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.css](https://sivss.sante.fr/assets/sivss-angular.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/](https://sivss.sante.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr/sitemap.xml](https://sivss.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sivss.sante.fr](https://sivss.sante.fr)
  
  
  * Method: `GET`
  
  
  
  
Instances: 9
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
### Other information
<p>In the absence of an explicitly specified caching lifetime directive in the response, a liberal lifetime heuristic of 1 year was assumed. This is permitted by rfc7234.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://sivss.sante.fr/assets/css/styles.css](https://sivss.sante.fr/assets/css/styles.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `66666667`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `16777216`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `2146828218`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4](https://sivss.sante.fr/assets/sivss-angular.js?v=3.6.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `16711680`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/css/styles.css](https://sivss.sante.fr/assets/css/styles.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `33333333`
  
  
  
  
* URL: [https://sivss.sante.fr/assets/css/styles.css](https://sivss.sante.fr/assets/css/styles.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `42857143`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>66666667, which evaluates to: 1972-02-11 14:31:07</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
