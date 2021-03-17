
# ZAP Scanning Report

Generated on Wed, 17 Mar 2021 15:05:40


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 5 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 3 | 
| Sub Resource Integrity Attribute Missing | Medium | 3 | 
| X-Frame-Options Header Not Set | Medium | 3 | 
| Dangerous JS Functions | Low | 1 | 
| Feature Policy Header Not Set | Low | 4 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 1 | 
| Information Disclosure - Suspicious Comments | Informational | 1 | 
| Modern Web Application | Informational | 3 | 
| Storable and Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 6 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr](https://emjpm.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/](https://emjpm.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/sitemap.xml](https://emjpm.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/sitemap.xml](https://emjpm.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css" rel="stylesheet"/>`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/](https://emjpm.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css" rel="stylesheet"/>`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr](https://emjpm.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css" rel="stylesheet"/>`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/](https://emjpm.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/sitemap.xml](https://emjpm.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr](https://emjpm.fabrique.social.gouv.fr)
  
  
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

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js](https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/sitemap.xml](https://emjpm.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js](https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr](https://emjpm.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/](https://emjpm.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-quicksand.css](https://emjpm.fabrique.social.gouv.fr/css/font-quicksand.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-source-sans-pro.css](https://emjpm.fabrique.social.gouv.fr/css/font-source-sans-pro.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/sitemap.xml](https://emjpm.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/](https://emjpm.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/manifest.json](https://emjpm.fabrique.social.gouv.fr/manifest.json)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/css/3.480adf42.chunk.css](https://emjpm.fabrique.social.gouv.fr/static/css/3.480adf42.chunk.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/pagination.css](https://emjpm.fabrique.social.gouv.fr/css/pagination.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/css/main.9ae4211f.chunk.css](https://emjpm.fabrique.social.gouv.fr/static/css/main.9ae4211f.chunk.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr](https://emjpm.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-open-sans.css](https://emjpm.fabrique.social.gouv.fr/css/font-open-sans.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/robots.txt](https://emjpm.fabrique.social.gouv.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/manifest.json](https://emjpm.fabrique.social.gouv.fr/manifest.json)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-open-sans.css](https://emjpm.fabrique.social.gouv.fr/css/font-open-sans.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/css/main.9ae4211f.chunk.css](https://emjpm.fabrique.social.gouv.fr/static/css/main.9ae4211f.chunk.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr](https://emjpm.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/favicon.ico](https://emjpm.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-quicksand.css](https://emjpm.fabrique.social.gouv.fr/css/font-quicksand.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-source-sans-pro.css](https://emjpm.fabrique.social.gouv.fr/css/font-source-sans-pro.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/robots.txt](https://emjpm.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/sitemap.xml](https://emjpm.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/](https://emjpm.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/pagination.css](https://emjpm.fabrique.social.gouv.fr/css/pagination.css)
  
  
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
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-source-sans-pro.css](https://emjpm.fabrique.social.gouv.fr/css/font-source-sans-pro.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/favicon.ico](https://emjpm.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/](https://emjpm.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/robots.txt](https://emjpm.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-quicksand.css](https://emjpm.fabrique.social.gouv.fr/css/font-quicksand.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/sitemap.xml](https://emjpm.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr](https://emjpm.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/css/main.9ae4211f.chunk.css](https://emjpm.fabrique.social.gouv.fr/static/css/main.9ae4211f.chunk.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-open-sans.css](https://emjpm.fabrique.social.gouv.fr/css/font-open-sans.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/manifest.json](https://emjpm.fabrique.social.gouv.fr/manifest.json)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/pagination.css](https://emjpm.fabrique.social.gouv.fr/css/pagination.css)
  
  
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
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js](https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `iVBORw0KGgoAAAANSUhEUgAAADwAAABICAYAAACqT5alAAAABGdBTUEAALGPC/xhBQAABR5JREFUeAHtm01sG0UUgN/Mxg1tkqZFbUElQNqmsjYgocQpOXBp6KHiAG0RajkgWiSkShUXfgoIQbT1AYEqxAUOPXHIBYQACwmkICTSQyUosXMoieWmEfSHUqqAmsahcW3v8N6GXa0d78Z2PEPX9hy6s++92fe+93Z3xpsOgxJNRE6FUvD7fmGK/QBsQABsBRDtJUzvIBFLM4CrGOc44ywWhvtiLH40Wxwg2hS2qf7hAzjoJAjYUagJ2BmDGSzW8d5E9Ct35A6wMAye/Np8D4Q47jYIfJ+xk/pT/E1mGCaxtNhAdQlLcFhAZKPe6/SPVWHrNhbiSxLUbWPsabq9Gb2gkuJKMvDP7EqVwmdaZ106p7dx3cNSMvAlTKx8aepZKT31oSdWTvNsfeCUQ8EG+NKiohzj4NsQK1b4Tl9B1TLRoh2BG6s1geu93s7SUgWotmEdbHl5L7QNLv0uWfhpBq5/OAr5G/+ocG/5UAasda6FbZ8eg9CW9Q7chif7LPhfD30M+blbjlxmR9kzvPnYngJYG4oSQDpVTRmwfRuXAvPTlbJfjUwZsLaxzTNOP53noCoVyoAz09c8Q/TTeQ6qUqEM+K+RM54h+uk8B1WpUAacPp2C6x99DyKXd0KlPslIp6qxqb53cE2troXuvxvaIt2Ww4X4b5C9/Lc65+hJyTzM21ut+bZlUwcsnJ2BG7GEBblm2ybYeGgQcrPzQIsQM52RDi8dmCr64KkXIHRvpwNjLuLnYiGAr13jyLLX5uDi0U+kV1z6M3zPa08UwBIhvytUAEsySgjZym7Sgdf1d5fNUIlt2RctMpQOrLW1Frn0Pq3E1vsq/hrpwP7u1WubwOpzrtZjs8Jq863eW7PC6nOu1qP0CgtcQpbbKrEt95rFdtKBb527UuzT87wSW8+LrKCQ/uPh8ksj0P7YTli/92Ho2K2XDGd+LAk3R3+B9JnpkvpaCqVX2EwvIsw5WEx5f+IhHdmQrewmHVg2QKXXbwJXmrGg2TcrHLSKVRpvs8KVZixo9soqLDLL/mOrkys/nWNUo44y4DlcWGQuzi4Lm2SkU9WU/+VBFZiXH2UV9gpAtbzxgBljN1Vn+f/yR6xUYdwn0DDtKgKLHxsGF1k5E1rBJoh6hidWHu7p/QYhJ+sZ9D+2SWLl7PODeca1V3DzQ/lf2wKWHWKzGJHVmpb0uPEdbvd4O2Ac5YeLbBYjjnD2LdHoqb7hN1DwrgBRF/MzA2bibftW70T0fTs7BcAkTA4Yu8E0P8BvxP22URCPOOcmgPNX9XFjzB3/MmBSIixLRU4M4XEfntGeiK3ARId7YMm+YJhU0Ynf3rWS+gqFGJwAxubx4P1Ty76mIDtaUzDceyhi4fETYwi97L1UEti+RjXH6UGjK5c1T2Oytlcz3h6DgWUQdp+eiI7aslocaw5MQc1EjAdumwgNoru6INltTeMHwuPGt9WN9x4l5eW0I25cglY+hBW65O3aQ8Mgiw/GMzJgyaOUCtso53cZ2/M5q9Jdtsz3iLAa0w6G40bM124VSqnAFNeFfqMnC9YzjZuufRpjOXzFPKtPRL/wsVq1Ssot7Y6qJ2FcgBY+hLfpH265u4+6PL7Wn5MNSz6lA5MT/axxnjPtcez+SefuRosDYNrz4UT0M7dcVl/6Le0OfHpX9KFcLvsDTo6bSU6wmPEj4YnoiNtOZl9JhW2AnT8PTwIP7cEFwSxmmpYpL6qEteNQfkw9Gn0kGRk+rNxxIzr8FxOWgBFarZIGAAAAAElFTkSuQmCC`
  
  
  
  
Instances: 1
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�PNG</p><p>\x001a</p><p>\x0000\x0000\x0000
IHDR\x0000\x0000\x0000<\x0000\x0000\x0000H\x0008\x0006\x0000\x0000\x0000�O��\x0000\x0000\x0000\x0004gAMA\x0000\x0000��\x000b�a\x0005\x0000\x0000\x0005\x001eIDATx\x0001�Ml\x001bE\x0014����
m��EmA%@ڦ�6 ��)9pi��\x0000m\x0011j9 Z$�J\x0015\x0017~</p><p>\x0008A��\x0001�*�\x0005\x000e=q�\x0005�\x0000\x000b	� $�C%(�s(��\x0011�R���ơqm��ކ]�\x001d��v<C��\x001c�������vwƛ\x000e�\x0012MDN�R��~a��\x0000l@\x0000l\x0005\x0010�%L� \x0011K3��\x0018�8�,\x0016��b,~4[\x001c �\x0014����\x00038�$\x0008�Q�	�\x0019�\x0019,���D�+w�\x000e�0\x000c���|\x000f�8�6\x0008|����S�Mf\x0018&���@u	KpX@d����Ua�6\x0016�K\x0012�mc�i��\x0019����J2���J��gZg]:��q��R2�%L�|i�Y)=��'VN�l}��C�\x0006�Ң�\x001c���\x0010+V�N_A�2Ѣ\x001d�\x001b�5�����R\x0005��a\x001dlyy/�
.�.Y�i\x0006�8</p><p>�\x001b��po�P\x0006�u��m�\x001e�Ж�\x000e܆'�,�_\x000f}\x000c��[�\fG�3��؞\x0002X\x001b�\x0012@:UM\x0019�}\x001b�\x0002�ӕ�_�L\x0019����3N?��*\x0015ʀ3��<C��y\x000e�R�\x000c���3�!��<\x0007U�P\x0006�>���\x001f}\x000f"�wB�>�H�����wpM����\x001b�"ݖÅ�o����:��I�<��[���eS\x0007,���\x001b��\x0005�f�&�xh\x0010r��@�\x00103��\x000e/\x001d�*��\x0017 to�\x0003c.��b!��]�Ȳ�����O�W\�3|�kO\x0014�\x0012!�+T\x0000K2J\x0008��nҁ��w��P�m�\x0017-2�\x000e���\x0016��>����*�\x001a�����k���s��c��j��[���s�֣�</p><p>\x000b\B��*�-���vҁo��R���\x0012[ϋ�������K#���NX��a�ح�\x000cg~,	7G�����Z</p><p>�W�L/"�9XLy�!\x001dِ��&\x001dX6@��o\x0002W����7+\x001c��U\x001ao�f,h��*,2��c��+?�cT��2�9\Xd.�.\x000b�d�SՔ��A\x0015��\x001fe\x0015�</p><p>@���\x0019c7Ug���G�Ta�'�0�*\x0002�\x001f\x001b\x0006\x0017Y9\x0013Z�&�z�'V\x001e���\x0006!'�\x0019�?�Ib���yƵWp�C�_�\x0002�\x001db�\x0018�՚����\x001dn�x;`\x001c凋l\x0016#�p�-�詾�7P�\x0000Q\x0017�3\x0003f�m�V�D�};;\x0005�$L\x000e\x0018��4?�o���Q\x0010�8�&��W�qc�\x001d�2`R",KEN\x000c�q\x001f�ў���D�{`ɾ`�Tщ�޵��</p><p>�\x0018�\x0000�����S˾� ;ZS0�{(b��\x0013c\x0008��T\x0012ؾF5��A�+�5Oc��W3�\x001e��e\x0010v����ڲZ\x001ck\x000eLA�D�\x0007n�\x0008
��� �mM�\x0007��ƷՍ�\x001e%��#n\�V>�\x0015����C� �\x000f�32`ɣ�</p><p>�(�w\x0019��9��]�����\x001a�\x000e��F��n\x0015J��\x0014ׅ~�'\x000b�3���}\x001ac9|�<�OD��Z�J�-펪'a\�\x0016>���\x001fn����<�֟�
K>�\x0003�\x0013��q�3�q��I��F�\x0003`���D�3�\V_�-�\x000e|zW��\.�\x0003N��IN���#���Nf_I�m��?\x000fO\x0002\x000f��\x0005�,f��)/����P~L=\x001a}$\x0019\x0019>��q#:�\x0017\x0013��\x0011Z��\x0006\x0000\x0000\x0000\x0000IEND�B`�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js](https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 1
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected in the element starting with: "(this["webpackJsonp@emjpm/app"]=this["webpackJsonp@emjpm/app"]||[]).push([[1],[,,,,function(e,t,n){"use strict";n.d(t,"b",(funct", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/sitemap.xml](https://emjpm.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>!function(e){function r(r){for(var n,u,i=r[0],c=r[1],f=r[2],p=0,s=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(r);s.length;)s.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(n=!1)}n&&(a.splice(r--,1),e=u(u.s=t[0]))}return e}var n={},o={2:0},a=[];function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var r=[],t=o[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise((function(r,n){t=o[e]=[r,n]}));r.push(t[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{0:"4e433921",4:"28834437",5:"7305fa4d",6:"592a5465",7:"f901d4ce",8:"7022aa0e",9:"24f7f853",10:"1feb0617",11:"b7fab48a",12:"d94884a7",13:"e2fcbddb",14:"12e5a13e",15:"59628ba4",16:"105de60f"}[e]+".chunk.js"}(e);var c=new Error;a=function(r){i.onerror=i.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,t[1](c)}o[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(r)},u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=this["webpackJsonp@emjpm/app"]=this["webpackJsonp@emjpm/app"]||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var f=0;f<i.length;f++)r(i[f]);var l=c;t()}([])</script>`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/](https://emjpm.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>!function(e){function r(r){for(var n,u,i=r[0],c=r[1],f=r[2],p=0,s=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(r);s.length;)s.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(n=!1)}n&&(a.splice(r--,1),e=u(u.s=t[0]))}return e}var n={},o={2:0},a=[];function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var r=[],t=o[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise((function(r,n){t=o[e]=[r,n]}));r.push(t[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{0:"4e433921",4:"28834437",5:"7305fa4d",6:"592a5465",7:"f901d4ce",8:"7022aa0e",9:"24f7f853",10:"1feb0617",11:"b7fab48a",12:"d94884a7",13:"e2fcbddb",14:"12e5a13e",15:"59628ba4",16:"105de60f"}[e]+".chunk.js"}(e);var c=new Error;a=function(r){i.onerror=i.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,t[1](c)}o[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(r)},u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=this["webpackJsonp@emjpm/app"]=this["webpackJsonp@emjpm/app"]||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var f=0;f<i.length;f++)r(i[f]);var l=c;t()}([])</script>`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr](https://emjpm.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>!function(e){function r(r){for(var n,u,i=r[0],c=r[1],f=r[2],p=0,s=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(r);s.length;)s.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(n=!1)}n&&(a.splice(r--,1),e=u(u.s=t[0]))}return e}var n={},o={2:0},a=[];function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var r=[],t=o[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise((function(r,n){t=o[e]=[r,n]}));r.push(t[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{0:"4e433921",4:"28834437",5:"7305fa4d",6:"592a5465",7:"f901d4ce",8:"7022aa0e",9:"24f7f853",10:"1feb0617",11:"b7fab48a",12:"d94884a7",13:"e2fcbddb",14:"12e5a13e",15:"59628ba4",16:"105de60f"}[e]+".chunk.js"}(e);var c=new Error;a=function(r){i.onerror=i.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,t[1](c)}o[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(r)},u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=this["webpackJsonp@emjpm/app"]=this["webpackJsonp@emjpm/app"]||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var f=0;f<i.length;f++)r(i[f]);var l=c;t()}([])</script>`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr](https://emjpm.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/sitemap.xml](https://emjpm.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/](https://emjpm.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/favicon.ico](https://emjpm.fabrique.social.gouv.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/pagination.css](https://emjpm.fabrique.social.gouv.fr/css/pagination.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/css/main.9ae4211f.chunk.css](https://emjpm.fabrique.social.gouv.fr/static/css/main.9ae4211f.chunk.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/manifest.json](https://emjpm.fabrique.social.gouv.fr/manifest.json)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-source-sans-pro.css](https://emjpm.fabrique.social.gouv.fr/css/font-source-sans-pro.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/robots.txt](https://emjpm.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-open-sans.css](https://emjpm.fabrique.social.gouv.fr/css/font-open-sans.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/css/font-quicksand.css](https://emjpm.fabrique.social.gouv.fr/css/font-quicksand.css)
  
  
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
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/css/3.480adf42.chunk.css](https://emjpm.fabrique.social.gouv.fr/static/css/3.480adf42.chunk.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/](https://emjpm.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `28834437`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/sitemap.xml](https://emjpm.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `28834437`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js](https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `00261106`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr](https://emjpm.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `28834437`
  
  
  
  
* URL: [https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js](https://emjpm.fabrique.social.gouv.fr/static/js/main.8b63f127.chunk.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `00156209`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>2147483647, which evaluates to: 2038-01-19 03:14:07</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
