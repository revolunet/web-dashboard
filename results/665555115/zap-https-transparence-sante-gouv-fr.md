
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 20:06:26


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 6 |
| Low | 5 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Referer Exposes Session ID | Medium | 1 | 
| Reverse Tabnabbing | Medium | 10 | 
| Session ID in URL Rewrite | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 10 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 5 | 
| Cookie Without SameSite Attribute | Low | 4 | 
| Dangerous JS Functions | Low | 4 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Base64 Disclosure | Informational | 6 | 
| Information Disclosure - Suspicious Comments | Informational | 13 | 
| Modern Web Application | Informational | 12 | 
| Non-Storable Content | Informational | 1 | 
| Storable and Cacheable Content | Informational | 10 | 
| Timestamp Disclosure - Unix | Informational | 8 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 3 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://transparence.sante.gouv.fr/sitemap.xml](https://transparence.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/accessibilite](https://transparence.sante.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1](https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr](https://transparence.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/](https://transparence.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1](https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/accessibilite?execution=e6s1](https://transparence.sante.gouv.fr/flow/accessibilite?execution=e6s1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/interrogationAvancee?execution=e5s1](https://transparence.sante.gouv.fr/flow/interrogationAvancee?execution=e5s1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/planSite](https://transparence.sante.gouv.fr/planSite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/planSite?execution=e4s1](https://transparence.sante.gouv.fr/flow/planSite?execution=e4s1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/contact](https://transparence.sante.gouv.fr/contact)
  
  
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

  
  
  
  
### Referer Exposes Session ID
##### Medium (Medium)
  
  
  
  
#### Description
<p>A hyperlink pointing to another host name was found. As session ID URL rewrite is used, it may be disclosed in referer header to external hosts.</p>
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1](https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `2953234.fls.doubleclick.net`
  
  
  
  
Instances: 1
  
### Solution
<p>This is a risk if the session ID is sensitive and the hyperlink refers to an external or third party host. For secure content, put session ID in secured session cookie.</p>
  
### Reference
* http://seclists.org/lists/webappsec/2002/Oct-Dec/0111.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://transparence.sante.gouv.fr/contact](https://transparence.sante.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://social-sante.gouv.fr/ministere/article/mentions-legales" target="_blank">Mentions légales</a>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/accessibilite?execution=e6s1](https://transparence.sante.gouv.fr/flow/accessibilite?execution=e6s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://social-sante.gouv.fr/ministere/article/mentions-legales" title="accéder aux Mentions légales (nouvelle fenêtre)" target="_blank">Mentions légales</a>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1](https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://social-sante.gouv.fr/ministere/article/mentions-legales" target="_blank" title="accéder aux Mentions légales (nouvelle fenêtre)">Mentions légales</a>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/planSite?execution=e4s1](https://transparence.sante.gouv.fr/flow/planSite?execution=e4s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://social-sante.gouv.fr/ministere/article/mentions-legales" title="accéder aux Mentions légales (nouvelle fenêtre)" target="_blank">Mentions légales</a>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/accessibilite](https://transparence.sante.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://social-sante.gouv.fr/ministere/article/mentions-legales" target="_blank">Mentions légales</a>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/interrogationAvancee?execution=e5s1](https://transparence.sante.gouv.fr/flow/interrogationAvancee?execution=e5s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://social-sante.gouv.fr/ministere/article/mentions-legales" title="accéder aux Mentions légales (nouvelle fenêtre)" target="_blank">Mentions légales</a>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/contact?execution=e7s1](https://transparence.sante.gouv.fr/flow/contact?execution=e7s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://social-sante.gouv.fr/ministere/article/mentions-legales" title="accéder aux Mentions légales (nouvelle fenêtre)" target="_blank">Mentions légales</a>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/sitemap.xml](https://transparence.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://social-sante.gouv.fr/ministere/article/mentions-legales" target="_blank">Mentions légales</a>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1](https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://social-sante.gouv.fr/ministere/article/mentions-legales" title="accéder aux Mentions légales (nouvelle fenêtre)" target="_blank">Mentions légales</a>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/planSite](https://transparence.sante.gouv.fr/planSite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://social-sante.gouv.fr/ministere/article/mentions-legales" target="_blank">Mentions légales</a>`
  
  
  
  
Instances: 10
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Session ID in URL Rewrite
##### Medium (High)
  
  
  
  
#### Description
<p>URL rewrite is used to track user session ID. The session ID may be disclosed via cross-site referer header. In addition, the session ID might be stored in browser history or server logs.</p>
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1](https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1](https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1)
  
  
  * Method: `POST`
  
  
  * Evidence: `jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA`
  
  
  
  
