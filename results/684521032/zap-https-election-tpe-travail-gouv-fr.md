
# ZAP Scanning Report

Generated on Wed, 24 Mar 2021 22:00:06


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 6 |
| Low | 10 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Hash Disclosure - Mac OSX salted SHA-1 | High | 6 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - Perl | Medium | 3 | 
| Source Code Disclosure - PHP | Medium | 3 | 
| Sub Resource Integrity Attribute Missing | Medium | 10 | 
| Vulnerable JS Library | Medium | 5 | 
| Absence of Anti-CSRF Tokens | Low | 10 | 
| Application Error Disclosure | Low | 3 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 12 | 
| Cookie Without SameSite Attribute | Low | 8 | 
| Cookie Without Secure Flag | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 10 | 
| Dangerous JS Functions | Low | 12 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Sensitive Information in URL | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 8 | 
| Storable and Cacheable Content | Informational | 3 | 
| Timestamp Disclosure - Unix | Informational | 8 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 5 | 

## Alert Detail


  
  
  
  
### Hash Disclosure - Mac OSX salted SHA-1
##### High (Medium)
  
  
  
  
#### Description
<p>A hash was disclosed by the web server. - Mac OSX salted SHA-1</p>
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js](https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js](https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js](https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js](https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js](https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js](https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831`
  
  
  
  
Instances: 6
  
### Solution
<p>Ensure that hashes that are used to protect credentials or other resources are not leaked by the web server or database. There is typically no requirement for password hashes to be accessible to the web browser.      </p>
  
### Other information
<p>FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage
* http://openwall.info/wiki/john/sample-hashes

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/web.config](https://election-tpe.travail.gouv.fr/web.config)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/](https://election-tpe.travail.gouv.fr/core/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/admin/](https://election-tpe.travail.gouv.fr/index.php/admin/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/node/add/](https://election-tpe.travail.gouv.fr/index.php/node/add/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/admin/](https://election-tpe.travail.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/user/logout/](https://election-tpe.travail.gouv.fr/user/logout/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/filter/tips](https://election-tpe.travail.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/profiles/](https://election-tpe.travail.gouv.fr/profiles/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/node/add/](https://election-tpe.travail.gouv.fr/node/add/)
  
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/Travail.Gouv" target="_blank" title="Facebook - nouvelle fenêtre">
      <span class="icon-facebook"></span>
    </a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/admin/](https://election-tpe.travail.gouv.fr/index.php/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="http://www.voxaly.com">&#169; <script language="Javascript">calcul_annee();</script> <strong>VOXALY</strong></a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/user/logout/](https://election-tpe.travail.gouv.fr/user/logout/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="http://www.voxaly.com">&#169; <script language="Javascript">calcul_annee();</script> <strong>VOXALY</strong></a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/node/add/](https://election-tpe.travail.gouv.fr/node/add/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="http://www.voxaly.com">&#169; <script language="Javascript">calcul_annee();</script> <strong>VOXALY</strong></a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/Travail.Gouv" target="_blank" title="Facebook - nouvelle fenêtre">
      <span class="icon-facebook"></span>
    </a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/profiles/](https://election-tpe.travail.gouv.fr/profiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="http://www.voxaly.com">&#169; <script language="Javascript">calcul_annee();</script> <strong>VOXALY</strong></a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/web.config](https://election-tpe.travail.gouv.fr/web.config)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="http://www.voxaly.com">&#169; <script language="Javascript">calcul_annee();</script> <strong>VOXALY</strong></a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/admin/](https://election-tpe.travail.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="http://www.voxaly.com">&#169; <script language="Javascript">calcul_annee();</script> <strong>VOXALY</strong></a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/](https://election-tpe.travail.gouv.fr/core/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="http://www.voxaly.com">&#169; <script language="Javascript">calcul_annee();</script> <strong>VOXALY</strong></a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/filter/tips](https://election-tpe.travail.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/Travail.Gouv" target="_blank" title="Facebook - nouvelle fenêtre">
      <span class="icon-facebook"></span>
    </a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/node/add/](https://election-tpe.travail.gouv.fr/index.php/node/add/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="http://www.voxaly.com">&#169; <script language="Javascript">calcul_annee();</script> <strong>VOXALY</strong></a>`
  
  
  
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sites/default/files/styles/block_image/public/2020-12/Vignettes-ARTICLE-831x467-03-Aller%20plus%20loin.png?itok=AYb9Ubgp](https://election-tpe.travail.gouv.fr/sites/default/files/styles/block_image/public/2020-12/Vignettes-ARTICLE-831x467-03-Aller%20plus%20loin.png?itok=AYb9Ubgp)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#J3BcX`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sites/default/files/styles/listing/public/2020-12/vignettes-DISPATCH-400x200_03-Aller%20plus%20loin.png?itok=us0ihF3r](https://election-tpe.travail.gouv.fr/sites/default/files/styles/listing/public/2020-12/vignettes-DISPATCH-400x200_03-Aller%20plus%20loin.png?itok=us0ihF3r)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#JsLg`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sites/default/files/styles/block_image/public/2020-12/Vignettes%20831x467-02.png?itok=Gm5VPbol](https://election-tpe.travail.gouv.fr/sites/default/files/styles/block_image/public/2020-12/Vignettes%20831x467-02.png?itok=Gm5VPbol)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#Xg9z`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#J3BcX</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/includes/communication/images/image-4.png](https://election-tpe.travail.gouv.fr/recours/includes/communication/images/image-4.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=�ii�Lg����o��z���D\x0014"T�$Y�뻕�Oظ��\x0013�\x0007�\x001b�\x0018σY.
\x001bݮ\x0005�l$\x000f�\x0010��h8
���d>F\x0014e�G1��\x0000o�="\x000c\x0003�L�K�}\x000f��+��c�{��n��61\x001a��X��!�uY���\x0013�\x0005B�~{���'J\x0016�v\x0005\x00181�f:\x001bb��P�T?%��R8��g�O�]oQd\x0006^��F]+%\x0006�s�N!�`�N�\x0017
\x0018y��N��󧕗��w�*\x0015�\x0004��1�Ӟ�&(�\x0014��ƾ\x0017��W��_`�\x000b�r/Ksi�3����*���1��V
�P\x0001�4�������\x0006���Rք�3���k;�Y�Z�\x0008W��jmi���1��qH\x0012��������\x0013ܾ����KV\x0014U\x000f6�CW`\x0012-Ө�`&\x000eI@o4D�eb=F%\x000b�_�a��b��Y�}\x0014�\x0019(�(g����~8���	L�B\x0012gru0���w�\x0011*-	b�F�7�'��eh��:���ZY�1�_,�,�\x000f�\x0015����\x0012��z\x0014�A\x0008\x0012\x0008���%\x0016�\x0019C�#�q\x00049�\x0006F\x000bQy<Tg�Ҕ��Xh%�k��F�\x0017t̀�
\x00013y���[U�f>-�\x0004ڊ:D\x0013�#\x000c����O�D����3<<,\x0005Z�5���b�b9\x0018\x000b�!,f�Q�)�\x0018��j�\x0013�
�\x0004� 3�<?P\x0019Pq*J<^w\x000f�
\x000eq.���t�=\x0001	Ad\x000b F���'����>I�s<�\x0002y��C\x001cC���t��Ύ�%�J�X�X�8�?�'n�*<\x001e\x0017�`��
h��ި���K\x000f�\x000f�خw�\x0011T5
N���\x001a�J��l���#�Þ�����CSj\x0008\x0003��\x0014\x0017/_�
\x0002�\x001f���������n7��Ǹy�\x000e�ד�c�ُ$������\x001ai��7\x0018�\x001e�a�cRXX��\x000c:l?D�W��\x0006�n
������\x0012\x0001�����x�\x0016���\x0007\x0015-<"4�h�gY�^����\x0001\x0000�\x0002�	���7�-\x0004RJ�\x000e\x0008uvq]u�UW]u�UW]u�UW]u�UW]�9ֿ�2�2\x001aڌ\x0007|�\x0017����q5��o�����){ɗЕ\x001aȧ�C�aU9��c�^�L20��O�M��9rÕ\x0006����v|�0��5�m�\x001c
��\x000efo�|��?�\x0001e\x0002�:�\x001a���|�ݻ_�?�\x0001\x001a����?�єx��;�\x0006}خ���1~�_`�x/�*�8\x0012�sHc\x0019�����ۙ�r(\x0011�.J��=W��iE�\\x001c�g�;8=\x001d����V�ʓ�\x0018�m���\x00056�\x0004q�KC�6k��\x0002\x001d_~z�2������\x0008�gC,�;Q�PU3\x001e\x0007�7���n���\x0014��\x0016MU���[\x0001A����\x0003\x0005\x0000he5�I��rE����&��[���.��(�\x0013�9��6-�2in��\x0003�\x000fuQH�7�\x0013�&\x001b�.3K�D��\x0002.,��|�\x0005"\x0010B�<���ԒIS	�\x0003�(��עHa����g���t��� s �@U�8-\x0010\x000e\x0002dI�"M�^�\x0005f\x0010��xlʃ4`0
a��|Q\x0016���\x000e��X�d��~��5�i��d���'����{]	Pl��d�G\x0010:X<����\x0000\x0017*Q&\x0017g�w;9�\��\x001a�L�<��[�\x001aA\x0018�9
g#�y�^�'�2B��ג�DK�C����\x0006y��yhm�s�\x0018�p��a:�`��\x0004�qd�j\x0001Bh�n�YM�B\x0002u�Hs\x001c96n���1\x0013�6\x001d2W�cZ�Q�$J\x001eym	�%\x0005k���)\x0015�1�g4\x0019��
Q�q,�\x0017�9\x0016;�F�1t�:R����\x0019lD\x0015�\x00146|\x001d�
\x0015M�\x0006b�\x0016Ǔ�N�L�c�\x0000$Mr��,m�*���pݕu%�FY��(�\x0012���\x0012�
3��x���X�E\x0005\x0012aŖvo��� �c�M]�e��S
\x0017C�\x0013\x0004\x001e\x000c͐�Q�C�Y*Vt}Y�<	�\x0008��Lא幀���	�6s�D,\x0012��\x0012s2\x0019"��r/\x0014�:����A�#���t*�D��Kn\x0017Ո��\x0018��#\ׂgk�G\x0018�NPd)N^~��(�>\x0018������\x0015��DΗ����\x001a��N�B\x0006*���/1=��
|TY
;\x001c#^܊E"�1	}L�\x001b*$�eM\x0008\x0008mՏ\x0001!�i
\x0008O���kr}s�񞘴v���9e3׳u���\x0013�U�\x0006��\x0014���pM�7�[���@�_��骫��ꪫ��ꪫ��ꪫ��ꪫ?���� 6�,iB�\x000f���\x0017s}����ה;¢�\x001a�؜��5��@\x0013PH��ڟ
�W�kN\x0015�(\x0012l���\x0017���g(\x0007�ؗ:
ݑ�0_�\x0019@�\x0016�\x001c�\x001fb�8b\x0019'y\x0012E�f�\x0012ic"�\x0002xa\x001f�~�bp��\x0006�z��wo�1'#�pX����\x000e_��_��d��\x0007�\x0014~���\x000c�a�,ɤ1M5O\x0014��S��ز?�\x000b6���;sQ\x0008��+�*\x0008�\x0017��{�`��P��"1qq>ū77x�g����/9\x001a\x001cŞ��l>Ûw7�ʡ�\x0014�
�*YV��e:\x0017�F�\x0003\x0015\x0010�l�Vt�|w����R6��p<�f�\x0015�pz:���\x0013��D��`�S�_��^_V����\x0010w�5l\x0013\x0010TՈh��++8MrqT�\x0014�R��*ĠEY�\x0019�)'|�E\x0019P"��\x0014� �)J��p���q$\x0000`\x0018�h�]\x001b�~�4�\x0014�h Ђ�'��DACPs��D�D�'�آ�Ah\x0007��\x000e�\x0003�]]�����S��\x000bgc\x0001r��?��\x0002<�ދ��\x000f}�\x0001�=� �\x001c��_�\x0000ۧ
Ҥ\x0016\x000b0�
�\x0007\x0015\x001b�������~
�����>��a\x0017	�#�"�����}\x000fq\x0014�\x0005[�g���~/ �J-Z�Ix>�r��\x0010hQ�@\x0018
��Z�ːl\x001c\x000f��/�t'���\x0018�i���~\x001b̯K�>�R\x0005t\x001a��1j��3ʵ�|P!Q�t\x0004!T�\x0011\x0000r?
�\x0019JId\x001b�\x0008��\x0018!\x0000!\x0008-�8�8\x0011�$0�͗��\x0017�\x00163D
$*"
p�5TV�z�\x0014u
\x0015<�J�n�\x001a�����0��P̵:�g\x0008�\x0008p\x0002ϓk��K\x0014����j�A?\x0010�C��(�1\x001a�\x0005�P��\x0003�\x0012O�j\x000c]2���C\x0019_#g\x0000��|!�Xjf\x001b�b���Ҷ���x\x0018\x0008x\x0013Uc��
&�3�\x0007�W��!�#,�lRMD��t:��=�?b���z\x0008�\x0003�y�^����A�\x0017�}���
�a\x000f�e�bеu�Y�2˰z|\x0010\x000bC*�в\x0010�7������{<��W\x0008ggX�ݢ(\x0012LNN\x0010��8~�p�G�Z��
\x0014�\x0001��@����k��9r�F��pi�I��\x001b�DuW\x000b\x0000"�N����)?X�
h���\x0008]G\x00007�k�QB���wT\x0010�6\x000eh�� \x0012UC�<�k���sF��.'����ꪫ��ꪫ��ꪫ��ꪫ\x000b���αi�\x001b�>��\x0006�������)�T\x0003Ou�6W���j\x00066F��{�dm�"�-�mw\x001fm�\x001a��
��wH�[�~�7(
\x000f��JE�:׏�s�4��R\x0003]�\x0008$\x0002ۄ6�D�N��S$y���`S�R$p�/1�r��70{��H����n��\x0013|��W�\x0011��o��`0���5���wׯ�߬E����4-��b�����2N�X�%I!O��'Vp�A��b/
ф�c��s-��)�R���IO\x0002�w�\x0008//O1�\x000c����\x0007�\x0000��t�ᰯrHlS�{�D�T�\x001f���F�\x001c��DC\x0010�Z�\\x0013�]��f�^�
د~�Z\x001a��a�Ct@�f��\x0013mS�7\x0011�\x0007���b�&�~��3��nT
9&�#_r�\x000c�R�ZZ��P	Dp1\x001e��X�t`�\x000c�\x001f����J\x00195?;E��\x0014��ac�\x0010�p�R�\x0016��f��j\x0013C34D��l/K\x0012�u.�\x001dn��|\a���a\x001bc��2�..N\x0004b��gЙm�=��g� /2Q���{��1n�o��\x0005\x000c��f��1�u�`<�k�xZm�Z�D�@t"k��x/�\x001cPA����\x0012�}* "M\x0013�̢\x0002��u�ڈ\x0012� ��v\x001c����~/�`�WJ\x0019f�\x0018
�\x0012"h��\x001a��l��gS�i���\x0007����9G�\x0001�q\x000f�v/�/�\x0006��N�W,��\x0006��D�O,\x000c�F����kY���He��
ͱZp\x000b�\x0007"��L�\x0003��
��\x00024\{e��ê\x001aY�����)\x0002\x0011e\x0003���m�I�e�U��Md#��)��@^7��e{��V�0��,�T[ovH�D�0:�@�2�Pd�@�(N$�K�ú�5Dœ�{rN��K�\x0011���Ї�T��đ~v1��U�\x0014\x001dy��g�OB8޻\x0012\x0001\x001a�����`�G�@��\x0019CUݴJ+M@&��Ї�X��+��m`;.�q&k�ʬ�l��z�Ѹ�o�{��|&\x0016�CQ\x0001�\x0002�h��W�dXqMOϯP�6V\x000fkdq�ӳ\x000b8~��x���7\x0018�/\x0004�=�]����Ͼ������?�\x000fFx�ÿ���@�"�\x0004P�g��=�B��q���E,\x0019'�ϑ��r�\x001d�FC����\x0002�m��t�R#\x0008���\x001eQ�i��\x0006N\x0006��3�\x000f�V��;~V$�Ϭ\x001bQ�q}RU�9�Xh�\x0006�#�q��k��"�{(������9�\x001a����ꪫ��ꪫ��ꪫ��ꪫ?���*�~��f�6Ouۄc���2N�=� S2M�{�a���Q-\x0014:\x0006\x000cfK�\x0010+'Ui4��A;��)t?����7�@�Rl�\x001a�Ծ�!dSX\x0013\x0019R�\x0014\x0004����7D\x0010Ć%���k��\x00105�Nw�\x0004c8Z�b{�:9���\x0016���xx�
��V2P�'
�,�\x0007Q%�\x000e�1Mid\x0012�\x0004�
�RA��O2���Q\x0017g\x0013�e�f �*�L�Xo\x000f�\x001cG`���\x0004��\x0001q^`\x001b�L\x0011��\x001a�,��p 
��2��\x0007��qHR�^�.T�ݴ\x0011���\x0017�
\x001b�lf�\x000e%V����yE	�۵��(�
3m\x0016�\x001dvq,y=�^O \x0004�\x0018��xi���~E����P5�m
�\x0003ɄI�\x0012u�7Zq�\x0012�}r_l�L�
\x0013\x001dR\x0019#΅��L\x000b��X�#>\x0010D��6��qM\x0011\x00000��vj��F��V�L!ĠZ�\x0016f\x0004\x0018l���>H6\x000c\x001b�Q��\x0012��y\���sQ>Mz\x001eL����\x001a��!�\x0017'�{w'Y0�\x000fOxZnD�A��Fy��C\x001c��\x000f)�]�8.$��*)\x0002�0�\x0011�C9��v/�\x0011��<7�r�\x00120H�3?pp��\x0005\x0016w�*\x0017E��,�}��D\x0014\x0015e^
�!4�Ҋ�)�c��5���r������B\x0014`z�QEK6��0�Il�D�VI�\x000e��c�QE�\x0017�\x0002k�V�lШ<�r�`����w	ﯕ�\x0017��\x00086��j�\x0015n�(�Z,�T�P!v^��7�C�w\x001c�rMPI$vom���^+�(�ϴQ�\x0012���j�KT\x001c�j��`�\x0000����"���ж�c�u6\x0019�E�B��mZ-�u�KR�\x000b�8�q�y��XT\x0015��f�G\x0007YKdT<w*}��A�\x0015��2ysi!6\x0001�R#��g�YXJ�\x0002�,�*Q�Q5�\x000f=��\x0002R�\x001f�b�fIV\x0010�}6\x001ba:�`�Y�=b�N0\x001a��&
.RA\x0017�\x0019�Ѕ��X<�\x0011�!��!��
�<�ٳ3�\x00043}\x000f��\x001c7o�1;�	 �w+ئ���w� �������W
Ĭ\x001ed�ܾy�h�\x0016�]\x001a\x001f��\x000e�}�\x0003�\x001f˱��Fই#Ժ
�)�>��^f��\x001e��\x0005\x0007\x0005B�D`�����`�\x001ea\x0006!R�i�>�9蹶��?�a�Wh�b\x0003�[�\x001c��!Tk�4�
S�C��a|�c�qq
�K�q]u�UW]u�UW]u�UW]u�UW]u��Tp\x0018�q�M2:4��_�D��o;��6V\x0000\x0000 \x0000IDAT�|���[\x0005�4ou�C��\x0010�۴M\x0015hO\x0010dJ��\x0011�7�\x0002=KG��
ex�m�\x0006���nsMHc��1Ҫ�.bԆ\x0003����6�Req\x0010\x00125���\x00009B��|\x001b[+��o$o�2|,~�\x001f���\x0011�(�Kn߾�vM;�\x000ca�EZd���B�\x0004���\x000e16Q"J#e�V�f�}k��f\x0019\x0006=\x001f5\x001bʩR�赎~`c���8
$�\x000e-͘��'�m�\x0007�����	\x001c\x0018\x0004.V�H\x0000�d�$�Xo�!]�9\x0006�P�a2\x0019��q)���d(�\x000bM3����RI�>no\x001fEI��2\x001b۳�\x0000��+i����x\x001ev�\x0003�,kaK#My����+�6�MDA�&?!\x0004�ݨ��О�M`.�$��\x000f�U��*v�C����\x0002�-���Z�%\x0016\x0001F���\x0012K@F^�UX/p0\x001f���\x0012\x0014y)��ʟ$N�X�}\x0004�w\x0005\x0008%�\x0018�˭XgQiUե\x001c\x000f���,�\x0017�x�{\x0010\x0005\x0014\x0015:?��3Y\x0017y����\x001eO�-\x001e\x0017kY7\x0004\x001f�ۣ���b���]Qz�u-���ıuL&\x0013l�{Y�ʺϒ|$�t�˥\x0002*U������\x0003\x001c�\x0015���"f�Te!��q]|��\x0017��Y>,d\x001e���X\x0011\x000c�\x001e-�yج���J�$ǂMr��q�h�F�\x001a�\x0007�\x0019\x0001�#�
C�v�\x0010[Ū��j�k\x0015<\x0004\x001b�e���U\x001b�_��	;\x0006���5��3�����\x0018�\x001c\x0003�^�uT}�'\x0003I�!��R�?�/īQ�d�{�m	\x0018$�$�)�.��.��n��!pr8�ɶ	~�>�kb6��8�|8��\x000fa��-i�\x00004�\x0004�<\x0008�F�!��\x001d<ו�M�\x0002�(�����/�\x0010\x0015�o\x000b�tlS�ɺ�k�vL\x0001:��JVW��b
GP�| �+\x000c<�\x0012���Г��@���~e\x0012\x000e�8�
��\x0019lː1��R*�\x00068=;���\x0002gWW(�\x000c��\x001c\x001b*�N�D\x00195\x001eM`�@��ai�ɋ�a�&�\x0006S��#�\x0017�j��\x001c��\x0012��\x0014�0@����\x001d<G���O�Z�\x001f\x0011�{p�\x001e��5�4F\x001aE�<\x001fF\x0006�%�4��۟b4�#zz���\��i\x0005,\x0014�\x000c\x001f\x0005A\x0011\x0001�z!yC�\x0011�)3`��x\x0002ń58�¬g�zπ֨L��R\x000f\x000b\x00084+KY\x0003|\x001ds�̣\x001d���J��9u\x0004C]u�UW]u�UW]u�UW]u�UW]u��X�̠��\x0010m��F)}�Xo\x0003�~�
�w�˪>
\x0003��'�-��\x0003"̠�[�d�d�3�#+�sMh�\x001bX�SD�
\x0019���
6��x8nS��
\x0003��T+�fc�\x0014�\x0008��Y\x0004�v�Έy#\x0016J��\x0010�����ȴ�,n�x�k�r>\x0005�]��W݈��Ջ\x0013�^��\x0015��\x000e���>����$�q�z�(\x001ftiT�\x001c\x0014\x001e�v�Hc޶5<��Pk��o?�ps��6Υ�N0�X�1\x001ex��W�\x0004\x0010PA1��\x0004�\x000c\x0007�
�.\x0016l�E�>�ܾn\x0008p"d(J��v!�\x0006/��z\x001en�\x0016�\x0010	\x0003GTLl�2�\x00072?��틒J�\x000f$i�4�E�a��
��\x0007����\x0008��A~fӝ�6wwO\x0002\x0004F�P�oX
\x001c�k��M�����ʂlГy��X��\x0002}�Zٔ�L\x0015M\x0014K̒y��9&�!\x001e\x0017\x001bQg�\x001a��mڐ��N%�\x0002\x0012�4�uQo\x0018��v��\x0003i�\x001fa�c\x001a��Rơ7\x00080�M����Ze���}\x0010\x0015I"c��j��d\x000c��2ET\x0008̯r-Q|Pu���\x0003\x001f��D��ܶ���T���r-YB���\x0014H�x�q,c��S<�/E�B��}\x0014i� ���\x000580G��+�q���z�\x0015�\x0016�FNk��y�<O�4�}8?��\x0000�4��l!�\x0010�Ŀ
'}5�Y!\x0000�k��_\x001cOB��ld����x�/�|�T3^�=���Fi��\x0016�r1�vm���z>\x0006��@@\x0002'��-yC�\x0000<Q�\x0010\x0014W��\x000f�vΙު�x�eY�z&Դ\x0004ޤ*'�R@��]�碠ῄ	�\x0014\x0004�T\x0002�ڎІ\x0019XQ�c\x001b�e�4Q�\x0019��"�G=�+~����PO��t\x0001CYY�����0B(�\x0001Bb�\x001bژQ	��A\x0005㨆�
�\x0010%2����`��J�~	/I�{�\x001e��ֈ����\x0006�@,�\x001c����\x001b�H���x����\x0019N�?���w\x0018����lvq���N�\x000b��\x0007���?>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/includes/communication/images/image-6.png](https://election-tpe.travail.gouv.fr/recours/includes/communication/images/image-6.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=����\ݾ#��Q�ϡ�/���k�\x0019cV�\x0005\x0007�O\x001f����\��Z��Z���\�}�k���GFƅ�Zk�8\x001c\x0008s�^�O\x0003�0��}\x0018%\x001c�7e%-bϢ�u��^�q��\x0002���+]d�m�����mC���S(\x0003\x0007Qy���%#��Ӟ�p8^�X\x0012����a'cWK���w-�\x0012�Qt����iP�	�g�HÚ	�f�2�'�׶����v\x0008�}��\x0008?\\x000c\x0019�\x0013\NQ�s��u<?\x0012��	\x0005>>�.t����s\x001f
<\x000f\x001cA�Y�k	Ip}\x000e�p?�D��\x0014���gԟ�/y�p*�]<�p�|!j
���5\x0013���`p};�\x0002\x001d�m&\x0007q���Խ�\x001d?3`�X��;�\x0018��H���3��\x0019�k'pr`�������?�>/���t����������3�Z,�\x001ai7�g��a\x0007��,<�&��d2�L&��d2�L&�ϕ� ��\x000b�z�K	�ȠC�\x0000�.}�a1�\x0000j\x0008\x0003�N;l&��;\x000f�=�\x001b�\x0007A�q\�IQ\x0014K۴�x�\x000eP#�\x0019ӆc��%\x0008$[,\x0018����_i\�\x001f�r�!�\x0000(9�\�a�L\x0017���4u-���b�&��W+B\x00008����[���"_�ݿ�0I�CDZ����\x0004|?����\x0000��\x000e1yG�{��H�f�6�\����eC'�a��(N�O�6�~\x001aZ隊\x0000��;��}��\x001e\x000c�\x0017\x0017\x001bB\x0010\x0000*��\x0005�\x000e�H�=����\x0018�\x0017��T�\x0003����R�_	�.�~%\x0015c�|��k\x001b9l�\x0008�\x0000v^�~���V�եDIN��\x0011l�$�J�JQ���ǽv\x0014�!]D���K\x0016K�\x001a��G\x001b�3T���\x0014��gX�{\x0000 D�J\x0018K�-\��B\x0017�D<OM�h:?�d�3�!�\x00184f�s�s\x0000H�J�}xưV�{�s\x0002�љ��&�ʩS(p}W���ؓӍ.����6�x\x001e{�M��;v*�=��\x0002d\x0012\x0014��\x0001J\x0008�&M���R\x001e\x0007:\x0015���~=�\x001av\x0013�i��y|�?�\x0002\x0004b����)�.��\x0001B�\x0017B?\x0007Y�Ϻ��K��\x001e�� w�i��&�M���9ž(���/Nb~��ټ�,�j��d2�L&��d2�L&�ϖ� ��\x000bQ\x001c�\x0012��Y"Υ�\x0001�\x001cw�\x00014�\x0005����sq`\x0000/\x00000�b�\x0010\x001f\x0006��:\x0016t���{�d\x00046
�\x0010�\x001dځ\x0002G\x0002�r�Y�\x000e#��\x0015���Y*u]K�&R\x001c�\x001c���p�e�I�\x001e�\x0008�Ա�󽘌�7W���\x0003����-\x001d9UY\x0012L`�MU�]9����V���b�B8"^(�rA@\x0004g�GgS$�Ϗ���:\x000f���u׍�`�?�Dq.�\x0010�W\x0014����?3�p� \x000c�1�\x0007\Z_]\x0013���4�����\x001b	p�s�:�\x0004�u��h����0܇8�\x0018�vz���8J[\x001e��'\x000c	M�\x001a�\x000b\x0001\x0016�+�1p�iCH1(H����\x0013�M��\x0005\x0010�\x0001�L
^�\x00153I\x0002X\x0008W\x0016��\x00062\x0013��P����1j�h�s
P�\x0010I�'��\x0007�E���{�/��w1p�vQQxT\x0019���5����\x0006�Á���7�M���\x0007d	鰚���+\x0004uv\x001d^��s���;5�idݹp���
\x000e\x0004⍳�h�J2�%�����Idt�\x001c�n"5�L����Ac�\x0010
�X��\x0001���I\x001c��Z\x0002߹��s\x000c#�\x000btGi'�B0\x0000�9��smI&��d2�L&��d2�L&�ϑ� ��\x000b��[\x0003�\x0001h�\x001848`XDρ�v�0>�w1e�\x0018�h=��|7����B;T�X\x001f]=���u�iw�\x00015b�PV�5\x0001	\x001c;	"�\�=�\x0015,��52���\x001b\x0005\x0003c/��\x0005{�8ئ�c����E\x001e>�@P\x0004�\x0005:r�TA\x0015�x�\x000fw\x001c�MEPS\x001c��M�|��7rx����F�S!��N�\x0017\x0017\x001a�ַtzܼ{+����+�G�\x0001\b\x0004�|�\x0004�S	\x001b\x0000�Ҕ%σ�\x0016��w�\x0015uU�8���\x001d\x001ap���(\x0008@\x0010����\x0001Д\x0012̝v/t\x0017�/�\x0008�\x0000���\x0005\x0001
����NN�g�@\x0000=�|I�44�\x001c��	a�$�r�*��Ea\x0011���\x0011�5@Ǒ\x0016��p*y�y�\x000e���n\x001c\x0002��}I�\x0004����s�\x0005��\x00107�\3X\x000b��\x0008�\�\x001a���=40��#�\x0003x\x0002�	\x001c4��gs���
"�>S�\x0000\x0013��k�׾F��=4�F����0ԥ9(�\x00112~�+�T\x001b\x0015z��\x0016�=C)�>����\x001d=3���L�k����"�
��?(4º����D�#���\x0002�\x0015�\x0011�?w\x0005y��4G�y��N�ٙD���\x000biԟ���\x0006BQ<��\x001cA����d2�L&��d2�L&��d��2\x0018d2}!���\x0013�.�A��t�h������\x0011i�Q�X8�\x0011F��c\x001f8�\x0002�\x0011�\x001bH#b�w�l\x0000\x000c��՘*\x0000"t�,\x0016�34
�H���T�,'x�Z\x0016�\x000by}z���t(\x000fg�\x001fH��\x001c��E�w�r:���;Vp�$Me��Jw�j}A �$\x0019���p�\x0018���Z��B�����i\x001a���@\x0006N(����\x0008/\\x000f VS�\3b��GC�s$�s	.�q��k�y2	\x0001���0>/
\x0003��ɨ\x000e+�\x001e�\x0008�/��)�rz}�l�$�j��\x0000b}}K��}FoPs:�^�e�5\x0001A{:�U��8\x0000�����k�i�\��gt�\x0016��\x0011�C�\x0003�7���Z52�u簓G\,ܠ�j���wBI����g�O�^\x001a���~½��q\x000e"��k\x000f|��饯KXw�sgR�\x0003�7��\x000c�Qƶ�	�"��\x0011�`�x��N��\x0013��{ї\x0005{�ZD��\x0011v:\x00126j\�F�\x0011Ρ#+�x/\x0018+�g\x001a�\x001b`F>s�L�z�<�SF\x0007W\x0008�<����6}&p}�74*��\x001c@\x001cu\x000f\x0018�7�."�� \x0005��\x001bI;��3��\x0003\x0008�\x001b&B3�М[iΐc,����%�ۤ\x000e;��AY��d2�L&��d2�L&���(�]3��\x000cUuKP�A��
�G��\x0002\x0018�H-�\x000e�\x0019t����9��\x0000��S
�0d���\x0002q. 8\�8Ne\x001c&���[I�\x000b��rpA](XK/�8\x0010�`xݣ#f\x000c�VJ�\x0005�3�zE@���M#y\x001a���\x001d\x001d\x001d�k�=?�ͻ�eyqɡ;�\x0017���� �bI�\x0011��T\x0004\x0004�<?��0\x000e���[B\x001f���׿�ZO��l��e�R�\x0012b�`7�\�\x0012ptu�\x000e!��a �a\x0014W\x0010���I�޼#8�\��\x001cFGL\x0018�q��b�e�Y34���"�I/����\x0014\x0007�R�)�D��U�䫵��Ҍ�%�����\x001dp@�S��r�\x0010��\x0016'\x0002\x001dqn\x0014�q\x0000��ÁN\x0013��\x0008[:�\x000f�x���t� �Od\x0006���I�k��J�-���x8�A\x0003\x0008Ņ�pIe����B\x0014���(��\x0017\x0019��N��i4zЛ\x0018m\x0006x�\x0001�H�(:tG���\x000f\x0005]C���\x00034	\x0019Q�\x000e%�\x0007�\x0003{<uJj�\x001cs)p�%	#��\x0005�89�(ܷѹ�|��8��)\x001an�\x001f�K�\x000e��u(i����3���O\x000e+��\x0004�]a\x001a\x0007����}vd���&��9�\t���M��9\x0002��{����C,�>���r�g�m[��_� 5A��d2�L&��d2�L&����d0�d�B�.\x001f\x000c�\x0001A�E m�K\x000eW
���HZ�1"\x0004;�`F�;00;6�H\x0001\x0010\x0006͈}��'��>p�\x000e\x0007\x0002�\x0014�s\x0000\x0001C/�hM\x0018\x0002�\x0003\x0007��B]?2w���}\x0014�t\x000c��R��J���,�\x001bI\x0017\x000buu\x0000h��\x001c\x0011��\��\x001f�gg��ӓ�\x000f����p�\x001b\x0002N\x001c���<\x001d�hD����\x000b8�|	�X��7�}~"ܙ\x0006\x0005b\x0018��<�\x001bF��i�W$�݉�
�G\x0007	�5�Xr��t���8�0�RU����4z�S8Q\x001dwt�\x0000�̀\x000b냳�ܽHs8��{��c|Y�\x0013\x0004\x0011<L\x0013�\x0015n�4�\x0019�G�\x0015�U�K�g�եL��#�\x0019	�\x0000
��%c�<F�E�/�3��\x001a�u�oa���\x0011����y\x0011K�5�]��"R�\x000fԱ�qg���\x0011�\x0000\x0008�\x000f�\x0011f� *LR�\x0013�L��\x0013F\x0005A�g�)O�_\IS\x0014tm�(hb�N�\x000c����	��t�\x0014N��懱�����k���}i�>\x0001��\a�TC�7��\x001d �\x001b<\x0007��s$"]s����B�O\x001dB�>�O�q2�\x0005\x0001㰿�#���ȓ3\x0018:\x0003'�ן�V�\x0013H�%D�6�@��F�i/�p~F'Q8Տ��"?8;�\x0000��Γ\x0006�X�.,��M^ �\x001c�h2�L&��d2�L&��d2�\x000cYL���\x0008Ch�n���\x0008\x000c��%���8�U��5���P;�0H��!��Fh��p�%�8��A�ՠ�B�D�����\x000e\x001ft\x0004!�\x000c�c�G�� &�t<HY\x001c�v��J�~�����Q\x0018�\x0017�#��ݖ\x001dAO\x001f�s\x0010^����U\x0001�\x0000�Qi�]\x0014���Y��k\x0010E�\x000f\x001d��>~�Wi�R����%Nby�� a\x001c����P*�\x0001�\x0006ɗK)�\x0007\x0005a,���m\x001b)�ӧ!>`\x0000�"�l��]��W�\x0003�\x001f���ku<��4�Q�Á\x0011q�b%�r-���x���ӣ�q,�o�����\x0002\x0006�\x001c�O��n/�V�y���^\x001d8��Ӂ�\x0013�\x000f\x0019\x0005wڿ�7\x0008}B\x001a+\x0016\x0012 ioMH\x0007\x0010],�v��MU|�0\x0019�\x001e���Λ��\x0003���:v�Aa��:p�|A�\x000f΁x�\x000e���x�\x0001�����!�3�$Y�x,\x0000�0�	���	��\x0011v\x0013�|W�\x00138���\x00151�mr�\x001b�,\x000b�>\x001a�G��88��$=\x001cW�Qp�J
�3���\x0010I���=�4�
\x0000�q�\x000e\x0000Ɍ|\x0000�\x001c\x0010<���Qm�_h��9�F���\x0019rN"�\x0015�E'\x0013�z��g.\x000c\x0013�5����1��`rYuګ4�#\x000b}\x0007�����
�AMU\x0012\x001c&��g2�L&��d2�L&��d2�\x001c\x0019\x000c2�� ����z\x0010h�>����+A��\x0018?�F\x0005�fO�\x0011�ɾ��Xx#�\x0002\x001c8�8\x001d�H<	��\x000c���\x001d��6�O�XrX\x000eP\x0003�\x0003\x0006�\x0018��c��C\x0000B�:�z���@\x001e_���� }}��#HB��js!q���_�V��'�*N�<�=\x0010r�Y*\x001f�N�//�\x000f�y�\x00177R\x0015�<~� };���[9�v\x0004\x0016���\x0005�\x001b\x0008k�u<|�H�\x000f��:_��\x0007 \x000b���t�X6��@\x000cZ[�R\x0015GvҜv;ٽ<H��\x0004	
@I�p����0\x0008$�\(\�&u,��H����*\x000e�~\x001b�F����i�>�$MSIҜ��ڽ��5�\x00178E�Qi��A��"H���\x0006�z]���k�\���\x001f��N�#�\x000f�C`8�]2�;\x0014�\x0018C70�\x000e�L��xn\x0000��,�d���t��c�R�*� L\x001a\x0008����5¡��M�\x001fkc,\x001ez�<�֙�\x001a\x0008(�\x0001�
B�]~x��iv{�I�4\x0006\x000f'\x0005@$�cT���s�\x0006�A�\x001e���>��\x000b\��4�\x0008i�\x001e���\x001a
ǯ��"�<Ϲ�|�O��\x0000RG\x0007�\x001c\x0013R�8҉��
C�)�N\T�;1�\x0006�5��\x0011İGt\x0013\x0001���\x0013�եэ\x0013��:��\x0016$��d2�L&��d2�L&��'�`��􅈱d�\x0002
�s\x001fL\x001c�n\x0008��&�S\x0019tp�,1��Pv3�o\x000e���\x0019���\x0003��\x0013Dbi�\x0017\x001c\x000f-c�&��R\x00128>|��i�\x0013\x001d8�\x000fw\x001c��aL���ld�Y�as<\x001ce�����N\x000e�\x0017)OG���P\x001d\x0019p�x~$�͵|��"$�������\x0011T\x001d�;B�$�e���\x001e#^��S��׿�ǻ�t0a�~�կ�\x0002Ё�&A7�0\x0010�4�:K�Ճ}b����\x0003`\x0001�꺆��(�Ru��\x001d����Q�՚�ip�\x001c^\x001fe�[y��?r�����(<B���|��<�Pilkޫ��%�\x0002�\x001dq�\x000c=BMy�j�%����\x0004p�w�` ���'̂ۨV�\x0017D�y\x0004	aLW\x0011\x001da�f�����7��#a�\x0000*p���\x0007�}p\x0001���\x0016�>\x0005^�\x0004\x0011"�\x0012	Ô�i�<

