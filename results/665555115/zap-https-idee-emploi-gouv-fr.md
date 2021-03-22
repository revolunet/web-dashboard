
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:35:22


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 9 |
| Informational | 10 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 8 | 
| Reverse Tabnabbing | Medium | 5 | 
| Vulnerable JS Library | Medium | 1 | 
| X-Frame-Options Header Not Set | Medium | 8 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Application Error Disclosure | Low | 2 | 
| Cookie Without SameSite Attribute | Low | 5 | 
| Dangerous JS Functions | Low | 6 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 2 | 
| Strict-Transport-Security Header Not Set | Low | 5 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 6 | 
| Content-Type Header Missing | Informational | 5 | 
| Information Disclosure - Suspicious Comments | Informational | 8 | 
| Modern Web Application | Informational | 4 | 
| Non-Storable Content | Informational | 8 | 
| Storable and Cacheable Content | Informational | 3 | 
| Timestamp Disclosure - Unix | Informational | 3 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 6 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminMessage.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminMessage.jsp)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminForgotPassword.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminForgotPassword.jsp)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminFormContact.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminFormContact.jsp)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminForgotPassword.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminForgotPassword.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://fr.lutece.paris.fr" target="lutece">Lutece version : 2.4.0</a>`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href='http://fr.www.mozilla.com/fr/' target='_blank'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-firefox.jpg' style='border: none;' alt='Get Firefox 3.5'/></a>`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `POST`
  
  
  * Evidence: `<a href='http://fr.www.mozilla.com/fr/' target='_blank'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-firefox.jpg' style='border: none;' alt='Get Firefox 3.5'/></a>`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminFormContact.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminFormContact.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://fr.lutece.paris.fr" target="lutece">Lutece version : 2.4.0</a>`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminMessage.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminMessage.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://fr.lutece.paris.fr" target="lutece">Lutece version : 2.4.0</a>`
  
  
  
  
Instances: 5
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 1.3.2.min is vulnerable.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-1.3.2.min.js`
  
  
  
  
Instances: 1
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2011-4969</p><p>CVE-2020-11023</p><p>CVE-2020-11022</p><p>CVE-2019-11358</p><p>CVE-2012-6708</p><p></p>
  
### Reference
* https://nvd.nist.gov/vuln/detail/CVE-2012-6708
* http://research.insecurelabs.org/jquery/test/
* https://bugs.jquery.com/ticket/9521
* http://bugs.jquery.com/ticket/11290
* https://blog.jquery.com/2019/04/10/jquery-3-4-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2019-11358
* https://github.com/jquery/jquery/commit/753d591aea698e57d6db58c9f722cd0808619b1b
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2011-4969
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminForgotPassword.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminForgotPassword.jsp)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminMessage.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminMessage.jsp)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminFormContact.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminFormContact.jsp)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `POST`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="jsp/site/Portal.jsp" method="post">`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="jsp/admin/AdminLogin.jsp" method="get">`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="jsp/site/Portal.jsp" method="post">`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" action="jsp/site/plugins/mylutece/DoMyLuteceLogin.jsp">`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="jsp/admin/AdminLogin.jsp" method="get">`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" action="jsp/site/plugins/mylutece/DoMyLuteceLogin.jsp">`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" name="login" id="login" action="jsp/admin/DoAdminLogin.jsp" >`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminForgotPassword.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminForgotPassword.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" name="forgot_password" id="forgot_password" action="jsp/admin/DoAdminForgotPassword.jsp" >`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" action="jsp/site/plugins/mylutece/DoMyLuteceLogin.jsp">`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="jsp/admin/AdminLogin.jsp" method="get">`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="jsp/site/Portal.jsp" method="post">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 2: "page" "query" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Application Error Disclosure
##### Low (Medium)
  
  
  
  
#### Description
<p>This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=lostPassword&page=mylutecedatabase](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=lostPassword&page=mylutecedatabase)
  
  
  * Method: `GET`
  
  
  * Evidence: `HTTP/1.0 500 Internal Server Error`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=createAccount&page=mylutecedatabase](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=createAccount&page=mylutecedatabase)
  
  
  * Method: `GET`
  
  
  * Evidence: `HTTP/1.0 500 Internal Server Error`
  
  
  
  
