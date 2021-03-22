
# ZAP Scanning Report

Generated on Mon, 22 Mar 2021 08:11:57


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 5 |
| Informational | 6 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Sub Resource Integrity Attribute Missing | Medium | 11 | 
| X-Frame-Options Header Not Set | Medium | 11 | 
| Dangerous JS Functions | Low | 4 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Storable and Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 6 | 
| WSDL File Detection | Informational | 1 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://pjm.social.gouv.fr/professionnel](https://pjm.social.gouv.fr/professionnel)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/politique-de-confidentialite](https://pjm.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels](https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel](https://pjm.social.gouv.fr/devenir-professionnel)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences](https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-autorisation-des-services-mandataires](https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-autorisation-des-services-mandataires)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/mentions-legales](https://pjm.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets](https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
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
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&amp;family=Open+Sans:ital,wght@0,600;0,700;1,400&amp;family=Quicksand:wght@400;700&amp;display=swap" rel="stylesheet"/>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences](https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&amp;family=Open+Sans:ital,wght@0,600;0,700;1,400&amp;family=Quicksand:wght@400;700&amp;display=swap" rel="stylesheet"/>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/professionnel](https://pjm.social.gouv.fr/professionnel)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&amp;family=Open+Sans:ital,wght@0,600;0,700;1,400&amp;family=Quicksand:wght@400;700&amp;display=swap" rel="stylesheet"/>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/mentions-legales](https://pjm.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&amp;family=Open+Sans:ital,wght@0,600;0,700;1,400&amp;family=Quicksand:wght@400;700&amp;display=swap" rel="stylesheet"/>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels](https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&amp;family=Open+Sans:ital,wght@0,600;0,700;1,400&amp;family=Quicksand:wght@400;700&amp;display=swap" rel="stylesheet"/>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/politique-de-confidentialite](https://pjm.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&amp;family=Open+Sans:ital,wght@0,600;0,700;1,400&amp;family=Quicksand:wght@400;700&amp;display=swap" rel="stylesheet"/>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&amp;family=Open+Sans:ital,wght@0,600;0,700;1,400&amp;family=Quicksand:wght@400;700&amp;display=swap" rel="stylesheet"/>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-autorisation-des-services-mandataires](https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-autorisation-des-services-mandataires)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&amp;family=Open+Sans:ital,wght@0,600;0,700;1,400&amp;family=Quicksand:wght@400;700&amp;display=swap" rel="stylesheet"/>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel](https://pjm.social.gouv.fr/devenir-professionnel)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&amp;family=Open+Sans:ital,wght@0,600;0,700;1,400&amp;family=Quicksand:wght@400;700&amp;display=swap" rel="stylesheet"/>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets](https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&amp;family=Open+Sans:ital,wght@0,600;0,700;1,400&amp;family=Quicksand:wght@400;700&amp;display=swap" rel="stylesheet"/>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&amp;family=Open+Sans:ital,wght@0,600;0,700;1,400&amp;family=Quicksand:wght@400;700&amp;display=swap" rel="stylesheet"/>`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences](https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/politique-de-confidentialite](https://pjm.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels](https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/professionnel](https://pjm.social.gouv.fr/professionnel)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-autorisation-des-services-mandataires](https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-autorisation-des-services-mandataires)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel](https://pjm.social.gouv.fr/devenir-professionnel)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets](https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/mentions-legales](https://pjm.social.gouv.fr/mentions-legales)
  
  
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

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/42975ff78b817bf632e4ba483f29e0b9b1370696.263c5807c7555d57b80e.js](https://pjm.social.gouv.fr/_next/static/chunks/42975ff78b817bf632e4ba483f29e0b9b1370696.263c5807c7555d57b80e.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/tarteaucitron/tarteaucitron.js](https://pjm.social.gouv.fr/tarteaucitron/tarteaucitron.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/framework.887e11dd23e2bc60fed7.js](https://pjm.social.gouv.fr/_next/static/chunks/framework.887e11dd23e2bc60fed7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/feb597ccb37462309f421c2919bedcd355cb50c7.9a346b3fd32b5e546af5.js](https://pjm.social.gouv.fr/_next/static/chunks/feb597ccb37462309f421c2919bedcd355cb50c7.9a346b3fd32b5e546af5.js)
  
  
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
  
  
  
* URL: [https://pjm.social.gouv.fr/mentions-legales](https://pjm.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/politique-de-confidentialite](https://pjm.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/professionnel](https://pjm.social.gouv.fr/professionnel)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel](https://pjm.social.gouv.fr/devenir-professionnel)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/commons.00c0e5f099b619b77613.js](https://pjm.social.gouv.fr/_next/static/chunks/commons.00c0e5f099b619b77613.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/framework.887e11dd23e2bc60fed7.js](https://pjm.social.gouv.fr/_next/static/chunks/framework.887e11dd23e2bc60fed7.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/main-431ddc0ff21e0c06594a.js](https://pjm.social.gouv.fr/_next/static/chunks/main-431ddc0ff21e0c06594a.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js](https://pjm.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js)
  
  
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
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/professionnel](https://pjm.social.gouv.fr/professionnel)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels](https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/sitemap.xml](https://pjm.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/politique-de-confidentialite](https://pjm.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/mentions-legales](https://pjm.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets](https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel](https://pjm.social.gouv.fr/devenir-professionnel)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences](https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences)
  
  
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

  
  
  
  
### Server Leaks Version Information via "Server" HTTP Response Header Field
##### Low (High)
  
  
  
  
#### Description
<p>The web/application server is leaking version information via the "Server" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.</p>
  
  
  
* URL: [https://pjm.social.gouv.fr/mentions-legales](https://pjm.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/favicon.ico](https://pjm.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/sitemap.xml](https://pjm.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/professionnel](https://pjm.social.gouv.fr/professionnel)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js](https://pjm.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/main-431ddc0ff21e0c06594a.js](https://pjm.social.gouv.fr/_next/static/chunks/main-431ddc0ff21e0c06594a.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/politique-de-confidentialite](https://pjm.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel](https://pjm.social.gouv.fr/devenir-professionnel)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to suppress the "Server" header or provide generic details.</p>
  
### Reference
* http://httpd.apache.org/docs/current/mod/core.html#servertokens
* http://msdn.microsoft.com/en-us/library/ff648552.aspx#ht_urlscan_007
* http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspx
* http://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel](https://pjm.social.gouv.fr/devenir-professionnel)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/favicon.ico](https://pjm.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/main-431ddc0ff21e0c06594a.js](https://pjm.social.gouv.fr/_next/static/chunks/main-431ddc0ff21e0c06594a.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/mentions-legales](https://pjm.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/sitemap.xml](https://pjm.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js](https://pjm.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/politique-de-confidentialite](https://pjm.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/professionnel](https://pjm.social.gouv.fr/professionnel)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
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
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels](https://pjm.social.gouv.fr/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels)
  
  
  * Method: `GET`
  
  
  * Evidence: `VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/professionnel](https://pjm.social.gouv.fr/professionnel)
  
  
  * Method: `GET`
  
  
  * Evidence: `VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences](https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences)
  
  
  * Method: `GET`
  
  
  * Evidence: `VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/politique-de-confidentialite](https://pjm.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g`
  
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel](https://pjm.social.gouv.fr/devenir-professionnel)
  
  
  * Method: `GET`
  
  
  * Evidence: `VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/mentions-legales](https://pjm.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/pages/_app-fa08fa597ea86c989b7b.js](https://pjm.social.gouv.fr/_next/static/chunks/pages/_app-fa08fa597ea86c989b7b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets](https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets)
  
  
  * Method: `GET`
  
  
  * Evidence: `VMN8HGADJ9JA3HTL5D28z-AqF4so6aHiBGHst3Oz69g`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>T�|\x001c`\x0003'�@�t��=���*\x0017�(��\x0004a�s���</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/main-431ddc0ff21e0c06594a.js](https://pjm.social.gouv.fr/_next/static/chunks/main-431ddc0ff21e0c06594a.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/mentions-legales](https://pjm.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/commons.00c0e5f099b619b77613.js](https://pjm.social.gouv.fr/_next/static/chunks/commons.00c0e5f099b619b77613.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/42975ff78b817bf632e4ba483f29e0b9b1370696.263c5807c7555d57b80e.js](https://pjm.social.gouv.fr/_next/static/chunks/42975ff78b817bf632e4ba483f29e0b9b1370696.263c5807c7555d57b80e.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/politique-de-confidentialite](https://pjm.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/framework.887e11dd23e2bc60fed7.js](https://pjm.social.gouv.fr/_next/static/chunks/framework.887e11dd23e2bc60fed7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel](https://pjm.social.gouv.fr/devenir-professionnel)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/professionnel](https://pjm.social.gouv.fr/professionnel)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected in the element starting with: "<script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{}},"page":"/","query":{},"buildId":"CqqLIKHo03K3QWZUhp", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css="true"></noscript>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences](https://pjm.social.gouv.fr/devenir-professionnel/la-formation-au-certificat-national-de-competences)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css="true"></noscript>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css="true"></noscript>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css="true"></noscript>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets](https://pjm.social.gouv.fr/devenir-professionnel/appel-a-candidatures-et-a-projets)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css="true"></noscript>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/mentions-legales](https://pjm.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css="true"></noscript>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/professionnel](https://pjm.social.gouv.fr/professionnel)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css="true"></noscript>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/politique-de-confidentialite](https://pjm.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css="true"></noscript>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/polyfills-9476a10aad3478430dd3.js](https://pjm.social.gouv.fr/_next/static/chunks/polyfills-9476a10aad3478430dd3.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel](https://pjm.social.gouv.fr/devenir-professionnel)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css="true"></noscript>`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/framework.887e11dd23e2bc60fed7.js](https://pjm.social.gouv.fr/_next/static/chunks/framework.887e11dd23e2bc60fed7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
Instances: 11
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>A noScript tag has been found, which is an indication that the application works differently with JavaScript enabled compared to when it is not.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://pjm.social.gouv.fr/sitemap.xml](https://pjm.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/mentions-legales](https://pjm.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js](https://pjm.social.gouv.fr/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/_next/static/chunks/main-431ddc0ff21e0c06594a.js](https://pjm.social.gouv.fr/_next/static/chunks/main-431ddc0ff21e0c06594a.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/favicon.ico](https://pjm.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/politique-de-confidentialite](https://pjm.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/devenir-professionnel](https://pjm.social.gouv.fr/devenir-professionnel)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/professionnel](https://pjm.social.gouv.fr/professionnel)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `00156209`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `00156209`
  
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `00261106`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/](https://pjm.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `00261106`
  
  
  
  
* URL: [https://pjm.social.gouv.fr/robots.txt](https://pjm.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `00261106`
  
  
  
  
* URL: [https://pjm.social.gouv.fr](https://pjm.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `00156209`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>00156209, which evaluates to: 1970-01-02 19:23:29</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### WSDL File Detection
##### Informational (Medium)
  
  
  
  
#### Description
<p>A WSDL File has been detected.</p>
  
  
  
* URL: [https://pjm.social.gouv.fr/sitemap.xml](https://pjm.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `text/xml`
  
  
  
  
Instances: 1
  
### Solution
<p>Make your WSDL files visible only for technical issues (ex: testing purposes).</p>
  
### Other information
<p>A WSDL File has been detected.</p>
  
### Reference
* No references.

  
#### WASC Id : 13
  
#### Source ID : 3