\x0013�[�Z\x001e\x000f��e���b�!M\x0010H\x0007�\x0005G��s�p\x001c�d�\x0008=\x0010��u�yƽŞ{q�n��(d�ZB�sT�'��,��܏Ν>�k�s׌=a�\x0011�Ip\x0014\x0005\x0001A\x0014��s\x0003�g�q~��/��¹���3G+z��hr��\x0008�Q�G��G���D\x001dH�X���n\x000fq���\x000b\x0002�W�\x0017������\x0003�Cԟ\x0001!��d2�L&��d2�L&�ϑ� ��\x000b\x0011�N��n��i��8�^\x0013\x0000�^]/����t~h�\x0016b�`N`�T���$s�M��\x0010��\x0001:�\x000f�\x0006�A\x0018�q��C\x0007�pĮ\x0001v�9\x0013�!���8���-Ϸ{y"hy��(\x001f����y"��H�U\x001eO\x0004*\x0018~�ق�i�^���U���1�(�л�\x001b���\x00079"��n�6D��5�<}�(o�}-a\x0012�\x001fE\x0004<\_]�p�>�s}q�d��@�:d\x0000�|\x0017a�6���=��÷|(\x0010�V\x001e\x000f�\x000b�jC�q�>�Էrz}��j-�K�Ӕ���
\x0005f�:v�AK��8e_\x0010�\x0019�Bسb����p.��KF�Mc�\]���\x0015ׇ��\x0010\x0000A׎{\x0002�D�\x000bb���D׊F��A\x0004�\x0004\x0008�v|^\x0002ƸE�F�\x0008lk�\x0001���d����z\x0014���\x000bn�al��K��	�P�\x0004 C׏h�^��\x0010r\x0001����Ţu�X�k����k+�Bm�\x0000fT`�\x0013z鱧^!\x000b \x001a~>����Q��s�\x0000\x001a�u������;����f\\x001d��Ӹ:�w�I�sY��M��q�?�=\x0015�Y��\x0007�\x0019$j��}\x0011u�\x0003�����7�\x0010vv�Ϳ�> \x0005n\x0000��pb}]\x0007h�H�&R�
?�M��\x0018�4��\x0000���6�L&��d2�L&��d2�t\x0019\x000c2��\x0000a�]<?HW\x001du�=)�\x0000�!��#\x0002��`��(���\x00089�\x0001\x000c�\x0001\x0000��[�	Y�
�%��y\x0001\x0018��z�G8QW\x001aM���v\x0015��W\x0003`����x5�a!�-\x0008b\x001e���Y�c!닍�><�M\x0016mU\x0013ޜ�{�\x001bǺ������\x0003�\x000f��Y��Gٽ>�Et�n�8����^6�Wҵ� :\x0011�<���܈6\x0003�\x0002�B�J\x0014G
z<_V��܋�p�l����\x0000�Czwˣ(��� I�\x0012N��+Y]^\x0011R�\x0001�\x001e?��[\x0003����,c������w@\x001e�8\x001d^�ew�Q��+ߗ��<~��'@��\x0004.8\x0007�@�~+I�I��\x0004X��9m_���)T\x0013$(ԙ\\x0014Z��o\x000e�x~p\x0006
�Z\x0003c�4\x001e\x0010 ���0F�������\x001c8���&�\x0008pй�\x0014��=6�\x0017�\x0012�9�U�.%ʖ��	\x0003�YHG\x0011�\x0006H2\x000e��\x0003��{\x0005 \x000c\x000e�I�U�Nr\x00003�s�\x001f\x000e���19\x0000\x0013�\x0004�v\x000e�\x00188?��O\x0008���t�̱w
�Ƴs\x0007k������R�dt1�s�\x0010�\x000eA��Gu�	A�̑�t�i\x0004#�\x000f��=��\x0010,1Rnr�?\x0004B�v\x0012��>u\x001c��X9u~M�Y�\x0018\x0012�=H�/mQp
Y��\p[��y��"�\x000c�O���m2�L&��d2�L&��d��2\x0018d2}\x0001�\x0002_���4MCw\x000e\x0006�\x0018*\x0007tg��PA�
��\x0018P#�,��\x000ct��|
����\x0018g��7\x0011璡è�\x0018	\x0007�P�b�더ŉ�\x0005�\x0005,����	��n�(��\x0005���=;ov��\\x000b�]�\x000e�r/i�I\x0014&r����ҩ��p{�|/\x001f��O�J\x0000M�P\x0000A��=7��8;Ĺ=~�Q�X;�P������)�\x0007����ż\x001c�\x0008燫\x0008\x0010"�\x0016t�0F��weY�́�8\x0000\x001fD�\x0001�`��<��~����u�������\x001d�\x001c�(�\x001b�}��\x0008�%�Rɖky���\�}�\x0014\x0002\x000e#�S��R��/I�ӥ\x0004�Ty���7�7t���&" ��ι���)\x000c\x0013\x0002\x001e\x00057µc\x001f\x0008\x0018F�`G�u�53!�-\x000c�3\x00102^�1l~ �Rc�\x0000l\x0018\x000b����Q�1b\x000e��S���L$3��VG\x0017#\x0017\x0011�\x0000D�8�\x0011\x00024���~#\x0000\x0017�`\x0008�&\x0005�|/\L�y/MqT\x0017��i\x000f\x000f�V�I��2�'\x000b�Ep�����I]:���#gw�(^��\x0001|��m\x0001�����
�\x0000�\x0018��"�f�������\x000f�cD�4����4~���ׄS���<\x001b܁\x001c\x000c\x0012]\x0007\x001dn\x000e>����
W�ا���.+\x0002���R�(t=F&��d2�L&��d2�L&�O�� ��\x0017.\x000c�o\x0017���WFHa�LG	\x0007��S��GgOO�\x000b��Z`&��s�\x0007��\x0007\x001a\x001d'�FY\x0001�`�\x000c�h\x001f�5s�Y\x000f�I��q�u�(��,�<\x001d4Vn\x001c%[�\x001c�\x0003.\x001dw;v��_^$\x000eC9����\x0004��ijY]\���;:S����ۿ�m\x0011�\x0011�\x0016����YN���\x0013d�e�}���F��W���J\x000e�_��0�j���=�d9��ϲZ_|\x0016�'R\x001e�稭���e�� ��\x0016K�t\x0000Z
\[\x0018j_\x000c��4��w�HSU\x001c��|�5��\x0000\x0018�nK�0;p��/���&|@�\x0019�A}'����\x0005p\x0011ѡ?���"
	G�34 �@�\x001b\YAH�\x0010�8��}�Gt�\x000c�#\x000c�N����
mK�����\x0001(\x0001�!*\x000f fp�\x0017Dȹ7���s�\x001f<+x
�>Sױ�\x0008�;�ۗ���8��\x000e\x0016�\x0010v�B\x0014O�\x0002�\x0017c�\x0000�\�\x001c�@\x000e�����8_:��1"\x000e�\x0013�æ\x0007(j;ݏN�\x0010\x0001�Ա��\x001f�Nc�����ѽ҄9�@�� �\x0017\x001777?\x000f�\x0017}�'�� v8��\x0000�\x00102���c�\x0010��tn-Rג���\x0019�^~�':���ߓ[\x0006\x0000\x0010�\x0010�`�\x0000\x000f{�&\x0012��\x0018\x000b2�L&��d2�L&��d2�\x001c\x0019\x000c2�~�\x0002�IÑ�mu��{"�#h8�\x0019&7�\x00060
�H��D\x0008}"\x000c�'�;���٭�{t���,���b�㇌���N���\x000b�&��g)^���� mYI\x001c%Ν2J�;Hy8Hq������A�)\x0001*\x0000~�Y__�b}!��g���[��B����\x000en�#\x001dA���\x000b�
���\x001a\x000eʫ��Ⱥ��c�
~��)�\x0006P�3�**)�Z�^��\x0016�\x000b��Z���!�籏\x0005{�dK:6\x00002�\x0011\x0014\x0006\x0000(�\x0003&����\x001f\x0008y�޾���[���.���GB\x0002�5v�\x0008\x001d?a�\x0010 
u��\x001e��;I�L��J#�\x001c@\x0000L\x0019��\x001c�6
-�\x001a��w
]'����M\x0003���\x000cP7�����&\x0002��o	�F��)0iʒ�x�7�B\x0013@/����w=]Kt� ^\x000e]6q$#�\x0012��$�(_ht��1\x000e\(\�^\x001c�1@\x0011���8\x0003�ᚓ冐\x0005׉>!�
%?!\x0001�Ȉ�N������� [h\x000f\x0012�T����\x00020�_ڍ\x0004�Ƶ\x0013V�g@Jy�\x0000\x000f��9"��\x0012�\x000b��g<�\x0008�Ȁ\x0014�L2ΨH��|���I��\x0001\x001d_��?\x0001\x0000\x0000 \x0000IDAT<��|ݏ\x0019��q~��\x001a>�~��\x0013=.\x001cQp�����\x000c}M�lv�\_�%��?�&��d2�L&��d2�L��.�*�L�xiy~U��6�\x0004aL'����i�L�H�:�\x0010\x0007��\x001bH\x000f\x0004;�\x0019��s�Uu:�0{\x0012�\x0016\x000b\x000e�\x00010\x0010���9��]S��\x0005�
��w//��p(�śz�>މx�\x0016�\x000f�\x0014���^wR�w�\x0013����IZ8xچ�\x0003n\x00158\x001e�$��������{9�z��#����
�\x0011N��\x0010ʳT\x000e�g��-@��Eꦔ|��o��O4zl�\x001eyM�r!�\x001f���^���[��\x0010uv�?s���\x0017Y����\x000b\x000e�\x0001t��œ�aGwMS\x001c��ǿ�i�*����#���\x0007����	`ں�t��4_\x0012j����U\x0005A���A�՚�Tn_�n��.�w\x0001"�|� �\x0008^\x0010��\x0015G\x0014���4�3F�\x0001~�\x001a�\x0017�)�?X3��\x0008C"��F1\x0007���FB�s��YÈ4�\x001d!�\x000b�Xc\x0003=u$a1\x000c?\x0003��B���^�F	�ϊRȉ�E��t�X\x0017"��|!�
�nA\x001c�e��$d�`C���d�Ϡ\x001dF�v��\x000cڕ�u\x0007Y.\x001e\x0000Y\x0010J{:�Z]�\x001c\x0001\x001e��*�^B\x000c_�������^,\x0000�	��q\x0018�\x000f\x001dP��ᔦΎ����A#��+�p\x0003a�\x0010�E���븟��\x0015��E�\x0002�ϻ���{�e�\x0011�\x0002RⳎ��i��my�w��%\x000c��\x001ed2�L&��d2�L&��d��
m�L�_��S逎�\x00019"�0�\x001ee8w��\x0018n� ];2�\x000b�h�5\x0003$\x0008]7\x000b� 屖��ٓ\x0003X4�:\G\x000fO]�"a��}\x001d��\x0004\x0004�!\x0018~�}�����-�	b�\x0016�K\x0002
�\x0019�/Ot
�UE�2L��u)�?�"_0J
n�$�\x0008T����� ɫ:\x0015\x00047��\x0012��|:mF�u?��qP^�\x0007\x0002\x0000��.&�j�-c�Ч���,q�K\x0018G���\x0007���nO��V\x0005��ۿ���\x0007�w[Y_^I\x0014��\x0018	}Y,W\s�x�I�ؾ�?Mr����$i�Ju:Hu�k\x001c_�J�^3�\x000e\x0011x�7I}<�<\x0013#�F:�N�τ\x0002�n\x000c����y��\x0012�\x001dL�
����x�TA�\x000f�\x0017P.�-
IW\x001b:o42�'t\x0001XJ�n�:
��\x0000��%�.�H���ڹh�\x0007\x0007���	y\x0018;t\x0014r �6��\x001a�6��\x0001�\x0001VՍ>g#]Xz�;��Ɓ�hN\x0007�\x0017�\x001d�)�\x0019i�#�g�6�3F���s�\x001a�\x0003�	�\x0006�S[�2ԵĄ��}\x0013\x0006�P��#��9F���#��^�\x001e':���\x0011�E�\x0005�R
u�8\x0005?��@���Å��{�\x001c>pL����R����&���R\x0012�\x001c4\x0007��-B�\x000c� a\x0012�~U���A,�81"�\x000fbY"R\x0010��z�W�d2�L&��d2�L&����d0�d��k��'[q0M�\x0008\x0006�p\x0010D	\x001d-\x0018��qb쭁��\x0013\x000e�Re�\x0001�s\x0011�)\x0014E��a��\x001cgE\x0007QB�G\x000c���\x0012\x001c\x0000F��\x0003G��e+�EHx\x0003�\x0003�']SH1�rx}���@�$IF��A>��G��]-y���(-O��gF���F�<��6F�Uҷ=�)�3y}z��N&_V\x0017\x001bF��]RW\x0015�P��䫕\x001c�'��8�Xǲ{}��*��˫�y\x0002���E)m���u/}7��b�}\x0002�h�J��P��
�V덜�/��[���'	�����ˣ�//%�\x0017�-Vt?!�-����.���$[.	:\x0010\x001d��9c���k\x000c��`\x0005�\x0011��g/�B\x0007u��'�U�U�\x0013���\x0013g\x000b���\x0019�\x0016e��_�O$tsEIFh�H6�O�,�uG�\x0008��6-]:�\x0005�\x0011�dXC��
�\�\x001a;p\x0008�4��f��A�\x000f��FOz�$b	�'�x9u��kp=�x�_A�HO`ԋ\x000c��>�ԝ6hL\x001cqH�H\x001a.�����|\x0019��n$���g�Q��b/��ż�)\x001e\x0019e�}��/��9�\x0019���\x001f\x0007�<�ܹD�դ��s\x0017\x0011\x0010\x000f;�\x0008lF�e�\x001f��z���SG�r��\x001c�Ȯ(� �ٍgx�ύB�I]b\x0000Z��Әº��\x001f�\�'uU�\x0017$r<�$�\J\x001c�2U���m2�L&��d2�L&��d�I2\x0018d2��q�O�u�"\x0011\x0017\x000b&���\x0015\x000e\x0000:0F.
�@\x0000T�\x0000\x001d\x0000 J\x0013i���ɀ�4\*p\x0010\x0005t'L\x001cr\x0007�:Q\x0010K\x0005gQ״\x0004\x001ap�x2\x0010���?�\x00113ji���߽<�a�H�
\OY<\x0013d\x0000.ጧ�Q"��\x0001f\x000c�<߽�a����]6��\x0001?΋�\x0003$�%"B�tx&8)�B�\x0017\x0017��-\x001d\x0013�C���*\x0011��I�L8���	�b�"���\x0004\x001e��׌}\x000b�P���r����o貁�\x0004\x0000\x000b0����\޾e�\x001c� p��\x001e\x0014�\x0000C���I�߼c���斎(�EB8t��s�\x0017\AC��	�d� �bI'\x0010�L\x000f�\x0013���C�\x0012�3�p�c�\x0019FB\x00068����\x0002]'�ӏ\x0003�@a�J}*\x0018}��.��*u�\x000c��]�gE\x001d^>�;p�\x000f�\x000c\x0007\x0010`	�]��\x0004(
0³�&Js\x0019��k�\x0013�;L�D!\x0000��c`]!�U\x000enLr����x�$��0�
n\x001f8������,�k\x00057\x0011ω(88u�\x0017����V�\x0019L3F\x0001¡�g����鎥x���\x0008�<�5��xvu�"�VA�s\x000f�\x000e\x000b\x0011x*\x0008��p|��<�1D�T�\x0017�K�]�t���\x0002W��\x000c��Wp��ܹ��R�5���i��c'���8\x0001�-�UE%�b-EQ�����>�\x001dH&��d2�L&��d2�L&��*�A&�\x0017��N���_�\x0006p^ \x001a\x000b�\x0018��q��a����]��6�\x0010��\x0005\x0004J(�g�P\x0014Kw:�\x0017%tC��\x001cB��N�>\x0013t��mG�Hq�KS\x0015t\x0016a\x0000���DI,��A�0�k\x00070h.ϟ�F�ɓ8N%N|)�G\x0011?�n��؟�t<r���
�9&�a�l����$���ca=\x0000A��۾>Ӎr��dy�!\x0010��\x001dΛ��R��^���!*oX�\x0008\x0007toԍC�T\x0018�i�%�
�D��F6�o$�\x0016r,K:�67�����.�T�r��W����BvO�2"��N�P\x001e?�K\x001ci�W\x001a�\x0012\x0005�d˕4�����\\x000f�[p_5�H�\x0000�7�(1�\x001d0E�XIu<\x0012��\x0002tM'Q�*�V�Œ��]?�\x0011����`��4�uΑ{Q��c4tN\x0011*�YB��$t�\x0010t��x�Ⱦ#\x0000��<q��\x0013���a�{�8�\x0019\x001cCJC\x0014�\x0000`\x0010�x�\x0003�\x0003{��H;�Ŷ�\x0011���!�+��hT���;���2�v8���\x0000d\x00009�lt���3�s	��\/\x000f�\x00111ppQ\x0001�%�BT<\x0015��!�rq|����	�Os��B\x001d8��-D(��\x001f��=���\x001eD�m�\x001c�BT�F����9P�p	�+L"^�\x001fz
�\\x001c\x001d��gt\x0012i���k�\x0011	9�|�5"q0\x0010d2�L&��d2�L&��d��2\x0018d2��Łw�26�iJ\x0002\x0005\x000c�\x0001\x0000\x00004�iR�x\x0011�`|\x0016�\x0003. �
��:l\x0017I�T<8�<�0i�##\x000c�������4\x0006\x000bQ\^ }[I\x001a\x0006\x0012%\x0001�AW���|-�G�\x0010\x0006���\x0001�9v':g<\x0017�\x0006�1�\x001d��&8�N\x0013#�.E�.��\x0001bQ~]���B^_^�&\x0002�H�L����˫\x0014�\x0003\x001d\x0011t��Ot\x000fah\x000e\x0008\x0005��*�	�\x0016��E鸄�8��)��Б�躄0-N\x0013�3�\x0011�d����\x001e8��I\x0000�^���O�������>�!�On��Z�,\x0017�:\x0006�\x001d�����z8pH�\]2F-_,]\x001f
��R�u�2�\x001e\#!L\x0018�\x0010\x000e�����별��\x0006�\x000b�\x0010��|���}쇑=E�1��gC��\x0018��V'���/UUH�/	(\x0006¹��� �n�N�$#�\x001bY����U�u�\x00086�(�k(#h��Hc\x0008G�\x0005�\x000e��>���?u֌�\x001e�\x0012�G�\x0015�\x000f��~Ԩ5�\x000f\x0000&\x0000ž�\x0010{�4�\x001e�H��%\x0001J���\x0008D�'\\x0003�R�J�5��s��|\x001fA\x001b"�ږ��gX\x001c��P8<�\�1�<6���ϧ\x0000�Ȩ�F�P��&�>b�\x001d�\x0003��|�ʛF��V����\x0002��H�a�ph<���1���e7�~"���Z���\x001c�s\x0007`;��t���BBB>�\9d2�L&��d2�L&��d2�M2\x0018d2��\x0015���_��+\x0017�\x0016�%\x0000g���L�~\x00128x\x0010͆�t�
�H\x0007�0\x000e��tu� G��<�p\x0005���14��d�er���b��l�9c�\x0012��<T��ar�\x001f���U�y��n���\x001fz��4��\x0001��r(��@\x0014[�\x001cFL'\x0003��\x0007���Eh�u���������hzi�N����,%N2I\x000e�\x001cw�ܼ��L��\x001f����%I#v\x000e��\x000bi�V�?|���$_�f"�\x0002T*\x000f\x0007I3\x0005&�RO\x001f�g�\x0010�'_o���$I\x0018���o	���V.�oe�}�(Ҹ1\x000c�8������Fi�B�冀�\x001f\x001bI\x0011\x0013��2��q���&�:�<r\x001d8x= \x0013@\x0017c��Z��bL\x001a��\x0010�\x00067R\x0018�}8\x0006b��\x0015pMt�D�F���a<�0\x000e\x000e�0��3:�\x0000\x0005���t�<�0�^���\x0004]����IN�\x000c�
\x0000��X����\x0019�\x0006ǎ�~���pӄ�S:�\x0008:\x0006}~%�\x0008�\x0010�F �id!`\x0013@&�A�L]\x0011�\x0011�`�p�"�bAX��c?\x0014\x00045\x0004�\x0000l��C��s\x001f�.�;G\x0011`�\x001f�� Bя��tF�^z�\x00028\x0007Hq]�'|�pl|\x001cG\x0007�</Dn\x001d�a�\x001c�Q��Nϥ���O
\x0006���1o�S4�X\x0000}�s;��x>����i�-\x0017�\x0012�j�\x0013�n?��O��d2�L&��d2�L&��o�� ��\x0017.�\x001fԁ�\x0006n�\x0005�Sē��5�,\x0008�\x000f�����\x0010\x001d�J�F�z野\x000e\x00045*�\x0000\x0019�h8�\x0008\x0013�u����7ɯn/e��r��H�E�X�d�p�.
\x000e���Z.V\x001b���~'��\x001f���Fv�Jvǣ<��\x0019G\x0007�Ӵ\x0015�x��5\x0006�\x0014����i;�\x001d]B��\x001a\�\x0018�/��ȷ�9;&\x0017�U�\x0005�p�>H�(�����$�\x0003"�F9�Jyx���뫴Mš=:�\x000e�J����3�K\x001e\x001e\x001ee�t/�˃�5�����T��\��J�\x0007���w\x001c�_�}�x.8k2\��U���@\x0012����.V�\x001d��<a��\x000e�G�\x0001�\x00178lDy\x0004�H\x00008���!\x0004@��H�.�=��\x0005�\x0008�\x0013^7"�\x0000\x001b\,\x001c@B�>\x0014\x0005\x0011�F��\x0004�\x0003�A��
$D��}dO
��H��;�Y��\x0014�\x0000�\x0000ұ�Gc\x0003�P���Q��l�9�*�\x0002\x000e\x0000 :�\x0008�\x001a�l\x001ck:z�\x0000Qs�\x0002�0&��\x0018�\x0016���zix�[���~��P��b]cy<��Mc� �Pt�=�4F\x000fk��N&u�8�O��Sw��
\x001a�&��\x000b��{�ͮ��E侦_hr.�i<w\x000e��竣u�?�{\x0000v�[��1�N;�H��p��� ��GQ(���~\x0003�r�@�4��i��q�_&��d2�L&��d2�L&��,�A&�/\�^A�\x0018\x001c\x0013\x0018Bc\x0018�\x0007����!�Υ��Q�\x0001�F�с��\x0012v�\x0004t x:�V��\x001bL#v+�G��\x0012Y�"��K�ȫA\x0018U�E�ԧ���\x001b雚N	��\x0000�\_]����ryz|���\x000f���J>�����\x0011`\x001d�H��.d����v�\x001b\x0003�\x0013�\x0001�\x0007!\x0004�\x0017_N�\x0013];���_0��bש2�;S\x0000,��#𺿿�����lZ���=�K]\x0015���adZQV�����o��<�?H���?'���_���#uU��'\x000c}�?��� y�1\x001ems��c�J\x001aGr}s-���G\x0017S_7�\-�\x0019�A򫕔������%�\x0000�|�ͥ�����Z�\x0000q�\x00053"ޭd\x0007\x0010�\x001d�Qu-mհ�g�j��\x000e�I��\x001f	C\x0006\x0007\x0005�n�<��\x0001�\x0001�@�Q�/\x0008V� ��\x0001apS��A��D�\x0016ř�Q�u\x0001f�}Q�ӕ\x0003�RS\x001ced�_��T\x0015G�����_ܰ\x0007�\x0002=Hx/;o���\x0013�\x000cǁ�)J\x0017��\x0007h\x0004P�`\x001f�1|�=\x0002��o]�^,A��\x0013�)���D�;\x001d?�\x000c\x0004G����\x0001\x001dT�\x0005r�z���B�=\x0019�Z�$шŦewV�\�O\x0008qv\x0002�O�\x001dE
���\x0005��\x001fu
��}\x0003�\x000bػT�ok��\x0008i��E�Mz�\x0001�\x0000��7�kCg\x0015\x0000���	\x0002"��\x00038�>�x��@�\x0018�"ͩ�4U#U��ۼ3�3�L&��d2�L&��d2��e0�d��\x000bCr\x000c�S�F�~�1t���\x0010��Yο��	.��'4��\x0005��b��{�y\x0001�F��t"��X։/+����lnn8�O��i$�3Y��ҡ��\x0013����6�P�\x0017J\x0012�r�����R\x001e\x001e��j����'�{�����c� c�8����dÝ��\x001d
ɒ(���\x0015\x0004)\x001cr�(n\x0018O��\x001c\x0019�\x0005\x001c\x0017�cc�?"�V+����$uu������3\x0002ϓ\x001f��Ot\x001b��n�x����\x001f%�|'����S�\x001e�d�^IQ��<��Ѣ�
��i�(\x000c$\x0014_�4��r-�<���\x000b٬ײX-���B����~�N*I��4e)M]�\x001e�\x0005�U�*u1n�l���Zz8q\x0000\x0003"u\x00121RM�/	�\x0002��T5�~л\x0004p\x0000��5\x0015A\x0013�\x0017\x0004\x0004?A\x0014(p\x0003x\x0008\x0014^Tǃ\x000c}Mx�.�\x0012�	![[\x0015<\x001f�G\x0017S]���)�{:\�n���E\x001e>�3N�m\x0007Y_��(y/o�\x0007�l6"��~'�	h\x0013a��p�qh�<\x001e%_(\x0014\x0004�\x000c�\ڢ�~\x001f?p�$�1\x0015��\x0008\x000e"@$�\x001b��<w�=\x0002��@\x0012�
�$]Xx\x001eÈ�\x000b\x000e=C�BϾ�����Ö��&��	Qs�c#(�\x0014�L�\x0004�}d?\x0011\x001c^p�%!A\x0010>���M\��(��k�Ƣ+)\x000cy\x0001��n�c
\x0014�x�\x000fD�V�)��`\x0007�\x001f\x0006>��\x000c��'��L�p ,*���Ce2�L&��d2�L&��d2�\x0014\x0019\x000c2�~�\x001a�I��\x001c�{\x000e�1��|\x001d�É��7�\x0019\x0004(�6�+\x001c�`�=.!\x0007�툮\x0019�@\x0005�\x0016̟ñ���%�3����\x0019��x���@c�<_�8� �9��\x0010\x001f��8O%\x0018\x0006��\x001c_�򫯿���'�\x0006(Y=�\x000fw\x000f����x<�Z0d�]�>\x001d>��º醈��\x00148iD��\x001f4fM�\x0010���.��b\x0018�\x0007�ݖp��\x000f\x001fd���x3�\x000f��qza"��^�t%���\x001f���,\x0017�<>��t�v��e-mSkd�\x0012
\x0005	p��\x000e�\x0011|v�+�\x001f+�\x0007���\x001d��\x0003_�i&�:��"�w�z'����b��M�K\x0018�t\x0012e�R�
�hp�$\x001e�IX�h�Z\x0007��7���5�,6��\x000e��ޣ�IZ�\x0014t\x001b�uI7\x0011�\x0005w�v\x0002�\x000e�4rڽ����k\x0017����R��@p��\x001bF\x0006"�.]�\x001f���H�\x0007�;�k��:ɲ�k�ܾ�\x001c����O�����~�kB\x001fu�ERUw\x0004Vx��޾�c��ͯ\x0008��ǏB	��N3@��v+S�0�\x000en�8�e������\x0008Ϗ�W
�npMq�\x001a�\x0006p4�#?\x001f�b����\x0017\x0004g\x001a\x001c:�\x001f��$!$��\�~\x0004�\x000bdhJ��#\x0005�׎�MGo����Z�B�a0�#�W�9��%�#ļ\x0011(��v���u��y��;�=F��P��\x000b$N"BW|�\x001e�\x001a�����`�\x001f\x000c\x0008�L&��d2�L&��d2��v\x0019\x000c2�~���C\x0013�t5 \x0016k\x0000\x0018I&\x0002 8e�G���1�n��.\x0011\x0000���bzF�\x0001��-���Q\x001dG�<�p�%�\x0012�>�t`>�\x0011�"S'R��\x001c֋��\x0019i��d���8�b���\x000f\x001f$[,e��n�,����G��o�r������ݟ���E&�\x0007�j��\x0017M�r�7��Ӹ;�\x0015��@\x0008�e\x0018t�\x000e�\x000fZ_\x0014H
���Q��[yy}a/N�$\x0012�!#��|)q����\x001f���O�^������G�4���\x001f���⇞�\x0018�.\x001e�0aP��G_\x0013�m<���Ln��\x001a\x001c����DNe#�+\x0006����O�\x0010@�Q,I\x0012I��r{{#�����b����\x001b�RD��3&�#iG�Q*��DC"}�\x0011�Ei���n����@b��\x0000\x001a��?�ē�E�!�\x000cpm��1�{��\x0015\x0004��1�l�\x001d\x0006D�5"~H�\x0003���,�e�M��\x001e$_�$�zyxza����\x000fR\x001dO�뫫+:�\x0002ϓ�:��\x001f?��\x0005��ͭ�����R\x001eJ��mCG�tX����^��������t����y�~�Qx\x0001AP���9�\x00028��*\x0015\x001c\x0012�i\x0006��Q�c��5t�-�f�F��\x0001�	83L\x0012�\x0011?S|։�\x0006��\x000e����z�A�4�sH�i��p\x0012\x0019d�\x0008�\x000e\x0010�}���q�֟\x0011b\x0005���C\x00052z�s�\x0017!:\x000en%�\x0019�Y\x0001\x001d{>?'���\x000b*�J\x000eu�}L|�L&��d2�L&��d2�L��]\x0006�L�/@\x0000\x0011�s���u�a�>�Ɂ	8;\x00101687\x0005\x001c\x0011�D��I\x0007�/��K\x0018x�ơte)�"�,ҟ��f\x001a�.J��H��\x0005#��S�3�˅��v�`
Q��d�bA�����~}}��\x0008D��;i�J��\�z���׭\x00145�#5�ռv�df7�^�'�"�5O
e�\x000cr���\x0012j\x001b��Z\x001e�����\x001b�8\x000e ]��Ju<2��:\x001d���r����GI�P�S�5�3\x0007G�&��p�����s\q]�����x�����<\x0019Q�4*��{��CQ��ӫ����׀�^�\]m���[��}�ع�ˍ��s\x0006I�ki�J���I���==*4:\x001cd}\x0015��\x0014G	;�\x0000��&\x0001 ��\x0003�\x000e�{��\x0005������%J\x0012\x0019����/���;�v�u�#
��?�ß�y���f#u���T2�������K��7r���$��\x0001\x0016eQ$����%__�bs%q���\x0005����$��$q\x0012�m�H���ͯ~#}�뇃*�SB�$K	np
B8�k�\x001e;���+b�\x0018��|B$\x�C���b��\x0004\x001c�"��o\x0004E��}��Ľ��0M	�h�r�\x0007�G�i\x0003��\x0000��\x000c�
�:@)�;;݆I?Gp_�x~��H\x0001&�X\x0004�|����'\x0005a�dy"�6�~RhUՍt�\x0004\x001cF�l�L&��d2�L&��d2�L�\x000c\x0006�L�p
p�\x000b\x0005Ca��{��p\x001a����8I\x0008z�)���n\x0012Ċ�U�8.8L�E.�V\x0016���@�E&��\x000b�ۖC��\x000b�V�\x0008\x001b�b�_K\x00179ρ���Q�8E.�d�5��t���K��\x0007i�#;mf�\x0004#�&O6\x0017+y|z�e�J��\x001c�ǡ/M\x001aK��\x0004Np~`\x001e�\x0008��i�\x0007F�ޠ�\x000e	@\x0014�Z�@\x001c\x001f}G /��	��_��e\x000f��ꖱxw\x001f���W����\x000f�/\x0017t\x000c�W��s:i�Q�\x0016�\x0019�)ș�@�U���� ���0�?;�\x0008\x0004\x0018��9��1f�����D\x0001�(��\x001c\x000b���o�s��
��eI$���\_����\x0005\x001dE�W������j\x0008V���9::[F���\x0019I\x0012>\x0003�2\x0000t�)a��\x0008{W�Nr�\x001f�\x0001\x0005p�p�g�\x0013ր�����
��b���j-/ۃ\x0014U)u��f���~']?�2Oy������\x0015Ơ��I�%Y��wl���ǘ�UYY�E6�S�IH"\x0008\x0011\x0010\x0001m�\x0011���M�	��^�\x0016\x0002�\x0016(�\x001b� 
"@�'VU�\x0018�\x000fo�g� �s�G\x0016�`��Q��������3�v-\x0002��p�q��~�\x0014\x0017O����\x0017�\x0017\x000b\x0014�@��\x001f�\x0000�_C\x0000\x0000 \x0000IDAT�~}��j�$�pvq�=�sy����7wx��s\x0014E���P�%ί�(�\x001b\x0007D��Z0�g\x001fV�i-�$��~��9F�	��ϧ�
�$,l*u"�K�\x000bc]/_3�=|?�1����֍���t\x0000\x0011�p\x001f\x0010�\x0010\x0002���#_��L�|����VpM���/�\x0013�\x0000.Z\x0001%�C�f�I\x0013	\x001f=7����x���\x0011��\@\x0014\x0004���i��\x0001\x0006[YYYYYYYYYYYYYYYYY���� +���e\x0000� GD�e��A���\x001d&�\x0000�,ϗc\x0006�ȉ�X�\x000e�c\x0011\x0014\x0008���Ge�@쒄!\x0002F\�\x001e<7�\x0000Z��\x0011d\x001c�;�"������\x000e���wwh�\x0016��\x000c/�����\x0005\x0016��h�=��R�j��\x001d\x00069;\x0016'g\x0002#��\x000b������;,�\x0013|�\x0016��� ��'�\x0014w\x0016
N\x000c���\x000e��F��	����8ơa�\x000c\x0010�\x0011�C���\x001c��\x001aM�Û��!>\x0007�\x001c��U�8�\x000b�lW�h�R�@}ߢ.�	�L\x0003|<B\x001e3p�����ȹ���\x001fA�qV�H�/��\x001e�?�\x0018�c\x000c��\x001a8@\x0007�\x00084E�u~�\x001f�������\\x0017q\x0014#�%xzu�ӓ%\x0016�9��H�ĸ�\x0008��\x001e
z\x0014E!�XA�JQ�\x001f\x0006$�B��\x0019��X��8�\x000etLm�x��\x0003|B�������\x0016�b��\x000b��	@��#\x000cb<}v��ݍ\x001c^?��K����z��?�\x0002Q�
�хEg���\x000e�\x001b�\x0010~�����\x0004��4�C���=\x000e�-N/.���\x000f��RQ�O>�\x0012��J��\x0007:�./�\x0016�b,\x001d�s��<���FD�\x000fᦃ\x0007x8�	�F\x0010�\x0019\x0005$\x0015��Ժ�^� BN�1�Y�{þ��(T9�L��1s\x000e#��\x001e��!�\x001bc�\F6�&j�/\x000b8Qlz�`�+�z>�t��\x0006�#��C�D�\x0006F�\x0011��qD0��\x000b����n�GNieeeeeeeeeeeeeeeee����AVV���\x000f�\x0005��@�U���!
�.� \x0008'�\x0001�B\x0004\x0006�Q��m��S
�Y��9��3��\x001c#�Ρ�o�ӄ�a���P��kP�'��\x0016�}��3@�f��_|�\x001aϟ^���\x000c_��gX���Mf��\x000b�I��C�\x0017h�\x0002M��|�a��c9�40W<\x0016Lq��j�x��k{�q��K�\x001fC\x0018t��'��O�wt]xr��Q\x0002�s���q��"��\x00189��F��qr~��ip��\x0007
����������)\x000fl���\x000f�E?��;\x000fP�c8tt&\x001dA�q�\x0004Aǟ?�\x001e?~�G�\x0003�\x0008^x\\x0002�Q0�G�ﱡ��í�)�\x000f�I�\x0008q\x0016c�����\x000c3:��O�D\x0011\x000ey��b�t9GS�����۷X�� �\x0016����w?����p�M����{v)-N�\x0018�\x0001�a��ҫd\x0008Z�˫kDY�wo��l�F>�w+\]'\x0002\x001a�	|��wB�q������`�X��}\^]`�Y�=��\x0012\x0003���|�{���K���W�_��'�B���r�\x0010\x001af�\x0005�߿���%^��ߩ�([��*\x000b�OO1�޸��\x000e#ٸ��?]��cuB�rX�\x0008�\x0019���\x0017F\x0002A\x0004���\x001b��g�N���Al\x0016�+\x0003ޜ\x0001N7
\x0019�\x0002;�q%u�`,]tܫ�A��\x001b��v\x0018\\x000f^��5�\x0003\x0004�}3�Q���Π��l����\x0006p\x00139\x0004�q� ������������������$\x000b���>\x0011\x0011�4M�0\x000c5xfG\x000cc��T\x000c\L�\x0010�\x001eu-8�n\x00190Nn��2:+��=�~@\x001a{X��z]��GU�\x001aZ+���o��S�~��\x000c�}�cʜ�\x0010\x001cTӡ��n��7�x��\x0003~��\x000fi�!].p�k���ݣΚ������l��	�s4m������`��
\x0000\x0011�d�\x0014EQ�w��'F�e��q��w�\x0015r�����Z� ��o7Xݾ׀=\x000ccT�\�eeq@׳\x0007i��4���L�T��?@\x001bƆ=�\x001b�����ݩ\x000f�\x0011��\x0001\x0016\x001dA\x0010�c��x�G	�8\x001f?�\x0008:	+Lߚ\x001f;&.o4Q�\s�\x0017�\x001b�с�u��'��p���8��>Ƶ�Q�����S��|�C?B.��]��y��\x000f�H�\x0019��
��C�D��\x000eUY�Yt��\x0018\x001d\x0017A<G\x0018\x0006�c���6��\x0015z�$���\x0014�l���%<?��W��Y�˙�/v��\x0008˳s�):k~��_�\x001e�aC���\x0007]1����sܼ}��C:���Ƌ\x0017/Q��+K#|x�F �o�C6��5���W��/~��)\x0011�1��R{@�0I��C�\x001a��ԧU\x001d\x0010�\x000b��q�م��\x0015\?41o���Q�2\x0014y�?��c柺��A1�\x0006Ď\x0008�P�A0\x0016�3�+�[F8�\x0001A���<��B]���;��\x000c�\x0003�� H�C�\x0019D�Y�VVVVVVVVVVVVVVVVVVuY\x0018de�	�N\x0017\x000e�9\V�\x0019�ż\x0010�c��9��Z��|�G4������G�\x0013\x001a1�%0�\x0008�\x0008>]%t=��ܨc�L�\x000f��˥S�d\x001f=��W�\x000f\x0001\x0003\x0007�t�p�\x001f�>ڶ��zx{�������ݟ�\x0014/��\x001c����Pե�mr�t\x0005�\x0008әεjk|����:Zm��ps��Ou�t\x0003eY�</4����r]��\x0001\x0007�u���vbԗ3\x000e�7\x001b4U-@@��\x0002I:�~�U,\x001c_Opbz`\x000c�Q4��=�\x0003���G�\x000f>r�<�ù����7�>��N?�G?��]A?�}q>�O\x001fG�=£N������S��\x0008��\x001e:`F�\x001dK��\x0002\x001fnW\x000f1d�<�\x0002�\x0017���'��'U;E�9�St�0�M�}��}S՝\x001ci���*\x0001!9�\x0018�F��\x0008�^��nS��֨�B1t<o׍�?4��
M�*��!<	=Ԍa�M�]�&pF\x0017�?�+֯\x001f̽I�\x0004�_|�8\x0008��<�#�]�w���b���,\x000bܼ~���\x0010F1�(оNfs�M\x0005���M?\x0014{�肋\x001dO\x0000����J8~09�z��|p�y�/0�E�9za��8\x0000 !��L�rry�D����>�m\x0015xzVG�\x0011�\x0001\x000e�\x0001�v'�\x0014�y�\x0011\x001e
�\x001eZ�� \x0000�X����HN�ipg�6&������������������ \x000b���>\x0001љ¯�](\x0013ha<�؛�\x0019\x000e�\x0019}�\x001e\x0016Fp
MkJ�in`ߌ�\x0012���e\x001cb���}:|\x00029�򺖣���׸�[�\x001fZ�\x0017~\x0006�$�\x0007�����-t�4�h�P���w�/\x001b���g��\x0001Y\x0012��[\^_*�K�gÀ��_�i���\x000f����WX�7(�^\x001dD�\x001f�\x0019\x001d4u�4�!\x0008|�=8�g
\x0007���B\x0003s�\x000eƆ�\x0017�N\x0016ƍUE��\x001f���\x0000\x0014�\���P H��n����\x0008i\x0000<��\x001ez�~���\x0005�N��k���\x000e����q��ט���1q�����\x0008����k��>������|��\x0000����8�$u�@{�w]�����Q�u\x0011��k��t�\x00039�\x0008&��i	#�\x0012m�\x0008x�p��\x000b���\x000f�\x0011x�\x0015�\x001a\x0010�{��\x0012��i\x0006׏��\x0019�\x000c�c���	\x0006��\x000ehJB�\x0016��\x001d��\x00134��U��>��_�N�a�,չ\x001e�\x0007�Q�\x0017���>>\x0014%��B�u���K8��o�\x001b�9\x001c�{���\x001fEh\x000e[�	G���X5��=\x001f�\x0004\x000f\x0015i\x0018�\x0002O\x0004�ZݾG[��U�g��\x0008��1\x001cF\x0003v\x0004-�=T\x0015p��E2d�sY�\x0018�\x000e��Z�&��p��5N/����+���q��O��;$C���S�g�ʶ�����������������K�� +�O@tb4u��v��W�3�\x0010\x0017��D��\x0017�p�\x0001
{���\x0004/`��]��\x0011XQ�4�\x0015��\x0001=\x000fD'ϯ��\x0001��Fǌ�H\x0011mY�ʱAg\x0010��]ߣbL�\x0000
�;�u\x001ct-\x000f�\x000b>��?�\x0013���չ�\x0019�y\x000b�DCp\x000eķ�w������\x0015�v(��~�d��\x001f\x00111.\x000e���9Fr{�E2��1\x0010\x001b�\x0001\/���\x000c�=\x0016�\x0013�E�k%�b���0�OI}H\x001c�\x0013�\x001c#�8����b�̀}\x001c;\x0001�G\x0017У� �7�=�G\x0016�c���\x000e\x001f�3�\x0001��:\x001f�Gǟ�\x000f�\x0007H��\x0018\x001f��\x001e�L��\x001b\x001e����0�{�D�\x001dE��x��X\x00047t�\x0008\x001av��/��=�i\x0012�u�n0�0@�\x000e#\x0007q��m=�b�(�v}�=B�B����\x001cm�X��:��R����֬Ń���D�ٻ.�d�8�a1���O>ǋ/�0�����}t�mV�ow8����\x0018[�
�"\x0008��S�<�\x001dL\x0007Q\x0014\x0003΀��tt���\x001ccqƨ�\x0018�>{DS\x0016\x0008|\x001f�3�=�:\x001f7
M?U]iO�]�x�mt[1�M�!���x�	�Џ�T����g�\x000e+\x0007��J=@�b�J�#�\x001fU�\x001d�\x001d��lP\x001eJ\x0001�t6�\x000f�~�����K���[E&f���\x0004\x000bXc������������������_E\x0016\x0006YY}\x0002:��~�TaO\x000e���\x0000H w\x0010\x0004�\x001c\x000c�`��|\x0008��H���\x001d\x0011\x0004\x001e��C�X �/�\x0018����\x0016 �\x0010�\x001f=A�$�\x0015\x0017\x0016'�\x0006܌c�Y��\x0001UU�\x001c\x0018�š�:m\\x0017M7hP��\x000fou�E�X;\x000f��\x001b�V�\x0018G\x0007�b��b�^�Y\x0016��?�s�9�e��'O���D	Z�'�E\x0015\x0006���p@���ق%St�|��~���r)8 u�\x000c�@\x0018���d�#\x0006�8�	�L?3 �}��y\x0004E��M���.�\x001fG�\x001903L�����y�\x0003�7A�\x0011\x000e}\x001c-�\x0008p~\x001c\x001bw�C&�n�ȭ4�\x00083g�:?��a�R\x0006\x0012�[ϝ�����G��ӹ�\x0001�3j�i�*���\x0010)�b�3\x00027���q�;@��\x0018��~����q\�c�Ҵ\x000f�,r&��ߍ
�C�����;���/�\x0005\x000e�(��#R��h�X`yq�(\x0008P\x001e���Z�Su� \x000c}l�[|�����1�/�u��#��l>G=Vh�ZN6��JA�=�W�z�Z\x0002���\x001b\x0004p�\x0010\x0003#�\x001cW�k��\x000b0�t�k��L@���\x0002
iw��~w-�b��#�E�Ϊ�P\x0007���\x001d���t�%���\x001c��\x0001U�"�}E��\x0019��\x001d�Y&���_`_Fp�\x000fei������������������_R\x0016\x0006YY}""\x0010��D�\x0016\x0001\x0006\x0018��z^\x0014��\x0008\x0013\x0018�F,Î!�ä���H�\x0008\x0017�'X��#[�"I3���_a�[�v�n�vl\x0011��\A�L��$K\x0010ũ\x001c8\x0004I�,}�\x001a\x00181�S���$��8��対�aw�ۃ����^���S\x0013�8����\x001f~@͘8�c�o\x0015��z.�4\x00114���D�%��q}
�	��J�T�?��\x001c\x001ei��*\x000e�����\x0011��=W�s�(�\x0017�\x001b\x0006\>{f:p�Z\x000e���
u]�\x0004\x001a]��\x0017�rq\x001c�!3�|��!\x0000�\x000c\x0000��� �Π���7c�\x000c\x0004:�#<t��G\x001dC?v\x001a��;?��;B\x001e\x0003}��~\x0003X�#7�c��p\x000c^\x0003����t"��$�N\x0018��zE�9�qH�~*�
΃\x000b��ˡF��\x001b\x0008\x0018�\x0011���pB�14�c\x0000�8��\x000e���z�`�^��9\x0003����c\x0004b�ﱹ_M�͜7A��\x000cC\x001fE�#
<|���K���)\x001b<}�\x0004E^`u��r1���\x0012�����(I�\x0015\x0005Fv\x0008�\x000eBޫƓ�'\,������\x0003E@s�\x0011�\x0019�(�[�
Cӝ�.�U��\x0015Y�g�����\x0018��ߢijT�\x0001��\x001eE�`��\x000b\x001c�M��j�����)�W\x000e<�r�\x000e�''��:�8ş��?�g�Op��!\x000c기������������������\x000f��AVV���tѠ�N\x0003�S\�`\x000fLO�0E�u]'G\x0002&�FĢ��A\x0010�\x001a���[� �/�_������xSϋ�Y�!�\x0002Ŵ�Y��\x001f\x000e��(A:�\x0010�"9�<�t�l�{�p\x001c���)��=��B\x0014y���S)M2�\x001e�@���\x0011g\x00196��\B�\x001f���5����氟?w����l&\x0010\x0011G1�fo��#\x001f��
i�`~�\x0014�i�
�W׸}�\x001e���ȷ\x001b9K��V�gyv��b\x0001�N���a����T�$9{|_���n7�۵(�\x0012u]��\x000f��Acp\x000cD1�p\x0013�9ơ�\x0006��\x0004�\x001eiϏ��y�;<��\x000e"�\x00187�Q��\x0011�|\x000c��	�\x0018�4>��#\���i�<��8�`\x0006\x0015��\x0000X�T\x0002\x0019�mS�\۫O�_\x0003�[>��\x0002u}��ku�E�#�m\x0014���8�0��yw��>\x001f&^�\x001f\x001f�N�Nr\x0012M�zt �m�C^�w.;��kR\x001fҴ��Yu\ﻻ���\x0008\x0013ϖ'��	ʪ���\x0003\x0016�\x000c�\x001f�j;4m��b
{A�\x001e�\x001c?������\x00134�\x0001^��(�/е5��+\x0016.�!�G��V�\x0002�ն1�3�EU\x0014h�Z�V���ǌ��[>+9�}�1q}Àá��8�#X'gY�\x001b'�l�CQ Nbܼ�\x0015����gx���%\x000euO_\x0018O�������������������?H\x0016\x0006YY}\x0002b,\x001a\x0007�\x001c\x0012\x0013���0��\x000fr��C��|�:�m�5zO\x0018'\x0002)\x001c�\x0007� \x000f�\x0006��%��AS\x001c\x0014�E�\x0004\x001c�\x001d\x0014x�����'H�\x000bD�X.\x001bF������p~z���G܄(|\x001f��@\x0014b\x001b�g���>�\x0015aO�"�\x0003�wYU꞉�L�<9Y�\x0015���^�`}q\x0010��\x0008�\x0008\x00168(�3%\x000c�\x0006�!ⵑ
$Y��i1�Eq.��cs`??;EQ\x0018����\x0005n޾\x0011Dj�\x0001O��@2_�\x001d��/P\x0015%�4\x0015�99?A�4(�\x0003N\x0017\x000b�\x001c/_<G\x0014\x0006���)�l6����\x0007��\x001d\x0007�E������Ѳ��\x0011k��К:r��p�x\x0004;�\x0003�\x0001>�\x000bz\x0004;�\x0011o�u������c�d\;?���X��<�ٍC�2��\x0015\x0012Fu���\T\x0018�s�����F\x0007uQ\x001bWS�awOL���\x0013\�����Bp��\x0003��ޢ�Ju
1ޯn\x001b�'�;��=D��.��\x0017�\\x0008���u}� �!䩼�q�\x001dӍT�=ʲ�v��\x0017x���X�\x0012�Ζ��g��,s���W��N�V�n����P\x001d
dQ�\x00189^2!�S\x0015fuG\x0017��O�У)ˇ�<��\x001d�kuk\x0011��U�?WU��\x000f7XmV�����3�=Ľ����I�t\x0016\x0011�\x0012�0*.��\x0004�\x000ey.\x0017\x0013�UB@��Fv�\x0014Er\x0001��L�\x001f��VVVVVVVVVVVVVVVVVV�)\x000b���>\x00019*�\x000f��\x0006�7�z!xP��h\x001c\x001b�b�\x001c
�9'��_���\x0010E�b�\x0018��.� �Q\x001f\x000ezo˞\x0014x�CW�0g�gHf1��\x001c�b&�F]V\x001ap�4?H\x001a�?\x000e�A���n\x001cb���Sǅ��\x001bp{���r��n�/*�,��b������Z�\x001d#�\Tu��8�g�	�$�\x000c\x001f޾1�r��x���p�C�Q[q\x001c���\x0013�n�ﶸx��D�������\x0015}\x001cp�\x0018��gx��h�\x0006�v+�@HT7\x0015�Y*�@p\x0015����ί.\x0011�\x0001�������\x0004�;"KB���8��es�UTUȋ�@\x0010!��ݭ�D�C!�
�����\x001e;{\x001c�#\x0008t�Bxp�\x0018�����\x0003��MD��=�C|����~�c�C,�#\x0014z���� \x00144��R�e�[�u=�m-\x0017\x0016#�\x001c����q\x0005Q�სC�� 
}��?�۸�<3\x0011��A׼��͞\x0008\x0002����+�WW\x0015�3���st\x001d\x0003�zu?��@R\x001f�\x001d\x0011�����:v1�{����QvxtBq�\x0013�\x0010\x0010���ؿ�f���=^���^<���\\x001dC�\x000b�������z�x���\x0005ODΠ��3\x0014�{��\x001fFh�\x0003ں\x0010�j���\x00177D�T�LA2�A�ߣ�K��;�\x0000��=��A׷��\x000eeݢ��\x001e�up�\x001d���z�y/�<�M���J�L��8��cu��ӗk����\x0007�NP���a]?<�'+++++++++++++++++��ea���' \x000e�9 ��w\x0018\x0003
�50�kSЯ�*\x0013\x0015��vh�k�ߩ��q\x0006��gX�,�-�&
�(E\x001e|�l��2��4��۲X�!���E�:JR?���H�\x000eI�@_�8\x001c
\x0004y���a�\x0004q\x0008��?/p9Wǡ*\x0015U�\x0007.�v�>�cN�H@85���\x001e��O�Z�ayz�*�\x0011�f�\\x001fI�!�nա���<G2̰�_�?��(:�.�=�p}u�\x001eQ�!�ϐ��X}��!��7:6!�g_�\�ta\x0010���\x001fH�\x0010F\x0001��\x0013p*\x000f\x0007�m�\x001c�\bt\x001a\x0001	׉�]uQ�e\x0011�Vi"'H��\x0011�\x0011�4F\x0012�8�{,\x0017\x000b��\x0012,O�p�\x0010�|����ڬ�\x0017\x0005֫=\x000e�Rk��\x0018u������\x0019\x000c\x0004���\x0002A�#Ï6���>�\x000bco��)�	.\x001d���� \x0013
w�o\x0011F�\W���أ\x001b:\x001d �\x0019\x0018�\x0017�\x0013�)\x000e�f\x001c��\x001e?��\x000b����;�j�F�~��S��8`�^#�Rdi,hF��p\x001d	{�T�c�>�Z\x0001\x0011�g\x0002��9����
|�O�3P���������΋}:\x0004mUU\x0013��G˘�F\x0013M�8:����j��/�5���\x0019~���Xf�����g�/t�T�Npjvz���+n�qqm�\x000b���\x001c
����\x0018���AuY���Q\x0016%֫��\x0019!表�#��\x0011講^��i:�;��\x0000�V�s�cCe~�{�x>>��'���)�����\x0006w�����ex��3d�\x0013�_\bE0�Y��\x0016�C���\x0004�GA4++++++++++++++++����� +�OAà�1\x000ex9�K�oMd��at��\x0017�a\x001a���1r�3�C\x000f�wp��\x00192v�x!��f�\x000f��{\x0002\x0002\x0004$��c7O�̍�¥c(D\x0018�:\x001e�\x0007<���7O\x0012�{�\x0001��\x0000��F1\x0015:\x0003����wy���B������y���Y�����h�Z�n�g\x000eۭ\H��	����\x0010}�
�\x0010$pxO��5I�	� ���\x001b
����qq}�|��ճ�\x0002B����\x0014��\x0012O^�DC����"�\x0008��4V���Q��ӧ�Q\x001crD�/j
����8��F?�%\x0004krxth�z
C$I*\x0007
cҰ�"��0D����8\x00138!����Eq(q(\x000b�	�xrw����\x000b�y�c+��\x0001�\x001ccҎ�\x001fwr\x0002\x0019�\x0010y�1\x0004\x001d����)tt\x001c��\x0002M�����@2�gg��{�?D�1���n\x0010�\x001e��\x001f�\x001d���\x001d��Z��*��D0rzq
�3@��\x001b�� @�'��\x0012cj֫a7T\x0018#�c㔙��Ա4\x000e�}w:���\x001d�H5�7]6��	\x0017�gK9���G�4�n�h[\x0003>\x000c8s�o�CY��~�
~���8=Y���\x0017\x0018�\x0004\x0017}\x000f�u\x0004I����A[��\x001b�v-�8V�[]���+�\x001cU�#\x0008\x0013tE���k*\x0008
�A\x0010�_�]�=����\x0008�t
�Bt=\x0013��g��P0��an��^�;��a�{�\x000cf�7�+�������5��1Q~�9�����\x0005��X��#�-��'_S��Q�=�C�F4������������������Y\x0016\x0006YY}\x0002
�\x0000Q��]A�\x0002\x0007���"�:3�V���\x0010]C��-*�/+�c\x001f��R�#n����&�\x0011'	޾��w}�^����n \x000e��\x001c��9�8C��E\x0011��\x0007\x0008�L}D�bi�5�\x001bv�Ѕ�\x0008�`��QG�\x0003�m��,���}\x0013x\x0006\x0012�؟E�t�\x0010j��\x0014U�����\x0004]*Ftu\x0015�x�~\x0015������R\x001dFtbЍ���q��	���W:���0�/�<�PL�Ջ�p��\x0015��A.���78=[\x0002\x0015\x000c�a_\x000e\x001d\x001bt̴5<�\x0013ư
&ڋN�@\x000e\x0015�\x0015įc�\x0019E�����ř9e��\x0000\x0000 \x0000IDAT��\x0004>\x000bq�A\x0011d<�n��'H\x0012��\x001b�Q��b��|��2L\x000e\x000e���u�;¡���Pc����A\x0017J�
�=gt��ǀ 2��\x0008���v\x001e� �\x0011[�x�\x0004jGg\x0018��\x0011�\x0010�pE���D\x0012����|��F\x0010��O�\x0019ƾWd!{���G�D�\x0016F\x0011V���\x001d�ܓ=��-\x0004��V?�!?\x0008~�C�Г�s!\x0008\x0013�ag�tA�c�y�t��&�>m�\x001a]Sk
�8��W_�n\x0006��\x000e��~3�mb�\x0006wD���p���?���\x0017�W��O��7�\x0017��W_
�	�
@<�Ë\x0006�����HBb�W�j\x000c|$�\x000c��=v[:�*l�%>ܯ\x000c�k;�}\x00081=?�}!Ĭ�\x0016UQ�>p�:�a1����X��8?�};�C1����q��� \x0001#�a��t��$�|������~�^ 0��\x0016x��s<���\x0008�\x0005�(A3\x000c��^p������������������G\x0016\x0006YY}\x0002�3'�eخ�
�Q	����0�QZ\x000fbL\x0016\x0007��qD��YD��T]=��\x001b�A/�\x0002���z��\x0004:<Gǡ�\x0010��0�N\x0011�'�it4��\x000b\x0003tM���\x001ee^�c�Q�\x0008�4�qtnD\x0016U]#�2�%CxS�f���\x0006\x001e�N\x0006_.
��۾C������	�82\x000e��gv�\x0010\x001e���� Dbǐz�\x0008&��Dn����\;N̯�?���w�{�
c?*f�\x001d>\x0004c\x0005נk��!�(�=� ��'�\x0012Ũ\x0011B�u�OΫ�i\x00044�$6�\x0002 I\x0012�k�۽zr\x0008�\x001a\x0002&v�D�z���0�`�Qt\x001dA\x001a#����5�����Ƶ�$�:?��ln\&Wg��D�s��^�c{:P�
�0"�\x000f�\x0003�L\x001b\x0007��\x001a\x0010�\x000cS��"����5�r��~;Sl �� ��\x0000}���\x0007 �Y]Uh�\x001a�\x0017c�� �|\x0004Q$\x0018Iب���8��\x0002��B\x0018��r#��\x0016A\x0013\x0018�9`�/\x001bt/�&t��1V�9䄂�tF��sU_�k�\x001c���\x001e\x0008�u��\x0016��w@��g��9��\x001b�{�F{�\x0019{����b<\x001b!e���\x001f^ㇷ��߾�O��
'�\x0008O�_"H2]���\x001a��J��5\��\x0015�\x0016�\x0001��\x0016�w��[mQ���
��c��[6���z���u���gr�	�\x000c�#\x0008\x001a�\x0015O���\x0007w���\x0001>\x0006�a"��۽�}�/g�kIvB���[L�!����?Ƿ��c�\x000e	�>���q��'�/N�;.�aD7\x000c��	+++++++++++++++�O\�O��?���M����[\x001c\x0010{m����\x0006�p��w\x001a�k�?�\x0002\x0008�\x0013|-�\x001c��\x0013����q�F������\x0012a�	\ԇ\x001cۛ\x001b�v;u��\x0001�����-瘝�!�R�	!R� ����g�\x0007n\x0010(֍]2\x0003�@\x0014�Q\x001cV#w�\x0006�4�\x0010\x0008��\x0014c5"
#��qq&����8,�[S�/��8(�[\x001d�n\x001bγ��r����z�����\x0015v�5�4���L3�8\x0008Np]\x0008�\x0016�g8�����\x0013�|}x�-�'�\x00062�\x001d.�����ԷC�E\x0017\x0015���i�\�m[
�9��ۄ�����ut{p�>L\x0005�}��z���\x00196���gTG��C��c�\x0019�1�#E��I���\x0001�\x001e\x001as/k9v\x0008��8��\x0016�\x0001uq@�{H�\x0010�'3\�����\x0005��O\x0004����KL��P�<`t>��\x001bM\x0007��	\x0004\x0011�q?\x0011Xtm��k��\x0015����=\�-\x0005�xl\x001e��.K3�A$�\x0013!��\x0005�D7*����{0�\x0002]��x���\x000cr\x0016\x0011"�r�L�H]o��\x0014u8
t\x0018P\x0008\x001c1���>���5\x001e\x001dE�7d%<�f�\x0016\�~v=\x0001��8gL"ޏ�
\x0017�\x000e��n\x000f�
0�>���
�����9ꎯ���\x0003��\x001d���k�o�x��=n�0�ߡ\x0013cs��	�6�\x0015\x000e�\x001cUY�%X\x001b��*'¹�X<S��N�,�L�c~�q���s<������U%H���W�\x001b�ȍ7N�Qrm�5A���+�i���)�Y��>\x0002#\x001e'�#E>�y`�֛��\x001c�o���l�dq���0�����������������S�u\x0006YY}\x0002j�\x0000qv�(Nԝ�)*Ο\x0006��	�p�E\x0010�\x0018�DCv\x001c5�O�\x0018�l��\x001f����=���(\x000f� �X\x0019\x0017�� \x0003��0��G&\x001eN�x�\x0007\x0005&¬g/� 0�.Nq��>��{:#nW\x001bt�\x0001\x0018>�:�\x0019&�\x0005C8�9.N�\x000bl��\x0016�L���!:A��\x0011�����\x0000\x0017�\x000c<�Q�6�\x0006��V�5�ZF�%���-\x0017��c��a���h~r��g/t>��w��'Y��3拠��\x001f�GW��N:��(DSVh�F\x0003x�\x000f�C�x�^�I癮i�\x0006
�&����(���
^<�7oިK��z��x\x000f�0��a�\x001d�\x001e�\x0017\x0001�0��\x0018�Ww�G���(\x000c��\\x001d<B#�$:i�"$\x000b�Z�q��c\x0018\x001ct#��
�y�T�M/\x0008F&R"��c0���\x000c�#�\x0012p\x000b\x0018/8��ٙΙ`�Ѐ`��\x0005�\x0018\x0015�{]\x001d\x001aDi������V`�`i�!'VA�5\x000c(\x000e��u�~��� 8�ĩ"�BvD\x0011p���M3\x0018��=�\x000e��DرN�?F�
�k\OA�����\x000eu����_���7X��\x0018I\x0015�G(��\x001au�����\x0018����\x0015�!B�L�G\x0014&S\x0014���ot~��e������8�\x001e���\x0018�6q ��xnt6�\x0000!^���(�\x001b�p<\x001e\x0001�C\x0010�\x0017L. \x0001$�\x0015�R��
\x0012�t\x0000�рP�\x001e�~�r7������@UL����G\x0014�3۪����7��Ͼ@n��������������������ea���'��
��3�8��\x001c�=8|&$\x0019\x0006Ez�Og�]��	
�\x0019��9\x0014\x0019�
\x0001JU�!QV��M|\x000e֏�&\x000c�J����v�
��\x0011\x000c\x0005A��\x0002�؀#��4(�]\�eP�;<y�D��m���\x001a
�\x0003\x0004\x001ar�e���G�\x0000\x000b}��\x0014EӠ*+u\x0015
0���3�=�剀OG��l.\x0017O�X�4QO\x000b�J]\x0014\x0002#��\x0013�6\x001b���n�� �<\x0008\x0003
��h9췸y�Zn\x0012B���\x0005_8����.J�)�R.W��\x0004Z3���]9t�\x0006�8�p��
\x000e�ٷ�t���f�n�w��
�0�����)����.�\x000e��[���8�\x001e�5�]o\x0005}�8���>�\x0012A,�"���Κ\1Q�\x000bz\x0010\x001c1f�\x000b<T� \x0010F�
�E�\x000e�,F����<G��x��\x00067w+�� 7Kߵ\x0002�r�ȡ���M���ӧ���>�|��k܀��=F7r�\x0011F��k�M��MCw\x0013ז\x0000��\x001bLL\x001aO7\x001a;�؝�\x0017��a'K����86\x0011}�k����z�X��\x0019
\x0000"8���Q/Q'H\x0012�AGh3BN���\x001b<}�B\x0011t����\x001a\x001f���	f\x0012:B���˩���^PԞ�bp\x001eR�\x0004\x001a��g��\x0013\x0008��T�8��`\x0002C\x0013ⵤtI���\x0018F�
2�Q��^�?��(��\x0018�N����&�ф�\x001d�#8D��Ͽ#�r����[��\�eg��\x000eE�G�\x0019��1\x0006Pפ\x000e!�\x0000f~�>���\x000e��\x001e1T��g�����������������\x0013��AVV��F?@6?QlW��r�8\x001c��D��A��\x001a\x000e�	
ԩ2���R8\x0017\x0007�t��)^���)���[��8
\x0015\x0003\x0016E�C/��sh�k`\x000c\x000e�]F~�צ4N�)�*L\x0012�g�����Y����B\�r)�U#\x0010��A�T��H �\x001dB�\x0014\x000bGx��\x0019\x001a \x0008Lx>t�����E\x0008A�2�\x0010gԵ�a��t9ן\x0015�6u�Бr��qrz���+A����\x0008\x0017\x0017W(˃���9��Ig3\x0014۵���
���xn�fr�v41k�9�y\x0011.ѵ\x00129�\x001e�u��<N�	�\x00087�\x0006z�\x0008E\x0018=:�渽�A�d\x000f�0<\x000e�,ES�\x0002f�\x0008\x0004/��R�C\x0008A��~��k�\x0004\x0011�b�\\x0014�:\x00185'\x0007
��"�\x0012����\x0014UQ�d�\q�,Jp�#�\x000f����h\x0019?�O�S�\x0011t\x0017gK�����'u�b��\x0005)\x001a:S�#�\x0013��\x0008&��R=5���/|\x0005\x001dIMә�&P���L���d�����{�$��\x0007�\x000e#G���T5m��}�q���1�\x0008
�kǸgF\x0017\x000f��:��\x0013�oo�쳗8�;�Mk��{����ș�l>ct\x00069l�\x0019�����q:.a\x0010���z#�3Nf#�:י��q��q�k\x0015\\x0019F�2\x0012��M��Ѽ�\x0001�\x0019��(G�뻈�P�V��o���\x0019]���%\x000c�\x0015\���\x001c��0���\x001au]`sÅA���f����\x0004�\x0003�0���^��v��BXYYYYYYYYYYYYYYY�6�� +�OD~\x0014#Z�a�{gb�\x0018G�N�\x001c��\x001au��!�Ȱ\x001emU�<\x000b��1�(R/LC�F\x0010 ��{�0@��J�"�\x0008B\x001fa��u|���u�_����\x001aM�9\x0018'�`L\x001d\x001d#��:\�3�y�(������o0\x001e
�}���Pխz\x0018�F7C�8X,f��_�\x000f��
�x�4̇��VƩ�i���g\x001f\x000b����%�o>�g\�̙)��qzi2�ӄQs\x0008B���8�����\x0013�M��3�����IZ߯\x0010F��ͮ��p����ו\x0013�n�
1;�\x00083�@��\x0000�t\x000b-�i����I\x0014�u{��#XȲ9.�����{DI��\x001f\x001a\x0007��	�(\x001e�o\x0005���®\x001b9e0"[,4�'L����@�1���o�X�\x0004��{u�\x0010f\x0019�S\x001c��8L\x0010^\x0004�os������n\x0010�͈b8��ET\x0008��'X��\x0015�\x0016�\x0001����\x001d��|1Gߍ�|��T`u��\x000f��*��\x000e\x001bF�u\x001d#Ն�s1�&s\x001f�)\x0006�l�D��\x0006��B\x001f����7 �\x0000�\x001d{�q_��k���2\x00187�IW3􂰬�\x001cNt��e��U\x001f�����;���3�}��Ǹ�0���?O��ګ\x000b)\x00168a\x001c��w�}*\x0010�8�?\x0017\x0017���X@HqlӱF$�<\x0006\x0008��Xn\x0012�\x001fF��x��\x001cD\x000e\x0002��Z�E�:��W	G��9׺��/\x0016�3�7����\x0007�OOpq�\x00147��輢t6�1�\x001e+��\��b��qēg/P6��'�����������������@\x0016\x0006YY}"R�U2Ì���[�\x001b�;q��s�N�\x0010���L\x0011_��q\D�
\x001b\x0006\x0001��(�ہ�#�q��8�\x0003b:4�*�0�1e\x0018
,Q�\x000b���
^�\x0004�\�$�\x0012y�g\x0013T�e��\x001a9�&|Hb\x001c�\x001c}7��zTU���0Ob
�˪T$Z\x001cŊ��A���&�\x0007�\x0001u\x001f	8��\x0014~.�n�q@��j��H�$K\x0014s��-\x0006�SD\x001b�\x0010���\x000eH�\x0018Q\x001a\x000b\x0016q��5�-��W+�
\x001e������8n\x0002_@�\x000e�,ML��`\x001c\x001bMU�8\x000f`�m5L��J�ʘ�c\x001c\x0019כ\x000e\x000c�R\x0008R�<}���\x000f�6-f'K�\x001b1\x0008w@6�\x000b:q�O��~\x001e:P\x0008�\x0004��A��\x0004���W�E(�0 IS]�\x001cE�k\R�a�q��f�t\x0002.����L_��F�qq\x0012�(+��0��\x001b]Tm�]����
�hb�\/\x00144\x000b�9>���������&s\x0007�o�{�g�qcO�����(�\x001a�|o��0h/\x0001S�Q7�t\x0008\x0005\x0019�6��@����{�7ݔ��3E��\x0008E\x0003�\x0004��\x0001.AIQ�����|�\x0004���>�8E��h�\x00070t��T��e"��#��i���1zΙ�{�����k=&j���s_q����I��߫�k\x0014\x0004\x001a�Rr�w\x0008�����\x0006^\x0010
�:���t\x0015��i�\x0018�\x0018E��|�\x001b�x�E��\x000f�\x0015����K��:� B��ړr����\x001e�	����b\x0005�����������������>}Y\x0018de�����7�1;�V�MS�&2m4\x000e\x001a9\x0002|_�^�	�\x0011�h8�B��5p(\x000c�qB0�\x0001?�\x001b����`��U�\x0015'񌌒;\x0001p�@N��EW�h���?�]U�~O�\x0006{}v��>��-EY�PV�A+|B�9�8P'\x000c���T�OG	�a;;t���5qx�c\x0005��\x0000\x0004\x0005�q\x00073�>�[��l��=�\x001b(j��h�� ^����!�e�\x001c�\x001e��{��_���p��\x0011��D\x0010tv�N\x001fƱq���1��Y6C��\x000f��C~Pw\x0010]9<:{�(��uh�\x001e\x0018'�^\x0017�@����^]=Qd\x001c����\x0001\x000e�X\x000e�\x0018ijb踮Ã��W�\�6\x0002C�ft�\x0010j�S�\x001bt�(�\x0005
��A��0��\x000eN�N\x0015\x001dV���D��>A�A\x0010�X�\x000c|��\x000c\x0003�Ո�v��cʂ\x000cD�\x0012B�\x0014/>� ���Z��s����\x0012W�\x000c��S|��9��5v��Γ ��"X\x0018�rP\x0011r�9\x0015��1�8ƭB���\x0006\x0002��Sn�+Ό�.�w\x0013�\x001fZ]� 0bbϸ.�k�\x001d\x0001\x000fߣ�u\x0003�,4�a��ϑ�L�\x001ei<\x001a�$���Y4E��Y���,�.���=d�A�'\x000b,\x0017sݓf0��\x0000��}\x0003o�\x0006a\x0010h/'i$��O�Jee\x001c>|\x001e+���{��
C�00�O\x0011�\x0002|.\x001c��}���܇\x0008=��\x0002o�a����\x001c7o_�>��OB�\x001d�c��\x0008��;��E4�c�Z\x0018deeeeeeeeeeeeeee�� \x000b���>\x0015��\x000c��'x�ŗ������\x000f�!��M<�@FYy���\x0011�{g\x0004�8����_��0\x001a��iEQ��x\x0006^\x000c���\x000c�]��	Iƙ�\x0006р�P�_�6r�\x0010\x000e�e��p�\x0010��\x0017ؕ9no����f\x0014��h�@N\x0017\x000e�	#�B0�_���\x001c�kp��rD�9�\x00088Ǝ����W7\x0015�8C��"MSxr�T��s�P}5\x0015�)I���\x0007��%ib\x0000JI�O���s �8ᐽE��\x001b\x0007���*�W�r�c�}M�o\x0014\x0007�;�p�~�j������e�T�x9�Ash\x000e:F׍��et\x0004B�\x0010Z��a�^!�͐��\x001c]t�\x0010Z���K\x00139Z\x0008�\�)�\x0007�X�8�n�՚\x0012�y���>�E����f�z���]�d�`̛	h=�\x0010C2FuC��\x0004.6۵�ft�С��rz~�á�l����'8��B\x0010�H�9޽��\x0008:zj\\�\x0004�������v_`����\x0006�w\x0011z\x0001B��r��łYj`�\x0003�\x001f�X�\x000f�4F#P\x0004\x0013�\x0007���\x001a7\x00138���\x0010�5����!����Lo\x0006o�w$\x0017��α��x�r��\x001c\x000c\x0014�^\x001d�c\x0017���cD@Cw\x0016�L���t'�4�ϴ���th%t���	ƭ�}E�\x0017\x0008ڎ�\x0011h����Q���@}D\x0011��\x001cUݠnZ,/��#\x000c�
�?\x0002��\x0017\x0000��\x0011\VE��&^K\x0010D\x0002J<�N1�%��B@�c4$��	d���+��\x0013x�^>�������������������'-\x000b���>\x0011i`\x001b�\x001a���S
�9��\x0019\x001fƮ~����\x0007F�a_��p��T\x001e\x001d*];
�{
�\x0019E5�\x000f�\x00138"�\x0008�\x0018c?�\x000fc\x0013\x001dǲy\x0002��2�򮡝�ĵu#Vo��ٱ?���P�\x001d��oq(\x000bTu\x0007�\x0016\x001c�J"� D"��c�����\x0004��y\x001d���Ec ̱�e0=-P�J��O\x0013]��s��#N3\x0013W�\x001e��t�,�'�\x001cǸj�D1n\x0017�ϰ�}����.N�\x001e�\x0004��ST�\x0003�߿Sl\x001c��泹Η��$�\x0004|x�<�4N\x0004H��E�W\x001a��<	�|����h��\x000c���2O�L7\x0012����\x0005�\x0005޿��m�
^�\x0011\���s \x0008�k��p<�:t|s���r,���{�q�\x0010\x0014��IQsU(ӣn\x0007\x001c�[l�{9͎�j�%���\x0007��'\x000c���~�prr��<��yry�\x001b���g��|�D�f3�~���\x0019޿�\x001e�3�O��?�w��S���\x0007��s5`�-�\x0015g6�\x0012�\x0013\x0000i�\x0006)#��\x0008��\x0006��u\x001b�vt�\x0011��r�9��F� ����Qh��\x0008)\x0019S8�n"��\����}���c?>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sites/default/files/styles/block_image/public/2020-12/Vignettes-ARTICLE-831x467_01-Pourquoi%20une%20election.png?itok=ZxU5iXUp](https://election-tpe.travail.gouv.fr/sites/default/files/styles/block_image/public/2020-12/Vignettes-ARTICLE-831x467_01-Pourquoi%20une%20election.png?itok=ZxU5iXUp)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=\x000fK\x0008¼\x000f½Uw\x000e(««Ë	ÎZ>ýà}\x001f}Ê\x001fýé¿AÝÿv'¿-C¿hiûº\x000eÐ5#B\x0018\óZVÎÎ¢ÿg[\x0000ï\x001cMª,BæñØ·$¿­TØúK/õ@$\x0012D"Hä·Å+/~JëÑMC=9£?>`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=�ii�Lg����o��z���D\x0014"T�$Y�뻕�Oظ��\x0013�\x0007�\x001b�\x0018σY.
\x001bݮ\x0005�l$\x000f�\x0010��h8</p><p>���d>F\x0014e�G1��\x0000o�="\x000c\x0003�L�K�}\x000f��+��c�{��n��61\x001a��X��!�uY���\x0013�\x0005B�~{���'J\x0016�v\x0005\x00181�f:\x001bb��P�T?%��R8��g�O�]oQd\x0006^��F]+%\x0006�s�N!�`�N�\x0017</p><p>\x0018y��N��󧕗��w�*\x0015�\x0004��1�Ӟ�&(�\x0014��ƾ\x0017��W��_`�\x000b�r/Ksi�3����*���1��V</p><p>�P\x0001�4�������\x0006���Rք�3���k;�Y�Z�\x0008W��jmi���1��qH\x0012��������\x0013ܾ����KV\x0014U\x000f6�CW`\x0012-Ө�`&\x000eI@o4D�eb=F%\x000b�_�a��b��Y�}\x0014�\x0019(�(g����~8���	L�B\x0012gru0���w�\x0011*-	b�F�7�'��eh��:���ZY�1�_,�,�\x000f�\x0015����\x0012��z\x0014�A\x0008\x0012\x0008���%\x0016�\x0019C�#�q\x00049�\x0006F\x000bQy<Tg�Ҕ��Xh%�k��F�\x0017t̀�
\x00013y���[U�f>-�\x0004ڊ:D\x0013�#\x000c����O�D����3<<,\x0005Z�5���b�b9\x0018\x000b�!,f�Q�)�\x0018��j�\x0013�</p><p>�\x0004� 3�<?P\x0019Pq*J<^w\x000f�
\x000eq.���t�=\x0001	Ad\x000b F���'����>I�s<�\x0002y��C\x001cC���t��Ύ�%�J�X�X�8�?�'n�*<\x001e\x0017�`��</p><p>h��ި���K\x000f�\x000f�خw�\x0011T5
N���\x001a�J��l���#�Þ�����CSj\x0008\x0003��\x0014\x0017/_�</p><p>\x0002�\x001f���������n7��Ǹy�\x000e�ד�c�ُ$������\x001ai��7\x0018�\x001e�a�cRXX��\x000c:l?D�W��\x0006�n</p><p>������\x0012\x0001�����x�\x0016���\x0007\x0015-<"4�h�gY�^����\x0001\x0000�\x0002�	���7�-\x0004RJ�\x000e\x0008uvq]u�UW]u�UW]u�UW]u�UW]�9ֿ�2�2\x001aڌ\x0007|�\x0017����q5��o�����){ɗЕ\x001aȧ�C�aU9��c�^�L20��O�M��9rÕ\x0006����v|�0��5�m�\x001c
��\x000efo�|��?�\x0001e\x0002�:�\x001a���|�ݻ_�?�\x0001\x001a����?�єx��;�\x0006}خ���1~�_`�x/�*�8\x0012�sHc\x0019�����ۙ�r(\x0011�.J��=W��iE�\\x001c�g�;8=\x001d����V�ʓ�\x0018�m���\x00056�\x0004q�KC�6k��\x0002\x001d_~z�2������\x0008�gC,�;Q�PU3\x001e\x0007�7���n���\x0014��\x0016MU���[\x0001A����\x0003\x0005\x0000he5�I��rE����&��[���.��(�\x0013�9��6-�2in��\x0003�\x000fuQH�7�\x0013�&\x001b�.3K�D��\x0002.,��|�\x0005"\x0010B�<���ԒIS	�\x0003�(��עHa����g���t��� s �@U�8-\x0010\x000e\x0002dI�"M�^�\x0005f\x0010��xlʃ4`0</p><p>a��|Q\x0016���\x000e��X�d��~��5�i��d���'����{]	Pl��d�G\x0010:X<����\x0000\x0017*Q&\x0017g�w;9�\��\x001a�L�<��[�\x001aA\x0018�9
g#�y�^�'�2B��ג�DK�C����\x0006y��yhm�s�\x0018�p��a:�`��\x0004�qd�j\x0001Bh�n�YM�B\x0002u�Hs\x001c96n���1\x0013�6\x001d2W�cZ�Q�$J\x001eym	�%\x0005k���)\x0015�1�g4\x0019��</p><p>Q�q,�\x0017�9\x0016;�F�1t�:R����\x0019lD\x0015�\x00146|\x001d�</p><p>\x0015M�\x0006b�\x0016Ǔ�N�L�c�\x0000$Mr��,m�*���pݕu%�FY��(�\x0012���\x0012�</p><p>3��x���X�E\x0005\x0012aŖvo��� �c�M]�e��S</p><p>\x0017C�\x0013\x0004\x001e\x000c͐�Q�C�Y*Vt}Y�<	�\x0008��Lא幀���	�6s�D,\x0012��\x0012s2\x0019"��r/\x0014�:����A�#���t*�D��Kn\x0017Ո��\x0018��#\ׂgk�G\x0018�NPd)N^~��(�>\x0018������\x0015��DΗ����\x001a��N�B\x0006*���/1=��
|TY</p><p>;\x001c#^܊E"�1	}L�\x001b*$�eM\x0008\x0008mՏ\x0001!�i</p><p>\x0008O���kr}s�񞘴v���9e3׳u���\x0013�U�\x0006��\x0014���pM�7�[���@�_��骫��ꪫ��ꪫ��ꪫ��ꪫ?���� 6�,iB�\x000f���\x0017s}����ה;¢�\x001a�؜��5��@\x0013PH��ڟ</p><p>�W�kN\x0015�(\x0012l���\x0017���g(\x0007�ؗ:</p><p>ݑ�0_�\x0019@�\x0016�\x001c�\x001fb�8b\x0019'y\x0012E�f�\x0012ic"�\x0002xa\x001f�~�bp��\x0006�z��wo�1'#�pX����\x000e_��_��d��\x0007�\x0014~���\x000c�a�,ɤ1M5O\x0014��S��ز?�\x000b6���;sQ\x0008��+�*\x0008�\x0017��{�`��P��"1qq>ū77x�g����/9\x001a\x001cŞ��l>Ûw7�ʡ�\x0014�</p><p>�*YV��e:\x0017�F�\x0003\x0015\x0010�l�Vt�|w����R6��p<�f�\x0015�pz:���\x0013��D��`�S�_��^_V����\x0010w�5l\x0013\x0010TՈh��++8MrqT�\x0014�R��*ĠEY�\x0019�)'|�E\x0019P"��\x0014� �)J��p���q$\x0000`\x0018�h�]\x001b�~�4�\x0014�h Ђ�'��DACPs��D�D�'�آ�Ah\x0007��\x000e�\x0003�]]�����S��\x000bgc\x0001r��?��\x0002<�ދ��\x000f}�\x0001�=� �\x001c��_�\x0000ۧ
Ҥ\x0016\x000b0�
�\x0007\x0015\x001b�������~
�����>��a\x0017	�#�"�����}\x000fq\x0014�\x0005[�g���~/ �J-Z�Ix>�r��\x0010hQ�@\x0018</p><p>��Z�ːl\x001c\x000f��/�t'���\x0018�i���~\x001b̯K�>�R\x0005t\x001a��1j��3ʵ�|P!Q�t\x0004!T�\x0011\x0000r?</p><p>�\x0019JId\x001b�\x0008��\x0018!\x0000!\x0008-�8�8\x0011�$0�͗��\x0017�\x00163D
$*"
p�5TV�z�\x0014u
\x0015<�J�n�\x001a�����0��P̵:�g\x0008�\x0008p\x0002ϓk��K\x0014����j�A?\x0010�C��(�1\x001a�\x0005�P��\x0003�\x0012O�j\x000c]2���C\x0019_#g\x0000��|!�Xjf\x001b�b���Ҷ���x\x0018\x0008x\x0013Uc��</p><p>&�3�\x0007�W��!�#,�lRMD��t:��=�?b���z\x0008�\x0003�y�^����A�\x0017�}���
�a\x000f�e�bеu�Y�2˰z|\x0010\x000bC*�в\x0010�7������{<��W\x0008ggX�ݢ(\x0012LNN\x0010��8~�p�G�Z��</p><p>\x0014�\x0001��@����k��9r�F��pi�I��\x001b�DuW\x000b\x0000"�N����)?X�
h���\x0008]G\x00007�k�QB���wT\x0010�6\x000eh�� \x0012UC�<�k���sF��.'����ꪫ��ꪫ��ꪫ��ꪫ\x000b���αi�\x001b�>��\x0006�������)�T\x0003Ou�6W���j\x00066F��{�dm�"�-�mw\x001fm�\x001a��</p><p>��wH�[�~�7(
\x000f��JE�:׏�s�4��R\x0003]�\x0008$\x0002ۄ6�D�N��S$y���`S�R$p�/1�r��70{��H����n��\x0013|��W�\x0011��o��`0���5���wׯ�߬E����4-��b�����2N�X�%I!O��'Vp�A��b/
ф�c��s-��)�R���IO\x0002�w�\x0008//O1�\x000c����\x0007�\x0000��t�ᰯrHlS�{�D�T�\x001f���F�\x001c��DC\x0010�Z�\\x0013�]��f�^�
د~�Z\x001a��a�Ct@�f��\x0013mS�7\x0011�\x0007���b�&�~��3��nT</p><p>9&�#_r�\x000c�R�ZZ��P	Dp1\x001e��X�t`�\x000c�\x001f����J\x00195?;E��\x0014��ac�\x0010�p�R�\x0016��f��j\x0013C34D��l/K\x0012�u.�\x001dn��|\a���a\x001bc��2�..N\x0004b��gЙm�=��g� /2Q���{��1n�o��\x0005\x000c��f��1�u�`<�k�xZm�Z�D�@t"k��x/�\x001cPA����\x0012�}* "M\x0013�̢\x0002��u�ڈ\x0012� ��v\x001c����~/�`�WJ\x0019f�\x0018</p><p>�\x0012"h��\x001a��l��gS�i���\x0007����9G�\x0001�q\x000f�v/�/�\x0006��N�W,��\x0006��D�O,\x000c�F����kY���He��</p><p>ͱZp\x000b�\x0007"��L�\x0003��</p><p>��\x00024\{e��ê\x001aY�����)\x0002\x0011e\x0003���m�I�e�U��Md#��)��@^7��e{��V�0��,�T[ovH�D�0:�@�2�Pd�@�(N$�K�ú�5Dœ�{rN��K�\x0011���Ї�T��đ~v1��U�\x0014\x001dy��g�OB8޻\x0012\x0001\x001a�����`�G�@��\x0019CUݴJ+M@&��Ї�X��+��m`;.�q&k�ʬ�l��z�Ѹ�o�{��|&\x0016�CQ\x0001�\x0002�h��W�dXqMOϯP�6V\x000fkdq�ӳ\x000b8~��x���7\x0018�/\x0004�=�]����Ͼ������?�\x000fFx�ÿ���@�"�\x0004P�g��=�B��q���E,\x0019'�ϑ��r�\x001d�FC����\x0002�m��t�R#\x0008���\x001eQ�i��\x0006N\x0006��3�\x000f�V��;~V$�Ϭ\x001bQ�q}RU�9�Xh�\x0006�#�q��k��"�{(������9�\x001a����ꪫ��ꪫ��ꪫ��ꪫ?���*�~��f�6Ouۄc���2N�=� S2M�{�a���Q-\x0014:\x0006\x000cfK�\x0010+'Ui4��A;��)t?����7�@�Rl�\x001a�Ծ�!dSX\x0013\x0019R�\x0014\x0004����7D\x0010Ć%���k��\x00105�Nw�\x0004c8Z�b{�:9���\x0016���xx�</p><p>��V2P�'</p><p>�,�\x0007Q%�\x000e�1Mid\x0012�\x0004�
�RA��O2���Q\x0017g\x0013�e�f �*�L�Xo\x000f�\x001cG`���\x0004��\x0001q^`\x001b�L\x0011��\x001a�,��p 
��2��\x0007��qHR�^�.T�ݴ\x0011���\x0017�
\x001b�lf�\x000e%V����yE	�۵��(�</p><p>3m\x0016�\x001dvq,y=�^O \x0004�\x0018��xi���~E����P5�m
�\x0003ɄI�\x0012u�7Zq�\x0012�}r_l�L�
\x0013\x001dR\x0019#΅��L\x000b��X�#>\x0010D��6��qM\x0011\x00000��vj��F��V�L!ĠZ�\x0016f\x0004\x0018l���>H6\x000c\x001b�Q��\x0012��y\���sQ>Mz\x001eL����\x001a��!�\x0017'�{w'Y0�\x000fOxZnD�A��Fy��C\x001c��\x000f)�]�8.$��*)\x0002�0�\x0011�C9��v/�\x0011��<7�r�\x00120H�3?pp��\x0005\x0016w�*\x0017E��,�}��D\x0014\x0015e^</p><p>�!4�Ҋ�)�c��5���r������B\x0014`z�QEK6��0�Il�D�VI�\x000e��c�QE�\x0017�\x0002k�V�lШ<�r�`����w	ﯕ�\x0017��\x00086��j�\x0015n�(�Z,�T�P!v^��7�C�w\x001c�rMPI$vom���^+�(�ϴQ�\x0012���j�KT\x001c�j��`�\x0000����"���ж�c�u6\x0019�E�B��mZ-�u�KR�\x000b�8�q�y��XT\x0015��f�G\x0007YKdT<w*}��A�\x0015��2ysi!6\x0001�R#��g�YXJ�\x0002�,�*Q�Q5�\x000f=��\x0002R�\x001f�b�fIV\x0010�}6\x001ba:�`�Y�=b�N0\x001a��&</p><p>.RA\x0017�\x0019�Ѕ��X<�\x0011�!��!��
�<�ٳ3�\x00043}\x000f��\x001c7o�1;�	 �w+ئ���w� �������W</p><p>Ĭ\x001ed�ܾy�h�\x0016�]\x001a\x001f��\x000e�}�\x0003�\x001f˱��Fই#Ժ
�)�>��^f��\x001e��\x0005\x0007\x0005B�D`�����`�\x001ea\x0006!R�i�>�9蹶��?�a�Wh�b\x0003�[�\x001c��!Tk�4�</p><p>S�C��a|�c�qq
�K�q]u�UW]u�UW]u�UW]u�UW]u��Tp\x0018�q�M2:4��_�D��o;��6V\x0000\x0000 \x0000IDAT�|���[\x0005�4ou�C��\x0010�۴M\x0015hO\x0010dJ��\x0011�7�\x0002=KG��</p><p>ex�m�\x0006���nsMHc��1Ҫ�.bԆ\x0003����6�Req\x0010\x00125���\x00009B��|\x001b[+��o$o�2|,~�\x001f���\x0011�(�Kn߾�vM;�\x000ca�EZd���B�\x0004���\x000e16Q"J#e�V�f�}k��f\x0019\x0006=\x001f5\x001bʩR�赎~`c���8</p><p>$�\x000e-͘��'�m�\x0007�����	\x001c\x0018\x0004.V�H\x0000�d�$�Xo�!]�9\x0006�P�a2\x0019��q)���d(�\x000bM3����RI�>no\x001fEI��2\x001b۳�\x0000��+i����x\x001ev�\x0003�,kaK#My����+�6�MDA�&?!\x0004�ݨ��О�M`.�$��\x000f�U��*v�C����\x0002�-���Z�%\x0016\x0001F���\x0012K@F^�UX/p0\x001f���\x0012\x0014y)��ʟ$N�X�}\x0004�w\x0005\x0008%�\x0018�˭XgQiUե\x001c\x000f���,�\x0017�x�{\x0010\x0005\x0014\x0015:?��3Y\x0017y����\x001eO�-\x001e\x0017kY7\x0004\x001f�ۣ���b���]Qz�u-���ıuL&\x0013l�{Y�ʺϒ|$�t�˥\x0002*U������\x0003\x001c�\x0015���"f�Te!��q]|��\x0017��Y>,d\x001e���X\x0011\x000c�\x001e-�yج���J�$ǂMr��q�h�F�\x001a�\x0007�\x0019\x0001�#�</p><p>C�v�\x0010[Ū��j�k\x0015<\x0004\x001b�e���U\x001b�_��	;\x0006���5��3�����\x0018�\x001c\x0003�^�uT}�'\x0003I�!��R�?�/īQ�d�{�m	\x0018$�$�)�.��.��n��!pr8�ɶ	~�>�kb6��8�|8��\x000fa��-i�\x00004�\x0004�<\x0008�F�!��\x001d<ו�M�\x0002�(�����/�\x0010\x0015�o\x000b�tlS�ɺ�k�vL\x0001:��JVW��b
GP�| �+\x000c<�\x0012���Г��@���~e\x0012\x000e�8�
��\x0019lː1��R*�\x00068=;���\x0002gWW(�\x000c��\x001c\x001b*�N�D\x00195\x001eM`�@��ai�ɋ�a�&�\x0006S��#�\x0017�j��\x001c��\x0012��\x0014�0@����\x001d<G���O�Z�\x001f\x0011�{p�\x001e��5�4F\x001aE�<\x001fF\x0006�%�4��۟b4�#zz���\��i\x0005,\x0014�\x000c\x001f\x0005A\x0011\x0001�z!yC�\x0011�)3`��x\x0002ń58�¬g�zπ֨L��R\x000f\x000b\x00084+KY\x0003|\x001ds�̣\x001d���J��9u\x0004C]u�UW]u�UW]u�UW]u�UW]u��X�̠��\x0010m��F)}�Xo\x0003�~�</p><p>�w�˪></p><p>\x0003��'�-��\x0003"̠�[�d�d�3�#+�sMh�\x001bX�SD�</p><p>\x0019���
6��x8nS��
\x0003��T+�fc�\x0014�\x0008��Y\x0004�v�Έy#\x0016J��\x0010�����ȴ�,n�x�k�r>\x0005�]��W݈��Ջ\x0013�^��\x0015��\x000e���>����$�q�z�(\x001ftiT�\x001c\x0014\x001e�v�Hc޶5<��Pk��o?�ps��6Υ�N0�X�1\x001ex��W�\x0004\x0010PA1��\x0004�\x000c\x0007�</p><p>�.\x0016l�E�>�ܾn\x0008p"d(J��v!�\x0006/��z\x001en�\x0016�\x0010	\x0003GTLl�2�\x00072?��틒J�\x000f$i�4�E�a��
��\x0007����\x0008��A~fӝ�6wwO\x0002\x0004F�P�oX
\x001c�k��M�����ʂlГy��X��\x0002}�Zٔ�L\x0015M\x0014K̒y��9&�!\x001e\x0017\x001bQg�\x001a��mڐ��N%�\x0002\x0012�4�uQo\x0018��v��\x0003i�\x001fa�c\x001a��Rơ7\x00080�M����Ze���}\x0010\x0015I"c��j��d\x000c��2ET\x0008̯r-Q|Pu���\x0003\x001f��D��ܶ���T���r-YB���\x0014H�x�q,c��S<�/E�B��}\x0014i� ���\x000580G��+�q���z�\x0015�\x0016�FNk��y�<O�4�}8?��\x0000�4��l!�\x0010�Ŀ
'}5�Y!\x0000�k��_\x001cOB��ld����x�/�|�T3^�=���Fi��\x0016�r1�vm���z>\x0006��@@\x0002'��-yC�\x0000<Q�\x0010\x0014W��\x000f�vΙު�x�eY�z&Դ\x0004ޤ*'�R@��]�碠ῄ	�\x0014\x0004�T\x0002�ڎІ\x0019XQ�c\x001b�e�4Q�\x0019��"�G=�+~����PO��t\x0001CYY�����0B(�\x0001Bb�\x001bژQ	��A\x0005㨆�</p><p>�\x0010%2����`��J�~	/I�{�\x001e��ֈ����\x0006�@,�\x001c����\x001b�H���x����\x0019N�?���w\x0018����lvq���N�\x000b��\x0007���?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/profiles/](https://election-tpe.travail.gouv.fr/profiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link type="text/css" href="https://jbotest20190527.voxintime.com/includes/libs/bootstrap-3.3.7/css/bootstrap.min.css">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/web.config](https://election-tpe.travail.gouv.fr/web.config)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link type="text/css" href="https://jbotest20190527.voxintime.com/includes/libs/bootstrap-3.3.7/css/bootstrap.min.css">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/](https://election-tpe.travail.gouv.fr/core/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="icon" type="image/png" href="https://www.voxaly.com/wp-content/themes/voxaly/dist/img/favicon-32x32.png">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/web.config](https://election-tpe.travail.gouv.fr/web.config)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="icon" type="image/png" href="https://www.voxaly.com/wp-content/themes/voxaly/dist/img/favicon-32x32.png">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/](https://election-tpe.travail.gouv.fr/core/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link type="text/css" href="https://jbotest20190527.voxintime.com/includes/libs/bootstrap-3.3.7/css/bootstrap.min.css">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/profiles/](https://election-tpe.travail.gouv.fr/profiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="icon" type="image/png" href="https://www.voxaly.com/wp-content/themes/voxaly/dist/img/favicon-32x32.png">`
  
  
  
  
Instances: 10
  
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
<p>The identified library jquery, version 3.1.1.min is vulnerable.</p>
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/includes/libs/jquery/jquery-3.1.1.min.js](https://election-tpe.travail.gouv.fr/recours/includes/libs/jquery/jquery-3.1.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-3.1.1.min.js`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/includes/libs/bootstrap-3.3.7/js/bootstrap.min.js](https://election-tpe.travail.gouv.fr/recours/includes/libs/bootstrap-3.3.7/js/bootstrap.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `* Bootstrap v3.3.7`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/vendors.bundle.js](https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/vendors.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `{jquery:"3.1.1"`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/includes/libs/jquery/jquery-3.1.1.min.js](https://election-tpe.travail.gouv.fr/vote/includes/libs/jquery/jquery-3.1.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-3.1.1.min.js`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/includes/libs/bootstrap-3.3.7/js/bootstrap.min.js](https://election-tpe.travail.gouv.fr/vote/includes/libs/bootstrap-3.3.7/js/bootstrap.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `* Bootstrap v3.3.7`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="searchbar-form search-form" data-drupal-selector="searchbar-form" action="/" method="post" id="searchbar-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter](https://election-tpe.travail.gouv.fr/pourquoi-voter)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="voxaly-newsletter-newsletter-mini-form rss-form js-nl-mini-form" data-drupal-selector="voxaly-newsletter-newsletter-mini-form">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="voxaly-newsletter-newsletter-mini-form rss-form js-nl-mini-form" data-drupal-selector="voxaly-newsletter-newsletter-mini-form">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="voxaly-newsletter-newsletter-mini-form rss-form js-nl-mini-form" data-drupal-selector="voxaly-newsletter-newsletter-mini-form">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/filter/tips](https://election-tpe.travail.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="searchbar-form search-form" data-drupal-selector="searchbar-form" action="/filter/tips" method="post" id="searchbar-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter](https://election-tpe.travail.gouv.fr/pourquoi-voter)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="searchbar-form search-form" data-drupal-selector="searchbar-form" action="/pourquoi-voter" method="post" id="searchbar-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="voxaly-newsletter-newsletter-mini-form rss-form js-nl-mini-form" data-drupal-selector="voxaly-newsletter-newsletter-mini-form" action="/" method="post" id="voxaly-newsletter-newsletter-mini-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter](https://election-tpe.travail.gouv.fr/pourquoi-voter)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="voxaly-newsletter-newsletter-mini-form rss-form js-nl-mini-form" data-drupal-selector="voxaly-newsletter-newsletter-mini-form" action="/pourquoi-voter" method="post" id="voxaly-newsletter-newsletter-mini-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="searchbar-form search-form" data-drupal-selector="searchbar-form" action="/" method="post" id="searchbar-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="voxaly-newsletter-newsletter-mini-form rss-form js-nl-mini-form" data-drupal-selector="voxaly-newsletter-newsletter-mini-form" action="/" method="post" id="voxaly-newsletter-newsletter-mini-form" accept-charset="UTF-8">`
  
  
  
  
Instances: 10
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "edit-search" "form_build_id" "form_id" ].</p>
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/contact-assistance](https://election-tpe.travail.gouv.fr/contact-assistance)
  
  
  * Method: `POST`
  
  
  * Evidence: `HTTP/1.1 500 500 Service unavailable (with message)`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-electorale.htm](https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-electorale.htm)
  
  
  * Method: `POST`
  
  
  * Evidence: `HTTP/1.1 500 Erreur Interne de Servlet`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm](https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm)
  
  
  * Method: `POST`
  
  
  * Evidence: `HTTP/1.1 500 Erreur Interne de Servlet`
  
  
  
  
