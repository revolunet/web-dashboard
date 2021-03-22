
# ZAP Scanning Report

Generated on Mon, 22 Mar 2021 07:22:31


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 6 |
| Informational | 10 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Application Error Disclosure | Medium | 1 | 
| CSP: style-src unsafe-inline | Medium | 3 | 
| CSP: Wildcard Directive | Medium | 3 | 
| Reverse Tabnabbing | Medium | 8 | 
| Absence of Anti-CSRF Tokens | Low | 2 | 
| CSP: Notices | Low | 3 | 
| Dangerous JS Functions | Low | 3 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| Base64 Disclosure | Informational | 9 | 
| CSP: X-Content-Security-Policy | Informational | 1 | 
| CSP: X-WebKit-CSP | Informational | 1 | 
| Information Disclosure - Sensitive Information in URL | Informational | 3 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 10 | 
| Non-Storable Content | Informational | 6 | 
| Storable and Cacheable Content | Informational | 3 | 
| Storable but Non-Cacheable Content | Informational | 2 | 
| Timestamp Disclosure - Unix | Informational | 10 | 

## Alert Detail


  
  
  
  
### Application Error Disclosure
##### Medium (Medium)
  
  
  
  
#### Description
<p>This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/pages/_error-6e2ed0e5e23696308a88.js](https://covid-19.sante.gouv.fr/_next/static/chunks/pages/_error-6e2ed0e5e23696308a88.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Internal Server Error`
  
  
  
  
Instances: 1
  
### Solution
<p>Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### CSP: style-src unsafe-inline
##### Medium (Medium)
  
  
  
  
#### Description
<p>style-src includes unsafe-inline.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; worker-src 'self' blob:; script-src 'self' https://matomo.fabrique.social.gouv.fr; frame-src https://matomo.fabrique.social.gouv.fr https://covid-tests-kibana.fabrique.social.gouv.fr https://waked.fabrique.social.gouv.fr https://airtable.com/; connect-src 'self' https://*.gouv.fr https://api.mapbox.com https://events.mapbox.com; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.gouv.fr https://matomo.fabrique.social.gouv.fr; report-uri https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr](https://covid-19.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; worker-src 'self' blob:; script-src 'self' https://matomo.fabrique.social.gouv.fr; frame-src https://matomo.fabrique.social.gouv.fr https://covid-tests-kibana.fabrique.social.gouv.fr https://waked.fabrique.social.gouv.fr https://airtable.com/; connect-src 'self' https://*.gouv.fr https://api.mapbox.com https://events.mapbox.com; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.gouv.fr https://matomo.fabrique.social.gouv.fr; report-uri https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/sitemap.xml](https://covid-19.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; worker-src 'self' blob:; script-src 'self' https://matomo.fabrique.social.gouv.fr; frame-src https://matomo.fabrique.social.gouv.fr https://covid-tests-kibana.fabrique.social.gouv.fr https://waked.fabrique.social.gouv.fr https://airtable.com/; connect-src 'self' https://*.gouv.fr https://api.mapbox.com https://events.mapbox.com; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.gouv.fr https://matomo.fabrique.social.gouv.fr; report-uri https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Other information
<p>The response contained multiple CSP headers, one or more of them contained a report-uri directive and therefore they could not be merged. The first identified header/policy was analyzed.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>form-action</p><p></p><p>The directive(s): form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; worker-src 'self' blob:; script-src 'self' https://matomo.fabrique.social.gouv.fr; frame-src https://matomo.fabrique.social.gouv.fr https://covid-tests-kibana.fabrique.social.gouv.fr https://waked.fabrique.social.gouv.fr https://airtable.com/; connect-src 'self' https://*.gouv.fr https://api.mapbox.com https://events.mapbox.com; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.gouv.fr https://matomo.fabrique.social.gouv.fr; report-uri https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr](https://covid-19.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; worker-src 'self' blob:; script-src 'self' https://matomo.fabrique.social.gouv.fr; frame-src https://matomo.fabrique.social.gouv.fr https://covid-tests-kibana.fabrique.social.gouv.fr https://waked.fabrique.social.gouv.fr https://airtable.com/; connect-src 'self' https://*.gouv.fr https://api.mapbox.com https://events.mapbox.com; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.gouv.fr https://matomo.fabrique.social.gouv.fr; report-uri https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/sitemap.xml](https://covid-19.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; worker-src 'self' blob:; script-src 'self' https://matomo.fabrique.social.gouv.fr; frame-src https://matomo.fabrique.social.gouv.fr https://covid-tests-kibana.fabrique.social.gouv.fr https://waked.fabrique.social.gouv.fr https://airtable.com/; connect-src 'self' https://*.gouv.fr https://api.mapbox.com https://events.mapbox.com; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.gouv.fr https://matomo.fabrique.social.gouv.fr; report-uri https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Other information
<p>The response contained multiple CSP headers, one or more of them contained a report-uri directive and therefore they could not be merged. The first identified header/policy was analyzed.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/sitemap.xml](https://covid-19.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://covid-projets.fabrique.social.gouv.fr" target="_blank"><div aria-label="Projets innovants" style="display:flex;align-items:center" class="ASide__MenuItemWrapper-sc-8thiw8-0 sGYsr"><img alt="Projets" src="/images/icons/bulb.svg" width="20" style="margin:0 10px 0 0px;margin-top:-3px"/>Projets</div></a>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/mentions-legales](https://covid-19.sante.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://covid-projets.fabrique.social.gouv.fr" target="_blank"><div aria-label="Projets innovants" style="display:flex;align-items:center" class="ASide__MenuItemWrapper-sc-8thiw8-0 sGYsr"><img alt="Projets" src="/images/icons/bulb.svg" width="20" style="margin:0 10px 0 0px;margin-top:-3px"/>Projets</div></a>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login](https://covid-19.sante.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://covid-projets.fabrique.social.gouv.fr" target="_blank"><div aria-label="Projets innovants" style="display:flex;align-items:center" class="ASide__MenuItemWrapper-sc-8thiw8-0 sGYsr"><img alt="Projets" src="/images/icons/bulb.svg" width="20" style="margin:0 10px 0 0px;margin-top:-3px"/>Projets</div></a>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/CGU](https://covid-19.sante.gouv.fr/CGU)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://covid-projets.fabrique.social.gouv.fr" target="_blank"><div aria-label="Projets innovants" style="display:flex;align-items:center" class="ASide__MenuItemWrapper-sc-8thiw8-0 sGYsr"><img alt="Projets" src="/images/icons/bulb.svg" width="20" style="margin:0 10px 0 0px;margin-top:-3px"/>Projets</div></a>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com](https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://covid-projets.fabrique.social.gouv.fr" target="_blank"><div aria-label="Projets innovants" style="display:flex;align-items:center" class="ASide__MenuItemWrapper-sc-8thiw8-0 sGYsr"><img alt="Projets" src="/images/icons/bulb.svg" width="20" style="margin:0 10px 0 0px;margin-top:-3px"/>Projets</div></a>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/politique-de-confidentialite](https://covid-19.sante.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://covid-projets.fabrique.social.gouv.fr" target="_blank"><div aria-label="Projets innovants" style="display:flex;align-items:center" class="ASide__MenuItemWrapper-sc-8thiw8-0 sGYsr"><img alt="Projets" src="/images/icons/bulb.svg" width="20" style="margin:0 10px 0 0px;margin-top:-3px"/>Projets</div></a>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr](https://covid-19.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://covid-projets.fabrique.social.gouv.fr" target="_blank"><div aria-label="Projets innovants" style="display:flex;align-items:center" class="ASide__MenuItemWrapper-sc-8thiw8-0 sGYsr"><img alt="Projets" src="/images/icons/bulb.svg" width="20" style="margin:0 10px 0 0px;margin-top:-3px"/>Projets</div></a>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://covid-projets.fabrique.social.gouv.fr" target="_blank"><div aria-label="Projets innovants" style="display:flex;align-items:center" class="ASide__MenuItemWrapper-sc-8thiw8-0 sGYsr"><img alt="Projets" src="/images/icons/bulb.svg" width="20" style="margin:0 10px 0 0px;margin-top:-3px"/>Projets</div></a>`
  
  
  
  
Instances: 8
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login](https://covid-19.sante.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="">`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com](https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="">`
  
  
  
  
Instances: 2
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "username" "password" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### CSP: Notices
##### Low (Medium)
  
  
  
  
#### Description
<p>Errors:</p><p>1:492: Expecting uri-reference but found "https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=".</p><p>Info Items:</p><p>1:481: A draft of the next version of CSP deprecates report-uri in favour of a new report-to directive.</p><p></p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/sitemap.xml](https://covid-19.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; worker-src 'self' blob:; script-src 'self' https://matomo.fabrique.social.gouv.fr; frame-src https://matomo.fabrique.social.gouv.fr https://covid-tests-kibana.fabrique.social.gouv.fr https://waked.fabrique.social.gouv.fr https://airtable.com/; connect-src 'self' https://*.gouv.fr https://api.mapbox.com https://events.mapbox.com; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.gouv.fr https://matomo.fabrique.social.gouv.fr; report-uri https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; worker-src 'self' blob:; script-src 'self' https://matomo.fabrique.social.gouv.fr; frame-src https://matomo.fabrique.social.gouv.fr https://covid-tests-kibana.fabrique.social.gouv.fr https://waked.fabrique.social.gouv.fr https://airtable.com/; connect-src 'self' https://*.gouv.fr https://api.mapbox.com https://events.mapbox.com; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.gouv.fr https://matomo.fabrique.social.gouv.fr; report-uri https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr](https://covid-19.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; worker-src 'self' blob:; script-src 'self' https://matomo.fabrique.social.gouv.fr; frame-src https://matomo.fabrique.social.gouv.fr https://covid-tests-kibana.fabrique.social.gouv.fr https://waked.fabrique.social.gouv.fr https://airtable.com/; connect-src 'self' https://*.gouv.fr https://api.mapbox.com https://events.mapbox.com; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.gouv.fr https://matomo.fabrique.social.gouv.fr; report-uri https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Other information
<p>The response contained multiple CSP headers, one or more of them contained a report-uri directive and therefore they could not be merged. The first identified header/policy was analyzed.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/f655c2139f896521d1241bf2cf50e08090c9ece1.a76a9a72a9b05cdd0e65.js](https://covid-19.sante.gouv.fr/_next/static/chunks/f655c2139f896521d1241bf2cf50e08090c9ece1.a76a9a72a9b05cdd0e65.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/0772ae331c3d42b541ad5c1e01cd9cfefbd0bab4.b4f0087deb8118709808.js](https://covid-19.sante.gouv.fr/_next/static/chunks/0772ae331c3d42b541ad5c1e01cd9cfefbd0bab4.b4f0087deb8118709808.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://covid-19.sante.gouv.fr/CGU](https://covid-19.sante.gouv.fr/CGU)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/main-021ccc3ef87e5ad52e26.js](https://covid-19.sante.gouv.fr/_next/static/chunks/main-021ccc3ef87e5ad52e26.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login](https://covid-19.sante.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/a8e31736.d9b5cab612edccd35bfc.js](https://covid-19.sante.gouv.fr/_next/static/chunks/a8e31736.d9b5cab612edccd35bfc.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/sitemap.xml](https://covid-19.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/webpack-a6606f2985ee8a0e3455.js](https://covid-19.sante.gouv.fr/_next/static/chunks/webpack-a6606f2985ee8a0e3455.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/mentions-legales](https://covid-19.sante.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/politique-de-confidentialite](https://covid-19.sante.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr](https://covid-19.sante.gouv.fr)
  
  
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
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/css/3cb66964985f81ed5967.css](https://covid-19.sante.gouv.fr/_next/static/css/3cb66964985f81ed5967.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=31536000, immutable`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/images/icons/database.svg](https://covid-19.sante.gouv.fr/images/icons/database.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/images/icons/bulb.svg](https://covid-19.sante.gouv.fr/images/icons/bulb.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/images/logoMSS.svg](https://covid-19.sante.gouv.fr/images/logoMSS.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/images/icons/house.svg](https://covid-19.sante.gouv.fr/images/icons/house.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/images/icons/flask.svg](https://covid-19.sante.gouv.fr/images/icons/flask.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/robots.txt](https://covid-19.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/images/icons/microscope.svg](https://covid-19.sante.gouv.fr/images/icons/microscope.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/css/8a0fd03bf391385e7f4b.css](https://covid-19.sante.gouv.fr/_next/static/css/8a0fd03bf391385e7f4b.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=31536000, immutable`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/images/icons/search.svg](https://covid-19.sante.gouv.fr/images/icons/search.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/images/icons/water.svg](https://covid-19.sante.gouv.fr/images/icons/water.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Server Leaks Version Information via "Server" HTTP Response Header Field
##### Low (High)
  
  
  
  
#### Description
<p>The web/application server is leaking version information via the "Server" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/politique-de-confidentialite](https://covid-19.sante.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/robots.txt](https://covid-19.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/mentions-legales](https://covid-19.sante.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/CGU](https://covid-19.sante.gouv.fr/CGU)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/sitemap.xml](https://covid-19.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr](https://covid-19.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/favicon.png](https://covid-19.sante.gouv.fr/favicon.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/css/3cb66964985f81ed5967.css](https://covid-19.sante.gouv.fr/_next/static/css/3cb66964985f81ed5967.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/main-021ccc3ef87e5ad52e26.js](https://covid-19.sante.gouv.fr/_next/static/chunks/main-021ccc3ef87e5ad52e26.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login](https://covid-19.sante.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
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

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login](https://covid-19.sante.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `2f92-f7zTcJm0MM5uaJmVo5HN3sSxjNE`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `4219-dadftoHxhhQOoHg7KfE2VsGJLfY`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/mentions-legales](https://covid-19.sante.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `2eba-zmd63p+buswIF6IfKPU0qnf217o`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/robots.txt](https://covid-19.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `3A07cW1ikebg0zwPjuGdTVT74sGRkInqGj`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/sitemap.xml](https://covid-19.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `2ad5-ZA1Pq5By7D+OBL3t5z3Zy0gy608`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com](https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com)
  
  
  * Method: `GET`
  
  
  * Evidence: `2fc3-bZADiPaOzSOmHw03jV0XVpbyaYY`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/CGU](https://covid-19.sante.gouv.fr/CGU)
  
  
  * Method: `GET`
  
  
  * Evidence: `51fe-omRPf9TyyP7JM7EI4Q01+GxwgAg`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/politique-de-confidentialite](https://covid-19.sante.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `3c49-or/sjMgx1767o14gQLL9r+IUUo0`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr](https://covid-19.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `4219-dadftoHxhhQOoHg7KfE2VsGJLfY`
  
  
  
  
Instances: 9
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>��v���M�f��9��fV�G7{\x0012�3D</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### CSP: X-Content-Security-Policy
##### Informational (Medium)
  
  
  
  
#### Description
<p>The header X-Content-Security-Policy was found on this response. While it is a good sign that CSP is implemented to some degree the policy specified in this header has not been analyzed by ZAP. To ensure full support by modern browsers ensure that the Content-Security-Policy header is defined and attached to responses.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; worker-src 'self' blob:; script-src 'self' https://matomo.fabrique.social.gouv.fr; frame-src https://matomo.fabrique.social.gouv.fr https://covid-tests-kibana.fabrique.social.gouv.fr https://waked.fabrique.social.gouv.fr https://airtable.com/; connect-src 'self' https://*.gouv.fr https://api.mapbox.com https://events.mapbox.com; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.gouv.fr https://matomo.fabrique.social.gouv.fr; report-uri https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### CSP: X-WebKit-CSP
##### Informational (Medium)
  
  
  
  
#### Description
<p>The header X-WebKit-CSP was found on this response. While it is a good sign that CSP is implemented to some degree the policy specified in this header has not been analyzed by ZAP. To ensure full support by modern browsers ensure that the Content-Security-Policy header is defined and attached to responses.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-WebKit-CSP`
  
  
  * Evidence: `default-src 'self'; worker-src 'self' blob:; script-src 'self' https://matomo.fabrique.social.gouv.fr; frame-src https://matomo.fabrique.social.gouv.fr https://covid-tests-kibana.fabrique.social.gouv.fr https://waked.fabrique.social.gouv.fr https://airtable.com/; connect-src 'self' https://*.gouv.fr https://api.mapbox.com https://events.mapbox.com; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *.gouv.fr https://matomo.fabrique.social.gouv.fr; report-uri https://0445a2f1b69743d6ac24203c0ad15797@sentry.fabrique.social.gouv.fr/38&sentry_environment=production&sentry_release=`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Sensitive Information in URL
##### Informational (Medium)
  
  
  
  
#### Description
<p>The request appeared to contain sensitive information leaked in the URL. This can violate PCI and most organizational compliance policies. You can configure the list of strings for this check to add or remove values specific to your environment.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com](https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com)
  
  
  * Method: `GET`
  
  
  * Parameter: `username`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com](https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com)
  
  
  * Method: `GET`
  
  
  * Parameter: `password`
  
  
  * Evidence: `password`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com](https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com)
  
  
  * Method: `GET`
  
  
  * Parameter: `username`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
