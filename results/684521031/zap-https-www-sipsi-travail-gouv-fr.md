
# ZAP Scanning Report

Generated on Wed, 24 Mar 2021 21:58:40


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 7 |
| Informational | 6 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 2 | 
| Cross-Domain Misconfiguration | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 1 | 
| X-Frame-Options Header Not Set | Medium | 2 | 
| Cookie No HttpOnly Flag | Low | 11 | 
| Cookie Without SameSite Attribute | Low | 11 | 
| Cookie Without Secure Flag | Low | 11 | 
| Dangerous JS Functions | Low | 3 | 
| Feature Policy Header Not Set | Low | 6 | 
| Strict-Transport-Security Header Not Set | Low | 1 | 
| X-Content-Type-Options Header Missing | Low | 1 | 
| Base64 Disclosure | Informational | 2 | 
| Information Disclosure - Suspicious Comments | Informational | 6 | 
| Loosely Scoped Cookie | Informational | 3 | 
| Modern Web Application | Informational | 5 | 
| Non-Storable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 12 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
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

  
  
  
  
### Cross-Domain Misconfiguration
##### Medium (Medium)
  
  
  
  
#### Description
<p>Web browser data loading may be possible, due to a Cross Origin Resource Sharing (CORS) misconfiguration on the web server</p>
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that sensitive data is not available in an unauthenticated manner (using IP address white-listing, for instance).</p><p>Configure the "Access-Control-Allow-Origin" HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner.</p>
  
### Other information
<p>The CORS misconfiguration on the web server permits cross-domain read requests from arbitrary third party domains, using unauthenticated APIs on this domain. Web browser implementations do not permit arbitrary third parties to read the response from authenticated APIs, however. This reduces the risk somewhat. This misconfiguration could be used by an attacker to access data that is available in an unauthenticated manner, but which uses some other form of security, such as IP address white-listing.</p>
  
### Reference
* http://www.hpenterprisesecurity.com/vulncat/en/vulncat/vb/html5_overly_permissive_cors_policy.html

  
#### CWE Id : 264
  
