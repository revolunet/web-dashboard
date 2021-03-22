
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:22:50


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 8 |
| Informational | 6 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Application Error Disclosure | Medium | 1 | 
| Content Security Policy (CSP) Header Not Set | Medium | 4 | 
| Sub Resource Integrity Attribute Missing | Medium | 10 | 
| X-Frame-Options Header Not Set | Medium | 4 | 
| Cookie Without SameSite Attribute | Low | 2 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 8 | 
| Dangerous JS Functions | Low | 4 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Private IP Disclosure | Low | 1 | 
| Strict-Transport-Security Header Not Set | Low | 3 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 8 | 
| Content-Type Header Missing | Informational | 3 | 
| Information Disclosure - Suspicious Comments | Informational | 13 | 
| Modern Web Application | Informational | 2 | 
| Storable and Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 7 | 

## Alert Detail


  
  
  
  
### Application Error Disclosure
##### Medium (Medium)
  
  
  
  
#### Description
<p>This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.</p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/dc.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/dc.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `internal error`
  
  
  
  
Instances: 1
  
### Solution
<p>Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/aide](https://donnees-formation-js.social.gouv.fr/aide)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/apropos](https://donnees-formation-js.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.6.9/c3.min.css">`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.6.9/c3.min.css">`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/apropos](https://donnees-formation-js.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/aide](https://donnees-formation-js.social.gouv.fr/aide)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/apropos](https://donnees-formation-js.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/aide](https://donnees-formation-js.social.gouv.fr/aide)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`
  
  
  
  
Instances: 10
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/apropos](https://donnees-formation-js.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/aide](https://donnees-formation-js.social.gouv.fr/aide)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 4
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-carto.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-carto.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-carto.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-carto.cegedim.cloud-HTTP`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/apropos](https://donnees-formation-js.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/aide](https://donnees-formation-js.social.gouv.fr/aide)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/aide](https://donnees-formation-js.social.gouv.fr/aide)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/apropos](https://donnees-formation-js.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/crossfilter.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/crossfilter.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/keen.min.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/keen.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/dc.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/dc.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/tether.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/tether.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/aide](https://donnees-formation-js.social.gouv.fr/aide)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/js/autoreload.js](https://donnees-formation-js.social.gouv.fr/static/js/autoreload.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/apropos](https://donnees-formation-js.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.extra-markers.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.extra-markers.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/tether.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/tether.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/queue.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/queue.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/keen.min.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/keen.min.js)
  
  
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
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap-table.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap-table.min.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2592000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/keen-dashboards.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/keen-dashboards.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2592000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/leaflet.extra-markers.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/leaflet.extra-markers.min.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2592000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/css/custom.css](https://donnees-formation-js.social.gouv.fr/static/css/custom.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2592000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/apropos](https://donnees-formation-js.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/aide](https://donnees-formation-js.social.gouv.fr/aide)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/MarkerCluster.Default.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/MarkerCluster.Default.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2592000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/solid.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/solid.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2592000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/fontawesome.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/fontawesome.min.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=2592000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Private IP Disclosure
##### Low (Medium)
  
  
  
  
#### Description
<p>A private IP (such as 10.x.x.x, 172.x.x.x, 192.168.x.x) or an Amazon EC2 private hostname (for example, ip-10-0-56-78) has been found in the HTTP response body. This information might be helpful for further attacks targeting internal systems.</p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/js/map.js](https://donnees-formation-js.social.gouv.fr/static/js/map.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.100.70.120`
  
  
  
  
Instances: 1
  
### Solution
<p>Remove the private IP address from the HTTP response body.  For comments, use JSP/ASP/PHP comment instead of HTML/JavaScript comment which can be seen by client browsers.</p>
  
### Other information
<p>10.100.70.120</p><p></p>
  
### Reference
* https://tools.ietf.org/html/rfc1918

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/%7B%7Bproperties.siteWeb%7D%7D](https://donnees-formation-js.social.gouv.fr/%7B%7Bproperties.siteWeb%7D%7D)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/robots.txt](https://donnees-formation-js.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/sitemap.xml](https://donnees-formation-js.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/MarkerCluster.Default.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/MarkerCluster.Default.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap-table.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap-table.min.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/keen-dashboards.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/keen-dashboards.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/fontawesome.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/fontawesome.min.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/css/custom.css](https://donnees-formation-js.social.gouv.fr/static/css/custom.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/leaflet.extra-markers.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/leaflet.extra-markers.min.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/solid.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/solid.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/aide](https://donnees-formation-js.social.gouv.fr/aide)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/apropos](https://donnees-formation-js.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/bassjobsen/Bootstrap-3-Typeahead`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/apropos](https://donnees-formation-js.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  * Evidence: `sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/aide](https://donnees-formation-js.social.gouv.fr/aide)
  
  
  * Method: `GET`
  
  
  * Evidence: `sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap-table.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap-table.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7X`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/typeahead.bundle.min.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/typeahead.bundle.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `KokOyqHmIOdgEQwqJlLL3fNyljz02bgh4lbCooaAdoMnEHc2Mx38/Zue2jNmoMAZSvgnPWuamjfYWhTEuXfAVyMR470=`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `AJ3KU0fJAZnlpcAqJlLL3fNyljz02TeaYSRG/rcDpxyMu2/zYmicLsJQ1ZxPz5ng/it2A2wUAIx/7iMJkE8hnuEH6Es=`
  
  
  
  
Instances: 8
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>r��m�,���z���l�����ʗ���</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/sitemap.xml](https://donnees-formation-js.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/robots.txt](https://donnees-formation-js.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/%7B%7Bproperties.siteWeb%7D%7D](https://donnees-formation-js.social.gouv.fr/%7B%7Bproperties.siteWeb%7D%7D)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure each page is setting the specific and appropriate content-type value for the content being delivered.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx

  
#### CWE Id : 345
  
#### WASC Id : 12
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/tether.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/tether.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/queue.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/queue.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/keen.min.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/keen.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Query`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/bloodhound.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/bloodhound.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/tether.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/tether.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/bloodhound.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/bloodhound.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 13
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected 3 times, the first in the element starting with: "      // Remove any elements we were using for convenience from the DOM", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/keen.min.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/keen.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/bootstrap3-typeahead.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="dropdown-item" href="#" role="option"></a>`
  
  
  
  
Instances: 2
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/css/custom.css](https://donnees-formation-js.social.gouv.fr/static/css/custom.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=2592000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/sitemap.xml](https://donnees-formation-js.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/%7B%7Bproperties.siteWeb%7D%7D](https://donnees-formation-js.social.gouv.fr/%7B%7Bproperties.siteWeb%7D%7D)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr](https://donnees-formation-js.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/keen-dashboards.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/keen-dashboards.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=2592000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/aide](https://donnees-formation-js.social.gouv.fr/aide)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/robots.txt](https://donnees-formation-js.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/apropos](https://donnees-formation-js.social.gouv.fr/apropos)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap-table.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap-table.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=2592000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/solid.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/solid.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=2592000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/](https://donnees-formation-js.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
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
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap-table.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap-table.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `428571429`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `00000000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `33333333`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `80000000`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js](https://donnees-formation-js.social.gouv.fr/static/lib/js/leaflet.markercluster-src.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `0511287798`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `66666667`
  
  
  
  
* URL: [https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap.min.css](https://donnees-formation-js.social.gouv.fr/static/lib/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `42857143`
  
  
  
  
Instances: 7
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>428571429, which evaluates to: 1983-08-01 07:37:09</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
