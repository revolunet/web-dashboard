
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:43:58


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 2 |
| Low | 8 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 2 | 
| Absence of Anti-CSRF Tokens | Low | 1 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 1 | 
| Cookie Without SameSite Attribute | Low | 4 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 1 | 
| Dangerous JS Functions | Low | 1 | 
| Feature Policy Header Not Set | Low | 1 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 1 | 
| Base64 Disclosure | Informational | 5 | 
| Information Disclosure - Suspicious Comments | Informational | 3 | 
| Modern Web Application | Informational | 1 | 
| Retrieved from Cache | Informational | 2 | 
| Storable and Cacheable Content | Informational | 6 | 
| Timestamp Disclosure - Unix | Informational | 18 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
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

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
Instances: 2
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
Instances: 1
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "page" "recherche" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Big Redirect Detected (Potential Sensitive Information Leak)
##### Low (Medium)
  
  
  
  
#### Description
<p>The server has responded with a redirect that seems to provide a large response. This may indicate that although the server sent a redirect it also responded with body content (which may include sensitive details, PII, etc.).</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/investir-dans-les-solidarites/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/investir-dans-les-solidarites/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 100 [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/].</p><p>Predicted response size: 400.</p><p>Response Body Length: 467.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/investir-dans-les-solidarites/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/investir-dans-les-solidarites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr/](https://lutte-pauvrete.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr/robots.txt](https://lutte-pauvrete.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr/sitemap.xml](https://lutte-pauvrete.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/investir-dans-les-solidarites/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/investir-dans-les-solidarites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `lg7ug1ZvTjmb58EqJlLL3fNyljz02c7ATa+AEhdRLCC8LSISM5uso1UMnnW9Htgjv6UEO202iXwjj+cj6i2VwOFQevE=`
  
  
  
  
Instances: 2
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>��?M\x001f�٥���\x000f�a�iu��k��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr/robots.txt](https://lutte-pauvrete.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `26/CoO7qL3VWHcoqJlLL3fNyljz02aIGSfxTicNlbZPl2jCdDN7YwmCZsb38j0x/lf3sFFigIvFL4kkc3Ot/cY8QWWo=`
  
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr/sitemap.xml](https://lutte-pauvrete.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Sp+//bQDI+hj0WsqJlLL3fNyljz02Z+hA4iFiQkoMVOZgkC7QedLQrB1l77bEYVyeGYdU6vyFIpguz4+QGH+E2Be+08=`
  
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr/](https://lutte-pauvrete.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `0js1qXD3Vv2yVAsqJlLL3fNyljz02T9qpv+U/GmEYgoOUqATmWeAoItOFEjrALBHJW7abzlWmxSRqWikIQ/smJ9uhjk=`
  
  
  
  
Instances: 3
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>ۯ ��/uV\x001d�*&R���r�<�٢\x0006I�S��em���0�\x000c���`�����L���\x0014X�"�K�I\x001c��q�\x0010Yj</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `From`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 3
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected in the element starting with: "<script type="text/javascript">/*<![CDATA[*/</p><p>function hide_aside() {</p><p>	// Rajouter une classe sur .page__container si aside est n", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
Instances: 1
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Retrieved from Cache
##### Informational (Medium)
  
  
  
  
#### Description
<p>The content was retrieved from a shared cache. If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance. </p>
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr/](https://lutte-pauvrete.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 8`
  
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr](https://lutte-pauvrete.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 8`
  
  
  
  
Instances: 2
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request.</p>
  
### Other information
<p>The presence of the 'Age' header indicates that that a HTTP/1.1 compliant caching server is in use.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/investir-dans-les-solidarites/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/investir-dans-les-solidarites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
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

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr/sitemap.xml](https://lutte-pauvrete.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr/](https://lutte-pauvrete.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr/robots.txt](https://lutte-pauvrete.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lutte-pauvrete.gouv.fr](https://lutte-pauvrete.gouv.fr)
  
  
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

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612786497`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1607589169`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616041257`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615473072`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615999048`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615276389`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616041190`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615473071`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616094935`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615999370`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612367575`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442826`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615800361`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20210317`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442825`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442383`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442388`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615473486`
  
  
  
  
Instances: 18
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1612786497, which evaluates to: 2021-02-08 12:14:57</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
