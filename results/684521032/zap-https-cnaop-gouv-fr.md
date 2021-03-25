
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:13:08


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 10 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Source Code Disclosure - Perl | Medium | 1 | 
| Source Code Disclosure - PHP | Medium | 1 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 5 | 
| Cookie No HttpOnly Flag | Low | 7 | 
| Cookie Without SameSite Attribute | Low | 11 | 
| Cookie Without Secure Flag | Low | 7 | 
| Dangerous JS Functions | Low | 6 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Insufficient Site Isolation Against Spectre Vulnerability | Low | 12 | 
| Strict-Transport-Security Header Not Set | Low | 12 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 12 | 
| Cookie Poisoning | Informational | 6 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 7 | 
| Storable and Cacheable Content | Informational | 4 | 
| Timestamp Disclosure - Unix | Informational | 2 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 10 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://cnaop.gouv.fr/presentation-du-cnaop-4.html](https://cnaop.gouv.fr/presentation-du-cnaop-4.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-rapports-d-activite.html](https://cnaop.gouv.fr/les-rapports-d-activite.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-partenaires.html](https://cnaop.gouv.fr/les-partenaires.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-conseil.html](https://cnaop.gouv.fr/le-conseil.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr](https://cnaop.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-correspondants-departementaux-13.html](https://cnaop.gouv.fr/les-correspondants-departementaux-13.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presse-communication.html](https://cnaop.gouv.fr/presse-communication.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/lib/](https://cnaop.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-cnaop.html](https://cnaop.gouv.fr/le-cnaop.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-secretariat-general.html](https://cnaop.gouv.fr/le-secretariat-general.html)
  
  
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

  
  
  
  
### Source Code Disclosure - Perl
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - Perl</p>
  
  
  
