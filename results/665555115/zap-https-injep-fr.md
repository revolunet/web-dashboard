
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:40:00


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 5 |
| Low | 9 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 5 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - Perl | Medium | 4 | 
| Source Code Disclosure - PHP | Medium | 3 | 
| Sub Resource Integrity Attribute Missing | Medium | 14 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Application Error Disclosure | Low | 1 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 8 | 
| Dangerous JS Functions | Low | 9 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 4 | 
| Strict-Transport-Security Header Not Set | Low | 1 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 1 | 
| Information Disclosure - Suspicious Comments | Informational | 10 | 
| Modern Web Application | Informational | 9 | 
| Storable and Cacheable Content | Informational | 9 | 
| Storable but Non-Cacheable Content | Informational | 2 | 
| Timestamp Disclosure - Unix | Informational | 8 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2019/01/DP_10ansFEJ.pdf](https://injep.fr/wp-content/uploads/2019/01/DP_10ansFEJ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `564599599599`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2020/09/Offre_INJEP_cites_educatives.pdf](https://injep.fr/wp-content/uploads/2020/09/Offre_INJEP_cites_educatives.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `674615620748673`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/03/FR54_JeunesQPV.pdf](https://injep.fr/wp-content/uploads/2021/03/FR54_JeunesQPV.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `579544533615488`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/03/FR54_JeunesQPV.pdf](https://injep.fr/wp-content/uploads/2021/03/FR54_JeunesQPV.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `670718604571709`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/03/INJEP_Liste-des-acquisitions-n-96-mars-2021.pdf](https://injep.fr/wp-content/uploads/2021/03/INJEP_Liste-des-acquisitions-n-96-mars-2021.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `586333461306562`
  
  
  
  
Instances: 5
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 564599</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-admin/admin-ajax.php](https://injep.fr/wp-admin/admin-ajax.php)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/secupress-8d6739e9/](https://injep.fr/secupress-8d6739e9/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
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
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/thematique/jeunesse/](https://injep.fr/thematique/jeunesse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/thematique/education-populaire/](https://injep.fr/thematique/education-populaire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/02/WebConf_SlidesJulienFluchs.pdf](https://injep.fr/wp-content/uploads/2021/02/WebConf_SlidesJulienFluchs.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#FraL`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/03/rapport-2021-04-Travail_Jeunes_vulnerables.pdf](https://injep.fr/wp-content/uploads/2021/03/rapport-2021-04-Travail_Jeunes_vulnerables.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#2QJBd`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2020/11/Chiffres-cles-sport-2020.pdf](https://injep.fr/wp-content/uploads/2020/11/Chiffres-cles-sport-2020.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#gOWWJ`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2020/09/bretagne-2048x1536.jpg](https://injep.fr/wp-content/uploads/2020/09/bretagne-2048x1536.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#vfbBq`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#FraL</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/01/IAS44_frequentation-des-colonies.pdf](https://injep.fr/wp-content/uploads/2021/01/IAS44_frequentation-des-colonies.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?==³ó\x0019\x0010¤2¿Hñ\x0019\x0019ãZ#\x0007ÿ\x0000\x001bÔ^Q\x0011;¼û¦q,wµm{(Ç?çc\x0017\x0008{J÷²\x000bC\x001e\x0008G T§Lª\x000còD°\CgÉwhÉ593DûA_µdòqÅá®Ç
tzìZ¬Wá\x0010¸{$J³<å\x001a²<gHÐþDËµÌ¸Óþ.£$ñ\x0000ÿ¢@ì\x0015<dï»\x0010­¥LýËïÈ½\x0016eë]?Ö¶\x0003É©à\x000cG'EÝ[ø\x0011?c1·D$Á\\x0002³<Ë\x0004dIÎd\x0016¬Í¿8N«\x0010©D½Ìåúk±4TaË§þß\\.á¼XÁJáø/?Ñ\x0018£t¹¼ÀÃó\x0002¾Q¥ÜùÆ\x0018ÉÙt9+V^á;°ÐÉÂÇA\x0016ÚËº>¡EB,¿BQ÷ÔÓô\x0018v\x000f\x001fí»åi\x0016Äo,à\x0015©íw¤ªË\x0006ðæHWUR¡Á\x0007\x001aa»ºw¸ÿÁ \x000f^»Fîm\½ÃA\x0004TXãòÎ\x001e\x0002\x0019Ã\x0013\x0007ôëÛ~°'±g\á\x0010«­Ød)ÓÄeCV!ªïLRû#}\x0011Z3%µ\x000cmZØ²=¾¢h¨\x001c\x001b7\x0017ïÐ}\x001a|ÿ^\x001bs!\x0013Þ£2x´Tâ\x0014w¶\x001b\x001a[\x001c`z÷\x0003? o¡^×G\x0017ËEqå3o\x0008ü\x0016`\x0000Zð\x001e
endstream
endobj
63 0 obj
<</Filter/FlateDecode/Length 2574/N 3>>stream
HyTSw\x0016ÇoÉ°Ãc
[°\x00065la\x001d\x0004Q\x0008I\x0008\x0001\x0012BHØ\x0005AD\x0005\x0014EDª2ÖmtFOE.®c­\x000eÖ}êÒ\x0003õ0êè8´\x0016×\x00178GNg¦Óï\x001fï÷9÷wïïÝß½÷ó\x0000 '¥ªµÕ0\x000b\x0000Ö ÏJÅ\x0016\x0015\x0014b¤	\x0000\x0003
 \x0002\x0011\x00002y­.-;!\x0007àÆK°ZÜ	ü^\x0007i½"LÊÀ0ðÿ-×é
