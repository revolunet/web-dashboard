
# ZAP Scanning Report

Generated on Mon, 22 Mar 2021 08:18:31


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 7 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Application Error Disclosure | Medium | 1 | 
| Content Security Policy (CSP) Header Not Set | Medium | 9 | 
| Source Code Disclosure - SQL | Medium | 1 | 
| X-Frame-Options Header Not Set | Medium | 5 | 
| Absence of Anti-CSRF Tokens | Low | 1 | 
| Dangerous JS Functions | Low | 3 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 6 | 
| Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) | Low | 11 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 10 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Storable and Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 12 | 

## Alert Detail


  
  
  
  
### Application Error Disclosure
##### Medium (Medium)
  
  
  
  
#### Description
<p>This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.</p>
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-a41934d93c9f01c3de50.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-a41934d93c9f01c3de50.js)
  
  
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

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr](https://sample-next-app.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page3](https://sample-next-app.fabrique.social.gouv.fr/page3)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/robots.txt](https://sample-next-app.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/favicon.ico](https://sample-next-app.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml](https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/](https://sample-next-app.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page2](https://sample-next-app.fabrique.social.gouv.fr/page2)
  
  
  * Method: `GET`
  
  
  
  
Instances: 9
  
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

  
  
  
  
### Source Code Disclosure - SQL
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - SQL</p>
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-a41934d93c9f01c3de50.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-a41934d93c9f01c3de50.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `SELECT name FROM sqlite_master WHERE type`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>SELECT name FROM sqlite_master WHERE type</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr](https://sample-next-app.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page2](https://sample-next-app.fabrique.social.gouv.fr/page2)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/](https://sample-next-app.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="">`
  
  
  
  
Instances: 1
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "formBasicPassword" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.7ee31ee9a6c4a4dcba57.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.7ee31ee9a6c4a4dcba57.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/pages/admin-153c7323c47ced799c8b.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/pages/admin-153c7323c47ced799c8b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
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
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml](https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page3](https://sample-next-app.fabrique.social.gouv.fr/page3)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page2](https://sample-next-app.fabrique.social.gouv.fr/page2)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/](https://sample-next-app.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/favicon.ico](https://sample-next-app.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr](https://sample-next-app.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/robots.txt](https://sample-next-app.fabrique.social.gouv.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/](https://sample-next-app.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page2](https://sample-next-app.fabrique.social.gouv.fr/page2)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr](https://sample-next-app.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css](https://sample-next-app.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=31536000, immutable`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/favicon.ico](https://sample-next-app.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/](https://sample-next-app.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/robots.txt](https://sample-next-app.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr](https://sample-next-app.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css](https://sample-next-app.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Express`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml](https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page3](https://sample-next-app.fabrique.social.gouv.fr/page3)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Express`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page2](https://sample-next-app.fabrique.social.gouv.fr/page2)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
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
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/robots.txt](https://sample-next-app.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page2](https://sample-next-app.fabrique.social.gouv.fr/page2)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css](https://sample-next-app.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr](https://sample-next-app.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml](https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/favicon.ico](https://sample-next-app.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/](https://sample-next-app.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page3](https://sample-next-app.fabrique.social.gouv.fr/page3)
  
  
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
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css](https://sample-next-app.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr](https://sample-next-app.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/268e00513c8677492851e6cbb0fdc9972b5d7e28.0d8565ee80113da56ea8.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/268e00513c8677492851e6cbb0fdc9972b5d7e28.0d8565ee80113da56ea8.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/bf182f2483b3988147ad28519374cb39c5c5d1d3.bce5927e7ffd99daa2c6.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/bf182f2483b3988147ad28519374cb39c5c5d1d3.bce5927e7ffd99daa2c6.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page2](https://sample-next-app.fabrique.social.gouv.fr/page2)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/](https://sample-next-app.fabrique.social.gouv.fr/)
  
  
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
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  * Evidence: `1484-8IXj2rEfixhYVtUPQwyK4CGUX8s`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr](https://sample-next-app.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `11ca-X10j9T/97w+gSFKEUMMhxOKePKo`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/robots.txt](https://sample-next-app.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `107c-St/wtaxQhyJcGIoC0oui0OD1+BU`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `1383-AmeFZ40EUEauKt+9k/gSm8Dt5oU`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page2](https://sample-next-app.fabrique.social.gouv.fr/page2)
  
  
  * Method: `GET`
  
  
  * Evidence: `1009-ebAWn/s0fkMT7f+1uxc2Uo6NtMo`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/favicon.ico](https://sample-next-app.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `107c-St/wtaxQhyJcGIoC0oui0OD1+BU`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-a41934d93c9f01c3de50.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/pages/_error-a41934d93c9f01c3de50.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/](https://sample-next-app.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `11ca-X10j9T/97w+gSFKEUMMhxOKePKo`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page3](https://sample-next-app.fabrique.social.gouv.fr/page3)
  
  
  * Method: `GET`
  
  
  * Evidence: `107c-St/wtaxQhyJcGIoC0oui0OD1+BU`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml](https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `107c-St/wtaxQhyJcGIoC0oui0OD1+BU`
  
  
  
  
Instances: 10
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>׏8��\x0017�j�~,aa[T=\x000c2+��Q,</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page3](https://sample-next-app.fabrique.social.gouv.fr/page3)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/robots.txt](https://sample-next-app.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml](https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/favicon.ico](https://sample-next-app.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/](https://sample-next-app.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr](https://sample-next-app.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page2](https://sample-next-app.fabrique.social.gouv.fr/page2)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected in the element starting with: "<script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{}},"page":"/login","query":{},"buildId":"LMtLRgqmojU60", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/robots.txt](https://sample-next-app.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr](https://sample-next-app.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page3](https://sample-next-app.fabrique.social.gouv.fr/page3)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page2](https://sample-next-app.fabrique.social.gouv.fr/page2)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/polyfills-040103c5c51c5268569e.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/polyfills-040103c5c51c5268569e.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml](https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/](https://sample-next-app.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/favicon.ico](https://sample-next-app.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
Instances: 11
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>No links have been found while there are scripts, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml](https://sample-next-app.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/robots.txt](https://sample-next-app.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/favicon.ico](https://sample-next-app.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr](https://sample-next-app.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/login](https://sample-next-app.fabrique.social.gouv.fr/login)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page2](https://sample-next-app.fabrique.social.gouv.fr/page2)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/main-b512ccd88ef15102444a.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/](https://sample-next-app.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/page3](https://sample-next-app.fabrique.social.gouv.fr/page3)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css](https://sample-next-app.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
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
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `805306368`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741823`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741825`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `134217728`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `62914560`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  * Evidence: `262258727`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741824`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `268435456`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `33554432`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/admin](https://sample-next-app.fabrique.social.gouv.fr/admin)
  
  
  * Method: `GET`
  
  
  * Evidence: `68214899`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `67108864`
  
  
  
  
* URL: [https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js](https://sample-next-app.fabrique.social.gouv.fr/_next/static/chunks/framework.ae55bf7e6c20d673e3c3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `134217727`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>805306368, which evaluates to: 1995-07-09 16:12:48</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