* URL: [https://cnaop.gouv.fr/IMG/pdf/vous_allez_accoucher_version_anglaise.pdf](https://cnaop.gouv.fr/IMG/pdf/vous_allez_accoucher_version_anglaise.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#5DLV`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#5DLV</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://cnaop.gouv.fr/IMG/pdf/ANNEXES.pdf](https://cnaop.gouv.fr/IMG/pdf/ANNEXES.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=¦n®R\x0017a#Ê²X®ñÊ8^¼nî\x0000ãÑ ~GJH\x0000p\x0007Rk"ÓÄ\x0016Ï|$Ö;kR\\x000bQ÷\x0003ß\x000f\x0018ÆM]Õm\x001aÿ\x0000Kº´I<¶&@þ\x0015ËÍá½RâðÝLKóFÞL72Æ\x001bj\x0014#r¨#yôÅ\x0000tÇWÓDYÔ-\x0003ñòùËFG\x0019ôæûWNÙ\x000bý¾×lç\x00117¸ç\x0018^yü+Ã:2$\x0016úzÂM¾Å7\x0012\x0012«\x001b\x0016Ûç\x001dÂ?µXØ yd	+gæ8\x0004ìÉ\x001cc\x001d;óÒ upêv\x0017\x0012 ¾¶@	(«\x001c\x000e¼\x0003Ú©ZxÒyïÚÇmjP\x000bp
>à{ð\x0001ã\x0018É¬Iü7ª\ùÂÊ\x0015[\x0019f$	W\x00038úóDÞ\x001bÕ./
ÔÉd¿4mäÃs,a¶¡B7*89\x0007LP\x0007Q\x001e§a-À·öÙç<ÖU,xÏLç§5h\x0001$à\x000e¤Ö\x0016¤\i×\x000cÑ[GlðÇ\x001ck\x0014®ì»sÇÌ:|ÝsÛòÓÕm\x001aÿ\x0000Kº´I<¶&@þ\x0014? [êR´ñ\x0005¤óß	'µÚÔ \x0017\x0002à\x0014}À÷à\x0003Æ1W×P³k¶[¨\x001aw]ë\x0018\x0016eõ\x0003Ò¹Y¼7ª\^\x001b©É~hÛÉæXÃmBnU\x0004pr\x000f>­
;C¹±Ômäm µ|è;çäÚ\x0000\x000c\x000f#ûÀ\x00061@Y\x0012\x0018I\x001dQ\x0010\x0016fs\x0000îOaTÓW°Û\x0012Í}d:©Ø·
s»¦\x000f\x0019\x0007±Ç5féd{Y\x0010¦FB\x00149ÀÎ;\x001få\\x001cÕÑ!Ù§î[\x0018í7yïÕ\6~ç|P·þ¼Æk§mS¸}ªÚ[7-Ã]*íl\x0003÷Olg=Aâ¯K­iP>Ùµ+(Û\x0000áç@pFG~â±\x0017GÕÆ ÷¦;\x0002ßiiÖ#;`Ñ \x0011Ô?
ê0Z^ÛFlÝf±\x0016¨Í#\x000c\x001c±<m8\x001f9Ç?Â=x:\x0007S¤UÓå#þÕÝØªªÌ¤±\x001d@\x0019ê*\x000b\x0010iVðù­nÉæ¬$¤ªv±=ùã\x001cì+\x0007û\x0003VûKÊ°éÈ\x001ax&ÀÎ\x0004k·\x001fêûÒZøoT3³Z4íä\x0000JÁs\x0013\x001cÂ\x000f\x0000\x000e:{Ð\x001d\x000eu[1jnf¼³H7YEÀ(àG\x0003>Ôÿ\x0000íM?í\x0002\x000f·ZùÄ\x0011ùË»$d\x000cg=+\x0002-\x0013TÖr/"ÏpþKJÅ\x0019e÷ÙÁ\x001d:r3Ò«'u+p#ìR¢m®ò²±\x0011\x001c6\x001cg§^ gWm{kvÒ­µÄS\x0018kÜ6ÓèqNºº·³Íu<pD½^F
?3Y\x000eu§½ÀÂ"`¢8ãbûqò@ sÂqÏ<ÔúÝ×Öá<Ô}êZFB§\x0004d\x0010\x000f<÷\x0004c<PÁ\x0012ÿ\x0000ké¤gûBÓ\x001b¶gÎ_½ã¯\T¶ÖªÍgu\x0005Â¯\x000cb>>¸®hè\x001a¬r+FÖ2âkyÉfhòÑ R\x0000
@\x0007\x0019Ïé[~\x001f²OÑà´º\x0011y±d\x0013\x0013\x0016SNy\x0003Ö\x0016®¯ml\x001aîâ(\x0003¶Õ28]ÇÐfÚ¼È×Áà\x001b¥S*æ1êÜñøÕ
Mº¿XM%@Ã|FÜã¶\x0008aÇ*G<r+&?\x000bO\x001bO¾;yß{´s½ÔÁg
£9þ!@â\x001dU¼ðÝ@[ÊÄã*èr\x000fãM¹¼µ³\x0008n®a9Ú¾kÜ}\x0006zÔ\x001aEµÅ¦\x001c7n0,X§NX¸\x0019<òp2yª:Öuywç[}ÖKgµ'$\x0005\x000cAÜ0\x000eO\x001d8Ï­\x000c\x0011nmgOG1%ý¸\x000f³Ê{Sàç>Ø¥ºÖ´ÛV)5\x001b\x0018î\x0010«áPç°=ÇåXg@ÔÒÆúÞ?²1x^7y\x0012±\x001f7ÉÔì\x001e¿xús {Û»èm¬Ì÷1$_i Á¿!ËÜ\x0001ÀêØç3@/3²]RÄÌ°\x001bÛApH_(L¥²F@\x0003­+jz¬ì×Ö¡`8ù«û³èÜñø×9>«K+¿`\x000b\x001bc=ò<£ÿ\x0000,ûm§nm­Âùvï<@*Oö¹·0
¸\x00100Dgè\x0018r~`º)\x0012hX^7\x0001ä\x0010{}UÓ`ÛN·áÑæ0¬È¡Tè\x0000\x001fÈUªl\x0010QE\x0014(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000ÀÔüEý}4SÛ\x0001\x0004QÜdÃÉÏÈ¤axàäzcßÄ·rÌ>Ð³6]Ð1TÜ1º0H=3=ëZãF°º¸içÌv\x00040gb§+·;sãã5\x0011ðþb6F\x0011©iä,8Æ7\x0016ÎÜqÔº\x000cÃÄM
Ì×¦9¤\x0017pZ´VÛÝÕ]÷ôÀ$p9Âó4,º6M!ãXá\x0013È²JQÔoØ~R¿#¦G¥ZM\x001fÃ©4¶ÐÌ¨xñËÆÊ\x0016Êã<\x0011gÞ\x001e¡jq´Ñ3]#¯Ï\x001dì\x0018\x0003\x0012\x001fyæóø¦X\x0003Dtæ{Ñ3D!ÙÁÚÉÊ¡=\x0018\x000f»×¾9¤ÿ\x0000èÈWû,F<ÈãýìÅX4¹r»8ÇCéïWeÐ´{h¥`ñ(9¦{¹\x0001VÆ7o-Ç\x001d})°èZ-ßúD\x001b¥Vu|wr\x0015,£å<68\x0006"·×gÂ¶ºì"K\x0005H;Ù\x0007EÈëÐ\x0003í¬þ+»6wÒ\x001a=<î%°¬\x0001Àd\x0004õ\x0004tÏµkÃa¥Í§I¦E²khNÆL\ÆzåHíÏ\x001dª)¼5¥ÎXË\x0014îZ3\x001b\x0013u.YIÉ\x0004îç ëéGP,jñG6ï-ÅÄ\x0008ªX\x0018$(ÄãG$ç î}këR\x0019¦º¹.´ø-_\x000b#¹ù÷\x0001Ãg§·jé5\x001bK\x0003i\x0008¾á\x000269ºxðz\x000c°`Iú\x001bE°i`á.ð\x0015F9ÁÈÝó`ò7ghê\x001d\x000eaõ»\x000bhµ/:Y¥º[ð»Pá0?\x0018\x0000ã\x0019Ï5¹á¹'\x0006îÚôÊ×°²]§2+î\¼\x0000£¯\x0000~}jk
\x001aÄÏst-à[Èí<¸C»ï\x0000\x0018àg¾1N±ÓáZÁG¿~ôqÆ99;;\x001c f\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0015\x0012ÜB÷\x000f\x0002Í\x001bL3F\x0018\x0016Pz\x0012:
*«j\x0016IuöV¼·[ùäePÿ\x0000sV¨\x0000¢F`ªYU\x0003$À\x0014\x0000´TpO
Ì+5¼©4OÊ¼l\x0019OÐ
(¦E,sF²Dë$mÈe9\x0007ñ \x0007ÑE\x0014\x0000QEEö>Óöo:?´mßån\x001böôÎ:ãÞ%¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢¢â\x0018\x001a5hã2¶Ä\x000eÀooA¦¥ \x0002{»kg'¸'í]Â>=jF5#gQ#UIå±×\x0002\x001fE\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0007!¨}\x001dR;;nì¥¶®¢O3Êm<í'-öéV<%s\x001eË³4Öï<³ªùð¸ò§;\x00066\x000fP\x0007#Aü:9äò`]û\x0014¶ÕÆN;\x000càTv7I}c\x0005ÜA9ãY\x00147P\x0008Ï4 e?\x0010Em6ÉwsöDó\x0011b2\x0011Ã\x0002¤çdwâ¹iu½@D«m=¨y\x0015õ\x0000Û`Â®Ò\x000b+\x0001ã¹S]í\x0014\x0001ÂÇ«´w÷é±[ù×0­ÍÄX"\x0011ä~a\x000b
¹aÇÖ Äwñ#¼ºªFñÛ¬¡
F\x0004Í*\x000e\x0008Î\x00190Ø÷ÈÀ¯A¨ÄÝ\x0018|©0\x00107Ó>¼Qý~\x0001ÐÇñlñ/î¤iP#ªíbÃ
\x0018Ç­QÒ5mBóÄ2¤V¢ÜI"}~dÚ9G\x0000&pG9,AÏ\x0018®®¢¸¸Ú/2w\x0008äú?3BÜ:\x001cþ§4v~-µºÔ\x0019c²û+$3H?w\x001c¥¹Éè	\x0018äâ²¢Õ®£Ë{\x000biá£¹\x000c$¤mûåÍËq×µwTR\x0003]sP\x0013G
Ýû[N÷6àÄQ\x0001Xä@Xr½\x0003\x0012\x0001?BMI6««C§ÎËvï5ù\x0017,ñ¢¨&N\x001f8ÂsÐA â»ZdnÎ\x001btm\x001e\x0018»\x001c^	àþtÀâ"ÕïãÉ¸ñ\x0004*VÒY·Û\x0018X«|¼´c<g8\x0018ùxÇ5]|Må,i©Ã+I\x001d»É3_#xmü \x000c\x0019*q»Þ½
\x0000óÛ\x0011j\x0016Þo®[\x0019¢\x0016Û\x0018¤\«`\x0004¸n=r\x000e)òxPVµµÕmB$Ò¢ÞNèªøÛµI\x0008G g\x001c\x001e+¼getQ\x001b0lå0¿\þY§Ð\x0007\x00045ë§¸xYRd¸\x0001\x001aÁQån\x0004| ä?\x0003?ÎºO\x000bÜÁ.c\x0012^¥ÌËnãz\àz\x001cÃÖ¶k"mNÞ\x000bûÀmn\x001a{tq\x0005pÊäãn[Ô\x001c	ÀëÅ\x000b°>æ>·©¥¿zc»Xf\x0016p®WieÌ§?{Ã\x000eOLç\x0006¶<3{6¡¡Å5Ì%ÀgGa¡ç\x0000sv\x0015rÂý/ÈHä­æ0¸\x001d@\x0007#\x0004ñ*ÄÈ ¬m!È\x0018\ddõähé`{®=éCO¿U}LNÍ5»\x000fÞ¼É\x000f¤t;ºb³å×u6´y¡¾c*Äò\Â"OôFW\x0003iùs	ëÆA®ö\x0000â"×&º×RÎ=p¬r^<j\x0014E\x001f\x0019qé»{ûÖÿ\x0000od²Ð\x000b²C4Â9®vå.	\x001dA\x0003$\x0001;Ö¹ u f\x0003Ît}^ÿ\x0000Ê³´´¾µ$\x0019\x001ek\x0001ç#n\x0000lb[\x0018à\x0010FGZ¿{ªj6ú}öíVXî4âë+´q\x0001!f\x001eWUÇÝô®Þ\x0001$à\x000eô\x0001Æ\kW\x0016Úä\x0016ßÚìö¤I\x0004J0Ñ³\x0006\x0004/<ã\x0007Û\x0007Nðåüº¯cq> Ò<º~ve\x0002»o!¸\x0003¯\x0000*ì©;:\x0006hÚ3ÏÊØÈü\x0014 9\x0012jwV:E©`lÌ°ÄQ\x001bÌ6\x0002úuô¬÷Öõ/"æTÔÁÙz-ßqRÝ
Á\x000e>l®H#ñæºÓ§)Ö\x0006£çÍæ\x0008¼+åÙ·9ôÎsïVe¸)aG
ó1X×»\x0010	? 4-¿®àÿ\x0000¯¸á_Ä7ÖÎþ~·lï
@Å#òÌr\x0016«`\x0007\x001bpÜzäqTîµé|Ñ~ue÷ìrâ2¨<ó\x0013÷`\x0011Ï\x0003¾O\x0019¯KªwWékyinñJÆé\x0011×\x001bA
[\x0007'=\x0001í@\x001cÜZ¥ÿ\x0000	
ZF\x0006·FjÎÊ\x001eæ6\x0019,¡cù¹<\x0010@\x001by\x001dêÿ\x0000µ\x000bÛ%³KIâ´Iîe`ª\x000f\x0012UÉõ\x001d±[Ñ±xÕ\x001a6a¯±Á#ò4ú\x0018#Ä\x0017Qê
·\x001aÄ
¶æ\x0008%\x0008\x0010_\x0004¨l\x0003ÓÓ¾k¢ñ\x0005ìih\x0005ÏØ mÝaO6>ð d2kb\x0010z\x001cÐ\x0007\x001d6³z^Rê!¥À"Dª/\x0011±¾AO\x001c\x000e\x00069È5<Kwö}ßÛèXÛÜI÷aÈdl û¿Ä?>`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=¦n®R\x0017a#Ê²X®ñÊ8^¼nî\x0000ãÑ ~GJH\x0000p\x0007Rk"ÓÄ\x0016Ï|$Ö;kR\\x000bQ÷\x0003ß\x000f\x0018ÆM]Õm\x001aÿ\x0000Kº´I<¶&@þ\x0015ËÍá½RâðÝLKóFÞL72Æ\x001bj\x0014#r¨#yôÅ\x0000tÇWÓDYÔ-\x0003ñòùËFG\x0019ôæûWNÙ\x000bý¾×lç\x00117¸ç\x0018^yü+Ã:2$\x0016úzÂM¾Å7\x0012\x0012«\x001b\x0016Ûç\x001dÂ?µXØ yd	+gæ8\x0004ìÉ\x001cc\x001d;óÒ upêv\x0017\x0012 ¾¶@	(«\x001c\x000e¼\x0003Ú©ZxÒyïÚÇmjP\x000bp</p><p>>à{ð\x0001ã\x0018É¬Iü7ª\ùÂÊ\x0015[\x0019f$	W\x00038úóDÞ\x001bÕ./
ÔÉd¿4mäÃs,a¶¡B7*89\x0007LP\x0007Q\x001e§a-À·öÙç<ÖU,xÏLç§5h\x0001$à\x000e¤Ö\x0016¤\i×\x000cÑ[GlðÇ\x001ck\x0014®ì»sÇÌ:|ÝsÛòÓÕm\x001aÿ\x0000Kº´I<¶&@þ\x0014? [êR´ñ\x0005¤óß	'µÚÔ \x0017\x0002à\x0014}À÷à\x0003Æ1W×P³k¶[¨\x001aw]ë\x0018\x0016eõ\x0003Ò¹Y¼7ª\^\x001b©É~hÛÉæXÃmBnU\x0004pr\x000f>­
;C¹±Ômäm µ|è;çäÚ\x0000\x000c\x000f#ûÀ\x00061@Y\x0012\x0018I\x001dQ\x0010\x0016fs\x0000îOaTÓW°Û\x0012Í}d:©Ø·</p><p>s»¦\x000f\x0019\x0007±Ç5féd{Y\x0010¦FB\x00149ÀÎ;\x001få\\x001cÕÑ!Ù§î[\x0018í7yïÕ\6~ç|P·þ¼Æk§mS¸}ªÚ[7-Ã]*íl\x0003÷Olg=Aâ¯K­iP>Ùµ+(Û\x0000áç@pFG~â±\x0017GÕÆ ÷¦;\x0002ßiiÖ#;`Ñ \x0011Ô?
ê0Z^ÛFlÝf±\x0016¨Í#\x000c\x001c±<m8\x001f9Ç?Â=x:\x0007S¤UÓå#þÕÝØªªÌ¤±\x001d@\x0019ê*\x000b\x0010iVðù­nÉæ¬$¤ªv±=ùã\x001cì+\x0007û\x0003VûKÊ°éÈ\x001ax&ÀÎ\x0004k·\x001fêûÒZøoT3³Z4íä\x0000JÁs\x0013\x001cÂ\x000f\x0000\x000e:{Ð\x001d\x000eu[1jnf¼³H7YEÀ(àG\x0003>Ôÿ\x0000íM?í\x0002\x000f·ZùÄ\x0011ùË»$d\x000cg=+\x0002-\x0013TÖr/"ÏpþKJÅ\x0019e÷ÙÁ\x001d:r3Ò«'u+p#ìR¢m®ò²±\x0011\x001c6\x001cg§^ gWm{kvÒ­µÄS\x0018kÜ6ÓèqNºº·³Íu<pD½^F</p><p>?3Y\x000eu§½ÀÂ"`¢8ãbûqò@ sÂqÏ<ÔúÝ×Öá<Ô}êZFB§\x0004d\x0010\x000f<÷\x0004c<PÁ\x0012ÿ\x0000ké¤gûBÓ\x001b¶gÎ_½ã¯\T¶ÖªÍgu\x0005Â¯\x000cb>>¸®hè\x001a¬r+FÖ2âkyÉfhòÑ R\x0000</p><p>@\x0007\x0019Ïé[~\x001f²OÑà´º\x0011y±d\x0013\x0013\x0016SNy\x0003Ö\x0016®¯ml\x001aîâ(\x0003¶Õ28]ÇÐfÚ¼È×Áà\x001b¥S*æ1êÜñøÕ
Mº¿XM%@Ã|FÜã¶\x0008aÇ*G<r+&?\x000bO\x001bO¾;yß{´s½ÔÁg
£9þ!@â\x001dU¼ðÝ@[ÊÄã*èr\x000fãM¹¼µ³\x0008n®a9Ú¾kÜ}\x0006zÔ\x001aEµÅ¦\x001c7n0,X§NX¸\x0019<òp2yª:Öuywç[}ÖKgµ'$\x0005\x000cAÜ0\x000eO\x001d8Ï­\x000c\x0011nmgOG1%ý¸\x000f³Ê{Sàç>Ø¥ºÖ´ÛV)5\x001b\x0018î\x0010«áPç°=ÇåXg@ÔÒÆúÞ?²1x^7y\x0012±\x001f7ÉÔì\x001e¿xús {Û»èm¬Ì÷1$_i Á¿!ËÜ\x0001ÀêØç3@/3²]RÄÌ°\x001bÛApH_(L¥²F@\x0003­+jz¬ì×Ö¡`8ù«û³èÜñø×9>«K+¿`\x000b\x001bc=ò<£ÿ\x0000,ûm§nm­Âùvï<@*Oö¹·0
¸\x00100Dgè\x0018r~`º)\x0012hX^7\x0001ä\x0010{}UÓ`ÛN·áÑæ0¬È¡Tè\x0000\x001fÈUªl\x0010QE\x0014(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000(¢\x0000ÀÔüEý}4SÛ\x0001\x0004QÜdÃÉÏÈ¤axàäzcßÄ·rÌ>Ð³6]Ð1TÜ1º0H=3=ëZãF°º¸içÌv\x00040gb§+·;sãã5\x0011ðþb6F\x0011©iä,8Æ7\x0016ÎÜqÔº\x000cÃÄM
Ì×¦9¤\x0017pZ´VÛÝÕ]÷ôÀ$p9Âó4,º6M!ãXá\x0013È²JQÔoØ~R¿#¦G¥ZM\x001fÃ©4¶ÐÌ¨xñËÆÊ\x0016Êã<\x0011gÞ\x001e¡jq´Ñ3]#¯Ï\x001dì\x0018\x0003\x0012\x001fyæóø¦X\x0003Dtæ{Ñ3D!ÙÁÚÉÊ¡=\x0018\x000f»×¾9¤ÿ\x0000èÈWû,F<ÈãýìÅX4¹r»8ÇCéïWeÐ´{h¥`ñ(9¦{¹\x0001VÆ7o-Ç\x001d})°èZ-ßúD\x001b¥Vu|wr\x0015,£å<68\x0006"·×gÂ¶ºì"K\x0005H;Ù\x0007EÈëÐ\x0003í¬þ+»6wÒ\x001a=<î%°¬\x0001Àd\x0004õ\x0004tÏµkÃa¥Í§I¦E²khNÆL\ÆzåHíÏ\x001dª)¼5¥ÎXË\x0014îZ3\x001b\x0013u.YIÉ\x0004îç ëéGP,jñG6ï-ÅÄ\x0008ªX\x0018$(ÄãG$ç î}këR\x0019¦º¹.´ø-_\x000b#¹ù÷\x0001Ãg§·jé5\x001bK\x0003i\x0008¾á\x000269ºxðz\x000c°`Iú\x001bE°i`á.ð\x0015F9ÁÈÝó`ò7ghê\x001d\x000eaõ»\x000bhµ/:Y¥º[ð»Pá0?\x0018\x0000ã\x0019Ï5¹á¹'\x0006îÚôÊ×°²]§2+î\¼\x0000£¯\x0000~}jk
\x001aÄÏst-à[Èí<¸C»ï\x0000\x0018àg¾1N±ÓáZÁG¿~ôqÆ99;;\x001c f\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0015\x0012ÜB÷\x000f\x0002Í\x001bL3F\x0018\x0016Pz\x0012:</p><p>*«j\x0016IuöV¼·[ùäePÿ\x0000sV¨\x0000¢F`ªYU\x0003$À\x0014\x0000´TpO
Ì+5¼©4OÊ¼l\x0019OÐ</p><p>(¦E,sF²Dë$mÈe9\x0007ñ \x0007ÑE\x0014\x0000QEEö>Óöo:?´mßån\x001böôÎ:ãÞ%¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢¢â\x0018\x001a5hã2¶Ä\x000eÀooA¦¥ \x0002{»kg'¸'í]Â>=jF5#gQ#UIå±×\x0002\x001fE\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0001E\x0014P\x0007!¨}\x001dR;;nì¥¶®¢O3Êm<í'-öéV<%s\x001eË³4Öï<³ªùð¸ò§;\x00066\x000fP\x0007#Aü:9äò`]û\x0014¶ÕÆN;\x000càTv7I}c\x0005ÜA9ãY\x00147P\x0008Ï4 e?\x0010Em6ÉwsöDó\x0011b2\x0011Ã\x0002¤çdwâ¹iu½@D«m=¨y\x0015õ\x0000Û`Â®Ò\x000b+\x0001ã¹S]í\x0014\x0001ÂÇ«´w÷é±[ù×0­ÍÄX"\x0011ä~a\x000b
¹aÇÖ Äwñ#¼ºªFñÛ¬¡</p><p>F\x0004Í*\x000e\x0008Î\x00190Ø÷ÈÀ¯A¨ÄÝ\x0018|©0\x00107Ó>¼Qý~\x0001ÐÇñlñ/î¤iP#ªíbÃ
\x0018Ç­QÒ5mBóÄ2¤V¢ÜI"}~dÚ9G\x0000&pG9,AÏ\x0018®®¢¸¸Ú/2w\x0008äú?3BÜ:\x001cþ§4v~-µºÔ\x0019c²û+$3H?w\x001c¥¹Éè	\x0018äâ²¢Õ®£Ë{\x000biá£¹\x000c$¤mûåÍËq×µwTR\x0003]sP\x0013G
Ýû[N÷6àÄQ\x0001Xä@Xr½\x0003\x0012\x0001?BMI6««C§ÎËvï5ù\x0017,ñ¢¨&N\x001f8ÂsÐA â»ZdnÎ\x001btm\x001e\x0018»\x001c^	àþtÀâ"ÕïãÉ¸ñ\x0004*VÒY·Û\x0018X«|¼´c<g8\x0018ùxÇ5]|Må,i©Ã+I\x001d»É3_#xmü \x000c\x0019*q»Þ½</p><p>\x0000óÛ\x0011j\x0016Þo®[\x0019¢\x0016Û\x0018¤\«`\x0004¸n=r\x000e)òxPVµµÕmB$Ò¢ÞNèªøÛµI\x0008G g\x001c\x001e+¼getQ\x001b0lå0¿\þY§Ð\x0007\x00045ë§¸xYRd¸\x0001\x001aÁQån\x0004| ä?\x0003?ÎºO\x000bÜÁ.c\x0012^¥ÌËnãz\àz\x001cÃÖ¶k"mNÞ\x000bûÀmn\x001a{tq\x0005pÊäãn[Ô\x001c	ÀëÅ\x000b°>æ>·©¥¿zc»Xf\x0016p®WieÌ§?{Ã\x000eOLç\x0006¶<3{6¡¡Å5Ì%ÀgGa¡ç\x0000sv\x0015rÂý/ÈHä­æ0¸\x001d@\x0007#\x0004ñ*ÄÈ ¬m!È\x0018\ddõähé`{®=éCO¿U}LNÍ5»\x000fÞ¼É\x000f¤t;ºb³å×u6´y¡¾c*Äò\Â"OôFW\x0003iùs	ëÆA®ö\x0000â"×&º×RÎ=p¬r^<j\x0014E\x001f\x0019qé»{ûÖÿ\x0000od²Ð\x000b²C4Â9®vå.	\x001dA\x0003$\x0001;Ö¹ u f\x0003Ît}^ÿ\x0000Ê³´´¾µ$\x0019\x001ek\x0001ç#n\x0000lb[\x0018à\x0010FGZ¿{ªj6ú}öíVXî4âë+´q\x0001!f\x001eWUÇÝô®Þ\x0001$à\x000eô\x0001Æ\kW\x0016Úä\x0016ßÚìö¤I\x0004J0Ñ³\x0006\x0004/<ã\x0007Û\x0007Nðåüº¯cq> Ò<º~ve\x0002»o!¸\x0003¯\x0000*ì©;:\x0006hÚ3ÏÊØÈü\x0014 9\x0012jwV:E©`lÌ°ÄQ\x001bÌ6\x0002úuô¬÷Öõ/"æTÔÁÙz-ßqRÝ</p><p>Á\x000e>l®H#ñæºÓ§)Ö\x0006£çÍæ\x0008¼+åÙ·9ôÎsïVe¸)aG</p><p>ó1X×»\x0010	? 4-¿®àÿ\x0000¯¸á_Ä7ÖÎþ~·lï</p><p>@Å#òÌr\x0016«`\x0007\x001bpÜzäqTîµé|Ñ~ue÷ìrâ2¨<ó\x0013÷`\x0011Ï\x0003¾O\x0019¯KªwWékyinñJÆé\x0011×\x001bA</p><p>[\x0007'=\x0001í@\x001cÜZ¥ÿ\x0000	</p><p>ZF\x0006·FjÎÊ\x001eæ6\x0019,¡cù¹<\x0010@\x001by\x001dêÿ\x0000µ\x000bÛ%³KIâ´Iîe`ª\x000f\x0012UÉõ\x001d±[Ñ±xÕ\x001a6a¯±Á#ò4ú\x0018#Ä\x0017Qê</p><p>·\x001aÄ
¶æ\x0008%\x0008\x0010_\x0004¨l\x0003ÓÓ¾k¢ñ\x0005ìih\x0005ÏØ mÝaO6>ð d2kb\x0010z\x001cÐ\x0007\x001d6³z^Rê!¥À"Dª/\x0011±¾AO\x001c\x000e\x00069È5<Kwö}ßÛèXÛÜI÷aÈdl û¿Ä?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://cnaop.gouv.fr/prive/javascript/jquery.js?1615549973](https://cnaop.gouv.fr/prive/javascript/jquery.js?1615549973)
  
  
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
  
  
  
* URL: [https://cnaop.gouv.fr/le-secretariat-general.html](https://cnaop.gouv.fr/le-secretariat-general.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://cnaop.gouv.fr](https://cnaop.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-correspondants-departementaux-13.html](https://cnaop.gouv.fr/les-correspondants-departementaux-13.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presse-communication.html](https://cnaop.gouv.fr/presse-communication.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://cnaop.gouv.fr/mediatheque.html](https://cnaop.gouv.fr/mediatheque.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-conseil.html](https://cnaop.gouv.fr/le-conseil.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-rapports-d-activite.html](https://cnaop.gouv.fr/les-rapports-d-activite.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presentation-du-cnaop-4.html](https://cnaop.gouv.fr/presentation-du-cnaop-4.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-partenaires.html](https://cnaop.gouv.fr/les-partenaires.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-cnaop.html](https://cnaop.gouv.fr/le-cnaop.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://cnaop.gouv.fr/plan-du-site.html](https://cnaop.gouv.fr/plan-du-site.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://cnaop.gouv.fr/ecrire/](https://cnaop.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 40 [https://cnaop.gouv.fr/spip.php?page=plan].</p><p>Predicted response size: 340.</p><p>Response Body Length: 407.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://cnaop.gouv.fr/lib/](https://cnaop.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Parameter: `PHPSESSID`
  
  
  * Evidence: `Set-Cookie: PHPSESSID`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
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
  
  
  
* URL: [https://cnaop.gouv.fr](https://cnaop.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-cnaop-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-cnaop-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?page=contact](https://cnaop.gouv.fr/spip.php?page=contact)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_session`
  
  
  * Evidence: `Set-Cookie: spip_session`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-cnaop-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-cnaop-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
* URL: [https://cnaop.gouv.fr/robots.txt](https://cnaop.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-cnaop-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-cnaop-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://cnaop.gouv.fr/lib/](https://cnaop.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Parameter: `PHPSESSID`
  
  
  * Evidence: `Set-Cookie: PHPSESSID`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang`
  
  
  * Evidence: `Set-Cookie: spip_lang`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `spip_lang_ecrire`
  
  
  * Evidence: `Set-Cookie: spip_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/lib/](https://cnaop.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Parameter: `PHPSESSID`
  
  
  * Evidence: `Set-Cookie: PHPSESSID`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://cnaop.gouv.fr/squelettes/script/dimensions.js](https://cnaop.gouv.fr/squelettes/script/dimensions.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://cnaop.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js](https://cnaop.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://cnaop.gouv.fr/prive/javascript/jquery.form.js?1615549973](https://cnaop.gouv.fr/prive/javascript/jquery.form.js?1615549973)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://cnaop.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615549973](https://cnaop.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615549973)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://cnaop.gouv.fr/prive/javascript/jquery.js?1615549973](https://cnaop.gouv.fr/prive/javascript/jquery.js?1615549973)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://cnaop.gouv.fr/prive/javascript/ajaxCallback.js?1615549973](https://cnaop.gouv.fr/prive/javascript/ajaxCallback.js?1615549973)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://cnaop.gouv.fr/le-cnaop.html](https://cnaop.gouv.fr/le-cnaop.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-rapports-d-activite.html](https://cnaop.gouv.fr/les-rapports-d-activite.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-correspondants-departementaux-13.html](https://cnaop.gouv.fr/les-correspondants-departementaux-13.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-partenaires.html](https://cnaop.gouv.fr/les-partenaires.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presentation-du-cnaop-4.html](https://cnaop.gouv.fr/presentation-du-cnaop-4.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr](https://cnaop.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-conseil.html](https://cnaop.gouv.fr/le-conseil.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/lib/](https://cnaop.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-secretariat-general.html](https://cnaop.gouv.fr/le-secretariat-general.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presse-communication.html](https://cnaop.gouv.fr/presse-communication.html)
  
  
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
  
  
  
* URL: [https://cnaop.gouv.fr/le-cnaop.html](https://cnaop.gouv.fr/le-cnaop.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presse-communication.html](https://cnaop.gouv.fr/presse-communication.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-secretariat-general.html](https://cnaop.gouv.fr/le-secretariat-general.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presentation-du-cnaop-4.html](https://cnaop.gouv.fr/presentation-du-cnaop-4.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-correspondants-departementaux-13.html](https://cnaop.gouv.fr/les-correspondants-departementaux-13.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cnaop.gouv.fr/sitemap.xml](https://cnaop.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cnaop.gouv.fr/robots.txt](https://cnaop.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-partenaires.html](https://cnaop.gouv.fr/les-partenaires.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cnaop.gouv.fr](https://cnaop.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-conseil.html](https://cnaop.gouv.fr/le-conseil.html)
  
  
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
<p>Cross-Origin-Embedder-Policy header is a response header that prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using CORP or CORS).</p>
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Embedder-Policy`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Drecherche%26amp%3Brecherche%3DRechercher](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Drecherche%26amp%3Brecherche%3DRechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Resource-Policy`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2F](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Embedder-Policy`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Drecherche%26amp%3Brecherche%3DRechercher](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Drecherche%26amp%3Brecherche%3DRechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Embedder-Policy`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2F](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Resource-Policy`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Opener-Policy`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Dplan](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Dplan)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Opener-Policy`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Dplan](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Dplan)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Resource-Policy`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2F](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Opener-Policy`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Drecherche%26amp%3Brecherche%3DRechercher](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Drecherche%26amp%3Brecherche%3DRechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Opener-Policy`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Dplan](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Fpage%3Dplan)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Embedder-Policy`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Resource-Policy`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that the application/web server sets the Cross-Origin-Embedder-Policy header appropriately, and that it sets the Cross-Origin-Embedder-Policy header to 'require-corp' for documents.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that supports the Cross-Origin-Embedder-Policy header (https://caniuse.com/mdn-http_headers_cross-origin-embedder-policy).</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy

  
#### CWE Id : 16
  
#### WASC Id : 14
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://cnaop.gouv.fr/local/cache-css/](https://cnaop.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/local/cache-js/](https://cnaop.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/plugins/](https://cnaop.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/plugins-dist/](https://cnaop.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/prive/](https://cnaop.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-secretariat-general.html](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-secretariat-general.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-cnaop.html](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-cnaop.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/squelettes/](https://cnaop.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fpresentation-du-cnaop-4.html](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fpresentation-du-cnaop-4.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/squelettes-dist/](https://cnaop.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-conseil.html](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-conseil.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/local/](https://cnaop.gouv.fr/local/)
  
  
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
  
  
  
* URL: [https://cnaop.gouv.fr/les-correspondants-departementaux-13.html](https://cnaop.gouv.fr/les-correspondants-departementaux-13.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-rapports-d-activite.html](https://cnaop.gouv.fr/les-rapports-d-activite.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-conseil.html](https://cnaop.gouv.fr/le-conseil.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-partenaires.html](https://cnaop.gouv.fr/les-partenaires.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presse-communication.html](https://cnaop.gouv.fr/presse-communication.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `P852gJeB5fUU8g0qJlLL3fNyljz02V33fQ0zoExT8/4bSIR2eROrh7EpA/65ArMpEK/krTyc04P0nWtjhYk1DGI0kT0=`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-secretariat-general.html](https://cnaop.gouv.fr/le-secretariat-general.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://cnaop.gouv.fr/robots.txt](https://cnaop.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `jowjIvHYAy7PwfEqJlLL3fNyljz02W/6dYLPimYr5ninHAqx7ndvYzspT/6OA5gfw5d9aIjarAHfaEldfyPycNis6vM=`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presentation-du-cnaop-4.html](https://cnaop.gouv.fr/presentation-du-cnaop-4.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-cnaop.html](https://cnaop.gouv.fr/le-cnaop.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://cnaop.gouv.fr](https://cnaop.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `JqezRMrJdRbIkb0qJlLL3fNyljz02a5dS5Wk/cS0J4hDqHv9Kq4qDI1s33EboHOdUKY0sYxGBPKwJSaB5wefojSaVkY=`
  
  
  
  
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
  
  
  
* URL: [https://cnaop.gouv.fr/local/cache-js/](https://cnaop.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/plugins/](https://cnaop.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-conseil.html](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-conseil.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/local/cache-css/](https://cnaop.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/local/](https://cnaop.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-cnaop.html](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-cnaop.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fpresentation-du-cnaop-4.html](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fpresentation-du-cnaop-4.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/squelettes-dist/](https://cnaop.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/plugins-dist/](https://cnaop.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/squelettes/](https://cnaop.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/prive/](https://cnaop.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-secretariat-general.html](https://cnaop.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fcnaop.gouv.fr%2Fle-secretariat-general.html)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure each page is setting the specific and appropriate content-type value for the content being delivered.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx

  
#### CWE Id : 345
  
#### WASC Id : 12
  
#### Source ID : 3

  
  
  
  
### Cookie Poisoning
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where cookie parameters might be controlled. This is called a cookie poisoning attack, and becomes exploitable when an attacker can manipulate the cookie in various ways. In some cases this will not be exploitable, however, allowing URL parameters to set cookie values is generally considered a bug.</p>
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%2Fecrire%2F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F](https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin%26url%3D%252Fecrire%252F)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_lang_ecrire`
  
  
  
  
Instances: 6
  
### Solution
<p>Do not allow user input to control cookie names and values. If some query string parameters must be set in cookie values, be sure to filter out semicolon's that can serve as name/value pair delimiters.</p>
  
### Other information
<p>An attacker may be able to poison cookie values through POST parameters. To test if this is a more serious issue, you should try resending that request as a GET, with the POST parameter included as a query string parameter. For example:  http://nottrusted.com/page?value=maliciousInput.</p><p></p><p>This was identified at:</p><p></p><p>https://cnaop.gouv.fr/spip.php?action=converser&redirect=spip.php%3Fpage%3Dlogin</p><p></p><p>User-input was found in the following cookie:</p><p>spip_lang_ecrire=fr; expires=Fri, 18-Mar-2022 19:12:15 GMT; Max-Age=31536000; path=/</p><p></p><p>The user input was:</p><p>var_lang_ecrire=fr</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-cookie

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://cnaop.gouv.fr/les-correspondants-departementaux-13.html](https://cnaop.gouv.fr/les-correspondants-departementaux-13.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://cnaop.gouv.fr](https://cnaop.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-rapports-d-activite.html](https://cnaop.gouv.fr/les-rapports-d-activite.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://cnaop.gouv.fr/mediatheque.html](https://cnaop.gouv.fr/mediatheque.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-conseil.html](https://cnaop.gouv.fr/le-conseil.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-partenaires.html](https://cnaop.gouv.fr/les-partenaires.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presse-communication.html](https://cnaop.gouv.fr/presse-communication.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-secretariat-general.html](https://cnaop.gouv.fr/le-secretariat-general.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presentation-du-cnaop-4.html](https://cnaop.gouv.fr/presentation-du-cnaop-4.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-cnaop.html](https://cnaop.gouv.fr/le-cnaop.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="text/javascript">tarteaucitron.user.gajsUa = 'UA-5713943-1';</p><p>tarteaucitron.user.gajsMore = function () { /* add he", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://cnaop.gouv.fr/presentation-du-cnaop-4.html](https://cnaop.gouv.fr/presentation-du-cnaop-4.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-partenaires.html](https://cnaop.gouv.fr/les-partenaires.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://cnaop.gouv.fr/mediatheque.html](https://cnaop.gouv.fr/mediatheque.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-conseil.html](https://cnaop.gouv.fr/le-conseil.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-rapports-d-activite.html](https://cnaop.gouv.fr/les-rapports-d-activite.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://cnaop.gouv.fr/les-correspondants-departementaux-13.html](https://cnaop.gouv.fr/les-correspondants-departementaux-13.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-secretariat-general.html](https://cnaop.gouv.fr/le-secretariat-general.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://cnaop.gouv.fr](https://cnaop.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://cnaop.gouv.fr/presse-communication.html](https://cnaop.gouv.fr/presse-communication.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://cnaop.gouv.fr/le-cnaop.html](https://cnaop.gouv.fr/le-cnaop.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
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
  
  
  
* URL: [https://cnaop.gouv.fr/local/cache-css/](https://cnaop.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://cnaop.gouv.fr/local/cache-js/](https://cnaop.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://cnaop.gouv.fr/lib/](https://cnaop.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://cnaop.gouv.fr/local/](https://cnaop.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://cnaop.gouv.fr/plugins/](https://cnaop.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://cnaop.gouv.fr/ecrire/](https://cnaop.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://cnaop.gouv.fr/plugins-dist/](https://cnaop.gouv.fr/plugins-dist/)
  
  
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

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://cnaop.gouv.fr](https://cnaop.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/robots.txt](https://cnaop.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/sitemap.xml](https://cnaop.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
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
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615549973`
  
  
  
  
* URL: [https://cnaop.gouv.fr/](https://cnaop.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1593502084`
  
  
  
  
Instances: 2
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1615549973, which evaluates to: 2021-03-12 11:52:53</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://cnaop.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://cnaop.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://cnaop.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
Instances: 10
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://cnaop.gouv.fr/spip.php?page=recherche&recherche=Rechercher</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>page=recherche</p><p></p><p>The user-controlled value was:</p><p>recherche</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