\x0000@\x00198\x0007(µr;q®ª7èLö\x0019y¥&Q\x0013ëñ\x0004q¶4±j½ç|æ9ÚÄ
V³)gB£0ñiW×\x00198#©8wÕ©õ8_ÅÙ¥Ê¨QãüÜ\x0014«QÊj\x0001@é&»A)/ÇÙ\x000fgº>'Kó\x0002\x0000ÈtÕ;\ú\x000e\x001b
\x0006Ó¥$ÕºF½ZUnÀÜå\x001e(4T%)ë«\x00060C&¯é\x0015¤Z£i\x001b\x0001¿ó8¦ÚbxE¡ÁÁB\x001fÑ;ú¯¿P¦ÞÎÓÌ¹Aü\x000bom?çW=
x\x0016¯Íú·¶Ò-\x0000¯\x0004Àòæ[Ëû\x00000ñ¾\x001d¾øÎ}ø¦y)7\x0018ta¾¾õõõ>j¥ÜÇTÐ7ú\x000e¿@ï¼ÏÇtÜò`qÊ2±Êê&¯®ª6ê±ZL®Ä?\x001dâ_\x001døóyxg)Ëz¥\x0016ÈÃ§L­UáíÖ*Ô\x0006uµ\x0016SkÿS\x0013eØO4?×¸¸c¯\x0001¯Ø\x0007°.ò\x0000ò·\x000b\x0000åÒ\x0000R´
ßÞô-\x00072ð5ßáÞüÜÏ	ú÷Sá>Ó£V­då`r£¾n~ÏôY\x0002\x0002 \x0002&à\x0001+`\x000f;\x0010\x0002\x0010\x0002ÂA4\x0007É \x001dä\x0002°\x0014ÈA9Ð\x0000=¨\x0007- \x001dt\x001e°\x001el\x0002Ã`;\x0018\x0003»Á~p\x0010Á	ðGp\x001e|	®[`\x0012L`\x0006<\x0005¯ \x0008"A\x000c\x000bYA\x000e+ä\x0005ùCb(\x0012R¡,¨\x0000*T\x00162B-Ð
¨\x0007ê¡\x001dÐnè÷ÐQè\x0004t\x000eº\x0004}\x0005MA\x000f ï 0\x0002Óa\x001el\x0007»Á¾°\x0018Sà\x001cx	¬kà&¸\x0013^\x0007\x000fÁ£ð>ø0|\x0002>\x000f_'áð,\x0002\x0010\x001aÂG\x001c\x0011!"F$H:R!z¤\x0015éF\x0006Qd?r\x000c9\A&GÈ\x000brQ\x000c\x0015¢áh\x0012ÊÑ\x001a´\x0015íEÑ]èaô4z\x0005BgÐ×\x0004\x0006ÁàE\x0008#H	\x0008*B=¡0HØIøpp0MxJ$\x0012ùD\x00011D, V\x0010½Ä­Ä\x0003ÄãÄKÄ»ÄY\x0012dEò"EÒI2ÔEÚBÚGút4MzN¦\x001dÈþä\x0004r!YKî \x000f÷?%_&ß#¿¢°(®0J:EAi¤ôQÆ(Ç(\x0017)ÓWT6U@ æP+¨íÔ!ê~ê\x0019êmê\x0013\x001aæD\x000b¥eÒÔ´å´!ÚïhÓ¦h/è\x001cº']B/¢\x001béëè\x001fÒÓ¿¢?a0\x0018nhF!ÃÀXÇØÍ8ÅøñÜkæc&5Sµ\x001d6»löIaº2cKMÌAæ!æEæ#\x0016åÆ°d¬VÖ\x0008ë(ë\x0006kÍeØél
»½}}Câ¸qâ9
N'ç\x0003Î)Î].ÂuæJ¸rî
î\x0018÷\x000cwGä	xR^\x0005¯÷[Þ\x0004oÆc\x001ehgÞ`>bþù$\x001fá»ñ¥ü*~\x001fÿ ÿ:ÿ¥EÒbÅ~Ë\x0016Ï,m,£-Ý\x0007,¯Y¾´Â¬â­*­6X[Ý±F­=­3­ë­·Y±~dÃ³	·ÛtÛ\x001c´¹i\x000bÛzÚfÙ6Û~`{ÁvÖÎÞ.ÑNg·ÅîÝ#{¾}´}ýý§ö\x000f\x001c¸\x000e\x000ej\x0001Ï\x001cþc1X\x00156Æf\x001cm\x001d\x001c;\x001c'\x001c_9	r:\x000e8Ýq¦:Ë\x0007O:Ï¸8¸¤¹´¸ìu¹éJq\x0015»»nv=ëúÌMàï¶ÊmÜí¾ÀR \x00154	ö
n»3Ü£ÜkÜGÝ¯z\x0010=Ä\x001e\x001e[=¾ô=<Ë=G</zÁ^Á^j¯­^¼	Þ¡ÞZïQï\x001bBº0FX'Ü+òáû¤útøû<öuñ-ôÝà{Ö÷µ__ßß-\x0011G,ê\x0010\x001d\x0013}çïé/÷\x001fñ¿\x001aÀ\x0008H\x0008h\x000b8\x0012ðm W 2p[à¸AiA«N\x0006ý#8$X\x001f¼?øAKHIÈ{!7Ä<q¸Wüy(!46´-ôãÐ\x0017aÁa°a\x000f\x0017Wï	¿¿@°@¹`lÁÝ\x0008§\x0008YÄÉH,²$òýÈÉ(Ç(YÔhÔ7ÑÎÑèÑ÷b<b*böÅ<õÕÇ~\x0014ûL\x0012&Y&9\x001eÄ%ÆuÇMÄsâsãã¿NpJP%ìMI\x000cJlN<DHJIÚtCj'KwKgC%N¡§d§\x000c§|êªO=\x0006§%§mL»½Ðu¡váx:H¦oL¿!È¨ÉøC&13#s$ó/Y¢¬¬³ÙÜìâì=ÙOsbsúrnåºç\x001asOæ1óòvç=ËËïÏ\ä»hÙ¢ó\x0005Ö\x0005ê#¤Â¼Â³ã\x0017oZ<]\x0014TÔUt}`IÃsK­V-ý¤Y,+>TB(É/ÙSò,]6*-¾W:#È7Ë\x001f*¢\x0015\x0003\x0007Ê\x0008e¿ò^YDYÙ}Uj£êAyTù`ù#µD=¬þ¶"©b{Å³ÊôÊ\x000f+¬Ê¯: !kJ4Gµ\x001cm¥ötµ}uCõ%®K7Y\x0013V³©fF¢ßY\x000bÕ.©=bàá?S\x0017îÆÆ©ºÈººçõyõ\x001aØ
Ú\x000bk\x001aï5%4ý¦\x0019m7lqlioZ\x0016³lG+ÔZÚz²Í¹­³mzyâò]íÔöÊö?uøuôw|¿"Å±N»ÎåwW&®ÜÛeÖ¥ïº±*|ÕöÕèjõê5\x0001k¶¬yÝ­èþ¢Ç¯g°ç^yï\x0017kEkÖþ¸®lÝD_pß¶õÄõÚõ×7DmØÕÏîoê¿»1mãá\x0001l {àûMÅÎ
\x0006\x000enßLÝlÜ<9úO\x0000¤\x0001[þ¸$ühÕB¯\x001c÷dÒ@®\x001dú i Ø¡G¡¶¢&¢£\x0006£v£æ¤V¤Ç¥8¥©¦\x001a¦¦ý§n§à¨R¨Ä©7©©ª\x001cª«\x0002«u«é¬\¬Ð­D­¸®-®¡¯\x0016¯°\x0000°u°ê±`±Ö²K²Â³8³®´%´µ\x0013µ¶\x0001¶y¶ð·h·à¸Y¸Ñ¹J¹Âº;ºµ».»§¼!¼½\x0015½¾
¾¾ÿ¿z¿õÀpÀìÁgÁãÂ_ÂÛÃXÃÔÄQÄÎÅKÅÈÆFÆÃÇAÇ¿È=È¼É:É¹Ê8Ê·Ë6Ë¶Ì5ÌµÍ5ÍµÎ6Î¶Ï7Ï¸Ð9ÐºÑ<Ñ¾Ò?ÒÁÓDÓÆÔIÔËÕNÕÑÖUÖØ×\×àØdØèÙlÙñÚvÚûÛÜ\x0005ÜÝ\x0010ÝÞ\x001cÞ¢ß)ß¯à6à½áDáÌâSâÛãcãëäsäüåæ
æç\x001fç©è2è¼éFéÐê[êåëpëûìí\x0011íî(î´ï@ïÌðXðåñrñÿòó\x0019ó§ô4ôÂõPõÞömöû÷ø\x0019ø¨ù8ùÇúWúçûwü\x0007üý)ýºþKþÜÿmÿÿ\x0002\x000c\x0000÷óû
endstream
endobj
64 0 obj
<</Filter/FlateDecode/Length 4080/Subtype/Type1C>>stream
H|U{P\x0014g\x0012a÷A\x0001w\x0019\x001e»0³ ËCAÔÈK£ >\x0002\x0002*\x001e,°°\x0012q\x0001\x001c.'jÄ¨u¥uÑò«\x0018£\x00109QAO0ê\x001dÄ\x0015\x0015#\x001a±\x0012\x0013SËIL\x000fô¦î¾E­ºª«Ê\x001f»_MÏ×Ý¿_÷¯{XFíÄ°,ë¹0-qÁä7¬U\x0016SÙ"Se¥µfJuMãe¨âÏ*jEr\x00151\x000f?\x001eí\x001d­&þLÒú@7Hs&\x000fØ=á¤Èk\x00185Ëª]2MÅyÅë×®JJ¶×U®.±T\x0019BÃ\x000cS£¢¢Ã\x001dÿqùVsñ\x001as¥!Ø0¯Ò\ij]k^\x0017a°TUÇGFÖÔÔDTÕ[K*MåºBkYä¼Ìºr³!ÆPd.f\x0018	d 53e¦\x0010úÄ8;1nNÌ\x0004ñe\x0018=ÃLS3Iãt7¦aj\x0019¦az\x0019æK¹Á0w\x0018v\x000bÈ$«\x0017°\x000b	3ògRÌ
ÖMaKÙ>ö¡Î)Æ©Ìé/N z]Õª:¥º§öQ/Q×©w©ÿªþ\x000ft_¸e\\x001f_Ìoã\x001f8/q.wþÔ¹ÜâqÍãpüòñgÇÛ]Þqiw¹ãêã\x001aæºÕõª¿ÛF·!ÁSx[èqçÝÃÝ+Ü¹?õ0z\x0014z\x001c\x00101áF§Ù®\x0019Õ®ÓVGan×¨O\x0017ÛÔ¥\x0004u©0W­l\x001d}Û¾»±\Q\x000eß°ë\x0008æÚç#xH°»\x0012¨U\Åß6ñ ¸\x0012ëb\x0011ÆnrÂýÕ\x0010\x000eÊ¬\x001avß§j\x0017\x0004sç!@#w\x0001é1Ã#\x0004%Îf%\x000e@ím¬%Â\x0011\x001bè,Ð³\x001d\x0010¦ç6ñ×kõýSyFrs\x000b*2ô\x0011É\x000f@wðàwýáãK§ËóÛ¥ &ÝËæ·NÔc:ú`\x0010Zä\x0006\x001eKÁ\x0003\x0003`¡$Üo\x0002o%\x0015¼Ù~0Â~¤ê÷j\x000eòÀ\x001b\x0002À$À	½Áy\x0012Rózô\x0016ÁéÖlåÍ<Ê	¯£4SIåõ4\x000cDÑßä±PA4²\x0012¼±\x001a\x000fÓó0}q\x0005¼íÙPL\x001f\x0005_\x0006_GRGB#5\x001c\x0002_<DÁ×qkÐ\x0006>0\x00054ô-´¤RM\x001c\x001el;×+Ã\x0000îG
hÑ¯­(¶\x0015èf
Bü>\x000fâíGÿºvªbõIi\x0008\x0008¹6ÿH\x001eßD\x000cÃB\x0007s+ø¡\x001f,\x0004ì<X=²¤½E1Ü¢\x0018F \x0013\x000c
à§ô×°ð	\x0004«`Ux­ç@k«ÜÖvðÒ\x001dRÁöR>yÍ\x0015e¯¦\x0019ÉòS}ECzaA\x0013ø*½5/\x0019)	MÒë\x0008q/òôÓ>@\x0007ß\x0000e)\x0007qø\x0019ÙÁÁ\x000ch'ö\x000c\x0008¤é§ð\x0018'1
N\x0012\x000cçï_ù\x0005Â\x0017~ÊL\x000eÚg\x0012ð ×\x0003íá\x001c\x001eTÂ	úÒ,>õ SrA7V¬´ð[½\x0008é´¡`÷ð`Fª1\4¦\x0010,êy4\x0017\x0006Ã"i;èÄI)\x000fAÿÌt}èéþ\x0018$*[i^ì$IØD[¶\x001a¨0^êd\x0005­ÍXÛVßã d\x0007ð\x0010«{°ÐG\x0018-á;\x001c\x0018qDê¯ùöÂ$y\x001bjÊM\x0004ÐÕÓ"­ú\x001f#\x000bns¯æK\x0007nÜÕý.Æ/®\x001ehé®§\x0011l\x00001$å\x001eLw;À~CÁÆR°6Þ´¹ÄV&M½\x001f;ùI,ÙX]µ¹B/ØU\x0002ÞV</?\x0008ö*DªN)"p»®~\x000e\x001e:\x00101\x0012#þÁïÊ²\x0016¦Ø\x0005\òÈcö"\x0018Tð\x0005ÊbÏ\x000f\x00045wW\x0000\x0003F\x001d\x0004wÒSsWÊ ÆØ84b\x000e³ï£\x0011Rb¥W®PD}¿¥®<ô
-O¶\x000er^£µH\x001e2"\x0008hfv"Á:4® §f&õ»ÓÇ°uSl-8]\x0004òÿØæ:°åC#HìY8£:\x000b"\x0001	ÏpÔ¿é¥s·\x0017DB\x0004FrBG=ø(ùàC\x001c
; T\x0005ýT\x0008ñ\x0014~ Ê{y(E\x0006\x00020\x000eã)@,þH×Ásº
â¥÷ÀGLÈù\x001aB\x001cs\x001fÚ5póæY\x0018"Ñ©	Y>;ÂµRI.£Ã1\x0019&ª`²\x0017L\x001cY\x0016ÂaböaÔüú	\x0011V5Aç\x001a!DuÚ±\x0002¼ð\x0000\x0007ãÀ\x000cÿÜÑóÔ!\x0012mÔ\x0000Á)yq¤ÇSIwÇ#ús-eY9åæÄ92\x0016 \x00089\x000e\x000eÙ :\x0002ÑL»)À\x001f\x0000cµ¹½Ö\x0013½_8H ÀÛg \x0008[\x001cs3g_$iç¾ë²,ßå3
,\x0019éùG[K¤\x0018#YzñVá¿õÂ^*â pSÒ(þ§à¯§^à\x000fA\x000fÀmºZ\x000eïÙWî\x000f$pÃ\x0018p\x0013!\x0006ª	VóB>\x001d,º\x000f=)\x000b/ö.ÝH\x0011t\x0018á\x0003
Éøó÷\x0010æ\x0014\x001dÔ.¥ë·4VIïÀàe×r5ød0ìùøøî\x0016}ß¹ât:\x0007i¦¢Ô,ÓGmhñIÆ¥ßéMõ 2\x0010`\x0002­\\x0007\x0004C#ÁyÀï¨ÌÇ\x0006ë+tÎ(ª[W"ÝÛÕüà[}WKuÅq¹\x001fxr*3ó£9zL
Ãø'¹Ç c	9©½{Ý-ý\x0016ÐiE§ûäí|_k{o_[~ô.jÎO\x0004«
\`)e5\x0017ÆkNRE¸\x001f$?=
ÚgÐl\x0013Á0|\x001b´òN~(ÿLú	Iû¤ëXó¹¯t;y`£\x0006Ñ\x0017uÑ3¶ðI'Vv½%i¥½U°bn+îÃ³!ÞWf«³KZ.Òìç[/o±äHÛøe%%9ô2^V/,hí¡ì>?Ý|åre)Eö¦©8ÊìKªj¨¥Ê¾B}EÑ/µm?®~¥ò\x0016ÚÍ
´)%/WRÅ«´á\x0011Gg\x0003x\x000eÃ`/\x00198ñ÷kÏ)æëÕÝæVét^êáx=~èØP?P2Ìßüe.íÌÂB\x0013\x0015xA\x0003ý\x001aæÒç¨TæÒÏ\x0018|Ú@ÛðÓ]ø/íÕ\x001e\x0015ÅyÅ]Ö!¸a igx\x0006¢¸RSÀ"b\x0013!VI\x00009\x0001\x0001\x0010\x0011Geh\x0015\x0017­	
§­%*
\x0011b ,òX`\x0011\x0011%AÇQ\x001a(!¢±ÒC\x001b\x001fÕ;\x000fszg19íiÓ?öÌÝïî÷ûîÜßcìÇ Z~°ÇE¢jùåAc\x0001S[õ§\x0013\x001dí\x001bß4#`E\x000eõ«xQ ×"Ââ\x000c\x0012ÍP\x000cÌ\x0016¿|£4{ãoô×½Zß\x0018#.t¢\x000eÝH»&°Ie:¹\x0007õ\x0010â½âíÁ
oÁqb'q`íÝ¢~IÒå\x000eï(K·óà{÷\x0006DHr\x0000q\x0008fæÅD\x0007\x0006Æ´ýC\x0010÷@Ýñ\x0002T¤¶\x0012ÝýpÌ\x0016òm5ì~\x0007G\x001a¶+yÂ&\x0013:â)ãp?O³A;^càö×«0×¶\x0012é°\x0008~ÈµÁ*\x0003ßc.oª¸_\x0004fúßú(¹N<º.¼4HX\x001c±9sµÔ@ÔÔ~£©øÐ[ºBÚÂ\x0014­Oy/V V#
!×æ:°êªØzO(HÿÀÄo3¬¬Üi(\x0013c×\x0013SÂ\x000bDv\x0001c\x0008
4Åí;Q\x0012ÁkqÌ5ã£\x0010*\x00153\x0010úì¨sp|Rl\x0008EÄár\x001e$\x0003^ZúÄ#ÍI\x0017µ0_µæôu4ëÇN9Ó\x0012æVà\x0013\x001b\x000eï¤\x0010«\x00138U-8«¡:ÿ¼ÃØf\x0002Ç¨é\x0019úµBpB÷5îQsw_óa]F¹8t:¶fuùb¸»\x0011,Ð^¸\x0008]¾µ~
ë.\x0003?ÐÜÐR%q9KÐÄQQ\x000b\x0019SÚÚ¥Ó<-	ÅÎp-$ôïÚ»b\x00025v\x0012j\x000bB=6	u\x00025,\x0017É8c\x000c4ðê(8¡o£@5äòvWw´IAW¨õ))ú8ae\Ý@®\x0004\x0017é²wK
\x001dA\x001b\x0008O\x0013/"x\x0012k²@Ñi?P9!Z¢Kü`aù¤pªzÍÝ\x0012KÞÃQÓõ hTÃ¨/ÃJÐÞ\x0006k×2ºþ`±ôÀÛ»JDxùÃ¦Ìß'	QIÛ22¤ÌÌ­IáoF\x0010ë\x000eÝE¼Àz\x0008eê\x0000Ì$3jÂ\x0008\x0010/þúùRsdj,;{Ù\x0011\x001f¢<¬3M)kë\x0004ç^$\x0001\x0012*CÀØ¢»\x0017êZkÅ\x0014fa|Â\x000b¯E\x001eøc¼\x0018G¬¨Ýç¶|"Ây~eÜ\x0011as{WWK?J_lÔJÇ\x0013øJ\x0019\x0014E;ñ\x00080H÷TU·\x001e¯H}E$x$\x0015\x0003ê°=^JJÇÙ(X,3êÐLº±èü\x0005¾È\x0013Oú·\x000fÑVd#qA#õ\x0006Z¾hYÕ«º\x001e­ÚöÕ\x000cþfg\x001bXIr\x0005F®b&A·eCÞÎ<ì2óÎÁýù\x0005ÜÂòçÝö#q,ß\x0002ÖØe²ÅÏ<pæÚ\x001e¢î®4¶¶¯_aA
åþðä½³lÅMh÷s!Ñi1Iâñ¬Ø#+\x0013cS%när¤øoü;¶\x001bú~à>ê\x00087d©ß\x000bs \x000fæ 3`\x0012x\x001a\x0015?»\x0007\x000c,ö2 u\x0006
#;&\x0004¤¸!Ú{\x0002wLsøbÏ]Á 8ÚØ7pÞ¼\1Q\x0010²\x000c\x0019Bìuqç"ChdÊ#FtùØiÈ '9û\x0004rsã\x0010\x0017äOüôk6s#ÓøÌO2ú[[LÍ ì`ÙæÆï/}8z³ÐÂA\x000bUE7ÓwòlÂÎ
à§¯Ô+ø¹"KW³iî,Ì<Ù1*î\x0006oúg¿Ï\x000c±æ*ÿ¦ôx\x0019P\x0015V5`DV½\x001aÒQÀ>û\x0008Ôè\x0019C\x001b\x0002êÄWË\x0013+P\x0003ËÞ/©©7ë3Mbç-ª>"¤4Lpõû\x001bºOß\x001bëÅÓY¦miùLöæÄ¸¨CuÑâ
\x000f*²ï\x0013]À<°uÑÉ\x0001 ±E\x0006s\x0019Ç7×ì+®¸: ¼·t¿Î\x00166l=P%Áî» qF+w!? \x000erá2º+õ3d\x0001ìpnld_½m\x0007öÒÛ"cë\x000cü9SCó\x0011±¥ Ì+\x001bR££Ó«{D\x0018$Î\x0013Ê$\x0011uç²"\x001bZ¢ë\x0014s1¨áu4\x001fÐð²/-nô3Dö\x0000BÞ°àoYõÞ¶ô~""ôÅöô(\x000c\&\x0003\x00148Ð\?º\x001d\x00169ÓKð\x000b®î'p"³éEä\x0002Åõ\x0007ÁÇ\x0014q¥ÙÅ\x0016òªÞ³Ô\x0010$\x001by2Fÿ/&ZRN'ý\x0005ø]#ø:4&\x000b¡\x0002³Á~xÐ¾äy
%?\x0006|^A«°\x0006@\x0001\x0006!\x00135T¦aël!'»pÏf)ÉÒ×4ä6	76Þ« X6)Gaóä(U­¼G-G4ñ_Ây\x000b\x0002
<Û\x001fÉ¢v0þ$ëI_OÖ:¾\x0007È¢
\x0019\x0017H`H\x0010¡I\x0010þg$óä/lö»à\x0000>øoI6èùû\x0018ÅfÐðô
Â~Hª¯x\x001eµ\x0003éÅeðz\x0008vÃÄêÇì\x001c´ú)GoæèÛþkGoÿ÷®wð·hWð'³Â©é¦\x0006>úG¾,_ÁU0\x001b\x001fÇ¬\x000f©ô\x0007{¾?¶e3ÌÚr\x000cw¼M÷÷âûã?iï/\x0014±£ÿò`çÿeãÇÎú=z8\x0011Á8­»_k¸rÎ)\x0019gtÐ^<èÿ*î>\x0016\x001f r*BÜ\x0002k·ÿ0BÀµ	-ÿ°F\x001d¥ßªY5RFæ6¥&XbØ	5»O6î\x0001ï}4ñÂ\x0010î`\x0003.³@³÷Fs¹È\¤
¥vòUþ_\x0002\x000c\x00004\x0012ô
endstream
endobj
65 0 obj
<</Filter/FlateDecode/Length 4930/Subtype/Type1C>>stream
H|yP\x0014w\x0016Ç=3¿n¡9Æ\x001eqÀ1\x00113ÈaVS.#\x0008
Äcå\x0010\x000f4\x001e\x0010DG\x0012×Bc<2\x0006]¯ÄMbLÊdãzÅu
A¥TD\x000eg\x0006\x0001!º\x0012ñHÐìZ1¯7Iö7lí\x001f»[]Õ]ý{ï}ûó®æFE8\x001b<sNúY\x0011)eÅùËfæWTY#\x0013ËÊxfÅÄ)F\x0019¡ðwX5¸op!\x001dNRÿ8É\x000f^ñ3\x0001p!ðÓÐàþ "pßá#J­Åù%\x0015+Êó\x0017\x0017\x0014.(\¹¼$:zrteqÉò§GSWV%WU\x0014\x0015WÌIá¦Øèè1ûK¦ie\x0005K\x000b*L£LÉ\x0015\x0005\x0015\x0005©eË\x000bV5\x0015WVO²Z­c+«ÊË*òË«Æ..[\x0016QU^`zÑôJA!!\x001cyj\x0012®"½\x0011\x0010/\x0015ñS@_2NCâ\x0008DH¢7yY$¥,SJBV\x0013²]|DÈQBZ\x0008¹ª"íô\x0010ÒK¸M\x001aN3$©§©Ò(ÉaÕ"©ä
ÒÉ\x0019¸IÜ|n\x0003÷\x000e×ÊÝVª¦¨\x000e¨î«ç©\x0017j¨&L³@³GsRÓ¬é¡Ñt&ÝIïñÃø\x0015ü]A-ìòòò\x001aá5Ýë}oêmòÎö^ãý'ïZX\x001fÏußhß\x001aßVí4íkÚ\x000f´×~ëè·Ú¯E\x001c-n\x0012ÿê/ùÏò·ù\x001fóW\x0002b\x0002^
Ø\x0013p50<pEà¦Àc\x000fTAûútfÝaÝÏCJÜ¦K'ô¼Þ[ÿº~­~ÝPyõÁõ­^\x0019Y¯Æ<²yp{3ß#Á )n\x0003Å<÷4ÉµA\x0004·ÂjE+ý¸AÀ\x0004EKËfIðÔc\x0017ì_\x0005iv\x00015è°ò½®û°¾·C\x001a\x0005;oÇ4zÇ\x000f]\x0019t2?Ú-éîÃ0\x0000\x0008F bí:§Òíä.ö¨\x0001×Iß^=~©Ñ8ÿ\x001c½,)\x0004%3xCq\x0000Gà\x0003Rûù¥ù§ä3\x0017éÙF`\x0012\x0006ã(,6¾)`	Hø<LÅïl\x000e¥ÑÁõv)>=ê^=äò\x0005\x0006x\x000eò;\x0004X\x00060aì8;YÈïP\x0013,¥/ \x001a#eôS\x001ayqÍ\x00015vØìÑa"Ê\x0014\x0007º \x0006\x001cvtÀføÞáçÅ*s\x0003vüâÓ\x0005MÐâÀ\x0016Ø\x0001ÿp¸Ë}ÌîtBÙáî3\x0017'ÜEgkv\x0002¶á]hKàElÝ¿Ê5ÛÊ1»z\x0017Më..5ä®\x001aN¿äñèÑ\x000fÏ_3(\x001b\x0013Ü\x001bÈ¼¼ÔÌ¢\x0003gKä¬<:ûóKo¹6Ë×ú\x000bîH\x0007ö¸|\x0014ÌØ¿JiPÖÞ\x000e%¥KwºWßÁëº&\x0001º}h
\x000fK\x0015\x001fênb_¶\x0008XêöÅ\x0012ÅZX¤ú\x0019\x0017\x000b#L³Ciâ\x0015_w\x0013mvÍì®ãÝ*¥Na~æjrÓÁ:¨¤w«a°Zdð1°È¸S|\x0014!\x0002Ù\x0015cpüù b\x0004¤È[\x001d\x0012Jc@\x000b\x0016O_,\x000fÀ\x0017$¾A-ZdÖ\x000eK$ú¢$»X\x0015mvpxª\x000c×VÑ\x0006:\x001eß
\x001b`6¼-<º\x0017Ãe,â»Ü\x0004\x000e\x0008\x0016Ø3Ão	\x0011)iÈÉ"ÿ'£+ö4¡iþôÖ7ÿËØ~åÀÉ/å\x001bñ\x0014ßíP?!Núo°ñU©KseÓ?s³@3.+ZðZnWD´¡áÕUpºag\x0003liØ`
:u\x0005Æ7Ýh	Mº×ÏÃLøAêm¼þÈ¸]\x0018s}ÂÙñfy£0úR|¯\x000cç4gåL1n\x0012¦æÌ_ôå5yà8t¶Nßà\x0017\x0012VãÏ´%pêþ|\x001eÖ+Îà×þõ¿ô¶6Hó\x0008Û$Çá³u\x001eiù´,â#åÁc®ýºA):ö\x001d>þ¡/vä1a[þêò*/\x0011ç ìºÏ]êTC\x0013ÊÒgµ\x0014õ%\x0008\x0016\x0003X®±ç°>y9;Â0L7`ú=\x000cØ\x0018ù×H°u¨ÛY$Äöß0H7@z4al¿¼<Bð¸\x000e\x0014Ñb@K"{\x0006ó\x0000Ù\x001esmýêzôû'fäçB
ãÉõðäÀ{]ÜEØ­¾\x0008ïI°»\x000bwóÿiÓ÷?áÅÚj»rËÎ5tÃ\x00136ÙLF=\x00023\x0014zF²0\x001cFa\x0014FÑf\x0017\x000eà(·Ú%ÓTNÇ)Î\x0001Ú\x001f´3¢8K\2jMl;Û\x000c¶¬\x0018úNWF:a\x0019ï¦\x0002smNÅîà!=êzÅâÄN\x001e >|üEc¿¡F\x0000ÕKÝÈ¿0#Ï%[@ÛjÏ\x001ci	q^;)uIö\x0018#®ÂíT_íCa-Ó	½®\x001aî7ð5è,Þô%$ïÈ
6zÁ=<\x0019ê\x0005ü=ÚöäÑOxàºçÅ\x00187\x000bãÓ2â²ÿR/ÏÍ¢éuí\x001f;Ù
oV*­Â·«\x0015^ß\x000eãï7U*§óxß½fo\x0006N\x001ek%öûâO¸Q4Ú!×ÉÝ¹
o1·\x0019GðÀ}\x0008õp\x000c\x001fÝ¾y¥Õ(÷Â

Çø¯Â¾ºRúÁã{ëCn·fF1¨´ÔØY\x0007OåÉóÓiÎ¹k7CÄ7«¯³\x0015\x0016:¸.¸ÄO2å\x0001¦Ì\x001694¼\x0007iÂ¢Ù2Äom!à\x0015rþo+\x001c7¸LOdg<-\x0004_4c8®1²®\x000f&Í\x000b_Ù\x001c²õª\x00143ËyÜ¾ÒvûëË³¢ä-Btz\x0012§tÖ4\x001f'wAT\x0003¯¿ÉÃÇ®¡ô¢;r*Ü\x0014ÄÊu­ðÉ\x0015ØÙ\x001atª+£\x0013>êÈìÒ=\x0003ë$\x0018úð+ðaéÞÊlL<(ë\x0006\x001a?«=wãi\x001bÇt"EMÄdTÉÿ¢¼Ê£¢ºÎ¸á½±\x001d"ÏGRyÏ%î,V\x000bD\x0019\x0018\x0005dEpFTPP@°JeâIjXÚhÄ¸7©\x0015D'\x0015DE\x0001\x0001AU\x0019`]Û\x0001-±j¢ßsÇszg0­isº3Íýîw÷{¿ßïûî\x0001Ê«Z~+£ISå¡Ë\x001d\x000fPÈö[/pÀñÂ{6Ò°\x001eÈÐ|³·¯Y!Ã¤aÞ8\x0018Ý³q
o1âµÁÎ¦;wº"¼,káa8\ -lPC§HÕ\x000bÍ¸\x0003\x001cifÖo)¸\x001aÃo\x000b%¶ª\x001a~­caÉw0\x001b²,<Ü\x0017]Ã]Û®(\x0008d\x0011½x.ÎN!vÔ\x0003~fl.i)áÇÁ5A\x0014[\x0000§e¡­ð£õ=÷Go­ZÏt]ë+ó\x000cºt\x000fÄ:a\x0019óà©+iÎµ±êèß\x0016>~Éü&ë0ÃÎwAÕ¤&ZÝyp'a\x0015:O< Q\x0018\x0012ã_k;Aíúòfâe®,>èk/\x0016e=ÈÌ@\x0005¸Sß«\x0015K0z·à\x0008DrôL­0 \x0015©{á\x0012fI1þ SG\x0007À\x0006Ã\x001f7¡Yu\x001cz§:år+Î×¢ª\x0019lmøM«l&êC\x0002Î{²ÈÎÝk\x0016Î5¿I\x000es¢8 cþ\x0010îx
X§Xþ~hq}8·)ð7\x000c¦<`%i\x0013ô}¸Öûp\x0007~\x00136t\x0013WÜÉÐ\x001c¢Þ\x001eø\x001e/\x000e`¦.zòW\x0008à\x0005©9B¿ð÷Þ\x00080À;°Fj\x000e¢Ðª'`\x0001'ÑN7E)EÅN\x000c×>c´$\x001c5E\x0011ï(Þ<â1Â\x0003;V rh4Å5îuï!\x0007\x0006\x000e6"?S\x001cø5¢¯­Â^­¸Ö²cÒ¡uà÷2\x000eùÀéß\x0008|}©\x001eëè\x001aÏ`új¯Ö\x0014ñô'Þ:¸Gµî­N¾È]JÎ\x000bf\x0014{Ó¢ùsaÄ+§Uì_jbó)ÔWÛâOF²Z¹v\x0006î4tÍ{aw¹Ó-LHt\x00063¿£êúpmyÖ§Å\ å\x001d\x0014áu\x001cÎÔ$¥\x000b	\x001a{£\x001e\x001at%te2Ï\x000fÿ\x0007
|æÎô+Â\x00129¨QôG/\x0013ôã\x0014]\x0019qIµaý­ñðî\x0007%PÒ;p{°Kh·N[ãëÁI\2:\x0004ç\x000eQ\x00156Ö\x000bø\x001eªK\x0015×ø­ÕDÒ\x0007Ûw)XwÙ\x0000Øá®\x0006?ï¾}·¾dgJ\x0011w½(ßPäÃ"9xns³LpnÑ$xû5ÕFhÔc'3ÛªÚ[yú£yzS\x000cÕRMIò¿bgÎqF>|&\x0006|º<çþ¤a<ý{°ÛbiMë0\x000cßîYì¸,
ÙIW`ë2Ôàß\x0008\x0001í¢*\x0003\Ô¡0é¯/¬¾ÁÇU\x0011;vlM`=V©Êæá\x0019yèdÎ©ãàº\x0002lÐÛHâQºãv<¾\x00034Ü@Åèx³®\x001d¹á9ÿ(/A_àYms;ÌR\x001e\x001bÄñÄµ\x0019Øv4½ìøæ¢*?oÿïÏrjê2ýÈNvKÒ¾´4~÷®Oâ¢\x001c7\x0006\x0005«)ÉaäÔ\x000eS5H©|uñqÈGNñV~i)_R_§s¤\x0004Ì¢Ç\x001b\x0012×WãëÏsC®øË#×ÇîÏëj¯pÞÔìµò\x0005¡ag.Fs©áÄöÖÎ½Ýìa8Æx\x0006h°x4ÙÑy{°Ï\x000fÙ`óCâ«½8IÊYK¹E\x0013Gõb£\x001eºÉû-½½\x0015rg\x000eá\x001fR09È0sÅ¦-òT\x000e®É(	Þ§\x0004zÄ¾wÐ[O?é5Ù2#^$=väåfF/äÉ°\x0004î¢Åm`ê·Fõ¿}ù\x0002¿!\x0006Êªy¡\f.¡6)wÇg}zèL.¢\x001c8õÕç¹,>B4¨\x0017\x000f:X>8\x001eSO[1âÚ`<\x0019ß´éôÐ\x0004Ö{u­Ýºr\x0005ÆÚ£\x0007\x001dõ°¡¾KW¾ÁÉ
}\x000c.°{®×ÆXE2×´;úêjVº56:§kñ=R^ËzTO÷ý·ËÓ#x×¾\x000cà¢Ád\x0007­ÁJ"pü\x0016?tøc\x00148-\x0004
9"Ç\x0005È\x00169Y\x0006a§qD#wHÃ¸ùÝÉ\x0016\x0019ØjîÞï^&[øD­q_9t¡\x0011¼\x0002Å9nD\x000b\x0019=ä\x0013\x0002ü	ÒCQ 4'üC3¯\x001ez%Ï\x001f¥Å.a%?I\x000fÜe\x000bñÎ\x001fKÊ*(«ê8ä\x001có\x001fe>ÄU\ßÿ;\x000bpZk)á!\x0012\x001cû»Æ¹#ýä²#ÁëS|mé\x0012 påÐ¬vÁµM¤êÈn1$g1\x000f{Æ0-\x0007B¯üò*·ª0¦ \x0002·²Ë\x0017\x001bª*©¥Üå\x0006¢8ví¹0ÖÙ/b\x0019î\x0008\x001d\x001f\x000cïàºS¯§mÆý :>9B®((æ¶¯'66hw«ñÜ¾+»C­\x0016c}+³ÂóÇ¿<Ç·QYéÊÏlÌù
<ôÁt5\x000eN2ä\x0014\x001cÔîSÎ;X\x0006VßÉSÚwZÉP	Lÿëª\x000bØwYHtØiÜÖy{ÇªÆ80ÊÐ#</¨}sðÜt¡@)*\x0012"Å¶Ñ°N( ¼I4ß,Es\x0005©õI\x0016²\x001fÞp³ÄUÚ¼h\x0005DYC§\x0008\x000báMóBBCÒ\x0017À\x0005ïó%­Ù ÿ¦\x0008Kµ$b^JÐ\x0012ÜqNÉj«üD\x0004_1H<Æ\x0004\x000ft\x0002IÑ\x0019b\x0004\x0016?+XL\x000cÈ\x0017Î'\x001cÃã\x0019"D"gðB)*\x0014äbÈ\x001deà\x0017a9\x0008Øµ{Ï6v×\x0013_*ù=¡ÄÇEÙÅlwe	L*á!DøXIJ\x0016ä´	3ÛDÂTq¥ðV\x001b*#¡\p!nÉ\x0010(¢P¹ÙÈÊÕ¢ëÂ\±ðn9£*Dv\x0010\x001f!òB´\x0018%\x0012ÙT,Jbê
Ñ[ÿò·äã	û4¢PÛ?6@ÚÐJ\x0003ýè6JÒ\x0003\x0015Ôÿà¤PgÞÌ\x0018<_\x001eßÿ\x0019\x001añ$HmufPþßæ<ÒàKJ¤«\x00175	vøñË\x0008vz³\x001dvºwa\x000f\x0010C¦\x0018R`\x000f£©S\x0019°ÌµÁQ
\x001f,rß:y\x00077QÂ<1¨Ê\x0019p$â\x0004þ.½ï\x0019á¹ß\x0005~û\x0003{¯~¬¿UrE¿ëBdt¿g!dø¾·­þé
¶ú§÷å¿ÞÀ$õ°á\x000c°ÉñÝ
\\x001a\x0003Õj"\x000f¾/o\x0010}xéÀ­õò\x001b®F>¾¹åî=*.©8PÚÂõÔw\x000eX\x00157k¢Ôw\x0003ï¬¿E­=¢¬2än¥»í3\x0005VÊj â\x000bT)ë¾ÿÍö]Tî{
¬¾».ý`7¨¾û3áw¨¡;¬H;ýèùÓó°"ÍËØ\x0000X,ØÿPÚû=e/ãÑCßí\x000f1ú¡$zíìGÀNì#Ï3\x000e\x000e^^&ÀN¬É\x0019¯kr{Y¢Òw\x001c\x00016Y®ß±gïú¸@`Ý\x0014\x001e\x0017)Ç÷\x0015Ø2õ9ÿýûîr¡5?¾\x0008ßX#víüw\x001fÖïçÙÎÿöa½Íö{þÏ\x0010VG6­?\x0011ÀJå»ä÷ïß%~gUû1IÔà;¿Sæ\x0017#ÖjmõÿØ zÍô»c\x0006+Á¬²\x001fÙ\x0006RÕo%ÑÃßÅ/õí]³a«$©­$ùëêßJåÜX13Õ?\x001e\x0002-üòÅq\x001dkòß
*6mà6\x001dû.\x0006³LæÇ#Ñ#lç.sc=Æ¦û]Õm×ß|ZXJÖÚo³ï\x0007\x0011\x0003©ÐÁÔé:[\x0005ô\x001cåõ<¬yü]\x000cZÍìù.\x000f64ËúÿæÂª\x001axÕ³\x0007{Õó§ï\x0012rùÖ}äòíÊ\x001fP«
¬C\x001a¨céê\x0003ó`:*Jû\x000b :
\x000bkáÍÕß'ùþøñmo<ÿÝëØwÆcßÏ3~g»Îüãì¢'c·éKÿ\x00162Tý­-o\x0011p­³²«¢Bª½ª§¦§FÎ)\x0000X5é¬|¡ù]TúÉÑ]gwËGnc
OKL÷6\x0005µRä¿\x001dû]ÏÖ5«{Î\x001c©	ìs»çõÎû^wìw1Ûç¥'.Ý>»9'|£<_Ã´\x001fs§~·\x00064­ý\x000c×eî}\x000bxx¿×ü8#
\x0010`\x0000}´/Ð
endstream
endobj
66 0 obj
<</Filter/FlateDecode/Length 5009/Subtype/Type1C>>stream
H|T}PT×\x0015¿owß{\x000b.O`÷,ÍÛ­
\x0002"\x0010 FPß\x0010\x0010A\x00080 \x0008\x000b0®Ôø±\x0012­1ÕV\x001b\x001dë·¨¨(*\x0018ø\x001fMAhRQA+Zü^8\x000fÎ:Ó»¤N;Óþsï{Ïùß9ç\x001fCT
Â0çÔäô¨Ô±QÅeæì¢ÙÙ¥¥Åqq¦Ü¥Eög\x001fÙÀÈî*Ù¨\x00111
¿\x001e¬\x001f,b? 1©{ c8\x001ct\x0013.'~åäJ8Q9éFd/ÎËÊ+3\x0017,^RcZº¸ (hJÐ¥¥ÅÓKÊK\x000bòÍeFi¾Æà  \x000fýíë\x0004ct±)¯ÐTjô6Î,5ÆÅ\x0014/6-	0ËÊJÂ\x0003\x0003-\x0016K@YyIq~iv¹< §¸(pfÒgå%&c¨1×G\x0008CF²ÄWAÆ±ôH88)*H8!S\x001dH\x00131\x0013²"\x0011²ZBê\x0008¹MÈ\x001d\x0005i%ä>!\x000f	³AÉ(§°ÑY,I¡u!1d5yÃÌ`625Ì\x000fÌ;V\x0011«ÈQ|£¸¡ôV.RÞW>Pm`ýØxv\x0013{\x001dà>àB¹hn7×È+ù$~\x0003ß¥NV:ð\x000e+\x001cv;Üqxãå¸Ú±Á±giØ%£&Gó\x0013qZáTët_ð\x0016Â?\x0008­ÃG
_;ü³só)ç×.î..;]~v±ºú»îp}¤Õhc´«µuº)º?¼ø¹øÌmªÛ6wµû0wû¦0Ìh\x001c\x001cÑÈT5Ê£\x001b¡+\x0007?·Ur­i"\x000cr\x0018eÓ³a\x0016\x0007Öñ0Ù¦aa¹¬\x0011ß­ãq²¬aãE\x0018²\x0018ä'{AØ\x001b9ÚÂì\x001fàûÝÀ»\x0006a,\x001cà®!Ý8Ü>ð\x0019*.¢½\x0013/ñ\x0004+©z\x000b\x0019Ï!å­k;p°	Ô\x001fZkmwí\x001cø¾ü+\x000c7üTÿÉ!I+7\x001fl¼ðP¿¿¸¢¶°ZªÍÝ\x001bé[8°á\1&½ RB'H\x0001\x001dw÷\AAk=MâF>6Í<QBoÈ_sÝ
¦Ù\x0006¡¦\x0002ü%\x0010¦\x00114J\x0018¨\x0010{[OÞºaºÇfge\x0015F{¢bÂ\x000bð§qÁ·ó%(nÕ\x0017ÎJ?>`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2020/11/IAS41_SNUEngagement.pdf](https://injep.fr/wp-content/uploads/2020/11/IAS41_SNUEngagement.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=åjs)\x0007\x0005µ¹è*Q\x0017¤Yºæ'8¢y\x0010\x000e\x001bâÀ&êrÊRcV%\x000c\x0019\x001c\x0004sRaÑù©ÿ8wªCßíËZF,\x0015vÏ\x0016ù .@\x000eP­Ïíâb»Ã8à\x001apîéO\x001aùû\x00157Î"ðZÌÏ®Jq\x000cHi\x000c\x000fø¤EG³Ï\x000cP÷T1lñÓI Mb0]Dcd¢H\x001dÂü\x0012gDKÎh ~Uë&xì Ö°\x000c\x000cä©£¶?[ËÎSG"\x0000ó-2@\x001eP8\x0011S\x0006ÌÅ»ª\x001b&§dýA³\x0007ùÇ\x001aÀdk`ûRNßI7>°|¼ûã7å ¯
\x000184Îr\x0005®­\x0014$:êÚN)ð\x0018\x001e|z^BQÐlÉßI*\x0011N1æÓ~*±¹#iWÚwoÏê½V]WyùxÂò-g\x0006\x000eÚUæ4\x001eÕç\x001a¶Æ®9ôÓ3Ài 
ä\x0016@Z(&Ñþ«JÑÈu\x001c\x0004y2OEþ<çønàÉÔçÏ×
\x0007µkJ*\x001fJÈ$\x0010¶^\x0012|\x0002\x0015¦\x000b¼9­0\x001a\x0014G\x0008Tíû\x0016è½\x00027´:\x001d·ô\x0005¼ïm9¢Ù§ò©j+',HÜBî°Ã`{YªaËvõ8³Jñ\x0013V!¼!:1FÙòù®Æ©Fùf\x001aIë²þØ(ßeûf\x00128'UÜ\x001aÒH=¹±ÔC6\x000b[7Êä×I´,Ó3·A'$\x00152Öí\x001c\x0006$ÏÕ³;
t\x0012w8õ\x001a|~c÷\x0007\x000f×\x0010PX\x001dÊãXW2ï\x0016WUmL
5á/Ti2ç%Ò­l»â//õ«Û;\x001aÕòh/·2á³RHÕ¶/,\x0010^¦\x0013jGÐµ:_7Â;Po
b¬ÝslE°â'\x0003©ÿ\x0002Fó\x0000>=Tà{<Ê×Ô\x0003Ö}sNÌ\x0005ÞÙ-¯°kµ³*[õ
\x001a\x001eb\x0014t\x0003>úq¨¬L\x0005t\x0017îÂ¡øÉ[õôJ\x0015H¾¤Ð\x0006n&v\x0018T¹\x0017ãÏ¿^%\x0000q#ÓÂ\0a`¢y\x001ea\x0013n¾äµH(KgiÂo{¾ 2¬øWÉÔüJæ|?÷	õ\x0004³X;¥¼\x0013~õh'¼r\x0015¾µ£¬\x00132ó=Ø<\x0003X)¡QS@å\x0003Ý$k-Ñ®ÜEù87­Á^[e¨\=À\x001a\x0003;ªÌß\x001dù»Vp\x0002Ç%\x001a\x0017º\x0004å\x0012ãì@»tnõÂ×I¶×]\x0002yü\x0002´vPÖÍØ
v¢\x001e\x00045wÛ\x0015K3G\x0013¤wÏ Wo\x0000m<äÍÍfÀ~K\x001d\x000bg\x0017W×ú'M\x0004Äw\x0004µ\ü?µ¼(`\x0018<âbfë¡\x001aîvÔëª\x0011@:AÅe\x0004Q¨8ÆÑ\x0003DGw(ÌõR\x0017²òÙÆYçC¥â:RÔWA8}Ób\x0013õW,0¡\x0004ê\x0013ßpÚ\x0016£Zî\x001aÊ±À5l\x0016º÷C\x0004ÍÆéOC3Ê(\x001dxØ\x0015
è(\x001a!Y*yþÚltÞnAiª\x0005½Â¹\x000f5×\x0000óZ>«\x0016¦a:ÿ}ßam¬6OÎ7g§
¥¥<¶¤ÕÃ6÷"ÜæªrHh\x0010Z~(\x0013\x000f}{¨«#»7 ðÍó ÏO÷öüäL\x0006\x0018\x0001Ð2ó|9\x0012nwÍô_Ò«¥Çm#	ßçWð\x0012`\x0008ÈÍ§\x0004\x0001ï\x0002\x000bÛ¹¬8

THqàüû­W¿(j2\x000föHT³»ªºê{|\x0001Æ8\x000f@ôO\x0018GQàæß\x0019\x0006 p©½8"p+$+\x001bÈõØÜ°}¬X\x0018\x0000ùýÀL÷\x000fÈã©\x001d;¼"V\x0005þ¤îR#`(Ó]¤Bä\x0015º.:· êµNüSÆÅf5×·\x0008µJi24[\x001f£¿ßÎÇ\x000e*1â\x001aìxí±\x0015#?å[ÍllIï >\x001b\x0001
û¨\x001fN_D°¹éá(vàÄ~\x000e÷UÆå+Â¢!ëæ@c8_0lV\x000epppóTy\x001bæâRU©W\x001c\x0012I\x0013$ä§ÌDàT0Jô-`\x0011ÜfL~ã\x0019±\x0001	÷8\x001d\x0017Ï~kZ³óÒ\x0007Âü\x0005\x0004'À«\x0010w\x0010°Æy'\x001dEÈÈU8D\øÕ6{aW\x0012veÃ¯§k-\x0004´è	IShJ}æN\x0011xX;Á3ÑLBC~ê£Ã\x0018D°·W\x0004\x0003«\'0:N!ä\x000fÆ"43AÆ¦úF¨%a	í+vÒ@Ð·\x0010Ú»uv}(ö\x000c:/j \x0019÷	1\x0019_\x0017DXjê\x000csy\x001b\x001dñW¿ýìò2ãV®)N¬Õ×\x0001°y&bø\x0013âíl¢\x0002
<ÒwbC¸÷í\x0014ñYHY(S\x0003\x0010¸\x001f7×Þ¹\x0003Wû+¾·ë¢kFÓly\x0013jÍ"à
Àtí\x0013@\x0005á\x0003 è\x001e«ôD\x001e±i6¦t¤XÚ¦¾UÿÝ<²t(Y:DFãÑ¸û¿\x0019Mï£Ìªv)ûSVÆÄÉ!Ä[òùó#J\x000e\x0016\x0013¼\x0002\x000fWéÁ\x0015ñ\x0001~f¥\x000eÈ	.ÉÓF»\x0007@\x0013¼/È²\x001a\x0019D¯(ÎfÕ+²EúBNSwÛ"ÒlQ\x0013`úé\x0003Î¯ áÚë\x0017|a\x0005	 yqÚÞ<ÕÃ)x«s>"§xqï\x0019	v¾
aù\x000f\x0014\x0014nvF\x0008¿BYSYêL\x0018d\x0013´õJã5\x0008»\x0017\x0018\x0006¸	+ý
%N\x001bc\x0007æè=*ËÆ&\x000cÝ\x000cØ£§ïRà)¡Cýøðóo\x001f¶Ñazø+Rpò\x0016þÏ¶:É,Ê\x001cX\\x0012Ý\x001eð§ÓRÐ?
%þñáÃÃ×^J«rùR\x0006\x0014Ê¾ô/:Tá¡?TàÛ\x001f\x001ejÚ¨öN×U)Üò	Êð@\x0000\x0012Tx8É\x000b~¦6ÞBÆP3Âp¨òª&.çí8\x0008uZ²#ßÎ8\x0004 º@:«àix\x0015Ç\x001bX)\x0003\x0018iR\x0014%oø\x001eùÄë9\x0006ÔÌ¶Íqáe­ÄNìG5}\x00124Ötõjf_5MÝôá;ÇÀÝÎfþñ`£­`\x0002ö\x0016äü1ÔBV
\x0014þµ+
\x0006êk\x0010îè¦¬àvLrAÓÉ¼{µèL\x001eT ¼JKöýµn_ôi±ém$»\x000fA!Á1áÇ·±\x000eTkjàíJ\x001d<æÕ\x001d®B%T7uiMzDE[C=!³\x0019\x001c²ðâ
k\x0010\x0004\x0012üJÌ\x0019L¤C[ÓIp¸\x0007¸ä3æøda\x00014¿^½îT²­sÎÎK\x0019ÄÎmÎ!\x001e\x000bt=SdæI0\x0018ÿØ@W`\x001f¶Ño1gáÒh\x000ez#¢ Üt_x&ßµ§Ê¼\x0002§FÐ\x0016¦ÂZ« Ä5¿W|GUQ®8Ó~!ÂDB{/RBg[yÒò\x0013Iø¤ð¦mK+(gJæM\áÆ ¯\x0008 ¯\x0008ð«XVL\x0006Ð\x0007À"\x0004À
Ò mKÊlßEEÍÄÃ¡_ñ\x0003õ\x0016¶\x0000c8µ`9\x001cÖ\x000bä\x000e\x0017¹A½Lì³r¥+"å<Î\x001d\x000bÜkÚ\x000e=\x000fÇL$>ÌòøÐÞVßÆÓV+\x0010¼ [ 0öIôîê»7J\x0015òÎ\x0012Ñ\x0015ôdx!yø÷%ß\x0005IÁå$¿6 @\x0005å>¹êlÂ\x001fHç§âlýQão\x0013b¶õ\x000b>·\x0015F^Åú¡~ßñ'VMò\ÈüâòÜö{Bôvlå\x0017Jd¾ä\x0000à2@n&o"çÔr~×ì)=ürjm¹­CÀhQÑ·îÝDÁ\x0011lW©\x001fÏ¶²ñ¬T
-É5Ç\x000cÊ2¿v×/wîaÝ\x001c¿	®·4fnå0\x0003Ä³á>ÀÆÓ\x0017\x000f\x00162Ç¸ß¬öµ°"2Ø\x0011ñ(TÞKÞr0\x001e°W\x0008à\x0006bg/+ë]sZA_¦áÁ\x001c£Éôªr\x001c¤)ø0\x001f©ÖÖ=^dxÎ¿9¤w\x000cZ¿:<ò÷òÕ &uö:Þü\x001c\x000b\x001c·NV\x0016¡<2`]\Y\x001a]Zxp:Î1½\x0008ÁëÜ;¡[(ÓÇªô8Ñ¶={Vá*Äî\x0006´X	ð\x000b»ìØª²I\x001aú(~£\x0004Æúó£Ê^]Z¯?±\x0015Ýª\x0017\x0010è=@kIp¦ðïô×l B$º \x0011GíHeÅW\x000eìs\x0016Ä:\x001a\C\x0006\x0016UbÜpoµ6£Uº\x0002PøJkNíNöã\x0014¡éDo\x0019ô½M!\x0012\x0017ä\x000f\x000f\x001cZ\x0018`(W¿CåD\x0006ÅßÀÛLöZTê\x001cá\x0008Ñ\x0018\x0003&\x001dÆS$ $\x0016\x0004îöõ´2Ì¯Óy\x0000ä@¤â5'Ñ¯}ÔR;Ôø\x001d\x0016þ\6P\x0019@ïõãåËo(Våô÷ÞÜU-wµFÈD !^¿á}üàMö)]ð`ÒlI°)_\x0010cu\x0017ð'¾×÷s\x0017}Ns}Wj\x0000Ú@"È\x0014!íë0\x001bErÏ¶ 
A\x0016È®ÓR£Qò¹<[Ì´*À\x0005F\x00024Oü¦$@º/·ÿ=NÃL\x0017U\x001fâN¸o'Ìa#ñÂ¯9~\x00022»kÓ~8Ás3>A£#Âtw]\x0014gH ¿´±ïD´°Z£1xp:êý¨z½\x001bñÏª®W&«°(X8\x0014,Ì(6¶ Xt\x0016JÄ,\x0000è7¼}\x000089Ýéì¦N\x0006\x000c¹boD=<hÎnM¿·\x001fBSn,\x0003vvfn
smÔÿ|\x001e»\x0011÷ê©U)\x0016\x0016¦»?	þüÀ`+]Ü\x001cìôîÁ®ó"\x0018lÈÎë\x0018j}{¬àg£{¾'¿\x0014H'[<yfbä(¬ Ê:Éa\x001dâkÏ\x00058Kÿá\ª\x0005íHf"ð7½ªDâ	²&ú²[þÒ§èÜR\x0016ÖZ\x0007Ca¯n\x00048c[.Ìrô}ÎT
Ú·ÇÖ&¸ÛâãÞ\x0010¡*\x0011òI\x0013\x000cÐ»í\x001cÉPÝêe"ÈÔ
}»Ñiîy\x0012!\x0016ë@í\x0008àîÒµ<§sßF\x001chw6¶â}:z\x001fg$\x001c\x001eÌ\x0012EäGQÚ(P3Eh\x000bà\x001fOèB\x001bÙQ_ÑF\x000c/¬r/½tédì§õ@SÔ\x001ay-ªéØP ðù ?±jÊ­lp~kºu#kú5 Éf*´¤«`LÑm@ÄbdûèªR/\x0019ÕÓÐõè>g£\x000c­ê\x0003ÙÇºFpz\x001be1\x0007<U÷ÀT\x000e¦,¯Ði
çIOO|¡TÁ\x0016÷ò¡txO	Ó6ø±A/×\x0007Ì¤[\x0005IXÜ«¸Ô\x0007#\x001cÌìn\x0014ýÃO£eã×F·[£cUáÏ÷éfhFÇî\x0004\Ê?pIù5QÄEïDÎ:¹\x0016F\x000f>?.\x000cKé=u§,díD-ðQý± O\x001e¶Òñ\x0019çñ©©T9j\x001d\x0005»b@ÂÇáËÔÏX~ o\x000cë¾é \x0001\x0010+R7ÃxLÕü
µ=\x000c\x001e\x0018\x001fµåU'\x0003ÔóâÈ\x0006vÂÍxoÚ³¸6
\x000fÜâ\x0018iËCÓwÓ©¾T¤\x001a\x0008y3ê@H~¸ã2\x0000¸ÈÝsGJD8rÔæaú\x000b|JQ|arý2«\x0014W R\x000b±£ªÒ+;G\x001fþóg\x001b\x0003 Æ07®Ä2­ìæc\x0007ß¶LâEi]á{Ñm\x0011HÌÃ\x0010-Æ3ÙÀÑ\x0017\x001eE$±3ÈÉ\x0006Á´$\x0015Ù¡\x0000Å]Û1.|àY:ÈEr-é\x0012C\x0016¡hÀV¾ñÚ'FSÞ·Ü\x0013îGÓkÃÛð\x0006c¬Ü³oc±q-f&\x0011\x0019ÍYBº\x00002Í\x0001)»ÆnEª\x0019Îçaêp\x0017ïj9\x0008ÿ\x0018R 	är>ÎÒc©´¹ÑñQBfÊºìÈTZaá$\x0016õ\x000c*\x0011\x0010tj;\x001e8°M\x0012½³LÂ\x001b·£¡áÀm?Ícd|\x0003Ä\x000f(ÁoÖNM¯\x0015+\x0002&ãCÒ»9Ñµ^¡Çt\x001eÉ%×!õ¡\x0002ÒFIXá"K°øZ02uèÊøôðbq*\x001d3ÑUÐ¥Y\x0006Ãþ^¶»ii\x0013×¾àÍ}Å\x001bVM#ÎæwÖ¬ôj¶\x001c(ì(ê¾8ÓØÖÓÐ]¸3Q*Â8Æ:÷¯ÖÔ¤Ô¦&¥_Çô\x001ei\x0001¯ç^$ÖaüÿÆ;¿\x0004;\x0015Þ\x0019h\x0003N¸?ÄÿÓ^-½#Gø®_Ñ\x0000\x0016°¦ûý¸f0\x0018l,²°÷ÉAãÑØ
$Ù#E»I~}¾ªî¦HZ¦iy\x000c\x0003²(ÝUÕUßÃÑO\x0015\x0015ò{sË¯Ñ|êtÂZ\x0004Wpýý\x00078¼qûM|Ân\x0000á~ÛÄÅ?\x001bña\x000f¼¢\x0011êÄ\x0001vY0\x000b$°àÜÈÎæV\x0015àñé9?%GC\x001d^ú¥ \x0008!Sz])Ý\x0011\x0005]¯Û\x001a¡\x0000´e\x0016ß/éÍjî0<Y´cUìÁ¡|Ù/\x000fëBJÛ\x0007h74é*L°Z/\x0011@G0wd<\x0012çÌKjbR\x001dy\x0002Á»
sd\x0016-óîp(×\x0007¼Tg8?s8:\x0001ÍÙSÞÞ3n£\x0019ÿW~Y·góø°y\5Ý\x0006çû:)¥2ÃÝ³\x001eãÍÖm?´ ¥ØßngW®¥¸Ûó\x0011Ç1C\x0012øga\x0000U
"¤ÔX\x0003{q³!ùs]eµ\x0014Ûöp\x0017k¢w\x0004[ûåZ|¾ hZú<çÝ?Þ`·äp\x000cÑÓgÒ1Çb,Rñ¼¥\x0016\x0006\x0002CCîi\x000fÛCÚ-g¤\x000b}î\x000eô©K\x0012ò\x00025É'áà,Ñt
§\x000bÈä\x0017ÿ=9¥´¢¤¯nnd+8M«C¸\x0002:W@\x0010\x001a\x001c­©£	ÝÌ.îv\x0015mè\x0018nf6B%¦6\x0000L\x000f¡\x0017\x0000"Ä¨ã$$Å\x001fðÙ+ÿw¡ò~\x0014<\x0004§\x0013F¢2\x0006ÁÜn8tú¼´8ÛõLã¬Âà?àR±Â Ý4®îg\x0006øÝÌ¨Ñ½©oÖ+`ut\x001fÕM\x0004\x0014Ó»¾	X\x0005+âsS®Ê»\x0011\x0017©÷ø-ZgJ#ÉM½ÌO:\ÄÁ\x0005p\x0014Ø¾Æ!XzÏ¹¼Ð·Ù¯ºxßh\x0014\x000cµhÄ¶.;²\x001bD
\x0010;è ,â
­y\x0012®\x001d¡E1ð\x0012=G9ÊÀ%0
rÇc6ÆÎu\x0004ó¤Îó¶¡Ö?®Zäk*a¤õlT¸Æ\x0011\x0019ò5üçÚ®ëéêÈ¨\x0011µ\x0002IIçû+£\x0019\x0010¤kÀö,°þµ<lÙÚdcGRë°{êÆd\x0008Gµ¹NÜ°C\x0000`îÙ\x001d\x0012B.f\x0003c³Tª9Í¿\x000bVÛ|§ØËuëÝtNÎSá/%\x0019\x000cG25\x0017\x0003*^f]sÈNp	b\x0008ç2\x0002W¡êT±còèH²\x0014q1GhL\x0018Y¹MÌ\x000fÈX,r©þöó'ªï~_®¶¢\x0015ìÚ\x001cù¦£dy²îá°Ä³ÚBÊëTÚ¥X3Ñ[D³QËyÑêrt[5s+/Bü*	ÝYÒ\x001d«dQª\x0001ekÂR­\x0012þ7Å\x0014Q/ÛÒ"\x001fî\x0017Ç|"¿ÔKÏòëA\x0000Ú'T·Î5E¿r÷Å'Ý¥ºl»OîÓÃîC]Ð{Mkh[ô&UõIMçz×+´EÙÍmÖ!?ÿò\x0017\x0008Á¶UîæË¢}þ\x0010d&â¦Y\x001fZæãXÇª¢Üï\x000e»¾úáj½;\x0012Ëí÷C[ò\x0012<\x001aþMñ¼dT\x0006\x00154µ%\x0013\x0015Ì)\x000c§k©ÚbùOóK\x0012Z\x001dÂ'Õ±_V!Ò
f\x0008i@É\x0004ø¢\$¿	F·ñ6V0 v~2Lù`I á c®\x0016\x0005«¢þ©³â	©»\x000fã<\x001eÖ\ê¬¹¯èîÛ¯Ød¹[-kó¤Ð{ï·-fýß¹ÅâaÇhx·Ø®öÐúuò¹\x0017Xzó\x0001Öp½²µ`àò)=Ü®}ðùâþ!G/n×/bÿø°#w©	y³N2c*³î\x0018Xëg\x0017_Öåô ØöA\x0007\x0014Á3EÆeÜ$¦Ó8\x0003"\x0006SÖPtü¯ÈÍ
ïVh²Åjû*RlM15\x0004\x0004¥)s£åÀNA$\x0001ìÄÐo\x000fkf\x0002*ùZ<\x001cª ¥·ûåênÛ>\x0013uHìWgY#_¯[ÀYý¾\x001a\x0016\x0003ÝÈ}Ù©.sÃZÐQÔRl\x0008²®2Â?.v%éM\x000b©¸£§\x0007îÈçäR@?ä0K%¨\x0010½\x0003ÇöX!ñ3\x0001\x0011Ò3\x001fñæËÅ%\x0012²\x0000qêXÊºU×o£ßR]Ä¹zB\x0005¡å¦r\x000cD\x0004|n©ñ.U\x001emgíëòðS°H¥n:8nrèò\x000cûtñ'ú\x000cc9\x0014ýURU\x0002\x0017ö-ËÄXÇÅ¿)T;-¾e\x0019/ë2J¿N\x001f¤ÿ@W]!õªN·Ö"\x000b¡Õ·n\x000f­\x0000\x0005Ù^\x000e\x0004¦ðåeðf\x0007V=Ô¬\x0015Wë£râíaëÑ\x001cZ%\x001dPV0\x000fÐ©*$Ø2 8FÍ¶f¯ãp©UÕS:"\x001fa0ÅÄFÊF¦\x0017ç\x0016÷ùÀurZhÿÁ\x000bð YÞg\x0003\x001eÄ	Ð
:bÄtÄ¨\x0019\x0013²êÇÇi¤o\x000cñ3ì+\x0000ÉBöá\x000c§©A²\x0016v\x0012þ+C\x0003ÂÔé=ÂÔ\x001e\x0011õP\x0012æË
E¦éq\x001arð\x001fZ\x001a2m\x0003Uá=\x00025¶±*	\x0002ìfÄÿ&ê4=PÔßa<TBÑNç@õ»\x0004J\x0007\x000f\x0016a8°BE¥\x001ehj\0x=D\x001cHéP¨£w\x0008\x0014³*QB\x0015À@.Ò0jzE­F|\x0006ùy×D)Ð÷xS\x0001²
 ÂÔÓë0­ÅóÊá=\x0007Àx¿0©A\x0011\x0006FÝE+\x0012ý(bì îñÖUhiÃ}\x0017|L\x0016U\x0005J\x0000(úpq\x001cø#»\x0011ôs<A\x0001\x001ay[j\x0008`b!I e§ÆCV]\x001d9È\x0002Û%Á§)\x0011ipGêòÂ\x0018O Ô\x0004ÂÓ\x00044\x0010Æ\x0019g\x0007$6yô\x0018X^\x0001°ÁúØrYðàb;\x0002¶È)(w"\x0005\x000bT4!ôèÍNcà\x0001pàu\x0019\x0006æ¤\Ò(àx`3û\x0000T61\x0005Ý£<÷¶Î?\x0011¯ÇX\x0006ÛÒ\x0003ûE3\x0015L4È#z¢å.ÝÉ->5È¢É*Õ¹Í&K\x001c·ñ±OuoÔ8'´\x0006Í¨[K¦1r¤Ü»¾ö®?Ñ\x0000Qã_H}æs¯i^«_×¼7Ó¯\x0004è\x0001½ö\x0005\x0004®ö°<1FªÆÇ8 E3Y¸\x0011Ñ½2\x0008Z³\x001b\x001d\x001aÆ\x0000È0Z×(*t\x001b{EÅ}|eÅ#X¦¥Hé3#bs\x000c/Ðl$\x0000C)ßàRksßÀr´4éã$CÑ\x0016I'Ú<\x0018Â|Õ§I;Y¢Eà*/::x\x001e\x0010JX*"`i[ª\x0004ï¨p&P+ ¼!ÉßeÉ·
ÔÑ \x000b;jÀàôæ&ðÄp¨\x001e\x0015ª7
¿Ñ03\x0007jÛ8RÚaú\x0014ûFOMÀ3¢,Ä\x0017Á
#QÖî-}|¯®\x0002Òõ¨Ð¾\x0006éÜ\x0018v&Q\x0011ÔôKYÄ6\x000b}*\x000bÔßc\x0014zdé^1Ò=:ei}lètà\x0017y¿\x000eªl\x0019áaÄ.¾ÌZ;Géûlé&Çþ\x0012ÿ§\x0019\x0013ó§Í\x000b¶g\¶\x000045ADl\x0019O¢\x0010).!fÎì íá8Sì\x0013©{¨\x001dºp)ÔN#ô?¡fÞzß'Ó\x001f©`ð'®?ü2»út­ÄÝ~ö](þ8²1Ð«\x001auÀ¡Û
¿±Q?\x001bféuùE
"Mk\x0003Ùl\x0013ÿX¾Ö;PC2E¾S¾Ö;)!9ÏwÊ×zG\x0019 pry×ò½½(´µmDô½Þ»ýúÌ!!QIB) C0èO>¢ã9\x0010Jó\x0006Æêçñ£¢]$m\x0018ðÅ60:áþ/À\x0000¾\x0006a÷
endstream
endobj
3 0 obj
<</ArtBox[0.0 0.0 595.276 841.89]/BleedBox[0.0 0.0 595.276 841.89]/Contents 4 0 R/CropBox[0.0 0.0 595.276 841.89]/MediaBox[0.0 0.0 595.276 841.89]/Parent 40 0 R/PieceInfo<</InDesign<</DocumentID(þÿ\x0000x\x0000m\x0000p\x0000.\x0000d\x0000i\x0000d\x0000:\x0000e\x00005\x00003\x00003\x00004\x0000b\x00002\x00005\x0000-\x00008\x0000d\x00005\x0000d\x0000-\x00004\x0000c\x0000e\x00007\x0000-\x00008\x00007\x00008\x0000f\x0000-\x0000e\x00006\x0000c\x0000f\x00003\x00002\x00003\x00008\x00001\x00004\x00009\x00002)/LastModified(þÿ\x0000D\x0000:\x00002\x00000\x00002\x00000\x00001\x00001\x00000\x00007\x00001\x00004\x00001\x00001\x00001\x00003\x0000Z)/NumberofPages 1/OriginalDocumentID(þÿ\x0000x\x0000m\x0000p\x0000.\x0000d\x0000i\x0000d\x0000:\x00007\x0000a\x00002\x00008\x0000a\x00005\x00004\x00001\x0000-\x00006\x00004\x00008\x00000\x0000-\x00004\x00009\x0000e\x00007\x0000-\x00008\x00009\x0000e\x00007\x0000-\x00004\x0000e\x00001\x00009\x00006\x00003\x00000\x0000d\x00003\x0000f\x00002\x0000b)/PageUIDList<</0 650>>/PageWidthList<</0 595.276>>>>>>/Resources<</ColorSpace<</CS0 70 0 R>>/ExtGState<</GS0 71 0 R/GS1 72 0 R>>/Font<</T1_0 75 0 R/T1_1 78 0 R/T1_2 81 0 R/TT0 37 0 R>>/ProcSet[/PDF/Text]/XObject<</Fm0 6 0 R>>>>/Rotate 0/TrimBox[0.0 0.0 595.276 841.89]/Type/Page>>
endobj
4 0 obj
<</Filter/FlateDecode/Length 9095>>stream
H¬WYÛ8\x0012~÷¯àË\x0000\x0016ÐVºµ\x0008\x0002dra\x0016I°ö<­\x0017\x0003µÍîQCcY¿u\x0014i;gÑ@K¢ÉºXõÕW_\x0017·\x001fï"ñ8."±þtû¡Ä»añïÅÏëÅí[øa;(Ì«
þ§	üË*)Ä¸íí±Ûµü-\x0012R¬\x001f\x0016Q\x0018%b½\x0015¹à/\x0017Y*Ã$UX¦q&ÖÝâ?Ë\x0005y$o$\x0013ËïE\x0012üwýÏÅ{­îí\x001dè(S"TZÀq÷ö\x000b\x0008ÏÄ\x001fbñ\x0015T¡t)Ò8\x0004ÙY\x0016\x0016	hÞv\x000bü¥[È$	á¬h\x0017wìIDGÙÒ-­ÙQv¯à-.Åú\x000fQÑÊê(2p¿0\x001eì¶Ù\x00062\x0011K%\x0002´k©X,¢­Å£êwõ¡SF\x0005\x0012ü\x000cõwu?ê×#\x001d\x001d&óÝª1 @`\x000c\x00134!\x0012+\x001e¾ï@e=\x001d\x000fA,C	ºF1À;È~¬ûfìÔx#@xRS¿õAÛbßNàçfRë\x0018é[\x0010\x0017!¸¢PHBÔ$¦^nXß$yÚ*¬^uó®z\x000bo\x0018æA|T°rýa­Ñ\x0005jjY
ÊÐj¬Ý&ã ÍÑá~T\x00070\x000e6ÖèÒ±\x0019úÐÊÏ_òêm Ét¥-4\x000fÐªØ5cP²í½õbèÅ¨Zø\x000fvøÞbðñ{\x0014;øªÜqUÖ\x0014ynJ\x0007ª
8Èâµ·:ærù
Ð.Õ}}86`!¦\x000e&	Hw²$¥¨Qzé*!¨2,ÑÎ¾\x0002teøú¼?4Ý\x0006JsD\x001dNö\x0001uä\x0005ëi~®ã\x0013ä·ÎGJ\x001b´¾µÙW7&nðûHËæ÷S ~ÖeÜÉÓsUýÀÒÝóD§\x0018;úù)6I\x001aé×²'Nð£Èáv2\x0013Z\x001aXÈ{­8¸\x001e\\x0018µ\4:Å\áí\x0010'}`Þ@ÆÛô^®õ\x0013:\x0013\x001bo.e¤¹
ã¡³<Ã/¸X¯cã\x0012Ó±¬¢\x00128c°¼½Û×ý«W·o¶Ç©n×êùøêÃû\x000f\x001fâ(*_¿~-~~÷V, °`ÊûÏðù#&v¸ð BÙ\x0003¤ã\x0015â\x0010
ÁHÛÄE")Ý´¹ e\x001aæãù\x001c\x00001Q!4õ-ê®\x0006«ÿº$Ðo\£ë	®±é©9Wb\x000c
`7\x0016\x0006D{\x0019W×F»FÕOà&]Èr]S2ÃÔXÉ,Ä\x000eã&\x0008áÐ]&\x000e\x0019\x000e 1
J\x0018uÚf²ü\x000clW\P§\x0007>\x0001Ö\x0001b\x0017Wy\x0016æiê:&¶\x001aE\x000e²
(¡$\x0006XÁJD;»\x0001k\x000eÿÔOÕ÷\x0014Ûë2\x0019Ê¹Ê\x001d\x0013B¯q2úâKeB\x001bC\x0001v\x0003\x000cgï4\x0017(ûúe0+¶µiÌûabpÜ: R¢pbPø\x000c!!Ú²º"U!Ì2v}\x0014ï{1'Â×©±_Co×\x000f½Îã¦Û\x0013x\x0014äØwð)ÕI\x0018)Gt:¶Sº²^½ZÛi\x001cÊÚïuÇëwú\x0005\x001b\x0012s\x001dö{È\x001cÊ(î\x0007Àçô¼¹bÐc2õ\x0014\x000eÜ\x001cém\x001fmñþxqûû0ª« ¯
c)]ô¸Ñ"Álé5¢Ó°±ù'-vwÚìOúÉ
T\x0015>h¿9å\x0004ö`Æ
êÁ:\x00134ÈA£¡¼1hB\x001brJ\x0015:ÍÄ\x0001jþFÃSü­ãa·ßm0\x001b¸\x0004u.çaTyÉ<L×¦2"ý?ôÒO\x001e\x0014ÄE¡çÄHõ#¦Bp\x0019Ãë°\x001f\x000eHI\x0003ðô\x0012Õj®²0ÍRhð ÑÝ+Æcy]f3è[.*\x001c.;
]Ø`è÷\x0000G&>G_X²RÛÕÔ4äbnÈB7s#Ì®«ä4½awZm×Á(v§ØC¦\x000c×t¿\x001f\x000b3\x000cº\x00031m\x000cçèP$²ËÓ
ëNMÏâ\x0018\x0010\x0018þ¹§\x0005ñù\x0002!NA»©\x0019U?Ã'ì¶`\x0011¿@¥	`3Ë{~ÐêL¨÷fPeâËAï\x001d5	Þy¿>¤'^\x00191Ì
Ec3=ye8\x001cÃ­[~þÑ0JKü¨½/uqPý±4tÑd\x001d.Ò@\x0004nòf³?\x0014´CJÜñÒ_1QRÌ\x00106Xy'p"ä\x0017¸-³C;\x0000¹­ç£Úvâg«¿!U
-Ü¸T³\x000c	¨z>ëéë92Áº°^Il¾yw6ò&? xsþEï½¸¡É$s\x001bÚÓs8OÞOÞ\x001ee¶¦nõef\x000e-â\x0019MÌ}è:ã¥ê\x001fëGåXY0Ý\x0006\x0019
©sÈ\x0017êÄ¨A7/Û!\x0001ñnP\x0006hDð®¨EöSP\x000c\x0019Îë½"\x0003\x0008 g81	yA³\x0013|.Æ[\x001d½h\x001dærÍçrõ\x000eÐ%æ¸krpÊ5wÂ^8\x0017Õð\x0011\x001f)|³ÚùáØºóÀ7YX÷¤Íp\x0004C)ý\x0006ñ}ÔÊ­Ã{/ç\\x0015åöS;cðið²¶3áä\x001fC-ÐÖ¾Ø{\x0001ÑîýÀ*}vçÄÉù\\¾â1XI/=-_è\x00138\x0005ð±î\x0003\x0008A0\x001c(\x001caø»/¿ê·Zø0?è\x0003\x000f
7WHgê*ó\x0014{|óä2~\x001fg£Ý0n£Í§W¿N4X\\x0003­Å-ß°¹Ã³nfÛµ@óDt%0ÌFÖcàÍ\x0002\x000cø^Å¶ÓH×*r\x0007\x0000r\x000f8E×PCÆE/ÚÁ4ObÉÜtÉ<IÃ*öX³\x0003ÒÀªö&Lß\x0000µöª-Që\x0012QÓA¿:ÔÉð}F(÷ÐÆÃ~\x00044/¥|áR¦¾y Ý\x0003°\x00100$\x000bVI|æ\x001f"¹÷ea;ÄoË\²'ÇÌøvÝÈq0\x0016\x000f,&(OChZ/CéÓ®~\x001e-iZo
Ói_\x0003IU½Noå\x0012Vî\x0008Z¥\x0003A© T^ÈúzG\x0000¯)bäà\x0017Hl¾uZkø<NÔ|J6¦¦\x001fàiÌs\ î\x000cEïá`4ã`ynD=é\x001c\x0019UÓ{%ÈH°\x001fÆæØ<§?\x0001ìÐÕAÊãÝÐU\x001cØòCy\x000e¦X>\x001bè¡­\x0012(¾¥\x001e\x0004P"8Î÷\x0011dZ]×´Í\m¢\x001fugQá{
\x0000Û9^ë&0ôº\x0007^·§Õ{TÝ3\x0016YPð9±VÍàaÐ-ÍÏ5
\x001e-±½ìÃL¦ËluÛ¢Û¨ç\x0013¶m\x000c\x001cf¦qcz\x0000Öcú\x000fÊÆaÀ%E¢;¡oß\x001b¶^À	Jº\x001baØ
Fªn\x001b3|\x0001Ú<\x000b8xõ>p\x0000çÌ`\x001c\x0014äÄ %Ù4{\x0015ä)~Ç|>£B¸\x001fÕáÑ\x0002ùXrÜ\x0008(S3ai\x0014©N9\x0005 öl(\x0003\x001b.ÐÂÝ\x001cñÜsNH\x00087ëM%?diVz¾1-
ã¤2vÎÎòSêí²g´>sÞKªÉ5Ê¯qY£?Ë§\x000bDðG\x001dD¤\x0005T}ÑÅM\$\x0004º\x0017(mbf¬¨OH\x000b#6]0µø£M6\x001cPJ]®\x0005
B´NmË¾é÷fB\x0003µ­Çø\x000bÊ\x0012wxª\x0017Êáa:B÷±ý\x0000\x0006B´&3	\x0019x\x0003pª![¢44Q%Ì2èÔ÷\x0016¸¸É\x001aeçÅo\x0005l\x0006²z:RýTd
\x0016\x0002ºzl±h\x0014Ã&)$Ü»K\x001d£â\\x0017Ê}RÐ	Aà`g#"MýÐÝ[}Ó3»I7R9\x0000
À]øíáBk\x0004×¾\x000c¥­ýÙ\x0010ÃDx£L\Ëß"\x0001Põ\x0000ÒV)§¸¡æL£\x0002î+#\\x0011ò'º£¨Qß×ØÏñ}¬û-Ý8ÕÆy8\x0000ËÐ$VÂ}sZG!Ø65¸
*¨yY\x001dD°x\x000c\x001aø\x0004ÔÊ*D¼DÎbüÚ\x001f ï\x0006ÊDG)\x000eó¼`yo \x001bÃñiµS­Ãtm·n\x0019,sÜÍ\x0016óêy9y\x0000¾lH¼húíó/\x001fo´,ÌAì\x0016iZ¸Ú£²ó\x001d\x000e\x0014È¿Ó¹IAè5ØP'gKjáÐÿÿ^n;n#G\x0018¾§è\x0000& ÉâY2\x000c\x0007Þml`\x0003	Æ½1\x0010p$ZÃ	O\x0016EcöíSÇf·Ä\x0019{\x0015\x0018°8<ô¡ºêÿ¿A¼ð¿C¡\x0008L6Í
\x0015»Òªt$«²Á@üÔmí
æ8)E®TÝòÖ\x0005)×\x001dÊãDý±¥þØR?×;%ÇÔwiò\x0010i\x0010ÝP	a![G®NÐâ+Ð\x0019\x001cçDXç(g° ìµÜÝÇ"ázÆÅîªºh	\x001b÷Xý}1àõh ¹\x0011B?B6P\x0004±½wo^~¸]Ãpó
rrm°Ò¢54\x0004áfkÂ\x0018t2\Ø57ø¨¹	¡2ó-¾XßÜÞüûæ\x0017ú>Äï'éR\x0005ÝÒxÛi¼d\x0003©GðV\x0003K\x0016©öV£+¬h\x0007A%\\x001ep	Z\x0014ÜnÑ=¹¦Ï\x001eÈ@ç@ W\x001c«P\x0004e%genË\x0011p=J¯iYÃ\x0000fmÏBÌ¼«m\x0012*¨A8IÙV[\x0018\x001cåÒ\x0012«\x001a*µ³júbgÕqÞ\x0013ß\x001füüy¶z\x0000²'[+¥@M\x000c~\x0001\x0017W\x0002º·<"!(ªÇ \x0005Ú5}w´SsÝ³6¤\x001e²ä1=#i
;¶Ì\x0000\x0013La0S1õ\x001b2jÜ¶\x0018='Ðòq¬¼\x001a!
/ÛjWi¶b+i.J©é¼eàãÓ\x0007\x0015åû¢=PJÆáe^Ï\x0003Ê¾ìÇ(¨hÑ{e¼EÇzeÀ#ISÂkN\x0011\x0012ØüÏ\x001cUÛ\x0012ô]\x000b0"\x0005<âçµonK\x001eÌ_õøX±×ªD\x000cù­\x0008oÄ=RH\x000f¾K³VT(ÔÉ!?9Þ3Rs8£Êóù\x0010,Sêþ\x0012Ü;!²n\x0010¯ÙPaÉu]Ú~÷ºAíÚº/³ëùâ\x000e[%øëÿX	L_wGÞ×0ååæ¹¼\x001c
5\x000f\x001dò3õmX|÷t
èÍ¥VA\x0016P=EWé.ÐÂÚÑ]¦\x000c²ïIr]ÀIÔLã%\x0007ðVm»°º.\x0003@a0\x0004\x0014Á±oðýïØÿÛ}\x0019$É¬0§3¤ÜôÇiD»A\x000ci\x0012\x0012º[
é@»Eb
)éØmfÒMùã++KÞÒ\x001eæòÓ\x0004®Ä\x0002·^¦Á½xªJ\x000b\X¦R¢²<E\x0018²ôÚÂø$\x001a:õ\x0005ÕJÜH*7%h>|Wq\x0019Ogò`¦Ð£È,\x0008UkÊJ×ofÎ\x0017\x0002¨\x0001\x000elí7rÌW\x0016ó®5L*Üà;\x000b­¯Jkà³\x001a-])HQÎ©K/ùª*nË@;z­À®.+Î¿6@ú5é1¤¼Ðsoü;ÊS4x; ¾7@h4¸KÛ\<bD\x0006éÔ[h\x0017!m¬
Z:úqµ¶Xcw\x001b²ª=ÿê"{gÏÓlwÚX%É½Ït0ùítFwmìþQÞU\x0002G>O±¹ý£^_¯Èi3êb	XS°\x001d\x001d ì\x001f\x0010MÑ\x0002T~Ãj2båËðr¾ÁÏ#pà^¦C(#q¦Ålíb6¸Kª_·sÕ³í§då¹\x0013BÞéÔYO$ìÕ'Ìôýå´yò¤G}5^=øK\x0008ÀÏµ¶ïëªêÙÐíªÂê\x0018\x001a?ï¶µ2kÃ.¼\x000føZ
³îêê\x000cÂr
ÄP9·`-ó,®ÉuA\x000e-
Y;xJ	Ãg:üær|\x0014ØZ5\x0016¥Sâ®¿NÚjLVµIÉÕ°=,ÚÝä'+és²\x0002\x0002¸\x00036\x0007Ôæ)Çn-Ç\x000ed¤à\x001a\x001agøt0m	\x0010t	ÑådÈ©°¿#a*E\x000e°a¨\x000e-u¸;&Ï±L\x001bÊ\x001alÒ/é®¢´yÒVWÜÍÈ=®Ó\x0007ÚÔ¾E]\x0011q\x001föé·\x000fN\x0004gä\x0001\x0012°íÚp\x001bRzeÀç¥ãâ8Òëb\x001aí¸Hûýo40µ½ëÝ²\x000fzwSµÅ\x0014/É=\x000b±\x0019ú]\x001aÌ¬Õ\x000e#ä\x0003]±#\x000eÿ³6°ñ¯0À2áï>U\x0015LðÐÌ_Ñ<5\x001c(äA7r\x0000\x0008Bí¸+\x000bñÍ\x0018cøÌÛ¦xè4Í|y
\x0003Jê¨½]g(ëà*\x0003È2³ç\x0003ü \x000cÞèiMà©Wå±-i?ÝÝ\x0003r)¹\x0008éÀ\x0018ÄnuGÖ8f²\x0010\x000b\x001a6÷5\x0008I\x001e@ØIB`é\x0019ËT\x0001YÑp4#-6C\x0012\x0007Â èOÕâ¤á³\x0008z²8Vz
séxdQ)½×\x001eØgN,æ>åô
eáôFQEpL \x001cJõÏu\x0016\x000c\¬H¬G5\x000bgvá\x0019
-®\x001e<Æ\x0018y$ýè\x001cg\x0014z:~íþ|°Á[oD(éÄsç;ó8]3"¥£\x0001/OòI¶S\\x001aÔ\x0006ñDsÁ®°bcé@"^2;77+ªö\x0003>hå)Ý+j]PcSÊK¨Úá
£\x000f]Ø[ÎföOÜ(M*8õexàjdIFîþä\x0012gÒ\x0019EÛk.a¹\x0011õoØ2Á=\x001b\x0010KlÆ4W¿ÄYrÂuõÖüÁy.9X+?ëÀì\x0016`¶Dú;ô É&°¯l\x0013¢áÆb\x00105äÊg\x0019Ê_ýT\x001böQ[*2Î1m­k#9sÎ*þÑ¯¤z9gîW¨Ð\x0017í\x0019vØ3±¬½U¶Ht­?Ví®ê\x0011j@®´góHm½}fï vpØÔªjiwËjç\x0019ñZø¡jÅº\x0018(|\x0008ÝÁÚ\x0007>\x001e­»³gxÍ³\x001aö\x0015&ÂÉY@nûº\x0000ËÏ$\\x0016¯b§j`T§érÙk¹0åÈ¨"ÀjâP\x0010 »a¯
6
$X\x0010¦Îl©Pb8ç#_^¼\x0007ÁHÛh\A<\x0004¿qaþY4\x0008¡Ñ:ÈðV¸ý\x0012¬\x000cæ5þµao¼íöõëow§±¨?§×ïß½\x001f¼yóÆüò_Í
,\x0006øÝ'¸±³Í\x0016\x000b§ÿ\x001b\x0015^¹x°\x000fÜE3\x001b»\x0010U5¡\x001cö9ÒåàWGc\x0001Í\x0012¬ríÉ\x0003`\Nâ\x001e\x0015K®/må?\x001dPÜDeGÐ±
\x0010e\x0014$@Ç yéÎs9
$\x001cRb1®Ì¯8V>Ñsnû\x0012â\x000biPí#"Q¾Çº,kÊ\x0017È_\x0012¦iîP#>ÓF\x0014ãÉ¶j\x0011
`á]7îî\x0019(FÖwæ³\x00037¦ðâù)\x000c¤ªEouu9}Qg|^¶Î®J;(Æ,ã´{ñwmÏü:\ÊKîÚ~\x0007\x0003´´8A\x0014¬KPq\x001f¦U¢"XnG·\x000ce¢'\x0004C×\x0017\x0008Ôæ®BÓÒ¤r\³,lrÙÚNµ¶g\x0004k;JpIm«îºî¿\x000bóG@ºy¨+\x001eÞö=ÈÀ\x0016\x0015ö·vàËSq ÅïE¦\x001e&ÆÏaâm[ô;;ú¤ÚÆ»Õ\x0000#
â
&æ+T
>H¯9ÚÍ*sOPôlÈ\x001f6â\x000f~\x0006¾Xâ÷Úw¹;Yòx$¯l¨¬\x001e\x000eê\x0004'Özâ-Ñ#p»é\x0011u`¡ËðIówP¡èÆ^Ò\x001fÕ¸é'\x0001¡&Ò\x000eR¢é*HoÀÍ)Ý³¯Á)\x00133fh
TRÐsTÞç© IØy`ÉÃÈ·5UîdÕfóxa\x0012%¾æàóU\x0006k\x000fÞ	=W$z(kèêùÔTqÉó\x0018^Õày¡©V(¾DQ j
Ìx&\x0003i1ýYh2pµÜU°)EmÈB§¯ÂyÅ×ùÆBAÍw­6@²»º¤
Yæ\x001b<ÔW&½Êm7«4ÎüÚ@W<G&V¢Ù3²¥"p\x0014î9Öµ\Ç]¼Än\x0003()ÙcÝ>\x0006ûê\x0012¾®MU\x000f\x0012ÚÉ§pIÈºI+Ø\x0007ù\x000f,¶\x0014ÄM\x0004éðù\x0016Ø3ß\x00131Ñ¾LLP¾ã?£kÎf»ÚÆ\x000e\x0008ñn\x0012»\x0013áÂ\x001c×à%\x000fxî-\x0007%\x0002J]\x000e]Û5w\x0016\x0014ÆÇù\x0008\x0013C\x0003ï6XúÄºÎ9¦oceÆ\x0013ÀÏ@ªãªK.\x0017ð'sÉô\x0016ö\x001d¸ß9>;.\x0001\ÐÒ|\x0014\x0005²°1Ùðe×4c[í¤·\x0004:w\x0001ó¢[¥\x00161Ö\x0006QR*â¾p \x0012îíL´½² a\x001a{è\x0018:\x000cZ®\x0003w\x000eÅâéM§]Ø\x0014än\x0002P}}(\x000eèSj
\x0014-ÚDW1e4xQ2.³\x001fñYBß^µ]\x0018ÅQh^ÎÐJæ"\x0012+[¢3öÇÏÝ¥¼Åvm\îË*Õ\x001e¶e(¾]A\x001fÚ¦Y!\x0014¾¸REÃtµ¶Ai`³IV\x001cE	¯^uÜÙJ&aJHCÈ%¾¦¿GÝë?\x0001\x0016ñÙPA27¥ÃÚA\x0014ã_âv\x0008Ø kîç\x0010óSî¾1gd³/©ã°­­\x0018û\x000eº?Z\x001f\¯\x0002\x000fhb%êú\x0017jNïöY»\x0018¿\x0004X0»NB\x0013GAmÂÆ!(ÂH»ÅºÜÐà?3ìÚ\x001fþÇxµíÆq\x001cÑw}E?r\x0001¾÷ä1\x0011ØH$f0\x0008VäH\x001ec/Ô^\x0004çïsÎ©åÒR\x0002¦ÏvuuÝ«úÇÁ}<^>Bø¤¢·Qru\x001cï[M0ñ\x0016÷üð\x0018ÊÀ¹\x0005yãÄáßÂÐá
ü%èWn\x0003½²½\x0017\x0013\x0015c
ë\x0015y|È÷Û\x0007vDäáYÂÿÇÐ\x0011bâ~\x001c£ËP2×ì"\x0006éPª\x000b\x0011#`-î0½û£¥Á:÷¥4þ\x001fº\x0010!£O Fk¬æ2\\x0011ÈCÇ\x0014íäï\x001f¾¦Ò7\x000f\x000f°{ ç«Þ#£\x00053Zp¡\x0014Ô¥à*fC<ç"mvÃIÌ~Úc(¢ç\x001eÞaÀ¾¸{\x0001êZßÈðI"äÑ\x0014j	17rç\x001fnû¡S\x001e¨_ÅÿoÌû	RJ\x001c\x0017\x0012ÒÑ£ºÖ\x001cîsHÉ=mÅwË\x001aÈw\x001c=?ÜåUÈ{}ZÄ\x001eßè0\x0016Í·\WöZ\x001c\x001bî\x0002æ:\x000fBÇH\x000fìv\x0013¢¨U¡BªFhCÖ]iôoP6¶¥Fk v2KªÄ6\x0008¸m4¶^üRÊ&äÌ&BBj¶n|JèlõcËøD¸¸ómÈmáb»Y(\x0019h\x0006
I±h:íîÒ¢Ìñ`Ô\x0003\x0004¢Ñ"Fã\x0015÷¤9\x0002±Å%x*,ªeâ¤x«Úe0\x0010\x0015Ü\x0011W»YxLF[R\x000b\x001aQ®\x000biz÷5Ò\x0000µ7 \x0019é\x0008öw\x0005ï\x0007s\x0016½Rî£y ´Hs×\x0007\\x0011©`a%!
´1àè\x0017Zá<(tEpéqlDmèN\x001bÇjx´Ý"ä¡h¨v\x00073\x0018\x001al/75®½WV\x0000	.\x0017aÚ¬\x0016gÑHKñFÔ2\x000e\x001cÉlJÒÑAæRnà\x0006\x0005<K\x000e¹\x000ej\x0002[\x0002äª
¬Au\x0002hôÑhóÐ\x000c+-ÜDÁhd¨\x0018­§|#jøR\x0002\x000c°¢ý¾¦Î\x001ay"\x0001õ\x0019Ì
 \x000eÔÁëñ*jÎ üÁ[\x001a`p@¨\x0000)û~Ae!0ÄvkG,Ö¡ùªÑ¶pÁD±£&T.´µ\x0019_ZV³Ýäy²1¹i
o¡\x0002\ðEÏõ£ÑâHcw\x000eÊ5T
ÝÊf\x001cjVG\x0011ëLu=Ë\x0019%\x0008\x00173Åª\x0012Bè1»e¯¶ùr½ëÍþÌY ðÞ!	\x0006»µ Z5¢<u\x0004ª£ÙÄ+ P\x0003\x0006>£^&ýJD\x001d\x0012
Y·\x0014£­©tZ]\x00150î"02´7\x000b¥@ÝkÇU»ã5ê\x0016K!\x001bmÎ\x001d'í7¨u\x0014EqbÌ îôìs\x0019\x001ajm\x0014éØzX\x0015nLHÆ¤'ª­Hé£T
\x0011µ [ÆØt®hùüô\x000e5Éö(\x0016À\x0018\x0004`Ã`¶LS\x0018\x0010*õÇHBß×£Ö\x001d$ÑeoEÀnÔ\x0016\x0008*\x0002Qå~zZSu\x00085´×\x0016\\x000b:$YI[\x0015©¬\x0010^e#F~ [	ñ¹\x0010Ú`Ö^6\x0010\x0004N§=üI`Å-\x0015Ñ@\x0012aÍ*®%aÉV=!\x001cv¬xæd"RsÖÝH&uÐ\x001eG¦\x0014Wõ®¦sQ©§op:ö.\x0017Õ}H¨V\x0005§Â\x001dv
\x0001JÛ\x0005°\x0010ªA\x0015/&LG\x0002\x0005\x0006oUç<ô­V,Ù\x0002)pÌê¬äÒº©2°G«Òì¤$\x001cÑIØrÇ±\x0013ªAFH³p£cJ±ÎÝÌ<\x001c%\x0005£öª\x0001/ &\x001ee+(dÀNE\x0003ALP&ä´¤Ë\x0006\x001dJ6Ôl"24Ì0
x¨Y^Æ\x001f­÷&\x000bF\x001fÕ2+t{*X*\x001dÁ X
¨\x0019\x001b|\x0003þ½0J&2\x0008IM5Z¦45ÑPeQµ1«ð\x0002´¶1¯Xþ¶¬6É6\x0007ÀvY
9\x0005\x0006_Ä0ôÆW(ÒÕ\x0010
Ù:<;Z±ÐÞM\x000cm\x000f\x0015³\x000e»	St|v¼ÖdGor]ª#Õ,u®eúõµ	E«§¨Óì¬ÊU§c)¢J5;ëÕ45Al\x000e\x001aì\x0001­\x000f\x0003ÅZäguã\x0010t\x0001$\x001c¢:z\x0003	\x0006Ô\x000c°!µ\x0012\x0016 \x000eA¶²f»Á#ÁfC\x0003$Ådëy\x0019C8\x0002êêA\x0001ì\x0015Ü,ÁM]TZ$\x000b\x0016NÕúÿèGQa¥\x0006\x001bæ`Úr("òL¯ô'\x001f\x0017£\x001e(j0QyY\x0011$[À4*¹ÇÊ6&CUÎnHÎª¹®¦qÊ*p!³Í{+nzæE©¿[|Uõ	\x001c#z7PD!\x000b\x0015\x0003\x0018FmÌô[®6¹3®{Âì¯øÃÛð\x0007ÿïå%Ègà '`´7\x0017<°<î<¾\x001eý\x0007OÀÞ<FïWMO^<p×ózÝÍiÞïÜóttþîC¬¿sz+®¨Ó^Ç[·ÿóôÔ?\x001cÝ´âÊ=­7Óîù0OÕ¿\x001e¾TÁ¤¢\x001fQb\x0017êHùP^$ ¿\x0017	\x0007úðÇÙ=¯wG·Y»\x000f+\x000eîfØN\x000er\x001dîrÎ{ÞÏ'÷rXA·ànxÿ²t øñ¿¯| ¼%\x001b(\x0005åVA¢>p­58\x001c\x001fC\x0008«\x0014uóB®V:~:O\x0007·>»íúy{Þ®îFwã¤¦tKfv>\x0004\x0011|\x000fÏþ¼skü»\x00063\x000eÒEâ»ç3îeÞ\x000fÉÁQ\x001aþÄ_pÃ­;R·iç~>Ï
ÄÁ]\x0018º1à·\x0017\x0006ÏW\x0003lg^ôjW¾ûÃkþÚ\x0019Ü®îÒ¢\x0005\x000eCß¼Õ\x0004ü\x000eóqrÇõn>­g1÷d¾\x0016{0ß=!êcLã.ö ÙqÅ\x0011v3"øªmÖ3\x0014:~:wÓi¶³:mßw&¦+5]¡\x0010ÝÜ»?­¬À³ßýðý·\x0008&¾Þ©_Þo~A\¬w+ú\x0011F=ÿ\x0004k·ºí´8÷à\x0019þWqd<\x001a\x00147coA·XûZÓ[·îîÜiîT\x0007m#\x0018\x0018¿¯1Ô.ùÑ¾Täe\¡}Âóû
C\x001bY·;NóÇÝ\x0004ùØ:\x001d¹ÛùBºßñÙÑwûÊ,"Ú7\x0013Õ[\x0015\x0004~×\x0003_	\x0000V#?÷«»ö&\x001bÊÛL«É\x001fzJo§ãYF\x001alÿ\x0018Qa_`%&¨ÀÐx¿Í=\x0013BüN<òA¡\x0004ÙÍ\x0007\x0019æÚ`Aæ:f³äê®\k\x0006ôE>f±(ùG°3#¢D
1\x001f!\x0005V@Ïîy>Âg3ÄgÈF\x0016 yh}Y\x001fÎîes>ºépwE\x0005æR\x0004OËê²­¤ÍU­êÖàÎç0ç+YVwPææ$¾õ<G\x000býÂ5G+&[º\x001aIù\x0018b:\x0014Ü½-X Ô\x001e(µ\x0007JU H\x0005Îw7ûþ£Â¿Ç(~>ÝRù\x0013¸\x0019K:)
t5N¯\x000f\x000bÓ§ÎôBªªf¢¬|{S·þWÖ f¢Àý²Âèz)\x00054ÊnÚt_ZJÒ{,Aü\x0011!~|Û
PuI§ã¹×í`)§WMé¯{÷·õËË´±\x0014¼Êó¯åÄoîçK}±ÚóZ¬þÛiññ|°ãËÙ[÷~­vs±4øãÀ~c²ÖAãå¡\x001d3}aº¾hyä¼pÕ\x000bÏ»éâ_«ó¸N
×åß8k\x0007óÆÚsoÎv;¸Þû2û6\x0003-ÿTËÍ2îÒ¡Ð0­üðªii\x0018\x0008¢÷þ½\x0008\x0016lmÒø\x0011(ª-\x0008öØK\x001alIèFÑï¸ö\x0003o%éNæãÍ{oKû¦ÅI%ÊÄÌ\x0010CÝÑ\x0011\x0001yâ¿\x0000\x0004Û\x0002\x0015;ãÛe¤D
Èß¶U0¦Ps®Ì1qP\x0001&\x00103\x0013\x0011÷[Í\x001doC\x0007 þ'\x0017"¸­Î:\x00127Ç\x0012C\x000cüVí{S\x0008\x0004D;i?2íy¤ÅMý\x001e\x0012UïªÂ?!Èýãº,³MÍËR.\x0012¶H93áúÜ<6®v
¼A÷t×¿á@C³d:CH¾ê\x000fb¶*ém#ÇFO0t%.[wÄÐ\x001cs4Ò«oé(¹µ¹mxø\x0018\x0000\x0005\x001f\x0007N-ôiÔ\x0006L\x0004\x0003R\x001eÏ?Õ\x0015ôùÅxÔá§ÑÐî\x0000\x0019!¥´Yþ\x0017d$V\x0012 \x0008Ð°¯hÃÆ¿<øòqÝ:4\x0013\x000f\x0012\x0008GT( f½0Y\x001aruf}\x000e+ÐÛ±¸úeUÉå,o?²rU|µÅ|±á_¦Ó©¹{¸7=L`µíÍñ\x0013è¸¦ë|ølÝ\x001f×\x0019£Ò¾3§ª¼!£Í,\Ýa¬«º\x001aìeèØË²¼â\x001c3øßñ£©¨àó\x0008»ðâ}O¹\x0001Ñ½¦>xÇÄ\x001b-gàìD\x0015'ý`;M)\x0002Nv~À\x0013ágh@Ñå¦¶]
è\x0008{
\\x0010Bý*tò§XW\x0004ºZvw\x0000ñ¢Þ.D*/t°	ñÍW½\x001f\x0001\x0006\x0000Ê\x0000Ã*
endstream
endobj
5 0 obj
<</Filter/FlateDecode/Length 276>>stream
H\ÍjÃ0\x000cÇï~
\x001dÛC±\x0013B!\x0004×B\x000eû`Ù\x001e µÌ°8Æq\x000eyûÉvé`\x0006[?!ý$sÙ>·Ö\x0004àï~V\x001d\x0006\x0018Õ\x001eyõ
á£±¬(A\x001b\x0015î^zÕÔ;ÆIÜmKÀ©µÃÌê\x001aø\x0007\x0005à7Ø=éù{Æß¼Foì\x0008»/Ùíw«s?8¡
  i@ã@^z÷ÚO\x0008<É\x000e­¦¸	Û4\x0019C(_äfÔ¬qq½BßÛ\x0011Y-è4P_é4\x000c­þ\x0017/DÝ\x0006õÝ{V\x001f\x000bJ\x0016\x000cñ9ó9²Ì,#_2_"_3Sñº:&&C\e®"2e®)cM!J<2±µ{\x000f±IÚ%<6 Vïiø´ð4u×X|ü\x001d*^ö+À\x0000ÈË\x001a
endstream
endobj
6 0 obj
<</BBox[0.0 841.89 595.276 0.0]/Filter/FlateDecode/Length 11896/Matrix[1.0 0.0 0.0 1.0 0.0 0.0]/Resources<</ColorSpace<</CS0 70 0 R>>/ExtGState<</GS0 71 0 R/GS1 72 0 R>>/Font<</T1_0 28 0 R>>/ProcSet[/PDF/Text]>>/Subtype/Form>>stream
HlW»®%I\x0011ôïW\x001csÇØÞª¬·	\x0008!\x0010\x0002\x000bÎ0FÀ\x00183Hì\x0018H|=Èî]ÐÎ9q»\x001eùÌþî\x0017(¯__åÚ½âsÏÏ××ÿ|ûîWxü¯oåµ\x000eÌùj2®³ûKöÕúzýð··¿¿};f½dæÏ%\x0005§Î9ô³U?»÷uíÕsWÅ®±ÆO·á¦T5¥I¹Z\x001d÷6Y×\x0018çGÛ~þþV_ú÷#'¾{¯-øç»ûþ\x0011\x0007¿ÿ[?¾¾jÁ×ô÷\x000f¯mWîW\x001bëUækzÕzÖëýËÛ÷ßü¹Õú§\x000fºáýöàë\x001fd\x0000|8øýþëßÿîÃ_ÞóöË÷ÿgû¿p»þ\x0013¦uÍQ\x0016N_×é½¿>~±\x001d_Þ¾-¸÷¼ðUëÖ¯!M¿d~-Ä\x000f_ý¼>êÒÓlé<X
;­9È%H|be½®¬Øh_Í7¬3\x0012	¶/?uõAü9q½¶Ù³;]\º¦ï\x001cÍ/uc{ín\x0019)Ó­\x001bÛ×Öj® \x0004àE\x0006&îÀÊ1\x000c8¦ÛþQ·ÑÈN^J¦½\x0017ÁÇ7MS'OÒ¹©Úg\x001e\x0008·«ð2õJh\EÎm#"\x0000¿Â\x0001¹ätú&WÛýv\ðÝ#(ËND+~3²	[C\x0005ù\x001eü\x000fÁó\x0004é=¶Ðî\x0012¤·½ÂC\x0006-l\x0008Ñ4WÌúvõ¢®_
ô¹!CÕ\x0016Z<\x0000>³H5»-¢ØâêbEÏ\x0000Gë\x0002?NDÛ~6£ýªg'G;l\x000fvXÒ¤ýÚc¤ãªr\x001e,\x001dØÚ\x00036¯Dó*k\x001d71¶ÛÎIBê±óÚgúR»s!f­Ù³ÀÎÖ¢\x001c%Èo¾ 7¹gæ'jÔ\x0003°\x0011¹iQ²ÿïKòÐB¶-i\x0011N\x0007FÊs\x0008µú\x0006w![ÄÆ4ÿF!\x001a
Z(e7_ÐB'=\x0003]5t\x001b©Â\x0000¬Êh%ðP\x0006d½\x0007ôæ\x0010xß\x000b¢§ÄÝÞn$kÊÌ7£K3%
ÇÜôææ!(\x0016&\x000cÿ«!Ãïµ"þÜä\x0013Íï(vFT{õåÒ&mZ+bC`ú¾
aëÅ¶®bÑµbCtç£Ø\x0016æ°Ø\x0006É\x0006ITÛ]lg³Ø>°Æ\x000e\x0007êÐ÷#ks¾)Z \x000föè±sº\x001dì«4]×=`GvçØ¯é9ùdµ>ï\x0011»QÔ[àq­\x0018DÅ*w,ÉsÇÕÖ~Ì\x0001Ôõî9\x0007\x0006,êi/\x001aÀ\9Ð/\x001c\x0014~¢UÎ\x0018tËc\x0001´Öc\x000ct´\x0000aL\x001dhð\x0005½0 \x0012S|aÓm;\¢\x0019\x0017?¾¨¹Z©Þß:»¶÷ÊoÞÎU{\x0016ø\x0017BÖK@¯ã&ëe_gî¬\x001c\x001cÖËÆð¬
vî¬\x0017\³X.\x001b\x000c,\x000c,£:0÷ÿ­«EQ Í3«eb²ì| ±ô
*àª\x001d\<\x001dMw\x000eÞ;°~¥EÈ\OÄí,{díá!òÖSd oQñß\x001c<q¸ôö?Á
hÓ\x0014¿·\x0005z9Ê5ëR}º}XÜE\x001f
Tå³ÿjë¶{¹Á°Éñ¥B\x0000!òÙï"\x00015áºK+\x001b\x0005Ó\x001a¥\x00059U\x0007êÌeB$·,WZ<n¹Dó«TøÒ\x0006d¸®Û>Ùhûö)cNAÞÎqû\x000bÊd(ðûHÄ(~3Ô\x0001\x0019ÜOoµÕ&~N/eëº8Ùµ¤æ\x001fH\x001eB\x0013°H¶÷
ËG2¹jc¨É\x0001À)$\x0000\x001a³\x0006D´NoÁðËd\x0013'
Ap\x0011 õàRkåP\x0001¾(ÔÔ¯óPqÀ{PáUíé-Å\x001fz¿G?!æR\x0002Wj*JÌ»¾ïÄ×v\x0015\x0013ö\x0014Ìia;!È\x0013­dÝ6\x001cÔÓ ô§±\x0010Qív¥{\x000f\x000c7ÑÆ<ë\x0011\x0004í\x0011êv¥Îg	UvrëN\x001eIáÉ\x000b]yÒ\x0018aiJÏp#´g¸\x0018âÓýOñ\x0019Á	õ\x0019sÉ°R\x00026\x001fO]¶ª\x0000
î¦
%]À®BI`ªP2ØU(\x0019ì*\x000c¦\x000c%]´.C8\x0016o¬Â;]sñ\
2Þêj\x0016¹£½TyôÆ% =uuÈ8P:FBVFüBqFtS"÷ÃæM36jÄÇãÔîó:îTbì´\x0007a
å"Á°¹zú°¶~vP{<¢i²î\x0018!è­eü\x0012Et\x0003g\x0008\x001cí$NV\x0013÷°\x000f\x0011Ñ¤ÂÀh`a>»[øVXe¡SªW²F¥xì4\ùÿÊQ\x001bAæÜ\x000cä3é¯l±Þ{³$©U\x0013ªòbº*cR³±B]Ñ±B]íE¦^

Á\x001a\x0015\x001aÕ+4\x0015kThHÖ¨P\x0017¦ä\x0010E+Ûb>í®Fmg4Ô<7Úm\ê8ì6ÖF\x0013\x000fW¢ÁÑþ3\x00081\x001b"D16"|C]¸r§\x000bWKáÊ[]¸Ò"\x0017®´Â51ÝJ7]¸2\x0008T®\x000cKW/\x0004j\x00047Õ«¾}åÃf:/ä+ØåÖ¯ÆÓI\x0001«´PYí
6øt+Ø
ñÙòUãâYNæ\x0010ââDö§"í ¼uj\x00078^Üx\x000e ¶V4ß8ÀVS/£Yº\x000e\x000cÝa¯\x001bÖ3v\x0015	\x001aá¾<KJéÃDCÇ^öh\x0003¶C~
cõ\x0013[O6Øo&òu\x001eÝH	v÷*%_¶1\êouÑäÄ3[àÒ©Ëî¯~\x001e½\x0013-UvvÖ¡Ø³ëF*Ø?½	xØ[.\x0016!Tw6¼æg«rm/ UO£¡ÈLR6ë½ÀÕ\x0019ÛÑÐDÜ7°\x001bù\x0003\x001a2°V,÷Ó²}-zÛÇêBæ
xyUØ³á5\x0002\x001a\x0002´mÄ?Ò}¡½<¢*=­Âª\x00000µÍ,*yHg\x0005ÅÆÁ½7ZVj=@\x0015ÆÛÌ\x0013Æê\x001b£0 ¶sÔ\x0010\x0012\x000cÔ4ºìKUî\x0000¬js_;·^*ö\x0012Ûöp×üá8Íü^&\x0019kv\x000bí^\x0011c;.Õnà3
¤d\x0016\x001cY\x0016Vp×éO5\x000c:c¬
ê:Ý6m­LËýð1Ñð:\x00074·±|\x0018Y·ØHÑ¹g\x001cêÞM\x0010\x0019±.M»\x0012Î'½ 6¤\x001fØÞhÚ{Çµ~¸sZå¹è&e»
vë¶FBÐy4-aï¶nbk«~JO½\1\x000eÇÞt-f\x0016¥c­\x0011<¸µf|\x001dÝ,Ï§ÆòØ\x0019,Ïsåqg°<ì	§µAóðÅi\x001en\x0006Í3\x0008NóP\x0010;¢(b\x001bÄuüù\x000f&\x0017¬/+KÇ¼¼­7È\x0015`DÓ{ÝD>\x0010?#|P\x0010;|P¾ó&ò¹#|àP\x0004úx%ë­xÚ\¨ÅN´©*cu0Ý&­§A To\x000fkQ¸£¦/:S{ú2þQ\x0010ÐvFF\x0008ºfð\x0008Ål ÞZÁèpM:¬\x0005Ãº½^p)¼(Be"Ç\x0016¥n\x0001\x001eeSÕ\x00005\x001f´*xB¹\x001c\x0012Ð©m% %9úÉlkeÉãi)³d\x0008¹Ï]Om':¹[Z´¬¥ßöêXKgu\x001a:ºlF\x0018°tZ[×\x0011»¶·\x0018äý\x0006*|l©x¿Qüù5\x001c¶´¢\x0002Ò\x0011\x0000tJìµù¨3xëÓ¹\x0017°ÞsÆ=abuß\x0000ËõOaB}LaÒiÂ ¯»6§0ð®5"o%ß4§ûñf¤\x000c÷­àJÉ7£VlQÚ\x000bÜ$ßú^ô\x0014h>ã\x0000¼<Ü\x001a%E»17òx\x0013c\x001c\x001dzÒ6\x001dPG³[¸Rõ¥Ö\x0002Q:àR}¹üt×¶KÓ:GY«-æ0P\x0003Øl®\x0001é¼PTÌª¨uîêØØ6\x0018Usjñ!¼6Àg\x0004·ùÎYÄ\x0013aûÆ°Db¨\x001dI\x0013ÇJ{eÿQd²\x0004QÖ\x0005ú/×UeË\x0002ý¿ZÁ?©YZO;mÔÛ¿Û12_[UqS\x0003 \x0008Ú«×¶¢sKUö²ocXTÅ#9ÔUÕ®s¹\x0013NÄ/³·Bû\x000f*RÖÑ\x001eªB¹\x00051aE©|&Ç¨,Ðë§ì\x001eõ*-UQ>\x0008¸Su	­§Þr~$Q\x0015/\x0015;8Ý\x0015\x0011hZÍ¼Ñ5)$¿]b[pÏ=4)®\x000cÖ
sÓ®±ÁxáJ°¡½L®Ì\x0018\x0010ï\x001d\x0001bú·\üQÍ5þ½Ø*>s\x001fm÷©·2pcVê½Tù­b«·âàõÓmû±g=6jõQ?ÊJ~4Ñi-ë\x001c\x001f\x001fe"k\x0001:Ûq6PI\x001eñÍ¼\x0012»tîAIqaÐU\x0018\x0013dvM
ª³#Iv2I2C\x0014ê\x0000%½:x>	\x0018	ùûÁ\x0012A$ðJÔc/\x0013
**É¸õ©**ZÛ=I¢µTò¬Æ\x0012k\x0002,d¶kþ¨\x0018ë\x001eI\x001dN\x000f
\x001bÍY¢¤rZ\x0005\x0018É\x0001û\x0011>Æ"3ð\x0012ßOr}Î\x0012l5µs\x0017=îò×³öÐ\x0008Sz¦Å²Ç;1icPZæÄ-5?[«d-Ôý>ÇPóå\x000f
\x001bÖñànù·¤ÀJD¢ïlÙÅlnÙ@¬&µl¦\x0016WÆñÎ²\x001f¼.Ð3ÕJÕnLv¼E¢\x0001x\x001f}íphhD Z}\x00119ÌkÇ°õ'wr¬÷\DkmÛ [9\x0002ö´h(çÃÜ.\x000eÓR¹\x0002-VÒK\x0019\x0003¾¥,`6hi\x0000\x0004¢*w\x0007ê{&ÒÚå.¦¯¸Ú-®án 6µ¶ª\x0006§F¾\x0007E\x0007°Ýn8ã5VêYU¯2Ý\x001bÂ\x001fùtì/KKÇRe\x001cI\x0004àyÔ_\x0016j\x0001h
!5öì\x0002\x0007¹ÅÎ"NÉsYÙ^ÚMö<\x000c\x0002\x0001âOX\x001bd<æa;ÉTÝ\x0019Ç«\x0018øÝQ{Ô\x0019#¤\x0006hAmÆ7\x0016êÎ]x5§­÷\x000eäÀZ÷zäËüØVUi7¹e]À;_1GÌr£\x0001äV£H\x0005ºq\x000cìýýàVu°NjqyÍÔp¥½2²@'O\x000bh½WXeZø\x0016"În[ß)\x0018WûEB\x0019F\x0008C5fÊ¦¦Ì¯²±3Röë×+ã¡Ã\x001a'Á552deâu»%'#µn\x0008"ñ"@\x0011¼\x000e¦úÙ\x001bêE\x001eÓ$\x0005d¸æv`ð)À(k\Â\x001a³/sí\x001c©nhFI\x0016\x001cJ´;Ö ÇâC\x000fÃYZ\x000eD\x0019ì\x001c=îW1Kìü{_æsý¹Ø²%Ðz&xðàÁBÁI\x0008Yð Û÷þð \x0014i[DH¡þ\x001aDÓ>D\x0008aà¢+(­5®£FÎªÒ>_EÃ(o\x0000ï¹\x0011Þ¸5"\x001f\x0016Å»\{ãÕÂxÑ\£÷¾alp"Q\x001c½\x0000\x001f"\x000cÜHñ±¯bj\x0019÷T\x0010j;,ªfê°§IA¥µþß,BÌÍñò4Þo\x0014ÎFT&ý¦QÓ­\x0019Ý6x\x0012Ê¯x§©Ëi4¬iNr\x0001\x0015\x000bûIãêd¨L)\x001cOÎûï?½ü{FÊ?{
oø\x0003´,\x0006"Ä9\x00153y\x000fp\x001fÃ\x0015SùµZ\x000e°dÝßÔîxÜ}\x0013\x001fHc\x0002¨÷OÉ\x0000×r>_\x001fÏ±*\x0019\x000esç[§\x0007\x0006¥=\x0000íi¯µÀe¬ô\x0005èé%ýlPÆü"H½U®d\x0002ª;ÕÔ\x0005¡´¶\x0018.ðï\x0007sªidU\x0015³\x0004¨
i¯óÄÞ¾$7¿ÎÖ/â^?ô
Ç¥Þ\x0003®-)7¿\x0018õ$ôN%x[A:[\x0001ð\x001a·\x0015ðÑh_ì,\x00121÷X>¹2QÆ5¨W'YZ\x000b\×íj@ÝÑO ñ\x0002ðt°\x0019£ÎªËð]àX\x0007\x0014d^T©bJ?¦+Õ^Üßæ\x0014â´®X£Ù/ùìr\x001a[k\x001dÇÀ5Éù\x0000á91-<ÅËÕ¾ÐË\x0017--\x001e3"°1g°dø\x0008Þ7°\x0003ïsº\x0010ïÕ{­iÌ\x0016×<:¨!%ÒÍÒO\x0005Ëâ\x0005\x001eÈ®b1v\x0003¦È£ö±\x001aY¼%þ&Â\x000bÆ;å\x000f\x0003,#ýM£Q\x001bc£r£ªÀÎCØ\x0014Ú(HÔ~QN±üzê­ãG
@ñR#¤l-)â2gCÑ%wä·í&¤mA:÷Ð $_tekÌÒÔ¤:;4h'#3\x0002L§6"<\x0004kEà\x0012dT#a
\x0013ZRfÚ\x0007¢ \x0016*\x0019vAe·Ê	z
N«d)"hè9Y¦¬ûvøÑH¤µ,ñGÝ/ª\x001f\x0000ÇE
\x0014fò¡\x0019ÅmòÄä"ß\x00174eSÃÒÐd8»ìg\x0017\x001b3\x0000É\x000eO²j¨ñ@äM\x000c\x0001ùûÁíQª£y©{oínîÉÁ¤>PÑÚvÜÜÖ¡âk%Ö®g¹Ë¦Ó\âG¥X[MâPXºîÓõñTÑQ9íREW6«¼#%_h\x001d\x000f£b££¥\x001c\x0012ô|£è ]ô¸skÚ<KhÃ]\x0012b§>,"j\x0010ñÚ¡gÐ'ËYËr\x001fâP§ôÔÞµÏMã¡\x0003\x0012}X8p5ñ·ò/1ñ\x0006\x0005:È#q1\x0010È]½xà7X\x001e÷l0\x000cVãh?^\x0006hÚøcóY!c\x001et#í]ú¼vùÉé\ÿ\x0019xËhÉé1\x0010ß¥g£sØZe\x000f\x0015ßvÓh7Ñ\x0012±\x0018ÄÄHa<òp\x0010ÉN¸\x0006ûì\x0000\x0008\x000bè
Ç\x001bvd~Yf¢rQÑ\x0010¥ð\x0014\x001bÙ`h¹9LM¥XÛ¶2  \x001dºÇ©r Ó\x0013ÁÑ­	®~Óc_G®ÀÚB§à\x00182i\x0016_«kd©c0[/|ærì»\x0000\x001fù\x0017ª\x0011+jqh/\x001b\x0018\x001e!k\x0007¹UuóTÅ©?jYÝ¤@MUç$\x000f³Á©\x0011UR[ Rk\x0004U¡><éi¢\x001e
¼AîïäÑlë~
¸hüüm¯u\x001c)\x0001þp¯¼oL\x001f\x0014`Ä\x0002YÄ¸ÍH\x0016Y\x0003\x0013"ÄÕÚôA¼\x0012á94Q&\x001eS £\x0004îà\\x001e[Tå¨ñ¿ÿLÐÛ«Ä'Y}§BlO5Õ+Ð8óÕ¶ÀÝ:®O>íJQ<É'!s""ë¤\x0006ójo ©¨TâóÑ«¼_\x001fûÎ\x0003=áù\x000b<­Ìy+Pï=-\x001aÇ4ö\x000eªt\x0006 (ý7lO:æ\x0017¢Zz^`^\x0002.Q©Ä_L)	T­Û©2Z¯\x0006\x001d[\x0014
\x0015hÖê÷´ùj[Úk×¨|éÚ\x001e©\x0007ã+\x0019£v¥ø¤
\)¶3Ö)Å'q½_È+w¢×Ï¹\x0005v/e¦øõiÐ$»­×\àj×è\x000cP·kttrà]o\x0018§§?\x0006	hÕ\x0001|ÃØj;ëJ5Î[Z»j&XSÓÀRS3±G}Õ8SùÔTãLåvå8BtÖyå8CÆþb9>)\x0002¯\x001egxK¹z¼vêq½DM=>+/õø \x001eo©Çù¤'å8ÓºWóõýrim^§\x001cg&[wX3vI9Ùk9þ"+ÄRY\x0003ÒQ\x001f©E³x,T£®¬a³èRáfIZÿf¹Z\x001bg1§rÎR·®N\x001aäÎ¼
9\x0004ßÄ-±-ç\x001e\x001a¼ä+³lN2Z\x001a|gW\x000bíe2eÆ	UOÄÀ²zï\x000b2¬³)È\x0013[Vfö[rfm¤ ÍÊ±\Íª²ÍK¡\x0015i\x0019Õjµú9*Ýâ:HÀª;"<èÃ0Å»uòÄ¤$ßte[ÌÒÒ¤:û4h\x001f$3\x0002I¡OÒ«cèÀ%É_LINtZJrÛ_ENè±Fì\x001chôñ*òAE^R³6êNEÎ0Ôù*rFÉEï\x0006LK-Ró\x001dv*råq\x000bEÎ$>åUäLÜg§"çS¯I|ú«È¸X\x0014hïTäJâú*ò\x0019"Õ<\x0013Ù<Ñ\x0003Wó=Ù1ÿV\x0015X
-Þ©`KÈ0d=°Å7óoY$Á$VÇÕä{WÝ2ó\x000cé9ÁÁúÚ\x0010z \x001e\x001eÄü·ìy¿\x000eëó!JôPsÄÅZ\à°p\x000bf¥\x0001\x000f	¸Ñ­ÝK_ú\x001eèñKLVRÌ\x001e]â\x0013kñ@M_+OêÊÚì2\x0017-éÝÀ\x000eÒ/aA\x000cÿ\x000fÆê\x0017wÍm\x0017¸»ÁG &0G÷ÁýdW9\x001dI\x000eóu
]`Þ}96¤û»\x0003\x0010$#[mUágd$W\x0010\x0011L0$áÅ6~¦|+ÕÂÀ\x001cÐói»ÜVÈf·ðª²OÑ¾Æ³\x0008vQuJ"\x0015B
é)x¦\x001e2\x000cÈè´\x0017ë¾Êp³Ú Ó-ê:;Úa&KCÚj\x001c7øÃô\x0014u»Q¢3ÄÅjÏ´7kN2²qHx\x0005âúñEkÝW®6$R\x0013ìm î\x0005A#\x001bì« \x0008d<,\x0002¿íör¬zñ\x000em¦w·î(3Ã£Qº»\x0002f1Ò¤÷ð]£±­Ð+sêeî/zçµ^æþQ/s·Çë<­õ:w_¼ÎÝO¯ó×¹ÇÈ+ÛãÈ£ë+üû©_¢Mm¯d|t®O%\x001fiN¯ä\x001b-p\x000cÆ_%_#û¨dÈy²¡¸öúT2¦\x001bÏz%ªÑ>/ÚWÍ\x0004ÊQÚì)ÒÖj¾	²úÜìï÷Í-måö ¦ú×Z*î®` *\x0006æ&¼ÿÆàØ6\x0019\x0001\x0002ÒcÁKL\x001c\x001còÏ)Çû\x00124	¬ñJTM\x000e
\x0010(Ð¸C\x0019woq
§6ô*µ\x00055»µ`ZÛ -É,
©MýkG+\x0012\x0004ÔPÇñ¢ÿÞl\x0016c)\x0012\x0017°ex\x0006[xsqë¶j\x001e\x001c n\x0002\x0007möAÈ\x00153S¹¥cÅB^ó£3CRl5p9
5\x0012XÁþM¼×ý/Îà;6\x0011¹©P-\x0013\x000b|OtM\x0016å\x00163ß´Ê"Pôè·×Uqèòü %\x000cÐ2´kO9n"hsnKI+\x0005uJsÃeÏ#KKyz¤/§ZÚ÷^$¹ü*tÊÁ,B9þ±\x0017:êÜô[×\x000cG\x0001nýD\x0001t¯ÑPÇ+|\x000e2\x0017#öh\x0005p\x0015QYÖ	èÈÙ\x001dîí¸àÛ\x0000cw\x0015\x0012\x0019\x0000¸^I[Ô×^¶\x0019!
ü×¶Ø<\x001c«>\x0013\x001bÿ¬¯ ½û7à\x0007Ý>\m\x0017%:\x0016\x0015\x0016\x000cÐ±ôO%\x0016ÙCÎLXk2\x0012\x0001¬Z³ge¹/}k\x0001bÚÀX¾\x001c~\x0018\x0004%fË\x001dpL·ucº\x0010¯:´| [\x001eLG¿\x0010Þ\x001djY0H~\x001c\ª£*\x0005Zv¼C^\x001fn\x001c¹öýúá8#EB½ÃÌd¼ý7\x001d 0ÊâÚÇÖV{\x000cÍyÕÍúð\x001aêuÔça;Zä*FÝaÔVÛd\x0008-ñ\x00079Uü­%\x0013È\x001dR!\x0000/onO}\x0019ÂG\x000f¨l=&\x0002l÷=¥æ[Íôð»\x0013
wn~\x0011
§V5kºUÍ³\x0015
7[zÒÑ>'½$\x001b÷\x0017®éâña/Ö#EVgOýD\x001e\x0013¡ÿâÌcÜÒ\x0007jÊÄD\êÔÖ×YÀ¥ûÞkF½c_äw½Øl¤C;VMú®\x0010r
E\x00144í¨\x000câ®¾¿\x0002°öµÙz\x001ebëEØnþ\x000c±\x0019zË²÷©k\x0004;\x0014S7\x00132á\x000f1\x001bÊ\x0012K!P\x0019:
_&\x0013êâ(?lêc\x001a\x0015û\x0015Ðê¯\x0006æx\x000b\x0014 \x0016&nW\x0004eúâõ¶²ÀÓF®¿GÕ×ãÎÐúþ=m<aÊ´H¡T¶\x001bPrígx¨'üçzut^ÛpG·§§ÆF{(zv \x001c\x0005iûyº]Ô¸cÛ\x0016\x0017'e\x000eJ©hÝ¡[PQcÙ"Å³×\x0016\x001d®FmêìaPÙhËLÙYê+þù¤Æ¯\x001fÀm\x0019[l0\x0011PoVá\x0003Î<¤\x0019\x0012XÓ>Þ¤âhy/e-jù;ÍÂ£¢±úu{³~Ý\x001b/`÷Ô\x000bØã\x0015¬(y\x0005+^¥nVð¶hø3Vã·P~ßàô¨ù=\x0014E{Í´,\x0010ÏÒ¥Ô»\x001f¨¹qÒG,\x001eý\x0005\x0000Ðõ\x000bÃs¦
T\x000f] \x0008l`ÜW8ü>\x00185ýÅ\x001dÄ\x00197ÓÒ\x001bÅÌ+^þE-U÷ù\x0019öns#¼Ùæ¢\x001a Z¦Ì8`ÊÝ\x0013A:¦àÔåMCG\x0015['º(k¡WÖùÔÊÚßôtæ½lÿ¨\x0017\x001bäeæz\x0011í(N+09\x001aå\x0017aâT¢p\x0015¿1®m\x000b/Úàgy.\x0018¤~h	\x0006Ï
´ï¤³«µ4É\x000e»MI'!M"Hë\x0004Z\x0008mJKìi[
\x0004>\x001eá\x0016²Ô\x000f}üÅqóãFÕÝÄ¦\x0018*1øv0%x¯ÇÕv`JÌ\x000f¥£\x0007Öü0%ÕûIªô!íæä\x0008wc}ÀË\x000f~÷1T\x0007 
~½eäòÎLSi,æng$mõ|¹'K÷Ò3!ð:Px¼B\x00147\x0007ÙÌ9ìã=h±óV°íXú\x0001\x001bõÓaÏNk»ùþê\x0007Ã¾fùâq{\x0004\x0001º ÖOù\x0000ßåñÐ_hÄuæS6:	P\x0001cÌT¯Ãï\x000c³ÄèÃFR+-ç0æ^\x0000>\x0010¬äÜ[LÿÂ&[a	i\x0012È\x0016\x0012²8qãJ63\BÜË
¢á~Ó\x001eÈJk÷:üýàG\x0019Iîz"ÿÊ\x000fôãa müÞP¿ðÎ2Dk½Ç-Yt`ou]ãtYË8­\x0015\x0002}\x0012Þ1XÍy(¸\x0015f\x000c´2þóãB\x0004}ü!\x001au\x0006}\x00005õ.é\x0003¨Îþè\x0003¸\x0015ôq¡Lz\x000fú\x0000ZýÓçâc\x0005\x000b\x0000µÖ!.y×£\x000f`îPï©-\x0004þ&tóúÞÊÜ©íJImw¡ÇÅÖn/j¼$\x0019\x0002ÍÛÒS*ûõh\x0014xI²º4ø÷\x0001õEÅÇ"ëÚ«öB§ýjÓà
f5F\x0006\x001aöÌ\x001c'øÎíoØ\x0000/9ÇQDçF1uÕ 9Ä\x0018¦[cÄÝn«¿\x0008w\x000cG$££ºâ©4d¼9´"æ½SRÛ¿b)9\x001cVý\x000cGàÓÞp(oæé\x00025}ãÈ¶7\x001cÎ\x001b<Þ§\x0011\x0017o:&¡YüÊH\x0005TÜ\x0014Â H\x0016ú¶µ½\x0018ªÖ»,æau\x0015ÍøqÉ14Ås§x1·#~²º/:º°\x000f1¸Î{Cy8zsQòÌ5\x0007qç=1cÏ¡¯Ã8¯ê{ìY3"cê«ÑpmV&¶zé\x0010ëXô}\x001d\Ú\x0011cn³êxÈÅ´c!Ñ\x00006]¢;bôDïh0E_ihE×ÅHÔÀ~Õ0nQ\x0019½®A\x001a<`36ªÖço09¹økN=y©\x0013ÒIËÍqJKcðÜ\x0015'CwÓ2CÀ\x0005.Ä	K¿\x000c«×«ðïÄ¾³xåûÎâ};wô|t´~ô[l\x0002ÑÚ\x0013¢SµCD\x001fÇá]®íÃ	@{Ç9v\x0016§|Æºñ·ròJ'$ÿ \x001bãT¦:Ñ¹#Nî¤SdÀ	Ô\x0003ääêÁs¡~\x0018\x0017þþà\x000ecÕûðwï6áSÆ¯¡ÕÎ^­³µ\x001aÙÖb\x001dØ«ÓvGë¬Ù?üZ?îÓ:TÿL7hBeÌú!íÜlÁ\x0004,§b*!ü¹^ÈÆ^Õ\x00128ìäZÕéj¶9Õ
â\x0005ènC}\x001aAr\x0001Qa°ð32ÅÂ¥ªÆ[¤\x0008>\x0006Z½ë,\x0005\x001b0UB2ª°>D¸\x0019NÍ9\x001b\x001fQP#ö\x001fb£7\x001fÚXÀ´YôJpÅi}\x000e\x001d©]¢ Ã@sIÂ©ßì+
Ð<W\x0016\x000c;Úµ 6ÎD\gun¶ñ&cÑâZDk\x001f\x001dµoN3aÏ´ª\x000fk9o¶Î+\x001e¸Ç½T«E\x000cÍ«ÌaGG·§\x0014ø®\x001f~ý¨Emä?\x0010RæÙ$ë\x0006Ï²ãÍ:±\x0016ÐW(Æ[]cçÚqtÒ nÓ³¬·=¿Ó·ÍãèÎm}r¯nG3\[Ù¨Ò	Û´¾áÿ@µdþ äÛàÑ{ßíìv·åj\x0002\$5M\x0003cJ¦é>\x0004Ò³b\x0004~êÉ¸\x0014à4Ù\x001bOH- h\x000bXbÖnïYßË_\x0003(`¢Ds|øX"ÚÿWÓúL*h§yÂKå4Ã? óñ\x001epÏ\x0013±\x0001ZEFuê\x001c«¢pov±Ý´l\x0006ÆgÐ6wé]3ZÌÚÈ\x000ctæÖ§sßv´ùíúO\x0001yêPÑ
í¨@®ô\x000eÕ5­\x001f²¦õnÖt\¹Õ3ó2+\x000b#¬ÎÂÙ^^Vò8«.\x0002U©xeÍ*\x001f(öàuÔs\x0019üÏ\x000fd\x001b3gÞ "Â±Çc*³þÜà1B¶¹ÚÖã@\x0006ãÊÙ^\x0015r=	WýlDüáÿWI®\x001dÉ
Üë\x0014ÿ\x0002ÕÈ©r8Ï ØèEka/|~ÇÀÌª÷-\x0003¯ÇC0\x0018lÞ)î\x0015XÏùlSQ³k\x0005ñ»"¥Øµ>hû!MCð×±­zC­L¡G+\x0005æÝ\x001fÝú'§u(Ã¾(AÃ¡q>\x000eÁòÈ\x000ew¹æÎÃ¡^mw {Ñ=yð%¿{²¸?}²ìO	ìÖ)ÑöúÐA\x0002çCL\x0002ÀNÈ\x0001²uÐ£D\x001eëaÐs¡Öö«hoëz«\x001cºgUÊòxÎeâ\x0003\ÔvýA\x0017A{òR5Ä^è¢Øi\x000fºªNßI¯á\x000b) ×Ý\x001aVuÒÊ\x00014ÅæÖÀ+©éYIü\x0013^\x000cuV(_º o££\x001aó?\x0010Z(eêÜý.¥©~bu:T@~\x001aªKÊ»¡@\x0003³>
\x0005~:&'h£Vâûû¾V§ýò­3_\x001f¿5BÎápm>®AY¤\x000f×¡&îö\x0004ÆÍt=a#C\x000cl\x000b/^¨}nU&Åb{YÖsÀ\x0007àX÷¿Þ\x0017ªhÍ\x001b/?_L+¾öë«\x0007É:\ËCÁ8­½\x0019\x001a®;Rs`â<üN}ûÁÿH\x001cùÏ\x0007
ÖüL¨Â3]\x0018âýÜGMïü¼Mâ}|¨mÏáÈ¾ña×P¬ß®\x000f/¦;2¼æ@\x001d÷ü#}¤\x0005Çôõd
>X5;§ÇÜE\x000béY÷sµ¿k5¬8·+ÍK¸²P\x000cÏÛ(÷{#©ûW¤eÔ¹w\x0015-V´Ï%ìrÝi&?ÞÇpÒ\x001bÚFþ,æâ\x0012iîÛ%RËb\x0001Z3\x001e/Ý\x0017¢QÒ\x0012wÔ»»\x0011Uh+ÑÍcÅpêä!°Üt£ÜÜ\x001a±¦ýxR©½Ô\x0007ëE\x001bìËÜ\x001c\x001b\x0017£m£«\x001eö®Ûì\x001e=	f}÷,xµï&TO'i§Óñ	gy\x0018!Iz8/b\x000cL¦êûâ\x0013ÉÉ\x0003ô£MFq3j¿\x0019Dö|9n\x001c4¸ý\x0012I>^\x0007î¨`wÌAÀON¼ZOÊ`û¤3¬'Ûq_øë¹°h\x0019L:9êÊ\x0002£ÏRÃ%ùÚ\x0011a§jWd!FV´³\x0005çivhwÍGsAÒBç$*p7¹%È#°z=Ù·åR»¤¨ýf0Øóá`¸}nðßöÊôø8\x001dì¹
nÝ!z\x00043ï\x0005oïtùäÿ¹\x001eúë}¡¦ì\x0017v¾\x0016ïfq~,7_öãs¹5³©<5+q\x001cã±`ºAZ5O,w²õ	9ÈIMÅÛk ¾\x00151\^õ!\x001d¤+ía^¦tC]\x0001ú!¼³	nééÞs`!eI
¬£Ö°U¨7·Æöb6\x001egÀl#@9z\x0011\x0004u÷À­÷Yè\x0003{zü2\x001f¦?\x0017JLZQý¡p~þøÇ¿ýèÈ\x000c\x0012\x0007ÏAzð\x0017]aQ	mð¯¿ïÛC«`Ûx¶\x00031¸ý\x001fÿü\x0002Vñ/
$d Qý,øöç¯\x001f¼Ã¿Ôp\x0013 Às	#Q:\x0003Ð\x0006KÀ"ó9Küü\x0001»"[°\x0003¿ÜQÀ\x0002Aqd\x0003°b«­ík\x0005TZeX
û^ÓL½lN\x000f ­³Ù¤^Û¶ðlÅwó¹\x000bÜµ|Þ¬"çç»l¤qNm\x001a/Û#\x0000\x0013\x0017\x001f¨wG\x0003°¹\x001c(rÝ^I\x0000d\x0004	§è\x0016uîôÙrZõ(Í\x000cS\x0003<?vÞeäd¨uuNNî~@¨ÍÖÁøÒ,2§0Ê­qu¹WrÛ\x001dÇyU5\x0003'02àd¦üwz:{\x0014­:%ësÕ£@ËI»-<\x000bú¨çf\x0016Îö¨mªÏW\x0001»#uÜIêp53"
iôï@I¡{ï´\x0004Ð1\x001b;Ù¶â?ÕA¯\x000e\x0000\x0011LÔn,LÐÌaz:\x0000nð)°\x001dÏM>\x0002Ï\x001aùüjE\x0005î/N\x0000Á\x001e¸éáéÏ\x001fÈÎ\x0001h(:\x0004÷b\x001fë\x00140ÚÙ©º³k ïßüË§wÔ\x0014ÿýõ£z%ý4ýÌc!(\x0005\x0019SuÈ"vUx¨Èi\x0016\x0005Uh\x000c%)*~
b¨>*	 ¤q¤Àw¤(e\x0005â	víÌÇ\x000fnm\x0011\x0006T5[ù\x001byÅÍ.?}+Ö\x0004·ÉbMü Âÿ]±úÿS,ôæQX\x0008±1b\x0005\x001aøf©Q\x0002¼ÆþC^n«UkF®N¹ôÛåB	 ¡^\x0005åSJ¦9õÈs>õ(íÔãë]\x000fË¨G·Ô#ï°+Þå\x0018ÃåXÿ³\x001c×ÇëUBqñG}¯Wñ¥
ÊèÛë\x00133\x0004mû×\x001bg×'\x0004¯7:¯\x0017j¯7MH0'¸Ù\x000csÁA-"üÆÚk¾OD\x0004Ñ\x0017\x0013Lzq\x0017ý\x0002xi\x0010ÉA-µ ²\x0012D3ËWD\x000b\x000eÊíÞ¹ÅuMyc¦8]ÊØz-&OzFÒçu\x0015$^Q­Îç\Æ8Ë\x0005\x000e7\ûã£aaÿ
,´Ã\x0016Æ\x0011#Ï©òogq#tâ19¤*ý¥!	¹1	<¤\x0014á\x0017fÔ\x000bP8/\x0005âtÎ(oí!\x001b·Æ²\x0013³g ÿ·è#LiÞ/OTâ³Ò\x0010]ÂªpÇ\x0013§~qD{ÑÀûßLxÁÃý2ýzî_æ_\x0002=H\x0002¶bùf1q}Rðõfçë¡í¹¿¸)âÚdOö\x0008?L+áãf\x001c»o.¸LR\x0011òæ/gÃÌv\x001dºÃ¿ã\x0014²\x0006&ÔÁ9¿5\x0017x\x0002Aj\x0018ñ\x0016\x000fGQYX°e\x0013_äßA©º"RÅ¯QT!®½JT\x0001^T±EÝ5H\x0015 y8\x0015Ë\x0017PïÄAl\x001eN\x001dÂèæTïîËì>¿×\x001e°Ö\x0013¿±þè->\x0005¸ß~HÄÌu(FG|í\x000e¿`(õöâMs¡°±¨Â\x0015%%^w*¥.7Àjýq£\x000eiÿ8È
ÛÅÒ\x000bQÆó­¨q\x001cäê\x000bíÞF]ßrT¶\x001dq Q¹\x000848Gaìô}W?\x0010=uÁ»)5;?Ô\x000fû\x00035\x0006BZ¯y_fÇ\x0001× £\x0012FËQ4>,¨-?M?ò1cM=ô\x0008c»µVõ9¾LñÔ³=F \x000bskå0CûÅW(\x000bÇ>a+Æ}ºÄäöË2s;m\x0005\x001añHö-{B¹F\x001e¶¬\x001cæÝ\x0003Õz8_µy\x000bW¼czk­úcîQÛ} ¸QÎ¤{\x0017õÕæ\x0010À\x0005ÙT¼;ì|¿àÿÞ6{}äýúVë£b1A£×·J?¢0¸>\x0010r}Ïõ­ë N\x0016\x0011ÙÍ_YFb·#c¦\x001f·¡Æ.¹8WY_ýLÜ\x0011¤Éé\x0010\x0006§Zß!ÝóÖgc®\x0011­ÏÅ¥ÎKÞÿ­zÝ¸¼0Ä;×ç÷xH­û¬Ë\x000c\x0014n\f§ããeê\x0000Ù²#cÿçñ-\x0002(;'×Gº®\>h9&k¸Ô/Ãª¨vuHPÒm¾\x001dú"ö*awª)Ií_å\x001f×Ñ>N$!{rlÚÞcÄ}øµKSBÄó¥!TR\x0012+ \x0013µ¦§%o KÓ8;\x0015£êkËpZõ>Ö^\x000f¿Ób\x0007\x0016\x000b8\x0017xÇ^R\x001fV¼¬µà\x00123±4xHÈßwÈß\x0001\x0000QÂfÉ7\x000bÍ\x0005áadVO\x0003\x000449B¦A\x0003-Q;åæî\x001d\x0008\x000f©\x000c{.Nªu3±\x0018¯ÚB¶\x0001fbfÛmU1Ðl¼[´^AÍ·$ÕaDÏyÍß]H2åÔ\x000fcÑ]j=¦shä,Lf×jz
b\x000b-s,\x0013Ò9·0\x001fý&$\x0019þÒLÇWqD¢>¸{\x0000½ðÀRD\x0003}RÚ\x0015mk)1\x0006Îy\x0002*\x0017mu^,vLî\x001c"ÿª`Yg3Ó r_­qrÕÉ"j×\x0007»\x0004n:*i½]KeÖ\x0002±W[\x0014o¹Eç·5Ãü0þ-Á\x0014P.^©Z(7\x0013Jv°·ÔbÃÊÓ9öNB\x0000úÔ4\x0010sjEÊ,×«t½M¢\x0010L\x0016ç>A p³\x0000¬z\x0000¡dq\\x0000\x0003\x0001)-\x0006Bí\x000c­¯¼AÃe\x0003°-äß\x001bÜpÒ×,fÎ\x0011wYý^·
w	MIÑ²\x0014ÌèZÓzÍB[\x001erOã\x0006gÑ
${@4iöaV\x0018<\x0003U1×É®j\x001e4p«Éû&p\x0000Ê\x0004\x000bØõà"{U-:Ê¡\x000b¦mm\x0005jä\x0019Ò~¡ÕxôâYnÈ\7Ê.Î;è^\x0010B3!H
9¿ßù·Þ5|r@%Ï$\x001dðò´K<FH$óæbL#a\x0012k7Â_d\x001e
\x0004²ÑCM\x000f"þÃv\x0019ä\x0000\x000c@ðKµ¢Âÿ?Vv0±\x0007¯Æ(Aww\x0008M\x0001û\x0003¶¡³V&Ìµ_M©cTÔº\x0018òô+¦sêeÇ\x001aó
s\x0002³Bñ±áMóTVñ¢ü\ÆÈ0Wyº©;2'ý[dòø¼WÁ#Çå\x0005=Ïýs \x0014\x001c´\x0016ªÁÙ Môý&¢\x0012ø°WuÒÓ\x000b-æÞ;Èì§X\x0000®c:<\x0005~\x0002\x000c\x0000òo
endstream
endobj
7 0 obj
<</Filter/FlateDecode/First 5/Length 176/N 1/Type/ObjStm>>stream
hÞÜMÝ
0\x0014~ÝG):'`?\x0006á\x0019\x0012ÑÅÒ¡»hm]ôöm\x0012E=B\x001cø\x000eçû;!E\x0018e\x0019¬á¥\x0016Nõ¾-ÅNÙÝ\x0018F\x000b[Ù©^È\x0001Z!\x000biÄû.6v=2H\x000c>¾á¦Ób²J#êk¨ØË\x0011â\x0000\x000e÷«}L\x001c\x001a\x0007\x00014ê(kâ(­[ÜÞæ¤\x0018}ODó&AêÐë4þ¨$¢(!sÿ9$Á<
0\x0000ð
d\x0002
endstream
endobj
8 0 obj
<</ArtBox[0.0 0.0 595.276 841.89]/BleedBox[0.0 0.0 595.276 841.89]/Contents 9 0 R/CropBox[0.0 0.0 595.276 841.89]/Group 34 0 R/MediaBox[0.0 0.0 595.276 841.89]/Parent 40 0 R/PieceInfo<</InDesign<</DocumentID(þÿ\x0000x\x0000m\x0000p\x0000.\x0000d\x0000i\x0000d\x0000:\x0000e\x00005\x00003\x00003\x00004\x0000b\x00002\x00005\x0000-\x00008\x0000d\x00005\x0000d\x0000-\x00004\x0000c\x0000e\x00007\x0000-\x00008\x00007\x00008\x0000f\x0000-\x0000e\x00006\x0000c\x0000f\x00003\x00002\x00003\x00008\x00001\x00004\x00009\x00002)/LastModified(þÿ\x0000D\x0000:\x00002\x00000\x00002\x00000\x00001\x00001\x00000\x00007\x00001\x00004\x00001\x00001\x00001\x00003\x0000Z)/NumberofPages 1/OriginalDocumentID(þÿ\x0000x\x0000m\x0000p\x0000.\x0000d\x0000i\x0000d\x0000:\x00007\x0000a\x00002\x00008\x0000a\x00005\x00004\x00001\x0000-\x00006\x00004\x00008\x00000\x0000-\x00004\x00009\x0000e\x00007\x0000-\x00008\x00009\x0000e\x00007\x0000-\x00004\x0000e\x00001\x00009\x00006\x00003\x00000\x0000d\x00003\x0000f\x00002\x0000b)/PageUIDList<</0 817>>/PageWidthList<</0 595.276>>>>>>/Resources<</ColorSpace<</CS0 70 0 R>>/ExtGState<</GS0 71 0 R/GS1 72 0 R>>/Font<</T1_0 75 0 R/T1_1 78 0 R/T1_2 39 0 R/T1_3 81 0 R/TT0 37 0 R>>/ProcSet[/PDF/Text]/XObject<</Fm0 18 0 R/Fm1 16 0 R>>>>/Rotate 0/TrimBox[0.0 0.0 595.276 841.89]/Type/Page>>
endobj
9 0 obj
<</Filter/FlateDecode/Length 7803>>stream
HWÛnÛH\x0012}×WôË\x0002"`Ñ¼S\x000c\x00003ÍÀ	2kå)Z,\x0018©-3 H\x0014\x001dÏßOÝºIJôbb\x0018°È&Y]]UçÔ©ÇÙå;OíÚ§V·7{O½¯gÎ~_Í.¯àÁ¦Ud\x0019üBø\x0017g¾Rí¦²]®üÿyÊW«ûçz¡ZmT¢<øKT\x0018¹\x001f§ÊÏÜe\x0014Äjµ}q\x0012OÍsÂXÍ?\«ÈùïêÙõjö\x000elà»ñÄ·xdÐlëã¶\x000bØÌð\x000b¼
aß*¥×Rzî2I|\x0015¦}ß\x0017ãÃzãxn¦æGÇ\x000fñWwDÍ·\x001a/à2C÷½,6¹\x0003Ç¢®Ö^:aOÞÈ\x001b+'Róâ{Þ\x001deÅZ¹s\x0016¡ë«y^T²£<øâÄx[®,\9~D+ûÂxµ\x000ec_âåÖ>¨"/'\x001cÁÝ`¯}§KYù#ßëöBnnó®]ô;·yãd¸°ÕÝó³\x0003)J
ÄÕ\x000f('\x0010à\x0004\x0003ì©ï\x0006K¸ÞBDÿìÀ¡©Ô\x0003»7N\x0000©Í«ñµsÕ\x001cß3ä\x001bz\x001bÜà¨ëJm\x001eô=\x001df\x0011&\x0018«7ò~½yPwuUiqÕUW¼º9I¢É
|_Ê+\x0008@®nùDzWå®úT´\x001a7;ä;=ÚÌã³ríñÊW¸\x0000\x001etSTZý»n\x0014?o!nèëÖU\x001f÷\x0007ô\x000bW5<gâ×\x001bzTìáS­®\x001eòîÉ	ècwj\x001d\x0004	x64\x000f\x001fÔÝVÂèøp¿\x0014\x0016a;4{÷Y\x00051\x0006ÿ-\x0010Béû~â\x001a\x0014\x0011f¯î eËÈG¸zÜ\x0014þ«»«Ï3LøOe±û\x0008¸EÈø\x00162Q\x0014ºi\x00080Þì	uû\x000fè
\x0012V9»\x0013b\x0010\x000c"ô}\x000bý\x0001\x001a\x0018ÈLgÖt\x000ct\x0010¥AÄpluWê=\x0016öµ¸Í«ÖÐàhSDð5³´Ð\x0005N\x0014ã\x001a\x0013ø\x0008`\x0008nb*1\x000eËÇÖ\x0019Öt\x0014sMcmKºCä\x000fLwM;AlwyU´h§²i\x00148s÷ù«ZÏ ÂÇXá¼O{û|½¯«\x0002 \x0007
!\x0018\x0008e§ûÍ?}ü°\x000e¼xí\¨ÐwV?fw¼zûöò·Í±ËË~>¾½¹¾¹	<oùîÝ;õûû+5\x0003Óðæõ'¸&Aòý_¢×\x0001ª(bäVP~¦èT ð'\x0015?_ AÌ`f\¥\x0004.Øü0>%Ç_3aîû;ø©\x0000üLéþ\x0016Ãáó¯O{ÿc\x0002\x001aâÏ68±ç\x0006¡=°ÞòoÎ\x001bW|×ÊÃ±Çíø\x0013ñ¼ãgñüè\x0010³þ%=WõØ¬5
S=Êô"vC aøLbBä	\x0017úâ?Æ(éqöI?é:%C#¡=ªVï¿[ mµÁ\x0016\x0015D-¨®^*ÀÔm\x0012J1à¶ÃÓ\x001có\x0002OgQ`'@\x0018\x0013~y\x0000î:ÅP
Bê\x000b\x0005x¤psÙ\x001a?é\x0000z\x0007Áôâ1%Ûm\x0007\x0016»£u`Å
P=\x00122	üh½ef\x001c\x00146\x000bm¬}\x0005J*¯\x0015Ä\x0010ZÇ¾xÆf\x001bYÀÜsGªh\x0007Íþq:Æ~µÐÒ0Ä\x001bùX£4¬#QT}\x000fdú`Úë¼l_ósÜBzhÓXOë¢ß§ÎØ¶+ëÈ>q¡GÏÜ¾0¢\x0017.\x001f¸	P>mû\x0005Ð°Ä¾,HÙKè\x001eóçã\x0015gÐÃKxþØ\x0015Ê>ÁX\x0004ô6Tbc>%ÆöãIqÆß¨lKª\x001ch©åyR\x0001¦¼\x0002\ær`´£u4é\x001dåçu7lÿPï&\x0008itî®\x0018º\x0001¢&G¦\x000b1F]A´ñAð\x001a8'nd=\x0001\x0006K´u,¨é\x0012já
ÂW\x0001.Ã\x0010"eSWã¶¶`³#òAU\x001aê®<±×8Ü]Þ3aÿ#
ÿâ¤#\x000c\x0019ù¼M íu\x0018yrÙõ_áí¿\x0016åÔ\x0006\x0003Ç\x001eÄÀ\x0010p\x0016§°­7 \x0001\x001d÷\x0008hnÛ'Ñ-ÄÇjëâ\x0008]\x0014;'K}¨\x001bÔ\x000e\x001f¨\x0008¡G{åx¯\x0002­Aqv*(uÒ´<£r0;GÃh;0ÜIî2{ðü\x0019âà¹{£%Ù#õ\x0017Ú"Ö@è\x0014H¯S­\x0018¬æ»¢u\x0008Ämn?AÞÄ³Ñm\x000bsÉ-qìF\x001f{sx{¬þPªDMFz[3à×¨V±
«\x001fH§aóú\x0000D\x0012\x0000oBè­ç)\x0008Ë×`\x0016¢¶,f×keü¾\x0000ª\x00027¹Ø\x0010Ì\x0014!\x0013BØ0ÿ\x000e\x0007òyà"ý>Á@Üqyq\x000b\x0010@þ°\x001e(\x0011Dî_\x0019C'X<e\x000cU\x0014rÀk\x001b
\x0003uHJ\x000f>ÈG>B¬1Úæcj
¬\Æ\x0013ì>Âõ~$¶ÆvÞÅT°\x0015OÑOaÈß©§\x001eæ=¿ôfLàdµ\x001bØ!Ø&QO{\x0008ºÇ\x0014±ÙÄ sÜ\x0011¦«'À¹)s3`j©#-4â
\x000f|\x0014z9\x001aÎh(5È\x000c;Y$p\x0000iv\x0001¼\x0013\x0014\x0019±¦ç\x001e=vuAXcÝª\x000eºá\x0006ØÖU\x0005÷mm\x001b\x0015\x0015:L \x000c »^M\x000cA\x0008çLâP\x0005Yv:uÒ£É©ó\/IÓÚ\x001b$Rápf\x000bô#"}éã¯b\x0018ÄÒr$È¡Øþ¡»opdÒ¢\x001ddg\x0013U#)úüÄ\x001f\x001a&\x0005îxFéPú4eçeX&*0c~5ÍÊRz /J<¹\x000e¬1\x000eevúí\x001fí\x0005q²ê§hùÓª\x0002ÍþÊ<8¢_oÙOP]Yì*ÛÂåP´\x0007È\ÔxâÐUÑ¨éáÁ\x0002ÓÔU
\x0003ãF£\x0007\x0003ZíM×5ËÊº[\x000e]*\x000cÐ\x0006&Vz\x0015¿\m\x000bT\x0013Ð'GêÓ\x000c[Sú\x0017\x0006\x0014M(ã\x001c©}]T\x0008»4î0¯´'\x0000\x0002î÷Ø\x0011%@Þbg\x0010\x0006Þ»g9
'¸(ÆñöUª\x0016Ø(ñÇªÖjZ£h¹}ë\x0006D\x000c\x001cG`\x0002¼4¾¾·rË0æR\x0012æ®#êñ8¢oyVö]\x0005é©\x00181½éaFô4¿ã_+}yØ\x001a1gÛîfÜp\x0006V¤á$§R[µ'ÝM\x001eF6Q8²\x0005<²-°¢¼ak¾\x000eâ\x00103ñ9\x0012ú\x001cÜ£Ã²ë\x000f  ÞrQ¥O9z§)ZF"F2
\x001dlá°\x0019ï;ðÔä¯û\x000fçNùÜgÓíOõm~¡4×^ä¶_Çõ!­ëó2¦fHD>4>ðkócs+¢ð©\x0019 KC,ô93\x0019;\x001d'ÓÅÉz!U,æ_ùØ]¦\x001cÉTÐÙ]ã}\x001aUÈ¦§¸r|Ò4ºÌArtG\x0019D¢\x0016ù ìÏ²\x0000·\x001buÈ\x001bÃû¸Ì\x000fëtÖ¾F¦NÌ°Ë¾xfRO$ 9ó)
I£\x0007VÐ'½ G&PÈÄ	^>\x0015mNbL£k\x001f\x0014 íçSsQ)\x001aX\4Öæ!7S\x0003[¥¦B>LÄ]Ç]×ÖýÉØ\x0013Q÷$}\x000fç©mÑ\x001eê\x0016:Ò=¨y,ß\x001c¥qbsT·e	)2ËAOäÊ\x0002ÝugVP43ï\x001bQáòª;E\x0013 |gZ©³Xâiû\x0019\x001aMôÈsý4\o\x000f£\x0019§é\x0015|<Ôê£O)ÍCÓÕhv¸GQyfr/¦T>l\x0007/MWãiä{7h&~rÞ¥'*7\x0007¨K_í\x001bìÖ\x0010Sý@ý\x001fó)ü·\x000e¡«ìêý\x001e`Ó§x¢ZÌ\x0005gtt¯¢QzÈ[­É+\x0008ùRD
&/@O)Ñ;ßR\ÌK×¾,ô\x0004\x001ex2	\x0005ÞÚéßð¹EÄV®+8ÿCÝ´Xâw¿bqùXk@ºÚå;½'Éä[¢\x001e{\x0001\x0013mN,\x000bºgEÄý
fL](~Ó56l¹9´à\x000bxTÜË¡ê\x0006¦WX®\x001bFÿwaª\x0013ºñÌmÁ\x0000\x0001ü\x00053\x0016yu\x000bR\x0003qÇ\x001c\x001b\x0013\x0007"õ¯q0¥+jªúõªë[7¢ïû+ø\x0018\x0001öF"õÙ·¶7
îm{¸èC
\x0014ÊZ¶ehµÈ\x001b$÷×÷Ì\x0007%rWq\x000b£0à%%q8CÎ9ç@<\x0016çT.¨Sâ#\§EþÃ\x001cÅ\x0003kn\x0004\x0003ü¦\x0017¦`^êÀvîirÅÙ
¾Wµ)ê%\x000c W·ÿÄàÒP³ùð-Ro|Aø=zµCýNÀ\x0016Û'yÄË³\x0017z\x0001Ï\x0004\x001d\x0005éÕ\x000fÚ¤X`<úXÔH@m©ó¢üZTT9r!Í[\x001adæÖÅÀÑ7JKê-*å$F¥Ñ\ãsª½ÜQÑ¸Ì^Bwî´\x0019uZ.ú^
~-âZr\x0016¦È°­ñe(\x000f&ôóð.}Ô+¦YÐ	ë\x0014\x0011û÷ß_!ä\x0000#k\x001b«\x001fWô4æ	\x0010\x001eÄ\x0007À¤\x000b&ð£{
!WnA»-ã\x001cj\x0000¿ôvB\x0005UòÖ<'Ö~?Çãüñ\x0004\x001déÐµçr>Ïòª\x0012$\x0005\x0001©*Â\x0006mTuKÇÏðRo^Ü¨¬Eç;e/`\x0013'¿\x0000ëÂ\x001b±Å\x000b¹¾Ó³@-ÉáøîfO4óée;r>ÞÝ^G­þN§þk?à\x001fÒ'Þ¡éRå¯+[KËV·5\x001f©æZôþÐß\x0006~Äýì\x0018fdÑ5z\x001aåJgÄ_Uö\x001c\x0006bücm\x001fäÁüÔÜ\x001ddwÂ6RÝþ8%.ä7¶yáô?Ñz6B\x001b43\x000c
ÏÍÜ×	[\x0014¸pG4ä$ç·\x0004Õ·oèz\x001a=±áÞ¹ß»©.÷f\x001eDÌÐ]\x000c\x001fÚ\x0011,\x0017\x001bT²Ámr\x00050~t@ÖÔ®\x001a}\x001bª¸[äÍj\x0011ý£kC³?¶Óåù[iìÿÈf¯ôÙ6vñùé4cÞqÜ¼'°Eíý¦õ\x0011=÷7¨X{á^ÇØ>õ\x0014ìUÛ¼>qåEå¬\x0010-\x000f¤¤\x0010¹\x001ev-sD¯1%×¬Ï4Î¿Î³KO¾(\x0018ß­l}¹Éß\x0012E¨¯ÔEJ­\x0016Á2®TßÏO½â*Ï\x0014W?Æ\x000f!6h5A\x001d\x000b¢))ÂV©ÔËVi\x0012ø;-ü»TÆ_\x0000¸|Ù-ì\x001fÓ\x0007Å²h¦\x000b÷Ñ, úd¦]´\x0004M§èÛ>Úc\x0011$\x0008e%ù«>q×ß3<oY¾\x001a&N&~vx vN£\x0016:`ºZiX¤¡¯¥¯C{¹±¶©=
",¿>\x001eöÇe,ÂÁ\x000e\x0010«a*þø¤@¡¤aÎ¾Ô\x000fG
9E\x0014Üû¹c7\x000c\x0004æ4çÍ$V\x001bð¤ó%fß\x000f½Gmb0JÄ#ÍyáÊU'b	¹lï:EâK´5\x000fÝx×zR¿Òôs¤éÊiE$¶;\x0019é:\x000cíZGÍRG
×Ñw&ÍÂ¸2$äa
-\x0015»\x0002öÌRøz®p§{sdòÜ*\x000c5Ái²(\x0008ÚK\Ë%®ðåØåÐéÆ\x000e·®by\x0015\x0014ê¹jAâïÆlA.·CÏô\x0002wÀ%·¼ïr*EÄº¯Ådèõ);>\x001féZ=¿bMÉìZÕ\x00175B\x0019í?Íd\x001b·\x0014Q!y\x0011S®ðS\x0004	§\x0005\x0012ô!UV\x001eèÓÇ\x0005
R\x001bÒbà\x000cÔ§ªáwüóC´S|,\x0016°j£ÞÑ\x0019Y] iùRßqM¬\x0002=óì<|å\x0017ð\x0005\x0015UMÑü\x000f&Ë_ÙÍKûC»GF\x0003ìõ{\x00126Ô¼Ö<ÉrßÅi]ÔZ\x0017\x0019¦(úgFDËxþ
ë¯s¶Ø\x0006l)O\x0001¬Ïè\x0011\x001bµ	:ÕÁ3qß\x0011\x0016Lf}\x0003· m.°éÎ5¯Kÿ\x000f\x0011Øz\x0015:\x001fDÀ tÆbP1i\x0014&\x0018\x0019!äC\x0017\x0017»[A>¥ZYp
\x0007~Ù-\x0016ØÊÊWo)Ì³dCªqÛ
\øùãHQ¯±+\x0006-ßñ¿õ"{§Ä\x0000åSWfÔêç\x0013ÎÁ*sð%hÚO\x0007F6ÇÂ2½\x001fÏ¾ñs\x001cÙ\x0014KªÔ§¦[áw\x0011ò)¸§\x0015\x0011\x001e\x0011\x001eÒ§£oÚ\x000b\x0002Fßp7\PiùÎ<\x0007Õ ¨º\x0000è´Ì
ÎTFûÈ\x0011s¼ÀàemÔk=`í Næã¯ÿ ÂLæó©\x0017\x0008$Õ2N=\x000c«ÇméJX4t3óëv	¯|>uT#1èÎ"³ZiËÜûUPRÙ\x0008Ù¨f²Q-d\x001b\x001bväíî4<Ï2ð\x001a^¤._
Ö1t_×LÛö~\x0012Ì\x001f:¡/(Ã9P\x0016\x001f[¡6\x001dÓ(4×x2µ\x0012ÚîñÐ3sd\x0005tw\x001a±8\x0003:Æ?N[ÃM¾\x0004ä]ïz0x\x0017f]\x0004¶ñ¦~ã9¨PF¹C"¤§^Ðñ\x0017íÝ#1Ë±¹lñ6\x000c××R³ª»\x0007ðªxÛáà\x000bS	¯¼\x001få(õ`ùÃ× \x001ax Zâ\x000ci"EÃO½tqV`MV~Ö<CÿEõB@ßÐ9+.<Áµ½y\x0015Slpg±Ú\x0006©´Ô°\x0001Ytû|nØ\x001c$ÅY\x0005Áy¶\x0013\x0015\x0010N@q¾©^ã\x001aÚ,DEìz\x0015Â4®\x000fùZ1ÞSÑKÉó\x0011qÞr\÷\x0017PH\x000c²a¤9¸¨E+\x0019¤ò3hí3±­9Y¦°_\x0010T`ÇoÇ¡ÿLnØb¬ô]8û¾\x001d)ùîÈf¯Òæ\x001e\x0002¨&µ't©µ
s)Yyá±(&\x0010i+ÐÚOÇÃØÂ~\x0013\x0018¨8¹¹D1@áøØNa\x001f}w\x0003«u½-Ò\x0006ÿ+ü7ÓnÜ¼}ÿ15\x000fÓÆå,\x0016«\x0006ß¥)J\x001ccil½uye¾tûÍn6P7øãus3äIé'G£Ê
6mî¨ª÷ðø#\x0018Y¯~qæ"í\x0000hï%-Pv¹}à;4Ûdñ»\x0001ÍSô¿Á)ñö¸ÙàêªÚä5P±1Ø×b\x001fö\x0016«¦@Ë²¦ÿVÝÎÒj[¡¥gU±­À:3ÃÉpM¹ãL9$>\x0019ÏÛ\x001b\x0004inî7¢\x0008\x0011¸À-$_Ã"kð#mH\x0017ì7o&P¼\x001dðé\x0013n«\x0007ÝoX\x0013ËÍ¦.\x0018ñ½#à¨e\x0015;òý(\x001adpU\x001aÜ\x001eÅ7ÿ4ã»ÍÏ&\x0013çL\x0003»./à\x001a¤@]Z³Û³Ùý\x0006WKüuÀ­\x001a_Òae@\x0008?¶umv\x001b¡WÖmX¦
.EV\x0013ÃkrÃ6u¼Û¤~8l@Ëå\x00152:+èÜ¶EUÍ3\o\x000eÿ6:§%°<s+\x001fóØ1£Ìpv4W
 [ \x000b=\x0016x¨e©\x001fì$rùðu*¡aR4Í2Éóù\x0010Èvmæ5ä7Gc
Z\x001c´Í¬Yüw
ë,\x0005å
ûXb=-­S\x0016)«SÙ\x0000×ìy\ %|$0ëºîl6'\x0017¸ìFsöÌÉ<ÃJõS²~·Y.'«'Å¶AÂëtÐi\x0003°Á,·Ö`\V\x0018»¢6%t¦\x001fï6ÕÎ\x0006Ì°ÿ,+J\x001aÍa\³)^PÖô¼áM*$
\x0019Ë\x001be¸\x0007Ì
\x0003^Ý\x001c\x000f0.r\x001a\x0019\x000c@\x0001¦¼\x0004&1ÎÙcW.cNPÍ¡Ñ¡]Lå¨\x0007=x6úH\x001e[2l{tÂ¢±:\x001b¨/:?\x0003IÉÍ\x0014PÆ5PîRf\x00004\é0Ï2l'ëåHÅ²wº«Ìè`«Ú¿+AM2]ïÇdÖÐLv\x001dt&þÈzñ3ÖÐZyvípôä|Bd ú
[iªÍ\x0008ÞÞdÿv
¨\x001fN6ú\x0015 ÄÛ\x0002ûç@5\x0002O4Ñò\x0007\x000c$MÓf¬\x000075ª2ð²ò4å/èËª¦(3³\¢M'ó[ÂÏ¶Wæv\x000f$ÿÑ_Á\x000bè!ª'Xè[Äº{êêd\x0004ª­~ç\x0017ï¿\x0010#cSv\x0007¶j> 9jü§nz:Ì9ä;luÔòòÖ\x0016î5\Ì¹í\x0012ä­Ë2"Ô\x0019³B	t8Í½Ô\x0008¸*\x0006\x001a\x001f½#Ä¢ÀÐÊÓ|>	G/«NI\x0019p\x0016¤2óùkñð\x0012©Ãn|ôBR*ÿ|t*~.ßñÑ+Ñ~#\x0015«
w\Ä*~\x0006U²§èeï÷Â\x001edô3É^]d`«vÞEv¦(\x0002µú\x0010}¢ïõ¸æâ¹®7w\x001d£{
\x001bu<ÄÉG+5»È×3;Þºþ²
\x001e=E\x0007vºþÌ\x0014\x001d<_Ä²æñÜäôÂU÷\x0014íÛÇßZÙ0MJªõæNù\x001cß\x0013A¤\x000c\x000b\x0000Ý ÓßVNì^é¦l^@\x00088§\x0015#Q#;\x001c:C\x0006I`\x0015þõægYô«üü"?\x0017\x001fÔà\x0018Ãh¯Ý¶ zÏWô)°\x0000\x0011\x0017qÉ-\x001cf\x0010\x0004Á`æ4¾Ð2#w (fùûyµt³[61s°E²ª®®zõÞEwu/¯õiMÙ)ú\x0019£êó&&¢òÓó\x001a!\x00017¬2*¶?ºi\x001aÏ\x0017Ñ#È*S\x00011\x0002\x0004ñ\x0010PÎª\x001a
\x0008i±ó¨ü7k¾eYA?S\x0017¿\x0000~ÈÌ¦\x0008üúo\x001d
ý\x0019<\x00174wXîü
Ç_«@Ñ]Ñ\\x0001ës!u JXz¤\x000ch\x001eEÍ¿H\x0019K¤Ô|òmâdõ³Y¨è%uk¥Û,3»âÓ G«ÁÌ<Ô.JzÀ0¾.ÝÀ³íÅã¿º\x0015Xîv¦ßÞtËzê-Yëãq­:»v»\x0017ÝCK\x0015ªuO\x0005~ËcOj:¯
"
´5ûøûûO¦C¢WSdgóÚÌüüS<|dïÕ»°6
1hIÍD[á.¯`b½\x0001ÍjÁ[Ör¤¿´®d\x0012½´2»ªd­T\x0014 ö\x0015)Ã<­A¥nkh-¨pQó/P¬\x0005*¼DÜ&òð=P¹uV»¼4u	nº£Qð´s?QÎ^Ö$\x0000\x0001çÂÿ%kw-½5õ\x000e@A\x001dxYKÚOrD\x0005)¥-®\x000cÚõZ:@dñ1\x0001Y+jSb\x0003"µ9®Cù?Í¢\x0017Àß\x0006xE63Ý
ñhIÝlyh#H\x001bÄ\x0015Å\x0007ãDegÒ¤
¾½JJ&Î´\x0015MòF `È|\x0012:D.'dªYÏDM\\x0008k\x0010\x001fL©Pë\x00144)6Ê)wjÄ\x001b\x000b\x001azq\x000f¬\x0017ëÒ½&´$sKè#IGÙOlC5À¥-¢Aå­®ZÿæN¤¯¸ù\x001dïWÈ[g~Û*¥ÊÅ\50µ,dk!êü\x0007
=û/¯z2Y¡§vÛ­ÂÙ"7
ç¾¨ú&îë"9Y\x0014ÆýªzHÚl\x0003iÃ(\x0015§áz\x000b5À®È g\x0019+>0 \x0000sN
ÒûYZµ\x001dDu\\x0018\x0008P\x0001B½r\x0002û9ÐÇAFò-u\x001d\x0001ÐUc%'^õ\x0008æÚÂT*c§Þ\x0011j\x00032\x001cn\x001f{Ãþe\ÎÔBö$o\x0000kã#7\x001a¸|K\x001dnîy\x0000ËÆ\x0001³edôzé¦Þ÷G{è ²\x001a>Ì³ÎP\x001f¶¿\¾\x000c4»½j2HQÃmpdY =r§=ª\x0019AÔ¾<\x000bkHY\\x001cÛî¸w¥\x001ad'\x001fì¼*\x000eí\x0008®§¶ÜGÏ:ÆoNÊlq´Èqãç\x0016Y/\x0008Dèè\x0005×©»â\<¬TÛ]µpÆ£ã°z,°´]ééæ^÷XVÎîø¤Ç<» ô÷N0qûö
ÁÅgëbaG
©äk\x000f½Ð~ªz÷ÖS[ãG£\x001dH#æ\x0018ß¬°\x0012òÛ(A9õãx¶\x001dò\x0012N7x1Ëwi9\x001e§N§Ùô\x0003¥Üg.Ðñ\x000c\x0019÷½Q^­ß[ÈÉCOAX#'Õ^o³(l§n°ÜR©D\x001aº!_w\x000cTFvX8\x0004\x0003\x0007²\x001b¨Tg´h¤B¹Ip\x00177§ÑÎf^¨r¸b:·ÔQRÙúteizìæÀ\x001eßä\x001a¤I6ÅARó¡ÛD©P¸Th¦BX\x001fEWª1ª\x000f§\x000e%UH=S%Lq\x000fk\x000f×
+¦ô*ëh¦8ÓUZ\x0019­VÆÞÕøUÊÀÁùÐG"ÍéÝnõ~îgoI\x0010H\x0017/k¹®î,Þ[ÕoòýðAlùÝ³WóîF\x001eî\x00038	\x0002%\x0011brN÷á\x0011ØÇ[\x0016O26¾×Î\x0019«\x0003t«\x0015\x001d+¼O¿¥ÿ)7%û~\x001bßD/£\x001aÜoÑ>{M\x0008s\x001di\x0007s2ªù¥Ù7E\x001by#Y\x0018®Éy\x001bz 7°£\x001bÈÛÀÌIfé\x001a\x0007¨Ów\x001by¿Iæ3\x0015ÕÎg£
\x0010võÆ¡²jµ FîeÂ\x0017o$Ìà`\x0015OsX\x001e­ay~¯@í\x0004*ªóe\x0005\x0015¿´òA\x000f£öÍcTÖû§Â	¢ )@Øâ]|ùó¾BxÉ¨Ó\x0010pnwmh\x000bûîA§ðm2f"·÷¶\x001f|×ðTgüÒ+[1Óxv\x000c{ÏÔ\x0019X¿ôèSsjÞ\x001dGÊ\x0008\x000cÏæ+\x0010ø\x001fq\x000bQ\x001dõ{\x0002Úk<\x0012ÆD­¯³\x0017á$r\x0012°\x0011ö1\x001e^wËÅ\x0006à¡6ÈSO8Àô\\x0013\x001býq±DÜdØ{è\x0007\x001dä\x000ewë§\x001eûdo
PÛ'VÅ3|Âg½Â­³=Ç¶v$\x0012÷ð0ìÞ\x001eùN8l95ïaÓ|³3qÆr+'b~AxD.ÓÔ
6ù¢`
ïºür¼,.À½n	)¢Ê.Ø\x000cîÛ%­\x001e\x000eÝ!úK\x0003·È\x0008X\x0002\x0001Ü!¥VO@­ZoÇ1£ Or·*\x0012\x0006,"À\x0016MgÙ"+Øû#Ú>\x000cº³#<úqÏÄ\x00184éæ	*¥»·Ç¡m]õZ«ßIÑñb"óá¼'Èg)\x0001)ü\x0008\x0003©1ÛË¢	â#áâ\x0000=\x001aØk\x0000¨\x001ehå9\x0007J\x0013á0XõVâ*j£ð)@iÞªïÍ3\x0005ëhp? ÅTÊ.-°Ym5¨Ë[¾ÍR9\x0002%ECK^¸ïò9|÷6a\x0015qÑ^j
Ñcj#xÀ\x0013
\x0001\x001aT\x0016ß\x0007§¨Ò2o$Õ$\x0001\x0013ý\x0014óîæQbKÿ¦ùí\x001b(Ð¶{>mn¾sÌÜÿ0%%Ä8ÐijÌM È¦óÝ&e'Þÿùê\x001f\x0001\x0006\x0000.×Y×
endstream
endobj
10 0 obj
<</Filter/FlateDecode/Length 428>>stream
H\Íjó0\x0010E÷z
-ÛEñOäQ\x0003Â¸)dÑ\x001f¾´\x000fàØJjhd£8¼}gtC\x000bÁ£Hw8(¬Ù>mÃ0ëì=ÝÎÏú0>úóx×{\x001c*JÝ\x000fÝ|[¥ÏîÔN*ãðîzýi\x001b\x000e£rNgÿxó<Ç«¾[õãÞß«ì-ö>\x000eá¨ï>Ý½Îviúö'\x001ffëºÖ½?p£vzmO^g)ö°íy¯\x000fù;ñq¼.ÓºL7öþ<µm8zår~jíù©\x000fýû¦Dlè¾Ú¨\ñÌóße­\§5\x0017f\x0002ð#øQx	Nç7à
óbr¦HÌ¹\x0002WÂèc¤A\x001f#}\x000c²&e\x001bp#þFúWp«Ä­Z\x0017Â\x0006lÑ³\x0004\x0007\x0012\x0007*Á¥0²$YB$Kð$ñ$ºÝ°\x0005[aôOwEp&q&88\x0013Iév¿üc8\x000b+þ\x0016nVÜ,Ü¬¸Y¸Yq³p³âfáfÅÍÂÇÏR²e^Ïj¾ç¢Ü\x001a¼\x0016npçÜù\x0006ÌEã6\x00052&<Íúw\x0006»K<~iäÓÜÉÄ
Áÿþ+¦qÒWý\x00080\x0000ÜÑ\x0010
endstream
endobj
11 0 obj
<</Length 3857/Subtype/XML/Type/Metadata>>stream
<?xpacket begin="ï»¿" id="W5M0MpCehiHzreSzNTczkc9d"?>`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2018/09/FR34_entrepeneuriat-320x452.jpg](https://injep.fr/wp-content/uploads/2018/09/FR34_entrepeneuriat-320x452.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=ÌÑÛÅrñÇ\x0004M 3¹\x0005\x000cÀ±pwìÊüÀ0`H\x0007C\x0017ü\x001dâ
k«i
6§_\x001b9ÅÅ¢ÆdYP2 \x0005Ë\x000f\x0019$¨\x0019 
Þ\x0004øáO\x0018xKPÖbðÿ\x0000Ø#°Ó\x0012{ØZÍH\x0011Ë\x0017ñ!\x0003÷\x001bå \x0010À\x000bzgÄ\x000f\x0008ëº?o×H"ÓÃÖí=ÉÖ&]¾Kn\x0011b­û´ÛÁÁ]¸%H$\x0003ãg5[§Íáùd{×Ñìá\x0018di$`\x00180UVÞP\x0010Å
Æ\x000eì\x0010(\x0003¢Õ<eáM\x0007Áú\x0017môx.4yMonKdò$° \x001c7î¶2ä`ç$m4\x0001>»ã¯\x000bé\x001a^¨ÞéE£Õt×%{xÅ²¢±÷°\x0000~ð|8ùÂ«0\x0000æ/~6ø/O²»¼ÃwNðÂ&- _;ý\x0014Îª¬_\x001c""dñI\x001c\x000eÀ_\x0011ü=â¿\x0010^èú&ÖÃOYciü¸=ÑÕ6±,0Ñ\x001cm\x0004@\x001eøP\x0001j\x00008 \x0003\x0000à¼wñ6×Á:¬Ö×:
ö¢E\¤ö\x001b\x0001'wL\x0016
°sÜÈ\x0019" Óþ/h:\x000fö¿öMü)\x0015Í­«D°#È¯:#!P¬w\x0000%\x0000íùºñ\x0000¡kñûÃ÷\x000c¦-\x0017X3¼\x0006q\x001cvÑ;²yÂ\x0015ÁY\x0008mÒ¸Q´rF\x001b\x0000\x0010ÃñÓF»Í¬ü-¬<W\x0013ÚÂ%Þ\x0018Q\x000c²´CvdÊ\x0011ÈÇ#¸$\x0012\x0005\x0000^¼øÛ Úë·Ú?ö>§q4Wie+A\x000c/\x001b»9\x001fë2OË¤o+ÈR\x0003\x0010\x0000Øþ4è\x0010ÕüEg¢j\x0013ÙÙG\x0019\x0005¡	Ùæh¬Ç\x0001\x0016b0\x0014Î\x0008\x0000\x0014áøÕá½4µ¢xgW´T¸
µ1¦ü;Hù2\x0001·!I÷Wp.Ê\x0018\x0012\x0001]h¿	-ïbÐõy%6Ì¢\x001b8Ò9ã2ªn\x0012`\x0012±Ú\x000f<\x0011¸r\x0000:]gâ=¾©jÚLZ<ÇQ³Ð_]X¬Pab¹\x0001ó³\x0005KgæÇÝä\x0003.ÿ\x0000ã.\x001e§êV\x001a\x001dåÖ&¬ÚuÌ\x0014q\x00186ÄXKó0\x001bIòÆâ@PIlm"&Ñ¾0Øë:EÍÕ{k5ºE/s\x0010Cå=Ë@8\x0019!±R:cÖ$·øÇ¡?tfÏGÔ¥QK¶ 9Iü¶\<71û \x0012Jäð\x0001 \x0003»øëá¦P\x001e\x0011¿¹Õ\x000bD$·Lq=Ê@If?+\x0013!%qÇÔ\x0003¨Ðþ0húæ±ia\x000fõXäi k·Ê~r$Ü2Ò\x0006ÝÃ$²¨ \x000cvøù¦Ú¾£<þ\x0019Ô~Ã
Ô¶¼\x0011ÆóJÑA\x000c¬\x00197\x0000ç +0ÝT\x0010Û@'½øõ¤Øhý·ÂºÚ%¯\x0001Û\x0004\x000eØV6àKÀó'Ú\x000f*|· àP\x0003\x0007ÇÝ\x0006xäßÃz¬ÖÑyé4ÞT\x001b\x0015c{("R	=\x0002r\x000eí¼d\x0003¶ð/ôï\x001dZêW\x001auÝ¤vZIöÈ\x0004FGL\x0002ÀdtÁ88Ç\x0018Å\x0000\x001e:ñåm,./-.®£¼º[E6Á0Àà±fQ:\x000cØ\x001a\x0000ä-~>ÚÞÜØ¤\x001e\x001aÖgKñ\x0010¶Ù\x001cjÅX6çP6³¨8'\x001c@\x001b¡|qÓå\x0016P¯õ}>;ÛØàM°Ä\x0015\x001ay&*ò
ãao)\x0019ýâ}âã \x001d'|}y ø¢×J\x001a2\Á=Í"ä]í`°¦X£D¹U'å}ä¨S@\x0014´OÓ]hþ"»Õü7¥]hq<ÓÙÄEÃJ«»ýQ\x0018\x000cNÂ\x0007bspM\x0000Gÿ\x0000\x000btIà]WÄi¤ýÚM\x001c0Ùê\x0017K\x0011ºDéó¨p¼Ð\x0006~^2X/Ì\x00003dø×¨Á§E¨Éàû§±ûkZ\<7!Ü\x0008âpÅ
)$y\x0007\x0008Ð°Üx \x000bþ;øÍ\x0007|Eý.©_C\x001d ¹kXÐýé\x00124
\x0019Ç\x0019c8Q´óE\x0000\Ô>+ÛÛx{LÕ Ò5\x000bªÿ\x0000e%¸E
\x001b\x001dY·m\x000bû¶Á\x0004J\x000có@\x001ct\x001f\x001et¨,þÃÁ÷¶úÖ l
äb\x0018×\x0006f \x0007\x0010]\x00030\x0018$\x0004\x000cg\x0000\x001a\x000fûCÚI\x0005ãZx_[ºÒI¡$ ñCæ¶Y;~òÛÕOA@:
Wâþ¤x^Ó\MÔ\x001aÞâúK\x000f-V=Ñº\x0019\x0001f%Â&"\x0001RsÆs@\x0014­þ/i:÷|I¨\h×HÓ´Ø®®"»\x0007²,âÚÍ´	µ\x001cdh\x0002_´
ýÜö¶\x001e\x001aÖ®&8&å8¡$tRLðv
È#vò\x0000+¿í\x000b¦é¶ºTøsS_$®`bY\x0012Uf(Q\x001c¸fÛ\x0017 m\x0007p4\x0001m~=Û\ù_eð¶¶è÷6öæiã$C,¬¿ÎY6,r3n\x0003\x001b@$dP\x0007Kuñ\x0016ÞÓ^ñ.tûÙßE°\x0017ìÐE»ÏùK\x0018Ð\x001ceñ·\x001dlg Ð\x0002xCâ]µË\x001b]7P\x0018$¸HïçDû=ÏÑhÈbJ9
\x0000at4\x0001Øq@\x0007\x0014\x0000¹÷ \x0003>ô\x0000\x0000\x0014\x0000~4\x0000~T\x0000È \x0000Â$HÃ1v\x0008 eÉ'Üô\x0000ú\x0000?\x001a\x0000d\x0010Em\x000cpÂ\x00141¨D\x0014\x0005U\x0003\x0000\x0000:\x0001@\x000f \x0003ñ \x0003ñ \x0002
\x0000(\x0000ãü\x0000?\x001fÒ\x0019\x0004\x0011[D±C\x001aE\x001aýÔE\x0000\x000f  \x0007þ4\x0000É¢â3\x001c¨²Fz«®Aü(\x0001ô\x0000~?¥\x0000\x001f\x0000\x001fç¥\x0000\x001fç¥\x0000\x001fé@\x0007ãúP\x0001@\x0005\x0000\x0014\x0000Éaâ&TY#aG\=Å\x0000\x0013C\x001dÄM\x001c¨²FÃ\x000c¹\x0004{\x0000ã@\x000cxcãgEv·!eÉS2=\x000e	\x001f \x0007Ð\x0001øþ\x0000~?¥\x0000\x0019÷ \x0005Ï½\x0000\x0014\x0000f
\x0000(\x0000 \x0002
\x00003õ \x0002
\x0000;P\x0001@\x0007ç@\x0005\x0000\x0014\x0000P\x0002P\x0001­\x0000/z\x0000?:\x0000Lýh\x0000ï@\x0006~´\x0000¹ \x0004üè\x0000 \x0002\x000cÐ\x0002÷ \x0004 \x0003ó \x0003¿z\x00003@\x000b\x0000;÷ \x0003ó \x0003?Z\x0000Lýh\x0001sõ \x0003?Z\x0000OÎ\x000cÐ\x0007ü@øñá/Z­Æ®M¨¤öÖI¨Ü5qs\x001d½»»¢É#Æ¨\x000bFãæ#¥wPÁVÄ¥*ijì®Ò»ù³ÎÄf\x00140²qªÞîÉ»/;/#Ïá½¾
ÿ\x0000ÐÑqÿ\x0000Ëþ7^ö\x0016aÿ\x0000>ÿ\x0000\x0015þgþ±e¿óóðä{ÎªÛkÚE§dæ[;Ø\x0012â\x0007*Wr:SÈà
xReº>\x0013U"§\x001d¥ºÂ\x000fÎ
\x0000(\x0000 \x0002\x000eýè\x0001h\x0000 \x0002\x0012\x000fÎ\x000cýh\x0000üè\x0000ÏÖ\x000fÎ\x000fÎ\x000fÎ\x000fÎ\x000fÎ\x000fÎ\x000fÎ\x000eýè\x0000üè\x0000 \x0003ó \x0003ó \x0003ó \x0003ó \x0000sÍ' \x001cWü./\x000bÿ\x0000Ïô÷áÿ\x0000Â¿5ÿ\x0000ÃiÛÛ¿ü\x0002ä}\x0017ú¿ÿ\x0000'â¿Ìè´?\x0012i¾$·i´ë´¹E8`¹\x000c¿Py\x0015ö9^sçTl\x0005U4·¶ëÕ;5óGÂWÁË¼yY§­{G wï@\x000b@\x0007ç@\x001f
~Úú_Ä-Wâ?oÍ¾\x000f-¦×íå#i­ÍçEn[\x001f6vö8ïö¹,ð°£\x000fn¯.wÊû;Dø\x000cú\x0018¹×©õyZ*\x000b_uy\x001f¥\x0019UIR\x0003r	\x001dkô\x000b£ó{3öÀ>)±ðÿ\x0000Ã_\x0001[Ý´K\x0012Ù×ËMÁQ {· \x001b~µø'øóõûæ\x0013ýÚøWäkKñKÃY½r`°;\x0015$\x0013è\x000f×\x0018\x00198®s¬üGðàHu%\x0011\x001a%s\x0013fP;yÀy÷>\x0000\x0015â·Þ	%\x001a\x0018¡\x001c¶Å\x001c¥\x0000uÈaÆÖÀ\x0005þ\x001fµS[à¦¾ÛPü \x0016éÊqÜ\x001fJ\x0000uÏÄ_\x000eÙÉq\x001dÆ©\x0014R[ÊaH'cg\x001cà\x001f¯°ë\x0000l\x001f\x0012ü3t\x0007«ÂÙ¦û¬>EVfnG@\x0011³ô \x0008çøáØ\x000c!¯3Å,±\x000f)ñ\x001b2°\x0019\x0003«c×\x001eã 	mñCÃ×7eûcEqC\x0013ÆI\x000e®cã?>`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?==³ó\x0019\x0010¤2¿Hñ\x0019\x0019ãZ#\x0007ÿ\x0000\x001bÔ^Q\x0011;¼û¦q,wµm{(Ç?çc\x0017\x0008{J÷²\x000bC\x001e\x0008G T§Lª\x000còD°\CgÉwhÉ593DûA_µdòqÅá®Ç</p><p>tzìZ¬Wá\x0010¸{$J³<å\x001a²<gHÐþDËµÌ¸Óþ.£$ñ\x0000ÿ¢@ì\x0015<dï»\x0010­¥LýËïÈ½\x0016eë]?Ö¶\x0003É©à\x000cG'EÝ[ø\x0011?c1·D$Á\\x0002³<Ë\x0004dIÎd\x0016¬Í¿8N«\x0010©D½Ìåúk±4TaË§þß\\.á¼XÁJáø/?Ñ\x0018£t¹¼ÀÃó\x0002¾Q¥ÜùÆ\x0018ÉÙt9+V^á;°ÐÉÂÇA\x0016ÚËº>¡EB,¿BQ÷ÔÓô\x0018v\x000f\x001fí»åi\x0016Äo,à\x0015©íw¤ªË\x0006ðæHWUR¡Á\x0007\x001aa»ºw¸ÿÁ \x000f^»Fîm\½ÃA\x0004TXãòÎ\x001e\x0002\x0019Ã\x0013\x0007ôëÛ~°'±g\á\x0010«­Ød)ÓÄeCV!ªïLRû#}\x0011Z3%µ\x000cmZØ²=¾¢h¨\x001c\x001b7\x0017ïÐ}\x001a|ÿ^\x001bs!\x0013Þ£2x´Tâ\x0014w¶\x001b\x001a[\x001c`z÷\x0003? o¡^×G\x0017ËEqå3o\x0008ü\x0016`\x0000Zð\x001e</p><p>endstream
endobj
63 0 obj
<</Filter/FlateDecode/Length 2574/N 3>>stream</p><p>HyTSw\x0016ÇoÉ°Ãc
[°\x00065la\x001d\x0004Q\x0008I\x0008\x0001\x0012BHØ\x0005AD\x0005\x0014EDª2ÖmtFOE.®c­\x000eÖ}êÒ\x0003õ0êè8´\x0016×\x00178GNg¦Óï\x001fï÷9÷wïïÝß½÷ó\x0000 '¥ªµÕ0\x000b\x0000Ö ÏJÅ\x0016\x0015\x0014b¤	\x0000\x0003</p><p> \x0002\x0011\x00002y­.-;!\x0007àÆK°ZÜ	ü^\x0007i½"LÊÀ0ðÿ-×é
\x0000@\x00198\x0007(µr;q®ª7èLö\x0019y¥&Q\x0013ëñ\x0004q¶4±j½ç|æ9ÚÄ</p><p>V³)gB£0ñiW×\x00198#©8wÕ©õ8_ÅÙ¥Ê¨QãüÜ\x0014«QÊj\x0001@é&»A)/ÇÙ\x000fgº>'Kó\x0002\x0000ÈtÕ;\ú\x000e\x001b
\x0006Ó¥$ÕºF½ZUnÀÜå\x001e(4T%)ë«\x00060C&¯é\x0015¤Z£i\x001b\x0001¿ó8¦ÚbxE¡ÁÁB\x001fÑ;ú¯¿P¦ÞÎÓÌ¹Aü\x000bom?çW=</p><p>x\x0016¯Íú·¶Ò-\x0000¯\x0004Àòæ[Ëû\x00000ñ¾\x001d¾øÎ}ø¦y)7\x0018ta¾¾õõõ>j¥ÜÇTÐ7ú\x000e¿@ï¼ÏÇtÜò`qÊ2±Êê&¯®ª6ê±ZL®Ä?\x001dâ_\x001døóyxg)Ëz¥\x0016ÈÃ§L­UáíÖ*Ô\x0006uµ\x0016SkÿS\x0013eØO4?×¸¸c¯\x0001¯Ø\x0007°.ò\x0000ò·\x000b\x0000åÒ\x0000R´
ßÞô-\x00072ð5ßáÞüÜÏ	ú÷Sá>Ó£V­då`r£¾n~ÏôY\x0002\x0002 \x0002&à\x0001+`\x000f;\x0010\x0002\x0010\x0002ÂA4\x0007É \x001dä\x0002°\x0014ÈA9Ð\x0000=¨\x0007- \x001dt\x001e°\x001el\x0002Ã`;\x0018\x0003»Á~p\x0010Á	ðGp\x001e|	®[`\x0012L`\x0006<\x0005¯ \x0008"A\x000c\x000bYA\x000e+ä\x0005ùCb(\x0012R¡,¨\x0000*T\x00162B-Ð</p><p>¨\x0007ê¡\x001dÐnè÷ÐQè\x0004t\x000eº\x0004}\x0005MA\x000f ï 0\x0002Óa\x001el\x0007»Á¾°\x0018Sà\x001cx	¬kà&¸\x0013^\x0007\x000fÁ£ð>ø0|\x0002>\x000f_'áð,\x0002\x0010\x001aÂG\x001c\x0011!"F$H:R!z¤\x0015éF\x0006Qd?r\x000c9\A&GÈ\x000brQ\x000c\x0015¢áh\x0012ÊÑ\x001a´\x0015íEÑ]èaô4z\x0005BgÐ×\x0004\x0006ÁàE\x0008#H	\x0008*B=¡0HØIøpp0MxJ$\x0012ùD\x00011D, V\x0010½Ä­Ä\x0003ÄãÄKÄ»ÄY\x0012dEò"EÒI2ÔEÚBÚGút4MzN¦\x001dÈþä\x0004r!YKî \x000f÷?%_&ß#¿¢°(®0J:EAi¤ôQÆ(Ç(\x0017)ÓWT6U@ æP+¨íÔ!ê~ê\x0019êmê\x0013\x001aæD\x000b¥eÒÔ´å´!ÚïhÓ¦h/è\x001cº']B/¢\x001béëè\x001fÒÓ¿¢?a0\x0018nhF!ÃÀXÇØÍ8ÅøñÜkæc&5Sµ\x001d6»löIaº2cKMÌAæ!æEæ#\x0016åÆ°d¬VÖ\x0008ë(ë\x0006kÍeØél
»½}}Câ¸qâ9</p><p>N'ç\x0003Î)Î].ÂuæJ¸rî</p><p>î\x0018÷\x000cwGä	xR^\x0005¯÷[Þ\x0004oÆc\x001ehgÞ`>bþù$\x001fá»ñ¥ü*~\x001fÿ ÿ:ÿ¥EÒbÅ~Ë\x0016Ï,m,£-Ý\x0007,¯Y¾´Â¬â­*­6X[Ý±F­=­3­ë­·Y±~dÃ³	·ÛtÛ\x001c´¹i\x000bÛzÚfÙ6Û~`{ÁvÖÎÞ.ÑNg·ÅîÝ#{¾}´}ýý§ö\x000f\x001c¸\x000e\x000ej\x0001Ï\x001cþc1X\x00156Æf\x001cm\x001d\x001c;\x001c'\x001c_9	r:\x000e8Ýq¦:Ë\x0007O:Ï¸8¸¤¹´¸ìu¹éJq\x0015»»nv=ëúÌMàï¶ÊmÜí¾ÀR \x00154	ö</p><p>n»3Ü£ÜkÜGÝ¯z\x0010=Ä\x001e\x001e[=¾ô=<Ë=G</zÁ^Á^j¯­^¼	Þ¡ÞZïQï\x001bBº0FX'Ü+òáû¤útøû<öuñ-ôÝà{Ö÷µ__ßß-\x0011G,ê\x0010\x001d\x0013}çïé/÷\x001fñ¿\x001aÀ\x0008H\x0008h\x000b8\x0012ðm W 2p[à¸AiA«N\x0006ý#8$X\x001f¼?øAKHIÈ{!7Ä<q¸Wüy(!46´-ôãÐ\x0017aÁa°a\x000f\x0017Wï	¿¿@°@¹`lÁÝ\x0008§\x0008YÄÉH,²$òýÈÉ(Ç(YÔhÔ7ÑÎÑèÑ÷b<b*böÅ<õÕÇ~\x0014ûL\x0012&Y&9\x001eÄ%ÆuÇMÄsâsãã¿NpJP%ìMI\x000cJlN<DHJIÚtCj'KwKgC%N¡§d§\x000c§|êªO=\x0006§%§mL»½Ðu¡váx:H¦oL¿!È¨ÉøC&13#s$ó/Y¢¬¬³ÙÜìâì=ÙOsbsúrnåºç\x001asOæ1óòvç=ËËïÏ\ä»hÙ¢ó\x0005Ö\x0005ê#¤Â¼Â³ã\x0017oZ<]\x0014TÔUt}`IÃsK­V-ý¤Y,+>TB(É/ÙSò,]6*-¾W:#È7Ë\x001f*¢\x0015\x0003\x0007Ê\x0008e¿ò^YDYÙ}Uj£êAyTù`ù#µD=¬þ¶"©b{Å³ÊôÊ\x000f+¬Ê¯: !kJ4Gµ\x001cm¥ötµ}uCõ%®K7Y\x0013V³©fF¢ßY\x000bÕ.©=bàá?S\x0017îÆÆ©ºÈººçõyõ\x001aØ
Ú\x000bk\x001aï5%4ý¦\x0019m7lqlioZ\x0016³lG+ÔZÚz²Í¹­³mzyâò]íÔöÊö?uøuôw|¿"Å±N»ÎåwW&®ÜÛeÖ¥ïº±*|ÕöÕèjõê5\x0001k¶¬yÝ­èþ¢Ç¯g°ç^yï\x0017kEkÖþ¸®lÝD_pß¶õÄõÚõ×7DmØÕÏîoê¿»1mãá\x0001l {àûMÅÎ
\x0006\x000enßLÝlÜ<9úO\x0000¤\x0001[þ¸$ühÕB¯\x001c÷dÒ@®\x001dú i Ø¡G¡¶¢&¢£\x0006£v£æ¤V¤Ç¥8¥©¦\x001a¦¦ý§n§à¨R¨Ä©7©©ª\x001cª«\x0002«u«é¬\¬Ð­D­¸®-®¡¯\x0016¯°\x0000°u°ê±`±Ö²K²Â³8³®´%´µ\x0013µ¶\x0001¶y¶ð·h·à¸Y¸Ñ¹J¹Âº;ºµ».»§¼!¼½\x0015½¾</p><p>¾¾ÿ¿z¿õÀpÀìÁgÁãÂ_ÂÛÃXÃÔÄQÄÎÅKÅÈÆFÆÃÇAÇ¿È=È¼É:É¹Ê8Ê·Ë6Ë¶Ì5ÌµÍ5ÍµÎ6Î¶Ï7Ï¸Ð9ÐºÑ<Ñ¾Ò?ÒÁÓDÓÆÔIÔËÕNÕÑÖUÖØ×\×àØdØèÙlÙñÚvÚûÛÜ\x0005ÜÝ\x0010ÝÞ\x001cÞ¢ß)ß¯à6à½áDáÌâSâÛãcãëäsäüåæ
æç\x001fç©è2è¼éFéÐê[êåëpëûìí\x0011íî(î´ï@ïÌðXðåñrñÿòó\x0019ó§ô4ôÂõPõÞömöû÷ø\x0019ø¨ù8ùÇúWúçûwü\x0007üý)ýºþKþÜÿmÿÿ\x0002\x000c\x0000÷óû</p><p>endstream
endobj
64 0 obj
<</Filter/FlateDecode/Length 4080/Subtype/Type1C>>stream</p><p>H|U{P\x0014g\x0012a÷A\x0001w\x0019\x001e»0³ ËCAÔÈK£ >\x0002\x0002*\x001e,°°\x0012q\x0001\x001c.'jÄ¨u¥uÑò«\x0018£\x00109QAO0ê\x001dÄ\x0015\x0015#\x001a±\x0012\x0013SËIL\x000fô¦î¾E­ºª«Ê\x001f»_MÏ×Ý¿_÷¯{XFíÄ°,ë¹0-qÁä7¬U\x0016SÙ"Se¥µfJuMãe¨âÏ*jEr\x00151\x000f?\x001eí\x001d­&þLÒú@7Hs&\x000fØ=á¤Èk\x00185Ëª]2MÅyÅë×®JJ¶×U®.±T\x0019BÃ\x000cS£¢¢Ã\x001dÿqùVsñ\x001as¥!Ø0¯Ò\ij]k^\x0017a°TUÇGFÖÔÔDTÕ[K*MåºBkYä¼Ìºr³!ÆPd.f\x0018	d 53e¦\x0010úÄ8;1nNÌ\x0004ñe\x0018=ÃLS3Iãt7¦aj\x0019¦az\x0019æK¹Á0w\x0018v\x000bÈ$«\x0017°\x000b	3ògRÌ
ÖMaKÙ>ö¡Î)Æ©Ìé/N z]Õª:¥º§öQ/Q×©w©ÿªþ\x000ft_¸e\\x001f_Ìoã\x001f8/q.wþÔ¹ÜâqÍãpüòñgÇÛ]Þqiw¹ãêã\x001aæºÕõª¿ÛF·!ÁSx[èqçÝÃÝ+Ü¹?õ0z\x0014z\x001c\x00101áF§Ù®\x0019Õ®ÓVGan×¨O\x0017ÛÔ¥\x0004u©0W­l\x001d}Û¾»±\Q\x000eß°ë\x0008æÚç#xH°»\x0012¨U\Åß6ñ ¸\x0012ëb\x0011ÆnrÂýÕ\x0010\x000eÊ¬\x001avß§j\x0017\x0004sç!@#w\x0001é1Ã#\x0004%Îf%\x000e@ím¬%Â\x0011\x001bè,Ð³\x001d\x0010¦ç6ñ×kõýSyFrs\x000b*2ô\x0011É\x000f@wðàwýáãK§ËóÛ¥ &ÝËæ·NÔc:ú`\x0010Zä\x0006\x001eKÁ\x0003\x0003`¡$Üo\x0002o%\x0015¼Ù~0Â~¤ê÷j\x000eòÀ\x001b\x0002À$À	½Áy\x0012Rózô\x0016ÁéÖlåÍ<Ê	¯£4SIåõ4\x000cDÑßä±PA4²\x0012¼±\x001a\x000fÓó0}q\x0005¼íÙPL\x001f\x0005_\x0006_GRGB#5\x001c\x0002_<DÁ×qkÐ\x0006>0\x00054ô-´¤RM\x001c\x001el;×+Ã\x0000îG
hÑ¯­(¶\x0015èf
Bü>\x000fâíGÿºvªbõIi\x0008\x0008¹6ÿH\x001eßD\x000cÃB\x0007s+ø¡\x001f,\x0004ì<X=²¤½E1Ü¢\x0018F \x0013\x000c
à§ô×°ð	\x0004«`Ux­ç@k«ÜÖvðÒ\x001dRÁöR>yÍ\x0015e¯¦\x0019ÉòS}ECzaA\x0013ø*½5/\x0019)	MÒë\x0008q/òôÓ>@\x0007ß\x0000e)\x0007qø\x0019ÙÁÁ\x000ch'ö\x000c\x0008¤é§ð\x0018'1</p><p>N\x0012\x000cçï_ù\x0005Â\x0017~ÊL\x000eÚg\x0012ð ×\x0003íá\x001c\x001eTÂ	úÒ,>õ SrA7V¬´ð[½\x0008é´¡`÷ð`Fª1\4¦\x0010,êy4\x0017\x0006Ã"i;èÄI)\x000fAÿÌt}èéþ\x0018$*[i^ì$IØD[¶\x001a¨0^êd\x0005­ÍXÛVßã d\x0007ð\x0010«{°ÐG\x0018-á;\x001c\x0018qDê¯ùöÂ$y\x001bjÊM\x0004ÐÕÓ"­ú\x001f#\x000bns¯æK\x0007nÜÕý.Æ/®\x001ehé®§\x0011l\x00001$å\x001eLw;À~CÁÆR°6Þ´¹ÄV&M½\x001f;ùI,ÙX]µ¹B/ØU\x0002ÞV</?\x0008ö*DªN)"p»®~\x000e\x001e:\x00101\x0012#þÁïÊ²\x0016¦Ø\x0005\òÈcö"\x0018Tð\x0005ÊbÏ\x000f\x00045wW\x0000\x0003F\x001d\x0004wÒSsWÊ ÆØ84b\x000e³ï£\x0011Rb¥W®PD}¿¥®<ô
-O¶\x000er^£µH\x001e2"\x0008hfv"Á:4® §f&õ»ÓÇ°uSl-8]\x0004òÿØæ:°åC#HìY8£:\x000b"\x0001	ÏpÔ¿é¥s·\x0017DB\x0004FrBG=ø(ùàC\x001c</p><p>; T\x0005ýT\x0008ñ\x0014~ Ê{y(E\x0006\x00020\x000eã)@,þH×Ásº
â¥÷ÀGLÈù\x001aB\x001cs\x001fÚ5póæY\x0018"Ñ©	Y>;ÂµRI.£Ã1\x0019&ª`²\x0017L\x001cY\x0016ÂaböaÔüú	\x0011V5Aç\x001a!DuÚ±\x0002¼ð\x0000\x0007ãÀ\x000cÿÜÑóÔ!\x0012mÔ\x0000Á)yq¤ÇSIwÇ#ús-eY9åæÄ92\x0016 \x00089\x000e\x000eÙ :\x0002ÑL»)À\x001f\x0000cµ¹½Ö\x0013½_8H ÀÛg \x0008[\x001cs3g_$iç¾ë²,ßå3</p><p>,\x0019éùG[K¤\x0018#YzñVá¿õÂ^*â pSÒ(þ§à¯§^à\x000fA\x000fÀmºZ\x000eïÙWî\x000f$pÃ\x0018p\x0013!\x0006ª	VóB>\x001d,º\x000f=)\x000b/ö.ÝH\x0011t\x0018á\x0003</p><p>Éøó÷\x0010æ\x0014\x001dÔ.¥ë·4VIïÀàe×r5ød0ìùøøî\x0016}ß¹ât:\x0007i¦¢Ô,ÓGmhñIÆ¥ßéMõ 2\x0010`\x0002­\\x0007\x0004C#ÁyÀï¨ÌÇ\x0006ë+tÎ(ª[W"ÝÛÕüà[}WKuÅq¹\x001fxr*3ó£9zL
Ãø'¹Ç c	9©½{Ý-ý\x0016ÐiE§ûäí|_k{o_[~ô.jÎO\x0004«
\`)e5\x0017ÆkNRE¸\x001f$?=
ÚgÐl\x0013Á0|\x001b´òN~(ÿLú	Iû¤ëXó¹¯t;y`£\x0006Ñ\x0017uÑ3¶ðI'Vv½%i¥½U°bn+îÃ³!ÞWf«³KZ.Òìç[/o±äHÛøe%%9ô2^V/,hí¡ì>?Ý|åre)Eö¦©8ÊìKªj¨¥Ê¾B}EÑ/µm?®~¥ò\x0016ÚÍ
´)%/WRÅ«´á\x0011Gg\x0003x\x000eÃ`/\x00198ñ÷kÏ)æëÕÝæVét^êáx=~èØP?P2Ìßüe.íÌÂB\x0013\x0015xA\x0003ý\x001aæÒç¨TæÒÏ\x0018|Ú@ÛðÓ]ø/íÕ\x001e\x0015ÅyÅ]Ö!¸a igx\x0006¢¸RSÀ"b\x0013!VI\x00009\x0001\x0001\x0010\x0011Geh\x0015\x0017­	
§­%*</p><p>\x0011b ,òX`\x0011\x0011%AÇQ\x001a(!¢±ÒC\x001b\x001fÕ;\x000fszg19íiÓ?öÌÝïî÷ûîÜßcìÇ Z~°ÇE¢jùåAc\x0001S[õ§\x0013\x001dí\x001bß4#`E\x000eõ«xQ ×"Ââ\x000c\x0012ÍP\x000cÌ\x0016¿|£4{ãoô×½Zß\x0018#.t¢\x000eÝH»&°Ie:¹\x0007õ\x0010â½âíÁ
oÁqb'q`íÝ¢~IÒå\x000eï(K·óà{÷\x0006DHr\x0000q\x0008fæÅD\x0007\x0006Æ´ýC\x0010÷@Ýñ\x0002T¤¶\x0012ÝýpÌ\x0016òm5ì~\x0007G\x001a¶+yÂ&\x0013:â)ãp?O³A;^càö×«0×¶\x0012é°\x0008~ÈµÁ*\x0003ßc.oª¸_\x0004fúßú(¹N<º.¼4HX\x001c±9sµÔ@ÔÔ~£©øÐ[ºBÚÂ\x0014­Oy/V V#
!×æ:°êªØzO(HÿÀÄo3¬¬Üi(\x0013c×\x0013SÂ\x000bDv\x0001c\x0008
4Åí;Q\x0012ÁkqÌ5ã£\x0010*\x00153\x0010úì¨sp|Rl\x0008EÄár\x001e$\x0003^ZúÄ#ÍI\x0017µ0_µæôu4ëÇN9Ó\x0012æVà\x0013\x001b\x000eï¤\x0010«\x00138U-8«¡:ÿ¼ÃØf\x0002Ç¨é\x0019úµBpB÷5îQsw_óa]F¹8t:¶fuùb¸»\x0011,Ð^¸\x0008]¾µ~</p><p>ë.\x0003?ÐÜÐR%q9KÐÄQQ\x000b\x0019SÚÚ¥Ó<-	ÅÎp-$ôïÚ»b\x00025v\x0012j\x000bB=6	u\x00025,\x0017É8c\x000c4ðê(8¡o£@5äòvWw´IAW¨õ))ú8ae\Ý@®\x0004\x0017é²wK</p><p>\x001dA\x001b\x0008O\x0013/"x\x0012k²@Ñi?P9!Z¢Kü`aù¤pªzÍÝ\x0012KÞÃQÓõ hTÃ¨/ÃJÐÞ\x0006k×2ºþ`±ôÀÛ»JDxùÃ¦Ìß'	QIÛ22¤ÌÌ­IáoF\x0010ë\x000eÝE¼Àz\x0008eê\x0000Ì$3jÂ\x0008\x0010/þúùRsdj,;{Ù\x0011\x001f¢<¬3M)kë\x0004ç^$\x0001\x0012*CÀØ¢»\x0017êZkÅ\x0014fa|Â\x000b¯E\x001eøc¼\x0018G¬¨Ýç¶|"Ây~eÜ\x0011as{WWK?J_lÔJÇ\x0013øJ\x0019\x0014E;ñ\x00080H÷TU·\x001e¯H}E$x$\x0015\x0003ê°=^JJÇÙ(X,3êÐLº±èü\x0005¾È\x0013Oú·\x000fÑVd#qA#õ\x0006Z¾hYÕ«º\x001e­ÚöÕ\x000cþfg\x001bXIr\x0005F®b&A·eCÞÎ<ì2óÎÁýù\x0005ÜÂòçÝö#q,ß\x0002ÖØe²ÅÏ<pæÚ\x001e¢î®4¶¶¯_aA
åþðä½³lÅMh÷s!Ñi1Iâñ¬Ø#+\x0013cS%när¤øoü;¶\x001bú~à>ê\x00087d©ß\x000bs \x000fæ 3`\x0012x\x001a\x0015?»\x0007\x000c,ö2 u\x0006</p><p>#;&\x0004¤¸!Ú{\x0002wLsøbÏ]Á 8ÚØ7pÞ¼\1Q\x0010²\x000c\x0019Bìuqç"ChdÊ#FtùØiÈ '9û\x0004rsã\x0010\x0017äOüôk6s#ÓøÌO2ú[[LÍ ì`ÙæÆï/}8z³ÐÂA\x000bUE7ÓwòlÂÎ</p><p>à§¯Ô+ø¹"KW³iî,Ì<Ù1*î\x0006oúg¿Ï\x000c±æ*ÿ¦ôx\x0019P\x0015V5`DV½\x001aÒQÀ>û\x0008Ôè\x0019C\x001b\x0002êÄWË\x0013+P\x0003ËÞ/©©7ë3Mbç-ª>"¤4Lpõû\x001bºOß\x001bëÅÓY¦miùLöæÄ¸¨CuÑâ</p><p>\x000f*²ï\x0013]À<°uÑÉ\x0001 ±E\x0006s\x0019Ç7×ì+®¸: ¼·t¿Î\x00166l=P%Áî» qF+w!? \x000erá2º+õ3d\x0001ìpnld_½m\x0007öÒÛ"cë\x000cü9SCó\x0011±¥ Ì+\x001bR££Ó«{D\x0018$Î\x0013Ê$\x0011uç²"\x001bZ¢ë\x0014s1¨áu4\x001fÐð²/-nô3Dö\x0000BÞ°àoYõÞ¶ô~""ôÅöô(\x000c\&\x0003\x00148Ð\?º\x001d\x00169ÓKð\x000b®î'p"³éEä\x0002Åõ\x0007ÁÇ\x0014q¥ÙÅ\x0016òªÞ³Ô\x0010$\x001by2Fÿ/&ZRN'ý\x0005ø]#ø:4&\x000b¡\x0002³Á~xÐ¾äy
%?\x0006|^A«°\x0006@\x0001\x0006!\x00135T¦aël!'»pÏf)ÉÒ×4ä6	76Þ« X6)Gaóä(U­¼G-G4ñ_Ây\x000b\x0002</p><p><Û\x001fÉ¢v0þ$ëI_OÖ:¾\x0007È¢</p><p>\x0019\x0017H`H\x0010¡I\x0010þg$óä/lö»à\x0000>øoI6èùû\x0018ÅfÐðô
Â~Hª¯x\x001eµ\x0003éÅeðz\x0008vÃÄêÇì\x001c´ú)GoæèÛþkGoÿ÷®wð·hWð'³Â©é¦\x0006>úG¾,_ÁU0\x001b\x001fÇ¬\x000f©ô\x0007{¾?¶e3ÌÚr\x000cw¼M÷÷âûã?iï/\x0014±£ÿò`çÿeãÇÎú=z8\x0011Á8­»_k¸rÎ)\x0019gtÐ^<èÿ*î>\x0016\x001f r*BÜ\x0002k·ÿ0BÀµ	-ÿ°F\x001d¥ßªY5RFæ6¥&XbØ	5»O6î\x0001ï}4ñÂ\x0010î`\x0003.³@³÷Fs¹È\¤
¥vòUþ_\x0002\x000c\x00004\x0012ô</p><p>endstream
endobj
65 0 obj
<</Filter/FlateDecode/Length 4930/Subtype/Type1C>>stream</p><p>H|yP\x0014w\x0016Ç=3¿n¡9Æ\x001eqÀ1\x00113ÈaVS.#\x0008</p><p>Äcå\x0010\x000f4\x001e\x0010DG\x0012×Bc<2\x0006]¯ÄMbLÊdãzÅu</p><p>A¥TD\x000eg\x0006\x0001!º\x0012ñHÐìZ1¯7Iö7lí\x001f»[]Õ]ý{ï}ûó®æFE8\x001b<sNúY\x0011)eÅùËfæWTY#\x0013ËÊxfÅÄ)F\x0019¡ðwX5¸op!\x001dNRÿ8É\x000f^ñ3\x0001p!ðÓÐàþ "pßá#J­Åù%\x0015+Êó\x0017\x0017\x0014.(\¹¼$:zrteqÉò§GSWV%WU\x0014\x0015WÌIá¦Øèè1ûK¦ie\x0005K\x000b*L£LÉ\x0015\x0005\x0015\x0005©eË\x000bV5\x0015WVO²Z­c+«ÊË*òË«Æ..[\x0016QU^`zÑôJA!!\x001cyj\x0012®"½\x0011\x0010/\x0015ñS@_2NCâ\x0008DH¢7yY$¥,SJBV\x0013²]|DÈQBZ\x0008¹ª"íô\x0010ÒK¸M\x001aN3$©§©Ò(ÉaÕ"©ä
ÒÉ\x0019¸IÜ|n\x0003÷\x000e×ÊÝVª¦¨\x000e¨î«ç©\x0017j¨&L³@³GsRÓ¬é¡Ñt&ÝIïñÃø\x0015ü]A-ìòòò\x001aá5Ýë}oêmòÎö^ãý'ïZX\x001fÏußhß\x001aßVí4íkÚ\x000f´×~ëè·Ú¯E\x001c-n\x0012ÿê/ùÏò·ù\x001fóW\x0002b\x0002^
Ø\x0013p50<pEà¦Àc\x000fTAûútfÝaÝÏCJÜ¦K'ô¼Þ[ÿº~­~ÝPyõÁõ­^\x0019Y¯Æ<²yp{3ß#Á )n\x0003Å<÷4ÉµA\x0004·ÂjE+ý¸AÀ\x0004EKËfIðÔc\x0017ì_\x0005iv\x00015è°ò½®û°¾·C\x001a\x0005;oÇ4zÇ\x000f]\x0019t2?Ú-éîÃ0\x0000\x0008F bí:§Òíä.ö¨\x0001×Iß^=~©Ñ8ÿ\x001c½,)\x0004%3xCq\x0000Gà\x0003Rûù¥ù§ä3\x0017éÙF`\x0012\x0006ã(,6¾)`	Hø<LÅïl\x000e¥ÑÁõv)>=ê^=äò\x0005\x0006x\x000eò;\x0004X\x00060aì8;YÈïP\x0013,¥/ \x001a#eôS\x001ayqÍ\x00015vØìÑa"Ê\x0014\x0007º \x0006\x001cvtÀføÞáçÅ*s\x0003vüâÓ\x0005MÐâÀ\x0016Ø\x0001ÿp¸Ë}ÌîtBÙáî3\x0017'ÜEgkv\x0002¶á]hKàElÝ¿Ê5ÛÊ1»z\x0017Më..5ä®\x001aN¿äñèÑ\x000fÏ_3(\x001b\x0013Ü\x001bÈ¼¼ÔÌ¢\x0003gKä¬<:ûóKo¹6Ë×ú\x000bîH\x0007ö¸|\x0014ÌØ¿JiPÖÞ\x000e%¥KwºWßÁëº&\x0001º}h
\x000fK\x0015\x001fênb_¶\x0008XêöÅ\x0012ÅZX¤ú\x0019\x0017\x000b#L³Ciâ\x0015_w\x0013mvÍì®ãÝ*¥Na~æjrÓÁ:¨¤w«a°Zdð1°È¸S|\x0014!\x0002Ù\x0015cpüù b\x0004¤È[\x001d\x0012Jc@\x000b\x0016O_,\x000fÀ\x0017$¾A-ZdÖ\x000eK$ú¢$»X\x0015mvpxª\x000c×VÑ\x0006:\x001eß</p><p>\x001b`6¼-<º\x0017Ãe,â»Ü\x0004\x000e\x0008\x0016Ø3Ão	\x0011)iÈÉ"ÿ'£+ö4¡iþôÖ7ÿËØ~åÀÉ/å\x001bñ\x0014ßíP?!Núo°ñU©KseÓ?s³@3.+ZðZnWD´¡áÕUpºag\x0003liØ`
:u\x0005Æ7Ýh	Mº×ÏÃLøAêm¼þÈ¸]\x0018s}ÂÙñfy£0úR|¯\x000cç4gåL1n\x0012¦æÌ_ôå5yà8t¶Nßà\x0017\x0012VãÏ´%pêþ|\x001eÖ+Îà×þõ¿ô¶6Hó\x0008Û$Çá³u\x001eiù´,â#åÁc®ýºA):ö\x001d>þ¡/vä1a[þêò*/\x0011ç ìºÏ]êTC\x0013ÊÒgµ\x0014õ%\x0008\x0016\x0003X®±ç°>y9;Â0L7`ú=\x000cØ\x0018ù×H°u¨ÛY$Äöß0H7@z4al¿¼<Bð¸\x000e\x0014Ñb@K"{\x0006ó\x0000Ù\x001esmýêzôû'fäçB
ãÉõðäÀ{]ÜEØ­¾\x0008ïI°»\x000bwóÿiÓ÷?áÅÚj»rËÎ5tÃ\x00136ÙLF=\x00023\x0014zF²0\x001cFa\x0014FÑf\x0017\x000eà(·Ú%ÓTNÇ)Î\x0001Ú\x001f´3¢8K\2jMl;Û\x000c¶¬\x0018úNWF:a\x0019ï¦\x0002smNÅîà!=êzÅâÄN\x001e >|üEc¿¡F\x0000ÕKÝÈ¿0#Ï%[@ÛjÏ\x001ci	q^;)uIö\x0018#®ÂíT_íCa-Ó	½®\x001aî7ð5è,Þô%$ïÈ
6zÁ=<\x0019ê\x0005ü=ÚöäÑOxàºçÅ\x00187\x000bãÓ2â²ÿR/ÏÍ¢éuí\x001f;Ù</p><p>oV*­Â·«\x0015^ß\x000eãï7U*§óxß½fo\x0006N\x001ek%öûâO¸Q4Ú!×ÉÝ¹</p><p>o1·\x0019GðÀ}\x0008õp\x000c\x001fÝ¾y¥Õ(÷Â</p><p></p><p>Çø¯Â¾ºRúÁã{ëCn·fF1¨´ÔØY\x0007OåÉóÓiÎ¹k7CÄ7«¯³\x0015\x0016:¸.¸ÄO2å\x0001¦Ì\x001694¼\x0007iÂ¢Ù2Äom!à\x0015rþo+\x001c7¸LOdg<-\x0004_4c8®1²®\x000f&Í\x000b_Ù\x001c²õª\x00143ËyÜ¾ÒvûëË³¢ä-Btz\x0012§tÖ4\x001f'wAT\x0003¯¿ÉÃÇ®¡ô¢;r*Ü\x0014ÄÊu­ðÉ\x0015ØÙ\x001atª+£\x0013>êÈìÒ=\x0003ë$\x0018úð+ðaéÞÊlL<(ë\x0006\x001a?«=wãi\x001bÇt"EMÄdTÉÿ¢¼Ê£¢ºÎ¸á½±\x001d"ÏGRyÏ%î,V\x000bD\x0019\x0018\x0005dEpFTPP@°JeâIjXÚhÄ¸7©\x0015D'\x0015DE\x0001\x0001AU\x0019`]Û\x0001-±j¢ßsÇszg0­isº3Íýîw÷{¿ßïûî\x0001Ê«Z~+£ISå¡Ë\x001d\x000fPÈö[/pÀñÂ{6Ò°\x001eÈÐ|³·¯Y!Ã¤aÞ8\x0018Ý³q</p><p>o1âµÁÎ¦;wº"¼,káa8\ -lPC§HÕ\x000bÍ¸\x0003\x001cifÖo)¸\x001aÃo\x000b%¶ª\x001a~­caÉw0\x001b²,<Ü\x0017]Ã]Û®(\x0008d\x0011½x.ÎN!vÔ\x0003~fl.i)áÇÁ5A\x0014[\x0000§e¡­ð£õ=÷Go­ZÏt]ë+ó\x000cºt\x000fÄ:a\x0019óà©+iÎµ±êèß\x0016>~Éü&ë0ÃÎwAÕ¤&ZÝyp'a\x0015:O< Q\x0018\x0012ã_k;Aíúòfâe®,>èk/\x0016e=ÈÌ@\x0005¸Sß«\x0015K0z·à\x0008DrôL­0 \x0015©{á\x0012fI1þ SG\x0007À\x0006Ã\x001f7¡Yu\x001cz§:år+Î×¢ª\x0019lmøM«l&êC\x0002Î{²ÈÎÝk\x0016Î5¿I\x000es¢8 cþ\x0010îx</p><p>X§Xþ~hq}8·)ð7\x000c¦<`%i\x0013ô}¸Öûp\x0007~\x00136t\x0013WÜÉÐ\x001c¢Þ\x001eø\x001e/\x000e`¦.zòW\x0008à\x0005©9B¿ð÷Þ\x00080À;°Fj\x000e¢Ðª'`\x0001'ÑN7E)EÅN\x000c×>c´$\x001c5E\x0011ï(Þ<â1Â\x0003;V rh4Å5îuï!\x0007\x0006\x000e6"?S\x001cø5¢¯­Â^­¸Ö²cÒ¡uà÷2\x000eùÀéß\x0008|}©\x001eëè\x001aÏ`új¯Ö\x0014ñô'Þ:¸Gµî­N¾È]JÎ\x000bf\x0014{Ó¢ùsaÄ+§Uì_jbó)ÔWÛâOF²Z¹v\x0006î4tÍ{aw¹Ó-LHt\x00063¿£êúpmyÖ§Å\ å\x001d\x0014áu\x001cÎÔ$¥\x000b	\x001a{£\x001e\x001at%te2Ï\x000fÿ\x0007</p><p>|æÎô+Â\x00129¨QôG/\x0013ôã\x0014]\x0019qIµaý­ñðî\x0007%PÒ;p{°Kh·N[ãëÁI\2:\x0004ç\x000eQ\x00156Ö\x000bø\x001eªK\x0015×ø­ÕDÒ\x0007Ûw)XwÙ\x0000Øá®\x0006?ï¾}·¾dgJ\x0011w½(ßPäÃ"9xns³LpnÑ$xû5ÕFhÔc'3ÛªÚ[yú£yzS\x000cÕRMIò¿bgÎqF>|&\x0006|º<çþ¤a<ý{°ÛbiMë0\x000cßîYì¸,</p><p>ÙIW`ë2Ôàß\x0008\x0001í¢*\x0003\Ô¡0é¯/¬¾ÁÇU\x0011;vlM`=V©Êæá\x0019yèdÎ©ãàº\x0002lÐÛHâQºãv<¾\x00034Ü@Åèx³®\x001d¹á9ÿ(/A_àYms;ÌR\x001e\x001bÄñÄµ\x0019Øv4½ìøæ¢*?oÿïÏrjê2ýÈNvKÒ¾´4~÷®Oâ¢\x001c7\x0006\x0005«)ÉaäÔ\x000eS5H©|uñqÈGNñV~i)_R_§s¤\x0004Ì¢Ç\x001b\x0012×WãëÏsC®øË#×ÇîÏëj¯pÞÔìµò\x0005¡ag.Fs©áÄöÖÎ½Ýìa8Æx\x0006h°x4ÙÑy{°Ï\x000fÙ`óCâ«½8IÊYK¹E\x0013Gõb£\x001eºÉû-½½\x0015rg\x000eá\x001fR09È0sÅ¦-òT\x000e®É(	Þ§\x0004zÄ¾wÐ[O?é5Ù2#^$=väåfF/äÉ°\x0004î¢Åm`ê·Fõ¿}ù\x0002¿!\x0006Êªy¡\f.¡6)wÇg}zèL.¢\x001c8õÕç¹,>B4¨\x0017\x000f:X>8\x001eSO[1âÚ`<\x0019ß´éôÐ\x0004Ö{u­Ýºr\x0005ÆÚ£\x0007\x001dõ°¡¾KW¾ÁÉ</p><p>}\x000c.°{®×ÆXE2×´;úêjVº56:§kñ=R^ËzTO÷ý·ËÓ#x×¾\x000cà¢Ád\x0007­ÁJ"pü\x0016?tøc\x00148-\x0004</p><p>9"Ç\x0005È\x00169Y\x0006a§qD#wHÃ¸ùÝÉ\x0016\x0019ØjîÞï^&[øD­q_9t¡\x0011¼\x0002Å9nD\x000b\x0019=ä\x0013\x0002ü	ÒCQ 4'üC3¯\x001ez%Ï\x001f¥Å.a%?I\x000fÜe\x000bñÎ\x001fKÊ*(«ê8ä\x001có\x001fe>ÄU\ßÿ;\x000bpZk)á!\x0012\x001cû»Æ¹#ýä²#ÁëS|mé\x0012 påÐ¬vÁµM¤êÈn1$g1\x000f{Æ0-\x0007B¯üò*·ª0¦ \x0002·²Ë\x0017\x001bª*©¥Üå\x0006¢8ví¹0ÖÙ/b\x0019î\x0008\x001d\x001f\x000cïàºS¯§mÆý :>9B®((æ¶¯'66hw«ñÜ¾+»C­\x0016c}+³ÂóÇ¿<Ç·QYéÊÏlÌù
<ôÁt5\x000eN2ä\x0014\x001cÔîSÎ;X\x0006VßÉSÚwZÉP	Lÿëª\x000bØwYHtØiÜÖy{ÇªÆ80ÊÐ#</¨}sðÜt¡@)*\x0012"Å¶Ñ°N( ¼I4ß,Es\x0005©õI\x0016²\x001fÞp³ÄUÚ¼h\x0005DYC§\x0008\x000báMóBBCÒ\x0017À\x0005ïó%­Ù ÿ¦\x0008Kµ$b^JÐ\x0012ÜqNÉj«üD\x0004_1H<Æ\x0004\x000ft\x0002IÑ\x0019b\x0004\x0016?+XL\x000cÈ\x0017Î'\x001cÃã\x0019"D"gðB)*\x0014äbÈ\x001deà\x0017a9\x0008Øµ{Ï6v×\x0013_*ù=¡ÄÇEÙÅlwe	L*á!DøXIJ\x0016ä´	3ÛDÂTq¥ðV\x001b*#¡\p!nÉ\x0010(¢P¹ÙÈÊÕ¢ëÂ\±ðn9£*Dv\x0010\x001f!òB´\x0018%\x0012ÙT,Jbê</p><p>Ñ[ÿò·äã	û4¢PÛ?6@ÚÐJ\x0003ýè6JÒ\x0003\x0015Ôÿà¤PgÞÌ\x0018<_\x001eßÿ\x0019\x001añ$HmufPþßæ<ÒàKJ¤«\x00175	vøñË\x0008vz³\x001dvºwa\x000f\x0010C¦\x0018R`\x000f£©S\x0019°ÌµÁQ</p><p>\x001f,rß:y\x00077QÂ<1¨Ê\x0019p$â\x0004þ.½ï\x0019á¹ß\x0005~û\x0003{¯~¬¿UrE¿ëBdt¿g!dø¾·­þé
¶ú§÷å¿ÞÀ$õ°á\x000c°ÉñÝ
\\x001a\x0003Õj"\x000f¾/o\x0010}xéÀ­õò\x001b®F>¾¹åî=*.©8PÚÂõÔw\x000eX\x00157k¢Ôw\x0003ï¬¿E­=¢¬2än¥»í3\x0005VÊj â\x000bT)ë¾ÿÍö]Tî{
¬¾».ý`7¨¾û3áw¨¡;¬H;ýèùÓó°"ÍËØ\x0000X,ØÿPÚû=e/ãÑCßí\x000f1ú¡$zíìGÀNì#Ï3\x000e\x000e^^&ÀN¬É\x0019¯kr{Y¢Òw\x001c\x00016Y®ß±gïú¸@`Ý\x0014\x001e\x0017)Ç÷\x0015Ø2õ9ÿýûîr¡5?¾\x0008ßX#víüw\x001fÖïçÙÎÿöa½Íö{þÏ\x0010VG6­?\x0011ÀJå»ä÷ïß%~gUû1IÔà;¿Sæ\x0017#ÖjmõÿØ zÍô»c\x0006+Á¬²\x001fÙ\x0006RÕo%ÑÃßÅ/õí]³a«$©­$ùëêßJåÜX13Õ?\x001e\x0002-üòÅq\x001dkòß</p><p>*6mà6\x001dû.\x0006³LæÇ#Ñ#lç.sc=Æ¦û]Õm×ß|ZXJÖÚo³ï\x0007\x0011\x0003©ÐÁÔé:[\x0005ô\x001cåõ<¬yü]\x000cZÍìù.\x000f64ËúÿæÂª\x001axÕ³\x0007{Õó§ï\x0012rùÖ}äòíÊ\x001fP«
¬C\x001a¨céê\x0003ó`:*Jû\x000b :</p><p>\x000bkáÍÕß'ùþøñmo<ÿÝëØwÆcßÏ3~g»Îüãì¢'c·éKÿ\x00162Tý­-o\x0011p­³²«¢Bª½ª§¦§FÎ)\x0000X5é¬|¡ù]TúÉÑ]gwËGnc
OKL÷6\x0005µRä¿\x001dû]ÏÖ5«{Î\x001c©	ìs»çõÎû^wìw1Ûç¥'.Ý>»9'|£<_Ã´\x001fs§~·\x00064­ý\x000c×eî}\x000bxx¿×ü8#</p><p>\x0010`\x0000}´/Ð</p><p>endstream
endobj
66 0 obj
<</Filter/FlateDecode/Length 5009/Subtype/Type1C>>stream</p><p>H|T}PT×\x0015¿owß{\x000b.O`÷,ÍÛ­</p><p>\x0002"\x0010 FPß\x0010\x0010A\x00080 \x0008\x000b0®Ôø±\x0012­1ÕV\x001b\x001dë·¨¨(*\x0018ø\x001fMAhRQA+Zü^8\x000fÎ:Ó»¤N;Óþsï{Ïùß9ç\x001fCT</p><p>Â0çÔäô¨Ô±QÅeæì¢ÙÙ¥¥Åqq¦Ü¥Eög\x001fÙÀÈî*Ù¨\x00111
¿\x001e¬\x001f,b? 1©{ c8\x001ct\x0013.'~åäJ8Q9éFd/ÎËÊ+3\x0017,^RcZº¸ (hJÐ¥¥ÅÓKÊK\x000bòÍeFi¾Æà  \x000fýíë\x0004ct±)¯ÐTjô6Î,5ÆÅ\x0014/6-	0ËÊJÂ\x0003\x0003-\x0016K@YyIq~iv¹< §¸(pfÒgå%&c¨1×G\x0008CF²ÄWAÆ±ôH88)*H8!S\x001dH\x00131\x0013²"\x0011²ZBê\x0008¹MÈ\x001d\x0005i%ä>!\x000f	³AÉ(§°ÑY,I¡u!1d5yÃÌ`625Ì\x000fÌ;V\x0011«ÈQ|£¸¡ôV.RÞW>Pm`ýØxv\x0013{\x001dà>àB¹hn7×È+ù$~\x0003ß¥NV:ð\x000e+\x001cv;Üqxãå¸Ú±Á±giØ%£&Gó\x0013qZáTët_ð\x0016Â?\x0008­ÃG
_;ü³só)ç×.î..;]~v±ºú»îp}¤Õhc´«µuº)º?¼ø¹øÌmªÛ6wµû0wû¦0Ìh\x001c\x001cÑÈT5Ê£\x001b¡+\x0007?·Ur­i"\x000cr\x0018eÓ³a\x0016\x0007Öñ0Ù¦aa¹¬\x0011ß­ãq²¬aãE\x0018²\x0018ä'{AØ\x001b9ÚÂì\x001fàûÝÀ»\x0006a,\x001cà®!Ý8Ü>ð\x0019*.¢½\x0013/ñ\x0004+©z\x000b\x0019Ï!å­k;p°	Ô\x001fZkmwí\x001cø¾ü+\x000c7üTÿÉ!I+7\x001fl¼ðP¿¿¸¢¶°ZªÍÝ\x001bé[8°á\1&½ RB'H\x0001\x001dw÷\AAk=MâF>6Í<QBoÈ_sÝ
¦Ù\x0006¡¦\x0002ü%\x0010¦\x00114J\x0018¨\x0010{[OÞºaºÇfge\x0015F{¢bÂ\x000bð§qÁ·ó%(nÕ\x0017ÎJ?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='https://fonts.gstatic.com' crossorigin rel='preconnect' />`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='shortlink' href='https://wp.me/bAmw6' />`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='shortlink' href='https://wp.me/bAmw6' />`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='https://fonts.gstatic.com' crossorigin rel='preconnect' />`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src='https://stats.wp.com/e-202111.js' defer></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src='https://stats.wp.com/e-202111.js' defer></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C500%2C700%7CMerriweather%3A400%2C700%2C900%2C400italic%2C700italic%2C900italic%7CMontserrat%3A400%2C700%7CInconsolata%3A400&#038;subset=latin%2Clatin-ext&#038;display=swap" />`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C500%2C700%7CMerriweather%3A400%2C700%2C900%2C400italic%2C700italic%2C900italic%7CMontserrat%3A400%2C700%7CInconsolata%3A400&#038;subset=latin%2Clatin-ext&#038;display=swap" />`
  
  
  
  
Instances: 14
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/thematique/education-populaire/](https://injep.fr/thematique/education-populaire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/thematique/jeunesse/](https://injep.fr/thematique/jeunesse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "s" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Application Error Disclosure
##### Low (Medium)
  
  
  
  
#### Description
<p>This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.</p>
  
  
  
* URL: [https://injep.fr/wp-admin/admin-post.php?action=secupress-ban-me-please](https://injep.fr/wp-admin/admin-post.php?action=secupress-ban-me-please)
  
  
  * Method: `GET`
  
  
  * Evidence: `HTTP/1.0 500 Internal Server Error`
  
  
  
  
Instances: 1
  
### Solution
<p>Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://injep.fr/robots.txt](https://injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://stats.wp.com/e-202111.js`
  
  
  * Evidence: `<script src='https://stats.wp.com/e-202111.js' defer></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js`
  
  
  * Evidence: `<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://code.jquery.com/jquery-1.11.3.min.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://code.jquery.com/jquery-1.11.3.min.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://stats.wp.com/e-202111.js`
  
  
  * Evidence: `<script src='https://stats.wp.com/e-202111.js' defer></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js`
  
  
  * Evidence: `<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://injep.fr/wp-includes/js/jquery/jquery.min.js?ver=3.5.1](https://injep.fr/wp-includes/js/jquery/jquery.min.js?ver=3.5.1)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://injep.fr/publication/evaluation-de-la-politique-de-jeunesse-municipale-et-associative-de-sedan/](https://injep.fr/publication/evaluation-de-la-politique-de-jeunesse-municipale-et-associative-de-sedan/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/wp-content/themes/injep-theme/js/tarteaucitron/tarteaucitron.js](https://injep.fr/wp-content/themes/injep-theme/js/tarteaucitron/tarteaucitron.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/linstitut/missions/mission-observation-et-evaluation-moe/](https://injep.fr/linstitut/missions/mission-observation-et-evaluation-moe/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/publication/evaluation-de-la-phase-de-prefiguration-du-service-national-universel/](https://injep.fr/publication/evaluation-de-la-phase-de-prefiguration-du-service-national-universel/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/principes-et-criteres-devaluation-des-articles/](https://injep.fr/principes-et-criteres-devaluation-des-articles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/publication/analyse-des-protocoles-de-suivi-et-devaluation-des-cites-educatives/](https://injep.fr/publication/analyse-des-protocoles-de-suivi-et-devaluation-des-cites-educatives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/publication/evaluation-de-la-phase-de-prefiguration-du-service-national-universel-2/](https://injep.fr/publication/evaluation-de-la-phase-de-prefiguration-du-service-national-universel-2/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/publication/evaluation-de-la-prefiguration-du-service-national-universel/](https://injep.fr/publication/evaluation-de-la-prefiguration-du-service-national-universel/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-admin/admin-ajax.php](https://injep.fr/wp-admin/admin-ajax.php)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/secupress-8d6739e9/](https://injep.fr/secupress-8d6739e9/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
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
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/sitemap.xml](https://injep.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/robots.txt](https://injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
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
  
  
  
* URL: [https://injep.fr/evenement/bande-dessinee-jeunesses-et-activites-corporelles/](https://injep.fr/evenement/bande-dessinee-jeunesses-et-activites-corporelles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.injep.fr/sites/default/files/styles/body/public/images/conf-angouleme.jpg?itok=xvKs7t_1`
  
  
  
  
* URL: [https://injep.fr/evenement/les-groupements-demployeurs-une-solution-pour-lavenir-du-secteur-associatif/](https://injep.fr/evenement/les-groupements-demployeurs-une-solution-pour-lavenir-du-secteur-associatif/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.injep.fr/sites/default/files/styles/body/public/images/img_3453.jpg?itok=4RqvwgH1`
  
  
  
  
* URL: [https://injep.fr/donnee/donnees-sur-les-accueils-collectifs-de-mineurs-sur-la-periode-2009-2010-a-2017-2018/](https://injep.fr/donnee/donnees-sur-les-accueils-collectifs-de-mineurs-sur-la-periode-2009-2010-a-2017-2018/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://mtsfp-vm-injep-preprod.accelance.net/wp-content/uploads/2018/12/1_0.jpg`
  
  
  
  
* URL: [https://injep.fr/evenement/les-rencontres-2017-les-nouvelles-jeunesses-de-la-democratie-une-revitalisation-de-la-participation-citoyenne/](https://injep.fr/evenement/les-rencontres-2017-les-nouvelles-jeunesses-de-la-democratie-une-revitalisation-de-la-participation-citoyenne/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://mtsfp-vm-injep-preprod.accelance.net/wp-content/uploads/2018/12/retour-renc2017-diapo.jpg`
  
  
  
  
Instances: 4
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=img src=http://www.injep.fr/sites/default/files/styles/body/public/images/conf-angouleme.jpg?itok=xvKs7t_1</p><p>tag=img src=http://www.injep.fr/sites/default/files/styles/body_small/public/images/couv_thorgal.jpg?itok=YKYvJrhQ</p><p>tag=img src=http://www.injep.fr/sites/default/files/styles/body_small/public/images/couv_bd_heloisechochois.jpg?itok=xsp6iBxZ</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://injep.fr/wp-admin/admin-post.php?action=secupress-ban-me-please](https://injep.fr/wp-admin/admin-post.php?action=secupress-ban-me-please)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `cJcF4y4u6s1cdXMqJlLL3fNyljz02RgNuTh+8F162djb0AWd+GvORlgflVQRY38TKXi737b+PeUcYwMpuG2kROTdP/A=`
  
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/thematique/jeunesse/](https://injep.fr/thematique/jeunesse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `tYqdwtLK2y2nx6sqJlLL3fNyljz02SyAbT8Z6orTL4LwQfRjLZcbdUOnbW5dEq9FT/Z+sS5a4V9gWyTIMc1LoTtLcw8=`
  
  
  
  
* URL: [https://injep.fr/robots.txt](https://injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `QQphSoBhG9b+57UqJlLL3fNyljz02QcB0lnu4sealpfCb5t9nSjiQwWvLTJRbJQ9GUZQ4U60/cRKItkipEOqTK3o9Gc=`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>r��r\x0016���P$��MG�Ο1?�_@{6��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://injep.fr/wp-admin/admin-post.php?action=secupress-ban-me-please](https://injep.fr/wp-admin/admin-post.php?action=secupress-ban-me-please)
  
  
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
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 10
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="text/javascript"></p><p>    tarteaucitron.user.gtagUa = 'UA-65679656-1';</p><p>    tarteaucitron.user.gtagMore = function () {", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2019/01/DP_10ansFEJ.pdf](https://injep.fr/wp-content/uploads/2019/01/DP_10ansFEJ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>`
  
  
  
  
* URL: [https://injep.fr/rubrique_veille_actus/la-revue-de-presse/](https://injep.fr/rubrique_veille_actus/la-revue-de-presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" target="_blank">Voir le site</a>`
  
  
  
  
* URL: [https://injep.fr/rubrique_veille_actus/les-essentiels/](https://injep.fr/rubrique_veille_actus/les-essentiels/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" target="_blank">Voir le site</a>`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2020/12/rapport-2020-14-Barom%C3%A8tre-DJEPVA_2020.pdf](https://injep.fr/wp-content/uploads/2020/12/rapport-2020-14-Barom%C3%A8tre-DJEPVA_2020.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2020/11/graph5.jpg](https://injep.fr/wp-content/uploads/2020/11/graph5.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<A>`
  
  
  
  
* URL: [https://injep.fr/wp-content/themes/injep-theme/js/jquery.flexslider-min.js?ver=1](https://injep.fr/wp-content/themes/injep-theme/js/jquery.flexslider-min.js?ver=1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a></a>`
  
  
  
  
* URL: [https://injep.fr/rubrique_veille_actus/a-lagenda/](https://injep.fr/rubrique_veille_actus/a-lagenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" target="_blank">Voir le site</a>`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/02/rapport-2021-03-couv.jpg](https://injep.fr/wp-content/uploads/2021/02/rapport-2021-03-couv.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<A>`
  
  
  
  
* URL: [https://injep.fr/wp-includes/js/jquery/jquery.min.js?ver=3.5.1](https://injep.fr/wp-includes/js/jquery/jquery.min.js?ver=3.5.1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id='"+S+"'></a>`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/robots.txt](https://injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/sitemap.xml](https://injep.fr/sitemap.xml)
  
  
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

  
  
  
  
### Storable but Non-Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users. </p>
  
  
  
* URL: [https://injep.fr/secupress-8d6739e9/](https://injep.fr/secupress-8d6739e9/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://injep.fr/wp-admin/admin-ajax.php](https://injep.fr/wp-admin/admin-ajax.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `171206062`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `65679656`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616075923`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616075923`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `171206062`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `65679656`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160816`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160816`
  
  
  
  
Instances: 8
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>171206062, which evaluates to: 1975-06-05 13:14:22</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