#### WASC Id : 14
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script id="dtjsagentdw" type="text/javascript" src="'+
Ig+'">`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fc06af`
  
  
  * Evidence: `Set-Cookie: TS01fc06af`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fc06af`
  
  
  * Evidence: `Set-Cookie: TS01fc06af`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/sitemap.xml](https://www.sipsi.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fc06af`
  
  
  * Evidence: `Set-Cookie: TS01fc06af`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fc06af`
  
  
  * Evidence: `Set-Cookie: TS01fc06af`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fc06af`
  
  
  * Evidence: `Set-Cookie: TS01fc06af`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fc06af`
  
  
  * Evidence: `Set-Cookie: TS01fc06af`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/sitemap.xml](https://www.sipsi.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fc06af`
  
  
  * Evidence: `Set-Cookie: TS01fc06af`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/sitemap.xml](https://www.sipsi.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fc06af`
  
  
  * Evidence: `Set-Cookie: TS01fc06af`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fffb4c`
  
  
  * Evidence: `Set-Cookie: TS01fffb4c`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01fc06af`
  
  
  * Evidence: `Set-Cookie: TS01fc06af`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/polyfills.c92bc7183e704e8052ea.js](https://www.sipsi.travail.gouv.fr/polyfills.c92bc7183e704e8052ea.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/main.d14aef5257df61608cc6.js](https://www.sipsi.travail.gouv.fr/main.d14aef5257df61608cc6.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bypassSecurityTrustHtml`
  
  
  
  
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
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/main.d14aef5257df61608cc6.js](https://www.sipsi.travail.gouv.fr/main.d14aef5257df61608cc6.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/polyfills.c92bc7183e704e8052ea.js](https://www.sipsi.travail.gouv.fr/polyfills.c92bc7183e704e8052ea.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/runtime.dca98c63dc8efaae5f12.js](https://www.sipsi.travail.gouv.fr/runtime.dca98c63dc8efaae5f12.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  
  
Instances: 6
  
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

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `/ruxitagentjs_ICA2SVfqru_10211210318124316`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/ruxitagentjs_ICA2SVfqru_10211210318124316`
  
  
  
  
Instances: 2
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>����֠z{c��\x0002\x0003d�~���]6�]��}|�n7�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/vendor.0dc1f7b17bf515306aa4.js](https://www.sipsi.travail.gouv.fr/vendor.0dc1f7b17bf515306aa4.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/polyfills.c92bc7183e704e8052ea.js](https://www.sipsi.travail.gouv.fr/polyfills.c92bc7183e704e8052ea.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/main.d14aef5257df61608cc6.js](https://www.sipsi.travail.gouv.fr/main.d14aef5257df61608cc6.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `SELECT`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Db`
  
  
  
  
Instances: 6
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bBUG\b and was detected in the element starting with: "(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+s0g":function(t,e,n){!function(t){"use strict";var e="jan._feb._mrt._", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Loosely Scoped Cookie
##### Informational (Low)
  
  
  
  
#### Description
<p>Cookies can be scoped by domain or path. This check is only concerned with domain scope.The domain scope applied to a cookie determines which domains can access it. For example, a cookie can be scoped strictly to a subdomain e.g. www.nottrusted.com, or loosely scoped to a parent domain e.g. nottrusted.com. In the latter case, any subdomain of nottrusted.com can access the cookie. Loosely scoped cookies are common in mega-applications like google.com and live.com. Cookies set from a subdomain like app.foo.bar are transmitted only to that domain by the browser. However, cookies scoped to a parent-level domain may be transmitted to the parent, or any subdomain of the parent.</p>
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
### Solution
<p>Always scope cookies to a FQDN (Fully Qualified Domain Name).</p>
  
### Other information
<p>The origin domain used for comparison was: </p><p>www.sipsi.travail.gouv.fr</p><p>dtCookie=v_4_srv_9_sn_B2C6BB6120F677C2A6A430406CCF6F0E_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_1</p><p>TS01fc06af=012f5c94ea3092e3aca1a43a6f15b19a507c66738ae2c4ae22c2362402a55e9b796b0a52fd7071abb72bfc61c4a43a8ffdbce090a4961448359f44a5465c3e27ff9b9a5a3b</p><p></p>
  
### Reference
* https://tools.ietf.org/html/rfc6265#section-4.1
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html
* http://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_cookies

  
#### CWE Id : 565
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/polyfills.c92bc7183e704e8052ea.js](https://www.sipsi.travail.gouv.fr/polyfills.c92bc7183e704e8052ea.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="/ruxitagentjs_ICA2SVfqru_10211210318124316.js" data-dtconfig="app=ea7c4b59f27d43eb|rcdec=1209600000|featureHash=ICA2SVfqru|rdnt=1|uxrgce=1|srcss=1|bp=2|srmcrv=10|cuc=bkulvisy|mel=100000|dpvc=1|lastModification=1616115991910|dtVersion=10211210318124316|srmcrl=1|tp=500,50,0,1|uxdcw=1500|vs=2|agentUri=/ruxitagentjs_ICA2SVfqru_10211210318124316.js|reportUrl=/rb_ae8c4144-addf-4535-803a-23b7bba15d1e|rid=RID_2418|rpid=1892315053|domain=travail.gouv.fr"></script>`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://www.sipsi.travail.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script id="dtjsagentdw" type="text/javascript" src="'+
Ig+'">`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="/ruxitagentjs_ICA2SVfqru_10211210318124316.js" data-dtconfig="app=ea7c4b59f27d43eb|rcdec=1209600000|featureHash=ICA2SVfqru|rdnt=1|uxrgce=1|srcss=1|bp=2|srmcrv=10|cuc=bkulvisy|mel=100000|dpvc=1|lastModification=1616115991910|dtVersion=10211210318124316|srmcrl=1|tp=500,50,0,1|uxdcw=1500|vs=2|agentUri=/ruxitagentjs_ICA2SVfqru_10211210318124316.js|reportUrl=/rb_ae8c4144-addf-4535-803a-23b7bba15d1e|rid=RID_2418|rpid=1722143960|domain=travail.gouv.fr"></script>`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="/ruxitagentjs_ICA2SVfqru_10211210318124316.js" data-dtconfig="app=ea7c4b59f27d43eb|rcdec=1209600000|featureHash=ICA2SVfqru|rdnt=1|uxrgce=1|srcss=1|bp=2|srmcrv=10|cuc=bkulvisy|mel=100000|dpvc=1|lastModification=1616115991910|dtVersion=10211210318124316|srmcrl=1|tp=500,50,0,1|uxdcw=1500|vs=2|agentUri=/ruxitagentjs_ICA2SVfqru_10211210318124316.js|reportUrl=/rb_ae8c4144-addf-4535-803a-23b7bba15d1e|rid=RID_2418|rpid=220956053|domain=travail.gouv.fr"></script>`
  
  
  
  
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
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/sitemap.xml](https://www.sipsi.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-144x144.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-144x144.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-114x114.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-114x114.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-76x76.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-76x76.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-120x120.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-120x120.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-60x60.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-60x60.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-72x72.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-72x72.png)
  
  
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
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1722143960`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `811496252`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1892315053`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `122880425`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `220956053`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1209600000`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png](https://www.sipsi.travail.gouv.fr/assets/favicon/apple-icon-57x57.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `1548233249`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/robots.txt](https://www.sipsi.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `960061957`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `939553289`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr](https://www.sipsi.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1209600000`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/](https://www.sipsi.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `66145358`
  
  
  
  
* URL: [https://www.sipsi.travail.gouv.fr/sitemap.xml](https://www.sipsi.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `357536509`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1722143960, which evaluates to: 2024-07-28 05:19:20</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
