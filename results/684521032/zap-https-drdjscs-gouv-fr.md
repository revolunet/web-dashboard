
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:24:32


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 2 |
| Low | 9 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 10 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 4 | 
| Cookie No HttpOnly Flag | Low | 6 | 
| Cookie Without SameSite Attribute | Low | 9 | 
| Cookie Without Secure Flag | Low | 6 | 
| Dangerous JS Functions | Low | 7 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 9 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 9 | 
| Cookie Poisoning | Informational | 6 | 
| Information Disclosure - Suspicious Comments | Informational | 12 | 
| Modern Web Application | Informational | 12 | 
| Non-Storable Content | Informational | 5 | 
| Storable and Cacheable Content | Informational | 6 | 
| Timestamp Disclosure - Unix | Informational | 5 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 16 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?rubrique2](https://drdjscs.gouv.fr/spip.php?rubrique2)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr](https://drdjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/?Llist_1=http%3A%2F%2Fauvergne-rhone-alpes.drdjscs.gouv.fr](https://drdjscs.gouv.fr/?Llist_1=http%3A%2F%2Fauvergne-rhone-alpes.drdjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?rubrique1](https://drdjscs.gouv.fr/spip.php?rubrique1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?article6](https://drdjscs.gouv.fr/spip.php?article6)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/?Llist_2=http%3A%2F%2Fguadeloupe.drjscs.gouv.fr](https://drdjscs.gouv.fr/?Llist_2=http%3A%2F%2Fguadeloupe.drjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?lang=fr&page=spip_pass](https://drdjscs.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?article2](https://drdjscs.gouv.fr/spip.php?article2)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
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

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v3.2.1`
  
  
  
  
Instances: 1
  
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

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://drdjscs.gouv.fr](https://drdjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="menuBuilder" class="menuBuilder">`
  
  
  
  
* URL: [https://drdjscs.gouv.fr](https://drdjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="menuBuilder" class="menuBuilder">`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?rubrique2](https://drdjscs.gouv.fr/spip.php?rubrique2)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get" name="formrecherche" id="formrecherche">`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/?Llist_2=http%3A%2F%2Fguadeloupe.drjscs.gouv.fr](https://drdjscs.gouv.fr/?Llist_2=http%3A%2F%2Fguadeloupe.drjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="menuBuilder" class="menuBuilder">`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/spip.php?page=login&amp;url=%2Fecrire%2F'>`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?rubrique1](https://drdjscs.gouv.fr/spip.php?rubrique1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get" name="formrecherche" id="formrecherche">`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" action="https://drdjscs.gouv.fr/spip.php?action=converser&amp;redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F">`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="menuBuilder" class="menuBuilder">`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/?Llist_2=http%3A%2F%2Fguadeloupe.drjscs.gouv.fr](https://drdjscs.gouv.fr/?Llist_2=http%3A%2F%2Fguadeloupe.drjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="menuBuilder" class="menuBuilder">`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="menuBuilder" class="menuBuilder">`
  
  
  
  
Instances: 10
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 2: ].</p>
  
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
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/ecrire/](https://drdjscs.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 64 [https://drdjscs.gouv.fr/spip.php?page=login&url=/ecrire/&lang=fr].</p><p>Predicted response size: 364.</p><p>Response Body Length: 439.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang_ecrire`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang_ecrire`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang_ecrire`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-drdjscs.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-drdjscs.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/robots.txt](https://drdjscs.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-drdjscs.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-drdjscs.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang_ecrire`
  
  
  
  
* URL: [https://drdjscs.gouv.fr](https://drdjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-drdjscs.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-drdjscs.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang_ecrire`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang_ecrire`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang_ecrire`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang_ecrire`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `drdjscsg60d4_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: drdjscsg60d4_lang_ecrire`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/sites/drdjscs.gouv.fr/local/cache-js/jsdyn-jquery_cookiebar_js-15975017.js?1594817584](https://drdjscs.gouv.fr/sites/drdjscs.gouv.fr/local/cache-js/jsdyn-jquery_cookiebar_js-15975017.js?1594817584)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1608548811](https://drdjscs.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/ajaxCallback.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/ajaxCallback.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/sites/drdjscs.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-e60df765.js?1594817584](https://drdjscs.gouv.fr/sites/drdjscs.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-e60df765.js?1594817584)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1608548811](https://drdjscs.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
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
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/ajaxCallback.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/ajaxCallback.js?1608548811)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1608548811)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.autosave.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.autosave.js?1608548811)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?article6](https://drdjscs.gouv.fr/spip.php?article6)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?rubrique1](https://drdjscs.gouv.fr/spip.php?rubrique1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr](https://drdjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.placeholder-label.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.placeholder-label.js?1608548811)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?article2](https://drdjscs.gouv.fr/spip.php?article2)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?rubrique2](https://drdjscs.gouv.fr/spip.php?rubrique2)
  
  
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
  
  
  
* URL: [https://drdjscs.gouv.fr/sitemap.xml](https://drdjscs.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/squelettes-dist/css/spip.css](https://drdjscs.gouv.fr/squelettes-dist/css/spip.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://drdjscs.gouv.fr](https://drdjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?article6](https://drdjscs.gouv.fr/spip.php?article6)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?rubrique1](https://drdjscs.gouv.fr/spip.php?rubrique1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins-dist/mediabox/colorbox/black-striped/colorbox.css](https://drdjscs.gouv.fr/plugins-dist/mediabox/colorbox/black-striped/colorbox.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?rubrique2](https://drdjscs.gouv.fr/spip.php?rubrique2)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?article2](https://drdjscs.gouv.fr/spip.php?article2)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/squelettes-dist/css/form.css](https://drdjscs.gouv.fr/squelettes-dist/css/form.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/robots.txt](https://drdjscs.gouv.fr/robots.txt)
  
  
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

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins-dist/](https://drdjscs.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/](https://drdjscs.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins/](https://drdjscs.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/local/cache-js/](https://drdjscs.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/local/cache-css/](https://drdjscs.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/squelettes/](https://drdjscs.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/lib/](https://drdjscs.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/local/](https://drdjscs.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/squelettes-dist/](https://drdjscs.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?id_rubrique=1&page=backend](https://drdjscs.gouv.fr/spip.php?id_rubrique=1&page=backend)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/local/cache-vignettes/L144xH33/siteon0-72e40`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=backend](https://drdjscs.gouv.fr/spip.php?page=backend)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/local/cache-vignettes/L144xH33/siteon0-72e40`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?rubrique1](https://drdjscs.gouv.fr/spip.php?rubrique1)
  
  
  * Method: `GET`
  
  
  * Evidence: `YAIMouIz0NmA10+JVNJoO1n5aMZ5I4+IFwFCNgJJpfljdg5AHO+kZJiAXxoYsKeQnK6qsKUdzUO2trAAjTwLlx5jk9D3RnV8VRXEoUFFD4G4u9+eZlL46XBh5t5Oi1LPCrilnrEq6KTN06h0wYY9Ws+Sss99rA9IXKFmdn0a05LYfb+NOmjlxpsl5SPIb8qraOjFjCvLD75dW3xx0BH0oV+QsEEW9E9RlDggbfxHY8xUIEE6Vyv5H6xYJDDgTVG2`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `WHjTEkSS0Yp6rxUqJlLL3fNyljz02RWEJPj7CloAgQBJX/heqMPsFkMAaPFDV2FO1YvCkCJP+KDM98gpsugXXGaCCro=`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?lang=fr&page=spip_pass](https://drdjscs.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Evidence: `4Ewc3aEj1Jg/7P+15tZbkoiShikwKr4jz6mqbyuCcHsU83uh7bLxizXLGixVNdWwz2ymgNnXe+bD5HU=`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/robots.txt](https://drdjscs.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `PVdGvwxPeQkPD2cqJlLL3fNyljz02SXYSt6IXlsC6G1rvlIxLTportL9Sf8Z7XXCiVbA4Ue4JSvLZa+IlKLqZRmmGYI=`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?rubrique2](https://drdjscs.gouv.fr/spip.php?rubrique2)
  
  
  * Method: `GET`
  
  
  * Evidence: `YAKWwuMj0NhQMB8bomQMcmP74K3kJJftTEVUJ2w0j5Xwc02Gt0GpB5EtYfCbTcUVbaJBBcmckUnGD0N1bc/9r3gg3qPprPUQqg3UpZMTmRMl7/ZEDb2yYLenHBxIUaToRYHfuOdP2xYnxl0cVtHBH4Kw+tPSSjOLIETtoj1lQiAsRHKmM7LfZptOwuZ48YE7oTMqj7rqEem7kR7qiYeFir5vWHiSI5vLZp4uZfBAjiCV1Tldm7E2oA72P3v0`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/2011/REC-css3-selectors-20110929/`
  
  
  
  
* URL: [https://drdjscs.gouv.fr](https://drdjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1UmhlLtFJd1MCPAqJlLL3fNyljz02WRJ/mnDB5krU1E50WKXZSvDBkLv/K92oX2HD5rixIVrr4tfVM5sTtCkqr6anlo=`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Evidence: `6EoU3eEz1Jw/7MX0lpvlUZL9tkuCq2AL/j2b0u1PDWx0+41yHVConaab2CByiKiQk2cRCR1vHSwelN68kS7botegE+ivDLI=`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Evidence: `8EqMxqEz0JwvCdW07Uq0yJpJfNt3Kd9Pyf0FQ4SsLTxlrE+NTDtt4u0BLihCX/6KRyugv9TFXW1CWZNxAd28CcCcmSmj5ZQFLbWMocFQL7J4e3EO2hI=`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?id_rubrique=2&page=backend](https://drdjscs.gouv.fr/spip.php?id_rubrique=2&page=backend)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/local/cache-vignettes/L144xH33/siteon0-72e40`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>~��ƥ�Ɯ�﯊	޶׬��x�\x0011���"��'���{�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins/](https://drdjscs.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/local/cache-js/](https://drdjscs.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/](https://drdjscs.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins-dist/](https://drdjscs.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/local/](https://drdjscs.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/lib/](https://drdjscs.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/squelettes-dist/](https://drdjscs.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/local/cache-css/](https://drdjscs.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/squelettes/](https://drdjscs.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 9
  
### Solution
<p>Ensure each page is setting the specific and appropriate content-type value for the content being delivered.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx

  
#### CWE Id : 345
  
#### WASC Id : 12
  
#### Source ID : 3

  
  
  
  
### Cookie Poisoning
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where cookie parameters might be controlled. This is called a cookie poisoning attack, and becomes exploitable when an attacker can manipulate the cookie in various ways. In some cases this will not be exploitable, however, allowing URL parameters to set cookie values is generally considered a bug.</p>
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
Instances: 6
  
### Solution
<p>Do not allow user input to control cookie names and values. If some query string parameters must be set in cookie values, be sure to filter out semicolon's that can serve as name/value pair delimiters.</p>
  
### Other information
<p>An attacker may be able to poison cookie values through POST parameters. To test if this is a more serious issue, you should try resending that request as a GET, with the POST parameter included as a query string parameter. For example:  http://nottrusted.com/page?value=maliciousInput.</p><p></p><p>This was identified at:</p><p></p><p>https://drdjscs.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F</p><p></p><p>User-input was found in the following cookie:</p><p>drdjscsg60d4_lang_ecrire=fr; expires=Fri, 18-Mar-2022 19:24:21 GMT; Max-Age=31536000; path=/</p><p></p><p>The user input was:</p><p>var_lang_ecrire=fr</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-cookie

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/ajaxCallback.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/ajaxCallback.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `xxx`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/ajaxCallback.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/ajaxCallback.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/ajaxCallback.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/ajaxCallback.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.form.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
Instances: 12
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bXXX\b and was detected in the element starting with: " * rechargement ajax d'un formulaire dynamique implemente par formulaires/xxx.html", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://drdjscs.gouv.fr/sites/drdjscs.gouv.fr/local/cache-js/jsdyn-jquery_cookiebar_js-15975017.js?1594817584](https://drdjscs.gouv.fr/sites/drdjscs.gouv.fr/local/cache-js/jsdyn-jquery_cookiebar_js-15975017.js?1594817584)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" class="cb-enable">'+options.acceptText+'</a>`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://drdjscs.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins/ancresdouces/js/jquery.localscroll.js](https://drdjscs.gouv.fr/plugins/ancresdouces/js/jquery.localscroll.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>gmail<d>com | https://github.com/flesler
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jquerylocalscroll-10.html
 * @author Ariel Flesler
 * @version 2.0.0
 */
;(function(plugin) {
	// AMD Support
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], plugin);
	} else {
		plugin(jQuery);
	}
}(function($) {
	var URI = location.href.replace(/#.*/, ''); // local url without hash

	var $localScroll = $.localScroll = function(settings) {
		$('body').localScroll(settings);
	};

	// Many of these defaults, belong to jQuery.ScrollTo, check it's demo for an example of each option.
	// @see http://demos.flesler.com/jquery/scrollTo/
	// The defaults are public and can be overriden.
	$localScroll.defaults = {
		duration: 1000, // How long to animate.
		axis: 'y', // Which of top and left should be modified.
		event: 'click', // On which event to react.
		stop: true, // Avoid queuing animations
		target: window, // What to scroll (selector or element). The whole window by default.
		autoscroll: true // If true, applies the scrolling at initial page load.
		/*
		lock: false, // ignore events if already animating
		lazy: false, // if true, links can be added later, and will still work.
		filter: null, // filter some anchors out of the matched elements.
		hash: false, // if true, the hash of the selected link, will appear on the address bar.
		onBefore: null // called before scrolling, "this" contains the settings and gets 3 arguments
		*/
	};

	$.fn.localScroll = function(settings) {
		settings = $.extend({}, $localScroll.defaults, settings);

		if (settings.autoscroll && settings.hash && location.hash) {
			if (settings.target) window.scrollTo(0, 0);
			scroll(0, location, settings);
		}

		return settings.lazy ?
			// use event delegation, more links can be added later.
			this.on(settings.event, 'a,area', function(e) {
				if (filter.call(this)) {
					scroll(e, this, settings);
				}
			}) :
			// bind concretely, to each matching link
			this.find('a,area')
				.filter(filter).bind(settings.event, function(e) {
					scroll(e, this, settings);
				}).end()
			.end();

		function filter() {// is this a link that points to an anchor and passes a possible filter ? href is checked to avoid a bug in FF.
			return !!this.href && !!this.hash && this.href.replace(this.hash,'') === URI && (!settings.filter || $(this).is(settings.filter));
		}
	};

	// Not needed anymore, kept for backwards compatibility
	$localScroll.hash = function() {};

	function scroll(e, link, settings) {
		var id = link.hash.slice(1),
			elem = document.getElementById(id) || document.getElementsByName(id)[0];

		if (!elem) return;

		if (e) e.preventDefault();

		var $target = $(settings.target);

		if (settings.lock && $target.is(':animated') ||
			settings.onBefore && settings.onBefore(e, elem, $target) === false)
			return;

		if (settings.stop) {
			$target.stop(true); // remove all its animations
		}

		if (settings.hash) {
			var attr = elem.id === id ? 'id' : 'name',
				$a = $('`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?article6](https://drdjscs.gouv.fr/spip.php?article6)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="agrandir" title="Augmenter la police de caract&egrave;re">Augmenter la police de caract&egrave;re</a>`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1608548811](https://drdjscs.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a/>`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><p class="boutons"><input type="submit" class="submit" value="&gt;&gt;" /></p></noscript>`
  
  
  
  
* URL: [https://drdjscs.gouv.fr](https://drdjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://drdjscs.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/squelettes/js/localscroll/jquery.localscroll.js](https://drdjscs.gouv.fr/squelettes/js/localscroll/jquery.localscroll.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a> </a>`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?rubrique1](https://drdjscs.gouv.fr/spip.php?rubrique1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='pagination_articles_pagination' id='pagination_articles_pagination'></a>`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/javascript/jquery.js?1608548811](https://drdjscs.gouv.fr/prive/javascript/jquery.js?1608548811)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id='" + expando + "'></a>`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins/ancresdouces/js/jquery.scrollto.js](https://drdjscs.gouv.fr/plugins/ancresdouces/js/jquery.scrollto.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?article2](https://drdjscs.gouv.fr/spip.php?article2)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="agrandir" title="Augmenter la police de caract&egrave;re">Augmenter la police de caract&egrave;re</a>`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://drdjscs.gouv.fr/lib/](https://drdjscs.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/ecrire/](https://drdjscs.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins-dist/](https://drdjscs.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/prive/](https://drdjscs.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/plugins/](https://drdjscs.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://drdjscs.gouv.fr/sitemap.xml](https://drdjscs.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/local/](https://drdjscs.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/robots.txt](https://drdjscs.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr](https://drdjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/local/cache-css/](https://drdjscs.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
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

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `15975017`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `39373683`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1607544996`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1608548811`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/](https://drdjscs.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1594817584`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>15975017, which evaluates to: 1970-07-04 21:30:17</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/?Llist_2=http%3A%2F%2Fguadeloupe.drjscs.gouv.fr](https://drdjscs.gouv.fr/?Llist_2=http%3A%2F%2Fguadeloupe.drjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Llist_2`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://drdjscs.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://drdjscs.gouv.fr/?Llist_2=http%3A%2F%2Fguadeloupe.drjscs.gouv.fr](https://drdjscs.gouv.fr/?Llist_2=http%3A%2F%2Fguadeloupe.drjscs.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Llist_2`
  
  
  
  
Instances: 16
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://drdjscs.gouv.fr/spip.php?page=recherche&recherche=Rechercher</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [id] attribute </p><p></p><p>The user input found was:</p><p>recherche=Rechercher</p><p></p><p>The user-controlled value was:</p><p>rechercher</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
