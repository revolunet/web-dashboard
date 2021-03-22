
# ZAP Scanning Report

Generated on Thu, 18 Mar 2021 20:10:16


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 4 |
| Low | 11 |
| Informational | 10 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Hash Disclosure - Mac OSX salted SHA-1 | High | 2 | 
| CSP: Wildcard Directive | Medium | 5 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - PHP | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 12 | 
| Absence of Anti-CSRF Tokens | Low | 10 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 12 | 
| Cookie No HttpOnly Flag | Low | 11 | 
| Cookie Without SameSite Attribute | Low | 11 | 
| Cookie Without Secure Flag | Low | 11 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 11 | 
| CSP: Notices | Low | 5 | 
| Dangerous JS Functions | Low | 9 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 3 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 10 | 
| Loosely Scoped Cookie | Informational | 1 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 3 | 
| Retrieved from Cache | Informational | 12 | 
| Storable and Cacheable Content | Informational | 8 | 
| Timestamp Disclosure - Unix | Informational | 11 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 9 | 

## Alert Detail


  
  
  
  
### Hash Disclosure - Mac OSX salted SHA-1
##### High (Medium)
  
  
  
  
#### Description
<p>A hash was disclosed by the web server. - Mac OSX salted SHA-1</p>
  
  
  
* URL: [https://www.ars.sante.fr/sites/default/files/js/js_wBDemNmCDC3kWan0BYh6tB6nXy9odsYqsH89G1i46kM.js](https://www.ars.sante.fr/sites/default/files/js/js_wBDemNmCDC3kWan0BYh6tB6nXy9odsYqsH89G1i46kM.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `012121212121212121212121212121212121212121212121`
  
  
  
  
* URL: [https://www.ars.sante.fr/sites/default/files/js/js_wBDemNmCDC3kWan0BYh6tB6nXy9odsYqsH89G1i46kM.js](https://www.ars.sante.fr/sites/default/files/js/js_wBDemNmCDC3kWan0BYh6tB6nXy9odsYqsH89G1i46kM.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `012323232323232323232123232312121212121212121212`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that hashes that are used to protect credentials or other resources are not leaked by the web server or database. There is typically no requirement for password hashes to be accessible to the web browser.      </p>
  
### Other information
<p>012121212121212121212121212121212121212121212121</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage
* http://openwall.info/wiki/john/sample-hashes

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, script-src-elem, script-src-attr, style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/MinSoliSante/lists/ars" rel="nofollow" target="_blank" class="social-links--item ars_social__twitter" title="Twitter - ministère des solidarités et de la santé (nouvelle fenêtre)">Twitter - ministère des solidarités et de la santé</a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/MinSoliSante/lists/ars" rel="nofollow" target="_blank" class="social-links--item ars_social__twitter" title="Twitter - ministère des solidarités et de la santé (nouvelle fenêtre)">Twitter - ministère des solidarités et de la santé</a>`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/MinSoliSante/lists/ars" rel="nofollow" target="_blank" class="social-links--item ars_social__twitter" title="Twitter - ministère des solidarités et de la santé (nouvelle fenêtre)">Twitter - ministère des solidarités et de la santé</a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/MinSoliSante/lists/ars" rel="nofollow" target="_blank" class="social-links--item ars_social__twitter" title="Twitter - ministère des solidarités et de la santé (nouvelle fenêtre)">Twitter - ministère des solidarités et de la santé</a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpg](https://www.ars.sante.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/MinSoliSante/lists/ars" rel="nofollow" target="_blank" class="social-links--item ars_social__twitter" title="Twitter - ministère des solidarités et de la santé (nouvelle fenêtre)">Twitter - ministère des solidarités et de la santé</a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.svg](https://www.ars.sante.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/MinSoliSante/lists/ars" rel="nofollow" target="_blank" class="social-links--item ars_social__twitter" title="Twitter - ministère des solidarités et de la santé (nouvelle fenêtre)">Twitter - ministère des solidarités et de la santé</a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js](https://www.ars.sante.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/MinSoliSante/lists/ars" rel="nofollow" target="_blank" class="social-links--item ars_social__twitter" title="Twitter - ministère des solidarités et de la santé (nouvelle fenêtre)">Twitter - ministère des solidarités et de la santé</a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/MinSoliSante/lists/ars" rel="nofollow" target="_blank" class="social-links--item ars_social__twitter" title="Twitter - ministère des solidarités et de la santé (nouvelle fenêtre)">Twitter - ministère des solidarités et de la santé</a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.png](https://www.ars.sante.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/MinSoliSante/lists/ars" rel="nofollow" target="_blank" class="social-links--item ars_social__twitter" title="Twitter - ministère des solidarités et de la santé (nouvelle fenêtre)">Twitter - ministère des solidarités et de la santé</a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpeg](https://www.ars.sante.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/MinSoliSante/lists/ars" rel="nofollow" target="_blank" class="social-links--item ars_social__twitter" title="Twitter - ministère des solidarités et de la santé (nouvelle fenêtre)">Twitter - ministère des solidarités et de la santé</a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.gif](https://www.ars.sante.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/MinSoliSante/lists/ars" rel="nofollow" target="_blank" class="social-links--item ars_social__twitter" title="Twitter - ministère des solidarités et de la santé (nouvelle fenêtre)">Twitter - ministère des solidarités et de la santé</a>`
  
  
  
  
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
  
  
  
* URL: [https://www.ars.sante.fr/system/files/styles/vignette_654x449/private/2018-05/2018_panorama-ARSCVL.PNG?itok=y0I3zJhf](https://www.ars.sante.fr/system/files/styles/vignette_654x449/private/2018-05/2018_panorama-ARSCVL.PNG?itok=y0I3zJhf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=Ã\x0017X5>ß~ÂÕûÿâÇÿüwïÞºs¬¤Ó~z¿{ÿ`5ô\x0007±WL®Õ¦=vÐÆ\x0002\x0010By|ÚSÚvì\x000c»£õ\x0012z2 Z9ï\x0018·`bðO%¦ycÈ\x001có\x0007ärd³>9\x0010\x0008Y_AÞ==÷=q)Ï÷M?)l;iÇ¡\x000cËI\x0019ÚxbÌÍ4ªäÿVú
sJ3ÂvDC|<\x0014t~ô¸Â)ÊÈ\x0018iØá9ç÷ÄkÄjWhÞ4yÚËYÂõRsÃ\x001e¢q||ãIâO\x001dH\x0013\x001dc*&\x001aþ\x0006\x0015c¦	÷ÉäÍ\x0001UM9\x0017Vï¦\x0014b¬²
È®c¬ªÊ!dØ"\x000e\x0004\x001bY\x0008¨¢ð\x0006ÔñiÉø«\x001aYÆñØ¤B½\x001el[ka¥Ò­\x0001¹l=%Å°Qµ0ÌPu5PJýú<tN¸NeE]\x0003DØ{Åúl¾>ÖC5ú>îoéaMü
°twÑ¡\x001fÍM\x0004mý \x0003Wð®K;¼T\x0012\x0010\x001aÂ£g-3Z­AE	Ò¯#,£õZPc5¬\x0000DU¸£þæJ®q\x0003ÂQYL\x0016Â?8Èqì r(1[ø\x0002ÛDÛð¢Dù øð¬úí¦AÛuØ\x001f;tV\x0015¸|\x0006+O ¹d\x00050àØíe\x0001\x0001´O¯v¼%a\x001cÁÎ\x001a\x001fæc!\x0005¡Z\x0008\x0018Ó\x0002R¢ \x001fÎdí°\x0007ûL@\x000b×ÝÁíE\x000b\x0017²ÜúËOI\x000cÉp}6Ò\x000fy}\x001873>un\x0010\x0016<\x000eNëP\x0014\x0012®ÑØ<ª¥\x0001t~]Æ¸\x001b\x000b\x0005\x0012\x000bÐâ\x0004¨0Báp0hµaOßrLb
uÔWøEþÂî\x0016ÐÄÖváâ­9àîp¸½C!%êrR-P\x0016.|¾®+(!\x000fU	§\x0003T\x0012Prl\x001a9jÑ.¯ÜXFg\x000cöûý\x0010ö¯u¶k¡¶Ö=4õèèã\x000b\x001d=o\x0006\x0004V\x0004nÚøú\x0015EÇx­£aGóKPª*\x0016îÁ)iè×O\x000c¢q7Øá\\x000b0vk¼{ÿOÜßüÓ×xyög|³çøË«\x0017èÑ1c4¸»¿ÇÛ_Þã§7opuu\x0005-\x00046''Ø¬7X¯Öh%N\x0013,+¬×k,
êºÂ³Õ\x001aP0æýá\x000ew7\x001fð¯÷oðóÛ+¼ýí\x0017üöå#Z}\x0000\x0016\x0016ÆY¤z\x0004Úãó½\x000c\x0002í9\x001b¶\x00033\x0004\x0006R-ÁT íZwº|\x0008~t9e 3\x001a·Ä!L\x0019\x0017Ê¼Æ1h¢ÈÑ³cS@ÉN^}ÒÔeAß¢\x001aûÚ\x001dxïÊ¦ì½:ÿ»ÙÓá\x000eqD\x000cÅÕ\x00113QþJNd6O:vÆg\x0007æ`N ªÇDêLÙ4¢i­_#\x0005ò7yM¦áðùl{Y&fjMIÙÁñ1\x001fØã¡Ûsê\x001b$­£Ið\x000f\x0010Aö©BÍAHEO5\x00194\x000c#;
\x0018
\x0002S{Q:0\x0004O6}¬È@)Ñ\x0008o\x0007\x001büíÏ&â×±ã\x001dâ`LTIÞ½ëâXlÔ«Ü¿¿¡%!8la2\x001bN\x0006%qÌ\x000cÃ\x0016:È¥\x001cB1¬?\x0007yzãâ\x0000Wé×e@\x0012\x001b±\x0016s±­lM,uê[|Haýï&ògËÐlAìã°\x0007Ù)øÁQß\x0000>ë,ÌUÃÒ ×sÃ£ÆÑX\x0014R\x0002²t_¤<Q­+'\x000eºß
ã\x0008ÆÝ¶ÃÛ=~Ú\x001e½Ôâ¦.p±^ 8­`- Hàh,\x001ev\x000føøå\x0016ÛíÎi,'À¾\x001bÂúÐ\x001fm%NÏ(\x0008Ë¦Æ\x000f¯N!J	\x0008á\x0010Öàßÿ»ÇÃá\x0008£\x0001Á\x0012l
þúb\x0017Ï\x001b¬+å.(AW¼s\x0001:CðÔ¢Ëâ+¡Ê\x0015äb\x0003\x0014\x000bh\x0012^6æR4ÎÝFâò`Zp\x000fÔ
£µÙC\x0014\x0007H!Q(O³
g\x0008ë¿Æ>qcæ±¿mX.ú¡ÑZãÏB«{Ñ\x0006\x0017þ~|ë)´é
?½\x0006¸qÃ«ÁÎ\x0018\x0014\x0015ÖÍ)6«\x0013\x00147\x0005´\x0019#¦QÇ¹k,\x0007XA§[ÜÜ_£}8âóÇÏ8Ý£YnP/(ë\x0015êÅ
e¹Áéföâ\x001cVw8]oP®×NO}r¦q\x0006³JÎ#Ü\x0003¶î:\ýú3ö»\x001dî·qsÛí
Þú»\x001bl\x000f{hÖ\x0010 É\x000e¾ð0úr-/½ac!,C\x0008B¤`Ñ¶­UDyy#íOs.¢¬æ/ã~OÑ>â\x0008\x001f§o*Ê@Öæ¦ÞÞÊH®¦ãeÚã\x0011R!­Í	¦\x0018IºhjyZ\x0002zêZÎå\x001f">æF\x0006N\ÆôX[KH§¤ô¬_±Öçðs\x000cÖ:CeGÔü°×ò,i¯ä°i*A%ÓX¤³|0Ç\x0000Ó»T ¦\x0006*ä\x0000·dp¥\o5\\x001eðW1Á9á+}eç\x000fOFãâ¦{2,&È`t@g\x001cmLÈ,LÒ Ãñëqæ¡-l\x000fà\x0000fæìzÄ\x0018\x0008G\x0007#<>7q¶E)ï®2\x00148¿Õ\x0007NÃfâc¢÷Ë\x001eíäÌZÌÑ°ñÍ\x0013ø¸X\x000f\x0018'\x0018#%\x0007|¼¤\x000f!áÐ<Tfêø,ñÐ»\x001b®<¢éD~Æ|'j\x0004ú¦92)74öë£Ù¢Õ\x001aÎ`¡\x0014 jP±\x0000T
6%ÀÚcPf¦	ÂýÑÿgìì~ã6®(þ»Cr¹\x001fZIv\x0012;®8-Ú¦-öµèCÿùö¡H\x0002AÔh\x0014M\x0010Ç\x001f-­´\x001färæö\r3+éÉ \x0015wÃsÏ=÷­À\x000fë\x001d_|Í_í)òB¯y¸òÙ÷OK¦Ù\x0004ÈXï*¾}qÁßÿñ\x001f^¾Á
NÈ\x0011qá\x0005Uh!Ã¨eVd<}òÇ\x000fKÏ cÊÖòùw¼|{E]\x000bF¦¨µpF>PNrJo}:\\x000bÒ»¡
´³¹¡\x0000c&KÌä\x0014Ífì5c×8ön\x000bQAz×Ôkÿ\C§ÃSyXNÛd\x0011CÓù\x0003\x001aLÝ2sF\x0004#¦<Æ\x000b;pX×`ë«î0ÑV®aÕy{ó"ËÂ5¬]\x0002N°7\x001ciÄ¨\x000c\x0007Þv*Ôe»·%óòÅôÌä^ºô¶HJ~\x0015\x000cÉG\x0014NkêÆÑ¸-7ë\x000b®¶/ÏN(Ë%eÙþ{vöÅÉ9§'%ógÏp\x001f=£Îs²¢@²6c|Wm¹©V¨*³éi9¥ªvüëëòæâ5«õ\x0005úõvÃuµbßX¬3\x0006\x0015Åa{YÏ\x0010\x001f§QÓ`Øxðò-(9E^b$k-ÁöMç\x000eu¤pç°zC­nÑÓ	º{±\x001eN¢\x0003/Åé(FC«Où`\x0004°$Ì3öÚæý h·§Ê(²PF-\ñX	Iy\x0016\x0006\x001erD*v.¢Íþu¢£Ó"Ä\x0001aªpü4¦k*uåEA\x0014`jæÀªD	G\x0001\x0001 >s9\x0002ê{LK"½NFÔ¸\x0004D\x0006Óæ	à7NQî4'ªìOhUËÑ?Æý¥#ßR=R9\x001d\x0016á8\x000e'a¬yøº5Ö?kHh#F\x0006 ã±`U%1/\x0016°Ã
Qh±ôºI\x000f5\x001dDÙ$ö*¡ÝçkÆ`äp	\x0019
ÕÀ\x0019úvä¯Ä,U5\x0004·ÿ\x00006\x0007ÍäÀà¹Øû´\x0019yêóK×âî_\x0012Îáà\x0014oÁkÔ]ê\x0007':C¿AG:6[×hÏ\x000e§RT\x0019îË\x0016$µ©Klqá×ÿH\x0007\x001cmÃ¦Þ³eH1',1Å	®¢Ô­\x001f ¸  ÔÑ=Ü\x0019x¹Ùñåë\x001bþò?ÇlZ2m6|øPÈgß»b:ÁXXW\x001b¾ý¿}ñÿ|ó_ä­L k×\x001dÚÖh@T(\Ö\x001a-Û=ËiÁ¯?û\x0005úã/Y,JLÑ\x0000/\óÕ÷\x0017ljÉ`-xóhÎÃNã¦:°Õ\x0019i9èÑ´õoT³ !ù)V¦TÖ°³½s\x001ep\x001cÚ<\x0003N÷ü	ÙÃ½í´Ä\x001d°\x0010	DüÙuÑÖ\x001b\x0014µ]TßaY¸îïtüWÇ$öÏ×ÞÔ\x0000!A\x0006£C¼_[è×\x000eµG£½6:ém¥öVÙÖ{ÔeL\x0005ÓrI\x0016­ÎS\x000e\x000cg\x000bÜí¨°U¯¥6¼g\x0007²Gih:ð¶¯®ØÙ)Ùz1sr3çÚòXàÁé#Î\x0016§\x0018Éy±ºäf}Íj}Ãj½bµZqs}É2~øO~ò,3¼¹|Å7ß}ÍÕúÆlÛ§Â"y\x0004ãDÛxÑõñY0ñäÐN4¡X)ù)e1CÄ°WG½oú)ôá×qÔÓ(¼"\x0012hÊF ' I¼Lqÿ\x001a¡~nDÆLRÂ_q\x0018ì\x0018á1xè4ã>#sx\x0012¬¯Q5-~u\x001e»8¦i aû¸¦hWt	\x00004ZÑ	Ý¦\x001cN±\x0001¯ÞýIç:\x000fÃ°cÆ91Iîï\x0002Ô±A\x0004ûð\x001ed\x000cª½*Ä\x0014)FZFg¦¯\x0011ïc%£5¡OõðûÁÏ\x0018°\x000e\x0007Y \x0008y«\x000bö/@Á}¨G\x0011l`tï9i\x001dcïôÇpýµ(Gu>8ò%\x00169kâ¢c}§2Ü0®ëÍ
\x001cèf$:;\x0002¤#ôC+·bÄ(Ç\x000b\x001aaDI×\x001cxmpI\x0005¢Ê°KZp{KóÑ²DüÏ\x0011Ã6ùðü	wYB\x0008áD;Ñ~é±R\x0012¯5ö	¾«h=HûÀ5êØÖ5×»-\x000f9³bN9{-\x001f°Û,Ñ¦ê
³1n80é&_ÅXj½ãr»çrgiLN³o¸ÙíÙÖ
V[u¡1 Fi´a½Ûry½ÂIkQ¤b\x0006\x0000ÙW\x0000m`^®\x0006qÚfGkIe«6&Sªßd\x0019{°µ\x00197ûÖÌ;\x0013ÃÖ:j´ \x000c¾õÖè`ê]ãÈpã²\x0005EyÉÏ©µ¤²°µ\x0016ë)>{è(ê\x0015\x0018\x0012¤¸E-DØp(g`Ë½âÆã¨ý¢T$u¯sÄài\x0005\x0007\x0000ã3{ø9ç"AHë%+c÷\x000bÖfoÙ­éööE¶±TuÃÞµ:çb2gZ³bPuïÁ
±{,ctÞyÍs§v\x0018[Ï¥\x0005ýRc1¨+@\x001a&\x0005ËåûH>ãÍõ\x0017¯xþÝ×¼½zÇåÕëë5U]QmjÊé\x0014ÅñÓgðéÇò«\x001fÃÕjÅM}CÕìÑ,Ü
:N¥]ó\x0003°O3\x001bÎ»~H¦\x0003oFM\x001b¿e,\x0005ï-ßcVÎ±b¨¥j\x001aìa
Ûë\x001c\x000cû½&²5ÝJí\x0007\x0014H@¨\x0011\x0016¼VûóQ\x0003<[DbîÚÊk¦±V¼áÊ\x001d­äègã}R\x0013{gJ~&^2Gga¢Ï§\x0001¸ÿZMèûÆÔñ¶¸H|ÿS?\x000bD\x0002þó¤x\x0003\x0003\x0003\x0018\x0018 KÌ\x001c\x001fkó\x000fî/\x001eQsD*#â\x0004YFÔ±½mmxÖNÉá\x0018\x001do&£y²
\x0008ÙÃ\¼Ã!^ã\x0005²\x001dÛ\x00001\x0003)\x0003<²= lÓ\x0013Z£^nW^FýõPË\x001c´RÀb¬3Ð¤nK\x0013¦ãÆ¶×ªq¥$#õ`ªíjëÞG3ÞPnï
Å\x0004:Òx\x0004dt\x0015éÛo\x001aù
Õ¦eÅ·Ê"Y\x0003)Ûà#dm×F¯Õ±¶7ë\x001b\x001eRN\x0017\x0014óGL\x001f±»¾\x0002[uàLÚ\x0014\x0019\x001c8±¨4¨ì\x0011°\x0001ÖfÂ¶8¡C]\x0014º¥Z³nÀ¥\x0003pA¬ýiYGëÄÓJ
àÎV'\x0006
µ\x0011¶lÁ:2«Cç77¸é{È¢¡RËNçLnÙ\x0008Ô]KûàÙ(\x001d\x001b`´\x001dvÐÌâÌ\x0004ÏòCå§d³Ù5\x0013Þí*.¶\x001b¶®eÈ\x0002ö=y×ã6¶­»ÞÀþ³Ê8â~D@\x0019ðè-lè-¸
\x001d
Þéý´=z\x0014(ï.\x001dÞ§*uÓp½^³9_2M9={Â£÷?ãÝÛ\x0006á6Í&*È´gã17Øzx/\x0006+U\x001bAM99óóý2ÿ/¿ý¿>ÿÿ²«kn\x001b9=»\x0004AR¤¾lÏV9ç<%¹«|üÿ{IRÉË%\x000fÎ9º³lI\x0004	`wò°\x000b`vvAÉåBY¤(\x0012\x0000ÝÞîþfÿ\x000b\ß¡çØço\x0008Õr¦Ä?þý/lWk\_½Ä\x001f¿ÿ3noïð©ip÷K\x000f\x0010Ð\x0019\x0017×L\x000e`\x00174°¤´Î\x0002ù`\x000c\x0016§.\x0003b\x0003ë,¨p¾¸Àû×ï±Ý]âÀOû\x0003îö{tÌpB³=\x0012NÉÀ]b]hOgíÇX$\x0013dw/f\x0014åZh"+(:ê\x0006çá\x0001²´]°a¬Å¡¼	ÓÒ'ù/·öÑ¦ÖtâøÒùYkóï¢Öô	©\x000724Ã
ÌÉ*\x0013'%Ý<Þgª¡\x0019q¡ª®\x0005RÆìRu´ÆQ¡^§¯\x0001<ñ\x001938NÜ\x0017¥ó\x0014ê'ztÆ\{ÿ)ø ô<\x0015$Ñ×)&\x00130ÃÊ/§\x0006\x000fV¯\x0013\x0010«|Ýsö"Ë%Í\x0015ÈÇ<\x000f¶äþ\x0015"{YA$NöÇãbÁô¡\x0000d&L×L)\x0000ægD~&\x0018Õ0sÍ¥ÞG:ýÆÄP\x001cWúoº¼§N;©\x0005z,\x001b\x0015¨0¡Ïº2'ò	ydcÛãØ98oaì\x001aÕê\x0002¶Þ\x0001¦\x0006c\x0011\x001aFØªÒÜdom0\x000eÍBO¤Ñ\x001f
Â`Bî9ôÒºáñ°
ÏQø,0
YÓÑÚÄ{\x000e¥FïÁ^YtP4@=âaó¨à©\x0006-6°õ\x0016vy\x0006G\x0015\x000eÎ£é:4]>v\x0016	2p.ùöH³Äö1\x0005?M\x000fÀQ\x0008°s Ø½\x001du²QèC\x001f6\x001cÅ
1ÊO<öcÉ\x0019×"Rq¡'¶©Q2¦\x001bjúÍJ©B:ã¼GÛ\x001eqt-À\x0006uµÁùî\x0005Võ\x0016\x0017\x000fùÎv¼²ã\x0019!uK©N1Å-L°Ó\x001ad
qRZV\x000b¬«\x001a}×áþþ3>ÿzæá3ïÃ}c\x0018dB^÷¢2\x00009<ÜÁþÛO\x001fQ-*¬7+,ë*iücöSB¬8ð¤ï:GãbË\x0013À\x0016ÖÖxõâ5®Ï_¢ZnÐy\x001frÉ»n|o>98\x0015r¥5Cé÷Ã\x0005í|¥ÚAo\x0015å\x0015\x001f­\x0017\x000bv>òµ¤¯\x001f¹ J<\x000bU0\x0001O#%Ç6}©\x0002\x001aþl_\x0004C%ó>V{¦\x0004ïYÈH¼¬\x0012\x000cC¦ý×Õ=â²ö<\x0013Á¥Ç\x001e(%\x0015'.~\x0012\x0015E\x000c³\x0004Í\x001c2Sy2åôÜ$\x001få%¿©³§÷%%Ùâ¹r¡:cÎéYñ±Ñxù)&
öJÀì«h¯_ë&\x0016©]Ô	ë\x001c\x0000\x0000 \x0000IDATlS)~8±úïH:í\øC2(év,\x001d§lÌÐ7^Ö&2p'aZ;
ú:,]\x0001³ø¹Ó*îédHÎn.\x0005ÊäÓi\~ù¤TVLÈN¹NTv\x001b(Ù³\x0012\x0008¤çd[\x0015\x0017·åUð\x0000FZ×ãÐ:tÀ¦­w\x0013p\x001c;¬©\x0000Ny°Ç±\x0007{\x0007æÑØ%LûªÁ1`Ç\x0000\x0002<\x0007 èØD»¥hã0l\x0011X\x0005
åd6Þv(Y³÷!O::\x000b\x000eb\x0001½ÇI6ÆÁ\x001a,<`Z\x0001v\x0003ZîÀ3\x001cÙ¢é\x0019û¾ÇÑwcjÌ8Õ3ÔÊ¦|º
E/n\x0000»Cæs<k>b!\x0003c¹ÚÀ!ÁÆS\x0000ãë\x0007F'_Ö$}D,Ò{A3Üé(\x0007Èäo±ª\x0003Ðêû\x000es`O\x00018n¯±YÃR\x0005ò6G=ðË\x0015
K¶>,Z\x0000\x001b
Ä-\x0006'OfÑà\x001dz×¬Ç²2X/\x0017XÁ\x0013tJ\x0017\x0007<\x0005aX\x000bXK0\x0016pìbQ\x001f5\x0012z\x0014\x001dõ\x000cÔÊå°ïÄ\x0006Ö,°ªÏðöÍ;\½5K´CÓ\x001cÇ\x0008×i±ªç&V5"´\å¥ì4\x0006kZKB\x0004ê¤åwÍ¤µik`­D&³\x0018~&¦tD$]*W]Ñ#ð+H\x000b\x0010LÓ\x00112ï@Ñ2r\x0005²ó\x0011;­þ\x0001e\x0006É}Uj¨ä:\x0005\x0017X\x000f
üy~~@i\x0016ÀP"©âÂ\x001a¥'MÈÜ_Àª©	\x0017\x0016î+SÔ"g³Ì0º
ñyß«ã¤çÎ$Ê1bÅ,Jg`1gCuº£iêÊ<¸àìË\x0014¡àm4ËfÎÅ@Äzp\x0017)×u¤è\x001aÊ«\x000e¢|Î]TO+=çV5²»Ós"nöa\x00158\x000c \x001dK\x0018?æ\x000c8¥;ó\x001aÂòj%¤yéÄ{\x000cFÇEý Ë(;õ\x001c\x0017V@¬º«³ÕþéÅËSØ_\x000b'CâÑ9ì\x001d=ÐÓ\x0012¨wX¬¯aª³\x0008\x001e­`¢Ì¸
7­\x0011~{þ\x0000ë[\x0018ßÂ¢\x000fåD%-Aìö\x0011\x0000x\x000fxoÂsÑÆ$x\x0002\x0006ãoië9eÕµ\x0013`û\x001e\x000b×£ò\x000e5z,\\x0007\x0010Çg)e)Æò0\x0019*xZÃ
¸Ú\x0001õ\x0005ÜbÆ\x0011ö]¦ëÐ©\x0012kÖÐ5«\x0005\x0017SÎ\x001aðß#øÚ!ÊoðL§Iû:ÕÐ©?Á \x000eÞæIËô7Ü¾%Õ=%Ì\x0015@(OhL¥Ue`±½Cß;xO°víÙ\x0015vÛk,ì
*vÉÓhNÌ±åÄ\x000bq`\x001d§Nåic\x0010<;\x001c{Ü?~\x0002Ù\x001e/®wx÷æ[¼yñ\x0012uµ\x000cè\x0011\x0000g\x0018\x0002¶
¾yõ
7oopq~Çý\x0003¾ÜÁáÐ\x0000ìc\x0011gw\x000b\x0013)a,'%h4\x0011ì\x0012,*[cwv7¿Áùú\x0012ì-cÃ±\x001d¿ïi,dE\x0016¤µ\x0010Ò­Òe\x0004£X\x001ei(ÎÕcªeJ{\x0007D
S\x0012õVN\x0019È5ÿÏ$ï##\x0006	ÌäÂè>N=Y\x0003«br¥Ì§\x0013$\x0011S,gQZ2\x0015%ù9B+IN\x0008\x000b9PQ¡´UöJLz\x001c¨\x001c}\x0012éÄ|âýõ|HYsÊêÃy·ûçM£\p:\x001e®QÖI94]ë,¯åM.:\x0019\x0010|\x001c9ãR-Ú)Á\®kHØ3:¡V*è\x00062 &4g_gltR\x0016<Tr\x0001ïR\x0017ÉJç"t\x001aÒFCºÖ]ÕRÇ}V2N\x001d\x0015ÇÏÈr*¥1)kOEÎAk
z\x000b9ßD\x0019|Z"ðÔú¢))+Ðd®sEN\x001a\x0011û)ïX<eüN\x000b±\x000bfßò9¹¿õ\x0013òèÑ3îöGlW+TÕ\x0012Ûê\x0002ëË\x001bt\x000f?Áu\x000fð®\x0001è\x0018ÿ¾\x0002P\x0003\8ü¿ Â\x0002=þ\x0011ëö\x000e»UUwºcTÝ\x000eh\x001d0c	OÑ¼>YSO¢sÏ\x00194³ë[´ð8pýv ´\x000c\´
®ÚGPïÑ\x0019\x000fê\x001d¶ö
+
ª³á3ÝÀL\x0014ËåKô´\x0003-.aêkØõ5ÜbÇ¦ÅÃáCÛ
/N\x0000>½
ÌÊEô\¸ÿ¼jrûHv£lüEÏ^î\x0015£+i\x0003 +ÉÊUdOM(³7m¦w8«\x0016X¯¯quõ\x0016·.Ñõ\x0003kv°Of\x000fÇæ\x0005`Ä\x0000a\x0004xÄØî¼Ã¾yÀÇ_ÿåzo^\â/Õp¹;Gõ÷\x001fññ\x001fÑ´ÇàkÙ¶Xñ\x0012ïß}\x001f~û\x0007üþ»ßá|{¿þíG|øù\x0003î\x001fî÷\x0010ÈrïpÒÐ\x0006ØH6Àb¶XU\x001b¼º|o_ß ®Ïp×ôx|Üãxl1%¦ÏTs×Ò³?qéÌuüÌ\x0015ÖWÈq'\x0014V©Af\x0000à³WÀô\x0015·Îÿ\x0019;ç¸Í#ÿúÃJÎâ&jaJ²d»\)W.ùÿïÉ%'WtHå\x0018É*Ë¢Dr\x00063X;\x0007\x000c\x0007ßNªH\x0010À·u¿~ýÞ¼ø´Ý@¡\x0010\x0015Ewæ¿p`Ï&làøÖ\x0005¾×aù{è	Áü¦äÀtq'Ì¿\x0003®\x0000¸ÄUë\x00199æUºVÌkÚg/óòröÆ:\x0001§¾®JÀÈÕ\x0016\x0011\-oG;\x000bÛe\x0013¯¦ºHþ¡ì_e¾$¨\x0012¯\ÍÍ¯\x0003êéóe\#mâ36ÜNO±2I\x001e7nöøøMDb¯?(Îýcoìg´û÷W\x0002ßîo\x0005{ÁÏ9\x001b\x0017{c-â¾Ã\x0014d¹8ÙÏ5/àÖp\x0003
F\x0003ÿN÷qð÷cIM|-\x0011\x0001Iç~VG¼Z\x0012EûNNchºÛõ"ËÈ2C,N_>§Ú|¥©ï\x0010ÝqÁ.`DKÐD\x000c§G9¹Zðëf`ytLÙ\x001a>Yrs¶¤\x0014\x0019ý§ÕÄ\x0006Ða¼¯\x0019\x001dT-\x001auQ{	¡cè\x001bZ£4f\x001c¨Z¡EùÛ3.d`]+ähßqs±à$Ëö#ªvÈ\x0011¨*ô!Ù9ùò9ùéKÌÑ\x0015\x000f½ðeUqWUTMM§=1¢½-¬ìø¬µ\x0018zÌ\x0012Z6ÍÇ%QÛÙAÝdÀÖÅse+Ô)ûY\x001bu?·Á¾\x0016<Ð¼õ§o<\x0006zí |¹[\x0016¦à¤8çæåO|úü\x001fêº£­Ðþ)¾ÊÏ°;¸L\x000411£×³\x000eûÕ0hOÓnùßûÿÒ5=ÏÿÀËg¼ºzÅ«7|øãwnïn¹ýú\x001f?JÎ¯oþÊ/oaQ.ùí·óý\x000f¿ i[$\x0019é\x000eÃ`U\x0008¬R½ö÷ãovã®>\x0008É¹<»âÇ\x001f~æÙù\x000b0M]±Ùlèû\x001eU³õq¿µJ;ã\x0004GõÌ5ÏÂn®xD¸&C	µåEF³ê\x0006iv%IÄjÐP¶åó`ÅB\x001cMêé]öVG»Ú\x00153ýCóZ<1t\x001b\x0018S\x0000\x0019Ö÷±©1êU]Å\x001fCõ¼º%rmn\¦%"ãëNç\óö$opÅjþÄ\x001dFã \x0016ó¬\x000c}Qy\x0011_¿Q¹$øÙnÖ2\x00018êå<bÑ\x001dÆû¤¶\x0011º\x001f¦Å\x0010B÷ÐÕ \x0000pÁøG¾\x0005^-_½Nh
È¯a§×\x0006?'K£ê¼¨=QBk)O\x0005ßQsÄP5¢¼\x001f\x0013Jpû¸\x0002mIo²Úüé9mñr¿/ÌÙ \x001c\x000bø\x0010µtÐL/ë°3\x001eµÇç ².ó\x0019á£!»?.bM~G
\x0005÷dð\x0017\x0010AAýkÖ·²}Ç½`u´fÔh\x0000\x0019\x0004Í3]Aõ*f{9C*PV\x0007VmËý¶á¤,)#ò\x0002Kú\x000e\x0015cxÖ\x0003-HÈøïWg9úöóË%yP\x000e='eÉ³Ó#.:
zT `CÁ\ïÉú;RÓ\x0000£8ø A\x0013Kø^1úxoHUÈeK&\x001d\x0019\x0003\x0019Ýøn9üýÕ	?^fl[¥×\x0004\x0006åíÓB)´F´\x0006*vìUC§%}²DÊkÒÅs£+ºdÉªûºeÓö£%¥Cè\x0017ßúË:8B ÒG\x0017¼ñ}Ê\x0001¤#H\x0018phè¾KÕ~æ sUaNþ\x0004ÏZî1'\x0018TÙÔ=«ªæ¸LX\x00169Ëå\x0015çç/Y­64mE×ß"Æì4BG\x000fç)ÇI<g.û\x001dÌç¸³ø\x00044A5a»íXW[Vë¢Ø@°,Oøùõ	m×±®Ö|þòõCÅÕKªõO\x001fÿàÝ»w|xÿ®iIM2ºÃm¨qXÐû®¢£7wÒ§\x0018\x0012Î\x0017Ü\¿âõË·,ÊSê¦c[·´ÝÀ ìÑôÞêrØc6¸É¶½':×¼Ê­\x0011»¿æ\x0001`¾|â!à:pªÑ¸JtÏvøÆ1d4\x0002\x000b\x0013B\x0005<;;¡%ÝN³øt\x0013¿³5æju¶\x0007
F>\x0012æ¯wçù4I¼v\x001cï¹¿½?ìÏ\x0006ÏQÅ«áÇ5Vü\x0010\x0000"sJ5êýC]\x0000M,°$bÒ\x0003@W¤±:ðò{#â¨õ\x000b !õ&ôÌ´;\x001b©\x0004\*®a½f¦Ná§&äÒE|Ü,Õý\x0010Á~­a áËoF´Û¿YötÐA»\x001d@E+\x000bø¯ówüI\x0010ðQK/×½·§\x001b¸\x0003=ez.]A5Ü4§÷ù\x0018\x001apST\x0008ÅÂ½\x0005=50Y\x001bàÉh=\x0004Zc¶ÅÄG7[\x0005«ôól^\x0019r÷Õê¦í\x0014ÖMËý¦æ´HXd%eñäø¤¹¥o>Óë\x0006\x001e\x0003G\x001a\x001a!¡\x0018\x0006B~]ryQ`\x0004r<IXd°45I/;¼rC®k2]é\x0003ª\x001d¢cà8ê=\x0016\x000cd;Do¶ó\x0005f¨H\x0006CÊ\x0016£-	\x001d£'IO
o.K³®×ÑEáº¨8Î\x0006RZ`\x000bRïl\x0019¤tIºxF²¸üfÈy¨*VÛvïO­\x0001Ç&<`ä;\x0004mùÙ{y49´ÙáRYðÿ³*3»DëzÁM2)Þam¡Ø{)Ý7]ÏzÛ°Þ¤4Ë";áòâ%\x000f÷+ªÍ\x0017\x001a³×Ñtë'\x0005D\x001a8öM2cÀ¤\x0005e~ÊÅÉSÎÏ®X\x001e jøzÇ§?o9>^R%gÇç<Y<¡ïzò<§m:ª¡Ú!Ù#jh0\x0013Ï\\x000f-[\x001ccChÂQ¾äùÓ\x001b^ß¼áùå
Æd¬Ö\x000fl¶5mß\x0007÷ò\x001b\x0005Õ\x000blf¢·Ã\x0015í\x0019jÓ<\x0001ZB?j'Z4º¸^ÐL!ú}"çýmë¼°t\x001a\x0013Ôñ5'u'á¾\x001aå#\x0013·\x001e^âstàVæ-\x0008\x000f¬[uÉðz¨Ô\x001d5`±ùÕ!\x00127ö½§Æà_	5¼\x0018C­JÐ~ÎJøL«·öù\x000b©Äìúüîc'[Ð'8\x0005â\x0008e¢DlqìLÌSiwt\%v;(\x0001; Ã\x000bZ§åçìA\x001aò/£4\x0012ñºf ìé÷mÂªû,ÊÈA¬\x001f°\x001dæ_LSj\x0006ñt²¯Iza\x000c`C´©²##&= Ì¨¯{âv^f8Ý?Â}uHä2ky*1®P\x0014ñ±ç°·\x0003«\x0006¢ï¶ä¹ºh/à\x001a\x0011Dp¤\x0011Äé{¨ÛÕfË]fxr\å§$Ëgdý\x0003ºú®®w\x0008Q
í\x0003ÔQSa4å\x0008È\x0012Xf\x001a#6ê@VwãØ\x001aCÖå;Î-×Ë\x000eÒ\x0016îº¥w\x0005d£{\x001eÛ¸ÚÒu,sá¬¨IÚ¯&ÅH:º«ph2r"\x001fÌ\x00055¦U\x000c-ª\x001b\x0018Öh»\x0001íF~£9Æ\x0014gd'/£kÚdIU\x001bîªªîhwA¨Ê\x0001'ßØ¡ìRxÂ
^ã\x0007³Ní\x0004\x0001A¢±üiÿÏÙýÆm]aüw.9FÒHíXvlÅIlÇm\x0002\x0005<õÿèC\x0003\x0014­4\x000b\x0012\x0007Q\x0012I"ÍFÎð>\x001cÝc¡~³-
9ä]ÎýÎ·ø§ö¶¨H°pMÐ®îN\x0008C¥ÓÕÉ\x00177"T\x0016Åé¢d^ö8ØÙåèð	Ó97ÓsfË>Ø6O>t×kÞ}\x0019OÊ¬\x0016Ré3\x001cìñðèC><~Éþè\x0001ý|Ì|Yòó/§|ÿÝ[vÇ{ìïï³?°7ÙcoÜdhO1\x0018>9ùé\x0005çï.(UJKèIç\x0019±hc\x0008¥uásoï'Ïyúø#&»\x0014åj6g^¬¨¬úi>	»\x001cuª~íô_Öþ\x0012v<\x0008¬sÒÛ½;No×X\x0015:-ê\x000f\x0011\x000c\x001bwt¼\x0000\x0014·æv%'¾ZÚoK\x0012c¨ïÿ\x0017;´ªD¢VølTn\x0015àQ¡£IwÔA?<\x000cS`»­í¨|NÕÎTx¸Pomò\x0015ñò\x001ed¼WªGr½,}¯Em\x00124»ñÚ\x001a&¾B\x0008iDj\x000bý=MGÐ­l]\x001eïº¡°¥\x0010\x001f\x0011]TJdKÏÁ(ù\x0002\x0012:¯-\x001eGCîDöuãÜ
?$îzS2)\x0015\x000b %P_»xfÀþI38M8\x0008Á¨vc °ÎI~\x000fÿ9EoÀAÞÂÂ[\x0012H7ÑDRKWT\KâT\x0015æFh­ÏÁp¹â.4év'!í>í@$ñ\x000eÝVDH×ØëÔ[tUc4XµAp\x0015³±ª©ÓxæåyÁ^	ýÑ#ú\x0013òÞ\x000eÖTïFäºF\x0016WTú
fz\x001e\x001cÛÜû@jEjf[\x0001qÓ\x0014Á¼àIvÎß¯x}p¬öoTê,hmRA B¡\x000e\x0019å\x0007G+Æ×Gt\x0017mRD\x0010È¥öTU¤\x0011³d6oQ	ºÄêjy®
l6¢êï3:|9|É*?dºîñ®Xq]ÔqkµwcW"R7g?-Eé"¥ó?:@FâôÏ"]\x001cæxgê\x0014\x000b$ï5îÍYn\x000e×jhµ¶Ì\x0016k.¯-Ãþ½Ñ	\x001eôX,\x000b¦óSnn®käZÖÍgÚæ]ç\x000e¯²ræ±u\x0010ï\x000c­\x0006dù\x0001Ýxþä/\x001c\x001fÊlVpvyÉ§?ñæÛ7,o*î\x001ba^­øéìW¢`çÁ>÷ï\x001dñìác\x001e\x001f=äÑÑ#ìPùÇ?¿dv:Ç.§5qª\x0018U²æÅW4*öFÍÞäç 6#'§Ï]³Ããç¼|úãûO^óÅó² °JÕúûm¸ÇnlZ\x001aJ¢Ã¡Ð\x000e¹ÃøÑ?·xðh\x000bH§\x0010D\2Jj¤ø÷Ò1îRó¤ç\x001fÍ\x000fº8ñ>\x0012¼ÿ®{\x0015ÿ
¸ôNçD¸DHw\x0017ts¡%àÑ\x000b1¢©¹Ü\x0011¹¸ÿT?,**ÝÎ[ºªsI1X\x0002IJuÔ\x001ez\x0013º\x0006¯U¿é.Oç(\x00008\x00021õo]\x0008yà²ß\x000e\x001eü=P\x001c«nI¨q=ß¬9*à4DÞeKvr\x0007ïMºÅ#\x0011ÉZ¹\x001d'®EÆH®§s\x001aõ=\x001d\x0008ÿek\x0007¹9
«Óý]Câ±\x0006Q`	\x001e;0»UÙÑÛUf[éÛ±â\x0013ÄC¤R|Ô\x0015n\x0017]¡ëº©kÏºÉñÛì4\x0005æå³ßg\x000cÍýÁáø1£õ;Êùlq-æÅJÏ\x0010Bz
6dQê"À´¶PÍf(Y\x001eU\x0005\x0013£üùdêd§)\x001ck°¢¶äA2ÄÚFELcÍÒlà(F\x000cùü\x0007%\x0014bQ­çsKmií\t=nSPÔáº ²B6< xL~ï)eÿiq~³à«97¢Åk³kShx1bÛFÏvy$wþÝíKÀÿq\x001f®/£Jw+ôD\x001cæÔbZP\x0015ïÞÍ\x0018ô\x0017\x001cOFÜ;xZóc³\x000bÞ¼ù\x0017jÚ<c»)\x0012Õ[mp:A\x0008jcíÝñ\x0011G÷qpð!§¿\ò¯ÿË·o¿ã§³·_óúãÏùìÅk,ðÍ÷ßðï¯¿âê«\x0019ãÝ1\x001fÝÌçÏ_ñÅ_¿à³WñÛÅoü|yJ9-égýMËZ\x001a'SÛ è~hkÀalFÏô8¾÷\x0001¿ü#'Ç'G{UÅå|ÆõjV`4C\x0015ªR[Ò¾YÑî\x0016îQ	êU¾u\x0008È{úõ7\x001dyK'Mª­q×?Ú]\x0004Ýý³î 6Ýö»r)\x0016ö%Qõwd|ÉûæfGÛõ®mó÷\x00196$ÆÌ6ê\x001b\x001dàP×5·>ó\x0004ç1Â}Â\x001fÕí.¹\x0004.ä.*ä£\x0013®¯âF9$bÉ[y%J
Ô\x0004ê+ÛFTõ\x0012^\x0011%Ny ÑÂ*yJ^
yv¤-]R§©-6\x0002â´ySßâÑ¥\x0012\x0008×>NÊ«þs\x0007öVÕqBÜUÒ\x0002\x0011È»!ÿ\x0012¨Çbõ-\x0017S\x0005}ªµ\x0011r#}¤¹;Sró\x001d Vw\x0010Ì7\x00058³Ø½m\x001b@MíX	V¹/\x0018ö2,9\x0007½\x0003F»¯è\x001dQ¾dµ8cµþ¾\Å4\x0005b](Ö¦ËÆi.¬
J\x001f£±B?ÏÀ´1Wacú,"[bus¦¹«JLÕ3·AzëVÝÉY³I«dT×>1}\x0006gô\x000f_Q¹Zå\ÍW\ÌKnÊ5+1ØÆ«Ïç;«£Ä÷9¥¡zú¶Íçÿÿ6äÂ?\x0000H§üCCT¼³\x0015s¦7nõ×¥è³\x0003¯(éªyJ¶\x0005YÄÔÇ\x0008«,ÊßgKö\x0006#v\x0006\x0003vw?àÉñ\x001f¸8_ñëåru¥À°¨y§mútq6\x0007	#ôû=\x0006Ã>Y/ãìòïßþÈ\x000f§?r>;gi\x0017ôwúLö'XQã!ÖXfË)ë\x0019%#óéë\x0017L\x000e'\x000cC²<Cí­°R÷gÆ¹mÚä¦iOgÛ\x001eYÕc'\x001fó`ò×þg>fg4aU	7«ë\x0005åJªq\x0018\x0010i
GÓ|O§M½QÇ´\x0008¸JvfÜÖ$ÚQ
K ´MH\x0007cÐYDB§ðh¡\x0011\x000fM£°P\x0013gÍNÙ!\x001d­÷Vc°AS5ÐB\x0004+\x001bL\x000büxmQÎäîóa¬±ú¹Ð\x0012dE; \x0006à³¢Ý\x000e\x001dnfrÊª-1&RêòH©ï¶ì\x0013$\x0014Eo)\x000cÍ³T§Þê:l¨C}\x0008W;÷³6õ\x0004\x0000Ö\x0006V¯õ/áþ°\x0015Ì}\x0002i
ÊT§èÛO;\x0008r9ÕÊôOÝ")"k¨nK \x0010DBpðhb\x0012û[áDº°õ³±ÁF\x001aÅ$°\x0012Hÿ\½IjB-\x001cä\x0012\x0014¼êOÂpPy×4ØékØu\x000fÞ ÎT
¡?8(Òq½v1òZÊÁÔ Õ$|·á"\x0013Ñ/S\x0008jÀ\x0015TèÑ÷Âkw\x0018ù9¶iWUM9_\x0016\,ëÓ3CýG\x000cöFØê75ÕbÆz=\x0005©È(Û%\x0006³±YiZÖäµXÁ¨AÉ\x001b.[
\x0017\x001dÕ¶C\x0013Éh\x001a/?±E³Ô5A{ut\x001f\x0008 `¨ø\x001fcçÙ$×Uá§oÙ
³²K\x0012°q(°q\x0015\x0006ªø÷ü\x0010
llÂ¬
\x0013on>L:¡Ïìêãhwö\x0013ú¼ý\x0006\x0015¡grR®\x0018]=g4ûüò3ªlÂÝ¢ãfU±¨\x001aê\x001e\x0006ÉüÆ«:W	i0~ÇÁ¹\x0003¿%äyÞKLÛ§\x000fÞ©Tâ\x001e\x0012öTñ\x001c"¾\x0005(\x001e)cØ*í ,V\x001bgP\x0014\x0017.yvõ/ÖTíÿ¸+M;@^Çæÿ\x0001¿ÍÝ'\x000eLÈ²^MS±ª7T]E+-R\x0008ù('\x0017¡\x001c\x0017äetJÓÕ¬ê%ëfC/Jåuø`Ü¾'ê\x000b;
\x0005GZ\x000f[>cAA1ä³3]=ãóW_òõ\x0017ßòìú9d#VuÃ|±f½®éûmÐ¥\x000f²\x0004!®«»±!\x001c\x0011«ó\x0015ó C½\x0010$8Éyûu°5\x001cAÄÀL}qÀ7ï5vJ!i&\x0017¨Æ\x0003DÖ-Ê=k\x0018ãÈ\x0003íup´\x000e®L\x0002Ï§ñüädëÛî6\x001a¡\x0017
UÏö<\x00167\x0002Ýý¹Cm Ê¨\x0019<1n ~MÙÿ\x0010r´-êçäâxB\x0016³þÙFùüßÈ«ªÁiWªÏ\x0017
{úú@47	ôÓd¸'\x001b\x0003°ì
R{&<\x0007MÎ«æÝ£n\x001a:QÔÄ\x0013A\x000eëîþ\x0017\x0015«(6Ìd-Wê=¹ï=C¢Eí\x0017`þ	Z@¸pÆi3aæ\x0019ÔÙ"§x(\x001a-6ú\x0000Â\x001a\x0015ë0 \x0011\x0015\x0008¶6*ûoÝ÷Ì7\x0015YQRæ\x0005ççgL§O\x0011^ YK#\x001bºÅ[Ú¡&\x0017Ýù"B¾CP29¾#ê©N:qï±AÔlåî
n=nZ"ûÌf·æ\x000f\x001cóyûhNhÖî³ \x000b²â³ÙsÊ'¯È._Ð\x0017OØÔ-79÷M;ì²±å*G	lÑº`\x0019±k)\x001at9\x0003I¬\x001c¾+tÉ0\x000f4bvT	è
áüóýû$°à°\x000e§þ¡JÔvî\x000fÃ±lîUXm*î0\x001a\x0019#¦£§¼|þ\x0019õ÷´mK×µôCEËz°+ÖUB]¦öM?´´mEßÕL¦#F¬\x0014f\x001bÎØô
ÍÐ\x0017\x0019dJC^
Í0Pr&ç\x0013ÆÓ1vÃº^Óví® ö={¸óÖ«2Lsò!§¤äúâ×/?å¯¾á÷¯¾b4>gQ7Ü¯ÖÜ/W4m¿Ù\x0014$B\x0010 Yµ\x001aûTx@\x0014GÄ\x0012ìmî|w\x000eñ>ýÉ\x0011?&|h½q'±¨Á©u0\x0001Û/â\x0012\x001c\x0017	;\x0014ÑG \x0003ùxcÒ>ôÑîL\x000b^~¾ê<²àg\x0003=CúþÓ½d\x000båõç¿Q§x(2$',E\x0003Aú~¯÷\x0015§âÜÓqîË±¯ \x000eë\x001b+¼§ë\x0005ãCRÏÂ!UíÞµx®\x0003þÞëï}\x001c\x0004MrLQ\x001bùóÒ[,±FÈdø\x001d¬Ü18i\x0013)V°¹\x001c°î\x0011k\x0013Ò\x0004±ý\x0014¥"\x0010@8-=7ÿÓ3ñ\x000ccÜg\x0013Z\x0017¨\x0017så+°\x0014¿
\x001a%Ç`y\x0017\x001cÿ\x0006-p7¦\x000f5Té§¬\x0012,\x001edÈcÇ+<&9ÆýMq_\x0000Yªa!\x001e½#s!r®Í\x0015\x0016<:9Æ\x0017ÇÄ|ý&Õ;åí}×±Z®¨t@¸àÅÕ%ç³/\x0019OO^²Ô\x0019óÛ÷\x0014Å[r*d¨¡_!@.ý±{ð
î·ÜG@iUÏÉ=D\x0019â\x0019NíGd¦Ùn\x0011ì\x000f?³_öOq+Ö)\x0011\x00116è%£á®øÙo\x0018¿ø;LRe×Ü7\x0005¿Ü¯y·¬©ºN~÷MÃ¾u®N\x001b\x00117\x0005á\x00149>\x0000EN\x0012êå$\x0013R( 46rHb1ÂDZ\x001c@\,²ûþ\x0010ÒÉÖÖ&Óm¡Õ\x000fp³¬ÉÊ\x001aÉKòé%Og_ñÙë5\x0019\x001fÁðOæË\x001f SD*\x0006éPZ\x0006êÙ¾G\x00152¥ªç|ÿÈônL_fdã%RV\x000cYC¯\x001dóÕ\x001dënIAÁº[³é6ÔýAZÆ«3È:þõßóæíÌW÷H¾«½î\x0014Þ[ãvP\x0008¹\x0016\x0014ZRjô\x0005×Ó¬\x0000á¢\x0000\x0000 \x0000IDAT'|óé·|÷õwüáó¯\Ì¸ÝT¼_¬¹Y¬×
ý¡XÌ¢´a?ò\B^O²ÓKg\x0010==¶$5æ4yÈ\x0014cL\x0011\x0018zz>\x001e\x000fÌ	ÛÑ E\x0010|IÜuq¯ßº¾øºbz\x0010w÷,
fwÜïldU\x001eõLÀ#h}`ý±;\x001eá¸/Þâ/z\x001ejx`\x000f\x0016Ø\x0013\\x000bnGÌærï,=q/î³-ÒÌÎÔgÝU\x0004±ØÈì!Á÷@\x0012ÑA$\x0007Ï\x0015ð\x0011\x0003O£+<¦°Mk¶_-\x0004JýÉª­\x0010Ûo@MTã"F¢v\x0000^!i³X	\x001cò]LI#45ä¯èfD´ù^ª	{$³X4MA#do­m¶\x001eÜhHKµømÖ¸]ù}â­ÚíS'\x0007<(Ó`ì\x001dÎlù]ÇýjÅÛ¾Ú\x001an_æLÆO\x0018=É=Åè
Ù|M_õÐ7\x0014ºm\x001d\x001eÏ.Î=;×)×\x001cJÁ/=É±¯Ú[µxï-s2Í·I4H>b2ù|öñÓß_|L«c6ÕÀírÃÍÝºm·\x0019Øû25J?Jz,EHX2ù\x0005ZC¡j\x001d<\x0013\x0014´¸]" ÜGYD}=©¼vÍÿ ]­	lêw\x001fni
z=æ£ëk^^¿fOKþóSÍû_ß!Ò¡\x000c»ÃÁá\x0018\x001bÆ£êÀj½¤jÞðáöÛyÇ?ýÅòaèPzº¡e^Ý¡*ÜÎoÙ4\x0015ýÐeÂºZóý\x000fß£ÿP~zÿþMµ¡(
gLm7®Aí\x001eØr U\x0011É]ÌøóþÂßþøW¾øä\x000b®¦3nV+~ùõÛUÅªíèÔ}½[Ï\x0000uóÝî£Þ`\x0012\x001e\x0013BäwE"ÐÀ\x0017$H\x0000yh
DÿñXÍØÉ{JÍ\x00191×dyp\x001cW\x0012ÍÄC ?[OàÍ	ç¿S=x­
=ÚW	§\x0012u
j³ácyâøQVö÷j"mRIê\x001eâý.Dr\x001f\x0018{j/Åîu\x00141tìT×¢¿/mÊ\x0003\x0002\x0017(n½\x0001çJù	"êy\x0012É©õ8zâü	\x0007q\x0003ÛDÀ\x0011(añh¥{kñ\x0014´\x0012zEêgbî§BK46ùö¹$ÙéþY#\x001aðÛÆ\x0016òzx¿AÎ²g¡#1½@E¼¿èZ\vêû°#\x000b%ð¾gÒj|_$ªÛi¢ê®\x001fNø¾b´\x000e?ÈýTÅç 8S¹A`5(\x001fê\x000e\x0015Y>æzrÆ´,\x0018]*g:£×÷ôÕ\x001dYÿ+9 ¬Ø\x001a\x000c¶»\x0003ÑàS\x0012!ðqy&\x000e«Ì\x0015½\x000cân;æó­¹èv8£\x000bò¼¤üéùòò9rñ	r>c®\x0017,«\x000f
ï\x00165÷ÕnÇá=¤"ê\x001eeÒã\x001a\x0010pt-\x001f½%É]
=ÒMØ\x0015E$¹ÍÁIq¡^kpÏU¶\x0005\x0015Ç¼nuà/\x001aÆÿ¾ È?ì§o÷ÊÎ¤Gã
ÂßËªÞfÇp\x0019mD %È-øßú'Ù°o/²|e2§géµÌçCWuçVMêÄA£µfæËx\x0011\x001c$
®uÈª¢À¡å	ç³\x0019ÓÓyöÜtÇø\x0017\x000f©%è\x001acÚ½Uq8ìN~\x0000¨X¶ÔMÅ²zàí|Íª^`M-Ö¶¼¹û¿ÿW\x00191¿½£²\x001bZÓb
¡²kn\x001fßRý°â¡Z³m·PìÌþZ
Ý	#\x0016 qÂ'<9Æ«¿ã»¯ÿÌ¿b6½d[\x000bï\x001e7Ì[V­£V3fï*äü»$)n>ÃnÝSC\x0019K¼ÎE»Bé¶í\x001d-©Q£Dl\x0019\x0013§ùÑX=Â0-:È,â\x0018Á\x0000¯\x0010¢&
É$_ep\x0008õ64¦*C/éÀ]£ól$h4¢î2çþñ8\x000e+R	ÜÄ$«$Tñ\x001c©QSSN?\x0018kê=t/u0 "ÀXÅówPN!1[á\x000fÄ¼âQåJRxûþ	hCª³NÖÑh\x000fäQÕ1<\x0012A¿~\x0012J\ÎEy°»ypÂñ$éxä¡¾	4Fþ²¨\x0016\x0016Å3¾	s\x00193E\x001fY2>×G¶Ä·*Úï´údlÍ\\x000c"\x0001R\x0019#z\x0002ÝÔÜX==\¢«ÐÔ\x0006GUÓÅË/À¢ÅÛ§\x0017ýßh\x001cþ#ç#PÁh\x0003*Q÷s2)à5\x001ai(\x0003\x0008â\x001e#K£\x0004YµC9Á»o*ö\x0001 ½/È´wÍ\x0013jU«ÈºbìZê\x001a®OK®Ç\x0017\x0017'H3g<>Ç­ßQ®ÁVÛN§Ö°³Ni½õÅ0$ä!1Ñ¶yG¹º¸ìÞU+%-1­Rf/_2ºxByú\x000c<¡\x0011\x000f[¸[TÜ.VÜ¯**Ûâ
\x0013tw\x001f\x001c5ÙegãÅrN\x0002¹¨¯¨ \x0010²]ì\x0005ê±þ6­ü
\x001eªëÇ°\x001eñý4úKBî;Ô\x0012k\x001e<?¸/ê\x001eÁVU6uË½³rIaÆÌ¦g\]\x0014\x000bº\x0011ÿý\x0005îîß°ÙZnBá¿\x0001vIª¥±5M+4n
5Mw4ÇbóÀ?ý@aÆ4µÅÝ\x0015FimÃ¶ZRÕk*\x0001C\x000cÙ~ß\x0006St\x0006ß\x0005%gÓ3n®?âå§_òí×äÏ¾älzAÓ(+î\x001e¬kKÝQöÔm
ðÌfí\x0010\x0008 IzF\x0018Î\x0012=÷Laª¹âõ4."Aw½düöBÚR\x0007.Gb\x0008%\x0013¼\x000eø&Í%á8;\x0014m^³ ï·|ÀÅ×-"ÉXJýR5£%×ãG×¡Ãzô}ËÒÔaÑ\x0010\x0014×Qä¤fY@2¬¤M2î9m\x0001·¼FV"u$\x000bÿ½(\x0001+'Ý\x0019jâ@Y¦T%)ýCZ\x000coF\x0003\x000eH]\x0017\x0004¤\x0013 \x0012h\x0002üä0¯qáý(ÑA\x000e 
.XuQ\x000f#&î"^|ßr#\x00138¿wÌ÷\x0007\x0002 ¿Û­úhC\x001c#\x0018ÉB®¹g£_h\x000b\x00036z@Õñúû á&Â×Sh\x0012K\x0016÷~ñµGÚï¢bT4Naxtî§\x0003¼\ 1:xa!\x001b\x001bûj\x001d\x0017\x0015\x0012èdC4ÉÿÜtÇ´ªl«wz³ÁU3ÆW\x0013Nf3ÊëO(Ï/a}	÷Êz>Ç5\x0016ë*Ð\x001a£;Ä¨\x0010ÂÜ_4\x000cý\x0011+ÿïc@\x0015×£Râ¤\x0004\x000cÀÈ æ¢|ÊäìâÉ\x000bÌé%¶<§v\x0013ÖùrÅÝbÉãjÃ¶iQS Úç\x0013Ë¡aÄÓ\x0006æ-ÖÞ1'óóÔÙ8Ü¸$aÞ:³³Ò\x0015¬C\x0006<i\x0007¸¡h±\x001f´§\x001b`ËB*XulëûÇ\x0005Óñ	q:=åúâ\x0013ñQé\x0018FÜÎa]ÕX»Ý¼ïõ]::\x000bÎaLÁlR².Á´;ebi
³,\x000bb×Te ,LXïTª¶×o{IM»fHAÜ.FÐPp6»àÓçñú×|óê[^¾xÅd|AS)Ç%·ó\x0007\x001e7\x001b¬1¨ìFëç¶\x000e\x0015S¢ñdÒúÔâ1Ú0n% ?óü\x0000ï\x0005 ò=Gyâù5\x0014¯:à
\x0001}\x0012VÔ°;Íx4ôÞ¼ù< \x0017kLË­\x000cè\x0008sÒ¶¼².m^ÕÄ´&©oR\x001f¾dýDÂ¾\x0001$k\x0013ÈÚzT4XkSK à
§¥ùúÒýó¥S\x0012½³ê!Â\x0003ò\x0002\x0019P?üåoÿÐ¤¶óµªazI\x0004c§0´xÏ#¦!=|L¢ì`2Í
r2®ÇuÆÊÈ\x0011ÃiÝÅ´\x0011\x0015ßdx}TD\x000fJ9XK\x000cJ!\x0006ÎÿCd Áá° â\x0010.\x0014\x0002ÒO~9fþ9`.+~ó>Ì\x0007\x001aÅ\x000e[Úõn=f\x001e3\x001c³\x000c:z^\x001b-*¿ÙÅÖyõiÿ,:öË÷¾ôÎ\x0001=â+]W¸éÆÔÈ6\x0014À´,¸:òÑÍ
\x001f\x0014\x0006£\x001b
;gswÇâ×²zø\x001fÍæ»eRÂT\x0014Ò`°4Ýýi»tCÓv\x0018Ã ôH ìb	)@\x000c\x0011PÐÊÖ¬ùÓÓ\x000b¦/^~ÎÙù9MqCrW5¼]n¹\rW5TMµ-ÎYèRsúG#ü' \x0007
F?s=·Ôä(ì¡Ïä·>àd6ï\x0012Z9f\x001dóÐ.?ñ(u¡ÝØ1\x001dÞÖ¿W#U&ºË\x001f\x001f\x0017«]Ëó«KÆFiÛ[î\x0017¿ðË¯?òÓ¾çÍS5·\x0018SS\x001c¦hP,V\x001b8s4¶ånUs¿Xñ°e3¢Ñ\x0002ar÷E±
®KM²bh¤\x000fAk»z­\x000e\x0014ÆÍ\x0008m\x0005Ú\x0011'\^ò§×ßñûoþÀW¿âéõ
NÍ.­æ~ÁüqÁb³Å\x001aé|Q
¶CíÙ¶î\x001dßGv\x001bïh"\x0017¼ôôÈ\x0006c Ç>nªL´r\x0004Å!¤H\x0013\x000b<	\x000b¦Ð\x0013P\x0007\x00116*Mã\x000f5û\x00199\x0019\x001a9oÔÏú\x0018ª\x000e&>%ããºwt¿§×£	í|?\x0013y\x00183l±T$ ®s× w)\x0018\x0017­*qA¬A\x0003\Ìåþ%ú«åÐç Vó\x001fj\x0014<GÞç²ôÛÇ5j\x0012\x0008éC2h´\x001bÀK\x0008wFþwBMb1Çû§yG'þX£\x000c\x0008=\x000f\x001e\x0019*qpx¤Kñ(l\x0019êz\x001e\x000fgs|\x00141¨ï÷wSB3õÐÂ!Bo3\x0005x\x0005Gí\x0011\x000cvA\x001f-þÈÛ-\x000cYÚ\x0004:®\x0017Wx´\x0008t2	¨hä})Lõ÷\x0014É¹Fªø§\x0012Ð>&2¿áDÕWkt×ä¨ûÇ¶µëS®ÎO8
³rÂìÉS&Ó/¸^_aWsÅÍò\x0001­W´­Ûõn])(âöf'½ák/ïèµÃZ§Xç\x0010#4Î2L&3fÓ+Æã\x00197\x0017¯(Î.1Ó\x001b¤ü\x0008pÌW\x000f¬Ö[æëwÕöÿ[oÜÆ\x0015ÇgÈ]î®V\x0017K¶\x001c%©Ó IPô-_·©è{\x0002Ej$¬öÆËÌé\x0003¹Ü¹Q6ú`\x0003¦¥%äÌùÿåÈ\x0001a\x001c\x0010O\x001f­VIñÄ¬×\x0019¯´o2\x001bâé\x000fÑ\x0002/ù$\x001cZ3$\x000c7<ß>O®y4OÎoVbU§æ\x0004A	º2C´ß\x000etåùù\x0005í\x001c®iys³bY	·7o¹¼ñþþþkÍ/\x001fÿÁfóÃaº\x0003ÎXL	¦\x0010¤)Y¯g`
la©w¶\x0019æéA)ï¼\x0018\x001b\x00037\x0019ýãÏ|Öþ;-W+î®Þóíý÷üùÇ¿ðó\x000f?óæây¹ k\x001d¿o\x001ey||aW74Öab<Ï	á\x0008ºpTlá\x001f)&§6Á[±ëÊ¢>ÁÜ=´¯£ÖcLÓ\x0011ÿzâØ7¢î>¯*õs\M©\x001e¹cÙ\x000e\x0016·bDrÑEß;,$Cßzå;v×|Õ¶d Z\x0011`º3 "©'dôý³­ìX)\x001d	S\x0013³ôÑ&NS¤pôÑSp"¹Ç\x001dõ)ùº/~¸C§
ÓYø#Ù\x0016O¿îßI\x001c\x0013ØÅL\x0014Cý¤°\x0010Ä\x000bêðâ\x0004ÖÄRÆ/\x000c5³é\x0017é82K1zF	5y©ü\x0011áÂÖw\UgÒ)\x001b\x000fßø|ò\x001c\x00173haùÄZ4Ë\x001aù\x0015~Q>Î&B2%éÊaò\x001c\x0019¼Q7ÿùwN¡E»=\x0012q>µ)å,NO$DqÍWýìçù\x0006\x0011·i*[;õêó&Oï}, ðð\x001b\x000b'¾tÆÚ\x0014+\x0003ò7ç®ãß\x001bË§Ærµs»ºd¹\°X­)æ5æbGqõ#lÐã¯tõ\x000b¶9Ðè\x0011Û\x001eÐî\x0008Ú!j{|ÆÙ\x0015ç\x0018Ú}f\x000eEo±£RQÌ*kÌrÍluG¹¼cV-)\x0016ß@YQË}7g·¯ùeóÄþp`×ZvV±#ïÌ¯\x0018ô\x000bÚ­B\x000cï'$Àiì"F7Ô?æ·£#Ãk&Ðø©Ó7ç\x0005ëøÎGáÕÅ$÷Ø£ç\x0011Ï·\x000b\x0000²\x001ei\x001bpG\x001c: }Rz\x000eíóÁÑÙÚ:n/+ÖË\x0015óò··Èww¼¹üÀãã/<}úÈöùWöÇ
­Ýc»\x0016g,RÀÂ8Ss(\x001a\x000e¦ÏÀ¶}Þ\x0010F\x0004wZ´l%eN`­¥²Õ \x0012\x0014¬W¼»yàþÝ\x0003\x001f¾ù\x0013ßÿá'\x001eÞ~ÍÕú\x0016ë\x000cö-Ûí§\x0003ûÚQ;¡¥ \x0013ßÈÞÏtÈµîß\x001d\x0013Ìí:¹\x0003ðÅ\x0005Þv[ãq\x0019Î_\x0001Ëê3Ý½QT\x0014z\x00131pSm'iJ_Öª
÷M'þ§·ÖKÊÎ]?W\x001dð×wÙ	\x0004Wÿoùò.ÝyøeæÜ\x0007MÊ%\x001aùñ¯i3"ãø!HT§iþ{\x0004ïÅ+ëuÅS\x0006Â\x0004äõ9_\x0011ÊúÚ9!\x0012¡FóXynÓN.¡Á¤·Î©\x0012}µHè1N¦z¸\x0019¹]\x001a*;Åk-ÕÙ\x001e!\x0016Íñ6ÿrr¦\x000b\x0006C®Ð°±?düî©\x0004ÜÏ¶9»7ß\x000c\x00056ç/ªçñç$"4kß\x001a¢Á\x0016pC£¢\x0010\x0012)
	/#AvâÜï8¢ü@¡?24ÅK!«z<Ù!=\x0012¶üüø¶ñzÃ¾\x0006ÊiC3\x0014!IxÀ¾:O¼wÂ\x000cÅc\x0000Z{\x001b\x001b\x0007yn%\x001b,oúÖÐ*l}Û°¯¦.¹¶\x000b®f\x0017Ì5åâ²zCµ< íï\x0014Í\x0016Ûì Ýb[\³E»\x001a±M¯¾Öî\x0014:H[­³%fVA¹bE1_¡³{æÕ\x0005eõ\x00063¿¦(ç´\Ò´çÚòx8òü²ç±>Ð´-æ¤ì\x001dC/%\x0018Ó¡\x0002Ñ\x0013Sù´\x0014æ^ke¤n\x000212W`{­.Bn/\x0011Úå¬R±TÜ\x001aÌ·â²\x000eEáÄ\x0018±Ôãÿ8ª\x00168 µÂö 8\x000e¸Vh×\x000bÖ«\x0019ù\x00157W%ëê»«\x0007^nãùù?|zúÈvûÈ®~áØí±Úa\x000bÎ*V³#Ù¶9p\x001c@çÛ
sSS
1Ü\x0014WÌç\x0015óYÅj±æ«÷\x000füñá'îß>pÿî[în\x001fXÌìýíí¶æP7t\x000eº¡-\x001dPg±wZ\x0014Ý9«Ò§\x001d\x0011þ¼G÷æ·h%-2Åk'\x0007\x0019Î¯Ì\x0015IÑ­¬\x0005DFbÐT{\x0010¶5¶ó(f~\x0004o²_ñÎËÇö¯/<¦L*\x0003ú¸\x0004K¶½\x001fKñ=9_ªxb("aO\x00104:3F^Ì!\x001d$\x0017ßè[îIæºÏb_ÉÐïÄfñý}­`¨#\x0016!ÉÖ8ÃÕñfùHdj\x0016®ÞN#¡»yã¬$°¢Ð0v(·\x000b	¼Qcêàö\x0012®\x000eÞ¯\x0006ê£°B\x0010B'tfí	b5(ÜáÃ\x0014¯Mè¹©\x000bÖ \x001bõ'Z/ÅEü¿Hi\x0011q¶\x0016Iäò^¡u£øÅð/Â¶HüR\x0007Bh)\x0010<"O½,\x0003\x0002\x0014ò{$h!M\x0019º\x0004ò\:AêOÁ\x0004dLù\x0002ë
É!Q.µ¢Ù6ÃTûüÌ\x0017wþÛ\x001f\x0015#z~ãåv{%ºÿÇø\x001e'ÒÅªñ~IbÕ9µ5¶=b\x000fÊ¾®9.\x000bÕEU°Ï(\x0015f5c®5âjL»E;´ÙA{@mÚ\x001au§ÂQz´Q
-)f\x00152[A¹Ù\x0002½CÍ\x001ceÓ\x0005Ö\x00196uÍËËÇíß·
Ãn~ÊP\x001eØ~ê\x0006ô'´ßH0Ø\x0010\x0013´<Ío&\x001b9xBFbµè+iEQzDÞÍ_|Îl«\x0010\x0014¼\x0012ÐKüy7Îº©±?Ú¿DK°¦\ÌÑªC\x0004uí®¡;¶\x001csv\x0015ë\x000bÃåjÆrqÍÅrÉÛÛ;æ§ÍG~ãéå¿l¶Oì[¶c>kp¦¦cG×mpuK×u÷bó
J
SôÞÆ°^_ðõõ7\]]ñæê··÷|øö\x0003\x001f¾úÕü\x00129­]]³ÙíyÚlÙíjêÚÜ§µÃpÖýWl\x0018o\\x000cäÔô\x001aX\x0000"Y	Ñ³^`_=,­Bå`\x001e|ÚZü]ýÎÞH\x0017\x000bb.3ß0{Lò°&±+Aê?,±t,\x0014\x0014Éñ¡\x0013\Ðl\x0008Jr²fà\x0011ºKü\x0012
±°7~ÆùÀtó¯+\x0010Üy\x0005³J\x0018¨Apè¸\x0011ösz\x0000IÐTMRÒ
nÊ7Ô0ÒÑ'ú#Ñx\x0008ò×¿ý]'äeÊ),P7L\x001d¼\x000e-÷Y>\x00121L|b\x0006R´ÐÒbÔ\x0008ÆtÖ\x0006EEa-@Pè9BËiol,ú\x0019]GàëOI\x0002Î£äÜ\x00194PQjÂIÔ \x0008éÿm<\x0004M=\x0004/m³k@¤'³k$g:®ájß;P\x0014}\x000b9%TIc&®ujÐÚ!R½ÎÃô'\x00107.\x0012fÜ\a3"\x0014UädX¬0\x001b&¶Â\x0008¥1bÆcÆ\x0018\x0018¼\x001b-=PU{q:,\x000e«n8\x000e¸~T\x0014&ØÕ÷ë±¡,KVUÅõÅëk\x0016¡*y!ÿ£îìzÛÆ±0ü\x001cå¤I:3ÛîÍþÿ\x001f¶3èv¦MêÚ\x0012¿Î^Ð)rZ\x000c°À\x0006ÈE\x000cKv$<<ï\x0017(½¥ÀÔBBÔWÝX\x000bXD\x001cY,-\x0006+Z,ñ\x0011¼\x000f>rò)\x0004¾|?p8\x001cø\x001e<*Î95`.©ÖJÎ×«@ÒÕæ\x001f\x0019Ãß\x0012¯ü½¦¯ÝÿÉOý\x001c\x001b¤\x0018Å_þVË®bÀZ¡ë,½3üã×÷üúxÏÃ°ãÞ9öF\x0010ä<r\x001a\x000f|;<óüòé\x0003Ówþúú\x0017¿ÿñ\x0007^þÃËá\x001b9+®ëq]Ç½g¿ßs÷ÈÓãoüóãG>üò§Ç÷<Þ¿çÝî¬Ê)gþòÏÇï|ýòÌñ8\x0015³øTæß+§±²Tª\x0008l¢_+©â\x0005=ËçnKæ\x0018ójÂ_uÀ.â¢K·Ì|E·æñõJÖ]õ§Æ³nÐ{~ö<ÿ'enïÒèôÿôy~ö¸FrÌÏ\x0019¥oöú[7íG¢[Z\x0001÷\x001b
ûÍyjËlã3WçÙ¨NÏãâzÁZíÜ°^ÞÎ»w­\áú|ó|YiÅ|ÎÌìÕÂ1Kádë\x0008bâp<òéóg¦i"¥Âº\x0019á·÷¿ðáéaÀ\x0019\x0003z\x000e|ÓÛ¥²¼56\x001a¤×­ãµUk1óC¿ùyóÂ±±|í6ÊLU½õ,Þ\x001a\x0014¢7b\x0017e\x001eLÇ
óÊSn/Ì7	ou[ºQìÞ<_ý~Þº\x0010·\x0008kK£¹$wäLÞ9z×Ñ9Ç`\x001dÃ®c\x0018v\x000c}Oo\x001d\x001d5¦\x0014¦l~¢fR*bÖb½\x001cs$¦\x0011ï\x0003Ó)0M¬çMê+\x000c§¯åÐ\x001bË°Û1t\x001d»Î±ï-weç\x000cN"N2Q:S,TDJÑXT
>+1+>fÆ|`\x000cÓid\x000c\x0011\x001f\x00131'¦H9\x0011T	\x0006±3m$Ëå»Ék¯¸¼\x0012¯\x0005ÿ\x0002´F-*ûÜ¯séqºV;ìEJ\x0014\x000bïUÞVn¾µòl)Tç^¬Z9^lqµm>^þ²ö»[nj¥°Yta
\x000eæ|ÞH\x0014q£\x0015¥w¡3Ü\x000f=\x000fû§»ww;öÖî\x001d¤#\x0019%ib
ÃñÀ1\x0018§\x00151\x0016×w<t\x000f\x000cý¾Äÿ©åaÿÈ^ÞaÅQ|J\x001cOGÆcàè\x0003ÏÞó<MLã\x0004Z6WÅºçX5\x0006kÌ\x0015¥ÒK:Ìµ+¯dRR²\x0011!)½õ:æRÏEµRÛ¡«\x0002úgÉFqSÃÉZÛ¢µÆWã5\x001ac
ZÔM!¢rKß\x0018ÿ5âTi
Zªá¥¨¬9òv\x00166\x001bã¾ùüT³ÒÈoå··¯k\x0015¤\x001bªò\x001f§k«=¶æ,m¨¶\x001b÷ÕC.5L6¯'\x0015ÍM+ÎSs^Ó\x000b<-zDgóë<£¾nuÇ·^mÊur,Á¸Y\x000b|£\x0011{.J}ü²\x0005¾Å%·Ï¥})Î\x001d\x001a1$\x0011¼f^¼çà'\x000eÓÄËéÄ\x001fÏ_ù÷ñãDN\x0011§ðØõüK\x0004¹Û#û={cèSn·\x001dãfðgue>Rßùd¾n¤heM"\x001b\x000f,\x0006êÁ&Ùp5\x0018gEüj¡Y\x000f¡ë`\\x0015n±o-ºî\x0002ndß\x0014à40Á9\x0004Àû³5aÖêõ9oHnN¶¯·R®)<57ÔäB\x000eî¬¥w;º½ãa¿çn\x0018Øõ\x001d½5ô½ÁY\x0015E.)¼ql\x0011¦d§×$óbh(>|>e¼ÏN\x0013ÇÓ\x0011ï=>zÆ\x001cJz&²f¢
\x0001Ç8%$X\x0008Ö3Bï\x000cNJÁØ[Co
ëK¯T\x000cª`Ê¯\x0010"1+1¥RØKÂdFTJg4}ôîÐõÝªksUþÝPÎÍl\x001bÊÇ\x0006/ªEIX\x000eË|¢¹;l(7onvjUõ¦ßÜÜÀY6@\x001bY9æÑ\ g~z³\x001dõ\x0002\x0002«|'ó\x0005{=I&\x0012\x0011\x000bFó+EM)ü£ÏL1p\x001c
ß¾\x001bî÷»N\x0018ú¾ïèú\x0001ì}I6Ê`\x0012]\x0017yÒ²ÐK \x0011z\x00190Ö\x0010Uð*LÆ#Èä=ãä\x0019§ñ81\x0006Ï\x0002&ÏsÎb­Á²áê{Go\x001dÎ×jºÈ¥\x0000L9R"&%æLÎÅ\x000eh&!0¥TàkæVjµÁ²VéOÒäÃT¸¥H;GVÖ³lrß·yôÊÍTõ7£1ç®""\x000bQ«HE\x000bF¾rýYíJËc}ÃVOXwÌZåÎÜU¤q][*7&»NsÛç7Dt¬\x0015Úº:fþöLÄ²TØN=[Ýö\x001bc¬VU7\x001aæë\x0010
N_Î´Ø·*«zA{ü\x0011ÓÚæ\x000e¼Éâ^\x0014\x0016[Y´­ã®ß«<ä\x0006\x0015!\x0002§øýëW>=?óåxàëéÄ§Ã7þü~ Å\x0008)aUy²=ï>|àcVÞÐ\x0019C.ß#Ï9$ÝÂQOþ·\x000c[+¦§h5ë,2PYKü[ËU5/ïÓ\x0005Wq\x0015ë·\x0011x¯\x000b£ëy¨Í´Ý^
£¥)ri%cÌ\x0017á50¾²\x000bíÔ[ü3]&\x0010©.D1µá¢n\x0016Ë5!þR"\x0018\x0011\x0006gKW±ßq×\x000fÜï\x0007\x001e}ßãE¤t\x000fCÌ!£)S:C¸:7(s\x0017ò¼\x0019écp¥ètNØ÷Âýnà´ïÆ\x001f9ø#\x000fhÊ¨ç¥TI1¿Z±\x0008z.\K\x0011ÙÙò\x000c8\x001bJ)«Rbÿ2¹@äYÏne¯y!K\x0002)Ñt*6ÃìTçOðBHTGs-ß×(u;×ü
²Úü}«MÛ«úlÜ\x0000Zñ·kw %¼ÕX-ÿÊüì¦íK5öÙ]u{¾Î¢¯ÝßWÞ7¦ò\x0018\x0015\x001f"§Ñs8);\x0017K÷üÌ¥uÝåÞeÄ5=r\x001e)z¦\x0001å	ªä\x001c	"x\x000c!\x0007Ì¤L£ÇC \x001d\x0000\x0000 \x0000IDAT{O\x000c")\x0004&0ÂÐ÷ìw=ï®³tÖàl1\x0013ß9GoBÜÔ&÷\x0017\x001aÓ^s&æb¦UñXGËËè\x0019C)nC\x0016BIYÏß»ØW?Öµ\x001e»Ý\x0005\x001fE·àO¹½¦®OÕ²vY²¾\x001a°ÝFÎ±´²´ÿËØy-¹\aø;È8ÒÊª]¯í*¿ÿ3ùÂö½J3!A$>¾\x0000Hv\x0002gu£Pâ\x0010¡Ãéÿü!ñgÑôXô¿ÌL\x0016Bg¾øçÏRVâ\x0013\x0017 \x0002\x001b\\x0011ÁÕÆ&U.þZpÏ¯NHwBª@hYÿs].M«ÍÃÛ÷¨´:3°Ò9²þ²é]ÌfQKxÝÁ½	Ç¬jÿû\x001c0QzÈÿI9ì§Nk\x0001	^½\x0008!¬OaÎ¦ª\x001f\x0006¾þøÎ?¿|á¹Ùs\x001czZ;08­ªÒ
\x0003\x0016ÆS«[»×Û£B§E Õjö'pBE"äÏ .qõ£\x0000 öÃáfúQQ$'JYÊYÊ_15=×ÎÐXx 
?¹\x001e\x0007\x0016C.RåYÛ8\x000b\x0012+¦%Ry'®qZ ³i\x0012\x0018aä*æ9\x001fª\x0005ëªfQW,ê%ËeI5½~\x00188÷\x0003»öÌëñÌ¡í¸\zº®£·Nñxµ\x0012É\x000cY¿P×5ÛEN]fTEN]mïu½f¹Z²¼\¨N5ÇÓ¬m8N\ºáæ\x00079ò/9&v@§p\x001eì¾/cZÊÍQÞ^Í·¯Ï \x000b
º®\x0005ïä_ £DAÕ\x0017¾ykY¸9ÀÙ­ñÚ*Ø²p.ÝJ|\x0014Ú9u9Æ8\x00136Ù>|§\x0016\x0010÷D/	ÓïÀf'äðFØxèÅ\x0012Î$
\x000cWê\x0013¢N0w)0%­¨s8\x001f\x0005$öV,Y\x0006úáÂy¸·f¢bädSá(Æb
ÈrÒOÁÑ(|ägØÁ2`\x0018$c°\x0016ÓÂ¥» Ö`P\x0008TeIY\x0017ÔÕ²fU\x001aò\È3%7L\x0002±\x001dÆ\x000e\x0018µ\x000e\x001açóß)\x0004+\x0019VÌèH 9mU²>ç\ºqN{8´-sÏ©\x001bè\x0007K¯#çÑÈfqoÿi\x0012Ü\x0010}\x000c Dï/\x001c1V\x0017ulR@JÚ\x00144NRó¢pCZã\x0005ÊE¿!Ù2\x0011%\x000fTq¸J¢,ñõ'[Î)~](Ku¯\x0002\x001d§1¯	1¬	ñûÖ\x001caÖÎ.I\x001f\x0008â\x0014C
N$bÑ\x0014X¦×x¹çAF¶«\x000c\x000bCY4ïû|uqj+AïYÕñ ÔD»Yj®8,ÑgûI²Ì\x000eañ@\x0019\x0016´µÕN\x0011hF\x0018\x0010^
ß\x000e;^Î-ýØÜvx#¨ÑÂÁdä&£B(¦!<©½+q]ð=¤Â·epÁ\x0003ÜlK|cj¯ªnD¢#\x0011×Èµ\x0007qñÛ 2+Ø­½ÃÆ0÷\x001c9×U@\x00035m\x0010îì]ÙË7}ãçrkÑ«óPJx§AÛàê\x0017¦Q®ëÜõþs\x0000U
c(²§zÅv»æózËª*\x001cÎ\x0016þÂó¥çõÔñ¿¶ã{sæ·¯_øýíýùluôò\x0010µEÌÔÎ.óuY²¬kK>o6üúËOü­ÎÙ\x00149u]ðËê\x0013*BÛ\x001c8\x001eì\x000f\x0007Þ=m{¢g,\x0014\x0015è25L¾wæö<3xq6`LFÂ)Ì-¾-;çà³-ï NHj!M.¶©öZêøùN,V
i÷Ä\x0007Ý´\x0011?³tt»î6zên\x001fäÔ¥v<\x0017½¢ÖiùÛ¡ !"\x000c×
lT`k«*jìÄU½Sz\x0019\x00043\x0008ÙùÎ\x001d³âù×ß)K2\x0016N¶TÚ»\x0005©)\x000c\x0014¹°ZÔüi±®KÖUÎ²Âôäú
Ú¢zá\x0000¶®ó\x0001¹´Ð_Æ$$,H6\x0015Ã\x0006&/RÍkÈ+L^Aù\x0019É3(? ²ø¼\x000bÞöðõ\x0008ÏÇC{¢é¡×\x0011|¸Æb\x0019¹Å2àFcº;¥zBÂÿ0X\x001fgÇH\x0004\x0008\x0006¶
\x001e"ýh,>\x001eCq+VÞ?ò ë¨p\x0010q\x0005êòÎÝ¦9ñ5¤.ÈÍÊÖ0h;pZ \x0010§\x0011cyHEI~6¢Ê¼¿\x0017\x0006Bõ@\x001cr^ÐÙû\x0011ÇB*ÝâÁ½ð½9Ïxú{~Cù\x0001«®³ù­0r2¤Å)]\x001c\x001f\x0018?sÆ·b\x0001Iø;á|Ìl\x001cz¥yOb\x0004EB
Ë¼¤+Î\x0018:®\x001f¦Ó³µ c\x001bðzbG6é4z?U~K\x0012ú\x0006Jx²ØLnÙ#1Á7´K\x0016p~w-\x0000ÚÃÂÕã6ÈaÍc\x001e`\x001e§Ú³v\x0016s§²ùÿçs?äÁ\x0004\x0008ÑNoÏÝ¼\x0018'´ÑèØ\x0012+²ÕbÁÓfË§í\x0013eIaSoÙ5=¿ïZ¾¿¾ðe÷ÆKÓ°?]hz¥¹imOÇ$ì\x001a·àëPöÆÀuÌdVéºóåÈónÏQþåüã·5ß.ø´Ùðq»æ§õO\x001bV\x0005eU³\¯Yo7¼í\x001av#ó~èG\x0003ò«åÎ4ÓÔñÃÔ)Ïõ¹X¬z÷\x0008t×D×7 «\x001c[Îó\x000e=ÕÜ1ô]|'\x001e0òj\x0008}6IxÅÍ îê\x001c\x0008\x000f}ìRñÉñ\x000e
\x0014Ù¬ðð\x0000\x0017ÎGñ~Ë_}\x001b\x0017B\x0006\x001e7ð£WVo[¿þ»u\x001aKÀÜÞInQ&}ÞÐU&,ªMU°­s6ë%\x001f\x0017B,¶þ¶
ÓWl@û\x0006\x001d\x001alD\x001631C±\x001d2\x001dzôv6£»\x0011\x0006)¬$Ëk¤|¦(J¤ú\x000cÕ\x0007(*ò\x0013\x001f\x000cfµ`y24Ç\x0013ß÷\x001dÇÓ³µtv\x0014«
8!Xý¡_â·o\x0000Ä#^*\x0003Y|þº<qÎ\x001eí\x00030A=Eê\x001f\x0008fidâ?ÕÇÞGÛÇÌA1g)\x0011Ê5}%Üõü\x0010^qÄiÎ¤öÃá\x0002OV'F;á£@ÿÅ¿yxÿw
Z¸~¸\x0016tÑP®§z·\x001dzà:Ïí2ª\x001f¯æD  mä.è\x0007~\x0017AtcBI|DÜ<|!Ç¯Ä\x0015á÷Ê-\x0015¦\x0000\x0016dü²~Â`hU¹dçöÈç\x001f\lSÞ\x0006ÜýöÌÂÕ)0ì\x0015\x001dq¾Þ\x0010y`Çc\x0012\x0005\x00075ø\x001bà);9à.gLe\x000eh¹£"ÆûnM
X\x0017¡{éäS¦5q+.ö­L(
ØC5	[U¤gÉÏ&
Ò¨¸w;'ÓñD\x0018Õ§µQ¥\lK¶
ËeUå?MË÷}ËÝ½íxÝïy9\x001dÙ_ÆH´3Ù(äÊË/N\x000bXÜÈ	ñà\x000b3\x000f\x001bkQ\x000cÆZ\x000eòÚ\x001c9[¯;67kþòëùëfÍ¶*¨Ê\x000fyNYÔ\x0014ECÞ4öÀÑö\x000cv\x001c<×ÍÏN(¸
ú\x0001nó\x0006gºoÍþâ³I[$Eâ¤\x0019\x001e±D§¾Ã\x001d\x000b\x0008ô®ÿ©ç\x0008¡Þy©ù,Á"û\x0008±I}gØ»{6àj\x0006\x001e®\x00024Eütçf\x0018uFH´wD:¾óx¹R&\x001e=K®ÉµH´èÈ/~æ0K×»¦\x000b"ÌW%ÛeÍ¶6¬KKU´\x0014ú\x000c-ryFNßàø¶ßþ\x0008ö\x0004¶Eÿv%Mn\x001bWø{ÝX\x0008Cr43²]QÙIUrs\x000eùÿ¿"WÉ©HNìÙ¤Y8\@\x0002Ý/n\x0000½#9¾J¦$î~ï}Û\x0001Ä-\x0004»¶RÖ×qLeÛ*IÊ\x0001Ê D\x0006-ç`7Àd\x0005Sðì'¼ÂL¾EQ-°Ì%¼Àf'ñR7Ø\x001e\x001aÔÇ#à|uïã"\x0003@(~\x0016xÔ:!J®7J=»i°Cå¡\x0000F=¹¶ÂIg¼gÓÐ¤'\x0014Fñv¯Oá)h¼cÆá@y¡hP\x0019¨aBL­:mÍCAs|*¾Ñ[¿A0\x0006qpê²{åÉàÚS9±\x0005O\x0017âa"±MÄñoGyÌ"f¥[j'YÙn7ËÁ\x0014Ñ{\x0005¢\x000f©Ó\x0008Þ¨@\x0010ÌÈ@¨dwo.°Z®ÐÈ\x000c5\x0018¿Üßâóã\x0003\x001aíòzâî' ²sñÝR5
\4"øÚáÞk:?äqK\x0011AoÔç×²Çã¸\x000bî´µ\x0011Yô¼)ÇtRYÀ¯¤½ ì´\x0012äÝÄ(\HnGuJÅL\x000e9\x0005iRÂªÀ}Ý¨Å
\x0014\x0018x6Å	Mq\x000by9Áâlj:A5 /
ìXáùi\x000f_\x001eñÛÃ3\x001e^¶¸9ìQ\x001f\x001blYá`\x0015°ù¼Q}¯Øô®§Ðmg×õÐBh³±\x000b5jÍàú\x0008Y\x001fPîöxÚnñ¬ýjïV\x000b\Íp>)0e\x0000I\x0008!AB\x0000û-êVõI\x001d\x0002£\x001dø9­w'n¶æ\x000c©C:\x0014P&'¡\x001d'FëµéwLþOMn\x001cÓàp\x000cÂô¢Ê¯\x0006þ¡[Ê\x00139u=H\x001dD7¥Ù\x0008Þºt@û\x0018\x0001Ç	6°ºéÓnëÐu;\x0005²ÅØ
© 
åC\x0010¦@Y\x0014øaUb1É0
ìÀm
}ø\x0008u\ê[ÈÃï@½\x0001\x001d\x001fAÚ¤\x001c\x00117&.³Ï#ÒCô\x0003\x0003q\x0018=H°5\x001f·\x000c\x001eM£tx\x0000×sPY¡­w\x00109DUcR~*¯Ù\x0012ó¼@K<K
16-ãÐjÂ*»S\x001f}»! M}³èI\x001d¶t<+H\x0018ï'ÿÿÒ:Ù´§\x000e\x000eþï\x0011\x0014Þã«÷â4\x001fÍá8}\x0002ÆÄ\x0016\x001c$¸ >¤\x000bÈ ð>\x0011\x000fL]êv$PPûp~@)Ò«øC`Ûëþ}\x0007m2õ?^l\x0010÷ü»î\x000b
ª[
R\x0018ø´·SÝóè¿Å@\x0010\x000fTBLÝA`~J\x0010&2Ã\x000f\x0017\x0017he\x0006åX·-î÷\x001b¸@ÿ`:\x0013È~fÏ·+e3@¨Ã\x000cÍÝý\x000bNdT\x0002ñø¼1¹\x0017FÔ'°ëÃ\x0018L\x000e|"±yO¥\x0014¦Ö\x001aÓÙÌãíI©\x00071}h9qf\x0014L&vÌó¶cyãÅBùÍF(,r¯¿\x0006o©\x0014ô=&Ö	³ÍC>¹;E3°\x0017Aj \x0017I^`µ\áru\x00061É¡°kZüö²Á¯ÿ½ÇûëkÜ>¯Q7
ê,\x0016¦XTBXë(\x0011Øyå²"vuë/\x0014Ø®! ¥\x001dT°
êÝ\x0001/×·Ø<oðySãÝÕ\x0005~zs³irR`EgµÛÙn\x0000V6mÃê_½B"\x0019¯(L¢Ä#O}Î£vV¯²\x001c\x0004)ÅËIµäÁJ¿jjz\x001eÇ¸QÂÒ<Bÿ\x0000ÅQd6§ÀrëKÿkÊgo,L!yÆ\x0003\x0011æev'^\x001fa\x0000\x0014ó¡<è-Ñ)\x000e;­+pH\x0005d0(Î,'\Î2Ìf\x0015Þ.\x0005&8"k×àú\x001eÍþ\x0019jó\x001eMý\x0004:Þ\x0003íg\x00107\x0010\ÛÂSõEâ\x0010? D¢Ð´E^L#møÖ&Hk\x0003y\x001fr\x001c6Gäå\x0014<¯!æ[\x0014Ó\x0005¦Ù(«\x0012EV`ç¨2\x0001Ú+`¯ÁZ÷û>ÿr/(\x0019ªRJ\x00041VÞñé´-oØ9V#Q\x0018­\x0017ìå	\x0001gùÞ¯m&?æÒKCJ#YÉ\x0012\x0012×!4y¢\x001e\x0007.©×¹#âl:n\x001a®5[¼O·i*Mª\x000e!fÿ»RP¿\x0003%B1j*^Å,\÷\x0004=È\x0006©6¡s÷12QW4\~3w½Ï<\x001cÆOì!0+ì\x0013b\x0018\x0017w?%ZDBA\x0012­\x0016h\x001böp\x0004Õ\x0007hÕ\x0018\x0016ùÜ\x0012m=½`ãªà±{®´­XAw\x000f\x0002°«ÅµµzèmZìM\x0010Å´'f¦\x0001°å\\x000e°²\x000eÒ4ü?ß+ÉÓêN\aoÁa¿Çíí\x001dîîï ÂÏ?ÿ\x001dÓÙÔ¼Ý\x0000ÜÌæ>¶/e¦M>÷\x0002n¤çðDAEA@Êe/âit¢½m\x001f0#|¢¢3ë¡\x0001\x001eI!§\x0018á\x0000æ°sÆF,2£\x000cgeåb7çXT\x0012·­Âõz_¿<á×7¸½»ÃZ1\x000e Ë\x0012ÌÍqfba\x000cHg9LRw\x0005>\x0005\x000f?\x0005\x001chw¦\x001c\x000e"(ÍÔ\x001d\x001aV@ËxxxÁ¿7\x0007\>¬ñ«süõÝ[üm:Å¢,0-rÌË
å\x001c/k\x001cÚ\x0006-\x0019¡b{\x001cÛÄT§A®41\x0010¹yqZÑs\x0012O£	ñè$¢I\x0001ø«½JX§Ódö$d\x001eyS
NúIÒi\x0011KJQ\x0019¯rx¡iñ\x0010½¦\x000báÉWæ¢)¸B÷ÝhXÄ\x0018¼\x0010\x0007k3³¾f°V¨2ÂlZáOË\x0012ï9¦Ä¤ýv·Úþ\x000eÚü\x0007²~l>!W[~ä'\x0008a~\x001f³ÖLþ` »\x0007\x0002}\x0006ú÷,i4¬\x0000I\x0010\x000bpKÐú\x0016Ôä8\x001e?¢Ý'+ÐÙ?0]bZüóÅ\x0005ö³\x0005ª
pÿDxØo°m\x0014\x001aÖö
áüÔñ}ôÐ @hñU"Î½fÿüMM³N\x001eÆùv42I£¯x\x001d\x0005©gp2¶×¯?åO®¯äÞG\x0011êÚ[ÿQ<""ë¤±=ËÝ3RvÉtjjì<º \x0013-Há~\x0014LCÎt(jA\x0018Ê1öýû ¡\x0011H.Ù¸\x000fO¿Þì0Jå¤Ñnk,e áj{£´)6é
ý(*ôÜ\x001fÖÆ_]-&`TAií=°\x0010\x0010]!	ãÕ \x0004		¥\x0015\x0014ûí73\x001b\x0008PY¤âÁ[±ÿý¦{ÕJ£,
\x001cu\x0003­\x0006\x0013y\x000f\x001b\x0019\x0005®1éÍò\x0002Z+ÓùÚiÖ\x001a÷77øåÃ\x0007ÜÜÝáòòÒ²:\x0008'4'
;2¯«p\x000fû 8\x000b_çþ}\x0018Ãñyéæv"°ÕqDVI5wÒnc¸Ñ%<\x0007æænÑ(Øá3¢§\x0005\x0016³9Þ.X.ç ÄÓþ=­ñáæ\x000e®oðq_¦Af=ÄÐ/wëHÖòE°y\x001frè\x0010äN½»Á\x001eSD{¤fûr7s±\x0013m"\x001cBslP?>`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=Ã\x0017X5>ß~ÂÕûÿâÇÿüwïÞºs¬¤Ó~z¿{ÿ`5ô\x0007±WL®Õ¦=vÐÆ\x0002\x0010By|ÚSÚvì\x000c»£õ\x0012z2 Z9ï\x0018·`bðO%¦ycÈ\x001có\x0007ärd³>9\x0010\x0008Y_AÞ==÷=q)Ï÷M?)l;iÇ¡\x000cËI\x0019ÚxbÌÍ4ªäÿVú</p><p>sJ3ÂvDC|<\x0014t~ô¸Â)ÊÈ\x0018iØá9ç÷ÄkÄjWhÞ4yÚËYÂõRsÃ\x001e¢q||ãIâO\x001dH\x0013\x001dc*&\x001aþ\x0006\x0015c¦	÷ÉäÍ\x0001UM9\x0017Vï¦\x0014b¬²</p><p>È®c¬ªÊ!dØ"\x000e\x0004\x001bY\x0008¨¢ð\x0006ÔñiÉø«\x001aYÆñØ¤B½\x001el[ka¥Ò­\x0001¹l=%Å°Qµ0ÌPu5PJýú<tN¸NeE]\x0003DØ{Åúl¾>ÖC5ú>îoéaMü</p><p>°twÑ¡\x001fÍM\x0004mý \x0003Wð®K;¼T\x0012\x0010\x001aÂ£g-3Z­AE	Ò¯#,£õZPc5¬\x0000DU¸£þæJ®q\x0003ÂQYL\x0016Â?8Èqì r(1[ø\x0002ÛDÛð¢Dù øð¬úí¦AÛuØ\x001f;tV\x0015¸|\x0006+O ¹d\x00050àØíe\x0001\x0001´O¯v¼%a\x001cÁÎ\x001a\x001fæc!\x0005¡Z\x0008\x0018Ó\x0002R¢ \x001fÎdí°\x0007ûL@\x000b×ÝÁíE\x000b\x0017²ÜúËOI\x000cÉp}6Ò\x000fy}\x001873>un\x0010\x0016<\x000eNëP\x0014\x0012®ÑØ<ª¥\x0001t~]Æ¸\x001b\x000b\x0005\x0012\x000bÐâ\x0004¨0Báp0hµaOßrLb
uÔWøEþÂî\x0016ÐÄÖváâ­9àîp¸½C!%êrR-P\x0016.|¾®+(!\x000fU	§\x0003T\x0012Prl\x001a9jÑ.¯ÜXFg\x000cöûý\x0010ö¯u¶k¡¶Ö=4õèèã\x000b\x001d=o\x0006\x0004V\x0004nÚøú\x0015EÇx­£aGóKPª*\x0016îÁ)iè×O\x000c¢q7Øá\\x000b0vk¼{ÿOÜßüÓ×xyög|³çøË«\x0017èÑ1c4¸»¿ÇÛ_Þã§7opuu\x0005-\x00046''Ø¬7X¯Öh%N\x0013,+¬×k,
êºÂ³Õ\x001aP0æýá\x000ew7\x001fð¯÷oðóÛ+¼ýí\x0017üöå#Z}\x0000\x0016\x0016ÆY¤z\x0004Úãó½\x000c\x0002í9\x001b¶\x00033\x0004\x0006R-ÁT íZwº|\x0008~t9e 3\x001a·Ä!L\x0019\x0017Ê¼Æ1h¢ÈÑ³cS@ÉN^}ÒÔeAß¢\x001aûÚ\x001dxïÊ¦ì½:ÿ»ÙÓá\x000eqD\x000cÅÕ\x00113QþJNd6O:vÆg\x0007æ`N ªÇDêLÙ4¢i­_#\x0005ò7yM¦áðùl{Y&fjMIÙÁñ1\x001fØã¡Ûsê\x001b$­£Ið\x000f\x0010Aö©BÍAHEO5\x00194\x000c#;
\x0018
\x0002S{Q:0\x0004O6}¬È@)Ñ\x0008o\x0007\x001büíÏ&â×±ã\x001dâ`LTIÞ½ëâXlÔ«Ü¿¿¡%!8la2\x001bN\x0006%qÌ\x000cÃ\x0016:È¥\x001cB1¬?\x0007yzãâ\x0000Wé×e@\x0012\x001b±\x0016s±­lM,uê[|Haýï&ògËÐlAìã°\x0007Ù)øÁQß\x0000>ë,ÌUÃÒ ×sÃ£ÆÑX\x0014R\x0002²t_¤<Q­+'\x000eºß
ã\x0008ÆÝ¶ÃÛ=~Ú\x001e½Ôâ¦.p±^ 8­`- Hàh,\x001ev\x000føøå\x0016ÛíÎi,'À¾\x001bÂúÐ\x001fm%NÏ(\x0008Ë¦Æ\x000f¯N!J	\x0008á\x0010Öàßÿ»ÇÃá\x0008£\x0001Á\x0012l
þúb\x0017Ï\x001b¬+å.(AW¼s\x0001:CðÔ¢Ëâ+¡Ê\x0015äb\x0003\x0014\x000bh\x0012^6æR4ÎÝFâò`Zp\x000fÔ
£µÙC\x0014\x0007H!Q(O³</p><p>g\x0008ë¿Æ>qcæ±¿mX.ú¡ÑZãÏB«{Ñ\x0006\x0017þ~|ë)´é
?½\x0006¸qÃ«ÁÎ\x0018\x0014\x0015ÖÍ)6«\x0013\x00147\x0005´\x0019#¦QÇ¹k,\x0007XA§[ÜÜ_£}8âóÇÏ8Ý£YnP/(ë\x0015êÅ</p><p>e¹Áéföâ\x001cVw8]oP®×NO}r¦q\x0006³JÎ#Ü\x0003¶î:\ýú3ö»\x001dî·qsÛí
Þú»\x001bl\x000f{hÖ\x0010 É\x000e¾ð0úr-/½ac!,C\x0008B¤`Ñ¶­UDyy#íOs.¢¬æ/ã~OÑ>â\x0008\x001f§o*Ê@Öæ¦ÞÞÊH®¦ãeÚã\x0011R!­Í	¦\x0018IºhjyZ\x0002zêZÎå\x001f">æF\x0006N\ÆôX[KH§¤ô¬_±Öçðs\x000cÖ:CeGÔü°×ò,i¯ä°i*A%ÓX¤³|0Ç\x0000Ó»T ¦\x0006*ä\x0000·dp¥\o5\\x001eðW1Á9á+}eç\x000fOFãâ¦{2,&È`t@g\x001cmLÈ,LÒ Ãñëqæ¡-l\x000fà\x0000fæìzÄ\x0018\x0008G\x0007#<>7q¶E)ï®2\x00148¿Õ\x0007NÃfâc¢÷Ë\x001eíäÌZÌÑ°ñÍ\x0013ø¸X\x000f\x0018'\x0018#%\x0007|¼¤\x000f!áÐ<Tfêø,ñÐ»\x001b®<¢éD~Æ|'j\x0004ú¦92)74öë£Ù¢Õ\x001aÎ`¡\x0014 jP±\x0000T
6%ÀÚcPf¦	ÂýÑÿgìì~ã6®(þ»Cr¹\x001fZIv\x0012;®8-Ú¦-öµèCÿùö¡H\x0002AÔh\x0014M\x0010Ç\x001f-­´\x001färæö\r3+éÉ \x0015wÃsÏ=÷­À\x000fë\x001d_|Í_í)òB¯y¸òÙ÷OK¦Ù\x0004ÈXï*¾}qÁßÿñ\x001f^¾Á
NÈ\x0011qá\x0005Uh!Ã¨eVd<}òÇ\x000fKÏ cÊÖòùw¼|{E]\x000bF¦¨µpF>PNrJo}:\\x000bÒ»¡
´³¹¡\x0000c&KÌä\x0014Ífì5c×8ön\x000bQAz×Ôkÿ\C§ÃSyXNÛd\x0011CÓù\x0003\x001aLÝ2sF\x0004#¦<Æ\x000b;pX×`ë«î0ÑV®aÕy{ó"ËÂ5¬]\x0002N°7\x001ciÄ¨\x000c\x0007Þv*Ôe»·%óòÅôÌä^ºô¶HJ~\x0015\x000cÉG\x0014NkêÆÑ¸-7ë\x000b®¶/ÏN(Ë%eÙþ{vöÅÉ9§'%ógÏp\x001f=£Îs²¢@²6c|Wm¹©V¨*³éi9¥ªvüëëòæâ5«õ\x0005úõvÃuµbßX¬3\x0006\x0015Åa{YÏ\x0010\x001f§QÓ`Øxðò-(9E^b$k-ÁöMç\x000eu¤pç°zC­nÑÓ	º{±\x001eN¢\x0003/Åé(FC«Où`\x0004°$Ì3öÚæý h·§Ê(²PF-\ñX	Iy\x0016\x0006\x001erD*v.¢Íþu¢£Ó"Ä\x0001aªpü4¦k*uåEA\x0014`jæÀªD	G\x0001\x0001 >s9\x0002ê{LK"½NFÔ¸\x0004D\x0006Óæ	à7NQî4'ªìOhUËÑ?Æý¥#ßR=R9\x001d\x0016á8\x000e'a¬yøº5Ö?kHh#F\x0006 ã±`U%1/\x0016°Ã
Qh±ôºI\x000f5\x001dDÙ$ö*¡ÝçkÆ`äp	\x0019</p><p>ÕÀ\x0019úvä¯Ä,U5\x0004·ÿ\x00006\x0007ÍäÀà¹Øû´\x0019yêóK×âî_\x0012Îáà\x0014oÁkÔ]ê\x0007':C¿AG:6[×hÏ\x000e§RT\x0019îË\x0016$µ©Klqá×ÿH\x0007\x001cmÃ¦Þ³eH1',1Å	®¢Ô­\x001f ¸  ÔÑ=Ü\x0019x¹Ùñåë\x001bþò?ÇlZ2m6|øPÈgß»b:ÁXXW\x001b¾ý¿}ñÿ|ó_ä­L k×\x001dÚÖh@T(\Ö\x001a-Û=ËiÁ¯?û\x0005úã/Y,JLÑ\x0000/\óÕ÷\x0017ljÉ`-xóhÎÃNã¦:°Õ\x0019i9èÑ´õoT³ !ù)V¦TÖ°³½s\x001ep\x001cÚ<\x0003N÷ü	ÙÃ½í´Ä\x001d°\x0010	DüÙuÑÖ\x001b\x0014µ]TßaY¸îïtüWÇ$öÏ×ÞÔ\x0000!A\x0006£C¼_[è×\x000eµG£½6:ém¥öVÙÖ{ÔeL\x0005ÓrI\x0016­ÎS\x000e\x000cg\x000bÜí¨°U¯¥6¼g\x0007²Gih:ð¶¯®ØÙ)Ùz1sr3çÚòXàÁé#Î\x0016§\x0018Éy±ºäf}Íj}Ãj½bµZqs}É2~øO~ò,3¼¹|Å7ß}ÍÕúÆlÛ§Â"y\x0004ãDÛxÑõñY0ñäÐN4¡X)ù)e1CÄ°WG½oú)ôá×qÔÓ(¼"\x0012hÊF ' I¼Lqÿ\x001a¡~nDÆLRÂ_q\x0018ì\x0018á1xè4ã>#sx\x0012¬¯Q5-~u\x001e»8¦i aû¸¦hWt	\x00004ZÑ	Ý¦\x001cN±\x0001¯ÞýIç:\x000fÃ°cÆ91Iîï\x0002Ô±A\x0004ûð\x001ed\x000cª½*Ä\x0014)FZFg¦¯\x0011ïc%£5¡OõðûÁÏ\x0018°\x000e\x0007Y \x0008y«\x000bö/@Á}¨G\x0011l`tï9i\x001dcïôÇpýµ(Gu>8ò%\x00169kâ¢c}§2Ü0®ëÍ
\x001cèf$:;\x0002¤#ôC+·bÄ(Ç\x000b\x001aaDI×\x001cxmpI\x0005¢Ê°KZp{KóÑ²DüÏ\x0011Ã6ùðü	wYB\x0008áD;Ñ~é±R\x0012¯5ö	¾«h=HûÀ5êØÖ5×»-\x000f9³bN9{-\x001f°Û,Ñ¦ê
³1n80é&_ÅXj½ãr»çrgiLN³o¸ÙíÙÖ
V[u¡1 Fi´a½Ûry½ÂIkQ¤b\x0006\x0000ÙW\x0000m`^®\x0006qÚfGkIe«6&Sªßd\x0019{°µ\x00197ûÖÌ;\x0013ÃÖ:j´ \x000c¾õÖè`ê]ãÈpã²\x0005EyÉÏ©µ¤²°µ\x0016ë)>{è(ê\x0015\x0018\x0012¤¸E-DØp(g`Ë½âÆã¨ý¢T$u¯sÄài\x0005\x0007\x0000ã3{ø9ç"AHë%+c÷\x000bÖfoÙ­éööE¶±TuÃÞµ:çb2gZ³bPuïÁ
±{,ctÞyÍs§v\x0018[Ï¥\x0005ýRc1¨+@\x001a&\x0005ËåûH>ãÍõ\x0017¯xþÝ×¼½zÇåÕëë5U]QmjÊé\x0014ÅñÓgðéÇò«\x001fÃÕjÅM}CÕìÑ,Ü
:N¥]ó\x0003°O3\x001bÎ»~H¦\x0003oFM\x001b¿e,\x0005ï-ßcVÎ±b¨¥j\x001aìa</p><p>Ûë\x001c\x000cû½&²5ÝJí\x0007\x0014H@¨\x0011\x0016¼VûóQ\x0003<[DbîÚÊk¦±V¼áÊ\x001d­äègã}R\x0013{gJ~&^2Gga¢Ï§\x0001¸ÿZMèûÆÔñ¶¸H|ÿS?\x000bD\x0002þó¤x\x0003\x0003\x0003\x0018\x0018 KÌ\x001c\x001fkó\x000fî/\x001eQsD*#â\x0004YFÔ±½mmxÖNÉá\x0018\x001do&£y²</p><p>\x0008ÙÃ\¼Ã!^ã\x0005²\x001dÛ\x00001\x0003)\x0003<²= lÓ\x0013Z£^nW^FýõPË\x001c´RÀb¬3Ð¤nK\x0013¦ãÆ¶×ªq¥$#õ`ªíjëÞG3ÞPnï</p><p>Å\x0004:Òx\x0004dt\x0015éÛo\x001aù
Õ¦eÅ·Ê"Y\x0003)Ûà#dm×F¯Õ±¶7ë\x001b\x001eRN\x0017\x0014óGL\x001f±»¾\x0002[uàLÚ\x0014\x0019\x001c8±¨4¨ì\x0011°\x0001ÖfÂ¶8¡C]\x0014º¥Z³nÀ¥\x0003pA¬ýiYGëÄÓJ
àÎV'\x0006
µ\x0011¶lÁ:2«Cç77¸é{È¢¡RËNçLnÙ\x0008Ô]KûàÙ(\x001d\x001b`´\x001dvÐÌâÌ\x0004ÏòCå§d³Ù5\x0013Þí*.¶\x001b¶®eÈ\x0002ö=y×ã6¶­»ÞÀþ³Ê8â~D@\x0019ðè-lè-¸
\x001d
Þéý´=z\x0014(ï.\x001dÞ§*uÓp½^³9_2M9={Â£÷?ãÝÛ\x0006á6Í&*È´gã17Øzx/\x0006+U\x001bAM99óóý2ÿ/¿ý¿>ÿÿ²«kn\x001b9=»\x0004AR¤¾lÏV9ç<%¹«|üÿ{IRÉË%\x000fÎ9º³lI\x0004	`wò°\x000b`vvAÉåBY¤(\x0012\x0000ÝÞîþfÿ\x000b\ß¡çØço\x0008Õr¦Ä?þý/lWk\_½Ä\x001f¿ÿ3noïð©ip÷K\x000f\x0010Ð\x0019\x0017×L\x000e`\x00174°¤´Î\x0002ù`\x000c\x0016§.\x0003b\x0003ë,¨p¾¸Àû×ï±Ý]âÀOû\x0003îö{tÌpB³=\x0012NÉÀ]b]hOgíÇX$\x0013dw/f\x0014åZh"+(:ê\x0006çá\x0001²´]°a¬Å¡¼	ÓÒ'ù/·öÑ¦ÖtâøÒùYkóï¢Öô	©\x000724Ã</p><p>ÌÉ*\x0013'%Ý<Þgª¡\x0019q¡ª®\x0005RÆìRu´ÆQ¡^§¯\x0001<ñ\x001938NÜ\x0017¥ó\x0014ê'ztÆ\{ÿ)ø ô<\x0015$Ñ×)&\x00130ÃÊ/§\x0006\x000fV¯\x0013\x0010«|Ýsö"Ë%Í\x0015ÈÇ<\x000f¶äþ\x0015"{YA$NöÇãbÁô¡\x0000d&L×L)\x0000ægD~&\x0018Õ0sÍ¥ÞG:ýÆÄP\x001cWúoº¼§N;©\x0005z,\x001b\x0015¨0¡Ïº2'ò	ydcÛãØ98oaì\x001aÕê\x0002¶Þ\x0001¦\x0006c\x0011\x001aFØªÒÜdom0\x000eÍBO¤Ñ\x001f
Â`Bî9ôÒºáñ°
ÏQø,0
YÓÑÚÄ{\x000e¥FïÁ^YtP4@=âaó¨à©\x0006-6°õ\x0016vy\x0006G\x0015\x000eÎ£é:4]>v\x0016	2p.ùöH³Äö1\x0005?M\x000fÀQ\x0008°s Ø½\x001du²QèC\x001f6\x001cÅ
1ÊO<öcÉ\x0019×"Rq¡'¶©Q2¦\x001bjúÍJ©B:ã¼GÛ\x001eqt-À\x0006uµÁùî\x0005Võ\x0016\x0017\x000fùÎv¼²ã\x0019!uK©N1Å-L°Ó\x001ad
qRZV\x000b¬«\x001a}×áþþ3>ÿzæá3ïÃ}c\x0018dB^÷¢2\x00009<ÜÁþÛO\x001fQ-*¬7+,ë*iücöSB¬8ð¤ï:GãbË\x0013À\x0016ÖÖxõâ5®Ï_¢ZnÐy\x001frÉ»n|o>98\x0015r¥5Cé÷Ã\x0005í|¥ÚAo\x0015å\x0015\x001f­\x0017\x000bv>òµ¤¯\x001f¹ J<\x000bU0\x0001O#%Ç6}©\x0002\x001aþl_\x0004C%ó>V{¦\x0004ïYÈH¼¬\x0012\x000cC¦ý×Õ=â²ö<\x0013Á¥Ç\x001e(%\x0015'.~\x0012\x0015E\x000c³\x0004Í\x001c2Sy2åôÜ$\x001få%¿©³§÷%%Ùâ¹r¡:cÎéYñ±Ñxù)&
öJÀì«h¯_ë&\x0016©]Ô	ë\x001c\x0000\x0000 \x0000IDATlS)~8±úïH:í\øC2(év,\x001d§lÌÐ7^Ö&2p'aZ;
ú:,]\x0001³ø¹Ó*îédHÎn.\x0005ÊäÓi\~ù¤TVLÈN¹NTv\x001b(Ù³\x0012\x0008¤çd[\x0015\x0017·åUð\x0000FZ×ãÐ:tÀ¦­w\x0013p\x001c;¬©\x0000Ny°Ç±\x0007{\x0007æÑØ%LûªÁ1`Ç\x0000\x0002<\x0007 èØD»¥hã0l\x0011X\x0005
åd6Þv(Y³÷!O::\x000b\x000eb\x0001½ÇI6ÆÁ\x001a,<`Z\x0001v\x0003ZîÀ3\x001cÙ¢é\x0019û¾ÇÑwcjÌ8Õ3ÔÊ¦|º</p><p>E/n\x0000»Cæs<k>b!\x0003c¹ÚÀ!ÁÆS\x0000ãë\x0007F'_Ö$}D,Ò{A3Üé(\x0007Èäo±ª\x0003Ðêû\x000es`O\x00018n¯±YÃR\x0005ò6G=ðË\x0015
K¶>,Z\x0000\x001b
Ä-\x0006'OfÑà\x001dz×¬Ç²2X/\x0017XÁ\x0013tJ\x0017\x0007<\x0005aX\x000bXK0\x0016pìbQ\x001f5\x0012z\x0014\x001dõ\x000cÔÊå°ïÄ\x0006Ö,°ªÏðöÍ;\½5K´CÓ\x001cÇ\x0008×i±ªç&V5"´\å¥ì4\x0006kZKB\x0004ê¤åwÍ¤µik`­D&³\x0018~&¦tD$]*W]Ñ#ð+H\x000b\x0010LÓ\x00112ï@Ñ2r\x0005²ó\x0011;­þ\x0001e\x0006É}Uj¨ä:\x0005\x0017X\x000f
üy~~@i\x0016ÀP"©âÂ\x001a¥'MÈÜ_Àª©	\x0017\x0016î+SÔ"g³Ì0º</p><p>ñyß«ã¤çÎ$Ê1bÅ,Jg`1gCuº£iêÊ<¸àìË\x0014¡àm4ËfÎÅ@Äzp\x0017)×u¤è\x001aÊ«\x000e¢|Î]TO+=çV5²»Ós"nöa\x00158\x000c \x001dK\x0018?æ\x000c8¥;ó\x001aÂòj%¤yéÄ{\x000cFÇEý Ë(;õ\x001c\x0017V@¬º«³ÕþéÅËSØ_\x000b'CâÑ9ì\x001d=ÐÓ\x0012¨wX¬¯aª³\x0008\x001e­`¢Ì¸
7­\x0011~{þ\x0000ë[\x0018ßÂ¢\x000fåD%-Aìö\x0011\x0000x\x000fxoÂsÑÆ$x\x0002\x0006ãoië9eÕµ\x0013`û\x001e\x000b×£ò\x000e5z,\\x0007\x0010Çg)e)Æò0\x0019*xZÃ
¸Ú\x0001õ\x0005ÜbÆ\x0011ö]¦ëÐ©\x0012kÖÐ5«\x0005\x0017SÎ\x001aðß#øÚ!ÊoðL§Iû:ÕÐ©?Á \x000eÞæIËô7Ü¾%Õ=%Ì\x0015@(OhL¥Ue`±½Cß;xO°víÙ\x0015vÛk,ì</p><p>*vÉÓhNÌ±åÄ\x000bq`\x001d§Nåic\x0010<;\x001c{Ü?~\x0002Ù\x001e/®wx÷æ[¼yñ\x0012uµ\x000cè\x0011\x0000g\x0018\x0002¶
¾yõ</p><p>7oopq~Çý\x0003¾ÜÁáÐ\x0000ìc\x0011gw\x000b\x0013)a,'%h4\x0011ì\x0012,*[cwv7¿Áùú\x0012ì-cÃ±\x001d¿ïi,dE\x0016¤µ\x0010Ò­Òe\x0004£X\x001ei(ÎÕcªeJ{\x0007D
S\x0012õVN\x0019È5ÿÏ$ï##\x0006	ÌäÂè>N=Y\x0003«br¥Ì§\x0013$\x0011S,gQZ2\x0015%ù9B+IN\x0008\x000b9PQ¡´UöJLz\x001c¨\x001c}\x0012éÄ|âýõ|HYsÊêÃy·ûçM£\p:\x001e®QÖI94]ë,¯åM.:\x0019\x0010|\x001c9ãR-Ú)Á\®kHØ3:¡V*è\x00062 &4g_gltR\x0016<Tr\x0001ïR\x0017ÉJç"t\x001aÒFCºÖ]ÕRÇ}V2N\x001d\x0015ÇÏÈr*¥1)kOEÎAk</p><p>z\x000b9ßD\x0019|Z"ðÔú¢))+Ðd®sEN\x001a\x0011û)ïX<eüN\x000b±\x000bfßò9¹¿õ\x0013òèÑ3îöGlW+TÕ\x0012Ûê\x0002ëË\x001bt\x000f?Áu\x000fð®\x0001è\x0018ÿ¾\x0002P\x0003\8ü¿ Â\x0002=þ\x0011ëö\x000e»UUwºcTÝ\x000eh\x001d0c	OÑ¼>YSO¢sÏ\x00194³ë[´ð8pýv ´\x000c\´
®ÚGPïÑ\x0019\x000fê\x001d¶ö</p><p>+</p><p>ª³á3ÝÀL\x0014ËåKô´\x0003-.aêkØõ5ÜbÇ¦ÅÃáCÛ</p><p>/N\x0000>½</p><p>ÌÊEô\¸ÿ¼jrûHv£lüEÏ^î\x0015£+i\x0003 +ÉÊUdOM(³7m¦w8«\x0016X¯¯quõ\x0016·.Ñõ\x0003kv°Of\x000fÇæ\x0005`Ä\x0000a\x0004xÄØî¼Ã¾yÀÇ_ÿåzo^\â/Õp¹;Gõ÷\x001fññ\x001fÑ´ÇàkÙ¶Xñ\x0012ïß}\x001f~û\x0007üþ»ßá|{¿þíG|øù\x0003î\x001fî÷\x0010ÈrïpÒÐ\x0006ØH6Àb¶XU\x001b¼º|o_ß ®Ïp×ôx|Üãxl1%¦ÏTs×Ò³?qéÌuüÌ\x0015ÖWÈq'\x0014V©Af\x0000à³WÀô\x0015·Îÿ\x0019;ç¸Í#ÿúÃJÎâ&jaJ²d»\)W.ùÿïÉ%'WtHå\x0018É*Ë¢Dr\x00063X;\x0007\x000c\x0007ßNªH\x0010À·u¿~ýÞ¼ø´Ý@¡\x0010\x0015Ewæ¿p`Ï&làøÖ\x0005¾×aù{è	Áü¦äÀtq'Ì¿\x0003®\x0000¸ÄUë\x00199æUºVÌkÚg/óòröÆ:\x0001§¾®JÀÈÕ\x0016\x0011\-oG;\x000bÛe\x0013¯¦ºHþ¡ì_e¾$¨\x0012¯\ÍÍ¯\x0003êéóe\#mâ36ÜNO±2I\x001e7nöøøMDb¯?(Îýcoìg´û÷W\x0002ßîo\x0005{ÁÏ9\x001b\x0017{c-â¾Ã\x0014d¹8ÙÏ5/àÖp\x0003
F\x0003ÿN÷qð÷cIM|-\x0011\x0001Iç~VG¼Z\x0012EûNNchºÛõ"ËÈ2C,N_>§Ú|¥©ï\x0010ÝqÁ.`DKÐD\x000c§G9¹Zðëf`ytLÙ\x001a>Yrs¶¤\x0014\x0019ý§ÕÄ\x0006Ða¼¯\x0019\x001dT-\x001auQ{	¡cè\x001bZ£4f\x001c¨Z¡EùÛ3.d`]+ähßqs±à$Ëö#ªvÈ\x0011¨*ô!Ù9ùò9ùéKÌÑ\x0015\x000f½ðeUqWUTMM§=1¢½-¬ìø¬µ\x0018zÌ\x0012Z6ÍÇ%QÛÙAÝdÀÖÅse+Ô)ûY\x001bu?·Á¾\x0016<Ð¼õ§o<\x0006zí |¹[\x0016¦à¤8çæåO|úü\x001fêº£­Ðþ)¾ÊÏ°;¸L\x000411£×³\x000eûÕ0hOÓnùßûÿÒ5=ÏÿÀËg¼ºzÅ«7|øãwnïn¹ýú\x001f?JÎ¯oþÊ/oaQ.ùí·óý\x000f¿ i[$\x0019é\x000eÃ`U\x0008¬R½ö÷ãovã®>\x0008É¹<»âÇ\x001f~æÙù\x000b0M]±Ùlèû\x001eU³õq¿µJ;ã\x0004GõÌ5ÏÂn®xD¸&C	µåEF³ê\x0006iv%IÄjÐP¶åó`ÅB\x001cMêé]öVG»Ú\x00153ýCóZ<1t\x001b\x0018S\x0000\x0019Ö÷±©1êU]Å\x001fCõ¼º%rmn\¦%"ãëNç\óö$opÅjþÄ\x001dFã \x0016ó¬\x000c}Qy\x0011_¿Q¹$øÙnÖ2\x00018êå<bÑ\x001dÆû¤¶\x0011º\x001f¦Å\x0010B÷ÐÕ \x0000pÁøG¾\x0005^-_½Nh
È¯a§×\x0006?'K£ê¼¨=QBk)O\x0005ßQsÄP5¢¼\x001f\x0013Jpû¸\x0002mIo²Úüé9mñr¿/ÌÙ \x001c\x000bø\x0010µtÐL/ë°3\x001eµÇç ².ó\x0019á£!»?.bM~G</p><p>\x0005÷dð\x0017\x0010AAýkÖ·²}Ç½`u´fÔh\x0000\x0019\x0004Í3]Aõ*f{9C*PV\x0007VmËý¶á¤,)#ò\x0002Kú\x000e\x0015cxÖ\x0003-HÈøïWg9úöóË%yP\x000e='eÉ³Ó#.:</p><p>zT `CÁ\ïÉú;RÓ\x0000£8ø A\x0013Kø^1úxoHUÈeK&\x001d\x0019\x0003\x0019Ýøn9üýÕ	?^fl[¥×\x0004\x0006åíÓB)´F´\x0006*vìUC§%}²DÊkÒÅs£+ºdÉªûºeÓö£%¥Cè\x0017ßúË:8B ÒG\x0017¼ñ}Ê\x0001¤#H\x0018phè¾KÕ~æ sUaNþ\x0004ÏZî1'\x0018TÙÔ=«ªæ¸LX\x00169Ëå\x0015çç/Y­64mE×ß"Æì4BG\x000fç)ÇI<g.û\x001dÌç¸³ø\x00044A5a»íXW[Vë¢Ø@°,Oøùõ	m×±®Ö|þòõCÅÕKªõO\x001fÿàÝ»w|xÿ®iIM2ºÃm¨qXÐû®¢£7wÒ§\x0018\x0012Î\x0017Ü\¿âõË·,ÊSê¦c[·´ÝÀ ìÑôÞêrØc6¸É¶½':×¼Ê­\x0011»¿æ\x0001`¾|â!à:pªÑ¸JtÏvøÆ1d4\x0002\x000b\x0013B\x0005<;;¡%ÝN³øt\x0013¿³5æju¶\x0007</p><p>F>\x0012æ¯wçù4I¼v\x001cï¹¿½?ìÏ\x0006ÏQÅ«áÇ5Vü\x0010\x0000"sJ5êýC]\x0000M,°$bÒ\x0003@W¤±:ðò{#â¨õ\x000b !õ&ôÌ´;\x001b©\x0004\*®a½f¦Ná§&äÒE|Ü,Õý\x0010Á~­a áËoF´Û¿YötÐA»\x001d@E+\x000bø¯ówüI\x0010ðQK/×½·§\x001b¸\x0003=ez.]A5Ü4§÷ù\x0018\x001apST\x0008ÅÂ½\x0005=50Y\x001bàÉh=\x0004Zc¶ÅÄG7[\x0005«ôól^\x0019r÷Õê¦í\x0014ÖMËý¦æ´HXd%eñäø¤¹¥o>Óë\x0006\x001e\x0003G\x001a\x001a!¡\x0018\x0006B~]ryQ`\x0004r<IXd°45I/;¼rC®k2]é\x0003ª\x001d¢cà8ê=\x0016\x000cd;Do¶ó\x0005f¨H\x0006CÊ\x0016£-	\x001d£'IO</p><p>o.K³®×ÑEáº¨8Î\x0006RZ`\x000bRïl\x0019¤tIºxF²¸üfÈy¨*VÛvïO­\x0001Ç&<`ä;\x0004mùÙ{y49´ÙáRYðÿ³*3»DëzÁM2)Þam¡Ø{)Ý7]ÏzÛ°Þ¤4Ë";áòâ%\x000f÷+ªÍ\x0017\x001a³×Ñtë'\x0005D\x001a8öM2cÀ¤\x0005e~ÊÅÉSÎÏ®X\x001e jøzÇ§?o9>^R%gÇç<Y<¡ïzò<§m:ª¡Ú!Ù#jh0\x0013Ï\\x000f-[\x001ccChÂQ¾äùÓ\x001b^ß¼áùå
Æd¬Ö\x000fl¶5mß\x0007÷ò\x001b\x0005Õ\x000blf¢·Ã\x0015í\x0019jÓ<\x0001ZB?j'Z4º¸^ÐL!ú}"çýmë¼°t\x001a\x0013Ôñ5'u'á¾\x001aå#\x0013·\x001e^âstàVæ-\x0008\x000f¬[uÉðz¨Ô\x001d5`±ùÕ!\x00127ö½§Æà_	5¼\x0018C­JÐ~ÎJøL«·öù\x000b©Äìúüîc'[Ð'8\x0005â\x0008e¢DlqìLÌSiwt\%v;(\x0001; Ã\x000bZ§åçìA\x001aò/£4\x0012ñºf ìé÷mÂªû,ÊÈA¬\x001f°\x001dæ_LSj\x0006ñt²¯Iza\x000c`C´©²##&= Ì¨¯{âv^f8Ý?Â}uHä2ky*1®P\x0014ñ±ç°·\x0003«\x0006¢ï¶ä¹ºh/à\x001a\x0011Dp¤\x0011Äé{¨ÛÕfË]fxr\å§$Ëgdý\x0003ºú®®w\x0008Q
í\x0003ÔQSa4å\x0008È\x0012Xf\x001a#6ê@VwãØ\x001aCÖå;Î-×Ë\x000eÒ\x0016îº¥w\x0005d£{\x001eÛ¸ÚÒu,sá¬¨IÚ¯&ÅH:º«ph2r"\x001fÌ\x00055¦U\x000c-ª\x001b\x0018Öh»\x0001íF~£9Æ\x0014gd'/£kÚdIU\x001bîªªîhwA¨Ê\x0001'ßØ¡ìRxÂ
^ã\x0007³Ní\x0004\x0001A¢±üiÿÏÙýÆm]aüw.9FÒHíXvlÅIlÇm\x0002\x0005<õÿèC\x0003\x0014­4\x000b\x0012\x0007Q\x0012I"ÍFÎð>\x001cÝc¡~³-
9ä]ÎýÎ·ø§ö¶¨H°pMÐ®îN\x0008C¥ÓÕÉ\x00177"T\x0016Åé¢d^ö8ØÙåèð	Ó97ÓsfË>Ø6O>t×kÞ}\x0019OÊ¬\x0016Ré3\x001cìñðèC><~Éþè\x0001ý|Ì|Yòó/§|ÿÝ[vÇ{ìïï³?°7ÙcoÜdhO1\x0018>9ùé\x0005çï.(UJKèIç\x0019±hc\x0008¥uásoï'Ïyúø#&»\x0014åj6g^¬¨¬úi>	»\x001cuª~íô_Öþ\x0012v<\x0008¬sÒÛ½;No×X\x0015:-ê\x000f\x0011\x000c\x001bwt¼\x0000\x0014·æv%'¾ZÚoK\x0012c¨ïÿ\x0017;´ªD¢VølTn\x0015àQ¡£IwÔA?<\x000cS`»­í¨|NÕÎTx¸Pomò\x0015ñò\x001ed¼WªGr½,}¯Em\x00124»ñÚ\x001a&¾B\x0008iDj\x000bý=MGÐ­l]\x001eïº¡°¥\x0010\x001f\x0011]TJdKÏÁ(ù\x0002\x0012:¯-\x001eGCîDöuãÜ</p><p>?$îzS2)\x0015\x000b %P_»xfÀþI38M8\x0008Á¨vc °ÎI~\x000fÿ9EoÀAÞÂÂ[\x0012H7ÑDRKWT\KâT\x0015æFh­ÏÁp¹â.4év'!í>í@$ñ\x000eÝVDH×ØëÔ[tUc4XµAp\x0015³±ª©ÓxæåyÁ^	ýÑ#ú\x0013òÞ\x000eÖTïFäºF\x0016WTú
fz\x001e\x001cÛÜû@jEjf[\x0001qÓ\x0014Á¼àIvÎß¯x}p¬öoTê,hmRA B¡\x000e\x0019å\x0007G+Æ×Gt\x0017mRD\x0010È¥öTU¤\x0011³d6oQ	ºÄêjy®</p><p>l6¢êï3:|9|É*?dºîñ®Xq]ÔqkµwcW"R7g?-Eé"¥ó?:@FâôÏ"]\x001cæxgê\x0014\x000b$ï5îÍYn\x000e×jhµ¶Ì\x0016k.¯-Ãþ½Ñ	\x001eôX,\x000b¦óSnn®käZÖÍgÚæ]ç\x000e¯²ræ±u\x0010ï\x000c­\x0006dù\x0001Ýxþä/\x001c\x001fÊlVpvyÉ§?ñæÛ7,o*î\x001ba^­øéìW¢`çÁ>÷ï\x001dñìác\x001e\x001f=äÑÑ#ìPùÇ?¿dv:Ç.§5qª\x0018U²æÅW4*öFÍÞäç 6#'§Ï]³Ããç¼|úãûO^óÅó² °JÕúûm¸ÇnlZ\x001aJ¢Ã¡Ð\x000e¹ÃøÑ?·xðh\x000bH§\x0010D\2Jj¤ø÷Ò1îRó¤ç\x001fÍ\x000fº8ñ>\x0012¼ÿ®{\x0015ÿ
¸ôNçD¸DHw\x0017ts¡%àÑ\x000b1¢©¹Ü\x0011¹¸ÿT?,**ÝÎ[ºªsI1X\x0002IJuÔ\x001ez\x0013º\x0006¯U¿é.Oç(\x00008\x00021õo]\x0008yà²ß\x000e\x001eü=P\x001c«nI¨q=ß¬9*à4DÞeKvr\x0007ïMºÅ#\x0011ÉZ¹\x001d'®EÆH®§s\x001aõ=\x001d\x0008ÿek\x0007¹9
«Óý]Câ±\x0006Q`	\x001e;0»UÙÑÛUf[éÛ±â\x0013ÄC¤R|Ô\x0015n\x0017]¡ëº©kÏºÉñÛì4\x0005æå³ßg\x000cÍýÁáø1£õ;Êùlq-æÅJÏ\x0010Bz
6dQê"À´¶PÍf(Y\x001eU\x0005\x0013£üùdêd§)\x001ck°¢¶äA2ÄÚFELcÍÒlà(F\x000cùü\x0007%\x0014bQ­çsKmií\t=nSPÔáº ²B6< xL~ï)eÿiq~³à«97¢Åk³kShx1bÛFÏvy$wþÝíKÀÿq\x001f®/£Jw+ôD\x001cæÔbZP\x0015ïÞÍ\x0018ô\x0017\x001cOFÜ;xZóc³\x000bÞ¼ù\x0017jÚ<c»)\x0012Õ[mp:A\x0008jcíÝñ\x0011G÷qpð!§¿\ò¯ÿË·o¿ã§³·_óúãÏùìÅk,ðÍ÷ßðï¯¿âê«\x0019ãÝ1\x001fÝÌçÏ_ñÅ_¿à³WñÛÅoü|yJ9-égýMËZ\x001a'SÛ è~hkÀalFÏô8¾÷\x0001¿ü#'Ç'G{UÅå|ÆõjV`4C\x0015ªR[Ò¾YÑî\x0016îQ	êU¾u\x0008È{úõ7\x001dyK'Mª­q×?Ú]\x0004Ýý³î 6Ýö»r)\x0016ö%Qõwd|ÉûæfGÛõ®mó÷\x00196$ÆÌ6ê\x001b\x001dàP×5·>ó\x0004ç1Â}Â\x001fÕí.¹\x0004.ä.*ä£\x0013®¯âF9$bÉ[y%J</p><p>Ô\x0004ê+ÛFTõ\x0012^\x0011%Ny ÑÂ*yJ^
yv¤-]R§©-6\x0002â´ySßâÑ¥\x0012\x0008×>NÊ«þs\x0007öVÕqBÜUÒ\x0002\x0011È»!ÿ\x0012¨Çbõ-\x0017S\x0005}ªµ\x0011r#}¤¹;Sró\x001d Vw\x0010Ì7\x00058³Ø½m\x001b@MíX	V¹/\x0018ö2,9\x0007½\x0003F»¯è\x001dQ¾dµ8cµþ¾\Å4\x0005b](Ö¦ËÆi.¬
J\x001f£±B?ÏÀ´1Wacú,"[bus¦¹«JLÕ3·AzëVÝÉY³I«dT×>1}\x0006gô\x000f_Q¹Zå\ÍW\ÌKnÊ5+1ØÆ«Ïç;«£Ä÷9¥¡zú¶Íçÿÿ6äÂ?\x0000H§üCCT¼³\x0015s¦7nõ×¥è³\x0003¯(éªyJ¶\x0005YÄÔÇ\x0008«,ÊßgKö\x0006#v\x0006\x0003vw?àÉñ\x001f¸8_ñëåru¥À°¨y§mútq6\x0007	#ôû=\x0006Ã>Y/ãìòïßþÈ\x000f§?r>;gi\x0017ôwúLö'XQã!ÖXfË)ë\x0019%#óéë\x0017L\x000e'\x000cC²<Cí­°R÷gÆ¹mÚä¦iOgÛ\x001eYÕc'\x001fó`ò×þg>fg4aU	7«ë\x0005åJªq\x0018\x0010i</p><p>GÓ|O§M½QÇ´\x0008¸JvfÜÖ$ÚQ</p><p>K ´MH\x0007cÐYDB§ðh¡\x0011\x000fM£°P\x0013gÍNÙ!\x001d­÷Vc°AS5ÐB\x0004+\x001bL\x000büxmQÎäîóa¬±ú¹Ð\x0012dE; \x0006à³¢Ý\x000e\x001dnfrÊª-1&RêòH©ï¶ì\x0013$\x0014Eo)\x000cÍ³T§Þê:l¨C}\x0008W;÷³6õ\x0004\x0000Ö\x0006V¯õ/áþ°\x0015Ì}\x0002i</p><p>ÊT§èÛO;\x0008r9ÕÊôOÝ")"k¨nK \x0010DBpðhb\x0012û[áDº°õ³±ÁF\x001aÅ$°\x0012Hÿ\½IjB-\x001cä\x0012\x0014¼êOÂpPy×4ØékØu\x000fÞ ÎT
¡?8(Òq½v1òZÊÁÔ Õ$|·á"\x0013Ñ/S\x0008jÀ\x0015TèÑ÷Âkw\x0018ù9¶iWUM9_\x0016\,ëÓ3CýG\x000cöFØê75ÕbÆz=\x0005©È(Û%\x0006³±YiZÖäµXÁ¨AÉ\x001b.[</p><p>\x0017\x001dÕ¶C\x0013Éh\x001a/?±E³Ô5A{ut\x001f\x0008 `¨ø\x001fcçÙ$×Uá§oÙ
³²K\x0012°q(°q\x0015\x0006ªø÷ü\x0010</p><p>llÂ¬
\x0013on>L:¡Ïìêãhwö\x0013ú¼ý\x0006\x0015¡grR®\x0018]=g4ûüò3ªlÂÝ¢ãfU±¨\x001aê\x001e\x0006ÉüÆ«:W	i0~ÇÁ¹\x0003¿%äyÞKLÛ§\x000fÞ©Tâ\x001e\x0012öTñ\x001c"¾\x0005(\x001e)cØ*í ,V\x001bgP\x0014\x0017.yvõ/ÖTíÿ¸+M;@^Çæÿ\x0001¿ÍÝ'\x000eLÈ²^MS±ª7T]E+-R\x0008ù('\x0017¡\x001c\x0017äetJÓÕ¬ê%ëfC/Jåuø`Ü¾'ê\x000b;</p><p>\x0005GZ\x000f[>cAA1ä³3]=ãóW_òõ\x0017ßòìú9d#VuÃ|±f½®éûmÐ¥\x000f²\x0004!®«»±!\x001c\x0011«ó\x0015ó C½\x0010$8Éyûu°5\x001cAÄÀL}qÀ7ï5vJ!i&\x0017¨Æ\x0003DÖ-Ê=k\x0018ãÈ\x0003íup´\x000e®L\x0002Ï§ñüädëÛî6\x001a¡\x0017
UÏö<\x00167\x0002Ýý¹Cm Ê¨\x0019<1n ~MÙÿ\x0010r´-êçäâxB\x0016³þÙFùüßÈ«ªÁiWªÏ\x0017</p><p>{úú@47	ôÓd¸'\x001b\x0003°ì</p><p>R{&<\x0007MÎ«æÝ£n\x001a:QÔÄ\x0013A\x000eëîþ\x0017\x0015«(6Ìd-Wê=¹ï=C¢Eí\x0017`þ	Z@¸pÆi3aæ\x0019ÔÙ"§x(\x001a-6ú\x0000Â\x001a\x0015ë0 \x0011\x0015\x0008¶6*ûoÝ÷Ì7\x0015YQRæ\x0005ççgL§O\x0011^ YK#\x001bºÅ[Ú¡&\x0017Ýù"B¾CP29¾#ê©N:qï±AÔlåî</p><p>n=nZ"ûÌf·æ\x000f\x001cóyûhNhÖî³ \x000b²â³ÙsÊ'¯È._Ð\x0017OØÔ-79÷M;ì²±å*G	lÑº`\x0019±k)\x001at9\x0003I¬\x001c¾+tÉ0\x000f4bvT	è
áüóýû$°à°\x000e§þ¡JÔvî\x000fÃ±lîUXm*î0\x001a\x0019#¦£§¼|þ\x0019õ÷´mK×µôCEËz°+ÖUB]¦öM?´´mEßÕL¦#F¬\x0014f\x001bÎØô
ÍÐ\x0017\x0019dJC^</p><p>Í0Pr&ç\x0013ÆÓ1vÃº^Óví® ö={¸óÖ«2Lsò!§¤äúâ×/?å¯¾á÷¯¾b4>gQ7Ü¯ÖÜ/W4m¿Ù\x0014$B\x0010 Yµ\x001aûTx@\x0014GÄ\x0012ìmî|w\x000eñ>ýÉ\x0011?&|h½q'±¨Á©u0\x0001Û/â\x0012\x001c\x0017	;\x0014ÑG \x0003ùxcÒ>ôÑîL\x000b^~¾ê<²àg\x0003=CúþÓ½d\x000båõç¿Q§x(2$',E\x0003Aú~¯÷\x0015§âÜÓqîË±¯ \x000eë\x001b+¼§ë\x0005ãCRÏÂ!UíÞµx®\x0003þÞëï}\x001c\x0004MrLQ\x001bùóÒ[,±FÈdø\x001d¬Ü18i\x0013)V°¹\x001c°î\x0011k\x0013Ò\x0004±ý\x0014¥"\x0010@8-=7ÿÓ3ñ\x000ccÜg\x0013Z\x0017¨\x0017så+°\x0014¿
\x001a%Ç`y\x0017\x001cÿ\x0006-p7¦\x000f5Té§¬\x0012,\x001edÈcÇ+<&9ÆýMq_\x0000Yªa!\x001e½#s!r®Í\x0015\x0016<:9Æ\x0017ÇÄ|ý&Õ;åí}×±Z®¨t@¸àÅÕ%ç³/\x0019OO^²Ô\x0019óÛ÷\x0014Å[r*d¨¡_!@.ý±{ð</p><p>î·ÜG@iUÏÉ=D\x0019â\x0019NíGd¦Ùn\x0011ì\x000f?³_öOq+Ö)\x0011\x00116è%£á®øÙo\x0018¿ø;LRe×Ü7\x0005¿Ü¯y·¬©ºN~÷MÃ¾u®N\x001b\x00117\x0005á\x00149>\x0000EN\x0012êå$\x0013R( 46rHb1ÂDZ\x001c@\,²ûþ\x0010ÒÉÖÖ&Óm¡Õ\x000fp³¬ÉÊ\x001aÉKòé%Og_ñÙë5\x0019\x001fÁðOæË\x001f SD*\x0006éPZ\x0006êÙ¾G\x00152¥ªç|ÿÈônL_fdã%RV\x000cYC¯\x001dóÕ\x001dënIAÁº[³é6ÔýAZÆ«3È:þõßóæíÌW÷H¾«½î\x0014Þ[ãvP\x0008¹\x0016\x0014ZRjô\x0005×Ó¬\x0000á¢\x0000\x0000 \x0000IDAT'|óé·|÷õwüáó¯\Ì¸ÝT¼_¬¹Y¬×
ý¡XÌ¢´a?ò\B^O²ÓKg\x0010==¶$5æ4yÈ\x0014cL\x0011\x0018zz>\x001e\x000fÌ	ÛÑ E\x0010|IÜuq¯ßº¾øºbz\x0010w÷,
fwÜïldU\x001eõLÀ#h}`ý±;\x001eá¸/Þâ/z\x001ejx`\x000f\x0016Ø\x0013\\x000bnGÌærï,=q/î³-ÒÌÎÔgÝU\x0004±ØÈì!Á÷@\x0012ÑA$\x0007Ï\x0015ð\x0011\x0003O£+<¦°Mk¶_-\x0004JýÉª­\x0010Ûo@MTã"F¢v\x0000^!i³X	\x001cò]LI#45ä¯èfD´ù^ª	{$³X4MA#do­m¶\x001eÜhHKµømÖ¸]ù}â­ÚíS'\x0007<(Ó`ì\x001dÎlù]ÇýjÅÛ¾Ú\x001an_æLÆO\x0018=É=Åè
Ù|M_õÐ7\x0014ºm\x001d\x001eÏ.Î=;×)×\x001cJÁ/=É±¯Ú[µxï-s2Í·I4H>b2ù|öñÓß_|L«c6ÕÀírÃÍÝºm·\x0019Øû25J?Jz,EHX2ù\x0005ZC¡j\x001d<\x0013\x0014´¸]" ÜGYD}=©¼vÍÿ ]­	lêw\x001fni
z=æ£ëk^^¿fOKþóSÍû_ß!Ò¡\x000c»ÃÁá\x0018\x001bÆ£êÀj½¤jÞðáöÛyÇ?ýÅòaèPzº¡e^Ý¡*ÜÎoÙ4\x0015ýÐeÂºZóý\x000fß£ÿP~zÿþMµ¡(</p><p>gLm7®Aí\x001eØr U\x0011É]ÌøóþÂßþøW¾øä\x000b®¦3nV+~ùõÛUÅªíèÔ}½[Ï\x0000uóÝî£Þ`\x0012\x001e\x0013BäwE"ÐÀ\x0017$H\x0000yh</p><p>DÿñXÍØÉ{JÍ\x00191×dyp\x001cW\x0012ÍÄC ?[OàÍ	ç¿S=x­
=ÚW	§\x0012u
j³ácyâøQVö÷j"mRIê\x001eâý.Dr\x001f\x0018{j/Åîu\x00141tìT×¢¿/mÊ\x0003\x0002\x0017(n½\x0001çJù	"êy\x0012É©õ8zâü	\x0007q\x0003ÛDÀ\x0011(añh¥{kñ\x0014´\x0012zEêgbî§BK46ùö¹$ÙéþY#\x001aðÛÆ\x0016òzx¿AÎ²g¡#1½@E¼¿èZ\vêû°#\x000b%ð¾gÒj|_$ªÛi¢ê®\x001fNø¾b´\x000e?ÈýTÅç 8S¹A`5(\x001fê\x000e\x0015Y>æzrÆ´,\x0018]*g:£×÷ôÕ\x001dYÿ+9 ¬Ø\x001a\x000c¶»\x0003ÑàS\x0012!ðqy&\x000e«Ì\x0015½\x000cân;æó­¹èv8£\x000bò¼¤üéùòò9rñ	r>c®\x0017,«\x000f
ï\x00165÷ÕnÇá=¤"ê\x001eeÒã\x001a\x0010pt-\x001f½%É]
=ÒMØ\x0015E$¹ÍÁIq¡^kpÏU¶\x0005\x0015Ç¼nuà/\x001aÆÿ¾ È?ì§o÷ÊÎ¤Gã</p><p>ÂßËªÞfÇp\x0019mD %È-øßú'Ù°o/²|e2§géµÌçCWuçVMêÄA£µfæËx\x0011\x001c$</p><p>®uÈª¢À¡å	ç³\x0019ÓÓyöÜtÇø\x0017\x000f©%è\x001acÚ½Uq8ìN~\x0000¨X¶ÔMÅ²zàí|Íª^`M-Ö¶¼¹û¿ÿW\x00191¿½£²\x001bZÓb</p><p>¡²kn\x001fßRý°â¡Z³m·PìÌþZ</p><p>Ý	#\x0016 qÂ'<9Æ«¿ã»¯ÿÌ¿b6½d[\x000bï\x001e7Ì[V­£V3fï*äü»$)n>ÃnÝSC\x0019K¼ÎE»Bé¶í\x001d-©Q£Dl\x0019\x0013§ùÑX=Â0-:È,â\x0018Á\x0000¯\x0010¢&
É$_ep\x0008õ64¦*C/éÀ]£ól$h4¢î2çþñ8\x000e+R	ÜÄ$«$Tñ\x001c©QSSN?\x0018kê=t/u0 "ÀXÅówPN!1[á\x000fÄ¼âQåJRxûþ	hCª³NÖÑh\x000fäQÕ1<\x0012A¿~\x0012J\ÎEy°»ypÂñ$éxä¡¾	4Fþ²¨\x0016\x0016Å3¾	s\x00193E\x001fY2>×G¶Ä·*Úï´údlÍ\\x000c"\x0001R\x0019#z\x0002ÝÔÜX==\¢«ÐÔ\x0006GUÓÅË/À¢ÅÛ§\x0017ýßh\x001cþ#ç#PÁh\x0003*Q÷s2)à5\x001ai(\x0003\x0008â\x001e#K£\x0004YµC9Á»o*ö\x0001 ½/È´wÍ\x0013jU«ÈºbìZê\x001a®OK®Ç\x0017\x0017'H3g<>Ç­ßQ®ÁVÛN§Ö°³Ni½õÅ0$ä!1Ñ¶yG¹º¸ìÞU+%-1­Rf/_2ºxByú\x000c<¡\x0011\x000f[¸[TÜ.VÜ¯**Ûâ</p><p>\x0013tw\x001f\x001c5ÙegãÅrN\x0002¹¨¯¨ \x0010²]ì\x0005ê±þ6­ü
\x001eªëÇ°\x001eñý4úKBî;Ô\x0012k\x001e<?¸/ê\x001eÁVU6uË½³rIaÆÌ¦g\]\x0014\x000bº\x0011ÿý\x0005îîß°ÙZnBá¿\x0001vIª¥±5M+4n</p><p>5Mw4ÇbóÀ?ý@aÆ4µÅÝ\x0015FimÃ¶ZRÕk*\x0001C\x000cÙ~ß\x0006St\x0006ß\x0005%gÓ3n®?âå§_òí×äÏ¾älzAÓ(+î\x001e¬kKÝQöÔm
ðÌfí\x0010\x0008 IzF\x0018Î\x0012=÷Laª¹âõ4."Aw½düöBÚR\x0007.Gb\x0008%\x0013¼\x000eø&Í%á8;\x0014m^³ ï·|ÀÅ×-"ÉXJýR5£%×ãG×¡Ãzô}ËÒÔaÑ\x0010\x0014×Qä¤fY@2¬¤M2î9m\x0001·¼FV"u$\x000bÿ½(\x0001+'Ý\x0019jâ@Y¦T%)ýCZ\x000coF\x0003\x000eH]\x0017\x0004¤\x0013 \x0012h\x0002üä0¯qáý(ÑA\x000e </p><p>.XuQ\x000f#&î"^|ßr#\x00138¿wÌ÷\x0007\x0002 ¿Û­úhC\x001c#\x0018ÉB®¹g£_h\x000b\x00036z@Õñúû á&Â×Sh\x0012K\x0016÷~ñµGÚï¢bT4Naxtî§\x0003¼\ 1:xa!\x001b\x001bûj\x001d\x0017\x0015\x0012èdC4ÉÿÜtÇ´ªl«wz³ÁU3ÆW\x0013Nf3ÊëO(Ï/a}	÷Êz>Ç5\x0016ë*Ð\x001a£;Ä¨\x0010ÂÜ_4\x000cý\x0011+ÿïc@\x0015×£Râ¤\x0004\x000cÀÈ æ¢|ÊäìâÉ\x000bÌé%¶<§v\x0013ÖùrÅÝbÉãjÃ¶iQS Úç\x0013Ë¡aÄÓ\x0006æ-ÖÞ1'óóÔÙ8Ü¸$aÞ:³³Ò\x0015¬C\x0006<i\x0007¸¡h±\x001f´§\x001b`ËB*XulëûÇ\x0005Óñ	q:=åúâ\x0013ñQé\x0018FÜÎa]ÕX»Ý¼ïõ]::\x000bÎaLÁlR².Á´;ebi</p><p>³,\x000bb×Te ,LXïTª¶×o{IM»fHAÜ.FÐPp6»àÓçñú×|óê[^¾xÅd|AS)Ç%·ó\x0007\x001e7\x001b¬1¨ìFëç¶\x000e\x0015S¢ñdÒúÔâ1Ú0n% ?óü\x0000ï\x0005 ò=Gyâù5\x0014¯:à
\x0001}\x0012VÔ°;Íx4ôÞ¼ù< \x0017kLË­\x000cè\x0008sÒ¶¼².m^ÕÄ´&©oR\x001f¾dýDÂ¾\x0001$k\x0013ÈÚzT4XkSK à
§¥ùúÒýó¥S\x0012½³ê!Â\x0003ò\x0002\x0019P?üåoÿÐ¤¶óµªazI\x0004c§0´xÏ#¦!=|L¢ì`2Í
r2®ÇuÆÊÈ\x0011ÃiÝÅ´\x0011\x0015ßdx}TD\x000fJ9XK\x000cJ!\x0006ÎÿCd Áá° â\x0010.\x0014\x0002ÒO~9fþ9`.+~ó>Ì\x0007\x001aÅ\x000e[Úõn=f\x001e3\x001c³\x000c:z^\x001b-*¿ÙÅÖyõiÿ,:öË÷¾ôÎ\x0001=â+]W¸éÆÔÈ6\x0014À´,¸:òÑÍ
\x001f\x0014\x0006£\x001b</p><p>;gswÇâ×²zø\x001fÍæ»eRÂT\x0014Ò`°4Ýýi»tCÓv\x0018Ã ôH ìb	)@\x000c\x0011PÐÊÖ¬ùÓÓ\x000b¦/^~ÎÙù9MqCrW5¼]n¹\rW5TMµ-ÎYèRsúG#ü' \x0007</p><p>F?s=·Ôä(ì¡Ïä·>àd6ï\x0012Z9f\x001dóÐ.?ñ(u¡ÝØ1\x001dÞÖ¿W#U&ºË\x001f\x001f\x0017«]Ëó«KÆFiÛ[î\x0017¿ðË¯?òÓ¾çÍS5·\x0018SS\x001c¦hP,V\x001b8s4¶ånUs¿Xñ°e3¢Ñ\x0002ar÷E±</p><p>®KM²bh¤\x000fAk»z­\x000e\x0014ÆÍ\x0008m\x0005Ú\x0011'\^ò§×ßñûoþÀW¿âéõ
NÍ.­æ~ÁüqÁb³Å\x001aé|Q
¶CíÙ¶î\x001dßGv\x001bïh"\x0017¼ôôÈ\x0006c Ç>nªL´r\x0004Å!¤H\x0013\x000b<	\x000b¦Ð\x0013P\x0007\x00116*Mã\x000f5û\x00199\x0019\x001a9oÔÏú\x0018ª\x000e&>%ããºwt¿§×£	í|?\x0013y\x00183l±T$ ®s× w)\x0018\x0017­*qA¬A\x0003\Ìåþ%ú«åÐç Vó\x001fj\x0014<GÞç²ôÛÇ5j\x0012\x0008éC2h´\x001bÀK\x0008wFþwBMb1Çû§yG'þX£\x000c\x0008=\x000f\x001e\x0019*qpx¤Kñ(l\x0019êz\x001e\x000fgs|\x00141¨ï÷wSB3õÐÂ!Bo3\x0005x\x0005Gí\x0011\x000cvA\x001f-þÈÛ-\x000cYÚ\x0004:®\x0017Wx´\x0008t2	¨hä})Lõ÷\x0014É¹Fªø§\x0012Ð>&2¿áDÕWkt×ä¨ûÇ¶µëS®ÎO8</p><p>³rÂìÉS&Ó/¸^_aWsÅÍò\x0001­W´­Ûõn])(âöf'½ák/ïèµÃZ§Xç\x0010#4Î2L&3fÓ+Æã\x00197\x0017¯(Î.1Ó\x001b¤ü\x0008pÌW\x000f¬Ö[æëwÕöÿ[oÜÆ\x0015ÇgÈ]î®V\x0017K¶\x001c%©Ó IPô-_·©è{\x0002Ej$¬öÆËÌé\x0003¹Ü¹Q6ú`\x0003¦¥%äÌùÿåÈ\x0001a\x001c\x0010O\x001f­VIñÄ¬×\x0019¯´o2\x001bâé\x000fÑ\x0002/ù$\x001cZ3$\x000c7<ß>O®y4OÎoVbU§æ\x0004A	º2C´ß\x000etåùù\x0005í\x001c®iys³bY	·7o¹¼ñþþþkÍ/\x001fÿÁfóÃaº\x0003ÎXL	¦\x0010¤)Y¯g`</p><p>la©w¶\x0019æéA)ï¼\x0018\x001b\x00037\x0019ýãÏ|Öþ;-W+î®Þóíý÷üùÇ¿ðó\x000f?óæây¹ k\x001d¿o\x001ey||aW74Öab<Ï	á\x0008ºpTlá\x001f)&§6Á[±ëÊ¢>ÁÜ=´¯£ÖcLÓ\x0011ÿzâØ7¢î>¯*õs\M©\x001e¹cÙ\x000e\x0016·bDrÑEß;,$Cßzå;v×|Õ¶d Z\x0011`º3 "©'dôý³­ìX)\x001d	S\x0013³ôÑ&NS¤pôÑSp"¹Ç\x001dõ)ùº/~¸C§
ÓYø#Ù\x0016O¿îßI\x001c\x0013ØÅL\x0014Cý¤°\x0010Ä\x000bêðâ\x0004ÖÄRÆ/\x000c5³é\x0017é82K1zF	5y©ü\x0011áÂÖw\UgÒ)\x001b\x000fßø|ò\x001c\x00173haùÄZ4Ë\x001aù\x0015~Q>Î&B2%éÊaò\x001c\x0019¼Q7ÿùwN¡E»=\x0012q>µ)å,NO$DqÍWýìçù\x0006\x0011·i*[;õêó&Oï}, ðð\x001b\x000b'¾tÆÚ\x0014+\x0003ò7ç®ãß\x001bË§Ærµs»ºd¹\°X­)æ5æbGqõ#lÐã¯tõ\x000b¶9Ðè\x0011Û\x001eÐî\x0008Ú!j{|ÆÙ\x0015ç\x0018Ú}f\x000eEo±£RQÌ*kÌrÍluG¹¼cV-)\x0016ß@YQË}7g·¯ùeóÄþp`×ZvV±#ïÌ¯\x0018ô\x000bÚ­B\x000cï'$Àiì"F7Ô?æ·£#Ãk&Ðø©Ó7ç\x0005ëøÎGáÕÅ$÷Ø£ç\x0011Ï·\x000b\x0000²\x001ei\x001bpG\x001c: }Rz\x000eíóÁÑÙÚ:n/+ÖË\x0015óò··Èww¼¹üÀãã/<}úÈöùWöÇ
­Ýc»\x0016g,RÀÂ8Ss(\x001a\x000e¦ÏÀ¶}Þ\x0010F\x0004wZ´l%eN`­¥²Õ \x0012\x0014¬W¼»yàþÝ\x0003\x001f¾ù\x0013ßÿá'\x001eÞ~ÍÕú\x0016ë\x000cö-Ûí§\x0003ûÚQ;¡¥ \x0013ßÈÞÏtÈµîß\x001d\x0013Ìí:¹\x0003ðÅ\x0005Þv[ãq\x0019Î_\x0001Ëê3Ý½QT\x0014z\x00131pSm'iJ_Öª</p><p>÷M'þ§·ÖKÊÎ]?W\x001dð×wÙ	\x0004Wÿoùò.ÝyøeæÜ\x0007MÊ%\x001aùñ¯i3"ãø!HT§iþ{\x0004ïÅ+ëuÅS\x0006Â\x0004äõ9_\x0011ÊúÚ9!\x0012¡FóXynÓN.¡Á¤·Î©\x0012}µHè1N¦z¸\x0019¹]\x001a*;Åk-ÕÙ\x001e!\x0016Íñ6ÿrr¦\x000b\x0006C®Ð°±?düî©\x0004ÜÏ¶9»7ß\x000c\x00056ç/ªçñç$"4kß\x001a¢Á\x0016pC£¢\x0010\x0012)</p><p>	/#AvâÜï8¢ü@¡?24ÅK!«z<Ù!=\x0012¶üüø¶ñzÃ¾\x0006ÊiC3\x0014!IxÀ¾:O¼wÂ\x000cÅc\x0000Z{\x001b\x001b\x0007yn%\x001b,oúÖÐ*l}Û°¯¦.¹¶\x000b®f\x0017Ì5åâ²zCµ< íï\x0014Í\x0016Ûì Ýb[\³E»\x001a±M¯¾Öî\x0014:H[­³%fVA¹bE1_¡³{æÕ\x0005eõ\x00063¿¦(ç´\Ò´çÚòx8òü²ç±>Ð´-æ¤ì\x001dC/%\x0018Ó¡\x0002Ñ\x0013Sù´\x0014æ^ke¤n\x000212W`{­.Bn/\x0011Úå¬R±TÜ\x001aÌ·â²\x000eEáÄ\x0018±Ôãÿ8ª\x00168 µÂö 8\x000e¸Vh×\x000bÖ«\x0019ù\x00157W%ëê»«\x0007^nãùù?|zúÈvûÈ®~áØí±Úa\x000bÎ*V³#Ù¶9p\x001c@çÛ
sSS</p><p>1Ü\x0014WÌç\x0015óYÅj±æ«÷\x000füñá'îß>pÿî[în\x001fXÌìýíí¶æP7t\x000eº¡-\x001dPg±wZ\x0014Ý9«Ò§\x001d\x0011þ¼G÷æ·h%-2Åk'\x0007\x0019Î¯Ì\x0015IÑ­¬\x0005DFbÐT{\x0010¶5¶ó(f~\x0004o²_ñÎËÇö¯/<¦L*\x0003ú¸\x0004K¶½\x001fKñ=9_ªxb("aO\x00104:3F^Ì!\x001d$\x0017ßè[îIæºÏb_ÉÐïÄfñý}­`¨#\x0016!ÉÖ8ÃÕñfùHdj\x0016®ÞN#¡»yã¬$°¢Ð0v(·\x000b	¼Qcêàö\x0012®\x000eÞ¯\x0006ê£°B\x0010B'tfí	b5(ÜáÃ\x0014¯Mè¹©\x000bÖ \x001bõ'Z/ÅEü¿Hi\x0011q¶\x0016Iäò^¡u£øÅð/Â¶HüR\x0007Bh)\x0010<"O½,\x0003\x0002\x0014ò{$h!M\x0019º\x0004ò\:AêOÁ\x0004dLù\x0002ë</p><p>É!Q.µ¢Ù6ÃTûüÌ\x0017wþÛ\x001f\x0015#z~ãåv{%ºÿÇø\x001e'ÒÅªñ~IbÕ9µ5¶=b\x000fÊ¾®9.\x000bÕEU°Ï(\x0015f5c®5âjL»E;´ÙA{@mÚ\x001au§ÂQz´Q</p><p>-)f\x00152[A¹Ù\x0002½CÍ\x001ceÓ\x0005Ö\x00196uÍËËÇíß·
Ãn~ÊP\x001eØ~ê\x0006ô'´ßH0Ø\x0010\x0013´<Ío&\x001b9xBFbµè+iEQzDÞÍ_|Îl«\x0010\x0014¼\x0012ÐKüy7Îº©±?Ú¿DK°¦\ÌÑªC\x0004uí®¡;¶\x001csv\x0015ë\x000bÃåjÆrqÍÅrÉÛÛ;æ§ÍG~ãéå¿l¶Oì[¶c>kp¦¦cG×mpuK×u÷bó</p><p>J</p><p>SôÞÆ°^_ðõõ7\]]ñæê··÷|øö\x0003\x001f¾úÕü\x00129­]]³ÙíyÚlÙíjêÚÜ§µÃpÖýWl\x0018o\\x000cäÔô\x001aX\x0000"Y	Ñ³^`_=,­Bå`\x001e|ÚZü]ýÎÞH\x0017\x000bb.3ß0{Lò°&±+Aê?,±t,\x0014\x0014Éñ¡\x0013\Ðl\x0008Jr²fà\x0011ºKü\x0012
±°7~ÆùÀtó¯+\x0010Üy\x0005³J\x0018¨Apè¸\x0011ösz\x0000IÐTMRÒ
nÊ7Ô0ÒÑ'ú#Ñx\x0008ò×¿ý]'äeÊ),P7L\x001d¼\x000e-÷Y>\x00121L|b\x0006R´ÐÒbÔ\x0008ÆtÖ\x0006EEa-@Pè9BËiol,ú\x0019]GàëOI\x0002Î£äÜ\x00194PQjÂIÔ \x0008éÿm<\x0004M=\x0004/m³k@¤'³k$g:®ájß;P\x0014}\x000b9%TIc&®ujÐÚ!R½ÎÃô'\x00107.\x0012fÜ\a3"\x0014UädX¬0\x001b&¶Â\x0008¥1bÆcÆ\x0018\x0018¼\x001b-=PU{q:,\x000e«n8\x000e¸~T\x0014&ØÕ÷ë±¡,KVUÅõÅëk\x0016¡*y!ÿ£îìzÛÆ±0ü\x001cå¤I:3ÛîÍþÿ\x001f¶3èv¦MêÚ\x0012¿Î^Ð)rZ\x000c°À\x0006ÈE\x000cKv$<<ï\x0017(½¥ÀÔBBÔWÝX\x000bXD\x001cY,-\x0006+Z,ñ\x0011¼\x000f>rò)\x0004¾|?p8\x001cø\x001e<*Î95`.©ÖJÎ×«@ÒÕæ\x001f\x0019Ãß\x0012¯ü½¦¯ÝÿÉOý\x001c\x001b¤\x0018Å_þVË®bÀZ¡ë,½3üã×÷üúxÏÃ°ãÞ9öF\x0010ä<r\x001a\x000f|;<óüòé\x0003Ówþúú\x0017¿ÿñ\x0007^þÃËá\x001b9+®ëq]Ç½g¿ßs÷ÈÓãoüóãG>üò§Ç÷<Þ¿çÝî¬Ê)gþòÏÇï|ýòÌñ8\x0015³øTæß+§±²Tª\x0008l¢_+©â\x0005=ËçnKæ\x0018ójÂ_uÀ.â¢K·Ì|E·æñõJÖ]õ§Æ³nÐ{~ö<ÿ'enïÒèôÿôy~ö¸FrÌÏ\x0019¥oöú[7íG¢[Z\x0001÷\x001b</p><p>ûÍyjËlã3WçÙ¨NÏãâzÁZíÜ°^ÞÎ»w­\áú|ó|YiÅ|ÎÌìÕÂ1Kádë\x0008bâp<òéóg¦i"¥Âº\x0019á·÷¿ðáéaÀ\x0019\x0003z\x000e|ÓÛ¥²¼56\x001a¤×­ãµUk1óC¿ùyóÂ±±|í6ÊLU½õ,Þ\x001a\x0014¢7b\x0017e\x001eLÇ
óÊSn/Ì7	ou[ºQìÞ<_ý~Þº\x0010·\x0008kK£¹$wäLÞ9z×Ñ9Ç`\x001dÃ®c\x0018v\x000c}Oo\x001d\x001d5¦\x0014¦l~¢fR*bÖb½\x001cs$¦\x0011ï\x0003Ó)0M¬çMê+\x000c§¯åÐ\x001bË°Û1t\x001d»Î±ï-weç\x000cN"N2Q:S,TDJÑXT
>+1+>fÆ|`\x000cÓid\x000c\x0011\x001f\x00131'¦H9\x0011T	\x0006±3m$Ëå»Ék¯¸¼\x0012¯\x0005ÿ\x0002´F-*ûÜ¯séqºV;ìEJ\x0014\x000bïUÞVn¾µòl)Tç^¬Z9^lqµm>^þ²ö»[nj¥°Yta</p><p>\x000eæ|ÞH\x0014q£\x0015¥w¡3Ü\x000f=\x000fû§»ww;öÖî\x001d¤#\x0019%ib</p><p>ÃñÀ1\x0018§\x00151\x0016×w<t\x000f\x000cý¾Äÿ©åaÿÈ^ÞaÅQ|J\x001cOGÆcàè\x0003ÏÞó<MLã\x0004Z6WÅºçX5\x0006kÌ\x0015¥ÒK:Ìµ+¯dRR²\x0011!)½õ:æRÏEµRÛ¡«\x0002úgÉFqSÃÉZÛ¢µÆWã5\x001ac
ZÔM!¢rKß\x0018ÿ5âTi
Zªá¥¨¬9òv\x00166\x001bã¾ùüT³ÒÈoå··¯k\x0015¤\x001bªò\x001f§k«=¶æ,m¨¶\x001b÷ÕC.5L6¯'\x0015ÍM+ÎSs^Ó\x000b<-zDgóë<£¾nuÇ·^mÊur,Á¸Y\x000b|£\x0011{.J}ü²\x0005¾Å%·Ï¥})Î\x001d\x001a1$\x0011¼f^¼çà'\x000eÓÄËéÄ\x001fÏ_ù÷ñãDN\x0011§ðØõüK\x0004¹Û#û={cèSn·\x001dãfðgue>Rßùd¾n¤heM"\x001b\x000f,\x0006êÁ&Ùp5\x0018gEüj¡Y\x000f¡ë`\\x0015n±o-ºî\x0002ndß\x0014à40Á9\x0004Àû³5aÖêõ9oHnN¶¯·R®)<57ÔäB\x000eî¬¥w;º½ãa¿çn\x0018Øõ\x001d½5ô½ÁY\x0015E.)¼ql\x0011¦d§×$óbh(>|>e¼ÏN\x0013ÇÓ\x0011ï=>zÆ\x001cJz&²f¢</p><p>\x0001Ç8%$X\x0008Ö3Bï\x000cNJÁØ[Co
ëK¯T\x000cª`Ê¯\x0010"1+1¥RØKÂdFTJg4}ôîÐõÝªksUþÝPÎÍl\x001bÊÇ\x0006/ªEIX\x000eË|¢¹;l(7onvjUõ¦ßÜÜÀY6@\x001bY9æÑ\ g~z³\x001dõ\x0002\x0002«|'ó\x0005{=I&\x0012\x0011\x000bFó+EM)ü£ÏL1p\x001c
ß¾\x001bî÷»N\x0018ú¾ïèú\x0001ì}I6Ê`\x0012]\x0017yÒ²ÐK \x0011z\x00190Ö\x0010Uð*LÆ#Èä=ãä\x0019§ñ81\x0006Ï\x0002&ÏsÎb­Á²áê{Go\x001dÎ×jºÈ¥\x0000L9R"&%æLÎÅ\x000eh&!0¥TàkæVjµÁ²VéOÒäÃT¸¥H;GVÖ³lrß·yôÊÍTõ7£1ç®""\x000bQ«HE\x000bF¾rýYíJËc}ÃVOXwÌZåÎÜU¤q][*7&»NsÛç7Dt¬\x0015Úº:fþöLÄ²TØN=[Ýö\x001bc¬VU7\x001aæë\x0010</p><p>N_Î´Ø·*«zA{ü\x0011ÓÚæ\x000e¼Éâ^\x0014\x0016[Y´­ã®ß«<ä\x0006\x0015!\x0002§øýëW>=?óåxàëéÄ§Ã7þü~ Å\x0008)aUy²=ï>|àcVÞÐ\x0019C.ß#Ï9$ÝÂQOþ·\x000c[+¦§h5ë,2PYKü[ËU5/ïÓ\x0005Wq\x0015ë·\x0011x¯\x000b£ëy¨Í´Ý^
£¥)ri%cÌ\x0017á50¾²\x000bíÔ[ü3]&\x0010©.D1µá¢n\x0016Ë5!þR"\x0018\x0011\x0006gKW±ßq×\x000fÜï\x0007\x001e}ßãE¤t\x000fCÌ!£)S:C¸:7(s\x0017ò¼\x0019écp¥ètNØ÷Âýnà´ïÆ\x001f9ø#\x000fhÊ¨ç¥TI1¿Z±\x0008z.\K\x0011ÙÙò\x000c8\x001bJ)«Rbÿ2¹@äYÏne¯y!K\x0002)Ñt*6ÃìTçOðBHTGs-ß×(u;×ü
²Úü}«MÛ«úlÜ\x0000Zñ·kw %¼ÕX-ÿÊüì¦íK5öÙ]u{¾Î¢¯ÝßWÞ7¦ò\x0018\x0015\x001f"§Ñs8);\x0017K÷üÌ¥uÝåÞeÄ5=r\x001e)z¦\x0001å	ªä\x001c	"x\x000c!\x0007Ì¤L£ÇC \x001d\x0000\x0000 \x0000IDAT{O\x000c")\x0004&0ÂÐ÷ìw=ï®³tÖàl1\x0013ß9GoBÜÔ&÷\x0017\x001aÓ^s&æb¦UñXGËËè\x0019C)nC\x0016BIYÏß»ØW?Öµ\x001e»Ý\x0005\x001fE·àO¹½¦®OÕ²vY²¾\x001a°ÝFÎ±´²´ÿËØy-¹\aø;È8ÒÊª]¯í*¿ÿ3ùÂö½J3!A$>¾\x0000Hv\x0002gu£Pâ\x0010¡Ãéÿü!ñgÑôXô¿ÌL\x0016Bg¾øçÏRVâ\x0013\x0017 \x0002\x001b\\x0011ÁÕÆ&U.þZpÏ¯NHwBª@hYÿs].M«ÍÃÛ÷¨´:3°Ò9²þ²é]ÌfQKxÝÁ½	Ç¬jÿû\x001c0QzÈÿI9ì§Nk\x0001	^½\x0008!¬OaÎ¦ª\x001f\x0006¾þøÎ?¿|á¹Ùs\x001czZ;08­ªÒ
\x0003\x0016ÆS«[»×Û£B§E Õjö'pBE"äÏ .qõ£\x0000 öÃáfúQQ$'JYÊYÊ_15=×ÎÐXx 
?¹\x001e\x0007\x0016C.RåYÛ8\x000b\x0012+¦%Ry'®qZ ³i\x0012\x0018aä*æ9\x001fª\x0005ëªfQW,ê%ËeI5½~\x00188÷\x0003»öÌëñÌ¡í¸\zº®£·Nñxµ\x0012É\x000cY¿P×5ÛEN]fTEN]mïu½f¹Z²¼\¨N5ÇÓ¬m8N\ºáæ\x00079ò/9&v@§p\x001eì¾/cZÊÍQÞ^Í·¯Ï \x000b
º®\x0005ïä_ £DAÕ\x0017¾ykY¸9ÀÙ­ñÚ*Ø²p.ÝJ|\x0014Ú9u9Æ8\x00136Ù>|§\x0016\x0010÷D/	ÓïÀf'äðFØxèÅ\x0012Î$</p><p>\x000cWê\x0013¢N0w)0%­¨s8\x001f\x0005$öV,Y\x0006úáÂy¸·f¢bädSá(Æb</p><p>ÈrÒOÁÑ(|ägØÁ2`\x0018$c°\x0016ÓÂ¥» Ö`P\x0008TeIY\x0017ÔÕ²fU\x001aò\È3%7L\x0002±\x001dÆ\x000e\x0018µ\x000e\x001açóß)\x0004+\x0019VÌèH 9mU²>ç\ºqN{8´-sÏ©\x001bè\x0007K¯#çÑÈfqoÿi\x0012Ü\x0010}\x000c Dï/\x001c1V\x0017ulR@JÚ\x00144NRó¢pCZã\x0005ÊE¿!Ù2\x0011%\x000fTq¸J¢,ñõ'[Î)~](Ku¯\x0002\x001d§1¯	1¬	ñûÖ\x001caÖÎ.I\x001f\x0008â\x0014C</p><p>N$bÑ\x0014X¦×x¹çAF¶«\x000c\x000bCY4ïû|uqj+AïYÕñ ÔD»Yj®8,ÑgûI²Ì\x000eañ@\x0019\x0016´µÕN\x0011hF\x0018\x0010^
ß\x000e;^Î-ýØÜvx#¨ÑÂÁdä&£B(¦!<©½+q]ð=¤Â·epÁ\x0003ÜlK|cj¯ªnD¢#\x0011×Èµ\x0007qñÛ 2+Ø­½ÃÆ0÷\x001c9×U@\x00035m\x0010îì]ÙË7}ãçrkÑ«óPJx§AÛàê\x0017¦Q®ëÜõþs\x0000U</p><p>c(²§zÅv»æózËª*\x001cÎ\x0016þÂó¥çõÔñ¿¶ã{sæ·¯_øýíýùluôò\x0010µEÌÔÎ.óuY²¬kK>o6üúËOü­ÎÙ\x00149u]ðËê\x0013*BÛ\x001c8\x001eì\x000f\x0007Þ=m{¢g,\x0014\x0015è25L¾wæö<3xq6`LFÂ)Ì-¾-;çà³-ï NHj!M.¶©öZêøùN,V</p><p>i÷Ä\x0007Ý´\x0011?³tt»î6zên\x001fäÔ¥v<\x0017½¢ÖiùÛ¡ !"\x000c×
lT`k«*jìÄU½Sz\x0019\x00043\x0008ÙùÎ\x001d³âù×ß)K2\x0016N¶TÚ»\x0005©)\x000c\x0014¹°ZÔüi±®KÖUÎ²Âôäú</p><p>Ú¢zá\x0000¶®ó\x0001¹´Ð_Æ$$,H6\x0015Ã\x0006&/RÍkÈ+L^Aù\x0019É3(? ²ø¼\x000bÞöðõ\x0008ÏÇC{¢é¡×\x0011|¸Æb\x0019¹Å2àFcº;¥zBÂÿ0X\x001fgÇH\x0004\x0008\x0006¶</p><p>\x001e"ýh,>\x001eCq+VÞ?ò ë¨p\x0010q\x0005êòÎÝ¦9ñ5¤.ÈÍÊÖ0h;pZ \x0010§\x0011cyHEI~6¢Ê¼¿\x0017\x0006Bõ@\x001cr^ÐÙû\x0011ÇB*ÝâÁ½ð½9Ïxú{~Cù\x0001«®³ù­0r2¤Å)]\x001c\x001f\x0018?sÆ·b\x0001Iø;á|Ìl\x001cz¥yOb\x0004EB
Ë¼¤+Î\x0018:®\x001f¦Ó³µ c\x001bðzbG6é4z?U~K\x0012ú\x0006Jx²ØLnÙ#1Á7´K\x0016p~w-\x0000ÚÃÂÕã6ÈaÍc\x001e`\x001e§Ú³v\x0016s§²ùÿçs?äÁ\x0004\x0008ÑNoÏÝ¼\x0018'´ÑèØ\x0012+²ÕbÁÓfË§í\x0013eIaSoÙ5=¿ïZ¾¿¾ðe÷ÆKÓ°?]hz¥¹imOÇ$ì\x001a·àëPöÆÀuÌdVéºóåÈónÏQþåüã·5ß.ø´Ùðq»æ§õO\x001bV\x0005eU³\¯Yo7¼í\x001av#ó~èG\x0003ò«åÎ4ÓÔñÃÔ)Ïõ¹X¬z÷\x0008t×D×7 «\x001c[Îó\x000e=ÕÜ1ô]|'\x001e0òj\x0008}6IxÅÍ îê\x001c\x0008\x000f}ìRñÉñ\x000e</p><p>\x0014Ù¬ðð\x0000\x0017ÎGñ~Ë_}\x001b\x0017B\x0006\x001e7ð£WVo[¿þ»u\x001aKÀÜÞInQ&}ÞÐU&,ªMU°­s6ë%\x001f\x0017B,¶þ¶
ÓWl@û\x0006\x001d\x001alD\x001631C±\x001d2\x001dzôv6£»\x0011\x0006)¬$Ëk¤|¦(J¤ú\x000cÕ\x0007(*ò\x0013\x001f\x000cfµ`y24Ç\x0013ß÷\x001dÇÓ³µtv\x0014«
8!Xý¡_â·o\x0000Ä#^*\x0003Y|þº<qÎ\x001eí\x00030A=Eê\x001f\x0008fidâ?ÕÇÞGÛÇÌA1g)\x0011Ê5}%Üõü\x0010^qÄiÎ¤öÃá\x0002OV'F;á£@ÿÅ¿yxÿw</p><p>Z¸~¸\x0016tÑP®§z·\x001dzà:Ïí2ª\x001f¯æD  mä.è\x0007~\x0017AtcBI|DÜ<|!Ç¯Ä\x0015á÷Ê-\x0015¦\x0000\x0016dü²~Â`hU¹dçöÈç\x001f\lSÞ\x0006ÜýöÌÂÕ)0ì\x0015\x001dq¾Þ\x0010y`Çc\x0012\x0005\x00075ø\x001bà);9à.gLe\x000eh¹£"ÆûnM
X\x0017¡{éäS¦5q+.ö­L(
ØC5	[U¤gÉÏ&</p><p>Ò¨¸w;'ÓñD\x0018Õ§µQ¥\lK¶
ËeUå?MË÷}ËÝ½íxÝïy9\x001dÙ_ÆH´3Ù(äÊË/N\x000bXÜÈ	ñà\x000b3\x000f\x001bkQ\x000cÆZ\x000eòÚ\x001c9[¯;67kþòëùëfÍ¶*¨Ê\x000fyNYÔ\x0014ECÞ4öÀÑö\x000cv\x001c<×ÍÏN(¸
ú\x0001nó\x0006gºoÍþâ³I[$Eâ¤\x0019\x001e±D§¾Ã\x001d\x000b\x0008ô®ÿ©ç\x0008¡Þy©ù,Á"û\x0008±I}gØ»{6àj\x0006\x001e®\x00024Eütçf\x0018uFH´wD:¾óx¹R&\x001e=K®ÉµH´èÈ/~æ0K×»¦\x000b"ÌW%ÛeÍ¶6¬KKU´\x0014ú\x000c-ryFNßàø¶ßþ\x0008ö\x0004¶Eÿv%Mn\x001bWø{ÝX\x0008Cr43²]QÙIUrs\x000eùÿ¿"WÉ©HNìÙ¤Y8\@\x0002Ý/n\x0000½#9¾J¦$î~ï}Û\x0001Ä-\x0004»¶RÖ×qLeÛ*IÊ\x0001Ê D\x0006-ç`7Àd\x0005Sðì'¼ÂL¾EQ-°Ì%¼Àf'ñR7Ø\x001e\x001aÔÇ#à|uïã"\x0003@(~\x0016xÔ:!J®7J=»i°Cå¡\x0000F=¹¶ÂIg¼gÓÐ¤'\x0014Fñv¯Oá)h¼cÆá@y¡hP\x0019¨aBL­:mÍCAs|*¾Ñ[¿A0\x0006qpê²{åÉàÚS9±\x0005O\x0017âa"±MÄñoGyÌ"f¥[j'YÙn7ËÁ\x0014Ñ{\x0005¢\x000f©Ó\x0008Þ¨@\x0010ÌÈ@¨dwo.°Z®ÐÈ\x000c5\x0018¿Üßâóã\x0003\x001aíòzâî' ²sñÝR5</p><p>\4"øÚáÞk:?äqK\x0011AoÔç×²Çã¸\x000bî´µ\x0011Yô¼)ÇtRYÀ¯¤½ ì´\x0012äÝÄ(\HnGuJÅL\x000e9\x0005iRÂªÀ}Ý¨Å</p><p>\x0014\x0018x6Å	Mq\x000by9Áâlj:A5 /</p><p>ìXáùi\x000f_\x001eñÛÃ3\x001e^¶¸9ìQ\x001f\x001blYá`\x0015°ù¼Q}¯Øô®§Ðmg×õÐBh³±\x000b5jÍàú\x0008Y\x001fPîöxÚnñ¬ýjïV\x000b\Íp>)0e\x0000I\x0008!AB\x0000û-êVõI\x001d\x0002£\x001dø9­w'n¶æ\x000c©C:\x0014P&'¡\x001d'FëµéwLþOMn\x001cÓàp\x000cÂô¢Ê¯\x0006þ¡[Ê\x00139u=H\x001dD7¥Ù\x0008Þºt@û\x0018\x0001Ç	6°ºéÓnëÐu;\x0005²ÅØ</p><p>© 
åC\x0010¦@Y\x0014øaUb1É0</p><p>ìÀm
}ø\x0008u\ê[ÈÃï@½\x0001\x001d\x001fAÚ¤\x001c\x00117&.³Ï#ÒCô\x0003\x0003q\x0018=H°5\x001f·\x000c\x001eM£tx\x0000×sPY¡­w\x00109DUcR~*¯Ù\x0012ó¼@K<K
16-ãÐjÂ*»S\x001f}»! M}³èI\x001d¶t<+H\x0018ï'ÿÿÒ:Ù´§\x000e\x000eþï\x0011\x0014Þã«÷â4\x001fÍá8}\x0002ÆÄ\x0016\x001c$¸ >¤\x000bÈ ð>\x0011\x000fL]êv$PPûp~@)Ò«øC`Ûëþ}\x0007m2õ?^l\x0010÷ü»î\x000b
ª[</p><p>R\x0018ø´·SÝóè¿Å@\x0010\x000fTBLÝA`~J\x0010&2Ã\x000f\x0017\x0017he\x0006åX·-î÷\x001b¸@ÿ`:\x0013È~fÏ·+e3@¨Ã\x000cÍÝý\x000bNdT\x0002ñø¼1¹\x0017FÔ'°ëÃ\x0018L\x000e|"±yO¥\x0014¦Ö\x001aÓÙÌãíI©\x00071}h9qf\x0014L&vÌó¶cyãÅBùÍF(,r¯¿\x0006o©\x0014ô=&Ö	³ÍC>¹;E3°\x0017Aj \x0017I^`µ\áru\x00061É¡°kZüö²Á¯ÿ½ÇûëkÜ>¯Q7
ê,\x0016¦XTBXë(\x0011Øyå²"vuë/\x0014Ø®! ¥\x001dT°</p><p>êÝ\x0001/×·Ø<oðySãÝÕ\x0005~zs³irR`EgµÛÙn\x0000V6mÃê_½B"\x0019¯(L¢Ä#O}Î£vV¯²\x001c\x0004)ÅËIµäÁJ¿jjz\x001eÇ¸QÂÒ<Bÿ\x0000ÅQd6§ÀrëKÿkÊgo,L!yÆ\x0003\x0011æev'^\x001fa\x0000\x0014ó¡<è-Ñ)\x000e;­+pH\x0005d0(Î,'\Î2Ìf\x0015Þ.\x0005&8"k×àú\x001eÍþ\x0019jó\x001eMý\x0004:Þ\x0003íg\x00107\x0010\ÛÂSõEâ\x0010? D¢Ð´E^L#møÖ&Hk\x0003y\x001fr\x001c6Gäå\x0014<¯!æ[\x0014Ó\x0005¦Ù(«\x0012EV`ç¨2\x0001Ú+`¯ÁZ÷û>ÿr/(\x0019ªRJ\x00041VÞñé´-oØ9V#Q\x0018­\x0017ìå	\x0001gùÞ¯m&?æÒKCJ#YÉ\x0012\x0012×!4y¢\x001e\x0007.©×¹#âl:n\x001a®5[¼O·i*Mª\x000e!fÿ»RP¿\x0003%B1j*^Å,\÷\x0004=È\x0006©6¡s÷12QW4\~3w½Ï<\x001cÆOì!0+ì\x0013b\x0018\x0017w?%ZDBA\x0012­\x0016h\x001böp\x0004Õ\x0007hÕ\x0018\x0016ùÜ\x0012m=½`ãªà±{®´­XAw\x000f\x0002°«ÅµµzèmZìM\x0010Å´'f¦\x0001°å\\x000e°²\x000eÒ4ü?ß+ÉÓêN\aoÁa¿Çíí\x001dîîï ÂÏ?ÿ\x001dÓÙÔ¼Ý\x0000ÜÌæ>¶/e¦M>÷\x0002n¤çðDAEA@Êe/âit¢½m\x001f0#|¢¢3ë¡\x0001\x001eI!§\x0018á\x0000æ°sÆF,2£\x000cgeåb7çXT\x0012·­Âõz_¿<á×7¸½»ÃZ1\x000e Ë\x0012ÌÍqfba\x000cHg9LRw\x0005>\x0005\x000f?\x0005\x001chw¦\x001c\x000e"(ÍÔ\x001d\x001aV@ËxxxÁ¿7\x0007\>¬ñ«süõÝ[üm:Å¢,0-rÌË</p><p>å\x001c/k\x001cÚ\x0006-\x0019¡b{\x001cÛÄT§A®41\x0010¹yqZÑs\x0012O£	ñè$¢I\x0001ø«½JX§Ódö$d\x001eyS
NúIÒi\x0011KJQ\x0019¯rx¡iñ\x0010½¦\x000báÉWæ¢)¸B÷ÝhXÄ\x0018¼\x0010\x0007k3³¾f°V¨2ÂlZáOË\x0012ï9¦Ä¤ýv·Úþ\x000eÚü\x0007²~l>!W[~ä'\x0008a~\x001f³ÖLþ` »\x0007\x0002}\x0006ú÷,i4¬\x0000I\x0010\x000bpKÐú\x0016Ôä8\x001e?¢Ý'+ÐÙ?0]bZüóÅ\x0005ö³\x0005ª
pÿDxØo°m\x0014\x001aÖö
áüÔñ}ôÐ @hñU"Î½fÿüMM³N\x001eÆùv42I£¯x\x001d\x0005©gp2¶×¯?åO®¯äÞG\x0011êÚ[ÿQ<""ë¤±=ËÝ3RvÉtjjì<º \x0013-Há~\x0014LCÎt(jA\x0018Ê1öýû ¡\x0011H.Ù¸\x000fO¿Þì0Jå¤Ñnk,e áj{£´)6é</p><p>ý(*ôÜ\x001fÖÆ_]-&`TAií=°\x0010\x0010]!	ãÕ \x0004		¥\x0015\x0014ûí73\x001b\x0008PY¤âÁ[±ÿý¦{ÕJ£,</p><p>\x001cu\x0003­\x0006\x0013y\x000f\x001b\x0019\x0005®1éÍò\x0002Z+ÓùÚiÖ\x001a÷77øåÃ\x0007ÜÜÝáòòÒ²:\x0008'4'
;2¯«p\x000fû 8\x000b_çþ}\x0018Ãñyéæv"°ÕqDVI5wÒnc¸Ñ%<\x0007æænÑ(Øá3¢§\x0005\x0016³9Þ.X.ç ÄÓþ=­ñáæ\x000e®oðq_¦Af=ÄÐ/wëHÖòE°y\x001frè\x0010äN½»Á\x001eSD{¤fûr7s±\x0013m"\x001cBslP?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://www.ars.sante.fr/cookies-et-traceurs](https://www.ars.sante.fr/cookies-et-traceurs)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/santefr-linformation-en-sante-0](https://www.ars.sante.fr/santefr-linformation-en-sante-0)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/400-postes-de-medecins-generalistes-pour-les-territoires-prioritaires](https://www.ars.sante.fr/400-postes-de-medecins-generalistes-pour-les-territoires-prioritaires)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/mentions-legales-10](https://www.ars.sante.fr/mentions-legales-10)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/ma-sante-2022-ou-en-est-de-lacces-aux-soins](https://www.ars.sante.fr/ma-sante-2022-ou-en-est-de-lacces-aux-soins)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/les-5-chantiers-pour-transformer-le-systeme-de-sante](https://www.ars.sante.fr/les-5-chantiers-pour-transformer-le-systeme-de-sante)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/fonds-dintervention-regional-rapport-dactivite-2019](https://www.ars.sante.fr/fonds-dintervention-regional-rapport-dactivite-2019)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/ma-sante-2022-decloisonnement-et-reorganisation-des-soins](https://www.ars.sante.fr/ma-sante-2022-decloisonnement-et-reorganisation-des-soins)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/accessibilite-2](https://www.ars.sante.fr/accessibilite-2)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/pourquoi-transformer-notre-systeme-de-sante](https://www.ars.sante.fr/pourquoi-transformer-notre-systeme-de-sante)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/reforme-du-financement-du-systeme-de-sante-vers-un-modele-de-paiement-combine](https://www.ars.sante.fr/reforme-du-financement-du-systeme-de-sante-vers-un-modele-de-paiement-combine)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/quest-ce-quune-agence-regionale-de-sante](https://www.ars.sante.fr/quest-ce-quune-agence-regionale-de-sante)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://platform.twitter.com/widgets.js"></script>`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche-globale" method="get" id="views-exposed-form-recherche-globale-page-2" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://www.ars.sante.fr/user/password/](https://www.ars.sante.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-pass" data-drupal-selector="user-pass" novalidate="novalidate" action="/user/password/" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://www.ars.sante.fr/node/add/](https://www.ars.sante.fr/node/add/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche-globale" method="get" id="views-exposed-form-recherche-globale-page-2" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://www.ars.sante.fr/user/password/](https://www.ars.sante.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche-globale" method="get" id="views-exposed-form-recherche-globale-page-2" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche-globale" method="get" id="views-exposed-form-recherche-globale-page-2" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://www.ars.sante.fr/filter/tips](https://www.ars.sante.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche-globale" method="get" id="views-exposed-form-recherche-globale-page-2" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche-globale" method="get" id="views-exposed-form-recherche-globale-page-2" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche-globale" method="get" id="views-exposed-form-recherche-globale-page-2" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://www.ars.sante.fr/admin/](https://www.ars.sante.fr/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche-globale" method="get" id="views-exposed-form-recherche-globale-page-2" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://www.ars.sante.fr/user/register/](https://www.ars.sante.fr/user/register/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche-globale" method="get" id="views-exposed-form-recherche-globale-page-2" accept-charset="UTF-8">`
  
  
  
  
Instances: 10
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "edit-search-ars" ].</p>
  
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
  
  
  
