
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:36:50


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 2 |
| Medium | 5 |
| Low | 10 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 9 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - PHP | Medium | 6 | 
| Sub Resource Integrity Attribute Missing | Medium | 2 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 10 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 12 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 4 | 
| Dangerous JS Functions | Low | 11 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Private IP Disclosure | Low | 1 | 
| Secure Pages Include Mixed Content | Low | 12 | 
| Strict-Transport-Security Header Not Set | Low | 9 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 9 | 
| Information Disclosure - Suspicious Comments | Informational | 19 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 7 | 
| Storable and Cacheable Content | Informational | 4 | 
| Timestamp Disclosure - Unix | Informational | 6 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 17 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce-pekin-25-geneve-2019.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce-pekin-25-geneve-2019.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503596596596`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/declaration_commune_-_10_ans_loi_cope-zimmermann-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/declaration_commune_-_10_ans_loi_cope-zimmermann-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `581388556621265265`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_etatdeslieux-sexisme-vf-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_etatdeslieux-sexisme-vf-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `504552553316`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/20201118_discours_brigitte_gresy_remise_rapport_diplomatie_fe_ministe.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/20201118_discours_brigitte_gresy_remise_rapport_diplomatie_fe_ministe.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `586586586586586586`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/guide_parite-maj-v-longue-2019-v3bis.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/guide_parite-maj-v-longue-2019-v3bis.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `586586586586`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503596596596`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_dp_remise_educsex_20160615.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_dp_remise_educsex_20160615.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `586586586586586586`
  
  
  
  
Instances: 7
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 503596</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### PII Disclosure
##### High (Medium)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_etatdeslieux-sexisme-vf-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_etatdeslieux-sexisme-vf-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `370444370556500`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_parite_gouvernance-20191217-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_parite_gouvernance-20191217-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `370444370556500`
  
  
  
  
Instances: 2
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: American Express</p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-chronologiques/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-chronologiques/)
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.gouvernement.fr/" class="membre" title="Portail du gouvernement (nouvelle fenêtre)" target="_blank">
                    <img class='spip_logo spip_logos' alt="" src="local/cache-vignettes/L53xH58/arton1530-59783.jpg?1600159733" width='53' height='58' />
                    <span>Brigitte GRÉSY, présidente du HCE,<br />
                        &nbsp;<img src="squelettes/img/theme-c0/read-more.png" alt="" /></span>
                </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.gouvernement.fr/" class="membre" title="Portail du gouvernement (nouvelle fenêtre)" target="_blank">
                    <img class='spip_logo spip_logos' alt="" src="local/cache-vignettes/L53xH58/arton1530-59783.jpg?1600159733" width='53' height='58' />
                    <span>Brigitte GRÉSY, présidente du HCE,<br />
                        &nbsp;<img src="squelettes/img/theme-c0/read-more.png" alt="" /></span>
                </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/avis_hce_sur_loi_audiovisuel.pdf" class="pdf" title="Avis - La loi sur l&#039;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko) (nouvelle fenêtre)" target="_blank">
					          Avis - La loi sur l&#8217;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko)
					        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/avis_hce_sur_loi_audiovisuel.pdf" class="pdf" title="Avis - La loi sur l&#039;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko) (nouvelle fenêtre)" target="_blank">
				          Avis - La loi sur l&#8217;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko)
				        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/](https://haut-conseil-egalite.gouv.fr/parite/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/vigilance_egalite_elections_2020.pdf" class="pdf" title="Vigilance &#233;galit&#233; : Elections municipales et communautaires de mars 2020  (PDF – 103 ko) (nouvelle fenêtre)" target="_blank">
				          Vigilance égalité&nbsp;: Elections municipales et communautaires de mars 2020  (PDF – 103 ko)
				        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/violences-de-genre/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/violences-de-genre/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/avis_violences_conjugales_grenelle.pdf" class="pdf" title="Avis : Violences conjugales, pour une culture de la protection des femmes et des enfants (PDF – 738.7 ko) (nouvelle fenêtre)" target="_blank">
					          Avis&nbsp;: Violences conjugales, pour une culture de la protection des femmes et des enfants (PDF – 738.7 ko)
					        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/reperes-juridiques/](https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/reperes-juridiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000423967" class="lien-rj lien-rj-c" title="D&#233;tail d&#039;un texte (HTML – 61.9 ko) (nouvelle fenêtre)" target="_blank">
				    <img src="squelettes/img/drapeaux/drapeau_france.gif" class="drapeau" alt="" />
				    Loi n&#176;2004-1486 du 30 décembre 2004 portant création de la haute autorité de lutte contre les discriminations et pour l’égalité (consolidée)
				  </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/parite/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/vigilance_egalite_elections_2020.pdf" class="pdf" title="Vigilance &#233;galit&#233; : Elections municipales et communautaires de mars 2020  (PDF – 103 ko) (nouvelle fenêtre)" target="_blank">
					          Vigilance égalité&nbsp;: Elections municipales et communautaires de mars 2020  (PDF – 103 ko)
					        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/avis_hce_sur_loi_audiovisuel.pdf" class="pdf" title="Avis - La loi sur l&#039;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko) (nouvelle fenêtre)" target="_blank">
					          Avis - La loi sur l&#8217;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko)
					        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.assemblee-nationale.fr/commissions/delf-index.asp" title="Assembl&#233;e Nationale - D&#233;l&#233;gation aux droits des femmes (nouvelle fenêtre)" target="_blank">
				  <img src='local/cache-vignettes/L75xH69/an-2-9977c-dc254.gif?1572271946' width='75' height='69' alt='' class='spip_logo spip_logos' />
				</a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000423967" class="lien-rj lien-rj-c1" title="D&#233;tail d&#039;un texte (HTML – 61.9 ko) (nouvelle fenêtre)" target="_blank">
				    <img src="squelettes/img/drapeaux/drapeau_france.gif" class="drapeau" alt="" />
				    Loi n&#176;2004-1486 du 30 décembre 2004 portant création de la haute autorité de lutte contre les discriminations et pour l’égalité (consolidée)
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

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport-diplomatie_feministe-v4.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport-diplomatie_feministe-v4.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=%ÍO\x000e\x0002éST	iTSª²7%­ \x001bcO­\x0016M¤*wS¬íM±¸¹ÎNUÖ\x0016ÑéºØ¬Lªâô\x0014[%V\x0015'§è*Émyj©ª¤:}¦T	L;:\x0005°­\x0008Y*)\x0011×gíñL°L À\x000esØÜ\x0018QØ,©<?\x000eo¤\x0011Ã4Z\x000c\x0017²\x0010ÃGøa=ÏTI.FÉ\x0011Vò?·ÿ\x0018\~XÖíËWÍ¶nngß6/ÇoÆc¥®Ô«W¯Ä/×¯Å`(¨?ÞÃ×\x0012ú)Ç\x0006\x000e?ÓcÒ®ËUå\x0007ï-hø­\x000f~Ã\x000fÊ¢qÓzå6RCçáÍ4æá×Tù\x001a9*á1F¦'IHúQB°ÃzE\x001fS?w:Ã²¬ý"K©
®[K(¢\x0018~:ÃaxÖ·hMxñ«_³f±\Ê\x0011NÏÚÍ94\x0008þrW­<\x0014Ór1?\x000e/üÖ_¶Î[Ê\x001cFÂÝ¸óqø)Ý¢Ô>¹ãZ\x0016øR\x001as»360°#(ø×´aÁ\x000cËå¿àr'r*´\x0001\x0000qdM)+F:IÓÏ£CÛ¸/ÛÒ|0
"w°Ür{ßÐ`½\x0015\Ve­ze\x0015wÃ«kï\x0014ð&0¦à\x0018ßu;P1pü\x0017\x0002Âæíçk\x00110a\x001d8Ü°\x0003î5\x0011
DÁi.\x0010c~=ì\x0011\x0006öw	Ág\x001cìÇá\x0015¡\x0011S\x000539kJ·T!õ\x0010õbNU!r7â\x0017i!I\x00073\x0015K©þ°l§6oö\x00027:)Uêat³@L·M(êÜ\x0017lÖNá(\x0018.\x0010è7A!,\x001a\x000e{}^Å~\x0016{×Ô|n?&æÌ·Íæø´\x001få\x001d·¶@Á¨\x0018\x0006\x0019\x0000`p£Èµ\x0005\x0002\x0003m\x0012d\x0008>¥ÿ-ZÅ¡@\x0019q1\x000fÛÒ\x0008~=+Aùü\x0012JNæË·ÁÂé;\x0014}Ù³
\x001aV\x0003\x001eÈìZ\x000cQ{NùûD~.{\x0013ô­bìãÙL¤®ö ­µ\x0010Üv\x001fÜ:?\x0000÷_HµOÑ+ò"R=\x0010á\x0013\x0014¸Ä0ê\x0015\x0012ÏÔÁÃ4\x001c")à[´â\x0011Y¨b4¶ûÈ\x0004Pê>\x0001L·âV\x0016Dä¼!%!!-V\x0002&Ì]\x001bÙ{D\x0011ù\x001dJ@nL{gµ¦9\x001d©þ± y)ë\x000eÁPÏÂ6,-\x0017\x0002u'pÓfåî·x¦ÀâP\x0003ºÜ2L*¸:µÙìIA	k"³?·aÓvØ°\x001fâ\x001d±µÏh\x000eqÖífÍUg»2å_ß+ýLLBù\x0002N\x001dÐ\x0017:\x000báÏ
æÓâJð	±CÖí\x001adSß7¾xÞ\x001bA¢|/h<Ñ­ä\x0002ç\x001d±Z½p\x0016Ô ¶h§¤±ÜWý¼{Qäp$
bÐ"&ûÇ\x001b²ôïFdÏbµ´íCô)\x000c\x000e\x000bë-\x001c\x0006ëü»}H}xÓ5A`So:Æ\x001e\x0002\x000cñ>FX§	Å¹éÖù¤\x000fòØ½	ædøO¨\x0008ü~}ý\x0006*Ú©6ÆNn\x0000\x001eu#¶íúÅ=¦ù9P\x0002&ó\x0010
ªò#¢ÿH5µáÔÏÚ¤!å6"úåÊµh \x000bÂnóÿ
fí\x001eÛ\x0000"*eú#^\x0006.hUyÂÊÆí9\x0016Zè\x0002Å`×nÁdo\x001b\x0007M¦\x0011w\x0017\x0000ÙAGºYìÉ{fÆ^&ØÓØkJeÄL\x001cñ.2l¨ö¹Ûb|
^¨];ïÌÉh;Þ£k\x0008Ã\x0007z\x0016C3Ý\x001cìõö\x001al8\x001b\x000ey8J­ÃD-=@éÚTÖPÒr´
àì½0qmú-\x0003¤:\x0005ñ
C\x0019K³¨M¹âµÏÍÚµ§,2ïül\x0001ê\x000eì®T!Fyb%¨1Ò:æ1EÁ{7ydp©íÇ\x0002!ú=\x001e/àÏÛÇ\x001c7àEÍ*íí£>n\x001fñ:vÌ<¦p;\x0003Wcl\x001e
H>GÂÎYÍûW:È×\x0004$8]&zö7Ä¯\x001b±tÍ\x0004©=ú\x000e)Ã=Ó²ØyïÙpº¾£\x001e½@[uÒcí¸§æ\x000b¸¸Ý}ClW÷\x0012Å\x0005 v\x00163\x001dõü¨g\x0010/ä#¹##g¤ýÞè¸\x0008^d}àÒâÓí}Óý=ïPÀ³ýðÌ\x001bÓ\x0018ð)
R£¿Íw¼³vÄ\x0016\x0007\x0017ßÝ\x0005\x0006ào	D\x0007L4Ö.¬éG¢gé×ãyQ½öÀZ|\x001bãM\x00046[ùs_¸èÒxÂö£'zp\x0018;æ¡L£\x0005
97]Ëðµ\x0003/Ö
 "G¸rµ_ãù¶\x0019\x0008 ´'ï¹¦,Çò@UZk¸Éö©ª,Kb\x0017\x001eWº¨"W\x0000úEtjSOUæ)ªÒÐ\x001d®Êò$¯L%LVÂbÀzÄUWt;Ü

ú¹æ'Sêà¨A[êÙéìðV²ñ\x0014×®Ãq`«¯ÖÄ\x001dÍÎÃúµ÷züA\x001aË:5!æ×£Oð\x0015õ\x0010»þ&u Êïä\x0005Ût¢\x0005p\x0005Özt\x0014þ¦ep±NbÈñ¢LÖGrr\x000ewÇËJ«­ãõ`êÍb^£
y q\x0012uBAPN\x0010×<bèî@ErTA]Ñ¸=ÏÁåTÿJ :uÞ\x0012%\x0006¦éAÁÇ6.¸õ|õ_ß\x0008£ÈÄÓ!à#¨\x001eF\x0002e\x000có8ÓæxA`Q<»\x0012\x001aK0ÿU'àwc\x000c\x001a"3
1³f:Aß\x001c¡Pô¡³Þ!nØrÁi¥\x0018§}\x0011ñxdJIç~f\x0016\x0001\x000c\x0008DsÞ\x0012\x0005í\x000f(\x0010²iïH\x0011äweÂ%ØÄw$ö9£3&ñºMdSh\x0012ÍM\x0012g§\x001bDw\x001aä@*v\x0006=/ûçàY~y°
)g4À,u\x000e)=únºò\o+¦Xä).Q¾\x0000\x0008OO$ë¥\x0008Ee\x0003g"t¾=¯\x0004;Oå»UÁ\x0014ùß\x0001õiO|fG|\x001c9piTß\x0011T	Ù|"üÃr\x0001\x001d\x0013ÙðÍêûóu\x000b"K{²¥h+º6ñ\x0004øPß]#«òÞyB¡¨Ç:m\x0011ÑëÇPî¯@Ëk'mNÃfp½=ðTüC\x0002_oÝWÚ¨_ç9ç&9\x001fwnÎEà$r\x001b
¶ÀÇt6|4 ­X³'·PEÜ\x0002\x0004Æev«ßþ
êÛAPªj\x000e«z
¹ ×¾\x000bØêù&Á»Ç
ðaA,\x0017³8fg\x0014W]\x001c×ÈÇ,\x0018.~'å'Ã{ôª\x001a¯gÅ6ÿ¢\x0017Æ³×ÊTÙc§Á¿àdSº÷xâ\x0011Á0Ç\x000f\x0008\x0008T§Ý¬Ü=\x0018|xöÆ5ÒÊbE|$5­)	ÿRádos]$½\x0004
ö9\\x00109U2\x0005Ö)Ä{2\x001ct­\x0008hàÖC¹¿ð\x001f´ð'\x0001Û\x0004\x000c·³/P,!)\x0015\x001c}tNû\x0008.½aÜoð\x0010\x001a\x0004ó	(Ûó,¿Á/âZ\x001eÊ´\x0015Ü\x0013ë\x001d\x0000ý\x0008\x001aÍáXÇÆKmT'@\x000bü\x0003N³»òìHjµ«\x0001¶ù\x0011ëx4\x0005×¶$\x001d\x001d¾â²)±\x000f7oA~\x001e£:\x001eêHçæ÷þ
p \x0018^½ÁsÖ¹Ì3<h  SG|V\x0007ý½	M\x000b\x0007
¥òà
ö@>·g±ñZp¼\x001c^~ùíÅö\x0000[*Rÿ[VHè\x0010Ë\x0017\x0010ßP»ÕÅHï×Â'°]lí.ÓY\x0016âÇÌ<hZí\x0002­Rív\x0016µü\x0013 ¼#p\êÿ±^Åº	Ã@tïW0b¡\x0006%N\x0014\x0003\x0013\x0003­:\x0018*uèØfH¨\x0014ÔÏï;ß9ÓD ª\x000b±-ä;ûÞ{÷ÌVOç¶\x0010	yç=ãy¤\x0014¨ÚöIåØ|«2,¼Ù_zs¥\x0004Ônp{\x001b>²kðP\x001d\¦\x00191S\x001eØLv§\x001d<CÓeÛpõ
önÿ`¢Ôø\x0007¼0
¯¾Ï`¸<\x001e\ËsÕU$HÇ\x0016ü»-ª0Õªt\x0012,òÌ¹4F)üÖ\x0018\x0001i\x001889ÃÚÉ¤|ÿ{Y¤ñü@\x001b	ðBÔq7ë.¯ê\x0003ãE\x001a\x0004ÖÈî7¥ÿ\x000fæ]åCÄL9À0ÒyØÏ&üëgûa9\x0012è¼è+À4V&X9õ\x0017vë¶ð\x001eÏªî¸²\x0010½\x0005û_V\x000eÛzöÌi"»fØ\x001avÊDq×Nû~{yTZ§²-\x0012\x001b#\x0003Ksõ¸¢4|¿ûÍ¢\x001b§º2=ì^\x001f~\x0004\x0018\x0000Öõ\x0013
endstream
endobj
173 0 obj
<</CS/DeviceCMYK/S/Transparency/Type/Group>>
endobj
174 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceRGB/DecodeParms<</BitsPerComponent 8/Colors 3/Columns 1347>>/Filter/FlateDecode/Height 300/Intent/RelativeColorimetric/Length 183369/Name/X/SMask 181 0 R/Subtype/Image/Type/XObject/Width 1347>>stream
Hì×}P\x0014ç\x001d\x0007ð\x001b\x001d\x001c3ÓtÚtÚ´\x0013Û0M3:Ó¦M§fÚØq:ÓÚLß\x001d_\x0000Q$¸(/§ø\x0012pÙZ$câ{41kd/M\x0000MfÔUÔJVWÂ
 w\x0007·wÀ\x0001ÇñzÈËÝÉÁq÷,=î@\x0011ÎxÅ,&ßÏ?\x000c{Ïó{~ûÌþö÷ìà \x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000Àà
 ¨\x0008\x0000/XÈ>OíD\x0000 |þ\x0012\x001e\x0018\x0018@G\x0006\x0000\x0000ÿMQ«W¯æççÍfµs\x0001ð]»v-//Ï`0¨\x0008\x0000¯¬¬eY£ÑèïÎjç\x0002\x0000\x0000\x0000Sÿ¨]RR¢v.\x0000\x0010¾\x0013'Ndee¢¨v"\x0000\x0010¾ÔÔÔ¢¢"BÚ¹\x0000\x0000\x0000ÀÔ¥(ÊáÃi...V;\x0017\x0000\x0008ßÑ£G322
\x000b\x000bÕN\x0004\x0000ÂwîÜ¹ë×¯\x0013BÔÎ\x0005\x0000\x0000\x0000¦.EQXe\x0018F$µs\x0001ðq\x001cGÓ´ \x0008j'\x0002\x0000áãy¢(Q\x0014	!jç\x0002\x0000\x0000\x0000S¢(,Ë2\x000c#IÚ¹\x0000@ø8£iZ\x0010\x0004µ\x0013\x0001ðñ<OQ(\x0010µs\x0001\x0000\x0000©KQ\x0014e\x0019$Ií\\x0000 |\x001cÇÑ4-\x0008Ú\x0000@øx§(J\x0014EBÚ¹\x0000\x0000\x0000ÀÔ¥(
Ë²\x000cÃH¤v.\x0000\x0010>ãh\x0016\x0004AíD\x0000 |<ÏS\x0014%"!Dí\\x0000\x0000\x0000`êR\x0014eYa$IR;\x0017\x0000\x0008\x001fÇq4M\x000b v"\x0000\x0010>ç)\x0012E\x0010¢v.\x0000\x0000\x00000u)Â²,Ã0$}Q+»òÅ,üXÁÀÃâ8¦iA\x0010ÔNäQ@AÀW\x0005Ïó\x0014E¢H\x0008yë ¦\x0000\x0000\x0000\x001eo¢°,Ë0$I\x0013ðùzí\x0016,\x001beÓ8Æ*Ùliìp?Ô¤«Ñ\Zµ ÷ryóÝ~ß$ÜÆ\x0003á=áý\x001d¶\x0006¹B/×Xí½þ\x001bäu\x001eàuÙ,U\x0006]Î`47:\x0007/ß[ÔÓÝd1WWê+kj­vWè[&®fSey±¡¥{àÁ\x001f<ÝmõUúÛ:No²v=ÜnÃW\x0005Çq4M\x000b0ñ\x0001GG»ÍRgkjïê\x000b]\x000f;¶jSeUJ7ù\x001fÝ^â\x001b4TËz}Mc{wâÜ=íõ&£®¼\_)×µ:F\x0016\x001bùÛßU'\x001bM\x0006Q®oí\x000eù@+ÄQSq»ôsÕ>¦\x001e\x0006=®\x0006SUyNo¬nwz\x001f\x000c
ðxãy¢(Q\x0014	!!\x0007x\x001dö:³¡rT}V«-õ¶Ö®»£z§×ao´X­
Ív×\x001b"×ÙÑ:&NìïöÆêfgIÃUFÜöÆÚÊ
]Eliq\x000c\x001d××ÓÖ`ª4\x0018ªFK§gdî½\x0012íënjðwCÿü*s}[/\x0019;Àm·Ê²Ù¨7X¬­	ÞT\x0000\x0000\x0000àÿ¾eYa\x0018IBðõ÷Õ]þûÆu«\x0013W§¦¦&''%\x0012¿båæì6å!z-±]:þûoi^óÜê÷?÷\x001f1&çN\x0006\x0015o_·E_*Ý(n\x001b\x00087ì¾¥ýÛâu;/YC\x001ed&Ïm¯¹yé_{·oJYA­ÛóñµêvGðÆ\x0014âq4UGZª6>våú
[ßÎýÔÜÑç\x001b³eJ¯áô¾õq\x000be²gÊ{î]öºZ+?;wøÍôUËDGÇ¬HÍ|çÔJ«}²v
¾48£iZ\x0010	GxêùSlæÚ
»ßæn´øB\x0016­½èÄ>&meBVt¿Ø_OÛ¶ïJC_¿µð­ëÆ¤³§\x001d!\x0002(×e»]|æèÞ-)«¢\x0017-OLßÅ]ºUßé\x000e>³^½¶0ÿÝ-k¨¤¸\x0015Tò7/­ïñ	Cíå\x001fnúÓ_´Ü²®û?x»ët\x0005\x001f\x001cHO_¼4&6qÝ³euö¾±ó\x0001\x001eW<ÏS\x0014%"!¡«òrî×Ç'kµ)CÅ¤Õ®ÛµóÝ
¤\x0016§\x0004J»]¾ùÉî×¬m.îê³.cáýé8ÚÑm=J¤Ö¬ÏÓuö\x000cäu6×Þäs÷em\\x0019\x0015\x0015\x001d\x0015µzóëG>)]#¹z{jK/\x001cÙå¯Ð\x0015q¯®JÜôÎéW·;\x0005ªø<\x000eáÓd§kãb£¢%¬Mß{©¤É1\Áþ·G{õg¹\x0007äÄUËãÒ¶î8vñ?V'Ú\x001d\x0000\x0000@\x0008¢°,Ë0$I¡Gx{]úã³Ò\x0004M>ÿÂ\x000b¿]WGB}\x0013æªø^þSæÙ\x001f/xÏâà¤\x0012\x000e§\øÏèù/E¾DÉd0\x0010¶]\x001f÷=æ\x0007sç\x001f«õx'o¥Ñ|ýö³\x0019¿úá7\x00023=bFÄôà>-ß_n\x001f:¸Út'µ³gN\x000blÞ´À'ùEÖekÔ!É{×Y{euä¬\x001aÍ·\x0017nÞ_|ÿÃÅp|íâ\x0004fM1sæ`ðEiÙ¥=ävàñÅq\x001cMÓ L8¢élô\x001f_ô???·àd½7dÑ6óûñµîÿwö¯ÿpJ¾ë?úùlÿ§ã2¸\x0010\x0001ÜÎº\x000b±ß|2"\x0010!bÆázXr¬¨Þåÿ½S¾xpÍHüÀ­yöÅWöÜ£
Økn\x001cZúLàqy[ÎõÎàe\x000cºnïüÝ/g\x0005CFD\x0004çÿ,å@|çÿÙ:©çy¢DQ$\x0013´Ç[9K H5#"Ø[Ñæ\x001aØpåTúlÿ¥'~³«¤¡Ó;>£ôdö²9Ã\x0013§O\x001b]ì_ûúS»nØ:<ã'Õ\x001cß\x0010ó\piy\x000f÷»9N>V;ÔîÁ^ÝWæ}?\x0018r¸À5Io3\x0006
ÔÕªçVEÎ\x001cî\x0011#ÝR{«Ñ5ô>j7ð{c¾«\x0019Õ-5//<Tâ¼í\x0005\x0000\x0000øÒP\x0014eYa$I
=ÂçvÉ'|z¨[Ï]²ußÞ=»F¼¾ý\x001f;ÞûàbMïC¬Xsþ`fb\x001cõF^ýÀ`¨/pußØ\x00107_£5oÉAÛð¥ÿ²_æAM¥I\x0000\x0005\x0015(°\x0000«â¦\x0000\x000f\x0012ä\x0010E·¸drh\x0004\x000f<g]Ä\x0018@ ²2(G\x0014\x0002\x0003\x0002ré°D\x0010E\x0003\x0012Å5

¢\x001cB3@ $@B®ý^¢ÖV\x0011§¶vfj×÷ûë¥»¿þú}ùúu÷Äãê¢äCÇRÒrèC\x0002ño¹Ù\x0017\x0016æúëÍÐ+Àáè8úG\x0013³3\x0012üUÁ\x0003vÄ¥7RÙl×£\x000cÅP³:äàøØ\x001d[å­¶^qÛ\x0008W\x001eT8ùún\x000eV_WKnf\x0015\x0014GbpäÎº?+Ü×\x0002uÖzÉ£Ôæí1EëÇKÞþ\x001eïðíB&ñx<JýªÅØ½ð
àúØyxW\x000e%Ê2}?%x#\x0006ØXÅ_¹ªHô´Ôó«Y·;9"Aoù:;#pOq	åì%ËE³Ì¢½Úêð÷\x00089{x4DÑ«»­y13?T_\x0010«\x0005\x001ayUÈvïéóñ\x001eîkj¥ó±ª~H1¶Ì÷5åÅù¢U?
\x0001nÄ\x0002\x001aW®øÌ@'\x0013àÜÄÉ÷ø%Ò\x000fGÜµÕä³@lz^I\x0005\x0001áÛB¡àp8\x001a&H\x001aðegÃ\x001c Hs9:".ùbZj*ñDä¦ufp&¨¨£LN4t\x0001³áæ²¤
\x001a\x0010J;0³upZIzðÚ*S¢À"5U(HLIOO³=5ýtpn~Éþ3/rcüíÀ\x0012=ãÓ\x000b\x000b¯à­ÍÁOC÷P\x0002u
´\x000bý\x00151nÖ é¬q\x000bM$\x0012Âí5Qp\x001f¹ZÝ\x000bÊeÏ\x0002E54ÚK¸JÊßï!\x000f\x001aB¨bÊdC¼¿)Ò~ã\x0001|ÜÉ]\x001ehðqX_?"\x0012þ.\x0015\x001c\x0001\x0001\x0001\x0001\x0001á\x001bF*H$\x0002À`0[çy]E\x0018\x0003PO\x0003c\x0013i\x001fE<îôg8S\x001c.oA \x0014µS\x001f6?º÷àÁ³×=C<|\x0008å¼~ÚÒÔXßHÞþ~RáLÄîzx+3%\x0011.TÕÔ6!ù\x0012Æ§\x0007v'­²0/;33;¿ä6õõ\x0008_!æöu2ëîÑ\x001f3{8\x00121ûÃëg\x000fó\x0017]#ó¶;©ÛÀ\x0000¢më\x0012]ÖÜüôí¸H4Õ×Æ¨¿UYþfBôelYä0©µ7³²r²³Èåõ¯\x0006¸Z\x001c©DÌíNo|ôìÝÐÌ¼û¡®8/7'+¿¨îå)¡²³ðÇº*¢\x0015Çî$R'_:7ÞÓz=Vo9èV\	\x0005Ï&x=ÍßÁjTpNÃ+¶x¨ù§dO¸sQ	Ïûç\x0000x»!zùÅ03´á§©\x0005lO\x0018\x001cE@²F¬×j tÇjáÊ\x0002^_é÷Vêï´Ç¿âoGø\x0003B&ñx<JýªÅxCx3¸Nv\x001e>\x0003b²Æýàb>¤éä¦j?;õIöÔôôP´(ì-w´3 k\B\x0005{Éòéç9^zð=ÆÄdÖ´KdÝôúËµÔÄõBesÓíëp£ÒD%Vw²¦\x0017Zo&F\x000b®jj\x001aV=º Íud;lf¨£\x0003}ÁX@ãÊ\x0004ã\x00151N¦ªÞãë\x0006\x0004\x000bl\x0016³ÐÇp\x00050Z\x0017}¡êýâou\x0008\x0008ÿC(\x0014
\x000e£Ñh\x0012D©\x0001yël-\x0004GÞê\x001bcB\x000c*qGSÉù]\x000eòq)xÒ» ÒË5 vPfëà´h©\x001f~[UÊ.~\x0006+w^ë\x0019\x001eãrg8d\x0004ù>=/.Ù^òä\+
laa\x001fS6>Ëç\x0002ýW\x0001ë¦¤|ÑÇ|u¦pBî>UÒ67ÙßVzD[G\x001d\x0008\x000e¦ßz?ÖÝtU^
!­¤F@Æïo­I\x000e\x0005*\x0001\x0005-\x001f¹£Íùq®às ®édqÝe\x0018à\x001cedv´Å\x0015(?
\x0004\x0004\x0004\x0004\x0004?-R©D"\x0011\x0008\x0004\x0006¡ÜB<Ïë*²Ä\x0018bë¶?©vøßu\x000b«X0û®f¿¿ûºµ\x001eþÇS
ÛU´;ÈÇÑÎ"â{bí;\x0001hÃÙ-äÓ\x0007°\x001eÎkím,­lìWoô\x000eÛwøIï¨@îcÓG#ÅG\x0006z­²Ä\x0018ëë\x001bÛ®v÷:\x001cßÄ\x0003\x0013HUÚ\x0019{\x0007ì¾c?³Dbù\x0000ÒYqí´³\x0007ö\x0000ñnßBOEÔvguU\x0015\x0008RÓÐ4\ë¶	ýÍ\x001bi ]
su<|2¸(W:jJ/DîØê±Á\x0006mdddl¹Æe³\x001f6-¿¢\x001f\x000eB$fÝ=\x0014\x0015ììé\x001f\x001a\x0019µ7Ô×\x0001F`l\x001d¼°ç¯ßy»´\x0013.ò&º\x001aÈ¹ééù7\x001fäGÂ\x001f£\x001c7Ô\x0005Ë\x00042½»»%?\x0014\x0003:\x0013È9Ú
#£Oïà­5 ej{x2Ig11H\x0003rvî	°1\x0006óy`\x001cÁQ¸	^\x001eòÚ\x0000´«¼÷VtM/ðFèÉ!ëõ!È&4¦èí¯ÿ÷\x0011þHÉd<\x001eO¥R¿j1~/<À\x0019\';\x000fÊ\x0001±DªÄ}ÿbðz]hoPF\x0012µD(ì-w´3 k\B9{~3úªºàFÎ«ÛzØpÆðYí\x0019Öúp+ÿ]F=ý~éûÀ£.&:&\x0004ZA[Ir¸\x0005\x0004ikÚarD²ûÛ,ÞF`×(Uø«C, Á#\x0013/Îvs²\x00029²*êbU§X.ëMs£Qó<J¬gý7§ð\x0006BÁáp4\x001aM"Q>ºòeI;m UK\x0013Ä_¤Wµç=!\x0018Ûkïge²1zYÒ\x0006
\x0008¥\x001dÙ:8½´|Éøm)\x0011ö
\x0006} Qð\x001f&\x0019li¨¹q|»ªuJ!j:\x0012±\x0019ìÙâA\x0017òÚOZiCÉÄ\x001bLàR²Èúy;\x0006$(MÈx::3ÚVKÊÍ¾q³kD¾ßÿâF¸<æÍ\x0005-\x001fºèÅç¼@~\x001bèù\x0017öñá7{[\x0016\x0005Z\x000f}³\x001dÅ3\x000bâ_\x000c\x0001\x0001\x0001\x0001\x0001áOT*%H\x0004\x0002Á`(·\x0010Ïóº,1\x0006pw½v3öTZnæå\x001f\x0014ü=9õZÅ\x001dúGØß\x0015í«\x0007Wd-kç}W\x000bsþú\x0017}¸
W5Ù}¡¸'å\x000f3\x0013°p®¢gåî\x0013\x0018èíb\x000e«!ÿ3·Ã @Ow<Èô[	K9y\x0005lßâ`¡%/ð[ãêgû®\x001fÂ®\x0000\x0001¬vù©O$\x000f /³âAÇ ï\x0010ÿf®»rO°:j\x0019°WS¬]¶Fæ·Ï,°UÚ¶ä\x001e!ècæÞýã¬ßzÜ­ÅÆm~Þîæòg]«MÄ²v¾L"ê+]og\x000c)Ðwð\x000b\x000eòZ³r<¨m{þÅ~¹\x00075uåqü\x000cd\x0012\x0006:\x0010\x0006\x00115\x0003DÌ\x0016y
7º:Ò®\x0011d\x0011\x0005\x001f5ø(>ð¢1\x0014ZVQªh]ã#¬¸	>v5B\x0006hX\x001bAL\x0011\x0014#5DBR!@ \x0018ì¹\x0011Ymö\x001fÞÏ÷w¿çßùÝû;ç÷;(·R
ý6_*3Î´[s?Rú°¥®lO0Ü\x0007\x0001Dqo5j B-+Éã\x0004lðÓÖ\x000bd]FCsàÀÚå)éÂ»?ç/ePmÀTæv®´çõº;?nr#\x0002'Jä\x001dY©1\x0013I\x0018|PØ¢ÿã_\x001fc<ÁãñØl¶X,\x001eS¡\x0012%0\x0019ðo¦E\x00157\x001b\x0011\x0015º,{\x0011\x0003\x0016ÞTúÂ'Ï=e\x0001ÖÞ\x0005W+ªÚ`e>¬Wð}éPàÉJç«ßëÓ°ªöÊ\x0001æd[¸hÐ\x001eá½ZÉ¹ïc\x0001 9ÓvÔô\x000cÁ.eèñå}«ý\x0000 Ý*UC¶îôANâ¶½?^¾úïïç9ØÚ\x0000\x0010/éCçBûå{§ÃCÆ-öÛ\x0002Ù\x0010jÓËsBi®pöéË¿9S÷ÃÀø\x0010
,\x0016K" \x0008bU \x0015e.¦\x00030ÅmEþ£æÎçmm
yya.k\x001eÅru\x0005ªTèÌæÎÊ¢@[@tÉ«nÕX¹½\x0006\x001e\x0014g¯ð·]à7\x0007¹§ÏðÎ>uê$÷\x0004ï|±H®\x0019¹hßÉ ²<+&\x0018\x001e\x0007ä èï*;Ì½÷S<)$\x0000"6î\x0017µÀ÷FCoM\x001aÍ\x001dZ»r«z3ÚÐt<\x001aê2mc¼³áÚ±
p[ÉË.6÷¢\x0017\ÓÕ¼­3qÀ~o¦ø¹vøC1®1L\.ÃáH¥Rë
£N+/ R&\x0002ë\x0004nª\x0018QvJR\x0013Þzk\x0017¹£PÒ
ß©\x001b¯LqÛW*~í\x001f]îuºÝ¦3·ëÕ?\x0015¤£¯í)[Ôµ¶Ê¥zOwõð\x0011tàêÑ]«>\x0007Â\x0014(GêùD7£\x0004l¸ \x0018în}(:\x0018\x0015ê	'ðð<q£ª¡¥ßlî¸â\x0017rA¡7µ¢_\x00068A	Égn|þízü\x000eoõß|ÉDè\x0004uVJµ\x0016\x0019n¾\x0014\x0016@
\x0007úÜUGEÍêçuWöÌ¦O\x0016Fì
aÇ{Ù÷ìîéÌ\x0004Ë.q3·\x0014Üj×÷×ü=Â\x0001\x0000<\x0008>róq7Ô¨j9\x0011dÔâ[úøA×£jëT£EñÆÖ¿ÐÀuA*WÚ3:'Òp2m×Û1wÛz@ðþ\x001e
ãO\x0006Çc³Ùb±xLJÀdÀ\x001f\x001e\x0016UÜlD¬Õéê²ìEÁnV\x0012}æ¢Í¥ð§3èø¾tX¹{²Òùïù	MÚ\x0006Ñ?¶Ì±\x001c\x001dvS³ErEmÉ\x000fë \x0003D'µUªAØ¥èê/î]	[	\x0012Ùb1
ý=ZÝK
Ý
g¿&Ûãà	/é³ÌgÔ÷VdÌ£Ú\x0003à\x0015»ñH.U\x001e7\x000cÛ\x0004@IH:.û\x0003ÁÃÀøT\x0010
,\x0016K" \x0008bU \x0015e.ù\x0002\x0000[G¿¸­\x0019YßqØkbý§»X\x0012ÕÆÙ{KY£
Ê:$E\x0019¶è\x0010WÝª1ü~\x0007ÅÙ_\x0007ZIvâä9'\x001f\x000f\x000c[_ý5Æ¾\x0007ÿÚ\x0012áêXÅùo7hïï¢»Ã|\y´v\x0010j\x000c\x0006­ý9Õ\x0016ìÜ*ÍÃ
ªºë»æZ\\x0010}£iÀØrýÈzoøèB`\x00166õÀSÀüôÊáÍÞð\x0010\x0008æ¿\x0018ü¸xb`````WL&\x0013Ëåp8R©ÔºÂ¨ÓÊ\x000b¨\x0014´\x001aÇ\x0013Iö\x000ed2Ùq\x0004;\x001c±$>·zô¾o½¹wÃü	ÿ¯\x0007¼ÒÏW·Ñ;[^=\x000f\x000f/dàu¦TÙgèiK/l&à¡%øXií\x0003©àÛp"\x0000¯N?ê\x001a@ç\x001aèhþ¹¼ðÒmÙ6£¹åüe4X­3"ùJÑÒÔó8\x0014£ø'óhÅ¡ý)yi0\x0000Câµ¸Ó)Ø¾Ò\x000b)~¡E!³þIÖìYÎP\x0011¶,§üÅd¨v\x001bë¯Ð©Þ\x000cn]¿Ny1"À\x001d\x0016H1É\x0014#æ\x0005\x0011p\¨ó]Ô·ß=¼k±eÛ\x0004ósÏa[Tsm8\x0019F\x000eæÝwCªF\x0013a±\x001d)køut8bÐRfÓ\x0008ÀuA*WÚóêãÍ]×ÒãÃÑØ»¸:/wäl\x0007\x001ffD%s+:>ðScsx<\x001eÍ\x0016Åc*T¢\x0004&\x0003þ?ô°¨âf#b²"Qe/
fIv;\x0007GG\x0007\x000b0Ñ'G­K+WÃTÖ7ñ}é°eðd¥óÕïrG/\x0017íO6\x00176v\x0013)É\x001bzÌ/\x001fñ³\x0012fÀür¢®«Ré`Öê\x001e_Üä\x0003\x0000ì±ön×àh³aèmXN\x000b ¬|IÅh2\x001aºïì\x0013àf¥õ %nâÉ>2p\x0018\x0018\x0012B¡ÅbI$\x0012\x0004A¬
´²¢Ì\x0004ß·\x0013À\x0006O \x0012ðø	®ëÊ\x0017:TÖz»(#Ð\x0016\x0010\x001dbòª[5ßÏ3ð 8{e\x0000:`û\x0019ÌsKºÛ\x0013q\x0013è³gåÃÖW\x0005LÐ¢ÝADô\x0006\x0007ÄMéWA£¡ÿþN;	èÝyU½¨Á ±½¨¶\x0000,dçViÞXº±dm\¨Åq²³çúgZhlº|(å\x000b\x001cÀ¹\x0010cÎ+5/¡åéÃ½¡e\x0012)æ|c·îãâ1^1L\.ÃáH¥Rë
£N+/ R&Â+wþeÏ\x0006ôº¾Þ×hú´\x0003CÃo¨»JH
x][ì\x0012Ô¶\x000c Vúiå¡8<ÎæU½A"ÙHD\x0002nD¶íWKK\x0005éAD@p¶áò\x0013µîµk&\x00041Yº¢D\x001a\x0000\x0014F$_i0ZLõ<N"\x0005à(þÉ|%ZqtW¬Y\x000c\x0014§YÌ}JÄlt
¶¯ô\x0002`_hbÈ4\x001eú2d\x0012\x0000~ñÉ×ÚF\x001dV\x000bv®	Û\x0016w¥\x000fµO\x0005\x0014\x0000Ün;ÛeñÁlV\x001caFÂnÄ?.IÔ9v\x001c[ÊÒVÍ\x001dÙ\x000fÁ+QvëQsû½ÿd;Àéñ_åÝnì\x0016U0'\x000cÃà±¶ð~Kÿè\x0004¡W2F\x0000®\x000bR¹Ò\x001eËâ©ýjô\x001c¸\x0003 fê­VÝN[/È\x0008¡;\x0003à\x0011½îäó\x000fúÒ\x0018ã\x001d\x001eÇf³Åbñ
(	s\x0004ÐÃ¢
ÉD]½(À\x0019Ø1"·\x0017ÿÒÕÞdA¡xªléT÷\x001bÍ&½^Á÷¥Ãðd¥óÕc;SËÛ\x0018íã¦\x0003ÞÅ1úxí\x000b\x001dÚ\x0015ôÞ;\x0019\x000b\x0000Îº®ZZtuÿc¿LÊ²8~\x000bJ
¨h	\x0014 Õl5@\x0003²\x000b B)6¸\x000e\x0012¡\x0003Ð6j\x0011D\x0008l¢h\x001c;(¢\x0000ÚJl\x0018Û6\x0010»kD{\x0006PY$¬YØ_\x0012\x0012\x001eIæ¾è¡gjz>t·ï÷)yçÜÿ½ï¾{î9§*+b\x0019\x0000z61÷ù\x0012ùÛá(ì\x0013¨DC\x0002¼#¼)¥ì±wÂ²ug7­°\x0007ÿeXd1÷Ø4\x001cß\x001aL&D"±ÙlB¡Ñ\x0001áÒ¹À¨!\x0018oß îÀþ/\x0012\x0012('Ï3ê[ú¥èÌ¨î\x0006zª§>Ð]¸ùôÃî\x0011ôC\x001dñóÊ¬ð%\x0000,2	-á¼êxÃë¡\x000e\x001dþê\x001bÉ½\x0018j½[\x0012á¤3O\x000b\x000b=[Rúõ\x0017\x0012ì1?Mr´Ñ\x0007 (±°\x0011»\x001d¦PìlG\x0000`\x0013¹àáÈÌðÐ}¨ãVkÝæêæ\x0011©zu-Õ\x0005±Î0í¾úfT\x0006´Ý(Úç¬\x0005\x0008æËÞá#rÍ«ÁÁÁÁÁÁùXQ*T*599Ãáhö"­evÖ¦0én>ÁøE9Þßòc×Î\x0016×F\x0001§¿kÆº×Ia+«0p6÷DJ~Qnf^~Ñ³gÏ\x0014Ð\x001eòzÖ\LtÐ\x0006ó\x000c#®u¤êy\x0011DØùäy\x001b\x0004Q©zèûÃ\x001daÉ°bmMjJ]_´§GØ\x0002-+÷¸ÎIX¹\x000cÝÞ¾\x001c\x0000\x0013¯ü\x000eø^Ë\x0000ãPÄb\x0000,ÜVÑÛ'T/3ý½
\x0001X\x001a\x001aWÕ6»bÁÃv\x0000\x00188x¤ÞåIÚ+}=¬á<a	\x0005\x0015ê¶Úä\x0007û\x0016÷mQu\x0003s¼õØ£½Ä\x0000]ìå\x000c-]¾¤sºÆ¦f,CÍu%»L`3\x0003Ö4¼\x001eODMu\x0005ë\x000c¶OúV¾lVCÖí[ã¨\x0003Ì\x0012¨\x001cÌS©êe&­^¼\x0000\x0000ç­ñ×F¦ýµ!k\x00000\x000b<Óó\x0002çcF£Éd\x00165§ .,Ø\x0013\x001eÓ%¾5ý]w²7»\x001b\x0001c¿Ð¼\x001f§>4+äòö
W'\x0018\x0010ö¤
¡F	%Ú}ûX°9v\x0005|âùÙQÆÏ|Éi¼élÚN\x0018\x000eFÆ?\x0018ÃèB[\x0018yQ0Fç\x001bÙ\x001e|"Ì6\x001bèh/J4$h\x0003àM)e½¯w´<«¿Çjäp¸Üú¯C\,aKãw §®ï?l\x0010\x000eÎï\x0001&I"Øl¶B¡Ðèpé©;`>´²	/ÕÝ'\x0014\x0008øý|@4<ÈÞ\x001bÑÝ@O]®\x000fô\x0016Rz\x0011å:âçY»Í_*\x0007&Ð±)5øO3ÑvçBÂZ\x0003\x0018`Þ'\x001bS/ßo\x001btjrèQ¬µ¥\x001eL²\x0011éf((èúÖÅÜ\x0004+\x001er\x001bG \x000f*ë¾³ÑÇ\x0005ËÀÊ+(£¶Y(]0«ì¯\x0003´Ì\x0016ìdðÆ±ÇoÅ\x0007Âôl½µäÙ°\x0004Õ¸\x001e\x001c\x001c\x001c\x001c\x001c\x0016¥RI¥R9\x001cf))ÒZfgm
ón`lJ}B5)\x0013¿\x0003AÄRlºäï¡R¢lM±\x0004ÿ\x0016Û\x001d\x0005Ì\x0017\x0008¬\x0018:~:·\x0015`ÉÛ|Ù5©BGú[~(MLLËÎ­àöu=ªÌÛh\x000c¶]äõ&\x0001&&züÝÉH_ÿÍ[w\x001e{Þßtnÿn;\x0000L­.x¨ç\x001a¬Iù\x001cö$z¶Ëã*:'a!!ü!zÛ
uB¬\x001f^:\x0010\x0001\x0004\x000b·Uôö	¢ë¤·\x0015\x0000Zö\x0001\x0011_Ï¨ -Õû6yÁQ.\x0015¯Ä\x0013U>îÐÅ6ì`\x0019\x001f³CÝöSÁ~°oqß\x0016U7 iÿd¼Ä0K.\x0014oï÷çÂq±H(èíãÊUâ¾'5\x0014_l'\x000cÜh?uÀ2æÉ­ÂÅ\x000b6*}Ò5ú®êR £uûÖ8ê\x0000ó \x0004*gX­­\x0018bgú¸.õxJ«º°\x0012?=·Þ\x00136.fë§;ýçÇù\x0003A£ÑÈd2ÅÓCP\x0017\x0016\x000c\x00068­\x0008¨hÈ¥\x0013R\x0018y\x001bÆ\x0012©\x000c\x001e1á÷Ù¡îF`áÏ2ÔPÊ+äòö
W'\x0018\x0010ö¤
¡\x0006\x0007©¨¹ËÇjú\x0016X¾)ò*|Øj©Æ[ª\x000böêÃ°5qO¯íÁB½&7j\x001eÐ¶²ÜQÞLÎÊ £½\*Ñ\x0000e¼)¥ì±imTöº.?ãH\x001cñ ~\x001f\Ù/ÜãOÐÉ=Rý\x001a¯óqþ\x00080L\x0012Äf³\x0015
F\x0007K?¾Ý\x0001hÙXÅÔÏ­ÓÝ@Oõ$\x0000Ý\x0005AE
mBd
!\x00082·å*ÕXSev¸3Ìf»«øÒÿ.|$¯J3#í\x000c±èÖÕ'¯=h\x0013\x000e
\x0007úCÃc¨¸ãä\x0006\x0007sì!\x0019<JÞy+ÉÐP\x000fæ¿ìk]*Õ¤ éb¿úr0òÚt+JD\x0002~O¿\x0000Q¨Æ[o\x0014Åº@ÝúïyRjQø%ToftÈ5ï\x0006\x000e\x000e\x000e\x000e\x000eÎGR©¤R©ÉÉÉ\x001c\x000eG³Ç\x0014i-³³6éÕÞsm\r~Q^nö[2)i9%èÏD0Eóª²W~
»N`f»\x0018ó¹¿5a\x001e\x0000Z7¤3\x001eH\x0015b^}Ñ\x0012,{\x001b\x0007\x0016_»É¸X±'`±¥ýôM"tìEMN:½\x0004}^|ùÊÙôè \x0007õ\x0003û½î¤hwÌhí³'óÒå+e§\x000e\x0005/±\x0005¼½g\Eç$Ìð¬È-«0\x0017\x000bÈôs%7Z\x0010W}´\x0018)n+éí°\x0008@\x001a3bW\x001aÃA\x000b
Ý3´òòóiQ¶XMBðHiC\x0014hWÕjw+\x0000lÂ\x000eñ±ºí§ý`ßâ¶5ªvàÃÍA^\Zo0_W½R\x0003\x0007×¯2²()GÉIñ_åÜl|%AE?ß¢ª­{\x00149\x0011³Ã\x000bû£³ôÂ#ÞÈÔ;%\x0005:r;Þ×A\x0007X\x0004\x001d¢6\x000eO\x001bØVEûb©½ó¾Ü¿_>\x0016ég5\x001fn«G\x0008ùÛáÿÿqÀù\x001dC£ÑÈd2ÅÓCP\x0017\x0016ì\x001d'+û]	9ù'rOädgeeÁ0¦äºò\\x000cOÜÝ-\x001eF@ßo]ê}
u³B.o¯pu\x0001aOJ©\x0010~`Úê³CÁ[­\EÎÍ?||äpüñª¦¶7gÞ¢î\x0002\x001cC\x000e\x0017RO&l_c¥>ßÄò¶	ôÝèh/J4$ÀhõJ£5LOJZ/n7m\x0001°tÝòÍÕoNì\x000f¾4¢ò\x0019í¿z\x0007qp~\x00030L\x0012Äf³\x0015
Í­+Â¥\x001fßá\x0008µé®ë\x0002\x0019:Nw\x0003ý¸×\x0002 ¥ã\x0018\x0014s4#+?ÿ\x0004\x0016ìÙXÈgPÒj]¯çíiÙbáöÊ~É:ïÓ_ûOöë>¶ó\x0003ø(c9\x0008\x0003J\x0006Q()h!\x00102Du¼T@òR\x00081àZÊKv¼\\x000f\x0006d+\x0013e¼m¥Ü´ÞVµ\x0014
q4¬b\x001c\Xn­Ö´A«\x0016J\x0006ój8ñËÙ>?÷Ø!Á	¶:y\V~ÿ|÷<Ï}ïäßý[R8¼»ºuzýzö\x0017{öïew½¶9räý*\x001fvWüÙpÃ\x001b5qÉ®·Þ9ºýqáæ¹êÍ\x000b5¡óöù\x0014\x0014>lÊ¥;ùë\x0012v×.fëö£\x0015µmªRûç£ëu³?a\x000f<ÎÎ)Ê	÷¨y\x0017ë\¾Ø\x000f\x0003\x0000\x0000\x0000xra9cYVåØ#^wÍ»#2,T<\x0019\x0005KN}í±ßüyNüLºvÿ_!wå¾¹æpO\x001e3{mé-§ßUûûçg\x0016\x000cÕEOÕY2Çm*\x0015k]¡ïÞßÏ\x0016çf\x000fÓ÷Y;sìÔ§k:p°¾ôàÆðçC/uè\x0010S\x0012¥\x001f¿®ìn \x0018
\x0005¾Ú³qÁ£ó\x0005Çª[ÿuþõµO¯¼I§jýámJË­ËuÉÑ×H6LX¾ã`E;¹Õ`ýyä*#my×\x001e¾y²u¨=<÷é\x00145nÑêr{ÿg£v6q¢8¹Ïr½²¶\x001cû¸+\x0014ê¬«Ü=uü¤AÎXò&/ânw)8j)¤:­ÓFMË­oW>è9Üvy÷¦ùÃÓú,l\x0018½|ÿáë¥\x0001O6ç\x0019\x0011E1î\x0008{ù²¹\x0013â±5eÖi\x001ar\}cÁx#¥+¹·"ÆÆ\x0019ùýµ§Ç"È§V3\x001f8\x001e;ÿÝ£sÍ¸Ñâ»ÿÙ\x0007;ù9zLòÒ7Q0ª\x001eTgã?N¬0wüSvóÒÃz@ªz÷Òê\x0005QµD
²ddÎ9Xö·Æÿõñ\x000100\x0008@Ó´$I\x0008ÅþvuUî^ü\x0014i½Öç\x001c¾`¼u\x001a®¿¿g!N½SÏTUW^8ôÓÑ¤2ÍÅgZ<ê·å"õÙuqýsb÷»Ñ¹k.yIåÚ®¬+Þ§¼M\x0019E{ÏW4B/½3âÄÉë¯Hº³\x001b¾\x001dÝðtCY¼á¬#ry\x0000\x0000\x0000\x0000DÃ\x0018s\x001cÇ²¬,Ë±G Å÷Ü¼\x001cÞöd*Vñë¶ÒMy9¤í.xyßµ\x00062-\x0018r~º½¨ ttÓôÅ\x001b.:É±ÀÝ\x000b%ÏO}:=9%5Õh\x0018µtWÙ-§g³¢8ï\Ù?77Ûj1¤
úäü¢ý§>këÞß\x0007ê®\x001dßñ¬Áh4L©ÆY¯ü\x0013wèµ¥\x0005é¹EÛ.Õ\x0005"cn|hÓìl*Ig±ff®üã×íwÍ\x0014;íÙ÷üjä2JkÍåßmj2Í\x0016]\x0012µhã«5;U¶òÙÓÆRTá»ÏG>RÈ»o/CQÓ×lÚû?\x001b_{X2?+Ãj4£\x001fÅdYXò^¥3\x0012=ÐPQ2i|ÉbÐé3&L|«~\x0010B}÷%8è©|³xòpÝè\x0015¯óU\x001dN¨Íï1+&ZõFÅb1èu3_:péV\x000bìj@?<Ï3\x000c#bÜ\x0011«/\x0016O';ë~Ul1êL#\x000b§ì,ï\x0008Úo\x001cYù£ljä¼UÇä\x0018_\x0011È\x001f¸÷á´I¤ 6¾q¹­ÿiíóÖZ­Ö´4³Å\x0012U\x000e\x0016³É0vÕò[á\x0012òØom[aM7¦(jÆ
åw~\x000b©-_¾³nDF:e^þ3Uî¨\x0004õ×N®û\x0003*IoNMM\x001b<dò\x0016þfc\x0017\x0003øÎ\x0010\x0004¦iI\x0010Q«úì¯VO¤\x0006çM|õR»?\x0018o¦g\x000fÌÊ2¢k1RÁFóÔßVØîU\x001f_7J\x001f3þî{ÕoËEÌv¢x~~1¥Ïi¦A\x0019\x0005\x000b_æ¾èëªùdËª9\x0014dTès;Ëªí®ðñÚOË^)
wÞèé\x0016Ò:Ó
ÃÖÊÿög»\x001dÛ5|Ùl4ê²f¼°ïÂ=_BÏ\x0011\x0000\x0000\x0000ø®Ã\x0018s\x001cÇ²¬,Ëq\x0007!Õãq»âðxês»Ãc¼>¿Ú½«ÆAßÃi^¯Ò}\x000c©\x0001ß\x0003½ÑVgkhjqty}jïY¤ú½]möÆ\x0006­±ÙÑÞé
¨Áó8¨z]\x001d÷\x001bm¶&{»ËëWÉZÇåö5zG¸íÍ
õ¶\x0016§7\x0010Äd9ÇExÕÞ
\x0011FAÕïîêlmj"+5·w¸@°7\x0004R½\x001e2Ã£ôÜ\x00049\x0014P¼ä.¼O}ük!|	¯;ö³!\x0011{Âã`Àër´4ûn¶·¹ü}ïº÷\x0006ý
y^nÅ\x0017\x0008â¾×\x0008¸:\x001f´4ÖÛÈci}Ðåö\x0007cÍ\x0007O8ç\x0019\x0011E1î\x0008¬*7v\x0019»=È\x001f\x001c«È¿Tu\x000fo\x0003Ï\x001f£ Hu)ñ^\x0014JO5cRS\x001eGKC­ÞÖÚöË\x001fQY¤fHe)ê¨û\x000cy\x00118Û\x001dMdr­ù\x001b·\x00121\x001dÿ[ Ð4-I\x0012B(æ\x0000R\x0002¤WòÄjJ½Â­Î\x001b¯q{Â];\x0018®vW¤þw5\x0014îØï\x000f¯¯÷AZËÙÖÚÔS¡\x000fû]¸÷úbÎ&ó\x0015µ§«áðf¢³ì\x0002êlö¶\x000e\x000fÔ7\x0000\x0000\x0000\x0010\x0007Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002\x0000H\x001cÏó\x000cÃ¢¨u\x0010\x0000@â\x0004A iZ$ÖY\x0000\x0000\x0000\x00000pa9cYVe­³\x0000\x0000\x0012Çó<Ã0¢(j\x001d\x0004\x00008A\x0010h$	!¤u\x0016\x0000\x0000\x0000\x0000\x000c\\x0018cãXeYë,\x0000Äñ<Ï0(Z\x0007\x0001\x0000$N\x0010\x0004¦%IB\x0008i\x0005\x0000\x0000\x0000\x0000\x0003\x0017Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002\x0000H\x001cÏó\x000cÃ¢¨u\x0010\x0000@â\x0004A iZ$ÖY\x0000\x0000\x0000\x00000pa9cYVe­³\x0000\x0000\x0012Çó<Ã0¢(j\x001d\x0004\x00008A\x0010h$	!¤u\x0016\x0000\x0000\x0000\x0000\x000c\\x0018cãXeYë,\x0000Äñ<Ï0(Z\x0007\x0001\x0000$N\x0010\x0004¦%IB\x0008i\x0005\x0000\x0000\x0000\x0000\x0003\x0017Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002ÀØ/ÿß4î3ÿUû\x0003ªíIî\x000f«ØÐ&¹hóRzV¼©Ôëb2;¤ê8©Q66 Y`RÏvá;\x000c8\x0014'øÎ\x001f¾ø\x000e\x000eccªn^Ù\x000fv\x001a=$Ë&µ}!\>ñéyë¥HV¤ã}çÞÏçyPËétZ,ÅÅEÚFP(Tç
Ã}}}\x000cÃìïïÓöB¡P(\x0014êõÕÁÁÃá\x0018\x001e\x001eN$\x0012´½ P¨Îåt:-\x0016Ëââ"m#(\x0014ªsÃá¾¾>aö÷÷i{A¡P(\x0014
õúêààÀáp\x000c\x000f\x000f'\x0012	Ú^P(Tçr:\x0016eqq¶\x0011\x0014
Õ¹Âáp__\x001fÃ0ûûû´½ P¨W¦\x0003Ú\x0006P(ÔÔ¥K:=òQ*}¶\x0011\x0014
Õ¹þâò\x000c\x000ffØ8m#(\x0014ªsÍÎþýÔ©wâ\¶\x0011\x0014
õJõõ?jìléÞ< \x001a¤û·+óÖ\x000fß\x001b8õ³kO«k1ê\x0010MX\x0001æÚÿÞ[ o\x0006Ñ\x0000\x0008ïøÇ¿6ÿò§ÿh¯\x0008\x0011ê~\x0010
h·¸2WÄ ëÍ\x0002{é¼õ'oýðêÏ\x0015²së÷±Ðzdå	Ô \x001a\x0003\x001dû__m<|øMK¶UöÆ\x0019>|\x000eA\x0010D
[p3ç~3`0\x0019¿ï°\x000fÞûº%D\x000b Êw¼ïGý#[¿§n\x0006Ñ\x0002\x0008¯å=ãÛ?~ã¼Íý\x0003u?\x0006@»¶/úGîø>à1È:åóöÓ¿xó\x0007ß»ø»wã!;ÜÑÔ-!Ýæ\x0013.t¹n½ãµð3í?iûA4cæ\<tv[Y}øÍ
ý³!ßç¼«K×\x0011\x0004AÔ &\x0003«k#¿}§ÿç¿^²\x00153!ê\x0010ø>&ÖÒ7¨;A´\x0000Âk\x001d~÷éGÎ\x000b\x001få u?H×\x0011®çxüæDôÚÂ\x0012ë\x0013i%|áÜûo½ùë³¡Üí;¶%¤»\x0008É\x0000,kÉÙÉÿÃ\Â/,auÌ5Hñ×_m\x001c\x001c\x001c´T¨¹SE¦B8\x0004A\x00105(y¾²\x0016?3:4h6Ýð9¶ËËÔ-!Ú`\x0002ÖôüÅ\x0012XlËËö3_õ¿ís¯Ôý \x001aÀÃÿ,\x001e\x001a¯\x0016±ÄúäK%ãt5\x001azü/×âí;¶%¤Ëä\x0013Òêâ
ëacå5\x0016þ¤o	Ñ5öÁî¿[êÔÜ©ËB\x0014Ær\x0004A\x00105({Ä6:4h6\x0005}º¦n	Ñ\x0004Â3\x0001kzþbµ%Ö'\x0010^»Í2ÐßëuMÖJKÔý Ýp²\x0010\x0014ÇCãJ\x0001K¬O\x001aszÂhèñ{¦d}´\x0008Ðwt\x0013ÂK¹Hq³Á±r»Ä<}KfÀý`·ÙR§æN]\x0016¢Ô=#\x0008rb \x001c4\x0019ÛèÐ Ù\x0014ô9`\x0017 o	Ñ\x0002Â1\x0001+¬\x0000Õb¾\x0019D\x0003 ¼ve ¿×ë¬pËÓ#\x0018¤8\x001e\x001aW
Xb}Ò¨dÓ\x0013FCß3%··<º%¤Ë\x0010^ÊE²
E\x0006K¬o`ÆÞÛm¶Ô©¹S(uÏ\x0008\x0018\x0008\x0007MÆ6:4h6\x0005}\x000eØ\x0005è[B´pLÀ
+@µ¢o\x0006Ñ\x0000\x0008¯Ýf\x0019èïõº&k%Üòô\x0008ád!\x0006)Æ\x0002X4*\x0019çôÑÐã÷LÉ"[\x000e!¼d\x00197\x001b\x001c+\x000cXßÀ½·Ûl©Ss§.\x000bQê\x0011\x000491\x0010\x000emthÐl
ú\x001c°\x000bÐ·h\x0001á\x0015Vj1Eß\x000c¢\x0001\x0010^»Í2ÐßëuMÖJ¸åé\x0011ÂÉB\x000cR\x001c\x000f+\x0005,±>iT2Îé	£¡ÇïE\x0016·<\x001dBx)\x0017É2n68V\x0016\x0019,±¾\x0019{o·ÙR§æN]\x0016¢Ô=#\x0008rb \x001c4\x0019ÛèÐ Ù\x0014ô9`\x0017 o	Ñ\x0002Â1\x0001+¬\x0000Õb¾\x0019D\x0003 ¼ve ¿×ë¬pËÓ#\x0018¤8\x001e\x001aW
Xb}Ò¨dÓ\x0013FCß3%,ny:ðR.eÜlp¬,2Xb}\x00033öÞn³¥NÍº,D©{F\x0010äÄ@8h2¶Ñ¡A³)èsÀ.@ß\x0012¢\x0005c\x0002VX\x0001ªÅ\x0014}3\x0006@xí6Ë@¯×5Y+á§G\x0008'\x000b1Hq<4®\x0014°Äú¤QÉ8§'\x001e¿gJ\x0016YÜòt\x0008á¥\$Ë¸ÙàXYd°Äú\x0006fì½ÝfK;uYR÷ ÈpÐdl£CfSÐç]¾%D\x000b\x0008Ç\x0004¬°\x0002T)úf\x0010
ðÚmþ^¯k²VÂ-O\x0010N\x0016bâxh\)`õI£qNO\x0018
=~Ï,²¸åé\x0010ÂK¹Hq³Á±²È`õ
ÌØ{»Í:5wê²\x0010¥î\x0019A\x0013\x0003á ÉØF\x0006Í¦ Ï\x0001»\x0000}K\x0016\x0010	Xa\x0005¨\x0016SôÍ \x001a\x0000áµÛ,\x0003ý½^×d­[\x001e!,Ä ÅñÐ¸RÀ\x0012ëF%ã0\x001azü)YdqËÓ!r,ãfceÁ\x0012ë\x001b±÷v-ujîÔe!zÔ\x0003óÚzz[NÕòÏ}6ßÓE^!\x001a¿\x0014IlÉËrªVà_éaBR\x000e
\x000b¿)¥7KKUïN8åy¥ÜR[¥ÄSÌ)Ï\x001fï!å3ß*ñg¯IéF%½µPõÇ\x0014u9\x0005\x0015ìàp`$øß[TK©sè\x0013nc=]ª*O¦ûpÏ\x001dòsV;x¯c9´Ä¯
&c\x001b\x001d\x001a4>\x0007ì\x0002Ýÿö×\x0005ÕOÖ
Uÿ¸Ú\x001dõv\x0010¥ÔT\x001bíãÎJÉ?Î\x0005\x0007	Ý\WÝ1^\x0007\x0008Ç\x0004¬°\x0002T)úf%Ï×ÖSÛ»0Ó~	ÿÓ/ÒØvCkß2é#?9¾Zj÷Ì|ûOè{[Ò·ú^»Ö'j¾ðÚmþ^¯k²VÒ`ËËó\x001bíù!½ÙY_ê0ù§õ²ÿ¶ò\x001a\x0007ºoP»^Ø¹,Ä ÅñÐ8|äôý\x001coøQáÊËiaÌPÔ	Ð\x0007$\x0008òòñyl©þ$ìO\x000f3O\x001e¢z${=³rNO\x0018
=~Ï,²ÝïBík±½\x0008tøÙ«+ÖKóÿ Ãc·än=V{\x0008/å"YÆÍ\x0006ÇÊ"s2.\x001aÂWÏeù\x0005\x001ar{Ç½f³xä^óxiçýÅ¼Ä4H\x000f±÷v-ujîÔe!zèÓò¼ù<=e~ÖÿÅýg>\x001b¶¼:ÏÎ\Nrsy!®hvPJVçâ7»êN¦n¯ç»±-ª!¿´Ol\x0010Vúÿe+âíÄç\x001e>\x0016\x0016ï³Ç¾»RH(\x0005^º\x0017ÛåD>ÀÎ^eÙÙò£$V×\x0015rQyíè`r
a[lØÅ°sÕoýnµ\x0018½»p%|Õ¹03¯êà·ØüÒõ\x0019\x001fÏÍÈ*ÜqkK7¸Ù+±è¬¼Æ®Ä¼·g¼	þó,d-ß~M\x0019fÕHfÁs{>ËF+¯þJ%ü¦Ä\x001f:<@w«\x001f|¶ãö\x001fê«5¨©3
gdt´ãÎ8q·\x001díêl\x0019wªXÑiÕÕ-¬\x0017¨"\x0003\x0015
tÝ®R,""Þê\x0005¨\x0010¹&\x001ar\x0004\x0003	$'9ÉÉ@Èå\x000b	\x0001ÔþèÚ_Ý/êv\x0016Bá²g2\x00039ç=ßù÷}¾ç	ª|\x0018ì¼~Eqÿk1?Å\x000bR«Q%\x0010òÒü¼S\x001c&\x0019dp×W¹\x000c|¤çq¯ ÕÐ\x000fx;0`~î§¦)o\x001f\x001e\x0012ª\x000ci7ÇdzÓ\x0017ñØÕà\x0004y=ø61" )%<óàô±P*åì2\x0010\x0001¼vÍü/&Ð:á\x0011\5ö\x0019åLA+Ñt¯RÝÁkQ#\x0012¯\x001bñ\x0006ãÓp5¡\x0002wÖu°Ì5Ån\x000c[D\x0003òVQ\x0007\x0013´¥\x001bÌ\x0010K&dªàW\x0002\x0005Üm:Í²é|\x0001\x0001\x000cï­ò¢Ü¬4\x0006¥ÒG;å¡*÷`Ï.|Ò¢ÕÉVE\x0008
\x00056\x001b\x0019E\x0015n48,1 Ë\x0008Í¤Â\x0001V\x0002:^\x001fm\x001eTj± \x0001Ë\x0018²4Í\x0013Àaj)Vt\\x0007Éeþ×3ÍV«Ù!«-æÖ±(÷iMímÍ\x0010Ôã´«|fþ\x00150µs°·¿·Çz(U0ódÖ\x0014ôUj¸¢vF+u J\x0014á*4©Lðjð½\x0004\x0002ÜÓÔ7¹\x000e,H ÔX{#éØAÖ£j\x0015
sÊÃ\x0015¡\x001e}÷£n>k`@æ
ÕA\x0006
ùÒ/üè	dõ\x0011!iÈ$Õà1à
ü\x0003¼Ü¦é\x0000\x0011F¯NgÌ\x0016\x0006PØ9$1Ê©\x0010çªÛ*\x000f3Å³\x0000/¡\x001dÁ 0\}ú¶Æ»´Æ»­¬&\x0008\x0012\x00126õS"\x0016\x0002Dc\x0012D@áÑd².;>å-8Ò.æ3\x0015 2\x0006O\x000c\x000e°ß
:fì\x0006ç\x0013ÀcÿøÃû¼ø~ÜeNUÊChmê\x0007ç\x0013$¦ÕµÚ,çu¤òOCO+I/þ¦VÈÇì³³Q¨Êkë5\x0008ogÅí=zöq\x0017Ïî@<s°`FÌ=ÊN*¿búe8\x0005o
yL¬Ë)\x0007¿øª#Ù\x0003ö$\x0006;\x0007ºT]T2ÅjFÜ°¤ê|~rê\x0017¥d'¡\x0002½k\j\x001dÓîÿ3ÐàQ\¢\x0017ÜÏ?và\x001ftzÙèëçú×ãî§e\x001eÚ\x001fXtlv\x0006áºQ\x0018Hîñ?O\x001eO/Ð8DhCÚUK¥ ^þ[JvI
f\x0013³¯¤§Å§^«©7ÙC«ó\x000b¸\x0006\x0005=¬:°
ujì:nóÃ'¿â\x0008ø#®¹µ\x001f¨ÂeîÕrj:zøýFÈMìmÿÉ"\x0019³¸T²a\x0008rN/§J·IÐ×Þ |Â°`ÓPìÃ%\x0006aUÁ±\x0003çîS4º)^`@@dÊKóórNqd\x0005Â[ßëTi(¥¥'ãâOd\£t8m¡ÝÂnàÃìZ¤\x001b5C¸¸i^
ö"ä²ì¤ÓgÎsT
ïx\x0006\x000cvôs%í
æ\x0016\x001cSø¬ìÓ	g¿,¦$Ó(ÆÂ\x0001ª³Ë@\x0004ðÚy[$ì±A6Ím¸R°ïã¢£6lÞ²iGlÜÙâ2&g\x0019±itÔ¡\x0014×_Ìß½ÿxÖ£^Ã:ÿÇÔ>#~3/åh\x001aU"uá <3;9£ô>Õãö;\x001bÜÂ¬«\x0013wó]|!\x0001\x000cï­ò¢Ü¬4\x0006¥ÒGYfG\©«\x001b8áhA\x0015½¿_>\x0012¤Oðª\x001cÕry\x001a¶×\x001ejpxEV?V}<>¥Y,!&%48xp\x0005p vrLDXÏ.jYvÖôJN÷kÎ)P¥Ë"\x0003S¬è¸îÁçö$
qàÛiììaÜ¾YztÏÎè\x001b·DoÜ²s÷gç.ÔÑzlxj3ÿ\x0012ÊQJÇ¯.KÙ¹7ñ~kÇI1òëÙÇÔÞ¡N%£$ißájö\x0013\x001dQ5\J=q¡\x001a\x0007\x0017cJB×ÚÙRÏa²\x001cÿ/BmS<\x001b64ÖÞH:võ¨ÚeÂò`½Ï zP\x0012w$>©ª­ÍhQù°ào\x0000§\x0002:¹OÂµá¡\x000b£¬'PKÑ§1q÷ØÜÁ!å$\x0006[Já\x001c\x0014"í\x000fx¢.Ó òC$¡e\x001fúë\x0015*×jf^vÎÂÎ!QN8W{\x000f+Å³\x0000\x001cv\x001a:¥mwï\HOÝ\x0011½yÓÖ¨uÑ»þr*ïËF:Mß?7óÇ.)<,HÚ\x0013\x001bwêVÓcÔ¥$\¼Ü\x0004\x0003£0#9ýk}Üz»Ó\x0003C1WÐ9:¬¶kyJà\x0006¥½¸%t78¯\x0000\x001eûÇ\x001f^ü\x0014ÜçÅ÷ã.tªR^§ÞÂ¹\px5´tÙ»'Û"\x0002_n&ìÅd\x0004RºrydRa­ ÷;ç¬X\x0017\x000f¡uªéKûI\x0011Kö\x0015Þ\x0016«$cÄ\H«Ç®u®>°uÍ	rLçð«r\x0018¼&jâV½·/ëZ«ð;W w÷¹µ\x0006Ö¥ü½ë¯+2\x000cÊÇ}HgArÜo?Ú\x001ep©=vHPòIÔÚ\x0003ÇÏ½#\x0001Ý2ª\x001awHäô¯·G,Ý~\x000cidã¯¶\x0002Ý\x0016©¶!cýª·ÖÆ¬â
Æ\x001cAp©Ü\x0016¢êÈû+7|váæË\x0010Rf\x0019õ â\x001bFnZ}ðºÅÖS4ê\x001dÒÚ´üþ\x0010ëüÏÛùçÑÒ~nÓ?\x001eÉ,\x001c\x001c\x0019ÄU¬ÛÛ"ßþ]\x0006Æñy9 ý?G\x0008¹
~¹bù\x0007Óú$Ï\x001d\x0013ZÎCèÜêÆÚó\x0007HK6³Õ}\x0004¦D^&n5Ê¿¸'jÃ#k@\x0017£0 XÁ*Ý±hÉÇ5RDötNº}\x0006d\x0001)/ÍÏË9ÅaA\x0016\x0008oýñá®o÷m$HW½wèÁ<}\x0010û»ña©¢¥$ñ­\x0015Q\x001a:ÙxHN\x000c4!¦\x001aUÜLùÃ\x0007ûã©0<ò\x0006Êïsk`rFê¶èÈ]×0\x0007<fc¤o{õÎÔÂÇç³£³A´]\x0006"×\x001ePæ\x0015\x001e;âDhäâ\x0004Ð/¤Å\x0011ËÖïùd×ÆE¤Eà?ËjZy8¡\x000e¤K(üÜB/NÜ\x001eAüðÄ
]åôb\óÔ@­8\x0013³xåê»\x0002±Xé±ÛÞÞSëñiÝæ¶sß}'±°6\x001aXÉ\x0017\x0012ÀðÞ*/ÊÍJcP*}DxS\x001eüÔ+æUäìõ\x0013³\x0014}Û'ð8z\x0007GÜF^oU2\x0014yN·9t!\x001f+¸f\_#o÷µë¾éØ­º8ø©G"¸whÅªmå4Ó â_Ãüëû¿fkÂ\x001d¶\x0017èÒÂ7¨Òe)Vt\÷àá¥8ðà*ßKÎZ¼È?¸¬Ú¼+áðöeKDø[(æïW\x001bÌ\x000eM NÀÔÏ1^KYÚJÒoVü¹ [÷oê«4¨©s
3Ó©S\x0019p\F#¶3:T\x001d\x0015¯ZÇÖz]ju¬^[ëVÄ;jÝ\x0010-e\x0007Y4  B\x0010\x0012JÙ×@\x0008\x00120\x0010=@àdß\x0017rÑÎtÆû£ýÕûìADÇ¡3Þ3ß|9çýÞïyç]Ùª³Z`\x001f{B-¿\x0004¦ÔµOèEPþõ¨°lØª\x0010«Ç(8¶wÝÞýgËLæÿ\x001b!O¤µUQ'\x0012Ê
(<SZ0%#u\x0017_\x0008r>]Ë%\x000f³¦uoVX\#
É:n|¼,âß)8qä-l\x001f#Q+¢\x0017\x0004\x0007§4\x0013¥r®ýM\x0019kÓC²¡Ò\x000bÁÁ\x001boã{\x0011ö-ôò¸õ¡+¶§×I¥l»fþ\x0010û«3GÙ09×²ç3ÄÃ2« §gö¯\x000b\x0005	^ñáÚ#ÇÎükçÚð¥ØÏµ[Î\x0014Õi\x0015s&O5ß £Beg¼¿å|B\x000bæu®Qb<ä\x0013Nm\x000eßx*\x0016'³ÊÔ\×àð\x0003¡µ÷ù3õKòñÐåÛî5HFØSï~ý\x0016è±ÿüãÅ_oö¼øÝad½ÊE'QPî§ÜåÕ\x000fB·$>f\x000b\\x0012æZÔV\\x0013\x001d¶xïùAÆ4hMU`3PÝJ°Ãó\x0014PÄý\x0012\x0001V-ßªáY\\x0004¯iø °¬\x001b(RQ2N«þùÆÁÓ	\x000fÄ\x0012¦}Ä¬\x0002sÍ*ì[?S\x0008(\x0007V§5ßæ\kö÷-z©º;ñò;6í»!1Ifã\x001bSLoa\x000eõH%\x0010æ\x001asÆu_÷Õ<®N%ÂÆÌ¸/"\x001d-B'96-O/¢\x0008hDI5\x0000çuH÷Í=[O^Àµ<³üÇP
è:Î\x001d\x0015Ï¡g ÄÃÁ¡»3\x0008°\x0010r8§<p´\x0011\x001d&¥\x001d¾ØÐM¶ÍÝ)yð±ëf\x0005[Pñí'á;ÈÀËõ\x0012O
\x0000Äü
\x0000í&>\x000bíû\x001dF+Q*h51[W-Ø\x0018úpD/Åì\x0004Doq\x001d\x000f1°\x0017¼ÿ*1ôÆjÎn_³ó\B¡Â>jA!\x0005L¤SÈ¤,ß\x001c§òQÅÉ%¿8bd@0vy_xmô\x0003Ùbv'F®M\x0007+\x0004ÕQKB\x000e$â{¹ð³À\x0005¸¡\x001f~\ye×Â°o\x0007e°Qëi\x00150\x001acÑÇ¬ù|CÌ\x001a!Ú|é`äC1wäV©\x001bgïÑ\x001a\x000f[°}îÉëº÷upÈ\x0017iU\x0000úö¥réä<vS\x0015×í9\x0006 2×½üqp³\x000bñ\x0019\x0013©|²Â>÷Ãd&n ÉäÝM»~ÜA\x0000³ÀÛeªYõ!Æ.>±o½«mXºê£!¦
åZüc­\x0019\,\x001b`\x0018ò¦M,¸=ûHèc\x000fÛ$£°Cã\x0001Ð\x0003\x0018~¨*x¹®Lâº²uÊ£\x0013a¢Qù¾Å"ëúw&\x0011ÏÞ\x0011ðÅ¬NíØµ)¦Òlà[T,)³Ië\x0016XæYøÌ\x000fH@¸r£uÖlæñÊ\x0016xî|.%Â&áÀ\x0008`Ñ¼«
-¸Üõýê  ÷\x0016nÎ"Ôò\x0004C\x001a9¤\x001b§\x000bûJîF ò
Äd>\x0003m\x0000Fu\x000c(³+K{B	ÆFÝP~âù·ò9¨à¥d¸Nü¼¹è§\x0003\x000b?ü\x0008Oe>D/ s\x0006º\x0010fÒñ(£):råÖË9îçV\x001b\x0016\x000f7\x0002óÕ»²xòÒc¯oo(\x0003<Oã ÿ\x0017×â®\x001f\x0008ò<¸úæQTdSy=\x0017\x0001[´b¤kàîþ\x0005!û	½dIlõ¦SÕ+ê»WÈ\x0012lEdp\x0017c¤Ä"ïþuçUò7Î{f\x001d¦Å}µlõ©J²bãÐÂãH\x0017Dí\x0011¦ÿé®Òï²\x001cX\x0019Uésì¥6		ðê-ç94\x0018&! bNoY=¯!O'ù\x000e%\x0015nNÝ¶àý  ðKY\x0005ð\x0000\x0010²f!ç4WÄF®\x000c\x000e
;t±4	ÙUÅTîhZ=xµb\x0013RMH¿ôõ7ñT)G?cRðExZA¡×\\x0006]mj}ûÈ\x0004ß<òTB'2éTc3	¦\x001eÝ½íÈÄºi'ïyÏ¥\x0004¼\x0013kÚ$­­*:yØTn@áyò¬\x0006)J­(>³Î-ã¨\x0002\x0002Ñlõ«\x0008N!\x0007'ÄÝÇªy&-­ü.båç7sË6©Õ\x000bÝëj§	á[\x0015,¨ÖG³
Ø½×Ô>ûÌ2°eÌGÇC\x000fe\x0013\x0018Bø¹£öÁÔæa6M7	;©ø¼Òògfl\x000fë0Ç´³å\x0019MÝü\x000b«3GÙ09×²ç1Äóî'è\x000fGÛnþsÃâ Å\x000eÆÞ£óhÊ±aõ8KÉkÂ;\x0008´rýÆZ\x0006K"î!NíkÀ\Z´BÒ\x001aÿÕéØì~:Õ\x0006T\x001fpWË\x0002³pzë\x001dgo\x0017\x0019¤fßà\x0000OÛ ¡_\x000f-^qüQçø8<¥öÌsTwf\x0001\x000cÿüãÅ_oö¼øÝad½ÊE'QPò3N¹ê EaÙuõ£
\x001dC\x001eÒk¢Ã\x0016\x0016ÑHg9&\x0006x\x0014BmSýè\x0018Û\x0008\x0001sÙ$}\x001cjl&ài0]ò,r
¨ÜÕ¥èí©Îy\x0011Ëëìb²ImÒöÆ¤[yÅø>:uÊèª5Ã,P\x000b;IÓ¯GÇýRU×4*çØB£\x001b\x001bÝ-ôÆôû8\{?Å¨\x0016N+\x0006í¥eÙ?f%ÜÌÏ/èeÒÒí¦!§}gÓ
s;ñ\x0015¸Ä´Ô¸¼â"Ê Õb\x0016[\x0002nëÌ:°yéí¸Ú_aá°\x001e#÷[Ø¤\x0018\x0018h+§öÆÆ\x0011­´A,ëèî!í]Ìü´Øû¹-\x001dDµoÑ!(ÜZzâÀÆð%{®ü\S%\x001ca\x0018-ý­UO©=Z\x0005O.Í8\x0016±zý®//fôö·\x000fÃ¤Ç­-
\x0008wÈ\x0004Ü\x0006\x0013\x0013ÊÓ	\x001d­õl\x000eÝnfq9GB\x0016íÎ ÀBÈ¡áÙô|³rÝV½y¿¤\x0001\x000fYÍbó¬\x0001Õl²'¶¢\x0007ñYwêÉí\x0003¥'"Vïºë%àÖ&5ÿ75
"åÜÎJ+|PÔ\x000f1ì\x0000%õLªÛM|¨ôÚ¹~r\x000e¯T²i¸]kV\x001d¾Y­±H¬*®\x0003¥2¥\x0015¹IwÓnápwª\x001bj¸#Né\x0001\x0000U|ÐÈ\x0019E¤ªûY?æd¥ÿÒÜ$\x001aáN«aÙ@uuò¾µËC¶\x001eü®D\x0014
\x0007ÙåÄö&n\x0002rÓ\x0008,Zb¸®	\x0014w'+«¶­e\x0014\x0015ÛÕÀ,×$#CO©}=ºq
±$);9>\x0007×ÑKT\x0008|}ã\x000cnë¥¦>f[QQæíÔ¤\x0007¥`\x0011\x000c \x0002}BÜÑZruOðEË÷%çUJ¥l\x001f\x0002*Fødpëêáß\x000b^u»¨Êþ\x001fñå\x001aÓTÆñF\x0019qÌè\x0012\x0011@\¹\x0008\x0006\x001c\x0015\x0001Ì¨\x0018o\x0011uð¶Ù(\\x0014k¡¥\k¹S -½Ò\x001e(Z,·\x0002íiOopÊµ\x0017JKéMÌ$ÌÝO»o1&;ãn2\x001fºÙçC?´oN÷ù?ÿßÄlÔ|\å=,"¶üeZiA^'Î*~±«×\x000cð¤½\x0018\x001eà\x001b\x0018PßÃÖ 2»eÚ\x000eHz\x0015¯J\x0010ª\x0008Ý\x000c&º\x0000Û­Ú«\x0012%pyÇ®³\x0005íRµô£å7£ëXëF#|ª\x0004\x0016Ï\x000f·¿Á§\x0014d7uaåä]ýé;®5Ô>'Aµopù¹/^×\x0013Gà	«Y³¾Ø\x000b\x000cwtÓ»\x0014ª±UOHTØ
R³Ëí ¾\x001d~»¤G]ñ\x001ay\x0002Îd?±ð²H\x001c\x0010;Ì_È\x0007¥\x0011®À¿ÌH{ àA\x0016ð\x0005xT^{-êÐÉóïæg]\x000bØº#±®Ce\x001fV<\x000eî0É,s\x0002\x0011¥¦w o\x0016º=¨¶º4\x000e÷5²ÙL­vxAIkzu#\x001cã³çèõF*[?\x000f¯Û¢åó#äÎêâÜÌÒ2BÏ\x0000É8ã9\x0010(]Ê\x0010r;\x0003t°T\x000bÆ`|õ×!z´¨\x001c,ùu\x001b¢\x001b£AME5ØlB\x0019®NA\x0017Uà%Ä\Vða\x0012\x00114wV\x0017\x0010³\x0008eX22)\·\x0002WçÆ©¤'ç£\x0003\x000f_Êbr(èx\x0018j\x0013\x000b!Tç9\x0016lÈ
§B7Ff\x0012óKó3°b:g^U»,Lä\x0006Uÿ(¯	\x001aà/"\x001cNc~eaFMu5Ôßo]S{ZdR­e\x0006Ík.­*ÎÆy$FÓÌL¸?Ï\x0017¯CÆ'\x0008à\Ñxùd/sUróSÏíÞöµßý×\x0014T'sn"Û¢vÆ§Eï·\x0000ßJ,jæ¬¹\x0010£Ï§tÌ bqW\x0019	ÛÔÞ\x0006ken«ÖªèársÒ\x001ed¿xIa±æ¨{Õ×È{0$ºÁ·\x001d×Ø4\x0002é¨·¦øqìN¿C$±ÄjQ1eÝ)\x0010Yõ`	Wf}¿÷ñÄ;ÏËÄ£|Ií¶ÂÚ!2W	4^N`òXóF-¸úÿ¼ÿO\x0005Ä[[Qþä\x001eÞ\x0008ØÕWcCu¬Gßù\x0005]®ª|r\x0014J­\x001cNý¼úÙ×Æ(,FÇL¼
h\x001f ´\x0011^øÔ7\x0003"Á´zDÉ#àï\x001f÷Ùê{;'\x001f\x001a\x0015é\x0017\x0015nrÝ6\x0008í\x0015¹Eù\x0019Êþwv§Ç¯fù¬9\x0004µ÷
0%¼ªªÂ&
M\x0005óÑajo7E®m\x0000'ì*\x0003\x0002º\x0008$\\x0016¾¤¨Ü
k§lfµ\x0013¼­\x0019q¯!èp\x0017»¡ä56\x001b_×ØÒ,\x001a\x001f\x0005«oÝ"E'Û^?N\x000cÁl÷;q
õY\x000cãaKA_xþ)\x0010²Ê¨âô·cË\x000b3\x000bJrÛh´Ù%ø\x0013¨X\x0000¨ô6ðøÐ\x001czÇ,¯*|ú§1{ôÀ³<X¢t\x00017D\x0005rbés\i^\x0003¹U"\x001bvyWÈ&M/\x0005*\x000b«\x001cfo^±\x0017Ëµ:m\x0018k!Þ;¶\x0015ù1§v\x0004\x001ewn)\x000fo/Ã+ªÖ!{0¤ô%\x000b@\x00052A1z;Ëkp­Tz\x0016vXQ;:0DÅa³\x001f¦¥=khkWÍª\x001cÕA7såGãU\x000bL\x0013_M`²\x001bÙu)-[ó»ys\x0006Ä\x0000sßqÚ\x0006|qjf¨\x001c\x0016\x0018\x0014qêÎ«¾~\x000e\x000cÞraÉo+©+É.Ã©\x001d9àSJ§éÞ?^\x001bvÚ^|ó2Äl¶\x0019`ï¥<dÃ>%&f$\x001d8pðVVÝ\x000bßîúævN)¼\x0000RÀ§éB2V?,\x0018â¯,+?Í}np×ÌãÒ\x0015IÝ»ÖÖìïü|w¹B\x0016ôêfaà_zßÊo¼o\x0013Bøõøµ¤Æáñ~#Ì:Ú'aÉ²AõqåKïüì}uf	î\x0011	u@PØºúÚ^hY¯Ø°Áz5Zñð´ïþ\x000bx\x0012eqaÂ \x0006èÍRdÒj\x001d+\x000ff~Ù][HÈMÃ\x0015\x0015Ò \x0008àýÏ¶O"­½\x0010S:Ñ§xÛP_V+l#S5èÃ¦ö¬/\x0013ò^/\x001eë©\x0007i\x0002_SÓP7(\x0016ÚÁo½\x0013MÈ*@8\x0019\x0003\x0016ýé½+ön\x0001­Á«³\x0010>6x\x0007fOÂÃ|¡
ô\x0016²\x0012hù½U¹,&æ]	Â`¶%¸E\x0015é\x0011C\x001dý}t©¸½\x0011[]_\x000fÓº¦µ/
Ò\x0008Øôçõ-\x001d`Üv­Ã¸¹rA\x0017RWò¢¸¨*FÃ¾Uµ°Ú\x0016F7\x0003k\x0016\x001dwÕg&À|µ7ø\x0016Í3."\x001b\x0016Øp¡V\µgxÚi\x0014¥Fâ}pòF\x0001ÆþÇßýç\x001f{~ýÛ\x0007~ê¿\x001då´Î\x0018¸¼§wú{zy\x001f\x0006søÔ_É}"·\x000bä5©eºëÞ¾¼_D»ÕtvñS±÷Þ"ã\x0016³ÒiV»\x0016\x0013´ìS'#* Á^³1Ïe\x0012FFI¾z6ôÈ¾0_ßcþG#ãâS\x001eÜ¼s12ÐïÄ®í{¿õ?ø(µM<
 j}
\x0019%¯n\x000e

	:sîzB`Ðð¸<@ätN/kù©ñ	ñ±ç¢C÷ûú\x0006ÄÄ?k6¨»^<¾\x001a\x0013\x001cp",8"2"|_À©\x001f~,hbhQxÝò»0¢pÛ\x0010#Â¡½ºpòèÁÐÈèÃ\x0011BÏßxVIY2)QNú¸ÃÀSÀãÿçÈ§MÜùYøsó c\x0011*¼\x001aw+³)ZÑI·Ï=\x001fw)þdh`È7»ü÷îÛ\x001fv&ñA\x0005E·$[2\x001fEîÝâñÙíðx2G24Ô~åÖý\x0002²I/f<
Ûÿ\x0015fÛ¶m{ÂR
§ÐîÇ\x0017b/=oë\x0011\x00007w,+mK\x0013HûÝKq×ÊÛº­.¹\x0012Â]Üé{¶\x000ck¤¿¸Ô\x000b\x0013]-\x0019I±aG\x000eÇÄ^\x000f>\x0019\x001cðS>¹ü{$Û\x000cA3Ý%\x0019×£ü\x001f\x000b:\x001fs4"êè\x0000í1Ïð-6ÔmYÕÌ¿$\x000e9\x0010\x001ay<"<\x000c40:1©Æ=@ûo\x0007¾·«¤¤Ô¢£\x0002ï¾Y6É§©\x000f®¦·üù2i2Oã8Ñ`\x00062\x0016ÂÒ#¥@ÞWzß \x001b«`\x0019\x0015dUP:^\x0008\x000c¢\x0007(T\x0019\x0014\x0001\x001cÊQ(TJ\x000b¥ tdDÚrS®aX7ÙdþÙýk÷qg³3»É&Ì¾yþ|óæ÷>Ïïû|¾ßí
ÕPW\x0010&$ )4ºcQ p4Uvôt·A»0÷fg®P]\x0018-eQ>\x0014\x0011Û\x0007\x0019\x0000\x000bÄ&¿\x0008X5CE<\x0013ã¹Ûñ\x0007\x0008¡±ÊGµ5\x0010Q´²©«{sÝ²by9X\x0015/!£ \x0018\x0016'âahâ±/\x0014Ýcúeûø¶åiùU\x0005ÉGpp\x0010\x0010\x001eíîç\x000fÇÒÂr®OY+RÂã\x000bCÙ\x0000H Ì[À§{ÃX\x0012ÉÃgóK#[©(_ðÝ\x000càFH¸ñ¸usõc?×\x0016'­=\x0005×®í\x0014ä\x000b=zíÁØÞóT\x0019Æ'á\x0011¾d\x0001\x000c\x0011Ðø¬¼úÞ×\x001bv½éñI	Åw÷í\x0003N\x0001ìà¼'íVÝË\x00192j B\x000cJ$o\x0008H\x000fÉ,V÷\x000f|Ø\x00186·\x0015¹ºqÕÃãÃ?þû½\x0005\x001c^¥¼\x0014Çã\x0007e\x001c,+ÀtTèÔ²6
0£µ¥q[ïÝ;Ù2&\x000eâD\x0002/"Êã\x0017UWXìµ·ÝwãÙìØ*µÚ¾\x0004øÌ1ÇìàlïM1xîî#íÍû¾êÛ\x001c\x0016'¤¡``W7ldFqÃúÊo¼\x001fàÃmÆ¢üÙ§;ZT@\x0016Ø/\x00048ìÆukg4À\x001b\x001ez¾ì©£Dî{\x0018DN©×:Æ×ì¦y½Õ¨Ê`"÷»C;ck\x000b¦\x0005K×ÓT)',¯±«¹_u!Ö\x0007thO¹¾âóõ5KkÇ-E\x0018\x0007ôÅòØÔ\x0000\x000c\x0016§¤åÓYL\x0019{Ûx!S.f0i"\x0016\x001a\x0002\x0006{BU)QÇR3_\x001cVíPU"%\x0012(\x000c\x0001Câh²«¯tÚUÇÔÜp]ã¥8)\x001d0CxL<6\x0010âLR<×j\x001dó\x0006M~\x000c
rr>àìÂ3\x0015Ñækáòô\x000b½;@ímÎM9ÎÅ\x0004\x0010H\x0018"Oð
"sâ\x0014EÚaÝÖæåeEq,É\x0017Ê$d4\x0002\x0003vxû@)¢È²úwÆÅþÞJeBÁÂéb\x001e\x000f
#`ðG2¿Tui¶~½è>­ì£¶\x0002 \x0002¬/Lüî\ûµéÐò÷ô#\x001fk4\x0003v}í£»\x001e]\x0003ÖµUû¢äjiá½Þ\x0001ÍcøM×ÝT:3&FÊBûyæL8y»£û»¶ëÉ2f ÜWÈ#
ùt8
\x0017Ðc\x001c\´í8\x001d\x00157#\x0005\x000c4\x0014Áf\x0012\x0008\x0002
Ö\x001f\x0006öF\x0006ÜÓèç=7ºXÖ`³´V\x001d§À=\\]¼§rn¦5½¥8>.Df1Ñl*\x000cEäÉS¿ÖëçöuFVxï\x0014]ÎÊ8Ù\÷`ó×Ôø¤ÚY\x0019¨Í
!ú\x0012xi%ßO4fa<@è[O[\x001cI`ó¬ÌèFªNHùEÕßX&×`k\x001d^ÔÄii\x0005¥]Ú\x0006%ßÛ}WÇ\x000eÄéÊæ×ºUssµ"&î ²¨Ä@\x0006\x001eg§çTZ¨å0ëUr¢Y46G{º¹y
Ï?©½ßp[!\x000e\x000e<8´<gl¾¦Là\x0008\x0018\x000c\x001cÌ!ÑX^Ø\x0019UcÛâêÔòw]}Å)GE\x0004\x0014Ê¡²¸\x000c7\x0014Å;"»ßÚ±`×´ç§z|¾·Q\\x0011×ú
­
\x0019òH¹²©\x0007¸lÛËCÛyg¤\x0014<\x0001
\x001cLDô	Ä\x0013¥±\x0017ëÔ¯Ö7¦æÌ/TÉ"±H\x0014"¦Ñ°XÃp\x000fO\x001f,{ôJåkþÃêÐx{yÏÄøÑÄ\x001cN@\x0000\x0005\x0019À+ò\x001b:Vk¼_9Ñ>º2;\x000c¨xäÕ­µùý\x001cñ>Öcr²µè\x0002Ûë\x0000«êÓÎÏ·~I@öÑ­¥á>Uñ½\x001b_7½xiÖ\x000c%\x0008y\x001cJ	\Üèâî©ñÙ¾2eJ\x00080Bª²0\x000e\x0014\x0016=ëPÛl\x0013?.Ì5U&EJðp$!P¸8\x000c8xÐYY×2³0>Vs%'2:&»Âf\x001bP
eÃ]\x000f\x001erÇòeçtÓCÃ5¹YQ4\x001c\x0011G¤\x0013ÄL\x0018\x0002C
»¤îé]\\x0018_û½ûö/¹9,µÕ%ò¸pu}åÕ¸o)onb{º¡<Kè\x0005%?lÕ\x0016à.\x0008qRi»vbÀ\x000bóæ·MgS£ÃRr
-{ó2m«óNIeÉ\x0019
\x0003]\x0003eQxð®ý9äL
?q§U³aý}è=ö\x0000ö\x0005î±oÀ°Ç¾®â\x0004}\À@Á®òsE\x000fFZ.ñ\x0018Ì\x0012u§m¶¿ÿÑåìü}Y_ªº5?,9\x0000»Us&E\x0012A¬P\x0001Ù\x000b$±y×ªj,ïuæoóOÂ<Ýö\x000cf¤=li6´\x0016&ò\x0005iÕêw¦?Ù:ëî
fãqHÈ®ó\x0012ðä\x00139×Õý¯·W?Õ©sââ%|%¤ã¼Á(w°?t$3¿¾·gÕh\x001fyV(\x0013ãá\x0014.E"0¡p4<ûaãô´ac~fa7-Ï¼~kxnì(\µ\x001aömÄû[vÓº}hÁø Òýs?lÜíg­\x001b\x000eËú/«lÎü­Ïø²¢°0¿¥_³d7Ï´^ÍKRé4	\x0017\x000bu\x0007< ¥MµºnUiªA@!Y(i\x0010eD¤\x0017×¨w­¦iÃR_xAÎÀÀ0(?ºáO¦\x00180\x0017Wâbùû5ËÂ6 8\x0008¢¾ê\x001chéº\x001dáå¶ã\x000eÂBý­Cu73E4*\x0006Jð¸081\x0008\x001b[ÙÙ»¹ð\x0004å\x000bðØûëOÿßþ²½2«ÿoZ_²½º\x001bÍCPOëLuy"\x0013Lü\x0002ÅüaÙ¸8Qè\x0003¢%}õ\oÚ\x001c­ªJÃ99ó¾Õk\x0017æÍëóã[ß·wß?\x0001tðü³\x0016Ëìäß5ÞË;²ÛQ\x000ftpLD^JrßÓ[\x00003VþEr\x000c\x001f\x0001òð@\x000b¯|³d\x001f]6Uç\x0006¢|}(áñ¼[z=á¸è\x001fÌù3û\x001eÇabÂI0eH	bË\x0010Dì(©-¸"ÄRÄ\x0012¨%¥ªÒs´zJP\x000eµ´äZ\x0010®¶Øc¹Zû?ÜGÏ¹gÎ¹÷W3÷Î|yçï÷ûù|Þ¯÷Û\x001a0´öI¯P|\ÚUË\x001bÐ\x0010\x0000ZØx\x0007øÆ$qÿVØÐS\x0018¦\x000f\x0018¡\x0008NÌÊJ¡ F2\x0006®R»ÑjÿEðñóÐPS

	à\èììÜÛÒÌâd:	\x0003ð!\x000fF'4£µ\x0015Én\x0018\x0004\x0002fJNþÔ¿öQyò;Y~ÄÏÝX8Á×8¦ØU´U8\\x001cÄÊ.0")Ë\x000cr$Âõ\x0001brßÌz ¡:J@@1îñâIõÔH\x0005ÛßÒ\x0014ß¼½55V\x0016ã6¡±\x0011%Õ­jÍè ¼\x0001>±ªM~v¤>úaxæê}L
mÓ+Z¶NUKòÊ+&^emÊÕóµþ®ò(ç«úî~IÂ¼zi ÎÍÂ\x001cgHîRìmÌÿáiuÚù/cÃH\x0014\x0004aqàòyÕUY¾äM\x0003\x0002é£õ£÷ÁáòhPáp\x0014\x001aO[U'\x0008÷t6×ÃÑY]Ã¯öwÕfÖ?tK³Í7\x0012Ü\ñMZíüæÌg]³O\x0003¯o³`\x0000söà	ó\x001aj¹¡>\x0014°màÒýë»+Úñ¦âp'PÔ]B\x000b¤âl~\x000c
m4À\x0006dÖO÷¸Á6&F¦xk§Âüöö»\x000c\x000bÀ*½µwø§óÊÞª(
\x000c¼b:3©²¢¨4/ÖÃ\x0006a\x0008\x0000¬Â¶å\x000f\x000bç\x001f8î?Â}X\x0014«¸0\x001bFAê\x0019b\x001dò\x0015õá_º\x001a,¢òhýu=ß\x0007Ã¢\x001ch\x0019|ncM^\x0012ËÓ\x0002\x0000\yOGG×çÖ]gX\x0019@0dgFbÉã¡#\x0011?>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/cp_remise_fnyssen-rapportculture_20180216.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/cp_remise_fnyssen-rapportculture_20180216.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?={ö\x0008\x000fg©ó8 \x0008T(Z\x0010\x001b\x0015¡dxàáêf(¸©Û7¡o\x001e\x000f±Üþ&\x000fÂÈ·qr5&¦Ë_P¡ï¿Û\x0010\x0005¨®þ\x0005f( h\x0011u	_Ôkö/ô¹Xa{þÔá>Ñ¤|¦¤|ø\x0010ÛpáÛ8ÞRl\x0016ãe`Â\x0017\x0001+Ú¿Hm~ hR-íö:µ-b³ÙrRÌ`òc:¨u´Åî\x0007,\x0012|8Ï%zY\x000b&&Ê¢\x001a\x0013Ä>!èk\x0014\x0015¹@\x0010Ô¨E0Aþÿfww8~p\x0001`hNü¤ìù1\x0011Ý\x000e\x0016
+\x0011Ûõ'^\x0005\x001f.l:óû#-(RL\x00107¿îw\x0002Â)\x0012ÑÊÔç\x0002AæÇÄ³ë[iªCÁ÷VÌ	ýFl><\x0015¸AÁ\x000bs\x0007~±[0!dá·ê§ÃD´&S/ç h\x0011Í	êJðL©[ÁÃ7]^íùZYeñ\x0006Óc¢a\x0001èF`àÃÄÜA0 ß²Ðc"Z\x0000b+ïQ\x0017_)L	A\x001044kP£^ºåÓèZ&"\x0002%N}
gûÃCt?°°6!&RÇ~Ýï(Í¯®¢\x001cáKýe\x001f\x001e\x0005M\x0010¶\x0011\x0013ÑéÆ,ôzFª(WÎ¨¶£çâd"\x0008ZD`":î¤±¢YrCL\x000c\x0019UÙ²A*\x0002÷\x001bQ°Y \x0011\x0013SdQÒN£\x0005\x0007<A\x00104\x0016ÁÄèPdMß\x0018¬1Ýw\x0010Xt ]öáQ\x0017\x001a\x000cm5bb,01ÄÎÂÖ\x0018BÅBÐRZ
\x0013ÍÖ?çZcúý×N¶\x0018ÒCOÜþóú\x0018]ê)ûð!v,upA#&x\x0016¼>5&ò®\x0019\x0002:AÐZ
\x0013Caè¿RF\x000c\x0013`bÐbÄ ðáÁÐ=´mÇy\x0016\x0015x~q¡\x000fý\x0007F@Ð²Z\x0010\x0013N©ÝÖ£\x001dß~*\x001ak\x001a5\x0005&§`Ñ	ÖÑë
\x0011ê²><è°ðhHí0Ï¢\x0002\x0013N©ÝÖ~¾\x0018k Å5®,RÚ¸Á\wé½Î¢ÅpÑ\x000eÇ\x000f.N ¡xD\x0004i9ä\x001ffràüÊlâÔ_ oùûán÷u¿ÓËùýw\x001b?\x0017Þé \x0014ä\x0002Ó-AQDæÏBo©¤>\x001aUà\x0018***3u.öÿ\x0002G¹
endstream
endobj
19 0 obj
<</Type/XObject/Subtype/Image/Width 525/Height 231/ColorSpace/DeviceGray/Matte[ 0 0 0] /BitsPerComponent 8/Interpolate false/Filter/FlateDecode/Length 8719>>
stream
xí]m´ \x00106\x0002\x0011`\x0004"\x0018Á\x0008F \x0011`\x0004"\x0018Á\x0008FØwù\x001e`PÜÕ»½}y~Ü-0Ì\x000cðMSq\x000cÂ$(\x0012x¢UaæÂ:H`*1\x0000mb¤ãB±'al«b;\x0010\x0011o¡*:ÌBÌÜ«N¬>³Qç\x001eÉ8R±\x000böàHàU\x001fÌÃ ÐG\x000c\x0011èÇ6Øv1±«S¯\x0014>\x0016\x00102ªÈät·+\x0000O¯¹s¡T\x001c`\x000cÔÔó`#^"Ã\x0008&\x0017ÛØ\x001e*tú=\x0019Èâe·\x000eºRÉp)öÈ`\x001bl¶\x0011¯a\x0008ÒÆÀ¬\x0005\x0003
9O\x0005Ên-p¥áRìa²õo#^ \x0003\x0012uf²\x0006+Pø\x0004u!¥*¤¹T2Ü=2,¶¢[\x0013ñ\x0002\x0019V4G±Wø°7\x0013GXEç]©d¸\x0014;d Q[½B\x0006{§ød~Q©yÓ¿g\x001b»zOlÄ¤ªNÇqÆ¸Î6{W*\x0019.Å\x000e\x0019:WÑvÐAÏìLR<£[t|ëÕ
£HïvN¡#%oâ¦Õlð®e©dx\x0013;d\x0018\x001d\x0019Ì=\x001d'\x0003LµÓ\x0007Ð8¹\x0016Ò­>ØÉ)töD ¬õqÙEÐ½J7±C\x0006uUëkêÓd0c?½u2úG\x000bb7§P¡op2µß±WÉð&òdPCuvÓ¼@\x0006{	d¨1c»Õ1ÃÁÀa4W2Ü<\x0019Ô=~Ò\x0015l\x0016NA7ô\x00083<shv âéæÉ ÕdxL] ¹á\x0006èjô(pd\x0018Õ\x0005\x0019\Å§Éð\x0008®jñØ©\x0019\x00183¦	¹Q(VË>KÙ\x0012dÁÓJ\x001b\x0010/
ùVZäïÖõí\x0012gÉÐ\x0019,\x0004B\x0006wcàÖ %C°æ4ÑÀ\x0003ÐÄJ\x0017%\x001a2l¶å:\x0015w\x000c,Ì`!Ø.$YÝ\x0018\x001d\x0019ì\x0013À»J;%j£ÙN0õmÿ\x00162øÓÍ?©ðF,\x0019Üªxà^%Ã
Èa4?õ\x000b\x001f\x00080õ&2`pd\x000f-%Zo¯áRdÉ°5Ý6q?B\x0006¼:24D\x0004þ	o¯áRäÈ@\\x001d¯êW'^JÎ¢1CàmÎ~\x000eÒ¦á\x0016ä¦ª\x0016\x0019©N
\x001aÎâd½¦\x0001«\x000e\x000cà1¥oÎnÚ\ìà]±\x0000XSÉð"rN<ºô@ßÌLÖc2ØÞ(ïÕ^E¿²à-ñÆ¡GÈðD;\x001a>L\x0019{\x000co"G\x0006\x0011\x0001<*d&k\x0001\x0019V¤Ùil\x0001Õ\x0004O#
%ÃM«­d¸\x000192Ä\Pu¬u&ëvL9hÙ(ÒkQ\x001bTãM(Y×-éÙD?õFÖÓ¨á\x0006dÈ+eì\x0003
ë!&5zp2ÕC\x00022HÍµµäZ
 ©BÃòðº´ð±WÉð&2d\x000cðyPÑ\x0007ÍBúh²]'ÐV³úíö3èÈÉ\x001bÄ\x0001ãJ\x001b!jöE(,®âM\x001bMDÊn\x001892ØN}ãrZÒyØ®i \x0019ì\x0012´°dÙ6;º&M)s\x0005Y\"¹¸Ö¾\x0014\x00192¨\x001fÔÈ<l%Ûaþ&fÓÊö9t\x000c6Çb)¥®ú÷jc5§<\x0019ìøUøÍwóÙX÷ö\x0000xJ\x0006\x000fvq­})p20ßB½¼9Ü"kÑ[\x000c\x0019Âw\x001e\x001evgDª\x0001d`\x000cÉæèÌ\x0000W2¼
\x000cªZÝU?>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_dp_remise_educsex_20160615.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_dp_remise_educsex_20160615.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=ôöú|w¼Ë¨Ozé4\x0012Güóùv\x0000 ã\x0000\x000es@®ußÎ!K\x0014ThÚÍçÁà\x000e \x000cö\x001cÕ~Ý¥{xÚxÄr\x0005Ð6à§\x001c{ýk½ó·¿´Ëý6ý§å'zg\x001d8ª»`Kð¥¶ ûtémÓÌV8I%\x0011©\x0018ú}ãÁ*(\x0003´ªö¯<\x0006¹a$\x0014WÞ0	ÁÎ\x0007QÓ½sÐi¶Þ7·N(¥lå2A\x0013|É\x0014p	ç c 5	]3D´x¢Ö{­ñM)9$\x0012¶Äb\x0015³Õ\x0004rTz`sÐ(®?ì3Ã\x000e»\x0004\x0011Ù[Äö$\x001b+YÚM\x0015l6Òª\x0017pã»A«7·?ô2²/úEÅ3Ë|è .tôW
~R-Nâ4Ã­pømINw.{!mý	#»c¸\x0000\x0000\x0000é@\x000bUEä'Qk\x0010O±	Ç\x001bI sõ\x0006¸kYo<?=ôöú|w¼Ë¨Ozé4\x0012Güóùv\x0000 ã\x0000\x000esZºU§ü&eî--MÀ±v*\x001eq²ãÎG^½(\x0003­¢²¼En.´Ià71Úù\x0017|B|¤\x000e\x001bîð{×'«l´mnÌØÇ¦Ü(·Í¤â*d\x00002
Áã\x0000\x0003Í\x0001sÐj\x0008\x001eviÑ$a\Ê¾íëÉà`ç#\x001cô®cY²Ó,4/´¤/±ýhç¸faÁlåÃ\x0002sñU¯|9âÑ?Ó\x001fø\x0004t\x0005ÎÂWgc^&$HåðPc rxê)^Ãqwum\x0019&[VU\x0011\x000b(a^
a\iöºv¹ Ei
Ä­<ÌÄrÎ|åäsYãG²[\x0015[(\x0012h£Û\x0001T\x0003fë~@=²IÏÖ;z+½¼ü?¡Ò.,ü±[çCüW¹õ\x000f\x0014ê\x0011Ocg}äG\x0018+ÉÙ\x0015c`\x000b2¦Æ\x0004È-×> \ÜÔ/¥·ÕôTÛ²îI\x0016Lp±\x0018ü@­:âì\x0012Xï<>²Ï\x0004È.î-\x000cí0\x0011ùoÞÀ\x0013´å~RKm\x0016¨6¡qmk¨DúVò\x0019ÜBÅ¶#ø\x0017h=:­\x0000v´U
e¡M"é®'{xÄg2ÆHeô+ùÆ\x0007sÅfèSß=ô¢èþ\x0013])9Xn1Ê©÷\\x0012:\x0003gq \x000e\x0019£%\x0019\x0012HÜe]\x0008!¨#­I@Â( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0008(ÖWcA#à3\x0000\x0001ltÉïÕgÒté/\x0005Ü6Ïr\x0008>iKdt9ÆsW¨ \x0008\x001aÚ\x0007Íhci6\x0018÷\x0015\x0005¶¹ôöªz\x0013­pYYYÜ@£cÛMò)L`\x0005àÛ1JÓ¢0t2Xõ!w%®\x000cQ4PÛÁ~f\x0005°\x0000\x0007å^\x0006{óZahöÕ­`kbrb1ç'yúÕª(\x0002µ­F+;hmã'%b@ Sõ\x000cZ>\x0014Í,z}¢JÍ¸ºÂ \x0008 ç\x001e \x001f¨Í_¢+­¥º[5²ÛÄ¶ì\x00081\x0004\x0001\x00089È#§99õÍK\x001ci\x0014k\x001cj\x0011\x0014\x0005UQ\x0000è\x0000ô§Ñ@\x0014_IÓ¤¼\x0017rXÛ=È ù¦%-Ðç\x0019ÍIqaiu<3\[C,°\x001dÑ» %\x000f\zsµE\x0000G41Ï\x0013Å4i,n0Èê\x0008aèA¬M_F-
{]*Ê(åÂwbE$\\x0000zÖý\x0014\x0001F\x001d+O·ºk¨,m¢¸læDC\x001cõä\x000eõ3YÛ2K\x001b[BRfÝ*\x0018sÇ$cÀëè*Å\x0014\x0001\x0013C\x0014G#Æñ\x0012cb $`àöã¬m\x001aõ/\x001aÚ\x0013tjÌPo\x0003z÷5j\x0000¡\x0016¦Å3K\x001eh³n.°¨$\x00089Ç¨\x0007ê3R^iÖWáEí¤\x0017\x0001>ï\x0018l}3Vè 
ëin¾HX"\x001fgâ\x001c ýß\x0018ù}8ãÕ\x0017öVöÏ¶}ÛíYÏå.üúç\x0019Ï½]¢\x0010Ò`\x0010xë×ÞE\x0000E\x000c1[ÂA\x001aE\x001a\x000c*"\x0000ô\x0000T´Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@	TîoÖ\x001bí£¦ù*¤|Ôç ª^%ºÚÂ?³9Id(*pqÿ\x0000Ö¦#QÇüeÏýsÿ\x0000ìªU®Èo¢6è¨\x0003¥¥ª}¢qP­$\x001b¯ãX¾$»ãIU¶%\x0012J\x0013ä`qÔÿ\x0000<Q\x0018¹;\x0014Ý)!F[e<ÄQò\x0006\x0019Ç®:Ó¼èÆ\x0011*y d¦á»\x001e¸©\x0019-\x0015^{Ëkf\x000b=ÄQÐ3\x0000iÍq
Ãç4¨"Æw\x0018üéØ	ij¼\x0017×$ù\x0013Ç!\x001dv°8¬ó®Aýª-°y\x001b7\x0019¼Áyã¯Ò®+-ÖIu^-A\x0004JºK\x0003ßéÓ¹=åµ³\x0005â(Éè\x00194äôµ\x001aË\x001bGæ+©Lgp<c×5\x0003ê6HªÍw\x0000Wû¤È0Z\x0012c-ÑM\x00040\x0004\x0010AªÚF-XIsölýÙ7mÁ¡+»\x0001n¥¦MæÚ(7\x0011\Hk<mý}êÔ\x00127sÑA&Vv\x0001ôV\x000f\x0000Ky\x0018\x000f2RÄÀè?kV\x001bëKÙ
ÌR8þ\x0015pM9E§a'rÍ\x0014^këX$Ù5ÄQ¿÷YÀ5)62Í\x0014Âê\x0013y`\x0014\x000cç<T0^ÚÜ9H."8W\x0004Ñf\x0005*\x0018®!b9\x0019\x000e\x0018+\x0002WëéM\x0017vÅdaq\x0011XþùÞ0¿_J,À±EDfCç\x0019\x0010Eï,6ã×45Ä+\x000fÒ \x0019ÞXc\x001fZ\x0000\x000b»{D\x0013Ç)\x001dv08¬{SæøP¶\x0004Q\x0004\x0004ã
p9ý
5\x001bÜMôV$\x0017ÙÚdÒÏ¨EvìXÅó1\x001cm\x0007¿=}*î¨G}l¾/8´hÀç½\x000e-j\x0017/ÑYW·	5Ävñj0Áó|á\o>ÃÒ´ÔmP2N=M
X.-\x0015¬ÜÊ<\x001bFÛqrq¸uE\x001dZ yÇ¬­\x0012g1¬Y¼py?üé¨¶æå\x0015KX­ô«Q¶º§\x0007Ð\x0005g\x001dNK-
ÑØîç\x001f sË\x0013ÏéBjèNI\x001bÔV\x0008Òu\x001bó.u9bó¶?º§ð#ü÷¥º{í?Ãó\x001b$à¹\x0007\x0004ýÎ)ò-\x000ecvÀ·Ó5\x0019­¢µyÈ¡ìéÓ­kÙÃ$\x0016Ë\x0014³Üg20Á<ÿ\x0000JI.£NåJZÆ½S¼¿0Ç#ZYªçÍB\x000b9üò?JI\\x0019±EszmÝÅ£yksr×\x0010[Æ\»rGC×ñ#¯j-âÔu\x001aóí¯jO\x0012\x001eÞä\x0011ßëUÉmÙ<ÇIKXÚ.¡,ú\Ü\x0006ya%[jüÍ½¿
 ×Úúµ¾m¢÷,*~m£®ï­\x001eÍÝ®ÃæGQECq<vÐ<²°TAk+Gæúâ[Ù¥d"\x001e¦Où÷ô©Qm\wÖÆÕ-cÉ<Ðx(BÐ\Dv©?u·á×ÞµéZÀÅ¢¢x¥gX¥G1¬\x0015*}\x000f¥K@Â( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x0002( \x000e{ÄköÝ:Ô\x0016\x001ecíê\x0006G?N\x0002,ÿ\x0000m»;Np\`þ>¡£Á¨ÎK,ÈÈ»G@\x001f^Aæ ÃÖñÊ\x000b¶*AÃ8ÁÇ¯\x0015ªºf|ºgTÔ¼PÖ·Y0[Ç¹\x0010ôfàý\x000bô¨uK+Xµ>+TTgpdzc#\x0007\x001d¸ÝùV¾¡£[_L³1)`<ml\x001a\x001d¬\x00170Ü+Je?30;½Ï\x001fË\x0014Fvê\x001c¬«§b_\x0014j2çPü¿Â oøë\x0017±áÌ\x0011\x0015\x0018ç\x000fþ&´.4+iï\x001açÍ'¾#`\x0003~©ìt»{\x00039v& °l\x00101\x0007\x001d9=i^6\x000b3/DÓm/tóux¢âiÙ·³Æ	\x0018ëÇÿ\x0000^¥¼6±I\x0006\x0005ÝI\x0018Þ±OrM=¼9h\íxãc[å>Ü=Ö
Äé2Íq\x0004ª»7Äø$c\x001cZnI»Ü,ìeÚ#\x0012B­o
³,DºBx#\x001cg\x001cz~¶:}¤Úýò\x0018#0D\x0002ªcxÿ\x0000\x0003ùÖµ®\x0005¥Ù¹¤i\x00196\x0012íôä¹ãÖ£}\x0016\x0013¨\x001b´xÝ\x0016T`\x0003sÐñÐÓöð\x000eVgÂÞ^µ«] É·j¯n\x0007ÿ\x0000cüéÚ\x001ekw§»µ\x0017\x0013LÌ]\x0004uãÿ\x0000¯Z¶zl6]JÝ®[sï ú\x000e:rjxrÓ{\x0014â(Øå£WùOæ)s¯@³3l\x001cÃ¥ë>[\x0013l¤¤$;?
´ñ§[Eás;Æ\x000cÆ=ûØO\x0000z\x000eZÛK¶N6*\x001a(\x000e>æ3ÁÏ|úS§ÓâM\x0016$ºÄ\x0015T\x0015Æ@\x0018ÇQÞ{E}\x0003f¥tPÄ°\x001e}\x000fJ¥}<Wz[Ã§¥äð/ÌÒ\x0010\x0015sÛµ±\x000cK\x00041Ä,j\x0014}\x0000À¬ù´Xd¼{¨î.mÞO¿å>\x0003~)«¶ÆÓ±CDV\x001aõáò\x001d±tåsÇø\x001fÖµõy<­&íÁÁ\x00110ÏáM±Ó °y!/$1Î1û÷ÍM}hÖo+2£ã%q\x000e{çÒI9\\x0012ÒÆ\x0014RÁ\x0006ci%¯Ú¤nHº\x0002IÎIíÖ¡']gNCg\x0005£ù¿s\x001e¸ã×­lÜèÖó¥°\x000f,Ol¡cxÛ\x0004\x0000;ÒC£A\x001dÜ7&Yä y÷nÈ#Ùã\x0018ªçâåfrR[K§}¦Kû\x0008ï!òf
ó\x000cñÇqÏÓë][¨u*s1ÁÁ¬ðü\x0003å{¹ \x0007"\x0016åü©KqÉ6gês5ÍÞkk\x0007nÑ	\x0005\x0007\x001dÏ¦?)³¼P³-2+3\x0014fI\x0013ÈÎ@ëÆ:Ú½Ó-ïV=Á£xþãÆv²ý*\x00184x i$ûEÃÎÊTLÎ\x000b(>\x0018üóUÎ¬.Ws\x000bZ[jÉbî¥mÃ"ä/8ëëý}êö§\x001d½<»R\x000crÃÿ\x0000xóíZúU­½ª¥Lïf9fÏrj%Ñ­Æl\x001aI¤9RÍó/Ð?É§í\x0017»ä\x001c¬§­2Ûøf8AÁeDQë-Ô¨³ÓÌ^\G\x001a°F!B1Ûð©?á\x001b³0¬rKpûX\x0010Kô\x0003°ã\x0000UÝ"\x001b«¥¹Y¦p»wÄÛI\x0014¯\x001dÌÊ´Çá\x0006Þ+fHtðA\x001cg\x001cg§éL´r,õÛ½Í\x0019\x001fN½?1[VºL\x0016·u\x001bÊetØÛØ\x001côçñôö¦G¢[G¦Ëb²MåÊÛ\x001bãÛ\x001dj\x001câ\x001c¬Ç»·?	@ÎÒ61ê¹l~\x0002§Ô¢]3DìÑ`I à;süëZãMãN[&Ü#E\x0001HÆF\x0006\x0007µ2\x001d&\x0004±kI^YãcÖVÉ\x001e>ÔýªëÜ9Y=Ì?gM\x0016(\x0000	|Ô${ç©ú{×Id²¥\x000b><åCàçæÇ<Ö|Z\x000c\x000b"4³ÜÎ±Q$*¸éZõ\x0013z!Æ61 "_\x0015\\x001cÃ\x0000Uüp¯ëTe´]SÄq³º$H0ÈyÎ\x0007\x001f©­\x0016¶/\x0011%ÌhZ	¢)!ÈùHÆ?ýjÍ®\x0015­ÝÅÂ3´¶â0:ð8÷ªç¶«°­s×4¨´û\x000f0\ÎìÎ\x0014\x0007aú{TÚ[MOHó@\x0010Frz\x0002;þ\x001c\x001aÛÔtèu\x0018ãIËFÜ\x0002ãïR^ÙÁ}\x0001á7/QØê
5Sk'bftHË³\x0000d±<\x0001X~&K¦@°°a4«´A\x0018?×\x0014«á~\x0015în^ r#,1üªÝÞku\x000c\x0010åá\x000cìX\x001fÌ\x001a¸ÆIÜní\x0015\x0000}ºóöÇøVº\x0014$[Æà0\x0001<Èÿ\x0000jÛþ~¯ïàÿ\x0000
ÆÊS«Ü^\FP ò \x0004òúñþy4IónÁiÐ×¬KÝJk¹ÚËJÃH?ÖL~ê\x000fóÿ\x0000ÖÍm0Ü¤tÍb/-\x0013;..×>?Â\x001cV¬r¿B;Ý9tß\x000f]\x0008g\x0000É!êÿ\x00000ÏèM]²¸Û@rÃb@	ç¾9\x001f\ñRYipÚ[Ë\x000eù&I~÷AÈÆ1À\x0015Q<5f¯Ì¼`î\x00113åsùSæOFÉ³[\x000eðÄ-\x001eæ>s39ôè?\x001aOßx¾1ÿ\x0000< Ïçþ*·\x0015B¨U\x0018\x0003\x0007j©\x001e\x000cZ·À¹UÚrx\x0003¥Ï«cåÒÆN¸~Ù¬ÙéÎå #{àã=p?N=ÍC¨Y[é·ö&Ã1Îò\x0000Wq;\x0003''ð÷­GJ¶Ô\x0019+§Ýt8#ÛéQYhÖö24ãÍq<	ú\x000e©M$âîC{ûï\x0012éñ/&\x0014i\x001fèA\x0003õ\x0002¶«+HµK=õâí¸à'÷\x0014t\x0015¥4k4/\x001bgk©SYË±H«§ØÚZ	\x001aÔ\x000fÞ³nÝëÆ\x0013Wª¦c\x000emäA»nK\x0012Ç$Vènìh(¢C
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
*w©&«qb\x0010$·b\x0018°ÿ\x0000ÙZ#¾I5Y¬Q	hbI\x001dóÀÜH\x000bõùI \x000bUO´»j&Ù`¢Ç½æ< $ð£Ôõ'\x001d\x00063ÔUº\x0000(ªZmá¾Y\x0019\x0002ysË\x000e\x0001Îv9\þ8Í] \x0002( \x0002¬.¢w¸HÍß\x0002H×¨$d\x000fÄ\x0011O·Í\x0004r´o\x0011u
±ñ¹r:\x001cdf&¢(\x0000¢ªØ]5å¿ðKnêÌ\x001cAÇ^\x001e \x00084\x0001n¡y~mµ\x001d>ÔF\x0018^;¡lãnÔ-Ó¾q¿@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0015­ê\x0007JÑî¯~i7l'\x0019üjÌs3ÜË\x0011E\x0008ªD
¯ð9ÎF9È\x001dE\x0000OECmq
Ý¼w\x0016ò	"nV\x001d\x0008¨¬îëÍco$1¤\x0010ÉÁ\x000e\x000bc¨\x0019Î3ÔsÜP\x0005º(¢
*)¥Þ	&ÂE\x001av=\x0000\x0003$r:ÈèAV\x0019\x0004w\x0014\x0000ú(¢
(¢
(¢
(¢
(ª_kØ=ÂYÍæ.ì@Ø\x000eØ$qÉ\x001cã#r:P\x0005Ú*(eY¡UÜ\x0015Ô0\x000c¥N\x0008Ï ò>-\x0000\x0014QE\x0000\x0014U\x001f·ª\Z:HmÒs!?Þg\x0004cÛg_z~x5
6ÞðDÑ,è$Uc\x0001ä~ \x000btU\x001dFÿ\x0000ì/d¢=ÿ\x0000i¸X:ãnC\x001cÿ\x0000ãµz
(¢
(ªvæòþ\x0002~Ë*Æ\x000es»(¯o½Â.QE\x0014\x0000QX×\x001aâZÏ«£ÄZt\x0011ÍÜ¾àÇ\x0018ì~P\x0007ÖµcfxÑJ3\x0000JÇÒ$¢(\x0000¢(\x0000¢ f{b0È¡\x0015Hµó\x00079ÈÇ9\x0003¨©è\x0000¢(\x0000¢(\x0000¢(\x0000¢kmÌBi\x0015\x000cÎ#Lÿ\x0000\x0013\x0010N\x0007¾\x0001 	¨¢©êÂÌN\x00109ób\x0004ãïº¦
Ùü(\x0002å\x0014Q@\x0005\x0015CF¿þÓÓRèÆ#Üò.ÐÙû®Ëûã5~
(¢
(¢
(¢
+6-I¤Õ5\x000b1	?d7\x0005[æ}á0p\x0001ù}{ö©ã½Ù$Ì\x0013Ü!tLnÀ\x0000ÆFFFy \x000btUKË§·0,VòO$Ò\x0004\x0001x
:cÐ\x0000?3:Õº\x0000(¢¡\x0017\x0010£j$_< §p¤\x000fÓ Ð\x0004ÔQT¯¯
¤Ö1
ö«$q·äfÏ¿ÝÇã@\x0017h¢\x0000(¢\x0000(¨neò-e\x001b¼´-\\x000cÔZeÑ¾Ó-.Ê\x00047\x0010¤»AÎÝÀ\x001cgñ \x000btT77\x0010ÚÂf¸c\x0010\x000b7@I\x0000~¤R\x0019]¬>LJ\x001726\x0002\x0008\x001bzç<ç§j\x0000( \x0002( \x00029îeÃ"U"B\x0006×Îx\x001cç#\x001cä\x000e¢§ \x0002;eh£ZH\x0008Y\x0014uR@#?\x0006¦ \x0002( \x0002( \x0002( \x0002( \x0002( \x0002¡ªß>;fXÄuÌP\x001c¶6`3ïô¤¶Ô\x000cúÅõ\x0014Z¤L\x001f9Ý¿wnØÛúÐ\x0006\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0018¶ßò8j\x001fõç\x0007þ%[Ô]tý;P¾\x0014óÒ\x0017ápde^2G' \x0014Ë½\x0016ÊòìÜÌ	Ê\x0004-\x001dÄåA$\x0003µ©üêÕ¥¤Vpy0ù2Oï$i\x000f>ìI G)\x0017ö²µ¼³Wír4ÝÂaI\x001bÏ0¨\x0004\x0013\x0001¿§[¾°on®¯næX"	!\x0008FÚ2\x0001Ã1ÆNìzb¯Ã éðË\x001b¤Rm÷Ç\x0013Lí\x0014m¨NÑØ\x001cv¥¹Ðìnn$Öty\x0012ù3É\x0018\x0003\x001f0R\x0001ã{P\x0007?¡K4WTotò¬\x0017êî§jÌÁò	\x0003Ñôç\x0015§u¨Mm}â	"rÿ\x0000d±TT>%=;g\x000buâ¯\x001d\x000bNû\x001aZÇoäÅ\x001c,~S²\x0018ØIR\x0008#©àq:T:U$Ò[DË$à	]¤ÆpI$y<ÿ\x0000 
^m.Î¥{<ÅD'Lsn\x001cü*\x00170\x0001\x001eµ%Ì­\x001c\x001aÕ\x0004Ou\x0019\x0017\x0017\x0017_»\x001e@¤\x0008³¤\x0013Hà×A\x0006ao4rD\x0013o#;ã<ò¨NÑÔã\x0003Ø¨×ÃZZí\x0002	\x000ci 8îcÈ*¹Âóè;Ðâ1ìl\x0012ÛUñ\x001c±Ü^n·Û³uÌ\x000ea\x001cOÌyã9Æ\x0006:TÐÏsweá«7»%¼µóg\e*vê	-G8SÍmÉ¤Ú=ìe$Ye]²mÂÈ1AÁ88\x0004?\x0001K&e-\x0016m	ò-Âpì\x001a=£\x0000«\x0003@ã9Í\x0000aêm>-íµµäï\x000cºtóªÉ+;Âè\x0000\x000c®NpwtÏ\x0004q\x0016ÚâËNÒ¯Î¡w-ÓÍn³ù1I\x0004UÏº1» 9ÍlÃ¢ØÃ
Ì~[Éö¤)3Ë+Hò.1ÄgjÃÙA%¼0<e£\x0016<\x0014 ©Îrp@ë×½\x0000C­\%®q$q\x001aà(6à\x00192Ä(\x000b2I\x0000}k#Mkm~Þ\x0006ò\x0008'¶wW~y,¥0Ã,ÛOÌAÁÁôâ·¯m!¾µÚæ1$.0Ë3Ür9\x0004\x0010\x000eG Õ[M\x0016ÊÒén%{Ri§y\x001fiÇ\x0019bxã§n}M\x0000VÕÿ\x0000äbðÿ\x0000ývÿ\x0000DµcIs+G\x0006¥d5A\x0013ÝFEÅÅ×îåG)\x0002,ãi\x0004ãåR85ÖMg\x0004÷6÷\x0012ÇºkbÍ\x0013n#i#\x0007×zÖzøkK] A!$\x0012G\x0011Ìq°9\x0005W8^}\x0007r:\x001cP\x0005r+ÉôâÓä1Ü¶Ý¤>ÂFá¸\x0006ÁÁ+\x000fbEs³j§iÚ¨ûJÞò1\x0011òod\x0012ùaØ&ôbÄ\x0011É<¶2½¹®ªòÒ\x001bëf·¹Mñ>22AÈ9\x0004\x0011È r*½¶en·\x0003ËyÂ®$iK¨Ï\x0004±<rxéÍ\x0000dA\x0016¡odöÖº¸C&ËµÝE":\x0010~ly\x000e\x000fÊ\x0007\x0019\x0018ª×wpëo¤¥ë\x000bÓÌº,Ûí\x0002ÞHoVÀÁþ\x0010Øþít\x0016\x001d¥ÄSF³;Â
ÅçNò\x0008\x0018;C\x0012\x0007\x001cqÛö=Óç±6ÊÖ×\x000cÍ*1$»1ÉbIÎsß9\x0018\x0018Æ\x0005\x0000VÓ&ëÚÌ/#²FðÑ!At\x001d²AúÊ÷ÏÓlâfÔ®¦æé;Yv\x0017DÌäª\x0001QÃ\x000eÃÚ¸Ðìn$Y\x001dgY\x0004b"ñÜHê:\x0006!oÇ&´
;ìÐA\x001c-
[³4&\x0019Z6±%*A\x0000Ó8éÇ\x00029Ëé.?á\x0014ñ%µÃ8\x0016ïµ\x0004Óy¬ªQ\x001b\x001bÏ'8Ï<ãµlÂ\x001eóÄ\x001aÕ¤³Ü\x0008\x0016+b¡%dÚNòJA\x0019ÀÎ:â­®§-Õ ·o"èæeó\x001c<\x000cç{Õ¸í!î{¤LO:ªÈÙ'p\ã\x0019=(\x0003Ó¶\x001e\x000eÒ
¤·[õ	cB³ne\x0018bD{Ø*\x0013~> Væ°jñ\x0008­µ\x0018¬7\x0012­åÊK\x0018ÚÊ|ÆoPGNE^BÓãµ×Év¶\x0019åvTÁÈØ	ù9çåÇoARYé6W
<BWg4Ï+\x0005Îp\x000b\x0013Â3¼Eup/´Û\x0018ÑçÌg\x0016®©#ì
Bb0\x000eI89Àã½Rh5¦P¶±ú\x0008ä\x001a#utèÛþuW\x000cì7/BsEtwÖ\x0016ÚJ1î\x0008ÁÑ²7¨`A\x0007Ü\x001a¬º\x0016-§¡y\x0005Á_5äÙßiùräîã·<v \x000ezùaE×-dmVÚxmZ³ÜÜÀØÀ\x0015`Çr\x0008*I\x0019\x001d\x0005tz\x001dªZiVê4Ñ\eg \x001d	'\x0003ØqKm£Ù[¥Âùo)¸_.VVy\x0018%ãÇNjk\x000b\x0018tû"ÜÌc\x00072V\x001c\x0001X\x0006\x0007N\x0001ÎG{7ü+y.¤¹\-«)s¼8%~÷\çµu\x000c÷¾06Íws\x001dX¬\x00142´{Ì`9\x001c:àp;qW&ðÞ8eFRY¡óÜEÔìÎÐyÎq×Íh\x000bHEé»Ùþc\x0011\x0017Éû ç\x0018éÔõ \x000eRæòúÒÎk(în%\x0007T[E2ùÂ6>ÐÎ@Ý´19ç×\x0015£§%ì\x001a¼B+mF+'Ä«yrá6²1Ô\x0011ÓZésCu\x0014\x0007éüÉA'À\x0000x *ã\x0018Æ3Ög¤ÚY\4ñ	^v]lÓ<¬\x00179À,N\x0006{
\x0000Î×\x0012â}F¶î{x%YÌâ'*]@\\x000c÷ê\x00018 Õk\x000b\x0019numZÊkëÿ\x0000²Z¼b\x0005\x0017.®¥ÓseÁÜÜ\x0005tRZC-Ô7N\x0000Ë\x001bd¡±:\x001càu¢+Xa¸xÓl³dl¸Çn=(\x0003P{Ý\x000bFYÍõÅåÊ3ùv\x0008z|®\x0000ÈÎ\x0008É=
V¸¸¿ÃºÔ1Ïq\x000cö÷q$-$æGwq¿©\x0019c×\x001c\x001aèAÓÚÚÖ\x0005â[Lù
\x001cÎ\x001ezÀç\x0007¸Ïò\x0014èô=:+Y­Ò\x0006\x0011Në$£Ír]0IÎsòú÷Í\x0000R{i4Ý_Kò¯.å[xgYæ2\x0007ýÛ8l\x001e\x0014å\x0001Ò±íïï&°Ò-Yï&\x0017S]\x0019\x001a	BÊþ\jf\x0018\x0018ô9Âã¦k±Ú)¥Y\x0017sÀåã9#i*Týx'­Tm\x0016ÀØ¥V\x0018ä2&Ù\x001829bÄ\x0007 ä¾:P\x0006]©Ô-ÛQC
ôV_f2Eö©ÒGAÁÙ°F\x000f'
QÝuiá½*Qw}=Î¤aY<àÌ\x0003!b\x0013q\x0008¤ãnx<ç×¥¶Ò­-£\x0011\x001dÀÄ¯$îã\x0018\x0000±$ð	Ç<fúm¤rØI\x0000kEEEp\x0017\x0018ç®F\x0007=h\x0003'NKØ5xVÚVO\x001bVòå%Ã\x000cme>c7¨#§"¤º\x0012j\x001e$62\Ë
¬\x0016Ë7\x000c\x001bÊÌÌ2YH;@^\x001cjõiepÓÄ%yÙvy³Lò°\ç\x0000±8\x0019ì)×Ú]­ûÆó«bÎÉb£uÏQ¹H8>(\x0003#M´Tñ\x001e©k-Ã^Bm!PåP´F'êOÍÎjÖ¹$jl¬Ñ/I\x000b2Ae r¨çsdaFW¡\x001dGZ·a¤ÙéóI-´L²Ê\x0002É#HÌÒ`	$O' \x0014ëý2ÛP14ë \x0012LrÇ#Fé\x000e\x0019H<¢8ëÇ»dÖK­Ì:ÔQÆòJ%x¢É\x001bÎs÷3g\x001d«rò\x0016Ñ®´Ùmn®äY®\x0016ÞXfæ\x0012+\x0003ÈÜN
õã\x001c\x0003¹ÿ\x0000\x0008æah^Ì<m(Ý3·qÉäã®zõ95%¶emt*²É2\x0002±¼ó¼¦0zÜN?
\x0000Ï²·mf]B{Ë¥òîd·+{B\x0010ã$)\x0019c÷¹Ï\x0004U\x0004óQ]\x0012Þ[é{fÝ~rÆ\x001c\x0003ÇLí\x001d:s\x001e÷Z%ÕÄ:Í\x001c%òn$I)\x0000ñÇ<â¬
>ÑZÔ¬
¿dÈ/\x0002<§\x0003é@\x0018ÖÍªj\x0016Ó^]\x000b{\x0002Å\x0014w\x000eÊ\x0006.ì\x001bs\x0012N\x0006N8éY\x000f-ÕÔ-bº¸¸yõHít(%Ùä©À$\x001b
\x0017w\x001cóÖº«Í"Òòà\H²Ç8]X&x®sT¯NÔØô-6+9íRÕD\x0017\x000c\x001aE,Çs\x0000\x0000lx\x0007#ó×\x0000ÇQ¨ZÜH`·Ô¡´ki|Áwtíp2¬§ÌfÏPGNEhøfÝG´¹êêæ{xÝÚiYJÀè:õ\x0003'¾MX·Ñl`y\x001c$²É$f&iVØz¨,I\x0003éW-àÚÚ(!]D\x0011s\x00000\x0007å@\x0018¶°E?5¸ç%Åjv¸\x0004q¼\x000f¡\x0000þ\x0015\x000e¯qq7c°\x0011ÞÉo\x001d°Çg2ÄîÅüÌ]NÐ\x0000àwn{VìvÅw=Ò&'Udl¸.qÇA\x0015ök~Ñ<èâX³åË\x001c\x001b®zÊAÁî3\x0000æ¯¤Õ­ü=ª¦o-M\x000fØåTyBL©(Ç89ëAç5¦öÒiº¾äÞ]Ê·.ðÎ³Ì\?îÙÃ`ð§+ü \x000c\x001e}4k\x0005±ÓÈÌ28MÎÅÁ\x0007qbrN@äÕjkh§	$MÏ\x0003\x0017ä\x0012¥O\x001dø$s@\x001cÆö\x001bë$ÕßRK¹YÓÍûOmrÄ\x0013¿ÁÀ$\x0000«Ó©ª³jZÚ1jÍ}0i";\x000498]L\x0015\x001d\x000eW'ºK}\x0007O¶¸h\ÂI\x001awdGÊ¤àpOAÇj%Ðtù¤vh¤Úï½áYbvÎId\x0007iÏ|{Ð\x0006bj7]ëóº·oc\x000cËnÌYQö9#\x0000Ô\x0000q×\x0015_Q²ßÂ3ê\x0011kW¦ïìæcsöÙ!#8UÎÕ\x00078\\x0000FG5Ó\x000bX¢¸¹»!öC\x0012Ä\x0006Û£¸\x001dO w®FëJúÎK;\x000f]ZÜL
\x0011,ìöäã. 9^2HÚ¹Ï¥\x0000^³¶Q×ue¸¾¼\x0016°ù"8¢£Ã\x0018cèqdEUûuô¶úMÉu?-ÊJöì,¢'*£q*\x0006G$Nß­upY[ÛO4ÐÇ¶Iöùwm\x0018\x001f¨$Ò,¤´[c	\x0011,*vVG$±!È9'¡ïP\x0006\x001b¾¡kg¬þêþ\x000bAbòDngI\x001e)\x0000láÁ\x0018#'\x000e\x0008¨f¶¼µ°Ñ%]NóíwE\x0015Ë´ÅÚ¤`\x0011\x0008\x0000¤õ®\x001d\x001eÊ+{DnâévLòHÎò.\x0008ÁbKt'\x001cñ*y,-¥[Ux÷-«\x0007n?+\x0000@=yà´\x0001,óh÷ú¬vòO<Qißk9åipà¸ÆX´q¥TjBÊÖòÎ
^k²c¤î\x0013\x000cêHÜ6y@ `\x000c\x001cWWöH>Ö×^XóÚ1\x0011|õ@IÆ>¤Õ(t\x001d>\x0019ctM±¾øâi¢³U	Ú1Û\x0003Ô\x0001§Y\_Ç«Íq¨ß\x0006òt·\x0011ÎÊ!\x0000ñÀ 7=#\x0018\x0018\x001cÔ\x001a_ÚV>\x0017¼¹ãÎ¹\x0001'3 ËDìH\x0000\x000e{qÅuPYÁl¤1íY¤i\x001cdòÍÔþ5\x0004ÚEÚ|\x0016M\x001b¬\x0016û|2´{F\x0014\x00079\x0003æ+ë³Í¦è'ì²1@³IóÜÊÎz\x000eyêzÖf»¦\x000b+;i!¾»?éVë"O;J&ýêöbpA\x0000ñ\x0001âºCm\x0013Z}Dóa)åÜ1\x0012rO\x001e½k8xoMÝ\x0019xçÊ*Ñ	®dFA\x0004m\x000cÇ\x001d\x0007NÜtâ3n¦¸½×ïàhu)¡´\x0008W\x000b\x0008Ë(bÌw«\x0013Î\x0007n=sZÚ\x000b_\x001d<® ,©+ª4¬Ý3òØHÎ8>â¤¼Ò,ïn\x0005Ä,w\x0001vy°Êñ9\çi*A#ØÕKXl­ÞÝ\x0004q'EýIçIÉ$òI \x000e_N"ð´lo\x000bÏw,Q¥Û#·ç\x0000ñ´`\x0012NF\x0000<Õí	î"Öom%[á\x0010Å2E=Á±ppÄ\x0014qÓ­h>`Ö	gä$2¦Ù\x001829$\x000c\x000eAÉ=ûã¥:ÇI´°I­ã:U\x000b$JÎÏã$Éþ](\x00033]·½kÿ\x0000;eüö\x000bnWË±¹ò¤I2Im¹\x001b¸À\x001cAã¤új\x0017ÖVÖí¨^Yýn\x0001¶"bX®]·!ã\x001cîÜö­ûÝ\x001eÒúãÏL²ìòËC;ÆYrNÓ´O_Z'Ñì¦Þ/(ÅöeÛ\x000bBí\x001bF1\x0006R\x0008\x001eÙæ0&:\x001a]üKwf-%YlêU¤àf'\x0008Çp'u"£{ûÉü9¨êSO5½×Ú\x0011\x001eÝ\x0018h«"½¹*Ifî\x000f \x0015ÐÅ¡éÑù\x0018±S:\x0008ÆöÉ;\x001d	É\x001d±RK¤ÙMqq4\x0006{SrvÈ£¦åÎ	\x001d2\x0007\x0019 \x000859Ú=_Ee*%MÈ\x0018ê!sÈî\x0001Áúâ°õ{dT¼²\x001a6f.
Ï
<c±çç\x0001\x000eå9ädÖõ¾aos
ÂÇ4ÀO$³¼\x0001\x0004`n'\x0003\x0004ñþ\x0002£¸ðæróa¥Á-,"gXÝV(\x000e3ï¼õæ(C#lxE%\YÛ°aØíäVlVK}{áyn.o\x000c·\x0016\x000eîÂê@K\x0008ãäsÆrIÇ^ù®´iö«-Ä,=Äk\x0014§qùA\x0000uã©éÍC6e,\x0016\x0016Ív@ÑJèÈ¸\x0003\x001b\x0007\x0004\x0001yÅ\x0000aG-Î§q¨HÑjÒyW2A\x0011³¹4!ÀùLK\x001cdî\x0004sé]\x000e÷i6­¨§yå(È?0ã<\x00129ëÇ­Ew¡ØÝÏ$Ò,Èó\x000cKäÎñ\x0000\x0018ù\x000f\x001csÛ¿\x000cQÁ
E
*G\x001aTQ p\x0000\x0014\x0001ÅZÍ©j:;j0Å«5ôÁ¤HîbX\x0010äáv\x00190Tt9\z\x001a¹k`$ñM3]Å)±ví,B¹²¼6
>ï+Ö¶%Ðtù¤vh¤Úï½áYbvÎId\x0007iÏ|{Ôóé×\x0017Ñ^:È·\x0011\x0000¡ã*\x000e@l\x0011¸g±È 
~!t[\x000bXg6Âòéay7*íf!Of;p\x000f¿­Q¿°[-gD1^\´orAy\\x0013ábHÆH \x001cr8­ûËH/­\x000bÄ·Pr9ê\x0008#AèG"©Ã¡XEu\x0015Éi§³\x001cO$\x0011X\x000c\x0013Ç~\x000fa@\x001cÝ¬Ú££¶¡\x000cZ»_L\x001aH¤æ%\x000eN\x0017Ë2`¨èr¹<ô5¥«Ç¨És\x0015ÄÖ÷ÒZ}oÂëË\x0019y,p\x0008ßÆ\x0000äò\x000f\x001cÖº\x000e4Í\x0014]÷¼+3¬NÙÉ,í9ïÏz÷G´½ÏL²ìòËC;ÆYrNÓ´O_Z\x0000b]GqáÏ´ÚÜI25±d¸fÂõ8Æ\x000ezã\x001c×?ºêÓÃzT¢îú{HÃ\x001c²yÁ\x0006BÄ&â\x0011IÆÜðyÏ'¯Z°Gf-\x00125[pXAÐ.1Ê¢}6ÒM9l$5¢¢¢ÆI8\x000bs×#\x0003´\x0001Rú	f\x0011[jQYIk(o.\x0012P¬\x0017åe>c0î\x0008éÈ¤Uÿ\x0000{ÃÖ¡oå[XÝa³F\,kÏ\x0019\x001d\x0008$Ö¶­ô[\x0018\x001eI\x0002K,Gå4Lò6ÃÕAbH\x001fLRO¢XMoi\x0011ã\x0016k¶Ý£Ñã\x001bvà0 ôàóÍ\x0000rzRÜhz7/t¦Îú$\x001eíª¹Ì\x000fÍÇ\x0005²F}«~\x0015ÓÅ6öi=ÃÛ	\x001fl²³å¼ÕäNN	\x0019=¸«¡iÑÚ\Û%¿î®X< »\x0012ÍÇÍs\x0001ÎszÔÖúeµ´ñL#Í\x001cf!$³¶ÒÁ%Ï#¿§¥\x0000bi¶òjº\x001aêsêWQÝN\x000cªñÎË\x001c\x0018<.Àv¸ÁÜ	89¨,dºÖõk&¸»\x0018\x001fKâX`£\x000eìÇ@ëÐÓ+j_\x000féÒÉ#4rËÉ\x0012O"Ääõ%\x0001Úsß{æ®­\x000bxn0'1·\x0002~à$M\x0000sM\x001e§%Ý­¬×\x0017Kg¨í*'1Ë$>Z¶Á!ç ¸ä:Ö·æá¹\x001eûÌb\x001e+×ß$Y\x0000ÝÇ äõëV'Ò,§Y\x0003ÄÀÉ(ºHÊÂM¡w\x0002\x0008 à\x0001Æ?SRXiöú|nÊãÌmîÏ#;;`\x000cbIà
\x0000åõë»Èåñ
Û]K\x0013Æ¶B"\x001câ2ÎA vÏ\x0019ÇZÔ{i4Ý_Kòo.å[xgYæ.\x001f÷lá°xSþ\x0010\x0006\x000fJÑI²¸{\x0012Ísåù§{
Û\x000eW¡ã\x0007Ó¯|Õm¢X%w<\x000e^36¥O×zÐ\x0007'klºn£â[Ø$ºK%\x000f\x001aIq#+ \x001f\x0013ó~9Ç\x0018¢/í!ekyg\x0006¯=Ù)#I-Ü&\x0019Ô¸ló
A8Ú\x0006\x000e+¥þÌ¶\x001a¾U'`\x0003í¾\x0006\x0001e\x0007\x000c@à\x0012?¨!ÐtøeÒ)6Æûã¦v6ÎAT'hÇl\x000e;P\x0006\x001b$ÏkâKÓ}{ºÒIÄ\x0011¬ì\x00151\x0010<\x0000yäð\x000f\x0003\x001c\x0001ÍJ/×S:µá½\x0016¢ãí\x001e{\x0018ò\x0017?sîíÓ'ëÍjê¶QÃ¡k\x000bm\x0011\x000fs\x000c²0\x0019bÎS\x0019ý\x0007\x0002«ØøwN66ÁàfÅv·2¿»\x0000Ç½yéÖ\x0014n/îu
JÎÝ ¾òÍ]´\x0016,N]\x00043\x0017SÇ@z{T7-ªGgöw{ëHQ·Kyd\x001aa\x001b\x0011¹IRÙÁÏÞÎA\x0019Ít·Úe­ûDó£bÏ,r4n¹ê\x0003)\x0007\x0007¸Î)hÖ1Â°¬\x0004ªÌ.2ÎÌÍ èÄx\x001dIéH\x000c]OO»¶¹]U»ÓÜ[^°$$Ç,\x000bñ\x0006N0xæ¤·¸]_Q´µPÙ-\cà+eÁ\x0018Ç cæµ¯t{Kë>Q2Ë³Ë-\x000cï\x0019eÉ;NÒ29=}hG²\x001bx¼£\x0017Ùl-\x000b´m\x0018Æ0\x0019H {g\x0000æõiol-5\x000bKùÊ[y`G&HLP·V\x001cq\x001csZ¯m&«é~MåÜ«rï\x000cë<ÅÃþí6\x000f
r¿Â\x0000ÁéWF±K)-\x0004\x0004Å#$-#\x0016v\x0004\x0010YÉ9\x0003©ín[h¦	d]Ï\x0003ä¤©Sõà´\x0001ÆÙÇx¾\x0008þØR¼{øâiÍ°\x0005'
S8`@äx=+SW¸¸Ä1Ø\x0008ïd·ØNc³bwbÅ~f.§h\x0000p;·=«at»5Ò"ÅÇåïoºzç?­%ök~Ñ<èâX³åË\x001c\x001b®zÊAÁî3\x0000æ.~ÜC
Ü7K\x0002ê¶¦Ý®dI$ÚYr	V=\x001b8$ç\x0004riúìÚ~¡âK8b³PÜ|»xÈ\x0004xã+ E°\x0005a;\x0016u¸É4\x0019:Ò¦:}¡êW]®Ñcq$:@\x0004\x001e;Î0àP·¿²{k]\!eÏÚî¢\x001d\x0008?6<ÂA\x0007\x0007å\x0003T:OÚlo¬W}I.ågO;í>mµË\x0011mþ\x000e\x0001 \x0005^MmZèv6³Ç2$Îð±yÓÉ \x0011´1 qÇ\x001d¸¤·Ðtûk¦%Ì$Q§vH\x0004|ªN\x0007\x0004ô\x001cv 
Z*µ¥\x0016Qº[¡EFârÌrO>õf\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0019ÚÖ Úu(×2È°Á\x00118Þìp\x0006}\x0000É>ÀÔºeìz\x0005ä@A*z©èTû~}=íß\x0015ìlÜ:Z\x0015!¦òÇàg\x001cá8éÁj~5Ý¦­cyj¶ÆäËt\x0012ù	\x0006ì\x000fâÃc\x001fÄh\x0011ÓÖ~w%þew6ß6xUÛhÀÉ\x00198®M°Òî|7ý£¨\x0011öÖB÷7vÍ\x000c£®\x001bª<\x00001Ð\x000cU}=a¾²Ñ¬\x0005¥ÜÑiÉ1kÉ>DSÇ	¸åNN\x00068ç\x0002çqEyåÌÐ\x000cé\x001euÖËDÕÌbX¤!V Ò\x0000\x0015³»x\x0007<\x000f¥mßYØéZt¨b¶ºq\x0019\x000c/\x0016\x000eòÊ>ð\x0000g'¡\x0003Ö¹¿\x0005ì7\x0017WVñdµeY\x0001\x0018\x0000\x000c1ëÁ\x0014Ù¤¹\x0017E\x0004*ÐÍ,¬ßt\x000e\x000e¤ø\x0000\x000f°¬\x001d\x000bKÓàñ.²ðÙÁ\x001bÛË\x0010ª\x0001°4C;}3­c[ZËyáùï§·Óã¼mæ]B{×I \x0012?çWiÀ
\x000e0\x0000ç4\x0001èTW\x001a`¹Ô5ëØo¬lo¤(Gs;**²
Ìå°9}Ãw^\x0000â¶|2³G¥lhgA4KC;L\x0004{\x0014»\x0000NÓú\x0001@\x0017ï¤¹ÎY,âY§A¹cfÚ\x001f\x001d³ØÇ¦jtmÈ¬T®FpzÄñ\x000bG5Í²òYËÈq.È@2HÁÜ~aÜñÂ DÚ­º\x0018DPÝíT·'ËC±\x000b\x0005ôùÈìs@\x0017õ»Ùlb´hBfkÈ`mÃ?+0\x0007\x001eø§Á|gÖn¬ÑTÅm\x0012\x0017|ó½²vþ
\x0001ÿ\x0000
§âø÷Óì#mÿ\x0000£\x0005ij\x0017)g§]\Ê¬ÑÃ\x0013HÁz\x0001'\x001eüP\x0004\x0016:-ÍÅlÙ0¸\x0016\x00188ùÇlõ\x0018Ï\x001dpkF¸ku³Ôô)ã´°±{\x0018\x0005·¼Fcf;¼gnIÏ8æ­YÛéw×Z´ºÁ[¸n\x001dX\¶\x000c\x0011\x000fõe3÷A\6áy \x000e²à`¯-RÚC5¤ÚÇ$ÊP<FGÆç\x0000\x0018\x0004ãÄwÍkéÖRYëðmôí>3\x0003ù¶Ö×,ÆAÚû6(àñ¿5\x0001s§¢£Xæ@ñH²!Î\x0019NAÇ½`øC.£¤Ûj\x000f·NßÌV8I$\x0000yhÇÓï\x001c\x001e	Q@Î³<?{6£¤¥ÍÆÑ#I*\x0003\x000b#(ý\x0000¬{x4ëo\x001bÁ\x000eQ
ÙÊd#òFK&\x0008QÀ'Õ
4G5gxÍö\x0019î.÷©8Yd\x0012¶ÄoPrÇ\x0007TP+Õfè\x0017ÒjZ-¥äÁD&æ\x000bÐsT--­ì<Qö}4\x0008 Ù¤¹·\x0001\x001a0e\x0008Ø\x001c\x0006#p÷\x000bíÇð¦¢ÝøM./\x00043¼jÂi¦o\x000c\x0013\x0018ò\x000c\x0011z÷ \x000eæ³<C{.¡^^[2Ã\x001eå\x000c23ï\Ý«Á¦[\XÛ^Ý¥d¾íò«ìÁÜÄ($ñy¦»øk¨\x0005thÐÌrË°JB'\x0000À\x001eØ .w4W!s\x0003ê\x001e)Ô"ÆÎûÈ1\x0004W²*ÆÀ\x0016eM	-[¯\x0000}u<>Íi¢³]Ý[4\x0011Ë'"\\x0019\x0011#Üp¥Ø\x000cíår}(\x0003n+Ð4ý+P¼ÖþÚÝÏ\x001düÀÇ6\x0018D¤ñx\x00199äsÆ;P3²¢¸t¸ß Å\x0013\Ì4¦Õ\x001aßí\x001ea%­òqó¥ÀMÙéZ²YÚiºö\Im$ÌË<0(
ñ\x0004c¹ôm \x001e¿63Í\x0002¹ÑÕ).ÞÚÚòæò!\x001c6û\x0014mÅ£\x000bã\x0003\x0007¯\x001côë\¼¶Ñiúj\x0017\x0016ÖºO¨eo!­Ä,[hB?)!vÓªÒÏm\x0005ÖâÑ4K/s<¼gkW\x0004{\x0000êòÈm^Þ%x%\x001bÙöR2\x0008\x0018ç'£\x0015j¹(­-¬ï|.¶°Ç\x0012»I#\x0008Ô\x0000ÌmÎIÇ~\x0005ErZÌ^xr6*÷Óm|°ÊI\x001fîâO¦WÖ¹ÙQ\l¶ëÄ¶¯§ÙÝ¥¬Q¥´\x0017SXâ*2È\x0018\x001f ·Q>»>\x0019Y£Ò¶K43 O%¡¦\x0002=Ç
]'iÊý\x0000 fÍ\x0015Ìø§|·úM£E\x0014¶³»îiZ8äp\x0006Åb\x0015³ÕR9*=0SLÓ\x0014ê\x0017ö³[éñÙ<IæØC9QòHm\x0014.G§] Ð#zÂö\x001dFÆ\x001b»rL3.å,0qô«5Íø\x001aÎÚ\x000f
YÍ\x000c1Ç,ñ\x0003+ªà¹\x0004ã>¸É©<A`o¯l6ýá¢ó\x001bìWlBÌ\x0008\x001f0Æy_u#æí@\x001d\x0005\x0015Å¤ö\x001aV\x000e\x0013;I0K{«bÄpÜüÛÆO\x0003\x0004cÓ\x0015Rxñá­~Ò&#ú4AnNÈ1\x0016Ûé$ã 9 .wôW96i¦kz<1\x0008\x001aI$Re_)Ûç=XåAÉÉ¬Ùm¢Óõ\x0006Ô.-­u\x0008PÊÞC1[X¶Ð\x0010RBí\x0007§U \x000eÖ«Ú¼ò@\x001aæ\x0015\Q_xÀ'\x00078\x001dF\x000fNõb¸{B#ðö#q\x001cz³n>U\x0019üXP\x0007qEbI<oã;xU;	Yz\x0003$xþF±4ûm\x001eãÃÓ_jó«lO\x0004 ¨=Wo@£1ÁÍ\x0001s¶¢¸
=$¼þÃ´ÚÚî\x0005Ó\x0012H ¹£ß£\x001c\x0004`å@^\x000f@Ä÷â[ûYãðÖ³oæ[Enn!X¢¶¦û3nMËÊs\x0000tÜzP\x0017;ª+½Ñ,añ\x0016o\x000c+\x0014\x0013G7Ú"\âà(]¾g÷°[9lß5%²Éb<K\x0006\x0018O³öÐ ùQÌ!°£¦\x000bsÆM\x0001s¨¢¸XlÝ´Ë\x000bË(4Ëyäx+æ¾6f,2\x0018ù`±nAR{ûU­/E³½Zö!<}r#gäÂ7\x0007÷NyÈÁü¨\x000b5Õì6l²ä\x001bD)yü\x0001«UÄßZ[j:gn¯ yçÝ%E\x0004º'Ðqë]1G\x00041Å\x0012\x00045
£\x0001@à\x0001@\x0012V}Ü\x0017ú/·e´ÊÎ\x000chÇ?\x001aÊÒ×Sñ\x000e¨¢-ÃA±mà\x0006D %ÕHÆKn\x0005ºñ1XNÑÃk¨Cc)ÆMZ8dgD~Zü¦@	\x000b¸*t<qï@\ô*+Ó¬¤³ñ\x0004"\x001b};OC\x0003ùÖÖ×,ÆAÚû6(\x0018<g¯Í[zqg7\x0011Ï\x0019BGQÔ{´\x000c·ErzuÓëº}¼øgÓ\x0001ñz=IGæ\x001dü\x0004Öl)m,õ{;+A=äM\x000cÞq{7H\x0001\x0004ãû»²¹`\x0006Gj\x0005s«´½mwQ³m¾U´p²`sßÿ\x0000ß"´ëIâÕüO%¨-rp´@\x000cåÂÈ@Ç~qYÙ»i\x0017PióÈñ4WÍ|þlÌXd1òÁbÜ¤÷ö \x000eêÂÓ\x001dcñ\x001e¼²0RL2áòÀÏæ¦±\x0018G}á]<+·>¬~d$\x0012­pý\x0008äpz\x0002çqET³ÎÑ
¥C\x0012ÅÉ,
¹ç:f¨øªy­ü=w-»:8
\x0019ÐU\x000b\x0000í	\x0018RN@8ÆqÅ\x00036k\»D°¼+\x001fq~-Üm8Øf)Ç=p:úÕh4÷µÔtÉ--t½?sànÝæ=§pÇ7âÉ9ã¯5ZßþE]#þÂëÿ\x0000¥-@Þä.`}CÅ:SØÙßy\x0011Æ òvEXØ\x0002Ì©±%²\x000buà\x000f®·Vhô­Í\x000cè&ÉhgiqÂ`	Úr¿@(\x0019³P\¼è©öxR]C\x0006}»THàäÎ;Ö\x001e­u\x0016¬
VfÛku	n}\x0003:\x001f©\x001b×ë´UKI-4='í\x0000\x000b©õ+yî?ë£È\x000b\x000fÃ8\x001eÀP#®¢¸ÍvÎ8ï5-F{{=NÞ0ëç\x0018î-\x0002¨8CÎ?½©$÷Í>T}WÄWÉ-¥êÅ\x001cf\x0008¯fd\x000b\x001b(%60'vAn¿(\x001fP.v\x0015Rú[cI-`\x0013"\x00138màí×\x001dñT|2G¥mhfA4KC;L\x0002n8Rì\x0001;NWè\x0005UÖV+íj;\x0011aiw4Vþq7~í\x0014±\x001c&\x000eã98\x0018\x0018ç\x0000èè¬/\x0008¸}	Bº4i4É\x0019F,¡\x0004\x0014)<\x0006\x0000öÅ3\Xî5­*Òõ°HZ3÷&cb7¯\x0005\x001dÈï\x0000ÐîHõ«+E\x000båM\x000cÒ>G9S\x0018\x0018ÿ\x0000¾hW/\x0015¥-¢±Û\x0011û$Í%¼g\x00084x`£'\x001cã\x0019Ú*¾c¦]øqõ
L«^Íqu!Ä°H	È
Õ6\x0000\x0018\x001c\x000fZ\x0000é®¯"´{e ÜJ!L\x000cüÄ\x0013Ïà¦­W\x0017¨ÚG§øbãTµI.æ\x0018æi\x0010n Æä©öÏ$zÓ¤´ûO¯m[O±ºÖ(Ú\x000b©"E´d¢l`~lÝF\x0000úvTW\x0013qo$\x001d²·x¥µHÑ\x000c\x0017-&#óq´9\x0001²¼õàs]u¥½\x0002\x000bHc\x0010I\x0008	ë@\x0015-/e]ÔlÛom\x001c,\x001cå÷ç?÷È­:æ$xµ\x0013Éj\x000b\¥-\x0010\x00039p²\x00101ßVd6nÚeå\x001ae¼ò<M\x0015ó_?3\x0016\x0019\x000c|°X· ©=ý¨\x0003º¢¸ÝvÎ8ï5-F{{MN\x0008Â3¯c¸´
 á\x000f8þö2¤ß5×ÆâHÕ× 0\x0004d`ó@ÈàyÙ¦\x0013Dr#*û·®\x0007'sÒ§®.yæ¶Ñ|O-¹tq¨\x0010Ì¨V í	\x0018RN@8ë*h4÷µÔtÉ--t½?sà/\x001dæ=§pÇ7âÉ$ñ×\x0004uÔW\x0012.#át¢f\x0008Ëo$\x000c\x0018ó¿%qùÕû­:
CÆÇíiæÂz\x001f%òQØ$t8ç¹í@\éè®:å¤Ó¼=¯ÅdÒG\x001dµØD\x0008Ä\x0018¢+\x0011}¤\x0002T\x0000ÎF\x0001ÇaÅ>
=íu\x001d2KK]/OÜø&\x000bÇf¹iÜ1åçø²I<uæ:ê+Ú-?PmBâÚ×Põ\x000c­ä3\x0015¸m\x0008Gñ\x0005$.ÐzuZìÛ!NÑÚ¬ý\x0012îKý\x0016Êîm¾lð«¶Ñ2q\þa¥ÜøoûGP#í¬îo\x0018í\x0019G\7U*x\x0000c \x0018ª\x001azIyýi-µµÔ\x000b¦$As+G\x001b¾pÇ\x0001\x00189P\x0017Ð1=ø\x0004wôW\x001e,e}\x001bW³7V6í2,h-$p¶WtLp¤+\x001c
£¦ò\x0007¥^Ð\x0004Vºõöt67\x0001#ÖÚBÑ:@ÀÚx9\x0018\x0004ðy .tTV\x001f}Ê)ã´é"¹e$|\x001e	\x001d\x0001`ª}\x001dè¸´´Ò­5\x0006Ñà\x000bï²³¤0ñ»\x0000í;\x0007\x0004çã'¥\x0000nQ\mÕ\x000fWR²`o|¡%½êó<³\x0011ÆOV,x*}HÅOg¥[j>$Öä¿g\x0000Â«\x0014¿2+yC,\x0007Lô\x0019ê1×\x0002çWEq\x0013À×Z\x0016lóK±ufvó»ËVBîë÷@\x0019ëZöÖ6Úo"Æ$¶k)\x001aH¢\x001bQ^0­´q1\x0019 .t\x0015\x0004o9¹\x001e\x0014XT)@ù.Nr\x0008Ç\x0018ã¹ÎkÅ-¥±ogeh'¼¡Î/s&é\x0000 wvW,\x0000ÈíZîõ\x0013)¸\x0016»¬á\x001ey8ò¾Y\x0006ìäc\x001dh\x000b=\x0015ÅÚÛÅ§¼¶2ÛÚé³ÜØH\x0012þÎSå\x0003eãi\x0019\x0004\x0013à5:É Ðeu¹Ó-àq`òùö\x0012³"rÙ^0Ü\x0013¤\x0003@\ì¨®&ÚÝlõ=
xí,,^âF\x0001må/$Ùæ o\x0019ÛsÎ9©´½\x0016Îö
jkØò5õÈ\x0008Ýü\x001fÝ9ç#\x0007ò .v\x0014W#æ\x000bë\x000cC¨»=µÕ¾ùCýÉ¥òÐª¹ï¹ÁêTRëÐZéö+o§$1C-ìky\x0012LcEV\x0007\x0001°\x000eÀÄ 8\x001cÏ\Ð\x0017:Ú+Óìä³ñ\x0004>M¾§ÆÐ¿morÌd\x001cm}\x0014d\x001e3èÆ©é\x0016ÑiWaÞÒå®\x001dÒ\x001dJÖS¾bA9 \x001erÀ\x0010:P\x0017;J*8åMÞ[«ìb­´ç\x0004u\x0007Þ¤ aE\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x00040[Ãoæy\x0010Ç\x0017æGØ ncÕ:ëCÛÃ$ÑM$Q¼±gËvPY20pz¸¨îõ\x000b;\x0010¦òîÞÛwÝó¤	¦M,÷¶¶öââ{a±\x001e@ªsÓÅ\x0000DúN÷k{\x000bV¹Èo4Ä¥²:\x001cã9¤GÓnc9ôûYR\x0011Õ¢R\x0010z\x0001\x0007µO\x0015å´Ö¦ê+d¶\x0000*¸)ÔäqÅDº¥ÌÐ¥õ³J½eRÊ1\x0006;Ð\x0005-WO\x000ctÄµ¶O.;á,\x0000\x0000«åú~µvÓK°°ÎÊÚÝßh¢U$zp)Ðê67\x0016òO\x0005å¼°E$Ê¬©\x000e\x0007\x001e´Ñªéæåmý©¸lb/9wò03\x0004=¬m\x001aõ/\x001aÚ\x0013tjÌPo\x0003z÷5\x001bé:tîK\x001bg¹\x0004\x001f4Ä¥²:\x001cã9¥Ôï\x0016ÆÆIZkh_\x0004Fnd\x0008»dÕ\x001bÍvÓJÒ-în¯`¹g
\x0015ÑÕ|î@fQ98Î\x0005\x0000h^iÖWáEí¤\x0017\x0001>ï\x0018l}3SÅ\x001aC\x001aÇ\x0012*F
ª0\x0000ô\x0000UvÕ,\x0016ÍnÚúØ[9ÂÌePy\x0018
v?H/mM¨º\x00170fÆ%\x000e6\x001c\x000ezuâ½±´¿Gym
Â)Ü\x0016T\x000c\x0001õ\x0019éN¶´¶´R¶Öñ@§\x0019\x0011 Pp0:z\x000e)¶úÔ²Cmwo4±ýô@Å{r\x0001âúwbÕïmä\x0004&U\x000eIéòç4\x0001<°Å0Q,i F\x000e»\x001c09\x0004{Þ¤ \x0011Èª×zSywol\x001bîùÒ\x0004ÏÓ&âúÒÖ\x0015æê\x0008an\x0016I$
§èIÅ\x0000Co£é¶¯¾ÛO´÷n\x0005!PAä\x00020=ÏæjýµÜ×¤Ñ´Ûý­þ4µq÷RF\x000ey\x0004ç\x0005mC,sÄ²Ã"I\x001bÊèA\x000c=A\x001djJ\x0004fézh´Ò¥Ï9rí7Éò³;\x0016aÛ$Ø©-ôËK(¥]>Ú\x000bF`´Qç±8ÆqN]SOk¿²-õ©¹É_$J¥ò:¹ÍQ\x0012iqêÒØI{m\x001bG\x0018fvBîÜAN¿xcï@\x0017ôÛ(ôí:ÞÎ.R\x0008Â\x0003N\x0007Sîzþ5\x0016ªR[·µ¶¼äK\x0004ç\x001b×\x001d\x0008Î{\x0011ê*\x001e"³Ô-/Mí3Û³¨3H
íSä\x0002>Sâ¬^øN±Ôá±¸º9$VgfTE\x0008
ÆsÇ®(\x0002
'L=KírYZéðÅ\x0013E
¼\x0018'æ`Y\x0000\x0000~Uàg¿5¨Ö\x0016hmZÖ\x0006¶'&#\x0018ØNrxé×­K\x001cÑJ\x001d£\x001c#\x0015b¬\x000eÒ:èE1ï-Ô]=Ä+lT0¸\x0008AèsÓ\x0006\x0012ÎÂÒÂ3\x001d´6èÇ%b@ S®ú\x001e#£>dÌ\x0005&\x0005à\x000eqUÆ§\x001dÖµ`WqOk$\x0013ò:S\x001e9\x001dÆãùÕèµ+\x0019®Ú+Ëi.\x00179eRã\x001dr\x0001Í\x0000%æc~PÞYÛÜþé0Û~§ý×ìïoöh|$¼~XÚÄ4Ùõ\x001b\x001biÒ\x000bËhf|mIUY³ÀÀ'&­Ð2¥æe~\x0014^ÚAp\x0013îù±ÇÓ5\x0015ö\x0015å6\x0010ÛÇ$oå¢0F\x000c\x0017\x001d@©_R±K±j÷¶ërN\x0004&U\x000esþÎsTï|C§XêØÜ\Á\x001bÈ¬ÎÍ*¨\x0000\x0010\x001b'ç\P#^¹ý;C¶.ÿ\x0000´ôø%c{<£V;Yò\x0008Èï[®êYØ*¨É$à\x0001Q«uµ\x0017-<BÜ¨a)p\x0014Ðç¦\x000eGç@\x000eh"h\x000c
\x0012\x0018Jí1\x001bqé¨,ôË\x001b\x0002æÊÎÞØ¿Þ1F\x0014®\x0005\x0013jv\x0010]\x000bi¯­£¸b\x0000åPä\x0004ç¨÷S\x000f\x0015Ãh\x001cýÙ<¥8Áa"\x0000}z\x0013ùÐ\x0005¯ì­?ílû
·Ú³;Ê]ùõÎ3z ?7dH¾kn
\x0006ódú\x0000?
-JÆk¦µòÞKÎbYT¸Ç\sS$±¼F+<d\x0007PA+N9 d\x0016úe¢ ·²·#\x0017]µÁ#\x0003G\x0019ôâ¦kxZágh£3 *²\x0015\x001b\x001e \x001e TRj\x0016qF$îÝ#%f\x0000Jçw9íL\x001adº®\x0004QK6¡i\x001cs\x000cÆï2ãÔ\x0012yü(\x0001÷uøQ{i\x0005ÀO»æÆ\x001b\x001fLÔñFÆ±Ä Âª\x0000=\x0000\x0014ðA\x0019\x0007 Õ[JÆÎUêöÚ	\x001bî¬²ªô\x0004Ð\x0004·6ÐÝBÐÜÃ\x001cÑ7TC\x0003ø\x001ae­F+;hmã'%b@ SõSGºy¬®e¹";«ÜØ\x0001Ud`\x0007Ð\x0000*Õ¦¡e}»ìw÷;~÷*¾>¸4\x0000[XZYÉ+ÛZÃ\x000bÌwHc@¥Ï<uê3Eí¦¡\x001a¥å´7\x0008§ J°}FiªéÏ,q.¡jde\x0010L¹ Ï5V÷Ä:u©
ÅÌ\x0011¼ÌìÒª°\x0001\x0001²xÎxõÅ\x0002-M¥é÷\x0016©k5³ÛÇ÷#hÔú\x000c`~\x0014åÓ¬&,íÖ&*Y\x0004J\x0014íÆÜc\x000cz`TÓ1X]*\x0010¤îº=ÏN+\x001ekÛ}áõ\x0017\x0011ºÝ\x0017óZ\x001cl\x0011\x0016\x0004g'\x0019\x0000h\x0003eâGÝ\x00152Y	\x0019*pFG¡Á#ñªßÙZÛ>Ùö\x001boµg>w»óëg>ôèµ\x001b)î^Ú\x001bËi.\x0013;¢IT¸Ç\r*Ý\x0003"¤HY¢Í\x000e\x0013p\ûdô¬Ý\x001bK6Ú\x000cv7ñC.âí$xÜ3Ç#g\x001d;UÈµ+\x0019®Ú+Ëi.\x00179eRã\x001dr\x0001ÍR°ñ\x000e¨j7\x0016P]@ÒDÁSlÊ|ì¨bW\x0007r\x000fÐÐ"å¦ec²ZA\x0006\x0001\x0000Ç\x0018^¸ÏO\\x000fÈzV=Í¦¡4Ò;húT¬wÅ¾èç\x0004¥\x0003\x001c\x0002sÈ®ªÚjV7®Éi{mpëË,R«õÁ \x0008#Ñì¿²mtû"ºÙ\x0015\x0017Î@ÙÀÆpz\x001fñ«	ci\x001d¨µKX\x0016Ø\x001c` ç=1¼ýkT½_´bvùu¸­GÊ8ìÊôéÉç¯5Ñ]ê\x0016v!MåÝ½°o»çH\x0013?L\x0000¢¥IZ42&B±\x0000Ï\\x001eÙÅ	\x0014i$$j¯!\x0005Ø\x0000\x000b``g×*;ëKXVk¨!¸Y$*¡'\x0015,2Ç<K,2$¸Ü®\x0010ÃÔ\x0011ÖSIÓ£¼7qØÛ%É$ù¢%
Ôç\x0019ÍY\x0018¢\x000e±Æ\x001d0U\x0003q=Iõ&uwme\x0017wq\x0015¼yÆé\(Ï¦M"_Z=¨ºK¨\x001aØôH
\x001eq×§^(\x0010XZOh-%µí
"d\x0005\x0000\x001d\x0000\x001d\x0006*h£HbH¢EHÐ\x0005UQ p\x0000\x001e
¾¡eu,Û]ÛÍ,}#1^Üxª6\x001e!Óõ
FâÊ\x000b¨\x001aH*mO\x000cJàóAú\x001a\x0006\¼Ó,u
öÎÞä§Ý2Æ\x0018¯Ó#zÙZ¤/
Û@°È6º\x0008ÀV\x0018\x000b;ð\x0000ú\x0000*µw-¬`@5âÇ!ã*ç\x001cý\x0005Z´Ô¬oÎöÚáeR«õÁ Ag§YX\x0006\x0016V[ûÞTasõÅ[ª\x001a¤«\x0015Íí¼\x0012?ÝIeU-ô\x0004ÒÝê6V;~Ùyom¿îù²ªnúdó@É#\x0018^G$F·;*\ã©õ5Utm1geÓí\x0004²\x001dÌþJäç==@?Q±qymi\x000fsq\x0014\x0011\x001c
ò8UçÜÒ%Ô7\x0016mqks\x0004\x0015%e\x000c\x00198îH=\x0007~h\x0011"Ã\x001aÌò¬h²H\x0000w
\x0001`:d÷ÆOçUIÓ£¼7qØÛ%É$ù¢%
Ôç\x0019Í55+hlá{Ûû5s\x0012ÈÒ	\x0002£\x0003üC'îÐÕ¸'æ\x0015	RXe]\x00180?B(\x0019\x0005Þc|è÷v÷\x000etË\x0018l~b¤û%·±ý\x001dþb®ÁùÝ¸\x000f\ó^if»··ÿ\x0000_<Q|¬ß;à}ãÏaßÒi}i|ÖwP\ª\x0013\x000cÀ>\x0014\x0001\x001dÚ\^Ï¼¼rùHÆ\x0000P¡~\x000fÔÕÂ20j¤º7+m-í´w
"iT9ÏN	ÍOçGçù>byÛwìÈÝ·8Î:ã<f+ÚiZ}­%µ¼0Z(Oè*_²[\x0008Ò!o\x000fæ*ì\x0018VÎw\x0001ØçúÐ÷vé\x001cÒ=ÄJJÅÀ\x0011\x0003ó\x001eÜ\x0010yõ\x0014¶÷v÷^gÙ®"Ëm¯å¸m­èqÐûP\x0004wuøQ{i\x0005ÀO»æÆ\x001b\x001fLÔñFÆ±Ä Âª\x0000=\x0000\x0015
Þ¡eb\x0017ívöÛ¾ï(Lý2j®v÷7Ú 2!d\x0011\x0011\x0002¸#¨$øÐ\x0005é­â¸@Ä !º\x0019\x0007 óÜ\x001aYa`¢XÒ@\x001dw(8`r\x0008÷\x0007½fÙêÏu{'öñ\x0000V8¥V1¨\x001f3¹Ï\x001cþ\x0000\x000f~\x0017H×luw-§É\x000c\x0004ÅN7\x000fÝ<`ûÐ"ÅÆ§Ý\­ÍÅ´³§I\x001e%f\x0018éÉ\x001d©÷uøQ{i\x0005ÀO»æÆ\x001b\x001fLÑ\x0016¥c5Ó[Eym%Âç1,ª\c®@9£ûFÈ\-¿Û-üöb¢?5w\x0012:g9\x0014\x0001<Q¤1¬q"¤h0ª£\x0000\x000f@\x0005W¼Ó,oÊ\x001bÛ;{\x001fÝ2Æ\x001boÓ4ªéÒM\x001c)jòÈ2³)g\x001eÃ<Óíu\x000b+É$ÖîÞwï¬R\x0006+õ\x0000ñ@Éa(\x0010¤1¤jI$"	=O\x00146Ð]ÂÐÜÃ\x001cñ7TC\x0003ø\x001a¯kx¢Í$º¼´rîÈ$¶£\x001c\x0001yÀÁ\x0019ê
Kii|¬ÖwP\á2\x0007Ç×\x0006\x000cµÓl¬¶ýÎÞ
¹Á0¸Î3ÐwÚ3ô\x001eÙt6k±u-´ æ´J[#¡Î:ÓâÔ¬fºkh¯-¤¸\æ%KuÈ\x00074M¨ÙA75å¼råWcÊ¡²z\x000c\x0013ÔàãÖ$º´·½Ãu\x0004sÄH%$PÀìj\x000b'O¹(®,m¥\x0011ÕâR\x0010c\x0018\x0003\x001c\x000faUüOu5/®mÇ4qe\x0018\x0000psïW®¯-¬£ó.î"·oÂúdÐ\x0002ýßÉ\x001f"/."¦4Ø6¡^\x001d±Û\x001d*z®/mM¨º\x00170fÆ%\x000e6\x001c\x000ezuâ¤ycãGuV@N\x000b\x001c\x0013êp	ü(\x0018\x000ck3Ê±¢É \x0001Ü(\x0005éß\x0019?VM'NðÝÇcl$æ6OSg4øµ\x000b)æ\x0010Cwo$¥KlI\x0001l\x0003p\x000eq*kmai®&\x0018«ÈÁ@üM\x0000W¸Ò´û«¹¸²¶té#Ä¬Ã\x001d9#µ[bB£qÇ\x0003=j\x0018¯mf¶70ÜÃ%¸\x0004QÁN:ò8¨áÔôùàxo­d.d&R©õ à~4\x0001WC³¸¶Ké.Õ\x0016K»§ËS»`!T\x0002{.\x001a³i¥iö2´v6Öò0Áh¢U? ©Úâ\x00151\x00060f8\x0016\x001f9Æxõã)c)C´r#b¬UÚGP}\x0008 EWÑôÙ.\x001eâM>Ñæ!ähT³d`äã¸â­y1ùÞwvÝð7c9Æzã<â R°·)§½¶)1»Êª®1N\x000f\x001eGZ¾xí4ù¬§\x001b'½7¦\x0018:3\x0000@>w\x0014\x0001ªÆB¢\x001bsá@Üp\x0006O©À\x0003ð\x0015^ÓJÓìei,ìm­äaÑDªAUu
^\x001d0_MuwkåA\x0018)\x0008`²nÚÇiÉä¶Þ\x0006\x0007CÖ§X±N7ÑÝÛ\x0014
Ïç.Ôl\x000fà\x001eG_Z\x0000öVöÏ¶}ÛíYÏå.üúç\x0019Ï½]¬ý"á®¬\x0012W»¶».öì\x000c`ÿ\x0000t\x001eàtÉäõö«®é\x001clò2¢(Éf8\x0000{\x0006T}'N{Ïµ½«\ä7bRÙ\x001d\x000eqÓ¦Óln-RÖk;y-ãÆÈ0U}01D\x001aÌ2Mo{m4Q\x000cÈñÊ¬©Æy ñøÕ]#]±ÕÞt¶#$2:l\x0012+\x0016U8Þ\x0000?tñï@«ch¶d[XE±\x00180ÆÂ=1ÒËO³ÓÑÊÖ\x001btc\x0011 \|T\x0017\x0010ÚÂÓ\M\x001c1/WøÏ¿Ô\x001e[\x0008dÒ\x001d.yÒ!,X\x0010nùÆ\x0000\x0007ñÅ\x0000iM\x0014sÄÑM\x001aÉ\x001b¬\x0001\x000c=\x0008=j\x000b=:ÊÀ0²´Ü?Þò£\x000b®*hæVG"9¶8VÎÖÆp}\x000e\x0008üé-î!¹f·&¾ëÆÁý\x0008âÓHÓRóíiaj·9Ï"PÙõÎ:ûÕ4I\x00125Wì\x0000\x0005°03ëÇ\x0015ªj	m=´\x0002þÎÕÞ@_ÎC\x0014ôU'N\x0006{uç¥]îÞÛ\x001e}ÄQeY÷\x000bÂýãÏa}(\x0010}Ûj/ÙâÛ\x001cT\x001b\x0007Êç$°ô9'¼y30¢ùª¥\x0003àd\x0002A#>\x000fÊ£´¾´¾Fk;¨.UN\x0018Å p\x000f¾
2ßSÓîçhm¯­§A%#Y\x001dx\x00074\x000ctm1geÓí\x0004²\x001dÌþJäç==@?Qµöx|É\x001fÉ|ª\x0016FÚ2àg\x0000ãù¯&­¦ÂÁeÔ-#bÅ\x0000i\x0012ÀàOPxÅYh­áig"FYÝ\x0000{@öºVeæ\x001bK\x001bh<ÁòâUÜ=\x000e\x0007Oj-4½>Ä¹³²¶·2\x000c10¹\x001e\x0003¥:
BÊâÞK.íå<ï$\x000c«\x000e\x0007\x0015+O\x0012F<¨\x0011È
Å\x0018\x0000\x0000÷É#\x0014\x000c­m£é¶¯¾ÛO´÷n\x0005!PAä\x00020=ÏæjÔpÅ\x0010u4@ìY¨\x001bêO©5\Ý¬77~}ÝªÁ
#\x0010[
\x0016sä\x0000qÇ\x0003¡©­îíî¼Ï³\E7Û_ËpÛ[Ðã¡ö Ce±µÐZKm\x000bÛ\x0000\x0014BÑ\x000e\x001d8íMN²·µ{Xm Ýóº%\x0005lõÈÆ
E®]Kc¢_]@@\x0018YÔ28ªöÖèdXÓ!\x0005\x001b¦wqõ 
\x000b=:ÊÀ0²´Ü?Þò£\x000b®)°iZ}µÓ\Áem\x0014íÈ(c¼Þ°5VöÛþ\x0012?&vO²[@ðü£äfÝ8ç ë]%Õåµ~eÝÄVñò¸QL\x0000L°]:Õ¢V.Ï+Ë$`³3\x0016$þxú\x0001Wj(fâ\x0015	\x0012XØe]\x0018\x0010G±\x0015-\x0003
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢9¤¹³ÓüM©>©,vï:Çöyn\x001c*´A@*¤ñÛ\x001fí\x0003Pùúe¾¹e{'\x0006löXÊë²(ßq/\x0014ÛÆ@8®¤Ã\x0004\x0002=éH\x000c0@ úÐ#¡¸·ñ5ÖÍ¶doSû¹f
ûÙ{tØ	\x001c\x0012;âí6Õt\x000bÛ\x0008PD·pñÏÈÄç×'¯¯zëÀÀÀ¥ ,rZâíÔõÍ¸@Ú)'ÜæAÀUu»ÐÛÁÙè±yÍl\x0014Ymýùo\x001f'\çØ÷Î9®§V·{½"öÚ"\x0004@ñ®zd©\x0003ùÓìá0Ú[£æG\x0012¡#Ø\x000cÐ\x0007-zn¬õ­6}BæÖÜ\x0011\x001aÜÝD^59\x0002\x001dB±\x0018äõ\x0000ï^î\x0004o\x000eë\x0017Q\ÛÜÃ-ÜR\x0013
±%*é½,C\x0002\x0006I\x001c\x0012\x001b­w$\x0006\x0018 \x0010}hÇ\x0018í@Xäu\x000bÆ¿k\x0015íV&Ø¥µÔÑù°7¶ð\x0018:b\x0000äõÁ\x0003½S½¶o\x000cëRGy\x0015Ä\x00171dÛÀb6äV+;ã'8È5Üí]»p6ã\x0018¥é@XÄÔ- WÐ<R?.i"]©ä¹ÛÇn\x0007\x001eÕ Ýé\x0016Ú<v:BÂ\\ÛÌ\x0003Jóî\x0007vÞ­\x0008Ï\x0018ô®º´\x0013\x000cúÐ\x0007'u4^'Ô$¸¾±²\x0012¤~D°
\x0018\\x0015VÞ a²Hÿ\x0000h\x001f¥Xmí­-ôë¬[Û2Ëpö¯-
AdÃ7\x001c©Ü\x000e\x000f\x0000í\x000c0@#ÞPÀ\x0001\x0007± \x000cM\x0013Sû\x001eÙçH-D³´\x0011\x0008\x0014åmÇæAèØ'sï[µVâÎ+YäÜZÙÆ\x0001ã%Jäü\x0013ùÕª\x0006yüwZm«\x001b(%7?Ø-àÃÀÞrçyÎA\x001cå° ï[½­¿	¹h¢óìR8\x0001#ù­\õnWÏ5Ñ\x0000\x0001$\x0001ÖH$té@¬pWRÛ/<MjZ!t·\x0017\x000eaãxC&Cc®9\x001côé[zäö¾#Ñ®.Þ(`Ùp­,¤*B\x0010	<g¥tX\x0019Î9õ zh\x000b\x001cµ¥k¥Ç¬ZÞM\x001cW?kHá'\x000f(v/VÎqÀ<U¡òb³ð­Ö \x0000Óá³\x0019w?$rMÝºn\x0000\x0001=²+²ÀÎqÏ­\x001dh\x0003¿ÖûÄ\x0012I¡²ÉxúmÂyðUäØ7t,3Ï¦Fj\x00087na\x001e§¦Ã$rEå[ÇbÆx$R\x000f#Í%H $zä×t\x0000Q\x0000\x0003Òh\x00078\x0019õ ,qÚäÖÖ\x0017z¤Ñ]ÙK,Á\x001a}:ö/õÛT\x0000#<\x00138áïNk°Æ¬T© \x0012§¨¥ \x0012	\x0003#¥:<öÝðüún¡§Û\H]n-¥³g¸iIåó>rI\x0005X\x000ctÆ1ÛÔÌVZÞ6£<!\x0012\x0019ãâP\x0011\x0019ö¦3ÆpH\x0019®h'8\x0019õ¥ \x001e \x001a\x0002ÀFF
qÖqÈÚ\x001e\x001c*þFpn\x0019pÐ\x000c4+`üÌ\x0007_ùdk²¢\x0016·¨Ç>¯E%Í£\x0006?±¬\x0019R£\x0001Û''<6Bð9Ï\x0006´õ\x0011q.¶VÑÚ_EDÀó¼²`çëê6Û°7c\x0019§P+\x001c$F\x001bÍ7O°SÓa9"ò­ã±c<\x0012)\x0007æ¤\x0010C\x0012=rk^+ë]/ÄZ¿öñÛ	ÄRÄÒ¾Ñ 	´ÏR\x0008í¢º- \x001càgÖqt ,q\x001azÇz<:f(÷×yr¯ )\x0019SÜ\x001fÈÐ×
µ¦ªnWQ³³ºkO(Å{\x00101K\x0018b@\x0007 ç$ä\x0002xÆGJê)¥AÆ@8äP\x0016)h³ý§F²ìÂ×|*D ` Ç\x0000\x000fOJÄÓ®tÝ=õHui`òk\x001eQrÃ3FIÙ·?yvà\x0000:`fºªiPH$\x000e:P\x0007
o\x001c\x0003Â¶¹¶ijR4ð²¬"GÆå<áNÂG¢Ö´·VZ4ÆÒææh\x000b\x0019å*BQÖ#[n\x0007^3ï]-5T/@\x0007Ò±ÄZY[ÇðºR°¨f·yË`\x0002_$Èî01è\x0000\x0015­®Iokâ=\x001aâíâ

ÒÊB¨$!\x0000Æx8úWGH@=@4\x0005Úü.ÿ\x0000ëÿ\x0000#\Ý§ÜðIÿ\x0000¦'ÿ\x0000IuÔP3Ñ®-ínô»+;«=N\x0005wH×ÉÙuj0yon6ªÖºU'J¼KBEË@â"\x000e\x0008}§\x001f®*Ð\x0000\x0012@\x0019=iÔ\x0008á"0Þiº}z\x000cÉ\x0017o\x001d\x0019àH<4 \x0018ë[\x001adðx«YG9æ&6 3\x0010ÉQÔ\x000eqèk¡Ú\x0001Î\x0006}ip3së@XÇñL3ÏáëÈíÕÝRÈÈ\x0018\x0017\\x0002	Êä`\x0011ã"² \x001dCRÒ¼[LKvß\x001aÚY0uM¤2æ\x001d@ç\x001eØSBI\x0000sÖ8©åëþÆ8öYºK/\x0013ê\x0012\_XÙ	R?"KØK\x0006.
«oP0Ù$´\x000fÓ®¦\x0018`G½\x0001cÞÚÒßN¹\x001aÅ½³,·\x000fjòÙàØä\x0016L3qÈÊÀàð\x0008®Ã7\x0006çFCo\x0004\x001f;[Dÿ\x00001ùÐ\x001eÍÔ}kY0 AìiÔ\x0001ÎßËoiâ.µ"±[}m¼ò#MÄ¸ÉèÅvà÷\x0000XºÂÛÞÙkÓYdé×\x0006Ù\x001aD8I%ópì½º\x0015\x0004	\x001dñ]Ù\x0001\x0008\x0004\x001fZ\x0000ÀÀ ,bj\x0016ÐA«è\x001eL)\x001f4.ÅÆÔò\íã·\x0003jLÞ\x000f\x0015k0HñG<ÒDÐÆÄ\x0006p"\x0019*:ÁÎ=
tt\x0019Î9õ \x000ecÆâ\x0013i¥ý¦\x0016\x0011¨DdERÄ¨V'\x001cu\x001dÆh¿¼±Ôu\x001d!t`¹ºà1x\x0008a\x00148!÷\x0011Â8Áêqé]E4(\x0019À\x0003<\x0000âRqgu¬G{¦ÙÉ5Äé}l]æýÌ\x001f0o]¼\x0000\x0007\x0004\x0011×ªù0éPÚ7ö½¬Wk§¬!u\x000brÍ\x0010,T`A\x0019Á\x0000Ù^Ú\x0004@ã¥\x0005AÆ@8äP\x0007#owo\x001e©¥ê\x001a	anúz­·\x0014\x0012dQ\x0005%vã§
EOlÐÜO¯]iüØË\x0000\x001bÔþîI}ì½ºl\x0004	\x001dñ]A\x0001\x0008\x0004\x001fZ\x0000ÀÀ ,q\x001dµ]cJDV\x001d\x000eßË$}ÒIÉ\x001eøã>çÖ¶¼?\x0012Cq¬Ç\x001aA~HP0\x0006cÔøÖÕ\x0014\x0001Êx¡­#ñ\x00165üeàÎÄÜ¨p¸f\x0018è\x000e\x000e{p{T«qmâË\x0019ô©"ÊE»\x0012\x0019v\x001clRÃwr\x0006x\x0000ÖåÓkmÚmòmÒe|rÁqß¡­\x0015P£\x0000\x0000=¨\x0003Ó.´o\x000eÉa©Vñ·\x000b»i\x00083K)<½X± ©\x0000ðF)ö\x0012¶©ØI¬Ì°\x0019t¸áifp\x0017ÍF%±ïõç\x0006ºÍ p2;Ò\x0008Á\x0000z\x0002Ç\x0011uu\x001dï<S<[¼§¹;Kq¹|¸G±\x001cèEvpA\x0015´K\x0014\x0011¤Q \x0001U\x0000\x0000\x0001ÓRÑ@\x001cÔsÙiÞ!Õ%Õ&ÞYÊ}[
­\x0010ARN8mÙ\x0003Ô\x001eâ²R(çÐ¼Hº<,!{¥ec#zm¾\x0017C
Ø\x0003\x0019\x0004c\x0019®äÃ\x0004\x0002=éÔ\x0005>	 Ô5-)`ÕtÉ\x0006/\x001aZY0e@¤2±ó\x000eÅ ã×\x001eý1ö,¬Þ4Õ<û¶%`²\x000c±±Ô\x000eW\x0007§"º° \x0012@\x001cõ¥ÀÎqÏ­\x0000p±\x0018o4Ý>Â=OMHäÊ·ÅðH¤\x001eGJA\x000cHõÉ­Ï\x000eÛÄ/µ¹Â)¯ÙKíç\x0001\x0013\x0003>'ó5»´\x0003\x000cúÓ¨\x000b\x001c\x0002XÛ1 E\x001esÆîØä±Fs×8à\x001fL
èocH¼S¢¬H¨<ùF>P\x0013\x0003éÕ½E\x0001cÞ+Ï
è0Ì7Äú³îR8`$ààã[\x001aÄ\x0012lÉö\x0011²î]&áQå%&Î}8ôÍt´P\x00168H7na\x001e§¦Ã$rEå[ÇbÆx$R\x000f#Í%H $zäÖÝ\x001175y4iR\x001buV#%A\x000cOÓ$\x000fÈVöÐ\x000ep3ëN ,bxËþE=Oþ¸ÏÖÝí¼Sms5Å­¤\x001ff)\x0004÷q\x0017$ÜK\x0000C¨V+·Ô\x0002\x0007¿WH@a\x0001\x0007Ö8©-÷ø{Z¹´;Ätmµ»F©rc»;rH8$\x001aÐºÕ¬oõÝ\x000e+\x001bîq4Í\x0013\x0006\x000bû0	\x001d	çÏ\x0006º^\x0000\x0007@\x0005\x0001c\x0003Á¶ñE¡£Ç\x001ai\x001c±ó\x0018d \x0003ð\x0015'£¶kKG¸¼\x0016M
ÊÉ\x0014ÒF\x001d\x0003@Ý1yÈç\x001cæ·)\x0008\x0004`ò(\x0003º¸ûI¼»7·QV¸¸·¼\x0017	·;Ê\x0006\x0005¶¶ÍÜòõ b­¥ÕÕN£q«éÓÇijâskjB´lF\x0015{\x000cäp½zàs]x\x0000\x000c\x000e\x0005 \x0001F\x0000\x0000{P\x0007\x0019¡ÀÚf­m&¦Ç
Ê\x0018´Õ÷\x000b\±>Qôb6ãÙvçmÙjVº\zÅ­äÑÅsö¹¤\x0012pòùbõlç\x001c\x0003È5ÕR`g8çÖ±ÅZ_x4X^âÇOQ¥Äâîå\x0001wÈ\x0000¢\x0012@\x0018À'¯QÅ2ÝøwO*Ù_í¥Ûòlãí\x0007ø{};WnT\x001cd\x0003E:±Èê1nü\ÜéñP2IÙ.1ïP]ÜC4:
Õ­Í§Ø`\x0005eÓÎ\x0019¶.Âà0ÁÆáx$g¨®Ö\x0014\x0001\x0006(\x000b\x001cþ©>±{{\x0016¡iw¾4SinR6a\x000eíì\x00198=À+NñzHÚ}«¾DWH÷\x001bã2 \x0003Ë(#rÚHÏlö­ð\x0002\x0000\x0000\x001e´\x0001Ëiæ;ÿ\x0000\x0011Cs\x001e©aw$0:H,í\x000cF\x0003>ö\x0019\x0004d\x0003þÕMáy­]N×|Kv··\x000ebÈ\x000e\x0010¾AÇ\r9éÈ®\x0000£\x0000\x0000=©p3së@\x0018¾&Ù­-^âðY\x0018nVH¦0è\x001c\x0002\x0006ìñ\x0013ÎG8ç4\x001b»ûTw¿%£\x0005´Z.Øî	PK\x000eO#¡9<µ¶FF\x000f"008\x0014\x0001ÉkÒ\i:¥ÇØ\x0017Öb\x0010ÄFHKBô\x0003cgþÙ×Mek\x001d\x0016°\x000cE
\x0004P}\x0000ÅSk\x000bf\x001b«cû=®ã\x0004H­äcs\x001cãX\x0001â&µ(\x0003IÅÖ±\x001dýîg$×\x00123¥õ±w#÷0|Á½vð\x0000\x001c\x0010G^©u
­¾\x0014MEÌ6ñÊ|×®ÑµvRIP2¹ô \x0013íÊA qÒ³¯,¦\ÓnÓon+äó\x000b\x000eý
\x0000b_^ÛÜki{¤$wÍmg9º0|Ë"í\x0005#,\x0001\x0005\x000e\x0007<g«my\x0015Åÿ\x0000öê\x0016\x0017\x000c&ùa³bÂ¦'ùIÜHôÁÆ}8®ÙT(À\x0000\x000fj\x0002\x00003É ,s:\x001d³ZëÏ$\x0008ïq{p²åAÜ \x000f§|zj²¼qØøVîÿ\x0000&Æ;e/#¤rÓc?·ß\x0019<\x0002Â»\x001aN´\x0005F÷ÈÕµ\x001b÷Ò\x0019&WÓ¦âX1Èç\x001eZäpX|Ý2@8ïmÆ³cs£èÖÐÎ¯r×\x0016áV\x0005âÃ¦w÷pF9îk°P\x0014`\x0000\x0000ô \x0000	 uë@Xâ|B2|Z\x000eqöKnð:êÒk;9íôøöBîÅ\x0012&\x0006ÕÀ8ÀÀÆE\¢±âù\x0015õOúöÿ\x0000A5§\x000f
Ç5³[_BnA]ß;e¸ÀÚ[\x0007ÕÖÑ@XáüCÿ\x00003wýz[ìõw[w¶ñMµÌ×\x0016¶}¤\x0013ÝÄ^4q,\x0001\x000e¡X®ÞOP\x0008\x001eý]!\x0001\x0008\x0004\x001fZ\x0000ÁðÌ(\x000e¡s
Ü7\x0011\O»ý\x001e\x0003\x0014[ÂÅrÇvp2Aê
oÒt¥ aE\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0006dúæ\x0005ä;½ÔXÝ\x000cp¼2\x0001Î\x0014\x0012F\x0008äqÍO\x0006¥isf÷Q\'\x001e|Æc·Ë#¨`yR;+µ½K\x000f\x0016kÒMo;E!\x0019¢¤ÚDcå!rG\ç\x0018õí®loµ;\x001drâ\x000by!\x0017o		@GFAf ä\x0002ØÀ\x000c:\x0001\x0004oÚkv\x0017¤0ÊâI\x0014¼bH^?0\x000e¥w\x0001»ðÍ2-LNÑ\3¬\x0008Ï+\x0008ª\x0005ê	Æ2=:ûV]ºFúËuÖ·1_;\x0013[$)\x001b\x0000GÌ|µÎrF\x0014¿:ÒÒtð-å¹A;EuÊÄ³9\x001cu$ä}h\x0002úøIm­ö½±¸ù$xÝQýÃ\x001f`I«VZ­óÊ;"\x0000ºK\x0013ÆÀ\x001e\x000c\x0001ÁÁç§\x0015y`ÇOðä	nåm®`fP¤ùacnO¦\x000e94ºÅÞµ¨¬JÈ'Ò¼©
\x001c³ñQqÖ/C¯i³Í\x001cqÜ\x001fÞ¶Èä1¸FôW#k\x001f¡9ªãÄPÿ\x0000ÂFúYm¢5!ü>ùr¸<}Þ\x0001ÝÓ¯5\x0014Mugk§M>¸$ÌhöâÖ4HvsæyAv©^\x0008c\x000cV¬¬ÖÞ/ó¤c
Å@3®ñ#\x0012	\x0000ã\x0007'\x0003ò 
©¦\x0008^Yc\x0001fv8
\x0007RMsÚ¾½i5qÛ\K\x001cÒÜAåïâó\x0007ÚX
Üg8Ï\x001eÕÄßhÒC\x000cBw\x000f\x001c& 	\x0002¸b¼ñÈ\x0004sÅfk:êvÖðZØ_K"ÜÁ#\x0017µ<$ROÌ\x00078ãðIè3@\x001a×ZÞiq$\x0013LÛâ\x0000Ë²'q\x0010=\x000b\x0004/\x001còG\x001cÕøäIcY#etp\x0019YNA\x0007A®J5¸Òîu\x0018çUÌ¹x¾Çj$ÁÎG>[\x0010Ã¡\x000c{\x000cqÓ¢Ñ­\x0005kl¾pXÐ\x0000&*]{í;xã§\x001e\x0001Dx\x001føHßK1M\x001aþD|¹\\x001e>ï\x0000îé×\x001f\x0010é	;é\x0008c#jí8 c>ÝO\x0018\x001cÕy[x¿Î)7\x0016i\x0002:DÎ»ÄH$\x0003\x0018\x001c\x000fÊªZBÃÁoöH%KÕB\x0017ÊÜà\x0019X)êv@ïÇZ\x0000Ù³Õ­/g0Âò	By%â%zd\x0006\x0003#8éê=j´~'Ò%Tt»&&`¾oþZ±à\x0006laO±"³tàÒøÒhÛS¹mæ
qw\x0011A¸à
«=¹\x0006\x0005±ü5{Ak(Ú?îJ\x001dûON¹É 
ÛíbËOÊ¸üÍBÄò\x0015NPp8<dúö\x000cÑB×;å14i\x00124"\x001cá($ô'Ã5®\x0008ãÔ<øäÔìîÌ\x001b\x0012âÚ\x00034n\x00018FP\x0018d\x0012O uàÒi1^K¯C}lÑÜ\x001d-\x0011Ø)
\x001cÈK.zgHí@\x0017á%ÒL~`º-\x0018ûì±9\x0011sòÀ±Vï5+[#\x0010Fß.|´\x001aG|uÂ¨$ëõ
©áï\x0012F-äY.f»u]t\x0000ß<c\x001dj+{]BÎöG½·¬\x0012Ý¤µexÜ\x0012He(Ä\x0003Èî¼ö 
[í~Ö
\x0012çQ·c88
#bD\x0013µ\x0019^îÆ;Õ)¼Yniî\\x001f´Ê© 6Ò ©$¯Ëó\x001c9çÒ\x001d\x001a&ºðBY¯¢\x0014^"#HÂ=¡ª\x0003Àù<\x000e)s\x0019ô­\x0016â(.vY]ÆÓo e\x00026\x0004#q\x0000°\x0019\x0000þ\x0001¬uÝ;íImç9¸uF\x0011\x0008\¸\x000c8$c zÓ<â5ý29\x001eäå¼[Ñ³3ãh9ã\x0004Ô\x001a\lÞ Õ.R$SÅo±äF]Ã
È\x0018#<£½`Û[Ík£\x001d&îmdÌ\x0015¡kk{XÚ9A8ÊÈbÆ\x00089$¶FNy \x000eê²dñ\x0006\x001c²#Ü±?$'1#z3´\x001f©â´!Ë¶HC±ØC6	àc'¶kÒîF Å¤Üi·-w\x0014f\x0013\x000cvìÑÌzd8\x001bpÙÉ$dæ.hú6\x0017Òî/®\x000ee0\x0019²ï#\x0015è\x0000Éc×W\x0017\Ó­ÅÃ\ã¶Ç%VG=2¤\x0006\x0019íÇ=«\x0016w°é\x001b¸+y
Z@cA\x0010i¢,ª\x0003lelã\x0004\x001c\x000c~µ3ZCy\x001dõÔÿ\x0000Ûw£sD±3\x0000û"ª«eO=9ÉÀ4\x0001ÐØêV·í*Û³ù\x0011½$£eÈÈ$0\x0007\x0007\x001cv¢÷Q¶°1­Ã¶ùI\x0008ÆÒ;c®\x0015A$\x000eüw¬Ý\x0006{É/.§¹º°UC\x0014×Væ)7sû«¸\x000c\x0003\x000e¸æâ\x0005Oi<§PHÃùwVqòó«(
p:©\x001cu\x0014\x0001mµ«\x0001g\x0005Ð¼W\x0004¬B8ÝÈÎ@P\x000bd`äcsBkV\x000fl.\x0016cå¹Ìl
ÈH\x0001X\x0011ä u\x001eµ×·Øôó{%ä\x00103Ê&¸Ó2\x000fî&\x0018¦áp¼\x001c\x000e3NÓtã¨Yë¶ÓÇw\x001cwS\x000f.K¤;ÈòÐ+Ädw\x0018\x0000àÐ\x0007G%Ü1]Clòbi\x0017\x0004ä.2sÐc#¯­RÄ\x001adÎ;+#ùi/â'lã\x0002B6GcÍdYZê:½£s{\x0003Z^Ëfl¢Y\x0006Ü\x001d§{O\x0005Ïâ\x0010\x001aK«·xu´x´Ëï$[ù\x000fnÂ8[\x0018Ý¿\x001bv©ä\x0010yÀÇ4\x0001¹=ÔPê$¼uÛlÒ}\x0005A\x0019|ã9\x0019Æ3ß¥A\x001f4©mÄñÜ»ÄJª²Ã!ÞÍÑWåù^\x0006HÁÏJ©¨[LÚó2E+¨Ò¦Ì
pX²àgÔàu¦5¼Iá}\x001d.¡¿Àö¨|Ëw\x0011ãqQH#\x0007¯"6ìoíµ\x0008ZKY\x000b*9!FV\x001dA\x0004\x0002\x000f±\x0015\x0005ö³aar÷32Ï"ïHÖ6vap\x00009ú\x000eqÏJÃÓÞÍ
ÏÚYbYqo4ÐùRH\x0007,¸\x0018ÁÈÎ\x0006qR¼\x0012\x001f\x0017C?ÞRØºyN7\x0019\x0014ã>¸\x0006$¹×tëi^9f}Ñ¨ivBî"\x0004do \x001dsÎ*¾¡p_Zðùf0M$§(ß$å1\x001d8#¡\x0015q¥Üê1Ï>«\x0007s$ñ}Õ&I\x001f-aÐ=8éj=9ín<3\x001cQÜ­Ú]æ\3F\x000cMÅx\x001c\x000cqÐ
\x0000Ó]wNiÖ\x00113å¥òUÌ.#/m\x000f¤ç½j°ñ\x0014?ð¾bhH"O¾\®\x000f\x001fwwtëÍaI%ýÝ"èê³j\x001fi¦·\x0016Å 	T\x0010¿0\x0000pC1ïÓ5¹+5·üé"Ãqf#¤Lë¼HÄ@8áÉÀü¨\x0002·«¬>\x00162AyqpóK±fXYI\x001ehV\x0019UùxÊÁ8ã&´VÒtËx`F\x0014ÄfXÄ\x0012»ªgaÀg<µd}ëþ\x0010O³ýo?í[¼½v>Õ»8Æq~ÕÝpG\x0016¡çÇ&§iv`Ø\x0016Ð\x0019£p	Â2Ã y\x0003¯\x0006:\x0008exc'WE\x000c½\x0018\x001eA\x001fcA«Z^@/¤x'a
+@þZÊ	\x0004,ÚsÓ\x0019ê8ëÑÒ¤¹Kµö1\x0015ÓD¦D\x001cmlr=¾ÈÉ%ýÝ"èê³j\x001fi¦·\x0016Å 	T\x0010¿0\x0000pC1ïÓ4\x0001ÝW+¦6£uáU¶FKÇYfÞ7G\x0018·\x0011»9ùF\x0000ç­uUáXeA9£xÜK1*êTàÊä\x001c\x001fPA 	®5Ý:Öi#w\x001eS\x0005Ä.É\x0019=ÀÚ:÷<Sïu«\x000b\x001bµ´r.]C¬)\x001b;°$\x0002OCÓÒ¹^[Û«]b\x000bíF¹>tvö[â&La[pS»#ë\x0006q[Vö¯ÿ\x0000	Xºh\(ÓR!!Sï$®}x\x0007\x001dh\x0002ô:­Ú|Ép>Í\x001eíîÀ©Lu\x0004\x0011G¡\x0014Ë}jÊá¥XÞ`ñÇæÞDbº«(-Û =G¨¬É\x0005õ¿-2	Þð<{cÜJ3(?x¸R1ÏJM
/í&µ;\x0016Þ`×\x0017q\x0014\x001bN\x0000Ú¸ééÛh\x0002öâ+mI.Ù÷B-ä,ñº Dld³\x0000\x0001Æ	\x0019Èü*Õ®¹aw4QE+\x0013\x0017\x000b¢Ê\x0007?)`\x0003qÏ\x0004ñÍ`yåÓ55måky%ÈãeI£óC\x000f§pÈÆ{CWµ\x000bÖÖÖÖÒèJ·\x0011LÏ5»Æ \x0008ÁË\x000c\x0013@\x0000çÓ\x0000¶þ#ÒY£7%\x0007)1H"\x000e\x000eâ\x0006\x0014d\x001eI\x0003\x001djÂ{àbÍ.|·òØG&\x0006N×ÆÖãÐ²a±<=â8þÏ æk·TØs&àB;ä\x0001u©®­$\x0016>\x001d(\x001cýâ\x0012ÁTþíDl	>tæ¹£kw\x000e/äkÓ$vó0È¡\x0004\x0018PJç\x0003 \x0003ó×¯\x0014Ýäé\x000c2¸E/\x0018\x0017Ì\x0003©]Ànü3XSiw:G`\x0017\x0012ËæÄ\x001c\x0005ó\x0015DmÆF\x0008;H\x0004äz÷©­Ôj7Ö[®µ¹\x0012ùØÙ!HØ\x0002>cå®s0¤õüh\x0003¥XàåÖ8Ð\x0016gc u$úU\x001bMnÂòt\x0019\I"I\x000bÇæ\x0001Ô®à7~\x0019¨üKg=þsom3le\k#9\x0000xç+6ÝF£eºë[Á/­\x0014#æ>Zç9#
O_Æ-é"PÕîì9Êu\x0011o"äl\x000cwd
¼ä\x000cã<c­?ÄI\x001c\x001ayÝ7j\x0016êÛ[\x0019\x0005ÆAõ\x001eÕ\x0015\x001b_\x0013êÑË\x0014Ãío\x0014¸0XÀ9`00AàÛÖ¦ñ\x001c2Í\x00057¥ý»°E'
\x001cdt\x0003Ö%¸×tëY¤iÜyL\x0016G\x0010»$dög\x0003hëÜñZÄjòÞÝZë\x0010\j5Ïïc·´ß\x00114xÂ¶à§vG'-× \x000câ»8?ÔG\x000eÑÖ(Å­XK~öQÌÏq\x001btX g\x0001èO\x0007S!×´Ùæ8î\x000fï[dr\x0018ÜG#z+µÐÕ\x001b[\x001b¬|In¨ÐKuq0Ü\x0015\x0007tj\x0003\x0003éãÒ³â®­-té§×\x0004\x001eÜZÆ\x000eÒ\x000e|Ï(.Õ+Á\x000cs\x0000Ü>!Ó|ÙbI¤HYD	$18;©Ç õëÚ¦YÓ Óâ¾î1i+*¤Ã$ôéÓúw¬\x001d\x0006ý4ù5Öä	5\x0019Ù%\x0007IÎ0vA\x0018ïr1ÞX]6&{iPÜk	t ÆL1\x0001ù°Hè\x000b\x001eÀµ\x0001sqõÝ="FPgb±GäIæ9\x001dpw\x0010=qßT²¸µæ;\x0011BH¸(cÇ'p8+Ç¨¬ûÒÖ\x001e#\x001a¶òËk%¨Í3#DÁË\x001c¨\x0004á\x001cê3Y×¶SêßÚwvöl°Ê-ÂÅ2lk¯*BÌJ·# í\x0019ëÂ-júõ¤ÖQÇmq,sKq\x0007^7Ì\x001ergi`7qã<{Vì7PÍq<\x0011¾émÈ\x0012.\x0008ÚHÈç¿\x001eÏk:êvÖðZØ_K"ÜÁ#\x0017µ<$ROÌ\x00078ãðIè3V\x0016vÒõíJK.\x001e\x001b±\x0014´04e]¬§h8<\x0003Î:ûP\x0006½Vé§ýÓHÑ.\x00113*T(\x0019' ô\x001d³Òª_xÒ
&òî\x0003$[\x001eSA e}¥eÆT\x001fR\x0000÷¬8î­cÒu\x000b	¶A5Ø ¤É)*áFw\x000cddvl×½êú\x000e©\x0015¥½À/\x0004ÆfÇæ\x0012m
q\x0005\x0000\x0016Ú´\x0017Í§H2ÀÓ3/Ð2O¸²9\x0004`\x001cc]MY\x0011®\x0018ËDÚ8Û¸g\x0000ªß$c½eÂÒ^]xnX`¸	nÒ$Þd\x000e3äÎ@ã'\x0019é\x0001¤Ón¿³45Òîtû©.ãVÄìÉ9'ïoÆÜ6rI#\x00199 
»íZÇNxVîàFÓå
¤ïÆ2\x0006\x0007'ÔöÍ>ÇQµÔ\x0016O³HÌbm²+##!ë¬\x0001\x001faÛés[Þøb9£25¬¨ò(%Q¶"õüÀÏZº\Xk\x001aÅüèél¶¹o
·Í'\x001e¤\x000cqî(\x0003n±ßÄRK4fä³@å&+\x0013²ÄAÁÜ@ÂÉ qZpJ&9B²\x0007PÛ\`àÆ¹¸leO\x000fx?³È%¹íÕ\x0002\x001dÒn\x0004)\x0003¾@\x0018ÇZ\x0000×Z°æ8"³I-ü¶\x0011Éµñµ¸ô'¡¦Ükºu¬ÒG4î<¦\x000b#]2{3´uîxª7V\x000b\x001f\x000eÅ\x0014\x000e~Ïq	`ªv¢6\x0004@:sYZ¼··VºÄ\x0017\x0007TkæÇoi\x0005¿î<a[xS»#ë\x0006q@\x001dKN¿ÛIoö§\x0012\x001bvìû>V\x0001ß»\x001dFq÷éPÛkÚuÝÌvð\\x0016ywyDÆá$Û÷¶±\x0018l{\x0013UR	á*µÊÊ\x001ak!r\x0001¼Ä \x0013Ó8Ï\x001dx5¤­/l­tÓ©ý{	­/ ;mÓ\x0004²c±À\x0003s\x0002
\x0000usM\x001c\x0010¼³:Ç\x0012\x0002Ììp\x0014\x000e¤çµ}zÒk(ã¶¸9¥¸Ëß\x001bÅæ\x000f93´°\x001b¸Îq=ªÿ\x0000-%¾Ñ¤\x0018î\x001e9\x000cL@\x0012\x0005pÅyã\x0008çÌÖu\x0005Ôí­àµ°¾E¹F/k"y H¤\x000eqÇ\x0019àÐf5îu»\x000b[ Wib\x0001¥\x0011Bòy`ôÜT\x0010¼sÎ8æ[È^ëMòï¶­Ë1QC-À\x0008N7`ã\x001dsVeÐÑ¤¿îÖë|RO\x001c[¼¢esÊ\x0003\x000bµV³Ó®­î4\x001dÖÆ5[©4\x0019X\x0015ÖBªHàcp\x001f^\x0005\x0000hi"PÕîì9Êu\x0011o"äl\x000cwd
¼ä\x000cã<c­j^^Acnf¸r\x0007
Xz\x0000\x0000$aY6\x000cm|O«G,S\x000fµ¼RBâ&(Ác\x0000åÀÁ\x0004`ÛÖ¬xk¸,á64jgQ<ÅæÉ\x001c\äªó\x000e\x0000(\x0002hu\x0019`ºeu[EÝ:É\x0013£Æ¸ÎJ°\x0007\x0018\x0007\x001csS½ì\x0011[Ã;ÈV9\x0015	SÉr\x0002c#$¿sV¶²ß\k\x0011Æ/+=aâî2¦Fýæp\x0008\x0018ûÝ\x0008\x001e½\x0008§K{-Þ¥ÚGc{öî-¾Ð\x001a\x0007\x000b\x000e×RNâ\x0000#£<sÒ6¿·4ÿ\x0000¶}Î3ÍòwyOåïþîümÎxÆzñGöæöÏ³yÏæy¾Nï)ü½ÿ\x0000Ýß¹Ï\x0018Ï^+\x000eFÓQtí(çót@Z\x0007\x000cß;ÁÚ\x000eKpÝxÅ\x00124ö¤ÿ\x0000iG<¤´\x0002Ð8fùÜ>\x000eÐr[ëÆ(\x0003¡e}Rî\x0011tÒ<i\x0019h
`EØ ããÔã\x0014­c¦´Ky8¥Ýå¤ï#\x0019\x0003\x0003¯#\x0003©í«a\x000c©âm^VÄREn\x0011Ê\x0018ù\x0000ô8Èéê*%0xAìÒ\\x0008ÅÁ"1¹mPX\x000eäg ç\x0019Æh\x0003^ÓU³¼áFYw4RÆÑ8_]¬\x0001Ç¾1PÃ¯i³Í\x001cqÜ\x001fÞ¶Èä1¸FôW#k\x001f¡9¬N9¼AxÙñÏ\x000cpÚÜ!¸'3HU\x0000l\x0013ó\x0013
£Ô\x0011D×VºtÓëLÆn-cDi\x0007>g\x0017jà9ÀÅ\x0000t3kV\x0010ê\x001fayÝü§ÊH\x000fCÀ<z¾*\x0017ñ\x001eÍ\x0019¹,Ð9IDì±\x0010pw\x00100£ òH\x001cQc\x0004âMZfÂ<p\x0004r¸
ù\x0000÷Á<ýk>\x001b\x0019SÃÞ#ìò	nf»uM2n\x0004)\x0003¾@\x0018ÇZ\x0000ÖZ°æ8"³I-ü¶\x0011Éµñµ¸ô'¡¤ºÖôûK fß\x0010\x0006];è\¨!xç8æ¨]ZH,|;\x0014P9û=Ä%©ýÚØ\x0012}\x0000éÍPE¸Òîu\x0018çUIs$ñ}Õ&I|¶!B\x0018ö\x0018ã \x0006ï-íuk;P²I\x000cÑ»´Ã#\x0000¥Jí\x000409<ãâx\x001føHÛK1O\x001aþD|¹\\x001e>ï\x0000îé×¡ö_ìü='xÖÖÐM\x001bf?6HË\x0005*\x0018F\x000f¡\x0019\x0003\x001cUé[x¿Î)7\x0016i\x0002:DÎ»ÄH$\x0003\x0018\x001c\x000fÊ-[kÚmÑÉ¹Ü°i\x001cÆÁ\x0010/]ÌF\x0001\x001eç\x001cÓ­5»\x000bÉÒ\x0018eq$^1$/\x001f\x0007R»Ýøf±\x0013L»ÀÒZG\x0013%ÓJòyn6³\x000f<¾9\x0018É^9\x00189\x0019â¤·Q¨ßYnºÖæ0Kçbkd#`\x0008ù¹ÎHÂ×ñ \x000ei£\x0017gXâ@Y\x0002Ô\ö¯¯ZMe\x001cv×\x0012Ç4·\x0010y{ãx¼Áç&v\x0003w\x0019Î3Çµ_ñ%¤·Ú4Ã\x0010ÃÇ!\x0002@®\x0018¯<r\x0001\x001cñYÎ ºµ¼\x0016¶\x0017ÒÈ·0HÅídO$	\x0014ó\x0001Î8ã<\x0012z\x000cÐ\x0006Õæ­ge8i\x001cÌW\x0014O+\x0005õ!A {µmq
Ü	=¼,N2®§ ×5tÙk÷óMq¨ÛÛÝym\x0014ë0;T)V\x001e[\x00159äv;|Ö®oäiÅ¿ÒÁG­ØA ,rr\x0014\x00003×\x001dFh\x0002[½^ÊÎámæÚrü¨¢y\/÷¨$\x000fsI&µ§Ç\x0005´¿i\x000e·#0¬JÒ<©Úª	8ïÇ\x001dë=f:N»©Kum3Cyå¼SÃ\x000bË÷P)F
	\\x001cØî=óM3uµy¬®E´öb |¢Ò@C\x0016Ã"äÀãhÎ(\x0003CûoN\x0016\x0012ÞµÈKxX$ÑÆÄ\x0003)\x0019\x001dGQß4¶ÕåÂÁ\x0004Ìdu/\x001eè\x0004:$\x0000ÃÜ\x0013\î«i&©o«ÝÃe:Ãt-¡Th^m²üÎS®0@\x0019ÁÀì+{S¤Õ´i\x00122Â+,ÁIØ\x000c.9=8\x001f\P\x0003ÿ\x0000·4ÿ\x0000¶}Î3ÍòwyOåïþîümÎxÆzñTì|Kou©ßÚºJnFÇ0H26nbÙ_\x001cã8Ï\x0018Îk>FÏQt©G<¥³\x0002Ð8fùÜ>\x000eÐr[ëÆ*Æ\x001e
[^áµê«@V\x0016e`!ÁùÀ9\x0004`xõ 
\x0018¼A¦Oj÷1\3[¦ÜÊ"}§q\x0000`ãN\x000e3ø«òÜÅ\x000c°E#myÜ¤c\x0004î!K\x001f§\x0000õ¬\x0019ìneð\x0015½¬0°¹Ú\x0006òXa·&Ö+ì~\}iÓ^KYÑÍµ¥ç\x0014ÎòË-»Æ\x0010\x0001ó\x0001Üõ\x001ctõ\x0014\x0001n\x001dZÎ×HKË@ËnehþÑ"mçy\x0018 \x0001\x0011ã¶jG×,\x00128$i&\x0006rV(þÏ'øëÛ»\x0003×\x0018¬(,®á\x001bÒá{i|ÄÕ\x00046Ê¯Ú\x0018ätÁÎO\x0018æ­k\x0011\[ø;ÿ\x00006ò\x001bG¶\x0010\x0019m"YY\x00181oJ1ÚA\x001cê3Ú7l¯m¯áóme\x0012 b­Á\x0005XuR\x000f B3V«\x0017A
{w¾ýÌ-vö®\x0003\x0005UR\x0001\x001cr\x0001ùEmP0¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0002·Ôµ\x000b¢à¶F\x000bP/ô«õR\x000bØ®/.í£ÝæZ\x000f2î\x0018ü*Ï­-¬a»9Ìs]5ªMÍ¼3/@y\x0004¡Æ2y\x001cP#fË¶ÖbêKiíç²"óöÜmæ<à°*ÄpqNy¨bñ\x000c2\x0008ek;Ø¬çpÝ<`#\x0012p¤î\x00000H\x0003@Íª)HFÒHÁQ\x0001fcÐ\x0001ÔÖe´·\x0003Ga|¶óÝ\4cc\x000cd\x001c\x0002X\x0002:\x0012\x0000 
jnFqJÎ]fÝ´\x0003¬\x0004ìâ\x00136Â\x0006ü\x000e£\x0019ÆxõªW\x000ccñn¨ò\x0015Ó%"5Æ[÷ÀÉ\x0003'ÜÐ# ¢¹;Ä²KÛû+¤\x001b8Xð\x0007\x0011Pá¾ðÏ=¸<3»qy\x001d½Å¤.¬^æC\x001ac\x0018\x0004#1Ïà§¦{P2Õ\x0015mâ;[i®½Ô6\x0007ó.$E\x0008
\x00100I?#¶sÅKo­,\x0016ðÜÙ^Y5Ï\x0010\9Á;~Rv\x0002pØé@\Ö¤$\x000e§\x0015^úò
>Î[«©\x0004pÄ73\x001fåîIà\x000fS\þ¹«y¶\x0010E5í¡æßÊipÄL\x001f+\x001c\x001c\x0002yÇJ\x0004u4VeÖ¬°Þµ¤\x0016·7\x0008I\x0016\x0000¿"ã%\x000c\x001c\x0000sÇJ³cy\x000e¡j·\x0010\x0016ØIR\x001dJ²°8 Ð\x0008 eA8\x0007K\¬ð]]jþ$·²"¸ÚÚ5w$\x0005ÈpNG9\x0000{â´µ;¨àtÈVîK¢!V×o8- /^	=zf\x001b\x0014V=®©§Ûi3H|ËHl\x0007,s¾"\x00008<Ä0A9Ï\x0004æ¢ÄqÀ-ÍÖ¨[-Ã¢DÒF¸bÄ\x00011Û×8l\x001e;(\x0019»MÈÎ23éYwºÐ²iÚM>øÛÛÿ\x0000¬¸T]1Ø,\x0018:\x000fJÎ|o\x0001\x001cìÙ0í¢P\x0006í\x0015ÉK®½­®tûKéà¸»hÙ¤evo@P\x0012ùÎW#¶;çÕÔµ\x0000`K4óíp\x0011[ób\`±$íR	Æs×¦h\x0015Í+;H¹·ÓÉ¶X~ÊD/\x000cÀ8<ðAÎH9ÎMhÐ0¤\x0004\x0010\x00089\x0006±GíÞ'¸Öîk\x0018Ø»\x0014ÇpH\x0019ÜÀ`ò\x0001\x0015SDÕ#´Ð4kTk©m\x0011Ö\x0018@Ý´\x0000\x000b\x0012Ä\x00002@É#=³@ÄÄvvú}ÝÕÂO	³dYáu\x001ed{
p\x000e\x00089ÎA=ý1RÛëQË{\x0005´¶v­r\x0018ÀÓ \x0002L\x000cÁ$\x001cs\x0000Ð3Zçô½fêó[Ô-%±¹H¡\x0015\x0019\x0001\x0018(\x000fÌC\x0012rz`\x001e£8í«¨_Ã§[yóï+¹QU\x0014³;1À\x0000\x000e¤\x0000µI¹xäsÓµ>ª\x0010]YÍksgpm¤Ru\:ARTã##9ç¥fYýÏ\x0004ÿ\x0000×\x0013ÿ\x0000¤Æ\x001du\x0015þ"·Hä¸\x0016·XÄÌ¯vv\x0018ã;\x0004\x001c¤VÐ h\x0018´V4ZüSöÖw·\x0016¢O/í1F\x001a2s@Îæ\x0000÷\x0000tÒý¦â\x001bK+»ãlvÌÐ\x0005ÚíË0Ëc\x0019\x00038 
z+\x001eçÄV\x0016úu¥ðig·ºE\x0011\x000b1c1×9R1×<b5Ø\x0015î\x0012îÞæÊH 7\x000c³*Æ:°*X\x001cw\x0019Ï=(\x0003^ÈYyQ±¥j*ÞX\x0015?x	Ç\x0007v\x0001ç8b\x000e;V^®5ö§Üj0^BòÍ
	#*«+³`c
¹\x001c\x0007\x0007¡ W:º+\x001aÕßü%O§\x000b\x0000X\x0010\x0013¼¯Nï»=ø<UåÖmÛ@:ÀI~Î!3l oÀê1gZ\x0006iÑY÷ºv·\x0011[$3ÜÝJ¥Ö\x0018@Ý´`\x0016$\x0000É\x0003Ïj~¨E¨$\x0012X¥ü¹bvº6\x0001ÁíÐ\x0008$\x0010x4\x0001o#8ÈÏ¥:¹ë¿7þ\x0013\x0004ò6ùßÙrìÜxÝæ&3í·`ë¥Ç¦i3<\I\x000b~ó¨bn$Kq@j+>ãUÝ¯Ã¤ì0\x000b0\x0007*C\x001c\x000ezü®;UK\x0011[ÏöY
­ä6×l\x0012\x001b\x0011B3\x001e®áØÐ3n\x0006O\x0002,©\x000cO,®©\x001a\x0002ÌÌp\x0014\x000eI5ÌëzôsøfþO±_%¬öÒ,W\x000f\x0018ØÙR\x0014à\x0012À\x001c\x0012\x0000æ:ª+%õue´Òæòá"Y$X\x0002á\x0001éÌ\x0006N\x000e\x00009âµËac\x0005ÌQÏ1_"8U1!©\x0007\x001bHÚÙÉ\x0018Å\x00025hª7m­®-\x001c£G:\x0005lã\x00049ê	\x0015
î¤ö³4qé××[\x0013{4(»G°,Ã'ØdÐ3FÊ[RÉ­¡¸¼kÔ2B¨\x0004 \x0000;>eêsÍG?míÖÏÌµ½\x0013^\x0007\x0011AäþórõR;\x001f~óh\x0003fÍµÕ{ß±ÍksirPÈÎ\x0017çQHe%N223zUgñ\x0015ºG%ÂÚÞIc\x00132½ÚF\x001a5ÚHcî \x0010rB@\x001btV]Æ±\x001cwmkmmq{<h\x001eD/îÁÎ2XÎ\x000e\x0006síY×~!¹WÓ¡M½xn"ÊÕ]
F\x00030#\x00199Î:f\éh¬m"»\x0008¬¯n~Í´LðÆ\x0008BFqAc\x000fÊ\x000fZÖ aE\x0014P\x0005
.ÄØ%Ò³ó®d`c\x001bqWè¢
(¢
(¢
(¢
(¢
êÚ\x001b»g·¸A$R\x000c2\x001ezTôP\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001T.lZmZÆð8\x000bl²©L}íÛ*ý\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0001Éy¦ëw÷1XÍ{
âÆËå:\x0002 ©\x0007s\x000e\x0008ÇL÷ªvú]ûiDw6éçÁ©=Ìê\x001c\x0010ªZF\x000c\x000eyûËïí]U\x0014
Æ&­¦K¨j\x000c£)\x0004º}Å³KÇÊÎS\x001cu<\x0002}8¬¸´É."ÎïK¿v\x000c¢i$Ô¤0`\x001eYGXôÈ\x0005F\x000e3ëè e]J×íÚeÝ¦ýhâÝíÜ\x0008ÏëT,/5 ¶ö·\x001aSÇ"áfÍA\x0010\x0000}åÁ,s\x0001\x0003¯$VÍ\x0014\x0001ÇKgªÅá[
\x001d9äFñ$æT\x0011º\x0012pr[vâ8Æ\x0000Ï ­·µø¦+Íèëdñ\x0017ÈûÅÐ½\x0001íZÔP+\x001ciÒiºÆ-$âK¨',¾[ u^»³Øäc½*ã¶£«ir6[k{i\x001dæ3HÉÔ`+\x001c¯#µÐQ@XæSF»Áï§\x0010°]y"å¸ÈÈ¼©ÈÎ\x0007#ZKK\x0003s}jfÒõ\x0008\x000fæ´ZÈ¨àq±C¶î½H\x0003\x0019úWOE\x0001c7\²ÿ\x0000Lx­ÊÕÒX÷çid`À\x001cv8Ç¶k3STÕ- ·H\x000cO\x000c4ÒÇ\x0016Eb\x0017k\x001côï\x0001ïÅt´P3¼Óf[»º6××v÷{\x001c}í¢hÝT)\x0005w¨ \x000ez}«WE³\x0016V\x001b~ÎmäFHÌí6\x0018»O\x0019íýkJ\x0000É²´/\x0010ê.a(\x00166È;ïÝÇQµOXÓ¦:Òj	\x0005ÕÌ\x000f\x0000H­nZ\x0019\x0014%XaÔ0ù 8#½tTP\x00070º,\x001aMðÙ¬®î%I\x0010\\¼å¼¶\x000ca$ã8Á
N\x000695\x000e·w©ÜÚÚE.öT7vþcÉ26O¸\x0008\x0017$óÜíã·5Ó]ÛCyk-µÂoU*Ë2\x000f¸äU\x00184;hîbIn®\x001a\x0013ó¼\x000f<O'däÐ#\x0003SÓu\x000buXeÓî®îæ2yÐ\x0010*\x001cì\x0001w\x000c\x00108ÆÞOSÛK;â;{³\x0011\x0010%BÍ¸påÐç <ôâ¶h ,rQéwÖú\x001e
«I5 ÷/
²(ZL`pàã?­XÔìgUSû-ä±Il°Éoora2	`~W
ßx3Ç\x0004fºZ(\x000b\x001cÜ,4[\x000bÑ§L\x00173Ç\x001aC-ÙII!\x0017s\x0012À\x001e{\x0013À\x001c×DË¹JúR<hûw¢¶Ó¸dg\x0007ÔSè\x0019ÎX6§¦ii¦<òÀ¾Lw
è!u\x001c\x0006l¶áÇQß\x0019¨4Ë\x001dCHM>àÚ5Î,#µ\x0018Ù|ÈÙ	 H\x0004|Ä\x0011B3]U\x0014
Ç'¦_júÌ¶SÜù\x0011GlÌ¥¶G&â\·2p\x0007~µ¨[Ë6£¥K\x001aî	Ýä9\x0003h1:ïË\x0001Ç­iQ@XÃ³æ×Äzµ¬\x0005ãFé:\x0015Úc
C\x0002s0\x000f_­?ÄZ|×ö5º³Ëm:Î#YLf@\x0001\x0005C\x0002\x00088cÎ3ÅlÑ@Î^=4ÜÍ,ÃL½¢·b{Ëæ°ÁP»Ø`¤Ûõ%¶vápÑcì1í¸ùÈ|¾¼óÇ\x0019®\x0004qph×\x0016ölºuõÛ(1,¨º@éÐ\x0016]ù^:¤zW_\x000cK\x00041Å\x0018Â"Qp\x0000ÀäòjZ(\x0019Îé-©éV0i¯¦IpÐ\x0011\x0012\G",LðÇ-¸\x001cu\x0018<:Ó­Íþ%ä\x000b§M{\x001c³É<2@ñ¾K\x0015mÌ\x0008Á'1]\x0005\x0014\x0008æt¶Z:$Ç¨¹Â7\x0017cã \x0016\x0003×â®ê\x0016Mª¬ël\x0010\x0019ádWfd!O^\x0008SØØ¢±ÌèwPjhÖö·¶\x001azÂRK{Ä¼\x0011·Ë\x0001þ`U[];P\x001a\x0016§½©-Ü\x000cÎÎ]\x0015òY~là\x0000\x000e\x0008\x0007\x000có]\x0014\x0005I¢¹Å+x²Oo=ª[¯îØ9$¶Hã
Û'-«\x0017n4(tçQ\x001bÄPFèIÁÉmÛã\x0018\x0003>»\x001a(\x000b\x001cî±§Lu¤Ô\x0012\x000b«\x001e\x0001\x0004ZÜ´2)\x000cJ°Ã¨aó\x0010A<pGz·¡Ùu¹­%µwäMrÓ»(\x0018\x0005$\x0003×O\x0018æµè fKÚÎ|S\x0015æÏôu²xä}âè@Ç^ö¦k\x0010\®¡§j\x0016Ð=ÏÙL$(T3+®27\x00102\x0008\x001dÇ\x0019­(\x0003ÓQ½þßK&^Y,6ñ´X$\x00188$\x0003\x001dÈäs×\x0017nlg}\x0017N¶,<\x0012Ú³&@Ú¨ê[Û\x000fOÂ¶¨ V*joÒîìÃì7\x00114a±¹\x0004f°µ\x0019uÍ\x0006ãN]\x0019ÖêH\x001a&s4~IùHÊî9ì\x0008\x0018$g\x0018®¢\x0006r³éÛj×\x0017\x0006ÖúêÞéQ±ixÑ4nª\x0010\x001bÔ\x0010@\x0007=G=±R¶è\x001bèÍ7qömÅÙy#c]ùúg\x000c9'\x0004÷éh F7á½+uö¦Ýo\x001dÌIQ02\x00199ç8\x0019$\x000e¦¨ê\x0016·rj÷f{\x001b«è\(´Ùr\x0012\x0018ð¼]À»'v\x0018àtÅtôP\x00169UÓ^=\x000fGóIæ[XB³[Î\x0012h\x0018(\x001f)\x000c2\x000f|7aÁíI£Õ-u\x001d\x0000Ë\x0011º¹íl#PeòÜ
ý\x000bG9Áés]½SÅ'Ôm/\x0019Ø=²Èª£¡ÝsùP\x0006rEy©kvwZIemf²\x0015\x0012²\x0019$v\x0000tR@P3ß+"
\x001aâÓOþÍN¾»e\x0006%u\x0017H\x001d:\x0002Ë¿+ÇP\x0014Jí( ,sðÁu£j\x0017FÞÆ[Ë+\x0019A\x0013¯\x0013**a·°Ü\x0008PAÎsúÑzÍ¨i\x001aØ%s\x000cr¬ÐE"\x0017BáqÉ \x00106óù×AE\x00039]nÊâKË,´Ë¨ï@öÖåQ\Ç7\x000cxÁ
ÓÒ·áçíF\x0019`ýÒÄ­öãç~A]½F89÷«tP\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0002RÓ$"¼¨2Y\x0000¬ô×t×Ë[¥ÝÓ%H\x001f\x0018¦{
èÓ¢)\x000c(ªâî\x0003tmÄÌ\x0006J\x000fJ±@\x0005\x0014Ux®àY"@ï\x0019Ãü'Ó4\x0001b( \x0002( \x0002( \x0002( \x0002( \x0002J«¨_E§Ú\x0014\x0004\x000f\x0019çêhZì\x0005º)¾øÕ 0Î\x000fj}\x0000\x0014QE\x0000\x0014QE\x0000\x0014QE\x0000\x0014QE\x0000\x0014T\x0013]C\x0004$²*4Íµ\x0001þ#I\x0015Ü\x0013O$1È\x001aH¾úÔYb¯uw\x0005\x0007¸F¬p	îjIeHc2Jê\x0006Ic(\x0001ôV`×ôÓ At2{í8üñV.5\x001bKR{Mãrç¸ö§Êû\x000b\x0016ék>=fÂI\x0015\x0012å\x0019Ü gx\x0015~ÜbÒQTnµ{\x001bI<¹î\x0015_ºX®\x0001Å	7°\x0017è¨a)á\x0012Å"¼gøâª
kN3ù"í7ç\x001dñ¯OÖ®\x001a)*´W¶Ó\½¼S+ÊUç\x0018Çø\x0006Z¢«\x0005õµÄÏ\x00143,Ü\x0017·j\x0000µEAku
ÜfKy\x0016D\x000cTê*z\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000ç¼V³\x001bX\x0019UÝ\x001f2ªúq×Ðuæ¥°¸Ñõ\x0006b%3F\x0002¤zT÷úÌ6\x0017i\x000cÑÊ\x0015>`^>×ßÒ²â\x0011êô76Vå!%+ÇéëÛÖ¶I¸ë¡Ü5\x001bëÇ×-ã[Y\x0001±XÄëWzqÓÞµfÕ^5!jÏ{*î\x0016áË×qÇOJÎ¼»ÏÅ\x0002k­Ë\x0018*6ÒÏzRb×{¹n ·\x0007,'¾\x0000Úx>§µ\x0016NÂ»44ë±\x0015ûZOcöIæ\x0006@Cïß×©üé\x000e»#Ý\ÛÛØ¼ÒBÛFÖàòA':{æ Òmí.oþÕ\x0014Ò»$ç(r\x0008 wâ¤ð°ó-î®Hæi'©ÿ\x000094¬jåµI7-´\x0016=Ù@ÒF\x001bjÇpX÷æ¤]ÇæÍdÖc/ l\x0007\x0019l÷ëXòÇ
®«yöùîí¼ÇÝ\x001c\x0004ç\x001c\x0003ëøsWtû(® »¸´kÃ$4H×-ÃäpAÆ}½©¸Å »¹aµÉfw\x001auI\x0019ÚÒgjíëRÛêæîÆY­­ç¶´\x0005°Aúã§áÚ³4­bßNÓÅ­ÌR¥ÄDybI#ñíøU½\x001eÖx­/îå£è³¬}H\x001cÇ¹'N6Ý\x0002l§£_ÞfæT´yÖGbXÉ\x000cíè}kcOÕ"»Ó^ñÀG0nÎÜs×\x001eCÂ÷P}Z\x0002ßh\x001bÜ\x000cçò¬Ñ\x0004ßo¹Ñ¢\x001bbo0ü)×ùcñÅ\¢¥'ÐÚF£x¥½´ÒZ\x0010³¹
\x0003å°\x0008\x0004ã\x001eý)e×f¶
Ö,09ÆòÙ#ðõöªºÄm¬ØG\x001c,ñ[ }3ÏòÀ4ºúëj:z;îpd
güÿ\x0000irÇGaÝ÷ºÛË\x001c\x0010Æ×\x00172\x000c¬j@ãÔÂ¡´Õe{ñg{hm¦u,8`À{Çò¬B\x0004¶ÖÚK¹n ·xÀhOL\x00006\x000f¡éíVt¸,ç¼7qÉ0¶\x0007l\x001c«pr\x0007\x0019$f§*#»¹aµ^Sc`÷0Äv³ïÛì1Zñ3<jÌ\x0018=Gµq÷\x0012ØÒiSÝEvíÄ
\x001bz,¥uöþgÙ¢ó±æì\x001bñýìsJqIh8¶Ê:¨¶RÇo\x0014Mqs'+\x0012qêk\x001bX¾ö8l®-^ÖW\x001c\x0016ÈaÓ=MMs7öo¤ººV0M\x0018Tp3·§ø\x001fÏ4ËÁ©ëzo\x0013¬*Å`·CÓÓçW\x0014¹­u©4w\x0006ÖÎÙ®n\x0014\x0002Ê\x0018* ÷&?Skmn 6÷1
Å7\x0006\x000c8ä\x001fÄV\x0014±ÃkªÞ}¾{»o1÷G$$áÁ=\x000e\x0001õü9­=\x000eÚÝçú\x0013zÇ\x001eXkãßÚ¦QÓw5®n#µ¶yN\x0011\x0006ãY¶Ú­ìòBßÙ¶Ò,Á8þñ\x0018à}qVõYmã°Ý#¼'\x0001O×ðëçìØ.§o\x001euq,\x0004þù\\x001d¨3î\x0000õíéÍ(Å5q·©³.©+ÜI\x000eh×M\x0011Ä\"©ôÉêiÖ\x001a^Aq}P\x0012¯\x000b7~qÎ;ãÒ¹ÛtÌO
ýÝí¬áÄLv¸õ\x001c\x001e}ëJÎK]*Â[ân\x0004\x0000]ÈÎ1ß95RKA)2uñ\x000cFÀÌÑ\x0015¸\x000få}ÙbÝ¹Çù<U»Gì°Bgý¦n\x0012\x0004mÄLñø×=$7ZuÄ\x001aÅÊ!ó\x001f2F\x0017îgùqúõ«zÚ«ê6$ÂÉ£Ç\x0001å\x000f$\x001càõÈý})¸Fú\x000bØ¾µÄwÁ}dmÄç\x0011¸0Ï¡Åk×1eoe¨EäÜj\x0017\x000b\x0001\x000f¾B
d\x0010pr3ÚºzÎi'¡Q¹§·ë\x0017WÏóGnÆ\x0008G`GÞ?_ñ¬Í3V¶²¼¿àÈZi26ñþ"´t	|\x0016åüð»Éè@Í/aQ¤\x0006 \x001dî[±öþm¥{½\x001a¥\x0006­ua
¸r¢`_p\x0003¾\x0007¯½X\x000e±â\x0007¶²Zþû ÷©.â»8À\x001bb±ã¾\x000fÿ\x0000Z äÑ5¹®7{KY}Óþ`çë½,ì\x001e¦Ôe°ù-k\x0016Ìt
\x0006?*ÀÔ¤³·ñ\x0014+p-¡.Í¯|\x000c~ Öü$1M,qY[ËpìÀ6\x00066çüñïY«¨ÛZøú{Ä\x001fÝ(8è=}ª ¤·\x0006×CGOºÑ®®;Kh nR \x000b·ß8â¶ë2ÃX³¾¸1[«ï\x00039)­M§ê	¨	4eHß`cÑýÇéYÊ-t-\x0017\x0008Èô¬9í4Ý\x001eÒY'Q3HIýè\x000cÌ}3^sZ:è°±ãnâ¸
¹ÆI8\x0015ÌÙê\x0016mro59$ç?"ìÊ íóõæ®\x0010væè)4(KM\x0002+cå¾\x0018éÀ\x001fN?
ÓÖ4ÛKm
A\x001cJ ¤8_ýNj=mÍÅ½¥\x0002;Å\x000bùcpA>Ù\x001f­2úûûqc±±I
;\x0006Ùp\x0015Ï?*®Ý\x001alh,\x0017\x0017º%¢%ËBÌdp9eÇ#Ø¥ A\x001cz¶¢!\x0018\x001cF9Ïsþ\x0015Ð"¬qª¯
£\x0003éX\x0017>e½ÕÁÎe~üMBºË¶¨V¼¥M:Í¿ÒfûÌ?åw?\ERðÌ\x0002+­CfJ#Õp	§ÿ\x0000dê\x0010Oqs\x0015úFd%÷`sÆMEáç\x0010µãÎ\x0005»\x0016.¤rHþ,úU«(4:ój[Ò\x0017ÉÖ5H\x0017÷«\x00019?çéZw[If\x00114¦5Ü\x0011zµgh Ì÷ì0.dùÝ^\x0007ùö«úiÖ¾{£8,\x0014\x0005õ>¾³²±KbK	ÞæÎ9¤ w\x00191·QÍY¨â2$}¥w\x0000v£ëRT=Ë
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢
(¢\x001aÊ®0Ê\x0008ô"\x0000£\x0000\x0000\x0007aKE\x00004¨=@8¥ \x00112)h \x0004\x001ct¥¢\x0000B\x0001\x001cE-\x0014P\x0002`\x0013\x0006E-\x0014P\x0005+öº\x0010Ö6é4¥¾`Ì\x0017\x001eÿ\x0000\U}&Âhdòô©»ï\x00059\x0008?º?OÊµh§},+\x00191ÙN|E%ã¨\x0010\x0008¶¡ÈÉ<~]ëP\x0000:\x0000)ÔPÛ` \x00112(\x001ct¥¢Æí\x0000\x0000É§QE\x0000!\x0000\x0010\x0008¢\x0000B\x0001\x001cE-\x0014P\x0002P\x0000\x0003\x0000¥¢\x0010y qKE\x0014\x0000Rc4´P\x0002\x0000\x0000àb(\x0002¥Z\ÝLÇí\x000e\x0018©è\x000fµ]¢\x001b¸\x0005!ç­-\x0014\x0000ÅEAP£ØbE\x0014\x0001\x0014Ñù°I\x001eâ»Ô®áÔf£±´ÆÑ-âÎÄîzNI5f/¥(¢\x0000)\x0000\x0000p\x0000\x0014´P\x0001E\x0014P\x0001UoíEí«ÀdxÃõ)×\x0015jØ\x0006E\x0012C\x0012E\x001aD\x0000(\x001d§ÒÑ@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0019°ÝÌþ »³b¾LVñH£\x001cåÏü\x0004UÙçÚ\x0016âT%\x001f3ÈÁ@ú\üâëß·]Cl\x001eÒ\x001dW\x000b»
&q­A®ÞEss¤ßÛÝ[6\x001c\x0006D2Ã\x001c\x0001\x0019eÆ>ap\x000b{ä\x0002:8¯í&µkn ÝsºU\x0014\x0018ë\x000e(´½´¾F{;.QN\x000bE p\x000f¡"¹)`³¾\x001a­Ôú½³ÀñÂËehB\x0007WÜX³#£z\x00023ÔÐ/Î¥}\x001eû\x001b½©\x00197¶i´IÔ\x0004nO#\x0019à\x0001í@\x001b\x0017zß¶]ÛÛoû¾t¡3ôÉæ¨ÞxN²Ôà²ê\x0004iU¥P#À\x0004nÉã ñëÏ×ÞÛVk±©YÚ]µ¯b¾1Jà\x001c@'dtªíun.ü5}w\x000c:}»ZÌ\x0019d!\x00122U6®N\x0007@p=\x0005\x0000nkwâÎÐ*ßYÙÏ+\x0000táT\x000cüÄ\x000c:\x000f\f­K{km
Iqu\x000chÀw(`\x0006I\x0007¿\x001cñ\ÝÔòYøPæöÆÈJù\x0012^ÂX<apU[zÉ#ý ~­,¡óô\x0008Ùãº¶k»¢\x0002ÜÄ6³\x0000\x0010ÀnTúb:\x001dWS-9\x001eßQ±§ E<Ò®Ìg\x001cüØ\x0019ÀÏ&´D ó\x000cªcÛ¸Éc®zW+s+Xøýç¼±±\x0012¤gò\x0002ÊÑ\x0000ª· a²JõùúDmcÃä[­/íþ|¢;c\x0012,$±ÆÂOÈ\x001f
é·Ú:x5M>æ9d·¾µ"\x001b¤hæV\x0008=I\x0007õªzwôÍ@È©yn®³4JeËá¶\x0003=	Æ=r*×6Z¿¦6,W3B\Ï,\x000c\x0019V\x00126±\x001crÛp\x000f<gÞ©YZÛê\x001a~»¤+ãyq".ý²'Î\x0019\x001f\x0003giÍ\x0000uSÞ[Z²-ÅÄ0³e\x00128RÁFX@\x001cAQ
SO7+l/íMÃc\x0011yË¼ç×,._\ÒõmVX1\x0006ö©\x001bdbB¦ëïµsþÉ¥[½
¼\x0017ý\x0017ÖÁEßßvñòuÎyÝ|ã\x0002ç[uyme\x0018îâ\x001bxÉÆé\ Ï¦M*Ý[µ·ÚVx¾ÝÞhq³\x001e¹éå/ZêÏZÓgÔ.mm±\x0011­ÍÔEãY³\x0000!Ô+\x0011OP\x0008\x001eâÚÙÜhz¼²ê0;ÕÌ¶ÖbI\x0014®X\x0002X2\x000b¸ôá²z\x0000êm/m/Îæ\x000bSÑH\x001c\x0003èH¥º¼¶²Iwq
¼dà4®\x0010gÓ&±t\x000bãs©_G¾ÆïjFMím\x0012u\x0001\x001bÈÆx$\x0000{Qy%µïSt\x000f²µcGÜÅÆO\x0001Ûé1ØÐ\x0005»Kñu®N°\¤ÖbÒ)\x0010£\x0006RÅä\x0004:ýÐ:ö«ë²Z^Û\:òË\x0014ªä}pk½ò/gñ\x000bh±y5´\x0006C\x0012\x0012³bF\x0012\x0015Æ7eA\x001f)ä½\x0004ê\x001aäjÚdÒ[¶øÖÒÉªm!0ì\x0004\x001cr\x00078ô \x000e²Y\x0012\x0018ÚI]R4\x0019fc\x0007©&¢µ¾´½Îæ\x000bSÑH\x001c\x0003èHª^#Ú}\x0016xïfkx	Be	»a\x000e\x0008$`ñ31â¹Ëý?YØÙß¸\x0012×v1ÿ\x0000­Mß4l\x0003|Ä(n\x0003tlpM\x0000u¶ÚÛ:ÚÞÛNÑ¸Ub£ÔàñR}²ØÛ¤ÿ\x0000hÃ!\x0001$Þ6±'\x0003\x0007¡Éé\´s[Þßé¾íjÆeû-
\x001caNàÇÌ>Zpr\x00078î*¥§i©AªÌ'¥ÚÙ\x001cò6\x0000áV;±ÙwgÔ\x0001ØÜj66¬W7¶ðHÿ\x0000u%T·Ð\x0013Vëqgu¬G{¦ÙÉ5Äé}l]æýÌ\x001f0o]¼\x0000\x0007\x0004\x0011×¯O¡[µ¦enÒ´Þ\AUÚ3\x0019+ü ©$\x0006\x0007>\x00011Ôlà´7Âèð!2®ÿ\x0000_»Ò]êV6,«y{mnÌ2\x0004Òª\x0013ùåd
>ýãµº²¾\x0012j;ÚÆh@¸I\x0019ùd=N	È$tþ.rÂïLÓn5xõia·ºåÝÍË\x0000fÝíÏÞP¿.\x0007B
\x0000tSÞ[[\x000cÜ\E\x0008*X\x0017p¼\x000e§Ã#ó¨×R°{F»[Ûf¶CJ¥\x0007nNq\¥I}áÄ¹ÄQµä°E0ÉDÜ<°AôR¤\x000eØ\x001d1[¶QF¾'ÕÂ¢$\x0016îÃÕ³ É\x001e¸\x0003ò\x0014\x0001>¬ÚëVIqm"\x0016*\x0019â\x0012\x0006hó\x0006\x0003¡àÕ½BÊÄ/Û.íí·}ß:PúdÖ?føvÖÝ$ÜÁ\x0018YãR7ÆrxaÔ\x001e\x000f_JdsÙéÞ!Õ%Õ&ÞYÊ}[
­\x0010ARN8mÙ\x0003Aî(\x0002ý÷w«4³©·TØÄª\x0014cÏ¦I9÷«¶öÊÍgu\x0005Ê©Ã\x0018d\x000e\x0001÷Á®\x0014¤\x000fe¨>\x0012Ç¦®«\x001c²\x0007´~_§yLSqVà·VÞc¼ñ\x0014Wqê7rA\x0003£ýØÈHÀgÞÃ ×­\x0000nÅ¨ÙOröÐÞ[IpÝ\x0012J¥Æ:ä\x0003SM<6è\x001ayR%$(.À\x0002OAÏzãôiíínô»+;«=N\x0005wHÔÃ¶êÔm<··\x001bNUIÈëZþ,9ììaCÇ%ü
ÊFC\x0002ý\x000f¨ 
\x0013ªéÂÐ]\x001bûAl[hÎ]úg8ÍH·¶\x000cS-Ô-\x0014Çln$\x001b\óÀ9äðzzW9¬\x0016´ñ=µÄZYÛ\x000bbMu	xÒMÄ°\x0004:b»y=p@÷ÇÔc·6\4±_ÙO¬DîÖ¬\x0010*2ÛÁÆN:zÐ\x0017;MJÆùlïm®\x0019FXE*¹\x001f\\x001a?´lÂÛý²ßÏf*#óWq#¨ÆsXW÷:£¤.,\x00177Q\\x0006/\x0001\x000c"\x0004>â8PG\x0018=N=)¶v­%¿å³Aöù.%Hä\x0018Ý¸F6{`ÔÐ\x00175aÔ#Zkxµ\x000b2¡\x0006Ý$V<3\x0000íÔ}9´u\x001b!x-
å°º<\x0008L«¿×îç5ÇÄa¼Ótû\x0008õ=6\x0019#/*Þ;\x00163Á"y\x001ei*A\x00041#×&¥x4û÷ÖêÊøI¨ïk\x0019¡\x0002á$gåõ8' ÓøºP\x0007Yw¨YØ7vöÁ¾ï Lý2ie¾µU¦¹5e.¥ä\x0000\x0015\x0018É\x0019ê\x0006G>õÍ]O%õ	.oll©\x001f%ì%Æ\x0017\x0005U·¨\x0018l?Ú\x0007éRÇO·mO@Ìqoºîâ\x0010°\x0018\x0003´\x00118\x000cK\x000e}\x0008í@\x001djêV\x000fh×k{lÖÈpÓ	T íÉÎ*¦â
?RÓ\x0005òÜÃ\x0012*^UÌ9<nçéQF¾'ÕÂ¢$\x0016îÃÕ³ É÷À\x001f®zÃP×Â\x001al*lZxå+¸]ÂÐågQÈ ®\x0006Häõ \x000e¹5M>KY.RúÕí£8yVe(§Ðàu\x001fP°×­õ]>ÞæÊêÒ\x0017y#\x0012E+eÜq·\x00001ÁÆ*¥ M\x001dÏµ&[¸oC[C¾X£
CIÓ\x001b\x001d3é+*ÆX\x001bÂº\x001c	$_i·¾µYãR7Æ|ÜaPx=}(\x0003µ»¿³±U7p[\x0006áLÒ\x0004ÏÓ&Þ[\x0008¢ÜB"\x001e[\x0018|\x001eO\x001e·\x0016Zwõ\x0019µIc·dìÓ\0U1\x0005\x0001Ià\x001dû\x001dò
dËmow\x0015¸Xs¦\ëHð#\x000c«§ó\x0010\x0008û¥Ã\x001ct Ç.v6öwªÍiw\x0005Â§Þ1H\x001c/×\x0006ÓQ±¾,,ï-îJ\x000c°U}¿\\x001e+\x0017W¶¶}mÖ`É\x001cúUÄs4JK\x0014\x000c\x0001É\x0001\x001c\x001eµ\x000ex§VÚ)ôýM\x0016ÔªÝZÆ\x0016HT\x0011ò¾	\x0018<`\x000cr\x000f\x0014\x0001ÑÝÞÛYF$»¹Ý	Ài\ 'Ó&yl¶jkE¶7yÅÆÌzîéÇñ\x0008·ûOºQÂæ\x0011 ®#
\x0013\x0006àI#\x0007\x001e½y¬n¡t[ËëX Ó¡t/\x0010\x0002ÜI¸\x0004\x0007¢>	è[¯9 
­kU_ì\x0019o4»¸¤Û,H$\x0014\x0011ÐÎ´­õ\x000b+©dÚîÞicûé\x001cöä\x0003Ås¾#MÔ¼7©}áK,)4°\x0001ó\x001dè>÷B@úâ´5\x000bh Õô\x000f&\x0014ËHbãjy.vñÛÇµ\x0000Oq¨/öÅ½¢_ÙE"i\x0014Í!þ\x0015UÏ\x0003©'¯\x0000\x000fZ·sggµ]A\x0006\x0000cæH\x0017\x0000\x0003Ïlñ\5»)ðüún¡§Û\H]n-¥³g¸iIåó>rI\x0005X\x000ctÆ1ÞÍOâ{\x0013Ïo¦"eÇÌ\ØìO?\x0014\x0001°ú®NûûU\x0013ó\x0016fQæ»Ï?Iwgbª×p[\x0006áLÒ\x0004ÏÓ&¹[k8SÃ>(+\x0018&I¯38Æp\x0007 \x001d½òj{DC{a\x0014×6V\x001fè*ÿ\x0000k¹MÌù8dF$\x0000F\x0001<äq@\ÖÕuÛ\x001d/OK¹gÒR¾P\x0012/ï\x0001 \x0012¾ \x0006ÉÇj\x000bØî®ã6·[¼LáQ;\x0010Àn\x0004\x001c\x0015\x001cÇ\s\£mÀ7, :%ë8ù6mQsvº1Âµ¢\x000b\x0016ÛÉe,RÄÚl»\x001e2
J8ê(\x0003aõ;\x0004»\x0016¯{l·$!2®üÛs+»iD3Å!t\x0012(G\x0007(z0ÇQï\¶>\x000f¿³u3\x001fÚÊºµæy%'ï1$ä\x0011£\x0015\x000es\x00066q{,vðO¤G\x001aË#\x0005]ÊÙ+ß
g± \x000eÉ%C I\x0015mµÀ`v\x0003èpAüECi©XÞ»%¥íµÃ¯,±J®G×\x0006¹id}KAñ#Ø\x0006Kx\x0008
¤#Ù\x0016ì\x000e	\x000c ã\x0018È<\x001eõ,\x0012A©i~N­¦M%»\x0019#K;6Þ¨\x0014RD` ã×\x001dè\x0003¤Q²åí¡¼¶á3º$KuÈ\x0007"¬;¤q³ÈÊ£%à\x0001îkÑ§·µ»Òì¬î¬õ8\x0015Ý#S\x000eÛ«Q´òÞÜm9U'#­jø½$m>ÕÁ_"+¤{ñ\x0010F\x0001å\x0011¹Cm$g¶{P\x0006¤\x001aÌ2Mo{m4Q\x0002dxåVTã<p?\x001a­¤k¶:»Î³ÄdGMEbÊ§\x001bÀ\x0007î0}ë/O1ßø\x001bõK\x000b¹!ÒAgl@db0\x0019÷°È# \x001föªo\x000bÍl²êv»â[µ½¸s\x0016@pò\x000e:ãÏNE\x0000mÝ^[YF$»¸Þ2qºW\x00083éUæ¿[+´¹GX\x000cÆá°0p~\x0007\x001aÌÔ^ÞËÅ0_jCm°µòàù\x00197\x001dÙ=\x0014°+q¤V}ÖW\x001a¿eÓãÛ\x0013Ù#\x0017	µeoÞe×ÔvÏr
\x0000néºiáÝ:óQº3-¼LòÌá\x0001b N\x0006O5\x001eµ©\x0005Ð\x001e÷N¹Ç\x001a¬±°`ATàò;Xº\¶ÖèwZXíÿ\x0000²¢Kyå G\x001cËWn\x000fp\x0008ªñçKñ\x0005Í³éòu&#òÍ(ç)Øñ´\x00128$wÅ\x0000ÎÎ\x001dNÂâå­à½¶ásUg\x0018ë\x000ex¢ïS°±e[ËÛkvaYeT${d×;«ÞiL\x0016zC@÷Ë$e 7ÀÁ%@Ê\x0005\x0019ÎqÆA§j\x001a
oPk\x001b\x0005#_
óÝ\x0002¹ùrF@$¨P\x0018ä\x001e\x0014\x0005Í]Jîhµ½\x0016\x0018¤"+%\x0012\x0001¸\x0008É\x001f¨Ï\x0015bÞö8ôï´ÞÞÙ\x000cÀÎ\x0016/¼@\x0019$óØó×5Îi­º\x001f\x0005wýÛ\x000cý jÖ;fð÷\x0017¢ÈÃ},O"o@âI@ßØ'G8ç4\x0001Ö®¡döíníÍ¨ë0J\x000fø\x0016qI\x000e¡eso%Ä\x0017òÁ\x001ewÉ\x001cp2rAÀÀæ¹Q«\x0011§JLZYVÔ\x00166¾X·9\x0019óîF\x0002çv7cæÅGöço\x00122ÞEy0o\x0018Â#%éÉ\x0007\x0003äúg\x0002ç[\x001e§a-ÏÙ¢½¶{¾RÊ¥úg¦sÒ©ØxOÔ5\x001b(. i"`©¶e>vT1+Î9\x0007èk:{\x001b{o\x000eè\x000caD76\x0008\x00189. ;N}sSi[Áâ­f	\x001e(çH\x0018ØÎ\x0004C%GR89Ç¡ 
Ô¬RìZ½íºÜ	Cÿ\x0000³Ñ>£cm:Aqym\x000cÏ±É*«6x\x0018\x0004ä×\x000fnÊ|?>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_cp_actes_sexistes_durant_le_suivi_gynecologique_et_obstetrical_20180628-3.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_cp_actes_sexistes_durant_le_suivi_gynecologique_et_obstetrical_20180628-3.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=@K>ÂÁs.Lûj<¦M\x0004Sõõ\x001f\x0002'N\x0006\x0018®ÕBl\x000cG\x0017:?³
ÆZþÆ?UhåÇáw(êUôZsYåVíA#\x000bÇ¥BÏa;ë\x0011,K6FÉ8\x0002g\x000eNâ¾,,\x000f§\x0006Q.:5Ö\x0015¶ã­1t
\x0004Þ\x0005W4\x0014¡\x0015X\x0000¼(;\x001db¤	¿0!ÿø¶6Õ/.LM\x000b¨\x001fTpüàðòBÓ\x0006ª8\x0004~]Ë	\x0016Îb\x0019ì·(i\x0016Ö3èõô^bérJÜÂ*Î\x0006L\x0015LEL\x0012$Ç5´Ô2\x000f<cQ\x0002GdHdY
©	e\x0004«¹ÆÂàlU¼,#G¦ê\x0003j V`ÌHåj\x0014R\x001bÊ
V\x0008Mè
IB¥Q&*åèXBÚ²Í±\x0019Ó\x001c¡L\x0007£ÈÒ³\x0019I nm+1å)õ ¼(ô3´X
\x001f==<½;zw\x001cJë0\x001b\x0019.mEÒãë
V¨áÊ¤\x000c\x0017Iï\x000c¹ÔjO\x000fdßÜ7\x0015®På(å
5\x001c´\x0010·×Õ
ÎÆB\\x001f\x0003õ\x0002V!c«ë¶,?Y/Ù(\x0018;y]qö­\x00036ÔêïOí]`}y÷Û:Ïµ\x0013©ÉÑã~¸zÍg±þþ3\x000fF=Ë]9.Óÿâ]É/Ò~¬Û\x001bæº¶WÛ~\x001bnÅZò»{ªíò×ËÊVZ\x001ecÝü®_Ø-½\x0011\x000f\x0002­Çí\x0014_ïztkCñÞáù)R7¢´À¸2DòT-r­\x001fååYbTj´óz²û»·\x000eLù¡ÃÁ©vÅ{'DGefï÷_ãT\x001cWg`ê¿dâ¯\x0011µCMû\ÛÉ5g?æJ@Û3¶£\x001e,\x001ez×ÞâÊ¡ª 2Ëáå¶3o\x000f{ùhÌÓ±kãñ\x0019/û\x000b¯¶\x001f\YR¿aRÎG»ÄÏo÷¿Tþ.¹|IçªâÚÝ,\x0002\x0018þ²+TÁEÊÃ\x0003\x0016ËfsqlG9Q\x000eÍÏ\x0014^d¬ÑdurwÏ«³ÜrÞÕ@ïnòÌtd;6Æ8®%y\x0014\x0007ÜX8Fuu­ÉN\x001fåSîUîQD1Ýåª´Oz»Ó¶¢k*AÝÜ\x0000\x0016²T\x001bGRD	¹ x\x001e¬ÔcÁ¿<Â\x0001\x001cgC\x0012Xær\x000bªU³}\x0013Æ¢ðnÀÐü\¥®Þy\x0005QPõI}ûkô`kéä¼Rç¹û\x000b×áç­ûÕo\x0012ÑÀk¿lØ±º9ÆdøqH[wÌoÓíãs\x0006³7}ÝÕ×n`tüÓ©~ÅU÷îÍÃNEÎ\x001dàðóê¶\x0003ò7lu{Þá§Æã]Ûíü}@õ¢êK7£´û¶\x001e\x001e÷òhñyMÎg;YYùµ}Ýµ\x000fða-UÈjdüX|ßùÉ¹í'{°ùÃÊr&}îÇÿ\x0012ÏøÒ\x001d)?]wúºS®ô N4(lS¨þÐ%·¶ëuílrþDóàÄì¸qv,;i»\x0004-\x001ccègà\x0018©¾ÝVùaÀNIìYÁÛr«\x000e\x000f#\x0007ÛÉ.Ú^¹½Ç3õèãkË|\x0015Ó­æ¶ÛÆIô\x001eÎÒ£)g@Cøø\x0002É¢
b+x¯ïPo\x001fÙûöë.ø©áHëCç#ï\x0017t­\x000e[æ²\x0006ÏV±fwÓ»q)ì%]Roí[ÓtrÄÛÀFnyðo\x00052Vtx¶mA»3®rÊBËF÷á):Å©¯ïGo W\x0007niwoÙ:ÿ[á}Ïz/ªÎL°©ë²»KcÞoéùoÍî:­ßø¸4|{ KÉ¼5MçÂÖ¶×ëþ £mEÙÝ!»\x001d/bã\x000cÇ§2.YG\x0015\x001cý.)jqI\x0016Q´3ºP\x001d¨våNå\x000eEößrFZí*!÷3Cî\x0007Iü\x0013\x000fäÔü)\x000fôúÜ\x0003á,\x0017Êº< \x000cÄÜÈ;^H\x001dú°ÓbîÞYØÁ½õõG^è]Ô¾í_ã\x0019O\x0019\x001e~©±:7ûúð\x0012ãÍczì\x000b­Ð8¾ÕUmç$\x0019÷|W·c~7âäA1ì©ßUf>·
µrp{¦fÿzwYÉC¦&9÷Òo¥ñÅµêo&kòÛ¬]6ô¼Í¯g´\x001fÙß-ÛªW·ËOªÅó¹åó
åÊ\x000füSSdïæ/¸ôÖ0Ò©Læ±/µitÑ¾Sí]FñÎÙ3[\x001dûvçÝ~¦6'oÿ|ÎË­w ©¿þ|#+\x0012\x001fÏ=õ[@ã\x000bñ¸«gÆ,Ë\x0019©¬]80ò¶Û\±Ñ2ÞßùÒô5\x001d¸£/WÅþÇ¢\x0015Mþ×S¤\x0011\x0008\x0001¿Ó!@\x001f«Å¦úûO2<\x0013ðJþ !PWc$\x0000YÍ¾-4¶\x000fjù| ¼½DÚ±£ïg\x001f\x0014¸Im)k\x001aÙô«\x001f!Hí¨Öô4l\x000fËÌÔHºek3UJM\x001e\x000c\x000f\x001d})©¢|ðàAI=à\x0017Ðã£?\ÊY{k³îv~6ÀªÝy£Q¿V¬æ8üMSI¿eÛ\x0016UH\x0002Æ\x000cªXP1cGêî	yÖå\x001c¸üì·EÖ3LL¬:\x001fßæ¼ÿu}|ö½¹ö»&%;îä²_T\x001díTÛ³Q\x0010à7×eu»\x000fzOè~k¢þî²´HÙºÂ1KG¸æö»_º5¡sY¨µç`²duã,gó»]æËMFD³\x0015Kl|Ã_¯zü#ëÕÙý=ª&ßßéAÄ\x00036|X®\x0019°Ñüä\~;;,jæ\x0008¥ïî¾F\ÿÁÚwË\x0013\x0005¼?\x0017\x000cz¼­ó0³\òò«}\x001bÆ4mªÿîü*KU¬Ý'¼eöT\x0015çûãU\ãï\x001b¸QI\x0015¬ 
* _âdA\x0019U0o¼AÌé¬ÇJÕâ6Ælé?]{b©êß?`ã(*Ü\x0013ÖL{>ÏÜûá\x000eÜáb®áóØ\x0011\x001eK\x0016\x000bO\x0004°gMq¼Ó]»gO¢æ¸T\x001cüþÂÉÎ®öP69¤w=~rÍuökÒi]\x0018d¥ìn2\x001ah®¬y:èáPÉÀ_ãGo\cqÌÙ×Ñub©Ñ\x0014G}ù²×\x0011Öoí7}\x001e¶.#Èû¡°Õ;IiâA¯ö>
;º·ñ\x0010õ^"åO²)ioÙÿ\x0017\x001bÖ§ão\x0010[c^l¾v,ê¢÷Ñ°m[vFÚçðfÛ1ïðZ_Ûù·+soåc§SºÖþì3åF7£Jï\x0014«+Þ7ÏY·+{Çzúeô·\x0016Ço\x0017Tüpö®=ë­#Wf]1êT<'{ÉªËAT8\x00086\x0007\x001bA°t`
f³Öðò!ÖÒÄ¶»\x0004ÿTH |À~ÁKêëå%õ\x001bx\x0010â=|CBÁÊO·\x000cÆ!n\x0008¢dêd°\x0015Ðq\x000cÐ\x0012\x0002
n"!=3#¡3Á·8û\x001e`Ð/ÄlCÙÑbXê¶$(Ðæ\x0003îFBQR ù2a$á¡Hrð¤dÚ\x0006m@è£ü\x0003ç\x001c\x001c_åüd§­ï0x@ÝÂí[¼ó\±C¼_äÇ·¯xu¿¶öüæ\x001fæVp×ßV\x0018Vö[á½\x0006+k\x001e¥N\x001enµ;ô÷\x0004|r­Ù¹Âd,pTðK#¿\x0001ïänüÞeç\x001dßÍ
rnÎ#\x0003½B^¤nèù²­ÚÖþDw\x000bÛAÛÂÊÎ.;m|Ä¢ëHNú³\x0012»àáÝ\x001fÖ\x001c/Mì¨õz_\x0011|wô\x0016\x001b÷\x001d+¯¿XÚ°ÀN¿)ZÚ-ÒoÜÆèÆÛ\x000fä9®}ÝÁÝ°«ß¨îß­J¾=Î>¹ÕÝ>³\x000f
\x000e\x000bY:pâä9\x000bjFÿÊWD}U:ÒßyUâü
®ÿpfYê{õR¼ô7Úø´ØÚÆ),ó$|÷yY!Þ\x0001èÃékûpâ¿#¼\x0018qøL\x0002n
â\x000b 0\x0012¥¨6z¤\x0019iâøÆ¹oÜ1UÄú;¯Ê;´2{Wû6¼²hébÂ"E¶\x0002,\x001cË\x0006éz\x0010Ö\x0012¢\x000fÊ;zRú-\x001b,6E_¢0&¿uã9{Ç¦_B¯3ÒÉñ=~á­z+S\x001cs#~÷ëÕíTõ³¶\x0013ÎÞ:<8¼²Úâ§w¿\x001d¼­×!\x000ewV·¾îY¾Ñç3­\x001eðâª¾¹óèÝÖ'KÎüèùbÖuí¤\x0005Ãúö\x000eíèÔIb\x0015áû~l¬éW­§?ùßá>L|÷`ÆOQrEyïòü\x0006Åö\x0006§
MÇ¶\x001d©8ydøÔ¬çuWÖ\x0016fp¯*,vV¾*:Àï>ÿ©Ó:eþæZçU\x0012[¯ØXÌKg¼cO©-{±ß²uTÀ.»\x000bÔÊºx#ëQÓî<Í7Ü5Ì_äûtNíìI\x0003È¡ìØ£§Î¯¾tsì¬QmßmÍX1ã\x0019½yX\x0007C}ªí	B\x0015\x001dÆ\x0004²O ?t©øââ¿%d|}\x001d½<½|`¶ä\x000böFàÑ\x001b>R\x001cL;ñö?Ü\x0012Õ\x0017ÌõÛ\x0010[ñ¬¶áúéµ%ÓÎû/j=õ`\[ÜÍªk×MJ©¾¼Ù~´ðØ±\x0015}g
³7¾ÿöeEÕ/2r6<~´Üÿè¡!±]×V©=VÆ\x0017ÈòÆ¿ÈTr:ãÚÑ%?/\x001fd#Û5E±t®ÙäUq\x0005§\x0013ï\\x0019¼8°îýÕ\x001c\x0007·`
»s~ìè\x0012Ã_¢mÝ\x001b(<>éjÅùðÒ´:y]iJÙìaýú\x001bÞs?\x001b\x00133lxØ2µëÝ\x0013{°0Í9Á»\¶2Ëô^ÿ\x0007Ê\x000fq[Rg<l?È×oê½M\x000c¿éEòò\x000b×ù#4s°ù>uÞ¯Ã{¼qw¤ø\x001c3Z:ºp«ñÞªÓ6Ø=Z=BöÈ7¨ËAzKTÏ\x0006\x001aþEîò1\x0018<ºº:;¼~à#«\x0001\x0016\x001cÛe\x000b×úñÃ7"ßjXÛ,XJ\x0015,\x001eÿÕ(²T³ü?\x0011ÿ¾Ü,ô¥\x0013¿`ª;\x0015X\x001ePî_ÔI'ñKo¦2¿¬T%¬uÏRe&dË5jwè\x0000Ðþí{ p N&\x001aDu£º¶d¢¬"Onnnî×è*T_\x0012Ô|-'ô»ô¸ÄoAì|¸\x000ce\x0003ëXcÕ»³\x0007ú¯w_û]ø²Ç¶7)wÅïì,s\x0003V$ço-\x00197%öYÐ¡	\x000b\x0014c'\x000e\x001aShòrúBÅ¾Ø:VÖONi­ö¬\³ýöÒK³\x0017Í\x001aÙÅªf06¸úÍD§ËÃ<ßwÌ\x001fVvyå»\x0017ÏºY®ì¹¾×ÕY~ÆÑüÞOK[ï!§Ç\x0018)ûÂA§¦î½T[ygêhW½-j²õ"ï\x0015u\x001fÖ\x0014?XíÛu{Pê-ÉÓ\x001e{Æm¸ÿ4rËÒ^{\x0014ûÂ½.\x001d¿ÇQ\x0019¡Ú^»\x0017ü\x001a4´øÊzÁøC\x000e»Ü¾ó]L;\x001eyì¿-r­
9r 0:zíÏõ·Ükë\x001f¤/ñÍ\x0016'@Ø<ÊÂqª ú¿&8~\x0012à?\x001ec\x0017Ü£LZ\x0016Ôv¸K°Ña;\f©ç\x0013RîÉ9`ýãPªGé¶Rm>v$¥ÀoÏÈÖh1ûï\x001fíh`\x001f;âJ-\·Rét\x0011I\x0013¨ør¿ñ>_}½èãÇßx©g©ÓxoÚ¶&/+3I%ËJÎû|7I\x0016âØúËÑÃ¯.½<«Mþ\x0006ËÌV7/öª:5ÁýdHÜì\x001d/F\x001cêÕ8\x000b÷Ã}4çåzñûgp+E?Jæ\Þ\x001aÒ©>ÎøÊ~ëm¿ÜÝ\x001fßw{ýÕa&Òó £å§^â/îïxÞ·â}Åñ­÷\x0003Ú<ÖãuÿAQÅGV<ÀÛNZ{bæÞ{Gzüpo¸Õ¨"Õgõ.É§Ûï^?Ðyõ¥Æþ'²\x000e´Mµä­ï«Ôã\x000cv2Â&¼	©^óÌßÖAtÍ¢MLuÄ55N\x0017^jÂv÷J·;:ëµ\x0015[\x0017\x001aD«9\x000b~%.÷ÜÅ­Y¸ÁtçjÖÝ9oíVF<¯{©­y\x001dwdEß]Éª½\x0005¡k?\x001c
Ø\x0011¦Ü¥`[T¿û8c\x001ci!þ\x0000TÝæô/9ÔüÊQªÃ£\x0019`(S>2×µ=áÇvp`z--l©>\ïÁ\x0002ï\x0001<¤¾CAüÕ1=#Ò |ZÚúvsïÎö5þÇ9Që$ÕWL`ÓoöÏO2~>tLì0>Fø\x001cPòïï[ÓoÞ\x00063ß\\x0008é½Á~#7ªè²ýû¾¬²yïWì¼Àüýï§îm\x0014u°/³îÒWûb3Ú¨\EëMçt\x000cñ_ÜÉáT¡Ï\x0005?\x000fè\x0017{Å½`¥©ÓÒÊ©³ÎòÛ\x0016\x000cÌßrêÈ\x0003ý{{½*ÏñÏwZd\x0012´-Tá^s¿´2[µzÉ[KËáì\x0014Ï;;MÕïº\x001cwÎ\VÏ¼¼èù	ÖÓ\x0013\x001b}bCWþ~ê¨Ãê\x0017Ý-§öÀÏô\üúÀÃõª	YU­ÞX×iÖ\x0004Ï¾zÅiÒÎe\x000fJ:ÞÎxyMÛÄ`Çí¯Ü:w\x001euÖñ6\x0007\x001f°;}µòÿ\x0000çÕ\x001cH
endstream
endobj
85 0 obj
<</Filter/FlateDecode/Length 225>>
stream
x]ÁjÃ0\x000cï~
\x001d»CqºK{\x0008­cC»²l\x000fàØJfXd£8¼ýd/t0
òÿâ·ô¹}iÉ'Ð7\x000e¶Ã\x0004'Ç8-B£'u¨Ày¶®Üv2Qi»uN8µ4\x0004U× ßE\x0013¯°{r¡Ç\x0007¥ßØ!{\x001aa÷yî¤ï\x0018¿qBJP©¦\x0001\x000cºx5\x0013.Ø¾u¢û´îùs|¬\x0011á±ôß068£±ÈFTu%Õ@ý*Õ($÷Oß¨~°_³ûxÊîêùXÜÛ{æò÷î¡ìÂ,yÊ\x000eJ\x001cÁ\x0013Þ×\x0014CÌT>?\x0014!oP
endstream
endobj
86 0 obj
<</Filter/FlateDecode/Length 12220/Length1 24332>>
stream
xÌ{	\TUûÿsîa\x001böMàÂ°o3\x000b(ê à¢\x0002*¨%Ã0À(0\x00133¨R¹à\x0012o-òªõ¦¶\x000c.[Ùæ«íùË¬LåU+-+Láþ{f00\x000cìÓûù¿çr¿÷9ÏYå<çÌ9Ã\x001d \x0000à \x0002.3oÌ¨ãqq\x0001\x0000\x0019;\x0000\x0002
Æåçþ\x0015³\x0017\x000b-XëÐ<URá?Ê\x0000È\x000b2%s|A]ñým\x0000â\x0014¼/è*µ¦¸GãÚ\x0001\x0002W`iºZ\x000b\x0017sèÆÃ\x00007±\Tj*«¼gðy\x0016 è<æ×iÍ&ð\x0003\x0007·	ûSUÔÃÇ\x0000â1+>T^R9gÌä\x0017\x0001p\x000cC%ËËõÚO·haßqXa Àpmfb¾\x0004óaå9!£o\x0001\x0018Ì2
£N{ôâ\x0019\x0000I°NC¥vñ\x0008ú/Å
\¶RJ1q6@ÿÑ\x0000®i&£ÙÂ\x0001öñPnªÖ¦l~n8võY3\x0008¾\x0012\x0003¬Î»2i¦kÚ\x0015Y viãè×\x0008Ï£RÅ<ß1LvNæYGZ_Hø9v\x000cCÒ±õfìÜ­Î4r\x000e@
U]0@\x0001*Ô\x000fâõ¶>DGI\x0013J×1\x001bn{²ÍPÊ¸;±b1aTÂ¥·õ\x000cùã38Ð\â.í\x0012¯è\x0018Ieä·JEG¡\x0012¿ÙòÌ\x0016h\x0013ï\x0000íí½ü¯&i ÿ·úf/CÖ_i'*\x0001Ãß­Ë_MìË0ëÿ·\x000e=¤\x0003RBàñ»ðîôÙíÝrk{ï§¤ï"{K\x0004X"fYwNg_zý*ãA\x00062¾\x0003×5\x0007D9È\x0011\x001dÁ\x0011Ñ	øvp\x0006gD\x0017pAt\x0005Wþ&Îu\x0005¢\x001b¸!º;¢\x0007x z'¢\x0017xó7À¢\x000fø ¢\x001cþ7\9ý\x0010ýÁ\x001f1\x0000\x0002øëÐ\x000fú!\x0006B\x0010r\x0010¯C0\x0004#rÀ!@\x0008b("*AÉÿ
a\x0010\x0018\x000e\x0011\x0011\x0014#!¿\x0006Q\x0010\x0018
Ñ1\x0010\x0018\x000b±üU8ÄxH@L\x0000\x0015¢¢\x001aÔü\x0015HDÄ$HBLdþ2ôþH\x000fH\x000fA(¦@
b*¤ò¿À`\x00188\x0004 ¦A\x001aÿ3\x000caÃ`8âpÐð?\x0006ñgHtÄ\x00110\x00021\x00032	Y0\x0012q$â/Á(\x00188â\x0018\x00188\x0016Æ"fC6â8\x00188\x001erø\x001f!\x0007& N\x0013a\x0012ÿ\x0003L¢\x000b¹y\x000fùa
\x0011¦ÀTÄ©PX\x0000\x0014§Á4þ\x0002çtÄ\x00190\x0003ñ\x001e¸\x0017ñ^É\x000f3¡\x0008±\x0008´ZÄï \x0018Ö\x000e±\x0004J£RÄR(C,rþ[(\x0007\x0003¢\x0001f!ÎB<\x000f³a6b\x0005T VB\x0015\x000eªÀ´\x0011L&¸\x000f9÷A5b5E3\x0011-`A¬Zþ,ÔB\x001db\x001dÌA\x0003õõ0\x0017q.Ìãÿ\x0003ó(Îù÷Ã\x0002Ä\x0005ð\x0000â\x0003°o°\x0008q\x00114 6Àü\x0019xâCð\x0010âÃ°\x0018q1,A\\x0002K\x0011Â2þ4,FÄFX¸\x001cñ\x0014¬\x0015+a%â*xÿ\x0006\x001e&Ä&ø\x0007rþ\x0001"ý(¬F\
!>x\x0012\x001eÇ\x0011×ÀZÄµð\x0004ÿ5<\x0001O">	ë\x0010×ÁSOÁÓüWð4â×ð\x000c<ô³°\x001eéõÐt3ü\x0013ñ°\x0001q\x0003lä¿°	q\x0013<ø\x001cÅçá_ÿ\x0017\x0010_Ía\x000b\x0002¶ÀVÄ­ð"ÿ\x0005¼\x0008/!ý\x0012â\x0017ð2¼ø
X\x0011­ÐÂ\x001f\x0016Ø¸
¶#n\x001d;`'ÿ9ìW\x0011_]» \x0015±\x0015v#î×øÿ×`\x000fâ\x001ex\x001dñuØË\x001f½°\x000fq\x001fìGÎ~8ô\x00018x\x0010Þ@|\x0003Þä?7á\x0010â!x\x000bñ-xÿ\x0014Þw\x0010ßwó.¼ô{p\x0018ñ0ü\x001bñßp\x0004ñ\x0008\x001cE<
ï#¾\x000f\x001fòÀ\x0007\x0014?\x0010?ùácø\x0004ñ\x0013ø\x0014ñSøÿ\x0008>cH\x001fÏ\x0011ÿ\x000fñ#ø\x001c#\x001e/\x0010¿\x0013üp\x0002¾Dü\x0012¾Bü
¾æ?¯á\x001bÄp
ñ\x001bÄ÷á\x0014Fú4A<\x0003mÈiÿ þ\x0007Î"óüQ8\x0007ß"§ø-|Ç\x001fïà{Äïá\x0002â\x0005¸x\x0011~@ü\x0001.!þ\x0008?ñÿKð3Ò?Qü\x0019~AÎ/p\x0019ñ2\á\x000fÃ\x0015¸ôUø\x0015ékp\x001dñWø
ñ:â{¸ï¹ô
¸x\x0013ÚÓ\x000e\x001dü»ÐA\x0000'\x0004QXÛqÿë(
þ\x001fvXwNòÙân¹>ô'î½J\x001fÍ\x0006¾·øß³ÁÙI\x001bä»±Á©gvwd½÷#é»È^«\x0003Ú rì{\x000bÙÝµîOþ>\x001b\x0014®ò»´Áµg¶ÃäzL}\x0018ª>&7jØ¹ï-þ÷lðpsD\x001b$wa[ÏlùäzLw1\x0005{I^ÎÀä\x000eÎí)yöÌvü\©\x000ffö1ùz» 
²;8·§äÝ3»ûrÕq½)ØK
ðU 
\x000e\x001e}oáÛ3»»Ö}\x0018×»\x0008ß^R`\x001bÀÁ«ï-\x0002zfw_r\x0015½÷ó÷ÙÀ\x0005z 
r¾·\x0008ì­èëClÞásæ/¤ O´Áñ.l\x0008ê­èë
w±ôÂÞ¸Mp¼Cô=³Ý»åî°xuMw±ôb"üÐ\x0006;\x0004HO)¢gvw­ï°xuMw±ô\x0012¢ûáÎÅ%¤ï-¢{fw×Ú¯÷~ú0T}LIñAhâ\x000e\x0001ÒSïÝ}ÉíClÞÅ\x0014ì%
Lâp³ï\x0016Ù÷\x0016I=³»k}ß5Ýásæ/¤Á\x0003hû\x001d\x0002¤§4 gv¿n¹àÞû¹e¤14
w^ª¾·\x0018Ú3ë\x000bë½>ÙÇ\x0019;Hß;8·§Ù3»û\x0000¢zï'´ï"{IyÙI¸ô\x001fÒ÷\x0016Ù=³»Gã\x001d&~×t5ú/¤\x0019yp\x0007\x0019Þ÷\x0016y=³»kØ{?1}\x0017ÙK*)HÃmsð¨¾·(è­î\x001bØ{?	}\x0017Ù{bìÿ\x0019ôÄM8&â·\x0004ºþ#\x0011þð¿C!/ºoWÔ=³»»nrßû»sówtB\x00084 /~DB/¿Tr©úÒ.\x0007¸\x0014ò{Îõý:x»4üáÃ¦
\x00192h@ÿä¤Dµ*!>.6&:*2"<L\x0019\x001aÂ\x0005\x0007\x0005ö\x000bð÷óõñöòôpwS¸º8;9Ê\x001ddRXÄ2\x0004â²#8kDU\x0014¡\x001c=:^È+µÈÐva\x0014Y9dì^ÇÊ\x0015Ñj\÷\x001a¬Yz[M­¦æVM¢àÒ ->ËRrÖ£J®LTôÊLe!g½Héñ\x0016EÐ3fBB°\x0005å[ÉYI\x0011e\x001dY[ÞUýµ8Ê3\x0019zy|\x001c´È\x001dtDÊê£4µ\x0010a\x0012OÖà\x0016\x0006dÎ¨Õ_eõSf
*XÙð,muâ¤¬ÌÂø8+ÉÐ)­ \x001cau¥U ±J2¬R*3\x0008æÀr®%î@ãV\x0005\x0014\x0017Å:(K´3
¬¬¶Pá\x0016r3­>sÛ|Ïbçî\x0019\x0005Kº\x0006°Y¾\x0006NÈ66.á¬Í
º\x0008XX}`[&|dQãH\x0014½\x0002½Ç¡4æáÂ\x0002+y\x0018Er%U6ûôÊ,S4³:(G(Ë\x001bg\x0015áØø7Z!·>d¿¿f7ÿ
øgqù\x0005Ê\x0010ëð\x0000e¡6³_'4æÖo÷Óp~ÝKâãZ\x0014n6Ç¶¸¸Ú	'ç®þV\x0019¥huÊÎ½åY"h¤\x001c\x0011aåt\x001cjR DR\x0004Ð§@£.\x0005«a*$ØÊZ#b°:d\x00145*\x0006\x000b|¡½U\x001c®PrW\x0000#@yñBwÖÎ+®@
qr+Ö°¼¶ÆÆZcb\x0010fà¢Ãh~@|\m+®4)8| û`"úV[8Xî\x000f	\x0011\x0006xy«\x00061c]8©Àç 8`\x001bhT±V¦H(9ÐYâ5Y(YØYr«y\x0012#y\x0007Ì^VYÄ­?W·GVù`+ñþb½­<;O=iZ\x0001ÕXd÷mv~·­<åV²zd\x0014°\x0001b\x0002XZA9ãVe!Sàd\x0015ã\x0006uI«TQI9\x001biU\x0014¶a¡<$¤ZùKB+úø½]MëàØîù!ÝòÝÔsjdQaQ\x0004?­±QÞ­\x000c'ø\x0016%Y:©ECæM+Ø­À½àÒüm\x000ca2F\x0014¶aYÁn\x000eNÊenq\x001c'ä `Àncd´(`7.Ñ\x000bi©2h^×Jòd<\x0002ºVÆÆSP\x001e¦xhÉwO÷d"ñ`"ÀH¼±ÞL\x0013(\x000e§¨\x0012QmS\x0005\x0007·2	ÛGÜ¶Àh|i\x001cOù\x0007'Fº\x0007§E
y\x001fÍèào¶ø\x0005Â{kdRðÒ´¤à\x0007ñVá]y¡^äè`c¤±Ò¸Ø¸D4\x0008¼Ó¡»LÓJÎ¼:ÙÓÁÓaPS+Ù¯I6í6m6IJ¤MS¥M#¥M\x0003¥M	Ò¦XiS¸´)Lê)s)d.2'\&Id"\x0019#\x0003g+ÿ&Vøö(D$ Ò
F@á\x001f\x000c`È\x0018\x0018\x000bV\x000f6ÉÎ\x001bA²­\x0007t]ÌY¯æ)[\x001cGV¬\x001cA¬îÙ?Â×\x0012Ý*ås­b³­ÒÓ\x000bZ\x0008YU\+³\x0014=_ÐJxõp°î\x0006BøW\x0006Øà];Üw¸û0·Ô=@\x001dcO¾±]SöÄú×!Ôà1*X¶KWK\x0005n\x001er(·Ià6Q®o uMv^uK`¡5I øÀB²=}§f°î\x0016)³ôx\x0017Y×ûZ\x0017\x0016s\f§}A(*Ö\x000bO­ÞºS©Ï´j\Kú¼\x001eç	ÅéÊÌ\x0016_Ð2O£ÏÜ®IÏRj3\x000bwC\x000e)nYÕMÜ²Nq»!\x0014ÿ±ÇVR,t\x0019#HÌYÕÄUBq q q 1GC%f\x0019\x0001XÐ"\x00118Ùés;ã(Ç±(
\x0008)\x001cá­0
£\x00033$ÄwAÀk"á:G\ûðsÔ\x0019o¡(>=>](Â\x0011\X{ï!!\x0001¯\x0017ìE
d»)G@lMìmÉ,$ðÍ2d
7j²?À,Üæ\x001e\x0014[\x0018\x000bâ{ Q<\x000eñîÇ>&\x001cNùSö»­£¿(
ÊYüÂ×i;ì·-iñÌu/YÆÂ\x001bp	ö\x0018\x0008\x0007ø\x000fA\x0007\x0005L\x001d\x0003ÆÂ#°\x000b\x000eÀ×xd+Á\x0010÷'óã\x0015xly\x0010!UäÏïqp^æ
Þxê\x001cL \x0001/(gÉ0\x0006\x000fIñ0\x0004·¤Ë \x001aq\x0012ò¯\x0014,!xØº\x0007¥?\x0006OÁ>x\x001fN\x001fö\x0000Ç\ã÷@\x0006\x001eMt0\x000fvÃ×â\x0011âåà\x0001ÿÁf8\x0008ÿ!	d\x0013ùýßÉ\x001fá¿ÇVÑxB\x0019\x0008Ó72àQø'Öû\x0017üQ²\x001by~\x001eÿ\x0002ÿ.ï3a+Z}\x0010ÞBYW	G¦\x0010\x001dó<[ßñ\x001b_Åo¥;R/A{¼ÒÑ\x001c°ÀsXó\x0018Ü \x000ex5à:9Ñu¸ñ>ÂLÁ³v,ê7\x0019*a\x0001,hÅ:X\x000f¯Ày2£ä\x0007ÆYÈì\x0017OæHs\x001cö·Æâ¯
o
A\x0008j;\x0015fãzð\x0004¬ÁÿDYðº\x0004íd \x0019B1$<B\x0016çÈ¯L,s¹Áº°®l\x001c[È\x0016±óÙÓìu¸}BÇÚ\x000fùü\x001cô%.GèÏpôZ&äÃ\x000c0\x0019ê`>,DíVáÕÞÛ\x0015ý¹\x001f¯7á+8×Y8\x000f\x0017\x0008CÄh£Äà¥Æk\x0008Ñ±d2IÊ¬%¯V²¼E¾#þÌ@&Àä2e±0Miaö3mÌ/¨å`65³\x000f°[Ù7ØwÙÙ/0êÇ´"¨FôÈ*úLtItYÔ!\x0006±\x0012¯\x0004±VÜÜ¾¡#»c:\x001fÁ\x000fáù|\x0013^çÑÇAÂÛL\x0010öLÄQÕ	oÕ U&¸\x000f¯zôÝÃhÑ\x001ax\x0016}'xïUh×1Jß\x0010Þ¡\x000fá\x000b´ï+8-¼%Î\x0011ìó"!$$¢QxMÃqª%óÉB²¬C?·x\x001d _¢\x001dhá\x0014¦¹©eæ3+µÌSÌnæ\x0000s\x000cGg%8\x0012¾ì(6ÊNgïe-ì\x001aö	öIöYv=ÛÊ\x001e`ß\x00161¢Á¢¢jÑ¢&Ñ\x0006Ñ+¢wD¾\x0014«ÅCÄxYÅ;Å{Åg%î\x0000II¤U*ÕËÎÉ:`;¼\x0003-°óö#\x0013YJ\x0014¤\x0005^"çX\x0011»9Â\x00140Ì1Ò úDâ\x0008¤\x0011\x0010¯*ø\x00195\x000c$\x001f3ÈTVG¦¡ÿ\x001aH)\x000eÏ°ýØ
ìX8"®"yìDR\x0002y¢µpSü&hÅÌ6\x00117²íä:³\x0015Êa\x00153»}3_H\ lbÇ¹\x001fÒ Zä\x000fÇTÑn\x0012ÎD3û¥/V\x0018&°©ì`+æ6±gPÍ<+ù\x000e´ìi?§pnå2Ïãp|)Úµ³¯`ûa\x0018ÙÔá\x0006ÅL\x0011éÇl"ãÚ\x001flÿ}_OüÓ\x0000íníéL\x0006FÜd~\x000b³\x000f~µ\x001d×EßÀ>æ\x0004LÆUCGgÎÏ8÷êp¥\x00027\x0019gOy¸pm*Ããe\x0019Y! T§=±HÇ\"Ö±,ãï \x0015é\x0008øÉ¢S|cs\x0014ÓÆ·§å(®¦W´§Áð´ö4áNT'»¸¸à&Ç\x001e¸©\x0011Ã
àD\x0007èëÈ|\x001bÆõÔ	|aÐ. Î\x001eR\x001c¡V²`w¢ÂÑ¿\x0004jäý\x0013Eý=fúéWøÆ*®¶µ·µÁðö«iÃ{jj¢ÚCÉF\x000cè?09	\x000f¨R\x000fO2Ô}(¢@2B¥N\x00173é	ñééñ	é¤\x001dà1nÜ8¿\x001bo&¤§'$h4¶×¢ñøë½\x0014çýfÍ¸\x0014HaFÊE­ §ÉÇÉgÈ+äóå\x0012ÉÔA.:AÆ°N"G<\x0004\x0002å\x0012O¹\B\x0018
\x0013$	H\x0003e\x000e\x000e\x00121:LÞÊXvhD¬Üi?s\x001fîf^ÂÕN('×·;
óS\nó¿xÑ\x0017=æqxZZZª
Ý&^\x0010»äþCK\x0012|\x0007qO\x0015.áOj¸ÜC<${C\x0008{fsIûÞòö=å[çÛ\x001f"ÃÙýdåo;Äã:Ìºö Û©_ò!Z¨ãøQª©ªZÕbÈU\x0019ä\x0010\x001a\x001a¬\x000cò\x000b
W\x0006E2Ê Y¨R¡\x000cò
UrÊ Pe+ÿ]> â|\x0013TªVbÔh||=}||½±ÏH\x001fo$½½Ñ*\x001f/ç\x0013Ï$ø\x0010ÖÏ×ÛQEF8àNOõ\x0019äù$úøøs	ñÁÜ\x0011WÂ\x0008È\x0015®~êÄ#!é;q\x0007CC\x0007£F,}æY ³ ø"-M@Ta¨ÝRÝ\x0004'¸¥vsMç\x000e,QMî	!n>ÞÉÉ^!\x0003\x0006
\x001càÖ?B©\x001c\x0010BH2T*ñº­°aí\x0003Â'ª;¢ÔSÂ¼s¦ùâúu´ª©aÞýÂ'ªÚ\x000f¨§*½Û¯Ì7çÜ\x001f\x001c\x0013\x001eÞ«fk-¹á7Nhæfã-ö\x001bËl\x0011}+H4\x000c\x001aMÐÜ\x0018\x0012\x001dÛ\x000f\x0017Í\x0018Ø
pN	`\x0011«CÃ®­$Dãì$#ê$¥c*:É©Hw%/å®Dø%q{«qWEø¥¤^	)§\x001añòEEûÅ¶\x001cÁM0|üÅá\x0017/*ÒÒÜ¨|Ri\DDFØfð
N\x0007ÌFF(C%^Þ>Þ\x0002\x000flSd Dà%'¡fX´F%¬²fãÞY#\x0012Ã½Ýüæ©43g½z.7·ãÛ}/~{ïë<ýÌÓ¥ó«BýÙÊûæ
È©\x001d\x001d?,T-w]ìî3>!®²rYmí£\x001d'/Y
ï5HüßÜµkÿ»ëò\x001eUQÏtÄÓ3=
^ÔD\x0005i\x0002½É  0lº³40ÉËQä\x0012ãÃ-u»êÀ6\x0011â\x0017%jJ9øE·\x0012U8ñ1F.¶¡©6´\x001fM§¶»	\x000b@F½&.(Rî\x0019\x0011î\x001a\x001e\x001aá\x0011\x0011î\x0014\x0015\x000er¥\x000b\x0017N<\x0011"\x001dÃÂI\x0002!Ø=0\x001c0ZHl¬"ÆÍ¢E0&¿^ãîÝ/ Â'Üß7pµ¨·ßjÔ`
¡î¢A¸®(\x0007Òx\x001ad÷ªºõô¶{/Æ×áà­^\x0012yCÃÛ§k§\x001bW4"n`bCÞý/Ï~~9)xPÍµ5QeÌ¢\x000f\x001ezpÃõÛ×¾íëF¦/«È>´ùãå\x0003^µ}gù	s}\x0019\x001c!d7°dÆÅA
þÎ\x0012?'ç\x001fCõ"6§MAG\x001e#¾ËbÇ8¶öcÇX{I·=ðO&ÛU\x000bçþ\x001b\x0017yên.&êO®=Ëuúë¢\x001bþLí­o]g@ç÷ÔÂ\x001eSo§\x0019üÜyØN³¸rÌ°Ó¢.uÄø\x0019¹ÂNãç\x0010<a§e¸o¶Ó\x000e¸\x001fÞn§åOí´#$ËvÚ	\x0008;íLÖ2vÚ\x0005\x0012ØKÂ·ë"\ÀI\x0014Di±ð\x001bQ\x0002¥%?ÒRÊ\x001fKi\x0019¥§QZxñ©U4ËN\x0013p\x0012÷·Ó\x000c¸-v\q¨\x0016u©#\x0006_qB¼ÎNË B¼ÅN;À\x0008ñvZÎh$îvÚ\x0011Jd¹vÚ	Je¯Úig¦Í¡v\x0019N@iy\x0017\x001bÄ\x0014N3(íÔï"ÐN\x0015V\x0008ú;Í§´\x0007ÒîNöìRßúÁF{wáûÑ¶OS:Ê²õ\x0019Ø¥Np\x0017:Ö·Ù\x001bOéVuÑYÖ¥§.|'»þùõ&}©V§ç6sùåzn¼±ÊhA\x0016a¬6\x0019«µ\x0016±3Uè\x0012¸L­EûgÒ+*¸\CY¹ÅÌåêÍúêZ}Ig½ÁyõÅÆ
np­¾Ú,ÔML\x0018¤æ¢Æ\x001btÕF³±Ô\x0012«/«©ÐVO±\x0017\x000fHP«mMÆçß\x001aËªµ¦òú®,=Y­­3Tq\x0013JK
hFbjJj~¹ÁÌ\x001a«,\x000eAk¨2sùJ½ËÑ×q¹ÆJm\x00157ªZ¯Íé´&E[aæ´U%\±N_­Óõq\©¡¬¦Zoc\x0017kÍ\x0006\x001dgª©ÒYjlZezK¹¾«3XÊ9-
©¨Ðëh±«Ôb\x0019A§­àÌ²*[7eú*}5rL5è2³hàtåÚj­ÎF'pÜdä\x001a«9³Þb\x0011ÌéÖÐYgÐWY\x000ch$Wg¬MyZ3\x0015_iª@óÐ\ÃVúNpA
V2Tqf\x000bÖÖVP§\x0013Ê-\x0016Ó`ª®®.¡ÒîË\x0004ìEUn©¬PUZ\x001fõ©*Í3mÝ$\x0008Ü>¶¨ÓW WOäLÈ\x001f3rLFzþ	9ÜÜ¸1\x0019Y9yY\ú¨Ü¬¬ñY9ùÎrgy*\x0015\x001akÐ\x001dõ\
ºÈrkhÑv¾ºÒ`±èqê©áYÇ¥S/
\x0019Sµ±¤Fg\x0011ì¯+7èÊ»´Å§¡JWQSMÑg%\x0006³©\x0002\x0005\x0008.5U\x001bìq\x000eÅqé\x0014n¬ª¨ç¢\x000cÑ¾²Xhõ{_Uµ{TV/\x0011F\x0014\x0003ÊRm qÒE<6¿Õ×\x0010ªA\x0001¥XôÂÌª6 Ô\x0012c]UQÛU(*­µ©aö\x001ai<\x001ak,¦\x001a\x000bW¢¯\x0015f\x0002Ö)×Wn³èOGRÈ©*°qÙ6\x0003F¨J<çUàY²\x001esÅPOñ³f\x0016æ¿\x0015~Cs«<\x000f,ø¬\x0012Äj(a×±-ì^v?Þ»Ù×Ø\x0017!\x001fÛßê`¹\x000e\x001clÆ;\x001fO¿\x0002=\x001e{\x0012z³ØkqAû6QÔ"ß@kpÈ©Àö	HeR¾ö/÷.ü\x001e\x0008¹È)ÃÖ\x00160Ó\x001ez¬[Xòþ\x0006£¥õhs1òÖi½jlÓÙo"j7\x0008ÔHEak\x0003j[%f¼K±h*¡\x000cj°µà©)·µ\x001e­Õxu2\x001e­û£]6\x001a±¯jz\x0012/Çüjé©¿zu(©
Ûp0\x0001õ)¥úé©Ö©·àG\x0003õD)íËÎNii[3íÕÚé)Ï:ê9#\x0005ÁQ(K×lÚZÐÎ@ÛWÐ\x0016¶8á0gÄýB\x001dÁëqT®ú§ÚÞgíbZGÐW\x001aäê°Ïncj¡þÐã³öËQ{\x001cG#EGýYeº.­á¨î¶vö>uTcJ-³[Þ© ¥Ê°Õ1QMt¤\x0005NÄ6¼r:ÊZ*Ï6ÒBìr0Ù^¯Æ%Gs\x0016*Õ6:wÖ¦S\x00033r\x000cT\x000b¡´Ôî:Úßì.õ´v½mÖWÒ\x0019d\x001b=Ûè
>ãì²^»Î(¨±÷d Þ2wé]"E°­ZaÂy¡Â«^	Øc÷¸L°ë¢¢õ+Q
Ñu´T3!gÝ´I¸U÷ï!D`½®¾\x001c!ù0\x0006Fâ«@O@®0sF"£ü,ää!
ëÉ(\x0003Yx§Ü|p\x00069½\x000b©\x000fmcZÏ\x001aûØ[zk¶Ñ2ÑX©¤±k¡ë\x0010ÿõ]Æ)\x000b#h\x001cÊü=:KLt½)A):Ú£mÔê¨,\x001d	=Éµå
tVU`Û\x0012»T[tÐr\x0013]³ê»Ä ËpÛ*a+[ßn¹P£RQØ.\x001az:¾²zÒ«ê\x000f}÷ÝK¿÷^rkfÙÖ\x0015\x000bÕü÷U gë
öUåv½tñ`Í\x0016\x000b×ùI#ôo³µ®sUt½ÓÞÑR§µÝ¼j[Ãvü}U\x0013¼j¡kö¯ÇO¡ÎÜÖO9jS/cô×gRg®&:Ú£ù¶ùÓ¹;ÐÒ:ùSt7¡ï¶»ÐwÛ?ÐuE\x0014$J\x0014eF"¦bm-Ú(xOÐ,]ø.]V¬íÐÌÜñçé,}óÉ\x001d\x0008ÏÓÚ^ô\x001d ¼\x0014iI9 MÝ\x0010"qY<zñ5g"e\x001b\x0002¢\x0015Î\x0010è¨vc]XÆ_\x000cj­D\x001e+!"Ò0!¢æ<õ$u\\x0017N¿
A\x000bû	?ÇÆk\x0002\x0006 .`zêøaÂ¥\x000eéÒÈó½Q#âÇ
<vÿìXÿW¶=\x001bõïYÍ
^'Õ
ì!¼ãY0bÔ~¿ÇO®Ì\x001dqíDåhçÄMjç[ª\x00121*µh9U,x0ÓÒ\x0013½Ô\x001eBFæá4\x0015·úê*.CkÒ'zªÝ\x0005¶ÔÃ1³¦ºX[UkÀ#L¢+ö\¹$¿\[gÑ'\x0006ª\x0003\x0004£§Áeè«é\x0011\x001e\x0012ÕB1ëám/¦§,¶Ò$ìw3ÒÕA>ÎêäÄ$u5MÓ|\x0013lrRòÔ\x0001©ÓÔy]è£ö²ÉwÁ !\x000fÏNqÜ*]Bb¬:Ú&(´³âò:eåáy\x0013·­fAh\x0003	íê\x0015"\x0006¶¸\x0002òåL\x0003!°ùð¶MGr¯Èï_öâK;r~:yÐuvïÆ~_ì¹~8yëCêe\x0005\x000bVýÕÀg]÷taÎÏuÏ/0¦í_ýókå+\x001e;¼77~ëè¡W^ýì\x0001ÌúßT³6]Û¸îyÿwS\x000fË=ãRtAÓoÁnç¯¿³ãä½3çÎJL`\äñÂ(îýD³óÔø£sú'?îþ¤ûî¯ËU[Îy£qEÌËCî}°`ª±fÚ%÷\x001cVx¥­è»üòªC\x001doýj·Ômmèü\x0013Ã"?
sa}â{?
õ;qhû¨uþ3Úî½òÃüîßZL\x001e¹2Þñë\x000fC§¼ðøÑÖ¾üÃkÎ¿´?Þ|£¼ùeÏ!Û\x001cÜÃ°\x0018ø\x001b\x0017P/ú\Ý_"Ã\x0015¥¢Ô\x0011ê°Î¼,öµ\x001f\x0015:³)\x0001Oî\x0006á0+\x0015hì\x0004z\x0010Âdj	>\x0018\x0002êt\x0017,\x001a¬NQ\x000flîß´Xmo®«®èÖZe®¡µh¤\x0006ÔòN-XÚE`º
²W\x0008%¨!æÝD\x0018üÔ>ñÍz8åç¥c ¥Ä'Æ\x000fH¾mV°\x0016ÁØÙ×¿+x#³_â²ú'c×ìox\x001cë7î¨µ± ê¤,zã½ï\x001e^íqNëüã¨H\x0015¤XÛÞ[³îÓÐb¯kÃ\x0007L0%.üiyÊíçÏ¯\x000f&¯É	ûxsdÎÜwiÓyÿÜ{ÇïýjOìÃÃv>³óø©©ü¾\x001do-¸òÓ³ÖvÄ~2$7  %òÚð±8yu\x0003sÎ>¿½ôéçÑK}Ä\x000e÷®«]zû<þ¯Ì?NGuJ×é8µBUêxÐÞ
eúê^§ä¶Q£¿ú¤|îC¾¥5÷,8Ôº^\x0017Á\x000fÍxz¾["|²ùxM¤¡=g77ã\x0013ùõæ§h?\x000f:Ñözòìw~üjã ýªÕN¯æ\x0005Í_:`¦¸1«£6çdÞÂ
¸g^^:cìÚÔ×\x0008\x001d4nüýo\x0007\x001f:6ùÛEÃwænÛBæþ¼aËÊ\x0001\x001dëÏÞ3K¼~èì3û×\x001cè8Rt]sNÚùý¢IUÏÅüüj£"êâ#_J\x0017O\7o¬ÌY\x001dxXñììkß\x0016¼,Ú¬yr[ÔùG¼_L;gÌþdÀ3;%Û×Äí\x0019z®þûÊ¹×½ÏF¼ôÊOæíÒÄ=ÞZ¿¥ãÓÜ­Ñ\x0005#.¤\x0006må}¶pOXùç°0C±dálû<¬^ôÎ_N·¦$GÇdÛdSÇ¨£#Ã\x0016Þi2ZÌæxN?o:ý.þd\x0006J\x000eôi\x0006ö¿}\x0006
£¼dé\ÂMÿ¦þ½\x0006õ¡öÝ~köþ\x0003ÞÜ{ôèÛ]>ç¯?\¬v{ë%àÓG¿ù4çÑ2?kßÄ£\x000f[èóà¿"Wy¼q¸õtöÈS¦?ðñ\x0001a	?\x001bVV^ÛsØûñN\x0003åuÇ¿²xÉAsÓ¯Ë,s[7>1omËµG¢ï\x001bP\x00130:ýK;¹ücuÍk\x001btv\x000f\x001a/Õìqxêøu·É\x0011ë´Iûæ2Öy÷mxsyhÜ\x0006Ô¾þ¨yÆõÝgÇyÉGÚ>þ´Â\x0018WkÑÜ°·+ýqÍ\x0007¦ï»ì¼àËæo¬½Ïpðé	£Ô\x0003BZ6¼â_\x0016{|Õ\x0018é¼Ï}·Ïwúç\x001diË^R7Üq	øÍ¶\x0004¸ÂAX¶Ôí£aWu\x0017NjºzL+©snÿ¿êÍ3¬lã		\x001d/\x0010TIh*¨L Ð¥HY¤ª\x0014\x0010¤( "Í\x0002	HSDÔP¥\x0004¤#E ¢\x0014éM\x0014Á+°à^:"J]\x0015\x0000\x0002{Õg?íÝg?å9s23çÌyÏïüÿïaå\x0012Õôô
ð¦åVáûpûáH\x0005\x00054|+yº=Ü\x0003\x0008müç5éY$\x0002\x0010Ù\x0018&¾íz¬§§\x000f\ý¼§·«O\x0000
\x000f
h\x0000\x0004\x0000ô&\x001ed\x0001¤¬\x001cr³ø7´èOrº'µ^cJsûÒâýí©¼hVIÇ2)«)\x0019pÕ&\x0019É\x00191ö²î/4\x0002f
}[ÌúæÞÝ	\x0013I\x000bu.kp\x000ft\x0014ë\x0015V\x001ed\x0007ß«¯>èä"Ø¥x ­ÜJ²V{E\x0015\x0013w oBî´^Æp(ûã¤Óæ\x000eÄdû~Ç&\x0013\x001f8)%\x0019\x000b!Ä¹ÓòÆc¥ùÆT\x0012pÜöVôø4a46ü÷\x000f·é\x001a\x0005»«ÍE\x0006W+NÝ6,ZÉ	<ãcXÌ×\x001eÇ¼\x000f\x0001²¼aï~¬\x000fcT¶X³^¾ëÌÂý`aù¡BÉà\x0007í[zZ\x0014LZ-é\x0008êÍ\x0011ð¶Qn­úÈ)
1\i)ûq]\x0019ÚäF.@È\x0002\x0008\x0019´y	\x0012\x0000B|0u×\x0007WïT1ËÜ÷
®¯µ½ÿÿãGü\x0018_§\x0002iµ&z>ïðûJ°ø¿ý8çmìeÓRYÛTéc#bZ\x0014Ç\x0010s\x001f-o\x001d(O×ivüðõu»Ò<y3×Uñ3j-íùô\x0017EF«¤qx¹=^\x0019ñ¹Ö|íÒ\x001cæ<\x00017r¼PÏß,8ø\x0014OEI°ã27\x0013úhéåÇ\x0016zhÊ2®\x0010w\x001a=uzÉÒYlÓñzà+\x001cÉ\x001c!LÚ/`Ð#L5\x001bü\x0016òÀz¡ô×fË\x0019¼^\x0013Ö¬â\x0001d\x001flíFïG¦Ëñ
\x0005è\x0003##¹~Ã¾é .7µÚòQoÕa¹Ý\x0004Ýú\x000fÿöJ\x0008:{\x0014Ú|B\x000eãa ´ËÂq­»ÇLM»CÈ<Û«\x001f¦\x0018~ë|ZÎËt*\x0015QÅAñ¦0pcM4ª\x0001	\x0017pöÕÓ÷>úf\x0012ÿ.$\x0000òT½B¢Q($&à©ÿ\x0004Bö\x001f%\x0003\x0017À¹a7X,\x001dÎ¹P¥\x000fõ>\x001cëK\x0008Õl0bñNg<=¾µåg-ûY7e©7ý®b\x0000b£\x001b\x0002;kðëâ¦F×M\x0001ü{ì¢i$ÏÚáÑUCkªÆ3u¯Ä%|;\x0011k\x001dR\x0016­w(Äû\x0003\x000eêszp-¬¥ÉÚÚÞÒkq\x0019_Ø+Ø¤wÄÆ'\x001c
¹53î¡×M\x0005\x001f\x001bq\x0002GÖò¾"ºøk-Â0Ë8·_T\x001e¢KpbJg t\x0016Ü´\x0017÷Û#Ú¦Á¿Ç¤\x0002ÔÙÅÕÈ¯váÌ\x001c	¡uRã}MK¢\x0013¼²\x0016õ5CkìÂ}aÊìÁ\x0005òP2}Õ
©n¹\l5>2}<@¢àw)\x0019N5¿ªFPËÈeQÝc¿Ü¬÷×ÂêB#o%×º0Å¼\x001c\x0006¹´xVY:Ç9¡}èà¤é\x0004ØQºøEeXñl¸°$Ö³\x001a{L"Xú<$¤Ã!ÿ\x000c¼À\x00187
8\x000f/t\x0010\x0008\x0008ºnQÿ\x0005årK|Ö·mö6»7º.µw¹ö³)\x0001àß:\x000eÊ¶\x0005d
:Oµë uu]ø¬û\x000em}K`Ñ\x0003\x0010êÏy¹1ÜðÛyúÊ)VVÔ\x000b"R5Òñh\x000fSÎg\x0007|ó!È\x0017®úóò¹½!ÝÃ
\x0016¦¹åüíc³é-*toëæ\x000c\x0004¾Zâ
õÏß\x0010f²-»rãá5«ÇBí¤nÒm¹ØÁµd;}=c\x0005IE¸ \x0019úë%\x001b[Ï\x0006®tÀ*2¾wþ\x00100\x001dÓiÃøôÒ\x0003ð!É¢ÕfXEcF{ãÉ«^ó­ý\x0005D\x000fÆ\x0001<ÿÃÜ¥°:fYÉB×ÀÒZé\x0012g¬âp&÷x®Ê\x0012ùÄ=ô\ÌB@õ\x0011â5Ýê\x0008\x0013*¶\x001e
ä|d§Ì½U{3Â\x0010zÞ¦éyoÞß.Åúï]~à\x0015Ã gUj'ÅÉ\x000e\x0010éå¨(\x0013ÜÀ\x0018vj\x001bí½k\x0010þ»\x000cÅ?\x0005\x0019ÛìS@É¡äin	MÕFÔâaZ\x0011ðùKú±Y\x000fùIýJ¢\x000eB\x001c¦È&c®vh°«\x0014Ý«"rõmØ!Û¥Þ\x0005\x0011nå}¥¢\x0017X³ôcíD¹&?/¥/xø\x0016}¹«ÜT_sÜF­ ìd¶#Á!ì¸à\x0011Aêòøµ)íå]\x0013N_G^Qxr\x001cod-¡KËy´ß"õHë×\x0001_ñCZ\x0000h´÷Ò\x0005\x0012gpæ\x0011kKÄ@F¯iâéV\k¢[ÒM»c\x0006\x00132ÝÖÖv'±ç\x000ef=\x000e=ºë\x001a?o\x001bS_R¶\x0017ÏÁ´ëí}÷÷ûMÐ«Úz<·\x0013J\x0016\î¾\x001ed>{Ê'Õïð\x0015÷ø©ñGÛßÝõ\x0002\x0007ºu\x0001põ\x0001×²®Ù!ÄL½Ã\x000cZSåÙ$"oRÈõï¼Ë6\x000cfÞ¸ç7í0\x00114ägØy§àùí/vT\x000cJ \x0003Ôà\x001fRìs÷ïàß÷bAÃøi\x0001\x001aÀtÕtå0Å\x001dÆïÌ·ë¬;?/wWÚQÍmòs2´	@jìË®\x001bB£\x001dNT\x0013P\x0007Ô¶(]ÜÎ}äï¯÷þþ>?ò7\x001fHd\x0004n[3\x000f×!ºæñ²åî:{2\x0005Af»úd+>¹íZF\x0008ø©f¹\x0004> ]²Ó¬\x000fIÆ_06¹Hä^\x000c9÷:ã©M+W§äéÝUXî¬È\x001aÊ\x0008¹|>%ö¬`\x0005È¢üS¨dÜr¯D ]R_öòÂº@¡¹ö=ÝX\x000c\x0015³Þì<2\¤
zÝ\x001aL²tÙ¢\x0012¼©Ííbâ@WXF
½°\x000e;Õº\x001f>V£hº\x000fÃgV].5¿OÖ­Â?5E½i`ÀA\x0019ü=×t\x001f'Oi\x0008ï¿Ç\x0012¼x¼áÀÈhõ/£²\x00013¢Wn²\x001d,3¶n¬;beUð²cX¦¶cúL\x001a:\x0000I¶Q±ÙD\x0007\x0006\x0003ò\x000c\x001cÿ\x0000øí4v:a\x0002àÞZP÷\x0010úõd;mÝ\x001czf\x0008mgæÚôí\x0012+ò_ÀÎZ\x001e@lûD(:o%\x0007÷v|±\x0002_ÛÿJW\x0006­k]{x\x000cðÞq
\x001bÒ	pLÇ\x0004Ëÿ`ç\x001d\x000eÒÞÚkùÉ®;Y2Xü§±í³õ\x000eÒÿªI(\x0011\x000cjå÷Þ]Ôö5 <±DT_:%¡="ù\x001ex!ÈE ]®\x001cÑã¶7¦NÍ0~¬7 \x0003U\x001eÍZ\x0003Q#ÏAd\x0013B]n`Ã\x0015=M\x0013²=BY«à\x001a\x000fbü(\x0017\x0019~yËßö®¶8ãù¢qj\x0004L9-\x001e\x0011Úl:m9"\x000c&)qr­Në¥°½ªªLl\x0015\x000c¡t^õ:9wqÉµ÷t?BÔ©G\x001am¢]8­3p\x0013SÃQZàÕ\x0011\x0014I\x0011yùK\x0004ÐZ1_mýÅI/\x00044Ã2úL°!Zd&A-HIºSÚàÝyó¾Nù\x0011faxê-$ÿk«J\x001eaðxMI\x0014¥Q3÷ÊÕ8Ê\x001eú*\x0014L¤Ê""xy{Ä\x0018Dð4õÐ\x0004-¼Oý%IÍ\x001f¤RÙ\x00186\x001a@G¥Lúqogì±noí©¡·UCd§­÷Ô\x0005^Vöm;ê\x0004¿;B\x000f\x0006å0L\x0014¥\x000fJE	Ù\x0003#Wãz\x0010\x0002î¦Zºo»\x000ei¶­Øz\x0018ô$½×¨¿£D±ô?fï¯¿÷J¹ù±\x001e\x001eÍÐ/^ê::õÃW»\x001b\x001e­½¯{Ù´f	\x000eñ/ìG\x0004¹¢\x001e©Ëä¨\x0006>8B§¾Ò\x001b
TºÞY\x001aæ5'&È4áîWcë\x0006~d!¯ÔÑÍ/÷j:ô1@<Wõ\x0013RgC«Ð÷ái\x0015cÃÕõãh ^oåâþ9ÑsC@Ú=©ñ0>$\x0005Þ\x0010Yg¬©2St3\x0003©êäGI%
\x0002YSN\x000eÙæli\x0004{¡þàëµ\x0010,\x0011¿t;\x0006\x0002åÝ/>ûín¾ÁqE­ôTgd\x000e\x0016'¶º¬p"Å6\x0018xn¦2SB\x000fé\x001f¸ñ_AO
endstream
endobj
87 0 obj
[ 0[ 600]  120[ 460] ] 
endobj
88 0 obj
[ 278] 
endobj
89 0 obj
[ 226] 
endobj
90 0 obj
<</Filter/FlateDecode/Length 77077/Length1 169476>>
stream
xì]	xÕ¹>ç}K&!		\x0003Ì\x001f@BÂnXlì[\x0018L\x0000!É$\x0019ÉædB\x0000A#¸Ð»¨UÔªU\Á%î(nµnµ¶Z­\x0016[Ûj\x0015«u©E!÷=ÿ7'\x0004\\x001eïs{k{ïwÞ÷|ç;ßö´#0Î\x0018KÇ-.­Sñeç§Ã²q\x0013c®me³J\x0015J¾±ª\x0018ãOÍ_rUc¹±\x000bó\x0018SÆTÿyÿ'_1eÝvÆt\x001fV,^T\x0019ªº±KTÆ¯±WTúf=ùÖ\x001fzRTÀXÅêEEãþñÎýë\x0011ë5¼µ&ÐìoK»mÀû"ÞÝu\x00115zõ\x0013/3vÒ\x000eÆ\x000cëÛ\x001a?ÿ|±QuY\x00065øÛÛØ`æÁû3QßÙÐ´¡¾à÷_ÂØªÛáÿrcÐ_÷§#'"þ*OjÁqñuä/E~xcsd}Ö\x0016Ý\x0014¼«±uká\x0016>ÃX×3(Ïlj
ø\x0017´à0cµ]
-oö¯oË\x001e=\x001cmá=(W[üÍÁÜuK>ÿ\x0001Æ2ÚZÛ#½.ú\x0017|!ÊÛÂÁ¶µw)G\x0018\x001búÃL­áÚåû»\x001bÖ$OûeH\x000f¾¿é9ÁO\x000e»rã\x000egùÀt/²\x0016¦0J¨gdG\x0018ÂºëËCvY>Ð"õKºÂ<-b\x0006Í 0'+bAÆRvà½>ï@©Ù°Ó0\x001e!\x0012ë^bç(ÌÌd¢(z¢)½^v{¯Ö\x0002¤\x0005ªÊ¼\x0010»¨
¦k\LçuZÐû\x000cI¢§t´5üEöÿ>\x0019_e·ÿÐmH¤Dú¿ô\x0013XÍ\x000fÝDú'åY¶ónC"%R"%R"%Ò¿*)Wsë\x000fÝÿ´¤ÈÎû¡ÛHHHHHHHHHHHô/Nº8\x0006Ç¿\x0015\x0016F\x000eJYÍôl9òN<:­ÄÁ±\x0005¬\x000e\x001e»z{ã\x0016µ÷~ÆXïßÙ½|Po \x001eÍÞÿMº¹º+ å>>þ[hÈ+ñï¬)ì»\x0013ï\x0017ï#þwù ï(Ûþ?mÊ¿8éþ©ÑþWV·¢nÍêW­\Q]å[V¹tÉâE\x000b\x0017Ì7wÎìò²ÒY3½3¦8mêÉÅ'LXT8º /7g¸g;3-Åì°Y-fÑ ×)\x0015yÊkÔhnMTë={´È{ü0øû\x0019j¢*LåÇúDÕ\x001aÍM=ÖÓ\x000bÏúã<½äéíóäNu\x001a6º@-ó¨ÑçK=j\x000f_±¤
úüROµ\x001a=¨é\x0005Öçj\x0019\x00072ÙÙ¨¡e6ªQ^£EË×5vÕ"Þ\x001eµÄS\x0012´.`{¬6H\x001bT4ÏÓ¶çMçPòÊ¦ìQÙ!^\x001bÕåùë¢Tº²³«5\x001b+ÑbE%Q\x0016K
6³óÔ=\x0005ûº·÷8YmM¾½ÎSç_U\x0015ÕùQ©[WÖÝ}n4%?:ÒS\x001a\x001d¹ñLt9\x0018-ðEó=\x00086oiß\x000bxÔãô¨Ý14Þsðc-þ¸Åãü	)ºØ7L(¡mh!ú-Úr^Õ"\x0013íZREyÕºbÌ[_\x001dUjDÉ>Yî\x0013%]²¤¯z'[LUYMüÏºÆÌhW­:º\x0000£¯ýÉÁ\x001f«Q]nMm Q°?Øí)-¥q[V\x0015õBxýñ¾í\x0019S\x0004
:\x0011\x0012Ã°¤*Zäi¦yf\x0003\x000cªPeV%^-V\x0012e5x­hQY©hZÖ]SJ
\x0014±<Kªîgã{\x000fì ºög\x0013XµhG4£\x0004[Ö]UW\x001fu×¸ê°>ëÕ*WvÔ[á«öT\x0005«Å,yÑ\x0007ðºlíZ-ôí8oé,znÊ1«UKW-f\x000b\x0006µ\x001c\x001fYÓPàÄtiY1£³¦©UÜÅ¤\x001bÞ\x0012÷\x0010ê8ÈèrJf"¨Z2Û]Mé;ä·É\x00135÷å¡¯Môom\x001ay\x0006TË¥ý\x001axLPC¼ñhßÜNEEüÅ¨a\x0016Ó9[\x0016ér°saS\x0010F3YÌT£l±Zå	zª=XCÞÅU¢ob¬µùWé·dE6ÛñU²ì\x001c\x0017S.Ê²Q,3J	Ö`y¾KN«¯Ðò}ÙÙÇ\x0015ÏÅj·Ù3¯²[\x0004÷Ä\x00032\x0015;\x00086æÎñW:\x0001[³\x001c§§ÜïQjy·¿§·«¶{×ÛÝVVÓ8EÄðÌ©ëöTVMsim]ZµÙµQ¼*ÍãóÍ\x001a]³gÖ\x001e\x000fß¶do«\Qu¿1uÛ²ªÂYÕ{£¬ê~1¯fUU\x0018EF\x0015\x0019\x0011i)2fÍßu¿±.­T¯\x0019´| 3Íf6Î\x0002=
ÙÒ¦À¦'W³IÊlÄ\x0010ã¸-SëÄôlªnì®©\x0016e`*ñG¹g:*é{¸b´G­à¬¨Í3KØg\x0008û\x000c²\x001bÝÁ38\x0006GIÝ5\x001eSXPUÌÅi)êDHµ§·wYUöó®ÕÙXj«\x0015UQK>Î~CÎ\øU\x0008ÔÀ\\x0011í
øE;¯JÔ5åÌ	TcÙÊp\x0013µ %\x001e\x0001\x001eåZ\x001d±\x001cQ)¹Á\x0004jõ»vUG«óÅK«BÕÚrvFÙlÏ\x0014L;Å4ä\x0017\x0015Uw§zÆi{\x0013[Ás® \x000bÚÆ*«ÈâB\x0016/«¦A2ÙÑò\x0007E\x001a\x0015£­gJ,u:K­.²\x0004q$ês\x001a¬®x!\x0013ÝÒåØ\x001cÖ¨¥\x0010\x0001ñGh[¡Ø\x001cSu55^Ë\x001bwÀ»Q\x001bZÛo(ã\x00150:(#Ú?ç¢©Âõ1\x0011fI\x000f[êYE4ZdBqÔ3ÇÃêÛ`ñ\x0014ËÊfqFØâ1 «IôÜq×å,ëé½Å³!»_\x001a]à\x0011?\x001cÄÂd®û±°Yu÷ñèÊüÑ\x0005æã­\x000eÍÜÝmv|s\x0005\x001a/³£Q-ÃO
Æb\x0016Ú£u·%ÏØ*Å\x0016)Î¢K3¤8]ÍRlâ4)6J±AõRtJ±N\x000e)"R´Kqª\x0014mR´JÑ"E³\x0014MR¬â\x0014)BR4JÑ E½\x0014A)ê¤\x0008HQ+_\x001a)ÖH±Z¥X%ÅJ)VHQ-E\x0014'I±\
\x0014Ë¤¨b©\x0014K¤X,Å")\x0016J±@ùRÌb®\x0014s¤-E\x0014åRIQ*E\x0014³¤)W\x0019RLâD)¦I1U)RL¢X\x0013¤$ÅD)&H1^qRb\x0014ER\x0014J1Z\x0002)ò¥\x0018%ÅH)ò¤\x0018!E®\x00149R\x000cÂ#Å0)²¥P¥pK1T!R\x000cÂ%Å )²¤Èb \x0014\x0019R¤K&Å\x0000)R¥HÂ)E²\x0014IR8¤°KaÂ*E
³\x0014&)R\x0018¤ÐK¡BKÁâ÷JqDÃR|%ÅR\x001câ\x001fR|!Åß¥ø\Ï¤øTO¤ø\x0014\x001fKñ\x0014âC)\x000eJñ\x0014ïKñ\x0017)Þâ])þ,Å¤ø£\x0014ïHñ\x0007)~/ÅÛR\x001câwR¼%ÅRüV7¤x]ßHñ\x0014¯Jñk)~%Å+RüR¥ø\x0014/Iñ¢\x0014/Hñ¼\x0014ÏIñs)âgR<#ÅÓR<%ÅR<!Å~)\x001eâ1)öIñ¨\x0014Hñ°\x0014\x000fIñ \x0014\x000fHq¿\x0014=RÜ'Å½RÜ#ÅÝRì"&Å\x001e)¢RÜ%ÅRÜ!ÅíRìâ6)nâ§RÜ"ÅÍRÜ$ÅO¤¸Q\x001b¤¸^]R\'ÅµRüXk¤¸Z«¤Ø)ÅR\!ÅåR\&Å¥R\"ÅÅR\$Å\x000e).â\x0002)Îb»\x0014çIÑ-Å¤Ø&Å¹R#ÅÙRÈk\x000f×\x001e.¯=\^{¸¼öpyíáòÚÃåµËk\x000f×\x001e.¯=\^{¸¼öpyíáòÚÃåµËk\x000f×\x001e\x001eBÞ¸¼ÿpyÿáòþÃåýËû\x000f÷\x001f.ï?\Þ¸¼ÿpyÿáòþÃåýËû\x000f÷\x001f.ï?\Þ¸¼ÿpyÿáòþÃåýËû\x000f÷\x001f.ï?\Þ¸¼ÿpyÿáòþÃåýËû\x000f÷\x001f.ï?\^{¸¼öpyíáò¶ÃåmËÛ\x000e·\x001d.o;\Þv¸¼ípyÛáò¶ÃKö
[slèt7îÌ±¡é -;36t
¨rg\x0010\x001e\x001bj\x0007m¦Ü&¢Ó6\x0012m
	Z\x001f\x001bR\x0002ê$ZGÔAe\x0011Êµ\x0013ÉxjlÈ,P\x001bQ+Q\x000b¹4\x00135\x0011­
.\x0003B\x0014"j$j ª
.\x0005\x0005)WG\x0014 ª%ò\x0013Õ\x0010­!ZMõN¦Ü*¢D+ªªN"ZNä#ZFTI´h	Ñb¢ED\x000b\x0016\x0010Í'G47æ\x0003C4;æ\x000bª *¹æÊb®ù R¢\x0012¢YT6êyfP½éD'\x0012M#Ï©DS¨úd¢b¢\x0013&\x0011M¤`\x0013ÆSqDcÆP°"¢Bª7¨(h\x0014ÑH¢<¢\x0011\x0014:(b\x000e'ò\x0010
£ÐÙD*Õs\x0013
%\x001aB4ÈE4(6h!((36h\x0011h Q\x0006\x0019ÓÒÈ8((ÊDÉdL"r\x0010Ù©ÌFd%²PÈDde-\x0006\x0019bYK@z"\x001d\x0019\x0015Êq"¦\x0011ï%:¢¹ðÃûèK¢CTö\x000fÊ}Aôw¢Ï>e.\x0003}\x001aË¬\x0004}B¹¿\x0011}Lô\x0011ýr\x001f\x0012\x001d$úÊÞ'ú\x000b\x0019ß#zèÏD"?Rî\x001dÊýr¿'zè\x0000ýè-2¾Iô[¢7^'ßPî5¢Wc\x0003O\x0002ý:6p9èWD¯ñD/\x0013ýè%ryè\x00052>Oô\x001cÑÏ%\x0011=CÆ§"zè	¢ýäù8å\x001e#ÚGô(=Bô0\x0019\x001f"zè\x0001¢ûzÈó>ÊÝKt\x000fÑÝD{c\x00193@±XÆJÐ\x001e¢(Ñ]Dw\x0012ÝAt;Ñn¢Ûb\x00198¯ù­\x0014å§D·PÙÍD7\x0011ýèF¢\x001b®'ÚEt\x001d\x0005»¢üè\x001a*»è*¢DWR+(w9ÑeDRÙ%\x0014åb¢¨l\x0007ÑD\x0017\x0010O´<Ï£\7Ñ¶\x0011KtN,Ý\x000f:;^\x000b:hk,½\x001e´èÌXº\x000fÔ\x0015KÇaÌÏ¥O\x0002N´ªo¢z§\x0011m¥×6PõõDDë:"Dí\x0014:LÕO%j¥\x0007@­\x0014¬<Ö\x0012B\x0014¢zD
Ô²zª\x001e$ª#Ï\x0000Q-¨h
ÑjêôÉÔ²UD+©Ó+(t5½¨è$jîrz¢,#ª$ZJ´$æ\x0005-¥7,¥å½0¶\x0015´ 6\x001a4\æ\x0011Í¥á^ÀçPn6Q\x0005\x0019Ëci§ÊbiçJcigJbi] Y±ÔrÐL"/Ñ\x000c¢é±Tü|ç'RnZ,¥\x001a4hJ,E,ÉDÅ±
Ð	±*Ð¤XÊ
ÐD*@4>R\x0000\x001aGcc)¢ccb)bo\x0016\x0011\x0015RõÑô\x0002¢|
6h$\x0005Ë#\x001aAK\x0013K\x0011£4ÈC1QÌl
¦R\x00147ÑPª7h0h\x0010QVÌy2(3æ\
\x001a\x0018s®\x0001e\x0010¥\x0013¥\x0011
 J¥
)TÁIÆd¢$"\x0007<mäi%£ÈLd"2§<õdÔ\x0011)Dy{kÝ\x0002G\x0003îÃÉuî¯ ¿\x0004\x000e\x0001ÿí\x000bØþ\x000e|\x000e|\x0006|
û'ÀßPö1ò\x001f\x0001\x0005>\x0004\x000eÂþ\x0001ð>Êþü{À»À?%5¸ÿÔè~\x0007ø\x0003ð{àmØ\x000e\x0007¼\x0005¼üoÁo\x0000¯\x0003¿\x0001^s¬u¿ê\x0018ëþ5øW&÷+\÷/¡áÈw¿\x0004¼\x0008¼òça{ÎÑìþ9ô³Ð?~ÆqûiGÈý£Ñý¤£Áý\x0004êîG¼ÇÇ\x0000oï>|>
<\x0002<l?Õý=ì~ÐÞî~À\x001eqß\x000fô\x0000÷Á~/p\x000fÊîFÙ^ØbÀ\x001e 
ÜeÛà¾Ó¶Ñ}mûvÛf÷nÛéîÛ[\x0002·\x00007\x00037ÙF»\x0002¾\x0011¸\x0001u®\x0007ï²­u_\x0007}-ôk ¯F¬«\x0010k'b]	Û\x0015ÀåÀeÀ¥À%ÀÅ¨w\x0011âí°.t_h]ä¾ÀÚà>ßz{»õ\x0016÷Ùº\x001c÷Yºb÷V^ìÞâëò¹»Ëwo³ïôÝ}¶ÍÜ¶ÙµyÞæÓ6ïÞüÆfoªÑºÉ·ÑwÚî¾
¾NßúÝ¾\x0007sX½r¶woÝî\x000e¾#­#Ò¡û´ïîà¥\x001d|L\x0007WX³CíÐÙ#¾°¯}wØÇÂÃ]áhX?5\x001a>\x0010VX[{z÷í
»½Â\x000egù©¾V_ÛîV_K}³ï\x001440TÜàkÜÝà«/®ó\x0005w×ù\x0002Åµ>qoMñÉ¾Õ»Oö­*^á[¹{¯º¸Êw\x0012ü\x0017/óùv/óU\x0016/ñ-Ý½Ä·¨x¡o!ì\x000bçùæïç[<Û7g÷l_Eq¹¯\x000cgÕÁ:§hÀÂÁh	sñYc\^×\x0001×G.=sE]û\ºÔäAîAÊÈä,^²(·fua.9óÅLÅ9² <yà\x00037ð¯\x0003õ\x0003¼\x0003G\x0016³\x000cg¡K\x0017}ËX°¬\ã\x0019¥Äc'j}]áÉ-ONçÉéît¥ÌÎYÊRté:_t*ÉÉ<9¹7Yñ&Ã=9É¤Þ$7iì	åÉ\x000e·C\x0011\x001f½\x000e]×\x00018Â¾xYy²ÍmS|3ll×6£¤Ük\x001b=¦é¸Ê9ãNÎ,ZÁÓÝåØ×{3¸ãçùeùùózÌlé¼¨yñÊ(ß\x0016Í©\x0014Þ%+¢ÆmQæ[±²j\x000fç\x0017TïáJÉ²hølµüÙçÏf
\x0017\x001dRY\x0015Ý5¤z^´\x000bÂ+D/\x0004\x001b²'ÍªÎ_ÝÞÑ\x001fYÕí|í\x000fr¼CäòQüi /\x000e-Ïò¿3\x001bhM;RD\x001a#ß]ëß=ñ\x001fº\x0001ÿùi\x000f\x0013_2Ù«Åê­À\x0016àL \x000b8\x00038\x001dØ\x000cl\x0002N\x00036\x0002\x001bõ@'°\x000eè\x0000"@;p*Ð\x0006´\x0002-@3Ð\x0004¬\x0005N\x0001B@#Ð\x0000Ô\x0003A \x000e\x0008\x0000µ\x001f¨\x0001Ö\x0000«UÀJ`\x0005P
T\x0001'\x0001Ë\x0001\x001f°\x000c¨\x0004\x0002KÅÀ"`!°\x0000\x000fÌ\x0003æ\x0002sÙ@\x0005P\x000e\x0001¥@	0\x000b	x\x0019ÀtàD`\x001a0\x0015\x0002L\x0006\x0013IÀD`\x00020\x001e\x0018\x0007\x0005Æ\x0000E@!0\x001a(\x0000òQÀH \x000f\x0018\x0001ä\x00029ÀpÀ\x0003\x000c\x0003²\x0001\x0015p\x0003C!À`À\x0005\x000c\x0002²L` \x0001¤\x0003iÀ\x0000 \x0015H\x0001@2\x00048\x0000;`\x0003¬\x00050\x0003&À\x0008\x0018\x0000ýÌ^|ê\x0000\x0005à\x0000cu\x001c6~\x00048\x000c|\x0005|	\x001c\x0002þ\x0001|\x0001ü\x001dø\x001cø\x000cø\x0014ø\x0004ø\x001bð1ð\x0011ðWàCà ð\x0001ð>ð\x0017à=à]àÏÀ?\x0002ï\x0000\x0000~\x000f¼
\x001c\x0000~\x0007¼\x0005¼	ü\x0016x\x0003x\x001dø
ð\x001að*ðkàWÀ+À/_\x0000/\x0001/\x0002/\x0000Ï\x0003Ï\x0001?\x0007\x0005~\x0006<\x0003<
<\x0005<	<\x0001ì\x0007\x001e\x0007\x001e\x0003ö\x0001\x0002\x0000\x000f\x0003\x000f\x0001\x000f\x0002\x000f\x0000÷\x0003=À}À½À=ÀÝÀ^ \x0006ì\x0001¢À]ÀÀ\x001dÀíÀnà6àVà§À-ÀÍÀMÀO\x001b\x001bë]ÀuÀµÀk««ÀÀ\x0015ÀåÀeÀ¥À%ÀÅÀEÀ\x000eàBà\x0002à|`;p\x001eÐ
ü\x0008Ø\x0006\x000b\x0003ÍêfvqìýÏ±ÿ9ö?ÇþçØÿ\x001cûcÿsìýÏ±ÿ9ö?ÇþçØÿ\x001cûcÿsìýÏÃ\x0000Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038ö?ÇþçØÿ\x001c{cïsì}½Ï±÷9ö>ÇÞçØû\x001c{cïÿÐçðxªþ¡\x001bð\x001f2×¬fÌt-cG.9æ[ÙÙ)¬uá9Ï.a²7X-Û
µíb7³[Y=Æ~Æ^ýg~\x0015üÈ\x0006C3³ëîcF6±ÞC½\x0007Ü\x000cô\x0018úY.An^=jéuö~xíÃ#ô:ô\x0018SU«ëP^õ\x0013~¸÷\x0010~¾"ß;Iäs¡µ\x001a\x001f®=r×[\x001b%l\x0005[ÉV±Y
ó£ÿu¬02kY\x0013kf-Z®\x0005e
ø¬Gn
¼phú¨W+k\x0003Â,Â:Ø:<mÐíñ(;UËw°N<ëÙ\x0006¶Æ6±ÍñÏNÍ²	%\x001bµüzàtv\x0006fæL¶ESÉ²ÅÎÆ¬Ë¶±\x001f}gîG}ªÇ¶c/`\x0017~«>ÿÜ\x000e<\x0017±±\x001e.e±ËÙX\x0017W³k³^¡Ù¯b×²ë°fDÙe°\§)Qú\x0010{ÝÃîdw±{µ±\x000c`ÔhDä¸ÔkcØ1Ø\x001ení×b\x001a¿Î¾Ñ:\x001d}\x0017}ë÷t=ì[úÕX\x0017\x001fGá¹\x0015\x0014æADÙ|ÜHì@\x001fH\x001fí\x0011å.ÓúÔÚT¾Ë*Çã~#sµ\x0013êxë·éËÙ±\x0003¯Ç§\x0018U¡n&u¦ûÛ¯íóÝ¥åod?a7a.nÑd²Ü\x000c}\x000bû)ööml7»\x001dÏQÝ_\x0011ßÉîÐf.Êö°\x0018ÛËîÆLÞËîc=ý»Ê¾É¾7nõYîg\x000f°\x0007±B\x001eaûpÒ<GZ\x001eíÑ¸õ	ÍFùÇÙ~ä\x0017åbOãzý=Ç^dO"÷öù\x000cr/±Ù/Ù«Ü\x0001õ\x000bö\x001e>\x000f³\x000cï°$61Ã\x0003\x0018çkØj<\x0006JíºqèMf\x000bØB¶ò!æÀû\x000c6ßsOzi©y´é\x0011ü(WËq^âMÖ+û\x0006
á¹o¢ñ|]Ê\x001e>úî\x0019¦óqÍqø­Ã/\x0014\x001d~ë`êä¢¼èÍ·ßzÛùñ\x000b)Æ¿ýÊÛcÇðì\x0014
iIÉfô\x000c+T&È4~ü¸éÊÄ	¹aIf0ééºñã*º4i®<×½üÕ
Ý¢ÃFåtÏåã
C\x0007%§9\x0006epfêèi9ÎÊ9Ó
t&£Î`6å0kØ¼¦²a¯R¤g\x000cI5Sd¤\x000fI1\x001d~Ãtèo¤/KôM_^ª3N]5c¸îJ«YÑ\x001b=C3³FMÍ³<ySo\x001bàLÉ0RSìy¥«\x000e>XÄ\x0018N±\x000e/`ÝÞ{È\x0011Æn÷:k¦·MW\x001ccÆ\x000c,*²\x0016ff\x000eêé}w¯/\x0000´79Î\x000e?ßk×øÝ½6ÁJwèð±v»5\x0013îVg²ø£Õ
/k&\¬\x000fàw\x0010Ö»Ï\x000c\x001b>i-s £(sl¡Ñ·ÄíKõ\x0019|l\x0006RêÀÉ)ãgð¢WòßÖ~\x0004K\x0019ïìS)O,\x001a?>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=\x0013ÃH0S®¬\x001fÉ\x000eUËv5»\x0014ÂÛC%£¹MÇlÞ¾\x00174Ä>\x0002tJÅWhVò¦øzÔVJ~IáRí\x001dª\x0004åì"6^Ð
+\x0007\x0002	 ü;\õ\x001fsõo\x0008àLb×ú\x0005e¾åèÀjq@Ú/\x0008ßâ\x0019È'
÷\x0005ùOÇ>>mí3}).ê*
ÞG¶Þ\x0001¬úÝcIòh\x001fÐ£¶¢;Ó¼\x0005Kÿ@4_vjkNª|ê<F\x001aT2¾íÙÎ¦Àh¼
Cd\x0007³íÿaäú£ÉÙ«§2ëî8Y¢É&¥É£\x0016\x0011Â§,UR\x00051ßÕä\x0003:\x0011zÞ@º4B¶·âxSÒü\x0004Ýýò$ü£Ëy²\x0013Kß
\x0005­Ñu¡Ý.D\x0002¨O\x0003%Ùu!zÜ\x000e-dIÕ¶Û\x000bê¬Ñ±¼\x001aÐR\x0017fÎ\x0018¸KKa-G\x0001Ö\x0001¯`»\x0011GÑ8\x000b¸Ôx\x0010{·ö¼_ÖÿûÀj'\x0011\x0010Iû0Ö\x0003 öì/Kkú\Î\x0003ò\x001c5£Üð\x0014ùùíM¬§Uô·\x0017\x001c_
¸×Ã?d-\x0006õúûÞÖs´]¬útÇK¥ Úf
Ã¨{\x001d}þ'pýÌÛ
Ã.¯»\x001fÃ¤X\x0007êæ$\x00174æ¼8e`Ev\x001cú\x0011£\x000e-Fñw@´ä©¸Z<¾¦\x001a!âXò\x0007>:5ìçj\x001f\x000bÎªtí:¦]ßÚaÏ/u\x001fQ!\x0017Ý¶ô~Ws\x0018¨È,6\x0012®ÑW[(Õþ
ç%\x0008ÓªoÅÛFÖn|J¹	rqBþ¾:'|§LÈÇ\x0006åt\x0007²E\x001a½í&[Dü/Û¹¹qU/,°
G±hC8SåÜp¨U|S\x001a¶j\x0011§?5ãö\x0007,oFe¿\x001eÃÐß\x0001µC\x0005Ö\x001e!\	·2¿p¦\x000bÏ{Îö\x0017Í\x0017ØjØ*q\x000e4ÏÝÀ¹ª½|'¹\x0012õ¾\x0016\x001e§¨'ñÒº2üÉBnäåÿæüñä×jÜ_Î×u]ï\x0016¤ïz¢+K\x0004Õu"ÄÝYòdÊ;h\x0010k4þyQ-\x0017íb¯]\x0003\x001f¦\x0003¯1<ÇA[Éi\x001eÞý\x000fp¿\x0003Qí1GvM'{%S9ü}îN¡?h;\x000b»×ws\x00163Ç&\x001dÛ\x0001YÁ+Å>êxb?».Õ£Ps¤i!ÐøáÍ~!÷\x0003Ý*´Î\x0002\x001bÌ®t<¹m ½ÚÎMÅ¨2\x000cBÔÕXMaràbLñ-+f²\x0010rÄ&®3»PW\x001fªQdþÅõç3Ò©ëyÓ\x0008>ÙqÅ\x0012\x0000ó½}wM\x0017L\x0013(}öàuÅz7Öui\x0001E4\x001duáGQ¡eCFÈzl÷{õõöÃ§üóÀÏÆ8Ú\x001c"Ï\x0012°}!aç®i°3Zºå­\x001dn?\<Ö+çp¶zÊñrf:D#5ñïÔ'±'©tç¿Sÿ]?w)¥[êÅ+¥\x0007õSíS\x0002'>Ùv¹
Gß\x0001ºB\x0006;\x000eûðsj¥çÃ?¸j'Ïe\x0015èQZÒ
ÐþÇ	xQk`ôÕo\x001d \x0014Bõ	5¨û èKõó°',¬Û+Î\x0012&µM«3¼Ö"LhÎ\x001aªhse-\x0004É3ãnhGé÷>klÛeÀÎ:ÐÞð©Ù·J½­+ríÐ :\x0002ÖvGd£@6£èQümÙ`$ñâï­^\x0013:\x001e4Öwîi¶×ÊY¼\x0003$áj¬\x0018¹¯HRân»\x0005ÁO\x001c,\x001dm2K7AüUÚ×eð$"$5Á¬º¶\x000b¦û\x0001\x000b\x001d[p\x0008T\x001azPð\x0007¥¨~Úî\x000e²×Iª¡²B£ZûS"'/!·òånm\x0011ãË»»Åj¿&\x0014\x0018Úª¹}\x0018;ÇÎÖÕj±Oá»Ñ_9<]Êú\x0002ë¿|/VÃX\x0005îcxù(«Ú7¯¸fHÄ¯/W'Ïÿt\x001f×ùDS#	\x001dè\x0006>Ü.ßNÇÝ-ð¸ÜÁHÎF`\x001fã\x0004ÿF&õà[.¬³®§+tTª\x001eâi¸¶]\x0012uî¶¬/ü/ÞOçÞNêÓ^\x000eV\x0016W"j\Iå+ÊT\x0003u@}ÕÍ£\x0002ØÌ IVåY:ª@·
ì!7S£áÑd³à°Ü\x0001ú½½MUÕ¡Ãäµ³L^YC3e³nz¿Kô3¤­RÙÃ`F¼på¹qD¼\x0012æä'õÌ\x0007)z+¶¾><\x001d
%ûÜØÛê7LÙÕà/]z\x001d\x001bV\x0013¬Ú\x0008jjÝ´·)|ë\x0014¡E6§&wÝU\x0008.25»ò9Ê(·ï/ä\x0015«é\x0016×\x0017rÃ\x0001\x0014S\x001ewéÞi¼¥Wlè\x0016YïF\x0015è´
rBüIBtW!\x0008­+Kn\x0000:jËª£à/»ªP&»vX\x001a-®²ÿÏv$Én\x00031tïSÔ\x0005ÊÁ!9ÇÛöý·\x0016ñ@Im;~D}fs\x0010\x0003\x0012\x0010©(Ý\x0006ÀëÜ$H\x0016Û\x001c§ì¯tç\x0016¦ó¾D\x0006Z¤)Ú\x001ewtÈ_\x001b¸·ÂÚ¨HY6tuÆ 
¯·hL©Ù4ïa¦×\x0015¯:Åþ>kmqW«Mx·µò>4\x000eémë­)w\x001fpÁq@ÙT.òQb»Iá
\x0008ö´|°ªÍ¸t3x\x001a
rÀé¦°t¸*YfÆ\x000bÌÅI½ñwC7Ïèn.\x00143ÐïãTDÖ	\x0011^5\x0019\x001eòó=´Wõ\x0000(!u\x001cvøÚ°\x001b[êÆ9\x00190Â('4ÎªÞö\x0011Í¼Qxé`×\x000eÊ\x0006^\x0013Ø¸º3c·ÖrÏ$që^tË¤ñ¡µF\x00059\x0001ê6õþ»ú¸2ç°1UXO ¯P\x000e~n(üoC×Õ¯§nÑÄí_\x001dms:\x001aÕ"ÈÉ°µû+£\x001b\x0008\x0012Xb\x0005\x000c\x0012qhÄÏmñ./Ì\x0016Ò#µ._A\x001d¢\x0006\x000b>F3»só_ÜZé/\x000c:`Õ\Öú\x001ai§\x0005Ý\x0004t¹²²©Ç^Wç<Æ^\x0017\x0000\x001esA^÷ªÈX\x001aM\x001bØÑ\x0016ò5\x0016å`Ü^×\x0011)ÊtõÑ§\x0017¶§lû\x0016,§£°Ð5Ý^s±^Fmï¹rH¸âö\x001b\x0018w|ãtOb_\x0007ç\x0014vê+\x0006Â(	åÃU+F³a/âa0#Âh2ÞFýµð*ëHá+1òðÊgwÿnYçífzZ=ö·ô÷ê­ô\x0017eä\x001eÄ½^ó¨²dZ0¢<N\x0007+j$ì¿h\ñ±\x0008®9¼d²Âò¡]\x0002f\x0000þ]Ýs7Ý´vôúäÖ\x0000~IÏ	ÛÆ^8i+ÛÜ\x001f´I/%Ç\x00159<ÁùÇ\x0014C>_=æ6º\x0017bvØÌ\x0000¶»ðjèC\x000eîô9¿7LUeÇw£æ'\x000bGw^\x000f\x0001«¡¯õ6~UiÔ±òx­Ll£À\x0016÷w2Sõ¾Þ!ÁäGÏ,ÜÍWïVRzNÏ\x000c_ßÉ\x000bm\x001a\x0015R0ê¾F\x0005FµXµ{4W W<3S(ýpICÑ4ï|:\x0017FìfàLk¯¹\x0014ô/Xõ±Zh)\x0012Ia£8Q\x0017Ú¤©ÀD¡\x0018½N,\x0002côù6ò¯jzÇ×ñ»k°\x0010SMÁ÷S\x001fcÖ÷\x001dóx\x001d{¼\x000c'jÆÃ9»a	Ðò/S\x0010³K[gk4S¥N'\x0013\x0007MF\x0014äZ}±ëHR\x0002;mýOß]\x0017¸$ÝVã\x0002­wÛÝ.²>\x000c¡IÜSÑ¶\x000bÖÐ\x0017\x0005ýð¤ÌÙìe\x0019\x00182½«¡\x001e\x0006|MÒmÉ)Þ!T;)F>U\x0013\x0004]'òqUQ\x001ea\x001aOf+ÙMµÄ±dúKUI4ùü=s\x0014oK\x0003ÄV;1fo¦k?KáÑíw\x000cïÞ&\x0005í\x00089ähÊåÄ\x0015¢êYO§Ê{|\x0018m6+î\x0016
¶/¸À¦IÄ/k¸kÑ}!Ê(Ø2Kô*´È­NUh¨-±I´!\x0001¿\x0011Ý2è5WÁ/Æô¨'\x0001X§\x0016\x00149É	·Þj\x0004hx¨ºÍ4CL_¿LÉ¬Û\x0010È\x0016\x001fã\x000eí
el4ßY\x0006\x001f\x0008\x000b²
·BÍTk¼íbáTÍð u­B\x0005abgùh*{.êkî\x001cqÇ¼å8Ò«þýôØß[´Õyx¾9\x0019ÿù\x000b;ù\x001f+¾½lø@%dzI¦%¦G?8\x000fÉ\x000fTéë¸~³ï
Ì&\x0014 ¸N²mh4RÉØ?I¡wOyÌ¬%kI)§¢áæû/Ýã§Æ©ä`é7ôl,W¥ò£8\x0010]Jk9\x0013©z\x0005l>cJçß\x0000ÚÒf\x0017Òn\x0000-ýrÅ\x001bA½\x0005v`ièªã \x0008òæÏdá\x0006A\x0007Òv
kõÅþúã(*Ü[Ügä.'\x000e¯âoRb$Y¹1"ËXµÑ®Ûge×Ë\x001a\x001c<÷Xºak¸|\x001d\x001b7xf+ÂÝ\x00153¢LÚ1+ðzUÈâÑe\x000f\x0003À©\x001aè;É/K0X%-åq·lÑ´äÏ½Ûo÷É\x0013ÿg«½ï6¾5Â=si£=æòÍ»a8ÙÖùÎ99ó,íÙ§<'×|¾)$\x001a¬´Ï¦\x0017,[c¼¬u¥Û¶@°U­\x001d$Æ;\x001dW°JZñ\h5}V\x0005¹øe¬gK,l\x0019(U>÷¸q²#ª¿3uõú%{²ÇZUÚ3SÑ>Uú
Òn)_\x001a¬ø?.·Hö#S\x0016XûñI09³X\x0008ÈëI\x001aÄ\x0014\x0011¡ç#GÚ~#È¹]5[N0÷{¦\x0011\x0015AD\x000b24¡7Å|
6Ø\x000b¡»ïU?j\x001býÞS
\x0014¨ê*ÅÍ4\x0015ÉÊ\x0017=ñîí§f5c\x001d¬\x001bãå¢Ô=&¼g\x000f\x001aèç¶ºJ¹
Ü:L«È!/6×Ã×_3-;ËËêq¬}¦~ô§Â}´\x0004jï\x0008o»Jfè+DC¼W\x0011ÒOÑ¥U£\x0011C4p\x0006ø4	º²r%Ê§)ÜÞc>Çkf=;Ô#fpÁ©\x001e3ÉS\x0000=|Þ80åç8×âP!LÑ§Ð+§|\x001fN\x0004.¶W¡S·%ÿL2kêyû¤fä\x0018Âó¦ø\x000câ ÚÝQPÓq::³é{¬4\x001cÏ\x000cMÏcõ³ª.V)Û\x0006_¡.µªÛPJ\x0010öôôÜ®6Su­æ
®\x0019E{Òs?²¿Æ\x0007*eá*ï&c\x0015\9\x0007£äÚ]\x0005pÒ³.[¡Àèý\x0019\x00187§AåµH9µ\x000bJ\x000e\x0013åL\x001d©\x0013+81éÊÓ\x0018 ýÐ&)\x0017<.ÙÜTß£\x0008ôL+ìû¦xPµM·Nrd,:\x001fgAFvÖ±îsËÊ\x001e\x0008Á
hõ<K~\x0004ÅÒiØ°»¤¤J½a°z\x001eã¿,'_Ét!§XÎØTó°×öbaÓß9Lñ\x0008Çí,5_ü\x001b\x0004>C\x001aù\x0003æ#\x0001èíÈ½\x0013\x001f=¥¡Là6Fõ¬Q^ªà?!^è\x000bg*çZQ*\x000féjÍ'	IÊw@½´w\x001c¦£PB#êòÎå§S½FäÍ6v\x0015CùÀM\x0013å\x0004þ>HE¥:ôzØñXàXÇ6NþHÚÓuè\x0003ãsÒixÍ{°¤j\x0018Ã£õÛÚ4çVÍß\x0005×\x0005U\x000eì#,N£Qø\x0014æâ-\x0012}·\x000b\x0012]3Jä\x0010\x0019â ¡tÞc\x0015ÜÇL\x0013\x001c*\x0010ÑöA¹7º
 áàõ\x000c»\x0017ÙóÕ\x0001¼Æj\x000bM!íV*­\x0001jÚ¯6Ù~³\x0014r¾'b2ÖÍñI2/P\x000euÀL¾è\x0005/tñÜzf¸ÊZçR58WPl,òç-Du\x0012w+ #«qXAy§3`\x0000§Õ g¡rUnXpfÃf!Çµe»\+Åï°ñ$·!T.ÊGò¼ \x0014\x0010M:cT\x0012.\x001e¶¶»uJA36¢åqB¢\x0019çù
]R¹Y\x0000æ;ç\x000elVÍ.wÃb°¶ÿ?[gi{óßZ®8McÔ\x0012¿#mi~NwÈµ<ã[\x000bÉGÿì×ÏÙ]\x0004´ß#6\x0001\x0019år=î»áfÜÇ}Ã&§ß}\q9d\x001b´Ìî\x0013Jm»ù{ !ÑW¶±¿"qò²¯Hi\x001f-¦c]Õþ%£X[èF«ñ}ý·õëþo\x001eöü¬\x001c»ô­­×ôP¯M+¸×Õõ9>¹þl¿ñ·R¾°B\x000e\x001dÁýßã¸Ëfªðr%÷÷PÒ8ÁÔ£Tn©.Ystµ<u|Z\x000c'f\x001d²3çIÇPàçknWv9×¿t.­ËöÈx"à2	'Ò|éh_Ô­¸]}!BÑ\x001c
þØ¼µdftñmäâ4\x001b¬¬\x0004¹ê]Z^»?çÕÉÅöW2"¿Æi8\x0015à¬©è1\x0010È4ó\x0010}ÖÂÿ4RH}\x000fàø!ÔX\x0001»Ä·Ëh®¾eØ4bø{\x001a;½ä\x0010+\x0019cË¡y¯O¶BÄL\x001d~µ\x0002mó\x0001éÿa»\Ò$7 |¹@ÍGò\x0012:·öý·.âDê±7Õd#\x0001J2ãQi%!eÏF4'­{\x0001\x001a£¿/g\x0019\x001aoÃw%\x0003@Â1\x0003µ:Ç
4gnÀ\x0016:*È"\x000b§[{OÓ´mg¹âí0?Ð#-Á\x0013Ô\x000f*¤\x0014 ¹Ñ"M\x0012æT\x000b^©¼,ò"0|À\x0010áoçAmÃÒ#èî+¯ã~æÌìj5nÃÎ¥ \x0015­\x0002µÚ â$(Ü\x000cT±\x0004$£ù\x0008\Æ°ºrT\x000fkþ£ú©_4¨E2¨ü\x0008Ð¹\x001bïõôz<ncU×+y\x0013\x0002¦Í\x0012ÌiïfóÊF2Ì¸»{|= ¼Á<¹Z#[\x001b:@´9÷åP\x0017ì!>öÝJý½Æ·ü6³¶ó7³âËà×ÖNW\x0003ãÛcéj¡{;K|\x001d8la¯¯Gk\æÌ½FÆv\x0016í­¦âdT¦ÝðØÙ\x0017ñôþòE]B\x0000ÿXj^ë¬0Õ\x001eLÏàø*`acB´°[~\x0012+¨]í câeS\x0003\NýVUÑÕ­ýðuIåët\x0015å{¿Æ¾b\x0002»ªÍRm?t\x0000ðc©b¬¹¦kÒü ÑT)¡Ñæ²Ð·\*ö.¸¸ÐÝú«ZÜ\x000b\x0005ÈR}¡ð1RÖ³Ügfú\x0013ooÅ'î§.Ä=[IÙÎY\x0007[¶\x001d\x0013´ÈªÌZqãè\x0004ÕIuÔÇ*I×©·Lâ\x001dÕ\x0010Øãù\x000cED|
Ú\x0001x¥2×C)´÷PcUí²æ3Ö@(ïßRÞÓ7lSÝ~êK_¡r~£8:jÝ+û\«H	\x0018wöý\x000e'²«Q1\x0003¶¡7Ð?A¢Xø¦½¹ßs´\x001dq@5BÛ\x0016\x0011á\x001b§&ÀËõqdL0V\x0010,¶uTC©xN Z\x0005Å«§Ý\x0000Û9\x0001øñ/p7£ûY*8ÁËk¡P×OÑ\x0012a\x000eøÖ\x000f)\x0018\\x000f¯tgHÂÁAÂÀ¡ì¨V¦>LMlp~ÕzÝ3ñÞv\x0003tOÃ©)C«BÅ>pUÓ\x0015÷x]ÏxÌ\x00076°üAè=àÉ$4êù.×ò\x0007?Ã>§a\x0005fÞ_½_mÑ
\¡f+öOëi1õ\x0010Ë\x0016ô\x000c\x0014.Ç\x000fÇ)]@u
Pa»[·»a\x000b·W\x0018åGçØwá\x0011[ÆÕÇêÇdÝ°\x0002%»vý\x0011ûTõôüÔ\Ü·¿lââ¨\x0015ß.÷4WA;×\x0017-Ûf\x0015î<-Ø\x0014\x0016\x0015²Ù\x0011Åhô¡K¹\x001b·µQãaèÏ\x000c®³Ä1K\x0016:¡Í\x0003ç´ÝN\x0006\x000778Z¸TG\x0016õ=f©õ\x0018±\x001d¥,Æ¶ÆÍj\x001bÕßQZ®ûÈ\x0013Ð\x001d²+­ÓOgÇ¦¶RF?Û¬È¿Ú{\x0016c\x0010>®\x001dá°)(Àk@\x0017å\x001cä:Pºü"sÜù`{\x000bgÞá9ZWàÖpH#û­2«Áòó®\x001d.¦¼SÍ«Nå@w.Õb\x0013ÒmUI\x001f©µ\x0003ÔP
¨¤(i5.\x0000\x000b4;ú^\x0012Á*¼e¢PÍêXK\x0010"nOÂE}$\x000fãR/ÊgâìNª;ÿ«ow0¯'\x0018inÊL\x0006fB\x0018Ä+
oÕg]ëÊû2psÕì\x001c­õ¡T,{¡[ü¼Sój\x0019à7°lÙ;4é»Õí:¿C]×ÍJ\x0004ÅÆX·Ü8¯mÓF­¨fÐ\x001eÂ\x001bÏÿuÖK´¢V¿ÜÖpÄÒ
s¶:ÏÍ®æÒÓ\x0006««|ù\x0000øbyl\x0004Í©ãV6½\x000e»\\x001bª\x000b:\x0004Bl¯`ô|Paït¾µ¹Ö­Øâ\x0016U5|HáSÅåÎæ[ãÌMÙÔï/\x0005+*¥úmBiùôÍÁ~|3Q\x0000û¾\x0019ý\x0007Ø³uøÎÝÂØUáhÁ:>\x0014U\x0010Á_©£\x0019Ó¸³ÛPyå>0ÂÆª«,n\x0008Ýô\x0000íÕp\x0005Ø¯ ÔÆ;tÌ]¤)Zwê>`;k¼P·GQ\x0019øã=I\x0015Û\x0000\x001d	xÆià
h\x0016º×¶
ÓlY²so\x001cqmÀ)$4Çd?ÃúAKÈ°léô¡ô`ã¢ªÉFû«\x000câ4g\x0012\x0016AÀÔ\x0001þÛVäc\x0007cÜN\x000bSb>,í\x001b*¨qËlÂC|7ºÅ)
\x001f«xèèÍ¯Õ\x0000ÍMWæ\x0002G}Nc,\x0017Ì\ó[z¼Mohl\x000e«z¿_ãr¹\x00143&Am¦z\x0011¤ë³W<¥\x0008?È?(.\x0004ªðEå\x000f¡Çê$BéËè¦\x0006©ZH
ïý44*(è\x0014o!¸XVÅÐïõÞr\x0018ö.YJDcn	Á\x001cÊ¨´\x0000¿g#	ú¤uEQî? ér«J¡
ßÉå2Fã\x0006#17\x001dzÍ<2óÖÞS"^mÛY.µ[\x000f-G#ôNÝ\x0013Ô\x000fBå\í\x0005à\x0010²W§Z¤{:5S\x0017yY2\x0018Ã\x0007ÜòaûÑæÚÞï
¨\x000e|\x001d÷35O¿¯Ë\x0015/\x000bu¦Õ\x0006\x0015'6r\x000f y y¤\x00100|!EÜ\x0007Å@Çü\x0001\x0014M
Çcû¾Ðô·Qê8ÞwbÜxÿ\x0017NA¯#Âa
\x0014)äAÌóÜ\x0007µ¾W\x0018\x000f1[é\x0017\x0013P´/X©>Bs+Ý\x0003Â\x001bÌã³j+Ò\x001cÕ+öu<«¶nö£vWzÔì!ò\x0002íÿcÖ¯»­_f]{õÅ¬ÊÆiå"EA/Q­À$\x001a\x001eË
çK­g«+\x0007]¤¤ñH°¤ò1ñëÀéfiñx\x0010a¿|c¨ÚÎ"Käs6-¯d\x001f¹¶\x0013ñ©ñ\x001aþPÝñk%\x0015\x000eÐMzüÞì?/\x0012í=}-N®ûö n¯Kc×\x0010ø\x0001\x0003ÉÅ\x00075~ÎÙòØËLÐÏ£Ï\x0016Ù)ÀK"^
ËÌâ¼òAuH¿Yòñ\x0014 ÇÅ\x001e\x0011*i$ãRïõ]øÝ\x000eÈk__Aôwî\x001cß/\x000fSaËãwaãÅØì?yl®T\x0006¡kØ
ÃË=²y8¤Pîß ,9\x001b\x00017\6T£\x001a÷wpù9ÂÊ@«/VoÈU¨C1®:îÍØøÑ\x001cbö8\x0004>Õ\x0013ÏçÌÖ\x001cáCß)ê/	\x0017\x0007î»},÷vdòÛ_èØÆ§ü¸vòÏAwDò,5\x001d¤ß<MY\x0012ès\x0019Þ\x0010mxqË]â;Uß3\x0014(°\x0018$\x0019îQ¦:­Lé\x00007È§û¶\x0013 ôo\x000cM¹@{i»ép ÙYD^è¤Q)Fë©ÁfJÏPélÂØAÉ«!%Ý2\x000cýÐEÚ\x0001ÿÃèµ¾=·ÝÏØ\x0005óv?Æ)ÐLJM¤ÔuoTû\x0014{ÑT°Bº°º¼\x0013b8\x0014.\x000fVäxÏ1~<S­ \x0004ü\x001b6>ÐÚ~0õê»smÝg¼]\x001e³§Õ\x0010k7n¶jpe'ÎOlb¨w-Ü	rIR!¨(j Ö\x0008´
WÚ\x0001qB:Gèï"xn7~óh+øuã\\x001c6ìÒP\x0005õY\x000câÑ¡E8ô²»aXØd~f$°T]MH3¬=\jÒ§]Â¯«úöæû©nñ$\x0011ÖV]·\x000e®uaS\x000b@ZÚ

ô:/6C!`¿£ýJ\x0013ü¶I\x0005Ü¯§%8Û:FpçHP­ëéKWâ\x0011\x0015ØÎÿC Kþ\x0004+Yýõ|\x0004Ðß¤Ê=6\x0015D
U2]ª»PÀv\x0013\x0019õ,ÑoU\x0006jÃ\x000eN±´"âDiÿü=8*uñlÛ;jOì\x0007À\x001e\x0013í\x0015t1C@\x0004À6Ý=½ Ò!\x0010þna=h#iY[ÑótNí¸\x0000}Ænx\x0007éxæ6Þ~\x001eÁiP;a
ÿ\x0010 O\x0004P0^\x0002'îÈ#Æ\x0014öË\x000fnÌô\x0000NYÈ·º^¨Q¤)Ì8Ré>xë\x001c\x00186q'ï\x0016sâîü=Ç·?6î^Û~¾`wÓê^\x001aó\x0017¸Ð ¬\x001b9
°¦\x000e@\x0008ÄRI8ýðièÑþ\x001afTt©ðxCÞÇò,\x000c¹\x0018\x0010º\x0018)Eé'èd)d9W¡CÜ\x0015\x000fÿ²ZËr×ç;ùR.T&EäsCU¤GùGËq\x0015mÜ½Cê\x0011/U°¹%U3EÐ²æ<6\x0007
}ÓÚ­i1îø]ÄÔcÿ\x0011¹\x001e]×X\x001e\x0004n½®ã|¶ÞÙÚ×!Y¬ü\x0004$_Â`ö/ëUÏ\x001b7\x000cCw\x0003þ\x000f7æ\%êÃöÚ"K\x000e\x0005¼õ\x0002Aq\x0001
ô {ÿzI>R¯LE dËÒ\x0013ùD>B
kn\x0001Á3×´``±¼2Ê\x0002x\x0016u@r\x0002`\x001eyl~ôðÓ<å!é­:,Ðm©.»¡% rY/\x0003[\x0006ûe¨3Ô$¹\x0018f\x001dDS,Ærè¢A2%È 
,³~T\x0012xnÅhÑ4H¸Í\|\x001eZP\x0001¨ºw¾DóyMU¡ 2áX\x001dÕípÓ]Ä¢L!\x0013C\x0016\x000cS7\x0012¡¹6Î¬¦\\ÕwÕ×ÆCðç°é²	÷ÕÃ¹1$\x000feÁÅwÀÝ,MQ=4ôZvD¾#«\x0007PJ\x0010m*\x0002Ù \x0018Rí®8Þ$P\x0010I\x001f9.¸@P\x001cÓl$òÈ'¨Å\x0004&_\x0018[Dó\x001bN\x0016?¿\x000e\x001f×Áåu\x0015ívx}\x0019>¬ñGáº^tÅ\x001f\x0012!¬Ë\x001cc\x0005Îq6Øá,·þ\x001e¾=ùês«ÜµÌ-q#nQúÇ8³µej8sÐ·éüø
¦Q>~_?+
\x0008ùêFÂêús¸Ýëv\x001f[Ü\x0017%~O	¿ú]´gt\x001eù¿­\x00101C¡É³r\
M©0¬|Kö\x0016"¶&ÛS,dÝ¼Dv\x0013\x0007¸BÅ\x0003g²ÎD\x0002Åa\x0013\x0001Ài\x0014G\x0005®8mc=!Ù	»~¬vªØÆ£>yµ¹>\x001fï.òNüXOeA\x0011+\x00151mÐ¢ïlz\x0017j¿¼õ³¥Ô	æ\x001cJ
æUGoz¬qs×nVÑ\x0015ù¯\x001d2ð¼Õ»çz\x0014ïyn^à%®\x001aè2ÍyÚÍs=ÍR}±@gÁÀÒé\x001e{rQG{$³³\x0012\x001dEü>Cbãó\x000c(Û\x001e)ßá±\x001aÃSl\x001bçté`4>«#²ßºÍwÑgÂ¯Â\x0004J\x001bÿu7ì0Þ`\x0010¨
4nKè\x0004;w]®âÙþ¹ÎþùfÔ'oÆöZ*K\x000bá¤D?°ò\x00198Õý±vÖ){c\x001aFa
Õf}#ÂCw¯ÌÉj\x000buÙ\x001cÌ\x0007º\x001aÈ«îO\x0012\x000b:/jJ÷8Û\x000eÅ\x0010þ/Ô²x0Èq2gèU¨Ø-¿ùQ\x001c¢\x0017\x0010´+r?Í~E°D»"Ú-AR\x0003çÆ"(KÕXÿ®;Ôç\x0001p\x0004J`øÇ0wâ¸:âÛt&q\x000b¦Ù·nIEJM\x000fÕeÇ©Ñfb]éS\x000efâd4®;DâÍ§uxúòé0ü\x0015`\x0000#)4\x001c
endstream
endobj
1955 0 obj
<</CS/DeviceRGB/I true/K false/S/Transparency/Type/Group>>
endobj
1985 0 obj
<</BitsPerComponent 8/ColorSpace 1956 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 25/Intent/RelativeColorimetric/Length 405/Name/X/SMask 1991 0 R/Subtype/Image/Type/XObject/Width 34>>stream
H|åW\x0002A\x0014Åßªk
¶ÝÝ­Ø­(XØbw¡²\x0018\x0008Æ"#»ð:î91Þ/óa~çÎ}w\x001ew|zjL\x001a\x0019"	ô¡i\x000f¢\x0000ÜÀUq½ÚÕåyzZ5ÖßÓÕ"¯¯-ÉÏËJK
\x0013ühL\x0014.>"íµXL·\x000cÃ\éÏ\x000fw¶u\x001bKÚ©É¡¶Ò\x0000Ê\x0003Îñ)§S8xÞÁsX\x0008YYq§;\x0018 á\x0012_þ-\x0007©ô\x0007Zi$\x0012NN¯ ÁoðìÁ\x001dU\x0001H&_\x0016\x000en3\x0017@ªa\x0001$-rd»Q\x0011@î\x001fÂÐ\x001b+Þ'\x0013ÜI\x0005®´æ<,ZËÆ\O&¬Aén\Çã0þ\x0015ß\x0001\x001306ãG"¦^ÿ	Z	©\}+\x000b\x0013±\x001a\x0013qZ´BÂÀÞ\x0003k³óÂüÐÓ8\x000e
â¢¦\x0011õÊî©1[ÿZ&!ÆM'-ì©wPtr^Y]û°Z»~xq}÷Ð»À ãêo\x000bí%Ë)©ë\x0018Riu{g×÷f³a.\x0013~¢Ü=E¡²êÆ¾qÕ"ü\x0017áj)\x000eÅ\x00081>\x0004\x0018\x0000fªt.
endstream
endobj
1986 0 obj
<</BitsPerComponent 8/ColorSpace 1957 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 20/Intent/RelativeColorimetric/Length 289/Name/X/SMask 1992 0 R/Subtype/Image/Type/XObject/Width 24>>stream
Hb`à\x0010\x0017áçåda`fddd\x0001%ÇÀÐ@?wG[\x000b3}-5ey\x00191^6 ¸aLycKcCeq~^^fJblT·½\x000e\x001f\x0003MAG7\x0010t¶·0\x0010´ÆÛð2p¹Ut÷¢¶L[6\x0006 :4áÞ®,S\x0006\x0006©°\x0016tñÎTM\x0006\x0006Åèvtñ\x0008\x0005\x0006\x0006íd\x000cñÚ\x0000A\x0006\x0006,tk»ËØ\x0018¬ÐÅ{rÍ\x0019\x00188K0 ÎÀÀïáüæ0I\x0006\x0006\x0011ÿjtñ\x001a_\x0001\x0006\x0006qb`\x0000t#Ë\x0015;°\x0003Å\x001d"sÊ\x001a[ZÚá2íéFÀÐdÕµó\x0008LÊ.®ªojíìëë®V\x0001?#+¯¨±µkPx\FaiY§\x0018\x0003\x0012`á\x0011QÕ³tts1`gÀ\x0000,\x001cüÂü \x0006@\x0001\x0000ÆU¥O
endstream
endobj
1987 0 obj
<</BitsPerComponent 8/ColorSpace 1958 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 21/Intent/RelativeColorimetric/Length 272/Name/X/SMask 1993 0 R/Subtype/Image/Type/XObject/Width 26>>stream
Hb`\x0001F ```fãäå\x0017\x0011bg`båà\x0011\x0010VÖÒ761³°¶wvuóô\x000eð²\x0011ã7²ut÷
KIÍÈÊÎ-(*.©¨ªÈ÷WõH/,¯©««\x0007ÆÆ¦Æúú& ¨\x000eSÐ\x000e©nhjÆ\x0000µa²ºIuX$ëüEtë±Êø	jc©ñåÅ!SéÉC¦Ì]=\x0011LS\x0013b,6ú<;&ù(l®®Ï±bÆ*mÉ ]O¶94vLS\x0006ðZL¦ú4\x0003\x0006Ñ&LP¤ÇÀïVZ[\x0006j
\x00025\x0018Ø\x000c\x001d¼\x0002C "2&>>>!!>ÂÇNOPPDD\\X\JAEEMMSSMUI\x0001 À\x0000DuÕî
endstream
endobj
1988 0 obj
<</BitsPerComponent 8/ColorSpace 1959 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 21/Intent/RelativeColorimetric/Length 335/Name/X/SMask 1994 0 R/Subtype/Image/Type/XObject/Width 32>>stream
Hb`À\x0005XØùÙ±IpðK«\x001aÚ¸ùz[K¢J\x0008)¨éÚ{$fæU×7V)ÄX¹\x0004åµ\x000c-ì½¢S²Ëë:û'M2mÚ´Î\x0004%v\x0011\x0015C\x000b×è¤ìêú¶î¾þ)3gN\x0001\x0005ý©
\x00126\x0011yeõ-]ý\x0013&ÌÀ\x0000ýÉÒ\x0012AÕý¦\x0000¦ôþDqÑð\x0016l2\x0010Ð\x0015'ÄíG¾3Ý­\x0011·|[\x0000\x0017]\x001d\x001ey\x001f\x000e\x0006óò)8å[ÜÙ\x0019'áÖàÂÌ [¾ÞA)­\x001f§|\x0015\x0003hL\x0017.ùÞ"\x0013\x0006\x0006ÎÀV4] 0uêä¾ö\x0004\x001d\x0006\x00066çº©Ó"S`ÒÄþþ¶¦Æúªâx?K9`ìå¶ôt47ÖVW\x0016æ¦'D\x0004{:Ù\x0019ëi(Ë
q°\x0000åµ=¢b#¼\x001d¬ÍuÕ¤\x0004y9X\x0018S
´\x0000\x000fX)8\x0004\x0000\x0004\x0018\x0000W\x0006(
endstream
endobj
1989 0 obj
<</BitsPerComponent 8/ColorSpace 1960 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 24/Intent/RelativeColorimetric/Length 326/Name/X/SMask 1995 0 R/Subtype/Image/Type/XObject/Width 30>>stream
Hb`@\x0000&\x0006\x0006FFffVN>A!QI)9	v  3§ ¸´¦¶±©w`dTd£4\x0003\x0003¡½§_`pDLjV^QIiemCCCSkWWgu¨\x001a\x0003OQsk{WWïÄ	&L\x000c\x0006S@DW,PÖ4£k
VÐ¤ÎÀãR3\x0019·¬LP\x0007\x001eYý´^ì Y6«Â	8eUùl3»p¬ÊmàÞØU\x001e(ËÀ&kîS×?\x0015S\x0001H\x0016\x0018"F\x001e)\x001d}'c\x0005\x0006¿sly\x0017\x00050Y àÕ°\x000b+hAq`w¢<"þ8-ýsë<ß \x0014½\x000c,\x0012&ñUp\x000bºb%\x0018P\x0000³k\E[/Ø\x0018²@À¯e\x001bRÜÒ\x0003î\x0016Ãe``W´òÏnìÔ\x001aM\x0016è\x0000I3¯ä²|_\x0011¬²@ya]\x00077k\x0001\x001c² \x0010PPáÀ-\x000b\x0002\x0000\x0001\x0006\x0000¾\x001fÞõ
endstream
endobj
1990 0 obj
<</BitsPerComponent 8/ColorSpace 1961 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 24/Intent/RelativeColorimetric/Length 368/Name/X/SMask 1996 0 R/Subtype/Image/Type/XObject/Width 32>>stream
Hb`À\x000e\x00189ùÄ$ØD\x0018\x0018\x0018\x0018Â¢²Ê\x001aÖ.\x0001¡þÒPIfn~!\x00195m#K\x0017øì²ÆÎÎÖªHyf\x001e)5-c\x001bgï°Ä´¼¢º¶®	¦O={öÜ¹sgNJ\x0017µÈ.¬¬mêé:múÌ¹óçÏ\x0000ÓÓd\x0014#k¦Ï,*¯:\x0005$H>ER.c:\x001eùdqét<òSbÅ\x0012&ã\x0014# \x0010=	§ôÜ	A|\x0002a\x0013qË÷zqñøuâ4î\x0004/6v\x000f<ò½\x001el,îí8ågu¸03»4áoubf°®Ám~=\x0003E5NùÙ¥f\x000c\x000c¦³qHÏ¥ËÀ _,\x000fàùógN6iROKM®*\x0003fþt 0\x0010Ì9sú¤ÎÎæê¢¼Ì¸po7[\x0003%^\x0006\x0006øú¾îÎ¦â´¤(_wGs=uUY\x0011~.VHÊ\x0013u\x0008\x000c\x000föpµ3ÑQ\x0010àbef¥VhÊ\x0014\x0014\x0015àç\x000022`\x0003\x0000\x0001\x0006\x00007BK
endstream
endobj
1961 0 obj
[/Indexed/DeviceRGB 159 1997 0 R]
endobj
1996 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 24/Intent/RelativeColorimetric/Length 352/Name/X/Subtype/Image/Type/XObject/Width 32>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0004ÿÀ\x0000\x000b\x0008\x0000\x0018\x0000 \x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ \x0010\x001fÿÐ?@ \x0010\x001fÿÑ?@ \x0010\x001fÿÙ
endstream
endobj
1997 0 obj
<</Filter/FlateDecode/Length 370>>stream
H\x0014Æ\x000b©`\x0014áÿÿk¶­¾Ò9\x001aB\x0014\x001df4*!ÔY½×½kýþÂ^¯ö^??\x0000Ö4pÐ¦©º®Ïúù¨ë\x0007ôù¨\x001e÷ê\x000e*Øí^]«Û\x0005ÜÀµ¼ò|½\x0014²(Ë¼<gç<+òÓ¹8\x0015Ùw§yæ§4ûNÒÏ8=ÆéW\x000cÏ1qø\x001c>£}\x0002Â 	ý8ô£\x001fíwQ°
\x0003ïà{Ýf\x000f¶`»\x000evë¶ÞÊß¸¾·Ü­\x0017[°r<×ñÎÆ­\x0017öÊ±\07]Ç.gÆr¦/­ØZËÒ>LÕ±T\x0007j¨sCÊÜ.Ûl«­I*YÊÄRES\x0011ÍéØ\x0000²`L\x0005]\x0016ti¤I¼&òªÈ©cN\x0011YEd¦\x0002#ó´,PÒ\x0008I<phÂ\x0013\x0014YRd-\x0018Ó@
\x0004zÐ\x0016õ\x0005ª?Bý\x0011ÙãQ\x000eqÄ¡\x001c pÀ¸!Æ\x0011\x0018Kt[.CtÁÿVÿ\x001dÐ ÷NõÞ(ü
a\x001d
ï uÈî?ý	0\x0000ÞÖ8
endstream
endobj
1960 0 obj
[/Indexed/DeviceRGB 149 1998 0 R]
endobj
1995 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 24/Intent/RelativeColorimetric/Length 352/Name/X/Subtype/Image/Type/XObject/Width 30>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0004ÿÀ\x0000\x000b\x0008\x0000\x0018\x0000\x001e\x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ \x0010\x001fÿÐ?@ \x0010\x001fÿÑ?@ \x0010\x001fÿÙ
endstream
endobj
1998 0 obj
<</Filter/FlateDecode/Length 346>>stream
H\x0014ÆvP\x0010EÑÿÿ\x0010#Xè> \x0001T\x0014ìDD±Ñl\x00145Ã¬=gÝÏ\x0007îý®\x001eîõzU_eQ¾²ÈË2/¼È³\x001cdÏ\x000c<\x001fÙóþ|Ü\x001e·ëýÞ@\¯É5AFi\x0012¥q&a\x0012I\x0014Æ ¼ÄÑ\x0019Dàr
Áùp>\x0006çÓþtØ\x001d\x0003ÿ°Û\x001eö[h°÷\x0017ø®ï¹þfµý[mÝ¥ç.Àf5sÎzî¬göj6YNÇ\x000bg¼°­=;£¹=Í©e:aôÊP\x000cúc`ö,`h¡\x000e»C½\x000b\x001dhÙSLU65ÙT%C\x000cU44\x0011ªw\x0005]A}¹\x0003z"ßùÄÃÐ$^\x00139U`U­Ø.bTQ\x0011\x0003CéÐ
¢\x0015ªpÌS2GÊl[bÛ"Ó\x0016éH7\x0005ºÈ\x0006¢\x001a$\x0010E@;\x0014Ñ!qÀ·q¾U\x0007\x001chþ\x0000¶Qc5(\x0003ï
1
!0\x00184Ñ8FÕ¿hü_\x0001\x0000ÁxÚ
endstream
endobj
1959 0 obj
[/Indexed/DeviceRGB 153 1999 0 R]
endobj
1994 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 21/Intent/RelativeColorimetric/Length 352/Name/X/Subtype/Image/Type/XObject/Width 32>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0004ÿÀ\x0000\x000b\x0008\x0000\x0015\x0000 \x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ \x0010\x001fÿÐ?@ \x0010\x001fÿÑ?@ \x0010\x001fÿÙ
endstream
endobj
1999 0 obj
<</Filter/FlateDecode/Length 347>>stream
H\x0014ÄºP\x0018áû¿ã\x0018CB¤I©D2\x000f!
§Ý`>ÿ^Ï»¾ï\x0017öùÀ¡Ï\x001b¼Áûõz=±'ì=î\x000fp/î ÈAçE\x0015y§i¥Ð,EYp\x0011Ê\x0012¦(EIþP\x001c£$Jâ0\x000e8
âà\x0016·(ð£Ð\x000f\x0003?¼]\x0002ÿ|»xþÕóÏ'ÿrºz·?¶ÞqsÜ­\x000e`»ÜoÜÝÚÙ¥³\x0001î|íÚ«½r¦K0·\x0005ug¦k\x001b\x000b08SÝ±õ¹¥a¦6\x0003Æxf¨¶©ÚP]\x0002M±4ÙÒeSLM2UÑ\x001c*\x001aÊh¢\x0008@Äk@äÇâ`,r@\x0015XE`ä!#ó´<¤%¸¾ÈõD¶7bº#\x001a±ÀP\x0002Ý\x0019öI&ù~ïµùnkÐmqT¥\x0008"Ø\x000eÁ
¬3í:MÖév
kÕú­*Ö¬ö\x0015¨t2Ö(S_¬^¢\x001a%ÜZ©\x0003ª%²úÓ©ý\x000b0\x0000A1Ð
endstream
endobj
1958 0 obj
[/Indexed/DeviceRGB 131 2000 0 R]
endobj
1993 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 21/Intent/RelativeColorimetric/Length 352/Name/X/Subtype/Image/Type/XObject/Width 26>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0004ÿÀ\x0000\x000b\x0008\x0000\x0015\x0000\x001a\x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ \x0010\x001fÿÐ?@ \x0010\x001fÿÑ?@ \x0010\x001fÿÙ
endstream
endobj
2000 0 obj
<</Filter/FlateDecode/Length 304>>stream
H\x001cÄBP\x0000á÷Òb\x0010²&\x0014\x0016\x0016¦k©f{ç?ßùßoØï?°\x0017ôz=çãùh \x0007ÔÔMS!uUWe]
2/ª²(!Py\x000e@\x000e\x001cä\x0019(²"O,ÍÓ\x0004I,$Nã\x0008Â4	(âð\x001e\x0005~\x0014ÜÂû5ð=ÿâúW÷öíÞ¼óÕ=]<Ç;9îq{vìãÞ>î6ÐÁ^\x001f¶+gcí7Ön½°-Ó^¶el¬Ùz¡¯\x0016úÒÐj\x0019Sk®|Í®61UÙÔeS©8WÄ\x00194\x0011f
È¼\x000eI¼.rºÄiÒ\x0018\x0011Ç*$°ªÈLyZáG2KÉcJfI!D\x0006\x0017h\\x0018á<5DÈ\x0001O
8rÀ\x0011ý1Ñc¡O\x000cÁ1\x0006ïBô°Cã\x001dôÁÇ\x0008ê·©^ÂZT¯Eb-¢û'À\x0000­\x0002Qm
endstream
endobj
1957 0 obj
[/Indexed/DeviceRGB 142 2001 0 R]
endobj
1992 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 20/Intent/RelativeColorimetric/Length 349/Name/X/Subtype/Image/Type/XObject/Width 24>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0003ÿÀ\x0000\x000b\x0008\x0000\x0014\x0000\x0018\x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ ?ÿÐ?@ ?ÿÑ?@ ?ÿÙ
endstream
endobj
2001 0 obj
<</Filter/FlateDecode/Length 325>>stream
H\x0014Ä	`\x0018áÿÿkÆÒö|\x0014¥\x0012*û\x001a¡Dy;×}ï\x0017V\x0014phQ|\x000fìýyÃòRçY\x0006Ï³\x0017ÈÀ+}=Ó'H\x001fÏ4IÁ#~$÷\x0004ÜoI|ãk|n×K):ß®a\x0014QxÎÇKx<öáaw:l`¿9l×Ýj¿]í7Ýz±]Î·«`³\x000cÖK¿´ðWó\x0019X\x0006çÎ=7©ãã»¶çZkN\x001dsj\x001bSÇXk
Æ#½dj\x000e04[ïÛCÕ6Tk¨ZúßHï\x0001SëbhÊP\x0007½ÞEº4¥ÝW$U\x0016Á,:B\x000fñ=Ä.Ø.b\x0015ù\x0015é@Ë"-\x000b-ov\x0000×@l\x00031\x0014â(ÄRmhRj\x0011\x0012M@Å\x0016^jâB\x0013\x0013ZÐÀx@Õùf\x001dÊ5ªAY²Z"ª,^a
\x0003ð
UhìÁÿ\x0005\x0018\x00002hÜ
endstream
endobj
1956 0 obj
[/Indexed/DeviceRGB 161 2002 0 R]
endobj
1991 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 25/Intent/RelativeColorimetric/Length 364/Name/X/Subtype/Image/Type/XObject/Width 34>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0005ÿÀ\x0000\x000b\x0008\x0000\x0019\x0000"\x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ \x0010\x0008\x000fÿÐ?@ \x0010\x0008\x000fÿÑ?@ \x0010\x0008\x000fÿÒ?@ \x0010\x0008\x000fÿÙ
endstream
endobj
2002 0 obj
<</Filter/FlateDecode/Length 368>>stream
H\x001cÄ\x000bjP\x0014áÿÿoætº 	µ©bT¨éF¹KlÌÌYÎ·õþþÂ~þ_\x0013Ø7hV×ðÐº®êïªiUV ÄUË\x0012\x0018Eq\x001cã\x001cZäïÆ;Ëó,¿ÞY½,M^i\x000cÒ$J0Ã$
ã Hâ ü\x0008~\x0014xQèE¾\x0017úÏÀsý§ë=\x001cÿáxîýéÜ\x001eÎõá^ÝëÅ½ûÙ^¿îàbßÎÖÅ¶.§ý\x0017°ööÑ´-Ó>§qÚëà\x0008vúÑÔ­Ýö¸ÛZæ\x0006\x001cõA_ï
m¯«æF5×¹Q\x000c°V\x000cm¥kK]·òV]l2ß(¶Oy
ÔÅDEe.*°	Ë	ZIh5CËéX\x0016Gòt\x0004]\x0000ü\àæ\x0010+¡á\x000c1\x00113\x0005ü`\x00028\x001a|_d)\x0001\x000c)4 \x0011C¢\x0001\x0018b< ÆtoDw\x001bý.Owy(Õáû\x001dêpd£ÚPj³ä_h±dkH´½\x0016ÓûÓè~Açnÿ\x0013`\x0000ìlù
endstream
endobj
1978 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[-128.0 0.0 128.0 0.0]/Domain[0.0 1.0]/Extend[false false]/Function 2003 0 R/ShadingType 2>>
endobj
1979 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2004 0 R/ShadingType 2>>
endobj
1980 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2005 0 R/ShadingType 2>>
endobj
1981 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2006 0 R/ShadingType 2>>
endobj
1982 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2007 0 R/ShadingType 2>>
endobj
1983 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2008 0 R/ShadingType 2>>
endobj
1984 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2009 0 R/ShadingType 2>>
endobj
2009 0 obj
<</Bounds[0.0069336 0.92264 0.97863]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 1.0 0.0 0.0 1.0]/FunctionType 3/Functions[2010 0 R 2011 0 R 2012 0 R 2013 0 R]>>
endobj
2010 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hú±3åÇPF\x0000\x0001\x0006\x0000cNA
endstream
endobj
2011 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 31/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hú±3å\x0007>\x0005íJ!\x000b¥¡¡»Ò)G\x0000\x0001\x0006\x0000ß
endstream
endobj
2012 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 123/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HDÄk\x000bÁP\x001cÀá«$iI.ÍKrÙlû4ÂÂ³ù<ûyå?RO\x000fÏ¿È*cÊð«ØQ\x0003á£\x0003´/¶èXóXUw/?È\x0017b^e3²©u3&¤cÒ¥<Ô\x0010å\x0001×¾èqérîü´­Ä1^IËàÔäØ\x0010u\x000eb_{\x000b0\x0000üy
endstream
endobj
2013 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HúynÊÏ¡\x0000\x0002\x000c\x0000ð¨Á
endstream
endobj
2008 0 obj
<</Bounds[0.10762 0.99886]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 0.0 1.0]/FunctionType 3/Functions[2014 0 R 2015 0 R 2015 0 R]>>
endobj
2014 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 168/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
H4Ä	\x000eÁ@\x0014\x0000Ð#£Síü?WA©ÖÒR±\x0006ESK¬±\x0004±Sq
SäåbíÈð\x0013w8!Ñ%\x0013I8DéÉ>I
\x001f1å\x0012Õ\x0015U/ö$m\x0018ÕF²>ô1ÍL¤ìTær3àòs0\x0016`,Ñ\Rs\x00055ÇÁXÜµ\x0005k¥=-í±|Àòc\x0013­Xõ\x001c¨]Xýõ[ q\x001b\x000flrOh¾ícË\x0007ûÍQûó\x0015`\x0000J@|\x0019
endstream
endobj
2015 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HªØõ¼b(#\x0000\x0003\x0000\x000eA
endstream
endobj
2007 0 obj
<</Bounds[0.0011393 0.92264]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 1.0 0.0]/FunctionType 3/Functions[2016 0 R 2016 0 R 2017 0 R]>>
endobj
2016 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hºt]èÒPF\x0000\x0001\x0006\x0000ònÁ
endstream
endobj
2017 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/FunctionType 0/Length 192/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
õóÎõóÎõóÎõòÍõòÌóòÌóñÊóñÈòñÇòðÅòðÄñðÂñðÁðïÀðï¼ðî»ïî¹îî·íí³îí³íí°ìì¯íì¬ëì¨ëë§êë¤ëë¢êë éêéêéêèéèéçéæçæçåæäåäåãäáã~áâyáâwáâràánÞàjÞßfÝßdÜÞ`ÜÞYÜÝTÚÜOÚÜKÙÜFØÛ@ØÚ9ØÚ0ÖÚ'ÕÙ\x001eÕÙ\x0017ÔØ\x0016Ó×\x0016Ó×\x0014Ò×\x0012
endstream
endobj
2006 0 obj
<</Bounds[0.0011393 0.89818]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 1.0 0.0]/FunctionType 3/Functions[2018 0 R 2019 0 R 2020 0 R]>>
endobj
2018 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hú¸xçÇ¡\x0000\x0002\x000c\x0000A
endstream
endobj
2019 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 59/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hú¸xçG\x0008Z¸\x0003;¿\x001d'·
>ÍÝ
G\x001fÑì-\x00084\x000b\x0007±\x0019¦oBF\x001f¦mÄ¦n \x0000\x0003\x0000ÕÒH
endstream
endobj
2020 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 32/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hz?ií{RÑäuÔB\x001f¦¬Ç¦nÀ ²\x0000\x0001\x0006\x0000Î;8
endstream
endobj
2005 0 obj
<</Bounds[0.0213704 0.07736]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 0.0 1.0]/FunctionType 3/Functions[2021 0 R 2022 0 R 2023 0 R]>>
endobj
2021 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Húûdáß¡\x0000\x0002\x000c\x0000 
endstream
endobj
2022 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 134/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HTÂë
\x0001A\x0000Ñ\x0007$I\x0012QäKRV.\x0011ñNÛØ¦\x001dë1ö+;\x001fN×Ïäöÿú{!9ÛÏÓ·9b\x000eî\x001e³#Þº\x001eñÆ]»+[/Ý\x0005z¡§è	j\x001a¡¨\x0001Q?zYd\x0017ÙA¶­4l\x00126ì NPãQETÜ2¢"¢ÍãçÞ\x0002\x000c\x0000ãÊ3
endstream
endobj
2023 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hú{%úïPF\x0000\x0001\x0006\x0000Ì\x0001
endstream
endobj
2004 0 obj
<</Bounds[0.0011393 0.87645]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 1.0 0.0000001]/FunctionType 3/Functions[2024 0 R 2024 0 R 2025 0 R]>>
endobj
2024 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HÚy1sçPF\x0000\x0001\x0006\x0000\x001dá|Á
endstream
endobj
2025 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 185/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HDÂi\x000bÁ`\x0000\x0000àßë$!¥H$IR"ErfÑ2¹÷Úñî>0æGxùâé1Þ\x000bãêö\³ñß©öÂÔ\x0017¦<'¨lek$[CTz\x000cÄ{_¸÷[\x0017\x001dh¶QÎhqzýn0ZýªÕZ\x0003j\x0015¨\x0015Z)ÓJé,\x0017ÑT8JùÛÙ½Ù	é-LQ0IÁÄ|ä£k.²âÂ\x0004\x001b"Øà
,\x0019ßñÏ®^\x001cxpàÆh\x0017vqNÐ³ã#À\x0000e\x0012ã
endstream
endobj
2003 0 obj
<</Bounds[0.5]/Domain[0.0 1.0]/Encode[0.0 0.5 0.5 1.0]/FunctionType 3/Functions[2026 0 R 2026 0 R]>>
endobj
2026 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 67/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HTÂ
À0\x0008\x0004ÀýÇ+Åí-\x0010IN··[Ëº9ÇQQí@AñlY"i¿åîwëg©0wÊ=>l;\x0002\x000c\x0000\x0008Yºà
endstream
endobj
1977 0 obj
<</Metadata 2027 0 R>>
endobj
2027 0 obj
<</Length 1447/Subtype/XML/Type/Metadata>>stream
<?xpacket begin="ï»¿" id="W5M0MpCehiHzreSzNTczkc9d"?>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_rapport_education_a_la_sexualite_2016_06_15_vf.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_rapport_education_a_la_sexualite_2016_06_15_vf.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=EìÜdæãí'(97.g»>Sð§ÿ\x0000d¼\x000fáÏ\x001b|E¾ñf¥ªø¿ÄRZË¢x[W×þ\x0011Ëhî<²×
qc(»H^1\x0011Aß~ÝÊ«'ÿ\x0000à¿ðKÛ\x000f\x0014<\x000b¤i?\x0013§ÿ\x0000uá½>ökñ%¸Y&¹ò\x001d\x001aÜ\x001fÚ©9ã
Çz×0ú;ý\x001ehgæ_:_ÙÔhÍ¿mOYThr«Ò_\x000f²O^ú\x001acþ_GÚ\x0019ÞwÐ§ö}\x001a3oÛSÖU'Z\x001cªô÷}z÷,üEøaû\x001dè\x001e,ø¤x1~"^Xx:Î8tK­ZÅZæð]\x001by\x001eeû"â\x001c´eQB·ÊÙ<|ïñ\x0003ö+ý|\x0013ÿ\x0000\x0004ðwíÚOäñÇ<G\x000eÖ`û\x000cWMnó\x0019LF,ù[c#hmÙ#ü;:ð£Ã\x001c«è×ñ¿³Ä<~&¼pÿ\x0000Ä²Ý9OÙßÑ·/5ïÔüG:ð«Ã<§èßñ¯³Ä<~&´pÿ\x0000Ä²Ý9MËü­{ß©ª|\x0010øeiû	hß´­Þ¼|Sñ2÷Ã7V²]Aý¶ðXÁt²¢\x0008¼ÍçÏDåöü¤ã ¯n¹ÿ\x0000KþÂÞ9ÿ\x0000j_°GÃ¥ñî|
áØ<AãMoTÖmæòÈÇe+Ål©\x0008t.ñ\x0017q\x0007\x0005\x000e\x0014ñ_¯Tú4xAxù[Ã­â©}F1\x0018µ*SgKå\x001aJ4Ô£.ZÑÚvq~ë?[«ôlð7ñâ·_Ö©}F1\x0018³©NQ.Z\x0013i(ÓR¹kE]§g\x0017î³Ö|Iÿ\x0000\x0004óøwsÿ\x0000\x0005	ö;ð5\x001f\x000fø[L·Õ<sâ}fö)¥M9, ½¾Þ(-a\x0019YR2²\x0016d\x0004õÚ<\x000föÖø!ÿ\x0000\x0004Æð¯þ$hß³:üEÑüeðï_L·O\x0016]\x000bO\x0010\x0013xmç{.\x0005ò$F&BÜA9\x0015ø·\x001c'ô|Ër¬ã\x000fÂ\x0019G\x001dÕ(¬Déâ?zéÍÓä¥\x001eEN0´pæ¼ySwGã>+p§\x0019nSÐáo­ÑÆåõaJ>Þ\ôñ\x001f½östùiÇSe'Îá{Ç7tx·Ç­;öNëQ±ý,¿±õG¶_\x0017ë0^r
ì<	oal,öÜc* £gâÄVfUEÉ'
+ùQ&Ýåtv<º¿Q|9û\x0010~À¿°oì=àÚöÆøcã\x001f\x001fxâE¼'Ãþ\x001fÙLâ\x0017zS`t6ì»ÕÉýà\x0000c&¿Ð\x000f>\x000bø9á\x0006YÅ¼oÄcñY!\x001fcEÓå¥\x001aù4yy é¸ó)7ïY+]è&\x0007Â_\x0006|\x001eð,â¾6Áb1Ø¬Æ\x0010±¢éÚjBRºæ/4]7\x001ehÉ¿{ÝV»>ö|ý~\x0005~Êþ\x0007øÙûJEã\x001f\x0013xâTsßø{Âþ
ñ\x001d¾\x0016¤Gqsiöî4ë¥y{GÛ\x001a`lu'çÓu\x001fø'×ü\x0013£áoìQñSãÃ¯\x0005Þø­4
9&Ó5\x001dr\x0018¤ZKy_j	`FMò\x0006v\x00028Å}ö#Á/\x0002xÂ\÷2¬<ñK\x000f\x0008ºsª¢Ýå	JÑæ¥	Gû¯E~]\x000f¼¯à¯Ü=á>wåib\x0008EÓU\x0016ï*s£ÍN.<¯Ýz/X£\x0017ìëû8j?²WÅ/^\x0011ñGµ[ß\x0007xÃZf1xà¶jV÷²J²Äð+­|¼©U%X®T©ª\x001e;ý?b¯\x0013ÝþÍþ\x0017·øFÚt\x0011´KOYMÚ\x0019Zéqßye.w2=r¬GzãÎ<\x0016ð0«Á¸8`\x001d%ÒZ®\x001eÎ2~Ë
ü·PûOÝ{èÚ93\x0006ü)ÇÔàü$0\x000eÌ)N­G\x000fg\x0019?e~[¨}§î¿&Ì¿\x0012þÏ?
¬l~\x0015O¦\ë¨Þ+ðåÆ£â_2æ\x0016;¡µrß»ù3ó¨ß»ªú\x001càÚ|)ÿ\x0000vYü\x000føùñÀ²Æ£q\x001fÃ^åç´×ÖÂc\x001cßiµ¤\x001f»ýÝ¸óØú¯ÌkÃ£Ã~\x0006C8«<Ër9µTq«ìei{JTùaî{´?»
ãfÏ\x001a\x000ex\x001fK¸£;Ë²IÉeÕ&Üjû\x00195/iJ=Ïvç÷a¼uf.ðÿ\x0000à÷Ä?\x0006|Tñ§Ãï\x0005xªÖÛÁ\x0005¾©¦®£â\x000bY¾Í\x000cºÅ¶ñ\x0019>[À»c\ï*IÚ\x001a¸\x000fØÃö+ýþ\x000cþÀçþ
\x001fûkx_Y×£Öõ'²ð´¿.X®\x00188F'\x0001Ù­¤PÎU\x000088Îkãü*ðÂ~\x0015ð[þ"_\x001eP«^5¦éáèÓåq÷ÜbãÉ$¤Ý)GN1K}Ïð¯Â
x[Á¯ø<wB¥xÖ§£OQ÷ÜbáÉ$¤Ý).i8Å-ísªø?û6ü\x001cÑÿ\x0000c\x0010~Ø?´fâ»«\x0007ñM§<\x0011¤x[Xµ´7·[ÞM$\x000f-¼å!O²mÀTbI+ùöùø_û&xlxSâ·ì{¯Úè0KÉ.¼7âH[í:T°T¦ÿ\x0000-\x0011GÚ©»j Éé_ÏÞ2pÿ\x0000¸\x0017Íø.UcÅªT+'ÏFPäV¿$ ã''Ê£~XÅ]øÇxox\x001cÛ%V\x0018|Z¨åF²|ôe\x0007\x0005kòB.-Ê\ª7åUÙã_\x0011áºïöÂuK]\x001eâ$ò´½võ.¯-\x001dc@âI¢\x0008¤V}ì\x0011J¡UaÉñ\x001fRÚÃñ\x000bD[Ý2Úî	5(bÚî\x0011$nê\x0015<\x001e\x000f\x001eø¯É²)Ssçg\x00178§\x0019+Å¦ù]×ÏO3ò|T¡áùá\x0019EÎ1q¼ZoÝ|þó¯Ö?\x0015Á<ÿ\x0000dO\x001fÿ\x0000ÁDµ\x001f\x0016¿\x000bSKð/ÃÏøÄ\x0016:e½¼S_ËöÉ )
\x001eÆOnrzWúEø\x001fáuã¥|\x0018/eeØ8âkB
eQª²W,ãÊãîòÞñ?ÑÌÃÁ/\x000có¯\x001c+e0Àû,¿/ÂG\x0011V\x0014Ô#*ÚÊ½ØÙÇÇÝå½â{Õìóð¯Zý¢<Uáí+Nñ+x\x0017áæ&¯âåR¶\x001a\x0010ÜÁo)Ú\x0013\x001a¹{Us\x001bíÉ$\x00108óM\x000eëþ	
ñÃÆ\x001af­á)ð÷lüE\x000e£ø\x000eïMS^2ºí¼p\x001buùGûÇCó\x001e1Í|\x0006\x0012§Ñ³:\x0015°yU|>&\x0015¡§!lG3Ò|Ñ¥ì¤=ùÅëüº\x0005©ôeâÜÎl\x001eW_\x000fhP§ ~g¤ï\x001a~ÉY®O~qz»é©Äëû9x\x0003©x\x0013Ã^)Òî#Õ-­­ü7¨kÐÞK}\x0004Bó%ÂYD\x0014)\x001a\x0014e$®B¶Þþ
½ÿ\x0000\x0004ÿ\x0000ø7ð¯ö\x0014±ý£|Mð·Hø}ãÕÔ\x001d#Ã\x001e\x001bµ¶\x0019lú\x0018a7?fVI%û!Ù·¯ÎÎp3´}\x000fÒCÁ>\x0015á¯\x0007hñ>3\x0003O/Ì¹ÜiÐ£\x001aq¤ëB\x0010öÉJ2°q4}÷-5å^ÿ\x0000Ò7Á~\x0017áÏ\x0008(ñ6/\x0003O/ÌyÜiÐ£\x001aq¤ëB\x0010öÉJ2°q2÷Ü´û+Ò¿jØWý?fÿ\x0000\x001a~(Oo¡xÇÓ]6àØ&fL·ßÊ¹¡ÜîFÄ1V$T\x001cùO_ç)þu8×Üÿ\x0000\x000fn>\x0005xgþ\x0008ýûGÃ?x_RñÄ±àeÔ5m\x0012ÞpcM\x0017iåwyÍ´6ìàt¯ëÌp~\x0003è½W?²¨TÆÃ\x001bõ\x000ez¡/vXmí>\x001bó¦ì¥{Û¡ýs¾\x0010À}\x0018ªñ?öU
Øc>£ÏR%îË\x000fí½¦ÜÜñnÉÞöèz¥Â\x001f\x0007?ìY¨|~2^\x001f\x0010Añ:×Ã©\x0013HÔYK§OrX&ÝÞo
®íÛv6çú{öÐ?à¿±?¬ÿ\x0000b\x0017~Îº·¨ë6pÇâ¿\x0018ÛhPMqáåº)#¸Ißy\x000b\x001dÁ|B\x001dÉ\x0003\x0019\x0000\x001fè?\x0010°?Eÿ\x0000\x0008ó:|\x0005Ê'^­hÁWÄÆ%<2«\x0008J3Ý.gË
V¤¤×"¯d~ýâ\x0006\x000bèÉáFeO1DëU­\x0008*øÒ§ö°£8ÍÒæ|°¨åû®f¹\x0012å½õ\x000fÚGáìqû0x¿Oý.¼)âoXDÒo<_âéõ¸#M>kË+{ÈþÅ
Ú\x00161Ç\x0015×ÎIs\x001ae®\x001fÆìµðëöUø;ªü5ý~\x001dëö¾7øÓ©øV×Ä¿ k©ôk
R\x0018-ç¤$óå·Û½\x000c³6Q~í|vo_Ã¬Ãn\x001f«d¸<D1¹|,kTÃAÔ\x001b\x000f§Näå\x0018ÏÚT¥ñ¹%vÝá\x001dÍ+xwøsÃõr¼	^\x0018ÜÆ¶\x00165ªa ç,>\x001f\x0011
tç'(Æ~Ò¥/É+É»Æ?	Àø÷Ã~\x0003ð¯ì§á/\x0018øWC²¼¸Öþ$xLVº³ýôÖ:|:4Ö¸$)BßnL®ÕÂàçèß\x000c|
ý5Oø*µ¿ì¿wû ü0>\x0017½øtúF\x0008³ó#¸K>|½r5\íÏ¾+÷|¿ü8Ä}$áÂ3áü\x000fÔçu\x0012ú­+©F¤õøy~\x0018Úü·ó?sË¸?ÃOÒ2\x001c'<\x0005õ9á\x001dD¾­JêQ©5á¾\x001bùËû<|\x001bø/ñcþ
£þÏZ÷Ã[\x0008ü!¬Ü]éÂÂ\x000btF8áhå\x0007ó3\x0012©lr¤WÇ	ñÛáµßü\x0013OÆ´\x0015ÿ\x0000ìkði|E£ü_ÁúlÖ\x0000·DKI´ùî<×êÆEtP\x0018\x0015\x001b@ù{×òÂâü¯9\x0011ÔáÜ»ëTs\x0008`àã¦­Nt*Tæ{·(Ê*Í4­öOåèñvASÀ\Ãêpö]õ8øààã¦§:\x0015*sK«Ui[ì!¢é\x001e\x001eÕ¿bï\x0014xúëÂúbë\x001a/Ä=\x0007G³¿Å\x0016O²ÞØk3Ì¬@åØÁ±¿n\x001cñ¡<aðïötÑ?lÿ\x0000ÿ\x0000\x000e\x000fìðÏû#Ä\x001e\x0010¸R¶O\x0004Ú\x0001<ÒC`Ë#®Í¬P»í$\x0012»­~Ùä\x000bñgò¿ì\x000c\x0017°Äaäç\x001f«R÷¥:xwÍ%ËÊÜ\x001c+iµwÜý§3Èø\x001b\x0007â·\x000eåØ8/a_\x000f78ýZ½)C\x000eÓk¸¶ù[MÆï¸Û¿\x000eYücðF/ÃÍ\x0015¬_JÒ~×iö\x001c-Û]Ú@Ò<üÄ4©íV~\x0007þÎ²f üpý¥üWû#h\x001e,Ôü=ñ+QðÇü\x0013¦h¶\x0011Y\x000bk+¥\x001d"¸A\x0012HVämË¹a@«òzøC|3Áàx1¹\x0005,]\66¶\x0016\x0016\x0014èÆ%\x001aqHû8ÉÆ¥äï\x001b¨E%t¯ÓÂ<\x000fá®\x0017\x0005ÄSÈibªáñp´0Ð¥F4ù(ÔQN0©\x001eHÉª¼n¡\x0014ÒO±ð\x0017?gÏ\x0006|>øñ§â?oµÍWLñTº_¼=kw\x001c\x001az\x0015!+\+BìÊ±L6*å9öÃð7Â¿_\x0011>2Ý|!ø\x001fû\x0002xcþ\x0016\x001fü
<Iscâ½\x001fLIðë5Ê[\x0018Ö/äS\x001a°±Éàòqâä¼9Â\x0019ÿ\x0000\x0015ÔÉ8{(iâ°¿Y+ÓÃË\x000fn¤i8Æ\x001eç»\x001eX»SÖNÝmãäü9Â\x0019ï\x0014Ï%È8Zö+\x000bõ
ôðò¡n¤i8¨{ì\Sµ9;¹;=]¸ÿ\x0000\x000fõÏ_\x0010Ï~\x0003ü\x001bVñ6½§»ÿ\x0000fÞÞ[Çia!¸\x0005\x00110\x0011\x0015\x0002*y\x001câ¾}ÿ\x0000ù|\x0013ý>\x0007üGð\x0007¾\x0007h>\x001fÒõ¹tëãã\x001b/
hkci\x001c¶f
ª¤ÎÒÜç;sÏã\x001fLÞ\x0011à\x000e\x0010Ïò¼/\x000fÒ£K\x0010áSë0¡KÙSRJ³åc¬\¯g-o{\ügéÂ\\x0005Â\x0019öWÈ)R¥]Â§Ö!F²¦ö>Ï*1÷\¯g-o{\·ûk|.øCðâ\x001eàÿ\x0000þ?°×µht\x0006a5½ùU>M¸5,¢2K)}ÛN8¯¾\x000ex2Ëâ7Åï
|=Ôfh­õß\x0012XéÓÉ\x001bmd{âb§\x001d@c_É\x001c/RÏ8\x0003Ô|±¯Z&ÖéNq·Þ'p¾WK<â\\x000e[QòÆ½jTÛ[¥9Æ\x000fðgÅ\x0019EH\x0005('¥~ÈþÐ¿²ÿ\x0000ìð\Ñ¿d;ö\x0012´Õ<;\x000f#^øee¥¦©\x001c°¬\x001de(&23@aÏÞøÿ\x0000R8óÃï\x000cø[\x0019àº\/\x001a¸XÑjã!\x001c2®¥\x000ehóFn*§48¹KÝIùéÿ\x0000\x001bø}á¿\x000cã0ü\x001bK#W\x000b\x001a1\\#U¡Í\x001b©òªÒp¹]ùïÿ\x0000µ?>\x000fü
øg/áÌèP}Äzû^B÷×·Èé$ÖÒ\x0008C\x000b4kec·pÏ þ"Ið\x0017àwü\x0012?ÀóþÎ~\x0011Õ5ÿ\x0000\x001fi\x0017°ÿ\x0000ÂWqáûfÔí.âö(å[Â¢B¸\x0000ä\x0010\x000ekù»=\x0007pÑ£*²|=\N>UíåF¯	ºá\x0019*<Ü±#dïªgów.\x000eá\x001f£VWRYF\x001e¦#\x001dN¤}»£MÖÜëB2U\x001cy­\x0018ÁY^éìÏ;ñEöáÏÞ\x001aðÕ§´_]VïZÏ7Ñ<ww6«\x0004rçåd(J`å²sÚ¿>kø¬þ/8*ý3ý|1ðÅ?ðE­[Æº¿ìíðòo\x0012ÛøÃJÅ\x0013xNÝµ\x0005MbÒÝÜ\x0015ß»Ër>â¿¾¸#.áÃèÇVÊ0rÅÂ½*Q®ðôÝnYb¨ÓoÚ8ó_M^ÿ\x0000#ûÓ²þ\x0019Çý\x0014ñ\x0018êÙF\x0012X¨Ö¥IWxzn¯,±Ti¶ê5Í~I5{Ëà}{ÃÃö.ñ·î¾\x0018øbçQ\x001aýÚx¢ãJ
ªY¡"ÑC>~HÎÒ¥vò\x0019zúã÷ÀÙ3öYñ\x0007?d¿	Á;´?\x001cx~ßC5ÿ\x0000\x001c6¤¶­æÆ$¦TÝ(Ùi\x0007{sÐsÂ\x001e\x0019øoÁð^\x000bic°Ñ¥\x001fköxo¬sG:NqÜ\x001c¥ËgÌÏè.4àÿ\x0000
¼:Æàø7\x0005ÂT±¸hÒµÄû<7·æ4tÔdäÜ"å.[>g­ÏZý¶4ßÙßöHñ¼ß±Gþ\x000béþ%ÓôWEñ_îãuËËøåtY]ÛÛf(Ê¡ø.3È³û=~Ï¿\x0003|_ð¢_ÿ\x0000\x001e?a?\x001f\x000fþ\x0016[ø~ê-(ê~\x000fÓ¯uý\îÞn\x0016{Bâ-¨">à8\x001cïÀ¼\x0013Áù\x000cK;â>\x0017Àåù4(Î4ùðô*âë;ßÚ*y¹9c\x0019Æ<ÐR¿+NÛíÁ\x001c\x0015Â\x0019
<ï¸c\x0005Ê#Fq§Ï¡S\x0015YÞüêty¹9c\x0019Æ*Pæ¿+½·ÀÏ:\x0004ß\x0001ôÏß´ßÃ\x001f\x0008øKá	Ñ/í4
itÔ_ñMÀ¹ÌÞhQÝ.PÃ4QÜÏ\x0014pÇ±\x0014\x0015øñY<1\x001fÅ\x001f\x0012'-Þ-\x0015uûÁ¤E*á×Ï%H
¸"=£ ú
ÿ\x0000$ø9zÏñk\x0001\x0017\x001a\x001eÖ§³OuOò'¢×Ý\x0017¡þNq\x0014røñ\x0006-`#ËCÚÔöiî©ó¾DôZòÛ¢ô>?s\x0019bcR«µXä_ \x001fð@\x000cü&ø~$x/â§ìûà?\x0016Ç¦YZÝØ^xÂ¶÷×0¼ÜîEyTíOÜ¦\x0014c½j}\x000bòþ\x001aâ	g\x0018\x000cã)ÂbãJ\x0010%Z:³q«u\x00174í\x001fr:#û;èkðÖ~ó\x000eoaqj!(Jµ\x0008U\£Rê2v¹\x001d\x0017ëß±æµ¡Øx¯_Òõÿ\x0000\x001e\x001bñ,w~\x0019¼xcñ\x000eöi$PHé$?2ìlõ?ìJö\x001fØßÀÿ\x0000³¿í­û"ü-°øû$|8ðýæ¹ûB·5­[Ãþ
¶³¼Â=
æø:M°º¹\x0011K\x0012W
~\ò?Nð¯&ào\x0016|.Èéf\x000e\x000f\x000fR¶oõ\x001a(á©Ò©*1ÁT¯xÏÉIÍE7v¬¾\x001bê~ánOÀþ+øeRÍ2\x001c\x001e\x001eu³g©R\x001e*¥\x001c\x001dJ÷ù\ã\x0014ÝÚ²øo©î¿³7Á?\x001f´ìðÀþ3ðN£ê:çí[¦ø3Sñ§Ão«I£ÝX£<m;++yYº\x0005#Ê¼éh\x001e\x0018ý¿hø(¯ÅßØ!¿d\x000fú\x001f´oW\x0013éZöà;[}VÎàÛØ Ï\x000b´\x0015k\x0019J¢¶U\x0008<\x001cú8\x001c»8ëÇN ðépþ\x0002
\x000enZXJp¯	û:\x0011ççµ¯\x0017VRN0Nê-=\x001dûpY\x0005q¿\x0019÷Ø\x0018
\x0018:89ÊZxZp¯	{:\x0011ççJËÔN0Nê-=5óë;\x000f\x0003üoý¡¼_ð·Ãÿ\x0000\x000bü=¢èx~ý4©,ôâÁ­-@Ku\x001bî»àe·6\x0007#\x001eMñKøwð«àçìó¦hÿ\x0000²×Ã\x001bÛGã\x001f<%®êx\x0016\x0006Q²ÓuKK+y%m»Þ"ÌÌÙ\x000cÌN\x0017$Wæ<UÈ¸søJ\x000c\x00059Ï0Æa*Íá`åV\x001b\x0011F9MÚò ÛîÛi+´~oÅ8lx[éPÉ0SLÃ\x0019«7JXlE\x001a\x0014å'kÊRÜ¯vÛI]£ø£øsJýþ\x0016xºÓÁÚ:jÃâ'tûíN\x001b\x001d²jvö¶ú\x000c°$íÁQ®g\x000bad#©&¾©ðÁ?Ù»Sÿ\x0000¬÷¿±§Âá~\x001eEtÖð¯ìü´n5\x000f)Ë\x000cDQ©;s_A_Ñùo	p\x0016#é,¸~§\x000e`>§,\x001ceÉõJ\ªJxy.^K¾X¦ùodý\x0015ð\x0002b~ÿ\x0000Ø\x00158w\x0003õG¹~©KO\x0011ª\¼j1MòÞÉy\x001eïû?h¿
>!ÁW´?'ýü\x0012\x001c»MBÆãÃ\x0011ø|%X­.¥I|Hó7F7¢ô¯~-xÁZgü\x0011óÂÿ\x0000µ7?d¿¶\x001e-½ø¯\x001ezÚw ;«\x0011\x0005Ó\x0018d\x00087¼lbL©m§oJþzâ\~OCè·âÜ.C§=Q\x0016\x0011R¤©Õ|·¼àÜcx¹r»l~\x0001Äxü£\x000fôaÀñn\x0017!ÀÓÆO\x001c©K\x000b\x0008©RPªù%oyÁ¸Æñrå}*Ô<7àÍCþ	mmñ\x001d¾\x001eèxÏãªé\x0003Ä6Úz¥ÜÖM£É?ÙÞOâO3\x0007o\x0003åZúë[ñ
ÿ\x0000ü,øYáÞ\x001d²ðìß
§Ù[èk\x001c6ï%­°EL"|ÌxÛÞ¿¦ñY«Ê||È²&\x0002<+ÁIòF,"åK\x000f)r¥hÇVúu?¥qy¤²\x001dr<£	£\x000c+ÁÉòF"åK\x000f'Ê£hÇVú\x001d¯µ\x0007áÿ\x0000íùðö\x001f\x000fü!ðZqð\x0007çÃÒè\x0011\x0019e¿ðÍÅÌ\x000fBÍ4òÉ»®ãç­ÍÏÂ/Ù»âoígð\x000böið>-jÿ\x0000\x0016üC£ÙI¬iVÍ\x0005µ­¹%²©Þñºnò)Û ÉÆFÞ+Ä§ÍÂ¼\x0005ñ\x000ed¸lVs[0ÅÐ©N!G\x0017*Ik*réJKÝ»µ×.MÏx\x00139ã\x001e\x001dÉ°ø¬â¶?\x0017F\x000e¥:n\x0010\x001c\©%¬¡%zR|³WvÓBþ¬ø\x000fà\x001fìÁâÏÚgÃÿ\x0000\x0003</â/\x0019xÃã\x0006· A't[KÝ7Ã66_Ù÷\x000bökI\x0010yü°¢8@]¹9³Äÿ\x0000\x0015|_ñÒ÷á¬ÿ\x0000±w>\x000eøÛXøm\x000e»ãß\x0014Ûév\x0012D¶ÒÝyR\Z):|¨ìÎ¡~`x5çð<¸4ã*Ká¼.M­#\x0015^4è8ªr©Ë)ÒT*9Æ.¤}ØJRmy'£<þ\x0008\x0011æ|aS+\x000eá²}l\x0014kâ«Æ\x0007\x001fg*²%Fnq©\x001fv\x0012¤­vä~\x001eü?øÏñâ<?¤|\x001eðgÿ\x0000µü\x00105¿\x0018kw\x001aLqÚh\x001a;ß@\x001fRµ\x0005/lG!\x0014\x0008ò\x0005f
»IÛæ¿ðS\x001fø(?boþ\x0015ñÇìYðãÁ\x001a´¾+ðì:ß5Ï
?~ë<)\x001cÊêa|~Q@Ï\x0005\x0018ã\x0015ð^?xãxMÅØ\x001cÃ°xZ¯\x0015©\x001aêÐ|Õ\x001f<#\x0019¦)óC.WÒÖÒÇÂx÷ãn[áG\x0015àqü\x000bÃUx¬=HÔ¯Væ¨Ôá\x0018É5ì§Í\x000eNTå}\x0012¶"ý£þ:ü	ø9ñª\x0019ÿ\x0000b\x000b]+YÑcðCé7\x001e+×¼8\x001e]FêiÝå¿+c{y£Û\x001cqÈQ]|¶ á«ò?ÅÞ%Ô¼gâ­OÆ\x001aÉO¶jÚ×·^Rá|Ù\»m\x001dX×ù¥ãëælm¬å9[kÉ¹;|ÙþlæXúù¦a[\x001b_ã«9NVÛMÉÛæÏ«ô7þ
ÏøSðÿ\x0000Æ?\x0015þ&|Kñ\x0007ÃO\x0014øÁ\x001a´ÂzMÜp2<ó¼ÐÈG6©	ßrýkûwè1ÃY&kÄÙÎkÁG\x0015ÁP§,=)(4åRS¿î¦£Öñ?¶>¼9fIf¸\x001cqX\x001d
rÃÓª9Â_\x001f»u\x001e·ôoü\x0013[Á>\x0012ñ\x001fÄï\x0018x·Zø_gãkÂ>\x0002¹Õ|!à½MmÚËVÔ\x001aîÒÌ-Äs®É#\x001b©î6e\x000eët ü»O¥~Ó¿\x001e¿à¤?\x0002¼=àïÚköý<\x0005¢ëö¾;ÇEñ\x0006¶3Åyföw.ºsÇ
ÜfW±æ%ÏÍýßeã×\x0007`²î,â~\x0017ÂPÄC\x0015\x001at«AQgMÒªÖ\x001eQ§^uy[Rñ§x+ûÖ¿ÝxÆ>;pv\x000b/â®%á|-\x000cD1Q§J¬=£:nF¨J0­:­§=ãNðW÷­x~2xKö°øm£x_öøµû<øwHÒåñ,GCÕ\x000ed-og\x001aQjðDä<%QVM§\x0004f½#þ
+ðëÂßðJÿ\x0000Ø§Ä+ý|1wsâo\x001a´0xSÖç[¤Ämn#o³ù{\x001a\x0017Û.PåJdô\x0015÷¾:pþ[ôpð\x0017áº\x0012+9cZuZ±²©\x0017ì¹9\x001c%i^\x000eòQq»Ù\x001fwãAý\x001d|'Åâør¥Îg\x0018ÖV§ìbéTö|¼\x0012´¯\x0007ªßCÒkÙÇÁ°oìàí7IÒ¥Ô|]ñÒßRÖ®õ³¹>\x001f´¶á
¤\x00028ÃÂóý®\x0019K\x0016?-ºgØ&ûc|\x000fý~\x0010x#þ	Óû5øWÅÚ\x001fü/k©|F¼Õ$´·R{ki$V2ÜAæ9i'%_ç¾~¢\x0018/\x0015xCÃî\x001fËü1Épø¼>/\x000fN®2St¡*©N¤Z<Í¹T»e¿­þ8?\x0014¸Kr\x000c¿Ã</\x000f¡N¦.St¡*©N¤Z<Í¹NîQúõ½Í;Áÿ\x0000´¾\x000cx/àì]à+-{@ñ÷,u/\x0016_Çklf×¯î,íå¸Ón|ÆC$\x0016r4±Æ¬»WÌ«\x001dÙ¯\x000eøâ\x000fZ?ü\x0013âµ«á\x000bÿ\x0000\x0008jÚ'Ç{í*ËF°»Fm\x000eÎ5Ó|½6\x0016¶bo\x0016öÚ\x001f,n;z×ã¼GâÌ'¹å:Øy`ëPÍjÑ(J/ØSÃráàé·\x0005Jß,i¿g¿.çä|Câ¼'Yå:¸ya+PÍ*Ò8J-Ð§\x001f«ráàé·\x0015Jß,i¿g«åÜñ?\x001eñÿ\x0000fiü/âÏ6º5öñ\ÓµYáHüËyáµ²\x000f§\x0017F9\x001972¨Ê\x0006I¯¤<U\x0006¿iÿ\x0000\x0005øUá4IC»øf[R±&[9¤:ª®]>é;09ç\x0015ûÞiO\x0019GéIà¢Õç÷á\x0014Õ6þ³oz?\x000b|¶ß¡û¦c\x000cm/¤îG³ú¼ðW"³oë6÷£ð·Ëmú\x001eÅà\x0000è¯ÿ\x0000\x0005=ý¼	¯xgMÃUÖ¼;o­é©b¢Úò	uY\x0012Hå:4xVV\x0004\x0011×Å´øÓñ§JøYûd/ÃífúÊïÂzíxjûMHæ·V²ÛÊu<\x0014*6ÆÝ¸¯\x001e\x0016qf\x0017|EþÍ©*sÂU¤¨J\x000eQS¥6ù$ø\x001a÷y~\x001b\x001eU\x001e+âÌ7\x000eøýRP\x0012­%BPr¢\x0019·É$þË^ï/ÂVøMñ3â§Ã\x000fÙgö¥×>\x000føËVÐ®í¾$xV4¿Ðµ	-f¶·óõµ"9"ed\$cå=\x0015})ÿ\x0000\x0005þ\x0012è_\x0012>-þÅ_\x001d~-|3µ¹ñ|?®/õ=fÒ\x001bOÈðêËoqpä3HÞa2®òYYÉÂ¶kn\x0013á\x0016}Å\x001e\x001bq\x0006u±Øª8¯o:çWÙàT©Î¤¬Ü¥Ìùâæï\x00196ýÖiÂ|5ÏxÃ ÎpQ;\x0015G\x0015í§R0êû<
9Ôænqæwz3Õÿ\x0000cOÙÃÂ\x0014>2~Êß\x0015þ5|>·ÖµÏ\x0017Þ:_\x0012Câ.þ
n=;D·Æúdl´ÒÎîÍ!,Í\x001a·\x001dLß\x0005¼aâ[
3öý§<-ðÛÂ¿Ç?\x0008øßYÑ|:í£ÖÐ%¬°ÈÎì¯GRDéÖ´á\x001cÓ\x001dÃñ·\x0016àðxzÜCÅb(Qý×-éÓT¥	7'\x0019k9I7í#tkÂy¦>\x001bø¯	ÃÕâ\x000c&'\x0011Bî¹o\x0008*RµmTü<ø3ñ\x0014ü0Òþ>~×K©i:ßÇý+Å×FÝ/t6-*95\x001bw¹Öíû»¥\x00189UÉ(A&¿:ÿ\x0000à¬ëû_xÓDðGÅ¯Û?ötÓ|%âkëY¢·×ôû7]b-ø-2Å<²@±¢#j\x0007\x0015ü5ô^(f¸l³9ã¬¢\x0018LUHÊ1«NT¶{ÍB¥I¹BÑ\´tZ\x001fÃßI\x000føÙ®\x001b-Î8ã(\x0013\x0015R2Q«NT¶÷Jr£\x0018¹5h«-\x000fÿ\x0000i!û@kÚÖñOöÒ®?µ<_£5ý·|Q®u¨\x0016æhMÔÌ\x0018³¿\x001bÅ¹ö¶ØPcj©?0~ËÚ>â\x000fÚcáÖâ\x000b{.ûÇZE¾£ku\x0012¼RÛ½ì)$n¤\x0010ÊPTðAÁ¯çï\x000f°¸,o\x001eå\x0018|\#*3Äáã8É'\x0017	Ue\x0016.-¦èü\x000bÃì6\x000f\x001bÇ¹N\x001f\x0017\x0008Êñ8xÎ2IÅÁÕe\x0016.-¦\x001e}¤Åi.©m\x0015ûm·kYÑ\x000b\x000cþûgà¿Ú'öðßü\x0016Sá¯ì­áxåÑ¾\x0015Ú|=[xNs\x001d¶ËR\x0016Ò¬Q¿0Âv\x0002\x0004kò
ÿ\x0000Yò:ã¬\x0007Ò¯%á\x000c%èdðÂK6ãKÙÂ'ÙK2äNðRåM(ÇHÙ\x001fêþQÇ\x001cqúRäÜ#½\x001c¢\x0018IrÑãK\x0014q>Ê\|Þ\x0010¹SJ+E¡ú\x0013û\x000c~Ó´4ßðS_ÿ\x0000\x0008íüs«é~
Ñ4ë\x001d\x0003ÂZv«4Z\ö\x0010è·EÃÚ¤SÈèªìåC\x0012ªH\x0005xæÿ\x0000d/ß\x0019uø'¡ñà/<)á\x001cxÓÇn|Sâ\x001bý\x000eâf\x000cÖ :ÆmÝ$WýÔ\x0005Y(
GR1óÞ\x0017ñ/\x0015â<
­pæ#\x000fÌ1¸·íëNI=ij¡ìå\x0019©{Ü[rIõjÞ\x0007<EÅ8¿\x0004+g|;^\x001b\x001fÅ?oVT§'wKU\x001fg(ÍKÜnQ²wÝ[Æ?g\x0017~\x0001þÂ/ñßÁ?\x001aZx[Ä^"øo£jÞ.²Xµ²k&¸6ðÝB<È¢i"V`:ê\x000f_ÿ\x0000à¹\x001f
þ/x#ãö®ümð÷­uÝgNîo¼/`¶é{åÅlªÒ)ÜV@\x000b\x001eç\x001eßÇßK®\x001fâðõø\x0008b+A·*\x0010äùcI'%Í)]EÇâ}ì ý-ò\x001e'Ê8Ó
_>£B\x0018ÐmÊ\x0014\x0014ùcI'%Í)6¢ãñ>ö<cö¤øñsá¯ÆOÃ\x001c|9c¥x­ín/m4ã\x000f²[x¤OÜ ¼l{îbHÉ5ñ
%\x001fÉÇQ@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Vïÿ\x0000ä+oÿ\x0000^kÿ\x0000¡½z¹¿ûÄ?Ãú³ÖÍÿ\x0000Þ!þ\x001fÕaWy!E\x0000\x0014P\x0001E\x0000\x0014P\x0001E\x0000\x0014P\x0001E\x0000\x0014P\x0001E\x0000\x0014P\x0001E\x0000\x0014P\x0001E\x0000\x0014P\x0001E\x0000\x0014P\x0001_ÿ\x0000Á¹W?\x0008­¿okEñõ­×Mx6[·Ux®~ÍqçyY#,`Þ\x000e\x0001ùs_ÚAJ3OÆª_Ú1Ö\x001c'õg-ã?gSU¯³æOG¡ýô\x001a©ÃTüf¥ý£\x0018}aÂ_Wrµã?gSU«§tô~íÏ¤¿àt¿ø(GÃ»¯\x0018\x000btíke-Óí\x001b³g7ÍÏi6×¼f¾Sý´¬þ*éµ\x0007¬>4ê1\ø\x001dB/í9­ÝÌd"1íÞªØòÊ\x000e@¯æï\x0014éq\x001e\x001fÄ\x000c}<úJX¸Ê<í^×ä-¹\x0007/CùËÅ:<Eãü},öJX¸Ê<î7åø ãk¨¿¢>tÔRþ;ùS\x0012}¡ea?Nýùç9ç9¯¼c¯Ú#Jðgìñ#þ	ûUxëGð/oô{k¯\x000ckÞ%¾[;1
Í³Üª\I+\x0006
¶åsÎ@Ïö/qÊ¼4Î|)âìU<\x000e&¥:s¡V´½.ZÝU\x001aæMªåQ¦ï\x001bù_û\x0007Âî7Ãå~\x001bg\x001e\x0016qv&\x0007\x0013:p
µ¤©Óå©NU\x0014jJNéþò\x001cª0wü¯ì¿\x0008~.hz7ìÁñ\x0007öSñË¤ÝøÏ^Ð5­\x001bU½¥¥°²õg*\x000ceK¨Le#`z\x0001S^¹û,übýÿ\x0000cÿ\x0000\x0005?e½Gö¾ømâ\x000bë-kYÔ|Câ]\x001fÅvói\x0002x¼äF1ß»\x0001dñ_§øuÅ\x001e\x001axYÃ5Â5sü\x0015zêâjÖ­J¼%B<9£\x00177ÊâÛ÷\x0012UÞé\x001eñG¾\x0017ðß
ð\û\x0007^¤*b*V­N¼%B<yã\x00177ÊâÛ÷\x00174uz\x001d%­çÂ\x000fÞ\x001aøQð\x001fÚ\x000e«¨Øx¿Uñ\x000f5ý.IäÓ,mï,´´¶¶ÞÐ¤dkIÖUòÊ©(\x0015d¼+¯~È?³÷íûEþÜwÿ\x0000·WÂ}HñÅéÐü1áß\x001a[ÏªË3ÝE>ÕíFR©µv9É­rÜ_<\x000fâ\x0017ñý^'Àb(caWÙP£§:îR«
ä|±jÑå\²zùjkbü2à¯\x0013¸»jq6\x0002½\x000cl*û*\x0014q\x0014å]ÊU!RÊ\x000f-5\x001eUË'¯è\x0019_à\x001c_\x001e?iÚi\x0007jö\x001e+×¼@|\x0017áí\x0002òåõ-BKÝj\x000b$1Élu¤,ÂL

òqÿ\x0000cßÚ£à\x001fÃø'o|\x001fðã¯Á¯\x0002x§TðÞ§ÿ\x0000	æ¥®ø-¼@²´óª5´@²¼þQC\x001aÈ»r©ò¯#Âï\x0011x;ü
Áàr<Ï-Àc*Ð¯õ©Õ­Éæs¥\x0015xÊ§#åº'á|\x001dø\x001dÀä¹]ÆU£[ëS«YC\x0015Ìç5\x0017J\x001aÆU99\\x0014ãËu
\x001cN7á¯Ço\x0006ø\x001böE_\x0003|\x0019¶øqá\x0016ßxgTÇ~*Ö¥Ô×Ä\x001aë«*ÊÉ¢v¶\x001aÕ U_-	tÉeêw.>\x0002x?Yÿ\x0000N|%´ñ\x0017íyðÞ\x000b\x001d\x0007Çº¯yâOÄ¾]¶¥\x001bø]:E/µ¦

2íU\x0012\x001d½9¯b¯\x0004åxÏ£O\x000fÃ\x0013à¡O\x000f­ZU§[\x0015#,wµ¹5¨»%Ê£ÎùomOf§\x0006ex¿£nC\x000cV}:\x0018ªÕ¥Zu¹aR2Ç{Y(KÎ¢WyýÛÛSsâ\x001fÂ\x000f
øËþ	eðoÅßð¿ü\x0003¥\øÄÞ+y¼;ªjÓ&£t..l\x0011D\x0010$
¼Æ!ÜûI# WøÁáïØ\x000fÇÿ\x0000µ\x000f¿k­'öÿ\x0000øu\x0015ï<!§iFÆ¶X¸1ÕÈU\x0005\x000b9?y~ï"²â¬¿ÁëÄ,«ðüUSÀá¨RöO\x0013KÞps´R½Ò©}×Ãª1â\x00079×\x0019_\x0019Pâ\x001cgÃÑ¥ì"¼âæ]\x0015F÷[ly÷Å\x0001|\x0016Ön¼=ã\x0000þÐþ\x001cxt\x0007èªiz£Ü¥Ü±ªE<0,vå\x0019Sj·ÌÊvì+ð?íAû5h¿ðPÚ»ö¦¼ý¢<\x001e¾\x001eñgæÐü5fºô_iÔfÛ¦¸\x0005ÎÉ">D\x0019\x0018¯Ýêkäò\x00118\x000b	ão\x001dñtól?Õ±XyÐ¡\x001fk\x001ezV5ðÊ\x001f»Sºøl|®Qâ\x000f\x0001á<jã-mú¶*¨Qµ=I³K¿,¡û¹E8É»¯Ú\x0017ÿ\x0000j?:í\x0007ûSüLµº¹:ÅM\x001f\³ð¢ù?¼îõû\x001bÈáWÉ·ryôÀ<ãÖ¾:~Ê?ðNï?\x0007´ÏÚ\x0007I¹¾Ò>4iwúÞ&³lnll¿´/%o-NR4I\x0001,ÃhÊú×Ìâø¿Ã^\x0004ðæGK5§*s*\x0015*Óu)óÓ¥í«JSåZÆ1m«+®çÌâ¸¿Ãª>\x0007ðîIG4§*s\x001a\x0015*Su)óÓ§íëJSåZÆ1nJÊë¹ç\x001aþ\x001f]~Éz'ÃØ¼Q&µ\x0007\x0016ëRÓ&|«k.åwÀBóé»qûÄc×°üQøÿ\x0000\x0004øð7íqá¿ø(Öûaxk[Â~\x001dÓ´CàÝ+ÄÖ3ÞÜ£k\x0017!\x0005K,Krev¤Lpq´þ§Ä9çY/¸/\x0013ðüAB»ÂQ£CêÔëQYsÁáÜ£OÝº§\x001as÷×,a'm9_ê\x001cCø+øñ2F´°hÐúµ:ÔeR\ñt\x001c£\x000b«ªj£ýåË\x00187m,ûÍG[ø!à_z/í#ð÷â®ªi\x000e¢Auá}@ÈµÌË§Çgp!Ea)\x0019Fl´vã©â±l?\x0014ÿ\x0000Á!õ¿ß\x0011þ<·¼\x0011ªøÇT»{\x0012?\x0007kV³êÓÊòÅ\x001e&UvÞÊÕäx§}\x0018±¼?q\x001fÖ0ÕqÕdåIaªSy9J\x0017 å½¿.Lò|PÌ>ø¼7â\x001fo««'*K
R«ÊRo)EÏ{7~^¿\x0015ßöKñ_~"|M¶×/cñ\x000e¯¯I/´},¹1£ÝÅ$~²ü¨¦\x0007/Oï\x0015F\x0002ó_3:I3¼`f%Tõ\x0002¿Ì	8¹7\x001dó\x001eN.MÇcÁ«ì¿º_Ã\x001f\x0003ÿ\x0000Á.¾$|<Ö?hß\x0000/¾-xÇÂJÐc×Úô¬¯®\x0012i¯b*\x001a(ÂÊ²n@ß''\x001c
þ¥áJ\x0019\x0006QôxÎ2ÚÙ¾\x0013ë9®#\x0001ìèª¿¼£\x001a\x0015j©Ê´9S\x0014d¥x©{»hê.\x0014Ãä\x0019OÑó7ËkæØ_¬æ¸\x000f³¤ªþòhU©\x0019Ê´9o\x0008%%+ÅKÜÕÛCÓü;ãO\x000cxöAñwÃ»jÞM_Äþ;ðî£ic\x0006âööú}®³\x0014Í.T*å¯ Ù´¶~líÀÏØ
¿iïØ«á·í9ð*ÿ\x0000Æÿ\x0000´z~\x001b|5þÉVÐuËY4ç¸}\x0018ÙÊ¯$¤`¯É÷NYr?¿¨8kÄ?	øÄ^\x0017«ÍéOû7\x0005ì]J5)º.rÂ:3NRq{¯wáwjë¡ý;Ã~ øSxÃ\x0015qù½)ÿ\x0000g`½©J¥7EÎXGFiÊMu^ïÂîÕ×C·ýþ;ü"øEûZø'âWõ\x000bûÏ
è¾
m3W@^}òèY\x0012Ë°\x0012²L ýÓÖ¼ëÆ¿\x0015¿b?Ø§þ	ãÙÿ\x0000à\x0007í\x0007aã«zäòÙØ&µgua\x0014ö°®n#Çåíû0S8g\x0003¿\x001f\x000fñ'Þ\x0013ý\x001fs>\x001bá¼Ú\x0018éæ5e(ÃÚRZp*k÷§ÉÊãì¬í\x0016¹^\x000fq\x001fþ\x0014ø\x0003pç\x000ef°ÆË0«'\x0008{JS«N3¥\x0005ûÈÓäååöVv÷^Ýç~\x001fø\x0017ö]Õþ\x001bxSÄéªßø¯ÄIpð4\x000cca\x0010ãóx
³\x0019#ÚUK¦Þ½³â7í¯ÿ\x0000\x0004ªý¢ïu¯ÚâïÂ_Ú­¥Ï§{]nx.¯í¢H [|¢¦8YSçÜs\x0002qúÞ}â×ÑÇñ\x0018-Î²ì¶­9aäÜj8ÿ\x0000iN­(F\x0014áìùý+\x001caïó\x000eÖ»·ë\x0019ï\x001fGn9­â¼ë/ËªÓ\x001eMÆ£öªÒaN\x001eÏÙò¸AÆ\x001eÿ\x00003ýÝ´löï·\x001fì©ûHxÿ\x0000Ä¿\x0017~-~Ç\x000fæ}SÃ©k
äz®¿\x000e¿&¡
VÐNË\x000e ¶"5h\x0010Ê'-»?7Ô´
gÆº¾¯á]$ØéwZ¥ÄÚm\\x001b{v8±¨Uz»Ô×ùMWÁbsJõ°tý\x0019NN\x0010þX97\x0018îþ\x0018ÙnýOò»6¯Åfë`éû:2!ü°rn1Ýü1²Ýí¹ñ}}§ÿ\x0000\x0004Dý©<\x001bû1x¯âV¡sâ_\x0005è~.Ö|?c\x000fõ\x001fê\x0006ÓK¶;k,¨C¡hXØ§,\x0014\x001d«_ÕßD\x00112¿\x000f3Lâ¬«a¨ckQ¥\x001c5L\:\x0010fÝNyEóFôÛQå¼¹S´nUý\x0013|CÊü>Ì³²­¡­FpÕ1Röt!(ÍºÒæé¶£Ë\x0017yr§d{?ìCûG·ì¹ñ\x0017Zøáý7H_\x0015Ká©,|\x001b­kJöÚ-ëÜÛ\x0019nYbelDº\x0008VÃL¹]¹#è¯ø)7Â»/\x001a|Lý¾1|y±ñ~ñ_áíþ?Ä=2þÚ_°ê7{-¼¡$·HT¹!\x0019Ç\x0004f¿k~=ðþ\x001f5Î¸O<Í#Ãf¸J´^.©ËÙÖ­ËIsJð§\x001aQ§y6 ä´hý®~;ðõ\x001c×9áLï3/
a*Òx¸J½j¼´½é^\x0014ãJ4Ój\x000eIÛF\x001fß¶\x000e¹àÇøÏiñWY¾ñUÿ\x0000Åo\x0003Þh·^!vs}-Ý¥ÂÜÈòfýùKr»Ey=Ïí+û8~À\x001f³Ã\x000f~\x0005ñÖñ\x0007ÄzÅý\x001bÆÞ+Ö<\x0019¨Ã{bbÒîå8U÷FÂFtP¬f7ù\x0000Oç\x0013ãÞ\x0004ð[rN\x001fË±4±øºY\x001b\x001d^¦\x001aq©K\x000bRr\x0014¯	sJ\x0015#\x001b8¥xËT¿æóã¾\x0006ðc²\/ÄÒÇâ©æ\x0018|uziÆ¥.\-IJ0Ræ¹¥	Æ)8¥xËX¤Íø{ûAÛþÎÞ
°ð-ì5­N\x001f\x001eñ­íô#Z\x0019ôxïÖÒÙ\x000ecc\x001b
B_3*§(¡\x0018`çNþ_ø%·Å\x000f¿\x0010?mß\x0014ÛRµñu³Ýè~\x0003°ÔìX²¿\\x000b:ÝØ\x0005Ey¡hvÈN"rÙÚ\x0001ï­/£·\x0011ç·\x001eq&5Ô-9ÒÂBt^"\x0015gí=§=9;(ÆS©rÍ»B\×²OÐ­/£×\x0010çy¯\x001dñ\x001e5Ô..t°°\x0017YûOiÏNNÊ1àérÍ»B\Û+æZëÿ\x0000\x0001|ã/\x0017|Tøß©x\x00195éõ\x000bÍ+Gðµ¼-,zÈò!ÎÁRÙg0UÊFÃ\x0000ã;þ'ÿ\x0000¢þÌß
þ\x001fþÍ¾-ø1¨ë\x001aß\x000b.íàÔô­Gì¦üDº5å¹)vÿ\x0000ËÂõ+Î~ÚÌ>\x001c\x0003Ã/\x0007cr\x0019T©,©Â3§?gí9V\x0016µ	>XNßòñnã­ý\x000fg\x001dôà.\x001dÉx?\x0019N¥IergN~ÏÚò¬-j
òÂvÿ\x0000w\x001dn]³ý¤í>\x001cxáw>
.©i®x\x000bN®§Õ\x00160z%vs\x000fÙòJ¾Ñ»kuÍzÏí	ûFÁ/m¼\x0001«~Ñþ;ým5
Kã
ÚøgWºÓ iM\x000fÙÄ÷,n\x0017Ë&µu-\x0011mª«ÆsÒxã>ÑÉq<Od±©[7
\x001c¹\==GíW,cR>kEGKÜý#¸ëè÷\x000c\x0011Äøü5*æÐp¡RP+³ç¨ý¢ågE¦é¹Y(é{Û­ñgÅ¿ØÒçMøâMOökÕ¥Õ¼e§Jÿ\x0000\x000f.n/$\x001d(±HÚéÖ;Wu\x000b\x0000WB\x00182\x0008\x001d·ü\x0014Oöºø/û$|rø'ûVMzÚÍ´~\x001bºÓ\x000e¤Ë\x0014%Ði«,©tÜÈ.Ü¶ßû\x000f\x001d<Má?\x000cøËxÅKÛAP/eMÁ·JpÃ)¸.hÝÂ1\·Þ§Öxáâ_
øiÆ\x001c7Åî^Ú
é{:n\x0012náSpNQ»`¹o.]u;_ÚóãÃ_\x0007þÑ	¾>ü0Ôm5{O\x001eµÔôÈ¤WÝmô;\x001b)a]¬
²ªÊ«¸ü¬#\x0000­y·ü\x0014Cöòýü\x0019û)_Awð"Kï\x0016üZ°[ðrêz|~]®4°Ï\x001cE'\x000f\x001bÿ\x0000ÕïRéíÉ¯ñÇÆO\x000eòÏ
ëByS;6ká¹á\x001eXQ¡R2ªÕE(ÉÁËàæm~[³á<mñÃÜ¯Ã°VçÍa\x001aø~xG\x0014g(N2«jQ\x00074y£kòêy÷ÄÏ³×Â\x001dh÷³ÝÌ^8ñcÕ|+â+²ÈºV÷\x000b2, 4²F]\x0018ìdÚA\u¯Æúÿ\x0000.Oòüùú¾ùø\x0015û`þËß´gü\x0013ëÃ_ðNÿ\x0000ÚÄ:ïuÔt\x0010é²ZÅk<\x0006yæ1<»\x001f4µÓ\x0005U.ÔÎ}²øGÅ/\x000fxãÁ,\x0017|YV®\x0017êu]ZU©û(Ó9êMÆR©&ùïUòÆ4Ôyc½÷þÈá\x001f\x0013ü>ã\x0005°^\x001añ]Z¸O©Ôu)Õ¥\x001arI¸ÊU$ß=ê»%\x000e^XîzÆ³ûG7e\x000f~Î\x001e77ª\x000bÖãÂYÄ\x000cv³½Ì·QÊ¬à2Ì\x0002®ÝÁ¹Á¯²?j¯ÛãÃðN¯Ú7áDékq­ø\x0017Wø_g§Ü<	\x001cË
é\x0016ÑZÌ\x000eøã#÷ªÌs¤\x001d\x0005Qøã>\x0003À¾>È§\x0008ºùu\\x0005*mÇÊPXZP¥?\x0010ûIÉÞÜ·q[\x001fÓþ"xÉð;²)F.¾_W\x0003NåårqXZP¥?\x0010\x0012rw·-ÜWCÛ>5~Ñß²íáÞ
ÓâÕì\x000fìõá=%ìµ\x0005`V·¾\x0003²²Üê¿2¤ûÆ\x000e7/qÁùþ
[û|~Åÿ\x0000\x0012ÿ\x0000e\x0004ø)ðkÁÑ_x³V¼æçZ·\x0006ÊÝ^7òÃÇ1a&c*T¡P­×5üÿ\x0000ãßÞ\x0014q\x0007ÑÈr,*6¬£)UQ8'\x0019r©Fmó^<­88Ùïsð?\x001e|cð¯?ðâ9\x0016GSÆUe*Pp§\x0004ã.^hÍ¾{ÇÅÁÆÏsÀ|qã:·Á
\x0013ÂÞ\x000føgscã\x00185Û¹õ½rgýÌ-\x0014\x000bo\x0004Ad$²ºÎ[rtdÚs~l×ðü(yÍ~øÿ\x0000IÕ5ïø!'ÂM\x000eÒÂ[[Ï\x0013'·²½ÜÚÌê\x0002ýÒç$\x0000{â¿»óÌ6'\x0017ô9áú\x0014àå	×qq¼Ûxª1¦¶mígÖÇ÷NwÄã>\x0019\x000e\x001e\x0010rë¸¸Å^m¼UD£\x0005³od[\x001eãc{ÿ\x0000\x000cÕàEìßÚzòs¿vã¶ÜgñÅrR|$Öÿ\x0000à\x001fµ\x0007ÁÚâçLÔï¼?â=\x0012âeÑõxÂêpy¶)\x0015Ú´j±F6­àòÆóÊ\x0010Ç×æß
c¾þ!pç\x0019ÎçÄR:Õ£ÏB0«\x0017\x0014©ÁZ5¿wï=cïyüãá¼oÑWÄ\x000e\x001eã)SðØR³¨¿}\x001ez1Tâ8i\x001aß»÷±jO¾§Ç/ØgâWþ9OáYôËÍKEûCW³\x001fµXÝÙ´\x00120_xn[c©ÚC)éò×¸þÝ?µÿ\x0000ìáðïöj×o´ß\x0002|AÕuÿ\x0000u¼\x0011®kúeØô;kfÍdEhÝ#¶ä\x000b'\x0012ýâ\x000f\x001f­xÃâg\x0000ä|\x0005\x001c&.®':<^\x0016­Zt½\x001eZi)BiÆQ){©TÒ_\x0013¾­x½âg\x0002d\x0007,..®#9<V\x001a¥Zt½\x0008T'\x001aJQ\e\x0018ÒºOâwÓCâ\x0017g+\x001f\x0003øÎ];á¦¹uâO\x001cÜï\x000bê:ÊDèvM}\x0014ÄÅå>^b°O\x0001$2yr(`\x0019a¹ÿ\x0000àþÅ>5ý¦ü=ûU|@ð\x000fÄË}oGð}Æt½+N°k8®^âÞDxÄ;H9còÒÒçÂ|ßÄL\x001f\x0018æLlq\x0014pÒ¥ìéÂ¥\x001atå\x0019Gª/-=[w»øH©ôµð§6ñ\x0003	Åù\x0013\x0019\x001cE\x001c<©{:p é©¹Ó\yªó[­´îö:o\x0011~ÚÞ\x0007ø³ûSi¿µÅ¿\x000bêözí\x0003\x001f
¤1ÚÃªZ²%«Â³»2ÛùQ«8,[Ì'oË\çÁ_ø+ì5ð?²øvÇã\x001eöþ5:ü¦i&çYYoå¼Ú÷Í¯\x000cJ"
ÞY?6îkÀá\x000f¤¿\x001c/\x001eL,3\x001c;'ë\x001côaç®¥ZU§N¿=G\x001eKËÙÇÙ¨¾KÞWÔð¸Sé+á\x001f\x000cÇ\x000b\x000cÂ'ë\x000et©á¹ësViÓ­Í7\x001eKËÙÇF\ÊúOÀ_ß\x000cþ\x0014øÇÅRÞxÃG¿Ñ|Ge§_øbhVkØ#É$w>kí\x000c¨±ì]sïSÅuß²Ïí9aûdxËö³øíá\x0002êËJ¼Ò´u°î\x0015IØÞêRDeUwUr®2\x0015äq_Iáç\x001fÑñK1ãÞ!ÂQ:3§äRIIAÖÄJ\x001céJQRå¼­Æû\x001fIáï\x001fQñG4ã®!ÂQ:3§äRIIAÕÄJ\x000ev¢¤Ôµåv¾Äþ"ñßÆMWãÆ\x001b\x001d2émµ»æÕ¦ó\x0016.uxäA!_6\)íóÏj\x000fþ,ÿ\x0000Wü&ýõÏ\x0011l¬ôO÷ú÷J¶]>b¶SFðZLe;¥ùÑ:/Ê¬Ié_ç\x001e!ðÖeôqÈ¸V¾\x000b\x0017\x0008QÆÂ¥ZþÎ¢íFpp£7=gïFJ2}Û»æþ ðÖeôwÈ¸^¾\x000b\x0017\x0008PÆÂ¥ZþÎ±v£8¸Q³÷£%\x0019B>íÝÊZ·Æÿ\x0000\x000bÝþÅ\x001a\x001fìßg êiªØüKÔ<Gy©J#û#Å5­ªC\x001e\x000eíëän9\x0018ù\x000faïÿ\x0000·oíÛð\x0007ö1ÿ\x0000·xãÿ\x0000ÁËÏ\x0018j>+Õt½3FøEfú`Òä²ÓÙQÖFE\x0004<Jvoßü8¯Û|dñ|*úMc8!"¦2¬(PÅÝRt=¨áÛú»£7QB?ùyù¾ÍÚ|añ|,úJã8#"¦2¬(ÑÅÝRt=¨áÛú»£7QB?ù9ù¾Ífý¹ÿ\x0000kO\x000fxWþ
'â?Ú\x000föHø®Dºgeªj
Ð¨6Óm­î!âcº2´îÁ\x000c¤`[_ðSÛÃAøwû\x0016Éðu¼\x0019ñ'WÖ>*ZÛk:\x0007¼k¤ÙÇ§ýi ¾{kimäBÆ\x0018gX
ÛnÔ\x0005>§Ò\x000bÆL\x001eIá+È\x001b\x001bV¶i\x001auébq4éF$çN»§Jtå\x0016Ý*u#IÇòÚ)ÉüOÓñûÆ\x001c\x001eIáCÈÞ\x001b\x0019V¾i\x0018V¥ÄÓ¤¨òNTëºt§NQoÙS¨©5Èùm\x0014ÛÖOøïñDÒ¿f\x001b_\x0014ñ³¯xâö
fóÅþ9²E\x0008S\x0013¤z\±¶d\x000c'	9pÊ
 @+ñýIS¹x"¿Ì3üË>i¯ÒßÙ3þ\x000bàÿ\x0000\x000bü\x0006ðGÁÚBûÇúHø{=´:\ß
ì¬e]bÂ\x0008ö¬\x0017¦öLÅßpSB¬¼þøð×éueÜ\x001bd\Q<]\x0015¸FÁFöÔ©ÆÊ\x0015ý¼þÓoSPÒ0³ZÞ>\x001bý-rÌ»²Ìå¢²÷\x0008Óx8Ñ­Jl¡[ÛÏí6ù½u=ãáÿ\x0000í¯]ø\x0013Á\x0007¾.xÓÅV\x0013ð\x001a²è¶~\x0010xYîæ¹xæ\x00138F\x001b®$Q·nÐPô¿?ð^ÿ\x0000Øã?Á¿\x001aü\x001døð+ÆV¾5´6w÷Z.fdHü§eS%ÑQ*#\x0002¹R» ûüëéá7\x0016p¦eæ¹V"1±ä©BÔy\x001c\x00145ksÆ-8Þ.7ÞèûÜëéáG\x0015p¶efy^"\x0010ÆÇr¥
WQäpR\Õ­Ï\x0018»Æñq¾÷GY¬ÁBü!ã>?ø;ã\x001fÙïB°ÿ\x0000ûTÒo/5-\x0005&Y Â\x0019áUY&+æ*LÇ¦ÒIè\x000f\x001c÷Âoø*×ìñ\x001bö¿ø-a>ã
\x0013Áß
4VÒ<5w¨ÛÙE4·\x0013éæÅÞï\x00132\x0004Ú±\x00151í;|¸À¯\x000bþ\x001e\x0019ç~(ðÜ%O\x0011C\x0001Rt(Jq£\x00199T¡ì%*ß¼på².·ºµâp×Ò/ÃLóÄþ\x001c§:x\x0018\x001c¶£FS(ÉÎt=_Þ8(ÙAÅÂÚÞêÖÌx'ö¡ømÿ\x0000
\x0001ð÷Ä\x001e7Ñ5\x0002ø#HMÛH\x0013"\x001f!æ"Gò¼¡]°@Ù\x000câº?\x0018ÿ\x0000ÁNà\x001f³7Ä¿_\x0002u¿~.ñÍ|cqâÔtÛ\x000b[\x0012ðÄRâ=ÖªmÑrîÉ9=1îæH/\x0001ø\x00038ëå¸u,n"¬«9Â©Ênpn\x0010å«\x000bÑ§\x0019Bñæ¾ì÷sO\x001f¼\x000bà\x000cÿ\x0000r
ùu|m,n"¬«9Â©ÊNpn\x0010å«\x000bÑN/\x001ekîÎ?j¿Ù÷á'~5øCÂß\x0008×Æ~\x001bø,öF÷_áÈ]ZÚú5F´1åù:²Äã?/\x0015Äø_þ\x000bû:øV=sà¿Ãß~0ø{ðÇûF\x000bÿ\x0000\x000b/´Ë\x0014ÔlÙ T{fâg!i\x001ei\x000eÜ¶vz_%}.¸\x001f-+!Ë0x»(çJ\x001fU\x0015Z\x000e0eMÂ¥IRTå'9¾[ÊüºêÑòx\x000f¥¯\x0004eÑÄäYn\x000f\x0011å<ð©Cê°¢«AÆ
2¦áR¤©*r-å~^ìå-ÿ\x0000l%Ò¼\x001fâ_\x001e\x0002Ò/<\x001bðÿ\x0000]ñu§-lü?s3ßÙÍmk5¼vë4ó°02ÜHî­¹¬eX*?6ÿ\x0000ÁX?à¥#þ
#ñ\x001fÃ÷\x0007%Ó<9á;'EkøDw³´±[¬Ï2¤\x0018; R»\x000fsAøOÒGÇÉxça*aè:X\$\x001cis.Zs575\x0019J\x0017½?w¾§á_Hï\x001e\x001fùî\x0012¦\x001e¥ÂAÆ2µI9F¥\x000bÞ»ËßSý¬¿j¯\x001aþÖ?±ñ·lí­ÿ\x0000²ô;-*Æ8#*Ï\x0015µ´6þlb\x000c²y[Ü®ÕÜÇ
£ùÃá\x000e­ø£â´\x001f\x000ei3ÞÞO«Ûù\x0016¶±\x0017wÛ"±ÂN\x0015Iü+ðn\x001aÁb³\x000e ÂaðÔÜç*åUÛ³OD¼ÏÃ8k\x0007Ì8	ÂÓsªC1WnÍ=\x0012òW<µT³mUÉ=\x0000¯Ó¯Ûgöâñ\x000fì\x000bÿ\x0000\x0005]¾ñÜzD³iÚÇ Ó5ø­ÓuÌvßjMÐ©tBû~ñÛký\x0004ñkÅÜÃÁo¤¥lÆ\x0014Û¥W\x000f
UTW¾©ºà£\x001edâ­ÌùmsûóÅ\x0016±Þ\x000cý#ªæ\x0010¦Ý*¸xÒª¢½õ\x000fi)^	¸Çñ_\x0013åµÏkøñCâ_ìóû\xÛYðýÖª.¥sa~©äXZDgÇ(§ëÒ±¾ ÿ\x0000ÁÁ\x0016:Nà/ÿ\x0000
4?\x0012øJðïáÕ5ýkÇÖvÉ©^l¹y|´\x0016r¬Gj9IUùQ3|¬óé¯\x000c>\x0007*Ë2zU±\x0014pÕ£V­\\iÆ´ùjJ|«ØÍS÷c.Hû±÷c\x001bëvü¼ëé¥O
Ê²ÜlE\x001c5hÕ«S\x0015\x001aj´ùj9òÇØÎ4ýØË>ì}ØÆúÝ½\x0010ÁC¾/ÉðÓÀ?\x00074MA¯´?\x0000ø®ßÄ¶w\x001aò4wÚ7\x0013M\x0019ÖO%óÚ0£iÚ£^\x0019û{ÁAfÿ\x0000ÚWá\x001dÏ~\x0018ø\x000bÄßðêÚíÎ©¬øÅ\x0016¶É34×kr- ³\x000c9xb\x0005r#D\x0004_øËãO\x0001ñ÷\x000eK	á+,UZ³«VµxÓRnu\x0015Og\x0017NrýÝ+ºtï\x001bªq3r»?"ñÆ\x0006ãÎ\x001b\x000f*ÂÖúÍZ³«RµhÓRnu\x0015Og\x0017	¿ÝÒ»§M8ÝB1»nìòoÞ9Ð¼w{ý·i ´Z¥î¡u­jSHÆK®\x0019\Æ\x0017yE6Þ\x0010\x000cCe»\x0005ø¶¿Oå¯ÕïÙ\x0007TøIñ;þ\x0008¥uá?	þÈ÷Þ8¿Ñþ(,Zæ¤i_hkäÒÐQe\x0007bÆñÄ_åôÛÞ¿Ñï\x000c«ðç\x0010ý\x0012j`°Y\x0004±Õhã¹jÒ§MÎN¢ÃEýeÆ3O1q¦å§n^§ú1á¦#óÿ\x0000¢}L\x001e\x000f!6¥\x001cjZTéóÉÔXx¿¬8©§Ë\x0018¸ÁËNÜ½O¦<\x0019¤øþ	_®ü=ð×$Õ<Icñ¶ÓU½k\x0018&k}?û\x001eæ?´:Æß,hùMÅB\x0002ëMv>;ÿ\x0000ê|Pý5[Ï´?ÀËÛ/Ú\x0006b\x001aBYmÓ$7\x0010¤¶¯9eJDÐýÕîý~Zú¬ßéÄÞ\x001aâjeKÊ\x0019Æ\x001e/³äµ\x0007í!\x0019Òu9ª*Â\x000e\x001f
ë-ýÓê3¥ï\x0011xm©q&Y(føzn>ÏÔ\x001f´gIÍÊ¤j'\x0018:
ë-ô5ü/ÿ\x0000\x0005\x0014ý®eö\x001a¾\x001eÅiãO\x000bè-¥®ã
\x0016æ\x00160ÏjÞ[\x001dãÌ\x0013\x0003@AEÙ°ÊyñK\x000fø/\x0007Ã\x0017h¾\x001bÐ~3þÃ	Ôm¬|]©xUÒÊWHï®%\x0017\x000bun$¸\x001f¾iþy\x000bcÕkòj?Ll4Â`ðùï\x000cajB"¶"j0J­I{ER_U=é¹iÖ=Êhý0r,Ï	Ãg5©
xØ¨ÂM*µ%í\x0015JjU\x0017¿*ôÛõ§!¯~Þïã_\x000fi~\x0019øû)ü0Öítï\x0018jÞ&ss\x000e¯\x0013Üßj-n×&FPL£\x001bhFÀ\x0002íW\x0018­ûÏø8FÇ> øË¡~Çþ\x0014Æëhúoµùm¥óbÓ¼åuw\x0013î_½)*]Ä{öªý9hC9Åg¸~\x001eÃÇ\x001fÊéaê¸Ë4yP¨ý­ÖòmCKµÒç³SéÁ§â³Ì?\x000fáãåt°õ\eÍ\x001a<É¨MûK­äÚãv¼ÎNÿ\x0000¤øÓAøÁ{ñ÷Ã\x001f³\x000fÂ½/Æ\x0012[Io£ëVZªÉ£Äìr¶ñ@Åñd-µÏ=\x0005ygÀOø+¯Àÿ\x0000\x0000~Í#öløû\x0007ø\x000fUÓ.<K\x001e¥«,%uÔX¤÷R«Î7\ªIå¡û»\x0006\x000eÜWç\x001c\x0019ôá<ÃõÂ¹§\x000bá+QhÕ©hIûGiEÔê+ÕeÉ\x0007ðòi¡ùç\x0006ý%¸K$à/õ_3á|-Z2­\x001a-	?hí(ºR¨¯V1$\x001eäÑØà¼\x0015û^i\x0010ýßöi½ýþ\x001bë\x001auÖ½\x0006¯©ëºÖ\x0013S¿º.ãä
B8×ÊòXc4ÚrÊìK\x001fXÕ?àà_\x001a§õ/\x0019ÜþÆ^\x001fÿ\x0000GÐÒËáæ©%7:s\x001bp+·Ú?w\x0019xàÿ\x0000WU9ä
ý+\x0011ôÖá¼FmW\x001f.\x001b êQ¤©àæàùé?gË%'í}Ø·\x001a\x0006¼±×SôlOÓG±\x0019­ltøv©F§ç¤Ü9d¤ý¯»\x0016ãOà»åºØèµÛïFÖµû¯\x0015_~Åÿ\x0000	´SÃöÚO®â·ÕÐèioh¶ÑM\x0002
CËy\x0015R6\x0006T|4`\x0001`|[öGÿ\x0000Êx³à©ñ\x0003Nø¥ðÞÃ]Ð¾!xMzöÒ\x0008ÝN»VC\x0002´¨
»\x0008Ôî'åO^¿xiô¦Í8G\x0011QÍ°p¯Ì+:òMºU%'9{4ç\x0015i>X¾fýØ®»þUá¯Ò2á,FkK6ÁÂ¾\x001f\x001fY×btªJNröiÎ*Ò|±|Íû±ï¿x\x0013öñ\x0017|)ã\x000f\x0007^x?A×-|i%´·ÒkPNòYK
ÊÜy¶Æ9Qcw(#rÊùO
pFÿ\x0000ÿ\x0000à¶ÇµÎ±ñ¯Åÿ\x0000\x0004´é¼%©ü7o\x0003
8Èº[^­Ùr¦m¾nü®7mÚ}y¯o2úZÔÎ¼LÄgØÜ²°upo\x0001ìRwö\x000eª­v½¥¹ù¯\x001f¥õ=¼Ãéa,ãÄ¬F{Ë ðUpo\x0003ì¬ïì\x001dUZísòós^6æååóÔé>!~Úÿ\x0000\x0011>$ø§T×õï\x0006xj+=GÀÉá(´;[[µ±ÒÒõ/Q!ýþõu\x0001\x000cXOËÓ\x001eEÿ\x0000\x0005(ý¼|\x0007ûjÝø+Iø_ðÛÁº\x000f¬ïa°Ó-­ÄJ~ÒÐ3ü¢G\x0003æßx×æ^<xÉø¯W-¡åÑÁa°Q©\x0018SyWï\x001d6ôçÞ
ôÝøíã\x000eOâµ\ºSÇ\x0007ÁF¤aN1å_¼tÛÓKx7óg\x0019ñâÝÅVÂãGø_áï\x0008iÚ]ÚØh¾\x001bûQ·rYÜµÔóHÌÎY/±À\x0003\x0000|Ó kWþ\x001a×l¼E¤ÌbºÓîâ¹¶z¤°e?Q_àñU°8ºx/tå\x0019EöqwÜÑøF\x000f\x0015_\x0001¥¢ùgNQ_g\x0016\x0014qµúO ÁÅ¾:ðïÃ{[/zCøî×AµÒV$6÷)\x0008\x001b§r&
æ9i	
»y\x0015ýåúsç¸\x000c©å´a
4èºKQóï\x0013ær½£Ëª±ýÙúpçX\x001c©å´Þa
TèûGÍÉ%\x000b^r÷ïÍ&å{E-¬{Þÿ\x0000\x0005\x000cø½á\x001bË\x001d{Áþ\x0008ð®Xx*ÓÃ)â\x000b+;¯¶K\x0004\x000cÄÝ;=Ã)¹]G
\x0010©ùcSÍs¶\x0017ü\x0014¯öføßÿ\x0000\x0004íðoÂ\x000f\x0008~Ì¾\x0007ÒüQ\x0012É\x0005Þinë\x0016Y®ÿ\x0000{f\x0016bêA\x001coR7;d\x0011ùÿ\x0000\x0014<|à\x000e.ð;-Èð9&\x0016.<Ñ#\x0016£»«ïPµG$ýèËßMsJWOCÂñ;Ç\x0001âß\x0004rì\x0005á©bãxÊ\x0011QÃÝÕ÷¨Ú£~ôd¹Ó\ÒwMXÎøÛûM|*øû?x\x001fá\x001feß	xgYðÜ\x0013.¥â,ßý¦p×wR¬\x0011¯%V¤è[ÌRÛÕ¶M¢¿<køþ'<V¿O¼7ð×Æ
ÿ\x0000àÝ\x0014x^±{TÕõ{;Ý5Ê2\x001bk\x0016lÈ\x001dG­ w\x000fæ¹\x0017Ðg\x001fÄÁÁV©JpÝ{¯\x0015AÅêª±ýýÈ3LèCÅb à«T¥8n½×¢âõ]µV=·Ã_
¼a¤þÂ¾!ø§¨h³C¢êþ*ÇN¼xYcX\x000c
*£\x0015Úvù\x001eü×ü9ÿ\x0000h_~	Ð´X>\x0002x\x0013Qñ\x0016ám\x0016ÛÆ·âíµ	b@ó\x001c¬¡\x000b7Ì[
\x0017,p\x0007JøÜé³Ç9\x000eS¡\x000c«	S\x0013¡
\x0011ÄÍUu`·mTQ¼µnÑQ»z\x001f\x001d}4øß"Êp´!ájbhP\x0008âeí]W\x0018umMFòÕ»E+·§Bï?à ?\x0011¾\x0018è\x001aT~\x0011øSà{o\x0013è^\x001eFÐþ }ûûfÂÙ%.\x000cN.Å¸}¬ñ\x00160\x001fÝ¹Q!ðÇü\x0017×ã\x0016á
\x000fEñ\x001fìÁðã^Ö|=¡]iZgõ8ï
äPÏ0ñ²eUùÒ391­såßLÞ)ÂeX\>'$ÁW¯¥R:õ#WÚF5%Îþ\x001a+Þ^|(Ã/údñF\x0013+ÂÐÄä¸:õðô§Fiª¾Ò1©.y|5\x0014~%\x0017¢WåE\x001d'ö×Ôí¾\x0013x{ágg\x001e!Â¾\x0018¿Ð¼?ânÏRmJÎÚêò{Âêb¾Ý¤k\x000cLÐªpU²sðÇüEsâß\x0014ê~+¾·\x0019µMBk¹¢\x001dÒ9r«vØ\x0019¯ä,Ç\x001bS2ÇÖÅÍ(Ê¤¥6ÉÉ¶ÒòÔþFÌqµ3,Â¶.qQIJm-m¥å©âuúeÿ\x0000\x0006âhºõ\x001f\x0012¡Õ,\x0016ÎÎ\x0018,ÞCæ»G\x001dÓ6Wn6àuõé_ß¿A\x001c%|\x0016/9Íc8{°§\x0015\x0016ß3qVô¶Ú÷î{}\x00060ÕðXç4á¤)Æ1»æn1ªÞÙ©wî{_ì1®j\x000bø¥¨|BÑ5kK{\x0013Ã×³Ems!VºÍ¼Ñ*ó)\å~SÁ¯\x0005ý®ÿ\x0000à³ß´\x000fí/á
x'@ð\x000f>\x001fÁàí~-WF¸ðdê(§_÷®Ë÷'`~_á\x0015øÏ¿J¾7ñ\x0003.Á`0øJ\x0019|0ucVÃó§\x0019Â5 ¿)/£éÑ\x001fxô¦ãN>Ë°X\x000c>\x0012\x0002\x0018:±«MáùÓSjA?~R_
F¶èµþ6øwÃ¾\x000cµøáo\x0005è\x0019N£x*ÖêÞ\x0007¸\x000cçíR}¢âfiÊ¾ÂÊÊ6¢
£\x0004O\x0015Ápþ1kZ\x000e½áOÙëáÿ\x0000¼uâ é ø£ZÜ.¯{jb\x0011ynï!CHùp<¤ãôs/¥Ï\x0015bðxª<§	Ì1Týlm(Íb'OÉÍÇá-îéÉ\x001eÇ£ý-8£\x0015ÅTÁå8L6a§ìªã)Fk\x00118rrr¶æâí\x0018ÂÞîìM©þØ\x001e3»ðeÖ£ø\x000fÃÚ?µ[),<Eñ\x0013K¸ÔZÖ¬$¢Îã}ãZy/\x0019Do*Ú6a
e_v÷?àà¯ÚGÂ¾\x0016ð5¯~\x0007×lü)\x0003*.¦·dßM²0³Ë¶P\x0004ñÊ7\x001eìå\x001fM~=ËrÜ¿\x0003_-Â×§·:«ûÉZ<³ª%Í\x0017\x001edâ½Ðö2¦\x001då¹v\x0003\x0005_-Â×§OãU=ùrÆÓ¦½å(ó{©+ô/x+öàøá/
ø\x000bÁZ¿Ãÿ\x0000\x0008ø@øy}£è^ ±º{k¤ZK
ÄLí\x001b[Å"ld\x001bæ\x000e§m\x001aOü\x001cCûgiöþ/¼»ð×¯5\x0012êsÜiZíÄS}£ÃöÒ:²YÚíp¦\x0018Æõ_1Y¿xÙ'xo§\x0017\x0014)æ\x0013\x001a\x0013¯¥N«ùðÐN4iZJ.5Qç¥ï;· a¾~*Ð>¤èÑ|Lå*uZ>\x001e\x0012iÆ+IEÂ\x001a¨ó©KÞwlÙÿ\x0000þÓ-â?\x001bü@T²ÅÞ5¸wO\x0019Ë-áÔü=\x0013ÜyÏo¦Kö¶Ðdc#íWU*NáÍþÏ_ð]_Úßà/Â]#àüú.â;F×\x0006¡m6¼³\x0019Jscå:\x000f,cg'®0+Àà¦\x0007¼\x0015Ã8|Ó££B¯´«ÏÍmvù%\x0015ÉvÞ×»ÞÚ\x001e\x0017\x0004ý/<JàÎ\x001aÃä§K\x0013J_i\x0017WÚþíòJ+í½¯®ö9ÿ\x0000¶§Ç?¿\x000c4oÖ:µ®£á=\x000fÆ0øË@ÕÒYmÌhêb*²&!pí½\x0017i%\x000c¤Ô¿ÿ\x0000ÿ\x0000mýCÅ^$ñEÄZ\x0019þÛ¶H4»3\x000c¾^\x000fßf;òw\x001d®|Âß2`|µéVúlø¿_2Æbäé~þ*4ãirá×'#ö^õõÒOËU¥£[é§âå|Ë\x0019²ýôTiÆÒåÃ®NWì½ëë¤;«K-	¼]ûw~Ô^7ñ¾¥ñ\x000b_ø§¨É©ê6
c\x0014knla\x0010ù6ª\ù	åª®\x0017ûªNO5äÿ\x0000\x0000?à¨ÿ\x0000´À_\x0010ø£XK\x000f\x0010Ûx·W}STÒµ¿0Ûý­æyU\x00112\x0015c#î<õU¯Ìø/é	Ç|\x0019Æ×"\x0018º­Juy=£Pqi¹;½wHüÛ>\uÁØÜmh¸b!¨êÎNnOhå)¹EEÅ¦äîõè7ÑüqâM"{¹cÔ\x001etÔdY5\x001b{\x0019éÕ÷«IÈ,Uþ`sÖºDÿ\x0000ÊþÕ?´.³ûDkÐé\x001aî·á¯ì\x000b­\x001eí%û"iÂäÜ,
\x0011Õö«Éby¯{þ&Ä¼qâlO³«R½\x000f«Ê½£í=¢¦¹d¥Ê¥çsÞ_J/\x0011ªq¶#q\x001eÎ¥JÔ~¯*rRöj´ö\x000bJVRîÛ:-öø×â¯\x0017ë^8ñ7Ä\x001dJþûÄZaÓu£utîv\x0006hæû#\x000cçÉ\x0012E\x001b\x0004\x0004\x0000cSÖ¼¿öÌý·þ(~Û^&Ñ|Gñ#GÓ4åÐldµÓl´¥E\x0012;+7úÆcTw¯ÏüSñk|YÌpø¬Ò:~Â\x000e\x0014áO1nïâmïæ~â\x001cAâ¾?
ÌéÂ°!O1»ø{ùÏ|[­xÂú+Ýj}ßg·X-aL ÌÁ\x0010\x001cáw3\x001f«\x001añü¬ü´Ë®ëöxý¢¾)~Ëß\x0013,¾+ü#ñ\x000c~©f®_¹,o\x001bFÈÃºc__Á\x001coÄ^\x001eçô³³¥Z\x0017^N.../ÉÅ³ë¸'¸ÃüþqUtëBëÉÅÅÅÅù8¶^ðïõÿ\x0000	k\x0010øÂúÅÎ}n\x001bÈ»²¢0ÈQ²à£\x0015> x5ô?à·?µwüyá\x0016^hÚ\x0004z_¡S¤øZ8æû
\.õ[\x000c`I\x001e1ómÚßw<×îï¥§8üç\x0003:J
/gA)û%5ÌMeÍÌ£'\x000fü7?sÆý,<GÇg\x0018,déÒTp÷t\x0012²S\ÉOâææQÅËÊþ\x001b&«ñçâ´\x001c³¾ñ=ÃXxOË>\x001fÒLò\x001b[2Ò+$EÜí×f¹ï\x001dÁ[?h3|W\ÐôM¿\x0017c³M~5\x0013\x0015µû5X§>\ÄÙ;³Èôâ¼\çé+ÇYäó×¥JÙ·²ö«ß÷=\x0007B>ÏÞÓÜww¾¾G}$¸ã:xñ\x0014©Â²¦ª¯ÜöT]\x0008ò{Ú{î÷×Èw>?üWø7î<_â¹ï\x001fÅºö¼dbMÌÖK
»\x001cài\x0014{\x001a­û9ÁY¿j¿Ù£áÇü+¯\x0006êöZÃ$Z\x001dþ \x001d§Ò\x0011Óc6^WhÃ+\x000fqÞ¹¸\x0013é%â?\x0000d_Ù
q¥)]Êå³³QÕ[â^ê±ÏÀßHÿ\x0000\x0011¸\x0007#þÌÀT£\x0008¸Ò®åEIrËÙÙ¨ê­¤^ê(ø\x0007ã\x0007Ä¿\x0017pê\x001e\x0001ñ¡¤ÝÚ¬âÂîÊíãÏÏÊÂT,É\x001fÈÄrT
µðÓþ\x000b+û||7Ò®ttøËuªÁyªÉ¨]&¥\x0014mæLèÄU |p+£ úRøÑa§B\x0019ªBu\x001dI)¨»ÊJ)ÞÉ?²éEã.E\x0008æ2©	ÍÔ¼¤¢É*ØÐÐ¿i\x000fÞ\x0018ðÅ×ô\x001f¾%´Ò/µi5KÝ6\x001dba\x0004÷®¨pé»kJË\x001c`¹äì\ô­Øàº¿ðQ\x0008<MâO\x0011GñyÖ=JÒÓOû:y:L¬ªÜÛü»¼ÄòÉPå.ÙSÆ=¸}0¼saÄ¬ÅÚ½7\x0008ÂÑå£&¢Jz_<¾ï3uwÐö¡ô¾ñ¾aÄÇ0v¯MÂ0å-\x00195\x0014ªSÒüÑåÓÊ:»Åèt\x0016_·\x0017ía¬j~ ´ý¤|e\x001dæ±\x0001úáuùÃ0!\x0006åÃa\x001fj*]¤\x000eW'ð[þ
õû{ü\x0006ð\x0005÷Ã¯\x0001|q¾Æòö{Èh"w¶iei\x0010ä¼²»ÙäñÅ|×	ý&ügà¼®Wf)ÊSWQn\x0012¥9Ê7òÜï®Ö>k>þ2pvKW,Ës9Få)«Æ
ÂS§9FñÞS½õÚÈÍøaû[~Ô\x001f\x0005<1qàÏ_´\x0007ü5¤ÝN³Ï§hºüöÐ´I\x000f±\x0018\x0005l±9\x001899®Ïöpÿ\x0000ÞþÚ¿
¿i-\x0003ãwÆï:¯tý*+n´MB8R)cÝá\x0004,K\x001fÌ/#\x0019â¾«>þ,ä\x001c{â\x000c÷\x001fS\x001dNeJ|ª.2¡´\x00145ù£ªÖ*ú\x001fUÀßK?\x0015²\x001e<Âgùî:xÚTT£*SäQq%
¡\x0018k\x001b©GU¬uÐê¾\x000bÿ\x0000ÁBj\x001fÿ\x0000´×ÿ\x0000k\x001dGâ\x001dÿ\x0000<WáØn"²o\x001djz/\x001cÖrÚ\x0014ß#íX¥%B²eRA\x0000©áþ>ÁK¿h?\x0016~Ö¾7ý¢~	|\ñ\x001eoâ;í4µ¸H\x0012â\x001d%®\x000cÑZº(t]­òÏñ\x001aù\x001e3ñë³?\x00133>'Èqõ¨G\x0013)Âù\x0014ãsç&4W+×FõêÏã/\x001ex×2ñ'2â\\x001fZq\x000ep§~E(Ðsç64W+×Ýo^¬à¾#|dñþ.x«â®âmVÒëÄú½åÕÌÉzÑÌñO9Ê¡\x0019\ìÊýÜ¢ú
òÿ\x0000Ú\x0017ö²ý¢ÿ\x0000jýWMÖÿ\x0000hÚn´g·Ó$Ô\x0012%û<nÁTF9*¹8ÏÊ+óÞ7ñ'|HÄÑÄq.:x©Ñ7>_r-Ý¥Ë\x0018­Yð\x001cmâG\x001cx£â\tñS£\x0017\x001an|¾ä[»IF1Zµ©ã¯\x001f\x0010þ'ê°ë¿\x0012|w¬øö\x000be¶ó[Ôåº(T³,Jò±*³\x0010¹ÆXæ¼öÞâkIãº¶Ç$N¯\x001b)åYNA\x0015ñP©Î2³Z£â©ÎTå\x0019ÁÙ­Q_£ÿ\x0000ðFø(Ç%ý¦<=§þÒ_¶Þáÿ\x0000~\x0012Ðf¶ºÑ¼aªÛYÇy\x0007Ø¦Ö\x0008\x001d£]í\x001c\x0016 º«Ôô?ÝE_\x001c¸¾\x001e!`éqG\x0012C\x000fá(Ê\x0012¥©Ng\x000fc:t©Ón
î\x0013p²åïáÜßE¯\x001bøº<¥ÄüGO\x000fa)J\x0012§:q=éÒ§M¸+¸OZÊ/=v>ÿ\x0000hþÕÏÁÏÚÇÂ~'ø§ñËUÒü\x001f¤iZ­å½ö«pöÆÝ´ëa¶XåÛæHP¨U<\x0010+ã¯_·'í[û0Zêz\x0007ìùñ»VðÎ¨ß=ÅÕ­ÂñË!Ú»ñ"6	TAº+ùo<]ñ\x001fÃÊU°ü7TÂÒ©')F\x001c®-»+ÚQzÚ1_#ù|[ñ\x001bÃêU°ü9TÃR©')F\x001c®-»+ûÑzÚ1ÚÛ\x001e\x0005àÿ\x0000\x0012~\x0019Ïqsðçâ\x0006µ Iw\x0017tú6«-©3¬beÜ¹\x0000à×\x0015ñã?Å\x000fÿ\x0000\x0010/~*|cñÞ¿â
Ec[ÝN÷`Q\x001ck\x0012\x0002\x0011UFÔE^\x0007ð×Êñ?\x0015q\x000f\x001agU3|ó\x0013*ø¼Ó®ùb£\x001dZF1Z%±ò¼OÅ<AÆyÕLß;ÄJ¾&§/4åk¾X¨ÇáQZF)hº\x0014<Gâo\x0011xÇ[¸ñ7µûÝSQ»p÷z£tóÏ3\x0005
\x000b;Ìv\x0019'¢\½|ñóå
(\x0000¢
(\x0000¢
(\x0000¢
(\x0000¢
(\x0000¢
(\x0000¢
Ýø?âkoÆ?Ð×ø\x001b×«ÿ\x0000\x001e\x001fáýYêæÿ\x0000ÇøV\x0015^Qå\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005oü0øã/Þ=Ó>$ü=Ö\x001fNÖt¶\x0017¢±\x0014?+\x0002§*Ì¼õìd\x0019ökÃ\x0019Å\x001cÓ-¨é×¢ï	+>Wg\x001e©­bÚØöx>Í8c8£eµ=z.ð³³iÅèÓZÅµ°øfÖd¸·£6
\x001b¡ÁR9\x0004\x001aûÆ?ðZÙÿ\x0000â÷ô\x000f\x001f\x001e?à'¾!ø~(Ö×ÅÇâ5ÕçËÄæÖ\x001bQ\x0011ÚHùX0;kû\x00035úWpO\x0014fØ\÷ø6+3Ã¨òâ>¹RÜ\x001bpn(û?w³Nöù\x001f×9§Ò«ø6ÂçCÁÔ±Y\x001dG\x0011õºõn/ÙB§îöiì{÷m\x000f_\x0014"_\x0017|sý¼9âÏ\x001fM\x0011þÓñ³xûO7ò«7,V\x001d®R?.2\x00165W\x0011Àkå¯Û·ö²¹ý·iÍwöºð\x0014>\x0019mjÖÆ\x0005ÑmïþÒËkg
²âC\x001c{²!Ý÷\x0017\x0019Ç8Í;øÇâUO\x0017<AÅqDðÃ:Ñ¥\x001fe\x0019s¨*T¡I{Ü½ù/ð«^ÚÚçóß\x001e$Tñgñ\O<*Ã:Ñ¥\x001fe\x0019s¨ªT¡I{Ü°½Ô/ð«^Úîy§í\x000fñ·Uý¢>.j?\x0016õ\x000eØi3j\x0016¶VÉ¦éV\x000bx­là´\x0010\x001eÕÀ÷Íxý~^~bq4P\x0001E\x0000\x0015Ò¿Åß³|8á\x001c¾'øv\x0019L±ilªcG2y©ÆW/Í{²â<îY$ryVVº§§*mó;i}õÜ÷eÄÜ²Häî³xh»ªzr¦ß3kK­uÜ+¯\x0008ð\x0000+Ú|WûUøCÄ_±¦û+Ú|	±²Õ´]`ÞÏãÕÝ¦»Mó·mü ¨12®wõCxýS1ñ\x0013*ÇxYá*y\!ZNwU\x001bÕê>GOF?\x001aWæ\x0002Ó]?SÌ|CË1¾\x0017axJ\x0019d!ZNwöÊjõ\x001f#§È~4¯Ìþ
µÓFm[GÃ0èÑx^Ú;ØîLjË<¦I#Á\x001eQBÞX\9
\x000fË×­xµ~V~XgQ@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005\x0014\x0000Q@\x0005{÷ÆßÛ×Äÿ\x0000\x001bd?\x0004þÉ:§Ãû\x000b\x001b/\x0005ê6÷VÚÍ¼Èe¹ò­\x001eÙQD¥r®XÇÓ½~ÍÅ2f<Wá[Áp§O\x00058N5"×4¹):J-(Eìîýç©û'\x0016xÅq_yo\x0006ÕÂÂ<\x0014á(Ô\Òä¤é$Ò^Îíó=~ób÷ÆúÕÿ\x0000l|\x0003<6BÃO¾îÝã°'2H¬\x001aUPî¸A$ÌñWí­ã?\x0017þÅ:'ìW«ørÝ´Í\x0003Äë«éúÇ¾dj±ÎgÙåçnéÝ³¿Ûo§ø¯f~\x0013á¸\x0016µ\x0018º8zþÚ\x0015.¹å}/%ùoQÊüßöéÁx«æ~\x0014a¸\x001aµ\x0018º8zÊ´*]]%\x0019ÇÙòò^×¨Ýù¼¹Aüq¯ËàTøw,¶\x0016¤/¢V¶C,rùlVLn\x0008C\x0012S;sÎ3^[âo\x001føÃÆV\x0016\x001aoµéï Òãhì#ä£mÊ¯ýð¿~yÎ3<Î*Xª®q¤þÊvº_r?=Çg\x0019gF,UW8ÒMA?²®¿\x0004c×qñOö³ø£ñà7þ\x0001øêê;­?À×2è·F(ÖDX-áX\x000eÔRU\x0016ÝpI9Ü}+ë¸Ä!â~
Ë¸w0,\x000c¦é;E5\x0019Â\x00144mASV»{]Ä>$q\x000f\x0013ðv]ÃØù)RÀÊn­\x0014Ôg
pPÒ)Ú
µÛÜÒ½ñf¹¨x[OðeåÒ>¥Þ\ÝYCäF\x001a9'H\x0012\¸]Ì¤[Å$ªb¡K6|º¿>?>`
  
  
  
  
Instances: 6
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=%ÍO\x000e\x0002éST	iTSª²7%­ \x001bcO­\x0016M¤*wS¬íM±¸¹ÎNUÖ\x0016ÑéºØ¬Lªâô\x0014[%V\x0015'§è*Émyj©ª¤:}¦T	L;:\x0005°­\x0008Y*)\x0011×gíñL°L À\x000esØÜ\x0018QØ,©<?\x000eo¤\x0011Ã4Z\x000c\x0017²\x0010ÃGøa=ÏTI.FÉ\x0011Vò?·ÿ\x0018\~XÖíËWÍ¶nngß6/ÇoÆc¥®Ô«W¯Ä/×¯Å`(¨?ÞÃ×\x0012ú)Ç\x0006\x000e?ÓcÒ®ËUå\x0007ï-hø­\x000f~Ã\x000fÊ¢qÓzå6RCçáÍ4æá×Tù\x001a9*á1F¦'IHúQB°ÃzE\x001fS?w:Ã²¬ý"K©
®[K(¢\x0018~:ÃaxÖ·hMxñ«_³f±\Ê\x0011NÏÚÍ94\x0008þrW­<\x0014Ór1?\x000e/üÖ_¶Î[Ê\x001cFÂÝ¸óqø)Ý¢Ô>¹ãZ\x0016øR\x001as»360°#(ø×´aÁ\x000cËå¿àr'r*´\x0001\x0000qdM)+F:IÓÏ£CÛ¸/ÛÒ|0</p><p>"w°Ür{ßÐ`½\x0015\Ve­ze\x0015wÃ«kï\x0014ð&0¦à\x0018ßu;P1pü\x0017\x0002Âæíçk\x00110a\x001d8Ü°\x0003î5\x0011
DÁi.\x0010c~=ì\x0011\x0006öw	Ág\x001cìÇá\x0015¡\x0011S\x000539kJ·T!õ\x0010õbNU!r7â\x0017i!I\x00073\x0015K©þ°l§6oö\x00027:)Uêat³@L·M(êÜ\x0017lÖNá(\x0018.\x0010è7A!,\x001a\x000e{}^Å~\x0016{×Ô|n?&æÌ·Íæø´\x001få\x001d·¶@Á¨\x0018\x0006\x0019\x0000`p£Èµ\x0005\x0002\x0003m\x0012d\x0008>¥ÿ-ZÅ¡@\x0019q1\x000fÛÒ\x0008~=+Aùü\x0012JNæË·ÁÂé;\x0014}Ù³</p><p>\x001aV\x0003\x001eÈìZ\x000cQ{NùûD~.{\x0013ô­bìãÙL¤®ö ­µ\x0010Üv\x001fÜ:?\x0000÷_HµOÑ+ò"R=\x0010á\x0013\x0014¸Ä0ê\x0015\x0012ÏÔÁÃ4\x001c")à[´â\x0011Y¨b4¶ûÈ\x0004Pê>\x0001L·âV\x0016Dä¼!%!!-V\x0002&Ì]\x001bÙ{D\x0011ù\x001dJ@nL{gµ¦9\x001d©þ± y)ë\x000eÁPÏÂ6,-\x0017\x0002u'pÓfåî·x¦ÀâP\x0003ºÜ2L*¸:µÙìIA	k"³?·aÓvØ°\x001fâ\x001d±µÏh\x000eqÖífÍUg»2å_ß+ýLLBù\x0002N\x001dÐ\x0017:\x000báÏ</p><p>æÓâJð	±CÖí\x001adSß7¾xÞ\x001bA¢|/h<Ñ­ä\x0002ç\x001d±Z½p\x0016Ô ¶h§¤±ÜWý¼{Qäp$
bÐ"&ûÇ\x001b²ôïFdÏbµ´íCô)\x000c\x000e\x000bë-\x001c\x0006ëü»}H}xÓ5A`So:Æ\x001e\x0002\x000cñ>FX§	Å¹éÖù¤\x000fòØ½	ædøO¨\x0008ü~}ý\x0006*Ú©6ÆNn\x0000\x001eu#¶íúÅ=¦ù9P\x0002&ó\x0010</p><p>ªò#¢ÿH5µáÔÏÚ¤!å6"úåÊµh \x000bÂnóÿ
fí\x001eÛ\x0000"*eú#^\x0006.hUyÂÊÆí9\x0016Zè\x0002Å`×nÁdo\x001b\x0007M¦\x0011w\x0017\x0000ÙAGºYìÉ{fÆ^&ØÓØkJeÄL\x001cñ.2l¨ö¹Ûb|
^¨];ïÌÉh;Þ£k\x0008Ã\x0007z\x0016C3Ý\x001cìõö\x001al8\x001b\x000ey8J­ÃD-=@éÚTÖPÒr´</p><p>àì½0qmú-\x0003¤:\x0005ñ</p><p>C\x0019K³¨M¹âµÏÍÚµ§,2ïül\x0001ê\x000eì®T!Fyb%¨1Ò:æ1EÁ{7ydp©íÇ\x0002!ú=\x001e/àÏÛÇ\x001c7àEÍ*íí£>n\x001fñ:vÌ<¦p;\x0003Wcl\x001e
H>GÂÎYÍûW:È×\x0004$8]&zö7Ä¯\x001b±tÍ\x0004©=ú\x000e)Ã=Ó²ØyïÙpº¾£\x001e½@[uÒcí¸§æ\x000b¸¸Ý}ClW÷\x0012Å\x0005 v\x00163\x001dõü¨g\x0010/ä#¹##g¤ýÞè¸\x0008^d}àÒâÓí}Óý=ïPÀ³ýðÌ\x001bÓ\x0018ð)
R£¿Íw¼³vÄ\x0016\x0007\x0017ßÝ\x0005\x0006ào	D\x0007L4Ö.¬éG¢gé×ãyQ½öÀZ|\x001bãM\x00046[ùs_¸èÒxÂö£'zp\x0018;æ¡L£\x0005</p><p>97]Ëðµ\x0003/Ö
 "G¸rµ_ãù¶\x0019\x0008 ´'ï¹¦,Çò@UZk¸Éö©ª,Kb\x0017\x001eWº¨"W\x0000úEtjSOUæ)ªÒÐ\x001d®Êò$¯L%LVÂbÀzÄUWt;Ü</p><p>
ú¹æ'Sêà¨A[êÙéìðV²ñ\x0014×®Ãq`«¯ÖÄ\x001dÍÎÃúµ÷züA\x001aË:5!æ×£Oð\x0015õ\x0010»þ&u Êïä\x0005Ût¢\x0005p\x0005Özt\x0014þ¦ep±NbÈñ¢LÖGrr\x000ewÇËJ«­ãõ`êÍb^£
y q\x0012uBAPN\x0010×<bèî@ErTA]Ñ¸=ÏÁåTÿJ :uÞ\x0012%\x0006¦éAÁÇ6.¸õ|õ_ß\x0008£ÈÄÓ!à#¨\x001eF\x0002e\x000có8ÓæxA`Q<»\x0012\x001aK0ÿU'àwc\x000c\x001a"3</p><p>1³f:Aß\x001c¡Pô¡³Þ!nØrÁi¥\x0018§}\x0011ñxdJIç~f\x0016\x0001\x000c\x0008DsÞ\x0012\x0005í\x000f(\x0010²iïH\x0011äweÂ%ØÄw$ö9£3&ñºMdSh\x0012ÍM\x0012g§\x001bDw\x001aä@*v\x0006=/ûçàY~y°
)g4À,u\x000e)=únºò\o+¦Xä).Q¾\x0000\x0008OO$ë¥\x0008Ee\x0003g"t¾=¯\x0004;Oå»UÁ\x0014ùß\x0001õiO|fG|\x001c9piTß\x0011T	Ù|"üÃr\x0001\x001d\x0013ÙðÍêûóu\x000b"K{²¥h+º6ñ\x0004øPß]#«òÞyB¡¨Ç:m\x0011ÑëÇPî¯@Ëk'mNÃfp½=ðTüC\x0002_oÝWÚ¨_ç9ç&9\x001fwnÎEà$r\x001b</p><p>¶ÀÇt6|4 ­X³'·PEÜ\x0002\x0004Æev«ßþ
êÛAPªj\x000e«z</p><p>¹ ×¾\x000bØêù&Á»Ç
ðaA,\x0017³8fg\x0014W]\x001c×ÈÇ,\x0018.~'å'Ã{ôª\x001a¯gÅ6ÿ¢\x0017Æ³×ÊTÙc§Á¿àdSº÷xâ\x0011Á0Ç\x000f\x0008\x0008T§Ý¬Ü=\x0018|xöÆ5ÒÊbE|$5­)	ÿRádos]$½\x0004</p><p>ö9\\x00109U2\x0005Ö)Ä{2\x001ct­\x0008hàÖC¹¿ð\x001f´ð'\x0001Û\x0004\x000c·³/P,!)\x0015\x001c}tNû\x0008.½aÜoð\x0010\x001a\x0004ó	(Ûó,¿Á/âZ\x001eÊ´\x0015Ü\x0013ë\x001d\x0000ý\x0008\x001aÍáXÇÆKmT'@\x000bü\x0003N³»òìHjµ«\x0001¶ù\x0011ëx4\x0005×¶$\x001d\x001d¾â²)±\x000f7oA~\x001e£:\x001eêHçæ÷þ
p \x0018^½ÁsÖ¹Ì3<h  SG|V\x0007ý½	M\x000b\x0007</p><p>¥òà</p><p>ö@>·g±ñZp¼\x001c^~ùíÅö\x0000[*Rÿ[VHè\x0010Ë\x0017\x0010ßP»ÕÅHï×Â'°]lí.ÓY\x0016âÇÌ<hZí\x0002­Rív\x0016µü\x0013 ¼#p\êÿ±^Åº	Ã@tïW0b¡\x0006%N\x0014\x0003\x0013\x0003­:\x0018*uèØfH¨\x0014ÔÏï;ß9ÓD ª\x000b±-ä;ûÞ{÷ÌVOç¶\x0010	yç=ãy¤\x0014¨ÚöIåØ|«2,¼Ù_zs¥\x0004Ônp{\x001b>²kðP\x001d\¦\x00191S\x001eØLv§\x001d<CÓeÛpõ
önÿ`¢Ôø\x0007¼0
¯¾Ï`¸<\x001e\ËsÕU$HÇ\x0016ü»-ª0Õªt\x0012,òÌ¹4F)üÖ\x0018\x0001i\x001889ÃÚÉ¤|ÿ{Y¤ñü@\x001b	ðBÔq7ë.¯ê\x0003ãE\x001a\x0004ÖÈî7¥ÿ\x000fæ]åCÄL9À0ÒyØÏ&üëgûa9\x0012è¼è+À4V&X9õ\x0017vë¶ð\x001eÏªî¸²\x0010½\x0005û_V\x000eÛzöÌi"»fØ\x001avÊDq×Nû~{yTZ§²-\x0012\x001b#\x0003Ksõ¸¢4|¿ûÍ¢\x001b§º2=ì^\x001f~\x0004\x0018\x0000Öõ\x0013
endstream
endobj
173 0 obj
<</CS/DeviceCMYK/S/Transparency/Type/Group>>
endobj
174 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceRGB/DecodeParms<</BitsPerComponent 8/Colors 3/Columns 1347>>/Filter/FlateDecode/Height 300/Intent/RelativeColorimetric/Length 183369/Name/X/SMask 181 0 R/Subtype/Image/Type/XObject/Width 1347>>stream</p><p>Hì×}P\x0014ç\x001d\x0007ð\x001b\x001d\x001c3ÓtÚtÚ´\x0013Û0M3:Ó¦M§fÚØq:ÓÚLß\x001d_\x0000Q$¸(/§ø\x0012pÙZ$câ{41kd/M\x0000MfÔUÔJVWÂ
 w\x0007·wÀ\x0001ÇñzÈËÝÉÁq÷,=î@\x0011ÎxÅ,&ßÏ?\x000c{Ïó{~ûÌþö÷ìà \x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000Àà
 ¨\x0008\x0000/XÈ>OíD\x0000 |þ\x0012\x001e\x0018\x0018@G\x0006\x0000\x0000ÿMQ«W¯æççÍfµs\x0001ð]»v-//Ï`0¨\x0008\x0000¯¬¬eY£ÑèïÎjç\x0002\x0000\x0000\x0000Sÿ¨]RR¢v.\x0000\x0010¾\x0013'Ndee¢¨v"\x0000\x0010¾ÔÔÔ¢¢"BÚ¹\x0000\x0000\x0000ÀÔ¥(ÊáÃi...V;\x0017\x0000\x0008ßÑ£G322</p><p>\x000b\x000bÕN\x0004\x0000ÂwîÜ¹ë×¯\x0013BÔÎ\x0005\x0000\x0000\x0000¦.EQXe\x0018F$µs\x0001ðq\x001cGÓ´ \x0008j'\x0002\x0000áãy¢(Q\x0014	!jç\x0002\x0000\x0000\x0000S¢(,Ë2\x000c#IÚ¹\x0000@ø8£iZ\x0010\x0004µ\x0013\x0001ðñ<OQ(\x0010µs\x0001\x0000\x0000©KQ\x0014e\x0019$Ií\\x0000 |\x001cÇÑ4-\x0008Ú\x0000@øx§(J\x0014EBÚ¹\x0000\x0000\x0000ÀÔ¥(</p><p>Ë²\x000cÃH¤v.\x0000\x0010>ãh\x0016\x0004AíD\x0000 |<ÏS\x0014%"!Dí\\x0000\x0000\x0000`êR\x0014eYa$IR;\x0017\x0000\x0008\x001fÇq4M\x000b v"\x0000\x0010>ç)\x0012E\x0010¢v.\x0000\x0000\x00000u)Â²,Ã0$}Q+»òÅ,üXÁÀÃâ8¦iA\x0010ÔNäQ@AÀW\x0005Ïó\x0014E¢H\x0008yë ¦\x0000\x0000\x0000\x001eo¢°,Ë0$I\x0013ðùzí\x0016,\x001beÓ8Æ*Ùliìp?Ô¤«Ñ\Zµ ÷ryóÝ~ß$ÜÆ\x0003á=áý\x001d¶\x0006¹B/×Xí½þ\x001bäu\x001eàuÙ,U\x0006]Î`47:\x0007/ß[ÔÓÝd1WWê+kj­vWè[&®fSey±¡¥{àÁ\x001f<ÝmõUúÛ:No²v=ÜnÃW\x0005Çq4M\x000b0ñ\x0001GG»ÍRgkjïê\x000b]\x000f;¶jSeUJ7ù\x001fÝ^â\x001b4TËz}Mc{wâÜ=íõ&£®¼\_)×µ:F\x0016\x001bùÛßU'\x001bM\x0006Q®oí\x000eù@+ÄQSq»ôsÕ>¦\x001e\x0006=®\x0006SUyNo¬nwz\x001f\x000c
ðxãy¢(Q\x0014	!!\x0007x\x001dö:³¡rT}V«-õ¶Ö®»£z§×ao´X­
Ív×\x001b"×ÙÑ:&NìïöÆêfgIÃUFÜöÆÚÊ</p><p>]Eliq\x000c\x001d××ÓÖ`ª4\x0018ªFK§gdî½\x0012íënjðwCÿü*s}[/\x0019;Àm·Ê²Ù¨7X¬­	ÞT\x0000\x0000\x0000àÿ¾eYa\x0018IBðõ÷Õ]þûÆu«\x0013W§¦¦&''%\x0012¿båæì6å!z-±]:þûoi^óÜê÷?÷\x001f1&çN\x0006\x0015o_·E_*Ý(n\x001b\x00087ì¾¥ýÛâu;/YC\x001ed&Ïm¯¹yé_{·oJYA­ÛóñµêvGðÆ\x0014âq4UGZª6>våú
[ßÎýÔÜÑç\x001b³eJ¯áô¾õq\x000be²gÊ{î]öºZ+?;wøÍôUËDGÇ¬HÍ|çÔJ«}²v
¾48£iZ\x0010	GxêùSlæÚ
»ßæn´øB\x0016­½èÄ>&meBVt¿Ø_OÛ¶ïJC_¿µð­ëÆ¤³§\x001d!\x0002(×e»]|æèÞ-)«¢\x0017-OLßÅ]ºUßé\x000e>³^½¶0ÿÝ-k¨¤¸\x0015Tò7/­ïñ	Cíå\x001fnúÓ_´Ü²®û?x»ët\x0005\x001f\x001cHO_¼4&6qÝ³euö¾±ó\x0001\x001eW<ÏS\x0014%"!¡«òrî×Ç'kµ)CÅ¤Õ®ÛµóÝ</p><p>¤\x0016§\x0004J»]¾ùÉî×¬m.îê³.cáýé8ÚÑm=J¤Ö¬ÏÓuö\x000cäu6×Þäs÷em\\x0019\x0015\x0015\x001d\x0015µzóëG>)]#¹z{jK/\x001cÙå¯Ð\x0015q¯®JÜôÎéW·;\x0005ªø<\x000eáÓd§kãb£¢%¬Mß{©¤É1\Áþ·G{õg¹\x0007äÄUËãÒ¶î8vñ?V'Ú\x001d\x0000\x0000@\x0008¢°,Ë0$I¡Gx{]úã³Ò\x0004M>ÿÂ\x000b¿]WGB}\x0013æªø^þSæÙ\x001f/xÏâà¤\x0012\x000e§\øÏèù/E¾DÉd0\x0010¶]\x001f÷=æ\x0007sç\x001f«õx'o¥Ñ|ýö³\x0019¿úá7\x00023=bFÄôà>-ß_n\x001f:¸Út'µ³gN\x000blÞ´À'ùEÖekÔ!É{×Y{euä¬\x001aÍ·\x0017nÞ_|ÿÃÅp|íâ\x0004fM1sæ`ðEiÙ¥=ävàñÅq\x001cMÓ L8¢élô\x001f_ô???·àd½7dÑ6óûñµîÿwö¯ÿpJ¾ë?úùlÿ§ã2¸\x0010\x0001ÜÎº\x000b±ß|2"\x0010!bÆázXr¬¨Þåÿ½S¾xpÍHüÀ­yöÅWöÜ£</p><p>Økn\x001cZúLàqy[ÎõÎàe\x000cºnïüÝ/g\x0005CFD\x0004çÿ,å@|çÿÙ:©çy¢DQ$\x0013´Ç[9K H5#"Ø[Ñæ\x001aØpåTúlÿ¥'~³«¤¡Ó;>£ôdö²9Ã\x0013§O\x001b]ì_ûúS»nØ:<ã'Õ\x001cß\x0010ó\piy\x000f÷»9N>V;ÔîÁ^ÝWæ}?\x0018r¸À5Io3\x0006</p><p>ÔÕªçVEÎ\x001cî\x0011#ÝR{«Ñ5ô>j7ð{c¾«\x0019Õ-5//<Tâ¼í\x0005\x0000\x0000øÒP\x0014eYa$I</p><p>=ÂçvÉ'|z¨[Ï]²ußÞ=»F¼¾ý\x001f;ÞûàbMïC¬Xsþ`fb\x001cõF^ýÀ`¨/pußØ\x00107_£5oÉAÛð¥ÿ²_æAM¥I\x0000\x0005\x0015(°\x0000«â¦\x0000\x000f\x0012ä\x0010E·¸drh\x0004\x000f<g]Ä\x0018@ ²2(G\x0014\x0002\x0003\x0002ré°D\x0010E\x0003\x0012Å5</p><p></p><p>¢\x001cB3@ $@B®ý^¢ÖV\x0011§¶vfj×÷ûë¥»¿þú}ùúu÷Äãê¢äCÇRÒrèC\x0002ño¹Ù\x0017\x0016æúëÍÐ+Àáè8úG\x0013³3\x0012üUÁ\x0003vÄ¥7RÙl×£\x000cÅP³:äàøØ\x001d[å­¶^qÛ\x0008W\x001eT8ùún\x000eV_WKnf\x0015\x0014GbpäÎº?+Ü×\x0002uÖzÉ£Ôæí1EëÇKÞþ\x001eïðíB&ñx<JýªÅØ½ð
àúØyxW\x000e%Ê2}?%x#\x0006ØXÅ_¹ªHô´Ôó«Y·;9"Aoù:;#pOq	åì%ËE³Ì¢½Úêð÷\x00089{x4DÑ«»­y13?T_\x0010«\x0005\x001ayUÈvïéóñ\x001eîkj¥ó±ª~H1¶Ì÷5åÅù¢U?
\x0001nÄ\x0002\x001aW®øÌ@'\x0013àÜÄÉ÷ø%Ò\x000fGÜµÕä³@lz^I\x0005\x0001áÛB¡àp8\x001a&H\x001aðegÃ\x001c Hs9:".ùbZj*ñDä¦ufp&¨¨£LN4t\x0001³áæ²¤
\x001a\x0010J;0³upZIzðÚ*S¢À"5U(HLIOO³=5ýtpn~Éþ3/rcüíÀ\x0012=ãÓ\x000b\x000b¯à­ÍÁOC÷P\x0002u</p><p>´\x000bý\x00151nÖ é¬q\x000bM$\x0012Âí5Qp\x001f¹ZÝ\x000bÊeÏ\x0002E54ÚK¸JÊßï!\x000f\x001aB¨bÊdC¼¿)Ò~ã\x0001|ÜÉ]\x001ehðqX_?"\x0012þ.\x0015\x001c\x0001\x0001\x0001\x0001\x0001á\x001bF*H$\x0002À`0[çy]E\x0018\x0003PO\x0003c\x0013i\x001fE<îôg8S\x001c.oA \x0014µS\x001f6?º÷àÁ³×=C<|\x0008å¼~ÚÒÔXßHÞþ~RáLÄîzx+3%\x0011.TÕÔ6!ù\x0012Æ§\x0007v'­²0/;33;¿ä6õõ\x0008_!æöu2ëîÑ\x001f3{8\x00121ûÃëg\x000fó\x0017]#ó¶;©ÛÀ\x0000¢më\x0012]ÖÜüôí¸H4Õ×Æ¨¿UYþfBôelYä0©µ7³²r²³Èåõ¯\x0006¸Z\x001c©DÌíNo|ôìÝÐÌ¼û¡®8/7'+¿¨îå)¡²³ðÇº*¢\x0015Çî$R'_:7ÞÓz=Vo9èV\	\x0005Ï&x=ÍßÁjTpNÃ+¶x¨ù§dO¸sQ	Ïûç\x0000x»!zùÅ03´á§©\x0005lO\x0018\x001cE@²F¬×j tÇjáÊ\x0002^_é÷Vêï´Ç¿âoGø\x0003B&ñx<JýªÅxCx3¸Nv\x001e>\x0003b²Æýàb>¤éä¦j?;õIöÔôôP´(ì-w´3 k\B\x0005{Éòéç9^zð=ÆÄdÖ´KdÝôúËµÔÄõBesÓíëp£ÒD%Vw²¦\x0017Zo&F\x000b®jj\x001aV=º Íud;lf¨£\x0003}ÁX@ãÊ\x0004ã\x00151N¦ªÞãë\x0006\x0004\x000bl\x0016³ÐÇp\x00050Z\x0017}¡êýâou\x0008\x0008ÿC(\x0014</p><p>\x000e£Ñh\x0012D©\x0001yël-\x0004GÞê\x001bcB\x000c*qGSÉù]\x000eòq)xÒ» ÒË5 vPfëà´h©\x001f~[UÊ.~\x0006+w^ë\x0019\x001eãrg8d\x0004ù>=/.Ù^òä\+</p><p>laa\x001fS6>Ëç\x0002ýW\x0001ë¦¤|ÑÇ|u¦pBî>UÒ67ÙßVzD[G\x001d\x0008\x000e¦ßz?ÖÝtU^
!­¤F@Æïo­I\x000e\x0005*\x0001\x0005-\x001f¹£Íùq®às ®édqÝe\x0018à\x001cedv´Å\x0015(?
\x0004\x0004\x0004\x0004\x0004?-R©D"\x0011\x0008\x0004\x0006¡ÜB<Ïë*²Ä\x0018bë¶?©vøßu\x000b«X0û®f¿¿ûºµ\x001eþÇS</p><p>ÛU´;ÈÇÑÎ"â{bí;\x0001hÃÙ-äÓ\x0007°\x001eÎkím,­lìWoô\x000eÛwøIï¨@îcÓG#ÅG\x0006z­²Ä\x0018ëë\x001bÛ®v÷:\x001cßÄ\x0003\x0013HUÚ\x0019{\x0007ì¾c?³Dbù\x0000ÒYqí´³\x0007ö\x0000ñnßBOEÔvguU\x0015\x0008RÓÐ4\ë¶	ýÍ\x001bi ]</p><p>su<|2¸(W:jJ/DîØê±Á\x0006mdddl¹Æe³\x001f6-¿¢\x001f\x000eB$fÝ=\x0014\x0015ììé\x001f\x001a\x0019µ7Ô×\x0001F`l\x001d¼°ç¯ßy»´\x0013.ò&º\x001aÈ¹ééù7\x001fäGÂ\x001f£\x001c7Ô\x0005Ë\x00042½»»%?\x0014\x0003:\x0013È9Ú
#£Oïà­5 ej{x2Ig11H\x0003rvî	°1\x0006óy`\x001cÁQ¸	^\x001eòÚ\x0000´«¼÷VtM/ðFèÉ!ëõ!È&4¦èí¯ÿ÷\x0011þHÉd<\x001eO¥R¿j1~/<À\x0019\';\x000fÊ\x0001±DªÄ}ÿbðz]hoPF\x0012µD(ì-w´3 k\B9{~3úªºàFÎ«ÛzØpÆðYí\x0019Öúp+ÿ]F=ý~éûÀ£.&:&\x0004ZA[Ir¸\x0005\x0004ikÚarD²ûÛ,ÞF`×(Uø«C, Á#\x0013/Îvs²\x00029²*êbU§X.ëMs£Qó<J¬gý7§ð\x0006BÁáp4\x001aM"Q>ºòeI;m UK\x0013Ä_¤Wµç=!\x0018Ûkïge²1zYÒ\x0006
\x0008¥\x001dÙ:8½´|Éøm)\x0011ö</p><p>\x0006} Qð\x001f&\x0019li¨¹q|»ªuJ!j:\x0012±\x0019ìÙâA\x0017òÚOZiCÉÄ\x001bLàR²Èúy;\x0006$(MÈx::3ÚVKÊÍ¾q³kD¾ßÿâF¸<æÍ\x0005-\x001fºèÅç¼@~\x001bèù\x0017öñá7{[\x0016\x0005Z\x000f}³\x001dÅ3\x000bâ_\x000c\x0001\x0001\x0001\x0001\x0001áOT*%H\x0004\x0002Á`(·\x0010Ïóº,1\x0006pw½v3öTZnæå\x001f\x0014ü=9õZÅ\x001dúGØß\x0015í«\x0007Wd-kç}W\x000bsþú\x0017}¸
W5Ù}¡¸'å\x000f3\x0013°p®¢gåî\x0013\x0018èíb\x000e«!ÿ3·Ã @Ow<Èô[	K9y\x0005lßâ`¡%/ð[ãêgû®\x001fÂ®\x0000\x0001¬vù©O$\x000f /³âAÇ ï\x0010ÿf®»rO°:j\x0019°WS¬]¶Fæ·Ï,°UÚ¶ä\x001e!ècæÞýã¬ßzÜ­ÅÆm~Þîæòg]«MÄ²v¾L"ê+]og\x000c)Ðwð\x000b\x000eòZ³r<¨m{þÅ~¹\x00075uåqü\x000cd\x0012\x0006:\x0010\x0006\x00115\x0003DÌ\x0016y
7º:Ò®\x0011d\x0011\x0005\x001f5ø(>ð¢1\x0014ZVQªh]ã#¬¸	>v5B\x0006hX\x001bAL\x0011\x0014#5DBR!@ \x0018ì¹\x0011Ymö\x001fÞÏ÷w¿çßùÝû;ç÷;(·R</p><p>ý6_*3Î´[s?Rú°¥®lO0Ü\x0007\x0001Dqo5j B-+Éã\x0004lðÓÖ\x000bd]FCsàÀÚå)éÂ»?ç/ePmÀTæv®´çõº;?nr#\x0002'Jä\x001dY©1\x0013I\x0018|PØ¢ÿã_\x001fc<ÁãñØl¶X,\x001eS¡\x0012%0\x0019ðo¦E\x00157\x001b\x0011\x0015º,{\x0011\x0003\x0016ÞTúÂ'Ï=e\x0001ÖÞ\x0005W+ªÚ`e>¬Wð}éPàÉJç«ßëÓ°ªöÊ\x0001æd[¸hÐ\x001eá½ZÉ¹ïc\x0001 9ÓvÔô\x000cÁ.eèñå}«ý\x0000 Ý*UC¶îôANâ¶½?^¾úïïç9ØÚ\x0000\x0010/éCçBûå{§ÃCÆ-öÛ\x0002Ù\x0010jÓËsBi®pöéË¿9S÷ÃÀø\x0010</p><p>,\x0016K" \x0008bU \x0015e.¦\x00030ÅmEþ£æÎçmm</p><p>yya.k\x001eÅru\x0005ªTèÌæÎÊ¢@[@tÉ«nÕX¹½\x0006\x001e\x0014g¯ð·]à7\x0007¹§ÏðÎ>uê$÷\x0004ï|±H®\x0019¹hßÉ ²<+&\x0018\x001e\x0007ä èï*;Ì½÷S<)$\x0000"6î\x0017µÀ÷FCoM\x001aÍ\x001dZ»r«z3ÚÐt<\x001aê2mc¼³áÚ±
p[ÉË.6÷¢\x0017\ÓÕ¼­3qÀ~o¦ø¹vøC1®1L\.ÃáH¥Rë</p><p>£N+/ R&\x0002ë\x0004nª\x0018QvJR\x0013Þzk\x0017¹£PÒ</p><p>ß©\x001b¯LqÛW*~í\x001f]îuºÝ¦3·ëÕ?\x0015¤£¯í)[Ôµ¶Ê¥zOwõð\x0011tàêÑ]«>\x0007Â\x0014(GêùD7£\x0004l¸ \x0018în}(:\x0018\x0015ê	'ðð<q£ª¡¥ßlî¸â\x0017rA¡7µ¢_\x00068A	Égn|þízü\x000eoõß|ÉDè\x0004uVJµ\x0016\x0019n¾\x0014\x0016@</p><p>\x0007úÜUGEÍêçuWöÌ¦O\x0016Fì</p><p>aÇ{Ù÷ìîéÌ\x0004Ë.q3·\x0014Üj×÷×ü=Â\x0001\x0000<\x0008>róq7Ô¨j9\x0011dÔâ[úøA×£jëT£EñÆÖ¿ÐÀuA*WÚ3:'Òp2m×Û1wÛz@ðþ\x001e</p><p>ãO\x0006Çc³Ùb±xLJÀdÀ\x001f\x001e\x0016UÜlD¬Õéê²ìEÁnV\x0012}æ¢Í¥ð§3èø¾tX¹{²Òùïù	MÚ\x0006Ñ?¶Ì±\x001c\x001dvS³ErEmÉ\x000fë \x0003D'µUªAØ¥èê/î]	[	\x0012Ùb1
ý=ZÝK
Ý
g¿&Ûãà	/é³ÌgÔ÷VdÌ£Ú\x0003à\x0015»ñH.U\x001e7\x000cÛ\x0004@IH:.û\x0003ÁÃÀøT\x0010</p><p>,\x0016K" \x0008bU \x0015e.ù\x0002\x0000[G¿¸­\x0019YßqØkbý§»X\x0012ÕÆÙ{KY£</p><p>Ê:$E\x0019¶è\x0010WÝª1ü~\x0007ÅÙ_\x0007ZIvâä9'\x001f\x000f\x000c[_ý5Æ¾\x0007ÿÚ\x0012áêXÅùo7hïï¢»Ã|\y´v\x0010j\x000c\x0006­ý9Õ\x0016ìÜ*ÍÃ
ªºë»æZ\\x0010}£iÀØrýÈzoøèB`\x00166õÀSÀüôÊáÍÞð\x0010\x0008æ¿\x0018ü¸xb`````WL&\x0013Ëåp8R©ÔºÂ¨ÓÊ\x000b¨\x0014´\x001aÇ\x0013Iö\x000ed2Ùq\x0004;\x001c±$>·zô¾o½¹wÃü	ÿ¯\x0007¼ÒÏW·Ñ;[^=\x000f\x000f/dàu¦TÙgèiK/l&à¡%øXií\x0003©àÛp"\x0000¯N?ê\x001a@ç\x001aèhþ¹¼ðÒmÙ6£¹åüe4X­3"ùJÑÒÔó8\x0014£ø'óhÅ¡ý)yi0\x0000Câµ¸Ó)Ø¾Ò\x000b)~¡E!³þIÖìYÎP\x0011¶,§üÅd¨v\x001bë¯Ð©Þ\x000cn]¿Ny1"À\x001d\x0016H1É\x0014#æ\x0005\x0011p\¨ó]Ô·ß=¼k±eÛ\x0004ósÏa[Tsm8\x0019F\x000eæÝwCªF\x0013a±\x001d)køut8bÐRfÓ\x0008ÀuA*WÚóêãÍ]×ÒãÃÑØ»¸:/wäl\x0007\x001ffD%s+:>ðScsx<\x001eÍ\x0016Åc*T¢\x0004&\x0003þ?ô°¨âf#b²"Qe/</p><p>fIv;\x0007GG\x0007\x000b0Ñ'G­K+WÃTÖ7ñ}é°eðd¥óÕïrG/\x0017íO6\x00176v\x0013)É\x001bzÌ/\x001fñ³\x0012fÀür¢®«Ré`Öê\x001e_Üä\x0003\x0000ì±ön×àh³aèmXN\x000b ¬|IÅh2\x001aºïì\x0013àf¥õ %nâÉ>2p\x0018\x0018\x0012B¡ÅbI$\x0012\x0004A¬</p><p>´²¢Ì\x0004ß·\x0013À\x0006O \x0012ðø	®ëÊ\x0017:TÖz»(#Ð\x0016\x0010\x001dbòª[5ßÏ3ð 8{e\x0000:`û\x0019ÌsKºÛ\x0013q\x0013è³gåÃÖW\x0005LÐ¢ÝADô\x0006\x0007ÄMéWA£¡ÿþN;	èÝyU½¨Á ±½¨¶\x0000,dçViÞXº±dm\¨Åq²³çúgZhlº|(å\x000b\x001cÀ¹\x0010cÎ+5/¡åéÃ½¡e\x0012)æ|c·îãâ1^1L\.ÃáH¥Rë</p><p>£N+/ R&Â+wþeÏ\x0006ôº¾Þ×hú´\x0003CÃo¨»JH
x][ì\x0012Ô¶\x000c Vúiå¡8<ÎæU½A"ÙHD\x0002nD¶íWKK\x0005éAD@p¶áò\x0013µîµk&\x00041Yº¢D\x001a\x0000\x0014F$_i0ZLõ<N"\x0005à(þÉ|%ZqtW¬Y\x000c\x0014§YÌ}JÄlt</p><p>¶¯ô\x0002`_hbÈ4\x001eú2d\x0012\x0000~ñÉ×ÚF\x001dV\x000bv®	Û\x0016w¥\x000fµO\x0005\x0014\x0000Ün;ÛeñÁlV\x001caFÂnÄ?.IÔ9v\x001c[ÊÒVÍ\x001dÙ\x000fÁ+QvëQsû½ÿd;Àéñ_åÝnì\x0016U0'\x000cÃà±¶ð~Kÿè\x0004¡W2F\x0000®\x000bR¹Ò\x001eËâ©ýjô\x001c¸\x0003 fê­VÝN[/È\x0008¡;\x0003à\x0011½îäó\x000fúÒ\x0018ã\x001d\x001eÇf³Åbñ</p><p>(	s\x0004ÐÃ¢
ÉD]½(À\x0019Ø1"·\x0017ÿÒÕÞdA¡xªléT÷\x001bÍ&½^Á÷¥Ãðd¥óÕc;SËÛ\x0018íã¦\x0003ÞÅ1úxí\x000b\x001dÚ\x0015ôÞ;\x0019\x000b\x0000Îº®ZZtuÿc¿LÊ²8~\x000bJ</p><p>¨h	\x0014 Õl5@\x0003²\x000b B)6¸\x000e\x0012¡\x0003Ð6j\x0011D\x0008l¢h\x001c;(¢\x0000ÚJl\x0018Û6\x0010»kD{\x0006PY$¬YØ_\x0012\x0012\x001eIæ¾è¡gjz>t·ï÷)yçÜÿ½ï¾{î9§*+b\x0019\x0000z61÷ù\x0012ùÛá(ì\x0013¨DC\x0002¼#¼)¥ì±wÂ²ug7­°\x0007ÿeXd1÷Ø4\x001cß\x001aL&D"±ÙlB¡Ñ\x0001áÒ¹À¨!\x0018oß îÀþ/\x0012\x0012('Ï3ê[ú¥èÌ¨î\x0006zª§>Ð]¸ùôÃî\x0011ôC\x001dñóÊ¬ð%\x0000,2	-á¼êxÃë¡\x000e\x001dþê\x001bÉ½\x0018j½[\x0012á¤3O\x000b\x000b=[Rúõ\x0017\x0012ì1?Mr´Ñ\x0007 (±°\x0011»\x001d¦PìlG\x0000`\x0013¹àáÈÌðÐ}¨ãVkÝæêæ\x0011©zu-Õ\x0005±Î0í¾úfT\x0006´Ý(Úç¬\x0005\x0008æËÞá#rÍ«ÁÁÁÁÁÁùXQ*T*599Ãáhö"­evÖ¦0én>ÁøE9Þßòc×Î\x0016×F\x0001§¿kÆº×Ia+«0p6÷DJ~Qnf^~Ñ³gÏ\x0014Ð\x001eòzÖ\LtÐ\x0006ó\x000c#®u¤êy\x0011DØùäy\x001b\x0004Q©zèûÃ\x001daÉ°bmMjJ]_´§GØ\x0002-+÷¸ÎIX¹\x000cÝÞ¾\x001c\x0000\x0013¯ü\x000eø^Ë\x0000ãPÄb\x0000,ÜVÑÛ'T/3ý½
\x0001X\x001a\x001aWÕ6»bÁÃv\x0000\x00188x¤ÞåIÚ+}=¬á<a	\x0005\x0015ê¶Úä\x0007û\x0016÷mQu\x0003s¼õØ£½Ä\x0000]ìå\x000c-]¾¤sºÆ¦f,CÍu%»L`3\x0003Ö4¼\x001eODMu\x0005ë\x000c¶OúV¾lVCÖí[ã¨\x0003Ì\x0012¨\x001cÌS©êe&­^¼\x0000\x0000ç­ñ×F¦ýµ!k\x00000\x000b<Óó\x0002çcF£Éd\x00165§ .,Ø\x0013\x001eÓ%¾5ý]w²7»\x001b\x0001c¿Ð¼\x001f§>4+äòö</p><p>W'\x0018\x0010ö¤</p><p>¡F	%Ú}ûX°9v\x0005|âùÙQÆÏ|Éi¼élÚN\x0018\x000eFÆ?\x0018ÃèB[\x0018yQ0Fç\x001bÙ\x001e|"Ì6\x001bèh/J4$h\x0003àM)e½¯w´<«¿Çjäp¸Üú¯C\,aKãw §®ï?l\x0010\x000eÎï\x0001&I"Øl¶B¡Ðèpé©;`>´²	/ÕÝ'\x0014\x0008øý|@4<ÈÞ\x001bÑÝ@O]®\x000fô\x0016Rz\x0011å:âçY»Í_*\x0007&Ð±)5øO3ÑvçBÂZ\x0003\x0018`Þ'\x001bS/ßo\x001btjrèQ¬µ¥\x001eL²\x0011éf((èúÖÅÜ\x0004+\x001er\x001bG \x000f*ë¾³ÑÇ\x0005ËÀÊ+(£¶Y(]0«ì¯\x0003´Ì\x0016ìdðÆ±ÇoÅ\x0007Âôl½µäÙ°\x0004Õ¸\x001e\x001c\x001c\x001c\x001c\x001c\x0016¥RI¥R9\x001cf))ÒZfgm</p><p>ón`lJ}B5)\x0013¿\x0003AÄRlºäï¡R¢lM±\x0004ÿ\x0016Û\x001d\x0005Ì\x0017\x0008¬\x0018:~:·\x0015`ÉÛ|Ù5©BGú[~(MLLËÎ­àöu=ªÌÛh\x000c¶]äõ&\x0001&&züÝÉH_ÿÍ[w\x001e{Þßtnÿn;\x0000L­.x¨ç\x001a¬Iù\x001cö$z¶Ëã*:'a!!ü!zÛ</p><p>uB¬\x001f^:\x0010\x0001\x0004\x000b·Uôö	¢ë¤·\x0015\x0000Zö\x0001\x0011_Ï¨ -Õû6yÁQ.\x0015¯Ä\x0013U>îÐÅ6ì`\x0019\x001f³CÝöSÁ~°oqß\x0016U7 iÿd¼Ä0K.\x0014oï÷çÂq±H(èíãÊUâ¾'5\x0014_l'\x000cÜh?uÀ2æÉ­ÂÅ\x000b6*}Ò5ú®êR £uûÖ8ê\x0000ó \x0004*gX­­\x0018bgú¸.õxJ«º°\x0012?=·Þ\x00136.fë§;ýçÇù\x0003A£ÑÈd2ÅÓCP\x0017\x0016\x000c\x00068­\x0008¨hÈ¥\x0013R\x0018y\x001bÆ\x0012©\x000c\x001e1á÷Ù¡îF`áÏ2ÔPÊ+äòö</p><p>W'\x0018\x0010ö¤</p><p>¡\x0006\x0007©¨¹ËÇjú\x0016X¾)ò*|Øj©Æ[ª\x000böêÃ°5qO¯íÁB½&7j\x001eÐ¶²ÜQÞLÎÊ £½\*Ñ\x0000e¼)¥ì±imTöº.?ãH\x001cñ ~\x001f\Ù/ÜãOÐÉ=Rý\x001a¯óqþ\x00080L\x0012Äf³\x0015</p><p>F\x0007K?¾Ý\x0001hÙXÅÔÏ­ÓÝ@Oõ$\x0000Ý\x0005AE
mBd</p><p>!\x00082·å*ÕXSev¸3Ìf»«øÒÿ.|$¯J3#í\x000c±èÖÕ'¯=h\x0013\x000e</p><p>\x0007úCÃc¨¸ãä\x0006\x0007sì!\x0019<JÞy+ÉÐP\x000fæ¿ìk]*Õ¤ éb¿úr0òÚt+JD\x0002~O¿\x0000Q¨Æ[o\x0014Åº@ÝúïyRjQø%ToftÈ5ï\x0006\x000e\x000e\x000e\x000e\x000eÎGR©¤R©ÉÉÉ\x001c\x000eG³Ç\x0014i-³³6éÕÞsm\r~Q^nö[2)i9%èÏD0Eóª²W~</p><p>»N`f»\x0018ó¹¿5a\x001e\x0000Z7¤3\x001eH\x0015b^}Ñ\x0012,{\x001b\x0007\x0016_»É¸X±'`±¥ýôM"tìEMN:½\x0004}^|ùÊÙôè \x0007õ\x0003û½î¤hwÌhí³'óÒå+e§\x000e\x0005/±\x0005¼½g\Eç$Ìð¬È-«0\x0017\x000bÈôs%7Z\x0010W}´\x0018)n+éí°\x0008@\x001a3bW\x001aÃA\x000b
Ý3´òòóiQ¶XMBðHiC\x0014hWÕjw+\x0000lÂ\x000eñ±ºí§ý`ßâ¶5ªvàÃÍA^\Zo0_W½R\x0003\x0007×¯2²()GÉIñ_åÜl|%AE?ß¢ª­{\x00149\x0011³Ã\x000bû£³ôÂ#ÞÈÔ;%\x0005:r;Þ×A\x0007X\x0004\x001d¢6\x000eO\x001bØVEûb©½ó¾Ü¿_>\x0016ég5\x001fn«G\x0008ùÛáÿÿqÀù\x001dC£ÑÈd2ÅÓCP\x0017\x0016ì\x001d'+û]	9ù'rOädgeeÁ0¦äºò\\x000cOÜÝ-\x001eF@ßo]ê}
u³B.o¯pu\x0001aOJ©\x0010~`Úê³CÁ[­\EÎÍ?||äpüñª¦¶7gÞ¢î\x0002\x001cC\x000e\x0017RO&l_c¥>ßÄò¶	ôÝèh/J4$ÀhõJ£5LOJZ/n7m\x0001°tÝòÍÕoNì\x000f¾4¢ò\x0019í¿z\x0007qp~\x00030L\x0012Äf³\x0015</p><p>Í­+Â¥\x001fßá\x0008µé®ë\x0002\x0019:Nw\x0003ý¸×\x0002 ¥ã\x0018\x0014s4#+?ÿ\x0004\x0016ìÙXÈgPÒj]¯çíiÙbáöÊ~É:ïÓ_ûOöë>¶ó\x0003ø(c9\x0008\x0003J\x0006Q()h!\x00102Du¼T@òR\x00081àZÊKv¼\\x000f\x0006d+\x0013e¼m¥Ü´ÞVµ\x0014</p><p>q4¬b\x001c\Xn­Ö´A«\x0016J\x0006ój8ñËÙ>?÷Ø!Á	¶:y\V~ÿ|÷<Ï}ïäßý[R8¼»ºuzýzö\x0017{öïew½¶9räý*\x001fvWüÙpÃ\x001b5qÉ®·Þ9ºýqáæ¹êÍ\x000b5¡óöù\x0014\x0014>lÊ¥;ùë\x0012v×.fëö£\x0015µmªRûç£ëu³?a\x000f<ÎÎ)Ê	÷¨y\x0017ë\¾Ø\x000f\x0003\x0000\x0000\x0000xra9cYVåØ#^wÍ»#2,T<\x0019\x0005KN}í±ßüyNüLºvÿ_!wå¾¹æpO\x001e3{mé-§ßUûûçg\x0016\x000cÕEOÕY2Çm*\x0015k]¡ïÞßÏ\x0016çf\x000fÓ÷Y;sìÔ§k:p°¾ôàÆðçC/uè\x0010S\x0012¥\x001f¿®ìn \x0018</p><p>\x0005¾Ú³qÁ£ó\x0005Çª[ÿuþõµO¯¼I§jýámJË­ËuÉÑ×H6LX¾ã`E;¹Õ`ýyä*#my×\x001e¾y²u¨=<÷é\x00145nÑêr{ÿg£v6q¢8¹Ïr½²¶\x001cû¸+\x0014ê¬«Ü=uü¤AÎXò&/ânw)8j)¤:­ÓFMË­oW>è9Üvy÷¦ùÃÓú,l\x0018½|ÿáë¥\x0001O6ç\x0019\x0011E1î\x0008{ù²¹\x0013â±5eÖi\x001ar\}cÁx#¥+¹·"ÆÆ\x0019ùýµ§Ç"È§V3\x001f8\x001e;ÿÝ£sÍ¸Ñâ»ÿÙ\x0007;ù9zLòÒ7Q0ª\x001eTgã?N¬0wüSvóÒÃz@ªz÷Òê\x0005QµD
²ddÎ9Xö·Æÿõñ\x000100\x0008@Ó´$I\x0008ÅþvuUî^ü\x0014i½Öç\x001c¾`¼u\x001a®¿¿g!N½SÏTUW^8ôÓÑ¤2ÍÅgZ<ê·å"õÙuqýsb÷»Ñ¹k.yIåÚ®¬+Þ§¼M\x0019E{ÏW4B/½3âÄÉë¯Hº³\x001b¾\x001dÝðtCY¼á¬#ry\x0000\x0000\x0000\x0000DÃ\x0018s\x001cÇ²¬,Ë±G Å÷Ü¼\x001cÞöd*Vñë¶ÒMy9¤í.xyßµ\x00062-\x0018r~º½¨ ttÓôÅ\x001b.:É±ÀÝ\x000b%ÏO}:=9%5Õh\x0018µtWÙ-§g³¢8ï\Ù?77Ûj1¤
úäü¢ý§>këÞß\x0007ê®\x001dßñ¬Áh4L©ÆY¯ü\x0013wèµ¥\x0005é¹EÛ.Õ\x0005"cn|hÓìl*Ig±ff®üã×íwÍ\x0014;íÙ÷üjä2JkÍåßmj2Í\x0016]\x0012µhã«5;U¶òÙÓÆRTá»ÏG>RÈ»o/CQÓ×lÚû?\x001b_{X2?+Ãj4£\x001fÅdYXò^¥3\x0012=ÐPQ2i|ÉbÐé3&L|«~\x0010B}÷%8è©|³xòpÝè\x0015¯óU\x001dN¨Íï1+&ZõFÅb1èu3_:péV\x000bìj@?<Ï3\x000c#bÜ\x0011«/\x0016O';ë~Ul1êL#\x000b§ì,ï\x0008Úo\x001cYù£ljä¼UÇä\x0018_\x0011È\x001f¸÷á´I¤ 6¾q¹­ÿiíóÖZ­Ö´4³Å\x0012U\x000e\x0016³É0vÕò[á\x0012òØom[aM7¦(jÆ
åw~\x000b©-_¾³nDF:e^þ3Uî¨\x0004õ×N®û\x0003*IoNMM\x001b<dò\x0016þfc\x0017\x0003øÎ\x0010\x0004¦iI\x0010Q«úì¯VO¤\x0006çM|õR»?\x0018o¦g\x000fÌÊ2¢k1RÁFóÔßVØîU\x001f_7J\x001f3þî{ÕoËEÌv¢x~~1¥Ïi¦A\x0019\x0005\x000b_æ¾èëªùdËª9\x0014dTès;Ëªí®ðñÚOË^)</p><p>wÞèé\x0016Ò:Ó
ÃÖÊÿög»\x001dÛ5|Ùl4ê²f¼°ïÂ=_BÏ\x0011\x0000\x0000\x0000ø®Ã\x0018s\x001cÇ²¬,Ëq\x0007!Õãq»âðxês»Ãc¼>¿Ú½«ÆAßÃi^¯Ò}\x000c©\x0001ß\x0003½ÑVgkhjqty}jïY¤ú½]möÆ\x0006­±ÙÑÞé
¨Áó8¨z]\x001d÷\x001bm¶&{»ËëWÉZÇåö5zG¸íÍ
õ¶\x0016§7\x0010Äd9ÇExÕÞ
\x0011FAÕïîêlmj"+5·w¸@°7\x0004R½\x001e2Ã£ôÜ\x00049\x0014P¼ä.¼O}ük!|	¯;ö³!\x0011{Âã`Àër´4ûn¶·¹ü}ïº÷\x0006ý</p><p>y^nÅ\x0017\x0008â¾×\x0008¸:\x001f´4ÖÛÈci}Ðåö\x0007cÍ\x0007O8ç\x0019\x0011E1î\x0008¬*7v\x0019»=È\x001f\x001c«È¿Tu\x000fo\x0003Ï\x001f£ Hu)ñ^\x0014JO5cRS\x001eGKC­ÞÖÚöË\x001fQY¤fHe)ê¨û\x000cy\x00118Û\x001dMdr­ù\x001b·\x00121\x001dÿ[ Ð4-I\x0012B(æ\x0000R\x0002¤WòÄjJ½Â­Î\x001b¯q{Â];\x0018®vW¤þw5\x0014îØï\x000f¯¯÷AZËÙÖÚÔS¡\x000fû]¸÷úbÎ&ó\x0015µ§«áðf¢³ì\x0002êlö¶\x000e\x000fÔ7\x0000\x0000\x0000\x0010\x0007Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002\x0000H\x001cÏó\x000cÃ¢¨u\x0010\x0000@â\x0004A iZ$ÖY\x0000\x0000\x0000\x00000pa9cYVe­³\x0000\x0000\x0012Çó<Ã0¢(j\x001d\x0004\x00008A\x0010h$	!¤u\x0016\x0000\x0000\x0000\x0000\x000c\\x0018cãXeYë,\x0000Äñ<Ï0(Z\x0007\x0001\x0000$N\x0010\x0004¦%IB\x0008i\x0005\x0000\x0000\x0000\x0000\x0003\x0017Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002\x0000H\x001cÏó\x000cÃ¢¨u\x0010\x0000@â\x0004A iZ$ÖY\x0000\x0000\x0000\x00000pa9cYVe­³\x0000\x0000\x0012Çó<Ã0¢(j\x001d\x0004\x00008A\x0010h$	!¤u\x0016\x0000\x0000\x0000\x0000\x000c\\x0018cãXeYë,\x0000Äñ<Ï0(Z\x0007\x0001\x0000$N\x0010\x0004¦%IB\x0008i\x0005\x0000\x0000\x0000\x0000\x0003\x0017Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002ÀØ/ÿß4î3ÿUû\x0003ªíIî\x000f«ØÐ&¹hóRzV¼©Ôëb2;¤ê8©Q66 Y`RÏvá;\x000c8\x0014'øÎ\x001f¾ø\x000e\x000eccªn^Ù\x000fv\x001a=$Ë&µ}!\>ñéyë¥HV¤ã}çÞÏçyPËétZ,ÅÅEÚFP(Tç</p><p>Ã}}}\x000cÃìïïÓöB¡P(\x0014êõÕÁÁÃá\x0018\x001e\x001eN$\x0012´½ P¨Îåt:-\x0016Ëââ"m#(\x0014ªsÃá¾¾>aö÷÷i{A¡P(\x0014</p><p>õúêààÀáp\x000c\x000f\x000f'\x0012	Ú^P(Tçr:\x0016eqq¶\x0011\x0014</p><p>Õ¹Âáp__\x001fÃ0ûûû´½ P¨W¦\x0003Ú\x0006P(ÔÔ¥K:=òQ*}¶\x0011\x0014</p><p>Õ¹þâò\x000c\x000ffØ8m#(\x0014ªsÍÎþýÔ©wâ\¶\x0011\x0014</p><p>õJõõ?jìléÞ< \x001a¤û·+óÖ\x000fß\x001b8õ³kO«k1ê\x0010MX\x0001æÚÿÞ[ o\x0006Ñ\x0000\x0008ïøÇ¿6ÿò§ÿh¯\x0008\x0011ê~\x0010
h·¸2WÄ ëÍ\x0002{é¼õ'oýðêÏ\x0015²së÷±Ðzdå	Ô \x001a\x0003\x001dû__m<|øMK¶UöÆ\x0019>|\x000eA\x0010D
[p3ç~3`0\x0019¿ï°\x000fÞûº%D\x000b Êw¼ïGý#[¿§n\x0006Ñ\x0002\x0008¯å=ãÛ?~ã¼Íý\x0003u?\x0006@»¶/úGîø>à1È:åóöÓ¿xó\x0007ß»ø»wã!;ÜÑÔ-!Ýæ\x0013.t¹n½ãµð3í?iûA4cæ\<tv[Y}øÍ</p><p>ý³!ßç¼«K×\x0011\x0004AÔ &\x0003«k#¿}§ÿç¿^²\x00153!ê\x0010ø>&ÖÒ7¨;A´\x0000Âk\x001d~÷éGÎ\x000b\x001få u?H×\x0011®çxüæDôÚÂ\x0012ë\x0013i%|áÜûo½ùë³¡Üí;¶%¤»\x0008É\x0000,kÉÙÉÿÃ\Â/,auÌ5Hñ×_m\x001c\x001c\x001c´T¨¹SE¦B8\x0004A\x00105(y¾²\x0016?3:4h6Ýð9¶ËËÔ-!Ú`\x0002ÖôüÅ\x0012XlËËö3_õ¿ís¯Ôý \x001aÀÃÿ,\x001e\x001a¯\x0016±ÄúäK%ãt5\x001azü/×âí;¶%¤Ëä\x0013Òêâ</p><p>ëacå5\x0016þ¤o	Ñ5öÁî¿[êÔÜ©ËB\x0014Ær\x0004A\x00105({Ä6:4h6\x0005}º¦n	Ñ\x0004Â3\x0001kzþbµ%Ö'\x0010^»Í2ÐßëuMÖJKÔý Ýp²\x0010\x0014ÇCãJ\x0001K¬O\x001aszÂhèñ{¦d}´\x0008Ðwt\x0013ÂK¹Hq³Á±r»Ä<}KfÀý`·ÙR§æN]\x0016¢Ô=#\x0008rb \x001c4\x0019ÛèÐ Ù\x0014ô9`\x0017 o	Ñ\x0002Â1\x0001+¬\x0000Õb¾\x0019D\x0003 ¼ve ¿×ë¬pËÓ#\x0018¤8\x001e\x001aW</p><p>Xb}Ò¨dÓ\x0013FCß3%··<º%¤Ë\x0010^ÊE²
E\x0006K¬o`ÆÞÛm¶Ô©¹S(uÏ\x0008\x0018\x0008\x0007MÆ6:4h6\x0005}\x000eØ\x0005è[B´pLÀ</p><p>+@µ¢o\x0006Ñ\x0000\x0008¯Ýf\x0019èïõº&k%Üòô\x0008ád!\x0006)Æ\x0002X4*\x0019çôÑÐã÷LÉ"[\x000e!¼d\x00197\x001b\x001c+\x000cXßÀ½·Ûl©Ss§.\x000bQê\x0011\x000491\x0010\x000emthÐl</p><p>ú\x001c°\x000bÐ·h\x0001á\x0015Vj1Eß\x000c¢\x0001\x0010^»Í2ÐßëuMÖJ¸åé\x0011ÂÉB\x000cR\x001c\x000f+\x0005,±>iT2Îé	£¡ÇïE\x0016·<\x001dBx)\x0017É2n68V\x0016\x0019,±¾\x0019{o·ÙR§æN]\x0016¢Ô=#\x0008rb \x001c4\x0019ÛèÐ Ù\x0014ô9`\x0017 o	Ñ\x0002Â1\x0001+¬\x0000Õb¾\x0019D\x0003 ¼ve ¿×ë¬pËÓ#\x0018¤8\x001e\x001aW</p><p>Xb}Ò¨dÓ\x0013FCß3%,ny:ðR.eÜlp¬,2Xb}\x00033öÞn³¥NÍº,D©{F\x0010äÄ@8h2¶Ñ¡A³)èsÀ.@ß\x0012¢\x0005c\x0002VX\x0001ªÅ\x0014}3\x0006@xí6Ë@¯×5Y+á§G\x0008'\x000b1Hq<4®\x0014°Äú¤QÉ8§'\x001e¿gJ\x0016YÜòt\x0008á¥\$Ë¸ÙàXYd°Äú\x0006fì½ÝfK;uYR÷ ÈpÐdl£CfSÐç]¾%D\x000b\x0008Ç\x0004¬°\x0002T)úf\x0010
ðÚmþ^¯k²VÂ-O\x0010N\x0016bâxh\)`õI£qNO\x0018
=~Ï,²¸åé\x0010ÂK¹Hq³Á±²È`õ
ÌØ{»Í:5wê²\x0010¥î\x0019A\x0013\x0003á ÉØF\x0006Í¦ Ï\x0001»\x0000}K\x0016\x0010	Xa\x0005¨\x0016SôÍ \x001a\x0000áµÛ,\x0003ý½^×d­[\x001e!,Ä ÅñÐ¸RÀ\x0012ëF%ã0\x001azü)YdqËÓ!r,ãfceÁ\x0012ë\x001b±÷v-ujîÔe!zÔ\x0003óÚzz[NÕòÏ}6ßÓE^!\x001a¿\x0014IlÉËrªVà_éaBR\x000e
\x000b¿)¥7KKUïN8åy¥ÜR[¥ÄSÌ)Ï\x001fï!å3ß*ñg¯IéF%½µPõÇ\x0014u9\x0005\x0015ìàp`$øß[TK©sè\x0013nc=]ª*O¦ûpÏ\x001dòsV;x¯c9´Ä¯
&c\x001b\x001d\x001a4>\x0007ì\x0002Ýÿö×\x0005ÕOÖ</p><p>Uÿ¸Ú\x001dõv\x0010¥ÔT\x001bíãÎJÉ?Î\x0005\x0007	Ý\WÝ1^\x0007\x0008Ç\x0004¬°\x0002T)úf%Ï×ÖSÛ»0Ó~	ÿÓ/ÒØvCkß2é#?9¾Zj÷Ì|ûOè{[Ò·ú^»Ö'j¾ðÚmþ^¯k²VÒ`ËËó\x001bíù!½ÙY_ê0ù§õ²ÿ¶ò\x001a\x0007ºoP»^Ø¹,Ä ÅñÐ8|äôý\x001coøQáÊËiaÌPÔ	Ð\x0007$\x0008òòñyl©þ$ìO\x000f3O\x001e¢z${=³rNO\x0018
=~Ï,²ÝïBík±½\x0008tøÙ«+ÖKóÿ Ãc·än=V{\x0008/å"YÆÍ\x0006ÇÊ"s2.\x001aÂWÏeù\x0005\x001ar{Ç½f³xä^óxiçýÅ¼Ä4H\x000f±÷v-ujîÔe!zèÓò¼ù<=e~ÖÿÅýg>\x001b¶¼:ÏÎ\Nrsy!®hvPJVçâ7»êN¦n¯ç»±-ª!¿´Ol\x0010Vúÿe+âíÄç\x001e>\x0016\x0016ï³Ç¾»RH(\x0005^º\x0017ÛåD>ÀÎ^eÙÙò£$V×\x0015rQyíè`r</p><p>a[lØÅ°sÕoýnµ\x0018½»p%|Õ¹03¯êà·ØüÒõ\x0019\x001fÏÍÈ*ÜqkK7¸Ù+±è¬¼Æ®Ä¼·g¼	þó,d-ß~M\x0019fÕHfÁs{>ËF+¯þJ%ü¦Ä\x001f:<@w«\x001f|¶ãö\x001fê«5¨©3
gdt´ãÎ8q·\x001díêl\x0019wªXÑiÕÕ-¬\x0017¨"\x0003\x0015</p><p>tÝ®R,""Þê\x0005¨\x0010¹&\x001ar\x0004\x0003	$'9ÉÉ@Èå\x000b	\x0001ÔþèÚ_Ý/êv\x0016Bá²g2\x00039ç=ßù÷}¾ç	ª|\x0018ì¼~Eqÿk1?Å\x000bR«Q%\x0010òÒü¼S\x001c&\x0019dp×W¹\x000c|¤çq¯ ÕÐ\x000fx;0`~î§¦)o\x001f\x001e\x0012ª\x000ci7ÇdzÓ\x0017ñØÕà\x0004y=ø61" )%<óàô±P*åì2\x0010\x0001¼vÍü/&Ð:á\x0011\5ö\x0019åLA+Ñt¯RÝÁkQ#\x0012¯\x001bñ\x0006ãÓp5¡\x0002wÖu°Ì5Ån\x000c[D\x0003òVQ\x0007\x0013´¥\x001bÌ\x0010K&dªàW\x0002\x0005Üm:Í²é|\x0001\x0001\x000cï­ò¢Ü¬4\x0006¥ÒG;å¡*÷`Ï.|Ò¢ÕÉVE\x0008</p><p>\x00056\x001b\x0019E\x0015n48,1 Ë\x0008Í¤Â\x0001V\x0002:^\x001fm\x001eTj± \x0001Ë\x0018²4Í\x0013Àaj)Vt\\x0007Éeþ×3ÍV«Ù!«-æÖ±(÷iMímÍ\x0010Ôã´«|fþ\x00150µs°·¿·Çz(U0ódÖ\x0014ôUj¸¢vF+u J\x0014á*4©Lðjð½\x0004\x0002ÜÓÔ7¹\x000e,H ÔX{#éØAÖ£j\x0015</p><p>sÊÃ\x0015¡\x001e}÷£n>k`@æ</p><p>ÕA\x0006</p><p>ùÒ/üè	dõ\x0011!iÈ$Õà1à
ü\x0003¼Ü¦é\x0000\x0011F¯NgÌ\x0016\x0006PØ9$1Ê©\x0010çªÛ*\x000f3Å³\x0000/¡\x001dÁ 0\}ú¶Æ»´Æ»­¬&\x0008\x0012\x00126õS"\x0016\x0002Dc\x0012D@áÑd².;>å-8Ò.æ3\x0015 2\x0006O\x000c\x000e°ß
:fì\x0006ç\x0013ÀcÿøÃû¼ø~ÜeNUÊChmê\x0007ç\x0013$¦ÕµÚ,çu¤òOCO+I/þ¦VÈÇì³³Q¨Êkë5\x0008ogÅí=zöq\x0017Ïî@<s°`FÌ=ÊN*¿búe8\x0005o</p><p>yL¬Ë)\x0007¿øª#Ù\x0003ö$\x0006;\x0007ºT]T2ÅjFÜ°¤ê|~rê\x0017¥d'¡\x0002½k\j\x001dÓîÿ3ÐàQ\¢\x0017ÜÏ?và\x001ftzÙèëçú×ãî§e\x001eÚ\x001fXtlv\x0006áºQ\x0018Hîñ?O\x001eO/Ð8DhCÚUK¥ ^þ[JvI
f\x0013³¯¤§Å§^«©7ÙC«ó\x000b¸\x0006\x0005=¬:°
ujì:nóÃ'¿â\x0008ø#®¹µ\x001f¨ÂeîÕrj:zøýFÈMìmÿÉ"\x0019³¸T²a\x0008rN/§J·IÐ×Þ |Â°`ÓPìÃ%\x0006aUÁ±\x0003çîS4º)^`@@dÊKóórNqd\x0005Â[ßëTi(¥¥'ãâOd\£t8m¡ÝÂnàÃìZ¤\x001b5C¸¸i^
ö"ä²ì¤ÓgÎsT</p><p>ïx\x0006\x000cvôs%í
æ\x0016\x001cSø¬ìÓ	g¿,¦$Ó(ÆÂ\x0001ª³Ë@\x0004ðÚy[$ì±A6Ím¸R°ïã¢£6lÞ²iGlÜÙâ2&g\x0019±itÔ¡\x0014×_Ìß½ÿxÖ£^Ã:ÿÇÔ>#~3/åh\x001aU"uá <3;9£ô>Õãö;\x001bÜÂ¬«\x0013wó]|!\x0001\x000cï­ò¢Ü¬4\x0006¥ÒGYfG\©«\x001b8áhA\x0015½¿_>\x0012¤Oðª\x001cÕry\x001a¶×\x001ejpxEV?V}<>¥Y,!&%48xp\x0005p vrLDXÏ.jYvÖôJN÷kÎ)P¥Ë"\x0003S¬è¸îÁçö$
qàÛiììaÜ¾YztÏÎè\x001b·DoÜ²s÷gç.ÔÑzlxj3ÿ\x0012ÊQJÇ¯.KÙ¹7ñ~kÇI1òëÙÇÔÞ¡N%£$ißájö\x0013\x001dQ5\J=q¡\x001a\x0007\x0017cJB×ÚÙRÏa²\x001cÿ/BmS<\x001b64ÖÞH:võ¨ÚeÂò`½Ï zP\x0012w$>©ª­ÍhQù°ào\x0000§\x0002:¹OÂµá¡\x000b£¬'PKÑ§1q÷ØÜÁ!å$\x0006[Já\x001c\x0014"í\x000fx¢.Ó òC$¡e\x001fúë\x0015*×jf^vÎÂÎ!QN8W{\x000f+Å³\x0000\x001cv\x001a:¥mwï\HOÝ\x0011½yÓÖ¨uÑ»þr*ïËF:Mß?7óÇ.)<,HÚ\x0013\x001bwêVÓcÔ¥$\¼Ü\x0004\x0003£0#9ýk}Üz»Ó\x0003C1WÐ9:¬¶kyJà\x0006¥½¸%t78¯\x0000\x001eûÇ\x001f^ü\x0014ÜçÅ÷ã.tªR^§ÞÂ¹\px5´tÙ»'Û"\x0002_n&ìÅd\x0004RºrydRa­ ÷;ç¬X\x0017\x000f¡uªéKûI\x0011Kö\x0015Þ\x0016«$cÄ\H«Ç®u®>°uÍ	rLçð«r\x0018¼&jâV½·/ëZ«ð;W w÷¹µ\x0006Ö¥ü½ë¯+2\x000cÊÇ}HgArÜo?Ú\x001ep©=vHPòIÔÚ\x0003ÇÏ½#\x0001Ý2ª\x001awHäô¯·G,Ý~\x000cidã¯¶\x0002Ý\x0016©¶!cýª·ÖÆ¬â</p><p>Æ\x001cAp©Ü\x0016¢êÈû+7|váæË\x0010Rf\x0019õ â\x001bFnZ}ðºÅÖS4ê\x001dÒÚ´üþ\x0010ëüÏÛùçÑÒ~nÓ?\x001eÉ,\x001c\x001c\x0019ÄU¬ÛÛ"ßþ]\x0006Æñy9 ý?G\x0008¹
~¹bù\x0007Óú$Ï\x001d\x0013ZÎCèÜêÆÚó\x0007HK6³Õ}\x0004¦D^&n5Ê¿¸'jÃ#k@\x0017£0 XÁ*Ý±hÉÇ5RDötNº}\x0006d\x0001)/ÍÏË9ÅaA\x0016\x0008oýñá®o÷m$HW½wèÁ<}\x0010û»ña©¢¥$ñ­\x0015Q\x001a:ÙxHN\x000c4!¦\x001aUÜLùÃ\x0007ûã©0<ò\x0006Êïsk`rFê¶èÈ]×0\x0007<fc¤o{õÎÔÂÇç³£³A´]\x0006"×\x001ePæ\x0015\x001e;âDhäâ\x0004Ð/¤Å\x0011ËÖïùd×ÆE¤Eà?ËjZy8¡\x000e¤K(üÜB/NÜ\x001eAüðÄ
]åôb\óÔ@­8\x0013³xåê»\x0002±Xé±ÛÞÞSëñiÝæ¶sß}'±°6\x001aXÉ\x0017\x0012ÀðÞ*/ÊÍJcP*}DxS\x001eüÔ+æUäìõ\x0013³\x0014}Û'ð8z\x0007GÜF^oU2\x0014yN·9t!\x001f+¸f\_#o÷µë¾éØ­º8ø©G"¸whÅªmå4Ó â_Ãüëû¿fkÂ\x001d¶\x0017èÒÂ7¨Òe)Vt\÷àá¥8ðà*ßKÎZ¼È?¸¬Ú¼+áðöeKDø[(æïW\x001bÌ\x000eM NÀÔÏ1^KYÚJÒoVü¹ [÷oê«4¨©s
3Ó©S\x0019p\F#¶3:T\x001d\x0015¯ZÇÖz]ju¬^[ëVÄ;jÝ\x0010-e\x0007Y4  B\x0010\x0012JÙ×@\x0008\x00120\x0010=@àdß\x0017rÑÎtÆû£ýÕûìADÇ¡3Þ3ß|9çýÞïyç]Ùª³Z`\x001f{B-¿\x0004¦ÔµOèEPþõ¨°lØª\x0010«Ç(8¶wÝÞýgËLæÿ\x001b!O¤µUQ'\x0012Ê
(<SZ0%#u\x0017_\x0008r>]Ë%\x000f³¦uoVX\#</p><p>É:n|¼,âß)8qä-l\x001f#Q+¢\x0017\x0004\x0007§4\x0013¥r®ýM\x0019kÓC²¡Ò\x000bÁÁ\x001boã{\x0011ö-ôò¸õ¡+¶§×I¥l»fþ\x0010û«3GÙ09×²ç3ÄÃ2« §gö¯\x000b\x0005	^ñáÚ#ÇÎükçÚð¥ØÏµ[Î\x0014Õi\x0015s&O5ß £Beg¼¿å|B\x000bæu®Qb<ä\x0013Nm\x000eßx*\x0016'³ÊÔ\×àð\x0003¡µ÷ù3õKòñÐåÛî5HFØSï~ý\x0016è±ÿüãÅ_oö¼øÝad½ÊE'QPî§ÜåÕ\x000fB·$>f\x000b\\x0012æZÔV\\x0013\x001d¶xïùAÆ4hMU`3PÝJ°Ãó\x0014PÄý\x0012\x0001V-ßªáY\\x0004¯iø °¬\x001b(RQ2N«þùÆÁÓ	\x000fÄ\x0012¦}Ä¬\x0002sÍ*ì[?S\x0008(\x0007V§5ßæ\kö÷-z©º;ñò;6í»!1Ifã\x001bSLoa\x000eõH%\x0010æ\x001asÆu_÷Õ<®N%ÂÆÌ¸/"\x001d-B'96-O/¢\x0008hDI5\x0000çuH÷Í=[O^Àµ<³üÇP</p><p>è:Î\x001d\x0015Ï¡g ÄÃÁ¡»3\x0008°\x0010r8§<p´\x0011\x001d&¥\x001d¾ØÐM¶ÍÝ)yð±ëf\x0005[Pñí'á;ÈÀËõ\x0012O
\x0000Äü</p><p>\x0000í&>\x000bíû\x001dF+Q*h51[W-Ø\x0018úpD/Åì\x0004Doq\x001d\x000f1°\x0017¼ÿ*1ôÆjÎn_³ó\B¡Â>jA!\x0005L¤SÈ¤,ß\x001c§òQÅÉ%¿8bd@0vy_xmô\x0003Ùbv'F®M\x0007+\x0004ÕQKB\x000e$â{¹ð³À\x0005¸¡\x001f~\ye×Â°o\x0007e°Qëi\x00150\x001acÑÇ¬ù|CÌ\x001a!Ú|é`äC1wäV©\x001bgïÑ\x001a\x000f[°}îÉëº÷upÈ\x0017iU\x0000úö¥réä<vS\x0015×í9\x0006 2×½üqp³\x000bñ\x0019\x0013©|²Â>÷Ãd&n ÉäÝM»~ÜA\x0000³ÀÛeªYõ!Æ.>±o½«mXºê£!¦</p><p>åZüc­\x0019\,\x001b`\x0018ò¦M,¸=ûHèc\x000fÛ$£°Cã\x0001Ð\x0003\x0018~¨*x¹®Lâº²uÊ£\x0013a¢Qù¾Å"ëúw&\x0011ÏÞ\x0011ðÅ¬NíØµ)¦Òlà[T,)³Ië\x0016XæYøÌ\x000fH@¸r£uÖlæñÊ\x0016xî|.%Â&áÀ\x0008`Ñ¼«
-¸Üõýê  ÷\x0016nÎ"Ôò\x0004C\x001a9¤\x001b§\x000bûJîF ò</p><p>Äd>\x0003m\x0000Fu\x000c(³+K{B	ÆFÝP~âù·ò9¨à¥d¸Nü¼¹è§\x0003\x000b?ü\x0008Oe>D/ s\x0006º\x0010fÒñ(£):råÖË9îçV\x001b\x0016\x000f7\x0002óÕ»²xòÒc¯oo(\x0003<Oã ÿ\x0017×â®\x001f\x0008ò<¸úæQTdSy=\x0017\x0001[´b¤kàîþ\x0005!û	½dIlõ¦SÕ+ê»WÈ\x0012lEdp\x0017c¤Ä"ïþuçUò7Î{f\x001d¦Å}µlõ©J²bãÐÂãH\x0017Dí\x0011¦ÿé®Òï²\x001cX\x0019Uésì¥6		ðê-ç94\x0018&! bNoY=¯!O'ù\x000e%\x0015nNÝ¶àý  ðKY\x0005ð\x0000\x0010²f!ç4WÄF®\x000c\x000e</p><p>;t±4	ÙUÅTîhZ=xµb\x0013RMH¿ôõ7ñT)G?cRðExZA¡×\\x0006]mj}ûÈ\x0004ß<òTB'2éTc3	¦\x001eÝ½íÈÄºi'ïyÏ¥\x0004¼\x0013kÚ$­­*:yØTn@áyò¬\x0006)J­(>³Î-ã¨\x0002\x0002Ñlõ«\x0008N!\x0007'ÄÝÇªy&-­ü.båç7sË6©Õ\x000bÝëj§	á[\x0015,¨ÖG³
Ø½×Ô>ûÌ2°eÌGÇC\x000fe\x0013\x0018Bø¹£öÁÔæa6M7	;©ø¼Òògfl\x000fë0Ç´³å\x0019MÝü\x000b«3GÙ09×²ç1Äóî'è\x000fGÛnþsÃâ Å\x000eÆÞ£óhÊ±aõ8KÉkÂ;\x0008´rýÆZ\x0006K"î!NíkÀ\Z´BÒ\x001aÿÕéØì~:Õ\x0006T\x001fpWË\x0002³pzë\x001dgo\x0017\x0019¤fßà\x0000OÛ ¡_\x000f-^qüQçø8<¥öÌsTwf\x0001\x000cÿüãÅ_oö¼øÝad½ÊE'QPò3N¹ê EaÙuõ£</p><p>\x001dC\x001eÒk¢Ã\x0016\x0016ÑHg9&\x0006x\x0014BmSýè\x0018Û\x0008\x0001sÙ$}\x001cjl&ài0]ò,r</p><p>¨ÜÕ¥èí©Îy\x0011Ëëìb²ImÒöÆ¤[yÅø>:uÊèª5Ã,P\x000b;IÓ¯GÇýRU×4*çØB£\x001b\x001bÝ-ôÆôû8\{?Å¨\x0016N+\x0006í¥eÙ?f%ÜÌÏ/èeÒÒí¦!§}gÓ
s;ñ\x0015¸Ä´Ô¸¼â"Ê Õb\x0016[\x0002nëÌ:°yéí¸Ú_aá°\x001e#÷[Ø¤\x0018\x0018h+§öÆÆ\x0011­´A,ëèî!í]Ìü´Øû¹-\x001dDµoÑ!(ÜZzâÀÆð%{®ü\S%\x001ca\x0018-ý­UO©=Z\x0005O.Í8\x0016±zý®//fôö·\x000fÃ¤Ç­-
\x0008wÈ\x0004Ü\x0006\x0013\x0013ÊÓ	\x001d­õl\x000eÝnfq9GB\x0016íÎ ÀBÈ¡áÙô|³rÝV½y¿¤\x0001\x000fYÍbó¬\x0001Õl²'¶¢\x0007ñYwêÉí\x0003¥'"Vïºë%àÖ&5ÿ75
"åÜÎJ+|PÔ\x000f1ì\x0000%õLªÛM|¨ôÚ¹~r\x000e¯T²i¸]kV\x001d¾Y­±H¬*®\x0003¥2¥\x0015¹IwÓnápwª\x001bj¸#Né\x0001\x0000U|ÐÈ\x0019E¤ªûY?æd¥ÿÒÜ$\x001aáN«aÙ@uuò¾µËC¶\x001eü®D\x0014</p><p>\x0007ÙåÄö&n\x0002rÓ\x0008,Zb¸®	\x0014w'+«¶­e\x0014\x0015ÛÕÀ,×$#CO©}=ºq</p><p>±$);9>\x0007×ÑKT\x0008|}ã\x000cnë¥¦>f[QQæíÔ¤\x0007¥`\x0011\x000c \x0002}BÜÑZruOðEË÷%çUJ¥l\x001f\x0002*Fødpëêáß\x000b^u»¨Êþ\x001fñå\x001aÓTÆñF\x0019qÌè\x0012\x0011@\¹\x0008\x0006\x001c\x0015\x0001Ì¨\x0018o\x0011uð¶Ù(\\x0014k¡¥\k¹S -½Ò\x001e(Z,·\x0002íiOopÊµ\x0017JKéMÌ$ÌÝO»o1&;ãn2\x001fºÙçC?´oN÷ù?ÿßÄlÔ|\å=,"¶üeZiA^'Î*~±«×\x000cð¤½\x0018\x001eà\x001b\x0018PßÃÖ 2»eÚ\x000eHz\x0015¯J\x0010ª\x0008Ý\x000c&º\x0000Û­Ú«\x0012%pyÇ®³\x0005íRµô£å7£ëXëF#|ª\x0004\x0016Ï\x000f·¿Á§\x0014d7uaåä]ýé;®5Ô>'Aµopù¹/^×\x0013Gà	«Y³¾Ø\x000b\x000cwtÓ»\x0014ª±UOHTØ
R³Ëí ¾\x001d~»¤G]ñ\x001ay\x0002Îd?±ð²H\x001c\x0010;Ì_È\x0007¥\x0011®À¿ÌH{ àA\x0016ð\x0005xT^{-êÐÉóïæg]\x000bØº#±®Ce\x001fV<\x000eî0É,s\x0002\x0011¥¦w o\x0016º=¨¶º4\x000e÷5²ÙL­vxAIkzu#\x001cã³çèõF*[?\x000f¯Û¢åó#äÎêâÜÌÒ2BÏ\x0000É8ã9\x0010(]Ê\x0010r;\x0003t°T\x000bÆ`|õ×!z´¨\x001c,ùu\x001b¢\x001b£AME5ØlB\x0019®NA\x0017Uà%Ä\Vða\x0012\x00114wV\x0017\x0010³\x0008eX22)\·\x0002WçÆ©¤'ç£\x0003\x000f_Êbr(èx\x0018j\x0013\x000b!Tç9\x0016lÈ
§B7Ff\x0012óKó3°b:g^U»,Lä\x0006Uÿ(¯	\x001aà/"\x001cNc~eaFMu5Ôßo]S{ZdR­e\x0006Ík.­*ÎÆy$FÓÌL¸?Ï\x0017¯CÆ'\x0008à\Ñxùd/sUróSÏíÞöµßý×\x0014T'sn"Û¢vÆ§Eï·\x0000ßJ,jæ¬¹\x0010£Ï§tÌ bqW\x0019	ÛÔÞ\x0006ken«ÖªèársÒ\x001ed¿xIa±æ¨{Õ×È{0$ºÁ·\x001d×Ø4\x0002é¨·¦øqìN¿C$±ÄjQ1eÝ)\x0010Yõ`	Wf}¿÷ñÄ;ÏËÄ£|Ií¶ÂÚ!2W	4^N`òXóF-¸úÿ¼ÿO\x0005Ä[[Qþä\x001eÞ\x0008ØÕWcCu¬Gßù\x0005]®ª|r\x0014J­\x001cNý¼úÙ×Æ(,FÇL¼</p><p>h\x001f ´\x0011^øÔ7\x0003"Á´zDÉ#àï\x001f÷Ùê{;'\x001f\x001a\x0015é\x0017\x0015nrÝ6\x0008í\x0015¹Eù\x0019Êþwv§Ç¯fù¬9\x0004µ÷
0%¼ªªÂ&</p><p>M\x0005óÑajo7E®m\x0000'ì*\x0003\x0002º\x0008$\\x0016¾¤¨Ü</p><p>k§lfµ\x0013¼­\x0019q¯!èp\x0017»¡ä56\x001b_×ØÒ,\x001a\x001f\x0005«oÝ"E'Û^?N\x000cÁl÷;q</p><p>õY\x000cãaKA_xþ)\x0010²Ê¨âô·cË\x000b3\x000bJrÛh´Ù%ø\x0013¨X\x0000¨ô6ðøÐ\x001czÇ,¯*|ú§1{ôÀ³<X¢t\x00017D\x0005rbés\i^\x0003¹U"\x001bvyWÈ&M/\x0005*\x000b«\x001cfo^±\x0017Ëµ:m\x0018k!Þ;¶\x0015ù1§v\x0004\x001ewn)\x000fo/Ã+ªÖ!{0¤ô%\x000b@\x00052A1z;Ëkp­Tz\x0016vXQ;:0DÅa³\x001f¦¥=khkWÍª\x001cÕA7såGãU\x000bL\x0013_M`²\x001bÙu)-[ó»ys\x0006Ä\x0000sßqÚ\x0006|qjf¨\x001c\x0016\x0018\x0014qêÎ«¾~\x000e\x000cÞraÉo+©+É.Ã©\x001d9àSJ§éÞ?^\x001bvÚ^|ó2Äl¶\x0019`ï¥<dÃ>%&f$\x001d8pðVVÝ\x000bßîúævN)¼\x0000RÀ§éB2V?,\x0018â¯,+?Í}np×ÌãÒ\x0015IÝ»ÖÖìïü|w¹B\x0016ôêfaà_zßÊo¼o\x0013Bøõøµ¤Æáñ~#Ì:Ú'aÉ²AõqåKïüì}uf	î\x0011	u@PØºúÚ^hY¯Ø°Áz5Zñð´ïþ\x000bx\x0012eqaÂ \x0006èÍRdÒj\x001d+\x000ff~Ù][HÈMÃ\x0015\x0015Ò \x0008àýÏ¶O"­½\x0010S:Ñ§xÛP_V+l#S5èÃ¦ö¬/\x0013ò^/\x001eë©\x0007i\x0002_SÓP7(\x0016ÚÁo½\x0013MÈ*@8\x0019\x0003\x0016ýé½+ön\x0001­Á«³\x0010>6x\x0007fOÂÃ|¡</p><p>ô\x0016²\x0012hù½U¹,&æ]	Â`¶%¸E\x0015é\x0011C\x001dý}t©¸½\x0011[]_\x000fÓº¦µ/
Ò\x0008Øôçõ-\x001d`Üv­Ã¸¹rA\x0017RWò¢¸¨*FÃ¾Uµ°Ú\x0016F7\x0003k\x0016\x001dwÕg&À|µ7ø\x0016Í3."\x001b\x0016Øp¡V\µgxÚi\x0014¥Fâ}pòF\x0001ÆþÇßýç\x001f{~ýÛ\x0007~ê¿\x001då´Î\x0018¸¼§wú{zy\x001f\x0006søÔ_É}"·\x000bä5©eºëÞ¾¼_D»ÕtvñS±÷Þ"ã\x0016³ÒiV»\x0016\x0013´ìS'#* Á^³1Ïe\x0012FFI¾z6ôÈ¾0_ßcþG#ãâS\x001eÜ¼s12ÐïÄ®í{¿õ?ø(µM<</p><p> j}
\x0019%¯n\x000e

	:sîzB`Ðð¸<@ätN/kù©ñ	ñ±ç¢C÷ûú\x0006ÄÄ?k6¨»^<¾\x001a\x0013\x001cp",8"2"|_À©\x001f~,hbhQxÝò»0¢pÛ\x0010#Â¡½ºpòèÁÐÈèÃ\x0011BÏßxVIY2)QNú¸ÃÀSÀãÿçÈ§MÜùYøsó c\x0011*¼\x001aw+³)ZÑI·Ï=\x001fw)þdh`È7»ü÷îÛ\x001fv&ñA\x0005E·$[2\x001fEîÝâñÙíðx2G24Ô~åÖý\x0002²I/f<
Ûÿ\x0015fÛ¶m{ÂR</p><p>§ÐîÇ\x0017b/=oë\x0011\x00007w,+mK\x0013HûÝKq×ÊÛº­.¹\x0012Â]Üé{¶\x000ck¤¿¸Ô\x000b\x0013]-\x0019I±aG\x000eÇÄ^\x000f>\x0019\x001cðS>¹ü{$Û\x000cA3Ý%\x0019×£ü\x001f\x000b:\x001fs4"êè\x0000í1Ïð-6ÔmYÕÌ¿$\x000e9\x0010\x001ay<"<\x000c40:1©Æ=@ûo\x0007¾·«¤¤Ô¢£\x0002ï¾Y6É§©\x000f®¦·üù2i2Oã8Ñ`\x00062\x0016ÂÒ#¥@ÞWzß \x001b«`\x0019\x0015dUP:^\x0008\x000c¢\x0007(T\x0019\x0014\x0001\x001cÊQ(TJ\x000b¥ tdDÚrS®aX7ÙdþÙýk÷qg³3»É&Ì¾yþ|óæ÷>Ïïû|¾ßí
ÕPW\x0010&$ )4ºcQ p4Uvôt·A»0÷fg®P]\x0018-eQ>\x0014\x0011Û\x0007\x0019\x0000\x000bÄ&¿\x0008X5CE<\x0013ã¹Ûñ\x0007\x0008¡±ÊGµ5\x0010Q´²©«{sÝ²by9X\x0015/!£ \x0018\x0016'âahâ±/\x0014Ýcúeûø¶åiùU\x0005ÉGpp\x0010\x0010\x001eíîç\x000fÇÒÂr®OY+RÂã\x000bCÙ\x0000H Ì[À§{ÃX\x0012ÉÃgóK#[©(_ðÝ\x000càFH¸ñ¸usõc?×\x0016'­=\x0005×®í\x0014ä\x000b=zíÁØÞóT\x0019Æ'á\x0011¾d\x0001\x000c\x0011Ðø¬¼úÞ×\x001bv½éñI	Åw÷í\x0003N\x0001ìà¼'íVÝË\x00192j B\x000cJ$o\x0008H\x000fÉ,V÷\x000f|Ø\x00186·\x0015¹ºqÕÃãÃ?þû½\x0005\x001c^¥¼\x0014Çã\x0007e\x001c,+ÀtTèÔ²6
0£µ¥q[ïÝ;Ù2&\x000eâD\x0002/"Êã\x0017UWXìµ·ÝwãÙìØ*µÚ¾\x0004øÌ1ÇìàlïM1xîî#íÍû¾êÛ\x001c\x0016'¤¡``W7ldFqÃúÊo¼\x001fàÃmÆ¢üÙ§;ZT@\x0016Ø/\x00048ìÆukg4À\x001b\x001ez¾ì©£Dî{\x0018DN©×:Æ×ì¦y½Õ¨Ê`"÷»C;ck\x000b¦\x0005K×ÓT)',¯±«¹_u!Ö\x0007thO¹¾âóõ5KkÇ-E\x0018\x0007ôÅòØÔ\x0000\x000c\x0016§¤åÓYL\x0019{Ûx!S.f0i"\x0016\x001a\x0002\x0006{BU)QÇR3_\x001cVíPU"%\x0012(\x000c\x0001Câh²«¯tÚUÇÔÜp]ã¥8)\x001d0CxL<6\x0010âLR<×j\x001dó\x0006M~\x000c
rr>àìÂ3\x0015Ñækáòô\x000b½;@ímÎM9ÎÅ\x0004\x0010H\x0018"Oð
"sâ\x0014EÚaÝÖæåeEq,É\x0017Ê$d4\x0002\x0003vxû@)¢È²úwÆÅþÞJeBÁÂéb\x001e\x000f</p><p>#`ðG2¿Tui¶~½è>­ì£¶\x0002 \x0002¬/Lüî\ûµéÐò÷ô#\x001fk4\x0003v}í£»\x001e]\x0003ÖµUû¢äjiá½Þ\x0001ÍcøM×ÝT:3&FÊBûyæL8y»£û»¶ëÉ2f ÜWÈ#</p><p>ùt8</p><p>\x0017Ðc\x001c\´í8\x001d\x00157#\x0005\x000c4\x0014Áf\x0012\x0008\x0002</p><p>Ö\x001f\x0006öF\x0006ÜÓèç=7ºXÖ`³´V\x001d§À=\\]¼§rn¦5½¥8>.Df1Ñl*\x000cEäÉS¿ÖëçöuFVxï\x0014]ÎÊ8Ù\÷`ó×Ôø¤ÚY\x0019¨Í</p><p>!ú\x0012xi%ßO4fa<@è[O[\x001cI`ó¬ÌèFªNHùEÕßX&×`k\x001d^ÔÄii\x0005¥]Ú\x0006%ßÛ}WÇ\x000eÄéÊæ×ºUssµ"&î ²¨Ä@\x0006\x001eg§çTZ¨å0ëUr¢Y46G{º¹y</p><p>Ï?©½ßp[!\x000e\x000e<8´<gl¾¦Là\x0008\x0018\x000c\x001cÌ!ÑX^Ø\x0019UcÛâêÔòw]}Å)GE\x0004\x0014Ê¡²¸\x000c7\x0014Å;"»ßÚ±`×´ç§z|¾·Q\\x0011×ú
­
\x0019òH¹²©\x0007¸lÛËCÛyg¤\x0014<\x0001
\x001cLDô	Ä\x0013¥±\x0017ëÔ¯Ö7¦æÌ/TÉ"±H\x0014"¦Ñ°XÃp\x000fO\x001f,{ôJåkþÃêÐx{yÏÄøÑÄ\x001cN@\x0000\x0005\x0019À+ò\x001b:Vk¼_9Ñ>º2;\x000c¨xäÕ­µùý\x001cñ>Öcr²µè\x0002Ûë\x0000«êÓÎÏ·~I@öÑ­¥á>Uñ½\x001b_7½xiÖ\x000c%\x0008y\x001cJ	\Üèâî©ñÙ¾2eJ\x00080Bª²0\x000e\x0014\x0016=ëPÛl\x0013?.Ì5U&EJðp$!P¸8\x000c8xÐYY×2³0>Vs%'2:&»Âf\x001bP
eÃ]\x000f\x001erÇòeçtÓCÃ5¹YQ4\x001c\x0011G¤\x0013ÄL\x0018\x0002C</p><p>»¤îé]\\x0018_û½ûö/¹9,µÕ%ò¸pu}åÕ¸o)onb{º¡<Kè\x0005%?lÕ\x0016à.\x0008qRi»vbÀ\x000bóæ·MgS£ÃRr</p><p>-{ó2m«óNIeÉ\x0019
\x0003]\x0003eQxð®ý9äL</p><p>?q§U³aý}è=ö\x0000ö\x0005î±oÀ°Ç¾®â\x0004}\À@Á®òsE\x000fFZ.ñ\x0018Ì\x0012u§m¶¿ÿÑåìü}Y_ªº5?,9\x0000»Us&E\x0012A¬P\x0001Ù\x000b$±y×ªj,ïuæoóOÂ<Ýö\x000cf¤=li6´\x0016&ò\x0005iÕêw¦?Ù:ëî
fãqHÈ®ó\x0012ðä\x00139×Õý¯·W?Õ©sââ%|%¤ã¼Á(w°?t$3¿¾·gÕh\x001fyV(\x0013ãá\x0014.E"0¡p4<ûaãô´ac~fa7-Ï¼~kxnì(\µ\x001aömÄû[vÓº}hÁø Òýs?lÜíg­\x001b\x000eËú/«lÎü­Ïø²¢°0¿¥_³d7Ï´^ÍKRé4	\x0017\x000bu\x0007< ¥MµºnUiªA@!Y(i\x0010eD¤\x0017×¨w­¦iÃR_xAÎÀÀ0(?ºáO¦\x00180\x0017Wâbùû5ËÂ6 8\x0008¢¾ê\x001chéº\x001dáå¶ã\x000eÂBý­Cu73E4*\x0006Jð¸081\x0008\x001b[ÙÙ»¹ð\x0004å\x000bðØûëOÿßþ²½2«ÿoZ_²½º\x001bÍCPOëLuy"\x0013Lü\x0002ÅüaÙ¸8Qè\x0003¢%}õ\oÚ\x001c­ªJÃ99ó¾Õk\x0017æÍëóã[ß·wß?\x0001tðü³\x0016Ëìäß5ÞË;²ÛQ\x000ftpLD^JrßÓ[\x00003VþEr\x000c\x001f\x0001òð@\x000b¯|³d\x001f]6Uç\x0006¢|}(áñ¼[z=á¸è\x001fÌù3û\x001eÇabÂI0eH	bË\x0010Dì(©-¸"ÄRÄ\x0012¨%¥ªÒs´zJP\x000eµ´äZ\x0010®¶Øc¹Zû?ÜGÏ¹gÎ¹÷W3÷Î|yçï÷ûù|Þ¯÷Û\x001a0´öI¯P|\ÚUË\x001bÐ\x0010\x0000ZØx\x0007øÆ$qÿVØÐS\x0018¦\x000f\x0018¡\x0008NÌÊJ¡ F2\x0006®R»ÑjÿEðñóÐPS</p><p>
	à\èììÜÛÒÌâd:	\x0003ð!\x000fF'4£µ\x0015Én\x0018\x0004\x0002fJNþÔ¿öQyò;Y~ÄÏÝX8Á×8¦ØU´U8\\x001cÄÊ.0")Ë\x000cr$Âõ\x0001brßÌz ¡:J@@1îñâIõÔH\x0005ÛßÒ\x0014ß¼½55V\x0016ã6¡±\x0011%Õ­jÍè ¼\x0001>±ªM~v¤>úaxæê}L
mÓ+Z¶NUKòÊ+&^emÊÕóµþ®ò(ç«úî~IÂ¼zi ÎÍÂ\x001cgHîRìmÌÿáiuÚù/cÃH\x0014\x0004aqàòyÕUY¾äM\x0003\x0002é£õ£÷ÁáòhPáp\x0014\x001aO[U'\x0008÷t6×ÃÑY]Ã¯öwÕfÖ?tK³Í7\x0012Ü\ñMZíüæÌg]³O\x0003¯o³`\x0000söà	ó\x001aj¹¡>\x0014°màÒýë»+Úñ¦âp'PÔ]B\x000b¤âl~\x000c
m4À\x0006dÖO÷¸Á6&F¦xk§Âüöö»\x000c\x000bÀ*½µwø§óÊÞª(</p><p>\x000c¼b:3©²¢¨4/ÖÃ\x0006a\x0008\x0000¬Â¶å\x000f\x000bç\x001f8î?Â}X\x0014«¸0\x001bFAê\x0019b\x001dò\x0015õá_º\x001a,¢òhýu=ß\x0007Ã¢\x001ch\x0019|ncM^\x0012ËÓ\x0002\x0000\yOGG×çÖ]gX\x0019@0dgFbÉã¡#\x0011?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="http://e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-le-cumul-des](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-le-cumul-des)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="http://e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
Instances: 2
  
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
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/liens-utiles/" method="get" class="form-filter pas_surlignable">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/#" enctype="multipart/form-data">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/liens-utiles/#" enctype="multipart/form-data">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/#" enctype="multipart/form-data">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/lettre-d-information/#" enctype="multipart/form-data">`
  
  
  
  
Instances: 10
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "search" ].</p>
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communiques-de-presse-2019](https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communiques-de-presse-2019)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/](https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/a-la-rencontre-des-associations/article/a-la-rencontre-des-associations](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/a-la-rencontre-des-associations/article/a-la-rencontre-des-associations)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/](https://haut-conseil-egalite.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/sante-droits-sexuels-et-reproductifs/travaux-du-hce/article/actes-sexistes-durant-le-suivi-gynecologique-et-obstetrical-des-remarques](https://haut-conseil-egalite.gouv.fr/sante-droits-sexuels-et-reproductifs/travaux-du-hce/article/actes-sexistes-durant-le-suivi-gynecologique-et-obstetrical-des-remarques)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/ecrire/](https://haut-conseil-egalite.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communique-de-presse-2020](https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communique-de-presse-2020)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/article/associations-et-syndicats](https://haut-conseil-egalite.gouv.fr/liens-utiles/article/associations-et-syndicats)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/acces-reserves.html](https://haut-conseil-egalite.gouv.fr/acces-reserves.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/offres-d-emploi/](https://haut-conseil-egalite.gouv.fr/pied-de-page/offres-d-emploi/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/a-la-rencontre-des-associations-1627](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/a-la-rencontre-des-associations-1627)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 68 [https://haut-conseil-egalite.gouv.fr/presse/communiques/?filter=2019].</p><p>Predicted response size: 368.</p><p>Response Body Length: 15,444.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/robots.txt](https://haut-conseil-egalite.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-relatif-a-l](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-relatif-a-l)
  
  
  * Method: `GET`
  
  
  * Parameter: `//e.issuu.com/embed.js`
  
  
  * Evidence: `<script type="text/javascript" src="//e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/reforme-du-cumul-des-mandats-une](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/reforme-du-cumul-des-mandats-une)
  
  
  * Method: `GET`
  
  
  * Parameter: `//e.issuu.com/embed.js`
  
  
  * Evidence: `<script type="text/javascript" src="//e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-le-cumul-des](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-le-cumul-des)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://e.issuu.com/embed.js`
  
  
  * Evidence: `<script type="text/javascript" src="http://e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://e.issuu.com/embed.js`
  
  
  * Evidence: `<script type="text/javascript" src="http://e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/](https://haut-conseil-egalite.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-chronologiques/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-chronologiques/)
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/robots.txt](https://haut-conseil-egalite.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/sitemap.xml](https://haut-conseil-egalite.gouv.fr/sitemap.xml)
  
  
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

  
  
  
  
### Private IP Disclosure
##### Low (Medium)
  
  
  
  
#### Description
<p>A private IP (such as 10.x.x.x, 172.x.x.x, 192.168.x.x) or an Amazon EC2 private hostname (for example, ip-10-0-56-78) has been found in the HTTP response body. This information might be helpful for further attacks targeting internal systems.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/les-ancien-ne-s-membres/2013-a-2015/article/m-nicolas-sadoul](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/les-ancien-ne-s-membres/2013-a-2015/article/m-nicolas-sadoul)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.13.60.233`
  
  
  
  
Instances: 1
  
### Solution
<p>Remove the private IP address from the HTTP response body.  For comments, use JSP/ASP/PHP comment instead of HTML/JavaScript comment which can be seen by client browsers.</p>
  
### Other information
<p>10.13.60.233</p><p>172.19.11.9</p><p></p>
  
### Reference
* https://tools.ietf.org/html/rfc1918

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Secure Pages Include Mixed Content
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes mixed content, that is content accessed via HTTP instead of HTTPS.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/reperes-statistiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/article/l-equipe](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/article/l-equipe)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/jpg/bergs_paola.jpg?docid=2256&doctype=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/parite/reperes-statistiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/revision-constitutionnelle-le-hce-appelle-a-faire-de-la-constitution-un-texte](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/revision-constitutionnelle-le-hce-appelle-a-faire-de-la-constitution-un-texte)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/UserFiles/Images/fr de rugy db.PNG`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/violences-de-genre/actualites/article/violences-faites-aux-femmes-en](https://haut-conseil-egalite.gouv.fr/violences-de-genre/actualites/article/violences-faites-aux-femmes-en)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.haut-conseil-egalite.gouv.fr/IMG/UserFiles/Images/DVg3SrkXUAEuT9T.jpg`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/sante-droits-sexuels-et-reproductifs/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/sante-droits-sexuels-et-reproductifs/reperes-statistiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/violences-de-genre/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/violences-de-genre/reperes-statistiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/les-membres-du-hce](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/les-membres-du-hce)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/jpg/dsc_1039.jpg?docid=2265&doctype=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/toutes-les-actualites/article/les-travaux-du-hce-vous-ont-ete-utiles-faites-le-nous-savoir](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/toutes-les-actualites/article/les-travaux-du-hce-vous-ont-ete-utiles-faites-le-nous-savoir)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/UserFiles/Images/Appel à témoignage _.png`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-statistiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/enjeux-europeens-et-internationaux/reperes-statistiques-31/](https://haut-conseil-egalite.gouv.fr/enjeux-europeens-et-internationaux/reperes-statistiques-31/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/jpg/bergs_paola.jpg?docid=2256&doctype=`
  
  
  
  
Instances: 12
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/squelettes/](https://haut-conseil-egalite.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins-dist/](https://haut-conseil-egalite.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-css/](https://haut-conseil-egalite.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/](https://haut-conseil-egalite.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-js/](https://haut-conseil-egalite.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lib/](https://haut-conseil-egalite.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/squelettes-dist/](https://haut-conseil-egalite.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/](https://haut-conseil-egalite.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins/](https://haut-conseil-egalite.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `cxdipfXUEcCC4DsqJlLL3fNyljz02WN3vAgP7AGqLkXj/611i8D06Sf15zCvWeYhQGDu+1egeo0ofuxSEcsrcwRVnHI=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/robots.txt](https://haut-conseil-egalite.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `Z5jiRrUkPDhjDUoqJlLL3fNyljz02aEB/k5nUds00QYxfYNOBZNVKqcVhn3T6Aa48dSftvIc7uWc/431tsoFfRpdMlE=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L101xH141/arton1645-143fc`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/v2/p/Contact/Liste-des-CIDFF/73`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L66xH95/arton984-5c73c`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L75xH69/an-2-9977c-dc254`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  * Evidence: `be/wp-content/uploads/2017/04/Analyse2017-humour-sexiste`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/serve/MUIEANmfk2BbgPxtDXjm7WZMUOCwuKtEF9sHOMSKIOZxav1g1D6MQJU57kbks_6yXJz4iiFzP032UFehgpA5UMfbXFcg5rogHA7qqfLRKPMA0ig2KfUFTvJcYz-ZAq8NHob_7yNyqZ56am2fDSSblcl2ANol3FY9x-s5ofJl-5ixRbqtqIHG52fU-E7UzOGZbiI0TXKhsF34_5Xm`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `pvUvAI8kN3SKHCwqJlLL3fNyljz02WhIIClsEIrsETRZd/OqAn2V8NNcaEQ9Ve5gFG9Y+QfUNSTtXtaFWqnWRNJXFgE=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `PDhyQh/ooQIifP5kG/7wVyK8lNCIAKgql+qgAol+6iA1zC4uxBU6yyakCDNBY3DIOI68Jfc/8T81dksKwe4Np905s+jdA1WQ13CXvGx+wEYUwQzhZZ1IOR9H3PGtZBrbz4XBjNSes5pwqG1z+gmSy3OvteLPuzNzgoheZkedVvPIvhMV+nVNDk2FUkzmuw==`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>s\x0017b���\x0011���;*&R���r�<��cw�\x0008\x000f�\x0001�.E���u����'��0�Y�!@`��W�z�(~�R\x0011�+s\x0004U�r</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/](https://haut-conseil-egalite.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/squelettes-dist/](https://haut-conseil-egalite.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/](https://haut-conseil-egalite.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins/](https://haut-conseil-egalite.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins-dist/](https://haut-conseil-egalite.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-js/](https://haut-conseil-egalite.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lib/](https://haut-conseil-egalite.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/squelettes/](https://haut-conseil-egalite.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-css/](https://haut-conseil-egalite.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
Instances: 19
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bWHERE\b and was detected 9 times, the first in the element starting with: "		// For CommonJS and CommonJS-like environments where a proper `window`", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/](https://haut-conseil-egalite.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-js/](https://haut-conseil-egalite.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/](https://haut-conseil-egalite.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins-dist/](https://haut-conseil-egalite.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lib/](https://haut-conseil-egalite.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-css/](https://haut-conseil-egalite.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins/](https://haut-conseil-egalite.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/ecrire/](https://haut-conseil-egalite.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/sitemap.xml](https://haut-conseil-egalite.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/robots.txt](https://haut-conseil-egalite.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `40231098`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616058569`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1613654526`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1600163253`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1600159733`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1613654067`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>40231098, which evaluates to: 1971-04-11 15:18:18</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `urlPage`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `send`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action_args`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `urlPage`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `send`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://haut-conseil-egalite.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `urlPage`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `copy`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `send`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher](https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `urlPage`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher](https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://haut-conseil-egalite.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher](https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `emailFrom`
  
  
  
  
Instances: 17
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://haut-conseil-egalite.gouv.fr/</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>urlPage=https://haut-conseil-egalite.gouv.fr</p><p></p><p>The user-controlled value was:</p><p>https://haut-conseil-egalite.gouv.fr</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
