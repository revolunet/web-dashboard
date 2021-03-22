
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:58:27


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 2 |
| Low | 6 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 1 | 
| Vulnerable JS Library | Medium | 3 | 
| Absence of Anti-CSRF Tokens | Low | 3 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Dangerous JS Functions | Low | 6 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 10 | 
| Strict-Transport-Security Header Not Set | Low | 2 | 
| Base64 Disclosure | Informational | 8 | 
| Content-Type Header Missing | Informational | 2 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 3 | 
| Non-Storable Content | Informational | 6 | 
| Storable and Cacheable Content | Informational | 3 | 
| Timestamp Disclosure - Unix | Informational | 3 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/login](https://si-enquetes-valid.sante.gouv.fr/enquetes/login)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library angularjs, version 1.4.7 is vulnerable.</p>
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://errors.angularjs.org/1.4.7/`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery v1.12.1`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJavaScriptModulesDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJavaScriptModulesDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `//! moment.js
//! version : 2.11.1`
  
  
  
  
Instances: 3
  
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

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form>`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form>`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form style="display:none;">`
  
  
  
  
Instances: 3
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: ].</p>
  
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
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/](https://si-enquetes-valid.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgs-sisacenq-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgs-sisacenq-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr](https://si-enquetes-valid.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgs-sisacenq-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgs-sisacenq-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/](https://si-enquetes-valid.sante.gouv.fr/enquetes/)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `trustAsHtml`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allDirectives.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allDirectives.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `$eval`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allServices.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allServices.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allCtrls.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allCtrls.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `$eval`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allServices.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allServices.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJavaScriptModulesDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJavaScriptModulesDependencies.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allFilters.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allFilters.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/js/spectrum/1.7.0/spectrum.min.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/js/spectrum/1.7.0/spectrum.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/sisac-app.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/sisac-app.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/login](https://si-enquetes-valid.sante.gouv.fr/enquetes/login)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allDirectives.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allDirectives.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allCtrls.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/sisac-angularJS-2.2.1/allCtrls.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/bootstrap/fonts/font-awesome.min.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/bootstrap/fonts/font-awesome.min.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2588400`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/jquery-ui.theme-global.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/jquery-ui.theme-global.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2588400`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/bootstrapSlim.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/bootstrapSlim.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2588400`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/globalStyle.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/globalStyle.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2588400`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/login](https://si-enquetes-valid.sante.gouv.fr/enquetes/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/login.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/login.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2588400`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/angularJS/modules/angular-material/1.0.7/font/material-icons.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/angularJS/modules/angular-material/1.0.7/font/material-icons.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2588400`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/enquete/enqueteGlobal.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/enquete/enqueteGlobal.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2588400`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allCssDependencies.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allCssDependencies.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2588400`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/enquete/enqueteHeader.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/enquete/enqueteHeader.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2588400`
  
  
  
  
Instances: 10
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/robots.txt](https://si-enquetes-valid.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/sitemap.xml](https://si-enquetes-valid.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
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

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `D27CDB6E-AE6D-11cf-96B8-444553540000`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `textAngular-editableFix-010203040506070809`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/](https://si-enquetes-valid.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `VjUtqfUmAZcgbjUqJlLL3fNyljz02QbCOe/FnzfKU52m3t4/TkZv7v9xCdtXJIoBuoQLa9+atNS8T7W8ij+7u9xNggE=`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/globalStyle.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/globalStyle.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTVlNWU1IiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allCssDependencies.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allCssDependencies.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/login](https://si-enquetes-valid.sante.gouv.fr/enquetes/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `/enquetes/res/dependencies/angularJS/modules/angular-material/1`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJavaScriptModulesDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJavaScriptModulesDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr](https://si-enquetes-valid.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `YzW95vA4sf6ByO8qJlLL3fNyljz02f4mnGNSuYJOSimSc9hQLOxTZl2DoXZTOdmXJGC66j1c0cOVVcPjqRBaiR0v9Vg=`
  
  
  
  
Instances: 8
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>\x000fn�\x000c\x001e��\x0001:\x000f�uq���\x001f>�9�~x�M4</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/robots.txt](https://si-enquetes-valid.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/sitemap.xml](https://si-enquetes-valid.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure each page is setting the specific and appropriate content-type value for the content being delivered.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx

  
#### CWE Id : 345
  
#### WASC Id : 12
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/login](https://si-enquetes-valid.sante.gouv.fr/enquetes/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `USER`
  
  
  
  
Instances: 1
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected 2 times, the first in the element starting with: "<!-- USER -->", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `db`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/login](https://si-enquetes-valid.sante.gouv.fr/enquetes/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `ADMIN`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `db`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
Instances: 10
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bTODO\b and was detected in the element starting with: "		// TODO: remove support for widgetEventPrefix
", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allJqueryDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id='"+u+"'></a>`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/allAngularModulesDependencies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="md-button" ng-transclude></a>`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/js/spectrum/1.7.0/spectrum.min.js](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/dependencies/js/spectrum/1.7.0/spectrum.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class='sp-cancel' href='#'></a>`
  
  
  
  
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
  
  
  
* URL: [http://si-enquetes-valid.sante.gouv.fr/enquetes/](http://si-enquetes-valid.sante.gouv.fr/enquetes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [http://si-enquetes-valid.sante.gouv.fr/enquetes/login](http://si-enquetes-valid.sante.gouv.fr/enquetes/login)
  
  
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

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr](https://si-enquetes-valid.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/](https://si-enquetes-valid.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes](https://si-enquetes-valid.sante.gouv.fr/enquetes)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/](https://si-enquetes-valid.sante.gouv.fr/enquetes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/robots.txt](https://si-enquetes-valid.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/sitemap.xml](https://si-enquetes-valid.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/login](https://si-enquetes-valid.sante.gouv.fr/enquetes/login)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/bootstrapSlim.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/bootstrapSlim.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `42857143`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/bootstrapSlim.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/bootstrapSlim.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `66666667`
  
  
  
  
* URL: [https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/bootstrapSlim.css](https://si-enquetes-valid.sante.gouv.fr/enquetes/res/css-2.2.1/theme/bootstrapSlim.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `33333333`
  
  
  
  
Instances: 3
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>42857143, which evaluates to: 1971-05-12 00:45:43</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
