
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:57:20


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 6 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 1 | 
| CSP: Wildcard Directive | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 1 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| CSP: Notices | Low | 2 | 
| Feature Policy Header Not Set | Low | 1 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 1 | 
| Strict-Transport-Security Header Not Set | Low | 2 | 
| Base64 Disclosure | Informational | 3 | 
| Content-Type Header Missing | Informational | 2 | 
| Modern Web Application | Informational | 1 | 
| Non-Storable Content | Informational | 2 | 
| Storable and Cacheable Content | Informational | 3 | 
| Timestamp Disclosure - Unix | Informational | 12 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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

  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, script-src-elem, script-src-attr, style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://savoirrouleravelo.fr/](https://savoirrouleravelo.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://savoirrouleravelo.fr](https://savoirrouleravelo.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 2
  
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

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">`
  
  
  
  
Instances: 1
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-sports.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-sports.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://savoirrouleravelo.fr](https://savoirrouleravelo.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dsb5-srv.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dsb5-srv.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://savoirrouleravelo.fr/](https://savoirrouleravelo.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dsb5-srv.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dsb5-srv.cegedim.cloud-HTTP`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://savoirrouleravelo.fr](https://savoirrouleravelo.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://savoirrouleravelo.fr/](https://savoirrouleravelo.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
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
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
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

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://savoirrouleravelo.fr/robots.txt](https://savoirrouleravelo.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://savoirrouleravelo.fr/sitemap.xml](https://savoirrouleravelo.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `upGf+uBcJhCkPFEqJlLL3fNyljz02Y65O7ONAgKtcKoyFxF/mUhrBHXFawH9l9RTzKT49qH23zfYcpm3wFELjCeZ704=`
  
  
  
  
Instances: 1
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�����\&\x0010�<Q*&R���r�<�َ�;��\x0002\x0002�p�2\x0017\x0011�Hk\x0004u�k\x0001���S̤�����7�r���Q\x000b�'��N</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://savoirrouleravelo.fr](https://savoirrouleravelo.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `bMBURQdiqmznubcqJlLL3fNyljz02WQCOg2Hierbaks9SYQToa/gRutxkIOA77oKZiiWWhWj0gWCpOHl5uXETBRsI4c=`
  
  
  
  
* URL: [https://savoirrouleravelo.fr/](https://savoirrouleravelo.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `720GZR8tn9tr2t8qJlLL3fNyljz02Xv/1rsSmPqqPEs6xvA0KZ7UytW1LfpRI+DLVSpclB8O83+SB1rsDhymenAVIds=`
  
  
  
  
Instances: 2
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>l�TE\x0007b�l繷*&R���r�<��d\x0002:
����jK=I�\x0013���F�q����</p><p>f(�Z\x0015��\x0005�������L\x0014l#�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://savoirrouleravelo.fr/sitemap.xml](https://savoirrouleravelo.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://savoirrouleravelo.fr/robots.txt](https://savoirrouleravelo.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure each page is setting the specific and appropriate content-type value for the content being delivered.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx

  
#### CWE Id : 345
  
#### WASC Id : 12
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="carousel-control carousel-control-prev left d-none d-md-flex col-md-1 p-0 mr-2" role="button" data-slide="prev">
			<img src='squelettes/savoirrouler/css/images/carousel-arrow-left.png' alt='' width='64' height='105' aria-hidden='true' class='img-fluid' />
			<span class="sr-only">Précédent</span>
		</a>`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://savoirrouleravelo.fr/](https://savoirrouleravelo.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://savoirrouleravelo.fr](https://savoirrouleravelo.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
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
  
  
  
* URL: [https://savoirrouleravelo.fr/robots.txt](https://savoirrouleravelo.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://savoirrouleravelo.fr/sitemap.xml](https://savoirrouleravelo.fr/sitemap.xml)
  
  
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
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1611848834`
  
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `329780206`
  
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `352726230`
  
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609865905`
  
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1611841671`
  
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609865952`
  
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `329350654`
  
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609865816`
  
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616095582`
  
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609865950`
  
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1611848618`
  
  
  
  
* URL: [https://sports.gouv.fr/savoir-rouler-a-velo/](https://sports.gouv.fr/savoir-rouler-a-velo/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609865951`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1611848834, which evaluates to: 2021-01-28 15:47:14</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
