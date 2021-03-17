
# ZAP Scanning Report

Generated on Wed, 17 Mar 2021 14:55:58


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 3 |
| Low | 7 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 3 | 
| Application Error Disclosure | Medium | 3 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| X-Frame-Options Header Not Set | Medium | 11 | 
| Cookie Without SameSite Attribute | Low | 1 | 
| Dangerous JS Functions | Low | 9 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 1 | 
| Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) | Low | 11 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 4 | 
| Storable and Cacheable Content | Informational | 6 | 
| Storable but Non-Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 42 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/stats-8805ef1f05b2e3ee2e87.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/stats-8805ef1f05b2e3ee2e87.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `5279440789473684`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/stats-8805ef1f05b2e3ee2e87.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/stats-8805ef1f05b2e3ee2e87.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `4933717105263159`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/stats-8805ef1f05b2e3ee2e87.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/stats-8805ef1f05b2e3ee2e87.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `5454545454545454`
  
  
  
  
Instances: 3
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Mastercard</p><p>Bank Identification Number: 527944</p><p>Brand: MASTERCARD</p><p>Category: </p><p>Issuer: DC CARD CO., LTD.</p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Application Error Disclosure
##### Medium (Medium)
  
  
  
  
#### Description
<p>This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.</p>
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/f057a831.07e905266fc15d10cb24.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/f057a831.07e905266fc15d10cb24.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Type mismatch`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/team/%5Bslug%5D-9d7ba462c6bd10550a89.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/team/%5Bslug%5D-9d7ba462c6bd10550a89.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `internal error`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-b4c8843821f69eb8eef3.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-b4c8843821f69eb8eef3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Internal Server Error`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/archifiltre](https://carnets.fabrique.social.gouv.fr/team/archifiltre)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/domifa](https://carnets.fabrique.social.gouv.fr/team/domifa)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/egapro](https://carnets.fabrique.social.gouv.fr/team/egapro)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/diversite](https://carnets.fabrique.social.gouv.fr/team/diversite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr](https://carnets.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/sitemap.xml](https://carnets.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/code-du-travail](https://carnets.fabrique.social.gouv.fr/team/code-du-travail)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/stats](https://carnets.fabrique.social.gouv.fr/stats)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/didoc](https://carnets.fabrique.social.gouv.fr/team/didoc)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/robots.txt](https://carnets.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
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

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/archifiltre](https://carnets.fabrique.social.gouv.fr/team/archifiltre)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/code-du-travail](https://carnets.fabrique.social.gouv.fr/team/code-du-travail)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/diversite](https://carnets.fabrique.social.gouv.fr/team/diversite)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr](https://carnets.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/didoc](https://carnets.fabrique.social.gouv.fr/team/didoc)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/fce](https://carnets.fabrique.social.gouv.fr/team/fce)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/egapro](https://carnets.fabrique.social.gouv.fr/team/egapro)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/domifa](https://carnets.fabrique.social.gouv.fr/team/domifa)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/stats](https://carnets.fabrique.social.gouv.fr/stats)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/emjpm](https://carnets.fabrique.social.gouv.fr/team/emjpm)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/api/auth0/login](https://carnets.fabrique.social.gouv.fr/api/auth0/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `a0:state`
  
  
  * Evidence: `Set-Cookie: a0:state`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/team/%5Bslug%5D-9d7ba462c6bd10550a89.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/team/%5Bslug%5D-9d7ba462c6bd10550a89.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/29107295.9cbd20920f2882339096.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/29107295.9cbd20920f2882339096.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/passpreservatif](https://carnets.fabrique.social.gouv.fr/team/passpreservatif)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/f057a831.07e905266fc15d10cb24.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/f057a831.07e905266fc15d10cb24.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/stats-8805ef1f05b2e3ee2e87.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/stats-8805ef1f05b2e3ee2e87.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/18757a09140be28c069cf093ec51458f5b2212e6.f083599bb8b5ce2ee2a7.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/18757a09140be28c069cf093ec51458f5b2212e6.f083599bb8b5ce2ee2a7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/210e6083.ecfd90fb6cda5bd33655.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/210e6083.ecfd90fb6cda5bd33655.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/framework.961dfccba0085b004a12.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/framework.961dfccba0085b004a12.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_app-8a5820709f78ec27a8cc.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_app-8a5820709f78ec27a8cc.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/stats](https://carnets.fabrique.social.gouv.fr/stats)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/robots.txt](https://carnets.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/commons.cc959aa391637e5ccf4b.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/commons.cc959aa391637e5ccf4b.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/framework.961dfccba0085b004a12.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/framework.961dfccba0085b004a12.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/sitemap.xml](https://carnets.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr](https://carnets.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/17a2498e3431740faa48fc1e837c99d787d228fc.e53446d83d615a0ab12c.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/17a2498e3431740faa48fc1e837c99d787d228fc.e53446d83d615a0ab12c.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-b4c8843821f69eb8eef3.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-b4c8843821f69eb8eef3.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/main-f586b8426c1f756d18d1.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/main-f586b8426c1f756d18d1.js)
  
  
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
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/css/b8214223318f2fb72dd6.css](https://carnets.fabrique.social.gouv.fr/_next/static/css/b8214223318f2fb72dd6.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=31536000, immutable`
  
  
  
  
Instances: 1
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s)
##### Low (Medium)
  
  
  
  
#### Description
<p>The web/application server is leaking information via one or more "X-Powered-By" HTTP response headers. Access to such information may facilitate attackers identifying other frameworks/components your web application is reliant upon and the vulnerabilities such components may be subject to.</p>
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr](https://carnets.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/sitemap.xml](https://carnets.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/code-du-travail](https://carnets.fabrique.social.gouv.fr/team/code-du-travail)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/archifiltre](https://carnets.fabrique.social.gouv.fr/team/archifiltre)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/robots.txt](https://carnets.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/diversite](https://carnets.fabrique.social.gouv.fr/team/diversite)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/domifa](https://carnets.fabrique.social.gouv.fr/team/domifa)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/egapro](https://carnets.fabrique.social.gouv.fr/team/egapro)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/didoc](https://carnets.fabrique.social.gouv.fr/team/didoc)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/stats](https://carnets.fabrique.social.gouv.fr/stats)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to suppress "X-Powered-By" headers.</p>
  
### Reference
* http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspx
* http://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Server Leaks Version Information via "Server" HTTP Response Header Field
##### Low (High)
  
  
  
  
#### Description
<p>The web/application server is leaking version information via the "Server" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.</p>
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/stats](https://carnets.fabrique.social.gouv.fr/stats)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/main-f586b8426c1f756d18d1.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/main-f586b8426c1f756d18d1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/commons.cc959aa391637e5ccf4b.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/commons.cc959aa391637e5ccf4b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/css/b8214223318f2fb72dd6.css](https://carnets.fabrique.social.gouv.fr/_next/static/css/b8214223318f2fb72dd6.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/robots.txt](https://carnets.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/api/auth0/login](https://carnets.fabrique.social.gouv.fr/api/auth0/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr](https://carnets.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/favicon.png](https://carnets.fabrique.social.gouv.fr/favicon.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/sitemap.xml](https://carnets.fabrique.social.gouv.fr/sitemap.xml)
  
  
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

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/main-f586b8426c1f756d18d1.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/main-f586b8426c1f756d18d1.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/17a2498e3431740faa48fc1e837c99d787d228fc.e53446d83d615a0ab12c.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/17a2498e3431740faa48fc1e837c99d787d228fc.e53446d83d615a0ab12c.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-b4c8843821f69eb8eef3.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-b4c8843821f69eb8eef3.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/css/b8214223318f2fb72dd6.css](https://carnets.fabrique.social.gouv.fr/_next/static/css/b8214223318f2fb72dd6.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/framework.961dfccba0085b004a12.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/framework.961dfccba0085b004a12.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/commons.cc959aa391637e5ccf4b.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/commons.cc959aa391637e5ccf4b.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/stats](https://carnets.fabrique.social.gouv.fr/stats)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr](https://carnets.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/favicon.png](https://carnets.fabrique.social.gouv.fr/favicon.png)
  
  
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
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/api/auth0/login](https://carnets.fabrique.social.gouv.fr/api/auth0/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `eyJub25jZSI6IjliYmU0YTQwMDQ3YTlmMTUxMTRhNjQ0MjE5YmZiYTIxIn0`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr](https://carnets.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/SocialGouv/carnets/tree/2f7c23024eeb820ed67aef00bc40e7955111cbf4`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/code-du-travail](https://carnets.fabrique.social.gouv.fr/team/code-du-travail)
  
  
  * Method: `GET`
  
  
  * Evidence: `8e78-WmQU46l4fio3Adt8PeQ0Vjho2/E`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/sitemap.xml](https://carnets.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `64b5-5m8AErH+FhbwjXpRsPVAQzEWZyY`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/stats](https://carnets.fabrique.social.gouv.fr/stats)
  
  
  * Method: `GET`
  
  
  * Evidence: `aa75-LX8Rca3r87msJqLc0lsrnnkGFkg`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/didoc](https://carnets.fabrique.social.gouv.fr/team/didoc)
  
  
  * Method: `GET`
  
  
  * Evidence: `8066-KieG9DhGsjDnOTLoa81A1u9nsgQ`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/diversite](https://carnets.fabrique.social.gouv.fr/team/diversite)
  
  
  * Method: `GET`
  
  
  * Evidence: `84bb-+HvBywrpR/VgrZqc10CD22y520A`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/robots.txt](https://carnets.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `64b5-5m8AErH+FhbwjXpRsPVAQzEWZyY`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/SocialGouv/carnets/tree/2f7c23024eeb820ed67aef00bc40e7955111cbf4`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/archifiltre](https://carnets.fabrique.social.gouv.fr/team/archifiltre)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UClDwrT-Y1NY9WnEiXLMHp6w`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/domifa](https://carnets.fabrique.social.gouv.fr/team/domifa)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/SocialGouv/carnets/tree/2f7c23024eeb820ed67aef00bc40e7955111cbf4`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>{"nonce":"9bbe4a40047a9f15114a644219bfba21"}</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/commons.cc959aa391637e5ccf4b.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/commons.cc959aa391637e5ccf4b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `xxx`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/sitemap.xml](https://carnets.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-b4c8843821f69eb8eef3.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-b4c8843821f69eb8eef3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/17a2498e3431740faa48fc1e837c99d787d228fc.e53446d83d615a0ab12c.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/17a2498e3431740faa48fc1e837c99d787d228fc.e53446d83d615a0ab12c.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/main-f586b8426c1f756d18d1.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/main-f586b8426c1f756d18d1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/stats](https://carnets.fabrique.social.gouv.fr/stats)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/framework.961dfccba0085b004a12.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/framework.961dfccba0085b004a12.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/robots.txt](https://carnets.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_app-8a5820709f78ec27a8cc.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/pages/_app-8a5820709f78ec27a8cc.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr](https://carnets.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `xxx`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected in the element starting with: "(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1],{"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof ", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/code-du-travail](https://carnets.fabrique.social.gouv.fr/team/code-du-travail)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/stats](https://carnets.fabrique.social.gouv.fr/stats)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/robots.txt](https://carnets.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/polyfills-ad30d1320810fa304e64.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/polyfills-ad30d1320810fa304e64.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/didoc](https://carnets.fabrique.social.gouv.fr/team/didoc)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/archifiltre](https://carnets.fabrique.social.gouv.fr/team/archifiltre)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/framework.961dfccba0085b004a12.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/framework.961dfccba0085b004a12.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/sitemap.xml](https://carnets.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/team/diversite](https://carnets.fabrique.social.gouv.fr/team/diversite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr](https://carnets.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr](https://carnets.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/stats](https://carnets.fabrique.social.gouv.fr/stats)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/api/auth0/login](https://carnets.fabrique.social.gouv.fr/api/auth0/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
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
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/robots.txt](https://carnets.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/main-f586b8426c1f756d18d1.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/main-f586b8426c1f756d18d1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/css/b8214223318f2fb72dd6.css](https://carnets.fabrique.social.gouv.fr/_next/static/css/b8214223318f2fb72dd6.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/commons.cc959aa391637e5ccf4b.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/commons.cc959aa391637e5ccf4b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/sitemap.xml](https://carnets.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js](https://carnets.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
Instances: 6
  
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

  
  
  
  
### Storable but Non-Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users. </p>
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/favicon.png](https://carnets.fabrique.social.gouv.fr/favicon.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `48682104`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71835422`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `38190705`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `33058720`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `53531631`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `39261153`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `11486845`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `35037792`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `37538697`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `51801828`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `77614432`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `11160859`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `16664528`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `47273014`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `73166724`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `15727466`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `64467998`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `22575341`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `23516244`
  
  
  
  
* URL: [https://carnets.fabrique.social.gouv.fr/](https://carnets.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `35840889`
  
  
  
  
Instances: 42
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>48682104, which evaluates to: 1971-07-18 10:48:24</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