Instances: 2
  
### Solution
<p>For secure content, put session ID in a cookie. To be even more secure consider using a combination of cookie and URL rewrite.</p>
  
### Reference
* http://seclists.org/lists/webappsec/2002/Oct-Dec/0111.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://assets-cdn.github.com/assets/github2-13b1452246f6d26e19204e72108962efb8f15d75.css" media="all" rel="stylesheet" type="text/css" />`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://assets-cdn.github.com/assets/github-fdb0b778cdc4ab978064fee859ec46584d6e3551.css" media="all" rel="stylesheet" type="text/css" />`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="assets" href="https://assets-cdn.github.com/">`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-e4dc2473554b94cdf2908eac37f60d9d484f612d.js" type="text/javascript"></script>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="conduit-xhr" href="https://ghconduit.com:25035">`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-0f6778ba201a3d688f30a95017f6562b844fdab4.js" type="text/javascript"></script>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://www.google-analytics.com/analytics.js"></script>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://github.com/mathiasbynens/jquery-placeholder/commits/master.atom" rel="alternate" title="Recent Commits to jquery-placeholder:master" type="application/atom+xml">`
  
  
  
  
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
<p>The identified library jquery, version 1.9.1 is vulnerable.</p>
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-1.9.1.js`
  
  
  
  
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
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form accept-charset="UTF-8" class="js-jump-to-line-form">`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1](https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form" name="form" method="post" action="/flow/rechercheBeneficiaires?execution=e3s1" enctype="application/x-www-form-urlencoded">`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/interrogationAvancee?execution=e5s1](https://transparence.sante.gouv.fr/flow/interrogationAvancee?execution=e5s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form" name="form" method="post" action="/flow/interrogationAvancee?execution=e5s1" enctype="application/x-www-form-urlencoded">`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1](https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="j_idt18" name="j_idt18" method="post" action="/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1" enctype="application/x-www-form-urlencoded">`
  
  
  
  
Instances: 5
  
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

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://transparence.sante.gouv.fr/](https://transparence.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgs-ts.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgs-ts.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr](https://transparence.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgs-ts.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgs-ts.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/robots.txt](https://transparence.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgs-ts.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgs-ts.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main](https://transparence.sante.gouv.fr/flow/main)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-ui.js](https://transparence.sante.gouv.fr/theme/js/jquery-ui.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/javax.faces.resource/jsf.js?ln=javax.faces](https://transparence.sante.gouv.fr/flow/javax.faces.resource/jsf.js?ln=javax.faces)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jsf.js](https://transparence.sante.gouv.fr/theme/js/jsf.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
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
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/waitingBar.js](https://transparence.sante.gouv.fr/theme/js/waitingBar.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jsf.js](https://transparence.sante.gouv.fr/theme/js/jsf.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/xtcore.js](https://transparence.sante.gouv.fr/xtcore.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/](https://transparence.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr](https://transparence.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/planSite](https://transparence.sante.gouv.fr/planSite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/sitemap.xml](https://transparence.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/accessibilite](https://transparence.sante.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1](https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/contact](https://transparence.sante.gouv.fr/contact)
  
  
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
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/javax.faces.resource/theme.css?ln=primefaces-aristo](https://transparence.sante.gouv.fr/flow/javax.faces.resource/theme.css?ln=primefaces-aristo)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr](https://transparence.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/](https://transparence.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/css/styles.css](https://transparence.sante.gouv.fr/theme/css/styles.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/planSite?execution=e4s1](https://transparence.sante.gouv.fr/flow/planSite?execution=e4s1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1](https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/robots.txt](https://transparence.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/css/jquery-ui.css](https://transparence.sante.gouv.fr/theme/css/jquery-ui.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/css/base.css](https://transparence.sante.gouv.fr/theme/css/base.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1](https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/css/ie8.css](https://transparence.sante.gouv.fr/theme/css/ie8.css)
  
  
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

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://transparence.sante.gouv.fr/robots.txt](https://transparence.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `Xi+RnV25NWu6WlsqJlLL3fNyljz02b6RxlyB+Hh9kU2pMkAT9PkUqtKAHLMOOefv7xEw0WKCbEBp5WX/UcWoZzPgl1A=`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/css/jquery-ui.css](https://transparence.sante.gouv.fr/theme/css/jquery-ui.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `D27CDB6E-AE6D-11cf-96B8-444553540000`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/](https://transparence.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1hqEySslLmT4KGQqJlLL3fNyljz02Wd6yFJdI4n01uQBslWXqVy4D/wPlJE2Z97tuCj5mR9N5bArV3oT3ITy5LJNqio=`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr](https://transparence.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `84CXr9IAgmKkpBkqJlLL3fNyljz02QNSEOdL1JqD3JMY07UwWR+8E1OQltbn358zM+DV2Tr2sDN9ez0l7T/xJSOVN4k=`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js](https://transparence.sante.gouv.fr/theme/js/jquery.placeholder.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `v7lGyRT2XQYAOL2RgONHeBwY2HCqXPSELrHJsbhw4LJY/nhNGkcNNW/pO6qTx3PZ0IJzKqNHZMiZ7/NlvYqSmw==`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>^/��]�5k�Z[*&R���r�<�پ��\��x}�M�2@\x0013��\x0014�Ҁ\x001c�\x000e9���\x00110�b�l@i�e�QŨg3��P</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/contact](https://transparence.sante.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/sitemap.xml](https://transparence.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/accessibilite](https://transparence.sante.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/planSite](https://transparence.sante.gouv.fr/planSite)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
Instances: 13
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected in the element starting with: "//key/values into a query string
", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/accessibilite?execution=e6s1](https://transparence.sante.gouv.fr/flow/accessibilite?execution=e6s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
			<style type="text/css">#waitingBar{visibility:hidden;}</style>
			<style type="text/css">.withJS{visibility:hidden;display:none;}</style>
			<style type="text/css">.withoutJS{visibility:visible;display:initial;}</style>
		</noscript>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1](https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
			<style type="text/css">#waitingBar{visibility:hidden;}</style>
			<style type="text/css">.withJS{visibility:hidden;display:none;}</style>
			<style type="text/css">.withoutJS{visibility:visible;display:initial;}</style>
		</noscript>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/accessibilite](https://transparence.sante.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
		<img width="1" height="1" alt="" src="https://logs1279.xiti.com/hit.xiti?s=543460&amp;s2=&amp;p=&amp;di=&amp;an=&amp;ac="></img>
	</noscript>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-ui.js](https://transparence.sante.gouv.fr/theme/js/jquery-ui.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/sitemap.xml](https://transparence.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
		<img width="1" height="1" alt="" src="https://logs1279.xiti.com/hit.xiti?s=543460&amp;s2=&amp;p=&amp;di=&amp;an=&amp;ac="></img>
	</noscript>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='" + expando + "'></a>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/interrogationAvancee?execution=e5s1](https://transparence.sante.gouv.fr/flow/interrogationAvancee?execution=e5s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
			<style type="text/css">#waitingBar{visibility:hidden;}</style>
			<style type="text/css">.withJS{visibility:hidden;display:none;}</style>
			<style type="text/css">.withoutJS{visibility:visible;display:initial;}</style>
		</noscript>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/contact?execution=e7s1](https://transparence.sante.gouv.fr/flow/contact?execution=e7s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
			<style type="text/css">#waitingBar{visibility:hidden;}</style>
			<style type="text/css">.withJS{visibility:hidden;display:none;}</style>
			<style type="text/css">.withoutJS{visibility:visible;display:initial;}</style>
		</noscript>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/contact](https://transparence.sante.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
		<img width="1" height="1" alt="" src="https://logs1279.xiti.com/hit.xiti?s=543460&amp;s2=&amp;p=&amp;di=&amp;an=&amp;ac="></img>
	</noscript>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/planSite?execution=e4s1](https://transparence.sante.gouv.fr/flow/planSite?execution=e4s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
			<style type="text/css">#waitingBar{visibility:hidden;}</style>
			<style type="text/css">.withJS{visibility:hidden;display:none;}</style>
			<style type="text/css">.withoutJS{visibility:visible;display:initial;}</style>
		</noscript>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/planSite](https://transparence.sante.gouv.fr/planSite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
		<img width="1" height="1" alt="" src="https://logs1279.xiti.com/hit.xiti?s=543460&amp;s2=&amp;p=&amp;di=&amp;an=&amp;ac="></img>
	</noscript>`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1](https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
			<style type="text/css">#waitingBar{visibility:hidden;}</style>
			<style type="text/css">.withJS{visibility:hidden;display:none;}</style>
			<style type="text/css">.withoutJS{visibility:visible;display:initial;}</style>
		</noscript>`
  
  
  
  
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
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main](https://transparence.sante.gouv.fr/flow/main)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
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
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/css/base.css](https://transparence.sante.gouv.fr/theme/css/base.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr](https://transparence.sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/](https://transparence.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/accessibilite](https://transparence.sante.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/contact](https://transparence.sante.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/robots.txt](https://transparence.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/images/favicon.ico](https://transparence.sante.gouv.fr/theme/images/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/css/styles.css](https://transparence.sante.gouv.fr/theme/css/styles.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/planSite](https://transparence.sante.gouv.fr/planSite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/sitemap.xml](https://transparence.sante.gouv.fr/sitemap.xml)
  
  
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
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `20110929`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/javax.faces.resource/theme.css?ln=primefaces-aristo](https://transparence.sante.gouv.fr/flow/javax.faces.resource/theme.css?ln=primefaces-aristo)
  
  
  * Method: `GET`
  
  
  * Evidence: `00000000`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-ui.js](https://transparence.sante.gouv.fr/theme/js/jquery-ui.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `0123456789`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-ui.js](https://transparence.sante.gouv.fr/theme/js/jquery-ui.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `10000000`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-ui.js](https://transparence.sante.gouv.fr/theme/js/jquery-ui.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `86400000`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js](https://transparence.sante.gouv.fr/theme/js/jquery-1.9.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `20030331`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/theme/images/favicon.ico](https://transparence.sante.gouv.fr/theme/images/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `44444444`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/javax.faces.resource/theme.css?ln=primefaces-aristo](https://transparence.sante.gouv.fr/flow/javax.faces.resource/theme.css?ln=primefaces-aristo)
  
  
  * Method: `GET`
  
  
  * Evidence: `33000000`
  
  
  
  
Instances: 8
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>20110929, which evaluates to: 1970-08-21 18:22:09</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/interrogationAvancee?execution=e5s1](https://transparence.sante.gouv.fr/flow/interrogationAvancee?execution=e5s1)
  
  
  * Method: `GET`
  
  
  * Parameter: `execution`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1](https://transparence.sante.gouv.fr/flow/main;jsessionid=1FD459B3E7F6B8C664AA0DA4BCDECEFA?execution=e1s1)
  
  
  * Method: `GET`
  
  
  * Parameter: `execution`
  
  
  
  
* URL: [https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1](https://transparence.sante.gouv.fr/flow/rechercheBeneficiaires?execution=e3s1)
  
  
  * Method: `GET`
  
  
  * Parameter: `execution`
  
  
  
  
Instances: 3
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://transparence.sante.gouv.fr/flow/interrogationAvancee?execution=e5s1</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>execution=e5s1</p><p></p><p>The user-controlled value was:</p><p>e5s1</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
