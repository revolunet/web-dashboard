
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:40:24


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 10 |
| Low | 14 |
| Informational | 13 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 3 | 
| CSP: Wildcard Directive | Medium | 5 | 
| Reverse Tabnabbing | Medium | 11 | 
| Sub Resource Integrity Attribute Missing | Medium | 10 | 
| Vulnerable JS Library | Medium | 2 | 
| X-Frame-Options Header Not Set | Medium | 10 | 
| X-Frame-Options Setting Malformed | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Cookie Without SameSite Attribute | Low | 4 | 
| Cookie Without Secure Flag | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 13 | 
| CSP: Notices | Low | 5 | 
| Dangerous JS Functions | Low | 6 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 6 | 
| Secure Pages Include Mixed Content | Low | 3 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Content-Type Header Missing | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 12 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 8 | 
| Storable and Cacheable Content | Informational | 2 | 
| Storable but Non-Cacheable Content | Informational | 2 | 
| Timestamp Disclosure - Unix | Informational | 11 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 2 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/templates/isis/css/template.css?05914f7ea81b29abfc0f2ccbba24690e](https://intefp.travail-emploi.gouv.fr/administrator/templates/isis/css/template.css?05914f7ea81b29abfc0f2ccbba24690e)
  
  
  * Method: `GET`
  
  
  * Evidence: `565593041025`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/templates/isis/css/template.css?05914f7ea81b29abfc0f2ccbba24690e](https://intefp.travail-emploi.gouv.fr/administrator/templates/isis/css/template.css?05914f7ea81b29abfc0f2ccbba24690e)
  
  
  * Method: `GET`
  
  
  * Evidence: `580110497238`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/templates/isis/css/template.css?05914f7ea81b29abfc0f2ccbba24690e](https://intefp.travail-emploi.gouv.fr/administrator/templates/isis/css/template.css?05914f7ea81b29abfc0f2ccbba24690e)
  
  
  * Method: `GET`
  
  
  * Evidence: `584224756083`
  
  
  
  
Instances: 3
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 565593</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, script-src-elem, script-src-attr, style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/installation/](https://intefp.travail-emploi.gouv.fr/installation/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/](https://intefp.travail-emploi.gouv.fr/administrator/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plan-du-site](http://intefp.travail-emploi.gouv.fr/plan-du-site)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="ministere" title="Portail du Minist&egrave;re" href="http://travail-emploi.gouv.fr/" target="_blank">
					<img alt="marianne travail" src="/templates/intefp/images/logos/marianne_travail.jpg"/>
				</a>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale](http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="ministere" title="Portail du Minist&egrave;re" href="http://travail-emploi.gouv.fr/" target="_blank">
					<img alt="marianne travail" src="/templates/intefp/images/logos/marianne_travail.jpg"/>
				</a>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/formations/cpi/information](http://intefp.travail-emploi.gouv.fr/formations/cpi/information)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="ministere" title="Portail du Minist&egrave;re" href="http://travail-emploi.gouv.fr/" target="_blank">
					<img alt="marianne travail" src="/templates/intefp/images/logos/marianne_travail.jpg"/>
				</a>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/presentation](http://intefp.travail-emploi.gouv.fr/institut/presentation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="ministere" title="Portail du Minist&egrave;re" href="http://travail-emploi.gouv.fr/" target="_blank">
					<img alt="marianne travail" src="/templates/intefp/images/logos/marianne_travail.jpg"/>
				</a>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/](http://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="ministere" title="Portail du Minist&egrave;re" href="http://travail-emploi.gouv.fr/" target="_blank">
					<img alt="marianne travail" src="/templates/intefp/images/logos/marianne_travail.jpg"/>
				</a>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/ressources/centre-ressources](http://intefp.travail-emploi.gouv.fr/ressources/centre-ressources)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="ministere" title="Portail du Minist&egrave;re" href="http://travail-emploi.gouv.fr/" target="_blank">
					<img alt="marianne travail" src="/templates/intefp/images/logos/marianne_travail.jpg"/>
				</a>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/contact](http://intefp.travail-emploi.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="ministere" title="Portail du Minist&egrave;re" href="http://travail-emploi.gouv.fr/" target="_blank">
					<img alt="marianne travail" src="/templates/intefp/images/logos/marianne_travail.jpg"/>
				</a>`
  
  
  
  
Instances: 7
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="ministere" title="Portail du Minist&egrave;re" href="http://travail-emploi.gouv.fr/" target="_blank">
					<img alt="marianne travail" src="/templates/intefp/images/logos/marianne_travail.jpg"/>
				</a>`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="ministere" title="Portail du Minist&egrave;re" href="http://travail-emploi.gouv.fr/" target="_blank">
					<img alt="marianne travail" src="/templates/intefp/images/logos/marianne_travail.jpg"/>
				</a>`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/](https://intefp.travail-emploi.gouv.fr/administrator/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="login-joomla hasTooltip" href="https://www.joomla.org" target="_blank" title="Joomla!® est un logiciel libre distribué sous licence GNU/GPL."><span class="icon-joomla"></span></a>`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="ministere" title="Portail du Minist&egrave;re" href="http://travail-emploi.gouv.fr/" target="_blank">
					<img alt="marianne travail" src="/templates/intefp/images/logos/marianne_travail.jpg"/>
				</a>`
  
  
  
  
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
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plan-du-site](http://intefp.travail-emploi.gouv.fr/plan-du-site)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Arimo:400,400italic,700' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/](http://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Arimo:400,400italic,700' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/](http://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plan-du-site](http://intefp.travail-emploi.gouv.fr/plan-du-site)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />`
  
  
  
  
Instances: 4
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Arimo:400,400italic,700' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Arimo:400,400italic,700' rel='stylesheet' type='text/css' />`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='http://fonts.googleapis.com/css?family=Arimo:400,400italic,700' rel='stylesheet' type='text/css' />`
  
  
  
  
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
<p>The identified library jquery, version 1.12.4 is vulnerable.</p>
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/media/jui/js/jquery.min.js](http://intefp.travail-emploi.gouv.fr/media/jui/js/jquery.min.js)
  
  
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

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 1.12.4 is vulnerable.</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/media/jui/js/jquery.min.js](https://intefp.travail-emploi.gouv.fr/media/jui/js/jquery.min.js)
  
  
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

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/ressources/centre-ressources](http://intefp.travail-emploi.gouv.fr/ressources/centre-ressources)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/](http://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/contact](http://intefp.travail-emploi.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale](http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/formations/cpi/information](http://intefp.travail-emploi.gouv.fr/formations/cpi/information)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/presentation](http://intefp.travail-emploi.gouv.fr/institut/presentation)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plan-du-site](http://intefp.travail-emploi.gouv.fr/plan-du-site)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 7
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 3
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Setting Malformed
##### Medium (Medium)
  
  
  
  
#### Description
<p>An X-Frame-Options header was present in the response but the value was not correctly set.</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/piwik/](https://intefp.travail-emploi.gouv.fr/piwik/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure a valid setting is used on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY.  Alternatively consider implementing Content Security Policy's "frame-ancestors" directive.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7034#section-2.1

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/formations/cpi/information](http://intefp.travail-emploi.gouv.fr/formations/cpi/information)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/formations/cpi/information" method="post" class="form-inline">`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plan-du-site](http://intefp.travail-emploi.gouv.fr/plan-du-site)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/plan-du-site" method="post" class="form-inline">`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/contact](http://intefp.travail-emploi.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/contact" method="post" class="form-inline">`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/contact](http://intefp.travail-emploi.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="contact-form" action="/contact" method="post" class="form-validate form-horizontal well">`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/presentation](http://intefp.travail-emploi.gouv.fr/institut/presentation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/institut/presentation" method="post" class="form-inline">`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/](http://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/" method="post" class="form-inline">`
  
  
  
  
Instances: 6
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "mod-search-searchword" "task" "option" "Itemid" ].</p>
  
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
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/piwik/](https://intefp.travail-emploi.gouv.fr/piwik/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="index.php?module=LanguagesManager&amp;action=saveLanguage" method="post">`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/erreur" method="post" class="form-inline">`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/" method="post" class="form-inline">`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/" method="post" class="form-inline">`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/](https://intefp.travail-emploi.gouv.fr/administrator/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/administrator/index.php" method="post" id="form-login" class="form-inline">`
  
  
  
  
Instances: 5
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "token_auth" ].</p>
  
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
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/](https://intefp.travail-emploi.gouv.fr/administrator/)
  
  
  * Method: `GET`
  
  
  * Parameter: `0c0754b455dc1621d5ea0e46622960eb`
  
  
  * Evidence: `Set-Cookie: 0c0754b455dc1621d5ea0e46622960eb`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `9c66d3ae05ac3ab672b450db5ca2cbab`
  
  
  * Evidence: `Set-Cookie: 9c66d3ae05ac3ab672b450db5ca2cbab`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `9c66d3ae05ac3ab672b450db5ca2cbab`
  
  
  * Evidence: `Set-Cookie: 9c66d3ae05ac3ab672b450db5ca2cbab`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/piwik/](https://intefp.travail-emploi.gouv.fr/piwik/)
  
  
  * Method: `GET`
  
  
  * Parameter: `PIWIK_SESSID`
  
  
  * Evidence: `Set-Cookie: PIWIK_SESSID`
  
  
  
  
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
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `9c66d3ae05ac3ab672b450db5ca2cbab`
  
  
  * Evidence: `Set-Cookie: 9c66d3ae05ac3ab672b450db5ca2cbab`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/](https://intefp.travail-emploi.gouv.fr/administrator/)
  
  
  * Method: `GET`
  
  
  * Parameter: `0c0754b455dc1621d5ea0e46622960eb`
  
  
  * Evidence: `Set-Cookie: 0c0754b455dc1621d5ea0e46622960eb`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `9c66d3ae05ac3ab672b450db5ca2cbab`
  
  
  * Evidence: `Set-Cookie: 9c66d3ae05ac3ab672b450db5ca2cbab`
  
  
  
  
Instances: 3
  
### Solution
<p>Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html

  
#### CWE Id : 614
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-bordeaux](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-bordeaux)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://www.google.com/jsapi?key=`
  
  
  * Evidence: `<script src="http://www.google.com/jsapi?key=" type="text/javascript"></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-bordeaux](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-bordeaux)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://maps.google.fr/maps/api/js?v=3.x&language=fr&libraries=places&sensor=false`
  
  
  * Evidence: `<script type='text/javascript' src='http://maps.google.fr/maps/api/js?v=3.x&amp;language=fr&amp;libraries=places&amp;sensor=false'></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/contact](http://intefp.travail-emploi.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js?onload=JoomlaInitReCaptcha2&render=explicit&hl=fr-FR`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?onload=JoomlaInitReCaptcha2&render=explicit&hl=fr-FR" type="text/javascript"></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-montpellier](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-montpellier)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://maps.google.fr/maps/api/js?v=3.x&language=fr&libraries=places&sensor=false`
  
  
  * Evidence: `<script type='text/javascript' src='http://maps.google.fr/maps/api/js?v=3.x&amp;language=fr&amp;libraries=places&amp;sensor=false'></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-montpellier](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-montpellier)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://www.google.com/uds/?file=earth&v=1`
  
  
  * Evidence: `<script src="http://www.google.com/uds/?file=earth&amp;v=1" type="text/javascript"></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-montpellier](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-montpellier)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://www.google.com/jsapi?key=`
  
  
  * Evidence: `<script src="http://www.google.com/jsapi?key=" type="text/javascript"></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-bordeaux](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-bordeaux)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://www.google.com/uds/?file=earth&v=1`
  
  
  * Evidence: `<script src="http://www.google.com/uds/?file=earth&amp;v=1" type="text/javascript"></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-lille](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-lille)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://maps.google.fr/maps/api/js?v=3.x&language=fr&libraries=places&sensor=false`
  
  
  * Evidence: `<script type='text/javascript' src='http://maps.google.fr/maps/api/js?v=3.x&amp;language=fr&amp;libraries=places&amp;sensor=false'></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-lille](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-lille)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://www.google.com/uds/?file=earth&v=1`
  
  
  * Evidence: `<script src="http://www.google.com/uds/?file=earth&amp;v=1" type="text/javascript"></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://www.google.com/jsapi?key=`
  
  
  * Evidence: `<script src="http://www.google.com/jsapi?key=" type="text/javascript"></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://maps.google.fr/maps/api/js?v=3.x&language=fr&libraries=places&sensor=false`
  
  
  * Evidence: `<script type='text/javascript' src='http://maps.google.fr/maps/api/js?v=3.x&amp;language=fr&amp;libraries=places&amp;sensor=false'></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://www.google.com/uds/?file=earth&v=1`
  
  
  * Evidence: `<script src="http://www.google.com/uds/?file=earth&amp;v=1" type="text/javascript"></script>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-lille](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-lille)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://www.google.com/jsapi?key=`
  
  
  * Evidence: `<script src="http://www.google.com/jsapi?key=" type="text/javascript"></script>`
  
  
  
  
