
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:30:08


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 2 |
| Low | 10 |
| Informational | 6 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Absence of Anti-CSRF Tokens | Low | 10 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 7 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Dangerous JS Functions | Low | 4 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| In Page Banner Information Leak | Low | 3 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 12 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 5 | 
| Storable and Cacheable Content | Informational | 6 | 
| Timestamp Disclosure - Unix | Informational | 9 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.gif](https://drees.solidarites-sante.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.png](https://drees.solidarites-sante.gouv.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.jpg](https://drees.solidarites-sante.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css](https://drees.solidarites-sante.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js](https://drees.solidarites-sante.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.jpeg](https://drees.solidarites-sante.gouv.fr/core/*.jpeg)
  
  
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

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/comment/reply/](https://drees.solidarites-sante.gouv.fr/comment/reply/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="lien-solidaritesante  hidden-xs hidden-sm" href="https://solidarites-sante.gouv.fr/" target="_blank"><span>Accéder au site du ministère des Solidarités et de la Santé</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.307 0.166382H9.91517C9.53243 0.166382 9.22222 0.476594 9.22222 0.859336C9.22222 1.24208 9.53243 1.55229 9.91517 1.55229H12.634L5.98935 8.19695C5.71872 8.46759 5.71872 8.90631 5.98935 9.17695C6.12471 9.31223 6.30203 9.3799 6.47935 9.3799C6.65667 9.3799 6.83399 9.31223 6.96935 9.17695L13.614 2.53228V5.2512C13.614 5.63395 13.9242 5.94416 14.307 5.94416C14.6897 5.94416 14.9999 5.63395 14.9999 5.2512V0.859413C14.9999 0.476594 14.6897 0.166382 14.307 0.166382Z" fill="#E83D54"/>
      <path d="M11.4722 5.9441C11.0895 5.9441 10.7793 6.25431 10.7793 6.63705V13.4477H1.38591V4.05434H8.60634C8.98908 4.05434 9.29929 3.74412 9.29929 3.36138C9.29929 2.97864 8.98908 2.66843 8.60634 2.66843H0.692954C0.310213 2.66843 0 2.97864 0 3.36138V14.1407C0 14.5234 0.310213 14.8336 0.692954 14.8336H11.4722C11.855 14.8336 12.1652 14.5234 12.1652 14.1407V6.63705C12.1652 6.25431 11.855 5.9441 11.4722 5.9441Z" fill="#E83D54"/>
    </svg>
  </a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="lien-solidaritesante  hidden-xs hidden-sm" href="https://solidarites-sante.gouv.fr/" target="_blank"><span>Accéder au site du ministère des Solidarités et de la Santé</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.307 0.166382H9.91517C9.53243 0.166382 9.22222 0.476594 9.22222 0.859336C9.22222 1.24208 9.53243 1.55229 9.91517 1.55229H12.634L5.98935 8.19695C5.71872 8.46759 5.71872 8.90631 5.98935 9.17695C6.12471 9.31223 6.30203 9.3799 6.47935 9.3799C6.65667 9.3799 6.83399 9.31223 6.96935 9.17695L13.614 2.53228V5.2512C13.614 5.63395 13.9242 5.94416 14.307 5.94416C14.6897 5.94416 14.9999 5.63395 14.9999 5.2512V0.859413C14.9999 0.476594 14.6897 0.166382 14.307 0.166382Z" fill="#E83D54"/>
      <path d="M11.4722 5.9441C11.0895 5.9441 10.7793 6.25431 10.7793 6.63705V13.4477H1.38591V4.05434H8.60634C8.98908 4.05434 9.29929 3.74412 9.29929 3.36138C9.29929 2.97864 8.98908 2.66843 8.60634 2.66843H0.692954C0.310213 2.66843 0 2.97864 0 3.36138V14.1407C0 14.5234 0.310213 14.8336 0.692954 14.8336H11.4722C11.855 14.8336 12.1652 14.5234 12.1652 14.1407V6.63705C12.1652 6.25431 11.855 5.9441 11.4722 5.9441Z" fill="#E83D54"/>
    </svg>
  </a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="lien-solidaritesante  hidden-xs hidden-sm" href="https://solidarites-sante.gouv.fr/" target="_blank"><span>Accéder au site du ministère des Solidarités et de la Santé</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.307 0.166382H9.91517C9.53243 0.166382 9.22222 0.476594 9.22222 0.859336C9.22222 1.24208 9.53243 1.55229 9.91517 1.55229H12.634L5.98935 8.19695C5.71872 8.46759 5.71872 8.90631 5.98935 9.17695C6.12471 9.31223 6.30203 9.3799 6.47935 9.3799C6.65667 9.3799 6.83399 9.31223 6.96935 9.17695L13.614 2.53228V5.2512C13.614 5.63395 13.9242 5.94416 14.307 5.94416C14.6897 5.94416 14.9999 5.63395 14.9999 5.2512V0.859413C14.9999 0.476594 14.6897 0.166382 14.307 0.166382Z" fill="#E83D54"/>
      <path d="M11.4722 5.9441C11.0895 5.9441 10.7793 6.25431 10.7793 6.63705V13.4477H1.38591V4.05434H8.60634C8.98908 4.05434 9.29929 3.74412 9.29929 3.36138C9.29929 2.97864 8.98908 2.66843 8.60634 2.66843H0.692954C0.310213 2.66843 0 2.97864 0 3.36138V14.1407C0 14.5234 0.310213 14.8336 0.692954 14.8336H11.4722C11.855 14.8336 12.1652 14.5234 12.1652 14.1407V6.63705C12.1652 6.25431 11.855 5.9441 11.4722 5.9441Z" fill="#E83D54"/>
    </svg>
  </a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/admin/](https://drees.solidarites-sante.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="lien-solidaritesante  hidden-xs hidden-sm" href="https://solidarites-sante.gouv.fr/" target="_blank"><span>Accéder au site du ministère des Solidarités et de la Santé</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.307 0.166382H9.91517C9.53243 0.166382 9.22222 0.476594 9.22222 0.859336C9.22222 1.24208 9.53243 1.55229 9.91517 1.55229H12.634L5.98935 8.19695C5.71872 8.46759 5.71872 8.90631 5.98935 9.17695C6.12471 9.31223 6.30203 9.3799 6.47935 9.3799C6.65667 9.3799 6.83399 9.31223 6.96935 9.17695L13.614 2.53228V5.2512C13.614 5.63395 13.9242 5.94416 14.307 5.94416C14.6897 5.94416 14.9999 5.63395 14.9999 5.2512V0.859413C14.9999 0.476594 14.6897 0.166382 14.307 0.166382Z" fill="#E83D54"/>
      <path d="M11.4722 5.9441C11.0895 5.9441 10.7793 6.25431 10.7793 6.63705V13.4477H1.38591V4.05434H8.60634C8.98908 4.05434 9.29929 3.74412 9.29929 3.36138C9.29929 2.97864 8.98908 2.66843 8.60634 2.66843H0.692954C0.310213 2.66843 0 2.97864 0 3.36138V14.1407C0 14.5234 0.310213 14.8336 0.692954 14.8336H11.4722C11.855 14.8336 12.1652 14.5234 12.1652 14.1407V6.63705C12.1652 6.25431 11.855 5.9441 11.4722 5.9441Z" fill="#E83D54"/>
    </svg>
  </a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="lien-solidaritesante  hidden-xs hidden-sm" href="https://solidarites-sante.gouv.fr/" target="_blank"><span>Accéder au site du ministère des Solidarités et de la Santé</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.307 0.166382H9.91517C9.53243 0.166382 9.22222 0.476594 9.22222 0.859336C9.22222 1.24208 9.53243 1.55229 9.91517 1.55229H12.634L5.98935 8.19695C5.71872 8.46759 5.71872 8.90631 5.98935 9.17695C6.12471 9.31223 6.30203 9.3799 6.47935 9.3799C6.65667 9.3799 6.83399 9.31223 6.96935 9.17695L13.614 2.53228V5.2512C13.614 5.63395 13.9242 5.94416 14.307 5.94416C14.6897 5.94416 14.9999 5.63395 14.9999 5.2512V0.859413C14.9999 0.476594 14.6897 0.166382 14.307 0.166382Z" fill="#E83D54"/>
      <path d="M11.4722 5.9441C11.0895 5.9441 10.7793 6.25431 10.7793 6.63705V13.4477H1.38591V4.05434H8.60634C8.98908 4.05434 9.29929 3.74412 9.29929 3.36138C9.29929 2.97864 8.98908 2.66843 8.60634 2.66843H0.692954C0.310213 2.66843 0 2.97864 0 3.36138V14.1407C0 14.5234 0.310213 14.8336 0.692954 14.8336H11.4722C11.855 14.8336 12.1652 14.5234 12.1652 14.1407V6.63705C12.1652 6.25431 11.855 5.9441 11.4722 5.9441Z" fill="#E83D54"/>
    </svg>
  </a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="lien-solidaritesante  hidden-xs hidden-sm" href="https://solidarites-sante.gouv.fr/" target="_blank"><span>Accéder au site du ministère des Solidarités et de la Santé</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.307 0.166382H9.91517C9.53243 0.166382 9.22222 0.476594 9.22222 0.859336C9.22222 1.24208 9.53243 1.55229 9.91517 1.55229H12.634L5.98935 8.19695C5.71872 8.46759 5.71872 8.90631 5.98935 9.17695C6.12471 9.31223 6.30203 9.3799 6.47935 9.3799C6.65667 9.3799 6.83399 9.31223 6.96935 9.17695L13.614 2.53228V5.2512C13.614 5.63395 13.9242 5.94416 14.307 5.94416C14.6897 5.94416 14.9999 5.63395 14.9999 5.2512V0.859413C14.9999 0.476594 14.6897 0.166382 14.307 0.166382Z" fill="#E83D54"/>
      <path d="M11.4722 5.9441C11.0895 5.9441 10.7793 6.25431 10.7793 6.63705V13.4477H1.38591V4.05434H8.60634C8.98908 4.05434 9.29929 3.74412 9.29929 3.36138C9.29929 2.97864 8.98908 2.66843 8.60634 2.66843H0.692954C0.310213 2.66843 0 2.97864 0 3.36138V14.1407C0 14.5234 0.310213 14.8336 0.692954 14.8336H11.4722C11.855 14.8336 12.1652 14.5234 12.1652 14.1407V6.63705C12.1652 6.25431 11.855 5.9441 11.4722 5.9441Z" fill="#E83D54"/>
    </svg>
  </a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.css$](https://drees.solidarites-sante.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="lien-solidaritesante  hidden-xs hidden-sm" href="https://solidarites-sante.gouv.fr/" target="_blank"><span>Accéder au site du ministère des Solidarités et de la Santé</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.307 0.166382H9.91517C9.53243 0.166382 9.22222 0.476594 9.22222 0.859336C9.22222 1.24208 9.53243 1.55229 9.91517 1.55229H12.634L5.98935 8.19695C5.71872 8.46759 5.71872 8.90631 5.98935 9.17695C6.12471 9.31223 6.30203 9.3799 6.47935 9.3799C6.65667 9.3799 6.83399 9.31223 6.96935 9.17695L13.614 2.53228V5.2512C13.614 5.63395 13.9242 5.94416 14.307 5.94416C14.6897 5.94416 14.9999 5.63395 14.9999 5.2512V0.859413C14.9999 0.476594 14.6897 0.166382 14.307 0.166382Z" fill="#E83D54"/>
      <path d="M11.4722 5.9441C11.0895 5.9441 10.7793 6.25431 10.7793 6.63705V13.4477H1.38591V4.05434H8.60634C8.98908 4.05434 9.29929 3.74412 9.29929 3.36138C9.29929 2.97864 8.98908 2.66843 8.60634 2.66843H0.692954C0.310213 2.66843 0 2.97864 0 3.36138V14.1407C0 14.5234 0.310213 14.8336 0.692954 14.8336H11.4722C11.855 14.8336 12.1652 14.5234 12.1652 14.1407V6.63705C12.1652 6.25431 11.855 5.9441 11.4722 5.9441Z" fill="#E83D54"/>
    </svg>
  </a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.js$](https://drees.solidarites-sante.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="lien-solidaritesante  hidden-xs hidden-sm" href="https://solidarites-sante.gouv.fr/" target="_blank"><span>Accéder au site du ministère des Solidarités et de la Santé</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.307 0.166382H9.91517C9.53243 0.166382 9.22222 0.476594 9.22222 0.859336C9.22222 1.24208 9.53243 1.55229 9.91517 1.55229H12.634L5.98935 8.19695C5.71872 8.46759 5.71872 8.90631 5.98935 9.17695C6.12471 9.31223 6.30203 9.3799 6.47935 9.3799C6.65667 9.3799 6.83399 9.31223 6.96935 9.17695L13.614 2.53228V5.2512C13.614 5.63395 13.9242 5.94416 14.307 5.94416C14.6897 5.94416 14.9999 5.63395 14.9999 5.2512V0.859413C14.9999 0.476594 14.6897 0.166382 14.307 0.166382Z" fill="#E83D54"/>
      <path d="M11.4722 5.9441C11.0895 5.9441 10.7793 6.25431 10.7793 6.63705V13.4477H1.38591V4.05434H8.60634C8.98908 4.05434 9.29929 3.74412 9.29929 3.36138C9.29929 2.97864 8.98908 2.66843 8.60634 2.66843H0.692954C0.310213 2.66843 0 2.97864 0 3.36138V14.1407C0 14.5234 0.310213 14.8336 0.692954 14.8336H11.4722C11.855 14.8336 12.1652 14.5234 12.1652 14.1407V6.63705C12.1652 6.25431 11.855 5.9441 11.4722 5.9441Z" fill="#E83D54"/>
    </svg>
  </a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.svg](https://drees.solidarites-sante.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="lien-solidaritesante  hidden-xs hidden-sm" href="https://solidarites-sante.gouv.fr/" target="_blank"><span>Accéder au site du ministère des Solidarités et de la Santé</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.307 0.166382H9.91517C9.53243 0.166382 9.22222 0.476594 9.22222 0.859336C9.22222 1.24208 9.53243 1.55229 9.91517 1.55229H12.634L5.98935 8.19695C5.71872 8.46759 5.71872 8.90631 5.98935 9.17695C6.12471 9.31223 6.30203 9.3799 6.47935 9.3799C6.65667 9.3799 6.83399 9.31223 6.96935 9.17695L13.614 2.53228V5.2512C13.614 5.63395 13.9242 5.94416 14.307 5.94416C14.6897 5.94416 14.9999 5.63395 14.9999 5.2512V0.859413C14.9999 0.476594 14.6897 0.166382 14.307 0.166382Z" fill="#E83D54"/>
      <path d="M11.4722 5.9441C11.0895 5.9441 10.7793 6.25431 10.7793 6.63705V13.4477H1.38591V4.05434H8.60634C8.98908 4.05434 9.29929 3.74412 9.29929 3.36138C9.29929 2.97864 8.98908 2.66843 8.60634 2.66843H0.692954C0.310213 2.66843 0 2.97864 0 3.36138V14.1407C0 14.5234 0.310213 14.8336 0.692954 14.8336H11.4722C11.855 14.8336 12.1652 14.5234 12.1652 14.1407V6.63705C12.1652 6.25431 11.855 5.9441 11.4722 5.9441Z" fill="#E83D54"/>
    </svg>
  </a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="lien-solidaritesante  hidden-xs hidden-sm" href="https://solidarites-sante.gouv.fr/" target="_blank"><span>Accéder au site du ministère des Solidarités et de la Santé</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.307 0.166382H9.91517C9.53243 0.166382 9.22222 0.476594 9.22222 0.859336C9.22222 1.24208 9.53243 1.55229 9.91517 1.55229H12.634L5.98935 8.19695C5.71872 8.46759 5.71872 8.90631 5.98935 9.17695C6.12471 9.31223 6.30203 9.3799 6.47935 9.3799C6.65667 9.3799 6.83399 9.31223 6.96935 9.17695L13.614 2.53228V5.2512C13.614 5.63395 13.9242 5.94416 14.307 5.94416C14.6897 5.94416 14.9999 5.63395 14.9999 5.2512V0.859413C14.9999 0.476594 14.6897 0.166382 14.307 0.166382Z" fill="#E83D54"/>
      <path d="M11.4722 5.9441C11.0895 5.9441 10.7793 6.25431 10.7793 6.63705V13.4477H1.38591V4.05434H8.60634C8.98908 4.05434 9.29929 3.74412 9.29929 3.36138C9.29929 2.97864 8.98908 2.66843 8.60634 2.66843H0.692954C0.310213 2.66843 0 2.97864 0 3.36138V14.1407C0 14.5234 0.310213 14.8336 0.692954 14.8336H11.4722C11.855 14.8336 12.1652 14.5234 12.1652 14.1407V6.63705C12.1652 6.25431 11.855 5.9441 11.4722 5.9441Z" fill="#E83D54"/>
    </svg>
  </a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.svg](https://drees.solidarites-sante.gouv.fr/profiles/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="lien-solidaritesante  hidden-xs hidden-sm" href="https://solidarites-sante.gouv.fr/" target="_blank"><span>Accéder au site du ministère des Solidarités et de la Santé</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.307 0.166382H9.91517C9.53243 0.166382 9.22222 0.476594 9.22222 0.859336C9.22222 1.24208 9.53243 1.55229 9.91517 1.55229H12.634L5.98935 8.19695C5.71872 8.46759 5.71872 8.90631 5.98935 9.17695C6.12471 9.31223 6.30203 9.3799 6.47935 9.3799C6.65667 9.3799 6.83399 9.31223 6.96935 9.17695L13.614 2.53228V5.2512C13.614 5.63395 13.9242 5.94416 14.307 5.94416C14.6897 5.94416 14.9999 5.63395 14.9999 5.2512V0.859413C14.9999 0.476594 14.6897 0.166382 14.307 0.166382Z" fill="#E83D54"/>
      <path d="M11.4722 5.9441C11.0895 5.9441 10.7793 6.25431 10.7793 6.63705V13.4477H1.38591V4.05434H8.60634C8.98908 4.05434 9.29929 3.74412 9.29929 3.36138C9.29929 2.97864 8.98908 2.66843 8.60634 2.66843H0.692954C0.310213 2.66843 0 2.97864 0 3.36138V14.1407C0 14.5234 0.310213 14.8336 0.692954 14.8336H11.4722C11.855 14.8336 12.1652 14.5234 12.1652 14.1407V6.63705C12.1652 6.25431 11.855 5.9441 11.4722 5.9441Z" fill="#E83D54"/>
    </svg>
  </a>`
  
  
  
  
Instances: 11
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form  class="solr-search-form" data-drupal-selector="solr-search-form-2" action="/" method="post" id="solr-search-form--2" accept-charset="UTF-8" role="search" >`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form  class="solr-search-form" data-drupal-selector="solr-search-form" action="/core/*.js$" method="post" id="solr-search-form" accept-charset="UTF-8" role="search" >`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form  class="solr-search-form" data-drupal-selector="solr-search-form" action="/core/*.css$" method="post" id="solr-search-form" accept-charset="UTF-8" role="search" >`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form  class="solr-search-form" data-drupal-selector="solr-search-form-2" action="/" method="post" id="solr-search-form--2" accept-charset="UTF-8" role="search" >`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form  class="solr-search-form" data-drupal-selector="solr-search-form" action="/sitemap.xml" method="post" id="solr-search-form" accept-charset="UTF-8" role="search" >`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form  class="solr-search-form" data-drupal-selector="solr-search-form" action="/" method="post" id="solr-search-form" accept-charset="UTF-8" role="search" >`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form  class="solr-search-form" data-drupal-selector="solr-search-form-2" action="/core/*.js$" method="post" id="solr-search-form--2" accept-charset="UTF-8" role="search" >`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form  class="solr-search-form" data-drupal-selector="solr-search-form" action="/" method="post" id="solr-search-form" accept-charset="UTF-8" role="search" >`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form  class="solr-search-form" data-drupal-selector="solr-search-form-2" action="/core/*.css$" method="post" id="solr-search-form--2" accept-charset="UTF-8" role="search" >`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form  class="solr-search-form" data-drupal-selector="solr-search-form-2" action="/sitemap.xml" method="post" id="solr-search-form--2" accept-charset="UTF-8" role="search" >`
  
  
  
  
Instances: 10
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 2: "edit-solr-search--2" "form_build_id" "form_id" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Big Redirect Detected (Potential Sensitive Information Leak)
##### Low (Medium)
  
  
  
  
#### Description
<p>The server has responded with a redirect that seems to provide a large response. This may indicate that although the server sent a redirect it also responded with body content (which may include sensitive details, PII, etc.).</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/documents-de-reference/qui-sommes-nous](https://drees.solidarites-sante.gouv.fr/documents-de-reference/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.css$](https://drees.solidarites-sante.gouv.fr/profiles/*.css$)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.svg](https://drees.solidarites-sante.gouv.fr/core/*.svg)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `POST`
  
  
  
  
Instances: 7
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 71 [http://drees.solidarites-sante.gouv.fr/article/presentation-de-la-drees].</p><p>Predicted response size: 371.</p><p>Response Body Length: 376.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/robots.txt](https://drees.solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-drees-site-v2.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-drees-site-v2.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-drees-site-v2.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-drees-site-v2.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-drees-site-v2.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-drees-site-v2.cegedim.cloud-HTTP`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sites/default/files/js/js_EQoQwo7kdEdBp-tIY6UsuV6_lYz9eu2sKTJLK2uhB_s.js](https://drees.solidarites-sante.gouv.fr/sites/default/files/js/js_EQoQwo7kdEdBp-tIY6UsuV6_lYz9eu2sKTJLK2uhB_s.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/evaluation-de-la-strategie-nationale-de-sante](https://drees.solidarites-sante.gouv.fr/evaluation-de-la-strategie-nationale-de-sante)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/evaluation-des-experimentations-dinnovation-en-sante-article-51](https://drees.solidarites-sante.gouv.fr/evaluation-des-experimentations-dinnovation-en-sante-article-51)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/libraries/tarteaucitron.js/tarteaucitron.js?v=1.3](https://drees.solidarites-sante.gouv.fr/libraries/tarteaucitron.js/tarteaucitron.js?v=1.3)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
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
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.jpeg](https://drees.solidarites-sante.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.png](https://drees.solidarites-sante.gouv.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js](https://drees.solidarites-sante.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.jpg](https://drees.solidarites-sante.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css](https://drees.solidarites-sante.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.gif](https://drees.solidarites-sante.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
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
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/article/espace-presse](https://drees.solidarites-sante.gouv.fr/article/espace-presse)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/index.php/user/login/](https://drees.solidarites-sante.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/robots.txt](https://drees.solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/filter/tips](https://drees.solidarites-sante.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/user/login/](https://drees.solidarites-sante.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/user/password/](https://drees.solidarites-sante.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/index.php/user/password/](https://drees.solidarites-sante.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/index.php/filter/tips](https://drees.solidarites-sante.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/recherche?f%5B0%5D=content_type%3A6](https://drees.solidarites-sante.gouv.fr/recherche?f%5B0%5D=content_type%3A6)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### In Page Banner Information Leak
##### Low (High)
  
  
  
  
#### Description
<p>The server returned a version banner string in the response content. Such information leaks may allow attackers to further target specific issues impacting the product and version in use.</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/](https://drees.solidarites-sante.gouv.fr/profiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/](https://drees.solidarites-sante.gouv.fr/core/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/web.config](https://drees.solidarites-sante.gouv.fr/web.config)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38`
  
  
  
  
Instances: 3
  
### Solution
<p>Configure the server to prevent such information leaks. For example:</p><p>Under Tomcat this is done via the "server" directive and implementation of custom error pages.</p><p>Under Apache this is done via the "ServerSignature" and "ServerTokens" directives.</p>
  
### Other information
<p>There is a chance that the highlight in the finding is on a value in the headers, versus the actual matched string in the response body.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Server Leaks Version Information via "Server" HTTP Response Header Field
##### Low (High)
  
  
  
  
#### Description
<p>The web/application server is leaking version information via the "Server" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.jpg](https://drees.solidarites-sante.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38 (Debian)`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js](https://drees.solidarites-sante.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38 (Debian)`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.jpeg](https://drees.solidarites-sante.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38 (Debian)`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38 (Debian)`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/robots.txt](https://drees.solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38 (Debian)`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.gif](https://drees.solidarites-sante.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38 (Debian)`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css](https://drees.solidarites-sante.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38 (Debian)`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38 (Debian)`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38 (Debian)`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38 (Debian)`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38 (Debian)`
  
  
  
  
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

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.jpeg](https://drees.solidarites-sante.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js](https://drees.solidarites-sante.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/robots.txt](https://drees.solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.jpg](https://drees.solidarites-sante.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css](https://drees.solidarites-sante.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.gif](https://drees.solidarites-sante.gouv.fr/core/*.gif)
  
  
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
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/modules/custom/drees_site_deploy/images/thematics/icon_darken_social.svg](https://drees.solidarites-sante.gouv.fr/modules/custom/drees_site_deploy/images/thematics/icon_darken_social.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sites/default/files/js/js_EQoQwo7kdEdBp-tIY6UsuV6_lYz9eu2sKTJLK2uhB_s.js](https://drees.solidarites-sante.gouv.fr/sites/default/files/js/js_EQoQwo7kdEdBp-tIY6UsuV6_lYz9eu2sKTJLK2uhB_s.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/modules/custom/drees_site_deploy/images/thematics/icon_darken_sante.svg](https://drees.solidarites-sante.gouv.fr/modules/custom/drees_site_deploy/images/thematics/icon_darken_sante.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sites/default/files/favicon.ico](https://drees.solidarites-sante.gouv.fr/sites/default/files/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/libraries/tarteaucitron.js/tarteaucitron.js?v=1.3](https://drees.solidarites-sante.gouv.fr/libraries/tarteaucitron.js/tarteaucitron.js?v=1.3)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/modules/custom/drees_site_deploy/images/thematics/icon_darken_retire.svg](https://drees.solidarites-sante.gouv.fr/modules/custom/drees_site_deploy/images/thematics/icon_darken_retire.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/robots.txt](https://drees.solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sites/default/files/css/css_HLAX-f5I9HQbFmxLgSqaM-WLvdB-h6S1zuUCeDBY1Jg.css](https://drees.solidarites-sante.gouv.fr/sites/default/files/css/css_HLAX-f5I9HQbFmxLgSqaM-WLvdB-h6S1zuUCeDBY1Jg.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sites/default/files/css/css_pgBrl1JdaMtTNRaOsAlOy-7UttN2mToi8TfPuqO-Xrs.css](https://drees.solidarites-sante.gouv.fr/sites/default/files/css/css_pgBrl1JdaMtTNRaOsAlOy-7UttN2mToi8TfPuqO-Xrs.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/themes/custom/drees_theme/logo-republique-francaise.svg](https://drees.solidarites-sante.gouv.fr/themes/custom/drees_theme/logo-republique-francaise.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sites/default/files/js/js_VtafjXmRvoUgAzqzYTA3Wrjkx9wcWhjP0G4ZnnqRamA.js](https://drees.solidarites-sante.gouv.fr/sites/default/files/js/js_VtafjXmRvoUgAzqzYTA3Wrjkx9wcWhjP0G4ZnnqRamA.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0.css](https://drees.solidarites-sante.gouv.fr/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.svg](https://drees.solidarites-sante.gouv.fr/profiles/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/admin/](https://drees.solidarites-sante.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/comment/reply/](https://drees.solidarites-sante.gouv.fr/comment/reply/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.css$](https://drees.solidarites-sante.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.svg](https://drees.solidarites-sante.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.js$](https://drees.solidarites-sante.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_9XuG9_fMHM2d9EfVgRidoOOcRmwWxlHM-4uAtrSlFd0`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�ȭz��y����ߊW���,��,���\x001b��0s6w�\x001fV\x0004bv��q\x0019�[\x0019G3�.\x0002�ҔWt</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/admin/](https://drees.solidarites-sante.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/comment/reply/](https://drees.solidarites-sante.gouv.fr/comment/reply/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.js$](https://drees.solidarites-sante.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.css$](https://drees.solidarites-sante.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.svg](https://drees.solidarites-sante.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.svg](https://drees.solidarites-sante.gouv.fr/profiles/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bADMIN\b and was detected in the element starting with: "<script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefi", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/admin/](https://drees.solidarites-sante.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/recherche?f%5B0%5D=content_type%3A6" target="_self" data-drupal-link-query="{&quot;f&quot;:[&quot;content_type:6&quot;]}" data-drupal-link-system-path="recherche">Infographies</a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/comment/reply/](https://drees.solidarites-sante.gouv.fr/comment/reply/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/recherche?f%5B0%5D=content_type%3A6" target="_self" data-drupal-link-query="{&quot;f&quot;:[&quot;content_type:6&quot;]}" data-drupal-link-system-path="recherche">Infographies</a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/recherche?f%5B0%5D=content_type%3A6" target="_self" data-drupal-link-query="{&quot;f&quot;:[&quot;content_type:6&quot;]}" data-drupal-link-system-path="recherche">Infographies</a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.svg](https://drees.solidarites-sante.gouv.fr/profiles/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/recherche?f%5B0%5D=content_type%3A6" target="_self" data-drupal-link-query="{&quot;f&quot;:[&quot;content_type:6&quot;]}" data-drupal-link-system-path="recherche">Infographies</a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.svg](https://drees.solidarites-sante.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/recherche?f%5B0%5D=content_type%3A6" target="_self" data-drupal-link-query="{&quot;f&quot;:[&quot;content_type:6&quot;]}" data-drupal-link-system-path="recherche">Infographies</a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.js$](https://drees.solidarites-sante.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/recherche?f%5B0%5D=content_type%3A6" target="_self" data-drupal-link-query="{&quot;f&quot;:[&quot;content_type:6&quot;]}" data-drupal-link-system-path="recherche">Infographies</a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/recherche?f%5B0%5D=content_type%3A6" target="_self" data-drupal-link-query="{&quot;f&quot;:[&quot;content_type:6&quot;]}" data-drupal-link-system-path="recherche">Infographies</a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/profiles/*.css$](https://drees.solidarites-sante.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/recherche?f%5B0%5D=content_type%3A6" target="_self" data-drupal-link-query="{&quot;f&quot;:[&quot;content_type:6&quot;]}" data-drupal-link-system-path="recherche">Infographies</a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/recherche?f%5B0%5D=content_type%3A6" target="_self" data-drupal-link-query="{&quot;f&quot;:[&quot;content_type:6&quot;]}" data-drupal-link-system-path="recherche">Infographies</a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/recherche?f%5B0%5D=content_type%3A6" target="_self" data-drupal-link-query="{&quot;f&quot;:[&quot;content_type:6&quot;]}" data-drupal-link-system-path="recherche">Infographies</a>`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/recherche?f%5B0%5D=content_type%3A6" target="_self" data-drupal-link-query="{&quot;f&quot;:[&quot;content_type:6&quot;]}" data-drupal-link-system-path="recherche">Infographies</a>`
  
  
  
  
Instances: 11
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found with a target of '_self' - this is often used by modern frameworks to force a full page reload.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js](https://drees.solidarites-sante.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.jpeg](https://drees.solidarites-sante.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.gif](https://drees.solidarites-sante.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.jpg](https://drees.solidarites-sante.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css](https://drees.solidarites-sante.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/sitemap.xml](https://drees.solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=21600`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.js$](https://drees.solidarites-sante.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=21600`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/core/*.css$](https://drees.solidarites-sante.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=21600`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=21600`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/robots.txt](https://drees.solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=21600`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/](https://drees.solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1136941322`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/article/accessibilite](https://drees.solidarites-sante.gouv.fr/article/accessibilite)
  
  
  * Method: `GET`
  
  
  * Evidence: `20201103`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/article/accessibilite](https://drees.solidarites-sante.gouv.fr/article/accessibilite)
  
  
  * Method: `GET`
  
  
  * Evidence: `20201124`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/article/observatoire-national-de-la-demographie-des-professions-de-sante-ondps](https://drees.solidarites-sante.gouv.fr/article/observatoire-national-de-la-demographie-des-professions-de-sante-ondps)
  
  
  * Method: `GET`
  
  
  * Evidence: `20150414`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/article/commission-open-data-sante](https://drees.solidarites-sante.gouv.fr/article/commission-open-data-sante)
  
  
  * Method: `GET`
  
  
  * Evidence: `123204466`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/article/lagenda-de-la-revue-francaise-des-affaires-sociales](https://drees.solidarites-sante.gouv.fr/article/lagenda-de-la-revue-francaise-des-affaires-sociales)
  
  
  * Method: `GET`
  
  
  * Evidence: `1599150339`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/robots.txt](https://drees.solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `1136941322`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr/article/presentation-de-la-drees](https://drees.solidarites-sante.gouv.fr/article/presentation-de-la-drees)
  
  
  * Method: `GET`
  
  
  * Evidence: `20000722`
  
  
  
  
* URL: [https://drees.solidarites-sante.gouv.fr](https://drees.solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1136941322`
  
  
  
  
Instances: 9
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1136941322, which evaluates to: 2006-01-11 01:02:02</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
