
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:51:18


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 5 |
| Low | 8 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| CSP: Wildcard Directive | Medium | 5 | 
| HTTPS to HTTP Insecure Transition in Form Post | Medium | 2 | 
| Secure Pages Include Mixed Content (Including Scripts) | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 2 | 
| Absence of Anti-CSRF Tokens | Low | 2 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| CSP: Notices | Low | 5 | 
| Feature Policy Header Not Set | Low | 2 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 2 | 
| Base64 Disclosure | Informational | 4 | 
| Information Disclosure - Suspicious Comments | Informational | 4 | 
| Non-Storable Content | Informational | 1 | 
| Storable and Cacheable Content | Informational | 4 | 
| Storable but Non-Cacheable Content | Informational | 3 | 
| Timestamp Disclosure - Unix | Informational | 3 | 

## Alert Detail


  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, script-src-elem, script-src-attr, style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
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
  
  
  
* URL: [https://publisocial.fr/](https://publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://publisocial.fr/sitemap.xml](https://publisocial.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://publisocial.fr](https://publisocial.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://publisocial.fr/wp-admin/](https://publisocial.fr/wp-admin/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
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

  
  
  
  
### HTTPS to HTTP Insecure Transition in Form Post
##### Medium (Medium)
  
  
  
  
#### Description
<p>This check identifies secure HTTPS pages that host insecure HTTP forms. The issue is that a secure page is transitioning to an insecure page when data is uploaded through a form. The user may think they're submitting data to a secure page when in fact they are not.</p>
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure sensitive data is only sent over secured HTTPS channels.</p>
  
### Other information
<p>The response to the following request over HTTPS included an HTTP form tag action attribute value:</p><p></p><p>https://www.publisocial.fr/The context was:</p><p></p><p><form role="search" method="get" class="search-form" action="http://www.publisocial.fr/"></p><p>	<label></p><p>		<span class="screen-reader-text">Recherche pour :</span></p><p>		<input type="search" class="search-field" placeholder="Recherche&hellip;" value="" name="s" /></p><p>	</label></p><p>	<button type="submit" class="search-submit"><span class="screen-reader-text">Recherche</span></button></p><p></form></p>
  
### Reference
* 

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Secure Pages Include Mixed Content (Including Scripts)
##### Medium (Medium)
  
  
  
  
#### Description
<p>The page includes mixed content, that is content accessed via HTTP instead of HTTPS.</p>
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.publisocial.fr/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp`
  
  
  
  
Instances: 1
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=script src=http://www.publisocial.fr/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp</p><p>tag=script src=http://www.publisocial.fr/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1</p><p>tag=script src=http://www.publisocial.fr/wp-content/plugins/pe-easy-slider/js/bootstrap.min.js?ver=3.2.0</p><p>tag=script src=http://www.publisocial.fr/wp-content/themes/twentysixteen/js/html5.js?ver=3.7.3</p><p>tag=script src=http://www.publisocial.fr/wp-content/plugins/favorites/assets/js/favorites.min.js?ver=2.3.1</p><p>tag=img src=http://www.publisocial.fr/wp-content/uploads/2019/02/cropped-4205122590_f93c9f639a_b.jpg</p><p>tag=img src=http://0.gravatar.com/avatar/c615579806a572b6b041e91cae15b455?s=49&d=mm&r=g</p><p>tag=img src=http://0.gravatar.com/avatar/375c50f3e23fd6154b987b4952ad0a93?s=49&d=mm&r=g</p><p>tag=img src=http://0.gravatar.com/avatar/375c50f3e23fd6154b987b4952ad0a93?s=49&d=mm&r=g</p><p>tag=img src=http://0.gravatar.com/avatar/c615579806a572b6b041e91cae15b455?s=49&d=mm&r=g</p><p>tag=img src=http://0.gravatar.com/avatar/c615579806a572b6b041e91cae15b455?s=49&d=mm&r=g</p><p>tag=img src=http://0.gravatar.com/avatar/c615579806a572b6b041e91cae15b455?s=49&d=mm&r=g</p><p>tag=img src=http://0.gravatar.com/avatar/c615579806a572b6b041e91cae15b455?s=49&d=mm&r=g</p><p>tag=img src=http://0.gravatar.com/avatar/35b9fb3e3348036a845a49cb7720eb25?s=49&d=mm&r=g</p><p>tag=img src=http://0.gravatar.com/avatar/375c50f3e23fd6154b987b4952ad0a93?s=49&d=mm&r=g</p><p>tag=img src=http://0.gravatar.com/avatar/cafd1d2622ccd32f187180b80674422b?s=49&d=mm&r=g</p><p>tag=form action=http://www.publisocial.fr/</p><p>tag=form action=http://www.publisocial.fr</p><p>tag=script src=http://www.publisocial.fr/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.1.5</p><p>tag=script src=http://www.publisocial.fr/wp-content/plugins/wp-accessibility/toolbar/js/a11y.js?ver=1.0</p><p>tag=script src=http://www.publisocial.fr/wp-content/plugins/wp-accessibility/js/longdesc.button.js?ver=1.0</p><p>tag=script src=http://www.publisocial.fr/wp-content/plugins/wp-accessibility/js/current-menu-item.js?ver=1.0</p><p>tag=script src=http://www.publisocial.fr/wp-content/themes/twentysixteen/js/skip-link-focus-fix.js?ver=20160816</p><p>tag=script src=http://www.publisocial.fr/wp-content/themes/twentysixteen/js/functions.js?ver=20160816</p><p>tag=script src=http://www.publisocial.fr/wp-includes/js/wp-embed.min.js?ver=5.3.4</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11">`
  
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='stylesheet' id='twentysixteen-fonts-css'  href='https://fonts.googleapis.com/css?family=Merriweather%3A400%2C700%2C900%2C400italic%2C700italic%2C900italic%7CMontserrat%3A400%2C700%7CInconsolata%3A400&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />`
  
  
  
  
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
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="http://www.publisocial.fr/">`
  
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="http://www.publisocial.fr" method="get">`
  
  
  
  
Instances: 2
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "s" ].</p>
  
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
  
  
  
