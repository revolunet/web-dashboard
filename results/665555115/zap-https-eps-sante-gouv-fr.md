
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:27:37


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 5 |
| Informational | 4 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| CSP: script-src unsafe-inline | Medium | 3 | 
| CSP: style-src unsafe-inline | Medium | 3 | 
| CSP: Wildcard Directive | Medium | 3 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Dangerous JS Functions | Low | 1 | 
| Feature Policy Header Not Set | Low | 2 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 8 | 
| X-Content-Type-Options Header Missing | Low | 6 | 
| Base64 Disclosure | Informational | 3 | 
| Information Disclosure - Suspicious Comments | Informational | 1 | 
| Modern Web Application | Informational | 4 | 
| Non-Storable Content | Informational | 11 | 

## Alert Detail


  
  
  
  
### CSP: script-src unsafe-inline
##### Medium (Medium)
  
  
  
  
#### Description
<p>script-src includes unsafe-inline.</p>
  
  
  
* URL: [https://eps.sante.gouv.fr/v2/api-docs/](https://eps.sante.gouv.fr/v2/api-docs/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/](https://eps.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:`
  
  
  
  
* URL: [https://eps.sante.gouv.fr](https://eps.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:`
  
  
  
  
Instances: 3
  
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

  
  
  
  
### CSP: style-src unsafe-inline
##### Medium (Medium)
  
  
  
  
#### Description
<p>style-src includes unsafe-inline.</p>
  
  
  
* URL: [https://eps.sante.gouv.fr](https://eps.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/](https://eps.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/v2/api-docs/](https://eps.sante.gouv.fr/v2/api-docs/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:`
  
  
  
  
Instances: 3
  
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

  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>frame-ancestors, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://eps.sante.gouv.fr](https://eps.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/](https://eps.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/v2/api-docs/](https://eps.sante.gouv.fr/v2/api-docs/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:`
  
  
  
  
Instances: 3
  
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

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://eps.sante.gouv.fr](https://eps.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgos-eps.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgos-eps.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/](https://eps.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgos-eps.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgos-eps.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/robots.txt](https://eps.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgos-eps.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgos-eps.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://eps.sante.gouv.fr/app/polyfills.f8cadadd05c611d96325.bundle.js](https://eps.sante.gouv.fr/app/polyfills.f8cadadd05c611d96325.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
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
  
  
  
* URL: [https://eps.sante.gouv.fr/app/global.f8cadadd05c611d96325.bundle.js](https://eps.sante.gouv.fr/app/global.f8cadadd05c611d96325.bundle.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/app/polyfills.f8cadadd05c611d96325.bundle.js](https://eps.sante.gouv.fr/app/polyfills.f8cadadd05c611d96325.bundle.js)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://eps.sante.gouv.fr/content/css/loading.css](https://eps.sante.gouv.fr/content/css/loading.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=126230400000, public`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/content/global.6fe104d57cdbed5ef6aa.css](https://eps.sante.gouv.fr/content/global.6fe104d57cdbed5ef6aa.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=126230400000, public`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/content/global.6fe104d57cdbed5ef6aa.css](https://eps.sante.gouv.fr/content/global.6fe104d57cdbed5ef6aa.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Pragma`
  
  
  * Evidence: `cache`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/content/css/loading.css](https://eps.sante.gouv.fr/content/css/loading.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Pragma`
  
  
  * Evidence: `cache`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/content/main.d74a6b2f7a36c260d8b2.css](https://eps.sante.gouv.fr/content/main.d74a6b2f7a36c260d8b2.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Pragma`
  
  
  * Evidence: `cache`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/content/css/material-icons.css](https://eps.sante.gouv.fr/content/css/material-icons.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=126230400000, public`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/content/css/material-icons.css](https://eps.sante.gouv.fr/content/css/material-icons.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Pragma`
  
  
  * Evidence: `cache`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/content/main.d74a6b2f7a36c260d8b2.css](https://eps.sante.gouv.fr/content/main.d74a6b2f7a36c260d8b2.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=126230400000, public`
  
  
  
  
Instances: 8
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://eps.sante.gouv.fr/content/css/material-icons.css](https://eps.sante.gouv.fr/content/css/material-icons.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/content/main.d74a6b2f7a36c260d8b2.css](https://eps.sante.gouv.fr/content/main.d74a6b2f7a36c260d8b2.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/app/global.f8cadadd05c611d96325.bundle.js](https://eps.sante.gouv.fr/app/global.f8cadadd05c611d96325.bundle.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/content/global.6fe104d57cdbed5ef6aa.css](https://eps.sante.gouv.fr/content/global.6fe104d57cdbed5ef6aa.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/content/css/loading.css](https://eps.sante.gouv.fr/content/css/loading.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/app/polyfills.f8cadadd05c611d96325.bundle.js](https://eps.sante.gouv.fr/app/polyfills.f8cadadd05c611d96325.bundle.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://eps.sante.gouv.fr/robots.txt](https://eps.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `P9HLgQTeeixVGLEqJlLL3fNyljz02deiJQWlDmgGke1fYHJrRlTZFzVSYILZ8NqIHJiJxptOp6ACEU6twCUClsgrXas=`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/](https://eps.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `KH+Qp+Ll5UBf91gqJlLL3fNyljz02Z4twol6HdS20UTxCL88CCy46P3TfzMgN5XzeX6PehfHzOOtMVy3kgOuRQYWaWM=`
  
  
  
  
* URL: [https://eps.sante.gouv.fr](https://eps.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `TEiXZwfndCB7p+AqJlLL3fNyljz02bhcMGaaEpRbsVFRFRrpH13OCUHca6PL7lScnNCy5PeFkANuS+1j+kgrR3fdxHo=`
  
  
  
  
Instances: 3
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>?�ˁ\x0004�z,U\x0018�*&R���r�<��ע%\x0005�\x000eh\x0006��_`rkFT�\x00175R`���ڈ\x001c��ƛN��\x0002\x0011N��%\x0002��+]�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://eps.sante.gouv.fr/app/polyfills.f8cadadd05c611d96325.bundle.js](https://eps.sante.gouv.fr/app/polyfills.f8cadadd05c611d96325.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
Instances: 1
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected in the element starting with: "!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://eps.sante.gouv.fr/](https://eps.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" language="javascript">
        // show an error message if the app loading takes more than 5 sec
        window.onload=function() {
            setTimeout(showError, 4000);
        }
        function showError() {
            var errorElm = document.getElementById("jhipster-error");
            if (errorElm && errorElm.style) {
                errorElm.style.display = "block";
            }
        }
    </script>`
  
  
  
  
* URL: [https://eps.sante.gouv.fr](https://eps.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" language="javascript">
        // show an error message if the app loading takes more than 5 sec
        window.onload=function() {
            setTimeout(showError, 4000);
        }
        function showError() {
            var errorElm = document.getElementById("jhipster-error");
            if (errorElm && errorElm.style) {
                errorElm.style.display = "block";
            }
        }
    </script>`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/app/polyfills.f8cadadd05c611d96325.bundle.js](https://eps.sante.gouv.fr/app/polyfills.f8cadadd05c611d96325.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/v2/api-docs/](https://eps.sante.gouv.fr/v2/api-docs/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" language="javascript">
        // show an error message if the app loading takes more than 5 sec
        window.onload=function() {
            setTimeout(showError, 4000);
        }
        function showError() {
            var errorElm = document.getElementById("jhipster-error");
            if (errorElm && errorElm.style) {
                errorElm.style.display = "block";
            }
        }
    </script>`
  
  
  
  
Instances: 4
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>No links have been found while there are scripts, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://eps.sante.gouv.fr/api/audits/](https://eps.sante.gouv.fr/api/audits/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/](https://eps.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/sitemap.xml](https://eps.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/api/account/sessions](https://eps.sante.gouv.fr/api/account/sessions)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/api/users/](https://eps.sante.gouv.fr/api/users/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://eps.sante.gouv.fr](https://eps.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/api/account](https://eps.sante.gouv.fr/api/account)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/api/logs/](https://eps.sante.gouv.fr/api/logs/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/api/account/change-password](https://eps.sante.gouv.fr/api/account/change-password)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/robots.txt](https://eps.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://eps.sante.gouv.fr/management/](https://eps.sante.gouv.fr/management/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
Instances: 11
  
### Solution
<p>The content may be marked as storable by ensuring that the following conditions are satisfied:</p><p>The request method must be understood by the cache and defined as being cacheable ("GET", "HEAD", and "POST" are currently defined as cacheable)</p><p>The response status code must be understood by the cache (one of the 1XX, 2XX, 3XX, 4XX, or 5XX response classes are generally understood)</p><p>The "no-store" cache directive must not appear in the request or response header fields</p><p>For caching by "shared" caches such as "proxy" caches, the "private" response directive must not appear in the response</p><p>For caching by "shared" caches such as "proxy" caches, the "Authorization" header field must not appear in the request, unless the response explicitly allows it (using one of the "must-revalidate", "public", or "s-maxage" Cache-Control response directives)</p><p>In addition to the conditions above, at least one of the following conditions must also be satisfied by the response:</p><p>It must contain an "Expires" header field</p><p>It must contain a "max-age" response directive</p><p>For "shared" caches such as "proxy" caches, it must contain a "s-maxage" response directive</p><p>It must contain a "Cache Control Extension" that allows it to be cached</p><p>It must have a status code that is defined as cacheable by default (200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501).   </p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3
