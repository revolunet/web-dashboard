
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:56:12


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 2 |
| Medium | 5 |
| Low | 8 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Hash Disclosure - Mac OSX salted SHA-1 | High | 1 | 
| PII Disclosure | High | 8 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Source Code Disclosure - Perl | Medium | 8 | 
| Source Code Disclosure - PHP | Medium | 4 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 4 | 
| Cookie Without SameSite Attribute | Low | 9 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 12 | 
| Dangerous JS Functions | Low | 8 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 7 | 
| Base64 Disclosure | Informational | 11 | 
| Cookie Poisoning | Informational | 6 | 
| Information Disclosure - Suspicious Comments | Informational | 19 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 7 | 
| Storable and Cacheable Content | Informational | 4 | 
| Timestamp Disclosure - Unix | Informational | 5 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 11 | 

## Alert Detail


  
  
  
  
### Hash Disclosure - Mac OSX salted SHA-1
##### High (Medium)
  
  
  
  
#### Description
<p>A hash was disclosed by the web server. - Mac OSX salted SHA-1</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/A3_Noyade_chaleur_corrigee.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/A3_Noyade_chaleur_corrigee.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `A884AF84A884AF84A884AF84A884AF84A884AFA8FD2CFFFF`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that hashes that are used to protect credentials or other resources are not leaked by the web server or database. There is typically no requirement for password hashes to be accessible to the web browser.      </p>
  
### Other information
<p>A884AF84A884AF84A884AF84A884AF84A884AFA8FD2CFFFF</p>
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/A3_Noyade_chaleur_corrigee.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/A3_Noyade_chaleur_corrigee.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `5252522752525227`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4-3.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4-3.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `505526462526515312`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `505526462526515312`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4-3-2.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4-3-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `505526462526515312`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Se_baigner_en_toute_securite_.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Se_baigner_en_toute_securite_.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `505526462526515312`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Guide-loisirs-nautiques-en-MER_2018.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Guide-loisirs-nautiques-en-MER_2018.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `501469682698262`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/CPPREVENTIONDESNOYADES11JUIN_2019_004_.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/CPPREVENTIONDESNOYADES11JUIN_2019_004_.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503503503503`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4-2.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `505526462526515312`
  
  
  
  
Instances: 8
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Mastercard</p><p>Bank Identification Number: 525252</p><p>Brand: MASTERCARD</p><p>Category: </p><p>Issuer: CREDIT SAISON CO., LTD.</p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/](https://preventionete.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Menu-BAS-](https://preventionete.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins/](https://preventionete.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/local/](https://preventionete.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes/](https://preventionete.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Infos-Pratiques-](https://preventionete.sports.gouv.fr/-Infos-Pratiques-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes-dist/](https://preventionete.sports.gouv.fr/squelettes-dist/)
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Baignade](https://preventionete.sports.gouv.fr/Baignade)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Baignade" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Meteo](https://preventionete.sports.gouv.fr/Meteo)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.meteofrance.com/previsions-meteo-montagne" target="_blank">prévisions montagne</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Memento-prevention](https://preventionete.sports.gouv.fr/Memento-prevention)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.preventionete.sports.gouv.fr/IMG/pdf/PreventionEte2018_100x145_FR_BD5-2.pdf" target="_blank">mémento basse définition</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Outils-de-communication](https://preventionete.sports.gouv.fr/Outils-de-communication)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.preventionete.sports.gouv.fr/IMG/pdf/PreventionEte2018_100x145_FR_BD5-2.pdf" target="_blank">Version française en basse définition</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Equipement-](https://preventionete.sports.gouv.fr/-Equipement-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.preventionete.sports.gouv.fr/IMG/pdf/secours-2009-GB-1.pdf" target="_blank">Les secours lors de la pratique du vol libre (en anglais)</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Kiteboard](https://preventionete.sports.gouv.fr/Kiteboard)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Kiteboard" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Balisages](https://preventionete.sports.gouv.fr/Balisages)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Balisages" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Cyclisme,36](https://preventionete.sports.gouv.fr/Cyclisme,36)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Cyclisme" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Avant-une-sortie-](https://preventionete.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.preventionete.sports.gouv.fr/IMG/pdf/PreventionEte2018_100x145_FR_BD5-2.pdf" target="_blank">mémento basse définition</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Partenaires](https://preventionete.sports.gouv.fr/Partenaires)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Partenaires" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Surf](https://preventionete.sports.gouv.fr/Surf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Surf" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/VTT](https://preventionete.sports.gouv.fr/VTT)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=VTT" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Le_c-o-d-e-_de_la_plage-2018-guide-BDpages-2.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Le_c-o-d-e-_de_la_plage-2018-guide-BDpages-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#6M16`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Le_c-o-d-e-_de_la_plage-2018-guide-BDpages.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Le_c-o-d-e-_de_la_plage-2018-guide-BDpages.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#6M16`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Affiche_VTT_choix_de_piste_BD.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Affiche_VTT_choix_de_piste_BD.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#d4hp`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/2_PreventionEte_VTT_420x594_Sauts.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/2_PreventionEte_VTT_420x594_Sauts.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#zZdv`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/ReglesNavigation-2018-A4-2.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/ReglesNavigation-2018-A4-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#tcjP`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/ReglesNavigation-2018-A4.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/ReglesNavigation-2018-A4.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#tcjP`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Flyer-securite-Mediterranee.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Flyer-securite-Mediterranee.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#6Gru`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/jpg/regles_surf_ok.jpg](https://preventionete.sports.gouv.fr/IMG/jpg/regles_surf_ok.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#D2XX`
  
  
  
  
Instances: 8
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#6M16</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/affiches_ACCEM_canyon_escalade.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/affiches_ACCEM_canyon_escalade.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=î¿4&kKbbÓ\x0011ë\x001c}\x001aJty7ßÅW¢û¶ùåÞÑûK>ÔvÄ\x000eÃ¿@éï|÷·;z]¡.\x0018í\x001dýI¥¥·\x0015?k:'üâ\x001f4ÿ\x0000,\^i÷ò$\x000fué\x0018¤r\x0015XÇÌ\x0014,v\x0007ãª×®ã­\x0001Þ{\x000bÚX´²<DÏ@ðÞßì¶vþÈkñéå8LðÑ;\x000fMíöì¡©ÂÒ\x0000ÃzW=;ùÿ\x00008ë£þfNÚK{§\x0003±\x0010CÐ\x0000\x000b+\x0002\x000eÀ
¯\x0013°©9è=¯ì¦\x000eÓn35rçB·\x0006þÊ{NÓös\x000e¾\fã#ÌÇ¯MÁý\x0008/Üqê=óÁÿ\x00008Ye\x001brQ ê\x0004J¦ë\x0016`>ìæ#ÿ\x0000\x0003Ü`ú²Ê¼¢\x0007é.>Å@\x001dòJ¿ª\x0007é(ªÊ>ü[j>Kÿ\x0000tIläYïYxÑd\x0013Nßä¿\x0004@S²\x0003ï@3a\x000c½ìè&\x0004Ju[\x00119-¶ØæÇ&°Á1"SªØñÌùm´~Å2²ß\x001dö\x001fpÏ\x0003yûó\x0002ûó"õµ
Iù5(6HÓ² ì?\x0012w$ñÓíL¥äÈwä\x0000å\x0011Ü\x001f,í\x000eÐÉ¯\x001eCî\x001d\x0000î	Ì0\x0007\x0015ÈNj]b®wßùÆ\x0015Sæ»\x0012ÍJ	éîL\x0012
~5ú3´ö8\x000fÎã¿éÿ\x0000¸z¯eÿ\x0000Æáþwû õ\x000fîÏÑúó¬ÿ\x0000ÎißG-öl¤\x0019#FaQ°vPµï¿\x0013/ü\x0010r\x0003\x001czÈó¯¹ß{k\x001cãÔDñ#õ!´¡³\x001f|ñNy3æé®lUÙ±WfÅ][gQ!!*9\x0010*@®ä
ªrQ¢EòêÊ5{òêÑÏ³>YÒ<µ§F¾_\x0008m¥\x0001ýU<¦äÍÔm¸ô éUö>\x0006\x0010ü½p\x001døü^dþ)ú/²ôØpc\x001e\x0005pìoÅæX½Ä#|}sj\x001fóºV¥y-ÛÝÜ,rÈïé AÇ'b\x001baZ
­in_`ðåÈfg0	'VÖn¬÷<¶Oc±d¨hWS|è¢×Se\x0014 É<ù6\x0004\x001fUeÜ=Ã&¯«Tþ¢\x000cÚcìîÎìmåÀ$:ÌñOà
ýØÃC¢ì½åÀ\x000f|Ï\x0014¾\x0000þ¦eë¥iíÓ9ßÿ\x0000ç1l4ðÑh0=Ì\x0004²\x001c_0¿Þ7Èþy£í\x001foqcÛ\x0004LÏó¥éËê?ì]F»Û,pÛ\x000cL|½1ýgìVK-»g|ïù©~b\}oUÊÂ¡\x0017¢ =FÃçÔÓâ'<´{S7hË,¯¸r\x0003Ü?\x001eoë»C.º\Y
÷\x000eÜ\x0013x X\x0005\x0014g ¿ç\x001d¿ ì¿2`UÕec\x0004rÖ\x0008Ûb\x0000$»u\x000bñ
\x0005¡;×¶öSÙ}¥\x0013)<"\"\x0000ÕÐ\x0007sÝ¿G«ös°!¯Éì
p¯kßæ¾¼0\x001e+×Ç=ÕçoÊ­'ó
mÓVÊ¶Ü½ $t\x00000PÀð`Mx¯¾Û\x001e¹ì=£Ø¸;DDe_\x000eæ<ë¸àú~»²°ëxFA|7[Î»îJ"¸h+ÄõÈ)Ñüä\x001f×L×§3\x001c
x\x0007,ÿ\x0000viü\x000eÍÐs\x0018bGy¥öÙu\x000eGÌb\x0007ÏGí²«Êi¿áF­ÿ\x00009Må/\x0015³Ëp\x0017`¶ð\x0007ËÔô×î4Ì\þÙè´ûDÊUÒ\x0011ÿ\x0000à\x000e>oj´¸v2þ¬â¸W®#õÛæsÈ_¿þmk{8\x001e\x0018 ,å¤#3\x0000:) \x0000\x0007­{S1öÚHö¿\x000ca\x0013\x0018ÆÍÊ¬·GÏû·GipÆ1 FÎüÉ>äÊÎÌÛTRsÍ¹Á¼r?6*ìØ«³¤~RùøþZjðj¼KÆµIPuhÜQ©^ãí
Æà\x0003µs}Ø}§ü9jÀ±!ß\x0013±ýnç²;Cò\x0019£å!ä\x0016¡s\x000f®¥~ìú·c¬h6ack{Ûw\x00151·\x0016*ÊCñ#\x000fp\x0008ëGãÏ¦íl{\x0018dèhüÁÜ\x0017Ý1æÁÚPØÆq=
\x001f°î\x000b\x001c*öÇ¸9
¹ÿ\x0000mò+Ø(îi<ê¢ÂP\x0006jgìîqôó\x0003ì:Ù{5¤;ì¦?ß+\x000bé:rü\x0006\x0017\x001dOÈÿ\x0000õ#e\x000cÀ\x001azt§9\x0005~a|r\x001b³»\x001fÔ<8Ëú>¹ýRý
^.³7\x001c\x0011>^©ÿ\x0000¾-ñëcR>áKüçÿ\x0000¹óò>¤«[Xb{0ðjl¨{ $Új|9æ¾Ð{_=x8±\1õ?Å?pòù\x0005Û^ÓKX\x000e<w\x0018u?Å/Ô<+[\x0001\x000fÄÛÕcò³Ïùm«A«*ú\x0019+"
#¬\x0007¸­G¸\x0015Û9NÅí3Ù¹ã¬\x000b\x0004wÄ/;ÙZó Í\x001c`lGx;"®!õÔ®}f}\x001fóL¨ôï,¦\x001b©ìFô#fG_¡>°vÆ\x001e1Ë§ãpGÌ>ñ\x0019aí<]'	~=àý¬p¶o\x00023Í>`ÿ\x0000/°¼¾}-º\x0013^\x0012F&\x0003Ø\x0010Ñ|ê}Îp:¯ø\x001fâ¼y%\x0001Üb'ú`ñbñÌÞ9â8ÿ\x0000LQéªö?\x000eòïüáÎ¥°Tºè.å@\x0010¡ñåBÍO]¤ö\x000b\x0006#yg)×M >ò~ÖÝ7±¸qïRÐ?IûV¾¨Íö@\x001f\x0012þoþ~Ùy\x0002Õ|¿äã\x0010\x0001F \x000cp®õ\x0008z4øÞµc¶/nûO³à4ú>\x001b\x001b\x0013\x0011éòïÿ\x00007\x001f¶= \x001e\x000e¬lHå\x001fwãûk31ç-®xKI¿ôïbº¸bÔ\x001dØñ\x0002ÄÔç`ËY#)\x001fâ\x0004¾_%LJ_Î\x0004¦ì»\x0010<3ëwç¿\x0016å«ùøú°4QwfqP´ëÖ»~ÍOLú_ÚMTpi2H¸3=|þO½öî bÓd$ó÷Ëf7häQïú³æ×å\x0017ç-ïåEÏ8«-£ß[¢ò¯\x0017\x001e4ß£W·v\x0017oäìØõ@ýP¿´w\x001fÁ|s²;f}+\x001bÄýQý]Å=¹µ\x0017#}cFô\x001f=ùoóÂÓê¥¢8«ZÎ\x0000OS½GóÆM;6{¶´´¹\x000e\x000fL¯9Ðø~üß`Á¯Óv¼8vó¾¡ðý#æ¼2Z\x001aî=Ær½sþpãF¿Éeqql§ý×UGú¥o½9ÍO°:|á)Àwm!öïöEØÜ37	J>[KïÝ\x0010£ \x001c~x~UùgòÃËÆÚ\x0000\x000e¦^3\x000cõCÌs%E\x0000@º(PxþÑßKí\x001fbèû/KÃ\x001fïlpnrÜ^ÝÕ}+WUÛ¥ìý?\x0008þòÇ	'ÔwßáWÒ¾*ö\x0012\=OÙïá\x0013þqGË\x001a,zZê|dÔO$¸vûqü[ _ÙR \x001a·ÜþÈÞ{\x0013£Ó#,(åÜLqß¯ØíýÒà\x0018HÑÉ¸<ã¿/!÷¨j2?.'ìöÉWæüãæ~ 5In%C\x001a£ª*ÜkC¿CCO
l{gÙ<}©Å2M\x0000@\x0000Ý{ÜîÔön\x001d¡Ä214\x0001ªéïS·¾6ëÄ\x0000p\x000eù\x0001å\x000fË\x0017:	)þì½xÿ\x0000À|\x0011¥OSÙ\x0007f,|òÈWËÓ\x001f±«\x0017³ú=\x0008âÉGÏ$|¶\x001fcm{,û/à0\x0017ç)¼½å\x0008þ¯¥+]º*B¾+ì]ÛýE|«[íF8q\Èä"8b>'ô\x0002×ªö«O¦\x001c8ýdr\x0011\x001c1ùÐ
èôçvÛç×<Sùùë«þgÖ\x001b\x0010ÚT\x0011m\x0015BmÐ¹?\x0013Ã]ÂònØö?jm#Ã\x000fæGÇ©û¼7í>ÞÍÚ\x001bHðÇù±åñïülÛÙ­¾ãsãOË/$\x001fÌMZßH\x0012¬"bÜïEU,h;±\x0002<}³]Øýü£8oìù\x0001=¶p{3Cùì±Å|7×Ü/æ©q/ ¥ºÓ>¬ù;òKòN6j®Ð\«Ë¹-'4àÕ"j»|!ióÏ£´\x001dEX"	ïÎòâ\x001c'VÝÔû¦²1i1\x001cQ\x0004ÆWÅgscò®Ìv[£¦CògÉ~HP×Vö±Ó~WSr¯¹\x0012¿\x001a}\x0014ÍXö³ô"ç\x0018\x000e·WþìÓ®\x001d¢Ò}Qó¯ýÑ¥_­K/B~ý1þvù3ÈÈc´Ýh(\x0012Ò\x001aNÀÆ¼>ö\x0003\x0004½¢ìý\x0008¨J\x0003Ë\x001coýÈ¯µ\x0012í½\x0016Te\x001ft#ÿ\x0000\x0012)ÂÒYºôä~wÿ\x0000¾Óo¬®-4»[XÞ5yB"\x0002À¯*+³\x001aV´Ú½6ëÏhûwxå\x000cP$\x0010\x000c¨
Å^ÄA®öÃ\x0014á(ã e@o·BQ1i\x0008,E=³çÖxäéÖlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]H¿&ãeþ£ÄÛ<C·Ægï\x001fp~¬öKüG\x0017õOû©1ßï\x001bç;4/^Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»\x0013fÉ\x0000ª¸\x001dä¦L\x00066\x001aà	®xå±\x0013H-9a=Åí3*8Ñl×Nå7Z;æ\11%Yi\x0005»djïV§|Î\x0016$³\x000b
½³yëóïDòK/.A\x000fî£\x0005Ü|øì§ýb3­ìÿ\x0000g5\x001aÁp§ùÒô·Áêû/Ù]gi,XÏ\x000fó¤D#öî~\x0000£®u;-\x0008ñ¸sþU\x001cáÓéÏ&~cÎ[>©\x000b[h\x0011¼,Û\x0019äãÈ\x000fòT\x0012\x0001÷$ÓÃ=\x0013²ý\x0018åÅWðÆëâv}_°ÿ\x0000àiáLOW! ?ÉÂè2ko ÆuÌôÌzz\x0015cþìjT\x000fa¾ùâû»¹/äi§fy\x001cÌÄ$õ$ÉÏO\x0004\x0000\x0011\x0000\x0001È
tÅ8¢#\x0010\x0000\x0002\x0002\x000f(V¹,ÄÔjIÀù6Õ<Ø«³b®Í»%>DÕl´å×f³4÷B-\x001b,M!\x0005¸«\x0011F4Véá\x001c2\x0011â£WVëaÚXgàâr\x0008ñ\x0018\x0002\x000cl\x000b#â\x0016\x0004Ò»çÕùöþå?2YÎòYDþa²Í7ï\x0018Âç÷rB­ðÇÇtn#hK|`\x000e»°¡`ì8ÇS¾ÞOÎßðVÔktÙ"\x0006I
>AB1ô!ÌHÍó\x0017·Éf YO_çÖØ¿7¥±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015?çå\x001f+ j6þq²_~æî\x0004è¿\x0003õÐPû§9ÂööC ë±÷¿Tÿ\x0000À·|RÑÌïÕú;¾ôßO({tÏzÎ\x0013þkÿ\x0000ÊÔò}£Nü®ì?Ñ'ñ>\x001e\x001fõ£+ó5Î²u>>!|ÆÇàøÿ\x0000ü\x0010;\x0017ù/]>\x0011PÉûÈÿ\x0000õ\x000f­\x0005w\x0017¤çÀï·ÍËæÈ\Ø«³b®Ï?óô/=º~òÔMDa%ÜÊ\x000fR\x000f§\x0015}¿¼úsö7Ó\x000fû¥?à?Ù øÚ7\x0015'ý¿Þ¦ruo£>Dç\x0018ý.fÅ]\x0015vH<µåMCÎW\x000be¤[Mw;t\x0018ÚFû\x001d½úeñK!¨O·\x000bW­Å£\x001eYÆ\x0011\x001ddDGÚµ&çlì_ó^cüÒ­µ¿0Å\x001d¼wSz)\x0010<ªÜ\x0019Ç0µQP¦b|@ÌíGgäÓÄJ{YªêòÝí~¶3K\x0006\x0018GÊ\x0016#µÑëÜ¥\x001dÂÊh½³Õóì¿>\x001d\x001f_½Ð$jG}mê íê@YGo»6ýf\x001dâþOÿ\x0000Ás³|m6<ã9ðêä\x001f®!
¨%T7}½Îñù9'Í»6*ìk(~¢¸¤\x001av;\x0014;6*ìØ«³ÍóþYÿ\x0000\x0015ù\x0017Y·QVØÎ¾Æ\x0006\x0012ÿ\x0000\x0002§5}§\x000cü·{¯aµí\x001c\x0012ègÀÏ\x0006\x001fyDZ·\x0017\x0019ù§Ï.~ñd\x0019ô\x001fþ}·æÓ¡ùÂM5Ág*S·8OÏ°ús¤ì\x001c9k¼\x001f³wÅà±¢ñô#'\y"~\x0012¸\x001f¼ u\x0004ªWÀçÞ\ô\x0017ãä6*ìùÌ¶þUno\x001bM,Q\x0016ì­+Jû\x0016`>g+É@Yï\x0003ç³¤ÒKU#\x0018nDe*ï\x0010\x001cGì\x000bytÉ\x0006Xá-Í»6*ìØ«°£CÑ¢òü\x0002ÒÜR5,Tx\x0006bÄ}ää!\x000e\x0001AÉÔj\x000e¢\ræjþ\x0000\x000fÐÛ\x001e[á¾MÆk6*ìøÿ\x0000?Aÿ\x0000Kÿ\x0000¶yÿ\x0000Òg\x0007í\x000f÷þ¯é/Õÿ\x0000ð\x001fÿ\x0000\x0015Ëÿ\x0000
ÿ\x0000y\x0014ßNû'ç2rÏ¾&9únÿ\x0000XÔJù#Dÿ\x0000 Ä½kö*Øý\x001d3Õ;:\Xaî\x000fÀÞÙbð»CP?Û$~{þ=r(ççû6/\x001a¡\x0015v~{¿çá2\x0007óõØ\x0006´¶´\x0007çé\x0003üsÎ;oûãî\x001fsöü\x000bÅvl?¯ýÑOl»\x001f3$Í\x000bë(¼Ø«³b®Í»6*ìúÿ\x0000>¹³ç¬k\x0017\x001bü6§M¾)	ëþÇ:ÏgªGÈ}ïÏðb`Á\x001eü?(×éKu\x0013°ùçÚ<î_\x0012Ø«³b®Í»6*ìØ«³b®È×õ¡å½2óP&W·Zÿ\x0000¨¿U|\x0011'¸\x0012çè4ÿ\x0000Í\x000cÎcþ¹\x0017\x0003?'×7\x0006íÚVêìXüÉ®y\x00016þB<\x0000\x0001ÐS&éàlvlUØ,\x001d\x0015vlUÙ±WfÅ]\x0015vlUÙ±WbÖ÷/hÂHÁ¨e$\x0010}ÈJ"B±ÜXO\x0018È*@\x0010y,/FòRA\x001d\x000849ß<ÿ\x00009/æ\x000f*qIf\x0017q
|3üMOi\x0005\x001bþ\x0008¶r:ïetÚ­Àà=ñØ|¹}Ïv§°Z-mÇÂ~=ú^_*fZoo,h²\x0011*ø>çþ\x000b¯ß\õÇÿ\x0000ç.4sZ{)Ovø£¯úê*?Ù(\x001eùç]¡ì^l;ã¬Ëi|è|µàuªÒ\°ÖXùzgþþðg6>t±Ôþ\x0019ë÷â3Õ:7 Õ£YíeIcn\x0019OÈFyþ}\x001c±\x001e\x0019\x0002\x000fq\x0014~×Ìs`	pÎ&2\x001cÄù\x0014ò]!.D2MGÞ2]mª×¾k§ªØÕæNØ}o©W¾bK\x0012m]i\x0005{a×þ\x001cÇðÙZKú/âé'sôió6\x0007\x0015v\x0005¼¸úºW¿l³\x001c8Ë^Ið\x000beþGòÉó]ê[\x001fîÇÅ)ðA×ïè2*Mslê_mÇ\x0018\x0004AE\x0000\x0000\x0007@\x0006ÀdN·ôWêVk3Oû\x0018p{ä\x001fÍ?4ÿ\x0000¯Q\x001aÁ\x0005Q|\x000b~Ó}û\x000fa\x0019C{Ìób®Í»	uvû#æs7L9¸zÈ=ÿ\x0000ò"ÏW\x0007²¢\x000f¤PÂ\Íp\x001fFá°¢æ¯P}Ldøãós6±"ØH×þ\x0016¿Ç\x0004f3\x0007fÅ]\x0015v#snÑJ\x0003#\x0018\x001eàâªJa`êhA¨9ä7ùZO*Ü\x0018¦&©üWÀûÿ\x0000~dÄÛ\x0013oaÑµeÕ£æ6q³\x000f\x0003ãò9Ü¿+u±©Øv5\x0003ÄüNêÑÌnÓ1L\x000bÍ&Ös \x001f\x000cý=ó¥S ÁåqÅ]LUÙç}f&ü¼ÕÖê!Kyw éÄ~¸ú2ñê
ÃÔ\x001edÃÌf'þñ6¯¸è~=	\x001ce\x000eª@ øÓ(iyÃ)BAØ¸üUnlUÙ±WfÅ]\x0015vl\x0014®ÍØ]¬Gë[L1¸ÿ\x00008B¢lÛ¨|\x0018~¼óÇå\x000c5\x0002§ö¡j}\x0004\x001c¿'&ùòzW\x0013¸>\x000e?QÃIÇøÌ¡Fë\x0013º!SøãÈ#AÇþã´²{¸?ðÇúg NRÒó¬UÙ±WfÀ®Í+³dUÙDW
»(®\x001bWcp«³b®Ä§ÑFsÙIû*¾5æ@\x001dÍ3É\x001eJ>¶©l|f¯ë9.ND¹=\\x001c-$\x001e	OÕ¼ÌG\x001dâù°+³b®Ê#
«±¤S
»+
»6
WfÀ®Êf\x0008*v\x0003s[\x0002»\x000cóN§ÎÚáÆ\x001fÿ\x0000Q6QôíGÒ\x001bÁê§ô\x000e#èåxÿ\x0000²n¹éb+ÖÒò¬e)WfÅ]\x0005+³dUÙ±WfÅ]\x0015vCõ#Yjïê²sÔ¡¥~bg[ÙþÔjtQà\x0004J=\x0004Ç\x0015{âäÓF{ýÉ¥¶±-¨â\x0008#ß|·åu­v@<6þ½\x001eÜç­á\x000fö_­£ò1ï(Áæ);ªþ9"Ñüi¢7«\x001aqÑÔa÷i{G¨×Çd\x0008õE_¿©r1éãpºÕe»\x001cXÐx
²U³æÅ]\x0015vlUÙ±Wd\x0005õ4ÉÈ¸ÿ\x0000Á#á\x000e_\x0016cÅØ+È¿\x001dï¥ÞXg|Ú&\x0003ñÉC,|þs²\x001a:eMNÈÇ-
íÊ¿h/!þÄ×:Ïeu\x001e\x0006®\x0017üW\x001fôÁÃÕÆàèòúS-z\x001d¾ü1×¯EÎ­m©/÷z\x000cÿ\x0000Å¨G\x001fASíÆÒ\x000exä%ð;\x001f½å»
^\x00198ÏðÊQùú>î\x001aÀÉÞ)\x000fÜpß<\x001díXîlUÙ±Wfë»\x0018E1Web®Í»6*ìØ«³b®Í»\x001aF(!ØÜPìØ¥Ù±K³b®Í»=íù
ÿ\x0000\x001c\x0018?×þ&r\x0012|SÚñ©{£þä;;\x0016Eå]\x0015vlUÙ±WfÅ]\x0015vlUØ\x0007Qþïé\x0019ªú~.Â\x001c×º§fÅ]KOî×åL|¹Ãô`±½Ù±WfÅ]y©_\x0010F)\x0006³åtÑ\x0018YõRGÜi?IDñ\x0000{Å»\x0013ÀÉÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±bìp\x0018¦Å.Í»6*ìØ«³b®Ë\x0002¸«±ø«±ñÈÐ°t$0 ::\x0011\x0014XÊ"B#ÍØY&´¾BÔG\x0011\x0001°¼"
ZØ\x000fãØN«ÓzüTèÕþqN/´4\x0004\x000e\x0018ó\x001e¬R÷sý\x001e^çí>Í4!\x001eq¹aq\x001b\x001fÑåî}³ùm­ÊûÐÏï\x001eÖ¦}&ä;ªnÐë]¶ö¡ý\x001fæ\x000f-ÿ\x00005\x000f©ÄÜìn«hõ®Çröüv=òþÅí\x0001W+Øé9=ÚcQ\x001döèGóeûX\x0007ãÿ\x0000«£\x001dt§\x001dWM"\x001bô¥\x000b Ùd#ÅO_\x000fÀeç\ö¯sa¥vX\x0015Â®ÇôÀ®Í]\x0015vlUÙ±WfÉR»	µ.ÛëÈRákµ9\x000e¹\x0004róçÞ\x001c|¸#>«Ò/?65_Ë)Dºd´NA&øïNÇÝhsÌþlü¼»ò£\x001bk$\x0000ÔHµäë\x0001¸ùôÌ)b0ýn$±\x0018þ·êäÿ\x0000üä®ùÁ\x0010Ó¯8[ß:ñ{i¨c£q\x0019?\x000büâö92òGæÃ)[]TÔ\x001a\x0005¸ÿ\x0000_þjûòüyú\x001f~<Ý\x000bÃ>ÿ\x0000ç\x000ecdÕü \x001dAi,{\x001eäÀOCÿ\x0000\x0015¿þÎz	X8¨Ü\x001e3\x001cÇæÌ±4,QÁVRA\x0004P:2ðªÌÀW
»\x001e\x0006\x000bWeàWfÉR»\x001c\x00066®Ç`WfÂ®Ï9þp\ú±ÇüÄþ|\x0003t\x001eä¸ÀïüÏú\x001ayË&óDµ¹AûÈ#\x0004ømÏÝ×ïÀ%º\x0001Ý	¦j¢\x000bù¢cðÈÄ\x000fõO¿\x000f*¼Ò·°þþò?îëûIà=×õdg\x001e¨i\x0001æí Á'ÖP|
ö½ûs¯ä\x001aØ^8.\x000bWc°R»6I]\x0015vX\x0015Å]¦*ì¼UÙ`W\x0015v8
b®ËÅ]\x0015vlSNÎ}ù«þÓÙ\x0014Ñæ"1òêßßNN\x0002Ë8Gåk?­Ü=\x0013â?ÃñÎ\x000fä'ôÎ¡\x000cDUCsooýt\x0006dÓÐuë¿©[;¤q\x001f3¶zñß,{TýÙÐñÀ9\x001a\x000cñj\x0003©]\x0001ÔË/üI¿·2Oq?è°ÿ\x0000ª¨g´øñØvÌV\x\x0018¢ÝÓ³bf¦*ìx\x0014Å\x000eËÅ4ì\x000fvÜcsà­ú)TU÷\x0019â>»æSkÝ)Lõ¿\x0013mþ¡üXæ<¹µ\x0017yÖêOð\x00191È¡&Í]¡ØúbvKaû#ä3æÝ÷³þ¼¿Ý\x0017Çu_ÞKúÇï,²\x001f²>C\x0014Ì\x0017\x0015S6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Á:Ú[­¤x¤\x001d\x0019\x0018«}àãË,FâLOx$\x001f±³\x001eIc7\x0012Aï\x0006¾æØäTüÄÖu¸Ä7÷RÆ?eçÒ\x000boôæÃ7jê3\x0019äqésröl¢¥dw\x0019\x0013úTÖ\x0005MÀ\x0003èÈnjr®lUÙ±WdË>j½òmÀ¾Ó&hg\x0000¨u¡Ùº\x0010Aû³7G­É£\x001e)\x0018ËqcÏÞåéusÒË\x0019á<¬yûÖI\x0018QF\x0017jzúÔïwví,Ò±gv5,ORNQ4³HÎd\x0013d­9rË,¤I$Ù%µP¦\x0000ÊZaöæÿ\x0000,1N¹ÝS\x0014ùñ"¿Nfiµ¹t¦ñÎPþ©1û¬\x001a¬sxå(ÿ\x0000T÷,xÄh\x0003k^`¼ó$¿XÔ'âZS®Îià\x000b\x0013AíÓ#¨ÕdÔË$¥#ß"e÷±Ï¨sÅ9\x0019\x001eù\x0012~öÑ\x0004{(¦\x0014f+»6*ìØ«±ñÈÐ°t$0 
\x0008#¡\x0007\x00085¸H5¸w\Éù¬Ì'Ô/\x0019\x0000 Sq)\x0000|¹S6gµu\x0012\x0014rä®î9~·`{G1\x0014rN»¸åúÔ½\x0005\x001f²>ìÜ\=Ó\x0019%bìz³\x0012IùÙLÌÙ$òàJFFÎþõ@)Ó\x0011È±o6*ìØ«³¡yóc]ò²\x0008l/î#~Êsää¯ÉGÐ3w¥í½NV<\x0000r\x0017cäl;}?kgÓä\x0007uØù\x001bP{dr\x0006\x001e]þ~yôQõ)Çú¼Pýè£3'í6²|òËáQûrgÛú©óÉ/\x000f¸\x0005¢Î1û#9©¬Üëz×³K<öävvûØþmDó)ÊR=ò&Gít¹sK1¹#ÞI?zº M¦\x0016å
+³b®ÉFç}WBOJÆöê\x0004þX§\x0007Ü¬\x0006l0vl\x0002¡q\x001dÑ£÷\x0017;\x0016».\x0011Pâ;£">â¦Ñ+õ\x0000ý\x0018\x0013TóEþ¹_®ÝO=zú»ÿ\x0000ÄÊókrçúç)ZF_ykËªÉë¥ï?ymcTè\x0000ú00ÜUù±WfÅ]-.ä°fÚ9\x0010WRU\x0011¸#Ädá3DFàD3Ì
A\x001cÙ¢+±Å/õ\x0019µYZâêGW5gv,Ì}Ù'%,²)"yI?2%ñHO2MµÊ¡v\x001b`<©­¼Ø«³b®Í»6*ì=ÑüÑåêþºÞ¦§Òãß§ì5¹tÿ\x0000ÝÎQþ¬~â\x001c¬:¬>J?ÕÜV4jÿ\x0000h\x0003ó\x0018i{ù­j+ÂãP¼|\x001eæV\x001fqc\x0019;WQT²ä#Îr?yohæÉ´²Lûç#úV\x0011z(û²\x001eÌ\ÔîOSÂm×j¹X\x0010ìØ«°ÓJÖî´'õlg\x0007ÛâÙ\x000eÝ7R\x000edaÔO\x0001¸JQ=ñ&?s~,óÂn\x00121=ñ$}ËY\x0003ìEpÛZóÖ«æAÂþöæu\x0002dØ}ÄÓ2u\x001d¥S¶Lîý.F}~\ûNr¾Dþ©
Çö@\x001fFEs\à*fÅ]\x0015vlUÙ±WfÅ]\x0015vX%MG\Rì\x0011=ì·B;0\x001dýyd²J\É>òÊS2æIh
`l­y±WfÅ]Ú\x0007/¼­'­¦ÜKnç©Ù+ìhw\x001eÆ£34ºÜSÅRþ#îr´ú¬sxäb|\x000b\x001e1&Ì\x0001Î?ç üÐ\x0017é\x0019iJ}ë÷ñ­}ë\Þÿ\x0000¢eW/S¸ÿ\x0000D:ª¯\x0010üêPúËÍó\x000bWóHá¨ÞÜLÈò±Oø\x001añü3UªíLú­²dq¯']¨í\x001cÚ§9Hw\x0012kåÉU XþÈ\x0003!Ù«uÊ¹±Waµî½w©E\x001dµÄòÉ\x000c"Fò3"\x000f\x0004RH_¢S,De)\x0011\x001f¤\x0012H\x001eày9\x0013ÔO \x0011\x0003$=ÝËB\x0005Ü\x0001S9ã®ËV(j6#¡Â
$\x001avLaüÅÖ­ÑQ¼Xÿ\x0000\Ê\x0017î
LÚGµu\x0011\x00142ä\x0003¸NU÷»\x0008öx\x0019']ÜrýjF\x0004;ñ\x001fvEn®ä¾s,îÎíÕ'æNù­ÎCr$òmÁÌÍIï;ª\x0001N¶ªO¤¿«i,=)Ê6(Ôù©\x0007'4°1=à~ÆXòË\x0011¸\x000fx$}Îe
±ß%rþgëÓ\x0002¯©ß0=Aºøllje±ÍþVOõ¹Çµ5\x0007\éåúÔ¾®öGÜ2\x001duy%ó\x0019'vw=Yc÷ÕÏ!ÈnDÞMºùÌÌÙ$=Õ@§L\x000f°o6*ìz9RA\x0006 #¸Â
n\x0012
;&ù­Ç	µ]FðDváõ)O\x000fµÓÛ¦mkêDx|\ÝÇ/Öìiç\x0003ÄwqKõ©z	Zñ\x0015ùd2iáÈK1êI©?2sU)\x0019\x001b;\de¹U\x0002E³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Ï¤_?ñÀ²ÿ\x0000Q¿âm!Û¿ã3÷¸?V{%þ#ú§ýÔÍï÷óÎ\x0017¯BæÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WblÔÉ\x0000ªµÀ®ôË\x0000b\x001aá]ÅÍ2øÁ	Ý­,]ßS¾fC\x001b\x0012Y]Ë¶E¯5JfÃ\x001e\x0016\x0004³};EåÛ8æ7ç.ù{\x0019mB`$"«
|R7Ék·Í¨=óªì¾ÂÍ¯5;uÚ#ãú±ýÔö¼«\x000cvë3´\x0007Çô\x000b)åÝÍ¯Ë\x0000{(ÝÈ]³çÇæWüäæ«çNVö\x0004ÙZ¨ûÖ\x001få8¥>KOÏcì¯d°èêSýä¼Ç¤{ë~ì\x001fø\x001féû>§÷³ó\x001eî_È<ßZóä÷õØz1û\x001füÏo£<ÔÌ\cRw$çr\x0005>¤\x0005l\x0018)<·8Ü)k6*ìØ«³b®ÏS~Lÿ\x0000Î\x001eù«ó£ö¶ÿ\x0000T±mþ·uXÐò\x0016äöâ¼|XfÛKÙy5\x001bC¼¾yÛþÝè»\x001aã)qäÿ\x0000SÇR?\x0013Ê?\x0013~HinÖ.õ>\x0003>´þLÎ\x0006y[ò¸%Ö ¥oÕ¸Qé+
}7QþÌ¹÷ÎÇKØøðn}G¼òù?7öÿ\x0000ü\x00125©qÆ|\x001cgø`}DyÏÊÉ¯ZMÃ;ÿ\x0000çå\\x001f[½òëª¯«\x000fî
\x0005#?&\x001e\x00000\x0000Óöj:\x001cØêôã>3\x000eñ·¿£Æ{=Û2ì^=@¿L½_Ò¶Ø~j\x0010Éé0lüëþQ~dj\x001fó~eUEeÒfê\x000eã¯\x0019¢=«±§\x0005=³ÍtÙå¤ÉÅÜh½ûs·;+\x0017´\x001aIb$\x00118B]Ò«¿\x001d\x0013éc\x0013­<zgéÊÞfµó¾­§H%¶¹eÇuaQò=ê
Aß=O\x001eA	\x000eDX~
Öi'£É,Y\x0005J\x0004ÆCÌ1æR¨Ãü±Ã[\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vy÷þròá4¼¡©éyL°4öþ>´\x0003Ô@=Ú?Ùf·´pxø¥\x001eµcÞ7{?c»Wù3]-ÔL'ýYúOÊïà¯m'¦àçÉù÷_æÇø#Í
¡\5-µhý1S°¸­\x0011ÿ\x0000d\x000bÇîY|3ì=Oòß\x0011ÉúCþ
]ùÝ\x0018Ï\x0011êÀx¿Ì	|¶?\x0002ßÅÍyw\x0019÷«=	øñ%Í»6*ìø-ÿ\x0000?(¸i¼ë\x0012±Ù4Ûp¾ÀÉ3~²sÏ{xþ÷üÑ÷ì?ø\x0013D\x000eÏ'¿4ïý,\x0007èN´ÿ\x0000±ôçÏÌç\x001fhGgsüªÿ\x0000oóGç+)Ñ,dh	Þæ_Ý@\x0007¨Ô
òNGÀf~AQô»ÎÁä;gÚÍ\x001fcßd\x001c_Ìª!úiF[©Ï§?ßóí\x001d+Cãsæë¶¾Px+\x0014\x0000ø\x0017þòOîÇçW¦ì\x0008Ç|üÁð.Ûÿ\x0000Öl÷\x001d$\x00061üùÔ§òúGû/z]. [e\x0014Ï¢Oò\x001eù}n,´KH-!\x0014øb@µ§BÄnÇÝ9ÒâÃ\x001cB¢\x0000÷>%®í,Úùqæ§.ù\x0012~]ß\x0004\x0003¹v5Ï0Î{yOüQäKé\x0015A{7åIì\x0011Â¹\x001fì\x0019³UÛ8¸ð*/}ÿ\x0000\x0003moå{K\x0018é1(\x001f±ö²n.=öÏ_¾|?^hÒõ²Ücê?Tÿ\x0000Å.}9ä6p:<Þ\x000eHË¸ïîêýkí/fÿ\x0000)hòáæe\x0003Ãýhú£þÈ\x0004âdõ\x0014lýG«\x0006\x0015\x001b²þ}1Ì¼UÙ±WfÅ]\x0015vlUÙ±Wa/4dó\x001dÎ7÷w\x0010É\x000bm_D*vù\x001c¯$8Á\x001dà¤Ô\x001d>Hä\x001cá(È{âAý
©âk{û'ÓfÚaI#vF\x001e\x000c¤>ñ?!Âiý\x001cÅdä@#ÜwdÀ×:ïüã¯ÿ\x0000Á>nÒ5"h±ÞD®kOCéµ}¨Ù¡Éáåó\x001fnÏ5íVóº\x001cØúr#ß\x0011Ä>Ð§:sR=³õ\x000b®þ1ÌØ«³ÏßóZcêÞHÖ¢¼Å£H¤u\x0006"$\x0004|¸×5Ý£\x001e,2÷_Ëw³ö3(ÅÚ\x0018	åâ\x0008óéW¶4qóÀóßcó·ÊÖ¬¬\x001aò1è^\x0001×Ö\x0000XÞ¢ñÃâ éìíWæquä}á³Û.ÂþEÖO\x0010\x001eëÇýItÿ\x00004Ü~\x000e¹Ñb;vÏFfÍâ\x00143b®Í»6*ìØ«³b®Ï\x001fóô\x001fùH´¿ûgù=&p~Ðÿ\x0000y\x001fêþý_ÿ\x0000\x0001ÿ\x0000ñ\¿ðß÷Môï²~yó+9gß\x0013\x001cý Î\x0011ß}{È\x001aGù\x0011Ê?i3Ó»$Þ\x0018ü~òü1ÿ\x0000\x0004\x001c|\x001d§ÌÄüá\x0014ðRC¬Í»çhlØ«³óµÿ\x00009ít·^Ôx×áKe5ñ\x0010¦y¯lÍ/Ü\x001f¶ÿ\x0000àk\x0003\x001eÌÅ}LÏû2Ù
F>ñÆi\x001fPEæÅ]\x0015vlUÙ±Wg×OùõN¿pk·ÔPx\x001aý`¤P}ùÙ{:>³ý_ÒüÕÿ\x0000\x0006LâÑÿ\x0000úf\x0012½Hý§>¼gfüÒæÅ]\x0015vlUÙ±WfÅ]\x0015vyþs\x0013ÌCË>DÖg©\x0006KAHñ1ÿ\x0000\x0012Í_jO\x000c|ö{Ïat¿í\x001c\x0011î\x0011ÿ\x00000\x0019~EªòqóÏÍ^ys÷{ Í»1Å\x000eÄñbìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®É7|å¨y:O[L¸\x0006®ü[á?ë/CôÀÕèqjÅd¼~UÚ\x001d´#Ã\x0011ó\x001bqæ\x0013\x001d?VJnVîÈ}Çæ:\x001cõ×?ç1&µã\x000e½\x00071ÓÖfù´dÐÿ\x0000±+þ©Ï:í\x001fb#-ðJ¿£._?Öøçkÿ\x0000ÀÆ2¹ig_ÐÉ¸øHoó\x0007Þô]3ó\x0018=\x0012ú:ÿ\x0000~?Â,ö6t¿; }6å%4Ý+G\x001f44a÷gkû\x001b6ÖHçÌ|ÆÏöbj{0ÖhJ>|â}Ò\x0016\x0019¹µÖ×««ût#æ\x000eùÓ¿Kü=sCàîé-\x0007ú\x0007ãé83ô\x0005óÍY±W\x001d²3që¾Ý\x0006Ã6xaÂ=î³4ø¹õÿ\x0000å_Ã¶BYE'Þ!e~íÏ¹ÆY[ýaèz
Î\x001c³á\x0008Ã\x000e"üÊóGøfÅfMTÄWí7Ð?\x001ad§5nÑñ¦lUÙ±WfÅ]ýXÕÀöÍmñuú¸}?ù\x0019\x0000K)äîÓSþ\x0005GõÂ¼Êq\x001eÛvÂª3Uêa'ÅßßñÙå\x001füAqn9ÅæX«³b®Í»\x0008<ÍåøüËlÖÒlz£+v?×Û\x00084i1Òµ&Òå\x0012¯N<Gy~ÂúëÉ7ÆXÉWSÑö=Aús &îoV¸·^wV\x0015SÜ\x001cõfªÇ­ÛÇu\x0017ÙqZw\x0007¸?#äSI\x0014ò+ÛF±¢~ªiý¸g\x0008\Ø«²\x0005ù¡þ°r¢²CûÅú>ÐúGêÉÄÑg\x0013LËWÿ\x0000Q¸\x0015û/ð§¡ûð\x0007ån³úRÄBÆ¯\x0001âÕ;©þ\x001fF3\x0014Vb\x001el±ú¥Ç1ödßéï&\x0006\x000c_+\x0015vlUÙ±WfÅ]\x0015vlUØÖA *z\x0011Côâ­ÄÔg¼¹sþ\x0016ÕÀeGFù\x001aé\x0007pä\x001dÃ×µ8ÿ\x0000KÙU7,ªÃæ7Éådm¨ê\x00177ÄmFßÝÚ´ûC'&3Ø$makm\x0015¸;í÷(§ë9ßs\x001d¥çyTÃjìm0Ú»+
»6*ìØ«³`¥vl
ìØ«±¼pÚ»\x000burVÞj¾ßþ"pMò§úËúóÉÞK[j\x0016®Ý\x0004ª>ý¿dË.Od×#2ÛJ\x0007^'ðß=Ó1gfÁJìØ\x0015Ù°+³b®Ê"¸m]#
»+
»#^q¾ý\x001d§ÜKZ\x001fLóo~¼1\x001b²4ÓD·úÕÌiÛ'ä7Îqù3cÂ)îHÜ² >ÀTþ¼RÏ#)óÕÇ'!Ø\x0016?NßÃ;fPÔÀ³b®ÆÉZ»\x001b]\x0015vl+³`WfÅ]\x0015vl*ìa\x0018m]+³dUÙ±WfÅ]\x0015vI´ßYÞÇÜ,R\x000fö/B~æË\x0007"Î<°\x001fï{opße%Bß*ïø`¢\x001a!Ø\x001f^ÓÎw=±ÿ\x0000uÊëô\x0002iøa"ÈQ§a; \x0015mÁ\x0014?#Ç3BQæ\x0008#á»\x0002,SjÜMGQÝîÄztc\x0013õ½"cuo_Ûµ"þI£|Ï¥´ÙaÚ\x0004¿$=CÞ(üÂäÆt¹ÄºOÒ¯\x001dãó\x000cÍ\x0000¸¤¿±0àÞÌ:g@±¼MB$3Up\x0008úsç
nZLÅ.q5û~/o|`\x0016!<&Ý7Pi³	±K,o]]\x0015v4UØÜUÙ±WfÅ]\x0015vlUÙ±We\x0011\QNÆbfÅ6ìØ¥Ù±Wg½ÿ\x0000"\x00054\x0018?×þ&Ù	>'í?øÔ½Ñÿ\x0000r\x001d"òÎÍ»6*ìØ«³b®Í»6*ì\x0003¨ÿ\x0000wôÇÏÉÄÔý?\x0017a\x000ekÝS³b®É%§÷kòÍ.AÜàúC°FZÞìØ«³b®Í»>fùÖÃô^§yoü\x0012\x0001ò,Hü\x000eZý	ÙÙ|\8åß\x0008ýÎÈÎ.ÅÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlX»\x001c\x0006)\x0001ØìRìØ«³b®Í»6*ìp\x0018«±Ø«³b®Í»\x0010»µKøÞaÊ9\x0014£\x0010Î£ß)Íe\x0015ò=Ä4fÄ2Æ¾ ÷\x0011ÉyKÍ\x0017>K¿·Õl[öò+¡ùu\x0007Ø±Ão#Äþ~Ð.|¹pÜµ\x001d\x001dù[?í4`V#ò*
\x001fö9æzÐt\x0019ÄùG'Õå.¿­òM}ö^¨då\x000c¿PîçúßdùÛPµòÆ¹eæû\x0015\x001f¡¼Å
.cý¾\x0019Ðöª±çÿ\x0000\x0005:]ðÔ¡IÄÇ\x001b\x0011÷ç¥é²ø±\x0012ù¾³§ËâÄKæù/ó\x0017Ê-ä}RãN;¢5coæ·C÷\x001f¿\x000c@Ì\\x0011È«³b®Í»6*ìØUÙ°«±àS\x0005«²ð+²®Ç\x0015\c!A¨#¨9Âÿ\x00000,\x0012UkÝ1(ãwtaÜ¨ì}»öÌL¸z\x0013.\x001e¡ú
ÿ\x00008Ûÿ\x00009a5¬±è>j
EñÏÅ\x0019ý¿i\x000f@çuý¢GB\x001fË¿ÌÑ\x0001tý@þæ´I\x000fTöoòâ?,,µ±a-l^ÿ\x000091ÿ\x00008·þ42ùË }tsÛ
Rz\x000f·\x001füXGQÑúízM\x0008qQ¸=\x000egÛü¶&8*ÊH \x0010GPF)U°Ò»,
áä®Ç\x0001L
ì¼UÙ°«³S
»<ùyõÍNsÙ\x0008AþÄ\x0001úó"\x001cò{\x001f ô-c\x001e5o¼ç¨4_BÒ\x0018\T\x0008H?ês\x001cóh/'¼ÔÜwrGß+Í3èÒ\x001bÍ3F\x000f «öã>ÝÈùn2ñ;æÚ%|Þ£y;Õôn¨\x001a©û-ó÷ÁXü×Ôu1Ízz|Cýaßõäe\x000bä¦\x001dÊ:¯ÖPdµ4?Êz\x001fÎñgy\x001e¡\x001aÍ\x0003\x0007F\x0015\x000c
AÊª^}4
nÅ$\x0005Xu\x0007\x0004âªY±WcÅ]Å]\x0015vX\x0018«±ø«³b®Í*vlRìu1E»<ßù±«}võmü0-\x000fúÍ¹ü)À6EéþO³ô 2®\x0001ÿ\x0000_÷÷¬<#_ÖßÃ#2%Þu»û\x0010\x000fv?¨\x001cëÚíÇÕ-'ùbsÿ\x0000
r°ÅXGëLâÊ?\x001cò·­¾µ¨Ú¡ÜzOû\x001dÿ\x0000dKazÖ¹/§m)ÿ\x0000$¿lö\x0016c4¼k6)v`+»\x001e\x00051C²ñM;6*ì°+»\x000bu¶1ZÎÃ¨Ïü)Â\x0017*ÅyJÅõçÇLÊn{qÏ`ù%==6ÔÅJ~ýó\x001a\ÚÇ5Æås/úç% W"J±ÔÅ\x000eËÅiÙ±K²Y\x000fÙ\x001f!6ëÿ\x0000½õåþè¾9ªþò_Ö?yeýò\x0018¦`¸ª±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]H¿&ãeþ£ÄÛ<C·Ægï\x001fp~¬öKüG\x0017õOû©1ßï\x001bç;4/^Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«±6zdUEJàI$ã\x0000Å\x001f\x000c\x001c°¦æê\x0008!?³²åÛþ9\x001b\x0002Y¦r¦ÙÎ<Ñæëo.À÷wÒ¬0 «;\x0001ýO\x001bÙ»Òh§¨\x0001<r4Ú\¹x¢e#È\x0001lîÖÂ;$2ÌB êN|êüÒÿ\x0000¶ºÖ\x000bÚyyL\x0011n
ÃÈÃüè3Vÿ\x0000Tç´öG±pÅSÔzó\x0007Ò=ç¯Ýï~ì\x000fø\x001bÃ
dÕ9sðÇÒ?¬ì\x001eö%¬yøÐÅ`8÷áûGä;~¿xæöú]JFáÚI\x0018Õf'Ä¾z^<c\x0018á\x0000\x000e@lûV\x001c1Ã\x0011\x0018\x0001\x0018@
\x0003äó¦k/!,Ç©&¤à\±¹O6*ìØ«³b®ÎùYä\x0016üÑÖm4\x0008î!µ{¹=5bB\x0003B@ÛrÍN*;±\x0002»æF\x000f1\x000b\x0002úKÛ=¦;/O<æ2³\x0018óü\x000egÉdéÞ\x0019÷sòSþpgÊÿ\x0000.î£ý'¨-\x000f¯r ¢7pîì[x0é¤ìx7>£ÞSò\x0007´\x001fðDÖvµÂ'ÁÆ\x0007sýis?
\x001eI,×.Ý\x0006{9T 
¢l\x0000ÍãåÄÚ\x0013\x001d\x001d\x0015v|\x001dÿ\x0000~N|Æa´JZjÊY¨6[è$\x001fìÁY=Ø¿y÷ni|)ñRûß°?à[ÛßÒ<Ï¯	¡ç_OËxû©9°ñ=GêÎÃÿ\x0000>àüÿ\x0000ô\x001dü©Éð¿9´öcÑ¾Ô°øï"\x001e~9ØZÚýÑ÷Çôÿ\x0000·³<@k±U\x001cµÝÊ2ÿ\x0000z~
wð~Øúsì\x000evÌÉVlUÙ±WfÅ]\x0015vFµ\x001f9éDÂÖîòÚ\x0019)\x001cFkÒÌ\x000eÿ\x0000,ªYc\x0013D}áÏÅ Í<På\x001eñ\x0019\x0011ó\x0001pBz\x000c\x0003Ëq¸\x000brñWfÅ]\x0015v5Ô8*z\x001d)\x0006¿Ì\x001b	¿*¼Õ{
1K§ê2\x0008Ø¯§)hÏÜ\x0017<<N\x000c¿F¾\x0005ý\x0006ìÌí]\x00163=Æ\QâóâKô²8Ïª¢½Æ~*|û\x000fæc¯Û\x0011Âî\x0004åzQÔû«SòÏPÓf\x0019à$:á.ÙìÙvf£&	s÷â(±ùSÓ%Olè9éVfÅ]
ÿ\x0000çç\x001a\x0019³óEý(·\x001az¥|Z)d¯àëøg\x0003í\x0004+ =ñûýoÖ¿ð!Ôñèòcë\x001c¤ü'\x0018ÿ\x0000ÄãN5R=òCÿ\x0000>éü²ò¿æ\x0017×çÖlã»Ô¬¤¢\x0013\x0012ñ¬N
\x0018D~\x0002ÁÔîÁÚË{\x000fO-\x000b®n\x0017ü\x0014û_YÙþ\x001cpÌÃ\x0016A!.\x001d¤e\x001fésª=+«Wò4t¡ 9ö\x0008\x0012ÕDq(TQ@ª\x0000\x0000x\x00003¸\x0002e##gsÞRW\x000b\x0017fÅ]ßÌ_,:h×úI\x0000ýjÖhEzUÐª røüH\x0018÷\x001d§eêÿ\x0000'\x001e_æN2ÿ\x0000JA_\x001bp ø\x001cü¥O\x000b[;FÛ2\x000fÌ\x001ag\x0011Oè¤eÄ\x0001\x001dC%­sôÛÿ\x00008ÃçÁùäý+S-ÊO«$RïSêCû¦¯¹+ËéÏSìüÞ6(*?
ý¯ìßäívl|\x0019«?Xûé\§¦ä{çzÍÇ¨fÅ]\x0015vlUÙ±Wc]Ä`³\x001a\x0001¹'¶)\x0002Ý]üÌÿ\x0000Èògå(®oÒêávô-?~Õð,§Ó_\x0003W\x0004xf§QÚ°ó6{ï vO°zþÓ£\x001cf\x0011?ÅÐ>GÔ~Hí\x001eNÔùçç¯ó\x001fÌ\x0016ÞlÖoõK\x0008Þ+{«©§7§$Y\¿\x0013Çm«Ûló|ó\x0019&d9\x0012OÍûS²t³ÒiñâÈD¥\x0008F\x0004¢b\x0004ory\x001añ\x0000\x001eÃ!ÑÊÐ°t$2A\x001dA\x001d\x0008Ê\x0006ÎÒQâ\x0014Wçê»ò¿Í+ç}\x000bNÖ\x0013¥Ý\x0013SÀ¼jÄ}\x0004»§ÉâB2ï\x0000ýçolhÎS	þ\x000cúY\x0010Æ¤^\x000cGÉÞd:	üÊÒÿ\x0000Mèz\x00153Y\Æ\x0007»ÄÀ~¼£Q\x001e(Hw÷;^ÉÍàê1Où¹ ~R\x0005|g\x0007ß>&ÿ\x0000Ï¼ÿ\x00008¿å_ùùzñøÚjÔkÑnR¾ÿ\x0000gS\x001f»\x0014Î\x0013±5^\x0016N\x0003Ê[|z?Vÿ\x0000ÁC°?¤üÄ\x0005Ï\x000f¨ùã?WËê÷\x0002ßEê/!Ô~¬ûÑüzæÅ]\x0015vlUÙ±WfÅ]\x0012?çè?òiöÏ?òzLàý¡þò?Õý%ú¿þ\x0003ÿ\x0000â¹á¿ï"éßdüóæVrÏ¾&9ú\x000cÿ\x0000y]ýkÈVËþû¹ºNµÿ\x0000vrú:ç£ö!¼#Þ_à¡\x000e\x001eÒ Ø×èHïÅ\x001fè\x0019î\x000cß>LÍ»?7ßóW[óþ¯QN2D¿:Bçö±¼Òø}Áûþ\x0007ÐàìÌ>bGç9'ö`g3Pú*'6*ìØ«³b®Í»>Ïÿ\x0000Ï­ìøi:ÍÅ\x000fÇw\x0002W·Á\x0019?ñ¾ÿ\x0000Fw\x001eÏ\x000fLû?àÅóàt$~r\x001fñ)N¢w\x001f,úkóÚ[\x0015vlUÙ«»\x000b[YµSC4@¿\x001aÿ\x0000\\x0018ïoð&ütÀ×\x001ee±´\x001c¥¹\x0007J´¨\x0007âp\x001cu\x001f6Èé2Oa\x0019\x001ftIý\x000eâN\x0003ÿ\x0000\x001biòÛkÿ\x0000#ãÿ\x0000°xÑï\x001f0ÙüýNéeúà|\x000ex#þ~CçX#ò½¬ÑÈo/¢\x0004#ªF!;\x0013· ~s½»x@\x0003ÎCôØ¿àSÙò:éNQ#ÃÇ.`äc\x001f¸m|uð\x0019ðÇ8\x0017ë¤ç6*ì£\x000b±±vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v/ku%afGSPÊH û\x0011\x0004Å\x0010\x0008î-y1Ç á\x0004\x001e`\x000bã¡!GB
\x000evÿ\x00009\x0013æAbtï­¶ä~úÖ
\x0001øyõÞµåööûT¨Îcý\x000ci|O\x0013üßá÷×èåäðßè\x001bAâø¾\x0018þ¥\x000eûøGÓäË?Ç7Þ£êoüôøéá_ã×ß;{Sùøó\x0003qè%\x0007S°Ë°Ã´æ\x0008z\x0017å§ÿ\x0000Ä×Ëê
Ã
\x001eO\x0003O²¿Iü+Ú:§Ù]2Oaoè&ýNç5ygÄ]®(pÆ?þhÿ\x0000\x0014_3¡¬1|\x0011ûwoöGð¦
Ê[\x000elUÙ±WfÅ]ÍPÖO fÇOËâëµ\x001cþ\x000f«$â1éßÍ3ô\x0005\x001fÃ\x000b³%Åzþ\x001aZý¬ÿ\x0000S	>.üÞÿ\x0000Ìÿ\x0000(ÿ\x0000â\x000b3\x001dÍ3b®Ê¥qWeqÅ]*ìå?^L:Ô]¶ZÏ\x0018£(êê?öñ\x001bxe3eÞWÖÅz\x0012Ý±Øÿ\x0000)þ!^pM%Ñã\x001bµQEcÔ\x001f\x0000\x0003m§~jÑMØúÄB¬£â\x001e#Ä|³ÐùKSÍ³b®Ê 0¡Ü\x001e¸«`Ó|óÆÇÈ:Û[¹¤\x00125íÅÍPÿ\x0000±;}ùqõ\x0006ã¸z=Øÿ\x0000\x0010Ø\x0017y\x0013¤u\x001fHß=\x0011´¼ß6*ì®8«±´Å]»6*ìØ«³b®Ï8þlè\x0006Îè_ ýÜÀ\x0006>\x000e\x0007ñ\x0019|\x000bt\x000bÓ¼¨	â6ì~$Üª¡É§äÿ\x0000¤,ä\x0008ÀÊd«¯p)Eú2\x0013c4ÎÌêXQxÑOu¬­­fÁJìØ\x0015ÙT®*ì®8m]Â®Í»6*ìØ)]\x0002»\x0019$Be(z0 ý;b«¸\x0010Glñ\x001cñµ¬£fÈ\x001f5?ÙSÞ"ar£ñ\x0019ìÝ.ôjPGp:Hßxß1^\x001bw\x0001µ£?²Ä}Ç\x0007`B\x001f6*ìØ)]\x0002»6\x0005vlUØÒ0Ú»<÷ù³­Î.> \x001aF+âjMk\x0018ÇVè\x0007¤y:Â3\x001fÖ\x0008øÃ0¯µ\x0006tÏË»\x0001§éî\x000böGúS+å®FË\x0015ó-ÇÖ.¤?Êx£&Ù]1Hs`WfÅ]Ep«±¤S
«²°«³`¥vl
ìØ\x0015Ù±WfÅ]EpÚ»\x0019]\x0002»6\x0005vlUÙ%ò¡õ.
¹é<REô²ÕáÉÁ9ûÝ;\x001e¹\x0006\x000eÉon\x0006¦ñ_³Äÿ\x0000ã"\x000e\x000f÷Ð7ÓLÞí7¿{²"FFÚÝëÏ6Òi·h¼¥µ¯ª¤¶\x000f*Nz?²]«á\x0013§¡#p=Òîÿ\x00009Öë4Ã0£×oqè~\x0005è7\x0002Rm$4Y>ÉðaÐýø[å;ôòýÊé¨üì®×Ó¥=Ñ¾ÔDÿ\x0000<fªG÷ÍÏ¶]âDj 7\x0003Õç\x001føïÜâvn¤Ì\x0011-¤\x000f\x000cÇt»ýÒæÖìÍÚ}b3Æe÷ìß#W<uÞ±\x001cÝ1W`ËËG¯Ùuä?Q\x001fAÉ\x0010\x001dò(vlUØÒ1WcqWfÅ]\x0015vlUÙ±WfÅ]EqC±\x0014;6)·fÅ.Ï~þF¯\x001d\x0006ÛÜÉÿ\x0000\x0013l|GÚSþ\x0015?óÜg[È¼Ã³b®Í»6*ìØ«³b®Í»\x0000ê?Ýý#1óòq5?OÅØC÷TìØ«²GgýÚæÏ\x0017 îp}!Ø'-ovlUÙ±WfÅ]	ü÷ÓGë¸\x0014\x0013$r\x000f»üW,\x000fµ{1ÄÓD4Ê?mþg\x001dÂõnÍ»6*ìØ«³b®Í»6*ìØ±v<\x000cRì¼RìØ«³b®Í»6*ìp\x0018«±Ø«³b®Í»6*ìØUØ[åý[ü\x0019æK
J´è9ü>?îÉù53öGãb5Ìzù¿±âý©Ðþg\x0004«õ\x000fóyý«?-$?NÕ¼²ÿ\x0000\x0014úy\x001aïÅvWýÿ\x00003Zæþ\x0018Öï´ÊQ\x0018Ô¨\x001f&¨È{;ªñq÷|c·ÜÇÙmgæ0çT}ñÛî¢~fÁþ.òææeÞD
cr{óxÉù®ÿ\x0000N)sÛ>rÍ»6*ìØ«³a¥vX\x0015Â®ÇàWfÀ®Í»6\x0015vl»8WæGå¹¼-¨iëñõ!û_å/¿ïÔoY°ÞáÄË÷\x000fÐùÅßùÊ%Ñ?-yB!\x0004-­Ó\x001d£\x001d£ÿ\x0000'ò7ìô?
)\x001bü»üÈm\x0011û\x0013oÑXõø\x001fòâ?,¯\x0016ZØòa-l^­ÿ\x00009-ÿ\x00008Ã\x001fc}{ËÑªê@r% [Ö«ØKàzIßâ¡ÏM«\x0007\x0001\x0008¨#¡\x0019°\x000esòhZÙ9\x0014«©!\x0010FÄ\x0010z\x0011\x0003\x0012ªXü»6JÙ°«²ÀÁjì¶a\x0018,z
ÏÑ¶\x0007#A+CªÝ3²ÊOü\x0013nfrré\x001a\x000b8BØOÔ3ÚÊ\x0000_
¾ìÄ·\x0015ádò5Å\x0006Ø9«Y\x0000ógåõ¿\x0001\x0000ã³±öaßç×-©2-\x001fÌréd+|qÿ\x0000)íò9Å´­ZûòæèÃ*5øã'áaüÊQûòÒ8\x0008âgWvþfH~ÍÜ\x001f\x0003þ,ô¶«E®Â·6æ¨ßx=Áð#("H§ÞÙ½¤\x0014#ñ÷\x0018iÇ\x0002\x0010¸ìUÙ`W\x0015v>Å]\x0015vlUÙ±dì°+»\x001c\x00051bìFæålãiì¢? +iR(ÌÌ\x0011z\x0000úsÅºëj2Épÿ\x0000jF,~\Ê\x001b7½ÆÚ\x0001j\x0012ôP\x0006z³ÈºWè>\x0018È£2óoïú©ò6Zy\x0016¿wõËaÐ\x001a\x000fÛ\x001bù?Õ´»â¡à\x0018Ç#Íwcõ.£\x001e\x0006¿pÎ!ù[mëêh\x001d¿
\x001c¶|$ÎüÕ'\x000bV\x001fÌT~5þ\x0019ê +5¼«\x001dÇ\x0014[±Ø­;6)vlUØî8«±Ø­;	|Æieqÿ\x0000\x0018dÿ\x0000!!\x001b¦ï<ë¯ëÏ\x0019(Û2^ÔN{+ÊiÇOµ\x001fñJ~¬Å<ÚKÆ5c[×o×\x001c\x0008¤¿6,\x0015v]1Wd®\x001f²>C>m×ÿ\x0000{?ëËýÑ|oUýä¿¬~òË!û#ä1LÁqU3b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»>~Lÿ\x0000Ç\x0002ËýFÿ\x0000¶xnÿ\x0000ÏÞ>àýYìø/ê÷Rc7¿Þ7Ï:vh^½\x000b\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vQ4Å[\x0002¸>L\x0004+"W\x0002É/\x001c°E\x0008ømùa=ÍÝ3&\x0010C ³±å{ëþ9\x001b\x0002Y®¥ò¦ÙÎüÇæHtdº¹q\x001cQ©grv
\x0005IÍÎK,²\x0011²M\x0000\x001b0á¢b\x0010\x0006R\x0000\x0001Ô¡XiËjY\x0008UQRO@\x0006|{üãüÙ¹üÒ¿ylÑ·»\x0005\x001br#§6êOo³ÐgÒ}ØÐìÌ`P3?T¿G¸?`û/ìÜ;\x0017\x0008\x0003BòO­÷\x000fèÚñß2kí­ÊH$D§à_o\x0013î³9\x0006t¯hÇ3b®Í»6*ìõäüá¿?;8ÜÃ\x000fÔ´óÿ\x0000\x001fw ª·ücO·'Ì\x0000å×lÛé;/&§z¡Þ_8öÛÍ\x001fbÜL¼Lêp¢Gõ(ýþHY®Ö\x001fsà3Ï\x001euò}çåþ£s¢êiéÜÚÊÑÈ½ª:\x0011â¬(Ê{\x000ekrâ8¤c.aí»?_´1G63q\x0012\x001f\x001fÒ9\x0014B8qQß#Ö·RXÈÀÌ#\x0006GSFVSPA\x001b\x000eàå`ÖáÎ\x0006@c!` ò ®"¹úYÿ\x0000ZüîóßËvú£õØ¿qz´È\x0005ZAG_
ýõ\x001eÎÕþk\x0018Q´½ïÁÞØû<{\x000fW,Cè¯\x0019þéï/·«\x001e¹ÑjvíÍÄ(fÅ]\x0015vyÏþr«ò|~uyVïKy]Ä>±iµO­\x0010$(ÿ\x0000]yGþË5£¥üÎ3\x001e¼Ç¼=Ç±½»ü¬Rj\x0007Ñúëð5/½´¾\x0003Û¾~n4=jëÊwê\x0016NÐÝ[J²FãfI\x0010Ô\x001f ÇÐsÌ!36 ¿tj4ðÕã9(N&$t"B\x0003(aCÐçé¯ò\x0003óßóËËöºõ½\x0016W^\x00171\x000f÷\é´ò¯Ä¾(ÊsÕ4Z¡©øûß=¦ì)ö&ªx%È\x001b¿\x0003Èþæ\x000b\x001e/EçhÌçQÍ»6*ìóüå^¯êS½ÿ\x0000	ÜÉo{\x0012zE´Ä #FûHÅjT¯ÄHâ>Ök;F33á<öê\x001eßØÌÚlZÜ	áõ}1údG"/¿n½\x0015í\x001cºgæyÞé±gcRÌI$¤½sËI·ï\x0018ÄDP\x0014;!éûÿ\x0000/ÿ\x0000±¿ü´Ôíü·¬Lóè×R,H\x001d\x001bWsDhÉ©\x0011héöEy-\x0008<º>Êí)aÄíî|kÛÿ\x0000b±v\x0019jpÄG4\x0001¡^ \x001b¥Üyô÷\x0001»¶\x0012\x000eC¨üsïfz\x0013ñâK\x0015vlUÙ±WgæÃþs2Ùm|ý­*ô3£}-\x0012\x0013øòþÕ\x0015^ÿ\x0000Ð\x001fºýfà¿æòhj=ãÿ\x0000>ÉüÖúå­÷®[â¾·j	ý!fAì¯ÅÀ\x001fÎç:\x001eÀÔØ8ÏMÇé|þ\x000b½Á<zÈ¨xs÷â~"ÇÀ õ\x0018©G\x001f#W³¯~tK3b®Ï\x001fóóß&CEÓuÄZKÏNµ\x001fðÑ¿9Oh1\#.ã_?ì}ÿ\x0000þ\x0004:ÿ\x0000\x000fQ\x0001þ8	\x000f|\x000fêc§=	_\x0011#ÿ\x0000\x0008üÂÿ\x0000\x0002ùÚÖÞVã\x0006¤hþ\x001cßâéõ\x0015T®sCØÙü, tß©õø%v_ç»>r\x0003ÕÜ6û\x0012OÁ\x0019zÐûo¡¼ôâ6*ìØ«³b®ÏÌ'üä·G¼ã¬éª¼Q/$xÇs~õ\x0007ü\x000bò~/\x000b,ûwý/ß¾Ék¿= ÁîN8ýhz\x000fÛ\x0016EnÜÐ\x001flúaÿ\x0000>Âóç×ô½KË7Åk:\D\x000fòL8°\x001f'Jõu>Ïæ¸Ê\x001dÆþoÿ\x0000Á{³|<Øµ\x0000m8\x001f|
²_b_¨¥\x0008o\x001cúkóâ[\x0015vlUÙÌ¿1?9|¿ùQ\x0017­æ\x000bø-vª£5eoõbZÈßìTæ.}T0}d\x0007}Ù}ªíSZ|r\x0015\x0011ï¨T&ìçÎoÍ/ùùÌ\x0016ü­ü`ÒÀ¹»øWæ°¡©ß§'_u\x0019Ìê= \x0003lcâSî\x001dÿ\x0000\x0002)J¥«É_ÐÇ¹øÊCî\x0007ÞNþs÷gÎÌßùÈï4þn]oQàcþóÆ}(\x0007·¦
NÅù\x001f|æu\x001aüªF»¹\x0007Ûû#ÙM\x001fd×"_Ïªé¥uð¤|vë\x0017AC0\x001e¹[6*ìØ«³ô)ÿ\x0000>ýóqó?-`sW±{cã@ÞªýË Qì3Ò;\x0017/\x001e\x0010;\x001f§ô¿\x0015Á7EùnÑ,þÎ\x0003öÂÒ+åâçß=±×ÊPÉ\x0010J
¶à\x0011ìqH5»³ò}­Å7uYÒ\x0016)5¥Óq³+Å!£\x0003Ø+?0qÈù\x001f¸¿£:s\x001d^\x0018.3±Þ'\x001fÚÉÆ>c?L\x001f?qþrùnÇ^B=Ic\x000bp£ögOAÿ\x0000\x0004*?É#=OE¨üÆ1/½ø3Ú^Æ=«Éò¸\x001eøKxýk\x001e/EçdÌ×RÍ»6*ìØ«³b®Ï\x001fóô\x001fùH´¿ûgù=&p~Ðÿ\x0000y\x001fêþý_ÿ\x0000\x0001ÿ\x0000ñ\¿ðß÷Môï²~yó+9gß\x0013\x001cû½ÿ\x0000>ÓÔ>³äùà¯÷ZÂéÉ#o§®z\x0007`Êñ\x0011Ý#÷\x0007ãÿ\x0000ø,âá×F_ÎÅ\x001f²R	. >?£>gJø¢\x00076*ìüéÿ\x0000Îvùf/yóPpB]§¨hÈÑªì{Ñ÷\x0019æ±Ã4¯­\x0011ò~Ýÿ\x0000Æ®:ÍÄ#Î\x001cPî"DýÄ\x0014úÉ¹ öÏ\x001fæôäVlUÙ±WfÅ]\x0015v}Êÿ\x0000bÙz>T¾äÔä\x0000×¨X!\x0003ñ-÷³â±ý/Ð\x001fÿ\x0000à½[wa\x001flæj'â\x001f,úE;á\x000cØ«±\x001bÖÕ\x001aY\x000f\x0014PYè\x0000\x0015'\x00014Ê12 \x000eg`ìü¦þ`ù²o:k\x0017Ú¼¬Å®î§îvõ\x001d\x000f\x0006v\x001bggÊrHË¼ó/èeè££Á\x0010\x0002¡\x0008Çý(\x0001Æ\x0000\x001e\x0003!¼ÏûòiA~Qb{¿\x0014Ó²«Ó²É'®+NÊÅ.Í»\x001aØ±-\n(w\x001cØ«©\x0015l.lU¾9±V¸æÅ]Ç6*î9±WqÍ»lU®9±WS6*à3b­ñÍµLØ«TÏptÏ@/ÒzW¦Eo.>°äö\x001b\x000cÚâ\x0008uYgÄ_hþ]y_ü/bâIGæFËþÄmó®)§ÛúïSÐnr\x0019§Â=ìðCû¯Ío4ìL1\x001aMqT_\x0010¿´ßÃéÉ6k]ä<Ø«³b®Í»6*ìj_Þ\x001fÍ\x000f¥Öçú]þN­4÷O×3!Æz\x001aZýôæ«?ÔXIñoæïüvn>Qÿ\x0000Ä\x0017\x0004f;\x0017æÅ]\x0015vlUÙ±WfÅ]\x000bóCÉW'Sµ_ÿ\x0000|£±þïï¾]	tlz\x001fu¿P}VS¸û\x0004÷öþsùiçS©\x0001§]\x001fÞ¨ýÛ\x001fÚQû'Ü\x000e##8¬\x0007Í\x001a\x0017Õ¹|\x0004üCÀÿ\x0000#[[
ÊÅ]ó_@úý²ÞÆ>8~×º\x001fèwûòÈ\x0016q,¿Ê\x001aÕå07Ù~ë\x000fëO!yüAdæ²ÇðIó\x001d\x000fÒ?FB!IgtïÑÓ\x0003ào~G·ÑL\x00146*ìØ«³b®ÆñÅ]LUÙX«°·WÒbÖà{YÅQÇÒ\x000fb=Æ\x0010i Ò*Êñì$\x0012ÆhAÿ\x00001d²oËíK¸¿Æ{ýÛ|¿ê
ÕÄ\x001e­pùÖ«Ô¯³\x000eßÃ=V$\x0001pEGÈæ;CÈ\x0019x\x001e£\x001dµ\x0015vl\x0014®Í]\x0002»\x001aF\x001bWeS$®ÊÅ]\x0015vl\x0014®Ï yÞ×êzÊÅû-ÿ\x0000eG\x001eOiÐ%õ­b?äÓîÛ;ïå}ç×4ÈÔõ>ãQø\x001c£'6óy× ônØÿ\x00000
÷ìÎW!l\x0018Þ7
»6*ìØ«³`¥vl»6*ìóæ$\x000b}­G\x000ca
u£\x001a\x001a}ù\x000eMÐäôï-Hmì^Eê\x000bó\x0003=
mh¶1¬1
"\x0000ª=ÙE´¼ÖiLì]·$Ôý8®\x0015SÍÙ°+³`WfÅ]F\x001bWc:dÙ±WfÈÒ»6\x0005vlUÙ±WfÂ®Æ\x0011L*ì¬i]"®Á\x0016Me"Li\x00180ù\ ÒA§aß,ÖÒòC\x0017÷RÒXÿ\x0000Ôr\x001fuiôd¦7e1EØBfb~\x0010j\x0007¿L\x0007bX\x0015ØÇA !A\x0014 ÷\x00198ÈÄØæ7
Ø<w\x0019Ã\x001fË\x0006\x0019_ËEø	\Üé\x0013\x0013ONànÐ×°§úÜO|ú\x0013°;N=«UÄ6ó¯ºAå»B'I1<áÈ;áßïÜÏíu\x0011rî*8N¿Ì½èÎäß1\x001f1Ú%^\x0017\x0011±xÎÅd]§¿\ñÜì³ÙÙ?ï\x001fwwÃÒb±¿\x0013Õôÿ\x0000ÑÒñ]Ñ¾$>*zd¯9æÔ¯$6ñÛ\x0019\x0007íÛº¸ÿ\x0000Qþ\x0016û)úr|Ã>cÜìd\x0018;6*ìØ«²®*ìf*ìØ«³b®Í»6*ìØ«²®*ìaÛ\x00164ìØ¥Ùô\x001bòU8h\x0016êçþ\x001d²\x0012|;Ú#z©ûÇûìê5Þ\x000by»v^\x0014»6*ìØ«³b®Í»6*ì\x0005¨v~c(ÏÉÅÔý.Â\x000c×:fÅ]+/îÇù÷Í/¤;?Ò\x001d²ç!Ù±WfÅ]\x0015vx»þrJEmNÝGÚ\x0016Â¿Kµ?QË"ú×²\x0000ø2?Óý\x0001Ùç/vìØ«³b®Í»6*ìØ¡Ù±C±àS\x0014»/\x0014»6*ìØ«³b®Í»\x001e\x0006*ì¼UÙ±WfÅ]\x0015vl*ì°+]?<éÍ¨éòÿ\x0000¼	\x0010÷\x000c\x0010§ÝÙãÇ\x0013n>xqDÛÜ¿ç\x001c|Ö¾Ró5qpÆÚ`z\x0018ç\x001c\x0008?I\x0007èÉÇænª5»M\x0007ÍÉÒe\x0016óøÊ»WýY\x0003gö\x001c¿-xCcá·Ü_+ön_ÔeÀz\x001e!ð5÷\x0010ö_-y@Å\x001fü&ï\x0000{»Aß³Woõâ+ºg¦¾¸ø£6*ìØ«³d©]\x0003\x001bWc²*ìØ«³b®ÍÙ²Jìp\x0018-]é]só\x0003òÉu®W\x0000-ÇVNOèß¯1²áâÜ8Ù0ñn\x001fnÎ7ÿ\x0000ÎTËäb']¥Ó\x0016)ÄöþÇ»EíÕ?gm²#ùyùÚ\x0013
/S¨\x001e(íÖ3ü­þOüGåÒ¬Yxv-x²ðì^Õÿ\x00009+ÿ\x00008Û\x001fæ\x000cmæ¯+ð{A$±GB·+Jú±·©N£ýÙþ·Úô  æ¿.Ý\x000cd«\x0002\x00084 ìA\x0019xUnl*ì°0\x0015v?\x0002»\x0008<Ówõ\x000b\x001b{2(?^N!!1Ò`úÅÄiâÃ<µå\x001b_­_ÛGJÖTû©ýY.ND¹=wZÒ¶¿È?ÙìÅ§\x0019â9°«³b®ÈÇ¼­\x0017`1=\x0004S\x001b÷Sý\x000fq¦@Òk¤jÏ¤ÉÍwSöÄ\á¾BÖeò¶ lçÙ\x001dý9\x0014önýÿ\x0000[!a¶BÙ÷,V·õãÝrSâ;ôîPÐòÌ°1WcñWfÅ]\x0016TìØ«±ÁqE»\x001d»6)vsÏÌýOô~È
\x001af\x0008>][ð\x00198
Ù\x0006Gåk_¬\=\x0010\x0016þç]\x0007M:½Ô6ÃöÝAùWÃ/&¤ê\x0017?SåþU'éíÐ
\x0017aÐtÌVx¡5ß9æÍÇ£§pþyP}Õ?Ã,6qdþQÍ|\x0014á¯É»^w3ËÙc\x0003éfþÌÓ$÷ÎÒ(ÓÅûöç¡²·fÅ³b®Ç\x0001\x001dÅiÙ±K²é\x001d¾f\x0014±¹ÿ\x0000/ÿ\x0000\x00118BQÚ`¬ñÿ\x0000®¿¯<d:fSkÙûç³<ªkamÿ\x0000\x0018Sõf)j/\x0019Õ¿ývýx}P\x0019tÅ]\x0002«²ñWd¢\x001f²>C>m×ÿ\x0000{?ëËýÑ|oUýä¿­/¼²È~Èù\x000cS0\ULØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Ï¤_?ñÀ²ÿ\x0000Q¿âm!Û¿ã3÷¸?V{%þ#ú§ýÔÍï÷óÎ\x0017¯BæÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±We\x0013LU°+;äÀA(Jà)fã±L ·å·7tÌ¨A\x0016Èì¬9dZûPãß6\x0018ñ1%iºW*m\x001do^Å\x001aYQ\x0014U\x0000\x000f\x0012NÃ6ø4æd\x0000,@n°²\x0018Iä\x0000²~OEÓt¥sz*¤ì\x0007Ó<ÿ\x0000ç ¿?¬¼Õg&¥\x0016;/©0Ú2\x0014××v©\x0003z\x0001á\ö_f½É¦Í\x0003Që¸­ûö'Ø¼ú<ÑÕj*4\x000f\x000c9Êä*ÏAÏÞÃ¼ëç\x001bkv°³«#ôZ\x0003Z\x000eçõgsÔzxþlUÙ±Wguüÿ\x0000qó\x001fçÁ4KSõpÔîZ¤	½
^\x0011\x001fÊÛ6\x001a]\x0006MIô»Ï'íïjô½\x001bÍ?WLqõLü:{Í\x0005\x0019n\x0016\x001e§èÏ²\x001fó\üªôïuU\x001a®¢´>¤ËûÛþ+q·óIÍ»=3¶Ñö6<\x001bËÔ|ù|=£ÿ\x0000F«µn\x0018¿sº'ÖGô¥ú#_\x0014¦kÖa°Ïs*\x0000\x0001@:\x000cß¾HM óå¯üügþq÷ôõ¢ùëL·\x0016ª±ß*Þ
Ñ%Û©-ÿ\x0000\x0015z&r]¹¢â\x001e,y«ÝÞý\x0007ÿ\x0000\x0002¿iü	\x000eSé2ÄOIõùÜÇ½2°ïÓ>/g\x000eýNg°ç
ÿ\x0000>?åJy4¼~:f¡Æ\x000bª	?ºý\x001a7ù\x000cÝÀÍ×dë?-¦[\x001fÖùü\x0010=þYÒ\x0013\x0001ûÜW8yÿ\x0000:?\x0011ËÌ\x0004-Ü>²íÔtÏÑR°aQ¸9éoÄ\\x001c¼UÙ±WfÅ]/ùÎÉ¿ùU^kêÕ8Øêuº²1ýôcäÿ\x0000\x0010\x001dÔvÏ6í/Ê[Òý¯ÿ\x0000\x0003ÞþTÑF27\x000fîåÞb>òÛÞ
{g/¨´=FØkÿ\x00008)ùýÿ\x0000*_\x001aUüt½Q)*~\x0018§é\x0014¾Â§å`Çì\x000ccë/>\x0013ôËoqè\ø#{3ü­¦ñqÞá\x0006CúPþ(þç·V¯ õV£¨ÏÐFz3ñG\x0015vlUÙ±Wgç·þsò\x0013þT÷[P°©\x001a\x000f9kYb\x001e\x0000\x0013ÍGòµ\x0007ÙÏ7í}\x0017åçcéãßÕûOþ\x0007^Òÿ\x0000+é|<òá¨ÊùÊ?Ã/²óO,çõV¨Ï\x0013+Ï%$\x0011¸#¨#¾hêÄZ3?X\x001eD¼QÒln.AY¤µ¤\x0007¨fK~9ëøI1\x0004÷\x000f¹üçí\x001cqÇ$cÈN@{\x0019}ùä¯.uËsb®Í»?6_ó÷\x0002ãÏúÑ^Ó¢ý"\x0018ÁÏ0íSy¥ïý\x0001û«Ø\x0018ðöf\x000fê¶ROí\x0005\x0010d\x0017þq÷ó5¿(<Í§ë Ò(¦\x000b8ñO_¹Iaî\x0006cèµ\x001fÈ%ç¿¸»iû v¾&\x000e¦7\x001fëÇÕ\x001f´*O\x001fª¥sõ\x0005\x0004ër$d2°\x0005HÜ\x0010w\x0004g«\x0003oÀ\x0012£ÌlXçLW\x000b\x0017g\x000fÿ\x0000üº?SÔôh×Ò@Ï\x0000¥O­\x0017ï#\x0003Ýxý9®Áãã|¶÷Þ³ÙNÔþKÖâÌMDH	V^ò\x0006Õ­äô\x001cüÌhº´Þ[»úÜÞT\x0008Ø«ÆÁÒ\x0008Ï,\x0008#¡·ï]F\x0008êqÊ\x0012Þ2÷HS!#¦~«¼æ¨¼ñ¥Ùë\x0016ÔôîíâhkNj\x001aA4ú3×0ä\x0019b$:_ÎîÑÑËExeÎ\x0012Où¦Ó¯\x0002GJrç^·6*ìØ«³á/üü¯Ê_¡¼Ùoª(\x0001/¬ã$,Q¿áLyçý½ xû¯?àK®ñ´RÄyãÈÒÌ	\x000f·9ÓÚ«O\x0003ëþp+Ï¿à<ZE#R\x001dB9,ßæôxþU\x0010|ÌnÆÍáæ\x001fÒôþ>.óþ	]ùÞÎ\x001cñ\x0011´¿ØÈª^§4>Ûçè=%ø"Í»6*ìø\x001dÿ\x0000?!ÐEyØ]\x0001µÝ¼ÿ\x0000â#è\x0011¯Þ3Ï;v\x001c9o¾ þÐýÿ\x0000\x0002OÙü?ÌË8ü\x0008ÿ\x0000ß\x0014îÁªð9àLç_eFæÅ]\x0015vlUÙ±Wg×ùõÇöÖt6¯û¢å?á£ø×;?g²}Q÷\x001fÐüÑÿ\x0000\x0006-\x0017÷\x0019ÿ\x0000­\x0003öH~¯R^>ºçdüÖæÅ]ÿ\x0000ùÉ-\x001fô\x0017õËjP
FåÀðY$2(ûgkãÃcúGí6ýÿ\x0000ì\x001fA§ûT\x0007Æ1\x0011ý\x000cÜòEù\x000cöüûWóô\x0016©säë·¤7Êgµ\x0007 1ñ¨ÿ\x0000üã\x001dÎo{\x0007UÃ#õÜ{ÃåðYì/\x001f\x000cu\x001e¬~ÿ\x0000RGcþl¿Ý!5\x0008ª9ÝsínwOÊFlUÙ±WfÅ]\x0015v|7ÿ\x0000ÊÇÍzz\x0013ð-\x0008\x001e\x0004ÜOSôÐ}ÙÀû@x?«úKõ·ü\x0008\x0007ø\x0016CþÜÜcýiÆöOÏ>mç0ûªaSÿ\x0000çØßk¦ê:'`\x0005ÔbêÜ\x0013ÖH¾\x0019\x0014{´d7Ê6Î·ÙýEHã=w\x001f\x0007çø.öAÉ\x001eª#è>\x001cÿ\x0000«=â~\x0007oóÝF:Þ\x001bgÙÜî\x001fÒØ«³Îó_óZOüäUÛß\x0005ä\x0001¾­v\x0017µ*¬¦ã4Ý	\x001e*TïÍv:±Gb9\x0017·ö[ÚÌÞÏd2Çê«\x0019å*ê;¥çóµx.\x000c\x0007n\x0019ñãÏ¿ó\x001evòs¿Õ-ãÔ`\x001ffKi\x0007"?ã\x001bñp|@\x0004W¡9Åfì\¸ù\x000e!äý9Ù¿ðMìý`\x001cr8¥ÔL\x001aÿ\x0000M\x001b	ª_#õÛç\x001bSÿ\x0000|óvH¹Ñu\x0005ã×ý\x001aCÔÓöAÍ|´9cÎ2ù\x0017°ÃíF7Ó\x0011ÿ\x0000>#ï*âu=\x0008Ä,?!<×©ÓÐÑµ\x0006© ÿ\x0000Foô¨Á\x001d\x0016Ir¾E_i´X¾¬øùñýn3¨î0O?ç\x001f|Ñù`uoMÒÐHóO^#yvðÃE\x0014x¥\x0012\x0007^Ú}\x001e¿/,g:&£gaçUÕË:¹¢ãõ*¹÷Ûþ}Åcõ_#h\x0007«}rÛw§\x0014ßþ\x0007=\x0013°£X}ä¿\x001aÿ\x0000ÁW'\x0017h×óqÀ}òý)%ùøþöÎñä\x0016lUÙÄ¿ç$|Õþ\x000bò~±¨\x0003FK)Q\x000fùRMiïVÌ
~O\x000f\x0014ûvz¿e4×`ÇÐä>è#÷+[¯7\x0003ß?0\x0003<¥ûýfÅ.Í»6*ìØ«³b®Í»\x0018Mq`¼
eb­æÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v{?R¸ôêVzF\x0008q\x001fsùo|#ÞÍ)ü¯ú~øO(¬6ôvð-û+ü~fÉÖ¾ºf\x0008\x000b1 \x001b{\x000cÙAõt\x0003¹Üæ«$øËµÇ\x000e\x0000øÏ~e>i¾à\x001fÝ¯Á\x0010ÿ\x0000$wúzà¼©µfÅ]\x0015vlUÙ±WdcP5ý\x001f«6~Yê}ùM\x000f££ÁþQvûØÿ\x0000L\x00058ïGÃKQD\x001fNj³ýE\x0012\x000f¿5¥õub£îE\x0018#1ØSÏ3b´ìØ¡Ù±WfÅ]\x0015v2Xe(à\x0015`A\x0007¡\x0007¨ÅW#\x0014!Än\x000eyC]Ò¥ò.¢¬ñW\x0012D|V½>²s \x001e Þ7zåÚëöÄ\x001f´W\x0003ãüsÕVi\x001aÏ\x0011ª:Sìs\x001d¡äÓBmØ£lT~\x0011©b3@·
Ñ¸ª° \x0010v8ªäs\x0019\x000c»\x0010j3Ï\x001a\x000c­ù«µ§÷2\x0010µ=8°ßGCôåÇÔ\x001bNáé\x001a\x000f1Yí ¯Ò>Ðþ9èKSÍsb®Í»6*ìØ«³b®Ê¥qWeqÅ]tüâ¶\x0011ÝÅ êñPÿ\x0000±'úåÐnÒ¼)h]|\x001fõí>S¸7V\x0016Ò\x001e¦%ü\x0005?U.mEë\x0011z7\x0012(þsúòA	nlUÙ±WfÅ]\x0005+³`¥vl
ìi\6®ÆL»6*ìó'æÍÕµ\x001fS´±«}#á?«/&ørz·¦õ-¸ÿ\x0000+\x0011÷ï¿É¹yZNË(?zéÈ\x0018MyÝ)27~¢s°e-l+6\x0005v7JÕØÜ*ìØ«³b®Í¥vyÏ³W[\x001fä´#õ\x001cÉÙº<§åä¥÷\x000füsÓG®b´¼³\x001aEp«±¤S
»+
»6
WfÈ«³b®ÍJáWc\x0008Ãjì¬*ìØ)]"®Í»6*ìØ«±¤d­]ÆÙ°+²XÃôÎ\x0008Þ[3B;\Ô\x001fö\x000eiòaæ=ÍÇ»îvDò¶·fÅ]\x0015vDüéåóæ\x001bFH\x0019ã"H\x001cuY\x0013u þ\x0019Ðö\x0017i\x001d\x0006xËøO¦^ãú¹´å îh÷ÿ\x0000P1Ý\x001báqâ§®FWT\x0012\Øy0\x0012=]\x000c\x00176\x000by\x000eÅ©Û?\x001cõßk4\x0003W§ñ\x0007Õ\x000fPý?gÜòÝàôçø
Çþ\x0017._&A}iÎ)mí\x0001å\x0019ñöú3§gS×°¼ù`f{~ÓC"Sß%üTd¢Î\x000eÂh`õ£w\x001f±Ä4ÀÆr(vlUÙ±We\x0011\UØÒ)»+\x0015vlUÙ±WfÅ]³W$\x0015ØÜ*ìpÈ »>þN¯\x001d\x0006Ëþ1÷»\x001c®Oû@oUßú\x0003³¢ñþHýg)\x0007Ìêø\x000fÒì[,nvlUÙ±WfÅ]\x0015vlUØ\x0012üV3ôe\x0019¾\x001bQô»#Ù®u\x000eÍ»$6&±§6X~o§ú]òç%Ù±Wc9ü\}«½é\x0016õäì~I³Áß·>¾»"ÿ\x0000¾â\x000e_Ç,\x000f´{-\x000e\x001d0=òûkô;8Æ\x0017­vlUÙ±WfÅ]\x0014;6(v<
beâfÅ]\x0015vlUÙ±WcÀ¦*ì¼UÙ±WfÅ]\x0015vl4®Ë\x0002¸UØü
ìk(pTô;\x001c\x0015h"Õ­çkWYc4e!ø\x0010j\x000e\x0015h\x0016§[ò\x001e©¥õM¸£\x001e\x0001\x0018J¿o£<ÇV?/­ºH\x0000~Ø¾G­\x001fí\x0018K¤À\x0007íê~ê:ÂØþ`hZþÂ
fÊßÕð&XÌ.>þ?N\x0008Ò¯?HÛÅp?Ý«}à\x001cô¸\x001b\x0003ÜúÔ
øGÏ\x001a\x001føgT¼Ó§Õîe|È\x001fÁùc6-Â®ÇL
ì¼
ìØ«³b®Í¥vl*ìx\x0019\x001bWeâ®ÍØà0Z»9\x000fæ×Zµ\x000be¥Äb¬\x0000þñG_ö@tñéÙ±ñn9¸ÙqÞáö§üâüä\x001c¾H»Ëº¬Ón\x001fnÇýçº\x0010OHØìÃ 'I(|ëë¨Ò®â\x001bÂÄõ\x001dÓèíí·l\x000c\x000fÁ\x000c\x000b9ÿ\x0000Ìüú7iQ\x0013/cQö\ì& ìÝ\x001fÁ¨ß´s½fküòÇ\x0001ÕØìi]
» \x001f\x0013ý_K;"ýæ¿Ã%
Ë8sdSÔ»Sà\x0018þ\x0019Åÿ\x0000, \x0013j°×öC·Ü§.&Ùòg^j£û\x001fz¯1ÜwæÅ]\x0006*ì~*ìòq¬JÝ)*\x001føÌòn'®è¼²QþK\x000f×¯\x0014;ùÒò")»6*ìØ²v8.(·c±C³bvlRì°+»<ÿ\x0000ùÅêÜCj:"\x0016#ÝßË \x0019ÅèL¶ã\x001bÊh>Cý¼\x0001ùI§ýjù§#h£'émá\3)'Í÷\x001e\x0001\x0007í·à7ÏI\¡­æYÅ¿9§ã\x0015´^.í÷\x0000?[Y¿£«Èþ\x0000\x000f¼ÿ\x0000f\x0008ü´áo<çö¤
?Øÿ\x0000\x001c\x0013LyÒnRG\x001f÷ìÎÉ±axà1E».«²ñK³b®ÇLPì¼UØIæQ[\x001bøÂÿ\x0000ñ\x0013%\x001d¦\x001aO\x001fúëúóÆ6Ì¦×³\x001cö/Ï=:Ôÿ\x0000Å)ú³\x001a\ÚÇuÆâQþ[~¼Ò\x0015Ksb®Í»\x001c\x0006*ìEöGÈgÍºÿ\x0000ïgýyº/ê¿¼õ¥÷Y\x000fÙ\x001f!f\x000b©\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙôògþ8\x0016_ê7üM³Ä;wüf~ñ÷\x0007êÏd¿ÄqTÿ\x0000º\x0019½þñ¾yÓ³Bõè\Ø«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»\x001aZiW\x0005® ï\x0001\x0016*à\x0019§\x000bÆ,S[{RpêóeÂ\x0008%Øéü²'¨ñ®ù±Ç,ëLÒ9Slàÿ\x0000\x001fúåÄ\x001eµü¼`}8Wy\x001cû\x000eÃÅ\x0000ùíodv&^Ð@mÖGé\x001fç¢ìOgóöÌøpÕ3´cï? nÊîníü·\x001f©rw?e\x0007Úoþ=3å÷æçF¥ù)\x0017
éZT·Bx\x0002ÇöÛÜì;\x0001õÙ\x001d³G¤\ºÌóøw\x0007ê?g½ÁØ±¸,êÉ!¿Ãù£ðKÉ<ÃæÉõóÅ\x0008HÇOñ?æ3çHö¬_6*ìØ«³Ö\x001fó¾]ò¿¼Ñ\x000eç\x0008Ì©0¥¢ã\x000b\\x0003UI@¡`ãd\x001c¢°nTÍÇeC\x001eL9:òî¿7Î=½Õk49dÒ\x001a1þðr\x0010êcÝ]vºÜU!®ÙjN~´Í.
\x0016\x0014µ³!5
Æ¡Q@è\x0015@\x0000\x000fz\b"(l\x001fræi\x0019LHîI6OÄ¤$×s²M-fÅ]õ\x001d:\x001d^\x0019-.dTd\x0018UYXQ\x0002
22¢Û,±HN&¥\x0012\x0008#¡\x001bÁ¦ã?4ßóßÓ~Bù}*l¥ýõ£BÇe¯óFjò
Ñywhi\x000ef=9äýßì´QíÝ,ríÇ\x001fNH÷Lu÷Kùtd\x0016ózë^ýóÏ\x0019­{u|ý\x0003ÿ\x0000Î\x0008~|\x000fÍ.*ùùjZPH¤©ø¤_}Fÿ\x0000)j~ÐÏFì}g\x000e\x0013õGoGâÿ\x0000ø#û7üªñ`?uä?£?âé\x001eÿ\x0000$ö\x001fIª:\x001c÷.oß$AæÅ]\x0015vxóþsòwþV×ç{då}§VêÞ¬Á\x0007ïc\x001fëÇR\x0007vU\x0019¥í}/×8î?Ké¿ð=íßä­lDC/îçÝ¹ôû	EYËé6ý\x000eÙùÖ\x0007<Ñûu>ÏÐ¿üà÷çïü®_/-óòÕ4ÀÏSñI\x001d)\x0014Þõ\x0003ÿ\x0000µ?hg¤vF·ó\x0010£õGcúß¿àì×ò>«\x0003÷YnQî¿?m#ä^Aé5GCÕÍëåHLØ«³b®Î!ÿ\x00009\x000fù5oùéåë\x000ej,Äz²ýÜè\x000f\x0006ù\x001aò\x0019»æ\x0006»J501ëÌ{Þ³Ù~Þaê¡}?Lãüè\x001e¬y­\x0004¾rûóâ/üã7üâ¶§ù³æ\x0013i¨ÀðiúuÇ\x001dBG\x0014\x001c£mí×ùÈ¡§ÙOþÏ.\x000f³û:YçDPõ|:?X{]í\x001eÊÒñcL±¼@wH}g¸\x000f´íßG\x0017\x0017"%Û©é¢h£\x0010¨D\x0014U\x0000\x0000;\x0001Ó=/ñ!6l¤8üPìØ«²ã¹Å]?Î¿2ÿ\x0000<Í«j`òYï®\x0019\x000fz!ÿ\x0000\x0003<WÄÉ)w÷¿¡^Ïi?'¤Ã\x000e8\x0003ïá\x0017ö²HWíÃ1\x001eS?C¿ó?ÿ\x0000ò³<om;r»Ó\x0008´}Ê ýË\x001ft_r='±õ>6 \x000f8ìCñ7ü\x0011û\x0017ù7])DT3~ò>ò}Cý6ÿ\x0000\x0014ö/MýùìüÞ>ZÍ»?:ó¿ÿ\x0000ò©üÛpöéÆËQ­Ý½\x0007Â\x000bÞ ÿ\x0000VJ;+(Ï4ím/×)n?Köïü\x000f;wùWE\x0011#sÅû¹='ã\x001f´\x0014úÎ_U}ÆÙÛ¿ç\x001e¿ç?!üòõ·u\x001d>{·µ2\x0004&U\x001e9eZ2³Z|©ú\x001eÚ\x001ax\x0008\x0010Mu·ö£þ\x0006í}Tõ\x0018òF\x0002uq1'Ô\x0005\x0013±ëJ3ØúÍÈ\x001aW=³ù\x001bÿ\x00009Ó¤þxkQyzÚÆæÖYRFI$xÙIy\x0015øMj@4ùf÷IÛ\x0011ÔÏ\x0002/½òh¿àu±4çQ,\x0000\x000f¨ÕîÈÂ9T\x001c÷.oß$AfÅ]1?çç¾Qúþ¦ëJ7µ»hÿ\x0000:TÃG§´\x0018®\x0011q¯ö>ûÿ\x0000\x0002\x001dw©Ëÿ\x0000\x001c\x0004¾\x0007õI1ÓGÏþ\×%òÅí¾¥nHÚhåB?6\x000c?Vq\x0018çÀA\x001d
¿QêôÃSXåÊq1>é
Mò\x00149úµò¶¿\x0017¬-µ;r\x000cw0Ç2j)"\x001f¯={\x001cøÀê-üëÖi$±K$bÍ4Æx<0û,pÖæÅ]\x001e?çé:\x0017\x000b\x0017SQö£¹ú¥\x001dâMW´0Þ2÷¹úoþ\x0003º|^pø\x0003÷\x0004×MmÏYÇ¿H&y±Wc\x000c	>\x0000W\x0016$Ó°ÛRòõîÍyo41Ë_M¤^¯\x0012À\x0006¥Eiã\x000cy>\x000e>\x001dV<ÄJ2#"ûèìÐ`za>AÊo=»ÿ\x0000>ùó_øoÏVöìÔKè'·#±n>ªþ1Ð|ó}Ø83\x0001Þ\x0008ý?¡òoø'è¿1ÙÒçQÂøOû¤\x001dòòO~óÑßR<Ø«³óÿ\x00009×¤\x001d+ó\x0003T4 êòöPF\x000fü2ó>Ø\x000eiyÑû\x0003öÿ\x0000ü\x000e3ø½ú<qùNGî)õª\x000có/<ÑsäBÛX±n7\x0016$ÑòCìz\x001flÕâÈqÈHs\x0006Þ÷]£·\x0014ðÏxÎ&'â)\x0010Ê\x001cP÷ÏÔÏåï-ÿ\x00001t=rÈÖ\x001b¸\x0012Uöä7Sî¦ª}ÆzÎ\x000c£4DQoç·iö|»?<ðOêOÃ¯Ç\x001c=2TöÉ^ë\x0016fÅ]\x0015vlUÙðÓþ~yÿ\x0000)mý²£ÿ\x0000¨à} þôT}åúßþ\x0004\x001fâY?áòÿ\x0000¦xÓ;ì|ÞÎa÷DÃ'\x001f|¹ü±Ölõû/ïm&Y\x0000­9(ÙÐû:§Øåú|Ç\x000cÄBê;_³aÚx'|§\x0013\x001fqè~\x0007u'¨
ùúòwí|õ§[k\x001a{s·º%ÿ\x0000â´>ã¡ð ç¬âÈ2ÄHr"ßÏ~z\x001c³ÃT¡#\x0013ð,qÔ¡ öÉ.Zà­Í»6*ìØ«³b®Ï¿óòûñoå\x000bx6ýî¡\x0017}þ\x0018ä;g5Ûò¬@H}ÅöÏø\x0012ââ×J]Ø¥öÊ(ý<|uöÏ¹çï×éÎ~ç\x0001-~­ù§tøäºm½î$ÏJìaXcñûËñ'ü\x0012§ÅÚy|1þÂ)\x0015ñ¬èÏeæíòô&lUÙçÏùÉÏÊKïÎÿ\x0000.KåÝ2â+i&&w1R·.?
Nä\x000f¢¹­í
1ÔÃ\x0010,oiìmãì]PÔd¦#\x0019\x0000#Wr\x0015{üUí¥\x0010·#¾|ó\x0007üû§Ï\x001a?&¶KKµ\x001d=)Â±ú$TýyÆO°óG\x001fqýoÒÚ_ø)ö~o¨Î\x001fÖö&I¢ß¡ëQ'ÌóÞuò &óD½ êb×\x001f|%ó_³òãç\x0013ð\x0017÷[×é=±ìýWÑ\x001fùÒàÿ\x0000wÂ¬·(Ý\x0008Î'¦Ï¥9ê7ÇUu*Ãæ\x0018\x0003\x00127¬Ç9EÄ;Á\x0007îV\x0006½0\x0016\x0006æób®Í»)±Alc1akób¶ìØ­»>ÿ\x0000Î6ÿ\x0000Î\x0001Ý~néñy_º{\x001b\x0019Ç+x£@ÓÊ¤%þ\x0018Ñº¡£\x001f\x0015\x0002OK ìS<s4\x000f!Ô¾%í_ü\x0012áÙ9N\x000c\x0010\x00192GiÊF¡\x0013Ý¶ò#¯*KîoÄGõGý\x0012ûË_õrÔ¾ø?êmÿ\x0000Ðþ?çKìýOÿ\x0000ÉßÕÿ\x0000©aÿ\x0000gÿ\x0000\x0014ý&Þ\x00037ý\x0012ûË_õrÔ¾ø?ê?è\x001fó¥ö~¥ÿ\x0000¿«ÿ\x0000RÃþÏþ)ß¤ÛÀfÿ\x0000¢_ykþ®Zß\x0007ýRÇý\x000fãþt¾ÏÔ¿òwõêXÙÿ\x0000Å;ôx\x000cßôKï-ÕËRûàÿ\x0000ªXÿ\x0000¡üÎÙúþNþ¯ýK\x000fû?ø§~o\x0001þ}å¯ú¹j_|\x001fõK\x001fô?ùÒû?Rÿ\x0000ÉßÕÿ\x0000©aÿ\x0000gÿ\x0000\x0014ïÒmà3Ñ/¼µÿ\x0000W-Kïþ©cþñÿ\x0000:_gê_ù;ú¿õ,?ìÿ\x0000âúM¼\x0006Büóÿ\x0000>¼´\x0016¬þ[Õ&úÚV;µC\x001bËÎ%RëqQÙá^\x001bóý×³¿à¿>05\x0018cÀydñ\x000f:7î°½53_mí&<ßå\x001bï!_Ï£êÐ´\x0017vÎRXÚÔP\x0008!!	\x00078ü¸)\x0018ÈQ\x001cß£t:ìzìQÍBP¸øù5G\x0012
#yS»6*ìØ«³b®ÏZ]Oõ-Û¶z¶8p
*rOÛì?$ùe|©dÛzâø¹ë÷t\x0018#N·õè2¼óá\x0015ÞÙ\x001cFûæ÷¿CY}R3In*¾á\x0007Ú?OO¿$­vOsb®Í»6*ìØ«³b®È¥áå#|ókTCªÊnEö×åí¿ÕtEñ7ü\x0011-üp6ZÒÌ®\x001cÀ´A_\x000cÓå7#ïc#»á\x000f>Ü½RíÇOYÇÜiü1^9R-eS\x0015vV)vlPìØ¢\x0015§fÅ\x000eÈ¼´¾gµhiûÕø£>\x000c;|¡ÉDÓ(MôMLés\x0007ý³\x000foìÈ?å?9ÆÚ\ÆFI@|+ñ/û\x0013êÊa?ó~ÅÔe¨\x001bçØý#;&VÖÂsb®ÎGù· ývÙo£\x001f\x001c&Oä?Ðþ¼²\x0005K1ò~¡èJ`o²ý>cúä«Èzÿ\x0000øÅ$cY\x0013àæ:\x001f¤o¢
J|Á§þ}øä¦Libe\x0011»\x001b»6*ìØ«³b®Í»8'ç:þòÙ¿Éqø·\x001bn7¡y ü2q/È_\x0016mÿ\x0000\x0018ÿ\x0000ÈK	sbÞ`\x0014ºýlÓ"Å&ÊÅ]\x0015vlUÙ±WfÅ]\x0002»6
WfÀ®Ê+ÕÙÂ¿9íú4Ýþ5ýG/Æ[q³ÿ\x0000#KýêªXÊüZþ1øÇ"äoÏ)ýÓ¬?Vw<©©çù°R»6\x0005vjW\x0015v06®ÊÂ®Í»<­çi=mjJv1÷q\x0019\x001eMñäõÍ
xX/ú¬^z¨õÌVå`WfÅ]#
«±¹%vlUÙ²4®Í]\x0015vQ\x0015ÃjìfI]\x0015vl+³`WfÅ]\x0015vQ\x0015Â®ÆL*ì\x001f¥êM¥J&@\x000eÅYOFV\x0014e>Ä\A¦Q4ì	8PÇÓ¯\x001aí^´÷ÀX»\x0012À®Í»6*ìãwpúZ6·j½l5\x000b{ÈÉ\x0012\x0011Èü³é>ÇÉù½\x001cx·¸\x0000~\/\x0015«\x001e\x0016³\x001cñÆP?
Ã>µVKg?îØ6÷¥FuèßÖPã£\x0000~ýóç)ÇF=Ä{@mºð$xdÊÂþßÞU\x001fðFÇ#\x001emæ\x0016à\x001eÔH/¢?³\x0003°ù£©Ä\x000ei\x0003¹Ù\x0016ÊÚÝ\x0015vlUÙ±WfÅ]#\x0015vV*ìØ«²\x0015v!WfÅ]\UÙôcòxèV#þ)\x001f¬å2|\x001f·Mêr[ô\x0007dÞ6¬Ì?É\x0019\x0013ê>ç¹pv\x000cËÜ§fÅ]\x0015vlUÙ±WfÅ]o»?çß)Ëô\x001fQôdw5®Ù±Waþk\x0018ùØàäí´ßK°n^å;6*ì\x0003\x001bò¦cÄÜ\x0019\Ï¹Ø;2\x001cÇgÏ\x000fÍùþ±¯^\x0007Uÿ\x0000E\x0019h}×°#Ã¥Çî'æK³bô\x000eÍ»6*ìØ¡Ù±C±àS\x0014»/\x0014»6*ìØ«³b®Ì1WcÀ¦*ì¼UÙ±WfÅ]\x0015vl +²À®\x001bWcò*ìØ«³b®Á_Ð\x001bæm<ý!W§»Äãøg{F82ãtÞ\x000bäþÕ\x000f6\x0019÷Hýñ/²¼Í~\x0017HòN¨>Ô/$DûCpA?/¥õ´«R{F\x0007ÜHþ\x0019èwêX~ÿ\x0000ÎMZ\x000b/8j¨\x0005\x0001¸ä?Ù¢µ\x001c\x0001\¿sÂqô¦\x0005vl
ìØ«³aWfÉ+²À®\x0005v8
`Weâ®Ë\x0002¸y+±ÀS\x0002»/\x0015vl»<±ùåfòµÚê\x0016X¤n@ØnGÓÔ}#5¹¡Âl8\x0019aÂl?[ÿ\x0000ç\x0015¿6¢üÙÑ¤òî±In­¢ôÝ_^Ø õ+^
þÅºï^GóRy¶Ñg\x0014\x0012¯Ã*ø7Èõ\x0019|aËÇ>0üùüøü£ò{XÄÕ­d¬²\x001fÚÿ\x00002\x001f¾þã&9scÅ²À®\x0005v8
`æ®ÎUùÀül\x0010xÌ?\x0000rÜ|Û!Íù-kpO\x001fÖ3þSGËR
á\x0013Ô?Y>LçÉùÅ©kO\x0017_ã\x0002¹CCÊqÀS\x0015vX\x0015Å]\x0003\x0015vyófÛÑÔKÛ\x000fÒ*?_\x000eMÑzäçmÇùXãÐ§7VHw-\x0012\x0013ÿ\x0000\x00022Ô^o\x001f£+¯0üp×\x0002i	\x0005qWcÀ¦,]\x0015vlY;,
â®Ç\x0001LQÍÙx¦Lóýç×u9Û²°AþÄ\x0001\x0011äÚ\x001e½åØ}\x001bXÇ¯Þs¨þMZq·sûR*ý
+ür¹\x0012,WÎò4ðR~óýÙ²¶\x0014ÂóÏsóº/åø&þÌº
±z/ã¤NÞ,\x0007Ü?·:?åÕtÈy\x000b¹úM\x0007à2\x0013æÄ5æ½k§ÿ\x0000&î\x0019Ð\x0000È1cùx«³b®Ç\x001d]\x0014»6*ì.Öa7\x0016³ ï\x0013øS*&É¸JàÃõç\x0014mM¯k9ë KêévÇÁ\x0008ûÆ6²ò?0/\x000b©\x0007½~ñ\x000c\x0012|x\x0018«²ñWfÅ]X¾Èù\x000cù·_ýìÿ\x0000¯/÷Eñ½W÷þ´¾òË!û#ä1ùâªfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v}"üÿ\x0000\x0005úÿ\x0000\x0013lñ\x000eÝÿ\x0000\x0019¼}Áú³Ù/ñ\x001c_Õ?î¤Æo¼otìÐ½z\x00176*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìaza¥^\x0012¸I¤ZºÅ\\x000eóS&"\vÕÂé®éÆ\x0008M­ìya\x0015Õõ3.\x0018ÑlÇL¯lßêTï\x001cxÉgZ^ZmIüöÿ\x0000òå
§\x0019µ\x0007\x001f
Wá\x001eôÿ\x0000^§®Ã¯¢{=ìÔ»@ñËÓs=eä?[è¾Éû\x001f>Ú;\x0010wYùGôôv»¯ÅåôÐ\x0006²û·ð\x001dóæ\x000f<Åuæ«¾Ô%ifsRÌ\x0000:\x0000;\x0001°ÏyÓia¦0#\x0011Ð?Sèt8ô8Æ,Q\x0011ä\x0007ãsæñÛé5\x0019\x000cÓ1f=ÏêÂ\ÊsÐ±WfÅ]\x0014;\x0015·¸{GYbb®2²\x0010ÀÔ\x0010GB\x000fLA¦3 î\x000eÄ\x001f7gèóþq\x000fþr\x0001?>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/MBF_AFFICHE_CHUTES_VTT_2015_sans_logo.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/MBF_AFFICHE_CHUTES_VTT_2015_sans_logo.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=õù\x000bDº\x0006v&\x000eA`IÌô`~Åäï½\x0013öKïJW\x0017µ+\x0003|¥êUÕRY-ôÅnñ¨îÝ÷UWE/Y\x0002³Y\x0014U'£Hú£9'$öA\Ö\x0002y5nika3\x0015å\x001d\x0013%o%Ý\x000f°\x001f_¹P8_b'¸coUF-^Ê!\x0006ÃÊ¹Hò'àÛR\x000b!:\x0007s\x00014\x000e\x0005x¢?,÷´Ùwêä\x0007ïýÅ¡ãïJÞËRô\x001eÞþú³×?¹yýÏEåpæýbqþÖõO§Nÿäðô{íl\x0010.y{nöê?t\x0017nLN½3=ó³v³cT\x000e6¿ú¯/ræ§\x0007ÆB/*¶\x0016\x0017\x001f|}ýwn_\x001b=ôÃ\x0013g>89óþèèñÕÍuþwåòùËÿêÞÝk­Ö¡¶ Ñ\x0011ë;yáfsðù\x001df\x001byZ\x000cèaýsN\x0008ÆH.¸e¡ä»0¥\x0015Í\x0005_FI^ca=d)¬\x0007æÓ.'Yî+\x0010CT\x0013\x000eÅU\x0012 iñN¤*"Fó\x0011Ð\x001f`èZ+\x001dR\x0000ÜÃã}pt\x0012\x0008ÔÂd¹Xg\x0008*
´Ø{=Õ\x0014%Øû\x0002+ðE	3\x001f+Jáy+ñëÑ¾9£èh\x0008i1WIR:\x0005z¦¢\x001e7+{Jñq­}p\x0017qñÔ6/\x000c{áÌT¼jq ýÉ~E½õ´)qXÉ\x001a7/ñiÝ3Ê<HX|díëTÇn÷DÏÜÄv\x0012Ý½=®6Í\x0000mÏö½\x001b9Øº\x00057»âj6¹ckÓ\x0016¦z\x000e~x%/ìH¡ÁðÁ-¸}fäçÎý|frI3\x001f½©\x00159»tBÚúÎÜ\x0017\x0017/|üðîWV¿ÆµÀKIY»,klÅï(ÕTP\x000fWÚÈEZ
Õ\x001a\x001a¤rÀ`óð¼Ê|ÜëÑFQc\x000cîÑà2ÚfÚZ²Ö\x001a\&4_T¶Z\x0012H\x0012Ñ8[Æ\x0000¦yúýü3\x001a¹±æùP\x0012ò¿ÆlhgèÁ3V"¬À£xÌ0jù]«Mfufl&/[ed\x0008=&ÇwCá¿¿øÙo.Ånc ]\x001aNJz=jløì\x0003ûò^\x0005M5uÛ¨_$wÉk\x001c3§Åî§Wgg.ö£;ÙN,eÌ®á\x001bl5Rzj¨õöññÑàÉõJ\x001c\x001e½Oæq÷S\x000b©æøLÍm¤ð-¢+Ê³×í§ëé#ËÆ¥*\x0006\x0014;>\x001a\x0018Äá4\x0008¸×raÉ\x0018\x001d\x0010\x0018\x0000LÀ4\x0012ñ¡Ç\x000bÑs7c\x0014âäC\x001fX=H5\x001e:ò\x0012\x0018r'çÍEð
:c)÷51¼oÀ¼/\x0011Ï\x0017\x0012C\
1¬4Ö³ÑðáNÉº \x001cnõ\x0011>£tª:©ï?âsâMp?+~\x0006;\x0019Õ\x001fî{\x0016)vNüÃS4¿&¾\x0006Ï\x0012ÖÉp5Ëx¢1\x0019¼´<%3ñ>øf¦Ò8ûcÆ/Ãï¸Â\x0005p|°mô³üî·ß^ûw²Áæ ãT­cU/
j}züÐÌ±#9Ì\x0016\x0014M)d<\x0015à@:\x0002,j¨$¸º \x0003'\x0006¦Ï±\x000b¤\]ªP®\x0000\x0008\x001d\x0000¶=A£\x000f:øhdÀ\x0001±{¹ÞÕÍó¼©UÎ*ÂN5z\x001dH\x0017@®]]×EQ>Â\x0015c
¥¯ ¬\x000f*6SÞh6\x0007ZÍNµY\x0005B\x0018(T\x001eþ_,ÅR¯|Eù\x0010Pu:ÎíN«ÝÉ\x001b6k\x0019+²\x000cg\x000f*\Õ-{Ý¢\ªü2\x001b2¬\x0004\x0012\x001e\x0018\x001cÊ\x001a#YçY\x0003\x001cH JÒ\x001eßÔ¥wE].We7ú
¦Knn³vÞ\x001cÄJY6 Mm+\x0001\x0017b9ç*\B\x000c\x001cXÑÍÖ@eæïßþòú7W®=¸÷Mt½8\x000e\x0000RÕá¾aÑ\x0002c\x0012×ëå
d7<4<9¾r$\x001fh7a'å"\x0005)ÙÈnÙê	2ì\x0001¼\x00146\x000f«ÇªÒ\x0016\x001d=MÒ\x0013ª=d\x001cÙ²\x0004Ô\x0006Æ\x0003ËÁFÓ\x0014ó\x0010­\x0019-ª>G¤\x0005ðºUç¨¸r¸g³\x0000,2I©\x0014 %³Lµª§þËOM@+ïð\x0010ÐkóÎØèt«ÑDâó"È\x00063\x0004µ!»½hó0\x001fEÍékF¯kWÂ
ùªzuUÞr]\x0002·\x000bËË÷»½ûEõ(¸B¢üØ\x001cBßL\x0008"¸)³¦ðN|ofY\x001f%è\x0007\x001eæDD¶ ,( @(8Ðx\x0007hÅ\x001aQ§¬]·ö=ïª\x0010*ÀZÂJkî~àØÞr\x0017ûÉL¾ù£³\x001fNM¿3Ø9¤ú¼§êêá­»1û×ù¹K\x001eü·î-AuN\x0005ks\x000e«u¬¦ÑjyBºÌ-³\x001d\x000cÎxBv*Âå;±±©Ão\x001dzolâ\x0004Ü»¿\x0007_Þ»û/.ÿûå\x000bKK·;\x0003¤ÚkYÊ\x000e\x0017ä\x0006GtÄé)@­[IüFQ
kkeáø1eKÛ\x0010
}\x0004ü¸«¤ðÜ'ÙYI»J\x0016\x000f¼mN°K\x000e\x0007p\x0019¨K\x0010©S(cWP\x0005Å4´Ðºz©\x0004[z\x001b, ª
\x001dE¥ÒUúj\x000f÷\x001d\x0002»d¼ÒËüäÛb\x001d!(Æ\x0016[\x001cs!É¬AÌ\x001cèÌ\x0015
8
æÙ3mS°\x001aB\x001eì¸ÌI(5RÚ¹5àäÞ\x0006\x001cÎÌJ8\x0013\x0016FÝò4Ç\x0019 H¼ J\x0007§ô[®nv]Ä\x0001`íÅ;Òæè2W!çW¨âK	Ã°k\x0005e\x0011ç\émÒ´yÕo\x0010$\x0005NÄêc^â\x0018bÊ¨_>z%ßKÙRÒ·£Y¢Ä²Í	­%\x0003¯ä ×q1¸z\x0019ùèÜ¹\x000fg&G$5j#lX®ªd}\x001a¥ÐÅ\x000b\x001f?¼ûÕ¯I­¹»EÐ÷S\x0010ä|P®B¹æ¹dò
å\x0004J
ï1D¨/ðãÂ7<¯2×y=\x000cd\x000c7TF\x001bV[KÖ¢\x0013O$7 ü³\x0019¡ðÓ\x001cîûÔÎ é\x0012ªCÍºßÏ?|j5Ol	ßáQ[ÌGdÑ6¡m¹?m2\x0019å%Ñ°hè?´9\x0019n\x0018¹cáýsWgÿôëó7.ýsßÐV*\x001chØ·ß\x0018?s|¢ì\x00142JéÊVÕ")Gm¢ÍtÙsÿ¸5÷ùü·HirýD&\x000f%áÈ^ûà¦GGGßzãøÁNSyW;O¬\x000eVoØSf\x0002\x001cçÞË¿Thv:\x000fÓ¯·~|&\x000e¢zñ½Úx\x0017£\x000fÑGT\x0001í@\x001eeîÿÙ¯æ¨®+|Ç7t·Ô´\x0000Aa,
\x000f@(+\x0013m\x0016ÙfÃ"ù\x0001ù
ùIY$\x0015RåT\x001eRå¡²pHLÅeÊ!\x0008(Ä î~Ã\x001dN¾s_«\x0011È\x000eF\x0016Ø\x000b®º_ßùÞó}ß9\x0007\x0005\x000eù.\x0003¨#°;\x0012\x0001\x0010
É]È\x0003§øFöÄ\x000fWù®\x0003¢\x0006± ÂÏ@çá\x0000@3#[xSÀ8f\x0008´í\x0005³\x0005\x000cóTA	ö\x0014:Îe'5ùûãÇß7º\x000fe7ÝÀùO\x000e=¦Ô`Æ\x001f\x001eÐ±ùxÆ\\x0014³æ\x0019³$Ç dâp·Ä5î¦GÒ¦ÏL+ÔfÛ<2\x0016¦ÙÍG)L\x0012\x0004\x000bR\x000bcl^@÷¯ýû¯üÃ­+ë¹ÖEVP2Wä7Á¿zìè¹µµ\x0012\x0019XÛ üàli\x0002iXÑ\x001b&JG²²ÖFÓoÊÑáI\x0013_ÅX« ,q\x0006¤ô\x00000@&ãY$\x0011\x0005P\x0013èP0ÖäÖfRXÜ\x0002hU\x0018Õ(Þ;×Ôõ¤qÓ\x0010\x001bÀ\x0007ôÁ\x001eDêò\x001a¥ó^QöË|Á\x001en\x000c\x0012\x00118Wt2´ÁWu½UMÇ­\x001b\x0013\x0000Ä0ÑQj½aÙ[0Y_BCÜá\x001d\x0005\x0017}íqUm5õÄSÍ¶\x0017\x0016\x0019\x0010®¿?\x0018|É"/2\x0003D=d°Ó6¸¦mÆM³E¡#/\x0004í}úe9°Ù@é\x001eë.Ã¯c\x0017SÛ\x0016§ÄÍ$1\x001c!{Zg£ÅQAöú/.}ðÁÆ«q251hKP;4Ò»Íò1«oëÖjyìð\x0013ÇVG~i
\x001ek\x0005 m\x001f"L©`>W×0Áp¥ÿÊÙüäkr´\x0012\x0005Ö\x0018Xg¹ÅY¦\x001a\x001fgµ\x001d16Ä*>ZC,V;:'Åä\x000fµ*½îX.ÎýÎ|øÎÍì\x0007P-¬,*ó\x0002Sô\x000eN6*øüÇöù\\x000b\x0003d\x000c\x0003Æ,ì\x000eäpUÛLfâÜÄ&u\x0015Ú{mõ`2½§n\x001eÄØ*\x0015ç6g¹Âî%bÈÜh,c$Ëôä÷\x0005T\x0008«AË:OÛ]+ÌÄ	\x000eÄuÆ·-X\x0016]Û\x0002pnâC#àYRù\x001cÝ-\x0019\x0007%ðêÊ\x0017Ã¥\x001fþä\x0017çÞøåÊ¡³Jåó1Lo|ù÷õõ®_ÿtóæU7þOë\x001b\x001c¨Ómøµ66Á·ã'\x0011È5(\x000fMVÙb¯|õÈÙS¯üxmíG\x000bÃcó\x0003â^¦[·o|ñ·\x000f?üÝúú»F¶ýb\x0014#\x0000ãéj#eÑçJzÅka?ê\x000e)\x0012Cþ5+¦åÚórxdÇ&Jâ£«®P§Ct8´\x0012Àú¡!Î#ààn\x0002îEÅ2RApkº¶ùÐ;\x0000écæBì£.)zÂÊßA¡´+ì°f\x0003Å\x0002Ng&Æ©;CãìPòh£÷j¥i¹2i!rÌgWàì!9bTG©\x001a\x0001Ã\x001e¬ÀÜ)å\x000c\x0005\x0011\x0011<\x0014²¨\<½KRì¡±\x0013æ\x000b\x001a\x0014{k¯e\x000e\x0012aS2ÖAÃÂIÊÒRªlGæ0E,\x0014J\x0007Å&æ±³XxïEòäÊ±ø=ªÓæYÝ\x001e=_Oô¢¼(Ûeÿ¢Ä8ãìò¢<]A î)úûn¨~sáÂ¯ÎXb
·õU2þ\x0015E
?Â\x0000TèÏúí½Û\x001aµ"ü\x0017\x0014;½áã·Ç\x0011\x0006Be¢páÚà\@Èîa\x0000ßÚ=oø¡¯ÏI÷¶\x0013üD¬¦\x00142\x0019Nã´ÒZ\x000bm$¾bëqÖ*&¡º­+nK¦P³\x001fè¾\x0015ÿiN0G÷Âé!O¬-*üäÙ0!fÖÔcÆ@«¥ÓLLS[\x0016/R{zïâ_Þùý[6ÇÄ^I\x0008÷?8º|þô)å¼X\x0003ú$K§ô2Z«ÉËÏ7î¼ýùg^`»\x001c1ÃPÆ:¼üæÉµEk»¤Wì§ÛL\x0015¶±\x0008`\x0015\x0001SM\x000c¾¿¼øú¹üÌË[Ã|\x001a¢ivÞÇ\x0006 \x0003ÖHx \x0010óz¤¹xw¨È{\x0018|%¾Áî@ä\x0003@I<(òÀ4\x0016M¸®*â,Cp"\x0019ã©¢K	V2¯ÂY\x0015Þ\x001d/A³\x001bÄJÑwÜÆyê\x0003à§ã
Ä¯Í&¾?V\x0010;èÖ½$¢èy+\x0008\x0003v!Ò%&Îv\x0011\x001d:\x0012áM3_fÍL"&ÐÌ5n1©ÆÌºîÝ¤[Af&\x0018è1­gîÆ\x000c
T³ !\x0002l0\x001fÍzýhã_ß½xqzýz\x000eU°\x0005±TyX\x0008L¡àN®\x001e>sâÄ¨(©©qñ\x0001y%GÑû\x0010H³Ô	Ê(\x001aOµÔõÁÑ³Íòê\x0014k¦"Và`\x0008­J°HÀ8\x0004\x0002}àq> Ä\x0010PÊM¸mcmnLf¥¨ABÂ'wp¾jêI]OçÔ[cÒ\x0012JIÔ&³å (û¹í[]â2qÏ\x0010fçkòupU]'­\x0010\x001a!Ó\x000c0\x001bgSX¸WöGe¹\x0017esØ\x0002ÆL\x0018\x0017}åêqUmUõdÛ\x0018$î
\x0006C[,Ù¬È°mmÙv\x0006\x000f'á¶Ùj*¬ÕÂÆ,ÓdÉ³¢U²| tÄ\x000f	B0µ1\x000eùÄ;a\x0012h\x0004\x000c°¡²Xè-Ê1­_ºüÉûïß½¶n3¹v·Ï9á\x000eÇ¡¶\x0019Æ\x001e\x0004Ù h\x000cÉÌËG\x000f\=4*3¬\x0005àßL\x0011h\x0018.*ÒXåöÈ±ÅÓo/½Nyé\x0003ËbÑ\x0010{Dÿ¸ÃEÎey{\x001b¬BÖØÖùV;EúàLëÐlê%eÏðØËî\x0000 û\x000cÑlaeùT\x0017\x0008¢wtT\x0011Öêxôx\x0016 À	·ËL+çÚ¶\x001d7Í¸©ºûMõ ®'muk2¾;©Æà\x000e\x0003,\x0011j\x0006
\x000e\x000bØÇkSfÙ\x0000\x0018¶àÎ\x0019Ê Ô`Mà8:Ud©'v"àq\x0000V\x0003 \x000eþ\x0002îMí\å=\x0010'ÉX-)ÏíbÈòÐ@¨\x001d\x0017ìµÖáøñÿÙ¯_;óó¬XbG\x0007ì«Yì
on^½{ó[7¯ÝÙÜ¸¿µ1nâ@2(úà¦m^ýÁàÀâððÁåWO\x001e<ôj¿wDr8-p¥»yã³?ºxù\x001fo5ÍÍ[\x000b©\x000e%¤Â+÷Î+Ùµ7ACÐ\x000eú8ùMçþËé°ó¸H²Z¢\x001cÐåÁÖßí\x001dÆ¯0´l´£	&2Ó,\x00106]Å÷È­Ï÷\x001e%"\x0004tl\x001eü\x001dÙnjÙ\x000b1*Hf\x0002°Ð
y¾æÅ&Õ\x000f¤Ó¤l­Öùùó\x0017è_úçÛ·n¼ÐlæIFBbÐ>¸Ñ}-ó#CÙ9\x0008DZ@¤0è\x001b<Bp\x0011²\x0005³´\x0018åÙj º	_R¬4õ$óÎC\x0018÷c¹ÝE¦sÕ^\x0006Ðr\x0018Ý­èoJU|ó\x0003vÉTrµP¨þÇ~ôÈuÑ;¾©«G»ÛC<tÛ\x0008m' ,Å$!ò\x0006AØ\x001aÉ\x000bX!\x0005\x0012ë,ø\x0019Ù²È\x0012$M,\x0011ËDBJð@\x0006G8\x001e\x0010 DIGRîªzÃ8ß}Õím\x001c·ÛSB®^W¿ºuÇïóÝsèîkc\x0016×Lã¬þ@\x0011c\x0018\x0013^"á\x0010ÌBF5Â=L.¬íêiE½§c¶ô9\x0011nI\x0017Ñ´\x001b	Â	1¡ÕæÚ^öös\x0019óÞÊ\x001bó\x000bË­9	ÆÊ"\x0015³HFÖþ\x0007b±d
Û¹c	âñãì×åKYV\x0005~v?õ!¨º¡\x001e².½ò¨´Ú#ûÊ\x0015B\x001b¼íq9uèÀóÛ§peÓÅw»ÈÜæB\x0001ü\x0005¬ÐÑÃ/w/]Pr,Êûp§_\x0017RP>Êu\x0001Ca\x001aß\x0018o·ðNä¥X´$°M"Übo×\x001eÏ(þ99:òrAªÖûq²zbøH%\x0016\x0014r)¿ 
¹\x000b
Åã{;\x0014õ%{\x00085Hâ\x0007\x0006\x0012cóXCæk	×©ð®\x0014½s|Uí¯Ri)ñPeì¨¹IÒJbf\x001d½§8wê×_ýmï£¬h$Ìðu575þüü7Öé\x0019Ë\x0004Üì=\x0004¶fe »âä§Õñ\x000bç»µÁîW2\x0000ÒÕÍ¨\x0016OmÝ¸gvs\x0007\x0001p\x001e U\x0017ùwñ¨a®<=ÒûRyµi]ç[ßñOl1d\x0000\x001c|
\x0002å3\x0001\x00083Þ[Ï"ÎN§¯Tïâ\x0000¤×`\x001f\x0002\x0000\x0018èK¬!)6*ª¹'ÇgAß(\x00116e-lhX8©Ðvk\x0001\x001c¼g¤-i¾0,\x0011ÏPÞ\x000e#\x0018ß\$\x0008[jÕ¾¸¶\x001c\x0005|x\x001c2Ìm\x0004m,K?åzbtP<Rj¹\x0010ÃðÈB\x0008DC)¨\x0015-eè\x0005Ü$&¡¦e
ø"#{©8\x0007õøJ£$D®Ø\x0011ûð'ÛñAÃ\x0010Ç\x0012rÈGð8\x0019étô£3gÞüÃï{\x000b\x000b	øOË\x0000¹ç6¸Æ6Õì\x0013öì[\x0017nPÃÞxÉ\x001dqè~]¥Èõ\x001a\x0018²©ÑÝOWS\x0003Z[3Ó\x000bnà}ãc\x0011³Î;V\x000bfB\x000ca\x001b\x0000\x0006r\x0002ÁÕYëiS:Mt&U¢¿\x000bC\x0000£­\x0005níUÕuüë#º¨\x0005LÅÖ!²$+Ò|,ÑÖ¹\x0019\x0010a=k¬­¼­L3(Ë^Uö¢U¹±\x0011XëÑbd2ÍFtR\x00083J}Xõ\x0014ÉASõ«ªWV=Ü¡\x0004\x0004\x0016GtFÆbJ'yd8Á¤9úXÓ8[5u¯.\x0017­qÈµtùÒ\x0016|d,M;\\x0014U³[¸\x0011°GÓ45B'xx#Ñt"aY"Ó¼\x0010«úÊÕs'O;u¢wùJ^äB+\x0004©\x0005(ÖS~\x000b|ø°¨;\x001d¦ñN\x0007¿~4ß±eóõÃ:\x0019Ö\x0008ô´\x0018G\x0004¬@9°PJÊ'Óí»'æ÷$ÓÎpÜØ\x001e;E¹\x0011ú\x001bé¢M\x000bH:þ¦åLrkÇ5í.V¤¥Æ\x0004\x0012\Õìæ¤´<Âr÷\x0012\x0014Ò£Òõëwåi\x0006áä­\x0011Azáãr#n\x000f9³q=Ð
\x001e\x0019\x0004ZÙº\x0006¼»UçzU]+û×úýn9X\x0018\x000cº.b®\x0018l\x0013R)¥	háa2\x0005é\x0018^îÈ3@GÀ\x0004B\x0014?tÆD<\F8Kú\x0004÷}Ó\x0018Û\x0018×\x0018S7umm\x0019uã\x0008(Bá^Ðu[LÞu%\x000b"¢Þ\x0012a\x0003d©K²Û¶=÷Ì3/ízr_\x0017m"¤K
KD\x0016bÎb/n`l\x0019a¦\x000e´\x0010­T¢Tê(+4òCÜ¤¨©\úôìûï\x001d½xþøb÷ß\x0019´¡ä\x0013'Yø ü\x000bëC9\x0010½­[¿¿ÿ¹C\x001fþãÍÓ'^et]äK\x0007Á-¥Èfg_Üÿã:ý§¿¿ûGÓ¿\x0004<\x0003Æ«\x0010å1°AÖT\x0008/\x001aÙ\x0005½ÒG<ú\x0012\x0014}\x0006y]öý÷ÿÉÙù\x000fÎ\x001f»øÞ±lÚÂª\x0012÷%÷¼òåØÄôK?üõÂ÷Ï<rýògiP\x0007ïÝû³}/\x001e<yúð\x001bo¼è2\x0011¹p¤²\x0003{\x000c
)]îX\x001bä.\x0006Ë\x0013{?pÇ#ëxÄ\x001a`³Ælùö\x000f~ôK¼õ×ß|~õdBx
T\x0000÷kï¬\x0001Z¢ì6ý\x0017öÿjÓÌgß=rñcÑé»?¨\x0010¨±µ ·\x0017Hä0\x0004\x0001.Rzà«\x00050ÝUÐUènF,páÈ¨=ð¸µ x.^Ò[é,i
©QÛH ô!)¡Õ2Û¶ï}vßOO½}øâÙã¹J_Ö87Ý_¢^4WG×ïÚÿÂ/¥ñoýå«×>N²ñ\x0007H`\x000fþ\­Ä\x0017¬å1ðA_/añlÕiêá»Aõ£BþZlÎW¢À~Y®\x0019S\x000e\x001c88¿}
!\x001c»K±MªÇºf\x0002Vèèá».(9ÆÉ×;uü/Q½\x000c
#b%<\x001c
ó"°\x001c\x000eÒÆÁN1\x0018µh\x0018<U-µÇ³½\x0004ô }(¤çÐ*+ò2¸ò\x0019I\x0017)\x0003äpøæí=\x00168à¡8UÑPK?Aç)N?áMQ'\x000f¥$*5F°\x0004Ã	à(5Ü\x0010¦AA\x0003©Ñ@ó8!ÇÔRÃB34À\x0004©ë\x000bOþîµw^ûóÄØx-\x0017¼©uYúìÜÜÓ\x001b7¹¦tÜù{b³Ó^\x0005ú¤kù±\x000bç>éöhb8\x001c,n¯\x001aL~wÛÜS\x001b6äE¾ñ\x0000£cNÐ'r0ÌÓÃM(¤ÃgÄb\x0014t§cÊ5£cé7wfó»ìØ¸çÚ7\x0015÷\x0005ë|\x0003|9Ï¼·ôàî\x0008Ø\x0002&·\x001bðDÛ\x001b\x001c¬wj¼
\x0014\x0003ú\x0012kCüÃPØ¿çø~2h\x0019 °"k
\x00001êC\x0013¢DÐ¶\x0010¢ãg/t\x0003µ996w<ºÑ¶ßR_ws\x00088\x001f\x000eù¨Ë­·É²ðË>(\x0010_c \x00182Q´-ñ\x001fô#\x001eH;úOýðO¡\x0011aéO\x0012­À%¢\x0012\x001c\x0011De\x001d[\x0012«p¨\x0013Ä`ê.J)°\x0011yQ\x001f(\x0001 µ\x0016Èv¤ú×Û;ùúÑ+\x001fØI\x000bÁsÏ\x0014å\x001fó.©vÎlØ½cnªH¤µ°58$ØJ#iokÔ ¼E\x000fàú
â2½5Û9ßÌlèb­µã¦oý¢s\x0015`Å
¦\x0002ø@ÊE$GÀ8\x0002¨
\x0001Hµ\x0001\x001bO	2\x0019RPl\x0006PZg­­i\x001asµ®{|\x001b2H \x0003\x00044\x00124YD,\x00012Í4LBË\Ê\x0002È¹a}k*oê¦êõ\x0007]ÛTû\x0015\x001bò\x0008q¢ÆÉ$ë¨´º@>¤´a\x001bç\x001a¤¬ª¼>\x0018,ZSreqj8;ð	GÔéL¤ÅNòDg\x0018À9ñ\x0013ÒMÝ«Ë³µV"¦b3RºÈGÆÓtTëBÆÒ"\x0002ë°U$ËÚ¹:&oB\x000eðsÿe¿ÚBìºÊðºî½Ï9K&Iæ2N.Æ´´
j}PP$Jk
¾\x0008â»ø¤àÅ\x0007¡X\x0004Á\x0007+øVÖHcÕbÛÄ¦!IÆ^ØÍ}Î$gÎ9{ïuñû×ÚûÌd¦é`*X×\x001csö^ýÿÿ}ÿ÷ã²Y",­4kè41ÝîÅ·fþrøÌñ£eÞÉ²L\x0012D\x0005;Ñ1Ú?`\x0015ÿ\x001d\x000f®BÜ¼Ç\x0011Òù4ml\x001a\x001bÙ514>2äB\x001béÞ?*96u¢Ä1Ê+P\x0008~R!ä-¶n£Ú1=4½ÛçsÞU¬ ùÞU\x000bY¤\x0016¢\x0005\x001e3\x000bë¡j?|Å&ô9Sã[äÈ2k\x0016é³%Â²	Ô\x0017¶âK&Ó\x001elé\x0015\x0004e]©ôõë§\x001bi6{î\x0015T}á¥\x0013 ¿å[{-]û!V\x00188{ð\x0003%)`ë÷»e>×½~µÓëv¯\§Û\x0003^ÚÈ%Ê\x0003\x001ej4q	\x0010¤º¡$Ò/Ó2U:åZâPòÁ]ÈmP§ê¨(0D´÷¸Õ\x000e\x0005\x001clß¸> éÜ\x0000&}\x0000\x0013ªGÀ:h¡bWJa\x0002\x001a\x001cu8¿ÎE7¬ãp_Í|F4ÎÁOà \x0014ç\x001bßC(9K[­Ûn¿mÏíwON}rým{¥n½Ç79e`OÙé={ü\x001fg½}æ¯sWO\x00193Ç©$d\x0010jäv¯È\x0018ª#ùû»òj\x0003Âqµëª³ý\x0007\x001eºÿ\x00073¯<uðÀ\x000f.¥ªïÅ¹-:Z6w}|ÿ¾¾÷ô³?9úÒ\x0013¬Ón¦CVØ KBM \x0018ùÝY°9"bÉa&
\x000cHç\x0018ÿÔ'\x001en·Ï¿qæÏîD\x000f\x0011Ãp'\x00021É,â)ìÉ+	Ä£<\x0000\x001fÒq7«D¤])\x0005Ý »|ÀYÅ\x0013µ>66\x0001~lñX¢\x0016\x001d¶ïyÌLú×ü¾}ßÚ²çÞ\x000eÿêÈs\x000fo*|£ÐóÚ%Ì&\x001d·0:ºýëüúì¥\x0017_xæ±¹Ù·kÆ\x000cïC§*±ñ\x001eÍ?=ÿØ\x0013¿\x001bNGI#þâY.¸%\ûª´ú@Ãd3[~Á >Yµt\x0017lù¤\x0018Á´èNVqäâ«¥:&["çMi²díä{6m<|ø÷\x000bùEx/JÁæõ±4Ô{\x0004Jô$w]½>5>³~\x0001\3¹õ|\x0003\x000e9|ðÙGÛW\x000f'\x0013Ê¬AYh38¢ÎJ,\x0010ÉóZ\x0004²\x001c^
±\x001büàÉ²ºz`WîóKýÎý\x000f>¾mó=ûÙÑ\x0018\x0019[ï\x0006v;Vg#ºø(\x001f¦¶¬Ú²uï\x001d;¾ðê+\x0007Ûí\x0019Î:¥Þ¥\x000euG\x0002¯²øÅ,«ó6ÊD\x001eë\x0008nFÐ\x00180éÖÏ|öKíùó§^¾Ó=\x0011ôV\x0006\x0012%ÈK\x001fXúm°\x0008××a©}1RË·
F¹ºÄ[£Sc@Yå´'1%.â= Ã"¬¤\x000c»ÙîéÏÝ¾eòÜ?O:yHgLjKQsB¸&nhîÎÝ_þÊ¾ïþá?õ¥_¶P(¤®\x000eæÈUeW÷\x0008§S³\x0019mð.Hµ\x0001 K¸(æKÃ\x001bïüÚ}?Ö¥xúÉo_¼|ª¹fm]+ÊçaGQè;¨!bt\x0017^¥o89\x0006½
b\x0004`02¸Ôó*ëjwÕ>¡ßHxë±Är\x0004\x0010tAÞ\x0001ÁÅøù\x0018¥`§\x00087«B\x0011,
ÖT4àY2²9:I9\x0014ÈUWN\x000b¨¯ÐW[\x001c¬r76ÿ\x001f\x001f½á>hÿöa\x000e¾ZjúÍÿ#æ,\x001b\x001fqÜwf¾\x001ccßÜ¿ÿá=ÛÆ\x0018º-¡w\x000b_\x0019#"9Ôw-1{îÈÓ¿ùÎü¥SJ\x000e£xÝ¤Ný\x000f[øª¹~ÃpQ*\x0006¥Íc5,/KSèL©ñµøi\x0011!jk­õ\x0003u\k\x000fäaNA"RAµMHô)LJ&\x00154R¨D(\x001e@¥\x0010µ`\x000c\x000b%-l!BeÇ\A31\x0007ûaH¡ÐR>À8#|×Bjz©Ð¢	Õ\x001e*ô\i®\x0012EKè9fc\x001aÏRt¨o¼xä©þ"[´ðBäÖ$BÜ91þù];e±`¨?\x0010«_{Ùð0t$¾À«\x0017gþ>sþJçZ!$äwã64önßzÇø\x0017eÙ·<\x0017¢ B ¦\x0014nÕónåàÌÂïËBá2ge¿ì9ë&6d\x001fÛ%wL\x0015CC¶´¢Èq
¨ Ç\x000c\x001a^Ü\x0008S3\x000eê\x0006wÃ+ïX|\x000f¾á¡¡+z\x0004¤i^ã´6Ä|Ì¡]7\x000cS°Þ\x0019RYä\x0004á,7¦Ä&¡kóA2.J#;\x000e[k)ãCVë!zU\x000bò{i×B¥lyÕ;üwjÇâX\x0001|^õQñMòjjPöÐÑBF1Lp!\x000cqÂHø\x0004\x001cIZ\x0002¨Qpe\x0015@\x0007\x00041à\x0006 â\x0001 \x0000WX\x0001V"¬Åw\x0002
\x0013\x0000+üÑCú/dX¨é \x0008P<ÕI³¹F¨ìÍC/\x001f}æÀ¥³§³4ÕIÃx~\x001comÙWÌl\x001e\x001b½{jj]«éløãL\x0004Ð
nE¥eÿÝ\x0011ù\x0007\x0011n9àë3Ý¢/6ljìºËNl¾î|iê÷é¾ìåMÔé\x0000Æ()?Cê"³('CZü´$µÖ \x000er\x0017#F"\x00180K¨6EQô~7/ÛÖæAËsç*)Â\x0003¦]ÈX)ÓfsX§#IÒP*%öC8¸0¶g`UÙévç{ÝkH]¸µ¾\x0019E\x00183³l4k¦Ò¤µÊ¹1}[öú\x000b×º\x000b×¬\x0003ë¸P1\x0005H©dhh$i!&°\\x0014Ì¨¯´¦\x0004çõ¼÷®Ã~p²ç\x0006\x000e¤Òfk$k\x000e+ÕTh34'´)`lL\x0017yir\x0018\x001fikQë©ÆYª\x001b^*Ùh 
´á×f/~íØ¯\x001d=s\x0016\x0005©%\x001ad\x0008~u±Ã\x000cÍ*Ý\x0015Õ\x0003\x0002\x0002(¬OßØRÇ×m\x0018\x001fn5\x0005ù¹¤îËóª|øAúÞEÎ[H\x000b&k\x0004Ò\x001eRX¤[3lÚNïI¶Lñ¬éÀo¥¡æøÈÌ_àQ\x0017
gÝdV\á\x0003/ùª!¬Þ¹¥ôÂB\x0006ÄÞØ\x001b.I`|l PVwjÕãå#Ðì¢N@Æ
ÝZ¿nªf³o\x001fó®+|BË\x0010¿b;?xpËy:\/C)\x0003z\x000cÒ¦×í\x0014½¹ÎõwæÚgçÚo/t.\x0017yî¹AªK(ÙLt+M"ÑR%ZeJf!iÀm.*\x0001$vüÐö

rÞÑÇI§\x001dôé¶\x000b4\x0001eÞµe	\x0014\x0003Ú¡DÊåTn}H\x001enßÂôï¶d\x0017« ßðD¤}\x001a.\x0012
ÃOª?Ì\x0017¦ì¦\x000fýÐl­\x001b]»sbâ®
\x001bw¯Ø:¼vSchÖ­Õ¡g½ÞÜ|{öòÓ\x0017/¼~ùü«\x0017ß¿÷çtir¡\x0005G·ÆÐÌ'd\x0014ë¯~ç\x0003m¥UUa¥E
ìÚçíÉé\x0007\x001eüêN\x001eyòàïKíj\x000cVRÝÜ¶ýÓ;öÞûÂ¡ß^~çoeº,m,ëAHiÕ@	¢è\x0003}ÑÇ¹I\x0005
Eÿüj±ã¨¢õéªî~ýæ?ö$Nü\x0003O,P,\x0004l\x0004"(@\x0014É\x001b%V Vl@¬,XÅY\x0004A¬¼\x0008JD°¥\x0010\x0002DÄIHM1±Ç6þÍøÍ¼÷º»¾[o<\x001eÀqÉ"­ÑÌ{5UÕU÷{î9MàRéÂz×ã|ö+_ýÅüñö\x001fØ³°ptfâ6éÍÐ´H\x000bo\x000cÐÆ 7W\x0019"("Ôà¶Æ \x001b\x0001°ë(rh~õnHÄØ!xÎXl\x0002ÅäK@WLá^\x0012}¸¶åÁÉ5-Cd\x0019\x0007/W!CBhY¶Þ\x0000ÛZuÑQHôy¶Ü7÷Üÿí­ï¿ûÙß?ú»ý\x000fOU\x0013\x0015¢´Z/\x001akÇf·íÚõóã§_~ú©ï?u¨ªÖEá8w½^nnç­\x001b7/ô\x000e\x001d;öÒX1É}.H\x001a\x0013\x0006>ZÍem¢MR Êr-\x0015\x001a\x0006:#èFs¡u\x000eØ&@­ãT¬ËÎ
b,tn%\x0012É\x0008*\x001cô\x0001Â3qZí=\x001f\x000c\x001a
\x0012ü¯Ñc\x0014J^³GÞ j\x00035>ð¤·\x0012\x001aoÏÁ\x0003º\¿óc\x000fíÜùìÝ½páïEÞQY\x0000\x0013"q,ø\x001d\x001bEçM[£SC\x001eh%ìv\x0018Ëe\x000cýº\x0006\x000bU ¼°\x000fÍ\x0000\x001f6\x0003­<Þ²þ#\x001fÿÄ®yúù\x0003Áô
>.ta0t=\x0010\x0002çywt¦A\x001bQ\x0002N­i\x0006\x0010'à\x0018"\x000cÖa\x0005b\x0002aå#æ\x0010'A64~©õC@¢ÈÆ\x0001.ìÁÂ\x0017¾ô£-\x001bwþqÿÿôÌÞrl\x000cíB«Ré1Æ±ÃZÐ\x001eG\x0007,'°?ÚJvlÍ
­ÐøÐ]\x000f|öÞoýì§ßüçÑ\x0003¹\x0010e1	½hÖ\x0001·¡¦V«\x0018<Ïq ÏLcZÒ\x001fX$Î+Ù-tGq®YSwÞôõoì9qâðOüpñÜk3\x001b.o?©Õa\x001fÇ[Óó¾\x0011¬PHV.V0W ÑÖ\x000e±\x0015r\x0008O	É\x0001­kÔ£N$¬KL6&É\x0004\x0016¶íK(ð	­À\x0013EYt\x0001\x0003ckc\x0006xB
\x0012õ\x0017b\x001eG\x000eð\x000bdÇº!! @JI²ß=Wßý©Ýw}ô/<¿ïÉÇ\x001f]7®N©Ag(PLmw|î{¿»ÿÃ\x0007Û\x000b<e¼Ã¨BB
0[B£R\x0008p)xîpA/ð!¨÷¾w¨\x0005Èº\\x0002K\x0008)u\x0011u\x0001óa©Y»ó÷ïQÌíûåîùÏ©¢¢(ráð¸Ä¥8
W`%KRf"CÆ¹
}t"G\x0015â©\x0002²\x0014]â6æ%2:¬E þ\x0002¨Î+ì)HÞËô8¢Øx¨.V\x0002xåQ\x0011\x0002jÃZèX@7Õ®
¡Q2\x0018ÇZØ78ÕÍe{ê®.æ\x0004w!\x0016ZÛ2NÄ\x001d°72UÑå¬À\x0014Áà¤}\x001b\x0010íÑÁ%D|GÊ\x000eT"\x0013[C\x000bÀ\x0017áb\x00039\x0007ßo< ÎvÜQC¸Á¦zýÖvs\x001e~#ã}ÿ\x001d{â;\x0013±ÿúÄ· ¦þo\x000f\x0017×ØHÌ¿\x001b\x001bý7'.ö$-\x0014ÝäS_{ðË\x000fÝ±y\x00142Ôòµá\x001aÇ\x0008¸Ø]?øø¾ïôÎ\x001eÎäx²ï®	ËÓéë\ÝÁháHl á
\x001dæ¢ñÌd	¤¶¡ÕÂèEYÝ·üàÀ\x0010ä|ô)=Rú,\x000bY&¤Þq®Ð«ÑÞñÖHrCPºñU$o7úÃÈzÂW²L\x0008üHìaAÊ\x001f_i\x0003Á3ql,3\x001aDoNÿb0\x0018Ø\x001e\x001dF°9MKpf3\x001dìÌN-<ýÔ#\x001d{á¬Ð\x0018n8¢â6UÕ§w|pZ#ZÑEq£)@ \x0015é;4`\x0006	\x000cãqtþø³GþuÁ1tÛ`M%äÉ\x000fo»}f\Ä\x0008­DÁ\x0012üí\x0007ÿðÀØB\x0001ñ\x000cÂ\x000cþJx\x0007µ 7¬+vlç[7Ö*o&óÀ9Ü\x0015Ó\x0005ï\x0019Dm°1:Ä\x000câ°\x0005ÄÑ\x0007/
d Ý8
Ð\x001cø\x0000ÒèÉLA\x001cb\x001f\x0001\x0014B1x!,Nò
q\x0011\x0001Z\x0004Ò\x0008ÙHÎ\x0005oäie¢3LN[CÕ\ÂsLO\x001a\x000cW\¾
12Já\x001dÏÅ\x0015¨K5!®ÂHdr:s*6\x0006ÁGj"M\x0015£«d\x0019Gµ³ZDdÎ$°HS¨¸h\x001bAeKµ
âô/,\x0015iÚ¨¸°\x001c3\x0004>§Ý0F2­¤Ò£*§¢Uª(JÍøß^>ôçßüzñé2\x0005ÒfeætÛèh6LMÞùÞ÷¬ïv¡E\p\x0014ö·¡!#ô1	Ì\x0000Ê\x0000\x001cZmýÄºÎö\x000f°Û6.qe&³\x0006\x0007Oñ\x0000\x0012A\x000eÊÞ§\x00030Ð \x000b@úþ734¹%ë\x0006Ö\x0019½ÑFIñ\x0006.Ía[\x000f-ì\x001bðNÐêèÁÄø\x0001R9,îv:3Ruµ?n½±Ë=?¬\x0017Ú¦¦8#;Ï±jÇ²Í±¼èh#}#ß\x0007ñomcÛ~[/5õ\x0000$\x0006;Â\x0008Fã°xUw2ïL\x0017E¥áÂ>¨\x000fª²5¬S[/ã\x0007õ(¥)û(>LëÝ²;!²
çT\x0019\x000c\x000bèJ9(úÖXø¼\x001ceÂ\x0005!l\x000elZ^ð\x000c¤
üè<¯Ê¢´M=äõ×?8øÕá¹3ð¼¹ÎaÚø\x001a±\x0019WbÆV\x0015½Eër\x0006çÞ0;³qvzn²ÛÑp*¸aHMàLAÆß7\x001a>B\x0018\x0017£\x0002÷´Ø©àØÐ\x0019®âÜíå¶\x001dÕÖ÷©ÉY\x0010`ë\x0010XÇ\x0001xÂÛ\x0010\x0015@ØÃ!\x000e<fkI­²
Þ\x0011âÊmâ*á¬\x0010\x0013
r­aûµÇ¾¸\x0013Afe­kHmíTd9\x0012®¨Nig\x0010¬ªff6yyâø«1ôDÌ\x0003\x0007\x000e®¹ü²­Xbt¼ëN¾±SdÊ%êÈ\x00016C<Ë§Ï=|úÌ_ûýS\x0008M\x0006\x000fª\x0000Ò\©RgÊJ­;\x001c(\x0005ª¤"aJ\x0012h.CÚ\x0014t"2j\x0014¨aïP\x0002.\x0018|øâA-Ø¾uC¼\x0011o]µ\x0003©&®\x0000
\x001fÅñÇù8¬¿:6\x0017ØJðG\x0004 h$£5mm[\x0010ÁøÄØú[Çf7[¦'g»Ý\x0019gY!QÄó(ðµÎº®/,/]ê¸°xdáüë\x0017.Ì#î\x0012µçZiEÁF^\x0011£S¼»üG{xµXºsüVøoaóöû>ÿÀ\x000f^yñW¿}âûØB¯N\x0006üñª3CôzÔ½ CpÿPt»\x001bËJ\x0006Y÷\x0007ÃÁò"cËº¨P\x000fª\x0010këz\x0012PBé¡ké[,C N©è«©­\x000fîzìÔÉ\x0017ÿðÌ#§O\x001fî\x0008!+fê bhªrL\x0017³uÝ\x000c\x0005)MpuðMQNWc[þÍ~ÄèqÑZº«zû·YmÇÆ6\x000c8X\x0004BBP$\x0010D  \x000eABB\x0008\x000e9Á
	)\x0007N\x001c@+('8\x0003áÀ*@	\x000b8\x0018PbX^cÏx¶¿ÿÞjåUÿ3Æ²XDkzfº«««»¾zßûÞC²7å%_m\x0012°bº>³¯j`:2Ìôµ$_LðÍºn·7]k\x0012É5S6Ê-± õ,_ñhVmX·MHkPî,/\x0006Ëi1DMØî4ÝN\x001aÙÔG\x001bUûñÏ|íð\x000fúÓÓ/þÉÁýÇR;Ó+Ú	JbÙêÑÇ¾ðýË¯½zòÙï®_=S\x0014\x0013ï+pxÄ&4\x001a\x0016Eoõöæ\x0005â§"TÇ\x0010ÐN"'\x0008ël6<h²¼®×ÌÖY¦\x0015Ï\x000eÑ~²³vZ^µ´NDB­°i³E­\x001c\x000e&E¡\x0010M§Sã®\x00019¤¨\x001e9°u\x0011u©E\x0011äû²b\x0002!6ÛYWú²HD\x001dm!Áó|5MÖwu³5kªÄCZVéÒá\x000f>ôø\x0007N|êé§¾zmíem:H;\x0014
\x0014	\x0010¡Ý÷Q¯¤yêtS\x001b \x0002ßVÏ¼\x0013)¼\x0018wt©\x001b¡D¯Êé}¶ÙÄ'&r!+W7^aÌÄ<
U\x001c¥ÄéÂ2ª¡j»ª¼âl\x0019\x0001 äHE\x0003ÅX¥ãL\x000eu£¦\x0018@jÔ±À\x001bT÷\x0000GLcêPC¡u¡Ki2\x0018Ëb\x0001|ÜN7M7EÝÛiÖ\x001fýì7\x000f¬~èÏÏ=õÒ?ßwß»ÛnVN¯9×1ä\x001fsa:¶â\x0001YUqÅ-%6n\x0018Í}*L³íªJ\x0016ûÞû/>üðW~úã'Î}NÕ5b®ié\x001e\x0015¤XDºÖÕú´Y:\x001eø±4M\x0011ª1XÐZÇ\x0000(
{7Û\x000ek:ÎääØ¾üäÚÕs'ýÞúå\x0017dÌüag/âo\x0002fa0\x001cf\x0003¡Z?ÝÙTä¢\x0014\x0005W#\x001ay&#\x0013H¦Íò$¡\x0000få7µÓ>ËA,X
äåQÛRÕHH»lF"eÝ\ÕZ	±0\x001eO(í¦º­±¨fl¸R_®³VGAÒz\x001bÈTu\x000e!Jõ¶¢\x001fýÄ×ß÷þG^úÛoÿðÌEbà\x0015B\x001eséØ+\x0003	|ÿþØ#ß8ùûïüåù\x001f¤q\x0011ûÌº\x0016ò|y<X	×ªêªÀ.Ð\x0011\x0014
ø$\x001b\x000eó"s^6uÕÖ[Þwp=\x0019R\x001fÂÚº\Z9þÉG¿m}õ»_|«®_+F«Í¬WXl\x0019K¤¦LðV\x0012è¢ÔÉl¼ê4\x0014Ù6$\x000f°óE¶"³%\x0007öi¯4å\x0016\x0018\x0000õ\x000eõÙé
û#ÓI1*PòºÖ5Õ±\x0008Hp?sòD
±D$­H-[bú2R\x0014_çÈÈÜ©5ÙFÐ×6\x0019Cò1UlBCÛªzs*\x0001¿PòÉ
îÎÅØ)\x0017È¬u[ÖEìººØVë¡ò\x0016@·ÓÖj\x001f\x000fÉ$£¶ªP»\x0001Cä¶±\x0011$]Ð¤¢m	\x0015®-ñÉ>KJÞVÄ£Gêfêö"ò¿iwôÞ»î\x0010oh¼\x0015í{¯Ýk¯Óî\x0010Ìþí\x0007ÿÍx½1<þ¹Ç>üðB0Mß&Ýw¿æö® NPN\x0008»tñ¯¿úÙ\x0013;ëÿø\x0010\x0015÷õë½v{»ÁØ\x0012k\ïß<Ì¶^[\x0014Î ×	ZÍíî'o\x00071\x0006ÂDYïÕð\x0017.ÀòÈAõáºÇ_\x0011AÁø²9iccYØî¨·BÉ\x0019º(AC	q')áÐ8øÏXp\x001cÅ0\x000cp\x0011a>\x0008ö0+\x000bÊcç\F<êOpK§8æÇHôF\x0018#Õæå?úå\x000f\x0014jÄ _1?tì\x0007\x0008\x0007Âu§\x0015
Ù\x0010\x0007éA\x000c23èé¬üÍóËFP7èýË'\x000e\x001f]\x001e¤V5Æ\x001aÊøÿO9\x001e³ÌÇÆ\x001dO¨G¹=zhé=ÇØò¸$ºë\x0014ÓZÜ±PE!%q\x0015à¥\x0003Èv\x000eý8*sÄþ\x0012¾ÑNk\x001a\x000bÏáqç\x0010Zô8RÁ0\x000c&$\x000c\x000eã1Ê¹\x001eJÈz¼Â\x0007±\x0018ÞÛû\x000bÌ¯\x001fu» Å\x0019õ \x00197ï¹Þæxöþ:é¹Ûz®7Ú·Ý[w]!Üº>5ØM·\x0000L¤\x000còa7eh°]!Cþ\x0001ôý0GG4¨Q \x001f'\x0011dgÈ·S,Ü¥\x00112,\x0004:<\x0012ÆÎ>;û\x001cû1°¢<\x001cÐÈáp\x0007cb¼\x0006¹_ºÛC°HÈ$öZ]üÇ§~ýÌÎú$%æ±È\x000cf8ÓN3Óí_\x0018=øÎ£\x0007&cSWÌY$¶ß[àÓ@\x001c\x0008AØ? zå=\x001ddÙ»Nðå}'\x0001å)\x0000\x0018¸¿\x00009\x001cÀ\x001bHÑ¡jáj\x0017Àó~ëZk{úà¶Ú}ëa¹Û\x000c°h
¬®Qé*ø\x0006\x0017^yü|³úÙ\x0002
÷ðvà¢4\x0019¥É\x001cSñ~ªð
\x0017è¦ívªv­év\ðaÁFÌ-\x001eøõ\x0014\x0015K")$\x0013\x0008*\x0005u ªÞÚ\x000e¶Nµj¦ºk°\x0004\x001bÒ\x0017\x0008
\x0008\x0018È²aR,¥I.â$l\x001ch\x0015\x001fDa4ºí`5\x0012i½#\x0014wY\x001fÒ4Oò\x0011s!DÌ%È\x0013\x0001\x0006«Q\x000f\x0017©´QªkaÀ§<à\x0010±\x000f,Í\x0003ú".ÒXJ\x0011	Î\x0004,	\x0001
e,à´v¶^9}ú_§ß8w*°_\x0004\x0004ù=´Zt3Ý\x00065àé\x0014·z%G\x000e¬\x001eÜ·4\x0000µ30ï±ì\x0011#Ø&E½y£óJGûÃÒ°\x0018¬H°ß¥öNæ£CGFÇ³ÕwtÉØ ¬¢N¹Ý\x001aiú'|\x0000Z¨Y@»±ÔöcBßÞjÜ¼·'·y\x000b\x0018 7SÐílÓC8Ì<ß\x000bÀã\x0016ñÓ?boì\x0004=²8_\<ÊôÒ3Þí0/\x0010\x0016\x001bXá\x000f@æßù¦ï¬ìèAÔMµ±vöü¿ol½ÊYÉA*F\x0010\Dqp*ÁQ`§ÀX\x0002)0\x0004-v!¢}`{Ø÷u$\x0014 ¤³ÖV\x0019­¼®µj:U+]\x001bÛ\x0006h\x0004åÀçytÚ<Â·ôEs¼ï}\x0017ý\x000f\x000cü|_C\x0000\x0002?@\x000b¡Ä*¥µ\x000ee\x000faJ2ä²\x001482!3\x001a2\x001aBÎ+¥¦miÛm´miâÔ!uã(\x000e\x001cÎb²ÒÝ×ôoÙ»t7_¾ÁZ<yËR|oQÿf¿ÊbÛ8ÎðîÎ^¼II$%$êmÙ±aYÏ8	ÒØH\x0000#iQ´(P´}\x000bP o\x0005òÜ>´¯\x0001úÐ>ô¥@\x0018©á:¶kÇcÅX§y_¢H\x0012/»ÜÝÙí?+Ëéá\x0002uÒ -\x0001¸»ùgvgþïÿÿï+\x0007A`àõÈðé3g=ûàÝ+\x0017~ÅA¢óEc\x0000Xl¬¼\x0008^S´¶èôD¢#½GEÑf0r­YK'n-g/ë
\x000cÖß962òòF5½0ÿ¾D
3\x0016[Çî\x0003o®Ö2ó÷ÏuÙ»\x000f~îÐ[z¡¿IÎd\x00127\x0018,L¾¬½ªZu»Ý^ßøV£>?ÿ~¡xSõîÀ¾±ãÞ®aM£kµD2ù^e%Nk"ÅwH§$Àg ppxð;å¤¿'èîê\x0006\x001f\x0015Òwc\x0017Ûr\x0019\x0002·¸w\x0016\x001dÁjµ\x001cì\x0019u:ýkÕR|î\±på¬ÁÀôÐð+.·¡´\aq!qµ¾>ßI\x000bÕ¦zòô[}C'\x000bZ5\x001f\x000eîÒq+-&/I\x001bI\x001eS\x0016ä{?ú]±úèÒ;kåÕfÑ¦ ¸Gû_\x000fDÆ9Ñ¶Uo\x0014ó÷R©¿Ð:\x0000À°¸{BÃ'Üèæêj 4ÂyÜ­R|öÏµJ¾oàPßhAªÔZ]Me®2jS¤-@×d©¡c.w·ÔËåÅøÒ5©¾\x0018('; \x0005\x0006\x0008[Ç4m÷û'ÇÆOÙí õP±y\x0014¿¸^½+r6JãUíë?\x0018
pXC\x001a\x001a­b.sg5þPÇÍèäýÏÿÄçx´ðîZ!\x001bOÌ¬×\x001fñ"&ÙÕ\x0010¡\x0012´õ\x001aÍº"¡ã\x0013cÇEEj+¬ÃÖÕj-Ï>|OiovØ\x0003û\x000eý ¿:^¸Æ@v\x0011
sLïÿáúF:¸.ËuðZ[Â\x00058\x000eÔ/\x001aª3ÏuôGv\x000fMÛ¬.M®gÓ7É\x001bm¹É1J´}{ß°XÃÍÍ×\x0017ð8{4\x0019?Í$3\x0014elGg
FÙ\x0006*\x0001Àa,ÁÈ®ÈÀÛ3\x0002c­ü0ü¨²j´Ë¯¾þv¸÷T65×hfC\x0003\x0018KùÜXübs3Å*ë½d÷tdç®ÖK9g
\x0001\x0005CG»#s÷?¨Ç\x001c<þÓHx*6}½<»8w­XZrtu¢ý\x0016ÑË²\x0018\\x001dKÍäÒ·,Bµ%GoÿÀè\x0019v5\x001b¥pd\x001fk±Öª+Kó\x0017×ò÷Ñ¶º=£\x0007ÎLOÿ¢µ¹OÝH'.§\x001f\x0003ñ¦\x001f×Mð+¤\x0017\x00191ö¾ð\x000b\x0003\x001dmi3\x0014»*K9A\x0007ÖÈ÷\x001fëê\x001eªUÊ>ß¸ËåÇz+¸ÝT[ËÀG(\x0003x\x0005O2\x0019\x0005JS±X{÷ÕÔ\x000e(^ËÙµ±QZX^-\x000eE£6«­±QO¦>Kç/S¸ÅQ|ÛhR<
ö\x001c\x0019\x001a:épûÚ:Îgïf®n­§\x0005Îè
î9xòç}á£ÄÒü¹rîN©Å¨Mq*T
CÁ\x000cmD'Î¼øêÛ×¯üöî§\x0014872XlH\x001eoÿÀÐ+~ÿ\x0004ÈÇõµd,v¡²v£XÕ¹Þ@àèðèAÓ¡P¼&­R·³ÉÏ¶ä
ËoE¨@l{«Öází7H\x0010ÓKµXìÞhm£\x001c[ºÏÝ¦)ÔðàT÷à´ÔÔ\x0004é\x000eYÎH<»ðª©#ÑûÓVFíÍÍB>{?º
DlÐý#C§üÁ^b%Umf³±Êz\x0006ñY8 ²\x000c$s\x0016ù\x0006\x000e\x0007ÂÇ>ÿô\x000fª´l¨pÚthh`èù¹\x0007ç¤rFÒ¤Á=¯ù}Rµâñx¬>¿-øÍtü,¯°]7 
T(£ÄÙªÁÛ¼c{^\x0004JuÊ×1èvôV72±Äå\á\x000e\x0008Wâ°&ÙÞèèK¾I·o57â±+ùìuÈ-Èà\ÁÝSgK¥ÄÃ\x000fiMWydcìÏ\x001dûqe#½¬¶[º\x0015ê\x000fG\x001bÏD*¾\x0019ñeJ¨o!|Æü3iþ¶}Û¾¶f\x0018O\x0011,_qÉ'\x0002d»1åk
ÍM{~öÝ7¿?\x001e\x0001^¡âò´\x0008}ÊÇ\x0018D5\x0002Y.Ü;îõµ%\x00169Dýëÿ{{Í¾´³¶'ËG`æ
:D\x0003 \x0002ùÆ\x0004\x0003\x001a\x0008CºþoÅìûø/\x001a8\x0012
0¢\x0011Ë FfY$^\x0004Mcª\x0015"\x000eA$\x0011w³f\x001a7{ ²BáaÈ0\x0002ö8¢%\x0012¤àÎ0,\x0008"\x0004+Ò,Í:\x0013D\x0012±!f\x000câÉË\x0018v§LGH@d\x0014\x001aH\x0017\x0007´À\x0002¿¹¼ú§w~_Ï>åXEÓí\x0014µ»·g__HdAôâgÞ>\x0011BäiJ7E Õó\x000b¹Ti­S@{B=»#A;ÐOÃÐÇg¥ëÏTd¿¾F*@\x0006æ4¬\x0001Wîèä&éÑ\x0011Uà°
l®­ë*|8
R\x0010\x0003Ð¡	`0À\x0008~\x0018\x0005\x0019\x0005¤Ô|qÀ\x0015à\x000cv	Cd\x0004ò±¹o0Ó0y¦LKøpQa1AøG.äLÀaä«0Ö°
\x0017\x0008:\x000eÌÌ4¶Ó("gûÈ¤8ÉÇÆ\x0013Z¢ÿKÏÎÎaã Ì÷þ/¸c'\x0003ÐOþ	Ú*óD\x0004³Ý\x00037&ìÄl¦\x0019mâ\x0005KF$^ À\x0010þ\x0000þ!	"2h\x0006\x0011M³Ä\x000c¦°nÖ) \x00040GÂ
"&W0#\x0013!A\x000fYðÀè¬(XíHig\x001f>¸uþ<½QåxÑà98w¤7\x0003ä±*y]Ö±Áþß¯µZ ý¶7fü7(\x001c\x0003R\x0008\x0008\x0015(#\x0000\x0018Í´l.ÛÄÑ\x001duJ[&2Û\x001aVh0àÔB\x0002Eò\x0000)Q'\x001beö\x0000\x000c\x0008º\x001684È)<\x001c\x0005ý$±B\x001bºª(ªÒRäM¸@``5[·ÝD0\x0005C
\x001bôë\x001c+Úm\x001dàby\x000b"©\x000c\x0001¾1D¢HruSª(jËt3$IÝ,zÄÑà\x001a\x0013¬.NpÀ)ó ÙhÎ EQW5YSeUÞ2¿A"ïdíäªëÄÛ¢Å.X;EÁÆó\x0002ÉoI°i&}[jZ}0\x001c¢\x0008$\x0010Ì¹`,ZÝ¼èäy\x001e6\x000e~\x0003&.4`¢ªÂ¶\x0015	Â\x0016¯ÛÎÏ&~H\x0012g\x0019Ö\x0002³yç\x0010\x000f\x0010\x0002Àqè <8ÖÆ²õâÊü'3ñ»ãÆ\x0016©
f
0\x001bYýï\x001dJ\x0000C!8K\x0016TmÃÚ^óoìWyl\x0014×\x001d{\x000f¯×»^_ëc}rø\x0008à\x0012\x0003±ã\x0004°	\x0001	T¶4nE6¥¥åVTT¡J©\x0004)®\x0014E\x001aZ5­Å]q\x0018c\x001b\x001b\x000c\x001d\x001dl\x001c{}{]Û{xÙ9û{³àº\x0001	P©ÒV}\x001afÞ{3ó{o¾ß÷û¾¬$S¢IÏ\x0000 E\x0011\x000ex\x0014V) ð¶¡Õ`hµðQØj´2Qä%]vÎÈ9¹!A iQ\x000eI2\x0007\x0014¡\x0011ÁcaØ?3ÉCÜ\x0012~'ºE)@zÒìi\x000fs\x0011ÏtCNàáG\x0018VDáÇ%Q è\x0008)U£ÒÜ$\x000f!3\x00103 ýqð\x000f	÷Ì©\x000feµL*\x001eÞ/
\x0002ç÷OÛí½\x0013Ã\x0014T3\x0014C¨(B!Á\x0014 p\x0002½\x0000q\TD\x001fÚvÈ\x0011\\x0002C!á\x0002\x00015\x0013Ô\x00009\x0013\x0010EÈh\x001e\x0001c9\x0015\x0005?Ï\x0007\x0005!\x0004pQp\x0001Û©\x0000þl¨ÐÍ¾G¿U"±\x0007\x0012è>¡\x0013³Ù\x001eW8\x0011èB(Âx\x00100,¼\x0013¨â*¨	ñÓT\x001e"\x0010ÝKÄ1ÄÔ¬\x0000\x0016\x0017äÇ#áÖ¢üÊG\x000bÅ\x0005äLr`\x0018~8:·lÝ¦½\x001d'k/ì¥I¤ÙïF\x000c£¬\x001d®D\x0013\x00049/ÿUeßc}ø¸m\x0004ÊNzf~ `«¯9ðéí .\x0016ä­\½«¿ÿÆùS»4Và©Ä9\x001bßØß7Ðvæ/»MiE%\x0015Y9_cN«··»îfëq(k7íÏ^PÎÆlÝ\x000c`¿ÕqäRÍ{\x0006}vÙºwRÒ\x0016ö[;0ÎÌÊ\x001e\x0018ik¬=4nmÐjeL©T\x0018\x0011\x0012=\x0012Áäi[Yù;\x0001sÚ56íILQG¨Ú×Õ\x001fùI£Ö²æµýY9+§&»¦§Ü\x000c\x0013©6^­«l¹^1·xMùN:ÞnÿL§0Åïô6W«¤ýC¬/\ñÃÅÅßfÔÌ¤£
p\x0006S¼1:³±ñHsÃ!ÞÏ4÷õ­Gm¶ÞÚý\x0013Û\x0014\x001dIÓ±\x0005Ïo*z±Â5uÏí\x001eOH²\x0000]7Ô|ÔÕq
Ì\x000b¿º;;·Ä{¯Ïí\x001a\x0015IÂ<Ï51åº\x0017\x001cð\x0005X6áç]õõG;ÿl`ø §äl*YýM&jÈ:\x0010¡J²X:Zk®þÉã¹«ÕRH*(-sNIiÉÛÑÆèÁ¾\x000e>:Á¼ðNwsõ¥}¾é»lÈ]RQ´|#¨ááÁ\x0011­Fât´Õxß=9²øåõ\x0005ÅÛ´Åé¸f\x001fêmo¿hsÞVi\x0000\x0006[ÐÈ!7oÏ~îË«Jd0é­íP\b(Cög=
§«vòþÑxóÂ­o}ØÙu¹áü>94%«5jeÛ·~?Ø×R_[éqh4\x0006EUB´ªä%Hu^vùê²ínÏé\x001cOHÓhÔ--ÕõõG"éé 'mØòÞsÖO{û&¦8^¶¤Ì\x0004¦¦æw·Úþ\x0010\x0001µZ\x0016q$>q2ÄKPg£³RW¯-ÛÑAÍ¦R\x0019&ÓèàÇÎþjÌÕ_ºf÷\x000bËÞÄ)Îáìf\x0003).ÁdLºÚðÁÆÃ!S§µløqbÊÚ3û¬=õ¸Æ´QÛóÿÊÉã»ú»Ï\x0017\x0014lxqÅ\x000e1Ý1Úåv}Ú|íøÀ`Gþ²²ò=^\x00177f·RêPZúB/Pw©ÒÚuV\x0008\x0005Sr^*]»'Ùç\x001co÷y$R­¶¤Ï\x001b²Þ¼|ñÝÁ¾+)Ió®øzvN\x0005Ï²©®Þ»\x0017n¶\x0004±\x0013ÖØjNôÂÈÊX¿fÝ\x000f@ÿß´GEEFjô´\k¸ræl"®z¹lÏÒ¢m\x0001ï°kÂÉ\x0005¤´TAbêÿøqÓAVD&NÖ \x001b!"bµÍ[ß7'-ðN[\x001d¶>\x00066ÅføC.Ûø96ç¦Xi2.1ugNÿz°ÿ<\x0016\x000ctTzÎu«v
RhdÔ\x001a\x0013c¹ÓyáÒ¹ßüÄüÒ¥ËwÄÇ/òyG\x0006êº;kúïJ\x0014Q<<h\x00022s×®ýicí»í-G)Æp]TdÆú;¢s\x001dö\x0001\x001c§Í9.oÏ\x0013{Ý¶^¿Äç.~½tåv\x0006»$ÉLKôOô7\þëÞ¦H=¤L1"\x001eb\x001dº¸ÔÒòJKÆbÖ7âp\x0000\x0017éÌæ\x0010ë<UuÀi¿îs{\x0015o/-ÛÅjçxË;fI[dsÞª®©\x0014x¼bëA\°õ@yJÉÈ\x0006mÕXsìÖc\x0018Í-}eçüù\x0005ýC­\x0001?\x0017\x001b\x0018«Çj«n\?Kª\x0002\x0014H2YL"\x000bZZ·¸øûË¿sìPÅ¤³Eæ8\x0018ZºüÍÂ·O|´{¨ûB_ÝôÂ¢7\x0004¿ÝaïõqÄä<\x0015Ã45|xõÊa5ÍÓ²QDÊE$0ÎÏ²:ã¼×6ÿÂ¾Ìï\x001bwÚú(L\x001b\x001b\x0019<§ÿÒi»ÆúC¨ìÂ¢-K^(\x001f\x001e\x001aòùìiylÐÛpå'´D%­`ã7\x000evß½|ùôÏà}*B\x001fXñÝªAkkÝß~\x001e\x001e%tz`Qü)ê\x000e2O^ae¬tþ¿/§l\x0004&ÿç\x0004óÿöß×\x0016Ì\x000fË¼9\x0002i¤\x0004Í.´sóQñ­-¿\x001a
J\x0003Cbø\x0011q>"\x0018èÁA-À&ÆFÛÏùÇÙCz\±\x0013Ï8òÿý\x0016\x0016ühSA¼Ä\x000b\x0012'I<\x0010\x001eö\x0000Æ\x0006a\x000fLD:ëYúG%\x0013\x001cÃI\x0012<!á\x0016§(¢)\x0015«\x0018ð\x0004Dp\x001f½0Qâ÷PX`Hä~H¡{8\x0008ä³CÂ)N
<\x0005Oð \x0016(!\x0011¥q\x0018"( Ix\x0010F¡\x000c*¸%Ð
CQÐÉ-«:B\x0003;Òxò\WõU1\x0018`4j^ÂH\x0019KÕë^ÊËÑSàÖx\x0019{j~y@VÄ\x0019FRµ=V§k:'Ùk1«D\x0000sSâ\x0017ll\x001fÑ\x0008 C|\x0010ù$M~\x001ecNf\x0005\x0002ì*!ræ\x00049$Ê<*óáEVx\x000c°%	\x0012ê\x000b^Bî\x0016~¥¨\x001c2$â¨\x0007\x0000»*ÉÀ	0^Ì"¤\x0010\x0008ã3¯x\x0010\x0000ºÐ8Q\x0016d\x000c`ú`X\x0006 qY\x000c\x00076³\x0016Yù0öy¹ß3»PZ¸_>s|\û\x001cÏèþY13\x0001Ò\x0007F¹Æ	 dåL<xV¹DÉãÊ\x0005¤\x0003@\x000ee\x000cä#\x001dîôÀ	J!\x0012Í$ÂÓý@IÓ\x0004J4\x0012¥\x001b$t(\x0001QC·k0¤|
MSEFÂÿ·¶´·]¬Æü^ì¡$8Eüý2\x000fêÊÂx¿µ_o -¨ \x0008\x00067\x00144.+\x0001TP4ÈhP3\x0013µ4S)t\x0013èÔÄI\2ÁX¨3FKÑ8â\x0012Ph\x0016\x0015¢F\\x0010AQ\x0004Ù\x0006Äfëíísn·1bYSå3Lyé¦^½¾÷½{ïùÝïx88½V\x0015\x001a\x0012àíåÉs<\x0004\x000e½BeÇP=A\x0008Sµrð@¯·\x0015£DÖñ6À\x0002x\x0000'ªU\x0001:À\x0012 B@"tá\x0006ü\x0001\x0002N\\x0001cD\x0014"ÚI$\x0007ES\x0004F£­\x0000¯âD\x0017!&ó<ï`í\x0016Þa\x0011\x0005\x000eês°¢ü¢'4K(ýÁ`fR£ÕèIRJ\x0002© î¢N\x0004ÆyÍÖnst"ò\x000c[
\x0002¢J Q1ZÉ¨µÒaT £(K\x0002ø
I\x0010\x001d0\x0007Þaå\x001c\x0016w(pYz\x0012~\x0002® 4*´JI©\x0008VÈvQÁ³wØX{\x0017ÇÚÐôàh\x0014îÊ¿4\x0005ïëE«Üà\x0002>ð\x001cÌI, #,\x001cÇÙaÞSá\x000b0PH«\x0011a4E14­¤(\x001aô\x0019q\x0005>\x0008ÃD\x0002\x001bZ¶³­Õu÷J®ÕTW\x000b,§$)\x001aD \x0008ÏE\x0014Öb
'\x0017s\x001e~×\x0011²¯§GÀ\x0001î*E\x0005\x000eú¼¼P#îd'4è#\x0013²@`\x0000\x0007ÎK U8®÷R\x000f\x001a©
\x001eF¨U"gcA\x0015a{D	æ$	O\x0012«üæ<sGv	\x001a\¹ÈÙ\x001e>7ðéë¼;çÔã@¸¤ÌÉ\x000cÌü<\|6e\x0003®\x0004¥Ö÷öghéA¥(tà2%)H	ïñ´\x0017Ü³ëù[Ï\x0005¾l\x0003h!£ý0bÀs¬ÃnçÚY¶uØ\x0000"\x0012°@"dS¯0ç(\x0019\x0013jïZ;6
æ\x0008ýP¾áD\x0013D^\x00149h\x0013\x001eCgs  %Â9Ðµ+Îu.àÿ«í_oÔ³
Vé¬g\½¡hqi8öLg\x00143à\x001dÕ@ \x000f¤à ÿ¢µ@(^É\x0013\x0000D¬G!\x001e³ì\x0014Ctz\x0014®è¾\x001a§é*)_\x0016	èO9ÅÕìgøÙ­²Ì³9[ nÃIúi'tÊ\x0015¿$\x0004X­$âý<\x0007z{\x001bî7\m·Üïê¶\x000cO^ÖÞÕxxÿJo\x001f4hÚ©ëêëJrN¤ª\x0018¥(Ðú~ÁÉ×7Vfgn %Ê-pþâ\x0003M\x000fK/û¶­µT²P\x000f¾\x0015ÿçð\x0011\x0017.|_ô%1¾A6¶êqû£ÙÛ\x0002\x0006D\º°ïRÉ^%M\x000e\x001d\x0010?sSeEnñ3Qê&Iµ3¸(w
:lÄ²\x0019³7TWåæfïij,÷\x000e\x000c¾Ò¯ïÐ½{µµ\x0016õR\x0006$¾³Û'0¸0ë²\%ã®óòl{T©QùEÅ®õ5f\x001cNk5]Ç\x0005"&vÅ°¸.}åÇ-²Ý:)jÓÄéËk\x001f=~ô#¥]­
¿\x0010&Iåg§eú\x001aÂ\x0017,8Ðlª,Êßaj¹L3ú\x0001¾±IóÖÞº[pñÜ>SSy`ÈIQ+ú{gì_ÝlÊÑ{
>kG@à¨¬MwÊóºØÁÃcbc>vÓô+*þâJÉ>ÁA\x0004úÇÆ'n°ZÛ\x001fL\x0011lWqÊ0wÑ^p\x0008?æî¨®<¯ëí\x001f\x001e¹hÌ¸\x0005Æ¿_+=À(yZáP ÀyëT»\x0007M]åï\x001fþ}ÆúÖË<kº64lö²¬íýÜû&¿w°ÃbÎ/ÜÚÐpÎCçã¡\x001aL2¸ÕÜhénUy\x0006G,\x001a5|Ö¡}ËÚÛ«p\x0002RëäR¸Dó¬Yfø··½\x0011\x0014uêô\x001f+o%fJÔ¯c¢~Ws¯ôè¡\x0014ÙÞ¬ï\x0013º`ñ¡òÛÆbãf3+h-®ñ^ü^FÝýËç¶[ºê4´^A)@Ë\x0018Ñek	
\x0019\x001f\x001d½Zàäì#iæÎ\x001a­Î76n_ÐãëZjYY1÷Ý½ÁCÆ\x0017]ØS÷-x\x0016oÁ\x000bÓ[[jÏüÖÕzCËx2\x0003hTÅÞÕß;rÆÌiJ{æôæúÆËjµ§ïp­FU[^ÐÖÝ6-þñ\x0013sûnáÉ\x001f¶²¬\x0015\x0012÷y;¡z8oÜ^qõ¸Þ\x0010°¾ÏÂì-u÷8É*]DÄûaa\x000bOg­¯º©Ó\x0019ÂF-]räÈªZ£,ð8®òô2¼á;¾êÞÇÖ\x001dvSxØü¨É+ººê3\x000f­qXÌýC&&$meH*ëÔºÚº<NL\x001a·2rì»\x0015åÿ8s*UIi\x00087Ã¥55U5~mn©ÐjÔ¿H,Û¸Î¾>ÃfÍHD÷§»÷½ôQ\x0013RÍÎ<ö¡éN¦&í\x0018\x00191ï§\x000b»ÎÝ-²Ý}¼\x0007%¼ý)%'¬yd¾¥TÂ\x0003µ°=¸Ì*3\x001eýçÎßÓ»¯OVNúõ+\x00194.\x0005\x0007Oø)Ãè9[JK÷[9kPÈÌÄø-­uy9©\x000f«K\x0002ß\x0018ûû>îCËÛ\x001eß¤eM\Â\x001fN,ÊK/+=fçð)ÓV¾YUhÜ¥×L¨®\x0010¡üB\x000c¤ ¡3câÓ\x000bv^»¼WP°j]¿)ÃÃ£ss¾,+ý ÜC/µ¤ôÊ©¢Â¿°"ø«í\x0001~\x0011\x0007¾[þèq {»\x000f \x0008\x000f«µÃÆ6\x00140\x0014K$Ô\x0018£Y×'0fÖÎ àqÆ¬Ý%WþfåÚÃG&ÇÇ¥TW\;kL75_\x0010óþ´\x0019iæ\x0007×µuÞÕ»
¤q¬»»AÅx\x0005\x0005L®o(5wTtÛ:B\x0006Í\x0012½\x0006h?´ùqý¤Ño&ß¹»QÇ¸«¨^\x001e\x0006ÕÒii\x00043\x0006Å¶Bb ì¸6Ô½9îÃÈß\x001eØ·ðñ£\x000bPa²ftäÒ±?8v4µ¥æ¤ã¾\x001a=vNÙy§¿¶ðæÞ}\x000csç~NÈê'Ö5:Ò\x000f¥V¤®\x000e+kÕô\x001a¸Í\x00102öÌé/®|#qÖ¡¡I	sR+Ê
Î\x0017n~ØT3%jÕø	ËËò¿rX\x001e\x0004\x0006M
\x00196ãàGÖNS ÿy\x000bwÝ©ÊÍÏNÃ\x0005Di5¾>8Q{¿¤0k£½»T{(P
û_û©ÿ¿öCìÙðWÙÿW£öÔ¯ÛëZO\x0003CY+	b/ÜcYRÒ;CýõÈ\x0015¼\x0008Å\x0017à\x0007w0Áåa\x001f>¸}r}ç£;$á!cûÕm3:
dË Ñ
Èz±è?8N°f\x0018¸RQTH"X3\x000c¹W§\x0006\x0018r\x00102À1p½\x0004¬\x0013I\x0012$M*)¡1"å§Ò\x0007}\x0015$\x000e!Æ\x0010\x0012p\x0001\x001e\x000b%\x001ftÀq\x0012wz.ô;\x0018¤Ò^-@U\x001dgø³ç{Ï¹\x000f¼"¨Q\x0014c`P\x001b[C«\x0018E$ êj}¤6QJ3vÆGFb;±uR&±ÆÆÉ¤vÔ\x001aE£1&Ä(>H5¦©F\x0014«ø\x0000(Ï{/÷×í¿çJÌLÆi²0°gwÿ}üÿ÷}û/´°<BÐÈsPå\x0010â\x0004úÉ\x001c|s\x0002\x000buÄC#5^\x0004½6Ñ"\x000f@t$lmÐÐr±îÐú¶65ò²l\x0012\x0001üÒ\x000b±Yiiñn\x001b\x0003Ï·G÷IäXl·\x001dø¡Ñß	qqH²tS5à@þó£?l\x001f.\x0011Úh^aB¢¢ªví\x00141õqÃã1tSU\x0002í,¦¬&ð¦Ã\x000c¡OA\x0008\x0013\x0000ËB{tuÓ4è/xÌÔ1\x000e\x0002\x0019\x0018CÁ\x000eN@Á\x0018ë\x0018&³úL
:°Ò\x0001Ö\x0007Ý\x001c±#®x\x001bn\x0018\x001aÆ\x0006a»\x0006äXIdû°yÖ2òàÁ"\x0003z¢Ú´<ØÈY\x0005*ØÚ÷àõï)ßº¦Y«ôlg-W°Ý\x001f,\x0012Ö¨2Ò.3¡ÊY\x0014¡-e!\x0000M¬a\x0016\x0018J"Ê	J\x001fø\x0011\x0010\x000bä\x0014\x0008T(w(Ë#`ÈQÂ¢.\x0012EèÆGHgCY<\x0003ýr\x001a¬\x0008ËK.7§«5'O®<F:vA î!°1\x0002CQ<²3ý±~I±.¥X5\x0015i¶\x001bÿ¯#\x0019¡\x0018\x0018»c¤!)8¡w\x0000\¥\x0001BÃ\x0018\x0007ÎÄà\x0018\x001dv«bFÀ\x0015àgÅâ\x0012SY`ØÀ(#c\x0013Ï`Q\x0001±1TX
kZ\x000cÓ\x0008kZHU\x001eF\x000e8Ô9]Ø³\x0000yj\x0002ks,»\x0017ñ2'
¬\x0005p\x0018§é®izØß\x0019jÕp\x0000(\x0006úÀ0àqÍº\x0010y\x0013bÍ°M\Ñ¼èì\x0012D\x0018ÀÒ'\x0001V5E×Âá_S\x0002©AÜµIª\x0010,·K.É\x0015'vh·\x000c\x0011¥;\x000bï¼°®´°\x001fþbp\x0005\x0007e(¸\x00082!¢H°;Ü6©À\x0011C\x001aM°ÄT)0Öt]Ñu\x001dZ\x0000O\x0011ØR0I\x001df\x0015EÞ\x000eKõ\x0016ñô¸p\x001cP\x0005PG8¡iím×nÔ9wçêMA'\x000eY"\x0008\x0007ônÅò$<\x0015	ËBôÀ5\x00083IÜ­_|tÿø(ÙN\x0007\x0011{D´À¬ÕèM\x001bÝ\x0012ÔYÌ\x0011\x001ea
ÑRín{ßQÓí}\x0006`íÄ*èC¦Á\x001aô1FºäÅB/
:¹Â?\x0002\x00051#c\x0008]tIÙ=¬Ûí6#\x000f§:¶Ñ©#Je	\x0018¨Y÷\x0000\x0004Ù\x001bÝß.J
\x0017±ÑÎ\x0011Ádxë1Ûw]ñä[)\¾Rù¨Æ\x000cTj4¦g§Ñu¬SähàL\x001dd\x0000Ð\x000e`ÃTµ¨GMê\x0019ëb°Ô\x0018Èéõ\x0001÷\x000b(<°\x0013R°\x0015
\x001e­Ê\x0000UEU\x0015\x001d«Ø w\x0010GÂ< (,ó]þüáJ\x0004­\x000f\G\x0011EîRï\x0014\x0003#{\x0006,[ùL÷ðH»\x0015^\x0012i"÷uÅ\x0012H±µ\x001a%<øí>#\x0014×ãÎÅ~t_,Æ\x0008N\x0005Ö\x0014Éÿ\x0010~ Ö:\x000f\x0017¨,âÖ¤äÜÉSW_¨.=â{\x0013$ãÅ{ºnòûW\x0001õ\x0004\x0000;!öH2Baµo|FvÎRw´÷ó@CÊÐÌ¥7®ÿ»¢t¥d\x0017tõôIÎÿå_oÔ_>°§HÄí3aîü[ÿú¼òï-Í7l²È#9'ïmo¯Äãk.ÉR_*\«èN1çý¶Öæý{^ï\x000c\\x0015\x0004Ð\x0017^ÞjhM\x0015­ºÝX+;¼,=;Â¸`Ç¼<ñ¹Â²\x0003oÿb¯\x0019jâ¤¨)\x001c;vá®½+.ÕîðÚ\x0012§Í|åå½%öZt\x0011\x0005Mi©ù\x0013ßm»ùÑG¯:q«\x0016ÐÓ¦ý<{±¢tìÚ±Híl½rÄ¨Õgwúº,3{rÑã©\x0013þóÅÖÊâ¤äôY3K¾©9~x]}Ã^Ñ\x0003G\x000c;nÂ¼Û^«¿zÜÄÍ=føÈ\x0017g<·´tûÚs\x001bÝ¡9ÓÖ9=±[7ÍÁ:EÅvOÊÔ\x0019Å11\x0003>,)h¿SÉè\x0012â\x0013¦Î~Ç\x0013\º}IÓM_A¹Óg½}îtYUù\x001aF»k.güèù\x000bÞ­©©<Zõp¨^f\x0012x,\x0008|°-Ø085/cì¶¶\x001dÛ\x000bÝ¢\x001e\x000c4'\x000e0éÙ×XF+Ù\àBæK¿õùCJYÙ\x001bW."\x000bÑì¬¢\x001c¦\x0005«÷¿?*=ËÆ¹\x001d­aFH'¬ìG¦Mélò$¤äæ¯á8yÛ9¦r[ÑÔ\x0001'NVì\x000f6íØ¶	5{âÍ~iç¹\x000b¾ª\x0012\x0014?#¸(ïóö\¯;uìøê ÿS³2C·Æ\x0006Bÿ©ßd<õJEù¦³[	§\x0004\x0015-#£ süüêó\x001fò­W\x0019íW/ì½}eE×/û$[¬¸ÙóÞ³K½++Ö\¿T\x001aí5L»Áp*w×`øáiór²_=zpË¹ê\x000fT¥\x0017Ü\x000c\ë\x0002æuÜ\x0011ì_2xüÉ\x0013ÿ¨:¶¶Óã×\x0003YÞ\x001a2¾úÔæª5ÞøAÏ\x0016%ôN;\öÖµÿ³\x0012fewÆ¨ÂôôçËË]9ó©CNJýÙ¬	Ï,.)YtãZ9$[àÅºf\x0002\x0006æCk\x000b7'%ffg-sGÉÛ6-2­ýËÍ{ÓßÒ°{û\x0002iéäÚ\x0012â§<?um{û×»w\x0016èÆ9\x0007¾²ðý[·j+|kÛî\ò¸bïI;äç\x001a\x0013N\x001e6~ZÞ»G\x000fm=}æ\x001dµ³3ÃR§L¾êÄéM_\x001dÙ\x0010\x000e¶Où·þÉãö~¼ìæýv\x000e4!oÆÚÇú<ôÉª+u!¿`\x0007'º¡íÑ}gÍÞè\x000fv\x001c(ûCÓÍÏ!¾RÌéÓ78\x001cÑûJ\x000b¿¹z\x0004R)Ù5©(1)}ïîß_=_>fÜ¯G[t±ú«Ï|\x0014xS
ÓFÍËÌ*ðßùºtwQ@i\x001c?iùÏ=½ïo}l\x0018p\x001cL\x0006R\x000eX\x0013uÐ\x0013¹Y¹+ª\x000e­\x0003¾èáI\x00182=u %ì«øssÓ&#»bÌË_î±;öí,l\x000e×\x0001I\x0007&NÞ¾yaCãAS\x0003¡Õyd¤(^\x0004¡5é´\x000b\x0013F
µyãRrò£b½\x001foYyçÚ1
Dõ\x001b»Òãß½ówõu_>=qùè1\x0005.\x001c,ß¿·A\x0010
/M\x001e©XWÃ!HðLÍ\x00112îºãÒÎ*\x001a2lË·ë/dæþýj\x000f®ª8ãgwÏ¹÷Ü{s\x0017\x0004\x0002¤\x0004\x001a\x0011"\x0006$\x0018S(Ç$R\x0010Ð¶B8Ó"\x000eµ:C«õ\x0001Hu:ãaZ\x0007Pä\x0011(L¼Ã«ZPz\x0006B\x0008$ò\x0008¹KîMî½çµÛo÷ÜÄ\x0004,c+þUÃ¹Ý=»ßî~¿ß÷ý\x0016=X¸ Ö¿sËör\x0005yA Nº\\x001e§KEèp\x001eÁ\x000eÓhuÈI\x0005\x000b
æ­]3ëzËQf\x0002\x001byG=8·pì¼-[ê+cQR:sÕ\x0007vïøcí-\x000e§\x0012²¢?¾r`öø\x000e,ûô_o§ª} 
À\x0003	pX\x000fyRòJ§ý)9Ñ»mó+õ;1¦¤\x0017<º\x000cpºµbá¥@CÙ´\x0017s\x0007]·æåjY
µ\x001bÞÉe+ò\x0016Wýýù³ïìûÇ\x001e_}æLÕÞ\x001dK\x0008äË6÷éÊcÐ¢eW\x0014ÏîïoUnqõ­n\x0012§_7â»K®îÿÒS¼\x0002Õfùprù´i
Í\x0002\x001a\x0001@¤¯sÅ¯\x0006´ \	_ºøiÕößµ\x0005NË$Qäåw}õ¿-,.39\x0011`ÐfºI5Ã·eZ\x0005\x001a\x0003$
<Z«\x0015Æ\x0005Q\
}»Â\>!`®d\x000c\x0001þQ§\x00141\x0011÷M¹®\x0008Bq¾ÂS"#Üg\x0008üEøH»\x0017º0×_Ð"C\x0005\x0013Ìõ\x0019ÌxþÉ[ öC\x0017\x0006q"Æð^\x0005\x001e,Þ\x0004òWYFÐE\x0008_]Ëé6ÐÎkë>9.TvºuFeC/\x001e×7Ù)ÃYY%m÷ýF\x001eÈlqØí\x0018¡êõdQËÀL'\å\x0011z9îpAÂ\x0008HEâÑÙzM(6P C
´ªdöö¹\x000e\x0007f	^Ë°¨n 3Êñ\x000cs\x000b5\x000bQ\x0013\E \x0017>a\x0016\x0008\h±\x000c
}¼Ë
W½|\x0008üE©\x0001Î%ñux\x000b\x000cF¨@£()ñ¹\x0019\x0017ÂNÊ_6B0Ò\x0004SL°\x0006YöÒHP=,¾A\x0006³ó®îb×{\x000c½¥E\x0012ëð\x0013\x0002HÜ6XßÉrkhîjé\x0002B·1C\x0001ÅÝÉ\x0002c6¾Ä\x001f0C\x001cÇ?7#$`\x0002ßb\x000e\x0015ÙCÈ\x0002\x001d¢\x0008DÀ\x0000Ì\x0007`\x0004®°
,\x000e4#¨rì\x0001¬`0\x0011\x0015x+\x0008àÆ1\x0013Õ\x0004ª[uÇø\x000fU·]\x000fzT7¬\x0001<)\x00107¶NM-Iuæg\x000fÊJK\x0011\§\x0001\x0017\x000cÖR\x0001\x0014ô?\x0011\x000e\x0013\x0018L\x001fñ\x0017\x001c\x0007Å\x0014TN}érn\x001eí×¿\x0003D3\x0001d\x00175Y3$\x0003DGÌ4î¨à\x000czmO_p\x0000Cx,<&864
\x0014ÙÁ÷)9\x00117³¦e\x0019¦	Ê,\x001c´ëz\x000cÂ\x001c,	Ü\x0015qç¶\x001dÉ\x0001\x000fÜëLÆãñ©Î$Yq\x0003\x001dÙ \x0004 èfèz¤=Ø\x0011	RIÃg\x0014
'«ÛI8Ü5¶[MP\x0013R\x0015Wuºe"Ãé
º\x0011Ób\x001d \x001e\x000bc
ÌB$ó.â7\x000e\x0017,«.¯;)Ýáp«\x000e,«pé`%\x0019\x001e3ô\x000e=Ö\x000e*\x0007Ì¨Ë¸wÀ´\x0008°\x0005êTá&}âe'¿n¸}8\x000eÀ#ì\x001d¤\x00165\x0018Ø@\x0004\x000fÃRàWÜCÀ0ø\x001a(^Q\x001d\x000eU993ÙÁàJ°¶iñ{d	ÉTYíW\x0002§j\x001büµ¡@ÀISUÁßY\~0\x0002r¦9yªA1²`~K"Ô\x0004
îKÌêêsaI7MNRø\x000cÂ\x001d'<¯òÜî^\x0006u!9øäÈ}\x0013J\x0008gIS0\x00154+rr¦çÉÉ2ÓRMFp\x000cN\x0000NYÐ ·¬ÓP~ü¾;Ã\x0004â<ÙE8Ìæºn-RwÊê\x001cÜ=¡\x001blO.u\x000e\x0016QÚº\x00158¯¬xRR\x0007¨\x000eWó¥ZÓlÃö¦ø±IÒ-¤×\x001dF=WìÙ÷UûÍ¼úÍ
<\x0016¼\x0005KXöv-8hp\x001f\x0013Î\x0018OÝbvÀà±	 2S\x0004Kà~
E3ámòÇ4£\x0006`Ùhà·Z\x0014àNM¸u@±%£\x0012îÒST\x0018\x0012^ÓÓ&Ö\x0019¤»o\x0014Ý¼AáÆ¬ë\x0004\x0004ÉÐ
üR°¯H\x0010Döx\x001a\x0012¯ð¬·òdÃR\x000cD\x0019EçÅsË»¢hg¤³i\x0012²\x0011¸wd'V"O\x0006WÔ{l\x0004ÊqJ\x0004B¤ön\x0001{ôN)Mö¼å¶(SÙþ9%Ê^ùâäý»\x0012\x0007\x000fGçÖà\x0017c\x0016*\x0013áM3cÈáî5zèà	DQMÚát&dô¹§-|qëûÏjm\x0017s\x0014<×xáøíp:Æ¨¯Oö´\x0019Ë¿lløpëËN\x0016V\x0012ûÏ³úòþ#\x0007W·^;\x000blDPâ#eoB\x001eztÿ²\x000b\x0017\x000e{\x0013úÉ\x001a8V()óþIÓW8Uï¹3\x001dÀhDêÆ°\x00113o\x0004ü{>x©¾î×&\x0004S+Ì¨+¿àÉâ\x001fÏ©Øôlàü1ÅEtrÏÈÇ'<²pßÁ·OücM¢³OéÌ7bm{ÿ×
½
ô¨\x0013Ú\x0011\x000e\x001e5»°¸üTÍÑê=o¤\x0011ªw´¹3F\x0016<Ñ{Ýê§Â­\x0017\x001f²${ÈØã\x001f¯9~ð­\x0014oò\x0008+(úÙæñïø rqÆÀY³6µ\>yxï\x001a¤eä\x001cýtñ¸ù55L­\x0019ËºFIRrnNVþ®mËý\x001f¯JLî7±ì5Ù°þ¯O¸¥¡©LM<ý´ô¬
k\x0016\x0019¡Ó\x0012uÃ¡Mµ´OæÊM/5Û;lÔÜ\x0017µ®¶4ù\x0004øZ(iDÁTÿgÛ÷ì{5ØZçudb
)u$\x0018¼r_á&üJÖùs\x001fzIoÝl'î´A¹cn\x0004ë×½3ßì¸R4îùá÷O5L-ÐRO`$\x001c8U{$Ô|J\u§æÜWôÔÈáÞ}§<x­	h\x0017\x001cW\x0010\x0005!Ô\x0011íhîS8þáßGÂ­\x0015ë½íF»+9·tÆë\x0014\x0019\x001b×Ïgf_ï{xò=ÿ\x0017UÕ»h\x0014ÉnÙçýùO+.ûä`õòp¸É£ôB\x0010O-¯!µiQTüËqã\x0016>{P×ÂÑDµ^÷öî5Ä_³}ïÖ\x0017
Ö6kÎFvW¾\x0010¼üO\x0019Ôn<:{/epõgj6§$¤1	"\x0012¥-Lñ~à\x001f\x0016Í[û·\x0003\x0014$HCØB1UrÚÃSÊ\x000eÈÌ?vè/'O¼8 5Ú4fÜâaùS?ÿlÓ¾¯§¦
\x001c?eIFß¼}U+Î×í'NLÔ¤ÂQåÃGLÿ¨rIýÉª¤ô¡3ÆO\¼ñ½EM
»\x0008\x0006º%â\x00194° wð\x0018Ù®í\x001eor¯ï_\x000f\Øºá\x0019=\x0014øÞ\x001fL^\x001a¸RW±~®Ç­Dh/eøô\x0019oÅÂ×¶løULo}ç¯º|¹fßî7-u	j¯NrC\x0019³0ÊË/--yµbÃoÏ7n
ÕZÿf¿Z£ªÎð=çÜ×î&Í@È\x000b	\x000e\x0004(\x000f£\x0001ò°H4\x0004Jq EÛR:-\x000eS\x0011Úâ0S+vli§Ú\x0019ë\x000c\x000c Hj¬\x0012H\x0000\x0011
A0\x0010³1$`6°!Ù$»÷uîíÎÝÐ ©#Z:t¦gïÜ=÷¼\x001fß÷ýÿ?|ì¬òÍ¡5\x001bzºÚË*\x001d3q÷öcàÄb÷¯\x001f>|Ê;o<[_¿Ïëñ!Ç\x0007\x0016\x0007\x000bpá/9«bñæË¡`Í¿ê\x000c\x0017DE\x000c$Ý_¶Iõ$Wíûy¸å}8Á[T²|ÌØòÝ;WÔª*þé¥v/´µ×)bntøSR33F.}iûêÞ0cÖ\x0013ãÇ-<ubÿ¿ÿ.5QÅ¶B1¨\x001bE\x0004\x001e¦@;óç³ô\x0007«7\x001d?ò¼¬!Ã&,¬xÊèõC\x001fR\x001a¡ º 'Ùã=HØ¹å§
­Õw\x0015?\R¼Úvº¯\m\x0002\x000b\x0013íi9®¦9x\@=$3
\x0005ç\x000b\x0011ðñÒ\x0007.ýöo\x0011þmçãÑÐyKÔqrÆäi«
FMÙ±myð£wgÌ|lÂ=Ëêþ±çÐõ^oÀ\x0011\x0012¡¯n÷C=tlá¨9>5Ë@!AÓ\x0014ÈxyËÒð¥3²§M_3,{tk[­®	ÔtZ44¼ÝÓÝêQ\x0014Ø\x0017SxA´Ì\x001ep\x001a'N~¸\x0018 ÷â÷Âí'\x0004\x0003¬ç®©\x000f\x0015<òÊÎ5¡Æ×tÍ÷àæ©Ú»îÂG\x0007¼@{oÛ²§ò\x000bæ\x001e¬}îè?\x0006|CÀ÷\x0015©\x0004nO·Ù_>ÿ\x0019$\­Ü³ñê¥S ¢/»xæ¹»¶¯\x000cu]3ÿñqs><y\x0010¡(\x0016­fæåÝëWýoUþúøÑ\x0017²ó¾Q±ø¯g\x001b^¯Þ¿NÒ\x0004[ò¨I	Køz°éÈÊ'´HHô¦]Æ5µÿO7>×ãB783ÿÉtc zc[7ûí1a¿©o&NunÚMú¯¤Û×¹\x0018|\x0000Çê¢I8yÙ\x0005
rS \x001c@pÀ\x001f\x001aP,î\x001bã­'*_ýE×åzø¹7~[ÞÈÿ@bñ
\x0002\x0016	\x0010\x0019,\x001a£\x0005§Ã\x0003\x0016°RÅ-ðvâéWÄ\x001b,!1Ë9à°"""\x0012%\x000c\x0001,aEE°(M`1\x0011Çb<
cA'T@-¸ò0\x0006A¼\x000f'\x0012ö)bx0<¬\x0006\x0013\x0010öI\x0010\x0011DI`mD\x0011Ë¼\x0001!n-\x0011Y\x0006³<4\x0010\x0008k\x0003yQV\x0012½þãÖlÝÕÓü©/)I#¶`Xù©Só2½X3M'\x001eñ¡/\x001a=¡ø©_Ëb\x0017ün(\x0010\x0004søKÄa_!ÁtÀ\x001f\x0008&fK\x0002?\x00181Ç\x000b¨®\x0001\x0016D¯73Ë)\x001cåÉ\x0019j\x0010>Å\x0004ËÚ\x0016\x000bü\x001cXº\x0003\x0019jSË±-\x001eÛº\x001br +\x0005¿Ç¶lÛ¤ðv \x0001\x0005^#x±\x000ePbº%6+\x0000q\x000f(K.ãðñÚº¬\x001düàäàæàØ`p\x001a\x0014æe¸tØ7æãÅ%\x0004ñ~\x0000~Â\x001a¸ýdfC\x0007T¹U|¸[z\x000fÿJ7æ¾e\x0008\x001c/q\x0002ñé!D\x0010|ñP\x0002Õ\x000eÆqVsÅÉÁú¹L\x0011y\x0006pÆø\x0011\x0001"`,!DÀ¿\x0017X[F
N"·*N+Â\x0008'³0§\x000e \x0017kL\x0008£%ã#ç\x001dP	\x0008-z\x001c`\x0012d\x0019uÇÎÖ\x001e;_[\x001b
\x0015O \x0010LîÃ½`&:\x0016ðI\x0005wää¥¥\x0002ë´]sÀZ|y\x0000\x001c|vX6\x000c\x0000ÓQÑÖ\x0019Z\x0002iò|!+·V4&ê:¦å\x0018\x000cu\x0000=@	µ\x0019ê\x001c\x001b ëÀÛbâÇ \x000e03Y\x0016\x001aÙÍº8p\x0008¨\x0010P.8\x0002AÆ,Ê\x0005¨ë©fè\x0016³)\x000bel\x0017Èæ`çKd°¶ù\x001dÚ@|Iöy¼Iâ\x0015e/\x000cËvn6Õ©©ézow´SÓ¢ìáJA²Èf\x000f\x0005è z¼ª_ñ¤*j@="\x0010£Iaw¡iÑhØÒbß-£\x0000\x0018 \x001c\x0010¢ªú|TU	¨²_"\x001e¸Z\x0007Ã\x0006Mèg\x001aQCë¶(¬i4fÈ\x0011\x001cö0a\x0014Õ(É*!
A\x0008TÁ\x0000Ö\x0003+u=\x0006\x000fl6\x000e\x0018¶\x001fÌ\x0013dðDVTUTÐY[(pïÊå¸	ä\x0016¨OR|D1:»?\x000e\x0006Oé\x0008\x0006õÞ¨
3K\x0012KA,9ñ\x0019V¸\x0004S\x0000?\\x0005µMÓ@bBNzRN²ß$á0l:T´\x000c¢3\x00020ùfæ1¾\x001eA S¼Âal<b;g>¹ÍMgpE7\x000cËî¸Ó9¨É T´,Â\x0004
ú \x0019³¸©ueÞ¥­\x001dG\x0001å%\x000cíL\x0000\x0005WÈâÍúÀÜ§e\µ®«ê¿`N\x001d×\x000eQ¡ZQJ\x0001]))9pÚ¡KõÔ`GfèÁTkà¿6WZ\x0007®ºæ	 ÛmóùC
úøÍ\;óÑÂq\x0001

Ë4-A\x00034\x0002\x001f¡Â[Ã²@LÃ¤\x001a¥\x001aÍ1\x0019Î
½W·zM+fQÓÒ»ñe¢¸{\x000fçú
\x000càõ\x0003zÐõ4¿\x000czmËîÁ"Aâßüêb»)®ìÆ÷Æ]\x0011nªú\x0006\x0004&pqBpÜ9\x000cÃî0®Ú1}\x0010¨«\x0017\x000e\x0008N\x0008ÊÃ\x000e^l_ó\x001eú-'¾S»ï\x0003óç³[æxf/Ô\x0017/¸­¾ÐeÝª\x001cÂ|\x0005ÔwÿÜò'ëOîz»ê7Xöªô¡yø 
(.d\x0019½HòüÚ¼Iw?`EÂ=\x001dW\x000c³Wö\x0005\x0006çäwE.ìÝºÒìn\x001b9ª´xöª¦Æ£Õ¯®õxå-\x0004ÒF,¨Øp±¥±jï\x0012H9<×ÖÜtø½ßwëdÑOH tÞ3*ÕVÿáã`MbbbG3'.xZà¹÷$ØRz\x0010VÂmgçª;®\U/s0`FÔ\x0016HAÑ%3~¼gûêpË1ÁîFÁ¤\x0007fÌ^uèÝç?¨ÙàË([ô4¸>{w<*Xm \x000eÁîÎIE\x000bïòº\x000f×üÙ\x000fþXì²gPáÝ³Ve\x000cÍÝú¥ðûÊÖgòþá-§\x000f½\x001eHêìÕÆ\x0014}wê´åuU¯í~lÐ¢E·µ_:VûÖ¦Ö¦Ú´ü	W\x0014Myè|Ý¦yH²c+mézGýÖæäôÌ¥kd%ðÒæ%\x00125\x000cKR}o¯MI\x001b¾kÛÊîös6òØ)«Ø0dÈ}/¯mýä	E?úúìe]]áöz\x0015\x0016#ØV¢~ÒøACcu4z\x0019\x0008@\x000et6ÒÑ5qÊ÷'ßû3ÓÐoøpº@Å\x0003
N>½ßÐº¼rfáØYYÃÇaY\x0011âó\x000cÖèûÕg*äìñ%+&»õÅ%W¯|Ê\x001c\x0010B\x0005®¢ [Ñh[ÖÈÉ3f­ëé\x000c¿²íäï¥ÝJ gÞw6þýj\x0001®ª8Ãçìî9÷{oî
É%!<¨\x0010ä­`\x0015\x0004B!\x0005\x0003\x00011\x0014«¥È`\x000b­µ­\x001dt­}Iui­Ã\x0014:\x0015
Hå
á\x0011L\x0001JL!H$áiB\x001eäqorï¹÷Ý³ý÷¤¢@\x0001k\x001d:ÓÍ3{w÷ìnþÿû¾ÿÿ%IÙðöBK¿zÏ7ç¬©<õnñå\x0012¥ìÅ^ï\x0013ßZwáÜ±¯Ûê=jPcº©\x00151%yTîÂQã\x0016W\x0015s=*"\x001c\x0012üFZ.]z\x001f\l°öÂ'×\x0011%qß6}|Ü¥\x0005ÛõÈÂ\x0015~ößJVVÞ\x001að¤2À\x0002]±Tï\x0003#\x0016}mô·W¿5/Ô|\Ü\x0013{ãÈ¤rLÜmíiÓÑ³ÿÑÃ«NnòûÒÃ±º1ã\x0003S,ÛX¼{EjòWÆ?¼$9-gÿîå>*q«^¤ú5ôÞÙ{¶.?S¾Ù4xÄ7òÆ/~gí3µ5û\x0001ùÄÔwðä£\x0016´·_lo	\x0019ñ·[îi\x0003[kÞ]¿ \x0016ªÍê7iÒ#¿ºÒPµ~í<êfÖ{úc¿¶¶nY·P7\x001bpbÿyO­©»\^²÷-
g<Z
ï}ÑðÀ¡NÍiÃºE\x0017j·!3`êzzï»&LùuSK]É¶ç;ÂõS\x001e{£{ÆðÍ\x001b\x0018j|_±<Q\x001aÏ/X5boÑoÏTí\x000c¸¼ ~\x0014À\x0004Xó\x0005²g=¾¦µ¥æÐÞ5ÖU\x0003Ó}ÝüùÓ_w¹\x0003{¶ü¨þB\x0015Á\x001e·O\x001b>úéACfmÞ0ÿTEQnÞ¢q\x0013¿×Øx¶éJ"\x00071XÞfÆ¢uç*Oínÿú%÷Þ3ûdÙÖâ=¿Hòi»\x0018²í¹ÂhØR¢99s\x001eÊñÀÁ×ËüX¼göW\x000bf/onCíM\x001fZf\x0014+@an\x0018z,ÒPY^ÔÐXéó¤åôÔoP®(M	ö\x0005Ñh¸¬ô¯\x0015ÿØàsA "\x000cQ\x0000Å¢­))\x0003\x001ezä5föm}¡íÊ\x0005ÈL\þ\x0011£\x001d4dÌÚµóÏ}ø^Þ\x000c\x001b9¿âÄ#ÅË\x00145H$\x0002^3UwV¿±ãÆ<ÁcR¤¥>b^&	ÝSÓïÃRtý¾\x0013m©\x0019rVvÞà!\x000fû»\x0007!UÑ4¿×\x0017,¯Ü^ztu,T§ô\x0008ÄP¤qØsG>8wÍ\x001f\x001f
7VI@`\x0019>òñûÇ.Ü¼iIýÙmQC*(\=hïöÎÚ§º\x0013Û:&\x0017,Ë\x0019äàï\x001f~ÓëË¸"s³#Þ\x001c\x0008ö6}\x0005¥EÛV´]®T¡$ô¼?÷¹}¯ÿów:\x001a¦L[: gbÅÉ½\x0018Ç$¬Év6\x0015j«­ùhÿÅóÇ²2Ï³ªüÌ®âK4\x0010\x0011ì#>2oAQÍùcûw½\x0010ooÄZ*DUl]\x001bÿßn¯Ý$ãúü%ÔÍ|Ó\ï¿yúqàÕGßÆÙ·'9Í.qîè\x0006¹5Ò6Äü¨ÛS3f\x0014\x000eÌJ\x0012Y\x0001Ç×uüu,

È"D­YûqÙ-ÏN\x0013ì·ö;Ð#ÿcM\x0018×BP¥	oÆDe\x0003Õ+sÊ\x0018ËNá-ÇÐÿ©µE¡\x0005å\x0014ø\x0018ê\x0007"c$Á\x0010\x0008Ôâ­¨DU1Â°\x0004æá\x00115ÃPHí$H
\x0000\x00030-Û¥ì\x0017j5¨×,Á8|©\x0002(àÁXA ¤A¢È\x0018úpâ`BàAð!R0Qáp0\\x0008aE\x0011s*\x0006±ëw«k\x000eþ]óz,\x0015C\x0011\x0017Dñw÷îä5©Ñ\x0005Ò®"îsZþ-¾ü\x0006©2\x001cmbB\x001e`Iø)\x001bXR\x000c\x0003Qfø}Ö]½=ýïæ)i¦iXÎ-Ãâ\x0014JYñ¨Y\x0001 Ôb1qÆÅ,Â\x000b\x0017u!l`1Ó²L\x001bG\x0014\x001ep:\x001c\x000bðe\x0019Ì²÷á0'\x0006_pX#1Ñ±\x000cû'wt@Lvv`P8\x001b|O©AY1±\x000c@ ^ÜÂ\x0000®Õõ¡-$×j	\x0017çÞ`îSÆA¨:[~ñÆ¿n»6\x0018u]CtYÙn6v\x0000óÄKnÓA\x0016f@\x000ecd\x001eX\x0016;\x0000Þ\x001d@81 8\x0002¤»ø¢\x0000\x00138ú\x000c\x000e\x0000\x0016 ûM\x0012È²\x0002l\x0011°`&L\x0005\x0008¨}\x001cq\x0016À>²\x000cdv\x0013Eu!E¢UÇJO¾w;\x0012<\x001a\x0017¤\x0004§X¶ñ¡ Mt«\x0003{÷êÙ\x0003\x0019ºÅ`\x001csù\x000b\x000bd²ídØ\x0002Ò|>µß\x0000\x0011E¨#n \x0013à\x001dã0\x0003ès\x001eNe
@\x00006-Ñg\x000cfá\x0001+sÕÎÅ\x0002ÆðÅÿ¬b¬ÚB0È#àD2(B%\x00127tÓì ¶DG\x001cHJ\x0002ÛÐu¼,P-ÛY y.- j~EqÃ\x00031\x0011\!fêÔêz8\x0012ë0©é0«3uãÐa"J¢x}dÅ\x0015P]ªâ\x00015¡ò³tFA¢Ì¨Þ¬G-jîÁ\x0015\x0018f6"0(+(¨¦y½þd¤DÝ\x0002#2ÐFÌzJ\x000fS#"p]H¨+±£-¨0PPÑ|>KC&cM,\x0010à3¨i0\x0006\x0011$\x001e7\x00047\x0011êª­s²À%¶Á\x0003òª¹U·B\\QÐsÙ\x0011A\x0011oÔL	TÜëñ\x0018·Ô7?YQ{ºZ¯oãTV¤ØqÛúe¿$\x0007W]$2-\x000eåyzbBFZZjbÀ¯¸\x0008¸×2â²!îÄÿÅ4ÙÎ+>\x000b\x001fû}C\x0017ÿ\x0016àÄ0\x000cI\x0002Aoß\x001c-;\x0007Ó(ñ\x0012#®P\x0000\x0004¢²ëÅÀõB_mÙ\x0011·,noæ\x0008$M0CêÌ|:ÃìÕ"f*\x0008&º>sÝN`o;ç\x0011±¢ú3]ÄÕxù´ÅÛ\x0011wÁ.\x000cþ:%ðÒvK¹®À!nANoº\x0011âD\x0016t\x0013·\x0003\x0002RQ®3+\x000eHff\x001cäÐ§ÆM\x001a3MÝ¤\x0011@\x001a5b4®\x001bñHÜR\x0006¦¦¶m\x0001¥V®{þ»\x001b\x0008ò«å·´Î¤­¦â\x0008H¤\x0018ÂG¶ºrD$\x001bÙNR"V\x000cÚIÌU~ìì8\x001b	cY\x0016æ&\x0007XØ\x0013¶HØAP9;ïrLÊ­.ú|rÓ[4é5#w\ª\x000c!Iä
òô>S¦\x0016¼üAé;\x0007v¼B\x0014\x0005¶ìÌÍY\x000f&
\x001b{e\x000c\x001d¿8½qÍzkM8l\x0006Óül ¹çÛoÍ¥ÑÚ>ý&ºôbMéÎ
Ï\x001073¨+­Ç/]ºtbÇÖ%
\x000e¹¼³ç¾yá\õáWC­\x001e5\x001d\x0011ÿ¤é¯º<øÐ¾U5ÕG\x0013ü~\x0005\x0014µ@ÎÌ9+[«·oz1ªGAô@C¸\x0014Ò`\x0017\x0016\x0017ãvä8@Q\x0006=P7ñÇ;7¾r¦b·Éj-Âî\x001býôø¼ÅE}P¶ÖëO)(|\x0003TÓ_¾/ÑË*I¸Ò\x0012©\x001f<lZnî\x000f.þýj\x0001ªê8Ãg÷<îËK®¨\x0008I\x0015Q8	j*Z\x0015Ä¢\x0008*}hÓH´±ÎX§)MÒ±Mµ\x0013­µNÛ4\x0015Q|EÅ'ø\x0014#¡qð\x00114ø@\x0005Aà>Î=gwOÿÝ\x000bÄNlÆL;q¹÷rÎ=g÷üûýßÿ}
çvîzÁ!\x0007õ¤¯Í~¢Ä®Ú6\x0016:>\x001dûò)\x001f\x001eçýý+ãcì\x001dðÈ±\x000b
ÿöÙ­\x0015»øÒÍõæõSG+VÜøô\x0003_ÏÌ¬g\x001fËÎßP:ÿúÕj\x0019¸]rK\x0010f\x0000B
³%61õ\x001b\x0013^rÚcÊÖ}G¢AJnW|nÞro|ÿm\x001bÛo×2ì4?}ybÏ!;·\o¨L\x001dX;í''Nì;vðuMêP%\x0017¯ØÐÒ*\x0014D@,hn\x00032¦½-1¬pDö\x000fn4^Ýºù9¯fJX£ Î©È\x0004ô5\x0000_ïh\x0007yhsij]søz÷\x001c3uúÓU¥÷/%\x001aÎÊy>3½ ôÂ¶ê±kK0\x000c\x0007CM¾!¹\x001b!ôÖ"Üê7\x0003=ûd\x0015\x0016¾\x001eÖÙÆ·æY¡+qñCg=õö¹³{*\x000eÂ·lr¼Óüý§7~rùÐ#+;Z\j<âö\x0013jb ¬£ÇG/È\x001cõÝm»_»T»MÁ\x0004¦2\x0008å\x000ca\x0013ÊiØ\x000cÏ]¦hÑ»Kn^«rx¼\x0000-ñ\x0007§ÏÑ#«ÎÛåq&B=ÇL5Y{\x0018ã¡ÎÎðÃò-?½X·O2©\x000cD¦¤2Ev¶u\x0018yÓ~Ôgàñco¬Ùâ÷Z³Çd¤ç>µé½ÊßøâSÆå¾èKÊÜS¾äRÝ\x000e¦)Î^£Æ>3hð¤ý;]8SîNÈÈzjìøç7®-¾Z_á\x000fÜyhÀÄ±Jb£û­_;'Ð|ÖïoöõÍ\x001e5~±7ÚU¶¶H÷7$÷;å×·?.{»Ø¡ºQ\x0008Çù\x001eR´*ØÖ\¾á\x0019Ý¼©D§Ï»îJÃéw÷ýêNóyoTb·Þ\x0005\x0001O$>yjÞkåÛþ­îÏ¦a¨OM\x001d1¥`UÝùªÊ\x0007\x0003My3Ð;kÛæÅíMÕªe\x000f\x0018Fnþ²¾)YûW|rþ@æ@\x0011Ìë\x0011ÑÇÛoÆì5m­\x0017\x000eW¾r³±Nm\x001eoÂ\x0013ù¿µÛ£+w.ºvå4ô¸\ÞÌ¯/\x00181½¼lÎÙÚ½Ù9\x000bF.>u¢âàÁÕviX1ÁH`ä\x001b¬;¦ñ9/=òÈj¶¼[ñj×¥`\x0007Å
\x0014°¶RÕHKýÖÄI?ÞhåGÕ¥\x000e*÷NÊüfÑ«\x0017\x001b.\x001f=´¬ýöEÖ\x0013´d\x0018\x001b@>X2C \x001eÆ6ËáD§I)O´Èß~mý\x001bÏjò
0¨åÅ\x0000ãpc¯ß¼Õäí\x00166]¯\x0005q\x0018\x001b70gâ+¾Ä~eeß»R_5~ÂËÃçÖÙQupªÆÉ8ì÷·y}C³s\x0016¦÷lýçZo\x001eí\x00084yâF\x001e·xÀÀAëþ4_¿So\x0012(dIØîvÚ¢x'O[í:\±âLÍö\x0018\x001b\x0010Å\x0008j¢D=úøÜ\x0011ÙOþ%ÿÖõ\x0013Ô\x0000¡í\x001e9jÞð1ó·l~¡±~WPWógþ19eÈÝ?«?W)Û£ÚýÍON]6ñ#«?¬þ½ÓBå0¶TlÁðmOlÚÔi«4MÚ¹uiãåC
Ò=±\x0019\x0013ó~Ù#¾ÏÆ
sZ¯\x0014\x0014®ìÛkÄúµ?jm¯R1\x0004ÈFIÐâÜ\x0002\x000eRJLè_4kMmýÁ½»\x0016É¡6,Ç¹b|Åóv_¼|ì½}/¶&ÕÖ\x0000«¦×\x001e´\x0007íþÛýÉÏûh\\x000b¢/(ÉD³þÁÿ¥\x0006j\x0016ÿûQÿË\x0006a¦@Ñm4
Ç\x0014\x0017\x0014\x0014
Nx\x0011¥{\x0005ÿ\x001ehàn\x0008¯¯]=¹ggI[S"G	Wû¾|P)°L\x00186	3MáÝEA R03L|Áò`°2ÂÞo´\x0011Ø,û\x0007\x0019ÍÂ²¤(\x0018,\x0002\x001f\x0005s\x0003¡¨à\x001bdî\x0003­®ñ`\x001fÀ|É\x0016\x0002\x000cÈHx7ÔÙÀ¬Á­rä\x0000#'µ¶ü÷Às5$àWè^>\x0005UÆªÌ½\x0000¿W3YUd\x0015!èTcbbßß±û¯ïìÕ[Û\x001cn'àUÑYvÚÃ\x0003z÷\x0000çÀÉ
"\x0012õÿ\x001a"\x0005e\\x0016ß]S"Z\x00084hú 9#­Å®¢ö \x0006{Ë\x0011aÂ'#GEÄãR&:\x0019%]V\x0017ñ^J¹\x0003\x0003`Á%\x0018C¹è³\x0018¢\x0000$ÂÇ3bÁ3øc$ñ(\x0002"\x0004I0ÅÄÇð@d¢î\x0003¾c\x0018ÃÃ	
Ã,ü\x0012\x0011ÐDAX]#­ûÞ»H\x001e:Xäß¿®:0Kd¼xÈW\x001fõ{¶Ï\x0017£®eðÃÈÕî\x000cBÒ\x001dvÞ	¡À¼¤uå\x0006?Ä"5`$âD\x000f\x001cF¾<_ ¤ ;È\x0013qUåý¢ñ\x001eHH\x001eÁm8k"àWÆ<-!ky®Á]pªXì²Ù¬Öö«jNWWeuh"ö\x0008VÌ×j!BÂ.M\x001e\x0000n*9\x00191Ý¤:_¨¤|%åëS¾a\x0014ÃÆI²ßî´§¥â¾Ia	\x0001j-F\x00118L\x0019aÀ0\x0001aËù÷À©% Ê©\x000f:!#\x0008\x0013Pg\x0002r`]\x0014UE 8óÀ\x0015\x0006ô\x0019&$¤ëà>0\x0005øJÃL ±\x0004ÜÅf\x0001RavØ\x001fÍæ´;½Ý­(v,kbñ\x0001¶IÈÐý@N\x0002OÝ/Ç`\x000c¬\x001e\x0012
nWÝ\x001ew¬bÒ4·ª8µàÅ	Õ	1aø\x0003Ía½\x0005:"±%"±÷\x0016½Â\x000eÓés8b4Õ«`;æp¡\x000c6ÇÔM#¨\x0007ý$\x001cÄ\x0001#Ãû
Lq.\x0005,Á,°`»Ó¥j.,
D\x0018OzHmÈMÃÜ4\x0005p7¤#¨\x0014Z\x0005Ø×fÓlª¢IªÆ8÷óKH6D)T#\x0013 }U±9l0}Ëåk\x0017¼yþ\x0012¸+×,Èyñ¢ Q+Ì·^Ä¶3È\x0018N\x000cÓ%ã¤\x0012}ñQN09\x0010KQÊº\x0019ãÆ\x0016Ø[þ\x00120c/A5\x0011ÔL¿,©}zx\x0007eØ{\x000fDª!YBRY°4C \x0011u²
ÿÇ¬H\x001etÑ
ç=ÝÝ#ÝÅNVçí¤\x001b\x0006\x0017¼»u
\x0016ë\x001a#x¨;6®¯MµÝj<ÇX;¶lð\x0014
\x0014øO©í\x000brD¥®w¹?\x00110S\x0000Ö\x0012ß=@A\x0008$ALÃ4C¦\x0019¤Fèºi\x0002°\x0003\x00194ÌaÂ`yu?1\x0018¿\x0011áÛ\x00020ÔÎLùu~v"^Ú}×8L\x0014Q¤¨³_±0\x0014\x0012pâäÇé\x0018þ¸ÔÀ\x0018P !AÎ|æÈ\x0004âÅwÁ\x0012\x001bÂéÈ:K$ôñ\x001däÕD*(Yg¿Z¢ºÎðÞç¾ÝeyÉK¬\x0002\x0011¤
ÆJ;1vÁGE\x001e\x0002A5cm­v\x0012\x001bêèøÈ³Ñ\x001aíd\x001aÍd2\x001a\x0004©ÏPE@¡¨øèh\x0011Q#QKbxïÂÂ>ïÞwÿsWMSÓ6¦L&ÿîÜ¹÷ÜsþsîÿÿãSì\x0007^ÌpÏ!~Aç·Md\x001a:\x0007\x0019ë\x001f7sváÆëmµÍuo\x0004$\x0008ÒíK*Wì@+¨\x001bôx\x001cÉ©?½,ÀÈû÷üÆ]¾*)Å·\x000e'­\x0015»æsLgddVÑÜm,3R³ÿ9û\x0016Û2Ò\x0016ÌÊ{æÚãÇj^Rc\x0001.¶lÑ[ý}ý-Í;\x0006\x0007®ji\x0003AS?-Ú¬Ñª[Nîì¼}Î`²\x0012(\x0018VÐ\x0015ÏÛd17Öo½~ãF\x0007\x0015Ñd\x000bOâYÖïsA\x0005*/ËB6yîì¼õ­\x0017ªZö¸Fn­	Sì/¤eÌØ¿{ewWÖ\x0014UXºM%k\x000eí{N%ôP\x0001îC±	íöçõfãÞÊ\x0015LàcÁ+feýbÒã?û´³µéÏ\x001bìÀÔË\x001fÿÉ¯;>:sdÿ\x001a\x001cóbµ¨dKxä÷Î7íøÛùÝÑã&<¹`ÛPÿPSã®3FÍØÑ)¥ù¥ËZvµ¶îñúú5´-L\x0017\x0015f4¸\x0006ûü~5&Ý>ó\x0015Ö\U1\x001fF8QÖj£g\x0017n6ÛÆ\x001e¬Zìuµ8Í\x000bÆ¢¹\x001bcbÒ\x001ex½çN]XdÊ¼§w:ú;OÔÿÎá¸lÐFk©È0sÛÓ\x001fä\x0006)\x00055p4\x000cc}\x0001oTl¦}Úò0cLUår·
BÍ¨KÐëm¼à÷x\4e\x000c\x000fú\x0018¯»á .\x001bÌã]¶ûÖµ¦º?°*OÖ´g³2\x0017í«Xâì½:\x001aB\x0013êq wq¬6Zòß\x0008ð§ªe\x000eGsS=úXinÞ«}ýßW¹\x0004czCÒÓ?p\x000fõ44¼øYï\x0019.~ôØé¥%åíW\x000f67m
ºFÊ\x0002^\x00131\x001aWùý>&-cîéK;{.4Õ½Î0¬\x000f7&\x001atá\x001eAv±¼T¶°¢-
5k\x0006zOi\x000c\x0016@(-Ûn0ÅnÞz³ã¨A\x0017á<!AUå¼<3:9» `µ³ëÚÉÆrëFm3\x0019\x0000W\x000e/_´1>nü³ï´^Úg2Exá©öõéi3®\®jlØ\x0012\x001e\x001e7%gùÌ²Æú\x001d/í\x0014q5jRAþ\x0006«-¦æàÚOÚêL\x0006ÛÉósf­­®Zõiça·§;=ã)»}­Ï×·ïý%´è
²ÌGò¦ÎXE`RuÅS÷³Äqe³69\x0007[«+©¡\x000c*V¶F¤\x0017ÍÛ\x001ap;\x000fW-\x0005ßÑÆÔEKÞv\x000eÜ9Y_îèk3\x0019'rY\x000eðQI
·÷Ü¹Þxz£ÃÙ®×Z'M\höÂ±ã;Ú* ?\x0017lýÑÁêßº-JãgÜ9¿O\x0018óÃ\x0013õnwÔh#$F\x0001e/Q`Y£)eîÂÝîáÎæ×\x001c}WqRm0Ê-þ£Zgn8²²§ë"I:]äÄ)¿IË(®©^zãjMú\x000fÊì9+D~¤ºzy»Þ4Nm\x0008ú\x001c\x001cãñ2îì\x0015>VÜÞÖp¢öM«I"p(jIVCÊ\x0010EHJÉÉ\x0005¹\x0005«Ní¹x®\x0002ç\VK¼}æË¶Q©µµ/Þ¾YGá:-m²bü^Æ?\x0008¸0ÅÉzÐyKT9\x0018wÀ\x00121uÎ¼×´j¢êÝ\x0018Þ
4TMD2Á°èÑ3
wÆ&¦\x001c:°¾óÚ\x00111èOJÿòðóxíêþÞ93Öff-½zåðÙ¦hÊS¼Ç\x0013\x001aõÄ\x0013ög¬fÓ{»\x0008\À³Ñ1ÙÙÓ×Å%«xg©{ø5ÊFÒú\x0011×ß×
èò»±üÒ·S'^:ûÞù3{ÍV\x001ajS"\x0017$$}æä_eç®¨«yíÊõ½nwtDÊ´é+ÇÏû òùþÎ£,+\x0017½Ùpt]çÇ
¤Æìñ\x000eåÎÙüÈÌ\x000b§Ë/Û¦3ÆI8\x001035.CA\x001d2X\x000bæ¼0þÃC®·¿/KÞÑc¦\x0017\x0016oèëí:^·z`àæ¬ÜW'e.8ÕôöÅ¶rY\x000c¨)³Õ\x001cOàÚ¡A(3Æ°ù\x000b+\¾ãµk\x001cÝ­´.zlrö%å×:ý¥ö\x0015ÙåTkl,")¼R
¿Eí;ù¿ËC÷_]0Eþ«ùÿ»Ã|U	ñ²o²`8tø2ï\x0016M¸eqIÉ¼´D+jø»}=¿\x0004\x000c0	J\x001b÷t·\x001eûpÛÙA\x0012&èÚCmùwò0\x0002ÆE\x000cG\x0004\x0001:zQ\x0010{J¢\x0018b7²Âipx\x0004Ò\x0003ö\x000fEëC\x0006\x0002,'3zA¨"\x0008À\x0010E#(¤0è"H
A\x0012X*Äß\x0014Ê\x0006D\x0013ÆÀ\x0001gÃñPðâÐÔã\x0004¦A H¸\x0002( i!\x0008
=â\x0014èVR\x001cîI\x0002\x001e\x0011DÀ\x0004xÄ0\x0018DÃ4¤I8\x0004(Á°0K×í[\x0007>ùk»Åbæ0YdùïÇGgI´j4B\x0001ÂË"·\x0004ßñ
Ì\x000cÿÀ¹±»<\x0008:.Qà\x0005"1V!ÅÅ\x0005à\x000b\x0005\x00148Iâ\x0010ÏU\x0001"\x0000\x0019
¡\x0002P\x0000ð\x0000Ôðp?h	9\x0004^\x001aç\x0004Esdxæ\x00000	S4\x0012?Ò`@¦\x0012d\x00047\x0000\x0019Â\x0019Zt¯(n\x0014 Ê"hW\x0013DVº7
õ"²«î.|ð\x001bÿiP\x000ee\x0007Îýí\x0014pÞÝ\x0008\x000cò¯Ïò\x000f\x0004\x0011 úßÏÁîw\
ì1JH¡÷â@\x0007Ë	TñûC\x0010,*\x0002>\x0008þ(RÐ\x001b\x001cýÐ2\x001a\x0012=\x0010$zÖ \x0018@À1å##@t¡A\x0014hh\x000c&\x001b°#\x0002Bú Ö\x001bôÜ°û£\x000bí§ÏiH¤\x000bZV®Ø\x0010OcRjb\JB<À\x000b8\x000fÉ\x0004öu´2ì\x0012\x0004\x0015CÐ\x001aèÔd>.ÖGÑ<Ë`_%²Ø\x0000k*\x0005¦â]\x0000óÈÑ\x0008f"\x0002³ÌË²^*øi\x0000QvQDf,AªïZ\x0015Î\x000c\x001aDN8\x000f\x0004\x0018/Ï\x0007edù>Ê$C\x0011¶AßçõJkôFÎDQ:Ô@î\x0003ì\x00039 Ñ°~&à
ø="Æþk)K°\x001bø[C\x001b\x000c\x0006+­
#(\x001dIh	ð\x000805áXNä9ßÉ±n\Ðcb\x0002.)Bþ%iµVg´hµ\x0016 6\x0014¡\x0005OJ¨\x0008p\x001cÇpÁ\x0000Ëx\x0005\x0016%\x0000%qBJ\x0004W*é\x0014ÐÓ$­Óéÿ`¿Ê¢<Ïøwî\x0001ìr¨\x000bËY\x0014¹V@\x0014\x0011\x0004"" \x0019ã\x001f\x001dãè45Ø6ÉLNì¤©Ñ±ÉhÛÑNI/«7J\x0010\x0015\x0011uå\x0010\x0016T`å>\x0017¹Â½çwöywÅñ´Óv|æÛïûö½¿÷ù½¿çùÉäJã\x0004ª%\x001c{%°,gc\x0018+0À<m;éx\x001feG&%¡¥\x0012©\x000c£$¢\x001dfØ³c	^\x0013\x0008gEE^$D
q½\x0004¤&%!\x0018î©¾£]Û0Þ7K0ZBÃ	µS\x000e.Îó\x0018öì\x0008#²áùaÙ<3fw'i°Ê'ÀË×sà/\x0011E< £\x0000ÌH\x0001#\x0010	\x0007ÿc¼ÈØ0R\x001e²Ò%R#.óµÂW±,ÉqüBê\x0001ç£yù¿Ïj\x0000u½ðÛ¶\x000bØiþEÀæ;ÂWc1Ú\x0004lÇPK#%Îî\x001e\x0001RJ:6ÜÆó³(\x0011SyG\x001bÇP\x000bÓ`GÉ¢¶\x0008\x0007âü\x000b\x0012°\x0017\x000cõ=°AÚc(\x001c\x0000\x001eÑ;Çð\x001cÃ"(\x001aáâX\x0013c3s¬e6Ædµlp±\x00168k\x0000x\x0002_°\x0001èI=§JÇáë¾³v¨Ú\x0011Â\x001ez:ØÏþpð'":R\x00132ûPâ<Éâv¶÷ \x001cä\x000ciX4Z8 \x000e#;\x0012o/*\x0002¤á¬}KPôCå°\x0010Þ\x0011\x0001\x0017`\x0004ç¾·éßÒþÿ°u\x0018ðãê°ôÌÃ¦é±¶Ö2c+\x0005'ÚSDÛà@ó`·NBò\x0018â[Ülr[¢NNûÙÈìºª¯F\x001fá¤Ktì¶°µ}=5Egöðü\x0000Æ«²r>IÕ·U65Wx¸ûÄk¶yy-×Öüµ²ü\°\x0000ã½¶õjmoGãã#Ãõ¤\ÌÜú\®¸wóPw÷-¥«Ð9F³*+%}?9kµ§çãÁêÈQ)u%5w¾\x00141+MË\x001c\x0010ÃX+82<.?;ï\x0010g\x001dÐÕõõ¶&GjÒ
#WN\x0015²lÔ-xKþ1R¤/\x0015í\x0017Ø!\x0002tQ&Î"\x0012Î«â¶¦gîíéìm~\¦z$®É·pæ«\x000fM
5Ú¬ä·×¥¾ÃpÆ\x0006C»:0:iÍî'-ewËLt+<\x0003Ó³\x000b\x0003üVw´×¶6\x001b\x001el¸ø¿[\x0018æô¨õò®ûînAÑ+i©õüùÏÇ\x001fzû§eþR.w+úÛnBsÄËfm=è±4èÂé}s\x0013í\x0002	Ôå·ý#oß\x0015×.\x001c\x001bì®`IÉw\x0013\x0012ó\x000e÷ÔÕÁáZ¬òSÝ.ÿª¥å\x001a-\x0002g»Ð³ñì4ËËãÞLIÛûÔÐ¥Ó]72\x0016ML¯·GîäÝª¢@?MnþAÁõúkc\x0013z'Wÿ°°Ê¯\x000f?¬/æHreÜöÜìzÜëh®ìëk0ÙF(	p;ñ\x0010øæf&yý{ëSö\x0019\x001aëëe®«\x00122¼\x0002ô­7K¯¾&-8õ±&vKo}®T©P%&nZ¶,úAí?´UÇ­3#
Ú\x0005Â\x000cO\x0018a±L(Ýý×®ÿi\ÒëMM%íZ\x001aS&ÄfÊåXiÙgÃ\x0003ÀÍoì>EI7K56T+»\x0019ÍÖ×w\x001eSºúVUþ¡­õÒY\x0016JXØ9Â{uâW^ÝÕòäZ³þRá\x001d\x0013Â3\x0013Ï\x0016~3]p00 ªNûgÝbÂÓÄLlHý0"2ý¡®ønÅïÝ\x0014Þ¯äï8b3êkgLÃ\x0011\x001b#£·L\x001bÇ/\x0016ÿÜ ¯Ò ÈÜ£CÍíåMÎCæ¶ñÃ\x0015Ñ9ZíF\x0007; BkVçoì~r§äÌ[æÙáÀåy
>\x0019\x001fo*>õ¦T"Ã¬¸gÄÖGÍ3£Î¼ca&1BU°ýc?Udw§îQãù±±z\x0011É\x0001\x0007Í\x0011fvJæâ¹.ñ5I¹Í-åz}J\x0015®Y991}îÂ/¬³-\x0018&ËÊ=ê\x001b\x0010þìÛS#Z9)71|fÞaÿÀÕ\x0015×\x000fwµÝp¡\x0019rH;2<cQ¸,ß¾ëËÙ©þÛå¿\x001e\x001dm"I©³s`Ööc2¹ëµ\x001f\x000c\x001bª)É|V¿únDtÞ¢}Ýe
· ÄlØ¸·­­²Y\x001b\x0002C&{By¯ê¾µÜÆ\x001aÃÃ³Ó6½OQ.5wN\x000ei§§»ì!A
1E\x0010,,Áy{­Ù±ó³©YãCÝþ«sS\x001d\x0001as¶}jkx|v|f 40)&*¡©ñæí;_8)Ü6oÞ¯òÑÔVWLLw@\x0010[í¯\x000e~¨»p«ìL&â¤\x0000ñA\x0014­Ö1WÏM¹'Câ
uÍºK¬\x0005Öä©\x0003nü®µµdjr05ã½ø¤].ko\x001d¢h\x0005E
6\x000b#w
KXûãu©\x0005\x000fîw÷51%**U\x0013½er¢ÿÔß÷N·oÜôVTT¦¡@ßZ'F?à5ëv\x000e\x000eÖÝ*ûíøÓ\x001e'¹Hl\x0016	\x000co²ªÒ2\x000b>Ó.ÕÕÅc£Ý\x0011+£c\x0012rfØÅ³c=×Í¬)ïãjuÜÒ\x0003½úJRæ6;÷MVþo~\x0014QSõÇ\x0006í	'¥@@n(%0ÎÂM)ÜÂ²¶\x001c	
O\x001e0è\x001au¥¬Õ\x001a\x0013\x0012\x001c\x001a[zéxþäìLoHpvjê\x0001/uø½ê¿\x0018Fº½\x0004ÅkÖMOö_¹|ÔÊt	\x000c\x0006xÔduwV?ª¿©ôðOÌXæ\x0015[[öþõÏÅ\x0019ÔÉÁI\x0011ÿÏë©öÒ^Ú¿ØóÄþÅ­0ø/N÷\x001d[DV,60ñÈÎðJÂ}OAÁj\x000f$ßD\x0012[lÆEÆDQ
²kS\x000e\x0019\x001a¿.)\x0019o£H¥=Ò½ä¢×`\x0007Á= w!_\x0012xãà]G\x001a\x0007í½ÈÜ\x0001AD\x0000ÒìêVü\x0001PYhÐ\x001bI0\x0004[\x00011I< H"A7PðÀá\x000e
$\x0000é:Ps\x0004Ä\x001d!à\x00144´Ï£"$ê(Ô\x0000É>\x001auF
®#I*G-%A#¢¡P\x0002I
æ9(\x0012Ú>\x0001\x0012P$C\x0017è#ã\x0014v¯øRÃ¹2¹DÎI\x0008+Ëª]×©Ý<xÓ\x001cs6\x001av$\x0004\x0012\x0017ÿG\x001eR»°¬È!üKi×Ð0\x0008Ó²¥s ol¼dÛÆ,Òz\x0000\x0001\x0011Á\x0002\x0003±\x0004
\x000bã çÑ\x001dÊ\x001dãS\x0000\x001e\x001c\x0018\x000b=\x0019\x0011ãQ­À¢\x0006\x0000\x001b\x001eý\x0017D\x000e\x00138{`\x0007\x0018\x0018/À\x0014"ÆyÇ\x0003Ã\x001c"\x0006íÀÿ4
®Áy´\x0004ãmh¤gõ 1\x0000h/ù'ûU\x0016[Åug¹»ïbcûbc\x001b¯xÁÆ\x0018\x001bP\x0003E`HBÂVhyª¨­*Um¤$J¤­*!EíC*5\x000fm£´HA	\x0000f\x000b1\x0001\x00026^ðm \x000e6^À÷Úw}Nÿ3×l\x0006E]¨Ô\x0007ÎÜ¹gÎ93çÿ¿ïû¿óè&\x001fèDIÅ¸;ï¡10|Qæ_¤ß\x001bó¯	Ý¿\x0019úGHDQóüÞ\x0018Òü¤{ø\x001ed\x001fÑd\x0005X
1©LÂdI²\x0004ÍdIÆ\x0014G`:C@NñFïR%X¸Ç\x0003ï\x0012\x0007\x001atb.,æ\x001d<Ã"È$\x001a¦(~\x001dÃ¬D$ãJq«Áî¯zÚÚ8Õ°pØ+ê$ö4"(H°ª\x0013\x0014[^*°4\x001c\x0007°\x0017G¹1ÚDã\x001fU\x0003À \x0003`m)öü\x0002=3=Æp
`M\x0015\x001e'0zH\x0004G\x001aR6\x0010t«\x0018ÀXéLx\x001b&\1\x000e5SýL0\x0000\x0006Lb\x0012BÀ²\x001c\x0004$Yp¤uIS%Ud%.)1X40b0>	ó\x0006£GÇ°~\x0010t\x0006ÁÐÕæà\x0004\x0007E\x000b <\x0014ÃÂ7è\x0010#MT¤\x0018ÈRÂ Ôù;D,AÂÊ*$Hàv»³8(ÆÂÐ\x0016H
°R×%YV4EÅîhjÆ@Á±Õ(Ý0è'è,¼P°:Ü\x0016ÁÃs.\x0012\x0000\x0011\x0006¬¨"%ÄxX¢=\x0019\x0000\x0000SA*i\x000e$ãíVS0ßKÒ<^\x000e¢é§ª¢*²®é\x0018ôHca¤Ò\x0018¸Ñ,Ãs<\x0008,\x0007\x0005À¼Ìb\x0000r\x0000L4@\x0014\x0010¦4\x0000B$|8bp}\x0010\x0010¥Ü	t÷^½Ò\x001e
,oa8\x0016[ Â\x0014 \x0007ÿR.¨^H\x0018ã\x0005))þ©>7³*\x000c@\x0004û\x001fÀFxÃ
,DblóX\x0002Ä	/Ý_âÌ+¡íNMÓ!\x0018¸Rf\x0019\x0005\x001dÃéÇRFà{ã\x001e\x0014yÿ(¡y2e¿ä¹18\\x000f÷\x0004º?\x0011ÀD±6·{!Ï
w&\x0007u=B!Î\x0000ô`$Ìº7mÞ¶Çh ©\x0001û¥\x001ei*³pª*\x00034-¦È\x0011)\x0011¥¦Æ$1¦)	\x0019x!Ç$9¦i"\x0002O\x0008Æ\x0010\x0000j:	3bÉÌE ù\x00016Ó°`\x0003|EäISòæ$
c!±Üawaz
GH,[¬ÌsAÒÍxÝ\x0018\x0000@ÆÝ:\x000c)Ð\x0013Ka$ÐT`\x0016ôÅ\x000bwÁ÷Q )\x0018\x0010ÈÄþý/8èÔ\x0013QÅÿËtÔÆ¨qÿ¢úUk_õz³%1@àÈóÎ0\x000cÄHlo=ØzîCIÃs\x000c
jÿ¬¥µ
»ý\x0019å§\x0018
\x0006-]F\x001eþ-2fÅÝVQ³r[qi¦Åã±ÐÔÄß×ýÄ×çþfWuÈ¥#£¬vÕÜE\x0005Ã=§ZNþE£\x0013k7ïå-\x000bïÝ\x001a¹d³§\x0002f@cÁìPº5ÉºÚ-P8\x000c$}ss »ãÓéñ\x000e\x000e
&xDÂD,A*\x000b¿¸fÃ=-Þ\x0014ÛNQÂo;ZÛön^¡)NÉ^×ô:HåñÃ¿'0K[!½º!)ZBp¦>WY¶Õ\x0002åÒÆ':;Ü¼ö¦¢Q¥ní\x000fsò¿§(Pk´\x000c?A$ÆFo_n{zì\x0002O²:Åz2ÊWÔíÊÎ]6Ô}êÒ\x000eKAWÆòú\x0017²\x0017q\x001bJ^ðÎhoßÑkß6'Âã>_~ý\x0008ãÈÇo3:!ë*gµ6nøËyòðÞD`
\x0002d\x0018Üúg_NMË9×¼êf§ÎYHÁ]YõbiY`s #¬Þ¾îã³á\x0001ð×\x0014ilHê²"\x0016»¿hIcEåFÞæ&\x0018Fáá3\x001d]û#3£v6§¨lMAñjg!Më\x0004ý½ço\x000c\x001cUcS\x001ab9WVõ­åKVnOmùptüÍ\x0001P`A8iRKªÝQ²tÙÎòÊ5\x00148T98::á_X;\x001d\x001a>öù\x001b(\x001ePIÒáÊ­«y©¸¬\x0001&gñ¼ÊÏÚÛ\x000fµ RÁ\x0005ÉàI\x0014WÃ]º¬úÇ¹«9«
R\x001d	õöééûVeMOlØþ6ÅZ/~ovò\x001aoõDäÙM_sºÒÚZ÷ß\x0018¼l³d\x0013t1\x0000'\x000eVT8KîÒ\x001dÅUö4(ÓS×º;\x000f\\x001b:\x0015N64½QÒÕþIw³Ý\x001aU'êê~ZT°º¿ïXûÅ<\x0016L³\x0005å?¨®Ú²ÀëÅ\x000233AI\x0016í©ö¸}½\x000b¢Ì¤ø**vUW5\x0001\x000fNx§¿ÿóüü5+WýjA"}à\x0019Â±; iRtòÌ¡½R(Y¸¼±é@àÆáC¯ñPpEÞæÿþ×åÈÌé#¿\x0011õ®9³2ëëêödåU\x000c^=öå?(F\x0014\x000b!"$p\x0005VaquÕ®VGWå±¾K_\x0016mø­^ÿJjVióÉ·"\x0013\x0003\x0002áIè±Æ¿ÈðWkyt¤ÅÎ8A¢5\U][v¼\x0015
ÝjkùëÌô\x0008EóVïgÉóóÍï\x0006¦Àfð£´v{~Éº/\x000eýnjô
ÅÑÐò%{ËV
v\x0007¸h8:Øwº¿û#U\x001aC\x0005ÒSÊ«¶¯¨ßi(RëÙ÷\x0007ë´B\x001d28\x0002©
%#Â³lÙêÚÍ"^nù ¿ó\x0000ãt/.ÙXUÖäKËE\x000c/Ò­};>¾=ÛB\x0013BqÞóK·xS3	\x000eÔ\x0012«}_ô_9(FÇXÆj \x0001\x0017}P¤ 35½aý\x001b\x0002ï3b3nwªÓ[\x0014F\x0007û\x000föuîÄ \x0018ª\x001bvÕl\x001e\x001e8Û~öï,ã"Y8û¹aS¼µõ;\x0017å.¥9[\
FÂ\x0011r0Läàá7g¦'2Ó+««¶æä.½´táÖØÕ¶}£çyZ \x0007ÑJE,J2¾¢Uõõ»½®TC¡§Æ\x0010£Z\®s§ÿ4ýMGÄ­{á×þÌâó§ß\x001d\x001dng8WB
6núyN~ý\x000bö^>(8Ò\x000cJ\x0006.P&ª³NOÑsÏ¿ÃYÙHxÌÊWZM÷
\x001cëè:`\x0001\x001aÉf]ùLMÃ¼~/Ëú@ÀnOötu\x001d½qý"KÇ)1bõVTÖ¾´¤¨\x0011
s,131ÞWXÓ}µ¹½å\x001fz$@ÛH\x001dïÿà<õ´=mOÛ¼ö\x0018ÓþF>ó	´äiï,5oaÐ\x0019\x0010ó°î¤Ü/oÛ¶«tø'ûU²,ÇUDïTCWWÏdéY5Ø-± 
¬\x0008_à\x0013Ø²#\x0015Â\x000fÀÂ^°'\x0005\x0011\x0004ÞÈàA³,ûé½§îÄÉê~²,l
\x001b/¨¸ÝQÃ­ºy3Ï9ÉPÿKöUË}Å®q\x0007ý\x0002É¶øìÙû|ï7«ÉGJ¶©5ýú\x0016æÿÇ·<¨çÙwA¤Ý\x0018§5\x0018\x0016é®n¥qb¹wÔ/ù/÷PÿÍÁ©óªº\x0010¥'ÔÉII\x001cu²T8óJ°@I¥$uz\x0002-&VW\x0008:^\x0004 Ä\x001e¯xUHj
yòN\x0004M¡s*_¡òæ2 fã[áþ\x000e\x0010ôÃý@ÒLI«ªPÉ\x0000}\x0001½«TkÔ{ð×¿ÿåw¿þäYÔkåÎ¤ÂýøÆ?¸pQ\x0016;Ãª\x00125SÒ)þ½!¯Ãæ÷!×cxVÍó²2[nÅù~ï7Ý+,éVÛÊJ£+4³@\x0003\x0008ÐX íµx\x0006¨x:Çp4,À¯Ñ!#*IWÆT\x000c\x001dÓ\x0016s< æ\x0005Á	\x001f2è\x0004=ÃW<]\x0013ãqn]ýO\x0013ñ\x0012=#Ký\x001eÎ\x0003\x001bJ!4\x001c_³ÔG4½RÁ¡ïaõ{/mºÞóARüK7?ûþi¸$ëé\x0000¢8Ùií9ßN¿ÛQ\x0017ê/\x001c«¿L+^Ïya }\x0000>«Å\x00055!a=0>®f\x0008£?A
Ix¦­Ñ¿ªÁ\x000ftãá~*Ý!ö`peÏ&"\x000bßó±æ¤!Ùá¦ª§\x0011k`2\x0002Clâ²Óê.'óþéÏ\x000fþñ¾®$\x000c÷öZØ\x0010ÇJ3­¯_»~ûÂ¹^À+§+î8÷Ø\x0006¸
ýwÏ>ôßc\x001bN¤ï\x0004Ìe^µúêúÛòÒå\x001chª3\x0000pn}Ih2iî\x0004]Z«	À\x0000¬3\x00045G'Þ\x00128	´¤}àmµ%´ÁZ\x0011¨(Pä\x0013ï%\x0019î-³yUfEµ«ôNaSôÐX\x0007·\x0006evêåÅQ\x0012'­ jJ\x0011s\x0019R|±6°­ó2[gÛ\x0015ÖeRÿÇ#,á½æR5âNÚìqI¡¹`Òymm¡uQd»ívæ\h!H\x0014\x0008aj	5ôd\x0010bñ^#îGa\x0017ï"¼D\oªªÐÕ6Û.u±\x0003§P\`vîuà\x0011ª 4ÛqÒñ*\x0014ÂHû\x0005iªJ\x0017à?¡à)jm'j\x0001ÃµP\x0001ða\x00184xÐð\x0004*\\x0012÷."#ù\x0012ÀPÌ\x0006\x001byRB\x0001_·ÝÍ\x001e?ºw÷\x001fÝ³«m[0Ò\x001c\x001eqø\x0014\x0015\x000b\x0004&xÚ[±ç\x00173"ªï5£óþåñ`&¡7°Ózâ\x0006¨äÏHÇ\x000eJùÍ\x0007Þs¤\x0019¬æ\x0019.\x0018tM\x0013;ã<)½q'¾|ÍE
SPAN¡ÖYTm\x0011<ëkør¢\x0008íõË¢ä_)WýÃ\x001cÒÎO\x000eåÛ^\x0013kWZ#¤Û;øäøck×Ò\x000eT\x0011v¿Ñ3ýbWpýÁ\x0003gdü&
äö\x001b
0¢À+w¾~2 Z\x0000\x00161.	å:ß-òÝ¼(\x0016y>ÏwëªÜjkS"\x001fq\x0006W§ÀRè©\x0000öuM²\x001f\x001fâç	mR²Q= ö»&Yc\x0011'a\x0004:©ö¨Õ´Ö·½vò½­ts_êø³Ìé\x000fY§W
5¨I\x000e\x000f©\x0012ÇYº\x0004äê$â\x000eÂRGy\x001fTÊ\x0014PBýÞ\x0007\x000f½ê2ÁþÇZë{|XªèXh\x000b\x0015·âþ
è	Âê°ßù\x000bãùz¹|º Jp\x0015ü\x0008ý*"¼igÔ;w#\x0008\x0006E¶Ü­Ö¹[-f÷HCmXÙªÙ\x0019\x001bßÃ4Ë¦ËåI³ÑÌíb±>uCùr#LÚ¿6è³Ûùìø¾\x0011e2ø¡\x0008]¹ºo³\x0005\x0017I]1Y°Ú^FQwtÔí\Q2Êòétö0Ïu÷rÖyÁä²ò,¸õ£_üäg¿|÷½ßVù¼1'Ó\x000f·ë	\x0000¾2NÚÊ³Õä_Pjé\x001b`¾$D\x0015%×,HÇ£[ýôHÛütyµx\x001ch\x0013ÉNnlg0D>:áQQN7»çÒé+ÃRøVûz:8²Ùlwz¯0Û©vÚ\x001d\x000fn´ç´.ógëåsç3^¢\x0011$½ËEë\x000f\x0003\x0017\x0019l3pÍÁ\x0015\x0011DÛÉG¼`u\x001fÀÚÃKAÔØM¹|ed£2E\x001cwºÃ«ÍîXx³[=_O'¥Y1Q±áSB¶ÈñãNYä@\x000cúït:*×ëãùüIQ.\x0016ô­ÎÕvçZ\x0018)g\x0016»õl>ºr\x001eâ\x0001¨
T£unx\x0015\x00129=ÎòSÔ\x0017(c\x0018é· \x000cåò°Ù\x001d¾v+iöôút?ýù¯@ßwÿðk¶;\x000eYÛø]³y4\x001aßÉf»®\x001f5KEõt³}æ4å Ä\x000bm\x0007\x0004IÙ\x000e\x0004\x000eâ×ÇãëiÚb¾ZÎ\x0017³O½Ø6F·½\x0014åü¾ÛL6Üôz·ÑPl6÷õn#ùÈËB4mäÑbk\x000co¨Q|5í\x0011ÛÕôñrñ	@]ù²Û½\x0013ýíæQ¶y\x0016´\x0014VëN3¾¸ÍdËÇMVbS©î¸sÔïk·Y,fUQ\x0006í4[Þ·Û\x001cíO)M\x0014\x000eÇÃ¡gó»«Å\x0003¸9mÝì]e8ÊU¶>f\x0016ySn&ðÊËVöï`/³Åß8\x0012w°X6Go£\x0012ÛÍî\x001a®=Õ9A§ýVwpTV§³Ï?&áã/ò d¼´®¢£ñøv³Û)Êéôäñjq\x0012+¯LËÉU2<bqo¾øgEè\x0015_¥£+axq½øT\x0017"\x001fB¥$~`nÈó7\x0001jþ¹->$°\x0017®ÀàbúÄ\x0016¦nÞ´êä(|`³\x0002õ£gZ©ñpt­Ó\x001e£®O§Ë\x0007¶< á\x001e­
÷q³;z£\x001d\x000fWÝC\x0007Þò»3À\x001dË \ýþør\x0014ªlòY>ù\\x0007\x000bãaçAï
\x0015$((&§O|*d.¬¬¦¯w\x0017T\x0012ÀÄÕêd1yª³e\x0004x
dpt}!ÕT~+"\x000cß\x0002Â]Õîçíáb=]L>àåD°\x00189!î^\x0008;ãr7­ær×4f¢ò(G½l&¯ÆWdTUÕrú,nç»(?\x0003#Òøb{p¹ÑÿÍ~ÕôØqTÑú®î~oÆ3/\x0013[X\x001eË!J°\x0015b\x0003[v\x0008\x0004Â\x0005ä\x000f°Ë\x001f`	ü\x0007Ä"7\x0011É\x001d\x0012\x001f\x0012H$aEd`Èíçñ÷ºës«gâ3²±¦f<®î®®®ºuÎ¹çr]ËxëæÇ«ýªì\x001479wËA;Å¼õ"dæ,Û½tæçt´ó[W¼0Ýæpû*ÛïjhN_´z­¿ý×¸ºSDùr²uÁ4gù§nï:S$\x0007`áR\x001fn­?ûò·¾ýÓ\x0012vÿðÛ_\x0006ßÏ6·÷ç»»7®@<¹ì\x000cWÙ/ Ûk³\x000b\x001b[ÏNÌs1,oÞºr\x0007ó WFÉïóÛ½ºÞM÷ÃÛ·þÞ®=ûÛr¢Ff42çÿÛ¬vÒNÚSÓ1íÇ4^+'Ðø{~ÄÁì\x0007#	$Ã¼.6~té{¯]ÜÁÿS1Ëá]Wê\x0005qýÚ»ï¼õÆÞî\x0007J®#Ý< 9iÞÆ¢\x0008é\x0018\x0014S\x0008Ñ'\x0016H\x0011e(U¨	FþÏ\x0018Òÿ¥
ü4\x001fQ[j\x0006ßÀ$l¬5äJ£²\x0013J
¸G¥p\x001eÑ;µ(\x001cQÃy­\x001bè\x0012Î´\x000eçª:z-5îPñHè©¨I¡1+£/i¥´ÓåZR)é¦D_c\x001eÜAýØnnÍÿôæÛ¿ûÕ¯OÁÔ	6øÕWÏÿú¹	\x000f}qNÃÔj8¤§?!JBX+D*ÔÃ\x0007ÓÉ³í+/Ê³ÛN\x0008Ï\x0015"Ï©dX\x001dc/\x000e\x001f%U.\x0000\x0004îÃX¢E\x0014Xô\x0017©`<\x0011ð7¥\x0014K¨¾J.x¥`\x001eúaÇÓL³%º¦p@è2\x000e`ãx\x000c(£\x000eÔ\x0017á:\x0006ÓÇäámð"«Cê(Â/ÁósÒQ(Éý*Q¿X\x000e\x001e\x0001õ\x0015Ï|\x0004\x001dVÁ>¶'~\x0010÷üyí\x000b\x0019CwD\x000eùá°Ã\x0003\ü°Ýë\x0013\x001b91\x0007@AÇÇ_¢\x0006ÝÁ¾X½\x0014D\x0007?m\x0014}zJl«Ä\x0013D,pæD,ÐNU:2²\x0012\x0004Gj\x0014¢\x0012*;T\x0007ªSÛ¸Ýùû¿ùýGï½û¾éºqsøÆþrD}\x0011.l¾¸³³amJ!bÛ¨\x000eJæbð\x0018y\x000cxæt¹\x0008@°X ×»0¨\x0017¾,Î¿´P*õ\x000bé\x0002\x00028,TôQÙT²O9¤a\x0002l\x0015\x0015Õ%\x0010f¨\x0000	«\x0011\x0017	u\x00022\x0016ôB\x001aü­©0Âñçs«~XØãÅB»\x0006lêdDª­x½£0D×v]Ó®\x0019=A­ú\x000eG
XãÃd{Ãê.¾ÀÄý\x0008äYÁ¬S\x0010«¦M§3«§ZuR\x0018zX\û0ö«ÅÝe¿Àw¥¨\x000e\x0001?ãT\x0010ùB¸0¦L·Úv¦õºÔ-Î\x0019Ô#f¦Á
óår\x0003RpÔgÀ¥NB¨ªª«m»ÞM6]Óf¢u\x0003p ØA*Á¹!ÄÀHP@\x0002\x000f\x00048\x0011Zk\x001fh\x0006òiYãÜ\x0012X\x0015¸\x0002:WúSÜ\x00111AßT$û£þãµhl#2_ìÞüäÊ\x001f¿÷\x001f]-ÎÛÆ\x0008#\x0013'>#@\x0012¡ê\x0001\|}ªçÚ	vúÔú¹­Í³[³µVa¿tºYVa¬\x0001¬\x001eæ+rÕ
AS³2bÞÌ"BúbÆnÌÌ\x000b/«/½b6·1m\x0008\x001eÙ\x0017 0dI ' P\x001døbÕy\x0002RÙ#.ù3Êõ·öòÁà{!pVl\x0010Ï^\x0004t¥î667ÚÞ¸ñ·ö83È´uÌ(÷o\x0013ñ9ª
ô\x0000
¬¯? P{täse\ÀÑÄ*K¢b\x001a\x0006¿Ëår±;_»»¸>ôsß_\x0003b^\x0002óÒä0Å!6!mHú@ \x000e\x001a\x0013H\x001c0<
&¦8Ð£~bAêÁÆsMH$Ôr\x001f«É¬Ò\x0007\x001d\æ­`\x0000\x0012«p­-ÕCÞLK4³ÃlS\x000els©vë \x0005/êh{úÅã·B»C^I!ûÞIeLâ¸/ëùzc´1Säÿ1UV«ÈrtÎ/I!	\x0014
U¬5¶f=\x001eSï]\x0012ºG
'V¤ÖÊv"\x001bÔ#¾\x000c½'3c¡¢¶Aîè\x0008¡k\x000c£¬¯GCK\x0014\x0010v\x001f\x0006*X\x0004$(\x0008Yél°\x0007¾\x0004bk^ýÊ\x000f¿ö×qù\x0007×>ü£öÐ<Ã\x0014æTµXk\x0010¥÷¤I­\x0002£¨Cç$ä]\Áx+nHúd² ­À[
Z\x0011Â-WCÚ[Ç²´hi\x0019Ý\x0008 \x001bàÕ5jbZl;Ø\x000f\x000bF¢&+eÕ´fÄ)q?\x0000®µVnÓúS\x001f
sgD¾&Q×EL­Ñ\x0008HÂwYv~å°êR51d.ê^è8R'\x0008=
>,7\¢WH\x0012v
çQ\x0018üÛÊ\x0007JUÍ*\x0016£[rã ³@¥ç{×çHªÃgPbarü
¸Ø\x0012±B:G\x000cÂr¯}æÌw_û¹\x001bßü±èÿaÅ¬p\x001c\x0006òÖ 'N4Á¥kn`í)ÐáÒÍ*ßa\x000c0\x001e\x001c\x0016Äw=je¬>Ë°$`°\x0016yÎ\x000bø<Qf×¦hX \x001a `*Q$i ç\x001c\x0001\x0013e/ÀYb\x0004ê\x000cÌ&ëa9Ð­²,²ð\x0001\x001e<¢2)\x0016æ\x000b]ú>\x000cðä\x0011\x0010L$¸h
J"È£,? \x00017ÒJ§À Y@\x001b[à'CÜ
×
íVÄ\x0012zOamZ¨\x0015}\x0002wV*Î¨B'tå¼#\x0013\x000f~4\x0000ÏQÍ¡¬o9\x0007[\x0001ø
\x0004ÇC2\x001b;QÐÜ01ô¡7V+¦E±9m\x0000)\x0010\x000bQÈ$ªÌs°­6*â~\x0015<¨Ýá°Ý
\x0011T`\x0013\x000bSs\x0007ß\x0011Ò$éø@kØ\x0000ÙZ\x0003.#Â\x0008E\x001fö\x0001WÍ¡\x0000\x0014©
\x0018Òº\x00072\x000eQs\x001e§>1-\K\x0003\x00021´4¤`,ÉtB6@vð\x000b¨/É3À\x0017A8@\x001fª<9ö7\x0014À¬\x001f"¹D	ÛÈàØ®Q¢3Ä\Ìy\Äë²A\x001a*¨\x0014\x0013DSÂÀ\x0008`\x0004\x001fÎk)\x0004jÀ)i\x0010Pjæ=ll üVjÉA¹Ö \x0002Ò5 
V\x0003óHH&+C\x0005ä£(\x001a¹f\x0018ÝÂ$ÈE©t:\x001fØ	\x0015BeV%@£ £L\x001dtg\x00087§g^üæw~&üüíË?¹öÉ'S )1áËpi\x0018ÈB?\\x0003ÑV.À\x0005`§~­ ¾9P?\x000b `ù@ª!\x0002Láy\x001eâ¯NÚI;iÿ»ö¤èÈ\x001fZ9\x001d\x001dü\x001fÌ\x000bÏÆr¸\x0013OÉÍ×/]úþÅ\x0019|\x0005Y2~Ì,_¬kªä"¸~íÝwÞzco÷\x0003%×9eÀ\x0013-zMPzKÉ>
üÂX¤HÎ5E2,
,"§*¯xì¯pªø\x000e\x000e®Q\x0002>\x0014Î\x001c<¬ÙTJõoö«¥Ç£
×«»ïk<\x0013ÏØ1xÀ/%$@bÅ\x0002±cM@¬Ø!±È\x000fà?°-;¤°@ `\x0001ì\x0010 @\x0018Øb9dìÄöÄñxî£»ëÁ÷ê¾ó\x000c\x0017 MéÎºÕÕõ8ç;ç|Ã\x0007ü
}MÚIÔFg%fD7PS@0âßN\x0014"\x001bÞ¶Ô"'\x0015i­1Ì\x0016\x0014\x001a?]"nQ\x001c!e¸1\x0018+æ°\x001bëT5X+F·Þ¼ú\x001fþ(¡Fî£z~eãÔW/l[©vÀ»±mäç_éiQCý\x000f7\x0005¨¶LK\x0017Ç/¾ NmL}Ð\x0006\x000fàpÀ @Û\àíà\x001fø\x0014Ð@C9\x0013A¼LÃ·ðr±=\x0008çX
Õ\x0013É\x0008îõ(,*Y$w\x0017\x0018D7½\x0010$\x0014¦È/#ßñ$mfD	\x0017gM=#"s®\x0010!Û©ËL~ò#2\ò[h¡\x0004fÁ:(g~ÆéEK;0¶\x001cGl$íòu\x000c©, Gz§\x001añ¬Ä\x0000±­óGI8Ø>Lè\x001c Ý!vñ¡¡%p´ðA1
d¤àJèX'/20\x0013ù \x0010[q5\x0000¹¶zöÁëoþñÝk@\x001câ®dB\x001b\x00066n^{åÒæ
)%  LþOÛÄùà°ÒÃêäEYU\x0017/ç¯ÌÜøI=3aÇ9ö?\x0001¤2°=àÖ\x0003ê)Ü\x0003mj\x0016Uj\x0014\x001a \x0001v, s,\x0014\x000cN@\x0007ï=Í¬êm ,\x0001ÔÄ} þ$B:³\x0013=¡¼t8e³Õd\x0005Z\x000cbÈêjA¥6Ì}[·éb¾í\x0019¶9?l\x000c
W\x000eFëÉzåÆ\x001b\x0019jL\\x0006ìþ±o·gÛæ:C)/bÊøáî:Õp2Ú\x0018Ö]±bq7¼u\x0008ù|k¶³\x0015Öª\x0002®:\x0010C¬¶|¥î\x0016åd0^«ªÕ²¸¢b5\x0007 Q\x001c\x0010ö{\x001eÂU\x0015\x0005cJS»\x0014L°D#Ò1®sÕ <a\x0011×´©\x0012PSà\x001b\x0010!Ì2)C\x001d"FçiJbá¨ª\x0006!¾óæk{ïÆÛó÷]¢p\x0005E²BªØêc\x0017×6&|ÚzeèÎÙ8f}}\"ïÃi<¾\x0004ãò­ÿº!	ÆÙN¨nóÊðÒËÅÙÍ4^%@Æ\x0006Ò
22è,\x0006\x0015c%e¨\x0015÷¤®ÏT&sº¾üQí\x001fA\x000bK\x0017'bÝ\x0017Åhmí\QT\x001f<|'m¥*
O-sí¡üÖgÑD)*KÅå6ÚS¥Çý)÷@fN°\x0018ê¸.~LçõööÖ{[\x000fno}x{:½¯BC@\x0000\x0004ÖIjÒ&y\x0000I\x0015RîÉ\x0019\x0014#\x0013ék(	-÷É\x0017*2ç w¥\ðÝÝµ8ÁJ'j9^T­Ô)\x0017i[¯4ð\x0018Ü\x0006\x001bE)jü\x0018\x001f^$0O°ä¡\¶<¯ê\Þù¸\x001dÑR¶\x000cÍ¾\x000fOÂ(Èù%\x000f%B£\x0005aDÏZÁW\x0014ÐQ\x0011ú¾\x0008¬,FwÉ\x0010o	\x001a$îXþ%³¡xÈ^¶ÃC·c&\x0017ZÖ\x0007\x0006TX#1»÷H6ø\x000fU*¾ø¥ï|åk¯¿ñ³oÝ»uÕ-béÉ9,\x001aeAA@ËåÝûmròÁ¼\x0016NÛ?èÃÕº¼ËrúÞýù.7a\x0012Ë×1\x0012ÃÂÙbÎÙi\x0015µdÔ	(½\x001c%¥[ç,A-Q,¥+Û\x0001Dbé¥ýæê;.zé89°\x0018­¿bM¤ô ü©wßÌ¦È{öÉ{yzá±ê\/\x001e
;ûê7~ ÔÊOÞx]/n\x0019·ªé#ÁC\x0012ªì\x0002çÒ³\x001b\x001dÄ\x00161Áù\x0012ìÌ,rû¼£ÉÀPÙ\x001d6£îl\x001djö.ÕSJaÝedo IMç\x001f~û\x000e·X_óh÷q©u\x000f½=­\x001cÏu) Ö},¾jô±À\x0013â©£ó¤Âè\x0018zï+Ñ|ª\x0007ÔÀ#\x0011ï)%!\x0002|Q
E\x0014%´ÜÿT4rY\x001c'I6íoÆ\x0011Ð\x0007]\x0008½F-\x0014¦S+AFò«:#5V³\x0002wµ¬L
\x0015ÙÂ\x001etq\x0012½z\x0018åB ææ9ÅVÆt\x0001ÕP*sb\x000e\x0017\x0004í[FxF\x0015x1ù:|\x0010y:áåñ³\x0006Ù\x001dÙ-\x0004rd\x0015-ä±AóºÞPÂò\x0004FÊXFÕòJZíÒ\x0014ÝÅä¸ìPúÇDÙÌÈ	výý²ÁãòT­óÖ\x000f+¯\x0016Í£ñó_ýú÷];ýõÏ¿wçîÕñ	\x0001y\x001aÓ±º\x001b±7O+#«ëã%?ÎÑ\x0014ä8dË\x0007Ð}&?nÇí¸\x001d·§jH">Eÿ¸]µ'¿ýÚkßüüæIÒòdÕQ\x0005ë\x0008aÂZìsÆþ×¿þêß}üàmgOè\x0002\x001d·gÖr-\x0014j½®\x001bQFÔ*\x0004åC,½ñ4EóI40øNêæM­\x0008B+Ô\x0018\x0004ÙY\x0003±o~
í \x0013Á41	DHø³,Bz\x0006ÆÂg\x001cÄor¯ò-¬.-DNZ\x000e\x000eãÆ*|li\x000c~:Ìq ¸Ö)n?LA[\x0004cN8¹óÞ½ßüø§oýåÚ¨\x001a,Z¿Q_¾pþ¥OYÔ³z4ÿ\x000fµDÏ¦hAZ@¾SluQ¯n\x000c^¾T½ø¹z4lvjÛÂ½^¸4\Ý\x0002\x0005 9$nÉC¹\x001eñÁ\x0007\x0002QàÉxÔòv|Ù=`V['_GÑDÃ%¹&©oÊìË\x0002Oµê\x0007>%Ó29yø\x0002QQÎà/0Ç\x0010\x0017m3K\x001e	a_®87R:¬\x0017v'÷ó35\x0003x,1c\x001cÅd¨q´EÌ³õÎêöÀ=pþå43rJ¸®ãüJÌlº02Y 
Ëä\x000f+Q`³\x000eå\x0003+,o 

î+2Ë4\x0004\x0005:¹±ãøm9Â7ðÁ9LE`"Å°ÖÙª\x001aÙbz÷þû»Ûo]/\x001aÕÒä"¡T\x001bê"©Ï:ýÊ\x000bãÊ6ÍL}&;«\x000f
÷E\x0013´Vª¸´9øÌÖ\x000cwæµWMÒ3\x001d[Õ*âP$h¥ëÚBô\x0011R%²õ\x0015
bø rìÐ\x0015$\x0000\x001feQi\x001a[\x0003¥MS\x0003*m=k\x0005\x0017\x0007~ñ
\x0005\x0014å¼ÔÃ,Ä,ºvÕ`0^­ª¡³%Ð \x000czÑÌ\x0016Ó'¾ÞÑÊ\x001b^ï`jÑ¢ËpHíÊáh}2Y/Ý°t\x0003cJ\x0006\x001b¢£}Ò6\x001fÍv\x001e7u¡´Íò\x0000èe5\x001a\x001cÖò-p.®ÀkûÅ|¶5>MK±CHx	üLN»\x0010$Åp0Z«ke¹+d-	më}S7óÖ×8¨\x0013ÁlVò°b\x001a¶H°ÎLùX£\x0018\x0017Å°(JLâ\x0004-û\x001a\x0012E2¸#Ò~Æ¹ ]dÅßÐ¹Áp¾¿óÏÜøÃï·Þ½Ú`b2\x000eFÒ"\x001cÍAãáFt@ë}\x001d´ß¸|úÜó\x001bë£ÂV*ºÐÂ¶­vñ'tÄJ3õ¬]]¯^øÂäâKé¹³ÉV&Dë\x000eJôWo$Ý ;7§ö¤¦]´$I{G\x0004qÿ\x0008¾C?_\x0004]\x0008¶\x0018¬­}ª(\x0006\x000f\x001eÞôq[§*Á&"M\x000flth©.yþ4x\x0004Uûø¶?å\x001eÈÌ	e>ÎMa¾x2>¾s÷Oïß»>náR\x0005ÒBò¯4´cåÙ¨´\x0018\x0014\x0012kZÒ^¢ìe×\x0012$rÕüÄäñOÇý\x0007S©{rùc \x0013EH¡À\x0005\x0019(X
\x0003F\x0013è=ÿoö«¥G®«\x0008ç}tÏLgF¶ñØxb\x001ba\x0007\x001cË,³Ì\x0006±õ"bÿ\x0010
ÿ\x0005\x000b\x0016¬\x0010\x000bH\x0016á!±`¤X\x00112I$\x000b\x0014\x001c\x000f±=ñtß{Ï£òÕ¹Ó=íÎÄñ`Ó¥ÖísÏëSõÕWU\'x#ÙjwÞÏö3yNE\x0005¿
RÿþK/¿ò£ß¼óæ­ëWµ\x0017 \x0015\x0001ài«7ùWøc!;ïüú'±¾atOHõÕ+ÿ_åà´ö@¾\x001a
Ñ´~:°gbþ\x0001#&Î2mj¸y°óàg2]¼©tÈLÐusneíÕ\x001f¼iÂý?¾û³[·>*çò{XNð&£öLf2ü\x0017\x0004\x0011ÝSô[®§^¿téµ\x0017O.·êi\x0001kJ¤àÌÜ\x000b¡ª­ß¸òö[ol}ö±Ñ\x000b\ËÎ8íé\x000b²vä÷\x001eõ\x0013\x0005\x001f=Tl
O\[E¶Ý£%È\x0012IÂn°´H\x0004%\x001fHEJ\x000bc¸þ3Z\x001a<­4\x0016 0¨\x000cÛÒLµ5#/EF¨E))\x0010ëðÕxåæ\x001fO7\z*«±6Rg\x0018M¨5f0Üo*|Ö`(\x0013JwË®¬«¾üÛ_ü²*ÌE¼pâèËgÖ´oÂð6Ï@)\ê\x0004ø¡Ò$\x001d/Ï_ì®~«Ö´]7\x0014HÆ¨È\x0013ÁÔ°º\x000f!\x0010\x0005Ü9\x0012Lî(uÂöSPÄ(¦ð\x0011à¬Ö.h\x0004ï]SSpi\x001fL\x0002µk±\x0019/æM	ù¬À¶!¹|®\î\x0019¨
×QÂ\x000c.ô]Ó!¶cû/:ÖIûù¡\x001dÝ#Ù~\x0000³dx\x0000\x001b\x0006çp~ÐóÀúëè~lQ»=C\x0002½æKÂ©C#Mþà\x0015Qh%÷F\x0019ó\x0002^!G<¢õ\x0005v$)ø	obÓ\x0003Õ
Àf?\x0010<K©ä,29\x0019{\x0016ûHÃþb¿ét6Óö'\x000fc\x001fÃBÚh+µ.Ëbûæí\x000fþð§}ð÷N\x0019Ã\x001fkUnD¬^7X;²rþÌCeQ5;^\x0007EZG-Å\x0013Ð-© BöK\x001ad:ûm:¹ZéÜW\x0001(Ty1\x0010äSp \x0006\x001b\x0003;zò\x000co4¢H¨\x000e
¨äUj`X&à'/ ¦\x000fc¬É »\x0014°«ëAÓ\x000cêº
Þ¥Ú7O ¤\x0011ÌZÁ\x0018ª\x0005\x0002Ö±Å\^ÎgY]¥\x0000êp\x000eçC]
v\x0006ýÏë+«a¥¸28$O×&/»+ÎRfòÌ\x0016°\x0014Ü
Ð­Ï}³U
¶}ÓÐ\x001eÞð§Æ÷1Öv»ÝÎ²Í\x0016µ-\x0000@/à\x0007Aÿ^tà
ÃVR|ýÖaZÎU\x0004àe¹Xt\x0016³|Þb9Ét;¨µB \x0019¢ÑÆ0Ê¬ÎÁ½ X¥\x0011«4c\x000fOÖP\x0002vPÒ*æî\x0016\x0017¬%h>)\x0000÷µ	Þ{HOxfwÀMcÁÆ­\x000f/ÿõêå÷«Û·$"ÒIíA£\x001a4ÇL'¢A4±\x001bíêÊò\x000b«G\x000e/%\x0010\x0012\x0003 8\x001eÉ©ôòÂ8¡ZP¢jb'.\x001f]<¡<ý\x001d_Î{'×8º¢ZÉ\x0006Èð={\x001c38gÎ
Ãöî(\x0018c¼'­\x000bÃa\x000fil§×[µ6ßØ¸æi[RóÐ[nØ¦\x0014Õhü+ûæL56Ú|_5Ê\x0011ÆÒp¹ºÞ¹s÷æÝ{ÿìïÜ
~\x0007\x0001\x00199Î\x001c0L.)\x0012åØ	ë\x0013*`_¦<æ\x001dF¤l¿Æ@\x0019
Ü\x000eÃ¸3rR8\x001fÃ;Ö6è\x000b(Á\x001b\\x001cr!æ
N@\x001d.Ù#ÂIÃÞæé8Ú¯Íäy\x0017\x0015c\x001fÏCÎ-\x001fþî§ÿùKÕ¿­"¼ÚÒ\x0008s3*ð¶\x0010<BÁñ\x0017¥Ì®ò¾ð\x0003­\x000bøÍ¤)úIe¼!Q|IAõ8áøËäá\x0002Öÿº´V{äÓ\x0006\x001c\x0011\x0016Á¯1Åü±\x0013\x0017%Û7¯
úw¸|àXÖ³gC\x001b3ÉL/A-ç)ú-×ÓK¯_ºôÚ'ð¨æÄ´5	Ñ#=ê\x000bPÙú+o¿õÆÖg\x001f\x001b½ªaFkOI\x0002©Æ\x000bß8ïcäQ?¡¨\x0012uW\x000cF\x001c¡²;'	\Ê$i\x001bü§êPá´Q\x0006u£ÁO\x0019«­å!¥an-	­Ý\x0010Å½xç\x001aMå¤PÚjiñä	øa"F±¯4\x001aU&C\x0005ª\x0015\x0016\x001aÃ¯V`µÆ¨A\x000ff\x001aÍËµ±¢¸{}ýW?ýùö'ëZå!4§\x000e÷^9{zÉä\x000e\x0015gÊW¿ñÄë+E&Cº°\x001dB=_ôÎî|ïÜöÂ¢h¼­\x001dÒZx/Ä©Dô\x0011fOWè\x0018¶¹?Àü\x0002\x0008\x0008ä\x00024>&5$s ¯Gb\x001f\= ïÐðtÁË	óùÉî\x0018[\x000cx|.¹<ñ\x001eøÀç"
_t\x0007ÖÇ>>\x000c¼ëËáý7\x001dë,%¦-!©Ð£µ\x0002\x001e´äb\x0010¨ø$ôÄ2ê=OöDb\x0012ßÂÁÑýóUz\x0014\x0007\x001d>=\x0001~@Ü+\x0018êiX¥»äN"\x0005CxåQð¨Âuymë\x001aØ'y2ÉYà#@>û[ò¶Ç`)/Ä&\x0017ÂK\x000f-Ýù÷§ûÝï¯ÿã£9xnÕÍ×iOî4çÏ¬,¼têøR¯ç\E2Â´z4í±\x0014«"ÔÓ4ÔèN¹ö8uâ¾1.zò\x0018.P\x0003Ô)¼2p\x001d1¾Ð2ZÂ9`6\x0002Ý©zg0\x0006F£H\x001cÁêP\x0016n\x0014\x0001QQ\x0003$uÝÇÏ5\x000coÑâÁ\x001c\x0019²C¤Á61ñf{Û\x0004Ûe6+\x0016²|ÎÚ@9\x0008oüiW7ªºßT;ä+%d}+Ãî¬F¸jÞévWbÑb\x0017	apþÆ÷«zË7õà¾CïU\x0000Fzæëu»ËYqHé\x0012ûÂUY#~ÐßÙèïÜM\x00002¹*J(ÝE#ã\x001d&ÏËEü²b>³%¬*ø´¬óº®«j'~bjÀ\x0012èb.e\x00074óm"g£³Ìde\x0015Öv.\x0019iJ
\x000b"ðg§ÐF¨)}\x0008sB¦dpD×ck6××?|ï½kW®Ô÷ºe¡ó8ªñh{a\x000b\x0010\x000eq.7'\x000e/:vtq¾\x000bzbâ"z\x001c÷ÇJ\x0007ê\x0011\x0001C;jØétµSKç^Ê¬5¢¨¨bmEÍ¨HÚ\x0014Gt5AS|N
\x0013CÌºc=-³¶µí1\x0011¾z½Uc²k¶%åÐ(¸öÁÍ÷XqØhÉöd¼ç¡\x0003\x0005Ä\x001a\x001fdfâ|9Aã¦>\x000ef»ªÃÍj°\x0019\\x001aWF\x001b¤Ò'p\x0002\x0001`
w5>ü\x001f»T{\x001cÒØ"a7À8Ö\x00157X\x0019mÜ\x0001\x0014Rtó©`È\x0019\x000fG,¨ñ\x001eQÒ3.À\x001bÈD»¡_M2\x0019©PÂL'\x0001
9`b\x0019"ÇJ*ök\x0011
\x0013öLH\x000eµ\x00030ô\x000c¦qR~ãU¡|f+Ó?ùSºã\x0017ìW[\x001cW\x0011>·¾ÌÌÎìz}Kãµ½AQ\x0002â"ñ\x0004¿Ã\x000fù\x0003ù\x000b_Â+\x0000	\x0010"!\x0010\x000fá!B"X\x0001\x000cD
²±\x0005mÌâÝéîs+¾ª3³Þ\x0017{ã\x0004\x0007öloO÷é:·ª¯¾ªÊês4ß/b;ñAHø«KÄ9/r-NK%ÍÏ%Q?m§í´¶6T\x0011ùVXµëo_¿þÖ\x001bëJE\x000e÷GÕhG0!ztD)<áî\x000fÞùñw·îýÉÙ\x0014¶ÿ#üÿb5TGÚ¬Â\x0010QA¥@*Ü¥\x0018C5²6.¼N¦]JT¥õ¢\x0004D*¨µ_UÖÊsÄ\x000fmÛ
\x0011SC-¨)c­±w\&r9,Òò¶¶2º2¦2ÖâÍhcc"0
\x00034¾ÚÚ¸Êòl\x000e
ÏÊ9Í/\x000e¡\x0016ÖX°]Ð|xÿGïþæ§¿àÊR§³æÛW¾|ö|\x00081ñA^8\x0010.ýJËæÈhUÃ!õI^|ý«zsc>i\x0010õàm\x0018|Rlj\x001eÂ-fJ|O\x0011y9LqQ$\x0005%\x001bF%ô³\x0006Øv5
á¡ïrð\x0018Qpv\x0016Ç9Ø»\x001fF0P>ñptÒò3-\x001bOk¨B³cÊ\x0006g\x0008©¡3{\x0004\x000e´=\x0007ñyÔ\x000c\x00161\x001a[Ï¤å8}\x0011ÔG\x0011ÔIÌ±Äùþ¾ÇýìMDÕWÀ­kGh
»a£¦\x000c0ñYU[]-¦Ðe6º\x0018\x0001>QiåXÔ(±
Pï´¸	ßð\x0006×N¾X\x0002ÞçØo f*-n%\x000e9Y\x0017\x0005ÝBÀÖ°Æd¶öÉí;7~öó¿~ø;¸J\x0003I(±ÆÎHÌ
ä½?áÂ·.]¼¼:\x001aT\x001a(\x001aM\x0006ZS±Ø3ë¶X®èÍCªVÉÇa>^1\x001b×ê+×z]Ç\x0010(÷\x0000g`È2uN:\x000f9ûX^$ÄÆàÜíAòÌÌÆ´\x0007±Ä\x001fbl\x0012Î#ö\x001d)¥r\x001fâ|ðÛ>\x000c9\x0004ç\x0002r>º)8.\x0006\x0004°M^6sµKMÝ´5[O-Ó\x0013È\x0016Û	¸º¡Ï\x001fåÐY`sÍù¼9 \x0004«*`\x0001§ªñÊô|Û®aJÌ#ù°Ó\x000f[¾8t°\x0011\x0018VIü\x0014NwE}E\x0018µ2'gëæq#\x00187ëÈ\x0008óùüþ|ûaò\x0001L\x0008.5BË$\x00114b\x000eÒ®ngíèLÓLz\x000c^å\x0015"Â\x0000çï·sÜ\x00068øÀ\x0012ÏìeO&jp¬%0pÓÛI[O8Æ\x0011qnÖ\x0016<Âb\x000fµÀe\x0018eO\x0011\x0008wåN<¥\x0005\x001eòö¿îþñæïýêÖÍßäÇ©u9OÀc\x001bñ\x001aÈ? â^{X»¢\k:3]yéÂåsë¦ö¹N\x0005i\x000fövïÿôM«­Ï:püÌ8Z]­k¯¾1~ý\x001byí\x001c0C~\x001b«Küb;1ñiÖã\x0002<»>Â¯I- DKæ½=òºË¥å\x001e­\x001b¯®¾â\}ÿþG\x001eijxWËeþ½sY¤x$uT>¶ËdKÂÞsâ§*ci\x0011\x001e7É'²\x001c\x000f@ò;Áë¾ëßÊ¹S\x001cyp~\x0008Á-³\x001c^ËÚ©Q/^%Öñ\x001f-·¾~ö
K¡$¬Ð3V9\x0010-;ù-\x000eÔ4¤\x0008TD\x000en)ðÚÅµ1Cb'"Þ?k\x001bH$ªeÛû\x000føâ¥\x0004_Ü¶t·\\x0012Sé"q\x0012½_âù\x0004ë5*>\x0005¿Ól`GÎ@ËA\x0002ÿ¿otÐÌ\D¨O<m\X­_ÚöÌ\x0011ÒY\Fãî6ôgL\x0008Å\x001bJ\x00180Ïrø\x0003¶ Â¥êñæ°mq@¬UÎYFdã\x0007få9µ<O\x001cÛTC,÷óé´<Æî
O?Ýãtw4íÔ»¤Ö×\x0010C9»@
X)½T\x001bNIº»ës3Êi;m§í´ím(##å¸\x0015VíúÛ×¯¿õæÆºR\x0011¥åz\x0004§s|¨»·o¼óïm=ø3+(ÏNsõÏ¤IA(§@ë*S)D\x001d£æ\x000b\x0017\x0019\\x0011j«0\x0015SJÅöt±FD¥-^5ÂÎYk±¹ªRUáÕµ£Ú9\x0011CdÓVKÆdx(Þ2\x0016ù#ª91@Ym,QÎ;1gtÖp\x000f\x000bYg,Om´ÓºÂáÚ¸\x001aOV;~¤s	£Q«ÝÖïüðû?èþþI²Ô´Õ7_þÒw®\Ki¸´T/ZxÕ*\x001aev\x0001ÚÒ¹	Éìø\·îêåæ+oW7|=ê|ãÊ!%\\x0003<\x0014ö%RÎ)SJ\x0019ÉybeçÒ\x0013s\x000eü\x000b1É
øÀ@¬(Æ3l\x0016\x0008\x000f}\x001fBO\x0010³\x0013EæX4W\x001b2 ¹\x001cIþÈß²kÃ\x0016®iaBY2`Úè{¤;ø~\þ·`\x0012:Ô³¯uÅ¹qYzò9{ú\x0014\x0005éáÌsOyÖ¨Ö¼#ÊïLÆ¼Ñ¨âQâ\x0011ZüÑpu`x·ZöÌºVl]\x0011²"(7mäÇY]\x0001öÊ¯¿êÊjÝ¡#;F»Ì`Ù\x001dX\x0012\x0014öÆãx¬*Êq¨È¦®WÉýoýöïÝ¾yÓäÔÇ@\x0008W\x001f¤\ª°Ï^\x000f1u/Ïf_Û|íÒêTçàsÌÂ*fQD½\x0016LCÉ0Æd¼ïýdÅ\}]olvuM}g±\x0014·bÄÀK*\x0005,\x00150Ç\x0018\x0001o\x0016P\x0005íÀ°.\x00181øñ=â\x0017z©\\x0003\x0010jæ
\x0005NLÙÇØ÷ÃÎ0t2C^ºD\x0016±9Å®\x000b°aRIÑÑc±udæ£vÜgÖM\x000c«\x0007èSì»îómÌgTDqhIB¸Íhe2=Û¶Sgkk+Lð\x000eìêa×=f\x001eÓrA\x001d\x0002®ü2\x0000@·ÆM¦ë³m}Æ\x0016à"
¥æóûóí`O G@
ã\x0018kÒ\x0004Z2ã´®aù3£fÍVc\x000b¦O²&ý\x0010ú¾'¿­u\x0019(å£Ö\x0000\x001b£Y°\x001b|[9Û6ã¶6n\x0005Lï\ÍLñâáð\x0003yÅ\x0000fnab×ì%Xao+Èu\x0000ÎQÓ\x000f÷îÜùèÆ¯ÿòÁû÷nýmDªm\\x0004ì@10åM\x0015¬Â&g½NÚúÒúìêÅóçW×*J*{ &pMÅ&±Y-¢£9\x001e®:Y\x0000WV\x0005\x0016ó\x0011
¢isi³ÞØ¬_}M­Ì@ÀjðØa§l\x0000YUì^`¤T)Có\x001e8í£²Ò#-í2\x001e¾Ã\x001cÖÕÓÙÅÊµ\x000f\x001e|\x001cÒ¶¢ýÅBn\x000f\x0010#/ÊÒ»\x000b\x001d¦µ\x0005iïëIÇ¤d{¤\x000f2³ìDhANÊ>tô\x001exN¹Ã¦è½wáª\x00082l/\x0005u1²\x000bª´p:\x0018£G.á\x0004v\x0001Á\x0000\x0012R²pBRiÑø\x0019 \x0011x£KI\x0001ÿ"¦g3\x0019+UÌMFô@2?»\x0012;ÄfNwÚNÚJ*:T(ÖU
"6\x0019îâûàÛÑ\x0008»d\x000cÌlÿ®ÚAVÁýýjÙã:¢÷ÙÝ3ÃD¶²°IÙ\x0002\x0012q\x0011ä\x0017²Ê\x0017há\x001fðG$ÿ­7\x0001\x0002\x0018ð*A¬\x0012ÄH\x0018V\x0000#6l\x00191âX¡$RCöã¾rNõHË¤HId8¼\x001cN÷Ü¾¯®:Uu\x0006t=ÒQ~J÷}jK\x0007!dQ\x0008¶\x0001lQòEiÑ-êi=ÇHú¢ÔbYõBm®%qa_@bÑu­3eRÏ\x000cß\x0018sYy\x0010§Å3a\x0002ÔmêA]õµµ\x0013Öz\x001f;KY\x0017Q$Ø\x000eaQ!©³5Ê£\x0010rT,\x0016ÓRp0ô\x0007)¸G­ÕX»¸é±ÆÑiøCR\x0008¤¾åñÅÏÀÆ\x001cP"/<Î[ò\x0000þ\x0006æã=\x0008ÂÉ¶ÒÏ\x0006$Ú>\x000fClkU¦®ÚF\x0016\x000fs\x0016q\x0018\x001f\x000bãÒ¡à'_N?Ì$ð
Ð%£\x0007ÌL¹\x0016N~W\x0010\x0018\x0008`y\x000f².Iú2K\x000b<"£Î^ò¹´3 ½\x001cu\x0012Qy\x000e§¹h\x0017í¢½ò\x001eÁØ÷ÂºÝxçæÍ·w¶6\x0014ê\x0005ËÜ	ùíxGdÊ|ùÅï¿÷½ÝAQ¾lÒø=mtè²¬#\x00181u[ê£\x001e¢\x001eåZ)&G\x0019ÁZC	ºÈÛÒî}¤É-y%î1ÖZ|\x0019K7ÞûºqÎ[T8S´Õ³Ó¦\x0018¯4Æ+#MVÃOE´r¸1Úa1m¤ýø¶Ê8Nâ}e´çnÚ[[\x0019nãeã\x001cï2>Î¯TÙ`~ýËw?ûã\x0007]hu]¿µ¶ñ³\x001bµëc<ËwL)\x0014\x00132Y5YºI)¦³éµíÉëñ\x0007m±ÿ8y\x001bs1¤\x001c2~Â	ÁkÂOtb.ãO8\x001ac\x0002®ft[Âû©D\x0008»Ó ¸À\x00059ç¾kc8À#Î\x000cvÂDR\x00047\\x0018S}Qiì¸\x0007°ÈG\x0017#Ez\x0018[¹zªq\x0012c\x001a \x001fc\x0018¬°¾ÇsqÇ³L\x0005Ì\x0000cN°cq®aèq¼2ÓyÛ1Tðp.Á¹+´\x0004ßCÕ# 
D\x00181'hyª\x0011Þj\x000c\x0013J\x0012{K¸\x0002Ï\x000c*ìßx¯­Sp
\x0003ÀÊHg°h\x0006  ÚÑ\x0007n\x001c~Å\x001e+\x0011[\x0008\x0013_+ÖÕM]\x0019uÿó~ô?üëãOpjÖ¨²tDQ\x0008ÙR0Ýµú'Û[Ûëð"\x001dP4ª¥gÒ°Ü\x0005¾É\x0011\x0016Ê¹\x000e¹­«êÚu¿õ£y5kûC\x0017ç¦D"\x0014vÍ\x0003Á¢XX1\x0001ÏJ\x0011\x00128f\x0014|&cP#*³à¹p\x0000ÀC;WA(	¦ÔÊ¹
±ïû\x000eYÎxÀDy1ñ¨%íOb\x0012&\x0006,[¨ Ï\ÉÈ3õt²VÕ+\x0000¶8
s\x0003`\x001dÃaßîbYT;ZýT#àíàe×L×f« ø \x0019©pØ\x001cú\x0014æm{ïðð^Èá[ 4Gàn3¶Y½²2»ÒøËÎ6§T\x0008ñ`>¿Ó\x001eÜ
àzª\x000bC(\x0005\x001c1Îì Q¼·+Ë³É\x0015ëWGjÕb·0¾ë\x000eC·/¨5D)ÁW­1=bÜ\x0008¡\x001dµwMU­Ô~â\CMj½|,(|UøÀY¦n¦t¤kgO3"Ig\x000cdã\x001c\ÕÓf6\x0019\x000eïß¾õ·üù/_ÿýãÃ{wQ+|]#Ãgò	8¨&.b¥"BRBn©LÙ\½±ùÊÕËkf8s	(2Bãè\x0004ý$º{q\x0012Jè³²ùÒ¦ßÞi®Ýh^½
$\x0001ðoV\x0005`%²¦*ËËB@\x0001bã5/\x0015Õ²X{\x0018\Ç\x0013\x000c²²ú*,¼»{;¤¹*Ôª4\x000e{¸x^®µ¬ã=*SÏÃwX¾ÎrG\x0003\x0019)\x001a\x00188Í
§gc}l\x0008\x001b³\x001e.)ÆØzä>¦\x000eÑ,\x0004Å°EÌ2ÊñÎp\x000e«\x0015·æ\Ô\x0010Ô¥ `!0\x0018ñ\x000cm$\x0007öD\x001d\x0002<pç4\x0014À\x0014RAÜu\0KÝÁ2ª,lyôæú¹kì¿  Ï¯ÁÂQcÖmµ>Ä¯M¼ëR]Õ¯ûéúùW!ÌI\x0012]Z½d\x000eÆØ.e\x0000,­®\x0014jè£hù?m$!r$ø\x000cÅnÐcÊ¶:{òF5d-ÉñéÖ\x0017\x001bÌè\x001b\x001c§Fæt"fûT\x0006ïVW§WQú»:?(¶ï¡]sSJ?³i!_Qëaâ6A½»¸fõT\x000eö¸ò\x0005Ù¢cáÐdÔÌMÛ¸¶ÝG²Õnøùæ©¥Ö¸Ê¯Îf«ûóÝah1âÉ©iÿ3í*²µ\x000eWãê¥\ä_U@T¾W¶\x0005­$í¹#ÅÞ\x000c\x0003%æ\x0017?eK\x0014!ïLb°ýþ`\ QÑú\x000c \x00149­¥\x000bJ\x000f"Jönªc\x00069u?Ì*)ÒQ\x0011	9Ã¹hJ9^hç\x001a<úee5Î\x0013àß\x0016_ç\x0017í¢]´ïlÈÕ{aÝn¼sóæÛ;[\x001b\x0010IRvOÈo'Ä;z4t\x0015uâ_|øþ{?ßÛ½åÌL#µ^´çÕ2u²P`1¤\x0012mR,S¨¥¨xKu¤@¥ÿ¼MK\x001b·S¤Ú,µ6;
Jï|m«Ê[ñ·ÁxM²n8Õ\x0014ãAHõQÃC\x0002j­Ó
7Öà'¾HZe¿·¨ã¨°Ör\x0013ãö\x001cÌ\x001fÎYo¸ GÊ\x0019¼ò®X;bqÓ[úëoßýÕþýUUÕ¯Õîüðêz
`ãíõKÖ/¶dtÒªÎ©\x001aTÔUÿÚFÙ¹>yë2©ú\x0018b.¦h²Ê	\x0014*¦>çR'uCá{¼Ô2Â\x0016\x0005Ñ\x0013rN\x001f)\x0006.)ù\x001c¹ìÈä1\x001aÜ2\x0003Î*ò\x0019A\x0003	Áe\t\x0014üº$<é\x000e\x001f,Ð[4ò\x0019c+WOD'¦!v}ßfP2áaç\x0006EÚY¦"Ú<p&<8\x0018Â@\x001c??¡úÔ\x001da+9!M'íØ\£)©À¥µ95¥E\x0007¡Æ!ø\x001bÙ!0ì$2fÀ^\x0013äØP×qA¶6F\x0019^c\x0000û±K\x0013ó\x001e»\x0018³hìb\x001d|²3¾®¬ï~vûßýþÎ§×ÚTMu\¨PÌÀ1mÎ\x001f¿¹õú+\x001b&\x000cÄùßD\x0007ht	#Æà,£ÌöölëÍäg{]M(ù\x0001DjI6'@3$ª@#'$.\x001c$d&-`\x0018XGJjÀ7D\x001f\x001e±'\x0016yZ\x0014QÑ>Èi07S\x001dÂ¤àê\x000e8Ñ\x0014	á¢ÆD(ÐÎÙ*\x001c3ç%öxjÄ<mUûédºbýT3Õà9"0t]Û÷ó8ìa_-~?Õ
\x000c!ê¬Ét}º²î«\x0006^³¦Ê	¦éã°x¸Û¶\x000f2ùö#\x0018u\x0004N Ü6+f³+MuÙÙÆPâÂ,Èó\x0007óùöð>l\x000000\x001cíJÁ\x001eÐ\x0005¸2ûfÜNõÕé¦¯Ö÷4ë\x0003\x000cÓwÝAh÷bì)8\x001c\x0013·\x0010\x0018ËHDÖWnê=>³\x001b\x000fI$º\x0007ÉÛa$gflxÄY§\x0007ª­\x0000%1Hû¸Çÿe¿Úb¬ºÊðºî³Ï9sc:0Ü©@¹¡\x001a¥\x0011°±M¬ñÅ(¦F\x001bãK41F}èoÆWõÅ§ÆÄK¢	Ø@­X©bb\x0000©¥Ü,ãhéH\x0001\x0019f¡gÎÙgïuñû×>3À00sÈÔÌ?'{ö^{]öZÿ÷ÿ÷Ç-å(±«güeèØ_ÇÏÛ´ª\x000bLS\x001fÐ\x000c¢LÜÎ\x000e*?z¤Dï#}K.+·ð¥\x000eH\x0006ð½ù Íh¡æä\x0007ÕxÜi80õ	hW\x0016+Vµmx\¯zÔÆå\x0004Çá½²)ápÊw9\x0011»¹%ÇÕ\x0016N}\x001aÄ\x0018°hqp­å\x001e­âÑÑ÷«p\x001fyít7v+NÝ\x0007F¾uòÛ¹t¶\x0016C¬~§íÏ£&í@oðjmb\x000c·à\x0016Ä\x0015a\x000c\x0011L©r%ÜÂc&Dº\x000fáL2\x0005}Ð!³%\x000b¡\x001a\x0001S.K¼©¡é¦\x0001Ðwé\x0014y^\x00061ç\x0007/Úý3Äij¯ë¸Ô·æ¹5ý;OýÅå\x000bÐ®kËÀW×oùøáÃ?¿xáôµH\x0004ræÿSgQF\x0002;hïÁ\x000cF4\x0004£`þáR\x000fÞxã\x0002æ\x0004IfcÊL2\x0011<\x0003\x0017rôà¡>\x001fº³òäwx\x001c~çz}reï¶§>ñ±ñãGTß-h\x0014®Ê1ÝDQÔ\x0001ôÐuÆ
Û·½ $\x001füÇkWFÞi)tû¹\x000fSÐ§U-ô­zzãc;­\x001dûÄ¡±A.kTb>ö\x000b8155]èX·îSÛ¶=søO¿<ÿïãHLT¥Íº/\x000fX}´	\x0012Q\x001aáÃ©vICzòS\x0013.T\x0010¡ê!w$QM[×G6oùÌKg\x0006ÿH\x0005 _p\x0017ñz2¶¤wÃêµ»|µ2øÖ^¦"\x001bê\x0016>ÇvòãXHû8[â2\x0015ÌÌ-6x A¯|P&  °×{9º»Nw­nî§q7\x001fÅ5\x001f¡²h¶h\x001f\x001e\x0003;Cú¬]v½¸gÏ6õuAe1/Ùl\4K¼£\x0005©\x0018ò÷O\x001exå¥Ñ3J8Í\x0016q6os!Iç8j,¡ôBÍæQYC%­EeæÓé\x0001%Xî5JXMäâ\x001bÉ\x0008iFj\x0010Bâ'¥SÒ+-âJ)]"
Qã\x0005'Ãrá¿`BqüÂ<¡\x0005W%"UÀ\x0014MG\hN%©]KL!RÒ"B\x000b®©3=ä-\x001aE\x0014&ÑXÛK\x0015©BM-Ý÷\x0007ß<¥è,è­kV\x000c¬Z&QZ÷°©_hu\x00082im­ ÌÊå\x001d[\x0007lï²
\x001chRé\x001dI\x000bR\x0017YoLfl
\x000f[1H,ËÉèé2k¡aÐ
\x0016\x000e;%G;fCÇcFS8zB0â\x0018 ï[kÒ41Y\x0005Ó\x0006d §É\x0011Bµ§6Gë£°ÜOK\x0016\x001fê\x000c\x0017´eÃËLªXF1n7Y`fO²\x001cz7Â¿Yå¿\x0015\x0004µHÁçB`wY\x0019cø½V£Ó8u­Ð\x000cü\x0006QÙKÇ\x0010T­Ì»¡1\x001fëj\x0006jù¡\x000fðLjÃM\x0005O7À¹äa\x0014xä\x001a>Á¤\x001cox>!²hpÕ¡·Ê½Fóá\x0006Ch0\x0006
OG£)|Ð
½£(VêÊÐ»G{pââå\x0016Ao\x001coÔ}ä)¼®î%¥Ò\x0013+×<º´ÛüËÁ\x0012\x000b\x0010\x001dJ
\x0013@\x0002RU­Åê\x001eÙßo
¥¬1BZbXÕ#QX\x0001À®¼\x0007ÑNu@³Ë\x0002
½ô^\x0011¤-¡=\x001a½¤yÂÏ\x0002\x0006:ÒEOþ\x0001º\x0002 õ¤\x0006\x001c¢\x000fv\x001f¦rSàmô\x0014!þ¦\x0016¸\x0012ø\x0006G¡X,\x0017­BFpM^=!\x0006úäää\x0007ÎLR\x000cÞµá!>¤.\x0014K\x001d-¥v0c\x0000Â.KëÉµZu,M«³\x000eM\x0013$d\n/ºâ¨C8¸6c\x000c¾äj­2s\x0001O/X\x0003ôG~\x00080¦}År¹ÔSÛ¹\x0001j:$ÑvÉzu\x0002{!BhÐ2Ü\x0000p8H\x0003\x0017Úµ,\x0016¢R!jÑº\x0000>\x001a\x0004#	'¯µV aboS\x00117KÊ
á.\x0002\x0018°%Eé@\x0007Æ×Ç\Æ-%Ý\x0012«ÿ\x001a:~è¿¿yÔÔF[D¬á"Î
bPð\x001c¾7\x000e	\x0004Å\x0008ü\x0006\x001b©'\x001dÒúå½kv¶E ÞrÚ`ðæ>jV~8\x0013\x0015\x0000\x0007¢N[·/[ú7´n~Â-éMEkR\x0001@6>-\x0016Ñâô±L\x0003rF\x000b#j¾	XMéÖrO¤âÑ±÷ä>\x000eÜ(HogÈ©9§g¼º¤ï¸ë@énÆ¨Yïïb
f¦\x000bå\x001dëêYV3¶\x001câ(R3C¹	À $Å,e®°B¢UG\x000b\x0005;
a\x0006\x001e Q\x0004NC)»
EïçÊ©<@¦\x0002¶!3æóÁv\x000c©g2\x0019iéxd×îïlÿè÷îûö©\x0013/Ç¼g÷Óß\x001cøØî×^ýñ;gßv2\x0016Ú{åQ\x000bm\x0000KÝYÞÚ¶¶»÷±ÿ«\x0017.E\x0002mJ\x000fÿÿ\x0019¥
JEÈ#\x0019²3çåÞ'u¤._9]«^\x0002/1§\x0005K)ËÐA=\*z\x001eÊ\x0014¤D\x00109~½TÖöïþôg¿~éêðÁ\x0003?¼>öÏ\x0015]Ý\x001b¬/\x000c\x001f#\x001d´à\x001b$Ù9\x0018[zák?CB;ôûï
{½­ÜçgS\x0000·\x001aR¦ôÂ|P»¸fõgýîòÕ\x0007ßÞìÈþKWNqH(\x001f§WÓ\x0003°XUâRûö'?¿ã©/¾ºÿGgÏý\x000eÄ\x001bVAÌßì·F\x0012\x001eº\x0001Z£\x001aµ®ZÚû¸I&.\x000eÿMj\x001fò\x0008!®\x000bCÃêÔ¹45õýüÜóß?ýÖÞ×\x000fü@GEH\x0005YcÚÀ\x0008\x0013ãÃ\x001b\x0007Ûùì·*×Göýô\x001b:*yT°Ìñ9`\x000eF¨2\x001du,[¶£^¸6:dÓ\x001aÄÏÝVdÐ»Ig÷º¶öµcã&ÆOkJbò\x001ePw÷Äw{ó"hn(4[	ÞÃ¶hö\x0000\x000bÔ,ÎL\x000eÑõâ/<¿©¯ª\x0018ðél\4KÀ¢\x0005\x0005\x001c\x0003\x0019÷O\x001exå¥Ñ3J\x0002=.F÷}2GÇ#åJg©P£Ì9ò\x000b¥\x001cÕføqçPêy\x0017\x00065²tÓÆ!4§° ¥\x0014\x0002\x0017/%SJ(Å¥äJëB$µä³¼¸Ë«<&".T>\x0016\x0002¯\x0019+H\x0002TGpE\x0017\x0011\x001a
WÉ¥Æ¤´@ÕÔN<¬«D7\x001dzFkG¥ÑÞÖÙùç_\x001f8òÕ«×ºÚZWv·îÚ´¾Ý£n]¨S_ ãÐgÕÔµ\x0016õÀz½u£-\x000ctº#-$¯ÇùáÇàÆÌ\x001aXfÉ·\x0019¶Â©·Ø\x0018~@Ä£{4"lp\x0018ìòn¤Èè\x0015A\x001b<y1gÕ©`jô÷Üzoà2`Äß0ÜãÜ\x001c5O<G#} \x000b.F\x0007G\x001eJ\E\x0018²zZKÓ\x0004w3¶Ü@àüld\x0002\x0005\x0013À
ÇÆéÃ±è½i\x0006 ï°\þ*\x0000LÍø\x0006RûAðã\x001d\x000fgà\x0004	|ú\x000bS\x0002×iîñ,|ª\x0008PÏ×\x0004¸)^vB¿äá-!\x001eÈçXÐyC \x0010þip\x0005òx­Ðô_ö«-D²«sî9÷Q·*Ý=étÏ+1é`\x0012\x0015T|¿ h\x0004\x0019~\x0008~\x001f\x0011õO\x0004QðCü\x0011üÑO	\x0006T$\x00030:NH\x00145Ñ$N\x00183A£=ÉL$ãôL÷tUÝÇy¹ö¹UÕÕÕ=´AÃíêªó¾{¯µöÞX.ÃVh"°!Ó<é¹?ýæá#Ë§Ï´ã\x0014\x0005\x001fÕ}°»Ôu=Ëý·Þ|ûÝ²ÖHi\x001dùIlM\x00136ØY^ÓaµÔQÊwïwì)ã\x0018õ\x00003\x0016ga\x0000Y·\x0007È\x0011mI_ã^p)9ÔR\x000f¡\x001d E¢
TÓ\x0018P\x001d´Ì\x0007$\x0013\x0012Mx\x0015Cpe.\x0012­H¤Áàð\x0015&{kªºîã1¶\x0006Ì\x0003T\x0000}\x001e 3P0àP8½kPÞøiR.\x0007´Z­N´<Áçbµ©ËªWôW­BD»\\x000eáÈH¥Y~CÖ*¡ÁgÃ¬®Êb¹(.\x0018SRÔl\x0003Ä4à\x0003\x0008v§ßÆÓxÍ0H¶Ð¦ßï+º\x0017@z`Æ£Ðlv
ê*h[\x001eV\x0013k\x0013Õng³q:Åã$ìÁ\x0006ÆÑUQ\x0015\x0017Á¦YtvÀmó3 ¾Àd$[IÄq¤m\x0015§\x0004¿!AH\,¼¦	Ì\x0001\x0012¸¶Kâ\x0011´AJ<1Ä*Ñ\x0001\¡ç
º-y\x001aE©C5\x001aNªúË?>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Affiche_chutes_a_VTT.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Affiche_chutes_a_VTT.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=JW\x0007µuûÇfºwkgó<Ão7Óü%ÔVÎ÷"¥îóU´úYÑU\x0016ÛOý6Iþ«\x000e°N´qt\TÖ«Ùªñ_(²}7Ó³m­+\x0016Bªê¦K\x00025n¤48Pµ¹èWÀÿgºÜ®\x0018\x0006a\x0018ºJGàe\x0013ö_¬²d\x001e_=
¤1¶/\x0008\x0007+¡dÒÙ\x0007ÎÄé\x0003Çc¡m}ñ5£êÆ#_\x0006màÖÀ©< ¼Ù	'þ/mæÖ\x0019W¹¸8l¢s\x0019\x0014rb=çä?Ñ\x0005\x00125¨oR®¦É\x0006*ØD£,®¦\x000b2ä²þ¥\x000fùaãôoârv¥M{ù¨9ví\x000btbòÏ\x0005ºÓµº9=ú\x0008(Ê
3ã±\x001fÓ¹ÅÇ\x0007Ge¨¸Â¹¶ãµdzÐ>·Å
W]¥¸m©JY_ïx+²òE¥\x0003[á5<Ó4kè\x000c/¸¯\x001b¶Ý¡Õ¢¶n< ½ÐMÄ\x0006\x0010Êh@\x001a~\x001d[j~×ÖµZÆ\x0014-µ©TÃ\x0016qº8@ÈÿñôÒ´¢Ù¤RJUyF)ëçM¶uÿïD´ßùêT|
\x0008X4¢Ejt©vêeN½\x0018&VI ¶\x000fg]rS'¹PÓ¾Í.~ØkVÂ\x0002Uªmv-âí]èº6ºD¤5D\x001dõ kÆ¸s,ìot
\x000fë¸èZl×m£k8<è¹\x0015
~Íoþ¬ójèZ'onªnêD×ºv»d\x0017\x001fm/º\x0011Ôì\x0007]D<dÕ&\x0016×å\x0012]<øF»ãs\x001fÉD7²6ê.\x001e,.D72.WFt!ãl»è\x001aûâ\x000biÍ6¹PQÓMnT¤®\¶.¸P\x0001Ä\x00063\x0016ÒÚ\x0003.\x0016\x001a·­3n¼{lp!{\è2û&\x00179s^ä¦8ä\x0014¹¿¿\x0000\x0003\x0000/"
endstream
endobj
11 0 obj
<</Filter/FlateDecode/Length 46409>>stream
HlWI$1\x000e»×+ò\x0003°,ËË{
\x0003Ô¡ú2ÿ?\x000cIÙ\x00119e2¼ÉLQ?_\x0016í½Â^õmu¼þ&î\x000eìÝ^\x0016ñ.VböDk\x0002Íb¯ï/b\x0003x­ªQ¯õåokC(
QícÏíØ÷Ns\x0005Pk\x0001Ô±Æ6âÜþöÑn×Âþ\x001es>¶í0·_m`\x001a4`^{;°j\x0001÷£në#Wºo/|ýhã:í5Þ£üûX{á\x00168îWãÑë\x0003÷ªsÏÿå\x000e=Þmû£q\x0007`o4=p\x000f\x0000\x001b
`\x0006\x0004§¿\x001a¾LÚ	4j\x0000{äX\x0014\x0007jËªs,îÔ±CÀ¸\x0018\x0001}åM7\x0013ÈÅýUü\x0018WÍ%\x0014(¦|
\;q¡Ñ\è\x0006?u{Oãyeæù\x0007#\x001cðB/o/ã_øÇßs¸>`zÿóÁÞ¥.}Àq½ñC³dËtÂVFZ0Jl[G'îð.Ù´[z¹`Ãt\x0002\x001dô\x0018§ó´º^¾åæ;\x000ct< ¯ù:Q¡a½îÑì¥¹\x0019Î?\x0005ÞÈè2ÔÌÊ\x0008@ÛfàÕ_ðM\x000e\x0006Ü[v"$\x0005á{jd^®½\x0011\x0016âÊu¾>ó+/Ëw-zÈ¼+òÔ\x0015é ª­Ë«\x001enìÕÃ\x0003\x0001mX\x0006¡åVÕöôÌÁp]Ê5y²\x001fä\x0013(æI\x0010În¯\x0013m{ÞÀAç²\x0007¯¶GùXùÐÏ¦¾õ=uyFOsËÔ³ïm[K·XÝ¶úr1Æº-·ã\x0004é@k,Ýmfzoð¸¹_\x0008ßm\x0017-æ³[#\x0018¤\x0016\x0017ºo\x0018\x0001ñ:+á2_\x001f!ÃÔaoí\x0013ðÕß\x0003=ó
 *Ñ´D\x0005yßDp\Y\x0010?¾»\x0008°à8o}1G/\x001a²&¯Æ»FîwsâVsÔ*i ê¡u\x0004Ncí¹iÊ»ýê"ò7½«©4ÂE¼\x000b9¶ÍEÅÅï¡Ñ¡Ú²Ým#Î](	ö\x0018\x001d¹SÛVhmmXáÔÂC\x0016«Üà!\x0017j>ÏÜuj`?,>0EbÝ5xÙÒ\x0012\x0005óåJ
\x0014\x0019R\x0000Þè\x0016}+®ô\x001a¬\x0003xz\x0018
DËÔ\x001a
SÙÜtïOÌ\x0017û\x0010ß\x000cÏà°îÝt4T¼ÈUÃÓÆ"lf;ÐD} ¸x2VÆÀ(¸7\x0013ìË\x000eÌ(\x0014_÷øB@s»ù\x0016}Ü,ºP~[\x0012x\x0006¢Tjeq\x0003¬UKó\x001dý·ý=àÂ?_ÝÉFItK¹ø'HØW2ÝÈ$&*;ù¶ÄçüYSá3"UÐx]0]ÓÓíg¼E..;ËL<Ó¡\x0004ê3óh5\x001eÈw5:8Îc\x000còæPÝ²·¨NæÜÖU&VêÉ¢Tf\x0016½ÐÎ/ë'\x0016Ñ\x0011\x0019ùIõõé[nEºXYÏÉHwi\x0017oQÃÿ\x0015j Ã×ÜFÄP0äÊaàeÇh/ Õ):#DwQÂ>êsLt­\x000edÊsóPu:G7Rû±j\x0003Ë×E\R÷\x001fW <±k[PO¦\x000b³:DÉéª\x0001ÖÁÎr\x000eÈ\x0002EYÐe\x0007\x0013Vx¾ÆÌ\x0002±.iÂË~H\x00178ËÊ-mèÚT#ähD\x0000O2eTjûÃyG\x0019ÉçCUeþíR¨³¦IùáW\x001flGuVÑ1!)n²Rk}VZ`]Îi\x001a¦\x0018*ª17ò4pcÊw%åÌ(ÿ\x0019Îx`=¹\x001dB\x001e,¤Éh%U\x0007v/¶.Ù\x0008Øn\x0016Ñ=Æ<ðûöÄÓ9KÏìSåÄUM\x0003Qmj-(k¨^QàD\x0002sâj¬a£!°snuÍð\x0011Q9QÛçÜDÓ«B\x0002\x0011ÙÜÅÚfß5=+7 EÎ\x001eÃÓ0å°\x0010ÿ{OÏ6µHMÏùuAýn®\x000c¸\x0014åä®\x0014'¼c1.!³1"8s§­x<Ô:«æì àR\x0000,\áWöâ.c=³\x001b\x0017÷:ïñ»B±~ÁiE¡Yl\x000f·Ôñ¢\x000e÷LþMZÒûÜYR8¡À\x0010\x0018ïQX½pÔÌ'l2\x0014ñØp\x0000±p)ïr­êM¸ÈÜåÃO|ús¼d#PKÅÕ¡o'ÞÄ"]ÉúÓ¯tLNÿù:3RüMÜ(IWBKyv¡J×bû\Ò\x001b²~Õm\x0013\x0005
C5ç#E@<}JõWÞO
k§h¢;\x001f£T%ãZ	M¢÷ì\x000bÇF½N\x001dÛÂ´¯âa.Ò!¥jÓvÄªz;!;ÚìYd:»jÖ\x0015õ®[\x0017d\x0003K\x000cëén\x0001¨ðd(\x0013ès\x0008âvÀ¦}\x0008+vãËç¸ÈÖózª¨¤g\x000cÄÎ!j(|·JÙ$µú:"³$\x0007\x001a÷&ý
îÖ\¼á`\x0007 	\x0000Ôqï,0Da\x000cR;SõÊrn¹Èâ<×¹Ë©M¼æ9X¨\x001cÔÁ\h\x0013À%÷B\x0010o¿·-òÃ\x001bê\x0010gÎm¶òù¶6Ëæ±¡[VÍ³Gè
Ée¸p»¥­|$.P[D\x0007¦\x0016uy\x0005þ-·ø¤ï÷9],Ã¨õþ`!|\x0018ë®±¤%«\x000e^S6ÇÎWa"É,Ê7\x0000&2­Îp>¸\x0004Ýï¥×£\x0012\x0019#3\x0017;v*\x001cR#Ñ\x0010±ºhj­í\x0003ZK\x0015<Lã5=.í­Ú\x001fÚ
\x001fzý\x0018o¹]®\x0006y·õÜ\x001dâJJ.\x000fZ.Ã6j$µ,½ô¹¦ª4*\x0002Êè\x000ft2êàÕöèâÃ&CmÁ`Ù\x0000íCëNx\x001a$¾èmÛËÇ`v\x0002Ét ×¼òª|7bäí	?MGU¿F»Ht/ìª\x0005÷®@½ÎÌè\x001c{2v´ö·(LMÈ>î\x0019\x000fpp°í¤ãB¸¯×gJ|A\x000bô\x000fµÕârß¦¶\x0003,¿1E0Ñèkëc¢èýRÏÄÂâÐìÒâµSzgúðC4×µîÕÐWë¹9´ò%¦Z·Y\x0007¥8?øº\x0013\x0016yý\x0017\x001eu~c×Î,ÒG\x0013ùè·8çjâ°û8âp¦æHNKªÏ#ÐeØ¥`xEoóæ\x000e~X·`§\x0003Ié[\x0013®Òo}þøsGö¡@kªéTÄÓ2ÚSÿ\x0011ÎÛM5)óz\x0010±ÑüÖÜèÄÕrD\x0007Ä\x0012\x000bä`\x001e(.÷=·b\x000fàY5jðeª\x001eÄKÙsQ×s4÷U\x0005)CÉN\x001bê[ÆºìÅ/öÇ\x0013*OÔô
ol½½ÎÊØ+s_p³ªÅ9\x0015¦¥
´hmo¢}·v
Â
0\x0017Þ.ã¶}OÛ.ä\x0010Ñò%\x001eàX{pôçy³ôß\x001dµ;°­\x0012ÑeÔ%Eÿû¯j0©Ü]ÆÁÙe\x0010U\x0011"©¨ÌÓdT\x001b¢ÔõD!©Â&ÈÚÕc W{zz\x000c¢ÚR 9`Ö¥[\x0008Í×\x0019Ãüî»Å ª\x0012UÙd AQk7\x0019Dä½c\x000cmôKé\x0011~jU­@6\x0019\x0007\x001d2<8\x000cíTã4\x0019\x0014\x001bWA«ÜNAóKi×\x0013\x0004\x001fO\x00147÷±îq*¿z\x000c9-Âl2äS÷ÓdÈáÓN¡ØT»Û\x000c×q·\x0019Ä¥6CÅÕf\x0010öèwÁ\x000f-Æi3\x0008m]m®\x00126\x001fñüË6nq·\x0019
¥í6 AªÍ8à´\x0019w>6ãÌ8m\x0006qì&CÿÕr°ÉÐ)\x001ej'\x001e5¶¤ON!ýdWK\x001d9\x000eÜ×)|jè/å1æ\x000c
\x000czQ^Ìý7\x0013\x001fJJ¿\x0001Ûñ¤(A\x0006WtÉ\x0015
~]1b'é\x001e2×êÐûKX½~\x000b¦zn\x001da¡-"-òË^Îr3¦\x001d0O\x0019Bc¾¦R(<ÑÍÑy\x001aý\x0002©áQw±¯ ¼sJÀ\x0018Û&\x0008UZp\x0013p«ô)\x0013	Í²(ûJÁõ|[qD¢UIU({ùe¥m@©s±×7Z¦}`\x001cÏêQ(Û%Hn3F\x001bâæANk£ÉßLûBq\x0003q'n{î*N_Ee\x0004ªO×\x0014}Ô9N1?z÷ª#¦\x001d}{ª
¯\x0019ýT"Ú·Î\x001af\x000cZ\x001dõÈÈ\x000eÊÊ
Næ\x0008ÔõæÊ\x001d¨¨Sz¯q¦òà\x0014îøÞÇ*ñ»\x001b]I\x0012û0Ý\x0016p"C\x001fÙÊ:*ôp	µ\x0013prRIÐ3¥XÆº D\x0010TMÀg¦|êÍ`MMüÐ¦%×ðî\x00123\x0014ü×ö §¿³N±cV¦ØX\x0004Êháâq`Â?ú¡¹\x001a¦d¿Î¦Ò\x0015::KR-s»ËsWëöW÷Ð¦V\x000b¸ÛßZÛ8WæHMjü]K\x0016¼u®å®s\x000cu¡öïJZÍ5GÖGµÕmGªÉ\x0001Ù`fì6,¤@m©ÉàR[¡\x0018Fq\x0004Ìù¥!$~`ä§\x001f\x0008»~R\x00190Lç<ã*íüsÎÿÄ.À?gÿ'FÉóå]	ù\x0001ïî®^ñïmÞÿÙRê\x000b3Ø¸ËP`kf\x00146,këiî³\x0012Ëíâ\x0000»3&\x000f=\x001fµbkÐBÅ§ ¶gÉSÍ!¦\x001a&\inøÄK-×.ub\x0003L\x001dcSYLÎ\x000fÝÁTl\x0002Ø\x0004>Þðñ\x001fðø2vâ\x001dZ%L>àÝÍY¢ü\x000bßË¼ÿ\x0013È\x0004Þ!\x001cÏ\x000cà;.n>q\x0001\x000c£¸Ôº=í¸à!A5\x0005¨å3´\x0010®Ü^a\x0018¼¢ÒXÖÑ\x0019\x0011ü
×fð\x0010\x0016UU9¢©{\x001b%^K`d#wstú¨ÆìNQªB¬iîÏ*øQÊ=´rÄá%«\x0016­òP\x0018\x0000UG'\x0005\x0008u¬÷¦%YÁ¶B'*NÅ°ÂÊ\x0016o\x0002³^ ¥VÔn\x001fÞ»dÇ\x0001b\x000e§\x0008Q÷jfY9¿Phá\x0019÷ý%KS;ç²Æ­½w­½Ú'¹Òøg¸Íôý¶¬\x0004aõ\x00124u\x000bu0=±5wí¿¾]Ó·\x0017Y^Ûuò7K|¤H!vÙÏ.Þ\x0011½[Ü#¶{=\x0002¿¿¼¸§7&~\x0018±>Ú^[+êoßÛ\x001f·½D¯7ø=³Øf ÜëÄ\x000f¶ 8Ú\x0017o\x0014¡	¿»\x000fbIA7«¿nÊûqì¢0Ö"¸ªùP\x000c4j\x000cÆ,Ï!¥Ëµ\x0001<õ<zZ¦Ö\x0003ÝOãØ»ýhèíyÞeN¨÷[Ì õy\x001d½\x0010J
¼L¦w×\x0008\x001b;¡2i9u1\x0005MvºnÌálH!;÷©P0ãªÁv&\x001bKsY\x0014Æ²ÅVÏÍÙEÊz\x000bAÝ3Qxè®>Ò©ú0»\x000f
ÏSpyQ5%\x00108,­Ìo¼£;dT4ÔÄãvVl{¬\x0016Òná9¦\x0002÷.MG\x00151h?\x0007&)¡7nÊú©c\x0003 \x001aª«®\x001fÇÙò&\x000e`Ëåd\x0006`v_Äi-ëºëÝÒm
ð¼\x000fG[]ó\1n]³6¢ÑÞK|ÞâZæ'dcjàªf¿ÄEêZ5ÛÕ\x0018©ÜïéOBÎ¬\x0013j.MîbWK®2m·¹ÆªLËJ¿E\x0007}«ÕwQ\x001a\x0016%ª\x0015ÁVíþ²µ±\x001fz~pãÛÁ}wÂ\x000e\x000bÇóË^þ-¼8ÉÆ\x00054zÿ,HJ­+\x000bñC
\x0011Kï\x0000æqAG"[EL»´×zM.\x0007Y(M!Wv\x0014ÍÆ<m\x000cxÏ2=iØèdxàâ\x0015_FásaKéa\x0004o©Ô\x000e}ÏbgX|¸\x001b\x000fÚ«|­\x0005Ï\x0010H.±qt±Í\x001bÙ!Ak\x0019k\x0017\x0017\x0019Å½2+É²nê\x0010	
\x0019£%QkÔ\x0011
)B=cÖ\x0019÷°³2Y«ã¶È\x0008Û·\x0000\x0001\x001c¥ßµòÕÜóH¶°ºÙy£I³Ú\x0001ÕF:ÔptÒ^Ê`îE{\x001aW3\x0002ê¨±\x0003\x00035¿zØËa®öDjYjM\x0001nüRÔ\x0011	¾§À¦¤ó±INó^^JÎ=õ×¶}¿\©#Ã
¿\x00079_Ø]õX·?Ã\x0008§e\x0002Êû°=ÏÃ·ÏÆs×F?Í>\x001aq¦e\x000f-\x0007ÛFÖ|ÇÉ¶y\x0004¶ô\x000f\x0010ndîY!\x000fö|b&\x001axñ\x0015\x0003õ¥3QV\x0007Z^³Î\x0002jCó\x0019>'¢>Gô­>;\x001aRcÇb`\x001e¸gKZ^\x0019õüu
¤ß¯Ü7j#w®¿ÐètãÐjJk[Ó94)£\x001eßo<äZ²a¨5~â[ÄâýÀ¾þÀ]>R-OSÃ=®GíØ¯b­ßt_*·\x0018àýÏY|8ð;{­\x0017k\x0015;g\x0011ã\x001f-®"\x001aä\x0017(eï$¾xè±TÆ³ªÄï\x0019:ü"Üñ©\x000c¼Vó¹\x00028T¿f{´X\x0015´¬´«ÂÒ½wà\x0011jÖBÈhÄ'\x0011FÃs¯9¯øY\x0017JLj÷\x000ed«î*\x0005¢ÉÛ*}\x000fS-¾\x00060$¾¨÷ø\8JÖ\x0018z\x0011Ú0N²vP\x001f\x0004ìC\x0015Ïöæ$^¶ôÈÆN[åãXþ.«ñô<×]n±ô'cä¶©\x0000µÜÃÇµ*AkròXnÂ\x0011\x001d¹Î\x000c¬ºÉÚ?º+DRË¾Êb:ËÐ¡ÞGøì\x0010\x000fêzwT!¬\x000eRè«ÈWüP,>¼g»yd8:5ê#ÔÔøkÄ±HO\x000bð¤¡q\x00122¢ÿ|í\x001d(îE²Ã!ò ëûªFÐ×pÂT%lÊqq×èùpLYKtÚæº^9ÒÕRG:\x000fd÷!\x0007#G¼u¾\x0017©÷wÔíuê@i*çÎ\x0011öÙ\x001e²âe,"¤ñAý!âgN8Üá4£ü#\x001bØ?&æ\x001enA\x0011êÚö£e¦¡×ÀVo_'86û¥~à >\x0010Ó*¨\x000fÔz=Ô\x0007,õmVÉ >PÏõR\x001f8«&ú³è_Ó{\x0016I¿Mý	\x0016äÝ\x0004&{ÐØÔ\x001cÎÚå>pÑVs\x001fN\x0003¹ÿèÍ7\x00028\x0004÷Q[)/ûFûÆûÏâ>.Í-¿¸O«pææ>L®óvôÉBüîèÓå¬S%öÃ}ú­ç\x0017÷éÖ4\x000e÷éóÞ\x000eùgÛ3K°²y_ò\x0003¶:6ù'µäsÈ?ëV\x000fAþÉ8\x001fî\x0003uKm\x000f¹\w Vw\x001d&ÏrÈ?³\x001aÐ!?¼ô¬ºÉ?S\x0014¥qÁ!ÿIÉCþØqÈOLoü<ZªÈ?Ã5OÄêÎ"\x001bÍª´9¿\x001a\x0004sO
£ÆI+õMðHÓÃþY¤6îj¿\x001f"½WM¡_ç8Ö0Ð\x0006ÕÝ\Ã\ìZý\x0011°`?Q{¢ôçêÙ©Ê/\x0013Ã\x000bkjæ¬\x00044=±*>è\x001aE\x0001°.\x0000nÕ¸Ñw@¥ÉS"\x0010u\x0011÷¢³8¤q\x0010\x0007N ªéS·RCÒ¦êÍ©?Î©þ}îíñÃê^××\x0010¢çhÝ4c³t9+Dû\x0015VHy\x001e\x0003ú[iÇ:ß+¢\x001dogsïVEuÕ_Û¢\x001d#\x001af.9\x0017nSQxª×³Ûæ¤\x0002¾p?óü 1~¿Výù3ý÷ë?_ÿû\x0005zà\x000ftkEO¦ìÃäýÜñûK¿¿ÄäÆÀåa¦NîC\x0014j4v!«2ÏÙ+oM\x0017¹×

¥?*7ö,?Oø\x0019!Aú§\x0019\x0000\x001bÉ½r×Æ\x0014`=(r	§\x001f:ö»ªºàj\x000cßd\x000bOLt5JÕd
OóFÂ¬\x0019ñçë\x0003iùß\x00107\x0012<vÿ\x000bW=T¸#¯¿ÿOvµ$Wã°½OQ\x0017è
QÔ÷\x0018}½¹ÿ¢\x0001PTfÛQ\x0011åÄRIñ\x0003dÏÍ?ìC8¤\x000cýhL&\x0011¦/\x0017xñ/*
§ý.3k­Ù{7J9JR­Vô\x0004"fZ¸è 9þËÕp-Ïô;¿ÒjDA¡
-òÈ´×jÍ`ò.3¶2Î¼j9J®Å
Q¿r¿BÉßeaSRX?\x0006ö\x0004&U­!\x0001·©ËÑ¹Uù§kð-z
·ù"®ñÅ\x001e\x0015Ò÷LÇã\x000bÆ\x0016\x0012HîcßU\x001c1<ÞÔN\x0011íª\x0005¡s/^)5³\x0007v¿(mN\x000c?Í0eD9Õ\x0019çè\x0018äHÀÎFÔãlµG¦Ü±õæ_\ä¬Å\x001dÚÁq\x0000\x000f<þ_QFÕÔþf9ÿ kçÁøÔ¹+Ð´{ìñë\x000fT;\x0015õ\x0005\x0014uIä§?²\x0014xU\x0015og»pÉ9\x0018Ë¢z)$;¼À+Ï©"uüFJï.È­ßaøä\x0005\x001bõ\x0001òìx­\x0002\x0003üUÃ*\x001dEÙÊÖ¨»Ä\x0008û4wÍ®ò¯ì¢{ïã{
ý\x001b\x00158¥ø]\x0018K4\x000c.g¨"Úo½<Ü¡t­1TteGß>=]£(ÝÃkwxNðIq\v?~ÇàÏ±Wôh@ì¯i3Î\x000fOÒ9AÝ¼M57£rî3]wÏMÐúPÈô	øl\x001e©" Y{Z²UiÉl
´°7Âéx¦¤`6ð\x0013N!\x0002gLd®$\x0015®éQ\x000e\x0012GT»nS\x0003HQ¦¡î\x0011Z\x0010»\x0006¾×x*fÈÄß\x000eÈ\x0004?\x0010ùÝ¸qy\x0002^<¼EuKÕMéWÖ­qþè\x0001vãÆ»ëëª\x001eËØðÞ+\x0019\x0014ª¼¬^7¢&4\x001aî¹3\x0004Ùt\x001e//\x000f:Ý\x000c5q\x0012G#FQ¦tõ\x0002î\b\x0014vOâáb./:×·^mSqµ ·.
±b¢¦­X\x0006ñU\x0002wK hÎpirå!±--(a/9m6µ×Õü÷\x0001Ð6Ò#O¦\x0012S3ß
Â\x0017à0%ë¨ô8-¤\x0018á$\x0018¢½(È ­$\x001e4eJó!\x001a°±\x001e2¤õ=È¥ãw&\x001cÓ{gú¢»0#ÿpÍ\x001d\x001a\x0004\x0000ÿÕ¦OT¹¶©H*bÌøùË,E!FÂ8C\x000f\x0019¯DM­\x0003]\x000cÝÞã²Î»\x001fÌ!\x0008Ê\x001a.jÑ\x000e&AÕàWTµi²\x000f-TÎ5§äli./àÞcäÚb½q¬Àî©*+'!\x0000\x0019\x0015\x0014\x000ex\x001e@ç\x0019H\x000fÏ%$<C\x0015\x0019Ïk$¡j>¶ÚºäÁY\x0003\x001fªÆI°ÆTÇø'`²¼¹\x0008ý\x001b¼4vÿÀEyúÆ,' \x0016´Á#aÄÔT¡Þ\x0008¸}j®[4¾î¤r©¦\x0010¼Îí\x0014¸²m­±ÍáþJ¼\x0011\x001b¡ùØ;ß\x001d\x0000Ë\x0008¦\x0003ÀítvEÛ§%\x0001¨zAyJ%±\x0006Q(\x0007
R #;xïA¼·ö
_¿ &Æüa\x001cèåá\x0003\x0000\x000bÚ¤>cté0õz@Wf8sb+vFr éC\x0002
p\x000fq7¤aí)_\x0000zk×¡H×RÒ¡ÌÝ®0\x000c>\x000fS¶\x001cy
m\x0017`o\x0019\Ç\x001bÅõ\x0013_5pê*1*
á
àqÜôKÐÚiæ\x0000\x000b\x0017	ÉMûÕ^\x0000ç`C7|¨27Û¾öq,Ã³ä
`\x0007Á4Å\x0014 á\x000f<ó:\x0001´Ñ¼k¦ã\x0010f>Ã+\x0000ùÝbìòFÇ¸j«©ý\x0003,@Ià\x000eì°X£¾Z¯gªºØF4ðû
\x0005Ë9uæ±¢\x0016ò_Ç\x0008WB\x001c\x0003cHFÍdM~©:ÃjÞWÏáx)<ö¼0öû¨9÷óÕ_\x0006ì2\x001eã\x0000¯Ýx^3oà\öB4HI\x0011ÿJ\x0003m\b7²
5/¥o×7ÿÿ\x000f·Pÿ)ª\x0012¨rN¢)ª¬z5Û\x0011ÔTN²HMåLîGS9uè:ª¢L®¼\x0003x´\x001e\x000cE­ÕU\x0000¾RW\x0001pDMaUÁëk²Âs÷£¬ðì\x001aB[\x0001âªÔ\x001c©®êPr¤¼ªCª÷è+ 1®ÀJ
+qH,¾9[j,~cõGdÑ=Re\x0001µ@Y@k½t\x0016®X§§Ð+®¸j{M²=Ü\x0012Ã¿æWk9\x0005­=Z©µ\x0018³uµ\x0016[ö#¶<ñ\x0015[\x001eó-FÕ¯ØâGËzÄ\x0016LZóª-EùÊ-?_z³+¸xñ5SqÁ-;\x0004_H.à±®æ`\x001fÍu@j®'SsÝ
¡¹\x0008û\x0015]õJ0¤	0õ
cSSx1÷,\x0017\x001dWz\x0001õr´\x0017/µRcÄNõ\x0005è\x0012ZgmÌ\x0014`"õ\x0019Á©ÀèïQ\x0002cTßÂP¡ñT`~õ\x0018\x0015\x0018Ñso*0ïgäY\x0016°×\x0000µìfÙ1i\x0016\x0004fvÆÙöûÌkÏU>æÙ\x0003SÍ8Ò¥·ïðv©³û\x0007Î¡öÁjâ\x001akiÄ~æZònËÁ¶©.ÏdÛ46\¿r¦Ü9Ûb\x000e\x0015\x0011ð{\x0000ã5ÞÒQ=»¶\x000fy\x0006\\x0000[ë¸.\x0015Í!\x0017 E\x0014é¨!ï1×!YV*ÚO¾¶%üXã|­Õ'\x000cOð\x001eÕDU±Á¼/bQ"Sc`*Û\x0018Êk«lmîx×¢È
\x0004*QÄ\x0014\\x000eýÒG"ì]1pÜÕaBTÅ@-æ¢ºZìM\x0002`\x0012¬,j\x0012Àæ8ç\x001eL®Ë78#ÏEhÛÙ;b:t$ZüxÌ\x0015µk[¹¯ÁA>_ÂãùäÖìæ\t½x49w\x00141Pw9÷\x0015?\x001fÿýøûã¿"øg¿\x0006óÀ@[{V¶>üëKú_:©Ëq\x0003v\x0005÷(þC©\x0016\x0003ÎCvhbjH\x0015ô\x0015<ü©ó\x0000l¬è>óY£$\x0005ñ¶´©#\x0018{%\x0008Î_Á¾}ðcÓ§Ê\t}`|åó\x0003n\x001aÈ¤oðlúÌÝ?0èªÙó\x001en\x000cRÔ\x0011\x001eù_k|ÖÔáë¦©±­\x0005¥[g]9\x001b+¸Ì\x0014'1ãIîª\x001fm³\x0018\x0013@Érk¡\x0000(³Èg£9©tÖ}¢Ì=Xã]Gu´	=E©Ä\x0019a^Ý\x0014Wãå¢ò<oõJjô\x001d\¦\x001dôy\x0010ÚY¡§c§k\x0016ã\x0003iB\x001dÝõ&ñÍa\x0003ü3)\x0007ÚâÐ \x0013;Ó\x00174%ñ¾@1]Zê²óYÚ}i\x0014\x0004¿H®Ó\x0005£aÃãØõ<sS_ÏJãI\x001bvâQª}õØä&T*Vª®æx2	ö!÷\x0000¡¢ÜçÂÚëÙ[]B\x0015{ó
\x0003QäY¥míª\x0012³\x000bütù0*¿kSÛÒÂ´©¯ôi\/å\x0003½\x0012+Ïþ½ï9p¦T:¿0\x0006õå¡*N\x0006U@Ø:¤^â\x000eù\x001c·K\x00040$Æð´¬ú)¼\x001fÚÜ .Øä<A\x000b¡z\x0006\x001aÒ¥>DpÉ(ÐR\x0008Q\x0000¨À5\x000c_\x0017£þ5×Ôc\x001aE­*ìú¬\x001dÀÖY?V\x0008J¡\x001a7ØÉbÜª\x001dÀ¾u"\x0019ÖÝãCWÞO\x0017·mé\x0018ÁgëëRT ¤$ô=¿¡[q±õ;Lv
\x0018äÄVy¨	_L	f|
*Ahà
ö1vø¼ÄÈZ®àÍ¹\x000e/ñº:L¼d±A´D¯h\x001biÉLò!i	pÙ<´DoJf\x0008$\x0004àö\x0012\x0002!#\x0012!s\x001cpi)qº\x0002x·ý\x0013\x0017uÑ£ÈÄ.RÔø\x0013ÞBÛ*]j©Ì\x00104C\x0017Õºrgtõ7±t~\x001d.n±CÞ`\x001dëH²R:\x0012YêáúAÐDðEÝé\x001cz\x000cu\x0001°¢ËÌ\x000b\x001f|/ªyqrE'CMÃ«$ñ!öUÊ\x001fIVêý*&5Í\x001dÐî(\x0007eåâ¸ÇbPº"\x0019ÜYkIñ£+Ca0À\x0018Yy\x0000>Ê«¦â<k¸Z\x0011à@CñÊóE@¦&¸Ù19'¨ðPH\x0000S\x0017¾\x000c¥a\x000b¶ïð/hÍÊîìþéÉò\x0014}S\x0016QðKýÈXÛ¡Dp¡6\x001a]«½ë¤ù\x000fÙUd×®Ãr¯¢7ð«4P´\x001e'?°÷>\x0000¤¤Ûí¤ë¢5\x001cq\x0006z\x0018\x0016¼i®Ü\x001b\x001cu5y¤\x0006¤¸
÷\x0004{èº»F§\x0012v\x001cÎ;Ãå\x0011
~¿~eøÔuHú¡Á\x0011´]_\x0019|\x0012ö\x0001ÐÖ­¢ÚøPj°\x001aþ1LÄæ±7qC:çI\x0012>ûúoz+ÓD\x000e[þ\x0012×xÂZÊ$X\x0002Ý\x0013Î*Çw^æ]-êÌ<É~Î\x0008Åµ\x000c$\x0016$P,è\x000c.yÒºè<þa\x0006C'ÙV¬ä­l8ìOz@SGl8È×¨>±ñÒÌÄ´"VÂ>\x001eQ¥Ðø\x0018\x0003òz¡ã2l3ÞP\x001fHï\x0006Äë!Ûâ¡}÷&vn%\x001d;\x0017}»Å´\x0016;Ae\x0003Ãz\x0008´F£]¹¾°vøwH£7²Ã9·f]²+O¡Cíön\x0004ù\x0010Á×ô\x0003]iL\x0001IÖ$IÅF\x000eþ"A\x0003P\x000c¨'\x0004ï¡tCbø:\x0016·\x0000-ç-s´¼5ÔâÖ"±õPÊ^ zS[U<$ázªG\x001emVO\x0018E¶\x001e	èRU,´&û)Y¡á¨[½tâ­^º×î±ðý»\x0014úÍï\x00171wzbæUk#òoÇE°E\x0008´µÊi\x0005´ºdÂ$\x0004á\x001f]»Ö>®Kpýz±¼Î{4V#On>É¨ÝuË®\x001dKEËç°VV(hF@cÈ\x0010 mSnßÌ\x0019\x0012$+¾û(ó)[1¼ìû\x001dD¿¦Ïïµ~a|\x0003\x0015ø¢q\x0007j\x0012Dk¯ô\x000e$~6Äî©ìTK¬I\x0007\x000b'\ÞZÄ^õ\x0000~\x0012\x001e2­5µ\x0019åaj${{laÕ"[§Ì\x000bëOë còÿKQÎ\x0003áÎ{\x0019}Í>R´´Ô`Aæ\x0015¡)\x001ac\x0019°­FÂQ``×¤j\x000fÝ,\x0010&]Ó=[\x0012Ñ[ÿú\x001e÷ß¿ºäD\x0017øû«C\x0019ÜA\x000e0öÂ\x0000"3Jmkz\x000e)õ£z\x001d\x0015\x000bàEþ(¹ðÌîÎþ.£É½ÿà"¶{qä3ÜhÈ>¾ ÄÄÈ..-v<¼Ì\x0015Ô4­êàÌÎÎÁ*ë\=Ã\x0008§HkD\x001c{\x0008¡³bd+pû$\x0008¢ß{îcEW\x001a`inT<¨£Áõ\x0017q@×\x001c¡¾ùCØËÑ7<×Èø\x0016\x001cÛ¢Ì,&\x0002\x0004k\x001dw\x0011ÿ!.~×ûDêF3DN>TE~\x0013Ã(<ùÏ¹ú\x0007$ñÖ\x000bcó\x000fØUÅ.\x001e÷\x0003ÞÍ.áû\x0003Þ\x000fyrÀo0þ\x00133®}>û:QNÜ{\x000b\x0006>ÁÎ¬E*ÜÌ$8Æ¬\x001fôéÈÃ¤
sîA\x00029ëàaN& ºÅ#Ð\x0011\x0000JQr\x0019bvT\x0016Ú'$%Zý ¨ÓT"lYÖEcè\x0008l$:³Ø$Ø	3à(í­å\x0004È3ªY©ÓM\x0001ë\x0003Èo^¶jÐ	Ê\x000e!Ç`\x001b\x001eKqÁ÷£¥i/4\x0000#ñaÝåÆQØô
\x001enüoôñ\x0001¢Å\x001c'\x0014]3bðrªó\x000bno,\x0003ï©V¾§hQôÞ$5V(FKãË\x00169/Wx^ø\x0014àeÀQßÒ\x000ej<!LáøÖvdGF\x000c%CL\x00190\x0017ól\x001e¡]\x001aB[ü\x001f«ª©&i÷¸\x000f½Ý]7× #h\x001b\x000cèi&¹f]¾gz"Ù\x0014á ¸[{KhV"i!;´Jj\x001b\x000eÂípÉt9sxÙËc\x0004eI
Êü@ÅõLÛÀJìÜÁÜe^³Y1ø%ïÚ\x0004ü\x0017¿Â¬\x001eÓâ¤ç6Á\x0007mÉÊ­§ö\x001cXv´ÅÞØñÑR>\x001aÉ¤\x000e çÔ¹Î\x001a"1â\3Ëº=¡t}LÞ6QlðI\x0006u¼÷1,MOo\²ÚdöYoiðox`t
'F\x0014þxôè\x0017@o¢=$\@58ÙVG\x001føÑ"¸\x0012È×å6@\x0016©\x0019Lg \x000ck»«°-¨ýB\x001b\x0002*VÏ\x0013°ô9¸\x001fúÄàìwdðA9\x001e÷\x0003ö%l[{}éT\x000c¸NQ>l#VWh¡qïeC±\x001f\x0003M·ò=EáËÇb»F©,ÑT\x0003?¡%ÕP: $³Ç]!Ç`xåÒ\x001eí»Ø¬\x0019ë\x001eÈ@\x0018»RÑo\x0006©¸c_\x00177T\x0014À\x0018án=¶²Ç¢ö\x0006Õ)[j©q{¥À\x0017\x0015ÕÎìÌ·\x000e\x000b3ö\x0000ô\x0016ûr\x0018-5½ä|¡w9°°D¾e/\x00135{lëBì@³\x001d£¶(ã\x001fÊÆ8l\x0003ZcØÑÉ½D´kÏxÖv$\x0003¿_úMUòøHMuCwÖ²©ÓT\x0019Á©Ìô\x0013QÞ3qt4qè£/©ãRúð,uM329>¨KN((ñA¸Þ\x000eéoôoÄRÝª"\GÙ\x0002µá©l¼|¦²\x001d;úNÈP n;%ê\x0000i^óD\x0010\x0002­<4¦zw®AØëkß\x001b]~\x000ea; \x000cl¦°\x0005 ¯=Â\x0016p¥°\x0005ð\x0008(%ÖCY¥Îx®ö#lF{Âx×£lùÉèúT¶|¯7BñTäT¶@l©3Óª+Be²\x001f*oÜø§n|éÅ#tåßqÉ÷ïNff=_tfÿ\x0011¶__OØzô\x0014¶Î><°%ö\x0015Í.\x0008e\x000b4jº.\x001f·^H{ô·\x0001É¤w\x000e¯OÖ\x0012Ç8§¬¥AD(kêü3¨-S\x0002(\x000bµsú­}4û¾p?P¯ï$XjÛ\x001f÷"\x001cÝ¬\x001d~\x0018.\x00105ÀµÀ#=e-Ñ\x0018)k\x000f¸v1eí9(Y·\x001eY\x000cY¯	YO=ºv4OJ\x0013Wj 4ÿ´zº¦Þ%Û"êz·ÑÙ5-í\x0019Â1QÄBØ\x0002:½\x0017ÂÈÖ\x0011¶\x000f¥Ñ%lup\x001faû=ò¿ÍøpA\x00122\x0008`lÍ3tîÉ\x001e}\x0018²\x000cI¿<\x0018@§8¤½\x0016ãSÃ>×¦(:¹9òÎæ¨jU	¸4ú²\x00007Vµ.g«
Î.@ò`ÜÈ.HEx¯\x0007_]ë}\x001a¤hß5RÜ©K\x0004´©©Ï&¤r¡Þ rëOx%Pîþ\x0007\x0017Q°\x0011\x0016¼\x0012¤\x0014¡ê
\x0012@EüÍÉù\x0006/ã±Í2ð{¾$\x0002Úz9WÀÁ­\x0005\x001b¥íºN\x000c\x000cÈD++ôñ\x001e\x00080ÕØåÆµª¦Öö\x0014@³×\x001aû\x0008G»(<ÔâZ\x0015ä¿\x0012¤É±3¥H¸d*/þÁE÷_Ì¼v&Eâ«(\x0015fôã\x001c<äEñ\x0007\x0008\x0003kW&)\x001bÛ°Ø·å<\x0011\x0012°,:ü¶}\x001d¹4·b\x0001%WÛt$\x000bBaYÚ«*d:À6\x0005s^ðÌN|ÌÌê¹øÿ¿V
òÒ:?UZ\x0000¼"JkáScÖ"UïYZ\x0013iGð\x0002Ô]o~Ï%kS\x00034J\x000b \x0014Fi\x0001\x0016_YZÓuc\x0016À¨~K\x000bÍ?Jkr²ßë]\x0002÷ÓÈÐ~×Pgê,­Iãoe\x0005:4ÑöËú	û´ù'<e\x00150ª
¿wiYUü¼û­ªIUEÅgîL\x0005XÐ^.ÐÓ³ñÛ×Î¢¢ÕºME5Y\x0011-
 j\x001f
 ßGQ\x0001Z[YTôª:\x0000`Û-*@wË¢"Ø;*ÁÍ®¯?f´íø\x0014Uâ(*\x0000o-¹aã\x0014\x0015ÐòE\x001c
\x0003YT\x0000-(¥ªj.Q¨*i+\x001d¶1æu%\x0007Ý5j\x0015\x0012¹WWÌkoYWt&Ë*~_»\x0013\x001e3³n>j¢âãµ?pA»\x0007Zæé­)!º4¦ãb\x000b	aR¹Ö4p\x001cÉ¾P\x0015ÒnKL\x0004Ðb¼q#`\x001a\\x0003ì·\x0010\x0000IûrÍÄß`\x0018ÛÕÞLËuúûÂ8XÈßEgRf,Z6~\x000c\x000fàP\x0002R5\x0001æñªÚØIf¹±.f\x0019é.ASµôñ\x0001\x000b\x001c\x0006Pâ.¢WÐBù\x0005ë>/ê\x0014\x000b
²õÐ¡FÞéMèèw\x0014K²iöÈHä\q\x0014\x0011ÀV(ú¼¢tr\x0015¼vÑKÉ),ê
¶\x0015@*_
$Øº(ò¶ÿÈ®dKn#x\x0015^
xs\x001evî¿P\x001a\x0014Ðógóâ%\\x0003å2«µÖÚlcþ%NUªu\x000cLéÆ6°é£cxköjµ.Åäb÷°0/ïFÈNvC§Ù¦lâIY>oÍç8~ÎÍ*z)â!Æ\x001fJ#ûö[cEöYÁàe`£;Ì$çÄ³\x0000ÄÔ¼6¿"¢íÄÖ"\H\x0014^ÑbpfÆYq\x0006BI¸¶ÁO«à\x0018=¢Ú@\x000f^}Æ\ô~Õf¬Ë'\x0016[q4}L\x0019TiZµë»\x001e½us¹YÊ75óy/ûÝÝÔo/ã¯àföè³øÝ¢º._\x0002¶\x000f_nxeD·\x000bPo{Y-ÙÃvQ\x0011NÂÿ,f·×1÷ØiàËx>)\x001a`ÌvÙíÀà³EáPÂ[¸Îê?p\x0010ÜÁf¸\x001dB\x000c·iày\x0019\x000e°}(Nï8u\x0019ïÍíêF¾^\x001aÚ3}Cq\x0000³¯ 8Z¬¶CqÛm)\x000eÀBÊ\x0014\x0007xÄXÖ\Ë¡\x001b	Ö¸\x0014\x0007Ø{èF\x001dºñ[ê\x0003_ØçZ¿Ñ5eU\x0003&ö/â:f`ì@E(w\x001e¨w5äª²ï`\x0018\x0004Mâ¿qô\x000fÈ?|p¸ú
Võ­äæù\x0013ÞÅ\x0010Õâßàý\x0017ÿ§ÍýbÃ\x001eï}/r©d&éA\x001aæf¹âs/)¹þùØ1,\x0013¨_|Ìºû\x000b\x0018åHa¡X\x0003jºèf¢¶\x0019KcñÃÄÕlÆx\x0003ÊU
\x001aUf\x001aê/
\x0002\x000e5x\x001e\x0001\x0010£Â9HúS9ue{Ì¢¿\x0011 \x0003ÈÊå¤¨Í	\«¦fÃD#Ó¦Ò\x0016¨ìóÒº_?\x0013ùkÿÿ¦+\x001að?\x0007\x001d\x001eèUæ-Ó\x001fdÃFÎ*SpÉÖ½ó¬Ô50ºßU\\x0007ªQ³çÕT$äÊâùåå Î°XðjØóÍ\x000e·¦ýãñ\x0004>¾°£xüW8ñogoøXÑÕÎj\x0000_-¿:>\<ÛÑC¢[K«\x0017F':\x0000Kæ¨\x000c£!I>\x0003eÕ¿b7\x0010»²ßBÓ7\x0011=ç\x0011½¿ôìå\x0001>Luü#Í\x001dÐ&-»¾yøgë%\¦àÙÝ§GÀ´mDº\x000cïC>±^\x0004|O¹\x0003Ê\x0002í&qµ\x0014Kæy\x0016ï¤þ¤\x000cÂ>J:®}ÃÖ:sã02<ìÔÉÙ>¥\x000fiÞm¿2Fxüqß3%ùb³ôàøë­±<7¥\x0001[	\x001e0h\x0000ô\x0011D4öæzTt÷½2YB!³$\x0017	Ý@yìû9ÿçv9ãø2îF<l®Ï±é\x0010S¡\x000c\x0000JY\x0017J|ÍÆÅxÙâ\x0018\x0006	'uX,W@d>ªä4¿0,s\x00062ÕÐT\x00087É
§ë%ÎîTÎËtFøÒ,UWXsbù3|í²,H}çWõ\x0013^î\x001d¬\x0002²Î­\x0002Çv·
Ð²¯
Èêo§}ò9\x0018B²}>\x000c\x000f:úç°Ck²uÀÒýI,ZÈÜ4:aGÌÑ(Z\x000eôa£ùtÀcÑ@×ào@\x000e!,UÞòÞ\x001bx\x000e¦Q\x0014¶;°r
IOªÓ³«.J
AH}K\x001eUKG#í!l
&Ò«	2éøÔÌ'½iÊßÏæ¬VàsxÒÚ7çÌAê* \ãÕ£Éj};\x0014H.\x000bôt\x0007ÄÅ±9`ÏÑ¥\x0016©1{óäRñ{ÞK#®ö8/4M\x0016EMhr¹9ÖR\x0004Ø÷xs»÷»Íf~Ò\x000bêXgûÐu\\x001düI¥y\x001cJ:Q\x0008g\x0016¤HýÀ0Ã\x0019 RõaKEÆû\x0011\x001cX]²º&<¥8¨.é\x001f¬¢^¾\x0003E=\x0017ar#×X®3+ü=q[¤©vrh:G@y¡\x0001ß`:l\x0017óìcÝB²W\x0003\x001cÙ;<X ¿½4]ÊvyÈ\x0017÷êò3yH"ÿÄ´úÏ\x0000MBÆ\x0015¯,ªÝ\x000fïç6\x0010\x0015Y×[òâ@¡ÖIÛpzËÞqùjQÊ\x0008âS[¹¥i}Êí²ÊÝ"\x0013I¡)ØÎAåØ|ZÓöêém)D6ÿ,²²\x000b×\x001b°äøjàÒ\x0015Ef_ÂDRþ.\x0017<sÒr5«=¼ohe\x0014F\x00069\x0010%ÑbK±øE_e=ü\x0001?7õò?\x0007ü¤7p*%ÑÚâÿ%D\x0015Ô@øã5svÁôºö"''²TiRÜÔ\x0015å¬Ýbì:ôþ<N?IÐZ½%
A°ÔáT
\x001aU\x0012§Zª\x0003gÍ@*Ë5ÆP\x001bû\x0002Ê(G¬\x000e½\x0013Ñ¦N\x0002(}}¼ó|­µÃ?RÌ½_ß\x00045G8jªPkD«ÅîâKRPVaÊ\x00149@#ÙÓÊ\x0008`EÒRí\x0019\x0002ª\x0017q)	£ßY¤¸¼¾õ¿Èò{ËòÿX©)f\x001dh% ®pª»µu³ÒroöÒÔXò[óRÊ\x0008JÅ\x00046#RG\x001aÛ¿èØ\x0018ÀçÈ-Ü»2,þ;Ó£hjVb\x0019£@â_U\x0016Æ¶­¨î%lÑ;T>M¦	\x0011CÃµþ4À»Õ;\x0010n§¹]vÈ°8r@¹Ó¡ô¦3YËXÆñ|É.·å8;U+þ¢0Ãþ¹TbÇðù½»ä5¼xw>\x001fs\x0019J}ú?»7dzñ\x001d«\x0004<\x0011àþÎóøæÖvvDä-\x0013÷\x0011a°¬,
kÿ\x0003ê+FàiäoÐ{@5-Ö0Ð\x0006Ym\RñÓùTXµ:Xva¥ \x0008ó]ScU¡NW\x0016Uáxm\x0002u ^+X)"ùH\x0005¯:\x0004Fö%\x0019äÍ®­¶mnåÕ\x001fÚzûvÃlÊQ/e¾¿ËÒg]O)e\x001dæ+½V\x0004+\x001büC«´$1õ@\x0005×Èî\x0003±Ê\x0008L\x001f\x0016­d½O®\x000bûë§$ãÞ¾5ºÁÎ¹ß\x001dü&b\x0018W@ðü\x0012\x0006áâ\x0019L>*DÃ5r^\x0003]&#®\x000c-×4\x0006 ¾xêZó,íkwöA
®\x0005ªM¨öu×²Ê½Y\x0016av¤S(¡p6µ\x000b\Ë´\x0016fA&J\Ë¬\x0015-jR\x0014^ÊEÎ\x001a¢9yÝö\x001bªÎ½\x000b#ðî=?ç¦¶ã
ø(ÌØ=Ë\x000bÑë^V\x000cñ1´cù+\x001e
ÄúyÌ`äµM{c}ÄÛ9tÎ;w¢ô¼¯®<ï ¶ß}«ÚÖx
WÕûÒ@aÀÍ\x001fÝ
\x0006ª£ßãæ\aEl²ZS-væÿÅ4Äå\x0011¸2ãlF¬rà_
Úb\x0000Á­Xñ?-nÏ\x0000ò\x0015éÿïýÀOL\x0002Tõ<ëb¿É8#+â·\x001eåºï?ðû×ÿÄ§»úm@t	x[\x0005ÛVkÇJá÷M+ÃÁéyU'Y¬Mþÿ|Í{eco*eOj¼\x0001I
@q®\x0006@^ù)\x000e;¶\x000b¿Ý]ÍQ\x001a@.F7µ\x001e©\x0001ÔÛ\x0015\x0013Åº?©ÑqÆ¼ÚµS~­\x0010\x001b@9ÄFG5¬#Ä\x0006:?\x0019\x000f@ªöH
À$_Hk´Ú=Ck\x0000Í5Ö\x0000f{t´\x0006ÛVÅÜþÑÕÆÀÑ\x001a<«ô«5\x0000w\x001d\x001f­Ño{&­Á+·qµ\x0006 ÓõiÅ]¡5d\x0015j¢ÛFWk\x0000u»^%Ck\x00006k£5è±r¥F§\x0010ßWjÐó}¤\x0006W3\x0017¯Ôè¾cH
ÀbåA:ä·c{>W[G=Pl(\x0002ö\x0015\x0013\x000c?bï\x001cãÍÃ
u^±ÑÄè\x0013\x001b\x0018\x00186\x0012\x001bÐ\x001a\x0017\x001d©\x00111þ\x001agI(
ÀV(
¢±BjðS£<öf\x0004Î\x001dR7S§!©Ákç§4\x0000[_!5\x001cº\x0012\x0013'	®Ô\x0000®ý39Ê
©AS®§4`ê\ËQ\x001aÌ»\BiÐåå{Wº¬Ò \x000eÒ\x0000\x001a,=Oitô´y½\x0012¸)Kjýô}þg}ZJÀ.3¨¥\x0004ª5:Jì~+ÅRâ«O:Ûªþ\x0007~òäløsàögàô@EÚP=¥î²_O	Üz²Oåòé)ù(Êké%~tO	Pö<}#@ëö´\Êonÿì*Çìa¹OÑ\x0017°öå<óõ$¾`\x0000$%uMVTú\x0014W`ÍÐ\x001dt­®«)ES	³]JS\x00021$GSd\x001384%ö+J ºë\x0013\x001b<þ\x0017´¯pÂO£p\x0003oëÛñ÷Á0¹eÇCA#+'ªâºdÙD\x000cNÑTâÝÃíÈ´\x001d¨÷ÓÜò~ûèòTìB¿l¢Ä±<È\x001aéo61\x0005ãòÎ6}\x000fÉª
tÛp,Ð\x001bë+þû·\x0011±¸Z£³¹\x001dü2»!\x0003çfyçt£O_\x0005f\x001dÝÝasv\x0015{á²ÍéfO\x0005\x000bÕ|ÇéÎ/uwå\x0014ì-w\x001bâÍ]=º¶#\x00123öÁé\x001d{ò{\ß¡®\x000bÕ,Y®\x0016ëÚÕ.\x0017§ï «1VE\x0008XW óÌÜÏ68\x000c\x001d?s^\x0001jäðòê~ßÛæ\x001dË\x001apm5×îa\x0010|Ãä\x000b,MÉâd\x000fÂåê]9BÔRUùõ/3+êÍlrÓÎÖTyªçÊ\x0015¼}êÞú\x0018kÜ3ÔüÂ°Ô\x0017²&·þk\x0013-Íñõád\x001c°ö!R\x0001E£\x0000j\x001aÁ£r\x001eGMø@LE<jR¬àQ@Z
\x001e5Á¹r\x000b\x001e\x0005ÔN-M\x000cÇ§à\x0001GÚÏ&ËÁYÔD!«°EM²\x0012,
¨å\x00114
¨¤~yÔd;jÁ£&ùJ
\x001e\x000545oG\x0001\x001c4
}ÁiÔEîîXp\x001aÅ¿Ã¢ø\x0019¦ýaQ3+;EMÆrX\x0014à´*q\x0016çsX\x0005¢orzUo9Õ\x000e<ò<»M
%X\x0014`­óaQWïF1³\x001f\x001aX\x0017«\x000e§QØi?4jÔC£\x0018p£\x001cõ\x000c÷n\x000fÂ\x0002\x001bvÐ(%@;4it¼4JIPî>Q=4
nZóaQÀ}ÌÃ¢<\x000fF]è<ÊRüaQq"h\x0014q«A£x»¦h\x0014Ñ^0d¹\x0007¢e*vÑ(Ý¢¦íUU)(\x001eÅ7*yE¬
\x000ed¥G\x0001u*%ãQ@5\x0016ã\x001eÓ\x0014ãÐV\x0010)F½ÏÇZ\x0004­ï R@=ï RDu¿DjìVðËb©×+\x0013\x001d#xÈá\x0017O\x0016 PG£h\x0016ñUTM~»
?x®éwm¤ï\x001bêÏ0Q\x001aD\x0003\x0016ç×&~©Z®.¤®îÚä\x000c¬âå\x0017±7ØQâó¤¹uî\x0013ããEtÃÏâ;×Ü\x0007,ÜØC\x0003ÓÍ`déVÆÞÁò"éj÷¦Kdb0-õ51AQlÄ@äNð{\x0015\x0018²t\x0018	\x0003Ö\x0006å)ÚÍ²J\x0014o
,©Ü©
\x0001î[Ü}\x0015¨´\x0011\x001dyutÎ}û5pÏýÙå+X¯èó«ykÏÊÀYål&5:&úN\x0013ª\x001aËó£ýÃñ13µáÁwM¡©ªªçVÆ=\x001dã^©ÄÁoIö\x0015ö3ü757>«°4°qÉ^ý¡\x000eÌ'uô³9ä¼¶ræ\x0001\x0019UÎ5ÂbÔ}!_ïoR~;IlE÷mÞ\x001cíÁ08Ek"jàç'S))>5=\x0007YN
\x0004Cyª[çë«\x¤íÇ}SEÿö\x001eMoÓëÃgS4ìë>PÌ±+LûÒüð¶\x000e¾ØD\x00175)Ñ¨íN.øD:v¼ª¿6A\x0005L\x0006;½º}Ù39©àÕ\x001d
Ïóõð-H+¯yâ\x000cÛ\x0010\x001c1³T\x0006?as{Mïð©½Ì¢f³2Õ°¨\x000cç¢Yû)Ë\x00199ÙkgÞ\x0001-ëzÛ«²
»RÍÛ\x0015ÀtWês\x0008Óv¿\x000fÁV÷\x000b#HLé©ÝzL;9~µg\x0016wb\x001a>\x000bcÏw\x0001÷ëíHm½Xy<\x000bw.lJãß¥×\x0006Ù\x0013Qf§\x001e\x001cv;«ú(qºÿ	pDI\x0013Aän£\x0006ï]Öù\x0017¼Ñ4%2[þ¦î\x0005¢1dgG-Ïn×$ÙtÐ&é\x001búJ­]9\x000eÄ1Ì¾e Ò a\x0006X\x0013ª³\x0011\x0010tÎ·ö\x0003ùD:¸CÄ\x001f3ãwnMmûQ~\x0012Å×mæ \x0014Ö:Æ\x0002Õîgù\x0014SpñL\x001f¿î\x0004Cî0ý7vw»ÿ«uOÜ@ ã«\x0014²ãXÄ>æ²öó,f\x0011ï\x000c\x0014^\x0008ÜìU©ÐH~¤[04:78TcW/üï_lwe
ßÂìd>vÁöç¼s²½Ì\x0011øÈÞ4C»Uäi¿\x0001dó Î\x0012ÛM(]õO|ÿáÏ\x0005ëøw!\x00195$ÔhJc¶T*¬ÑãómswÉGÍ
LµgÍ|Y \x001eMÎ¥"\x0001*s]Ê\x0012@ÌU'}\x0017"\x0014nBÓ\x0011ã\x0006æ¶4Sµ£èÄELt\x0016H\x0002/+Ê¢ÊL\x0012jðc\x0013qÂ>û±YÂ¿Ö'<7x¿þ*´þJÐ©A\x000865(Ñ(W\x0012·:\\x0012ÑË¦AK\x0002}ØW\x0012s\x0006-¦»\x0011\x0004m?\x0016!:ùhÐ½Q%G\x00025ÖLhPà¼\x0006ÝËf¾E
hæG\x0002SJ¸\x0006\x0005ªíhP RóÕ À¹\x0006\x0005HF\x000bjkÐXp
Ê¿Î£AùõjPZ±¯\x0006\x0005d'

÷õHÐM\x0006|$¨\SBt\x0012v%(]¬õ]ØS\x0004%dÔ\x0004U¸Æ ¥BJP\x0005>=\x0012\x000b%?\x0012\x0017îy$¨â]KP}<=\x0012\x000bÌP \x0016ÿ#AõñHPË|$(Ý°®\x0004\x0005D
]	
æ \x0006!A/´±\x001b)þhÐ8\x0012\x001a¸\x001f
ÊëóÑ L¹ô¨:¬\x001c
Ê\x0004MGÒîÞ¯\x0006\x0005Þ©º\x0006Õ#WhP¯Ð s÷³\x000bghP"ï\x000c¥¸sût
ª@ôÐ 
û¸Ö*j#4(=An\x001aT¨½\x001a´äd<««3lh§\x001d\x000bßZH90<\x001c\x0015\x0017iëAliü®pè.^üþ\x000eÅçÇ> f_]X(O|Ò\x000f|¾äç?1­Üûç\x0002;\x0008?\x001f\x000f¬Be
ÖZüM½V+)mK,Øð¡sêÎ\x0001/õÞ¯i<s3Æëd\x0016m6O ©q"é\x0007Ô\x0013Í&éû¥³i¬/«¿MÉy/Í(þRo3\x0005ÎÌ\x0003ßEÉ#û?±ZËs¯·Q´BD\x00105	R\x0017"9¹R\x0018ÄmØ mÚmYBª¦ùBkg!³5
U¡FO\x0011NÕãìÅOwµLÊ\x0012!£ÿsf­y\x001b*\x0017¦5Ô9Ìl¶\x001c©qÞH¶¿ìrº ~1e;ýxïtTù¶Ýn>þjay®FÔî1gÛ6³ì¿»Kíõl\x0019vYÑx'ÌUû	}OpJKÎVýxÉæ²¡íº
:ºî>\x000b\x0016\x000e^¶ôüH<3ºL]µ1\x0008-\x0013KÉÖL·=zËÎÖ-ÛÖVï\x001d6×±0lÞme
(Uw1VÜ¡,\x001d9íT?[óx.»ºú~#CÈ\x001c>=ê°Úà¥Iv¼&ÄÛ®+æD\x0012@×Kg¡eË\x0014ý9©úÝ\x0003îû4¼Öl·k>L¯*\x001dlL¯jª#Ï©1>÷AsVìÀ*rû¹ù^É(°§'Ë%D¶X\x0015³æ'k\x0015kWÓ"\x001cu\x0017\x0013|,Ó¶9YQc¥~}ä\x0006N\x0017\x000eû`àÈ\x0002×£C\x0006#\x000fÌ\x0000 Ü\x0005¦5î/Ùè\x000cIb_Hõ[Ã¦\x0004\x0016²³\x0006Nj,µä7¶HøI&Ì'c(»MÁ2üòåÇÍ\x001c ^F)H\x0003á<l\x000bçeÀ©ä?0=ÕòÏ½ìú¤Ä®ô\x000f\x0010\x0005\x0015«ßmÁ,\x0019*÷¥ .å èÁõð²·\x001fgSaç\x0019COk{D[*éiatbR¸»s©â&Ú&=LN«»¼\x000eµ¼^mXS«T	_¶öimë.Ø$xG[Ák<Êæo-\x0014#l´¾,©\x001e¾\x0019Z0s÷\x0000U\x0005\x0016Ì D\x0002äsÔ\x0000#=í'	Êø<ûC¬NE(hÉ­)<\x000e9f)\x001c´Å{8\x0005E\x0016lm=m\x0017\x000bui¡m;^»ª%¯}á©¦»Ðüëú7åç½Òjúé®ª®Íî\x001eÿ]%Ù¥8l+¹:Æ`³fìZlÃý?fOÀã\x001b!®ôª­{òÖÎk¶\x00057À\x0000¼tqJ¤H\x0001³7\x0007\x0000Ý\x0018AáBÏ@\x000ct82ä\x0008\Ôâ·P$âEÅJï\x001c
Ù©»|^Ãéñ\x001bX
mÇú2>\ÞU­çiÌÈ\x0018L\x0018T#yð«UüVûb N®iñ æ±U±áxgD¶í¸\x0019Âîä9iSC§ V³.Î²y\x001a\x001fÅ\x000f¬\x001cæ@Ü\x0016píT'ñï\x001dj£ÏZNÉ\x0010\x000f;OÒö+î·Å¹òØ¢+4d¬Ö5Ëï1É1»oÖçÑhÞH;l`uömÜ[)äÞ¬iþU2/±óÌäK¶ý\x0018ÿTFÉ88H$&UÃ
L\x000fx\x0014¯\x0017Þ\x000f¦,p4(\x0007m\x001e¢v¾I_SÜ^\x0001\x000bmG`äÎ«\x0003M\x0016ö=×B\x0012x|ÁÒ\x0013\x0007¶*	G#H8
fzÐ¥ßY416Z\x0001\x0016ëE4\x0006\x0016¯"JÿÙh\x000eãÇkù¿\x0007¼nÆw ËÊ²czd³¢ÓüÐc^`w:Û\x00157jb·w\x001dNYonS8LíDÖI\x0000Kn0Û\x0011-G=ô\x0002Z\x00061í'£â/´yrb­\x0018\x0015\x0003f¢¼V.¶ý½xdúËð\x0012.Òÿ´7À\x001bhÞ\x001d¦`/ñc\x0000m[t¤Ì\x0004¢[;g\x0007/¶AÈÒP½þ÷\x0010\x000eÅ\x0004:'aP+ßáG_5èè5Ýàµ\x0016¹î\x001cRãAÊBOOõ×\x0015¦ÏY T±ÔÛjG 'gÅÍOÙcmÄUjiW`<±Dúr®/J©\x001eö
[
>MG|gÍñ\x001dyâÈA#\x0008°ßfÎS4\x0012×Ó\x0011)C\x000c\x0010\x0019»¼áHÃÖ\x0006oxT{(\x0004\x0004,ËF0Bø?zÜÉ\x001bAir"·KÈ#cgâ÷\x000c
6j¹ò½\x0015¿ö\x001ch³\x0016ýõð\x000f`)||ø{Ï³Í°o
-\x0002\x0008¾'áMÆ*X%ð¦=
i\x0005{T
Y» =× ×D\x0019éá\x001e ø÷Õx\x000c°\x000fj
¤h¤G?%74æ\x0012WØD}Sµ«T	\x001a)s8Ïbï(Wí¨È\x0004bll<ã×fñÊ^·\x000b\x0002E\x0008lÝYävÆ\x001f#¼ÓbÛÑEV;\x001dDM£Kcé\x0019Ó"mCÿt\x0010\x0019\x001f&D½iFø»5F¶"èay
\x0003í]Ú\x001ahR>@áþËµm\x0007\x0005àTxË£7\x0007Ñ\x0006UH¥WWpè\x001fø1Y¬ÿ\x000bCÙÃÓñeô\x0010.eq\x000eA¶òev|\x0016f
ægî|à\x001a<za^t\x0010Ú#
÷8µ\x001fDØÚzsr:yH6µÛµT\x000f\x0015\x000fêÅ\x0011<ç\x0001\x000c&Ê|\óèX\x0019B\x000et?y©
ÿjx25ßÄù_×ô£ÃÄþp@BV`à?\x000et\x001a\x0018+\x0008
=Ô8´ã<¶ãÔã\x001bìáp\x001b;\x0010ªè\x0003{T]\x000eÜWzyUxéÿÆìàós\x0000\x0012\x00030h\x0012Ú\x0019» ¾);·5Üâó\x0016túÀÍæ56?bqßÁuüÕB¤AÝ>\x0018ip°¨¢ñì\x0001FDd¿ë(9bv°O!\x001c@\x0002yÂ"\x000bO\x0019*Á@±Ö¡`Þv4\x001bõ¶ö\Û¨ð°-¥áÔ:tx©õ\x0019÷1];Ä¼G¾\x0013ÍÃµÝr-{9w3ÎzðÊ9P>ß\x00165ìxº´\x000fÎÎa¼\x0012õ6"ÂÝ´jGì;C6\x001d¡\x0013
p\x000cN´øß&y¢¥A\x0005³ÆàRâ¦"°Vù\x0005\x000fÓÌ\x0011	Û\x00112*â·'ÔØ\x0013~,b%p°Þ\x0011Oµ\x001f\x0018åC«ËÿÅû\x0006(h\x000b¯-\x0019
R($3\x0002åì\x0012Ò\x0000¬hPîcqáÇßÿÚo=û\x0019\x0011×\x001dÒ WBV\x0016Öè×\x001da×]GuÆ\x000bjxÁX\x0015e1\x0010Ç\x0016B0ÃJrguÈ`ÂP!#ûÈx
e÷U\x0015ÇÁÔè^®ÎÖúÑ}»EmÇòO|Â(L#·íNðHãf'jäùwÈ"ªK^\x0007¨·¸\x000e\x0004_Â\x0008Í\x000eC\x0010óH/\x000fØFT \x00138Ê "ãvé2ìÁ\x0008Ù\x0007V\x0008QÎÑ£_¥Á¸»¸J¤SJä3°~\x0007\x0006ÉU\x001dphOà|ÃÚí\x001f÷ Ædù\x0007üüFÏÕ\x0015=ô`W*\x0007ü64ÛÿÆPõ;wÇúßØùvò]Þ
û\x0005ßjüÂïk\x0012â\x0007ÄaÏù©þ\x001dÕE'o6qQ2>°ZtOLÞÄµæî\x0017ãõÖ¬NÚ®çÞ\x0000ÃN\x0015Fç¤^ºT]é\x001c+_\x0006:'ÅóuÊ99j¤å´NÚ)Ó:)Ìg/¶W¨îþÞ\x0002Ç2>Í¤Óvmó9'ÇBÉBëäh\x000c-ëä¨\x0005ÁuÚþp1\x0013´N¶HY'Gkç\x001cËèå\x001cÍ½Ê;=Þ©\x0006Ò;á¿Ú¯wÂl|¼\x0013Î\x0011IóäÇìg\÷äpYÿ¸'\x001f8zÍ\x0013c#ÅrN°Dp ¢®ìÎB~k<%]ôc±½¯yB:ÃyÑ<iPË3O:Ø×;9öE×;!ãswÂ·ëß=\x0006ñ^Þ\x0015pÍ\x0012/²¯WÊ\x001aèãÎ#\x00086¯yr¸­ÌÓ\x000eýRæ)\x000b¡ÌÓIYUæ\x001fóTkÊ<\x0001/)óý»yBÕ5{v\x00049óÜ¦yB6+óS*¤yòAB¤yÂ5Crïu\x001báº'\x000f\x0012õÿ¨{r´Ç~²\x001e\x0001WK÷\¬Sî	ßã2qe\x001cÌYÞ	`}­º:ïãCÅºCB_.ÖÐèEÆ'|^2~0É8\x0007.ÿå\x0007~ãK¹þ7¾ì«.UNÿ\x000b¿õâ-­á÷½Xÿ\x001b?B~\x0003$\x0015]ïºp~IJö\x00018Å¤dÍ§3)Ù¡¶ù¡ä\x0017ÞKÉ6iÏ\x001e%¿\x0001R²A£XQ²MZ®KÉ\x001bÅ%)ÙFº;R²áµGÉ\x0006\x0001½ÍWÍY¬kÉEÉÖ(§j¶\x0003\x001dõ±\x001e'ë¡ëINVø\x000e+Nv4>Nv\x000c)_Só._ÅÉLåq²cÝ³8\x0019¨iqòCÉÉ5½ú¸ìNz¬p<r9\x0019r9Ùá\x0019óÃÉ~åÊ\x001bHÑÙE»ÖC÷\x0015);Ö}©©)RFRB\x0006&)3gvIÙ\x0013Ú^RFöE?¤l×Ò&+Û`¶\x001dNÕbe|\öýl't1YEpi\x0018p¶óae\tÉ÷0uYÙa\x001bãÃÊ\x001e7\x001d³\x0012\x001fLR®Bÿr­)R\x0006>»HÙÑ¦\x0007")ãcëCr^[q´Uì`\x001c{ìx±\x0008IÉÖ²|IºÙ\x0008\x001d\x000b5OÍjH\x000cpm=Úc$##ÏÅÇþ{õwRf¬\x0017\x001f\x0003é(B\x0006:ýËÈÇ3yìÃ\x000foü\x0000Ø¤øá`oyüpP'«øáì>òÃéiL\x001f\x001cKR1Ö¶h`\x0000Gr\x0011Ö6\x001aâ\x0007O\x0005\x0015uðÃ¡\x001eºüà¸kÑyËw)z0#A^zp,T¤\x0007Gsö¢\x0007Gã£Ø\x001cv¾Éd\x0007G-Hs®/Jv¨d\x0007üwÙe\x0007|g\x000f;ø@L3\x0002Ì.7ømFtwq\x0003ªò	6D¦÷ê~G{öÇ
\x001eãÞ×íeCÉ
\x000em®\x000f7 _k^n@2u^np¨©+\x001b\x000e\x001aO?ÜpP ýr\x0003\x0012\x001e,êEºÏøp\x000f`ßâ\x0006\x0014=E<*È\x0012xÌàA\x0008
\x001cÌà´¿íÃ\x000c>ÐöºÔUPÔð`RCÕø\x001ajMQ\x0003°ô¢\x0006ìßFQ\x0003\x0010i£:ÎsÖçåÃr+r8ô\x0005\x001cGX$\x0007\òv6Áå\x0006ÇaNb\x0016\x001bâ\x0006G(Ë
Hõ^I\x000eHì¢\x0013­qO¬­«×<\x0014­[ñ\x0003ÐÔ\x001fü\x0000%ìÔ¿Cüf\x0007}ÇA\x001d¼¦l<Úò¢?T\x0003\x001dû*=Ju»º\x0016\x001enÿ?ÙÕ\x001cË
Ãös
_à¥$QÔç\x00189«RYØÜ\x0013\x0000¤4ãqyáÆH­¦ø\x0001ALõª\x0001 ¡·Ú\x00128gçÞ¢±pÉ\x0006È#û¬¤ngJÔÔî«\x001dÃåú¯Tíï\x0010áéõB¸*\x000cÏS¼1½
íÍH\x00044\x0012Ö¸â¤\x0008Ï\x000cÀPk¥=×\*_^\x0003\x001aKÚüì\Òæ£ËÓE;ë\x0008¿WÍ¨%\x000f\x0005)ö»Æªõ05Þ$\x0003#\x0013¼æ^N\x000b¸VFÐ	%(=\x0010õÃÓC
/bóÇßÿ>ð9üÕ\x000ft~P(Rv/äÊ&ðý(Ê¤?]\x0013nÁ[ù8A\x001d<äcØïL[©§Ëó\x0011¹Â¨¹õûÁî²î\}ã+wB-·¨vª7þÀ}_Dvf\x0016;©î\x0016hmtä\x001b\x0003ë\x001c;ÂÊ\x000eãVo4ägÇÞª]\x0005\x000cÑÑ\x0018&mÙ\Ùxbï=EÌüGc\x0012h0j¡Sáqð¹÷Ïå\x0008in¼N5îu´\x0018oW|y.WAý]KWAuI¿Ï\x0007R½ð"cÒho¼\x0017®ó¦£h('Ùé^~KsÐ¦
ì\x001dðÃî|MSç \x0015Q_¦ãq\x0013ÛùÌìéóô\x000få.2~Ó Z|²QX1
S\x001cù~k3í"\x0002ï;§E¸hÚE0\\x0008\x001eá¶^xWi\x0001|¦êQssÓÖ\x00184lY>\x0017Q%w\x0005²¸ëTc(Wò)ýd¢9xÖ5àºñ&)¤&¿Ï*üÃÂ\x000b?9õ=\x0019"/\x0013 I-º\x001d@W
óç\x001aÀX\x0012-^H¨¡\x000f\x000cWõT\x001dÒwú\x000bÏÍÛuØ­Èõ"\x0002Ñ8) 9Û\x001eNU/XÌÞ\x0016JÄ\x000bâZá\x0011\x0001]SU8\x001c&7?D\x0001¶n/¬«\x000e;\x0010Nhq¢3­°eVe¨ë|X¡\x0012Û!¼ßç5zdèd¼\ïw\x0011ÿFÛ\x000fÅÀ|>7\x000eôuQ\x001bó"öU&Ùò\x0010|LÅ§\x0017>\x001f\x0015o~
\x0018ÌÒ5Å\x0004ü:\x0010\x000c\x0003ít!\x0008\x0017Î¯,,\x0019\x000f6\x0000hº\x00143 ¢¦F
\x0014\x0001ªàZ êó lmgøÔjSæHc¸´ÒZ2\x0004o×è4Ã\x000f\x0008\x0013µð^Y>ß!Ê õ'¤<ÇøWøÁÞ^%\x0012ûçóU¨\\x0000o´\x0019TQùeÝÏ¬§¥-\x0017EÈ\x001bY;I\x000e´WV@5ÃY§"ix\x0000(0$\x001cààºÕ\x001d\x001c,\x0004DíÎn9ôÈDÕÁ\x0013Gæg_*¡î¿v\x0018Y8\x0008Õ\x00183\x0002b?ô ÕÊÖ |á´vÀT\x0003fúP\x001cú\x0006áz¯qè\x0018¿ Ê¾(0ÈÐRßáÝ(¾Âû¡Øü\x0006aã\x0018¯Ð\x0018ºyoÆis©+ÒcÆ}2ú\x0012üÑ®×p\x0013ªª0_\x000fÞ\x0016Ý5	E\x0013dc=°Ùé[ Z¥´\x0006RBÆ/L:\x0003,Iª¤iÀÂ­fî#<Ü(>ý\x001d^kr÷;æ|;Ð4^\x0011\x000cv#¶\x0006Y°?"\x0013õÕ¦È\x0011ksm»D\x0002%I\x0011ãÎ*fò>¬\x00055\x0013MtÍ\x0006Í$ÏúK»ø1×¸_\x001bé#äô\R\x001d+6&Èùµk<`«ª\x0004»Óà\x001d\x0013\x000e¸v\x000eyMúÇ%8ÈKïY;Ax
ÐçÃª&¦ï}?á\x0002/\x001bgËEà\x0010\x00031´B	ï!³ÔðÙõ\x0000(·:\<sëj;TÐ`JÚN+ÞNC¦ÍcH£ÄjÏµ²"ÎP±hvKwq9-K\x001fh\jMB\x001ebLj\x001c
\x000eCqF p3\x0000)¦>\x0000àÆxÎtitdÁ}\x0000X\x0005Ml}Aµ<ÐBÌ»6ö©	SÎx/Ò@ñåíÑIe~Ý=\x0014Ä"ò¥jËA\x0016µ8('\x0007WØ2\x000e\x0015¶%n¿D	÷=\x0003À²Ûç
w\x0016©\x0011>T¶Î ±ÿ©¿`°PX\x000bù¾H`YQ¦¢!q\x0018{²äÖ¢é°H\x001cñ/ï\x00012ãÄ+B\x001b-\x000c\x001f¤åc\x001f\x0014Á­ý®âÎK
.\x001c2\x0016\x001dIå&ØÒø2OtÙhÖ\x0013DÏÏD=MÿßG®\x0018ü\x0016\x0008ÜÔ8´2úV&]R3bx ?ÖCÆ4.¦°mbÜ-jte
r4îgÄSºÅ
Ç%½Ò9ªf!'SÀD¥)veÐ¢U\x0014ª:¯u
\x00062\x0018ì¢M®µªqÝOÜ¿\x0017+ B]\x0007Øü\x001cU¨\x001f¢5T\x0002\x000e]õ/l	à®Ð\x0002\x0018(Ï¦ò¤ÚWM\x0013\x000c\x001d¹DQ«\x0000>ÆPà¨ZÏÚ\x0014¯»\x0012\x000e`Ä¤"j\x00034qç\x0002errB{,\x001aà!Ëå\x0001KL@¯\x0010Ci÷\x0019»áÐV_ül	}ÌVh\x0014ÙJÌ\x001eæÚn!/fèÆckuzªéjê{×\x0016Ú=bv\x000b9]t\x000b9ýwVÃµRýóø]²¿ãGtcòWDëOlRÙqæUQ\x0014\x0001ø	\x0014ÉQ4\x0010j#\x001fª´8ÀTaù\x001e\x0007\x001cÊ»p,¥\x0011ß2M?ÒMVú`ÝvÐö7!M*\x0012ù¸íWÝÒ3!éBû\x001aÉUÆ¦â,bÆF|ÓU\x000cÄèBúdTÁÅýæË1úÂÕtHÁñ¦\S´Õ\x0004òÀ^]\x0015þ!+v¦\xó/ìÏµ¸YÐBÞ\x0007®pÂ\x00144Þ\x001a¡RóXö\x0002ÒÂUý"ß*Q\x0007¯~ÿ£\x0003\x001e5Õ9}\x001eØI2Gü\x0000T\x001bWOuS.ê\x000c§ \x0002è¡<fnì/ÅÔÛ_¾ÞÐO¹÷\x001d\x001f90äT\x000f©\x0017r\x0006°G¥\x0002¡$¨£L½2ä\x0014o¡(\x0004Iö®	%ä\x0014\x00005D\x0001`y¿\x0011¢i¹\x0006é3,åTçÔhWN\x0001ºÖ(§\x00008$\x0002X|!§:$BmWN\x0001^£ÂÖ1ú\x0011!µU­·g\x0017\x0002\UüÀó0\x0012="ö\x0006âL»¼hV$óB+\x00155Ë<\x001fÙaõ\x000fXü¨¤Î6´ó-Òï\x001d\\x0015\x0017EW\x0005ð)ý:ùÜáFÓÚgj0b\x0002\x0000ÖÍðçsò\x0010Jú\x0017Ï¹\x000cÕëêÐ\x0012{<¼2{É\x0004¤\x0000Q\x0007,Ø~\x0005\x0012­Ó4R·,Z!]Jky
*\x0015±\x0003¯\x0018l8Â\x0019Å/¦k.«Êo\x0007Ê£í¼î¾Ç2\x0016Áü&\x0010å\x0006\x0016ù¸\x000cí+Ã99é
p£7F\x0002Ú¬A\x0000p-nÞ\x0014÷&©\åV\x0002é®\x0004Ç\x0017ÒÉ:$&\x001f£/×Å\x0003\x000b|£Db¤.\x001aÜZ
­bâ¢¡Ê¨pä\x0004oÒVMT£ï[é¯¶Ì\x000blÅîjÍx\x0011`àCçPFaH"\x0002v¶6ËÉ\x0012 MfF\x0019¹±UB
eº5,ß\x00007¡\x000et\/ßâ\x000cèçDH²b#¿\x0006ADV	;À\x001fý´ñV,ìwe¼2Ã\x000eç­\x000fUÐ%~\x00061:K\x0013CóãÇs\x001cógÚÁöò>\x000b®Ud\x0018¨&i\x000bÈ\x000e\x000bãMéCñÜDâ\x0017dä\x0003Â\x001dEpp£zûø\x0011kl\êîGÉùJª \x0003hrNêWÊ9{¥sVÜJ-ç*Ù#åÊj)å<¦¤ \x0014'ë½Ùx\x0019\x0015\x001d\x0004ÙWJ9\x0000gY§\x0003d¢s±¨\x0013=ÔIÔd¥"\x000b¦\x0002òõpø\x001a×~·½Äæß°Â}{ÇDcüd
MG9@k,G¬´ÎkH(Y7âE8^*\x0006£\x0010q¸qý8 ¶îÀÎyÒMxî¬SSÄÃ¯Ë`¤Ë8¥Ë ^\x0011\x0011N\x0011Á\x000f\x0015qT\x001càh=U\x001cÁ\x001c©â\x0012ÜÌ;Toûjag\x001dWÅyM¡âpÝÝúa\x000b ³õä\x001282µ±V\x0011\x0001\x0011*ÙMÁéWÆyhq\x0011ÔPqñ|mND
§WZj8\x001d7¯ã§H\x0006\x0014q2âÈ´ðÖ}k3ó"./}Ds\x0006ô\x0014q\x000c\x0015b\x001e"î´0`¸|+DÜ\x000f7~>\x0006\x001cß\x0014a¤Ë7a&&Ù4Øq,!À\x0008ÉE\x0007r©a\x0007ÜÙ\x001b\x001dÉpcÕ¨öóyî\x001aû\x0008O]ÿÉ®,»V\x001dÖÏ(2,þÆãI'ºóï>I6pª^'9*Ø`ü<C&ýÁ$\x001f°¡\x000e\x0000Ò\x0014øeñ11(í<¶ö`T\x0019:Ë­ÎÕÎ¯Ï×FÝþûµqG
öß\x001b\x0005\x00080kWh7AoRK¡\x0005¬]	E³,çT¸\x0007¿©r¨n©:IÁ¡ípßB\x0005P/ÀFT{=*À\x0008©;ø[4à¹¼¤ þÅ.´±ÆJé
0$
ûôØ×
i¦à]
VI}èd\x0012¸*þÕÕ\:ú·sÜ\x0005\x001f![.J(OmäÀ2é:ÜöO¼xb¢óé\x0013¡>d\x00075ª_¾¹\x000404
z \x0005ïô~\x0006¸ÛÅpjkë\x0006\x0018\x0019=FÄ¾Ëw\x0004}â¡+È\ÍØ\x0014R©Ò2:®b]égô,íD\x001c;wÖ\x0016\x0017J\x0013æg¨W«Q\x0016[QÍ¡÷ÁðÈÓ*
æ«ßU¼¾â@±ÈE\x001a!K\x000fÇEîÛ	-xî\x0007¼H=æh@åp¬Ø'u=¡8ß\x0014\x001c«ì¡½(E¶ÆÍy"å­)£²L\x0012½t¥\\©aZÊ¥Þ¸f&àè'õ[^a\x0017=+fú-ÀB=çäDg®j
Þ´Nb$×x\x0006"\x001cÍ/ãaéK\x001bm¬|ñ_º`jøD¬Ó\x0003\x0006\x0008}Ñ®
Zj«º+á¿_¶ÇU'óã \x001dÄ\x0008`m9Âø»IqìúûËf\x0012Li\x0000vú¨^Ããû-lÁ&±ùoò#öl\x001bj8ÝØÜ\x0001\x0019WT\x000côå(æ\x0002(ê/.Åk¨Åh\x000f¸\pOgÐD\x0002lv×ª|\x00121\x0007èeº@Â©ÖúõËRª|·iæî¸©B/]P
Vu\x0005\x000cå\x0016òRÊâVÆ\x0002×i:§^1 ~Û~ì'v×úÑPÂ\x0000ª\x001c	\x001bç¦?¹NÒÆs\x0001¨\x000fáFév£f×ÛPPtîj2Ñ	j*ú\x0015!á·TE¡uªnj©\x0004ñèØØ?ô!â\ Ä\x0006Y\x0000¯èLªa@\x001613¶t5#\x0014?\x0013eæÃjQ
íB}Ð*\x0004É&]Ýûbâ)ÓS¶\x0017QÏÃHWyN4	?Üä=öyQÄÐaòEd¡Ó\x0003Ü'\x0007|ºùàÖ=5\x0004\x001en½Ü
0D<äV\x0000ìp+`:"·nÀ
jÝ4¾_jÝì 3©u#d~
\x0010 \È'q°Öh{&·î&ùxÈu#Aw\x000frÅïÉaSä
\x0010,ÈuW	ý ×al\x001cvÝØý°+©Ã]\x0001ØÍ]/\x0008vM\x0018ìÊ¯¬&»òôÝ.»òfï]F ²+Ð\x000e¦çÙ-Xì*'ÌÃ ðP\x001b\x001füº£ZÎ*«àDr³KìG¯
\x001dze¬ö:ôÊ¨uyrË]¦\x0008N;#c^y_ï3$ÍC¯ì:\x0004JÃ×~ôÊgÕK·|ò\x001eÉ¯ðïzù\x0015p¸_3ºÁ¯\x0017\x0004¿f>~ÍõÃ¯ó\x0010,O
E^&¦Ö7O°8!\x0004Á2ÕÔrI°´sÚ%XÀ©|"ÁòEJBÐh&r\x0012,P÷uWÍ$ØMMg`éNQ4	vGÒ\x0006Á2ëÃ@F$ù\x0015¿W¯É¯;%Ä¡WçÀóTò¬dg>\x001cì<ñ©dÀ¾JöU\x0003;ò­?ìüú¨d
ýÐ\x0016ÀèO%\x0003uT²×àYV²sÔ¹\x000cÄtPúyQÈÎB{*\x0019pÌ£ußtaÖ1PYG%\x0013Ô£/:N\x0018uì1oF\x001d\x0003\x000fO\x001d{\x0014EÖ1MìW%ÃøÖ>T²3Å®J¦\x0007ì\x0014*ÀôWÅpc±[Õ@Ã®J¦ÇýC%3\x001aõªd\x001fR»YÆ\x001e²ãÔ#·®§Ùeßk\x001fÌ\x000bçSÉNª¾*Q\x001dW%;Ý÷¡ùªyU2_Ü³ñ»·§\x0001K;*9C\x001bU|ATqæè«â\?U\x000cèYÃü¹Hæ\x0005ódf\x001dL[æ\x0011É4²<\x000c¸ç\x0011ÉxNä\x001fr238k\x0018ÈFV4ÃÕH¦·ìdÀÙHfìÊ\x0011ÉÞ\x0015Ïk`*ì'\x001cnG$\x0013ø§H®\x0005!üÍ
êp\x0000QuúrÍý>\x001ct«C[°\x0015L©%ßj¹Mm\x0018á7éÆ\x000eß\x001a<¼[þî:áï¯84âw\x001f(üßúT.³\x0016{vQ1pËsÙÍÇe\x000e;k®¸ô\x0011\x001a
C]"ïºÂ÷W/Z\x0012\x0013w	N'\x001aþÝbw&\x001bI)5îè
¸âÉ¸Þ¯| -·ãÈfo·\x0001²àý\x0018
\x000fXNé\x00088]
\x001aô\x0008@åÒ5b\@Û´\x0010®·8d3i\x0011_(
ölé\x00068\x0008=o1¡\x0001ÙÊÙ\x0002W¸ßñxGó3\x0011á\x0014¦kb\x0013*«\x00049s\x0000Ò¿´Ü\x001axNeÛT\x000b,·ßáAÙ2Ô-Ê+K\x0017]W\x00148ý5úAr\x0018Gµ³jÒ×E¢\x0001µÒ³¯È\x00115\x0004%û"\x001eCçR)8Ç6õÉ;qkmí\x0015·d#¬_	\x0013Ô\x0006#^¼æjÕ5&éúï6Iy$:êDKVBÍ\x0010\ÐuÊ·yý\x0010Û·\x001agCã'rõC¾ï!¯#÷\x0012W¥¾,D;\x0003s
;9øÅ5¦Â%gcUw
uVÚ°>¹
8í_÷è\x0018\x0019
Ó¾îþx)cFØøíÇ#büß}±ÿ'¹k}ÃìQDç¡këmu+8}Y¾.3f¡\x0010\x0008\x000e\x0019[¾­+k¿ùõL,\x0015ÿÇØ\x000b7W\x001c?\x0013~\x001d\x0018ó\x0013!ma¯Yè×DäAô\x0016¼hh¯;\x001b(q\x0017*\x0003T\x0011ä>²\x0010
\x001b·¿ÔZÄ[g\x0015o3ÓI\x00021Âq^£ý®Z\x0018±\x0015¨Wé°¶.:Âä`Î*öû|Ér¯÷\ùÑÓ\x0006ÞJÅÁ^&eÅÅ\x001f\x0005Å?>Ö=hë	Mc«¼lé¶=ôL\x000fgÖÇö5´:ílßM·<ÎC*1#\x0018PN5\x000fÏ?\x0004\x000f})¢\x0017üÓ4w\x000côÿW×èLiÑØx\x001c_²æ·Ó!\x000eìc}bg7#¢ÞÂ¿~"ÙÔ@7[zN\x0002ß
»èçâÝ"êÍÈéG+ajgïÒPk4ie^\x001e\x0003¥¯Ç[¥oS±'Bïîô\\x0011îòDø±)U\x001f:æ\x0006®R³ñ%Ýpÿy\x0018{\x001bâ<>Ë
=v÷º
\ÕY\x001f.â@"\x001eJö\x0002â©\x0012êµµ5éT_ÝH¸ú³EÎ\x001fÁ\x0003uÏþÖ
ú­Þ©Qtò>Tî¤¬KÌMæEa1÷\x0006~/\x0002ñBv|à"­&¤\x000e½Ö\x0010j¼¨§\x0019K#\x0001LV¶\x0011]
­ö*hA]JBF/­óïÓö«ËMIöQ¶$ÆoË{E+\x0007]êCeiéìl®Ób}y\î\x0011\x001dãE-·ç\x001f¢¹<øì¶M\x0004\x0004\x0002ÂÌh\x001c(-ñ×Å\x0013/òíxt«ñ}-»Ý±ôa
\x0002)h9\x0012q×L©õb4îø£?ø{¬~gSââ+ÓÚ¶&ÈìÏ@õ"îµä¿X5Pª¦Qk¢QûÞÜJ¹¸sJ%b\x00021¸ªÈ9§\x0012:sR\x0000\x0006ùö3ª\x0012·UúÊaõ¡,ãÄ1®\x0012íÑr^Õ%¢Ñ	m3±ÊÞÕÏÈJè¡æuDqCkøåQ\x0004ÜÖëøÈEüÁÜß:
ûò6À¬þ!Ê\x0014,;£«"\x0019Ê\x0011Ha7»S¨vûQa_ÂkÌ_\x0015ì²r%ªjáçÛ­Ï\x00116b¿ÎªWôýX½r÷·n\x001a\x0017c%*ªó\x0018dé2CIöÄ?FÙb=ýÙ³ãL³Ä«Í\x001chöÊV7@æ
åö3­ì2Ï¡V67»S-ñ´c-ÑV
~s?§4Â±ì­Ù9ÚÊnw¶Uxçp«\x0010ô\x001cn\x0015ìþi+£Us¼%bgùV¨ÕÏ\x0001÷dWIä:\x000e»J^ ëi\x001eÎó·÷ß6\x0006JvEì\x0002!ÙH\x0010\x0004+\x0005°h]Q	\­­uÈÇ äéjêP+FÅe±
Xz°¥\x0016]CnÔqÅ¿õ\x0001û~¯\x001dRf©î¥°Ti3Ô\x0011ª\x0014®Ñ¨Hvk7ðm\x001c\x0015Ö¨/ühj<ðõ\x0007}Ä\x001bÓ\x0014.\x001dûp"&\x001ehLêãvVweV
Õ·RÎä\x001cØ¯¯`DÖõ\x0015V¶g\x0006ª"B½e#iJqdör\x000e$Z(¥\x0015{·¸°¡T¤sy\x001bm¢Gä+\x000fq<\x0017­D¤õ Á{;åñnF­KØñ3¹\x0003ÜÇÒè+\x0002¹\x0004¡Ü¥1Uh\x0008Çð\\x0002\x0002Çh´&
}HÃýÚxÖ«Z(ûQ\x0017J³Å1¸\x0019d®S2ñC@ÏFçÐæf\x0012['½Ì\x001f:ÌV<`K¿è*ÿÅ\x001dâw\x001e,êxçµU\x0011ò^\x001bEz8NµôÆa«îë¹oÅ½/D\x0014.\x0014¤ýZ¥pQ/\x001cì<z³÷"øSa\x0007fbx¼=½YÃ	"\x0013ì\x0014\x001eÒþ¯pZ*8^ÚM*®êg{âG÷\x0018ñ]nNÛk\x0010ã_	h.³Zeúi\x0011"**òõäEß¡h\x0010Õ]UfÎ¡Y<í²ZÖ{\x0011G.bR,ì×¼èäÐ8k\x001c\x0014¢­ÿS¥$c¼ÊIwv3g'â	äÐÍe`ºgl{«Ó7KV~.êU\x0016±ã0M¤£\x0014óÚøÃühói}Ö\x0011ðdËÉ
g>ôj\x000f$J?Í\x0018Û-?'Ñò#ÅêßÆ±"_ý{1E\x000fÏ\x0003uk\x000b½x§j²u\x0006.2cmx5©\x0019¨zV±4uMîÍ\x00128d½¶£\x001aq®`Bwá><û×\x0010\x0002UòzÓa·¥ÉðªàkS_ø\x0011±xàë\x000f\x000f`\x000f\x000e2ÁÆVê\x0010(\x0012Ó½k\x001c³kn,Tp }\x000b·'\x0019è[¸>¬¿V·®DF12¹¹Ãî\x001b)®ª5\x0002õ¢ÊÃPTÕ÷Çn±wv2¿
ï¥;©òc\x0007ùbÞKüÜ<RýÖóXúÌ\x001dãNz5ÓÀwî\x000c\x001cs'TWc'@NÏØÙáÚ\x001cÚºb\x000eÜ¢CìûÐ¼t×ÑîÄÚ»¤ç\x000eÀ3ç3tvê\;Cg ;t\x0006~®C=­_ø\x000ecè$ù\x000cîd?Sg§$Î3uâK<ú:\x0001ky
À¬3tâyÏ[â«½%\x0000\x0001Ê¯¡TÑ\x001bwê\x0004d¿z¦N>yìÐÔÉ´<C'SßCçóÇáIðæÅ¨Syzò\x0002Ü5Æ#£Hza(
-ÓESD\x0008\x0008ò/Uh¼ú\x0013#'=Ç«¹ÿ\x0013cvJÊÙÈ/>ñ³?I9>ñó=ïÿÄ8î\x0018ÿàÊ¼\x0002Âçð0©+S\x00147ßÎ\x001e0ÓDcßHòjù)¸ÿÞa}"
é\x00152\x001eü}áÎY\x000bh­)¤\x0008u\x0019äL\x0002s£ôjÊ´í'áèØÓspJËê·Ì\x0018´-\x0003Þ\x0010ç-ÌÊ\x0001%Ç\\x0003Ù®\x001f\x001cÖê#Ü|\x001bü\x0018rñ]\x001f&j[µg\x000f\òTµ¤ñA¥¿Uë°¿\x0005\x001e×¤ó&jâ\x0008¨Xã­x¶Ëþ6q/®Öì¦ÏJ\x0019Î\x001cx¢>¤ß;N4\x0014¾ªÔpWj¼©ü8oº4\x0000zuá\x001d÷ìðõCÀ\x001d¾)û·X@>a§\K½Ä\x001eÏþ:¢s¾0Î\\x0002ò²\x001b¼)Ê\x0016QÓI9"QèSÁWÇ²­zQÒ·¼×¸vÇ4h*gÆ[^j\x001b'\x001f&}¯NÈZÒ\x000f¶80k7\x001b£Ú¢í´\x001a¤¸ÚÆûå¶^R?zýg}ÅÌQ÷¨Í6#^nïC\x0001\x0001­ºmßØ\x0002^^Á}.ëú[j$|F\x0013
? \x0016Ëuw\x0018¨­ÓmÛ+ªO?WL1Cë´ü-\x000b\x0016«C¶{a0ÆzÖ\«j7\x0003éôØQN\x001dðk8Út\x000eÉÀ\x0014ÂpÐ\x001aíÔÁd¾{¼©jÈÙ´q9ÍºÐ\x0013\x0016ã¿/\Æ|á¤«Í}È\x0016\x0007×o¸ð®+\x000c\x000e\x001bõð{quÏ\x0004*®8ÎL³k¤C]g?K¢±¦6\x0007´Ù4¬Ì¦Öyfº¢ÏjU;í¶Læµº­	ÀÙR§3\x0014YR|u\x0019U\x001e?\x0019ø:Éyá\x0013>\x0004í_à\x001båÑ.Ëò·³ü$Ù19\x0008Jì &ªä\x001b£;ík\x0019'ç¸×$Èx¬öZ\x0008V\x001a/©VîÖ­²è\x0008¼,¼3P\x00196»Î	¥Z^¥Ýçi·ÑæØÚó½T°jÍ\x0003¢ñLëüv\x0004¼ïm:\x0010ï[I3Ù5\x0017æ¹?æbnYØ0\x0017@ÝþO1<Èæ"àmæñêO|Í@ìÿÄ×LL\x001d£Û'~öC\x0000FþÂ÷{±ÿ\x0013_sq±Ì\x0005Ð¹(;\x0010\x000e<ª¹À\x001fÕÂ+w\x00018ë%\x001fïV\x001e1ûï\x001d×'Ô[M¨Ê\x0013ü
Ï%?ï\x0001¸6³~WzÍsåÂÑ;4r\x0000TË)¾5ÿºÒ\V¿&\x0000¨Æ~\x0010\x0012¦?¯íò3ø(;\x0018P\x0013û¼³NM6kÇÎ2åÒÒj)l£¿Q®w/]
HÑ½ÚØ\x0008éÄ-×ØK³Ïlû«tbÑ\x0012yºi÷½Ã¼}ÂénÂáå\íÎãPwdËØáªùýÚÓø\x0018ÓèZGÀÝý´óñzû>®Ý_§1ä¤âßSZ[±¯J²xDÛ½\x00190Úr·ù:
Lº\x0010{¶ã\x0018èFùbç\x0000oÚ\x0014º`ÏC3 ÑÉPvteIWÝçëT\x0012 yj\x0001nUÓ_1óÒk2T\x0014ûkrÄ\x001fT´»Iª?\x000fc¬\x001cåõê¡ÊJ4¢RwÔ&QV\x0003MãìÍj¡|(±d0\x001eö\x001eþ\x001dÜiCâI´ÄÔï{+¹b/¿JYÍ?çDÜ \x000cÏ[¥)Þ»lvM "¬\x000e\x0010¸ýay\x0004<«aiçA\x0007øyëRãç7÷SsÆ
åy,eG\x001esWw¯æYV¯ëc½Ð	qÀùI¢ÚÊÏ¿| pÑÚ\x001f×\x00108\\x0003P­Ç4lYy<\x0003`ïõx\x0006 ¾1¤gCfÒK©«gÕA\x000eÏ°«$éz\x0006àûñ\x000c\x001b'ùx\x0006 )\x0017\x0013!ð5	\x001b&a÷/üôÀxàëë\x001a\x0002k\x0000Zk\x001e×°«Àu
<yÎÇ5ðV\x0014=¿=¤`@úz­\x000eS®\x0001H~"L\x0003#Ç1
1kÇ5ì®iëº\x0006à&ÎÈ5\x0010íu\\x0003ó3Öã\x001aè.×@4Ûñ
®s\x0008ü
iñjh%Ë\x0014\x001câ\x0004\x0004o |Ð(\x0017Ê5Q«ë2MÛÌA1¢XOKëFIìË\x001câ4×]\x001dR$\x0004\x000c´¤\x001eÜàÌÄ½h\x000bËóéÐjù½\x0008yþÜFIøUøÞÄ#4ê|\x0004/\x0004±#Tåî¬RMDûbdò\x0007\x001f\x0002ÿ2¿ðãyàëCÈMH"É\x0012ùHÀuøÈÚ©D
2\x0019G°Çº|ä\x001dnáU«ù¨h¼\x0008I<\x000f\x001f\x00157m%\x001f\x0019UÊûá#qn3ø¨·\x0012|$"ó\x000e\x001fW
>\x0012µ¼\x0007\x001d>\x001eü\x0012´{îï?\x001cì{0´¤6µ¹)\x000eHöyfß\x000fÜVo¡HL¸½º\x0014p\x0007\x001dZ¸ÚÆ¼A¡M'ÄK²yVÁrÛ-\x0018\x0016£(s»X<à,CõÂNZã+FO,öé³quWÞ?¥9`8Ø,
äà÷\x0017ÆW¢¾yßÊò\x0003j*ÜÅvà`:7\x0008±Ü\x0019\x0019!Ð§ªO\x0006¸Økk÷2\x0001*\x0017q/îz×ªæ®NDT¤p»Å¹È­5{\x000431Ä\x0003a'j\x001a éÅ½µ(;4ëD¹(¯Ë{z­\x000b3gð\x0011N¸\x000eÑâ¡HýÜ?\x000f\x0015ëÞ»;=ÝÚÕ\x001f\x00191%®Sî0å¦åñ¶«$\x0010]%'èÇd\x0003çÉ¦\x0017Éý·-É"Iï¾>T\x0015x\x0014°s\x000eânÅ¥ìahNpRÆ\x0011\x0019µÂ\x0015¦üÍv×ÙA'ÑDÞB¦ÎéH\x0019lm+±ÍC\x0015s\x00083ëË¥Ç"yüm}«¨§©Äc§©E¡ãZ|1þ£ãJ¸2ë!\x0003õQNÂy`\q»ë]½Gý\x001aá©.¹\z\x0006sÙ87÷PÈ¶\x001eÄý¼5\x001d8ª>v@\x0014Y0\x00120;\x001a$\x0011£FÕ¨%÷eý\x001c³\x0014W\x0017xKS½ô(ÐÑ§ÈìäÐUu9T¹RgÕ\x000bDþL£3×ôÇVXkáRÙÍÜJ Ð\x0004(\x0005âêUb¯ËÃ2]\x001cm­%]è±W\x0011øÉ4Ä2ÂÈü\x0016¦\x000c\x000cÌÌ¨ËY'².+£(\x001c4ã«\x0001qþ¥¢ÉWÿMÜþëîÿ\x001bc \x0016Qa](Üö\x000fþöÏÃÐàû½Üÿ7\x000e\x0013ñâ®\x0018®{Q_º\x001bE:ûÔgÞ®7\x000fÓgZ÷},ïV×ÕC?ß¸Þ¡Ûà\x0003J{B=Å7ÔÍÿ\x0013¯`¤\x0001Ò=\x0015Ò\x000c U\x0016~íj|`µ#j¿24É~ÀÜ57\x0012zZ$\x0001D¹þaö\x001eØ\x0016ª*º1µ	á2un_çÕ5xÆãÀcµ/ HÛô7 ÷ö7 ½KG\\x0016ºX,Ô»n²\x0010Pÿ8¨ËË&\x0005u< ÍÇ)\x00000Ü>
\x0002æìO
êUº:i\x0006¨^Ä½§@c\x0015\x0001µyH\x0008¨¼\x001a\x0005¬%	\x0001ø¡ üf½]
\x0002¦úL
\x0002*u\x001e
jKÆóP\x0010àÜãP\x0010Q_.J
J\x0014\x0004´Æ8\x0014Ä}\x0014\x0004^\x0014\x0004hn\x0000·:\x0017úå Ee^AÐzõðÇ*õ[G:¿<\x0013Z«\x000f	)[û\x00103ië\x0010irÉ»wÿ\x0008Ø\x001f"b²Ë:D\x0004ÄHÏbô\x0007Õûu÷\x0018\x000f\x000fñëã)\x0006Áüð\x0010P\x0011ÿ%\x000f!fS/\x001eRúòwrPVôÃAZ¿\x000cDÔæa "éL1\x0010¿!Ég7KæM\x000cÄ\x0013­z\x0018§mûc `\x000b¯I\x0006\x0002Z%ËdÑ\x001f\x0006\x0002\x001c¹6Ç<\x000cÄøíý1\x00103+Ã \x0006bì{;\x000cÄ4ç°ÊS?\x0014ÔI¼ýp\x0010Qû:
Ta( J\x000e\x0002ô\x0005unLf Érµcëò]$\x001e¢cÐ°A!Y5Â»¾Å)ÝMýÚâD]/â£\x0007Oõ»£Np=ýê2-?`A+#ÖXBì¯Íy4)c­-Y>ò} eÖöè\x00028ÞÊ,\x0018"ñK¸rHh3GËÎ÷,±^'\x0017F\x001f5u¥1Å'éÎÈÂyöcLqX·vW1¯E·%bA+¡µ=cÑÃ¸,×j­[Çµ\x0007>r/1\x00122óM¡»T4.kWuÝ	ãÂry\x0011\x001e\x000bÓº(Hì\x000f}\x0006|\ø¨\x0015ÏÒhÕ0\x000c
wV?¿Al\x00144j¥jBdí´¡	ÑOôB\x0002\x0017\x0004ÎßuÔß<(â7B¬Ç2\x0019PÃ)c4ÎdâÞ¡òÍ è_\x0011¥©wË¥\x0001Z¼ÜôeÔ^Óª/Ïo¹JcÛé2÷7U£Ò©{O\x001eë¸×Ã¾lÇgê¢£bæòÝ(6
ÂÞPû$jÓ4G¡¨´ìB¼çv°zâªÒÐ¥\x0010#êíjì\x001dHl¥#?¿Iw\x001ca8Æ`ö%É@]Îi\x001fÏª³\x0016kw Ï&·nÈ'¢YÅÓMG\x0002&'²F]«\x0014fÙ\x0002\x0003Õ¹\x001fÓ	lÝU¨\x001cµ\x0016¿ÂéÀñ··\x0006
°KÎÒ\x0017\x0010±Õ?UWEçGé&¾2kàZ(ñ¿ñ\x0015Cçÿ÷G-P(»¾haîh§\x0008g
\x000e?];Êkëb%ÄØä0â==ÅêÌ0\x000cêÊ8øeø\x0013³¯ô2¤w=âMØçM\x0007¿\x0015MÙâQ(Á"*Å/ÏÙ;\x0013Í2Ð½ÇS#¸ô°\x001f§XÕqî­©Xc\x0016\x0012æ\x0007Ù"Ñ\x0015L\x0017;\x0015[>I{¹üYqäP\x001d\x0003½ù[Ø\x000bå)P\x000fÁSÙ Ï¬v`D\x0012â®¦zN
æ­ËÑ\x0006S3­mI¹­[Gõ&5\x001aè\áàÕâMä|êãï\x001d\x0012ç½³"Ð\x0011k8³m÷Àâ¶¼ÏYYæ\x0012'\x0012|íÊôÐ\x000cà£+²SYþÈüÎq\x0003WÉÐódÉöy#½F
¼²\x0011\x000bS´ec\x001a\x0014ZZFÄ(ñ¥Ä,ÀêU\x001f\x001f7ð\x0010Oï\x000c½Uy=Ü,¦`âx\x000fzÊÙßøëÂ|à?\x0006ÑiGâã«uE§çQ(Øè\x000bâ \x0014]$B\x0004\x0013ÉéGÉ;õñi-£~è ²5ª`?\x0019BlÂQdþ\x0018»gÍ\x0014â¼u¢\x0016#\x000cx->Ù88ßV¦Ù@­ôO¡\x0000¯.ý\x0012\x000ecµ)¦ñ¦½¯²ø#{xÖ~á[zîbãmêH3GT4ÚK\x0008\x0006\x001di]gæ·L\x0008¾­Û_¤·<Ï¸%WhÂ¦Vëh*\x000c>IQ ã×£Âô&Î\x0018­Ü¹o\x0018Yû9>ðãY­K«¤qÜì*Å%R\x0003v1
5'@ÆVÍ8fHkåÖ"Báôjf²¹P¥	M±_»¯íOsDÝáÍ,%I]~\x0011ÓìâÔ½-\x0006(Û*`éð#$i
4åM"&½»ºÈ!x0#´Õeµ´ÔÅò \x0017(ð:ùxP¬Ä!ðéHv\x0005\fQð	ëªR÷\x0019ÁRjLbÄ
¶*ADcR<F\x0005
s\x0013{\x0003wzv+Ô¥F½UÃôzF¸F¯\x001bi§¡í3\x000ee[Cçg9XêQÞ\x001f\x0007ò»?\x001c?öÃ\x000ct	zç,d-ÆËh·"\x0011+Ä[Ôy	q§£ïÃ7í¶HþS)ûëþñ_í)ãíw|!\x0018lêû\x001eò°Ô8\x000e\x000f¡º8â\x001aÊ.K\x0006\x0003Ró}2\x0019´úÉd*ÄH±h\x0003¦°¤#C|(c¤¸K¼7{ÐòqÚ Qõ[¾.¢jHë\x0018£'ú¢\x0012ø×Ï\x0007#æ+*¸	\x0011cæ\x0016\x0007+\x0014×:ÚSX\x0014¨³ÁÃ:\ÛÜ!õ®Áy
)p¥xÇq0\x0019}I\x0018ÒD×^,C
´\x0011V\U¯h%uþq¤\x0000¾gºN\x001fjÂãHy6?K¦áÔCÍÞq\x001b#¾!e\x0004J;T»ë±¤¼\x001b%uÜy,)ù\x0019<Ï\x0015Øqò±ïhå
g;\x0014È|~ÔIìýXR¯:jZÒÒ&NKÊ7¡sÒâ³ÙgI}(`×:÷<Taò´¤néOÓ2\x000e²¨²¤D«¥'MpMéÅr¥@&·(WÊo@5\WÊ\x0000®u])\x000f\x0018£IýÄ\x0018Öúô\x001bÓ_õW\x0002\x0013¨ÍúùRD·ý|)6xZ¾\x0014°Ñ/åËÂ\x001b¤/eíÙº¾ÕV¯\x001b8õö
¾ïì±N[Ö¯/eå¬þøR6Öh×²êrJÓ²([}¬)þ\x0018í8S\x0000Í\x0015\x0019Ó\x0003Ò\x0006L[ê®+¦-ý£·±uH1D z}"\x0019m}¢01ÞeýÁ%\x000bhn¦\x0003(Ô}SìçÐð	¶Cmøõ\x0005c¬Ç7Ì&«y×\x000cÓy\x0018iÚzó:k*¯Ø«
Ø\x001c4\x0001â¼±³Ôç:(×±þÁU-ýa¼D\x0014D\x000fÔ¶\x00186\x000f§¤â+Ç"\x0010kçïUp\x000e:\x001bçÈA\x0013,WÝï+\x001d£\x0005Éd%Í®^{Öw
ci0´Á¬îõ2±ÌnæÇwäªG\x0019ðý\x0014UðRèâ\x0008oÕ\x0018\x0005¿/î\x0011\x000b .¥Mêk«*^¡ñ~`/û¨åEzåæ*Rw&.Î»:·\x001aÍ$¼lHQ.\x0004n\x0012iKù\x0000m5}nl.)jÄ!ÆDâ/ÓSéoüÄ \x001eøç\x000f\x001aÎ\x0017wYV¢=d9ÙV<Y¡\x0013ÚY\x001b\x001b·×àüã­Úu0eü\x0019\x0018@»h6éPv\x0014ÐÚaa,\x0003[$[À6í¥½%*AÄ-@6]+\x0016Íâ´[È\x0011s\x0008Øêÿ#»Êmd¹¡ ?QL\x0002#ð>ÂP\x000c\x000b\x00082v
åï¨Çî^	ßøSK6ÉwWxmbßÅY\x0000Ö\x0005ì\x0003ïõá£ÈgâlJ;ºb$q¯ÍÄg`RÅy\x001b©"Ò]ÉC¶\x0006MS©ãtÀ¶4ÃÔbÝ4\x000f(i&¿d'i£n\x0006D%\x0011Y\x0004TÒ~ä\x0018üß¯¹»UB¼\x0005HÑØ\x0016)ÓãkÑQ\x0010\x0005J¸Aâ\x0008ät<3¾RjM¥âñÇ\x000cçûúàÿpÓó\x001f©´¸\x0016àê*ä\x0016/O¦ª}ÎxmqÎíõ\x001a¼A£¡+s¶Oóð8mÉªÅÓî\x0016\x0014>}¬ÏøºÎ+\x001ebñ9WütFóÄR³í4í²P< å¤³$x\x0002{x¤PVüR
ÕÌ\x0011&E4ÙâI1\x000fâ@Øg¯0ùÇù²Z-þJÍxr\x0016
Æ´ÿ\x0011NzEbGÁ#ïk"mrúXð_kóZgpz=DDãÉ»Dªx-*¹\x0008{Ö÷\x0007]\x0016\=Ã_NÖælq,s®Ù\x0019h\x0001[/h=N\x0012ï½²5Ì9«6\x001fº*é\x0008\x001e»N!\x0012Vù\x0001¦CW}ãmA2ý¯Kço¹\x0013¥ï#K®\x000e¸¨ÛÞ¡K¨u"v[YÄòj-j,¡\x000e¸²\x0006\x0004pQ¡'m\x0014»{\x0002ÅÔÝ\x0012v\x00179 «8Ûª|³-Lí+e\x0014f«¤ÂPZ·Ó\x0012ºýÑ4ïÑì\x0018çMÍâhy/umý#ê\x0005Ã=7Éu°vK&åþ@ÇËÆîè8GyTubø¸Û[)V¶ÍO5¬mÉ,s×~¹ íín1µ¼ûÍ8à¯6Ü\x0016 ?®õ	×Åm\x0019	wà¶{Q/[A
Ö\x0015G¼²>5\x0000pB8Lg¿õõJV\x000cS÷ÑÞf
º¹¶Ç·\x0013}A/MJ¡aÅ²ÔÅ°c\x0003Oäó½\x000emU¶á£"¦\x001a\x000eÝ\x0004pgFèØ}=ÐNíNpC\x000fBoÀìbPÄÅèºÝ\x0012¨É¹±+«<t\x000bS®wÕÀð«$ySuz¶Õ£t½wºÐY°×ÉJÕë¤×oGcÿZÚI_ÈÓ]g¿\x0000·¤\x001bÛQsxMò^²Îû­\x0013"=öÄj1KÁ\x001b½wÍ\x001d>øWjrÉ\x001dÁQS\x0007ÎÐ<ø\x0008-8ØÉ-8jªòv\x0008\x000eBe	%\x0003\x0001x×éÎ5±æ»{ó\x000f\x0013õ÷õq\x000e<z¸ç\x001b\x0004qÖ\x001b\x0007\x001dÁqðm\x0007àñQ\x001c\x0007[q\x0008\x001dÁA0Æº\x0004\x0007ñ\x001c#\x0004\x0007ÑÎã\x0008\x000eÞ=­,8ø\x0007¶Þ\x0010\x001cÛuÀò¥½£­»¼ù=\x001fëpßêGp\x0010öÙnÁÁ?¬QâP\L\x001e¨8\x00144ó\x0012+Ç\x001fÌ\x0013O\x001a<ã_¯?_ÿ¼á	üËïÑ°Ò\x0011\x0012HNa\x0006ÿ¼¸öóRCc¬_0\x0007£Á~ñAm6\x0016aâ­@ÔºYbâã¹Ä©4í\x0014É¾AkÔ¤XÊÝ\x000e­\x00016(ë«Ýbc*jÌKíÔ\x0005C,³á£ß2\x0013\x001cI¥Ö%ÑÐ¯ßctí"â<fÄ³&\x0018F!³¥gugÃ¾ðZ® ÿ\x000f¼wÒÚ& .ðA\x0006£áNËL¤;Æ8\x001c¤\x00036ë7¶¡M@ß\x0007}º
\x0014\x0018Ó	:æÆf!?EB\x0004H£!#vBäªrw­ÂÙvsø¸*O\x0006QßáH4oÀ²z/_¹äB\x0017à\x0019eÉG×#7»ª¾È4ú#@V\x001arcÀ¤È0?>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/CPPREVENTIONDESNOYADES11JUIN_2019_004_.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/CPPREVENTIONDESNOYADES11JUIN_2019_004_.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=%]~!V\x0016ÏMÏMÏO/íI/N/O¯\x0007ÓëÅj0½)½=v@,\x001fJï>\x0005¥/ûÒ\x0007ÓGÒÇÓUé³ÒÇ\x001db;7vZ4Ïg¬L 6-ÓP²M\x0013YKQfÒ¦ÄJ×LKßS[bKÓ­S§R§\x00123Rc{2m2\x001d3·\x001fìLL÷L¯äL¿L4383,SIfúÅåsd²:3&3^´ËÒ3R;3S3Óâc333³3/g\x0016¤gd*\x0012qNSíÿïù¿è¶Fó­¦ú)©°|ØV^ÉB)RIY)emÉÚaRJ6l\x001cq`ÄmRvìD¶WÊ\x0007RTvXÊ1)ÒnhÕÐªSR>)Ñ;¬\x001d\x0006\x0007È3\x001as£±¸ÑØÜe\x001cÎ¼.w\x0019?·\x0000gÞ\x001cn1¹Üb®áær-7yy¯ãÌÛ;ËõÜV¾dù\x001aÇ\x001bbL|ï°¤³å+	Ëg7ù\x001cä^ßoQI/BÅÅò¹Xhù_¡U\x001bê·þ\x000bÒ&¡íW¡]ÇÊç¾/FÅäó GG<:n¨ÿ!óY<GhðUBg?OÅòyþoSñJ¡µb×ò( Ôð³ÄØêQÿ&õ¨ÙßA-n¹
µ¹]¥õ¨Ë\x0017£¨ø½w¡^ú\x0019î3Ô?ú\x0005i°Ð°«P¡¨Ì[ÿä\x0017£¨Ìmÿ\x001eñh¼¡èqó\x00199,{Ê¦~¢\x0012\x0003ý§ýmõlÌôh¶ÐËõhÁU¨¢\x001e-ý;hÐ«Ð\x0006¡-W¡\x001dõhÏ\x0017£âcòy õqUºâSBxzG¿ \x0010:}\x0015:àÙ¬Ïê/F!W>/\¡bû
]Öiì}6\x0015j!u¹WUBÞóB­:|¶}q^=Ê¿
iÛÎòY Ý¼Ï{¯Þ¿FÅ­Ú]º^z|B}êäïºù¶6_zy,\x0014.¹_BJ>?jã¤î¼zþ¾ì£¡u|ûðgût9§ÔÍ\x0001µkØ[[ºgÔÆüfõbºÚÔâBY¡Ñ&Gèþ\x0012hä:¦Ð\x0014¡r_Kt¾$O^\x0010köÐ|/¿7ñ\x001e\x0012Ôæçìi¡åf¼¡U\x001fÄ¦æKµ	©]ÏäÅø.$}\x0008©Ýã=j[öÉÚ=ìH\x001d?°elh]XöpC¯_õç©Þ\x001c]ÞSjç©Üìá&¦oáfuÚ7cáßË½½Oþ\x001dnéÉ\x0016×¡UW¡úûò®«Ð¾:ûk=ö2UÕ¡zûëåýò²O¶,ùì^Ø¦äÊ\x001eXg¿»³Â½¼OÙ·ÂQoIþ\x0008Ë\x0014=(,ûO8éÉe
ëþÁºícÖSXöð\x0018Âã½uá­Ú¼¨±¥v4Ïj×H¹É[Úþr\x000e¬¿¶ê­«Úürym{ýêÍù´+íÑõ\x0016½)<Ûô;,{RX÷ C^NÒ1È\x001e\x0014^êµû[9¨~\x001e¿Nm¯/×å^¡¿ëþV>-ø,}.OÖÍEurd|n§ÓÕø@sô\x0000\x0001m\x000céÙFç[Ï4\x0003:z2Hoá5yç\x0001r6
W{yLætÆÖTÏ"ê{õw&\x0018ÐÏËeºÿÏöòÆìÑ\x0003ÄÞ\x0000±\x0017þ\x000e¸\x0019 ö\x0006H
P\x0012c\x0003Ê¼üY/zg³ÚsÓ+y\x0014[
ú8ÕäKúU?\x000f×ËÁÏ0µyXÇ©¶´NbjÀÌ:í§yãébüÅKÆ6`¶'ë^ú]ê\x0005K®B_ëë.SY\x001dª®«=£ýOÎf+J>{þÚPråÜU÷Uâµ]SÇ'õ×¬¿ðÏ­«ðËg¬°®ëC&\x0017]ÎWGM\OxñT+Wj/þôSòJÄ[w\x0011Yc ¡ºë-grD$ßÄg¤ÕUÎ1Bv\x001e\x0015\x0019"\x000fªý®Þg+kP×DDöºÈÀ:ëOô"\x000fõ\x0016=:R*6{O-*tÌQBc=Û2È\x0004o~Dîtg¦\x000b=_B.Ì\x0011;\d¡P¥ÙÿÈr&,\x0013Ziòqd­SÝ\x000b#\x001b¶	íôüµWè\x0003sO\x001c3~2ú\x0011Ù;"çjÌ\x0019PómnÊ\x001e\x0010m`Hí±ÏHlG\x001b\x001b¿Gå\x000c\x001amaâ,Zhü¨ó\x0018míÕuðlt6¹<*gÄ¨\x000f£{ä<\x0016sXTÎUQ9OEãÆ¿Ñ¬ÇdüÑÑÞç8\x0013\x000fQ9\x000bEå\x000c\x0014=":ãJühîÖó@TÎBQ9\x000bEç{r/çFå<\x0010]lìë:¢r\x0006®¯\x0013«µ÷Ú=Jøè&£\x0013ÝndúmF\x001b\x001bmþ¿ocüozWæ¶q7é_TííÖÏ-+§@¨P;¡"¡®B=ê|ö\x0016*\x0016\x001a(ô Ðp¡R¡´Ð(¡±B\x0013&	=#4]èy¡9Bó\x0016
Uz´Lh¥ÐZ¡BÛv
í\x0015ú@è°Ð1ï§þÊç'Bç<Rý\x001aËÊu<·Pc¯o§¼O\x0019CnS¡\x0016BF~ù³µP\x0007Ó×ÜÎWÆÛMè^¡>Bac'wy^îP¡â<+4Zh±;QhP¹Ð\x000c¡\x0017æ
Í\x0017Z$´Øû\^ç³VÐzïs¾×n}úMBÛv	í\x0013:(täÊ§ú'÷¸PÕßñYë³Æ/1\x0007ui !µÏ|\x001döt×£óæ;_ûYÛ¾Öî5\x0001¡Þ|ü&W>¯i&ÔÒúy¨_(\x001a\x001a\x001c\x001a\x0016*	%¡¡1¡ñ¡²ÐÔÐ´ÐÌÐìÐË¡\x0005¡ÐÒÐÐÐÐÐÐ\x001e)\x0007BBGC'B§CÕ¡\x000ba;\x001b\x000eóÂùPA¸\x0015ÿn'¥(ÜU¨G¸w¸8<0ü`hfxx¨"\\x001aNGAcÃ\x0013ÂÂÏ§\x000fÏ	Ï\x000b/\x000cWÉ¿W×7·w÷?\x0008\x001f\x000e\x001f\x000b
\x0012>\x0017®¸\x0006Æ¦\x0016ÂHëHHçH·È½>°Ö|PdhäáH<LLÊ#3"/\æFæG\x0016FF\x0016{e¹«ñ«¤¬ll\x0017~WöE\x000eBG¤\x001cR\x00159\x001b9\x001fµ¢\x0001¨a´ì	Í¯ú\x000b÷\x000b¹üâB\x0003~q¡!¿¸\x0010ä\x0017\x0017\x001aó\x000bMøÅ<~q¡)¿¸p\x0003¿µÐ<X\x0010¼Óº1Ø)ØÛj\x001f\x0005ÓVÏàÈà·­ûcOZ¡`Yð)ëàÔàÓÖ7³oYCëë­IÁmÁÖ\x0014~}aÑÿÇ=óùøFó}5ú/,òH2Ka\x000fz{T\WUSø Ç«Þp/õ(ídÝBÉºu\x000b%ë\x0016>ãéN÷ôUö|Ïñ>çy´°Î3+½/³Ú\x0016o²«x_ñÁâ#RG«¤->\x001f²BPCS·Zn\x0011i\x001b·\x000cu\x000cu)>\x0012ê\x001eê%kUY|VÖe4T"su\x001d¿´añ\x001b\x001b6¿±á\x0004E\x001b¼?ØÇò\x0007û\x0007#V\x000e¿·Ñ08"X*ó	>jÝ\x0014\x001c\x0013|Ü*\x0008N\x0008þ³U\x0018\x0012üÕ*¸6¸Öj\x001d|;ø¶u{ðTðÕæÿ±u_Í7Ý¯\x000b\x000eèðÕ\\x000bß\x0000þNø;á;¹ý\x0004;ûÇ"/Eþ#øéEþ7àûÁ¶wÂ\x000f¤í\x001d\x001dwvGaGÛ\x0016a¸ÛIÑÿMýîðyn/Eÿw\x0004£óª>÷"üÅuôa
òGá;Áwïlzëá\x0004ðÛèÍÿé¶\x0015<ì¨-µß¤WÔ½qeèyZyç\x0000|.µ\x0016­^Gò\x0018mCH®ïIÛ'°v\x001d=é	úÑéNR°#|Gø"·\x001bò,|\x0017, \x0007;Q[Dí×Ü{\x0014ýÒnh*ßÉù\x0004\x001dãéX[5;Ü
ä\x0006»Ðcs%6Å\x001bö\x0003úD»½¿Dði¿¬n{\x001c|Oð`êølðEôé§m):I4_ôÇ\x0004\x0017aózøö+ï;Cí,ôïGÿ9ø<¬\x0001\x000f£ÞýwÛîfÁAî^}ò¾$ÝýÝUÇªVô\x0015\x0001×):\x000eý±3Dõ}\x001fb¡\x0002~	µ}Ñ¿~\x001bøcàFðMôOºÿ$aÿ¿	NãÖ\x000eøß\x0016¾Få¾RÿvÁ#®D¯:ÖIÿdÁ?+úy\x0012A§\x0008;ù`\x000bÚ&ÀYà
î%j\x001f\x0011þ]Eû üZp\x0017ø¢;\ç(p\x0012\	Vå`bN3yVg3h>\x001dÐßP)ï	6ò°\x0012,\x0007µí
hn¢v\x0019\x0003HÊÌ7ó®¼àJ°\x0012,\x0007«@ÕïæDZY\x0006ý?Ö¨/_\x0003.ò$`9X\x0005ö±lð\x0013EiE¾\x001f<CÛY\x001e®\x0004+ÁrP-ÌÂ\x001bÏ©3\x0007|>\x0001\x000fcç°öÙwÒ¿Cð,xÒÿ
8\x001a\x001c\x0001\x0012	þSbá\x0006æë\x001cÁ\x0013\x001eN&\x00066jl ©ÁB
\x0016j°PCT\x001c¡ö\x0008#d ÃXnöo"fv£Á\x0011ànE"á°1å%ÒÔÚnør¦×>Äîæ¡ÅÞªQj·@Ò\x0002I\x000bVw\x000bµ,¸\x0019\Cd.1N0ñåà,¯­®Çù\x001bôÿÄ-Ïz\x0005\x001c
\x00007§@µy¶\x0007ñÆ.¬í\x0011þU\x000fÕ{Ûéç\x00039j­A\x0013ið\x000cúßbfG3Z{\x0006þdà\x001fÔÃ\x0006µW\x0016\x0012¹Ó*æ#ßÅÌîB²5Ò
, \x000bÝI~{:ÐZð)ä\x001fÎÂ?¯;ï÷ä´F&\x001fª¦¯?%ø%²ÙTð\x0006¼±\x0014v¬÷à\x001f\x0000+¼\x001c(û\x000fûvb`·Î~à\x0007ê
?¹Ô-Q\x0004V)\x001fh§¼sØ® NÞ\x001d´Zå_®mÝ¥ôJk³&\x00074s¶Uµ¹5µu¤«ãVøYÔþÞ\x001bããô'IÛ¡ÿ3üLñ\x001fWÿ(J®V4óÕ> û£=\x000eýFðÐ/ó²G%y \w\x0007Ö`\x0012ùàõà­<e?x)§ÎfÎb«µ÷ë,ËÊU>ÏCµyç	ßÜ¤\x0000ü p£Î/ùöUâù!òö
Í¢þ=Ää.Õô·&örU"s§1§ùÜ·Ã¬b¹+ËÀ¼ìQ\x000fK\x001eXC­aU\x001aÜÌzY\x0003nf\x0007Ñ\¯mÅoÓj2+h2q¨OùöÊé¯µNU\9«ønb÷¢ÕªÀ§ä\x0007Õïª½HVÉ1]é\x0012áïéÎBÏ¼ü3\x0019M}ÊBp\x0016¸1pò\x001f²r\x0007è.ÃÊ=HíZ\x000fÍ
U~p -µ§¢ÿêá.Ýëèí+º\x001bú~ÍOo/"\x0003ß\x0004_ÀXèIÉ\x001eèªýnPð¸\x001eíæ2_É*:ks\x0019ã<]kÎì·+:\x0005®Hì_aù%4Ï`ù?àÿ\x0003¾/öw¨ç\x0005Õr1}\x001e¥h-?\x0001>äo`é¹BíßÃLµÁÂN³ÿê9JÎ	ý4Â§qz9áf\x0019ÆÛW©KÏwó¬uXË×º¿Qoøñû)ó;N÷w§©ZsÞSÞ½\x0007¾\x000fã­b\x0014+>e%æÓO²½½V{ètfì×x½Õ\x0014Â·såìêÛÊ¨éÊiÐw/}ÛF[¢ÝîæÔ5N«Áz\x0006¶\x0007;\x0014|Á½_,÷`\x001eW¸qOû%á÷bí#\x000fÕÚ«Ø¹\x000bE®+ø¡¢DÝMÊÄ\x0003N\x000e~xVcÀÄÀqW½·\x0014\x000b­Á\x001fa'
ÿ\x001dÆþ
~îÅ\x0018³´ú\x0008<\x0008fÔcrÊÒQLÑS«ð×hT°\x0007=µRú9\x0018;\x0001ÿlÍ\x0000^4êèÞ¢?ç\x0003·(úÏïë\x0017Å\x0013ÌS5í`7ÿ~ö\x0011åûS(vv[±³\x0015;[±ó[ôè'UbFÒ\x001dIÔZ·ªµ'ïë\x0017Â«~#s²å)ë\x000crêþÚÖ\x001e\x0002?ÄðjGp\x001dòBð&$-\x001fÎ\x001bØü\x0010kgÁ
p	¸ØÕ\x001d°/6ûb³/6ûb³/6ûâ¥¾jÙi£N\x001b<°\x0011\x000b\x001báßSG!^Gÿ\x0015aÆ«¼ôm\x001evæÑê\x000c\x0016TÒ~~êávVöaÿ\x000eV«ÎÎdWO\x001b¼Û>e³»5Ëí@5-s?ÊÙ¾9·~à¯°Ö\x001cûÕà>p1m}h»
ùGà\x000eW¢4P¨ã
T*ºYÕqwúWËJçY1~Ý§ã«Ñxà/è\x0007Õ«JÖõôv7qò!8Ó»§ìgv¶\x0010ûµýxøÔU&\x001eh¥3å¿AðeîD6-ÑÜ
?§w7ñÆ\¼®\x0012Ça¦\x001cäýÑÿ\x0010ü\x0014¬\x0000·p¯\x0008\x001cã)*¹¤ó"ó«ü1\x000fkøU&rT"PÌ\x000c\x00163ãr¶¦:¿{eÔ­b@î­\x0017ßÕxñ]¿Ì²ó\x0012'¥íê\x0013÷nÝwÜòÎ\x001bà¿ ¯Ðóû*Y\x0011}9\x001bë¹è+´
q.z\x0014Íwô¾énÕ,íptè}ÙmLí/hõSÅ\x001b7ÅÂ\x0005p1ú%ÄIÎó¦úÖ9\x0004ß\x0017ì¤è\x0016è\x001c¹ÄF9úo\x0013Qï+ú\x0017¢Ó¨ÈWMçYföðYjo§¶\x0019ÑÒ\x001b\x000bæ®º\x0018ìÇ³zr*x\x001d°zÌù\x001d¤Ü¸]cOùHg°\x0007-à|8\x0011ÉÓjª°³\x001eÜ\x000b¾\x0007¾£àNð	ö¦÷ÙgW)úß/\x0003W]«Ù¾¯ç7·-§¸÷=~%X	UZ«7/ÿ	üß\x001fÍàÝ\x0014472nÎj\x000f+ÁrP-¼æxZ½©\x0012A\x000cTÿa¢b8gÝ'À\x00108á\x0018Î}¸ru[\x0011?oñ,4rÍ¥.\x0012A\x001dÅq,ßêáJ°\x0012,\x0007Åÿv½\x0006Þ&f¶úJ«k±6\x001fÜOÝ<Æþ$üJ\x000fW`9µ:®'ÕWî:åsn
ü\x0018\x001cªöiåz¨þáà,V?8=9õMôð\x0015p48\x0002$ôä\x0016hÀ¼\x000bÍ>\x001bý·ú·
ÿ±ÿ\x001dÁ\x001f#ßçáhp\x0004¸\x0019¼CãÚ-H¶ yVÏºÎÏuúþ³tKð\x001fÀ'8[\x0016p\x000fº³k;NÅ3¨'Ø\x0019z\x000e´û`ù\x0017ðOr{]Aß~üwjÇ
ÑÿC*qoôð\x0015p48\x0002ÔõuöÊýÞa\x0003¯×\x0015a\x001fÅÚµà|N\x0008XGy\x001f¾Mü¿Líû\x001e¾\x0002\x0006GÑ\x0011º7ëSüïè{EAÕYM«Õðyx \x001a/}à¯d-´ÔZÜXéÕ=®\x0012ÿ:í»\x0012þcx8qÑè?É,\x0018ÔÛë»z{\x0015ohTìt'Ñ7X\x000b~5=_M­É¢=ÀkýyÎ¿yà\x0001á\x0017¨Ü3ü;ðI/jæYK.Î4ô_gÅýut-\x0019µ+\x0019x.ü[%®¤\x0003ó²\x0005Ü^ç±ü\x0018ÖÚÂ¯Ôû¯Üpµv4k\x0015s×içZÜ¶~eÞälÿïÜnÊY¡'XAo²:î\x0002¹\x001d;K°ð\x001aÖ,÷iiµ\x0016;¿Ô¾¹¼§r¹\x0011Ë\è\x001eà.ü¸òb¡
ÜËº®\x0002÷²Z«À½ôö\x0017Âÿ'®ÂK\x0017ô\x000cà¼DvÚ
ºôí-½#»?\x0001Ç*:¼9q¶\x0007ÑýU<\x000bþMô_¥í\x000fYéå*	¤5\x001b\x0004\x001eEþ\x000eúÁ!àü@µbÎ0ÝéÐù©FNÎðMÁNX»þ\x000bô¹î\x000en\x0013}OåÞáÏ'~·µoþS:ûn\x0013ÖÎDsß$\x001e\x0016û·i¨ÜýÐ»Së\x001bËJî8w³®ûê\x001eÓ¹{ºGù@\x0003#©=ÇµZoÄ\x0012½\x0013zkmN?vùº$_­\x00017Öº\x0016ó\x001e©-òCÈ\x000f!ÿ\x0018ùQäï#\x001fµßñ\x0014sóÈÎ¸\x0017\­Ïõ\x001fÖ\x0011\x0005x\x001fë,çÆ½=nêÛÿ¦÷kÉr#ðð§ôYóÒÝz×\x000e4bÕW±º×+'wgî ';©½sÑµzò|xµð
\x0019CkËÀr/{h«ýä·õÞ-:sÏ¥ÿä«ÀSÂ¯¤Ï÷»7
þ«¢[ÿ1Òß2;ãÐyÈÓTIKîA¿Ò1º×ë\x001dÙá­²cnm\x0007¸µm#'\x0017?´`ÞÛs/û1ÑÒÌ/¹(K«O9!ü\ïãþ¬+7\x000bw\x00069v\x0014mGÑv:|>Ëþ\x001aO,e^^åÖ\x001fgDßç»\x0015á"ù¡ÞÊÝ¶ôóèæôÊ?\x0015~¢ÞÍ7:a¡\x000bø-=/É¹QWåj÷\x0006Ý\x0017èáGÄ¹¹MßG$ôeìw8ke\ÃÔN`,8AÑï.!sêøºòþñþñôJý9\x0018\x001dó÷ud3¿Ö:ë.æ÷a§1þ_M\x000fª÷nç\x0003øõ¶îÜ	ßWoëÎÏ\x0018ËuÚ\x0013?+È}Èm.yôó±àSD{BÿÊ\x0013ø	gÂGô¶.£ÓþÜ¨wvg\x001a6\x001f÷P}Ø\x0008|HïéþÕà?ê=Âù/\x001d{ )\x001e(æ\x000e~V%zOw¾\x000c¿Ú³ôç\x000fôp9ò?ñ·\x0002õL 5Oï\x0001`¼#Á.ÞÙRwÕæ´Ú¡7wû7zsw¾óþð0=|\x0004,fve\x001eC:k\x0012½ö\x0012$-èç\n1³Àç2µ6Î,½UI­ÜDü·q¢Þæ÷À7ýO\x000f\x000f!X\x0008a!¾hVq×k«\x0012·-ýHæº2ã>ÚÚ·Ïp_þ\x0006÷åop\x000b»ûÝõ®$ úv\x001aÍ÷ybSÎí±Ö^Ûº½á'\x001bD2Y­	®C^\x0008ÞÄÎ.ñïftYWnÎËØ¼\x001bûft=ÀïêÝSúÏ(°Ù\x0016m\x0019i\x0015#­R_¹\x000f©å@oÿ\x001eð{\x001aEXXf\x0010ÿÂ÷Ã\x000f=\x0003a|¥8ûû\x0007zQõÝ»çYA¿ÅÂ\x0019¬u·Ò^IæQ|É½UðawÈÇQ¹/ËýZk\x0005[ éáN\x0015~´«}k|ëÞÄ\ü\x0011ü¢³]Ñ¿SÑm\x000fNÖ¶þ\x000e<åËØì\x000fv\x0003\x0017b­Üø
\x000b\x001f­ñðàcñr¶ª\x0007r£øó\x001c÷¾GyKÿò9\x0001v½G´Ö\x001b\x001eÞfoøò9[ÕZnTO&þ\x001aîw3.\x0013\x001b]åÞÌËËðyXèÎÏôýS¢þwóeÄÆÍº9ÇttÎ\x0012øÆðeè\x001c\x0002ÛÓª\x0010Ìc6j[ÿ\x0002qÿBäÐ|Y~VyûHî\x000et\x0001_ÐxC³¹Î¦ÄÉÓä@Å]Ø\\x000c+}ÎÃßU¹h£·çX¡ü¥þÒëÏr.ý
~þ-\x001b,ºô\x001aüí`¹þÜ«}\x001d\þ\x0004xÍÀYÈMÛ¥ðK±¶\x0018ü\x001dßÁ\x001f@Gäö\x0003ôh{ðip\x001cØ\x0013<\x0000)úlEë,"ÐRtð/Àë=^ÿj°¶gÌ\x0002ï§ÕsðyÔ\x001e\x0006Ï#á)ö $\x001fÃ\x001bûÝyz5ø>µ\x0001×aÍA§?8\x0004ù\x001e¯}¨@²\x0004I_øK´j\x0003\x000cÜ\x0008¾	D3\x000c\x000e>\x0000_\x00036\x0003Ô´Ñ!ýAßú³J\x001cã\x0016`¾J|Ú÷\x0010ø.òðkÁ]è\x0018ï=PsXèlæBy»'8\x000fof\x0001¾\x0008´À\x0017ÁE5z:Ý`ü¯\x0012ßÏÁ3Ôþ\x001aËsÌèào0G§\x0006ÍX\x001c¦WÇàw{c¹qåJÛ	´¨\x0012\x000bÿøB³¨&Ê(æÒó¹ôv.}Sä\x000cx\x0012ÉÍá[ùàQØ
,\x0000ï\x0004?âY&\x0002ÿ=_ÓKp0üÙ©&&Un/oW£·ï÷à»!'*ì\x001cÅ\x0000\x0016xBÑ]êÀcÊû·3×g.½¤mDÿ\x0007&6°ö<}ø\x0014¿à«\x0007tUÊjFü+Î4³|ñ\x0013]qt6X x\x0003Ø\x0013,£¶\x000cke*\x0011ª¼\x000fò"Ðò°@÷\x0005ø\x0017=TÍ(ÞÞïy¾Y\x0007*¿Êç¨=K«»è¡ð³\x0008ÿû>03ÂH_5ñ\x000c\x001fGg\x0005^Úc²úÊÝÇÌúÍog6¢¿±æ^}+\x0005?\x000e;ßEÑa\x0015;ýÀsøm\x0016µÌ¦ï&ä'Õ¾\x000bô9÷ò\x0019Q.^ªQ¸2¼\x0011_ù~\x00008|ÄÃ\x0002ÚÎÃê¿Í=Ô¾\x000eâOë4£>\x0001¾\x0002þúÒ\x0004/2Æ\x0006HÞ¿	¾Y\x001b\x0008¿\x001f§¶¹ò1*Dr/µs©\x0007vçNx³ÒóÕcöíÈÍø\x0015ø\x0012\x0013XH`yç%åMfÛÁºÞÄjýY «ø\<\x000fvL&Ü	þáR'õ$üv\x0003ÑæWM\x000eä)»³úÜI¬­ð^ê+ý4ûÈ\x0002²Í{ê+÷\x001eø>È«°ó)<Ð¾\x0006l\x000b\x00165ÎVð^vºKÂ·
\x0015fEd\x0000û\x0005¼Ô\x0003½ É\x001bÄ­Í¾ ^;ÃÚ÷½\x0006\x0001M®h
þ\x0008ü\x000eò±ð½À,\x0011ø$ò×½½@ãyÇ«\x0007ÌÞ1\x001c}r]jö\x0014f3ÿ³ÀwÁµ ùÜ÷\x0006óu	þ-ð<mwùÇ¾á`\x0014/UÃ7¢v\x001d|pHMµö\x0010ùØ	.\x0001\x0017{ë×<K#+_Í\x0018\x0002öE¾\x0011¾+ú±Æ¾ãÛÌÓk
vF\x001fÜiæ:¢\x0005ÞWM6Þ\x0007¿\x0018ùPxWý@%\x0011Õ\x0018ü\x001e\x0019óI %ÖLF\x001aBoß¼ô²þ	\x000bj~Àx\x0005}[ÀóäáAd%àÃh'\x000f7d,fÊóòj\x0001±­¡;îx¯;Y¥\x001ay#ü°ÎCÍ½\x000eý=T\x000b\x0015Ô.ñ°}g$>, 
¨Ý\x0001¾IÛ¼c<Ë;ü\x0016¼il\x0011øh6ô¾]£ßNéÊwr.ònùvý£ï]E»¿ÿnæîÉ\x001b*ßï]ýfÎ\x0006ndüµÅî\x001d¸VW:ÁÙ©¼ý\x000eü'î\x0001îªüÍKÏçÖ0»Î¾pÚ¸\x0019}ºû\x0013=c(oW¹ÒhTt>q\x0017Yú~I4­¾4­ú)ú+y§\x0011\x0000;¸\x0013umb¡Âs¯3\x001c\x000b\x0017´60VÀÎ|?á\x001cëæë;ßU9TGy{þ\x0017.öHEg´s\x0008k¢imSô\x0015VHö(º§\x0014e\x0014\x000b\x001fê(°Ó[ß*Ø[\x001dj*ú§`á\x001cx\x0008\x0006.wô}N\x001bE{­£·û\x0002½×Ûç4ñ\x000f£ú-²*±ö(o\x001dT\x0014}å·©¾¿;v
hÕÑÑïïµræèì;\x000bèÛb}§M«å`7$­Uß¿VG½híP$ó	m÷ðP¿GäzÖ\x0016¨èÛJå}écû\x0014ýgõWoàmÛVo=µú
äN¾#|cV¿Õ6Ð&Ø^ßºØkíç4ëÚß×Û?Õu­¼ýý`­Ý¶Uß7\x000b\x001c¤è<Î6ßu´g
Þá<+ø\x0006|;ç5ì\x0008ï;&míûiû\x001cü°vF£Ô÷\x001f<ý¼ý%]Ë¶FÅP»\x0019ýl¬ñoóW~; ûìët-Û·éZV}_\x0014|@Ñú³¢ã`¡\x001fÖØÍ5gÚïbSùjûCÝ5à\x0017£\x0019ÆB
m¿\x0002\x000c|Ç§\x001e^A\x001fNø¾*\x001d|úSò¢H.øô¯Ì\x0017}gu/°;j^µ'ñW{ýeÙ¾ÃÚ\x001fEß}vSØ«tçòý^÷\°\x0005ØAQ¬	Z\x001fÂÏ\x0004ø\x000e¡yHW:üAß\x0004ÝM°ù®o¡à\x000b¾ßê~¤=±>ÂÂµ'ö\x0005ËÒo¡»§\x0015\x0003yðÿ	ßo§_\x000bÿ5ä?G"vÜ
Mw\x0018Ø\x001b<¥è\x001c\x0007(ú\x001b"¿ h»à\x000f´Fç[ýh¶\x0001ÃÔ\x0016ÂÂ\x000fEó\x0018\x0012äî4Åð·Qû6x\x0016	Oqþ\x001d>\x0001?	\x001cd
8^ÑGoí\x001eÔþ
þ0ý	 3\x000b¬¤v3ü\x001bð\x0004\x0007ÿ\x00119\x0017ik¬í\x0000¿\x0007fÀ÷Ðì\x000cÏ¸ÿâßßDö'ü\x0004kqZuEs;òáÂ¿OVÁ?\x0001¾
ÞN«ÍÝ'p£\x001dåÝSà%3GÊû\x001b"¹\x0000¯#$ÏRÞù\x0016X
ÆÚÃf¾hcf
\x001e\x0004>6³þ\x0012ð\x0018µ9-¼Mßî@s:5þáé_§\x001bOT"{¢òÆcøÙ]\x0000vçxÛ÷'jñ¤½\x0016\x000bDÿ\x0005p\x000búóÁ=`\x0004dÔ®´Wèg\x0019ú·b\x0001ûôø±[\x0011{× \x0014Á÷DÓÄX/0¨û3mûeúé Ó\x0017\x000b¿\x0004óßÈ¨[ãíè¿H-kÄÝK«[x\x0016¾u^0ë\x000e\x001fî§-¾u§·aç\x0017ètÄ>þ´ï£í
ä¬2¿Õ4Ï2+±¥=ìü\x001a\x001eMûYZDç_@\x0013!xÏ\x0019c"çÞ¯*úþä%eâð.ð\x001eð\x0001Úîï"ð#ð/ÈáY1øo`qùyº¿\x000b3°3\x0007\x001eÏÛä\x0007w!8\x000e\x001cyâo@\x0013!oQû(È¼8Íyâ?x>\x0007{'N@nr\x001akÐ5«ë¿\x000eI\x0013Ìà\x0010\x0015\x000eÖl©È*öiôië\x0005_\x0007+Ü\x0008ï¼d+ü!N\9¬\x001dû\x0013Z\x0011u~³ÌÖ¡Ó\x0000ýy_|\x0010\x000fÒg\x0019(Ç¦é\x0015Qáþ\x0016dM¹Ä\x0007¢ÕwÑ?\x000fÏJt'\x00073§\x000eþ÷\x000fGNrÉZ.ñ`ÕÝ$¸\x0006ý³ÄÌ$âÇä«J\äg\x001d9ÿÍÞwWUtk¯ÙûÌÉÞû\x000c!\x0016ô.$\x0010#M\x0004\x0004¤(HSz1 B\x0008\x0008 ED¤t&"6T\x0004A¤4Þ{ïM\x000c$¹3ïÙzI>ÿÿó»Þ{ÿùï9OÞY³fÍì5kÖ=g7Á	{ÎË¨\x001bSÌ»ÀL\x0005`K¢\x0005\x0010kM\x0001ÂzåVAXøeÃÚ\x0003Ð¶ÄØ\x0003(µ /à£DEàSæêDæ\x001eÄú0Í|[Ô\x001cX\x0013xÑ 8\x000büÔ íÏ ·ïS\x001c2­\x000c\x0006ö@²$°\x0001J\x000bn\x000bº\x0019$O\x0003¾5Ò Ì\x0007º\x0018J\x0000Þ\x0004\x0007W\x0011?î\x0000z\x0010°\x00118}
2ôWEéFÐGÑ\x0000dÞ\x0003.@éZÐ_¾\x0004|
ø<ø\x0018HEÝpko\x0002»\x0000wA2\x001e4Æ%îâ¯^þì\x0006\x0007ç#´Ö\x001eµ*@r\x0013ø\x0005@/\x0002=
:Y\x0002º\x000fp\x0006°\x0004êæFÝtÈT\x0003=\x0016¥=@·\x0006_\x00021À\x0015`Y\x0002v\x0005>Z+qÝ<èa¸ç\x0018¯5\x000bX\x0005u1jv
¥\x0018\x0011ÿ\x001eu1ûöxà:ÈÏ\x0004î\x0000>	\x000c÷0<ãáq
\x0000\x0016A\x000b\x0018»­Ð&æ\x0017
D@þ$d>\x0001ý\x0018$Ãs]\x0003ZA\x0006³¡\x00022O oÑ(\x0000\x001aiíLa´\x000cÍ\x0008ô_|ÒX´\x0003Íðêà/\x0006\x001fÖkm 3Z\x000b[xØV·\x000f\x0019>\x0002\x000b(\x001d\x0007ÄìpèAô\x0004NAkáy|\x0018X\x0019ø4J·.Zåg¿ÿ\x0016Úl\x0007ú\x0019´Û¸\x0000ÉÑhg\x0012hèceY³ÉÀg!\x0013¾â/Àð.CéK@hRäÂ\x0015_\x0006B{\x0012\x001cë\x0006®Ø\x000fü°7õZáu\x0001·³\x0013\x0005Ä\x0012GÖxxc=ò«G]+	ø1p>øa¯\x0002Zl\x0003g=èÃ¸:,AÀÂùuÔØa\x000fh9d\x001cÈO\x0005'<³+Ào\x000c\x0001¢Ï\x0002Þ&0\x001cm{y·\x000e\x0000±
,Ì>CÏ\x0003\x0003Që5È§ÆÚ±ú\x0003÷9\x0015Ð¿Ý\x0012|¬n\x000bÀá	­À¥U[aOr\x0019tx¦0\x0002ú\x000fÀBD\x000b l^\x0001ÂöäVØ?æÚ?·a«\x0001èPbD\x0001Z\x0017ð\x000f¢¢A:À÷9\x0015ÙªK\x000bÏ1ÄhÍ©ûîæ´AÌÂIB]N7¿\x0015ùÍóib\x0012ÎR¸áðsà6|ó\x0005_[\x0018NKö\x000eV\x0019ðo¢n\x000f5\x0018è	º#°\x000eZ»\x001cÄuù§\x0019ÉQ{Ãéà\x000cõO<Êà·uæ\x0014¥\x001eÎORp\x001e\x0012³àÏ6uùvp:¢t"h\x0016.\x0003ó1vÏ \x001f\x0004
41'$|\x001dN-âAÇoM]#Cé8¯xÀ??ÑHÇ]\x000eí4F­8!©d8ì\x0001kªæg÷ÏF\x0016â\x000cd!ÎC4¦M7çTÒ·\x001aß\x000bº¹·åÛ
ÍjnÒ Þ\x000bÉþ  +¡t5j\x0007'*Ü\x001a8ÇÓÌ~iÈD¡V,°-Jw\x0011¥1 SPú\x0001Z(\x000cþ\x001cð\x0013@Di\x0000t'ÐÃÂ}04Û\x0017î\x0003Jû\x001a:­qúmm	EÁùriÜ\x000fzº¡E\x0016ÜË§\x001b\x0014U×ÁI\x0001=	G\x000cÚ;\x000cZ\x000c|\x000e\Ò Av\x0013ôe`,ä	2£%CP>\x0007Ý\x0016ô|\ñ\x0002dúÞÒD´ã ýUÀÙ~ÏMOº³\x0004ï#\x0018©¨R\x0005Î ´eø/ì¦å\x0015iæ$0?Zîî÷Áð\x000f9\x0012U
ÒAÔ]\x0004\x001cÖpâÁOÓÄÈXEÓÌ³j¡´zÚ<iÔ@ó#!\x0013g8üj¸ÏhyéC /8Ë
ÍÆß8í\x000bcFÞZÒÝ¦TÝÌ\x001b\x0013m¾þçNOÑý\x001cÞÞBßöZv\x000få4ø3au\x0003L-kõ\x0003]\x0010íÄ¦ÝÃ7\x0008÷>#
êÝÁ£àäÌiÐQ\x0006ÅãèU<fm\x001d®Õ\x0017-wD\x000f\x001a\x000cXÐmñ°¤?k¬ÎÈð(Ã1ïßÑ\x001e\x0012«Ì4c	äüiCÛµ!ãÓ<lÐv\x001e\Åf¢ÆØ[\x0018u³4s6\x001eÎ\x0007í¤556fN;\x001f\x00006ÄÕ×A\x001bµ@·5ì&jÅ¾
Éuha\x000cèQàï66_\x0014\x001b(}\x000fýhí=p\x001eä\x0015Úã`¾Âvþ7ÀX¡\x000fGa	aK\x001eoF­ï\x0002\x000eCKwà ÌÔMÈ§¡2¸V%ÆÂ~_Á öïf^êú2\x0006OÂ\x0006v åíaýûÚ0=¯±\x001c®²\x001f\x00026d¢Ý{X\x0017÷`{×a	aI£·|Ö¶}\x001dldZ\x0003ÇÓ\x00141¸V\x000c$·¢Ö:ÈL\x0006.AiCýÓc	 Ï1Æ-àç\x0001þþt\x000eKb¼ÝÃ£6Úpj

øZ\x0005«6fXg´<\x0011~`\x0005´·Ê¿i§\x001cf*{ØS¡ÖeÔZ\x0005É4X{,$\x0017Ã2£
\x001d(HY`iË0ã¦ÿSÃ+Ú_#¦µ£ÂÀ\x0017ÑÃ¾ÇËXc®²Ù_³téçáµlZÓÞr"zU\x000eµÂ~Õ´<\x0004§Ä©=ìª½ééOkú9XÝyÈÀ\x000fð:\x001aº
ùO°üeM3Æaß\x0008Éà7æÇ\x001bÔ~i\x0019|ñ*á\x0019\x000f\x000c¢4?F]\x0003ã=\x000c\x001c
¼kb¾ª\x0001\x000b\x0002ëù2ÆË
ðçÑx¶qÆgj{XÕ4\x000fVq\x000fßäÞ­Þ=ßÃ\\x0018ú\x000eô6Èb¹À1£V	G1øËï
JXD\x0011g!Ù\x001e\x0018GW\x001dê=ð!øÀëðÆÃ4A?+ÁJcaÃÛaÕðEZr\x0016$ügà'B²\x000eèúàÏFÏw^\x0008~í´À\x001eX}×ÍÜ\%mRúqÌWc³Z1§Ob\\x0005Ãq-m5¾¯Ïfz\x000fÆXòC²q\x001aö<¨òé6cüÕtê§¦e"¼ç,ó;\x001dÿ¤Ñ 9à;Od8i-ÌSÖiÍÍðiø=H\x0003:\x000et\x001cèòæ9í´xó,½æ÷\x0000\x0001è\x0017ÌócæÉ|M¯\x0005}\x0019ôEC_ñèºKÍ[nÀ7O\x0003êv>Á»Ynáý6ß\x001b4¿# 2¿sO6¿æH6¿\x0007Iû2hÞr#ß0o¹1têrC§
\x000e¼kÞr#¯ö\x0003'
Ê+ \x000föåYÐwAe\x0006d\x001b`{óÞ\x001bÓ·Ô£á>\x0007Þü,ÐáZçÑçà\x0017\x0006?Ò ¬Ñ\x0001^Áx t1Pÿ\x0008$kàZ\x0017Áß6ËS		sRPÚ\x0002ò#qÅMÐR
p ®^\x001d¥P×HÆ\x0005].°\x0001ü; K¡0¿(zò\x001cè\x0012 G;{\x000c\x0006%h¼É'\x0018Di\x000bpF µïÌ;pÐÂ#h!\x000et\x001cèòæ÷òZþgÐÙÙP«\x0016ú\\x000e}nYÞB)ú\x0016\x000bÎ\x000bÀµÀ(Í¡±¬ü\x000côçhs\x0005èQù
8\x000eüÅ w¾azhÞÂ¡{kì°<¾\x0017©é ¡7óMzZ\ê9ÓTÌùæ]s®ÒÔåFaNÚ@`~ j¡¸Ô5DÝT:u\x001aèhs5èÝ /£\x0014\x0016º\x000f3hÇ<Cä°áÁó$Ú½Ú3¢;õìð\x0012
HlÔ¾$}ç÷Lã\x001aùIßY¤§S6ò(@y¨\x0010EQ\x0019z*R5ªGM©nãizÞ vÔ^¦Þ4Ì\x000f¤¼T\x001e ² [©Nõ©\x0019µÖWmLýi°ö\x001c]©\x0007%ÓpüÁp\x001dEAí3P4ÅÒ#Tjhïü<½@¡×éMê@/Ñ+ÔFPv\x0012u\x001b5ªCõ\x001a?õd~jÛ¤qýü4	­äÀ;C\x001fÔ¾¹¨n1ªÐãô\x0004=IÍéE\x0012TÐ\x0000\x001aB\x001d)zR_\x001a:\x0011tRMjH¥èmðsR¤ÖC\x0001¡âºÝòTªR-ªCOQ\x000bj£û]¥4:Q7êE¯Ò(¿\x0007YÉ¥Jè\x0016âé1ªMu©\x0011µ¤¶dÓCô\x001c
¢·¨3u§$êgÞeÚ®\¯vâ9`k`G`w`2p@»6Iâ-à\x0018àdàlà"àvmzu\x0010«\x001b[;ûGÛµëÖC\x0006Þ4hq`$0\x001f°4°RûÄ.¬ÚÀ\x0006ÀÆí»¿ÜÍj\x0006l
l\x000fì
ì\x0001L\x0006öïØ³M;k0p\x0014p"p&p\x0001p1pn¸µ\x0001¸\x0015¸\x0013¸?±{ïnÖQàiàEàuà\x001d`AÛJ|¹]¢í\x0000#9ùtaO»0°$0\x0016\x0000¬\x0002¬\x0001¬ó²i§!°	°9ðE`G`"°çË=Ûw·û\x0002\x0007\x0000ô0üÀ1ÀÀ©ÀYÀùÀE½ô\x001cÙK«\x001b[»{uéÞÑ>\x0008<\x000e<\x000b¼\x000c¼	LéÕ­]\x0000\x0001\x001d`40\x001f°8°\¯^±q*ÀÀ\x0006À&ÀÀö\x001aË\x0005\x0012IÀþÀ!ÀQÀñ\x001aË\x0007¦\x0002g\x0003\x0017\x0002\x0017\x0003¿\x0007®Ñ\x0018\x001fØ\x000cÜ\x0001Ü\x000b<\x000c<	<ß«wÛ^«ÀÛÀ{\x0006%\x0007\x0006ªWï\x001e½d40\x0006\x001fX\x0014X\x001aX.IkRV\x0000V\x0005Ö\x0004Ö\x00036\x0002>\x00074»q®}Oô¿
½ÎsSÿ\x0012ÅðâÐÿ;ÚÚcØÚJ
þ·å,äÂ4Ó^/3þ"
íç\¼sùïPL{ï?Ç¨¿\x001c3Âu«&Ó\x001e\x0013\x001fÌ.ñ/cÖ¿yÿ\x0001#ÿ2æGO\x0005Rv\x001f\x0011ÜÏSÿ\x0014TÙ)ç¿Hå\x0000Åu|*ø/¥¨ð¿\x0016¡¢ÿBÊt$ýçøÏuÂt\x0004ÿçå/aÞm$é¨?fÓbZC;é$Ýd\x0016fY<«É°ö,
aãÙl¶­a;ÙIv[<\x001foÀûñ|2_ÀòM|??ÏS#bDIQIÔ\x0013ÍEWÑO\x0014Å\x0002½\x0006Íµa\x0015
3åÛfÊÊ\x001f}_ÞÊT\x001eÐË|/Iv_ÞÏ÷fe¬¯ngl?ºyÆ|6ÊØ~¶èLù¢äëdÊ·ÌÏ4lû3æ³\x0017Ïo)ß7cÿóÌÌX÷ûù"¥3åËÜ×ë¯Hl¦òÁÈsí\x001f¢Â#,Ö(\x0016\x000fÜÒ6]ûª¢>w»î÷Ó~zõÏ¤KÆûiU?­ã§M2ö¢äÈ£,1_&-£|Ùf\x0019óqf¡\¹LùøLùíò;2å/fÊ_Î/\x001fui"!:S>!£|BLùÌåõ2å\x001bdÊ7Ì8\x0015ëiTZ3íØ\x0004êÈ¦ÂÛ¶Õ\x001fÒ+u<1;ÒÎX\x0011E\x0001¯®ZçÕQkÔJµJs\x0002ì\x0012»¤å®²«ÄØuv8»ÅnPÕUu²Ôãêq\x001d7=pQKùâ<gÓ\x001có\x000b"eú#Bºf\x0019Ï®ïFzÒTZGG)Eë>\x0004u¯¢½§{u¼Æ\x001aëzÏh4£Ô>9¿¾[Õ÷<UÔY\x0012<R÷é\x001cÒuJßiñl:\x0001é:µ¸ÎíÕ¸Ní×¸AÕXh\x000c\x0015TGu_WêÒcH×©ã:]¥ó'®»Oò¤/yÊ<íKñ%ïo}ô·\x0001úû$úû{IC<F÷¨Mèáfôp+zø{Évì@ÉNp\ô2s¹yr;Gj­fÓZ\x0015^mï	­õj%\x0005tViM	2\x0011	0é¿âºþ`=ªÁ:e¡,å¥AøCXsÖ²DÖãXd¯°$zd#é]6}@cØ5vÆ²Ûì6cwÙ]\x001aoL&ð\x0000\x000fÐDîqÞçYyVÄ³óìô\x0001ÏÍsÓd^\x0017¢)¼\x0004/ASy,oDÓx\x0012ïM+x\x001fÞVjïß~ä¯ó\x0001´\x000fáCh
\x001fÆÑZ>§uü}þ>­ç³ù\x001eÚ BÚjîx\x0011Oi¢¨Ié¢®¨Ë¸&¦1a%Y\x001f2Ëng·cåì\x000ev\x0007VÞîdwbñv\x0017»\x000b{Øîe÷b	vo»7{Äîc÷a\x0015ì_\x0002ÃYEç\x0019§
»â\x000cs\x0019Kó"½ZüU¯7\x0016j\x001fêÊo\x0006Fñ\x0014ÅUP\x0004U\x0001U@dQT!\x0011©¨""«*¦(UB\x0010\x000f¨RªV\x000f©D6UV\x0015ÙU\x00139T¼\x00179UJ\x0010¹T\x0005UAÄ¨JªÈ­ª¨*"ªªª¼ªª&ò©\x001aªxPÕT5E~UGÕ\x0011\x0005TkÕZ\x00144ÿRX\x0014R\x001dUGQXuVE\x0011ÕMu\x0013EÕËêeQL½¢^\x0011ÅUoÕ[P}T\x001fQR½ª^\x0015¥Ô@5PVo¨7ÄCj¨\x001a*Ê¨áj¸(«Fª"V½£Þ\x0011qê]õ®(§Æª±¢¼\x001a¯Æx5QM\x0014\x000f«IjHPÕdñª¦
jº.*ªj¦¨¤f©Y¢²­f*j®+\x001eUóÕ|QU-P\x000bÄcj¡Z(ª©Ej¨®¾P_\x001aê+õx\}­¾\x00165Õ·ê[QK}§¾\x0013µÕ2µL<¡V¨\x0015¢úQý(êªÕjµ¨§Öªµ¢¾Z¯Ö\x0006j£Ú(T?©DCµEm\x0011O©mjh¤~V?§Õ/ê\x0017ÑXíR»Ä3jÚ#¨}jxV\x001dP\x0007Äsê:"ªKêh¦®ª«âyu]]\x0017ÍÕMuS´P·Õ¯¢¥6Þ6ð_\x0004ÏÅX
KÑ^,¥kïas}\x001fufc\x0005°Î$á1\x0014ä\x0005yAàÅyqrD\x001díÝ\»­Ý<»½ÝBvG»#)»³Ý²Ø=í\x0014i'ÙIÕN¶)JåWùé\x0001UP\x0015Ôk¼°*LÙTQU²«âª8åP%UIÊ©J«ÒKQe(FÅªX¼§¾<åQ\x000f«)¯zD=BùTEU\x001eTUeÊ¯\x001eUR\x0001õzL{+ã\x000bÁÿ\x0016VO¨'¨j¥ZQQÕNµ£bªê@ÅU'ÕJ¨DH%UwÕJ©\x001eª\x0007VI*\x001eRÉ*Ê¨¾ª/U\x0003Ô\x0000UÔ SCÔ\x0010*§©aT^P#(^R£èa5Z¦\x0004õz\x001eQãÔ8ª &¨	TQ½¯Þ§Jê\x0003õ\x0001UVSÔ\x0014í¯§©iô¨¡fPUõ¡ú\x001eS\x001f©¨£æPu5OÍ£\x001aêcõ1=®>QPMõ©új©ÏÕçT[}©¾¤'Ôbµê¨oÔ7TW-QK¨ZªR}µ\-§\x0006ðOÂÿ5Ô¾s
=¥}ç:j¤6hïù´Ú¤½mcµY{ÛgÔVím¨íÚË>«vh/ûÚ©½lSµ[Çfj¯\x0019Ï«ý:f4WÕajwÄ·TWÔ\x0015j¥®©kÔZÝP7è\x0005uKÝÂ¹WøþQ<|m	m[6kÅZiv\x0007Öõ­õ-ñ@j D°j°ªöÃÿ=Ö§}à¿­ïßÖç[_\x000c¬¯¤Ùm±.\x0003ÿ¶±ÛØ1»«ÞÏG²<^Ô¶Q\x001eªD5¨\x001e5¦æú~¡«Þ¿÷Ó;Ë4&Ó,Z@_ÒRZEh\x0007í§ãt®ë=±\x0000ó"úè\x0015\x0014ñ*ÒÞ\x0011ý&G¼´OÄë:MÒÔ\x0000¤I\x0011\x0003ö\x001849â
¤}"ÞÔio-7\x0004iRÄP¤½#ÞB\x001c1\x000ci\x0011:MÖr#&E¼´wÄ(¤É\x0011ï í\x0013ñ®Nûh¹1H"ÞCÚ;b,ÒäqHûDô'®K\x0007kì\x001d1\crÄh}þF&`ä½"&úyß×Ì$_3\x001føìkf¯©¾F¦ù\x001aákd¦¯\x000f}Ìò5ò¯9¾Fæú\x001açkd¾¯}|âkd¡¯O},ò5ò¯ñzü½"¦C#³¡\x0005S#_ø\x001aùÒ×ÈW¾F\x0016û\x001aùÚ×È·¾Fø¶ò¯¥¾fùùÞ×Ìr_3+|üàkäG_#«|¬ö5²Æ×ÈZ_#ë}lð5²Ñ×È&_#?ù\x001aù\x001c\x001aù\x0006²\x0012\x001aY÷75²Å×ÈV_#Û|l÷5ò³¯_|ìô5²Ë×Èn_#{|ìó5²ß×È\x0001ßV\x000eú9äkæ°¯#¾fú9ækä¯¾FNù\x001a9íkä¯ÍÐÈ\x000ehd/,åøßÔÈ9_#ç}\ð5rÑ×È%_#W|\õ5rÍ×Èu_#7|Üò5rÛ×È¯¾Fîø\x001aùÍ×È]_#÷|¤ú\x001aIóm%=¬\x0019ÂqXX3\x000e\x000fkÆ\x0011¾fÎB#¡ÐH±\x0014ó\x001aM¿qÖJ°\x001d|h \x0012\x001dE'ÑU¼$zÞ¢xU¼.\x0011b¤x[\x0012ïè»àãâ8)NÓâ8+Îóâ¸(.Ëâ¸*®ëâ¸)n\x0012ÌÿQbÛÙv}éæ×¹¢¾¨O\4\x0014
Iö¢\x0003Y¢³èB\x0001ÑSô¤ H\x0012I\x0014!E²Þ	ô\x0015}É\x0015ýEòÄ\x0000ñ&Ä\x00141\x001e\x0010KÅ\x0016\x000e=\x001cz\x0018§\x000c1äXù¬\x0007­üV\x0001« UÈ*l\x0015±ZÅÌÈtnát=¼_ÉãM2eºNøìÄ?$û\x0012¥ÍÙHÔ%dE[æ
`Å­âäÞW/|Ýh+ÝÊaå´rY1æÝwZö?¯Ë©0e±¢¬\x0007,Û
XÒ
Z\x0011c¹g,ee±"-sÞeé±
Ô4u¸õ¨U<«ºU.K b®/\x0016ÏÄ\x001a±V¬\x0013ëÅ\x0006±Ql\x0012?ÍbËiÜ9bnqù]³øD|¢õ½Hh?ª5·Z_ï¸¸ðGës´Ô'ºt©X&¾\x0017ËÅ
ñX)~\x0014«Äê?c´>WÌÕ­Ï\x0017óÍ\x0013b¡ný3¡½³îá\x0016Ýº\x0019i½\x000cEÿi«2\x000eèì¸¯3Sï/Z\x0017ê\x0019kÐõìî|1½ICh(½EÃh8Ðëúm\x001aÿ.ú.¡÷ô*\x001fGãi\x0002M¤÷i\x0012} ×ü\x0014JÓh:Í ô¡ö\x0000\x001fÑlCsi\x001eÍ§µ?ø\x0016Ò§´>£Ïé\x000bí\x001d¾¢Åô5}CßÒ\x0012úNûeô=-§\x0015ô\x0003­¤\x001fµçXMkh-­£õ´6j?ò\x0013m¦-´¶ÑvúY{_h'í¢Ý´öÒ>íc\x000eÐA:Dé\x0008\x001d¥cÚã tNÓ\x0019:Kç´ÿ¹@\x0017é\x0012]¦+t®iotnÒ-ºM¿Ò\x001dúRè.Ý£TJ£tmÆ?Í\x001bógx\x0013þ,7åÍøó¼9oÁ[òV¼5¿ÈÛð¶¼\x001doÏ;ð¼\x0013ïÌ»ð®ü%È»ñîüeÞ¿Âgò½|\x001fßÏ\x000fðü\x0010?Ìð£ü\x0018?ÎOðü\x0014?ÍÏð³ü\x001c?Ï/ðÂáøeáò+ü*¿Æ¯ó\x001bü&¿Åoó_ù\x001dþ\x001bOáwù=ÊÓxºvAæi{!,a"("ÄÓ¢±xF4\x0011-E+ñ¢h#ºWÄ\x00101T¼%qâ\x00031U|.¾\x0010_ÅbøNl\x0015ÛÄvñ³Ø!~\x0011;Å.±[ì\x0011{Å>±_\x001c\x0010\x0007Å!qX\x001c\x0011GÅ1«²UÅüßVk§µËÚmí±öZû¬ýÖ\x0001ë uÈ:l\x001d±ZÇ¬ãÖ	ë¤uÊ:m±ÎZç¬óÖ\x0005ë¢uÉºl]±®Z×¬ëÖ
ë¦uËºmýjÝ±~³R¬»Ö=+ÕJ³Òí\x001d%«Ë\x001aòqYSÖµå\x0013²¬+ëÉú²|R6OÉFòiÙX>#Ègås²©l&Íe\x000bÙR¶­å\x000bòEÙF¶íô§þtÒ.²«|I&Ên²»|Yö¯È²L½e²ì#ûÊWe?ýé/_\x0003ä@9H¾!\x0007Ë7å\x00109T¾%Éár\x001c)ß£ä;r´|WïÉ±r\x001c/'Èò}9I~ 'Ë)rª&§Ë\x0019r¦üPÎ\x001fÉÙò\x0013¹P~*\x0017ÉÏäçò\x000bù¥üJ._ËoÌÿ~ßÉ¥rü^.+ä\x000fr¥üQ®«å\x001a¹V®ëå\x0006¹Qn?ÉÍrÜ*·Éíòg¹Cþ"wÊ]r·Ü#÷Ê}r¿< \x000fÊCò°<"Êcò¸<!OÊSò´<#ÏÊsò¼¼ /ÊKò²¼"¯Êkòº¼#)ò®¼'SeL\x000fRÉ9r®'çËå\x0002yCÞ·ämù«Ó×yÕéç¼æôw^w\x00068\x0003AÎ\x001bÎ`çMg3ÔyË}Ííï¾î\x000ep\x0007ºÜ7ÜÁîî\x0010÷-w;Ü\x001dátßvG¹ï¸£ÝwÝ1îdw;ÕæNwg¸3Ý\x000fÝYîGîlw;×çÎw?v\x0017¸¸ºÜÏÜÏÝ/Ü/Ý¯ÜÅî×î\x000fîJ÷Gw»Ú]ã®u×¹ÜÜ-îVw»ÝýÙÝáþâîtw¹»Ý½î1÷{Ê=ãs/¸WÜkî
÷¦{Ë½íþêÞqsSÜ»î=7ÍM÷Èc\x001e÷gy¶\x0017ðNx'½SÞiïwÖ;ç÷.x\x0017½KÞeïwÕ»æ]÷nx7½[ÞmïWï÷âÝõîy©^\x001e¢\x0010\x000bñ\x0008Y!;\x0014\x0008ÉP0\x0014\x0011rBnÈ\x000bB*%\x0014\x0019Ê\x001a
=\x0010\x000ee\x000be\x000få\x0008å\x000cå
Åròòò\x001e\x000cå\x000f\x0015\x0008\x0015\x000c\x0015
\x0015\x000e\x0015	\x0015
M	M
M\x000bM\x000fÍ\x0008Í\x000c}\x0018\x0015ú(4;4'474/4\x001fß>ãl\x001fgì\x0003ù\x000c®=(NÎ?\x0014õt|ß%Ôñ}h.ZÐ>ÑZ¼@\x0007\x0010M\x000f\x001e¢\x0007\x001dÖ\x0011ï
:"Æ±tBL\x0012è$"û)Ä­Ó[g\x0010·Î"n\x0013ßoé<"ÄE«¢U\x0011Nà¹íØ\x000eµ#íH\x00163örcÓì¬ñì2ÎÛo8Ã);s\x001fx\x000eg£sÃ©{[·ÏÕÑþ:EPN*¨c~C½\x0003¬#À
íõ%Ü¡ÄÕFP\x000bAïh");åq×ëü\x001ewÆ}îF\x0007ÜÍÈîÑÔ\x0014ÔûOï\x0000J¿=r÷\x0019¾{@ãOî![Ü#\x001a·¹LMÍ´¨²\x0016U\x000eÓ"ÚJE«¿G\x0013¡sk£q½r3dAI$J²f(É\(A	§\x0008=k±zî*póß*óÊÄym^\x0004¯ËëÅâOísÆQÀùÖù¤sÕ¹ªÛãö|þóÿPÍ\x0018aÿÿ¯ÿ;\x0011ÖÄÐ¿\x001a7ÿ'cfl/;ÊÎò5\x001dLä¬¥cf\x0003D³§ud\x001a8ÙLÇH\x0013\x001dÃ±±Ã_ýÿI<üÇhøÿ\x0019\x0001ï.ÿ¯EÃ?¢tü¾?*V×»\x000f³÷\x0008ï<Ì¾£Þyüæï;îê]ÇózÇ1\x001d{\x0019zÇ¢­ö9m©/\x0018»ü=vòn\x0019ã¦\x0017éeõ¢¼\x0007¼h/ÝËáåôry1^n/×Ëç=èå÷
x\x0005½B^a¯WÔ+æ\x0015÷Jx%ÿ4Ú\x000eýóx«"£Ü¿\x0014u\x0017þcÜUYT¤Êú\x000fÑw½»ÁÝ\x0018¼ùO£ð\x001e\x001d÷¹\x0007ÜCîßã±Ê®r &_ú?FåÔË*§Ê¥bþKÑ9ClöRÿ\x0017¢sCÆY6}+\x001bÃS4kÄP!|ç^µf\x001d¨\x0014ëÄ:QyÖu¡xö\x0012ëF\x000f³Y?ªÀú³	TMfÓ¨5ûm£¶¼'O¢×y2\x0006ñü
\x001aÎßäÃèm>¿Ccø»|,MÀ·ç\x001fð\{{ÜãO\x0017¢\x0019"ZDÓ\]¤y¢´(Kß8QV"âïDÄß»·ÝÖ,k\x001b·³ÚYYNû¶}å²ïØwXb§°Ü\x0001­.'0"ð\x000eË\x001bx70\x0015\x000cL\x0008LbÅ\x0002\x0003ÓX©ÀÀ\x0002V6°0°U\x000e|\x0013XÇj\x00066\x0004¶³g\x0003»\x0003»YëÀ¾À\x0001öBàPà\x0008k«÷\x0006©¬C ]ï
\x0006Ë\x0004Y-ÊÇØ``Iöc°t°,[\x001d\x000bÆ±õÁ`\x0002Û\x0010¬\x0018¬È6ïÏØ¦`µ`5öS°F°\x0006Û\x001c¬\x001d¬Í¶\x0004ë\x0006ë²­Á\x0006Á\x0006l[°I°	Û\x001el\x001alÊ~\x000e6\x000f6g;/\x0004Û±_]]ØÞ\x0008}ÛÏö9mvl¿ÓÁéÌ\x000e:]$vÔIvÙ\x0005\x001dg§°:ÎþÀné8{¥¹ÜmÁ¥ÛÊíÇÛx3¼ã|`èÐd¾:ü|¾\x001b]o\Z±>çû8*QÀß{\x0014Õ{x]>G\x000c.Ò»9HMn¹[®sôÇ<eSÒVSÑá®\x0002« Û|=¡K}V,6MÂS6\x001b¨\x001dcç¶óØyí|öv~»]Ð.d\x0017¶ØEíbvq»]Ò.e¶\x001f²ËØeíX;Î.gg¿°l\x0017ÛÍö°½l\x001fÛÏ\x000e°ì\x0010;Ì°£ì\x0018;ÎN°ì\x0014;ÍÎ°³ì\x001c;Ï.°°,q[ü*îßD¸+îT&Òÿ\x000eÏÒC±8N\x001a,üZ!+Î~rê <úciÍ\x0015Ó#-Mæ¹´²ú\x0013ÔZ­¤÷UôÇ¡ªúãRMªE\x001eÕ×\x001fEMõ'\x000b=OÍõþ°µþDQ{ýy:ëO4õ¢$ÊF¯R?ÊA\x0003õ'^bX\x0016\x0016I¹õ\x001a¡¼,\x001fËGùðtÌz½6¢üz½6§\x0002øV· Vj!È\x0012©0)Âz³d*Ê^g¯ë5= \x0012ìm6J²1l\x000cÖ+x2=¤Wð×T­d?RY¶­§8¶m¦ò8oÇÊKÀº\x001eNZãÔéÅ?ÎÂÖøga\x000fiMååq<Nï\x0018\x0013xùm\x0018¯©wõx=½clÌ\x001bë\x001dcSÞl½ïé@\x0001½ãyIï\x0018;#)èrÆëÌuæQ¤ó±³¢ÝÎ\x001eÊîìs\x000eRNçsBï¥û»\x0003¨\x001eC¨°\x000cTBG\x000f©ñãTVûñÝ\x0014§½÷!zX{ð# }ø	zDûñSTAß[¡Ú£JÚ_ ÊÚ§_ÒsdÿªÌ[þ1MþXÊè±äË0¼¢5#\x0012¼¾±0"\x001b#
èý]s\x0018WPïÞ^¡\x0008ËÁ¸B\x0018W\x0014Æ\x0015í,r>×#úÒùrcù1ÆÎ\x0019ç\x001c\x0015u.8Wô¸ÌHË`¤q\x0018i\x0002FZAÇ¿9úþ`¾Ëx\x000c£®Q?¡ãÒmª¯£Rª¾31#ªË»úß¾_9¶ÇÊ1²ÆX÷ô\x0007pÉYgVí\x000f\x001egMXiþCN¯?ÑE\x0015^EëÂhÄÂ\x001cÛÐK\x0000zÐK\x0010zÐûÞVä@;.fÝBÎóÎó¤ôù\x0000Ê¢ï¾Æê¹\x001fïL¡<ú\x001eì\x001b*ì,q~ \x0004}'vª:×;ÔAï!Q7½[\x0018Cýôî`!
Ö±ÿk cý>¹_¹ÿNGðc´\x0014\x0016ð\x001fí]wT\x0014Éöîêaafh!I¡g\x0000\x0001\x0015\x0010\x0010\x0004  b$ç(¢\x0011\x0006E0\x0007²	TDE	¢â IÅY×9"\x00060Á¯ºPD×}»ïß÷Ï;u¨[ÝÃtwÕ½õ}ßíîé®A\x0011p\x0004E@-:\x0014\x0001GQ\x0004ÔCf5@v5Bÿ5A>g`ç ÆÅ®B]£ÝZF\x0017{\x000cU	\x001b{	ÕÅ\x0010ì5äx9\x0001@$\x0019Ò,\x000c£2HÌ:ËM îÛÂ<Ùó9öØ9ø\x001dEîr¤}÷\x0008æÆDQç>È#äw`^ÕÀ:\x001c\x001b®K\x000eü\x001fÑXX;àëY-0Ú>°©økQÝ<ªèHÈ¯{Çá^äþ\x0013dßB8!\x001c\x0002\x0008h\x0008\x0010\x000eÑ\x0011\x000e1\x0010\x000e	#\x001cb"\x001c\x0012A8ÄB8ÄF8ÄA8D \x001c\x0012C8$pH\x0002á\x0010\x0017á$Â!)C2\x0008¨ß\x00157Â\x001eppGZ5\x001c¿º\x000e\x0003\x0016G©\x0006t\x0001\x001f\x0000¶`\x001cðGç\x000fÂA,\x000bµ\x0000¤Õ \x0013îµ\x0000ì\x0004{Á~p\x0018Ôfp
´Â±¹\x0005Çá)x	Þ\x0010ü\x00198\x0007Àeq%\\x0003×£;\x001cèÂÞkÃ±0@v*d?ÊÎ\x0000\x0016ÈÎ\x0004#õ\x0001#õ\x0005£õ\x0003Èú\x0003+d\x00035²pæQ6\x0008Ø \x001b\x000cÆ \x001b\x0006\x001cJÙ\x0018àl>]²Bè²ÈVÑRøÄdSÎer(ËØÁ\x0014E¶I [Ç\x0014Cö\x000bS\x001cÙ^æ\x0010dû\x0012ê¬µ\x0018@û	\x0007:\x0010	Ä ÏãpI\x001fÖS!ÛSÚ\x0001â\x0001ì%AØG\x001e¬}\x0001\x001fÖ~À\x0018Öþ\x0000ê\x0008Ø7SX\x0007á°\x000e\x0002f°\x000e\x0006¶Ô½\x001fÀ\x000eÖ\x0011À\x001eÖP/à°W°\x0005N°\x0005ÆÁ:\x000eu>põ&à
ëtI\x000cýu\x0015:óñ	\x001d\x0003{
£\x001aöS\x0008ÖµL¨7`\x001f\x0019ÔÝLLaX÷2°îc`8ì\x001bT?LkL\x0007Îªéo#!Ï.À`+±Ll\x0013¶\x0003Û\x001dÀ@\x001e;]ÆnÁÌ¿\x001dÎí¯×ó`$ÉÂX×±Dá`\x0014&Gà
\x0011r*ìw0ìÅ\x001e8ZùpJ\x0001ö";\x0013ìCÖ\x0007"ë\x000bÊõ\x0007åÈ\x0006
dýÀ~d\x0003A%²Aà\x0000²ÁLEÊÂ>*Q\x0016öR\x0019ÙZ¦
²uLUd¿0Õíeª#ÛÇÔ ,ì±&²Ö`\x000bòßVä¹\x0002ä¹Bä¹mÈsÛÏv \x0015!/îD+FÛ<·ò\x0007S\x0012¸\x0014\x001aqi4â2hÄeÑ\x000fE#.F\\x001e¸\x0002\x001aq	aè®n\x001aÂ
\x000cÍt FýDz¯+º§^\x001bãC.þz&
H£XA1"KíÚ
\x0018:Ð
¥"Â^'Ù(VPM]!\x0003â\x0010¡0 \x0005s\x001a\x0008GøBq,\x0001&É`
ð\x0006@(Ë\x001b²ÏÔþóÂø\x001c|\x0011gÑòi»iûÏÄ\x0017¢èøºµµUÀ*dmcmgíXÛÀjd5±YÇXÇY'X-D7\x00134B \x0013\x000cB`²>°>²>±>³¾°zY}l\x0008{ìuìõì
ìLv\x0016;ÃÎeç±\x000f±«ØÙ¿±«Ù5ì#ìZv\x001dûwö-ö\x001dö]ö}öCöcöSösv;û%»ÝÅ\x0011æ09"\x001c\x0016ÍápD9\x0004G£ÇÑç\x0018p\x000c9F\x001cÃãð9Æ\x001c\x0013)g8ÇcÎ±ààäâXr¬8ÖÑ\x001c\x001b-Ç3cOp\x0008Q $\x0008.!Iô\x0010\x001f<¡@P× ¡¬\x000fC\x001e\x001d*\x0007gÈiáx$díxÑqð0£\x0013Ew?\x0013(\x0013CY8:÷:VA«À$\x0018erË¨bTaRnF7Ôm0WÁd¨\\x0005ê;¬G\x000e±@5\x000e¹{\x0004ÌÙ\x000fbv0Û¾\x0019÷MÌ\x0005q·+ân7ÄÝî»' îö@Üí¸Û\x000bq÷DÄÝ\x0010wOFÜíÍî¬=#\x000eÚ\x001f1õBÄÔÉ\x0014dêTØÏjlêßñèæÁÄOß<ÄB£¡Ñ\x0014Aã(ÆQ\x001e£\x0006ê¹\x0001êùpÔó	¨ç^H£LîÏüèèM°=\x000e£ÎëÚbJãÿç(þóxì\x001d¸!(R0\x0014)4äa\x0006ò'ü)ü)ü9\x0004ùS\x0002ùü)ü)ü)ü)ü)ü9\x0014ùS\x000eúM\x0006ÿzôl:1èè	¨7¿ÎXjÎ£8ÅP\x0002\x0014§8SÚ×ïrèb¾+\x000bUÉ\x0000
|é\x00089Ð,@LG,"ÙÅ×à=øôU
\x000cÁ¥qy\\x001d×¡9Ñ\x0003èAô\x0010z\x0018}6}\x000e=P%Ô	MBÐ!ô\x0008\x0003Âà\x0011&ÄpÂ\x0018A"¬Ñ-1p$f\x0012D0\x0011JD\x00111Ä,b\x000e@$\x0011\x0014b)N,'V\x0011kõD&Mä\x0012ùÄ&b\x000bQ@l#v\x0010;]Ä\x001eb/QJT\x0010ÄA¢ø¨!ê\x0006¢8F N\x0012§³Äyâ\x0002q¸B\#n\x001076¢è$º·ÄûÿÝUþ¿{.ÿî¹Ä1q¨ùé\â\x0013ä|ë¿uO9 qkÐ\x001dÀLê^¯wÕüË{d\x0006î£ÛÀ-ñ\x00039{ÿ\x001ag@ßr^\x001c¼Åº¡F7ÅÍáØÁunø\x0004|\x0012>\x0005\x0007B¬¨·º¦õ«B]Ç\x001a\àV~,æ,ÔU¯ÁºFöËb÷Sq ® ýPÜþX¨«i\x000bìË\x0014È\x0007?\x0014Øç\x001fË_\x0015È\x001f?\x00148J?¨|_\x000eü©À\x0012þ'%öWÝûc¬õc\x0019úSQû±|í_ÿñ¢-üïÜÄ\x0000Ø\x001dÈ£ ×;Bíòíé'ÔPck±lýlÃva¥0ÿ©Æê±ã0\x0003º]ãG¢k½ÿnmþ\x001fÕnÿIýËó\x001fýgG8ÐdSy\x000ffCå\x0002ë¤Qö@]ã\x0000@\x0007æÑ8dû,ØÎ\x00069°\x000b¨·wo\x0017\x000e\x000eWÔ\x0013`Ák¯t¡w`¼\x0003ïa»\x001b|@ù	¶?^ØîÃ©7à¸\x00109:Îmazj*\x001bù7.Þç!Ã\x001c\x001bÀ%a[
m\x0019êý\x001cWåa[\x0001Wm5\x001cfn¸\x0006õæ\x000fÈ±:°­ëÂ¶\x001e®\x0007Ûú¸>F½ÑÄ\x0000¶
qêM<\x001bñ°½	ß\x0004ÛñÍ°½6\x0016=ÅÕ	£ÑÆÑ¹Ôsâè°¿t9º=õdCúXFw¤ûQÏé¦Áv8õV`ÈÕ	°H=1¾¾\x0014¶Óèõ\x0018õã\x0006ØndBdfâ0ÄÃD"0 \x0012)\x0002Hèn\x000cî\x0011Y¯hh\x0003l7\x001eíãP©\x0002B	ê\x000c\x001aT}(Ã¨,i÷ÿÆ\x0019y\x0006Çü¿þ2÷»\x0006\x0001H\x0000¤AÀ _\x0002¤A\x0000Ò \x0000i\x00104\x0008@¿û\x0000H\x0000¤A\x0000Ò \x0000i\x00104\x0008@\x001a\x0004 
Ò8R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012ùö|§(RÏgDk1ÅlR ¸!¢æÖ-
ñ\x0002b*\µ\x0018\x0007Ç&E\x0018t=ËÑ1ÒÁÒc\x0000! 0ÃP'9Ô\x001f´FaR²\x0002º3
sÃü±ÙX\x000c\x0004Ñ ,\x001eþQw¬HÕA\x001b\x0013t«:¯ÝûJo!MEª´ºuÉü\x0002¬\x0017)\x0010j$\x0005´=\x00054\x001cà8×\x0018\x001ebÝ\x000e±w'{$:à:Rtàh\x0001\x001d\x001eW\x0002:LÚD!\x0006\x0017èÉãC¨\x0005&5ÙovhXtH|L4O$¨Â\a À¨è@\x0012©@­aq¥\Â\x0002âbfÇ\x0004Ç«ØÅÄÅÆÄùÅÁo¨ÊÔç4®ì÷Ï½Â¢\x000c<ãý¢bUÜílH%\x0019QÞpÒ4ãXLæ\x0016ÉýÿÈqH\x0016õ9K³q³ãiýKJÑva±¡Aq*c<íUì=]G\x0018106s\x0018nàÀ#Mx¤z\x0014~Ù!Ï ¸¹a\x0001A¤\x0000¨
\x001e`êS\x0002\x0008Rp=\x000b\x0017\x0000­³x\x001d`?}\¾PãÛ»^L«×;Ð°bq¸³¯£ç&\x000f%sÏÔCO_ÑÈê·wCý#ï[¶; mØFKý¥ì}\x001f¬Û?°ÝY©Ñu\x0002I±Õ\x001fÙþ!k$\x0018¬äUejö\Ú	\x0005óîÐÕ\x0011'¾*]Z:S2çÞïMgyµïôbªhÀM¿ê¼#?:-Õ¬ª»`e«ÒÞmn2NÃò4vtíº9æÀÅ;Ú´ñ6MÛÅÕY!6E>NNmF'®{\x000eï¢,d¸lºÓ\v«`÷ä5%ÊÎ\x0012\x000fîÚ
"|KçßZå<lÒ\x0003\x0017¢Ws-«7­~[ë!÷Òkê\x0011Ñ){\Ô;Äip\x001am\x0017\x0000\x00118"tR\x0011\x000e©"\x0001Õ¸¤B´èm¶­Ú\x0014k

4æ¬]BHQ]HNT7é¹áá\x0010Ëê\x0018ýiî§J½ò&ÓJ1Òú\x0007e!\x0017Òt*\x0018[`f\x0017\x001a\x001f\x001f;ÂÈ( .Ò0ê\x000c\x0003b¢b#Â¨µF±q1s\x0002âg\x001b
¸ò"r"\x000cJCø/¤7	ç%.\x000cÐxr\x001céømÄÓF}ÝABBÂ¯v\x0010\x0014÷/¶\x001cOr©ãÕ\x0014¢Bðë&iÌæ#hßYU\x0012ù¡ode¬ß·\x001a½\x0016\x001b¿ø]ìeÃÒæñÊ\x000e*\x0017;
\x0017:ÊÄ\x001e?s"pü)±ÞW|>ù_Út&ÜìÁqUÃ³sOÖww:]}áÖ ¨e­¿"²íïø;*Â¶o&\x001f\x0010ñ,
þ|BßjúÆ´ÌªT£*ßV¿xG¤\x0008h)G\x0016\x001fØ/j-^ëà×U>aKói\x0019ç§Þ¦½Êçó?6ÊÕ°.<÷.ø==TRÍýM×ZfÏªgÅò7|Þ¿Çe>¿å7Z³Åï¬h\x001f<L_O6fÊºËkå.\x001f\x000bk?Êµµ\x0008x6/Öâ0ÍÇñ_VÊI\x0015K\x001a¹c\x0017ùõ5å+\«$\x0005\x000c\x0000QìÙ \x0014k~Ñ3/ÅýY\x001fB±æÁ£Æ(¶è\x001fÁ
mrXÿ¤W\x001eüy`gXH4Ü*c*|ÇC`fFóx|\x0012\x0016~0û¾HÆÿ#Ç÷õsÚ|þh¾ü°Fðüä$©ÏÃ|?Ç¥ë|»='=Û¡jûi\x000c£\x0011ÆJë\x0012?.Ø­,\x0000\x0007ç;B;åðâX^÷'!Å®¥¬>µèÂ®\x0010ËcZ²´ß	eÚ\x0004´?¨ZÙÁÍ7½c\x001eë\x00153²}½\x0008éÔP·Ìã{²{vtÂ\x00155'KU:v¾Õx7\x001es^~ñÖº\x0017W\x0013{W}ÜçnYûr©ÎÑcK*Ö^-Ó»äõÉô÷³³Ö?Vêk\x0015qz1snü]ñ	_c-ã·\x000b>"úeÁ¦ÇS\x001f,}w5_LyõÎKd\x001a®Úª\x0008N|q,æ®7ÎQuä÷4jlÃö×yJÖòÊ<:ùMM;ýâ\x001b\x001a%Ã\x0011YÐ\x000f7\x0014Ü\x000c\x0010óx&\x0018©´Apuúªÿó¾\x0016ÏûB\x001a§_l©)©jâæ\x001eÔÇC \x0016í\x0018KÚóDIv?µ\x0008¹¸¹{ðLH>µHçêñIÇ×\x000b0'MüMü\x000cL,üM\x000cLøÆæ\x0006æÆÃù\x0006æ¦¼`?>`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=î¿4&kKbbÓ\x0011ë\x001c}\x001aJty7ßÅW¢û¶ùåÞÑûK>ÔvÄ\x000eÃ¿@éï|÷·;z]¡.\x0018í\x001dýI¥¥·\x0015?k:'üâ\x001f4ÿ\x0000,\^i÷ò$\x000fué\x0018¤r\x0015XÇÌ\x0014,v\x0007ãª×®ã­\x0001Þ{\x000bÚX´²<DÏ@ðÞßì¶vþÈkñéå8LðÑ;\x000fMíöì¡©ÂÒ\x0000ÃzW=;ùÿ\x00008ë£þfNÚK{§\x0003±\x0010CÐ\x0000\x000b+\x0002\x000eÀ</p><p>¯\x0013°©9è=¯ì¦\x000eÓn35rçB·\x0006þÊ{NÓös\x000e¾\fã#ÌÇ¯MÁý\x0008/Üqê=óÁÿ\x00008Ye\x001brQ ê\x0004J¦ë\x0016`>ìæ#ÿ\x0000\x0003Ü`ú²Ê¼¢\x0007é.>Å@\x001dòJ¿ª\x0007é(ªÊ>ü[j>Kÿ\x0000tIläYïYxÑd\x0013Nßä¿\x0004@S²\x0003ï@3a\x000c½ìè&\x0004Ju[\x00119-¶ØæÇ&°Á1"SªØñÌùm´~Å2²ß\x001dö\x001fpÏ\x0003yûó\x0002ûó"õµ
Iù5(6HÓ² ì?\x0012w$ñÓíL¥äÈwä\x0000å\x0011Ü\x001f,í\x000eÐÉ¯\x001eCî\x001d\x0000î	Ì0\x0007\x0015ÈNj]b®wßùÆ\x0015Sæ»\x0012ÍJ	éîL\x0012</p><p>~5ú3´ö8\x000fÎã¿éÿ\x0000¸z¯eÿ\x0000Æáþwû õ\x000fîÏÑúó¬ÿ\x0000ÎißG-öl¤\x0019#FaQ°vPµï¿\x0013/ü\x0010r\x0003\x001czÈó¯¹ß{k\x001cãÔDñ#õ!´¡³\x001f|ñNy3æé®lUÙ±WfÅ][gQ!!*9\x0010*@®ä
ªrQ¢EòêÊ5{òêÑÏ³>YÒ<µ§F¾_\x0008m¥\x0001ýU<¦äÍÔm¸ô éUö>\x0006\x0010ü½p\x001døü^dþ)ú/²ôØpc\x001e\x0005pìoÅæX½Ä#|}sj\x001fóºV¥y-ÛÝÜ,rÈïé AÇ'b\x001baZ</p><p>­in_`ðåÈfg0	'VÖn¬÷<¶Oc±d¨hWS|è¢×Se\x0014 É<ù6\x0004\x001fUeÜ=Ã&¯«Tþ¢\x000cÚcìîÎìmåÀ$:ÌñOà
ýØÃC¢ì½åÀ\x000f|Ï\x0014¾\x0000þ¦eë¥iíÓ9ßÿ\x0000ç1l4ðÑh0=Ì\x0004²\x001c_0¿Þ7Èþy£í\x001foqcÛ\x0004LÏó¥éËê?ì]F»Û,pÛ\x000cL|½1ýgìVK-»g|ïù©~b\}oUÊÂ¡\x0017¢ =FÃçÔÓâ'<´{S7hË,¯¸r\x0003Ü?\x001eoë»C.º\Y
÷\x000eÜ\x0013x X\x0005\x0014g ¿ç\x001d¿ ì¿2`UÕec\x0004rÖ\x0008Ûb\x0000$»u\x000bñ</p><p>\x0005¡;×¶öSÙ}¥\x0013)<"\"\x0000ÕÐ\x0007sÝ¿G«ös°!¯Éì
p¯kßæ¾¼0\x001e+×Ç=ÕçoÊ­'ó
mÓVÊ¶Ü½ $t\x00000PÀð`Mx¯¾Û\x001e¹ì=£Ø¸;DDe_\x000eæ<ë¸àú~»²°ëxFA|7[Î»îJ"¸h+ÄõÈ)Ñüä\x001f×L×§3\x001c</p><p>x\x0007,ÿ\x0000viü\x000eÍÐs\x0018bGy¥öÙu\x000eGÌb\x0007ÏGí²«Êi¿áF­ÿ\x00009Må/\x0015³Ëp\x0017`¶ð\x0007ËÔô×î4Ì\þÙè´ûDÊUÒ\x0011ÿ\x0000à\x000e>oj´¸v2þ¬â¸W®#õÛæsÈ_¿þmk{8\x001e\x0018 ,å¤#3\x0000:) \x0000\x0007­{S1öÚHö¿\x000ca\x0013\x0018ÆÍÊ¬·GÏû·GipÆ1 FÎüÉ>äÊÎÌÛTRsÍ¹Á¼r?6*ìØ«³¤~RùøþZjðj¼KÆµIPuhÜQ©^ãí
Æà\x0003µs}Ø}§ü9jÀ±!ß\x0013±ýnç²;Cò\x0019£å!ä\x0016¡s\x000f®¥~ìú·c¬h6ack{Ûw\x00151·\x0016*ÊCñ#\x000fp\x0008ëGãÏ¦íl{\x0018dèhüÁÜ\x0017Ý1æÁÚPØÆq=
\x001f°î\x000b\x001c*öÇ¸9</p><p>¹ÿ\x0000mò+Ø(îi<ê¢ÂP\x0006jgìîqôó\x0003ì:Ù{5¤;ì¦?ß+\x000bé:rü\x0006\x0017\x001dOÈÿ\x0000õ#e\x000cÀ\x001azt§9\x0005~a|r\x001b³»\x001fÔ<8Ëú>¹ýRý
^.³7\x001c\x0011>^©ÿ\x0000¾-ñëcR>áKüçÿ\x0000¹óò>¤«[Xb{0ðjl¨{ $Új|9æ¾Ð{_=x8±\1õ?Å?pòù\x0005Û^ÓKX\x000e<w\x0018u?Å/Ô<+[\x0001\x000fÄÛÕcò³Ïùm«A«*ú\x0019+"
#¬\x0007¸­G¸\x0015Û9NÅí3Ù¹ã¬\x000b\x0004wÄ/;ÙZó Í\x001c`lGx;"®!õÔ®}f}\x001fóL¨ôï,¦\x001b©ìFô#fG_¡>°vÆ\x001e1Ë§ãpGÌ>ñ\x0019aí<]'	~=àý¬p¶o\x00023Í>`ÿ\x0000/°¼¾}-º\x0013^\x0012F&\x0003Ø\x0010Ñ|ê}Îp:¯ø\x001fâ¼y%\x0001Üb'ú`ñbñÌÞ9â8ÿ\x0000LQéªö?\x000eòïüáÎ¥°Tºè.å@\x0010¡ñåBÍO]¤ö\x000b\x0006#yg)×M >ò~ÖÝ7±¸qïRÐ?IûV¾¨Íö@\x001f\x0012þoþ~Ùy\x0002Õ|¿äã\x0010\x0001F \x000cp®õ\x0008z4øÞµc¶/nûO³à4ú>\x001b\x001b\x0013\x0011éòïÿ\x00007\x001f¶= \x001e\x000e¬lHå\x001fwãûk31ç-®xKI¿ôïbº¸bÔ\x001dØñ\x0002ÄÔç`ËY#)\x001fâ\x0004¾_%LJ_Î\x0004¦ì»\x0010<3ëwç¿\x0016å«ùøú°4QwfqP´ëÖ»~ÍOLú_ÚMTpi2H¸3=|þO½öî bÓd$ó÷Ëf7häQïú³æ×å\x0017ç-ïåEÏ8«-£ß[¢ò¯\x0017\x001e4ß£W·v\x0017oäìØõ@ýP¿´w\x001fÁ|s²;f}+\x001bÄýQý]Å=¹µ\x0017#}cFô\x001f=ùoóÂÓê¥¢8«ZÎ\x0000OS½GóÆM;6{¶´´¹\x000e\x000fL¯9Ðø~üß`Á¯Óv¼8vó¾¡ðý#æ¼2Z\x001aî=Ær½sþpãF¿Éeqql§ý×UGú¥o½9ÍO°:|á)Àwm!öïöEØÜ37	J>[KïÝ\x0010£ \x001c~x~UùgòÃËÆÚ\x0000\x000e¦^3\x000cõCÌs%E\x0000@º(PxþÑßKí\x001fbèû/KÃ\x001fïlpnrÜ^ÝÕ}+WUÛ¥ìý?\x0008þòÇ	'ÔwßáWÒ¾*ö\x0012\=OÙïá\x0013þqGË\x001a,zZê|dÔO$¸vûqü[ _ÙR \x001a·ÜþÈÞ{\x0013£Ó#,(åÜLqß¯ØíýÒà\x0018HÑÉ¸<ã¿/!÷¨j2?.'ìöÉWæüãæ~ 5In%C\x001a£ª*ÜkC¿CCO
l{gÙ<}©Å2M\x0000@\x0000Ý{ÜîÔön\x001d¡Ä214\x0001ªéïS·¾6ëÄ\x0000p\x000eù\x0001å\x000fË\x0017:	)þì½xÿ\x0000À|\x0011¥OSÙ\x0007f,|òÈWËÓ\x001f±«\x0017³ú=\x0008âÉGÏ$|¶\x001fcm{,û/à0\x0017ç)¼½å\x0008þ¯¥+]º*B¾+ì]ÛýE|«[íF8q\Èä"8b>'ô\x0002×ªö«O¦\x001c8ýdr\x0011\x001c1ùÐ</p><p>èôçvÛç×<Sùùë«þgÖ\x001b\x0010ÚT\x0011m\x0015BmÐ¹?\x0013Ã]ÂònØö?jm#Ã\x000fæGÇ©û¼7í>ÞÍÚ\x001bHðÇù±åñïülÛÙ­¾ãsãOË/$\x001fÌMZßH\x0012¬"bÜïEU,h;±\x0002<}³]Øýü£8oìù\x0001=¶p{3Cùì±Å|7×Ü/æ©q/ ¥ºÓ>¬ù;òKòN6j®Ð\«Ë¹-'4àÕ"j»|!ióÏ£´\x001dEX"	ïÎòâ\x001c'VÝÔû¦²1i1\x001cQ\x0004ÆWÅgscò®Ìv[£¦CògÉ~HP×Vö±Ó~WSr¯¹\x0012¿\x001a}\x0014ÍXö³ô"ç\x0018\x000e·WþìÓ®\x001d¢Ò}Qó¯ýÑ¥_­K/B~ý1þvù3ÈÈc´Ýh(\x0012Ò\x001aNÀÆ¼>ö\x0003\x0004½¢ìý\x0008¨J\x0003Ë\x001coýÈ¯µ\x0012í½\x0016Te\x001ft#ÿ\x0000\x0012)ÂÒYºôä~wÿ\x0000¾Óo¬®-4»[XÞ5yB"\x0002À¯*+³\x001aV´Ú½6ëÏhûwxå\x000cP$\x0010\x000c¨
Å^ÄA®öÃ\x0014á(ã e@o·BQ1i\x0008,E=³çÖxäéÖlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]H¿&ãeþ£ÄÛ<C·Ægï\x001fp~¬öKüG\x0017õOû©1ßï\x001bç;4/^Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»\x0013fÉ\x0000ª¸\x001dä¦L\x00066\x001aà	®xå±\x0013H-9a=Åí3*8Ñl×Nå7Z;æ\11%Yi\x0005»djïV§|Î\x0016$³\x000b</p><p>½³yëóïDòK/.A\x000fî£\x0005Ü|øì§ýb3­ìÿ\x0000g5\x001aÁp§ùÒô·Áêû/Ù]gi,XÏ\x000fó¤D#öî~\x0000£®u;-\x0008ñ¸sþU\x001cáÓéÏ&~cÎ[>©\x000b[h\x0011¼,Û\x0019äãÈ\x000fòT\x0012\x0001÷$ÓÃ=\x0013²ý\x0018åÅWðÆëâv}_°ÿ\x0000àiáLOW! ?ÉÂè2ko ÆuÌôÌzz\x0015cþìjT\x000fa¾ùâû»¹/äi§fy\x001cÌÄ$õ$ÉÏO\x0004\x0000\x0011\x0000\x0001È
tÅ8¢#\x0010\x0000\x0002\x0002\x000f(V¹,ÄÔjIÀù6Õ<Ø«³b®Í»%>DÕl´å×f³4÷B-\x001b,M!\x0005¸«\x0011F4Véá\x001c2\x0011â£WVëaÚXgàâr\x0008ñ\x0018\x0002\x000cl\x000b#â\x0016\x0004Ò»çÕùöþå?2YÎòYDþa²Í7ï\x0018Âç÷rB­ðÇÇtn#hK|`\x000e»°¡`ì8ÇS¾ÞOÎßðVÔktÙ"\x0006I
>AB1ô!ÌHÍó\x0017·Éf YO_çÖØ¿7¥±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015?çå\x001f+ j6þq²_~æî\x0004è¿\x0003õÐPû§9ÂööC ë±÷¿Tÿ\x0000À·|RÑÌïÕú;¾ôßO({tÏzÎ\x0013þkÿ\x0000ÊÔò}£Nü®ì?Ñ'ñ>\x001e\x001fõ£+ó5Î²u>>!|ÆÇàøÿ\x0000ü\x0010;\x0017ù/]>\x0011PÉûÈÿ\x0000õ\x000f­\x0005w\x0017¤çÀï·ÍËæÈ\Ø«³b®Ï?óô/=º~òÔMDa%ÜÊ\x000fR\x000f§\x0015}¿¼úsö7Ó\x000fû¥?à?Ù øÚ7\x0015'ý¿Þ¦ruo£>Dç\x0018ý.fÅ]\x0015vH<µåMCÎW\x000be¤[Mw;t\x0018ÚFû\x001d½úeñK!¨O·\x000bW­Å£\x001eYÆ\x0011\x001ddDGÚµ&çlì_ó^cüÒ­µ¿0Å\x001d¼wSz)\x0010<ªÜ\x0019Ç0µQP¦b|@ÌíGgäÓÄJ{YªêòÝí~¶3K\x0006\x0018GÊ\x0016#µÑëÜ¥\x001dÂÊh½³Õóì¿>\x001d\x001f_½Ð$jG}mê íê@YGo»6ýf\x001dâþOÿ\x0000Ás³|m6<ã9ðêä\x001f®!
¨%T7}½Îñù9'Í»6*ìk(~¢¸¤\x001av;\x0014;6*ìØ«³ÍóþYÿ\x0000\x0015ù\x0017Y·QVØÎ¾Æ\x0006\x0012ÿ\x0000\x0002§5}§\x000cü·{¯aµí\x001c\x0012ègÀÏ\x0006\x001fyDZ·\x0017\x0019ù§Ï.~ñd\x0019ô\x001fþ}·æÓ¡ùÂM5Ág*S·8OÏ°ús¤ì\x001c9k¼\x001f³wÅà±¢ñô#'\y"~\x0012¸\x001f¼ u\x0004ªWÀçÞ\ô\x0017ãä6*ìùÌ¶þUno\x001bM,Q\x0016ì­+Jû\x0016`>g+É@Yï\x0003ç³¤ÒKU#\x0018nDe*ï\x0010\x001cGì\x000bytÉ\x0006Xá-Í»6*ìØ«°£CÑ¢òü\x0002ÒÜR5,Tx\x0006bÄ}ää!\x000e\x0001AÉÔj\x000e¢\ræjþ\x0000\x000fÐÛ\x001e[á¾MÆk6*ìøÿ\x0000?Aÿ\x0000Kÿ\x0000¶yÿ\x0000Òg\x0007í\x000f÷þ¯é/Õÿ\x0000ð\x001fÿ\x0000\x0015Ëÿ\x0000
ÿ\x0000y\x0014ßNû'ç2rÏ¾&9únÿ\x0000XÔJù#Dÿ\x0000 Ä½kö*Øý\x001d3Õ;:\Xaî\x000fÀÞÙbð»CP?Û$~{þ=r(ççû6/\x001a¡\x0015v~{¿çá2\x0007óõØ\x0006´¶´\x0007çé\x0003üsÎ;oûãî\x001fsöü\x000bÅvl?¯ýÑOl»\x001f3$Í\x000bë(¼Ø«³b®Í»6*ìúÿ\x0000>¹³ç¬k\x0017\x001bü6§M¾)	ëþÇ:ÏgªGÈ}ïÏðb`Á\x001eü?(×éKu\x0013°ùçÚ<î_\x0012Ø«³b®Í»6*ìØ«³b®È×õ¡å½2óP&W·Zÿ\x0000¨¿U|\x0011'¸\x0012çè4ÿ\x0000Í\x000cÎcþ¹\x0017\x0003?'×7\x0006íÚVêìXüÉ®y\x00016þB<\x0000\x0001ÐS&éàlvlUØ,\x001d\x0015vlUÙ±WfÅ]\x0015vlUÙ±WbÖ÷/hÂHÁ¨e$\x0010}ÈJ"B±ÜXO\x0018È*@\x0010y,/FòRA\x001d\x000849ß<ÿ\x00009/æ\x000f*qIf\x0017q</p><p>|3üMOi\x0005\x001bþ\x0008¶r:ïetÚ­Àà=ñØ|¹}Ïv§°Z-mÇÂ~=ú^_*fZoo,h²\x0011*ø>çþ\x000b¯ß\õÇÿ\x0000ç.4sZ{)Ovø£¯úê*?Ù(\x001eùç]¡ì^l;ã¬Ëi|è|µàuªÒ\°ÖXùzgþþðg6>t±Ôþ\x0019ë÷â3Õ:7 Õ£YíeIcn\x0019OÈFyþ}\x001c±\x001e\x0019\x0002\x000fq\x0014~×Ìs`	pÎ&2\x001cÄù\x0014ò]!.D2MGÞ2]mª×¾k§ªØÕæNØ}o©W¾bK\x0012m]i\x0005{a×þ\x001cÇðÙZKú/âé'sôió6\x0007\x0015v\x0005¼¸úºW¿l³\x001c8Ë^Ið\x000beþGòÉó]ê[\x001fîÇÅ)ðA×ïè2*Mslê_mÇ\x0018\x0004AE\x0000\x0000\x0007@\x0006ÀdN·ôWêVk3Oû\x0018p{ä\x001fÍ?4ÿ\x0000¯Q\x001aÁ\x0005Q|\x000b~Ó}û\x000fa\x0019C{Ìób®Í»	uvû#æs7L9¸zÈ=ÿ\x0000ò"ÏW\x0007²¢\x000f¤PÂ\Íp\x001fFá°¢æ¯P}Ldøãós6±"ØH×þ\x0016¿Ç\x0004f3\x0007fÅ]\x0015v#snÑJ\x0003#\x0018\x001eàâªJa`êhA¨9ä7ùZO*Ü\x0018¦&©üWÀûÿ\x0000~dÄÛ\x0013oaÑµeÕ£æ6q³\x000f\x0003ãò9Ü¿+u±©Øv5\x0003ÄüNêÑÌnÓ1L\x000bÍ&Ös \x001f\x000cý=ó¥S ÁåqÅ]LUÙç}f&ü¼ÕÖê!Kyw éÄ~¸ú2ñê
ÃÔ\x001edÃÌf'þñ6¯¸è~=	\x001ce\x000eª@ øÓ(iyÃ)BAØ¸üUnlUÙ±WfÅ]\x0015vl\x0014®ÍØ]¬Gë[L1¸ÿ\x00008B¢lÛ¨|\x0018~¼óÇå\x000c5\x0002§ö¡j}\x0004\x001c¿'&ùòzW\x0013¸>\x000e?QÃIÇøÌ¡Fë\x0013º!SøãÈ#AÇþã´²{¸?ðÇúg NRÒó¬UÙ±WfÀ®Í+³dUÙDW</p><p>»(®\x001bWcp«³b®Ä§ÑFsÙIû*¾5æ@\x001dÍ3É\x001eJ>¶©l|f¯ë9.ND¹=\\x001c-$\x001e	OÕ¼ÌG\x001dâù°+³b®Ê#
«±¤S</p><p>»+</p><p>»6</p><p>WfÀ®Êf\x0008*v\x0003s[\x0002»\x000cóN§ÎÚáÆ\x001fÿ\x0000Q6QôíGÒ\x001bÁê§ô\x000e#èåxÿ\x0000²n¹éb+ÖÒò¬e)WfÅ]\x0005+³dUÙ±WfÅ]\x0015vCõ#Yjïê²sÔ¡¥~bg[ÙþÔjtQà\x0004J=\x0004Ç\x0015{âäÓF{ýÉ¥¶±-¨â\x0008#ß|·åu­v@<6þ½\x001eÜç­á\x000fö_­£ò1ï(Áæ);ªþ9"Ñüi¢7«\x001aqÑÔa÷i{G¨×Çd\x0008õE_¿©r1éãpºÕe»\x001cXÐx
²U³æÅ]\x0015vlUÙ±Wd\x0005õ4ÉÈ¸ÿ\x0000Á#á\x000e_\x0016cÅØ+È¿\x001dï¥ÞXg|Ú&\x0003ñÉC,|þs²\x001a:eMNÈÇ-
íÊ¿h/!þÄ×:Ïeu\x001e\x0006®\x0017üW\x001fôÁÃÕÆàèòúS-z\x001d¾ü1×¯EÎ­m©/÷z\x000cÿ\x0000Å¨G\x001fASíÆÒ\x000exä%ð;\x001f½å»</p><p>^\x00198ÏðÊQùú>î\x001aÀÉÞ)\x000fÜpß<\x001díXîlUÙ±Wfë»\x0018E1Web®Í»6*ìØ«³b®Í»\x001aF(!ØÜPìØ¥Ù±K³b®Í»=íù
ÿ\x0000\x001c\x0018?×þ&r\x0012|SÚñ©{£þä;;\x0016Eå]\x0015vlUÙ±WfÅ]\x0015vlUØ\x0007Qþïé\x0019ªú~.Â\x001c×º§fÅ]KOî×åL|¹Ãô`±½Ù±WfÅ]y©_\x0010F)\x0006³åtÑ\x0018YõRGÜi?IDñ\x0000{Å»\x0013ÀÉÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±bìp\x0018¦Å.Í»6*ìØ«³b®Ë\x0002¸«±ø«±ñÈÐ°t$0 ::\x0011\x0014XÊ"B#ÍØY&´¾BÔG\x0011\x0001°¼"
ZØ\x000fãØN«ÓzüTèÕþqN/´4\x0004\x000e\x0018ó\x001e¬R÷sý\x001e^çí>Í4!\x001eq¹aq\x001b\x001fÑåî}³ùm­ÊûÐÏï\x001eÖ¦}&ä;ªnÐë]¶ö¡ý\x001fæ\x000f-ÿ\x00005\x000f©ÄÜìn«hõ®Çröüv=òþÅí\x0001W+Øé9=ÚcQ\x001döèGóeûX\x0007ãÿ\x0000«£\x001dt§\x001dWM"\x001bô¥\x000b Ùd#ÅO_\x000fÀeç\ö¯sa¥vX\x0015Â®ÇôÀ®Í]\x0015vlUÙ±WfÉR»	µ.ÛëÈRákµ9\x000e¹\x0004róçÞ\x001c|¸#>«Ò/?65_Ë)Dºd´NA&øïNÇÝhsÌþlü¼»ò£\x001bk$\x0000ÔHµäë\x0001¸ùôÌ)b0ýn$±\x0018þ·êäÿ\x0000üä®ùÁ\x0010Ó¯8[ß:ñ{i¨c£q\x0019?\x000büâö92òGæÃ)[]TÔ\x001a\x0005¸ÿ\x0000_þjûòüyú\x001f~<Ý\x000bÃ>ÿ\x0000ç\x000ecdÕü \x001dAi,{\x001eäÀOCÿ\x0000\x0015¿þÎz	X8¨Ü\x001e3\x001cÇæÌ±4,QÁVRA\x0004P:2ðªÌÀW</p><p>»\x001e\x0006\x000bWeàWfÉR»\x001c\x00066®Ç`WfÂ®Ï9þp\ú±ÇüÄþ|\x0003t\x001eä¸ÀïüÏú\x001ayË&óDµ¹AûÈ#\x0004ømÏÝ×ïÀ%º\x0001Ý	¦j¢\x000bù¢cðÈÄ\x000fõO¿\x000f*¼Ò·°þþò?îëûIà=×õdg\x001e¨i\x0001æí Á'ÖP|
ö½ûs¯ä\x001aØ^8.\x000bWc°R»6I]\x0015vX\x0015Å]¦*ì¼UÙ`W\x0015v8</p><p>b®ËÅ]\x0015vlSNÎ}ù«þÓÙ\x0014Ñæ"1òêßßNN\x0002Ë8Gåk?­Ü=\x0013â?ÃñÎ\x000fä'ôÎ¡\x000cDUCsooýt\x0006dÓÐuë¿©[;¤q\x001f3¶zñß,{TýÙÐñÀ9\x001a\x000cñj\x0003©]\x0001ÔË/üI¿·2Oq?è°ÿ\x0000ª¨g´øñØvÌV\x\x0018¢ÝÓ³bf¦*ìx\x0014Å\x000eËÅ4ì\x000fvÜcsà­ú)TU÷\x0019â>»æSkÝ)Lõ¿\x0013mþ¡üXæ<¹µ\x0017yÖêOð\x00191È¡&Í]¡ØúbvKaû#ä3æÝ÷³þ¼¿Ý\x0017Çu_ÞKúÇï,²\x001f²>C\x0014Ì\x0017\x0015S6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Á:Ú[­¤x¤\x001d\x0019\x0018«}àãË,FâLOx$\x001f±³\x001eIc7\x0012Aï\x0006¾æØäTüÄÖu¸Ä7÷RÆ?eçÒ\x000boôæÃ7jê3\x0019äqésröl¢¥dw\x0019\x0013úTÖ\x0005MÀ\x0003èÈnjr®lUÙ±WdË>j½òmÀ¾Ó&hg\x0000¨u¡Ùº\x0010Aû³7G­É£\x001e)\x0018ËqcÏÞåéusÒË\x0019á<¬yûÖI\x0018QF\x0017jzúÔïwví,Ò±gv5,ORNQ4³HÎd\x0013d­9rË,¤I$Ù%µP¦\x0000ÊZaöæÿ\x0000,1N¹ÝS\x0014ùñ"¿Nfiµ¹t¦ñÎPþ©1û¬\x001a¬sxå(ÿ\x0000T÷,xÄh\x0003k^`¼ó$¿XÔ'âZS®Îià\x000b\x0013AíÓ#¨ÕdÔË$¥#ß"e÷±Ï¨sÅ9\x0019\x001eù\x0012~öÑ\x0004{(¦\x0014f+»6*ìØ«±ñÈÐ°t$0 
\x0008#¡\x0007\x00085¸H5¸w\Éù¬Ì'Ô/\x0019\x0000 Sq)\x0000|¹S6gµu\x0012\x0014rä®î9~·`{G1\x0014rN»¸åúÔ½\x0005\x001f²>ìÜ\=Ó\x0019%bìz³\x0012IùÙLÌÙ$òàJFFÎþõ@)Ó\x0011È±o6*ìØ«³¡yóc]ò²\x0008l/î#~Êsää¯ÉGÐ3w¥í½NV<\x0000r\x0017cäl;}?kgÓä\x0007uØù\x001bP{dr\x0006\x001e]þ~yôQõ)Çú¼Pýè£3'í6²|òËáQûrgÛú©óÉ/\x000f¸\x0005¢Î1û#9©¬Üëz×³K<öävvûØþmDó)ÊR=ò&Gít¹sK1¹#ÞI?zº M¦\x0016å
+³b®ÉFç}WBOJÆöê\x0004þX§\x0007Ü¬\x0006l0vl\x0002¡q\x001dÑ£÷\x0017;\x0016».\x0011Pâ;£">â¦Ñ+õ\x0000ý\x0018\x0013TóEþ¹_®ÝO=zú»ÿ\x0000ÄÊókrçúç)ZF_ykËªÉë¥ï?ymcTè\x0000ú00ÜUù±WfÅ]-.ä°fÚ9\x0010WRU\x0011¸#Ädá3DFàD3Ì
A\x001cÙ¢+±Å/õ\x0019µYZâêGW5gv,Ì}Ù'%,²)"yI?2%ñHO2MµÊ¡v\x001b`<©­¼Ø«³b®Í»6*ì=ÑüÑåêþºÞ¦§Òãß§ì5¹tÿ\x0000ÝÎQþ¬~â\x001c¬:¬>J?ÕÜV4jÿ\x0000h\x0003ó\x0018i{ù­j+ÂãP¼|\x001eæV\x001fqc\x0019;WQT²ä#Îr?yohæÉ´²Lûç#úV\x0011z(û²\x001eÌ\ÔîOSÂm×j¹X\x0010ìØ«°ÓJÖî´'õlg\x0007ÛâÙ\x000eÝ7R\x000edaÔO\x0001¸JQ=ñ&?s~,óÂn\x00121=ñ$}ËY\x0003ìEpÛZóÖ«æAÂþöæu\x0002dØ}ÄÓ2u\x001d¥S¶Lîý.F}~\ûNr¾Dþ©</p><p>Çö@\x001fFEs\à*fÅ]\x0015vlUÙ±WfÅ]\x0015vX%MG\Rì\x0011=ì·B;0\x001dýyd²J\É>òÊS2æIh</p><p>`l­y±WfÅ]Ú\x0007/¼­'­¦ÜKnç©Ù+ìhw\x001eÆ£34ºÜSÅRþ#îr´ú¬sxäb|\x000b\x001e1&Ì\x0001Î?ç üÐ\x0017é\x0019iJ}ë÷ñ­}ë\Þÿ\x0000¢eW/S¸ÿ\x0000D:ª¯\x0010üêPúËÍó\x000bWóHá¨ÞÜLÈò±Oø\x001añü3UªíLú­²dq¯']¨í\x001cÚ§9Hw\x0012kåÉU XþÈ\x0003!Ù«uÊ¹±Waµî½w©E\x001dµÄòÉ\x000c"Fò3"\x000f\x0004RH_¢S,De)\x0011\x001f¤\x0012H\x001eày9\x0013ÔO \x0011\x0003$=ÝËB\x0005Ü\x0001S9ã®ËV(j6#¡Â
$\x001avLaüÅÖ­ÑQ¼Xÿ\x0000\Ê\x0017î
LÚGµu\x0011\x00142ä\x0003¸NU÷»\x0008öx\x0019']ÜrýjF\x0004;ñ\x001fvEn®ä¾s,îÎíÕ'æNù­ÎCr$òmÁÌÍIï;ª\x0001N¶ªO¤¿«i,=)Ê6(Ôù©\x0007'4°1=à~ÆXòË\x0011¸\x000fx$}Îe
±ß%rþgëÓ\x0002¯©ß0=Aºøllje±ÍþVOõ¹Çµ5\x0007\éåúÔ¾®öGÜ2\x001duy%ó\x0019'vw=Yc÷ÕÏ!ÈnDÞMºùÌÌÙ$=Õ@§L\x000f°o6*ìz9RA\x0006 #¸Â
n\x0012
;&ù­Ç	µ]FðDváõ)O\x000fµÓÛ¦mkêDx|\ÝÇ/Öìiç\x0003ÄwqKõ©z	Zñ\x0015ùd2iáÈK1êI©?2sU)\x0019\x001b;\de¹U\x0002E³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Ï¤_?ñÀ²ÿ\x0000Q¿âm!Û¿ã3÷¸?V{%þ#ú§ýÔÍï÷óÎ\x0017¯BæÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WblÔÉ\x0000ªµÀ®ôË\x0000b\x001aá]ÅÍ2øÁ	Ý­,]ßS¾fC\x001b\x0012Y]Ë¶E¯5JfÃ\x001e\x0016\x0004³};EåÛ8æ7ç.ù{\x0019mB`$"«</p><p>|R7Ék·Í¨=óªì¾ÂÍ¯5;uÚ#ãú±ýÔö¼«\x000cvë3´\x0007Çô\x000b)åÝÍ¯Ë\x0000{(ÝÈ]³çÇæWüäæ«çNVö\x0004ÙZ¨ûÖ\x001få8¥>KOÏcì¯d°èêSýä¼Ç¤{ë~ì\x001fø\x001féû>§÷³ó\x001eî_È<ßZóä÷õØz1û\x001füÏo£<ÔÌ\cRw$çr\x0005>¤\x0005l\x0018)<·8Ü)k6*ìØ«³b®ÏS~Lÿ\x0000Î\x001eù«ó£ö¶ÿ\x0000T±mþ·uXÐò\x0016äöâ¼|XfÛKÙy5\x001bC¼¾yÛþÝè»\x001aã)qäÿ\x0000SÇR?\x0013Ê?\x0013~HinÖ.õ>\x0003>´þLÎ\x0006y[ò¸%Ö ¥oÕ¸Qé+</p><p>}7QþÌ¹÷ÎÇKØøðn}G¼òù?7öÿ\x0000ü\x00125©qÆ|\x001cgø`}DyÏÊÉ¯ZMÃ;ÿ\x0000çå\\x001f[½òëª¯«\x000fî
\x0005#?&\x001e\x00000\x0000Óöj:\x001cØêôã>3\x000eñ·¿£Æ{=Û2ì^=@¿L½_Ò¶Ø~j\x0010Éé0lüëþQ~dj\x001fó~eUEeÒfê\x000eã¯\x0019¢=«±§\x0005=³ÍtÙå¤ÉÅÜh½ûs·;+\x0017´\x001aIb$\x00118B]Ò«¿\x001d\x0013éc\x0013­<zgéÊÞfµó¾­§H%¶¹eÇuaQò=ê
Aß=O\x001eA	\x000eDX~</p><p>Öi'£É,Y\x0005J\x0004ÆCÌ1æR¨Ãü±Ã[\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vy÷þròá4¼¡©éyL°4öþ>´\x0003Ô@=Ú?Ùf·´pxø¥\x001eµcÞ7{?c»Wù3]-ÔL'ýYúOÊïà¯m'¦àçÉù÷_æÇø#Í
¡\5-µhý1S°¸­\x0011ÿ\x0000d\x000bÇîY|3ì=Oòß\x0011ÉúCþ</p><p>]ùÝ\x0018Ï\x0011êÀx¿Ì	|¶?\x0002ßÅÍyw\x0019÷«=	øñ%Í»6*ìø-ÿ\x0000?(¸i¼ë\x0012±Ù4Ûp¾ÀÉ3~²sÏ{xþ÷üÑ÷ì?ø\x0013D\x000eÏ'¿4ïý,\x0007èN´ÿ\x0000±ôçÏÌç\x001fhGgsüªÿ\x0000oóGç+)Ñ,dh	Þæ_Ý@\x0007¨Ô
òNGÀf~AQô»ÎÁä;gÚÍ\x001fcßd\x001c_Ìª!úiF[©Ï§?ßóí\x001d+Cãsæë¶¾Px+\x0014\x0000ø\x0017þòOîÇçW¦ì\x0008Ç|üÁð.Ûÿ\x0000Öl÷\x001d$\x00061üùÔ§òúGû/z]. [e\x0014Ï¢Oò\x001eù}n,´KH-!\x0014øb@µ§BÄnÇÝ9ÒâÃ\x001cB¢\x0000÷>%®í,Úùqæ§.ù\x0012~]ß\x0004\x0003¹v5Ï0Î{yOüQäKé\x0015A{7åIì\x0011Â¹\x001fì\x0019³UÛ8¸ð*/}ÿ\x0000\x0003moå{K\x0018é1(\x001f±ö²n.=öÏ_¾|?^hÒõ²Ücê?Tÿ\x0000Å.}9ä6p:<Þ\x000eHË¸ïîêýkí/fÿ\x0000)hòáæe\x0003Ãýhú£þÈ\x0004âdõ\x0014lýG«\x0006\x0015\x001b²þ}1Ì¼UÙ±WfÅ]\x0015vlUÙ±Wa/4dó\x001dÎ7÷w\x0010É\x000bm_D*vù\x001c¯$8Á\x001dà¤Ô\x001d>Hä\x001cá(È{âAý
©âk{û'ÓfÚaI#vF\x001e\x000c¤>ñ?!Âiý\x001cÅdä@#ÜwdÀ×:ïüã¯ÿ\x0000Á>nÒ5"h±ÞD®kOCéµ}¨Ù¡Éáåó\x001fnÏ5íVóº\x001cØúr#ß\x0011Ä>Ð§:sR=³õ\x000b®þ1ÌØ«³ÏßóZcêÞHÖ¢¼Å£H¤u\x0006"$\x0004|¸×5Ý£\x001e,2÷_Ëw³ö3(ÅÚ\x0018	åâ\x0008óéW¶4qóÀóßcó·ÊÖ¬¬\x001aò1è^\x0001×Ö\x0000XÞ¢ñÃâ éìíWæquä}á³Û.ÂþEÖO\x0010\x001eëÇýItÿ\x00004Ü~\x000e¹Ñb;vÏFfÍâ\x00143b®Í»6*ìØ«³b®Ï\x001fóô\x001fùH´¿ûgù=&p~Ðÿ\x0000y\x001fêþý_ÿ\x0000\x0001ÿ\x0000ñ\¿ðß÷Môï²~yó+9gß\x0013\x001cý Î\x0011ß}{È\x001aGù\x0011Ê?i3Ó»$Þ\x0018ü~òü1ÿ\x0000\x0004\x001c|\x001d§ÌÄüá\x0014ðRC¬Í»çhlØ«³óµÿ\x00009ít·^Ôx×áKe5ñ\x0010¦y¯lÍ/Ü\x001f¶ÿ\x0000àk\x0003\x001eÌÅ}LÏû2Ù</p><p>F>ñÆi\x001fPEæÅ]\x0015vlUÙ±Wg×OùõN¿pk·ÔPx\x001aý`¤P}ùÙ{:>³ý_ÒüÕÿ\x0000\x0006LâÑÿ\x0000úf\x0012½Hý§>¼gfüÒæÅ]\x0015vlUÙ±WfÅ]\x0015vyþs\x0013ÌCË>DÖg©\x0006KAHñ1ÿ\x0000\x0012Í_jO\x000c|ö{Ïat¿í\x001c\x0011î\x0011ÿ\x00000\x0019~EªòqóÏÍ^ys÷{ Í»1Å\x000eÄñbìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®É7|å¨y:O[L¸\x0006®ü[á?ë/CôÀÕèqjÅd¼~UÚ\x001d´#Ã\x0011ó\x001bqæ\x0013\x001d?VJnVîÈ}Çæ:\x001cõ×?ç1&µã\x000e½\x00071ÓÖfù´dÐÿ\x0000±+þ©Ï:í\x001fb#-ðJ¿£._?Öøçkÿ\x0000ÀÆ2¹ig_ÐÉ¸øHoó\x0007Þô]3ó\x0018=\x0012ú:ÿ\x0000~?Â,ö6t¿; }6å%4Ý+G\x001f44a÷gkû\x001b6ÖHçÌ|ÆÏöbj{0ÖhJ>|â}Ò\x0016\x0019¹µÖ×««ût#æ\x000eùÓ¿Kü=sCàîé-\x0007ú\x0007ãé83ô\x0005óÍY±W\x001d²3që¾Ý\x0006Ã6xaÂ=î³4ø¹õÿ\x0000å_Ã¶BYE'Þ!e~íÏ¹ÆY[ýaèz
Î\x001c³á\x0008Ã\x000e"üÊóGøfÅfMTÄWí7Ð?\x001ad§5nÑñ¦lUÙ±WfÅ]ýXÕÀöÍmñuú¸}?ù\x0019\x0000K)äîÓSþ\x0005GõÂ¼Êq\x001eÛvÂª3Uêa'ÅßßñÙå\x001füAqn9ÅæX«³b®Í»\x0008<ÍåøüËlÖÒlz£+v?×Û\x00084i1Òµ&Òå\x0012¯N<Gy~ÂúëÉ7ÆXÉWSÑö=Aús &îoV¸·^wV\x0015SÜ\x001cõfªÇ­ÛÇu\x0017ÙqZw\x0007¸?#äSI\x0014ò+ÛF±¢~ªiý¸g\x0008\Ø«²\x0005ù¡þ°r¢²CûÅú>ÐúGêÉÄÑg\x0013LËWÿ\x0000Q¸\x0015û/ð§¡ûð\x0007ån³úRÄBÆ¯\x0001âÕ;©þ\x001fF3\x0014Vb\x001el±ú¥Ç1ödßéï&\x0006\x000c_+\x0015vlUÙ±WfÅ]\x0015vlUØÖA *z\x0011Côâ­ÄÔg¼¹sþ\x0016ÕÀeGFù\x001aé\x0007pä\x001dÃ×µ8ÿ\x0000KÙU7,ªÃæ7Éådm¨ê\x00177ÄmFßÝÚ´ûC'&3Ø$makm\x0015¸;í÷(§ë9ßs\x001d¥çyTÃjìm0Ú»+</p><p>»6*ìØ«³`¥vl</p><p>ìØ«±¼pÚ»\x000burVÞj¾ßþ"pMò§úËúóÉÞK[j\x0016®Ý\x0004ª>ý¿dË.Od×#2ÛJ\x0007^'ðß=Ó1gfÁJìØ\x0015Ù°+³b®Ê"¸m]#</p><p>»+</p><p>»#^q¾ý\x001d§ÜKZ\x001fLóo~¼1\x001b²4ÓD·úÕÌiÛ'ä7Îqù3cÂ)îHÜ² >ÀTþ¼RÏ#)óÕÇ'!Ø\x0016?NßÃ;fPÔÀ³b®ÆÉZ»\x001b]\x0015vl+³`WfÅ]\x0015vl*ìa\x0018m]+³dUÙ±WfÅ]\x0015vI´ßYÞÇÜ,R\x000fö/B~æË\x0007"Î<°\x001fï{opße%Bß*ïø`¢\x001a!Ø\x001f^ÓÎw=±ÿ\x0000uÊëô\x0002iøa"ÈQ§a; \x0015mÁ\x0014?#Ç3BQæ\x0008#á»\x0002,SjÜMGQÝîÄztc\x0013õ½"cuo_Ûµ"þI£|Ï¥´ÙaÚ\x0004¿$=CÞ(üÂäÆt¹ÄºOÒ¯\x001dãó\x000cÍ\x0000¸¤¿±0àÞÌ:g@±¼MB$3Up\x0008úsç
nZLÅ.q5û~/o|`\x0016!<&Ý7Pi³	±K,o]]\x0015v4UØÜUÙ±WfÅ]\x0015vlUÙ±We\x0011\QNÆbfÅ6ìØ¥Ù±Wg½ÿ\x0000"\x00054\x0018?×þ&Ù	>'í?øÔ½Ñÿ\x0000r\x001d"òÎÍ»6*ìØ«³b®Í»6*ì\x0003¨ÿ\x0000wôÇÏÉÄÔý?\x0017a\x000ekÝS³b®É%§÷kòÍ.AÜàúC°FZÞìØ«³b®Í»>fùÖÃô^§yoü\x0012\x0001ò,Hü\x000eZý	ÙÙ|\8åß\x0008ýÎÈÎ.ÅÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlX»\x001c\x0006)\x0001ØìRìØ«³b®Í»6*ìp\x0018«±Ø«³b®Í»\x0010»µKøÞaÊ9\x0014£\x0010Î£ß)Íe\x0015ò=Ä4fÄ2Æ¾ ÷\x0011ÉyKÍ\x0017>K¿·Õl[öò+¡ùu\x0007Ø±Ão#Äþ~Ð.|¹pÜµ\x001d\x001dù[?í4`V#ò*</p><p>\x001fö9æzÐt\x0019ÄùG'Õå.¿­òM}ö^¨då\x000c¿PîçúßdùÛPµòÆ¹eæû\x0015\x001f¡¼Å
.cý¾\x0019Ðöª±çÿ\x0000\x0005:]ðÔ¡IÄÇ\x001b\x0011÷ç¥é²ø±\x0012ù¾³§ËâÄKæù/ó\x0017Ê-ä}RãN;¢5coæ·C÷\x001f¿\x000c@Ì\\x0011È«³b®Í»6*ìØUÙ°«±àS\x0005«²ð+²®Ç\x0015\c!A¨#¨9Âÿ\x00000,\x0012UkÝ1(ãwtaÜ¨ì}»öÌL¸z\x0013.\x001e¡ú
ÿ\x00008Ûÿ\x00009a5¬±è>j
EñÏÅ\x0019ý¿i\x000f@çuý¢GB\x001fË¿ÌÑ\x0001tý@þæ´I\x000fTöoòâ?,,µ±a-l^ÿ\x000091ÿ\x00008·þ42ùË }tsÛ</p><p>Rz\x000f·\x001füXGQÑúízM\x0008qQ¸=\x000egÛü¶&8*ÊH \x0010GPF)U°Ò»,</p><p>áä®Ç\x0001L</p><p>ì¼UÙ°«³S</p><p>»<ùyõÍNsÙ\x0008AþÄ\x0001úó"\x001cò{\x001f ô-c\x001e5o¼ç¨4_BÒ\x0018\T\x0008H?ês\x001cóh/'¼ÔÜwrGß+Í3èÒ\x001bÍ3F\x000f «öã>ÝÈùn2ñ;æÚ%|Þ£y;Õôn¨\x001a©û-ó÷ÁXü×Ôu1Ízz|Cýaßõäe\x000bä¦\x001dÊ:¯ÖPdµ4?Êz\x001fÎñgy\x001e¡\x001aÍ\x0003\x0007F\x0015\x000c
AÊª^}4
nÅ$\x0005Xu\x0007\x0004âªY±WcÅ]Å]\x0015vX\x0018«±ø«³b®Í*vlRìu1E»<ßù±«}võmü0-\x000fúÍ¹ü)À6EéþO³ô 2®\x0001ÿ\x0000_÷÷¬<#_ÖßÃ#2%Þu»û\x0010\x000fv?¨\x001cëÚíÇÕ-'ùbsÿ\x0000</p><p>r°ÅXGëLâÊ?\x001cò·­¾µ¨Ú¡ÜzOû\x001dÿ\x0000dKazÖ¹/§m)ÿ\x0000$¿lö\x0016c4¼k6)v`+»\x001e\x00051C²ñM;6*ì°+»\x000bu¶1ZÎÃ¨Ïü)Â\x0017*ÅyJÅõçÇLÊn{qÏ`ù%==6ÔÅJ~ýó\x001a\ÚÇ5Æås/úç% W"J±ÔÅ\x000eËÅiÙ±K²Y\x000fÙ\x001f!6ëÿ\x0000½õåþè¾9ªþò_Ö?yeýò\x0018¦`¸ª±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]H¿&ãeþ£ÄÛ<C·Ægï\x001fp~¬öKüG\x0017õOû©1ßï\x001bç;4/^Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«±6zdUEJàI$ã\x0000Å\x001f\x000c\x001c°¦æê\x0008!?³²åÛþ9\x001b\x0002Y¦r¦ÙÎ<Ñæëo.À÷wÒ¬0 «;\x0001ýO\x001bÙ»Òh§¨\x0001<r4Ú\¹x¢e#È\x0001lîÖÂ;$2ÌB êN|êüÒÿ\x0000¶ºÖ\x000bÚyyL\x0011n
ÃÈÃüè3Vÿ\x0000Tç´öG±pÅSÔzó\x0007Ò=ç¯Ýï~ì\x000fø\x001bÃ
dÕ9sðÇÒ?¬ì\x001eö%¬yøÐÅ`8÷áûGä;~¿xæöú]JFáÚI\x0018Õf'Ä¾z^<c\x0018á\x0000\x000e@lûV\x001c1Ã\x0011\x0018\x0001\x0018@</p><p>\x0003äó¦k/!,Ç©&¤à\±¹O6*ìØ«³b®ÎùYä\x0016üÑÖm4\x0008î!µ{¹=5bB\x0003B@ÛrÍN*;±\x0002»æF\x000f1\x000b\x0002úKÛ=¦;/O<æ2³\x0018óü\x000egÉdéÞ\x0019÷sòSþpgÊÿ\x0000.î£ý'¨-\x000f¯r ¢7pîì[x0é¤ìx7>£ÞSò\x0007´\x001fðDÖvµÂ'ÁÆ\x0007sýis?</p><p>\x001eI,×.Ý\x0006{9T </p><p>¢l\x0000ÍãåÄÚ\x0013\x001d\x001d\x0015v|\x001dÿ\x0000~N|Æa´JZjÊY¨6[è$\x001fìÁY=Ø¿y÷ni|)ñRûß°?à[ÛßÒ<Ï¯	¡ç_OËxû©9°ñ=GêÎÃÿ\x0000>àüÿ\x0000ô\x001dü©Éð¿9´öcÑ¾Ô°øï"\x001e~9ØZÚýÑ÷Çôÿ\x0000·³<@k±U\x001cµÝÊ2ÿ\x0000z~</p><p>wð~Øúsì\x000evÌÉVlUÙ±WfÅ]\x0015vFµ\x001f9éDÂÖîòÚ\x0019)\x001cFkÒÌ\x000eÿ\x0000,ªYc\x0013D}áÏÅ Í<På\x001eñ\x0019\x0011ó\x0001pBz\x000c\x0003Ëq¸\x000brñWfÅ]\x0015v5Ô8*z\x001d)\x0006¿Ì\x001b	¿*¼Õ{
1K§ê2\x0008Ø¯§)hÏÜ\x0017<<N\x000c¿F¾\x0005ý\x0006ìÌí]\x00163=Æ\QâóâKô²8Ïª¢½Æ~*|û\x000fæc¯Û\x0011Âî\x0004åzQÔû«SòÏPÓf\x0019à$:á.ÙìÙvf£&	s÷â(±ùSÓ%Olè9éVfÅ]
ÿ\x0000çç\x001a\x0019³óEý(·\x001az¥|Z)d¯àëøg\x0003í\x0004+ =ñûýoÖ¿ð!Ôñèòcë\x001c¤ü'\x0018ÿ\x0000ÄãN5R=òCÿ\x0000>éü²ò¿æ\x0017×çÖlã»Ô¬¤¢\x0013\x0012ñ¬N
\x0018D~\x0002ÁÔîÁÚË{\x000fO-\x000b®n\x0017ü\x0014û_YÙþ\x001cpÌÃ\x0016A!.\x001d¤e\x001fésª=+«Wò4t¡ 9ö\x0008\x0012ÕDq(TQ@ª\x0000\x0000x\x00003¸\x0002e##gsÞRW\x000b\x0017fÅ]ßÌ_,:h×úI\x0000ýjÖhEzUÐª røüH\x0018÷\x001d§eêÿ\x0000'\x001e_æN2ÿ\x0000JA_\x001bp ø\x001cü¥O\x000b[;FÛ2\x000fÌ\x001ag\x0011Oè¤eÄ\x0001\x001dC%­sôÛÿ\x00008ÃçÁùäý+S-ÊO«$RïSêCû¦¯¹+ËéÏSìüÞ6(*?
ý¯ìßäívl|\x0019«?Xûé\§¦ä{çzÍÇ¨fÅ]\x0015vlUÙ±Wc]Ä`³\x001a\x0001¹'¶)\x0002Ý]üÌÿ\x0000Èògå(®oÒêávô-?~Õð,§Ó_\x0003W\x0004xf§QÚ°ó6{ï vO°zþÓ£\x001cf\x0011?ÅÐ>GÔ~Hí\x001eNÔùçç¯ó\x001fÌ\x0016ÞlÖoõK\x0008Þ+{«©§7§$Y\¿\x0013Çm«Ûló|ó\x0019&d9\x0012OÍûS²t³ÒiñâÈD¥\x0008F\x0004¢b\x0004ory\x001añ\x0000\x001eÃ!ÑÊÐ°t$2A\x001dA\x001d\x0008Ê\x0006ÎÒQâ\x0014Wçê»ò¿Í+ç}\x000bNÖ\x0013¥Ý\x0013SÀ¼jÄ}\x0004»§ÉâB2ï\x0000ýçolhÎS	þ\x000cúY\x0010Æ¤^\x000cGÉÞd:	üÊÒÿ\x0000Mèz\x00153Y\Æ\x0007»ÄÀ~¼£Q\x001e(Hw÷;^ÉÍàê1Où¹ ~R\x0005|g\x0007ß>&ÿ\x0000Ï¼ÿ\x00008¿å_ùùzñøÚjÔkÑnR¾ÿ\x0000gS\x001f»\x0014Î\x0013±5^\x0016N\x0003Ê[|z?Vÿ\x0000ÁC°?¤üÄ\x0005Ï\x000f¨ùã?WËê÷\x0002ßEê/!Ô~¬ûÑüzæÅ]\x0015vlUÙ±WfÅ]\x0012?çè?òiöÏ?òzLàý¡þò?Õý%ú¿þ\x0003ÿ\x0000â¹á¿ï"éßdüóæVrÏ¾&9ú\x000cÿ\x0000y]ýkÈVËþû¹ºNµÿ\x0000vrú:ç£ö!¼#Þ_à¡\x000e\x001eÒ Ø×èHïÅ\x001fè\x0019î\x000cß>LÍ»?7ßóW[óþ¯QN2D¿:Bçö±¼Òø}Áûþ\x0007ÐàìÌ>bGç9'ö`g3Pú*'6*ìØ«³b®Í»>Ïÿ\x0000Ï­ìøi:ÍÅ\x000fÇw\x0002W·Á\x0019?ñ¾ÿ\x0000Fw\x001eÏ\x000fLû?àÅóàt$~r\x001fñ)N¢w\x001f,úkóÚ[\x0015vlUÙ«»\x000b[YµSC4@¿\x001aÿ\x0000\\x0018ïoð&ütÀ×\x001ee±´\x001c¥¹\x0007J´¨\x0007âp\x001cu\x001f6Èé2Oa\x0019\x001ftIý\x000eâN\x0003ÿ\x0000\x001biòÛkÿ\x0000#ãÿ\x0000°xÑï\x001f0ÙüýNéeúà|\x000ex#þ~CçX#ò½¬ÑÈo/¢\x0004#ªF!;\x0013· ~s½»x@\x0003ÎCôØ¿àSÙò:éNQ#ÃÇ.`äc\x001f¸m|uð\x0019ðÇ8\x0017ë¤ç6*ì£\x000b±±vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v/ku%afGSPÊH û\x0011\x0004Å\x0010\x0008î-y1Ç á\x0004\x001e`\x000bã¡!GB
\x000evÿ\x00009\x0013æAbtï­¶ä~úÖ</p><p>\x0001øyõÞµåööûT¨Îcý\x000ci|O\x0013üßá÷×èåäðßè\x001bAâø¾\x0018þ¥\x000eûøGÓäË?Ç7Þ£êoüôøéá_ã×ß;{Sùøó\x0003qè%\x0007S°Ë°Ã´æ\x0008z\x0017å§ÿ\x0000Ä×Ëê</p><p>Ã
\x001eO\x0003O²¿Iü+Ú:§Ù]2Oaoè&ýNç5ygÄ]®(pÆ?þhÿ\x0000\x0014_3¡¬1|\x0011ûwoöGð¦
Ê[\x000elUÙ±WfÅ]ÍPÖO fÇOËâëµ\x001cþ\x000f«$â1éßÍ3ô\x0005\x001fÃ\x000b³%Åzþ\x001aZý¬ÿ\x0000S	>.üÞÿ\x0000Ìÿ\x0000(ÿ\x0000â\x000b3\x001dÍ3b®Ê¥qWeqÅ]*ìå?^L:Ô]¶ZÏ\x0018£(êê?öñ\x001bxe3eÞWÖÅz\x0012Ý±Øÿ\x0000)þ!^pM%Ñã\x001bµQEcÔ\x001f\x0000\x0003m§~jÑMØúÄB¬£â\x001e#Ä|³ÐùKSÍ³b®Ê 0¡Ü\x001e¸«`Ó|óÆÇÈ:Û[¹¤\x00125íÅÍPÿ\x0000±;}ùqõ\x0006ã¸z=Øÿ\x0000\x0010Ø\x0017y\x0013¤u\x001fHß=\x0011´¼ß6*ì®8«±´Å]»6*ìØ«³b®Ï8þlè\x0006Îè_ ýÜÀ\x0006>\x000e\x0007ñ\x0019|\x000bt\x000bÓ¼¨	â6ì~$Üª¡É§äÿ\x0000¤,ä\x0008ÀÊd«¯p)Eú2\x0013c4ÎÌêXQxÑOu¬­­fÁJìØ\x0015ÙT®*ì®8m]Â®Í»6*ìØ)]\x0002»\x0019$Be(z0 ý;b«¸\x0010Glñ\x001cñµ¬£fÈ\x001f5?ÙSÞ"ar£ñ\x0019ìÝ.ôjPGp:Hßxß1^\x001bw\x0001µ£?²Ä}Ç\x0007`B\x001f6*ìØ)]\x0002»6\x0005vlUØÒ0Ú»<÷ù³­Î.> \x001aF+âjMk\x0018ÇVè\x0007¤y:Â3\x001fÖ\x0008øÃ0¯µ\x0006tÏË»\x0001§éî\x000böGúS+å®FË\x0015ó-ÇÖ.¤?Êx£&Ù]1Hs`WfÅ]Ep«±¤S
«²°«³`¥vl</p><p>ìØ\x0015Ù±WfÅ]EpÚ»\x0019]\x0002»6\x0005vlUÙ%ò¡õ.
¹é<REô²ÕáÉÁ9ûÝ;\x001e¹\x0006\x000eÉon\x0006¦ñ_³Äÿ\x0000ã"\x000e\x000f÷Ð7ÓLÞí7¿{²"FFÚÝëÏ6Òi·h¼¥µ¯ª¤¶\x000f*Nz?²]«á\x0013§¡#p=Òîÿ\x00009Öë4Ã0£×oqè~\x0005è7\x0002Rm$4Y>ÉðaÐýø[å;ôòýÊé¨üì®×Ó¥=Ñ¾ÔDÿ\x0000<fªG÷ÍÏ¶]âDj 7\x0003Õç\x001føïÜâvn¤Ì\x0011-¤\x000f\x000cÇt»ýÒæÖìÍÚ}b3Æe÷ìß#W<uÞ±\x001cÝ1W`ËËG¯Ùuä?Q\x001fAÉ\x0010\x001dò(vlUØÒ1WcqWfÅ]\x0015vlUÙ±WfÅ]EqC±\x0014;6)·fÅ.Ï~þF¯\x001d\x0006ÛÜÉÿ\x0000\x0013l|GÚSþ\x0015?óÜg[È¼Ã³b®Í»6*ìØ«³b®Í»\x0000ê?Ýý#1óòq5?OÅØC÷TìØ«²GgýÚæÏ\x0017 îp}!Ø'-ovlUÙ±WfÅ]	ü÷ÓGë¸\x0014\x0013$r\x000f»üW,\x000fµ{1ÄÓD4Ê?mþg\x001dÂõnÍ»6*ìØ«³b®Í»6*ìØ±v<\x000cRì¼RìØ«³b®Í»6*ìp\x0018«±Ø«³b®Í»6*ìØUØ[åý[ü\x0019æK
J´è9ü>?îÉù53öGãb5Ìzù¿±âý©Ðþg\x0004«õ\x000fóyý«?-$?NÕ¼²ÿ\x0000\x0014úy\x001aïÅvWýÿ\x00003Zæþ\x0018Öï´ÊQ\x0018Ô¨\x001f&¨È{;ªñq÷|c·ÜÇÙmgæ0çT}ñÛî¢~fÁþ.òææeÞD
cr{óxÉù®ÿ\x0000N)sÛ>rÍ»6*ìØ«³a¥vX\x0015Â®ÇàWfÀ®Í»6\x0015vl»8WæGå¹¼-¨iëñõ!û_å/¿ïÔoY°ÞáÄË÷\x000fÐùÅßùÊ%Ñ?-yB!\x0004-­Ó\x001d£\x001d£ÿ\x0000'ò7ìô?
)\x001bü»üÈm\x0011û\x0013oÑXõø\x001fòâ?,¯\x0016ZØòa-l^­ÿ\x00009-ÿ\x00008Ã\x001fc}{ËÑªê@r% [Ö«ØKàzIßâ¡ÏM«\x0007\x0001\x0008¨#¡\x0019°\x000esòhZÙ9\x0014«©!\x0010FÄ\x0010z\x0011\x0003\x0012ªXü»6JÙ°«²ÀÁjì¶a\x0018,z
ÏÑ¶\x0007#A+CªÝ3²ÊOü\x0013nfrré\x001a\x000b8BØOÔ3ÚÊ\x0000_
¾ìÄ·\x0015ádò5Å\x0006Ø9«Y\x0000ógåõ¿\x0001\x0000ã³±öaßç×-©2-\x001fÌréd+|qÿ\x0000)íò9Å´­ZûòæèÃ*5øã'áaüÊQûòÒ8\x0008âgWvþfH~ÍÜ\x001f\x0003þ,ô¶«E®Â·6æ¨ßx=Áð#("H§ÞÙ½¤\x0014#ñ÷\x0018iÇ\x0002\x0010¸ìUÙ`W\x0015v>Å]\x0015vlUÙ±dì°+»\x001c\x00051bìFæålãiì¢? +iR(ÌÌ\x0011z\x0000úsÅºëj2Épÿ\x0000jF,~\Ê\x001b7½ÆÚ\x0001j\x0012ôP\x0006z³ÈºWè>\x0018È£2óoïú©ò6Zy\x0016¿wõËaÐ\x001a\x000fÛ\x001bù?Õ´»â¡à\x0018Ç#Íwcõ.£\x001e\x0006¿pÎ!ù[mëêh\x001d¿</p><p>\x001c¶|$ÎüÕ'\x000bV\x001fÌT~5þ\x0019ê +5¼«\x001dÇ\x0014[±Ø­;6)vlUØî8«±Ø­;	|Æieqÿ\x0000\x0018dÿ\x0000!!\x001b¦ï<ë¯ëÏ\x0019(Û2^ÔN{+ÊiÇOµ\x001fñJ~¬Å<ÚKÆ5c[×o×\x001c\x0008¤¿6,\x0015v]1Wd®\x001f²>C>m×ÿ\x0000{?ëËýÑ|oUýä¿¬~òË!û#ä1LÁqU3b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»>~Lÿ\x0000Ç\x0002ËýFÿ\x0000¶xnÿ\x0000ÏÞ>àýYìø/ê÷Rc7¿Þ7Ï:vh^½\x000b\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vQ4Å[\x0002¸>L\x0004+"W\x0002É/\x001c°E\x0008ømùa=ÍÝ3&\x0010C ³±å{ëþ9\x001b\x0002Y®¥ò¦ÙÎüÇæHtdº¹q\x001cQ©grv</p><p>\x0005IÍÎK,²\x0011²M\x0000\x001b0á¢b\x0010\x0006R\x0000\x0001Ô¡XiËjY\x0008UQRO@\x0006|{üãüÙ¹üÒ¿ylÑ·»\x0005\x001br#§6êOo³ÐgÒ}ØÐìÌ`P3?T¿G¸?`û/ìÜ;\x0017\x0008\x0003BòO­÷\x000fèÚñß2kí­ÊH$D§à_o\x0013î³9\x0006t¯hÇ3b®Í»6*ìõäüá¿?;8ÜÃ\x000fÔ´óÿ\x0000\x001fw ª·ücO·'Ì\x0000å×lÛé;/&§z¡Þ_8öÛÍ\x001fbÜL¼Lêp¢Gõ(ýþHY®Ö\x001fsà3Ï\x001euò}çåþ£s¢êiéÜÚÊÑÈ½ª:\x0011â¬(Ê{\x000ekrâ8¤c.aí»?_´1G63q\x0012\x001f\x001fÒ9\x0014B8qQß#Ö·RXÈÀÌ#\x0006GSFVSPA\x001b\x000eàå`ÖáÎ\x0006@c!` ò ®"¹úYÿ\x0000ZüîóßËvú£õØ¿qz´È\x0005ZAG_</p><p>ýõ\x001eÎÕþk\x0018Q´½ïÁÞØû<{\x000fW,Cè¯\x0019þéï/·«\x001e¹ÑjvíÍÄ(fÅ]\x0015vyÏþr«ò|~uyVïKy]Ä>±iµO­\x0010$(ÿ\x0000]yGþË5£¥üÎ3\x001e¼Ç¼=Ç±½»ü¬Rj\x0007Ñúëð5/½´¾\x0003Û¾~n4=jëÊwê\x0016NÐÝ[J²FãfI\x0010Ô\x001f ÇÐsÌ!36 ¿tj4ðÕã9(N&$t"B\x0003(aCÐçé¯ò\x0003óßóËËöºõ½\x0016W^\x00171\x000f÷\é´ò¯Ä¾(ÊsÕ4Z¡©øûß=¦ì)ö&ªx%È\x001b¿\x0003Èþæ\x000b\x001e/EçhÌçQÍ»6*ìóüå^¯êS½ÿ\x0000	ÜÉo{\x0012zE´Ä #FûHÅjT¯ÄHâ>Ök;F33á<öê\x001eßØÌÚlZÜ	áõ}1údG"/¿n½\x0015í\x001cºgæyÞé±gcRÌI$¤½sËI·ï\x0018ÄDP\x0014;!éûÿ\x0000/ÿ\x0000±¿ü´Ôíü·¬Lóè×R,H\x001d\x001bWsDhÉ©\x0011héöEy-\x0008<º>Êí)aÄíî|kÛÿ\x0000b±v\x0019jpÄG4\x0001¡^ \x001b¥Üyô÷\x0001»¶\x0012\x000eC¨üsïfz\x0013ñâK\x0015vlUÙ±WgæÃþs2Ùm|ý­*ô3£}-\x0012\x0013øòþÕ\x0015^ÿ\x0000Ð\x001fºýfà¿æòhj=ãÿ\x0000>ÉüÖúå­÷®[â¾·j	ý!fAì¯ÅÀ\x001fÎç:\x001eÀÔØ8ÏMÇé|þ\x000b½Á<zÈ¨xs÷â~"ÇÀ õ\x0018©G\x001f#W³¯~tK3b®Ï\x001fóóß&CEÓuÄZKÏNµ\x001fðÑ¿9Oh1\#.ã_?ì}ÿ\x0000þ\x0004:ÿ\x0000\x000fQ\x0001þ8	\x000f|\x000fêc§=	_\x0011#ÿ\x0000\x0008üÂÿ\x0000\x0002ùÚÖÞVã\x0006¤hþ\x001cßâéõ\x0015T®sCØÙü, tß©õø%v_ç»>r\x0003ÕÜ6û\x0012OÁ\x0019zÐûo¡¼ôâ6*ìØ«³b®ÏÌ'üä·G¼ã¬éª¼Q/$xÇs~õ\x0007ü\x000bò~/\x000b,ûwý/ß¾Ék¿= ÁîN8ýhz\x000fÛ\x0016EnÜÐ\x001flúaÿ\x0000>Âóç×ô½KË7Åk:\D\x000fòL8°\x001f'Jõu>Ïæ¸Ê\x001dÆþoÿ\x0000Á{³|<Øµ\x0000m8\x001f|
²_b_¨¥\x0008o\x001cúkóâ[\x0015vlUÙÌ¿1?9|¿ùQ\x0017­æ\x000bø-vª£5eoõbZÈßìTæ.}T0}d\x0007}Ù}ªíSZ|r\x0015\x0011ï¨T&ìçÎoÍ/ùùÌ\x0016ü­ü`ÒÀ¹»øWæ°¡©ß§'_u\x0019Ìê= \x0003lcâSî\x001dÿ\x0000\x0002)J¥«É_ÐÇ¹øÊCî\x0007ÞNþs÷gÎÌßùÈï4þn]oQàcþóÆ}(\x0007·¦
NÅù\x001f|æu\x001aüªF»¹\x0007Ûû#ÙM\x001fd×"_Ïªé¥uð¤|vë\x0017AC0\x001e¹[6*ìØ«³ô)ÿ\x0000>ýóqó?-`sW±{cã@ÞªýË Qì3Ò;\x0017/\x001e\x0010;\x001f§ô¿\x0015Á7EùnÑ,þÎ\x0003öÂÒ+åâçß=±×ÊPÉ\x0010J</p><p>¶à\x0011ìqH5»³ò}­Å7uYÒ\x0016)5¥Óq³+Å!£\x0003Ø+?0qÈù\x001f¸¿£:s\x001d^\x0018.3±Þ'\x001fÚÉÆ>c?L\x001f?qþrùnÇ^B=Ic\x000bp£ögOAÿ\x0000\x0004*?É#=OE¨üÆ1/½ø3Ú^Æ=«Éò¸\x001eøKxýk\x001e/EçdÌ×RÍ»6*ìØ«³b®Ï\x001fóô\x001fùH´¿ûgù=&p~Ðÿ\x0000y\x001fêþý_ÿ\x0000\x0001ÿ\x0000ñ\¿ðß÷Môï²~yó+9gß\x0013\x001cû½ÿ\x0000>ÓÔ>³äùà¯÷ZÂéÉ#o§®z\x0007`Êñ\x0011Ý#÷\x0007ãÿ\x0000ø,âá×F_ÎÅ\x001f²R	. >?£>gJø¢\x00076*ìüéÿ\x0000Îvùf/yóPpB]§¨hÈÑªì{Ñ÷\x0019æ±Ã4¯­\x0011ò~Ýÿ\x0000Æ®:ÍÄ#Î\x001cPî"DýÄ\x0014úÉ¹ öÏ\x001fæôäVlUÙ±WfÅ]\x0015v}Êÿ\x0000bÙz>T¾äÔä\x0000×¨X!\x0003ñ-÷³â±ý/Ð\x001fÿ\x0000à½[wa\x001flæj'â\x001f,úE;á\x000cØ«±\x001bÖÕ\x001aY\x000f\x0014PYè\x0000\x0015'\x00014Ê12 \x000eg`ìü¦þ`ù²o:k\x0017Ú¼¬Å®î§îvõ\x001d\x000f\x0006v\x001bggÊrHË¼ó/èeè££Á\x0010\x0002¡\x0008Çý(\x0001Æ\x0000\x001e\x0003!¼ÏûòiA~Qb{¿\x0014Ó²«Ó²É'®+NÊÅ.Í»\x001aØ±-\n(w\x001cØ«©\x0015l.lU¾9±V¸æÅ]Ç6*î9±WqÍ»lU®9±WS6*à3b­ñÍµLØ«TÏptÏ@/ÒzW¦Eo.>°äö\x001b\x000cÚâ\x0008uYgÄ_hþ]y_ü/bâIGæFËþÄmó®)§ÛúïSÐnr\x0019§Â=ìðCû¯Ío4ìL1\x001aMqT_\x0010¿´ßÃéÉ6k]ä<Ø«³b®Í»6*ìj_Þ\x001fÍ\x000f¥Öçú]þN­4÷O×3!Æz\x001aZýôæ«?ÔXIñoæïüvn>Qÿ\x0000Ä\x0017\x0004f;\x0017æÅ]\x0015vlUÙ±WfÅ]\x000bóCÉW'Sµ_ÿ\x0000|£±þïï¾]	tlz\x001fu¿P}VS¸û\x0004÷öþsùiçS©\x0001§]\x001fÞ¨ýÛ\x001fÚQû'Ü\x000e##8¬\x0007Í\x001a\x0017Õ¹|\x0004üCÀÿ\x0000#[[</p><p>ÊÅ]ó_@úý²ÞÆ>8~×º\x001fèwûòÈ\x0016q,¿Ê\x001aÕå07Ù~ë\x000fëO!yüAdæ²ÇðIó\x001d\x000fÒ?FB!IgtïÑÓ\x0003ào~G·ÑL\x00146*ìØ«³b®ÆñÅ]LUÙX«°·WÒbÖà{YÅQÇÒ\x000fb=Æ\x0010i Ò*Êñì$\x0012ÆhAÿ\x00001d²oËíK¸¿Æ{ýÛ|¿ê
ÕÄ\x001e­pùÖ«Ô¯³\x000eßÃ=V$\x0001pEGÈæ;CÈ\x0019x\x001e£\x001dµ\x0015vl\x0014®Í]\x0002»\x001aF\x001bWeS$®ÊÅ]\x0015vl\x0014®Ï yÞ×êzÊÅû-ÿ\x0000eG\x001eOiÐ%õ­b?äÓîÛ;ïå}ç×4ÈÔõ>ãQø\x001c£'6óy× ônØÿ\x00000
÷ìÎW!l\x0018Þ7</p><p>»6*ìØ«³`¥vl»6*ìóæ$\x000b}­G\x000ca</p><p>u£\x001a\x001a}ù\x000eMÐäôï-Hmì^Eê\x000bó\x0003=
mh¶1¬1</p><p>"\x0000ª=ÙE´¼ÖiLì]·$Ôý8®\x0015SÍÙ°+³`WfÅ]F\x001bWc:dÙ±WfÈÒ»6\x0005vlUÙ±WfÂ®Æ\x0011L*ì¬i]"®Á\x0016Me"Li\x00180ù\ ÒA§aß,ÖÒòC\x0017÷RÒXÿ\x0000Ôr\x001fuiôd¦7e1EØBfb~\x0010j\x0007¿L\x0007bX\x0015ØÇA !A\x0014 ÷\x00198ÈÄØæ7</p><p>Ø<w\x0019Ã\x001fË\x0006\x0019_ËEø	\Üé\x0013\x0013ONànÐ×°§úÜO|ú\x0013°;N=«UÄ6ó¯ºAå»B'I1<áÈ;áßïÜÏíu\x0011rî*8N¿Ì½èÎäß1\x001f1Ú%^\x0017\x0011±xÎÅd]§¿\ñÜì³ÙÙ?ï\x001fwwÃÒb±¿\x0013Õôÿ\x0000ÑÒñ]Ñ¾$>*zd¯9æÔ¯$6ñÛ\x0019\x0007íÛº¸ÿ\x0000Qþ\x0016û)úr|Ã>cÜìd\x0018;6*ìØ«²®*ìf*ìØ«³b®Í»6*ìØ«²®*ìaÛ\x00164ìØ¥Ùô\x001bòU8h\x0016êçþ\x001d²\x0012|;Ú#z©ûÇûìê5Þ\x000by»v^\x0014»6*ìØ«³b®Í»6*ì\x0005¨v~c(ÏÉÅÔý.Â\x000c×:fÅ]+/îÇù÷Í/¤;?Ò\x001d²ç!Ù±WfÅ]\x0015vx»þrJEmNÝGÚ\x0016Â¿Kµ?QË"ú×²\x0000ø2?Óý\x0001Ùç/vìØ«³b®Í»6*ìØ¡Ù±C±àS\x0014»/\x0014»6*ìØ«³b®Í»\x001e\x0006*ì¼UÙ±WfÅ]\x0015vl*ì°+]?<éÍ¨éòÿ\x0000¼	\x0010÷\x000c\x0010§ÝÙãÇ\x0013n>xqDÛÜ¿ç\x001c|Ö¾Ró5qpÆÚ`z\x0018ç\x001c\x0008?I\x0007èÉÇænª5»M\x0007ÍÉÒe\x0016óøÊ»WýY\x0003gö\x001c¿-xCcá·Ü_+ön_ÔeÀz\x001e!ð5÷\x0010ö_-y@Å\x001fü&ï\x0000{»Aß³Woõâ+ºg¦¾¸ø£6*ìØ«³d©]\x0003\x001bWc²*ìØ«³b®ÍÙ²Jìp\x0018-]é]só\x0003òÉu®W\x0000-ÇVNOèß¯1²áâÜ8Ù0ñn\x001fnÎ7ÿ\x0000ÎTËäb']¥Ó\x0016)ÄöþÇ»EíÕ?gm²#ùyùÚ\x0013
/S¨\x001e(íÖ3ü­þOüGåÒ¬Yxv-x²ðì^Õÿ\x00009+ÿ\x00008Û\x001fæ\x000cmæ¯+ð{A$±GB·+Jú±·©N£ýÙþ·Úô  æ¿.Ý\x000cd«\x0002\x00084 ìA\x0019xUnl*ì°0\x0015v?\x0002»\x0008<Ówõ\x000b\x001b{2(?^N!!1Ò`úÅÄiâÃ<µå\x001b_­_ÛGJÖTû©ýY.ND¹=wZÒ¶¿È?ÙìÅ§\x0019â9°«³b®ÈÇ¼­\x0017`1=\x0004S\x001b÷Sý\x000fq¦@Òk¤jÏ¤ÉÍwSöÄ\á¾BÖeò¶ lçÙ\x001dý9\x0014önýÿ\x0000[!a¶BÙ÷,V·õãÝrSâ;ôîPÐòÌ°1WcñWfÅ]\x0016TìØ«±ÁqE»\x001d»6)vsÏÌýOô~È
\x001af\x0008>][ð\x00198
Ù\x0006Gåk_¬\=\x0010\x0016þç]\x0007M:½Ô6ÃöÝAùWÃ/&¤ê\x0017?SåþU'éíÐ</p><p>\x0017aÐtÌVx¡5ß9æÍÇ£§pþyP}Õ?Ã,6qdþQÍ|\x0014á¯É»^w3ËÙc\x0003éfþÌÓ$÷ÎÒ(ÓÅûöç¡²·fÅ³b®Ç\x0001\x001dÅiÙ±K²é\x001d¾f\x0014±¹ÿ\x0000/ÿ\x0000\x00118BQÚ`¬ñÿ\x0000®¿¯<d:fSkÙûç³<ªkamÿ\x0000\x0018Sõf)j/\x0019Õ¿ývýx}P\x0019tÅ]\x0002«²ñWd¢\x001f²>C>m×ÿ\x0000{?ëËýÑ|oUýä¿­/¼²È~Èù\x000cS0\ULØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Ï¤_?ñÀ²ÿ\x0000Q¿âm!Û¿ã3÷¸?V{%þ#ú§ýÔÍï÷óÎ\x0017¯BæÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±We\x0013LU°+;äÀA(Jà)fã±L ·å·7tÌ¨A\x0016Èì¬9dZûPãß6\x0018ñ1%iºW*m\x001do^Å\x001aYQ\x0014U\x0000\x000f\x0012NÃ6ø4æd\x0000,@n°²\x0018Iä\x0000²~OEÓt¥sz*¤ì\x0007Ó<ÿ\x0000ç ¿?¬¼Õg&¥\x0016;/©0Ú2\x0014××v©\x0003z\x0001á\ö_f½É¦Í\x0003Që¸­ûö'Ø¼ú<ÑÕj*4\x000f\x000c9Êä*ÏAÏÞÃ¼ëç\x001bkv°³«#ôZ\x0003Z\x000eçõgsÔzxþlUÙ±Wguüÿ\x0000qó\x001fçÁ4KSõpÔîZ¤	½
^\x0011\x001fÊÛ6\x001a]\x0006MIô»Ï'íïjô½\x001bÍ?WLqõLü:{Í\x0005\x0019n\x0016\x001e§èÏ²\x001fó\üªôïuU\x001a®¢´>¤ËûÛþ+q·óIÍ»=3¶Ñö6<\x001bËÔ|ù|=£ÿ\x0000F«µn\x0018¿sº'ÖGô¥ú#_\x0014¦kÖa°Ïs*\x0000\x0001@:\x000cß¾HM óå¯üügþq÷ôõ¢ùëL·\x0016ª±ß*Þ</p><p>Ñ%Û©-ÿ\x0000\x0015z&r]¹¢â\x001e,y«ÝÞý\x0007ÿ\x0000\x0002¿iü	\x000eSé2ÄOIõùÜÇ½2°ïÓ>/g\x000eýNg°ç</p><p>ÿ\x0000>?åJy4¼~:f¡Æ\x000bª	?ºý\x001a7ù\x000cÝÀÍ×dë?-¦[\x001fÖùü\x0010=þYÒ\x0013\x0001ûÜW8yÿ\x0000:?\x0011ËÌ\x0004-Ü>²íÔtÏÑR°aQ¸9éoÄ\\x001c¼UÙ±WfÅ]/ùÎÉ¿ùU^kêÕ8Øêuº²1ýôcäÿ\x0000\x0010\x001dÔvÏ6í/Ê[Òý¯ÿ\x0000\x0003ÞþTÑF27\x000fîåÞb>òÛÞ</p><p>{g/¨´=FØkÿ\x00008)ùýÿ\x0000*_\x001aUüt½Q)*~\x0018§é\x0014¾Â§å`Çì\x000ccë/>\x0013ôËoqè\ø#{3ü­¦ñqÞá\x0006CúPþ(þç·V¯ õV£¨ÏÐFz3ñG\x0015vlUÙ±Wgç·þsò\x0013þT÷[P°©\x001a\x000f9kYb\x001e\x0000\x0013ÍGòµ\x0007ÙÏ7í}\x0017åçcéãßÕûOþ\x0007^Òÿ\x0000+é|<òá¨ÊùÊ?Ã/²óO,çõV¨Ï\x0013+Ï%$\x0011¸#¨#¾hêÄZ3?X\x001eD¼QÒln.AY¤µ¤\x0007¨fK~9ëøI1\x0004÷\x000f¹üçí\x001cqÇ$cÈN@{\x0019}ùä¯.uËsb®Í»?6_ó÷\x0002ãÏúÑ^Ó¢ý"\x0018ÁÏ0íSy¥ïý\x0001û«Ø\x0018ðöf\x000fê¶ROí\x0005\x0010d\x0017þq÷ó5¿(<Í§ë Ò(¦\x000b8ñO_¹Iaî\x0006cèµ\x001fÈ%ç¿¸»iû v¾&\x000e¦7\x001fëÇÕ\x001f´*O\x001fª¥sõ\x0005\x0004ër$d2°\x0005HÜ\x0010w\x0004g«\x0003oÀ\x0012£ÌlXçLW\x000b\x0017g\x000fÿ\x0000üº?SÔôh×Ò@Ï\x0000¥O­\x0017ï#\x0003Ýxý9®Áãã|¶÷Þ³ÙNÔþKÖâÌMDH	V^ò\x0006Õ­äô\x001cüÌhº´Þ[»úÜÞT\x0008Ø«ÆÁÒ\x0008Ï,\x0008#¡·ï]F\x0008êqÊ\x0012Þ2÷HS!#¦~«¼æ¨¼ñ¥Ùë\x0016ÔôîíâhkNj\x001aA4ú3×0ä\x0019b$:_ÎîÑÑËExeÎ\x0012Où¦Ó¯\x0002GJrç^·6*ìØ«³á/üü¯Ê_¡¼Ùoª(\x0001/¬ã$,Q¿áLyçý½ xû¯?àK®ñ´RÄyãÈÒÌ	\x000f·9ÓÚ«O\x0003ëþp+Ï¿à<ZE#R\x001dB9,ßæôxþU\x0010|ÌnÆÍáæ\x001fÒôþ>.óþ	]ùÞÎ\x001cñ\x0011´¿ØÈª^§4>Ûçè=%ø"Í»6*ìø\x001dÿ\x0000?!ÐEyØ]\x0001µÝ¼ÿ\x0000â#è\x0011¯Þ3Ï;v\x001c9o¾ þÐýÿ\x0000\x0002OÙü?ÌË8ü\x0008ÿ\x0000ß\x0014îÁªð9àLç_eFæÅ]\x0015vlUÙ±Wg×ùõÇöÖt6¯û¢å?á£ø×;?g²}Q÷\x001fÐüÑÿ\x0000\x0006-\x0017÷\x0019ÿ\x0000­\x0003öH~¯R^>ºçdüÖæÅ]ÿ\x0000ùÉ-\x001fô\x0017õËjP
FåÀðY$2(ûgkãÃcúGí6ýÿ\x0000ì\x001fA§ûT\x0007Æ1\x0011ý\x000cÜòEù\x000cöüûWóô\x0016©säë·¤7Êgµ\x0007 1ñ¨ÿ\x0000üã\x001dÎo{\x0007UÃ#õÜ{ÃåðYì/\x001f\x000cu\x001e¬~ÿ\x0000RGcþl¿Ý!5\x0008ª9ÝsínwOÊFlUÙ±WfÅ]\x0015v|7ÿ\x0000ÊÇÍzz\x0013ð-\x0008\x001e\x0004ÜOSôÐ}ÙÀû@x?«úKõ·ü\x0008\x0007ø\x0016CþÜÜcýiÆöOÏ>mç0ûªaSÿ\x0000çØßk¦ê:'`\x0005ÔbêÜ\x0013ÖH¾\x0019\x0014{´d7Ê6Î·ÙýEHã=w\x001f\x0007çø.öAÉ\x001eª#è>\x001cÿ\x0000«=â~\x0007oóÝF:Þ\x001bgÙÜî\x001fÒØ«³Îó_óZOüäUÛß\x0005ä\x0001¾­v\x0017µ*¬¦ã4Ý	\x001e*TïÍv:±Gb9\x0017·ö[ÚÌÞÏd2Çê«\x0019å*ê;¥çóµx.\x000c\x0007n\x0019ñãÏ¿ó\x001evòs¿Õ-ãÔ`\x001ffKi\x0007"?ã\x001bñp|@\x0004W¡9Åfì\¸ù\x000e!äý9Ù¿ðMìý`\x001cr8¥ÔL\x001aÿ\x0000M\x001b	ª_#õÛç\x001bSÿ\x0000|óvH¹Ñu\x0005ã×ý\x001aCÔÓöAÍ|´9cÎ2ù\x0017°ÃíF7Ó\x0011ÿ\x0000>#ï*âu=\x0008Ä,?!<×©ÓÐÑµ\x0006© ÿ\x0000Foô¨Á\x001d\x0016Ir¾E_i´X¾¬øùñýn3¨î0O?ç\x001f|Ñù`uoMÒÐHóO^#yvðÃE\x0014x¥\x0012\x0007^Ú}\x001e¿/,g:&£gaçUÕË:¹¢ãõ*¹÷Ûþ}Åcõ_#h\x0007«}rÛw§\x0014ßþ\x0007=\x0013°£X}ä¿\x001aÿ\x0000ÁW'\x0017h×óqÀ}òý)%ùøþöÎñä\x0016lUÙÄ¿ç$|Õþ\x000bò~±¨\x0003FK)Q\x000fùRMiïVÌ
~O\x000f\x0014ûvz¿e4×`ÇÐä>è#÷+[¯7\x0003ß?0\x0003<¥ûýfÅ.Í»6*ìØ«³b®Í»\x0018Mq`¼</p><p>eb­æÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v{?R¸ôêVzF\x0008q\x001fsùo|#ÞÍ)ü¯ú~øO(¬6ôvð-û+ü~fÉÖ¾ºf\x0008\x000b1 \x001b{\x000cÙAõt\x0003¹Üæ«$øËµÇ\x000e\x0000øÏ~e>i¾à\x001fÝ¯Á\x0010ÿ\x0000$wúzà¼©µfÅ]\x0015vlUÙ±WdcP5ý\x001f«6~Yê}ùM\x000f££ÁþQvûØÿ\x0000L\x00058ïGÃKQD\x001fNj³ýE\x0012\x000f¿5¥õub£îE\x0018#1ØSÏ3b´ìØ¡Ù±WfÅ]\x0015v2Xe(à\x0015`A\x0007¡\x0007¨ÅW#\x0014!Än\x000eyC]Ò¥ò.¢¬ñW\x0012D|V½>²s \x001e Þ7zåÚëöÄ\x001f´W\x0003ãüsÕVi\x001aÏ\x0011ª:Sìs\x001d¡äÓBmØ£lT~\x0011©b3@·</p><p>Ñ¸ª° \x0010v8ªäs\x0019\x000c»\x0010j3Ï\x001a\x000c­ù«µ§÷2\x0010µ=8°ßGCôåÇÔ\x001bNáé\x001a\x000f1Yí ¯Ò>Ðþ9èKSÍsb®Í»6*ìØ«³b®Ê¥qWeqÅ]tüâ¶\x0011ÝÅ êñPÿ\x0000±'úåÐnÒ¼)h]|\x001fõí>S¸7V\x0016Ò\x001e¦%ü\x0005?U.mEë\x0011z7\x0012(þsúòA	nlUÙ±WfÅ]\x0005+³`¥vl</p><p>ìi\6®ÆL»6*ìó'æÍÕµ\x001fS´±«}#á?«/&ørz·¦õ-¸ÿ\x0000+\x0011÷ï¿É¹yZNË(?zéÈ\x0018MyÝ)27~¢s°e-l+6\x0005v7JÕØÜ*ìØ«³b®Í¥vyÏ³W[\x001fä´#õ\x001cÉÙº<§åä¥÷\x000füsÓG®b´¼³\x001aEp«±¤S</p><p>»+</p><p>»6</p><p>WfÈ«³b®ÍJáWc\x0008Ãjì¬*ìØ)]"®Í»6*ìØ«±¤d­]ÆÙ°+²XÃôÎ\x0008Þ[3B;\Ô\x001fö\x000eiòaæ=ÍÇ»îvDò¶·fÅ]\x0015vDüéåóæ\x001bFH\x0019ã"H\x001cuY\x0013u þ\x0019Ðö\x0017i\x001d\x0006xËøO¦^ãú¹´å îh÷ÿ\x0000P1Ý\x001báqâ§®FWT\x0012\Øy0\x0012=]\x000c\x00176\x000by\x000eÅ©Û?\x001cõßk4\x0003W§ñ\x0007Õ\x000fPý?gÜòÝàôçø
Çþ\x0017._&A}iÎ)mí\x0001å\x0019ñöú3§gS×°¼ù`f{~ÓC"Sß%üTd¢Î\x000eÂh`õ£w\x001f±Ä4ÀÆr(vlUÙ±We\x0011\UØÒ)»+\x0015vlUÙ±WfÅ]³W$\x0015ØÜ*ìpÈ »>þN¯\x001d\x0006Ëþ1÷»\x001c®Oû@oUßú\x0003³¢ñþHýg)\x0007Ìêø\x000fÒì[,nvlUÙ±WfÅ]\x0015vlUØ\x0012üV3ôe\x0019¾\x001bQô»#Ù®u\x000eÍ»$6&±§6X~o§ú]òç%Ù±Wc9ü\}«½é\x0016õäì~I³Áß·>¾»"ÿ\x0000¾â\x000e_Ç,\x000f´{-\x000e\x001d0=òûkô;8Æ\x0017­vlUÙ±WfÅ]\x0014;6(v<</p><p>beâfÅ]\x0015vlUÙ±WcÀ¦*ì¼UÙ±WfÅ]\x0015vl4®Ë\x0002¸UØü</p><p>ìk(pTô;\x001c\x0015h"Õ­çkWYc4e!ø\x0010j\x000e\x0015h\x0016§[ò\x001e©¥õM¸£\x001e\x0001\x0018J¿o£<ÇV?/­ºH\x0000~Ø¾G­\x001fí\x0018K¤À\x0007íê~ê:ÂØþ`hZþÂ
fÊßÕð&XÌ.>þ?N\x0008Ò¯?HÛÅp?Ý«}à\x001cô¸\x001b\x0003ÜúÔ
øGÏ\x001a\x001føgT¼Ó§Õîe|È\x001fÁùc6-Â®ÇL</p><p>ì¼</p><p>ìØ«³b®Í¥vl*ìx\x0019\x001bWeâ®ÍØà0Z»9\x000fæ×Zµ\x000be¥Äb¬\x0000þñG_ö@tñéÙ±ñn9¸ÙqÞáö§üâüä\x001c¾H»Ëº¬Ón\x001fnÇýçº\x0010OHØìÃ 'I(|ëë¨Ò®â\x001bÂÄõ\x001dÓèíí·l\x000c\x000fÁ\x000c\x000b9ÿ\x0000Ìüú7iQ\x0013/cQö\ì& ìÝ\x001fÁ¨ß´s½fküòÇ\x0001ÕØìi]</p><p>» \x001f\x0013ý_K;"ýæ¿Ã%
Ë8sdSÔ»Sà\x0018þ\x0019Åÿ\x0000, \x0013j°×öC·Ü§.&Ùòg^j£û\x001fz¯1ÜwæÅ]\x0006*ì~*ìòq¬JÝ)*\x001føÌòn'®è¼²QþK\x000f×¯\x0014;ùÒò")»6*ìØ²v8.(·c±C³bvlRì°+»<ÿ\x0000ùÅêÜCj:"\x0016#ÝßË \x0019ÅèL¶ã\x001bÊh>Cý¼\x0001ùI§ýjù§#h£'émá\3)'Í÷\x001e\x0001\x0007í·à7ÏI\¡­æYÅ¿9§ã\x0015´^.í÷\x0000?[Y¿£«Èþ\x0000\x000f¼ÿ\x0000f\x0008ü´áo<çö¤</p><p>?Øÿ\x0000\x001c\x0013LyÒnRG\x001f÷ìÎÉ±axà1E».«²ñK³b®ÇLPì¼UØIæQ[\x001bøÂÿ\x0000ñ\x0013%\x001d¦\x001aO\x001fúëúóÆ6Ì¦×³\x001cö/Ï=:Ôÿ\x0000Å)ú³\x001a\ÚÇuÆâQþ[~¼Ò\x0015Ksb®Í»\x001c\x0006*ìEöGÈgÍºÿ\x0000ïgýyº/ê¿¼õ¥÷Y\x000fÙ\x001f!f\x000b©\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙôògþ8\x0016_ê7üM³Ä;wüf~ñ÷\x0007êÏd¿ÄqTÿ\x0000º\x0019½þñ¾yÓ³Bõè\Ø«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»\x001aZiW\x0005® ï\x0001\x0016*à\x0019§\x000bÆ,S[{RpêóeÂ\x0008%Øéü²'¨ñ®ù±Ç,ëLÒ9Slàÿ\x0000\x001fúåÄ\x001eµü¼`}8Wy\x001cû\x000eÃÅ\x0000ùíodv&^Ð@mÖGé\x001fç¢ìOgóöÌøpÕ3´cï? nÊîníü·\x001f©rw?e\x0007Úoþ=3å÷æçF¥ù)\x0017
éZT·Bx\x0002ÇöÛÜì;\x0001õÙ\x001d³G¤\ºÌóøw\x0007ê?g½ÁØ±¸,êÉ!¿Ãù£ðKÉ<ÃæÉõóÅ\x0008HÇOñ?æ3çHö¬_6*ìØ«³Ö\x001fó¾]ò¿¼Ñ\x000eç\x0008Ì©0¥¢ã\x000b\\x0003UI@¡`ãd\x001c¢°nTÍÇeC\x001eL9:òî¿7Î=½Õk49dÒ\x001a1þðr\x0010êcÝ]vºÜU!®ÙjN~´Í.
\x0016\x0014µ³!5</p><p>Æ¡Q@è\x0015@\x0000\x000fz\b"(l\x001fræi\x0019LHîI6OÄ¤$×s²M-fÅ]õ\x001d:\x001d^\x0019-.dTd\x0018UYXQ\x0002
22¢Û,±HN&¥\x0012\x0008#¡\x001bÁ¦ã?4ßóßÓ~Bù}*l¥ýõ£BÇe¯óFjò
Ñywhi\x000ef=9äýßì´QíÝ,ríÇ\x001fNH÷Lu÷Kùtd\x0016ózë^ýóÏ\x0019­{u|ý\x0003ÿ\x0000Î\x0008~|\x000fÍ.*ùùjZPH¤©ø¤_}Fÿ\x0000)j~ÐÏFì}g\x000e\x0013õGoGâÿ\x0000ø#û7üªñ`?uä?£?âé\x001eÿ\x0000$ö\x001fIª:\x001c÷.oß$AæÅ]\x0015vxóþsòwþV×ç{då}§VêÞ¬Á\x0007ïc\x001fëÇR\x0007vU\x0019¥í}/×8î?Ké¿ð=íßä­lDC/îçÝ¹ôû	EYËé6ý\x000eÙùÖ\x0007<Ñûu>ÏÐ¿üà÷çïü®_/-óòÕ4ÀÏSñI\x001d)\x0014Þõ\x0003ÿ\x0000µ?hg¤vF·ó\x0010£õGcúß¿àì×ò>«\x0003÷YnQî¿?m#ä^Aé5GCÕÍëåHLØ«³b®Î!ÿ\x00009\x000fù5oùéåë\x000ej,Äz²ýÜè\x000f\x0006ù\x001aò\x0019»æ\x0006»J501ëÌ{Þ³Ù~Þaê¡}?Lãüè\x001e¬y­\x0004¾rûóâ/üã7üâ¶§ù³æ\x0013i¨ÀðiúuÇ\x001dBG\x0014\x001c£mí×ùÈ¡§ÙOþÏ.\x000f³û:YçDPõ|:?X{]í\x001eÊÒñcL±¼@wH}g¸\x000f´íßG\x0017\x0017"%Û©é¢h£\x0010¨D\x0014U\x0000\x0000;\x0001Ó=/ñ!6l¤8üPìØ«²ã¹Å]?Î¿2ÿ\x0000<Í«j`òYï®\x0019\x000fz!ÿ\x0000\x0003<WÄÉ)w÷¿¡^Ïi?'¤Ã\x000e8\x0003ïá\x0017ö²HWíÃ1\x001eS?C¿ó?ÿ\x0000ò³<om;r»Ó\x0008´}Ê ýË\x001ft_r='±õ>6 \x000f8ìCñ7ü\x0011û\x0017ù7])DT3~ò>ò}Cý6ÿ\x0000\x0014ö/MýùìüÞ>ZÍ»?:ó¿ÿ\x0000ò©üÛpöéÆËQ­Ý½\x0007Â\x000bÞ ÿ\x0000VJ;+(Ï4ím/×)n?Köïü\x000f;wùWE\x0011#sÅû¹='ã\x001f´\x0014úÎ_U}ÆÙÛ¿ç\x001e¿ç?!üòõ·u\x001d>{·µ2\x0004&U\x001e9eZ2³Z|©ú\x001eÚ\x001ax\x0008\x0010Mu·ö£þ\x0006í}Tõ\x0018òF\x0002uq1'Ô\x0005\x0013±ëJ3ØúÍÈ\x001aW=³ù\x001bÿ\x00009Ó¤þxkQyzÚÆæÖYRFI$xÙIy\x0015øMj@4ùf÷IÛ\x0011ÔÏ\x0002/½òh¿àu±4çQ,\x0000\x000f¨ÕîÈÂ9T\x001c÷.oß$AfÅ]1?çç¾Qúþ¦ëJ7µ»hÿ\x0000:TÃG§´\x0018®\x0011q¯ö>ûÿ\x0000\x0002\x001dw©Ëÿ\x0000\x001c\x0004¾\x0007õI1ÓGÏþ\×%òÅí¾¥nHÚhåB?6\x000c?Vq\x0018çÀA\x001d
¿QêôÃSXåÊq1>é</p><p>Mò\x00149úµò¶¿\x0017¬-µ;r\x000cw0Ç2j)"\x001f¯={\x001cøÀê-üëÖi$±K$bÍ4Æx<0û,pÖæÅ]\x001e?çé:\x0017\x000b\x0017SQö£¹ú¥\x001dâMW´0Þ2÷¹úoþ\x0003º|^pø\x0003÷\x0004×MmÏYÇ¿H&y±Wc\x000c	>\x0000W\x0016$Ó°ÛRòõîÍyo41Ë_M¤^¯\x0012À\x0006¥Eiã\x000cy>\x000e>\x001dV<ÄJ2#"ûèìÐ`za>AÊo=»ÿ\x0000>ùó_øoÏVöìÔKè'·#±n>ªþ1Ð|ó}Ø83\x0001Þ\x0008ý?¡òoø'è¿1ÙÒçQÂøOû¤\x001dòòO~óÑßR<Ø«³óÿ\x00009×¤\x001d+ó\x0003T4 êòöPF\x000fü2ó>Ø\x000eiyÑû\x0003öÿ\x0000ü\x000e3ø½ú<qùNGî)õª\x000có/<ÑsäBÛX±n7\x0016$ÑòCìz\x001flÕâÈqÈHs\x0006Þ÷]£·\x0014ðÏxÎ&'â)\x0010Ê\x001cP÷ÏÔÏåï-ÿ\x00001t=rÈÖ\x001b¸\x0012Uöä7Sî¦ª}ÆzÎ\x000c£4DQoç·iö|»?<ðOêOÃ¯Ç\x001c=2TöÉ^ë\x0016fÅ]\x0015vlUÙðÓþ~yÿ\x0000)mý²£ÿ\x0000¨à} þôT}åúßþ\x0004\x001fâY?áòÿ\x0000¦xÓ;ì|ÞÎa÷DÃ'\x001f|¹ü±Ölõû/ïm&Y\x0000­9(ÙÐû:§Øåú|Ç\x000cÄBê;_³aÚx'|§\x0013\x001fqè~\x0007u'¨</p><p>ùúòwí|õ§[k\x001a{s·º%ÿ\x0000â´>ã¡ð ç¬âÈ2ÄHr"ßÏ~z\x001c³ÃT¡#\x0013ð,qÔ¡ öÉ.Zà­Í»6*ìØ«³b®Ï¿óòûñoå\x000bx6ýî¡\x0017}þ\x0018ä;g5Ûò¬@H}ÅöÏø\x0012ââ×J]Ø¥öÊ(ý<|uöÏ¹çï×éÎ~ç\x0001-~­ù§tøäºm½î$ÏJìaXcñûËñ'ü\x0012§ÅÚy|1þÂ)\x0015ñ¬èÏeæíòô&lUÙçÏùÉÏÊKïÎÿ\x0000.KåÝ2â+i&&w1R·.?
Nä\x000f¢¹­í
1ÔÃ\x0010,oiìmãì]PÔd¦#\x0019\x0000#Wr\x0015{üUí¥\x0010·#¾|ó\x0007üû§Ï\x001a?&¶KKµ\x001d=)Â±ú$TýyÆO°óG\x001fqýoÒÚ_ø)ö~o¨Î\x001fÖö&I¢ß¡ëQ'ÌóÞuò &óD½ êb×\x001f|%ó_³òãç\x0013ð\x0017÷[×é=±ìýWÑ\x001fùÒàÿ\x0000wÂ¬·(Ý\x0008Î'¦Ï¥9ê7ÇUu*Ãæ\x0018\x0003\x00127¬Ç9EÄ;Á\x0007îV\x0006½0\x0016\x0006æób®Í»)±Alc1akób¶ìØ­»>ÿ\x0000Î6ÿ\x0000Î\x0001Ý~néñy_º{\x001b\x0019Ç+x£@ÓÊ¤%þ\x0018Ñº¡£\x001f\x0015\x0002OK ìS<s4\x000f!Ô¾%í_ü\x0012áÙ9N\x000c\x0010\x00192GiÊF¡\x0013Ý¶ò#¯*KîoÄGõGý\x0012ûË_õrÔ¾ø?êmÿ\x0000Ðþ?çKìýOÿ\x0000ÉßÕÿ\x0000©aÿ\x0000gÿ\x0000\x0014ý&Þ\x00037ý\x0012ûË_õrÔ¾ø?ê?è\x001fó¥ö~¥ÿ\x0000¿«ÿ\x0000RÃþÏþ)ß¤ÛÀfÿ\x0000¢_ykþ®Zß\x0007ýRÇý\x000fãþt¾ÏÔ¿òwõêXÙÿ\x0000Å;ôx\x000cßôKï-ÕËRûàÿ\x0000ªXÿ\x0000¡üÎÙúþNþ¯ýK\x000fû?ø§~o\x0001þ}å¯ú¹j_|\x001fõK\x001fô?ùÒû?Rÿ\x0000ÉßÕÿ\x0000©aÿ\x0000gÿ\x0000\x0014ïÒmà3Ñ/¼µÿ\x0000W-Kïþ©cþñÿ\x0000:_gê_ù;ú¿õ,?ìÿ\x0000âúM¼\x0006Büóÿ\x0000>¼´\x0016¬þ[Õ&úÚV;µC\x001bËÎ%RëqQÙá^\x001bóý×³¿à¿>05\x0018cÀydñ\x000f:7î°½53_mí&<ßå\x001bï!_Ï£êÐ´\x0017vÎRXÚÔP\x0008!!	\x00078ü¸)\x0018ÈQ\x001cß£t:ìzìQÍBP¸øù5G\x0012</p><p>#yS»6*ìØ«³b®ÏZ]Oõ-Û¶z¶8p</p><p>*rOÛì?$ùe|©dÛzâø¹ë÷t\x0018#N·õè2¼óá\x0015ÞÙ\x001cFûæ÷¿CY}R3In*¾á\x0007Ú?OO¿$­vOsb®Í»6*ìØ«³b®È¥áå#|ókTCªÊnEö×åí¿ÕtEñ7ü\x0011-üp6ZÒÌ®\x001cÀ´A_\x000cÓå7#ïc#»á\x000f>Ü½RíÇOYÇÜiü1^9R-eS\x0015vV)vlPìØ¢\x0015§fÅ\x000eÈ¼´¾gµhiûÕø£>\x000c;|¡ÉDÓ(MôMLés\x0007ý³\x000foìÈ?å?9ÆÚ\ÆFI@|+ñ/û\x0013êÊa?ó~ÅÔe¨\x001bçØý#;&VÖÂsb®ÎGù· ývÙo£\x001f\x001c&Oä?Ðþ¼²\x0005K1ò~¡èJ`o²ý>cúä«Èzÿ\x0000øÅ$cY\x0013àæ:\x001f¤o¢</p><p>J|Á§þ}øä¦Libe\x0011»\x001b»6*ìØ«³b®Í»8'ç:þòÙ¿Éqø·\x001bn7¡y ü2q/È_\x0016mÿ\x0000\x0018ÿ\x0000ÈK	sbÞ`\x0014ºýlÓ"Å&ÊÅ]\x0015vlUÙ±WfÅ]\x0002»6</p><p>WfÀ®Ê+ÕÙÂ¿9íú4Ýþ5ýG/Æ[q³ÿ\x0000#KýêªXÊüZþ1øÇ"äoÏ)ýÓ¬?Vw<©©çù°R»6\x0005vjW\x0015v06®ÊÂ®Í»<­çi=mjJv1÷q\x0019\x001eMñäõÍ
xX/ú¬^z¨õÌVå`WfÅ]#
«±¹%vlUÙ²4®Í]\x0015vQ\x0015ÃjìfI]\x0015vl+³`WfÅ]\x0015vQ\x0015Â®ÆL*ì\x001f¥êM¥J&@\x000eÅYOFV\x0014e>Ä\A¦Q4ì	8PÇÓ¯\x001aí^´÷ÀX»\x0012À®Í»6*ìãwpúZ6·j½l5\x000b{ÈÉ\x0012\x0011Èü³é>ÇÉù½\x001cx·¸\x0000~\/\x0015«\x001e\x0016³\x001cñÆP?
Ã>µVKg?îØ6÷¥FuèßÖPã£\x0000~ýóç)ÇF=Ä{@mºð$xdÊÂþßÞU\x001fðFÇ#\x001emæ\x0016à\x001eÔH/¢?³\x0003°ù£©Ä\x000ei\x0003¹Ù\x0016ÊÚÝ\x0015vlUÙ±WfÅ]#\x0015vV*ìØ«²\x0015v!WfÅ]\UÙôcòxèV#þ)\x001f¬å2|\x001f·Mêr[ô\x0007dÞ6¬Ì?É\x0019\x0013ê>ç¹pv\x000cËÜ§fÅ]\x0015vlUÙ±WfÅ]o»?çß)Ëô\x001fQôdw5®Ù±Waþk\x0018ùØàäí´ßK°n^å;6*ì\x0003\x001bò¦cÄÜ\x0019\Ï¹Ø;2\x001cÇgÏ\x000fÍùþ±¯^\x0007Uÿ\x0000E\x0019h}×°#Ã¥Çî'æK³bô\x000eÍ»6*ìØ¡Ù±C±àS\x0014»/\x0014»6*ìØ«³b®Ì1WcÀ¦*ì¼UÙ±WfÅ]\x0015vl +²À®\x001bWcò*ìØ«³b®Á_Ð\x001bæm<ý!W§»Äãøg{F82ãtÞ\x000bäþÕ\x000f6\x0019÷Hýñ/²¼Í~\x0017HòN¨>Ô/$DûCpA?/¥õ´«R{F\x0007ÜHþ\x0019èwêX~ÿ\x0000ÎMZ\x000b/8j¨\x0005\x0001¸ä?Ù¢µ\x001c\x0001\¿sÂqô¦\x0005vl</p><p>ìØ«³aWfÉ+²À®\x0005v8</p><p>`Weâ®Ë\x0002¸y+±ÀS\x0002»/\x0015vl»<±ùåfòµÚê\x0016X¤n@ØnGÓÔ}#5¹¡Âl8\x0019aÂl?[ÿ\x0000ç\x0015¿6¢üÙÑ¤òî±In­¢ôÝ_^Ø õ+^
þÅºï^GóRy¶Ñg\x0014\x0012¯Ã*ø7Èõ\x0019|aËÇ>0üùüøü£ò{XÄÕ­d¬²\x001fÚÿ\x00002\x001f¾þã&9scÅ²À®\x0005v8</p><p>`æ®ÎUùÀül\x0010xÌ?\x0000rÜ|Û!Íù-kpO\x001fÖ3þSGËR
á\x0013Ô?Y>LçÉùÅ©kO\x0017_ã\x0002¹CCÊqÀS\x0015vX\x0015Å]\x0003\x0015vyófÛÑÔKÛ\x000fÒ*?_\x000eMÑzäçmÇùXãÐ§7VHw-\x0012\x0013ÿ\x0000\x00022Ô^o\x001f£+¯0üp×\x0002i	\x0005qWcÀ¦,]\x0015vlY;,</p><p>â®Ç\x0001LQÍÙx¦Lóýç×u9Û²°AþÄ\x0001\x0011äÚ\x001e½åØ}\x001bXÇ¯Þs¨þMZq·sûR*ý</p><p>+ür¹\x0012,WÎò4ðR~óýÙ²¶\x0014ÂóÏsóº/åø&þÌº
±z/ã¤NÞ,\x0007Ü?·:?åÕtÈy\x000b¹úM\x0007à2\x0013æÄ5æ½k§ÿ\x0000&î\x0019Ð\x0000È1cùx«³b®Ç\x001d]\x0014»6*ì.Öa7\x0016³ ï\x0013øS*&É¸JàÃõç\x0014mM¯k9ë KêévÇÁ\x0008ûÆ6²ò?0/\x000b©\x0007½~ñ\x000c\x0012|x\x0018«²ñWfÅ]X¾Èù\x000cù·_ýìÿ\x0000¯/÷Eñ½W÷þ´¾òË!û#ä1ùâªfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v}"üÿ\x0000\x0005úÿ\x0000\x0013lñ\x000eÝÿ\x0000\x0019¼}Áú³Ù/ñ\x001c_Õ?î¤Æo¼otìÐ½z\x00176*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìaza¥^\x0012¸I¤ZºÅ\\x000eóS&"\vÕÂé®éÆ\x0008M­ìya\x0015Õõ3.\x0018ÑlÇL¯lßêTï\x001cxÉgZ^ZmIüöÿ\x0000òå
§\x0019µ\x0007\x001f</p><p>Wá\x001eôÿ\x0000^§®Ã¯¢{=ìÔ»@ñËÓs=eä?[è¾Éû\x001f>Ú;\x0010wYùGôôv»¯ÅåôÐ\x0006²û·ð\x001dóæ\x000f<Åuæ«¾Ô%ifsRÌ\x0000:\x0000;\x0001°ÏyÓia¦0#\x0011Ð?Sèt8ô8Æ,Q\x0011ä\x0007ãsæñÛé5\x0019\x000cÓ1f=ÏêÂ\ÊsÐ±WfÅ]\x0014;\x0015·¸{GYbb®2²\x0010ÀÔ\x0010GB\x000fLA¦3 î\x000eÄ\x001f7gèóþq\x000fþr\x0001?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Activites-terrestres-](https://preventionete.sports.gouv.fr/-Activites-terrestres-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Activites-aeriennes-](https://preventionete.sports.gouv.fr/-Activites-aeriennes-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Menu-BAS-](https://preventionete.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Avant-une-sortie-](https://preventionete.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Infos-Pratiques-](https://preventionete.sports.gouv.fr/-Infos-Pratiques-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 2: "page" "recherche" ].</p>
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/ecrire/](https://preventionete.sports.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 64 [https://preventionete.sports.gouv.fr/spip.php?page=login&lang=fr].</p><p>Predicted response size: 364.</p><p>Response Body Length: 435.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/robots.txt](https://preventionete.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Mentions-legales-et-donnees-personnelles](https://preventionete.sports.gouv.fr/Mentions-legales-et-donnees-personnelles)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Cyclisme,36](https://preventionete.sports.gouv.fr/Cyclisme,36)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/VTT](https://preventionete.sports.gouv.fr/VTT)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Outils-de-communication](https://preventionete.sports.gouv.fr/Outils-de-communication)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Presse-Contact](https://preventionete.sports.gouv.fr/Presse-Contact)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Videos](https://preventionete.sports.gouv.fr/Videos)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Meteo](https://preventionete.sports.gouv.fr/Meteo)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Nouvel-article](https://preventionete.sports.gouv.fr/Nouvel-article)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Balisages](https://preventionete.sports.gouv.fr/Balisages)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Pied-de-page](https://preventionete.sports.gouv.fr/Pied-de-page)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Kiteboard](https://preventionete.sports.gouv.fr/Kiteboard)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Randonnee](https://preventionete.sports.gouv.fr/Randonnee)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-de372a6e.js?1612274538](https://preventionete.sports.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-de372a6e.js?1612274538)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1609937405](https://preventionete.sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1609937405](https://preventionete.sports.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/ajaxCallback.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/ajaxCallback.js?1609937405)
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes-dist/](https://preventionete.sports.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins/](https://preventionete.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/local/](https://preventionete.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Menu-BAS-](https://preventionete.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/](https://preventionete.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes/](https://preventionete.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Infos-Pratiques-](https://preventionete.sports.gouv.fr/-Infos-Pratiques-)
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Activites-aquatiques-](https://preventionete.sports.gouv.fr/-Activites-aquatiques-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Infos-Pratiques-](https://preventionete.sports.gouv.fr/-Infos-Pratiques-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Menu-BAS-](https://preventionete.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Avant-une-sortie-](https://preventionete.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Activites-aeriennes-](https://preventionete.sports.gouv.fr/-Activites-aeriennes-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/sitemap.xml](https://preventionete.sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Activites-terrestres-](https://preventionete.sports.gouv.fr/-Activites-terrestres-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Rubrique-1-](https://preventionete.sports.gouv.fr/-Rubrique-1-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/robots.txt](https://preventionete.sports.gouv.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes-dist/](https://preventionete.sports.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes/](https://preventionete.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr/preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins/](https://preventionete.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/jpg/PreventionEte2019_1024x768_Mer_Jetski3.jpg](https://preventionete.sports.gouv.fr/IMG/jpg/PreventionEte2019_1024x768_Mer_Jetski3.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/](https://preventionete.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/local/](https://preventionete.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Activites-aquatiques-](https://preventionete.sports.gouv.fr/-Activites-aquatiques-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Menu-BAS-](https://preventionete.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Infos-Pratiques-](https://preventionete.sports.gouv.fr/-Infos-Pratiques-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Equipement-](https://preventionete.sports.gouv.fr/-Equipement-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Activites-aeriennes-](https://preventionete.sports.gouv.fr/-Activites-aeriennes-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Sliders-](https://preventionete.sports.gouv.fr/-Sliders-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Avant-une-sortie-](https://preventionete.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/PreventionEte2018_100x145_FR_BD5`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Mentions-legales-et-donnees-personnelles](https://preventionete.sports.gouv.fr/Mentions-legales-et-donnees-personnelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Activites-terrestres-](https://preventionete.sports.gouv.fr/-Activites-terrestres-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p> ����?.�(\x0014/�\x0014D�3�i���</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Poisoning
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where cookie parameters might be controlled. This is called a cookie poisoning attack, and becomes exploitable when an attacker can manipulate the cookie in various ways. In some cases this will not be exploitable, however, allowing URL parameters to set cookie values is generally considered a bug.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
Instances: 6
  
### Solution
<p>Do not allow user input to control cookie names and values. If some query string parameters must be set in cookie values, be sure to filter out semicolon's that can serve as name/value pair delimiters.</p>
  
### Other information
<p>An attacker may be able to poison cookie values through POST parameters. To test if this is a more serious issue, you should try resending that request as a GET, with the POST parameter included as a query string parameter. For example:  http://nottrusted.com/page?value=maliciousInput.</p><p></p><p>This was identified at:</p><p></p><p>https://preventionete.sports.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin</p><p></p><p>User-input was found in the following cookie:</p><p>spip_lang=fr; expires=Fri, 18-Mar-2022 19:51:31 GMT; Max-Age=31536000; path=/; HttpOnly; Secure</p><p></p><p>The user input was:</p><p>var_lang_ecrire=fr</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-cookie

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
Instances: 19
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bLATER\b and was detected 2 times, the first in the element starting with: " * Requires jQuery v1.7.2 or later", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="Partenaires" target="_self"><ul class="liste_sponsors">
		<li>
		<!--
<span class='spip_document_6 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/anmsm.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_134 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo-association-rmcbfm-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_135 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_chamoniarde-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_75 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logodecathlon2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_7 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/domaineskiablesdefrance.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_68 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/FFCAM3.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_71 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFCK.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_160 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/LogoFC_FFESSM-quadri-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_72 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFME.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_69 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFRP.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_111 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/Logo_FFS-2.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_63 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/ffvl3.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_251 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MAIF_Logo_prevention_rv90.jpg' alt="Maif logo" title="Maif logo" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_66 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MBF4.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_127 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_MCF_2017.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_87 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MFBLEURVBsmall.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_62 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/quechua4.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_128 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/Logo_SNAM.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_73 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoSNGM.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_133 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_usc.jpg' alt="" title="" class="ajustable" /><!-- </span> --></li>
	</ul>
</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Infos-Pratiques-](https://preventionete.sports.gouv.fr/-Infos-Pratiques-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Activites-aquatiques-](https://preventionete.sports.gouv.fr/-Activites-aquatiques-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="Partenaires" target="_self"><ul class="liste_sponsors">
		<li>
		<!--
<span class='spip_document_6 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/anmsm.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_134 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo-association-rmcbfm-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_135 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_chamoniarde-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_75 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logodecathlon2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_7 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/domaineskiablesdefrance.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_68 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/FFCAM3.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_71 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFCK.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_160 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/LogoFC_FFESSM-quadri-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_72 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFME.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_69 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFRP.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_111 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/Logo_FFS-2.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_63 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/ffvl3.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_251 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MAIF_Logo_prevention_rv90.jpg' alt="Maif logo" title="Maif logo" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_66 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MBF4.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_127 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_MCF_2017.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_87 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MFBLEURVBsmall.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_62 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/quechua4.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_128 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/Logo_SNAM.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_73 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoSNGM.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_133 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_usc.jpg' alt="" title="" class="ajustable" /><!-- </span> --></li>
	</ul>
</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Activites-aeriennes-](https://preventionete.sports.gouv.fr/-Activites-aeriennes-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Rubrique-1-](https://preventionete.sports.gouv.fr/-Rubrique-1-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='text/javascript'>/*<![CDATA[*/(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement);/*]]>*/</script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Activites-terrestres-](https://preventionete.sports.gouv.fr/-Activites-terrestres-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='pagination_recents' id='pagination_recents'></a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Menu-BAS-](https://preventionete.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/-Avant-une-sortie-](https://preventionete.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='pagination_recents' id='pagination_recents'></a>`
  
  
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes/](https://preventionete.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/](https://preventionete.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/ecrire/](https://preventionete.sports.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins/](https://preventionete.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/local/](https://preventionete.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/robots.txt](https://preventionete.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/sitemap.xml](https://preventionete.sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1580112923`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609937405`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612274538`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1608728686`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `631330826`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1580112923, which evaluates to: 2020-01-27 08:15:23</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fextensions%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fextensions%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Flib%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Flib%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Flib%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Flib%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fextensions%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fextensions%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 11
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fextensions%2F</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>page=login</p><p></p><p>The user-controlled value was:</p><p>login</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