Instances: 13
  
### Solution
<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>
  
### Reference
* 

  
#### CWE Id : 829
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### CSP: Notices
##### Low (Medium)
  
  
  
  
#### Description
<p>Warnings:</p><p>1:1: The upgrade-insecure-requests directive is an experimental directive that will be likely added to the CSP specification.</p><p></p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/](https://intefp.travail-emploi.gouv.fr/administrator/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/installation/](https://intefp.travail-emploi.gouv.fr/installation/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/media/system/js/html5fallback.js](http://intefp.travail-emploi.gouv.fr/media/system/js/html5fallback.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/media/jui/js/jquery-migrate.min.js](http://intefp.travail-emploi.gouv.fr/media/jui/js/jquery-migrate.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/media/jui/js/jquery.min.js](http://intefp.travail-emploi.gouv.fr/media/jui/js/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
Instances: 3
  
### Solution
<p>See the references for security advice on the use of these functions.</p>
  
### Reference
* https://angular.io/guide/security

  
#### CWE Id : 749
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/media/jui/js/chosen.jquery.min.js](https://intefp.travail-emploi.gouv.fr/media/jui/js/chosen.jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/media/jui/js/jquery-migrate.min.js](https://intefp.travail-emploi.gouv.fr/media/jui/js/jquery-migrate.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/media/jui/js/jquery.min.js](https://intefp.travail-emploi.gouv.fr/media/jui/js/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/contact](http://intefp.travail-emploi.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale](http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/formations/cpi/information](http://intefp.travail-emploi.gouv.fr/formations/cpi/information)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/presentation](http://intefp.travail-emploi.gouv.fr/institut/presentation)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plan-du-site](http://intefp.travail-emploi.gouv.fr/plan-du-site)
  
  
  * Method: `GET`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/](http://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/piwik/](https://intefp.travail-emploi.gouv.fr/piwik/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/](https://intefp.travail-emploi.gouv.fr/administrator/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/piwik/](https://intefp.travail-emploi.gouv.fr/piwik/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store, must-revalidate`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/robots.txt](https://intefp.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/media/jui/css/chosen.css](https://intefp.travail-emploi.gouv.fr/media/jui/css/chosen.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/templates/isis/css/template.css?05914f7ea81b29abfc0f2ccbba24690e](https://intefp.travail-emploi.gouv.fr/administrator/templates/isis/css/template.css?05914f7ea81b29abfc0f2ccbba24690e)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://intefp.travail-emploi.gouv.fr/images/img/Logo-intefp.png`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://intefp.travail-emploi.gouv.fr/images/img/Logo-intefp.png`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://intefp.travail-emploi.gouv.fr/images/img/Logo-intefp.png`
  
  
  
  
Instances: 3
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=img src=http://intefp.travail-emploi.gouv.fr/images/img/Logo-intefp.png</p><p>tag=img src=http://www.intefp.travail-emploi.gouv.fr/analytics/piwik.php?idsite=1&rec=1&apiv=1&action_name=INTEFP+-+Erreur+-+No-Java&rand=1029723163</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/presentation](http://intefp.travail-emploi.gouv.fr/institut/presentation)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/contact](http://intefp.travail-emploi.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/](http://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/formations/cpi/information](http://intefp.travail-emploi.gouv.fr/formations/cpi/information)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plan-du-site](http://intefp.travail-emploi.gouv.fr/plan-du-site)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 5
  
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

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/robots.txt](https://intefp.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/](https://intefp.travail-emploi.gouv.fr/administrator/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/piwik/](https://intefp.travail-emploi.gouv.fr/piwik/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plus/actualites](http://intefp.travail-emploi.gouv.fr/plus/actualites)
  
  
  * Method: `GET`
  
  
  * Evidence: `/images/PDF/2020/Proces-verbal-slection-CPI-2020`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/actions-partenariales/dispositif-fse](http://intefp.travail-emploi.gouv.fr/actions-partenariales/dispositif-fse)
  
  
  * Method: `GET`
  
  
  * Evidence: `/images/Vignettes/2019/logo_fonds_social_europeen2`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/](http://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/images/PDF/2020/Proces-verbal-slection-CPI-2020`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/images/PDF/2020/Proces-verbal-slection-CPI-2020.pdf](http://intefp.travail-emploi.gouv.fr/images/PDF/2020/Proces-verbal-slection-CPI-2020.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `2988/Subtype/XML/Type/Metadata`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/contact](http://intefp.travail-emploi.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `6LcT9iQTAAAAAIqmWnGJllwfyK2onZM7X0DoCAb3`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale](http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale)
  
  
  * Method: `GET`
  
  
  * Evidence: `/images/Vignettes/2019/Drapeau-Union-europeenne-avec-logo-UE`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/formations/formations-communes](http://intefp.travail-emploi.gouv.fr/formations/formations-communes)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/uploads/pdf/files/1535113860/fr/CdC`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/formations/formation-en-ligne](http://intefp.travail-emploi.gouv.fr/formations/formation-en-ligne)
  
  
  * Method: `GET`
  
  
  * Evidence: `/images/photos/logo-PadINT-72dpi`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/media/jui/js/jquery.min.js](http://intefp.travail-emploi.gouv.fr/media/jui/js/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `D27CDB6E-AE6D-11cf-96B8-444553540000`
  
  
  
  
Instances: 9
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�)���?<1�M����q�>���j_���-���\x0008�>�M�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/images/PDF/2020/Proces-verbal-slection-CPI-2020`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `/images/PDF/2020/Proces-verbal-slection-CPI-2020`
  
  
  
  
Instances: 2
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�)���?<1�M����q�>���j_���-���\x0008�>�M�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/plugins/](https://intefp.travail-emploi.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/logs/](https://intefp.travail-emploi.gouv.fr/logs/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/components/](https://intefp.travail-emploi.gouv.fr/components/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/media/](https://intefp.travail-emploi.gouv.fr/media/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/sitemap.xml](https://intefp.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/includes/](https://intefp.travail-emploi.gouv.fr/includes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/modules/](https://intefp.travail-emploi.gouv.fr/modules/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/cache/](https://intefp.travail-emploi.gouv.fr/cache/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/libraries/](https://intefp.travail-emploi.gouv.fr/libraries/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/cli/](https://intefp.travail-emploi.gouv.fr/cli/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/language/](https://intefp.travail-emploi.gouv.fr/language/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/images/](https://intefp.travail-emploi.gouv.fr/images/)
  
  
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
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-bordeaux](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-bordeaux)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-nancy](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-nancy)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plus/recherche](http://intefp.travail-emploi.gouv.fr/plus/recherche)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/media/jui/js/bootstrap.min.js](http://intefp.travail-emploi.gouv.fr/media/jui/js/bootstrap.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-lille](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-lille)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-nantes](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-nantes)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-paris](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-paris)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/media/system/js/caption.js](http://intefp.travail-emploi.gouv.fr/media/system/js/caption.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-montpellier](http://intefp.travail-emploi.gouv.fr/institut/implantation/venir-institut/cif-de-montpellier)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
Instances: 10
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected in the element starting with: "<script type='text/javascript'>/*<![CDATA[*/</p><p>var mapconfig33_1bzp3_0 = {"debug":"0","visualrefresh":"0","show":"1","mapclass":"m", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/piwik/](https://intefp.travail-emploi.gouv.fr/piwik/)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/](https://intefp.travail-emploi.gouv.fr/administrator/)
  
  
  * Method: `GET`
  
  
  * Evidence: `administrator`
  
  
  
  
Instances: 2
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bWHERE\b and was detected in the element starting with: "<script type="text/javascript"></p><p>    <!--</p><p>    $(function () {</p><p>        // client-side test for https to handle the case where the ", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale](http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><img src="http://www.intefp.travail-emploi.gouv.fr/analytics/piwik.php?idsite=1&amp;rec=1&amp;apiv=1&amp;action_name=INTEFP+-+Session+nationale+-+No-Java&amp;rand=1655106580" style="border:0" alt="" /></noscript>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/formations/cpi/information](http://intefp.travail-emploi.gouv.fr/formations/cpi/information)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><img src="http://www.intefp.travail-emploi.gouv.fr/analytics/piwik.php?idsite=1&amp;rec=1&amp;apiv=1&amp;action_name=INTEFP+-+Présentation+-+No-Java&amp;rand=381072834" style="border:0" alt="" /></noscript>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/contact](http://intefp.travail-emploi.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><img src="http://www.intefp.travail-emploi.gouv.fr/analytics/piwik.php?idsite=1&amp;rec=1&amp;apiv=1&amp;action_name=INTEFP+-+Contact+-+No-Java&amp;rand=141641290" style="border:0" alt="" /></noscript>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/](http://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><img src="http://www.intefp.travail-emploi.gouv.fr/analytics/piwik.php?idsite=1&amp;rec=1&amp;apiv=1&amp;action_name=INTEFP+-+Accueil+-+No-Java&amp;rand=931321655" style="border:0" alt="" /></noscript>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plan-du-site](http://intefp.travail-emploi.gouv.fr/plan-du-site)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><img src="http://www.intefp.travail-emploi.gouv.fr/analytics/piwik.php?idsite=1&amp;rec=1&amp;apiv=1&amp;action_name=INTEFP+-+Plan+du+site+-+No-Java&amp;rand=1461542725" style="border:0" alt="" /></noscript>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/ressources/centre-ressources](http://intefp.travail-emploi.gouv.fr/ressources/centre-ressources)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><img src="http://www.intefp.travail-emploi.gouv.fr/analytics/piwik.php?idsite=1&amp;rec=1&amp;apiv=1&amp;action_name=INTEFP+-+Centre+Ressources+-+No-Java&amp;rand=1624959882" style="border:0" alt="" /></noscript>`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/presentation](http://intefp.travail-emploi.gouv.fr/institut/presentation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><img src="http://www.intefp.travail-emploi.gouv.fr/analytics/piwik.php?idsite=1&amp;rec=1&amp;apiv=1&amp;action_name=INTEFP+-+Présentation+-+No-Java&amp;rand=1952516349" style="border:0" alt="" /></noscript>`
  
  
  
  
Instances: 7
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>A noScript tag has been found, which is an indication that the application works differently with JavaScript enabled compared to when it is not.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><img src="http://www.intefp.travail-emploi.gouv.fr/analytics/piwik.php?idsite=1&amp;rec=1&amp;apiv=1&amp;action_name=INTEFP+-+Accueil+-+No-Java&amp;rand=931321655" style="border:0" alt="" /></noscript>`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a title="Accueil" href="/index.php" target="_self">ce lien</a>`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/](https://intefp.travail-emploi.gouv.fr/administrator/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
				Attention : JavaScript doit être activé pour un fonctionnement correct de l'interface d'administration.			</noscript>`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><img src="http://www.intefp.travail-emploi.gouv.fr/analytics/piwik.php?idsite=1&amp;rec=1&amp;apiv=1&amp;action_name=INTEFP+-+Accueil+-+No-Java&amp;rand=931321655" style="border:0" alt="" /></noscript>`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/components/](https://intefp.travail-emploi.gouv.fr/components/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/administrator/](https://intefp.travail-emploi.gouv.fr/administrator/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/includes/](https://intefp.travail-emploi.gouv.fr/includes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/images/](https://intefp.travail-emploi.gouv.fr/images/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/language/](https://intefp.travail-emploi.gouv.fr/language/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/cli/](https://intefp.travail-emploi.gouv.fr/cli/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/cache/](https://intefp.travail-emploi.gouv.fr/cache/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/sitemap.xml](https://intefp.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/robots.txt](https://intefp.travail-emploi.gouv.fr/robots.txt)
  
  
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

  
  
  
  
### Storable but Non-Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users. </p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/formations/cpi/information](http://intefp.travail-emploi.gouv.fr/formations/cpi/information)
  
  
  * Method: `GET`
  
  
  * Evidence: `381072834`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/ressources/centre-ressources](http://intefp.travail-emploi.gouv.fr/ressources/centre-ressources)
  
  
  * Method: `GET`
  
  
  * Evidence: `1624959882`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plan-du-site](http://intefp.travail-emploi.gouv.fr/plan-du-site)
  
  
  * Method: `GET`
  
  
  * Evidence: `1461542725`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/](http://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `931321655`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale](http://intefp.travail-emploi.gouv.fr/actions-partenariales/session-nationale)
  
  
  * Method: `GET`
  
  
  * Evidence: `1655106580`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/institut/presentation](http://intefp.travail-emploi.gouv.fr/institut/presentation)
  
  
  * Method: `GET`
  
  
  * Evidence: `1952516349`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/plus/actualites/112-inspecteur-du-travail-pourquoi-pas-vous](http://intefp.travail-emploi.gouv.fr/plus/actualites/112-inspecteur-du-travail-pourquoi-pas-vous)
  
  
  * Method: `GET`
  
  
  * Evidence: `1239312742`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/contact](http://intefp.travail-emploi.gouv.fr/contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `141641290`
  
  
  
  
Instances: 8
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>381072834, which evaluates to: 1982-01-28 13:33:54</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr](https://intefp.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `931321655`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/](https://intefp.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `931321655`
  
  
  
  
* URL: [https://intefp.travail-emploi.gouv.fr/erreur](https://intefp.travail-emploi.gouv.fr/erreur)
  
  
  * Method: `GET`
  
  
  * Evidence: `1029723163`
  
  
  
  
Instances: 3
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>931321655, which evaluates to: 1999-07-07 04:27:35</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/index.php?option=com_users&view=remind](http://intefp.travail-emploi.gouv.fr/index.php?option=com_users&view=remind)
  
  
  * Method: `GET`
  
  
  * Parameter: `view`
  
  
  
  
* URL: [http://intefp.travail-emploi.gouv.fr/index.php?option=com_users&view=reset](http://intefp.travail-emploi.gouv.fr/index.php?option=com_users&view=reset)
  
  
  * Method: `GET`
  
  
  * Parameter: `view`
  
  
  
  
Instances: 2
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>http://intefp.travail-emploi.gouv.fr/index.php?option=com_users&view=remind</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [div] tag [class] attribute </p><p></p><p>The user input found was:</p><p>view=remind</p><p></p><p>The user-controlled value was:</p><p>remind</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
