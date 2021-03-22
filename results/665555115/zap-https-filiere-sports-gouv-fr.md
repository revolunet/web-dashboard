
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:31:27


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 7 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Sub Resource Integrity Attribute Missing | Medium | 10 | 
| Vulnerable JS Library | Medium | 2 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 6 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Dangerous JS Functions | Low | 6 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 12 | 
| Strict-Transport-Security Header Not Set | Low | 12 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 12 | 
| Modern Web Application | Informational | 12 | 
| Non-Storable Content | Informational | 9 | 
| Storable and Cacheable Content | Informational | 1 | 
| Storable but Non-Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 4 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 11 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://filiere.sports.gouv.fr/info-sites.html](https://filiere.sports.gouv.fr/info-sites.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports.html](https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/reseaux-thematiques.html](https://filiere.sports.gouv.fr/reseaux-thematiques.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/sites-publics.html](https://filiere.sports.gouv.fr/sites-publics.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports-86.html](https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports-86.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/annexes.html](https://filiere.sports.gouv.fr/annexes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr](https://filiere.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/sport-a-l-export.html](https://filiere.sports.gouv.fr/sport-a-l-export.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/informations-generales.html](https://filiere.sports.gouv.fr/informations-generales.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/actualites.html](https://filiere.sports.gouv.fr/actualites.html)
  
  
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

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://filiere.sports.gouv.fr](https://filiere.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/sport-a-l-export.html](https://filiere.sports.gouv.fr/sport-a-l-export.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/informations-generales.html](https://filiere.sports.gouv.fr/informations-generales.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/reseaux-thematiques.html](https://filiere.sports.gouv.fr/reseaux-thematiques.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,400italic,300italic,500italic,700,700italic,900,900italic,100italic,100' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr](https://filiere.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,400italic,300italic,500italic,700,700italic,900,900italic,100italic,100' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/reseaux-thematiques.html](https://filiere.sports.gouv.fr/reseaux-thematiques.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,400italic,300italic,500italic,700,700italic,900,900italic,100italic,100' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/sport-a-l-export.html](https://filiere.sports.gouv.fr/sport-a-l-export.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,400italic,300italic,500italic,700,700italic,900,900italic,100italic,100' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/informations-generales.html](https://filiere.sports.gouv.fr/informations-generales.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,400italic,300italic,500italic,700,700italic,900,900italic,100italic,100' rel='stylesheet' type='text/css' />`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v3.2.1`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes/bootstrap-dist/js/bootstrap.js](https://filiere.sports.gouv.fr/squelettes/bootstrap-dist/js/bootstrap.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `* Bootstrap v3.3.7`
  
  
  
  
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

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://filiere.sports.gouv.fr/info-sites.html](https://filiere.sports.gouv.fr/info-sites.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/info-sites.html'>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr](https://filiere.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/#'>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/annexes.html](https://filiere.sports.gouv.fr/annexes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/annexes.html'>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/reseaux-thematiques.html](https://filiere.sports.gouv.fr/reseaux-thematiques.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/reseaux-thematiques.html'>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/sites-publics.html](https://filiere.sports.gouv.fr/sites-publics.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/sites-publics.html'>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports-86.html](https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports-86.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/plan-de-relance-les-actions-du-ministere-charge-des-sports-86.html'>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/informations-generales.html](https://filiere.sports.gouv.fr/informations-generales.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/informations-generales.html'>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/#'>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/sport-a-l-export.html](https://filiere.sports.gouv.fr/sport-a-l-export.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/sport-a-l-export.html'>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports.html](https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/plan-de-relance-les-actions-du-ministere-charge-des-sports.html'>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/actualites.html](https://filiere.sports.gouv.fr/actualites.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/actualites.html'>`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "formulaire_action" "formulaire_action_args" "var_login" "password" "session_remember" ].</p>
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/observatoire-de-l-economie-du-sports.html](https://filiere.sports.gouv.fr/observatoire-de-l-economie-du-sports.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plan-du-site.html](https://filiere.sports.gouv.fr/plan-du-site.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/ministere-des-affaires-etrangeres-et-du-developpement-international.html](https://filiere.sports.gouv.fr/ministere-des-affaires-etrangeres-et-du-developpement-international.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/modifier-ses-alertes.html](https://filiere.sports.gouv.fr/modifier-ses-alertes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/ministere-de-l-economie-et-des-finances.html](https://filiere.sports.gouv.fr/ministere-de-l-economie-et-des-finances.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/ecrire/](https://filiere.sports.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 6
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 34 [http://www.sports.gouv.fr/sporteco].</p><p>Predicted response size: 334.</p><p>Response Body Length: 401.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-fes-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-fes-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/robots.txt](https://filiere.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-fes-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-fes-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr](https://filiere.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-fes-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-fes-preprod.cegedim.cloud-HTTP`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1612445346](https://filiere.sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins-dist/jquery_ui/prive/javascript/ui/jquery-ui.js?1612445346](https://filiere.sports.gouv.fr/plugins-dist/jquery_ui/prive/javascript/ui/jquery-ui.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/ajaxCallback.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/ajaxCallback.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins/selecteurgenerique/javascript/selecteur_generique_functions.js](https://filiere.sports.gouv.fr/plugins/selecteurgenerique/javascript/selecteur_generique_functions.js)
  
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/sport-a-l-export.html](https://filiere.sports.gouv.fr/sport-a-l-export.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr](https://filiere.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/annexes.html](https://filiere.sports.gouv.fr/annexes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports-86.html](https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports-86.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/reseaux-thematiques.html](https://filiere.sports.gouv.fr/reseaux-thematiques.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/sites-publics.html](https://filiere.sports.gouv.fr/sites-publics.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports.html](https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/informations-generales.html](https://filiere.sports.gouv.fr/informations-generales.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/actualites.html](https://filiere.sports.gouv.fr/actualites.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/info-sites.html](https://filiere.sports.gouv.fr/info-sites.html)
  
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes/css/alertes.css](https://filiere.sports.gouv.fr/squelettes/css/alertes.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/spip.php?page=backend](https://filiere.sports.gouv.fr/spip.php?page=backend)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins-dist/mediabox/colorbox/black-striped/colorbox.css](https://filiere.sports.gouv.fr/plugins-dist/mediabox/colorbox/black-striped/colorbox.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes/bootstrap-dist/plugins/offset/bootstrap-3-offset.css?1612445346](https://filiere.sports.gouv.fr/squelettes/bootstrap-dist/plugins/offset/bootstrap-3-offset.css?1612445346)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins-dist/jquery_ui/css/ui/jquery-ui.css](https://filiere.sports.gouv.fr/plugins-dist/jquery_ui/css/ui/jquery-ui.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/lib/font-awesome/css/font-awesome.min.css](https://filiere.sports.gouv.fr/lib/font-awesome/css/font-awesome.min.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/robots.txt](https://filiere.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/spip.php?lang=fr&page=spip_pass](https://filiere.sports.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/sitemap.xml](https://filiere.sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, must-revalidate`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes/bootstrap-dist/css/bootstrap.min.css?1612445346](https://filiere.sports.gouv.fr/squelettes/bootstrap-dist/css/bootstrap.min.css?1612445346)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/local/cache-scss/main-cssify-7d6f066.css?1616065972](https://filiere.sports.gouv.fr/local/cache-scss/main-cssify-7d6f066.css?1616065972)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins/contacts/contacts.css](https://filiere.sports.gouv.fr/plugins/contacts/contacts.css)
  
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes/](https://filiere.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes/css/assets/select-hover.jpg](https://filiere.sports.gouv.fr/squelettes/css/assets/select-hover.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes/css/assets/select.jpg](https://filiere.sports.gouv.fr/squelettes/css/assets/select.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins-dist/](https://filiere.sports.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/](https://filiere.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins/](https://filiere.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/local/cache-css/](https://filiere.sports.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/local/](https://filiere.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/IMG/](https://filiere.sports.gouv.fr/IMG/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes-dist/](https://filiere.sports.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/lib/](https://filiere.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/informations-generales.html](https://filiere.sports.gouv.fr/informations-generales.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `S4OaVOYIvGPF5urmh7XQuwOtUDLUTRNDmYbeFGsAyEbRftekHOYAijzig4Oo4TLsA5khiBeQmi3MDgYZfHO6UChXnOlXqoODLd7JOf5OF1Bls9rh6HU0hAA=`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr](https://filiere.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `DY/EuYbh3a9w2m8qJlLL3fNyljz02ahHOQ0vaFSuSvyCdzHsg4kA5PLK6u4BIi1VIY2vv1EL6jVL+6cDuq+X00aBuKk=`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/sites-publics.html](https://filiere.sports.gouv.fr/sites-publics.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `U4PgUOYIoGPV4uKi8Ygko3KxrQRSZsZPuxXHjDQLWMAzH9IYZueSO0w/tvt2uNFllq+Yb9Lfy8cSo6LzCOqhlEajWhbh5wbC/yFmN1ZbofilRQ==`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports-86.html](https://filiere.sports.gouv.fr/plan-de-relance-les-actions-du-ministere-charge-des-sports-86.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `U47qVOUIoCPU4uoSkSCyACe6k756zC37zY7HTL6uyeKYWfkZQ03AnkoTGD77njgIi9d5kP7DSZut7d3oBfilaMda58J9apnXOIoaz1x/FR887IfaUuJtZ9de9F8dGH7OOl6N5QJBT+OdOMCVcNfxJ2fvkw==`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/sport-a-l-export.html](https://filiere.sports.gouv.fr/sport-a-l-export.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `S4N6VCYYvCPUJrN2MzwNLCUGxjLa9KzTnl9rsDguusWrpoLjtPIF0mfVzdH3Jbch2hcyMB1esy1kJBwa7k9pcBOx6oM71nG04o8LXYxWu+1YpVBb`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/annexes.html](https://filiere.sports.gouv.fr/annexes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `U4NgV+YIvGPVBEJNZz0Yp9Q+nzIPSkmbopALv9vK4piKaJ1W1/1IOlx6zexoisHfb/d/t5UwJDp46Jtadv3/MA5OfH/wl1UC8qtfgevT9Q==`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `e4NqV+YIvGbVBELNTB5pZtOasl/mrnri3Q5uva5k1S43RTGIHE/VANEE76JmcLJgqBgHyHix9BXJCD1yFb1k7EFT7g==`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/reseaux-thematiques.html](https://filiere.sports.gouv.fr/reseaux-thematiques.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `S43qUOYIoCPU4uKiDWVa3gEPNF4cauHZRpLL1v7Wxf0exXPmJ2jSE64qje4mdnXutn6hoIPfUgo52tPCcQiRFq4kj+vI+A9oK64mqN+qBUU1+x3o/9gM`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `f0Vbu7lQa+oHnf8qJlLL3fNyljz02WlCbIQpQ6z4FAgx4wZ4xPyTooitGYedDMPnSl2T0tkY+zzCIcpHk0WLwD6j5kM=`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/actualites.html](https://filiere.sports.gouv.fr/actualites.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `U4NqV+YIvGPFBGANFkLY6528d17cW2rNF19JvqSW0icWf2WW+hSLnTLc2BcdCL3tj4q2qJ7eSwaKjfLj2Jxv9D4PIO38/YTrjs+pbUDNCRc=`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/robots.txt](https://filiere.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `nAxN3030s8khj44qJlLL3fNyljz02a+9a4yawnQwyo9jNO/DI8QiceS1Tjkn5Cs2PAxAdusxCcKVib+skC2Wg3pSM1c=`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/info-sites.html](https://filiere.sports.gouv.fr/info-sites.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `U4PiVOYIvGPF5ipan325VplcU4eaYbo0oJdbDkP5SulDXLRSGUiwMya0ITjtLOtAU9AaEU7lQ7oHwXXHheBtrOltho7RMrDgQyr/IZZxiCk=`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>K��T�\x0008�c���懵л\x0003�P2�M\x0013C���\x0014k\x0000�F�~פ\x001c�\x0000�<⃃��2�\x0003�!�\x0017��-�\x000e\x0006\x0019|s�P(W��W���-��9�N\x0017Pe����u4�\x0000</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes/css/assets/select-hover.jpg](https://filiere.sports.gouv.fr/squelettes/css/assets/select-hover.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins-dist/](https://filiere.sports.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes/css/assets/select.jpg](https://filiere.sports.gouv.fr/squelettes/css/assets/select.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/lib/](https://filiere.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes/](https://filiere.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/local/](https://filiere.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/IMG/](https://filiere.sports.gouv.fr/IMG/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins/](https://filiere.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/](https://filiere.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/squelettes-dist/](https://filiere.sports.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/local/cache-css/](https://filiere.sports.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/ajaxCallback.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/ajaxCallback.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `xxx`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/ajaxCallback.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/ajaxCallback.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/ajaxCallback.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/ajaxCallback.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346](https://filiere.sports.gouv.fr/prive/javascript/jquery.form.js?1612445346)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/algerie.html](https://filiere.sports.gouv.fr/algerie.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/coree-du-sud.html](https://filiere.sports.gouv.fr/coree-du-sud.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/indonesie.html](https://filiere.sports.gouv.fr/indonesie.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/cameroun.html](https://filiere.sports.gouv.fr/cameroun.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/bresil.html](https://filiere.sports.gouv.fr/bresil.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr](https://filiere.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/commission-financement-23.html](https://filiere.sports.gouv.fr/commission-financement-23.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/actualites.html](https://filiere.sports.gouv.fr/actualites.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/ghana.html](https://filiere.sports.gouv.fr/ghana.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/inde.html](https://filiere.sports.gouv.fr/inde.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/etat-d-avancement-du-cfc.html](https://filiere.sports.gouv.fr/etat-d-avancement-du-cfc.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><div style="background-image: url('https://filiere.sports.gouv.fr/spip.php?action=cron');"></div></noscript>`
  
  
  
  
Instances: 12
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>A noScript tag has been found, which is an indication that the application works differently with JavaScript enabled compared to when it is not.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://filiere.sports.gouv.fr/local/cache-css/](https://filiere.sports.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/lib/](https://filiere.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/prive/](https://filiere.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/ecrire/](https://filiere.sports.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins/](https://filiere.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/local/](https://filiere.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/plugins-dist/](https://filiere.sports.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr](https://filiere.sports.gouv.fr)
  
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/robots.txt](https://filiere.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/sitemap.xml](https://filiere.sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
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
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1507209798`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612445346`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616065972`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1507209750`
  
  
  
  
Instances: 4
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1507209798, which evaluates to: 2017-10-05 13:23:18</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://filiere.sports.gouv.fr/spip.php?lang=fr&page=spip_pass](https://filiere.sports.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `lang`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `session_remember`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://filiere.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/spip.php?lang=fr&page=spip_pass](https://filiere.sports.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `lang`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://filiere.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/spip.php?lang=fr&page=spip_pass](https://filiere.sports.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action_args`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/spip.php?lang=fr&page=spip_pass](https://filiere.sports.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `lang`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_login`
  
  
  
  
* URL: [https://filiere.sports.gouv.fr/](https://filiere.sports.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `password`
  
  
  
  
Instances: 11
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://filiere.sports.gouv.fr/spip.php?lang=fr&page=spip_pass</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [html] tag [xml:lang] attribute </p><p></p><p>The user input found was:</p><p>lang=fr</p><p></p><p>The user-controlled value was:</p><p>fr</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
