
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:34:14


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 5 |
| Low | 9 |
| Informational | 10 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 2 | 
| Source Code Disclosure - PHP | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 11 | 
| Vulnerable JS Library | Medium | 2 | 
| Absence of Anti-CSRF Tokens | Low | 10 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 6 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 1 | 
| Dangerous JS Functions | Low | 11 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Insufficient Site Isolation Against Spectre Vulnerability | Low | 3 | 
| Strict-Transport-Security Header Not Set | Low | 12 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 10 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 7 | 
| Retrieved from Cache | Informational | 12 | 
| Storable and Cacheable Content | Informational | 3 | 
| Storable but Non-Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 28 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 5 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/agenda/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/agenda/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/presse/](https://handicap.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/grands-dossiers/](https://handicap.gouv.fr/grands-dossiers/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/](https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/](https://handicap.gouv.fr/vivre-avec-un-handicap/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/](https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/)
  
  
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
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="site-associe__link link--site xiti_click" href="https://pro.hello-handicap.fr/" title="Hello Handicap - Recrutement 100% en ligne de travailleurs handicapés" target="_blank" onclick="return ATTag.click.send({elem:this, name:'sites_associes_logo', level2:15, type:'action'});">
									<img src='local/cache-gd2/1b/22e4c83bfad2e85924186092054051.jpg?1611336599' alt='Hello Handicap - Recrutement 100% en ligne de travailleurs handicap&#233;s' width='336.84210526316' height='224' class='site-associe__visuel media-object' />
								</a>`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="site-associe__link link--site xiti_click" href="https://pro.hello-handicap.fr/" title="Hello Handicap - Recrutement 100% en ligne de travailleurs handicapés" target="_blank" onclick="return ATTag.click.send({elem:this, name:'sites_associes_logo', level2:15, type:'action'});">
									<img src='local/cache-gd2/1b/22e4c83bfad2e85924186092054051.jpg?1611336599' alt='Hello Handicap - Recrutement 100% en ligne de travailleurs handicap&#233;s' width='336.84210526316' height='224' class='site-associe__visuel media-object' />
								</a>`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://handicap.gouv.fr/local/adapt-img/400/10x/local/cache-gd2/33/e9eab72054f2e8177a3de80de39471.png?1613123743](https://handicap.gouv.fr/local/adapt-img/400/10x/local/cache-gd2/33/e9eab72054f2e8177a3de80de39471.png?1613123743)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=_>ò8'½\x0004'íS9ð\x0019ï\x0013õu¾\x0017!H
4¯½üßÏC\x0015\x0000ºNdK\x0017©ÏÁ9\x0011*JQ=;N"\x000b>#¦Ä1KB4\x0003ùämÊÃ\x0015LÚ;O<~\x0012/o\x001a\x001c]7p:ô<>xÿþ#7»\x0015÷¯îøêë¯\x0019ú¯ùãÿÿ\x0013ý0¡\x0012ì\x0014£ÀPâMöÒgÉ/É?Îó'/\x0002QK\x0014\x000b¦JM[R½¥_÷
N§#uÝp³ÛRW\x0005OÃ¸\x001a?Úïc±ïÑ(ë-.D1\x0010¥¬\x0017\x0018]\x0008ENòdµ1â!\x0019Ãf·f±^\x0013IU9\x0019/\x0011B\x0013îBb\x0017-l*\x0010p=\x0012Ùn¥Áñ°?Î^¤JºÙZ+G
\x0002±èÔÏ¡Ò_%QGU\x0015ôÃÈÇG\x000f»Ó¬ÊiaµZñå×_óæË·,Uê­÷ÇMH(fDÙS'vì üdDBV\x0019WQòD12ùó>Ñ»\x0018ª¦.qkP\x0006ç\x0012±d@{/FDiIDÂ¦aìGcURVläF=2âÌxïèûÅbAßux?1blÓBM0]û¹òeÃU©Ú²\x0004o1Æ\x0011¨?ö}Ï \x0014w÷wL\x0013¸NéTy§ØívÛ³\x0014Ð@p\x0001ÜãLÿ#² y5Ç¾\x0002G\x0019Y\x001f.9ØK9¯"ç¨Bú<ED\x000bqÛ\x0005yIiµ^\x0013#\x001cöGq¶T®#\x000b/ÖÏß*ÞÉU^\x000fâ \x0008Ü¦DÃñÈ\x0007ßp>ÑÚ \x000b+\x0008\x0017î*\x0005\x0004«´\x0002m×²Ý
9­(x\x001a\x0008öt¢®k\x0014RàÑµgÆ¡ÇÇ\x0014>#QI£só½Ú\x001c}\LåÅ"Î%~WÆûº%0o\x0010Wy%¤{ª\x001cßk­f½Z¡ºÐ°óÒçú³âå{ÆöæÝø:\x000eÌ¯Üdså¹v]ËãÃ\x0003ßþêWNgöûýgç¹~M$DÐêbä_§|¾I|Nïrõ·+·b&üñÄv³¡ë:>§§g¶ËÂh2Y"iì¢
ñò\x0001|"ÄN\x001bvHJnöòir» òãèéÎ#ý??óã»G>>8\x001c³,,VRqW\x0014X[q>\x001e\x0019§\x0011?\x0005(r/Lþ¼øåü2ÞH4
\x0015×<CmDÆÔ\x0018¢\î-c5ô=[ðíwßÒ
=?ýõÇ\x0013dp@¢\x00139Md\x001c;LWrsÿ\x0006[74õ\x001a«­\x0018ï(T[X@ W¯nYnW´\x0003xb$hÃ0\x0005(5¹¹\.x
®í©k¡"ñÞ±¨W<==Îú%\x000bIAJh^ÅðFª¾$¢
ÉÃ\x0006­\x000cçqâ§wïyxx\x0002\x0001k@m*Þ¼ºão¿áÍ7_QÕuª"\x0000JY\x0014\x0017²ÉÒZ1­ú\x0012Ý\x0007e\x0004
HNOT\x0011eÀ\x0006wàattgCÙ4©üÝR\x0016
)Õ}Ä[qJ
U2t-nX,\x001bsÏg¬Qrò\x0002\x0015ÝaDÎÃ4¡ÑBHhe»\x000b¨¹üTi\x0019O«\x0014ÊF¢58g	&b¬@©ã0p>hê\x0005J\x000fv½bÑT\x001c\x0007¡IFÅìõdãR5(L\x0002Ü\x000f!\x001b$]Ê·\x0018Å¼\x0001äg
\x0001 \x0000Z'G/±Õz\x001bGº®ç¢/HY\x0018/\x000etúù\x001aÕH62Ç\x001f:U	f\x0017aà×o^\x0003°?<CÔ¸T©\x0017¢!¢¢(¤4øpäí_RVubgÉMLÓ5%ã0`T ,
MÍrÙPe²í\x0006m÷LXz£paÍæø*òQ*m,\x0007!éø<s\x0010\x0016KÚDÈ»·\äÍí-]Û§\x001eRËó&rSäÍë:÷ðâ\x0001\ïõU©ëïòÇq\x001cyøøUj:|~~¾\x001cÿâ»¼sô}x¶R/ÇÕi?Ûx>ûø7®íò§\ßýöí[s¼ÿ²4x\x001f±:h¨1å¦QMÜ?9:½]²FçpIÃ|\x000e^#(/\x0014'ÞKã i|\x000f`í¢HUGÆP\x0016%ÏOÏÄ\x0018)ÊBVÆ0&¶Oç#Ð\x00170,\x0016\x0019\x0003ñò_¯\Y&·3Zá½£\x001d\x0006^ù%1F~~÷>É¼ºÕ¥ü\x0013Dü©oy½»eö.\x0017®\x000b\x000bEÆ°½Ýp÷ê¶÷xï1\x0011'C\x000bI\x0008\x0001ï¡(¤¯¬\x000bëéúå²a±ØñøðÀ¹=\x000bd¢Í<¶:Ý{Æ¯b¢ý¶É)\x00081¢CD\x0005Ï¡mùñ§w|øð\x0018<Eaåó°¼¾¿ç»ßü¯¾ýª.å¾³Ñû\x000cd\x000c¢(P\x0014#!Z\x0014\x001a£H¬Àáj¨\x0005
2F÷Þ;ÚS:è+5å¢Â\x0014\x0016±\x0016\x0014\x0011bð¶ í\x0005º¹½¥=·ã(\x001csÞ\x000b\x0015PBÇ\x001f\x000b\x0011N2­5ww[|ðs\x000e, S ªlÔÒ<Q¤\x0006Ô\x000cé\x0018´\x0016Ä\x0018\x000b:Eyâ\x0010\x0018f±`³Y³xàáÃû¹\x0014\x0015æ¼Û<ûÔouJ^G\x0018<!9ÍQe³q®ëM÷²îN\x001cZµårÁÐ	O^hfûªf{>ÿ¬áòËJµN.9G%TûÉÑ\x001aÎç3\x001f?>`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-gd2/d0/7c9e05075fe93b692db3509fd15cbf.png?1607613546](https://handicap.gouv.fr/local/cache-gd2/d0/7c9e05075fe93b692db3509fd15cbf.png?1607613546)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=!Ë\x000bnÜ¾Íj>ü¤tÅó§¤éýÃ#zý>Å²Ì^Så9\x0007\x0007ÄQÌûÓïSW
uQR9Ç·D§ôÎ~Èææ\x0016{û{(çØÞ½Öpvòý}!³Ù¥\x0014\x001b\x001d2\x0018m..(ó¤×\x0000ò¢àí÷?bk{7\x0004½>Îª\x0011[K/"_­VÜ¹}/á§ø7ÿîÿec¼)CZc+6ÏJ>ïVÈ\x0018êÏjÐÖl°d ¤MQ\x0001ÝI§Âªµ¸ÑX»öµ¯I+ô[[Üâ¨×ì°N*ÀÑ1iró;öØZÛ\x0008ù÷ÓRÐÿÿø\x0011üûq4M#I\x000fQÈßøÖÏóËßý\x0015®ß¾Cº\0=¿ð\x001a"o1>ß[i2\x001eª\x0010 Ú5²$ÕÔ5¶*¡ö*j\x000b*òÌTUcë\x0005j0D\x0011»¿©°EîgnÉÒ¢©QEUH\x0004nUÉød\x0005\x001a±UÒ1¦£¢¾O5
©ò\x0002¥,u¶Â"ù\f5'Ø>ôØN¨JÂÑ\x0006:dÙ§\x0015"Ãª0ñ\x0000¹5]be\x0010F\x0010ÅX'ÆÛ6íRæÅ\x001b\x0006\x0001Vw,\x001c\:èTñ²b	¿*]Æ=±NÉn8\x0015Ê8lê\x0012S¤½0æñ'\x001fJNR\x0018sqqÎ ?æìéc>~È/þe~yÂüò<MÉÒ%qÒ§*s\x0006\x0003y\x0003ÖË\x0003Â@aÁÔ²ï©Í¾©êõÂöá	U6c¹2\x0019ïJ«hlw9G÷\x001aJ+ÉìvJò°T¦A\x0005TUEÓÈæÍÝ#ª"g4Ùa®Î.yýó_f5±µ[rpxÀÓO?æíïÿ1/½ô
\x0004ÅjÁ+¯¼ÆÅÅ)ï¿÷#ö}Wty1åÅW^c1;çÝw¿ÏöÎ\x001e:¸Î³gÙ?:bÐïñÃ·¿Ï ?ôêï\x00197o¿
àý\x001f¿Ãp0À\x001cí³Z.yé»dù>þ\x0010cwÿ\x001aÙ\x0019EqFUnÑïÒ¹ªKy¨Û\x0007XãMÌò©|ïo£\x0014Ü¸qI¿Om
º½¡ÛÇÒ?uU²1ðæ?ûáR7\x0014öFW\x0002ù\x0004Æ\x0018·ñ@(ã­.µÛ?G\x000e¬Sþõ¬\x0007¥\x0004^:}UÇÖ¢J«i\x0007öV¥.LÜz\x001cU~¦Óþ÷Û®	w\x0005x­?ñ[}[KCãúnµïÊË¦b¹s÷ö\x001dþîßúu¾üÕ¯£ÃË³3éÂ\x001a)\x000c­0\x0015\x0007Ö5\x0002Ö¶Ñ"Æ¾H\x0019Ðbv5µ×ûX\x0003µí>\x0013[\x0014(4ºß~\x000e\x001e\x001f³NÆ0kq¦ÄX#q!ÎH\x0008`kI\x00020%ì'¢î7\x0006\x0017jYäècm]¢úcé¤ª\x0006e$ßÌå9./\x0008ã\x001e¨HW¯hÇ:(\x0012\ÈÇ´Å9²Î«á×I\x0015:\x000e;_\x001bZyµ¶Äë
Üæ­³>0"ðg¬QRëPuÀ6%¦Îià\x001fýæwßbÙpÿÌr2O¹yxÈ\x001bÇÌ\x0017\x000bNçS¾p÷E\2RåS>}úgg3º$L\x0012é¬E\x0003Q\x0010²½½sù2\x0015\x0000òêN´L t@Î9?sáh\x0013¥\x0003é|Ib:eU°D&ô\x0007#\x0006\x001bÛñ\x0000ëd\x0007U¯0¦"Rd\x000b\x0002­©ÊÍÉ6­=\x001e~ü\x0001û\x0007×8¼vL^\x0014lÇäYÊ|>gÐë±·³Ã|¹bwo¦®yúì)£áÝ}æ«%»»ûTUÉÉógDaÈñµc±\x000c\x0006\x00030àÙãGl1©ª^?\x0001\x001cóË\x0005E±»\x000eBfg,WK²¬ K\x0017\x000cÇ\x001b¤«¹·ö	\x0010Ó4UN\x0010\À65½þ²,Èò¢°Ü}áEöö¶$nBq±Ô]W£\x0003M]×ììîòþïpzvJ\x0012'tË\x0017ý©ÕfXá;¬.ëFù`9-bÎvüéRrEX©®GkÔ\x000bµÆ\x000b +\x001c]÷¢\x0005pë®DÃDË²­\x0001S	³Ý÷À)¿ÚÎÓ'¬uÛ¹ëÎV\x0012è\x0000\x001d\x0008æ\x00179\x0013ÕðËßú«üÎ?ø'¼|÷'Ï\x0017Ì//0µ,ªP8\c¼Ê\x0018g£lmüï5(ãç×b+É³VQkÅð\x001a'k:%¹-RQj{öT)Døh­\x000c±Ø"Å6\x00165\x0018I¡5\x0006×4PØ"Ç5º?\x0010
-àº\x0007ÂMQaêp0õÚV\x0013öúP\x0015hëpuEÐ\x001b¡B\x0019´\¥\x0014Q"!rÊ\x0003ö(Ñ i\x001dà\x0002IïÐlFÑþú\x0004AØ\x001d í=ôç³Ô;¡¬\P9hÿLM
Ur¶³8S{\x000c,\x0019³ZU\=c4èó÷ßçÓ§8<¸Æw¿ý7	lÃÙÉÇäóg`szýÐ\x001b\x0003ê²BTÀþô°P\x0016\x0005ÆØNw"»È=\x0010\x0004h%{Ýæ³siH\x0011Ê{oÚ½¥\x000cÛ\x001bÐ9YÙ²1Þ¥ßÐßØa0Ùåàæ+w\x000eÙ¹ö\x0012Û/\x0010õ$Ã1ËgÌN\x001e0=Êã\x0007÷é'\x00036wvyþì1ÚZ¾øÅ/\x0013Ç	§O\x001eQ\x00159«tEg\x001c]»ÅæÖ\x001eËÅU¶d.IW)G7Ø?¸Fe¤\x0005m¸MÙÙÙãÎí\x0017OÏÎ. Ô¤iÊÁá\x0011·ï¼ÀåôË\x000bªºf6½ä¥^ãøÖmÎ?Á\x001aÃx<Á)H³¥ß>*\x0002Hã3¿­µ²\x001fÏ3Ue²\.øÁ\x000fß£Ì+@ËÊò,ðüiêA2æ`ÿ +\x0014kP»m×pýV'ö*¦ãÚýmÝôme\x001ft	ùþ¦ý«¶àÖ\x0001lmAº:B¶\x000c®\x0008I[\x001f]û\x001aª(\x0004>Z\x0002èüÏÙÊ\x0006(·ñ\x0005,\x0008Ö§2J%EºâÇüóôOù­ßùÏØÚÙçâüª(üÉ/H¼_µÏµnÖ¢H|\x0001µVF"?Ò:+có\x0014¢)3\]`«&Ëd\x001dQ\x0018âªJhøÆÈl\x000f\x0010 0ñÖ\x0010é L]{1fí·ÍZ\x0001ÃÃH\x0011&Ò4
U]aUEÑ\x0015h°Mk#pHÔÙ\x000eqù×5Ê4²M\x0007²B)\x0001að¹L\x001a<.¦üç.×Ië\x0000àÎy[å\x0005J.@/ÖÉaâ<^l
ª*QM#Ìe]©qNüvM\x0011üð\x001bo9=àßüÉÛl\x001fÞÀ4
ï½ÿ\x001e£$æ`Ò§ÊN¹>çr:åþÃ'üÙ?b±Ê¢ºÎEamV\x000eBÍx0 Ð!EQÑ\x0018ëßÇ\x000f\x0008×gdù$\x0019ÒëHâ¾P©¬89­å&««\x001c­\x0014I\x0003k\x001cñ`è\x0019¡>«ù%Ãñ6U³±{Þ`0Ù98f1;c1?Ã
\x0007\x0014YÊîÎ\x0001Î9\x0016\x0019/¼ü*³SN>ago^Òãôä\x0019·î¼@¦<~ü)\x001b\x001b\x0013F£\x0011'Oqxt
îß¿³­­\x001df³\x0019£á\x0006ãñ\x0006O\x001f?DkÍöæ\x0016é*%I\x0012úý\x001eé¦®9<¼F\x0018\x0006|ðá»\x0014E)¦ãºd8\x001c£PÞ3%¦ªruÄIªÊ\x0008\x0008\x0004k+æ«×^y½mÆ|¦CZ³i¾eÖ!q\x001cðî\x0007o½á
«µ\x0006³[&m
^·OÛu´ÅIûî©ë°<`Z+¡;¯[×=uuêÏ\x00157×mOí¶¤øâyÕ
£´Ä´\x0005¨ëÆ´ZoÛUÊcfë×\x000e½Çr62Ò\x0001¿üW~ßøµßâÎ«_`µX°Z,¼4Å·uNp\x0011g¯xÖZNÐ¶ñÍºsñwJfïçrJÉØÖ\x0018ÉÀRN\x000c·íðÅÙµÌZÓP\x00159*Ñqì\x000fpêõ=Û·vë»VT©#^\x000f¬õØ-Ôù¦ÈFÂäU%möµ
#\£\x0003éºÃ HÑ: \x0018¤³\x000bé^\x001b°`BºíýØÙ*ºÁ\x000bE?Ä<Iá#\x0015HGÀk®}Ú¥shkE¿åI\x0019[pØV\x0005u\x0012üWÿü¾õðù\x0019ô£G2k{÷ÞãÝ{\x001fðøéC>¼?{÷\x001eïrÊ¾û¢vô{=Ù\x000fÕTB\x0004¡¿\x001cýD¬ Í­Â\x0018Km\x000cÓ\x0013fó3â¤G\x0014\x000fÙ\x0018o\x0013\x0004\x0001eUz\x0010T­Ç>'*¤\x0014½á&Io@Ü\x001bPU\x0017a)òlÅ`¼Ãìô1\x0007×o3ÜØ"\x000e{Ü|á.Óó§<y@YdllnW5\x001b\x001b\x001bìíîÉ¶$&/É³Á`ÈÁá5Ê¢$îõH)e\x0013\x00117n\x001c#,ÉZ,æ8\x0007×¯\x0013\x0011Yº¢.Kp\x0017%7oÜ`8\x001cròä\x0011q\x00181Ù0½¸Ä©ª.yòè#&\x001d6·¶IWb=
»Z\\x0012hM¿7¤ÈSÖôû#Ê2#\x0008B\x000ew\x000fxååÛ¾x¯	Vù,-¶úïììóäéÇ<?!ò#FÛ¯A`Ùõ\x0017vLU[tdL	Úb¥ÖÚ\x000eÔì/zWº²«\x0005pÝ­µ\x0019Ýè'@QWººñ­³8åñuÉÕ\x0014JëÖà¹oö\x0004Û*\x000bîÞºÃïüÝßáç¾ýË(\x00150;?£*=kJiÝ:ñÆû°$Y^Ïµ(½w"xC?V:Ac%ÿÈ!\x001dsm\x001d´ªh\x00119
6%Y×ëI6YSyÝ\x0013ª 1\x000fök`ò\x0014fÒaY\x0003:BÇ\x0011fµ¢\x0014jêÕfµ$ÞD 4Ëp0\x0014evU£ã IPX´©QU)\x001bnÃ\x0018k|±\x00135FR¨\x000e®DOµ\x0002õõQR}hõIírQ4Fp¶¦Æä©àeZÞ3\x0006[\x00164«\x0005¶)e?ãoþÊ/¾õlºâ÷ÿô\x0003¿ú\x0001u]#+IËEÅÍ\x0017?Ïp$ÙEEÒÒÏMS\x0013FoÏ!\x000c5½¤ß©7R4ÖPV%Ëå\x0005óÙ9a\x0010\x0013Æ}¶'Ûô{}²2ï´(¬Í\x0003qZkê"mï| ò7 "[N¥Ø\x0015¯ò\x0001XÃp²Ëùó'ìììÑK\x0012Ê²æ_ù:8Ç'\x001f½GSUìíí¥KVÜzñeÎÎ³Í\x0018\x000c\x0006X\x001cYq|ã&«ÅùlÊ`0`Ø\x001brzzÊõë7\x0019myðÑ\x0007\x0004Z³¹½Ëôò\x001b·n\x0013Ç1\x001fÝ{\x001f\x0015\x0006líìpyqÎáÑu\x001agyúô\x0011Ö\x001aÂ¸ÇÙÙ	e\x0011'	Î)Æã
¢0¤òÉ\x0008ÆS³ÖÔ$q\x001f¥ *
Æ°³µÉ­£#\x000eö÷\x0018nnz«\x001coÚç ín,ãÑ \x001füð\x000f	#I\x0008üóÑµ­öG)å\x0017c´xê®µ×Uw\x001dL·»­í¾h1ê\x00167jÿ¿}­u¡r®-*îÊx¨üÿç\x0002¯ün³PJ\x0018.Ýú.A£½ß*MWìllð?ûsüÖßý]_þ\x001cÓsª\bE¬if¯ä\x0011LTÚO$[ue=½wï£b×Ú[J¤\x0010D~\x0007ÅE|6^åíÚ\x001c²8ö¥Æ5è[ÖY\x0014 ÷»)3\¶¢)
¬i#´üüTÞsPÍ§ØÚ\x0010ÄÈ\x0008´tHáx²"ö\x000cÂ¨»&Z´­±$NqO®³b¡ír\x0003Ú<s­×\x0003ÝÑáU±mþ¶rHQo	\x000bëD[×¾Óó\x001bMÊÌcËz9Ã\x0016)ÅjNÓTÔeEð÷óo½uÿã'üÞ¿ý÷¼ðêO\x0012F	½á\x0006y¶äüô!ýáá`Èý\x000f¾\x00068'§x\x0005]WÏÈ\x0011Ä=\x000cCz½>J\x00076©¬jfóS\x0016³\x000bÙÞ\x0019÷ØÙÜc²±I\x00178g1¶}@|1V\x001eôÔÊË\x0000d/ijÂ(F©\x0000ë,éjN]æÙåô)45U]bLÍÞá1\x0017gÏ\x0018\x000eG\x001cß~ÙÅ9G7\x0018mxÿÇ? *\x000bnßºMUVà\x001c¯¼ò\x001aO|ÊéÉ\x0013ö÷%\x0007¼*\x000b^zíUÎÏóÉûè@±³¿ÇùÅ9G7¢{ï¿G\x0018ì\x001f\ãâìÝ½=r<~ü^¯Ï\x001b7IÓ\x0015Ê90àbvÆ³g\x001c\x001c\£*s¦³s\x000e\x000foÐT\x0005Y¶Ä8CèÓ\x0004Ê\º7&ÏW¾@(Æý[ÇÇììíwÙÝ-Kµ\x001eÍðxQÄÖÖ\x0016\x001f}ò\x001eÏÐï%¢ëjMam\x0011òÿÝN]Ñjÿnç°«ØR´k²Û.&¸\x0012ßÛ~M»"Ûa	\x0003³è~¿µhå×¾¯OÛNã\x0004¢cÓª\x0013¶\x0016
Â @iG¯ØéÅ|ý_ã·ówø©¯~\x0003GÀìì\x0014ÛXßá7¸ºé"qtGk\x0004Äv¦ÆµØ¦uWR\x0019|ªó`xcD\x0000\x0018Z \x0014;·}óÅÈ[NÂÌlÝx/¡\x0007ýF\x000f[6\x0012cëÕÞª)iVKQG1:écËr>\x0013»	P-ç\x0002ö±°ZqcÂáØ+µìS
\#_\x0018\x0010õGbÿj±C_(Öðò\x001e·ö\x0010ñMt>¡nX'\x0005Ê\x00176güF\Ó\x0008Ö\x0014hÿþ%Þ)K½y\x000bNM§\x0018c(òºn\x0008Ö~smÎj1'G\x001cÝxOî¿Myò	Jiz\x0011óé)×n¿N¯?¦Ès¶÷X-/(ò\x0015MS\x0012E}µTMi\x001a8¦t²|2]MY-/EL\x0015Ål\x000c'lM6Ye¹\x0000µàµ\x0010ª«Ämû'¦GQ \x001dÃÑ&;;×\x0008ûcÂÞþr\x000eqÅå)V\x0014«\x0019Ë³Ç¨@sÿÝ^oÄÁþu}ú)YróÎ\x001dÒÅë×o¢åþï3\x001a9ØÛG)Åx²å­)'h\x001d°½»Kô	ÃýÃ#¦æ£û÷ÑZqp(òÉdº©yôÉÇ4uÃññ
¦³)óù4Í^^R\x0016%7o¿iJ>¸÷Dà*	¶¢ó38Æ´\x001d%I\x0006äEF \x0002Fã	Ö4\Î.ùøÉS\x0016Ë9ÙbF<Æx%wG9ùOQ£È\x0015{¼öÚOpÿ£wåñV|e¬×xÆ$4FësZ¨¥+Hí+û\x000e¨ÛNáAí½ks@Àæ\x0000\x000bðÉ2Z®YCÛ¸\x000e¢ïÑjø\x001b? \x0013}\x0006Æ´\x0012\x0013\x0007uS(Ã\x001b·îð­¯ÿ<_ùÚÏb\x001dÌgsê²1Í}Ó\x0018yM_\½x\x000008­p¦Í\x0002÷9ÔÖ¯ª_ßëÂäL'8\þ30
ÎÈ{¶N<fm1SPcKmJÁ^L©
\x0019Á·dÕF
!"h´UE.D8i\x000c&_Ñ\x0006µ²Ä5
ñæ\x000eA I\x0010\x00088îÁgLbÂÞ \x0003íÑÚ»l7þ¤	h­»Ñ¶u¸V`é»H|Wk\x001a!èº\x0012,Í9T\x0010\x0010\x00141ÞbéÇ~G½Zwº¦ªjÑµý½_ùù·>yü\x001fßÊåå36w¯³á¸ñµÒ\^\x0010÷\x0004aÄÁÑm^xåó¬²%J9²ÅÆGs*4J;ÂP¤\x0002Ö9\x0016Ë)ÓË\x0013 LØ\x0018np|tLV\x0016T¡®\x000bf³\x0013À\x0012ÅýuEnL\x0015àp\x0018ßú7v\x0019\x000c6\x0008>5h|?Lì\Ç)Ø=~ª*D\x0018VW?Ìùé3úÃ!½Ñ\x0006§O\x001eóÆç~ápÀùù9uSR\x00149³Ù­­\x001d\x000e\x000e¯1½8µÚ¦©kÆòÊ«wq\x0016>~L\x001cÇú}Ë\x00157nÝ"#\x001eÜ(\x000eé\x000fGLg3^zõ5¦æÞ½\x000f\x0019FìììpqqÁæÖ6Ëå\x000fî\x0013F\x0011Ãñ&Ó\x0013úý\x0001ýÞª*É³8Jè\x000f\x0006\x0014é¦©\x0019
7pJQ\x0014)UÕpçæ17o\x001cÑ\x001büö[\x0019¡[¬å³Áþ!ãQ÷>ü>«,#JõÓïG² \ÕíC¹\x000et£\x0003±¥\x000bÓÝ¯_5µv\x000f,\x001e7R\Á§D÷Ôb4\x001e9¡³´{í<vµ~½Ö,úÙ\x000eÐZh\x0006e\x001bnìlñëýïðoÿ*·_|4]­ÔUMS×ÝVXçd5ôÚ£åÁi¥@\x0007>;Û§5\x0006ë\x000eÎ\x001a#h¥E(éðÛ}lÂù\x0002ê\x0015×JÑ	ÛZëÚ\x000e#N \x0008hÒ\x0005f>ÐÔâGs\x000e§(Û`òf5@\x0013ö\x0006à,U:\x0017Ö4dtÒÆPÎ§\x0004\x0011½]Ù\x001b'ÒÖ%ÚJ\x0007\x0018\x000eF¡V'°xíE\x000bÄJ¢\{}öÎyµêß*\x000cý¨fÑ^\x0006¡}'\x0015­-rÑNé@ØµººÂ\x0016\x0019¶ëQ¤«.ÇÞ8KU×\x0004¿úKé­\x001f½ÿ	\x000fNV ,e¹"
\x0012ööÙÝ¿N¯? \x0008Cî¼úEzÃM®ß|	\x001d\x0006,4MEÎ¨ÊbÝ¢+ã8JÈóóg>=r@\x0018&Ü<:\x0006­Ió\x0002k\x001bÑ?\x0015|èÒÎ­CÜ4\x0015ÖÖ¨ &éo\x0012÷\x0007ü	É²\x0015A\x0008¡4QH]W¼ò¹/I%n*â¤Çòò9³óçÆ\x0013ö®sòô1·o½ÈÖÖ6\x000f\x001f|µ
×Y,æÇc\x000e¯_çÓOî3^°³»GÔK¸8?ãÎK/bê\x000fî\x0013\x0004\x0001Û\x001eS:ºvº®xôéCâ^½½}ó\x0019¡×\x0019¥KÊ¢àúñ\x001d²<åÞï\x00101IÒ'\x0008BÊ*ïL¸+\x000f|[kaò3g
I\x0015\x0005[Ûüäë¯Óï÷}lHÐu\x0016í²Âö¡7¦aw÷ùòO\x001e~D\x0014ÇÉ:G\x0010ÈÈÕ\x0015\x0016F])BëÐü«Å§³øÓr-¶¯Ñ\x001ej3¤ ]eøÖ¸\x0012,»S©¯÷\x0002®±(ùã¦iÈ²\x0015ã¤Ç7Þü*¿ö\x001fü6w?ÿUÒ,¦Tyîm¼«Áä©t1:èNxg¯\x0004õkÿÐy&MùÏ\x0016Ø÷¹Æ3n8ÚÔ\x000büû/°Þc\x0016x\x000c)0\x0012¥¶\x0013fNÅ18YLqyF\x000b¬ë0\x00165w]¡hh\x0016\x00172G±g¶¡XÍd¼óøUØ\x001b]b\x001bCo÷p0$H\x0012ZD>@@f\x001d%\x0004I\x001fÂ ×÷@v(xi\x0008Â\x0004Ýv©Î¡Ö\x001féï6½@Zgak¤ºD75ÊX\x0019a\x0018¢Maó%²ºÅb«Lâ¬³\x000c×\x0018\x001aÛ\x0008Ü"ó?\x000eEð~ó­?|û>2$Ð°rpí\x000eu]²pÉæ\x001eÓ3¦g¼z÷KÄqÌ\x0007ïñÂK¯³_²ZN%7ÛZÏ"h($\x000eC.§ç¤«%q\x0010F	×¯Ý é\x000f-4µa6=¡(Vôú#¢x(?0:ü@WÇTßÒ\x0010\x0004!I¯\x000eb³\x0012S\x001b÷©ÊÁx*ð´¤?àòô)¯½ñe6¶\x000e¼_/¤*2Y2 C®ß¸Îåå9\x0007{\x0007lN&<|ð\x0011¦®98< Ï
Öì\x001f\x001cðôÉ\x0013Vó\x0005ãÑíÝ\x001dÒt%\x001bpt±"I\x0012ö÷\x000fi*qx7~­RÓ4Ü¾ó"yr~z\x000eBF\x0001<Ä v¢HÙÚÞ§Ì3\x001aS£Ã JÈ\x000ba'ú\x0011M]Q)QÐ
\x0012u°¿½Ëµ£]Â$öEdÍHáõaÚ¶Î)^~áU\x001e=¾ÇÙÅ_*¸\x000evSW´Øë\ç«@ôZë´.\x0016]¸\x001akFFiùÚÐ¯%\x0017;Ü|íZ§îµ|wå\x0001Ó; U:¸Æ6ºäÆæ\x0006_ók|÷;¿Ê7ÿòwè\x000fÇ¬K²ù&Ï;¶Ì65®q\x0002"ç+i¯\x00021Ì
y"ÂHå·~¸²ô?\x0002à¶ì/Ò-\x001bç´Æøp³¶\x0016µ\x000b>Ei-«®[)|¯Ö³mpu-\x0016tE]6XoÍ°emJ\c3ÊUN\x0010%¨ Âj>£ÊV\x0012½Ûëa:Oéí^'è
HÆcÚÔYª\x000bh<ñ]F%	-8§Z
Ã­I
\x001a\x000bêö²áÂ\x0007°MíE¢þ±",ÅX\Q\x0008æ$ì\x0003®Ê1\x0019®*pFV~Û¢ìtxYIqôrðúkÇo}ò,§(*Ò$½>³és6¶\x000f\x0018\x000c7Y,.\x0018oî1=§©Kê¢àÚõ;dÙeºÂ¢)\x0016SLSË\¬\x0014a(\x0001móÙ\x0014§\x0014IðòíØÝÞáüri,óÅ\x0019éjNÜë\x0013E	½d Ò{ÛÒÚn­\x0008BLUJ\x000b¬\x0010Æ/0¶!O¤é<]På\x000bê*'Ï\x0016\x000c7¶)ò0P\x000cF\x0013\x001eßÍí]>÷\x0013?Åìü9e±\x001c£ª"ÏSn\x001c_÷9Ù²^|®H³ýC6&L§"L´\x0008(W\x0016Ü¼y\x0007c\x000cO\x001e?d0\x0018\x0012Æ1óÙ×î¾N]\x0014<}øÉx(Og¼üÒ«8\x001c\x000f\x001f}Df8\x00152_\ÒÔ\x0015a\x0018Ð\x001f(
1Nöû#Ê"#ð`bck\x000fúÊ¥Â²,ÈË×_}Ñx(É\x000cúÊÈãG§ÿ²mjSðö;J/\x0011V¯\x0018á3ü2ZwQ#WÖÕe\x0001*X`:¸22B§k\x0002\x000f^·+ã\×1]¡ü¯\x0016<c-e£á`2áç¾ö\x0017ùÅ_øüÅo|½ëÌç3òÅÒ{Ã4Í*¥ÛR[U¢9²\x0006gRp"\x001f9Û"m[Ã<\x0018m¬|$ÖùG"`¤,I3Æ\x001f\x0000Ðz)R^äq¦Y­uòãS\x0017ÙÓÔPæØ|NfÔeC4\x0018H|nSaò%MºêÞhØ\x001c¶.©³\x0015«UÒ!a\x0014Ï.PAh´EÐIÆ#-5ÊÈÈ¤ãD6ì"Ýö÷\x0015\x0004\x001e\x000fTkLI)BaâZ\x0019_\x0012w#\x0014¿üÛ{\x0019QÒ=)¤Ó¬%\x0001\x0001S\x0005WdØl!k¿+¦òì¦¡\x0014@Ï\x0000\x0000 \x0000IDAT|þu##oðÒíÃ·ÎæªizCÂ0$]Îì\x001eàlÃh4a8Ú .rKú£	½Ñ\x0006÷Þ{ÃÛoPä\x0019ËË§VgäÇ¼,( \x000c¹vxÌÁö>\x0017³\x0019yY±\^²ZM\x001eqÐ£?\x0018\x0013Ç=ªº¾rÓ¯OJ\x0011\x0019V4M\x0003¢hÀÞÑ\x000bÄý\x0011ñp
Eb <]`êåì9ÅjÁ`0¢©*ª²àÚíX-fØ¦æ7ålÊÇ\x000féÇ=Æã`7n\x0010G1~úº©ØÚÚæbzÉ`4æ_âùÉ3>zÈx¸A\x0010F,K^~õUÎ/Îøô\x0007L&\x001b\x000c\x0007C¦ó\x0019\x0007×Ï/9;;ascÃ£k¤é
c\x000cyYrvzBYd\x000cF\x001bÌ¦§\x001b$I_d\x0001MMÏ³#i:'{h\x0014E\x0012Å	a\x0018²XNÉòý­=^¼}]âK½Ç\x0010µÎÁVþô\x0006E\x0018Æh­xÿïQùô\x0000PAKiqÅª±&\x001eP¯ÿíGDí¥ÖJ\x0005mÔ]ºeÕ|±iq¦6/º\x000bþ÷\x0005ÍzæêHRdeAg¼pt_úÖ_ã¯ç×ùÉ/|UòØçsçg8\x0007¦(°øÀh*l¶!¿È\x0011c®\x001b1ÀZ\x0003ÆùîgTÖÛHðßÜêÁ\x0015¹OÚ\x0014ÀØù¢ÕWÎ¯>B+l]­%\x0002U!¦sïýC!i\x0000eM¢@G=¹~Ak
Lº¤Z-¨
)>O)u\x0018ÒÕÊXâ^:Ï¨³þæ\x0001AÒ£·¹%Å'PàTAÔ#\x001eI\x0007¡gÔðâHÏP´ÂNü\x001caà¥\x0005ag\x0011QZ:"g¢[ÌÍÉ,2	¯\x0017Ã¡JØÌª\x0002g¨Ë*]`º[j+F|Em\x001aù\x000e4ÁáÑÖ[\x0017ó¨¿Ù±7Q\x00183={Â;¯³1Ùáñã¹~ó.ÆÌ§§äiÆÁÑ\x000bh\x0014çÏ\x001f­.1Uîo<Õt\x001bÛ°¹1áøè6³Õ¢®É²%ÓÙ	A\x0010\x0012=þÑpBUU\x001dZóG(%-­ihª@\x0007\x0004qíÝcÞþdÚX]\x001cÉî5Á\x0018g
qÈòòbyI¨Åã³ZÎÙÜÙÃ4ªÈùÜëoeK>ú(ÙÞÙáùó\x0013nÞºÍ ×ãáG÷qÆr|û\x0016Æ\x0018Ê¼äðàéå9³éÉÆ&;;¬V+zI<[g+¢$aïàt%Êá(\x0014¯ÐtvÁñõcÊ¢àí·ÿ \x000c\x0019\x000cÇ¦ÁÚápD\x0010EÌ.Oéõ 4u]¢\x0011)¸âwÃ4óEÊ+·_äÚñ\x0011eYu\x0005	è"d´7Â6MÍÖæ\x000e§çOxðð\x001eIÜûÌHÖ­.je\x0019®\x0002ÞÒ\x0019£Ëß¾R\x0004;M¾R¬\x000eVÎ+Pëå\x0007|\x0016cr\x000e²"§ÊSî\x001c\x001còßü%þæ/ÿ\x0006w_ÿ2
M¶ZÍç²Í£öz£ÒKKÊ\x0002e¸*\x0007\x001dÕÏ?\x0000®1PÕë\x0013Ï¸.äNvé+Ë [ö/ õ±ÙÆàT\x0000QÐÉÔµnß\x0003P×Â\x0006Zé®¸'?SJfi:¼ÔæK(24£X®ÄWÖëA 0eJ³®Â4
8¡ôu\x0010Ð4\x0005o]@Ä,æ3âdÈp{ I\x0008\x0018gD9mMM\x0010÷\x0006#éd\x0002¿uÄxQ\x0004V¼ue%6¤'£©Ç\x000fQJÌ¹ø\x000e¨\x001bó|è\x001e^]³t Ùß¶,\x0000mjlé=®
ë\x0014Æ:/´6Ý\x0014\x001cîo¼\x0015÷·Yåa\x000f#\x000c\x00036&;äEÆÖö\x0001½Ñ\x0006i¶d±¸dØ\x001fqãÖË¼ÿþ°±½ÇêòlqN\x0010Eë@-\x000bm8<¸Î°?¢ªkÒ|ÅÅùS±ÄI^¯ÏÆÆD¨ÀF\x0014ÛÊÏ¯xØ®î	q8ª\x0011Fk£-þ\x0010¥\x0002ª2G©ÕjN2\x0018³_°¹wáx~Ìþ;,g§Ì.N(²\x0005q\x0018S\x0014\x0019ÍMÆ	éjÁáÁ!e¾b~qA¯?àðà<Ë\x001eÆÔä«t±`4\x001a²p()eN\x0010\x0004Ô¥Üè/¿ò
Óó\x000b.ÎO\x0018\x000cG8 *+^~õs<}úO\x001f~L\x0014'lL6¹Mi\x001cÌ§\x0017TEÉæö>u]R\x0014)QÔ\x0003¥É\x000biÝ\x0007£
²Õ¦*Lv0¦!ÏV\x000c\x0007cÌÇ§¼úòm¹ñ|)i\x000bR[l´¤?\x0018Ñï|pïÔ!jóYSýëQ­Í@jGÃ¶ié{·Vð¶\x001dYÛ!µ »Çµto]\x0001±[E·\x000eÅQÕ\x0015ÚÂ«·nó\x000béÛ|÷¯þ*»ûEl\x0003ÙÚûÇ(+LYÈ[\x0016"äÆ(Æ.¦Ø,GÅ}S\x0002U%+~*¡Í	"¯©iº=dÝøå·µJ|êBÐ\x0003\x0015\x0006è8¦]­­ºqY\x001e:å³°Út\x000b[ØÕ\x0012m,¶®üTc³¥`FEI¹®.\x0018\x0000C=¿Ä\x0016\x0019µ\x0017Bâs°vEÎÅùLÂØê2Íì_'\x0019n\x0010ôbÂ0@[-2TÜ#ì\x000f½§QR\x0000Tà_«ÅË\x001a#Ñ,\x001eÿÂ¹\x000e\x001bê<k­,ÂZ\x0014X±½hk¼,\x0000ß\x001dÙ.É\x0012ûµ)ùnÑÔ\x0015U^àÈÌ>Ô/ðBS\x0005Z;Çöx"­\1\x001cO\x0018mìòèÓ\x000f\x0019\x000eÇllîðgø¯ÙÚ>`gï\x0006gçOøÑÛÀá­WèõGùÖ4\x000bRõ3bÐ\x000b#\x001a[S×9ÓËSªº$\x0012¸ÏÎÖ\x001eÊù-\x0007(êj5Åå\x0007v>K¦Ýe­,¥ÌV3¢Hn¬Á`5\x0015Ioõ¾¢°7äòü9ýñþx\x001blpçµ7ÙÝ?âû?âÙ£ûààòâ0¸}ë\x000eá@\x0016C\x0005ùª,¹yç\x000e;{\x0007=?áâô9`yöü\x0019IÀk?ñyV«\x0005\x000f?¹G\x001cGÌ¦3Â¤ÇÝ×¿Àr>çñÃ¥89\x0018\x000c68¾ù"8ÅÓÇÐJsëö+aB¯h^2 1t5g8ÚB\x¹\x001aZkªZ
sôh<Ë\x0019õ\x0013ÒéóÓ3	ÅãJrºªÞQj¹sçö\x001bÜºù"«ÚJD+d\x000c\x0002å7è5ð¬®J\x0003Z£¬¯LnÍ¼Ê}uE: Û1®iM§Ú\x0016æO^«l*T]òå»çïýÚÌ_þÆwH\x0001\x0017§'¤ÓslcÓLF4¥°yYÎQMkwÒWúXäØª üPËÎ!¹ÙE&@­R¸@Ï¦(\x0004ûQx\x000c©ÓÛ9_\x0018<Ã\x0013LÉÔBýãº®Bþö\x000f¢\x0017\x000bº2õ\x0001ª\x000eGSÎ©1uM]W^\x0014\Rç+ê"Å6\x0015u\x000b¾è@é°Ã]ò² 6\x0010]\x0011}F[Gè^¨×CkåGYHÐT4u©K\x0019a\x0003KbRùH_\x0015\x0004"QÐ\x001ael¼müûk$6E¶X°òëÊo@é\x001bT¥\x0014x­Á6²¸À/&PxÎ\x0018é¬Ã\x0010cÄN\x001dtz´ÀoÞ	^¼søVxÈ*¯È²%£Ñ&8E\x0018Å#¦`­\x0018ml3\x001cMÈÓ\x0005Eç)×oÝåÙ'ïqòð\x001dO\x000fÝ©\x0001²zhc4Æ8ËÓgX¥K¢(&\x0012\x000ew\x0008£\x001ei!¾¶tuA¾¡£È¯²ËÐjTT\x0010ÐÔ\x0012Kª<%\x001cÅ	M]¦s\x0016³\x000bê¦¤*\x0004:Dé\x0010cj&ÛûÌÎOÐ(®\x001dßaµ³xÑxÂÓG\x001fS¤)Û[;TuM\x0015\x000fòäÑC6&\x001bF\x0013ÎNO¸výÑx,ÁoyÊÑÑ
Lc©ëÉæ\x0016çç'd«½=ì\x000f¢º,ÉV+úý\x00017nÝ¦Ê\x000bË\x0019£Á¼Èyôè\x0001ÃáÙìápL$\x0014~! Ö\x0001qÜ£Ì\x0004|.y¶ Ð\x0001ÃáUº ®KÂ fgsÂÍë×ÙÜÞ\x0015A\x001ftãTkAéccèõáþÇï±\x001e=®¢Ú\x0002³.4m\x0014\x0004A§Øv¾óiý^>à-ä¤uI\x0004ACùîÊ\x0017¼¢ÌÙJúüÊw~ûæ/Aíýl½I³¤Wçõ{Ï;úìwbPLR©\x001c«¢º\x001bª\x000bÚ0Þ´a,X²aÁ\x000f ¾\x0011f,ØÂ¢ÀÊºª«3³2SJ)BùÆ\x001d|~Ç3±xû
±HËBqãúuÏyÿxE³ZIÐ¾6XÝÉ\x0003c
^ÑÓ5­<\x001cAºÅìfÊ{DE/$?Fø¶Æ¯JqÁ\x001aâ#!\x0001¼\x0017rE&©À\x0005ÝW*´¿ªO5Aà\x0018\x0005Ü¤	?\x0013ð¦%ò\x0016oÚÐËV\x000b@\x001cTß^kÌfM\x00044U·8MaU¦¹rµ\x0008\x0006àxY¡"V\x000b!Ö\x0018Ûq|öbÿ\x0018\x0012ð*ÃÒ[ÒÁx§Ì'\x0000ëj0$Ê2î¶\x0001J¤\x000f»\x001bÇJè¢\- AJaÝ\x0004è'h\x0008	Þtx\x001búã\x0002hn\x0012LÛ­¡.\x001cÂ\x0001[LÒ]\x0016»x/=Î\x0018âÇ.¾Êú'x\x0014óÅ
ÓsV\x001bî=ú¼×çÍË¯é\x000föùÕ_ÿWüñwOVôÙ?¹Ïíåkf×ïPqB»ÑÔkJvV\x0007ï¡×\x001f0è÷)7+n\x0017×!×&åèðñ`Âr³Æ8M¹Q×k4l\x0017\x0004\x0000LÆi\x0015\x0005Y¶\x0008Ä(0\x001cÒ\x001f\x000ciµ(¡*\x0017´MES.(gW"êò2pïâ1Úhn®ßóÉãÏIL%ôú\x0005³ËwlÊ
iðµ-GGÇ,ç3\x0016Ë\x0019EsrzNÝ4ÉòèV»éÁ\x0001\x0007GGÜ\_QU%£ñª¬{\x000f>áõ«\x001fX¯W]\àc>qÿÁ\x0003æë[¿ø\x000eçäç´\ÍðÞ2\x0019MãÙì"ë\x0017}ÊÍ"q×\x0000£ÂJ\x0014ÇTMJ\x0014ï_pz|L&¢S
xÉV&ð#\x000bJ\x00141\x001cøý\x001fÿ=Ö»xTÙ¼îL¯;\x0016çGìÛÖ\x001e²¢#þ#öO\x000eÅí!÷Q:ÁG>¹íúVÖ5gÓ=þ§ÿáæËÿ5·o_ÑÜ^\x000bånµté\x000eÒ-\x0018O$\x000fÓ!
Ä\x0008I\x0012e¹èasP	q(¿§µ÷{k[Ñ\x0004å=j=6(´¥eVLÊÂ0nòÂTº®Ý¹÷#Dr°}a>4ðDA\x0010i«¥$\x00015Ùw-®Þà§ÙÈÿÇ¡\x0015ØkMÛ\x0012¥2T¢bE¥XÝrs}#¸Z]r89fïø¨_ÈE\x0010K¬HÒ\x001fô
É|
E\x0003É`\x001aMä\x0012Øb·\x0004lÍ{a']`	º\x0002\x0008{(l¥¸ÿ#k¡­ð¦Áãdò\x000cì7]øº:\x0008%ÍÝú\x0017yiQ\x0007%=[Û\x0011\x0018«I\x0006EA//H\x0012\x00110ÞÞ¼e0\x0010«\x0004\x0012ÏdïX)._G¤\x0014{çÔå,/hÑÞ>i.Þ.Ä-
b3çi»åz\x0019Øá`ÄÁþ!eUáñ´mI]oã8IQ\x0001X"\x0013r}}Øs!N2ÙM½ä4
S\x000eï\x0013\x0015\x000e\x0005×\x0005q±}\x0000Po\x0016´Õ~oÈMCrpx
Þóáí\x001b>}F¯ßã»ååòA¿@¬ì÷\x001fÑÔ\x0015oß¿æþÙ=:Ý1»½áìâ\x0018øí?ý#Á£Ó3Þ½Ëññ	iñâÅ·\x0014E<¡\¯Ø\x001e`áÍëWCò,e0\x001c2è\x000fé÷{Ìç\x000bÚ¦foï\x0004cZV«9ÃÑ^\x0010SV¨XQôFè¶D·µH'"¨ª5½bHç,\x000bÞ_~`±ZQWk&Ã>Öy¬Ó$*ù\x0011MO ²µ\x0014ùóû|óÝ\x001f<àx\x0001KÙ2b\x001f\x001dfjÏ#%\x0002L\x0008üÝÔ\x0013+õ.àB\x0015³eÝ>\x0015D\x0011uW3cþûû?òèÉOy÷üÏèõ\x001aå=>

8N&\x0019åä}Ç{iã@øÞÈ\x0015ÂÂ¶Æ\x0011ÚVX®4
 sÐÑ8':­×Ù0]6ÒË§òBûñâ¤G`\x0005§»Ýêâ¶Ö\x001e¿½íEc·}È½\x0011ZÜ´%Ê{T&ùÜfës\x0016k,Må¹±rÙ9Ørâx× ÓkÚ¶ÁyE¤\x000c§¨$fÝ4¡ 	Ñ&Þ5,Î\x0007Ä½\x00087pH­eZÉ¶EÛ­$\x0019i«l\x000f¹KÛÃ\x0003ç¡m>z}\x0006´`_ÞZÑ%9CððÈÄiIñt!\x001aY)\x0001Àµ\x000e\x0013ÃÚPIGüW?ÿì«¸8b^4mE¹YqñÉçTë9ç\x000f\x001eá=¼yýw¯¿çóý§l·Ü|xÇÁÉ\x0003Êõ¦Z3»z)XP¬äC><IH§«ª
>¬\x000fï=B©UYÑu5ëÕ5*RRã­\x0012òb÷\x0002Ìy$»\x001bïDmª"t[\x001b6bºJÈ8Úu\x001d6Éz\x00033öÎ\x001fáaz|\x001faqõ²\&
Û\x0019Ò$aÿø·¯^°|ÊéÅ}.ß½¦k[ÎÎ.h¦myðà177ï¹½º"+ú²\Ì)\x001eIp{{\x0005Dì\x001f\x001e&	MÓ¦&ýo2eÿàËwoØ¬V\x001c\x001c\x001cd	uYqpxÀ\x000fß'\x0005ã=3ÔuR¬\x0010Uz[W\x000cÇ\x0013z#æÜÁ8R4u%ñ/A¯´©j\x001eÞ»Ï£O\x001e0\x001cOeð»qäG>3\x0011§:zý\x0011D?~ý\x000fdy¾;T È·õ:;ªÿ# {\x0017=¢ä¿\x0017"Ü½`¬½+\x0000\x0015òz¶ ¸q\x0012ÿßýÿù\x001b._|Í¥ù\x0003'ê`+/Â\x0019+xPÐ\x000e©(\x0015VÈ[\x0001±£\x0008o\x001d¶©äuk¹Éò\x001dfá»F¬&ÂËaåÃ´e,ÅÔ\x001c0;\x0011ª\x000f\x0011·2\x0011øf»ºIr\x0002ÂèFl)q,SîDÛd:\WáQx_­\x0015¼(¢\®#EÆ!g	ª²¤ªZ4
q693Ì®o­Vhg9;~Àèà\x0018(bT\x0011g\x0019q ÒD\x000eÀÖ&ã½\x0010£âî\x001d\x0019âCd®¼»\x0015ß;
º\x0015-R8p¼³òónJ"­Ãam\x0004O
¯×Zv	]É$ÕVØ¦Á4-ZËÏÞGê.6[Ièc\x0014)7\x0018oñÅ£¯\x000cCê¦¥Ñ¦m9ø¢7¢¬K¹\x001d¬e<>`>»d|t\x000f\x001fE,glV36³wl&R¡VÛï&&\x001böÌýé!GûG¬Ëº-Y,.åáè
b4Ø'N2ºpø-\x0017JÐ]-;<\x0011Ãá\x001eé\x0011qR\x001b¼JdLP+î9º÷Ôy_|ÂÁÑ)ó«7¬7òÐ"BÌ³X­"Ï2\x0016³\x0019M×2L[oÂ>,\x0019Ê\x0012kòþ`Äåå["\x000f£ñ\x001e··3\x000eL÷øáùwD*âôôÛÙ-£á³3./ß±Z­èõ
ªºd>±Þ¬ÅPdÄqL¹YÒ\x001b°Öá(ØîÂ¤"cnV\x0014\x0018Ý¡;Í ×I"ùÍ_þ%½"\x000f®pÁ\x0014¬³»è[y\x0008åðHÑpÄ÷/ÿÄb5\x000fÿövó8f·%i\x001cþupoó¢»\x0014;N\x000e1¿Õ\x0000	I4Iò@\x0018g1]Ã¿ýÿ
ÿê¯þ5ó\x000fïhn¯ðeÅÑ½\x0013ER
íu\x0007m\x0013\x0018\x001a%\x000f|øò®°~k\x000c^wØ²ÒG<ª7`ëþpÎ`ºVtMº%BaAT×!ïh\x0014\x0005\x000c'òNò\x0008¬îv!~§b\x000eM#I*\x000c_X\x0013½÷8Ýaê
¨\x0014Ò\\x000e¶\x0004'¸PS$!|Í{1\x001dóùÎxò$!I\x0012Ò4£n6¼º¼¤ª;NÎÙÛ?!ïõð©ài¯@%1I ú}y=mM\\x000c³þv6eÇ4(\x0005>$\x0014l\x0013\x0006Â\x0000àÃê\x0019íVåð6ZoJ"cB;6à\x0005Ôv]\x001b\x0018HÓ­ÝÍ\x0012[NLúÆ\x0018läÑ.h¼ðX+gÃa¬¬Â*+F\x0018+ÈwÑÜëõòÞ ÏÕåKNN\x001f²x÷?þîï\x0018\x001f^à½ãýË¯9zøSúã}¶¥àiÚñ7ÿµÄÇ6UPH;8ãhÿH>\x0010Î°\\É:R{8å=ZÝJ\x0010û¶æ'\÷Î9\x0011þÅiÀ<óù\x0015«r5\x001d*L)\x0014\x0011y1Àµ
ù`ÂjyÕÃ{OH{cöO>áÙIÛV|ûõ¤m\x001bÖ,ç\x000bNÏïsvq¶n(k<0¿\x0011\x0000úó/I¦|ÿü\x001bL×¡­ãúúgO?c2ðÍ\x001fþ¦,é÷úTóû\x000féõz<þgª²äøôþ`H^ô0VÓu-yqïü!÷\x001f<a~#i£áXp¤Õ\x001c\x0015E&\x0007TÕ:È ¦tº£Õ\x0015y­Øæy÷\x0007}ÞøÀ»7ïåÖr\x001fös'\x000bØN4J)ªzÃÞä/¿ø
Îjqù\x0007¶L8ÙhÇÆÉZ$1I\x001arã;o\x0018J:ØÔvª
\x000c^\x001cK+®xâ|8À iJ~ùôçüí¿ø7l®ÞR^¿Ç\x0015FëÀ\x001eY|(\x0006\x0010:;Ø/Ê°cÚà6 °\x001eWÄIJ2àª
íÍ%fµÄW!?ÉÆ(J\x0014Þu²ÖY'\x0005A4è½\x0015\x000fVH,qÈÐvNã¬	ÿÓxgvq\x001cÖ]\x0015ïÄÊbêÈ\x0003¼$\x0000\x001c¢®\x0015ßëjÓè¦u7Ùºò
«Õ¦éÈR9`P\x0011Ö´ÜÌ|Í¦\x0014ùV·¨,lí0ùª$!Ê²]ìnT\x000cPÅ@.ø­¬Áªn+ª(ë\x0011¥yÀ\x000f½0áqÜ\x0005í3øN<aÈW È\x000b\\x0017b_\x0012ß5NÓµ-mSÑ5¥¬­FJjÕX'«v\x0012+1èZÃ\x0013ÿgõ¯nVÎ{6ÕF\%l÷.>A[Ãf³bºÄb9#Í{«9ÃÉ!£½#>¼ù3ë7¨à°n\x001bËÿò¿þo¬Ö\x000b¾ýãow5Óãñ\x001eãÑV;ng\x001f(×sò¢Ofäù~OØ¨myÀzrKAÇ¤iµ\x0006ÓÕì\x0002íã\x0014o;ÊÍr³¤Ü¬hê5ízAe4ÕÉô¼èsýþ\x0015ãý\x0003ÞÈ:î}òÅí%Wo +2\x000e\x000fOi»wÆdºÇ«W?à¬áäô²i)7\x001bé½+7\ß|`Ðëst|DYJ´¨3\x001d]#1\x0014ÇÇÇø\x0000lã=Á«ëKFÃ\x0011\x000f\x001eÜçÕ«TMÍtÿÛÙ²,¥}T)F£)óÅ5Îz¢Öµ¼éVË^¾µ1¨,Í\x0000\x0008 l\x001cÅüÅ¯~Ne\x0001ë°ÄñÇ:¤;a¥¬\x000b	Yñý«?ÑÖu¨WØFà¦JíÂÝ@'w õ\x0016ñÛrÊ»iIü­*°sÑ\x000ek|D«[\x000eûSþÝßþ;8bñî
ºª\x0005hÆ\x0007Æ\x0008\x0010÷$ÅZ"	\x001fv´u\x0014+\UÊtõp¦¦|û=qÒ#éI\x0008¿øÜ,¶-±U%\x0018Ð` ý`­Ø®qVë@³\x001e \x0012<Æ\x0018¶Jwct¸ ÁtzÇ4yÓI\x0004JX¡¬n%ÇZ)45VkªÚ!QäqmÍ|±ÀhÇ ß£×ï¤\x0019Î\x001a¾ó\x000eï"NNqÖ1ì÷\x0007²yB
Ùuòà'ù`'îÜòiØ°Ö\x0012\x0011©Pv°\x0005ów\x0012\x000f\x001bà\x0004Ô\x0016A©u.à@Dàq\x0002Û8'²¶FjÆ\x001bLS	á@Ñ\x0006\x001b\x0004©\x0008EÌ¬§(ÐÎ`¼àÐ*Iäªë\x0012\x0015§ôzSzy\x001fç=YoÂ·?0Ú?æôþ\x0013~Wßý^¯ÏÑé}ÿþï¥@1¼ð\x0008OoÐçÝ´uMfxçULetF³\ß2_^§KÅdY½é\x001emÓL ¶cuËë x¶òÐ() ¼\x0003\x001c£é\x0011£É\x0001áb0Ý\x0015Ëìí·,/_0ÿð=¯¿ý®&/z|xÿÞ`ÂÑÉ\x0005ýÑ>§÷\x001eQmüî?ü=ÎXF=¬µ£bøþÅ¹ýpÉñÁ\x0011ç§÷)úC$¦nJ®¯oi[Í£GO\x0018ï\x001dðþýÛö¤®[>ýÉO\x0019O¦|ýûßR.Lö¦eÍÉÑ)Ç\x0007G\¿GS\ÜF0a±¸¦í\x001aF£}T¬X-nèõÆÄb³f\x0019ýÞ:Äö\x0006\x0003Ú®¥
8ÈÛË÷|¸º\x0011¥®÷bâôm\x001eÎ\x0016¸¶Á>Ñ4\x0015GG÷89<\x0011¹EXÁÅA\x0012\x0005!¤zn[Ù\x0002\x0015¢È ÊSúQnöö0ÚÑÓJrx~ñôK¦{\½zAÛ4òÐ8¤k,\x0012\x0011!Ê--NoMÙ6¸j]Îñ­(ÝfÙ,P½>ñxuâtm#+5øF~½{\x0018Zè|#!\x000eLK¤CÓFÓÁ4Ðþ®k°áÆ'T7é¶Á¶\x0015ÖtXÓIØ\x0002kZIt\x000ekD\iº¶meÑ®®0m×ªªé¢Èé÷
Ñ^µ
7··´uËÙþ\x0001]ÛQd}¢/ì`×à\x001ay¶¬DËe·ï»©n©\x0005\x0000[$6
¼\x000e\x0016\x0018y\x001dÎXùyw­\x0018·½6\x0000öJá¶ë³RrØv-º©$Ê·«i7\x000bÚrIµYÒvR\x0019fuÝ\x001aÀ¢MÀ\x0000\x0015¸È>-@\x0006è\x001b³\x001d\x0018]d\x0003¼3\x001c?Äßýöïøäéxçøýø;Îî=£ß°Ù,ùðö9Ãé!yo´£\x0012µn9>¾àìÞC\x0016Ý¸³õÂ4mÉjy+52QL\x0016\x001cL\x000féÎv8«iê\x0015ºk\x0000\x000fùæ£(Êú#²7\kCÆã}ï1\x001cíq|ñéñ\x0003ÆÇ\x000f\x0019\x001f³YÍXÎ®XÎ.yõçß£Ûý#fW¤Eó\x0007OD¬\x0018yÖ%×W4MËÑñ	{{\x00074UÅz9ÃhÍÍì,Ëøò'¿\x0004\x0017ñòÅsR%2¦®ùâËcºïþügâ8¢WHüìÑÙ9Yòæõ\x000f,\x0016\x000b\x000e\x000e8:<5ÀÊ\x0013«Þ`ÂryK\x0015äy\x000f­Û \x0018üdk-Æhò¼'r]g9Y ¦ìÍÛ÷ÂØ
¶ToX]Xí\x0000ùúÏý<OQx©ËRJÒ\x001c£m^ºhpâ ¨Ü\x001aiã8ÿ.H\x0012ùgaÚ\x0010SEáÃæ\x0003&åé\x0017=ÝÂæö
Ójâ¼'4ö JS¹tD>üa­qZXW¼®ÝM7®©qu)Jå8\x000eFQ¹q»ÍFH 4Á;#q*¬^`ñ"/+¥×-¶^	>¢+\[É\x0003oZ9Ló"
6ºÜxÝat#ÂDg±ÚþhÍ³]}Çúiß\x0018-É!8-\x0013LRF7ë
\x000eÈ3i|vÖÒ¶\x0015ï¯®PQL«;<\x0011ãÑ\x001ctu5bäÝ¶ËºNuWb}\x0014Éê\x001aZZEæàt\x001b\ûAwÔIìHd­T×!p I$%Ø\x0013\x0017t_Û\x0006aë¤\x0001Û{ÐFS7\x001b¼üññfïimGç´d£yÏByT\x0014D\x0008 VnædE\x001fã#²Þ\x0018ï4º®Ý\qpöÉþ\x0019ÁÙåK®Þ¾äÑg¿¢Þ,\x0002
ÆXö\x000f\x000e)zCÖëµ\x001cVÛUÁ$¨¨ä\x0000\x0000 \x0000IDAT;6%e`Ò¼àþÙ\x0003²\x001ar3Ã9CÑë%\x0019a\x000ft¥ä\x0004¿i£Ñ]MÛ4´å\x0006¼ì³m]&\x0019m]1=8£7ÚçäáÏxúË¿a0=¢ª7ë9þã?ðöÍ÷\x001c\x001d°\ÎðQÂ¯ÿê_\x00169ß÷ø©¬eµÚðôórvÿ\x0001ß¿ü\x0017ßËx2ÆZMÞëñàÑc\x0016«\x0019¯^}Oo0`4Òëõ)òåbÅÛ7ïqÎóèé§ì\x001d\x001d³\.Ùl\x0018cY­J>ý	?yÄ&`<Þ\x0003\x001fÑ4\x001bð0Ý?¦m+¬Ó¦\x0012\x0001\­é÷\x0007(¥Ø¬\x0017¤iN¿\x0018Ð¶
·³\x001b¾ùfSÆY¶*Eï-ÖêðS½7igÅáþ\x0011rÄq\x0014Ö4/\x0018Ð5á
±)D¤*\x000eìÓ÷hÕ.\x0018S\x0014ð«8$\x0004øÈs<=d2Ý\x0017i^HðXï0\x000c$¢û1ÂÎø®Ã·í÷U¯6ákÇb3±Vr|\x0010ñcS®(¯/%1!\x0012lT²~¬®¥å&\x0002æ"UÛ5të\x0005º©Ñu% ¶5tÕ\x001aÛ;ñ¥.¥AÄ¾2\x001dïÖY\x0011'¿Ó­Dîxñumí4I¢èº\x0016ï-q.ÕôeU²
1?q ;1\x0005/×5«e-yä.b2Ð)Í¶­xæBÿä\x0015Éá+´¼Ý]æ\x000e+æÚ01¤D½án-¶ºÅÙn§C\x0002J¬C\x0018S\x0017Re}\x0014	dàD!.Þa
\x0013\x0008ýqÎ{Ú\x0010Q\x0012Ç1I`ÛÕ^\x0001\x0018Óa·xW\x0012s3\x001a 1R»k5U#HyW\x001c=$Q	ßýñ\x001f\x001erÿÑg|ýÛÿÁô½Ã{XÝòê ©\x0016!\x0006óì
`4M]I¹!\x0011ÞA§5MÓìboïÓïõ(ë\x001a¡ª\x0016\x0018Ý¦¹äüÜoü]´µâ?ÓíÜu\x0015U¹$3ðáp\x000cÆ¢")²Ü,\x0017¤½¡T`g}¾øÕ¿bÿø\x001euS±YÏyþÍï¹ýð£Sº¦#S\x001e>ûåjÉ7_ÿ4É\x0018'à#ö¦\x0007\x0014yÁåÛ7¼½|Çp8âðô(I(«
àX­x\x0015ñìóÏÉó×¯^÷
³,\x0017\x000b=ýÃ\x0013þôõ\x001f/çìM÷\x0018÷\x0018å!mñô¦©©«5YÖ\x000b\x0015Ù;È¡\x001cÑõ6Ï{P4\x0010E)eUñúÕ\x001b\x0016ôÕGôÎ\x0010Oº\x0008S\x0013\x0001Kéç#=ù\x0005\x0016áÃßSw xx?¤I&\x001c8\x0001\x0010\x000bI¸\x0008Í´±0>*\x0016\x001cðáÁ\x0019J\x001b¢8#Î{A'ãä\x0003½í­S1~wx*¢¶r#ÏGáª
n½CÃhl]\x000b\x001bëã$¦ë*ºÕ­ÐÔJA"à­Ö
¦\x0015Kmkl[\x0007I@ÕÈªcÄ[×Ørmj\Û`ë%íf³È\x000ct5-ÖÔè¶\x0016¨!´Ø®\x0011\x0001£54¥2J¢}uØ¶£­7¬Ë\x0012Ô¶ð1%½åÃÕ-MÝ&)\x0007{'$qºKCUiJÚ\x001f\x0008È­¬_Þ\x0012Ç\x0001üfË1\x0007\x0011mH\x0005PÁ!á\Àð2	;³óÿyhB\®w^<}aý7m©K¼ðqS
c
ÚjFd©H\x0013"vv\x001dã\x0005ÍZI	ð60û\x0012Q´ì\x0017Ì½'þõ_~õa±bµZP7%IñèÙ\x0017¤\x0005Ö´¨4g5¿Á\x0001\x0007§°]3Ôå¦^Q¯oIÒ\x0014å,¦kyñâ[j³\x001bçÅ\x0013g0Ú0\x001dïqqrÎª¬¨ê²¼f,G%)ý"D\x0004µìöF\x0017|C¢<·\x0001Î{¼ òTå¦iX¯f\x0012%\x0011XÁb0föþ\x0007ò4a²wÄj9ãÑ³Ñ+ú\_¾¦k\x001bF!mÝÒï÷8½¸GY®1º#\x000eZõjÍÙù\x0005{Ó}.ß¿¥*×L¦{l6\x001byòø	ïÞ¼Ý\x0015\x0007¨$¦*+NNO/nXÌo)
©øn¶­\x0005DñNw¦\x0007\ß¼g¹1\x001aNq^2·­éH\x0008O¹Æ)Ãáª\á}Ä`8¢©+Ú®f8\x001c\x0013©ÛùÇ<âüô(\x0008[½"V©\x001c\x0017.Aùç}Ò,ãÛçÿ\x0014\x000e*>Rrß¥K²û Ã¶>kÛÇ\x0006\x001f\x001dZayÂú½\x0008$Öñ\x0017Á´7ÂÅ1qÑ[¿®ñU½Ë!R*	iJV¿NK¡ à¢¯Ùv\x0005í­7Òì\x001a+ÚrÅêÃ%ùpD2\x001e¢ò\¤$¦C×+iMr°\x0006\x0017y¼ñF£7slÛ\x0010çøÓº\x001agÛÝ\x0004gA7¥$CÉÊja¼·Â¸ùp\x00108G»YÌ\x0019Ip@t9N \x0005ó´]Ãb-\x001bDÑë¨8¸ÝòúÝ\x0007Ò$åìè^oHZäD@g\x000c\x000e\x000f!`v8àÍ:\x0019%±\x0014\x00104\x0015^·$ÅP\x0018B/¦Z¿\x0005­}(GP*äoAw'2ÝNa\x001bâ$\x0010\x000cZTÞÔMCWo0F\x0013"Uï\x000cÆ\x0006F\x0013\x0019\x0010Aj\x0014Ét«"r\x0015S
R¾<MgQQÑ4\x001dýá¦.)\x0006#\x001c
m-§\x000f?E%)ßý\x000fÌ®Þòø'ÿ	o\x0010õïáÙ\x0013,j½`\x001bx¥\x0019o>¼åÿø?ÿwZ­I³\x000cìîZoÑöáhD­=eÛRW\x000bjC¤D*!Ïú\x0014Å\x0000­\x001eÜ\x0002¯r\x0006em(Îs9·nJÉä"º®¦k6óKæïþLµ¸äöò\x0005m³&\x001fY.neòH\x0012º¦ãË_ý5\x000f\x001e?åùó?ðúõ\x000bÒ4g~;#Ï\x000b¾øògè®ãï%)£á²*¹¸¸Ïý{÷ùáÅ·Ü^]s|xH\x0014E\x000c\x0006\x0003&1óÛ\x0019ïßRôrNNÉÓÍfCÝ,WsÖÕO?û£S~xù<D\x000c(\x0001ÁUhé&åj÷ZcÂ¤éCì
áî\x0002ü\x001bkb±^ò?þ¦\x0016lÀ;ÑuE¡y«uÚRÉÎ9º®c2>âèø\x001eí6¼~§\x0000\x000fâºÀ¼í\x0018µpsMí¦¥m\x001b®\x0015q¢NC6Ã¡ôíEý¡Duø»Ã:ÉÏvFØ!iÚ÷Ú+ð!ã\x0007¥z=|.*tTÊ³»C%\x0000ÌÖIK°m+|Wa»\x0012k\x001a	è¯+ìz%!þQ$¡j\x0005z½Æµ\x001d®.Ñu%q>a
ÖºÅ4%º®±ÆbÛ®,	ÉÎ\x001b¬iÐº£k[µmSG\x0004Ä¢$9ßÖZÖ«\x0012k4Y°uÞÒ45o¯nYÕ\x001dãááhÌ`<\x0008uì\x001di/\x000bëh¤Öd½8dÍl\x001b©Å"Qssy´+B\x0012GÈÕf³mWò8Ô\x0005q*^ÄQ0Ñ¢\¡~[Ä1Þzº¦¡i;lh\x0016¶Î\x000b\x0016\x0015¬høm°Â¤1obEå¼45?ûôó¯ê¦e]INpÓTäý\x0001½c®Þ¿d|pJ[®wîyý³TÕf³¤Y@·\x0015ÑG·k1i¦\x000c\x0007Ë>Ýr0\x0012Å	õÕò&Ðý\x0019½¬Ïh4¡Ó\x001amíê.ãÇ9iÁHÒ\x001c\x001dÐT¤H²³\x0007q|ú\x0010d\x0014ãC:çH¾Ô/5\x001b®iÊ\x0015ëÕÑhBä#tSqtzN]Õì\x001d0\x0018xýâ[:Ýqqq\x00110\x0002ÇéÉ\x0019··×\Ý^ã¬åÞù\x0005Ö{1×\x0018M]7\x000c§SONy÷æ
UY±¿¿OÝ4ÄIÂã'òþý+.ß¾¤×\x001f0\x001cOXmV\x001cì\x001fÒT\x0015oÞ¼Á\x0001þùì*<ü1I
\x001eÑ5\x0014AsÒ4\x0015ýÞ8Y¯ô\x001eýþõfMä\x001d£Á(ùâ³§&CTBy\x000bxG\x0011*J\x0004le\x001b?l\x0019öØTK^¾ú\x0013iïØO¶ÓêGÓÒNV\x0010¤\x0008ÛH~/PÆî£
%\x0005ºëxvöÏ\x001fE%lÖkºµD´@/ÜÔAàµFe\x0012õ\x0013I¥!Ã(	!ýÎ²ÍõñÞ¢«\x0005åìÅí-ýÑ|<\x0006%ö\x0010Û5´ó[l×¼ê$D\x0008U¿¹½¹³¸Ðëæ<¶mqVÚjuScÆ\x0004s°JS¢4Á´\x0002l;£qN"QäÐ·tu#©¢Ûê°¼c]VÌVkÒ,£×ëí\x000fó[¾}ù~Þãâäáh\x0004>Â\x0019CÑ\x001fP\x000c\x0006¡\x0019F~öI\x0016ù.N:Ù\x0014j0|oïd÷n\x0003\x0006¿\x0004·\x0019©âmø÷>d#S«1ø¦ux{Ù9/BU\x001bôOÞc­\x0013À[\x001b¼¯ã¢\x0008L$\x0018»\x000b\x000fò$á¶ð}(\x001b#\x0012q£Áú|0¢i\x001b  nÛéÁ)*ï£µæòõ·ò)·/YÜ¼áüÉÏã­+}ûa\x0015\x001cÉ°
®\x001dU°¤8N¼§*å@rÞ¦)iZ0\x0008« Í¶g½e{¼=¶IImQpêÍB2Z£(Ò8"ë|B1=æøá\x0017\x000c÷ÎÃ\x001eë¸yû7ßý¬(¨ªõrÅÞþ	ÃÑád÷p{{ÃìvÆp<æèä8Mhê®i¨ÛÅrÍÃG9;?ãÝ»7Ìæ×ôû\x0003V\x0005\x0017÷ïñàÑ\x0003Þ¼yÍ«+ÆÃ1ºkéå\x0003NÏîÓt\x0000g
ç\x0017÷ØÛßìå®E\x001bÍxr@×5«\x0005Ãá4\x001c|R~\x0010)ì5áÆR*Â6\x00081;Æ±b¶\ð?ürSíàÖÊ\x0010yQ7;ow´½s\x0012ñûéã3\x001eÐév§ÈßI\x0001~t0ùÝú±}ß#\x0002\x001dÖíx»ÞC*<ÓþPZkÅÖ5:ôþ\x0011E\x0012·¾Ê\x001b1w¢;¡óÓÀÆ§äÔP÷\x000b|ÛH>3Äi7ÕìJ7"\x000f	Å¶íðMé4&¸á\x0017æÓ6-¶­%iÂ´´õ\x0006ÝuD>LhÿNV/ïÐ]îj:ÝÑé®­äâîä¹1Æ4
]]ÓV5m-Q\x001emÝìä/ÚjæeIçE6cCÿ\ÓU¼¹º¢¬\x001b¦Ã!Ãþ®kè:ÑÀ©X\x001aU¬\x0016Üj[} @Á\x0003\x0013ÉáFì5nëÿ±V²§6k\]ï\x001cþtÂÆ$	k»ÓhÈ\x0007glÈJ\x0012Æ\x000e]éº 'KPyA\x000b\x0016ê¼D$CºôüNl\x001b\x0001]ä¹\x000c+o\x0012°ÊøüüþWe+\x001fría<Ý§i7ä½\x0001\x0017<ãýÛïéöÙ;<c9û@S¯é:ÍþÉCp·Ïÿ	­+"\x0006×zBõ\x0004U×M\x0000\x0016¶\x0012dyNå¬Vsªª"K3Ò¬Ïþô\x0008ç=MÆêzEÓ¬H8òD\x0002}\x001b§Ò\x0004aºXI®÷xÿÑd\x000fç#ªªÆx©ß±ÖÐ\x001bíS­æÞÊôð\x0014ÛµB¹¸avõ<ë1ì1¿ùÀã'Ï\x0018
\x0007¼{óRR\x0000ööX,\x0017$iÊÏúsÊºâÅË\x0017ô\x001e{S\x0016Kv$æòý\x001b"àìôL$¸®Ó
eUÒ\x001b¸¸ÿÅrÁüæ~¯Of´æâþ\x0005ß=ÿùìñô¶©E­\x001d\x0007Å"\x001eÝJÆôp0\x0014Ë5ô\x0006C¬5´MM¿?$Ï
ÊzMÝ\x0019²$ãéÃ\x0007Lö§\x000fDw§àm1ÛÎµ\x0008i<ÙÛ;a>{Ãë7\x00010ýqDíV_ÇvNR\x0012Wì#\x0002\x0010\x001aíx[#0ÈÅ\x0019_>þ%'ç\x000f(\x0017s	×\x0012!\x001bÉ¾SÉ`\x0002IS\x0008ÊgéªCTÕ¦`þ¬\x0010ËÆb~7	byûÃw¬çKFÃ\x0011E¿'Uã]®+ªÕ\¦ó^\x001f\x001f@yW´å²Üf\x0005I\x0005p_Ñ6%Ú´8%&çºªBtÅZC&X£ÑZ£\x0016ÝÊëjë
Ó¶´MKÕ6¤ILÛ¶XëHcÅ¦ímJ²$\x0015&3\x0000Ëí|ÁËw×ôÓ\x001e÷\x000e\x000eéõ\x000bò<\x000f]yA\x001b\x0016~îS\x001a'ü\x0018ÇÄý¡¬·ÞK\x001cHëw¬hÀ8\x001c\x00088`ÉP\x0012\x001cIä\x00042ùáDkä\x0003PwØN<o6Ø¢À²ÙÜ@\x0012å¨þC|K¤\x0014IsÓyë\x001c±\x000f\x0017[äQeYÓuSå9ãé\x0001iVÐ6\x0015«Ù-JÅÜ»ÿ\x0004¼#Ís>¼úÑÁ\x0019Ã\x000bÿþÿE75*J¸²ÃD³«\x000f-	J@ÉhËÄÕòÃcö÷\x000eHÒªhºZÑ6%J\x0004kînè]ð[À ¤\x000c\x0011ªÕ5«å­PÞeÂÆ&û´\x0000Àìú={'pÿÙ/I²B0¤Ù{¾ûúHÓ\x000cäÜÌf|òä	GÇÇ¼øî\x001bæ³\x001böö÷©;¹á¦=ÖeÉË\x001f^â¬åøôÑpµª©XW\x001bV\x0007\x000f\x001eðàÞ\x0005ïß¾f1± -(ý¢Ï?ÿ%ªäÏ_MÅÆ#îSd¹\x0014*¤\x0019ãÉ\x0001Ëå\x000cç½RÖk¬Õd!ÂÖè.L#\x0011ZwlÛHu´]Ãû\x0019úö\x0005]SïZE\x001fãQJÞ3!u»ìì¶®ùÉ§A¯èáú¥í¤úqdî]\x0006\x000e\x00187-m×¸mÎ·IvAÑgÿà¶©Öt­Ø1"v7ó6\x00052
¯#ÊB\x0011ýÚÒÍÖbÛ
^·ÄÃ\x0001Q¯G»Y7\x0012#ºÎÐT\x0015Íf­kl'\x000e|Éþ	Áõ¦ÃÕ5ífE[×\x0018\x001dô]H(¦d³Ó5\x0015®kèª¦®d}\x000f\x0019ÓMUS-Öt®nñÖÑuºí0ÞÒt\x001dÖJ	¦Ö\x0008X6-ï\x0017\x001bôÖ\x000e\x0014	nU\x0015o®\x0017ÔÚ2\x001dµ*F÷;
C:H$¢ð3·º\x0013B \x0010\x0004ÞY\x0011|j#=w\x0001ÜâQÈ¡\x001e	 î£\x0008
c\x0000µ#'ú-Ýá;-YVº\x0011Á\x001a	³FV¾<\x000f-5òý9c\x000c\x0015Ä=ñbÆE.þ@ &¢)RÞ+\x001fj¾äÏz"â§Ï>ûj±Z\x000e¦è®cïèñä«·/±Þqñô§üéþ\x000ec
Ã\x000bêÍfuËjqEo8¡
\x001e¶8\x0004EÅiAõ0mµÝn¤ßvG)\x0015\x0013ù(LD\x0011\x0007§ìM\x000fX­W\x0018giê
M½&NRò,'I\x000b¤É3­\x0004·y`ñ/IR1Æ9N×tME¹YRoVDxrEo0ÁÇ\x0019mµfºwÌjvEV\x000cxøìgè¦D\x001b-~0>¸w!o¾nqÎ\x0010G1ëR(ÐO\x001e> ¬*n¯o(ò4ËYÌf<|ü\x0014c4ï^¿&Kb¦Ó=f³9'G'¨(áúÃ\x0007êMÉÞt¼ÈE\x001d&ºº®\x0018öGX\x0014/_~+\x0013dÞ¦X¡MG¤â`ÎmI4I¥óN%\x000cûCN\x001a'Ã	Y±.+ò$ãÏ1\x0018ÉD\x0017¶,Rj7B~»vyú	Ïø\x0003US\x0012ÇÉ\x000e\x001bÚ\x001d8Ñ6kIFñ\x001f\x001fTw¿¾+µNwïñËg¿¦^-05Ýf-éfÛ\x000e\x0012¡¶]öQ,¸È6­0ø¶¼ÑFQôÃZ&jhb®7ÒFÄÍõ\x0015××·\x000c>½~\x001f¥"\¨\x0014j6KaÊTÈ¶ryK]UhcL>Þ\x000b~ÔT%[;G]| I\x0012\X»Ê²¤ÞÆñF2.´mÖ\x001ac\x001dm§£HLâ*ÂXÇÍº¤ÕDÅ\x0014Y"§w\/Ö¼º¾&K\x0013î\x001f²?J=Õ\x0016ú\x0008Æê$KQÛ\x000bÛH\x000eTfDE!º!'
ò-m-$Ä6Ú%XNÂÊ|\x0010ÖhØÉ\x0018¶\x0017\x0005V\x0018·mP\x000f«4á%hÁZkpÎ\x0013'	ªÈ!Ë°P±x\x0005­%á2¸Ò$\x0010'AcÊ{=|¤Ø,oÓ8NèºþhwÛ\x000ftÚòàÓ_\x0017C\x0012tWÒT+.q=H×|s ¹C!ät\x0015ºëh»\x001a§È{\x001cìíÓ´\x001dÆzLWÑVk)\x0015HemÛÙ\x000eÔ\x0016pCb4#H4|m¹ýã$#í
ÈCº·ù»\x0017óKV³÷ÌÞ?'IS¬óÔuEo¼Çíõ%EÌÏÿò?ÇjÇóoþ®­©ªÅjÍ£ÇÏ899ãÍ«W|xÿédLÛvôóÏ~ò)M]òúù·FC\x0006½"É8>9¦m\x001a®>\agïðÑdB×6,W\x000b®åêúA1àÙç?a>sýá<ï7ìï\x001fÓvx\x000cGSâ4£Ó
E!ë^Y­Ä\x0006\x0017`\x001aM³\x0002k4m[¦)Yr}ýWo^²Zbð\x0008\x0017@h}g=ÙN á\x0010Iâ{\x00170¶\x0005|X+îÀí8°/\x001fªzûã¸­XN.O¢b\x000e&ûÄÂÖ\x0015Þ:4\x0015©\x0017ÿã'òïñÄy/ôÉ¥Â\x001aÓ¸zÃÖJÓÍ®puMR\x000cò¯VD\x0011h'-=Z\x001b®ÁºÀ¤y\x001fD|v§x·V¦÷íÊßé¶i%s\x001eë\x001duÓQi¹ë:´6hk\x0004«´Vì\x0014Z²ê¦¡Õ²iÐVl\x0016­1\x0018c©:MÓPQ)é6è¬fYÖÜ®ÖmËÞx$Þ·,	¢Ä\x0008ç
ð}G±\x0000ßØ?T\x0006ùÃÕ%®\x0015FPe\x0019QDºt\x0008QÃÚI¨}òÎ	-\x0000 \x0007Vp]oB´­\x0013úÞãÅ\x0011d!\x0002F\x0011áCüH\x0010D¶bFVEA\x0014ãj[xa-÷iÂ¥ÕDÛ ðgÜ¡ cæ·×\x001c?¦Z¯9º÷8ÍxõÝ?³^|ñÿj½æõ·¿erú	åì=m[ñáå×tõZ4AáÛÞÝMê½¤HnK\x0011­ø¢W\x001c½\x0013SSmÂ-$ÙJýÁ\x0008Â\x001by8ä´'\x0008\x0001A%[ÍÎÞ\x000b¶Ô\x0019û´Æ0¿½ÈSoVø®b\x001d\x0004s½Þ<ËY,oèå\x0019uS3\x0018M\x00024çù\x000f/8Ü;u³Óì\x001cQkno®È2ÁÅ\x0006Ã!y^°/h»uµAkÍù½sº¶ãý»·Ü{ð\x0010ã\x001cËåÇ~JSW¼yóápÌÙé9ÍÉd5\x001dM½ÁjÍx²OÝT,ç7ô\x0006£ÀÀÍyOä\x0018£Ñ*&/úx Ó
YVà¬¥
B±RÌ\x0017\x000bæ³\x0019Ö\H.NXå°Qâ°÷\x0012Ê\x0015¼ê89?{Ì?þîÿ\x000e£u
·3\x0016\x0017I°ÛMGüÿNG[±¦\x000b\x001fè"ÍéÊ
\x001e\x0015pXp\x0012ùT\x0006?VðmCRqÊ{­C\,¢Tf+Îô"^Ô-*+È\x0001Mµ¤®k®ÃXvÈdb¨Õ\x001d­ï?G¦\x0007ë,ÎG4F$RÕµõ¬uº£1\x001d¹hµ¡\x000eø
vazôp°ÖÒz¶\x0006¥â0yA\x001bØ-ë\x001dTÎi,,_ç,²f¾©èg9bH}'+2a*µ\x0016b\x0003Ð¡Ò¬\x0018\x000c
É¢ßÃÇ)®kPi&Ax!HÎyKd,JCý¸Ç¹HY|hKf'ÒUÂÔ9¿­Ý*Ôäµ\x0006w¨(B4\x0004ÁÒ<è¢X¡|$\x0012
kH\x0012\x0004¬Ó\x0008mØ]¢R\x0001#~üä¯ÊºÂxG\x001c§\x001cÝgzxÂj9\x0013&¬­\x0019O÷xûÃ7ä½!\x0007÷²¸·åÕ+ò6è\x000e\x0000\x0014IáE·<L\x001f¢>\x0018\x0018} \x0007\x0011iÞ§îjV\x001bt'\x000fJ\x0012ÆÃ)IÒu:Èôï¾\x000eQ$"¹°gC\x0014b\x0010`zxn[â4¥3bzLÖ\x001b\x0012Å	ã£\x00074åB\x000c¿mMWÊzxzÆz9'\x0002\x001e?ûj³¢\¯(z9EQPW
O<f8\x001eóîÕkÊMÅþÑ!ëÕ\x001aÄÜ{ü÷oß1Ý²°O\x0014)ÊªdooÕbN]n(²\x001e'ç\x0017Xkh6¥ä'õrêrÃtÉdÄ÷oÐÎ£½c½\x0007ÆVn $Í¨7\x000bnLöqÖPÕ%á\x0008\x0014áûíÑïX®æh­9<8Ä\x001aÃ'\x0017g¤ÏFºÎ:IF©øî½QÑ`Âû÷Ï-gÄI\x0016Vmn¸Ó"Øö¥yÿã\x0003é£w\x000bg\x001di\x0014óëÇ¿fØ\x001b¢Z\x000e\x0016ë¼|vÒ¢ ¨¢h¶¸ýu¦gtµÌÆVì$*QiJ3»[\x001fYMÞ]½ç·\x001fØ\x0019F¢x¶¦ÞPV\x0015qÑë÷1ÆÐu
ËÍMÕf9i´ÀZª®HjÊ¦A\x0007]óNn'9íZëÀ¨\x0019´µ$qL×Y:í°8:+zV\x001bÊº#V"KÉ\x0018ë,uÝòövFÝ6\\x001c\x001cs8ÚcØïuV·L4^Ú? "M3I\x0006P¸?D'ei¥YD¥©DñÆ\x0008MçOtZÊ\x0000áVòÊ\x001dtü^"¼xëjYÂ¶µdZE´A»Ði\x0017vÅ(K%FÅÉ<4¢(<e®xµ!ÄÐ´\x0013h[µn¤&ËrÊrÆÑù\x0005/¾þ-N¥<ü	Ætüó?þ_d½\x0001g¾àí×ÿÁp½£û8Ûáp»#Ö{Cµ¾¥Zßýô£\x000fòn\x0015yPÈÒiVmæt]M¦$IÌh0!Í{T8ãèÎå\x000c¢ñÎÆNÙíqBÓZcI$EGâ=ÕfIÖ\x001bÓ\x001fíÑ\x001b\x001frñäW\x0014£=ªÍÍüw¯^°_3\x0019O¹ýð<ËùéÏ~î\x001a~xñ-i¢X.\x0016|ý§?QôzÇcÞ½~Ãzµ`<\x001a£p2QÛÛ[f73úÅ{÷IùÍ\x001cc\x000cmS±/xðÉcùþÅ74mC¯ß§¬\x001bN.\x001e0\x0018\x000eß^&\x0019û\x0007Ç4uîZ$I%\x0004ÜG[ :ÄÆI5Á¬å¤iLª\x0012ªºâêú¦mé´÷¶\x0018\x000bû½(\x0013þâñð'|sÛÀ=©§ÔÇ\x0007\x0013?l|\\x001e âJÁ	\x001cAV°7\x001c£·5C&`\x001bJöú$IFÚ¥SFQ$\x000fR\x0014\x0018("î\x000f NeÚ2¢²¶m\x000bÞ\x0013\x0017\x0019ífNW-ñV£\x0012õÐiCÝ
Y×kÚ®ÃjM§;´\x0015\x001d5ªª\x0004ûc3MCÕÔh#8É¦mh´ü¾¶Î\x0018Ú®E\x001bCÕ¶T![E\x001då¼gÓ4bDÕ2uµÚP6]x=¢¤7ÆÒv«ÕÛõé`Ìñä^GÑFÀcï0Fp¨4Év\x0005QV@¯/Ò,Åõ\x0007wuâã­RPíØýðÍJ\x0016¹ó2E6­´\x0000{\x0007IF\x0014§!"¦\x0013\x000e, \x0016\x001c]Kí\x0019ÛË)\+I\x0012d\x0005ÛYERH³4$f*|\x001cY;¬æwÉ¨1ñ£§?ýªé\x001aÒ´À;KS\x001c?&ëß~ èO0]\x0005*¦©64ÕãûÏhëÙ»o1A8	\x001fË{¿;îrZØ¢àIâbÐ§©+Ë¹²iÎp0e4Rµ
\x0016\x001f2¥%ôÎ¾ ûo\x001c'²ÇwmÈÞÈ\x0001Y1\ç`üí:Í`rH¹átKr·'?È2¿}O×ÕÒ½®\x001d{G\x0014yNÛ6ô²uYÑ%Þ¶\x001c\x001fîss» ª+8¦×\x001fPmJF	\x0007G\x0007|ÿü;6ë\x0015Çg§
qsvï\x001e¯ß¢V,8\x0000\x0000 \x0000IDATüÀõw\x000cCÆ	«õñpLS×¬W\x0002Va­æåË\x0017èð\x0000à#Ò4¥m7¨8%ËrªrE\x001a'\x000c\x0006c6%Þ;&ã}ÚV¢x'£)ÞÕzNÓ´Üãg?ý	y¿\x0010 4\x0008\x0003½\x0015?úè\x0003µµø(¢W\x0014¼|ýg¶"I°¦ýX³´ýs²^\x0004t³ÕæÉõÇ_pÿð\x0002Ó|ë®\x000b¡c2¥\x0011mëºï¾?\x0011\x0000F!mÒIpJÄþ±^ÊmfØ¦©«5õfRp»\òújF/Kéç\x0019q¶M<ÐF\x0013')i¯\x0007@YmX¬æDJç9UÓ\x0006©CkM£5e%ëÉ%Âû -\x0012\x0016/I\x0012$ÆY\x000eÓ	g\x001c\x000bëY6\x001dÆ{<%V
O±ùfÃÛÛ\x0019Ã¢àáÉ\x0005ÓÑ"Ur\x0000Ê{ZÝÉ3e\x0014yO¶<#Ísâ^\x001f	ÃE¢v2\x000fåC] úeýÝFÎÄB\x001emMOÈï5Ó\x0007»D4ws¯÷¡\x001dX´qNwx/­_QÖ¸8ÔO='Ä\x0010½ÈàÓ´­\x0011ò!`\x001f\x0017SÄ\x0017\x000f\x001eÕêþ`õ\x0006ÝuÜûôWÌ¯ÞPô\x0006¤YÅí[êÍr½äÙ¯ÿ«·ÏYÏ/UD9¿ü(ì_	[\x0003;\x0010õ\x000eÀvS¿BØ4Ëhj)Ý¢\x0018p°wH«5]ð}Õ9Öv»íF¨\x00009ç°ºA\x0011¡­Þ\x001dXu9G·\x0015õfõd)Mµ¦?Ú\x000bq\x0013\x001dÓ£sº²äôÞcÒ4ãòÕw8ï8::¥ªJb\x0015qïü®éxxqÆ_þü\x000b>ú\x0008u\x0011\x000eÏÍõ;8ezxÄr±¤_ôqXnç×à"¦\x0007bAik	jk\x0016k\x0005#:¿xÀf½æêê~¿O¿7À\x0018Ãp4æùwßP®\x0017GûÄIÂz3'Ï
$¡©7DQD\x0015!×Çå9Æ\x0010¶È\x0004«[+8fØ\x001bòÏqzïTd\x0014:Ô	EQ ÛRùà0Ú0\x001aîñòÕ\x001f­nISÑ,ýx*"Ä ls¿?Z×#ùÀuÚ*øÅÃÏ9\x0018 µ¨¥£8K`»Åâ÷bÛÞß}n°"ÖóHclW£ëµ4\x0004Ù\x0001ÖÐ\x001bÚÖp9[òúú¢È(²,\e°j#És²,£Õ-ËÕMUSä\x0005±éBÓm£\x001bÚNÓv\x0006­5*h¹TxmÎ:ª¦	\x0013¤¢í::ÝQÕÖ¸ÝçÝxÇºnpÎQ¤éîµZçY\x0015¯og$QÂÃã3öFcÒD~¶Æ	ûµ-\x001ei\x0013yùûz¡cª¤?\x0010°ÛÝa»÷Òk¬\x0008D\x0010%BRø\x0010ñ»}¿¢8U+ÄàîÊ*­A)ÏVáîLÐ+©¸\x0018X(-ä=·V0Á8\x000e¸o\x0012 \x0016è\Ç\x000beh¢È	¾¶½ÒîðÈxtpðUÑ\x001fÓv
g\x000f¿À{ËÍåKû'¤yÙ×\x000f/°ºÅ´âé©7+\x000e/\x0004ð^]½&\x000eQ)\x001e\x000cñ\x0011Aåý±-!	´³ó¡6I%¡ãÌS\x0014CNNÎé£l\x001b¼Ö«[<^HäÁM.§¾¤â ×Zò}äÉ²>£É\x0011Y^ u'!ìåÍÍ;L#ùÏN·LÎ±ÖR­\x0017\x001c\x001c_àºãSò<çýë\x001fh££3´õ¤IÌ£G\x000f¨ë"KùÍ_|ÉÞ´Ïï÷Ï"\x0014u¶ÛäÁÅ=Òÿ¬7\x000bÖ5;ïú~kx§oÞãÙûL}NRw«%K,\x000b\x001bËeÀÆ&&`L\x0011RE*\x0008¤\x0010HH¤TqT.2\¦R	C*P\x0014®$`<È@%«ÑÐ­n÷pæùìyøÆwZkåâYß·\x001bÒºÐ©£Ö>gïï}×zÿdLg3Ñ\x0014%)§ÇÇFk\»~Ã#öï±»³KPp>ðÂ\x001cîïqrzÂÚæ&YqÿÞ]¦Ó±¬eÞa´Lîª¤S¹r±R\x0014]lbGÿ`¯;`ºIP\·Ob
³ñ\x0019ª®\x0018¤	kÛhkVÎr1ë\x0012§\x0015reUÓdiYyÆÓýûh\x000cË'øÿ¯Wºp¤\x000bóºÌÌÑ\x000cº]\x0006YÎ;/Óë\x000cië
µ ôESN$Ë	ë¡ZýZ)V,¼Yr\x0008Õã\x0013Ü²ñÖÇÂC\x001cû§'Üß;àèlB/ÏÈÒTþ·\x0010ûß| ÉRZßRM¦'c\x001aç(ò\ð\x0012ïsæuM]·,ª\x001ac\x0007zÅ"U\x001dUòºn%uí©ãïxÏËºiéä9I"SCÝÖÍ¦<><\x00007wv¸4Z£H­L\x0010Ëà5Ä0$©DÅÆ!\x0007\x0014é\x000fÐy!InIë+«	u\x0019Ã\x0010å Sq§R6öIÎL$\x0010äÏ\µå
%!dUÓDM%¨RÒn£³\x0002f´µÔL©4DÄ/Ó\x0018\Ûp\x0006\x000e\x000cV\x000eCI,e¥µZ^xfëÊõ¯£4I1dmû²d\x0014-&\x000c·®pz°Òí\x001bopüì\x0001ÓÇì¾ø:½á&w¿÷¸f\x001eÑvÙYEuÚÆ\x0007Õ\x000c!®\x0006*RÒòhc\x0004ìÎÎeò<ç|2Ã5-Ù	­kHÒ4É16\x0011\x001e\x0017`¬±rë41óFÅ\x001fÒ¥k¯²uõe¼²\x000c6v¨Vö\¥\x001dPÎ§h­hæ3zuls~´Çõ¯ÈôQÕ4®f29¥n[¶Ö7èæ\x0019Ç§çÄÒïæììlkÎ[´¶\x001c\x001eî§9½~ó³1×®¿@ÓÔ<ypÁ`ÄÎåË\x001c\x001f\x001db¥?\x001c°ðºª\x0018­¯\x0015\x0005óxI_|Cµ(ÑÆ°¿ÿ\x0004¥4½îÙô¦Ñë\x000eQ(Êr&Ä±å\x001cc,iÑÔ\x0015®mè\x000fF\x0018\x0015¨ª)ÕlÁûï¼Oæ¥O½ÇG\x0002áB)½lw]\x001eP@o0äÎý÷Äì»*\x001b½xPJÚNq=\x0012´\x0014XÐ°;ØàÍoL\x001e\i
*\x0011+VzU'¤â
©"ô¾,8\x00149[(ëñ9Ít,«BÛ]¤©9>\x001fsçé\x001eçÓnbLÑ"'I4Î\x0007LâÚÅ|ÂÙdµ$giVÌæ\x000bêº¥n]|Ö\x000cJ±ÏuÛFlÅÓ4\x000bµ±£Ñ\x00131£8)º¶%µ\x0016\x0013UÕuS³:æùù\x0004£\x000c×¶¶¸´±I'Ø\x0012Iª\x0014CrÑ\x000506¡ètÉ²\\x0018B×tº¤Ã¡L´(Ô\x001aµ
z\x0019e\x001béþU­{\x0008bp&\x001d>rãã«ZKÚZd\x0001ÞI\x001c³1ñ3»°]Û
3ÜH<±$oFã´\x0012uþ<T<±
e\x0004ØWÉ¤a\x0019\x0012WyéÖ¿®%ï­ã½g÷êkÏ\x000e9|úÑÖu\x0006WùèûÿÁÖ\x0015þ\x001aÕäº39zÊøà>>¾Hj	È\x0016B@\x0005\x001d1\x0008Ñ¶\x0018\x001b\x001b5"\x0013g´Æµ<ï°>\x0012½RUWÌ&'´mEw1&!z\x0015\x0017|Ù£N&²	¾ eSÑ\x001bnt\x00064MNSê6°uí5:¦¼è29zBSÍqmE]Íè¯o
Ðýì	W®]gmsgÏ\x001eÑTr[Î¦\x0013f³\x0005½^¶ªè\x00169×®írë£\x000fØÛ?ãÓù\x000cÇ'\x0007\x001c\x001e\x001fH¯[¿Ç|6#ÏrêZ¬\x0005³Ùõ
:ý>ÇÇG´¥D÷åÝË<¸º*\x0019\x000cGì\x001fîS×5YB\x0010·y¥´øÒ:\x001eUµ i\x001azÝ>Þ{\x0016ÕnÞcØ\x001fR×%mS±6\x0018\x0011|àùé1w>¾ÍÎú\x001a;Wv©fSLLz\¢Ë\x0004\x0010ÿÓë8;ßgÿð±D¨|bJ\x001b])	Þ_N\x0004Lõ.p69çÚÆe^Ù}j6'ÔÊ¸ZéLIÄ5Ø²¼Å%As9äGj\x0019
3	ÓF\x0000ìÅãósî<?`¼(É\x0013CÓH\î¨ß'1F¦\x001b\x0002\x0004Çd>cQ6$©$5NË9ãyEU74­# e	Ë2@å=\x0013º¬\x001aj'å«²ªÉ\x000bç} j$ô-±Ä&\x0010 ¬\x0016ìOØ\x001bÏ0Jsmó\x0012;\x001b\x0018
(qÎÑ4ò÷Q/4/$ËÞ&r\x0018)\x0004\x001bËz}N\x0017¥\x0003)I"æ#*y\x0015ßøPbáéöQèñtÑrëfu (û\x0000å¯Ä×ÐHn·ØR
¿ÑÎgË\x001dï$\x0018Nç1xN
æÈ4\x001câh\x001b·_¤>-Dà]\x0018­4fýÒî×ótz}._}I<kÀb>Ææ\x0005óR¨ýË/}ÅlÂbrB3?§­fài«\x0012\x0017¬Ö2)}ÅWHhU¦¤IBUI&ïöî&u]¼èQ7-ÓñI\x00002qüg]ò¼C\x001bÍ´dw¬5\x0018m1&¡nÊ¨ÂõôG;ôh­ÏgTÇf\x0005³ñ1½á%lVd\x0005ýõmfãCÊéTð¦BáÙ¼´ËéÉ\x0011yÑgg÷\x001aÏöGÄ1Lxöl\x000f«-»»ë\x001cì?åÑ}úë±8A~\x001eÞIüè78\x001dóìéSÒ$esç\x0012Ç§'\ÚÚ¡\x0017Ü½}\x000be\x000cW/_c:¤9ÆjNNx¾¿G§7,rJe$&e>\x001f\x0013ðt;}ªJ2£»>Î{ªrN\x0017diÊùù	
E¿×g±ã¼G+\x000beÉå\x001e§'G¸¦$1R\x000f®ôEÒRaç\x001d[w¿uêK\Ô{EëYÙdzZ
Æ4^r_¸ù\x0019¶Û1.²8\x001a%yFú¢:Dñ\x001f	ÞÉm\x001f-\x0011^)\x0001`øßp
ÍbF99\x0015á$â\x000fÜ;9áîÁ	çóR\x001aUbÔëÅF\x001bó~ªªæ|6M9Âªg\x000bÊºØV\x001cõ:Ni,WSR\x0000ÑKéØ(Û¸ØìÅ\x0018\x001d\x0010­Xb-
U\x0015\x0007³\x0019g\x0005Ý,ãRÀúhÀ`ÐÁj	Øo\x0006c¤ÒÊ{OZté÷×V¬V
ï<yQv
©á\x000e^zßl
*H*@ü¹Zj©L\x000csM-±·ñ\x0012
K,g9Iy\x001fibo\x0003kEtÙÔ,Ûs\x0011¹®©ä÷=b¼«àW\x0016£\x0014~Î#*\x001a\x0017>±7Éº/Ö§Rkyáå7¾~v~ÄÕk¯°yé:ûÇû¬_û\x0014Ó}ß'\x0004ÃÍ7~§·¾G9°víUæçøVNæà½ÜTñ]ó\x0002HM\x0012«hÔ&1\x000f\Ú?>`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=_>ò8'½\x0004'íS9ð\x0019ï\x0013õu¾\x0017!H</p><p>4¯½üßÏC\x0015\x0000ºNdK\x0017©ÏÁ9\x0011*JQ=;N"\x000b>#¦Ä1KB4\x0003ùämÊÃ\x0015LÚ;O<~\x0012/o\x001a\x001c]7p:ô<>xÿþ#7»\x0015÷¯îøêë¯\x0019ú¯ùãÿÿ\x0013ý0¡\x0012ì\x0014£ÀPâMöÒgÉ/É?Îó'/\x0002QK\x0014\x000b¦JM[R½¥_÷</p><p>N§#uÝp³ÛRW\x0005OÃ¸\x001a?Úïc±ïÑ(ë-.D1\x0010¥¬\x0017\x0018]\x0008ENòdµ1â!\x0019Ãf·f±^\x0013IU9\x0019/\x0011B\x0013îBb\x0017-l*\x0010p=\x0012Ùn¥Áñ°?Î^¤JºÙZ+G
\x0002±èÔÏ¡Ò_%QGU\x0015ôÃÈÇG\x000f»Ó¬ÊiaµZñå×_óæË·,Uê­÷ÇMH(fDÙS'vì üdDBV\x0019WQòD12ùó>Ñ»\x0018ª¦.qkP\x0006ç\x0012±d@{/FDiIDÂ¦aìGcURVläF=2âÌxïèûÅbAßux?1blÓBM0]û¹òeÃU©Ú²\x0004o1Æ\x0011¨?ö}Ï \x0014w÷wL\x0013¸NéTy§ØívÛ³\x0014Ð@p\x0001ÜãLÿ#² y5Ç¾\x0002G\x0019Y\x001f.9ØK9¯"ç¨Bú<ED\x000bqÛ\x0005yIiµ^\x0013#\x001cöGq¶T®#\x000b/ÖÏß*ÞÉU^\x000fâ \x0008Ü¦DÃñÈ\x0007ßp>ÑÚ \x000b+\x0008\x0017î*\x0005\x0004«´\x0002m×²Ý</p><p>9­(x\x001a\x0008öt¢®k\x0014RàÑµgÆ¡ÇÇ\x0014>#QI£só½Ú\x001c}\LåÅ"Î%~WÆûº%0o\x0010Wy%¤{ª\x001cßk­f½Z¡ºÐ°óÒçú³âå{ÆöæÝø:\x000eÌ¯Üdså¹v]ËãÃ\x0003ßþêWNgöûýgç¹~M$DÐêbä_§|¾I|Nïrõ·+·b&üñÄv³¡ë:>§§g¶ËÂh2Y"iì¢</p><p>ñò\x0001|"ÄN\x001bvHJnöòir» òãèéÎ#ý??óã»G>>8\x001c³,,VRqW\x0014X[q>\x001e\x0019§\x0011?\x0005(r/Lþ¼øåü2ÞH4</p><p>\x0015×<CmDÆÔ\x0018¢\î-c5ô=[ðíwßÒ
=?ýõÇ\x0013dp@¢\x00139Md\x001c;LWrsÿ\x0006[74õ\x001a«­\x0018ï(T[X@ W¯nYnW´\x0003xb$hÃ0\x0005(5¹¹\.x</p><p>®í©k¡"ñÞ±¨W<==Îú%\x000bIAJh^ÅðFª¾$¢</p><p>ÉÃ\x0006­\x000cçqâ§wïyxx\x0002\x0001k@m*Þ¼ºão¿áÍ7_QÕuª"\x0000JY\x0014\x0017²ÉÒZ1­ú\x0012Ý\x0007e\x0004
HNOT\x0011eÀ\x0006wàattgCÙ4©üÝR\x0016</p><p>)Õ}Ä[qJ</p><p>U2t-nX,\x001bsÏg¬Qrò\x0002\x0015ÝaDÎÃ4¡ÑBHhe»\x000b¨¹üTi\x0019O«\x0014ÊF¢58g	&b¬@©ã0p>hê\x0005J\x000fv½bÑT\x001c\x0007¡IFÅìõdãR5(L\x0002Ü\x000f!\x001b$]Ê·\x0018Å¼\x0001äg</p><p>\x0001 \x0000Z'G/±Õz\x001bGº®ç¢/HY\x0018/\x000etúù\x001aÕH62Ç\x001f:U	f\x0017aà×o^\x0003°?<CÔ¸T©\x0017¢!¢¢(¤4øpäí_RVubgÉMLÓ5%ã0`T ,</p><p>MÍrÙPe²í\x0006m÷LXz£paÍæø*òQ*m,\x0007!éø<s\x0010\x0016KÚDÈ»·\äÍí-]Û§\x001eRËó&rSäÍë:÷ðâ\x0001\ïõU©ëïòÇq\x001cyøøUj:|~~¾\x001cÿâ»¼sô}x¶R/ÇÕi?Ûx>ûø7®íò§\ßýöí[s¼ÿ²4x\x001f±:h¨1å¦QMÜ?9:½]²FçpIÃ|\x000e^#(/\x0014'ÞKã i|\x000f`í¢HUGÆP\x0016%ÏOÏÄ\x0018)ÊBVÆ0&¶Oç#Ð\x00170,\x0016\x0019\x0003ñò_¯\Y&·3Zá½£\x001d\x0006^ù%1F~~÷>É¼ºÕ¥ü\x0013Dü©oy½»eö.\x0017®\x000b\x000bEÆ°½Ýp÷ê¶÷xï1\x0011'C\x000bI\x0008\x0001ï¡(¤¯¬\x000bëéúå²a±ØñøðÀ¹=\x000bd¢Í<¶:Ý{Æ¯b¢ý¶É)\x00081¢CD\x0005Ï¡mùñ§w|øð\x0018<Eaåó°¼¾¿ç»ßü¯¾ýª.å¾³Ñû\x000cd\x000c¢(P\x0014#!Z\x0014\x001a£H¬Àáj¨\x0005</p><p>2F÷Þ;ÚS:è+5å¢Â\x0014\x0016±\x0016\x0014\x0011bð¶ í\x0005º¹½¥=·ã(\x001csÞ\x000b\x0015PBÇ\x001f\x000b\x0011N2­5ww[|ðs\x000e, S ªlÔÒ<Q¤\x0006Ô\x000cé\x0018´\x0016Ä\x0018\x000b:Eyâ\x0010\x0018f±`³Y³xàáÃû¹\x0014\x0015æ¼Û<ûÔouJ^G\x0018<!9ÍQe³q®ëM÷²îN\x001cZµårÁÐ	O^hfûªf{>ÿ¬áòËJµN.9G%TûÉÑ\x001aÎç3\x001f?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://handicap.gouv.fr/grands-dossiers/](https://handicap.gouv.fr/grands-dossiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/agenda/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/](https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/](https://handicap.gouv.fr/vivre-avec-un-handicap/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://handicap.gouv.fr/presse/](https://handicap.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/](https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
Instances: 11
  
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
<p>The identified library flowplayer, version 3.2.12.min is vulnerable.</p>
  
  
  
* URL: [https://handicap.gouv.fr/plugins/contrib/mediaspip_player/javascript/flowplayer-3.2.12.min.js?1615895465](https://handicap.gouv.fr/plugins/contrib/mediaspip_player/javascript/flowplayer-3.2.12.min.js?1615895465)
  
  
  * Method: `GET`
  
  
  * Evidence: `flowplayer-3.2.12.min.js`
  
  
  
  
* URL: [https://handicap.gouv.fr/prive/javascript/jquery.js?1615895465](https://handicap.gouv.fr/prive/javascript/jquery.js?1615895465)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v3.2.1`
  
  
  
  
Instances: 2
  
### Solution
<p>Please upgrade to the latest version of flowplayer.</p>
  
### Reference
* https://github.com/flowplayer/flowplayer/issues/381
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/](https://handicap.gouv.fr/vivre-avec-un-handicap/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://handicap.gouv.fr/grands-dossiers/](https://handicap.gouv.fr/grands-dossiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://handicap.gouv.fr/grands-dossiers/](https://handicap.gouv.fr/grands-dossiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/](https://handicap.gouv.fr/vivre-avec-un-handicap/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/](https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/](https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
Instances: 10
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "page" "recherche" ].</p>
  
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
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/acteurs/comite-interministeriel-du-handicap-cih/le-comite-interministeriel-du-handicap/article/le-comite-interministeriel-du-handicap-2020](https://handicap.gouv.fr/le-secretariat-d-etat/acteurs/comite-interministeriel-du-handicap-cih/le-comite-interministeriel-du-handicap/article/le-comite-interministeriel-du-handicap-2020)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/ecrire/](https://handicap.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/article/creation-d-une-prime-a-l-embauche-de-4-000-euros-pour-dynamiser-le-recrutement](https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/article/creation-d-une-prime-a-l-embauche-de-4-000-euros-pour-dynamiser-le-recrutement)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/acteurs/comite-interministeriel-du-handicap-cih/le-comite-interministeriel-du-handicap/article/le-comite-interministeriel-du-handicap-2017](https://handicap.gouv.fr/le-secretariat-d-etat/acteurs/comite-interministeriel-du-handicap-cih/le-comite-interministeriel-du-handicap/article/le-comite-interministeriel-du-handicap-2017)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/grands-dossiers/duoday-un-duo-dans-le-monde-du-travail/duoday-2020/article/duoday-2020-c-est-le-19-novembre-prochain](https://handicap.gouv.fr/grands-dossiers/duoday-un-duo-dans-le-monde-du-travail/duoday-2020/article/duoday-2020-c-est-le-19-novembre-prochain)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/les-aides-et-les-prestations/numeros-de-telephone-utiles/article/le-3977-le-numero-pour-les-personnes-vulnerables-victimes-de-maltraitance](https://handicap.gouv.fr/les-aides-et-les-prestations/numeros-de-telephone-utiles/article/le-3977-le-numero-pour-les-personnes-vulnerables-victimes-de-maltraitance)
  
  
  * Method: `GET`
  
  
  
  
Instances: 6
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 99 [https://handicap.gouv.fr/presse/dossiers-de-presse/article/comite-interministeriel-du-handicap-2020].</p><p>Predicted response size: 399.</p><p>Response Body Length: 466.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://handicap.gouv.fr/robots.txt](https://handicap.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/acteurs/comite-interministeriel-du-handicap-cih/la-conference-nationale-du-handicap/article/les-initiatives-labellisees-tous-concernes-tous-mobilises](https://handicap.gouv.fr/le-secretariat-d-etat/acteurs/comite-interministeriel-du-handicap-cih/la-conference-nationale-du-handicap/article/les-initiatives-labellisees-tous-concernes-tous-mobilises)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.thinglink.me/jse/responsive.js`
  
  
  * Evidence: `<script async src="//cdn.thinglink.me/jse/responsive.js"></script>`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://handicap.gouv.fr/prive/javascript/ajaxCallback.js?1615895465](https://handicap.gouv.fr/prive/javascript/ajaxCallback.js?1615895465)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://handicap.gouv.fr/prive/javascript/jquery.form.js?1615895465](https://handicap.gouv.fr/prive/javascript/jquery.form.js?1615895465)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://handicap.gouv.fr/plugins/contrib/chosen/lib/chosen/chosen.jquery.js?1615895465](https://handicap.gouv.fr/plugins/contrib/chosen/lib/chosen/chosen.jquery.js?1615895465)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/](https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://handicap.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1615895465](https://handicap.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1615895465)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://handicap.gouv.fr/plugins-dist/jquery_ui/prive/javascript/ui/jquery-ui.js?1615895465](https://handicap.gouv.fr/plugins-dist/jquery_ui/prive/javascript/ui/jquery-ui.js?1615895465)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [https://handicap.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615895465](https://handicap.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615895465)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://handicap.gouv.fr/prive/javascript/jquery.js?1615895465](https://handicap.gouv.fr/prive/javascript/jquery.js?1615895465)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
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
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/](https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/agenda/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/agenda/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/grands-dossiers/](https://handicap.gouv.fr/grands-dossiers/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/presse/](https://handicap.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/](https://handicap.gouv.fr/vivre-avec-un-handicap/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/](https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
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
  
  
  
* URL: [https://handicap.gouv.fr/robots.txt](https://handicap.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/](https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/](https://handicap.gouv.fr/vivre-avec-un-handicap/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://handicap.gouv.fr/sitemap.xml](https://handicap.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, must-revalidate`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://handicap.gouv.fr/grands-dossiers/](https://handicap.gouv.fr/grands-dossiers/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/](https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/)
  
  
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

  
  
  
  
### Insufficient Site Isolation Against Spectre Vulnerability
##### Low (Medium)
  
  
  
  
#### Description
<p>Cross-Origin-Opener-Policy header is a response header that allows a site to control if others included documents share the same browsing context. Sharing the same browsing context with untrusted documents might lead to data leak.</p>
  
  
  
* URL: [https://handicap.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fhandicap.gouv.fr%2F](https://handicap.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fhandicap.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Opener-Policy`
  
  
  
  
* URL: [https://handicap.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fhandicap.gouv.fr%2F](https://handicap.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fhandicap.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Embedder-Policy`
  
  
  
  
* URL: [https://handicap.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fhandicap.gouv.fr%2F](https://handicap.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fhandicap.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Resource-Policy`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the application/web server sets the Cross-Origin-Opener-Policy header appropriately, and that it sets the Cross-Origin-Opener-Policy header to 'same-origin' for documents.</p><p>'same-origin-allow-popups' is considered as less secured and should be avoided.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that supports the Cross-Origin-Opener-Policy header (https://caniuse.com/mdn-http_headers_cross-origin-opener-policy).</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy

  
#### CWE Id : 16
  
#### WASC Id : 14
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://handicap.gouv.fr/local/](https://handicap.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-css/](https://handicap.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-js/](https://handicap.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/infos-speciales-coronavirus/article/information-covid-19-et-confinement](https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/infos-speciales-coronavirus/article/information-covid-19-et-confinement)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/plugins/](https://handicap.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/squelettes/](https://handicap.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-gd2/](https://handicap.gouv.fr/local/cache-gd2/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/plugins-dist/](https://handicap.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-vignettes/](https://handicap.gouv.fr/local/cache-vignettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/squelettes-dist/](https://handicap.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/lib/](https://handicap.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/prive/](https://handicap.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/](https://handicap.gouv.fr/vivre-avec-un-handicap/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `DT9DpQCYx2+9Fw8qJlLL3fNyljz02T4BnbVpj7xS6waVNkYxzo0GXKKWuiXWAZ8QF4VN3sShuO8IyN/CWuHiezLqOhk=`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://handicap.gouv.fr/grands-dossiers/](https://handicap.gouv.fr/grands-dossiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `ruiqSaHsqqbZztkqJlLL3fNyljz02SOcd/kIKU18GWmDTZ0rQZ9KN+Cn5P1xH9hfm0aKCOBpGUuU+yF0/cFIL8+8HJA=`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/](https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/agenda/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/](https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://handicap.gouv.fr/robots.txt](https://handicap.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `u4fzLuP9JV5lLGcqJlLL3fNyljz02ZF7+Fb7iXRFx/r6tT0Wx3hJM0bSh8gDI9oeecZPGAq+TsoY46BI3UAh2Nd8W2A=`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>��?M\x001f�٥���\x000f�a�iu��k��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-vignettes/](https://handicap.gouv.fr/local/cache-vignettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/lib/](https://handicap.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/prive/](https://handicap.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/plugins-dist/](https://handicap.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/squelettes/](https://handicap.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/](https://handicap.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/squelettes-dist/](https://handicap.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-js/](https://handicap.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-css/](https://handicap.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-gd2/](https://handicap.gouv.fr/local/cache-gd2/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/infos-speciales-coronavirus/article/information-covid-19-et-confinement](https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/infos-speciales-coronavirus/article/information-covid-19-et-confinement)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/plugins/](https://handicap.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/](https://handicap.gouv.fr/vivre-avec-un-handicap/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/](https://handicap.gouv.fr/vivre-avec-un-handicap/)
  
  
  * Method: `GET`
  
  
  * Evidence: `From`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `From`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/](https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `From`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://handicap.gouv.fr/grands-dossiers/](https://handicap.gouv.fr/grands-dossiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://handicap.gouv.fr/grands-dossiers/](https://handicap.gouv.fr/grands-dossiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `From`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/](https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/)
  
  
  * Method: `GET`
  
  
  * Evidence: `From`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 10
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="text/javascript">tarteaucitron.user.atLibUrl = '586362';</p><p>tarteaucitron.user.atMore = function () { /* add here you", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://handicap.gouv.fr/presse/](https://handicap.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://handicap.gouv.fr/grands-dossiers/](https://handicap.gouv.fr/grands-dossiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/](https://handicap.gouv.fr/vivre-avec-un-handicap/travailler/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/](https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://handicap.gouv.fr/vivre-avec-un-handicap/](https://handicap.gouv.fr/vivre-avec-un-handicap/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/](https://handicap.gouv.fr/le-secretariat-d-etat/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/agenda/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/sophie-cluzel/agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
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
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-vignettes/](https://handicap.gouv.fr/local/cache-vignettes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-css/](https://handicap.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://handicap.gouv.fr/ecrire/](https://handicap.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-gd2/](https://handicap.gouv.fr/local/cache-gd2/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/](https://handicap.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://handicap.gouv.fr/plugins-dist/](https://handicap.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-js/](https://handicap.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
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

  
  
  
  
### Retrieved from Cache
##### Informational (Medium)
  
  
  
  
#### Description
<p>The content was retrieved from a shared cache. If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance. </p>
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-less/bootstrap-cssify-4e67658.css?1615908388](https://handicap.gouv.fr/local/cache-less/bootstrap-cssify-4e67658.css?1615908388)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 161`
  
  
  
  
* URL: [https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/presse/](https://handicap.gouv.fr/le-secretariat-d-etat/la-secretaire-d-etat/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 121`
  
  
  
  
* URL: [https://handicap.gouv.fr/IMG/siteon0.png?1607588791](https://handicap.gouv.fr/IMG/siteon0.png?1607588791)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 2`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/adapt-img/400/10x/local/cache-gd2/33/e9eab72054f2e8177a3de80de39471.png?1613123743](https://handicap.gouv.fr/local/adapt-img/400/10x/local/cache-gd2/33/e9eab72054f2e8177a3de80de39471.png?1613123743)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-css/cssdyn-css_barre_outils_icones_css-9c1ce809.css?1614872642](https://handicap.gouv.fr/local/cache-css/cssdyn-css_barre_outils_icones_css-9c1ce809.css?1614872642)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 163`
  
  
  
  
* URL: [https://handicap.gouv.fr/squelettes/favicon.ico](https://handicap.gouv.fr/squelettes/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 249`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-less/responsive-cssify-40b851d.css?1615908388](https://handicap.gouv.fr/local/cache-less/responsive-cssify-40b851d.css?1615908388)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 162`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-vignettes/L584xH365/03001203e041d767e2c3072e13bf93-d3864.png?1614700225](https://handicap.gouv.fr/local/cache-vignettes/L584xH365/03001203e041d767e2c3072e13bf93-d3864.png?1614700225)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 293`
  
  
  
  
* URL: [https://handicap.gouv.fr/plugins/contrib/blocsdepliables/css/blocs.css?1615895465](https://handicap.gouv.fr/plugins/contrib/blocsdepliables/css/blocs.css?1615895465)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 1`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-vignettes/L584xH365/06358540200c75499405a8bcb4fb5c-5acd5.png?1610463493](https://handicap.gouv.fr/local/cache-vignettes/L584xH365/06358540200c75499405a8bcb4fb5c-5acd5.png?1610463493)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 232`
  
  
  
  
* URL: [https://handicap.gouv.fr/local/cache-vignettes/L584xH365/3c6fd73c40773c68556c3d3d3bb287-9701f.png?1616074158](https://handicap.gouv.fr/local/cache-vignettes/L584xH365/3c6fd73c40773c68556c3d3d3bb287-9701f.png?1616074158)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 231`
  
  
  
  
Instances: 12
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request.</p>
  
### Other information
<p>The presence of the 'Age' header indicates that that a HTTP/1.1 compliant caching server is in use.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://handicap.gouv.fr/robots.txt](https://handicap.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://handicap.gouv.fr](https://handicap.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://handicap.gouv.fr/sitemap.xml](https://handicap.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1614872642`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612951629`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1614700225`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616074158`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1607588791`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1611336599`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615908388`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612795221`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1611337506`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1610463493`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1599603268`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1614851207`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1603817834`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615895465`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612951240`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1607613546`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1613123743`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612792283`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1604487270`
  
  
  
  
* URL: [https://handicap.gouv.fr/](https://handicap.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612456303`
  
  
  
  
Instances: 28
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1614872642, which evaluates to: 2021-03-04 15:44:02</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://handicap.gouv.fr/spip.php?page=plan](https://handicap.gouv.fr/spip.php?page=plan)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://handicap.gouv.fr/spip.php?page=plan](https://handicap.gouv.fr/spip.php?page=plan)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://handicap.gouv.fr/spip.php?page=plan](https://handicap.gouv.fr/spip.php?page=plan)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://handicap.gouv.fr/spip.php?page=plan](https://handicap.gouv.fr/spip.php?page=plan)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://handicap.gouv.fr/spip.php?page=plan](https://handicap.gouv.fr/spip.php?page=plan)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 5
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://handicap.gouv.fr/spip.php?page=plan</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [a] tag [id] attribute </p><p></p><p>The user input found was:</p><p>page=plan</p><p></p><p>The user-controlled value was:</p><p>plan</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
