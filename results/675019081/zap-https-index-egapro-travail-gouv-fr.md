
# ZAP Scanning Report

Generated on Mon, 22 Mar 2021 06:47:44


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 2 |
| Low | 5 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 4 | 
| X-Frame-Options Header Not Set | Medium | 4 | 
| Dangerous JS Functions | Low | 2 | 
| Feature Policy Header Not Set | Low | 6 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 7 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 9 | 
| X-Content-Type-Options Header Missing | Low | 9 | 
| Base64 Disclosure | Informational | 1 | 
| Information Disclosure - Suspicious Comments | Informational | 2 | 
| Modern Web Application | Informational | 5 | 
| Storable and Cacheable Content | Informational | 9 | 
| Timestamp Disclosure - Unix | Informational | 11 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/](https://index-egapro.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/sitemap.xml](https://index-egapro.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr](https://index-egapro.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/simulateur/](https://index-egapro.travail.gouv.fr/simulateur/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/simulateur/](https://index-egapro.travail.gouv.fr/simulateur/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/](https://index-egapro.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr](https://index-egapro.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/sitemap.xml](https://index-egapro.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js](https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://index-egapro.travail.gouv.fr](https://index-egapro.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/sitemap.xml](https://index-egapro.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/simulateur/](https://index-egapro.travail.gouv.fr/simulateur/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js](https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/](https://index-egapro.travail.gouv.fr/)
  
  
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

  
  
  
  
### Incomplete or No Cache-control and Pragma HTTP Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control and pragma HTTP header have not been set properly or are missing allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/css/2.a6ee895e.chunk.css](https://index-egapro.travail.gouv.fr/static/css/2.a6ee895e.chunk.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/css/main.e486af02.chunk.css](https://index-egapro.travail.gouv.fr/static/css/main.e486af02.chunk.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/](https://index-egapro.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/simulateur/](https://index-egapro.travail.gouv.fr/simulateur/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/robots.txt](https://index-egapro.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/sitemap.xml](https://index-egapro.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr](https://index-egapro.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/](https://index-egapro.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/robots.txt](https://index-egapro.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/sitemap.xml](https://index-egapro.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr](https://index-egapro.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/css/main.e486af02.chunk.css](https://index-egapro.travail.gouv.fr/static/css/main.e486af02.chunk.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js](https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/simulateur/](https://index-egapro.travail.gouv.fr/simulateur/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/css/2.a6ee895e.chunk.css](https://index-egapro.travail.gouv.fr/static/css/2.a6ee895e.chunk.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js](https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/simulateur/](https://index-egapro.travail.gouv.fr/simulateur/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/css/2.a6ee895e.chunk.css](https://index-egapro.travail.gouv.fr/static/css/2.a6ee895e.chunk.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/](https://index-egapro.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr](https://index-egapro.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/sitemap.xml](https://index-egapro.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/css/main.e486af02.chunk.css](https://index-egapro.travail.gouv.fr/static/css/main.e486af02.chunk.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/robots.txt](https://index-egapro.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js](https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvhJREFUeNrsmjtvE0EQxyenIAoKp0gqEHeh4iVwRwXh8QFiREOXk+ixqWmOAlpMvkCchg5hpHSI5CKaNIhDvDqwUWiICw6JSJDCzFhj69jYd/u4Rw4x0uqUaL37/93O7s7u3FS/3wdTW35ac/BxGUuVC/1tC9W6WDpcAiz+7evtwLTvKV0AFu1ysTX7J6g2libCdHIBYOEeliVI11apXVUQaQAUPsPC65CtPWKQ76kBoPgqD7UN+Ri5losQflJFS0I8+fjrHMUD97XBfesDYANNfKxAcbaCGlpaACy+DsXbUhyEFeM2B0F8FKIhNYmxIm1IGyqtXzp3C+YqJ5QUfei+gI9f1lVBrogTe3rMUtlSbZXEH509o/Sb7d5bnZFo0z4UXWJFF/JyXm1UrSK+YEtY6+tw8G2R3XzfCDShPOb9BcDxzUKJABbYY0Yj0IDyWSMKUCshwECzxUNhlxCgQpPZ4pNUWe3fAHBKDOAQwPkSA9gWlNz+AxRt00kVTh2/Cqftawnh9LxyxxdO3hyUSfZ7bxcerzfgx+43MwA6dBybOzsAyctI/JOXdxPFD12om1Tp+atlndOTkfid8LNM9ZAAOjI184BQFE8WEIAvWztLCA3x6gBZQqxtPVAVT+ZbfMoPi4Sg9rZ773R+6g/3gbZOp19771MRr/kyntHtxBCgpTvsvbBThPiR5tHFFh4OAp3A7vChI3Dj4n2YrTh5iu/i23fEUMLTaenX3s/B6qEyEinMIW9fLIRENA82s4Yg4YbiN1Fra1Iw56quSCoQJJzefhq3EWMBOD+lfcUSB5GS+DtiZnNsionv47WTeOLETkn8Kop3xX9OzJGlBbETfkpD/BsUX1UNp8mV6Lp90cSd6GkqPu7mJDFLaToSpm5DLzIu5SqbZqXReJiz+HsoPHFvUkl0kw/SFXzWt9jkMq7sdxQ6nxq4kE0mh06GXnSTygRAAKnpTvJoVEnRsKpwY4AIyAyD0EpRlQgIyUUCPki1Zb+JmGR/BBgAzhqH4Oa2GhkAAAAASUVORK5CYII=`
  
  
  
  
Instances: 1
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�PNG</p><p>\x001a</p><p>\x0000\x0000\x0000
IHDR\x0000\x0000\x00000\x0000\x0000\x00000\x0008\x0006\x0000\x0000\x0000W\x0002��\x0000\x0000\x0000\x0019tEXtSoftware\x0000Adobe ImageReadyq�e<\x0000\x0000\x0002�IDATx��;o\x0013A\x0010�'� </p><p></p><p>�H*\x0010w��%pG\x0005��\x0001bDC��豩i�\x0002ZL�@��\x000ea�t��"�4�C�:�Qh�\x000b\x000e�H���Xc���w��G\x000e1��h���������T��\x0007S[~Zs�q\x0019K�\x000b�m\x000bպX:\\x0002,�������)]\x0000\x0016�r�5�'�6�&�tr\x0001`�\x001e�%H�V�]U\x0010i\x0000\x0014>��됭=b��\x0001��*\x000f�
�\x0018���\x0010~REKB<���\x001c�\x0003���}�\x0003`\x0003M|�@q��\x001aZZ\x0000,�\x000e��R\x001c�\x0015�6\x0007A|\x0014�!5��"mH\x001b*�_:w\x000b�*'�\x0014}辀�_�UA��\x0013{z�R�Rm��\x001f�=�����[��h�>\x0014]bE\x0017�r^mT�"�`KX��p�m��|�\x00084�<��\x0005���B�\x0000\x0016�cF#Ѐ�Y#</p><p>P+!�@��Ca�\x0010�B���TY��\x0000pJ\x000c�\x0010��\x0012\x0003�\x0016���\x0003\x0014m�I\x0015N\x001d�</p><p>��k	���r�\x0017N�\x001c�I�{o\x0017\x001e�7���73\x0000:t\x001c�;;\x0000��H���w\x0013�\x000f]��T���e�ӓ����L��\x0000:25�P\x0014O\x0016\x0010�/[;K\x0008
��\x0000YB�m=P\x0015O�[|�\x000f�����{�t~�\x000f���N�_{�S\x0011��2����\x0010��;콰S������\x0016\x001e\x000e\x0002����#p��}��8y����w�P��i������2\x0012)�!o_,�D4\x000f6�� ��7QkkR0窮H*\x0010$��~\x001a�\x0011c\x00018?�}�\x0012\x0007���;bfsl���㵓x��NI�*�w�N̑�\x0005�\x0013~JC�\x001b\x0014_U
�ɕ�}�ĝ�i*>��$1Ki:\x0012�nC/2.�*�f��x���{(<qoRIt�\x000f�\x0015|ַ��2��w\x0014:�\x001a��M&�N�^t��\x0004@\x0000��N�hTIѰ�pc�\x0008�\x000c��JQ�\x0008\x0008�E\x0002>H�e���d\x0004\x0018\x0000�\x001a���\x001a\x0019\x0000\x0000\x0000\x0000IEND�B`�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js](https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
Instances: 2
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bADMIN\b and was detected in the element starting with: "(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{289:function(e,t,n){e.exports=n.p+"static/media/LogoIndex.e2b7f12f.pn", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/sitemap.xml](https://index-egapro.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>!function(e){function r(r){for(var n,p,l=r[0],a=r[1],f=r[2],c=0,s=[];c<l.length;c++)p=l[c],Object.prototype.hasOwnProperty.call(o,p)&&o[p]&&s.push(o[p][0]),o[p]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(i&&i(r);s.length;)s.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,l=1;l<t.length;l++){var a=t[l];0!==o[a]&&(n=!1)}n&&(u.splice(r--,1),e=p(p.s=t[0]))}return e}var n={},o={1:0},u=[];function p(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.m=e,p.c=n,p.d=function(e,r,t){p.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,r){if(1&r&&(e=p(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)p.d(t,n,function(r){return e[r]}.bind(null,n));return t},p.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(r,"a",r),r},p.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},p.p="/";var l=this.webpackJsonpapp=this.webpackJsonpapp||[],a=l.push.bind(l);l.push=r,l=l.slice();for(var f=0;f<l.length;f++)r(l[f]);var i=a;t()}([])</script>`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/simulateur/](https://index-egapro.travail.gouv.fr/simulateur/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>!function(e){function r(r){for(var n,p,l=r[0],a=r[1],f=r[2],c=0,s=[];c<l.length;c++)p=l[c],Object.prototype.hasOwnProperty.call(o,p)&&o[p]&&s.push(o[p][0]),o[p]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(i&&i(r);s.length;)s.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,l=1;l<t.length;l++){var a=t[l];0!==o[a]&&(n=!1)}n&&(u.splice(r--,1),e=p(p.s=t[0]))}return e}var n={},o={1:0},u=[];function p(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.m=e,p.c=n,p.d=function(e,r,t){p.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,r){if(1&r&&(e=p(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)p.d(t,n,function(r){return e[r]}.bind(null,n));return t},p.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(r,"a",r),r},p.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},p.p="/";var l=this.webpackJsonpapp=this.webpackJsonpapp||[],a=l.push.bind(l);l.push=r,l=l.slice();for(var f=0;f<l.length;f++)r(l[f]);var i=a;t()}([])</script>`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr](https://index-egapro.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>!function(e){function r(r){for(var n,p,l=r[0],a=r[1],f=r[2],c=0,s=[];c<l.length;c++)p=l[c],Object.prototype.hasOwnProperty.call(o,p)&&o[p]&&s.push(o[p][0]),o[p]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(i&&i(r);s.length;)s.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,l=1;l<t.length;l++){var a=t[l];0!==o[a]&&(n=!1)}n&&(u.splice(r--,1),e=p(p.s=t[0]))}return e}var n={},o={1:0},u=[];function p(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.m=e,p.c=n,p.d=function(e,r,t){p.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,r){if(1&r&&(e=p(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)p.d(t,n,function(r){return e[r]}.bind(null,n));return t},p.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(r,"a",r),r},p.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},p.p="/";var l=this.webpackJsonpapp=this.webpackJsonpapp||[],a=l.push.bind(l);l.push=r,l=l.slice();for(var f=0;f<l.length;f++)r(l[f]);var i=a;t()}([])</script>`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/](https://index-egapro.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>!function(e){function r(r){for(var n,p,l=r[0],a=r[1],f=r[2],c=0,s=[];c<l.length;c++)p=l[c],Object.prototype.hasOwnProperty.call(o,p)&&o[p]&&s.push(o[p][0]),o[p]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(i&&i(r);s.length;)s.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,l=1;l<t.length;l++){var a=t[l];0!==o[a]&&(n=!1)}n&&(u.splice(r--,1),e=p(p.s=t[0]))}return e}var n={},o={1:0},u=[];function p(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.m=e,p.c=n,p.d=function(e,r,t){p.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,r){if(1&r&&(e=p(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)p.d(t,n,function(r){return e[r]}.bind(null,n));return t},p.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(r,"a",r),r},p.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},p.p="/";var l=this.webpackJsonpapp=this.webpackJsonpapp||[],a=l.push.bind(l);l.push=r,l=l.slice();for(var f=0;f<l.length;f++)r(l[f]);var i=a;t()}([])</script>`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/robots.txt](https://index-egapro.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr](https://index-egapro.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/css/2.a6ee895e.chunk.css](https://index-egapro.travail.gouv.fr/static/css/2.a6ee895e.chunk.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/css/main.e486af02.chunk.css](https://index-egapro.travail.gouv.fr/static/css/main.e486af02.chunk.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/simulateur/](https://index-egapro.travail.gouv.fr/simulateur/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/](https://index-egapro.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js](https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/sitemap.xml](https://index-egapro.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741822`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js](https://index-egapro.travail.gouv.fr/static/js/main.816aa344.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `20190225`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `94906265`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741821`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/css/2.a6ee895e.chunk.css](https://index-egapro.travail.gouv.fr/static/css/2.a6ee895e.chunk.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `0123456789`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741823`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `62425156`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1540483477`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/css/main.e486af02.chunk.css](https://index-egapro.travail.gouv.fr/static/css/main.e486af02.chunk.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `78773388`
  
  
  
  
* URL: [https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js](https://index-egapro.travail.gouv.fr/static/js/2.a1ffc3d8.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1073741822, which evaluates to: 2004-01-10 13:37:02</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