* URL: [https://publisocial.fr](https://publisocial.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-drees-rfas.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-drees-rfas.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://publisocial.fr/](https://publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-drees-rfas.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-drees-rfas.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://publisocial.fr/robots.txt](https://publisocial.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-drees-rfas.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-drees-rfas.cegedim.cloud-HTTP`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### CSP: Notices
##### Low (Medium)
  
  
  
  
#### Description
<p>Warnings:</p><p>1:1: The upgrade-insecure-requests directive is an experimental directive that will be likely added to the CSP specification.</p><p></p>
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
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
  
  
  
* URL: [https://publisocial.fr](https://publisocial.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://publisocial.fr/](https://publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://publisocial.fr/sitemap.xml](https://publisocial.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://publisocial.fr/wp-admin/](https://publisocial.fr/wp-admin/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
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

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
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

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://publisocial.fr/wp-admin/admin-ajax.php](https://publisocial.fr/wp-admin/admin-ajax.php)
  
  
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
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
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

  
  
  
  
### Incomplete or No Cache-control and Pragma HTTP Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control and pragma HTTP header have not been set properly or are missing allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://publisocial.fr/robots.txt](https://publisocial.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eu/Covid-19-en-Seine-Saint-Denis-2-2-comment-le-systeme-de-sante-accroit-les`
  
  
  
  
Instances: 1
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>z�¢���_~z�z)��&��߃zx��o���&����W��+-zg�u�j{^��\x001c����W�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://publisocial.fr](https://publisocial.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `WPAq57FO7xrlgY4qJlLL3fNyljz02TkkTZr+xUsdv3PquH4ut+CDxv3V3j0UTid9/vA9YRwRani7BYhDYiiM13a6e/U=`
  
  
  
  
* URL: [https://publisocial.fr/](https://publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `cD5s5MYbQjZjerUqJlLL3fNyljz02a/ToyRkrBM+08jHyKXaXNN0RAQlY0YGisJXKwtgn27+0h1pbqyZn/wWZLxdcSY=`
  
  
  
  
* URL: [https://publisocial.fr/robots.txt](https://publisocial.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `9/sL3j9R/+eKWV8qJlLL3fNyljz02eq9l9CjHw9bRBikmvMgP9LfKsSux7ocJIoX5MXrMLT26wz2ESnl2RMXdlxPkDs=`
  
  
  
  
Instances: 3
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>X�*�N�\x001a偎*&R���r�<��9$M���K\x001d�s�~.�������=\x0014N'}��=a\x001c\x0011jx�\x0005�Cb(��v�{�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
Instances: 1
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected in the element starting with: "<!--</p><p>Performance optimized by W3 Total Cache. Learn more: https://www.w3-edge.com/products/</p><p></p><p></p><p>Served from: www.publisocial.f", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
Instances: 3
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected in the element starting with: "<script type='text/javascript'></p><p>//<![CDATA[</p><p>(function( $ ) { 'use strict';</p><p>	</p><p>	$('a').removeAttr('target');</p><p>	</p><p>	$('input,a,s", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [http://www.publisocial.fr/](http://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
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
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
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

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://publisocial.fr/](https://publisocial.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://publisocial.fr](https://publisocial.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://publisocial.fr/robots.txt](https://publisocial.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://publisocial.fr/sitemap.xml](https://publisocial.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://publisocial.fr/wp-admin/admin-ajax.php](https://publisocial.fr/wp-admin/admin-ajax.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://publisocial.fr/wp-admin/](https://publisocial.fr/wp-admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `39952352`
  
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160816`
  
  
  
  
* URL: [https://www.publisocial.fr/](https://www.publisocial.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1599150339`
  
  
  
  
Instances: 3
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>39952352, which evaluates to: 1971-04-08 09:52:32</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
