
# ZAP Scanning Report

Generated on Sun, 28 Mar 2021 23:04:39


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 3 |
| Medium | 5 |
| Low | 11 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Hash Disclosure - Mac OSX salted SHA-1 | High | 3 | 
| PII Disclosure | High | 5 | 
| Cross-Domain Misconfiguration | Medium | 8 | 
| CSP: Wildcard Directive | Medium | 5 | 
| Reverse Tabnabbing | Medium | 8 | 
| Sub Resource Integrity Attribute Missing | Medium | 10 | 
| X-Frame-Options Header Not Set | Medium | 11 | 
| Cookie No HttpOnly Flag | Low | 12 | 
| Cookie Without SameSite Attribute | Low | 12 | 
| Cookie Without Secure Flag | Low | 12 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 10 | 
| CSP: Notices | Low | 5 | 
| Dangerous JS Functions | Low | 11 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Information Disclosure - Debug Error Messages | Low | 1 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Loosely Scoped Cookie | Informational | 12 | 
| Modern Web Application | Informational | 12 | 
| Non-Storable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 21 | 

## Alert Detail


  
  
  
  
### Hash Disclosure - Mac OSX salted SHA-1
##### High (Medium)
  
  
  
  
#### Description
<p>A hash was disclosed by the web server. - Mac OSX salted SHA-1</p>
  
  
  
