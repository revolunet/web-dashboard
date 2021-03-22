
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 20:08:26


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 5 |
| Low | 9 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 2 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Secure Pages Include Mixed Content (Including Scripts) | Medium | 4 | 
| Sub Resource Integrity Attribute Missing | Medium | 13 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 12 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 13 | 
| Dangerous JS Functions | Low | 10 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 2 | 
| Strict-Transport-Security Header Not Set | Low | 8 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 8 | 
| Information Disclosure - Suspicious Comments | Informational | 19 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 5 | 
| Storable and Cacheable Content | Informational | 6 | 
| Timestamp Disclosure - Unix | Informational | 16 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 9 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://sports.gouv.fr/squelettes/css/responsive.css](https://sports.gouv.fr/squelettes/css/responsive.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `36370249136206`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/actualites/article/la-semaine-olympique-et-paralympique-est-lancee](https://sports.gouv.fr/accueil-du-site/actualites/article/la-semaine-olympique-et-paralympique-est-lancee)
  
  
  * Method: `GET`
  
  
  * Evidence: `4933212826751369`
  
  
  
  
Instances: 2
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: DinersClub</p><p>Bank Identification Number: 363702</p><p>Brand: DINERS CLUB</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://sports.gouv.fr/faq/](https://sports.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english](https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/](https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/deplacements-internationaux/](https://sports.gouv.fr/pratiques-sportives/covid19/deplacements-internationaux/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/](https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/notice-d-information-aide-d-etat/](https://sports.gouv.fr/pratiques-sportives/covid19/notice-d-information-aide-d-etat/)
  
  
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
  
  
  
