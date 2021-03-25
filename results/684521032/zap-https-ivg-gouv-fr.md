
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:45:09


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 4 |
| Low | 9 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 2 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 4 | 
| Sub Resource Integrity Attribute Missing | Medium | 10 | 
| Vulnerable JS Library | Medium | 2 | 
| Absence of Anti-CSRF Tokens | Low | 12 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 12 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 4 | 
| Dangerous JS Functions | Low | 7 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Insufficient Site Isolation Against Spectre Vulnerability | Low | 6 | 
| Strict-Transport-Security Header Not Set | Low | 12 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 7 | 
| Storable and Cacheable Content | Informational | 3 | 
| Storable but Non-Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 9 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 30 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://ivg.gouv.fr/IMG/pdf/guide_ivg_medicamenteuse_memo_pratique_sans_visuels_couv_2017.pdf](https://ivg.gouv.fr/IMG/pdf/guide_ivg_medicamenteuse_memo_pratique_sans_visuels_couv_2017.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `50122068118083`
  
  
  
  
* URL: [https://ivg.gouv.fr/IMG/pdf/guide_ivg_hors_etablissement_2017-2.pdf](https://ivg.gouv.fr/IMG/pdf/guide_ivg_hors_etablissement_2017-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `50122068118083`
  
  
  
  
Instances: 2
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 501220</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html](https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-chirurgicale.html](https://ivg.gouv.fr/ivg-chirurgicale.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-qui-peut-m-aider.html](https://ivg.gouv.fr/ivg-qui-peut-m-aider.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr](https://ivg.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html](https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html](https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/comment-avorter.html](https://ivg.gouv.fr/comment-avorter.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-prix.html](https://ivg.gouv.fr/avortement-prix.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-medicamenteuse.html](https://ivg.gouv.fr/ivg-medicamenteuse.html)
  
  
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
  
  
  
* URL: [https://ivg.gouv.fr/ils-ont-participe-a-la-campagne.html](https://ivg.gouv.fr/ils-ont-participe-a-la-campagne.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="//storify.com/MinistereSante/participez" target="_blank">View the story "#IVGcestmondroit" on Storify</a>`
  
  
  
  
* URL: [https://ivg.gouv.fr/ils-ont-participe-a-la-campagne.html](https://ivg.gouv.fr/ils-ont-participe-a-la-campagne.html)
  
  
  * Method: `POST`
  
  
  * Evidence: `<a href="//storify.com/MinistereSante/participez" target="_blank">View the story "#IVGcestmondroit" on Storify</a>`
  
  
  
  
* URL: [https://ivg.gouv.fr/ils-ont-participe-a-la-campagne-cosmopolitan.html](https://ivg.gouv.fr/ils-ont-participe-a-la-campagne-cosmopolitan.html)
  
  
  * Method: `POST`
  
  
  * Evidence: `<a href="//storify.com/Cosmopolitan_fr/ivg-c-est-mon-droit-cosmo" target="_blank">View the story "Cosmo s&#8217;engage" on Storify</a>`
  
  
  
  
* URL: [https://ivg.gouv.fr/ils-ont-participe-a-la-campagne-cosmopolitan.html](https://ivg.gouv.fr/ils-ont-participe-a-la-campagne-cosmopolitan.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="//storify.com/Cosmopolitan_fr/ivg-c-est-mon-droit-cosmo" target="_blank">View the story "Cosmo s&#8217;engage" on Storify</a>`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://ivg.gouv.fr](https://ivg.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,500,700,600" rel="stylesheet">`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,500,700,600" rel="stylesheet">`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html](https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,500,700,600" rel="stylesheet">`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">`
  
  
  
  
* URL: [https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html](https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,500,700,600" rel="stylesheet">`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html](https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">`
  
  
  
  
* URL: [https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html](https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">`
  
  
  
  
* URL: [https://ivg.gouv.fr](https://ivg.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,500,700,600" rel="stylesheet">`
  
  
  
  
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
  
  
  
* URL: [https://ivg.gouv.fr/prive/javascript/jquery.js?1615993742](https://ivg.gouv.fr/prive/javascript/jquery.js?1615993742)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v3.2.1`
  
  
  
  
* URL: [https://ivg.gouv.fr/squelettes/bootstrap-dist/js/bootstrap.js](https://ivg.gouv.fr/squelettes/bootstrap-dist/js/bootstrap.js)
  
  
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
  
  
  
* URL: [https://ivg.gouv.fr/avortement-prix.html](https://ivg.gouv.fr/avortement-prix.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" id="regionSelect" name="regionSelect" class="regionSelect" action="/avortement-prix.html">`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" id="regionSelect" name="regionSelect" class="regionSelect" action="/#">`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" action="/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html">`
  
  
  
  
* URL: [https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html](https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" action="/avant-l-ivg-deux-consultations-medicales.html">`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-prix.html](https://ivg.gouv.fr/avortement-prix.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" action="/avortement-prix.html">`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html](https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" id="regionSelect" name="regionSelect" class="regionSelect" action="/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html">`
  
  
  
  
* URL: [https://ivg.gouv.fr/comment-avorter.html](https://ivg.gouv.fr/comment-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" action="/comment-avorter.html">`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" id="regionSelect" name="regionSelect" class="regionSelect" action="/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html">`
  
  
  
  
* URL: [https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html](https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" id="regionSelect" name="regionSelect" class="regionSelect" action="/avant-l-ivg-deux-consultations-medicales.html">`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html](https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" action="/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html">`
  
  
  
  
* URL: [https://ivg.gouv.fr/comment-avorter.html](https://ivg.gouv.fr/comment-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" id="regionSelect" name="regionSelect" class="regionSelect" action="/comment-avorter.html">`
  
  
  
  
* URL: [https://ivg.gouv.fr](https://ivg.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" id="regionSelect" name="regionSelect" class="regionSelect" action="/#">`
  
  
  
  
Instances: 12
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 2: "formulaire_action" "formulaire_action_args" "region" ].</p>
  
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
  
  
  
* URL: [https://ivg.gouv.fr/comment-avorter.html](https://ivg.gouv.fr/comment-avorter.html)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://ivg.gouv.fr/art13651](https://ivg.gouv.fr/art13651)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/questions-reponses-sur-l-ivg-17241.html](https://ivg.gouv.fr/questions-reponses-sur-l-ivg-17241.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html](https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://ivg.gouv.fr/ecrire/](https://ivg.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html](https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://ivg.gouv.fr/plan-du-site-13663.html](https://ivg.gouv.fr/plan-du-site-13663.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/questions-reponses-sur-l-ivg-3804.html](https://ivg.gouv.fr/questions-reponses-sur-l-ivg-3804.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/lib/](https://ivg.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-prix.html](https://ivg.gouv.fr/avortement-prix.html)
  
  
  * Method: `POST`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 21 [spip.php?rubrique3807].</p><p>Predicted response size: 321.</p><p>Response Body Length: 35,773.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://ivg.gouv.fr/robots.txt](https://ivg.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-ivg-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-ivg-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://ivg.gouv.fr](https://ivg.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-ivg-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-ivg-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-ivg-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-ivg-preprod.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://ivg.gouv.fr/ils-ont-participe-a-la-campagne-cosmopolitan.html](https://ivg.gouv.fr/ils-ont-participe-a-la-campagne-cosmopolitan.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `//storify.com/Cosmopolitan_fr/ivg-c-est-mon-droit-cosmo.js?header=false&border=false&template=grid`
  
  
  * Evidence: `<script src="//storify.com/Cosmopolitan_fr/ivg-c-est-mon-droit-cosmo.js?header=false&border=false&template=grid"></script>`
  
  
  
  
* URL: [https://ivg.gouv.fr/ils-ont-participe-a-la-campagne-cosmopolitan.html](https://ivg.gouv.fr/ils-ont-participe-a-la-campagne-cosmopolitan.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `//storify.com/Cosmopolitan_fr/ivg-c-est-mon-droit-cosmo.js?header=false&border=false&template=grid`
  
  
  * Evidence: `<script src="//storify.com/Cosmopolitan_fr/ivg-c-est-mon-droit-cosmo.js?header=false&border=false&template=grid"></script>`
  
  
  
  
* URL: [https://ivg.gouv.fr/ils-ont-participe-a-la-campagne.html](https://ivg.gouv.fr/ils-ont-participe-a-la-campagne.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `//storify.com/MinistereSante/participez.js?header=false&border=false&template=grid`
  
  
  * Evidence: `<script src="//storify.com/MinistereSante/participez.js?header=false&border=false&template=grid"></script>`
  
  
  
  
* URL: [https://ivg.gouv.fr/ils-ont-participe-a-la-campagne.html](https://ivg.gouv.fr/ils-ont-participe-a-la-campagne.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `//storify.com/MinistereSante/participez.js?header=false&border=false&template=grid`
  
  
  * Evidence: `<script src="//storify.com/MinistereSante/participez.js?header=false&border=false&template=grid"></script>`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://ivg.gouv.fr/plugins/selecteur_generique/javascript/selecteur_generique_functions.js](https://ivg.gouv.fr/plugins/selecteur_generique/javascript/selecteur_generique_functions.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://ivg.gouv.fr/prive/javascript/jquery.form.js?1615993742](https://ivg.gouv.fr/prive/javascript/jquery.form.js?1615993742)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://ivg.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615993741](https://ivg.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615993741)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://ivg.gouv.fr/plugins-dist/jquery_ui/prive/javascript/ui/jquery-ui.js?1615993741](https://ivg.gouv.fr/plugins-dist/jquery_ui/prive/javascript/ui/jquery-ui.js?1615993741)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [https://ivg.gouv.fr/prive/javascript/jquery.js?1615993742](https://ivg.gouv.fr/prive/javascript/jquery.js?1615993742)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://ivg.gouv.fr/prive/javascript/ajaxCallback.js?1615993742](https://ivg.gouv.fr/prive/javascript/ajaxCallback.js?1615993742)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://ivg.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js](https://ivg.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js)
  
  
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
  
  
  
* URL: [https://ivg.gouv.fr/comment-avorter.html](https://ivg.gouv.fr/comment-avorter.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-qui-peut-m-aider.html](https://ivg.gouv.fr/ivg-qui-peut-m-aider.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html](https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html](https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr](https://ivg.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-prix.html](https://ivg.gouv.fr/avortement-prix.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-chirurgicale.html](https://ivg.gouv.fr/ivg-chirurgicale.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html](https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-medicamenteuse.html](https://ivg.gouv.fr/ivg-medicamenteuse.html)
  
  
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
  
  
  
* URL: [https://ivg.gouv.fr/avortement-prix.html](https://ivg.gouv.fr/avortement-prix.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://ivg.gouv.fr/robots.txt](https://ivg.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://ivg.gouv.fr/comment-avorter.html](https://ivg.gouv.fr/comment-avorter.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html](https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://ivg.gouv.fr/sitemap.xml](https://ivg.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, must-revalidate`
  
  
  
  
* URL: [https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html](https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-chirurgicale.html](https://ivg.gouv.fr/ivg-chirurgicale.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://ivg.gouv.fr](https://ivg.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html](https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html)
  
  
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

  
  
  
  
### Insufficient Site Isolation Against Spectre Vulnerability
##### Low (Medium)
  
  
  
  
#### Description
<p>Cross-Origin-Embedder-Policy header is a response header that prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using CORP or CORS).</p>
  
  
  
* URL: [https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F%3Fpage%3Dplan](https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F%3Fpage%3Dplan)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Embedder-Policy`
  
  
  
  
* URL: [https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F%3Fpage%3Dplan](https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F%3Fpage%3Dplan)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Resource-Policy`
  
  
  
  
* URL: [https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F%3Fpage%3Dplan](https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F%3Fpage%3Dplan)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Opener-Policy`
  
  
  
  
* URL: [https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F](https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Embedder-Policy`
  
  
  
  
* URL: [https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F](https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Resource-Policy`
  
  
  
  
* URL: [https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F](https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Opener-Policy`
  
  
  
  
Instances: 6
  
### Solution
<p>Ensure that the application/web server sets the Cross-Origin-Embedder-Policy header appropriately, and that it sets the Cross-Origin-Embedder-Policy header to 'require-corp' for documents.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that supports the Cross-Origin-Embedder-Policy header (https://caniuse.com/mdn-http_headers_cross-origin-embedder-policy).</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy

  
#### CWE Id : 16
  
#### WASC Id : 14
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2Fivg-qui-peut-m-aider.html](https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2Fivg-qui-peut-m-aider.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/est-ce-qu-une-ivg-peut-rendre-sterile.html](https://ivg.gouv.fr/est-ce-qu-une-ivg-peut-rendre-sterile.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/lib/.html](https://ivg.gouv.fr/lib/.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2Fje-m-informe-sur-l-ivg.html](https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2Fje-m-informe-sur-l-ivg.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/squelettes-dist/](https://ivg.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/local/](https://ivg.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/prive/](https://ivg.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/spip.php?id_document=31120&page=document](https://ivg.gouv.fr/spip.php?id_document=31120&page=document)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/plugins-dist/](https://ivg.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/local/cache-css/](https://ivg.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/plugins/](https://ivg.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/squelettes/](https://ivg.gouv.fr/squelettes/)
  
  
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
  
  
  
* URL: [https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html](https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `2Favortement-quels-sont-les-delais-a-respecter-pour-avorter`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `2Fivg-et-mesures-exceptionnelles-en-periode-covid-19`
  
  
  
  
* URL: [https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html](https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `oU3pig4+zwquihb34WNI9+5YYSMrSVJzHt0a3gvBu5wAruiYYeXzyTg/ZUnt8Pi5i72KqdO9qzy0e+YHlxJE1Jg0ehzhFxCMD4vXgBJOeLXTKOpymz9M9m9U8nmeMCDqpPWq2KYu+1Se0NfB5HOuKO7LOykvh0wlG4XQu3FEOCU37fj9qrg/jO7Cf88Je852NUQK1pVI5EPiYoXDT236U+tjtp0htjaD2P0YA7o2EJN7b7ZWaxRSOIayFjE3v7ULn4HxvUItMU4l`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-medicamenteuse.html](https://ivg.gouv.fr/ivg-medicamenteuse.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/embed/video/keCisHgYv9zmCFd9Sj3`
  
  
  
  
* URL: [https://ivg.gouv.fr/comment-avorter.html](https://ivg.gouv.fr/comment-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L723xH2048/infographie-methodesivg_2017-c8328`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-chirurgicale.html](https://ivg.gouv.fr/ivg-chirurgicale.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/embed/video/k3WtOw9CeLxXfwd9WTr`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-prix.html](https://ivg.gouv.fr/avortement-prix.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `KQPz7Uou048xclSpl41kHoCqaKXcACFR8cL6XBEegyC/fSySfHFMeHqpqd2GrH+EzwgDNH9dtPnW5Q==`
  
  
  
  
* URL: [https://ivg.gouv.fr/robots.txt](https://ivg.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `L/LsUhXuClB6iKAqJlLL3fNyljz02Xzk8PdZjFAO4tNE3iy4ZMeBUVfW0rY+pyaqIIWx+oDBxIne/w2ebDVSg/buYGc=`
  
  
  
  
* URL: [https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html](https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `2Favant-l-ivg-deux-consultations-medicales`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `iVeb1czE3VRyiEAqJlLL3fNyljz02dkmaoSgR6Yl/Y690huJ/xRGzv5J8MhpkUZZO+sg0MUjgKKqeqmCk+ZYIoxgRws=`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `KQPz7Uou048xclSpl41kHoCqaKXcACFR8cL6XBEegyC/fSySfHFMeHqpqd2GrH+EzwgDNH9dtPnW5Q==`
  
  
  
  
* URL: [https://ivg.gouv.fr](https://ivg.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `ym25FLkQNNEUTsAqJlLL3fNyljz02QjHBb0CyKshw0ggT2u/gSivjH9JXDezpnmNkiryKxK0wi/Nnn6gVHzw6psBw68=`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�V���^�������Ϭ�{~��>u�Z�Ϛ�����-z�����j�+��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://ivg.gouv.fr/plugins-dist/](https://ivg.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/plugins/](https://ivg.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/lib/.html](https://ivg.gouv.fr/lib/.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/squelettes/](https://ivg.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/local/cache-css/](https://ivg.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2Fivg-qui-peut-m-aider.html](https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2Fivg-qui-peut-m-aider.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/prive/](https://ivg.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/spip.php?id_document=31120&page=document](https://ivg.gouv.fr/spip.php?id_document=31120&page=document)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2Fje-m-informe-sur-l-ivg.html](https://ivg.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fivg.gouv.fr%2Fje-m-informe-sur-l-ivg.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/squelettes-dist/](https://ivg.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/local/](https://ivg.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/est-ce-qu-une-ivg-peut-rendre-sterile.html](https://ivg.gouv.fr/est-ce-qu-une-ivg-peut-rendre-sterile.html)
  
  
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
  
  
  
* URL: [https://ivg.gouv.fr/comment-avorter.html](https://ivg.gouv.fr/comment-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html](https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-qui-peut-m-aider.html](https://ivg.gouv.fr/ivg-qui-peut-m-aider.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-chirurgicale.html](https://ivg.gouv.fr/ivg-chirurgicale.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://ivg.gouv.fr](https://ivg.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html](https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html](https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-medicamenteuse.html](https://ivg.gouv.fr/ivg-medicamenteuse.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-prix.html](https://ivg.gouv.fr/avortement-prix.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="text/javascript">tarteaucitron.user.atLibUrl = '535160';</p><p>tarteaucitron.user.atMore = function () { /* add here you", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" title="Imprimer cette page" onclick="window.print();return false">
						<i class="fa fa-print" title="Imprimer"></i>
						</a>`
  
  
  
  
* URL: [https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html](https://ivg.gouv.fr/avant-l-ivg-deux-consultations-medicales.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" title="Imprimer cette page" onclick="window.print();return false">
						<i class="fa fa-print" title="Imprimer"></i>
						</a>`
  
  
  
  
* URL: [https://ivg.gouv.fr/comment-avorter.html](https://ivg.gouv.fr/comment-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" title="Imprimer cette page" onclick="window.print();return false">
						<i class="fa fa-print" title="Imprimer"></i>
						</a>`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html](https://ivg.gouv.fr/avortement-quels-sont-les-delais-a-respecter-pour-avorter.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" title="Imprimer cette page" onclick="window.print();return false">
						<i class="fa fa-print" title="Imprimer"></i>
						</a>`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-qui-peut-m-aider.html](https://ivg.gouv.fr/ivg-qui-peut-m-aider.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
            <a href='https://oasc-eu1.247realmedia.com/1c/www.ivg.social-sante.gouv.fr/accueil/[RANDOM]@Top1' target='_top'><img src='https://oasc-eu1.247realmedia.com/1/www.ivg.social-sante.gouv.fr/accueil/[RANDOM]@Top1' border='0' alt="eregie"/></a>
	</noscript>`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-medicamenteuse.html](https://ivg.gouv.fr/ivg-medicamenteuse.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" title="Imprimer cette page" onclick="window.print();return false">
						<i class="fa fa-print" title="Imprimer"></i>
						</a>`
  
  
  
  
* URL: [https://ivg.gouv.fr](https://ivg.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="titre-site" href="#">IVG.GOUV.FR<br />N&#176;Vert 0800 08 11 11</a>`
  
  
  
  
* URL: [https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html](https://ivg.gouv.fr/je-m-informe-sur-l-ivg.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='pagination_article' id='pagination_article'></a>`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-chirurgicale.html](https://ivg.gouv.fr/ivg-chirurgicale.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" title="Imprimer cette page" onclick="window.print();return false">
						<i class="fa fa-print" title="Imprimer"></i>
						</a>`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="titre-site" href="#">IVG.GOUV.FR<br />N&#176;Vert 0800 08 11 11</a>`
  
  
  
  
* URL: [https://ivg.gouv.fr/avortement-prix.html](https://ivg.gouv.fr/avortement-prix.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" title="Imprimer cette page" onclick="window.print();return false">
						<i class="fa fa-print" title="Imprimer"></i>
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
  
  
  
* URL: [https://ivg.gouv.fr/plugins/](https://ivg.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://ivg.gouv.fr/plugins-dist/](https://ivg.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://ivg.gouv.fr/ecrire/](https://ivg.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://ivg.gouv.fr/local/](https://ivg.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://ivg.gouv.fr/lib/](https://ivg.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://ivg.gouv.fr/prive/](https://ivg.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://ivg.gouv.fr/local/cache-css/](https://ivg.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://ivg.gouv.fr](https://ivg.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://ivg.gouv.fr/robots.txt](https://ivg.gouv.fr/robots.txt)
  
  
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

  
  
  
  
### Storable but Non-Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users. </p>
  
  
  
* URL: [https://ivg.gouv.fr/sitemap.xml](https://ivg.gouv.fr/sitemap.xml)
  
  
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
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615993741`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615994176`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1606822442`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1597311102`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1597311066`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616076689`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1606822437`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615993742`
  
  
  
  
* URL: [https://ivg.gouv.fr/](https://ivg.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1605267224`
  
  
  
  
Instances: 9
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1615993741, which evaluates to: 2021-03-17 15:09:01</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action_args`
  
  
  
  
* URL: [https://ivg.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://ivg.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://ivg.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://ivg.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_to`
  
  
  
  
* URL: [https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html](https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
Instances: 30
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://ivg.gouv.fr/ivg-et-mesures-exceptionnelles-en-periode-covid-19.html</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>formulaire_action_args=mZX/jtEpzzIKBmb9RteB/gJAx1J9FxfhwB3aFtNvgPyccGOtAqxpR0V2GjAd9vJL28jSKbWCXsj4C+YPA0zeQuJ+vzGtIVcbxvwe4IMHwZeHJ/nM9SHA0azJFmZURe4V4cQTfWJRmWsD7I0Sfrld1pAHvz+USvivuQ1IWSFDdFXpAP0Zp7wykmC9ThuBba8UhsDW1fRK43lRGHoNciA7+kJQjx4z4xIXMNfkJMQCvV7MMuso7PLaLM3pE4sjI0TxpswDWg0YuEAxiH+nlv5XBxhXVAPGYAQjn7DaFeqjp0zRd91HXT7i313yB+lPZL+c2QrGP7Xi1htutstHpazmn4KgFvzraPcpdsiT5B/SYdVUYmvbv/D4UEt7UYVxEPR+jsHtW62ToU10GdqIYBRsskaTXTcdmZj3YZdBF4FXhqIPwU2AkyY0MTXwkkQwSBj2ena7wO5TsdjpdQhH6+EN+UDOoBTt8OuliBu4z5+21hXDKeaHmGQeL+DUUkfYSQwFhVbIXq93fKDZC7slMcNe5tyYNa5Tx95QjyUgWpdggcQkMmKHJkt+GQqTT2DFmwU1pTz20G/i9a67w97Hy5Dy8Fg6LAWrq193eytOyFAXTE6e/mUDTQXN1t85BJrjvCnaVewYY7V0LQnyHAGDi0Xir43GNhW9dLD/2Hqj8n0OMazivKASGiHVdzde7j/DovbXpXyeDTRCZwTwo4bNK9PnEYNFWEUUnDRLXWAEQ5aXVQ7m/yd4LKX3SDsF1jFsn/3VxJERpz5G+RfvHqmsv8o6/CJ6I8K3bzQMPr8tOYblf4tEpILFsi1Y/mSdhNigIAtPSUNlax1DHyqpWXH/EIfhPyDab85y8WxGJ6H4am/BxRrpjdzM+dWPs2QRaq5BeDq5e1BJ8dMQR3u9HohSYTUAlWMDsvmD30awLJ8YZ31hYiBUbr8q9xOgWg2+DyAbHibGyHnDlLaD532/8bu0oEXzrdbVxOly7IMbH+pFDfbDuELJu1NrT0jFjT5P6gjfBVB9hiPPJXgI9CbiGMf6P1LRQdh7M3hgPeQq1Fkx9/kq3is5wf5MydcMeeTBPaEBuiF2B+LUQtbX7R2ZxB5v8jfc33Noeshn7h+Z96X9677XmxPP9rMKOSnIZhJRjHHVwXzJaMNc6SnwxNNxbexHKm3ENwbfgPt3C6O+0NXPrRJC0i3vnRrGxyAlQk44rDSvRgC8hRgIuwSPlxaNnyWcGRVQahoGc+Zr6qmjMuL6Fz3NwBQVa2AvgJEg1nAB7Xw1xvuSVgN1joC1MTc6XAvmKESytDriAI3/VwDkVGT5MDg6ePTiLE/5B5XjMJhP55UeHnPkaFvPFZdbHAxVMbTiHtyeCpini9oqLQNKSICC5Rz8L+gIYai4ibvUS1q65MtD70Xcv7zfGFbIa0vsl/DNaoZSb4+OwZrVCwt8rJz75aNgmVSZVgGnMV/F0Za16bZWzs5tiqMh6q98eQETLDZ2cbH79vZOdlUurOfkiGomvsUtQVYqITZFJQqLTplBzGSovoi8jHP4xsp1ARrFf/OHAsCMW7CP4xSe5qLrYaZkYg4Gb/uzDpvI/Haf2unQtrDUkRySvcqAPIJYmvVZpoPqi4nBcgowIgeJbHbpGLZQwKCEesioFzwobydgYnW1XnE99gDDeKvzN2XyGS0IKoQiAbV/dkGOC5W8/ErMPNdHikpdFBdtNmClGU5OUNTWa0s1XkibboB0agSsGRnnqLPdHwNYZZe91bBCKkMR0gCz5EfsXHoSL+HwVQuVw949M9IhQuIllBLgNsADzdEscib8U1EbdfgYMeIHpmsUgsf2FdW16XM2CqCOYF3P7vV6GD4IYQOjWcKR5l3QYTRURGr1TYiSre75kKYzY0sALhHfcDzZSrm8U/scudbDqG4fANb2f1NC5IKeAvlMRkRQh/Aik8mbSep7EAPUVmxzcyr3sVg10EUdP8r+WQkT0gMrWjYhQyBy/g==</p><p></p><p>The user-controlled value was:</p><p>mzx/jtepzzikbmb9rteb/gjax1j9fxfhwb3aftnvgpyccgotaqxpr0v2gjad9vjl28jskbwcxsj4c+ypa0zequj+vzgtivcbxvwe4imhwzehj/nm9sha0azjfmzure4v4cqtfwjrmwsd7i0sfrld1pahvz+usvivuq1iwsfddfxpap0zp7wykmc9thubba8uhsdw1frk43lrghoncia7+kjqjx4z4xixmnfkjmqcvv7mmuso7plalm3pe4sji0txpswdwg0yueaxih+nlv5xbxhxvapgyaqjn7dafeqjp0zrd91hxt7i313yb+lpzl+c2qrgp7xi1htutsthpazmn4kgfvzrapcpdsit5b/sydvuymvbv/d4uet7uyvxepr+jshtw62tou10gdqiybrsskatxtcdmzj3yzdbf4fxhqipwu2akyy0mtxwkkqwsbj2ena7wo5tsdjpdqhh6+en+udoobtt8oulibu4z5+21hxdkeahmgqel+duukfysqwfhvbixq93fkdzc7slmcne5tyyna5tx95qjyugwpdggcqkmmkhjkt+gqqtt2dfmwu1ptz20g/i9a67w97hy5dy8fg6lawrq193eytoyfaxte6e/mudtqxn1t85bjrjvcnavewyy7v0lqnyhagdi0xir43gnhw9dld/2hqj8n0omazivkasgihvdzde7j/dovbxpxyedtrczwtwo4bnk9pneynfweuundrlxwaeq5axvq7m/yd4lkx3sdsf1jfsn/3vxjerpz5g+rfvhqmsv8o6/cj6i8k3bzqmpr8toyblf4tepilfsi1y/msdhnigiatpsunlax1dhyqpwxh/eifhpydab85y8wxgj6h4am/bxrrpjdzm+dwps2qraq5bedq5e1bj8dmqr3u9hohsytualwmdsvmd30awlj8yz31hyibubr8q9xogwg2+dyabhibgyhndllad532/8bu0oexzrdbvxoly7imbh+pfdfbduelju1nrt0jfjt5p6gjfbvb9hippjxgi9cbigmf6p1lrqdh7m3hgpeqq1fkx9/kq3is5wf5mydcmeetbpaebuif2b+luqtbx7r2zxb5v8jfc33noeshn7h+z96x9677xmxpp9rmkosnizhjrjhhvwxzjamnc6snwxnnxbexhkm3enwbfgpt3c6o+0nxprrjc0i3vnrrgxyalqk44rdsvrgc8hrgiuwsplxannywcgrvqahogc+zr6qmjmul6fz3nwbqva2avgjeg1nab7xw1xvusvgn1joc1mtc6xavmkesytdriai3/vwdkvgt5mdg6eptile/5b5xjmjhp55uehnpkafvpfzdbhaxvmbtihtyecpini9oqlqnksicc5rz8l+giyai4ibvus1q65mtd70xcv7zfgfbia0vsl/dnaozsb4+owzrvcwt8rjz75angmvszvggnmv/f0za16bzwzs5tiqmh6q98eqetldz2cbh79vzodluurofkigomvsutqvyqitzfjqqltplbzgsovoi8jhp4xsp1arrff/ohascmw7cp4xse5qlryazkyg4gb/uzdpvi/haf2unqtrdukrysvcqapijymvvzpopqi4nbcgowigejbhbpglzqwkceesiofzwobydgynw1xne99gddekvzn2xygs0ikoqiabv/dkgoc5w8/ermpndhikpdfbdtnmclgu5ountwa0s1xkibbob0agssgrnnqlpdhwnyzze91bbckkmr0gcz5efsxhosl+hwvquvw949m9ihquillblgnsadzdescib8u1ebdfgymeihpmsugsf2fdw16xm2cqcoyf3p7vv6gd4iyqojwckr5l3qytrurgr1tyisre75kkyzy0salhhfcdzzsrm8u/scudbdqg4fanb2f1nc5ikeavlmrkrqh/aik8mbsep7eapuvmxzcyr3svg10eudp8r+wqkt0gmrwjyhqyby/g==</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