* URL: [https://www.liberation.fr/pf/dist/components/combinations/default.js?d=21](https://www.liberation.fr/pf/dist/components/combinations/default.js?d=21)
  
  
  * Method: `GET`
  
  
  * Evidence: `012323232323232323232123232323232323232323232323`
  
  
  
  
* URL: [https://www.liberation.fr/pf/dist/components/combinations/default.js?d=21](https://www.liberation.fr/pf/dist/components/combinations/default.js?d=21)
  
  
  * Method: `GET`
  
  
  * Evidence: `012323232323232323232123232312121212121212121212`
  
  
  
  
* URL: [https://www.liberation.fr/pf/dist/components/combinations/default.js?d=21](https://www.liberation.fr/pf/dist/components/combinations/default.js?d=21)
  
  
  * Method: `GET`
  
  
  * Evidence: `012121212121212121212121212121212121212121212121`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that hashes that are used to protect credentials or other resources are not leaked by the web server or database. There is typically no requirement for password hashes to be accessible to the web browser.      </p>
  
### Other information
<p>012323232323232323232123232323232323232323232323</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage
* http://openwall.info/wiki/john/sample-hashes

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `5000185221434`
  
  
  
  
* URL: [https://www.liberation.fr/politique/](https://www.liberation.fr/politique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `5000185221434`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `5000185221434`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `5000185221434`
  
  
  
  
Instances: 4
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 500018</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### PII Disclosure
##### High (Medium)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://www.liberation.fr/checknews/](https://www.liberation.fr/checknews/)
  
  
  * Method: `GET`
  
  
  * Evidence: `349839138460739`
  
  
  
  
Instances: 1
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: American Express</p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cross-Domain Misconfiguration
##### Medium (Medium)
  
  
  
  
#### Description
<p>Web browser data loading may be possible, due to a Cross Origin Resource Sharing (CORS) misconfiguration on the web server</p>
  
  
  
* URL: [https://www.liberation.fr/pf/resources/fonts/TiemposText/TiemposText-RegularItalic.woff?d=21](https://www.liberation.fr/pf/resources/fonts/TiemposText/TiemposText-RegularItalic.woff?d=21)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.liberation.fr/pf/resources/fonts/SFProText/sf-pro-text-bold-webfont.woff2?d=21](https://www.liberation.fr/pf/resources/fonts/SFProText/sf-pro-text-bold-webfont.woff2?d=21)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.liberation.fr/pf/resources/fonts/SFProText/sf-pro-text-regular-webfont.woff2?d=21](https://www.liberation.fr/pf/resources/fonts/SFProText/sf-pro-text-regular-webfont.woff2?d=21)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.liberation.fr/pf/resources/fonts/TiemposText/TiemposText-BoldItalic.woff?d=21](https://www.liberation.fr/pf/resources/fonts/TiemposText/TiemposText-BoldItalic.woff?d=21)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.liberation.fr/pf/resources/images/liberation.png?d=21](https://www.liberation.fr/pf/resources/images/liberation.png?d=21)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.liberation.fr/pf/resources/fonts/TiemposText/TiemposText-Bold.woff?d=21](https://www.liberation.fr/pf/resources/fonts/TiemposText/TiemposText-Bold.woff?d=21)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.liberation.fr/pf/resources/images/liberation/favicon.ico?d=21](https://www.liberation.fr/pf/resources/images/liberation/favicon.ico?d=21)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.liberation.fr/pf/resources/fonts/TiemposText/TiemposText-Regular.woff?d=21](https://www.liberation.fr/pf/resources/fonts/TiemposText/TiemposText-Regular.woff?d=21)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
Instances: 8
  
### Solution
<p>Ensure that sensitive data is not available in an unauthenticated manner (using IP address white-listing, for instance).</p><p>Configure the "Access-Control-Allow-Origin" HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner.</p>
  
### Other information
<p>The CORS misconfiguration on the web server permits cross-domain read requests from arbitrary third party domains, using unauthenticated APIs on this domain. Web browser implementations do not permit arbitrary third parties to read the response from authenticated APIs, however. This reduces the risk somewhat. This misconfiguration could be used by an attacker to access data that is available in an unauthenticated manner, but which uses some other form of security, such as IP address white-listing.</p>
  
### Reference
* http://www.hpenterprisesecurity.com/vulncat/en/vulncat/vb/html5_overly_permissive_cors_policy.html

  
#### CWE Id : 264
  
#### WASC Id : 14
  
#### Source ID : 3

  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, script-src-elem, script-src-attr, style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.liberation.fr/recherche](https://www.liberation.fr/recherche)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `block-all-mixed-content`
  
  
  
  
* URL: [https://www.liberation.fr/search](https://www.liberation.fr/search)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
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
  
  
  
* URL: [https://www.liberation.fr/societe/sante/retrouvez-les-dernieres-actualites-sur-lepidemie-de-covid-19-20210327_SEWBSL3REZABTM6CWXZGZBZAFQ/](https://www.liberation.fr/societe/sante/retrouvez-les-dernieres-actualites-sur-lepidemie-de-covid-19-20210327_SEWBSL3REZABTM6CWXZGZBZAFQ/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.bfmtv.com/politique/covid-19-christophe-castaner-evoque-des-nouvelles-rassurantes-de-roselyne-bachelot-hospitalisee_AV-202103280130.html" target=_blank>Selon BFMTV</a>`
  
  
  
  
* URL: [https://www.liberation.fr/politique/reunions-non-mixtes-olivier-faure-ps-denonce-la-derive-incroyable-de-lunef-20210324_WG4G4FJTBBDTVKKRAH6JDLJHYA/](https://www.liberation.fr/politique/reunions-non-mixtes-olivier-faure-ps-denonce-la-derive-incroyable-de-lunef-20210324_WG4G4FJTBBDTVKKRAH6JDLJHYA/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://newsletter.liberation.fr/m/surl/200138/508163/2FyxcplHA5-iqpD1-8mM7HFKF-B12viezBEiZxMr5xU=/link_4/C5R7OO9g6DfCArZ7O2RkgkAa5KnbTk6zRwvHwZ4A6ZTWfiyZeDlc0ti7L7msXIoAVUcNBZcL-gG98Z4kYql671qVNLpcDghKkqiQCdNUXzENQjs+w11h6uZtasHvVLgMYfEE8soJ14byc0jCR1wguantwTKt7agUbCYQlksvDIwh-5LFVvAPBw-uNc8q0th3JwnCBin5lb3YyLw-BcFEGOD1ShX5QfQU2-v5sB3OPnpYbiA4jZiOTdrdszq4FZg+fTzovr8f-vqw2Jr9q4jOqkFq-iBgutrTy3UKqpqOr85GHTUs+R+wUCCleyTmMGYPan5yeSKuFL8nMSTQ8xaDyX1DYtWVRhnKy9MnHakY63qho9WdmKxPFPoNofwGgESL" target=_blank>Olivier Faure était, lui, prié de se prononcer</a>`
  
  
  
  
* URL: [https://www.liberation.fr/politique/elections/legislatives-partielles-a-paris-et-dans-le-pas-de-calais-vers-un-report-20210324_QRSMKANW4VASHOR47QQMRY2GEM/](https://www.liberation.fr/politique/elections/legislatives-partielles-a-paris-et-dans-le-pas-de-calais-vers-un-report-20210324_QRSMKANW4VASHOR47QQMRY2GEM/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.lefigaro.fr/vox/politique/la-democratie-l-exige-votons-en-juin-pour-les-elections-departementales-et-regionales-20210321" target=_blank>dans <i>Le Figaro</i></a>`
  
  
  
  
* URL: [https://www.liberation.fr/politique/accuse-de-harcelement-le-depute-ex-lrem-benoit-simian-prend-a-temoin-ses-collegues-20210324_SGWCVR36NJE35JS67BLCBTTLVI/](https://www.liberation.fr/politique/accuse-de-harcelement-le-depute-ex-lrem-benoit-simian-prend-a-temoin-ses-collegues-20210324_SGWCVR36NJE35JS67BLCBTTLVI/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mediapart.fr/journal/france/050321/la-justice-enfonce-le-depute-simian-protege-par-l-assemblee" target=_blank><u>la décision début mars de la cour d’appel de Bordeaux de renforcer la protection de l’épouse de Simian</u></a>`
  
  
  
  
* URL: [https://www.liberation.fr/politique/valls-navait-pas-pris-conscience-quil-passerait-pour-un-traitre-en-votant-macron-20210322_R4ICZIBH7VGF7CAHTLJILSTCOY/](https://www.liberation.fr/politique/valls-navait-pas-pris-conscience-quil-passerait-pour-un-traitre-en-votant-macron-20210322_R4ICZIBH7VGF7CAHTLJILSTCOY/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/franceinter/status/1373898870946734082" target=_blank><u>France Inter</u></a>`
  
  
  
  
* URL: [https://www.liberation.fr/politique/sous-le-vernis-marine-le-pen-na-rien-de-gaulliste-20210323_AMRCHJFY4NCBXBYUJ6TME4XRLY/](https://www.liberation.fr/politique/sous-le-vernis-marine-le-pen-na-rien-de-gaulliste-20210323_AMRCHJFY4NCBXBYUJ6TME4XRLY/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://oeilsurlefront.liberation.fr/en-bref/2020/11/23/chez-dupont-aignan-tanguy-quitte-le-foyer-pour-rejoindre-le-pen_1806444" target=_blank>ancien bras droit de Nicolas Dupont-Aignan</a>`
  
  
  
  
* URL: [https://www.liberation.fr/politique/validite-des-modeles-epidemiologiques-les-scientifiques-renvoient-macron-dans-les-cordes-20210326_GLFB33WHAFEAXLZDT53CTPZDOU/](https://www.liberation.fr/politique/validite-des-modeles-epidemiologiques-les-scientifiques-renvoient-macron-dans-les-cordes-20210326_GLFB33WHAFEAXLZDT53CTPZDOU/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/Cdanslair/status/1375143982452379653" target=_blank> invité par <i>C dans l’air</i></a>`
  
  
  
  
* URL: [https://www.liberation.fr/politique/ee-lv-vs-schiappa-et-darmanin-les-excuses-ou-la-plainte-20210325_FHUXZ3AOTFFGLN2IKKQTAZBSA4/](https://www.liberation.fr/politique/ee-lv-vs-schiappa-et-darmanin-les-excuses-ou-la-plainte-20210325_FHUXZ3AOTFFGLN2IKKQTAZBSA4/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://9r5g.mjt.lu/lnk/AGYAAHDPExgAAAAAAAAAAAHs75EAAAAdF00AAAAAAAxL9QBgXGMIUfbAiTbARcCJhYhI23uuRAAMPbs/3/zTggyIJPpBBxKs51gJPu8w/aHR0cHM6Ly93d3cuZnJhbmNldHZpbmZvLmZyL3BvbGl0aXF1ZS9nZXJhbGQtZGFybWFuaW4vc3RyYXNib3VyZy1jaW5xLXF1ZXN0aW9ucy1zdXItbGEtc3VidmVudGlvbi1hY2NvcmRlZS1wYXItbGEtbWFpcmllLWEtdW4tcHJvamV0LWRlLW1vc3F1ZWUtcXVpLWEtZXRlLWRlbm9uY2VlLXBhci1nZXJhbGQtZGFybWFuaW5fNDM0NTI4MS5odG1s" target=_blank> le financement d’<i>«une mosquée soutenue par une fédération qui défend l’islam politique»</i></a>`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script data-integration="queryly" src="https://www.queryly.com/js/queryly.v4.min.js"></script>`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://cdn.hubvisor.io/wrapper/01BYK28ENND8X5G8K0AJ2DPK4E/hubvisor.js"></script>`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CElement.prototype.prepend%2CElement.prototype.remove%2CArray.prototype.find%2CArray.prototype.includes"></script>`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script data-integration="queryly" src="https://www.queryly.com/js/queryly.v4.min.js"></script>`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://ced-ns.sascdn.com/diff/js/smart.js" async=""></script>`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://cdn.hubvisor.io/wrapper/01BYK28ENND8X5G8K0AJ2DPK4E/hubvisor.js"></script>`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CElement.prototype.prepend%2CElement.prototype.remove%2CArray.prototype.find%2CArray.prototype.includes"></script>`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CElement.prototype.prepend%2CElement.prototype.remove%2CArray.prototype.find%2CArray.prototype.includes"></script>`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://ced-ns.sascdn.com/diff/js/smart.js" async=""></script>`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script data-integration="queryly" src="https://www.queryly.com/js/queryly.v4.min.js"></script>`
  
  
  
  
Instances: 10
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://www.liberation.fr/economie/](https://www.liberation.fr/economie/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.liberation.fr/politique/](https://www.liberation.fr/politique/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.liberation.fr/checknews/](https://www.liberation.fr/checknews/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.liberation.fr/international/](https://www.liberation.fr/international/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.liberation.fr/idees-et-debats/](https://www.liberation.fr/idees-et-debats/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.liberation.fr/culture/](https://www.liberation.fr/culture/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.liberation.fr/societe/](https://www.liberation.fr/societe/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.liberation.fr/environnement/](https://www.liberation.fr/environnement/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 11
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://www.liberation.fr/search/](https://www.liberation.fr/search/)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/rss/](https://www.liberation.fr/rss/)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `akaas_AS_liberation_liberation_prod`
  
  
  * Evidence: `Set-Cookie: akaas_AS_liberation_liberation_prod`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `akaas_AS_liberation_liberation_prod`
  
  
  * Evidence: `Set-Cookie: akaas_AS_liberation_liberation_prod`
  
  
  
  
* URL: [https://www.liberation.fr/search/](https://www.liberation.fr/search/)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/rss/](https://www.liberation.fr/rss/)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/pf/dist/template/t7QpWLJiex1RsVps/default.js?d=21](https://www.liberation.fr/pf/dist/template/t7QpWLJiex1RsVps/default.js?d=21)
  
  
  * Method: `GET`
  
  
  * Parameter: `akaas_AS_liberation_liberation_prod`
  
  
  * Evidence: `Set-Cookie: akaas_AS_liberation_liberation_prod`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/robots.txt](https://www.liberation.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `akaas_AS_liberation_liberation_prod`
  
  
  * Evidence: `Set-Cookie: akaas_AS_liberation_liberation_prod`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/rss/](https://www.liberation.fr/rss/)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `akaas_AS_liberation_liberation_prod`
  
  
  * Evidence: `Set-Cookie: akaas_AS_liberation_liberation_prod`
  
  
  
  
* URL: [https://www.liberation.fr/search/](https://www.liberation.fr/search/)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/rss/](https://www.liberation.fr/rss/)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/search/](https://www.liberation.fr/search/)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `akaas_AS_liberation_liberation_prod`
  
  
  * Evidence: `Set-Cookie: akaas_AS_liberation_liberation_prod`
  
  
  
  
* URL: [https://www.liberation.fr/pf/dist/template/t7QpWLJiex1RsVps/default.js?d=21](https://www.liberation.fr/pf/dist/template/t7QpWLJiex1RsVps/default.js?d=21)
  
  
  * Method: `GET`
  
  
  * Parameter: `akaas_AS_liberation_liberation_prod`
  
  
  * Evidence: `Set-Cookie: akaas_AS_liberation_liberation_prod`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/robots.txt](https://www.liberation.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `akaas_AS_liberation_liberation_prod`
  
  
  * Evidence: `Set-Cookie: akaas_AS_liberation_liberation_prod`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/afrique/france-rwanda-ce-r-qui-poursuit-hubert-vedrine-20210301_JHSDAMPJPVHZVLDCE23PCC4DP4/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/afrique/france-rwanda-ce-r-qui-poursuit-hubert-vedrine-20210301_JHSDAMPJPVHZVLDCE23PCC4DP4/%5C%22)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/search/](https://www.liberation.fr/search/)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/rwanda-des-responsabilites-lourdes-et-accablantes-de-la-france-dans-le-genocide-des-tutsis-20210326_M434ITJXA5HBHHK5MKAOAURINQ/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/rwanda-des-responsabilites-lourdes-et-accablantes-de-la-france-dans-le-genocide-des-tutsis-20210326_M434ITJXA5HBHHK5MKAOAURINQ/%5C%22)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/rss/](https://www.liberation.fr/rss/)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/rwanda-des-responsabilites-lourdes-et-accablantes-de-la-france-dans-le-genocide-des-tutsis-20210326_M434ITJXA5HBHHK5MKAOAURINQ/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/rwanda-des-responsabilites-lourdes-et-accablantes-de-la-france-dans-le-genocide-des-tutsis-20210326_M434ITJXA5HBHHK5MKAOAURINQ/%5C%22)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/afrique/france-rwanda-ce-r-qui-poursuit-hubert-vedrine-20210301_JHSDAMPJPVHZVLDCE23PCC4DP4/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/afrique/france-rwanda-ce-r-qui-poursuit-hubert-vedrine-20210301_JHSDAMPJPVHZVLDCE23PCC4DP4/%5C%22)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/rss/](https://www.liberation.fr/rss/)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `djazsession_xip`
  
  
  * Evidence: `Set-Cookie: djazsession_xip`
  
  
  
  
* URL: [https://www.liberation.fr/search/](https://www.liberation.fr/search/)
  
  
  * Method: `GET`
  
  
  * Parameter: `HAPROXYID`
  
  
  * Evidence: `Set-Cookie: HAPROXYID`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.queryly.com/js/queryly.v4.min.js`
  
  
  * Evidence: `<script data-integration="queryly" src="https://www.queryly.com/js/queryly.v4.min.js"></script>`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CElement.prototype.prepend%2CElement.prototype.remove%2CArray.prototype.find%2CArray.prototype.includes`
  
  
  * Evidence: `<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CElement.prototype.prepend%2CElement.prototype.remove%2CArray.prototype.find%2CArray.prototype.includes"></script>`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://ced-ns.sascdn.com/diff/js/smart.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://ced-ns.sascdn.com/diff/js/smart.js" async=""></script>`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CElement.prototype.prepend%2CElement.prototype.remove%2CArray.prototype.find%2CArray.prototype.includes`
  
  
  * Evidence: `<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CElement.prototype.prepend%2CElement.prototype.remove%2CArray.prototype.find%2CArray.prototype.includes"></script>`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdn.hubvisor.io/wrapper/01BYK28ENND8X5G8K0AJ2DPK4E/hubvisor.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://cdn.hubvisor.io/wrapper/01BYK28ENND8X5G8K0AJ2DPK4E/hubvisor.js"></script>`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdn.hubvisor.io/wrapper/01BYK28ENND8X5G8K0AJ2DPK4E/hubvisor.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://cdn.hubvisor.io/wrapper/01BYK28ENND8X5G8K0AJ2DPK4E/hubvisor.js"></script>`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.queryly.com/js/queryly.v4.min.js`
  
  
  * Evidence: `<script data-integration="queryly" src="https://www.queryly.com/js/queryly.v4.min.js"></script>`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.queryly.com/js/queryly.v4.min.js`
  
  
  * Evidence: `<script data-integration="queryly" src="https://www.queryly.com/js/queryly.v4.min.js"></script>`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://ced-ns.sascdn.com/diff/js/smart.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://ced-ns.sascdn.com/diff/js/smart.js" async=""></script>`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CElement.prototype.prepend%2CElement.prototype.remove%2CArray.prototype.find%2CArray.prototype.includes`
  
  
  * Evidence: `<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CElement.prototype.prepend%2CElement.prototype.remove%2CArray.prototype.find%2CArray.prototype.includes"></script>`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.liberation.fr/search](https://www.liberation.fr/search)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.liberation.fr/recherche](https://www.liberation.fr/recherche)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `block-all-mixed-content`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
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
  
  
  
* URL: [https://www.liberation.fr/environnement/](https://www.liberation.fr/environnement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.liberation.fr/international/](https://www.liberation.fr/international/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.liberation.fr/economie/](https://www.liberation.fr/economie/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.liberation.fr/sports/](https://www.liberation.fr/sports/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.liberation.fr/societe/](https://www.liberation.fr/societe/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.liberation.fr/culture/](https://www.liberation.fr/culture/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.liberation.fr/idees-et-debats/](https://www.liberation.fr/idees-et-debats/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.liberation.fr/lifestyle/](https://www.liberation.fr/lifestyle/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.liberation.fr/portraits/](https://www.liberation.fr/portraits/)
  
  
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
  
  
  
* URL: [https://www.liberation.fr/checknews/](https://www.liberation.fr/checknews/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/politique/](https://www.liberation.fr/politique/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/culture/](https://www.liberation.fr/culture/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/international/](https://www.liberation.fr/international/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/idees-et-debats/](https://www.liberation.fr/idees-et-debats/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/environnement/](https://www.liberation.fr/environnement/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/societe/](https://www.liberation.fr/societe/)
  
  
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
  
  
  
* URL: [https://www.liberation.fr/idees-et-debats/](https://www.liberation.fr/idees-et-debats/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `private, max-age=60`
  
  
  
  
* URL: [https://www.liberation.fr/culture/](https://www.liberation.fr/culture/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `private, max-age=60`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `private, max-age=60`
  
  
  
  
* URL: [https://www.liberation.fr/robots.txt](https://www.liberation.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `private, max-age=60`
  
  
  
  
* URL: [https://www.liberation.fr/international/](https://www.liberation.fr/international/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `private, max-age=60`
  
  
  
  
* URL: [https://www.liberation.fr/environnement/](https://www.liberation.fr/environnement/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `private, max-age=60`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `private, max-age=60`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `private, max-age=60`
  
  
  
  
* URL: [https://www.liberation.fr/politique/](https://www.liberation.fr/politique/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `private, max-age=60`
  
  
  
  
* URL: [https://www.liberation.fr/checknews/](https://www.liberation.fr/checknews/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `private, max-age=60`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Pragma`
  
  
  * Evidence: `public`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Debug Error Messages
##### Low (Medium)
  
  
  
  
#### Description
<p>The response appeared to contain common error messages returned by platforms such as ASP.NET, and Web-servers such as IIS and Apache. You can configure the list of common debug messages.</p>
  
  
  
* URL: [https://www.liberation.fr/culture/jeux-video/](https://www.liberation.fr/culture/jeux-video/)
  
  
  * Method: `GET`
  
  
  * Evidence: `under construction`
  
  
  
  
Instances: 1
  
### Solution
<p>Disable debugging messages before pushing to production.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://www.liberation.fr/politique/](https://www.liberation.fr/politique/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/robots.txt](https://www.liberation.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/checknews/](https://www.liberation.fr/checknews/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/environnement/](https://www.liberation.fr/environnement/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/idees-et-debats/](https://www.liberation.fr/idees-et-debats/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/culture/](https://www.liberation.fr/culture/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/international/](https://www.liberation.fr/international/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
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

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://www.liberation.fr/culture/](https://www.liberation.fr/culture/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.liberation.fr/societe/](https://www.liberation.fr/societe/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.liberation.fr/idees-et-debats/](https://www.liberation.fr/idees-et-debats/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.liberation.fr/politique/](https://www.liberation.fr/politique/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.liberation.fr/checknews/](https://www.liberation.fr/checknews/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.liberation.fr/international/](https://www.liberation.fr/international/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.liberation.fr/environnement/](https://www.liberation.fr/environnement/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.liberation.fr/robots.txt](https://www.liberation.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://www.liberation.fr/international/](https://www.liberation.fr/international/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1d1d67-l0dPTsvHYNU8iWSj6DzBuSU2AnQ`
  
  
  
  
* URL: [https://www.liberation.fr/robots.txt](https://www.liberation.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `1ac-B/fu7krl5/JrdgXH9Ko6fcSzej4`
  
  
  
  
* URL: [https://www.liberation.fr/checknews/](https://www.liberation.fr/checknews/)
  
  
  * Method: `GET`
  
  
  * Evidence: `16e05b-8tygyBXqyJmivIm6sDm9BCiUW7k`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `F49Mb6L-Rs_uQg4KRSIoZq4tN4d6vltGt_QqCVFfjYw`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `3bb1a3-zlZDQBXXhVD1q173hS+DxdENlqk`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Image__StyledPicture-sc-8yioqf-0`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `3bb1a3-zlZDQBXXhVD1q173hS+DxdENlqk`
  
  
  
  
* URL: [https://www.liberation.fr/environnement/](https://www.liberation.fr/environnement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1f07d1-DGEZi71/qjiQ9umpKnaNc30kSXU`
  
  
  
  
* URL: [https://www.liberation.fr/idees-et-debats/](https://www.liberation.fr/idees-et-debats/)
  
  
  * Method: `GET`
  
  
  * Evidence: `188b52-7lF1NbBTeBFeVoQUo4rAL2ZaSV0`
  
  
  
  
* URL: [https://www.liberation.fr/politique/](https://www.liberation.fr/politique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1a76dc-tVP7d5Xni1lzqfivfjbYdqtVFVk`
  
  
  
  
* URL: [https://www.liberation.fr/culture/](https://www.liberation.fr/culture/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1b5f47-poFar+LunEnWI6kPPFs+UB3vRg8`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>��]뿥��Ӳ��5O"Y(�\x000f0nIM��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `USER`
  
  
  
  
Instances: 2
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bBUG\b and was detected in the element starting with: "<!--</p><p>				  - Les classes 'wide-column' et 'aside-column' défini les colonnes, sans style</p><p>				  - Ajouter la class 'clearfix' sur", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.liberation.fr/checknews/](https://www.liberation.fr/checknews/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.liberation.fr/idees-et-debats/](https://www.liberation.fr/idees-et-debats/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.liberation.fr/politique/](https://www.liberation.fr/politique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://www.liberation.fr/international/](https://www.liberation.fr/international/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.liberation.fr/culture/](https://www.liberation.fr/culture/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 9
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected in the element starting with: "<script type="application/javascript">window.Fusion=window.Fusion||{};Fusion.arcSite="liberation";Fusion.contextPath="/pf";Fusio", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Loosely Scoped Cookie
##### Informational (Low)
  
  
  
  
#### Description
<p>Cookies can be scoped by domain or path. This check is only concerned with domain scope.The domain scope applied to a cookie determines which domains can access it. For example, a cookie can be scoped strictly to a subdomain e.g. www.nottrusted.com, or loosely scoped to a parent domain e.g. nottrusted.com. In the latter case, any subdomain of nottrusted.com can access the cookie. Loosely scoped cookies are common in mega-applications like google.com and live.com. Cookies set from a subdomain like app.foo.bar are transmitted only to that domain by the browser. However, cookies scoped to a parent-level domain may be transmitted to the parent, or any subdomain of the parent.</p>
  
  
  
* URL: [https://www.liberation.fr/search/](https://www.liberation.fr/search/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/afrique/france-rwanda-ce-r-qui-poursuit-hubert-vedrine-20210301_JHSDAMPJPVHZVLDCE23PCC4DP4/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/afrique/france-rwanda-ce-r-qui-poursuit-hubert-vedrine-20210301_JHSDAMPJPVHZVLDCE23PCC4DP4/%5C%22)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/societe/mosquee-eyyub-sultan-a-strasbourg-le-concordat-de-la-discorde-20210325_CN7JG2PFSBDK5NZ24NNFFU4MIQ/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/societe/mosquee-eyyub-sultan-a-strasbourg-le-concordat-de-la-discorde-20210325_CN7JG2PFSBDK5NZ24NNFFU4MIQ/%5C%22)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/politique/julien-bayou-je-ne-peux-pas-tolerer-quon-pousse-les-ecolos-en-dehors-du-cadre-republicain-20210327_UERVCODI2FCPBGQBAY3PWJM6GA/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/politique/julien-bayou-je-ne-peux-pas-tolerer-quon-pousse-les-ecolos-en-dehors-du-cadre-republicain-20210327_UERVCODI2FCPBGQBAY3PWJM6GA/%5C%22)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/societe/education/protocoles-renforces-a-lecole-ce-qui-existe-deja-a-du-mal-a-etre-applique-20210326_UGJZIXLDBZCBJG3XFMGBFTVA5M/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/societe/education/protocoles-renforces-a-lecole-ce-qui-existe-deja-a-du-mal-a-etre-applique-20210326_UGJZIXLDBZCBJG3XFMGBFTVA5M/%5C%22)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/politique/la-polemique-artificielle-du-gouvernement-autour-des-cantines-scolaires-a-lyon-20210221_NO4ZMCCB7NEEDGH4R5SZBB3HGQ/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/politique/la-polemique-artificielle-du-gouvernement-autour-des-cantines-scolaires-a-lyon-20210221_NO4ZMCCB7NEEDGH4R5SZBB3HGQ/%5C%22)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/sports/2020/08/28/le-tour-attendu-au-tournant-par-les-villes-ecolos_1798063/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/sports/2020/08/28/le-tour-attendu-au-tournant-par-les-villes-ecolos_1798063/%5C%22)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/rss/](https://www.liberation.fr/rss/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/rwanda-des-responsabilites-lourdes-et-accablantes-de-la-france-dans-le-genocide-des-tutsis-20210326_M434ITJXA5HBHHK5MKAOAURINQ/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/international/rwanda-des-responsabilites-lourdes-et-accablantes-de-la-france-dans-le-genocide-des-tutsis-20210326_M434ITJXA5HBHHK5MKAOAURINQ/%5C%22)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/france/2020/09/11/ecolos-peine-a-jouir-et-si-on-changeait-de-refrain_1799187/%5C%22](https://www.liberation.fr/politique/%5C%22https:/www.liberation.fr/france/2020/09/11/ecolos-peine-a-jouir-et-si-on-changeait-de-refrain_1799187/%5C%22)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Always scope cookies to a FQDN (Fully Qualified Domain Name).</p>
  
### Other information
<p>The origin domain used for comparison was: </p><p>www.liberation.fr</p><p>djazsession_xip=CDN-453047</p><p></p>
  
### Reference
* https://tools.ietf.org/html/rfc6265#section-4.1
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html
* http://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_cookies

  
#### CWE Id : 565
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://www.liberation.fr/economie/](https://www.liberation.fr/economie/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" title="Les leçons de l’affaire Faber : chez Danone comme ailleurs, la finance à courte vue"><picture class="Image__StyledPicture-sc-8yioqf-0 dRTDJJ"><div style="height:338px;width:600px;max-width:50px"></div></picture></a>`
  
  
  
  
* URL: [https://www.liberation.fr/checknews/](https://www.liberation.fr/checknews/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" title="Est-il vrai, comme l’affirme Macron, que les modèles ont annoncé, à tort, une explosion des cas dès février?"><picture class="Image__StyledPicture-sc-8yioqf-0 dRTDJJ"><div style="height:338px;width:600px;max-width:50px"></div></picture></a>`
  
  
  
  
* URL: [https://www.liberation.fr/idees-et-debats/](https://www.liberation.fr/idees-et-debats/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" title="A la tête des théâtres, des hommes succèdent aux hommes"><picture class="Image__StyledPicture-sc-8yioqf-0 dRTDJJ"><div style="height:338px;width:600px;max-width:50px"></div></picture></a>`
  
  
  
  
* URL: [https://www.liberation.fr/international/](https://www.liberation.fr/international/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" title="Covid-19 : près de 4 900 patients en réa, le pic de la deuxième vague quasiment atteint"><picture class="Image__StyledPicture-sc-8yioqf-0 dRTDJJ"><div style="height:338px;width:600px;max-width:50px"></div></picture></a>`
  
  
  
  
* URL: [https://www.liberation.fr/politique/](https://www.liberation.fr/politique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" title="Marche pour le climat : «La pandémie ne peut pas mettre nos ambitions au second rang»"><picture class="Image__StyledPicture-sc-8yioqf-0 dRTDJJ"><div style="height:338px;width:600px;max-width:50px"></div></picture></a>`
  
  
  
  
* URL: [https://www.liberation.fr/societe/](https://www.liberation.fr/societe/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" title="Le cas par cas dans les écoles : les limites d’une non-stratégie"><picture class="Image__StyledPicture-sc-8yioqf-0 dRTDJJ"><div style="height:338px;width:600px;max-width:50px"></div></picture></a>`
  
  
  
  
* URL: [https://www.liberation.fr/sports/](https://www.liberation.fr/sports/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" title="Les Bleus terminent le Tournoi en mocheté"><picture class="Image__StyledPicture-sc-8yioqf-0 dRTDJJ"><div style="height:338px;width:600px;max-width:50px"></div></picture></a>`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/homepage" class="xl-promo-headline" title="Désolé! On cherche encore une blague" target="_self" rel=""><h2 class="default__HeadlineText-sc-1vz5n7h-0 eosxqj xl-promo-headline">Désolé! On cherche encore une blague</h2></a>`
  
  
  
  
* URL: [https://www.liberation.fr/environnement/](https://www.liberation.fr/environnement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" title="Pour les producteurs de fleurs coupées d’Ile-de-France, la solidarité fait le printemps"><picture class="Image__StyledPicture-sc-8yioqf-0 dRTDJJ"><div style="height:338px;width:600px;max-width:50px"></div></picture></a>`
  
  
  
  
* URL: [https://www.liberation.fr/lifestyle/](https://www.liberation.fr/lifestyle/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" title="Raids numériques : «C’est le tribunal de la plèbe»"><picture class="Image__StyledPicture-sc-8yioqf-0 dRTDJJ"><div style="height:338px;width:600px;max-width:50px"></div></picture></a>`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" class="alert-nav-label js-alert-link"><span class="js-alert-title"></span></a>`
  
  
  
  
* URL: [https://www.liberation.fr/culture/](https://www.liberation.fr/culture/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" title="A Saint-Denis, l’expulsion du Landy sauvage est «une entrave» à l’action associative"><picture class="Image__StyledPicture-sc-8yioqf-0 dRTDJJ"><div style="height:338px;width:600px;max-width:50px"></div></picture></a>`
  
  
  
  
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
  
  
  
* URL: [https://www.liberation.fr/politique/](https://www.liberation.fr/politique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.liberation.fr/checknews/](https://www.liberation.fr/checknews/)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.liberation.fr/recherche](https://www.liberation.fr/recherche)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.liberation.fr/sitemap.xml](https://www.liberation.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.liberation.fr/robots.txt](https://www.liberation.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.liberation.fr/evenements/](https://www.liberation.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.liberation.fr](https://www.liberation.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.liberation.fr/search](https://www.liberation.fr/search)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.liberation.fr/idees-et-debats/](https://www.liberation.fr/idees-et-debats/)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.liberation.fr/international/](https://www.liberation.fr/international/)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
Instances: 11
  
### Solution
<p>The content may be marked as storable by ensuring that the following conditions are satisfied:</p><p>The request method must be understood by the cache and defined as being cacheable ("GET", "HEAD", and "POST" are currently defined as cacheable)</p><p>The response status code must be understood by the cache (one of the 1XX, 2XX, 3XX, 4XX, or 5XX response classes are generally understood)</p><p>The "no-store" cache directive must not appear in the request or response header fields</p><p>For caching by "shared" caches such as "proxy" caches, the "private" response directive must not appear in the response</p><p>For caching by "shared" caches such as "proxy" caches, the "Authorization" header field must not appear in the request, unless the response explicitly allows it (using one of the "must-revalidate", "public", or "s-maxage" Cache-Control response directives)</p><p>In addition to the conditions above, at least one of the following conditions must also be satisfied by the response:</p><p>It must contain an "Expires" header field</p><p>It must contain a "max-age" response directive</p><p>For "shared" caches such as "proxy" caches, it must contain a "s-maxage" response directive</p><p>It must contain a "Cache Control Extension" that allows it to be cached</p><p>It must have a status code that is defined as cacheable by default (200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501).   </p>
  
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
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `624997724`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `535936850`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616972107`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `236371570`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `104021372`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `264018846`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20200826`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20210321`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20210325`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `724006480`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `107993867`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `601960351`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20210314`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `775638685`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `504771330`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `759765625`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `72432189`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1309311416`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1599757203`
  
  
  
  
* URL: [https://www.liberation.fr/](https://www.liberation.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `60076747`
  
  
  
  
Instances: 21
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>624997724, which evaluates to: 1989-10-21 18:28:44</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