* URL: [https://sports.gouv.fr/faq/](https://sports.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.handiguide.sports.gouv.fr/trouver-structure-sportive.php" target="_blank">Trouver une structure </a>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/Sports_gouv" target="_blank" title="twitter">
				
					<img class="sg-icon-restons-en-contact" src="squelettes/img/sidebar-picto-twitter.png" alt="twitter" />
				</a>`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/Sports_gouv" target="_blank" title="twitter">
				
					<img class="sg-icon-restons-en-contact" src="squelettes/img/sidebar-picto-twitter.png" alt="twitter" />
				</a>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/](https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/Sports_gouv" target="_blank" title="twitter">
				
					<img class="sg-icon-restons-en-contact" src="squelettes/img/sidebar-picto-twitter.png" alt="twitter" />
				</a>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/notice-d-information-aide-d-etat/](https://sports.gouv.fr/pratiques-sportives/covid19/notice-d-information-aide-d-etat/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/Sports_gouv" target="_blank" title="twitter">
				
					<img class="sg-icon-restons-en-contact" src="squelettes/img/sidebar-picto-twitter.png" alt="twitter" />
				</a>`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/Sports_gouv" target="_blank" title="twitter">
				
					<img class="sg-icon-restons-en-contact" src="squelettes/img/sidebar-picto-twitter.png" alt="twitter" />
				</a>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/](https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/Sports_gouv" target="_blank" title="twitter">
				
					<img class="sg-icon-restons-en-contact" src="squelettes/img/sidebar-picto-twitter.png" alt="twitter" />
				</a>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/Sports_gouv" target="_blank" title="twitter">
				
					<img class="sg-icon-restons-en-contact" src="squelettes/img/sidebar-picto-twitter.png" alt="twitter" />
				</a>`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/Sports_gouv" target="_blank" title="twitter">
				
					<img class="sg-icon-restons-en-contact" src="squelettes/img/sidebar-picto-twitter.png" alt="twitter" />
				</a>`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english](https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/Sports_gouv" target="_blank" title="twitter">
				
					<img class="sg-icon-restons-en-contact" src="squelettes/img/sidebar-picto-twitter.png" alt="twitter" />
				</a>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/deplacements-internationaux/](https://sports.gouv.fr/pratiques-sportives/covid19/deplacements-internationaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/Sports_gouv" target="_blank" title="twitter">
				
					<img class="sg-icon-restons-en-contact" src="squelettes/img/sidebar-picto-twitter.png" alt="twitter" />
				</a>`
  
  
  
  
Instances: 11
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Secure Pages Include Mixed Content (Including Scripts)
##### Medium (Medium)
  
  
  
  
#### Description
<p>The page includes mixed content, that is content accessed via HTTP instead of HTTPS.</p>
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/a-savoir/](https://sports.gouv.fr/accueil-du-site/a-savoir/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://connect.facebook.net/en_US/all.js#xfbml=1`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/zoom-sur/](https://sports.gouv.fr/accueil-du-site/zoom-sur/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://connect.facebook.net/en_US/all.js#xfbml=1`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/videos/](https://sports.gouv.fr/accueil-du-site/videos/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://connect.facebook.net/en_US/all.js#xfbml=1`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/actualites/](https://sports.gouv.fr/accueil-du-site/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://connect.facebook.net/en_US/all.js#xfbml=1`
  
  
  
  
Instances: 4
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=script src=http://connect.facebook.net/en_US/all.js#xfbml=1</p><p>tag=script src=http://static.ak.fbcdn.net/connect.php/js/FB.Share</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english](https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://connect.facebook.net/en_US/all.js#xfbml=1"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://connect.facebook.net/en_US/all.js#xfbml=1"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/faq/](https://sports.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://connect.facebook.net/en_US/all.js#xfbml=1"></script>`
  
  
  
  
Instances: 13
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
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
  
  
  
* URL: [https://sports.gouv.fr/faq/](https://sports.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="" method="get" class="navbar-search pull-left">`
  
  
  
  
* URL: [https://sports.gouv.fr/faq/](https://sports.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="" method="get" class="navbar-search pull-left">`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="" method="get" class="navbar-search pull-left">`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="" method="get" class="navbar-search pull-left">`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="" method="get" class="navbar-search pull-left">`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="" method="get" class="navbar-search pull-left">`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english](https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="navbar-search pull-left">`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="" method="get" class="navbar-search pull-left">`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="" method="get" class="navbar-search pull-left">`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="" method="get" class="navbar-search pull-left">`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="" method="get" class="navbar-search pull-left">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 2: "page" "avancee" "id_rubrique" "lang" "recherche" ].</p>
  
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
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/article/decisions-sanitaires-au-16-01-2021](https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/article/decisions-sanitaires-au-16-01-2021)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/ethique-integrite/agir-contre-le-dopage/prevention/article/prevention](https://sports.gouv.fr/ethique-integrite/agir-contre-le-dopage/prevention/article/prevention)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/ethique-integrite/preserver-les-competitions/boite-a-outils/article/boite-a-outils](https://sports.gouv.fr/ethique-integrite/preserver-les-competitions/boite-a-outils/article/boite-a-outils)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/actualites/article/envie-de-sport-campagne-de-communication-de-reprise-du-sport](https://sports.gouv.fr/accueil-du-site/actualites/article/envie-de-sport-campagne-de-communication-de-reprise-du-sport)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/zoom-sur/article/plan-de-relance-nouvelles-mesures-de-soutien-pour-le-sport](https://sports.gouv.fr/accueil-du-site/zoom-sur/article/plan-de-relance-nouvelles-mesures-de-soutien-pour-le-sport)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/zoom-sur/article/l-initiative-du-jour-confines-quelles-sont-les-regles-pour-s-occuper-comme-un](https://sports.gouv.fr/accueil-du-site/zoom-sur/article/l-initiative-du-jour-confines-quelles-sont-les-regles-pour-s-occuper-comme-un)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/actualites/article/appel-a-projets-sport-et-sante-en-territoires-fragiles](https://sports.gouv.fr/accueil-du-site/actualites/article/appel-a-projets-sport-et-sante-en-territoires-fragiles)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/Plan-d-acces-ministere-des-sports](https://sports.gouv.fr/accueil-du-site/Plan-d-acces-ministere-des-sports)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/ethique-integrite/agir-contre-le-dopage/boite-a-outils/article/boite-a-outils](https://sports.gouv.fr/ethique-integrite/agir-contre-le-dopage/boite-a-outils/article/boite-a-outils)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/evenement-88/article/toutes-les-informations-concernant-les-mesures-sports-dans-le-contexte-de-la](https://sports.gouv.fr/accueil-du-site/evenement-88/article/toutes-les-informations-concernant-les-mesures-sports-dans-le-contexte-de-la)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/actualites/article/appel-a-projets-femmes-et-sport-vers-un-nouveau-depart](https://sports.gouv.fr/accueil-du-site/actualites/article/appel-a-projets-femmes-et-sport-vers-un-nouveau-depart)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/ecrire/](https://sports.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 120 [https://sports.gouv.fr/accueil-du-site/article/application-des-decisions-sanitaires-pour-le-sport-a-partir-du-16-janvier].</p><p>Predicted response size: 420.</p><p>Response Body Length: 487.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://sports.gouv.fr/robots.txt](https://sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-sports.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-sports.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-sports.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-sports.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-sports.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-sports.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://connect.facebook.net/en_US/all.js#xfbml=1`
  
  
  * Evidence: `<script src="https://connect.facebook.net/en_US/all.js#xfbml=1"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english](https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=DC-3452220`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=DC-3452220`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=DC-3452220`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  * Evidence: `<script src="https://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=DC-3452220`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=DC-3452220`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  * Evidence: `<script src="https://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://connect.facebook.net/en_US/all.js#xfbml=1`
  
  
  * Evidence: `<script src="https://connect.facebook.net/en_US/all.js#xfbml=1"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/faq/](https://sports.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=DC-3452220`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  * Evidence: `<script src="https://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=DC-3452220`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=DC-3452220"></script>`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://connect.facebook.net/en_US/all.js#xfbml=1`
  
  
  * Evidence: `<script src="https://connect.facebook.net/en_US/all.js#xfbml=1"></script>`
  
  
  
  
Instances: 13
  
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
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/ajaxCallback.js?1611841671](https://sports.gouv.fr/prive/javascript/ajaxCallback.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1611841671](https://sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://sports.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1611841671](https://sports.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://sports.gouv.fr/organisation/organisation-en-france/eco/observatoire/etudes/etudes-achevees/Etude-d-evaluation-de-l-impact-economique-mediatique-social-et-environnemental](https://sports.gouv.fr/organisation/organisation-en-france/eco/observatoire/etudes/etudes-achevees/Etude-d-evaluation-de-l-impact-economique-mediatique-social-et-environnemental)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://sports.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-cd1741ab.js?1611848636](https://sports.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-cd1741ab.js?1611848636)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://sports.gouv.fr/local/cache-js/jsdyn-jquery_cookiebar_js-cb8f3cd2.js?1609865816](https://sports.gouv.fr/local/cache-js/jsdyn-jquery_cookiebar_js-cb8f3cd2.js?1609865816)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://sports.gouv.fr/accueil-du-site/archives-de-l-ancien-site/index/Sport-sante-et-prevention/Prevention-et-lutte-contre-le-dopage/Prevention-10900/Les-outils-de-prevention/Comite-d-accompagnement-d-evaluation-et-de-validation-des-outils-de-prevention-du-dopage-CAEVODP/](https://sports.gouv.fr/accueil-du-site/archives-de-l-ancien-site/index/Sport-sante-et-prevention/Prevention-et-lutte-contre-le-dopage/Prevention-10900/Les-outils-de-prevention/Comite-d-accompagnement-d-evaluation-et-de-validation-des-outils-de-prevention-du-dopage-CAEVODP/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://sports.gouv.fr/emplois-metiers/diplomes-et-encadrement/Le-guide-de-l-evaluateur/](https://sports.gouv.fr/emplois-metiers/diplomes-et-encadrement/Le-guide-de-l-evaluateur/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/](https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english](https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/deplacements-internationaux/](https://sports.gouv.fr/pratiques-sportives/covid19/deplacements-internationaux/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/faq/](https://sports.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/](https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/notice-d-information-aide-d-etat/](https://sports.gouv.fr/pratiques-sportives/covid19/notice-d-information-aide-d-etat/)
  
  
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
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/](https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sports.gouv.fr/robots.txt](https://sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sports.gouv.fr/faq/](https://sports.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english](https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sports.gouv.fr/sitemap.xml](https://sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/](https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/)
  
  
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
  
  
  
* URL: [https://sports.gouv.fr/organisation/le-ministere/](https://sports.gouv.fr/organisation/le-ministere/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/x1b1t7p`
  
  
  
  
* URL: [https://sports.gouv.fr/organisation/le-ministere/Missions-11062/](https://sports.gouv.fr/organisation/le-ministere/Missions-11062/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/x1b1t7p`
  
  
  
  
Instances: 2
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=iframe src=http://www.dailymotion.com/embed/video/x1b1t7p</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://sports.gouv.fr/www.data.gouv.fr](https://sports.gouv.fr/www.data.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/squelettes/](https://sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/squelettes-dist/](https://sports.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/extensions/](https://sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/lib/](https://sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/](https://sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/plugins/](https://sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/local/](https://sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://sports.gouv.fr/robots.txt](https://sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `gxeXy4+6pZxD/t0qJlLL3fNyljz02YhMO2yc05xpC10bNVFkpWqLXIxJZjqGo7eZopy4qD/xNfx4bcB0LqFTL2RMBZ0=`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `M/V4stpT3GNfHuMqJlLL3fNyljz02QBvKwugJkVZ8bh6Ub+9WqQ2vyvlrTa/9q64JlSYQInWM7QoGj8IR7XjiEOub/0=`
  
  
  
  
* URL: [https://sports.gouv.fr/faq/](https://sports.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `pratiques-sportives/sport-sante-bien-etre/Le-Pole-Ressources-national-Sport-et-Sante-11176/`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `pratiques-sportives/sport-sante-bien-etre/Le-Pole-Ressources-national-Sport-et-Sante-11176/`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/](https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/)
  
  
  * Method: `GET`
  
  
  * Evidence: `pratiques-sportives/sport-sante-bien-etre/Le-Pole-Ressources-national-Sport-et-Sante-11176/`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `pratiques-sportives/sport-sante-bien-etre/Le-Pole-Ressources-national-Sport-et-Sante-11176/`
  
  
  
  
* URL: [https://sports.gouv.fr/sitemap.xml](https://sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/emplois-metiers/diplomes-et-encadrement/le-desjeps/Textes-abroges-11474/`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `OdDJjHcnAOtM0x0qJlLL3fNyljz02SXI58jgdckOnCtG5kb8RRXkkvOBkYJuJkuWjVjcMNgd5RhRDak9UCSgWR490oY=`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `pratiques-sportives/sport-sante-bien-etre/Le-Pole-Ressources-national-Sport-et-Sante-11176/`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english](https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english)
  
  
  * Method: `GET`
  
  
  * Evidence: `A8re-des-Sports/105063419566358`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  * Evidence: `pratiques-sportives/sport-sante-bien-etre/Le-Pole-Ressources-national-Sport-et-Sante-11176/`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/](https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/)
  
  
  * Method: `GET`
  
  
  * Evidence: `pratiques-sportives/sport-sante-bien-etre/Le-Pole-Ressources-national-Sport-et-Sante-11176/`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�\x0017�ˏ���C��*&R���r�<�وL;l�Ӝi\x000b]\x001b5Qd�j�\�If:��������?�5�xm�t.�S/dL\x0005�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://sports.gouv.fr/lib/](https://sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/](https://sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/extensions/](https://sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/www.data.gouv.fr](https://sports.gouv.fr/www.data.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/squelettes-dist/](https://sports.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/local/](https://sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/squelettes/](https://sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/plugins/](https://sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.form.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/javascript/jquery.js?1611841671](https://sports.gouv.fr/prive/javascript/jquery.js?1611841671)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
Instances: 19
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bWHERE\b and was detected 9 times, the first in the element starting with: "		// For CommonJS and CommonJS-like environments where a proper `window`", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/](https://sports.gouv.fr/pratiques-sportives/covid19/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="sg-btn-show" data-toggle="collapse" data-target=".nav-collapse-menu">
                <img src="squelettes/img/header-smartphone-plus.png" alt="Menu" />
            </a>`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english](https://sports.gouv.fr/spip.php?id_syndic=0&page=sg-english)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" onclick="resizeText(20)" alt="Text Size Up" class="sg-picto-header sg-picto-header-a-p"></a>`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" onclick="resizeText(20)" alt="Agrandir la taille des caractères" title="Agrandir la taille des caractères" class="sg-picto-header sg-picto-header-a-p"></a>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/notice-d-information-aide-d-etat/](https://sports.gouv.fr/pratiques-sportives/covid19/notice-d-information-aide-d-etat/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="sg-btn-show" data-toggle="collapse" data-target=".nav-collapse-menu">
                <img src="squelettes/img/header-smartphone-plus.png" alt="Menu" />
            </a>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/](https://sports.gouv.fr/pratiques-sportives/covid19/webinaire-mesures-de-soutien/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="sg-btn-show" data-toggle="collapse" data-target=".nav-collapse-menu">
                <img src="squelettes/img/header-smartphone-plus.png" alt="Menu" />
            </a>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/deplacements-internationaux/](https://sports.gouv.fr/pratiques-sportives/covid19/deplacements-internationaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="sg-btn-show" data-toggle="collapse" data-target=".nav-collapse-menu">
                <img src="squelettes/img/header-smartphone-plus.png" alt="Menu" />
            </a>`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" onclick="resizeText(20)" alt="Agrandir la taille des caractères" title="Agrandir la taille des caractères" class="sg-picto-header sg-picto-header-a-p"></a>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/](https://sports.gouv.fr/pratiques-sportives/covid19/decisions-sanitaires-au-16-01-2021/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="sg-btn-show" data-toggle="collapse" data-target=".nav-collapse-menu">
                <img src="squelettes/img/header-smartphone-plus.png" alt="Menu" />
            </a>`
  
  
  
  
* URL: [https://sports.gouv.fr/pratiques-sportives/](https://sports.gouv.fr/pratiques-sportives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="sg-btn-show" data-toggle="collapse" data-target=".nav-collapse-menu">
                <img src="squelettes/img/header-smartphone-plus.png" alt="Menu" />
            </a>`
  
  
  
  
* URL: [https://sports.gouv.fr/faq/](https://sports.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="sg-btn-show" data-toggle="collapse" data-target=".nav-collapse-menu">
                <img src="squelettes/img/header-smartphone-plus.png" alt="Menu" />
            </a>`
  
  
  
  
* URL: [https://sports.gouv.fr/services-pratiques/](https://sports.gouv.fr/services-pratiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="sg-btn-show" data-toggle="collapse" data-target=".nav-collapse-menu">
                <img src="squelettes/img/header-smartphone-plus.png" alt="Menu" />
            </a>`
  
  
  
  
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
  
  
  
* URL: [https://sports.gouv.fr/local/](https://sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://sports.gouv.fr/prive/](https://sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://sports.gouv.fr/plugins/](https://sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://sports.gouv.fr/ecrire/](https://sports.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://sports.gouv.fr/squelettes-dist/](https://sports.gouv.fr/squelettes-dist/)
  
  
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
  
  
  
* URL: [https://sports.gouv.fr/lib/](https://sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/sitemap.xml](https://sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/extensions/](https://sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr](https://sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/robots.txt](https://sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
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
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1611738337`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609867403`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615659010`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1611848618`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1610727159`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1611841671`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609865816`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `42212349`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609951995`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615305027`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1611848636`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609865814`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609928192`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615224122`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609865815`
  
  
  
  
* URL: [https://sports.gouv.fr/](https://sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615493557`
  
  
  
  
Instances: 16
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1611738337, which evaluates to: 2021-01-27 09:05:37</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://sports.gouv.fr/?avancee=0&id_rubrique&lang=fr&page=sg-recherche&recherche=ZAP](https://sports.gouv.fr/?avancee=0&id_rubrique&lang=fr&page=sg-recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `lang`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?page=sg-agenda](https://sports.gouv.fr/spip.php?page=sg-agenda)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://sports.gouv.fr/?avancee=0&id_rubrique&lang=fr&page=sg-recherche&recherche=ZAP](https://sports.gouv.fr/?avancee=0&id_rubrique&lang=fr&page=sg-recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://sports.gouv.fr/?avancee=0&id_rubrique&lang=fr&page=sg-recherche&recherche=ZAP](https://sports.gouv.fr/?avancee=0&id_rubrique&lang=fr&page=sg-recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `lang`
  
  
  
  
* URL: [https://sports.gouv.fr/?avancee=0&id_rubrique&lang=fr&page=sg-recherche&recherche=ZAP](https://sports.gouv.fr/?avancee=0&id_rubrique&lang=fr&page=sg-recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `lang`
  
  
  
  
* URL: [https://sports.gouv.fr/?avancee=0&id_rubrique&lang=fr&page=sg-recherche&recherche=ZAP](https://sports.gouv.fr/?avancee=0&id_rubrique&lang=fr&page=sg-recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://sports.gouv.fr/spip.php?page=sg-contact](https://sports.gouv.fr/spip.php?page=sg-contact)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 9
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://sports.gouv.fr/?avancee=0&id_rubrique&lang=fr&page=sg-recherche&recherche=ZAP</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [html] tag [lang] attribute </p><p></p><p>The user input found was:</p><p>lang=fr</p><p></p><p>The user-controlled value was:</p><p>fr</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
