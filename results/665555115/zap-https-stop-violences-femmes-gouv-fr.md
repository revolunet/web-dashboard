
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 20:04:36


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 2 |
| Low | 7 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 2 | 
| X-Frame-Options Header Not Set | Medium | 2 | 
| Cookie No HttpOnly Flag | Low | 2 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cookie Without Secure Flag | Low | 2 | 
| Dangerous JS Functions | Low | 1 | 
| Feature Policy Header Not Set | Low | 4 | 
| Strict-Transport-Security Header Not Set | Low | 4 | 
| X-Content-Type-Options Header Missing | Low | 4 | 
| Base64 Disclosure | Informational | 5 | 
| Modern Web Application | Informational | 3 | 
| Non-Storable Content | Informational | 4 | 
| Storable and Cacheable Content | Informational | 2 | 
| Timestamp Disclosure - Unix | Informational | 16 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
Instances: 2
  
### Solution
<p>Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html

  
#### CWE Id : 614
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=8)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=8)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
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

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=8)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
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

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=12)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=8)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `+JCBDmLibirZYgUqJlLL3fNyljz02YH94N49XXqqPy1KQPixz4BELEy7GJ9XVJfuuZ4vftt8urpTeCe/oA5z0bvibxc=`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20000620e29db1f55c187a03f2e29bb855a70e3fe8bdb256752738c8fcacb2835a880835fdd5240a280004e4e7ba1afb5ed8b4fa83d5d63169ff047d2e706f4df20db25425aaa1314539304f89522c40016c200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0o`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20008f2512a4b4d684a23d1932b09018ac3b4e838eec9226bd748b6e17f939b6828d085c9469d90a2800902195bc866ef2ccb4fa83d5d63169ff25451d7f012b2f143f8764c043db3e8ea803e10f1ce1a195200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000860791204fc0484a3129723fac404d897eea84a1f61fdcf200d41d2ae758721a08163795830a28007739413e640bb63f7b72d8965075e93de2ed2a61adedd57940a7667eead31e6c50b2f93f84acc665200000000200000000`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>���\x000eb�n*�b\x0005*&R���r�<�ف���=]z�?-J@��πD,L�\x0018�WT�/~�|��Sx'��\x000esѻ�o\x0017</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000860791204fc0484a3129723fac404d897eea84a1f61fdcf200d41d2ae758721a08163795830a28007739413e640bb63f7b72d8965075e93de2ed2a61adedd57940a7667eead31e6c50b2f93f84acc665200000000200000000";

