
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:09:17


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 6 |
| Low | 9 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - PHP | Medium | 1 | 
| Source Code Disclosure - SQL | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 12 | 
| Vulnerable JS Library | Medium | 3 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Cookie No HttpOnly Flag | Low | 2 | 
| Cookie Without SameSite Attribute | Low | 9 | 
| Cookie Without Secure Flag | Low | 2 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 11 | 
| Dangerous JS Functions | Low | 7 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 3 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 3 | 
| Information Disclosure - Suspicious Comments | Informational | 15 | 
| Modern Web Application | Informational | 4 | 
| Non-Storable Content | Informational | 1 | 
| Storable and Cacheable Content | Informational | 10 | 
| Timestamp Disclosure - Unix | Informational | 5 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 11 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/](https://boussole.jeunes.gouv.fr/extranet/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=mentions](https://boussole.jeunes.gouv.fr/apropos.php?p=mentions)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=presentation](https://boussole.jeunes.gouv.fr/apropos.php?p=presentation)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=carte](https://boussole.jeunes.gouv.fr/apropos.php?p=carte)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/carte.php](https://boussole.jeunes.gouv.fr/carte.php)
  
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.1jeune1solution.gouv.fr/" target="_blank">
				<img src="img/1jeune.png" alt="1jeune" class="img-responsive"/>
				</a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://hub.boussole.jeunes.gouv.fr/" target="_blank">Hub de la Boussole</a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `POST`
  
  
  * Evidence: `<a href="https://www.1jeune1solution.gouv.fr/" target="_blank">
				<img src="img/1jeune.png" alt="1jeune" class="img-responsive"/>
				</a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.1jeune1solution.gouv.fr/" target="_blank">
				<img src="img/1jeune.png" alt="1jeune" class="img-responsive"/>
				</a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=mentions](https://boussole.jeunes.gouv.fr/apropos.php?p=mentions)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.labonneagence.com" target="_blank">www.labonneagence.com&nbsp;</a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `POST`
  
  
  * Evidence: `<a href="http://www.cnil.fr/" target="_blank">www.cnil.fr</a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.cnil.fr/" target="_blank">www.cnil.fr</a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/carte.php](https://boussole.jeunes.gouv.fr/carte.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://hub.boussole.jeunes.gouv.fr/" target="_blank">Hub de la Boussole</a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.1jeune1solution.gouv.fr/" target="_blank">
				<img src="img/1jeune.png" alt="1jeune" class="img-responsive"/>
				</a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=presentation](https://boussole.jeunes.gouv.fr/apropos.php?p=presentation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://drdjscs.gouv.fr/" target="_blank">direction r&eacute;gionale</a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=carte](https://boussole.jeunes.gouv.fr/apropos.php?p=carte)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://hub.boussole.jeunes.gouv.fr/" target="_blank">Hub de la Boussole</a>`
  
  
  
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/img/equipepied.png](https://boussole.jeunes.gouv.fr/img/equipepied.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=Y\x001fªã3fÅ1Q¡ÎzuFÞ\x0000ë\x000f]\x0017\x0015\x0000QÈ#^Tx?\x001fÞ\x0007(ª¿8\x0017oàLÿç3xuâxàÃ\ªð9üÍò><çâÉ\x0013q©CN|\x0007\x000b\x0005\x001aì°\x0013Î	
é\x0017\x0012\x0006%>àÛÚg×ßÐöpøsàÇ<ÛvÕë\x0007¬?N©L¥\x000f©Kº"t(<d	ÿETì\x0015?\x0014òðó<|¹8d~¦* ð02ñoÒïóÛ\x0001ø\x001f\x001eþ4Bg\x0014rÔiÓçä¹óÙíî	~¦\x001dòëf§ëÞ_vØCëM!ÏÕ="ªô¡iÜ©'OÃ^÷k;Ó\x001dþÄ\x0005?ªëÎ¿âï¤eÐÀ\x000f¨³\x0012«/èg>óR\x0018F¾c_\x0017ªfZ¹ZZÚÊÕV\x001f,¢s(K\x001a<üùÐÇ¾Üñ·¢\x0002¸ð\x0013C Ö¡Ô¢ÀÇË\x0000òÀ\x000b¿Ù*Íç=<° À'ÎaÏ¹ÖÛ6.\x0019\x0010t)Ñóøâ¼"x^éÿ®C5«\x001f*\x0013úìØµ;úRÇý\x000b!\x0010\x001fÚ¥Z\x0016_'ö\x0005û\x001d]ÓÀÛ\x0002Õ>z¹^å\x0013ejï=6Týüöç\x001bZg]y\x000fúR¼6eèS\x0016
{xè\x0002Ò\x000e
¨Ú'®ÒüáÑGØ1\x0017þ¥´<-\x001dÁ\x000fÍ\x0012FaÕøé\x0017H×©\x0002\x001fòï\x001b7IËª ÉYQÓb'%ÎÖé¾(àá!\x0018ö<³Kº)ØoÃOh\x0005@ª\x0003£$3v%ÕÅIÂ§¢ëÝçe\x0000¹÷\x0017ÿÑúyÜëß"]ï"1ìI*~PÉÂ\x0012=otý\x001f~óo,Ë°¯²\x0002mð\x0013¡OÞ¡]Í*\x001f©9¬\x000eQ=}Êrõ5×ú÷\x0001@ÁOÙá\x000fÁË25ëdVìY1ì)Yi\x0007\x0005\x0014 tªô!Ï~ç\x001bÒ²,ò\x0006?g#¡\x0018üD\x0005>ªpÈI\x0019¦21ë\x000fÿý´,NÓµs4|0k\x0018ôPeO¸ºþ}ÿ
²åà\x001bÐ{\x00070bÃ\x001b?³fõWø\x0007\x0005OtIÀH¾¿oUp\x0014îã3züQÒmö¿ú®àb¸ÏÅQ£[O\x0016'¼ùï"CoÝ¾\x000fjÏo^h­ÃâZÕ?	+\x001c³ú\x0002³ve3Æ¤Ð&k?éC¦<uG½tÄ&Ë\T%N\x0014>Ë«\x0016¸\x001búPI
\x0015ú\x001dÛ+Täk\x0018ül]uk)U_YúøÁ°GÈmu\x0012þY£oÏçÞ\x0018ß´ª}t?\x0007ºOc£.-ïDÕx:T±ÄB;\x0004>u§\x001a¾áTiQÁo¯aýï\x001dq-cOÞÖØù;íº¯I×e!öVáÃ@\x001eÃ\x001b¶È
©)ÜQ\x0005?äþaÆêñÃÈ\x0001nY³çÐ\x0001\x0006\x001dÐå_»"\x0008a¦°W±W½ÿðVà3pñ\x0007ØÀ]ß
Â ¼AÈ¦*¬¨âëÝÇ·Uê±\x0005S5nV-ã\x001aÁOì¶¸0ô¹P}&þû¿þÌ\x000fùÍ~6Ñ·Ë\x0006NøW6ð\x001bõP·\x0015ï}cýÑß¾È>³öLÏ#\x0005?ÿÏ\x001f¥å¬CX\x0007v«ÕF±zÝÞo]\x0019ÞUkVë$ºÜ4÷ì¹/:¸ÜróÍµ\x0014;ºÃë×®\x0016²f/\x001eqØjèØgÿ\x001cî½#6o\x0016«ø\x0014ìáÛGÍ\x0012fÊ]»Ë>»)ÝÞÿÐîæÿë?3Cº\x001e:²¢WN\x001eBõOaC¨§í,ªîÑ)×ûuËc\x0000?Q(ðÑ1ÌëÀ9§IËt ¡_|J÷¨Ê* \x0003é$~~ãßh©úá3)+}zzz\x001aË©ÂB¨àF\x000cÂÕ=çvGÿ\x001etD\x0007Le\x001c4\x001d9q¦´lçãw°_ßùbë}"¾OÓ\x000céãAãæ\x0016
~nZs?u\x001bzÍÅ;\x001dØtàÞö}IÃØW(Ý(	j\L\x0015ï}c#\x00149á_Û~Ë·*\x0013ÿd´\x0002\x001fúÿë:<x\x001eèù !\: ðqÝ/\x0013>dÓ¢Ë¤e&Ì¾èÂLUE\x0014ÊP #N±N}whÆ.Uÿ\x001d~{\x0016jØL·§\x000b¿,UA\x0014\Í5KZÀà¤	GÚ¡mÌ\x0019\x000eï(YÉdÈ\x0010ÿ½s&\x001fÅö_Ý8Ë2æ\x0016O¦.V\x0008\x001eãÕ\x0017\x0004_>¼J'G7¥¤S{¯\x001cØ»jlë\x000c¡©fÉº\x0002?e÷³ß±s¥åyY\x001cô\x001e0n~t+;åµS)øISñ#@iªê'\x001eÃj¿zVZ\x0015U\x0001Qµ\x000fU÷ðªª1*|(ðaÍªÃþ×kÙ«?ý,ux&¥Ö\x0001ü	ÇÈU=q(ÜÉ0
:+²òç¥\x0017··>¼\x0002/£\x0007áÌÆÕ­÷
U§ååCàsÞ
ûÙ\x0003[\x001agÆÅYñç¶ð§W]YgBÀÇ*Û6.é	\x000e8õÒT«Èg©¢#,®"Æu5á§­Ç\x0016\x000e¸¸Æsò;véwÓUýì\x001bs\x0008\x001b»ÿåÖ¿m\x000e|\x0006\x0006ì\x0019m¤Âf +\x0013'Î¨ôÙ´è2'õ0«P #BI´U>ë×©«"\x000cOpôp³jÀq¤:\x0019ñðÇ\x0017×Ï\x001a<&ÕãâÕNiù>4úæð\x000e\x0014öOÞ¡]¯d?åá@eu\x0001c\ÅO\Ø¦
èåü¹´¬¨0g\x0006k4\x000cW
ÿª2>cÊ1g¿·µ4Oµ\x000f\x001d¬óYÌ¾\x0014Bc»\x0005äTDåÏS[ÛjÑ\x0001\x0007
÷:ôðÉmËyÏ\x001f\x00127\x001c1¬O	\x0007C±î»~Lð\x001d*\x000cínÎ¯aCã$\x001e1tÙ·ãqé¶yì}ô?Z÷íKàÃ¥ý\x000cP¿\x001a^Õ³dÂw`C\x0015øp\x0014Yå£zß¤¹>N÷+·E\x0006>"z~f=÷U\x0016Æ=Ê¾Ñ´®±½Â'jJ[°ÓSêe3>YL[¸¼°\x000fQx¦.ÕÏªeqSÁ«éDAÏ-sßÎ,m\x00186¨k<7\x0005$>Tü¨|ÓÒT\x0000\x0005?y*ÂÕ=ºúùä]/VBShßÄõùáÃ¼ÂÁ\x000f_¦«é³
\x0005?4Íüzv ¸þíDØsÉ\x001c«\x001a±\x001esö{Ø³\x000f|·õoªüêñ£lÐ|nO£×nçæB>°rµbAôÄO\x001bÛWêµ£»\x0007Nxh\x0017\x001dp¨ÎFS\x0010\x0014T©ìû\x0003«ïIÔx¹¥vì\x001bZ?ç©ð¡uS
E³ÝÐAöÙÿ®\x0015ü};¶\x0006\x0017Hcf\\x001f{\x0012½½¢':ä±QT°sbVUÞC*ÍhÖÕ³OÞRèÔû^{\pISõ!]íÚü]vü©ïç~ù\x000bi%±ÐëÐ'\x000bßg¿¢ÆÖ·Ü|s0\®9d®éë'¨Í3.\x001dØÿÐ
mÑ²ëÁO§ÀgÿC+2\x0005>UlÍÃß³w¦\x001aVEÕ3Ý_þv0M3ÍÈCg>t6pÖ\x0011ü8@çû­&ÌôÛ·¾s\x000fë5}úgêà\x0013\x0003¢ÕìPi\x0019w\x0015Kõ\x001e,²s)§\x0006iÆ¬Cçþ´y±ào

\x001cÔjµZ½^¯OÓkZ\x0001®áQá\x0010%*ð9øôÃ¬þÌ#ÒuiøÔÃGEuNÎ¿¢=ð\x00013âªyÒH[õó\x000fm¥ußõ°ónxYú-
un\s mV¼Ö±ËNbì1ö­I¿\x000b=I\x001f\x0004>úÙVÍh\x0013W\x001a9\x0017æª\x0005×\x0018\x001bGMMÎÜ\x00157Àþ«ñÏ\x0015Ö\x001f)/Ý«C½\x0012®wêÓÅUñUC¿¨·N\x001c
x¾ùº 
àsÎQW\x0003äô',ÝÙ_QÔY.Hæ\x0003\x0017^À&\x001c}T\x0010þ¨{E:izå¾)t}5JÄy%P\x0015mzí+\x0000.¿|üÒÖÏªK¸ìÙ\x0007þ%ø÷\x0017Þ~\x0012÷Ô/¥ÛÛjµZ\x000f5Ûæ(üá¬L\x000bÌ\x0003´j\x001f\x001bTøð*\x001fß\x0003\x001fÖ<@\x000f£ï6\x0004>z<»þÈ\x001d\x0017\x001aÆå2ªÖ¡àGTæÌª¼É3\x0014\x000b¡O4oC¬C»&M8ÚØP'UCgÝx%ðxPÙãª\x0007?¦Ö·êJ8\x0004\x0012K?ÓNÄ[9ÏÈÎÄ1,Û°\x0003ÞÃÇòàÇfá\x0014þ°>?#gmf\x00195¬fñ¢!`
\x000fÄá_Ë~¼\x0011Ï¦øÌka:\x0002 \x0015jò6ði\x0005=T\x001cj\x0008|ø	MùÁ[î{_ú¬k«Übãwr\ðã:
~ø¾Y\x000f\x0017\x0017üøü:`jh\x0017mîúº´<\x001b»[\x0010cxW	ÄÆÌº+ÂA\x000f4øÖÚEeôÉI:ÌËÁiØÝ5zQø\x0013×ç'L×ôîYPµÏç\x0019*½t:ëÕ\x0013Ùn¬ª3+Pð\x00135\x000b\x0014\x000f~~õ~vëWâ\x001bí«r~óÀßKË:áCÀ4WøðÐ]ý õÓÒ±Qå3MZn³ñÓ/Èu0¿wÕØq½ûö\x0008¡À¡S\x001ft\x000cßÊÖ\x000fñúöcO³Û\x0007\x000b~.£\x00015\x0002\x0006Ú\x0006«Bø¢ð@þgjz<\x0007¥e6Áð.\x0005ªqÝs_þtâÀgÓ¢Ë¬n@UÅj\x001fë*\x001fû©Â¦¨*$QT?\x0004\x000bXõãÕ<Qèú]»ÛºVUõ£Rfðc¡Á¢ViÚc¿\x000f.ÔGuÉâ>j¾2W«¨ ³Q§ù\x001f;·UýsåÇß\x0019,Ûùxò&_¿îõÒ²4(üùÐÿî<|,%ÍñKÇéÐÂ\x0015TmBÁ\x0015¿$TH?´fðÐÃ¾ô»?ÿ@d@A
\x000fÇ×çÔi»ØMk\x000e\x0004­c7µ\x001bZßÖw!=Ï\x0008|F$
|Vùt\x001anKSÏSÐD\x0017±\x0002sÔq§K·õõ>\x0019§k·z'ª{ÒNÃ\x0002ÿ\x0004¥yÞúmï<NAÅþV¤~/Í]­Ñù\x0018\x0010ø¸#*ØQ¡qìTÖL;0\x0015ºs§À\x001b^»¾í¶\x0014ü$­ø)\x0012
í²ÔpYÍÃhºvqè\x0016\x0000\x0017Wñ#¢\x0000.-\x000e*(\x0004ªò¡!]ßøÜ;µ=¦û!'t]Vâzóéå£\x001e\x000bC³Ù\ÂA\x000f}G«ú\x0016åÙõ7\x000c'e(øYñÞ7ê !A\x0015î?ç|.ÑM\x0013ØæM\x0013ØTi=¥»ÑâÒïþ¬Ï¬°G-\íóÔæï\x0004³wÑ,^ô3\x0017·âlËYs»¥Ïë¼\x001cÞ5máò\åÎW-ps\x0006/\x001f*âd
~8
O\	~Þ¾z=û·í¿çÀÇ/ü\x000c¢
ãÖ;pò}G\x000f\x001fæÅQðó±dS\x000e·ç9Ï0¬«\x0019¼V®\x001efÌ\x0016Â9WÈ [¹\x001aÕ\x0014\x001a$
~¸F\x0000Ô¸=?Xá\x0007$T9óã»¾Î¦Oë\x001c\x0010¤íÒÌc.Ná®ÓØISÙØI'+ïñÅÿ¼WZ\x0016gÌ\x0017K×:ð\x001dÝFwðÓ	\x0005Cy\x001fþ\x001cS¨&V<ó\x0013a´¬èa\BåT-ª¯OÕ©wÑ\x000c¹4&c\x001fm-3ÙÄ¾*U>\x000c=}Êuõ»ôý||6ø	OÕîÊ´íªÀ'O`ÀÇOáÉ\x001bí«ô±nX\x0017\x00059â¿ãÐõTñCC½øm¿úË=ÁÿTýè¶\x001d&ÝcTsç*¡À§2V®Æ¶Ü´Á\x000f'þ\x000eÝÇ\x0007ÿæKì-ï87÷Ôì"U>YLéê\x001bØ¶q7\x0001ãáoN¾ï\x001dwÛp ¤
|\UtðW§¡sg2M=IZl¡re¢Y\x000f)1¡Óv7ià¥	\x0002\x001fæièSX\x001f¼ÍËGy\x001f\x0017å¬PBÏ\x0007(CQ
fS
ñ\x0012p%J÷¬\x0019m·\x001fùyäÆOôÿµâ7AA\x0010
@Øc\x001c\x001d\ä½«-\x0000:ö
Z\x001f

¿qã'g¹'ë[\x0000Ä\x0019ýÊ£Ø¸×½%æ\x0016Ù\x0003¡,áÁ\x0019Ä\x000bÓá®á]q\x0015U\x0014
]V@èã[ØÃÑ¬UÐßwEÛ£\x001c\ò¥ÔºV\x001bemCgïBi\x000b;ñÅ¤»Ê§©\x0012;û\x001fZ:nþÑ\x0019Á)\x0017å\x000c|Çq)fw2X\x00136\x001b3ç¹°4\x0015?¯\x0019ü:»
d©ªv¢ÿ>\x0002F#gO«}Ñ¨¹Xy\x001fQ0ûÖ¾?°ú'¤ëÒ\å30ñä¹ÒBÑü\x0003÷¾Í|÷·\x0013¯eÜp­¢Å\x0005\x0011®hVýÐ~w·ËC½Ë\x0004_\x0003\x001fuêëÓßwyëçäUAö¾
¬\x000e}26qv\x0002ª|rIýÅsÎä£¤e.ÐÐ¸¹r\x0007\x000c4Ý©´\x0010Vô·^Çjpcf\x0016Ñ·'­$
?ô¿Ç6üjg«"è-Ù=#à©\x0008TõJgðÃÆ\x001e¹êÇÀ°®¢\x001b«k¶ý¼\x001b^f/¼;
½°a¤Ú2nèUr½hÍÄÚ«~ºßñßÒ²¼Ä¡^En\x0008{Ì19´«0e»'&M8\x001aÕ\x001c\x001d¸:{WV\x0015îãcÅA\x0015U³õ4\x0007\x000fxÄ!ZdÂÑGi©\x0002R¡Ê\x001eºÜþóÀgìàªàß3XºÙ[(ì	\x0007>\x0016ÏÚU
ªöñ\x0002\x0002\x001f+ÐÁÆf¯Ð	£à'¨üIÈD\x001f$³ßDÈÔ6q½û2¿ÅiÎ©_\x000e\x001dÀSÐÃ/\x0016óv\x001fdà7ï\x0008.ºL8Fïpoð¿uÎ\x0014Fa\x000f\x0002jHPåãDÈëÕð®i\x000bWùÃçtÙ%ÈÐ¸\x0019\x001cSö{NYí#VñD\x0005?Ã»å* 4ÄjCþïÙË\x001fùóàg±×\x000f=ÎTïß¸½xEçã¨#6Ü\x0011ÝV¡!bb(®\x0001\x001dhwöØJ<\x0015ö¡}MÓkØí_½\ÛdÈWÙÃò6qV\x0004?ÒvZ0¸wÕØ 4qe.Ã\x0000\x0000 \x0000IDATuhT§¦Â>àÁO÷+·\x0005,N¶Kû3Áß3&g6EÐS\x000c¡{?¿ø¯Ùðºÿ¸Ö?½Ë_ZÊjmwêv\x0000ÐÊ¦\x001d eðÃ<õµì\x0003\x00176þ±å±­ló£[[× îÔ×M
n\x0017\x0015
ÑýòÚ©­óÀã=b\x000f1]ñ}\x0005¨ªG\x001cÆ\x0000ÉäéísÚu_±¯å\x000f}þ¾u¿þ\x0014öÒ\x001dÂ\x000eû?¬öa·zªT\x001d\x001dxh\x001dîÅF|Ã¥ßx-ýF|¬rTù\x0010÷\x0011¹ý\x0006û\x000cÿ~Jp\x00198á_S¯Û)\x0006B$²öö¡ kÛÆ%qï]oÕëõÂ))tO"é¶yppõ÷·?\x001fßõuéva>Íðemè¶OÅ«|$ÔÐzÓ¢Ë¼-1Í\x0012ü¨¦A·Ù
ë·²ëgLuj¡RÛæ>¾õ±ÖÏ\x0014ÔaM\x001c~;Uÿ\x001f~\x001dUûÑíÅ°*w¢Ðp-ªÞI*O#è\x0002åÛQ,h¨2ðI©~[ôk\x000bîÓ\x001eüÐ}Î(fDÀ¶K
\x001fÚÕ}×»_½HÓ?°ÅÎÙ{l1áØ?\x001a[\x0013U>UU«Õ\x0006êõºÓÇ\x0003\x0003\x0003Rè\x00045{NP\x0011Ô6Ãa­6Õë\x0007¤\x001bÍJM.\x001b¶p9f¹¨´Ák³wÝ°.[è¡]`È°#ÓÿÇVûä\x0011Uí\x0013FM£y ±\x0017Ï\x000bÒ-t\x001bÖ\x001c\x0002¦âHÐS*ªö	\x00070Ï>ð/Íÿ·µo\x001dsö{bW\x0015ANu\x001c9qfÇÇª3øIÚ T<U>yv¥T?û\x0014÷w_î»~\x000c\x0005\x000f4ÛU\x000f
mÛ»j¬÷ÕKA¯j\x001f\x001aÊeº²G\x001cV\x0017\x001ebGA\ûò\x0005ÿ]ñÞ7J÷£¢³«jµ\x001aUü\x0014²öáícÎà:7ª\x0008JZñCa\x000f>¬\x0019þðe6ðix\x0017zÚT\x0010\x000f8:?cnQ\x001fDù\x0006OåÅ½þ±\x0011AWÓ)P85$/6/j\x0018ä¼´|MÛuQaÎóÓç¶]wèß| ñû_ûtÛ\x0014âÞ#ÞØ¿ùF6æÔëÃÃN!\x000fTWÐi
~\x000c|Ê>XÊÃµq½ûxUTc\x0012W{\x0002Q0²ù¥Òò"$}È·S7v~pû	ì¯¾y±´\x001cìf[L>Y¥\x0019âÅ«|l\x000b|\x0018zúÈvìÚé\x001d\x0014WõãÚ°.\x0011U	\x001a:÷9ãRÌÞ\x0006T)\x0010,åó$ða\x001dB¨!`|9\x0005A\x0019U*\x0010ÞÿóE­Ð§Ð¿»ùÆàosc{îg£9;èç\x0003~È\x0013ü$íS¡KÎ*Â·\x0019f_ªÛÝ\x0012«ò3ú0´ê¦5\x0007Øãû§KË\x001eêXU´}}éÅíìÐÃ'\x0007ÏÀÎÇïÐ\x0012\g\x0019Ú8¬\x000bÃ»R \x001e=iûúÐí5ôö©üFÛUªt¹\x001cú°ÇÅÄê¥«\x0011ø\x0000È
ó
K\x001aöpT±£
~:\x0005>)Ù\x0010ò#-ñ\x00045f\x0016ñP&UØ\x0006Î~É\x001aü\x00141#
çr'ê>íSºú:\x0014§÷Û©77~¦÷-x%_Ò>:Ú¨°}ª½/>ô³ÎY\x0015ã sqJ+Ñ\x00077QÈó£93u÷iH\x0017,çL>Êù\x0010\x000b @µsÿâÝÿïýß¿÷\x0013&þdTØÃb\x0002\x001frèe³¥Ð'\x001cìð\x001eqyDÍ\x0007\x0015Î\x000f»\x0016Ã\x001dªØ¡Ê\x001d&<¢Áo¯a\x0003wÉa\x001eø)mðSä°.æ`O\x0012ÔWÄ%{Wõ)(HuR\x001c£T3` sÇOUî÷°éoz´¬\x0013Þ¨¿ï\x000e·ÌÆÆê\x001eÑ(iE¦-\º!mu\x0010ø\x0002\x0011
H|íá£\x000c|.~V\x0000\x0011ÎzË?xã§Ô×fCaO\à\x0004\x000fsèÿªÀGµ/ãË'³? W1§-T_¡@C²(ÜáÏ>Ðº\x0011;üÂ\x0003\x001fªÚQ]\x0010øXOûð¤ANÑMU\x0016U6®w\x001fF\x000f7òôÅI¶â¶~æ\x0015?:õ÷%«\x0012*¡ÊÇè\x0010Bë{úd\x0019æ\x0005\x0015tÉê]®\=Tµ~\x001d\x0000IñÆ7þÇC?ûÙoYÑs Ù¸hV®$âª|DQÃ¶¢K·.\x000fûF(£y\x000bC²*oÀÄ\x0010þN\x0015?E\x0007>yÙZå\x0003\x0000¥«Õjµ¡z½nìds
±¸ím\x001cÓ¡\x0006FWÐËFÎY{ûìØµÛ«p©b\x0019Î¦\x0000«ÂÔ¨Þ\x0019o|ãoø/%vlyl+ÛüèViyÆO¿\x0000\x0007d	QÈC\x0015?<ÐÁ,0\x001dê1\x0011\x001erPVàãàÐ\x001ao¿»}hn\x000c \x0018¬Õj=uÍó·S{±\x000f\x00195sVmÇ\x001a@ÙB\x001f\x001aFC¼\x000e>ý°t]O½|8'B\x001fTû\x0000\x000b^ñÁÆxÞ?~st0\x0003Äk²ï½nvcªÇkÿï¤ù·\x0010\x0006Dk=É;,«\x000c\x0008z²\x0011C\x001eTí@\x0014ÕE\x0016|f.~\x0016º¬À'O\x0003gTù\x0000@\x0007Aëf­®ðÜÛ­§¶êµKÅÇ@'	g*}Ò\x0006?fòrÆ]»Ù¤	GKÏAçkhÚÂå=Ò\x0015UðÈæÆ%©7Ú¸s(¡@F\x0007\x001eð0Eó¶q½ù¹ñ°(kh\x0004\x0012§*\x0001?»üvö¯ÝÎÿ°\x000c\x0010ò@YÊ\x001eÎ\x0006ºöI[íCUËãz÷aÛ\x000f6k¤>\x001a«óm\x0017ïëÃÿ\x001f^\x001eõ7\x000cß¢*ê÷}çåð®,|\x001bÚÿÍW®\x001eùù9ÿ§
|¢DÝO\x0011\x0001\x0011=\x0016ñ±A\x001b±ú&OàsÓuvÓÁÏ¶wèrOØkGìýôwqÉ\x001c=ß©Uî×\x0006P \x0012«|ð\x0019o\x0018\x001c×»\x000b\x0004>PIQ
è£%	}\x001cèëcS¡\x000fª} ¸ $îºN¢\x0002\x001e\x0015~;\x001eü$ý]1(»ý%s\x0006ÙÊÕØa
ÿÑu±ú\x0007<y\x001e~\x0008yÀAÏ@Å\x000fÐ¯
tªùÜ?&|fÜ\x0011øwªöi\x0006>\x0000\x0000F¸XéCC¤¥\x0011\x0010üTÄÊÕöîÈe©&Jz{\x0004>-õú\x001a\x0005?üßir=°¥ÎÎ»a?«ÕF\x0005ÿFÐã
×\x000fðúq&\x001c@+¾OèUø³óñ;ÚA¤	~ÐË§\x0018TÁ³wÕØnÕqLsH\x0017Ã^\x00000Á¹ÐgÚÂåÃ\x0016]&-Ï\x0003C»\x0000ü$èiîXQuPk\x0019\x000fy\x001c\x000e{ª^\x0011\x0002\x00007áO8ä¡ó4t.PÕö¿ùÐ­¨`ÇÊçcJW\x001f\x0000\x001cçdO\x001f\x000có­_»VZ\x0006P5\x0014Ø¤i¢ìY5\x000f*BÀ/èç\x0003ÐØô4\x001cü°f\x0005ÐÄ£\x001bÛRåÓ8	SgõúAé:OÖðªuTû\x0018¢ê\x000fsäÄÁ\x0005Àg£\x001c~l©fò}Ê÷Ù\x0017](-KkÓ¢Ë°
\x0000>ÁÙI·¡\x000f\x00185¥«Ïùý\x001e1èÙ³st}\àcÖ¾<á\x000f
³¦\x0010\x000f·öØ@ó{J¼\x000cûþ ËDð\x0007>ôù¡PH\x0015\x000c\x0012\x001b\x001dâìÖyI\x000b3ÀÐ®6.ï`ãu\x00046\x000bæÏÃ\x0013\x0002\x0000q¼\x0008\x0016ùAìo\x001fúòUµÙQå£Ü§ð§=\x0004Ê>!I`jäÒ	ÍØøÂ{Âû«5áÿµ´'µA\x001f
øg	!\x0010DÂ\x00198\x001d¡§\x001d²%Vûø^ù\x0003PAÝxÑ[0^°§à.OäÔs3r \x0011ñÆ÷UU`H\x001b¤ðËï}¸íB\x000e>ý°t J\x0007±ª* ðm¢M\x001aÁÔÈ	UJa\x0014ø\x0008ê¡ðÇëYåL¢÷5¿èÀ+}èB÷yüÔ¹Òç	ÀENöô\x0011eèï3ÀITù\x0000xE
\x0003ë½xd\x0008ìâ¥Ë¬z^F04Îcðöë\x0000\x0000FðGQÇ.
ý\x0012û¸0c\x0017'âöÐ\x0005ªD¡À§õo
~ÆO¿@º=ÈNyÕËìõ¯zYZÎØ\x001bÿ\x0018ü÷\x0017¿>mùõ!ÁÏ/½¸=µõ\x000eé·¢«7\x001b££×\x0012Ä±>Sp>ôi\x001aNq\x001f¥h\x0000\x0000\x001eãU>QÄa_6\x0004@ª\x0004ñ:ÕYcðÌÊÕTåW\x0015\x0012\x000b|¸pð£:µ\x0019\x000f||÷Â{\x0006ÇO¿ Ò\x0015~ïë\x001f¥ey¼¾- :±wµ\x000fõ¾ó'¯hû·XÉ\x0013ó9Aà\x0003Nó"ô¶py\x000fk\x0001\x0000@Z¶\x0005@Lè_1÷â÷°É\x000f~¶­:	4£À\x0007Á\x000f$$ðáT\x0015?Ì*\x001fß\x0002\x001fªæ	Wû¸Þ/Í¦ç©Oë\x000ettÖé­óÚªb6<\x0000×yZf	~þìòÏIË\ôùÅ7³[n¾¹íõÌò|8:µ}wöàÌÃ\x0008\x0004¿x?\x0004:Uút²ä\x000b_	nQÄAGcøVãe9ýL6óÍonÓ4¸xé2wÎ\x0006_2\x0007Ç,(øÁç¸0Sºúz¦	|DáàÇ¢Ð§2Û¨Ðgüô\x000bù¼çýnu\x0011pi\x000eïÂvYïy½¾Ç|\x0019Þ\x0015HÛß<÷åO{\x0013üT\x0018z¹\x0000¾x  c§´ï\x001foû7\x000fFÔcdÁ\x000e'Vñ$ÔéQ\x000bÐ\x0008]Ú\x0015Q}sÿ0cÏ<ËØ¹=Ý¯4Ð«yÐÊ\x001fåY\x0000 £jàÅK\x0011øû¼
}X[n¾YZÁ`Ñë
\x0000`»p\x0008\x0004nZðgGw^oÅ4ÿ«^ø\x001dÛþr³?\x0018
½áÔÆEs»\x001b÷MÁ\x000f\x0014¢9\Å\x0019¼Êç/?ýC¶ág\x0012WýlØôLð\x001eü`Jðr¸>Ä\x000b\x0000Üæ]èÃ2\x0006?{ÿë_Ù¸3ß!-¯i\x000bã,2\x0000\x0000è0XæÄ	\x0002zÇÿéÈ
C¡Ðâçv7~Ð\x0015\x0006\x001d{\x000ccl³´\x0018pnb´Oð;ÿçâ?Q±\x0000\x0000PA^>,CðC¡ÏIÑÛ¶ìêk®aW-¸Fº-\x0000\x0000ØÇ÷~\x0003\x000bæÏ\x001bZ¼t\x0019ÎÒ+è\x000cy2ý]EP\x0010\x0008=²¹qÓ\x001c>6ëoþ­ýÚ?ã \x001cN:ÿ¶`qÀWù\x0000äUÅ~>\x0010¯*3ìùÂÛÐe\x0008~6-º~§õo\x001a2tØTY\x0001Q³³´\x001c B°#\x0002UÑ]G\x001a3Õ¬q¯`3Ç½BZn \x0010ê>§qIh­õ
Ê¶s¨Ê\x0007\x0000\x0000*ÊëÐgÓ¢ËRï ¤L\x0005DªP~ÿo\x001e\x000e\x001d\x0000àì \x0000\x0000Ø"ÿÐ«ï5a\x0006H\x001føðÊ \x0000\x0000\x0003\x0006pÎÕ-^>YguÊ\x001aü$& Riþn+ð¡a"f)µ§\x0002\x0000\x0000@&Ô\x0013çÍ\x0014ø ×\x001cT§Ou*\x0017\x0001üÓ\x001fqì	\x001aåë\x000b¶s\x0011hì£\x0019ê"\x001f4f\x0006\x0000\x0000'ôÁ©Ô\x000bT5AÇ\x0015>NÌ\x0002\x0000@zÞ>ÔÏGZüw¥ev©\x0005\x0001\x0012¿°F kG1Ïó\x0005P"\x001c A *\x0007ËÔÌYZ\x0008\x0000Þ¡°\x0007Cº\x0000ÀFæ
\x0019ò9râL6¥«/¸@;ß\x001b9\x0007CµÒþ)ú:×Ñ-\x001d\x0000 ü\x001b\x0012!NwÎXd\x0003gªH\x001bö0\x0004>\x0000P\x0001á°iâÉ\x001f`\x001e~òÁÏóOÿ\x0007Û³s}ëßU<ö9ô	Îú&
~>úO÷²\x0007Ü)-w	UûÔë\x0007P±\x0003P]\x0014\x0008\x000cãõÒ50·ªñ¨GÏ3»\x0018{æÙ5;·±c'È!Oãw+[ÅG}\x0016/]áÙ\x0006MéêsâùE\x0003\x0000U%\x0006<¯>ãS¹#{Kp	{ò¡\x0008T!\x0004ò½sÂ³^=QZÎ\x00151Þ¸&ÞPí'Fº\x0000T\x001cB\x001f°M-u½EÕ+>ä¸¿13
\x0018~­°§2\x0006«þ\x0004L\x001eÓæ
xÒàkÏÎuìù§74'FòóxÚ×Ð§íÕ¢*\x001eUµý½{:Óñ¡C?\x001fpT¡[eSÁ­f8X\x0004/lBð\x0003\x0000\x001b?ý\x0002|_sjµÑÝy÷iæi>\x0011Q!O\x0014ê\x0005D\x0017æqõO%*}bWñOaÇ§õÈé¼\x0000 û\x0007«~Àà\x0007À\x001ayfÒÜ´è²\x0015»¤Å\x0000\x0000P \x001arç\x001b\x0004©&\x0010\x0003#'ÎP\x000e³²	\x000f¡\x001aáOù25}eB\x001f¦\x0008~äË\x001bÆBø"Â ø\x0001(T¥¦k\x0017Ñlt.Ã	Pi?]¢\x001c?u.;ôðÉ\x0011×Ú»Þ!x?\x0001@nbÿØ¨Ù£m¨ÞÉK|\x000c;\x001f¿í}a»«\x000f%àcè£|óqe\x000cé¢\x0013¡ÿøXT\x0004\x0002~Cð\x0003\x0000à¶m\x001b\x00043»ðÐ~æ¥ý¶¢u\x0006(Ie\x0003x'\x0006@SºúbÁ]6ñä¹­µwu[\©Jò\x0014~r\x0005C¼\x000c\x0013K\x0015Y3\x0008@\x0008P¨R¿X\x0010â\x0002\x0000¸OåË\x0003²:âz à\x0001\x0000°Sø;cd{]cµ|ømË1Ã(i	T
\x001aefC\x001f`\x0004=UV\x000fÍ\x0007Ð°ä\x000b_Á3\x0001ZÐ\x0010/<æP¹~\x000f;tp \x0006:bu\x0011¿ÎPàY¢\x0000\x0000\x000c\x001a)\x0008¨5\x0013\x000f¶\x0002ÆuåB¥O!°ßæ+\x000bù\x000c ¯QYð¹v\x0014øô}òãÒr\x0000°\x000b\x001fÞeJ¸×\x000e\x001fJÖTÛ¶qIÑ_ ØO°Ìøé\x0017à¤+xÃç¡]It:\x001eLPíc<÷-ôIÕM¼(%uaqµØ\x000f8ø
C¼ lò¤ã¥e\x0000yÐ¬9.Ã\x0001»fáÀ'eCäÔ\x0014Õ;è\x0002\x0000à:ëï»"x,ý}·\x001eÓ
·|
.+À\x0015ÇÆ¿ç}\x000b}º¥%\x00004\x001at\x0007
ÌPòQ,ko4t\x0006\x000eU>`H?ª4ôÛ¶qxR\x000cßá\x0000\x0000\x0019Méê«ôw\x0014
Ó¥\x0006bØÃ]õÇÊè]\x001eC §aèûá§fàcÃcÃÂò \x000eZPå£\x0007úÌAE È\x0003\x0000_àX$¢#\x0011ú\x0018Vr0\x0010{ö
;×yà©\x0003\x0006ªò{ñ{ðlä\x0014þNzø8iÂC¼¤\x0000à,ôóÉfñÒe.®6TÀÁ§\x001f¶þA¢3@\x0006Í0\x000f_Ú\x0017«\x0002@\x000e\x000fÿ\x0001¡O\x0013xA\x001eÃxöÀe<ìY0\x001e^GËT}h\x0017ùíC_%AAÑ¨ãN/l=Qéã¹\x0007ÜYõ§@;Å½\x001e÷\x001f\x0015¤\x0014tÙG3gØ¾ã)ôò\x0001\x0000a\x001f\x0005ÀÇZ\x001eÚõËï}XZñ»\x0018B\x001fÿ}ôî­úSP\x0004E+-3ôUþÌ\x00064Üq×¿ÐYHTýifãðc\x000c-ð\x0016>¿P\x0018\x000cíJ§¹ÝÅs\x0006¾ª\x0015uLÐÇ\x001cl <¡]¥Â\x000c}`¢«|\\x000b²7ô;¶ô±¡\x0003\x000e\x001b\x0016,?\x000fcIÁ7Ý\x0006·¡ÂÇ^Sºú°Oî\x0010ôô1ÃªRÚ/
mdWôt\x0017ãË\x0016\x0000 \x0007jà\¯\x001f@\x0000lFá%ãb%Ï¬ég±ÓÏ
~ÆA\x0007\x0011\x0003U\x001b\x001a*tPåc½Òªï·m\B¡´\x001c¢¡ÒÇ\x000c>ÜÇ
Õ²\x001foM[¸\x001cÃS2Pôó\x0001\x0000\x0018®Ì\x0014Iá\x000e¿PàCý\x0010øãpÀ\x000cÎÂö\x0017¢Pà³gçº üqÙÁ§\x001f.¬\x0017¡yè÷â\x001f4E¬6ìDC@\x001cÚ¾>ñ\	~D«î¼[ZV&LÝ\x000eà4TØ§ è¡ç\x000fÚ\x001c9qf\x0010þPðÃ\x0003 ñ\x0002í\x0010úgE@ÎZ!È\x0003¨8\x001aÚ 'fðãÒ»m¯o¥gI1\x000ce\x0000Pø\x001d»xé²ÒBo\x0004î²)]}Öô£à\x0007@â\x0005Úù\x0016úØð¥­Z\x0007Õ²Baêv=M¡\x001cøÒJó!d¢¡ÅQU?\x0016]fÍN¤â,3\x0000@\x001eØI\x0008Û_HËÊQÇåÄVa'ÂPé\x0003\x0000®ÀYn°FÑ³vù&*ø±H°~¨æ\x0002a8\x000c\x0000TE)ßÕ'[Û¿G\x001dwzªp7ííó@èSÒw\x001c§-\.-ó@aA@­\x0016|\p\x0000\x0000Pq4´\x000b\x0007TZX9T6|Ù¦à\x0007S·C
¨,\x0001'Ñì\x0008Ü!©m\x001b\x0004ï\x0015ôñÐ§XVô÷q±¡¦\x001dð´\x0001\x000eômUô\x000ebý\x0005|1már+âcÆ\x00180\x0008ß!íð|fO´\x000c*Í\x00056õó	ÁZ\x000c\x001fC\x001f_p4\x0000\x0006p\x001b\x000eôMt<\x0004MÂ'!ÊîëCU>ª\x0000Qµ\x000c¼SÄkïvx> Íº
\x000fâ	Äx\x000fWFµ\x000f\x001fâ5¥«Ïêí\x0019*}ôJ²ÃPê£§C¼\x0000\x0000
3÷â÷(ÿ\x0014llª>u¡Ê\x00073É@\x0002Ø\x0016Ö"ôÂ\x000fkÎä\x0005j\x0008}\x0000ô@2@\x00058U»C¡t±!øé4cE¡\x001e\x001a\x0000·p\x0002Å^\x0016\x000fíj)³Ú'æl_ñ5ô±ý\x0000\x001c\x001b3\x0007Õë\x0007â^7y5\x000bÏ/TÚâ¥Ë¼\x001f\x001eLÁí=çp0\x0002\x0000\x0000P.U\x000fk.?râLiy\x0011¶m\á]%pá\x0000Qùf-\x0008fÿ\x0000×àÌ6\x0000\x0018EC»\x0010ê\x0000\x0000\x0007ô!/
}lÉ«è*\x001fá]\x0000É4§kjózx
$3súx¦<ÔihÈ`\x0008S·C\x000c\x0004\x0000à­¨*\x001f\x0017PØSFàÃ\x0010úh¥ô\x001e_ÌÎÀK\x0005}\x000f\x0018[û\x001f\x001b°1(\x0006ú¤A\x0019ðù.\x001e>ëÐjK{ÙÐÏ'iàc[Cç2ÃÖ:HKüQô\x0013µ
 ¬\x0003I%\x0004\x0000¯`gÑ\x001f.+tvsHAâïc¼×\x0000´AÏ>\x0008¤©¸\x0004Â¡2x\x001d|úaéøºì°C¥Où0d\x0004\x0000\x0000â ÊÌ uÍ)\x0017/]ïcp\x001dÂHð\x0019ªÂ*Ìåa]6@èc\x0007¼í.\x0000(\x0005Â\x0008³Ö6C´Ê®öY0^·´\x0010l}=\x001c®\x0000\x0005·Ù0ÄË*\x001fÐ§ò¤\x00124P«×\x000fà \x000b\x0000°\x001d\x0000\x000cáÕ\x0000\x0000\x0000ÓÊîçãbM\x000fCèc\x0015\x0001r\x001f^C3pf\x0007¬°xé2TüA\x001bôö\x0001`ûd/\x000cKJ\x0006ÛSÐ¢¾>b?\x001fÛ\x0002\x001fVÐÇµ,Î"[\x0008Óµ®ßuÀ\x0008§¨3Â\x001b\x0010¸z}H{áä\x0015@F\x000eVùX\x0019Àû~4ëÚF¶7Ëåá\x0005½¾8\x0016\x0000\x0000(+A\x000c\x0002#ïà\x0000\x001d `ë2öV\x0003°\x0001\x0005S|ZöQÇne\x0000\x0012\x0006û\x0014½óèr#H\x001b*@\x0000À"8\x000040E0\x0000@ù²6Ô/\x0008ç$o
