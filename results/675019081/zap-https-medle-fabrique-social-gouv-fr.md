
# ZAP Scanning Report

Generated on Mon, 22 Mar 2021 07:47:41


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 2 |
| Low | 7 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 7 | 
| X-Frame-Options Header Not Set | Medium | 5 | 
| Absence of Anti-CSRF Tokens | Low | 3 | 
| Dangerous JS Functions | Low | 7 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 6 | 
| Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) | Low | 7 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 9 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 9 | 
| Storable and Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 1 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/robots.txt](https://medle.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/forgotPassword](https://medle.fabrique.social.gouv.fr/forgotPassword)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/sitemap.xml](https://medle.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/createAccount](https://medle.fabrique.social.gouv.fr/createAccount)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/createAccount](https://medle.fabrique.social.gouv.fr/createAccount)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/forgotPassword](https://medle.fabrique.social.gouv.fr/forgotPassword)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
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
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form data-testid="authent-form" method="post" class="">`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Evidence: `<form data-testid="authent-form" method="post" class="">`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form data-testid="authent-form" method="post" class="">`
  
  
  
  
Instances: 3
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "email" "password" ].</p>
  
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
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.2c99ee44918959b6c0f6.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/b1542cc239bf56c8a14913c0a930efe682b5cf86.2c99ee44918959b6c0f6.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/4c0ff99caa53c941fbc14e74fd0d88a0596d987c.e1b10838de63be684b1b.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/4c0ff99caa53c941fbc14e74fd0d88a0596d987c.e1b10838de63be684b1b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/032d456b5538f64c5038825505ae0488a07c6733.2197a942e8df3d0eee88.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/032d456b5538f64c5038825505ae0488a07c6733.2197a942e8df3d0eee88.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/tarteaucitron/tarteaucitron.js](https://medle.fabrique.social.gouv.fr/tarteaucitron/tarteaucitron.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/polyfill.js](https://medle.fabrique.social.gouv.fr/polyfill.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/31a570dfdc8aec7b6bb40d221551f6814ac85157.13c5e2edf30ecfd1c0f8.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/31a570dfdc8aec7b6bb40d221551f6814ac85157.13c5e2edf30ecfd1c0f8.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/robots.txt](https://medle.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/main-4063fd7bb03ee5c479e7.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/main-4063fd7bb03ee5c479e7.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/forgotPassword](https://medle.fabrique.social.gouv.fr/forgotPassword)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/da921c246612698216cb5875aaf061c9b71dd451.bce5927e7ffd99daa2c6.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/da921c246612698216cb5875aaf061c9b71dd451.bce5927e7ffd99daa2c6.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/sitemap.xml](https://medle.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/75fc9c18.daa6e841d2cb4900e052.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/75fc9c18.daa6e841d2cb4900e052.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/createAccount](https://medle.fabrique.social.gouv.fr/createAccount)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
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
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css](https://medle.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=31536000, immutable`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/forgotPassword](https://medle.fabrique.social.gouv.fr/forgotPassword)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/createAccount](https://medle.fabrique.social.gouv.fr/createAccount)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
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

  
  
  
  
### Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s)
##### Low (Medium)
  
  
  
  
#### Description
<p>The web/application server is leaking information via one or more "X-Powered-By" HTTP response headers. Access to such information may facilitate attackers identifying other frameworks/components your web application is reliant upon and the vulnerabilities such components may be subject to.</p>
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/sitemap.xml](https://medle.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/robots.txt](https://medle.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/createAccount](https://medle.fabrique.social.gouv.fr/createAccount)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/forgotPassword](https://medle.fabrique.social.gouv.fr/forgotPassword)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Evidence: `X-Powered-By: Next.js`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/75fc9c18.daa6e841d2cb4900e052.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/75fc9c18.daa6e841d2cb4900e052.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/main-4063fd7bb03ee5c479e7.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/main-4063fd7bb03ee5c479e7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css](https://medle.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/forgotPassword](https://medle.fabrique.social.gouv.fr/forgotPassword)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/createAccount](https://medle.fabrique.social.gouv.fr/createAccount)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/robots.txt](https://medle.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/sitemap.xml](https://medle.fabrique.social.gouv.fr/sitemap.xml)
  
  
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
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css](https://medle.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/b91d77263d12d33abc5f2bd6cbcaae6018385bd3.66f70d93c36827bdb9c7.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/b91d77263d12d33abc5f2bd6cbcaae6018385bd3.66f70d93c36827bdb9c7.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/createAccount](https://medle.fabrique.social.gouv.fr/createAccount)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/forgotPassword](https://medle.fabrique.social.gouv.fr/forgotPassword)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/da921c246612698216cb5875aaf061c9b71dd451.bce5927e7ffd99daa2c6.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/da921c246612698216cb5875aaf061c9b71dd451.bce5927e7ffd99daa2c6.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/main-4063fd7bb03ee5c479e7.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/main-4063fd7bb03ee5c479e7.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/75fc9c18.daa6e841d2cb4900e052.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/75fc9c18.daa6e841d2cb4900e052.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
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
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/032d456b5538f64c5038825505ae0488a07c6733.2197a942e8df3d0eee88.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/032d456b5538f64c5038825505ae0488a07c6733.2197a942e8df3d0eee88.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/forgotPassword](https://medle.fabrique.social.gouv.fr/forgotPassword)
  
  
  * Method: `GET`
  
  
  * Evidence: `e57-gwLaIiTzJwsDwldWuzVjPAEJkrs`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/robots.txt](https://medle.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `e22-LBKOzAXbqHbfQ4DyufnExfh1Jwo`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `19f5-24ciLLatHrEvrcokLzdsQ7GmUek`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/createAccount](https://medle.fabrique.social.gouv.fr/createAccount)
  
  
  * Method: `GET`
  
  
  * Evidence: `e47-mgx/ZMG3ntr3uTCedCh+nOYN5V8`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/polyfill.js](https://medle.fabrique.social.gouv.fr/polyfill.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/Financial-Times/polyfill-service/issues/317`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `19f5-24ciLLatHrEvrcokLzdsQ7GmUek`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/sitemap.xml](https://medle.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `e22-LBKOzAXbqHbfQ4DyufnExfh1Jwo`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Evidence: `19f5-24ciLLatHrEvrcokLzdsQ7GmUek`
  
  
  
  
Instances: 9
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>\x0000\x0010�\x0010Q� ��0ӏA\x0014�QU�a��qן�\x0018��Y�����ۯ�\x001c��]�㞻�߿</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/da921c246612698216cb5875aaf061c9b71dd451.bce5927e7ffd99daa2c6.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/da921c246612698216cb5875aaf061c9b71dd451.bce5927e7ffd99daa2c6.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/robots.txt](https://medle.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/createAccount](https://medle.fabrique.social.gouv.fr/createAccount)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/sitemap.xml](https://medle.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/b91d77263d12d33abc5f2bd6cbcaae6018385bd3.66f70d93c36827bdb9c7.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/b91d77263d12d33abc5f2bd6cbcaae6018385bd3.66f70d93c36827bdb9c7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/75fc9c18.daa6e841d2cb4900e052.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/75fc9c18.daa6e841d2cb4900e052.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/forgotPassword](https://medle.fabrique.social.gouv.fr/forgotPassword)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/main-4063fd7bb03ee5c479e7.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/main-4063fd7bb03ee5c479e7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected in the element starting with: "<script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{"message":""}},"page":"/","query":{},"buildId":"agStdl", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/polyfills-36bc00d39416a8088be8.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/polyfills-36bc00d39416a8088be8.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/sitemap.xml](https://medle.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="/polyfill.js"></script>`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/forgotPassword](https://medle.fabrique.social.gouv.fr/forgotPassword)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="/polyfill.js"></script>`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/robots.txt](https://medle.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="/polyfill.js"></script>`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/createAccount](https://medle.fabrique.social.gouv.fr/createAccount)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="/polyfill.js"></script>`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
Instances: 9
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>A noScript tag has been found, which is an indication that the application works differently with JavaScript enabled compared to when it is not.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/sitemap.xml](https://medle.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/createAccount](https://medle.fabrique.social.gouv.fr/createAccount)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/framework.9e3930deed4f24c50ced.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr](https://medle.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/robots.txt](https://medle.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css](https://medle.fabrique.social.gouv.fr/_next/static/css/ae189211a0f5f0a05d69.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/main-4063fd7bb03ee5c479e7.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/main-4063fd7bb03ee5c479e7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/forgotPassword](https://medle.fabrique.social.gouv.fr/forgotPassword)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/_next/static/chunks/75fc9c18.daa6e841d2cb4900e052.js](https://medle.fabrique.social.gouv.fr/_next/static/chunks/75fc9c18.daa6e841d2cb4900e052.js)
  
  
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
  
  
  
* URL: [https://medle.fabrique.social.gouv.fr/](https://medle.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1462732805`
  
  
  
  
Instances: 1
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1462732805, which evaluates to: 2016-05-08 18:40:05</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
