
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:58:57


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 7 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 5 | 
| Source Code Disclosure - SQL | Medium | 1 | 
| Vulnerable JS Library | Medium | 2 | 
| X-Frame-Options Header Not Set | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 1 | 
| Cookie No HttpOnly Flag | Low | 2 | 
| Cookie Without SameSite Attribute | Low | 2 | 
| Dangerous JS Functions | Low | 4 | 
| Feature Policy Header Not Set | Low | 10 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 3 | 
| X-Content-Type-Options Header Missing | Low | 10 | 
| Base64 Disclosure | Informational | 4 | 
| Charset Mismatch (Header Versus Meta Charset) | Informational | 1 | 
| Charset Mismatch (Header Versus Meta Content-Type Charset) | Informational | 1 | 
| Information Disclosure - Suspicious Comments | Informational | 6 | 
| Modern Web Application | Informational | 5 | 
| Non-Storable Content | Informational | 1 | 
| Storable and Cacheable Content | Informational | 10 | 
| Timestamp Disclosure - Unix | Informational | 5 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/?/public/](https://siicea.ars.sante.fr/si-ice/?/public/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/](https://siicea.ars.sante.fr/si-ice/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/sitemap.xml](https://siicea.ars.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/robots.txt](https://siicea.ars.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/favicon.ico](https://siicea.ars.sante.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js](https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js)
  
  
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

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 1.12.4 is vulnerable.</p>
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js](https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `{jquery:"1.12.4"`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js](https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery v1.11.0`
  
  
  
  
Instances: 2
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2020-11023</p><p>CVE-2020-11022</p><p>CVE-2015-9251</p><p>CVE-2019-11358</p><p></p>
  
### Reference
* https://github.com/jquery/jquery/issues/2432
* http://blog.jquery.com/2016/01/08/jquery-2-2-and-1-12-released/
* http://research.insecurelabs.org/jquery/test/
* https://blog.jquery.com/2019/04/10/jquery-3-4-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2019-11358
* https://nvd.nist.gov/vuln/detail/CVE-2015-9251
* https://github.com/jquery/jquery/commit/753d591aea698e57d6db58c9f722cd0808619b1b
* https://bugs.jquery.com/ticket/11974
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/?/public/](https://siicea.ars.sante.fr/si-ice/?/public/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/](https://siicea.ars.sante.fr/si-ice/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<FORM METHOD="POST" ACTION="">`
  
  
  
  
Instances: 1
  
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

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/](https://siicea.ars.sante.fr/si-ice/)
  
  
  * Method: `GET`
  
  
  * Parameter: `SIICEA_COOKIE`
  
  
  * Evidence: `Set-Cookie: SIICEA_COOKIE`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/](https://siicea.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `SIICEA_COOKIE`
  
  
  * Evidence: `Set-Cookie: SIICEA_COOKIE`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://siicea.ars.sante.fr/](https://siicea.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `SIICEA_COOKIE`
  
  
  * Evidence: `Set-Cookie: SIICEA_COOKIE`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/](https://siicea.ars.sante.fr/si-ice/)
  
  
  * Method: `GET`
  
  
  * Parameter: `SIICEA_COOKIE`
  
  
  * Evidence: `Set-Cookie: SIICEA_COOKIE`
  
  
  
  
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
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js](https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js](https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/polyfills.dcc34b371d8ccb3673ef.js](https://siicea.ars.sante.fr/si-ice/polyfills.dcc34b371d8ccb3673ef.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js](https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bypassSecurityTrustHtml`
  
  
  
  
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
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js](https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/runtime.f502f353b37dc42e9f9c.js](https://siicea.ars.sante.fr/si-ice/runtime.f502f353b37dc42e9f9c.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js](https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/robots.txt](https://siicea.ars.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/](https://siicea.ars.sante.fr/si-ice/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js](https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/polyfills.dcc34b371d8ccb3673ef.js](https://siicea.ars.sante.fr/si-ice/polyfills.dcc34b371d8ccb3673ef.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/favicon.ico](https://siicea.ars.sante.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/?/public/](https://siicea.ars.sante.fr/si-ice/?/public/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/sitemap.xml](https://siicea.ars.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css](https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/?/public/](https://siicea.ars.sante.fr/si-ice/?/public/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/styles.a6eb0f4c2945b0b21973.css](https://siicea.ars.sante.fr/si-ice/styles.a6eb0f4c2945b0b21973.css)
  
  
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

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/favicon.ico](https://siicea.ars.sante.fr/login/ARSWEBAPP/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/polyfills.dcc34b371d8ccb3673ef.js](https://siicea.ars.sante.fr/si-ice/polyfills.dcc34b371d8ccb3673ef.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js](https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css](https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/runtime.f502f353b37dc42e9f9c.js](https://siicea.ars.sante.fr/si-ice/runtime.f502f353b37dc42e9f9c.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/favicon.ico](https://siicea.ars.sante.fr/si-ice/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/?/public/](https://siicea.ars.sante.fr/si-ice/?/public/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js](https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js](https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/styles.a6eb0f4c2945b0b21973.css](https://siicea.ars.sante.fr/si-ice/styles.a6eb0f4c2945b0b21973.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js](https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js](https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js](https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `D27CDB6E-AE6D-11cf-96B8-444553540000`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/styles.a6eb0f4c2945b0b21973.css](https://siicea.ars.sante.fr/si-ice/styles.a6eb0f4c2945b0b21973.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkuNSAyLjVoLTZsMiAzLjUtMiAzLjVoNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz48L3N2Zz4=`
  
  
  
  
Instances: 4
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>N\x001d5�8t����ӇN?N\x001d9�8t���ӿӇO?N\x001d=�8u����_Ӈ]</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Charset Mismatch (Header Versus Meta Charset)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check identifies responses where the HTTP Content-Type header declares a charset different from the charset defined by the body of the HTML or XML. When there's a charset mismatch between the HTTP header and content body Web browsers can be forced into an undesirable content-sniffing mode to determine the content's correct character set.</p><p></p><p>An attacker could manipulate content on the page to be interpreted in an encoding of their choice. For example, if an attacker can control content at the beginning of the page, they could inject script using UTF-7 encoded text and manipulate some browsers into interpreting that text.</p>
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/?/public/](https://siicea.ars.sante.fr/si-ice/?/public/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
### Solution
<p>Force UTF-8 for all text content in both the HTTP header and meta tags in HTML or encoding declarations in XML.</p>
  
### Other information
<p>There was a charset mismatch between the HTTP Header and the META charset encoding declaration: [ISO-8859-1] and [utf-8] do not match.</p>
  
### Reference
* http://code.google.com/p/browsersec/wiki/Part2#Character_set_handling_and_detection

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Charset Mismatch (Header Versus Meta Content-Type Charset)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check identifies responses where the HTTP Content-Type header declares a charset different from the charset defined by the body of the HTML or XML. When there's a charset mismatch between the HTTP header and content body Web browsers can be forced into an undesirable content-sniffing mode to determine the content's correct character set.</p><p></p><p>An attacker could manipulate content on the page to be interpreted in an encoding of their choice. For example, if an attacker can control content at the beginning of the page, they could inject script using UTF-7 encoded text and manipulate some browsers into interpreting that text.</p>
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/?/public/](https://siicea.ars.sante.fr/si-ice/?/public/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
### Solution
<p>Force UTF-8 for all text content in both the HTTP header and meta tags in HTML or encoding declarations in XML.</p>
  
### Other information
<p>There was a charset mismatch between the HTTP Header and the META content-type encoding declarations: [ISO-8859-1] and [UTF-8] do not match.</p>
  
### Reference
* http://code.google.com/p/browsersec/wiki/Part2#Character_set_handling_and_detection

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/](https://siicea.ars.sante.fr/si-ice/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
Instances: 1
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected in the element starting with: "<!--</p><p>  <div class="form-group"><strong>Role :</strong> </p><p>  <select name="role" class="form-control"></p><p>  <option value="IC" sele", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js](https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js](https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js](https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/polyfills.dcc34b371d8ccb3673ef.js](https://siicea.ars.sante.fr/si-ice/polyfills.dcc34b371d8ccb3673ef.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js](https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `db`
  
  
  
  
Instances: 5
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bBUG\b and was detected in the element starting with: "(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+TT/":function(e,t,n){var i=n("bYtY"),r=n("mFDi"),o=n("OELB").parsePe", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js](https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href='#'></a>`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js](https://siicea.ars.sante.fr/si-ice/scripts.4e07b42b97dceab70154.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js](https://siicea.ars.sante.fr/si-ice/main.d240fcbcf13b99d8772b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a tabindex="0">\n                            <span class="pi pi-chevron-up"></span>\n                        </a>`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/?/public/](https://siicea.ars.sante.fr/si-ice/?/public/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript">
  window.global = window;
</script>`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/polyfills.dcc34b371d8ccb3673ef.js](https://siicea.ars.sante.fr/si-ice/polyfills.dcc34b371d8ccb3673ef.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/](https://siicea.ars.sante.fr/si-ice/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/style.css](https://siicea.ars.sante.fr/login/ARSWEBAPP/style.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/](https://siicea.ars.sante.fr/)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/favicon.ico](https://siicea.ars.sante.fr/login/ARSWEBAPP/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/favicon.ico](https://siicea.ars.sante.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css](https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/](https://siicea.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/sitemap.xml](https://siicea.ars.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js](https://siicea.ars.sante.fr/login/ARSWEBAPP/jquery.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/si-ice/?/public/](https://siicea.ars.sante.fr/si-ice/?/public/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/robots.txt](https://siicea.ars.sante.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css](https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `66666667`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css](https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `80000000`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css](https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `33333333`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css](https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `00000000`
  
  
  
  
* URL: [https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css](https://siicea.ars.sante.fr/login/ARSWEBAPP/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `42857143`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>66666667, which evaluates to: 1972-02-11 14:31:07</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