Instances: 3
  
### Solution
<p>Do not pass sensitive information in URIs.</p>
  
### Other information
<p>The URL contains potentially sensitive information. The following string was found via the pattern: user</p><p>username</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/CGU](https://covid-19.sante.gouv.fr/CGU)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/sitemap.xml](https://covid-19.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login](https://covid-19.sante.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/politique-de-confidentialite](https://covid-19.sante.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr](https://covid-19.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/main-021ccc3ef87e5ad52e26.js](https://covid-19.sante.gouv.fr/_next/static/chunks/main-021ccc3ef87e5ad52e26.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/0772ae331c3d42b541ad5c1e01cd9cfefbd0bab4.b4f0087deb8118709808.js](https://covid-19.sante.gouv.fr/_next/static/chunks/0772ae331c3d42b541ad5c1e01cd9cfefbd0bab4.b4f0087deb8118709808.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/mentions-legales](https://covid-19.sante.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/4e08409fd4083d0d5c9975c7190e106b44eb1601.bad0676a3e4b7a09d70b.js](https://covid-19.sante.gouv.fr/_next/static/chunks/4e08409fd4083d0d5c9975c7190e106b44eb1601.bad0676a3e4b7a09d70b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected in the element starting with: "<script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{"user":null},"__N_SSP":true},"page":"/CGU","query":{},", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/politique-de-confidentialite](https://covid-19.sante.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/polyfills-5d497fce9de3d96a2c8f.js](https://covid-19.sante.gouv.fr/_next/static/chunks/polyfills-5d497fce9de3d96a2c8f.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com](https://covid-19.sante.gouv.fr/login?password=ZAP&username=foo-bar%40example.com)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/CGU](https://covid-19.sante.gouv.fr/CGU)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/sitemap.xml](https://covid-19.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login](https://covid-19.sante.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr](https://covid-19.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/mentions-legales](https://covid-19.sante.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
Instances: 10
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>A noScript tag has been found, which is an indication that the application works differently with JavaScript enabled compared to when it is not.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/mentions-legales](https://covid-19.sante.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr](https://covid-19.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/CGU](https://covid-19.sante.gouv.fr/CGU)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/](https://covid-19.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/login](https://covid-19.sante.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/politique-de-confidentialite](https://covid-19.sante.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/main-021ccc3ef87e5ad52e26.js](https://covid-19.sante.gouv.fr/_next/static/chunks/main-021ccc3ef87e5ad52e26.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/css/3cb66964985f81ed5967.css](https://covid-19.sante.gouv.fr/_next/static/css/3cb66964985f81ed5967.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/sitemap.xml](https://covid-19.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Storable but Non-Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users. </p>
  
  
  
* URL: [https://covid-19.sante.gouv.fr/robots.txt](https://covid-19.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/favicon.png](https://covid-19.sante.gouv.fr/favicon.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
Instances: 2
  
### Solution
<p></p>
  
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
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741823`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `67108864`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `268435456`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `134217727`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741825`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `805306368`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `134217728`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `62914560`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741824`
  
  
  
  
* URL: [https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js](https://covid-19.sante.gouv.fr/_next/static/chunks/framework.5f9e0a15d15c47079590.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `33554432`
  
  
  
  
Instances: 10
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1073741823, which evaluates to: 2004-01-10 13:37:03</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