Instances: 3
  
### Solution
<p>Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Big Redirect Detected (Potential Sensitive Information Leak)
##### Low (Medium)
  
  
  
  
#### Description
<p>The server has responded with a redirect that seems to provide a large response. This may indicate that although the server sent a redirect it also responded with body content (which may include sensitive details, PII, etc.).</p>
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/user/register/](https://election-tpe.travail.gouv.fr/index.php/user/register/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/filter/tips](https://election-tpe.travail.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/user/password/](https://election-tpe.travail.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/user/login/](https://election-tpe.travail.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/user/register/](https://election-tpe.travail.gouv.fr/user/register/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/search/](https://election-tpe.travail.gouv.fr/index.php/search/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/user/password/](https://election-tpe.travail.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/search](https://election-tpe.travail.gouv.fr/search)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/user/login/](https://election-tpe.travail.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/node/7](https://election-tpe.travail.gouv.fr/node/7)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/search/](https://election-tpe.travail.gouv.fr/search/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 50 [https://election-tpe.travail.gouv.fr/user/register].</p><p>Predicted response size: 350.</p><p>Response Body Length: 446.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/docs/Aide.htm](https://election-tpe.travail.gouv.fr/vote/pages/docs/Aide.htm)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/user/password](https://election-tpe.travail.gouv.fr/user/password)
  
  
  * Method: `POST`
  
  
  * Parameter: `SSESS264de5937d06a1662b61cacae7df952d`
  
  
  * Evidence: `Set-Cookie: SSESS264de5937d06a1662b61cacae7df952d`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `cms_visit`
  
  
  * Evidence: `Set-Cookie: cms_visit`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sitemap.xml](https://election-tpe.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `cms_visit`
  
  
  * Evidence: `Set-Cookie: cms_visit`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/identification.htm](https://election-tpe.travail.gouv.fr/vote/pages/identification.htm)
  
  
  * Method: `POST`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/identification.htm](https://election-tpe.travail.gouv.fr/vote/pages/identification.htm)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7](https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `cms_visit`
  
  
  * Evidence: `Set-Cookie: cms_visit`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `cms_visit`
  
  
  * Evidence: `Set-Cookie: cms_visit`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `cms_visit`
  
  
  * Evidence: `Set-Cookie: cms_visit`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sitemap.xml](https://election-tpe.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `cms_visit`
  
  
  * Evidence: `Set-Cookie: cms_visit`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js`
  
  
  * Evidence: `<script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter](https://election-tpe.travail.gouv.fr/pourquoi-voter)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js`
  
  
  * Evidence: `<script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021](https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://code.jquery.com/jquery-3.3.1.min.js`
  
  
  * Evidence: `<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter](https://election-tpe.travail.gouv.fr/pourquoi-voter)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://code.jquery.com/jquery-3.3.1.min.js`
  
  
  * Evidence: `<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://code.jquery.com/jquery-3.3.1.min.js`
  
  
  * Evidence: `<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js`
  
  
  * Evidence: `<script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://code.jquery.com/jquery-3.3.1.min.js`
  
  
  * Evidence: `<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/filter/tips](https://election-tpe.travail.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js`
  
  
  * Evidence: `<script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021](https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js`
  
  
  * Evidence: `<script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/filter/tips](https://election-tpe.travail.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://code.jquery.com/jquery-3.3.1.min.js`
  
  
  * Evidence: `<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sites/default/files/js/js_9nl-AZSajSg9ULB6FToqM1kvFS1hJ6TTyh7JKz6WZpw.js](https://election-tpe.travail.gouv.fr/sites/default/files/js/js_9nl-AZSajSg9ULB6FToqM1kvFS1hJ6TTyh7JKz6WZpw.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js](https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/verifiabilite.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/includes/libs/jquery/jquery-3.1.1.min.js](https://election-tpe.travail.gouv.fr/recours/includes/libs/jquery/jquery-3.1.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sites/default/files/js/js_mhVaXUldQ9_6mWgJivySTlivuIxTL4HC28l_f8H-5oY.js](https://election-tpe.travail.gouv.fr/sites/default/files/js/js_mhVaXUldQ9_6mWgJivySTlivuIxTL4HC28l_f8H-5oY.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/includes/libs/jquery/jquery-3.1.1.min.js](https://election-tpe.travail.gouv.fr/vote/includes/libs/jquery/jquery-3.1.1.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/botdetectcaptcha?get=script-include](https://election-tpe.travail.gouv.fr/vote/botdetectcaptcha?get=script-include)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sites/default/files/js/js_-l_6w_lMUl4pwa_H6iWyDAxQFAafl7q8X0HLlW27s2c.js](https://election-tpe.travail.gouv.fr/sites/default/files/js/js_-l_6w_lMUl4pwa_H6iWyDAxQFAafl7q8X0HLlW27s2c.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/botdetectcaptcha?get=script-include](https://election-tpe.travail.gouv.fr/recours/botdetectcaptcha?get=script-include)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/includes/libs/jquery-ui-1.12.1/jquery-ui.min.js](https://election-tpe.travail.gouv.fr/recours/includes/libs/jquery-ui-1.12.1/jquery-ui.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sites/default/files/js/js_C8gMXXeUVhFyE2kd8IR7krwpvYB5bopNaUb29La2PIE.js](https://election-tpe.travail.gouv.fr/sites/default/files/js/js_C8gMXXeUVhFyE2kd8IR7krwpvYB5bopNaUb29La2PIE.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/vendors.bundle.js](https://election-tpe.travail.gouv.fr/vote/pages/includes/dist/election/vendors.bundle.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sites/default/files/js/js_dJzwu0uTpttkDDvh11K_LAZZlxsyI2KxF5BRaV01ITw.js](https://election-tpe.travail.gouv.fr/sites/default/files/js/js_dJzwu0uTpttkDDvh11K_LAZZlxsyI2KxF5BRaV01ITw.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/profiles/](https://election-tpe.travail.gouv.fr/profiles/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/web.config](https://election-tpe.travail.gouv.fr/web.config)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/admin/](https://election-tpe.travail.gouv.fr/index.php/admin/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/admin/](https://election-tpe.travail.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/node/add/](https://election-tpe.travail.gouv.fr/index.php/node/add/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/](https://election-tpe.travail.gouv.fr/core/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/filter/tips](https://election-tpe.travail.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/user/logout/](https://election-tpe.travail.gouv.fr/user/logout/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/node/add/](https://election-tpe.travail.gouv.fr/node/add/)
  
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/filter/tips](https://election-tpe.travail.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=3600, public`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/comment-voter](https://election-tpe.travail.gouv.fr/comment-voter)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=3600, public`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/robots.txt](https://election-tpe.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=1209600`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=3600, public`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/qui-sont-les-syndicats-candidats](https://election-tpe.travail.gouv.fr/qui-sont-les-syndicats-candidats)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=3600, public`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=3600, public`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter](https://election-tpe.travail.gouv.fr/pourquoi-voter)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=3600, public`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse/publication-des-candidatures](https://election-tpe.travail.gouv.fr/espace-presse/publication-des-candidatures)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=3600, public`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/README.txt](https://election-tpe.travail.gouv.fr/README.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=1209600`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021](https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=3600, public`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sitemap.xml](https://election-tpe.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, private`
  
  
  
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/profiles/](https://election-tpe.travail.gouv.fr/profiles/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/web.config](https://election-tpe.travail.gouv.fr/web.config)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/admin/](https://election-tpe.travail.gouv.fr/index.php/admin/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/user/logout/](https://election-tpe.travail.gouv.fr/user/logout/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/](https://election-tpe.travail.gouv.fr/core/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/node/add/](https://election-tpe.travail.gouv.fr/node/add/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/user/logout/](https://election-tpe.travail.gouv.fr/index.php/user/logout/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm](https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/contact-assistance](https://election-tpe.travail.gouv.fr/contact-assistance)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/index.php/node/add/](https://election-tpe.travail.gouv.fr/index.php/node/add/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/admin/](https://election-tpe.travail.gouv.fr/admin/)
  
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/partager-diffuser/une-video-pour-tout-comprendre-en-moins-d-une-minute](https://election-tpe.travail.gouv.fr/partager-diffuser/une-video-pour-tout-comprendre-en-moins-d-une-minute)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_1oCOqxYGGCABKsfvrjM53N6_j4pCU1EEX-Yfz6B41Pg`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/qui-sont-les-syndicats-candidats](https://election-tpe.travail.gouv.fr/qui-sont-les-syndicats-candidats)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_1oCOqxYGGCABKsfvrjM53N6_j4pCU1EEX-Yfz6B41Pg`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse/publication-des-candidatures](https://election-tpe.travail.gouv.fr/espace-presse/publication-des-candidatures)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_1oCOqxYGGCABKsfvrjM53N6_j4pCU1EEX-Yfz6B41Pg`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021](https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_qzTmHe1qtiK2G4pgigUKrjwXUUnaGVe3IeprI9FrZ40`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/comment-voter](https://election-tpe.travail.gouv.fr/comment-voter)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_1oCOqxYGGCABKsfvrjM53N6_j4pCU1EEX-Yfz6B41Pg`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter](https://election-tpe.travail.gouv.fr/pourquoi-voter)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_1oCOqxYGGCABKsfvrjM53N6_j4pCU1EEX-Yfz6B41Pg`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_1oCOqxYGGCABKsfvrjM53N6_j4pCU1EEX-Yfz6B41Pg`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse/communique-presse-lancement-site-internet-information-et%20-vote](https://election-tpe.travail.gouv.fr/espace-presse/communique-presse-lancement-site-internet-information-et%20-vote)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_1oCOqxYGGCABKsfvrjM53N6_j4pCU1EEX-Yfz6B41Pg`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse](https://election-tpe.travail.gouv.fr/espace-presse)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_1oCOqxYGGCABKsfvrjM53N6_j4pCU1EEX-Yfz6B41Pg`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/filter/tips](https://election-tpe.travail.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_movCIqAuqOTKKUyodm3A652X6isWOJnKOiQ6C9YXLzU`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_1oCOqxYGGCABKsfvrjM53N6_j4pCU1EEX-Yfz6B41Pg`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�ȭz��y����ߊW���,��,�Z\x0002:�X\x0018`�\x0004�\x001f����sz�>)	MD\x0011�>��S�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Sensitive Information in URL
##### Informational (Medium)
  
  
  
  
#### Description
<p>The request appeared to contain sensitive information leaked in the URL. This can violate PCI and most organizational compliance policies. You can configure the list of strings for this check to add or remove values specific to your environment.</p>
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse/publication-des-candidatures?email=foo-bar%40example.com&form_build_id=form-Rmzk42znQsUwicLulswbdW9iWL4TxSWB4YMBKPf-Q38&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/espace-presse/publication-des-candidatures?email=foo-bar%40example.com&form_build_id=form-Rmzk42znQsUwicLulswbdW9iWL4TxSWB4YMBKPf-Q38&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/qui-sont-les-syndicats-candidats?email=foo-bar%40example.com&form_build_id=form-D31VhapNhQNh2Y5xY-iJboMhzmAkJ_6aQC30zaTnXrQ&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/qui-sont-les-syndicats-candidats?email=foo-bar%40example.com&form_build_id=form-D31VhapNhQNh2Y5xY-iJboMhzmAkJ_6aQC30zaTnXrQ&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/comment-voter/calendrier?email=foo-bar%40example.com&form_build_id=form-QdQED8qfrbjeLXvmhMq3wo_gqkRbu_9jBx6GdcHRwjY&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/comment-voter/calendrier?email=foo-bar%40example.com&form_build_id=form-QdQED8qfrbjeLXvmhMq3wo_gqkRbu_9jBx6GdcHRwjY&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/qui-vote?email=foo-bar%40example.com&form_build_id=form-GgUg4KvJBKA9mNZo0hyIuPs6eyzennxL--iEt7e-eO4&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/qui-vote?email=foo-bar%40example.com&form_build_id=form-GgUg4KvJBKA9mNZo0hyIuPs6eyzennxL--iEt7e-eO4&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter/etre-represente-conseille-defendu?email=foo-bar%40example.com&form_build_id=form-kSo1-AtoqpxyvwDuvvpqYECw5GYITI8LJtHeTTnRdnk&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/pourquoi-voter/etre-represente-conseille-defendu?email=foo-bar%40example.com&form_build_id=form-kSo1-AtoqpxyvwDuvvpqYECw5GYITI8LJtHeTTnRdnk&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/comment-voter/vote-simple-confidentiel?email=foo-bar%40example.com&form_build_id=form-niKtbctbEsXvaLJha0hsJvSzG9qdxLF-7uPHIsTGHls&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/comment-voter/vote-simple-confidentiel?email=foo-bar%40example.com&form_build_id=form-niKtbctbEsXvaLJha0hsJvSzG9qdxLF-7uPHIsTGHls&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/?email=foo-bar%40example.com&form_build_id=form-PvEVDxn-qMrBFdPkH8IFdjeOei5enQnuwaIjhm46h48&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/?email=foo-bar%40example.com&form_build_id=form-PvEVDxn-qMrBFdPkH8IFdjeOei5enQnuwaIjhm46h48&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse?email=foo-bar%40example.com&form_build_id=form-XLB8LEoSSbUU0yzSPy4ByUhdKu6eFpR3iMoRq5JRCiA&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/espace-presse?email=foo-bar%40example.com&form_build_id=form-XLB8LEoSSbUU0yzSPy4ByUhdKu6eFpR3iMoRq5JRCiA&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/comment-voter?email=foo-bar%40example.com&form_build_id=form-BTM_B8rLUn43MLZULiCNZqlyFqytn29nSDZagm6GcuQ&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/comment-voter?email=foo-bar%40example.com&form_build_id=form-BTM_B8rLUn43MLZULiCNZqlyFqytn29nSDZagm6GcuQ&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter/representation-syndicale?email=foo-bar%40example.com&form_build_id=form-oG0wyVH8TDmLbvrCLwa3uZO6dIvQfDoOAM4V-eh45wg&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/pourquoi-voter/representation-syndicale?email=foo-bar%40example.com&form_build_id=form-oG0wyVH8TDmLbvrCLwa3uZO6dIvQfDoOAM4V-eh45wg&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter?email=foo-bar%40example.com&form_build_id=form-ITKrXtSxv8Y1MGjcI9cmzGEeBjU1p5So5tpB6l4hMzI&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/pourquoi-voter?email=foo-bar%40example.com&form_build_id=form-ITKrXtSxv8Y1MGjcI9cmzGEeBjU1p5So5tpB6l4hMzI&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/partager-diffuser/une-video-pour-tout-comprendre-en-moins-d-une-minute?email=foo-bar%40example.com&form_build_id=form-YV7bFAYAQtO4wXK9Z09_4hGkz7DJUlxGhHfl8AAm1v8&form_id=voxaly_newsletter_newsletter_mini_form](https://election-tpe.travail.gouv.fr/partager-diffuser/une-video-pour-tout-comprendre-en-moins-d-une-minute?email=foo-bar%40example.com&form_build_id=form-YV7bFAYAQtO4wXK9Z09_4hGkz7DJUlxGhHfl8AAm1v8&form_id=voxaly_newsletter_newsletter_mini_form)
  
  
  * Method: `GET`
  
  
  * Parameter: `email`
  
  
  * Evidence: `foo-bar@example.com`
  
  
  
  
Instances: 12
  
### Solution
<p>Do not pass sensitive information in URIs.</p>
  
### Other information
<p>The URL contains email address(es).</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/comment-voter](https://election-tpe.travail.gouv.fr/comment-voter)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse](https://election-tpe.travail.gouv.fr/espace-presse)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter](https://election-tpe.travail.gouv.fr/pourquoi-voter)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse/communique-presse-lancement-site-internet-information-et%20-vote](https://election-tpe.travail.gouv.fr/espace-presse/communique-presse-lancement-site-internet-information-et%20-vote)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse/publication-des-candidatures](https://election-tpe.travail.gouv.fr/espace-presse/publication-des-candidatures)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021](https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/partager-diffuser/une-video-pour-tout-comprendre-en-moins-d-une-minute](https://election-tpe.travail.gouv.fr/partager-diffuser/une-video-pour-tout-comprendre-en-moins-d-une-minute)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/qui-sont-les-syndicats-candidats](https://election-tpe.travail.gouv.fr/qui-sont-les-syndicats-candidats)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/filter/tips](https://election-tpe.travail.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefi", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/pourquoi-voter" target="_self" data-drupal-link-system-path="node/10">Pourquoi voter ?</a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/comment-voter](https://election-tpe.travail.gouv.fr/comment-voter)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/pourquoi-voter" target="_self" data-drupal-link-system-path="node/10">Pourquoi voter ?</a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/pourquoi-voter" target="_self" data-drupal-link-system-path="node/10">Pourquoi voter ?</a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/qui-sont-les-syndicats-candidats](https://election-tpe.travail.gouv.fr/qui-sont-les-syndicats-candidats)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/pourquoi-voter" target="_self" data-drupal-link-system-path="node/10">Pourquoi voter ?</a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/partager-diffuser/une-video-pour-tout-comprendre-en-moins-d-une-minute](https://election-tpe.travail.gouv.fr/partager-diffuser/une-video-pour-tout-comprendre-en-moins-d-une-minute)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/pourquoi-voter" target="_self" data-drupal-link-system-path="node/10">Pourquoi voter ?</a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021](https://election-tpe.travail.gouv.fr/aide-de-l-election-tpe-2021)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/pourquoi-voter" target="_self" data-drupal-link-system-path="node/10">Pourquoi voter ?</a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter](https://election-tpe.travail.gouv.fr/pourquoi-voter)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/pourquoi-voter" target="_self" data-drupal-link-system-path="node/10" class="is-active">Pourquoi voter ?</a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/filter/tips](https://election-tpe.travail.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/pourquoi-voter" target="_self" data-drupal-link-system-path="node/10">Pourquoi voter ?</a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse/communique-presse-lancement-site-internet-information-et%20-vote](https://election-tpe.travail.gouv.fr/espace-presse/communique-presse-lancement-site-internet-information-et%20-vote)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/pourquoi-voter" target="_self" data-drupal-link-system-path="node/10">Pourquoi voter ?</a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse](https://election-tpe.travail.gouv.fr/espace-presse)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/pourquoi-voter" target="_self" data-drupal-link-system-path="node/10">Pourquoi voter ?</a>`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/espace-presse/publication-des-candidatures](https://election-tpe.travail.gouv.fr/espace-presse/publication-des-candidatures)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/pourquoi-voter" target="_self" data-drupal-link-system-path="node/10">Pourquoi voter ?</a>`
  
  
  
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/*.css$](https://election-tpe.travail.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/*.js](https://election-tpe.travail.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/*.css](https://election-tpe.travail.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/*.jpeg](https://election-tpe.travail.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/*.gif](https://election-tpe.travail.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/*.jpg](https://election-tpe.travail.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/core/*.js$](https://election-tpe.travail.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sitemap.xml](https://election-tpe.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/robots.txt](https://election-tpe.travail.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=1209600`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=3600`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=3600`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/sitemap.xml](https://election-tpe.travail.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `15894000`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter](https://election-tpe.travail.gouv.fr/pourquoi-voter)
  
  
  * Method: `GET`
  
  
  * Evidence: `86871805`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1610552883`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1610552883`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/](https://election-tpe.travail.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `15894000`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr](https://election-tpe.travail.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `15894000`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter](https://election-tpe.travail.gouv.fr/pourquoi-voter)
  
  
  * Method: `GET`
  
  
  * Evidence: `1610552883`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/pourquoi-voter/etre-represente-conseille-defendu](https://election-tpe.travail.gouv.fr/pourquoi-voter/etre-represente-conseille-defendu)
  
  
  * Method: `GET`
  
  
  * Evidence: `53766311`
  
  
  
  
Instances: 8
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>15894000, which evaluates to: 1970-07-03 23:00:00</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7](https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7](https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7)
  
  
  * Method: `GET`
  
  
  * Parameter: `connexion`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7](https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7)
  
  
  * Method: `GET`
  
  
  * Parameter: `connexion`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7](https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7)
  
  
  * Method: `GET`
  
  
  * Parameter: `connexion`
  
  
  
  
* URL: [https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7](https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7)
  
  
  * Method: `GET`
  
  
  * Parameter: `connexion`
  
  
  
  
Instances: 5
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://election-tpe.travail.gouv.fr/recours/communication/consulter-liste-candidats.htm?connexion=true&page=https%3A//election-tpe.travail.gouv.fr/node/7</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [a] tag [href] attribute </p><p></p><p>The user input found was:</p><p>page=https://election-tpe.travail.gouv.fr/node/7</p><p></p><p>The user-controlled value was:</p><p>https://election-tpe.travail.gouv.fr</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