window.MRW=!!window.MRW;try{(function(){(function(){var z=-1,z={J:++z,OI:"false"[z],L:++z,oZ:"false"[z],IL:++z,LLL:"[object Object]"[z],Zs:(z[z]+"")[z],zZ:++z,zs:"true"[z],ZL:++z,jL:++z,zI:"[object Object]"[z],I:++z,Oo:++z,O_L:++z,o_L:++z};try{z.LZ=(z.LZ=z+"")[z.jL]+(z.Oz=z.LZ[z.L])+(z.oI=(z.oz+"")[z.L])+(!z+"")[z.zZ]+(z.zz=z.LZ[z.I])+(z.oz="true"[z.L])+(z._s="true"[z.IL])+z.LZ[z.jL]+z.zz+z.Oz+z.oz,z.oI=z.oz+"true"[z.zZ]+z.zz+z._s+z.oz+z.oI,z.oz=z.J[z.LZ][z.LZ],z.oz(z.oz(z.oI+'"\\'+z.L+z.jL+z.L+z.OI+"\\"+z.ZL+z.J+"("+z.zz+"\\"+z.L+z.Oo+
z.L+"\\"+z.L+z.I+z.J+z.zs+z.Oz+z.OI+"\\"+z.ZL+z.J+"\\"+z.L+z.I+z.Oo+"\\"+z.L+z.jL+z.L+"\\"+z.L+z.jL+z.I+z.Zs+z.Oz+"\\"+z.L+z.I+z.Oo+"['\\"+z.L+z.I+z.J+z.oZ+"\\"+z.L+z.Oo+z.L+"false"[z.IL]+z.Oz+z.oZ+z.Zs+"']\\"+z.ZL+z.J+"===\\"+z.ZL+z.J+"'\\"+z.L+z.I+z.zZ+z.zz+"\\"+z.L+z.I+z.IL+"\\"+z.L+z.jL+z.L+"\\"+z.L+z.jL+z.I+"\\"+z.L+z.ZL+z.Oo+"')\\"+z.ZL+z.J+"{\\"+z.L+z.IL+"\\"+z.L+z.L+"\\"+z.L+z.I+z.I+z.oZ+"\\"+z.L+z.I+z.IL+"\\"+z.ZL+z.J+z.zs+z.Zs+"\\"+z.L+z.I+z.I+z.zI+"\\"+z.L+z.Oo+z.L+z._s+"\\"+z.L+z.jL+z.IL+
"\\"+z.L+z.jL+z.zZ+"\\"+z.L+z.I+z.J+"\\"+z.ZL+z.J+"=\\"+z.ZL+z.J+"\\"+z.L+z.I+z.Oo+"\\"+z.L+z.jL+z.L+"\\"+z.L+z.jL+z.I+z.Zs+z.Oz+"\\"+z.L+z.I+z.Oo+"['\\"+z.L+z.I+z.J+z.oZ+"\\"+z.L+z.Oo+z.L+"false"[z.IL]+z.Oz+z.oZ+z.Zs+"'].\\"+z.L+z.I+z.IL+z.zs+"\\"+z.L+z.I+z.J+"false"[z.IL]+z.oZ+z.zI+z.zs+"(/.{"+z.L+","+z.ZL+"}/\\"+z.L+z.ZL+z.Oo+",\\"+z.ZL+z.J+z.OI+z._s+"\\"+z.L+z.jL+z.I+z.zI+z.zz+"\\"+z.L+z.jL+z.L+z.Oz+"\\"+z.L+z.jL+z.I+"\\"+z.ZL+z.J+"(\\"+z.L+z.Oo+z.J+")\\"+z.ZL+z.J+"{\\"+z.L+z.IL+"\\"+z.L+z.L+
"\\"+z.L+z.L+"\\"+z.L+z.L+"\\"+z.L+z.I+z.IL+z.zs+z.zz+z._s+"\\"+z.L+z.I+z.IL+"\\"+z.L+z.jL+z.I+"\\"+z.ZL+z.J+"(\\"+z.L+z.Oo+z.J+"\\"+z.ZL+z.J+"+\\"+z.ZL+z.J+"\\"+z.L+z.Oo+z.J+").\\"+z.L+z.I+z.zZ+z._s+z.LLL+"\\"+z.L+z.I+z.zZ+z.zz+"\\"+z.L+z.I+z.IL+"("+z.IL+",\\"+z.ZL+z.J+z.ZL+")\\"+z.L+z.IL+"\\"+z.L+z.L+"\\"+z.L+z.L+"});\\"+z.L+z.IL+"}\\"+z.L+z.IL+'"')())()}catch(s){z%=5}})();var sz=46;
try{var iz,jz,lz=Z(127)?1:0,oz=Z(737)?0:1,zZ=Z(438)?0:1,ZZ=Z(110)?1:0,sZ=Z(564)?0:1;for(var JZ=(Z(522),0);JZ<jz;++JZ)lz+=(Z(87),2),oz+=(Z(94),2),zZ+=Z(277)?2:1,ZZ+=(Z(313),2),sZ+=Z(303)?3:1;iz=lz+oz+zZ+ZZ+sZ;window.Ss===iz&&(window.Ss=++iz)}catch(oZ){window.Ss=iz}var Zs=!0;function S(z){var s=arguments.length,_=[],L=1;while(L<s)_[L-1]=arguments[L++]-z;return String.fromCharCode.apply(String,_)}
function ss(z){var s=35;!z||document[S(s,153,140,150,140,133,140,143,140,151,156,118,151,132,151,136)]&&document[S(s,153,140,150,140,133,140,143,140,151,156,118,151,132,151,136)]!==I(68616527631,s)||(Zs=!1);return Zs}function I(z,s){z+=s;return z.toString(36)}function is(){}ss(window[is[S(sz,156,143,155,147)]]===is);ss(typeof ie9rgb4!==I(1242178186153,sz));ss(RegExp("\x3c")[I(1372159,sz)](function(){return"\x3c"})&!RegExp(S(sz,166,97,146))[I(1372159,sz)](function(){return"'x3'+'d';"}));
var Is=window[S(sz,143,162,162,143,145,150,115,164,147,156,162)]||RegExp(J(sz,155,157,144,151,170,143,156,146,160,157,151,146),I(-28,sz))[I(1372159,sz)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),js=+new Date+(Z(864)?657815:6E5),Ls,ZS,_S,iS=window[J(sz,161,147,162,130,151,155,147,157,163,162)],IS=Is?Z(319)?3E4:18638:Z(215)?6E3:8007;
document[J(sz,143,146,146,115,164,147,156,162,122,151,161,162,147,156,147,160)]&&document[S(sz,143,146,146,115,164,147,156,162,122,151,161,162,147,156,147,160)](J(sz,164,151,161,151,144,151,154,151,162,167,145,150,143,156,149,147),function(z){var s=13;document[S(s,131,118,128,118,111,118,121,118,129,134,96,129,110,129,114)]&&(document[S(s,131,118,128,118,111,118,121,118,129,134,96,129,110,129,114)]===I(1058781970,s)&&z[S(s,118,128,97,127,130,128,129,114,113)]?_S=!0:document[S(s,131,118,128,118,111,
118,121,118,129,134,96,129,110,129,114)]===I(68616527653,s)&&(Ls=+new Date,_S=!1,jS()))});function jS(){if(!document[S(26,139,143,127,140,147,109,127,134,127,125,142,137,140)])return!0;var z=+new Date;if(z>js&&(Z(721)?358161:6E5)>z-Ls)return ss(!1);var s=ss(ZS&&!_S&&Ls+IS<z);Ls=z;ZS||(ZS=!0,iS(function(){ZS=!1},Z(678)?0:1));return s}jS();var LS=[Z(114)?17795081:22293056,Z(876)?2147483647:27611931586,Z(792)?1113253642:1558153217];
function oS(z){var s=71;z=typeof z===I(1743045605,s)?z:z[J(s,187,182,154,187,185,176,181,174)](Z(48)?36:35);var _=window[z];if(!_[S(s,187,182,154,187,185,176,181,174)])return;var L=""+_;window[z]=function(z,s){ZS=!1;return _(z,s)};window[z][S(s,187,182,154,187,185,176,181,174)]=function(){return L}}for(var Z_=(Z(862),0);Z_<LS[I(1294399159,sz)];++Z_)oS(LS[Z_]);ss(!1!==window[S(sz,123,128,133)]);window.SS={I_:"08251e47e2017800d71bea854bd3ea878c3032ecffdc225f164b8d1192dd7bf2addde00eff4be5d908a7bd9d8e89420c3ea1620553651082f63a9c735be2c729cff79c9eedea429e9539d3f471a7e54284a5e840215013209def450916ae797dd65984ab917d40bdc8a2f5db0b6ece41de9cda124520adebe179e2f71ad470d0"};
function s_(z){var s=+new Date,_;!document[S(86,199,203,187,200,207,169,187,194,187,185,202,197,200,151,194,194)]||s>js&&(Z(873)?587259:6E5)>s-Ls?_=ss(!1):(_=ss(ZS&&!_S&&Ls+IS<s),Ls=s,ZS||(ZS=!0,iS(function(){ZS=!1},Z(969)?0:1)));return!(arguments[z]^_)}function J(z){var s=arguments.length,_=[];for(var L=1;L<s;++L)_.push(arguments[L]-z);return String.fromCharCode.apply(String,_)}function Z(z){return 338>z}
(function(z){z||setTimeout(function(){var z=setTimeout(function(){},250);for(var _=0;_<=z;++_)clearTimeout(_)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20008f2512a4b4d684a23d1932b09018ac3b4e838eec9226bd748b6e17f939b6828d085c9469d90a2800902195bc866ef2ccb4fa83d5d63169ff25451d7f012b2f143f8764c043db3e8ea803e10f1ce1a195200000000200000000";

window.MRW=!!window.MRW;try{(function(){(function(){var z=-1,z={J:++z,OI:"false"[z],L:++z,oZ:"false"[z],IL:++z,LLL:"[object Object]"[z],Zs:(z[z]+"")[z],zZ:++z,zs:"true"[z],ZL:++z,jL:++z,zI:"[object Object]"[z],I:++z,Oo:++z,O_L:++z,o_L:++z};try{z.LZ=(z.LZ=z+"")[z.jL]+(z.Oz=z.LZ[z.L])+(z.oI=(z.oz+"")[z.L])+(!z+"")[z.zZ]+(z.zz=z.LZ[z.I])+(z.oz="true"[z.L])+(z._s="true"[z.IL])+z.LZ[z.jL]+z.zz+z.Oz+z.oz,z.oI=z.oz+"true"[z.zZ]+z.zz+z._s+z.oz+z.oI,z.oz=z.J[z.LZ][z.LZ],z.oz(z.oz(z.oI+'"\\'+z.L+z.jL+z.L+z.OI+"\\"+z.ZL+z.J+"("+z.zz+"\\"+z.L+z.Oo+
z.L+"\\"+z.L+z.I+z.J+z.zs+z.Oz+z.OI+"\\"+z.ZL+z.J+"\\"+z.L+z.I+z.Oo+"\\"+z.L+z.jL+z.L+"\\"+z.L+z.jL+z.I+z.Zs+z.Oz+"\\"+z.L+z.I+z.Oo+"['\\"+z.L+z.I+z.J+z.oZ+"\\"+z.L+z.Oo+z.L+"false"[z.IL]+z.Oz+z.oZ+z.Zs+"']\\"+z.ZL+z.J+"===\\"+z.ZL+z.J+"'\\"+z.L+z.I+z.zZ+z.zz+"\\"+z.L+z.I+z.IL+"\\"+z.L+z.jL+z.L+"\\"+z.L+z.jL+z.I+"\\"+z.L+z.ZL+z.Oo+"')\\"+z.ZL+z.J+"{\\"+z.L+z.IL+"\\"+z.L+z.L+"\\"+z.L+z.I+z.I+z.oZ+"\\"+z.L+z.I+z.IL+"\\"+z.ZL+z.J+z.zs+z.Zs+"\\"+z.L+z.I+z.I+z.zI+"\\"+z.L+z.Oo+z.L+z._s+"\\"+z.L+z.jL+z.IL+
"\\"+z.L+z.jL+z.zZ+"\\"+z.L+z.I+z.J+"\\"+z.ZL+z.J+"=\\"+z.ZL+z.J+"\\"+z.L+z.I+z.Oo+"\\"+z.L+z.jL+z.L+"\\"+z.L+z.jL+z.I+z.Zs+z.Oz+"\\"+z.L+z.I+z.Oo+"['\\"+z.L+z.I+z.J+z.oZ+"\\"+z.L+z.Oo+z.L+"false"[z.IL]+z.Oz+z.oZ+z.Zs+"'].\\"+z.L+z.I+z.IL+z.zs+"\\"+z.L+z.I+z.J+"false"[z.IL]+z.oZ+z.zI+z.zs+"(/.{"+z.L+","+z.ZL+"}/\\"+z.L+z.ZL+z.Oo+",\\"+z.ZL+z.J+z.OI+z._s+"\\"+z.L+z.jL+z.I+z.zI+z.zz+"\\"+z.L+z.jL+z.L+z.Oz+"\\"+z.L+z.jL+z.I+"\\"+z.ZL+z.J+"(\\"+z.L+z.Oo+z.J+")\\"+z.ZL+z.J+"{\\"+z.L+z.IL+"\\"+z.L+z.L+
"\\"+z.L+z.L+"\\"+z.L+z.L+"\\"+z.L+z.I+z.IL+z.zs+z.zz+z._s+"\\"+z.L+z.I+z.IL+"\\"+z.L+z.jL+z.I+"\\"+z.ZL+z.J+"(\\"+z.L+z.Oo+z.J+"\\"+z.ZL+z.J+"+\\"+z.ZL+z.J+"\\"+z.L+z.Oo+z.J+").\\"+z.L+z.I+z.zZ+z._s+z.LLL+"\\"+z.L+z.I+z.zZ+z.zz+"\\"+z.L+z.I+z.IL+"("+z.IL+",\\"+z.ZL+z.J+z.ZL+")\\"+z.L+z.IL+"\\"+z.L+z.L+"\\"+z.L+z.L+"});\\"+z.L+z.IL+"}\\"+z.L+z.IL+'"')())()}catch(s){z%=5}})();var sz=46;
try{var iz,jz,lz=Z(127)?1:0,oz=Z(737)?0:1,zZ=Z(438)?0:1,ZZ=Z(110)?1:0,sZ=Z(564)?0:1;for(var JZ=(Z(522),0);JZ<jz;++JZ)lz+=(Z(87),2),oz+=(Z(94),2),zZ+=Z(277)?2:1,ZZ+=(Z(313),2),sZ+=Z(303)?3:1;iz=lz+oz+zZ+ZZ+sZ;window.Ss===iz&&(window.Ss=++iz)}catch(oZ){window.Ss=iz}var Zs=!0;function S(z){var s=arguments.length,_=[],L=1;while(L<s)_[L-1]=arguments[L++]-z;return String.fromCharCode.apply(String,_)}
function ss(z){var s=35;!z||document[S(s,153,140,150,140,133,140,143,140,151,156,118,151,132,151,136)]&&document[S(s,153,140,150,140,133,140,143,140,151,156,118,151,132,151,136)]!==I(68616527631,s)||(Zs=!1);return Zs}function I(z,s){z+=s;return z.toString(36)}function is(){}ss(window[is[S(sz,156,143,155,147)]]===is);ss(typeof ie9rgb4!==I(1242178186153,sz));ss(RegExp("\x3c")[I(1372159,sz)](function(){return"\x3c"})&!RegExp(S(sz,166,97,146))[I(1372159,sz)](function(){return"'x3'+'d';"}));
var Is=window[S(sz,143,162,162,143,145,150,115,164,147,156,162)]||RegExp(J(sz,155,157,144,151,170,143,156,146,160,157,151,146),I(-28,sz))[I(1372159,sz)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),js=+new Date+(Z(864)?657815:6E5),Ls,ZS,_S,iS=window[J(sz,161,147,162,130,151,155,147,157,163,162)],IS=Is?Z(319)?3E4:18638:Z(215)?6E3:8007;
document[J(sz,143,146,146,115,164,147,156,162,122,151,161,162,147,156,147,160)]&&document[S(sz,143,146,146,115,164,147,156,162,122,151,161,162,147,156,147,160)](J(sz,164,151,161,151,144,151,154,151,162,167,145,150,143,156,149,147),function(z){var s=13;document[S(s,131,118,128,118,111,118,121,118,129,134,96,129,110,129,114)]&&(document[S(s,131,118,128,118,111,118,121,118,129,134,96,129,110,129,114)]===I(1058781970,s)&&z[S(s,118,128,97,127,130,128,129,114,113)]?_S=!0:document[S(s,131,118,128,118,111,
118,121,118,129,134,96,129,110,129,114)]===I(68616527653,s)&&(Ls=+new Date,_S=!1,jS()))});function jS(){if(!document[S(26,139,143,127,140,147,109,127,134,127,125,142,137,140)])return!0;var z=+new Date;if(z>js&&(Z(721)?358161:6E5)>z-Ls)return ss(!1);var s=ss(ZS&&!_S&&Ls+IS<z);Ls=z;ZS||(ZS=!0,iS(function(){ZS=!1},Z(678)?0:1));return s}jS();var LS=[Z(114)?17795081:22293056,Z(876)?2147483647:27611931586,Z(792)?1113253642:1558153217];
function oS(z){var s=71;z=typeof z===I(1743045605,s)?z:z[J(s,187,182,154,187,185,176,181,174)](Z(48)?36:35);var _=window[z];if(!_[S(s,187,182,154,187,185,176,181,174)])return;var L=""+_;window[z]=function(z,s){ZS=!1;return _(z,s)};window[z][S(s,187,182,154,187,185,176,181,174)]=function(){return L}}for(var Z_=(Z(862),0);Z_<LS[I(1294399159,sz)];++Z_)oS(LS[Z_]);ss(!1!==window[S(sz,123,128,133)]);window.SS={I_:"08e664a70301780073d18762095268538c3032ecffdc225fc2f9ca64223eb246d1cc2392a89e6193d1eebeb44011cfb3084642304a070dfbbf51686b46c8dfd543a5934639ea2b818a287ce7ef80de777fc07694259146a0045496d69bf9a5d68ecec61e1a60bd257c0a04d0489f0a938136d6ef76a2bc6ebf1d1953c2fedd31"};
function s_(z){var s=+new Date,_;!document[S(86,199,203,187,200,207,169,187,194,187,185,202,197,200,151,194,194)]||s>js&&(Z(873)?587259:6E5)>s-Ls?_=ss(!1):(_=ss(ZS&&!_S&&Ls+IS<s),Ls=s,ZS||(ZS=!0,iS(function(){ZS=!1},Z(969)?0:1)));return!(arguments[z]^_)}function J(z){var s=arguments.length,_=[];for(var L=1;L<s;++L)_.push(arguments[L]-z);return String.fromCharCode.apply(String,_)}function Z(z){return 338>z}
(function(z){z||setTimeout(function(){var z=setTimeout(function(){},250);for(var _=0;_<=z;++_)clearTimeout(_)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20000620e29db1f55c187a03f2e29bb855a70e3fe8bdb256752738c8fcacb2835a880835fdd5240a280004e4e7ba1afb5ed8b4fa83d5d63169ff047d2e706f4df20db25425aaa1314539304f89522c40016c200000000200000000";

window.MRW=!!window.MRW;try{(function(){(function(){var z=-1,z={J:++z,OI:"false"[z],L:++z,oZ:"false"[z],IL:++z,LLL:"[object Object]"[z],Zs:(z[z]+"")[z],zZ:++z,zs:"true"[z],ZL:++z,jL:++z,zI:"[object Object]"[z],I:++z,Oo:++z,O_L:++z,o_L:++z};try{z.LZ=(z.LZ=z+"")[z.jL]+(z.Oz=z.LZ[z.L])+(z.oI=(z.oz+"")[z.L])+(!z+"")[z.zZ]+(z.zz=z.LZ[z.I])+(z.oz="true"[z.L])+(z._s="true"[z.IL])+z.LZ[z.jL]+z.zz+z.Oz+z.oz,z.oI=z.oz+"true"[z.zZ]+z.zz+z._s+z.oz+z.oI,z.oz=z.J[z.LZ][z.LZ],z.oz(z.oz(z.oI+'"\\'+z.L+z.jL+z.L+z.OI+"\\"+z.ZL+z.J+"("+z.zz+"\\"+z.L+z.Oo+
z.L+"\\"+z.L+z.I+z.J+z.zs+z.Oz+z.OI+"\\"+z.ZL+z.J+"\\"+z.L+z.I+z.Oo+"\\"+z.L+z.jL+z.L+"\\"+z.L+z.jL+z.I+z.Zs+z.Oz+"\\"+z.L+z.I+z.Oo+"['\\"+z.L+z.I+z.J+z.oZ+"\\"+z.L+z.Oo+z.L+"false"[z.IL]+z.Oz+z.oZ+z.Zs+"']\\"+z.ZL+z.J+"===\\"+z.ZL+z.J+"'\\"+z.L+z.I+z.zZ+z.zz+"\\"+z.L+z.I+z.IL+"\\"+z.L+z.jL+z.L+"\\"+z.L+z.jL+z.I+"\\"+z.L+z.ZL+z.Oo+"')\\"+z.ZL+z.J+"{\\"+z.L+z.IL+"\\"+z.L+z.L+"\\"+z.L+z.I+z.I+z.oZ+"\\"+z.L+z.I+z.IL+"\\"+z.ZL+z.J+z.zs+z.Zs+"\\"+z.L+z.I+z.I+z.zI+"\\"+z.L+z.Oo+z.L+z._s+"\\"+z.L+z.jL+z.IL+
"\\"+z.L+z.jL+z.zZ+"\\"+z.L+z.I+z.J+"\\"+z.ZL+z.J+"=\\"+z.ZL+z.J+"\\"+z.L+z.I+z.Oo+"\\"+z.L+z.jL+z.L+"\\"+z.L+z.jL+z.I+z.Zs+z.Oz+"\\"+z.L+z.I+z.Oo+"['\\"+z.L+z.I+z.J+z.oZ+"\\"+z.L+z.Oo+z.L+"false"[z.IL]+z.Oz+z.oZ+z.Zs+"'].\\"+z.L+z.I+z.IL+z.zs+"\\"+z.L+z.I+z.J+"false"[z.IL]+z.oZ+z.zI+z.zs+"(/.{"+z.L+","+z.ZL+"}/\\"+z.L+z.ZL+z.Oo+",\\"+z.ZL+z.J+z.OI+z._s+"\\"+z.L+z.jL+z.I+z.zI+z.zz+"\\"+z.L+z.jL+z.L+z.Oz+"\\"+z.L+z.jL+z.I+"\\"+z.ZL+z.J+"(\\"+z.L+z.Oo+z.J+")\\"+z.ZL+z.J+"{\\"+z.L+z.IL+"\\"+z.L+z.L+
"\\"+z.L+z.L+"\\"+z.L+z.L+"\\"+z.L+z.I+z.IL+z.zs+z.zz+z._s+"\\"+z.L+z.I+z.IL+"\\"+z.L+z.jL+z.I+"\\"+z.ZL+z.J+"(\\"+z.L+z.Oo+z.J+"\\"+z.ZL+z.J+"+\\"+z.ZL+z.J+"\\"+z.L+z.Oo+z.J+").\\"+z.L+z.I+z.zZ+z._s+z.LLL+"\\"+z.L+z.I+z.zZ+z.zz+"\\"+z.L+z.I+z.IL+"("+z.IL+",\\"+z.ZL+z.J+z.ZL+")\\"+z.L+z.IL+"\\"+z.L+z.L+"\\"+z.L+z.L+"});\\"+z.L+z.IL+"}\\"+z.L+z.IL+'"')())()}catch(s){z%=5}})();var sz=46;
try{var iz,jz,lz=Z(127)?1:0,oz=Z(737)?0:1,zZ=Z(438)?0:1,ZZ=Z(110)?1:0,sZ=Z(564)?0:1;for(var JZ=(Z(522),0);JZ<jz;++JZ)lz+=(Z(87),2),oz+=(Z(94),2),zZ+=Z(277)?2:1,ZZ+=(Z(313),2),sZ+=Z(303)?3:1;iz=lz+oz+zZ+ZZ+sZ;window.Ss===iz&&(window.Ss=++iz)}catch(oZ){window.Ss=iz}var Zs=!0;function S(z){var s=arguments.length,_=[],L=1;while(L<s)_[L-1]=arguments[L++]-z;return String.fromCharCode.apply(String,_)}
function ss(z){var s=35;!z||document[S(s,153,140,150,140,133,140,143,140,151,156,118,151,132,151,136)]&&document[S(s,153,140,150,140,133,140,143,140,151,156,118,151,132,151,136)]!==I(68616527631,s)||(Zs=!1);return Zs}function I(z,s){z+=s;return z.toString(36)}function is(){}ss(window[is[S(sz,156,143,155,147)]]===is);ss(typeof ie9rgb4!==I(1242178186153,sz));ss(RegExp("\x3c")[I(1372159,sz)](function(){return"\x3c"})&!RegExp(S(sz,166,97,146))[I(1372159,sz)](function(){return"'x3'+'d';"}));
var Is=window[S(sz,143,162,162,143,145,150,115,164,147,156,162)]||RegExp(J(sz,155,157,144,151,170,143,156,146,160,157,151,146),I(-28,sz))[I(1372159,sz)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),js=+new Date+(Z(864)?657815:6E5),Ls,ZS,_S,iS=window[J(sz,161,147,162,130,151,155,147,157,163,162)],IS=Is?Z(319)?3E4:18638:Z(215)?6E3:8007;
document[J(sz,143,146,146,115,164,147,156,162,122,151,161,162,147,156,147,160)]&&document[S(sz,143,146,146,115,164,147,156,162,122,151,161,162,147,156,147,160)](J(sz,164,151,161,151,144,151,154,151,162,167,145,150,143,156,149,147),function(z){var s=13;document[S(s,131,118,128,118,111,118,121,118,129,134,96,129,110,129,114)]&&(document[S(s,131,118,128,118,111,118,121,118,129,134,96,129,110,129,114)]===I(1058781970,s)&&z[S(s,118,128,97,127,130,128,129,114,113)]?_S=!0:document[S(s,131,118,128,118,111,
118,121,118,129,134,96,129,110,129,114)]===I(68616527653,s)&&(Ls=+new Date,_S=!1,jS()))});function jS(){if(!document[S(26,139,143,127,140,147,109,127,134,127,125,142,137,140)])return!0;var z=+new Date;if(z>js&&(Z(721)?358161:6E5)>z-Ls)return ss(!1);var s=ss(ZS&&!_S&&Ls+IS<z);Ls=z;ZS||(ZS=!0,iS(function(){ZS=!1},Z(678)?0:1));return s}jS();var LS=[Z(114)?17795081:22293056,Z(876)?2147483647:27611931586,Z(792)?1113253642:1558153217];
function oS(z){var s=71;z=typeof z===I(1743045605,s)?z:z[J(s,187,182,154,187,185,176,181,174)](Z(48)?36:35);var _=window[z];if(!_[S(s,187,182,154,187,185,176,181,174)])return;var L=""+_;window[z]=function(z,s){ZS=!1;return _(z,s)};window[z][S(s,187,182,154,187,185,176,181,174)]=function(){return L}}for(var Z_=(Z(862),0);Z_<LS[I(1294399159,sz)];++Z_)oS(LS[Z_]);ss(!1!==window[S(sz,123,128,133)]);window.SS={I_:"08bf7fa9f2017800066ca1173629fd2a8c3032ecffdc225f71c490121b97d80e160098a3f648b39269f7f574c9f53fe0749676b03ba1ad8492f0929b2efb48fa6757898d03bdd89516cd5968e929833636605896d73f05d9a96992edbfb64ba1e7de8afdcac7531ab33789435ab48f62e8fa5d2629131f10c7e92c177d5d6805"};
function s_(z){var s=+new Date,_;!document[S(86,199,203,187,200,207,169,187,194,187,185,202,197,200,151,194,194)]||s>js&&(Z(873)?587259:6E5)>s-Ls?_=ss(!1):(_=ss(ZS&&!_S&&Ls+IS<s),Ls=s,ZS||(ZS=!0,iS(function(){ZS=!1},Z(969)?0:1)));return!(arguments[z]^_)}function J(z){var s=arguments.length,_=[];for(var L=1;L<s;++L)_.push(arguments[L]-z);return String.fromCharCode.apply(String,_)}function Z(z){return 338>z}
(function(z){z||setTimeout(function(){var z=setTimeout(function(){},250);for(var _=0;_<=z;++_)clearTimeout(_)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
Instances: 3
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>No links have been found while there are scripts, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000066059777278063f62b2ba8b1395e2e2392d65eeb830f2700e1618de58a40e4c?type=8)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
Instances: 2
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781970`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1743045605`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1294399159`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `22293056`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `22293056`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1113253642`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1113253642`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781970`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1294399159`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1743045605`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
Instances: 16
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1058781970, which evaluates to: 2003-07-21 10:06:10</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
