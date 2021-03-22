
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:17:04


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
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 7 | 
| Source Code Disclosure - PHP | Medium | 8 | 
| Sub Resource Integrity Attribute Missing | Medium | 9 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 12 | 
| Cookie No HttpOnly Flag | Low | 7 | 
| Cookie Without SameSite Attribute | Low | 10 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 11 | 
| Dangerous JS Functions | Low | 5 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 2 | 
| Base64 Disclosure | Informational | 11 | 
| Charset Mismatch  | Informational | 12 | 
| Content-Type Header Missing | Informational | 1 | 
| Information Disclosure - Suspicious Comments | Informational | 8 | 
| Modern Web Application | Informational | 11 | 
| Storable and Cacheable Content | Informational | 7 | 
| Storable but Non-Cacheable Content | Informational | 4 | 
| Timestamp Disclosure - Unix | Informational | 13 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 21 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://cns.sante.fr/publications/actualites/](https://cns.sante.fr/publications/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/questions-reponses/](https://cns.sante.fr/a-propos-du-cns/questions-reponses/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/](https://cns.sante.fr/a-propos-du-cns/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/](https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/reunions/](https://cns.sante.fr/a-propos-du-cns/reunions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-content/](https://cns.sante.fr/wp-content/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/](https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/agenda/](https://cns.sante.fr/a-propos-du-cns/agenda/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
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
  
  
  
