
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:10:11


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 9 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 1 | 
| Reverse Tabnabbing | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 3 | 
| X-Frame-Options Header Not Set | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 2 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 3 | 
| Feature Policy Header Not Set | Low | 1 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 1 | 
| Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) | Low | 1 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 1 | 
| Strict-Transport-Security Header Not Set | Low | 5 | 
| X-Content-Type-Options Header Missing | Low | 1 | 
| Base64 Disclosure | Informational | 1 | 
| Information Disclosure - Suspicious Comments | Informational | 2 | 
| Modern Web Application | Informational | 1 | 
| Storable and Cacheable Content | Informational | 4 | 
| Storable but Non-Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 9 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://certifpro.francecompetences.fr/webapp/rncp/" target="_blank"><img src="https://www.francecompetences.fr/app/uploads/2020/06/shape-2.svg" /><p><span class="s1">Enregistrer une certification </span></p>
</a>`
  
  
  
  
Instances: 1
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='text/javascript' src='https://app2.kapitaliser.com/centralBrain/front/libApp2/widget/teamBrainLight.php?key1=TnJlWVZOdUVpcjNUa3NGWi94MGttbFlQVXh6T2ptY3h2WkFTbW9MbXhUcz0=&#038;key2=19153981535e0df2457b2f53.36484395'></script>`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='text/javascript' src='https://tarteaucitron.io/load.js?locale=fr&#038;iswordpress=true&#038;domain=www.francecompetences.fr&#038;uuid=a0c3041e64aeac828c8dd7c8a1246a678a65bdc3&#038;ver=5.4.1'></script>`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,900,900i&#038;display=swap" rel="stylesheet">`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
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
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/" class="header-form">`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/">`
  
  
  
  
Instances: 2
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "s" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#property=5ea9b52c1833df0012bbb225&product=sticky-share-buttons-wp`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#property=5ea9b52c1833df0012bbb225&#038;product=sticky-share-buttons-wp'></script>`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://app2.kapitaliser.com/centralBrain/front/libApp2/widget/teamBrainLight.php?key1=TnJlWVZOdUVpcjNUa3NGWi94MGttbFlQVXh6T2ptY3h2WkFTbW9MbXhUcz0=&key2=19153981535e0df2457b2f53.36484395`
  
  
  * Evidence: `<script type='text/javascript' src='https://app2.kapitaliser.com/centralBrain/front/libApp2/widget/teamBrainLight.php?key1=TnJlWVZOdUVpcjNUa3NGWi94MGttbFlQVXh6T2ptY3h2WkFTbW9MbXhUcz0=&#038;key2=19153981535e0df2457b2f53.36484395'></script>`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.francecompetences.fr&uuid=a0c3041e64aeac828c8dd7c8a1246a678a65bdc3&ver=5.4.1`
  
  
  * Evidence: `<script type='text/javascript' src='https://tarteaucitron.io/load.js?locale=fr&#038;iswordpress=true&#038;domain=www.francecompetences.fr&#038;uuid=a0c3041e64aeac828c8dd7c8a1246a678a65bdc3&#038;ver=5.4.1'></script>`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>
  
### Reference
* 

  
#### CWE Id : 829
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
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
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=0, public`
  
  
  
  
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
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: WP Rocket/3.5.2`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38`
  
  
  
  
Instances: 1
  
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

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
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

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://certificationprofessionnelle.fr/](https://certificationprofessionnelle.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://certificationprofessionnelle.fr/sitemap.xml](https://certificationprofessionnelle.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://certificationprofessionnelle.fr](https://certificationprofessionnelle.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://certificationprofessionnelle.fr/robots.txt](https://certificationprofessionnelle.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
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
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/app/uploads/2021/01/iStock-579236098-500x500`
  
  
  
  
Instances: 1
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>~�ڦ��Z\x001av���m�_�J�\x001c��{�m���>�M1�M</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
Instances: 1
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bTODO\b and was detected in the element starting with: "<!-- "Trier par" : Ordre affichage des résultats - TODO -->", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 1
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected in the element starting with: "<script type='application/ld+json' class='yoast-schema-graph yoast-schema-graph--main'>{"@context":"https://schema.org","@graph"", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" aria-label="Se rendre sur la page Facebook"
          aria-describedby="ally-w-2" title="Se rendre sur la page Facebook" rel="noopener"
          target="_blank"></a>`
  
  
  
  
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
  
  
  
* URL: [https://certificationprofessionnelle.fr/robots.txt](https://certificationprofessionnelle.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://certificationprofessionnelle.fr/sitemap.xml](https://certificationprofessionnelle.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://certificationprofessionnelle.fr](https://certificationprofessionnelle.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://certificationprofessionnelle.fr/](https://certificationprofessionnelle.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
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
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `579236098`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `173027482`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1093900940`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `36484395`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `645056648`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1043761006`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1187678705`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1139630453`
  
  
  
  
* URL: [https://www.francecompetences.fr/](https://www.francecompetences.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616077849`
  
  
  
  
Instances: 9
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>579236098, which evaluates to: 1988-05-10 02:54:58</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
