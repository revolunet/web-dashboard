
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:54:18


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 3 |
| Informational | 4 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| CSP: script-src unsafe-inline | Medium | 3 | 
| CSP: style-src unsafe-inline | Medium | 3 | 
| CSP: Wildcard Directive | Medium | 3 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Feature Policy Header Not Set | Low | 1 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 3 | 
| Base64 Disclosure | Informational | 4 | 
| Modern Web Application | Informational | 3 | 
| Non-Storable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 1 | 

## Alert Detail


  
  
  
  
### CSP: script-src unsafe-inline
##### Medium (Medium)
  
  
  
  
#### Description
<p>script-src includes unsafe-inline.</p>
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/](https://renfortrh.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' https://2953234.fls.doubleclick.net data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' https://*.basemaps.cartocdn.com data:; font-src 'self' https://fonts.gstatic.com data:`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/v2/api-docs/](https://renfortrh.solidarites-sante.gouv.fr/v2/api-docs/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' https://2953234.fls.doubleclick.net data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' https://*.basemaps.cartocdn.com data:; font-src 'self' https://fonts.gstatic.com data:`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr](https://renfortrh.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' https://2953234.fls.doubleclick.net data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' https://*.basemaps.cartocdn.com data:; font-src 'self' https://fonts.gstatic.com data:`
  
  
  
  
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
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/v2/api-docs/](https://renfortrh.solidarites-sante.gouv.fr/v2/api-docs/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' https://2953234.fls.doubleclick.net data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' https://*.basemaps.cartocdn.com data:; font-src 'self' https://fonts.gstatic.com data:`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/](https://renfortrh.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' https://2953234.fls.doubleclick.net data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' https://*.basemaps.cartocdn.com data:; font-src 'self' https://fonts.gstatic.com data:`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr](https://renfortrh.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' https://2953234.fls.doubleclick.net data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' https://*.basemaps.cartocdn.com data:; font-src 'self' https://fonts.gstatic.com data:`
  
  
  
  
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
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/](https://renfortrh.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' https://2953234.fls.doubleclick.net data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' https://*.basemaps.cartocdn.com data:; font-src 'self' https://fonts.gstatic.com data:`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/v2/api-docs/](https://renfortrh.solidarites-sante.gouv.fr/v2/api-docs/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' https://2953234.fls.doubleclick.net data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' https://*.basemaps.cartocdn.com data:; font-src 'self' https://fonts.gstatic.com data:`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr](https://renfortrh.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'self'; frame-src 'self' https://2953234.fls.doubleclick.net data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' https://*.basemaps.cartocdn.com data:; font-src 'self' https://fonts.gstatic.com data:`
  
  
  
  
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
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/robots.txt](https://renfortrh.solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgs-rrh.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgs-rrh.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/](https://renfortrh.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgs-rrh.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgs-rrh.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr](https://renfortrh.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgs-rrh.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgs-rrh.cegedim.cloud-HTTP`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/app/global.0644e8ade492c2f224dc.bundle.js](https://renfortrh.solidarites-sante.gouv.fr/app/global.0644e8ade492c2f224dc.bundle.js)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/content/main.51a3af7a38334081cd45.css](https://renfortrh.solidarites-sante.gouv.fr/content/main.51a3af7a38334081cd45.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/content/css/loading.css](https://renfortrh.solidarites-sante.gouv.fr/content/css/loading.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/content/global.1db9777e4cf4eb5ab9a7.css](https://renfortrh.solidarites-sante.gouv.fr/content/global.1db9777e4cf4eb5ab9a7.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 3
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/](https://renfortrh.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `+0ezL7DeqG8s+ncqJlLL3fNyljz02f6KRjkNoe2FRszvskBigEX1PcHW3x1+1HNJzBpqAyFPfqoaDtSTtyk5xKbKZGI=`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/content/main.51a3af7a38334081cd45.css](https://renfortrh.solidarites-sante.gouv.fr/content/main.51a3af7a38334081cd45.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAJ1BMVEVmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaP/QSjAAAADHRSTlMAAgMJC0uWpKa6wMxMdjkoAAAANUlEQVR4AeXJyQEAERAAsNl7Hf3X6xt0QL6JpZWq30pdvdadme+0PMdzvHm8YThHcT1H7K0BtOMDniZhWOgAAAAASUVORK5CYII=`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/robots.txt](https://renfortrh.solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `25ICQMvyyGkTaAQqJlLL3fNyljz02Z4BXECo5r9mlI2vL27S3G3PfaVphyccmxaykdn3oTTy4WCE192bB3fkSIsP0Xc=`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr](https://renfortrh.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `CyPBsIMm/TIf+nQqJlLL3fNyljz02bXKbj4nL2sNsfVBcnSwU7z9+OhAuzayYZv5f/NuGGwx26jkAfIXD0U6C1YWR0Q=`
  
  
  
  
Instances: 4
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�G�/�ިo,�w*&R���r�<����F9
��F��@b�E�=���\x001d~�sI�\x001aj\x0003!O~�\x001a\x000eԓ�)9Ħ�db</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr](https://renfortrh.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
        <h1>You must enable javascript to view this page.</h1>
    </noscript>`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/](https://renfortrh.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
        <h1>You must enable javascript to view this page.</h1>
    </noscript>`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/v2/api-docs/](https://renfortrh.solidarites-sante.gouv.fr/v2/api-docs/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
        <h1>You must enable javascript to view this page.</h1>
    </noscript>`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/api/account](https://renfortrh.solidarites-sante.gouv.fr/api/account)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/robots.txt](https://renfortrh.solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/api/logs/](https://renfortrh.solidarites-sante.gouv.fr/api/logs/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/management/](https://renfortrh.solidarites-sante.gouv.fr/management/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/api/audits/](https://renfortrh.solidarites-sante.gouv.fr/api/audits/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/api/users/](https://renfortrh.solidarites-sante.gouv.fr/api/users/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr](https://renfortrh.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/api/account/change-password](https://renfortrh.solidarites-sante.gouv.fr/api/account/change-password)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/api/account/sessions](https://renfortrh.solidarites-sante.gouv.fr/api/account/sessions)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/](https://renfortrh.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/sitemap.xml](https://renfortrh.solidarites-sante.gouv.fr/sitemap.xml)
  
  
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

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://renfortrh.solidarites-sante.gouv.fr/content/main.51a3af7a38334081cd45.css](https://renfortrh.solidarites-sante.gouv.fr/content/main.51a3af7a38334081cd45.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `70710678`
  
  
  
  
Instances: 1
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>70710678, which evaluates to: 1972-03-29 09:51:18</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
