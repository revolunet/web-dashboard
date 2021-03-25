
# ZAP Scanning Report

Generated on Wed, 24 Mar 2021 21:57:01


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 7 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 4 | 
| Vulnerable JS Library | Medium | 2 | 
| X-Frame-Options Header Not Set | Medium | 4 | 
| Cookie No HttpOnly Flag | Low | 3 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cookie Without Secure Flag | Low | 3 | 
| Dangerous JS Functions | Low | 3 | 
| Feature Policy Header Not Set | Low | 8 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 5 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 2 | 
| Information Disclosure - Suspicious Comments | Informational | 4 | 
| Modern Web Application | Informational | 6 | 
| Storable and Cacheable Content | Informational | 10 | 
| Timestamp Disclosure - Unix | Informational | 7 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/sitemap.xml](https://www.telerc.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr](https://www.telerc.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/](https://www.telerc.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/robots.txt](https://www.telerc.travail.gouv.fr/robots.txt)
  
  
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

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.3.1 is vulnerable.</p>
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js](https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `,jquery:"3.3.1"`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js](https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `{jquery:"3.3.1"`
  
  
  
  
Instances: 2
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2020-11023</p><p>CVE-2020-11022</p><p>CVE-2019-11358</p><p></p>
  
### Reference
* https://blog.jquery.com/2019/04/10/jquery-3-4-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2019-11358
* https://github.com/jquery/jquery/commit/753d591aea698e57d6db58c9f722cd0808619b1b
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/](https://www.telerc.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr](https://www.telerc.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/robots.txt](https://www.telerc.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/sitemap.xml](https://www.telerc.travail.gouv.fr/sitemap.xml)
  
  
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

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://www.telerc.travail.gouv.fr](https://www.telerc.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01ca6659`
  
  
  * Evidence: `Set-Cookie: TS01ca6659`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/robots.txt](https://www.telerc.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01ca6659`
  
  
  * Evidence: `Set-Cookie: TS01ca6659`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/](https://www.telerc.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01ca6659`
  
  
  * Evidence: `Set-Cookie: TS01ca6659`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the HttpOnly flag is set for all cookies.</p>
  
### Reference
* https://owasp.org/www-community/HttpOnly

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/](https://www.telerc.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01ca6659`
  
  
  * Evidence: `Set-Cookie: TS01ca6659`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr](https://www.telerc.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01ca6659`
  
  
  * Evidence: `Set-Cookie: TS01ca6659`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/robots.txt](https://www.telerc.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01ca6659`
  
  
  * Evidence: `Set-Cookie: TS01ca6659`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/](https://www.telerc.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01ca6659`
  
  
  * Evidence: `Set-Cookie: TS01ca6659`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/robots.txt](https://www.telerc.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01ca6659`
  
  
  * Evidence: `Set-Cookie: TS01ca6659`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr](https://www.telerc.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01ca6659`
  
  
  * Evidence: `Set-Cookie: TS01ca6659`
  
  
  
  
Instances: 3
  
### Solution
<p>Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html

  
#### CWE Id : 614
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js](https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js](https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js](https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js)
  
  
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
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/runtime.26209474bfa8dc87a77c.js](https://www.telerc.travail.gouv.fr/runtime.26209474bfa8dc87a77c.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/robots.txt](https://www.telerc.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js](https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/sitemap.xml](https://www.telerc.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js](https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr](https://www.telerc.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js](https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/](https://www.telerc.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/robots.txt](https://www.telerc.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/](https://www.telerc.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css](https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr](https://www.telerc.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/sitemap.xml](https://www.telerc.travail.gouv.fr/sitemap.xml)
  
  
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

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js](https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/favicon-marianne.ico](https://www.telerc.travail.gouv.fr/favicon-marianne.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/sitemap.xml](https://www.telerc.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css](https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/](https://www.telerc.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/vendor.84f974edd2be265268c5.js](https://www.telerc.travail.gouv.fr/vendor.84f974edd2be265268c5.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/runtime.26209474bfa8dc87a77c.js](https://www.telerc.travail.gouv.fr/runtime.26209474bfa8dc87a77c.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js](https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr](https://www.telerc.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js](https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/robots.txt](https://www.telerc.travail.gouv.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js](https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `moyenneRemunerationMensuelleAutomatique+1/12`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css](https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==`
  
  
  
  
Instances: 2
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>����w�zk�z�����z{.zY^\x0002�h��b����v</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/vendor.84f974edd2be265268c5.js](https://www.telerc.travail.gouv.fr/vendor.84f974edd2be265268c5.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js](https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js](https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js](https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Db`
  
  
  
  
Instances: 4
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bBUG\b and was detected in the element starting with: "(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+Jg9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/](https://www.telerc.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="runtime.26209474bfa8dc87a77c.js"></script>`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/sitemap.xml](https://www.telerc.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="runtime.26209474bfa8dc87a77c.js"></script>`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js](https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id='"+b+"'></a>`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js](https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr](https://www.telerc.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="runtime.26209474bfa8dc87a77c.js"></script>`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/robots.txt](https://www.telerc.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="runtime.26209474bfa8dc87a77c.js"></script>`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/robots.txt](https://www.telerc.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/runtime.26209474bfa8dc87a77c.js](https://www.telerc.travail.gouv.fr/runtime.26209474bfa8dc87a77c.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css](https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr](https://www.telerc.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js](https://www.telerc.travail.gouv.fr/main.9dafea825c753a6e31ba.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/favicon-marianne.ico](https://www.telerc.travail.gouv.fr/favicon-marianne.ico)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js](https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js](https://www.telerc.travail.gouv.fr/scripts.802b6bd05bce04c52123.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/sitemap.xml](https://www.telerc.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/](https://www.telerc.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css](https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `33335333`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css](https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `85714286`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css](https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `66666667`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css](https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `33334333`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js](https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `62425156`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js](https://www.telerc.travail.gouv.fr/polyfills.2e68bed803cd87f7c86e.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `94906265`
  
  
  
  
* URL: [https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css](https://www.telerc.travail.gouv.fr/styles.43826ac08c9f2fa58a6e.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `33333333`
  
  
  
  
Instances: 7
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>33335333, which evaluates to: 1971-01-21 19:48:53</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