* URL: [https://cns.sante.fr/evenement/plenary-session-42/](https://cns.sante.fr/evenement/plenary-session-42/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a  class="fusion-social-network-icon fusion-tooltip fusion-twitter fusion-icon-twitter" style="color:#bebdbd;" social_network="twitter" social_link="https://twitter.com/share?text=Plenary%20session&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fplenary-session-42%2F" icon_color="#bebdbd" box_color="#e8e8e8" last href="https://twitter.com/share?text=Plenary%20session&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fplenary-session-42%2F" target="_blank" data-placement="top" data-title="Twitter" data-toggle="tooltip" title="Twitter"><span class="screen-reader-text">Twitter</span></a>`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/plenary-session-34/](https://cns.sante.fr/evenement/plenary-session-34/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a  class="fusion-social-network-icon fusion-tooltip fusion-twitter fusion-icon-twitter" style="color:#bebdbd;" social_network="twitter" social_link="https://twitter.com/share?text=Plenary%20session&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fplenary-session-34%2F" icon_color="#bebdbd" box_color="#e8e8e8" last href="https://twitter.com/share?text=Plenary%20session&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fplenary-session-34%2F" target="_blank" data-placement="top" data-title="Twitter" data-toggle="tooltip" title="Twitter"><span class="screen-reader-text">Twitter</span></a>`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/seance-pleniere-31/](https://cns.sante.fr/evenement/seance-pleniere-31/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a  class="fusion-social-network-icon fusion-tooltip fusion-twitter fusion-icon-twitter" style="color:#bebdbd;" social_network="twitter" social_link="https://twitter.com/share?text=S%C3%A9ance%20pl%C3%A9ni%C3%A8re&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fseance-pleniere-31%2F" icon_color="#bebdbd" box_color="#e8e8e8" last href="https://twitter.com/share?text=S%C3%A9ance%20pl%C3%A9ni%C3%A8re&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fseance-pleniere-31%2F" target="_blank" data-placement="top" data-title="Twitter" data-toggle="tooltip" title="Twitter"><span class="screen-reader-text">Twitter</span></a>`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/plenary-session-45/](https://cns.sante.fr/evenement/plenary-session-45/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a  class="fusion-social-network-icon fusion-tooltip fusion-twitter fusion-icon-twitter" style="color:#bebdbd;" social_network="twitter" social_link="https://twitter.com/share?text=Plenary%20session&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fplenary-session-45%2F" icon_color="#bebdbd" box_color="#e8e8e8" last href="https://twitter.com/share?text=Plenary%20session&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fplenary-session-45%2F" target="_blank" data-placement="top" data-title="Twitter" data-toggle="tooltip" title="Twitter"><span class="screen-reader-text">Twitter</span></a>`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/seance-pleniere-42/](https://cns.sante.fr/evenement/seance-pleniere-42/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a  class="fusion-social-network-icon fusion-tooltip fusion-twitter fusion-icon-twitter" style="color:#bebdbd;" social_network="twitter" social_link="https://twitter.com/share?text=S%C3%A9ance%20pl%C3%A9ni%C3%A8re&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fseance-pleniere-42%2F" icon_color="#bebdbd" box_color="#e8e8e8" last href="https://twitter.com/share?text=S%C3%A9ance%20pl%C3%A9ni%C3%A8re&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fseance-pleniere-42%2F" target="_blank" data-placement="top" data-title="Twitter" data-toggle="tooltip" title="Twitter"><span class="screen-reader-text">Twitter</span></a>`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/colloque-vhc-en-prison/](https://cns.sante.fr/evenement/colloque-vhc-en-prison/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a  class="fusion-social-network-icon fusion-tooltip fusion-twitter fusion-icon-twitter" style="color:#bebdbd;" social_network="twitter" social_link="https://twitter.com/share?text=Colloque%20virtuel%20%E2%80%9CVHC%20en%20prison%E2%80%9D&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fcolloque-vhc-en-prison%2F" icon_color="#bebdbd" box_color="#e8e8e8" last href="https://twitter.com/share?text=Colloque%20virtuel%20%E2%80%9CVHC%20en%20prison%E2%80%9D&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fcolloque-vhc-en-prison%2F" target="_blank" data-placement="top" data-title="Twitter" data-toggle="tooltip" title="Twitter"><span class="screen-reader-text">Twitter</span></a>`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/seance-pleniere-39/](https://cns.sante.fr/evenement/seance-pleniere-39/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a  class="fusion-social-network-icon fusion-tooltip fusion-twitter fusion-icon-twitter" style="color:#bebdbd;" social_network="twitter" social_link="https://twitter.com/share?text=S%C3%A9ance%20pl%C3%A9ni%C3%A8re&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fseance-pleniere-39%2F" icon_color="#bebdbd" box_color="#e8e8e8" last href="https://twitter.com/share?text=S%C3%A9ance%20pl%C3%A9ni%C3%A8re&amp;url=https%3A%2F%2Fcns.sante.fr%2Fevenement%2Fseance-pleniere-39%2F" target="_blank" data-placement="top" data-title="Twitter" data-toggle="tooltip" title="Twitter"><span class="screen-reader-text">Twitter</span></a>`
  
  
  
  
Instances: 7
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://cns.sante.fr/evenement/plenary-session-34/](https://cns.sante.fr/evenement/plenary-session-34/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?php the_time(\\'Ghi\\') ?>","date_no_year":"j F Y<?php the_time(\\'Ghi\\') ?>","datepicker_format":"d\/m\/Y","datepicker_format_index":"4","days":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"daysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"msgs":"[\"This event is from %%starttime%% to %%endtime%% on %%startdatewithyear%%.\",\"This event is at %%starttime%% on %%startdatewithyear%%.\",\"This event is all day on %%startdatewithyear%%.\",\"This event starts at %%starttime%% on %%startdatenoyear%% and ends at %%endtime%% on %%enddatewithyear%%\",\"This event starts at %%starttime%% on %%startdatenoyear%% and ends on %%enddatewithyear%%\",\"This event is all day starting on %%startdatenoyear%% and ending on %%enddatewithyear%%.\"]"};`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/seance-pleniere-31/](https://cns.sante.fr/evenement/seance-pleniere-31/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?php the_time(\\'Ghi\\') ?>","date_no_year":"j F Y<?php the_time(\\'Ghi\\') ?>","datepicker_format":"d\/m\/Y","datepicker_format_index":"4","days":["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],"daysShort":["dim","lun","mar","mer","jeu","ven","sam"],"months":["janvier","f\u00e9vrier","mars","avril","mai","juin","juillet","ao\u00fbt","septembre","octobre","novembre","d\u00e9cembre"],"monthsShort":["Jan","Feb","Mar","Apr","mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"msgs":"[\"Cet \\u00e9v\\u00e8nement a lieu le %%startdatewithyear%% de %%starttime%% \\u00e0 %%endtime%%.\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatewithyear%%.\",\"Cet \\u00e9v\\u00e8nement durera toute la journ\\u00e9e du %%startdatewithyear%%.\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatenoyear%% et se termine \\u00e0 %%endtime%% le %%enddatewithyear%%\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatenoyear%% et se termine le %%enddatewithyear%%\",\"Cet \\u00e9v\\u00e8nement dure toute la journ\\u00e9e du %%startdatenoyear%% au %%enddatewithyear%%.\"]"};`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/plenary-session-45/](https://cns.sante.fr/evenement/plenary-session-45/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?php the_time(\\'Ghi\\') ?>","date_no_year":"j F Y<?php the_time(\\'Ghi\\') ?>","datepicker_format":"d\/m\/Y","datepicker_format_index":"4","days":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"daysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"msgs":"[\"This event is from %%starttime%% to %%endtime%% on %%startdatewithyear%%.\",\"This event is at %%starttime%% on %%startdatewithyear%%.\",\"This event is all day on %%startdatewithyear%%.\",\"This event starts at %%starttime%% on %%startdatenoyear%% and ends at %%endtime%% on %%enddatewithyear%%\",\"This event starts at %%starttime%% on %%startdatenoyear%% and ends on %%enddatewithyear%%\",\"This event is all day starting on %%startdatenoyear%% and ending on %%enddatewithyear%%.\"]"};`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/seance-pleniere-39/](https://cns.sante.fr/evenement/seance-pleniere-39/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?php the_time(\\'Ghi\\') ?>","date_no_year":"j F Y<?php the_time(\\'Ghi\\') ?>","datepicker_format":"d\/m\/Y","datepicker_format_index":"4","days":["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],"daysShort":["dim","lun","mar","mer","jeu","ven","sam"],"months":["janvier","f\u00e9vrier","mars","avril","mai","juin","juillet","ao\u00fbt","septembre","octobre","novembre","d\u00e9cembre"],"monthsShort":["Jan","Feb","Mar","Apr","mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"msgs":"[\"Cet \\u00e9v\\u00e8nement a lieu le %%startdatewithyear%% de %%starttime%% \\u00e0 %%endtime%%.\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatewithyear%%.\",\"Cet \\u00e9v\\u00e8nement durera toute la journ\\u00e9e du %%startdatewithyear%%.\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatenoyear%% et se termine \\u00e0 %%endtime%% le %%enddatewithyear%%\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatenoyear%% et se termine le %%enddatewithyear%%\",\"Cet \\u00e9v\\u00e8nement dure toute la journ\\u00e9e du %%startdatenoyear%% au %%enddatewithyear%%.\"]"};`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/seance-pleniere-42/](https://cns.sante.fr/evenement/seance-pleniere-42/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?php the_time(\\'Ghi\\') ?>","date_no_year":"j F Y<?php the_time(\\'Ghi\\') ?>","datepicker_format":"d\/m\/Y","datepicker_format_index":"4","days":["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],"daysShort":["dim","lun","mar","mer","jeu","ven","sam"],"months":["janvier","f\u00e9vrier","mars","avril","mai","juin","juillet","ao\u00fbt","septembre","octobre","novembre","d\u00e9cembre"],"monthsShort":["Jan","Feb","Mar","Apr","mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"msgs":"[\"Cet \\u00e9v\\u00e8nement a lieu le %%startdatewithyear%% de %%starttime%% \\u00e0 %%endtime%%.\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatewithyear%%.\",\"Cet \\u00e9v\\u00e8nement durera toute la journ\\u00e9e du %%startdatewithyear%%.\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatenoyear%% et se termine \\u00e0 %%endtime%% le %%enddatewithyear%%\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatenoyear%% et se termine le %%enddatewithyear%%\",\"Cet \\u00e9v\\u00e8nement dure toute la journ\\u00e9e du %%startdatenoyear%% au %%enddatewithyear%%.\"]"};`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/colloque-vhc-en-prison/](https://cns.sante.fr/evenement/colloque-vhc-en-prison/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?php the_time(\\'Ghi\\') ?>","date_no_year":"j F Y<?php the_time(\\'Ghi\\') ?>","datepicker_format":"d\/m\/Y","datepicker_format_index":"4","days":["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],"daysShort":["dim","lun","mar","mer","jeu","ven","sam"],"months":["janvier","f\u00e9vrier","mars","avril","mai","juin","juillet","ao\u00fbt","septembre","octobre","novembre","d\u00e9cembre"],"monthsShort":["Jan","Feb","Mar","Apr","mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"msgs":"[\"Cet \\u00e9v\\u00e8nement a lieu le %%startdatewithyear%% de %%starttime%% \\u00e0 %%endtime%%.\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatewithyear%%.\",\"Cet \\u00e9v\\u00e8nement durera toute la journ\\u00e9e du %%startdatewithyear%%.\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatenoyear%% et se termine \\u00e0 %%endtime%% le %%enddatewithyear%%\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatenoyear%% et se termine le %%enddatewithyear%%\",\"Cet \\u00e9v\\u00e8nement dure toute la journ\\u00e9e du %%startdatenoyear%% au %%enddatewithyear%%.\"]"};`
  
  
  
  
* URL: [https://cns.sante.fr/evenement/plenary-session-42/](https://cns.sante.fr/evenement/plenary-session-42/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?php the_time(\\'Ghi\\') ?>","date_no_year":"j F Y<?php the_time(\\'Ghi\\') ?>","datepicker_format":"d\/m\/Y","datepicker_format_index":"4","days":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"daysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"msgs":"[\"This event is from %%starttime%% to %%endtime%% on %%startdatewithyear%%.\",\"This event is at %%starttime%% on %%startdatewithyear%%.\",\"This event is all day on %%startdatewithyear%%.\",\"This event starts at %%starttime%% on %%startdatenoyear%% and ends at %%endtime%% on %%enddatewithyear%%\",\"This event starts at %%starttime%% on %%startdatenoyear%% and ends on %%enddatewithyear%%\",\"This event is all day starting on %%startdatenoyear%% and ending on %%enddatewithyear%%.\"]"};`
  
  
  
  
* URL: [https://cns.sante.fr/agenda-page/](https://cns.sante.fr/agenda-page/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?php the_time(\\'Ghi\\') ?>","date_no_year":"j F Y<?php the_time(\\'Ghi\\') ?>","datepicker_format":"d\/m\/Y","datepicker_format_index":"4","days":["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],"daysShort":["dim","lun","mar","mer","jeu","ven","sam"],"months":["janvier","f\u00e9vrier","mars","avril","mai","juin","juillet","ao\u00fbt","septembre","octobre","novembre","d\u00e9cembre"],"monthsShort":["Jan","Feb","Mar","Apr","mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"msgs":"[\"Cet \\u00e9v\\u00e8nement a lieu le %%startdatewithyear%% de %%starttime%% \\u00e0 %%endtime%%.\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatewithyear%%.\",\"Cet \\u00e9v\\u00e8nement durera toute la journ\\u00e9e du %%startdatewithyear%%.\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatenoyear%% et se termine \\u00e0 %%endtime%% le %%enddatewithyear%%\",\"Cet \\u00e9v\\u00e8nement commence \\u00e0 %%starttime%% le %%startdatenoyear%% et se termine le %%enddatewithyear%%\",\"Cet \\u00e9v\\u00e8nement dure toute la journ\\u00e9e du %%startdatenoyear%% au %%enddatewithyear%%.\"]"};`
  
  
  
  
Instances: 8
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?php the_time(\\'Ghi\\') ?>","date_no_year":"j F Y<?php the_time(\\'Ghi\\') ?>","datepicker_format":"d\/m\/Y","datepicker_format_index":"4","days":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"daysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"msgs":"[\"This event is from %%starttime%% to %%endtime%% on %%startdatewithyear%%.\",\"This event is at %%starttime%% on %%startdatewithyear%%.\",\"This event is all day on %%startdatewithyear%%.\",\"This event starts at %%starttime%% on %%startdatenoyear%% and ends at %%endtime%% on %%enddatewithyear%%\",\"This event starts at %%starttime%% on %%startdatenoyear%% and ends on %%enddatewithyear%%\",\"This event is all day starting on %%startdatenoyear%% and ending on %%enddatewithyear%%.\"]"};</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='//fonts.googleapis.com/css?family=Open+Sans:300|Open+Sans:400|Open+Sans:700' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='//fonts.googleapis.com/css?family=Open+Sans:300|Open+Sans:400|Open+Sans:700' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='//fonts.googleapis.com/css?family=Open+Sans:300|Open+Sans:400|Open+Sans:700' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='//fonts.googleapis.com/css?family=Lato:300|Lato:400|Lato:700' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='//fonts.googleapis.com/css?family=Lato:300|Lato:400|Lato:700' rel='stylesheet' type='text/css'>`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='//fonts.googleapis.com/css?family=Lato:300|Lato:400|Lato:700' rel='stylesheet' type='text/css'>`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://cns.sante.fr/wp-includes/js/jquery/jquery.js?ver=1.12.4](https://cns.sante.fr/wp-includes/js/jquery/jquery.js?ver=1.12.4)
  
  
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

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name='options' autocomplete = 'off'>`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action='#' autocomplete="off" id="formsearchcns">`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name='options' autocomplete = 'off'>`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action='#' autocomplete="off" id="formsearchcns">`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name='options' autocomplete = 'off'>`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action='#' autocomplete="off" id="formsearchcns">`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action='#' autocomplete="off" id="formsearchcns">`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name='options' autocomplete = 'off'>`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action='#' autocomplete="off" id="formsearchcns">`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name='options' autocomplete = 'off'>`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name='options' autocomplete = 'off'>`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action='#' autocomplete="off" id="formsearchcns">`
  
  
  
  
Instances: 12
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 4: "current_page_id" "qtranslate_lang" "polylang_lang" "set_exactonly1_2" "set_intitle1_2" "set_incontent1_2" "set_incomments1_2" "set_inexcerpt1_2" "1_2customset_1_21" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/](https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr/actualites/informations-covid-19/](https://cns.sante.fr/actualites/informations-covid-19/)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr/actualites/sante-mondiale-nouvelle-note-valant-avis-du-cns/](https://cns.sante.fr/actualites/sante-mondiale-nouvelle-note-valant-avis-du-cns/)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr/en](https://cns.sante.fr/en)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/](https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr/robots.txt](https://cns.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-cns-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-cns-portail.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr/actualites/informations-covid-19/](https://cns.sante.fr/actualites/informations-covid-19/)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-cns-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-cns-portail.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://cns.sante.fr/actualites/sante-mondiale-nouvelle-note-valant-avis-du-cns/](https://cns.sante.fr/actualites/sante-mondiale-nouvelle-note-valant-avis-du-cns/)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr/en](https://cns.sante.fr/en)
  
  
  * Method: `GET`
  
  
  * Parameter: `pll_language`
  
  
  * Evidence: `Set-Cookie: pll_language`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-cns-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-cns-portail.cegedim.cloud-HTTP`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/](https://cns.sante.fr/a-propos-du-cns/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr/publications/actualites/](https://cns.sante.fr/publications/actualites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/questions-reponses/](https://cns.sante.fr/a-propos-du-cns/questions-reponses/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/reunions/](https://cns.sante.fr/a-propos-du-cns/reunions/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/](https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/](https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/agenda/](https://cns.sante.fr/a-propos-du-cns/agenda/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
* URL: [https://cns.sante.fr/publications/rapports-avis/](https://cns.sante.fr/publications/rapports-avis/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111`
  
  
  * Evidence: `<script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=202111'></script>`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>
  
### Reference
* 

  
#### CWE Id : 829
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://cns.sante.fr/wp-content/themes/Avada/assets/js/excanvas.js](https://cns.sante.fr/wp-content/themes/Avada/assets/js/excanvas.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://cns.sante.fr/wp-content/plugins/ajax-search-pro/js/min/jquery.ajaxsearchpro-noui-isotope.min.js?ver=UPZ6uQ](https://cns.sante.fr/wp-content/plugins/ajax-search-pro/js/min/jquery.ajaxsearchpro-noui-isotope.min.js?ver=UPZ6uQ)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://cns.sante.fr/wp-includes/js/jquery/jquery.js?ver=1.12.4](https://cns.sante.fr/wp-includes/js/jquery/jquery.js?ver=1.12.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://cns.sante.fr/wp-content/themes/Avada/assets/js/main.min.js?ver=0.1](https://cns.sante.fr/wp-content/themes/Avada/assets/js/main.min.js?ver=0.1)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://cns.sante.fr/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1](https://cns.sante.fr/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/](https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/reunions/](https://cns.sante.fr/a-propos-du-cns/reunions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/](https://cns.sante.fr/a-propos-du-cns/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/questions-reponses/](https://cns.sante.fr/a-propos-du-cns/questions-reponses/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-content/](https://cns.sante.fr/wp-content/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/](https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/agenda/](https://cns.sante.fr/a-propos-du-cns/agenda/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/publications/actualites/](https://cns.sante.fr/publications/actualites/)
  
  
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
  
  
  
* URL: [https://cns.sante.fr/robots.txt](https://cns.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/](https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/agenda/](https://cns.sante.fr/a-propos-du-cns/agenda/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/](https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cns.sante.fr/publications/actualites/](https://cns.sante.fr/publications/actualites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/reunions/](https://cns.sante.fr/a-propos-du-cns/reunions/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/](https://cns.sante.fr/a-propos-du-cns/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/questions-reponses/](https://cns.sante.fr/a-propos-du-cns/questions-reponses/)
  
  
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

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://cns.sante.fr/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Fcns.sante.fr%2Fwp-admin%2F](https://cns.sante.fr/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Fcns.sante.fr%2Fwp-admin%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/xmlrpc.php?rsd](https://cns.sante.fr/xmlrpc.php?rsd)
  
  
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
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/](https://cns.sante.fr/a-propos-du-cns/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/themes/Avada/assets/js/html5shiv`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/themes/Avada/assets/js/html5shiv`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/questions-reponses/](https://cns.sante.fr/a-propos-du-cns/questions-reponses/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/themes/Avada/assets/js/html5shiv`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/themes/Avada/assets/js/html5shiv`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/](https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/themes/Avada/assets/js/html5shiv`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/reunions/](https://cns.sante.fr/a-propos-du-cns/reunions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/themes/Avada/assets/js/html5shiv`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/themes/Avada/assets/js/html5shiv`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/](https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/themes/Avada/assets/js/html5shiv`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/agenda/](https://cns.sante.fr/a-propos-du-cns/agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/themes/Avada/assets/js/html5shiv`
  
  
  
  
* URL: [https://cns.sante.fr/publications/rapports-avis/](https://cns.sante.fr/publications/rapports-avis/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/themes/Avada/assets/js/html5shiv`
  
  
  
  
* URL: [https://cns.sante.fr/publications/actualites/](https://cns.sante.fr/publications/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/themes/Avada/assets/js/html5shiv`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>~���(�ק��azg��\x000b�u�ڲǭ����\x001bf��!�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Charset Mismatch 
##### Informational (Low)
  
  
  
  
#### Description
<p>This check identifies responses where the HTTP Content-Type header declares a charset different from the charset defined by the body of the HTML or XML. When there's a charset mismatch between the HTTP header and content body Web browsers can be forced into an undesirable content-sniffing mode to determine the content's correct character set.</p><p></p><p>An attacker could manipulate content on the page to be interpreted in an encoding of their choice. For example, if an attacker can control content at the beginning of the page, they could inject script using UTF-7 encoded text and manipulate some browsers into interpreting that text.</p>
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2Fles-membres-du-conseil-national-du-sida-et-des-hepatites-virales%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2Fles-membres-du-conseil-national-du-sida-et-des-hepatites-virales%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fpublications%2Frapports-avis%2Fdepistage%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fpublications%2Frapports-avis%2Fdepistage%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2Fmission-et-organisation%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2Fmission-et-organisation%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fpublications%2Factualites%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fpublications%2Factualites%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2Fquestions-reponses%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2Fquestions-reponses%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fpublications%2Frapports-avis%2Fprevention%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fpublications%2Frapports-avis%2Fprevention%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fen%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fen%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2Fagenda%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2Fagenda%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2Freunions%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fa-propos-du-cns%2Freunions%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fpublications%2Frapports-avis%2F](https://cns.sante.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fcns.sante.fr%2Fpublications%2Frapports-avis%2F)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Force UTF-8 for all text content in both the HTTP header and meta tags in HTML or encoding declarations in XML.</p>
  
### Other information
<p>There was a charset mismatch between the HTTP Header and the XML encoding declaration: [UTF-8] and [null] do not match.</p>
  
### Reference
* http://code.google.com/p/browsersec/wiki/Part2#Character_set_handling_and_detection

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://cns.sante.fr/wp-content/plugins/ajax-search-pro/css/fonts/icons/icons2.woff2](https://cns.sante.fr/wp-content/plugins/ajax-search-pro/css/fonts/icons/icons2.woff2)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Select`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `db`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `Select`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `db`
  
  
  
  
Instances: 8
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bADMIN\b and was detected 2 times, the first in the element starting with: "<script type='text/javascript'></p><p>/* <![CDATA[ */</p><p>var toTopscreenReaderText = {"label":"Go to Top"};</p><p>var js_local_vars = {"admin_a", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/](https://cns.sante.fr/a-propos-du-cns/les-membres-du-conseil-national-du-sida-et-des-hepatites-virales/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="fusion-icon fusion-icon-bars"></a>`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/reunions/](https://cns.sante.fr/a-propos-du-cns/reunions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="fusion-icon fusion-icon-bars"></a>`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="fusion-icon fusion-icon-bars"></a>`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/](https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="fusion-icon fusion-icon-bars"></a>`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/questions-reponses/](https://cns.sante.fr/a-propos-du-cns/questions-reponses/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="fusion-icon fusion-icon-bars"></a>`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/](https://cns.sante.fr/a-propos-du-cns/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="fusion-icon fusion-icon-bars"></a>`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="fusion-icon fusion-icon-bars"></a>`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="fusion-icon fusion-icon-bars"></a>`
  
  
  
  
* URL: [https://cns.sante.fr/publications/rapports-avis/](https://cns.sante.fr/publications/rapports-avis/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="fusion-icon fusion-icon-bars"></a>`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/agenda/](https://cns.sante.fr/a-propos-du-cns/agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="fusion-icon fusion-icon-bars"></a>`
  
  
  
  
* URL: [https://cns.sante.fr/publications/actualites/](https://cns.sante.fr/publications/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="fusion-icon fusion-icon-bars"></a>`
  
  
  
  
Instances: 11
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://cns.sante.fr/wp-content/](https://cns.sante.fr/wp-content/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/en/](https://cns.sante.fr/en/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/robots.txt](https://cns.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/](https://cns.sante.fr/a-propos-du-cns/mission-et-organisation/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/a-propos-du-cns/](https://cns.sante.fr/a-propos-du-cns/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://cns.sante.fr/sitemap.xml](https://cns.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://cns.sante.fr/wp-includes/](https://cns.sante.fr/wp-includes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://cns.sante.fr/wp-admin/](https://cns.sante.fr/wp-admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://cns.sante.fr/wp-content/uploads/](https://cns.sante.fr/wp-content/uploads/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `33333333`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `333333333`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `31536000`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `72191744`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `31536000`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `698439690`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `333333333`
  
  
  
  
* URL: [https://cns.sante.fr](https://cns.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `66666667`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `66666667`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `698439690`
  
  
  
  
* URL: [https://cns.sante.fr/robots.txt](https://cns.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `698439690`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `72191744`
  
  
  
  
* URL: [https://cns.sante.fr/](https://cns.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `33333333`
  
  
  
  
Instances: 13
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>33333333, which evaluates to: 1971-01-21 19:15:33</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `polylang_lang`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `termset[category][]`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `polylang_lang`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `customset[]`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `polylang_lang`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `current_page_id`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `polylang_lang`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `customset[]`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `polylang_lang`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `polylang_lang`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `set_incontent`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `set_exactonly`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `customset[]`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `customset[]`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `set_inexcerpt`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `polylang_lang`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `customset[]`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `polylang_lang`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `set_intitle`
  
  
  
  
* URL: [https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1](https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `set_exactonly`
  
  
  
  
Instances: 21
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://cns.sante.fr/en/?current_page_id=12289&customset%5B%5D=post&polylang_lang=en&qtranslate_lang=0&set_exactonly=checked&set_incomments=None&set_incontent=None&set_inexcerpt=None&set_intitle=None&termset%5Bcategory%5D%5B%5D=-1</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [html] tag [lang] attribute </p><p></p><p>The user input found was:</p><p>polylang_lang=en</p><p></p><p>The user-controlled value was:</p><p>en-gb</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