Instances: 2
  
### Solution
<p>Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/](https://idee.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/](https://idee.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/robots.txt](https://idee.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr](https://idee.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr](https://idee.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/plugins/form/form.js](https://idee.emploi.gouv.fr/PortailIDEE/js/plugins/form/form.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.cookie.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.cookie.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/autocomplete/jquery.autocomplete.pack.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/autocomplete/jquery.autocomplete.pack.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.treeview.pack.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.treeview.pack.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.treeview.pack.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.treeview.pack.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/autocomplete/jquery.autocomplete.pack.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/autocomplete/jquery.autocomplete.pack.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/plugins/form/form.js](https://idee.emploi.gouv.fr/PortailIDEE/js/plugins/form/form.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker-fr.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker-fr.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.cookie.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.cookie.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/plugins/mylutece/mylutece.js](https://idee.emploi.gouv.fr/PortailIDEE/js/plugins/mylutece/mylutece.js)
  
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Communication.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Communication.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.css](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Indispensables.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Indispensables.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Outils.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Outils.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Circulaires.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Circulaires.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/UtilesPratiques.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/UtilesPratiques.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/ReunionsReseaux.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/ReunionsReseaux.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/robots.txt](https://idee.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.treeview.css](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.treeview.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Articles.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Articles.xml)
  
  
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

  
  
  
  
### Secure Pages Include Mixed Content
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes mixed content, that is content accessed via HTTP instead of HTTPS.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.ie6nomore.com/files/theme/ie6nomore-cornerx.jpg`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `POST`
  
  
  * Evidence: `http://www.ie6nomore.com/files/theme/ie6nomore-cornerx.jpg`
  
  
  
  
Instances: 2
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=img src=http://www.ie6nomore.com/files/theme/ie6nomore-cornerx.jpg</p><p>tag=img src=http://www.ie6nomore.com/files/theme/ie6nomore-warning.jpg</p><p>tag=img src=http://www.ie6nomore.com/files/theme/ie6nomore-firefox.jpg</p><p>tag=img src=http://www.ie6nomore.com/files/theme/ie6nomore-ie8.jpg</p><p>tag=img src=http://www.ie6nomore.com/files/theme/ie6nomore-safari.jpg</p><p>tag=img src=http://www.ie6nomore.com/files/theme/ie6nomore-chrome.jpg</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/sitemap.xml](https://idee.emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/](https://idee.emploi.gouv.fr/PortailIDEE/jsp/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=createAccount&page=mylutecedatabase](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=createAccount&page=mylutecedatabase)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=lostPassword&page=mylutecedatabase](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=lostPassword&page=mylutecedatabase)
  
  
  * Method: `GET`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/UtilesPratiques.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/UtilesPratiques.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/robots.txt](https://idee.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Indispensables.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Indispensables.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Outils.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Outils.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Circulaires.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Circulaires.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Communication.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Communication.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/ReunionsReseaux.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/ReunionsReseaux.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.css](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.treeview.css](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.treeview.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Articles.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Articles.xml)
  
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/robots.txt](https://idee.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `VjJQh3ZI3Dp9R28qJlLL3fNyljz02WXzTyE2fZVYcW40HLfQm04+uIdc0/ycNWff1IaWJHfyACpGjBgvNh6qaW1gsaw=`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/](https://idee.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `M0E/vDlwrRue7UgqJlLL3fNyljz02bTyMzv6J05xCeEYebvlBejEE3KSIDJ2dTRAtLgnejbJbFgk1sMW4IUPz4DueCU=`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&error=invalid&error_msg=Login%20ou%20mot%20de%20passe%20invalide&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr](https://idee.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `2DjNW+ADMHMdL+cqJlLL3fNyljz02Uy1dQXTiOnqMEiVODLWki3ptSOQzWJFsGCFEcJyoy9rsm7VCax4QgUTuk3Nbaw=`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>V2P�vH�:}Go*&R���r�<��e�O!6}�Xqn4\x001c�ЛN>��\���5g�Ԇ�$w�\x0000*F�\x0018/6\x001e�im`��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/sitemap.xml](https://idee.emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=lostPassword&page=mylutecedatabase](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=lostPassword&page=mylutecedatabase)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=createAccount&page=mylutecedatabase](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=createAccount&page=mylutecedatabase)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/](https://idee.emploi.gouv.fr/PortailIDEE/jsp/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure each page is setting the specific and appropriate content-type value for the content being delivered.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx

  
#### CWE Id : 345
  
#### WASC Id : 12
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `POST`
  
  
  * Evidence: `admin`
  
  
  
  
Instances: 2
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bADMIN\b and was detected 3 times, the first in the element starting with: "<!-- <div id="admin-header-sitename">Infos Direccte Emploi Entreprises</div> -->", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.cookie.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/treeview/jquery.cookie.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Select`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/autocomplete/jquery.autocomplete.pack.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/autocomplete/jquery.autocomplete.pack.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Select`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
Instances: 6
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected in the element starting with: " * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `POST`
  
  
  * Evidence: `<a href='#' onclick='javascript:this.parentNode.parentNode.style.display="none"; return false;'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-cornerx.jpg' style='border: none;' alt='Close this notice'/></a>`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/admin/AdminLogin.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href='#' onclick='javascript:this.parentNode.parentNode.style.display="none"; return false;'><img src='http://www.ie6nomore.com/files/theme/ie6nomore-cornerx.jpg' style='border: none;' alt='Close this notice'/></a>`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>' + printDate.getDate() + '</a>`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/jquery-1.3.2.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href='#'></a>`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [http://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp](http://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [http://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](http://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 2
  
### Solution
<p>The content may be marked as storable by ensuring that the following conditions are satisfied:</p><p>The request method must be understood by the cache and defined as being cacheable ("GET", "HEAD", and "POST" are currently defined as cacheable)</p><p>The response status code must be understood by the cache (one of the 1XX, 2XX, 3XX, 4XX, or 5XX response classes are generally understood)</p><p>The "no-store" cache directive must not appear in the request or response header fields</p><p>For caching by "shared" caches such as "proxy" caches, the "private" response directive must not appear in the response</p><p>For caching by "shared" caches such as "proxy" caches, the "Authorization" header field must not appear in the request, unless the response explicitly allows it (using one of the "must-revalidate", "public", or "s-maxage" Cache-Control response directives)</p><p>In addition to the conditions above, at least one of the following conditions must also be satisfied by the response:</p><p>It must contain an "Expires" header field</p><p>It must contain a "max-age" response directive</p><p>For "shared" caches such as "proxy" caches, it must contain a "s-maxage" response directive</p><p>It must contain a "Cache Control Extension" that allows it to be cached</p><p>It must have a status code that is defined as cacheable by default (200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501).   </p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/](https://idee.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr](https://idee.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE](https://idee.emploi.gouv.fr/PortailIDEE)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/robots.txt](https://idee.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/sitemap.xml](https://idee.emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `0123456789`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Outils.xml](https://idee.emploi.gouv.fr/PortailIDEE/plugins/rss/Outils.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `06122013`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js](https://idee.emploi.gouv.fr/PortailIDEE/js/jquery/plugins/ui/datepicker/ui.datepicker.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `86400000`
  
  
  
  
Instances: 3
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>0123456789, which evaluates to: 1973-11-29 21:33:09</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 6
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>page=mylutece</p><p></p><p>The user-controlled value was:</p><p>mylutece</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
