
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 19:03:53


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 3 |
| Low | 8 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 2 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Source Code Disclosure - PHP | Medium | 2 | 
| Vulnerable JS Library | Medium | 2 | 
| Absence of Anti-CSRF Tokens | Low | 12 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 6 | 
| Cookie Without SameSite Attribute | Low | 2 | 
| Dangerous JS Functions | Low | 7 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 12 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 21 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 7 | 
| Storable and Cacheable Content | Informational | 4 | 
| Timestamp Disclosure - Unix | Informational | 5 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 9 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://adoption.gouv.fr/IMG/pdf/pdf_Rapport_final.pdf](https://adoption.gouv.fr/IMG/pdf/pdf_Rapport_final.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `5005001000722`
  
  
  
  
* URL: [https://adoption.gouv.fr/IMG/pdf/pdf_Rapport_final.pdf](https://adoption.gouv.fr/IMG/pdf/pdf_Rapport_final.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503503503503`
  
  
  
  
Instances: 2
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 500500</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=520&page=article](https://adoption.gouv.fr/spip.php?id_article=520&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=1&page=article](https://adoption.gouv.fr/spip.php?id_article=1&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=6&page=article](https://adoption.gouv.fr/spip.php?id_article=6&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=5&page=article](https://adoption.gouv.fr/spip.php?id_article=5&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=85&page=article](https://adoption.gouv.fr/spip.php?id_article=85&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=4&page=article](https://adoption.gouv.fr/spip.php?id_article=4&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=2&page=article](https://adoption.gouv.fr/spip.php?id_article=2&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr](https://adoption.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=27&page=article](https://adoption.gouv.fr/spip.php?id_article=27&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=26&page=article](https://adoption.gouv.fr/spip.php?id_article=26&page=article)
  
  
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

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://adoption.gouv.fr/IMG/pdf/pdf_Espoirs_et_realites_de_l_adoption_internationale2.pdf](https://adoption.gouv.fr/IMG/pdf/pdf_Espoirs_et_realites_de_l_adoption_internationale2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=öçÅÿî\x001fþìôèúþìú\x0001~÷4n\x001cÛ»üðCÿ}·ôþûwOíyê¦Ö=¼ç¿?·sÓ\x000c¾èpnænr¥ýÃ\x0015Vê¿ZÆ¥\x001fæsß¹~yxÿô8ÛnYTU_ÿéôØÇ¾\x001bü\x0013ê½?¹&Tµæ\x000eÄ®Í]}\x0016ê\x001f¦¾oq¨PàP`ìÇ~öO§s;^AQÞ×ÓrîÆ®Wsy
HUð>
ªíý¨¾þÃúG7¸\x001eë½.cÕtBoütÅ>t2\x001ds3\x001a«\x000c-§Ú-\x000f¯Nÿöú·íÔ&ìÁ×ÿî7\x000c´ð
"ÍWßôÛ­\x0003zç\x00146Ç\x0019KÓ)µ¦\x0004«»÷ÕõíÐ\x000caH²ÂiÙeÑÓ.ï_æ÷¼;Ø\x001c¯\x000c\x0017guÙ/®M5û]èò\NiáÜb®lÜ­ßiKvnÑ\x0015ß\XÐuË·íxn¦1¬Ïc×,~*º{ßG_4®Òrê<¥\x000fVÿþÔÃÿåWn]\x0007Ï>9µçvéæ.ueZü½¦äiî²\x0012¡0¬fn\x0002Öläo¾\x0017j°Íº~ö\x0013×Qõúö×·îþ¿n\x0007¿5Ç~ð}<{kï§û?ýÇíïßEºieÓ4Û>òÈÄÉlâ¶aAÛ¿\x000b\x001dæfò2ÏxT*\x0001K\x000e3zµíQÅ\x00107Þô¾_±i\x001c1A0&1$VD\x000bÃ4\x0003³\x0008ûþ=Ï§§v\x0007¶\x000fÖzm~zñ_ß±é\x0019~àëíFç'\x0014&\x0006)òåÆ, a>ÌwYQx\x000f?aAr·à«|$\x0012<ÝÜl¼Õ\x000f|å/Õ	\x0004îò*÷\x000fº78ôäSÿ\x001b]ÛÎX´àT©,Ð¨z5uÿ\x0007N\x0005§\x0019;î®¹ïëvK>\x0006\x0005òW\x0005?\x001a}»Ý¬ø\x0011pÄ\x0005Æ¼ÇÑ8Pc\x0017ºf^\x0017¬
·´ú\x0018
xÑj\x0015¼é 0Ìþ»jÇ\x0005²USt±W.í¸y¥ªµ.çY6¼Ï]ù8·\x0005
\x0000±\x0003Ôô.uÕ3\x0010
ð)ø"½c¼\x0001¶MÎ"iÔS7ÍõÒ\8åê£%PþU\x00124&/ëvDÐØï
ô\x0001\x0016\x000có/\x0018ÇQõÊ\x0001ÜágCj>\x0007,ï_Ñ)=ÀL+ùKÒbôå\x001eH,°õdç¿«Yúw\x0019t"²£Oý¤e\Cq=\x000cêeõ\x000cª¿.7ýúôMï«¨3y\x0007\x000eÔøqùmþyþ\x001cVT;yRð_ê¿£$sCOëâ][P¬Dd\x0017Îµ²\x001e£Vô3$ÄB\x0011\x0000¶QT;p]RoMó©$\x0001i½\x0011õ\x0005Ø\x0019\x0011ÀOû\Þ</\x0007\x0013º}Småí I\x000bö,\x001dóÙ
r\x0001Ý¡"Âsºÿï+m=×Glj\x001f±PàKÿ?\x0010fK\x0006 \x00025K8v_óâ+vwáñ´ø\x001dö\x0018\x0016\x000bXÖ\x0001ä\x001c\x0016ïª5\x000eea Õv)\x0006j)ß	µMí2ôÀÍãÞ\x0019¤·nY
N\x0011zØ,â\x0013RòÅª·LãTr´öÈ12í\x0003Ìl `Â^3mÙPky \x0004Ö
Ùùg_Ð½ßAaÊ	Ô\x0011Xð¤ (\x0018}\x0000J7O¢Ô,ç_¦\x0001D¿Ñ¨i£¦l\x001a«g\x0002\x001cM£/àFµ÷@¨*ø\x0011úQ\x0013<a7Nx¢= ¡úD^¤62!r\x0000nª-A^j6¹\x0014 \Æ²ì\x000eÄÐéøq1\x0004Ìózg6îI§URB¶\x0001Yf\x000bhû\x0006\x001eKÿÝ\x0002|æÝóÕMÃ\	\x0017qÉUÀßø×4¸#\x000c2CÚA\x000eø\x0017ÒD\x001f¤áìë_%×
o*_AØB%6&Y£?7~ÛtXmÍ@C¢îE÷?:=vgÏ9¡¶oÂ&\x0008\x001c[HÓ¸='ÿñjKò\x000bß»oíx\x0018YÍÒ\x0011\x0019\x000e\x0017Ó_ä(ÁW[ÏAø
~þ´TJè¸²¾ó3Ò\x000b«*
rÖ\x000cM
B\x0006­æ^Á6á¼O)KR+×
Ôtî[÷M1Tw£RÒJjÎZßâ©ìß¼þïÛôç¯Â?ºýò7s²½þßzÒÓOS\x0017\x0006ÒÇÅ÷	÷à«U¦Xü\x001fqÐ~[uªlèrç÷Sà(W§.(\x0012.(Ê§ú©Y÷ÐÂ'þ¡\x00171çÖ³oÿpð±­Os[ïú¢~{øÐoç~åy¤$m)tç§vôÓ¥*=å§ç~ÂÆßÏOq kªúq ³\x0012
GrëúaepaT®\x001d°@=-n\x0019=
ù0ºyÁ¢[\x0017\x001elÕÒÎ½'\öÕ¹`n(÷/?K\x001fl(m\x0018© UÂ@7°É|^n\x000f¯Ãi:N\x000bN#Ôþ°ñÜ{jè±ëéfIÝ\x0007;ñc×\x000eþ\x0004¬I£ó]ne}>q ë	¿4\x0003\x0017^ÕÑ¼xGL\x0018åÂùð=ÏÚen,\x001bq-1¯^¬<=ó`@²ÍÔR"7¦yÀ"}\x0005ªºð¾r\x0004\x0019Ì²ÖDÑº5Æ°\x001bkEÈ9P@M"e¾yÜÉÐ\x0012åÈqh÷UÆ$ÀK\x0010w¨\x0000«ï­,ªg¥Ì\x0001\x001fa½á´Äf\x0008½od	uä³ \x000cZÄ°½\x001f*+¶@\x001c
=ýó@zC×j»vvUjßÙpîz%W}ú\x0006eÂäÀ\x0003²fAFo¢9V»>´\x0006B\x0019L|Z{ÿ¯Å\x001aøÔÃÏW\x001b
\x0016e­ \x0007ÛY-Ú\x0006&óò	º¥ê\x0002\x0011x\x0015"ãi¹Çüêâ2ëiªíûù{ï·Õ_\x0005.ïOqx¤Î¯ËO\x000bÚªµÒ$_NCvA¾¬KÎ\x0014À\x0006Wð5PÏæ³ßÐÚ+£=ÒÚ\x0001\x0007 \x0014
@¼¦súÑÉùQ¸\x000bÂ¥áçËëw¹3\x0011\x000fNÙ®\x0018\x0007(ìÕÉ`e«ãÊ!å#YZ¼S\x000eótþ¨³\x0001¸AÃ\x0008´ÁP¬Eg¥¡\x0011C&\x0018\x0010¸¦V÷¹ ØàRµ7¥\x0002u¢ÂÆüõ\x00033¡aNþÙûbàyh\x001b\x0016?¤¶\x0005Ó|.ö×Ï\x000c^Áë\x000f\x0000\x0014µÊ9\x001cü@õbT¥TÏMµ[w³Ú\x001a¦3f¶Í,ñ)MpÙêä{î÷\x0008\x000e¶vC\x0012wtª\x000f\x0017
Àg»¦kCv{Ê #kó\x000b1Ã\ÐÝ]íð\x000e591Õ\x0004\x0006¢\x0016Dñ´\x001fP\x0016È\x0008ùaZv´\x0008b×4å{Ûy­hòçVåðrSW\x001cõkÑy1üÜ9\x0002Öù\x000fÇ÷G¨¡(ö[ÄfmÀ®@\x00075íîöU
ÀtQhQVg\x0014 \x0008Ø\x0016±åP©;5:7§Øº\x0014\x001cÄgêê1M\x0013¶T\x001bÌq²C\x00078±îk3J\x000f
÷!"P¤²|Ù¾Vâ+Hm\x001dá\x000b;³\x0000%\x000c\x0005ö÷\x0000Hªs74\x001dÊ\x001b°R_l<â\x000eLÙÕN&ÎM¢upiÚ¯Ä]|8	
%\x001eíâ»à<uîQ\x001b±EhYßL\x0015Ï3o\x0011rj;>Ë&nFìi\x000cCê'n_Õ§wTQ7-]Ú±4MyO­\x0013ÜI\x0008|CÍ*õ¿eAL\Ù¹²§N|7\x0019\x0016|¿Üfî¶\x001cJP\x0011q¿]¯B{©îYN:êVSàhå ê(\x0006ØuÞ_TQ§ûæSüs\x0004Ë\x0017úÒíïq%Æ¥«\x000c~Áæ\x001d}|m¿9w\x0005ÒyÖÖzj\x0001;Bv
qñã¹¶º
¼P\x0010»]ïû;Ç¾è<\x001b\x0016An;xÅ@M
¼HëÛ~©ÂÚ\x0000*R.k¦îò)¨ø\x001c\x00142¼PQ4wùLíQâ
m-cU\x0007ÝÖWÞ«:!À+5ÎïÚæ§.Î´T\x0001
à1\x0005\x0005Nªú\x0007O\x0015þ\x0010Y\x0014QQàÞ]ö+íÓÍÍÆN\x001b¼ýãÚ!ú*ef+T®£ÛûÂÜXëíÁ\x0006_Fª\x0005[I1\x0013áæ{ºëÊ5`,z¿Ôºb\x0015\x0003¨&Ùô8ÃÊÔ|\x0011Æ!\x0010ô«Âäºí´X\x0010âG\x0010£R\x0016øCá¬µ\x0015üZüµ i\x0002³Ò\x00146¾¥yêú
ÞWqH\x0013_tB×)±<\x001eÃ¹&!DXíh*nÔbÒÃ\x001eCGØÔ×Êb3åHRÕCé\x0019 öÄ
mYôdÁïèÐ\x000eáp¥\x0013\x0015X0¸4ÝgP¹rk?\x0019\x0007 Î,$º,<2È%£2
s¯í§%¥¤Ó!iØJàÝÈþIby\x001an«ä`Å0û xôb\x001cW¦0ÜIÉ«>
\x0005x£`¥Ws\x001d¢Î®÷BgLLJzÏ\x0011n5\x0006_$Ä¬\x0015N\x001e­Ã"ì{\x0002¡ZÅ\x001c£Ïºóû\x0006Q#¡äx\x00084-
\x0016¨cOü.00;Mgvdaë/ .\x0012²´l}?àÓ\x0003Æ\x000fC«\x001a¨hv)´ô\x001br­t.Bñ27)ÑÛC\x000f/úÕsî0L[Ã@¹kÛ§pz3\x0002L=|V®aZ½Ô â};iBN\x0007'«\x0015f?Ö=ø;°\x001f¥	\x001bÖ8)`DÕä©\x0010^Õßf$©%=´ß6
\x0007ÇY\x0019à£;hw\x0011ay
*Ù1xÞUøX4øµþË®Ð\x0005I©ØHâûø´Jo
ýjBÃ^64\x00055>\x001cÛ²&%\x000cu\x0016®5Á\x001e¨÷Vú3Åñ>ò\x00066Ç\x0005|ÄAûcäreE!«Uú¤@\x001fzU-óZx×+áóË:8	5XäTýÔ=w³0³J¸\x0011NÅ}\x0011\Ù\x000béÛ\x0001ÉR1»%©\x0002c*»\x001e\x0015V(³úxG]2Ãî\x0008ÔVNàU\x000c£9\x000c`Ð\x001fW%Æ\x001e1Ms\x001bìPA3C`rïæÊ\x001aõø3Yi+¯ÃìEêF( {¯Ø¤Ãð\x0016^²¢zÞÖ¶4pºö¢\x001c
Wª­[Ø<\x0016m¿Ì£\x001c n\x001cq\x000c\x0006\x000e?\x0011eo(8YQ\x000b'ç\x000bL¡\x0000ÕÁM³0wìiÐJ\x001d(d«g[Ä¥_\x0002\x0010tå{KÚüI\x0014<QÇ\x0011Qû\x0002¥eÍ¼åé®	ó\x000cÂ/X\x0005xà\x0016Ào6±°Á«)1ÚßëyÛM­ÅÉ¡\x0004\x0004YZI"LhëÎM;(ª¦\x0001Ó îJÙæ¥øtùNdjå7*\x0013	!A\x0019\x000e'\x000e¹(o\x0011TYôESóKÛ1N+|\û\x001f.ÚØà&1\x0013ðþ\x001a¹ë¶ï¨nS\x0006ì\x0006Ú+"+	LtW¿Âí\x0006.59(¿à5Á'Ì\x0001û£JË
.Åc\x001e.'»1ÜO\x0005,­#R4õ>KwxpjbÒ|ßiÆ¤q)âIÎZ\x001avA\x001c\x001eVÔû\x0012 0CVI\x001b\x0004Ñê;aYj37å­±f«\x000f\x0019MÂ¨ëCi"lÔJ\x0010\x0014VCÉDvÃ\x0012U¢\x0011çZÃF}"\x0007ÜÛ\x0012'uQiñ£0zË<ð\x000erË¶¤5\x0007j\x0004¦^
ÔT\x001bOxKy\x000b·CÓÈ\x0001kÊHXÔ²]U¨"®;\x0016s)ðõÃ\x0016k#\x000bxÿ)**ã`\x0015´-ò<Ò~_Ý5QüìÔy:\x001ft¤\5Sëê\x0016i¦òo0TSè\x0014rÅTCeÏìª¡äüõ\x0012Ç\x0016GSÓgvUY©dl\x001e$ÕKO.:¶ÓI1· 1hÃU&Í\x0012jåçÀÈ\x0015tat¸ÜACHy]<FèXæ\x0011
ª\x0013µÉ{ªÆ\\x0004w\x0015Æ/e\x0017¯Ýä6+ü·7L\x0010}n\x000eçY°Îi\x0016RÆµk<çN\x000f¯k\x000f!`\x000c¥~àRwõÒ¶ãÃ?­\x0013;\x000có`ðì~Ë¡\x0012Ó
d3´ÖGt\x001døÆh d¥\x0010Á«%ðó\x0007ùgAü\x0011ØmPÛÖ\x0002\x000c!?£¦
nÆ&Gq!ÐL\x0011Z+NÍVY\x0007+Öbaúâ`û\x000b\x0018#)ðýj\x0016ÇÞÿ"!3°\x0008ûð\x0012.ùÂº«è@R¢T´^ø	æèËpz%vhÄx9bO\x0018à°[SHH.u\x0006"è
XñÖÕ°~\x0013QK\ü\x0015!u²\x0008Ez\x0007}2¤:u\NXTä\x0003ýô\x0005É\x0011)Ô\x0018ù=yáUj\x001a\x0015ûÕÚypAÑ\ãC\x0007C\x000bÍH\x000brh(31\x0010l\x0005ª×N&UFÙ¥\x000e\x0012\x0001\x000cÚBÁË{´óý!\x0010¶?Ù­\x0011\x0012=[·¦±t\x0001±hÑÈ\x0001Ü:EàLìü(W§²\x0010»%\x0010íFß\x0012:I·åæê¸È´FÎ¢bË}XNN\x0011|ë{¾94Ã\x000bÝ\x0006v
O\x001f/±u÷\x0013Ëí!îv,\x0016¾¯£\x0017y\x001c1SÉ\x001eCxßÌ³ÙÛ?\x0011»öa4µ\x000b]Sn¡\x000f|ùþ\x0000\x0010÷)x}©
-UT°l£Ñë Í¢ Ê\¸¦a«¦O7®Ó?ÕDûtvÍÆ\x001dè9\x0008\x000f@)Ð*7,p½{A4YI½+o<=\x0014.{\x0018ä{$A¸´üÄ\x0014SÂG­£ÏîN\x001dW[m=\x0010å¼\x000cO3ÒîØÕ8ª\x0000\x0017¯Ê\x001c"\x0018\x0017\x000c1\x0013KfÜ6\x000b'«@öwÔ	*è-Áå)ñ\x0005ÓÅJ÷cãá\x000cvÙC\x001aF\x001d/xÄÔ¾âöëj*ß\x0011a\x0017FÍ¨¿ªµ0®\x0006\x0003Å\x0007Éî9z	tËRy0gkj\x0017~æÓÒ\x0000£X©\x0000¿X×\x0007PqÒð~Ä\x000f\x0004ä¨BÝÑubÏr¼RØ\x0000[¿\x0005y­Ô\x001fQy®t¸!ÄÐ<à\x000f*¿X9è`mà\x00039	lõ:¿ç8\x001b¶vQ@Âvs½òÐxW\x0008ËSÛ æ2¡2U{Ã¶)rºÍëìYQXKÖý0GAAûyH¿H .P×\x0001çâ§Üü¡¬%Ç³ö\x0000\\x000c%¡x<ÎÓ^°Èä¸õ°éÐÝ2þpÿ\x001dD\x0010o¹ÉaëàîIZ·ÐY¹,×
Æ!kYX§R#»ú®\x0014< ÃÁ¶\x001bmxÑhÞ§eÌ'Õ\x001bmgè.÷\x001dmÝ2N\x0006ÕÄKJtú\x0006ÔyCÎ6y² Å5é}m'UÉ-ª\x0013Ó)x\x0011y´Ö)Ù\x0003&\x001cësûÊ\x0006h ÆåÜ\x0016öí\x0003×\x0018duT\x0007^+¹T*½d-4Uhîk\x0002õðs4\x0013U6Ö|tÅË»5Ip)VI¾Ò\x0001âµEZå
}±Y´vµ>(0;cÀS\x0011ðgÒÚQmÎÝ\&HïÁhùR«ðó\x0007V«Õ´afP¨Õ(rI³&t(Uk¯¥\x0006tQg¼ÔÊ÷¼Û\x001bÍ¸SÇÞ¢w
:`ä¯"IÔÅsÆ\x001dóR¥ÿ\x0008	K+²q\x001cI\x0005Ðàºó\x0011øQQ°\x0005G'W7"?*ù´\x0000Ë\x001c9ß3X\\x0000ïÿrs\x0014¦\x0001	×U6°\x001b\x0010SÙ©Mì\x0002È\x0007bf\x0001ÁñCÃù&ï\x0011¯ñÂGÛ°ì5ü3®a×.¸\x0003i\x0001~>\x0001ï\x0006_Y¬"CP÷Ï¤±º\x0004+ÄÍo\x00143ûÜ2)cú[@Ü|ëø'7sÁ=\x0019ØËÅ´k5\x000eq 5-ëÖig¯%\x000fyëd\x0005Gì÷S\x0013.Vv¬\x00034\x0017Ýc\x000bZ3°BæOE\x0015³àjA?.øô\x0015w°UÁw®Wm\x001dÉÎ!ê-Áí\x0015ì\x0010$¬2G?
Ü ³R­¹Á÷\x000b+ãÛnº¨Ø\x001f\x000bãÈf\x0018Îí¡\x0011N5xÆ2tÄoA ¡µ' zøx\x0014Ç×Ðû-·hgáÈO=ÈgÓ[¹ÐóÞ\x001a6/ÖLïUe\x001c\x0015F\x0000,ET-Ë¢WDø¯s
-\x0003ÄùùÉùÉY\
PKþ6Mó«\x001d°_oð%6¿íç¦Ã¸ÛÏ³)\}Fr|þ<¹VczE	2\`\x00104\x001f¿ï
Ðá\x000eÈ@	\x0001·äfÞÜ	øª2\x0006NJ0æ0ã\x0003'\x001d_2tÉ%¯¶üWóÔ_f\x00164\x0015¶Í\x0014ê­L³ñqq"3\x0014#à\x001bôú'5IÛ(5~ïMº\x000eñk
+ÇS@\x0008)ö@ÓBf'Jdr\x0007gÚÛ1l¹]\x0002d¢1qqlx?Ý8\x0004
a\x0000=%©ônÀÕÆ_:=1u0,ªY9,\x0004^Ê\x000f\x0002Cö
ÞPex;ywMK­´ËËFT×,\x0007RE\x0019n*ü¹j¡îyÉ§meÐW\x0002dñpÍ\x0016­ ½BDÈ\x001bF÷CSäx \ÍRD\x0005Ýç\x001d21uÎR\x001d\x000eJ´ùú&\x0019pF¸@ÓvåÏã<CDÐCu¯\x0005z$ôå/ßÙ&Þ\x0002·¼À5\x001bù\x0010£\x000b\x0017³¼\x0008\x001fùÍÜ8^\x0013½e]¿Î5Úªùý3¯Cû-;®dÑ§¹ð
\x0018ã\x000e\x001a^ë»'\x0017¾á±ÇïyÙ.QùtíKp{Ò»Ob£ÍÒM¸Ao¶ðÆ8!dÓ¸\x001a\x0006.=¡·§À+ùN\x0014x¯zèBÙiJCò$X¬¼Oa\x0002^¤\x0003ÙWâ\x0000#wÌ¤Åp\x001eÖÛí/Ð7¹èe\x001d[\x0006ÙãxtêP\x001c}¶\x0015§dDwpMÔÈÞÌeµR\x0012\x000b\x0015;Ã(Oãà+âú\m¨iµZkt\x0017agâÍåÂ oì \x001f±¸üî%S]l\x0007\hvî9ÏÎ`	ÃQµï K¼wè¬¿ØDÏe\x0019H¹J9MßÁÉ\x0003ü=\x001fî0bz/ù\x0011
=5uIè.gÞñJÛÍ\x001cgbÙ¤nøi§·'=MÂjß4-Éc\x0019\x000cMO»\x0011B«+äJe:÷nøÿp%DÆOnã¾ë<W¢¶'
®5ÔÒ*Ï\x0003^RÚ/Â\Ää\x0008s3OÐ1\x000eá¢rðÜÁV»£³|$\x0007~
ôº£ï-\x0006$¬B¥\x0014ûª\x0015(\x001e\x0005Íé<--T{»î%iÖ²P\x0011û\x0011G¸\x0001³Ò>G\x0018´\x000b°þ9\x0000n³g+|ö\x0010®'h¨Gn8¯òÂí£OÑ;¬MXqG\x0018º*\x0010=ËÜ\x0006aîEä:ZÀÅàeR	0\x0016ÉÚá§´[úà\x00111nü	\x0005f_`f*XLx.ÄGn0ª¯Ê\x0000\x000eV¤ÉX»C¢LH\x001cn*JaloBSC0Hµ
ô{Ò~­ZêZ£mí^§¢V$föÅæ\x0001		©Ù\x0007Kîò\x0012iÕºÛô\x0008Ô óÉöâ£Ýób=M§µû£\x00162PµfÏuâÙ\x000b\x0011\x0012Úeo^ÛVÐHQÍ¢×kÓ\x0015¤¢²F\x001aî2\x001düXÜ\x0000S\x0008í+N°Â""ñÇÈ×\x0003ðëñ6|\x000e[«¢\x0007?×¹ SgòÅüb\x0019Ê\x0007~ë½6«\x0005E÷8Zï&UÚp\x0016)Qîé5ªÍÖ1ÄÕå\G¯¤FU1C9ö¯:<8¼¾¸¡'n}Ë={×yÇû0Ó¢Í¡9\x0004Õ£¿ ×rgÃ }SÉúFZoä\x0013» ÛM8\x001d²¾¡¬ÜO\x0008;aÑ*:OÎcÎ§L\^o'ç"\x0002¦0\x001c)ÙÂé³åÔ~ð3þ×9¨ý)¨½SÖ
n0±b^]ÈÍ»Ìäæ
û¢·¬\x0019Û\x000eõ\\x001eS
\x0012/?þÞÛÒð\x000cÙ°Mõ"«;³
\x0018~!z÷r¥	g»ÖTªÝM\x0004\x000bemüzm$Éí*\x0000ÃîZ\x001c¸%ç[Þ-,·\x0015ÁF6èÊÑ_ô\x0015
\x001bFû´\x001b\x000cqcøkv}ey¥à\x0018õå\x0017Ïq9Iz\x001a[\x000cIWOdÂ¢9Ýsåv*rx\x001dº<#5õmòZM­Jfë_Véhé\x0015Ê½4è«}JóX!±¤vë\x001c÷S\x001bf
/±LE\x001cº0´³\x001b\x001f(Fë4\x001cúséÀ°ÓA\x0000Ô|²¾ê¢ ïT\x0000~ÚÌDíÔÊí~£d\x0010"Ï\¼[oìë\Æ\x0004\x0007³\x0005\x0013Èûò`W]è¢\x0006â7­\x0011L@I÷\x0010¶\x0015'¤uÌ§]"´/ÚlálA©à× U÷L­ãG\x0014\x0007£Ô9»¶t\x0015©\x000b7µÌXH#PÇn¾Ñºbr#f'Þcöé@\x0006­â*WßÑðê(hO®e\x0004\x0008þã-«\x0013N½1Åh)ò?ÙQ\x0001¸ì¤8\x0012.­*ì <¬Lþø½\x0000çYZÍæï¥\x0008¨ß\x001b¢S\x0001#.Ê\;ôÀ\x0013²0 jRQSÎOè4Ì\x00158&.«Á\x0013jh~;\x001a\x0007w\x0011\x0005~!½;mÅ¾XHñ
·{á¾\x0008\x0016üó¯¹è>4&a\x000bM ¾îi\x001d* ïd\x001ep\x0000Tç\x0015Bø1&uQhË½$4PÔ\x000f<|å\x0017#¾M,\x000eK\x0006×^H\x0002Zâxß®_£\x0006­ZhZb¥RÀLì>2ævw\x0017`ÀåEùNë\x001cÖn¤õ^êB3;\x0018Ïÿ¬NP)ÊpIVÉ´ÖÈ!²;»!ùhL\x001c9àê\x000b\x001bæ¾ÀÔÊSën\x0005#Jq7\|Ï[XÄ\x001c9z\x0017G¼D¯\x0008i/ä\x0007Ëpo\x0013Úxð\x000e½\x001c\x0013¡.Î².øêõí¯ý¿ÿ\x0001\x0003Oã8endstream
endobj
16 0 obj
7509
endobj
19 0 obj
<</Length 20 0 R/Filter /FlateDecode>>
stream
xµ]Ý$·qÇe;ÝÊØÓ­t^IçÄëØg\x000co«ùÑ$\x001bv\x0002;@"@ð}³òä \x0001\x000cHýÿ?ìf¿"3³³\x000e\x0002æºÙÅb±ªX_¬ûëý<)}?§?ôãÏß]Ï÷_Çÿÿÿú¯×a2é¿í\x0005þþów÷ÿùxýÕ\x001fÕ|\x001f?{ü¿ëyZ×Õªí¥º_õ4Û{¿ÎS\x0008÷ß]ÿéð\x001fÇ\x0007;\x0005¿¬úðÏÇ\x0007=­nÕáp®Z\x001b{x~LÍ\x001cÖÃ³ãmÄG\x001dnê\x000f~Ò.¸ý½JïÝá\x0005¾`½ññ«×G5Õ\x0006\x001fçòÓlÓ\x0008©*º:.Ó\x001cÌâ\x000f\x001fÅ\x000eó¼\x001d
~p\x000c5Ê®R:> \x0016o­Æ¡e\x0002þÁ:OKQgF«<tYW\x001cúéQOn¶q(¼ß±Ò^\x001d~p|X&mÖUá\x0002¿ýÛñaÕ6\x0012ö¦]W°@\x0005\x0017p²¼0£ÖÃÝ¶1
Ü;Øyäbs\x0000\x001aw8Éÿ<~s­Ý2ÅÙ#\x000b=þoäÏãôj\x0002#È?¥9¼^\x0017\x000b\x000b®¿d*1\x000c^\x000e~ÇAëd\x001b\x0000«©o\x000byàý\x0010ðþi½óìä	\x0011ó%,ø\x001eè!îe0»ÃÇñ{ãTdë\x0013~Î:\x001bD^(ä·«Ò\x0016\x000cØw5ò«*ÄÉ\x000b¸£¯\x001b
´vÓì]Ú¤\x00073Ï÷þþ!rvß*àã	üjíXæ½©O,©qèªJGmP|{2>b:02¯ó\x0003±|~T	\x001dÆ£2T`t\x0000xOXC\x001cpÕRi\x0000p÷m_\x000c×Äu0P g\VÞu\x0013y'çÂ0¹\x001fY½Ì«{°\x0002{pV¤÷/ÊüL¯x3¬aö(BãÃM¸í2©°p£ä\x0001Ó1'\x0014¾+§´nÙ\x0006ì+óveò\x0002ûQOº\\x0010ò\x001bQkTycRAäÉEÛ­,#}{à0m=r`U\x000c\x0018×Ó\x0004)¸ï·¿E
tQâ\x001a¡£ZÚ×u04S$¬Kæe7+ø+\x0017â\x0012T.\x0019¬s¨\x0004> ÕA³HZ;y·1ºN*/8¤v\x001d÷¦À.Ò\x000f\x0010Dekg\x000b\x0001r
ÒÉZQç7È-`ÝÜTë\x0001Þ³c¤pSµ\x000e@O\x0001T\x0004@É6S¿ü%Ë°r\x0006çu¼`¬Hß\x0005Ûg@<ß\x0018U'C(¨ÃOJÝ1°'Øw·\x0017"öª¨\x0014xgD­+ñ¨\x0005tAaÀÒ\x001e"\x001c3~`-:(7n¾ÌüÝxA\x0005È}ú.î\x001a·±@+\x0015>¼@-Ñ¼ o{>dpÊÛÛ¢\x0002`C®ÜVÎæ²¾\x0011ËÓi¨VÔ\x0015h0©Ï\x001bR\x000f\x0002\x000e&\x0005¬\x001eó¥ø³*×j#YLÆ;\x001aO((W­Ì$ù
J\x0007·;(
ú)QzÿUd¢(RaE=Á¢,s©Ú,\x0005 Â1~W1\x0004°wEÈ&\x000cv¸\x0010ßG¼ç´\x001fÊè\x0008\x000b¸4\x0002C0S6?o¢ZÖ\x0001ë¡ÜÐ³üÞ?¤¿\x0007\x0012~\x0018*\x001aÏ-º²J§·Òa\x000cs6?P
È\x000ed\x0015ý\x000cÀ\x0006y-WJG=MÅ@\x0011Ö\x0000ê·Ñ\x0006Zçe÷/ãìæx\x000e¿(²Yù~§\x0007}¶¹\x0006*Þ\x0002Ô¤·UÜv£B+Òy{P¤ñîó\x00029\x0015\x001c'"ÛóÈ¬h9I=ýn[£Íá\x0015ÀO~ZÉ¬òÑ=:1÷ìø5þ¼NCõ@âP¨ÐË:\x0001¦\x0005¥Ã
\x00112KAø\x0004sºÁ\x000cxÑ\w5úPmev1³A`úæ0q´-ñãÃoâ\x0007V\x0000\x0008\x0019Ä>Kt4\x0013"\x0006%\x0002üÎ$ZÜ\x0015tvó¦{%½¿\x0015Õ\x0011}Â°\x0012m*È1ÒUÑå÷f\x0018ùðý\x0000 \x0005CÐXM¼&ã\x000bO;n'ÄòPÉH0T\¹ÑG &\x0000m\x0006é}ÓQM\u´¯&;\x0005\x0013¡±:pxÍá34qv[;>ÍgÒ¢[.X·¡È"JYÍÄ?ä#aRÈ«3ç³hÓû6Øèã\x0006\x001e\x0004¾xn Vý[güôñ\x0010Â\x0001ÕË÷°±\x0005Â¿ÜihÃ\x0016\x001bEæR\x0016÷\x0013½ïÓX\x001fyc\x001cL©q=ªà&o\x001d)w\x000e¼\x00112\x0003åW\x001f3OH¶¹ëÂ²lÀW£(#½¯¹\x0015\x00173\x0012ºB89
#i\x001a±bN\x0010Í¿DR9É	90@vU«7Áíí+eÀ\x0010iBWéQå{ø\x0002BC¿"s\x0007jÌÎ9ô+ªzéõ2Ó>Iý¥cÍ{qÕ"aþÌ\x0000<U!\uj?É-hºJÏDT&P\x0005A,«:\x001d´`A´j\x0004@ÈaQ²¾¢ÆL\x000c\x0016ÖÎøQ¬¼ÊÅ]\x001e|[$øß¾l½×]øNK?SP{X!q%"\x00071\x0006êo4Ù?_vGN\x0017¾U ÿB^»¬6F\x0001À~§\Äõúç\x0019BR\x0006\x0006ü$ºÔ`½bã>HÓ\x000eÂÆàÑÜ"!?fc¦erô\x0016ü\x001dÐ£°ÄÎ\x0008LGU\x000fM04Q\x0011ü6û"\x0016\x001d\x0014P9 ªz¹+0YG°&:oK£4þ.û{\x001apcõý§G\x0015wÉ7è\x0005w³ep\x0012¼Hsº¯Oð)ñèýnÓ7æò\x001c³lYT±p/\x000b+nJÃ»D\x000eR\x001a Up\x001eÎV\x0016\x0003c7Ì\x0000ê)*\x0007û\x0010"\x001db\x001d´Ø.£¿-öUÅ\x0005\x0000\x000c³²0æ1Q-¯è[.å+»öÛÇì\x001aÃ\x0004SDÌ\x000b5ê o1ªA<²ª\x0006 È')\x001c\x0018i Øæ'Ð>RÊ*\x000cÄ\x0017¹VGï\x001fþúë¯þ\x0018rµE\x001eöûëÇ_¦@©¬õ~s ÌäÖ¸ÕqfJ@UióJL2\x0001\x0010Õ N¹)wø¢~8ÆNQ_Øý`1Ó¢\x0013eðù&\x0001Q¦MÌMQ¦Góiú©Ã²²tëË:\x0000`ñ~@EÛgV\x0008j_Âæ\x0005nßàgî~¼ÆÌï»M¢\x0006Võ«\x000fêW/ëÏ¸Âe²Îº\x0005\x0018\x001bgy5\x001e§ºKÑÚ\x001aµ4éÇ\x0002NDßÁÿè¨ÒØ=|]¿ºMD5vÖKú²dHTÍ\x0000õ°QßGöZm[\x0015%"Ø=ñL\x000b\x0000?\x0002\x0010ØwM­n°·G\x0003cp×âÏ:öyAóUÜ£x µMÅS\x0014\x001d¼ñ&Jÿ¿´Û©ÃåÀÐÁ\x001a\x0002Xý´\x0018×Æ47Þ
.CÐÇ\x0003\x001f\x0018âMy_\x0005ñ5È\x001cÈY^Ø¼¬L"\x0002 q\x0000 |^\x0005JøÈæÍO¢\x0007èmÌ¡£æ\x000eÿºéE?[\x000b@#¸Éú\x0014"üñÎpÊ2áY ÖõhÃà#@µ*\x0004°>A;ÝÑroÝBT	ò\x0008\x0002ùñ\x001c` ×\x0007²ª \x001aE¨Töà$Ò÷ \x0003ÏâÆ­ÖX¦*"/Òaâ<J\x0003\x0000|Î$\x0016z¿ÑÒZå\x0001úÀ #aÒj1\x0008\x0014È\x0000?¯RÑºÅÏGê¥âý:k_¶)?!\×Ã¿\x001dµó© Ñ\x0013j\x000eÕ\x0012\x000f¾u§ì~^>D¦G¬í\x000eÒ\x0007\x0013§ÐóÊD÷\x0017	±è\x001e¨õd2@³\x000c\x0003«±\x0002ø%}+»Ëbô[È;
ð[ï\x0010ê\x001ez¦&6YÅ\x0002\x0001]_}z\x001f\x0005\x0000`s\x0013\x001f¥Ç|KÁyÿÖb\x0018Ù¥§MJ\x0002\x001føâ2Ë%\x0006à\x000c\x0008@èÈg\x001c,C9µD\x001b\x0000[!õ!®I0iÅ\x0004ìøwÕ%/ \x0013yTá\x0000Icò½ä\x0018Buà!,cðªì\x0016\x0004\x0000ïJN¢MMFÇXócüçI\x0017D\x00030s?®?	£\x000f_GÓ¢\x0014>¼ \x0018@CÁñï(©LTKúNÖ2\x000b¡}YIAF¬&Ð!PV 
\x000c\x0002ðìþ÷\x0001ål\x0017Pn²
µ
INç\x000fBö£Ê\x0002¹äNp1üLéI¿B½Àà!)a¨\x0008äòCîu\x0013ªr^D\x0017t²\x0018©ØÔ\x0010\x001dx´\x0017D>å-9®\x0000Í1f\x0002>"\x001eæúÕÖ\x0005 èè\x0013YþË¢ júòd¢Ò¯£D%\x0019ðû \x000f%X£j%J\x0002\x0003\x0004Aß\x0007Lð\x000bÕ\x0015ÛÑÿßË¶ÉØJ\x0010 Éõ\x0004]|7\x0005^\x001dÍ\x0006\x0019Åó3³uv!õ%3(À\x001aÇ;ó\x0000`¿sy\x0002
Í¶Ñ¬¼SÈt¾Ù`Ì\x0014V,V¢J¹¬§Os>\x001fçûûâ
0JòÁwØ¼²Ëi]9»qö
I/Ö}"f\x0010Æ`óÊå«=ö6³ò	!m×³\x0000B _ (\x0002~Júi¨FÃd&9[\x000bÑ\x0017¶ÕO;\x0013\x0010¿:YçªBl*Ý^Ã¿÷Ò7¼Ü´M\x0014VaT&Vcq\x0003T½\x0013Ö­I\x0008Z¦kaãDF¿ OP¿\x0014ëîÁ¬\x001d\x0015\x0000n\x0000\s\x0019¦o$=Ó6e=\x0001î\x001cßKú¼¤*/\x0008ú¿\x0007§%mo5÷J\x001eê­\x000b¢ôÕÙ\x001c\x000fØ¦ôÍÐÂ"jw¼U\x0010 ø0«ð¶c\x0012ë1gò\x0011	v°­ïH#d'÷½¯Jô.]^Ôôb\x0017\x0005p)\x0013©ò!¹£vvr\x0003ÌÂ\x0002\x0017ô^ÎäòAS\x0004¢Ö2÷%.{eÝ@´RNûæ~&\x0016A\x0011ü®ô/ð<'îvX\x0016E#ATsH¬ª\x0004Ãu`3p\x0005ýêÁ@áR
Þ½¤ÊJ=-sñ]ÊaØ]¼Jõ{JêAE/Ù9Y(
6ÿ×q¡t!\x0008þIj¿º^*ÀCJ'ÁÉ«\x001bseß¶9\x001fè0\x0002'\x0001­JÙQ\x0015\x000eNnÎ\x0017ôº2\x0010\x0008ÝAåS\x0003\x0015~ÂÉÌ¯\x0018"»\x0006ÑÁÓa\x0018Íu.×>\x0004 ÓjlSáJlèmaÃzC\x0004­3\x001eÎëqË.ãº[	Cn6;H\x0012×,O'\x0003\x0016ÿ¾|³5µE{\x000cV\x0001'ìçÂSî°lÌæ=þìªµe\x0017ÿ¨,¤£IùQ?wg÷¢z%ÿ²<ï,m,¸Yí%çC<k¤â¶ix2RªéRUÅº9Ùñ\x0014»\x0001Üô|lÄ{ð¼\x0012ç-ûLÐx]"Âwu·±D3¶)J,e\x001dÜ&CÍ³_ð£¡ó\x000b\x0012±WÉÄÈ\x001aÙ&\x0010j*N^Ü\x001f»¬*¦3ÝE7á­\x0004È\x0007Ù­(\x0015ékØhÄY5/Ý°\x0003Ds×ªi\x0015p#ëC\x0001 +©\x0014v<ñ"}ÿWùLº{´êª\x000f5¿Þ\x0017±Ö§æ|l\x001c ,7Õ[oÍî\x001fIÌ¶\x0019\x001aòUa\¹ ¼ÆIÓÉÍ.Xò;M>x\x001cÈð><&AÝîf¤Ó\x0001çûûY\x0007|{ÈÚaMÅCÂ
 9ý(v<\x0001°Ã\x00009
xÂÅ\x001fúDVY\x0017\x001dò´¥øÙ\x000cÔØ(>>tÎw.\x0004Q­fÄ	àV\x0012°È\x0016î}\x0006\x0005õr\x001aý´[Ù\x0015É·µ¯bñf_ûºÇ\x0003LºM´<ÉmÌ=¤\x001b+´5ßÙNÅ\x0000äºôâG~gþj/\x000e¶ onµóï&\x0012EVû\x001b\x0019&Î)_àkr¸\x001bvN&ú\x0013\x001cø\x001cô^Uo èMðÅ¤\x0010:\x00014ð\x0012\x0003àÌ\x0003¸/Ìñ^\x000b\x000fdyf)PBá4tÞÜ\x0005ìÜ3ìâ³£V}5¡jLó¶}\x001er¥iÚ'´·I Å0tÝúQû\x001f5Ú{¹ù*Lç·&\x001d\x0002û,VÃïG\x0005ëÌ\x0010¾\x0012KaàýPÙÓgò5\x00179Î\x000c\x000fR\x0014ru}·Ú´r.FÒ
ÛvYÛ\x0018Ò\x001f±Pn³\x0017ïã+Mb-\x0003\x0018ÜÃ\x0016Zy\x0015ò9ÏÊ<hèE\x0007±à8\x0003QìÞË÷Åjò\x0004\x0017¸]RÙÌØ¡Ép«Å×fÎl¼õàÓÓÈt<e6qæ*A]dK\x0000^ÖÖ®Q×¹Ëee&ù¹\x0001Ía³T\x0000\x0017¤´\x000b6¤\x000b¿B\x001c¿+³jòæ{·²FròåqÉÅ\x000c\x0013TcswÀ%m\x0008\x0004m$\x001b\x001bõ(ì\x000b\x0017NókMV\x001ebbêm®µ[ªc¥²SRJ\x001dF¹*nÚÖ´ÜÛ¬ÇKN+½h<«S}\x0007\x0006u;\x0014\x0006\x001cÞg¦¹*5ÄÛB\x0018éÄÂ¹ÿNO/A§Fh\x00026Á\x0004\x001esÜ00.\x00134
\x0015ëCm9\x0003µÉ 9\x0011Qí\x0018Á{å\x001d%û\x0014è\x000c7òkNê%hé`óN¢L
«ý 6Ñ_em®K%ÃmfnK§÷]Û&¨(æqÏÖ#5«À£oª"¢	~5`~_ôW¥n×é\x0005}\x000fªö§\x001a'åÖ¤hÊ¸Û\x00177£Æ±ÿFx;l¸Ñ_.\x0013k\x0005È`íûó\x0001CI.°«õ½¬ö i\x0006À*c&\x0000]R«¨Aæ¥ËP¦Kq ©{ôIG¸£r\x0017(¦£Fa&OÒÜÏä\x0006\x000c\x001fà\x0019 \x0016\x001ff!û.¤\x0000á6Å'½\x0017â\x0008)´Þ\x0018,m^\x000b?åbÑ\x000b\x001cw?û+æÀ~Ãrß\x0013=d\x000f#»3zêÀt¹q@1\x0003\x0019ÿÙÔôNæKS\x0017²ZíÙ1éË`·9Î\x0006[\x0008*ó&Òº¤^Î§XÌY\x000f\x0006ôÂä®ö¥Aa¦ï^\x001fS&xBåD\x0007\x0011\x0011.ñª\x001að*Äë¼ó6ì,½Â%öqÏÚÔ¬ïWîQ+Ï
ó6ÛE#°ýKå^B"Ô\x000f¥\x0008*N*\x00058\x0011~Wðrº/Ã=Á¬zæ\x0003¥ºÙ'
Æ\x0005åíb\x0003zÔï¶F|c¥;Br]X×:ê©(UÈ\x0017{¸ÁMsÉ\x001e\x0004\x000c\x0010: /á¢øæ°ô@ßIÞ×°YChK
PÅ3X,\x001e¬R\x0006kÒ0+½¹Z\x0019Á,Q\x0012êtT%»5;ã\Ò#1·\x0008«y¯÷Õ\x001bJ}¯3ÕúAB_Ñwöi$\x001e\x0017ã±\x0016kÜÅåº\x0018IÍÒÒ@L\x0017b=\x001dowH1Ð
\x0016¹o·ªýw\x0008XHMÙ\x0008íÔ3â\x00086±èÅ?ÃÛ9²¿võÄý±\x0008ïÐlL&\x0002K\ÜÜ%½[\\\x0014iÀÛNpºÎ°ÂæÉ.Ì\x0005)Ú\x001azí\x000c:
½ÒM¤vé_Tªª\x0007/*zõ\x001dÔÅ{Ïj%¦Ô\x0008áÍ?Þ¾¸í6¾oÐèÞ>Ý¤öh°P±Ëó­\x0014eÅXBÓm(¹¡ò?Çp®¶]ë\x0016òS2\x001b£\x001f[H\x0000ÿ>ÎY£A\x0003K+ÚïjÕãÑ	Óº\x001a¡áÙÙF\x0016¡ ÷UwÊiw4U`@½¤\x0003N®\xµ\x0019ú.\x0018\x0018^¡¡ðóá³-è/¿j!f\ÑÖeÀ-9Vm\x001agç\x000cT&ýµ\x000f^\x0005=Lö×\x0007ZNª-Ì\x001dÔ°^¶Â?Âª¤â
ñýè®\x0012\x0006yUGHÄ\x001by\x0017\x0006IOaU\x0002¶Ü\x001cL¼.+¦\x0002áÄÍµq´ïÒVTÔ*GÖtdöioütîçÞ²£ô­ò>\x001ehåºÒOÓF.kØ\x001aQR7¾m;ül#+ûy*lQÚC§#hKÂÚ§@ÀÔLK<Êý°ÁÉ\x0003u@éú\x0005!|Gv;-£¹\x0001q\x0016$l4´Mî¾Â\x0005_\x0008óAû!ø	n0rk\x0016 ÁhÔX
¾ú<B
©ZëÔ,G¾FýÏv¥*_¿^T%X;x
ZÏ¼c\x000b\x001fÀ@b\x001dhÜCóÓDûKÃ\x001a«T\x001aÝÉÖ=^ÿ!þù;à÷:Èendstream
endobj
20 0 obj
5478
endobj
4 0 obj
<</Type/Page/MediaBox [0 0 595 842]
/Rotate 0/Parent 3 0 R
/Resources<</ProcSet[/PDF /Text]
/Font 13 0 R
>>
/Contents 5 0 R
>>
endobj
14 0 obj
<</Type/Page/MediaBox [0 0 595 842]
/Rotate 0/Parent 3 0 R
/Resources<</ProcSet[/PDF /Text]
/Font 17 0 R
>>
/Contents 15 0 R
>>
endobj
18 0 obj
<</Type/Page/MediaBox [0 0 595 842]
/Rotate 0/Parent 3 0 R
/Resources<</ProcSet[/PDF /Text]
/Font 21 0 R
>>
/Contents 19 0 R
>>
endobj
3 0 obj
<< /Type /Pages /Kids [
4 0 R
14 0 R
18 0 R
] /Count 3
/Rotate 0>>
endobj
1 0 obj
<</Type /Catalog /Pages 3 0 R
>>
endobj
13 0 obj
<</R8
8 0 R/R10
10 0 R/R12
12 0 R>>
endobj
17 0 obj
<</R8
8 0 R/R10
10 0 R>>
endobj
21 0 obj
<</R8
8 0 R/R10
10 0 R>>
endobj
25 0 obj
<</Filter/FlateDecode/Length 372>>stream
x]ÒAn@\x000c\x0005Ð=§à\x0006±\x001d2$R4tE«Jí\x0005`0\x0015\x0010DEo_»é¢\x001fñÅ@ü7§óËyîõæ}½\x000f½×ã4\x000f«Þ®µhÝë×4W,õ0ûoóßréjszíÏïEk; cÅq¢\\x0007½-]Ñµ¿´:\x0012åã8æJçáß­m'úñys²UÉ\x0011j
ê6G(íP\x001b»ÜyUÔd-jëw÷9BQ\x000f9B©AírÒ\x0001µÏ\x0011j·¨%G¨õ1\x001c¡ÖÕ\x001c¡PÇ\x001c¡V¬²i\x0011"mQMÃ.J °i\x0010!Æÿ²iØE
d\x0013!DÛ\x000eÕpì@õÃ\x0006Dv\x0000²YÙ½	3³YÙ½í\x001eÕ¬\x001c^\x001fÃ¬\x001c^\x001fÒ¬ìÞ4 Ý«ð²YÙ½É_eV\x000e¯OeVv¯@d\x001fÊCÔõ¨f\x0015÷ö^aõ/(øFbV	/^%f\x0015÷
Æ\x0010³{w\x0018CÌ*îm\x0006ßç`°X¿·î¢uy¬«Îw_R_J¬ã4ëß\x001e/×\x0005OÕê\x0007ùzÀ%
endstream
endobj
8 0 obj
<</BaseFont/GBGOAU+Calibri/FontDescriptor 7 0 R/ToUnicode 25 0 R/Type/Font
/FirstChar 1/LastChar 38/Widths[ 226 423 503 537 538 537 473 494 537 246 399 537 347 316 355
418 246 258 606 276 503 653 418 459 474 537 813 494 537 255 258
539 539 267 331 306 532 874]
/Encoding 26 0 R/Subtype/TrueType>>
endobj
26 0 obj
<</Type/Encoding/BaseEncoding/WinAnsiEncoding/Differences[
1/g3/g62/g286/g374/g381/g437/g448/g258/g282/g349/g400/g393/g410/g296/g396/g277/g367/g859/g4/g855/g288/g104/g272/g454/g336/g271/g373/g259/g346/g361/g853/g872/g873/g856/g58/g882/g87/g68]>>
endobj
27 0 obj
<</Filter/FlateDecode/Length 575>>stream
x]Ô=nÜ0\x0010\x0005à^§Ð
3¤D\x001bX°±\x001b\x00171\x0002$\x0017ÐJ±µ¼.r{¿÷\x0018§Hñ\x000cø#~
OO/Ï/ÛõÞ~\x001e·ùW½÷ëu[úqû<æÚ_êÛuëÌûå:ßÿVú;¿O{wzú1í¿ÿìµÇºvÖfÌ·¥~ìÓ\i{«Ý9r^×ÒÕmùo(¶â²~OµÒ\x0012<\x0014^ZB2±´¬ÑTZBvCi	ãÊr,-!G\x0019ÿ|ÐhbùXZÂ8³âÁ\x001eY^JK\x0018õÝ¹´¬µKi	£&×Ò\x0012ÆÊr--Á¹³\x0001Ï`ta		GÀy`	5à\x0003KàLÀ\x0004\x0003Î\x0004¬\x001a\x0005Î\x0004\x001cµ\x0015\x000cFy*ÕWa5y4X\x0019\¬\x000e	«5/oÒ`5ykf	«É\x001b5
«É\x001bufXMÞÈ¦ o
¶âZÕå­\x001aÕå\x00149¬.oÔdX]ÞÈkwX]ÞHÃê­¡\x001aÕå\x001d´3¬.oâm8¬.oæm8{K¯
ú.¬.ï@\x0011\x001a¥`-{ä°º¼ib	«Ëë\x001a5
¸\x0015Nªàümà\x0014ü.
>¤ÉÀE\x0012E\x0011(ÑªÉÐDF~\x0017h\x0005ù{Æ~ç¨¹Öâø±\x0011ØãG\x0011¢ÖâøQª\x0012Ç"$v? e^{&I4]XB$º¨&µÿ¼+ \x0015\x000fÎ{N\x0010%µlP	\\x0012pàm \x0015
¡µÀ%\x0001gÆ\x001d(ØYÇ\x00000©e«ÖÂÚOtÐÛñýHð\x0019áëÃÇçuz¯ýüy\x001cu»ëÒÄÇèºÕ¯Ø~Û¹ªGº/Q.
endstream
endobj
10 0 obj
<</BaseFont/LGAZPG+Calibri/FontDescriptor 9 0 R/ToUnicode 27 0 R/Type/Font
/FirstChar 1/LastChar 74/Widths[ 226 579 525 349 527 391 525 498 229 250 479 335 229 525 250
799 452 525 433 423 498 305 498 525 252 420 525 423 507 507 507
471 479 507 507 507 507 525 517 459 453 850 543 855 319 306 533
615 507 507 459 623 252 525 239 662 303 303 642 268 498 646 715
512 512 544 690 567 487 479 715 631 527 488]
/Encoding 28 0 R/Subtype/TrueType>>
endobj
28 0 obj
<</Type/Encoding/BaseEncoding/WinAnsiEncoding/Differences[
1/g3/g4/g393/g396/g381/g400/g282/g286/g367/g859/g258/g410/g349/g374/g853/g373/g448/g437/g454/g272/g287/g296/g288/g346/g856/g62/g271/g277/g1006/g1009/g1004/g336/g259/g1007/g1011/g1005/g1012/g395/g87/g38/g455/g392/g90/g68/g58/g882/g18/g24/g1008/g1013/g94/g44/g47/g438/g361/g75/g894/g895/g104/g855/g289/g69/g449/g872/g873/g17/g857/g115/g100/g261/g1081/g39/g384/g28]>>
endobj
12 0 obj
<</BaseFont/KPSHBO+TimesNewRoman/FontDescriptor 11 0 R/Type/Font
/FirstChar 1/LastChar 1/Widths[ 250]
/Encoding 29 0 R/Subtype/TrueType>>
endobj
29 0 obj
<</Type/Encoding/BaseEncoding/WinAnsiEncoding/Differences[
1/space]>>
endobj
7 0 obj
<</Type/FontDescriptor/FontName/GBGOAU+Calibri/FontBBox[-18 -178 805 685]/Flags 4
/Ascent 683
/CapHeight 683
/Descent -178
/ItalicAngle 0
/StemV 120
/MissingWidth 506
/FontFile2 22 0 R>>
endobj
22 0 obj
<</Filter/FlateDecode
/Length1 25468/Length 10767>>stream
xí	`TÕ¹øÏ¹÷Î¾'³O&³OIf²/$$CHB\x0016Â&@ !  "\x0008D\x0016EÑÖ
E­¸Ô¶.µ.mÑ2\x0019Pà¨UÔZJëZµ´Uk*u©\x0015MòÿÎýfBX±õõ½ÿ{ÎïþîùÎrÏùÎ~'@(!DC6\x0011ÌÙ\x001e)"â'Æ.'õ-ï]þ\x000e5\\x000eö½Æ\x001dü[d>Ü¿Jä£SVºüÇïÖÝMô\x0005B\x0014é§±þ\x0014\x001f\x000eòùÒ%½ßüè:BúêAY¶\x0014\x0014GT5è\x000eß¿tùuÉçuB!=cE_/ú[\x0008ï]Þ»n¥pÏ\x0012¢Ò}fïò%Éò°ô¶+V¯A¯\µd¥á±Ü	ñ³	1y	ÝLÈÈVrôs\x0001¸\x001fmä^ò\x0000yüü|H¤\D\x001e& ï\x000fÈgP\x00195Ñ\x000cC¾±ÏÈw$ËHÑ#£ïülô\x001d°¡vf+ø,Bð¨f4mtèXÝÈÖÁç¤*¢\x0017Óê¹g@{\x000e\x001eáj´ù¹KØ½â°ìæí#·L(ÎJ²ôud=Ù@Î!\x001bÉyä|ò\x001dr1¹\J.\x0003[\x000f÷+È\x0016r%¹\M¾G®![Éµä:r=¹|ÜH~@~\x0008v¼ÜLnI1ÿÍà®\x0017CYÈmäNò3r7ð'ävr\x0007¹ü\x0014ü?\x0007ëßM~\x0001:Ô ÿ\x001eÐÜJ~\x000cÚ;AËb1Ývpq2@\x0012d\x0007Ù	mþo<Bî#÷\x0003wAkî&{Èä!hÇG e\x001f\x0013uLòyL¼>Nö'È>ò$y<
=ã\x0019ò,ÙO#ÏÿK!Oiï\x0005ò+ò"ôµ\x0003ä7ä ù-y¼B^'¿'o· ×½÷ðßA!ÎkÉXoB¬?w æ\x0010ÄÄx\x0018çU1ôm1\x0003ö
rÊÉÇ#Q¸c­w½ØB7íÈZµÎí¢Y{l\x0007?k¡»ÆÚæ\x001e°ñ=ÐÌÇîl_@Ü\x0001°`Ê~Ç·ÚsÉÖA{ï8Ì\x0016,dÒ\x0016O&[åóÐXÚgÄ°î±±\Z\x0014køqÖyu
ÿHþ$Z\x0006­¡G­Çb\x001c8ÌÊ,¶}\x000bÒ¢õYZ¦\x001f½\x000cþw`vx\x000f,Íø\x0017±%þBþ<vÿçdø\x0010ù+y|,^\x000f¿Á|ò!ù\x0008ü\x0007Íað}Q{¬æ\x0013pÿ #Ðáq¾ácBÉ\x0008´1¡r'#GïjE\x0011¨JaNS\x0005UR5ÕP-ÕQ=h&¨ÆB\x000c_\x0008Q\x001f'L!jÒh:5Â|i¡Vj§\x000e74º¨zÇÙÆBÜ\x0010â£~\x001aHÅ¶±´.a\x0019\x00177\x0016Ðµp
Ñ0À}!-¡¥´V&\x001füEà\x0004a\x0005"ë¢\x000b\x0017tÏ7·«3ÖÑ>gö¬3Ú¦·¶47Mkl¨Z7%Z[3¹ºjReEyYi$\x001d\x000cø}^ÕhÐë4*¥B.J\x0004£$¯Á×Øã\x0007{âBÐ×ÔÏü¾^PôSôÄÝ j\x0018'îî\x0011£¹'ÆBÌS\x0019ÅÑ±Tï®&Õùyî\x0006;¾¿Þç\x001e¤sgwÂýz_;>$Þ·÷BPôhÀãñ@
wui½;N{Ü
ñÆ³nnè©ü\x0006TÊ©¾©Kùyd@©[\x0015ÜÅ³}+\x0007hv
\x0015o¸ìI\x0003\x001ckØcã| ¡wq|ÖìÎzÇÓ%êÈT1¯¸tj\&æå^ÆÊL.w\x000fä=²ùA=YÔ\x0013R/ö-îß\x0019ç{!Ñf¾aóæKâP<ÇW\x001fÏÙpÈ
U^\x0012ÏóÕ7ÄC>È¬uÎØ\x0003h\\x0012ÐûÜ?&PxßÐ{\x00135½I4 ÿ°[VÅ13Axê@Ù P?åòÁ(Y\x0004ø¦ÙèwE\x0004FB]q®<
1ÅXÈ¦TÈXò\x001e5UCOò{öRk|Ó"w~\x001eX_ü\x0006à\x000báî8\x001fìYÔ·±wÉf_}=Ú­£3\x001e­ho²®
\x0003\x0005\x0011ßÛ\x0003XÆÌ0»3\x001eñ­\x001b}u\x0018\x0001\x0014nÖ\x0006ËÚ;Å$ÉdqãÔ8ééK¦G\x001aêY¹Ü
{ê±,/ßìÎ]¤xô\x0012·cG1)!]¬\x001cqóTh`ÃæÎÅ§Ä]=ÅÐ?Oqw:<ñh\x0017¯Ë×¹¤µO\x001fÏy\x0003\x001eç\x0011(¦º\x001d\x0013;\x0015Õ\\x0016»;9\x0007ßÅZ\x000b\x0014îF¸øêª!@\x000fÍ%zYÖU»;©¤¢ÁS1ØÝ|ÀÃ\x0007¦6± %ÚäðtyðóOäHI\x0012ËÇå¥\x0007ÅXð9_Z4Í
ãnXR?®\x00132$\x000bÌíøåä-\x000f\x0014rÖM© >\x0000#\x0017t\x001cd#ªX+ZÝq2ËÝé[âëòA\x001fÎêduc¶\x0016Û·µÝ×:{n§ØÚÉ^Ò1Áá\x0015è\x0013\x000f\x0004§<ÜTè!GªYEÿ4Ñ?æm:&¸9\x0015ìÞ,÷µ¶ofû\x0019\x00127 ¨´4ØÜ{yEZ	\x000cÍFÝ|½>·ÞÝ¸¹wptÓ¢Í\x0003Ñèæ
=K'±<|Í7ûÚ;«\x001dbYçtntl`J#­´µ£.?\x000fæº\x0001\x001f½tö@^Ú>·s\x0017ì[Ývt&8ÊMí©ë\x001aðCXç.7!QQË1-S2yXNsÀ#\x0017ã;vE	Ù$
¢Bô÷
R"êä)\x001d%}\x001cêô)\x001d\x0007:\x0001uQQÇ>ÐHÖ¥`bn\x001bÜYóÛµtsO\x0017\x001b\Ä\x000cM	_\x001a§¾\x001a\x0012ç|5\x0003ªãJßº¸ÊWÇôµL_z)ÓË cÀº\x0007ÆasÒæ\x001e\x001fÌSÐ¡:bWäYîÁÑÑNÏ~ÇP\x0007ºÚ|¹qE\x0008æ~I \x0005âMcÒ\x0003êiñM}½¬\x001cpbieæ¾.è¶©\x000c!Js\\x00019(9@F1
ë¨\x000fÚ\x0006\x001aPL¿	<ñM]ñ®\x0010{hç².±;ëã¤É7	\x001dó\x0004Ù"]Ó|EâØ¡ \x000c\Â ²öNÔ8À\x000b\x000fëB#ÉÔPò>\x001f\x0004õõ¸ÁÚ\x0002ék®s©Ò%0%
Á%¢(\x001dÉ@ÂªÅ\x0007T\x001ae\\x0011\x000cáËîUa6$%\x0001YW\x0017\x0016^ô]\x0000ÏÖÇUP¢à8S&\x0013u ¨\x0005¾@QYÔGY6³\x0007É\x001cß:YX¡Åd\x0010\x001c×\x0004{aòÇô*Ðø*RålP%óØZ\x0019«¹\x001aìÎ\x0007:\x0006Gïò­÷ûäçùØâÀ:&qìMº6\x001f«Ï\x000båçÉÕjDõæÍrÍñ\x0013 ½ä1@Wãà\x0008¡{ç|®\x001béU¼Ë4ã?üj¦\x0011za/½¾\x000c\x0006Dà\LÔ\x0019££Ð,t@Á\x000fr&2®Aî\x001fÌ\x0010àDf\x001eàï\x0011\x001faØèû\x0000ñ7ÄaÄû¿bÌ!Ä{¨ü\x000bâ]Ä;·\x0011Fü	ñGÄ¡D¦\x0002ð\x0007ô½x3áL\x0003¼pÚ\x0000¿O8#×\x0011¯!^E¼Q^FßKß!~8ø
â\x0000â×\x0017\x0011¿B¼x\x001eñ\x001c\x0016b?âYÄ3_âcÆO!DìC<Øx\x001cñ\x0018âQÄ#1Ï\x0010\x000f¢r\x000fb7â\x0001Ä.Ä â~Ä}{\x0011;\x0011;\x0010	Ä@"£\x0008\x0010GlOd\x0014\x0003~¸\x0007q7b\x001bâçBÀÏ\x0010?Åtw!îDÜ¸\x001dñ\x0013ÄmüÇ[\x0011· nFÜø\x0011fýCÄ\x000f0ùï#n@\¸\x000eÓ]Ø¸\x0006ñ=ÄÕ«\x0010WbÖ[0ù\x0015Ë\x0011\x0011!.Å\x0004 .F\ø.â;\x000b\x0013\x0012À\x0005Mó\x0011ç!6"ÎEØXXX8\x001bÑXXX8\x000b±\x0012±"a/\x0005X8\x0003q:â4Ä2ÄRÄ©S\x0010K\x0010\x0011}E^D\x000fb!b\x0001¢\x001b1\x001f1\x000f1\x0017Ñ°\x0003:\x0011'#NBÄ\x0010\x001dvÄ\x001cÄlÄ,ÄLÄ\x000cD\x001bb:¢\x0015ÑhF4!¦!\x001a\x0011
zÄTD\x001db
"¨EÔ &#ª\x0011UIÊµ\x0012P(G!J\x0011%bD\x0011¢\x0010Q Â|D\x001e"ÈEä ²\x0011Y "°T\x0001ü\x0008_ÂÂz²7a\x0004ð Òp!2\x0011ND\x0006Â°#l\x0008+Â0#Lø\x0004#>!\x001di\x0008\x0003BÐ!´\x0008
BP!\x0008\x0005æ)GÈP)EH\x0010\x0002Gp\x0008 "è(b\x00041ø\x001cñ\x0019â\x0008âSÄ?\x0010¥\x0017kD?FåG\x000f\x0011\x001f þ8x\x001fñWÄ\x0010â=Ä_\x0010ï"ÞA¼ø3>ïO	³\x000fðGÄ¡\x0019z\x0016ý\x0003â­¹\x0002ð&ây*à÷	s=àuÄkW\x0013æ\x0006À+	s#àeÄKßaÖ¿E\x001cÄÌ~\x001d@ü\x001añ"fö+L÷\x0002âyÄsýg\x0011Ï`º_bÖO#ÂÂ?ØÏ{"a®\x0003ìÅ\x0004ã\x001eÃR?=x\x0018ñ\x0010âAÄ\x001eÄnÄ\x0003õ.Ìz\x0010³¾\x001f³¾\x000fq/b'>h\x0007"\x0018ÀÇÆ\x0011Û\x0011¿À¬ïAÜØø9âg	\x0013L¸ô§	Ó\x0014À];\x0013¦6À\x001d	Ó\x000cÀí	ÓLÀO\x0012¦9Û\x0012¦(àÇ\x0018åVr\x000bF¹\x0019£Üa?Â?Dß\x000f0æïc\x001b\x0010×'L³\x0000×aòk\x0011[\x0011×`¾1¯ÆW!®Lf\x0003¶`Ì+\x0010#6'Ë\x0012Æ.À¥	ã|À%	c7àâ±\x0005pQÂ8\x000fð]\x000cû\x000eÆ¼\x0010£\\x0010Ý\x000e<¬kp½¯mr½¡áz\x000cäQG@\x001eVäJ\x000cÄA¶ü\x0002ä\x001e»A¶ü\x001cäg ?\x0005¹\x000bäN;@n\x0007ù	Èm ?\x0006¹\x0015ä\x0016K]?\x0000¹\x0011äû 7\\x000fr\x001dÈµ [A®\x0001ù\x001eÈÕ¥®«@®\x0004Ù\x0002r\x0005È =?ÎFßy4ÖÖ V'\x000c¬'­BXX8\x0013±\x001cq\x0006âtÄijDUBÏ0	Q¨@#Ê\x0010¥\x0012D1¢(¡cÝ²\x0010QHC\x0018\x0010z\x000e¡Eh\x0012Ð\x0006TP!\x0008\x0005B%4¬e¥ÑyÀ¿\x000c¼\x0007ò\x0017wAÞÖû=Èë ¯¼
ò
ÈË /A+ü\x000eä· \x000f<\x0008²\x0007d7È\x0003 7å¤dÞÞ0°\x001e¾\x001e³\x000e±\x0016q6¢\x001f1\x0015Qv"j\x00115ÉXe\x0013ÂHGmÇOhCLG´"Z\x0010Í&Ä4D#¢\x0001Qð"<X@7ÂÈD8\x0011\x0019\x0008\x0007Â°!¬X\x0007\x000bÂ\x001cý!p\x0018äsÏ@|
ø\x000fO@þ\x000eò1ÈG \x001fBË}\x0000ò7?ü	ä @þ\x0000ò\x0016ÈÐûA\x0005y\x0006ä O<\x0005ò$È>'@ö<\x000e2\x0008r?´ê} ÷ì\x0004Ù\x0001òC±7¢ÏE,K\x0018Â¥SÑ\x001e§  \x0016#ú\x0010\x0010½\x001eÄBÄ\x0002D7b>b\x001eb.¢\x000bÑ8\x0019q\x0012"è@D\x0010a´q>"\x000f\x0011Bä"r\x0010Ù,D\x0010\x0011ÀFñ#|\x0008	B@ð\x0008\x000eAq¸èmÀQ\x0011·Á¢\x0007A~\x0003r\x0000ä× /ü
ä\x0005çA\x0003\x000bï\x0002¹\x000f¸¾Ë]ß¡a×Mb\x0017lÛ\x0014;¿icì¼m\x001bcªU\x001b[7òª\x000eÀ9\x001b·m|e£ôÜ¦
±s¶m	\x001b\x001b8åú¦µ±uÛÖÆTk©úì¦þXGÿ¡þúycGÿâþ5ý×ö\x001f\x0000ìöþý{ûùÁÑG¢iý\x0015Uú¯îç\x0010Î~ªcjO¿JÛ¸¦iUlõ¶U1aUÉ*®êÐ*úÂ*Ê¹WÑèªY«8µc?»Å\x001e]e¶7UîU\x0005«ø³VÄVn[\x0011;³iyìùåôt¨ÊiP¥eáScK·\x001a;%¼8¶dÛâX_xQ¬7Ü\x0013[\x0018î-ØÖ\x001d\x001f\x001b·mn¬+Ü\x0019;\x0019â\x0014îÅ¶uÄÚÃ³cs¶ÍÍ\x000cÏÍ\x0000}[¸56}[k¬%Ü\x0014kÞÖ\x0014ÕD§\x001bc
|¸(ÉïÊÌM3\x0005Us¥[é|ÃyØÉ¯Ì8Áï :ûùö«ì¼\x000e.\x001c^l.ÛU¶[lÛm\x0012xÃ«W¦mJãV\x001a6\x0019¸\x0002CÔðá
@\x000c·\x001a8ÝUº[tÛuüLÝBÝûºQ°]G·k\x001fÖ>¯öð3µ\x000bµ+´¼NË4¼>ª
\x00176ê4.MDÃWG4µ\x001aþ*
jÂEQ?«±V=S½PÍß¢¦Qu0§ñ}å¨*!à}Å¨\x001bUPÂS7¥ê\x0001¼\x001c¬¼\ü\x001eÊÞöH\x0008¥W\x000ft´B­²Ñ9­qÅ¬yqzi<ÐÎ®ÑÙsãÒKã$6w^ç\x0000¥Wv
PnjGÜÈ^\x0006þ¶l!ÎºÖ¸³½3Áßz«³®«5¾ÝG£âý(»'\x0010¥+´`uÿêÕkB«Cp\x0001Y°\x001a4kúá+Â\x0015Ø¿¬YM JèK>«QV÷/ì´àY°z5Ëµ?Ä|LØ\x0013þï~èw\x0001þÏ~¬\x000b\x0017\x00106¤ÈÈjþ\x0015ðDF*I\x001bA:ö\x0010
½XÈ$úÌÎúzy¾ì!ðrÄM!r\x00187EÓ\x0005NãpÔúJ¥Wð³
Íµ²+¸\x000eR;üúkûà²?­2²F^\x001b:8¤\x001fÞg¨\x000c\x001d\x0018*, \x0006A\x0014£É¤R7Ìf\x0005Ëj¸Ò Ï«åD]IYy
_\ÉñÆ¦c~Ê¿òùL¾aØÏ­÷Tµ\x0017Jh(`q¥Ëå¼+S\x0013(vëZÛ|eÙv ò\x0012¹,«¬Î\x0017[Ûâ}NiÍÊpfY@g\x0006pø1öÈ\x0007\x0012íg'\x000bõíáÞ®ì¬ñK×kTD!¿);Óä/ÌÜªÑi$ZÅ!\x001b´ÊÜ¦Þá\x001bí\x0001Ri	Ø3\x0002,¯Àp\x0015XÄ2zDx\b$^\x0012$o²é&Ö¹øGßÞ©ÒÑé¾ÁÑ·£ì. Öø¬\x001ab¦ZsP¥ôyÄ-ø¨Á\x0017\x000cÀj\x001cÍª¦ñjuÓïóe*5fâóZeiÎ9i1IXkkkÓ,\x0015b\x0003Xváîb{ÛP\x0011µE\x0016tÛ­û7^²w/µî]Ð·\x00050\x001f9&\x0016ã^vóï<­° \x0014ê
ÍØnY¼G¦å}Þ`°¬bcYd>Þ#\x000c¨¥æÂâÊLµpò} qÂ%F©^%Õûj«\x001a³\x000cÒÇèýtÅ"®IÂ+ô\x001a*\x000ckÓUÔë\x0013Î5T<¯2§ï\x001b~\x0019æ{~ô=Î\x0001ÖÍ&])Û\x0012îÚN­o\x0002¶[÷§[­¬^V¶çJN¢ÛÛC\x0007ji$\x0002=Îøªx\x0005]\x0014;4ÕÉÄÞhHzLÃ3sÓÌªB¿Z.åxF©°ff;\x001c9\x000e­ÆY\x0012\x000c\x0016¹4tiç¾\x0012V¯ÑZ¼voÄ¡Òh5º@M!¿^©SJ$pa¿fl!ïºØIkª.&îZh\x000bnI,m\x0001£Ò\x000e±xC!¨Ä~VèFÒ\x0007Xé=ÞàÑ\x0012\x001b<lät°Ç\x000eo÷äk2YE\x001az\x0003+Ì9\x000euVpR¯JáòÙû*[\x000e+Ýè\x0011éY0\x0007T°tQ¦ À\x0012(ÃV«}[¼Ó_¨V+áæ~â/mS«¬»i>ðèáz\x001f7½ppôpÔÍî,zvÕàÕ\x0012)(\x000cK]Ù³]±±ÎÅz\x0017X·**j\x001e\x0018*2\x0014ëÙÅP99R\l(jßûÍ>%e+6\x0018|u^èÆÔg\x0018S°\x0008ú1-f=Z´¥ô,³ à/ÈPs#	i®\x0002¯·ÀÆ\Ï©2# wªÊòï\x000e×\x0015¸ÕÔ*P¯ÆS\x0011\x0018pdÙ4þ}\x0005çg4\x0006%/QéUBÆg\x0018Ó_P\¦óUæ~>ÌÓÜI~\x0016RAßfí ðÐ\x000e\x0019$lÂ\x0018ðKws[8¹G£
b\x0008}\x0001rhTªf;9ÊihgÔ4[-Võ\x000f\x0018½C!f]=\x001b¾û¾^ÂÔÐh!è\¤$ÌÔl \x0008|ý\x000fn:CY\x0015,ÎT\x0017fÓÂpûµ\x001dy#C\x0005m9+Ï®eð\x0017-ÿéêê¾±º_\x0011È,5\x000bÏ_Tß«\x001aiöNA\x000f¼bô\x001dá\x001e\x0018\x001f!r2Ö{\x000fqsWÃ\x0002eæ¶FÕÊà\x001cý\x001cX\x0001\x0007;"¥F1\x0002è@âúâªþI¤£#}Üè6\x0018\x001dïÂ=>uáÇ.¦vA`à\x0004§õM®YT\x001fPÃ@
\x0016fªé[k÷\X?ùÜ]çòé©\x001a
\x000bmgµ\x0004Í§×óªµæ´Ñwø³ùßb\x0012¥9X«ÂR2ÈÍÛI²²È¤A®!ª7ð\x0016ú¡Z\x0006Õ%ôó\x0012ZÂ\x000e\x0016
µN/)	OÉcrÔñò\x001b½[¼\Ô;ËÛãåu^S\x000b^¯à\x001c\x001c}#ªUCV=ms\x001e	·Lf«\x0002<\x000fEÕm\x0002±FÐ\x0004C¡\x0010ÎçÝÝ\x000b»ØÜ\x001eê>k¨û,0ßÞÊ\x0008ôJfCÝsiÄqÊ\x0016`°´4¹I`S\ÊzÝØ\x0016¡F\x0010KÆ4&£¹¸¨¬?Û\x0018ÊÍÏ1o9iÚÚ\x000b&¯ß¹ödCÖÚ¾éÅzA%Uf4.XQµìº¼Oz&TfV[Ú\x0015viõ2^;­ª.Ð|FÓÕ­þ²ÜÚ\c7Ck\x000fZ\~§/3='vñüÓüÅhY	\x0019\x001dÅvË\x0005)\x0007\x001dTJV°Ö>\x000fz0¬$¹d2¹>ÙÚJOÙn®Hû.\x000c^²¬Ô#H
Rc¯`¶F5Á\x0016G£~z¥Øq+Ùë¨¤m¬ã¥`&K\x000ecÖD÷ý«y\x001b\x0002Y¦/\x0005\Æ%I3Ë\x000cf³8ÂIÉ¢«æåÏÖàWÙr3]96¥\x001aæÄ@Sí­¯oÊîÛ|röÈgÜ©Å¶â²ÌÒÞÒÂú|#}oíC\x00177\x0019rzU:¥ (u*O©WI¥*½r$\x001dfQíÌwôW6§Pë-Ë\x001eù]ý´¢Y§À,Ð4ú.ïá\x000fRrSÒ\x0019$ë!n
Ñ\x0012+îØ¦ÆÏ^8¥·\x0008\x000fÐ&R\x0008}T¥¢mybõóØ[«¨¢-µÌjÙbÏú9\x0007÷üÛ9áZ"\x001d·5¢×ç;SÄ
¬È¬ZN\x000ezË\x0019åS×Ý¾(»mj©Y!ázC°¤©hÑR{q[qIkEP£PË¸ÝgÕY<v}tãÎ5\x0017?¾©FkÍ4ë¬>Û¤\x0008tÈ\x001b®i:³%à
º\¶£h\x001aÙ*Új\x0006Y°ÈéÓÄG\ôQUí\x0003\x0017\x000cúe¥$ÊlE
¡Æ\x0015d2uÝ×ñKÃL~7µ\x0016Ò\x00005÷ÉÛHmñ0l rI+UVÂJ\\x0019è÷C§+,ÊJd\x0016³9ÙiRq©,={VÖ º=bNÓ{ªÚòóZLrAg\ãÌPÈ²\x0016]8åD­âuJ²&9Âu¹&µV©·³]6³:S\x001f³m|øü¯°\x0015GZaÄ>+Y\x000e»ôJr]²g©\x001c»9v\x0004p«¢ÊtO£ª2Ë!hsS\x0003\x000bf»æ¨ÂÚR"ö\x0012ðíjÛ$ÓSË$*\~pòTü«yßõÌ±\x0001Ê\x00078Û¡qËùgÖLw¶MÕpÃüS¶te\x0017/ºfaëj8<3ÔGÊúÊ
§Li9õ%öÂâ2·75\x0014ûZæÀèëcCtr\x0015ýCj\\x000eÔ7\x0015ÎYRZqZ{Î[ÍìÖ\x0002v»\x000fV°\x0010)¡\x0012´ÛôtO\x001eûu9T"\x000c2Ëyø¼ô<Î÷¸À\x0016\x000b¶\x0011A/pÓg	=\x0002w«\x0010\x00178AÈEvèh\x001bcÔ
q"-Ö¿\x0013­^Ë\x0019x­Âª¦m
+DP|\x001aÍH
¸Ð\x0001X kE÷Y\x000bºCC\x000bºÁÞE¯
B´øöÙâ\x0014*õyÆupÓÄ3eí$ãïËñ\x000f¿é¨êR·¸¹@§PËyNk&Í]S·vÇºª³vÚÊ[N)ø·°`ZÄÆÑ#á¼Êî)ÞtKº,Íc3»Ì:­Õb¨ÞðÀÆµ\x000f_ÔX×ë\x0002÷iëýÛ#°\x0002í"®@Ðeô\x0003ZJØ`\x001b=Â}_²\x000eöñ«­eÖ\x0013Ç ·pGAn@9H;Ê¦Ù©Þ\x0019©ï¾hA{º¾IÜ4³.YT\x000bÀÞâá½Åpc¤ò\x0004\x0013[^Ä~jBëHÇï aYO­æ¢µ\x0004îû\)\x0019l^#Ë®þ\x0002\x000e)Æô¨3üþB§jezº\x0004T+ümkgg5fk\x0015ðÓ.Ée@UhÒí,\x000cS\x0007-îÅH¹3Û¢lwÙ¼0\x001cámY'\x000e'oãMj`¦\H¹äùf¦®@ÆWøZ[\x001eoá]-´åÍ§a\x0017¯¦ê§Ûif;µ¶Óö¿í7Q\x0012ÞÄéL¦
þÓê¦\w^Ý:ÔÑºý\x0015-ºyTÏÏ{6ê-ôÚ¡îî´ÊZqOÃ¶7àí>(B\\x001dÑØø'«ZèW?üè³«ë­ã:ªû§Ï_p´\x0004\x0013
ÐÚ\x0005@£¤¦ó`\x0014&l³ÅÉÆ½o)ýWIxÅyÈSd¦%Á±ýV
Î¦-ôñ·õËÌé%½ufÔéÅá¦¯\x001d´f{ÿª\x001f\x001a1x
\¡HYÈ[¾èÒ9¹m\x001eê0F\x001eÕ\x001c¨\x0008¤Í\x0016¬\x0008¤W5Õî°»Ò¥KæWÎ(0ò=\x0005aëdÏõí!Vã7;\x0003\x000fL]P]×R?ÚUê©./²XfFªz³|g\x0013ËW*òF>me\x000bUºêgZsËOÊ/à$é>w¦¾¨Ä\x0012°ñqÞè\x0011þEØ£\x0015å©S¸[(Ê5\x000er=;2smúT7×\x000fÒ¶¨"ßâo´MÇ	;u:b3xâHXü	gOq\x0005=þ\x001b°²2ç_Tg\x0014ú\x0003\x0019ête°`Qij¿âKçmlózS\x000eOi)u6N\x001dÞÒßkEk«^ÞÇæòÓGÐ-\x0019°\x0019õ\x0006¬ýÃpºz\x0018\x000e&Ø£*a÷pÎ½Q¾\x0019K\x0010
:Zí:NØÄZ%+Î6\x0001¬ç@¡\x001b-yzMG¬jr¬£z¬ìü\x0006X ¤Pé*§WU\x0012nô­ôV(©\x0014©v
p\x000f'Bj\x0002sÙN\x0014\x0007é9;²]ÍFö«dTìÿµ\x0007\x000cÅÅl\x0013#{ÇWD<Z\x0007!ÙÏ'\x001e\x0007'Tg¿ùÌIv¥Àñr¥\âJ³\x0007­juF²n¬^¬~Â²\x000b»òUê4Ó\x00110+%z_y5¿õÕÄÞH7@o4Úä¬¤Ó(l@UJª!T%@m{î*õhv\x001a\x0011í.º\x001d;Rêã¶Ä\x0017­ïýb÷À2H\x0015°ÂÏ"Ûï\x001b\x001aÓÙzY¤d\x00077«&`~\GO´¶ø\x0007îÛ¢ÚèÆüæüéG{Zeej\x0003-Ry`½
®\x0014»Ó¿ÙW§/\x001b`&\x001c`\x0016<è¤
ÖtÁ\x0002§Êà+
äÏ/\x0003;ù\x000cÞ2xþØ°SÚs\î\²eë¬òÎ"Cv[kkV×V÷=9Cþ1\x0003ð\x001aþÜÔÝ©³fYBÕPMVzõ©ÛÆf%h"rA²
rÓÑ3ÅÉdÂ$sx\x0007\x001cKÄÉFlT0ÙäÚüÍc6JC\x000b%ßù¤\x000cýuRØLeúªjÌd7¶ÅL5Á,`^§à\x001c-5ÒáàrVj2rý°ÁÉ«\x001269ØYlÔ\x001eUèZ|Öä{¬ñ§^±Ó%g¯\x0013M1þ-Q²¶©\x0003qjß-\x0008Õ\x001b\x0006ÏY\x001b_S1yÃýç¬¯®\x0018\x00196\x0015µ×Vt9Ì\x001d5\x001devúÎª=¶Ô7xöª\x0007/irÞà\x0005u+æsf®\x0006ÌÏ±½-\x0018¹N PËño\x000b<eÊÔÛþÙÛfýÌûmÁWå1þmÁqºÀ½-CÈ¬)«Ýc}ÁãÊÌ±)³Zg´G\x0016±·\x0005G\x000c9SlìmAOIaC\x000e­}øâ&+ì\x001a×S\x001dcYöä\x001ccÛÅµËæ\x0014êØÛ§6\x0017Í>\x0005Ç
·[|¿¶29n:1£jb×)]Ê×ðJ¶ù\x0011\x0000ßö¨2\x001aj	êLîfØïSsÊBvªØ\x001c1Ê¯ÌV÷xCD´Û
;~¥ÜhËL3åæÃ@9føj**24n«J\x0002J«?lW²­­¿:oøÀ\x0017È¢)A\x001d/S(Õ¦\¨}óè;Ü\x0007PûfòNjÂïõ\x0017ùÔ°å¯zZ\x0008Óð¡rXN6GÙDPî.çørC¹Á¬«¦Õì}ºõêCS\x001c\x0016³½ë#fª\x0017Ì\x001fu
°OU~(Ô-¾\x0017XØ\x001dÒ\x000fuÃu´4¦\x0011ß¿ºÿvÔìÂ_kJÆ~½Æ@Ð\x0000\x001fT.½²½h^SY-ÈÕ
U(\x001a+óf\x0019\x0003Ûf·M\x000e\x0014-¸¤#wf4/].ð¼L-W\x0004+[\x000b¼En}°fæì5p¼¾fFÎb5åç9}&-Ó®µgÛ3Cî\x000co^tnmôôé¹ê4NgrY\x001c^£Ìd5ií>£+×áÉvA+YFßã®\x0014\x0006È$²\x0015[é~ASC|ùluµhòS#3\x001fÎU;|MNMJ¡a/¦,Mìo±¢²¤q`pî\x0017§¶âá¢½E\x0006<\x0006ï"ùÿJ&8Û\x000bÇ?M<ÀSÇ]îJU/RÑzf÷ôt#ë§©¸
<¦\x0014Oo«nA&UI%\x001bò"é°ó	Î\7>g³'aK$0ÄÄÓÛHws³L!ü`­õì=
¿\x000fVÂÓ#Z/i\ÜÂ¨.=¿9K%±5û­©ÍÂ1¯SØ\x0008\x0015§}ñ¤¥=èÇ{÷rÌ/\x0004eåGßÂ<Ë&4O\x0015\x0016·9ó7¶yÄÊÃN\x000bÀ\x0012Ø[zûâ\x001d¿®-½ì\x0014nL1"o\x0014\x0017AnöØÏa\x0007°\x0003êGbÉµ@ïq
rß½/jò¸¥\x001eß ×\x001dUGÛÝìQÙUÉé¨Ú"vëkP´J»þ5û\x0010;l8î?&RrÜÈÆ~õ:ººYÒ-åéÉ_ÛwP^"|$1dM-+\x001a4HF>Ê¨*£0SäT\x000bÏH¥OñH0\x0010±+ù[$ZYûùK\x0006Z¨Mz>ËèÖJ¡2DaP\x000fe³qW©
 Ô±\x001d\x001bê·\x0005ê\x0017!W¤~Ýñrø¹Ü¨"l\x0005G,*õ ×\x001bÕEÙïä¼Yå\x0010O\x0005Ð{Î­Êiö©\x000cÎfÃÑMËúÛ"`\x0003«þ5>\x001dÄiI/¾¿tD5¼9¹Âñ<Ú¦<\x000f\x0006ûÄtÑ0f³TÆó\x0017ÉiÆ¤ürN¸ã\x000eAë,ÉÍ+±RÅ'\x0014Ô^YW©Ür3¯¶çgåZ¨êõ\x00120WhtòÈãJhÍ\x0006z?ýQM+å¥\x001aåÈA+WË\x0005Ak3\x000eû\x0001Â?Âñsañ7\x0013ãý$ªÒoHíëöý°íß_X@Ç~|Ï\x001a+"¥W\x0008,3h7È\x001fUr²°'?3]>r£°BcÔHÙêó¶Ê¨\x000b
½jä\x000c|\x000e7ö\x001ceÔ$Ù¤øT­Ç~áQ"3f=áR\x000b§xL®·\x0005¾\x001c=¯8KÒ¡Ò+\x0004¹Î¨z[©\x000bRxävÖÚWéÔC\x001cÄ4 3Ì;ÒT\x000c¢?\x0000\x0018Ú'¾Pæ0{fñ±?ï¸SaºXf°zíN¿J6è½%\x0001_G7=eR¹ó\x0011¥V\x000eãE¯¢Æ½¹fÌ\x000bõ¹uôCú\x0000¿]Ü-:\x0006\x0008ã\x0007ïWfú`k«Zí¯G\x0016³ß?Ý×\x0019ñÓ\x0007´²2ZÔ\x001eëçÍ¹\x0015~Î_\x001bä×ëýr+¢27·±Õ}#çNMTDPðÓ¡\x0008¬¾ãwNéèNµG¯îÖv.Ö\x0016ãéu`1ãQM#µIÑ¯i06+i1 (
`±¼¹\x0016ÌÂ,ÖENâïåw\x0013;)%å\x0003¡ ûW\x000c\x0019:%û7
6b\x001f@U\x0001\x001b\x0008~g®±@â!â½E42|pïÁá×ö
?¡\x001f~\x0002j46p $'\x0010\x0019/I?®z»3åû\x0001«Fòºêh-~§?ßL¥\x000fúò\x0002\x0010¨¼\x0001¿j¬L¾Ý¤6¨¥L© sM!;mkd¼L®\x0019¹\ 1iåL£ ËÍy6:O¡	2QÃzø
P¿\x000fõ«\x001cp\x0014²e\x0011ónú$!«R]:HGî\x000b\x0006²ò\x000cnI²û\x000e\x000e\x001fØËþb)YÃ£\x0013Bjª1A«å5¬ÔÎ@\x001eTéq±BAgÀ\x0015\x001a¾\x001eÂübì¡gd`	hÑH_°µ©bÓµôüTF®1åÙG\x001eP¨e<\x001bP´PÉGî0ìÐ[ªèU\\x0005×MtÄ 2Õ.\x0018j\x0002\x000cÑ\x0008\x001b¾ìý4v6ö \Ù:Òc3môVÈFB?\x0014TVÖlöhoFGÛþn\x0007:nügß8~êWº{¾u_×	7
·\x001fßI\x001a%¯¦tUÊÉ´I÷2¸?Mtòß¬S}\x001c÷\x0011sÊæ/q\x000fs£GêQuÓ\x0004·ûøNÓ-ºWÑi·Ñé\x001aÿ%÷Øñ¾h{ü\x001bu¤!ç[÷­ûÿÞ-\x0004wá1ÑýãË\ÚÒ´¾àF¾uÿ{\x001da;>üA\x0017y\x001aÄ_Ã ©¡ôlºÞK\x001f¡\x001cµÓnz5½þfÓ+¨®àç\x0011?ºÉRª§ûè,ª£ý§sé2>Æ/åñd\x0012¿Lêa\x0005\x0007(¸
ìy££p¥ì
~ý$ßà³k\x001aÔMü\x000b3"#djï\x0019Ë\x0016­Z!^Íþrÿ\x0004?òÞÃäðè\x0004EòV\x0011´G>\x000f|Xþ7
w'áÇ\x000b¿l9HG¾9\x0011êþ}T+¾oå¿Zø\x000fÉ´¯+B+9ï"M'"\x0010·uÈHË\x0008w)±ýO\x0016þ\x0019â8\x0011a¶J	ýþuS¾z<°ó'Ò\x000b>ë¸Ò\x0006íñud\Zîw\x0013/$Í'"Ü>ÿC\x0002å\¢Â?MÌÇ{ûªp§Â\x0006èXYú­|+ßÊ·ò­ü·\x001eÖ!&¥äVÎG6IJÿ5DIº@nø*áVªäYøË?ìÌG%®øö\x0007\x0016êª?&6¹¨Þýse|4÷£ó>×¬V¼+»\x0019â*Äs(|þ\x001flSt
endstream
endobj
9 0 obj
<</Type/FontDescriptor/FontName/LGAZPG+Calibri/FontBBox[-20 -178 801 692]/Flags 4
/Ascent 692
/CapHeight 692
/Descent -178
/ItalicAngle 0
/StemV 120
/MissingWidth 506
/FontFile2 23 0 R>>
endobj
23 0 obj
<</Filter/FlateDecode
/Length1 39608/Length 18791>>stream
xí}\x0007x\ÅµÿÌ½ÛëÝÞ´M+íJZI«Þ-­z³,«ÙmÙ»{ÁÆ\x001dÓ
fHè%Á\x0004\x000cXI0\x0013B\x0012\x0003IhIÀK\x0008%1\x0001BèþgîÜäBBÞ{ßÿ½÷}ìõoÏoæ½sfÎ33÷Ê\x0008#ôh\x0017âÑôÖX\x000e\x0012?W\x0005àkÆýkhú;\x0010Â\x0017\¸!pà¦£AÆ+\x0008É5×,YùñÇ-:ào#¤v/YqÑbz|n'BÍ.]Ô¿ð?"¶
nÛ\x0005\x0005K!Cÿ¨¶\x000c!£\x000cÒIKWnØ,ý\x001eHáí\x0015«\x0017ôÓô\x0011R\Ù¿yM
æõp|
d\x0006Võ¯\$\x001dOÎw­Y½~\x0003MßÖGö¯Y·hÍØ»~\x001doËk\x0011RÞÐèMhòg:ZÖCyw¡ËÑµè&ô\x0004ú=.\x0001v+º\x0007íC\x000f¢\x0001ô$z\x001a½þ\x001b?£\x0017ÉW"\x001d\x0014)\x0005¡±ÏÇNî\x0003\x000cË
rnE\x0016È\x0019\x0013ÆÞ;+ï½ÑÆÑa\x0019iÄsõÜ¯!÷ïxdìs®¤Ç
H»\x0002¸Q<ã\x0003å]£\x0007F\x001f8K\x0007mh\x0016æ ^Ôú¡ü\x000bÑR´\x000c4s\x0001ZV¢Ubj\x0015ì[\x0002ß!5\x000fZ\x0000G\x0011>qÔj´\x0006°\x000em@\x001bÑ°­\x0001¾^J}kÅôF´	¶Íè"´\x0005mEÛÐvé{³
öl\x0011Ó\x0001;ÐN¨Ñn1Is.A¢Ë Ö®@W¢«þiêªq¶\x0007]®zþ\x0016ºî+ùµg¤®í\x0006t#´½èft\x000bú\x000e´ÛÑ\x001dgå~[Ì¿
Ýî6CöÝ\x000c9wì}\x001cý\x0014\x001dF¢\x0003è¨Ë\x0005 5ª\x0011¦Å¢\x000e×\x000e¶A	/tÇTÆµµ\x0003ÊNÊ¶G*éfÈß=é\x000b%=#/#éUh=«l?K\x0013×C\x0019((\x0011MÝ,"w²VþY.ÓÇ\x001d4s»"ììÜ¯â· ;Á\x0002ïo¢UÂî\x0003NÙÝ"×ø±÷éï¢ï¡û¡.\x001e\x0010\x00194g\x001fð\x0007Ð÷Á¶\x001fBûÑÃ°MðÉÊGÑ#bÍ
 A4\x000e¢CPGÐQ4,æÿ³}çË?(å\x000fç\x001cC¡ãÐB~N§ù\x0011l,ç\x0007÷{RÌ£é\x001f¡\x001fC\x001cES?EOú9ú\x0005ú%z\x0016ý\x0004RÏß?Ôsè×è7è%¬\x0007ö+ô\x000e|\x0000P¼~á¼¹½sfÏêéîêìhoÞ:­ejsScC}]mMuUe¼¢|JYiIqQaA~,3#=%\x0014Jô;­&Á¨×jÔ*¥B.ã9ÒkCu}pß,\x001cjhÈ éP?dôOÊè\x001b\x0008@VÝÇ\x000c\x0004úÄÃ\x0002g\x001e\x0019#\x0017ud\x001e\x0019\x001f?\x0012\x000b2T\x001e¨
\x0005\x0006NÕ\x0002ÃxV[7ðkkB=Ó"o\x0011¹,,&ô\x0008\x0006á@­siM`\x0000÷\x0005j\x0007ê.\º§¶¯\x0006®7¨ÕTª\x0017i2ÒÑ F\x000bT\x000bl %´f\x0010§cp)µ%\x001cRéÉÏ\x000eðÉµý\x000b\x0007¦·u×ÖxÁ\x001e1\x000fU×\x001aPT\x000f(Åk\x0005{FW\x0007\x0006ÓOì¹fX@óû¢º¡ýsº\x0007ø~8i\x000f_»gÏ\x0015\x0003¦è@j¨f uËPäE\x0003é¡Úh\x0008.ÖÜ>þ\x0003x@,\x0002{þàæC§ÿzfN¿£H\x0016þ\x0008%E\x001cW\x0013ìg\x001cÁ½Á\x001dBùAr/W\x000fÇÑ|H\x000cìjë¦é\x0000ï\x0019BñX´gë#{N°=¶.²g\x0017Û3~z_(Hªª¶OúwáRçÀ®ùtÐ¾ø/\x0019þÁþÀ\x0000\x001fî¿`)ýöjj¨Þ:»\x0007â5@âýRYk\x0007³bp|\x001f\x0014b\x0019QC[÷@,´fÀ\x001aª¢\x0007@FÔÁ²nñ\x0014é´\x0001kõ\x0000ê[ 5\x0010«­!÷\x0015¨ÝÓWCo\+ÔÖ}\x000cå½>\x0017ð\x001cÌEy¨ÜÇ½\x001a*%\»§{áâ\x0001g!´ÏÅnOp Þ\x0003êë	u/ê!µ\x0014\x0012\x0006R_\x000b¿(\x0005e;ëhv0)¹2Y\x0015èæ<|\x000f©-È\x0008ÔÁW¨ª\x000cv\x0008P]bÔhUY \x001b{\x0010;\x000c~E:°3®\x0003	>¹ºìâÉ©Õ
`O~þÉ-y¤{'\x000f¨&]Kñ{¢¿ó·F&7\x001a¨]T3é\x0006Ï¸¨\ºAéjç¿OèBúa8CEª³íâÁr!ËY¤\x0016\x00014=Ð\x001dZ\x0014ê	A\x001bOï&e#º\x0016ë·¹#ÔÜ6«[¬m©t¢ûhj\x0000\x0005a7KpÕÐ\x0006ë¢\x001eV­bº^L'\x001bÎÚÝÈv\x0007ö¨BÍ\x001d{ÈÅCÒ\x0005Q\x0000,\x0008
­\x00087ö_]dÎ\x0003Ó¬\x0003ï\x0016ªë\x000f\x0005@Ýþá±]ó÷\x000cÆã{ÖÔö--!×\x00085.Ü\x0013êè.ó÷ÚÞ½Ý³ü\x00195ãæÎªtð=U!|eÛ`\x001c_Ù1«û\x00001îÝC\x001cæªûªz\x0006`_÷±\x00008w1#¹$$\x0002$A®Ô\x000e	x¼çX\x001c¡]â^!¦\x0017\x000cc$æ©X\x001eF\x000b9'°<\x000eòd4/.æ\x000fTs)¨\x0018Ümm`!©m=K÷ôõ\x0010ãBv¨Jø\x0007p¨\x001c
p¡òAÌ)t\x0003Ð¢ª\x0001m¨äWü
¯ ùJh\x0018ØA9Ä'íé\x000b\x0006Õ<6E\20<6ÖÙ\x001d<å9Ý\x0013¦6\x00070«{@\x001d\x0005ß/Onãê	ú »~`×~r\x001f¨««Ln\Ð\x0003Í]\x0010\x000ei\x001cPÃ\x0015ÔÒ\x0015à:ñ\x001cÒ\x001cá¤\x0005P7Pâù» 1°«g 'J~´{YØ\x0001Ô\x0010*j§×É\x000fÅzöC9¢m)h¯ B
÷:ºi\x0007ðc=TIJ\x001dÜù\x0010ìZÐ\x0017\x0000mËÐ\x000ehêÔj<4g\x0011¸DYx\x0008GÚH±ød­^3 Î\x000bÂ?ÂµÄ$åÉÊ\x001ezóbê
é\x0000øma@\x000bw\x0014¤Jé\x0004Ð\x000eìj$÷\x0002ÿ®[%>I.Ó6ÚCÁ³\x0016¯¤Ý\x0003úäÆ~pþô|-äØÉ*â#´Ò5NÒ\%)¹\x000eôÎ'w\x000e=\x0010º(8é\x001e"\x0003iÈs\x000c\x001a6êÙsvÆÀìhFºêì\½½gJþ\x0013¨¾TúqI2\x0003µÐkÀ0\x0006V QOj¦}=zú\x0008Éü\x001cY?DyJ\x0010`\x000f\x0002!\x0018ccP;xHÍ\x0007¹K\x000f©¸	È%ìfäbFv1²\x001dlgd\x001b#[\x0019ÙÂÈElfd\x0013#\x00172²
¬gd-#k\x0018YÍÈ*FV2²\x000b\x0018YÎÈ2F2²Å,bd!#\x000b\x0018ÏH?#}Ìcd.#½Ìad6#³\x0018éa¤Ì`¤NF:\x0018ig¤é´22\x0016F¦2ÒÌH\x0013#40RÏH\x001d#µÔ0RÍH\x0015#Ä\x0019©`¤)1RÊH	#Å\x00141RÈH\x0001#ùä1ËH\x000e#Ùd1\x0012c$\x000cFÒ\x00192ÆH*#)D\x0018	3ÌH\x0012#!F\x0012\x0019	2\x0012`ÄÏ\x0011/#	x\x0018q3âbÄÉ\x0011;#6F¬X\x001813bbD`ÄÈ\x0011=#:F´h\x0018Q3¢bDÉ\x00119#2FxF8F0#H"xQFF\x0018ù/\x0018ùÏ\x0018ùO\x0018ù0ò\x0011#gäCF>`ä}FþÆÈ{fä¯üw\x0019y·\x0019y?3ò&#bäü\x0007#o0ò:#`ä5F^eä\x0015F~ÏÈï\x0018ù-#/3ò\x0012#/2ò\x0002#Ï3ò\x001bF~ÍÈ¯\x0018yg\x0019ySü_0òsFfäg<ÅÈO\x0019ù	#'\x0019ù1#?bäIFN0ò\x0004#?dä\x0007<ÎÈqF\x001ecä\x0018#Ã\x001ceä\x0008#\x00199ÄÈAF\x0018\x0019dd\x0003<ÊÈ#<ÌÈ~F\x001ebäAF¾ÏÈ\x0003ìcä~F¾ÇÈw\x0019¹{\x0019¹»\x0019¹;\x0019¹Û\x0019¹[\x0019ù\x000e#ßfä\x0016Fnfd/#71r##70r=#×1ò-F®eä\x001aF®fd\x000f#W1r%#W0r9#1ÂÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001e¼\x0011\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ö`\x0016ö`\x0016ö`\x0016í`\x0016í`\x0016í`\x0016í`\x0016í`\x0016í`\x0016í`\x0016í`\x0016íàê@Ô<ä+÷CÌ<ä³ØMS\x0017\x000fùJ@ì¢©Tì\x0018òé@l§©mTl¥b\x000b\x0015\x0017
y+Al\x001eòVØDÅTl¤û6ÐÔz*ÖÑÌµCÞ*\x0010k¨XMÅ*zÈJ*VPqÁPB-åT,£b)\x0015K¨X<P\x0003b\x0011M-¤b\x0001\x0015ó©è§¢yTÌ¥çõÒÔ\x001c*fS1\x001e*º©IÅ\x000c*º¨è¤¢v*Ú¨NE+\x0015Ó¨h¡b*\x0015ÍT4
y\x001aA4RÑ0äi\x0002QOEÝ§\x0019Díg*\x001a*ª©¨¢û*éyq**èyåTL¡¢\x001eYJE	=½"*
©( "^,\z\x001c*²©È¢\x0017QIÏË "(\x0015iT¤RBE^:LE2½f\x0012\x0015!*\x0012é¥T\x0004èy~*|Tx©H ÂC{È=

ç»\x0015
;Í´Qa¥\x0016*ÌTè>
#Í4P¡§BG÷i©ÐP¡¦ûTT(©P\x000c¹¦\x000f¹Ú@È¨ài&GS
$
<FÅ¨x\x0008\x001e¡©/©øÏé¾ÏhêS*>¡âc*þ1äì\x0004ñÑ³\x0003ÄßiêC*> â}ºïo4õ\x001e\x0015§©ø+Ý÷\x0017*Þ¥ïPñ6\x0015oQñgzÈ4õ'ú#Mý\x0007\x0015oPñ:Ý÷\x0007*^£¯Rñ
\x0015¿§âwôßÒÔËT¼4ä	âÅ!Ç\x000c\x0010/Pñ<Íü
\x0015¿¦âWT<G\x000fyghæ)*~IÅ/¨ø9=äi*~F3¢â§TüTü\x001eù#z\x0013T<A÷ý\x001fÐÌÇ©8NÅcT\x001c£b\x001ey¦PqCT\x001c\x001c²W\x0018\x001a²Ï\x00061HÅ\x0000\x0015\x0007¨xG¨xýT<4d\x0007\x001f¤Wù>\x0015\x000fÐ}û¨¸ïQñ]*î£â^*î¡ânz±»èUî¤â\x000eºïv*n£âV*¾COø6MÝBÅÍTì¥ûn¢W¹\x001bè¾ë©¸oQq-\x0015×Ð#¯¦©=T\EÅT\AÅåC¶~\x0010
Ùæ¸KlAì¦ââ![\x0017]C6pÆxç­\x0000Ä\x000e*¶ÓÓ·Ñó¶R±eÈ¶\x0010ÄEôôÍTl¢âB*6R±õôÒëèék©X3d[\x0000b5½Ø*zäJ*VPq\x0001\x0015Ë©XFÏ[JÅ\x0012zgéé¨XH\@Å|*ú©è£b\x001e\x0015si¡{éÍ¡b6-ô,zé\x001eúCÝTÌ¤·;þP\x0017½J'\x0015\x001dT´SÑ6d>d%¿Ð:d%Í{Úõ\x0012\x0010-CÖ\x000c\x0010Sé!ÍT4
Y!.À4Õ@E=Í¬\x001b²î\x0000Q;d½\x0002DÍu'ê!ë.\x0010UCæ:\x0010TÄ©¨ ¢|È\x000cý;BSeC¦\x001e\x0010¥T\x000cHÓ(¦¢hÈT\x000f¢pÈÔ
¢`È4\x000bD>ÝGEî)\x001dD\x000e=2{ÈD
5d"¶\x0019£"A!(½X\x001a\x0015©ôb)TD¨\x0008S<d"ZJ¢"D¯H¯\x0019¤\x0017\x000bÐ«ø©ðÑó¼T$Pá¡ÂMkHè\x0005á\x001c\x0012æp\x000c	ó@Ø©°Qa¥ÂB`¢'\x00084ÓH
=\x0015:z¤\x001e©¡j*TT(©PÐ#åôH\x0019Íä©à¨ÀT øq¾`Ô¸À?b\èÿ\x0012ø\x0017Ï\x0001AÞ§÷	àcÀ?\x0000\x001fAþß\x0001\x001fÂ¾\x000f ý>ào÷\x0000§!ÿ¯¿À¾w!ý\x000eàmÀ[?\x001bøß4,õÿ	ðGÀ\x0000Þ¼×Aþ\x0001ð\x001aàUH¿\x0002ò÷ß\x0001~\x000bxYÿ%}¶ÿE/èWø×ý¿\x0001ü\x001aø¯ôQÿsg\x0001ÏÀþS÷KýJÿ/ÿ\x001cøÓÀ¦_îJ¿ÌÿSýRÿOôKü'áÜ\x001fÃõ~\x0004x\x0012\x0010\x001f;\x0001ßO\x0000~\x0008øn­ÿqÝ:ÿqÝzÿcº
þcaÀQÈ?\x00028\x000cû\x000eÁ¾7\x0004\x0018\x0004\x000c\x0000\x000eh/ò?ªÝâD»Íÿ°v»¿vÿ!Àï\x0003\x001e\x0000ì\x0003Ü¯Íð\x000fäw\x0001÷Á9÷¼G{ÿnàw\x0001¿\x0013p\x0007ðÛáZ·Áµnk}\x0007ò¾
¸\x0005p3`/à&ÀpÞ
p½ë5Óü×iZýßÒ,ñ_«¹ßæ\x0001ÿe|²ÿR¾È	.òïîÚÕuñþ]];»¶wíØ¿½K»\x001dk·{¶7oßº}ÿößo·(4Ûº¶tmÝ¿¥ë¢®M]÷oêºpÿÆ.ÙFëÆ
\x001bù6âý\x001bqÍFµ\x0011sh£°1°×mèZ×µ~ÿº.´núº]ë\x0006ÖÉJ\x0007Ö½¾Cë°fxìÄÁu\x001e_\x001dÈø¶uz¡nm×ê®5ûWw­Z¼²k9ÜÖ²¢%]K÷/éZ\´°kÑþ]\x000bæwõ\x0017õuÍ+êí»¿·kNÑ¬®Ùûguõ\x0014uwÍãg\x0014uvuíïìê(jëjßßÖÕZ4­k\x001aä·\x00145wMÝßÜÕTÔÐÕ¸¿¡«¾¨®«\x0016\x0012@\x0002/\x001b\x0000w<¸*Ë\x0013÷¼îyß#C\x0001Ï	\x000fo6ºýn.ÕèÂÕ­.¼ÚµÓu7:urqgjzÑñ¬ã\x000f¿9d¸#5³\x000eÙ\x0005{ÀÎÛHÙì-u¢¬¨¡2;_,k=\x0014®3Ú°Ñæ·qµ~\x001bF¦×MïxÛ\x0013Â³\x0002g4b£qÌÈÅp¸Ñà7päkÌÀÇ
ÙuF½_Ï¯1=oë!\1¢ÞYgÔúµ\W¶UËÅµ\x0015ÕuqmFV\x001dâq\x0000c\x0005\x0010¼
=mþ:þqLqä\x0008ãë\x0007;;¢Ñæa\x0015jo\x001ePM=¯\x001cHî ßñ¶Y\x0003+\x0007P×¬ÙÝ\x0018«g\x0010sÕ\x0003V²Ø+¦/»öZä­j\x001eðvt\x000fñ÷Üã­êi\x001eØEx<.ò1Â\x0011\x001cÒ\x0013»~ãúhtÃ\ø»~CTü\x0007)¼¤¢$ü[¿\x0001ÒdÛ(¦Qô~èa æ­Ï\x0006)oÃ??éû\x0007ÿOßÀÿýÏ "Ï(Tq¢Ü%Ý\x0001»\x0000;\x0001;\x0000Û\x0001Û\x0000[\x0001[\x0000\x0017\x00016\x00036\x0001.\x0004l\x0004l\x0000¬\x0007¬\x0005¬\x0001¬\x0006¬\x0002¬\x0004¬\x0000\\x0000X\x000eX\x0006X
X\x0002X\x000cX\x0004X\x0008X\x0000\x000fè\x0007ô\x0001æ\x0001æ\x0002z\x0001s\x0000³\x0001³\x0000=nÀLÀ\x000c@\x0017 \x0013Ð\x0001h\x0007´\x0001¦\x0003Z\x0001Ó\x0000-©f@\x0013 \x0011Ð\x0000¨\x0007Ô\x0001j\x00015j@\x0015 \x0012\x0010\x0007T\x0000Ê\x0001S\x0000eR@	 \x0018P\x0004(\x0004\x0014\x0000ò\x0001y\@\x000e \x001b\x0005\x00012\x0001\x0019t@\x0014\x0006H\x0005¤\x0000"0 \x0019\x0004\x0008\x0001\x0012\x0001A@\x0000à\x0007ø\x0000^@\x0002À\x0003p\x0003\\x0000'À\x0001°\x0003l\x0000+À\x00020\x0003L\x0000\x0001`\x0004\x0018\x0000z\x000e \x0005h\x0000j
 \x0004(\x0000r¬r\x000c¾y\x0000\x0007À\x0000\x0016bÈÃ£\x0011À/\x0000\x0003>\x0003|
ø\x0004ð1à\x001f\x0000\x0007|\x0008ø\x0000ð>ào÷\x0000§\x0001\x0005ü\x0005ð.à\x001dÀÛ·\x0000\x0006¼	ø\x0013àÿ\x0000¼\x0001x\x001dð\x0007ÀkW\x0001¯\x0000~\x000fø\x001dà·\x0001/\x0001^\x0004¼\x0000x\x001eð\x001bÀ¯\x0001¿\x0002<\x0007x\x0016ð\x000cà\x0014à_\x0000~\x000ex\x001að3ÀS\x0002~\x00028	ø1àG'\x0001'\x0000O\x0000~\x0008ø\x0001àqÀqÀccaÀQÀ\x0011ÀaÀ!ÀAÀ\x0010`\x00100\x00008\x0000x\x0014ð\x0008àaÀ~ÀC\x0007\x0001ß\x0007<\x0000Ø\x0007¸\x001fð=Àw\x0001÷\x0001î\x0005Ü\x0003¸\x001bp\x0017àNÀ\x001dÛ\x0001·\x0001n\x0005|\x0007ðmÀ-\x0001{\x00017\x0001n\x0004Ü\x0000¸\x001ep\x001dà[k\x0001×\x0000®\x0006ì\x0001\\x0005¸\x0012p\x0005àrÀehaå.\x000cöÁþ1Ø?\x0006ûÇ`ÿ\x0018ì\x001fýc°\x000cöÁþ1Ø?\x0006ûÇ`ÿ\x0018ì\x001fýc°\x000cöÁþñ:\x0000ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030Ø?\x0006ûÇ`ÿ\x0018l\x001fíc°}\x000c¶Áö1Ø>\x0006ÛÇ`û\x0018l\x001fíÿOûáÿãÿé\x001bø?þqÎK"L4ºÿµÜx¤DÅ¨\x0005MC³\x001fGzhÓvT\x000f\x001f¶ÕÔ¨2?öÊ¡\x0000´x\x0015¤Õq£Ó\x001fu»+BGó\x0015×ò¦F\x0018¸\x001fªP^\x000b¾¼bäµgb#¯6\x0017ÇNãØ«o¼öðÁ3¦âXî\x001bÏ¿MA\x0008«S*­Pb&\x001f	\x0017äææsùyáP¢\x0013óò

ËùÜ\x001c\x001fÇ[YN9GÒÿõ³øÖ\x0011\x0005·#T1#Wîs\x001b­zKp3ÊÙÉe^%¯Tðr2¥°*±yEmâï&¯Íî5«Tf¯Ýæ5)G~/7|þ¡ÜðEµlÅ\x0017{yEé$þ;\x001a\x0015'S(}NWZi°qÑ"È´\x0016ÁdW)Í&]JÍËm	ä\x001a	6\x001b½ÖH\x000b¨%4ö¹lÜ\x0012Q\x0018Ýy\x000c%½}H'à©¡aÇÞ?¤\x0005¢e\x0004FVïÇÝ%\x000bä[/~ëÄïx
N&»Óµ¸%)\x0014NþH§Õ9\x0013½!\x001eÛe:¤\x0013tÜÐ\x0013¡gC|H\x0017Ò½íæ.y\x0017ª¨¨0\x0017\x0017Çb½½&G±	¨)W8cÊ\x0005G{i}C´l·+DGø oàCápA!¦zv(C|P¶Qd¿?Ù¢­\x001eùór^c	%xXdzWÄ\x0017Hs\x001bd[ñ\x001fð¦Ø=\x0006\x0019¯Ô©qéèÓj½Z&7xì²!­AÅó*£öÚ­\x0008ÚÔÃ\x0008É0´.\x001f¢"ô³¸Ûï\x0014p_0/=|9uð\x0015²5xÛ\x0016ý¶8ì·Ù´éäàtrp:98\x001cN\x000eN\x000c\x0002\x001f4vâ0p\x0014Î\x0005M\x001f#A¾Ð(I½(?>`
  
  
  
  
* URL: [https://adoption.gouv.fr/IMG/pdf/rapportColombani.pdf](https://adoption.gouv.fr/IMG/pdf/rapportColombani.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=CþPD!¹ÐCâ3ÝD"£V\x000bor\x0008tOå\x0018JORQX) \x0016QOÜ{\x0010ñ\x0012åüe¯íÿÀa,XÛ¦²Yè÷\x0008\x0014ÊÌ3Z´Ñn)*6Z\x0012¡Ã\x0003_Z½¢\x001b»m_ZX<³"Jq\x001eÖèå)0Ø»`YônwP¥±SáâlKî'1,\x0014ºämY¸¾;a!æLë^ÔúÈQaße²¶h\x0015ÔCcK±BÌ~\\x0003\x0015^c\x0002\x000bHbEú¬Á¶iÕ§vúi'Þ\x001aHË\x001a/ÌL6þÖèÒ³ûï»7è\x0004Z³kl¹®ì»$¶+½¼\x001a°MSJÂÜAU6¾²\x000cà¡ô\x0003\û

.jØBoEl»L§¾Óälf-Zw9nÅk\x001d\x0013\x00183Ø\x0000á&@.Ò,\x0014éèX;\x0012§6NÃ#Ñ£=èñ-ô-Ê=\x000f­àq¢ÿÛ*PG±8dm\x0012¸\x0014Öéã]zT ~
=¥÷âÍÒP[q\x0016àQBÀÑQvÀ|ý;¦J\x0004z×¦âìß\x0011¨½®Ya©³è«RÐöCÓ 'VUa½â^ª§o¬ä³sî½\x0010o©\x0013!\x0000ÈF8$MÎö\x001cR¸ì\x0002/¬Ç`ûgCííC£çH\x0006\x0018Ô6XHæô\x0005SázüÑ¨pòÏ\x0015ÐI§ò®Y|*Ý:j%L\x001f©Û¢\x001e\\x000eh$úewDOâ7Â²Ç´U)sR#6Yv2D³¼Go¾Sä^`\x0018V\x0006(n:º_éÖ±¨¢ËUó	l¼Z\x0005\x001a&Ý§;&­ãõÿ\x000c\x0017ÎÛÏéð\x0003ÕKÂ#"*tT\x0018ÒB@sî¯\x000c¬¹OY\x001c6"Ö\ó\x0014´6SF²4{´Ìîc£ò\x0016ãS\x001fkE¼Äùw¾[¨\x0006oN\x0002\x000b\x0017Q£4Ë½1\x0016ûáéµ8\x000e®\x0019\x0017ÚKq­cÚHt\x001fPÜ{\x001b¸½ÁÞÂ'ßÊGêà`\x0019Y*ãI!Ð¼\x000bá\x0018;]5²©AMd	!V
(\x0010Ñ®\x0004¬\x0001µS9tÞ±J\x000cFzÈjmDù(ÿ¾²)
8#ü\x001awâ\x00109ðøõ~Ý67·,TãB;\x000eñç4ûnJ<¾9ÁÑ¦@ow¦ß~\x0017ò}7îlÿ%¦:tI^îþç×¬ùR4(Y¤\x001e£8Ï\x0005½ÿ1Ð\x0019i\x0006õÈ_j\x0001mu\x00002îZ :7É	Èi²úÁlBÉ"ÇÉp$®*¾ÎØ©ÌZ¾Í4°Nôsz9¬1êJ\x0008Ä}Q,	H}\x0004ûVZs{	PF{[Y%SÉ­¡°ðÖ2\/k\x0006½k~õ­z²©?\x0005w×L{Ý\x000b\x000fbõl&>¼\x0000X\x0017v#êûX\x0001!¹¸B\x0014Ö\x0016+=\x0001\x0013õ½Ëô\x0000Èa;U\´\x0012®\x001bÉ\x001d'ªjû@!\x0016JP	+j\x0011à¶eB8VïØÓrÕ3{[.·Á¡Z0\x000c3eð²\x0012Ò1Î\x00032±Äán­j¯çÌE©¯eÃpMÅ§a£âcì} uîÎ+\x000bI/ â7FYô/­\x0018ÉBGÑ?®\x0010û:çUÂøÝlCî¨¶3uÎËá¬2¿\x001fÝá¶¿I@³­©tîün2KgÔéFÔ:é\x0008Ê	Xø;Üü×H=\x0016\x0018\x001cÃ5É $6%N\x001c@ú§+·Aëd}\x0000\x000b¹æò¶\x0015~íUh
ÐàB¦\x0002ê>õ¤uÎúTJMÔ\x0019 Tò\x0011	
nî\x0003(F¸;\x0017Y4P\x0019s\x0017/Ò\x0008A`4YLùØ\|\x0010x\TRèÃn#-i| çpLFs¬Ö\x0014à¨K§ý®\x000b\x0017ÕDü)ÿ\x0003ð\x0018´2piÅ\x0005ð¸))ÚÛ\x0012\x001c22XâY¨î>\x000fLdTQzò8\x0015\ÚNðØÑV8Xám\x000cSÃ«&¬v|iê!òTqñÔØô)RßÒ­;ð#û£ä·JídÞ\x000b	ñ8½,DÆ×Q¾Ç`h$\x0018ÀsÍçÇÒz[Í\x000c\x0000?Eú_y\x001bà Øf\x0008M¨»ðB2\fÉ)¤a!×^QûNÒ9æóî¹\x0017¡s§Ikh§\x0002·Ý¦\x0000\x0003!\x0012Û\x001c]\x001bh[i¹«PÙâÙfY:
\x0007\x0016«i(°Ög:\x0019Ýou¯\x0000£Á.¸QÇ¹Í6#Sï0Ç:N \x0007_·³"Ü\x0007t6Nqthwk¥Váº/<8\x000cUVÛN>'\x0007¯=X\x0007EPß;(ñ±BÁ'\x0007:£¥÷Ã\ÚÛ\x0015çL
\x0016å6smj5ªc¨ó
MZ),Î\x0016Qz?0ý8\x000cHÎî\x000bÒYÀ\x0014ÒD½|5ªÇmÛ6ZÏù\x0002(\x001cW\x0004Êlíæâ\x0000m¸_1Û\x0004âµ\x0005Sj«×re)!\x001b/_c«êt\x0000\°
ûM¹\x001c\x0005µ[Ù\x0013Jî¶íÑ|z\x0005ØÐ,8Æñ\x0005Ó¡³° ÎH­¹[v*Z¯\x0019cÄí»·!4fè5vÃTuÚÚ@{ñv_	3¥JÙ-l¹_yÇçúF¦Õ¶ÍÄny8§kÁP\x000fÑ§a.Xjåì­\x0008RÒ¶U\x001ebkb 37ØÈ9-PHùûÛF\x0011»í\x001a·\x0003ïpÛAmoP¤y¬ã\x0018úe`*
â.Û®q>6ôê5q81Ó¦ÃØ64\x001dÛ\x001eô×{»AÅRöÒ]?íÕl\x001aYÑÛÈ\x0004\x0019ÄÞF%Ñ%ÐÆJðçs"`P²u\x000eØg\x0013¦ÈØ
¨]¡Â,²Q5ÁV\x000e¤õ¿íÁ¹Ûös%[A\x0000ýlN~.l¼bÉq.K\x0011	÷Ö/Åé¬¾\x0000l9×J¢3NL±2	|7X¥8ÝÁ\x0012M´kññ½°pX/¿Ãoy_¥Q`/UH)lVO{RôvKo»moÛµiçÀÃ¸,K¢@\x0010/Ëe1Û\x0011\x00106wY\x0001l¥eÖVËá°PJ «dCÆ¥q{L½\x0012m°\x0000Jvã·¸	\x000cÃ\x0006\x0018ìJc\x0006TëêÒ·PàÏ¹P?Ô8¹YvÒFTÜv\x00176XMo»Þ¶Q«îÀB\x0006sÑn\x001cÛ2I\x0012/!ÞvÁ×ßÆIa/>NÐmw¼méF·
aL¹Í§®7õÀØ7¼ÿ¶±ÀÏ¾ª7»ËØw¼ß¶öxÚ5qÁoû\x0016 \x0014	ç\x001e\x0013fç6\x0017hS¡ó£=¸
k&yuÛ³Q3S!\x001c¯¶	ã8\x0013*@	6'¿\x0002òáã
7F­à°ÀËpÛÕJ"4lºÌZ\x0017ÁfØ®\x0019Åûò%/fx¨±\x0004ÏÓØrm\x0004\x000f±À¯oô5û0*Ó,x6:,ØN\x001aìÎ\x0004)£|è²\x0011H#øl\x0013à%v«Ï\x000c]\x001e³\x000e$¼·iC\x0001£U\x001fW¨+I\x001fÏnÂÇÌMÖÁ:ùDÞ:¨n;wÛP\x0014åPK]ÄëÓ5_Û^IÃÒPb\x000caNµ"\x0006Epð{ñv¨\x0019rÄÝ\x0011\x001c«Ç§AC¿i²¹g0YH\x0010Û.J¢J$\x000bR.6¤b ïhºRËd.¦\x0005Èä¶Ùë|Ì.,·su »Ó\x001c\x0013t¸\x0008cÎ\x000bSA!t½\x001dViÏ\x0012@Ùm£ÌGV\x0019¯Vj:Y&ÌÁÓ\x0005vhÅlSè\x001c>dÐÎÉ£\x000bK`]\x0007Á<\x0004ËQG°í´H³«¿|¡÷0HøÄ³àØÓà"æ?1¤È1b
 H>\x0005\x001a?Õo°+EèÒ_Wi¢SHl+2h\x001eWüÅÎ\x0003\x0017*»]¦üQz¦mßYhêfh
MÆZØ\x0017D\x001dªõRØó­AW«vÛI/HÆ8u,Ü¤-|\x00146hcK^6Ë^þj"¡?Ý§`£3{[\x0001	;¡ \x001eåñ°8[\x001eôVîf\Ø\x001e\x001aK£ð¸H\x0006Kd´½\x001a³=üÌ¨Ïéìßw£æÄâ_nìù^m\x0004>
	ê"sU¾}Çd"§\x0017Ë\x0000\x0005zoSì®mÂ/L+C}tWoâ>ì×0Õ\x0011ØGÑ74î£sïiU
¾h¿Ïþ;?!I@\x0003ÍF¤BíÃ2\x0018
¥º\x0015\x0005©\x000fÈ¢B0ô¢¬Ý\x0018\x0018tå\x0015\x0019\x0017ºÑA_\x0007þ(ùòËDz½,øÞ&\x0011`­nº8¢B:\x0001Ìåî\x0015Þ`o'LC?rÒ=*C`¦@g`tà8SÀ\x0004²i\x000eowÔï7V¦ñ3	r\x0010ò\x0005 %\x001f°\x0015\x0013
¡0ºa¬:\x000fVõAèP¨\x0013Ìj`eþ61©q2ÌÙ\x000f@¹¯\x001dì"ÌäØÙD\x0018~ê\x0002þ/Ý\x000bÌN¦LòK e\x0016\x0000i\x0001íö\x0000¤^ýèiø[G/Ï'\x000bîsãI÷×\ûíAD\x001b¦9\x0007÷Ò	X\x0016\x0019ñ\\x0007Jg\x000b­ZâY+\x0002ÞÕ\x0012ÕD\x0006¡¦t6)¡X\x0004äÆ´ôJ\x0010\x001f`³È$¥\x0011\x001b9W62\x000b÷\x0003sUô×2K\x00139\x0007¶]*û\x0012Ù:_8&Î¼³Üä8\x0000Tæ=Mâ
1ïÛ«ü¨ç»ýh¥
'Ë\x001aÔ\x00125eºá+9*â;]Ù\x0015\x0019lh
ª9¥RÔtÙÀH7Øªaðu;	»º«iß%¤O:xôãsL(d¦yßüþm/ÓàâôãúðÜ	Û\x001fª{ÁÏþ$úøauO2Ú\x001e\x0017üúmB7 b{.Úîï}´Wî@½m©_F%Ý¯Â\x001fÆ=5y\x0019xÐNçM[	¯\x001fú¹d&þ0X|¯ª½Ã`ßÏh±\x000b:%:\x0003ZÔE¼~8\x001ebTÔíÅ{\x000b\x0008ð\x0005`­{ïÙV\såq¥åä\x0019¡	j*d'ÓW¦3N([]gxN\x0016y\x0017R¯1\x001eWqE²%\x0017t=ÝÍ>?~hÅ\x0017,¬ÒÈ¿;\x0005\x000eèéñj\x0017RÏîPvôuð-<\x0005Ê2\x0017é'D_Èµóx±§¤Ï'Â]ÈÝÛxÜ!~P
ýúÁ]Eíë\x0005|häã¸a·\x0018.¤ÌWîD^\x0014ì°ðC+OíKV¬\x001ddiøaÜ^¡K÷¬·]U÷\x00159B\x0014"Öë\x00079,ü d\x0019.«ý´¹ðÃÛñ\x0016ÚpÁëË*Oå\x000fò\x0014«¼\x000f£HÐ[æ¾\x0015Ýq*vÃ\x000fOÃ@«\x001a	©½Q^ \x000bð{d\x0017¤\x000bËóý\x0003ø\x001bøAè´kÐkWoêv¢
äð\x000e6\x001ec \x0007À\x000fÕfFÝ »?8Èr{ÄÞuP.\x000fÉe\x0004H\x000b0\x0010ü°nC3#ëe»A(v¹\x0017mí\x0008@½é\x0007aCû\x000c?}\x001c±7l\x0006wüDq\x0012ðDh0ñNb
Tvõñ(¯ú\x0000·àú1â-uE¹Ûû-'¹KD ªìi|
-²×g\x0003;Ò;\x0008SU{\x001d \x0000EñÔ\x0015*u°³îòë;$V\x0013Dm>b\¸öÑax@°×l\x0016¯²Áæ°^*ë\x000c÷.fgìb·ËÎ¥\x001cv \x0014\x0001\x000eaí2[áõCªù\x0019\x0019àU·PX/ô3Ø\x0001Ýþµ÷þÃ.÷{¤>#ÆÍ­ÁU\x001f};õ¥GJ<.Qów\x001aÙ½mÞþ¡UÝÀ´A4ÏÈã\x0001BEy{°Eø\x001aÌî¯7^L\x001f\x0000eq·:\x0016~È\x001cÔI¦ã\x000e]þ¡Ýú¡ÄÔ[~DeÇþ!ÙYÉß¡yfo¶d¶*W£ä\x0018õk/ôÂê\x0006\x0003Tç\x001e/¦pà\x0007N\x0010XGÙ'$\x0008Æ\õCU4HÓg,ÎÀiRTòá\x0018@¸ÅÎ%ÙÉûJÃ`?JP\x0006²é§dÎÚí"4¦\x001f$\x000cÆ\x000fEáTÓZH¿g4­?«\x000eM$}#b×\x0011ý\x000bL\x001aújÑß@\x000er=
½B¡\x0013~ãE	$¨Àzú1üAG¢'ü >ªfxÍÔèfÔ êJOÔèÄ\x000fh§ ëî\x000c´ëôi÷\x000f¹Z£\x0013P\x000bª;å!Ìº\x0008'À.|
ä
¶¹Kë\x00137¨jr\x0003\x0008D
%ß¶=böûrÛf\x001f2ÑÃ¼<Ko[¨1*]U©Y{5³Q5ÃN\x001c©Ü\x0014\x001d núxb¶Ñâ.-)Ø]UÇ²¨\x001a¦Ýôµü8ÐNËþ:}÷©ø³kz==î>)'¡]Ä\x0014Àfº\x000e\x00163H2ãõnB¢,áãÚtcm°ú$03+fl\x0016_^\x0008Ñ§¤mf\x0002àRØs¤ÓÖ¤}ëùÙy9÷
«~àÑQ\x000fYâu¸üHê÷é\x0010£ï\x0005$.p­"Û\x0004FrSQ\x0015¸ëË¤6&gÓk\x0008!:íR5Ø Ãnæ02\x0010²ú4¯Å	ÛÓp´ËT±Æõs¡,wóz°Ä)·××
\x0000³áeäÅc%0eêë¨¨]ûJøe¡qEó\x0002d¯W\x0002yö
<¦*Yä+>çª(«dà_O­õÅÀºÒæ \x001d\x0012\x0013äI¤GäçW  õ\x0002Hý¶BMÇtó÷\x001beÃÛT;ªqO^ÍäçNÍÞ®|Ì#gÐM\x001cQ·\x001dÊÒ£³MÊ°\x0007\x0000÷Y:\x0015ð!ï@íbvµgÚ\x001b\x0013Y\x0012ÁñiÀ8Í~M¬|{\x0008]:oÕLùõÑz¯Ã\x001d\x0019oÔLÍF¸È\x00057¦\x000b\x0015w±\x000c9T\x0014à~ÅB\x00080ä<Wqã¨±\x0011£\x001e´ÊsÕEB\x000c,¸Ó^Ë¥`	-Ñ«ÈÙx=\x0014CõâK+\x0012lc?&\x0008ÀW!f#\x00104T%OÚæ¢~]Áæ\x0013Ûë"Í|U+Å5»òa¾¢]pe«áG\x0016ÍZ\x000eñä
þ <ÛrîË4úJKù Ö\x0008´8µÊê\x000cÞÉb»\É°­hs ÞÜóðæ.ç¦º¡X8´ºRÎû4\x0011#vz*¾^:\x00049i,\x0004!·GÒÿ\x0010\x0017µ\x0019lJêÞ,Ñûÿ%Êr \x0000Y.ûM³ëayR(b´8úí±%¼\x0019S¸w¢$ÍÔþ[# ÔiÊ#V7æC45¹4[9ôG<\x001fTTrLå\x0001õÎAr}®¼8 TîéQ\x0003ë\x0013X\x001fó
({Y\x000fU
éê^<¦æRe i8Ð¢\x0014"/òUÓÃM\x0006=.[E´K\x0019Z_ÌË\x000e¯\x00180K¶zV}ECf¼åÚ\x0008\x0011hD®-Z¦ãá¿ªåE\x0014ì1:@Ç»æàÌ\x0016·\x0011\x0016uUöÒ'\x0013È(\x0004<§xªè°\x0013ñ é\x000clå\x0016,\x0010D4µZ½(a­\x0016\x0015\x0014Y\x000c\x001a¨ùæº-.^ vPpÇ×:
Nî¥ðòL\x001eKJo\x0003]\x001fÌÍ`ÎÊÅ'6­ºeÞÿÃ± ]Ú\x000f$\x0012J\x0005}ëu»IBW¥\x0011t\x0011$nV¥äp\x0018ÝêJ\x0001§(rÆ+ÎC\x0010sÒÇÓz·\x0014}\x001eö*)Ã:EÎ\x0016H|"5Wt\x0008õ6`lE@=,Jl\x0006ÃV.fPW\x0014\x0003â>FÀøkb©¯Ôï[ðè9Ú"¼¬#e×jL°úß
Öa,JzÜx+-îaH(³l\x001e\x0016\x0008ÿÍ\x0010¶;\x0008É*A\x0014Öçÿ\x001aÖ\x001aøR#[¤úe
ü4
]a\x0003\x0002ôG«}*F_ÉEf[[©\x0001U\x0014¹yús\x000cryß'äóèNp\x000cä[JY(÷ë
¡â«Øc©Ö 1Ð­øý«|s%WDz\x001e¯3\x001b9àfÐ0ÆÇ2Tï¡\x0013fÈðÕâ¡R±\x001b6®ìzv«ìö#gË½½\x0018Ð{TÈ~#Oíeq©pS¢ÔÍ[R6ÕÝCÖ^îf\x0011Å1}m§¤\x0008ØR:~ÐZÎð'·Å+§Ã-\x000f®tÎ"H&î°PGÄ>\x0018Ô× _®\x0006Õì4\x0013\x000fl×ôâN£\x001cfÝéiÈ\x0002P}=í×AÉÝ²¾C|Ìe\x0004}[Òª«J&4]aºÜ
fy´\\x000c"ð¢zRáË¾z´¶Ýt~q®É0.Jr®Ñ(¯h³nDø©¢tL_Rè='¥ÑdÐø¢>ögÌN
\x0017ªkk>§(×¢hÁy¯u­2æÞ¢É.u¹ÀÌZÉH^Ï©{\x000bÜ¢]O¡ZºM±°SH\x0010ry³»A¸8xRÆC(Ol¿>ø\x0003»8ì¯8GõyD\x001céèõ­>Ô\x0000CIÑ2ôFrúÈaR©\x0001$bµÌ^¢PjS¿·\x0011ö\x0005´ú=\x0005Î«°À@\x000cOAýÎd÷a\x001bÁ\x0005\x0018 #þ%µ
Ð8nÂKê\x000f=¨ä´íä¬7\x0011Àý4jq\x0015\\x0017
oÂ>>Á+×:ý%\x001eGz\x0002k¤Õ\x001còn\x0012Ã»ÕìSÖ°BG/\x0017&Ù2hô\x000bæ¨%4lôá)\x0005ò\x000c ÓÀ\x0014/&j\x0002È]§\x000bb©W`:8\x0015²ÏEU¨\x0002ýÜúñWì\x000c¾¨êÕâ1ÈÇ).¥@¢\x0000Ä[å!¶DGÍ¢ÑY.!T¥èËsíúWD\x001e
hE)EY\x000ek¸ \x0017KhÅt¥X "ôÝÔzKrI*\x0000¼bËy\x0003\x001f\x0007Õ)d\x0016,w©ªT©Â\x001cºQb®P\x000e\x0016_ßbl%£2ØÂ¯£`ÄÁ\x001cÃUús'e?Ús>\x0008¦Á+\x0012\x0004·i·õ(÷$»ueÉù]EniD\x000f,£Ö ³ªÉûÚÿ¤èM8WÒj"e\x00008 \x0008¢ðp¯\x001aäÙn\\x0012\x0012¾À\x0002Â°þ@#ë:¢qÉ{XK\x0008\x001f\x0011r\x0006à(ñ)IËb\x0011\7\x000e\x000bGt%å]ÚÈÍ®\x000f*ßlb¢×Þt{+Ï\x0012\x0019Óûçº%@·ïF_«ºëfß×AZÞ¨®È\x0005v3[?Hò\x0007¦ç\x0003³C÷¥°û{\x000e»}ö\x0007T\x000eyÛõ£êùÝüû$Râì\x0001'/Ñ÷oãÍì~u
1n#Øþ"!
J\x0001$)eò¯©®áîC\&z\x001eÇÏkÈx2±\x0012Ø\x0001C~}ðýñ\x0005iã\x0003qV7{çI2^ä\x001enãójå¾1\x001b
û9Ù`+\x0008ÒTGsï`R"ÕÛúawkx´Æ`ûO'6@AÊ2;\x0005ÁýØãüÓÕ
[§£Ò\x001cø}d(\ß´r*õm°\x0012)¸êßæ"\x0002æ\x001eç©®]Ø
\x001aÝO${Å\x0007¸\x0012a\x000f'r*Õ\x0005\x0016\x000cã@ÈT\x001fL§p»!Ôô\x0002¦Ô]vÊjÖ\x000b´bgÀ¶\x001aaÛðå·SüHíë\x001d6¶è´Ò\x0019í¡¥ô&î¦Lí\x0003Å\x000b)Ä\x000e½JÌPÃ$Â^NµIÒuî!é@ÚÍGeó¦8l\x0012ìAn~\x0004[úÏÅ\x0018nk\x001d|îW?¬m0'¼+\x0003¼í­}À\x0015Vá>ÈÀïOLþÈ^¬\x001e\x0008G|&å½æÐJT¶¯%´\x0012êOé0ä´ni%¸ÉÁë¥R\x001eÎ×L;+|LRkg\x001f\x0001\x0010\x0016UJ)Ä\x0008ó9
»»\x001eÃ-É¨FR\x000cK+°±@2P	:@6PÂné°\x000b8°%ÝÐáBmEh-$ÈéÒ\x000b\x0008Ï©Ìð{~Å
°ïS*\x0001\x000f­ÀÜoJ%Jwò\x001eôºÓ¶rÃ^le\x0014yÖ\x0003Ð~m ¦PÝèö\x0015\x001c>f,\x0000n}°\x00007\x0010¿WÒ|K;D\x0018t\x0006¸TKCê±mK=ª#kØe\x001cö"C\x000f¶>6¸¨ýÃz?©Qèù-ÌÎ×q,HnÇt¬ô¡
f\x0013\x001f±kzéåã³ÜåÃÆ{Ú^³Ræ4ÍPC>z¯,PÎ´RL?ld£lQ\x000f1+¹¬à\x0002r\x001b¬Í;d\x0005cmI$i\x001blµ\x001f¿\x00144\x0006¨ÎÝiÎî©@\x00081PßL]\x0005)
¶dÂÛÞ$PÉ~ÎHÚ¦\x0016Ih26÷(QÒ#(eº\x001eð8ì &ýK×Ò>U/íg\x000e{S¦â´Â½ô\x0012ô´ç$ßGZ:Â@îs{ø9°é¼vpá×`8Ã²qóåKÐ·µÛ>'8bSGl\x000f\x00127î£8ëÍ¯\x0002ÙÌt{}&\x001d©}ãïk\x001bÁ ç
Qû[³å 'Érä¡\x000e\x001aÉ\x000c]ärw±\x000c\x0007\\x0016ðkºe8H\\x0007Ë\x00042\x001bËnDõÎ<6P]M\x0007Á\x0007v	Ù\x000fóë\x0001¶y3ËéÃ¶
gËn,ök³ª¦ø«rºøvU®õQ¿Ü¾û¿tÝÚnÄùñ¸a­\x0001r\x0000°µ\x0005à3TBÅ³8<Aó¯êG|_¨|î<>T@\x0008æ`ß|ðþ!"ná\x001a=ÁÐíB²\x0006R\x0011ÉK\x0017h\x0002NRõñ\x0003\x001dËvV¡½(¦
aÍÚ;[º\x0001ç\x0002\x0017VÀ 8d\x0012lyÎ[\x000eäú¢\x0015¹åBJ$þJÞ£ÀaõùaâþDÁ#äGPÁñü[>dÁ"\x0003ô'Y°£C´ÚÇøBN\x0004á'<ÿü
YhzôÈü¡ur=X' hi\x0005â[J$1\x0003Âs=]Kb2>|åI»~xð8\x000eàj,w\x000fíÏK\x0019\x001d\x0011ÖH0ÑV\x0006¡s\x000f{\x000bJfÌÚâcPË\x0015q(\x0004NõÊbaÌô!`\x0002;á´Bb\x001d_°\x0015féÜ:¯á­"\x0005OkZF4\x0015ºôi÷Ð\x0001ñ÷·Õ·X¸\x00129ùxê
RoJÎ$JEö¡¿z\x0005T6[È·À¼·[ÉýÜ\x0005ìnÙ\x001c\x0012TvK¥\x001a3Öòhq\x0002úôÛ\x0011²Z\x001cä/4VN\x000byR\x001e-6'FBUóÇÛ\x0014C"ÃÏ«\x00046î<\x001csÐdÕ¶ÕcÐdu¿<Ê7ë\x0019\x000b»°þ»4ZëCUcia©Q\x000fíêIØjÅÊ\x0001Ý\x001eñÍmt\x0013\x0001+9\x0014` [	\x0001Ùì\x0004\x000bg¬\x001c*Æ\x0010Ö­÷Ko0ñ°ëñ¥7	»\x0011\x0019-ëü}#+u¯4ÓýA¿
;¾­\x0013ÂN\x0004ßjÑ.¡Ä!è6V.\x0011¾\x0012ÇL\x0013\x001c\x0018ly¬g"\x001c{ëlî\x0004¼ï\x0011g5îÛÍ±O+õl¯\x0002"3ÉÊlÝ¬\x0014°KnPT&Ü	¢³DIZN¾$G\x001f\x001fõu
iÔ¬YCn\x000ev÷\x001d[8{õ÷F\x0007Rã§U>\x0015i=½îÃfPý$PÃÆÏ\x0014°Ùªl]n;\x000b¸# Èù\x0015énÅY\x000cåæ§±MS×£$¾Ïò/¡~\x0002mº\x0016XÍ2i\x0001\x000fPË;\x00147HxÖm\x0016|T¿Y#°8éö]
µÛ8KÔT7Ì\x0019j&¨ÛZI¯zi1	nmÓ¶ }ëÈÌ:%ùÚ2\x001aáQnòÔMÀt\x001a»3 }\x001b¡9ÀvèädêZpø°}Ý\x0015\x0016î0j\x0007-¤$G·\x001bÈj}\x000bÊ IQ \x001f.¤VBÉ|÷ÅT|¤¬ò\x0011ä½Þ\x001ca¨,¤¾+)ôu_[F3É¤ÙÒ<ùÝ\x000eÐvâoxé\x001d¦¡îA(zK±åw%â\x000f0\x0018V ß©WGdg\x0019ùþY«§/ó)²3¤Þ	Ëfâc¥
5_ 
é0[£\ïÒ¾¦×±\x000e\x0002,ÊýÃNÅáâH¶ògÏD'%øt\x001a¾H[Ú÷LtèÎ¦t97in]%ÌÒ·\x0012Ê%b}D8i\x0004ë\x0016r\x001ax\x001dpìNY`içà(qú[\x001aÒÈÂ|\x001a	I×\x001e¼ø\x001d!"Í$'Pö!¦ÚÉåEøæ÷Be¢s(ÿ@'\x0001{µ[·ü°åvÊ\x000f·	¦Y<\x0017¦-T´\x0018²â~XdW¤\x0010ô¤
âÈ
ýé|ºlÄqâ h<\x0003e5è\x0018kÈv )G:ÏÖ¨óg £;N\x001cd3jÄ÷Ú¦êm+Eù8ÈøPTß#A¸h\x001cA\x001a_d.Ë««R\x0006^jÐÄ1âl$£\x000c¯5§Õ\x0018Â KT\x00032PÈ_y&Ió8 T¦\x0001Ú!PyÊ|Ü½ÜÅ ZÅº¸Ñ¨L±µ\x0014DèÞÉF+\x0011¹k3\x0003qh'\x001dxrps\x001e³xÃ\x0002å´r}\x0001¿\x0000u-ßÞ¾-á÷\x001cïV\x000fÎ\x0013\x0014JBËb\x0011$tFÙðìOºKÐ¡¶uC£)Y"Òï~ìPD\x0017\x001bìh²ñWv\x001fpR\x0003¡/þ\x0011.Y2Y\x001fM\x0010m¶\x0018R\x0001\x0005m\x001cC2I8¬¾N±§D\x0016!ö\x0014áßÂ+ß¡öl[Î9HXT\x000cÚE\x0012¥´¯\x0019jÏ9D6­\x001enR{\x0016kÀÆÚ3¤­p@a÷ÐVlF¡4?ó;×> \x0010ñÓî\x0001íy%ã|_jÉêkß[\x001bºµ¢Iç­ñP\x001d<ë\x0018
\x0004'wfR¸\x0004Q(\x0010»6w ùÀMÞÀ62ôS\x0008t;1\x000b\x0016Ä6h"Á[ÏÛÅtÂnß8Tf÷YÍ³÷*\x0016Bw9iÆ\x0002ä3(?
%(¸ª(\x0010Í\x0017§Ã0wKC!
íµk;Ô(àC¶>õ-è÷¿~ÒkýT°Ð·Å¤5\x000eÙ)Âî&Xà&Ò¤@#\x0017ç«X·ûèßàm{ëf-rUFí(Z\x0008\x000f©Ò´æ\x0019ÂÙ>E®\x00138¿\x0003v¤X`ÚßÜæTÔ\x0014\x0012MI^Càu\x0007{{¯ÝÅó\x0015}B£\x0013wÆM¡Ê¥\x0004çD×\ãÎ©ÒÄöló¦\x001a+2àö©/«Ït7ÞVÅF|°\x000b\x0002¢5YÃa\x0005Í~liÖÍÞîâ \x0017ä¸E\x000b?´zÈì{\x0002\x0005UÂ¨2C®k¥òÇè£HXæ§\x001dõ©Y5û§\x0014WD|8ÆUÊÛ?¸æÉ½\x0005[x;©5<.¦<K%&.\x0018>T´>nü]!¼\x0006!ÍÝ^\µBµ4¯_ääX\x0010:oP+ÙGì<ÉM#£ÁvoøUÕ¢×Ù(]Þ\x0003\x0005=.\x0014¨ùvhÛ§]»BhÅBÝ\x0016Wèª§÷\x0017bßh!Æ(:½=&q\x0016u\x001eOñÑÿ\x0016 ¸×\x0002$(úøRû\x000e&òd=\x0007Á\x000f¤p\x0012½EÏ¸?=ÃI 2ï©\x001bTÎ êcáëA\x0008%\x0015FÎõ\x0007RLñít[\x0018\x0005§î·X\x0008<-fLÕY­Z$\x0015¿<uºQT\x001dH)\\x001ffá#¯nµé\x001cÎÄI\x0014\x001d9g¬.+%
B\x0001U\x000csã+Lé0mÞuX*¼\k	Y;¤½<;p>Y\x0013Û-\x001eÎN\x000fö"µp\x000eÝ.´\x0010ÈC\x000fÙíQÌ%\x000bª\x0013M
W\x001dOÜwzFªNIæä;ú\x001c8T¬~ðN¼v~â,¨î£\x000f	©é9ñyí$\x00024ÊM-ZóSè¡¼bìç'K-3:M*PÚaõYæ9=[\x001cáý	
]v\x0016¬y*\x0017#5\x0016$ë­ÇF¦Ø_µ¸\x0005U^¯H¼ÐµçcCÜF:ß­X>ºJ|ékç£ÞÕyæuËÎÍik\x0004C§|ºjöB^íûc*B$ìLõ±âË·EÅ3$Ýõ\x0010\x001d#ñàUpÇÔÝÙ\x001b¢ÿFl]\x001111pí¤\x000clë¢­\x0007\x0017ÖÏWÞ~¯"^x	\¹~Êµå¥\x001drí]PÚ<rËûá
°ma)@f¯ÌòÅþ~*°ýVù,(ýXë \x0012Nýb\x001a
×C²º{ê´øÁÞlçd¼o}nø@^ÚòL¶Øz$©KÅù*¸_¸õG7\x0017[ÜéeÉ° $Þ«\x001fK\x0000<TC\x0010\x0003Oå87c/\x001f¤3\x0007ælð\x000ba9]íS\x001e'íÙ)K-úfï\x000cõ¡X\x0007³ô\x0014©0=ÃZtÓt\x0014w|Pû\x0016Ñ7\x0002þ£K¦ÞQpûÚJÁ`J¾Íã¡à@¼×;¨¿c\x001c÷"|Ý¥>¬¥óKùz·¼=Sï\x000eÇKê¢{4ÌÚê|Õb%"
ª<ªa\x0017Å§}ðþ\x0016\x0013E\x0005ô)Àdmÿ*ØT1:*Þ}&9~b\x0004á'Mz÷üÆéIôÖ¤wçÁù\x0014¥\x000c\x0000
ÒGAÖOÄ	\x00001\x001bçv\x0012\x001e\x0001\x0007E§`75¸°×³üu¬\x000eQ®\x001aB^aÈû.æèõpØµOÞ.\x0004§Ç\x0010!`\x0001.\x0016Ú\x0006ôB-r+3l\x0018t·Ä+,;r1\x0011"\x0010*e\x0006\x000f²Ê\x000eÞ%ô$(@\x0006\x0005E-r\x0010=;5æÝ13"K\x0005P²¢(Ã\Ì<\x0014s	èK7§ézYð7§éÚ\x001cz\x0014Pó\x0018é\x001e°S9ð&ÊÌ"\x001fQÛ=7\x0011v°½èç¢\x0017	§=¤\x0014_ÍÏ+\x0016>ð\x001aEÙÔEÀ\x0019\x0001\x0017ÑÊõ©°Rò)¿\x0012ËÑÂsúªX}mÅå\x0005
þ°\x0017'í¬ö>^[9óIøÃ®ú½¢)Ø\x0000vÓðJqUâ;«¾d	Û\x0017§·\x001aÊ\x001b$[Ñ¾ó­,7Ð_·e! -"Ì\x0016à(Õ\x0008ãð¥Éï¦ö ò$°¥\x000f^(^\x001b ÿµSg¨b½ç*\x0002\x0016\x0004ùIýÂßZ:Â\x0013\x0016Ïjj½TOÀ\x0005váTæÂuêv«õ=û&qóé]¤nÎ\x001bÄ\x0018DÎ`+Ü}ë\x0005#NÁ?\x0000NLå¾§°áïLði#-¢ÃrKÛÛxTWC9S_5¹÷¶°\x0008f+â¶÷¬Îû|©\x0015ÛMTx:ZhÒ\x0016;]fV\x001bïÁ\*½\x0014¥æöKHÔ=·:
ö\\x0012®óJÕ\x001dï\Ihum)eã°§´<«$×Ké345·%\x0002 ?²»Ü·\x0016³º]í#ÿ÷t7T/§íµ«ô\x0007¼i^³y°Ý±æé2³aºnÝ\x0011]o\x001cRÂ#%½IÂ¯ÉÃGòÓkÙ¨Ì¸^ËNDc\x000eõZv!Z,±HBUÝ\x0012Kî\x001a¯E e1E\x0004\x0013y\x000bq\x0000<¹"}UÉÁ½vbò[OIÂd\x0008\x0004Y\x000f¹Öû\x0019$\x0001bwNSH\Hòh¬l/·d
þÔÙLîHJ\x0015?)ÃT±
ñÑ9ÈßfÖfkPpp\Sú\x001ee\x0007v%ÀfV6Å!J7TÈù½EHÉ\Nëî*d¤ÛÌ®ll+'Îæ\x0004\Yw¤ÈWÈg+óæWäVoPºÉ\x0005\x0001\x000eaaá"¤­´DÙá\x0015uKÞ¤Ö½º\x0001ÍNBÝ%]\x0014,¬-gÓ62&ï¦ôv\x0005ÜoGÀH`w76_T'_RÛI÷Q5ñÓ\x000f­ëÁ+^"®qêÍ;Ð½h¯ÞtÍÄ³çÿÄÆ=y'6îE\x001dÃ­¼Tzþvh÷
ýÍ\x0012¡ÆÊæ£\x0002\x0004nE?Å¥yE¬)|Ô4;\x001b+'&íÑ\x0005ßq\x0004WCÖ
¨2\x001f\x0003\x000f¯úæòS+1UÎ\x0013¦4²U¯Çl>9!r±Ö=V¼%,]J~×Â&ÇÐõS±&(Ác\x0005k5·\x0007¥DÛÓX÷]\x0015z\x001b	¶mÎÜö©PßÃGæGl3
Â	4ºÒ§Y8b¥\x0013õ8ae%QÈ5{Ì4û[\x000ba6l&"fLZbä+û\x000e+dß¡ñL[¸|Aäcmt) ÔÜKÒjzÐ\x0014\x000cðM¬ÖÄLLi?6	áÏ¡» ¦\x000f¦ÞoF\x0007[#úà=ù­\x001f\x0005u%ãMTÿ]¤:öJÇÂ+>WÙ2Ù
Òc|)"sÂ@W2ñõ}LÑø@P»RÄõßtß\x0008\x0018P8ÚÙ\x0013Áàdk"ÕâR)¥t ¥H÷HS\x0016Ý\x001f\x0013ÎçgªêÛï³¾ýC8^\x0004\x001c\x000eK\x0005<ý\x001c×î##á¨(¡\x0010±iÈ8¥T(NªÁ\x0001¦ÖÈ\x0000A92ÜP¼/M¸ «ä2·äþºY±ÝìY%õ¬!7"Ï×ü\x0012ru¦ñC:Zmò³rðÏ¦ñàä N\x001c±\x0008ñ$5®$S}\x0013A#\ô\x0000&èÄTáí©Â²y§\x0014®Ç;Ý¶B\x0003;À\x0012}ÿoµcÚn2\x0005]
î\x0007¤o],r°ÆôÃAçÊ×Ã´>\x001e~9û¹XK^Z99g¦2¹»«LwóJ\x0001·:ûö=Ò»\x000f!-°zAôãX¥-µ¾R@¤ÚO*ÝÏÉÒ>ñ?ìo!¡<\x0013`
\x0016æ¦\x0012<¯ÃZ9Æ\x0008&xp8\x001a\x0007\x0013Ö<³\x0013ª\x0011Hq\x0004 J\x0001\x000e;Uâ@¿\«Ãd>©Xaj\x000f#X\x0008ºs.±\x0010*\x0015Q8C¤+s\x00167:Ös}+@9g·C4Ò®Q¹t¹0eRÌ\x0007\x0016q\x0004C¾u\x0007ù¢Ê¾øT\x0005G¢8ô;ó­GeÎó½þ:{üî©Z\x0007æË½:¹×,½w°={ôwL&ÒÄÍ¯8ÚAÂ®\x001bKVqxµWßÈå/ù(ÇC%\x0000uø\x0001ò~\x000b¥ÎÕ,\x001dÛ]õ>L;6H1^M@Ý0
&\x0004Êpµ¬WÎr?²Á¯Û¾¸O\x0014ÎÇ/wmZ§ÏM\x001fD%°téì¥¦2¥Ñ-\x0016\x0003	\x001e§À\x00130kûi¶ÆZQ­:\x0015`¾Ý§NÐQNïoçs«\x0005âàJ^z¼\x0002\x00068ØÊï\x0015±D¡óÝÅò Ãrm~Úã*3 ¸V|\x0010d6%Áp¬J@oâdD\x001eÉÁN4kUc\x00064Õ>O3ÛÃÃå.xEa\x000ezZ÷ºc£é(ÑØÑXO\x0015\x001d²\x0007züVaF\x0000N(b,\x000f×\x0001 XÛTû\x001cq\x001b¹x7í\x0010%È»6ã\x0018x\x0002Â8\x0015he±Kõnïcø·$I\x0002?\x000fs2^½í~£¶Ù+0S\x001b\x0011±n²YëæÊg\x000e¯$\x0006ÕAðõJZv\x0007ÆN)£HÛî6w$ø¾Í{°I}XEü/»+¯\x0005{h7Ýônz<ló\x0007¾À´\x0016ì~Ä=°½K°Äa\x000f»ð-«ýð\x001ekKÏÉhMR½´\x0006¢\x001f\x0012}I²!$§£} 5ãÙpBo¤¤\x0018ßIè	¿5CX6\x0016ìUúÒ\x0005	@·`/fa7ýzÝ²[ë\x0007¼ë^°W.\x001aîËI*\x0002¦yÖgÝzÛ¯Í_\x001f"p\x0001T3XÉ´>@·{\x001e£1qhFn	³\x001bUàíÎj!é'@0ßâ\x000cÝjó\x00108).I@§H
Úîzº4ËÚ¡|zÕ»ÑÑÎ{´ìÉ{2Ðê¥V\x0004ÉF/;º°ÑL7>Kì¸ÈU>ÍU\x000füñYìÂ>,J`ióÐ\x0010W`æÔÐÖPýô«¬®©SX)ãDyÝ¾d¡ÂÉØ)¹p@?>`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=öçÅÿî\x001fþìôèúþìú\x0001~÷4n\x001cÛ»üðCÿ}·ôþûwOíyê¦Ö=¼ç¿?·sÓ\x000c¾èpnænr¥ýÃ\x0015Vê¿ZÆ¥\x001fæsß¹~yxÿô8ÛnYTU_ÿéôØÇ¾\x001bü\x0013ê½?¹&Tµæ\x000eÄ®Í]}\x0016ê\x001f¦¾oq¨PàP`ìÇ~öO§s;^AQÞ×ÓrîÆ®Wsy
HUð>
ªíý¨¾þÃúG7¸\x001eë½.cÕtBoütÅ>t2\x001ds3\x001a«\x000c-§Ú-\x000f¯Nÿöú·íÔ&ìÁ×ÿî7\x000c´ð
"ÍWßôÛ­\x0003zç\x00146Ç\x0019KÓ)µ¦\x0004«»÷ÕõíÐ\x000caH²ÂiÙeÑÓ.ï_æ÷¼;Ø\x001c¯\x000c\x0017guÙ/®M5û]èò\NiáÜb®lÜ­ßiKvnÑ\x0015ß\XÐuË·íxn¦1¬Ïc×,~*º{ßG_4®Òrê<¥\x000fVÿþÔÃÿåWn]\x0007Ï>9µçvéæ.ueZü½¦äiî²\x0012¡0¬fn\x0002Öläo¾\x0017j°Íº~ö\x0013×Qõúö×·îþ¿n\x0007¿5Ç~ð}<{kï§û?ýÇíïßEºieÓ4Û>òÈÄÉlâ¶aAÛ¿\x000b\x001dæfò2ÏxT*\x0001K\x000e3zµíQÅ\x00107Þô¾_±i\x001c1A0&1$VD\x000bÃ4\x0003³\x0008ûþ=Ï§§v\x0007¶\x000fÖzm~zñ_ß±é\x0019~àëíFç'\x0014&\x0006)òåÆ, a>ÌwYQx\x000f?aAr·à«|$\x0012<ÝÜl¼Õ\x000f|å/Õ	\x0004îò*÷\x000fº78ôäSÿ\x001b]ÛÎX´àT©,Ð¨z5uÿ\x0007N\x0005§\x0019;î®¹ïëvK>\x0006\x0005òW\x0005?\x001a}»Ý¬ø\x0011pÄ\x0005Æ¼ÇÑ8Pc\x0017ºf^\x0017¬
·´ú\x0018</p><p>xÑj\x0015¼é 0Ìþ»jÇ\x0005²USt±W.í¸y¥ªµ.çY6¼Ï]ù8·\x0005
\x0000±\x0003Ôô.uÕ3\x0010</p><p>ð)ø"½c¼\x0001¶MÎ"iÔS7ÍõÒ\8åê£%PþU\x00124&/ëvDÐØï
ô\x0001\x0016\x000có/\x0018ÇQõÊ\x0001ÜágCj>\x0007,ï_Ñ)=ÀL+ùKÒbôå\x001eH,°õdç¿«Yúw\x0019t"²£Oý¤e\Cq=\x000cêeõ\x000cª¿.7ýúôMï«¨3y\x0007\x000eÔøqùmþyþ\x001cVT;yRð_ê¿£$sCOëâ][P¬Dd\x0017Îµ²\x001e£Vô3$ÄB\x0011\x0000¶QT;p]RoMó©$\x0001i½\x0011õ\x0005Ø\x0019\x0011ÀOû\Þ</\x0007\x0013º}Småí I\x000bö,\x001dóÙ
r\x0001Ý¡"Âsºÿï+m=×Glj\x001f±PàKÿ?\x0010fK\x0006 \x00025K8v_óâ+vwáñ´ø\x001dö\x0018\x0016\x000bXÖ\x0001ä\x001c\x0016ïª5\x000eea Õv)\x0006j)ß	µMí2ôÀÍãÞ\x0019¤·nY</p><p>N\x0011zØ,â\x0013RòÅª·LãTr´öÈ12í\x0003Ìl `Â^3mÙPky \x0004Ö
Ùùg_Ð½ßAaÊ	Ô\x0011Xð¤ (\x0018}\x0000J7O¢Ô,ç_¦\x0001D¿Ñ¨i£¦l\x001a«g\x0002\x001cM£/àFµ÷@¨*ø\x0011úQ\x0013<a7Nx¢= ¡úD^¤62!r\x0000nª-A^j6¹\x0014 \Æ²ì\x000eÄÐéøq1\x0004Ìózg6îI§URB¶\x0001Yf\x000bhû\x0006\x001eKÿÝ\x0002|æÝóÕMÃ\	\x0017qÉUÀßø×4¸#\x000c2CÚA\x000eø\x0017ÒD\x001f¤áìë_%×
o*_AØB%6&Y£?7~ÛtXmÍ@C¢îE÷?:=vgÏ9¡¶oÂ&\x0008\x001c[HÓ¸='ÿñjKò\x000bß»oíx\x0018YÍÒ\x0011\x0019\x000e\x0017Ó_ä(ÁW[ÏAø</p><p>~þ´TJè¸²¾ó3Ò\x000b«*
rÖ\x000cM</p><p>B\x0006­æ^Á6á¼O)KR+×
Ôtî[÷M1Tw£RÒJjÎZßâ©ìß¼þïÛôç¯Â?ºýò7s²½þßzÒÓOS\x0017\x0006ÒÇÅ÷	÷à«U¦Xü\x001fqÐ~[uªlèrç÷Sà(W§.(\x0012.(Ê§ú©Y÷ÐÂ'þ¡\x00171çÖ³oÿpð±­Os[ïú¢~{øÐoç~åy¤$m)tç§vôÓ¥*=å§ç~ÂÆßÏOq kªúq ³\x0012</p><p>GrëúaepaT®\x001d°@=-n\x0019=
ù0ºyÁ¢[\x0017\x001elÕÒÎ½'\öÕ¹`n(÷/?K\x001fl(m\x0018© UÂ@7°É|^n\x000f¯Ãi:N\x000bN#Ôþ°ñÜ{jè±ëéfIÝ\x0007;ñc×\x000eþ\x0004¬I£ó]ne}>q ë	¿4\x0003\x0017^ÕÑ¼xGL\x0018åÂùð=ÏÚen,\x001bq-1¯^¬<=ó`@²ÍÔR"7¦yÀ"}\x0005ªºð¾r\x0004\x0019Ì²ÖDÑº5Æ°\x001bkEÈ9P@M"e¾yÜÉÐ\x0012åÈqh÷UÆ$ÀK\x0010w¨\x0000«ï­,ªg¥Ì\x0001\x001fa½á´Äf\x0008½od	uä³ \x000cZÄ°½\x001f*+¶@\x001c</p><p>=ýó@zC×j»vvUjßÙpîz%W}ú\x0006eÂäÀ\x0003²fAFo¢9V»>´\x0006B\x0019L|Z{ÿ¯Å\x001aøÔÃÏW\x001b
\x0016e­ \x0007ÛY-Ú\x0006&óò	º¥ê\x0002\x0011x\x0015"ãi¹Çüêâ2ëiªíûù{ï·Õ_\x0005.ïOqx¤Î¯ËO\x000bÚªµÒ$_NCvA¾¬KÎ\x0014À\x0006Wð5PÏæ³ßÐÚ+£=ÒÚ\x0001\x0007 \x0014</p><p>@¼¦súÑÉùQ¸\x000bÂ¥áçËëw¹3\x0011\x000fNÙ®\x0018\x0007(ìÕÉ`e«ãÊ!å#YZ¼S\x000eótþ¨³\x0001¸AÃ\x0008´ÁP¬Eg¥¡\x0011C&\x0018\x0010¸¦V÷¹ ØàRµ7¥\x0002u¢ÂÆüõ\x00033¡aNþÙûbàyh\x001b\x0016?¤¶\x0005Ó|.ö×Ï\x000c^Áë\x000f\x0000\x0014µÊ9\x001cü@õbT¥TÏMµ[w³Ú\x001a¦3f¶Í,ñ)MpÙêä{î÷\x0008\x000e¶vC\x0012wtª\x000f\x0017</p><p>Àg»¦kCv{Ê #kó\x000b1Ã\ÐÝ]íð\x000e591Õ\x0004\x0006¢\x0016Dñ´\x001fP\x0016È\x0008ùaZv´\x0008b×4å{Ûy­hòçVåðrSW\x001cõkÑy1üÜ9\x0002Öù\x000fÇ÷G¨¡(ö[ÄfmÀ®@\x00075íîöU</p><p>ÀtQhQVg\x0014 \x0008Ø\x0016±åP©;5:7§Øº\x0014\x001cÄgêê1M\x0013¶T\x001bÌq²C\x00078±îk3J\x000f
÷!"P¤²|Ù¾Vâ+Hm\x001dá\x000b;³\x0000%\x000c\x0005ö÷\x0000Hªs74\x001dÊ\x001b°R_l<â\x000eLÙÕN&ÎM¢upiÚ¯Ä]|8	</p><p>%\x001eíâ»à<uîQ\x001b±EhYßL\x0015Ï3o\x0011rj;>Ë&nFìi\x000cCê'n_Õ§wTQ7-]Ú±4MyO­\x0013ÜI\x0008|CÍ*õ¿eAL\Ù¹²§N|7\x0019\x0016|¿Üfî¶\x001cJP\x0011q¿]¯B{©îYN:êVSàhå ê(\x0006ØuÞ_TQ§ûæSüs\x0004Ë\x0017úÒíïq%Æ¥«\x000c~Áæ\x001d}|m¿9w\x0005ÒyÖÖzj\x0001;Bv
qñã¹¶º</p><p>¼P\x0010»]ïû;Ç¾è<\x001b\x0016An;xÅ@M
¼HëÛ~©ÂÚ\x0000*R.k¦îò)¨ø\x001c\x00142¼PQ4wùLíQâ</p><p>m-cU\x0007ÝÖWÞ«:!À+5ÎïÚæ§.Î´T\x0001
à1\x0005\x0005Nªú\x0007O\x0015þ\x0010Y\x0014QQàÞ]ö+íÓÍÍÆN\x001b¼ýãÚ!ú*ef+T®£ÛûÂÜXëíÁ\x0006_Fª\x0005[I1\x0013áæ{ºëÊ5`,z¿Ôºb\x0015\x0003¨&Ùô8ÃÊÔ|\x0011Æ!\x0010ô«Âäºí´X\x0010âG\x0010£R\x0016øCá¬µ\x0015üZüµ i\x0002³Ò\x00146¾¥yêú</p><p>ÞWqH\x0013_tB×)±<\x001eÃ¹&!DXíh*nÔbÒÃ\x001eCGØÔ×Êb3åHRÕCé\x0019 öÄ
mYôdÁïèÐ\x000eáp¥\x0013\x0015X0¸4ÝgP¹rk?\x0019\x0007 Î,$º,<2È%£2</p><p>s¯í§%¥¤Ó!iØJàÝÈþIby\x001an«ä`Å0û xôb\x001cW¦0ÜIÉ«></p><p>\x0005x£`¥Ws\x001d¢Î®÷BgLLJzÏ\x0011n5\x0006_$Ä¬\x0015N\x001e­Ã"ì{\x0002¡ZÅ\x001c£Ïºóû\x0006Q#¡äx\x00084-
\x0016¨cOü.00;Mgvdaë/ .\x0012²´l}?àÓ\x0003Æ\x000fC«\x001a¨hv)´ô\x001br­t.Bñ27)ÑÛC\x000f/úÕsî0L[Ã@¹kÛ§pz3\x0002L=|V®aZ½Ô â};iBN\x0007'«\x0015f?Ö=ø;°\x001f¥	\x001bÖ8)`DÕä©\x0010^Õßf$©%=´ß6</p><p>\x0007ÇY\x0019à£;hw\x0011ay</p><p>*Ù1xÞUøX4øµþË®Ð\x0005I©ØHâûø´Jo
ýjBÃ^64\x00055>\x001cÛ²&%\x000cu\x0016®5Á\x001e¨÷Vú3Åñ>ò\x00066Ç\x0005|ÄAûcäreE!«Uú¤@\x001fzU-óZx×+áóË:8	5XäTýÔ=w³0³J¸\x0011NÅ}\x0011\Ù\x000béÛ\x0001ÉR1»%©\x0002c*»\x001e\x0015V(³úxG]2Ãî\x0008ÔVNàU\x000c£9\x000c`Ð\x001fW%Æ\x001e1Ms\x001bìPA3C`rïæÊ\x001aõø3Yi+¯ÃìEêF( {¯Ø¤Ãð\x0016^²¢zÞÖ¶4pºö¢\x001c</p><p>Wª­[Ø<\x0016m¿Ì£\x001c n\x001cq\x000c\x0006\x000e?\x0011eo(8YQ\x000b'ç\x000bL¡\x0000ÕÁM³0wìiÐJ\x001d(d«g[Ä¥_\x0002\x0010tå{KÚüI\x0014<QÇ\x0011Qû\x0002¥eÍ¼åé®	ó\x000cÂ/X\x0005xà\x0016Ào6±°Á«)1ÚßëyÛM­ÅÉ¡\x0004\x0004YZI"LhëÎM;(ª¦\x0001Ó îJÙæ¥øtùNdjå7*\x0013	!A\x0019\x000e'\x000e¹(o\x0011TYôESóKÛ1N+|\û\x001f.ÚØà&1\x0013ðþ\x001a¹ë¶ï¨nS\x0006ì\x0006Ú+"+	LtW¿Âí\x0006.59(¿à5Á'Ì\x0001û£JË</p><p>.Åc\x001e.'»1ÜO\x0005,­#R4õ>KwxpjbÒ|ßiÆ¤q)âIÎZ\x001avA\x001c\x001eVÔû\x0012 0CVI\x001b\x0004Ñê;aYj37å­±f«\x000f\x0019MÂ¨ëCi"lÔJ\x0010\x0014VCÉDvÃ\x0012U¢\x0011çZÃF}"\x0007ÜÛ\x0012'uQiñ£0zË<ð\x000erË¶¤5\x0007j\x0004¦^</p><p>ÔT\x001bOxKy\x000b·CÓÈ\x0001kÊHXÔ²]U¨"®;\x0016s)ðõÃ\x0016k#\x000bxÿ)**ã`\x0015´-ò<Ò~_Ý5QüìÔy:\x001ft¤\5Sëê\x0016i¦òo0TSè\x0014rÅTCeÏìª¡äüõ\x0012Ç\x0016GSÓgvUY©dl\x001e$ÕKO.:¶ÓI1· 1hÃU&Í\x0012jåçÀÈ\x0015tat¸ÜACHy]<FèXæ\x0011
ª\x0013µÉ{ªÆ\\x0004w\x0015Æ/e\x0017¯Ýä6+ü·7L\x0010}n\x000eçY°Îi\x0016RÆµk<çN\x000f¯k\x000f!`\x000c¥~àRwõÒ¶ãÃ?­\x0013;\x000có`ðì~Ë¡\x0012Ó</p><p>d3´ÖGt\x001døÆh d¥\x0010Á«%ðó\x0007ùgAü\x0011ØmPÛÖ\x0002\x000c!?£¦</p><p>nÆ&Gq!ÐL\x0011Z+NÍVY\x0007+Öbaúâ`û\x000b\x0018#)ðýj\x0016ÇÞÿ"!3°\x0008ûð\x0012.ùÂº«è@R¢T´^ø	æèËpz%vhÄx9bO\x0018à°[SHH.u\x0006"è</p><p>XñÖÕ°~\x0013QK\ü\x0015!u²\x0008Ez\x0007}2¤:u\NXTä\x0003ýô\x0005É\x0011)Ô\x0018ù=yáUj\x001a\x0015ûÕÚypAÑ\ãC\x0007C\x000bÍH\x000brh(31\x0010l\x0005ª×N&UFÙ¥\x000e\x0012\x0001\x000cÚBÁË{´óý!\x0010¶?Ù­\x0011\x0012=[·¦±t\x0001±hÑÈ\x0001Ü:EàLìü(W§²\x0010»%\x0010íFß\x0012:I·åæê¸È´FÎ¢bË}XNN\x0011|ë{¾94Ã\x000bÝ\x0006v
O\x001f/±u÷\x0013Ëí!îv,\x0016¾¯£\x0017y\x001c1SÉ\x001eCxßÌ³ÙÛ?\x0011»öa4µ\x000b]Sn¡\x000f|ùþ\x0000\x0010÷)x}©</p><p>-UT°l£Ñë Í¢ Ê\¸¦a«¦O7®Ó?ÕDûtvÍÆ\x001dè9\x0008\x000f@)Ð*7,p½{A4YI½+o<=\x0014.{\x0018ä{$A¸´üÄ\x0014SÂG­£ÏîN\x001dW[m=\x0010å¼\x000cO3ÒîØÕ8ª\x0000\x0017¯Ê\x001c"\x0018\x0017\x000c1\x0013KfÜ6\x000b'«@öwÔ	*è-Áå)ñ\x0005ÓÅJ÷cãá\x000cvÙC\x001aF\x001d/xÄÔ¾âöëj*ß\x0011a\x0017FÍ¨¿ªµ0®\x0006\x0003Å\x0007Éî9z	tËRy0gkj\x0017~æÓÒ\x0000£X©\x0000¿X×\x0007PqÒð~Ä\x000f\x0004ä¨BÝÑubÏr¼RØ\x0000[¿\x0005y­Ô\x001fQy®t¸!ÄÐ<à\x000f*¿X9è`mà\x00039	lõ:¿ç8\x001b¶vQ@Âvs½òÐxW\x0008ËSÛ æ2¡2U{Ã¶)rºÍëìYQXKÖý0GAAûyH¿H .P×\x0001çâ§Üü¡¬%Ç³ö\x0000\\x000c%¡x<ÎÓ^°Èä¸õ°éÐÝ2þpÿ\x001dD\x0010o¹ÉaëàîIZ·ÐY¹,×</p><p>Æ!kYX§R#»ú®\x0014< ÃÁ¶\x001bmxÑhÞ§eÌ'Õ\x001bmgè.÷\x001dmÝ2N\x0006ÕÄKJtú\x0006ÔyCÎ6y² Å5é}m'UÉ-ª\x0013Ó)x\x0011y´Ö)Ù\x0003&\x001cësûÊ\x0006h ÆåÜ\x0016öí\x0003×\x0018duT\x0007^+¹T*½d-4Uhîk\x0002õðs4\x0013U6Ö|tÅË»5Ip)VI¾Ò\x0001âµEZå
}±Y´vµ>(0;cÀS\x0011ðgÒÚQmÎÝ\&HïÁhùR«ðó\x0007V«Õ´afP¨Õ(rI³&t(Uk¯¥\x0006tQg¼ÔÊ÷¼Û\x001bÍ¸SÇÞ¢w
:`ä¯"IÔÅsÆ\x001dóR¥ÿ\x0008	K+²q\x001cI\x0005Ðàºó\x0011øQQ°\x0005G'W7"?*ù´\x0000Ë\x001c9ß3X\\x0000ïÿrs\x0014¦\x0001	×U6°\x001b\x0010SÙ©Mì\x0002È\x0007bf\x0001ÁñCÃù&ï\x0011¯ñÂGÛ°ì5ü3®a×.¸\x0003i\x0001~>\x0001ï\x0006_Y¬"CP÷Ï¤±º\x0004+ÄÍo\x00143ûÜ2)cú[@Ü|ëø'7sÁ=\x0019ØËÅ´k5\x000eq 5-ëÖig¯%\x000fyëd\x0005Gì÷S\x0013.Vv¬\x00034\x0017Ýc\x000bZ3°BæOE\x0015³àjA?.øô\x0015w°UÁw®Wm\x001dÉÎ!ê-Áí\x0015ì\x0010$¬2G?</p><p>Ü ³R­¹Á÷\x000b+ãÛnº¨Ø\x001f\x000bãÈf\x0018Îí¡\x0011N5xÆ2tÄoA ¡µ' zøx\x0014Ç×Ðû-·hgáÈO=ÈgÓ[¹ÐóÞ\x001a6/ÖLïUe\x001c\x0015F\x0000,ET-Ë¢WDø¯s</p><p>-\x0003ÄùùÉùÉY\
PKþ6Mó«\x001d°_oð%6¿íç¦Ã¸ÛÏ³)\}Fr|þ<¹VczE	2\`\x00104\x001f¿ï</p><p>Ðá\x000eÈ@	\x0001·äfÞÜ	øª2\x0006NJ0æ0ã\x0003'\x001d_2tÉ%¯¶üWóÔ_f\x00164\x0015¶Í\x0014ê­L³ñqq"3\x0014#à\x001bôú'5IÛ(5~ïMº\x000eñk</p><p>+ÇS@\x0008)ö@ÓBf'Jdr\x0007gÚÛ1l¹]\x0002d¢1qqlx?Ý8\x0004
a\x0000=%©ônÀÕÆ_:=1u0,ªY9,\x0004^Ê\x000f\x0002Cö
ÞPex;ywMK­´ËËFT×,\x0007RE\x0019n*ü¹j¡îyÉ§meÐW\x0002dñpÍ\x0016­ ½BDÈ\x001bF÷CSäx \ÍRD\x0005Ýç\x001d21uÎR\x001d\x000eJ´ùú&\x0019pF¸@ÓvåÏã<CDÐCu¯\x0005z$ôå/ßÙ&Þ\x0002·¼À5\x001bù\x0010£\x000b\x0017³¼\x0008\x001fùÍÜ8^\x0013½e]¿Î5Úªùý3¯Cû-;®dÑ§¹ð</p><p>\x0018ã\x000e\x001a^ë»'\x0017¾á±ÇïyÙ.QùtíKp{Ò»Ob£ÍÒM¸Ao¶ðÆ8!dÓ¸\x001a\x0006.=¡·§À+ùN\x0014x¯zèBÙiJCò$X¬¼Oa\x0002^¤\x0003ÙWâ\x0000#wÌ¤Åp\x001eÖÛí/Ð7¹èe\x001d[\x0006ÙãxtêP\x001c}¶\x0015§dDwpMÔÈÞÌeµR\x0012\x000b\x0015;Ã(Oãà+âú\m¨iµZkt\x0017agâÍåÂ oì \x001f±¸üî%S]l\x0007\hvî9ÏÎ`	ÃQµï K¼wè¬¿ØDÏe\x0019H¹J9MßÁÉ\x0003ü=\x001fî0bz/ù\x0011
=5uIè.gÞñJÛÍ\x001cgbÙ¤nøi§·'=MÂjß4-Éc\x0019\x000cMO»\x0011B«+äJe:÷nøÿp%DÆOnã¾ë<W¢¶'
®5ÔÒ*Ï\x0003^RÚ/Â\Ää\x0008s3OÐ1\x000eá¢rðÜÁV»£³|$\x0007~
ôº£ï-\x0006$¬B¥\x0014ûª\x0015(\x001e\x0005Íé<--T{»î%iÖ²P\x0011û\x0011G¸\x0001³Ò>G\x0018´\x000b°þ9\x0000n³g+|ö\x0010®'h¨Gn8¯òÂí£OÑ;¬MXqG\x0018º*\x0010=ËÜ\x0006aîEä:ZÀÅàeR	0\x0016ÉÚá§´[úà\x00111nü	\x0005f_`f*XLx.ÄGn0ª¯Ê\x0000\x000eV¤ÉX»C¢LH\x001cn*JaloBSC0Hµ
ô{Ò~­ZêZ£mí^§¢V$föÅæ\x0001		©Ù\x0007Kîò\x0012iÕºÛô\x0008Ô óÉöâ£Ýób=M§µû£\x00162PµfÏuâÙ\x000b\x0011\x0012Úeo^ÛVÐHQÍ¢×kÓ\x0015¤¢²F\x001aî2\x001düXÜ\x0000S\x0008í+N°Â""ñÇÈ×\x0003ðëñ6|\x000e[«¢\x0007?×¹ SgòÅüb\x0019Ê\x0007~ë½6«\x0005E÷8Zï&UÚp\x0016)Qîé5ªÍÖ1ÄÕå\G¯¤FU1C9ö¯:<8¼¾¸¡'n}Ë={×yÇû0Ó¢Í¡9\x0004Õ£¿ ×rgÃ }SÉúFZoä\x0013» ÛM8\x001d²¾¡¬ÜO\x0008;aÑ*:OÎcÎ§L\^o'ç"\x0002¦0\x001c)ÙÂé³åÔ~ð3þ×9¨ý)¨½SÖ</p><p>n0±b^]ÈÍ»Ìäæ
û¢·¬\x0019Û\x000eõ\\x001eS</p><p>\x0012/?þÞÛÒð\x000cÙ°Mõ"«;³</p><p>\x0018~!z÷r¥	g»ÖTªÝM\x0004\x000bemüzm$Éí*\x0000ÃîZ\x001c¸%ç[Þ-,·\x0015ÁF6èÊÑ_ô\x0015
\x001bFû´\x001b\x000cqcøkv}ey¥à\x0018õå\x0017Ïq9Iz\x001a[\x000cIWOdÂ¢9Ýsåv*rx\x001dº<#5õmòZM­Jfë_Véhé\x0015Ê½4è«}JóX!±¤vë\x001c÷S\x001bf
/±LE\x001cº0´³\x001b\x001f(Fë4\x001cúséÀ°ÓA\x0000Ô|²¾ê¢ ïT\x0000~ÚÌDíÔÊí~£d\x0010"Ï\¼[oìë\Æ\x0004\x0007³\x0005\x0013Èûò`W]è¢\x0006â7­\x0011L@I÷\x0010¶\x0015'¤uÌ§]"´/ÚlálA©à× U÷L­ãG\x0014\x0007£Ô9»¶t\x0015©\x000b7µÌXH#PÇn¾Ñºbr#f'Þcöé@\x0006­â*WßÑðê(hO®e\x0004\x0008þã-«\x0013N½1Åh)ò?ÙQ\x0001¸ì¤8\x0012.­*ì <¬Lþø½\x0000çYZÍæï¥\x0008¨ß\x001b¢S\x0001#.Ê\;ôÀ\x0013²0 jRQSÎOè4Ì\x00158&.«Á\x0013jh~;\x001a\x0007w\x0011\x0005~!½;mÅ¾XHñ</p><p>·{á¾\x0008\x0016üó¯¹è>4&a\x000bM ¾îi\x001d* ïd\x001ep\x0000Tç\x0015Bø1&uQhË½$4PÔ\x000f<|å\x0017#¾M,\x000eK\x0006×^H\x0002Zâxß®_£\x0006­ZhZb¥RÀLì>2ævw\x0017`ÀåEùNë\x001cÖn¤õ^êB3;\x0018Ïÿ¬NP)ÊpIVÉ´ÖÈ!²;»!ùhL\x001c9àê\x000b\x001bæ¾ÀÔÊSën\x0005#Jq7\|Ï[XÄ\x001c9z\x0017G¼D¯\x0008i/ä\x0007Ëpo\x0013Úxð\x000e½\x001c\x0013¡.Î².øêõí¯ý¿ÿ\x0001\x0003Oã8endstream</p><p>endobj</p><p>16 0 obj</p><p>7509</p><p>endobj</p><p>19 0 obj</p><p><</Length 20 0 R/Filter /FlateDecode>></p><p>stream</p><p>xµ]Ý$·qÇe;ÝÊØÓ­t^IçÄëØg\x000co«ùÑ$\x001bv\x0002;@"@ð}³òä \x0001\x000cHýÿ?ìf¿"3³³\x000e\x0002æºÙÅb±ªX_¬ûëý<)}?§?ôãÏß]Ï÷_Çÿÿÿú¯×a2é¿í\x0005þþów÷ÿùxýÕ\x001fÕ|\x001f?{ü¿ëyZ×Õªí¥º_õ4Û{¿ÎS\x0008÷ß]ÿéð\x001fÇ\x0007;\x0005¿¬úðÏÇ\x0007=­nÕáp®Z\x001b{x~LÍ\x001cÖÃ³ãmÄG\x001dnê\x000f~Ò.¸ý½JïÝá\x0005¾`½ññ«×G5Õ\x0006\x001fçòÓlÓ\x0008©*º:.Ó\x001cÌâ\x000f\x001fÅ\x000eó¼\x001d</p><p>~p\x000c5Ê®R:> \x0016o­Æ¡e\x0002þÁ:OKQgF«<tYW\x001cúéQOn¶q(¼ß±Ò^\x001d~p|X&mÖUá\x0002¿ýÛñaÕ6\x0012ö¦]W°@\x0005\x0017p²¼0£ÖÃÝ¶1
Ü;Øyäbs\x0000\x001aw8Éÿ<~s­Ý2ÅÙ#\x000b=þoäÏãôj\x0002#È?¥9¼^\x0017\x000b\x000b®¿d*1\x000c^\x000e~ÇAëd\x001b\x0000«©o\x000byàý\x0010ðþi½óìä	\x0011ó%,ø\x001eè!îe0»ÃÇñ{ãTdë\x0013~Î:\x001bD^(ä·«Ò\x0016\x000cØw5ò«*ÄÉ\x000b¸£¯\x001b
´vÓì]Ú¤\x00073Ï÷þþ!rvß*àã	üjíXæ½©O,©qèªJGmP|{2>b:02¯ó\x0003±|~T	\x001dÆ£2T`t\x0000xOXC\x001cpÕRi\x0000p÷m_\x000c×Äu0P g\VÞu\x0013y'çÂ0¹\x001fY½Ì«{°\x0002{pV¤÷/ÊüL¯x3¬aö(BãÃM¸í2©°p£ä\x0001Ó1'\x0014¾+§´nÙ\x0006ì+óveò\x0002ûQOº\\x0010ò\x001bQkTycRAäÉEÛ­,#}{à0m=r`U\x000c\x0018×Ó\x0004)¸ï·¿E
tQâ\x001a¡£ZÚ×u04S$¬Kæe7+ø+\x0017â\x0012T.\x0019¬s¨\x0004> ÕA³HZ;y·1ºN*/8¤v\x001d÷¦À.Ò\x000f\x0010Dekg\x000b\x0001r</p><p>ÒÉZQç7È-`ÝÜTë\x0001Þ³c¤pSµ\x000e@O\x0001T\x0004@É6S¿ü%Ë°r\x0006çu¼`¬Hß\x0005Ûg@<ß\x0018U'C(¨ÃOJÝ1°'Øw·\x0017"öª¨\x0014xgD­+ñ¨\x0005tAaÀÒ\x001e"\x001c3~`-:(7n¾ÌüÝxA\x0005È}ú.î\x001a·±@+\x0015>¼@-Ñ¼ o{>dpÊÛÛ¢\x0002`C®ÜVÎæ²¾\x0011ËÓi¨VÔ\x0015h0©Ï\x001bR\x000f\x0002\x000e&\x0005¬\x001eó¥ø³*×j#YLÆ;\x001aO((W­Ì$ù
J\x0007·;(
ú)QzÿUd¢(RaE=Á¢,s©Ú,\x0005 Â1~W1\x0004°wEÈ&\x000cv¸\x0010ßG¼ç´\x001fÊè\x0008\x000b¸4\x0002C0S6?o¢ZÖ\x0001ë¡ÜÐ³üÞ?¤¿\x0007\x0012~\x0018*\x001aÏ-º²J§·Òa\x000cs6?P
È\x000ed\x0015ý\x000cÀ\x0006y-WJG=MÅ@\x0011Ö\x0000ê·Ñ\x0006Zçe÷/ãìæx\x000e¿(²Yù~§\x0007}¶¹\x0006*Þ\x0002Ô¤·UÜv£B+Òy{P¤ñîó\x00029\x0015\x001c'"ÛóÈ¬h9I=ýn[£Íá\x0015ÀO~ZÉ¬òÑ=:1÷ìø5þ¼NCõ@âP¨ÐË:\x0001¦\x0005¥Ã
\x00112KAø\x0004sºÁ\x000cxÑ\w5úPmev1³A`úæ0q´-ñãÃoâ\x0007V\x0000\x0008\x0019Ä>Kt4\x0013"\x0006%\x0002üÎ$ZÜ\x0015tvó¦{%½¿\x0015Õ\x0011}Â°\x0012m*È1ÒUÑå÷f\x0018ùðý\x0000 \x0005CÐXM¼&ã\x000bO;n'ÄòPÉH0T\¹ÑG &\x0000m\x0006é}ÓQM\u´¯&;\x0005\x0013¡±:pxÍá34qv[;>ÍgÒ¢[.X·¡È"JYÍÄ?ä#aRÈ«3ç³hÓû6Øèã\x0006\x001e\x0004¾xn Vý[güôñ\x0010Â\x0001ÕË÷°±\x0005Â¿ÜihÃ\x0016\x001bEæR\x0016÷\x0013½ïÓX\x001fyc\x001cL©q=ªà&o\x001d)w\x000e¼\x00112\x0003åW\x001f3OH¶¹ëÂ²lÀW£(#½¯¹\x0015\x00173\x0012ºB89</p><p>#i\x001a±bN\x0010Í¿DR9É	90@vU«7Áíí+eÀ\x0010iBWéQå{ø\x0002BC¿"s\x0007jÌÎ9ô+ªzéõ2Ó>Iý¥cÍ{qÕ"aþÌ\x0000<U!\uj?É-hºJÏDT&P\x0005A,«:\x001d´`A´j\x0004@ÈaQ²¾¢ÆL\x000c\x0016ÖÎøQ¬¼ÊÅ]\x001e|[$øß¾l½×]øNK?SP{X!q%"\x00071\x0006êo4Ù?_vGN\x0017¾U ÿB^»¬6F\x0001À~§\Äõúç\x0019BR\x0006\x0006ü$ºÔ`½bã>HÓ\x000eÂÆàÑÜ"!?fc¦erô\x0016ü\x001dÐ£°ÄÎ\x0008LGU\x000fM04Q\x0011ü6û"\x0016\x001d\x0014P9 ªz¹+0YG°&:oK£4þ.û{\x001apcõý§G\x0015wÉ7è\x0005w³ep\x0012¼Hsº¯Oð)ñèýnÓ7æò\x001c³lYT±p/\x000b+nJÃ»D\x000eR\x001a Up\x001eÎV\x0016\x0003c7Ì\x0000ê)*\x0007û\x0010"\x001db\x001d´Ø.£¿-öUÅ\x0005\x0000\x000c³²0æ1Q-¯è[.å+»öÛÇì\x001aÃ\x0004SDÌ\x000b5ê o1ªA<²ª\x0006 È')\x001c\x0018i Øæ'Ð>RÊ*\x000cÄ\x0017¹VGï\x001fþúë¯þ\x0018rµE\x001eöûëÇ_¦@©¬õ~s ÌäÖ¸ÕqfJ@UióJL2\x0001\x0010Õ N¹)wø¢~8ÆNQ_Øý`1Ó¢\x0013eðù&\x0001Q¦MÌMQ¦Góiú©Ã²²tëË:\x0000`ñ~@EÛgV\x0008j_Âæ\x0005nßàgî~¼ÆÌï»M¢\x0006Võ«\x000fêW/ëÏ¸Âe²Îº\x0005\x0018\x001bgy5\x001e§ºKÑÚ\x001aµ4éÇ\x0002NDßÁÿè¨ÒØ=|]¿ºMD5vÖKú²dHTÍ\x0000õ°QßGöZm[\x0015%"Ø=ñL\x000b\x0000?\x0002\x0010ØwM­n°·G\x0003cp×âÏ:öyAóUÜ£x µMÅS\x0014\x001d¼ñ&Jÿ¿´Û©ÃåÀÐÁ\x001a\x0002Xý´\x0018×Æ47Þ
.CÐÇ\x0003\x001f\x0018âMy_\x0005ñ5È\x001cÈY^Ø¼¬L"\x0002 q\x0000 |^\x0005JøÈæÍO¢\x0007èmÌ¡£æ\x000eÿºéE?[\x000b@#¸Éú\x0014"üñÎpÊ2áY ÖõhÃà#@µ*\x0004°>A;ÝÑroÝBT	ò\x0008\x0002ùñ\x001c` ×\x0007²ª \x001aE¨Töà$Ò÷ \x0003ÏâÆ­ÖX¦*"/Òaâ<J\x0003\x0000|Î$\x0016z¿ÑÒZå\x0001úÀ #aÒj1\x0008\x0014È\x0000?¯RÑºÅÏGê¥âý:k_¶)?!\×Ã¿\x001dµó© Ñ\x0013j\x000eÕ\x0012\x000f¾u§ì~^>D¦G¬í\x000eÒ\x0007\x0013§ÐóÊD÷\x0017	±è\x001e¨õd2@³\x000c\x0003«±\x0002ø%}+»Ëbô[È;
ð[ï\x0010ê\x001ez¦&6YÅ\x0002\x0001]_}z\x001f\x0005\x0000`s\x0013\x001f¥Ç|KÁyÿÖb\x0018Ù¥§MJ\x0002\x001føâ2Ë%\x0006à\x000c\x0008@èÈg\x001c,C9µD\x001b\x0000[!õ!®I0iÅ\x0004ìøwÕ%/ \x0013yTá\x0000Icò½ä\x0018Buà!,cðªì\x0016\x0004\x0000ïJN¢MMFÇXócüçI\x0017D\x00030s?®?	£\x000f_GÓ¢\x0014>¼ \x0018@CÁñï(©LTKúNÖ2\x000b¡}YIAF¬&Ð!PV 
\x000c\x0002ðìþ÷\x0001ål\x0017Pn²
µ</p><p>INç\x000fBö£Ê\x0002¹äNp1üLéI¿B½Àà!)a¨\x0008äòCîu\x0013ªr^D\x0017t²\x0018©ØÔ\x0010\x001dx´\x0017D>å-9®\x0000Í1f\x0002>"\x001eæúÕÖ\x0005 èè\x0013YþË¢ júòd¢Ò¯£D%\x0019ðû \x000f%X£j%J\x0002\x0003\x0004Aß\x0007Lð\x000bÕ\x0015ÛÑÿßË¶ÉØJ\x0010 Éõ\x0004]|7\x0005^\x001dÍ\x0006\x0019Åó3³uv!õ%3(À\x001aÇ;ó\x0000`¿sy\x0002</p><p>Í¶Ñ¬¼SÈt¾Ù`Ì\x0014V,V¢J¹¬§Os>\x001fçûûâ</p><p>0JòÁwØ¼²Ëi]9»qö</p><p>I/Ö}"f\x0010Æ`óÊå«=ö6³ò	!m×³\x0000B _ (\x0002~Júi¨FÃd&9[\x000bÑ\x0017¶ÕO;\x0013\x0010¿:YçªBl*Ý^Ã¿÷Ò7¼Ü´M\x0014VaT&Vcq\x0003T½\x0013Ö­I\x0008Z¦kaãDF¿ OP¿\x0014ëîÁ¬\x001d\x0015\x0000n\x0000\s\x0019¦o$=Ó6e=\x0001î\x001cßKú¼¤*/\x0008ú¿\x0007§%mo5÷J\x001eê­\x000b¢ôÕÙ\x001c\x000fØ¦ôÍÐÂ"jw¼U\x0010 ø0«ð¶c\x0012ë1gò\x0011	v°­ïH#d'÷½¯Jô.]^Ôôb\x0017\x0005p)\x0013©ò!¹£vvr\x0003ÌÂ\x0002\x0017ô^ÎäòAS\x0004¢Ö2÷%.{eÝ@´RNûæ~&\x0016A\x0011ü®ô/ð<'îvX\x0016E#ATsH¬ª\x0004Ãu`3p\x0005ýêÁ@áR</p><p>Þ½¤ÊJ=-sñ]ÊaØ]¼Jõ{JêAE/Ù9Y(
6ÿ×q¡t!\x0008þIj¿º^*ÀCJ'ÁÉ«\x001bseß¶9\x001fè0\x0002'\x0001­JÙQ\x0015\x000eNnÎ\x0017ôº2\x0010\x0008ÝAåS\x0003\x0015~ÂÉÌ¯\x0018"»\x0006ÑÁÓa\x0018Íu.×>\x0004 ÓjlSáJlèmaÃzC\x0004­3\x001eÎëqË.ãº[	Cn6;H\x0012×,O'\x0003\x0016ÿ¾|³5µE{\x000cV\x0001'ìçÂSî°lÌæ=þìªµe\x0017ÿ¨,¤£IùQ?wg÷¢z%ÿ²<ï,m,¸Yí%çC<k¤â¶ix2RªéRUÅº9Ùñ\x0014»\x0001Üô|lÄ{ð¼\x0012ç-ûLÐx]"Âwu·±D3¶)J,e\x001dÜ&CÍ³_ð£¡ó\x000b\x0012±WÉÄÈ\x001aÙ&\x0010j*N^Ü\x001f»¬*¦3ÝE7á­\x0004È\x0007Ù­(\x0015ékØhÄY5/Ý°\x0003Ds×ªi\x0015p#ëC\x0001 +©\x0014v<ñ"}ÿWùLº{´êª\x000f5¿Þ\x0017±Ö§æ|l\x001c ,7Õ[oÍî\x001fIÌ¶\x0019\x001aòUa\¹ ¼ÆIÓÉÍ.Xò;M>x\x001cÈð><&AÝîf¤Ó\x0001çûûY\x0007|{ÈÚaMÅCÂ
 9ý(v<\x0001°Ã\x00009
xÂÅ\x001fúDVY\x0017\x001dò´¥øÙ\x000cÔØ(>>tÎw.\x0004Q­fÄ	àV\x0012°È\x0016î}\x0006\x0005õr\x001aý´[Ù\x0015É·µ¯bñf_ûºÇ\x0003LºM´<ÉmÌ=¤\x001b+´5ßÙNÅ\x0000äºôâG~gþj/\x000e¶ onµóï&\x0012EVû\x001b\x0019&Î)_àkr¸\x001bvN&ú\x0013\x001cø\x001cô^Uo èMðÅ¤\x0010:\x00014ð\x0012\x0003àÌ\x0003¸/Ìñ^\x000b\x000fdyf)PBá4tÞÜ\x0005ìÜ3ìâ³£V}5¡jLó¶}\x001er¥iÚ'´·I Å0tÝúQû\x001f5Ú{¹ù*Lç·&\x001d\x0002û,VÃïG\x0005ëÌ\x0010¾\x0012KaàýPÙÓgò5\x00179Î\x000c\x000fR\x0014ru}·Ú´r.FÒ
ÛvYÛ\x0018Ò\x001f±Pn³\x0017ïã+Mb-\x0003\x0018ÜÃ\x0016Zy\x0015ò9ÏÊ<hèE\x0007±à8\x0003QìÞË÷Åjò\x0004\x0017¸]RÙÌØ¡Ép«Å×fÎl¼õàÓÓÈt<e6qæ*A]dK\x0000^ÖÖ®Q×¹Ëee&ù¹\x0001Ía³T\x0000\x0017¤´\x000b6¤\x000b¿B\x001c¿+³jòæ{·²FròåqÉÅ\x000c\x0013TcswÀ%m\x0008\x0004m$\x001b\x001bõ(ì\x000b\x0017NókMV\x001ebbêm®µ[ªc¥²SRJ\x001dF¹*nÚÖ´ÜÛ¬ÇKN+½h<«S}\x0007\x0006u;\x0014\x0006\x001cÞg¦¹*5ÄÛB\x0018éÄÂ¹ÿNO/A§Fh\x00026Á\x0004\x001esÜ00.\x00134
\x0015ëCm9\x0003µÉ 9\x0011Qí\x0018Á{å\x001d%û\x0014è\x000c7òkNê%hé`óN¢L
«ý 6Ñ_em®K%ÃmfnK§÷]Û&¨(æqÏÖ#5«À£oª"¢	~5`~_ôW¥n×é\x0005}\x000fªö§\x001a'åÖ¤hÊ¸Û\x00177£Æ±ÿFx;l¸Ñ_.\x0013k\x0005È`íûó\x0001CI.°«õ½¬ö i\x0006À*c&\x0000]R«¨Aæ¥ËP¦Kq ©{ôIG¸£r\x0017(¦£Fa&OÒÜÏä\x0006\x000c\x001fà\x0019 \x0016\x001ff!û.¤\x0000á6Å'½\x0017â\x0008)´Þ\x0018,m^\x000b?åbÑ\x000b\x001cw?û+æÀ~Ãrß\x0013=d\x000f#»3zêÀt¹q@1\x0003\x0019ÿÙÔôNæKS\x0017²ZíÙ1éË`·9Î\x0006[\x0008*ó&Òº¤^Î§XÌY\x000f\x0006ôÂä®ö¥Aa¦ï^\x001fS&xBåD\x0007\x0011\x0011.ñª\x001að*Äë¼ó6ì,½Â%öqÏÚÔ¬ïWîQ+Ï</p><p>ó6ÛE#°ýKå^B"Ô\x000f¥\x0008*N*\x00058\x0011~Wðrº/Ã=Á¬zæ\x0003¥ºÙ'</p><p>Æ\x0005åíb\x0003zÔï¶F|c¥;Br]X×:ê©(UÈ\x0017{¸ÁMsÉ\x001e\x0004\x000c\x0010: /á¢øæ°ô@ßIÞ×°YChK</p><p>PÅ3X,\x001e¬R\x0006kÒ0+½¹Z\x0019Á,Q\x0012êtT%»5;ã\Ò#1·\x0008«y¯÷Õ\x001bJ}¯3ÕúAB_Ñwöi$\x001e\x0017ã±\x0016kÜÅåº\x0018IÍÒÒ@L\x0017b=\x001dowH1Ð
\x0016¹o·ªýw\x0008XHMÙ\x0008íÔ3â\x00086±èÅ?ÃÛ9²¿võÄý±\x0008ïÐlL&\x0002K\ÜÜ%½[\\\x0014iÀÛNpºÎ°ÂæÉ.Ì\x0005)Ú\x001azí\x000c:</p><p>½ÒM¤vé_Tªª\x0007/*zõ\x001dÔÅ{Ïj%¦Ô\x0008áÍ?Þ¾¸í6¾oÐèÞ>Ý¤öh°P±Ëó­\x0014eÅXBÓm(¹¡ò?Çp®¶]ë\x0016òS2\x001b£\x001f[H\x0000ÿ>ÎY£A\x0003K+ÚïjÕãÑ	Óº\x001a¡áÙÙF\x0016¡ ÷UwÊiw4U`@½¤\x0003N®\xµ\x0019ú.\x0018\x0018^¡¡ðóá³-è/¿j!f\ÑÖeÀ-9Vm\x001agç\x000cT&ýµ\x000f^\x0005=Lö×\x0007ZNª-Ì\x001dÔ°^¶Â?Âª¤â</p><p>ñýè®\x0012\x0006yUGHÄ\x001by\x0017\x0006IOaU\x0002¶Ü\x001cL¼.+¦\x0002áÄÍµq´ïÒVTÔ*GÖtdöioütîçÞ²£ô­ò>\x001ehåºÒOÓF.kØ\x001aQR7¾m;ül#+ûy*lQÚC§#hKÂÚ§@ÀÔLK<Êý°ÁÉ\x0003u@éú\x0005!|Gv;-£¹\x0001q\x0016$l4´Mî¾Â\x0005_\x0008óAû!ø	n0rk\x0016 ÁhÔX</p><p>¾ú<B
©ZëÔ,G¾FýÏv¥*_¿^T%X;x
ZÏ¼c\x000b\x001fÀ@b\x001dhÜCóÓDûKÃ\x001a«T\x001aÝÉÖ=^ÿ!þù;à÷:Èendstream</p><p>endobj</p><p>20 0 obj</p><p>5478</p><p>endobj</p><p>4 0 obj</p><p><</Type/Page/MediaBox [0 0 595 842]</p><p>/Rotate 0/Parent 3 0 R</p><p>/Resources<</ProcSet[/PDF /Text]</p><p>/Font 13 0 R</p><p>>></p><p>/Contents 5 0 R</p><p>>></p><p>endobj</p><p>14 0 obj</p><p><</Type/Page/MediaBox [0 0 595 842]</p><p>/Rotate 0/Parent 3 0 R</p><p>/Resources<</ProcSet[/PDF /Text]</p><p>/Font 17 0 R</p><p>>></p><p>/Contents 15 0 R</p><p>>></p><p>endobj</p><p>18 0 obj</p><p><</Type/Page/MediaBox [0 0 595 842]</p><p>/Rotate 0/Parent 3 0 R</p><p>/Resources<</ProcSet[/PDF /Text]</p><p>/Font 21 0 R</p><p>>></p><p>/Contents 19 0 R</p><p>>></p><p>endobj</p><p>3 0 obj</p><p><< /Type /Pages /Kids [</p><p>4 0 R</p><p>14 0 R</p><p>18 0 R</p><p>] /Count 3</p><p>/Rotate 0>></p><p>endobj</p><p>1 0 obj</p><p><</Type /Catalog /Pages 3 0 R</p><p>>></p><p>endobj</p><p>13 0 obj</p><p><</R8</p><p>8 0 R/R10</p><p>10 0 R/R12</p><p>12 0 R>></p><p>endobj</p><p>17 0 obj</p><p><</R8</p><p>8 0 R/R10</p><p>10 0 R>></p><p>endobj</p><p>21 0 obj</p><p><</R8</p><p>8 0 R/R10</p><p>10 0 R>></p><p>endobj</p><p>25 0 obj</p><p><</Filter/FlateDecode/Length 372>>stream</p><p>x]ÒAn@\x000c\x0005Ð=§à\x0006±\x001d2$R4tE«Jí\x0005`0\x0015\x0010DEo_»é¢\x001fñÅ@ü7§óËyîõæ}½\x000f½×ã4\x000f«Þ®µhÝë×4W,õ0ûoóßréjszíÏïEk; cÅq¢\\x0007½-]Ñµ¿´:\x0012åã8æJçáß­m'úñys²UÉ\x0011j</p><p>ê6G(íP\x001b»ÜyUÔd-jëw÷9BQ\x000f9B©AírÒ\x0001µÏ\x0011j·¨%G¨õ1\x001c¡ÖÕ\x001c¡PÇ\x001c¡V¬²i\x0011"mQMÃ.J °i\x0010!Æÿ²iØE
d\x0013!DÛ\x000eÕpì@õÃ\x0006Dv\x0000²YÙ½	3³YÙ½í\x001eÕ¬\x001c^\x001fÃ¬\x001c^\x001fÒ¬ìÞ4 Ý«ð²YÙ½É_eV\x000e¯OeVv¯@d\x001fÊCÔõ¨f\x0015÷ö^aõ/(øFbV	/^%f\x0015÷</p><p>Æ\x0010³{w\x0018CÌ*îm\x0006ßç`°X¿·î¢uy¬«Îw_R_J¬ã4ëß\x001e/×\x0005OÕê\x0007ùzÀ%</p><p>endstream</p><p>endobj</p><p>8 0 obj</p><p><</BaseFont/GBGOAU+Calibri/FontDescriptor 7 0 R/ToUnicode 25 0 R/Type/Font</p><p>/FirstChar 1/LastChar 38/Widths[ 226 423 503 537 538 537 473 494 537 246 399 537 347 316 355</p><p>418 246 258 606 276 503 653 418 459 474 537 813 494 537 255 258</p><p>539 539 267 331 306 532 874]</p><p>/Encoding 26 0 R/Subtype/TrueType>></p><p>endobj</p><p>26 0 obj</p><p><</Type/Encoding/BaseEncoding/WinAnsiEncoding/Differences[</p><p>1/g3/g62/g286/g374/g381/g437/g448/g258/g282/g349/g400/g393/g410/g296/g396/g277/g367/g859/g4/g855/g288/g104/g272/g454/g336/g271/g373/g259/g346/g361/g853/g872/g873/g856/g58/g882/g87/g68]>></p><p>endobj</p><p>27 0 obj</p><p><</Filter/FlateDecode/Length 575>>stream</p><p>x]Ô=nÜ0\x0010\x0005à^§Ð
3¤D\x001bX°±\x001b\x00171\x0002$\x0017ÐJ±µ¼.r{¿÷\x0018§Hñ\x000cø#~
OO/Ï/ÛõÞ~\x001e·ùW½÷ëu[úqû<æÚ_êÛuëÌûå:ßÿVú;¿O{wzú1í¿ÿìµÇºvÖfÌ·¥~ìÓ\i{«Ý9r^×ÒÕmùo(¶â²~OµÒ\x0012<\x0014^ZB2±´¬ÑTZBvCi	ãÊr,-!G\x0019ÿ|ÐhbùXZÂ8³âÁ\x001eY^JK\x0018õÝ¹´¬µKi	£&×Ò\x0012ÆÊr--Á¹³\x0001Ï`ta		GÀy`	5à\x0003KàLÀ\x0004\x0003Î\x0004¬\x001a\x0005Î\x0004\x001cµ\x0015\x000cFy*ÕWa5y4X\x0019\¬\x000e	«5/oÒ`5ykf	«É\x001b5</p><p>«É\x001bufXMÞÈ¦ o</p><p>¶âZÕå­\x001aÕå\x00149¬.oÔdX]ÞÈkwX]ÞHÃê­¡\x001aÕå\x001d´3¬.oâm8¬.oæm8{K¯
ú.¬.ï@\x0011\x001a¥`-{ä°º¼ib	«Ëë\x001a5</p><p>¸\x0015Nªàümà\x0014ü.</p><p>>¤ÉÀE\x0012E\x0011(ÑªÉÐDF~\x0017h\x0005ù{Æ~ç¨¹Öâø±\x0011ØãG\x0011¢ÖâøQª\x0012Ç"$v? e^{&I4]XB$º¨&µÿ¼+ \x0015\x000fÎ{N\x0010%µlP	\\x0012pàm \x0015</p><p>¡µÀ%\x0001gÆ\x001d(ØYÇ\x00000©e«ÖÂÚOtÐÛñýHð\x0019áëÃÇçuz¯ýüy\x001cu»ëÒÄÇèºÕ¯Ø~Û¹ªGº/Q.</p><p>endstream</p><p>endobj</p><p>10 0 obj</p><p><</BaseFont/LGAZPG+Calibri/FontDescriptor 9 0 R/ToUnicode 27 0 R/Type/Font</p><p>/FirstChar 1/LastChar 74/Widths[ 226 579 525 349 527 391 525 498 229 250 479 335 229 525 250</p><p>799 452 525 433 423 498 305 498 525 252 420 525 423 507 507 507</p><p>471 479 507 507 507 507 525 517 459 453 850 543 855 319 306 533</p><p>615 507 507 459 623 252 525 239 662 303 303 642 268 498 646 715</p><p>512 512 544 690 567 487 479 715 631 527 488]</p><p>/Encoding 28 0 R/Subtype/TrueType>></p><p>endobj</p><p>28 0 obj</p><p><</Type/Encoding/BaseEncoding/WinAnsiEncoding/Differences[</p><p>1/g3/g4/g393/g396/g381/g400/g282/g286/g367/g859/g258/g410/g349/g374/g853/g373/g448/g437/g454/g272/g287/g296/g288/g346/g856/g62/g271/g277/g1006/g1009/g1004/g336/g259/g1007/g1011/g1005/g1012/g395/g87/g38/g455/g392/g90/g68/g58/g882/g18/g24/g1008/g1013/g94/g44/g47/g438/g361/g75/g894/g895/g104/g855/g289/g69/g449/g872/g873/g17/g857/g115/g100/g261/g1081/g39/g384/g28]>></p><p>endobj</p><p>12 0 obj</p><p><</BaseFont/KPSHBO+TimesNewRoman/FontDescriptor 11 0 R/Type/Font</p><p>/FirstChar 1/LastChar 1/Widths[ 250]</p><p>/Encoding 29 0 R/Subtype/TrueType>></p><p>endobj</p><p>29 0 obj</p><p><</Type/Encoding/BaseEncoding/WinAnsiEncoding/Differences[</p><p>1/space]>></p><p>endobj</p><p>7 0 obj</p><p><</Type/FontDescriptor/FontName/GBGOAU+Calibri/FontBBox[-18 -178 805 685]/Flags 4</p><p>/Ascent 683</p><p>/CapHeight 683</p><p>/Descent -178</p><p>/ItalicAngle 0</p><p>/StemV 120</p><p>/MissingWidth 506</p><p>/FontFile2 22 0 R>></p><p>endobj</p><p>22 0 obj</p><p><</Filter/FlateDecode</p><p>/Length1 25468/Length 10767>>stream</p><p>xí	`TÕ¹øÏ¹÷Î¾'³O&³OIf²/$$CHB\x0016Â&@ !  "\x0008D\x0016EÑÖ
E­¸Ô¶.µ.mÑ2\x0019Pà¨UÔZJëZµ´Uk*u©\x0015MòÿÎýfBX±õõ½ÿ{ÎïþîùÎrÏùÎ~'@(!DC6\x0011ÌÙ\x001e)"â'Æ.'õ-ï]þ\x000e5\\x000eö½Æ\x001dü[d>Ü¿Jä£SVºüÇïÖÝMô\x0005B\x0014é§±þ\x0014\x001f\x000eòùÒ%½ßüè:BúêAY¶\x0014\x0014GT5è\x000eß¿tùuÉçuB!=cE_/ú[\x0008ï]Þ»n¥pÏ\x0012¢Ò}fïò%Éò°ô¶+V¯A¯\µd¥á±Ü	ñ³	1y	ÝLÈÈVrôs\x0001¸\x001fmä^ò\x0000yüü|H¤\D\x001e& ï\x000fÈgP\x00195Ñ\x000cC¾±ÏÈw$ËHÑ#£ïülô\x001d°¡vf+ø,Bð¨f4mtèXÝÈÖÁç¤*¢\x0017Óê¹g@{\x000e\x001eáj´ù¹KØ½â°ìæí#·L(ÎJ²ôud=Ù@Î!\x001bÉyä|ò\x001dr1¹\J.\x0003[\x000f÷+È\x0016r%¹\M¾G®![Éµä:r=¹|ÜH~@~\x0008v¼ÜLnI1ÿÍà®\x0017CYÈmäNò3r7ð'ävr\x0007¹ü\x0014ü?\x0007ëßM~\x0001:Ô ÿ\x001eÐÜJ~\x000cÚ;AËb1Ývpq2@\x0012d\x0007Ù	mþo<Bî#÷\x0003wAkî&{Èä!hÇG e\x001f\x0013uLòyL¼>Nö'È>ò$y<
=ã\x0019ò,ÙO#ÏÿK!Oiï\x0005ò+ò"ôµ\x0003ä7ä ù-y¼B^'¿'o· ×½÷ðßA!ÎkÉXoB¬?w æ\x0010ÄÄx\x0018çU1ôm1\x0003ö
rÊÉÇ#Q¸c­w½ØB7íÈZµÎí¢Y{l\x0007?k¡»ÆÚæ\x001e°ñ=ÐÌÇîl_@Ü\x0001°`Ê~Ç·ÚsÉÖA{ï8Ì\x0016,dÒ\x0016O&[åóÐXÚgÄ°î±±\Z\x0014køqÖyu
ÿHþ$Z\x0006­¡G­Çb\x001c8ÌÊ,¶}\x000bÒ¢õYZ¦\x001f½\x000cþw`vx\x000f,Íø\x0017±%þBþ<vÿçdø\x0010ù+y|,^\x000f¿Á|ò!ù\x0008ü\x0007Íað}Q{¬æ\x0013pÿ #Ðáq¾ácBÉ\x0008´1¡r'#GïjE\x0011¨JaNS\x0005UR5ÕP-ÕQ=h&¨ÆB\x000c_\x0008Q\x001f'L!jÒh:5Â|i¡Vj§\x000e74º¨zÇÙÆBÜ\x0010â£~\x001aHÅ¶±´.a\x0019\x00177\x0016Ðµp
Ñ0À}!-¡¥´V&\x001füEà\x0004a\x0005"ë¢\x000b\x0017tÏ7·«3ÖÑ>gö¬3Ú¦·¶47Mkl¨Z7%Z[3¹ºjReEyYi$\x001d\x000cø}^ÕhÐë4*¥B.J\x0004£$¯Á×Øã\x0007{âBÐ×ÔÏü¾^PôSôÄÝ j\x0018'îî\x0011£¹'ÆBÌS\x0019ÅÑ±Tï®&Õùyî\x0006;¾¿Þç\x001e¤sgwÂýz_;>$Þ·÷BPôhÀãñ@</p><p>wui½;N{Ü
ñÆ³nnè©ü\x0006TÊ©¾©Kùyd@©[\x0015ÜÅ³}+\x0007hv
\x0015o¸ìI\x0003\x001ckØcã| ¡wq|ÖìÎzÇÓ%êÈT1¯¸tj\&æå^ÆÊL.w\x000fä=²ùA=YÔ\x0013R/ö-îß\x0019ç{!Ñf¾aóæKâP<ÇW\x001fÏÙpÈ</p><p>U^\x0012ÏóÕ7ÄC>È¬uÎØ\x0003h\\x0012ÐûÜ?&PxßÐ{\x00135½I4 ÿ°[VÅ13Axê@Ù P?åòÁ(Y\x0004ø¦ÙèwE\x0004FB]q®<</p><p>1ÅXÈ¦TÈXò\x001e5UCOò{öRk|Ó"w~\x001eX_ü\x0006à\x000báî8\x001fìYÔ·±wÉf_}=Ú­£3\x001e­ho²®
\x0003\x0005\x0011ßÛ\x0003XÆÌ0»3\x001eñ­\x001b}u\x0018\x0001\x0014nÖ\x0006ËÚ;Å$ÉdqãÔ8ééK¦G\x001aêY¹Ü
{ê±,/ßìÎ]¤xô\x0012·cG1)!]¬\x001cqóTh`ÃæÎÅ§Ä]=ÅÐ?Oqw:<ñh\x0017¯Ë×¹¤µO\x001fÏy\x0003\x001eç\x0011(¦º\x001d\x0013;\x0015Õ\\x0016»;9\x0007ßÅZ\x000b\x0014îF¸øêª!@\x000fÍ%zYÖU»;©¤¢ÁS1ØÝ|ÀÃ\x0007¦6± %ÚäðtyðóOäHI\x0012ËÇå¥\x0007ÅXð9_Z4Í</p><p>ãnXR?®\x00132$\x000bÌíøåä-\x000f\x0014rÖM© >\x0000#\x0017t\x001cd#ªX+ZÝq2ËÝé[âëòA\x001fÎêduc¶\x0016Û·µÝ×:{n§ØÚÉ^Ò1Áá\x0015è\x0013\x000f\x0004§<ÜTè!GªYEÿ4Ñ?æm:&¸9\x0015ìÞ,÷µ¶ofû\x0019\x00127 ¨´4ØÜ{yEZ	\x000cÍFÝ|½>·ÞÝ¸¹wptÓ¢Í\x0003Ñèæ
=K'±<|Í7ûÚ;«\x001dbYçtntl`J#­´µ£.?\x000fæº\x0001\x001f½tö@^Ú>·s\x0017ì[Ývt&8ÊMí©ë\x001aðCXç.7!QQË1-S2yXNsÀ#\x0017ã;vE	Ù$</p><p>¢Bô÷
R"êä)\x001d%}\x001cêô)\x001d\x0007:\x0001uQQÇ>ÐHÖ¥`bn\x001bÜYóÛµtsO\x0017\x001b\Ä\x000cM	_\x001a§¾\x001a\x0012ç|5\x0003ªãJßº¸ÊWÇôµL_z)ÓË cÀº\x0007ÆasÒæ\x001e\x001fÌSÐ¡:bWäYîÁÑÑNÏ~ÇP\x0007ºÚ|¹qE\x0008æ~I \x0005âMcÒ\x0003êiñM}½¬\x001cpbieæ¾.è¶©\x000c!Js\\x00019(9@F1
ë¨\x000fÚ\x0006\x001aPL¿	<ñM]ñ®\x0010{hç².±;ëã¤É7	\x001dó\x0004Ù"]Ó|EâØ¡ \x000c\Â ²öNÔ8À\x000b\x000fëB#ÉÔPò>\x001f\x0004õõ¸ÁÚ\x0002ék®s©Ò%0%</p><p>Á%¢(\x001dÉ@ÂªÅ\x0007T\x001ae\\x0011\x000cáËîUa6$%\x0001YW\x0017\x0016^ô]\x0000ÏÖÇUP¢à8S&\x0013u ¨\x0005¾@QYÔGY6³\x0007É\x001cß:YX¡Åd\x0010\x001c×\x0004{aòÇô*Ðø*RålP%óØZ\x0019«¹\x001aìÎ\x0007:\x0006Gïò­÷ûäçùØâÀ:&qìMº6\x001f«Ï\x000båçÉÕjDõæÍrÍñ\x0013 ½ä1@Wãà\x0008¡{ç|®\x001béU¼Ë4ã?üj¦\x0011za/½¾\x000c\x0006Dà\LÔ\x0019££Ð,t@Á\x000fr&2®Aî\x001fÌ\x0010àDf\x001eàï\x0011\x001faØèû\x0000ñ7ÄaÄû¿bÌ!Ä{¨ü\x000bâ]Ä;·\x0011Fü	ñGÄ¡D¦\x0002ð\x0007ô½x3áL\x0003¼pÚ\x0000¿O8#×\x0011¯!^E¼Q^FßKß!~8ø
â\x0000â×\x0017\x0011¿B¼x\x001eñ\x001c\x0016b?âYÄ3_âcÆO!DìC<Øx\x001cñ\x0018âQÄ#1Ï\x0010\x000f¢r\x000fb7â\x0001Ä.Ä â~Ä}{\x0011;\x0011;\x0010	Ä@"£\x0008\x0010GlOd\x0014\x0003~¸\x0007q7b\x001bâçBÀÏ\x0010?Åtw!îDÜ¸\x001dñ\x0013ÄmüÇ[\x0011· nFÜø\x0011fýCÄ\x000f0ùï#n@\¸\x000eÓ]Ø¸\x0006ñ=ÄÕ«\x0010WbÖ[0ù\x0015Ë\x0011\x0011!.Å\x0004 .F\ø.â;\x000b\x0013\x0012À\x0005Mó\x0011ç!6"ÎEØXXX8\x001bÑXXX8\x000b±\x0012±"a/\x0005X8\x0003q:â4Ä2ÄRÄ©S\x0010K\x0010\x0011}E^D\x000fb!b\x0001¢\x001b1\x001f1\x000f1\x0017Ñ°\x0003:\x0011'#NBÄ\x0010\x001dvÄ\x001cÄlÄ,ÄLÄ\x000cD\x001bb:¢\x0015ÑhF4!¦!\x001a\x0011
zÄTD\x001db</p><p>"¨EÔ &#ª\x0011UIÊµ\x0012P(G!J\x0011%bD\x0011¢\x0010Q Â|D\x001e"ÈEä ²\x0011Y "°T\x0001ü\x0008_ÂÂz²7a\x0004ð Òp!2\x0011ND\x0006Â°#l\x0008+Â0#Lø\x0004#>!\x001di\x0008\x0003BÐ!´\x0008
BP!\x0008\x0005æ)GÈP)EH\x0010\x0002Gp\x0008 "è(b\x00041ø\x001cñ\x0019â\x0008âSÄ?\x0010¥\x0017kD?FåG\x000f\x0011\x001f þ8x\x001fñWÄ\x0010â=Ä_\x0010ï"ÞA¼ø3>ïO	³\x000fðGÄ¡\x0019z\x0016ý\x0003â­¹\x0002ð&ây*à÷	s=àuÄkW\x0013æ\x0006À+	s#àeÄKßaÖ¿E\x001cÄÌ~\x001d@ü\x001añ"fö+L÷\x0002âyÄsýg\x0011Ï`º_bÖO#ÂÂ?ØÏ{"a®\x0003ìÅ\x0004ã\x001eÃR?=x\x0018ñ\x0010âAÄ\x001eÄnÄ\x0003õ.Ìz\x0010³¾\x001f³¾\x000fq/b'>h\x0007"\x0018ÀÇÆ\x0011Û\x0011¿À¬ïAÜØø9âg	\x0013L¸ô§	Ó\x0014À];\x0013¦6À\x001d	Ó\x000cÀí	ÓLÀO\x0012¦9Û\x0012¦(àÇ\x0018åVr\x000bF¹\x0019£Üa?Â?Dß\x000f0æïc\x001b\x0010×'L³\x0000×aòk\x0011[\x0011×`¾1¯ÆW!®Lf\x0003¶`Ì+\x0010#6'Ë\x0012Æ.À¥	ã|À%	c7àâ±\x0005pQÂ8\x000fð]\x000cû\x000eÆ¼\x0010£\\x0010Ý\x000e<¬kp½¯mr½¡áz\x000cäQG@\x001eVäJ\x000cÄA¶ü\x0002ä\x001e»A¶ü\x001cäg ?\x0005¹\x000bäN;@n\x0007ù	Èm ?\x0006¹\x0015ä\x0016K]?\x0000¹\x0011äû 7\\x000fr\x001dÈµ [A®\x0001ù\x001eÈÕ¥®«@®\x0004Ù\x0002r\x0005È =?ÎFßy4ÖÖ V'\x000c¬'­BXX8\x0013±\x001cq\x0006âtÄijDUBÏ0	Q¨@#Ê\x0010¥\x0012D1¢(¡cÝ²\x0010QHC\x0018\x0010z\x000e¡Eh\x0012Ð\x0006TP!\x0008\x0005B%4¬e¥ÑyÀ¿\x000c¼\x0007ò\x0017wAÞÖû=Èë ¯¼</p><p>ò</p><p>ÈË /A+ü\x000eä· \x000f<\x0008²\x0007d7È\x0003 7å¤dÞÞ0°\x001e¾\x001e³\x000e±\x0016q6¢\x001f1\x0015Qv"j\x00115ÉXe\x0013ÂHGmÇOhCLG´"Z\x0010Í&Ä4D#¢\x0001Qð"<X@7ÂÈD8\x0011\x0019\x0008\x0007Â°!¬X\x0007\x000bÂ\x001cý!p\x0018äsÏ@|</p><p>ø\x000fO@þ\x000eò1ÈG \x001fBË}\x0000ò7?ü	ä @þ\x0000ò\x0016ÈÐûA\x0005y\x0006ä O<\x0005ò$È>'@ö<\x000e2\x0008r?´ê} ÷ì\x0004Ù\x0001òC±7¢ÏE,K\x0018Â¥SÑ\x001e§  \x0016#ú\x0010\x0010½\x001eÄBÄ\x0002D7b>b\x001eb.¢\x000bÑ8\x0019q\x0012"è@D\x0010a´q>"\x000f\x0011Bä"r\x0010Ù,D\x0010\x0011ÀFñ#|\x0008	B@ð\x0008\x000eAq¸èmÀQ\x0011·Á¢\x0007A~\x0003r\x0000ä× /ü</p><p>ä\x0005çA\x0003\x000bï\x0002¹\x000f¸¾Ë]ß¡a×Mb\x0017lÛ\x0014;¿icì¼m\x001bcªU\x001b[7òª\x000eÀ9\x001b·m|e£ôÜ¦
±s¶m	\x001b\x001b8åú¦µ±uÛÖÆTk©úì¦þXGÿ¡þúycGÿâþ5ý×ö\x001f\x0000ìöþý{ûùÁÑG¢iý\x0015Uú¯îç\x0010Î~ªcjO¿JÛ¸¦iUlõ¶U1aUÉ*®êÐ*úÂ*Ê¹WÑèªY«8µc?»Å\x001e]e¶7UîU\x0005«ø³VÄVn[\x0011;³iyìùåôt¨ÊiP¥eáScK·\x001a;%¼8¶dÛâX_xQ¬7Ü\x0013[\x0018î-ØÖ\x001d\x001f\x001b·mn¬+Ü\x0019;\x0019â\x0014îÅ¶uÄÚÃ³cs¶ÍÍ\x000cÏÍ\x0000}[¸56}[k¬%Ü\x0014kÞÖ\x0014ÕD§\x001bc
|¸(ÉïÊÌM3\x0005Us¥[é|ÃyØÉ¯Ì8Áï :ûùö«ì¼\x000e.\x001c^l.ÛU¶[lÛm\x0012xÃ«W¦mJãV\x001a6\x0019¸\x0002CÔðá
@\x000c·\x001a8ÝUº[tÛuüLÝBÝûºQ°]G·k\x001fÖ>¯öð3µ\x000bµ+´¼NË4¼>ª
\x00176ê4.MDÃWG4µ\x001aþ*
jÂEQ?«±V=S½PÍß¢¦Qu0§ñ}å¨*!à}Å¨\x001bUPÂS7¥ê\x0001¼\x001c¬¼\ü\x001eÊÞöH\x0008¥W\x000ft´B­²Ñ9­qÅ¬yqzi<ÐÎ®ÑÙsãÒKã$6w^ç\x0000¥Wv
PnjGÜÈ^\x0006þ¶l!ÎºÖ¸³½3Áßz«³®«5¾ÝG£âý(»'\x0010¥+´`uÿêÕkB«Cp\x0001Y°\x001a4kúá+Â\x0015Ø¿¬YM JèK>«QV÷/ì´àY°z5Ëµ?Ä|LØ\x0013þï~èw\x0001þÏ~¬\x000b\x0017\x00106¤ÈÈjþ\x0015ðDF*I\x001bA:ö\x0010
½XÈ$úÌÎúzy¾ì!ðrÄM!r\x00187EÓ\x0005NãpÔúJ¥Wð³
Íµ²+¸\x000eR;üúkûà²?­2²F^\x001b:8¤\x001fÞg¨\x000c\x001d\x0018*, \x0006A\x0014£É¤R7Ìf\x0005Ëj¸Ò Ï«åD]IYy
_\ÉñÆ¦c~Ê¿òùL¾aØÏ­÷Tµ\x0017Jh(`q¥Ëå¼+S\x0013(vëZÛ|eÙv ò\x0012¹,«¬Î\x0017[Ûâ}NiÍÊpfY@g\x0006pø1öÈ\x0007\x0012íg'\x000bõíáÞ®ì¬ñK×kTD!¿);Óä/ÌÜªÑi$ZÅ!\x001b´ÊÜ¦Þá\x001bí\x0001Ri	Ø3\x0002,¯Àp\x0015XÄ2zDx\b$^\x0012$o²é&Ö¹øGßÞ©ÒÑé¾ÁÑ·£ì. Öø¬\x001ab¦ZsP¥ôyÄ-ø¨Á\x0017\x000cÀj\x001cÍª¦ñjuÓïóe*5fâóZeiÎ9i1IXkkkÓ,\x0015b\x0003Xváîb{ÛP\x0011µE\x0016tÛ­û7^²w/µî]Ð·\x00050\x001f9&\x0016ã^vóï<­° \x0014ê</p><p>ÍØnY¼G¦å}Þ`°¬bcYd>Þ#\x000c¨¥æÂâÊLµpò} qÂ%F©^%Õûj«\x001a³\x000cÒÇèýtÅ"®IÂ+ô\x001a*\x000ckÓUÔë\x0013Î5T<¯2§ï\x001b~\x0019æ{~ô=Î\x0001ÖÍ&])Û\x0012îÚN­o\x0002¶[÷§[­¬^V¶çJN¢ÛÛC\x0007ji$\x0002=Îøªx\x0005]\x0014;4ÕÉÄÞhHzLÃ3sÓÌªB¿Z.åxF©°ff;\x001c9\x000e­ÆY\x0012\x000c\x0016¹4tiç¾\x0012V¯ÑZ¼voÄ¡Òh5º@M!¿^©SJ$pa¿fl!ïºØIkª.&îZh\x000bnI,m\x0001£Ò\x000e±xC!¨Ä~VèFÒ\x0007Xé=ÞàÑ\x0012\x001b<lät°Ç\x000eo÷äk2YE\x001az\x0003+Ì9\x000euVpR¯JáòÙû*[\x000e+Ýè\x0011éY0\x0007T°tQ¦ À\x0012(ÃV«}[¼Ó_¨V+áæ~â/mS«¬»i>ðèáz\x001f7½ppôpÔÍî,zvÕàÕ\x0012)(\x000cK]Ù³]±±ÎÅz\x0017X·**j\x001e\x0018*2\x0014ëÙÅP99R\l(jßûÍ>%e+6\x0018|u^èÆÔg\x0018S°\x0008ú1-f=Z´¥ô,³ à/ÈPs#	i®\x0002¯·ÀÆ\Ï©2# wªÊòï\x000e×\x0015¸ÕÔ*P¯ÆS\x0011\x0018pdÙ4þ}\x0005çg4\x0006%/QéUBÆg\x0018Ó_P\¦óUæ~>ÌÓÜI~\x0016RAßfí ðÐ\x000e\x0019$lÂ\x0018ðKws[8¹G£</p><p>b\x0008}\x0001rhTªf;9ÊihgÔ4[-Võ\x000f\x0018½C!f]=\x001b¾û¾^ÂÔÐh!è\¤$ÌÔl \x0008|ý\x000fn:CY\x0015,ÎT\x0017fÓÂpûµ\x001dy#C\x0005m9+Ï®eð\x0017-ÿéêê¾±º_\x0011È,5\x000bÏ_Tß«\x001aiöNA\x000f¼bô\x001dá\x001e\x0018\x001f!r2Ö{\x000fqsWÃ\x0002eæ¶FÕÊà\x001cý\x001cX\x0001\x0007;"¥F1\x0002è@âúâªþI¤£#}Üè6\x0018\x001dïÂ=>uáÇ.¦vA`à\x0004§õM®YT\x001fPÃ@</p><p>\x0016fªé[k÷\X?ùÜ]çòé©\x001a
\x000bmgµ\x0004Í§×óªµæ´Ñwø³ùßb\x0012¥9X«ÂR2ÈÍÛI²²È¤A®!ª7ð\x0016ú¡Z\x0006Õ%ôó\x0012ZÂ\x000e\x0016</p><p>µN/)	OÉcrÔñò\x001b½[¼\Ô;ËÛãåu^S\x000b^¯à\x001c\x001c}#ªUCV=ms\x001e	·Lf«\x0002<\x000fEÕm\x0002±FÐ\x0004C¡\x0010ÎçÝÝ\x000b»ØÜ\x001eê>k¨û,0ßÞÊ\x0008ôJfCÝsiÄqÊ\x0016`°´4¹I`S\ÊzÝØ\x0016¡F\x0010KÆ4&£¹¸¨¬?Û\x0018ÊÍÏ1o9iÚÚ\x000b&¯ß¹ödCÖÚ¾éÅzA%Uf4.XQµìº¼Oz&TfV[Ú\x0015viõ2^;­ª.Ð|FÓÕ­þ²ÜÚ\c7Ck\x000fZ\~§/3='vñüÓüÅhY	\x0019\x001dÅvË\x0005)\x0007\x001dTJV°Ö>\x000fz0¬$¹d2¹>ÙÚJOÙn®Hû.\x000c^²¬Ô#H</p><p>Rc¯`¶F5Á\x0016G£~z¥Øq+Ùë¨¤m¬ã¥`&K\x000ecÖD÷ý«y\x001b\x0002Y¦/\x0005\Æ%I3Ë\x000cf³8ÂIÉ¢«æåÏÖàWÙr3]96¥\x001aæÄ@Sí­¯oÊîÛ|röÈgÜ©Å¶â²ÌÒÞÒÂú|#}oíC\x00177\x0019rzU:¥ (u*O©WI¥*½r$\x001dfQíÌwôW6§Pë-Ë\x001eù]ý´¢Y§À,Ð4ú.ïá\x000fRrSÒ\x0019$ë!n
Ñ\x0012+îØ¦ÆÏ^8¥·\x0008\x000fÐ&R\x0008}T¥¢mybõóØ[«¨¢-µÌjÙbÏú9\x0007÷üÛ9áZ"\x001d·5¢×ç;SÄ
¬È¬ZN\x000ezË\x0019åS×Ý¾(»mj©Y!ázC°¤©hÑR{q[qIkEP£PË¸ÝgÕY<v}tãÎ5\x0017?¾©FkÍ4ë¬>Û¤\x0008tÈ\x001b®i:³%à</p><p>º\¶£h\x001aÙ*Új\x0006Y°ÈéÓÄG\ôQUí\x0003\x0017\x000cúe¥$ÊlE</p><p>¡Æ\x0015d2uÝ×ñKÃL~7µ\x0016Ò\x00005÷ÉÛHmñ0l rI+UVÂJ\\x0019è÷C§+,ÊJd\x0016³9ÙiRq©,={VÖ º=bNÓ{ªÚòóZLrAg\ãÌPÈ²\x0016]8åD­âuJ²&9Âu¹&µV©·³]6³:S\x001f³m|øü¯°\x0015GZaÄ>+Y\x000e»ôJr]²g©\x001c»9v\x0004p«¢ÊtO£ª2Ë!hsS\x0003\x000bf»æ¨ÂÚR"ö\x0012ðíjÛ$ÓSË$*\~pòTü«yßõÌ±\x0001Ê\x00078Û¡qËùgÖLw¶MÕpÃüS¶te\x0017/ºfaëj8<3ÔGÊúÊ</p><p>§Li9õ%öÂâ2·75\x0014ûZæÀèëcCtr\x0015ýCj\\x000eÔ7\x0015ÎYRZqZ{Î[ÍìÖ\x0002v»\x000fV°\x0010)¡\x0012´ÛôtO\x001eûu9T"\x000c2Ëyø¼ô<Î÷¸À\x0016\x000b¶\x0011A/pÓg	=\x0002w«\x0010\x00178AÈEvèh\x001bcÔ
q"-Ö¿\x0013­^Ë\x0019x­Âª¦m</p><p>+DP|\x001aÍH
¸Ð\x0001X kE÷Y\x000bºCC\x000bºÁÞE¯
B´øöÙâ\x0014*õyÆupÓÄ3eí$ãïËñ\x000f¿é¨êR·¸¹@§PËyNk&Í]S·vÇºª³vÚÊ[N)ø·°`ZÄÆÑ#á¼Êî)ÞtKº,Íc3»Ì:­Õb¨ÞðÀÆµ\x000f_ÔX×ë\x0002÷iëýÛ#°\x0002í"®@Ðeô\x0003ZJØ`\x001b=Â}_²\x000eöñ«­eÖ\x0013Ç ·pGAn@9H;Ê¦Ù©Þ\x0019©ï¾hA{º¾IÜ4³.YT\x000bÀÞâá½Åpc¤ò\x0004\x0013[^Ä~jBëHÇï aYO­æ¢µ\x0004îû\)\x0019l^#Ë®þ\x0002\x000e)Æô¨3üþB§jezº\x0004T+ümkgg5fk\x0015ðÓ.Ée@UhÒí,\x000cS\x0007-îÅH¹3Û¢lwÙ¼0\x001cámY'\x000e'oãMj`¦\H¹äùf¦®@ÆWøZ[\x001eoá]-´åÍ§a\x0017¯¦ê§Ûif;µ¶Óö¿í7Q\x0012ÞÄéL¦</p><p>þÓê¦\w^Ý:ÔÑºý\x0015-ºyTÏÏ{6ê-ôÚ¡îî´ÊZqOÃ¶7àí>(B\\x001dÑØø'«ZèW?üè³«ë­ã:ªû§Ï_p´\x0004\x0013</p><p>ÐÚ\x0005@£¤¦ó`\x0014&l³ÅÉÆ½o)ýWIxÅyÈSd¦%Á±ýV
Î¦-ôñ·õËÌé%½ufÔéÅá¦¯\x001d´f{ÿª\x001f\x001a1x</p><p>\¡HYÈ[¾èÒ9¹m\x001eê0F\x001eÕ\x001c¨\x0008¤Í\x0016¬\x0008¤W5Õî°»Ò¥KæWÎ(0ò=\x0005aëdÏõí!Vã7;\x0003\x000fL]P]×R?ÚUê©./²XfFªz³|g\x0013ËW*òF>me\x000bUºêgZsËOÊ/à$é>w¦¾¨Ä\x0012°ñqÞè\x0011þEØ£\x0015å©S¸[(Ê5\x000er=;2smúT7×\x000fÒ¶¨"ßâo´MÇ	;u:b3xâHXü	gOq\x0005=þ\x001b°²2ç_Tg\x0014ú\x0003\x0019ête°`Qij¿âKçmlózS\x000eOi)u6N\x001dÞÒßkEk«^ÞÇæòÓGÐ-\x0019°\x0019õ\x0006¬ýÃpºz\x0018\x000e&Ø£*a÷pÎ½Q¾\x0019K\x0010</p><p>:Zí:NØÄZ%+Î6\x0001¬ç@¡\x001b-yzMG¬jr¬£z¬ìü\x0006X ¤Pé*§WU\x0012nô­ôV(©\x0014©v</p><p>p\x000f'Bj\x0002sÙN\x0014\x0007é9;²]ÍFö«dTìÿµ\x0007\x000cÅÅl\x0013#{ÇWD<Z\x0007!ÙÏ'\x001e\x0007'Tg¿ùÌIv¥Àñr¥\âJ³\x0007­juF²n¬^¬~Â²\x000b»òUê4Ó\x00110+%z_y5¿õÕÄÞH7@o4Úä¬¤Ó(l@UJª!T%@m{î*õhv\x001a\x0011í.º\x001d;Rêã¶Ä\x0017­ïýb÷À2H\x0015°ÂÏ"Ûï\x001b\x001aÓÙzY¤d\x00077«&`~\GO´¶ø\x0007îÛ¢ÚèÆüæüéG{Zeej\x0003-Ry`½</p><p>®\x0014»Ó¿ÙW§/\x001b`&\x001c`\x0016<è¤</p><p>ÖtÁ\x0002§Êà+
äÏ/\x0003;ù\x000cÞ2xþØ°SÚs\î\²eë¬òÎ"Cv[kkV×V÷=9Cþ1\x0003ð\x001aþÜÔÝ©³fYBÕPMVzõ©ÛÆf%h"rA²
rÓÑ3ÅÉdÂ$sx\x0007\x001cKÄÉFlT0ÙäÚüÍc6JC\x000b%ßù¤\x000cýuRØLeúªjÌd7¶ÅL5Á,`^§à\x001c-5ÒáàrVj2rý°ÁÉ«\x001269ØYlÔ\x001eUèZ|Öä{¬ñ§^±Ó%g¯\x0013M1þ-Q²¶©\x0003qjß-\x0008Õ\x001b\x0006ÏY\x001b_S1yÃýç¬¯®\x0018\x00196\x0015µ×Vt9Ì\x001d5\x001devúÎª=¶Ô7xöª\x0007/irÞà\x0005u+æsf®\x0006ÌÏ±½-\x0018¹N PËño\x000b<eÊÔÛþÙÛfýÌûmÁWå1þmÁqºÀ½-CÈ¬)«Ýc}ÁãÊÌ±)³Zg´G\x0016±·\x0005G\x000c9SlìmAOIaC\x000e­}øâ&+ì\x001a×S\x001dcYöä\x001ccÛÅµËæ\x0014êØÛ§6\x0017Í>\x0005Ç
·[|¿¶29n:1£jb×)]Ê×ðJ¶ù\x0011\x0000ßö¨2\x001aj	êLîfØïSsÊBvªØ\x001c1Ê¯ÌV÷xCD´Û
;~¥ÜhËL3åæÃ@9føj**24n«J\x0002J«?lW²­­¿:oøÀ\x0017È¢)A\x001d/S(Õ¦\¨}óè;Ü\x0007PûfòNjÂïõ\x0017ùÔ°å¯zZ\x0008Óð¡rXN6GÙDPî.çørC¹Á¬«¦Õì}ºõêCS\x001c\x0016³½ë#fª\x0017Ì\x001fu</p><p>°OU~(Ô-¾\x0017XØ\x001dÒ\x000fuÃu´4¦\x0011ß¿ºÿvÔìÂ_kJÆ~½Æ@Ð\x0000\x001fT.½²½h^SY-ÈÕ</p><p>U(\x001a+óf\x0019\x0003Ûf·M\x000e\x0014-¸¤#wf4/].ð¼L-W\x0004+[\x000b¼En}°fæì5p¼¾fFÎb5åç9}&-Ó®µgÛ3Cî\x000co^tnmôôé¹ê4NgrY\x001c^£Ìd5ií>£+×áÉvA+YFßã®\x0014\x0006È$²\x0015[é~ASC|ùluµhòS#3\x001fÎU;|MNMJ¡a/¦,Mìo±¢²¤q`pî\x0017§¶âá¢½E\x0006<\x0006ï"ùÿJ&8Û\x000bÇ?M<ÀSÇ]îJU/RÑzf÷ôt#ë§©¸</p><p><¦\x0014Oo«nA&UI%\x001bò"é°ó	Î\7>g³'aK$0ÄÄÓÛHws³L!ü`­õì=
¿\x000fVÂÓ#Z/i\ÜÂ¨.=¿9K%±5û­©ÍÂ1¯SØ\x0008\x0015§}ñ¤¥=èÇ{÷rÌ/\x0004eåGßÂ<Ë&4O\x0015\x0016·9ó7¶yÄÊÃN\x000bÀ\x0012Ø[zûâ\x001d¿®-½ì\x0014nL1"o\x0014\x0017AnöØÏa\x0007°\x0003êGbÉµ@ïq
rß½/jò¸¥\x001eß ×\x001dUGÛÝìQÙUÉé¨Ú"vëkP´J»þ5û\x0010;l8î?&RrÜÈÆ~õ:ººYÒ-åéÉ_ÛwP^"|$1dM-+\x001a4HF>Ê¨*£0SäT\x000bÏH¥OñH0\x0010±+ù[$ZYûùK\x0006Z¨Mz>ËèÖJ¡2DaP\x000fe³qW©</p><p> Ô±\x001d\x001bê·\x0005ê\x0017!W¤~Ýñrø¹Ü¨"l\x0005G,*õ ×\x001bÕEÙïä¼Yå\x0010O\x0005Ð{Î­Êiö©\x000cÎfÃÑMËúÛ"`\x0003«þ5>\x001dÄiI/¾¿tD5¼9¹Âñ<Ú¦<\x000f\x0006ûÄtÑ0f³TÆó\x0017ÉiÆ¤ürN¸ã\x000eAë,ÉÍ+±RÅ'\x0014Ô^YW©Ür3¯¶çgåZ¨êõ\x00120WhtòÈãJhÍ\x0006z?ýQM+å¥\x001aåÈA+WË\x0005Ak3\x000eû\x0001Â?Âñsañ7\x0013ãý$ªÒoHíëöý°íß_X@Ç~|Ï\x001a+"¥W\x0008,3h7È\x001fUr²°'?3]>r£°BcÔHÙêó¶Ê¨\x000b</p><p>½jä\x000c|\x000e7ö\x001ceÔ$Ù¤øT­Ç~áQ"3f=áR\x000b§xL®·\x0005¾\x001c=¯8KÒ¡Ò+\x0004¹Î¨z[©\x000bRxävÖÚWéÔC\x001cÄ4 3Ì;ÒT\x000c¢?\x0000\x0018Ú'¾Pæ0{fñ±?ï¸SaºXf°zíN¿J6è½%\x0001_G7=eR¹ó\x0011¥V\x000eãE¯¢Æ½¹fÌ\x000bõ¹uôCú\x0000¿]Ü-:\x0006\x0008ã\x0007ïWfú`k«Zí¯G\x0016³ß?Ý×\x0019ñÓ\x0007´²2ZÔ\x001eëçÍ¹\x0015~Î_\x001bä×ëýr+¢27·±Õ}#çNMTDPðÓ¡\x0008¬¾ãwNéèNµG¯îÖv.Ö\x0016ãéu`1ãQM#µIÑ¯i06+i1 (
`±¼¹\x0016ÌÂ,ÖENâïåw\x0013;)%å\x0003¡ ûW\x000c\x0019:%û7
6b\x001f@U\x0001\x001b\x0008~g®±@â!â½E42|pïÁá×ö
?¡\x001f~\x0002j46p $'\x0010\x0019/I?®z»3åû\x0001«Fòºêh-~§?ßL¥\x000fúò\x0002\x0010¨¼\x0001¿j¬L¾Ý¤6¨¥L© sM!;mkd¼L®\x0019¹\ 1iåL£ ËÍy6:O¡	2QÃzø
P¿\x000fõ«\x001cp\x0014²e\x0011ónú$!«R]:HGî\x000b\x0006²ò\x000cnI²û\x000e\x000e\x001fØËþb)YÃ£\x0013Bjª1A«å5¬ÔÎ@\x001eTéq±BAgÀ\x0015\x001a¾\x001eÂübì¡gd`	hÑH_°µ©bÓµôüTF®1åÙG\x001eP¨e<\x001bP´PÉGî0ìÐ[ªèU\\x0005×MtÄ 2Õ.\x0018j\x0002\x000cÑ\x0008\x001b¾ìý4v6ö \Ù:Òc3môVÈFB?\x0014TVÖlöhoFGÛþn\x0007:nügß8~êWº{¾u_×	7</p><p>·\x001fßI\x001a%¯¦tUÊÉ´I÷2¸?Mtòß¬S}\x001c÷\x0011sÊæ/q\x000fs£GêQuÓ\x0004·ûøNÓ-ºWÑi·Ñé\x001aÿ%÷Øñ¾h{ü\x001bu¤!ç[÷­ûÿÞ-\x0004wá1ÑýãË\ÚÒ´¾àF¾uÿ{\x001da;>üA\x0017y\x001aÄ_Ã ©¡ôlºÞK\x001f¡\x001cµÓnz5½þfÓ+¨®àç\x0011?ºÉRª§ûè,ª£ý§sé2>Æ/åñd\x0012¿Lêa\x0005\x0007(¸</p><p>ìy££p¥ì</p><p>~ý$ßà³k\x001aÔMü\x000b3"#djï\x0019Ë\x0016­Z!^Íþrÿ\x0004?òÞÃäðè\x0004EòV\x0011´G>\x000f|Xþ7</p><p>w'áÇ\x000b¿l9HG¾9\x0011êþ}T+¾oå¿Zø\x000fÉ´¯+B+9ï"M'"\x0010·uÈHË\x0008w)±ýO\x0016þ\x0019â8\x0011a¶J	ýþuS¾z<°ó'Ò\x000b>ë¸Ò\x0006íñud\Zîw\x0013/$Í'"Ü>ÿC\x0002å\¢Â?MÌÇ{ûªp§Â\x0006èXYú­|+ßÊ·ò­ü·\x001eÖ!&¥äVÎG6IJÿ5DIº@nø*áVªäYøË?ìÌG%®øö\x0007\x0016êª?&6¹¨Þýse|4÷£ó>×¬V¼+»\x0019â*Äs(|þ\x001flSt</p><p>endstream</p><p>endobj</p><p>9 0 obj</p><p><</Type/FontDescriptor/FontName/LGAZPG+Calibri/FontBBox[-20 -178 801 692]/Flags 4</p><p>/Ascent 692</p><p>/CapHeight 692</p><p>/Descent -178</p><p>/ItalicAngle 0</p><p>/StemV 120</p><p>/MissingWidth 506</p><p>/FontFile2 23 0 R>></p><p>endobj</p><p>23 0 obj</p><p><</Filter/FlateDecode</p><p>/Length1 39608/Length 18791>>stream</p><p>xí}\x0007x\ÅµÿÌ½ÛëÝÞ´M+íJZI«Þ-­z³,«ÙmÙ»{ÁÆ\x001dÓ
fHè%Á\x0004\x000cXI0\x0013B\x0012\x0003IhIÀK\x0008%1\x0001BèþgîÜäBBÞ{ßÿ½÷}ìõoÏoæ½sfÎ33÷Ê\x0008#ôh\x0017âÑôÖX\x000e\x0012?W\x0005àkÆýkhú;\x0010Â\x0017\¸!pà¦£AÆ+\x0008É5×,YùñÇ-:ào#¤v/YqÑbz|n'BÍ.]Ô¿ð?"¶</p><p>nÛ\x0005\x0005K!Cÿ¨¶\x000c!£\x000cÒIKWnØ,ý\x001eHáí\x0015«\x0017ôÓô\x0011R\Ù¿yM</p><p>æõp|</p><p>d\x0006Võ¯\$\x001dOÎw­Y½~\x0003MßÖGö¯Y·hÍØ»~\x001doËk\x0011RÞÐèMhòg:ZÖCyw¡ËÑµè&ô\x0004ú=.\x0001v+º\x0007íC\x000f¢\x0001ô$z\x001a½þ\x001b?£\x0017ÉW"\x001d\x0014)\x0005¡±ÏÇNî\x0003\x000cË
rnE\x0016È\x0019\x0013ÆÞ;+ï½ÑÆÑa\x0019iÄsõÜ¯!÷ïxdìs®¤Ç</p><p>H»\x0002¸Q<ã\x0003å]£\x0007F\x001f8K\x0007mh\x0016æ ^Ôú¡ü\x000bÑR´\x000c4s\x0001ZV¢Ubj\x0015ì[\x0002ß!5\x000fZ\x0000G\x0011>qÔj´\x0006°\x000em@\x001bÑ°­\x0001¾^J}kÅôF´	¶Íè"´\x0005mEÛÐvé{³
öl\x0011Ó\x0001;ÐN¨Ñn1Is.A¢Ë Ö®@W¢«þiêªq¶\x0007]®zþ\x0016ºî+ùµg¤®í\x0006t#´½èft\x000bú\x000e´ÛÑ\x001dgå~[Ì¿
Ýî6CöÝ\x000c9wì}\x001cý\x0014\x001dF¢\x0003è¨Ë\x0005 5ª\x0011¦Å¢\x000e×\x000e¶A	/tÇTÆµµ\x0003ÊNÊ¶G*éfÈß=é\x000b%=#/#éUh=«l?K\x0013×C\x0019((\x0011MÝ,"w²VþY.ÓÇ\x001d4s»"ììÜ¯â· ;Á\x0002ïo¢UÂî\x0003NÙÝ"×ø±÷éï¢ï¡û¡.\x001e\x0010\x00194g\x001fð\x0007Ð÷Á¶\x001fBûÑÃ°MðÉÊGÑ#bÍ
 A4\x000e¢CPGÐQ4,æÿ³}çË?(å\x000fç\x001cC¡ãÐB~N§ù\x0011l,ç\x0007÷{RÌ£é\x001f¡\x001fC\x001cES?EOú9ú\x0005ú%z\x0016ý\x0004RÏß?Ôsè×è7è%¬\x0007ö+ô\x000e|\x0000P¼~á¼¹½sfÏêéîêìhoÞ:­ejsScC}]mMuUe¼¢|JYiIqQaA~,3#=%\x0014Jô;­&Á¨×jÔ*¥B.ã9ÒkCu}pß,\x001cjhÈ éP?dôOÊè\x001b\x0008@VÝÇ\x000c\x0004úÄÃ\x0002g\x001e\x0019#\x0017ud\x001e\x0019\x001f?\x0012\x000b2T\x001e¨
\x0005\x0006NÕ\x0002ÃxV[7ðkkB=Ó"o\x0011¹,,&ô\x0008\x0006á@­siM`\x0000÷\x0005j\x0007ê.\º§¶¯\x0006®7¨ÕTª\x0017i2ÒÑ F\x000bT\x000bl %´f\x0010§cp)µ%\x001cRéÉÏ\x000eðÉµý\x000b\x0007¦·u×ÖxÁ\x001e1\x000fU×\x001aPT\x000f(Åk\x0005{FW\x0007\x0006ÓOì¹fX@óû¢º¡ýsº\x0007ø~8i\x000f_»gÏ\x0015\x0003¦è@j¨f uËPäE\x0003é¡Úh\x0008.ÖÜ>þ\x0003x@,\x0002{þàæC§ÿzfN¿£H\x0016þ\x0008%E\x001cW\x0013ìg\x001cÁ½Á\x001dBùAr/W\x000fÇÑ|H\x000cìjë¦é\x0000ï\x0019BñX´gë#{N°=¶.²g\x0017Û3~z_(Hªª¶OúwáRçÀ®ùtÐ¾ø/\x0019þÁþÀ\x0000\x001fî¿`)ýöjj¨Þ:»\x0007â5@âýRYk\x0007³bp|\x001f\x0014b\x0019QC[÷@,´fÀ\x001aª¢\x0007@FÔÁ²nñ\x0014é´\x0001kõ\x0000ê[ 5\x0010«­!÷\x0015¨ÝÓWCo\+ÔÖ}\x000cå½>\x0017ð\x001cÌEy¨ÜÇ½\x001a*%\»§{áâ\x0001g!´ÏÅnOp Þ\x0003êë	u/ê!µ\x0014\x0012\x0006R_\x000b¿(\x0005e;ëhv0)¹2Y\x0015èæ<|\x000f©-È\x0008ÔÁW¨ª\x000cv\x0008P]bÔhUY \x001b{\x0010;\x000c~E:°3®\x0003	>¹ºìâÉ©Õ
`O~þÉ-y¤{'\x000f¨&]Kñ{¢¿ó·F&7\x001a¨]T3é\x0006Ï¸¨\ºAéjç¿OèBúa8CEª³íâÁr!ËY¤\x0016\x00014=Ð\x001dZ\x0014ê	A\x001bOï&e#º\x0016ë·¹#ÔÜ6«[¬m©t¢ûhj\x0000\x0005a7KpÕÐ\x0006ë¢\x001eV­bº^L'\x001bÎÚÝÈv\x0007ö¨BÍ\x001d{ÈÅCÒ\x0005Q\x0000,\x0008</p><p>­\x00087ö_]dÎ\x0003Ó¬\x0003ï\x0016ªë\x000f\x0005@Ýþá±]ó÷\x000cÆã{ÖÔö--!×\x00085.Ü\x0013êè.ó÷ÚÞ½Ý³ü\x00195ãæÎªtð=U!|eÛ`\x001c_Ù1«û\x00001îÝC\x001cæªûªz\x0006`_÷±\x00008w1#¹$$\x0002$A®Ô\x000e	x¼çX\x001c¡]â^!¦\x0017\x000cc$æ©X\x001eF\x000b9'°<\x000eòd4/.æ\x000fTs)¨\x0018Ümm`!©m=K÷ôõ\x0010ãBv¨Jø\x0007p¨\x001c
p¡òAÌ)t\x0003Ð¢ª\x0001m¨äWü</p><p>¯ ùJh\x0018ØA9Ä'íé\x000b\x0006Õ<6E\20<6ÖÙ\x001d<å9Ý\x0013¦6\x00070«{@\x001d\x0005ß/Onãê	ú »~`×~r\x001f¨««Ln\Ð\x0003Í]\x0010\x000ei\x001cPÃ\x0015ÔÒ\x0015à:ñ\x001cÒ\x001cá¤\x0005P7Pâù» 1°«g 'J~´{YØ\x0001Ô\x0010*j§×É\x000fÅzöC9¢m)h¯ B
÷:ºi\x0007ðc=TIJ\x001dÜù\x0010ìZÐ\x0017\x0000mËÐ\x000ehêÔj<4g\x0011¸DYx\x0008GÚH±ød­^3 Î\x000bÂ?ÂµÄ$åÉÊ\x001ezóbê</p><p>é\x0000øma@\x000bw\x0014¤Jé\x0004Ð\x000eìj$÷\x0002ÿ®[%>I.Ó6ÚCÁ³\x0016¯¤Ý\x0003úäÆ~pþô|-äØÉ*â#´Ò5NÒ\%)¹\x000eôÎ'w\x000e=\x0010º(8é\x001e"\x0003iÈs\x000c\x001a6êÙsvÆÀìhFºêì\½½gJþ\x0013¨¾TúqI2\x0003µÐkÀ0\x0006V QOj¦}=zú\x0008Éü\x001cY?DyJ\x0010`\x000f\x0002!\x0018ccP;xHÍ\x0007¹K\x000f©¸	È%ìfäbFv1²\x001dlgd\x001b#[\x0019ÙÂÈElfd\x0013#\x00172²
¬gd-#k\x0018YÍÈ*FV2²\x000b\x0018YÎÈ2F2²Å,bd!#\x000b\x0018ÏH?#}Ìcd.#½Ìad6#³\x0018éa¤Ì`¤NF:\x0018ig¤é´22\x0016F¦2ÒÌH\x0013#40RÏH\x001d#µÔ0RÍH\x0015#Ä\x0019©`¤)1RÊH	#Å\x00141RÈH\x0001#ùä1ËH\x000e#Ùd1\x0012c$\x000cFÒ\x00192ÆH*#)D\x0018	3ÌH\x0012#!F\x0012\x0019	2\x0012`ÄÏ\x0011/#	x\x0018q3âbÄÉ\x0011;#6F¬X\x001813bbD`ÄÈ\x0011=#:F´h\x0018Q3¢bDÉ\x00119#2FxF8F0#H"xQFF\x0018ù/\x0018ùÏ\x0018ùO\x0018ù0ò\x0011#gäCF>`ä}FþÆÈ{fä¯üw\x0019y·\x0019y?3ò&#bäü\x0007#o0ò:#`ä5F^eä\x0015F~ÏÈï\x0018ù-#/3ò\x0012#/2ò\x0002#Ï3ò\x001bF~ÍÈ¯\x0018yg\x0019ySü_0òsFfäg<ÅÈO\x0019ù	#'\x0019ù1#?bäIFN0ò\x0004#?dä\x0007<ÎÈqF\x001ecä\x0018#Ã\x001ceä\x0008#\x00199ÄÈAF\x0018\x0019dd\x0003<ÊÈ#<ÌÈ~F\x001ebäAF¾ÏÈ\x0003ìcä~F¾ÇÈw\x0019¹{\x0019¹»\x0019¹;\x0019¹Û\x0019¹[\x0019ù\x000e#ßfä\x0016Fnfd/#71r##70r=#×1ò-F®eä\x001aF®fd\x000f#W1r%#W0r9#1ÂÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001eÌÂ\x001e¼\x0011\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ÿ`\x0016ö`\x0016ö`\x0016ö`\x0016í`\x0016í`\x0016í`\x0016í`\x0016í`\x0016í`\x0016í`\x0016í`\x0016íàê@Ô<ä+÷CÌ<ä³ØMS\x0017\x000fùJ@ì¢©Tì\x0018òé@l§©mTl¥b\x000b\x0015\x0017
y+Al\x001eòVØDÅTl¤û6ÐÔz*ÖÑÌµCÞ*\x0010k¨XMÅ*zÈJ*VPqÁPB-åT,£b)\x0015K¨X<P\x0003b\x0011M-¤b\x0001\x0015ó©è§¢yTÌ¥çõÒÔ\x001c*fS1\x001e*º©IÅ\x000c*º¨è¤¢v*Ú¨NE+\x0015Ó¨h¡b*\x0015ÍT4
y\x001aA4RÑ0äi\x0002QOEÝ§\x0019Díg*\x001a*ª©¨¢û*éyq**èyåTL¡¢\x001eYJE	=½"*</p><p>©( "^,\z\x001c*²©È¢\x0017QIÏË "(\x0015iT¤RBE^:LE2½f\x0012\x0015!*\x0012é¥T\x0004èy~*|Tx©H ÂC{È=
</p><p>ç»\x0015</p><p>;Í´Qa¥\x0016*ÌTè></p><p>#Í4P¡§BG÷i©ÐP¡¦ûTT(©P\x000c¹¦\x000f¹Ú@È¨ài&GS</p><p>$</p><p><FÅ¨x\x0008\x001e¡©/©øÏé¾ÏhêS*>¡âc*þ1äì\x0004ñÑ³\x0003ÄßiêC*> â}ºïo4õ\x001e\x0015§©ø+Ý÷\x0017*Þ¥ïPñ6\x0015oQñgzÈ4õ'ú#Mý\x0007\x0015oPñ:Ý÷\x0007*^£¯Rñ</p><p>\x0015¿§âwôßÒÔËT¼4ä	âÅ!Ç\x000c\x0010/Pñ<Íü
\x0015¿¦âWT<G\x000fyghæ)*~IÅ/¨ø9=äi*~F3¢â§TüTü\x001eù#z\x0013T<A÷ý\x001fÐÌÇ©8NÅcT\x001c£b\x001ey¦PqCT\x001c\x001c²W\x0018\x001a²Ï\x00061HÅ\x0000\x0015\x0007¨xG¨xýT<4d\x0007\x001f¤Wù>\x0015\x000fÐ}û¨¸ïQñ]*î£â^*î¡ânz±»èUî¤â\x000eºïv*n£âV*¾COø6MÝBÅÍTì¥ûn¢W¹\x001bè¾ë©¸oQq-\x0015×Ð#¯¦©=T\EÅT\AÅåC¶~\x0010
Ùæ¸KlAì¦ââ![\x0017]C6pÆxç­\x0000Ä\x000e*¶ÓÓ·Ñó¶R±eÈ¶\x0010ÄEôôÍTl¢âB*6R±õôÒëèék©X3d[\x0000b5½Ø*zäJ*VPq\x0001\x0015Ë©XFÏ[JÅ\x0012zgéé¨XH\@Å|*ú©è£b\x001e\x0015si¡{éÍ¡b6-ô,zé\x001eúCÝTÌ¤·;þP\x0017½J'\x0015\x001dT´SÑ6d>d%¿Ð:d%Í{Úõ\x0012\x0010-CÖ\x000c\x0010Sé!ÍT4
Y!.À4Õ@E=Í¬\x001b²î\x0000Q;d½\x0002DÍu'ê!ë.\x0010UCæ:\x0010TÄ©¨ ¢|È\x000cý;BSeC¦\x001e\x0010¥T\x000cHÓ(¦¢hÈT\x000f¢pÈÔ
¢`È4\x000bD>ÝGEî)\x001dD\x000e=2{ÈD</p><p>5d"¶\x0019£"A!(½X\x001a\x0015©ôb)TD¨\x0008S<d"ZJ¢"D¯H¯\x0019¤\x0017\x000bÐ«ø©ðÑó¼T$Pá¡ÂMkHè\x0005á\x001c\x0012æp\x000c	ó@Ø©°Qa¥ÂB`¢'\x00084ÓH</p><p>=\x0015:z¤\x001e©¡j*TT(©PÐ#åôH\x0019Íä©à¨ÀT øq¾`Ô¸À?b\èÿ\x0012ø\x0017Ï\x0001AÞ§÷	àcÀ?\x0000\x001fAþß\x0001\x001fÂ¾\x000f ý>ào÷\x0000§!ÿ¯¿À¾w!ý\x000eàmÀ[?\x001bøß4,õÿ	ðGÀ\x0000Þ¼×Aþ\x0001ð\x001aàUH¿\x0002ò÷ß\x0001~\x000bxYÿ%}¶ÿE/èWø×ý¿\x0001ü\x001aø¯ôQÿsg\x0001ÏÀþS÷KýJÿ/ÿ\x001cøÓÀ¦_îJ¿ÌÿSýRÿOôKü'áÜ\x001fÃõ~\x0004x\x0012\x0010\x001f;\x0001ßO\x0000~\x0008øn­ÿqÝ:ÿqÝzÿcº
þcaÀQÈ?\x00028\x000cû\x000eÁ¾7\x0004\x0018\x0004\x000c\x0000\x000eh/ò?ªÝâD»Íÿ°v»¿vÿ!Àï\x0003\x001e\x0000ì\x0003Ü¯Íð\x000fäw\x0001÷Á9÷¼G{ÿnàw\x0001¿\x0013p\x0007ðÛáZ·Áµnk}\x0007ò¾
¸\x0005p3`/à&ÀpÞ
p½ë5Óü×iZýßÒ,ñ_«¹ßæ\x0001ÿe|²ÿR¾È	.òïîÚÕuñþ]];»¶wíØ¿½K»\x001dk·{¶7oßº}ÿößo·(4Ûº¶tmÝ¿¥ë¢®M]÷oêºpÿÆ.ÙFëÆ
\x001bù6âý\x001bqÍFµ\x0011sh£°1°×mèZ×µ~ÿº.´núº]ë\x0006ÖÉJ\x0007Ö½¾Cë°fxìÄÁu\x001e_\x001dÈø¶uz¡nm×ê®5ûWw­Z¼²k9ÜÖ²¢%]K÷/éZ\´°kÑþ]\x000bæwõ\x0017õuÍ+êí»¿·kNÑ¬®Ùûguõ\x0014uwÍãg\x0014uvuíïìê(jëjßßÖÕZ4­k\x001aä·\x00145wMÝßÜÕTÔÐÕ¸¿¡«¾¨®«\x0016\x0012@\x0002/\x001b\x0000w<¸*Ë\x0013÷¼îyß#C\x0001Ï	\x000fo6ºýn.ÕèÂÕ­.¼ÚµÓu7:urqgjzÑñ¬ã\x000f¿9d¸#5³\x000eÙ\x0005{ÀÎÛHÙì-u¢¬¨¡2;_,k=\x0014®3Ú°Ñæ·qµ~\x001bF¦×MïxÛ\x0013Â³\x0002g4b£qÌÈÅp¸Ñà7päkÌÀÇ
ÙuF½_Ï¯1=oë!\1¢ÞYgÔúµ\W¶UËÅµ\x0015ÕuqmFV\x001dâq\x0000c\x0005\x0010¼</p><p>=mþ:þqLqä\x0008ãë\x0007;;¢Ñæa\x0015jo\x001ePM=¯\x001cHî ßñ¶Y\x0003+\x0007P×¬ÙÝ\x0018«g\x0010sÕ\x0003V²Ø+¦/»öZä­j\x001eðvt\x000fñ÷Üã­êi\x001eØEx<.ò1Â\x0011\x001cÒ\x0013»~ãúhtÃ\ø»~CTü\x0007)¼¤¢$ü[¿\x0001ÒdÛ(¦Qô~èa æ­Ï\x0006)oÃ??éû\x0007ÿOßÀÿýÏ "Ï(Tq¢Ü%Ý\x0001»\x0000;\x0001;\x0000Û\x0001Û\x0000[\x0001[\x0000\x0017\x00016\x00036\x0001.\x0004l\x0004l\x0000¬\x0007¬\x0005¬\x0001¬\x0006¬\x0002¬\x0004¬\x0000\\x0000X\x000eX\x0006X</p><p>X\x0002X\x000cX\x0004X\x0008X\x0000\x000fè\x0007ô\x0001æ\x0001æ\x0002z\x0001s\x0000³\x0001³\x0000=nÀLÀ\x000c@\x0017 \x0013Ð\x0001h\x0007´\x0001¦\x0003Z\x0001Ó\x0000-©f@\x0013 \x0011Ð\x0000¨\x0007Ô\x0001j\x00015j@\x0015 \x0012\x0010\x0007T\x0000Ê\x0001S\x0000eR@	 \x0018P\x0004(\x0004\x0014\x0000ò\x0001y\@\x000e \x001b\x0005\x00012\x0001\x0019t@\x0014\x0006H\x0005¤\x0000"0 \x0019\x0004\x0008\x0001\x0012\x0001A@\x0000à\x0007ø\x0000^@\x0002À\x0003p\x0003\\x0000'À\x0001°\x0003l\x0000+À\x00020\x0003L\x0000\x0001`\x0004\x0018\x0000z\x000e \x0005h\x0000j</p><p> \x0004(\x0000r¬r\x000c¾y\x0000\x0007À\x0000\x0016bÈÃ£\x0011À/\x0000\x0003>\x0003|</p><p>ø\x0004ð1à\x001f\x0000\x0007|\x0008ø\x0000ð>ào÷\x0000§\x0001\x0005ü\x0005ð.à\x001dÀÛ·\x0000\x0006¼	ø\x0013àÿ\x0000¼\x0001x\x001dð\x0007ÀkW\x0001¯\x0000~\x000fø\x001dà·\x0001/\x0001^\x0004¼\x0000x\x001eð\x001bÀ¯\x0001¿\x0002<\x0007x\x0016ð\x000cà\x0014à_\x0000~\x000ex\x001að3ÀS\x0002~\x00028	ø1àG'\x0001'\x0000O\x0000~\x0008ø\x0001àqÀqÀccaÀQÀ\x0011ÀaÀ!ÀAÀ\x0010`\x00100\x00008\x0000x\x0014ð\x0008àaÀ~ÀC\x0007\x0001ß\x0007<\x0000Ø\x0007¸\x001fð=Àw\x0001÷\x0001î\x0005Ü\x0003¸\x001bp\x0017àNÀ\x001dÛ\x0001·\x0001n\x0005|\x0007ðmÀ-\x0001{\x00017\x0001n\x0004Ü\x0000¸\x001ep\x001dà[k\x0001×\x0000®\x0006ì\x0001\\x0005¸\x0012p\x0005àrÀehaå.\x000cöÁþ1Ø?\x0006ûÇ`ÿ\x0018ì\x001fýc°\x000cöÁþ1Ø?\x0006ûÇ`ÿ\x0018ì\x001fýc°\x000cöÁþñ:\x0000ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030ø\x0000\x000c>\x0000\x000fÀà\x00030Ø?\x0006ûÇ`ÿ\x0018l\x001fíc°}\x000c¶Áö1Ø>\x0006ÛÇ`û\x0018l\x001fíÿOûáÿãÿé\x001bø?þqÎK"L4ºÿµÜx¤DÅ¨\x0005MC³\x001fGzhÓvT\x000f\x001f¶ÕÔ¨2?öÊ¡\x0000´x\x0015¤Õq£Ó\x001fu»+BGó\x0015×ò¦F\x0018¸\x001fªP^\x000b¾¼bäµgb#¯6\x0017ÇNãØ«o¼öðÁ3¦âXî\x001bÏ¿MA\x0008«S*­Pb&\x001f	\x0017äææsùyáP¢\x0013óò</p><p></p><p>ËùÜ\x001c\x001fÇ[YN9GÒÿõ³øÖ\x0011\x0005·#T1#Wîs\x001b­zKp3ÊÙÉe^%¯Tðr2¥°*±yEmâï&¯Íî5«Tf¯Ýæ5)G~/7|þ¡ÜðEµlÅ\x0017{yEé$þ;\x001a\x0015'S(}NWZi°qÑ"È´\x0016ÁdW)Í&]JÍËm	ä\x001a	6\x001b½ÖH\x000b¨%4ö¹lÜ\x0012Q\x0018Ýy\x000c%½}H'à©¡aÇÞ?¤\x0005¢e\x0004FVïÇÝ%\x000bä[/~ëÄïx</p><p>N&»Óµ¸%)\x0014NþH§Õ9\x0013½!\x001eÛe:¤\x0013tÜÐ\x0013¡gC|H\x0017Ò½íæ.y\x0017ª¨¨0\x0017\x0017Çb½½&G±	¨)W8cÊ\x0005G{i}C´l·+DGø oàCápA!¦zv(C|P¶Qd¿?Ù¢­\x001eùór^c	%xXdzWÄ\x0017Hs\x001bd[ñ\x001fð¦Ø=\x0006\x0019¯Ô©qéèÓj½Z&7xì²!­AÅó*£öÚ­\x0008ÚÔÃ\x0008É0´.\x001f¢"ô³¸Ûï\x0014p_0/=|9uð\x0015²5xÛ\x0016ý¶8ì·Ù´éäàtrp:98\x001cN\x000eN\x000c\x0002\x001f4vâ0p\x0014Î\x0005M\x001f#A¾Ð(I½(?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v3.2.1`
  
  
  
  
* URL: [https://adoption.gouv.fr/squelettes/js/jquery.js](https://adoption.gouv.fr/squelettes/js/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v1.3.1`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=85&page=article](https://adoption.gouv.fr/spip.php?id_article=85&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/spip.php?id_article=85&amp;page=article' enctype='multipart/form-data'>`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=2&page=article](https://adoption.gouv.fr/spip.php?id_article=2&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formRecherche1" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=27&page=article](https://adoption.gouv.fr/spip.php?id_article=27&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/spip.php?id_article=27&amp;page=article' enctype='multipart/form-data'>`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=1&page=article](https://adoption.gouv.fr/spip.php?id_article=1&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/spip.php?id_article=1&amp;page=article' enctype='multipart/form-data'>`
  
  
  
  
* URL: [https://adoption.gouv.fr](https://adoption.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formRecherche1" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=85&page=article](https://adoption.gouv.fr/spip.php?id_article=85&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formRecherche1" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=1&page=article](https://adoption.gouv.fr/spip.php?id_article=1&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formRecherche1" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=26&page=article](https://adoption.gouv.fr/spip.php?id_article=26&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/spip.php?id_article=26&amp;page=article' enctype='multipart/form-data'>`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=2&page=article](https://adoption.gouv.fr/spip.php?id_article=2&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/spip.php?id_article=2&amp;page=article' enctype='multipart/form-data'>`
  
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formRecherche1" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=26&page=article](https://adoption.gouv.fr/spip.php?id_article=26&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formRecherche1" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=27&page=article](https://adoption.gouv.fr/spip.php?id_article=27&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="formRecherche1" action="spip.php?page=recherche" method="get">`
  
  
  
  
Instances: 12
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "id_article" "page" "formulaire_action" "formulaire_action_args" "var_login" "password" ].</p>
  
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
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=495&page=article](https://adoption.gouv.fr/spip.php?id_article=495&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=496&page=article](https://adoption.gouv.fr/spip.php?id_article=496&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=89&page=article](https://adoption.gouv.fr/spip.php?id_article=89&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=521&page=article](https://adoption.gouv.fr/spip.php?id_article=521&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=23&page=article](https://adoption.gouv.fr/spip.php?id_article=23&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=90&page=article](https://adoption.gouv.fr/spip.php?id_article=90&page=article)
  
  
  * Method: `GET`
  
  
  
  
Instances: 6
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 123 [http://www.diplomatie.gouv.fr/fr/enjeux-internationaux/adoption-internationale-2605/comment-adopter-a-l-etranger/glossaire/].</p><p>Predicted response size: 423.</p><p>Response Body Length: 490.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-adoption-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-adoption-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://adoption.gouv.fr](https://adoption.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-adoption-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-adoption-preprod.cegedim.cloud-HTTP`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://adoption.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615990257](https://adoption.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1615990257)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/ajaxCallback.js?1615990259](https://adoption.gouv.fr/prive/javascript/ajaxCallback.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://adoption.gouv.fr/squelettes/js/jquery.js](https://adoption.gouv.fr/squelettes/js/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://adoption.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-7a268c18.js?1614772805](https://adoption.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-7a268c18.js?1614772805)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://adoption.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1615990257](https://adoption.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1615990257)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
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
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=4&page=article](https://adoption.gouv.fr/spip.php?id_article=4&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=27&page=article](https://adoption.gouv.fr/spip.php?id_article=27&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=1&page=article](https://adoption.gouv.fr/spip.php?id_article=1&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=2&page=article](https://adoption.gouv.fr/spip.php?id_article=2&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=85&page=article](https://adoption.gouv.fr/spip.php?id_article=85&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=5&page=article](https://adoption.gouv.fr/spip.php?id_article=5&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr](https://adoption.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=520&page=article](https://adoption.gouv.fr/spip.php?id_article=520&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=6&page=article](https://adoption.gouv.fr/spip.php?id_article=6&page=article)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=26&page=article](https://adoption.gouv.fr/spip.php?id_article=26&page=article)
  
  
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
  
  
  
* URL: [https://adoption.gouv.fr/plugins-dist/porte_plume/css/barre_outils.css?1615990257](https://adoption.gouv.fr/plugins-dist/porte_plume/css/barre_outils.css?1615990257)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://adoption.gouv.fr/plugins/tarteaucitron_plus/lib/css/tarteaucitronplus.css](https://adoption.gouv.fr/plugins/tarteaucitron_plus/lib/css/tarteaucitronplus.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://adoption.gouv.fr/squelettes/css/styles.css](https://adoption.gouv.fr/squelettes/css/styles.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://adoption.gouv.fr/squelettes/css/styles-login.css](https://adoption.gouv.fr/squelettes/css/styles-login.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://adoption.gouv.fr/plugins/videos/theme/css/videos.css](https://adoption.gouv.fr/plugins/videos/theme/css/videos.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://adoption.gouv.fr/local/cache-css/cssdyn-css_barre_outils_icones_css-7721b081.css?1598969252](https://adoption.gouv.fr/local/cache-css/cssdyn-css_barre_outils_icones_css-7721b081.css?1598969252)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://adoption.gouv.fr/squelettes/css/print.css](https://adoption.gouv.fr/squelettes/css/print.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://adoption.gouv.fr/plugins/oembed/css/oembed.css?1615990258](https://adoption.gouv.fr/plugins/oembed/css/oembed.css?1615990258)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://adoption.gouv.fr](https://adoption.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://adoption.gouv.fr/plugins-dist/mediabox/colorbox/black-striped/colorbox.css](https://adoption.gouv.fr/plugins-dist/mediabox/colorbox/black-striped/colorbox.css)
  
  
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
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=4&page=article](https://adoption.gouv.fr/spip.php?id_article=4&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top`
  
  
  
  
* URL: [https://adoption.gouv.fr](https://adoption.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=2&page=article](https://adoption.gouv.fr/spip.php?id_article=2&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=6&page=article](https://adoption.gouv.fr/spip.php?id_article=6&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=1&page=article](https://adoption.gouv.fr/spip.php?id_article=1&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top`
  
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=27&page=article](https://adoption.gouv.fr/spip.php?id_article=27&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=26&page=article](https://adoption.gouv.fr/spip.php?id_article=26&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=5&page=article](https://adoption.gouv.fr/spip.php?id_article=5&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=520&page=article](https://adoption.gouv.fr/spip.php?id_article=520&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=85&page=article](https://adoption.gouv.fr/spip.php?id_article=85&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top`
  
  
  
  
Instances: 11
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=img src=http://eregie.premier-ministre.gouv.fr/1/www.sante-jeunesse-sports.gouv.fr[RANDOM]@Top</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D5%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D5%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/robots.txt](https://adoption.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/sitemap.xml](https://adoption.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2F](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D85%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D85%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D6%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D6%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D1%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D1%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D2%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D2%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D26%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D26%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D27%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D27%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D4%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D4%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D520%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D520%26amp%3Bpage%3Darticle)
  
  
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
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=26&page=article](https://adoption.gouv.fr/spip.php?id_article=26&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `JKTujXWeuD4aq8FBJp4cRQcHTIx//T8S5Njh1BWEeFWLfuwQ/ppd/5uVSvBn4m3SJmk8w9SEAg3s5UQM2Bjnb59FF6h8L2M9wU670h/FsxPRYVLpXt/5/HLH7RUFgw==`
  
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/CjvBJxStQWjn0gqJlLL3fNyljz02UIB/Nb8wljsenVubWCsYTSRrkTG0gxJ/gQDIo3gVabovt8hagzxEjNokEuq1ZU=`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=1&page=article](https://adoption.gouv.fr/spip.php?id_article=1&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `JKTujXWeuD4aq8FBJp4cRQcHTIx//T8S5Njh1BWEeFWLfuwQ/ppd/5uVSvBn4m3SJmk8w9SEAg3s5UQM2Bjnb59FF6h8L2M9wU670h/FsxPRYVLpXt/5/HLH7RUFgw==`
  
  
  
  
* URL: [https://adoption.gouv.fr](https://adoption.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `zHf/II7DjgBfFxgqJlLL3fNyljz02YpqpZVkYyiI0wwHRH4NmyTd/0TopJX6fWApWPPzjsZAH8E8q9ewWLtNVfhV65g=`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=27&page=article](https://adoption.gouv.fr/spip.php?id_article=27&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `JKTujXWeuD4aq8FBJp4cRQcHTIx//T8S5Njh1BWEeFWLfuwQ/ppd/5uVSvBn4m3SJmk8w9SEAg3s5UQM2Bjnb59FF6h8L2M9wU670h/FsxPRYVLpXt/5/HLH7RUFgw==`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=4&page=article](https://adoption.gouv.fr/spip.php?id_article=4&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `JKTujXWeuD4aq8FBJp4cRQcHTIx//T8S5Njh1BWEeFWLfuwQ/ppd/5uVSvBn4m3SJmk8w9SEAg3s5UQM2Bjnb59FF6h8L2M9wU670h/FsxPRYVLpXt/5/HLH7RUFgw==`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=85&page=article](https://adoption.gouv.fr/spip.php?id_article=85&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `JKTujXWeuD4aq8FBJp4cRQcHTIx//T8S5Njh1BWEeFWLfuwQ/ppd/5uVSvBn4m3SJmk8w9SEAg3s5UQM2Bjnb59FF6h8L2M9wU670h/FsxPRYVLpXt/5/HLH7RUFgw==`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=2&page=article](https://adoption.gouv.fr/spip.php?id_article=2&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `JKTujXWeuD4aq8FBJp4cRQcHTIx//T8S5Njh1BWEeFWLfuwQ/ppd/5uVSvBn4m3SJmk8w9SEAg3s5UQM2Bjnb59FF6h8L2M9wU670h/FsxPRYVLpXt/5/HLH7RUFgw==`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=7&page=article](https://adoption.gouv.fr/spip.php?id_article=7&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `JKTujXWeuD4aq8FBJp4cRQcHTIx//T8S5Njh1BWEeFWLfuwQ/ppd/5uVSvBn4m3SJmk8w9SEAg3s5UQM2Bjnb59FF6h8L2M9wU670h/FsxPRYVLpXt/5/HLH7RUFgw==`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=6&page=article](https://adoption.gouv.fr/spip.php?id_article=6&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `JKTujXWeuD4aq8FBJp4cRQcHTIx//T8S5Njh1BWEeFWLfuwQ/ppd/5uVSvBn4m3SJmk8w9SEAg3s5UQM2Bjnb59FF6h8L2M9wU670h/FsxPRYVLpXt/5/HLH7RUFgw==`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=520&page=article](https://adoption.gouv.fr/spip.php?id_article=520&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `JKTujXWeuD4aq8FBJp4cRQcHTIx//T8S5Njh1BWEeFWLfuwQ/ppd/5uVSvBn4m3SJmk8w9SEAg3s5UQM2Bjnb59FF6h8L2M9wU670h/FsxPRYVLpXt/5/HLH7RUFgw==`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=5&page=article](https://adoption.gouv.fr/spip.php?id_article=5&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `JKTujXWeuD4aq8FBJp4cRQcHTIx//T8S5Njh1BWEeFWLfuwQ/ppd/5uVSvBn4m3SJmk8w9SEAg3s5UQM2Bjnb59FF6h8L2M9wU670h/FsxPRYVLpXt/5/HLH7RUFgw==`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>$��u��>\x001a��A&�\x001cE\x0007\x0007L��?\x0012����\x0015�xU�~�\x0010��]���J�g�m�&i<�Ԅ\x0002
��D\x000c�\x0018�o�E\x0017�|/c=�N��\x001fų\x0013�aR�^���r��\x0015\x0005�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://adoption.gouv.fr/robots.txt](https://adoption.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D5%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D5%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D4%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D4%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/sitemap.xml](https://adoption.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D27%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D27%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D520%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D520%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D26%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D26%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D2%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D2%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D85%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D85%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2F](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D6%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D6%26amp%3Bpage%3Darticle)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D1%26amp%3Bpage%3Darticle](https://adoption.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fadoption.gouv.fr%2Fspip.php%3Fid_article%3D1%26amp%3Bpage%3Darticle)
  
  
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
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://adoption.gouv.fr/squelettes/js/jquery.js](https://adoption.gouv.fr/squelettes/js/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://adoption.gouv.fr/squelettes/js/jquery.js](https://adoption.gouv.fr/squelettes/js/jquery.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259](https://adoption.gouv.fr/prive/javascript/jquery.form.js?1615990259)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 21
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected 18 times, the first in the element starting with: "	select,", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=5&page=article](https://adoption.gouv.fr/spip.php?id_article=5&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>
					<img src="squelettes/img/spacer_linkleft.gif" alt=" 1. Je souhaite adopter" width="145" height="39" />
					</a>`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=2&page=article](https://adoption.gouv.fr/spip.php?id_article=2&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>
					<img src="squelettes/img/spacer_linkleft.gif" alt=" 1. Je souhaite adopter" width="145" height="39" />
					</a>`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=1&page=article](https://adoption.gouv.fr/spip.php?id_article=1&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>
					<img src="squelettes/img/spacer_linkleft.gif" alt=" 1. Je souhaite adopter" width="145" height="39" />
					</a>`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=85&page=article](https://adoption.gouv.fr/spip.php?id_article=85&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>
					<img src="squelettes/img/spacer_linkleft.gif" alt=" 1. Je souhaite adopter" width="145" height="39" />
					</a>`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=27&page=article](https://adoption.gouv.fr/spip.php?id_article=27&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>
					<img src="squelettes/img/spacer_linkleft.gif" alt=" 1. Je souhaite adopter" width="145" height="39" />
					</a>`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=4&page=article](https://adoption.gouv.fr/spip.php?id_article=4&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>
					<img src="squelettes/img/spacer_linkleft.gif" alt=" 1. Je souhaite adopter" width="145" height="39" />
					</a>`
  
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>
					<img src="squelettes/img/spacer_linkleft.gif" alt=" 1. Je souhaite adopter" width="145" height="39" />
					</a>`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=26&page=article](https://adoption.gouv.fr/spip.php?id_article=26&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>
					<img src="squelettes/img/spacer_linkleft.gif" alt=" 1. Je souhaite adopter" width="145" height="39" />
					</a>`
  
  
  
  
* URL: [https://adoption.gouv.fr](https://adoption.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>
					<img src="squelettes/img/spacer_linkleft.gif" alt=" 1. Je souhaite adopter" width="145" height="39" />
					</a>`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=6&page=article](https://adoption.gouv.fr/spip.php?id_article=6&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>
					<img src="squelettes/img/spacer_linkleft.gif" alt=" 1. Je souhaite adopter" width="145" height="39" />
					</a>`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=520&page=article](https://adoption.gouv.fr/spip.php?id_article=520&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>
					<img src="squelettes/img/spacer_linkleft.gif" alt=" 1. Je souhaite adopter" width="145" height="39" />
					</a>`
  
  
  
  
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
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=2&page=article](https://adoption.gouv.fr/spip.php?id_article=2&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=26&page=article](https://adoption.gouv.fr/spip.php?id_article=26&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=1&page=article](https://adoption.gouv.fr/spip.php?id_article=1&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=27&page=article](https://adoption.gouv.fr/spip.php?id_article=27&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=520&page=article](https://adoption.gouv.fr/spip.php?id_article=520&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=85&page=article](https://adoption.gouv.fr/spip.php?id_article=85&page=article)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=4&page=article](https://adoption.gouv.fr/spip.php?id_article=4&page=article)
  
  
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
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/robots.txt](https://adoption.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr](https://adoption.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://adoption.gouv.fr/sitemap.xml](https://adoption.gouv.fr/sitemap.xml)
  
  
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
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1598969252`
  
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1614772805`
  
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615990259`
  
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615990258`
  
  
  
  
* URL: [https://adoption.gouv.fr/](https://adoption.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615990257`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1598969252, which evaluates to: 2020-09-01 14:07:32</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=85&page=article](https://adoption.gouv.fr/spip.php?id_article=85&page=article)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=2&page=article](https://adoption.gouv.fr/spip.php?id_article=2&page=article)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=27&page=article](https://adoption.gouv.fr/spip.php?id_article=27&page=article)
  
  
  * Method: `GET`
  
  
  * Parameter: `id_article`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=1&page=article](https://adoption.gouv.fr/spip.php?id_article=1&page=article)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=26&page=article](https://adoption.gouv.fr/spip.php?id_article=26&page=article)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=26&page=article](https://adoption.gouv.fr/spip.php?id_article=26&page=article)
  
  
  * Method: `GET`
  
  
  * Parameter: `id_article`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=27&page=article](https://adoption.gouv.fr/spip.php?id_article=27&page=article)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=85&page=article](https://adoption.gouv.fr/spip.php?id_article=85&page=article)
  
  
  * Method: `GET`
  
  
  * Parameter: `id_article`
  
  
  
  
* URL: [https://adoption.gouv.fr/spip.php?id_article=85&page=article](https://adoption.gouv.fr/spip.php?id_article=85&page=article)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 9
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://adoption.gouv.fr/spip.php?id_article=85&page=article</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [a] tag [title] attribute </p><p></p><p>The user input found was:</p><p>page=article</p><p></p><p>The user-controlled value was:</p><p>article 350 du code civil</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
