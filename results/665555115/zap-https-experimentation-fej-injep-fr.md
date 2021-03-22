
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:30:30


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 9 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 9 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 1 | 
| Cookie No HttpOnly Flag | Low | 2 | 
| Cookie Without SameSite Attribute | Low | 5 | 
| Cookie Without Secure Flag | Low | 2 | 
| Dangerous JS Functions | Low | 11 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 12 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 9 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 9 | 
| Storable and Cacheable Content | Informational | 2 | 
| Timestamp Disclosure - Unix | Informational | 10 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 16 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html](https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/16-les-experimentations.html](https://experimentation-fej.injep.fr/16-les-experimentations.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html](https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html](https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/2-les-appels-a-projets.html](https://experimentation-fej.injep.fr/2-les-appels-a-projets.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html](https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet](https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1789-les-jeunes-en-milieu-rural-aprural.html](https://experimentation-fej.injep.fr/1789-les-jeunes-en-milieu-rural-aprural.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html](https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html)
  
  
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

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html](https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://injep.fr/"  target="_blank" title="Injep">Injep</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://injep.fr/"  target="_blank" title="Injep">Injep</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1789-les-jeunes-en-milieu-rural-aprural.html](https://experimentation-fej.injep.fr/1789-les-jeunes-en-milieu-rural-aprural.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://injep.fr/"  target="_blank" title="Injep">Injep</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html](https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://injep.fr/"  target="_blank" title="Injep">Injep</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html](https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://injep.fr/"  target="_blank" title="Injep">Injep</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html](https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://injep.fr/"  target="_blank" title="Injep">Injep</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://injep.fr/"  target="_blank" title="Injep">Injep</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet](https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://injep.fr/"  target="_blank" title="Injep">Injep</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/16-les-experimentations.html](https://experimentation-fej.injep.fr/16-les-experimentations.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://injep.fr/"  target="_blank" title="Injep">Injep</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html](https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://injep.fr/"  target="_blank" title="Injep">Injep</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/2-les-appels-a-projets.html](https://experimentation-fej.injep.fr/2-les-appels-a-projets.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://injep.fr/"  target="_blank" title="Injep">Injep</a>`
  
  
  
  
Instances: 11
  
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
<p>The identified library jquery, version 1.9.1.min is vulnerable.</p>
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/javascript/jquery-1.9.1.min.js](https://experimentation-fej.injep.fr/squelettes/javascript/jquery-1.9.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-1.9.1.min.js`
  
  
  
  
Instances: 1
  
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

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html](https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="" method="get">`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search-exp" action="https://experimentation-fej.injep.fr/spip.php?page=recherche-experimentation" method="get">`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="" method="get">`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html](https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search-exp" action="https://experimentation-fej.injep.fr/spip.php?page=recherche-experimentation" method="get">`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://experimentation-fej.injep.fr/spip.php?page=recherche-exp" method="get">`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html](https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://experimentation-fej.injep.fr/spip.php?page=recherche-exp" method="get" id="formulaire_recherche_multi">`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://experimentation-fej.injep.fr/spip.php?page=recherche-exp" method="get">`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search-exp" action="https://experimentation-fej.injep.fr/spip.php?page=recherche-experimentation" method="get">`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="" method="get">`
  
  
  
  
Instances: 9
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "page" "search-text" ].</p>
  
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
  
  
  
