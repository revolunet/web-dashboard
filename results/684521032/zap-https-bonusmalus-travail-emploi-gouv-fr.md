
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:08:41


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 5 |
| Informational | 6 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 2 | 
| Vulnerable JS Library | Medium | 1 | 
| Cookie Without SameSite Attribute | Low | 2 | 
| Dangerous JS Functions | Low | 2 | 
| Feature Policy Header Not Set | Low | 7 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 6 | 
| Strict-Transport-Security Header Not Set | Low | 2 | 
| Base64 Disclosure | Informational | 4 | 
| Content-Type Header Missing | Informational | 2 | 
| Information Disclosure - Suspicious Comments | Informational | 2 | 
| Modern Web Application | Informational | 1 | 
| Storable and Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 1 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/](https://bonusmalus.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr](https://bonusmalus.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/](https://bonusmalus.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr](https://bonusmalus.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">`
  
  
  
  
Instances: 2
  
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
<p>The identified library jquery, version 3.4.1.min is vulnerable.</p>
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery-3.4.1.min.js](https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery-3.4.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-3.4.1.min.js`
  
  
  
  
Instances: 1
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2020-11023</p><p>CVE-2020-11022</p><p></p>
  
### Reference
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr](https://bonusmalus.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgefp-aspe.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgefp-aspe.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/](https://bonusmalus.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgefp-aspe.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgefp-aspe.cegedim.cloud-HTTP`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery-3.4.1.min.js](https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery-3.4.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/vendor/modernizr-3.7.1.min.js](https://bonusmalus.travail-emploi.gouv.fr/js/vendor/modernizr-3.7.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery.ba-throttle-debounce.min.js](https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery.ba-throttle-debounce.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/vendor/modernizr-3.7.1.min.js](https://bonusmalus.travail-emploi.gouv.fr/js/vendor/modernizr-3.7.1.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/main.js](https://bonusmalus.travail-emploi.gouv.fr/js/main.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/plugins.js](https://bonusmalus.travail-emploi.gouv.fr/js/plugins.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr](https://bonusmalus.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/](https://bonusmalus.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery-3.4.1.min.js](https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery-3.4.1.min.js)
  
  
  * Method: `GET`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/css/ie9.css](https://bonusmalus.travail-emploi.gouv.fr/css/ie9.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/css/boilerplate.css](https://bonusmalus.travail-emploi.gouv.fr/css/boilerplate.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/css/normalize.css](https://bonusmalus.travail-emploi.gouv.fr/css/normalize.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/](https://bonusmalus.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/css/main.css](https://bonusmalus.travail-emploi.gouv.fr/css/main.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr](https://bonusmalus.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/robots.txt](https://bonusmalus.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/sitemap.xml](https://bonusmalus.travail-emploi.gouv.fr/sitemap.xml)
  
  
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
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr](https://bonusmalus.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `agdxyobTbpUFO+wqJlLL3fNyljz02TOwSbIR2o2SooUhKQunooiHdlIXCSgb/rOLA9/yvMF7Q8HghQZb+8f9mHuSZvw=`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/](https://bonusmalus.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `J5IE2i5W8PJxoDIqJlLL3fNyljz02W8NYN/zc3VxHkmcOFjDw8d5UFovgucA7eB6IZnG2cJnsoqCBRnBKbIM2l563/Q=`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/css/ie9.css](https://bonusmalus.travail-emploi.gouv.fr/css/ie9.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmRlOGY0IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/vendor/modernizr-3.7.1.min.js](https://bonusmalus.travail-emploi.gouv.fr/js/vendor/modernizr-3.7.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==`
  
  
  
  
Instances: 4
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>j\x0007qʆ�n�\x0005;�*&R���r�<��3�I�\x0011ڍ���!)\x000b����vR\x0017	(\x001b���\x0003���{C���\x0006[����{�f�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/robots.txt](https://bonusmalus.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/sitemap.xml](https://bonusmalus.travail-emploi.gouv.fr/sitemap.xml)
  
  
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
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/main.js](https://bonusmalus.travail-emploi.gouv.fr/js/main.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery-3.4.1.min.js](https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery-3.4.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
Instances: 2
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected 3 times, the first in the element starting with: "// Ajoute les options dans le select-box
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
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery-3.4.1.min.js](https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery-3.4.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id='"+k+"'></a>`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery.ba-throttle-debounce.min.js](https://bonusmalus.travail-emploi.gouv.fr/js/vendor/jquery.ba-throttle-debounce.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/sitemap.xml](https://bonusmalus.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/css/normalize.css](https://bonusmalus.travail-emploi.gouv.fr/css/normalize.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/](https://bonusmalus.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr](https://bonusmalus.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/css/main.css](https://bonusmalus.travail-emploi.gouv.fr/css/main.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/robots.txt](https://bonusmalus.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/vendor/modernizr-3.7.1.min.js](https://bonusmalus.travail-emploi.gouv.fr/js/vendor/modernizr-3.7.1.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/css/boilerplate.css](https://bonusmalus.travail-emploi.gouv.fr/css/boilerplate.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/css/ie9.css](https://bonusmalus.travail-emploi.gouv.fr/css/ie9.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/js/plugins.js](https://bonusmalus.travail-emploi.gouv.fr/js/plugins.js)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://bonusmalus.travail-emploi.gouv.fr/css/boilerplate.css](https://bonusmalus.travail-emploi.gouv.fr/css/boilerplate.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `16982510`
  
  
  
  
Instances: 1
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>16982510, which evaluates to: 1970-07-16 13:21:50</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
