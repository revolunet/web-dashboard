
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:07:38


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 2 |
| Medium | 6 |
| Low | 8 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 159 | 
| CSP: Wildcard Directive | Medium | 4 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - Perl | Medium | 1 | 
| Source Code Disclosure - SQL | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 3 | 
| Vulnerable JS Library | Medium | 3 | 
| Absence of Anti-CSRF Tokens | Low | 10 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 3 | 
| CSP: Notices | Low | 4 | 
| Dangerous JS Functions | Low | 12 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 12 | 
| Strict-Transport-Security Header Not Set | Low | 4 | 
| Base64 Disclosure | Informational | 11 | 
| Content-Type Header Missing | Informational | 4 | 
| Information Disclosure - Suspicious Comments | Informational | 14 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 8 | 
| Storable and Cacheable Content | Informational | 2 | 
| Timestamp Disclosure - Unix | Informational | 6 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 16 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `58005703604348`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `4880919996745`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `36041745845273`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `57288803713877`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `56787788051378`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `4938375865364`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `5071833167774`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `67238298800802`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `50611035081218`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `58348647542475`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `30192018890227`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `4860182639958`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `30054069729482`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `6748086046784`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `36728075544621`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `4036394812341`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `50586338389031`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `38753106967557`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `38860030272069`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `50634404112208`
  
  
  
  
Instances: 155
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 580057</p><p>Brand: MAESTRO</p><p>Category: STANDARD</p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### PII Disclosure
##### High (Medium)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `36223740308677`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `36517675388426`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `67429336948626`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/RechercheOfPlugin/js/recherche/form/mapsvg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `341993403188745`
  
  
  
  
Instances: 4
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: DinersClub</p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, script-src-elem, script-src-attr, style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://alternance.emploi.gouv.fr/](https://alternance.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr](https://alternance.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5055/besoin-d-aide](https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5055/besoin-d-aide)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_9155/avec-l-apprentissage-demarretastory](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_9155/avec-l-apprentissage-demarretastory)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://travail-emploi.gouv.fr/" target="_blank">Ministère du Travail</a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10574/protection-des-donnees-personnelles](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10574/protection-des-donnees-personnelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://travail-emploi.gouv.fr/" target="_blank">Ministère du Travail</a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5310/foire-aux-questions](https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5310/foire-aux-questions)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://travail-emploi.gouv.fr/" target="_blank">Ministère du Travail</a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil](https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://travail-emploi.gouv.fr/" target="_blank">Ministère du Travail</a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://travail-emploi.gouv.fr/" target="_blank">Ministère du Travail</a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/recleader_6113/decouvrir-l-alternance](https://alternance.emploi.gouv.fr/portail_alternance/jcms/recleader_6113/decouvrir-l-alternance)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a title="Fiche Contrat d&#39;apprentissage" href="http://travail-emploi.gouv.fr/formation-professionnelle/formation-en-alternance/article/le-contrat-d-apprentissage" target="_blank">contrat d’apprentissage</a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10741/relance-de-l-apprentissage-les-mesures-gouvernementales](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10741/relance-de-l-apprentissage-les-mesures-gouvernementales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://travail-emploi.gouv.fr/" target="_blank">Ministère du Travail</a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/IMG/pdf/guide-relance-cfa.pdf" target="_blank">Découvrez le guide pratique pour les CFA pour prendre connaissance des mesures du plan de l’apprentissage et des outils mis à disposition</a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://travail-emploi.gouv.fr/" target="_blank">Ministère du Travail</a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://travail-emploi.gouv.fr/" target="_blank">Ministère du Travail</a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10727/certification-relative-aux-competences-de-maitre-d-apprentissage/tuteur-video](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10727/certification-relative-aux-competences-de-maitre-d-apprentissage/tuteur-video)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://travail-emploi.gouv.fr/" target="_blank">Ministère du Travail</a>`
  
  
  
  
Instances: 11
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - Perl
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - Perl</p>
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/upload/docs/application/zip/2020-07/reseaux-sociaux-tournee-apprentissage_2020-07-28_17-45-16_503.zip](https://alternance.emploi.gouv.fr/portail_alternance/upload/docs/application/zip/2020-07/reseaux-sociaux-tournee-apprentissage_2020-07-28_17-45-16_503.zip)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#acEZT`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#acEZT</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - SQL
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - SQL</p>
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/bootstrap-datetimepicker/bootstrap-datetimepicker.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/bootstrap-datetimepicker/bootstrap-datetimepicker.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select only from those days.`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>select only from those days.</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async defer src="https://platform.instagram.com/en_US/embeds.js"></script>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g&callback=initMap"></script>`
  
  
  
  
Instances: 3
  
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
<p>The identified library moment.js, version 2.10.3 is vulnerable.</p>
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/moment/moment.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/moment/moment.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `//! moment.js
//! version : 2.10.3`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-1.11.1.js`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-migrate-1.2.1.js`
  
  
  
  
Instances: 3
  
### Solution
<p>Please upgrade to the latest version of moment.js.</p>
  
### Reference
* https://github.com/moment/moment/issues/2936
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="front/query.jsp" method="get" name="search" class="noSingleSubmitButton">`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="front/query.jsp" method="get" name="search" class="noSingleSubmitButton">`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil](https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="front/query.jsp" method="get" name="search" class="noSingleSubmitButton">`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="front/query.jsp" method="get" name="search" class="noSingleSubmitButton">`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="front/query.jsp" method="get" name="search" class="noSingleSubmitButton">`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formulaireRecherche" action="front/query.jsp" method="get" name="search" class="portal-header-search hidden-print">`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formulaireRecherche" action="front/query.jsp" method="get" name="search" class="portal-header-search hidden-print">`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formulaireRecherche" action="front/query.jsp" method="get" name="search" class="portal-header-search hidden-print">`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil](https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formulaireRecherche" action="front/query.jsp" method="get" name="search" class="portal-header-search hidden-print">`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formulaireRecherche" action="front/query.jsp" method="get" name="search" class="portal-header-search hidden-print">`
  
  
  
  
Instances: 10
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 2: "text" "types" "textSearch" "id" ].</p>
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr](https://alternance.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgefp-pa.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgefp-pa.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/](https://alternance.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgefp-pa.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgefp-pa.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g&callback=initMap`
  
  
  * Evidence: `<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g&callback=initMap"></script>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://platform.instagram.com/en_US/embeds.js`
  
  
  * Evidence: `<script async defer src="https://platform.instagram.com/en_US/embeds.js"></script>`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr](https://alternance.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5055/besoin-d-aide](https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5055/besoin-d-aide)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/](https://alternance.emploi.gouv.fr/)
  
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/PAPlugin/js/jqGrid/js/minified/jquery.jqGrid.min.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/PAPlugin/js/jqGrid/js/minified/jquery.jqGrid.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/prototype.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/prototype.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery.console.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery.console.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/jalios/core/jalios-common.js](https://alternance.emploi.gouv.fr/portail_alternance/js/jalios/core/jalios-common.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/PAPlugin/js/inputmask/min/jquery.inputmask.bundle.min.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/PAPlugin/js/inputmask/min/jquery.inputmask.bundle.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/PAPlugin/js/validate/imc-additional-methods.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/PAPlugin/js/validate/imc-additional-methods.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/PAPlugin/js/json/jquery.xml2json.js](https://alternance.emploi.gouv.fr/portail_alternance/plugins/PAPlugin/js/json/jquery.xml2json.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/json2.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/json2.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jsonrpc.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jsonrpc.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/jalios/core/jalios-widget-chooser.js](https://alternance.emploi.gouv.fr/portail_alternance/js/jalios/core/jalios-widget-chooser.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10741/relance-de-l-apprentissage-les-mesures-gouvernementales](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10741/relance-de-l-apprentissage-les-mesures-gouvernementales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10574/protection-des-donnees-personnelles](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10574/protection-des-donnees-personnelles)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5310/foire-aux-questions](https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5310/foire-aux-questions)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil](https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/smarttag.js](https://alternance.emploi.gouv.fr/portail_alternance/js/smarttag.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/respond/respond.min.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/respond/respond.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10727/certification-relative-aux-competences-de-maitre-d-apprentissage/tuteur-video](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10727/certification-relative-aux-competences-de-maitre-d-apprentissage/tuteur-video)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage)
  
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/plugins/PAPlugin/css/portal/default/default.css](https://alternance.emploi.gouv.fr/portail_alternance/plugins/PAPlugin/css/portal/default/default.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/css/fff-sprite.css](https://alternance.emploi.gouv.fr/portail_alternance/css/fff-sprite.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/css/jalios/core/lang.css](https://alternance.emploi.gouv.fr/portail_alternance/css/jalios/core/lang.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/custom/css/standard.css](https://alternance.emploi.gouv.fr/portail_alternance/custom/css/standard.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/css/print.css](https://alternance.emploi.gouv.fr/portail_alternance/css/print.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/css/jalios/core/font-icons.css](https://alternance.emploi.gouv.fr/portail_alternance/css/jalios/core/font-icons.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/css/fulldisplay.css](https://alternance.emploi.gouv.fr/portail_alternance/css/fulldisplay.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/css/lib/bootstrap-datetimepicker/bootstrap-datetimepicker.css](https://alternance.emploi.gouv.fr/portail_alternance/css/lib/bootstrap-datetimepicker/bootstrap-datetimepicker.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/css/jalios/core/bootstrap.css](https://alternance.emploi.gouv.fr/portail_alternance/css/jalios/core/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/css/wysiwyg.css](https://alternance.emploi.gouv.fr/portail_alternance/css/wysiwyg.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/css/jalios/core/core.css](https://alternance.emploi.gouv.fr/portail_alternance/css/jalios/core/core.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/css/lib/animate/animate-custom.css](https://alternance.emploi.gouv.fr/portail_alternance/css/lib/animate/animate-custom.css)
  
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/'%20+%20OAS_url%20+%20'click_nx.ads/'%20+%20OAS_sitepage%0D%0A%09%09%09%09+%20'/1'%20+%20OAS_rns%20+%20'@'%20+%20OAS_listpos%20+%20'!'%20+%20pos%20+%20'?'%0D%0A%09%09%09%09+%20OAS_query%20+%20'](https://alternance.emploi.gouv.fr/portail_alternance/'%20+%20OAS_url%20+%20'click_nx.ads/'%20+%20OAS_sitepage%0D%0A%09%09%09%09+%20'/1'%20+%20OAS_rns%20+%20'@'%20+%20OAS_listpos%20+%20'!'%20+%20pos%20+%20'?'%0D%0A%09%09%09%09+%20OAS_query%20+%20')
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/'%20+%20OAS_url%20+%20'adstream_nx.ads/'%0D%0A%09%09%09%09+%20OAS_sitepage%20+%20'/1'%20+%20OAS_rns%20+%20'@'%20+%20OAS_listpos%20+%20'!'%20+%20pos%0D%0A%09%09%09%09+%20'?'%20+%20OAS_query%20+%20'](https://alternance.emploi.gouv.fr/portail_alternance/'%20+%20OAS_url%20+%20'adstream_nx.ads/'%0D%0A%09%09%09%09+%20OAS_sitepage%20+%20'/1'%20+%20OAS_rns%20+%20'@'%20+%20OAS_listpos%20+%20'!'%20+%20pos%0D%0A%09%09%09%09+%20'?'%20+%20OAS_query%20+%20')
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/robots.txt](https://alternance.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/sitemap.xml](https://alternance.emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5310/foire-aux-questions](https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5310/foire-aux-questions)
  
  
  * Method: `GET`
  
  
  * Evidence: `AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10574/protection-des-donnees-personnelles](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10574/protection-des-donnees-personnelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Evidence: `AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil](https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10741/relance-de-l-apprentissage-les-mesures-gouvernementales](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10741/relance-de-l-apprentissage-les-mesures-gouvernementales)
  
  
  * Method: `GET`
  
  
  * Evidence: `AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr](https://alternance.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `dvEaHcPvvmschZIqJlLL3fNyljz02daF4AS1BmRh8xelId4wyiNBYZ3pUjdV5ZVHa91JjUz2IKGtrtRF3Xl4I34hgC8=`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution)
  
  
  * Method: `GET`
  
  
  * Evidence: `AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage)
  
  
  * Method: `GET`
  
  
  * Evidence: `AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat)
  
  
  * Method: `GET`
  
  
  * Evidence: `AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10727/certification-relative-aux-competences-de-maitre-d-apprentissage/tuteur-video](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10727/certification-relative-aux-competences-de-maitre-d-apprentissage/tuteur-video)
  
  
  * Method: `GET`
  
  
  * Evidence: `AIzaSyDfgUGEgYHbrCFzrzPkuzfU47-n709iF-g`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/](https://alternance.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `SuOBY5rP7wuDA8oqJlLL3fNyljz02ag7FThbLbamixcFRdzF42L+qq89MCilHkx2eo8U6BZtION4x1bzXG4iArBvqYA=`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>\x0000��K ߁A���۬!s�3�7�㿧�Ob\x0017�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://alternance.emploi.gouv.fr/sitemap.xml](https://alternance.emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/'%20+%20OAS_url%20+%20'click_nx.ads/'%20+%20OAS_sitepage%0D%0A%09%09%09%09+%20'/1'%20+%20OAS_rns%20+%20'@'%20+%20OAS_listpos%20+%20'!'%20+%20pos%20+%20'?'%0D%0A%09%09%09%09+%20OAS_query%20+%20'](https://alternance.emploi.gouv.fr/portail_alternance/'%20+%20OAS_url%20+%20'click_nx.ads/'%20+%20OAS_sitepage%0D%0A%09%09%09%09+%20'/1'%20+%20OAS_rns%20+%20'@'%20+%20OAS_listpos%20+%20'!'%20+%20pos%20+%20'?'%0D%0A%09%09%09%09+%20OAS_query%20+%20')
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/'%20+%20OAS_url%20+%20'adstream_nx.ads/'%0D%0A%09%09%09%09+%20OAS_sitepage%20+%20'/1'%20+%20OAS_rns%20+%20'@'%20+%20OAS_listpos%20+%20'!'%20+%20pos%0D%0A%09%09%09%09+%20'?'%20+%20OAS_query%20+%20'](https://alternance.emploi.gouv.fr/portail_alternance/'%20+%20OAS_url%20+%20'adstream_nx.ads/'%0D%0A%09%09%09%09+%20OAS_sitepage%20+%20'/1'%20+%20OAS_rns%20+%20'@'%20+%20OAS_listpos%20+%20'!'%20+%20pos%0D%0A%09%09%09%09+%20'?'%20+%20OAS_query%20+%20')
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/robots.txt](https://alternance.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-migrate-1.2.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/respond/respond.min.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/respond/respond.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
Instances: 14
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bBUG\b and was detected 9 times, the first in the element starting with: "	// We allow this because of a bug in IE8/9 that throws an error", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery/jquery-1.11.1.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href='#'></a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11341/cfa-tout-savoir-sur-le-dispositif-6-mois-sans-contrat)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top" style="display:block;"></a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10760/la-tournee-de-l-apprentissage)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top" style="display:block;"></a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10741/relance-de-l-apprentissage-les-mesures-gouvernementales](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10741/relance-de-l-apprentissage-les-mesures-gouvernementales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top" style="display:block;"></a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5310/foire-aux-questions](https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5310/foire-aux-questions)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top" style="display:block;"></a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top" style="display:block;"></a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil](https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top" style="display:block;"></a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10574/protection-des-donnees-personnelles](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10574/protection-des-donnees-personnelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top" style="display:block;"></a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top" style="display:block;"></a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery-ui-1-10-4/jquery.ui.core.js](https://alternance.emploi.gouv.fr/portail_alternance/js/lib/jquery-ui-1-10-4/jquery.ui.core.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10727/certification-relative-aux-competences-de-maitre-d-apprentissage/tuteur-video](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_10727/certification-relative-aux-competences-de-maitre-d-apprentissage/tuteur-video)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top" style="display:block;"></a>`
  
  
  
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/comptes/connexion](https://alternance.emploi.gouv.fr/portail_alternance/comptes/connexion)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/accueil](https://alternance.emploi.gouv.fr/portail_alternance/accueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/replicat2_9325/-demarretastory](https://alternance.emploi.gouv.fr/portail_alternance/jcms/replicat2_9325/-demarretastory)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/](https://alternance.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance](https://alternance.emploi.gouv.fr/portail_alternance)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr](https://alternance.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5055/besoin-d-aide](https://alternance.emploi.gouv.fr/portail_alternance/jcms/gc_5055/besoin-d-aide)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/robots.txt](https://alternance.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/sitemap.xml](https://alternance.emploi.gouv.fr/sitemap.xml)
  
  
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
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Evidence: `25344252`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution)
  
  
  * Method: `GET`
  
  
  * Evidence: `1234567890`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil](https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `25344252`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/](https://alternance.emploi.gouv.fr/portail_alternance/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1234567890`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil](https://alternance.emploi.gouv.fr/portail_alternance/jcms/j_6/accueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `1234567890`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution)
  
  
  * Method: `GET`
  
  
  * Evidence: `25344252`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>25344252, which evaluates to: 1970-10-21 08:04:12</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `printView`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `printView`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `printView`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `printView`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
* URL: [https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true](https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true)
  
  
  * Method: `GET`
  
  
  * Parameter: `portal`
  
  
  
  
Instances: 16
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://alternance.emploi.gouv.fr/portail_alternance/jcms/leader_11135/entreprises-cfa-decouvrez-les-mesures-du-plan-de-relance-pour-l-apprentissage-1jeune1solution?portal=gc_5298&printView=true</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [div] tag [id] attribute </p><p></p><p>The user input found was:</p><p>portal=gc_5298</p><p></p><p>The user-controlled value was:</p><p>gc_5298_0_rf_8331_0_rf_8329_0_gc_5194_0</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
