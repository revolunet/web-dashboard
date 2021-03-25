
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:29:15


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 6 |
| Low | 11 |
| Informational | 12 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| CSP: Wildcard Directive | Medium | 5 | 
| Reverse Tabnabbing | Medium | 1 | 
| Secure Pages Include Mixed Content (Including Scripts) | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 6 | 
| Vulnerable JS Library | Medium | 6 | 
| Absence of Anti-CSRF Tokens | Low | 8 | 
| Cookie Without SameSite Attribute | Low | 5 | 
| Cookie Without Secure Flag | Low | 1 | 
| CSP: Notices | Low | 5 | 
| Dangerous JS Functions | Low | 10 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 2 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 7 | 
| Information Disclosure - Suspicious Comments | Informational | 13 | 
| Modern Web Application | Informational | 11 | 
| Storable and Cacheable Content | Informational | 1 | 
| Storable but Non-Cacheable Content | Informational | 10 | 
| Timestamp Disclosure - Unix | Informational | 5 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 10 | 

## Alert Detail


  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, script-src-elem, script-src-attr, style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, script-src-elem, script-src-attr, style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/](https://extranet.lafrancesengage.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/sitemap.xml](https://extranet.lafrancesengage.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/misc/*.css$](https://extranet.lafrancesengage.fr/misc/*.css$)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr](https://extranet.lafrancesengage.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [http://extranet.lafrancesengage.fr/install.php?localize=true&profile=standard](http://extranet.lafrancesengage.fr/install.php?localize=true&profile=standard)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://localize.drupal.org/download" target="_blank">translation server</a>`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://extranet.lafrancesengage.fr/install.php](https://extranet.lafrancesengage.fr/install.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4`
  
  
  
  
Instances: 1
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=script src=http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4</p><p>tag=script src=http://extranet.lafrancesengage.fr/misc/jquery-extend-3.4.0.js?v=1.4.4</p><p>tag=script src=http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4</p><p>tag=script src=http://extranet.lafrancesengage.fr/misc/jquery.once.js?v=1.2</p><p>tag=script src=http://extranet.lafrancesengage.fr/misc/drupal.js?0</p><p>tag=img src=http://extranet.lafrancesengage.fr/themes/seven/logo.png</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password?name=ZAP](http://extranet.lafrancesengage.fr/user/password?name=ZAP)
  
  
  * Method: `POST`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Karla:400,700' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password?name=ZAP](http://extranet.lafrancesengage.fr/user/password?name=ZAP)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Karla:400,700' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `POST`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Karla:400,700' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Karla:400,700' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `POST`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Karla:400,700' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Karla:400,700' rel='stylesheet' type='text/css'>`
  
  
  
  
Instances: 6
  
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
<p>The identified library jquery, version 1.4.4 is vulnerable.</p>
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v1.4.4`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js?v=1.10.2](http://extranet.lafrancesengage.fr/sites/all/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js?v=1.10.2)
  
  
  * Method: `GET`
  
  
  * Evidence: `/1.10/jquery.min.js`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js?qbo1sm](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js?qbo1sm)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery Migrate v1.2.1`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery Migrate v1.2.1`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js?qdtmmp](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js?qdtmmp)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery Migrate v1.2.1`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/js/bootstrap.min.js](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/js/bootstrap.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `* Bootstrap v3.3.1`
  
  
  
  
Instances: 6
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2011-4969</p><p>CVE-2020-11023</p><p>CVE-2020-11022</p><p>CVE-2015-9251</p><p>CVE-2019-11358</p><p>CVE-2012-6708</p><p></p>
  
### Reference
* https://nvd.nist.gov/vuln/detail/CVE-2012-6708
* https://github.com/jquery/jquery/issues/2432
* http://research.insecurelabs.org/jquery/test/
* https://bugs.jquery.com/ticket/9521
* http://blog.jquery.com/2016/01/08/jquery-2-2-and-1-12-released/
* http://bugs.jquery.com/ticket/11290
* https://blog.jquery.com/2019/04/10/jquery-3-4-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2019-11358
* https://nvd.nist.gov/vuln/detail/CVE-2015-9251
* https://github.com/jquery/jquery/commit/753d591aea698e57d6db58c9f722cd0808619b1b
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2011-4969
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/user/password" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/user/login" method="post" id="user-login" accept-charset="UTF-8">`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `POST`
  
  
  * Evidence: `<form action="/user/login" method="post" id="user-login" accept-charset="UTF-8">`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password?name=ZAP](http://extranet.lafrancesengage.fr/user/password?name=ZAP)
  
  
  * Method: `POST`
  
  
  * Evidence: `<form action="/user/password?name=ZAP" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/install.php?profile=standard](http://extranet.lafrancesengage.fr/install.php?profile=standard)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/install.php?profile=standard" method="post" id="install-select-locale-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `POST`
  
  
  * Evidence: `<form action="/user/password" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password?name=ZAP](http://extranet.lafrancesengage.fr/user/password?name=ZAP)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/user/password?name=ZAP" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
Instances: 7
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "edit-name" "form_build_id" "form_id" "cck_multiple_field_remove_fields" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/install.php](https://extranet.lafrancesengage.fr/install.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/install.php" method="post" id="install-select-profile-form" accept-charset="UTF-8">`
  
  
  
  
Instances: 1
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "edit-profile--2" "edit-profile--3" "form_build_id" "form_id" "edit-submit" ].</p>
  
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
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://extranet.lafrancesengage.fr/update.php](https://extranet.lafrancesengage.fr/update.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `SESSf79d5507a40ecff1d3a536ecc34c0efe`
  
  
  * Evidence: `Set-Cookie: SESSf79d5507a40ecff1d3a536ecc34c0efe`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/](https://extranet.lafrancesengage.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr](https://extranet.lafrancesengage.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/robots.txt](https://extranet.lafrancesengage.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://extranet.lafrancesengage.fr/update.php](https://extranet.lafrancesengage.fr/update.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `SESSf79d5507a40ecff1d3a536ecc34c0efe`
  
  
  * Evidence: `Set-Cookie: SESSf79d5507a40ecff1d3a536ecc34c0efe`
  
  
  
  
Instances: 1
  
### Solution
<p>Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html

  
#### CWE Id : 614
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### CSP: Notices
##### Low (Medium)
  
  
  
  
#### Description
<p>Warnings:</p><p>1:1: The upgrade-insecure-requests directive is an experimental directive that will be likely added to the CSP specification.</p><p></p>
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### CSP: Notices
##### Low (Medium)
  
  
  
  
#### Description
<p>Warnings:</p><p>1:1: The upgrade-insecure-requests directive is an experimental directive that will be likely added to the CSP specification.</p><p></p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/misc/*.css$](https://extranet.lafrancesengage.fr/misc/*.css$)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr](https://extranet.lafrancesengage.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/](https://extranet.lafrancesengage.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/sitemap.xml](https://extranet.lafrancesengage.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js?qdtmmp](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js?qdtmmp)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/chosen.jquery.min.js?qdtmmp](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/chosen.jquery.min.js?qdtmmp)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/placeholders.jquery.min.js](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/placeholders.jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/chosen.jquery.min.js?qbo1sm](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/chosen.jquery.min.js?qbo1sm)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/response.min.js?qdtmmp](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/response.min.js?qdtmmp)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js?qbo1sm](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js?qbo1sm)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery-migrate.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js?v=1.10.2](http://extranet.lafrancesengage.fr/sites/all/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js?v=1.10.2)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/response.min.js?qbo1sm](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/response.min.js?qbo1sm)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
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
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery.once.js?v=1.2](http://extranet.lafrancesengage.fr/misc/jquery.once.js?v=1.2)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/respond.min.js](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/respond.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/html5shiv.js](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/html5shiv.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery-extend-3.4.0.js?v=1.10.2](http://extranet.lafrancesengage.fr/misc/jquery-extend-3.4.0.js?v=1.10.2)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery-extend-3.4.0.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery-extend-3.4.0.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/drupal.js?0](http://extranet.lafrancesengage.fr/misc/drupal.js?0)
  
  
  * Method: `GET`
  
  
  
  
Instances: 10
  
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

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/install.php](https://extranet.lafrancesengage.fr/install.php)
  
  
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
  
  
  
* URL: [https://extranet.lafrancesengage.fr/robots.txt](https://extranet.lafrancesengage.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/install.php](https://extranet.lafrancesengage.fr/install.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, must-revalidate`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `POST`
  
  
  * Evidence: `fr/sites/default/files/languages/fr_j-GvhYn0HDuGmknQW1g2AdS_5a9BWHYEL2ANCF8K4gM`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js?v=1.10.2](http://extranet.lafrancesengage.fr/sites/all/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js?v=1.10.2)
  
  
  * Method: `GET`
  
  
  * Evidence: `D27CDB6E-AE6D-11cf-96B8-444553540000`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/sites/default/files/languages/fr_j-GvhYn0HDuGmknQW1g2AdS_5a9BWHYEL2ANCF8K4gM`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `gVhBxJNAN9Fbnq0qJlLL3fNyljz02UV050jlDa+II8XQdwbeS4xanGfkKslCaIxovTGg/aM7mn95klgS0/yJuuWiRpo=`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/install.php?profile=standard](http://extranet.lafrancesengage.fr/install.php?profile=standard)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `D27CDB6E-AE6D-11cf-96B8-444553540000`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `IJYSurt1wgnB5/8qJlLL3fNyljz02f2SaObMgP5G50XypSiKleim/nM71aQ/uWemaS8cCk2gLMus7iSEOrxwM0ENXXw=`
  
  
  
  
Instances: 7
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>~��׬�ןj�m���z��jx.j\x0007�����ᯅ��\x001c;��I�[X6\x0001Կ�AXv\x0004/`
\x0008_</p><p>�\x0003</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/robots.txt](https://extranet.lafrancesengage.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `RlrM4vhrtHIO0/IqJlLL3fNyljz02WAJhIVKpb9eTSQRO1TGylABwbMp8Pt6+/35LtpjK2CwpiuuBKqzo1EAKswXB0A=`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/update.php](https://extranet.lafrancesengage.fr/update.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `xBL6fFoqgMBu6LJtDhHLVJwd9vmQ5liVVF5WFeYpHq4`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/install.php](https://extranet.lafrancesengage.fr/install.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/](https://extranet.lafrancesengage.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fcxK3xNp/LKGzB0qJlLL3fNyljz02XMBiMFsR0u0u/zkYOm1UVpLp6Ydf+rcVXEYiQLFVFlfnxOjLW7qUFbA3/Cj2AE=`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr](https://extranet.lafrancesengage.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `IFy06y2uI7b9TTkqJlLL3fNyljz02UF4IFxrrAnOcwyN94/B8gPrAl9BBoZJGP/ftoMkGskLhRwUwb8neZ8gK3EiEL8=`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>FZ���k�r\x000e��*&R���r�<��`	��J��^M$\x0011;T��P\x0001��)��z���.�c+`��+�\x0004���Q\x0000*�\x0017\x0007@</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/includes/](https://extranet.lafrancesengage.fr/includes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/scripts/](https://extranet.lafrancesengage.fr/scripts/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/modules/](https://extranet.lafrancesengage.fr/modules/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/themes/](https://extranet.lafrancesengage.fr/themes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/misc/](https://extranet.lafrancesengage.fr/misc/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/update.php](https://extranet.lafrancesengage.fr/update.php)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/profiles/](https://extranet.lafrancesengage.fr/profiles/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery-extend-3.4.0.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery-extend-3.4.0.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/drupal.js?0](http://extranet.lafrancesengage.fr/misc/drupal.js?0)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/drupal.js?0](http://extranet.lafrancesengage.fr/misc/drupal.js?0)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/drupal.js?0](http://extranet.lafrancesengage.fr/misc/drupal.js?0)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/drupal.js?0](http://extranet.lafrancesengage.fr/misc/drupal.js?0)
  
  
  * Method: `GET`
  
  
  * Evidence: `todo`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery.once.js?v=1.2](http://extranet.lafrancesengage.fr/misc/jquery.once.js?v=1.2)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/drupal.js?0](http://extranet.lafrancesengage.fr/misc/drupal.js?0)
  
  
  * Method: `GET`
  
  
  * Evidence: `Select`
  
  
  
  
Instances: 12
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected 2 times, the first in the element starting with: " * function with the one from jQuery 3.4.0, slightly modified (documented", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/install.php](https://extranet.lafrancesengage.fr/install.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
Instances: 1
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bADMIN\b and was detected in the element starting with: "<script type="text/javascript"></p><p><!--//--><![CDATA[//><!--</p><p>jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","urlIs", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery.sharrre.min.js?qbo1sm](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/jquery.sharrre.min.js?qbo1sm)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="count" href="#">'+n+"</a>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/chosen.jquery.min.js?qbo1sm](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/js/vendor/chosen.jquery.min.js?qbo1sm)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="chosen-single chosen-default"><span>'+this.default_text+'</span><div><b></b></div></a>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `POST`
  
  
  * Evidence: `<a name="top" id="top"></a>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="top" id="top"></a>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js?v=1.10.2](http://extranet.lafrancesengage.fr/sites/all/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js?v=1.10.2)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href='#'></a>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a/>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="top" id="top"></a>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.10.2](http://extranet.lafrancesengage.fr/misc/jquery-html-prefilter-3.5.0-backport.js?v=1.10.2)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a/>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `POST`
  
  
  * Evidence: `<a name="top" id="top"></a>`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4](http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='"+i+"'/>";n.insertBefore(g,n.firstChild);if(t.getElementById(i)){o.find.ID=function(m,p,q){if(typeof p.getElementById!=="undefined"&&!q)return(p=p.getElementById(m[1]))?p.id===m[1]||typeof p.getAttributeNode!=="undefined"&&p.getAttributeNode("id").nodeValue===m[1]?[p]:B:[]};o.filter.ID=function(m,p){var q=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&q&&q.nodeValue===p}}n.removeChild(g);
n=g=null})();(function(){var g=t.createElement("div");g.appendChild(t.createComment(""));if(g.getElementsByTagName("*").length>0)o.find.TAG=function(i,n){var m=n.getElementsByTagName(i[1]);if(i[1]==="*"){for(var p=[],q=0;m[q];q++)m[q].nodeType===1&&p.push(m[q]);m=p}return m};g.innerHTML="`
  
  
  
  
Instances: 10
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/install.php](https://extranet.lafrancesengage.fr/install.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="http://extranet.lafrancesengage.fr/misc/jquery.js?v=1.4.4"></script>`
  
  
  
  
Instances: 1
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>No links have been found while there are scripts, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/robots.txt](https://extranet.lafrancesengage.fr/robots.txt)
  
  
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
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
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

  
  
  
  
### Storable but Non-Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users. </p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/misc/*.jpg](https://extranet.lafrancesengage.fr/misc/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/misc/*.gif](https://extranet.lafrancesengage.fr/misc/*.gif)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/misc/*.js$](https://extranet.lafrancesengage.fr/misc/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/](https://extranet.lafrancesengage.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr](https://extranet.lafrancesengage.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/sitemap.xml](https://extranet.lafrancesengage.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/misc/*.css](https://extranet.lafrancesengage.fr/misc/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/misc/*.css$](https://extranet.lafrancesengage.fr/misc/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/misc/*.js](https://extranet.lafrancesengage.fr/misc/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/css/bootstrap.min.css](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `42857143`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/css/bootstrap.min.css](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `33333333`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/css/bootstrap.min.css](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `00000000`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/css/bootstrap.min.css](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `80000000`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/css/bootstrap.min.css](http://extranet.lafrancesengage.fr/sites/all/themes/lafrancesengage/bootstrap/css/bootstrap.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `66666667`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>42857143, which evaluates to: 1971-05-12 00:45:43</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `POST`
  
  
  * Parameter: `form_id`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password?name=ZAP](http://extranet.lafrancesengage.fr/user/password?name=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `name`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `POST`
  
  
  * Parameter: `name`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `POST`
  
  
  * Parameter: `name`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/password](http://extranet.lafrancesengage.fr/user/password)
  
  
  * Method: `POST`
  
  
  * Parameter: `cck_multiple_field_remove_fields`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `POST`
  
  
  * Parameter: `cck_multiple_field_remove_fields`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `POST`
  
  
  * Parameter: `form_id`
  
  
  
  
* URL: [http://extranet.lafrancesengage.fr/user/login](http://extranet.lafrancesengage.fr/user/login)
  
  
  * Method: `POST`
  
  
  * Parameter: `pass`
  
  
  
  
Instances: 10
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>http://extranet.lafrancesengage.fr/user/login</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [button] tag [value] attribute </p><p></p><p>The user input found was:</p><p>op=Se connecter</p><p></p><p>The user-controlled value was:</p><p>se connecter</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
