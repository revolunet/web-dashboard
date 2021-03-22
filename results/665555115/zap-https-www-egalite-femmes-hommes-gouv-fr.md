
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 20:12:54


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 7 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Sub Resource Integrity Attribute Missing | Medium | 11 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 11 | 
| Dangerous JS Functions | Low | 11 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 11 | 
| Base64 Disclosure | Informational | 12 | 
| Charset Mismatch  | Informational | 1 | 
| Information Disclosure - Suspicious Comments | Informational | 10 | 
| Modern Web Application | Informational | 11 | 
| Storable and Cacheable Content | Informational | 3 | 
| Storable but Non-Cacheable Content | Informational | 8 | 
| Timestamp Disclosure - Unix | Informational | 12 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Violences contre les femmes : la loi vous protège"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="https://arretonslesviolences.gouv.fr/"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Violences contre les femmes : la loi vous protège"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="https://arretonslesviolences.gouv.fr/"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Violences contre les femmes : la loi vous protège"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Violences contre les femmes : la loi vous protège"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Violences contre les femmes : la loi vous protège"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Violences contre les femmes : la loi vous protège"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Violences contre les femmes : la loi vous protège"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Violences contre les femmes : la loi vous protège"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Violences contre les femmes : la loi vous protège"></a>`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
Instances: 11
  
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
<p>The identified library jquery, version 1.12.4 is vulnerable.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-includes/js/jquery/jquery.js?ver=1.12.4](https://www.egalite-femmes-hommes.gouv.fr/wp-includes/js/jquery/jquery.js?ver=1.12.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery v1.12.4`
  
  
  
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://www.egalite-femmes-hommes.gouv.fr" method="get">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://www.egalite-femmes-hommes.gouv.fr" method="get">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://www.egalite-femmes-hommes.gouv.fr" method="get">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 3: ].</p>
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-ddf-wp.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-ddf-wp.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/robots.txt](https://www.egalite-femmes-hommes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-ddf-wp.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-ddf-wp.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-ddf-wp.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-ddf-wp.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#product=ga`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#product=ga'></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#product=ga`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#product=ga'></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#product=ga`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#product=ga'></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#product=ga`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#product=ga'></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#product=ga`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#product=ga'></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#product=ga`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#product=ga'></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#product=ga`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#product=ga'></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#product=ga`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#product=ga'></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#product=ga`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#product=ga'></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#product=ga`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#product=ga'></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//platform-api.sharethis.com/js/sharethis.js#product=ga`
  
  
  * Evidence: `<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#product=ga'></script>`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/cabinet-elisabeth-moreno/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/cabinet-elisabeth-moreno/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/dossiers/](https://www.egalite-femmes-hommes.gouv.fr/dossiers/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/acteurs-et-partenaires/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/acteurs-et-partenaires/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/actions-dispositifs-interministeriels/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/actions-dispositifs-interministeriels/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/biographie-de-elisabeth-moreno/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/biographie-de-elisabeth-moreno/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/robots.txt](https://www.egalite-femmes-hommes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/category/presse/agenda/](https://www.egalite-femmes-hommes.gouv.fr/category/presse/agenda/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=`
  
  
  
  
Instances: 11
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=img src=http://logp5.xiti.com/hit.xiti?s=509901&s2=&p=&di=&an=&ac=</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/robots.txt](https://www.egalite-femmes-hommes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `NUePMXmdSPNWEq8qJlLL3fNyljz02W5zXrsWzgMn8K1M30EfP2+gFOApYacHU0Dn56Te/uP8N7iHJUjX86cmuFbKcBw=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `Dyu3QFhiEkOhrooqJlLL3fNyljz02dihtG2QoPRHYVQ3DZQ5+SP6nURZJBDgCBRLvOyQbIQ0YPIiJgKMhssAjRX9/VQ=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `gXRWXhDRZ4RmTLwqJlLL3fNyljz02YKcxWNb/QhMR2hM5r737iRfK85NBt/9EL80RruARa0aaavtcaZg8skYV0n8JtI=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>mtli_height=16&mtli_image_type=png&mtli_leftorright=left</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Charset Mismatch 
##### Informational (Low)
  
  
  
  
#### Description
<p>This check identifies responses where the HTTP Content-Type header declares a charset different from the charset defined by the body of the HTML or XML. When there's a charset mismatch between the HTTP header and content body Web browsers can be forced into an undesirable content-sniffing mode to determine the content's correct character set.</p><p></p><p>An attacker could manipulate content on the page to be interpreted in an encoding of their choice. For example, if an attacker can control content at the beginning of the page, they could inject script using UTF-7 encoded text and manipulate some browsers into interpreting that text.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
### Solution
<p>Force UTF-8 for all text content in both the HTTP header and meta tags in HTML or encoding declarations in XML.</p>
  
### Other information
<p>There was a charset mismatch between the HTTP Header and the XML encoding declaration: [UTF-8] and [null] do not match.</p>
  
### Reference
* http://code.google.com/p/browsersec/wiki/Part2#Character_set_handling_and_detection

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
Instances: 10
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected in the element starting with: "<script> /* <![CDATA[ */var tribe_l10n_datatables = {"aria":{"sort_ascending":": activer pour trier la colonne ascendante","sort", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/robots.txt](https://www.egalite-femmes-hommes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=604800`
  
  
  
  
Instances: 3
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20180413`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `1464714369`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `20180413`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1464714369`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160719`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160421`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160719`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1464714369`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160421`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160719`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160421`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `20180413`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>20180413, which evaluates to: 1970-08-22 13:40:13</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