* URL: [https://www.ars.sante.fr/la-strategie-nationale-de-sante-2018-2022-2](https://www.ars.sante.fr/la-strategie-nationale-de-sante-2018-2022-2)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/les-depenses-de-sante](https://www.ars.sante.fr/les-depenses-de-sante)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/le-financement-de-la-prevention-de-la-perte-dautonomie](https://www.ars.sante.fr/le-financement-de-la-prevention-de-la-perte-dautonomie)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/quest-ce-quune-agence-regionale-de-sante-0](https://www.ars.sante.fr/quest-ce-quune-agence-regionale-de-sante-0)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/le-dispositif-des-experimentations-innovantes-en-sante-0](https://www.ars.sante.fr/le-dispositif-des-experimentations-innovantes-en-sante-0)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/linnovation-en-sante-lengagement-des-agences-regionales-de-sante-0](https://www.ars.sante.fr/linnovation-en-sante-lengagement-des-agences-regionales-de-sante-0)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/le-programme-territoires-de-soins-numeriques-0](https://www.ars.sante.fr/le-programme-territoires-de-soins-numeriques-0)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/le-plan-triennal](https://www.ars.sante.fr/le-plan-triennal)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/le-fonds-dintervention-regional-0](https://www.ars.sante.fr/le-fonds-dintervention-regional-0)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/le-service-sanitaire](https://www.ars.sante.fr/le-service-sanitaire)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/les-directives-anticipees-faites-savoir-vos-volontes-0](https://www.ars.sante.fr/les-directives-anticipees-faites-savoir-vos-volontes-0)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/lorganisation-des-parcours-de-soins-de-sante-de-vie](https://www.ars.sante.fr/lorganisation-des-parcours-de-soins-de-sante-de-vie)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 56 [/la-strategie-nationale-de-sante-2018-2022-1?parent=4797].</p><p>Predicted response size: 356.</p><p>Response Body Length: 470.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://www.ars.sante.fr/core/*.gif](https://www.ars.sante.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/robots.txt](https://www.ars.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpg](https://www.ars.sante.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpeg](https://www.ars.sante.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/sitemap.xml](https://www.ars.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js](https://www.ars.sante.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://www.ars.sante.fr/robots.txt](https://www.ars.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-ars.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-ars.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://www.ars.sante.fr/robots.txt](https://www.ars.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-ars.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-ars.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/sitemap.xml](https://www.ars.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js](https://www.ars.sante.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-ars.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-ars.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
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
  
  
  
* URL: [https://www.ars.sante.fr/core/*.gif](https://www.ars.sante.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpeg](https://www.ars.sante.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js](https://www.ars.sante.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/sitemap.xml](https://www.ars.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpg](https://www.ars.sante.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
* URL: [https://www.ars.sante.fr/robots.txt](https://www.ars.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `fid`
  
  
  * Evidence: `set-cookie: fid`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://www.ars.sante.fr/core/*.svg](https://www.ars.sante.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js`
  
  
  * Evidence: `<script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js`
  
  
  * Evidence: `<script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js`
  
  
  * Evidence: `<script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js`
  
  
  * Evidence: `<script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpg](https://www.ars.sante.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js`
  
  
  * Evidence: `<script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpeg](https://www.ars.sante.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js`
  
  
  * Evidence: `<script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.png](https://www.ars.sante.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js`
  
  
  * Evidence: `<script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.gif](https://www.ars.sante.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js`
  
  
  * Evidence: `<script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js`
  
  
  * Evidence: `<script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js](https://www.ars.sante.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js`
  
  
  * Evidence: `<script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Parameter: `//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js`
  
  
  * Evidence: `<script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>
  
### Reference
* 

  
#### CWE Id : 829
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### CSP: Notices
##### Low (Medium)
  
  
  
  
#### Description
<p>Warnings:</p><p>1:1: The upgrade-insecure-requests directive is an experimental directive that will be likely added to the CSP specification.</p><p></p>
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://www.ars.sante.fr/core/assets/vendor/modernizr/modernizr.min.js?v=3.3.1](https://www.ars.sante.fr/core/assets/vendor/modernizr/modernizr.min.js?v=3.3.1)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.ars.sante.fr/sites/default/files/js/js_xoye7pqx6BBT4ijPmLLtDXFlcptcrv8PsFGM2SKm8pY.js](https://www.ars.sante.fr/sites/default/files/js/js_xoye7pqx6BBT4ijPmLLtDXFlcptcrv8PsFGM2SKm8pY.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.ars.sante.fr/sites/default/files/js/js_uPD_M7-gWNv_p6iQ4E5JJuwx0EXZKmh8rn4cGZBmssg.js](https://www.ars.sante.fr/sites/default/files/js/js_uPD_M7-gWNv_p6iQ4E5JJuwx0EXZKmh8rn4cGZBmssg.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.ars.sante.fr/sites/default/files/js/js_w-kHrql-8J73cGSdTF1bFTb_AGOSF8DYQoXLjFvTPds.js](https://www.ars.sante.fr/sites/default/files/js/js_w-kHrql-8J73cGSdTF1bFTb_AGOSF8DYQoXLjFvTPds.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://www.ars.sante.fr/sites/default/files/js/js_epZfbXJZQHGKAVwrnER6QCKKC2aUhnSDRHtYFW04WKM.js](https://www.ars.sante.fr/sites/default/files/js/js_epZfbXJZQHGKAVwrnER6QCKKC2aUhnSDRHtYFW04WKM.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.ars.sante.fr/sites/default/files/js/js_wBDemNmCDC3kWan0BYh6tB6nXy9odsYqsH89G1i46kM.js](https://www.ars.sante.fr/sites/default/files/js/js_wBDemNmCDC3kWan0BYh6tB6nXy9odsYqsH89G1i46kM.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.ars.sante.fr/sites/default/files/js/js_BS68aEne_Bs2hfTSrcSDf-dS105Chy25Qq3VIq0y2sw.js](https://www.ars.sante.fr/sites/default/files/js/js_BS68aEne_Bs2hfTSrcSDf-dS105Chy25Qq3VIq0y2sw.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.ars.sante.fr/sites/default/files/js/js_3hPHGMysLiO8xgnWoIdYdk71Q0k_JfkWDBox1LTGMXE.js](https://www.ars.sante.fr/sites/default/files/js/js_3hPHGMysLiO8xgnWoIdYdk71Q0k_JfkWDBox1LTGMXE.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.ars.sante.fr/sites/default/files/js/js_AUrGAOYxp8n9mAafFW5GmY-v-4nQIwmqNvOiQQmlAP8.js](https://www.ars.sante.fr/sites/default/files/js/js_AUrGAOYxp8n9mAafFW5GmY-v-4nQIwmqNvOiQQmlAP8.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
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
  
  
  
* URL: [https://www.ars.sante.fr/core/*.png](https://www.ars.sante.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.gif](https://www.ars.sante.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js](https://www.ars.sante.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.svg](https://www.ars.sante.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpg](https://www.ars.sante.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpeg](https://www.ars.sante.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
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
  
  
  
* URL: [https://www.ars.sante.fr/index.php/filter/tips](https://www.ars.sante.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=86400, public`
  
  
  
  
* URL: [https://www.ars.sante.fr/quest-ce-quune-agence-regionale-de-sante](https://www.ars.sante.fr/quest-ce-quune-agence-regionale-de-sante)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://www.ars.sante.fr/filter/tips](https://www.ars.sante.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://www.ars.sante.fr/user/password/](https://www.ars.sante.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://www.ars.sante.fr/user/login/](https://www.ars.sante.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://www.ars.sante.fr/sitemap.xml](https://www.ars.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://www.ars.sante.fr/index.php/user/login/](https://www.ars.sante.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://www.ars.sante.fr/robots.txt](https://www.ars.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=172800, public`
  
  
  
  
* URL: [https://www.ars.sante.fr/index.php/user/password/](https://www.ars.sante.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=86400, public`
  
  
  
  
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
  
  
  
* URL: [https://www.ars.sante.fr/web.config](https://www.ars.sante.fr/web.config)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/](https://www.ars.sante.fr/core/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.ars.sante.fr/profiles/](https://www.ars.sante.fr/profiles/)
  
  
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
  
  
  
* URL: [https://www.ars.sante.fr/core/*.png](https://www.ars.sante.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_Xu1mSUL2GZOJQc3RR-4KT0Jyhfae9NlmGr5TQKq8euQ`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_kGedKBMhp_wwYPPw0bpKNlM21qjh59dD1IzmbgTxDcY`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpeg](https://www.ars.sante.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_Xu1mSUL2GZOJQc3RR-4KT0Jyhfae9NlmGr5TQKq8euQ`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js](https://www.ars.sante.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_Xu1mSUL2GZOJQc3RR-4KT0Jyhfae9NlmGr5TQKq8euQ`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_Xu1mSUL2GZOJQc3RR-4KT0Jyhfae9NlmGr5TQKq8euQ`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.gif](https://www.ars.sante.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_Xu1mSUL2GZOJQc3RR-4KT0Jyhfae9NlmGr5TQKq8euQ`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_kGedKBMhp_wwYPPw0bpKNlM21qjh59dD1IzmbgTxDcY`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_Xu1mSUL2GZOJQc3RR-4KT0Jyhfae9NlmGr5TQKq8euQ`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.svg](https://www.ars.sante.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_Xu1mSUL2GZOJQc3RR-4KT0Jyhfae9NlmGr5TQKq8euQ`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpg](https://www.ars.sante.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_Xu1mSUL2GZOJQc3RR-4KT0Jyhfae9NlmGr5TQKq8euQ`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_Xu1mSUL2GZOJQc3RR-4KT0Jyhfae9NlmGr5TQKq8euQ`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�ȭz��y����ߊW���,��,�{��%\x000b�fN%\x00077E\x001f�)=	�\x0017�{�e�j�M\x0002���</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `todo`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `todo`
  
  
  
  
Instances: 2
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bTODO\b and was detected in the element starting with: "<!-- @todo Delete bloc search and replace it.-->", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js](https://www.ars.sante.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpg](https://www.ars.sante.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.gif](https://www.ars.sante.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 8
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefi", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Loosely Scoped Cookie
##### Informational (Low)
  
  
  
  
#### Description
<p>Cookies can be scoped by domain or path. This check is only concerned with domain scope.The domain scope applied to a cookie determines which domains can access it. For example, a cookie can be scoped strictly to a subdomain e.g. www.nottrusted.com, or loosely scoped to a parent domain e.g. nottrusted.com. In the latter case, any subdomain of nottrusted.com can access the cookie. Loosely scoped cookies are common in mega-applications like google.com and live.com. Cookies set from a subdomain like app.foo.bar are transmitted only to that domain by the browser. However, cookies scoped to a parent-level domain may be transmitted to the parent, or any subdomain of the parent.</p>
  
  
  
* URL: [https://www.ars.sante.fr/admin/](https://www.ars.sante.fr/admin/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
### Solution
<p>Always scope cookies to a FQDN (Fully Qualified Domain Name).</p>
  
### Other information
<p>The origin domain used for comparison was: </p><p>www.ars.sante.fr</p><p>SESSe7a36b2f1cd34f4db14e088f07b12340=ges_-XTjeYvHmu1gUF1P7B2Hrd0MH90ZjDvAQdiKGsc</p><p></p>
  
### Reference
* https://tools.ietf.org/html/rfc6265#section-4.1
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html
* http://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_cookies

  
#### CWE Id : 565
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content"></a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.svg](https://www.ars.sante.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content"></a>`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content"></a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content"></a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpg](https://www.ars.sante.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content"></a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js](https://www.ars.sante.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content"></a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpeg](https://www.ars.sante.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content"></a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.png](https://www.ars.sante.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content"></a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.gif](https://www.ars.sante.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content"></a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content"></a>`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content"></a>`
  
  
  
  
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
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://www.ars.sante.fr/sitemap.xml](https://www.ars.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://www.ars.sante.fr/robots.txt](https://www.ars.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `HIT from pebarsvarn02.hosting.cegedim.cloud`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.gif](https://www.ars.sante.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpeg](https://www.ars.sante.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `HIT from pebarsvarn02.hosting.cegedim.cloud`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpg](https://www.ars.sante.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css$](https://www.ars.sante.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.ars.sante.fr/sitemap.xml](https://www.ars.sante.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js$](https://www.ars.sante.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `HIT from pebarsvarn02.hosting.cegedim.cloud`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js](https://www.ars.sante.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
Instances: 12
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpeg](https://www.ars.sante.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=172800`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.gif](https://www.ars.sante.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=172800`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.css](https://www.ars.sante.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=172800`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.js](https://www.ars.sante.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=172800`
  
  
  
  
* URL: [https://www.ars.sante.fr/core/*.jpg](https://www.ars.sante.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=172800`
  
  
  
  
* URL: [https://www.ars.sante.fr/robots.txt](https://www.ars.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=172800`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1621807199`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1620683999`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1621029599`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `851728650`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1621807199`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `851728650`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1635703200`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1621029599`
  
  
  
  
* URL: [https://www.ars.sante.fr/](https://www.ars.sante.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1620683999`
  
  
  
  
* URL: [https://www.ars.sante.fr/robots.txt](https://www.ars.sante.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `851728650`
  
  
  
  
* URL: [https://www.ars.sante.fr](https://www.ars.sante.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1635703200`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1621807199, which evaluates to: 2021-05-23 21:59:59</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://www.ars.sante.fr/user/password/](https://www.ars.sante.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `form_id`
  
  
  
  
* URL: [https://www.ars.sante.fr/user/login/](https://www.ars.sante.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `name`
  
  
  
  
* URL: [https://www.ars.sante.fr/user/login/](https://www.ars.sante.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `form_id`
  
  
  
  
* URL: [https://www.ars.sante.fr/user/password/](https://www.ars.sante.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [https://www.ars.sante.fr/user/login/](https://www.ars.sante.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `pass`
  
  
  
  
* URL: [https://www.ars.sante.fr/index.php/recherche-globale?search_ars=ZAP](https://www.ars.sante.fr/index.php/recherche-globale?search_ars=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `search_ars`
  
  
  
  
* URL: [https://www.ars.sante.fr/recherche-globale?search_ars=ZAP](https://www.ars.sante.fr/recherche-globale?search_ars=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `search_ars`
  
  
  
  
* URL: [https://www.ars.sante.fr/user/login/](https://www.ars.sante.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [https://www.ars.sante.fr/user/password/](https://www.ars.sante.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `name`
  
  
  
  
Instances: 9
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://www.ars.sante.fr/user/password/</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>form_id=user_pass</p><p></p><p>The user-controlled value was:</p><p>user_pass</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