* URL: [https://experimentation-fej.injep.fr/63-infos-site.html](https://experimentation-fej.injep.fr/63-infos-site.html)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 40 [https://www.experimentation-fej.injep.fr].</p><p>Predicted response size: 340.</p><p>Response Body Length: 38,434.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `PHPSESSID`
  
  
  * Evidence: `Set-Cookie: PHPSESSID`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `PHPSESSID`
  
  
  * Evidence: `Set-Cookie: PHPSESSID`
  
  
  
  
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
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `PHPSESSID`
  
  
  * Evidence: `Set-Cookie: PHPSESSID`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `PHPSESSID`
  
  
  * Evidence: `Set-Cookie: PHPSESSID`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/robots.txt](https://experimentation-fej.injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djepva-exp-jeunes.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djepva-exp-jeunes.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djepva-exp-jeunes.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djepva-exp-jeunes.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djepva-exp-jeunes.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djepva-exp-jeunes.cegedim.cloud-HTTP`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `PHPSESSID`
  
  
  * Evidence: `Set-Cookie: PHPSESSID`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `PHPSESSID`
  
  
  * Evidence: `Set-Cookie: PHPSESSID`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://experimentation-fej.injep.fr/16-les-experimentations.html](https://experimentation-fej.injep.fr/16-les-experimentations.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html](https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet](https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html](https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/2-les-appels-a-projets.html](https://experimentation-fej.injep.fr/2-les-appels-a-projets.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html](https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1789-les-jeunes-en-milieu-rural-aprural.html](https://experimentation-fej.injep.fr/1789-les-jeunes-en-milieu-rural-aprural.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html](https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html](https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://experimentation-fej.injep.fr/1789-les-jeunes-en-milieu-rural-aprural.html](https://experimentation-fej.injep.fr/1789-les-jeunes-en-milieu-rural-aprural.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/2-les-appels-a-projets.html](https://experimentation-fej.injep.fr/2-les-appels-a-projets.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html](https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html](https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/16-les-experimentations.html](https://experimentation-fej.injep.fr/16-les-experimentations.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet](https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html](https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html](https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html](https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html)
  
  
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
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/stylesheets/core.css?v=1](https://experimentation-fej.injep.fr/squelettes/stylesheets/core.css?v=1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/stylesheets/ie.css](https://experimentation-fej.injep.fr/squelettes/stylesheets/ie.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/stylesheets/main.css?v=1](https://experimentation-fej.injep.fr/squelettes/stylesheets/main.css?v=1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/stylesheets/print.css](https://experimentation-fej.injep.fr/squelettes/stylesheets/print.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/stylesheets/override.css](https://experimentation-fej.injep.fr/squelettes/stylesheets/override.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/stylesheets/sub.css?v=1](https://experimentation-fej.injep.fr/squelettes/stylesheets/sub.css?v=1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/stylesheets/sub2.css?v=1](https://experimentation-fej.injep.fr/squelettes/stylesheets/sub2.css?v=1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/stylesheets/slideshow_home.css](https://experimentation-fej.injep.fr/squelettes/stylesheets/slideshow_home.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/robots.txt](https://experimentation-fej.injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/stylesheets/reset.css?v=1](https://experimentation-fej.injep.fr/squelettes/stylesheets/reset.css?v=1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/stylesheets/typography.css](https://experimentation-fej.injep.fr/squelettes/stylesheets/typography.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/stylesheets/styles-ie7.css](https://experimentation-fej.injep.fr/squelettes/stylesheets/styles-ie7.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://experimentation-fej.injep.fr/plugins/](https://experimentation-fej.injep.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/prive/](https://experimentation-fej.injep.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/](https://experimentation-fej.injep.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/images/apple-touch-icon.png](https://experimentation-fej.injep.fr/images/apple-touch-icon.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/extensions/](https://experimentation-fej.injep.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/local/](https://experimentation-fej.injep.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/lib/](https://experimentation-fej.injep.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/javascript/selectivizr.js](https://experimentation-fej.injep.fr/javascript/selectivizr.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/local/cache-css/](https://experimentation-fej.injep.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/local/cache-js/](https://experimentation-fej.injep.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes-dist/](https://experimentation-fej.injep.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html](https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L228xH116/arton1798-ff2ad`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html](https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/De_l_education_a_l_insertion_-_10_resultats_du_FEJ`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Fqjw+SE8wyZoJz8qJlLL3fNyljz02Rs6qo8A3Lm2W/5vHMEoHacSBYDcEmbJvH62EZdpy9Hgl5CQvg4fteWMhXEcEpg=`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/2-les-appels-a-projets.html](https://experimentation-fej.injep.fr/2-les-appels-a-projets.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L225xH123/arton1789-fd06f`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `/+wRfArbZI2/9BgqJlLL3fNyljz02QqveFjI5ocI5qLMWz1XlqVQpuGY+E4E6NuASyU9Ga078yKpgNYAzwttAmg8C1k=`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/sitemap.xml](https://experimentation-fej.injep.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/LFSE-Annonce-des-16-nouveaux-laureats`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L228xH116/arton1798-ff2ad`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet](https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L228xH116/arton1798-ff2ad`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html](https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L228xH116/arton1798-ff2ad`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/robots.txt](https://experimentation-fej.injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `ta5/7sx9aQQgG1kqJlLL3fNyljz02bBgqcUvgvrj+Bm8VWBnJz6IPFuwrDAbsejtJglmdDTj1tWITNKV5CM9fGGfT3Y=`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html](https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L228xH116/arton1798-ff2ad`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html](https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L304xH170/arton1554-a3667`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>��\x001a��\x001ar\x0017��('z�^�����G�^�j�h�^����٧</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://experimentation-fej.injep.fr/plugins/](https://experimentation-fej.injep.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/prive/](https://experimentation-fej.injep.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/local/cache-css/](https://experimentation-fej.injep.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes-dist/](https://experimentation-fej.injep.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/javascript/selectivizr.js](https://experimentation-fej.injep.fr/javascript/selectivizr.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/local/cache-js/](https://experimentation-fej.injep.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/lib/](https://experimentation-fej.injep.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/images/apple-touch-icon.png](https://experimentation-fej.injep.fr/images/apple-touch-icon.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/](https://experimentation-fej.injep.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/local/](https://experimentation-fej.injep.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/extensions/](https://experimentation-fej.injep.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure each page is setting the specific and appropriate content-type value for the content being delivered.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx

  
#### CWE Id : 345
  
#### WASC Id : 12
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/javascript/slides.jquery.js](https://experimentation-fej.injep.fr/squelettes/javascript/slides.jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/javascript/ui.selectmenu.js](https://experimentation-fej.injep.fr/squelettes/javascript/ui.selectmenu.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/javascript/ui.selectmenu.js](https://experimentation-fej.injep.fr/squelettes/javascript/ui.selectmenu.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/javascript/head.min.js](https://experimentation-fej.injep.fr/squelettes/javascript/head.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/javascript/jquery.filestyle.js](https://experimentation-fej.injep.fr/squelettes/javascript/jquery.filestyle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/javascript/jquery-1.9.1.min.js](https://experimentation-fej.injep.fr/squelettes/javascript/jquery-1.9.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/javascript/jquery.filestyle.js](https://experimentation-fej.injep.fr/squelettes/javascript/jquery.filestyle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/javascript/main.js](https://experimentation-fej.injep.fr/squelettes/javascript/main.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/squelettes/javascript/jquery-1.9.1.min.js](https://experimentation-fej.injep.fr/squelettes/javascript/jquery-1.9.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
Instances: 9
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected 6 times, the first in the element starting with: "							// get next from current + 1", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://experimentation-fej.injep.fr/16-les-experimentations.html](https://experimentation-fej.injep.fr/16-les-experimentations.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='pagination_article_triee_date' id='pagination_article_triee_date'></a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/2-les-appels-a-projets.html](https://experimentation-fej.injep.fr/2-les-appels-a-projets.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='pagination_article_triee_date' id='pagination_article_triee_date'></a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="Print" href="#" title="Imprimer">
				<img src="squelettes/images/icon_print.png" alt="Imprimer" />
			</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet](https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="Print" href="#" title="Imprimer">
				<img src="squelettes/images/icon_print.png" alt="Imprimer" />
			</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html](https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="Print" href="#" title="Imprimer">
				<img src="squelettes/images/icon_print.png" alt="Imprimer" />
			</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="Print" href="#" title="Imprimer">
				<img src="squelettes/images/icon_print.png" alt="Imprimer" />
			</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1789-les-jeunes-en-milieu-rural-aprural.html](https://experimentation-fej.injep.fr/1789-les-jeunes-en-milieu-rural-aprural.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="Print" href="#" title="Imprimer">
				<img src="squelettes/images/icon_print.png" alt="Imprimer" />
			</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html](https://experimentation-fej.injep.fr/1797-publication-de-l-injep-analyses-syntheses-la-place-des-familles-dans-les-dispositifs-de-reussite-educative.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="Print" href="#" title="Imprimer">
				<img src="squelettes/images/icon_print.png" alt="Imprimer" />
			</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html](https://experimentation-fej.injep.fr/1781-evaluation-de-la-prefiguration-du-service-national-universel.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="Print" href="#" title="Imprimer">
				<img src="squelettes/images/icon_print.png" alt="Imprimer" />
			</a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html](https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='pagination_article_triee_date' id='pagination_article_triee_date'></a>`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html](https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='pagination_article_triee_date' id='pagination_article_triee_date'></a>`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://experimentation-fej.injep.fr/ecrire/](https://experimentation-fej.injep.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/plugins/](https://experimentation-fej.injep.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/lib/](https://experimentation-fej.injep.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/local/cache-css/](https://experimentation-fej.injep.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/sitemap.xml](https://experimentation-fej.injep.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/local/](https://experimentation-fej.injep.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/extensions/](https://experimentation-fej.injep.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://experimentation-fej.injep.fr/robots.txt](https://experimentation-fej.injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/local/cache-js/](https://experimentation-fej.injep.fr/local/cache-js/)
  
  
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

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `20722183`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html](https://experimentation-fej.injep.fr/1798-la-reunion-lancement-de-nouvelles-experimentations-en-faveur-de-l-insertion-des-jeunes-et-du-developpement-de-la-vie-associative.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `20722183`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html](https://experimentation-fej.injep.fr/72-les-resultats-des-experimentations.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `20722183`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html](https://experimentation-fej.injep.fr/8-qu-est-ce-que-le-fej.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `20722183`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr](https://experimentation-fej.injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1372752720`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet](https://experimentation-fej.injep.fr/spip.php?page=connexion_extranet)
  
  
  * Method: `GET`
  
  
  * Evidence: `20722183`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20722183`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/16-les-experimentations.html](https://experimentation-fej.injep.fr/16-les-experimentations.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `20722183`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/2-les-appels-a-projets.html](https://experimentation-fej.injep.fr/2-les-appels-a-projets.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `20722183`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/](https://experimentation-fej.injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1372752720`
  
  
  
  
Instances: 10
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>20722183, which evaluates to: 1970-08-28 20:09:43</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `exp_region[]`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `exp_region[]`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `exp_region[]`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=13&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=13&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=14&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=14&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=13&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=13&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `exp_region[]`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `exp_region[]`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=14&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=14&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `exp_region[]`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `exp_region[]`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=14&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=14&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `exp_region[]`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=13&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=13&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `exp_region[]`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `exp_region[]`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=13&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=13&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp](https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 16
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://experimentation-fej.injep.fr/spip.php?exp_region%5B%5D=15&page=recherche-exp</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [option] tag [value] attribute </p><p></p><p>The user input found was:</p><p>exp_region[]=15</p><p></p><p>The user-controlled value was:</p><p>1550</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