ÍmÐ\x0007@£Zm4N\x0000\x000f\x0015&!Är\x0003^'(\x0019Þ\x0000`Ä®>'\x000b\x00040Å{;>v*úMRæx\x0013~Ìò\x0005\x0000à\x000eêçãòY\LÛîð~\x001dö»À	\x000bæÏ³j¦_\x0004ì¥(«\x0015cª"9Û\x000c¡½Ü¨aTzý@³aTû\x0000\x0000¸cñÒe.\x001fãû\x001b\x0000\x0000¼³mã\x0012ÌH¨\x0011B\x001f=0Ö\x0013Zêõ\x0003E>\x0019xï\x0001·\:«[Òº¢ÒÇM:Ã:T\x0018\x000f¬ÝÖ;~bÀI:«s
èëãÄ±\x0018B\x001f=Lm\x000cÜ\x0000bÇQ!ëtí¨öñ
J\x0001\x0000ÀV8\x001bn7r\x0000é9³ï½mã\x0012'BÁ*>ØØ&ãòÔí\x0006Y¿Íñýì\x0003Î®@éÐC\x0000 r\x0010¤.x/uéÚA¤³Ê\x0007ÍGT!ôq}c7«{\x0006\x000b\x001eâå3ô«,|\x0019öáA@è
0\x0004(HÚéÚ\x0017/]&-\x0003\x001b?\x0019¯¦\x0001c¼{D~¢H«ºçC,ªNé§!^\x0008\x0000Gãï\x0017Ìç|`>\x0002æ!¤\x0002|ùòþ-m?wÖô³ÿ§
\x001eøïÎlþ¾\x0008Û\x0015ãp\ä±½/lÇçÇ\x0000> ª£²H3í\x0000\x0000\x0000\x0000fñýO-\x0007ó\x000bæÏký\x001c\x0015Â,?oW\x0014«Â,¢þ\x0016èEÕ>âk\x000c~Àôêæ ôq\x0007Rí\x0012¤®½
ª|\x0000\x0000ª\x000eú\x0016Ìïklüü`\x0008¹\x001dp\x0015\åÌ{·*³wù²1A38Ç`\x0016/\x0000ç¡·Gùp@\x0000 Ãç\x0002|ú\x0004+ª|¼åT¥+3w±
>¾ôE(âà\x0003g'²N×Î¿ÀÇ\x000bØ©®¸ÅK!l/\x0019z\x001b\x0001(ása\x0019\x000cí*\x0016\x001a:ûÅÔÐ.ÌàÕPÐÇ'xã\x0016&ÏS]\x000bwaó\Û©FHå	\x001c<\x0000x\x0001ã\x000c°ý«¬Óµã=\x0002\x000eB\x001f\x0000¨Ú'OÅ\x0010@J¨J\x0001°\x0000\x000eH\x0000*\x0007ß¿\x0019d5Ã\x0010/¿\x001c9qfÕ\x0002£p4ê&Ó;.\x000cñrd\x0018\x001a&DBa§\x0013 9TÆ«ðÞµÌâ¥ËÐÿ­\x0004«îúNå\x001e³¯öì\\x0003&ª\x0014úøöFÂqùs¥zý Ú$e~\x0005àæô¿à\x0008ô
\x0002yÿÞEµ\x001c$±ý7;ð<y\x0000SµJ\x001fwá¾aõúAMgÒ°ß\x0011¦R²¥Ý\x0006à=\x000b\x0000\ÔÉ9à"NdÌ~´,)4r\x0006H\x000e¡ÛL¦	Ø)Ñö\x001cÔ1\x0017Êª\x0004Á\x0019n?àu¬¼¨s\x0008Á\x0015Æß«3s>ÔÓ\x0007}}¼!«!ô(Ø)ÉedHWc\x0017\x0000\x0000\x0000\x0000\x0000èBÕ>Yg\x0000\x0003« ØÀ°ª>>¦8h!
zPÝ\x0003\x0000\x0000\x0000a¿Ï>¨RÈ Ù9÷sg\x00060(\x001fúù\x0014£j¡¯)"v\x0000¬!^\x000eÂç
\x0000òÂÁ`5áu¯\x00104Ï0ç}î0¼\x000b\x0012ªü6\x0019Ã» \x000e¦Ò\x0004C¼\x0000\x0000ª\x0007\x0007ÎÊ»ÿ×\x001d\x0000 ¨¦÷ÚlÛ¸¤òÛd>þ@Uu\x0001\x0000\x0000\x0000\x0000hÖv\x0010¾>Njzoµ^ÜîÔú"ôñ\x000b¦q·\Ý£=\x0004BÐ\x0007à\x0019Ìø\x0004i-?\x000fg\x0018\x00002Àö¶\9fµBÞ÷_¾>Léê3úýâr?§¶Þ!-³\x0019B\x001f¿(³ugÒ¹/j4w\x0006p\x0007\x000e\x0006@#ã¥ë UÞý\x001eÛ\x000el\x0000B&O:^Z\x0006n\x00187~2^©T1ôñý\x000b\x0013;\x0004\x0000\x0000\x0000X¼t\x0019ªp\x0001\x00004£éÚ\x000bPù\x0006À¦ìÙ¹í}a;[\x000bJ\x001fB¡
\x001f\x0000\x0000ôÂ\x0010/mL?o&Z4TmVÇö\x001dOi¬hÆo\x000e>P\x001c>~Â\x0017¥0Ä+±!GÖ\x0013\x0000\x0000 ©~<S\x0000úQ UwÞgV#Óý|¦tõIË\âÚú#ôÉÏÖ²?Á\x000fÎ ¦ÓíÒÊZªìç\x0010å¼Êùóp6\x0010"¡ÚÀ	:öuð:\x0003\x0014dÖô³ðT;Êå\x0006Î®ªjè£óK\x0019;ú\x0010Ö¡J\x0005\x0019\x0003\ü\£Yl¹p\x0006\x001fJ!^¹`_\x000e@fõ	°É'L\x001b¨JfÛÆ%Îä.V¨ôñ\x001bÎ8Y¨1Ä\x000b\x001f=Ð\x000eÍb\x0001\x0000²Ah\x000b\x0010bs?\x001bª®
ÏÚES·\x001e&v¡Ê§\x001c8ò\x0004(\x0001\x0005?\x0000\x0000\x0000:¡Ú'\x0013]Ïé\x0013m\x0008öÍÀpnOP\x0008TÐ^ë½|£¡Ê¡OUª`Pí\x0003\x0000\x0000.C\x0001!¼Yt\x000ct0;³PgU>Sºú*ÿ9G¥\x000f¸¬Êggpf
\x0000À!hæl%\x0004\x001eC \x0003`\x0017^!SB?\x001fm!¡«ÃÓ\x0010úËªüe\x001d\x0019\x0000Cpp\x000e\x0000)a\x0001`\x0001º\x001dì^>åBè\x0003\x0000\x0000\x0000ãë4ûèëXÑÏ\x0013^\x0017\x0002 ¯Ov&AùÐË5\x001fÇK/nw.ÄªzèS33\x0018
\x0004\x0000\x0000Ð\x000e=!\x0000\x0000 J\x0015|/úRå³óñ;ÿ\x001fzødé:ÛU=ô©
ìØ\x0002$\x0014À.h`\x000bºé¬ºÁÐ.\x0000è\x001aâP\x0010¶÷\x0005÷*|8>\x0000\x0000íð%\x000f¥@/¡Hª\x001a\x0000ÒJs\x0002\x0007'{\x0000ÀÍ|\x0000\x0000 \x0000IDAT\x000còeh\x0017k>=;×9÷\x0010ú@\x0012¶\x001eàà\x001c \x0001\x0010\x0000\x0000ÅÃ¶×Riª4PÑ\x0001`¢2ÆùõÈ3¥e¶Cèã?|\x0001x¨VkÛ|£\x0012\x0002¼E
Ñ\x00134Ò9´\x000bÛ^st¼NÆg7·MCÒ\x0015\x0000 ´mã\x0012'M©ºgÜx÷zùpc¤%à\x001bôóñ\x000fÊ+®V\x001bÍêõ\x0003U\x001a"ù:+\x0013@RÍ \x000c\x0003p*ì5ý,6súYÒrQó÷Ò\x0004>o»nÃlí\x0007Ã»¥\x001b\x00028ÆÔÌ]¾\x000círqH\x0008¡ßtá@é²}¼Þ¯ÕF\x0007ï[ßC
nÒ©7GZÖ\x000bÿ}?P\x0005³:\x001cä¤\x001f¾Æ¥\x0019úéÚ5Y«\x000e]$)N\x0004\x0013UÀ\x0004P1(\x0014ð\x0018wåS\x000b.C¡êõ\x0003m+Úqã\x0017\x000beîwE;£é.\x0007\x0019ÿ?&é\x0008;.~éïtfß!¨Ô,\x00170G¥Ù\x0017HY
ï\x000b\x0000èÈõ%>ùØ¼óñÅà4±_8K\x0003 #Ä\x001dÝf\x001fZ½~ uA\x0002\x0004U3ñ \x0001\x000eð\x001d\x0015Þ\x0017\x0010¿\x0017Ãa\x0010*`\x0001ÒÕWùcbá]^ÃøbpR­6ºµSN;sÊv®ïÐ4aVç5·-ü\x0004{ó)¯ÓpË©½WJ\x000b\x0001 \x0005óçÕ*úì,?\x000fÁû\x0010¶Lu"(|B\x0008á\x000fdUä÷\x0002\x0018WùcbÐ\x0007:À\x0006\x000f
\x0017·Ö\x0008K½-ãî'ö¡\x0017[WÝ*-Ëjjï\x0018nÌ ÎèûgÁüyU
\x0000@!ü}\x001fuÂ\x0008\x0000 ª\x0010úø	
\x0003ÁebªÃP\x0006\x0007ðIvâ>9û/ß%]\x001f6µ÷Ê¼á¦ôû[WÝ:Ð\x0001\x0000ÊTt\x0015S`\x000bavKô¦tõáØÑs\x0008}\x0000ô3YePµ\x001dø ôÙºêV\x0004(Chpp\x001e÷ò¡J\x001fú\x0019\x0015?P2T\Z,eàÆÞ\x0000P	hä\x000cQ\8\x0000Á\x0017\x0000ç&0©\x0015ø\x00008HÇ\x0019tÌúf\x0006N(\x0001@% Ò\x0007\fkè\x0008Íh\x0008ÖÖU·¢ô\x0014 z/¾mßñ\x0014*|À\x0006e/¨H\x0001\x0000ÌPéã\x001f\x001c\x0018\x0003ï\x001c¼\x0006\x0000Ú\x000c®ºóîà¾¨ÚgÝ\x0007ñÌ&D}}XQw |ñ®\x0010\x000fX~Áë	ÞAè\x0003*è-\x0001\x000f¦\x0004ÐWùÐP¯µC\x0005óçá@¾\x001að:C®÷\x0004Þ[\x001e¡¾Uz¼>7qFê\x0011\x0008}æ\x0002\x0000\x0000XKÜ\x0001§¡^\x0006`H.Ø\x000cû©\x0000\x0000\x000bB\x001f\x0000wT½\x0002«Ò;¾\x001a¦\x0007\x0000¨²¼á^YÛ`T\x0000\x0000@.\x0008}üú2\x001d¤\x0003K°ÒÔÞ+±ã\x000b^Âtíé¸ÞÐ¹è×\x001b}}Jï-\x0000¦m\x001b`§$\x0008}ü>"\x0000\x0000åÀ\x0010\x0002Ñl^\x0000\x000eÀÐÁìpp\x0008`\x0018zÞT\x0007B\x001f\x0000\x0000\x0000pÊäIÇã\x0005´ò\x0004³e\x0005\x0010\x0008>\x0000\x00138à%> ÂÎ\x0005X
}m\x0000À\x0007\x0018Ò\x0007à\x001e¼þ¨ÚÌ]P\x001d\x0008}\x0000Ü3\x000f\x0015°+½¢\x000fª±£è6ß§mG_\x001f\x0000cñÔ\x0002tVt?\x001f\x000c]kÐ\x0007À
8 \x0004\x00000§Þ+¨\x0010pCY']\x0010öç\x0013fùá9ô\x0014BjAèã¼¡\x0000v.\x0000\x0000\x001dêZ¼t\x0019*\x0004u?)ëïarüòîâ\x0019\x0000T\x001eCèã\x0015Ì\x0010\x0001¡Nà\x0013\x000c\x000b«6ôöñÚPÕ\x0000\x0000\x0000©Ú­Ð\x0007\x0000Àb\x0008¹\x0000@\x0007ôõq
¶ûÅÉó\{ÿ:UéÄDBø)]}8áT1\x0008}\x0000ôÂF\x0014\x0000@3wÆQíc5¼6\x0000à£ÂFøZåãÚãBè\x0003\x000c;5ZØâõ¡\x000f
ti\x0000\x0000çeÝ'þ½Zm´´\x000c\x0000´À\x0005@è\x0003\x0000ÎÚ{¥®*G\x0000\x0010(sÚö¢\x0002J\x000cñr\x0002Âj\x0000ðÂ¶KJ°\x00003É\x0010ú\x0000@ei\x000c@?\x001fBaB\x0004\x0010aû\x000bqðþ(I\x0001½\x000f
DÐ¼Ù.\x0008}\x0000\x0000\x0000Jág ÂûÁ+8Ëìzý\x0000>{n1\x0011Ð£ò\x001b¼ÐÇ\x000fy\x0012o|Ñ\x0001\x0000\x000b°S\x000e¾Ã>\x001e©Gôõ©¶*ÍRV\x0004TùØ\x0007¡\x001fP\x000eãûÐ'\x000cíÒ¦&(77¯
;åETû ¯O"\x0008\x0018íïC\x0000°¡\x0016B\x001f\x0000\x0000ðÖâ¥ËJi"\x0008\x0000NC[1õúª?\x0005P\x0001EôóAÆTý	\x0000Ð\x0008;%Ì\x0016´­ÀMw6¾ÛÎ~=co>å$ö,»¼ð\x0015¤uzÅ\x0007;ïL>öÍÏKËÀ)¨¸\x0004<0µqÉhWÂð\x0007`\x0000à\x0014>Õ$V/\x001cô\x0015ìµ\x001f¼*øü¦z,þµï\x0017ßâO\x0004·§Ûng¥Ûê\x0014^¯¨õk×\x0008á\x000fv(\x0001\x0014høÉáI4L\x000f½\x001d¼eûëªÄ¥¨öÁ6\x0002\2ÀQöì\Ç8Óë\x0017\x000fÓµ«ax\x0017\x00008©V\x001b]§0%Y Ò@·åÕ?&Qpf½Äõ£Ê Û§\x0007-\x0010ìÙ©\x0012á}Eûú$}mqB¬ÂÐÐ\x0019|3¥«¯JW\x001fý?\x0008|¶m\bò\x0011z¿oãêð5>\x0000à½«ÆÖ³*ä¦5\x0007¥eº¥E\x000fïJ}Ê
ûËËGO»·µ\x000cÕ$¹ "\x0002\x0000âäø\x000eÅ×¯Í0iB~\x0014þ²mã\x0012¼>Bè\x0003\x0000BaÑ²û>ä$=|À^:v*{&ol=Ü¯Ü)Ý\x000eÒ[¼t\x0019zoP]ÔY!\x0015\x0004õúATûØ
­\x001440\íS\x001a\x000cíÐ§º°\x0001NÒQ\x0005ó;v®´Ì6¨ö)UæJªæ¡ B\x001f0§ìê-\x0000(É
¶ï[Ìä\x0005¾£j\x001fÁ¯!RË3¡3\x0000fY\x001a\x0001ÝòDëÎ+\x0016/®ÁO}Áüyxê2X0Þ\x0010ª¦$\x0008\x0013\x0001À\x001bq/<øé4Ü?ÓPO U#hÝ!R\x0016q5
­sÔcRpzh9*}\x001aÐP\x0013òÂ\x0018Väí¹\x0013gïª±Ý\x000cC¼¬´2\x0004\x0015:Î©-^ºmßñ7\x000f¨À*¦ni	\x0000\x0000TF°\x0002\x0011±\x0011´«>âc¢Ç\x0010~\x001câ²m\x001b8}\x0004>
\x0003\x000e\x0011ÅN\x001d0ÆØ1\x0006!j\x001fç½w(ø1]Cáà¸Þ}hH¬GmÕw3Tý@\x000cOÌ º\x0008\x0000´\x0013+_Ä0#\Ù´â'\x0010\x001eÕËØ¦éèåÃ\x001f?®x täÄ=Û6.q~
>î\x001bÊð\x0008°\x0001Ð8ðÖz \x0010îÃj\x001f»ñFËbàS\x0014\x0004>FÔ¨â*\x0000Bpb\x0006\x0000*)ªz%\x001c\x0004å­Öi&Î\x001fcáWs{/ö×Pé\x001d\x0001¸¯ßä\x0019àû\x0016æÊÕ±ÑÂ¡í]pQ7®w_Ç¬Á!ýÞ¸Þ}\x0018\x0016ªÙäIÇS¯VðÓûþe®¡!^\x000bæÏC3÷ba\x000b`1L×^§ GU\x0001·êÇ\x0007B\x0008æM¡\x0004*}²Ã\x0007 \x0004I\x000eÄmñ¶S²¯*\x0002\x00013ÒôìI8ZÖ
\x0002T\x001eh&$\x0014üÐ}9\ùj°baë\x000cS®£\x0002Þ
øÞ,\x0018þ¤¬þñjb\x0000ß/>ÕãÛ\x0017\x001bÎÌAj7Ý\x0013èî!`Æùóýíxøãbðµ*\x0001a\x0001r\x001d ÿôâ¼y3ÍÜ$üñe\x0018¯\x0010ú\x0000@åÜ´æ Õ\x000fÙ¥j&ßª¸B¿'íbûÛ¥iðlÙ\x0010\x0002\x0004?\x0000)Ôj8´\x0001H+®ªÏÞÅ+øôíà\x0016ôôñXÞêñY\x000fS3¯vÐM¯\x001bÎRÅ£P$áÐçÞÞÒùÏ~t|kf-\x0003áÊ ø~\x0014ÿ&O¥\x000fþÑÝûfñÒeÖ>.\x001b69#\x0019=w\x0005N\x0011\x000fPLogÿ\x0002t \x000eû¢à'.(*CÞFÔÇOË\x000e=|²´Ü\x0017Ã=FÁ\x0001¿0ý°T-\x0008yF.£×+ÃxtP Ð_8ñgÝxUÈ\x000b]wJ.{§\ä/¢<ÖØJ(iÃE\x0000\x0003ZÃ131Øîz\x0004ûP\x0000D'»Ò7t{
HDyå¥úû;vín»tòÔÖ;r\x0007G6C¥O¥H\x0007çÕj£\x0013\x001cÕY½nßp\x0012ÕúÕyÅ\x000fÎÀF\x0008Wû¤	sè¶¦ªoâÖcï«¯\x000e.aâºëÝá\x001c\x001615ÔªÍ^ñAVÇg<*ÌpEG\x000bæÏë§À'®êgÕ]ßaÛ³£õï¸Û²
\x0005H\x0007~8x:îté:A\x0019Û]|ö
i<Ãö\x0015ª.ÑÉ.\x001et¤	,­©ñª=UÈ#.4áhéz\x0007HSºú¼Ú¿@èS\x0011Í
\x0012ï¾üè1ñàÇµ!QQëËÃ ¨ë¡]\ÈÂ¡
UÛPðÒø½è~\x0016{W\x001dzNñ7÷\x001f9ý¾kMä=Òº{ò\x00166nÛ-ÒuPw-:xêö,(ø\x0019×Ï9$§
jfM?Í~\x0016ë½øBéº0Õï7w{|¯v9øôÃ\x001fð\x00023]¡¥vÉ\x0012þØH\x0015øo³~íZ6û¢öïPUõË\x0010údÐ\x0008PÊ¯\x001cI\x0017vø¼]­7Ii{]JÝñ\x001d\x0019Þ>Ä\x0005>¯Ü8Ù#7£`.ô»;ví®Op´¶\x000fÇso*(¥
W\x0011ÑzðeQë<R\x0005¤7ì~°pTlÃå<C¿øýR¯¡q½û0´\x0004bñ°&Mu\x001b\x001edk7<(-ÀÏ\x0008{}\x0010V`ðSã\x0015FQ\x0010@Á÷\x0003Sì?Å¾N\x0000UCá\x000f5o¦k:UóD\x0005B3fÍ
®Sý/\x0010úd`ËP!ªrÙ´è²àËê¿~õ4ûè?}/WÞVZèfù®î\x0007á5\x000e À&n-Ã5á þ­3øáë£\x001a6\x0016\x0015ô¨è\x000e¢ »¸À'/ÞL\x000e¶1\x0013:èN\x0012ölßñ\x0014[uçÝÒòøvÕÛ÷#\x0005?a\x0008`\x0000ª¶dò¤¶}µA\x000f\x001f|ì>r'Ô¨..?qÁ
]\x0017\x0015ü°f(\x0014÷û.Cèã3O<=rÃÿn{0o¸þÿkýìkÅHó@©ÞÞ´OÕ#GÖhl]ã÷#]_\x0014q=Ò¬\x0003\x001f\x001eà°Pè"-4¬+<|Jü½<vìÚ=\x0010þÛáu8dÏzöò3ë\x0017^\x000f\x0004?v `xýÛfyut4xÆ´íùÑð
ôõ¬\x0004\x0018®¥\x0017C¾:UÛ4ùxÀ\x0007
uôN\x0002\x0011\x000f{Ä\x001ei6ÍØ¨\x0000?a6\x000e\x0001:\x0019¬
y>¿øfvÕkÃA¯ûà\x0008}<F!Ð´Ë«ðeW»çî5ÁÔíï¾ð}Òa÷~çÛÒ²w_ø¾ZT<¾)³êv )b]øõØQQØ±kw[c:
Lh¶,¦\x0008OÄÛÄÑ°ïþ6_/qýÄõ¥¿\x001fõ\x0005åi\x000cñ2Û\x0010\x0014M¡ÅK
Æmg\x000c©Ä¯QÇ^Æ\x0001\x001f&wUq;]Æö'7ªê¡æöÔóLÄÃòNÍñ]Ó<\x0001Ùö:©\x0002\x000f\x001d,4\x0004\x001f[úÞðýgÕcã\x0001\x0018îÿæáïÁ\x000fv0G¤=Ø²â¹ãÃ»¢PèÃÏúÜ0íÞï|;öyè¤\x0019úè mp§v\x001aûÜMÊZ\x001fïÁ\x0008m÷®\x001a;ðÜÛê\x000f\x0007;áð'"ø\x0019¤ßå?Optêq}"þFìº¡OøþPí£GÞÞ;ËíÍMLåN\x000bÁO.y_\x0013{é»¥`N¾/Tú:ît#-îoú\x0015\x0010ùÆ{®³|®âîÏWuÝáHc¼Ube$ou]lõ¡* IÉç-.ô\x0011n#-\x0013ÃI\x0013\x001eÜ±kwèzo>ï¨ôñ\x0018ø°æÆÒÇàG\x000c|.¸h6»çîèY
@;\x0010\x0003YB(Zw\x000eSª©\x0002\x0011!´Â¨fÎÜ¸Þ}\x0003;v±s¨gFsÇ/ó\x0019_¾>ª0<í3\\x0017Õ[Hµ\x000cÅ{ïIÕkÕ¿o©³ó\x00165ª\x0003¯=Ýø-\x000cù\x0002+97L&.t\x0001hr®z¥$µu\x001b\x001e¬óÆð®VÇ×ÛJpà£
=Ta\x0007ó¨Mè9PV¥	Á\x000e»úkZ>L\x0008~(ðñ¹ê\x001e¡@î­\x0012«r±j§SO\x0005ú\x001cHJ\x000e|r	¯{¡jU'6O¦!^áá]b3ç¨*I\x0013î1½W
9ã\x0014]\x0017\x000e~0ÌK¼\x0001ÍMw6~\x0002ÖèÝîSe\x000fÝ¯ÐÔÝø-éf\x0000Lµ\x0013[\x0002g)]}¥nC\x000f>ýpì	\x0004º¾¤ae®Ë5\x0014\x001f2¡ç{x¦P\x0019ã\x0013WO«ö\x0013i\x0018
MGN³S©øÔ¸X8I*}_C¹8U\x0018F-$ÄýpN¾"ô\x0019Q£^,IKI\x000bKÐ\x0008tö)ÿð\x000f?=ý²z5}ªö©ÕF\x000fÝs÷nþï<U>T£kHU¡fô\x0018>Ô;'¸\x0008Sò£ÒCQåÃÿM
ÉøïW+,&ð\x0011äê¯Ðé\x000bAÕk\x0007Ráu\x000b\x0007?¨ö)×MkÚ{tñÏ¥\x000ebØÃQH\x0015\x001eJ\x0006à@°\x0018Ö\x0007?e\x0007>MÒAâz>Å\x0018Às\x000b}ÞøÐ¨41¿øõ!lË¯\x000f	~~ÿ[ÿ(]_¤;òÖ_+{]òR\x0005>bp#VµÙ\x0017]¨\x000c8ª?\x001fQÓº7wïØµ»;´\x001fNAó3;cÇ2Bg^\x001e\x0015&\x000fÿa4;ý°\x0003ìôWÛ\x0019ú¨*w.0\x0012üÐzß÷|â\x001coxñÒeN¿Å/\x001d\x0015>6>*èïÓ ×­ûèD=L\x0011ªL\x001c\ÇUtZOñzñq"ôÉ.îõÈj\ï>º_£ëà'5\x001d¯3zú$gísÅC_~ïÃÒu*&úëÙK¨\x0002töõq²gYTªjf§¨)¾s6ý
þvÐiù·~ÖZ¯¨)Ç©\x0011±¯'ß/¤ *xåLµ<ô»RÃb.cµ­Ïô>åT©\x0003!~<Ä<Ù\x000fG¥OÈ]í;ò\x0014üÐ\x0002\x0016[×7në\x001eLBµÚèî{î^3\x0014¾µ\x0005ý|´ø»ëúÙ¦Ì\x0011þ>-=&\x001c=\x001c\x0015øtêßS\x0004j*\x001d÷gT\x0001\x0014
K£©ÜÅa^LQñ\x0003éé\x000e|Ä)Ö)øáL\x0004@¡u\x001f\x001e×»Ïù³Là\x0015þþÄwSF\x0014\x000c!ø\x0001W¨\x0002\x001f\x0016\x0013ð\x0018\x0010|VfÌÒúðiÄ£ðmÁSh?¸YÒZm
,6\x0014\x0006Å\x0005?>`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=Y\x001fªã3fÅ1Q¡ÎzuFÞ\x0000ë\x000f]\x0017\x0015\x0000QÈ#^Tx?\x001fÞ\x0007(ª¿8\x0017oàLÿç3xuâxàÃ\ªð9üÍò><çâÉ\x0013q©CN|\x0007\x000b\x0005\x001aì°\x0013Î	
é\x0017\x0012\x0006%>àÛÚg×ßÐöpøsàÇ<ÛvÕë\x0007¬?N©L¥\x000f©Kº"t(<d	ÿETì\x0015?\x0014òðó<|¹8d~¦* ð02ñoÒïóÛ\x0001ø\x001f\x001eþ4Bg\x0014rÔiÓçä¹óÙíî	~¦\x001dòëf§ëÞ_vØCëM!ÏÕ="ªô¡iÜ©'OÃ^÷k;Ó\x001dþÄ\x0005?ªëÎ¿âï¤eÐÀ\x000f¨³\x0012«/èg>óR\x0018F¾c_\x0017ªfZ¹ZZÚÊÕV\x001f,¢s(K\x001a<üùÐÇ¾Üñ·¢\x0002¸ð\x0013C Ö¡Ô¢ÀÇË\x0000òÀ\x000b¿Ù*Íç=<° À'ÎaÏ¹ÖÛ6.\x0019\x0010t)Ñóøâ¼"x^éÿ®C5«\x001f*\x0013úìØµ;úRÇý\x000b!\x0010\x001fÚ¥Z\x0016_'ö\x0005û\x001d]ÓÀÛ\x0002Õ>z¹^å\x0013ejï=6Týüöç\x001bZg]y\x000fúR¼6eèS\x0016</p><p>{xè\x0002Ò\x000e</p><p>¨Ú'®ÒüáÑGØ1\x0017þ¥´<-\x001dÁ\x000fÍ\x0012FaÕøé\x0017H×©\x0002\x001fòï\x001b7IËª ÉYQÓb'%ÎÖé¾(àá!\x0018ö<³Kº)ØoÃOh\x0005@ª\x0003£$3v%ÕÅIÂ§¢ëÝçe\x0000¹÷\x0017ÿÑúyÜëß"]ï"1ìI*~PÉÂ\x0012=otý\x001f~óo,Ë°¯²\x0002mð\x0013¡OÞ¡]Í*\x001f©9¬\x000eQ=}Êrõ5×ú÷\x0001@ÁOÙá\x000fÁË25ëdVìY1ì)Yi\x0007\x0005\x0014 tªô!Ï~ç\x001bÒ²,ò\x0006?g#¡\x0018üD\x0005>ªpÈI\x0019¦21ë\x000fÿý´,NÓµs4|0k\x0018ôPeO¸ºþ}ÿ</p><p>²åà\x001bÐ{\x00070bÃ\x001b?³fõWø\x0007\x0005OtIÀH¾¿oUp\x0014îã3züQÒmö¿ú®àb¸ÏÅQ£[O\x0016'¼ùï"CoÝ¾\x000fjÏo^h­ÃâZÕ?	+\x001c³ú\x0002³ve3Æ¤Ð&k?éC¦<uG½tÄ&Ë\T%N\x0014>Ë«\x0016¸\x001búPI</p><p>\x0015ú\x001dÛ+Täk\x0018ül]uk)U_YúøÁ°GÈmu\x0012þY£oÏçÞ\x0018ß´ª}t?\x0007ºOc£.-ïDÕx:T±ÄB;\x0004>u§\x001a¾áTiQÁo¯aýï\x001dq-cOÞÖØù;íº¯I×e!öVáÃ@\x001eÃ\x001b¶È
©)ÜQ\x0005?äþaÆêñÃÈ\x0001nY³çÐ\x0001\x0006\x001dÐå_»"\x0008a¦°W±W½ÿðVà3pñ\x0007ØÀ]ß</p><p>Â ¼AÈ¦*¬¨âëÝÇ·Uê±\x0005S5nV-ã\x001aÁOì¶¸0ô¹P}&þû¿þÌ\x000fùÍ~6Ñ·Ë\x0006NøW6ð\x001bõP·\x0015ï}cýÑß¾È>³öLÏ#\x0005?ÿÏ\x001f¥å¬CX\x0007v«ÕF±zÝÞo]\x0019ÞUkVë$ºÜ4÷ì¹/:¸ÜróÍµ\x0014;ºÃë×®\x0016²f/\x001eqØjèØgÿ\x001cî½#6o\x0016«ø\x0014ìáÛGÍ\x0012fÊ]»Ë>»)ÝÞÿÐîæÿë?3Cº\x001e:²¢WN\x001eBõOaC¨§í,ªîÑ)×ûuËc\x0000?Q(ðÑ1ÌëÀ9§IËt ¡_|J÷¨Ê* \x0003é$~~ãßh©úá3)+}zzz\x001aË©ÂB¨àF\x000cÂÕ=çvGÿ\x001etD\x0007Le\x001c4\x001d9q¦´lçãw°_ßùbë}"¾OÓ\x000céãAãæ\x0016</p><p>~nZs?u\x001bzÍÅ;\x001dØtàÞö}IÃØW(Ý(	j\L\x0015ï}c#\x00149á_Û~Ë·*\x0013ÿd´\x0002\x001fúÿë:<x\x001eèù !\: ðqÝ/\x0013>dÓ¢Ë¤e&Ì¾èÂLUE\x0014ÊP #N±N}whÆ.Uÿ\x001d~{\x0016jØL·§\x000b¿,UA\x0014\Í5KZÀà¤	GÚ¡mÌ\x0019\x000eï(YÉdÈ\x0010ÿ½s&\x001fÅö_Ý8Ë2æ\x0016O¦.V\x0008\x001eãÕ\x0017\x0004_>¼J'G7¥¤S{¯\x001cØ»jlë\x000c¡©fÉº\x0002?e÷³ß±s¥åyY\x001cô\x001e0n~t+;åµS)øISñ#@iªê'\x001eÃj¿zVZ\x0015U\x0001Qµ\x000fU÷ðªª1*|(ðaÍªÃþ×kÙ«?ý,ux&¥Ö\x0001ü	ÇÈU=q(ÜÉ0
:+²òç¥\x0017··>¼\x0002/£\x0007áÌÆÕ­÷
U§ååCàsÞ
ûÙ\x0003[\x001agÆÅYñç¶ð§W]YgBÀÇ*Û6.é	\x000e8õÒT«Èg©¢#,®"Æu5á§­Ç\x0016\x000e¸¸Æsò;véwÓUýì\x001bs\x0008\x001b»ÿåÖ¿m\x000e|\x0006\x0006ì\x0019m¤Âf +\x0013'Î¨ôÙ´è2'õ0«P #BI´U>ë×©«"\x000cOpôp³jÀq¤:\x0019ñðÇ\x0017×Ï\x001a<&ÕãâÕNiù>4úæð\x000e\x0014öOÞ¡]¯d?åá@eu\x0001c\ÅO\Ø¦</p><p>èåü¹´¬¨0g\x0006k4\x000cW
ÿª2>cÊ1g¿·µ4Oµ\x000f\x001d¬óYÌ¾\x0014Bc»\x0005äTDåÏS[ÛjÑ\x0001\x0007
÷:ôðÉmËyÏ\x001f\x00127\x001c1¬O	\x0007C±î»~Lð\x001d*\x000cínÎ¯aCã$\x001e1tÙ·ãqé¶yì}ô?Z÷íKàÃ¥ý\x000cP¿\x001a^Õ³dÂw`C\x0015øp\x0014Yå£zß¤¹>N÷+·E\x0006>"z~f=÷U\x0016Æ=Ê¾Ñ´®±½Â'jJ[°ÓSêe3>YL[¸¼°\x000fQx¦.ÕÏªeqSÁ«éDAÏ-sßÎ,m\x00186¨k<7\x0005$>Tü¨|ÓÒT\x0000\x0005?y*ÂÕ=ºúùä]/VBShßÄõùáÃ¼ÂÁ\x000f_¦«é³</p><p>\x0005?4Íüzv ¸þíDØsÉ\x001c«\x001a±\x001esö{Ø³\x000f|·õoªüêñ£lÐ|nO£×nçæB>°rµbAôÄO\x001bÛWêµ£»\x0007Nxh\x0017\x001dp¨ÎFS\x0010\x0014T©ìû\x0003«ïIÔx¹¥vì\x001bZ?ç©ð¡uS
E³ÝÐAöÙÿ®\x0015ü};¶\x0006\x0017Hcf\\x001f{\x0012½½¢':ä±QT°sbVUÞC*ÍhÖÕ³OÞRèÔû^{\pISõ!]íÚü]vü©ïç~ù\x000bi%±ÐëÐ'\x000bßg¿¢ÆÖ·Ü|s0\®9d®éë'¨Í3.\x001dØÿÐ</p><p>mÑ²ëÁO§ÀgÿC+2\x0005>UlÍÃß³w¦\x001aVEÕ3Ý_þv0M3ÍÈCg>t6pÖ\x0011ü8@çû­&ÌôÛ·¾s\x000fë5}úgêà\x0013\x0003¢ÕìPi\x0019w\x0015Kõ\x001e,²s)§\x0006iÆ¬Cçþ´y±ào
</p><p>\x001cÔjµZ½^¯OÓkZ\x0001®áQá\x0010%*ð9øôÃ¬þÌ#ÒuiøÔÃGEuNÎ¿¢=ð\x00013âªyÒH[õó\x000fm¥ußõ°ónxYú-</p><p>un\s mV¼Ö±ËNbì1ö­I¿\x000b=I\x001f\x0004>úÙVÍh\x0013W\x001a9\x0017æª\x0005×\x0018\x001bGMMÎÜ\x00157Àþ«ñÏ\x0015Ö\x001f)/Ý«C½\x0012®wêÓÅUñUC¿¨·N\x001c</p><p>x¾ùº </p><p>àsÎQW\x0003äô',ÝÙ_QÔY.Hæ\x0003\x0017^À&\x001c}T\x0010þ¨{E:izå¾)t}5JÄy%P\x0015mzí+\x0000.¿|üÒÖÏªK¸ìÙ\x0007þ%ø÷\x0017Þ~\x0012÷Ô/¥ÛÛjµZ\x000f5Ûæ(üá¬L\x000bÌ\x0003´j\x001f\x001bTøð*\x001fß\x0003\x001fÖ<@\x000f£ï6\x0004>z<»þÈ\x001d\x0017\x001aÆå2ªÖ¡àGTæÌª¼É3\x0014\x000b¡O4oC¬C»&M8ÚØP'UCgÝx%ðxPÙãª\x0007?¦Ö·êJ8\x0004\x0012K?ÓNÄ[9ÏÈÎÄ1,Û°\x0003ÞÃÇòàÇfá\x0014þ°>?#gmf\x00195¬fñ¢!`
\x000fÄá_Ë~¼\x0011Ï¦øÌka:\x0002 \x0015jò6ði\x0005=T\x001cj\x0008|ø	MùÁ[î{_ú¬k«Übãwr\ðã:</p><p>~ø¾Y\x000f\x0017\x0017üøü:`jh\x0017mîúº´<\x001b»[\x0010cxW	ÄÆÌº+ÂA\x000f4øÖÚEeôÉI:ÌËÁiØÝ5zQø\x0013×ç'L×ôîYPµÏç\x0019*½t:ëÕ\x0013Ùn¬ª3+Pð\x00135\x000b\x0014\x000f~~õ~vëWâ\x001bí«r~óÀßKË:áCÀ4WøðÐ]ý õÓÒ±Qå3MZn³ñÓ/Èu0¿wÕØq½ûö\x0008¡À¡S\x001ft\x000cßÊÖ\x000fñúöcO³Û\x0007\x000b~.£\x00015\x0002\x0006Ú\x0006«Bø¢ð@þgjz<\x0007¥e6Áð.\x0005ªqÝs_þtâÀgÓ¢Ë¬n@UÅj\x001fë*\x001fû©Â¦¨*$QT?\x0004\x000bXõãÕ<Qèú]»ÛºVUõ£Rfðc¡Á¢ViÚc¿\x000f.ÔGuÉâ>j¾2W«¨ ³Q§ù\x001f;·UýsåÇß\x0019,Ûùxò&_¿îõÒ²4(üùÐÿî<|,%ÍñKÇéÐÂ\x0015TmBÁ\x0015¿$TH?´fðÐÃ¾ô»?ÿ@d@A
\x000fÇ×çÔi»ØMk\x000e\x0004­c7µ\x001bZßÖw!=Ï\x0008|F$
|Vùt\x001anKSÏSÐD\x0017±\x0002sÔq§K·õõ>\x0019§k·z'ª{ÒNÃ\x0002ÿ\x0004¥yÞúmï<NAÅþV¤~/Í]­Ñù\x0018\x0010ø¸#*ØQ¡qìTÖL;0\x0015ºs§À\x001b^»¾í¶\x0014ü$­ø)\x0012
í²ÔpYÍÃhºvqè\x0016\x0000\x0017Wñ#¢\x0000.-\x000e*(\x0004ªò¡!]ßøÜ;µ=¦û!'t]Vâzóéå£\x001e\x000bC³Ù\ÂA\x000f}G«ú\x0016åÙõ7\x000c'e(øYñÞ7ê !A\x0015î?ç|.ÑM\x0013ØæM\x0013ØTi=¥»ÑâÒïþ¬Ï¬°G-\íóÔæï\x0004³wÑ,^ô3\x0017·âlËYs»¥Ïë¼\x001cÞ5máò\åÎW-ps\x0006/\x001f*âd
~8</p><p>O\	~Þ¾z=û·í¿çÀÇ/ü\x000c¢
ãÖ;pò}G\x000f\x001fæÅQðó±dS\x000e·ç9Ï0¬«\x0019¼V®\x001efÌ\x0016Â9WÈ [¹\x001aÕ\x0014\x001a$
~¸F\x0000Ô¸=?Xá\x0007$T9óã»¾Î¦Oë\x001c\x0010¤íÒÌc.Ná®ÓØISÙØI'+ïñÅÿ¼WZ\x0016gÌ\x0017K×:ð\x001dÝFwðÓ	\x0005Cy\x001fþ\x001cS¨&V<ó\x0013a´¬èa\BåT-ª¯OÕ©wÑ\x000c¹4&c\x001fm-3ÙÄ¾*U>\x000c=}Êuõ»ôý||6ø	OÕîÊ´íªÀ'O`ÀÇOáÉ\x001bí«ô±nX\x0017\x00059â¿ãÐõTñCC½øm¿úË=ÁÿTýè¶\x001d&ÝcTsç*¡À§2V®Æ¶Ü´Á\x000f'þ\x000eÝÇ\x0007ÿæKì-ï87÷Ôì"U>YLéê\x001bØ¶q7\x0001ãáoN¾ï\x001dwÛp ¤</p><p>|\UtðW§¡sg2M=IZl¡re¢Y\x000f)1¡Óv7ià¥	\x0002\x001fæièSX\x001f¼ÍËGy\x001f\x0017å¬PBÏ\x0007(CQ
fS
ñ\x0012p%J÷¬\x0019m·\x001fùyäÆOôÿµâ7AA\x0010</p><p>@Øc\x001c\x001d\ä½«-\x0000:ö
Z\x001f
</p><p>¿qã'g¹'ë[\x0000Ä\x0019ýÊ£Ø¸×½%æ\x0016Ù\x0003¡,áÁ\x0019Ä\x000bÓá®á]q\x0015U\x0014</p><p>]V@èã[ØÃÑ¬UÐßwEÛ£\x001c\ò¥ÔºV\x001bemCgïBi\x000b;ñÅ¤»Ê§©\x0012;û\x001fZ:nþÑ\x0019Á)\x0017å\x000c|Çq)fw2X\x00136\x001b3ç¹°4\x0015?¯\x0019ü:»
d©ªv¢ÿ>\x0002F#gO«}Ñ¨¹Xy\x001fQ0ûÖ¾?°ú'¤ëÒ\å30ñä¹ÒBÑü\x0003÷¾Í|÷·\x0013¯eÜp­¢Å\x0005\x0011®hVýÐ~w·ËC½Ë\x0004_\x0003\x001fuêëÓßwyëçäUAö¾
¬\x000e}26qv\x0002ª|rIýÅsÎä£¤e.ÐÐ¸¹r\x0007\x000c4Ý©´\x0010Vô·^Çjpcf\x0016Ñ·'­$
?ô¿Ç6üjg«"è-Ù=#à©\x0008TõJgðÃÆ\x001e¹êÇÀ°®¢\x001b«k¶ý¼\x001b^f/¼;</p><p>½°a¤Ú2nèUr½hÍÄÚ«~ºßñßÒ²¼Ä¡^En\x0008{Ì19´«0e»'&M8\x001aÕ\x001c\x001d¸:{WV\x0015îãcÅA\x0015U³õ4\x0007\x000fxÄ!ZdÂÑGi©\x0002R¡Ê\x001eºÜþóÀgìàªàß3XºÙ[(ì	\x0007>\x0016ÏÚU</p><p>ªöñ\x0002\x0002\x001f+ÐÁÆf¯Ð	£à'¨üIÈD\x001f$³ßDÈÔ6q½û2¿ÅiÎ©_\x000e\x001dÀSÐÃ/\x0016óv\x001fdà7ï\x0008.ºL8Fïpoð¿uÎ\x0014Fa\x000f\x0002jHPåãDÈëÕð®i\x000bWùÃçtÙ%ÈÐ¸\x0019\x001cSö{NYí#VñD\x0005?Ã»å* 4ÄjCþïÙË\x001fùóàg±×\x000f=ÎTïß¸½xEçã¨#6Ü\x0011ÝV¡!bb(®\x0001\x001dhwöØJ<\x0015ö¡}MÓkØí_½\ÛdÈWÙÃò6qV\x0004?ÒvZ0¸wÕØ 4qe.Ã\x0000\x0000 \x0000IDATuhT§¦Â>àÁO÷+·\x0005,N¶Kû3Áß3&g6EÐS\x000c¡{?¿ø¯Ùðºÿ¸Ö?½Ë_ZÊjmwêv\x0000ÐÊ¦\x001d eðÃ<õµì\x0003\x00176þ±å±­ló£[[× îÔ×M
n\x0017\x0015</p><p>ÑýòÚ©­óÀã=b\x000f1]ñ}\x0005¨ªG\x001cÆ\x0000ÉäéísÚu_±¯å\x000f}þ¾u¿þ\x0014öÒ\x001dÂ\x000eû?¬öa·zªT\x001d\x001dxh\x001dîÅF|Ã¥ßx-ýF|¬rTù\x0010÷\x0011¹ý\x0006û\x000cÿ~Jp\x00198á_S¯Û)\x0006B$²öö¡ kÛÆ%qï]oÕëõÂ))tO"é¶yppõ÷·?\x001fßõuéva>Íðemè¶OÅ«|$ÔÐzÓ¢Ë¼-1Í\x0012ü¨¦A·Ù
ë·²ëgLuj¡RÛæ>¾õ±ÖÏ\x0014ÔaM\x001c~;Uÿ\x001f~\x001dUûÑíÅ°*w¢Ðp-ªÞI*O#è\x0002åÛQ,h¨2ðI©~[ôk\x000bîÓ\x001eüÐ}Î(fDÀ¶K</p><p>\x001fÚÕ}×»_½HÓ?°ÅÎÙ{l1áØ?\x001a[\x0013U>UU«Õ\x0006êõºÓÇ\x0003\x0003\x0003Rè\x00045{NP\x0011Ô6Ãa­6Õë\x0007¤\x001bÍJM.\x001b¶p9f¹¨´Ák³wÝ°.[è¡]`È°#ÓÿÇVûä\x0011Uí\x0013FM£y ±\x0017Ï\x000bÒ-t\x001bÖ\x001c\x0002¦âHÐS*ªö	\x00070Ï>ð/Íÿ·µo\x001dsö{bW\x0015ANu\x001c9qfÇÇª3øIÚ T<U>yv¥T?û\x0014÷w_î»~\x000c\x0005\x000f4ÛU\x000f
mÛ»j¬÷ÕKA¯j\x001f\x001aÊeº²G\x001cV\x0017\x001ebGA\ûò\x0005ÿ]ñÞ7J÷£¢³«jµ\x001aUü\x0014²öáícÎà:7ª\x0008JZñCa\x000f>¬\x0019þðe6ðix\x0017zÚT\x0010\x000f8:?cnQ\x001fDù\x0006OåÅ½þ±\x0011AWÓ)P85$/6/j\x0018ä¼´|MÛuQaÎóÓç¶]wèß| ñû_ûtÛ\x0014âÞ#ÞØ¿ùF6æÔëÃÃN!\x000fTWÐi</p><p>~\x000c|Ê>XÊÃµq½ûxUTc\x0012W{\x0002Q0²ù¥Òò"$}È·S7v~pû	ì¯¾y±´\x001cìf[L>Y¥\x0019âÅ«|l\x000b|\x0018zúÈvìÚé\x001d\x0014WõãÚ°.\x0011U	\x001a:÷9ãRÌÞ\x0006T)\x0010,åó$ða\x001dB¨!`|9\x0005A\x0019U*\x0010ÞÿóE­Ð§Ð¿»ùÆàosc{îg£9;èç\x0003~È\x0013ü$íS¡KÎ*Â·\x0019f_ªÛÝ\x0012«ò3ú0´ê¦5\x0007Øãû§KË\x001eêXU´}}éÅíìÐÃ'\x0007ÏÀÎÇïÐ\x0012\g\x0019Ú8¬\x000bÃ»R \x001e=iûúÐí5ôö©üFÛUªt¹\x001cú°ÇÅÄê¥«\x0011ø\x0000È
ó</p><p>K\x001aöpT±£</p><p>~:\x0005>)Ù\x0010ò#-ñ\x00045f\x0016ñP&UØ\x0006Î~É\x001aü\x00141#
çr'ê>íSºú:\x0014§÷Û©77~¦÷-x%_Ò>:Ú¨°}ª½/>ô³ÎY\x0015ã sqJ+Ñ\x00077QÈó£93u÷iH\x0017,çL>Êù\x0010\x000b @µsÿâÝÿïýß¿÷\x0013&þdTØÃb\x0002\x001frèe³¥Ð'\x001cìð\x001eqyDÍ\x0007\x0015Î\x000f»\x0016Ã\x001dªØ¡Ê\x001d&<¢Áo¯a\x0003wÉa\x001eø)mðSä°.æ`O\x0012ÔWÄ%{Wõ)(HuR\x001c£T3` sÇOUî÷°éoz´¬\x0013Þ¨¿ï\x000e·ÌÆÆê\x001eÑ(iE¦-\º!mu\x0010ø\x0002\x0011</p><p>H|íá£\x000c|.~V\x0000\x0011ÎzË?xã§Ô×fCaO\à\x0004\x000fsèÿªÀGµ/ãË'³? W1§-T_¡@C²(ÜáÏ>Ðº\x0011;üÂ\x0003\x001fªÚQ]\x0010øXOûð¤ANÑMU\x0016U6®w\x001fF\x000f7òôÅI¶â¶~æ\x0015?:õ÷%«\x0012*¡ÊÇè\x0010Bë{úd\x0019æ\x0005\x0015tÉê]®\=Tµ~\x001d\x0000IñÆ7þÇC?ûÙoYÑs Ù¸hV®$âª|DQÃ¶¢K·.\x000fûF(£y\x000bC²*oÀÄ\x0010þN\x0015?E\x0007>yÙZå\x0003\x0000¥«Õjµ¡z½nìds</p><p>±¸ím\x001cÓ¡\x0006FWÐËFÎY{ûìØµÛ«p©b\x0019Î¦\x0000«ÂÔ¨Þ\x0019o|ãoø/%vlyl+ÛüèViyÆO¿\x0000\x0007d	QÈC\x0015?<ÐÁ,0\x001dê1\x0011\x001erPVàãàÐ\x001ao¿»}hn\x000c \x0018¬Õj=uÍó·S{±\x000f\x00195sVmÇ\x001a@ÙB\x001f\x001aFC¼\x000e>ý°t]O½|8'B\x001fTû\x0000\x000b^ñÁÆxÞ?~st0\x0003Äk²ï½nvcªÇkÿï¤ù·\x0010\x0006Dk=É;,«\x000c\x0008z²\x0011C\x001eTí@\x0014ÕE\x0016|f.~\x0016º¬À'O\x0003gTù\x0000@\x0007Aëf­®ðÜÛ­§¶êµKÅÇ@'	g*}Ò\x0006?fòrÆ]»Ù¤	GKÏAçkhÚÂå=Ò\x0015UðÈæÆ%©7Ú¸s(¡@F\x0007\x001eð0Eó¶q½ù¹ñ°(kh\x0004\x0012§*\x0001?»üvö¯ÝÎÿ°\x000c\x0010ò@YÊ\x001eÎ\x0006ºöI[íCUËãz÷aÛ\x000f6k¤>\x001a«óm\x0017ïëÃÿ\x001f^\x001eõ7\x000cß¢*ê÷}çåð®,|\x001bÚÿÍW®\x001eùù9ÿ§
|¢DÝO\x0011\x0001\x0011=\x0016ñ±A\x001b±ú&OàsÓuvÓÁÏ¶wèrOØkGìýôwqÉ\x001c=ß©Uî×\x0006P \x0012«|ð\x0019o\x0018\x001c×»\x000b\x0004>PIQ
è£%	}\x001cèëcS¡\x000fª} ¸ $îºN¢\x0002\x001e\x0015~;\x001eü$ý]1(»ý%s\x0006ÙÊÕØa</p><p>ÿÑu±ú\x0007<y\x001e~\x0008yÀAÏ@Å\x000fÐ¯
tªùÜ?&|fÜ\x0011øwªöi\x0006>\x0000\x0000F¸XéCC¤¥\x0011\x0010üTÄÊÕöîÈe©&Jz{\x0004>-õú\x001a\x0005?üßir=°¥ÎÎ»a?«ÕF\x0005ÿFÐã
×\x000fðúq&\x001c@+¾OèUø³óñ;ÚA¤	~ÐË§\x0018TÁ³wÕØnÕqLsH\x0017Ã^\x00000Á¹ÐgÚÂåÃ\x0016]&-Ï\x0003C»\x0000ü$èiîXQuPk\x0019\x000fy\x001c\x000e{ª^\x0011\x0002\x00007áO8ä¡ó4t.PÕö¿ùÐ­¨`ÇÊçcJW\x001f\x0000\x001cçdO\x001f\x000có­_»VZ\x0006P5\x0014Ø¤i¢ìY5\x000f*BÀ/èç\x0003ÐØô4\x001cü°f\x0005ÐÄ£\x001bÛRåÓ8	SgõúAé:OÖðªuTû\x0018¢ê\x000fsäÄÁ\x0005Àg£\x001c~l©fò}Ê÷Ù\x0017](-KkÓ¢Ë°
\x0000>ÁÙI·¡\x000f\x00185¥«Ïùý\x001e1èÙ³st}\àcÖ¾<á\x000f
³¦\x0010\x000f·öØ@ó{J¼\x000cûþ ËDð\x0007>ôù¡PH\x0015\x000c\x0012\x001b\x001dâìÖyI\x000b3ÀÐ®6.ï`ãu\x00046\x000bæÏÃ\x0013\x0002\x0000q¼\x0008\x0016ùAìo\x001fúòUµÙQå£Ü§ð§=\x0004Ê>!I`jäÒ	ÍØøÂ{Âû«5áÿµ´'µA\x001f</p><p>øg	!\x0010DÂ\x00198\x001d¡§\x001d²%Vûø^ù\x0003PAÝxÑ[0^°§à.OäÔs3r \x0011ñÆ÷UU`H\x001b¤ðËï}¸íB\x000e>ý°t J\x0007±ª* ðm¢M\x001aÁÔÈ	UJa\x0014ø\x0008ê¡ðÇëYåL¢÷5¿èÀ+}èB÷yüÔ¹Òç	ÀENöô\x0011eèï3ÀITù\x0000xE
\x0003ë½xd\x0008ìâ¥Ë¬z^F04Îcðöë\x0000\x0000FðGQÇ.
ý\x0012û¸0c\x0017'âöÐ\x0005ªD¡À§õo</p><p>~ÆO¿@º=ÈNyÕËìõ¯zYZÎØ\x001bÿ\x0018ü÷\x0017¿>mùõ!ÁÏ/½¸=µõ\x000eé·¢«7\x001b££×\x0012Ä±>Sp>ôi\x001aNq\x001f¥h\x0000\x0000\x001eãU>QÄa_6\x0004@ª\x0004ñ:ÕYcðÌÊÕTåW\x0015\x0012\x000b|¸pð£:µ\x0019\x000f||÷Â{\x0006ÇO¿ Ò\x0015~ïë\x001f¥ey¼¾- :±wµ\x000fõ¾ó'¯hû·XÉ\x0013ó9Aà\x0003Nó"ô¶py\x000fk\x0001\x0000@Z¶\x0005@Lè_1÷â÷°É\x000f~¶­:	4£À\x0007Á\x000f$$ðáT\x0015?Ì*\x001fß\x0002\x001fªæ	Wû¸Þ/Í¦ç©Oë\x000ettÖé­óÚªb6<\x0000×yZf	~þìòÏIË\ôùÅ7³[n¾¹íõÌò|8:µ}wöàÌÃ\x0008\x0004¿x?\x0004:Uút²ä\x000b_	nQÄAGcøVãe9ýL6óÍonÓ4¸xé2wÎ\x0006_2\x0007Ç,(øÁç¸0Sºúz¦	|DáàÇ¢Ð§2Û¨Ðgüô\x000bù¼çýnu\x0011pi\x000eïÂvYïy½¾Ç|\x0019Þ\x0015HÛß<÷åO{\x0013üT\x0018z¹\x0000¾x  c§´ï\x001foû7\x000fFÔcdÁ\x000e'Vñ$ÔéQ\x000bÐ\x0008]Ú\x0015Q}sÿ0cÏ<ËØ¹=Ý¯4Ð«yÐÊ\x001fåY\x0000 £jàÅK\x0011øû¼</p><p>}X[n¾YZÁ`Ñë
\x0000`»p\x0008\x0004nZðgGw^oÅ4ÿ«^ø\x001dÛþr³?\x0018</p><p>½áÔÆEs»\x001b÷MÁ\x000f\x0014¢9\Å\x0019¼Êç/?ýC¶ág\x0012WýlØôLð\x001eü`Jðr¸>Ä\x000b\x0000Üæ]èÃ2\x0006?{ÿë_Ù¸3ß!-¯i\x000bã,2\x0000\x0000è0XæÄ	\x0002zÇÿéÈ
C¡Ðâçv7~Ð\x0015\x0006\x001d{\x000ccl³´\x0018pnb´Oð;ÿçâ?Q±\x0000\x0000PA^>,CðC¡ÏIÑÛ¶ìêk®aW-¸Fº-\x0000\x0000ØÇ÷~\x0003\x000bæÏ\x001bZ¼t\x0019ÎÒ+è\x000cy2ý]EP\x0010\x0008=²¹qÓ\x001c>6ëoþ­ýÚ?ã \x001cN:ÿ¶`qÀWù\x0000äUÅ~>\x0010¯*3ìùÂÛÐe\x0008~6-º~§õo\x001a2tØTY\x0001Q³³´\x001c B°#\x0002UÑ]G\x001a3Õ¬q¯`3Ç½BZn \x0010ê>§qIh­õ</p><p>Ê¶s¨Ê\x0007\x0000\x0000*ÊëÐgÓ¢ËRï ¤L\x0005DªP~ÿo\x001e\x000e\x001d\x0000àì \x0000\x0000Ø"ÿÐ«ï5a\x0006H\x001føðÊ \x0000\x0000\x0003\x0006pÎÕ-^>YguÊ\x001aü$& Riþn+ð¡a"f)µ§\x0002\x0000\x0000@&Ô\x0013çÍ\x0014ø ×\x001cT§Ou*\x0017\x0001üÓ\x001fqì	\x001aåë\x000b¶s\x0011hì£\x0019ê"\x001f4f\x0006\x0000\x0000'ôÁ©Ô\x000bT5AÇ\x0015>NÌ\x0002\x0000@zÞ>ÔÏGZüw¥ev©\x0005\x0001\x0012¿°F kG1Ïó\x0005P"\x001c A *\x0007ËÔÌYZ\x0008\x0000Þ¡°\x0007Cº\x0000ÀFæ</p><p>\x0019ò9râL6¥«/¸@;ß\x001b9\x0007CµÒþ)ú:×Ñ-\x001d\x0000 ü\x001b\x0012!NwÎXd\x0003gªH\x001bö0\x0004>\x0000P\x0001á°iâÉ\x001f`\x001e~òÁÏóOÿ\x0007Û³s}ëßU<ö9ô	Îú&
~>úO÷²\x0007Ü)-w	UûÔë\x0007P±\x0003P]\x0014\x0008\x000cãõÒ50·ªñ¨GÏ3»\x0018{æÙ5;·±c'È!Oãw+[ÅG}\x0016/]áÙ\x0006MéêsâùE\x0003\x0000U%\x0006<¯>ãS¹#{Kp	{ò¡\x0008T!\x0004ò½sÂ³^=QZÎ\x00151Þ¸&ÞPí'Fº\x0000T\x001cB\x001f°M-u½EÕ+>ä¸¿13</p><p>\x0018~­°§2\x0006«þ\x0004L\x001eÓæ
xÒàkÏÎuìù§74'FòóxÚ×Ð§íÕ¢*\x001eUµý½{:Óñ¡C?\x001fpT¡[eSÁ­f8X\x0004/lBð\x0003\x0000\x001b?ý\x0002|_sjµÑÝy÷iæi>\x0011Q!O\x0014ê\x0005D\x0017æqõO%*}bWñOaÇ§õÈé¼\x0000 û\x0007«~Àà\x0007À\x001ayfÒÜ´è²\x0015»¤Å\x0000\x0000P \x001arç\x001b\x0004©&\x0010\x0003#'ÎP\x000e³²	\x000f¡\x001aáOù25}eB\x001f¦\x0008~äË\x001bÆBø"Â ø\x0001(T¥¦k\x0017Ñlt.Ã	Pi?]¢\x001c?u.;ôðÉ\x0011×Ú»Þ!x?\x0001@nbÿØ¨Ù£m¨ÞÉK|\x000c;\x001f¿í}a»«\x000f%àcè£|óqe\x000cé¢\x0013¡ÿøXT\x0004\x0002~Cð\x0003\x0000à¶m\x001b\x00043»ðÐ~æ¥ý¶¢u\x0006(Ie\x0003x'\x0006@SºúbÁ]6ñä¹­µwu[\©Jò\x0014~r\x0005C¼\x000c\x0013K\x0015Y3\x0008@\x0008P¨R¿X\x0010â\x0002\x0000¸OåË\x0003²:âz à\x0001\x0000°Sø;cd{]cµ|ømË1Ã(i	T</p><p>\x001aefC\x001f`\x0004=UV\x000fÍ\x0007Ð°ä\x000b_Á3\x0001ZÐ\x0010/<æP¹~\x000f;tp \x0006:bu\x0011¿ÎPàY¢\x0000\x0000\x000c\x001a)\x0008¨5\x0013\x000f¶\x0002ÆuåB¥O!°ßæ+\x000bù\x000c ¯QYð¹v\x0014øô}òãÒr\x0000°\x000b\x001fÞeJ¸×\x000e\x001fJÖTÛ¶qIÑ_ ØO°Ìøé\x0017à¤+xÃç¡]It:\x001eLPíc<÷-ôIÕM¼(%uaqµØ\x000f8ø
C¼ lò¤ã¥e\x0000yÐ¬9.Ã\x0001»fáÀ'eCäÔ\x0014Õ;è\x0002\x0000à:ëï»"x,ý}·\x001eÓ
·|
.+À\x0015ÇÆ¿ç}\x000b}º¥%\x00004\x001at\x0007
ÌPòQ,ko4t\x0006\x000eU>`H?ª4ôÛ¶qxR\x000cßá\x0000\x0000\x0019Méê«ôw\x0014
Ó¥\x0006bØÃ]õÇÊè]\x001eC §aèûá§fàcÃcÃÂò \x000eZPå£\x0007úÌAE È\x0003\x0000_àX$¢#\x0011ú\x0018Vr0\x0010{ö</p><p>;×yà©\x0003\x0006ªò{ñ{ðlä\x0014þNzø8iÂC¼¤\x0000à,ôóÉfñÒe.®6TÀÁ§\x001f¶þA¢3@\x0006Í0\x000f_Ú\x0017«\x0002@\x000e\x000fÿ\x0001¡O\x0013xA\x001eÃxöÀe<ìY0\x001e^GËT}h\x0017ùíC_%AAÑ¨ãN/l=Qéã¹\x0007ÜYõ§@;Å½\x001e÷\x001f\x0015¤\x0014tÙG3gØ¾ã)ôò\x0001\x0000a\x001f\x0005ÀÇZ\x001eÚõËï}XZñ»\x0018B\x001fÿ}ôî­úSP\x0004E+-3ôUþÌ\x00064Üq×¿ÐYHTýifãðc\x000c-ð\x0016>¿P\x0018\x000cíJ§¹ÝÅs\x0006¾ª\x0015uLÐÇ\x001cl <¡]¥Â\x000c}`¢«|\\x000b²7ô;¶ô±¡\x0003\x000e\x001b\x0016,?\x000fcIÁ7Ý\x0006·¡ÂÇ^Sºú°Oî\x0010ôô1ÃªRÚ/
mdWôt\x0017ãË\x0016\x0000 \x0007jà\¯\x001f@\x0000lFá%ãb%Ï¬ég±ÓÏ</p><p>~ÆA\x0007\x0011\x0003U\x001b\x001a*tPåc½Òªï·m\B¡´\x001c¢¡ÒÇ\x000c>ÜÇ
Õ²\x001foM[¸\x001cÃS2Pôó\x0001\x0000\x0018®Ì\x0014Iá\x000e¿PàCý\x0010øãpÀ\x000cÎÂö\x0017¢Pà³gçº üqÙÁ§\x001f.¬\x0017¡yè÷â\x001f4E¬6ìDC@\x001cÚ¾>ñ\	~D«î¼[ZV&LÝ\x000eà4TØ§ è¡ç\x000fÚ\x001c9qf\x0010þPðÃ\x0003 ñ\x0002í\x0010úgE@ÎZ!È\x0003¨8\x001aÚ 'fðãÒ»m¯o¥gI1\x000ce\x0000Pø\x001d»xé²ÒBo\x0004î²)]}Öô£à\x0007@â\x0005Úù\x0016úØð¥­Z\x0007Õ²Baêv=M¡\x001cøÒJó!d¢¡ÅQU?\x0016]fÍN¤â,3\x0000@\x001eØI\x0008Û_HËÊQÇåÄVa'ÂPé\x0003\x0000®ÀYn°FÑ³vù&*ø±H°~¨æ\x0002a8\x000c\x0000TE)ßÕ'[Û¿G\x001dwzªp7ííó@èSÒw\x001c§-\.-ó@aA@­\x0016|\p\x0000\x0000Pq4´\x000b\x0007TZX9T6|Ù¦à\x0007S·C</p><p>¨,\x0001'Ñì\x0008Ü!©m\x001b\x0004ï\x0015ôñÐ§XVô÷q±¡¦\x001dð´\x0001\x000eômUô\x000ebý\x0005|1már+âcÆ\x00180\x0008ß!íð|fO´\x000c*Í\x00056õó	ÁZ\x000c\x001fC\x001f_p4\x0000\x0006p\x001b\x000eôMt<\x0004MÂ'!ÊîëCU>ª\x0000Qµ\x000c¼SÄkïvx> Íº
\x000fâ	Äx\x000fWFµ\x000f\x001fâ5¥«Ïêí\x0019*}ôJ²ÃPê£§C¼\x0000\x0000</p><p>3÷â÷(ÿ\x0014llª>u¡Ê\x00073É@\x0002Ø\x0016Ö"ôÂ\x000fkÎä\x0005j\x0008}\x0000ô@2@\x00058U»C¡t±!øé4cE¡\x001e\x001a\x0000·p\x0002Å^\x0016\x000fíj)³Ú'æl_ñ5ô±ý\x0000\x001c\x001b3\x0007Õë\x0007â^7y5\x000bÏ/TÚâ¥Ë¼\x001f\x001eLÁí=çp0\x0002\x0000\x0000P.U\x000fk.?râLiy\x0011¶m\á]%pá\x0000Qùf-\x0008fÿ\x0000×àÌ6\x0000\x0018EC»\x0010ê\x0000\x0000\x0007ô!/</p><p>}lÉ«è*\x001fá]\x0000É4§kjózx
$3súx¦<ÔihÈ`\x0008S·C\x000c\x0004\x0000à­¨*\x001f\x0017PØSFàÃ\x0010úh¥ô\x001e_ÌÎÀK\x0005}\x000f\x0018[û\x001f\x001b°1(\x0006ú¤A\x0019ðù.\x001e>ëÐjK{ÙÐÏ'iàc[Cç2ÃÖ:HKüQô\x0013µ</p><p> ¬\x0003I%\x0004\x0000¯`gÑ\x001f.+tvsHAâïc¼×\x0000´AÏ>\x0008¤©¸\x0004Â¡2x\x001d|úaéøºì°C¥Où0d\x0004\x0000\x0000â ÊÌ uÍ)\x0017/]ïcp\x001dÂHð\x0019ªÂ*Ìåa]6@èc\x0007¼í.\x0000(\x0005Â\x0008³Ö6C´Ê®öY0^·´\x0010l}=\x001c®\x0000\x0005·Ù0ÄË*\x001fÐ§ò¤\x00124P«×\x000fà \x000b\x0000°\x001d\x0000\x000cáÕ\x0000\x0000\x0000ÓÊîçãbM\x000fCèc\x0015\x0001r\x001f^C3pf\x0007¬°xé2TüA\x001bôö\x0001`ûd/\x000cKJ\x0006ÛSÐ¢¾>b?\x001fÛ\x0002\x001fVÐÇµ,Î"[\x0008Óµ®ßuÀ\x0008§¨3Â\x001b\x0010¸z}H{áä\x0015@F\x000eVùX\x0019Àû~4ëÚF¶7Ëåá\x0005½¾8\x0016\x0000\x0000(+A\x000c\x0002#ïà\x0000\x001d `ë2öV\x0003°\x0001\x0005S|ZöQÇne\x0000\x0012\x0006û\x0014½óèr#H\x001b*@\x0000À"8\x000040E0\x0000@ù²6Ô/\x0008ç$o
ÍmÐ\x0007@£Zm4N\x0000\x000f\x0015&!Är\x0003^'(\x0019Þ\x0000`Ä®>'\x000b\x00040Å{;>v*úMRæx\x0013~Ìò\x0005\x0000à\x000eêçãòY\LÛîð~\x001dö»À	\x000bæÏ³j¦_\x0004ì¥(«\x0015cª"9Û\x000c¡½Ü¨aTzý@³aTû\x0000\x0000¸cñÒe.\x001fãû\x001b\x0000\x0000¼³mã\x0012ÌH¨\x0011B\x001f=0Ö\x0013Zêõ\x0003E>\x0019xï\x0001·\:«[Òº¢ÒÇM:Ã:T\x0018\x000f¬ÝÖ;~bÀI:«s</p><p>èëãÄ±\x0018B\x001f=Lm\x000cÜ\x0000bÇQ!ëtí¨öñ</p><p>J\x0001\x0000ÀV8\x001bn7r\x0000é9³ï½mã\x0012'BÁ*>ØØ&ãòÔí\x0006Y¿Íñýì\x0003Î®@éÐC\x0000 r\x0010¤.x/uéÚA¤³Ê\x0007ÍGT!ôq}c7«{\x0006\x000b\x001eâå3ô«,|\x0019öáA@è
0\x0004(HÚéÚ\x0017/]&-\x0003\x001b?\x0019¯¦\x0001c¼{D~¢H«ºçC,ªNé§!^\x0008\x0000Gãï\x0017Ìç|`>\x0002æ!¤\x0002|ùòþ-m?wÖô³ÿ§
\x001eøïÎlþ¾\x0008Û\x0015ãp\ä±½/lÇçÇ\x0000> ª£²H3í\x0000\x0000\x0000\x0000fñýO-\x0007ó\x000bæÏký\x001c\x0015Â,?oW\x0014«Â,¢þ\x0016èEÕ>âk\x000c~Àôêæ ôq\x0007Rí\x0012¤®½
ª|\x0000\x0000ª\x000eú\x0016Ìïklüü`\x0008¹\x001dp\x0015\åÌ{·*³wù²1A38Ç`\x0016/\x0000ç¡·Gùp@\x0000 Ãç\x0002|ú\x0004+ª|¼åT¥+3w±</p><p>>¾ôE(âà\x0003g'²N×Î¿ÀÇ\x000bØ©®¸ÅK!l/\x0019z\x001b\x0001(ása\x0019\x000cí*\x0016\x001a:ûÅÔÐ.ÌàÕPÐÇ'xã\x0016&ÏS]\x000bwaó\Û©FHå	\x001c<\x0000x\x0001ã\x000c°ý«¬Óµã=\x0002\x000eB\x001f\x0000¨Ú'OÅ\x0010@J¨J\x0001°\x0000\x000eH\x0000*\x0007ß¿\x0019d5Ã\x0010/¿\x001c9qfÕ\x0002£p4ê&Ó;.\x000cñrd\x0018\x001a&DBa§\x0013 9TÆ«ðÞµÌâ¥ËÐÿ­\x0004«îúNå\x001e³¯öì\\x0003&ª\x0014úøöFÂqùs¥zý Ú$e~\x0005àæô¿à\x0008ô</p><p>\x0002yÿÞEµ\x001c$±ý7;ð<y\x0000SµJ\x001fwá¾aõúAMgÒ°ß\x0011¦R²¥Ý\x0006à=\x000b\x0000\ÔÉ9à"NdÌ~´,)4r\x0006H\x000e¡ÛL¦	Ø)Ñö\x001cÔ1\x0017Êª\x0004Á\x0019n?àu¬¼¨s\x0008Á\x0015Æß«3s>ÔÓ\x0007}}¼!«!ô(Ø)ÉedHWc\x0017\x0000\x0000\x0000\x0000\x0000èBÕ>Yg\x0000\x0003« ØÀ°ª>>¦8h!</p><p>zPÝ\x0003\x0000\x0000\x0000a¿Ï>¨RÈ Ù9÷sg\x00060(\x001fúù\x0014£j¡¯)"v\x0000¬!^\x000eÂç</p><p>\x0000òÂÁ`5áu¯\x00104Ï0ç}î0¼\x000b\x0012ªü6\x0019Ã» \x000e¦Ò\x0004C¼\x0000\x0000ª\x0007\x0007ÎÊ»ÿ×\x001d\x0000 ¨¦÷ÚlÛ¸¤òÛd>þ@Uu\x0001\x0000\x0000\x0000\x0000hÖv\x0010¾>Njzoµ^ÜîÔú"ôñ\x000b¦q·\Ý£=\x0004BÐ\x0007à\x0019Ìø\x0004i-?\x000fg\x0018\x00002Àö¶\9fµBÞ÷_¾>Léê3úýâr?§¶Þ!-³\x0019B\x001f¿(³ugÒ¹/j4w\x0006p\x0007\x000e\x0006@#ã¥ë UÞý\x001eÛ\x000el\x0000B&O:^Z\x0006n\x00187~2^©T1ôñý\x000b\x0013;\x0004\x0000\x0000\x0000X¼t\x0019ªp\x0001\x00004£éÚ\x000bPù\x0006À¦ìÙ¹í}a;[\x000bJ\x001fB¡</p><p>\x001f\x0000\x0000ôÂ\x0010/mL?o&Z4TmVÇö\x001dOi¬hÆo\x000e>P\x001c>~Â\x0017¥0Ä+±!GÖ\x0013\x0000\x0000 ©~<S\x0000úQ UwÞgV#Óý|¦tõIË\âÚú#ôÉÏÖ²?Á\x000fÎ ¦ÓíÒÊZªìç\x0010å¼Êùóp6\x0010"¡ÚÀ	:öuð:\x0003\x0014dÖô³ðT;Êå\x0006Î®ªjè£óK\x0019;ú\x0010Ö¡J\x0005\x0019\x0003\ü\£Yl¹p\x0006\x001fJ!^¹`_\x000e@fõ	°É'L\x001b¨JfÛÆ%Îä.V¨ôñ\x001bÎ8Y¨1Ä\x000b\x001f=Ð\x000eÍb\x0001\x0000²Ah\x000b\x0010bs?\x001bª®
ÏÚES·\x001e&v¡Ê§\x001c8ò\x0004(\x0001\x0005?\x0000\x0000\x0000:¡Ú'\x0013]Ïé\x0013m\x0008öÍÀpnOP\x0008TÐ^ë½|£¡Ê¡OUª`Pí\x0003\x0000\x0000.C\x0001!¼Yt\x000ct0;³PgU>Sºú*ÿ9G¥\x000f¸¬Êggpf</p><p>\x0000À!hæl%\x0004\x001eC \x0003`\x0017^!SB?\x001fm!¡«ÃÓ\x0010úËªüe\x001d\x0019\x0000Cpp\x000e\x0000)a\x0001`\x0001º\x001dì^>åBè\x0003\x0000\x0000\x0000ãë4ûèëXÑÏ\x0013^\x0017\x0002 ¯Ov&AùÐË5\x001fÇK/nw.ÄªzèS33\x0018</p><p>\x0004\x0000\x0000Ð\x000e=!\x0000\x0000 J\x0015|/úRå³óñ;ÿ\x001fzødé:ÛU=ô©</p><p>ìØ\x0002$\x0014À.h`\x000bºé¬ºÁÐ.\x0000è\x001aâP\x0010¶÷\x0005÷*|8>\x0000\x0000íð%\x000f¥@/¡Hª\x001a\x0000ÒJs\x0002\x0007'{\x0000ÀÍ|\x0000\x0000 \x0000IDAT\x000còeh\x0017k>=;×9÷\x0010ú@\x0012¶\x001eàà\x001c \x0001\x0010\x0000\x0000ÅÃ¶×Riª4PÑ\x0001`¢2ÆùõÈ3¥e¶Cèã?|\x0001x¨VkÛ|£\x0012\x0002¼E
Ñ\x00134Ò9´\x000bÛ^st¼NÆg7·MCÒ\x0015\x0000 ´mã\x0012'M©ºgÜx÷zùpc¤%à\x001bôóñ\x000fÊ+®V\x001bÍêõ\x0003U\x001a"ù:+\x0013@RÍ \x000c\x0003p*ì5ý,6súYÒrQó÷Ò\x0004>o»nÃlí\x0007Ã»¥\x001b\x00028ÆÔÌ]¾\x000círqH\x0008¡ßtá@é²}¼Þ¯ÕF\x0007ï[ßC</p><p>nÒ©7GZÖ\x000bÿ}?P\x0005³:\x001cä¤\x001f¾Æ¥\x0019úéÚ5Y«\x000e]$)N\x0004\x0013UÀ\x0004P1(\x0014ð\x0018wåS\x000b.C¡êõ\x0003m+Úqã\x0017\x000beîwE;£é.\x0007\x0019ÿ?&é\x0008;.~éïtfß!¨Ô,\x00170G¥Ù\x0017HY
ï\x000b\x0000èÈõ%>ùØ¼óñÅà4±_8K\x0003 #Ä\x001dÝf\x001fZ½~ uA\x0002\x0004U3ñ \x0001\x000eð\x001d\x0015Þ\x0017\x0010¿\x0017Ãa\x0010*`\x0001ÒÕWùcbá]^ÃøbpR­6ºµSN;sÊv®ïÐ4aVç5·-ü\x0004{ó)¯ÓpË©½WJ\x000b\x0001 \x0005óçÕ*úì,?\x000fÁû\x0010¶Lu"(|B\x0008á\x000fdUä÷\x0002\x0018WùcbÐ\x0007:À\x0006\x000f</p><p>\x0017·Ö\x0008K½-ãî'ö¡\x0017[WÝ*-Ëjjï\x0018nÌ ÎèûgÁüyU</p><p>\x0000@!ü}\x001fuÂ\x0008\x0000 ª\x0010úø	
\x0003ÁebªÃP\x0006\x0007ðIvâ>9û/ß%]\x001f6µ÷Ê¼á¦ôû[WÝ:Ð\x0001\x0000ÊTt\x0015S`\x000bavKô¦tõáØÑs\x0008}\x0000ô3YePµ\x001dø ôÙºêV\x0004(Chpp\x001e÷ò¡J\x001fú\x0019\x0015?P2T\Z,eàÆÞ\x0000P	hä\x000cQ\8\x0000Á\x0017\x0000ç&0©\x0015ø\x00008HÇ\x0019tÌúf\x0006N(\x0001@% Ò\x0007\fkè\x0008Íh\x0008ÖÖU·¢ô\x0014 z/¾mßñ\x0014*|À\x0006e/¨H\x0001\x0000ÌPéã\x001f\x001c\x0018\x0003ï\x001c¼\x0006\x0000Ú\x000c®ºóîà¾¨ÚgÝ\x0007ñÌ&D}}XQw |ñ®\x0010\x000fX~Áë	ÞAè\x0003*è-\x0001\x000f¦\x0004ÐWùÐP¯µC\x0005óçá@¾\x001að:C®÷\x0004Þ[\x001e¡¾Uz¼>7qFê\x0011\x0008}æ\x0002\x0000\x0000XKÜ\x0001§¡^\x0006`H.Ø\x000cû©\x0000\x0000\x000bB\x001f\x0000wT½\x0002«Ò;¾\x001a¦\x0007\x0000¨²¼á^YÛ`T\x0000\x0000@.\x0008}üú2\x001d¤\x0003K°ÒÔÞ+±ã\x000b^Âtíé¸ÞÐ¹è×\x001b}}Jï-\x0000¦m\x001b`§$\x0008}ü>"\x0000\x0000åÀ\x0010\x0002Ñl^\x0000\x000eÀÐÁìpp\x0008`\x0018zÞT\x0007B\x001f\x0000\x0000\x0000pÊäIÇã\x0005´ò\x0004³e\x0005\x0010\x0008>\x0000\x00138à%> ÂÎ\x0005X
}m\x0000À\x0007\x0018Ò\x0007à\x001e¼þ¨ÚÌ]P\x001d\x0008}\x0000Ü3\x000f\x0015°+½¢\x000fª±£è6ß§mG_\x001f\x0000cñÔ\x0002tVt?\x001f\x000c]kÐ\x0007À
8 \x0004\x00000§Þ+¨\x0010pCY']\x0010öç\x0013fùá9ô\x0014BjAèã¼¡\x0000v.\x0000\x0000\x001dêZ¼t\x0019*\x0004u?)ëïarüòîâ\x0019\x0000T\x001eCèã\x0015Ì\x0010\x0001¡Nà\x0013\x000c\x000b«6ôöñÚPÕ\x0000\x0000\x0000©Ú­Ð\x0007\x0000Àb\x0008¹\x0000@\x0007ôõq</p><p>¶ûÅÉó\{ÿ:UéÄDBø)]}8áT1\x0008}\x0000ôÂF\x0014\x0000@3wÆQíc5¼6\x0000à£ÂFøZåãÚãBè\x0003\x000c;5ZØâõ¡\x000f</p><p>ti\x0000\x0000çeÝ'þ½Zm´´\x000c\x0000´À\x0005@è\x0003\x0000ÎÚ{¥®*G\x0000\x0010(sÚö¢\x0002J\x000cñr\x0002Âj\x0000ðÂ¶KJ°\x00003É\x0010ú\x0000@ei\x000c@?\x001fBaB\x0004\x0010aû\x000bqðþ(I\x0001½\x000f</p><p>DÐ¼Ù.\x0008}\x0000\x0000\x0000Jág ÂûÁ+8Ëìzý\x0000>{n1\x0011Ð£ò\x001b¼ÐÇ\x000fy\x0012o|Ñ\x0001\x0000\x000b°S\x000e¾Ã>\x001e©Gôõ©¶*ÍRV\x0004TùØ\x0007¡\x001fP\x000eãûÐ'\x000cíÒ¦&(77¯</p><p>;åETû ¯O"\x0008\x0018íïC\x0000°¡\x0016B\x001f\x0000\x0000ðÖâ¥ËJi"\x0008\x0000NC[1õúª?\x0005P\x0001EôóAÆTý	\x0000Ð\x0008;%Ì\x0016´­ÀMw6¾ÛÎ~=co>å$ö,»¼ð\x0015¤uzÅ\x0007;ïL>öÍÏKËÀ)¨¸\x0004<0µqÉhWÂð\x0007`\x0000à\x0014>Õ$V/\x001cô\x0015ìµ\x001f¼*øü¦z,þµï\x0017ßâO\x0004·§Ûng¥Ûê\x0014^¯¨õk×\x0008á\x000fv(\x0001\x0014høÉáI4L\x000f½\x001d¼eûëªÄ¥¨öÁ6\x0002\2ÀQöì\Ç8Óë\x0017\x000fÓµ«ax\x0017\x00008©V\x001b]§0%Y Ò@·åÕ?&Qpf½Äõ£Ê Û§\x0007-\x0010ìÙ©\x0012á}Eûú$}mqB¬ÂÐÐ\x0019|3¥«¯JW\x001fý?\x0008|¶m\bò\x0011z¿oãêð5>\x0000à½«ÆÖ³*ä¦5\x0007¥eº¥E\x000fïJ}Ê</p><p>ûËËGO»·µ\x000cÕ$¹ "\x0002\x0000âäø\x000eÅ×¯Í0iB~\x0014þ²mã\x0012¼>Bè\x0003\x0000BaÑ²û>ä$=|À^:v*{&ol=Ü¯Ü)Ý\x000eÒ[¼t\x0019zoP]ÔY!\x0015\x0004õúATûØ
­\x001440\íS\x001a\x000cíÐ§º°\x0001NÒQ\x0005ó;v®´Ì6¨ö)UæJªæ¡ B\x001f0§ìê-\x0000(É</p><p>¶ï[Ìä\x0005¾£j\x001fÁ¯!RË3¡3\x0000fY\x001a\x0001ÝòDëÎ+\x0016/®ÁO}Áüyxê2X0Þ\x0010ª¦$\x0008\x0013\x0001À\x001bq/<øé4Ü?ÓPO U#hÝ!R\x0016q5</p><p>­sÔcRpzh9*}\x001aÐP\x0013òÂ\x0018Väí¹\x0013gïª±Ý\x000cC¼¬´2\x0004\x0015:Î©-^ºmßñ7\x000f¨À*¦ni	\x0000\x0000TF°\x0002\x0011±\x0011´«>âc¢Ç\x0010~\x001câ²m\x001b8}\x0004>
\x0003\x000e\x0011ÅN\x001d0ÆØ1\x0006!j\x001fç½w(ø1]Cáà¸Þ}hH¬GmÕw3Tý@\x000cOÌ º\x0008\x0000´\x0013+_Ä0#\Ù´â'\x0010\x001eÕËØ¦éèåÃ\x001f?®x täÄ=Û6.q~
>î\x001bÊð\x0008°\x0001Ð8ðÖz \x0010îÃj\x001f»ñFËbàS\x0014\x0004>FÔ¨â*\x0000Bpb\x0006\x0000*)ªz%\x001c\x0004å­Öi&Î\x001fcáWs{/ö×Pé\x001d\x0001¸¯ßä\x0019àû\x0016æÊÕ±ÑÂ¡í]pQ7®w_Ç¬Á!ýÞ¸Þ}\x0018\x0016ªÙäIÇS¯VðÓûþe®¡!^\x000bæÏC3÷ba\x000b`1L×^§ GU\x0001·êÇ\x0007B\x0008æM¡\x0004*}²Ã\x0007 \x0004I\x000eÄmñ¶S²¯*\x0002\x00013ÒôìI8ZÖ</p><p>\x0002T\x001eh&$\x0014üÐ}9\ùj°baë\x000cS®£\x0002Þ
øÞ,\x0018þ¤¬þñjb\x0000ß/>ÕãÛ\x0017\x001bÎÌAj7Ý\x0013èî!`Æùóýíxøãbðµ*\x0001a\x0001r\x001d ÿôâ¼y3ÍÜ$üñe\x0018¯\x0010ú\x0000@åÜ´æ Õ\x000fÙ¥j&ßª¸B¿'íbûÛ¥iðlÙ\x0010\x0002\x0004?\x0000)Ôj8´\x0001H+®ªÏÞÅ+øôíà\x0016ôôñXÞêñY\x000fS3¯vÐM¯\x001bÎRÅ£P$áÐçÞÞÒùÏ~t|kf-\x0003áÊ ø~\x0014ÿ&O¥\x000fþÑÝûfñÒeÖ>.\x001b69#\x0019=w\x0005N\x0011\x000fPLogÿ\x0002t \x000eû¢à'.(*CÞFÔÇOË\x000e=|²´Ü\x0017Ã=FÁ\x0001¿0ý°T-\x0008yF.£×+ÃxtP Ð_8ñgÝxUÈ\x000b]wJ.{§\ä/¢<ÖØJ(iÃE\x0000\x0003ZÃ131Øîz\x0004ûP\x0000D'»Ò7t{</p><p>HDyå¥úû;vín»tòÔÖ;r\x0007G6C¥O¥H\x0007çÕj£\x0013\x001cÕY½nßp\x0012ÕúÕyÅ\x000fÎÀF\x0008Wû¤	sè¶¦ªoâÖcï«¯\x000e.aâºëÝá\x001c\x001615ÔªÍ^ñAVÇg<*ÌpEG\x000bæÏë§À'®êgÕ]ßaÛ³£õï¸Û²</p><p>\x0005H\x0007~8x:îté:A\x0019Û]|ö
i<Ãö\x0015ª.ÑÉ.\x001et¤	,­©ñª=UÈ#.4áhéz\x0007HSºú¼Ú¿@èS\x0011Í</p><p>\x0012ï¾üè1ñàÇµ!QQëËÃ ¨ë¡]\ÈÂ¡</p><p>UÛPðÒø½è~\x0016{W\x001dzNñ7÷\x001f9ý¾kMä=Òº{ò\x00166nÛ-ÒuPw-:xêö,(ø\x0019×Ï9$§</p><p>jfM?Í~\x0016ë½øBéº0Õï7w{|¯v9øôÃ\x001fð\x00023]¡¥vÉ\x0012þØH\x0015øo³~íZ6û¢öïPUõË\x0010údÐ\x0008PÊ¯\x001cI\x0017vø¼]­7Ii{]JÝñ\x001d\x0019Þ>Ä\x0005>¯Ü8Ù#7£`.ô»;ví®Op´¶\x000fÇso*(¥
W\x0011ÑzðeQë<R\x0005¤7ì~°pTlÃå<C¿øýR¯¡q½û0´\x0004bñ°&Mu\x001b\x001edk7<(-ÀÏ\x0008{}\x0010V`ðSã\x0015FQ\x0010@Á÷\x0003Sì?Å¾N\x0000UCá\x000f5o¦k:UóD\x0005B3fÍ</p><p>®Sý/\x0010úd`ËP!ªrÙ´è²àËê¿~õ4ûè?}/WÞVZèfù®î\x0007á5\x000e À&n-Ã5á þ­3øáë£\x001a6\x0016\x0015ô¨è\x000e¢ »¸À'/ÞL\x000e¶1\x0013:èN\x0012ölßñ\x0014[uçÝÒòøvÕÛ÷#\x0005?a\x0008`\x0000ª¶dò¤¶}µA\x000f\x001f|ì>r'Ô¨..?qÁ
]\x0017\x0015ü°f(\x0014÷û.Cèã3O<=rÃÿn{0o¸þÿkýìkÅHó@©ÞÞ´OÕ#GÖhl]ã÷#]_\x0014q=Ò¬\x0003\x001f\x001eà°Pè"-4¬+<|Jü½<vìÚ=\x0010þÛáu8dÏzöò3ë\x0017^\x000f\x0004?v `xýÛfyut4xÆ´íùÑð</p><p>ôõ¬\x0004\x0018®¥\x0017C¾:UÛ4ùxÀ\x0007
uôN\x0002\x0011\x000f{Ä\x001ei6ÍØ¨\x0000?a6\x000e\x0001:\x0019¬</p><p>y>¿øfvÕkÃA¯ûà\x0008}<F!Ð´Ë«ðeW»çî5ÁÔíï¾ð}Òa÷~çÛÒ²w_ø¾ZT<¾)³êv )b]øõØQQØ±kw[c:</p><p>Lh¶,¦\x0008OÄÛÄÑ°ïþ6_/qýÄõ¥¿\x001fõ\x0005åi\x000cñ2Û\x0010\x0014M¡ÅK
Æmg\x000c©Ä¯QÇ^Æ\x0001\x001f&wUq;]Æö'7ªê¡æöÔóLÄÃòNÍñ]Ó<\x0001Ùö:©\x0002\x000f\x001d,4\x0004\x001f[úÞðýgÕcã\x0001\x0018îÿæáïÁ\x000fv0G¤=Ø²â¹ãÃ»¢PèÃÏúÜ0íÞï|;öyè¤\x0019úè mp§v\x001aûÜMÊZ\x001fïÁ\x0008m÷®\x001a;ðÜÛê\x000f\x0007;áð'"ø\x0019¤ßå?Optêq}"þFìº¡OøþPí£GÞÞ;ËíÍMLåN\x000bÁO.y_\x0013{é»¥`N¾/Tú:ît#-îoú\x0015\x0010ùÆ{®³|®âîÏWuÝáHc¼Ube$ou]lõ¡* IÉç-.ô\x0011n#-\x0013ÃI\x0013\x001eÜ±kwèzo>ï¨ôñ\x0018ø°æÆÒÇàG\x000c|.¸h6»çîèY</p><p>@;\x0010\x0003YB(Zw\x000eSª©\x0002\x0011!´Â¨fÎÜ¸Þ}\x0003;v±s¨gFsÇ/ó\x0019_¾>ª0<í3\\x0017Õ[Hµ\x000cÅ{ïIÕkÕ¿o©³ó\x00165ª\x0003¯=Ýø-\x000cù\x0002+97L&.t\x0001hr®z¥$µu\x001b\x001e¬óÆð®VÇ×ÛJpà£</p><p>=Ta\x0007ó¨Mè9PV¥	Á\x000e»úkZ>L\x0008~(ðñ¹ê\x001e¡@î­\x0012«r±j§SO\x0005ú\x001cHJ\x000e|r	¯{¡jU'6O¦!^áá]b3ç¨*I\x0013î1½W
9ã\x0014]\x0017\x000e~0ÌK¼\x0001ÍMw6~\x0002ÖèÝîSe\x000fÝ¯ÐÔÝø-éf\x0000Lµ\x0013[\x0002g)]}¥nC\x000f>ýpì	\x0004º¾¤ae®Ë5\x0014\x001f2¡ç{x¦P\x0019ã\x0013WO«ö\x0013i\x0018</p><p>MGN³S©øÔ¸X8I*}_C¹8U\x0018F-$ÄýpN¾"ô\x0019Q£^,IKI\x000bKÐ\x0008tö)ÿð\x000f?=ý²z5}ªö©ÕF\x000fÝs÷nþï<U>T£kHU¡fô\x0018>Ô;'¸\x0008Sò£ÒCQåÃÿM
ÉøïW+,&ð\x0011äê¯Ðé\x000bAÕk\x0007Ráu\x000b\x0007?¨ö)×MkÚ{tñÏ¥\x000ebØÃQH\x0015\x001eJ\x0006à@°\x0018Ö\x0007?e\x0007>MÒAâz>Å\x0018Às\x000b}ÞøÐ¨41¿øõ!lË¯\x000f	~~ÿ[ÿ(]_¤;òÖ_+{]òR\x0005>bp#VµÙ\x0017]¨\x000c8ª?\x001fQÓº7wïØµ»;´\x001fNAó3;cÇ2Bg^\x001e\x0015&\x000fÿa4;ý°\x0003ìôWÛ\x0019ú¨*w.0\x0012üÐzß÷|â\x001coxñÒeN¿Å/\x001d\x0015>6>*èïÓ ×­ûèD=L\x0011ªL\x001c\ÇUtZOñzñq"ôÉ.îõÈj\ï>º_£ëà'5\x001d¯3zú$gísÅC_~ïÃÒu*&úëÙK¨\x0002töõq²gYTªjf§¨)¾s6ý
þvÐiù·~ÖZ¯¨)Ç©\x0011±¯'ß/¤ *xåLµ<ô»RÃb.cµ­Ïô>åT©\x0003!~<Ä<Ù\x000fG¥OÈ]í;ò\x0014üÐ\x0002\x0016[×7në\x001eLBµÚèî{î^3\x0014¾µ\x0005ý|´ø»ëúÙ¦Ì\x0011þ>-=&\x001c=\x001c\x0015øtêßS\x0004j*\x001d÷gT\x0001\x0014
K£©ÜÅa^LQñ\x0003éé\x000e|Ä)Ö)øáL\x0004@¡u\x001f\x001e×»Ïù³Là\x0015þþÄwSF\x0014\x000c!ø\x0001W¨\x0002\x001f\x0016\x0013ð\x0018\x0010|VfÌÒúðiÄ£ðmÁSh?¸YÒZm</p><p>,6\x0014\x0006Å\x0005?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - SQL
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - SQL</p>
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/js/jquery.dataTables.js](https://boussole.jeunes.gouv.fr/extranet/js/jquery.dataTables.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select the size of a formatted page from a select`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/js/mapael/js/jquery.mapael.js](https://boussole.jeunes.gouv.fr/js/mapael/js/jquery.mapael.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `delete from the`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>select the size of a formatted page from a select</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/index.php](https://boussole.jeunes.gouv.fr/extranet/index.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src='https://www.google.com/recaptcha/api.js' async defer></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/notification_liste.php](https://boussole.jeunes.gouv.fr/extranet/notification_liste.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"/>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/index.php](https://boussole.jeunes.gouv.fr/extranet/index.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"/>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/notification_liste.php](https://boussole.jeunes.gouv.fr/extranet/notification_liste.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `POST`
  
  
  * Evidence: `<script src='https://www.google.com/recaptcha/api.js' async defer></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/](https://boussole.jeunes.gouv.fr/extranet/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src='https://www.google.com/recaptcha/api.js' async defer></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src='https://www.google.com/recaptcha/api.js' async defer></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/motdepasseoublie.php](https://boussole.jeunes.gouv.fr/extranet/motdepasseoublie.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"/>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/](https://boussole.jeunes.gouv.fr/extranet/)
  
  
  * Method: `POST`
  
  
  * Evidence: `<script src='https://www.google.com/recaptcha/api.js' async defer></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/notification_liste.php](https://boussole.jeunes.gouv.fr/extranet/notification_liste.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/](https://boussole.jeunes.gouv.fr/extranet/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"/>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/](https://boussole.jeunes.gouv.fr/extranet/)
  
  
  * Method: `POST`
  
  
  * Evidence: `<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"/>`
  
  
  
  
Instances: 12
  
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
<p>The identified library bootstrap, version 3.3.7 is vulnerable.</p>
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/bootstrap.min.js](https://boussole.jeunes.gouv.fr/src/js/bootstrap.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `* Bootstrap v3.3.7`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/js/jquery-3.3.1.min.js](https://boussole.jeunes.gouv.fr/js/jquery-3.3.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-3.3.1.min.js`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v1.12.4`
  
  
  
  
Instances: 3
  
### Solution
<p>Please upgrade to the latest version of bootstrap.</p>
  
### Other information
<p>CVE-2019-8331</p><p>CVE-2018-14041</p><p>CVE-2018-14040</p><p>CVE-2018-14042</p><p></p>
  
### Reference
* https://github.com/twbs/bootstrap/issues/28236
* https://github.com/twbs/bootstrap/issues/20184
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/index.php" method="POST" class="beta_login_form">`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="jesouhaite.php" class="joli accueil" method="post" id="searchForm">`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `POST`
  
  
  * Evidence: `<form action="jesouhaite.php" class="joli accueil" method="post" id="searchForm">`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="contact_form" action="#" method="POST" enctype="multipart/form-data">`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="jesouhaite.php" class="joli accueil" method="post" id="searchForm">`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/](https://boussole.jeunes.gouv.fr/extranet/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" class="detail auth">`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="contact_form" action="#" method="POST" enctype="multipart/form-data" style="margin-top:50px;">`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/index.php" method="POST" class="beta_login_form">`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `POST`
  
  
  * Evidence: `<form action="/index.php" method="POST" class="beta_login_form">`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="jesouhaite.php" class="joli accueil" method="post" id="searchForm">`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/index.php" method="POST" class="beta_login_form">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "beta_login" "beta_password" "beta_submit" ].</p>
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `sec_boussole_session_id`
  
  
  * Evidence: `Set-Cookie: sec_boussole_session_id`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `sec_boussole_session_id`
  
  
  * Evidence: `Set-Cookie: sec_boussole_session_id`
  
  
  
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=carte](https://boussole.jeunes.gouv.fr/apropos.php?p=carte)
  
  
  * Method: `GET`
  
  
  * Parameter: `sec_boussole_session_id`
  
  
  * Evidence: `Set-Cookie: sec_boussole_session_id`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=presentation](https://boussole.jeunes.gouv.fr/apropos.php?p=presentation)
  
  
  * Method: `GET`
  
  
  * Parameter: `sec_boussole_session_id`
  
  
  * Evidence: `Set-Cookie: sec_boussole_session_id`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=mentions](https://boussole.jeunes.gouv.fr/apropos.php?p=mentions)
  
  
  * Method: `GET`
  
  
  * Parameter: `sec_boussole_session_id`
  
  
  * Evidence: `Set-Cookie: sec_boussole_session_id`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djepva-boussole.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djepva-boussole.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `GET`
  
  
  * Parameter: `sec_boussole_session_id`
  
  
  * Evidence: `Set-Cookie: sec_boussole_session_id`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `sec_boussole_session_id`
  
  
  * Evidence: `Set-Cookie: sec_boussole_session_id`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `sec_boussole_session_id`
  
  
  * Evidence: `Set-Cookie: sec_boussole_session_id`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djepva-boussole.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djepva-boussole.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `sec_boussole_session_id`
  
  
  * Evidence: `Set-Cookie: sec_boussole_session_id`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `sec_boussole_session_id`
  
  
  * Evidence: `Set-Cookie: sec_boussole_session_id`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `sec_boussole_session_id`
  
  
  * Evidence: `Set-Cookie: sec_boussole_session_id`
  
  
  
  
Instances: 2
  
### Solution
<p>Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html

  
#### CWE Id : 614
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/](https://boussole.jeunes.gouv.fr/extranet/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js`
  
  
  * Evidence: `<script src='https://www.google.com/recaptcha/api.js' async defer></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/](https://boussole.jeunes.gouv.fr/extranet/)
  
  
  * Method: `POST`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js`
  
  
  * Evidence: `<script src='https://www.google.com/recaptcha/api.js' async defer></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `POST`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js`
  
  
  * Evidence: `<script src='https://www.google.com/recaptcha/api.js' async defer></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/notification_liste.php](https://boussole.jeunes.gouv.fr/extranet/notification_liste.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/notification_liste.php](https://boussole.jeunes.gouv.fr/extranet/notification_liste.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.datatables.net/buttons/1.4.2/js/buttons.print.min.js`
  
  
  * Evidence: `<script type="text/javascript" language="javascript" src="//cdn.datatables.net/buttons/1.4.2/js/buttons.print.min.js"></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/notification_liste.php](https://boussole.jeunes.gouv.fr/extranet/notification_liste.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.datatables.net/buttons/1.4.2/js/buttons.flash.min.js`
  
  
  * Evidence: `<script type="text/javascript" language="javascript" src="//cdn.datatables.net/buttons/1.4.2/js/buttons.flash.min.js"></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/notification_liste.php](https://boussole.jeunes.gouv.fr/extranet/notification_liste.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js`
  
  
  * Evidence: `<script type="text/javascript" language="javascript" src="//cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js"></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/index.php](https://boussole.jeunes.gouv.fr/extranet/index.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js`
  
  
  * Evidence: `<script src='https://www.google.com/recaptcha/api.js' async defer></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/notification_liste.php](https://boussole.jeunes.gouv.fr/extranet/notification_liste.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js`
  
  
  * Evidence: `<script type="text/javascript" language="javascript" src="//cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js`
  
  
  * Evidence: `<script src='https://www.google.com/recaptcha/api.js' async defer></script>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/notification_liste.php](https://boussole.jeunes.gouv.fr/extranet/notification_liste.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js`
  
  
  * Evidence: `<script type="text/javascript" language="javascript" src="//cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js"></script>`
  
  
  
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/js/jquery.dataTables.js](https://boussole.jeunes.gouv.fr/extranet/js/jquery.dataTables.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/js/mapael/js/jquery.mapael.js](https://boussole.jeunes.gouv.fr/js/mapael/js/jquery.mapael.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/js/buttons.html5.min.js](https://boussole.jeunes.gouv.fr/extranet/js/buttons.html5.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/js/raphael.min.js](https://boussole.jeunes.gouv.fr/js/raphael.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/js/jquery-3.3.1.min.js](https://boussole.jeunes.gouv.fr/js/jquery-3.3.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.js](https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=mentions](https://boussole.jeunes.gouv.fr/apropos.php?p=mentions)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=presentation](https://boussole.jeunes.gouv.fr/apropos.php?p=presentation)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/](https://boussole.jeunes.gouv.fr/extranet/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.js](https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=carte](https://boussole.jeunes.gouv.fr/apropos.php?p=carte)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=carte](https://boussole.jeunes.gouv.fr/apropos.php?p=carte)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no cache`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/css/print.css](https://boussole.jeunes.gouv.fr/css/print.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=mentions](https://boussole.jeunes.gouv.fr/apropos.php?p=mentions)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no cache`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no cache`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no cache`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/css/bootstrap-theme.css](https://boussole.jeunes.gouv.fr/css/bootstrap-theme.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/css/style.css?version=1.9.3.3](https://boussole.jeunes.gouv.fr/css/style.css?version=1.9.3.3)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=presentation](https://boussole.jeunes.gouv.fr/apropos.php?p=presentation)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no cache`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no cache`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no cache`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no cache`
  
  
  
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/img/logo-ministere.png](https://boussole.jeunes.gouv.fr/img/logo-ministere.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/robots.txt](https://boussole.jeunes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/sitemap.xml](https://boussole.jeunes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `DhJmND/z4bSwkmcqJlLL3fNyljz02dHjNb3BVn1dn5yghZf7g2BMDI4ZSw9aO4+byL9Y7jOneUg2psWG46aUYuOevKM=`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.css](https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCwt1QK3XUergl5yCPkL9L-w`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=mentions](https://boussole.jeunes.gouv.fr/apropos.php?p=mentions)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCwt1QK3XUergl5yCPkL9L-w`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCwt1QK3XUergl5yCPkL9L-w`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCwt1QK3XUergl5yCPkL9L-w`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=presentation](https://boussole.jeunes.gouv.fr/apropos.php?p=presentation)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCwt1QK3XUergl5yCPkL9L-w`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `+KXZ6VI+xOAdH64qJlLL3fNyljz02dHcgoTc1UPCMHhXOt3lk6i5X1qcL6YKvrLVT87JbjTon5QpebDbasv/1r0KNjU=`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=carte](https://boussole.jeunes.gouv.fr/apropos.php?p=carte)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCwt1QK3XUergl5yCPkL9L-w`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `GET`
  
  
  * Evidence: `6LcPMYYUAAAAAH4bJgpp0-49eOpzxOX_JmSe3iiM`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/2011/REC-css3-selectors-20110929/`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/carte.php](https://boussole.jeunes.gouv.fr/carte.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCwt1QK3XUergl5yCPkL9L-w`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>\x000e\x0012f4?�ᴰ�g*&R���r�<����5��V}]�������`L\x000c�\x0019K\x000fZ;��ȿX�3�yH6�ņ㦔b㞼�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/sitemap.xml](https://boussole.jeunes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/img/logo-ministere.png](https://boussole.jeunes.gouv.fr/img/logo-ministere.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/robots.txt](https://boussole.jeunes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.js](https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.js](https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 15
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected in the element starting with: "<script>$( function() {</p><p>			$( "#villes" ).autocomplete({</p><p>				minLength: 2,</p><p>				source: 'ville.php',</p><p>				select: function(eve", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/js/jquery.dataTables.js](https://boussole.jeunes.gouv.fr/extranet/js/jquery.dataTables.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.js](https://boussole.jeunes.gouv.fr/src/js/jquery-ui.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js](https://boussole.jeunes.gouv.fr/src/js/external/jquery/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id='" + expando + "'></a>`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/js/jquery-3.3.1.min.js](https://boussole.jeunes.gouv.fr/js/jquery-3.3.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id='"+b+"'></a>`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/extranet/](https://boussole.jeunes.gouv.fr/extranet/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=presentation](https://boussole.jeunes.gouv.fr/apropos.php?p=presentation)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=carte](https://boussole.jeunes.gouv.fr/apropos.php?p=carte)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr](https://boussole.jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/](https://boussole.jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/sitemap.xml](https://boussole.jeunes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=mentions](https://boussole.jeunes.gouv.fr/apropos.php?p=mentions)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/robots.txt](https://boussole.jeunes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
Instances: 10
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
### Other information
<p>The response is stale, and stale responses are not configured to be re-validated or blocked, using the 'must-revalidate', 'proxy-revalidate', 's-maxage', or 'max-age' response 'Cache-Control' directives.</p>
  
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
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/css/bootstrap.css](https://boussole.jeunes.gouv.fr/css/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `80000000`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/css/bootstrap.css](https://boussole.jeunes.gouv.fr/css/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `42857143`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/css/bootstrap.css](https://boussole.jeunes.gouv.fr/css/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `33333333`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/css/bootstrap.css](https://boussole.jeunes.gouv.fr/css/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `66666667`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/css/bootstrap.css](https://boussole.jeunes.gouv.fr/css/bootstrap.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `00000000`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>80000000, which evaluates to: 1972-07-14 22:13:20</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `GET`
  
  
  * Parameter: `p`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `GET`
  
  
  * Parameter: `p`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `POST`
  
  
  * Parameter: `subject_contact`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `POST`
  
  
  * Parameter: `p`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `POST`
  
  
  * Parameter: `p`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `POST`
  
  
  * Parameter: `name_contact`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `POST`
  
  
  * Parameter: `envoi_donnees`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `POST`
  
  
  * Parameter: `envoi_mail`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=contact](https://boussole.jeunes.gouv.fr/apropos.php?p=contact)
  
  
  * Method: `POST`
  
  
  * Parameter: `email_contact`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/apropos.php?p=donnees](https://boussole.jeunes.gouv.fr/apropos.php?p=donnees)
  
  
  * Method: `POST`
  
  
  * Parameter: `object_message`
  
  
  
  
* URL: [https://boussole.jeunes.gouv.fr/index.php](https://boussole.jeunes.gouv.fr/index.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `beta_submit`
  
  
  
  
Instances: 11
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://boussole.jeunes.gouv.fr/apropos.php?p=contact</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [form] tag [id] attribute </p><p></p><p>The user input found was:</p><p>p=contact</p><p></p><p>The user-controlled value was:</p><p>contact_form</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
