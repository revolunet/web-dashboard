
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:27:05


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 2 |
| Medium | 5 |
| Low | 8 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Hash Disclosure - Mac OSX salted SHA-1 | High | 1 | 
| PII Disclosure | High | 2 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Source Code Disclosure - Perl | Medium | 5 | 
| Source Code Disclosure - PHP | Medium | 3 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 10 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Dangerous JS Functions | Low | 8 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 14 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 1 | 
| Storable and Cacheable Content | Informational | 10 | 
| Timestamp Disclosure - Unix | Informational | 6 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 11 | 

## Alert Detail


  
  
  
  
### Hash Disclosure - Mac OSX salted SHA-1
##### High (Medium)
  
  
  
  
#### Description
<p>A hash was disclosed by the web server. - Mac OSX salted SHA-1</p>
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/Annexe_emploi.pdf](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/Annexe_emploi.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDF`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that hashes that are used to protect credentials or other resources are not leaked by the web server or database. There is typically no requirement for password hashes to be accessible to the web browser.      </p>
  
### Other information
<p>DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDF</p>
  
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
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/Feuille_de_route_sociale_2013_VF.pdf](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/Feuille_de_route_sociale_2013_VF.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503503503503`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/direccte-3_volets_apprentissage_bd_ok.pdf](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/direccte-3_volets_apprentissage_bd_ok.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `30237206811871`
  
  
  
  
Instances: 2
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 503503</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/lib/](https://direccte.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/missions](https://direccte.gouv.fr/missions)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins-dist/](https://direccte.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/local/cache-css/](https://direccte.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/](https://direccte.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/local/](https://direccte.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins/](https://direccte.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr](https://direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique)
  
  
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
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/Organisation" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/Donnees-personnelles-et-cookies-17379](https://direccte.gouv.fr/Donnees-personnelles-et-cookies-17379)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/Donnees-personnelles-et-cookies-17379" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/Grande-conference-sociale-pour-l-emploi-une-nouvelle-feuille-de-route-pour-2013](https://direccte.gouv.fr/Grande-conference-sociale-pour-l-emploi-une-nouvelle-feuille-de-route-pour-2013)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/Grande-conference-sociale-pour-l-emploi-une-nouvelle-feuille-de-route-pour-2013" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/Presentation-du-projet-de-loi-sur-les-contrats-de-generation](https://direccte.gouv.fr/Presentation-du-projet-de-loi-sur-les-contrats-de-generation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/Presentation-du-projet-de-loi-sur-les-contrats-de-generation" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/Alerte-Faux-courriers-et-utilisation-frauduleuse-du-nom-de-la-Direccte](https://direccte.gouv.fr/Alerte-Faux-courriers-et-utilisation-frauduleuse-du-nom-de-la-Direccte)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/Alerte-Faux-courriers-et-utilisation-frauduleuse-du-nom-de-la-Direccte" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/Organisation-d-une-Direccte](https://direccte.gouv.fr/Organisation-d-une-Direccte)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/Organisation-d-une-Direccte" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/Mentions-legales](https://direccte.gouv.fr/Mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/Mentions-legales" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/Droit-du-travail-17373](https://direccte.gouv.fr/Droit-du-travail-17373)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/Droit-du-travail-17373" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/Vous-cherchez-a-recruter-Contrat](https://direccte.gouv.fr/Vous-cherchez-a-recruter-Contrat)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/Vous-cherchez-a-recruter-Contrat" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/missions](https://direccte.gouv.fr/missions)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/missions" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/Consommation-et-concurrence](https://direccte.gouv.fr/Consommation-et-concurrence)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a rel="nofollow" href="http://www.facebook.com/share.php?u=https://direccte.gouv.fr/Consommation-et-concurrence" title="Facebook" target="_blank"><img src="plugins/direccte/squelettes/css/images/facebook.png" alt="facebook" title="Partager avec facebook" /></a>`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/docx/logo_app_decrochage-2.docx](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/docx/logo_app_decrochage-2.docx)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#oarP`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/DP_CG_BAT.pdf](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/DP_CG_BAT.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#r2Fp`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/flv/creation_des_agences_regionales_de_sante.flv](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/flv/creation_des_agences_regionales_de_sante.flv)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#Nl6a`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/tableau_bord_54.pdf](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/tableau_bord_54.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#8agb`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/ppt/dossier_de_conception_sites_ARS_v0-03-2.ppt](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/ppt/dossier_de_conception_sites_ARS_v0-03-2.ppt)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#oIueYi`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#oarP</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/docx/110704_DIRECCTE_guide_formation_BO-2.docx](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/docx/110704_DIRECCTE_guide_formation_BO-2.docx)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=\x001c¾j\x000bØð<nÌeÞë¸½ã:Ä?\x001e ÔÑ´£q!pÅÐ<Ç¨î
om7ð>ïÿÂ]\x0002<üm`\x0010\x000b\x001c¿1
\x00187\x00124ï¯¹iÞcsÕÖ}¾S°§²ç£\x0001s¸Äì(ýªä\x0000£É1U+
¿F\x0014¬Æ \x0019qHQ¿å¦Jä\x0010èõµÀÑH)QHsrW\x0018þ'd`i\x001a©ÉÕ¯:<\x0019M"NÎÎ5ä\x0000^ÇCä/\x0002½Òý¹O\x000f\x0000kô1²×Gã/·\x0019¦/AB6+´6ë·?\x0015{0¶Úb[B\x0007l`\x0016JÆ\x001eÏ}\x001fs\x000fØéÞ\x0004EöÐt+%ûH|ôf²¤_"\x001d^ó\x001fé¨1oÜo+\x0013x\x0017©\x0015\x0006ËWÚ<\x001f#OVDÚH.H\x000ctô¬c$Oð;BD\x0004>v"zö3òÔÓYmÁ®ÛË2¸`\x0001W¿ÃÕ[e­ \x001a-Â\x001d'áY#ø½t\x0012yt\x001c\x001c\x001d\x0000\x001eÛ\x00086x[
>\x001f2CÉ¤ÀIHÜ?=D7ÉJåÎSÎ­5Ó4!òÔ'üôä\x000e\x0010t'¶åEWÐ¾\x000e¹¾|Æß#N-Rû¿µæê\x0015`GÛp!²\x0015L\x0016,óê¾!ÕBu\x000fßc\x0012ñë\x0005²X\x0002hæ»XtZ&m{É\x0012ùÊ\x001bö÷¿o!§E|ÄÉÏttè@
¬(ÿz\x0014\x0007OâÔÉpóN\x0019Üäq\x0005\x001fÂÜ@ü ÛIkÁIåàK½e\x0017q¨l×\x000c¾Y½]o\x0016K
?Ý¿ì\x0008°k\x0014<D\x0007Â´ËfHÑ°@Z\6aÉ\x0012!7|\x001f)r\x001b39²ÚM4²5ZðôH@=|$^\x001aéñáPT!ZÌ(v¨\x0018·xÊâ¥Ö8ûÎ\x0003ÑùX\x001aÈ~ïh±Æx?GÉÞ\x0000Ö\x0006ê\x000eð\x0015ÉzÕSÝ àï\x0014ö0\x000eSÜÏI6ï9	\x001eËÄL\x0007=VnG#¾<^!j]\x0005ú®¦£mo\x000eÖY\x0003öß±m_ãÃ!×q3H\x0007#,N÷éþ¶°4Gì¾&\x0013/y\x0014ýCY{3£ô\x0011»¬ÌUn?íOD9+¾WÖõÌJÁS\x001eå XPc{Æ4I~{ÜU\x001c\x0007R;Íþ%UÙCË\x0001C \x0002¬{A»ÚÏ%Ò?2\x0018ë#èzq\x0008Ù2\x0010^ñ`jç³ÝòoQxçG\x0005kJk\x0016=_Pa\x0007Ù/:_Mìô¾§¡)&uípøöÓ&\x00021çÎuÒ\x0016\È=å\x0002Ò¸ê0\x0016"ß]ÀÓ%¾Ü\x000ct\x0016ÃæêïJ"ÔeÐ÷ôßù¡¢Øä\x001cIí\x0008åLâ¯\x000eL¤}Z]óS1ì\x0015r²'C\x0013u\x0013¥×çÕ	ã¯£\x0014³'[\x0008Ñ6ð§PÐX>:æ-ý\x0016Ç-=*o\x0002l¢è\x0015À+!#QÂÛ-÷þ\x0004²=G^\x0007w¨ÞÂ[\x0017§!Æn@jÊ]gÄÆI4ò¼ÙÑ\x0000»­\x0014Jÿ@L!õ3ãÈïî-µæQ\x0013å?ÍU0\x001cA Â¢(¯A)ø)wÜ\x0001\x001fåü6ùP\x000e°÷V\x001d´Øä©\x000côÔ ¨\x0003@<76|àNìæ»ýÉ2íÏ¾G\x001bÃ¯øÀ±{):n\x000e\x0010éô¹aãk®éu¿=·ÛSgÓuA¶sOrücª`ÿçÇú/\x0003Ï'Ë,\x0012j¾P\x0007¶Ï¯Æãk \x001c÷[·?Î,µ\x001b76P-µÛ$î\x0001=Ôàæ³\x0016\x001d?«1ßDdVWýy«uDµ\x001d}r9l§uÝá¬îo&®Ê#yùè¦æªªÉ\x0016³öYò \x001c\x0011e8\x0015´b\x001eà@ÆÂ;¶µLYÅÖö,\x0018§7k¨9©}½×|9øm\x0014qèy-%ÓÊ	)ÿÈ©÷Qì
ÈâºF\x0000¥1\x001dÿ5\x0019?vux
©\x000eþ¢\x0011\x0003ÃAw#îñ¤¤åñ´°¶µ½Fkà½Ó\x0013ñáõ("Ý2kur³#%\x0005íàU\x0015	¢ãcÐq
#!KÁ\x0004,>E\x0005Ï³Wòó\x001bl¸ºîùrvÍyÆÝgqaS!\x0010Là«]0ÂoX$ºa¹7im¹ZmX\x0013Êt²|Dg¾&ÄG®¤P8d­{1ÆäbXÃÜ£}\x0005W=Îí¹¾
ä¦°\x0016Í\x001f!\x0013×? 6³C\x0002\x001cVn{Ï/ì·Ñqoõ¡\x0012®6×\x0013\x000bÊZ°Þ{v[}x\x0008D#ú.½´\x0016y6xpµ°²ØíÖÃçýT0êf:Çëæí~ÊWl4\x0010VÖMÍ?WÁÑÚ\x000bÒG/ó\x001eïÕj4o¢SÀkrG©z; tRF\x001et¸+ã×4$èN¬ÊmÍæK!­ná
Äær\x0001\x0006\z\Ø+¥Aú±¶ÉhÕ,\x000bsþ_KÖÙÎ­Äß?YKLÚ/ü\x0001Õ¹Þ¦ÍdÕÇV©2_;iL\x0016ïøª¢Wåæ6Ù\x0019®Ê½E«°¿¨YhÙåÌ;ñ}#j GÊ÷«cepµz÷!»Ãê
\x0016zú	*»Ý\x0001rÃ\x0003G!\x0003bãH\x0010æo¬²1¡PGq&íºR§dé¶¹¹©2Ã\x0000-½DxG-é3D²Óâ¯\x0002ßqCÉ¨j?·Ð(é+¡Å\x0013\x001eý\x0004\x0015$ñ×Î.ÀsY\x001f\x0008ÿÉ\x0004à\x0017Å(^ªå´ÜïMåYÛI\x001dcæÇFÿ8J·h-\x001b\x000eæÉv\x0001\x0005ëzoon;£_\x0011ËRã²Hö¾i\x000etÍupí«§C±Ëýô½\x0006cþÎCÜÃ­¹T-©KKp%ka\x0017ûýåbeÕQæi4|ÓÖ|
ÅeÖúc¥Ðue\x001cm0kçbï¯góã\x001aÄd-¸ò\x0001o0\x001d\x001e\x0005wDWm½\x0017öaÏ"\x0019[$5\x0012\x0016Û\´Ê§÷¾1Éº\x0015e\x000f\á öýÞ¨#Ûx¯\x000e\x001f\x0016©è\x0013sI'h\x001epQ
\x0018J\x000e¥AÆ-0>B/¼\x0018mØo\x0016íuî²Úv\x0005øwx\x0007\x001a,\x00009\x0011#l??ù¹\x0010ûk
i/òþp\x001bI®¡S4ÂdS¡\x000fÆ"î\x00197\x0018Å#Ýä=qa:\x001c¡OÉ\x000ba%MQ7n\x0018\x000f*áø`\x000bcd@²>ªØ]"\x0012DÂ­ÃÔE¹Ôå#	A{40Wu\x0008þì1]\x0012W*ºÕ\x0016"ÚÚY~ùÞ¶¤8\x001f1MVõjÄA¿ýuóiüôJQé\x000eµ
!,~¥&Ds/·Ì \x0016kz¡\x001faV+X\x0004Ër`:
9?¯~,lÁz÷¾×Ösñ'\x0000±ÒÃáIþ$É¦DÑ;e`nÖ$\x0006Ðûøê£^Nh\ÊV\x0012ßÂ"6þ<(wLþ
÷ÂaáB2;\x0012k5?ó×\x0014\x0001ÓÍ}ù©-L^¹>\x001ff+É§%Þ\x0011þØl\x0012¯Ý\x001eä`l\x0006]þ\x0019\x001a¹czÒÜ\x0017øä\x0008\x001fd1ùÒ(¦¤ï\x0001-JlÃ\x000c;á&>Ö´addC.\x000fr\x000cÆðÔ\x000cloÏÏú_&r$¨}
\x0013\x0014!íJa9±\x001fúÂe)\x0008Â7cÌûvK
\x0001®\x001fó<JCí¼À\x0018¹	,x!U»g6LK/Z
u\x0012XÜûj'_..ì\E_³\x00020ôWnaÁÇýïÄaæ¨\x000bfð©Âö|÷\x001d	/=\x001fC\x001fÈß(jÜø¬a¬BÔ±jöTÞådhz½h²F\x0006ÑsjIîä\x000bQ\x0019*v]±·bawå\x0010í§ì\x000f]!\x000c\x0016ü\x000fJã\x000fb¦qß
*ÂÙEÅ	ÄBRVv3Ø
]R§8óÆ©³¿Ù\x0017\x0019ÊP\x0019\x0017ª}®ý³\x0008)®ÿ\x00134\x000f\x0008ÃçíZnsáÔ{aâÌû×]LoÔ7Ê\x0010^Ï ÓPv_âì£÷ë_½;¡\x0014 *\x000ee\x001dj¤-\x000bÀ*e×\x001e`ºWJuç9v'iò:Õ­\x0011³kqî\x000e=^\x001bß\x0006¶[0Z\x0006»¥4R\x0006Öu\x000eÓ ¦\x0004!\x001b¾ÁWg\x0002Ù OèDj:#½T¡µÎñ@'\x001c<\x0006R\x0004\x001exÇ^üw T2"\x0007*3;ú0ê\x0006ý	ÚÕóD\x001f¿4éq\x001d Á¨\x001608\x000b\x0018ßÝM\x0014K«\x000bg;\x0013\x0014~«ÐØñ6TRÆçïá\x0014\x001eAþ\x0011+~³<þç©"bv8^øæß	)
7:|ü\x0010ìP)©\x0017Áè\x00026\x0018Ó"X`#Cø¾p6F@;ZKß\x001fÂG|Åo?\x0005ùVpM·\x001fY?S\x0006¿O\x000e
aö«5y\x0017ö%iRç\x001bµp\x0005®àf÷nW¨wÑm\x0014\x0011\x0000L¤\x0006Êµ\x0014Ã%l%²v:ÝÌ¹h\x001a\x000bN\x0011+ê§â,Ý7¤~ô:@±ýE´rjü×sXn0F]R`Â\x000fi¡År ¾iÿ¶7\x001d2ékÒâ>32²
Èi@ý¤\x0001GjM\x0008PMÓ[³YE\x001e£ó?=ÖçÌBDÄë%GðÂ¶hÇ>h­ÖBÙUðs\x0002ñÏ*ºIÑ\x0011è6\x0000pÑÍq\x001fÙ)·päoâñë/÷bÍã|÷Ò#©ÎºéM\x0014º.p{O¥X- ï©*E?\x0002
VúY¿³\x000bs«ZãY[|\x001c8O[\x0011\x0012'(þ!\x0016º,ÐÚÓ\x001d³¬ÈqÚ¥'G7Ô]\x0000|q1òWÐó\x0005±ÞËï&Â\x0005½Â\x001f\x0007\x0007÷ßð\x001fî$B¶¤Äÿ\x001b\x0002ßÿ\x000f°U\x001eÍ$apÏ\x0017ÏÄå­Eì\x0018\x0013Ë\x0019÷\x001b'\x0017Öß'®É·!.¦\x0014æK5DÍ\x0006¡\x001eê#	Ì¶\x0000bÑ¦*a\x0016î¥¿·\x0007¾|\x0005\x0017¹þs=y}tm?ýÝwß¸\x000emô.?lª>\x001fó¬­³1âÔ¾z7\x0000µ@­\x0014¢\x0001+~x\x0014¦ú!ík\x0010ìïRÇñK|×g^º\x0018¯\x0010{Áö.¤D¿we\x0011ûlðU ß\x001b`SA³\x0006\x0005ýèD«9\x0008Ôr\x0015*ÁfuÔìm;ù5\x000e;ÿË\ÀD\x000c\x0015Ü*Á\sPGÞIÃö}ò²M³!Î\x0000»µÃ4W\x001eêª×\x0011w¤ÉxBÓôú]ãc§\x001f": *Þç?è¤ÈýÈt3pí?>`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/tableau_bord_57.pdf](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/tableau_bord_57.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=¯NtÒ\x001cY_­ç¢\x0001ñô¶ìO\x0017iÿÕ\x0013lÛº©Î¥ÚE7[³\x0000
ÎêM1\x0015¬«l{"ý\x0017\x0013jÿ¸H¼S\x0000¾©Ã ða²\x0014IÀìÓ[\x001e6cÚûcÈÈ¿\x001fú
~\x0016<$/Ý}ü­f\x0010\x0012\x001aß\x00083êiÚ£´¥KôÄ&,\õÂJÉ&âe[}$\x0003ä¶í§ªK\x0017éº)÷Len8ö\x001dïéÕË	ßòÎßU¥\x0016wHþ\x0015¹\x0007ì].¾-mÅ£\x0016<\x0019½Õ¸E¾9k>õW3\x0010\x000fÉÒââ\x0002É³ËöÕ~´/G\x0014i\x000e(4«=\x0016¦Êª\x0011¥\x001bKPÃ7B'm£¢¦*N²Ï¤©>ã´Jð¾¯k*¿ç\x0017¢t
þó-iI\x0010¿Î@!~\x000e|#`f µÒàéõºÜtúîW8Ì£jiTÎÑ±@t1Ù3ÀRxÝ\x0008é­<d{$ù³:;f`³µôÒ©ëÇ..¨ÿ)Ö\x001b\x0004ì\x0015Ëù§¤÷ÌÏx«¥W!{ñ=^ ÃXgÃ¦HT´F#D¤\x001a#è¤Õ, \x0000Y©\x0015¿þ´ÓR\x001d­\x0005/®_Ï.?odÊ0*|,%\x00120;ã\x0006,\x000fMÂ2SúcÃ#Ãç¼Þß\x0008\x001eûúFÔFÕ"ßHæAË\x000fN\x0011dBçI[Å:nèÔð/\x0018\x000ctþý(\x0017l´æ¢Ýv\x000b¶ÿ÷Û>ï/\x000e²¾»ëjo<ã^GnËÌÎZ¨ç¦\x0010íJÛTÞpÞvþÿ\x001dú-+áM5ÎAª¼EÜ½;PYë_ß±s×Sö¾ÊKÉdÍÂ5åï\x000cô\x000b	¦mk¼5,ÿØy+KN|úeCE\x0011·ð så¶êIVç/*>ý­ûNçÅ\x001aÞAªøÕé9»\x001b¾ÀßÅIRËñ"ÊRZ~ÙGþù8âýÊ×+ÎZ\x001a*_çFèé«k]\x0011JÍj	2«ôJ7 oFÚÆEMUdIS}h\x000bUÄ]ÿRôÒÏoE^\x001f»\x001ab+L\x000cÒYöæYGWwû×ùl­Yº­ÉÃ\x0018.äÒÏÑ\x0000\x0000SB¿ÓRñv\x0011PQqiHòï§w,¥¼~iî\x000b+r_y§ÊrÙ£ýÏ¨·©õè¾¾÷µØ"´ôìü²Ó-Ú«\x001c¥èhsÎCú`²y:ÒGÕöÐ©`¬Ëòê\x0012¾+u®ùo§v±ç?h\x001bâê\x0005?ë'{\x001dÙý4ã£¢Í<¢#\x000b\x0014é^f2¯­1HIFÍ\x0002Êú¬eäc\x0013p¯­<6¾Ë;jûºÚpP5øF\x0012Á°ða²\x0014IÀì\x001b°<\x0014mJ\x0019Ö\x001fcü2ð;÷\x0016ÆÜ#ù\x000fÕD¡\x0011¤/WL¯ëÜÙÓÕ¨üýg7GXéÄ\x000fN\x0011\x0019ïª"+Eç§¿XïæFNâ\x0001`æò¿\ºÖájOi´K$/X0f¸íØ\x0012ñè*oÂü~,ÖH{ýìH°°ÎÅ
-ÔÙP,Íð\x0015¿>d{\x0012}í°»~kºv7fäZÍJv¨»¾ÊÑ\x001fû¬"Vüja=\x0018ï\x0006\¼©¡C¥<	ëvøu¹B¨á¦Ø\á`&.tÒS\x0015 mV©n8AuÓG#m¢Ö-NÒÏ¤\x00152M¡ô¶\x001cÈ\x0010ûF&xvïò?\x001c~âÚ\x0015J\x0002_\Ã>ë~ÖÁy×
\x0016r©Ö4$\x0000ÀÀÏ\x0016Å\x001aâr4\x001c½JàzÊ\x0008íÀ\x0010WO¬Sê<dn¨ºL\x001bRUS)\x0000éÕ\x0010ËÏBýkL¸S«@ñLU{ºÈ¢^µe*üï):ÐH6L¸ÛZÆ\x001a¨\x0005¿·©./OFÍ\x0002\x0008c:ù\x0014\x0018Y½¶¨Ôê\x001b5\x0011p\x001e¾\x0011ó\x0010>L\x00165fgÜåÑoSÆg\llìÙåþW;¸¥#ùFDÉú{:]Î«ö/kv¬Pñ"}\x001eA\x0017Â+£¨±sT\x0008®ð8Ù3%^\x0019\x0015ì´[­ÍÖV»Ë']
£7#¾\x0011ç´\x0003­½l®Kzå.#~pIIÓ=F*FUßÐ\x0003$\x001b\x00104¿:­¨òÏ_6G?ÖÚÜp$_g(\x001aÔðÍÚMÒ,idRKzª\x0002¤Í*µÒ
'¨núh¤mRÔú¾\x0011égR
¦P\x0011xìÊZÿú[GNÖÿõã(è+IG¸jWsÄ\x00122VÈ\x0015>\x0007¾\x00110GÓòF(ã¯ôå/ÈÃî\x0001:ÈT\x0014!:'ÅÜûâ%*ÒÎ;jD%l-m¦\x0006öò_q\x001dËÒ³»a&ôè¦õý
\ÿx° TA¸çR­(J\x0015wå\x0014U]ôå\x001eoé\x0002u\x000c4	\x0013¼ù	·U\x0016^Fv_2j\x0016Pyæª[\x0017dt\x000c.#¿]=kæ0>øFLcFø0YÐq#¢MIý1t\x0004úö²>×åûl(¬6\x0017#ò,(<ôauM5¹ÎX|"fÈó¯úÃ9q_§é\x001b!Y(OeS!
óÛ\x0007ôì~Þ\x000cøF;EÑWâ~Pß7ÂÇ·\x0011§¬ôÕd\x0018«x©Æ·ÉñYRÊ$ôÔ\x0004HUZ¥\x001bOPÕôÑHÛ¬¨uSÜ4\x001f©
\x0015\x0013¸xôym\x001f¬RëLF\x001f±2XÈ\x0015f-á\x001b\x0001ÓIÈïv\l\x00166	
Í=óÄv\x001ffîªýæç¾áPÀãhxkÁµ¶%\x0002-*Ï_Q£4æ»úéýùÙéËJë.ºûBÃ\x0001Ï\x0015Ë¡Ü*µW-\x001ee³êÚL\x0019\x0006]µ[âÂ^qWÜ\x0008N

ÄG:fç\x0017ïP<ÒQÍªc 4Â^[9?ã_uIcTRj\x0016PD¤\uØöP\x0012ÞgÝ³`>99\x000b¾©Äða²¨ 7;ãôªM)ý±±\x0007Cý\x001fÜæöÑ°ù¾×ûK¦\x0011¥Å\x001aì´ðÁ<Óòv\x001dohmû·å l3ÒpÄ\x0010VðÈ¶Öj{	4ì\x000cMÞ\x000cøFä3ì²Ç\x0013ð\x0008®\x001eÍ1¾ð.¹«*v±ÝUR3ç\x001b¡\x0000©³J«tã	ª>\x001ai\x0015µnq&)\x000bU$xëëc¯Ä»Ylµt)\x0004aW&+
\!Z5|#`\x00060\x0016ò+\x001cK'lºLI0O®V\x0015¨9ú\x0000
Ê¾\x0011þ¿\x0004G\x0004a¨ªó¶\x001béùÄk3\x0010ÍëI¯´-u.p*xv£.
'õò±=ò.\x0017\x001clõU\x0016¨§úæý¤!\x000eü¾lï'\x0003\x001cUIFÍ\x0002\x0002Â`MvÀ+óÈ^\x0017ýlëodÊ0+|,}Ìq}ËCÕ¦ÌþXäÊ\x0003qüÕ{Û{úo2º¯¥ð\x0008\x000b>\x000bªÚ\x001e±cjõx#{jd¦CóqÑ\x001a¦ÏñIuõézKs'D7#{j<Ä#ÚnPÐÐ9¦ø =5
Ò\x00102 \x000ccÅýC&4ðX;J¹)ß\x0008ôÔ\x0004HUZ¥\x001bObOº´ÍZ·8I?VÈF
\x0015\x0013êërÚÏ^_]\x0011uðJ2CÒ\x0011\x0002½
\x0019þÚ\x0011£\¡o\x0004Ì\x000cHT%öX:µ#?(ÃZ\x0002U"\x001eÛGRïñG6óø©»¾ÈÔ\x0000A¦Í\x0014#üÈe=sø
2û6_z\x0000!$* Ç\x0016Hã\x0004oÖ\x0016Æîá\x000eaT\x0019h:F\x0002G(ÂhÂ(¦k\x0016`\x0011¢°J\x0017§1O§ó¢¿go³trÑ\x0012à\x001b"Ì\x000b\x001f&KäñxËC×¦ÌþØh³s¼èé» yn¯\x0018}ß0\x000ez®ê*ëIbî7æ¨øFÒWp°±XãF[ãÆ|#BÄH~Õx¨»i\x001fkÙ^ªoÐæMt\x0010\x0015Vå¥c\x001d\x0005lÀü5N6^¾FJ#¾\x0011a\x0011¿}yÐº/.îðÕä,q¦·¥,æ[´¯Ee\x0019ß\x0008¥ôT\x0005HUj¥\x001bNP#\x0016+´MZ·8I>ZÈ4ê©ßõ]kSCÝÇm~7ò¥rß\x0008qÉ>ënÚ#Åj¬kúF$\x0012\x0000`\x0008\x000fx\±ÓÓ\wûÅöUÖd*Ã
÷\x0008d­\x0014|#É(EÒ\x001c\x0018\x0013µ\x0001\x0002¥6S\x0013æ©ë¿¹\x0000wúi©T@;P>\x0010\x001c[ò\x0003
Ó\x0018\x001e¡®Y@\x0013!üþÖz÷°ÒïkwU|È¹?<¸\x0004ag¥+X\x000c|#ÆIDø0Y\x001aqÐZ\x001eº6efôÇ¢¾çº|ê\x001f1t\x0002¾oD\x0014÷cã1»/Ì\x000cw·¾¿ûEáô\x0005%5ßþt×m«)fg´Éjÿqc¾ñ\x0011e\x0007¿	wåëGNVÿ¯ü6%î¤Qº¼ L¤sº¾¾Á\x0016]u¢rp0çXëÚíó¶[Ë¹ãMãI5â\x001b\x0011ÎI¿¨¸æ\x001f.Y~§U!\x0003ó3òßkºôóÚ7ûbëÍ´bpñÐJOUY¥WºÑ\x00045L\x001f´ÍZ·8I>ZÈ4xe£{÷Ü^ßçqYÅBöqÞBé\x0019¾¥u¶ëî\x001bç¸\x0002,ák¨+µòÊ\x0012\x0000` £fé&qæ¡í\x0010»\x0013¡¨ÞýTäM\x000b\x0002=5I\x0008iÏGðB³JR)É¨»±\x001d)ä6ÝÑë7R©DßRã[]nïþ@Ö\x0013
YãÔ'?\x0002\x0015ÌPL×, \x0001Y@nä!«\x0014Ô/ºA\x001c|#ÆIDø0Yj\1BkyèÚÑ\x001f´÷ë\x0016QbOÍÓëu\x001b3%euAqùïY	35XæþßÿsD\x0016+2÷xp`!ßÈ\x0008»¾(ßYPóÃ\x0010C7ÑÞ(îbßnè¥âÌùFDóA\-Ø¿·þ«7\x001cûN=¨¯©=5ÒS\x0015 eV(ÝX\x001a¾\x0011:i\x0011µnq~&­éb±ö~û^îÂ¸\x000c#,	ëFr_ÈÞsÊAj¢B®Ô¾¨\x0007\x0000&\x0005fØqr%WÛ}¬ûnÄwñ8w\x0007¿y¬ûJ_°£þÆcöäëà­¿q­pZ7H\x0018áØ¬WÎ8zcJ\x0011û~óên>cÍ\x001b\x0013\x000e>f\x000f·é\x000béµzÜõÊÉ SÁ°£jE¬ü§½vÚñ«\x0014í²Ñ]Òö7ûØßÈBÊüJ;û\x0013\x0013¾®«PÚ'?\x0002%~W]1Å\x0008EVAèk\x0016 çI[\x0005{8é²\x0007²÷¨ç2MÉoÄ8\x0008\x001f&K\x0011Z³\x0013\x000fµå¡kSfs&\x0016k$è>w?e##÷ÍºKÝOx\x0001\x0019í¨M
d$ØþyY.»b?=û\x000f¾º5¨t4	o$\x001a£¬£µzpNPVÑÑ&W@8!&oÑÛ\x0006\îçr\x0015?ÕyéD²µ¶ÛA­±9odánÛÉ¢,¶ðl<Üt£Se[\x001c\x0013ºg¯{{C\x0016ïeÊÚtèìÿøÃ\x001a­¡¹X¬ÒS\x0013 eV)ÝHÚKæ¨¤m\ÔjÒPûLJ!S\x0016*&ìw|r¤([h8r6\x001fùô²w8ÎÇ²¾úb\x001b\x001fß/¾&Ò\x0017rÅV^µ<\x00000)\x0008óéÑÓ«K\x000e¾{dG>_\x000blipó>=ñ\x001fÙù;\x000e\x001fØË\x0015òôýçµü\x0000F\x0011;~³òw½ûî½²\x0017þê·[¼¼°ã¶oÐj3µ\x0010\x001dCVpÒñª¨R©?\x001fS©R,/¿È4!³~\x0013-fîëï\x001e¯9q`3×2¦ç\x001cÂù×ÆÑ\x0019÷Å÷Öø
B[³\x0000-Â0->Ô3Ó÷ºSÎ\x000fCìY\x0012Õ6§óº§?&síX\x0016ð\x0018'!áÃd)Akv µ<mJ
ôÇÐÀC¿ßÿh ¤¿8	õGï}Ø\x001fJÎ\x0013oáã â 2oá`¿»«ó*cüKö\x0015âd\x0015}Îq·²b¤y\x00029¢Ö¬º\x0000Õ$%H+m3¯3TT\x001f
4&/¤­3÷^`!7V¡\x0000H\x0004Ñ¬äJÏÙýy§¨ü1C×Ï¬ï\x0012(d¡¦Ì
ßø\x0004\x0013ß§¥Õf
!Dï\x0017÷-u¡SAÈmQ:\x0007G²0ê¹|2?3þ¶ôee_x°Ã8¦}#´5\x000bPB¢®z(\x0003odJ \x0016>L\x0002øFè-\x000feþ\x0018\x0000`úAë\x000cæ*q\x0007X§åV·v\x0006åëf`û¹rñÚªÅkÞúØáGC<\x0019D\x001e[Í\x001b+%J©ý^:|S\x001cPÐj35`Bí\x001f\x0017±\x0013jË\x000e·ú\x000c-¡QAt¡àW[E"3ÿ`ãUy¥_½áà\x001fÛ¼)ºÇ)QÌûFÆ)Õ
¨\x0018ý©~#»Ì\x000fÎ¯\x000b|#Ó\x0001áÃdÅodÞòÐµ)è\x0001\x0000¦\x001d´Î`N\x0013\x001eôºm¶Ú\x001d®®>\x0015\x0006á`ô¾µÚ\x001d7»zSs%ÂÔ\x0011=UüR¢\x0001ã\x0006\x0014´Ú\x0004zÐ¨@¨\x0014?¸½ê)ÇB}w\ú·¤¢XA¨Ô
¦\x0016EM©AYø0YÉÖòP¶)è\x0001\x0000¦\x0011øF\x0000\x00003\x000b¦ÿ­ºd\x0011Î×\x0000@	TÙ\x000245@ø\x0000\x0000\x0000\x0000\x0000`¶\x0013vVgëÿ\x0005@ª
2[¦¦\x0011\x0008\x001f\x0000\x0000\x0000\x0000\x0000Ìvþ{?b%-\x0000* Ì\x0016 ©i\x0004Â\x0007\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x00000CaB{îëNçu÷ý@hLý¾±PßÑÛzaF#¹p°ÇíÀ}/\x0010Ò¸\x000fL\x001fc¡ÀýÔÐÑdFÊJA\x0007mM\x0004t'\x0018%É\x0014\x0014\x0013êírM¨Ëí
;@\x0005J{r9ò991\x000c\x0013êèçxØ?Ë2?3\x0018\x000bõ?bå×gÌ¢>ó;ÿÑlµ6[¿¶w\x000e&;WILÜô\x0007N\x0006¦¿kF}\x0005\x0000s ³z}ú¼ùüµ¾Æ\x0019¤{0\x0012t;Z#<UPVs¾=0*¿1üÈÙðÎ4ö¶ôìÂ÷Ï¹\x0007\x0014Z«°ÏQ_Æß6?=-¯´ºµ3\x0018Iôû\x0002&Î\x0004;Z«÷\x0008:³¹ü/ÎÞÉÎî4 S\x001aÃ~ë>\x0000¥WVµS·¢¬\x0014b^«Y»0zÿ\x000e«_ò\x000fê\x0008¨H@0bP	ÒLø.)YÎ+kë±¯::u)áú\x000bÆÍvH^dX\x000f&ðý±ÜX31/ï¨ýZ=Ð¹mvÛ±gÝM{2øB±Ûê3é\x001c\x0019ìlùãéêSUõm}ÉÍà,ØÞ¥»¬Þ\x001fL$MçjRÇè÷&WÚ\x0000Ä1;LötGEWF~Õ¥^qÿ&x«aç"ÙmËÊ¾ð<$\x0017î±W¾!O-=g÷gí³¦EERzÈmÙ½Bã³\x001fýÒ`\x000f®RH\x0018îlØÆeIê\x001b¡®
óò\x0011£VP4f*2tíLA,©µ¿³i0BO\x0018¥\x001dW!9Ö#Ø^ÿF\x0006ûàþóêu@ó¶i·c£ß<è»0\x001c1ëÛg\x001e´î[!ä|Áïm\x0001SÙ\x001eëh,X\x001cßà¦\x0006I\x001d­'M³Ä7bø{á\x001b\x0001`¦aÎ7\x0012¼Y[È?²8·pÛ®âõÙ|\x001bºòc¿ém)[Àþ_\²ùÅì=ËË/\x0006\x0016yÔ×r8<û·¯RË,¨½®1b\x0004¦0¡tÑØ<¦ñ«3H¯I«\x001b6ë )	õðé*ô\x0011ñ]ÒàÒÖD@iyÂQB/(
3ÅÜo.Í!I	FiíiçS
\x0011z.í¼"I±\x001eÌèÏ·±-ËRË\x001dµ´o\x0001vl´Ùs7íç{Û{úo2Æ;\x0016\x0001Û¡\x0005ârµºÜnjµBØY\x0015ßà¦\x0008I\x001d­'M³Ä7bø{á\x001b\x0001`fBª\x0018o¹m)ÊÝ¿öpËýXwf4pãã\x0012¶IZqòê0Û¢
Úßûuô¶yUWqfèÊIv_À¯Þ³\x000fò»øuÞªÒÆ±åÐ£\x0001Wc);\x0018\x0014ß	\x0011¥\x000f]ª|>¦´Ùîd:WÜØ\x0019,O\x0001&K#3ê>[\x0010ë-Ú×Ò«Õ¡£«\x0014´{Û*óÎ¸Á¥­\x000eÓò\x0011£Ä° 4Í\x00147\x000eJ_~¨Å\x0017¨Ký®ºâ{¤¨Þmh\x0018G_ArK;$$y2ÞÖý«õ\x0018Ú·Í\x0004;ÆúF¢×Â\x000eï\x0007}Ã\x000f¼4¯ä2;G0â¨zNo\x001b\x000eú==\x0003qáÂ¢\x0001Oz¼^ßcµHbÑ\x001b|=Þ\x001e¿á0\x0011LhÀ?ñ`V2\1áàcwâªYbså÷z\x001fD#´$uÐ­)Ió¢P \x001cì{0!wµ¤øZÙ¦)9ãªGáEªeIõ+*U\x0000R\x0016¾á¶ÊÌXÝÏ«»ùTØ@[ÅZéH	ù;¢Ñ¼×Ý~¶\x0011î³\x001faÛå}Í~¾Îö¶ìOO­ÿê	6Kê\ý\x000cèÎ8kV±Ãùêk¢Þ\x0014YL]jí#½Z¥qÐY½)vÃºÊ¶'/ «\x0014âûÛ?.\x0012ï\x001a\x00107¸´5\x0011ÐaZ0b\x0018\x0016¦ò[wÅ\x001cYm\x0001ö\x0007ÆÛT\x0012«U\x000eCAíèë/Hniä"ÏH íø\x001a¶È=Þ¦ºDï¶`ÇÆî\x0004zßìäÜ#\x0013×onû?\x001dxFù^>«\x000bvV¾Ï¯\x0000|Ë¸I1É¼¿äb[grç¾fÏÍØ.ci«\x001dö]m,ßÅ-òÌxa{4ü\x0011\x0013¼mûèM#±\7Zo]·ì[ÇnÆ(ÓÊ\x0015\x0013ìøêÄö\þ\x0019¹{jZâ#2£6å\x0014UY­Ç_\x000eºõ&Ï®$\x0013\x0011R®®õ´7îå<¥­+³ü(ýÆd} f¶5¿W]M*.\x000e½²¤ø q©\x0002\x0000Ô0è\x001báz¤ó3Þjé\x0015~%ËeUû¥Säc
b©-©h\x001bVH><,0\x0004½Ò.V\x001e²=üÃY\x001dÓ]ö\Y
m²4u5:ù\x0015ÐY72Úi)ÉÖµ\x0017×¯_\x0010ç\x001b1[\x00132få	#FqAÑøF\x0016\x0017Ôÿ\x0014\x000bO\x0010	Ø+\x0010x\x0002õ7\x0005Ifiä"Ï§×ë6r\x000bÞ´íèÝ6cìX$2òï¾\x0005\x000fÉKw\x001f«\x001fäÙº¼XcZd¹ýSýKÜàTæÓNodû©êÒE²\x0019
åP-«J-nîõÂ¢\x001dñµpMå÷jÛiEo,øÏ·
$\x000bÞ-õ\)\x0013e)­Ñ[[äQæO®o$!QÄç*÷À½ËÅI¥í°xÈ1\x0001Éû@ílÓúFdjRÜ¤W\x0014shFª\x0000\x00005ùFø¹9Ù¬fTZ¥Öï´T¼]DB+T\\x001a"©ñ\x0007®IO[#sµ\x0018VL\x0012&|#9û[|¢ß\x0011GÕÒ¹å\x001b1U\x001aG}Ö²XK·p]ígô/S¯\x0014<á^[y¬ÅÏ;jûº:n\x0013«\x0008Ô1-O\x00181J\x000bJÓLuY^]\x0012ë	o*o8×ü·S»ØÁç?h\x001b¢_o¶þ¦*É+í|åùô¥\x000fî½4÷\x0015¹¯¼Se¹ì\x001f>®Û\x000c³cÃ#Ãç¼Þß\x0008\x001eûúF´VBò¾Å\x001a:Æ\x001dU+Ø9÷Ì-Û¢ÏÑ\x001b\x0005GÜ½;àEYë_ß±s×Sö¾èÎÌì¬Ò/	Õ³»Áé\x000b\x000cø]_\x001c\+\x001e§GÜ¬»&§ôó[Qù\x001f»\x001abK\x001d$\x0003y\x0019¢°KËÞ<ëèênÿº2up-ÝÖäa$÷ÈrEVö.\Sþ÷Î@ óïGÙóÒ¶5Þ"Þ¯'m\x0015ëØW,*>ý­ûNçÅ\x001a~©jb¾\x0011uI&&ø\M\+KN|úeCEQV¼Òö:ÙÖ*9\x001aj~YRÌ¡)©\x0002\x0000Ô0æ\x001bQ[-Àÿ®4à'dc\x001d×rÎ	\x001aL¸ÛZÆörM\x0019\x0007:\x0018ØS3ÜvlILw¿>d{"t2ÈrhYßc¡W\x001a\x0001Á\x0006H¯R%%J­¾Q\x0000_fj"P'©ò\x0011£D[PÚfJñU{º\x000craºþ\x0002\x0001S¥\x001dWÅ<UÖ,Cy["9\x0014'¿\x000cüáÎ½1÷Hþa¾ÊÈ]ËöØGm¬q\x000e6«ÊBÙPI[ \x000b~.\x001agn(ÿË¥k\x001d~ÖD
³hÄW3\x001eém9!\x001eºNðìÞå8:ý\x001aQ!È\x001bÿ0ì³îgGßüúF\EÚë_dÇàu.öKC
ÅÒÔ&Äv­f%[0ÖW9úc?\x0011Ñ%æ\x001bQd¢Pðð]ÓawýÖtY#´\x000f¤Ê¶JÉQWSüôË¢@ÌI\x0015\x0000 Ißtå9µoD¯9f7?áÖ\x0001Ê\x0002\\x0000ZÈ\x0004\x0010A:\x00134nLéöò_qãÒ³»a&ôè¦õý
Ü¨´¼s\x0010½ÒÈ<sÕ­c;`¥VcçõèT
~ÒâQ
~n¦&\x0002u(O\x00181Jô\x0004¥i¦Â=jE{«¹+§¨ê¢O/Æ\x001dy¿ùú\x000bxLvH^\x0015#ò$3\x0014ñWúòÃ\x0017x\x0000åmäd2\x0018\x001b{vù¡ÿÕ\x000ené¦oénÞ\x001dÝy¬-\x001a4;ÜÛr['#Ù¯\x001cßHFQcç¨Hj$TKZQå¿l¶Z£WÃ|!\x0011iØ¬õ¯¿uädý_/8îh\x0006ä$o\x0014VíF\µ«¹DØñ¿J®H\x0007#í@k/Ûµ\x0010æ¹Ò,w\x0019ém
»?&É7 (âsµ¤¤é^ìIá$,Á7´\x000f¤Ê6oDZxâ^¤_\x0014\x001f4'U\x0000\x001a&}#²º¯5\x0008ùÝÍ
¯s3\x0017êílØk+ç
H~Õ%\x0015&@\x0019AGü\x0015·íÅÒ\x0007]µ[â6?r×\îÙêF\x0012§nÕaÛCcbÐ¬\x0014ÏºgÁ|r¶oÄ@M\x0004ê$M0bè\x000bJÃLÏ\x001bÍÎ/Þaê¼Ñ\x0004ê/`1YÚ!y\x0015Èyb;ÌO[ìªýæç¾áPÀãhxs\x0018ò\x000br(oK$'Éa"\x001d¾½¢ ¬Ïuù>\x001b
«çÞ[Xm;¿f­Ìã\x000c\x0010®9I¾\x0011ùZYÁ_¡xÅ\x0018LàâÑç.ÝQ2d°/÷Hr%|ètìø\x001f\x0019eü¶Éö$(ø\_\x0014|#Iü@lSøFÔ6yñ[c(Êâ¦¤
\x0000P#){jh¢\x001c<çÊ4Î\x0013\x0007 Z¶÷ö\x0001tÌlßxþHz¥m©sÍÑ\x0014¥Qès?0W©R0ìåyÑ_È^\x001bMß\x0008â$äÈ\x0013F\x0012*A©)\x0012w1íåc\x0017{ä\x0007./8ØJ1KFýMmÌvH^\x0019cò$Ë\x0000¤k?'W«
D£0ÊÛ\x0012ÉIR\x0019{0ÔÿÁíÿÏÞ¹ÿEqd}øOÑ°®q\x0015%¬¾Æht\x001aÖ\x0010ã\x001a¢ñè\x0012¹\x0000Y\x0003f#èz\x0017¼\x0000Q1É¨\x0018ÇDP1®²	F\x0011Wô\x0015×1a\x0014\x000c£r\x0019®2(«\x0018Àæ¥»§/Ó×êaïó9¿5ÝÕ§.§êTÕ)÷9\x001aö2ß5Íÿ­Ó\x000c!$¿½×cz89ó
çýñoD\x0012{M~Ä¼ÔíY²³ø6=7íé¨<±áÕ(YöÆ.´ÞRù:\x000e%óxäJ¶½Ä3Ü\x001f¹ \x0015\x0003ê\x001bñN\x0015Æ|#>ý@ýl\x0013øF$Gú"²º¤C\x0013Z\x0005\x0000¨á\x0013ß\x0008ß)iÏ ø¸^²ûàÄ¶X\x0018î\x00023ô8wyö¨»\x001dc\x0013õÑÝd+Ü¹r1¿8;|(GÀ&ªB,Aïö\x001bK\x001a\x0005õ¨<Yð\b­rGN0à\x001b!l@\x000fôN\x0010RE©vSü\x001aA:®ïfïî\x0014¯\x0014«á«ö\x001b¬¯íÐ¼\x0012õ©v$L:a2orâ;z.Öã¯ÞYZçºÖEé\x000e2ømH*òÅ.Qzã\x001bvG¿B¼êGu¶·ÊB=P-·ÊKN\x001e²d®K\x000cUGËß(·gw_ïQÏ\x00154C8K":S\x0013[Åfß"Ä\x0019\x0000ß7ª0æ\x001bñé\x0007êgÀ7"©<²í\x001f¤uI%Æ´
\x0000PÃà4Yù¦Ë®Úü\x0004Q;ínwØ¶Û.q~d·Ä*¼\x000bsÆ¸oÄ
õÈ¶Ç\x001dÿP?¬n`BX\x001bY\x000b-öI$Ï%j\x0014Âc§/[·ÝíÝÚ2]\x0010îÍõ¼§¨%\x0002b¼Ô':1B\x000c(Jµò#Ëpû\x0005"¼©íÐ¼\x001c3úäk»Ô\x0013Èï\x0019ðôh'ó&'¾£ë¸Ãí\x0018yÁÑò½þ½½,|¼MÆ>òKB;RæqWó,åÎ
ÉTtÙóbÇªÎè\x0005§J¯Ö¨I\x0008|:7«Ü½j>ÌXm&\x0018ì£\x0006ÛEù¹9ûJ\x001bxOÏã²1\x000e\x0001~oÏo5ùËUb±zæêÉÍ¼\x0018ö\x0016<68m¯J,V.\x000f|à8ª¾(q¢ë@Ki:¾\x0011A^ªÂ oÄg\x001fHm£^Lò¯Ð¯K?4§U\x0000\x001a\x0006§É¼;÷<ÓH.zã§{§©ÆâTöhF¬ÅÎ­\x0017aNá\x0007ÌúF\x0004\x0011_=\x0004K´6ò»;Çå×\x0010m!k\x0014ü\x0016\x0011uqÛ}¢\x0008ñFèÄ\x00081¦(õZî\x0014¹Ê¾)é%-ù0Ñ~\x0001Wµ\x001daRü6\x0000Éö\x001b~[äLv2orâ;hßÈ[Î/\ewÚ«Ã\x0008´¥ÌÃ×Æ\x0007!\x0019\x0016PÈÖ5Þ?0<|öû»s-[âgp±ÔDÓ|!ç¤7Ò²-ÜbG§Nø#·2G¯É?¹üÊ\x000fyÌÁØa3V4QB×D|±×:\x001b\x000e[á\x0006& }Ø,KJ<\x0008Ñå&ã\x0013r¯Ú¯\x001dIgïáU¸ÃW+>KÌU°5ÎÚB÷o="Ì.ôYõ]ÙåóÖ\x000f§I\x0015B¦4Å\x000c
lñN\x0015\x0006}#>û@²\x0012T®9\x001aÅ¤t¯N]Rü¡¹
\x0006\x0000PÃà4YðjF¯/q²ñºï\x001eIp\x001fôf÷­Q\x000fË¶Nr·îÍ%N¶\x001f~ì<»Ù}¹	ÊrÙr\x0016aN1àh\x0014:ÕÝÑÊ^nÓ"Ý\x0010*ê´%qÚ\x0006\x0006jã½Òu3\x0019\x0005NL>UO¦\x0008²FAî\x001b!j\x0018R}Ê\x001a\x0008:1B\x000c+J½zX1Y)\x000ey=»¬=:ßQñU\x0002\x001bº'$é¸Ó½\¥73Ñ~\x0001\x0003i!BódxÑ{ð«É¡#â-×ZÝ­ òdwHF÷\x001d É\x0006E?ÖSáÒ	-"ØÊ<¢Ô¯ÖØÑîyqJ1³iFpÍq27#se¤dFÏ3r\x000bÛÿh\x000e»n\x0015$Èc²³áGv¡j>³fj,v[aßÈÔç¢<µ£LzBD+å,In9\x0017í\x0004v\x0017}LÒ;1³u2¥)úF4é*úF|öDÙV®9\x001aÅ¤¤4½º¤øCSZ\x0005\x0000¨at\x000b\x0001ïìëd¦¾±jsÖ\x0015ó#X#\x001b\x001aÊ\x0005û\x00126\x0018Ð÷IÅ¥¬Jt·Ö±\x000bríÒ@
Êµï~B£ÐU÷¥â`Çl-»7\x0004µÄµQ\x0018m*F\x0015V¤QP®ÛWË¥\¶¦f1Aø¯:\ì\x0011QK\x0004¤\x0010êSÖ@Ð\x0011bXQ\x001aÝ\x0014wÉ5-Ññ+ÓW,ê\x001e\x0000NH?Û¦VX\x000c&Û/è%/Dh\x000c¯z\x000fñ\x0015rÒV\x0010t»B,Yöc£ n\x001cCå\x0000a?(ÔycéÖ×Ýf7df²õç¶+òÈzÚm\x0007¦òüv¡2Õy§$çý9\x0011Ü]!\x0011sS÷þ»A¸Aên(û2-6RPiÔü´\x0003\x0017j5\x0011\x000boÌ<[ÊÅÃ\x000f|õão+ïËö\x000f(äê¸Y¹¿è<|êÛ»í¾ïaMñÖX6Û!/­Ì¿V%o¹DJS_ª¤IoTaÔ7âÃ\x000f$É¶â÷j\x0014rØ\x0010½º¤øC\x0013Z\x0005\x0000¨aøx\x0005Õvakôh\x0005ë9>¹ÀÁïÙ\x0014­âyHhÔ[ª:¹Æ\x001a æ8à1î\x001b\x0011ÂÚ§\x001eC\x000bÒÚÈùmâÕ¬QhdÌóÜ(YK\x0004¤é\x0013¾\x0011³øÒ7Ò7ï±[.Ï\x0012­¨öªôf¦Û/ðÒ7\x0002ÍËð®÷ \x001e\Ý\x001b7I©\x0015ð[\x0013\x0005Q?ÖÝÑÒ¨´3Vª¡æVÕ\x001dg£KÃ8K :]ôv©¦öNE×Æ¾\9\x001d ÕÙN?ºµ£ÛÐð{£ÖW°i´³D¦4µ*hÒ*¼Ä\x001fHmS5GáM:uÉlö\x0000\x0000ú\x0008=!÷OFÎIÙ_*õOÊ®
YT%¾k;Ìñ Â¨oê¬Ø\x0017Ë®>_Yä$\x0016p\x0010ÖÆ®_,/±ë\x0002\t/\x0003\x00104
Icj\x0011¶D@\x0008>á\x001b1o}#Ìªè·ë\x0017
kttJÞ¥Ç¢$J½Wí7èñÆ7\x0002ÍËñº÷ :*¤»¬QÓÞÛWæÑ
È¡\x001f\x001bt\x000f\x0000\x0000À/<él©¶.*¹l¯½¯ê ì¾_k//-þ®¤Ìv«Å\x001b\x001f*\x0018@èR¸è¤ßðq£ k\x0014\x0002}¢\x000c\x0016º;è¶Â\x001a@ó\x0003\x0004ß
Ê®ßjV·(ÉÀ \x0001¾\x0011\x0000\x0000\x0000ÀÿP®ÊâÌ¸â»\x0000\x0000\x001ch \x0001\x0004
Ë_@ó\x0000x\x0007|#\x0000\x0000\x0000ÿa®hÄÄ\x0006\x0000¸A\x0003	 PXþ\x0002\x0007\x0000\x0000\x0000\x0000\x0000\x000eåºó36Ü\x0002 \x0002\x001aH\x0000Âò\x0017Ð<\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000C'µç-k\x000e^ÿòwN\x0000\x0000æxÒÙR}½¼üª½®£[­!¤\x0001\x0001ÕÙ|Ëvµ¼Ü^ÛÑíï¼\x0000\x000eª³íý*ÝÄî¶u>ñwn\x0006TwG½¼\x000fû¶N#Ý\x0016º»\x0001ÆtI\x00010Ø@e6MêZ\x001bXZ¼\x001c<ét51\x000fjôöI>à·ò\x001d/,<^x¢¤ê¾¿3\x0013 \x0004\x000e»Ê­\x000e\x0019\x001e:ìÅ2¿s#'p4	¿èkÅ¹F·â>	÷#öv©5'ICÓQù"\x0017³Ê;\x0006â\x0013\x0014sÚ~ì<¿3n|¨ûW\x0011\x000b7|{³#HGoÝ
"\x0005zJDf¹ÎxêñmëR\x001fÆ\x00176\x0018KÓGOýÈêyQ¢·Ç$g¬hëê¯\x000e\x001aºed®×\x001a\x001e\x001a2#!³¨ª£àÝ\x001d0\x0000ÕöÓ©aJg¬.iòÐ§éÅñ-®dM\x000fSê ´Ð*Ù Äde6cô4\x001f­C¤\x0007#P	þóÇ-+¬õQöÄÜ¯:µ?;sG¥´Åÿé\x000f\x000c}à\x0000¼: tØÓá(ÎZ<©/áSg\x0015;\x0007ã:W@h\x0012\x0000?ÒQûæH!\x001e\àxd0;e\x0000ÚâÀÅ¶{\x001e\Ù\x0019\x0013"\x0019zMÿ°Ø\x0019\x0003Z/}#m¥ë¦ëù=HÒôRÎïóÞ*GgoöûW`Ò]W²þp©JC£ÞúªBgBÞÝ\x0001r:*,ÃÙ"H:éÑÝ/©^X\x001cò°*wI¸ái©zÉ\x0006!æ+³	c¤«y¿¶®\x001fê[¾ØcÔ½\x001f8¾'7óbF\x0011ç3\x0000g£Æ>p\x0000^\x001d\x0010:|ò tÓyéy%UíwÇi@h\x0012\x0000¿A5J\x001eÁÚÍÈèEqó\x001bÅò	égÛ(\x0003i80R\x001dHkº{<!Ê½\x001a>ûõ7çMqâ¦g?\x001a´ÝxÿáoúÕ\x001a;ZÇïA¦·ãúîyÜ:oÉ²E/FrêI[Ê\x001eö×ç\x000faº§VFq:ì«ê"Ù}UÃÍa¤»\x0003P]Õ°Z\x001d`­\x0016«ß|I1Àâø\x000c\x000f\x000f-élH£d\x0010o*³QcD¢yÿúF;nÜ¸³´Îu­"ï:\x0003Ç7Ò]\x0015AÏ\x0000\x001aûÀ\x0001xuè°ûqç`ôtTå¯\x0013Ñ×Ã'\x001eop\x0005&\x0001ð\x000fOî¬ù\x0003Ý@Âfd\|@õR\x000f.ne·Ôþ~MÉý'Äi$ð=\x0018Fª\x0003\x0011m·\x0015§`&z©§}½7å²å,bÜ#±\x0016{\x000fkY¨.ûÞ\x0018f`62ñT³¶}{Xº~4Ý.fY*TW\x0004IÒ\x0008þé+OÝeÀ]m×öÅ±ãÞ[/=\x001cvvpÃ¯:
w92ÖÕfËK`§~ª\x001dW¯©î\x000eèAÕ\x0016%MQ!/)1°8^C5®VqÞjüJ½d\x0010ßTf\x001eMcd@ó~j\x001d¬o°µ\x001f·<¬'ûx\x0012ßHwGK}m­S1\x0008Õéj¨­­wuR^O¥û\x001eÕè¬«­S	|ò¸,c^céîhpÔì\x001f ßU×÷M­já­t2cê:ÿ@&h^n¹/jj:!yµAúCÃæ^Ä¡U=J¹\x0014x;ôÏx;÷KÒÏvïÇ\x001bt>ÐÛcà9DU\x0005êl¸I\x0007\x000c+¿jo`­kKIÚ\x0014ÏæCF\x0002Fª\x0003\x0011m7\x0014.cæàëKÛØ?Pµùqô_ff!"S\x001f÷Ë3ç2Ê¹¾ôvRÊa]@§J:åô&
ç?\x0019\x001e:#G\x0014Ò?³(¯ªÓÄ\x00045Í§Bä*u]ÚÂ¶¹96µÍ8&º; MO[éæiìdgêæÒ6O\x001f¡ù\x0012\x0003ã%TgÅ¾XñYK¢)fÉ\x0006!¾©Ì<\x001aÆÈæýÔ:T·5¿]åvôÉ\x001fm8Ðþ®\x0006\x0014}#¢O¸RW÷{sNÈÌdëÏ¢hiâXjQ±\x0019gÉ|#rm(¸P¨_w½­\x001a4ßÕà!¬àxÜqÝúÖdÙßenç¥¼ôù\x0011î-[áÏ-Íð\x000c\x0001§\x0019e-j<êªÌ[à~\x001a\x0017¦ºw)#þËôí\x001eôú@\x000eÇéÄHáWs\x0012w\x0016UÞ§Ô³\x0017\x001a\x0011WÖÀN^ÍéPðF
cZ®ÅÍÜ}í·þÓ°aµ÷\x0012WcCR,ÇÍåß¬_45\\
^2ìÅÕ§ìNgSûã\x0007¦k£TÑKVUZ+\x0000ý
É")ö\x000c2LøFFÅX~a\x0001÷´¬âyp~ý3Lg®Èz\1S\x001dí\x001eWðz¤á\x000bexø{§¿òCD¸­\x000có¤*w.£Ò±ëJEcq^¥\x0006j;öxË£«9/¹·EÉã\x001aù¨¤`q¼£«Ê\x001a\x0017IwA/¼øâ\x0008bßfÉ\x0006!>ìvh41Íû±uôô<>×è¹!xHfÝn=£\x0019DÛ72uEÚ;\x0013Ä³æx«ã1F<åAß°'G,aÓÖÿä>VI4_º#3a¤Æ¼Þý¹\x0001j&'Xíî\x0015\x0011ÝÌ(¨PïÛmxxl^U\x0017¯:®:ù@¦\x0008\x001cùË"§yxð³7zÎ\x001féÍQ|#½ìXV!'ä·k93Â\x000bbúCÃ&ÕNR>J^
=me;æ°
!dÆ²µ[3R^uû\x001fÃwfk£ÏTAVUà\x001b\x0001~ÇUn]÷~,¸~Ýù\x0007æÒÐ`¤:\x0018Ñö[Ö×Æ2}æÜôÜ#Ç\x000fïXÆöNÏ|\ú\x0000ó¾.gaòHUO\À¹7Þy}*mB#£³O}ã$iø­;Ã#=Îó;`\x0002\x000cC»¡Ø»\x001b]â\x000b4ù­8dý\x0012iw\x00074xTmMà\x0002ÛúÜÄ©¯þ-Ãz¡ÛDíÅñîæâtf >cuñLÒ\x0008\x0003:%\x001bø¨2³h\x0018#£÷{ëxøøáÚÚ?
\x001e»©-Õ&[Ú¾>\x0014·åÀ±Üu±î%éÑ\x000b¬¿2Ú¾Wºn&fä¢ì3öêª³YÜV(c¾\x001e»e\x0016ýÏ¨CtAv·Úr%~~\x0002Ûc·¾ó¦\x0010®-âÅ7âß\\x0016¿£¤¥Gô´Ñ\x0011aóú^QÐ¨·rËmí
¶éâÉ²~f¤è?³>B÷ý¬çmØô\x000f¿¿z&}\x0006­·¸CÕ]Ù\x000f\x0014\x0017ÁäÜËÎ¶ª®vß£4)µ¸É3{ì(ôdñÉÏSg³¾¹Yå÷É^ÍëúÍ3M\x0019[Å´\x0000·Ò}\x0018¹?4¬\x0008ÚIª±ÑGÉJ\x001fä\x000fµ¡´yfgM~âHaÉÚè;UT^øFÿá\x0016¯rz±âí\x0018$ihün
CÚV¼§fòòü[¸,Vä8"1\x0004÷/m©àô\x001e6zNÆ\x0005n¹$Mowyf¤oÿ;LO ºk
YOà¿\x0017ìÿ'íî**\x00170i_Ûa¼¤`q¼ß\x001952¡ÐÙE\x001a}ÑTÉ\x0006!&*3º12®ùÁÑ:¨{ÿmßV}'qD×?TËoä\x000f©Å÷hÓùÐnY\x0018*¶¯dMbÕÂm\x0018\x0010C\x001aòô4Z\x0011.,÷ñÛ\x000bÿ*«jèP2ÐjñB\x0019Cþõù+7\x001bè§(Íéi¬prÛ}4jnîÍ'Ä\x0011Ð&èRª1ã"C8×ù\x000f¤\x001d.¶#{³3·­ÿûW×\x001fSJº\x0015gwúQ\x000fK7eêðÝ¶\x001e¢WtÈ{Èò¾ç=¾m]J×´ûý¤aój'¨ÆÆ\x001f%-\x0005aãpÊF¦OsµÑwª ©*\x001eo\x0004ø	ñD@ÍÎ¤¡\x0019\x001c¶8X0¢íîºó»EÇ*Ý\x0012\x0015qÖ9\x0018\x0003k\x000f$Â\x0002\x0004=GÐU\x0006u§`ñX%¿ÇpÑ\x0019^4"³åy¦\x0006¾\x0011_Bu\ÿ>K\x000fÉfd^!
\x001aIÚÝ\x00015Ûò©Üß+Æ:6SR°8æá¦H!Kò*\x001f\x0012ßLa¦d\x0010S¹WÓ\x0018Ðü`h\x001dOüv¡±áµî­#¦}#cãòïPÉÜJ¡»æ§æf[üMF"^|ã½´­o¾/«ÄºÔu\x001d°ÇUd\x0017e\x000fP\x0013\x0012»þà±ã´ä¦E\x000b%Íþ39\x001e]Éb²Gv\x0011Á\x000f\x0014ó¤ÓUWe+¿Tr,+~¢ÇWóÙ\x0013\x001f\x0016î¨*¡óYTbsv\x0012½Z\ |<\x001ff¿\x0001U_Ø÷Æ)é%-ý¥aój'¨Æ\x001f%+\x0005!\x0006\x000b·ozP±7õ¹]F&k£\x000fU!dWµªxä\x0013¾\x0011à':\x001bìegç®Ã½$¡dÊIÒÐ\x000c\x0006[\x001c<k[|Ã`dô¢x×e\x000emx\x000b;yeq£¾Q|â¼t`KRtdèø³öÎmÖÔX\x0003\x0014þÕñ,ê0\x0000¾\x0011ßÑ][Î
$¢3Î\x0013î\x0000!íî2Ô½âîÀøíþáFËÃÎ6GYîßÜ¾YÅÝYæJ
\x0016Ç,³pùáü­L¾\x00113%\x001b¬Ì½\x001aÆÈæýÛ:(ªçf[Ë;¢ ¬cn9¿zÐ­¦
mß\x0008o
¥J.ì¹ø¾c+ÑTÛÙÕÏèïÌÑ¿OI(g¦Ç¶{²Kø\x0010ÂÌð<£³*w\x0011÷_/eKÏ\x001aü@¶´\x001f8N[VÎ½Zr^I§6\x001añP\x000fË¶Nâ'þìm,Ü\x001e­þÐ°"dj×¯ÆÆ\x001f%/îæó\x0019\¼©o¬Ú°þ=.ÞéøDk¥ªÁHÍñ^\x0015úUÅ3ð\x0000ÿò¤Óq$YçÊ9Ý4\x0018©\x000e$ÄÚv¨êë0_Ùp¶NzWì¢ >5 9ÝÛýßÇ|j!nç°¥¢1ªN\x001a357â#ÄaÁÆ¿óeE»Á5m.\x0011È\x0011vJ{,gó\x0017"È\x0007uæK
\x0016Ç\x0014TS	\x0013g@82Fä\x001b1^²A\x0017Ýº12§yÿµ'õ\x000f\\x001fÿê>GÃ^æ»¦ù¿u}¨Iß0éöÚ7Bß QybÃ«òYÛØÖ[|æõæïËé\x00142#<aÄ¼ÔíY²³øv\x000fif\x0004õ\x0011=Aè;\1ô¨Á\x000f¤ÿ«ÊÈÅ\x0012±lsnQé9kÇ±&ÑÄÙW¾^ávÚ[~ø×ú±¢;¯ûCÃ:\x0019Öz\x0011oÄà£î@¤ÚKpÜ\x00125?ÕrÚñ+aÓµÑgªÐ­*ùo\x0004ø\x001d>tÆsÚi0R\x001dHHµÍGÑç:º~}÷<æçâKÐ
!ðw{\x0003ø¨é\x001ae!M£â\x001bá&L\x0017g(KÐ($]"ÀW`qhµ^ÑåM\x0015Þ«Å1\x0001õ¨<{\x0006­´È%Ö*w¼)"ßÁ
B¼ªÌ\x001aÆÈæýÔ:z.Öã¯ÞYZçºÖEéºLúF35B\\x0017ï"\x0018P-·ÊKN\x001e²d®£7Ê¦êzów¶n
æÂ°{xÝ©ÎöVY¤\x000b½Ì\x0008	IÉU3w°¾ºØRáQ=\x000c~ ÈG1,&£´©[ñ«£OÂ\x001aª¥ìËÌÌlõx©Ãø^Q`IÑ³£ú:´Â\x001aªß4¬\x0008Ù|#\x0006\x001f%+\x0005Î12ò­#w;ÚèÐMíÒ@ÍÞÕFïUARU?\x0013¾\x0011Ðßt·;lå4¶Û.qÝ\x0017ÏÝ\\x0004iäÖ\x0016#ÕTÛ«"\x0004Zh±L~ù¶ÃÅ¿rÃoR\x0015·\x001d4Ly)ßáËßq\x0013Äåâ%g($]":4BøEêtå\x000eÈ[\x0017\x0016,qNoú²uÛÝzÛSæ³Û\x0008{s}fæ®bÒR¡
B¼¬ÌZÆÈæýÔ:º;Ü\x0017\x001c-ßkÞÛ+Æ¬oäqYÆ\x0018v¶5/ÇÆ|¦;ôÚlùÐeÏ\x001d+Jö¨ÁöcQ~nÎ¾Ò\x0006Þnó\x000fWô¼`±\x000bíÄo¤·§Âò\x0002»TJ5JfÚ ³ù43\x0002úÏdþâ>H2vAîïØÍc²à6\x0006?P~LÆ%v«,u÷xBÇW\x000bÙãÎñ	·¨Í²THc±*¿Z2(êi+þ;ws\x0013\x001fÕ\x001a¾WnÝÉô;­å÷ä*'V;oÄà£¤¥@Õä/a]#ãó®©5W\x001b}¦
¢ªâOµÖ
Ïá\x0007ügZ©ÆâT6zX¬ÅÞJF¾Ìê@Bªmþ@®Ê¾\x0011.zUÐÁ¯\x000e\x000fË¯!ÚúÌëÜs*\x000cÆúÚE3A\x001a¦íð¡«¸Kè\x0018ÌÝü\x00088ÌÌPHºDD\x001c!ßÿ/YþæÅ¹ýÿ>ØÛ\x0003c\x001cá:\x0003UQqq\x0010l\x0010âmeÖ6Fæ4ïGßÈ[Î/\
]~nÖ7"l\x001e\x0018>rQÖweÏ[?æ®Éâi\x0010d#|öû»s-[âg{$ãGDtD\x0017{­³Áé°\x0015n`\x00028\x0008w\x001aa\x000bÄ¤7Ò²-Übz×\x0011ßPpÃÃ£×ä¿\~å¼DÖSÁFk'ÎHïzÏ¤3SaYLõ3ëJÚz¸ Câ\x0004&>P\x001cKä¥
%ÎnêaMÑ?dEðØa\x000f\x0017\x001e»5sí\´\x001c&\x001c4Ñ«¥ób~êMK¬õ¶ð
>Ñpíñøqzóq"µ\x0013ùF=JZ
üþpAØ{ßKËØýUQy}§²ð½¾Q\x0005YUé%h­\x0000ø\x001c!Qxôæ\x0012'\x001b\x001eá±óìfw\x0018\x001fú¬ë\x00134òA\x0010Fª\x0003¶©îVz?]Cc\x000bë<~X1½ììõì²FæO=\x001d\x0015_%°±\x0014B;s­¿i}bò©z²!½\x0010Û<üÕeÍL»\x0010wï3r®ÿÖCyàf^_Â\x0001Õ}÷H;\x000e\x001f\x0001\x000bå²å,"¡HÚ\x0008I\x0018¤s>\x0013\x0008ãÕ\x0011ñk­î\x000e§òdwà;æ?%%\x0001\x0016Ç8\x0006|#Rå\x0013l\x0010BZ5Ð1F¦4ï¯35\x0015.Ð"öPl{bÄwðÄ$½\x0013#F	Þ'Næfd®\x0014%£Ï¬\x001a&o\x000eÒº|\x00007·°ê5ä\x001béGÞ*H,{×è9\x001b~toð Ì\x0018Ýgº!QË\x000bï2¸oÛ½À\x001d"þ¥=¶G\½3ö\x0000&l-]þwÖóÀßÌ¢½¬Ë|8\x000c½WËæÅTÍñ·Ø0²Ûf} a\x0012þ}#\x001e%?SS[4E½Wòþ©ZÊlmô*\x0008«
Ak\x0005À÷\x0008Ûh×b\Êª´øèHw
\x001c» ×ÞEF
Fª\x0003¶åeD7Ú\x000f_¾bÁT÷XBá\x0006· A\x0018m\x001a´)îÛ#¢­ZõÁ«S8Ý²Ö,

¿rÁÆ\x0015ßµeÅü\x0008v¬\x001b\x001a\x000b1£3ïã[¬éî\x001aÂ[ÞáD%tR^\x0007°8Æ¡\·¯K¹lM\x001dÍh~^fqyùUËó¢I^ù\x0004%\x001bVfU\x0008	Í\x0007Vë0í\x001béãaMñÖXÖt¼´2ÿZb§A5n}ÝÝ«ÌL¶þÜvEr%\x001cÕÝPöeZl¤PvQóÓ\x000e\¨xÆ{Úm\x0007¦ò,_¾\x0011:\x0012Ã÷çDpW¥DÌMÝûï\x0006á\x0002YÂÌô>À<=»sîjJÈ¯æôiè\x0003éô\x001dö#«¹GÂ§¾s¾æ\x001e·B$ûS\x001d72Oã\x001dY\x0011±«ómm\x001ewæj¿Zn\x0005~«É_Î´\x000b\x0005÷ ×\x001aæ\x001d\x00028?FÔNCì\x001b1ð(Y)t7Ùò×Ì\x0011;	%B\x001fS2]\x001b}¥
ÒªBÐZ\x0001ð9¢m\x0003\x001e\x0012\x001aõÖ¡*w\x00044\x0012\x0002Ë\x0016\x0007:ä¾ÞÞN»õ-¹;wxxô² ÝÀÔÐI[ÊÄÙTk\x0017£ç¬ÿÁÙ­ÝvÄih¨¶\x000b[£GËË%t|r\x00038c~Æm¢»\x0003ªP\x000f®î¤ÔápÛrà\x001b\x0019T(ÇbUP¾~É\x0006!ÞúFqÍ\x0007Uë`÷8)î.\x0013ÓÝÑÒ¨L{¯èI
5·ªî8\x001b]ÞØ\x0007ªÓ¥\x00126ÓHf=\x000c£\x001fHu¶7¼ÿ¢ÖnçúH·\¾¼ÑpO[Éº	"o\x0017/òaåpG~¿âx½Ð\x001bPmu¿\x001cJbÃ\x0012ÜÆ«ù^ß©´ª´V\x0000|ìúª\x0019	EU\x001e÷z¤\x0011\x0013T¶Øï\x0018ñ0\x001eûo×/\x0014ÍÓ£Sò.5\x0004ëh¶ë\x0017ËKìÚ\x0004\x0017ÀÍ\x0000=\x001dâ¬Å<ÚÅîË\x001f\x0004izV."ç¤ì/Õ\\x001b\x0002ªx5ã6ÚÝ\x0001-¨#éâ=jÚ{ûÊø\x000e\x0007¾A\x0005±o¤W·d\x0010/}#ÄÆÈ æÑ:\x0000ð\x000e:RèLî\x0008Ò`º3"Þr¥QäPêj¿ù5ë\x001b	«Ð«}}\x0001£
\x0000¼¦û~­½¼´ø»2Û­\x0016\x0015\x0007-I\x001a0Ø CZÉg\x0013Ý\x001dtY.*¹l¯½\x000fW¬WÐW¿]Ói\x0017$iht¶TÛP.\x0003b\x001bAwçKø\x000e§ìú­fóÚTîÍÀ cJ¼+Y`\x0018h\x001eê²ï!Û)áo8¨ì~×ÈÙ¯/ûë¼©ü\x0011ñï|YÑîÍþ¦ÀQ\x0005\x0000\x0000(@¹*3ãFâr
\x0000T@\x001b	\x0014PR~\x0004Ê\x0007\x0000\x0004+÷¯ç®þ¸¸.0Ü\x0001ÝM¶Â©Bh;N"b¶\x001cüÑñÀ»¯\x0008(U\x0000\x0000\x000cæ\x000eqqi\x0000\x0007h#\x0002JÊ@ù\x0000\x0000\x00108ðáS\x0018\x0010ª\x0003\x0000\x0000\x0018(×±Û\x0016\x0000uÐF\x0002\x0005\x001fò\x0001\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000ÁÆ½öc\x0010\x0008\x0004\x0002@ \x0010\x0008\x0004\x0002@ Á&ð@ \x0010\x0008\x0004\x0002@ \x0010\x0008\x0004\x0002	fo\x0004\x0002@ \x0010\x0008\x0004\x0002@ \x0010H0\x000b|#\x0010\x0008\x0004\x0002@ \x0010\x0008\x0004\x0002@Yà\x001b@ \x0010Èà¦ú}\x0017ÚQòÓ®kw\x000e·\x001aûíQç\x001dÙßB\x0002N«¸½h\x0017>Õ¹ãÓóçv\ÚWÓªÌuØñó®\x0012:ÅÑtÔïª\x000bx>\x0007ôw\x001b\x001c\x001cm<p¬wæ\x0007¦,\x0002Ù:{í\x001b)¨©ØuúäÖ5'Îd_q\x0004\x0006úYòoëSÎG\x0007­i'Ê­þÎ\x000c\x0004\x0002\x000cbiÝ_üÉËSB\x000ec$ä¥Ö\®?BòÛÖúÝ7ýYøí°§_NM)©Î\x0017¥)¸aáþW&câKÔFS
Û7N
¥Ó,þèßU4\x0004åPÉ¦	¢²°ñÜ!Ý_\x0011\x0014÷\x0010\x0012¢vaF
¢QÛ[sÏîËeã©q1\x000bó.\x001d
ùÔ\ú05æiQËzvùæôß)ð¿\x001a\x0003RÌéÓl_\x0017¤BÐvÚ`þöÎRP8áðÂöA\x0018\x0005ôNÐ<¹7(f¬3á(k \x0006cÞøF*·d'D{¾Jµ}£Ý½®õrAâ¦Mñk?Ù|kP¼¯]¿³îõZ \x0010\x0008dpKë¾oÓ&I\x0007OE.ùÛ¿u\x0007*»,KÆÊ\x0007¥a3\x0014Uó\x0008só¯/ï\x0019F>Ä\x0018\x0016ãc0¢â\x001e*BÚ.|â\x001bÑ¨í.ïý;I6"^Îµ}#~BkeúÛ\x0011O\x0005KÑô¿Õ'|#D¯í¶Á\x0003E«"ÍøF¼±}\x0010¦\x0004Iz'hÞJM\x001a\x00143Öp5p1Ó¾¦+õØ¡ÃÂg¥\åòSi¶íÎ\x000eóÏ VùÕð@ \x0010®\x0014Ø\x000bæGr#q/L0³)ÑÛ3ë´~+²ÃÂ&ÇÌ\\x001c\x0013\x0011Æ\x000frÞN·»íùÇÜ\x0004¾~\x0011£c0Ââ\x001e\x001aBÞ.|à\x001bÑ¨í­¿®^>}ò¨±/¼<)ÍÒ3©\x001bª\x0005\x001f:¿ý¹PQÑrûÔÄµ\x0019­\x0018"\x0017ÓúoÄ5Û\x000eq\x001bt}j\x0017nÜ7âíÐBÖ;AóÄA1c	GY\x00039\x00183é\x001biÉ±¼>ÓØÓ/'.Þ¸qaÜä0î/Ïn<wÐ?¥Ùºcã\x0018?
b_
ß\x0008\x0004\x0002è	ï[\x001e6vé§Ù5´\x0001-p\H^ÊÂ\x000bOÔª²¯Û´j<,drZáçõß\x000eûSNùaµß6^z/1[¿[¾ºRnµ]yEi\x0013
,ÿAÌ\x000bo+õÆ`^\x0014wàávA¬F¹hÕö£wN.|þ{è´u\x0019w]ÇZë2Ö²{Åy\x0010æI\x0005¦v&·¥\x000bÙiË\x001fn@¬\x000cC%âK}êôu\x0010µ¶CÞ\x0006W¢ÛÈ>ÙÙLþ^ol\x001f\x0016²Þ	7#\x0006
	ëL8Ê\x001aØÁ)ßÈÑ»ß½ñ;£\x0016îÌbjT_mÜ¶éE·Ëôé
w<ÕTÿ¥½bï/_\x0012DÈ)¨qìÿ¹bÿ­zåí7­M\x0007oVîûÙþB¦­kGëé­õÐ
Û¾Û¦ÜæÜ«soËÃa¼ºßt\x0002@ \x0001,Õ«\x0013ØÓ©Ï/?ßÌÿýàéµ¬]~vÛ¯Õ~ÛpîÍÿaÇE¶\x0016zøõQK­{UÎ\x001d\x001f,Ùô,óü¨Uß\x001dýïÑúK¯\x0008gfá\x001béW!\x001dyQÜ\x0001(Ûißvm?ê¬ÜMÇ\x0002=y±Ý¦þå\x0008&eÌÁJnXâ\x001bJrË\x001f4\x0018Zn«\x0001\x0010_êS»¯\x001cSm;Äm°Õ¶â/ÌzqBÁ~\x0003ïõÂöA\x0018!ë y3bÌ \x0018·Î£¬\x001eòðµNâ¸\x0016!\x001a½ät;}kýnëÚY¹
üç\x0005»k<¼Ö"åÿ¸ïßÎqïq
Z¾÷\x0013qÊÖúOm£\x001c3ß¶á!l»à\x001fsÐÍü/tõm\x001e­ûOºàå1Ü~1Ï§|qõi\x0010½Úã>Ô	\x0004\x0002\x0004º´'ÿéâþ°js­ðw~g¸]æÓI,Ì\x0015ÿWÓ¹xvì¸M;\x0014Ë¯qL]V"_å¶GMðÂ\x0008øFú[\x0008Ç`^\x0014w\x0000ñvaÖ7b°¶+¯ÌV~\x0014Ç\x000ei\x0012VW)ä6jí\x0019?í(\x000ePñ¡>µû:\x0008-Êm¼
:Ï,\x0019Ëý^Hu\x001c"é¼°}\x0010e!Ü7\x0002Í\x0013!bÜ:\x0013Ú\x0001\x001fñ\\x0001ý!îaÌ×\x0016Çp0.\x000bå¨,cîÝU¯ üqï¦ÌyF2dÅÆ9Æ]{\x000f¿\x001d!{Tè´\x000e\x0017¡bÖÇ¢§ðw=ßr¸\x001e.²Qß\x000fu\x0002@ /Ì¼/nT~qó®ø²3~Ä7"]­ãFªjå\x0002»õeÆ\x001cNßÕ ûßÊÂ\x0005LÇûLjaÚÇþ:ª\x0019DbÔ7b´¸\x0003R·\x000bs¾\x0011#µýîÏWÍ}?Ñ¿jÓ]>·\x0015+\x0017*\x0014\x0001¿ã\x001d'ïô©Ý×AXQn;Äm°àç¼hvÐþÚÓ¥Ï§ÆÍ|ytÝSVÊæm\x001fD&ê½\x00134oJÌùF\x0008­3¡ÝñÃ`Ìose\x0013\x000cBø4¡SRÓÿïÎÁêòôÔÉ7/dfN9¿[I\x001còeÌÂµï\x001fØ³è\x0015÷\x000eð¿ìý­´ÍÞý\x0013£ó¥ûsèCL­_þ´ÙMÁú
îí²¼9[úBûgfÇ¹]4üóÃÇ	Ur\hûFDázBMÙ~ìð»/°§È*D¯æ\x001fèK@ \x0010ÈP\x0015!â÷WÝQ\x000b\x001a´ö»ÿý\x0003ë«OZ+
¼Æï!Wé0ÛöXþ2RÍÛÌ/<ýnéGö\x0016ÿ±
"!\x001c-î!$íÂoÄXm\x0017\x0000CÇ/8ö«°e]mqû;|#\x0006\x000bÚWúÔìë \x0018h;JmðàéµQ²EOf\x0015uÝ\x0016ÁÍÞd¶\x000f"\x0013õÞ	7%\x000c1ëLhwü2\x0018óÎ7òÔ³Û³´"\x000eÝÛ=õE<·í\x0002«ÕÃÿ·çO¡R÷µà\x0007àôùõÅO¦yº_T\x0015¼\x0012&öôý±ùó\x001dÝz¹RØ·Æ\x0012¨L7Rôãî\x001btÀ\x00102ß\x0008oV<ó\x0015@ÐÞ«¹\x0007úR'\x0010\x0008\x000424¥µ>{{äìªLj7¤ävßíÜr½¾ µ)÷¼uá,÷¡E¾§õ\x000bË§3Ý)mp¥\x0003WÎÍú«ý\x0018â;x\x000cfª¸èµ\x000b\x0013¾\x0011µ]<ûð¼ì\x001f\x0005y\x0001oÄ¤øJ}\x001d\x0017Ò¶£Ü\x0006]ç.\x001c©ä\x001baÖ»Oæ;l
Ø>DÔ{'hÞ\x00184(\x0006¬3¡ÝñÏ`Ì;ß^4f>eÈ+«Ùú)¸Bç­øK¢ü\x000bó>g:\x0010á\x00022Î\x000fÀo#äöf$¼¶ö#g>\x0013GUÕõÍK¾Ü¢QèJ¾\x0011>\øtg}Î	ëG\x0007­kN\Øï$z5÷@_ê\x0004\x0002@¢´î=ÊuÚ3\x0014Uk¯þXÚþ¼ìÌ£[T¦\x0003|¼µ±IÒQkëÍþ:b8\x001fô\x001e¾\x0001\x0011ò1â\x001e*¢ß.\x000cûF\x000c×ö¦/.Ùp0gÑkî«\x0007IÊ(\x0008¾\x0011â#}jõu\x0010µ\x001dµ6Ø¶ÿôgq	3GFDoûç®[_;l\x0019¤IlO\x0015ö\x0015WÛÈ²aÌöA<E½wæMQBj	í¿\x0006cf|#¯@g.tì¢ëÔþ(÷H(ø\x0001ZïlH\x001dÿLÛÊË\x0016*\x000e
Én["ß\x0008wG§n\x0010úF|«\x0013\x0008\x0004\x0002\x0019j"ï\x00141gÏ¥ºãyÑr§<¿íU!ýíµIìêü\x001eLWîÔgèÿâwäÂ72\x0010b`\x000cf´¸\x0010µ\x000bCYóµýh½íÃå]ª\x0001A¼\x0011â\x0013}jõu\x0010\x000f!h;úm° ¶þ°üÔ@è°Y\x0016[¾~\x001eÛ>(ôNÐ¼)1îl'±ÎvÇ13¾{YÛþÇí£ø]âÚj±Nì«Sß\x001d·øÏ«>(¹{¤ùBÂ³¾ô\x0003\x001c©)OKû´Lç#çïÝÓ"y¸²B\x0012\x001fÌ7Â/|#¾Ö	\x0004\x0002\x000c!\x0011\x000fQB&§ýs\x001fi_×ûõ­¤\x0013Æ	¦Ô-M,D&-*\x001d­;·l\x001aý_£^ßÓè~2|#\x0003 \x0006Ç`\x0006{H\x0008i»0v<Ü»ÚÎ\x0007-t_v©2ç.ð\x0018\x0013_èS£¯HD¯í±Mß\üäyÒöhÚöA\x0014DÚ;Aó¦ÄTpo\x001dëLhwü9\x00183u/¿COâ>R]\x0018ë>ö2áÍfñ\x000e\x0013þiÑùèäÿk(À\x000fà:|ëê\x0013?ÈÞ´Þ½æéÐsPH
ìLpH8SÓêØºgSü¦OV\x001cüî³z¢Ws\x000fì\x000f@ \x0010È\x0010\x0010\x001f\x000cQÖ]X\x001eÍö±j¡Ø\x0010RÓ²/}­ò_q«þºqS<-\x001fÏ{½6nÒìUâ3
?Ó:I
1)æ.X!(î! \x0006Ú\x00115ÖöÛ¶ìs;JÎeÿç®XÃ²yÊ³Üý\x001dð\x0018\x0014ïõ©Ñ×A¤¢ÙvtÚ ßFØ`üßùpzí\x0011ÓsBÜ;AófÄì¥ð´¨XgB»ã×Á)ß\x0008ïÌ¡÷l¼²yK\x0015½Õáh}Å?Òf²··<5qm\x0006í nÛ\x0013Í^¥4iã9v/vÜQ
?À77.||8/yÛ®Í7ø¡¦­kG«øF¦¿{ñnáÊbz´ìÊ7Rjtè©Ü§öÃ×óbXW<\x001fqEïÕÜ\x0003}©\x0013\x0008\x0004\x0002\x0019*â!Ð?½4ï3¥'\x0008ö+ìõ×%Û\x000c/d÷\x0010t¿ý#¦Æ`úÅ\x001døb¬]\x0018Q#imçg\x0019\x0001+\¹ÇØ½ÓÏg_úþ\x000b¿ô#¬ò\x001cÃæÅ[}jöu\x0010©¨·\x001dý6Èÿ6rÕw\x0007¿»ö\x001f^þ\x00076¢(\x0017âÞ	7#^øFÔ¬3¡Ýñë`ÌonïÇ#ùìMznq¬hóp\x0017-¿ï©È%Ég+öÿ|é£\x0014÷}µâ«ÄHü\x0000Îo­ÿqÛ×]¬Ø£ò³¬ÿË\x0004¿\x0015\x0015öxy-eYö'ÉÇè·¨\x0015.ï\x0018\x001eöÂÜ­{ÞýÇâg¸\x00182büá«{g	]úñG³§H¾T÷ÕÂ§ùN'\x0010\x0008\x00042$Äuð§íòzÂ÷®°ÛbéY°7-þayÁ~ébøFü&ªc°¦ú/oT~q£2÷V½d[\x0008Iq\x0007¸\x0018n\x0017ýá\x001b9ZwféDVÏ3ã¾­dG)íÿsß>Àï\x001f\x0016\x0016&®:¹ÍjÓ/\x001f.eWúp'¦Q!Ö§J\x001bÑìë RQi;DmP¸-"lî[ÅÕLh\x0011×××\x000b\x0016NaøüòóÍÇ\x000bË7¶/h¸wæÍißºu\x001eÂ¾\x0011­p+L:ü¹Û=¹KåÉÆþ5oO£ò5c±V¯Oe}\x0008â\x0011O¸9kÛóâ4liª\x0015®x\x0003\x000c+Ï®Ý4_!\x0000¸òWGoÞvwÅë¼Zô@ßé\x0004\x0002@èØA"»,×ýìÚ3\x0007\x0014ç\x0002­¿®^ÎÎ,\x0014C´¹\x000eþç§\x001dÌ\x0006]]8ùILü±s;~´!J[V®@RÜ\x0001/Û¡,ym\x0017V\x0000é[\x0002\x0017&Æ~°x"·\x001c6ò/{vqC\x0017~
«o(8îµ\x000fâ6®}åå1l\x0019=\x0015ô*l]0&úTn#:}\x001dD¦må¶CØ\x0006\x001b2·½\x0018Îµq\x001fÄ¾;7[Tx»`/×AÉ
Ë\x0017¶/¨´wæMIßu&´;~\x001döü?{çþ×Äþý?E!\x0006]¬\x0008E«+¨TWh±\x000f¨íji·\x0002¥-¸]p«Ð® \x0016\x000f \x0008(\x001e@\x0005\x0011ô\x001b´Èik-ëW\x001fKQ©Å-¶è\x0002¢\x00059\x0018¸ëÓµ[-ûÌ!ÉLrÏ!$!ÏëýxÏdæºîã5÷Áôîúc_\x0014½ÉTÔ\x0013hÄ%èÊ­\x001d©Ì^¹9ÚF\x001búÚ¾º£}\x0016M$i\x001c`¸3§(5·»ËìèÔ?ÿ­í,Ï8Õ\x000fþ\x0018ª%¦]Õï\f¾¡ïü¤Ý_\x000b\x001ffõ\x0016°´ò\x0003Ý\x0006þ[ØÿiË6K=\x0000\x0000Ç£¼b<}yG\x0008=j¶«Kx\x0014vîvùJª¿Ê,üôlØÕH\x0010¹ÛóqjlÄþ/Zäöê¾æâ\x0003\x0005\x000f
Ü|s\x001bw\x001bzöfû	<j`tY«øÌv \x0002=\x0005Ë¬ºÎ«Q\x0016\x001b\x0011-#~\x0011\x0019;Û¹Á\x0002FèªCX;Áò2Õ Èh	{Yn½\x0017«Õ£¹o¤tòno¥\x0000y.Ó=Ýâ>ø\x000c[þ#|×r¼èçªúºËìÝMà§Oõ\x0019DÒHùi\x0015m\x0002\x0000\x0000\x001eÒ^J¾9y5\x001dm\x000e|£²S¤2\x001f=Xð*\x001d¾^ÛD¾é:b#¤Ø\x0008»§\x0000î\x0012\x001b©\x00158(Ðw^|öözëe26ß°ü#ë-¾a\x0001	\x0010ØS¨È«ë¼\x001a±ZS\x0019iÍÌ	°(#yYí\x0016ã\x0005Ð\x0001Ií\x0004ËË@F"«uz±\x0011\x0000\x0000\x0000\x0000\x0000'aÚÎ\x000b§¸\x0001;Íùõu¿Rð]·Ïa5\x0003ÝG¯^ÜqîBî¶
LsU\x000c=QFÜ\x0004Óa\x0007\x001c\x00118Ë\x0019ÔN°< \x0000±\x0011\x0000\x0000\x0000\x0000¸'ÞÂÚì\x00153í\x001f7\x0000\x00172âAÀY°<ps\x0010\x001b\x0001\x0000\x0000\x0000{2Ü\x00104Í/bënìä	 (#\x001e\x0004\x0005Ë\x00037\x0007±\x0011\x0000\x0000\x0000\x0000¸'Þã×ocW.\x0000Ä@\x0019ñ à,X\x001e¸9\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000ÀAl\x0004\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000ÞÌ!\x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008 \x0008¦¢\x001e=®\x0005\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000ð6\x0010\x001b\x0001\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x00007Ø\x0008\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000¼\x0019ÄF\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000àÍ 6\x0002\x0000\x0000À0Vvß9ÜÐßÐ\Ü=\c'å°þÄ«ù
W\x000fÿÐSipùcOi`jWS3Ð}ô©Pè3(¾\x001bq\x0011\x0003°§*h
\x0000'º
5\x0003=Å$¾pO)Tõµ\x001d¾|a»®bûù+\x0005ßu»Ñ«\x0001\x0000\x0000ð\x001cÎ}_\x0012¡6Ýõ[:¤ÜÇÐ\x0011ª¡®v¡Ì²Iªîkþ$-j6wó¤=[¿é©²¾¡ôÒÁè%¾L2ßyñÙÛoê«]m¢©\x001cS«U<Á¼¬¥\x001a\x0007/KÆÂ\x0005e_\x0015­b\à\x0013\x0014\x0015SÞ¬³ÓS§\x0001"äÙ³ª£"J ïÐ <ü5p\\x0005T8
m~¦!{\x0001ï\x0005Yg\o\x0019\x000fBfíÅM\x0003ägHþHeöJÎ\x0017ÓfG§¥6tî2ÕcJb#Ã{\x000b\x0012çkù:ñjyYí¨u\x0001\x0000\x0000Hãt}z°â^Êo\x000eþj|7lm7Zü¯¡së@\x001fÛÐÇÕwñÆ\x001a\x0013gj­ù\x0004Ç}ô
Â#ê"ÓÔªd\x0015OäìÍ¢p­%IÃçÌÍ¢WfZY20º¬õ3±ô*\x00141@\{"6B\x000cQ\x0015DRá 6âæN\x0014Äk\x0012ÈÍCãæªÔËò¼ØÈpÛ$¡\x001a[3Í/bëî{F9\x000f\x0003\x0000\x0000ÀK1\x001e-^ã§°2ôÃæ·fPWÍ,þÁjpwæZÞbæ¶ÚÐ¨ðØµ\x000b\x0016yafÎCs²ªöª7¿\x0007­XÆKæ\x0017·ÿ!ñÃ\x0000GÈ5µ\x001aYÅ\x0013±\x0018)¼,I\x001aô?nK¢Ì4ÿðµ+¢\x0017iiwÌKÛÕ%ÔS£\x0001BdÛ\x0013±\x0011BÈª ¢
\x0007±\x0011÷v¢ ÞÚ\x0010 /Cò"óTµ>*ù'?Nè2O\x0016\x0016¿åÏ<áìèäõYY1±¡Zæ/!Y:W»\x0015\x0000\x0000ç0°'Ý¢ùÐ,?xhDÞ\x001d%\x001b\x0002E{D\/(8¥ªxØôÇªîëÉ1ô@ï¥øËÔBþ±#t[67þhAJÖ´1\x001eoÎ9ßõþ*!ÛÔÊ³'b,¯ÏXè ÷NÆ\x000b1³M5/ïÈé5Ö\x001a\x001eædÒëq\x0004í¯J\x0011\x0003¤\x001eWÓCÍ¤rÅÌ¤mø|ICX\x0005É­p¤Û\x001d"6¢¶\x0013\x0005ñÎ¦D\x0002\x00123äÃìô\x0017)³ûfÔ\x001d×[ùbÚòÂJ.zLVl¤¦÷â;óÌ¯Ì¡\x0003Ô{M4©¹Ù¯ão³SwõX^5¬?ÕÞVòÎS\x0004Û|UõuÞi+}Àm9U3Ð[v§íÄÝ^ûûH¾Ð0¬»Û^rä©\x000cg:ZO<0Ø\ÞyâN{Ù\x0003ñÝ±$ü\x0004\x0000\x0000x+ÖM¯SÁöÄªRYw¨î¾\x0018»nBcë{lfÒ{AÓ5aI×FØ¿³SjV»k[¢¯m2ÝåLº\x0010ÛtÖå¶"È5µâ¬âÔèWs+¸\x0005ã\x001e$i¬/\x0019è<bÚä³qÿNz\x0012È©ó©tô#J×iµjC¥"\x0006\x0008QÓºì\x0010êªùé\x0017O»þÕÜ\x0004²*Hn#Ãæ8ËxeS"	i\x0019r°ñ½ßÒöì<^äLâ\x001f_QbPä²IªÇdÅFØ¦Ó*pÍÛÓæ¸ËÃæô\x0006ýÌP¦½Ö®Ìª:Òg\x0011íá\x0019ÿòÁÚ­/§Ö\x0004,Ë¼pbØp¢~OyîïüÄC¹÷Ê/4m\x0002sùèÑ\x0001æ©§ÚE\x0011gÅ*J×Z@­âu\x0015,/×\x0004¥\x001eÍé°~8þ	\x0000\x0000\x0000&\x0006®ÄÍe`SH¹ûÌ°¤;\x000cîÏ5\x0007ç7Ö
\x0004Ã;·ÄÒUqâ¶{ÜßÙIó3¯¦;¶l\I%¾§_ \x0019º¬ª!ÛÔJ³'ÂLÖÕ.[°bHÜ$#ìÍ\x001bQ©\x0001RT´'û=wéû
½Ã@X\x0005É¬päØ\x001c±\x0011g9Q\x0010olJ¤!)C²6\x000fH®+ãÿ×pc\x0002=<\x000fÊÎ\x001fVâ²ÉªÇäÄF\x000cùY\x0001Ó\x0005ç³YÀuë\x0013ÎwSß\x0014we\x001b_rX/`ü9k×XìÍ\x0012\x0018µ/7*ØâZ~°HîÂÀ=UÄîìÈüÏ(Â[n´Bô\x0013\x0000\x0000\x0000&¨ºS\x001eIUAëÞ[FÅÒ}Â£³­\x0003éb|v«$ÙOò7¡æ®ZY²÷Î\x0010×z\x001aÚ>áµÎÌßÙ5\x0005¿­(yd
x²£ó¤ålCö[-º¬ª!×Ô
³'RÕY÷&5Yw^Z]Æî\x0000Á¸\x0007I\x001a»ôæ\x001fO_µÝo$=»×"jE\x000c\x0010¢=«Ú+¢)ßiå\x001d\x0018tõ{¹\x000fdU¼
GÍ\x0011\x001bq\x0013}ä}MTäÅF¬çá01(sU&»é´zLNl	eÛÔØ¶°\x0013i4KÒ¶þ½G×Õ²5>úÍ7¼°3ÃÛòÅwaRîgñOÿ	Xþ§âÂ·××+ùä\x001d\x0018Qt!»	OpÜÆ¯:O?è<PLyÄ7¢¸µÒæ©ü\x00024\x001a.6ÂÛCÆ7$µhkmåÉ+è)ìF+?\x0001\x0000\x0000 N9ß&NÅwìívÔQ\x00119ÍÁbÏs«/\x0017ìµÌßí
4¸½Çgü¾Öv)\x0001P\x000f\x0002S+Ê*\x0008;cfüöQæãeÜ$\x0003x];ÍoÖþh± ÆÙE\x000cØ¢=Ç_þ'©Ù­« Y\x0015L#6â$'
&óº¦D:2dMÿÅ?Ì¡l8;%·7»\x0010Æïõ£b;c8vÙ$ÖcÊb#ü0\x0010\x000e\x0015,££
sh«Vþ½h¹Æ:ìÃ\x001a]£Ä\x001d«¤}ëãÛ&\x000bs\x000bvxÍ¬\x000bYóòVk23|´+Zß*)i©õ_\x001fé\x0018®á]Î¾\x0002\x001f\x0018þ\x0004\x0000\x0000ÚGÆãe1³z)Ôwð\x000bevwb[^[|æmüÞ°\x001dhXNPw<Ð0è\x000bÌ³\x001f­VÑ\x0002!2µ¢¬â0ßè/J\x0006Á¸\x0007I\x001aGðc#Ög):·\x0001AÔ²ç`SÒ2ê>¦¸\x0019F|v\x0011¨dU8rmØs(×5%2!ûw¥Î¢
87þÐÞÛú*ÃpÙµ\x0008ó¤\x00056\x0014 ÇeY)8ÚÚMé»º²nd¹°fÍ¦ïVÆg«ú³×òB,#!ÜQ>B±\x0011)\x0017²Àø¥üEW±ÅDÑºðiV}	.6¢]³ñæ(óRìåüÅúÂó¦ûl?ßT: á'\x0000\x0000\x0000Ô>\x001a+½|,61Ü_\x0013\x0018ûÅáûCg»[sS\x0016ÑË\x0012µ¯oº5&z­áAf
Ó\x001cÇæíø¶û¬¾çØ¥¢Uæ9Ì'\x0006v aU\x0003;\x0018h\x0018JjÓ <®¾«JÂK\x0001I\x0010ZAVñD\x000cw·¼;c:{`Ü$cOÞ¸²KÇMµåú¨Î-b@\x0004ìÉîp87¥\x000eÃ=»\x0008VAr*\x001cÙ6GlÄ9N\x0014ÄË\x0012YHÍ\x0015WóÂlv0#\x001aÓ rÙ¤Öcrb#\pÀÁ\x001a®bç\x001dC,ôG[ãÛFBìÇF$\8Ò\x0018"â8§²\x00054ÒüársbÑ¬Bü\x0013\x0000\x0000\x0000XªúõÜúSn[Èi\x0013¯s"pÓöØï×&§/ï°Æ)2AÝîâ}þ¶Q¯\x00155ë0²p\x0016M-#«x Æ²óióLïÅ.r±{¤@¾õ$³\x0014YÄ8ªØká\x000ceû8¨$T8
lØS(w4%2!y3@,ñ
Ëmªí²I®ÇäÄF\x001e\x001dÈý­yÙéÌäÌ.þÃ·oK{çØõ+Ó77ôVs!\x0002wp\x000f0cqòî¬lKöe~ÿÈêæ\x0016»Êðâ\x001e¢Yø'\x0000\x0000\x0000ñÙaÚeÑ­Ñ\x0007,·ÿ\x0012\x0019h°Û\x000c4øM¶ohÆ\x0017'°½³PÁÔ$YÅã¨yØøþË¦ò«¤pÈl+«¸\x0007I\x001a©°ké³\x0014VÄ]Ô°'·{!Ö\x0003ÚCr\x0015d§ÂQbsÄF\x0014 N=%\x0012ÙÈÊ²«\x0015\x001f¤Ä,\x0008âb#%\x0019Y\x0002[¸ºl²ë1Ygø²3[¬\x00028Õ]ukgÓ_ð^Ã\x0008	{ú-oMMäÆ¿\x0019ß±\x0011vëo#ê\x000f¬\x000fo\x0012É\x0012Ü"nM¡{_QvBöÁMºÇô\x0012~\x0002\x0000\x0000@ÕÖÆüFjO'îïìþT$±`«óîÙ8¶¹-\x00109\x0010Ù©Þr ÀÈ¤!ÍÔJ²§Ám\\x0016\x001cþ®ùÛÊî5Ñôù¼^IÏNÈ©ÙvÔaºc"kYc\x0016|ßËÆl5:pN\x0011\x0003\x000eQnO.\x000b½\Ð|VÑÃLaìUAÒ+\x001cE6GlÄ\x0019N\x0014Ä\x0012ù(É5\x000f"é ÍæÞÒ\6éõ¬Ø\x0008ûbY«÷ì½gþQ£oû4#>®Ågaf)°3v¤0>\x000fnQV#=Æþ^¬\x0011\x001báí\x0010Ë\x001e+Skøq[\x0012Õ´­Óz\x0017\x0014Ë,Á]Î¬í}\y»<h7`!ý	\x0000\x0000\x0000lek9ø2V&Í¡þ\x001eVÐüÈµl¼Ýê\x0002û¡Y\x0014ÉÆê¹°|­ð±q\x0008L\x001aM­$«x\x001aìô\x000fq2\x00132\x001d¦\x0011]ûÌÆ@,Wp\x001bËjSæòé"\x0006HPjO®¯ÎM\x0000lpP\x0005I­p\x0014Ú\x001c±\x0011g8Ñ¾©½ )\x000c9z¸p
\x001dÐ\x001d_~ÌÚ#\x0012\æzLVlÄyj7\x0006³-¯vÑâõkyg¸óyÙ¦:Ê¶­ôNóTó\x0019¾§åNJl{ªéÚð\x0017s\x001b¾ÞYD-×µØX,KTÞ*`¶	X\x001a¿{Ë+Ìd¶/nÿ'\x0000\x0000\x0000°+è§kW}p©Zäk<{»*f	]Ó%]\x001b\x0011½
;kfD\x0014\?EUòÕ}ß¥&½H¯ýd\x000e\x000bãBÖ\x000bÓ/ÒÈð?>`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/MAN_Manuel_Porteur_projet_Demande_subventionV1-4.pdf](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/pdf/MAN_Manuel_Porteur_projet_Demande_subventionV1-4.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=s'À/ÚýXÙG\x0015wbuö{.\x0013õvm~8S£Rvxuõí	ú=×ÌjnkÿØ¹þf\x000eÈy4\x001a1\x0003pÿ«1`\x0017XS\x0019\x0007#5/êÇ\x0010\x0007K\x000b~ÿ¹å¢\x0002Ô`\x0010\x000cÎfïr¼Ö^møùÝz}w3¯\x0010_ÜÝ­;\x0018G\x0017\x0007oFë\x0007gô\x0018I\x000b.$½@3c7Ü\x0017öó[ýpweOÚÙ1\x000fÞ	áPxnA8Þ¸\¶ÛP\x0004½ßîNÏ@]®A{.åÙý@jôuµ·ðì\x001eºÙ\x001f¨dwðÉ§bl¼\x001aïQÞ!Y>­\x001dî§ý
ØîÐ¿`:C÷¹R:]\x0000ÁÎ6êâ,ÁÏ/<þ\x0000\x0010æ§
¤Yiýô"ö_\x0019hþÜS¯\x0018è~? \x001fÌeÏ©óÔ¬£W\x001a\x0014\x0001v>ËOËä´vÓÕãuÎ"üT/hÌ¥¢NvZ:?\x0015üý3n~ÆxócJE@+ðïöù3ØCRöÚ¶7zbN1ØØ7å\x0017HY\x0004åÑ]\x0002D½LÅbg·\x000eìÆ`Z$Z\x0005¬ÞBèSWð*\x001b»|òÛ'Õ@Þ4¶¿}\x0005ãá<\x000f;¢\x0003ÀÚT9`RÊ<¶íl'. n½2ßPá6É¸IÏjï¡ñµ(ã"ÞÚì´\x000e Gt\x0015oä}Cb1ÉRV,ªeñÌäUáBA¼¼¤fêfEÊ\x001c+	|\x001c^à¯Ð\x001bþù§Ü\x0005%<]\x0002¬x¶tÉ
ÃO³`3*ÐÌ¬\x0015-Îè\x0001Çô9/¸:õ"³4\x0013(xLx)ê\x001aÎimjv<\x001bh*Q\x0016Hg\x0007uõÓLÿèÏn¸	Üc!°Û 0n
Q½\x000c\x0017¶%tÏ¢eï¨7d¤Ë´®¡G9\x0004YþáA\x0010)/{l¼\x001c\x0012Nï·iH¿ã¸Ku¡
+Ô%C²ÁsÞ¸Ñ·,×ññ\x000eÆ62á®¯Ñý]>\x000cø\x0003­ù\x0002,ùY8Y]Å_QÃ-Ú÷5>V»4úÔM;ö\x001aTG×õ³]Ýá³F\x0014ý¹®[Bl:!\x0004MÉ\x0004¦%;Zx8z\x0015àÿÑéáþÍÆÿBä=m\x001dZÚ\\x0003,\x0006ª¹fíííÐ/Z\x0005ô[ÔÚ\x0010\x000elë$YF\x000f±!ÌÌ$ÐE¡ ÃÉ
O\x0013\x001f_¤óÍ©EfHÊ¹ãEî¤
ÇH»Íø»ÏÒ\x000039ß\x0011æ¼È¨KV&âýà~\x0010Cû\x001e5ÞQ®óû\x0015Ý*\x001ax\x001aë¢\x001b3MTÔèÓVA#²èÉb:ûó^\x0011õxÇW\x00148N\x0015Î;å	ÔÕ{Ö£\x001b¼\x0017ßÉYÜ8ê\x0017á¹=XqaU\x0008e(\x000brwqô¾=j»Óxò=ªÕmU\x001dØþa	Á\x0004õzO\x0017÷§Áëå\x0000\x0011ÁÏ\x0011ølF¼
\x0018s\x001d{\x0004öÊ·=H¾CLèüSå»YãSä»EmV¾[Þvëð¿(F°\x001aÉÐ³^1`&Mò_¬Q	"\x0004­M\x0017.eGfzd6Ì=blê'A\x0013¦v;Ln#\x000c~¿Eí´ªJCÛsÓ?ñ\x001b\x001eVk^ýØ°}[ìo\x0013¾ÞS_EÓ\x0017X\x0007ø\x0007ýé¯\x0016sr\x001eí\x0007Ñ³\x0001NÙQÙ\x001e#²ã\x001fn\x0016(G÷W?\x001c.çF÷n6FÏ®\x0004ájö}ß\x0017/AxÏ
¤¶\x000f"~ô\x001b"òË\ß¤Ç\x0010ú¾sêÂ%·Õw¯ºp©ÞÓ?Y]Lk|ºhPÛ«.ü9É¢\x00136Ô\x0004\x0012CÔ$Â$ÍdñUíÙJ4Û=Î-ýä¬ÃsÒN1E\x0018aQ\x0014\x000cºÛâb\x0017$ùS Â3ùÆ\¢®\x0002ç\x0013\x000fÏYì_¢N¢<DÓ\x0000>a\x0010Ú\x001dÎÄØ`0E×õ5 Ê -Tã¬âÈ¤dæÎg}Ã³\x001bî}°iÔ\x0007M\x0012öL¢=ºÔ<É×ã{*æþ47æ¬ÿ÷ø\x0002åþfIª§<¾^\x000cÐLÖþ~õ@VòCq	înoIY­\x001eæÂ
ã\x000cæj:L&B¦Äèæ|ªÍÉÝ\x0003ýnÈwøèzõfA¡Ë
n÷\x00051\x0010D)ö«Íªy``û¾sa
ÁwëPâC\x0011\x0015ä30WDÏ,\x0008^
\x001b}7¹u\x0006-m\x000eÛÖ@sÎa7ì\x0012ß­~Bj\x0013Ï,ïÑW$¶x8ÕZ\x0018BÎëS­ä\x0000¿Ã\ò»5±Ú-gíÉÏñNÇÛí¾4FákÁv\x0018jÉ§SÍS¼Ó:<Õ¥GÕU&kòÈiÊ\x0008>*\x000e8Þ­z»ìEÕd%FISª\x0002\x001c$Â%úþ¤\x0000·pëNl
´Ã !\x0018·Ø\x001dHLAÈGYÂ\x0005Ð?ûùor\x0001@8ú®xx·OX½rWÜwüS_J\x000e4})Ë?ð±~ó"¼\x000eÃØ+Û+¼iðz\x0013a¹Á;p\x000eü!\x001a ïÖ\x0000¬ôÀÀ ¥]Ñ\x0000µEÛ÷0
à7\x001d¨\x0001|êýë\¢FkJ·}\x0017(ètú\x0002
Åõ³bé#cö£8õµcÞÀëÏÿ²XñrÅ2!4Å®d!è\x0015X²\x0007´7¶Ø\x001bÄlEOÑäÝÝã#ð¸Ó\x0018²8£1'Ëÿz\x000b!ïÝÃ\x0007ìDù5ÙãjOè õþCú\x0006|ïÛõ%ëZÄ\x00063óÎ´Ièl\x001cDEgõÖR\x001fÖH\x0016\x0003Ûf--ô¨\x0003c\x0010ò\x0003>ãö÷w@EdPü³G%,\x0004qM.\x0012B\x0007t÷\x000eIú~VâçÙì#½\x0007í\x0006\x001fâ:;Ì¶£HÍs\x0006«&âk®¼dÁrã¤\x0004¤$\x000eí2ÑÕ\x0002<-jµ¤]Â\x001eßd¯ø½(yyÑ·;nnÞ.ùÛPºØ!y-æ÷A^öd9>î\x001eGAow\x0000o®øFx¯
wJ>ï?¸©ïö\x001aÿ<¸¸FA%£±À\x0015Q
çbY;ÆCó\x0001uuÓ·³\x0019s^<~B\x0010»Q\x0007\x000c­æm3\x001eÂ\x00016Cëy_Þ)	Cf1Ó·\x0006O¾^¬×ËûÛáê\x0001ºh
Gõpuûø\x0011\x0018Ä¬\x0013z\x0018Ã\x0000SfD±À×
\x000c&àÒ_à\x001f\x001e?Jh	)\x0001\x0017¹¢Â2¤ö¦ÐJ:@S\x001eC"4 R©4à7!9\x0013äÑ°e\x001b	!WÐ\x0017,]ÄÁ`TÉîÙÌõ\x0013\x00141ÁK\x0003l¤eT\x001dBÉ2âÚSgXÂâc)\x0008|Ê\x00049Ôr
}V®x\x000f¡yL\x001fL!\x0004¤FÈ2\x0003wFW	W²&OPj ú:DúRCÂ¼)B´\x000ci}é¤K_Åtp\x000c¬=¯ðÑÀdÐ\x001cJ\x0008\x0010\x001e¦õÆë¦Á`d
\x000eÐ\x0008}\x0002M5\x001e_EøÒ@»
\x0004\x0001©aW>ñéñà99Ù\x0001<]Ä§g&(âYrgn\x0008ø\x000fvÊ'áÌQ\x000eD\x0011Ý"¾ÊÎÌgò\x0004ÀÙÂÿ£©Ð\x0015íÁu5QÊ!Á¢\x0005ò3¿êL-)OLï©`e½9\x0000=½¼¦£¾¥Áã\x0007F×4\x0018\x0003fD+Ñy\x0011Ó\x0000\x0014Rlx
~±ÆÕÇ 2?\x000e\x001a7¤Ã2£\x0015Ð·%øxªB@H+}K\x0003\x000cÆ!©îi¤,A¹`a\x0012\x001f%$]\x0011F»w"^\x000bqôô\x0014yÄ\x0016v,Ì\x0017\x0006D¦\x0004=üF\x000c¬­À\x0008\x000c \x0010\x0019J\x000c8æuSº¢X\x0018ü\x0014\x0007\x0000\x0000%n\x0011p»JAù»æ±H,Ìð:)\x0002à \x0011#<\x0004D°­+
 \x0005<\x0006F`ø\x0019ØQQ\x0019,\x001c´OÂÐ\x0012-19\x0012#8³.rH+h0T$'>U\x0008å$\x0016-\x0017ø1:Î¬YÄàH`Qå9·í`a\x0012Ë\ Ç^\x001eGC\x001bpü,íi\x0016ßÄ*Ã1\x0016Ñ\x0017Hô7Ióf:\x0001ËP¡AÞÃ\x0006ÃgBây\x0019;Ô\x0017íii%d:C\x0013+9&¨(ñ¦A[zú\x0007y!g;UKß\x000c\x0011\x001c0êÄA,Ù¡n/°à[R®E#Tm_\x0014\x0006\x001e¯
#G¦)OÑ¶°Pói\x0000beÑÃ9Üf_vS!81'©\x0001©F-ºÆ,?@\x0011E\x001eøIÈÃJÊ\x001bækÂÂ;fÆ@ì¦\x0013tÆ ST;Y³ÊS\x0004­B\x0016Ì\x0004æ'çhÕÑTF\x0013hÀý=AY\x001eiÞ\x0003°\x0000ªW@\x0004ö\x000b|¥«TÈàÉr_n ¯\x0000
¨àE$\x0006bHXb\x0012
\x001fó\x0018\x0008\x0014baL\x0011	D0\x001af0'\x0011{±3«üÇ½\x0012Õ`á´°',"³\x001f\x001e'¬\x001e\x000cAE\x0011l¬ã\x0013\x0004\x0005Qa±*£h -}\x0019\x000e(\x001c8e}\x001eh\x0019CÖÌ£ib\x0003n-V\x0012}Á,\x0006çarÃø,MÅOÑÃ­\x0016+¡\x0003#\x0010\x00119å\x0006 \x001b¨sÅ`á	jÆq×ÒÀ¾\x001bX)Éy­¯æ\x00080RºÚ®+b ªK\x0004è«Ä\x0010p}Âï\x0000¸sâuÐÙÒìlÑé¨êvV Rm\x001a,dôQä\x0010m\x0005ÝH
 \x0000ù^n
Ü5EA×%æ\x000fåpo)ëâ\x0000¤b,\x0010SÐy[\x001a®§DÆ\x001brb-kÉ
Jý^nÕ¬\x000euTÕ¬\x000fLÎÌËD,üÛ\x0006R³DHçÄLhÙcp\x001a\x001cÑ²\x0000q­èQ\x001a<Ñ<\x00174O$1,?vê¬\x001c\x001bBG(j_Ì\x001e\x001e¶m"l\x000eÙQ\x001e\x0002-r,Ö\x0014M0\x001b#\x001a¸6¸T*²×	\x001bÃÑbÇQ ¯Íz'\x0014ÊgÍ£ÁËÃu\x0018}Cloy¢X¤"U!¡\x001eöEeµúU\x001c~IH*¢èÿ~\x0001~À\x000fîõðãp\x000c¡Ñ14:FÇÐè\x0018\x001a\x001dC£cht\x000c¡Ñ14:Fÿ/B£»^'õ\x001fbÝrÈ\x001dý×\x0003®\x001a	~E¥ñ\x000bF½óÏi7_IØÓ+)\x001dÒ(®-(4# ½K\x0003B¹\x001c½ü\x0010ÆÔF\x0004\x0000£Â\x0006`oDÐ¦MÏ¥³4XÊ1\x0004
\x0010¡V(ËBøN\x0010QP¶>B\x0015¸bt}÷4¦\x0012(áÞ\x0014ûåb¯q³¼N¦§¾Á\x0000\x0018Tôcé*i²%:tzL\x001d­fkÌ´rä×\x0014Z\x0001äZZ9QõL+Ç<ÑjVSå©Ô)@¦¥,D´ßÃD
rK+§\x0007\x0012øå¿håèóV¸ÙJ+gðejÅ\x0000fK«\x0002·´òiÌ¬f";ÔÐàLi@H1\x0004Æ
ÿ\x0008)²\x0006ä\x0010\x0002\x001b\x001c{ï \x0007\x0010²\x0012X»\x0016bX\x001b":\458H ÍÌ5»úØù±²ØÁÄX$3gÞ¶<ÎBèÌ\x0000\x0007Îìj LÑ\x0008:JÀMj\x0014O+88¬ÎÂ\x000cç\x0012\x0004`oS\-)çy\x0019]\x001chYÇ±Jé:Ñ\â\x001aÔD¬üg\x0013!7^*Aç!ä3;2Ì´ÐÀÆ\x0006ÿZ\x0015\x0000ÍÏ¶8ýQ\x001b"ú·20à¹i\x00012¾tM"ß°GÁ\x0008
ôPð%ºâ\x001fµÖqÌ\x0007K£Øê2mbu$«&æhÆG	ÛÚ@²Q¸!\x0003¯[¨Ä(\x0015
¶\x0004\x0016¢£?Ç\x0011V\x0016¢kâ\x0007n¸\x001aJî©hsQs5Ó$Þ²\x0004ÕI¤¡N"#ÚIÀ\x00177\x001c\x0007j\x0003#\x0002k\x000cîØdg"¯'qS\x0016æÒÈãÿÔh0A\x0018\x0016ÒÙ5\x001bÀÞ\x0001Ó}\x0003h,$|'TØÉLô\x0017 W²
\x0010zªu9u&±"u\x00074$_PD<\x0001âÇûÒÕÄúÐ0o)C+Ê\x0006=©KÄÉÑcÅ2\x0019­ìFqÒX\x0019\x0008\÷n¨<Æ&<\x001d$÷ß\x0015\x001a¨k^[1ûÃâv\x0011ÖìI6\x0002C5Ï%ÚqªÇÝðÂv(ì"Sú£PðÔ%(3{\x0004&\x0008xÃ^BBDJ\x0015¹C¬\x0017«­,)cZ$+¶Ò\x000f»B"¥!òA(\x0016ÔV&F½['.¾>`!8a$c\x0018e\x000e«£®
\x001d¦LbÌb&)fè)£ÇÙSF:f^Wr°´¬ek&(YV`\x0015cvsË(\x0007Ç;M¶SP5õUG\x0010ñp>ß6Ù\x001bAÊ'Ê\x000eSa\x0007´=4O¶²)oR»á\x0005aÀv¹²GH|¬Ô?$N«\x0018ÚtÈEÃ%ñ
³ð4î2*\x0012\x0017,\x0017	²ÌXûBÄ\x0019ÉÓc\x00060çÂ\x0000ê\x0019_º²w¬F*\x000c\@\x0000\x001f?\x001a¨µ\x0008².þ ªñHz K\x0005Î¶{,Ù\x001cÔ~\x0000IüÉQ\x00135æ\x0015´ô([Ã\x001b»\x0010r®åµ¨Z^CÂ¹:4°½ç®¬ó\x0011ÀB	P\x0013ñ°Fqb©á\x001b$?V/¤LÂ3
*nµ`\x000cÎ\x00149Ù\x0012i0d\x0019\x0005kJg	ä1Á\x0016¨èYÝ
}Úl6°Â*«`9Ü\x001b3CIÐp£Dë&ÒcË\x0010æù
\x0014â/
ìUè(¯\x0010ü(á¸ø
A\Ä\x0003;»DÎJTÜÑBGj¸n\x001aHý7
IñÚ°!Sâ	²±õáð+ñÚ8¾¹2?\x0016ñh2M\x0014\x0019é©/ÎÀÄ\x0013«SÙbí\x0005-r.vé«ø6²}Uã\x001bÛ;À¹»L5;@©\x0013wgG[Å\x001d0;HêÄÝá«º'ç$¼ÅÀ$î\x0002Wq¯°âïí$îÎqÌPÅÝ¹\x0012Òx9Nò\x000cPêÄÝQÝ¬úØ\x0013¥\x000c Ý;6tâOâî\x001cGVÌâ"÷F\x0002:¸;;ÚIÜ\x0001R¸#¡«¸\x0003à'qÇ\x0013éÄ½ÄaUÜ¡AMâ\x0011Ý$îÞ5T/Ñ \x000b¼«ê\x000eEqª«
¼W,ð®Õg\x0008éNàmæ8\x001fÛTD\x001c\x0005Þ&¶×Uàm\x001aõ$ð6R@#\x0002_ *ð¥\x0005ÞJpÏ\x0002o\x0013\x001fp\x0015x9.dw\x0015!\x000b|¡L\x0015øBÉ*ð¥¡
¼4À;Ã\x000e?\x000b<ÊM'ðÄ¢\x0008¼\x0013Ç^Ø_·âîj(8/à&q·©¨\x0002\x0011÷ÒPÅ\x001dI=»Sì)°ø6²]¢\x0014ñ#éEÅMÓPýP|uv5ÐûÜëfÈf\x0003\x0006»q£\x0001£sÎÂ\x0000\x0007Ä>\x0016ôGÓò&Ucd'R	
\x0005 ¾¡äzäi®É\x000eÄSF\x0016Ó\x001fk|%\x0001W(VÖÒ`\x001b&û\x001ch}ö%Î¢Ç®\x00180|gÎI\x0002ÊgÍÉn2xjG\x0013Ìò\x0000\x0010Mámêj\x001b\x0011è©ã·G*¶Pí*¯Ã
Í\x0018vÀÓIÉ­\x0006;\x0012\x001c\x001aNÔîÚp\x0012£¾t×ÖY° Ð3\x001fOÏ¬M\x001dÛ°ÖêÑmD¤%6vèµ±154±qÁ´h0/±q¤ÄÆuÒP&)#I8
è¯KÉ»5Jäë©¡îFò6\x001b ¬\x0017¥qø8Qû\Ø$1$J0L©%f¢@01\x0018æÆbË>Vg\x0012\x001f\x0007Vû\x000e%Iû*1¢ç¼/V\x0001=|8\J\x0013\x0010Ë\x001bI)l¥q,Ú\x0017QòúU¾\x000fÂ_T³5ªôi\x0002¨cbÛ_\x001eÊ{ÂH4ÐâAÔ\V	U\x0003(\x0016\x0012_\x0012?ø`PÆ\x000e5e¦Ùoä,\x000e\x0006ù2YmN×q08®«Ñ!\x001f§hxuúf?U:fËÙòc¶ü-?fËÙòc¶ü-?fËÙòc¶ü-?fËÙòc¶ü-?fËÙò]
Çlù1[~Ì\x001f³åÿ·³å/éCó¦ëH\x0000C¤
þ´T\x0017
T\x001aPÈgr¹È73wô·
g{H<ýéÝæUROß/¨Ö\x001c\x0015Ã\x001bê;"\x0015ÒN#\x0017X{·º\x0007Ë[¼ÂáýÝß°$j-¾	â\x0001mkº­é4×YxJ.\x001ce7»%\x0018àbí8\x001eËËY.­ú~½7«~V×©uß¨Åpyº÷Ëibuò~q½zM¥ñZô¸\x001a(\x000fâ®MU>/µåö+4µä\x0010qÉ«ÅêaÅ5ø¤R\x0018Uy¨
ýÃP¶¾ÂÚ~TÃþ\x0003¡»sðÓE\x0019¥=ï¿\x0019þ®T.¥)îîOÃÉÍ;\íz±Â\x0001ËÙ
Àþz¯C|­.ÐU4V\x001b·Ö:}>UQ.\x000cP¥õ|Ñ}¶j£Ò\Ó:\x0015_®E¤Ë,óµGe¼ÈK!:¾\x0019GnYÁñ±Ü\x0019Òõª\x0005¨\x000ei©M·\x0012ÎûK.dîfá¢Ò&o^Uo\x1¡Öï]JÍu¤Ô<ÕöÓ\x0015<5¨wÜÁÑ` hÊØ{SjVuÅf§\x001btÚë&*5\x0007yÅ¶¢ U}uÙ/~\x0010\x000e2\x001c,fIªôø\x0003VeÜ\x0010\x000fª9ÎVx4xÙR?Õ~î\x000e\x0007q·¡?ÞâîLX£¼^
4Ý@àñ´.\x0000ÐR±íRó,emß\x001du
ÏðÊQÐu³Å
Ñy\x0005\x0013{Ø\x001ct}AÕe5V\x001f¥\x0005\x0005¢\x0003¼á«8|)P*Ïjn-\x001d
\x0005j`ªêaÊ\x0007¬È\x0019æh;
Û:Tf:òº¾w{sOÐõ%®£:¤Ëç*¥zÌ£\x001eDGèOP»¾\x0014jÌ×°\x000c\x0007ÏïTÚ"Î×«_Yx´TõÚü]~þHw&®ªU¾½Ò!Gt&\x000fÂÂ+µÅY¿|F+êÙmò\x0015S\x0007Í_\x0004\x0013Ë©¾ÿö\x001dÀ'\x0014cÇ;!\x001eè&\x0017¹é©®ï/\x0003^8³­\x0018KoÄ\x000eÝÓ»®ï|ub
0\x000f7Ó1´}¢x\x001c½\x0000ÑC£^±\x0013Aî`¨\x000e\x0006\x0016!.Þ\x0016:\x0019sLb"]¬t\x0010vÿ<¶éÛ×?\x001déÚåvÜ!\x0015Pw¼/|diF)+Ê)øi!­ðo÷û¡sZ\x0008+Rë¾LqP-t\x0004ì}ù:¶\x0018g¢Îo§?v*\Þõ}NîúÅ\x001b\ïfIsiå¹Ú÷X¡¢c¹F\x001cÕÉÃê
f^\x0014Ôë¥
ûØBåýØïª¤Ïéªv\x0018Ó\ëäùU×­¿uúöÖ\x0010®|A\x0017ÊÅ!\x0017oJ½J.7wÑ\àiù\x001dV\x000bjmÿ`f¥ÐÔ_n\x0017ßº lcH{é,Ô_ü×î´½º7üIþ¦ë°ø¨®ùòïK¬tC¢Q¢
zøp×Æ0\x0014¬»Ø±	mj`&±Ö\¸b,½ÀìpÙ/ä»JãËt¶Õ¹=âg¾|¸DÓ\x0015#²;\x000cã¸Pø¬B\x0008TW [fV!\x0004GyÊ¶oµW½N°'?Êµ(í\x001d$ïj\x0019x¦<uø¡\x0016_úç:M)?ó"Å\x000fëåýlè¨|SÞ~ºç>	\x0001dÐ[oèM\x0008½1+7&ù\x0011}\x0012{zNFÜV¨¿m^<\x0002ú]\x0006inÒ\x001d×	ìÄ'F~­Ø\x000cÕ¾ø¦Üí_fêKoÖº¾_¯à\x000c­UþÏ\x0006Üæß\x001fïVy\x0000èõ\x001e»J/º\x000fBÀD®Ôö«Òo0I\x0017çç¹ Ö¨Nø>«ÞuÉ÷\x001bìÆ#åÑ\x0001\x001f3À¾SiGÌÛ_JÎu}gÄÍ$T\x000c\x0010Ì\x0004\x00127\x0013Å-F[w[rM&\x0019ÊÁÜAQÝâ;­å¢(½2cÍ9$\x001d
Í~½FKþ8>¤[\x001fHºïËs3\x0011téwØ..\x000efõº"ç\x000cE½³ê4g¼»½ÊÌóë6ÀujYoõý©¤¤`ÉËn)¡·×}×\x0006¯\x0003YZOsY8\x000b¹\x001c;"ß\x0016U¸zxXJÛÿ\x000c\x0019ö¤xÔ\x001f5\x00189Å%]9+OkòòÃH5sçz-WHâ¼Ä\x0005g¶²Á\x0014áâÓE
´ñâùõt)E·\x0000t¦t8(þ\x001báLøºlM`^¼q±üNm>kòQn²D?$×{QëECú£)¤î
\x001dw®Úþ6\x0007Jf»¡7nL,N¤á¬O´èa·bQËØmé#ïêé\x00015xUù\x0006éÃ
DÍ]âxgK´\x0012ú\x001b\x000e«ÞY¼OÜ É¸Å|y\x0003³ÖÀ¬Ïî\x0006úÎ\x001dfø«dÑ\x001fE¼wGãEç±\\x0013¿kÆ\x0005^îB­¹þnBGGÎø<8µ²
ÑÏb	6/\x0007ÁÒ\x0019zsÚa\x0019\x0005KDÌ\x0019ú\x001c\x0011\x000bTg\x00161;!fèÅ2\x0011î87\x0019kC\x0001Rô^dZÍ%'mOW^LX¤\x0014äèè¾ÂGÖ\x0006¾\x0013ßÖâxxQ\x0010¾KE®$¢±>£ãK+239½è\x001a{ÿ/«ª
endstream
endobj
532 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceRGB/Filter/FlateDecode/Height 87/Interpolate false/Length 6351/Subtype/Image/Type/XObject/Width 1053>>stream
xíÝ}P\x0014gÀqÿÿhjë<Ù½KyZE]5I]QVRI±WÔ©»çmÌeÝKåÅÄÚ]³®»\x0013Ýó%0{¼Ä%\x001a_P\x000cF\x0012Á\x0017\x0014%\x0012P\x000ep\x0006\x0014\x0010Q\x0014!#0 ÂÀ\x00003Læúéîéé\x0019\x0006\x0002Nß©OYØÓÓý{^\x0018_Ïóô\x001dN3\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000ÀøòÜsÿºpáº¤§Â\x001eÞ\x0003¦ïZË=Ó(\x001fÓVúü\x0013&½qª:ü\x0005|`EË\x0002\x0000\x0000|H¹CcWZ·jÂÊ|éÚ¬%O¦ÜÔ=Tù\x0005s\x000fÜ\x001ef\x0000Åo=\x0012\x0015ÞJø&mîü´òp7,Yôa¾jjïÏ_6mÝñ^gCoßT!1Õd¼¹jOnÛ(\x001c*+æ·
ì0\x0005\x0000\x0000ø\x0001\x0019nZ!ý\x0010Z\x001fö°Ç©1\x0018|Öîyòµµc\x0018sã\x000e#\x0003æ!V\x0000\x0000qnØiÅ¹µ+òÄ[Ui/EM}hÂI-ý¤VÝÇç\x0015ñ§÷.:qÂÉ3còkÔ«6\x0017~#râEé£WeHÛ-\x0015ÿýKq´	\x001f{3§E{\x0010ùcæ§\x001eúfZ«´¥¯ méÌÉb×o¤\x0017÷«§^¼ïlÌÓÒÖSæ$l\x000b¼±»zû\x001bQSDD½tDÖ5äó¡+o>$N´êJ±gË±õó"7õM¥òXýææ×6î=üÊ\x000cå¯+\x0013]\x001aª\x000e¾ô\x0008qRÔ¶/¥-må\x001füR)Â¢vï&°\x0015\x001f#^¼T\x001d|¶çnO-(þ\oþÁxF©ö%ÆÌô\x0017#'zjFÊ)&(èÍR\x001bõVïxã±I\x0013¼BÍX¹êÀ¥s'O\x0012W*ªâµý\x0007bÄ>N8yóR{3^vÕ³oí½/\x0017SzÈ1¸\x0007Ï¡¶Qí¥r÷zÑÓ½zfÍ×[å§\;÷_ß<Áæ\x001ax*kÉ¸RS\x000e¦WLÿÚó¯a¿3\x0006\x000bÏVu>á\x0019eçebvYIJô²<g\x0008-k+ËzË»füb3þ\«Roù°Rî\x0013äß\x0011¥¿)¿/ÆC\x0006¹Rü»®ým\x0004\x0000\x0000`Øi[ÿ½kò\x0018/ó¥ÈÄ
e\x001f¿´"zÊ\x001fN^êFz·>~aò+Ù]òÆg'Íÿ0Çl÷QI_ÚZ-\x0000Mw®õj#lùä×ËN75§îIÿ/&Ì/ºÿ^þÎggÄ©á=ñ_'Ä1ûr7<¡~¢»Ña»qWåÞvtÑÌ\x000fóÄ\x0016u0ì\x001bCsúÏú¸ _ôÊ]u\x0006QÃÝ\x000e\x0011C¹qæ\x0003\x0016%þ¿ØwKg>ºxòÚcb·²Èg7]\x0016gièþµ4>±4«IÝgÚ»§µÕh:øÜ´Uér\x0005)\x000b&ÉþòS¥Þú[÷¾6mM~0î¦q¥\x0015Ñ\x000f½°¿T}Õä\x0015çäg¥ÌÂÕpgã#£wVÞè
X¹indÌE±1cåä\x0019Ë?/Uë\\x001aÁFÇÈû
¶F?\x0014¹V\x0004Ößò\x001fSE\x000cAkÏ¬ý9Ô6jÙµè©ø*8l\±Þuaå\x0013+\x000eÜî\x0013\x0003øÌ%/R\x001e§©fÏÜù{Í'\x0017ÏMVR\x0015Ý\x000e¦SL¿ÚÓ©a3\x0006\x000e¯9ãùÈUÊ;ßèì3ë¦\x0015z-+6F,jF®\x001fnñítÜÔWO÷ÉíÎ~§~ZQòîß\x0011!õv\é´ým\x0004\x0000\x0000`¤i­ìØ9òµ}éá\x001fåV,ËS6}±B¾\x001e.6.Îêríã\x001a&Õf¼\x00185ç·)9_ÞöY\x0002¿L\x001d¾zéy¹åäbe´·*jçuw¨j\x0018z\x001bM
gß\x0017)_\x001c\x001eÊhÍ5\x0018öáæ'/G=ó§=ËÔ!e[ùæ7úÉdÍõ\x0011ÿô~²øÌ;¶OÐ<\x0017z*VMÊ\x001còèWD*£ö\x0005rä~ÁhàN+~aó­yOZ!¡¤B{LÆÊë/ijû©äb¿\x0016w\x001f-Xíi~\x000e½J¼òø\x001cÃæ3/õz\x0017Êó9Rgê).\x001d~aÒdõ3\x0000\x001dL·¾µ§SÃzg\x000c\x0018¶Õ´(\x0007q×¿eE­j\x001f¢}c«-I|&êßb\x000e~U¬æ\x000bzi¥ô9Qóâ\x000fe_c%8\x0000\x0000ø^\x0018aZ!
¦.IQ4e\x0017þi{ «M+å¹÷qOêp»åTûàå¨\x0005\x0007´\x0007	5­ðZVømlÙµhêâÏj½/\x0002k\x0007Æ¾14Ü­ÉÜòÊã¿L+/#?¹¡D\x001eaJa»Ó
¿!NZñÂ.ï\x0019>Úõ\x000c>]ÅÊ(®cûí¬
F{\x0004wZá®Øá¤\x0015Ú4GS\x0015:iÅµ7DZ¡ÓF\x000eq½½0ëQÏo×f[RØbO
Øw>;#òé\x0015çº\x0002w0ýbúÔN
ë1@xÒ¡ZVÚ¨ü\x0016\x000cÑ²ý÷ÊÊ¾5'ê-QRmZQºfªûgÛË{cæ<\x001eS0kg\x0000\x0000\x0000B2Â´¢noôÌ÷sÄä¦O×D>\x00148­ò<Á¦·zÓ\÷$¨èeyî}Ô¡xmCm|m¶¡ôýH¯E\x001awü|k\x0012T\x0018ÐVmý©2Ä{MhiEýGsg®+íÒK§×Îè50öÁb*nó¦Þëf=­¸è³V4»¼gîäÀiEÿÓ\ äIS\x0005[xrÃÅ*1\x001aï»ÖÐê5\x0008ÔL)Ý÷ï\x000f)OQÆÊ<±»¦*iì\x0017¶iBK+ä0¶úO
=­\x0008P{SW¤·y¿<Ô6ê*»f¾÷fjz¤ú'¢¥­r;ÊÌ¢ç.}øO¯¬±\x0014¬xzUF[À\x000e¦SLÿÚó¯a3\x0006\x000eOn5u\x0012<+,ø$(OËZN¿2mIÊMy"V§éRNlnÖÈó\x0000mU½$×RÅúÑñUÞÕnºU¨Ìæ2¾Åà\x0000\x0000à{ Ôï­ð\x0004Õ~2þéIbUéó\x001fåí\x000eòiÅNuEíl×ÂXÝ´¢2çÏ«kcîrMqQ7êí¥ÿ#®ù»VÂz/\x0007\x000e-­pÖ\x0014%Ì×\/HÍß<×+­ð¡ù7£Ô\x0015ÜÊÊ_SkAtLþ5Ï\x0006L+Äâß=êíÇ>:ë\x0010Ëw)+'N}ÜgÁµ»8\x0013#_<|på"ua¯´ñqeEp¼XØ/\x0018mÓVÈaø/Ù\x000e=­Ð­½®cëå%Þ1ÅØF-é«¢ÔÕÊîÝÜí^®Ü\x0013à¡©Qb\x0005½MD.9 ¬¤>·vöJ±@[·é\x0014S§öüjØÿÁÂ\x0013\x0000Õ%Ûo\x001c¯\x000c¾dÛ«eE\x001dÎyDî\x001bÌ\x0017+²ýb;¿K¾-fåø¥ly·X]~|Ó"¹Ú+w+\x0007Ñ»	\x0000\x0000\x0000À÷­xgô\x0008î+«7Ö\x0002F
\x001d\x000c\x0000\x0000à\x0007£no´¸ê\x001e1üo
cÔ1E\x0007\x0003\x0000\x0000x\x00100êÃ¢\x0001\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000x`9\x001cßæTÖ<»ñã\x001f­xûáåk\x0001`\x001cûç-§._ùöÛoò#ìïÀ\x0000\x0000\x001buæ\x001f¿e\x000cûßz\x0000¸?þá?×U{ÓápV\x0000\x00000¶=\x0017ö¿ò\x0000pßüí\x001fcVî=tïÞ=)³\x0008û;0\x0000\x0000ãÆÆgÃþW\x001e\x0000î)+Þ~5iG}}}___Øß\x0001\x0000\x00187\x0012N	û_y\x0000¸oþfÅº_oLº|ùrgggØß\x0001\x0000\x00187â\x000eû_y\x0000¸o¤´âW\x001b6ýõ×\x001d\x001d\x001da\x0007\x0006\x0000`Ü ­xp­Þ4wã¦éa\x000f\x0003ãQDlÒÜ\x000fâ#Â\x001d.Ò
\x0000\x0000ÆÂðÓ}ÙNsÅ>ñsN£ÓÙ\x0014îA\x0002Fè>6ßìôêk½N§ÓÞ{}eØ\x000b>¾ÅåWô;Ún\x001dÖ0^®èrvV¿\x001cöÚÐCZ\x0001\x0000ÀXøNiErµÙVÿN°\x000fÝ\x0019l­Øÿ]Æ\x0000¿(¹;ÐUýj¸"Cû¼®ÇÞôÑºp\x0011ºQH+²ú\x0007+¿x¨ÝÒóz\x001c×¶D,_;=6¼W°C\x000cøkÇîæîºÇêC¨;9i\x0005\x0000\x0000\x000fïV|_G\x000e\x0018Úýû´"¿ÂÙ\x001cb&ìnvTä»ª\x001f<¤\x0015\x0000\x0000<h¾SZa(¸â\x001a9Ì:XVÙÑg\x0015_0å°v·¦§¨_±drí¬%å#÷®Æ\x001e¯kì'ÆØº*\x000bÓÔØÒX×?;ýzM:VwN¼E=qaî7ÊK\x000e[WGãÎm~áÅ\x001dË¸Ý%á\x001cèïÈJuo´ôØÕØ²lÐáã´[¯U\x001cí\x000e£±pqî7Í"\x000c\x0011áÅÜ]®Ëì;jÛ[0ì\x0003µ®Ù&ÒÑ\£t1ç§Û&Nè\x001cìéj?óùû\x0001ÿ0¿¨­[M
ØRt<Ñ=*»Sµ¦¢Õ¢<ÕÛè*fâMJ`R\x0000¦KÔ\x0015­wåâ8§¶è|(`Ø²±ÖU\x000fßl;yÕ\x001dðÃ]Ûnyª(coÜÃ!U¸è\x000cê =@eá¥ç¡&\x0017³Ó/Uv\x000c\x000cÈ½k®M0ºKm®H[XÐ$ºyAô+ùÓÍ=¢MÅÎe¯¯BUxÐb®^\x0013§\x00063?§®¾K>¦Tç\x001duïí'ò`ïS\x0016ýP\x0013ðòµ\x0011I\x0005Em=Ê¡z:¾IÞ\x001e÷ðP­/½ä¢\x0012¹TQVKE^ªß/^CÄ\x0015\±
Tä¸Z0¹ªÉÑ#~G¤xºs)rÕFóí¯^7h;³^¿;­T8Ew}eÖ?úÄ&*êÒ²Õã¸ö\x00175³Q­mOR/jm»\x001aã÷\x0019\?VWaMâC
M'÷µúpë,¢]\x001a=iÅ0znTRZêÔæ¢SòC,\x0005i\x0005\x0000\x0000÷ÇwJ+´><º>5éQiDd7T{.T\x0006L+ÎÆÒWc¥\x0011NÜ¼£7\x001c\x0003åÙ	ê®ßji¿!\x000f5\x0011\x0006MZ±±¬ÞÙõe<fõ¦_\x001dút¾_l',få°ÆG¶ÏöÝ¨«$Óè\x000e£çN¥AÙ?íjÃöÇj\x0018\x000eGÛ­üybl\x00167/¿±ÇiÉØ¬%aÉç¿Z/FÓ\x0013/\±9*rÜGSF\§Jl¶+\x0005ÛÅD\x0014Cü3©-1\x0006\x000eÞx æPjrf«£1Éà\x001a89\x0006êÊ¨UZÕi·}óòTy§½¿eÿnq¨Ø]óâÔ\x0003\x001bë\x0013ã\\x0005é=ÐçËÓ^gc²²ÏîÒ\x001a«Ã®\x0006°©aÀSERa\x001d­©q!U¸WZ\x0011¨2}>­\x0010ê¢ý¢h«·¯¯Sÿ«Ôv«µµ¹t±T!\x0006cÜìvËù£¢2#\x0012
*ú=ýÝ5E©â¿±G¾ìtöÔP\x000e;+%kå6y\x0005úêí4Úì¦üåþ#RMÀÆÜò~GSM¶hbCü«E-=öôÍk¶þÖô6§¹ZnåqQÛ2û¡ï/H ÓØÓß$Õª!-Û2ØT¡äÑ"\x001e»Õ¬´æôÄìóR_mÈ\x0015´ß¾sÓfm¼ Çf|ôC+R\x0012\ÅñÔj²iÀn.qõÿAw1EGê¹aöÉ¬·Ú?\x0011qåÕ¿Ù`OãjëG*lÒYË¤\x0015©fÝrÕàö¶Ýáz\x0013\x0018NïÒ*pZ1d)H+\x0000\x0000¸_F-­ðÍ\x001aÔ±Gà´B;+ÆøÞ-Ó\2K\x0019Ñy\x0006ð®16­Ø\x001b\x0017ð¼Ò\x0018ÃÑ²Û8ÄFCU=\x0008Cþ@Ä\x0015Æ¶FíjtqµÜõTZÎ=§î\\x001aO\x0001}Ò|ïÏ\x000b\x000cÞ{ø-\x0006N÷®¾î~ÊPpE}J:¸£æ\÷\x000bÅ\x0019K2½
b½yÊo\x001f¯\x0017Î)mW'AØÚÓ7z\x0015¶¾tk\x00081û¤\x0015\x0001*Ó;­FÅöæbÍð/ã¼Õy½ A-µ+{rW¯+Apµ][Ù\x001c×Åþª\x0017ü\x0003ó|Â\x00150­\x0010Åï¹þ{Ï«\x0012RÍÎÎ ­¯¤\x0015AV.\x0004i\x00081º¶6\x0016ÆVHyGÕËx´¿ \x0011Ç¿±:[SÁú­V\x0014þÌàujQ\x001cMÍ<rõÒ¦bà­Y\x0000%:\x001c¡< ON0\x0006(ý¸[Y/­\x0010]¥7og\x0014¤æ×6äÞ¥\x001fÕ\x0010iERè"­\x0000\x0000`,VZ!Ok±*yäÇi×à$"·Y\x001dä4úNÉÖLz½´Õb\x001fìéhÊ>#_õ>ì\x000båþÓ¹u6J\x0007´Þ0èáÖ7\x000cÍøÙ°k[m{«Õæ.«_Z±vöñºfÛ µ»½¨(s:\x0017E?xyIw2C3MH3ÍÃ=²ÚZÕä¿NAlô{x½\ïîµ\x0015Ù·í~¯\x000b5Dû¥\x0015\x0001*Ó+­ØsÂâÛ%¤=ñ¼_©}ûÏ\x000e	üÆ¹uõ]Ê4<ù1TZ±©Áás.q4wn\x001b õ#RÊ®õ\x000e\x000eô[*+òäËïÃi\x0008CÆù\x001e§S¹Vï_ê>jþ\x0018¬ßÆ)ê´
ØzêkKW&ªÃrQ\x001cßë8~\x000fùïÕvYí¶»muû\x000fm÷OüëG·U¢\x000bym÷4ÍðznTÁ&A\x0005/.Ò
\x0000\x0000ÆÂè¤\x0015û®·;\x0007j\x000e=\x0013ë3\x001d(Ô´bVAk\x0008i2îõLue× Ýz;)Îë°ºi¸è:iX\x0002l·ÜX¿MýÆ\x0007½O+\x0014qó\x000e\x0016µ[ívË	×J\x0013ßàÅ5\x000e1ÏDRåûiEèi|áw5ÑAÒÌzkµÛ+|Di|Á´ÓYçZìÎóGéd!}Z!.§\x000f?­\x0019\x001fÝ}»{Àa-w/\x0008¥!Ä
\x000b]]U¡{d©K\\x0010¬ßÊ¦'fî¯íèt\x000cÞ.\x0017ó©ü\x0013°ÿk­Þ¾²¨Îdu\x000c´W½î6\x000eV\x001f4é[´b\x0004½Ë7ª iÅ\x0010¥ÐEZ\x0001\x0000ÀX\x0018´Âç®/â£¡Ó
ëùq×$¨ài*q«³©|×FÝIP\x0007ot*³J\[¼'A
7­ð\x0019á\x0019\x001d\x0001Ò
µhkj­ö\ýà}îÅ$&®\x000cVèOJÏëqÞ,ò\x001eâú\x0012/TÈD*§]d7ÖÂôà3Iô*|$i¦þUÞ FVH»i·¿^Õ=dZ!¯\x0019¥ûN
V¨f\x0017µùMÁ
Ò\x0010;ÓÛ\x001c=7Oý,·ÙêZK¢\x001cY=©Ì3	*H¿ÕH¯ëtÜÞ¤$VÖº5þjò·í÷Í\x0007½\x0019\x0015Z\x001dåÙ^\x001b?	Ê+\x0012Ñ*u8âÞåÊ§\x0011I&½G¯\x0014ºH+\x0000\x0000\x0018\x000b£VDä4Ú\x001d­ê¬\x0005\x000eV8­m\x0006Ý%ÛÒ\x0019\x001bÔÕÍk§'\x0016Vôû®ÕU®Õ¬Iû\x0017\x001a]Ã¹K¶V\x001fÚk³\Ë-\x0003\x000eÿ´bß»gÔ\x000fn"bäX\x001cíWÓõ\x0017/é-<âZ®Û>h\x001f:­p-ÙÞ®,SÝõj¨Ù\x0005­öþ»ÙGÝëÄóÞõ½fî½d;©°ÂÓLâ){÷íäÝîõ³g
\x001bCªð\x0011¤\x0015\x000fo.«\x000f¼d{diø¡§.Vg½°Ü]åÕ\x0010\x0011\x0006£÷d¶S%Alë·þVÃIuµ¾º,ÚkÈÚÀ
a|½¢ÓÞyU¾d\x001aè1åÏv\x001dÙik?æ¿d;`¿}ùxÞo/°V`Ë1ÃÊÑÖP¨LÍ¾>uåÉ\x000cy©XLÝs§z½{]óÓ¢hÉ§7+÷Xp--×®\x0010Ô%ÛY?SÖ§§¦Î×kew^ ]²\x001dõéUM\x0013\x000c§wéG%>ár­Rwµ¯Ò
,\x0005i\x0005\x0000\x0000÷Ë(­­g8{î`YP1tZÑüé)Ï
f=·o
Väª÷ö^Òã¹\x0019¬×½7Íû¢«So\x0005¸Áìð×V(³ëÕ\x0018.\x001e^&îêV¤\x001fUo[*ßöVÁBC àéåN×7\x000fgw\x000eVøÜT³ºp«5xn×)ßÕö¨ÿøÊç\x0006³©¥×=Å×\x001cSÜí³aÓÆP*|Di4Ü^x1À
fG¸¶Ân¶zî­º×ó*ò:\x0017qwZk]ï
f\x0013²4w^õ¾Ál´bSE]@$G¾FçS\x0000H©n²wf»ç>/Â¶]ÉMT|¥ä¬ç\x0006³JoY\x001e¬ß.ÿº]m)9ìmIîÃz:¿ÝÖ×X«®àöÜßU¹\x000bëååÒÆ}ëÕ{ \x001bájîìáu7ÝîëëôZÙÃç\x0006³'otzê0äÞ\x0015 *ß{çæÞ¶+Ý Rø#­\x0000\x0000`,,­\x00107r\x0019Þ«¼\x0005\x0019\x0000\x000f\x0010ýéU\x0018S¤\x0015\x0000\x0000a¤\x0015ò÷\x0008Lß{Ýì\x000ci¦A0¤\x0015@Z\x0011\x0006¤\x0015\x0000\x0000a¤\x0015Ê"íÖk¥i¡Ì4\x0008´\x0002\x0010H+Â´\x0002\x0000±0üIP£´\x0002\x0010H+Â´\x0002\x0000±\x0010´\x0002\x0000Â´\x0002\x0000±°áÄ°ÿ\x0007ûFJ+~½á¯¤\x0015\x0000\x0000®ý\x0005\x0017~ôuaÿC\x000f\x0000÷ÇÔ?¾ýû¿~LZ\x0001\x0000Àèjhi}.þ¯÷§Ø°ÿ­\x0007±öã?¾ýÔÛïîØ·¿¼¼Üb±ý\x001d\x0018\x0000q£¯¯/»èÂo?Ú±`}Â¼¿|ð/y\x001f\x0000Æ«Åïn|÷ãíÇ\x001d»víZOOOØß\x0001\x0000\x00187\x0006\x0007\x0007Ífsqqqffæ¡CÒxðàÁcü>¤w¹£G~õÕWwîÜ±Ûía\x0007\x0006\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000þ\x001fÎCl
endstream
endobj
533 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceRGB/Filter/FlateDecode/Height 128/Interpolate false/Length 5614/Subtype/Image/Type/XObject/Width 906>>stream
xí{t\x0014UÇó\x0017ü\x0003þ1l8\x001e]VÎfwqDwNÕ£'î	:Gt×\x0015\Åõ "qp\&¸\x0013²+QI`y\x000cÈ+\x0018ðcxH\x0008\x0004b\x0002\x0019¡\x0007\x0018\x0012^±\x0013ò\x0010î@\x001enÚÞºUÕÝÕ]ÕIÃ\x0010ºÖ|>çs<êêªß½U1ß¹uoéõ\x0006QzÒZ\x0002\x0000\x0000\x0000\x0000\x0010%Ã©·Å\x00185I§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001e\x0007/>ýô¿<ÿüKzyæ\x0005é£¨7|Ù{®õºí\x000e\x001fÓU9yÔð\x00113\x000eÔD¿CÖÁ¸²ÑtPÓicÇßýí¼ tZ87&©Hú¡~ÿôG3.\x0018\x001eª|ë³\x0013·6Þb\x0001%sî_¸?ºÝûý¶¶G·\x0006Õ¢Y	Joñ[\x0003t»³hÖ÷÷u{\x001bº{ROF¤­6çí¹
®ÞCíO¾Îñ~v¸+hfïf:=tøðØ±\x000f&üòéTú!!órÔ;ä'ê dúM¾[?57­M!w
(é\x0014\x0011\x0011jÞtj³Ù¤\x0016\x0015\x0015ðØÏbï{ëwÓéÑ\x0005³\x000bÅKÕÛ^\x001d\x0016\x00133büÌ/êÕ}BUK3f§\x001dÜülìðãjÕsW\x001c\x00117<fJvçÂÊ¹9Òv{åÿ¼ \x00163rüÛù­ÚØZþ(>\x001a\x0016ûö¶6iKoñ¶ãF]ÇÍÈ.qª§ºåHòãÒÖá£\x0012Ós¯ßx£æó\x0019ñ£DEã_ýJ©Ö\x001cBkè,\+\x0013Í=\%ölÝ»hÒ½âx±O,³ÊïÂÊ7nÞõÚXå»ê§·
ÕÛ_\x001d/J\x001c\x0011¿æ\x001biËÕòÅ/(MHL>Ñ\x001e|	\%»äæ¯¯©föOåSK'JûVî7}1K£t{iÆôÝÙ/Å
\x000fô\x0014Mc\x0014\x0012VJ×¨»fíñ#bJÍI»µbÝÄ1£R­¢+ÞÈÚ,ö\x0019ñxzîoÞ\x001b;Í×Ï¡½Wö±ÜL	¹\x0006\x0006ô\x001aÕW¬o\x000fé.z/»9èÎ¬=½ZþÈ·³³nå¤gWÖºÄGû§MµÚÂÜ`FÍÔ÷¾ugì¯<Wõ±ô'g)\x0013¥\x0019	³
½\x0011\YWÙþ9Á=£«Ívð×r¯JwË*ùþGûMù}ñ4í°Èmêßp6êÿBDÄ!è ¦Ó'O~üñÏ7lÒéäÉïýË¿ùpñâ3gjÓ©_çõs\x000e9*ì~5ny¥².&úÜn)0\úìÅ¯åuÊ\x001b\x001a1iE~KÞGýk[µëÅøÕ5R°9~8×­­°õWâf\x001d¼Ò >º.ý³åTúØë¤S;¯\x0017­{jlZZÞ#ÿýµ8foÁGÔÑ]Ã\x001e×ùkò\x000cÀ«{¦[Q(¶¨*´æìç\x001eû¬Ø)ZzöúX¼áZ¨ÁY2núV»RÿðÞrI×²gêÈ\x0005{ÅneÉqO-;#ÎÒàþéÊMydæþ+ê>c><¨íFÛö§ÇÌÍ,Îxv\íÄý\é7gÛæ7ÆÌ/5.Æi|é4aØYVõ[#g\x001f?\x0002ªïÂ\x001dIKXWuÞ)5°jÙÄ¸äSbcNÒÈ±ïüÁªö¹\x0014\x0012ÒDå½Å«\x0013Å-\x00109Û2þ=VÔÐoïµhô\x001aµnòXZµK\x001c¶UîØÀÝõmÒ#³·6ö\x001c¸{ú}"9{mµ&NÚTÒ;uâz%ñ\x001aÞ`\x0006ÍÔõA\x000f\x001b1|yÍ9ãæîw>ïèm1L§FWVlLøLôÜ	ÏíjÕ×v05öõ½òÍöÃy§×8~8ê×DIÝ\x001dg\x001d®hý{	\x0011\x0011²N\x000f\x001dúæïÆÿý_?ô,¹gÔ½}¶N\x0019Gí7ºÊ\x000e/LG\x001a%|\x000fýõétV¡ú³íðlytNlº¿Ó·ï¯m}ÎKñoeäÓ\x00182=²h\x0002Ç\x000c|Ý;Uù£_87~]¿Tµ\x000c£¶#sª$?ú¾L\x0015ZÃ/¦Å?ñÛM»Ê¯¨ÉäjùÊ\x0019Ý;R3\x001a)êí\x000ciKÈÃti{\x0006åU³½G\x000eQr%R\x001bµ_+×\x0015£9?Î<ì
íù@:ÊP\x0012µÐ?8'iÜ¢
Mo?¶¾DwÅýGë¯÷4?G~J¿zíáDËÊCg*º\x001b\x0015\x0018õUúL=EÅ®\x0017GTGPÃÜ`Í\x000cí=\x001e6:cØò´WM[r\x0010_{õWVôª\x0016ÑÃ¡µÕ."þ_·,Qc§Q:µ[?H&mGÞ9\x0016[!"bt\x001cÔtZWwaßþýÿðOÞ{ßØy\x000b~×ÐÐ <ëï/Jmc§g(\x00195SRõéÔ´étV¡\x001fÿJ¯X×\stñ´øg·j\x000f\x0012i:
ZNu\x001b[7Lúe}ð6_ÖÐp­v÷§¯=üÂ¶RyPëÑ%¥rPÊö§S]r0H§/n\x0008~l­íØ@ñ5Gj£\x0018UÓí¬-F{\x0004:õwì­¤SmZÖtA:\x001d°÷\x0006H§\x0006×È#Fÿ\x0017­~)~òçÚÐ.-&~ô«dÝScã\x001e}´3ü
fÜÌÞ3èaã3)/\:\x001dèÊJ\x001bß\x0001®¬ózYù9ñsDKµéÔ:?Öÿ³ë|ÃÍÉ\x000f'\x0017\x000fæ¼bDDDcïÂ¼S«õOIIï;wÎ¿<ª¿tzqsÂ¸óÅ\x0013Õ+;çÇ
\x000bNG½!?5î®Y6Ñÿd?aV¡\x001f5ÑÕ7ÔÉ#E
Öã\x0006iÖ>7Æ÷d¿Cä¢êÕ?W\x0006?5,^þdâ¸÷­½R
­8¸`ìð |\x0015ZÝVÒ ÇïîSï\x0013{î?|Êm6)\x0015Ù4qdøtêü6iïÉ¾<\x0013 øÓG\x001e]rªZºÞs
mAYBóü×ºåß)\x0019F´q©2ù¡á­ZÊZºb´&²t*±Zÿd?òt\x001a¦÷bgg_
þz¤×¨³ìMÎº½ù\x001fÓÜ\x00155\x001fIH±¶ÉMî(k\x0011w­bÅ/ÞÈ­µ\x0017Ï~|nÎÕ°7A3õ½§ïa3/O¾jê}yªCÿOö\x0003WÖ~ðµ1Ó3.È³\x000b\x001c¶«\x0006µU\¨'·¸ª¿|Uî¥ÊEã\x0012Òª»Ývé¸2E¡å\x000fSXoÑðî¼ïtÒ¤\x0017´¯<í÷É~{nÚã#ÄÂÉ\x0014nJègìtºheoía:­ÊïauùÉÌ
¾ç¶âi²º*jæÿ\x0011Hßbà\x00157¥Soíô	ò²¦g3VN\x000cJ§¡54\x001f~;^]$¥,®±ÕúÖ\x001c%\x0017mÿTØt*Ö×lRWEÿäG¬èÙ ,&\x001a\x001eûpÈ&sÇ½´k{Ò\x0014uí´ñaeÑM¼¼\x001eGWöÒDNå2ô«¢"O§½×¹w¼*¹Dóõ\x0008¯QköÜxuA7ÿu¯ÍVÝ
\x0017Ô¤P\x001a7}«²Xéè	Ib
á
fÐLÞÓõ°þý'f¶¨«¢fì«êUTÐ\x0015}x¿|oÜ?I,zÒÕvl¼òN³8«"O^H%\x0016pí[6EîöªÊAÖÙ!""Þ
\x0007/F¦«d]Âm¼HÊèO6â\x001d\x001b\x000c\x0011\x00111ZF3^Ü Æ\x0000\x0017æÜúKË	\x000f8¨r!""FËhÞ¦\x0007\x001cT¹Á\x0010\x0011\x0011£åÿÓt?II§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001eI§h\x001e\x0001\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0014J\x0000\x0000\x0000\x0000\x0000LC´Ó1\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000{ÞYh*ÿ)ýÓ\x0003gÎþøãÑþå\x0000\x0000\x0000(\x0010õ(¨÷¯þsÑÉú\x000b\x001e'Ú¿\x001f\x0000\x0000\x0000p·z\x000eAÔû\x0017ï&'mÞqýúu\x0002*\x0000\x0000ÀP#ê9\x0004Qï¨Ù¿{}ÕÚË/÷ööFûW\x0004\x0000\x0000\x0000î*QÏ!z6ûýW®:sæÃáö¯\x0008\x0000\x0000\x0000ÜU¢C\x0010õJéôå%+O>ÝÑÑ\x0011í_\x0011\x0000\x0000\x0000¸«D=ü¹®Ø³6wëC\x0011ï?iç\x001fÓ3ÒïVy©ñK?wGiI{béª\x0007-Ñîv£\x0017®¸8mô>,é\x0014\x0000\x0000`ÈâÏ\x0003«l­î¾¦Æù©&\x0008?\x0019Õn×Ùåa÷Éoò:j¦E|@©-[îVýE^oeþ\x001d=æú\x0016ogÞúè_\x001aÅi·Ôÿ\x0011J:\x0005\x0000\x0000\x0018²øóH§¶"åç\x0007\x0016íÈjîsÛ«ïxê¸
G¯*=ÛmÏËH1Þá¶ÓéïO_rß8¸qP'Þ¦¤S\x0000\x0000!?\x000fhÓ©0ã»\x001f¼¯W÷\x0017!\x001e:ÚêÖ~%*\x000eÞØiJI­§iÕU\x001eéô6%\x0002\x0000\x0000\x000cYüy 4n?ïð¶e¦È?[6¬¹dïrK»{zn´ålN6¾ÿ]Oÿ(j>Y>ÿÔ&çMiÛÕu®rÿ\x0016ã&"z®-yÎ¼
òÑg0¦[¬Wz\ò]×ZÊÞÔÏ·Ô¦ÓìF{§Ë£\x0016`Ý¦\x000f©I§RUjÌ\x001b½ªøTGÜ\x001cOO½²0ó/ëìnót»b*f\x0019L(MyòÀE_\x000ft*8ï\x00084|BvÍ¹\x001br[Ü}MõGÔÎIÝ×ÒÕ#¿Ô³ÏyãrÕþ¿
=fê¬Sm×äFõu·åe[+\x0003é4åùï\x0003\x001d~j×\x0003þ>i:>Ëª|K\²ìTiÏæÀAÔ\x0012\x000fm/«êèÏ®ìâï¥³Ek.uª\x001f9¾_³Ê7v=oWZðM{KÍü\x0013þ7ºO´EJýÖÙÑ´n
é\x0014\x0000\x0000\x0000ÂbN\x001fXwÌîéj(W\x001b¥/kèëj¶¾¾PÊ'©Ï\x00145uyÚ2S
\x0002í´rÛÙµQ¬QpáÀèÓ©ÇÑs£öD¦¬F[B\x001fßOÚ÷+yÑÍè_}ã0\x001aö\x000c\x001a;]ûÞ\x001dO:S\x001eÜVg8ÆhNWg_õ¶Ô|%/5J_³û­\x0015¾#{5c§)\x0005åÎ¾Ú\x0013Yb·y¯·õ¹[J'\x0004\x001f|ôöóíÞ¾Ê¢ÏE[\x0016fe5÷¸=¾¯¯¾âv\x001cÛ£|ôU¾ÝÓ^#µë\x000b®¦o\x0011A7åÁÅ;fëVlM(ns{\x001cùÛ|½Ú~Óík×Cy]\x000e?^éôÔ\x0015/W+÷Ül¬Í\x0013µ|ºÆÖçuöµ5[§ÿf©éô:/¾¯\x001cÅEò\x001a+e»¯'¥^r{ºþtHT«4ÖÛ^ñü@2[<nûw\x0016åfØs¾Qj¡ú­0÷ÉÒ²ËÞÎoäúï·ìå\x001d;'1v
\x0000\x0000\x0000á	J§\x0001zÏ~©\x000eîtÑ½Ô\x001c¶å_÷^¶®Ö¥Ó\x0003¥.OíQM¸
¾öN½=\x000eE²è[ó­péT«8²þ©zøtê\x001bxÔ\x001eYN\x0013­íÞ«eþOÅÌ\x0007m·\x0008¥¨én.	¼@@tZH¡\x0017\x000e\x0004rlA³×uù\x00035\x001e2ì\x001a|Q[ûwÙ-»/÷hÊV.âÕ7Ô
E:mZå?¦¸\x0010RÅÜ\x0000£9\x001bb»Ú^qeµãØ¢±òG¢EÝ[¬ö¸ûDI§ê8j¤N\x0001\x0000\x0000,AéTÉ~\x0003¥NÏeë:õ£¼F·î[JÀ\x000bJ§««¯UJñ¯çØöÓiøòTî¾À\x0014þÓiêÞF»]y,\x0013Y:]0:£ì\÷Í>§½ª²P\x001eú3H§Ë\x001aôÿIÍönúÚ\x001e2ºëo¸øH|ðÔC'\x001c®>W×åzkÒr}+(÷\x0004·"0ïT|\x0014Ò\x0015!]\x0013;°`BvEUGO;¸$ýì\ÿ\x0011ÄÍ\x00104\x001770ï4ì}ò¦µÍî¾ÙÕq%ïPVïÂ"\x0002\x0000\x0000\x000cY\x000cÒ©ò4ÙõýG\x0016ÿ`ñâ  t*\x000fÝÙtúïº½ÎÖ¬Lõõ\x0003f\x0017vy»­¿R_¿\x0019ùØ©bÊ\x001b\x000bó\x001aoôyzÊó}ÏÇ5
\x0017\x0003,\x0001ë'ÊÃ³áWc=°|wV}Ãs³±<d®l?éô@©+L×EN·Ôµ{ûjO(s!BÇNo9¿O´×\x000fÕTuÞt÷4®àMe¤S\x0000\x0000!qÔ´ä\x001cëòå\x0013±t½çx¶Á\x000bìç\x001cëñÖ\x0015§\x0007v\x0008ûd?eÍ\x0013A:\x0015\x001fi2RÊ¦~ÇNC\x0016³[ÏF<vªuÂ«^{õºt*^PÐsq~¿CâÉ¾­(\x0010/SJë|5¤Ýf\x0010þ»£³/:<Ë6êb­èU¥ìôÍ\x001eGý^I\x0011¥Óåöb²ÁéT÷ÿA,µ=êAÂß'\x001agµy¯o"\x0002\x0000\x0000@8ÂDM9©«R,µÝî\x001bë7ú\x0017¶\x001c±ÈÓ\x000båxS'®[R¤³¶Y\x0015%"oío)ÍÀéTXwËiyiOÚë'Z\x001d\x001eOéÔRTéñÔ\x001a­H\x001a ®¶äî~yüT]Yî¤Ì\x001dS<a2e´EIì«
ÇGÿ\x000f,ÊLÊÍI\x000c>xðª¨
ëm\x001aRKë<}\x0017+óü\x000b Vî\x0013eLÛW¨\x000eöZÒ,Õ\x000ewWÝoBÒ²vUÔ¢=ùUQât®ò¢,ÿz®%ÛWGNGç7Ix§NòàFkmÇ=`:
^\x0015\x0015¿ó;Íª¨0÷ÉÒ%;2ÿ`²t+hr2é\x0014\x0000\x0000\x0000	NÜèËçWª/5_
Ô°LYü"Ït×\x00195,\x0016»¥N-úÞèRºw1\x00154º#wê;¾ú
¦¦þçNØwQ}iÓ~âÀ§kl¦Óe\x0017íêÜKQ^ï?µü£zùJ\x001e×É¯z\x0002or»z.\x0016$Ö\x001còF©Y-\x001a4ï­_\x001euZ¬uzçt»Ú±Þ]\x001d\x00177\x0005\x000cy£Ôc=ÑËÀ[ªäwaYón!\x0006\x001a(N}qizqåÀéT÷F©ÜóÀ¹î¥\x0005V_«å»boÿ\x0003È¤S\x0000\x0000!Î9\x0001ñîK:\x0005\x0000\x0000\x0018²D= ê%\x0002\x0000\x0000\x000cY¢C\x0010õN\x0001\x0000\x0000,QÏ!zI§\x0000\x0000\x0000C¨ç\x0010D½¤S\x0000\x0000!KÔs\x0008¢^)¾²ä÷¤S\x0000\x0000!Èÿ\x0001½SÁÑ
endstream
endobj
534 0 obj
<</Filter/FlateDecode/First 106/Length 325/N 12/Type/ObjStm>>stream
hÞìRËNÃ0\x0010üýÄïTåÐ\x0007Ü\x0010j¹E9D\x0005À®Ò\x0014Áßã%\x000eU+@zàÂ!ÙY[3³+\x000f¥\x0003\x0001J¹\x0000K±J J PÀ¸F 3À\x000c\x0005iðJ\x0010P\x001a¯\x0004\x0005-.\x0018\x0018tÁ£D\x0010;\x0012\x0019E¾"%É´°ÁE­ò\x0015w6Õ*_ºóe\x001c³Êo¾\x0019ºà\x001fÞ÷\x000eX~\x0007´(tÜ$¡\x001fLf
ý6ãh2WÈ\x0008M\x0014\Ô«g\£o\x000fQØÈÈµçÄoBëJO{ú.\x0004ùW{(éí\x0004ä\x0004\x0014êÓû¾\x001e\x0006×O\x0013íê¶ó¸nx\x000eýn_7._»×®qÛÛe<\x000c}\x001cÔè,¦\x001b\x0011\x0003©Ñ4qÛÍÛà|[\x000eýÑ\x0001þN#É¾ÉhY\x0014³é?J\x0019%#È\x0004è\x0004ØuQ¢ÊdjRjæDIðï£ô!À\x0000]úNð
endstream
endobj
535 0 obj
<</Contents 536 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 5078 0 R/Resources<</ExtGState<</GS7 5096 0 R>>/Font<</F1 5099 0 R/F17 1352 0 R/F2 5105 0 R/F8 1292 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]/XObject<</Image1169 537 0 R/Image1170 538 0 R/Image480 603 0 R/Image483 604 0 R/Image484 606 0 R/Image5 5086 0 R>>>>/Rotate 0/StructParents 141/Tabs/S/Type/Page>>
endobj
536 0 obj
<</Filter/FlateDecode/Length 1969>>stream
xµYKo\x001b7\x0010¾\x000bðàq\x0015T\x0014ßÂ\x0010`Çv¢\x0001Æh\x000fA\x000e½vdØ#É)Ú_cô/:Ãåj¹/Y\x0004Þ\x0015ÉáÌp\x001e\x001f\2~Kö÷Ço^¾>"l2!G/ÉøÕ{K.{/{\x0003.\x000cu0øÏ­¢Ê\x0011¥5e
ZÔ(rv³7\x0018¿¾^æ\x001cÍÉ»½\x00019~\x0003\x001c\x000e\x0016«ÙÅôl¼\x000fV«éÙçü|\x0018Îï>Oÿ½ËÇo§³Ûéj6¿\x001d¿¿ÿ´Â®ßòéy¾:hc¨ÕÄ:ª2zE ÌE¾7øû\x0005¹Ý\x001b\x001cü\x0013N<9½\x0000e\x000b=`zK¬wä\x0014\x0014dä\x0012\x001f¯ö\x0006\x001f²7³¡Înáo6Ùr¨²ÕpÄyö\x001dz\x0016ùÐf\x00042;æ=üÕ\x0002È¦_§Ã\x00083®\x001fÉéï{cû.\x0018è	Z¢=}§ä	bDK¡FwÙgÒªÉ3.ÈqÊAm1rÙíÝ)A×­áïfº8\x0003_ì34rôåÉpd³÷C\x001d\x000fG* áê\x0019µÆSÖ\x001ds£ç\x0014c9u]'#F\x0019äôìC\x0006ñÏS¦g}Kû1¿>9\x0002¼§ÃTC½ÙA'x2j\x0004d2¡`&/jj,AàÅ>qj0	&{±U\!k+\x0004\x001eÎW«ùM?
Ìç«\x001a
Zª,ÑJMàÔ\x0006è\x0005\x0000®\x0014©\x0000\x000c×tºE«+×Ä¤hE\x001dLÃ%aòÜBrÜÇt¹\x0006´kahÝÁ¯ùp\x0004p¹\x0002ôÌãØ\x0004\x0018=/sí\x000eÆ\x0016@&³«\x001cA¶#N\x001e«±Ð:]W¹#³\x001eÏVRÃël m\x0007þÂ~iêzï3ÆÝ\x0004\x000c¶Ï¸`·ó\x0013/hâÛ\x001f0ÈfÆùÁÄ\x0000NëÃÉH@÷¡\x000eTÖ\x0017?Æ\x0017Ð\x0001/¹\x001f«nn5ã\x0000\x0004H<òÍÑyty6Q7;	s^²@$+Ñþ ê¯î£Bïb\x0018Y1\x000bjâ·<>58&OX{¿y¬Ç\x0014\x0017ÔÈ<ö®ü¡\\x0000AjÓ@Jl´è$«)á\x00155"U"\x0005`®DK¡ÇJÐÌÑÆ*ÇOgÊÁ¼®Wmm.AhðçnÞ)A¹\x0000Ø@¥ÛD@\x0005ÊQ8,Ó\x0011/\x0011eP·:7 \Zêª ¼\x0017½IR\x0016ó\x0008ÆåæÀE-¿µ\x0000k\x0008¢C n/¸ÅO$ü\x001aú)0åÉÛ\x0000³÷X¬,\x001eáWfgÊ±gú\x0005`5å\x0004~Ýá¯Ù÷3hèì*\x0000ï\x000c«ÜU \x0018ºì0}9¿\x0005\x0006¡3´§À÷\x0002[á1Ûp_Ã|,¢°k\x0002\x0010×t%½´\x000eÑµFûk\x001f-6Vöóm\x0019RÖ\x001dcáÌ@Ð\x0012¥\x0014µ¾p:0H53ð´ÅeGça_7Ô\x001c¸\x0000.©®	h[\x00027æ4¡z¥E9 %\x0002>Bk\x0001Þ*â­*à³¤@os\x0012¶\x0012\x0017·¸\x001b!\x0000î´\x001b)a[À¶.öÈ\x0018(a\x0007¨/È\x0003c?ñ\x0001ßK}ÂÞLqXj=i®·!B\x001b*t¿ZU;:\x0016ìÈõÏtl%àQMôêu,gaßt¬ð±Ýß]UÎJßfk÷N\x0000I¸a%º\x0005ä·" ?éK`îL@·d\x001a+fì`\x000eDØlR+â\x000fCÜ\x000b¶ËØ"Ø»EÁcu\x0008?ìÂ7Eá\x001d\x000ceñE\x0015¢ª2É\x001fÔ\x0018Ú$\x000b0\x000fuU\x0006v¢`ý\x0004\x000c\x0013YÁqÂÕ31Ñ¶T
S,:óA¿HëÑ:µPk ñlÈY/ð\x000e@~\x001e\x0010ú
ßHñëëu±?ðrX\®6û¥Ç¯
Ît
ßlÏI½cN2È\x001cþ3s²\x0012ð¨Lôú|8½\x000cïÐn$Ë©µzrÍByb:yþI1AÓI_±néxd+Âç\x0006¯¸âöo²å}1:õÃb\x0006åÀ
RFE¯Cà\x0011,C.ðÊ¬H ²\x0005M\x001a¡J1¬â\x0011×½ñÈ\x001du¶ß»­x4»Å£t\x0002ùþ¼xL\x0004<&\x001eS½~|Ø!,AZSÇÇ\x0006dßô­\x0001Y´c@Çz\x0016âíël	\x0013æL¯!pfË|\x0011\x0006®±
\JäIPÖ \x0012\x0008¯¾I1"¡c}ö9\x0014¾´/\x0014£^÷;¶\x0015¶¿ Fàá³`òG¾$\x001bdJ|d3ìé1£T:¦ëzfJÀt×ivð\x001c\x0014h¾11_\x0011RÜýô@YÂ\x0017\x000f\x001c÷jçèÙò\x000e	çàðÛÐþÏk8fÄ³Í&H"\x000fØöx~]BPÿ®\x0008Ó\x0003£ºÈ7I²-\x00124x7-¹%\x0012ÜHªø-L¸ÁO\x0006\x0005¿pqó{\x000c#"[`xÑþ£qþ+±¾BÚÀÊCº\x0005ë¯SM6ÅÃb<I®6iY%ã\x0012·9].Sä=\x000cWÛFØ%ÖÀ\x001a~oÎÓÙ"Hì;DJ#\x0011yk\x000bêK	\x0007NLÈ¶ï\x0010\x0019¯á{ù¶O÷¬ÃÜñL\x001f¯îváÂ«\x001bÛp¡\x0002ÿ¬\x0011(,ï\x000cÑ^S	\x000c\x001d¼Lrs¢´Äoj(UX2Gà	\x0014X\x0019|^ãPßÆ/l°O	òOyíÏÉ\x0015\x0019@\x0007Î\x0000	J+
rlq
ò¾KUÑRk¡}¸`\x0018ªjb:5U\x001a¯Ý\x000bEn|\x0007äÜ²¨(ªãÂEµÁEõ*&+Åð\x000eH\x0014Î0¨\x0014p=Å6)§ÒÏ5n*åV°Ò\x000f^\x0012yüSF²N\x0018©êc(º\x0015«>PHñàä\x001dëeg¶¬\x0012\x000fÊåhÓ\x001dWi;W	ÁZ:8²wÿ\x0003?A\x0018
endstream
endobj
537 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceRGB/Filter/FlateDecode/Height 801/Interpolate false/Length 97010/Subtype/Image/Type/XObject/Width 1270>>stream
xìÝ}TT÷½ïqÿ¢$½èêJÍY§+gufµ§÷¬SÏJW\iO{oÛSÓ«ç^mcÚ$¦i\x001aTB\x0015	\x0004\x0001Q\x0004A\x0014\x0005\x0015	(O
( ÁQDD\x0004!\x0008\x0019\x0014MT¢\x0012£	HÆ\x0007î~Ù{ÏÞÃ\x000cÃ0ï×úü\x0001Ã={~ûaöwöï·9wöÜ92;wáü\x001b×oô~Õ{ßá\x0018P=xðàÂ\x000bç¾d|D¿½=|øMîq\x000f âg¬7¡¿O¼öÓ¿\x0013¿\x0012¶áöÇöõöÝ¿ÝÓÏSû\x0007\x0000ÞèÂPî<ýÉÙO®}~Uø\x0008s¶ç×ý_úé§Á^4CÚíM{ÊÄ&÷Øâ\x0010\x0004?YmB×g,½:å\x001dâOºÿ¼êBýñ\x001bW¯ßë»Çî9\x0004V\x001fy\x0000à`\x001fÃÆ°\x0013m'Ú[ÚÎýôÎí;ÎöìýªÏ/\x0004v{\x0013NØäÀ!\x0008~²Ú¨pýÏÙ9ËNVÖvzñË;wÙ=Àê#\x000f\x0000¼\x0011ìcØ\x0018ÖÚüÑÑºÎ\x000eû­\x001b·íùåÝ/?ùä`/\x001aÆ!íö¦½(À&÷Øâ\x0010\x0004?YmB×¦Ç\x0004½B\x001cë±ÿ¿¦mU]ö3·oÝf÷\x001c\x0002«<\x0000ðF°acXKcóáý:ÚNÞ¸vÃÙwïÜåó\x000b ÝÞ´\x001f÷lr-\x000eAðÕ&Dë:^®Ï+·Ô}{Àîé=«<\x0000ðF°acXsã±C¶Ú­'®_½îlO>¿\x0010 Úí
\x0017]\x001cà7«M
w\x0018*ÜQ·îüøÄÇT¸Ccõ\x0007\x0000Þ\x0008ö1l\x000cãô\x0012#
\x0017\x0006\x001cà'*\*ÜQ
\x0017?~ô9u`ýêUOEN\x0008\x000c	_ñÛ½öá;´\x0005\x0001<½¬Í\x0012*6¬\x00051?X[ß9\x001c<
\x001d+Ü¼µ°É«Ikó×LÏ¯\x0017~8¿zBÚ.?^´³t}ü/óú1 \x0008l[©lo¡Q\x0013£W¿»ã¼7;Û|¸ì)Ønóvâ²Mÿ,\x001ca\x0016ÄU\x000cã"\x001f­píÍEY«\x0010\x001e%n\x0015a±?I/;xjÈóª
ÌÞ>\x000cËa\x0016
÷CâM«\x001e\x001eÊr>r-÷3q¾§m×,Ué¸ÓûèÎÙ¯Äw|}÷áÀÝ³_N5NöU«0M¯#Ó§å±Û\x0018®pµg\x0008b2ócc\x0018m¨p\x0001øc\x001e{íò¸è\x001f¬-³µWGCÕòÄ¸Éi»Zóð¦W÷o²w\x0006nþ¾\x000bl»4ÿô£½½¡$'mòäå5Ã_ä¶f<µ¢øpÀ¦÷BÝò¥+×z5éSrêÄÊ2ÿi£mè¯Ù°mÎZ·Õ\x00004Å \x0002^á*_\x001a:Róühø«ÍI^ZäÜ2/§Ý\x0013\x001a¾2NØìí§:ìµËbbÃªqAÆ@V¸­yiq\x0013óK\x001aÄ²ÖÞ^½vÅ\x0013qù6_¾ÆÔì#»æ\x000e÷I¸íÄ§2?\x001cÚ_ýçq÷?·:ö×\x0005
{õa\x0014k¸1âÿ.½Ô|S}äËvPòÞßþ¾õ³lÒ?ù¬×cMÚ{Zè~.\x0015®ë\x000cÁ#\x001f>^G!*\\x0000þ\x0018ÚG¼¶¬HwiÇ^õ×på¬ø112\x0015®L(4Bo\x001bÎkiÞ:², ß\x000f\x000f©Â­Ìúå°]Þ	tS\x000cb¤*\PÊM\x001dÔ
wøË¢QÂ¾{Ó°lÀ\x0001<\x0004UfM\x000cßT¬«gí?jvqÇ§Yí#ã`U\x0006q÷ï,^·:@uJ`z)ç}ý0Ïû~#ÿZôõÝ\x0007=ê¯V¸Æ\{1ñÖ«×§zWáþÆv¿_¼^<Âõ,\x0015î°£Â\x0005à!\x001dxÚ6%Eþ2ÿáÑÒõ1ÿ-\x001dLÃoZ¹-?]ìa(6w
?+½ÝäH\x0007ç\x0013¶âWãc:âþ8³J¹¦V9%»bSZÂ\x0013R×¸_gU+»\x000eé­ÅJïè'\x0016­ZRu¢K:\x000f[XõnlLðà{ékj3&.\x0010çüÜZõ4­³nÇ¦\x001f\x0011516»ØïëÍ#Yáv5mûeèÚMòÙ¥ýHnºòîíf¯ÙöÛhñí½SJj\x0007K^ÚDhÉß\x0017\x001d>ï2s)ßVú5¹ê]sæåÊ«,4úó¥k\x001f¾'ÏSôA©©ìõåQgþÌ
µº8mÛ3åù<µbÉµRçò%ü6§$Üõ\x0011<È
2«¶O\x00117wË¥\x0010·¢ò5ÉòV$¼Jµsf-{ó¥·/o'òeq·f9y`Ò\x0003ß¹$i
_`Û\x001aù|®ø¦Í\x0015nTú¬\x001a.cï_Èk-:sIwúÖ]9Òv%l®éåÉ©®
×l]hGw¸pªI;{uôr±ÁCÂWü÷v¥CuWSÅâå+ÄíJÜ·ÙÔnÖSÒJve¥ÊûË\x000fÒJëÔÃÛÞa¾gi·¥ð¤ww7Û»Iºk:·\x0001iVùÁ¼´qå¥ÿ-¿ÇE«£÷\x001f-Z'\x001f¾ÄøÕÙ> ÊË&®ßcxPüb3µ\l?óïC<ì#Î
×õY ¬»ß\x0015\x0019®º\x001fÛõ§èbçL¥ÌT¶Ì¢ÿÐVâÂ¯\x000b2óì¦Ç
i[Ý­\x001ea69~X~\x0012åTË#Sr=íþn\x001bëk\x001c«\x0003É\x0011¦Ëâq,3EZ6)âl[ªÞV&>gç	o×©©\x0000Ã½{¬ÏuÑvÙéGÂLÏ×ß\x0010ÿ\x0014v3õ£û÷\x000c<xôùùÞ7ÃÜ*\íÏa_ÔÜz$/ãÖýâqO®p¯Í)»wúÖ#øG½·\x001cùk¯\x000fîuÜ|à|#ROi]í|íÍ\x001aÉ«gõ\x000bïþjûÝõg\x001fö?\x0014÷èÚÙ¯^\x001a{\x0015®Ù'þÊð<u×\x001c};û²×®I\x000f­JäËì çy\x0007÷
\x0015.\x0000\x000céÀ#\x001c6M.Ä\x0008'\x0015Ê¾pø]\x001c?c£:2W¨ÎÂ×g7	ÖÎ¶ª\x000f¾ç¼øÛP]²¿µCì\x0002·7<*&´RzP8sX\x001cQ%*ö¦²?«§7ÎCzeÖÄ¥[ö]ç:ÛêkëÚÔ^-v¨;µwóÊ°7J\x001a9w\x001c*üÕÕk¤aöêï9§ÉN~ÂïK¢#Zá§rStVnLVvD|\x001f\x0007ââ¢¥ñ¤ÇÖ,ùcTßj­>$0µï	]\x001c7»ðpô`ØbÂûÎÊMj5¡=\x0005]\x0010ýÓl[0S3VÅMLÛu\y]Í\x000bçôÒÌçJlo·ÅÅE©çÂôQÏË«ÞÞ\x001aã~\x0005poVBH\^U{§ðÌªìä\x0010å}
¾ÜÏZíY§t¶Uç=¿@ÝZÊ2CÂVÅU·ÛÅm döâ¹eÒÒR:3,Yz¼³qGæäÅY¥v³fé:º«¢Fl1{ûÎ
	ê©þð7OF¨Âµ·×Uä<\x001f¶zÔËRÓæ¶ªª:qTÂ©#\x0005kCo62ñP0yU4BSÚõÒv\x0019ú±\x001e/N\x000fQWëÌÉ¡ê¡Ã|]hi\x001b\WáNXqH|É\x000eÛ)RE#-yíÎ\x0006i\x0003n\\x0014¥|\x0005'ÖDÎ½àÀûK£æIkÙdï0Ý³#²%ë'ÅüBÚMìM\x0015o;Zv[D²
tØò­'T:!qòv%=WÝ©ëÊxà\x000eAÎø:BSÈoÁâ¿å>â|ÜõYÐÕñQÍACO^cû`\x0015®teYY§]]õy)\x0013×UÙÍ[XUÔwÖJë×Þ¼scró\x0018kñI4qqâ\x001fä-ÄÃ[3Ùt\x0015®ùÈò\x0008czÄÐ5Béú)\x000f/'ìª5G\x001bWo\x0002u§)¹ª\x0006ÞÊÃr\x001fìPº(ßØñ¹î\x0014DéÌlQá¾Ò,Ö«\x000f¾¼_}°·úâC©xU®á¾TÿàvF×ï½¢¼±ÂZîèÕ\x0000õ^üê7j;ðp@;ÃOênæ
W;\x000e×rS´>>ûröu4õÄÔ2i³\x00147×ÿÈO0Ì\x000ezwp\x001fQá\x0002ðÇ\x000e<^T¸ÚïÕ
\x0015nÔ½nsÔ\x0012LH*=îþ¸³è«-x>"myEcæéÂK»\x0006f
SFæTº\x0016U9J\x000b'\x0006®ëÎöò?:/\x000eU*Ü=¡áJÍ.°ïX/5W[áÚxç°hÅÎ
!äbkÄüu·f\x001aÝ)èú\ç*\x0013\x0016`ÁBåq³ó:ÃÌ«sþIisazMÃêÏ%õqÚe\x0010ÇZz¹ÜÏZ\x000b×F)¶ÊËÍ@x]ùbúÄµâ½ÄOj×©Ú¸÷ET5Éu¨áj
ßÔ¦¢ÏXoSn*d^¹¶O¡éä64<î¢_GÇÖ,Wöhu¡eYájFawÃs-¶îh yÜdï0Ý³\x000cG$Ý:u\x001dÒL)ù»ä+à3··É\x0013È?\x0018ÞÎã[á¶U¼\x0011±âÚ6Óñ¼&ÇöA+\ñ+'VI+è@t²\x0015YT¸q5êoö]s\x0017$'º½EÝ'n\x000bñn÷wÙHG×J¦G\x000c]#\x001cÈMþ:>Ú\x0001»r¹£` ÿ/§$ß»4 Òãa·óÏ>¸ÙÿÈùb\x000f.~å¡ÂoQÕU#ß¢J\x001aÏ«^Ã}³Æqé®|
Wòðþfñq¥ÈuõRÖÌmóEñÇëö;?çêÏ7ô_\x0012\x000bK¥·\á\x000e<<ºõºPç_\x0012\x0017ïúÉ/Fsë~
×ü\x0013ãs\x0017g_
÷{YÒ<L\x000fzwp\x001fQá\x0002ðÇ\x000e<^ôRÖ\x001dH;mùi¥óç'ÞK_¾WéÍÒXÿÛ÷õý¯ºLÎ\x0015®øeøîå«W=µ(áWårCÝùîÕ]ç\x0006Â¬&h¿ö\x000cõw|Jz)\x000bgAú7"OioÞSý«èØ§b3Rä\x00166)©ÜÊ\x0001«òÍõ«Åyaæ®3O«S\«eða\x0005¹µ\x001a\x0006uº¾c1¼®ú«8¾õ¤§\x001bÅÞ´wyr¢[WÒao
ßä8\'W:¾ê;Î±\x0006®
W_¸A\x0019ÖóWu¡eYáj6\x0003×ã\x001dÊþ\x0012\x001fïìJçªp5¤½YÛûµØ³tSêÖ©îÌPÿ\ùUôï},U¸Cê¥Ü5x+î\\x000722Wÿ`QìW\x0017¹÷Ûw;¶\x000f^ávµÍ\x000eKÏ\x0016¶-Î¯O-*\Ó#WDÞîþjÏDýÕ·#qÉO\x001dÜÿj|ìSï¹îy>dûoAR5Ú÷õºzñº¨ó®SòM¨tÜ{&»~6ÜYþUªpå¡¾:råë¡ÂUævt«vnÒÌå
÷î×¥§¼{R\È1Wá\x000eúiëzg_öÚ5+ãäï?Õ\x0011L\x0007=Ï;¸O¨p\x0001øchGAî4e<ü¶e¯J\x0008ß«¿F&l+Ãå^Ö§\x0004¦\x0015®âTcvZüu¢\x0015®æzÊ0\x0018Á
Wì?\x0019¢\§ÐÏo$uÖÏ÷Ì¿ÑõPájfë×5ÜA+\µOÈu
wÐ\x0015äÛ5\ÍwÑÎK'úËÚEÒ6xqÊ\x0006¹G®×pÇO[º>fbÒöê¤+Gºk¸W¸oÃ\×p-ÖO\x0015®°!ÅÌ,¨»ê®áV¸&{Ååe«ÙÞºÜ'Ð?wôW¸ÜiJwiR¼|ã}«F(¨×^Ý¸íú\x000b¯5yÿjÒÅëbC°û;\x0006\x0016\x0015®æzó\x001a®wDC¿kr òñ\x0008cÑQ¡£¡lîbïî\x0018Àÿ»æGBýØ#\x0016w\x000fö$Ë\x000fÞ®¹-üúèôÁ\x001bSß¹þç\x0016©S°§
×ò\x001aîÛíb\x0011úõg½3Ã®þ<õtmVWáJO¹65Ìú\x001aîÖ¯¯\x001a®áÞéw,W¸~â;åëÙW[Ùì¨\x000fãO,\x000ez
Ï;¸w¨p\x0001øc\x001eÏÿ-ÈxøýðÝÅ)+\x000fë+Üºç\x0017¬Í».W\x0017üfq·\x0015nCME]«<
©jóJï+\i<`zF8$JxnS}sF0
ïçWÇG5ù«\x0008[¨Ü§-{UÔäU%rËÛÛësÎ6Û¾&e]þq±Tá¶U¼¡\x000fí:Õ*Mæ±Â]\x0010ýSy\x00084\x000ewòú=Ò\x0007P8$Cã:ívóÑgòàS¥ç\x0017e<\x000ew¯4\x0006ÍV°vb¨·+Èb\x001c®<$S\x001e«ïIÃßäñDÒð·¸ÐJ©õl[¾· 9Bé\x0006yª¥®QÚb
ÍR\x0018\x00175³P\x001aÔn[\x0018\x0017¢¼áo
\x0004·Â-\\x001bõ½
ÕÒ¶Ô¿~E×\x0015®<\x000e7·I\x001aÀ[ñÁ\x0014çõ\x0002óu¡åS[ñÆ\x0002yí\x0008»ÀîÐè¨A*\½ÃtÏò®Â\x0015Î\x0000\x0017\x0008ÛÜ7¯³íXCc~\x0002ýsæ¯\x000eI*\x0011ö5»Ý¯\x0001\x0016´ÿ\x0016$\x001c½Ã×oRÇ¿ÿ4Ì9öÜb\x001fqõR®Ý³¿Yj¥SG¶¯l8\x00016;¶\x000b\x001bÞÍòý\x0001\x001a³×Æ~K ÔãIÞLIQÇýYÃMÆ$JãpþÞ}\x0012Y¾5
É8\x000e×í@du±:b\x0008\x0015±<½øÒõû÷Õ~$¯\x0014ÛûKGq;µBì¨ü@(\x0016oÝ{]}P®1e\x000fú\x001e£b=V¸¿©»/Áý\x000f\x001aö\x001dº¬\x0019ûá}Í
¥\x001eÝí\x001fpÏbù\x000f¾Ã\x001dã\x0015î øÎgùzöµ'{ò²ZCkzÐó¼û
\x0017?~ô9u`½r7Hñ¦y¿ÍQï+Õå~ømß\x001eïìÊ¢Þ7µÕy»ã\x001f§ä${[áÚ
å¼i°ÚaÆ
W¼ÓBaÆO\x0016÷5\x0015ïy»¾ÂuñoH\x0002[á:;ÿ\x0008ººHs\x0013$]Ë?±hÕ;;÷¹]ïzä/j×5×
5wV´®p3»î¥\´W\x0019æÕiË_ó\x001dq5­ZUçÝ
\x0007-ë4w¬ýEVEr·+È§{)¤å»naw@\x001dÙ×ÙXëÚ~\x0017J\x001d1ÍÒ¢½áêîüç·\x0010¦ðEp+\»r¯iy Aé\x001bqÞV¸®{)\x000bÛUZé\x0007\x001b©EéºÐò©Âí´iï\x0004¾}Ãó+\½ÃtÏò®Â\x0015ïµ¢ÞT\x001cÈUØd@÷Üªwc¤ÆL÷ë_ü\x0006²Â\x0015ËÀ¢,åîÙâ^vÐ5ô³­2×ÙÚÛr³5·#3ßGwªxÇÕJ®»\x0019+Ìí]
»4÷k-±¸\x000e~ :*2Ds:mQá&Gä;wíì"å êÕ'§ÝßmCÒU¸f\x0007"#å\x0011Cþß¤ÖþËî®=[W;ïU«½KüÐ\x0004°Â\x0012Ö{Zê¬+\x0015ã{;zÅQ®^Gn¼tËe\x0015îwn8ïo|©ó«ê\x0001µ½{^\x001aûàQítc+¥ÂúAÿ%it®£ÿþÎdã½çìýúR¯ù½ÇV«ë!¬\x000e\x0001ðü¯û\x0014¾}µWý%ÂùZ®;Õ\x001cô<ïà>¢Â\x0005à\x000f?^*ÏûyîaWQfr·1(°§#m\x001cüÃJ
¿ËÉQ(°\x0015.Æ ñu\x0008
´`üoÐQ 
dû¸'\x0015î\x0012ûà­8¤~½eo^»2ê#ñÂT¸\x0000ü1\x0002©ÂµQ?ÏUî­×ñQMÆª8µ\x001bçØ6¾N/©pG;*\\x0018¯CP Qá Â¥Â\x001dLÅ\x001b\x000bRVÈ£ºNµì/í÷èo/Qá\x0002ðÇ\x0008\x001c¦Ä>JÇÈ'\x0016%:o<Ö¯ÓK*ÜÑ
\x0017\x0006ãë\x0010\x0014hT¸&¨p©p\x0007#\x000e\x0005RF\x000fF?õþ0ÜÁÛKT¸\x0000ü1"\x0007ªñÓK$*\\x0018p\x0008¨p©pG-*\\x0000þ\x0008ö1l\x000cãô\x0012#
\x0017\x0006\x001cà'*\*ÜQ
\x0017?}\x000c\x001bÃ8½ÄH¢Â\x0001 ø

wÔ¢Â\x0005à`\x001fÃÆ0N/1¨paÀ!\x0008~¢Â¥Â\x001dµ¨p\x0001ø#ØÇ°1ÓK$*\\x0018p\x0008¨p©pG-*\\x0000þèï:%Ç\x001aÕí?ÔþQûËWhO\x0004ûövç;lr3\x000eAð\x0013P@]þeÄ?%\x001c.ÜÝÑÞqµç*më\x0013Ï\x001fy\x0000à\x0006\x000c\x0007Ú\x0013#M\x000eZl\x000fð\x0013PàÐ¶þ\x000bð¹0ñ¦ç!!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!ø3_Ý\x0010\x001a\x0019ôÅx¬B@m\x0010B\x0008!<áL6'ã/lc\x0010B\x0008!äñ\x000cgÂ´9\x0019a\x001b#\x0010B\x0008!g8\x0013¦ÍÉø\x000bÛ\x0018!\x0010BHÐr¦ò¹ÐÈ	r\x0016Æþ0uç®+\x000eéOmïGED\x0015ïí\x0017'ë¶ïû¯ÈÈ§³\x001b»\x0002´\x0018ýg6¦%LÌ/¿e1ÁåßG>¶¿ÍÓ|tËì]¼øÝ÷+Ôþ<\x0013¾W÷á-QÖìºÊjeÍzJE~â£Ái±ÝæÂ~´¨¨R·áµþ}QbL»ÕS
o­îÐÞÍ'ÙP>.ÀÍÒOF,)Þ3"×\µé¥ªóAl\x001f\x000f¡Â%\x0010B\x0008	Z´\x0015®¥åuâÕb÷ùÚ?D&¼]ÿE ¤ÿb^Fe\x0011\x001d¨
·aø®·\x0006©ý\x0003v&ìhØ¹æÉ¸ü¢Î»ÝÂ¯½ªvnx:rké5ù¯çR\x0012RSÎ<±4+rÞañsu[¾½zÿq¿¡kÕ²ø%-ÁiØ\x0011os¡Ic\x00174j¾C8¶mÒû¥5Ó\x000b\x001b¼Õ}¹cSüÿÙûuáU:+þ}Iñ¾a}S¾-ð~\x0013v7ô\x000ft÷Þë\x001eõØ¸3õ¹ç¬'\x0008ææGK\x0008!\x0010\x0012´È\x0015nBe£PÃ^©»H(÷<\x\x001a7qí¹r¢G¨þÆi{yß´Ðu\x0019\x0017uo¹27öûÅvéçÁ+Ü¡¥»±h§¢cT$@m.\x0014\rÅ]MQâw:¬§wV¸\x0019l]\x0008+4Ãt%\x000eW|Û\x0018\x000eoÕ\x0010Ð\x0015çÞà\x001e+Ü`
\x0010B\x0008!$hÑT¸Â9óö
âe\é´VWúu¯\x0014ÿ¤øHÌ³ë*÷+\x0002\x0007:[+\x001f\x0017\x001b¢ôÝ[wWIkm¡Ò96|åïw¶w:§\x001fÿYNm¾7r÷ã\x0019Ò¿\x001d.¾úKÒç×^4^\x0006Ò-§áuË£]fñçìªÍÏË½¯A¾¶Û&-)F¾`ýdRöÿÔ=eÒÖæ#Åÿ.<E:]·zãÃ\x0000	wÙ²&¤î;ixüØ¶Iñ»\x001bÄÅ
÷½â©¢'FOZQ¸ý¼rñÑUÔ¸
ùÊªQ"=~²~Çò*\x0010ÖrÕ\x0019a}Ü÷k2q\x001am\x001d}sÿNyEDOÛÑqO~9¡HWÝ¾,EOÈ¢ä7lÊzï¶ïs­ßÌæ±ÐæúÊ\x001d1ï«ß\x0014Ýµg+Û¶ÐÔÅ®mUÙ¹4¤ÚJ\x000bc§æÔ§op>ÞS^ùCqeE>\x0019³y£]XY=¹òf©î°Â««{GÏµöubaiïø°®W°:¶æ´ÿZ^éq[òÎ»÷Z7_\x0000}-)ÌÇXù
oÁ¹yHS\x0007©ò\x0002/I_räsew>¼õ¹íùi\x0016ÊIÔ(oÒ\x001ez¥yÉ
ycÈH³;ÔÓ|\x001b#\x001e\x0007vÓ,{ûè(nfµg6Jm"/¹óp¤~,lc\x0010B\x0008!dÐh*Ç\x000bgm³Äk¸kÒÎ
èªÅ[
ó\x0016éz2¤î\x0013{\x000b_Ü7m¡æñä\x000f\x0007»\x000eo¤ëö\x001c=­ê3iL¢æAãEá¼vvV¡\x0019\x001b/[.§ñuåI¬\x0012\x001fw«p',\x000eÑL&_Á<Y!>%.?ãàáìä\x0010ÃS"?#Í\¼\x0000gõÆ/»hrAÍU\x001d\x0008'ÿÑÏd×µ	µOÿÝ¥kBÔâÈ¤Â\x0015{KUÒ½¶=YO«)»íÇ«Î] /tÛf-TÖ[)¤\x0018mU\x0019O&î>xÛ!Î¤fëÓ¶ÞR32;ç¬Xð^è(náÖRqÃèÙ\x001a;·F*zoÖ½4¼\x0013°êCÓQ¹½ô»®.Êío:}Zjêê¤I[[{ÍXávÕdDn-ê¾§´R¨³t4´´´Ê­·'+DùîÂ­ôSVâg\x001bSc^(í8Û/öN/ÊJÕÐ¥L\x001fùtÆcÒª¬+N
Éj0|dµ\x0000V¸º
FØ6m{Zãlûî\x0017\x0016ªË)\x001c\x001c"SÿTýÉ\x0005Í¬Î¶Ã^{BBô1ùò«\x001fÛiù6M*ÜAÚGòé¨M1-j¡-\x001cmÂ×$µ\x000b[¯££vëÓÛ|\x0019×\x0010Üm\x0010B\x0008!\x000c\x0016·q¸j\x0011çª\x0016»ks'è§+Ðæò5ÂÏ6Ôuôgï§®ßs^\x0005ÖE8á\x0014;ÍFN\x0008ßyêæÞÍÝ7
Ñ}¾~IjæBaôÛõfË)Ãk_·ûJÓÂ¥ÎÕn\x0015n¨\(9\x001aJS\x0017\x001fåëMskå\x000b7ré­}J´R\x001dX¿ñalÿàU¸¾èý
ó\x0016Ê_k\x000c^á>qÈm ´®0«pÏ§%jÇ¨~\x001e9Ëö<½¦+¯sú/Ê³ÿ0»®áöð_\\x000b\÷h:*[vQv&\x0015nyvôÿ®p\x000eÈ\x0015Ê|³BÒUÉZT¸çª^Ð~t«vVhVÞ-·®½æ«Æj\x0001|­põóÑ´0ô=fV®EÒm\x000c\x001eÞ¦I;Hû\x0018:¬ÊP¿g\x0010r&)~øÇePá\x0012B\x0008!\x0004-Ú
7<þg>tïñ+Wú§r©øÇ{\x0019
µ[+p:Z\x001b*_»û½ë[u\x0017MìË\x001ae<ÖT¸×uëY-ÿ»]~!áÔÚÕuVY~ééò¯Ú§¸FGZ½ñalÿ öRÖ¼\x0011×¯¦½wå­ú\x001f¡úþÌ÷Õ\x0014þ,*6Dß,\x0016\x0015®qØ¯ð*òdV×|{ú??T]üb\ü·WlÉh5~\x001f2:Û¼GÞJ\x0017mÛ«í¢,õÀOY¢ï¿=`Zá\x001aÆ½º~íý¤('ý\x0019©\x0017®ºC¹µª³²3®Â\x000b­\x0005³
×j\x0001|­p
óq}ßb\x001c««[$Ý«øTá\x000eÖ>ZX\\x001eÏGÑ¼\x0011B\x0008!\x0010ÏÑoÕDSîÕç#ã^¦bÇÑ\x0013âåZåDÑy
·µóbtùF{\x0019ôÂõ+bÿÌ[\x0017\x001bÎ]ºMv¯Ku»D{®ê\x0005áµþ¾eûuGOï¥Ì5T¸úk¸õó"=\ÃUËUW;è5\Íý,Þø0&xwòú\x001a®øýÃÆ\x001cÃ\x0000d¡X^uêæ\x0005enC¿k^áªË,öq
Ï.´ú\x001fR£ªÍ·\x0010û÷Ú.ÊâÐç
ä>´\Ã\x0015~VÕÓ£y¢üøÞ­±Òmõò¶ç×5ÜÁ+\Ó\x0005\x0010VÓJÏ¨I÷ã\x001aîP*Ü$»ú\x0014ûî\x001f¹U¸¶{ëñ&`£|\x001b#\x0010B\x0008!\x001eãMÛß\x0011c¸Æ*¦vßx­v »½ôûî×G}¡
}}\x001bßv«~&*ÁsëÃ8\³
W\x001cl(·Ý°¬º&eÛ8\mkõÆ/ÁûoAÑÏldJãpTÇ\x0017T¸ïÿ¯E\x0005»zõó\x0017jÿ¥%ûå®Ë·ýP\x001dhy²*#$ýøÍC¿Ãm\x001cn©ô\x000fy¥\x0001\x000b¢Õ¢Âý¢áäéSRIx¡»vnä\x0018ªp¥!	\x0002J¨î£gU#@»ow¬IK\x0008±®påa°ÛåVj*y.ÔÕ{ùû\x0005í\x0017¤õX¶5Y\x001d4-T ò\x001dÝýnãpw¨ãpCåW¸V\x000b ®îru\x0018uþ3\x000b½\x0019+\x000f¯Çá&-ë0NÓã¶H\x0016\x0015®øö+V\x0015g/\x000fq«p-ÚÇ²Â\x0015\x000f\\x000b×Ä4]¾¹wúÜ¥ÎáÞ\x000c¨p	!\x0010B\x0016o*ÜòÝY'Iu¥x¯ãÃòÍ4·M^\x0018;µ°U\x001e¡éºÑqhÌ·
K/\x000eôÜj]ªyºÛ­;\x000f\x0017*w<Îièl/ý®ç
W¼+Ñ×W\x000c~/eÓ
Wº9°x7Wá¹¿.nÊÈ¶¬p-ßø°%gÂ÷ê>Üâ\;B+I\x0005¦ü§s)ùyÎ{)\x0017ïºb}/åþ®õ)Kß?(w\x0003îWîL+ß.;/{R§\k^²LºEmN³÷R6«p{Ê·x¼±öèmsyCÕëìlÔÜ³º±ò\x0005ë
WÓJ1ÏfÕn+H\x001f\x0017ï,­Þø7¥µöíDõâÒM¿Ccæ\x001fõò^ÊT¸V\x000bÐóðRi²ËLÍoÎ1ý/BºêÕò^ÊC¨p{.6ÌWn°¶¤ñÀ<·
×¢}¬+Ü#;_tÞ¬;uï¡áÞ\x000c¨p	!\x0010Bç\hÙþ]óJ|lgÔ	÷d§%½sX­P\x001eÞ«ÎK|¡ü|°j|·9\x0019óa\x001b#\x0010B\x0008!Ö/­J½Mnä;¶3êÏÏ§%&¾S'÷çt=ß\x0012\x0018ó/½Tã»ÍÉ\x000fÛ\x0018!\x0010B\x0008±NóüpÃ|ÇOFÿ°¦Ïyô¤¨ô×+Ú;½Hã¾ÍÉX\x000fÛ\x0018!\x0010B\x0008y<Ã0mNÆ_ØÆ\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008!\x0010B\x0008\x0019+\x0001\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000@0Ô$Oö¢¤`/	\x0000\x0000\x0000\x0000<¶N\x0017¼-fjfÌ\x0017¹»ãºúç°\x0007_Élt(ôuU§½5Sr~Þ¾]Ø¾;¢_!,çÌ°¢\x001d\x001e&¼}(íÕéÂdïíºèÍ|w)¼£é¯f\x001eõ4SO¨p\x0001\x0000\x0000\x0000 è\x0015®9)µ·¥?»U¸¾³Õi¡³¦Ïx%¥æºél\x0003H)±§Ï[wÄòµ©p\x0001\x0000\x0000\x0000àñ£V¸o\x0017\x0016~sÜ97T¬E]ÿ,Õ¼ÊM¨03#Þ5]½àkûT[\x0016jþúâôY¯.L,k½íüËy³ÂsÚôÙó"6ØÎ;ç8oSÿ$¥/¿¥½¬÷ÁÄ¯Ê36sÎÂÄ\x001d-\x0016EnM4ü®Ü\x0016læËa%M=Î×W\x001bA}5Iâ¯K÷ôØ\x0018öòLé)-0¼XßÙ£ûlûöÕ¶v÷
\x001cJ®<Ã?eµ^o)^T]\x0012Ï­\x0007\x0000\x0000\x0000\x0000\x0018:}+Ò]4V¸\x000bæO7\ð\x0011QvÑò¯¯åtþÅp¥xºò<ÇÑus\x0017ÃKL.¾^ß\x00133Ãx¹ùµ¬V³\x0012ÑPá-ösÔ\x000bÐæ\x0015î3g.°4Ã¢°Î?½\x0014²â-÷
wÚëóæ©sþà¹õ\x0000\x0000\x0000\x0000\x0000~q«p\x001d¶\x0015Rå5{ÝÑ\x0001·
÷ò®÷¤mN²­Ç1à¸Ò´ñoâ¯³Ö\x001c\x0011ËÌ%ïJ\x0013ÏßÝÕ'^\x0010î<¸ûÈEåyÓå¢Rz^OÓFi¶òóN\x0017H3P-\x000eëí»Ñq° ¬ñ¶éÒ^ï>{©çTÒö5eüÉµFú
×¹`Òb\x000fôÌËíÙòr[T¸BI;?«é¸¼Õ+fIÌ/:'Mp"ç5¥¶}kéêÕKÿ:S­Xõ\x0015®4nu´²çÖ\x0003\x0000\x0000\x0000\x0000øG_áöu7dÉ½§Çx{ÀXáÞÞ\x0013#M,÷`\x0016].\x0010\x001fÕêüYs9Xu{ÏRMÏgõyr?ÞsEóå«¯Dç\x001cìòpó*¡2Þ\x0016ñÖË3uAM¾ê*\÷\x0005sÔ$I\x0015÷¬uÚF0V¸+l\x0001Ý#Ê\x001cZ³¤âúÅ×²Ë\x0013\,	7­pÿu\Û
Z\x000f\x0000\x0000\x0000\x0000à'ó;MÍ_`W¯nj*\ÛR)±NÔ¾ÈßL5mZ²8íõWýgÌ
M«6«so\x001fJuëÌì]k²`êû/ÊZT¸R]ÿÒû­¼Íh¨puËæ¹õ\x0000\x0000\x0000\x0000\x0000~2]Óg¿²peØ5×ùçÀW¸\x0003ÒÅão9/ÎNw\x001fz¹,Bßï×úå\x0006F¨ÂýëïT¸\x0000\x0000\x0000\x0000\x0010tîw2þYSáýÅ_cöÜ6Vý«û¬Ô~ÈKMçâ¸ÒTðÞ\x001cÝW·%qö\x001cV»
ûÓKyzJ­¶\x0011|¬p5½?Î{kÐ
×së\x0001\x0000\x0000\x0000\x0000üäSë¼ÃÒøÝÊ
nmÝ·§ñ²î¯ÉÕÒUÖ¾îÖÝE6±R=óô*sâôÏ;*>ïÜ¾-\x0005ûZÏÞÒUø®a°ªaI^ÛØÒ§ý¯F^T¸\x0003\x0017Ë"fh\x0016ÌÛ;MYV¸jÉ<kMº\x001bs_ËÆ×MÇáêÍsë\x0001\x0000\x0000\x0000\x0000üã[kþowÿçzM²q¨¬ò'³ÿ\x0016¤¾¨I\x001ff^ÊBüºn9oÎåe;´ÿ\x0016d]á
o4é\x000fòL¦ÏzõY3¦MaòÿpÝÍsë\x0001\x0000\x0000\x0000\x0000üâc; ^f­ÎtÝÐø¥ßÈÜc¿­üÑÑÓT\x0010ûÖJõ÷fÄ\x0016çÿý\x0011·!BýÓ´sÞØ ?ïöÑ-®Ç§Ï\x0017±ÁôNS\x0003\x000e{Yì³¦K/º0ÍvÞqtÝl/+\ñÙçm\x0011òÓ_ùrXbISóôø\á
³ûÔ\x0016ª.ÌºãòõYÏ\x0015î`­\x0007\x0000\x0000\x0000\x0000{\x000b\x0000\x0000\x0000\x0000ÀXâèësHãb_ÓÜ*\x0019\x0000\x0000\x0000\x00001G÷\x001fyfæ\x0005\x0000\x0000\x0000\x0000`L8W¶h¦2\x00048¶ åz°\x0017\x0007\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000æÞÇ\x0005¿ûÇ	\x0013&¼°ùüãjËæ¹?úÖ7Ç&|ó\x001fþ3´ìã{úgß6çÙg³í¼ðóç»þðÍ	ßü]é¥^l\x0000\x0000\x0000\x0000\x00004\x001cW\x000fÇþH*e5\x0015î¹R©âuùVì1Ý³Îm~Á9=\x0015.\x0000\x0000\x0000\x0000 ø®×
¥ì7þ×Â·¬­p5î}8OøË7\x0016Õé\x001eÕV¸\x0000\x0000\x0000\x0000\x0000\x00023Û\x0017||Ïªb½w¹6úNð­\x0007ïè\x001e×N¯{®£Û\x0016ù³o}CsùWüÃÁb|ðÌö¹ÿòM±ãó¿ÌÝ~Æ¡,ðÿüoN\x001fÞ|üæ~6ßøÖæ®mäú0\x0000\x0000\x0000\x0000À;&\x0015®XJuçó¡»ÔrÔtzíÏÿ½3âL×xÿeÿa2IÆæ3Á,fÌ2:«LÆYrc&ÉÕd11NL7Æ%\x0012
\x001a¢"î£¸a\x0010PD  *A@EA\x0010ÙAvÙ¡±AZ\x0018ÑF[_UuuUuUÓlÝÕíó;ÏñÐEuÕ[ï÷µç}øn\x000e)Ý¬zdAl£¹ZÍ7¾|J©ó;SÜ\\x0004ç«gEPnV\x00171pf(\x001c.\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000ë°àpÉ0ê+[2õ²çó~îGÌ«w¡¯;gãDÊeM¦»ËâVC¡ò\x00009_åÒ×gH\¬\x00123+B×wÉøÞ©\x001b/4vuwµ5¶
\x0007\x0001\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000Yd×Õvkc\x0017\x0013·9#¨Nî|s»-¿u¸ªÅ&Ëül|E\x001cn]Ð\x000c3K_H_v|Ëlz3g2KÙ8w\x0019\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000è\x000f¡Ãí¬*)oë¢í¨ÑáÌ¯Ü,e}ì<þTdfÎ1ßÓ^w'&vÆbön×¯^'ßKÔ\[Nÿ`èºàù¹¿\x0006\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000ä\x0010:\æ\x0015ß©Î\x0008ª=ÿóÏç=\y\x0016×¸¥¬Ã5\x0014yO\x0012Þ>l!M#þ®"\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000@\x000eÑ\x0018nQÄ2vcÕý®¯.\x000b5%,íp
­i{ß\x0018¯\x0016ZV²®VÖáRèó\x0003æ?Çì¾LÝË#\x000cúVÇ\x0019ïIÊ\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000ì\x0000=çøïÊÉDã>CW]ÔG\x000fàKs\x0001\x0000\x0000\x0000\x0000\x0000\x0000\x00008 f³%æ7\x0003\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x000e¡1ÑÃ8½Yí2þUãe`\x000c\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000|\x001at:{\x0000\x0000\x0000\x0000\x0000\x0000\x0014GPv¾½C\x0000\x0012 ]l\x0003òl\x001bF"ÏÙ9\x0008=þTp\x0014\x0004A\x0010\x0004A\x0010\x00041¢êCªJ´{\x0018Hh\x0017äÙÄäy$\x001cî8¿ÐÑ>Á\x0010\x0004A\x0010\x0004A\x0010Äè¿|C¨*Ñîa@"¡]gg\x0012g8\\x0008 \x0008 h¤
_B» ÏÎ$8\\x0008 \x0008 È6B¯L¡]gg\x0012\x001c.\x0004A\x0010\x0004A\x0010d\x001b¡ÂW¦Ð.È³3	\x000e\x0017 \x0008 \x0008²Pá+Sh\x0017äÙd£7½í®¡©­j?}<¼²ênß\x001bWþFölfëµÞ^muòH¥"$ïâ­Þêÿ)Î³º^*Ì[É#Ú.±A×{ûîv\x001e²\x000f \x0008 \x0008\x001a.
¸Â\x000fª¨¤Ä\x001e}Ù¦ãYço÷öÜÖ­ñµÓøFNö}ÈhâB:¼[-üJKêfJ[ýNë¯©»qûÎæ|ò³°\x000cÖÄWWÜîeJåâê\x0006þ¯ìÒ.Ïk¬¸u·§÷n{n_tÈ'üÜÕÞÞæ\x001c]ÛNy¦¤.¹ÐÑ}4~ï­[]\x0017S\x001cÂÝ­\x0015¿+:¦åpùÿ	?Ú£É§©E{÷çØ\x0011ËFHVêO\x0016LtFêmc½ú#û?*\x001c.\x0004A\x0010\x0004AN¨VøO\x0016Þèa«¯\x001b~AÜq;;Ü';¨Ê\x000b#9Û×Óº;!¶ñjßÀ\x001d.S\x0012·\x0015\x0005epdÀu®L¾u*]\!Ûº]¢ªk{ùûíÔd8Ü\x0011È3¥Øz­ Õ}7[l\x0001~WtL)ÅáÒ9\x001c{¦þ\x000f¡# h¨Ï5\x0002bþ\x0007»¾ß?x´o£¾ \x0008 \x0008l¯\x0001:ÜH?=Uâw%5t\x0019\x001dåðñÏ[Ä-\x000erÜ$>
§§Íøk£Ãí»jà÷·ÊÔËÛÖ9\n8XÖV$¢®××}öLÈÈ \x0003h\x0017&Îö²±#\x0013sk ýéü}7õUï?òCàKÐ\x0015#w¶Ý\x001dØßj\x0014 E9ÜÑ>©	Ôÿ7Ì8Ì¿n62ÓùÓ!Z®Ìdÿd\x001723¿­ÉÀNÛhj)N\x001dôMØwõæÍ»ôÿ5·;N;ÎicÜ]Ñ÷\x0017a\x0018ccÊxs\x0000¸wqók¿Óc|º«5Éâ[s!	Ã¦ÿÿdÎg~î
?\x0016uº\x0014yFúÈÏ1Éy\x0017nGëéùùB&s_æ¿2ö?Þmä\x000f^a\x0005\x0017~îu¸\x000e\x0006A\x0010\x0004A\x0010Äi`\x000e7¨¬¼.«èú7QñlQ¤.Éî2Ü!Gzovµ\x0019'Í
ª)^\x0016¶ ²£Ã44Æ\äøv¶Pü9;?1Ò5XTm#uÝ«y\x001a.ë\x001d}}\x001d\x0019ô}cÃ;¨\x0017­\x0017oò\x001cnHÖ)½D©¯o¼ËÑÛ¨ïìâJbS´KënÞá¥~+,5ùÏ~Cß¸"¾\x001d©®ï^ÌÙÒ|úUaÎ°¶\x000býø}½wªjrÿìo:Nreº\x0017¿\x0014U}\¬¿q®äó5½¥ãÐé"2\x0007»÷ÖM\ü|¿@~îÍËI
×ß¹c¬k	©\x000e`¼ V¿SQÅÜÔ¼ Wjÿ/Ì£
nÄNK6D[áÕü3él¼T~rÓ8±\¯]\x001f)þ\x0010eþÙm\x0002\x0016¶×
äÃb')Éá¼v|f{¯mó\x0011ZEÓd\x000fcé1zMzëMÞAú¿\x001aæï\x000c<z»Â©\x0011^]Ë?ØU+Ú¡In\x0011ÌæO51}NY(Ç*º5	©µðI~\x001dnoÇm\x0003}:\x0019§f~ÛÓËÀÎÀ1s¸}\x000efýÅí¥ví0\x0010\x0004A\x0010\x0004AÖ\x001c.3Evtid¨Ì+Î}s.\x001a5áÚ6³jW¡	:æ"LIÆ¿ÄÅtb%k°
·©\x0017I¼H®ÕFu\x0018Ë?zápmyÎ)Ã\x000fç9jºÞcÝÑ^*|[k¿+¨Í£
°ÃeÂÈá\x0006\x0015\x0017ö\x0008.ÜÓQMJ\ºº¾y\x00191
.\x000fS»|XÞÉ\x0006u÷Ö¬\x0018Á±àp{{ïrÀ\x000eÇÓoé½s×ô\x000bö\x0018æñù/aýÌ¿x¾!t\x001c½°Q{kËãGK\x0015äJíÿB\x0007ÊS?6¤·×)T3=Ít:í­p¸"\x000bF÷º\x0001}Xì%¥8\~ò\x0019æ¼ÏïuÝâ\x001bÐ\x000et[+ÉáÕú42MÂ?Lðð-¹l\x0016LmyìèôVzpX·9:rì÷'_\x000b\x0013Ïryö\mQ×[¦OÇÏ1',u3þ­ÇÆÔÑë\x0011èÏH?\x000ejyýþÈ°Ñ¼ßöÝl&k\&ÝùØÜáöõüÔ´ÄÆS\x0014 \x0008 \x0008U\x0003¥y÷b:y¹´ñ\x000eU®\x0017æ0µ\x0010¯*»t­«¦üÏ\x001e§½deq¤¼ÃåÞÎß1s\x0008\x00050;GIÕ`ô.RÝÚìKúR7\x001b×w1\x0017¤èR\x000e"ÙäpOÔkÉU®ï\x000f\x000b!b-dú2mÛÙ\x0015pû\x00018¦X\x0015;Ü`\x000b\x000f¢É¿.»¯+<ÜX]÷þ\x0014iå¬æ®\x001e\x001bStq |#ïpûn§£
à°\x0005õt®éÇdÞ¢oÎ\x001akZ«H¿Å<~sÿÅä­<äÃ:îâ!û®å¦£úe©\©ý_ÖáöcCún=C=Úñ}×î\x001amHÎE¥î	¿ñ\x0016\x001dó¤ùõ%\x001d.×ßLa\x000cèÃb7)Êáöôt×6KL÷eÚQ\x0008gnU\x0002ïjÌÿ!Bè=þq®ö\x00163\x0019¸¨À\x0003#À|Ò\x0002¿\x001bnÍûGèpéÿ\x0005\x000eù\x0011s¤­.U|\x0011)kÍ\x000c\x0013\x0008 \x0008 %k\x0000\x0015¾DyÖ×ÓVl\x001bÌ\x001b~m¯OcÞÅ+·Æ0¹¥£OÎá2ÓAð,\x0018¿\x0006Ód¶Q7h¬7\x001ea\x001d.3º±2¸rÓØ+Ï¯q\x000bWE\x0003dÆ¢}9\x0010ûVõÏfqÓ§
|§ A}
ë(ù\x0006Í\x0015»\x00036ßá
¾ü×Ò¦øTüæþëZÆ<9¦ÓÎÄüd\x001bÞ\x0010$¿ Whÿgm©¹%éÏÜjúPüY\x0008~öt\x0015»\x001eÌRff³\x000bÚþË5\x000ew\x0000\x001f\x0016;J)\x000e×ü3höù½ÙVÆÌö×|ÞÍ$7;?&M»éo>a#¢Éo#ÏÎ§Ð|EL§pÖø×¿ùþÔ	¹\x0019·%»ü\x0018î&­è'=×¶Ke§ÓÏ\x001d®ñ\x0008\x001c.\x0004A\x0010\x0004AN.ë+|M^8\x0003ý>\x000b¹1Ü´Dc¸ws³ÂFûF®n¦¿\x0012Càp»\x0013âíC\x00197d(,£MhÈoü
=àbVx]½+\\x001ait¸Ìíººj{Y²²c¸ûÚÈüØa\x0019ÃeÝ4jæ\x001fýÇÃô¸äH:Ü·.·](É|Ü\x001de\x0016 3¹j¼rFã\x0013öç²\x001eSÙl\x001cÃM£sö-=­£Mc¸ÙT¶Ù1\f­¢5\x000eý­Ãejõ^m]\x0006Óc\x000fÇN¦}ã8\¦³qíKuËs;2G÷kC$¦Æ½@?¾oäæ\x0016Òý´ÕgíróÄÑþqG¯÷Jgu¸t/\x001dØÅr\x0008;:¤¢Røç\x0002¦[6g ç$,m¼-8ÿ×3\x000eÑ2[ÁÈ/3¼\x001f+;\x0001Þ·¸\x0017*³F\x0000\x000e\x0017 \x0008 hô\x0000*üm¤âÒ;\x0018³\x0013­YË^Y(ð¦BñÙâ\x000e¡©Áaåë\x0015¼ï$å\x001c.³>·Ï¸î5Ùu¸ÆÍroh\x000f4H¯Ã
¶äp}3RE+ù$<àð¶ù2LvI²ðx/½\x0011`\x001d®ÙâPv\x001dn\x000f¿ræ­Ã\x001d¢Ã\x0015ï±clGÇq¸æ_Ìd|´\x0001o\x0007$Z{ÎÌü\x0017.ñf\x001aH"Ã¼÷ÒW¶öÃbW9Ã\x0015î\x0014wëVGL2³Ö´\x0017Ù$­,Ùì ¡éj1Ù69¶¼÷v³­C>¬þ\x0019¸¯«N}\x000cÓ÷ãpÉ¾XYÚÚÛÜ]¸í¹ÍÜnujW¤5µÁáB\x0010\x0004A\x0010\x0004Ñ²¶Âg\x000c\x0004\x001bÉÒßÂÃLT\x0016;\x0015$uÜ1ÛK9xt\x0008÷u\x0015?%Ë&ë\x0007¹/éÈi#ûú²Pû\x00159ÂÛLã¬_Jo@$ªÁè±\x0015Ñ\x0016\x001c.;\x0011ÝcïpÉàòá¶%¾³\x001faV-±Ï\x0003r¸>ü]ûî\x0018nfçÄ#ép«Èf÷®¡¥+É¸ÓÔh_vscª&/*>»ÿZp\x000c÷zBy\x0007³r]C\x0016o/å¾ËuÕ\x0015·³i/å¡:ÜÑü¯b¡;ÆN²°C9\\x0003ºs³¨	[ÆÈ:Üdÿ6öfø«55ñLæûîÜÖ\x0007Ä]Î°Ñ%Q9l¯|Ùê\x000f}e\x000bA\x0010\x0004A\x0010\x0004Ý\x001b\x001aÔzO±4aÕÕ}}ð@Ó°´dwLR'rü<Câ<ÃáB\x0010\x0004A\x0010\x0004A#­!Wø¼©¦
!»·\x0005ÁáÚ&Ï8Ïp¸\x0010\x0004A\x0010\x0004AÐHkÈ\x0015þc]Ì¼JóEg\x001dÛÅàpmgHg8\\x0008 \x0008 h¤
_B» ÏÎ$8\\x0008 \x0008 È6B¯L¡]gg\x0012\x001c.\x0004A\x0010\x0004A\x0010d\x001b¡ÂW¦Ð.È³3i\x001cnN7ì×\x0004\x0000\x0000\x0000\x0000\x0000NPv¾½C\x0000\x0012 ]l\x0003òl\x001bF"Ïkîf¾\x000c\x0000\x0000\x0000\x0000\x0000\x0000\x001aª>\x001c±\x00150DÐ.¶\x0001y¶
#gê·nÃá\x0002\x0000\x0000\x0000\x0000\x0000\x0013=wï¢ÂW h\x0017Û<Û\x0011Ê3\x001c.\x0000\x0000\x0000\x0000\x0000\x0010
_ ]l\x0003òl\x001bàp\x0001\x0000\x0000\x0000\x0000m@¯LÐ.¶\x0001y¶
p¸\x0000\x0000\x0000\x0000\x0000À6 ÂW&h\x0017Û<Û\x00068\\x0000\x0000\x0000\x0000\x0000`\x001bPá+\x0013´m@m\x0003\x001c.\x0000\x0000\x0000\x0000\x0000°
¨ð	ÚÅ6 Ï¶A)\x000e·ÔgJ¥\x0019Ú<ì¡(K^.ªé\x0001Õö\x000eÃùÐÇÎS«óÊÔÛ+\x0000C÷$Õ#ïET\x001aì\x0015M°{\x0001\x0000\x00008"¨ð	ÚÅ6 Ï¶A!\x000e\x0018\\x0017\x0017\x0017EYÜÜÍ®*×Í¹ÃzÍ\x00147ÑÖV\x0007LWÍÐ
ëå\x001d¦¨wî¿ÿ¨¦A_ :hËÿ\x0004v\x000f=\x0014^[
ÎóîãÇ»'¶*ÖÞ§rK\x0019êU-Ï\x0000\x0000\x0000î)Pá+\x0013´m@m2\x001cn÷DÕDï\x0000Ñ¨fg\x000bÿ5)Í\x0007W[÷NñýF\x0000kÒEÌ\x001aºÏp\x0008l×À
;ø\x001ei
#·\x0001;\\x0007m?\x0000\x0000\x0000\x0004\x0015¾2A»Ø\x0006äÙ6(Âá2\x0006·È¹ÆdqKü_qQ«X¦\x0007\:óå3÷\x001b_²õ¹¡5mË«®äèý®¯nIcFÍôù\x0001ócÞy¿ëÔ\x0017~Ò¿óÚ¯gÏyf~@¾Þü~ÕBchLô`n¥vy}G\x001fc\x0016&®>°Åø«W¶ÏÙ$QÒ¦~í±ïËßI¸&É\x0007¡ïÿÏmÆ§¡\x00025N{%Áð5>UyØ?§Ò\x0017¡ïØhñdË·|}Ò/g%°ï¾ÿ\x0019\x0014ã³u2Qd²ãx2¹0Ï«	³¶\x0012Ú/éÐeÓ"óLÒÑJ#ÛV\x0012¹èWr·ê7\x0002\x0013,å×\x001d©wLý¶P&DéSé\x0014óZ×i­cèy\x0006\x0000\x0000pï
_ ]l\x0003òl\x001bàpÉT\x0017¯KTéâ¦VMò)e\x0006ÑÄcOäµËâXmw_·6v±zVDs__]Ð\x000cja\x0002U^\x001bº\x001a\x000bs«:¥ÞÙ×p±±Ë@ÕêÇçî(ºé¥á×#ì­¨:þÀ\x000cµzF\x00107Ó:i[N+¹VÂbö9ø4Î4A)1.(ù ÌýU.ó"ké»î£îÄLj&WTÏ;N.H>°øôuÚc\x0018\x0012\x0013Ê¯ó·MR©\x0017ÄwÊlñôq&5*õ\x0003¥ÝÂg#Czªéû»\x000c®bêx]2^R:\x0017r¡RmÅk*ÐåÒ"óL2ÑJ"ßV¹\x0015÷+[õ\x001bÜ	rycº#ëåµÍò!J*ÛPVÆ1ô<\x0003\x0000\x0000¸A¯LÐ.¶\x0001y¶
p¸Á\x0015[\Ë\x000e\x000cüü$9wFP]_gü\x0002µêþ\x0017<\x0017jMH\x0016æeò%ëpy\x0011 \x0013\x0017«TS\x000fT\x001aßÍ½~5/¶}ÚÅÛJm/%ý ¬ã¢&¯&z\x0017Â1A¦ÃÒ'[º¥Úý¼ÄãÐ\x000fMÔ\x0019;÷Dä$æ\x001dò¹sjRmÅk\x000fçKLV
+ÚJ\x0018°_ÉÜªß\x0008dOË°;J ×sMwj(+ã\x0018z\x0001\x0000\x0000ÜË ÂW&h\x0017Û<Û\x0006»;\zj²\x00101UO¥\x0000æÜîZvb­zü\x0007ìtbÑ;
[f?ÇþÚÃø\x0005ó\x001eáÖA2hòRlZä\x001eDxWÓMEcÆ\x0001E}~è2v:*ï"Ò'[uKaèÜ¯!@\x0001ýäB~A«y[Éá\x001aS.-ÒÏ$\x0017­\x0014òm%[©G6¿U¿\x0011È 7ÉãÒ!J*×PVÆ1ô<\x0003\x0000\x0000¸A¯LÐ.¶\x0001y¶
öv¸µ·\x00042êÄ\x000cÊõãpÏ»«'J@y'÷çãÁR5ý¶ôÀá0áZt¸V\x000bÊ=ë3ÔÍ~6\x0011Ü*bfôÛe^dUAøV©­»¥Ã¥H4Rm~ºu\x000eßVu¸R¡Ë¦Eúä¢B®­ds+|d[õ\x001bì	ry#O*\x001a\x000bQâTÙ²2¡ç\x0019\x0000\x0000À½\x000c*|ev±
È³m°³Ã¥
® ^æ\x001d¡çC.N¤Mww7;rúJC¡»ÛÀ-1dúîëå%d!§®(½¬°í3t¥®ra\x001d®ðä²ªFÒ«\x0010s¶M76îÇ+ìé/32.ý\x0014¯ÃµèpÙµd}¢Ü:\é\x0007±àpI4ôòU\x001eô#NÜC"¬ç"\x0008]|²u·q¸}Í\x0011³ÔÜ_\x0008È
Ú²fË¹\x0010åCª­øW\x000c]6-2Ï$\x0013­$2m%[Q¹U¿\x0011È 7þâZCW\x0015yN¹\x0010%No(ëâ\x0018<\x0003\x0000\x0000¸A¯LÐ.¶\x0001y¶
öu¸ôÐh@\x0019¢Çô)\x001eì~¯ë3Èo*Þb6Ð}+¼®mÌîg«vyîË3:Ê5ü?vdþ¦ÇÂwê3·¼`Ü,8öô¶\¹/¼`/åÖ´½³;\x000c\x000b÷RîÇáv\x0004&»ÖFï)µ²ÄX°r×Ï,{\x000bJâ!»	\x001b*#>\x0018O?¢ë;>éç\x0019-äÉVÝRÎá23b;ìÞïúªI?¹\x0010µ£\x0011©¶â]E&tYã/óLÒÑV\x001eªR»¥6Ci+Ü÷HÉ[É\x001e6!÷>é¼û4¿ëÿÔY\x000cQ|ª¥²*ä\x0019\x0000\x0000\x0000\x0010
_ ]l\x0003òl\x001bì=K\x0019\x000cÎ3ßï²8û\x0013å·\x001d\x001aÐÉÊbdC'c.k2±Û/\x0000\x0000\x0000`[Pá+\x0013´m@m\x0003\x001c®A\x0016<²_\Dù>íEï\x0019jõ{ÇtÃp²²\x0018ÙÐ/y¹¾
\x0000\x0000\x0000\x0000¶\x0002\x0015¾2A»Ø\x0006äÙ6Àá:\x001aÊùS]sDÇ¿º,ºT¼Tu'+\x000b\x0007\x000e\x001d\x0000\x0000\x0000\x00002 ÂW&h\x0017Û<Û\x00068\\x0000\x0000\x0000\x0000\x0000`\x001bPá+\x0013´m@m\x0003\x001c.\x0000\x0000\x0000\x0000\x0000°
¨ð	ÚÅ6 Ï¶\x0001\x000e\x0017\x0000\x0000\x0000\x0000\x0000Ø\x0006ª>D¯@Ð.¶\x0001y¶
#çÆÿ\x000cûE\x0001\x0000\x0000\x0000\x0000SRSgï\x0010\x0004h\x0017Û<ÛÈ3å[ÛÛô\x0010\x0004A\x0010\x0004A\x0010Äèêµ\x001bTh÷0 Ð.È³3É3\x001c.\x0004A\x0010\x0004A\x00104ÒB¯L¡]gg\x0012\x001c.\x0004A\x0010\x0004A\x0010d\x001b9Yr¹òÐ«7Íó\x000bÉ©ª·{<\x0002Ûår]óÙÂ²F\x000bçÔ_½v¡¬útA©Ý£uÄ<¿¸q·5zÍÛ÷»Óç\x001auäìàp!\x0008 \x0008 ÛHQ\x0015þ\x0010r¹2¶\x000f/_ûÐâÕ|¹î\x001dÀÜ+
vÊ9ÚåReíÜ\x0003'­ÙúYPxêåJÉsjµm{ãS^Ø¸ë­>û\x0013ÏÛ=fËó%_[#¥\x001eÏ­Û¾éD\x0003\8\\x0008 \x0008 È6RT?\x0014Q\x0016ìhzö[{ü\x001fø|Õ/\x0016¹Sÿu#&×AGr\x0015Õ.\x00055\x001fì?ôØ
O*«¯\ÿiàÑâ
Ñ9ÕÍ­;bÏNõòþåÕ\x0005{qãn¿¤t»GîXy¦úí_o:p6-©¨\RÇ²ò_ÙâCF%ùÙuÛ=£NÕ·\³{ØÖç\x0019\x000e\x0017 \x0008 \x0008\x001ai)ªÂ\x001f´Î\x0014þË/dîþÃ_\x001cûëöïø&÷}ß`»çèí\x0012wù·ßle²JiüW\x001b\x0016P&÷²ÉäRövû/lØ5fÉ×Ì9®nk?>`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=\x001c¾j\x000bØð<nÌeÞë¸½ã:Ä?\x001e ÔÑ´£q!pÅÐ<Ç¨î</p><p>om7ð>ïÿÂ]\x0002<üm`\x0010\x000b\x001c¿1</p><p>\x00187\x00124ï¯¹iÞcsÕÖ}¾S°§²ç£\x0001s¸Äì(ýªä\x0000£É1U+</p><p>¿F\x0014¬Æ \x0019qHQ¿å¦Jä\x0010èõµÀÑH)QHsrW\x0018þ'd`i\x001a©ÉÕ¯:<\x0019M"NÎÎ5ä\x0000^ÇCä/\x0002½Òý¹O\x000f\x0000kô1²×Gã/·\x0019¦/AB6+´6ë·?\x0015{0¶Úb[B\x0007l`\x0016JÆ\x001eÏ}\x001fs\x000fØéÞ\x0004EöÐt+%ûH|ôf²¤_"\x001d^ó\x001fé¨1oÜo+\x0013x\x0017©\x0015\x0006ËWÚ<\x001f#OVDÚH.H\x000ctô¬c$Oð;BD\x0004>v"zö3òÔÓYmÁ®ÛË2¸`\x0001W¿ÃÕ[e­ \x001a-Â\x001d'áY#ø½t\x0012yt\x001c\x001c\x001d\x0000\x001eÛ\x00086x[
>\x001f2CÉ¤ÀIHÜ?=D7ÉJåÎSÎ­5Ó4!òÔ'üôä\x000e\x0010t'¶åEWÐ¾\x000e¹¾|Æß#N-Rû¿µæê\x0015`GÛp!²\x0015L\x0016,óê¾!ÕBu\x000fßc\x0012ñë\x0005²X\x0002hæ»XtZ&m{É\x0012ùÊ\x001bö÷¿o!§E|ÄÉÏttè@
¬(ÿz\x0014\x0007OâÔÉpóN\x0019Üäq\x0005\x001fÂÜ@ü ÛIkÁIåàK½e\x0017q¨l×\x000c¾Y½]o\x0016K
?Ý¿ì\x0008°k\x0014<D\x0007Â´ËfHÑ°@Z\6aÉ\x0012!7|\x001f)r\x001b39²ÚM4²5ZðôH@=|$^\x001aéñáPT!ZÌ(v¨\x0018·xÊâ¥Ö8ûÎ\x0003ÑùX\x001aÈ~ïh±Æx?GÉÞ\x0000Ö\x0006ê\x000eð\x0015ÉzÕSÝ àï\x0014ö0\x000eSÜÏI6ï9	\x001eËÄL\x0007=VnG#¾<^!j]\x0005ú®¦£mo\x000eÖY\x0003öß±m_ãÃ!×q3H\x0007#,N÷éþ¶°4Gì¾&\x0013/y\x0014ýCY{3£ô\x0011»¬ÌUn?íOD9+¾WÖõÌJÁS\x001eå XPc{Æ4I~{ÜU\x001c\x0007R;Íþ%UÙCË\x0001C \x0002¬{A»ÚÏ%Ò?2\x0018ë#èzq\x0008Ù2\x0010^ñ`jç³ÝòoQxçG\x0005kJk\x0016=_Pa\x0007Ù/:_Mìô¾§¡)&uípøöÓ&\x00021çÎuÒ\x0016\È=å\x0002Ò¸ê0\x0016"ß]ÀÓ%¾Ü\x000ct\x0016ÃæêïJ"ÔeÐ÷ôßù¡¢Øä\x001cIí\x0008åLâ¯\x000eL¤}Z]óS1ì\x0015r²'C\x0013u\x0013¥×çÕ	ã¯£\x0014³'[\x0008Ñ6ð§PÐX>:æ-ý\x0016Ç-=*o\x0002l¢è\x0015À+!#QÂÛ-÷þ\x0004²=G^\x0007w¨ÞÂ[\x0017§!Æn@jÊ]gÄÆI4ò¼ÙÑ\x0000»­\x0014Jÿ@L!õ3ãÈïî-µæQ\x0013å?ÍU0\x001cA Â¢(¯A)ø)wÜ\x0001\x001fåü6ùP\x000e°÷V\x001d´Øä©\x000côÔ ¨\x0003@<76|àNìæ»ýÉ2íÏ¾G\x001bÃ¯øÀ±{):n\x000e\x0010éô¹aãk®éu¿=·ÛSgÓuA¶sOrücª`ÿçÇú/\x0003Ï'Ë,\x0012j¾P\x0007¶Ï¯Æãk \x001c÷[·?Î,µ\x001b76P-µÛ$î\x0001=Ôàæ³\x0016\x001d?«1ßDdVWýy«uDµ\x001d}r9l§uÝá¬îo&®Ê#yùè¦æªªÉ\x0016³öYò \x001c\x0011e8\x0015´b\x001eà@ÆÂ;¶µLYÅÖö,\x0018§7k¨9©}½×|9øm\x0014qèy-%ÓÊ	)ÿÈ©÷Qì</p><p>ÈâºF\x0000¥1\x001dÿ5\x0019?vux</p><p>©\x000eþ¢\x0011\x0003ÃAw#îñ¤¤åñ´°¶µ½Fkà½Ó\x0013ñáõ("Ý2kur³#%\x0005íàU\x0015	¢ãcÐq</p><p>#!KÁ\x0004,>E\x0005Ï³Wòó\x001bl¸ºîùrvÍyÆÝgqaS!\x0010Là«]0ÂoX$ºa¹7im¹ZmX\x0013Êt²|Dg¾&ÄG®¤P8d­{1ÆäbXÃÜ£}\x0005W=Îí¹¾</p><p>ä¦°\x0016Í\x001f!\x0013×? 6³C\x0002\x001cVn{Ï/ì·Ñqoõ¡\x0012®6×\x0013\x000bÊZ°Þ{v[}x\x0008D#ú.½´\x0016y6xpµ°²ØíÖÃçýT0êf:Çëæí~ÊWl4\x0010VÖMÍ?WÁÑÚ\x000bÒG/ó\x001eïÕj4o¢SÀkrG©z; tRF\x001et¸+ã×4$èN¬ÊmÍæK!­ná</p><p>Äær\x0001\x0006\z\Ø+¥Aú±¶ÉhÕ,\x000bsþ_KÖÙÎ­Äß?YKLÚ/ü\x0001Õ¹Þ¦ÍdÕÇV©2_;iL\x0016ïøª¢Wåæ6Ù\x0019®Ê½E«°¿¨YhÙåÌ;ñ}#j GÊ÷«cepµz÷!»Ãê
\x0016zú	*»Ý\x0001rÃ\x0003G!\x0003bãH\x0010æo¬²1¡PGq&íºR§dé¶¹¹©2Ã\x0000-½DxG-é3D²Óâ¯\x0002ßqCÉ¨j?·Ð(é+¡Å\x0013\x001eý\x0004\x0015$ñ×Î.ÀsY\x001f\x0008ÿÉ\x0004à\x0017Å(^ªå´ÜïMåYÛI\x001dcæÇFÿ8J·h-\x001b\x000eæÉv\x0001\x0005ëzoon;£_\x0011ËRã²Hö¾i\x000etÍupí«§C±Ëýô½\x0006cþÎCÜÃ­¹T-©KKp%ka\x0017ûýåbeÕQæi4|ÓÖ|
ÅeÖúc¥Ðue\x001cm0kçbï¯góã\x001aÄd-¸ò\x0001o0\x001d\x001e\x0005wDWm½\x0017öaÏ"\x0019[$5\x0012\x0016Û\´Ê§÷¾1Éº\x0015e\x000f\á öýÞ¨#Ûx¯\x000e\x001f\x0016©è\x0013sI'h\x001epQ
\x0018J\x000e¥AÆ-0>B/¼\x0018mØo\x0016íuî²Úv\x0005øwx\x0007\x001a,\x00009\x0011#l??ù¹\x0010ûk</p><p>i/òþp\x001bI®¡S4ÂdS¡\x000fÆ"î\x00197\x0018Å#Ýä=qa:\x001c¡OÉ\x000ba%MQ7n\x0018\x000f*áø`\x000bcd@²>ªØ]"\x0012DÂ­ÃÔE¹Ôå#	A{40Wu\x0008þì1]\x0012W*ºÕ\x0016"ÚÚY~ùÞ¶¤8\x001f1MVõjÄA¿ýuóiüôJQé\x000eµ
!,~¥&Ds/·Ì \x0016kz¡\x001faV+X\x0004Ër`:
9?¯~,lÁz÷¾×Ösñ'\x0000±ÒÃáIþ$É¦DÑ;e`nÖ$\x0006Ðûøê£^Nh\ÊV\x0012ßÂ"6þ<(wLþ
÷ÂaáB2;\x0012k5?ó×\x0014\x0001ÓÍ}ù©-L^¹>\x001ff+É§%Þ\x0011þØl\x0012¯Ý\x001eä`l\x0006]þ\x0019\x001a¹czÒÜ\x0017øä\x0008\x001fd1ùÒ(¦¤ï\x0001-JlÃ\x000c;á&>Ö´addC.\x000fr\x000cÆðÔ\x000cloÏÏú_&r$¨}</p><p>\x0013\x0014!íJa9±\x001fúÂe)\x0008Â7cÌûvK
\x0001®\x001fó<JCí¼À\x0018¹	,x!U»g6LK/Z</p><p>u\x0012XÜûj'_..ì\E_³\x00020ôWnaÁÇýïÄaæ¨\x000bfð©Âö|÷\x001d	/=\x001fC\x001fÈß(jÜø¬a¬BÔ±jöTÞådhz½h²F\x0006ÑsjIîä\x000bQ\x0019*v]±·bawå\x0010í§ì\x000f]!\x000c\x0016ü\x000fJã\x000fb¦qß
*ÂÙEÅ	ÄBRVv3Ø</p><p>]R§8óÆ©³¿Ù\x0017\x0019ÊP\x0019\x0017ª}®ý³\x0008)®ÿ\x00134\x000f\x0008ÃçíZnsáÔ{aâÌû×]LoÔ7Ê\x0010^Ï ÓPv_âì£÷ë_½;¡\x0014 *\x000ee\x001dj¤-\x000bÀ*e×\x001e`ºWJuç9v'iò:Õ­\x0011³kqî\x000e=^\x001bß\x0006¶[0Z\x0006»¥4R\x0006Öu\x000eÓ ¦\x0004!\x001b¾ÁWg\x0002Ù OèDj:#½T¡µÎñ@'\x001c<\x0006R\x0004\x001exÇ^üw T2"\x0007*3;ú0ê\x0006ý	ÚÕóD\x001f¿4éq\x001d Á¨\x001608\x000b\x0018ßÝM\x0014K«\x000bg;\x0013\x0014~«ÐØñ6TRÆçïá\x0014\x001eAþ\x0011+~³<þç©"bv8^øæß	)
7:|ü\x0010ìP)©\x0017Áè\x00026\x0018Ó"X`#Cø¾p6F@;ZKß\x001fÂG|Åo?\x0005ùVpM·\x001fY?S\x0006¿O\x000e
aö«5y\x0017ö%iRç\x001bµp\x0005®àf÷nW¨wÑm\x0014\x0011\x0000L¤\x0006Êµ\x0014Ã%l%²v:ÝÌ¹h\x001a\x000bN\x0011+ê§â,Ý7¤~ô:@±ýE´rjü×sXn0F]R`Â\x000fi¡År ¾iÿ¶7\x001d2ékÒâ>32²
Èi@ý¤\x0001GjM\x0008PMÓ[³YE\x001e£ó?=ÖçÌBDÄë%GðÂ¶hÇ>h­ÖBÙUðs\x0002ñÏ*ºIÑ\x0011è6\x0000pÑÍq\x001fÙ)·päoâñë/÷bÍã|÷Ò#©ÎºéM\x0014º.p{O¥X- ï©*E?\x0002
VúY¿³\x000bs«ZãY[|\x001c8O[\x0011\x0012'(þ!\x0016º,ÐÚÓ\x001d³¬ÈqÚ¥'G7Ô]\x0000|q1òWÐó\x0005±ÞËï&Â\x0005½Â\x001f\x0007\x0007÷ßð\x001fî$B¶¤Äÿ\x001b\x0002ßÿ\x000f°U\x001eÍ$apÏ\x0017ÏÄå­Eì\x0018\x0013Ë\x0019÷\x001b'\x0017Öß'®É·!.¦\x0014æK5DÍ\x0006¡\x001eê#	Ì¶\x0000bÑ¦*a\x0016î¥¿·\x0007¾|\x0005\x0017¹þs=y}tm?ýÝwß¸\x000emô.?lª>\x001fó¬­³1âÔ¾z7\x0000µ@­\x0014¢\x0001+~x\x0014¦ú!ík\x0010ìïRÇñK|×g^º\x0018¯\x0010{Áö.¤D¿we\x0011ûlðU ß\x001b`SA³\x0006\x0005ýèD«9\x0008Ôr\x0015*ÁfuÔìm;ù5\x000e;ÿË\ÀD\x000c\x0015Ü*Á\sPGÞIÃö}ò²M³!Î\x0000»µÃ4W\x001eêª×\x0011w¤ÉxBÓôú]ãc§\x001f": *Þç?è¤ÈýÈt3pí?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v3.2.1`
  
  
  
  
Instances: 1
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2020-11023</p><p>CVE-2020-11022</p><p>CVE-2019-11358</p><p></p>
  
### Reference
* https://blog.jquery.com/2019/04/10/jquery-3-4-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2019-11358
* https://github.com/jquery/jquery/commit/753d591aea698e57d6db58c9f722cd0808619b1b
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="menuBuilder" class="menuBuilder">`
  
  
  
  
* URL: [https://direccte.gouv.fr/squelettes/](https://direccte.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="formrecherche" id="formrecherche" method="post" action="spip.php?page=recherche">`
  
  
  
  
* URL: [https://direccte.gouv.fr/squelettes/](https://direccte.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action='/squelettes/#' method='post' name='formrecherche' id='formrecherche'>`
  
  
  
  
* URL: [https://direccte.gouv.fr](https://direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="menuBuilder" class="menuBuilder">`
  
  
  
  
* URL: [https://direccte.gouv.fr/local/cache-css/](https://direccte.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action='/local/cache-css/#' method='post' name='formrecherche' id='formrecherche'>`
  
  
  
  
* URL: [https://direccte.gouv.fr/missions](https://direccte.gouv.fr/missions)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action='/missions' method='post' name='formrecherche' id='formrecherche'>`
  
  
  
  
* URL: [https://direccte.gouv.fr/?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr](https://direccte.gouv.fr/?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="menuBuilder" class="menuBuilder">`
  
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="menuBuilder" class="menuBuilder">`
  
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action='/Organisation' method='post' name='formrecherche' id='formrecherche'>`
  
  
  
  
* URL: [https://direccte.gouv.fr/local/cache-css/](https://direccte.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="formrecherche" id="formrecherche" method="post" action="spip.php?page=recherche">`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form name="menuBuilder" class="menuBuilder">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: ].</p>
  
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
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://direccte.gouv.fr/Actualites,10](https://direccte.gouv.fr/Actualites,10)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://direccte.gouv.fr/Le-bon-usage-de-mon-equipement-de](https://direccte.gouv.fr/Le-bon-usage-de-mon-equipement-de)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://direccte.gouv.fr/missions](https://direccte.gouv.fr/missions)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://direccte.gouv.fr/squelettes/](https://direccte.gouv.fr/squelettes/)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://direccte.gouv.fr/Spip-invisible](https://direccte.gouv.fr/Spip-invisible)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://direccte.gouv.fr/Communiques-de-presse,13](https://direccte.gouv.fr/Communiques-de-presse,13)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://direccte.gouv.fr/ecrire/](https://direccte.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/local/cache-css/](https://direccte.gouv.fr/local/cache-css/)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://direccte.gouv.fr/Colonne-article](https://direccte.gouv.fr/Colonne-article)
  
  
  * Method: `POST`
  
  
  
  
Instances: 10
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 69 [https://direccte.gouv.fr/spip.php?page=recherche&recherche=Rechercher].</p><p>Predicted response size: 369.</p><p>Response Body Length: 440.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-direccte.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-direccte.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://direccte.gouv.fr](https://direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-direccte.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-direccte.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://direccte.gouv.fr/robots.txt](https://direccte.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-direccte.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-direccte.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-18d40882.js?1615977916](https://direccte.gouv.fr/sites/direccte.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-18d40882.js?1615977916)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js](https://direccte.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1615890997](https://direccte.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615890997](https://direccte.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/local/cache-js/jsdyn-jquery_cookiebar_js-d988a75a.js?1608309080](https://direccte.gouv.fr/sites/direccte.gouv.fr/local/cache-js/jsdyn-jquery_cookiebar_js-d988a75a.js?1608309080)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/ajaxCallback.js?1615890997](https://direccte.gouv.fr/prive/javascript/ajaxCallback.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/ajaxCallback.js?1615890997](https://direccte.gouv.fr/prive/javascript/ajaxCallback.js?1615890997)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.autosave.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.autosave.js?1615890997)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/missions](https://direccte.gouv.fr/missions)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr](https://direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615890997)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/js.cookie.js?1615890997](https://direccte.gouv.fr/prive/javascript/js.cookie.js?1615890997)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.placeholder-label.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.placeholder-label.js?1615890997)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique)
  
  
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
  
  
  
* URL: [https://direccte.gouv.fr/robots.txt](https://direccte.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://direccte.gouv.fr/squelettes-dist/css/form.css](https://direccte.gouv.fr/squelettes-dist/css/form.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://direccte.gouv.fr](https://direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://direccte.gouv.fr/squelettes-dist/css/typo.css](https://direccte.gouv.fr/squelettes-dist/css/typo.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://direccte.gouv.fr/missions](https://direccte.gouv.fr/missions)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://direccte.gouv.fr/sitemap.xml](https://direccte.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://direccte.gouv.fr/squelettes-dist/css/font.css](https://direccte.gouv.fr/squelettes-dist/css/font.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://direccte.gouv.fr/squelettes-dist/css/reset.css](https://direccte.gouv.fr/squelettes-dist/css/reset.css)
  
  
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

  
  
  
  
### Secure Pages Include Mixed Content
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes mixed content, that is content accessed via HTTP instead of HTTPS.</p>
  
  
  
* URL: [https://direccte.gouv.fr/local/cache-css/](https://direccte.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=`
  
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=`
  
  
  
  
* URL: [https://direccte.gouv.fr/?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr](https://direccte.gouv.fr/?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=`
  
  
  
  
* URL: [https://direccte.gouv.fr](https://direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=`
  
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=`
  
  
  
  
* URL: [https://direccte.gouv.fr/National](https://direccte.gouv.fr/National)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=`
  
  
  
  
* URL: [https://direccte.gouv.fr/Spip-invisible](https://direccte.gouv.fr/Spip-invisible)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=`
  
  
  
  
* URL: [https://direccte.gouv.fr/Actualites,10](https://direccte.gouv.fr/Actualites,10)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=`
  
  
  
  
* URL: [https://direccte.gouv.fr/missions](https://direccte.gouv.fr/missions)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=`
  
  
  
  
* URL: [https://direccte.gouv.fr/squelettes/](https://direccte.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=`
  
  
  
  
Instances: 11
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=img src=http://logc279.xiti.com/hit.xiti?s=542961&s2=&&p=&&di=&an=&ac=</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://direccte.gouv.fr/local/](https://direccte.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins-dist/](https://direccte.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/spip.php?page=abonnez-vous](https://direccte.gouv.fr/spip.php?page=abonnez-vous)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/squelettes-dist/](https://direccte.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/](https://direccte.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/lib/](https://direccte.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/jpg/aveugle-3.jpg](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/jpg/aveugle-3.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/http:/www.simulateurap.emploi.gouv.fr/](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/http:/www.simulateurap.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/http:/www.economie.gouv.fr/files/mediateur_credit_371.jpg](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/http:/www.economie.gouv.fr/files/mediateur_credit_371.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins/](https://direccte.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/http:/www.emploi.gouv.fr/](https://direccte.gouv.fr/sites/direccte.gouv.fr/IMG/http:/www.emploi.gouv.fr/)
  
  
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

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://direccte.gouv.fr](https://direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/Donnees-personnelles-et-cookies-17379`
  
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/Donnees-personnelles-et-cookies-17379`
  
  
  
  
* URL: [https://direccte.gouv.fr/robots.txt](https://direccte.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/IMG/docx/110704_DIRECCTE_guide_formation_BO-2`
  
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/Donnees-personnelles-et-cookies-17379`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js](https://direccte.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `iVBORw0KGgoAAAANSUhEUgAAAHcAAAAeCAYAAAAWwoEYAAADl0lEQVRoge1Y0W3bQAx9CjKARlC+9GVUmqDJBHEmiDyB6wkcTxBngtgTxJ0gzgQW4C/9aYOmE6g4lTQo+k6y3Rb94QOERNQd+cjj8XiGwWAwGAwGg8FgMBgMBoPB8F8RNRXe+whEKe7c36ZCAeCRxC9Rig2PUd8kPgAsoxSfQ3YAzAA8D/HwYYCb05kBKKO0teFkmbC1jlKsAnq/Abjn+QBqAIsoRS30ttwG/HNz1wH/XIxWTicLdvtW7xTAGEAMtP685CNsBTe2d/BLydfXAG57SEnMAST0zgYZSUCPk02bCvkJduIzuJzDLfPolbY+tLKmar+/8+IRePy4qdpE03qHuH8fipFb4N2+XdA3AJ/0vaQxt7s9FvkIS2XvtqnwM0rxpOQfbnE5G2LhTCmUO2fHIngOmcv+KG3HafDchB6ntwjYqenR2PqC7sOZ3E7FXHB0vqxoFyUyLh7OEH7LOGouvhhN3eIBeKXv0n5MsufdHqXcwYR5U2EbpV35lSspVPJmQj4TcgRK7jTg5IzmPUhhwM5a2WHUFCx+NgiDucmgh7idikLovHFlL0pxQ9xzX+IIP9Y6FrJsqhjlQpZRAkFVDCjZfcCHt6bqJDmuh5ylCWx0RVnk3oumaknqTH5sqrY0fBWyULaHUIgAgxb46MxV3DbieAhxOxUxjSuljig9lMQ/Bcfoi9BTEv9aLORSndVxYOH525sUDC6u2gWxcNzBNRxPanyh3ktKinOgy3WoxPbtUM0t6RkbQnzBnFPgi9GCOEubY9UffIryz9iKRe8s/FUfEWosJJGxagp85bpUO3VywQ46lOtAWfNxKwa4JXQ+628+bpxYGXXMzp5rXH401VEyXwIdowXFaKWSMFHvMTVmGnc+P3oXV2QOiBCfgex8QtcQCbcQE/H+eoHzrkFo1KM7zVO4jVVj5s6lRiWF7zyXyfRMc97J3tzj87mYqZ7E2YjzUct9GUi4tjHLR8dVkBLjQcuHFleWvQfRNEhFR7uX7pkctOwvZXsft7sAtyldEUIN2UTeLxnEfxKYswzdi88BdbZ8hifUoSMftQvP+muRwN6+Q3DeqqRExP9QmTtcheiHh0Ot1x2i2km1bP9pbufw5zZdyWsOrh7vQae5OZWbsMv30pi7cd/CKj3coPEVaCP4Zhx4eQWhOZ1Y9MTXGyP8/iGjEyfa1T4fO/4Lea9vBoPBYDAYDAaDwWAwGAwGwz8GgF8siXCCbrSRhgAAAABJRU5ErkJggg==`
  
  
  
  
* URL: [https://direccte.gouv.fr/sitemap.xml](https://direccte.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/Grande-conference-sociale-pour-l-emploi-une-nouvelle-feuille-de-route-pour-2013`
  
  
  
  
* URL: [https://direccte.gouv.fr/spip.php?page=backend](https://direccte.gouv.fr/spip.php?page=backend)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/local/cache-vignettes/L144xH33/siteon0-678c1`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins/videos/lib/html5media-1.1.8/api/html5media.min.js?1615890997](https://direccte.gouv.fr/plugins/videos/lib/html5media-1.1.8/api/html5media.min.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `D27CDB6E-AE6D-11cf-96B8-444553540000`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/Donnees-personnelles-et-cookies-17379`
  
  
  
  
* URL: [https://direccte.gouv.fr/missions](https://direccte.gouv.fr/missions)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/Donnees-personnelles-et-cookies-17379`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/2011/REC-css3-selectors-20110929/`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>~�ây�zϩz�(�w���>zߜ��"zϵ�~�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://direccte.gouv.fr](https://direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://direccte.gouv.fr/missions](https://direccte.gouv.fr/missions)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.form.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
Instances: 14
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bWHERE\b and was detected in the element starting with: "	// an expected string. This accounts for the case where a form", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
<img width="1" height="1" src="http://logc279.xiti.com/hit.xiti?s=542961&s2=&amp&p=&amp&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins/ancresdouces/js/jquery.scrollto.js](https://direccte.gouv.fr/plugins/ancresdouces/js/jquery.scrollto.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/missions](https://direccte.gouv.fr/missions)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
<img width="1" height="1" src="http://logc279.xiti.com/hit.xiti?s=542961&s2=&amp&p=&amp&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615890997](https://direccte.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a/>`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins/ancresdouces/js/jquery.localscroll.js](https://direccte.gouv.fr/plugins/ancresdouces/js/jquery.localscroll.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>gmail<d>com | https://github.com/flesler
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jquerylocalscroll-10.html
 * @author Ariel Flesler
 * @version 2.0.0
 */
;(function(plugin) {
	// AMD Support
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], plugin);
	} else {
		plugin(jQuery);
	}
}(function($) {
	var URI = location.href.replace(/#.*/, ''); // local url without hash

	var $localScroll = $.localScroll = function(settings) {
		$('body').localScroll(settings);
	};

	// Many of these defaults, belong to jQuery.ScrollTo, check it's demo for an example of each option.
	// @see http://demos.flesler.com/jquery/scrollTo/
	// The defaults are public and can be overriden.
	$localScroll.defaults = {
		duration: 1000, // How long to animate.
		axis: 'y', // Which of top and left should be modified.
		event: 'click', // On which event to react.
		stop: true, // Avoid queuing animations
		target: window, // What to scroll (selector or element). The whole window by default.
		autoscroll: true // If true, applies the scrolling at initial page load.
		/*
		lock: false, // ignore events if already animating
		lazy: false, // if true, links can be added later, and will still work.
		filter: null, // filter some anchors out of the matched elements.
		hash: false, // if true, the hash of the selected link, will appear on the address bar.
		onBefore: null // called before scrolling, "this" contains the settings and gets 3 arguments
		*/
	};

	$.fn.localScroll = function(settings) {
		settings = $.extend({}, $localScroll.defaults, settings);

		if (settings.autoscroll && settings.hash && location.hash) {
			if (settings.target) window.scrollTo(0, 0);
			scroll(0, location, settings);
		}

		return settings.lazy ?
			// use event delegation, more links can be added later.
			this.on(settings.event, 'a,area', function(e) {
				if (filter.call(this)) {
					scroll(e, this, settings);
				}
			}) :
			// bind concretely, to each matching link
			this.find('a,area')
				.filter(filter).bind(settings.event, function(e) {
					scroll(e, this, settings);
				}).end()
			.end();

		function filter() {// is this a link that points to an anchor and passes a possible filter ? href is checked to avoid a bug in FF.
			return !!this.href && !!this.hash && this.href.replace(this.hash,'') === URI && (!settings.filter || $(this).is(settings.filter));
		}
	};

	// Not needed anymore, kept for backwards compatibility
	$localScroll.hash = function() {};

	function scroll(e, link, settings) {
		var id = link.hash.slice(1),
			elem = document.getElementById(id) || document.getElementsByName(id)[0];

		if (!elem) return;

		if (e) e.preventDefault();

		var $target = $(settings.target);

		if (settings.lock && $target.is(':animated') ||
			settings.onBefore && settings.onBefore(e, elem, $target) === false)
			return;

		if (settings.stop) {
			$target.stop(true); // remove all its animations
		}

		if (settings.hash) {
			var attr = elem.id === id ? 'id' : 'name',
				$a = $('`
  
  
  
  
* URL: [https://direccte.gouv.fr/prive/javascript/jquery.js?1615890997](https://direccte.gouv.fr/prive/javascript/jquery.js?1615890997)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id='" + expando + "'></a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/sites/direccte.gouv.fr/local/cache-js/jsdyn-jquery_cookiebar_js-d988a75a.js?1608309080](https://direccte.gouv.fr/sites/direccte.gouv.fr/local/cache-js/jsdyn-jquery_cookiebar_js-d988a75a.js?1608309080)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" class="cb-enable">'+options.acceptText+'</a>`
  
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
<img width="1" height="1" src="http://logc279.xiti.com/hit.xiti?s=542961&s2=&amp&p=&amp&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://direccte.gouv.fr](https://direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
<img width="1" height="1" src="http://logc279.xiti.com/hit.xiti?s=542961&s2=&amp&p=&amp&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
<img width="1" height="1" src="http://logc279.xiti.com/hit.xiti?s=542961&s2=&amp&p=&amp&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins/boutonstexte/javascript/boutonstexte.js](https://direccte.gouv.fr/plugins/boutonstexte/javascript/boutonstexte.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="textsizeup auto"><img src="'+boutonstexte.imgPath+'fontsizeup.png" alt="' + boutonstexte.txtSizeUp +'" /></a>`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [http://direccte.gouv.fr/Mentions-legales](http://direccte.gouv.fr/Mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://direccte.gouv.fr/robots.txt](https://direccte.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/plugins/direccte/squelettes/favicon.ico](https://direccte.gouv.fr/plugins/direccte/squelettes/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/sitemap.xml](https://direccte.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/squelettes-dist/css/reset.css](https://direccte.gouv.fr/squelettes-dist/css/reset.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr](https://direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/squelettes-dist/css/font.css](https://direccte.gouv.fr/squelettes-dist/css/font.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/missions](https://direccte.gouv.fr/missions)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://direccte.gouv.fr/Organisation](https://direccte.gouv.fr/Organisation)
  
  
  * Method: `GET`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1591976372`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `950097930`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1608309080`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615890997`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615977916`
  
  
  
  
* URL: [https://direccte.gouv.fr/](https://direccte.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615977546`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1591976372, which evaluates to: 2020-06-12 15:39:32</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://direccte.gouv.fr/spip.php?id_article=17373&page=envoyer-ami](https://direccte.gouv.fr/spip.php?id_article=17373&page=envoyer-ami)
  
  
  * Method: `GET`
  
  
  * Parameter: `id_article`
  
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Llist_1`
  
  
  
  
* URL: [https://direccte.gouv.fr/?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr](https://direccte.gouv.fr/?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Llist_1`
  
  
  
  
* URL: [https://direccte.gouv.fr/spip.php?id_article=17373&page=envoyer-ami](https://direccte.gouv.fr/spip.php?id_article=17373&page=envoyer-ami)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://direccte.gouv.fr/Organisation?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr](https://direccte.gouv.fr/Organisation?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Llist_1`
  
  
  
  
* URL: [https://direccte.gouv.fr/?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr](https://direccte.gouv.fr/?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Llist_1`
  
  
  
  
* URL: [https://direccte.gouv.fr/Organisation?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr](https://direccte.gouv.fr/Organisation?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Llist_1`
  
  
  
  
* URL: [https://direccte.gouv.fr/spip.php?id_article=12&page=envoyer-ami](https://direccte.gouv.fr/spip.php?id_article=12&page=envoyer-ami)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://direccte.gouv.fr/spip.php?id_article=3&page=envoyer-ami](https://direccte.gouv.fr/spip.php?id_article=3&page=envoyer-ami)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr](https://direccte.gouv.fr/La-Direccte-votre-interlocuteur-unique?Llist_1=http%3A%2F%2Fwww.auvergne-rhone-alpes.direccte.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Llist_1`
  
  
  
  
* URL: [https://direccte.gouv.fr/spip.php?id_article=12&page=envoyer-ami](https://direccte.gouv.fr/spip.php?id_article=12&page=envoyer-ami)
  
  
  * Method: `GET`
  
  
  * Parameter: `id_article`
  
  
  
  
Instances: 11
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://direccte.gouv.fr/spip.php?id_article=17373&page=envoyer-ami</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>id_article=17373</p><p></p><p>The user-controlled value was:</p><p>17373</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
