/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.10.0
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(q,v){function y(a){function c(a,d,c){c=c?c+="|":c;return c+(a+"="+encodeURIComponent(d))}for(var b="",e=0,f=a.length;e<f;e++){var g=a[e],h=g[0],g=g[1];g!=i&&g!==t&&(b=c(h,g,b))}return function(a){var d=(new Date).getTime(),a=a?a+="|":a;return a+("TS="+d)}(b)}if(!q)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.10.0";var m=window,l=m.Visitor;l.version=a.version;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);a._c="Visitor";a._il=m.s_c_il;a._in=m.s_c_in;a._il[a._in]=
a;m.s_c_in++;a.ja={Fa:[]};var u=m.document,i=l.Cb;i||(i=null);var E=l.Db;E||(E=void 0);var j=l.Oa;j||(j=!0);var k=l.Ma;k||(k=!1);a.fa=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.s=function(a,c){var b="0123456789",e="",f="",g,h,i=8,k=10,l=10;c===n&&(w.isClientSideMarketingCloudVisitorID=j);if(1==a){b+="ABCDEF";for(g=0;16>g;g++)h=Math.floor(Math.random()*i),e+=b.substring(h,h+1),h=Math.floor(Math.random()*i),f+=b.substring(h,h+1),i=16;return e+
"-"+f}for(g=0;19>g;g++)h=Math.floor(Math.random()*k),e+=b.substring(h,h+1),0==g&&9==h?k=3:(1==g||2==g)&&10!=k&&2>h?k=10:2<g&&(k=10),h=Math.floor(Math.random()*l),f+=b.substring(h,h+1),0==g&&9==h?l=3:(1==g||2==g)&&10!=l&&2>h?l=10:2<g&&(l=10);return e+f};a.Ra=function(){var a;!a&&m.location&&(a=m.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+u.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(u.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.h=i;a.J=function(a,c){try{"function"==typeof a?a.apply(m,c):a[1].apply(a[0],c)}catch(b){}};a.Xa=function(d,c){c&&(a.h==i&&(a.h={}),a.h[d]==E&&(a.h[d]=[]),a.h[d].push(c))};a.r=function(d,c){if(a.h!=i){var b=a.h[d];if(b)for(;0<b.length;)a.J(b.shift(),
c)}};a.v=function(a,c,b,e){b=encodeURIComponent(c)+"="+encodeURIComponent(b);c=x.vb(a);a=x.mb(a);if(-1===a.indexOf("?"))return a+"?"+b+c;var f=a.split("?"),a=f[0]+"?",e=x.$a(f[1],b,e);return a+e+c};a.Qa=function(a,c){var b=RegExp("[\\?&#]"+c+"=([^&#]*)").exec(a);if(b&&b.length)return decodeURIComponent(b[1])};a.Wa=function(){var d=i,c=m.location.href;try{var b=a.Qa(c,r.Z);if(b)for(var d={},e=b.split("|"),c=0,f=e.length;c<f;c++){var g=e[c].split("=");d[g[0]]=decodeURIComponent(g[1])}return d}catch(h){}};
a.ba=function(){var d=a.Wa();if(d&&d.TS&&!(((new Date).getTime()-d.TS)/6E4>r.Ka||d[I]!==q)){var c=d[n],b=a.setMarketingCloudVisitorID;c&&c.match(r.u)&&b(c);a.j(s,-1);d=d[p];c=a.setAnalyticsVisitorID;d&&d.match(r.u)&&c(d)}};a.Va=function(d){function c(d){x.pb(d)&&a.setCustomerIDs(d)}function b(d){d=d||{};a._supplementalDataIDCurrent=d.supplementalDataIDCurrent||"";a._supplementalDataIDCurrentConsumed=d.supplementalDataIDCurrentConsumed||{};a._supplementalDataIDLast=d.supplementalDataIDLast||"";a._supplementalDataIDLastConsumed=
d.supplementalDataIDLastConsumed||{}}d&&d[a.marketingCloudOrgID]&&(d=d[a.marketingCloudOrgID],c(d.customerIDs),b(d.sdid))};a.l=i;a.Ta=function(d,c,b,e){c=a.v(c,"d_fieldgroup",d,1);e.url=a.v(e.url,"d_fieldgroup",d,1);e.m=a.v(e.m,"d_fieldgroup",d,1);w.d[d]=j;e===Object(e)&&e.m&&"XMLHttpRequest"===a.la.C.D?a.la.ib(e,b,d):a.useCORSOnly||a.ia(d,c,b)};a.ia=function(d,c,b){var e=0,f=0,g;if(c&&u){for(g=0;!e&&2>g;){try{e=(e=u.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(h){e=0}g++}if(!e)try{u.body&&
(e=u.body)}catch(k){e=0}if(e)for(g=0;!f&&2>g;){try{f=u.createElement(0<g?"SCRIPT":"script")}catch(l){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),e=a.loadTimeout,o.d[d]={requestStart:o.o(),url:c,ta:e,ra:o.ya(),sa:0},b&&(a.l==i&&(a.l={}),a.l[d]=setTimeout(function(){b(j)},e)),a.ja.Fa.push(c))};a.Pa=function(d){a.l!=i&&a.l[d]&&(clearTimeout(a.l[d]),a.l[d]=0)};a.ga=k;a.ha=k;a.isAllowed=function(){if(!a.ga&&(a.ga=j,a.cookieRead(a.cookieName)||
a.cookieWrite(a.cookieName,"T",1)))a.ha=j;return a.ha};a.b=i;a.c=i;var F=l.Ub;F||(F="MC");var n=l.ac;n||(n="MCMID");var I=l.Yb;I||(I="MCORGID");var H=l.Vb;H||(H="MCCIDH");var L=l.Zb;L||(L="MCSYNCS");var J=l.$b;J||(J="MCSYNCSOP");var K=l.Wb;K||(K="MCIDTS");var B=l.Xb;B||(B="MCOPTOUT");var D=l.Sb;D||(D="A");var p=l.Pb;p||(p="MCAID");var C=l.Tb;C||(C="AAM");var A=l.Rb;A||(A="MCAAMLH");var s=l.Qb;s||(s="MCAAMB");var t=l.bc;t||(t="NONE");a.L=0;a.ea=function(){if(!a.L){var d=a.version;a.audienceManagerServer&&
(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);a.L=a.fa(d)}return a.L};a.ka=k;a.f=function(){if(!a.ka){a.ka=j;var d=a.ea(),c=k,b=a.cookieRead(a.cookieName),e,f,g,h,l=new Date;a.b==i&&(a.b={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=j),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)if(e=b[d].split("-"),f=e[0],g=b[d+1],1<e.length?(h=parseInt(e[1],10),e=0<e[1].indexOf("s")):(h=0,e=k),c&&(f==H&&
(g=""),0<h&&(h=l.getTime()/1E3-60)),f&&g&&(a.e(f,g,1),0<h&&(a.b["expire"+f]=h+(e?"s":""),l.getTime()>=1E3*h||e&&!a.cookieRead(a.sessionCookieName))))a.c||(a.c={}),a.c[f]=j}c=a.loadSSL?!!a.trackingServerSecure:!!a.trackingServer;if(!a.a(p)&&c&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(r.u)&&a.e(p,g))}};a.Za=function(){var d=a.ea(),c,b;for(c in a.b)!Object.prototype[c]&&a.b[c]&&"expire"!=c.substring(0,6)&&
(b=a.b[c],d+=(d?"|":"")+c+(a.b["expire"+c]?"-"+a.b["expire"+c]:"")+"|"+b);a.cookieWrite(a.cookieName,d,1)};a.a=function(d,c){return a.b!=i&&(c||!a.c||!a.c[d])?a.b[d]:i};a.e=function(d,c,b){a.b==i&&(a.b={});a.b[d]=c;b||a.Za()};a.Sa=function(d,c){var b=a.a(d,c);return b?b.split("*"):i};a.Ya=function(d,c,b){a.e(d,c?c.join("*"):"",b)};a.Jb=function(d,c){var b=a.Sa(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return i};a.Lb=function(d,c,b){var e=i,f;if(c)for(f in e=[],c)Object.prototype[f]||
(e.push(f),e.push(c[f]));a.Ya(d,e,b)};a.j=function(d,c,b){var e=new Date;e.setTime(e.getTime()+1E3*c);a.b==i&&(a.b={});a.b["expire"+d]=Math.floor(e.getTime()/1E3)+(b?"s":"");0>c?(a.c||(a.c={}),a.c[d]=j):a.c&&(a.c[d]=k);b&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))};a.da=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=t)),!a||a!=t&&!a.match(r.u)))a="";return a};a.k=
function(d,c){a.Pa(d);a.i!=i&&(a.i[d]=k);o.d[d]&&(o.d[d].Ab=o.o(),o.I(d));w.d[d]&&w.Ha(d,k);if(d==F){w.isClientSideMarketingCloudVisitorID!==j&&(w.isClientSideMarketingCloudVisitorID=k);var b=a.a(n);if(!b||a.overwriteCrossDomainMCIDAndAID){b="object"==typeof c&&c.mid?c.mid:a.da(c);if(!b){if(a.B){a.getAnalyticsVisitorID(i,k,j);return}b=a.s(0,n)}a.e(n,b)}if(!b||b==t)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.k(C,c),a.B&&c.mid&&a.k(D,{id:c.id}));a.r(n,[b])}if(d==C&&"object"==
typeof c){b=604800;c.id_sync_ttl!=E&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl,10));var e=a.a(A);e||((e=c.d_region)||(e=c.dcs_region),e&&(a.j(A,b),a.e(A,e)));e||(e="");a.r(A,[e]);e=a.a(s);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.j(s,b),a.e(s,e);e||(e="");a.r(s,[e]);!c.error_msg&&a.A&&a.e(H,a.A)}if(d==D){b=a.a(p);if(!b||a.overwriteCrossDomainMCIDAndAID)(b=a.da(c))?b!==t&&a.j(s,-1):b=t,a.e(p,b);if(!b||b==t)b="";a.r(p,[b])}a.idSyncDisableSyncs?z.za=j:(z.za=k,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,
z.wb(b));if(c===Object(c)){var f;a.isAllowed()&&(f=a.a(B));f||(f=t,c.d_optout&&c.d_optout instanceof Array&&(f=c.d_optout.join(",")),b=parseInt(c.d_ottl,10),isNaN(b)&&(b=7200),a.j(B,b,j),a.e(B,f));a.r(B,[f])}};a.i=i;a.t=function(d,c,b,e,f){var g="",h,k=x.ob(d);if(a.isAllowed()&&(a.f(),g=a.a(d,M[d]===j),a.disableThirdPartyCalls&&!g&&(d===n?(g=a.s(0,n),a.setMarketingCloudVisitorID(g)):d===p&&!k&&(g="",a.setAnalyticsVisitorID(g))),(!g||a.c&&a.c[d])&&(!a.disableThirdPartyCalls||k)))if(d==n||d==B?h=F:
d==A||d==s?h=C:d==p&&(h=D),h){if(c&&(a.i==i||!a.i[h]))a.i==i&&(a.i={}),a.i[h]=j,a.Ta(h,c,function(c,b){if(!a.a(d))if(o.d[h]&&(o.d[h].timeout=o.o(),o.d[h].nb=!!c,o.I(h)),b===Object(b)&&!a.useCORSOnly)a.ia(h,b.url,b.G);else{c&&w.Ha(h,j);var e="";d==n?e=a.s(0,n):h==C&&(e={error_msg:"timeout"});a.k(h,e)}},f);if(g)return g;a.Xa(d,b);c||a.k(h,{id:t});return""}if((d==n||d==p)&&g==t)g="",e=j;b&&(e||a.disableThirdPartyCalls)&&a.J(b,[g]);return g};a._setMarketingCloudFields=function(d){a.f();a.k(F,d)};a.setMarketingCloudVisitorID=
function(d){a._setMarketingCloudFields(d)};a.B=k;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.B=j);var b=a.z("_setMarketingCloudFields");return a.t(n,b.url,d,c,b)}return""};a.Ua=function(){a.getAudienceManagerBlob()};l.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.w={};a.ca=k;a.A="";a.setCustomerIDs=function(d){if(a.isAllowed()&&d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&(b=d[c]))if("object"==
typeof b){var e={};b.id&&(e.id=b.id);b.authState!=E&&(e.authState=b.authState);a.w[c]=e}else a.w[c]={id:b};var d=a.getCustomerIDs(),e=a.a(H),f="";e||(e=0);for(c in d)Object.prototype[c]||(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.A=a.fa(f);a.A!=e&&(a.ca=j,a.Ua())}};a.getCustomerIDs=function(){a.f();var d={},c,b;for(c in a.w)Object.prototype[c]||(b=a.w[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),d[c].authState=b.authState!=E?b.authState:l.AuthState.UNKNOWN);return d};a._setAnalyticsFields=
function(d){a.f();a.k(D,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,j)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));var h={};if(f){var f="http"+(a.loadSSL?"s":"")+"://"+f+"/id",e="d_visid_ver="+
a.version+"&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""),i=["s_c_il",a._in,"_set"+(b?"MarketingCloud":"Analytics")+"Fields"],g=f+"?"+e+"&callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":"Analytics")+"Fields";h.m=f+"?"+e;h.oa=i}h.url=g;return a.t(b?n:p,g,d,c,h)}}return""};a._setAudienceManagerFields=function(d){a.f();a.k(C,d)};a.z=function(d){var c=a.audienceManagerServer,b="",e=a.a(n),f=a.a(s,j),
g=a.a(p),g=g&&g!=t?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),h,i;if(b)for(h in b)Object.prototype[h]||(i=b[h],g+="&d_cid_ic="+encodeURIComponent(h)+"%01"+encodeURIComponent(i.id?i.id:"")+(i.authState?"%01"+i.authState:""));d||(d="_setAudienceManagerFields");c="http"+(a.loadSSL?"s":"")+"://"+c+"/id";e="d_visid_ver="+a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.B?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+
"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g;f=["s_c_il",a._in,d];b=c+"?"+e+"&d_cb=s_c_il%5B"+a._in+"%5D."+d;return{url:b,m:c+"?"+e,oa:f}}return{url:b}};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,j)})){var b=a.a(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,
j)}));if(b)return b=a.z(),a.t(A,b.url,d,c,b)}return""};a.getLocationHint=a.getAudienceManagerLocationHint;a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,j)})){var b=a.a(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,j)}));if(b){var b=a.z(),e=b.url;a.ca&&a.j(s,-1);return a.t(s,e,d,c,b)}}return""};a._supplementalDataIDCurrent="";a._supplementalDataIDCurrentConsumed={};a._supplementalDataIDLast="";a._supplementalDataIDLastConsumed=
{};a.getSupplementalDataID=function(d,c){!a._supplementalDataIDCurrent&&!c&&(a._supplementalDataIDCurrent=a.s(1));var b=a._supplementalDataIDCurrent;a._supplementalDataIDLast&&!a._supplementalDataIDLastConsumed[d]?(b=a._supplementalDataIDLast,a._supplementalDataIDLastConsumed[d]=j):b&&(a._supplementalDataIDCurrentConsumed[d]&&(a._supplementalDataIDLast=a._supplementalDataIDCurrent,a._supplementalDataIDLastConsumed=a._supplementalDataIDCurrentConsumed,a._supplementalDataIDCurrent=b=!c?a.s(1):"",a._supplementalDataIDCurrentConsumed=
{}),b&&(a._supplementalDataIDCurrentConsumed[d]=j));return b};l.OptOut={GLOBAL:"global"};a.getOptOut=function(d,c){if(a.isAllowed()){var b=a.z("_setMarketingCloudFields");return a.t(B,b.url,d,c,b)}return""};a.isOptedOut=function(d,c,b){return a.isAllowed()?(c||(c=l.OptOut.GLOBAL),(b=a.getOptOut(function(b){a.J(d,[b==l.OptOut.GLOBAL||0<=b.indexOf(c)])},b))?b==l.OptOut.GLOBAL||0<=b.indexOf(c):i):k};a.appendVisitorIDsTo=function(d){var c=r.Z,b=y([[n,a.a(n)],[p,a.a(p)],[I,a.marketingCloudOrgID]]);try{return a.v(d,
c,b)}catch(e){return d}};var r={q:!!m.postMessage,La:1,aa:864E5,Z:"adobe_mc",u:/^[0-9a-fA-F\-]+$/,Ka:5};a.Eb=r;a.na={postMessage:function(a,c,b){var e=1;c&&(r.q?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},U:function(a,c){var b;try{if(r.q)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?"addEventListener":
"removeEventListener"]("message",b,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",b)}catch(e){}}};var x={M:function(){if(u.addEventListener)return function(a,c,b){a.addEventListener(c,function(a){"function"===typeof b&&b(a)},k)};if(u.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===i)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==typeof c)throw new TypeError;
for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},va:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)},vb:function(a){var c=a.indexOf("#");return 0<c?a.substr(c):""},mb:function(a){var c=a.indexOf("#");return 0<c?a.substr(0,c):a},$a:function(a,c,b){a=a.split("&");b=b!=i?b:a.length;a.splice(b,0,c);return a.join("&")},ob:function(d,c,b){if(d!==p)return k;c||(c=a.trackingServer);b||(b=a.trackingServerSecure);d=a.loadSSL?b:c;return"string"===
typeof d&&d.length?0>d.indexOf("2o7.net")&&0>d.indexOf("omtrdc.net"):k},pb:function(a){return Boolean(a&&a===Object(a))}};a.Kb=x;var N={C:function(){var a="none",c=j;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(c=k),0<Object.prototype.toString.call(window.Bb).indexOf("Constructor")&&
(c=k));return{D:a,Nb:c}}(),jb:function(){return"none"===this.C.D?i:new window[this.C.D]},ib:function(d,c,b){var e=this;c&&(d.G=c);try{var f=this.jb();f.open("get",d.m+"&ts="+(new Date).getTime(),j);"XMLHttpRequest"===this.C.D&&(f.withCredentials=j,f.timeout=a.loadTimeout,f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var a;try{if(a=JSON.parse(this.responseText),a!==Object(a)){e.n(d,i,"Response is not JSON");
break a}}catch(c){e.n(d,c,"Error parsing response as JSON");break a}try{for(var b=d.oa,f=window,g=0;g<b.length;g++)f=f[b[g]];f(a)}catch(j){e.n(d,j,"Error forming callback function")}}});f.onerror=function(a){e.n(d,a,"onerror")};f.ontimeout=function(a){e.n(d,a,"ontimeout")};f.send();o.d[b]={requestStart:o.o(),url:d.m,ta:f.timeout,ra:o.ya(),sa:1};a.ja.Fa.push(d.m)}catch(g){this.n(d,g,"try-catch")}},n:function(d,c,b){a.CORSErrors.push({Ob:d,error:c,description:b});d.G&&("ontimeout"===b?d.G(j):d.G(k,
d))}};a.la=N;var z={Na:3E4,$:649,Ja:k,id:i,T:[],Q:i,xa:function(a){if("string"===typeof a)return a=a.split("/"),a[0]+"//"+a[2]},g:i,url:i,kb:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(u.location.href);this.g||(this.g="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?"https://fast.":"https://");d=d+this.g+".demdex.net/dest5.html"+c;this.Q=this.xa(d);this.id="destination_publishing_iframe_"+this.g+"_"+a.idSyncContainerID;return d},cb:function(){var d=
"?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(u.location.href);"string"===typeof a.K&&a.K.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.Q=this.xa(a.K),this.url=a.K+d)},za:i,ua:k,W:k,F:i,cc:i,ub:i,dc:i,V:k,H:[],sb:[],tb:[],Ba:r.q?15:100,R:[],qb:[],pa:j,Ea:k,Da:function(){return!a.idSyncDisable3rdPartySyncing&&(this.ua||a.Gb)&&this.g&&"nosubdomainreturned"!==this.g&&this.url&&!this.W},O:function(){function a(){e=document.createElement("iframe");
e.sandbox="allow-scripts allow-same-origin";e.title="Adobe ID Syncing iFrame";e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.ub=j;c();document.body.appendChild(e)}function c(){x.M(e,"load",function(){e.className="aamIframeLoaded";b.F=j;b.p()})}this.W=j;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.F=j,this.Aa=e,this.p()):a();this.Aa=e},p:function(d){var c=this;d===Object(d)&&(this.R.push(d),
this.xb(d));if((this.Ea||!r.q||this.F)&&this.R.length)this.I(this.R.shift()),this.p();!a.idSyncDisableSyncs&&this.F&&this.H.length&&!this.V&&(this.Ja||(this.Ja=j,setTimeout(function(){c.Ba=r.q?15:150},this.Na)),this.V=j,this.Ga())},xb:function(a){var c,b,e;if((c=a.ibs)&&c instanceof Array&&(b=c.length))for(a=0;a<b;a++)e=c[a],e.syncOnPage&&this.qa(e,"","syncOnPage")},I:function(a){var c=encodeURIComponent,b,e,f,g,h;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||
""),c(g.tag||""),x.va(g.url||[],","),c(g.ttl||""),"","",g.fireURLSync?"true":"false"],g.syncOnPage||(this.pa?this.N(h.join("|")):g.fireURLSync&&this.qa(g,h.join("|")));this.qb.push(a)},qa:function(d,c,b){var e=(b="syncOnPage"===b?j:k)?J:L;a.f();var f=a.a(e),g=k,h=k,i=Math.ceil((new Date).getTime()/r.aa);f?(f=f.split("*"),h=this.yb(f,d.id,i),g=h.gb,h=h.hb,(!g||!h)&&this.wa(b,d,c,f,e,i)):(f=[],this.wa(b,d,c,f,e,i))},yb:function(a,c,b){var e=k,f=k,g,h,i;for(h=0;h<a.length;h++)g=a[h],i=parseInt(g.split("-")[1],
10),g.match("^"+c+"-")?(e=j,b<i?f=j:(a.splice(h,1),h--)):b>=i&&(a.splice(h,1),h--);return{gb:e,hb:f}},rb:function(a){if(a.join("*").length>this.$)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.$;)a.shift()},wa:function(d,c,b,e,f,g){var h=this;if(d){if("img"===c.tag){var d=c.url,b=a.loadSSL?"https:":"http:",j,k,l;for(e=0,j=d.length;e<j;e++){k=d[e];l=/^\/\//.test(k);var m=new Image;x.M(m,"load",function(b,c,d,e){return function(){h.T[b]=
i;a.f();var g=a.a(f),j=[];if(g){var g=g.split("*"),k,l,m;for(k=0,l=g.length;k<l;k++)m=g[k],m.match("^"+c.id+"-")||j.push(m)}h.Ia(j,c,d,e)}}(this.T.length,c,f,g));m.src=(l?b:"")+k;this.T.push(m)}}}else this.N(b),this.Ia(e,c,f,g)},N:function(d){var c=encodeURIComponent;this.H.push((a.Hb?c("---destpub-debug---"):c("---destpub---"))+d)},Ia:function(d,c,b,e){d.push(c.id+"-"+(e+Math.ceil(c.ttl/60/24)));this.rb(d);a.e(b,d.join("*"))},Ga:function(){var d=this,c;this.H.length?(c=this.H.shift(),a.na.postMessage(c,
this.url,this.Aa.contentWindow),this.sb.push(c),setTimeout(function(){d.Ga()},this.Ba)):this.V=k},U:function(a){var c=/^---destpub-to-parent---/;"string"===typeof a&&c.test(a)&&(c=a.replace(c,"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.pa="true"===c[1]?j:k,this.Ea=j,this.p()),this.tb.push(a))},wb:function(d){if(this.url===i||d.subdomain&&"nosubdomainreturned"===this.g)this.g="string"===typeof a.ma&&a.ma.length?a.ma:d.subdomain||"",this.url=this.kb();d.ibs instanceof Array&&d.ibs.length&&
(this.ua=j);this.Da()&&(a.idSyncAttachIframeOnWindowLoad?(l.Y||"complete"===u.readyState||"loaded"===u.readyState)&&this.O():this.ab());"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):this.p(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},bb:function(d,c){return a.Ib||!d||c-d>r.La},ab:function(){function a(){c.W||(document.body?c.O():setTimeout(a,30))}var c=this;a()}};a.Fb=z;a.timeoutMetricsLog=[];var o={fb:window.performance&&window.performance.timing?
1:0,Ca:window.performance&&window.performance.timing?window.performance.timing:i,X:i,P:i,d:{},S:[],send:function(d){if(a.takeTimeoutMetrics&&d===Object(d)){var c=[],b=encodeURIComponent,e;for(e in d)d.hasOwnProperty(e)&&c.push(b(e)+"="+b(d[e]));d="http"+(a.loadSSL?"s":"")+"://dpm.demdex.net/event?d_visid_ver="+a.version+"&d_visid_stg_timeout="+a.loadTimeout+"&"+c.join("&")+"&d_orgid="+b(a.marketingCloudOrgID)+"&d_timingapi="+this.fb+"&d_winload="+this.lb()+"&d_ld="+this.o();(new Image).src=d;a.timeoutMetricsLog.push(d)}},
lb:function(){this.P===i&&(this.P=this.Ca?this.X-this.Ca.navigationStart:this.X-l.eb);return this.P},o:function(){return(new Date).getTime()},I:function(a){var c=this.d[a],b={};b.d_visid_stg_timeout_captured=c.ta;b.d_visid_cors=c.sa;b.d_fieldgroup=a;b.d_settimeout_overriden=c.ra;c.timeout?c.nb?(b.d_visid_timedout=1,b.d_visid_timeout=c.timeout-c.requestStart,b.d_visid_response=-1):(b.d_visid_timedout="n/a",b.d_visid_timeout="n/a",b.d_visid_response="n/a"):(b.d_visid_timedout=0,b.d_visid_timeout=-1,
b.d_visid_response=c.Ab-c.requestStart);b.d_visid_url=c.url;l.Y?this.send(b):this.S.push(b);delete this.d[a]},zb:function(){for(var a=0,c=this.S.length;a<c;a++)this.send(this.S[a])},ya:function(){return"function"===typeof setTimeout.toString?-1<setTimeout.toString().indexOf("[native code]")?0:1:-1}};a.Mb=o;var w={isClientSideMarketingCloudVisitorID:i,MCIDCallTimedOut:i,AnalyticsIDCallTimedOut:i,AAMIDCallTimedOut:i,d:{},Ha:function(a,c){switch(a){case F:c===k?this.MCIDCallTimedOut!==j&&(this.MCIDCallTimedOut=
k):this.MCIDCallTimedOut=c;break;case D:c===k?this.AnalyticsIDCallTimedOut!==j&&(this.AnalyticsIDCallTimedOut=k):this.AnalyticsIDCallTimedOut=c;break;case C:c===k?this.AAMIDCallTimedOut!==j&&(this.AAMIDCallTimedOut=k):this.AAMIDCallTimedOut=c}}};a.isClientSideMarketingCloudVisitorID=function(){return w.isClientSideMarketingCloudVisitorID};a.MCIDCallTimedOut=function(){return w.MCIDCallTimedOut};a.AnalyticsIDCallTimedOut=function(){return w.AnalyticsIDCallTimedOut};a.AAMIDCallTimedOut=function(){return w.AAMIDCallTimedOut};
a.idSyncGetOnPageSyncInfo=function(){a.f();return a.a(J)};a.idSyncByURL=function(d){var c,b=d||{};c=b.minutesToLive;var e="";a.idSyncDisableSyncs&&(e=e?e:"Error: id syncs have been disabled");if("string"!==typeof b.dpid||!b.dpid.length)e=e?e:"Error: config.dpid is empty";if("string"!==typeof b.url||!b.url.length)e=e?e:"Error: config.url is empty";if("undefined"===typeof c)c=20160;else if(c=parseInt(c,10),isNaN(c)||0>=c)e=e?e:"Error: config.minutesToLive needs to be a positive number";c={error:e,ec:c};
if(c.error)return c.error;var e=d.url,f=encodeURIComponent,b=z,g,e=e.replace(/^https:/,"").replace(/^http:/,"");g=x.va(["",d.dpid,d.dpuuid||""],",");d=["ibs",f(d.dpid),"img",f(e),c.ttl,"",g];b.N(d.join("|"));b.p();return"Successfully queued"};a.idSyncByDataSource=function(d){if(d!==Object(d)||"string"!==typeof d.dpuuid||!d.dpuuid.length)return"Error: config or config.dpuuid is empty";d.url="//dpm.demdex.net/ibs:dpid="+d.dpid+"&dpuuid="+d.dpuuid;return a.idSyncByURL(d)};0>q.indexOf("@")&&(q+="@AdobeOrg");
a.marketingCloudOrgID=q;a.cookieName="AMCV_"+q;a.sessionCookieName="AMCVS_"+q;a.cookieDomain=a.Ra();a.cookieDomain==m.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=m.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=3E4;a.CORSErrors=[];a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";var M={};M[A]=j;M[s]=j;if(v&&"object"==typeof v){for(var G in v)!Object.prototype[G]&&(a[G]=v[G]);a.idSyncContainerID=a.idSyncContainerID||0;a.ba();a.f();N=a.a(K);G=Math.ceil((new Date).getTime()/
r.aa);!a.idSyncDisableSyncs&&z.bb(N,G)&&(a.j(s,-1),a.e(K,G));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob();a.Va(a.serverState)}else a.ba();if(!a.idSyncDisableSyncs){z.cb();x.M(window,"load",function(){l.Y=j;o.X=o.o();o.zb();var a=z;a.Da()&&a.O()});try{a.na.U(function(a){z.U(a.data)},z.Q)}catch(O){}}}
Visitor.getInstance=function(q,v){var y,a=window.s_c_il,m;0>q.indexOf("@")&&(q+="@AdobeOrg");if(a)for(m=0;m<a.length;m++)if((y=a[m])&&"Visitor"==y._c&&y.marketingCloudOrgID==q)return y;return new Visitor(q,v)};(function(){function q(){v.Y=y}var v=window.Visitor,y=v.Oa,a=v.Ma;y||(y=!0);a||(a=!1);window.addEventListener?window.addEventListener("load",q):window.attachEvent&&window.attachEvent("onload",q);v.eb=(new Date).getTime()})();
// Dynamic Tag Management Library
// Property: CE - Portail eCommerce
// All code and conventions are protected by copyright
// Adobe Systems Incorporated

(function(window, document, undefined) {
// Satellite
// =========
//
// Satellite *core*. Yeah, you want it.
//
// In this first section, we have a some useful utility functions.
var ToString = Object.prototype.toString

var Overrides = window._satellite && window._satellite.override

function assert(cond, msg){
  if (!cond){
    throw new Error(msg || "Assertion Failure")
  }
}

var SL = {
  initialized: false,

  // `$data(elm, prop, [val])`
  // ----------------------------
  //
  // Our own `$data()` method, [a la jQuery](http://api.jquery.com/jQuery.data/)
  // , used to get or set
  // properties on DOM elements without going insane.
  // `uuid` and `dataCache` are used by `$data()`
  //
  // Parameters:
  //
  // - `elm` - the element to get or set a property to
  // - `prop` - the property name
  // - `val` - the value of the property, if omitted, the method will
  //      return the existing value of the property, if any
  $data: function(elm, prop, val){
    if (!elm) return;
    var __satellite__ = '__satellite__'
    var cache = SL.dataCache
    var uuid = elm[__satellite__]
    if (!uuid) uuid = elm[__satellite__] = SL.uuid++
    var datas = cache[uuid]
    if (!datas) datas = cache[uuid] = {}
    if (val === undefined)
      return datas[prop]
    else
      datas[prop] = val
  },
  uuid: 1,
  dataCache: {},

  // `keys(object)`
  // --------------
  //
  // Return all keys of an object in an array.
  keys: function(obj){
    var ret = []
    for (var key in obj) 
      if (obj.hasOwnProperty(key))
        ret.push(key)
    return ret
  },

  // `values(object)`
  // ----------------
  //
  // Return all values of an object in an array.
  values: function(obj){
    var ret = []
    for (var key in obj) 
      if (obj.hasOwnProperty(key))
        ret.push(obj[key])
    return ret
  },

  // `isArray(thing)`
  // --------------
  //
  // Returns whether the given thing is an array.
  isArray: Array.isArray || function(thing){
    return ToString.apply(thing) === "[object Array]"
  },

  // `isObject(thing)`
  // -----------------
  //
  // Returns whether the given thing is a plain object.
  isObject: function(thing){
    return thing != null && !SL.isArray(thing) &&
      typeof thing === 'object'
  },

  // `isString(thing)`
  // -----------------
  //
  // Returns whether thing is a string
  isString: function(thing){
    return typeof thing === 'string'
  },

  // `isNumber(thing)`
  // -----------------
  //
  // Returns whether thing is a number
  isNumber: function(thing){
    return ToString.apply(thing) === '[object Number]' && !SL.isNaN(thing)
  },

  // `isNaN(thing)`
  // --------------
  //
  // Return whether thing is NaN
  isNaN: function(thing){
    return thing !== thing
  },

  // `isRegex(thing)`
  // ----------------
  //
  // Returns whether thing is a RegExp object
  isRegex: function(thing){
    return thing instanceof RegExp
  },

  // `isLinkTag(thing)`
  // ----------------
  //
  // Returns whether thing is a DOM link element
  isLinkTag: function(thing){
    return !!(thing && thing.nodeName &&
      thing.nodeName.toLowerCase() === 'a')
  },

  // `each(arr, func, [context])`
  // ------------------
  //
  // A handy method for array iteration wo having to write a for-loop.
  //
  // Parameters:
  //
  // - `arr` - an array
  // - `func(item, index, arr)` - a function which accepts each item in the array
  //      once. I takes these arguments
  //      * `item` - an item
  //      * `index` - the array index of said item
  //      * `arr` - the array
  // - `context` - the context to be bound to `func` when it is invoked
  each: function(arr, func, context){
    for (var i = 0, len = arr.length; i < len; i++)
      func.call(context, arr[i], i, arr)
  },

  // `map(arr, func)`
  // ----------------
  //
  // A handy method for mapping an array to another array using a 1-to-1 mapping
  // for each element
  //
  // Parameters:
  //
  // Parameters are the same as `SL.each`, except that `func` is expected to return
  // a the value you want in the corresponding index of the returned array.
  map: function(arr, func, context){
    var ret = []
    for (var i = 0, len = arr.length; i < len; i++)
      ret.push(func.call(context, arr[i], i, arr))
    return ret
  },

  // `filter(arr, cond)`
  // -------------------
  //
  // Handy method for take an array and filtering down to a subset of the elements.
  //
  // Parameters:
  //
  // Parameters are the same as `SL.each` except the second argument is `cond`
  // instead of `func` and it is expected to return a truthy value respresenting
  // whether to include this item in the return array or not.
  filter: function(arr, cond, context){
    var ret = []
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        ret.push(item)
    }
    return ret
  },

  // `any(arr, cond, context)`
  // -------------------------
  //
  // Another array helper function. Returns true if `cond(item)` returns true
  // for any item in the array.
  any: function(arr, cond, context){
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        return true
    }
    return false
  },

  // `every(arr, cond, context)`
  // ---------------------------
  //
  // Another array helper function. Returns true if `cond(item)` returns true
  // for every item in the array.
  every: function(arr, cond, context){
    var retval = true
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      retval = retval && cond.call(context, item, i, arr)
    }
    return retval
  },

  // `contains(arr, obj)`
  // -----------------------
  //
  // Tells you whether an array contains an object.
  //
  // Parameters:
  //
  // - `arr` - said array
  // - `obj` - said object
  contains: function(arr, obj){
    return SL.indexOf(arr, obj) !== -1
  },

  // `indexOf(arr, obj)`
  // -------------------
  //
  // Return the index of an object within an array.
  //
  // Parameters;
  //
  // - `arr` - said array
  // - `obj` - said object
  indexOf: function(arr, obj){
    if (arr.indexOf)
      return arr.indexOf(obj)
    for (var i = arr.length; i--;)
      if (obj === arr[i])
        return i
    return -1
  },


  // `find(arr, obj)`
  // -------------------
  //
  // Return the index of an object within an array.
  //
  // Parameters;
  //
  // - `arr` - said array
  // - `obj` - said object
  find: function(arr, cond, context){
    var ret = []
    if (!arr) return null
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        return item
    }
    return null
  },

  // `textMatch(str, str_or_regex)`
  // ------------------------------
  //
  // Perform a string match based on another string or a regex.
  //
  // Parameters:
  //
  // `str` - the input string to be matched
  // `str_or_regex` - the pattern to match against, if this is a string, it requires exact match, if
  //      it's a regex, then it will do regex match
  textMatch: function(str, pattern){
    if (pattern == null) throw new Error('Illegal Argument: Pattern is not present')
    if (str == null) return false
    if (typeof pattern === 'string') return str === pattern
    else if (pattern instanceof RegExp) return pattern.test(str)
    else return false
  },

  // `stringify(obj, [seenValues])`
  // ------------------------------
  //
  // Stringify any type of object.
  //
  // Parameters:
  //
  // `obj` - the object that needs to be stringified
  // `seenValues` - pool of parsed resources; used to avoid circular references;
  stringify: function(obj, seenValues){
    seenValues = seenValues || [];
    if (SL.isObject(obj)) {
      if (SL.contains(seenValues, obj)) {
        return '<Cycle>';
      } else {
        seenValues.push(obj);
      }
    }

    if (SL.isArray(obj)) {
      return '[' + SL.map(obj, function(value){
        return SL.stringify(value, seenValues)
      }).join(',') + ']';
    } else if (SL.isString(obj)) {
      return '"' + String(obj) + '"';
    } if (SL.isObject(obj)) {
      var data = [];
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
          data.push(prop + ': ' + SL.stringify(obj[prop], seenValues));
      }
      return '{' + data.join(', ') + '}';
    } else {
      return String(obj);
    }
  },

  // `trim(str)`
  // -----------
  //
  // Trims a string.
  //
  // Parameters:
  //
  // `str` - the input string to be trimmed.
  trim: function(str){
    if (str == null) return null
    if (str.trim){
      return str.trim()
    }else{
      return str.replace(/^ */, '').replace(/ *$/, '')
    }
  },

  // `bind(func, context)`
  // ---------------------
  //
  // Binds a context permanently to a context. The returned function is a new function
  // which - when called - will call the passed in function with `context` bound to it.
  //
  // Parameters:
  //
  // `func` - a function
  // `context` - an object to be bound as the context of this function
  bind: function(func, context) {
    return function() {
      return func.apply(context, arguments)
    }
  },

  // `throttle(fn, delay)`
  // ---------------------
  //
  // *Throttles* a function `fn` to be called no more than once during the interval
  // specified by `delay`.
  //
  // Parameters:
  //
  // - `fn` - a function
  // - `delay` - delay in milliseconds
  //
  // *Throttle function stolen from
  //     <http://remysharp.com/2010/07/21/throttling-function-calls/>*
  throttle: function(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  },

  // `domReady(callback)`
  // --------------------
  //
  // Registers a callback to be called when the DOM is fully parsed and loaded.
  //
  // Parameters:
  //
  // - `callback` - a function to be called at `domready`
  //
  // *domReady is borrowed from <https://github.com/ded/domready>*
  domReady: (function (ready) {

    var fns = [], fn, f = false
      , doc = document
      , testEl = doc.documentElement
      , hack = testEl.doScroll
      , domContentLoaded = 'DOMContentLoaded'
      , addEventListener = 'addEventListener'
      , onreadystatechange = 'onreadystatechange'
      , loaded = /^loade|^c/.test(doc.readyState)

    function flush(f) {
      loaded = 1
      while (f = fns.shift()) f()
    }

    doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {
      doc.removeEventListener(domContentLoaded, fn, f)
      flush()
    }, f)


    hack && doc.attachEvent(onreadystatechange, (fn = function () {
      if (/^c/.test(doc.readyState)) {
        doc.detachEvent(onreadystatechange, fn)
        flush()
      }
    }))

    return (ready = hack ?
      function (fn) {
        self != top ?
          loaded ? fn() : fns.push(fn) :
          function () {
            try {
              testEl.doScroll('left')
            } catch (e) {
              return setTimeout(function() { ready(fn) }, 50)
            }
            fn()
          }()
      } :
      function (fn) {
        loaded ? fn() : fns.push(fn)
      })
  }()),

  // `loadScript(url, [callback])`
  // -----------------------------
  //
  // Load an external script.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  // - `callback`(optional) - the function to be called after the script has loaded.
  loadScript: function(url, callback){
    var script = document.createElement('script')
    SL.scriptOnLoad(url, script, callback)
    script.src = url
    document.getElementsByTagName('head')[0]
      .appendChild(script)
  },

  scriptOnLoad: function(url, script, callback){
    function cb(err){
      if (err) SL.logError(err)
      if (callback) callback(err)
    }
    if ('onload' in script){
      script.onload = function(){
        cb()
      }
      script.onerror = function(){
        cb(new Error('Failed to load script ' + url))
      }
    }else if ('readyState' in script){
      script.onreadystatechange = function(){
        var rs = script.readyState
        if (rs === 'loaded' || rs === 'complete'){
          script.onreadystatechange = null
          cb()
        }
      }
    }
  },

  // `loadScriptOnce(url, [callback])`
  // -----------------------------
  //
  // Load an external script only if it hasn't been loaded until now.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  // - `callback`(optional) - the function to be called after the script has loaded.
  loadScriptOnce: function(url, callback){
    if (SL.loadedScriptRegistry[url]) return

    SL.loadScript(url, function(err) {
      if (!err) {
        SL.loadedScriptRegistry[url] = true
      }

      if (callback) callback(err)
    })
  },

  loadedScriptRegistry: {},

  // `loadScriptSync(url)`
  // -----------------------------
  //
  // Load an external script using document.write.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  loadScriptSync: function(url){
    if (!document.write) {
      SL.notify('Cannot load sync the "' + url + '" script because "document.write" is not available', 1)
      return
    }

    if (SL.domReadyFired){
      SL.notify('Cannot load sync the "' + url + '" script after DOM Ready.', 1)
      return
    }

    // If the url contains a double quote, it could be someone trying to switch out of the
    // attribute to introduce an XSS hack. On the other hand, it could just be that the URL
    // was never escaped. We'll escape it to prevent the former while supporting the latter.
    if (url.indexOf('"') > -1) {
      url = encodeURI(url);
    }

    document.write('<script src="' + url + '"></scr' + 'ipt>');
  },

  // `pushAsyncScript(callback)`
  // -------------------
  //
  // Called by an async custom user script.
  pushAsyncScript: function(cb){
    SL.tools['default'].pushAsyncScript(cb)
  },

  // `pushBlockingScript(callback)`
  // ------------------------------
  //
  // Called by a blocking custom user script.
  pushBlockingScript: function(cb){
    SL.tools['default'].pushBlockingScript(cb)
  },

  // `addEventHandler(elm, evt, callback)`
  // -------------------------------------
  //
  // Register an event handler for a element
  //
  // Parameters:
  //
  // - `elm` - the element in question
  // - `evt` - the event type to listen to
  // - `callback` - callback function
  addEventHandler: window.addEventListener ?
    function(node, evt, cb){ node.addEventListener(evt, cb, false) } :
    function(node, evt, cb){ node.attachEvent('on' + evt, cb) },

  removeEventHandler: window.removeEventListener ?
    function(node, evt, cb){ node.removeEventListener(evt, cb, false) } :
    function(node, evt, cb){ node.detachEvent('on' + evt, cb) },

  // `preventDefault(evt)`
  // ---------------------
  //
  // Prevent the default browser behavior for this event
  //
  // Parameters:
  //
  // `evt` - the event triggered
  preventDefault: window.addEventListener ?
    function(e){ e.preventDefault() } :
    function(e){ e.returnValue = false },

  // `stopPropagation(evt)`
  // ----------------------
  //
  // Cross-browser `stopPropagation`
  //
  // Parameters:
  //
  // `evt` - the event triggered
  stopPropagation: function(e){
    e.cancelBubble = true
    if (e.stopPropagation) e.stopPropagation()
  },

  // `containsElement(container, elm)`
  // ----------------------
  //
  // Given DOM elements `container` and `elm`, returns whether `container` contains `elm`.
  //
  // Parameters:
  //
  // `elm1` - the possible parent
  // `elm2` - the possible child
  containsElement: function(container, elm) {
    return container.contains ? container.contains(elm) :
      !!(container.compareDocumentPosition(elm) & 16);
  },

  // `matchesCss(css, elm)`
  // ----------------------
  //
  // Returns whether a DOM element matches a given css selector
  //
  // Parameters:
  //
  // - `css` - the CSS selector
  // - `elm` - the element
  matchesCss: (function(docEl){

    function simpleTagMatch(selector, elm){
      var tagName = elm.tagName
      if (!tagName) return false
      return selector.toLowerCase() === tagName.toLowerCase()
    }

    var matches =
      docEl.matchesSelector ||
      docEl.mozMatchesSelector ||
      docEl.webkitMatchesSelector ||
      docEl.oMatchesSelector ||
      docEl.msMatchesSelector
    if (matches) {
      return function(selector, elm){
        if (elm === document || elm === window) return false
        try{
          return matches.call(elm, selector)
        }catch(e){
          return false
        }
      }
    } else if(docEl.querySelectorAll) {
      return function(selector, elm) {
        var parent = elm.parentNode
        if (!parent) return false
        if (selector.match(/^[a-z]+$/i)){
          return simpleTagMatch(selector, elm)
        }
        try{
          var nodeList = elm.parentNode.querySelectorAll(selector)
          for (var i = nodeList.length; i--;)
          if (nodeList[i] === elm) return true
        }catch(e){
          //
        }
        return false
      }
    }else{
      return function(selector, elm){
        if (selector.match(/^[a-z]+$/i)){
          return simpleTagMatch(selector, elm)
        }
        try{
          return SL.Sizzle.matches(selector, [elm]).length > 0
        }catch(e){
          return false
        }
      }
    }
  }(document.documentElement)),

  // `cssQuery(css)`
  // ---------------
  //
  // Return a list of element matching the given css selector
  //
  // Parameters:
  //
  // - `css` - the CSS selector
  cssQuery: (function(doc){
    if (doc.querySelectorAll) {
      return function(css, cb){
        var results
        try{
          results = doc.querySelectorAll(css)
        }catch(e){
          results = []
        }
        cb(results)
      }
    }else{
      return function(css, cb){
        if (SL.Sizzle){
          var results
          try{
            results = SL.Sizzle(css)
          }catch(e){
            results = []
          }
          cb(results)
        }else
          SL.sizzleQueue.push([css, cb])
      }
    }
  })(document),

  // `hasAttr(elem, attrName)`
  // ---------------
  //
  // Check if attribute is defined on element
  //
  // Parameters:
  //
  // - `elem` - the DOM element
  // - `attrName` - attribute name
  hasAttr: function(elem, attrName) {
    return elem.hasAttribute ? elem.hasAttribute(attrName) : elem[attrName] !== undefined;
  },

  // `inherit(subClass, superClass)`
  // -------------------------------
  //
  // Make `subClass` inherit `superClass`.
  //
  // Parameters:
  //
  // - `subClass` - a Javascript function representing a constructor - the inheritor
  // - `superClass` - another constructor - the one to inherit from
  inherit: function(subClass, superClass){
    var f = function() {}
    f.prototype = superClass.prototype
    subClass.prototype = new f()
    subClass.prototype.constructor = subClass
  },

  // `extend(dst, src)`
  // ----------------
  //
  // Extend an object with the properties of another.
  //
  // Parameters:
  //
  // - `dst` - object to copy to
  // - `src` - object to copy from
  extend: function(dst, src){
    for (var prop in src)
      if (src.hasOwnProperty(prop))
        dst[prop] = src[prop]
  },

  // `toArray(arrayLike)`
  // --------------------
  //
  // Converts an array-like object to an array.
  //
  // Parameters:
  //
  // - `arrayLike` - an array-like object, meaning it has a length property
  //   which is a number
  toArray: (function(){
    try {
      var slice = Array.prototype.slice
      slice.call( document.documentElement.childNodes, 0 )[0].nodeType;
      return function(thing){
        return slice.call(thing, 0)
      }
    // Provide a fallback method if it does not work
    } catch( e ) {
      return function(thing){
        var ret = []
        for (var i = 0, len = thing.length; i < len; i++)
          ret.push(thing[i])
        return ret
      }
    }
  })(),

  // `equalsIgnoreCase(str1, str2)`
  // ------------------------------
  //
  // Returns true iff str1 and str2 are equal ignoring case.
  //
  // Parameters:
  //
  // * `str1` - the first string
  // * `str2` - the second string
  equalsIgnoreCase: function(str1, str2){
    if (str1 == null) return str2 == null
    if (str2 == null) return false
    return String(str1).toLowerCase() === String(str2).toLowerCase()
  },

  // `poll(fn, [freq], [max_retries])`
  // ------------------
  //
  // Runs `fn` for every `freq` ms. `freq` defaults to 1000. If any
  // invocation of `fn()` returns true, polling will stop.
  // The polling will stop if the number or retries exceeds the
  // provided `max_retries`.
  //
  // Parameters:
  //
  // * `fn` - function to be called repeatedly
  // * `freq` - frequency to call the function
  // * `max_retries` - number of times to retry
  poll: function(fn, freq, max_retries){
    var retries = 0

    freq = freq || 1000
    check()

    function check(){
      if (SL.isNumber(max_retries) && retries++ >= max_retries) {
        return;
      }

      if (!fn()){
        setTimeout(check, freq)
      }
    }
  },
  // ``Html(str)`
  // --------------------
  //
  // Escapes a string for being used in an HTML context. Returns
  // the escaped version of the string. Replaces the characters
  // `&` `<` `>` `"` `'` and `/`.
  //
  // Parameters:
  //
  // * `str` - the string to be escaped
  escapeForHtml: function(str){
    if (!str) return str
    return String(str)
      .replace(/\&/g, '&amp;')
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
  }
}

// The available tools to use.
SL.availableTools = {}

// The avaliable event emitters to use.
SL.availableEventEmitters = []

// The names of the events which can only fire once.
SL.fireOnceEvents = ['condition', 'elementexists']

// Initialize all event emitters.
SL.initEventEmitters = function(){
  SL.eventEmitters = SL.map(SL.availableEventEmitters, function(ee){
    return new ee()
  })
}

// Call `registerElements` on all event emitters.
SL.eventEmitterBackgroundTasks = function(){
  SL.each(SL.eventEmitters, function(ee){
    if ('backgroundTasks' in ee)
      ee.backgroundTasks()
  })
}

// Initialize all tools.
SL.initTools = function(toolSpecs){
  var tools = { 'default': new DefaultTool() }
  var euCookieName = SL.settings.euCookieName || 'sat_track'
  for (var id in toolSpecs){
    if(toolSpecs.hasOwnProperty(id)) {
      var toolSpec, ctr, tool
      toolSpec = toolSpecs[id]
      if (toolSpec.euCookie){
        var cookieSet = SL.readCookie(euCookieName) !== 'true'
        if (cookieSet) continue
      }
      ctr = SL.availableTools[toolSpec.engine]
      if (!ctr){
        var available = []
        for (var key in SL.availableTools){
          if (SL.availableTools.hasOwnProperty(key)) {
            available.push(key)  
          }
        }
        throw new Error('No tool engine named ' + toolSpec.engine +
          ', available: ' + available.join(',') + '.')
      }
      tool = new ctr(toolSpec)
      tool.id = id
      tools[id] = tool
    }
  }
  return tools
}

// Pre-process arguments (variable substitutions and lower-casing) before
// feeding them to the tools.
SL.preprocessArguments = function(args, elm, evt, forceLowerCase, escapeHtml){
  if (!args) return args
  return preprocessArray(args, forceLowerCase)
  function forceLowerCaseIfNeeded(value) {
    return forceLowerCase && SL.isString(value) ? value.toLowerCase() : value
  }

  function preprocessObject(obj){
    var ret = {}
    for (var key in obj){
      if (obj.hasOwnProperty(key)){
        var value = obj[key]
        if (SL.isObject(value)){
          ret[key] = preprocessObject(value)
        }else if (SL.isArray(value)){
          ret[key] = preprocessArray(value, forceLowerCase)
        }else{
          ret[key] = forceLowerCaseIfNeeded(SL.replace(value, elm, evt, escapeHtml))
        }
      }
    }
    return ret
  }

  function preprocessArray(args, forceLowerCase){
    var ret = []
    for (var i = 0, len = args.length; i < len; i++){
      var value = args[i]
      if (SL.isString(value)){
        value = forceLowerCaseIfNeeded(SL.replace(value, elm, evt))
      }else if (value && value.constructor === Object){
        value = preprocessObject(value)
      }
      ret.push(value)
    }
    return ret
  }

}

// Execute a command.
SL.execute = function(trig, elm, evt, tools){
  if (_satellite.settings.hideActivity) return
  tools = tools || SL.tools

  function doit(toolName){
    var tool = tools[toolName || 'default']
    if (!tool)
      return
    try{
      tool.triggerCommand(trig, elm, evt)
    }catch(e){
      SL.logError(e)
    }
  }
  if (trig.engine){
    var engine = trig.engine
    for (var toolName in tools){
      if (tools.hasOwnProperty(toolName)) {
        var tool = tools[toolName]
        if (tool.settings && tool.settings.engine === engine)
          doit(toolName)
      }
    }
  }else if (trig.tool instanceof Array)
    SL.each(trig.tool, function(toolName){
      doit(toolName)
    })
  else
    doit(trig.tool)
}

// Wrapper object that handles Satellite internal logging.
//
// It saves all messages for future reference (up to `keepLimit`, default 100) and
// outputs to browser's console if `_satellite.settings.notifications` is `true`.
// -----------------------------------------------------
SL.Logger = {
  outputEnabled: false,

  messages: [],
  keepLimit: 100,
  flushed: false,

  // @fixme: remove first 2 items when legacy code is updated
  LEVELS: [null, null, 'log', 'info', 'warn', 'error'],

  // `lvl` should be the index of a level defined in `LEVELS`
  message: function(msg, lvl) {
    var level = this.LEVELS[lvl] || 'log';

    this.messages.push([level, msg]);
    if (this.messages.length > this.keepLimit) {
      this.messages.shift();
    }

    if (this.outputEnabled) {
      this.echo(level, msg)
    }
  },

  getHistory: function() {
    return this.messages;
  },

  clearHistory: function() {
    this.messages = [];
  },

  setOutputState: function(state) {
    if (this.outputEnabled == state) return;

    this.outputEnabled = state;
    if (state) {
      this.flush();
    } else {
      this.flushed = false;
    }
  },

  // Private
  // ----------------------------------------
  echo: function(func, msg) {
    if (!window.console) return;
    window.console[func]("SATELLITE: " + msg);
  },

  flush: function() {
    if (this.flushed) return;

    SL.each(this.messages, function(item) {
      if (item[2] === true) return; // message already flushed
      this.echo(item[0], item[1]);
      item[2] = true;
    }, this);
    this.flushed = true;
  }
};

// `notify(msg, pty)`
// ------------------
//
// Notify the user of things happening in Satellite using `console.log`
//
// - msg - message to print
// - pty - priority
SL.notify = SL.bind(SL.Logger.message, SL.Logger);

// `cleanText(str)`
// ================
//
// "Cleans" the text from an element's innerText. This is used directly by the
// @cleanText special property.
SL.cleanText = function(str){
  if (str == null) return null
  return SL.trim(str).replace(/\s+/g, ' ')
}

SL.cleanText.legacy = function(str){
  if (str == null) return null
  return SL.trim(str).replace(/\s{2,}/g, ' ')
    .replace(/[^\000-\177]*/g, '')
}

SL.text = function(obj){
  return obj.textContent || obj.innerText
}

// Special Properties for DOM elements. You use special properties using
// the @ prefix. Example:
//
//     this.@text
SL.specialProperties = {
  text: SL.text,
  cleanText: function(obj){
    return SL.cleanText(SL.text(obj))
  }
}

// `getObjectProperty(obj, property)`
// ============================
//
// Get property(potentially nested) from an object.
SL.getObjectProperty = function(obj, property, supportSpecial){
  var propChain = property.split('.')
  var currValue = obj
  var special = SL.specialProperties
  var attrMatch
  for (var i = 0, len = propChain.length; i < len; i++){
    if (currValue == null) return undefined
    var prop = propChain[i]
    if (supportSpecial && prop.charAt(0) === '@'){
      var specialProp = prop.slice(1)
      currValue = special[specialProp](currValue)
      continue
    }
    if (currValue.getAttribute &&
      (attrMatch = prop.match(/^getAttribute\((.+)\)$/))){
      var attr = attrMatch[1]
      currValue = currValue.getAttribute(attr)
      continue
    }
    currValue = currValue[prop]
  }
  return currValue
}

// `getToolsByType(type)`
// ------------------------------------------------
//
// Returns an array containing all the tools whose engine property match
// the provided type.
//
// - `type` - The searched tool type
SL.getToolsByType = function(type){
  if (!type) {
    throw new Error('Tool type is missing')
  }

  var result = []
  for (var t in SL.tools) {
    if (SL.tools.hasOwnProperty(t)) {
      var tool = SL.tools[t]
      if (tool.settings && tool.settings.engine === type) {
        result.push(tool)
      }
    }
  }

  return result
}

// `setVar(name, value)` or `setVar(mapping)`
// ==========================================
//
// Set a customer variable. Can be either called like this
//
//     _satellite.setVar('name', 'value')
//
// Or by passing in a mapping(object literall) which allows setting multiple variables at
// the same time.
//
//     _satellite.setVar({name: 'value', foo: 'bar'})
SL.setVar = function(){
  var customVars = SL.data.customVars
  if(customVars == null) SL.data.customVars = {}, customVars = SL.data.customVars
  if (typeof arguments[0] === 'string'){
    var prop = arguments[0]
    customVars[prop] = arguments[1]
  }else if (arguments[0]){ // assume an object literal
    var mapping = arguments[0]
    for (var key in mapping)
      if (mapping.hasOwnProperty(key))
        customVars[key] = mapping[key]
  }
}

SL.dataElementSafe = function(key, length){
  if (arguments.length > 2){
    // setter
    var value = arguments[2]
    if (length === 'pageview'){
      SL.dataElementSafe.pageviewCache[key] = value
    }else if (length === 'session'){
      SL.setCookie('_sdsat_' + key, value)
    }else if (length === 'visitor') {
      SL.setCookie('_sdsat_' + key, value, 365 * 2)
    }
  }else{
    // getter
    if (length === 'pageview'){
      return SL.dataElementSafe.pageviewCache[key]
    }else if (length === 'session' || length === 'visitor'){
      return SL.readCookie('_sdsat_' + key)
    }
  }
}
SL.dataElementSafe.pageviewCache = {}

SL.realGetDataElement = function(dataDef){
  var ret
  if (dataDef.selector) {
    if (SL.hasSelector) {
      SL.cssQuery(dataDef.selector, function(elms) {
        if (elms.length > 0) {
          var elm = elms[0]
          if (dataDef.property === 'text') {
            ret = elm.innerText || elm.textContent
          }else if (dataDef.property in elm){
            ret = elm[dataDef.property]
          }else if (SL.hasAttr(elm, dataDef.property)){
            ret = elm.getAttribute(dataDef.property)
          }
        }
      })
    }
  }else if (dataDef.queryParam) {
    if (dataDef.ignoreCase){
      ret = SL.getQueryParamCaseInsensitive(dataDef.queryParam)
    }else{
      ret = SL.getQueryParam(dataDef.queryParam)
    }
  }else if (dataDef.cookie) {
    ret = SL.readCookie(dataDef.cookie)
  }else if (dataDef.jsVariable) {
    ret = SL.getObjectProperty(window, dataDef.jsVariable)
  }else if (dataDef.customJS) {
    ret = dataDef.customJS()
  }else if (dataDef.contextHub) {
    ret = dataDef.contextHub()
  }
  if (SL.isString(ret) && dataDef.cleanText){
    ret = SL.cleanText(ret)
  }
  return ret
}

SL.getDataElement = function(variable, suppressDefault, dataDef) {
  dataDef = dataDef || SL.dataElements[variable]
  if (dataDef == null) {
    return SL.settings.undefinedVarsReturnEmpty ? '' : null; 
  }
  var ret = SL.realGetDataElement(dataDef)
  if (ret === undefined && dataDef.storeLength) {
    ret = SL.dataElementSafe(variable, dataDef.storeLength)
  }else if (ret !== undefined && dataDef.storeLength) {
    SL.dataElementSafe(variable, dataDef.storeLength, ret)
  }
  if (!ret && !suppressDefault) {
    ret = dataDef['default'] || ''
  }
  if (SL.isString(ret) && dataDef.forceLowerCase) {
    ret = ret.toLowerCase()
  }
  return ret
}

// getVar(variable, elm, evt)
// ==========================
//
// Return the value of a variable, where the variable
// can be a data element, defined in the "data" section
// of the initial settings, or reference properties on
// an element, event, or target of the event in question,
// a query parameter, or a random number.
//
// - `variable` - the name of the variable to get
// - `[elm]` - the associated element, if any
// - `[evt]` - the associated event, if any
SL.getVar = function(variable, elm, evt){
  var custVars = SL.data.customVars
    , target = evt ? (evt.target || evt.srcElement) : null
    , randMatch
    , value
  var map = {
    uri: SL.URI(),
    protocol: document.location.protocol,
    hostname: document.location.hostname
  }
  if (SL.dataElements && variable in SL.dataElements){
    return SL.getDataElement(variable)
  }
  value = map[variable.toLowerCase()]
  if (value === undefined){
    if (variable.substring(0, 5) === 'this.'){
      variable = variable.slice(5)
      value = SL.getObjectProperty(elm, variable, true)
    }else if(variable.substring(0, 6) === 'event.'){
      variable = variable.slice(6)
      value = SL.getObjectProperty(evt, variable)
    }else if(variable.substring(0, 7) === 'target.'){
      variable = variable.slice(7)
      value = SL.getObjectProperty(target, variable)
    }else if(variable.substring(0, 7) === 'window.'){
      variable = variable.slice(7)
      value = SL.getObjectProperty(window, variable)
    }else if (variable.substring(0, 6) === 'param.'){
      variable = variable.slice(6)
      value = SL.getQueryParam(variable)
    }else if(randMatch = variable.match(/^rand([0-9]+)$/)){
      var len = Number(randMatch[1])
        , s = (Math.random() * (Math.pow(10, len) - 1)).toFixed(0)
      value = Array(len - s.length + 1).join('0') + s
    }else{
      value = SL.getObjectProperty(custVars, variable)
    }
  }
  return value
}

SL.getVars = function(variables, elm, evt){
  var ret = {}
  SL.each(variables, function(variable){
    ret[variable] = SL.getVar(variable, elm, evt)
  })
  return ret
}

// `replace(str, [elm], [target])`
// ---------------------
//
// Perform variable subtitutions substitute to a string where subtitions are
// specified in the form `"%foo%"`. Variables are lookup either in `SL.data.customVars`, or
// if the `elm` parameter is passed it, and the variable spec is of the form `"%this.tagName%"`, it
// is subsituted with the properties on `elm`, *i.e. `elm.tagName`.
//
// Parameters:
//
// - `str` - string to apply substitutions to
// - `elm`(optional) - object or element to use for substitutions of the form `%this.property%`
// - `target`(optional) - element to use for subsitution of the form `%target.property%`
// - `escapeHtml` (optional) - whether or not to escape substitutions for embedding in HTML
SL.replace = function(str, elm, evt, escapeHtml) {
  if (typeof str !== 'string') return str
  return str
    .replace(/%(.*?)%/g, function(m, variable){
      var val = SL.getVar(variable, elm, evt)
      if (val == null) {
        return SL.settings.undefinedVarsReturnEmpty ? '' : m; 
      } else {
        if (escapeHtml) {
          return SL.escapeForHtml(val);
        } else {
          return val;
        }
      }
    });
}

SL.escapeHtmlParams = function(fn){
  fn.escapeHtml = true
  return fn
}

// From a object literal of variable, generate a query string.
SL.searchVariables = function(vars, elm, evt){
  if (!vars || vars.length === 0) return ''
  var qsParts = []
  for (var i = 0, len = vars.length; i < len; i++){
    var varr = vars[i]
      , value = SL.getVar(varr, elm, evt)
       qsParts.push(varr + '=' + escape(value))
  }
  return '?' + qsParts.join('&')
}

// Fire all the trigger actions associated with a rule.
SL.fireRule = function(rule, elm, evt){
  var triggers = rule.trigger
  if (!triggers) return
  for (var i = 0, len = triggers.length; i < len; i++){
    var trig = triggers[i]
    SL.execute(trig, elm, evt)
  }
  if (SL.contains(SL.fireOnceEvents, rule.event))
    rule.expired = true
}

// `isLinked(elm)`
// ---------------
//
// Returns whether the element is either an anchor or a descendant of an anchor or contains an anchor.
//
// `elm` - the element to test
SL.isLinked = function(elm){
  for (var cur = elm; cur; cur = cur.parentNode) {
    if (SL.isLinkTag(cur))
      return true
  }
  return false
}

// Fire a page load event. `type` is one of `pagetop`, `pagebottom`, `domready` and
// `windowload`.
SL.firePageLoadEvent = function(type) {
  var location = document.location
  var evt = {type: type, target: location}
  var rules = SL.pageLoadRules
  var handlers = SL.evtHandlers[evt.type];
  for (var i = rules.length; i--;){
    var rule = rules[i]
    if (SL.ruleMatches(rule, evt, location)){
      SL.notify('Rule "' + rule.name + '" fired.', 1)
      SL.fireRule(rule, location, evt)
    }
  }
  for (var id in SL.tools){
    if (SL.tools.hasOwnProperty(id)) {
      var tool = SL.tools[id]
      if (tool.endPLPhase) {
        tool.endPLPhase(type)
      }
    }
  }
  if (handlers){
    SL.each(handlers, function(cb){
      cb(evt)
    })
  }
}

// `track(id)`
// -----------
//
// Directly fire a direct call rule by id.
SL.track = function(ruleName) {
  // trim extra spaces that may exist at beginning or end of string
  ruleName = ruleName.replace(/^\s*/,"").replace(/\s*$/,"")
  for (var i = 0; i < SL.directCallRules.length; i++){
    var rule = SL.directCallRules[i]
    if (rule.name === ruleName){
      SL.notify('Direct call Rule "' + ruleName + '" fired.', 1)
      SL.fireRule(rule, location, {type: ruleName})
      return
    }
  }
  SL.notify('Direct call Rule "' + ruleName + '" not found.', 1)
}

// `basePath()`
// ------------
//
// Returns the base path of all Satellite generated assets.
SL.basePath = function(){
  if (SL.data.host)
    return (document.location.protocol === 'https:' ?
    'https://' + SL.data.host.https :
    'http://' + SL.data.host.http) + '/'
  else
    return this.settings.basePath
}

// `setLocation(url)`
// ------------------
//
// Set the current URL
//
// - `url` - the URL to set to
SL.setLocation = function(url){
  window.location = url
}

SL.parseQueryParams = function(str){
  var URIDecode = function (str) {
    var result = str
    try {
      result = decodeURIComponent(str)
    } catch(err) {}

    return result
  }

  if (str === '' || SL.isString(str) === false) return {}
  if (str.indexOf('?') === 0) {
    str = str.substring(1)
  }
  var ret = {}
    , pairs = str.split('&')
  SL.each(pairs, function(pair){
    pair = pair.split('=')
    if (!pair[1]) {
      return
    }
    ret[URIDecode(pair[0])] = URIDecode(pair[1])
  })
  return ret
}

SL.getCaseSensitivityQueryParamsMap = function (str) {
  var normal = SL.parseQueryParams(str)
  var insensitive = {}

  for (var prop in normal)
    if (normal.hasOwnProperty(prop))
      insensitive[prop.toLowerCase()] = normal[prop]

  return {
    normal: normal,
    caseInsensitive: insensitive
  }
}

SL.updateQueryParams = function(){
  SL.QueryParams = SL.getCaseSensitivityQueryParamsMap(window.location.search)
}
SL.updateQueryParams()

SL.getQueryParam = function(key){
  return SL.QueryParams.normal[key]
}

SL.getQueryParamCaseInsensitive = function(key){
  return SL.QueryParams.caseInsensitive[key.toLowerCase()]
}

SL.encodeObjectToURI = function(obj) {
  if (SL.isObject(obj) === false) {
    return ''
  }

  var uri = []
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      uri.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }
  }

  return uri.join('&')
}

SL.readCookie = function(name) {
  var nameEQ = name + "="
  var parts = document.cookie.split(';')
  for(var i=0;i < parts.length;i++) {
    var c = parts[i]
    while (c.charAt(0)==' '){
      c = c.substring(1,c.length)
    }
    if (c.indexOf(nameEQ) === 0){
      return c.substring(nameEQ.length,c.length)
    }
  }
  return undefined
}

SL.setCookie = function(name,value,days) {
  var expires
  if (days) {
    var date = new Date()
    date.setTime(date.getTime()+(days*24*60*60*1000))
    expires = "; expires="+date.toGMTString()
  }
  else{
    expires = ""
  }
  document.cookie = name+"="+value+expires+"; path=/"
}

SL.removeCookie = function(name) {
  SL.setCookie(name,"",-1);
}


SL.getElementProperty = function(elm, prop){
  if (prop.charAt(0) === '@'){
    var special = SL.specialProperties[prop.substring(1)]
    if (special){
      return special(elm)
    }
  }
  if (prop === 'innerText'){
    return SL.text(elm)
  }
  if (prop in elm)
    return elm[prop]
  return elm.getAttribute ? elm.getAttribute(prop) : undefined
}

SL.propertiesMatch = function(property, elm){
  if (property){
    for (var prop in property){
      if (property.hasOwnProperty(prop)) {
        var target = property[prop]
        var value = SL.getElementProperty(elm, prop)
        if (typeof target === 'string' && target !== value) return false
        if (target instanceof RegExp && !target.test(value)) return false
      }
    }
  }
  return true
}

// from http://www.quirksmode.org/js/events_properties.html
SL.isRightClick = function(e){
  var ret
  if (e.which){
    ret = e.which == 3
  }else if (e.button){
    ret = e.button == 2
  }
  return ret
}

// `ruleMatches(rule, evt, elm, eventEntriesFound)`
// ------------------------------------------------
//
// - `rule` - the rules to match
// - `evt` - the event triggered
// - `elm` - the element the event was on
// - `eventEntriesFound` - number of rules matched so far
SL.ruleMatches = function(rule, evt, elm, eventEntriesFound){
  var cnd = rule.condition
  var cnds = rule.conditions
  var property = rule.property
  var eventType = evt.type
  var matchValue = rule.value
  var target = evt.target || evt.srcElement
  var initialTarget = elm === target

  if (rule.event !== eventType && (rule.event !== 'custom' || rule.customEvent !== eventType)) return false
  if (!SL.ruleInScope(rule)) return false
  // ignore all right-clicks
  if (rule.event === 'click' && SL.isRightClick(evt)){
    return false
  }
  if (rule.isDefault && eventEntriesFound > 0)
    return false
  if (rule.expired) return false
  if (eventType === 'inview' && evt.inviewDelay !== rule.inviewDelay){
    return false
  }
  if (!(initialTarget ||
          ((rule.bubbleFireIfParent !== false) && (eventEntriesFound === 0 || (rule.bubbleFireIfChildFired !== false))))) return false

  if (rule.selector && !SL.matchesCss(rule.selector, elm)) return false
  if (!SL.propertiesMatch(property, elm)) return false
  if (matchValue != null){
    if (typeof matchValue === 'string'){
      if (matchValue !== elm.value)
        return false
    }else if (!matchValue.test(elm.value))
      return false
  }
  if (cnd){
    try{
      if (!cnd.call(elm, evt, target)){
        SL.notify('Condition for rule "' + rule.name + '" not met.', 1)
        return false
      }
    }catch(e){
      SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1)
      return false
    }
  }
  if (cnds){
    var failed = SL.find(cnds, function(cnd){
      try{
        return !cnd.call(elm, evt, target)
      }catch(e){
        SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1)
        return true
      }
    })
    if (failed){
      SL.notify('Condition ' + failed.toString() + ' for rule "' + rule.name + '" not met.', 1)
      return false
    }
  }
  return true
}


SL.evtHandlers = {}
// `bindEvent(evtName, callback)`
// ------------------------------
//
// Register for an event by name. Alias: `whenEvent`.
//
// `evtName` - the name of the event
// `callback` - the function to be called when even fires
SL.bindEvent = function(evtName, callback){
  var handlers = SL.evtHandlers
  if (!handlers[evtName])
    handlers[evtName] = []
  handlers[evtName].push(callback)
}
SL.whenEvent = SL.bindEvent

// `unbindEvent(evtName, callback)
// -------------------------------
//
// Unregister for an event by name.
//
// `evtName` - the name of the event
// `callback` - the function to unregister
SL.unbindEvent = function(evtName, callback){
  var handlers = SL.evtHandlers
  if (!handlers[evtName]) return
  var idx = SL.indexOf(handlers[evtName], callback)
  handlers[evtName].splice(idx, 1)
}

SL.bindEventOnce = function(evtName, callback){
  var wrapped = function(){
    SL.unbindEvent(evtName, wrapped)
    callback.apply(null, arguments)
  }
  SL.bindEvent(evtName, wrapped)
}

// See <http://tobyho.com/2014/02/26/attribute-only-valid-on-v-image/>
SL.isVMLPoisoned = function(elm){
  if (!elm) return false
  try{
    elm.nodeName
  }catch(e){
    if (e.message === 'Attribute only valid on v:image'){
      return true
    }
  }
  return false
}

SL.handleEvent = function(evt) {
  // Don't process an event twice.
  if (SL.$data(evt, 'eventProcessed')) return

  var eventType = evt.type.toLowerCase()
    , target = evt.target || evt.srcElement
    , rulesMatched = 0
    , rules = SL.rules
    , tools = SL.tools
    , handlers = SL.evtHandlers[evt.type]

  if (SL.isVMLPoisoned(target)){
    SL.notify('detected ' + eventType + ' on poisoned VML element, skipping.', 1)
    return
  }

  if (handlers){
    SL.each(handlers, function(cb){
      cb(evt)
    })
  }

  var nodeName = target && target.nodeName;
  if (nodeName)
    SL.notify("detected " + eventType + " on " + target.nodeName, 1)
  else
    SL.notify("detected " + eventType, 1)

  for (var curr = target; curr; curr = curr.parentNode) {
    var bubbleStop = false
    SL.each(rules, function(rule){
      if (SL.ruleMatches(rule, evt, curr, rulesMatched)){
        SL.notify('Rule "' + rule.name + '" fired.', 1)
        SL.fireRule(rule, curr, evt)
        rulesMatched++
        if (rule.bubbleStop)
          bubbleStop = true
      }
    })
    if (bubbleStop) break
  }


  SL.$data(evt, 'eventProcessed', true)
}

// `onEvent(evt)`
// ------------
//
// Handle an event, whether it is a DOM event or a synthetic event.
//
// - `evt` - the event triggered
SL.onEvent = document.querySelectorAll ?
function(evt){ SL.handleEvent(evt) } :
(function(){
  var q = []
  var onEvent = function(evt) {
    if (evt.selector)
      q.push(evt)
    else
      SL.handleEvent(evt)
  }
  onEvent.pendingEvents = q
  return onEvent
})()

// `fireEvent(eventType, eventTarget)`
// ------------
//
// Conviniently programmatically fire an event.
//
// - `eventType` - the type of event
// - `eventTarget` - the target object that fired the event
SL.fireEvent = function(type, target){
  SL.onEvent({type: type, target: target})
}

// `registerEvents(elm, events)`
// -----------------------------
//
// Register events for an element using `track` as the callback
//
// - `elm` - the element to listen for events on
// - `events` - an array of event types (strings)
SL.registerEvents = function(elm, events){
  for (var i = events.length - 1; i >= 0; i--){
    var event = events[i]
    if (!SL.$data(elm, event + '.tracked')){
      SL.addEventHandler(elm, event, SL.onEvent)
      SL.$data(elm, event + '.tracked', true)
    }
  }
}

// `registerEventsForTags(tags, events)`
// -------------------------------------
//
// Register events for all element that have the specified tags
//
// - `tags` - an array of tags to match for (strings)
// - `events` - an array of event types (strings)
SL.registerEventsForTags = function(tags, events){
  for (var i = tags.length - 1; i >= 0; i--){
    var tag = tags[i]
    var elms = document.getElementsByTagName(tag);
    for (var j = elms.length - 1; j >= 0; j--)
      SL.registerEvents(elms[j], events)
  }
}

// `setListeners()`
// ----------------
//
// Set events for `document`
SL.setListeners = function() {
  var events = ['click', 'submit'];

  SL.each(SL.rules, function(rule) {
    if (rule.event === 'custom' &&
        rule.hasOwnProperty('customEvent') &&
        !SL.contains(events, rule.customEvent)) {
      events.push(rule.customEvent);
    }
  });

  SL.registerEvents(document, events);
};

// `getUniqueRuleEvents()`
// -----------------------
//
// Returns an array of unique event types for which event-based rules
// have been configured.
SL.getUniqueRuleEvents = function() {
  if (!SL._uniqueRuleEvents) {
    SL._uniqueRuleEvents = [];
    SL.each(SL.rules, function(rule) {
      if (SL.indexOf(SL._uniqueRuleEvents, rule.event) === -1) {
        SL._uniqueRuleEvents.push(rule.event);
      }
    });
  }

  return SL._uniqueRuleEvents;
};

// `setFormListeners()`
// --------------------
//
// Listen for events on form elements. Listeners for these events are added directly to form
// elements since they don't bubble (though some do in modern browsers).
SL.setFormListeners = function() {
  if (!SL._relevantFormEvents) {
    var formEvents = [
      "change",
      "focus",
      "blur",
      // Why do we add event listeners directly to form elements for the keypress event? The
      // keypress event bubbles so we could add it directly to document. Note that keypress
      // events can be triggered when any element has focus which means that by adding the event
      // listener directly to form elements we're filtering any keypress events from other elements.
      // Is this the intention? If so, we could still add a single listener directly to document
      // and filter on event.target.nodeName.
      "keypress"
    ];

    SL._relevantFormEvents = SL.filter(SL.getUniqueRuleEvents(), function(event) {
      return SL.indexOf(formEvents, event) !== -1;
    });
  }

  if (SL._relevantFormEvents.length) {
    SL.registerEventsForTags(['input', 'select', 'textarea', 'button'], SL._relevantFormEvents);
  }
};

// `setVideoListeners()`
// ---------------------
//
// Listen for events on video elements. Listeners for these events are added directly to form
// elements since they don't bubble.
SL.setVideoListeners = function() {
  if (!SL._relevantVideoEvents) {
    var videoEvents = [
      "play",
      "pause",
      "ended",
      "volumechange",
      "stalled",
      "loadeddata"
    ];

    SL._relevantVideoEvents = SL.filter(SL.getUniqueRuleEvents(), function(event) {
      return SL.indexOf(videoEvents, event) !== -1;
    });
  }

  if (SL._relevantVideoEvents.length) {
    SL.registerEventsForTags(['video'], SL._relevantVideoEvents);
  }
};

// `readStoredSetting(name)`
// ==================
//
// Reads the cookie of the given name.
// Stolen from <http://www.quirksmode.org/js/cookies.html>
SL.readStoredSetting = function(name) {
  // When local storage is disabled on Safari, the mere act of referencing window.localStorage
  // throws an error. For this reason, referencing window.localStorage without being inside
  // a try-catch should be avoided.
  try{
    name = 'sdsat_' + name
    return window.localStorage.getItem(name)
  }catch(e){
    SL.notify('Cannot read stored setting from localStorage: ' + e.message, 2)
    return null
  }
}

// Read satelliteUtilsCookie values to see about getting bookmarklet running / settings
SL.loadStoredSettings = function () {
  var debug = SL.readStoredSetting('debug')
    , hideActivity = SL.readStoredSetting('hide_activity')
  if (debug)
    SL.settings.notifications = debug === 'true'
  if (hideActivity)
    SL.settings.hideActivity = hideActivity === 'true'
}

SL.isRuleActive = function(rule, date){
  var schd = rule.schedule
  if (!schd) return true

  var utc = schd.utc
    , getDate = utc ? 'getUTCDate' : 'getDate'
    , getDay = utc ? 'getUTCDay' : 'getDay'
    , getFullYear = utc ? 'getUTCFullYear' : 'getFullYear'
    , getMonth = utc ? 'getUTCMonth' : 'getMonth'
    , getHours = utc ? 'getUTCHours' : 'getHours'
    , getMinutes = utc ? 'getUTCMinutes' : 'getMinutes'
    , setHours = utc ? 'setUTCHours' : 'setHours'
    , setMinutes = utc ? 'setUTCMinutes' : 'setMinutes'
    , setDate = utc ? 'setUTCDate' : 'setDate'

  date = date || new Date()

  function dayDiff(one, other){
    other = modifyDate(other, {
      hour: one[getHours](),
      minute: one[getMinutes]()
    })
    return Math.floor(Math.abs((one.getTime() - other.getTime()) / (1000 * 60 * 60 * 24)))
  }
  function monthDiff(one, other){
    function months(date){
      return date[getFullYear]() * 12 + date[getMonth]()
    }
    return Math.abs(months(one) - months(other))
  }
  function modifyDate(date, fields){
    var retval = new Date(date.getTime())
    for (var field in fields){
      if (fields.hasOwnProperty(field)) {
        var val = fields[field]
        switch(field){
          case 'hour':
            retval[setHours](val)
            break
          case 'minute':
            retval[setMinutes](val)
            break
          case 'date':
            retval[setDate](val)
            break
        }
      }
    }
    return retval
  }
  function timeGreaterThan(one, other){
    var h1 = one[getHours]()
      , m1 = one[getMinutes]()
      , h2 = other[getHours]()
      , m2 = other[getMinutes]()
    return (h1 * 60 + m1) > (h2 * 60 + m2)
  }
  function timeLessThan(one, other){
    var h1 = one[getHours]()
      , m1 = one[getMinutes]()
      , h2 = other[getHours]()
      , m2 = other[getMinutes]()
    return (h1 * 60 + m1) < (h2 * 60 + m2)
  }


  if (schd.repeat){
    if (timeGreaterThan(schd.start, date)) return false
    if (timeLessThan(schd.end, date)) return false
    if (date < schd.start) return false
    if (schd.endRepeat && date >= schd.endRepeat) return false
    if (schd.repeat === 'daily'){
      if (schd.repeatEvery){
        var dd = dayDiff(schd.start, date)
        if (dd % schd.repeatEvery !== 0) return false
      }
    }else if (schd.repeat === 'weekly'){
      if (schd.days){
        if (!SL.contains(schd.days, date[getDay]())) return false
      }else
        if (schd.start[getDay]() !== date[getDay]()) return false
      if (schd.repeatEvery){
        var diff = dayDiff(schd.start, date)
        if (diff % (7 * schd.repeatEvery) !== 0)
          return false
      }
    }else if (schd.repeat === 'monthly'){
      if (schd.repeatEvery){
        var md = monthDiff(schd.start, date)
        if (md % schd.repeatEvery !== 0) return false
      }
      if (schd.nthWeek && schd.mthDay){
        if (schd.mthDay !== date[getDay]()) return false
        var nthWeek = Math.floor((date[getDate]() - date[getDay]() + 1) / 7)
        if (schd.nthWeek !== nthWeek) return false
      }else
        if (schd.start[getDate]() !== date[getDate]()) return false
    }else if (schd.repeat === 'yearly'){
      if (schd.start[getMonth]() !== date[getMonth]()) return false
      if (schd.start[getDate]() !== date[getDate]()) return false
      if (schd.repeatEvery){
        var diff = Math.abs(schd.start[getFullYear]() - date[getFullYear]())
        if (diff % schd.repeatEvery !== 0) return false
      }
    }
  }else{
    if (schd.start > date) return false
    if (schd.end < date) return false
  }
  return true
}

SL.isOutboundLink = function(elm){
  if (!elm.getAttribute('href')) return false
  var hostname = elm.hostname
  var href = elm.href
  var protocol = elm.protocol
  if (protocol !== 'http:' && protocol !== 'https:') return false
  var isMyDomain = SL.any(SL.settings.domainList, function(domain){
    return SL.isSubdomainOf(hostname, domain)
  })
  if (isMyDomain) return false
  return hostname !== location.hostname
}

SL.isLinkerLink = function(elm){
  if (!elm.getAttribute || !elm.getAttribute('href')) return false
  return SL.hasMultipleDomains() &&
    elm.hostname != location.hostname &&
    !elm.href.match(/^javascript/i) &&
    !SL.isOutboundLink(elm)
}

SL.isSubdomainOf = function(sub, root){
  if (sub === root) return true
  var idx = sub.length - root.length
  if (idx > 0)
    return SL.equalsIgnoreCase(sub.substring(idx), root)
  return false
}

// `getVisitorId()`
// ------------------------------------------------
//
// Returns the library instance associated to a VisitorId tool if the tool exists
//
SL.getVisitorId = function(){
  var visitorIdTools = SL.getToolsByType('visitor_id')
  if (visitorIdTools.length === 0) {
    return null;
  }

  return visitorIdTools[0].getInstance()
}

SL.URI = function(){
  var ret = document.location.pathname + document.location.search
  if (SL.settings.forceLowerCase){
    ret = ret.toLowerCase()
  }
  return ret
}

SL.URL = function(){
  var ret = document.location.href
  if (SL.settings.forceLowerCase){
    ret = ret.toLowerCase()
  }
  return ret
}

// Filter `SL.rules` down to only the once relevant for the current page.
SL.filterRules = function(){
  function matches(rule){
    if (!SL.isRuleActive(rule)) return false
    return true
  }

  SL.rules = SL.filter(SL.rules, matches)
  SL.pageLoadRules = SL.filter(SL.pageLoadRules, matches)

}

SL.ruleInScope = function(rule, location){
  location = location || document.location
  var scope = rule.scope
  if (!scope) return true
  var URI = scope.URI
  var subdomains = scope.subdomains
  var domains = scope.domains
  var protocols = scope.protocols
  var hashes = scope.hashes

  if (URI && includeExcludeFails(URI, location.pathname + location.search)) return false
  if (subdomains && includeExcludeFails(subdomains, location.hostname)) return false
  if (domains && matchFails(domains, location.hostname)) return false
  if (protocols && matchFails(protocols, location.protocol)) return false
  if (hashes && includeExcludeFails(hashes, location.hash)) return false

  function includeExcludeFails(matcher, matchee){
    var include = matcher.include
    var exclude = matcher.exclude
    if (include && matchFails(include, matchee)) return true
    if (exclude){
      if (SL.isString(exclude) && exclude === matchee)
        return true
      if (SL.isArray(exclude) && SL.any(exclude, matches))
        return true
      if (SL.isRegex(exclude) && matches(exclude))
        return true
    }

    return false

    function matches(regex){
      return matchee.match(regex)
    }
  }

  function matchFails(matcher, matchee){
    if (SL.isString(matcher) && matcher !== matchee)
      return true
    if (SL.isArray(matcher) && !SL.any(matcher, matches))
      return true
    if (SL.isRegex(matcher) && !matches(matcher))
      return true
    return false

    function matches(regex){
      return matchee.match(regex)
    }

  }

  return true
}


// Run background tasks once. This will get invoked periodically.
SL.backgroundTasks = function(){
  var start = +new Date()
  SL.setFormListeners()
  SL.setVideoListeners()
  SL.loadStoredSettings()
  SL.registerNewElementsForDynamicRules()
  SL.eventEmitterBackgroundTasks()

  // Trigger condition events
  //SL.onEvent({type: 'condition', target: 'document'})
  var end = +new Date()
  // We want to keep an eye on the execution time here.
  // If it gets to around 50ms for any customer site,
  // we want to either optimize or start using a task queue
  //SL.notify('Background tasks executed in ' + (end - start) + 'ms', 3)
}



// For rules that poll for dynamically injected elements on the page,
// find them and register events for them.
SL.registerNewElementsForDynamicRules = function(){
  function cssQuery(selector, callback){
    var hit = cssQuery.cache[selector]
    if (hit){
      return callback(hit)
    }else{
      SL.cssQuery(selector, function(elms){
        cssQuery.cache[selector] = elms
        callback(elms)
      })
    }
  }
  cssQuery.cache = {}


  SL.each(SL.dynamicRules, function(rule){
    cssQuery(rule.selector, function(elms){
      SL.each(elms, function(elm){
        var event = rule.event === 'custom' ? rule.customEvent : rule.event;
        if (SL.$data(elm, 'dynamicRules.seen.' + event)) return
        SL.$data(elm, 'dynamicRules.seen.' + event, true)
        if (SL.propertiesMatch(rule.property, elm)){
          SL.registerEvents(elm, [event])
        }
      })
    })
  })
}

// If the browser doesn't support CSS selector queries, we have to include one.
SL.ensureCSSSelector = function(){
  if (document.querySelectorAll){
    SL.hasSelector = true
    return
  }
  SL.loadingSizzle = true
  SL.sizzleQueue = []
  SL.loadScript(SL.basePath() + 'selector.js', function(){
    if (!SL.Sizzle){
      SL.logError(new Error('Failed to load selector.js'))
      return
    }
    var pending = SL.onEvent.pendingEvents
    SL.each(pending, function(evt){
      SL.handleEvent(evt)
    }, this)
    SL.onEvent = SL.handleEvent
    SL.hasSelector = true
    ;delete SL.loadingSizzle
    SL.each(SL.sizzleQueue, function(item){
      SL.cssQuery(item[0], item[1])
    })
    ;delete SL.sizzleQueue

  })
}

// Error Handling

SL.errors = []
SL.logError = function(err){
  SL.errors.push(err)
  SL.notify(err.name + ' - ' + err.message, 5)
}

// `pageBottom()`
// --------------
//
// The function is to be called by the web page using an script tag like so:
//
//     <script>_satellite.pageBottom()</script>
//
// just before the `</body>` tag.
SL.pageBottom = function(){
  if (!SL.initialized) return
  SL.pageBottomFired = true
  SL.firePageLoadEvent('pagebottom')
}

// This allows Rover to configure the browser to use the staging library instead.
SL.stagingLibraryOverride = function(){
  /*jshint evil:true */
  var libraryOverride = SL.readStoredSetting('stagingLibrary') === 'true'
  if (libraryOverride){ // allow Rover to override the library to staging
    var scripts = document.getElementsByTagName('script')
      , regex = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/
      , regexStaging = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/
      , match
      , matchStaging
      , src
    for (var i = 0, len = scripts.length; i < len; i++){
      src = scripts[i].getAttribute('src')
      if (!src) continue
      if (!match) match = src.match(regex)
      if (!matchStaging) matchStaging = src.match(regexStaging)
      if (matchStaging) break
    }
    if (match && !matchStaging){
      var stagingURL = match[1] + 'satelliteLib-' + match[2] + '-staging.js'
      if (document.write) {
        document.write('<script src="' + stagingURL + '"></script>')
      } else {
        var s = document.createElement('script')
        s.src = stagingURL
        document.head.appendChild(s)
      }
      return true
    }
  }
  return false
}

SL.checkAsyncInclude = function(){
  if (window.satellite_asyncLoad)
    SL.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5)
}

SL.hasMultipleDomains = function(){
  return !!SL.settings.domainList && SL.settings.domainList.length > 1
}

SL.handleOverrides = function(){
  if (Overrides){
    for (var key in Overrides){
      if (Overrides.hasOwnProperty(key)){
        SL.data[key] = Overrides[key]
      }
    }
  }
}

SL.privacyManagerParams = function(){
  var params = {}
  SL.extend(params, SL.settings.privacyManagement)
  var analyticsTools = []
  for (var key in SL.tools){
    if (SL.tools.hasOwnProperty(key)) {
      var tool = SL.tools[key]
      var settings = tool.settings
      if (!settings) continue
      if (settings.engine === 'sc'){
        analyticsTools.push(tool)
      }
    }
  }
  var analyticsTrackingServers = SL.filter(SL.map(analyticsTools, function(tool){
    return tool.getTrackingServer()
  }), function(s){ return s != null })
  params.adobeAnalyticsTrackingServers = analyticsTrackingServers
  var substitutable = [
    'bannerText',
    'headline',
    'introductoryText',
    'customCSS'
  ]
  for (var i = 0; i < substitutable.length; i++){
    var prop = substitutable[i]
    var spec = params[prop]
    if (!spec) continue
    if (spec.type === 'text'){
      params[prop] = spec.value
    }else if (spec.type === 'data'){
      params[prop] = SL.getVar(spec.value)
    }else{
      throw new Error('Invalid type: ' + spec.type)
    }
  }
  return params
}

SL.prepareLoadPrivacyManager = function(){
  SL.addEventHandler(window, 'load', function(){
    loadWhenAllSCToolsLoaded(SL.loadPrivacyManager)
  })

  function loadWhenAllSCToolsLoaded(callback){
    var scTools = SL.filter(SL.values(SL.tools), function(tool){
      return tool.settings && tool.settings.engine === 'sc'
    })
    if (scTools.length === 0){
      return callback()
    }
    var numLoaded = 0
    SL.each(scTools, function(tool){
      SL.bindEvent(tool.id + '.load', onLoad)
    })
    var tid = setTimeout(onTimeout, 5000)

    function onLoad(){
      numLoaded++
      if (numLoaded === scTools.length){
        cleanUp()
        clearTimeout(tid)
        callback()
      }
    }

    function cleanUp(){
      SL.each(scTools, function(tool){
        SL.unbindEvent(tool.id + '.load', onLoad)
      })
    }

    function onTimeout(){
      cleanUp()
      callback()
    }
  }

}

// `loadPrivacyManager()`
// ----------------------
//
// Initialize privacy manager
SL.loadPrivacyManager = function(){
  var scriptUrl = SL.basePath() + 'privacy_manager.js'
  SL.loadScript(scriptUrl, function(){
    var pm = SL.privacyManager
    pm.configure(SL.privacyManagerParams())
    pm.openIfRequired()
  })
}

// `init()`
// --------
//
// Initialize Satellite.
//
// - `settings` - all the settings that comprising a library.
SL.init = function(settings) {
  if (SL.stagingLibraryOverride())
    return

  SL.configurationSettings = settings
  var tools = settings.tools
  ;delete settings.tools
  for (var key in settings){
    if (settings.hasOwnProperty(key)){
      SL[key] = settings[key]
    }
  }

  if(SL.data.customVars === undefined)
    SL.data.customVars = {}

  SL.data.queryParams = SL.QueryParams.normal

  SL.handleOverrides()

  SL.detectBrowserInfo()

  if (SL.trackVisitorInfo)
    SL.trackVisitorInfo()

  SL.loadStoredSettings()
  SL.Logger.setOutputState(SL.settings.notifications)

  SL.checkAsyncInclude()

  SL.ensureCSSSelector()

  SL.filterRules()
  SL.dynamicRules = SL.filter(SL.rules, function(rule){
    return rule.eventHandlerOnElement
  })

  SL.tools = SL.initTools(tools)
  SL.initEventEmitters()

  SL.firePageLoadEvent('aftertoolinit')

  if (SL.settings.privacyManagement){
    SL.prepareLoadPrivacyManager()
  }

  if (SL.hasSelector)
    SL.domReady(SL.eventEmitterBackgroundTasks)

  SL.setListeners()

  // Setup background tasks
  SL.domReady(function() {
    SL.poll(
      function() { SL.backgroundTasks() },
      SL.settings.recheckEvery || 3000
    )
  })

  // Setup page load events
  SL.domReady(function(){
    SL.domReadyFired = true
    if (!SL.pageBottomFired)
      SL.pageBottom()

    SL.firePageLoadEvent('domready')
  })

  SL.addEventHandler(window, 'load', function(){
    SL.firePageLoadEvent('windowload')
  })

  SL.firePageLoadEvent('pagetop')
  SL.initialized = true
}

SL.pageLoadPhases = ['aftertoolinit', 'pagetop', 'pagebottom', 'domready', 'windowload']

SL.loadEventBefore = function(one, other){
  return SL.indexOf(SL.pageLoadPhases, one) <= SL.indexOf(SL.pageLoadPhases, other)
}

SL.flushPendingCalls = function(tool){
  if (tool.pending){
    SL.each(tool.pending, function(call){
      var cmd = call[0]
        , elm = call[1]
        , evt = call[2]
        , args = call[3]
      if (cmd in tool)
        tool[cmd].apply(tool, [elm, evt].concat(args))
      else if (tool.emit)
        tool.emit(cmd, elm, evt, args)
      else
        SL.notify('Failed to trigger ' + cmd +
          ' for tool ' + tool.id, 1)
    })
    ;delete tool.pending
  }
}

// setDebug(debug)
// --------------
//
// Activate or deactivate debug mode - within which
// log statements will be printed to the JS console.
//
// - `debug` - a boolean indicating whether debug mode
//   should be turned on.
SL.setDebug = function(debug){
  // When local storage is disabled on Safari, the mere act of referencing window.localStorage
  // throws an error. For this reason, referencing window.localStorage without being inside
  // a try-catch should be avoided.
  try {
    window.localStorage.setItem('sdsat_debug', debug)
  } catch (e) {
    SL.notify('Cannot set debug mode: ' + e.message, 2)
  };
}

SL.getUserAgent = function() {
  return navigator.userAgent;
};

SL.detectBrowserInfo = function(){
  // Based on <http://jsbin.com/inubez/3/>
  function matcher(regexs){
    return function(userAgent){
      for (var key in regexs){
        if (regexs.hasOwnProperty(key)) {          
          var regex = regexs[key];
          var match = regex.test(userAgent);
          if (match) return key;
        }
      }
      return "Unknown";
    };
  }

  // The order in which these regular expressions are evaluated is important.

  var getBrowser = matcher({
    "IE Edge Mobile": /Windows Phone.*Edge/,
    "IE Edge": /Edge/,
    OmniWeb: /OmniWeb/,
    "Opera Mini": /Opera Mini/,
    "Opera Mobile": /Opera Mobi/,
    Opera: /Opera/,
    Chrome: /Chrome|CriOS|CrMo/,
    Firefox: /Firefox|FxiOS/,
    "IE Mobile": /IEMobile/,
    IE: /MSIE|Trident/,
    "Mobile Safari": /Mobile(\/[0-9A-z]+)? Safari/,
    Safari: /Safari/
  });

  var getOS = matcher({
    Blackberry: /BlackBerry|BB10/,
    "Symbian OS": /Symbian|SymbOS/,
    Maemo: /Maemo/,
    Android: /Android/,
    Linux: / Linux /,
    Unix: /FreeBSD|OpenBSD|CrOS/,
    Windows: /[\( ]Windows /,
    iOS: /iPhone|iPad|iPod/,
    MacOS: /Macintosh;/
  });

  var getDeviceType = matcher({
    // This is not entirely accurate. A few old Samsung, Motorola, and Sony Ericsson phones
    // will match but the majority and best guess is Nokia. Also, Nokia makes Windows phones and
    // for those we will make it match Windows Phone and not Nokia.
    Nokia: /Symbian|SymbOS|Maemo/,
    "Windows Phone": /Windows Phone/,
    Blackberry: /BlackBerry|BB10/,
    Android: /Android/,
    iPad: /iPad/,
    iPod: /iPod/,
    iPhone: /iPhone/,
    Desktop: /.*/
  });

  var userAgent = SL.getUserAgent();
  SL.browserInfo = {
    browser: getBrowser(userAgent)
    , os: getOS(userAgent)
    , deviceType: getDeviceType(userAgent)
  }
}

SL.isHttps = function(){
  return 'https:' == document.location.protocol
}

SL.BaseTool = function(settings){
  this.settings = settings || {}

  this.forceLowerCase = SL.settings.forceLowerCase
  if ('forceLowerCase' in this.settings){
    this.forceLowerCase = this.settings.forceLowerCase
  }
}
SL.BaseTool.prototype = {
  triggerCommand: function(trig, elm, evt){
    var settings = this.settings || {}

    if (this.initialize && this.isQueueAvailable()){
      if (this.isQueueable(trig) && evt && SL.loadEventBefore(evt.type, settings.loadOn)){
        this.queueCommand(trig, elm, evt)
        return
      }
    }

    var cmd = trig.command
    var method = this['$' + cmd]
    var escapeHtml = method ? method.escapeHtml : false
    var args = SL.preprocessArguments(
      trig['arguments'],
      elm,
      evt,
      this.forceLowerCase,
      escapeHtml)

    if (method){
      method.apply(this, [elm, evt].concat(args))
    }else if (this.$missing$){
      this.$missing$(cmd, elm, evt, args)
    }else
      SL.notify('Failed to trigger ' + cmd +
        ' for tool ' + this.id, 1)

  },
  endPLPhase: function(pageLoadEvent){
    // override to handle end initialization
  },
  isQueueable: function(trig){
    // everything is queueable except `cancelToolInit`
    return trig.command !== 'cancelToolInit'
  },
  isQueueAvailable: function(){
    return !this.initialized && !this.initializing
  },
  flushQueue: function(){
    if (this.pending){
      SL.each(this.pending, function(args){
        this.triggerCommand.apply(this, args)
      }, this)
      this.pending = []
    }
  },
  queueCommand: function(trig, elm, evt){
    if (!this.pending)
      this.pending = []
    this.pending.push([trig, elm, evt])
  },
  $cancelToolInit: function(){
    this._cancelToolInit = true
  }
}

// Set Satellite to the global variable `_satellite`.
window._satellite = SL

// Orientation Change Event Emitter
// ================================
//
// The `orientationchange` event on mobile devices fire when the devices switchs between
// portrait and landscape modes. You can use `%event.orientation%` in your command arguments
// to evaluate to either `portrait` or `landscape`.
function OrientationChangeEventEmitter(){
  SL.addEventHandler(window, "orientationchange", OrientationChangeEventEmitter.orientationChange)
}
OrientationChangeEventEmitter.orientationChange = function (e) {
  var orientation = window.orientation === 0 ? 
    'portrait' : 
    'landscape'
  e.orientation = orientation
  SL.onEvent(e)
}
SL.availableEventEmitters.push(OrientationChangeEventEmitter)

// Facebook Event Emitter
// ======================
//
// Will track `edge.create`, `edge.remove` and `message.send` events from the Facebook
// Javascript API and emit `facebook.like`, `facebook.unlike` and `facebook.send` events
// respectively.

function FacebookEventEmitter(FB){
  this.delay = 250;
  this.FB = FB;

  SL.domReady(SL.bind(function () {
    SL.poll(SL.bind(this.initialize, this), this.delay, 8);
  }, this));
}

FacebookEventEmitter.prototype = {
  initialize: function() {
    this.FB = this.FB || window.FB;

    if (this.FB && this.FB.Event && this.FB.Event.subscribe) {
      this.bind();
      return true;
    }
  },

  bind: function(){
    this.FB.Event.subscribe('edge.create', function() {
      SL.notify("tracking a facebook like", 1)
      SL.onEvent({type: 'facebook.like', target: document})
    });

    this.FB.Event.subscribe('edge.remove', function() {
      SL.notify("tracking a facebook unlike", 1)
      SL.onEvent({type: 'facebook.unlike', target: document})
    });

    this.FB.Event.subscribe('message.send', function() {
      SL.notify("tracking a facebook share", 1)
      SL.onEvent({type: 'facebook.send', target: document})
    });
  }
}
SL.availableEventEmitters.push(FacebookEventEmitter);

// VideoPlayedEventEmitter
// =======================
//
// Emits the `videoplayed` event, given a specified percentage or duration, i.e. `videoplayed`
// is a parameterized event. A rule looks like this
//
//      {
//          name: "Video 10% complete",
//          event: "videoplayed(10%)",
//          selector: "#video",
//          trigger: [
//              {
//                  tool: "ga",
//                  command: "trackEvent",
//                  arguments: [
//                      "video",
//                      "video 10% complete",
//                      "from: %URI%"
//                  ]
//              }
//          ]
//      }
//
// `10%` is in the paranthesis which indicates this rule will only fire when the 10%
// of the total length of the video has been played.
// You can also specifiy a duration in seconds, which looks like `videoplayed(8s)` - which
// stands for 8 seconds.

function VideoPlayedEventEmitter(){
  this.rules = SL.filter(SL.rules, function(rule){
    return rule.event.substring(0, 11) === 'videoplayed'
  })
  this.eventHandler = SL.bind(this.onUpdateTime, this)
}
VideoPlayedEventEmitter.prototype = {
  backgroundTasks: function(){
    var eventHandler = this.eventHandler
    SL.each(this.rules, function(rule){
      SL.cssQuery(rule.selector || 'video', function(elms){
        SL.each(elms, function(elm){
          if (SL.$data(elm, 'videoplayed.tracked')) return
          SL.addEventHandler(elm, 'timeupdate', SL.throttle(eventHandler, 100))
          SL.$data(elm, 'videoplayed.tracked', true)
        })
      })
    })
  },
  evalRule: function(elm, rule){
    var eventType = rule.event
      , seekable = elm.seekable
      , startTime = seekable.start(0)
      , endTime = seekable.end(0)
      , currentTime = elm.currentTime
      , m = rule.event.match(/^videoplayed\(([0-9]+)([s%])\)$/)
    if (!m) return
    var unit = m[2]
      , amount = Number(m[1])
    var func = unit === '%' ?
      function(){
        return amount <= 
          100 * (currentTime - startTime) / (endTime - startTime)
      } :
      function(){
        return amount <= currentTime - startTime
      }
    if (!SL.$data(elm, eventType) && func()){
      SL.$data(elm, eventType, true)
      SL.onEvent({type: eventType, target: elm})
    }
  },
  onUpdateTime: function(e){
    var rules = this.rules
      , elm = e.target
    if (!elm.seekable || elm.seekable.length === 0) return
    for (var i = 0, len = rules.length; i < len; i++)
      this.evalRule(elm, rules[i])
  }
}
SL.availableEventEmitters.push(VideoPlayedEventEmitter)

// ElementExistsEventEmitter
// ==================
//
// Emits the `elementexists` event. The `elementexists` event fires when an element
// of a specified selector becomes into existance - either because it's in the page
// markup or dynamically injected later on. *Each rule only fires once.*

function ElementExistsEventEmitter() {
  this.rules = SL.filter(SL.rules, function(rule) {
    return rule.event === 'elementexists';
  });
}
ElementExistsEventEmitter.prototype.backgroundTasks = function() {
  SL.each(this.rules, function(rule) {
    SL.cssQuery(rule.selector, function(elms) {
      if (elms.length > 0){
        // This results in a bug: https://jira.corp.adobe.com/browse/DTM-6681
        // The fix was reverted due to: https://jira.corp.adobe.com/browse/DTM-7377
        var elm = elms[0];
        if (SL.$data(elm, 'elementexists.seen')) return;
        SL.$data(elm, 'elementexists.seen', true);
        SL.onEvent({type: 'elementexists', target: elm});
      }
    })
  })
}

SL.availableEventEmitters.push(ElementExistsEventEmitter);

// Leave Event Emitter
// ============================
//
// The page leave is an event that is used to detect the moment when the
// browser's tab gets closed.
//

function LeaveEventEmitter() {
  if (SL.getToolsByType('nielsen').length > 0) {
    SL.domReady(SL.bind(this.initialize, this));
  }
}

LeaveEventEmitter.prototype = {
  obue: false,
  initialize: function() {
    this.attachCloseListeners();
  },
  obuePrevUnload: function() {},
  obuePrevBeforeUnload: function() {},
  newObueListener: function() {
    if (!this.obue) {
      this.obue = true;
      this.triggerBeacons();
    }
  },
  attachCloseListeners: function() {
    this.prevUnload = window.onunload;
    this.prevBeforeUnload = window.onbeforeunload;

    window.onunload = SL.bind(function(e) {
      if (this.prevUnload) {
        setTimeout(SL.bind(function() {
          this.prevUnload.call(window, e);
        }, this), 1);
      }
      this.newObueListener();
    }, this);
    window.onbeforeunload = SL.bind(function(e) {
      if (this.prevBeforeUnload) {
        setTimeout(SL.bind(function() {
          this.prevBeforeUnload.call(window, e);
        }, this), 1);
      }
      this.newObueListener();
    }, this);
  },
  triggerBeacons: function() {
    SL.fireEvent('leave', document);
  }
}
SL.availableEventEmitters.push(LeaveEventEmitter);

// Location Change Event Emitter
// =============================
//
// Will fire `locationchange` event whenever the browser location
// changes due to `hashchange`, `popstate`, `history.pushState()`,
// or `history.replaceState()`. 

function LocationChangeEventEmitter(){
  this.lastURL = SL.URL()
  this._fireIfURIChanged = SL.bind(this.fireIfURIChanged, this)
  this._onPopState = SL.bind(this.onPopState, this)
  this._onHashChange = SL.bind(this.onHashChange, this)
  this._pushState = SL.bind(this.pushState, this)
  this._replaceState = SL.bind(this.replaceState, this)
  this.initialize()
}

LocationChangeEventEmitter.prototype = {
  initialize: function(){
    this.setupHistoryAPI()
    this.setupHashChange()
  },

  fireIfURIChanged: function(){
    var URL = SL.URL()
    if (this.lastURL !== URL){
      this.fireEvent()
      this.lastURL = URL
    }
  },

  fireEvent: function(){
    SL.updateQueryParams()
    SL.onEvent({ type: 'locationchange', target: document })
  },

  setupSPASupport: function(){
    this.setupHistoryAPI()
    this.setupHashChange()
  },

  setupHistoryAPI: function(){
    var history = window.history
    if (history){
      if (history.pushState){
        this.originalPushState = history.pushState
        history.pushState = this._pushState
      }
      if (history.replaceState){
        this.originalReplaceState = history.replaceState
        history.replaceState = this._replaceState
      }
    }
    SL.addEventHandler(window, 'popstate', this._onPopState)
  },

  pushState: function(){
    var ret = this.originalPushState.apply(history, arguments)
    this.onPushState()
    return ret
  },

  replaceState: function(){
    var ret = this.originalReplaceState.apply(history, arguments)
    this.onReplaceState()
    return ret
  },

  setupHashChange: function(){
    SL.addEventHandler(window, 'hashchange', this._onHashChange)
  },

  onReplaceState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onPushState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onPopState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onHashChange: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  uninitialize: function(){
    this.cleanUpHistoryAPI()
    this.cleanUpHashChange()
  },

  cleanUpHistoryAPI: function(){
    if (history.pushState === this._pushState){
      history.pushState = this.originalPushState
    }
    if (history.replaceState === this._replaceState){
      history.replaceState = this.originalReplaceState
    }
    SL.removeEventHandler(window, 'popstate', this._onPopState)
  },

  cleanUpHashChange: function(){
    SL.removeEventHandler(window, 'hashchange', this._onHashChange)
  }

}

SL.availableEventEmitters.push(LocationChangeEventEmitter);

function DataElementChangeEmitter() {
  var rules = SL.filter(SL.rules, function(rule) {
    return rule.event.indexOf('dataelementchange') === 0;
  });

  this.dataElementsNames = SL.map(rules, function(rule) {
    var matchedSubstrings = rule.event.match(/dataelementchange\((.*)\)/i);
    return matchedSubstrings[1];
  }, this);

  this.initPolling();
}

// SL.stringify is not 100% compatible with JSON.stringify (for example JSON.stringify breaks
// whenever it encounters a cyclic reference). Since this check might become intensive,
// only for this case we would prefer using JSON.stringify whenever that's available.
DataElementChangeEmitter.prototype.getStringifiedValue =
    (window.JSON && window.JSON.stringify) || SL.stringify;

DataElementChangeEmitter.prototype.initPolling = function() {
  if (this.dataElementsNames.length === 0) {
    return;
  }

  this.dataElementsStore = this.getDataElementsValues();
  SL.poll(SL.bind(this.checkDataElementValues, this), 1000);
};

DataElementChangeEmitter.prototype.getDataElementsValues = function() {
  var values = {};
  SL.each(this.dataElementsNames, function(dataElementName) {
    var value = SL.getVar(dataElementName);
    values[dataElementName] = this.getStringifiedValue(value);
  }, this);

  return values;
};

DataElementChangeEmitter.prototype.checkDataElementValues = function() {
  SL.each(this.dataElementsNames, SL.bind(function(dataElementName) {
    var currentStringifiedValue = this.getStringifiedValue(SL.getVar(dataElementName));
    var previousStringifiedValue =  this.dataElementsStore[dataElementName];

    if (currentStringifiedValue !== previousStringifiedValue) {
      this.dataElementsStore[dataElementName] = currentStringifiedValue;

      SL.onEvent({
        type: 'dataelementchange(' + dataElementName + ')',
        target: document
      });
    }
  }, this));
};

SL.availableEventEmitters.push(DataElementChangeEmitter);

// Hover Event Emitter
// =====================
//
// Emits the `hover` event in the event. This is better than `mouseover` because you can introduce a certain delay.
// 
//  {
//        name: "Hover for 1 second"
//        event: "hover(1000)",
//        ...
//  }
function HoverEventEmitter(){
  var eventRegex = this.eventRegex = /^hover\(([0-9]+)\)$/
  var rules = this.rules = []
  SL.each(SL.rules, function(rule){
    var m = rule.event.match(eventRegex)
    if (m){
      rules.push([
        Number(rule.event.match(eventRegex)[1]), 
        rule.selector
      ])
    }
  })
}
HoverEventEmitter.prototype = {
  backgroundTasks: function(){
    var self = this
    SL.each(this.rules, function(rule){
      var selector = rule[1]
        , delay = rule[0]
      SL.cssQuery(selector, function(newElms){
        SL.each(newElms, function(elm){
          self.trackElement(elm, delay)
        })
      })
    }, this)
  },
  trackElement: function(elm, delay){
    var self = this
      , trackDelays = SL.$data(elm, 'hover.delays')
    if (!trackDelays){
      SL.addEventHandler(elm, 'mouseover', function(e){
        self.onMouseOver(e, elm)
      })
      SL.addEventHandler(elm, 'mouseout', function(e){
        self.onMouseOut(e, elm)
      })
      SL.$data(elm, 'hover.delays', [delay])
    }
    else if (!SL.contains(trackDelays, delay)){
      trackDelays.push(delay)
    }
  },
  onMouseOver: function(e, elem){
    var target = e.target || e.srcElement
      , related = e.relatedTarget || e.fromElement
      , hit = (elem === target || SL.containsElement(elem, target)) && 
            !SL.containsElement(elem, related)
    if (hit)
      this.onMouseEnter(elem)
  },
  onMouseEnter: function(elm){
    var delays = SL.$data(elm, 'hover.delays')
    var delayTimers = SL.map(delays, function(delay){
      return setTimeout(function(){
        SL.onEvent({type: 'hover(' + delay + ')', target: elm})
      }, delay)
    })
    SL.$data(elm, 'hover.delayTimers', delayTimers)
  },
  onMouseOut: function(e, elem){
    var target = e.target || e.srcElement
      , related = e.relatedTarget || e.toElement
      , hit = (elem === target || SL.containsElement(elem, target)) && 
            !SL.containsElement(elem, related)
    if (hit)
      this.onMouseLeave(elem)
  },
  onMouseLeave: function(elm){
    var delayTimers = SL.$data(elm, 'hover.delayTimers')
    if (delayTimers)
      SL.each(delayTimers, function(timer){
        clearTimeout(timer)
      })
  }
}
SL.availableEventEmitters.push(HoverEventEmitter)

// Visibility API Event Emitter
// ============================
//
// The `visibility API` is used when the browser's tab gets hidden because
// another tab now is visible. For more information see Mozilla's [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)

function VisibilityEventEmitter() {
  this.defineEvents();
  this.visibilityApiHasPriority = true;
  if (!document.addEventListener) { // Older browers (e.g.: IE8)
    this.attachDetachOlderEventListeners(true, document, 'focusout');
  } else {
    this.setVisibilityApiPriority(false);
  }
  var context = this;
  SL.bindEvent('aftertoolinit', function() {
    SL.fireEvent(SL.visibility.isHidden() ? 'tabblur' : 'tabfocus');
  });
}

VisibilityEventEmitter.prototype = {
  defineEvents: function() {
    this.oldBlurClosure = function() {
      SL.fireEvent('tabblur', document)
    };
    this.oldFocusClosure = SL.bind(function() {
      if (this.visibilityApiHasPriority) {
        SL.fireEvent('tabfocus', document);
      } else {
        if (SL.visibility.getHiddenProperty() != null) {
          if(!SL.visibility.isHidden()) {
            SL.fireEvent('tabfocus', document);
          }
        } else {
          SL.fireEvent('tabfocus', document);
        }
      }
    }, this);
  },
  attachDetachModernEventListeners: function(add) {
    var method = (add == false ? 'removeEventHandler' : 'addEventHandler');
    SL[method](document,
      SL.visibility.getVisibilityEvent(),
      this.handleVisibilityChange
    );
  },
  attachDetachOlderEventListeners: function(add, blurTarget, blurEventName) {
    var method = (add == false ? 'removeEventHandler' : 'addEventHandler');
    SL[method](blurTarget, blurEventName, this.oldBlurClosure);
    SL[method](window, 'focus', this.oldFocusClosure);
  },
  handleVisibilityChange: function() {
    if (SL.visibility.isHidden()) {
      SL.fireEvent('tabblur', document);
    } else {
      SL.fireEvent('tabfocus', document);
    }
  },
  setVisibilityApiPriority: function(visibilityApiHasPriority) {
    this.visibilityApiHasPriority = visibilityApiHasPriority;
    this.attachDetachOlderEventListeners(false, window, 'blur');
    this.attachDetachModernEventListeners(false);
    if (visibilityApiHasPriority) {
      if (SL.visibility.getHiddenProperty() != null) { // Modern browsers
        this.attachDetachModernEventListeners(true);
      } else {
        this.attachDetachOlderEventListeners(true, window, 'blur');
      }
    } else {
      this.attachDetachOlderEventListeners(true, window, 'blur');
      if (SL.visibility.getHiddenProperty() != null) { // Modern browsers
        this.attachDetachModernEventListeners(true);
      }
    }
  },
  oldBlurClosure: null,
  oldFocusClosure: null,
  visibilityApiHasPriority: true
};

SL.availableEventEmitters.push(VisibilityEventEmitter);

// Twitter Event Emitter
// =====================
//
// Emits the `twitter.tweet` event in the event a user tweets from the site.
function TwitterEventEmitter(twttr){
  SL.domReady(SL.bind(function () {
    this.twttr = twttr || window.twttr;
    this.initialize();
  }, this));
}

TwitterEventEmitter.prototype = {
  initialize: function(){
    var twttr = this.twttr;
    if (twttr && typeof twttr.ready === 'function') {
      twttr.ready(SL.bind(this.bind, this));
    }
  },

  bind: function(){
    this.twttr.events.bind('tweet', function(event) {
      if (event) {
        SL.notify("tracking a tweet button", 1);
        SL.onEvent({type: 'twitter.tweet', target: document});
      }
    });

  }
}
SL.availableEventEmitters.push(TwitterEventEmitter)

// InviewEventEmitter
// ==================
//
// Emits the `inview` event. The `inview` event fires on an element when the element
// first comes into the view of the user. If the element is in view immediately upon page
// load, it will be fired right away, if it only comes in view after some scrolling, it
// will fire then. An optional delay interval `inviewDelay` can be specified in the rule
// which determine how long the element has to be in view for before the event fires,
// of which the default value is 1 second.

function InViewEventEmitter(rules){
  rules = rules || SL.rules
  this.rules = SL.filter(rules, function(rule){
    return rule.event === 'inview'
  })
  this.elements = []
  this.eventHandler = SL.bind(this.track, this)
  SL.addEventHandler(window, 'scroll', this.eventHandler)
  SL.addEventHandler(window, 'load', this.eventHandler)
}

// Util functions needed by `InViewEventEmitter`
InViewEventEmitter.offset = function(elem) {
  var top = null, left = null;

  try {
    var box = elem.getBoundingClientRect(),
      doc = document,
      docElem = doc.documentElement,
      body = doc.body,
      win = window,
      clientTop  = docElem.clientTop  || body.clientTop  || 0,
      clientLeft = docElem.clientLeft || body.clientLeft || 0,
      scrollTop  = win.pageYOffset || docElem.scrollTop  || body.scrollTop,
      scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    top  = box.top  + scrollTop  - clientTop;
    left = box.left + scrollLeft - clientLeft;
  } catch(e) {
  }

  return { top: top, left: left }
}
InViewEventEmitter.getViewportHeight = function() {
  var height = window.innerHeight // Safari, Opera
  var mode = document.compatMode

  if (mode) { // IE, Gecko
    height = (mode == 'CSS1Compat') ?
    document.documentElement.clientHeight : // Standards
    document.body.clientHeight // Quirks
  }

  return height
}
InViewEventEmitter.getScrollTop = function(){
  return (document.documentElement.scrollTop ?
    document.documentElement.scrollTop :
    document.body.scrollTop)
}

InViewEventEmitter.isElementInDocument = function(el) {
  return document.body.contains(el);
}

InViewEventEmitter.isElementInView = function(el) {
  if (!InViewEventEmitter.isElementInDocument(el)) {
    return false;
  }

  var vpH = InViewEventEmitter.getViewportHeight()
      , scrolltop = InViewEventEmitter.getScrollTop()
      , top = InViewEventEmitter.offset(el).top
      , height = el.offsetHeight;

  if (top !== null) {
    return !(scrolltop > (top + height) || scrolltop + vpH < top)
  }

  return false;
}

InViewEventEmitter.prototype = {
  backgroundTasks: function(){
    var elements = this.elements
    SL.each(this.rules, function(rule){
      SL.cssQuery(rule.selector, function(elms){
        var addCount = 0
        SL.each(elms, function(elm){
          if (!SL.contains(elements, elm)){
            elements.push(elm)
            addCount++
          }
        })
        if (addCount){
          SL.notify(rule.selector + ' added ' + addCount + ' elements.', 1)
        }
      })
    })
    this.track()
  },

  checkInView: function(el, recheck, delay){
    var inview = SL.$data(el, 'inview');
    if (InViewEventEmitter.isElementInView(el)) {
      // it is in view now
      if (!inview)
        SL.$data(el, 'inview', true)
      var self = this
      this.processRules(el, function(rule, viewedProp, timeoutIdProp){
        if (recheck || !rule.inviewDelay){
          SL.$data(el, viewedProp, true)
          SL.onEvent({type: 'inview', target: el, inviewDelay: rule.inviewDelay})
        }else if(rule.inviewDelay){
          var timeout = SL.$data(el, timeoutIdProp)
          if (!timeout) {
            timeout = setTimeout(function(){
              self.checkInView(el, true, rule.inviewDelay)
            }, rule.inviewDelay)
            SL.$data(el, timeoutIdProp, timeout)
          }
        }
      }, delay)
    } else {
      if (!InViewEventEmitter.isElementInDocument(el)) {
        var idx = SL.indexOf(this.elements, el);
        this.elements.splice(idx, 1)
      }

      // it is not in view now
      if (inview)
        SL.$data(el, 'inview', false)
      this.processRules(el, function(rule, viewedProp, timeoutIdProp){
        var timeout = SL.$data(el, timeoutIdProp)
        if (timeout){
          clearTimeout(timeout)
        }
      }, delay)
    }
  },
  track: function(){
    // We are not using SL.each here because we might do a splice inisde
    // `checkInView` method.
    for (var i = this.elements.length - 1; i >=0; i--) {
      this.checkInView(this.elements[i]);
    }
  },
  processRules: function(elm, callback, delay){
    var filteredRules = this.rules;
    if (delay) {
        filteredRules = SL.filter(this.rules, function(e){
          return e.inviewDelay == delay;
        });
    }
    SL.each(filteredRules, function(rule, i){
      // viewedProp: for rules that has a timeout, the definition for
      // "viewed" is rule dependent. But for all rules that do not have
      // a timeout, it is independent.
      var viewedProp = rule.inviewDelay ? 'viewed_' + rule.inviewDelay : 'viewed'
      var timeoutIdProp = 'inview_timeout_id_' + i
      if (SL.$data(elm, viewedProp)) return
      if (SL.matchesCss(rule.selector, elm)){
        callback(rule, viewedProp, timeoutIdProp)
      }
    })
  }
}

SL.availableEventEmitters.push(InViewEventEmitter)

// Basic Tool
// ------------
//
// This is a generic tool that allows integrating with
// various simple tools.
//

function BasicTool(settings){
  SL.BaseTool.call(this, settings)

  this.name = settings.name || 'Basic'
}

SL.inherit(BasicTool, SL.BaseTool)

SL.extend(BasicTool.prototype, {
  initialize: function(){
    var settings = this.settings
    if (this.settings.initTool !== false){
      var url = settings.url
      if (typeof url === 'string'){
        url = SL.basePath() + url
      }else{
        url = SL.isHttps() ? url.https : url.http
      }
      SL.loadScript(url, SL.bind(this.onLoad, this))
      this.initializing = true
    }else{
      this.initialized = true
    }
  },
  isQueueAvailable: function(){
    return !this.initialized
  },
  onLoad: function(){
    this.initialized = true
    this.initializing = false
    if (this.settings.initialBeacon){
      this.settings.initialBeacon()
    }
    this.flushQueue()
  },
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      SL.notify(this.name + ': Initializing at ' + pageLoadEvent, 1)
      this.initialize()
    }
  },
  $fire: function(elm, evt, fun){
    if (this.initializing){
      this.queueCommand({
        command: 'fire',
        arguments: [fun]
      }, elm, evt)
      return
    }
    fun.call(this.settings, elm, evt)
  }
})

SL.availableTools.am = BasicTool
SL.availableTools.adlens = BasicTool
SL.availableTools.aem = BasicTool
SL.availableTools.__basic = BasicTool

// The Marketing Cloud Visitor ID Service Tool
// ================
//
// This tool interacts with the [Visitor ID library](https://git.corp.adobe.com/mc-visitor/VisitorAPI/tree/master/js/src).
// The tool initilizes the Visitor ID library as soon as the tool itself is
// created, by calling the `initialize` method. Find out more info about the
// initializing sequence by clicking [here](#-initialize-).
//
// The tool accepts the following settings:
//
// - `mcOrgId` - The Adobe Marketing Cloud Organization ID (Required)
// - `initVars` - Map containing properties that can be set on the Visitor ID
//      instance. The following keys can be set here:
//      * `trackingServer`,
//      * `trackingServerSecure`,
//      * `marketingCloudServer`
//      * `marketingCloudServerSecure`
// - `customerIDs` - Map containing Customer IDs values that will be set on the
//      instance
// - `autoRequest` - Flag that will read the Marketing Cloud Visitor ID by
//      calling `getMarketingCloudVisitorID` method
function VisitorIdTool(settings) {
  SL.BaseTool.call(this, settings);
  this.name = settings.name || 'VisitorID';

  this.initialize();
}

SL.extend(VisitorIdTool.prototype, {
  // Public
  // ------------------------------------------------
  //
  // `getInstance()`
  // ------------------------------------------------
  //
  // Returns the Visitor ID instance that was created when the tool was
  // initialized.
  getInstance: function() {
    return this.instance;
  },

  // Private
  // ------------------------------------------------
  //
  // `initialize()`
  // ------------------------------------------------
  //
  // The method creates a Visitor ID instance if all the data provided is valid.
  // The instance will contain all the keys defined in the `initVar` setting.
  // Any `dataElement` present as a value in the initVars map will be replaced
  // with the correct value.
  //
  // It applies then a the map of Customer IDs by calling the `setCustomerIDs`
  // method from the newly created instance. Any `dataElement` present as a
  // value in the Customer IDs map will be replaced with the correct value.
  //
  // After that, the `getMarketingCloudVisitorID` method from the newly created
  // instance is called, provided that the `autoRequest` settings is set to true.
  initialize: function() {
    var settings = this.settings, visitor;

    SL.notify('Visitor ID: Initializing tool', 1);

    visitor = this.createInstance(
      settings.mcOrgId,
      settings.initVars
    );
    if (visitor === null) {
      return;
    }

    if (settings.customerIDs) {
      this.applyCustomerIDs(visitor, settings.customerIDs);
    }

    if (settings.autoRequest) {
      visitor.getMarketingCloudVisitorID();
    }

    this.instance = visitor;
  },

  createInstance: function(mcOrgId, initVars) {
    if(!SL.isString(mcOrgId)) {
      SL.notify(
        'Visitor ID: Cannot create instance using mcOrgId: "' + mcOrgId + '"', 4);
      return null;
    }

    mcOrgId = SL.replace(mcOrgId);
    SL.notify(
      'Visitor ID: Create instance using mcOrgId: "' + mcOrgId + '"', 1);

    initVars = this.parseValues(initVars);
    var instance = Visitor.getInstance(mcOrgId, initVars);
    SL.notify('Visitor ID: Set variables: ' + SL.stringify(initVars), 1);

    return instance;
  },

  applyCustomerIDs: function(instance, ids) {
    var parsedIds = this.parseIds(ids);
    instance.setCustomerIDs(parsedIds);
    SL.notify('Visitor ID: Set Customer IDs: ' + SL.stringify(parsedIds), 1);
  },

  parseValues: function(hash) {
    if (SL.isObject(hash) === false) {
      return {};
    }

    var obj = {};

    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        obj[v] = SL.replace(hash[v]);
      }
    }

    return obj;
  },

  parseIds: function(hash) {
    var parsedIds = {};
    if (SL.isObject(hash) === false) {
      return {};
    }

    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        var id = SL.replace(hash[v]['id']);
        // All IDs should be data elements. If no replacement has taken place,
        // then we can conclude that the data element doesn't exists.
        // Also we should ignore existing data elements that are empty.
        if (id !== hash[v]['id'] && id) {
          parsedIds[v] = {};
          parsedIds[v]['id'] = id;
          parsedIds[v]['authState'] = Visitor.AuthState[hash[v]['authState']];
        }
      }
    }

    return parsedIds;
  }
});

SL.availableTools.visitor_id = VisitorIdTool;

// The Default Tool
// ================
//
// The default tool comes with several handy utilities.

function DefaultTool(){
  SL.BaseTool.call(this)

  this.asyncScriptCallbackQueue = []
  this.argsForBlockingScripts = []
}
SL.inherit(DefaultTool, SL.BaseTool)
SL.extend(DefaultTool.prototype, {
  name: 'Default',

  // `loadIframe(src, variables)`
  // ----------------------------
  //
  // Dynamically create an iframe to load a URL.
  //
  // - src - the URL to load
  // - variables - an object literal of which the key/value pairs will be used
  //      to create the query string to use in the src URL
  $loadIframe: function(elm, evt, options){
    var pages = options.pages
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      SL.each(pages, function(page){
        this.loadIframe(elm, evt, page)
      }, this)
    }, this)
    if (!loadOn) doit()
    if (loadOn === 'domready') SL.domReady(doit)
    if (loadOn === 'load') SL.addEventHandler(window, 'load', doit)
  },

  loadIframe: function(elm, evt, page){
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    var host = SL.data.host
      , data = page.data
      , src = this.scriptURL(page.src)
      , search = SL.searchVariables(data, elm, evt)
    if (host)
      src = SL.basePath() + src
    src += search
    iframe.src = src
    var body = document.getElementsByTagName('body')[0]
    if (body)
      body.appendChild(iframe)
    else
      SL.domReady(function(){
        document.getElementsByTagName('body')[0].appendChild(iframe)
      })
  },

  scriptURL: function(url){
    var scriptDir = SL.settings.scriptDir || ''
    return scriptDir + url
  },

  // `loadScript(options)
  // ------------------------------
  //
  // Load any number of Javascript files using dynamically generated script tags.
  // If you provide multiple file URLs, they will be loaded sequentially.
  $loadScript: function(elm, evt, options){
    var scripts = options.scripts
      , sequential = options.sequential
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      if (sequential){
        this.loadScripts(elm, evt, scripts)
      }else{
        SL.each(scripts, function(script){
          this.loadScripts(elm, evt, [script])
        }, this)
      }
    }, this)

    if (!loadOn) doit()
    else if (loadOn === 'domready') SL.domReady(doit)
    else if (loadOn === 'load') SL.addEventHandler(window, 'load', doit)
  },

  loadScripts: function(elm, evt, scripts) {
    try{
    var scripts = scripts.slice(0)
      , q = this.asyncScriptCallbackQueue
      , lastScript
      , target = evt.target || evt.srcElement
      , self = this
    }catch(e){
      console.error('scripts is', SL.stringify(scripts))
    }
    function loadNext(){
      if (q.length > 0 && lastScript){
        var callback = q.shift()
        callback.call(elm, evt, target)
      }
      var script = scripts.shift()
      if (script){
        var host = SL.data.host
          , src = self.scriptURL(script.src)
        if (host)
          src = SL.basePath() + src
        lastScript = script
        SL.loadScript(src, loadNext)
      }
    }
    loadNext()
  },

  $loadBlockingScript: function(elm, evt, options){
    var scripts = options.scripts
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      SL.each(scripts, function(script){
        this.loadBlockingScript(elm, evt, script)
      }, this)
    }, this)
    //if (!loadOn || loadOn === evt.type) doit()
    doit()
  },

  loadBlockingScript: function(elm, evt, script){
    /*jshint evil:true */
    var src = this.scriptURL(script.src)
      , host = SL.data.host
      , target = evt.target || evt.srcElement
    if (host)
      src = SL.basePath() + src
    this.argsForBlockingScripts.push([elm, evt, target])
    SL.loadScriptSync(src)
  },

  pushAsyncScript: function(callback){
    this.asyncScriptCallbackQueue.push(callback)
  },

  pushBlockingScript: function(callback){
    var args = this.argsForBlockingScripts.shift()
    var element = args[0]
    callback.apply(element, args.slice(1))
  },

  // `writeHTML(html)`
  // -----------------
  //
  // Write an HTML fragment onto the page using `document.write()`.
  //
  // - `html` - the HTML fragment
  $writeHTML: SL.escapeHtmlParams(function(elm, evt){
    /*jshint evil:true */
    if (SL.domReadyFired || !document.write){
      SL.notify('Command writeHTML failed. You should try appending HTML using the async option.', 1)
      return
    }
    if (evt.type !== 'pagebottom' && evt.type !== 'pagetop'){
      SL.notify('You can only use writeHTML on the `pagetop` and `pagebottom` events.', 1)
      return
    }
    for (var i = 2, len = arguments.length; i < len; i++){
      var html = arguments[i].html
      html = SL.replace(html, elm, evt)
      document.write(html)
    }
  }),

  linkNeedsDelayActivate: function(a, win){
    win = win || window
    var tagName = a.tagName
      , target = a.getAttribute('target')
      , location = a.getAttribute('href')
    if (tagName && tagName.toLowerCase() !== 'a')
      return false
    if (!location)
      return false
    else if (!target)
      return true
    else if (target === '_blank')
      return false
    else if (target === '_top')
      return win.top === win
    else if (target === '_parent')
      return false
    else if (target === '_self')
      return true
    else if (win.name)
      return target === win.name
    else
      return true
  },

  // `delayActivateLink()`
  // ---------------------
  //
  // Delay the activation of an anchor link by first using `evt.preventDefault()` on
  // the click event, and then setting the window location to the destination after
  // a small delay. The default delay is 100 milliseconds, which can be configured in
  // `_satellite.settings.linkDelay`
  $delayActivateLink: function(elm, evt){
    if (!this.linkNeedsDelayActivate(elm)) return
    SL.preventDefault(evt)
    var linkDelay = SL.settings.linkDelay || 100
    setTimeout(function(){
      SL.setLocation(elm.href)
    }, linkDelay)
  },

  isQueueable: function(trig){
    return trig.command !== 'writeHTML'
  }
})
SL.availableTools['default'] = DefaultTool

// The Nielsen Tool
// ================
//
// This tool provides the means to make Nielsen tracking possible.
//
// The tool accepts the following settings:
//
// - `collectionServer` - The collection server to be used. The variable
//      specifies the nearest collection server.
// - `clientId` - The client identifier. A unique Nielsen supplied ID that
//      should be alphanumeric and lowercase. A dash (-) character is allowed.
// - `contentGroup` - The content group. A historical variable used for
//      grouping/aggregating content into channels. Currently the
//      default value is "0".
function NielsenTool(settings) {
  SL.BaseTool.call(this, settings);
  this.defineListeners();
  this.beaconMethod = 'plainBeacon';
  this.adapt = new NielsenTool.DataAdapters();
  this.dataProvider = new NielsenTool.DataProvider.Aggregate();
}

SL.inherit(NielsenTool, SL.BaseTool);
SL.extend(NielsenTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'Nielsen',

  // Private
  // ------------------------------------------------

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled.
  //
  // This is needed in order to be able to properly hook the needed events.
  endPLPhase: function(pageLoadEvent) {
    switch (pageLoadEvent) {
      case 'pagetop':
        this.initialize();
        break;
      case 'pagebottom':
        if (this.enableTracking) {
          this.queueCommand({ command: 'sendFirstBeacon', "arguments": [] });
          this.flushQueueWhenReady();
        }
        break;
    }
  },

  defineListeners: function() {
    this.onTabFocus = SL.bind(function() {
      this.notify('Tab visible, sending view beacon when ready', 1);
      this.tabEverVisible = true;
      this.flushQueueWhenReady();
    }, this);
    this.onPageLeave = SL.bind(function() {
      this.notify('isHuman? : '+ this.isHuman(), 1);
      if (this.isHuman()) {
        this.sendDurationBeacon(); // track page leave
      }
    }, this);
    this.onHumanDetectionChange = SL.bind(function(e) {
      if (this == e.target.target) this.human = e.target.isHuman;
    }, this);
  },

  initialize: function() {
    this.initializeTracking();
    this.initializeDataProviders();
    this.initializeNonHumanDetection();
    this.tabEverVisible = SL.visibility.isVisible();
    if (!this.tabEverVisible) {
      SL.bindEventOnce('tabfocus', this.onTabFocus);
    }
    else {
      this.notify('Tab visible, sending view beacon when ready', 1);
    }

    this.initialized = true;
  },

  // `initializeTracking()`
  // ------------------------------------------------
  //
  // The method starts the time tracking and hooks on the leave event.
  initializeTracking: function() {
    if (this.initialized) return;
    this.notify('Initializing tracking', 1);
    this.addRemovePageLeaveEvent(this.enableTracking);
    this.addRemoveHumanDetectionChangeEvent(this.enableTracking);
    this.initialized = true;
  },

  // `initializeDataProviders()`
  // ------------------------------------------------
  //
  // The method initializes default data providers for:
  // - Analytics Report Suite ID, if Analytics account is linked
  // - Marketing Cloud Visitor ID, with fallback to auto-generated UUID
  initializeDataProviders: function() {
    var analytics = this.getAnalyticsTool(), rsid;

    this.dataProvider.register(
      new NielsenTool.DataProvider.VisitorID(
        SL.getVisitorId()
      )
    );
    if (analytics) {
      rsid = new NielsenTool.DataProvider.Generic('rsid', function() {
        return analytics.settings.account;
      });
      this.dataProvider.register(rsid);
    }
    else {
      this.notify('Missing integration with Analytics: rsid will not be sent.');
    }
  },

  initializeNonHumanDetection: function() {
    if (SL.nonhumandetection) {
      SL.nonhumandetection.init();
      this.setEnableNonHumanDetection(
        this.settings.enableNonHumanDetection == false ? false : true);
      if (this.settings.nonHumanDetectionDelay > 0) {
        this.setNonHumanDetectionDelay(
          parseInt(this.settings.nonHumanDetectionDelay) * 1000);
      }
    } else {
      this.notify('NHDM is not available.');
    }
  },

  // `getAnalyticsTool()`
  // ------------------------------------------------
  //
  // If integration is defined, this method returns the tool instance of
  // the linked Analytics account
  getAnalyticsTool: function() {
    if (this.settings.integratesWith) {
      return SL.tools[this.settings.integratesWith];
    }
  },

  flushQueueWhenReady: function() {
    if (!this.enableTracking || !this.tabEverVisible) return;
    SL.poll(SL.bind(function() {
      if (this.isReadyToTrack()) {
        this.flushQueue();
        return true;
      }
    }, this), 100, 20);
  },

  isReadyToTrack: function() {
    return this.tabEverVisible && this.dataProvider.isReady();
  },

  // `setVars(vars)`
  // ------------------------------------------------
  //
  // The method is used to set variables on the tool
  $setVars: function(elm, evt, vars) {
    for (var v in vars) {
      var val = vars[v];
      if (typeof val === 'function')
        val = val();
      this.settings[v] = val;
    }
    this.notify('Set variables done', 2);
    this.prepareContextData();
  },

  // `setEnableTracking()`
  // ------------------------------------------------
  //
  // The method triggers the view tracking call.
  $setEnableTracking: function(elm, evt, bool) {
    this.notify('Will' + (!bool ? ' not' : '') + ' track time on page', 1);
    if (this.enableTracking != bool) {
      this.addRemovePageLeaveEvent(bool);
      this.addRemoveHumanDetectionChangeEvent(bool);
      this.enableTracking = bool;
    }
  },

  // `sendFirstBeacon()`
  // ------------------------------------------------
  //
  // The method is called as soon as everything is in place.
  $sendFirstBeacon: function(elm, evt, settings) {
    this.sendViewBeacon();
  },

  // `setEnableNonHumanDetection()`
  // ------------------------------------------------
  //
  // The method enables/disables the human detection mechanism.
  setEnableNonHumanDetection: function(bool) {
    if (bool) {
      SL.nonhumandetection.register(this);
    } else {
      SL.nonhumandetection.unregister(this);
    }
  },

  // `setNonHumanDetectionDelay()`
  // ------------------------------------------------
  //
  // The method set the timeout for entering in non human state.
  setNonHumanDetectionDelay: function(delay) {
    SL.nonhumandetection.register(this, delay);
  },

  addRemovePageLeaveEvent: function(add) {
    this.notify((add ? 'Attach onto' : 'Detach from') + ' page leave event', 1);
    var method = (add == false ? 'unbindEvent' : 'bindEvent');
    SL[method]('leave', this.onPageLeave);
  },

  addRemoveHumanDetectionChangeEvent: function(add) {
    this.notify((add ? 'Attach onto' : 'Detach from') + ' human detection change event', 1);
    var method = (add == false ? 'unbindEvent' : 'bindEvent');
    SL[method]('humandetection.change', this.onHumanDetectionChange);
  },

  // `sendViewBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the view tracking call.
  sendViewBeacon: function() {
    this.notify('Tracked page view.', 1);
    this.sendBeaconWith();
  },

  // `sendDurationBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the duration tracking call. This adds the time
  // spent on the page to the call and is triggered when the user leaves
  // the current web page.
  sendDurationBeacon: function() {
    if (
      !SL.timetracking ||
      typeof SL.timetracking.timeOnPage != 'function' ||
      SL.timetracking.timeOnPage() == null
    ) {
      this.notify('Could not track close due missing time on page', 5);
      return;
    }
    this.notify('Tracked close', 1);
    this.sendBeaconWith({
      timeOnPage: Math.round(SL.timetracking.timeOnPage() / 1000),
      duration: 'D',
      timer: 'timer'
    });
    // a bit of delay to let the network thread finish sending data
    var i,s='';for(i=0;i<this.magicConst;i++){s+='0'};
  },

  // `sendBeaconWith(obj)`
  // ------------------------------------------------
  //
  // The method builds the tracking call based on provided settings and
  // parameters.
  sendBeaconWith: function(params) {
    if (this.enableTracking) {
      this[this.beaconMethod].call(this, this.prepareUrl(params));
    }
  },
  plainBeacon: function(url) {
    var img = new Image();
    img.src = url;
    img.width = 1;
    img.height = 1;
    img.alt = '';
  },
  navigatorSendBeacon: function(url) {
    navigator.sendBeacon(url);
  },
  prepareUrl: function(params) {
    var obj = this.settings;
    SL.extend(obj, this.dataProvider.provide());
    SL.extend(obj, params);
    return this.preparePrefix(this.settings.collectionServer) +
      this.adapt.convertToURI(
        this.adapt.toNielsen(
          this.substituteVariables(obj)));
  },
  preparePrefix: function(server) {
    return '//' + encodeURIComponent(server) + '.imrworldwide.com/cgi-bin/gn?';
  },
  substituteVariables: function(hash){
    var obj = {};
    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        obj[v] = SL.replace(hash[v]);
      }
    }
    return obj;
  },
  prepareContextData: function() {
    if (!this.getAnalyticsTool()) {
      this.notify('Adobe Analytics missing.');
      return;
    }
    var obj = this.settings;
    obj.sdkVersion =_satellite.publishDate;
    this.getAnalyticsTool().$setVars(null, null, {
      contextData: this.adapt.toAnalytics(
        this.substituteVariables(obj))
    });
  },
  isHuman: function() {
    return this.human;
  },
  onTabFocus: function() {},
  onPageLeave: function() {},
  onHumanDetectionChange: function() {},
  notify: function(msg, lvl) {
    SL.notify(this.logPrefix + msg, lvl);
  },
  beaconMethod: 'plainBeacon',
  adapt: null,
  enableTracking: false,
  logPrefix: "Nielsen: ",
  tabEverVisible: false,
  human: true,
  magicConst: 0x1e8480
});

// `NielsenTool.DataProvider`
// ==========================
//
// The following components handle the task of providing extra information
// for the Nielsen beacon, with support for asynchronous data
//
NielsenTool.DataProvider = {};
NielsenTool.DataProvider.Generic = function(key, valueFn) {
  this.key = key;
  this.valueFn = valueFn;
};

SL.extend(NielsenTool.DataProvider.Generic.prototype, {
  isReady: function() {
    return true;
  },

  getValue: function() {
    return this.valueFn();
  },

  provide: function() {
    if (!this.isReady()) {
      NielsenTool.prototype.notify('Not yet ready to provide value for: ' + this.key, 5)
    }
    var data = {};
    data[this.key] = this.getValue();
    return data;
  }
});

// `NielsenTool.DataProvider.VisitorID`
// ====================================
//
// Gets and optionally waits for Marketing Cloud ID to be loaded.
// If no visitor instance is provided, then it falls-back to generated UUID.
//
NielsenTool.DataProvider.VisitorID = function(visitorInstance, key, fallbackProvider) {
  this.key = key || 'uuid';
  this.visitorInstance = visitorInstance;
  if (this.visitorInstance) {
    this.visitorId = visitorInstance.getMarketingCloudVisitorID([this, this._visitorIdCallback]);
  }
  this.fallbackProvider = fallbackProvider || new NielsenTool.UUID();
};

SL.inherit(NielsenTool.DataProvider.VisitorID, NielsenTool.DataProvider.Generic);
SL.extend(NielsenTool.DataProvider.VisitorID.prototype, {
  isReady: function() {
    if (this.visitorInstance === null) {
      return true;
    }
    return !!this.visitorId;
  },

  getValue: function() {
    return this.visitorId || this.fallbackProvider.get();
  },

  _visitorIdCallback: function(id) {
    this.visitorId = id;
  }
});

// `NielsenTool.DataProvider.Aggregate`
// ====================================
//
// Aggregates data from multiple providers, being aware of their ready-state.
//
NielsenTool.DataProvider.Aggregate = function() {
  this.providers = [];
  for (var i=0; i<arguments.length; i++) {
    this.register(arguments[i]);
  }
};

SL.extend(NielsenTool.DataProvider.Aggregate.prototype, {
  register: function(provider) {
    this.providers.push(provider);
  },

  isReady: function() {
    return SL.every(this.providers, function(provider) {
      return provider.isReady();
    });
  },

  provide: function() {
    var data = {};
    SL.each(this.providers, function(provider) {
      SL.extend(data, provider.provide());
    });
    return data;
  }
});

// `UUID`
// ===============
//
// The follwing generates an [RFC 4122 version 4](https://www.ietf.org/rfc/rfc4122.txt)
// uinique ID and stores it in a cookie.

NielsenTool.UUID = function() {};

SL.extend(NielsenTool.UUID.prototype, {
  // `generate()`
  // ------------------------------------------------
  //
  // Method that generates an [RFC 4122 version 4](https://www.ietf.org/rfc/rfc4122.txt)
  // compliant unique ID.
  //
  // This is needed in for Nielsen tracking w/o Analytics integration.
  generate: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  get: function() {
    var cookieUUID = SL.readCookie(this.key('uuid'));
    if (cookieUUID) return cookieUUID;
    cookieUUID = this.generate();
    SL.setCookie(this.key('uuid'), cookieUUID);
    return cookieUUID;
  },
  key: function(name) {
    return '_dtm_nielsen_' + name;
  }
});

// `Data Adapters`
// ===============
//
// The follwing adapters are used to adapt the settings to the proper format
// for both Nielsen tracking call and AA tracking calls

NielsenTool.DataAdapters = function() {};

SL.extend(NielsenTool.DataAdapters.prototype, {
  toNielsen: function(settings) {
    var cdate = new Date().getTime(),
        nielsenPrefixes = {
          c6: 'vc,',
          c13: 'asid,',
          c15: 'apn,',
          c27: 'cln,',
          c32: 'segA,',
          c33: 'segB,',
          c34: 'segC,',
          c35: 'adrsid,',
          c29: 'plid,',
          c30: 'bldv,',
          c40: 'adbid,'
        },
        nielsenObj = {
          ci: settings.clientId,
          c6: settings.vcid,
          c13: settings.appId,
          c15: settings.appName,
          prv: 1,
          forward: 0,
          ad: 0,
          cr: settings.duration || 'V', // [V|D], default V
          rt: 'text',
          st: 'dcr',
          prd: 'dcr',
          r: cdate,
          at: settings.timer || 'view', // [view|timer], default view
          c16: settings.sdkVersion,
          c27: settings.timeOnPage || 0,
          c40: settings.uuid,
          c35: settings.rsid,
          ti: cdate,
          sup: 0,
          c32: settings.segmentA,
          c33: settings.segmentB,
          c34: settings.segmentC,
          asn: settings.assetName,
          c29: settings.playerID,
          c30: settings.buildVersion
        };
    for (key in nielsenObj) {
      if (nielsenObj[key] !== undefined && nielsenObj[key] != null) {
        if (nielsenObj[key] !== undefined && nielsenObj != null && nielsenObj != '') {
          var val = encodeURIComponent(nielsenObj[key]);
          if (nielsenPrefixes.hasOwnProperty(key) && val) {
            val = nielsenPrefixes[key] + val;
          }
          nielsenObj[key] = val;
        }
      }
    }
    return this.filterObject(nielsenObj);
  },
  toAnalytics: function(settings) {
    return this.filterObject({
      'a.nielsen.clientid': settings.clientId,
      'a.nielsen.vcid': settings.vcid,
      'a.nielsen.appid': settings.appId,
      'a.nielsen.appname': settings.appName,
      'a.nielsen.accmethod': "0",
      'a.nielsen.ctype': "text",
      'a.nielsen.sega': settings.segmentA,
      'a.nielsen.segb': settings.segmentB,
      'a.nielsen.segc': settings.segmentC,
      'a.nielsen.asset': settings.assetName
    });
  },
  convertToURI: function(obj) {
    if (SL.isObject(obj) === false) return '';
    var uri = []
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) uri.push(key + '=' + obj[key]);
    }
    return uri.join('&')
  },
  filterObject: function(obj) {
    for (var k in obj) {
      if (obj.hasOwnProperty(k) &&
        (obj[k] == null || obj[k] === undefined)) {
        delete obj[k];
      }
    }
    return obj;
  }
});

SL.availableTools.nielsen = NielsenTool;

// The Adobe Target Tool
// ==================
//
// This tool interacts with [Adobe Target library](https://git.corp.adobe.com/mc-visitor/VisitorAPI).
//
// The tool accepts the following settings:
//
// - `engine` - The engine identifier (tnt)
// - `mboxURL` - The URL where the mbox can be found
// - `loadSync` - Specifies how the mbox should be loaded. A true value means
//      that it should be loaded in a synchronous mode.
// - `pageParams` - Object containing key/value pairs used in the mbox retrieval
//      call. The pairs are merged onto the `targetPageParams` property of
//      Target Javascript library. For more information click
//      [here](https://marketing.adobe.com/resources/help/en_US/target/target/c_pass_parameters_to_global_mbox.html).

function Tnt(settings){
  SL.BaseTool.call(this, settings)

  this.styleElements = {}
  this.targetPageParamsStore = {}
}

SL.inherit(Tnt, SL.BaseTool)

SL.extend(Tnt.prototype, {
  // Public
  // ------------------------------------------------
  name: 'tnt',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled.
  //
  // When the tool is initialized the global `targetPageParams` are updated with
  // the parameters provided in the settings.
  //
  // It is important to know that the `targetPageParams` property is not
  // overwritten instead a merging process is taking place. If a key is already
  // present then its value is updated.
  //
  // The last step is the loading of the mbox where the `mboxURL` is used.

  endPLPhase: function(pageLoadEvent) {
    if (pageLoadEvent === 'aftertoolinit') {
      this.initialize();
    }
  },

  // Private
  // ------------------------------------------------
  initialize: function() {
    SL.notify('Test & Target: Initializing', 1)
    this.initializeTargetPageParams()
    this.load()
  },

  initializeTargetPageParams: function() {
    if (window.targetPageParams) {
      this.updateTargetPageParams(
        this.parseTargetPageParamsResult(
          window.targetPageParams()
        )
      )
    }

    this.updateTargetPageParams(this.settings.pageParams)
    this.setTargetPageParamsFunction()
  },

  load: function(){
    var url = this.getMboxURL(this.settings.mboxURL)
    if (this.settings.initTool !== false){
      if (this.settings.loadSync) {
        SL.loadScriptSync(url)
        this.onScriptLoaded()
      } else {
        SL.loadScript(url, SL.bind(this.onScriptLoaded, this))
        this.initializing = true
      }
    } else {
      this.initialized = true
    }
  },

  getMboxURL: function(urlData) {
    var url = urlData
    if (SL.isObject(urlData)) {
      if (window.location.protocol === 'https:')
        url = urlData.https
      else
        url = urlData.http
    }
    if (!url.match(/^https?:/))
      return SL.basePath() + url
    else
      return url
  },

  onScriptLoaded: function(){
    SL.notify('Test & Target: loaded.', 1)

    this.flushQueue()

    this.initialized = true
    this.initializing = false
  },

  $addMbox: function(elm, evt, settings){
    var mboxGoesAround = settings.mboxGoesAround
    var styleText = mboxGoesAround + '{visibility: hidden;}'
    var styleElm = this.appendStyle(styleText)
    if (!(mboxGoesAround in this.styleElements)){
      this.styleElements[mboxGoesAround] = styleElm
    }

    if (this.initialized){
      this.$addMBoxStep2(null, null, settings)
    }else if (this.initializing){
      this.queueCommand({
        command: 'addMBoxStep2'
        , "arguments": [settings]
      }, elm, evt)
    }
  },
  $addMBoxStep2: function(elm, evt, settings){
    var mboxID = this.generateID()
    var self = this
    SL.addEventHandler(window, 'load', SL.bind(function(){
      SL.cssQuery(settings.mboxGoesAround, function(elms){
        var elem = elms[0]
        if (!elem) return
        var newDiv = document.createElement("div")
        newDiv.id = mboxID
        elem.parentNode.replaceChild(newDiv, elem)
        newDiv.appendChild(elem)
        window.mboxDefine(mboxID, settings.mboxName)
        var args = [settings.mboxName]
        if (settings.arguments){
          args = args.concat(settings.arguments)
        }
        window.mboxUpdate.apply(null, args)
        self.reappearWhenCallComesBack(elem, mboxID, settings.timeout, settings)
      });
    }, this))
    this.lastMboxID = mboxID // leave this here for easier testing
  },

  $addTargetPageParams: function(elm, evt, pageParams) {
    this.updateTargetPageParams(pageParams)
  },

  generateID: function(){
    var id = '_sdsat_mbox_' + String(Math.random()).substring(2) + '_'
    return id
  },
  appendStyle: function(css){
    var head = document.getElementsByTagName('head')[0], 
        style = document.createElement('style');
        
    style.type = 'text/css';
    if(style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    
    head.appendChild(style);
    return style;
  },
  reappearWhenCallComesBack: function(elmGoesAround, mboxID, timeout, settings){
    var self = this

    function reappear(){
      var styleElm = self.styleElements[settings.mboxGoesAround]
      if (styleElm){
        styleElm.parentNode.removeChild(styleElm)
        ;delete self.styleElements[settings.mboxGoesAround]
      }
    }

    SL.cssQuery('script[src*="omtrdc.net"]', function(results){
      var script = results[0]
      if (script){
        SL.scriptOnLoad(script.src, script, function(){
          SL.notify('Test & Target: request complete', 1)
          reappear()
          clearTimeout(timeoutID)
        })
        var timeoutID = setTimeout(function(){
          SL.notify('Test & Target: bailing after ' + timeout + 'ms', 1)
          reappear()
        }, timeout)
      }else{
        SL.notify('Test & Target: failed to find T&T ajax call, bailing', 1)
        reappear()
      }
    })
  },

  updateTargetPageParams: function(obj) {
    var o = {}
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        o[SL.replace(key)] = SL.replace(obj[key])
      }
    }
    SL.extend(
      this.targetPageParamsStore,
      o
    )
  },

  getTargetPageParams: function() {
    return this.targetPageParamsStore
  },

  setTargetPageParamsFunction: function() {
    window.targetPageParams = SL.bind(this.getTargetPageParams, this)
  },

  parseTargetPageParamsResult: function(data) {
    var result = data

    if(SL.isArray(data)) {
      data = data.join('&')
    }

    if (SL.isString(data)) {
      result = SL.parseQueryParams(data)
    }

    return result
  }
})
SL.availableTools.tnt = Tnt

// Adobe Analytics Tool
// ================
//
// This tool interacts with the [AppMeasurement library](http://microsite.omniture.com/t2/help/en_US/sc/appmeasurement/release/c_release_notes_mjs.html)
//
// Beside the settings that are processed by the BaseTool code, this tool uses
// the following extra settings:
//
// - `engine` - The engine identifier (sc)
// - `initVars` - It's an array containing key/value pair of AppMeasurement's
//      properties that are used in tracking and for settings. An example of
//      such pair would be: `{ eVar6: "6", server: "tracking.server"}`. For a
//      list of all supported properties please consult the [AppMeasurement's
//      documentation](http://microsite.omniture.com/t2/help/en_US/sc/implement/sc_variables.html).
// - `initTool` - Boolean flag that can suppress the tool initialization phase.
//      When set to `false` no JS library will be loaded and no initial command
//      will be executed. All the later commands triggered by this tool will
//      piggy back on any availble `ga` function from the page.
// - `sCodeURL` - Custom URL of the AppMeasurement Javascript library URL
//      location.
// - `loadOn` - The PL phase when this tool will be initialized (top | bottom)
// - `account` - String containing the report suite ID to track to.
// - `skipSetAccount` - Boolean value that when true disables setting
//      of the `account` with the value provided in settings. Default value
//      is no being set.
// - `euCookie' - Please see the description on SL (core.js) code
// - `renameS` - String specifying the name of the global AppMeasurement
//      instance. If no provided `s` is implied.
// - `executeCustomPageCodeFirst` - Boolean flag that lets the custom
//      initialization code be executed before or after the `initVars` method
//      call. Default value is not set which means false.
// - `customInit` - JS code that will be executed immediately after the tool is
//      initialized. The boolean result from `customInit` will affect the
//      initial page view call. A false value results in disabling the initial
//      page view tracking call.
//
// The SiteCatalystTool allows to set variables, add events, track link, etc.
// Example:
//
//      trigger: [
//          {
//              tool: "sc",
//              command: "trackLink"
//          }
//      ]
//
function SiteCatalystTool(settings){
  SL.BaseTool.call(this, settings)

  this.varBindings = {}
  this.events = []
  this.products = []
  this.customSetupFuns = []
}
SL.inherit(SiteCatalystTool, SL.BaseTool)
SL.extend(SiteCatalystTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'SC',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled. Find out more info about the initializing sequence by clicking
  // [here](#-initialize-).
  //
  // After the tool is initialized a page view call is triggered if
  // `suppressInitialPageView` flag is not set to `true`.
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      this.initialize(pageLoadEvent)
    }
  },

  // Private
  // ------------------------------------------------

  // `initialize()`
  // ------------------------------------------------
  //
  // The method first check to see if the default initialization is specifically
  // canceled.
  //
  // Then it sets an event listener on `pageLoadeEvent` to update the tracking
  // variables with the ones provided in `initVars` setting object.
  //
  // In case that the user chosen to provide the Javascript code for
  // AppMeasurement by himself instead of using the automatic management
  // then we wait for the library to load.
  //
  // Otherwise we load the AppMeasurement from the storage and then set the
  // setup variables on the tracker object.
  initialize: function(pageLoadEvent){
    if (this._cancelToolInit) return
    this.settings.initVars = this.substituteVariables(
      this.settings.initVars, { type: pageLoadEvent }
    )

    if (this.settings.initTool !== false){
      var url = this.settings.sCodeURL || SL.basePath() + 's_code.js'
      if (typeof url === 'object'){
        if (window.location.protocol === 'https:')
          url = url.https
        else
          url = url.http
      }
      if (!url.match(/^https?:/))
        url = SL.basePath() + url
      if (this.settings.initVars){
        this.$setVars(null, null, this.settings.initVars)
      }
      SL.loadScript(url, SL.bind(this.onSCodeLoaded, this))
      this.initializing = true
    }else{
      // Set to initializing because we are
      // waiting on the AppMeasurement/s_code library to be loaded by
      // the site and we'll detect the completion of the load
      // in a background task.
      this.initializing = true
      this.pollForSC()
    }
  },

  // `getS(s, options)`
  // ------------------------------------------------
  //
  // The method initializes the `s` object.
  //
  // A notificaiton is given and `null` is returned in case of not finding
  // the account/RSID.
  //
  // If Marketing Cloud Visitor ID Service is used that instance is linked
  // with the instatiated `s` object.
  getS: function(s, options){
    var hostname = options && options.hostname || window.location.hostname
    var varBindings = this.concatWithToolVarBindings(
      options && options.setVars || this.varBindings
    )
    var events = options && options.addEvent || this.events
    var acct = this.getAccount(hostname)
    var s_gi = window.s_gi
    if (!s_gi) return null
    if (!this.isValidSCInstance(s)) s = null
    if (!acct && !s) {
      SL.notify('Adobe Analytics: tracker not initialized because account was not found', 1)
      return null
    }
    var s = s || s_gi(acct)

    var DTMversion = 'D' + SL.appVersion;
    if(typeof s.tagContainerMarker !== 'undefined') {
      s.tagContainerMarker = DTMversion
    } else {
      if (typeof s.version === 'string' &&
        s.version.substring(s.version.length - 5) !==
          ('-' + DTMversion)){
        s.version += '-' + DTMversion
      }
    }

    if (s.sa && this.settings.skipSetAccount !== true && this.settings.initTool !== false) s.sa(this.settings.account)
    this.applyVarBindingsOnTracker(s, varBindings)
    if (events.length > 0)
      s.events = events.join(',')

    var visitorIdInstance = SL.getVisitorId()
    if (visitorIdInstance) {
      s.visitor = SL.getVisitorId()
    }

    return s
  },

  // `onSCodeLoaded()`
  // ------------------------------------------------
  //
  // The method triggers load event on Analytics tool so all subsequent and
  // listening methods would be properly triggered.
  //
  // Before cleaning up the queue the tracking beacon call is made.
  onSCodeLoaded: function(loaded_manually){
    this.initialized = true
    this.initializing = false

    var msg = [
      'Adobe Analytics: loaded',
      loaded_manually ? ' (manual)' : '',
      '.'
    ]
    SL.notify(msg.join(''), 1)

    SL.fireEvent(this.id + '.load', this.getS())

    if (!loaded_manually) {
      this.flushQueueExceptTrackLink()
      this.sendBeacon()
    }

    this.flushQueue()
  },

  // `getAccount(hostname)`
  // ------------------------------------------------
  //
  // The returns the `s_account` for a specified `hostname`
  //
  // TODO: need to be refactored because `accountByHost` is no longer used.
  getAccount: function(hostname){
    if (window.s_account){
      return window.s_account
    }
    if (hostname && this.settings.accountByHost){
      return this.settings.accountByHost[hostname] || this.settings.account
    }else{
      return this.settings.account
    }
  },

  // `getTrackingServer()`
  // ------------------------------------------------
  //
  // The method tries to retrieve the tracking server from the `s` object
  // otherwise falls back on generating one based on the `account`.
  //
  // If neither `account` or `trackingServer` are availalble, `null` is
  // returned.
  //
  // TODO: need to be refactored to remove the tracking server generate method
  // as Analytics now offers a central point to shoot to.
  getTrackingServer: function(){
    var tool = this
    var s = tool.getS()
    if (s) {
      if (s.ssl && s.trackingServerSecure) {
        return s.trackingServerSecure
      }
      else if (s.trackingServer) {
        return s.trackingServer
      }
    }
    var account = tool.getAccount(window.location.hostname)
    if (!account) return null
    // Based on code in app measurement.
    var w
    var c = ''
    var d = s && s.dc
    var e
    var f
    w = account
    e = w.indexOf(",")
    e >= 0 && (w = w.gb(0, e))
    w = w.replace(/[^A-Za-z0-9]/g, "")
    c || (c = "2o7.net")
    d = d ? ("" + d).toLowerCase() : "d1"
    c == "2o7.net" && (d == "d1" ? d = "112" : d == "d2" && (d = "122"), f = "")
    e = w + "." + d + "." + f + c
    return e
  },

  // `sendBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the tracking call.
  //
  // If custom initialization is used the beacon is supressed. Also, if custom
  // code is provided and specifically stated that it should be executed first
  // (`executeCustomPageCodeFirst`) the tracker get updated with the result of
  // the code.
  sendBeacon: function(){
    var s = this.getS(window[this.settings.renameS || 's'])
    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }
    if (this.settings.customInit){
      if (this.settings.customInit(s) === false){
        SL.notify("Adobe Analytics: custom init suppressed beacon", 1)
        return
      }
    }

    if (this.settings.executeCustomPageCodeFirst) {
      this.applyVarBindingsOnTracker(s, this.varBindings)
    }
    this.executeCustomSetupFuns(s)
    s.t()
    this.clearVarBindings()
    this.clearCustomSetup()
    SL.notify("Adobe Analytics: tracked page view", 1)
  },
  pollForSC: function(){
    SL.poll(SL.bind(function(){
      if (typeof window.s_gi === 'function'){
        this.onSCodeLoaded(true)
        return true
      }
    }, this))
  },
  flushQueueExceptTrackLink: function(){
    // Because we always s.tl() after the first s.t()
    // that way the variables set by s.tl() will not
    // contaminate the s.t() call.
    if (!this.pending) return
    var left = []
    for (var i = 0; i < this.pending.length; i++){
      var args = this.pending[i]
      var trig = args[0]
      if (trig.command === 'trackLink'){
        left.push(args)
      }else{
        this.triggerCommand.apply(this, args)
      }
    }
    this.pending = left
  },
  isQueueAvailable: function(){
    return !this.initialized
  },
  substituteVariables: function(obj, evt){
    var ret = {}
    for (var key in obj){
      if (obj.hasOwnProperty(key)) {
        var value = obj[key]
        ret[key] = SL.replace(value, location, evt)
      }
    }
    return ret
  },
  $setVars: function(elm, evt, vars){
    for (var v in vars){
      if (vars.hasOwnProperty(v)) {
        var val = vars[v]
        if (typeof val === 'function')
          val = val()
        this.varBindings[v] = val
      }
    }
    SL.notify('Adobe Analytics: set variables.', 2)
  },
  $customSetup: function(elm, evt, setup){
    this.customSetupFuns.push(function(s){
      setup.call(elm, evt, s)
    })
  },
  isValidSCInstance: function(s) {
    return !!s && typeof s.t === 'function' && typeof s.tl === 'function'
  },
  concatWithToolVarBindings: function(varBindings){
    var settingsInitVars = this.settings.initVars || {}

    SL.map(['trackingServer', 'trackingServerSecure'], function (item) {
      if (settingsInitVars[item] && !varBindings[item]) {
        varBindings[item] = settingsInitVars[item]
      }
    });

    return varBindings
  },
  applyVarBindingsOnTracker: function (s, varBindings) {
    for (var v in varBindings){
      if (varBindings.hasOwnProperty(v)) {
        s[v] = varBindings[v]
      }
    }
  },
  clearVarBindings: function(){
    this.varBindings = {}
  },
  clearCustomSetup: function(){
    this.customSetupFuns = []
  },
  executeCustomSetupFuns: function(s){
    SL.each(this.customSetupFuns, function(fun){
      fun.call(window, s)
    })
  },
  $trackLink: function(elm, evt, params){
    params = params || {}
    var type = params.type
    var linkName = params.linkName
    if (!linkName &&
      elm &&
      elm.nodeName &&
      elm.nodeName.toLowerCase() === 'a'){
      linkName = elm.innerHTML
    }
    if (!linkName){
      linkName = 'link clicked'
    }
    var vars = params && params.setVars
    var events = (params && params.addEvent) || []

    var s = this.getS(null, {
      setVars: vars,
      addEvent: events
    })

    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }

    var orgLinkTrackVars = s.linkTrackVars
    var orgLinkTrackEvents = s.linkTrackEvents
    var definedVarNames = this.definedVarNames(vars)

    if (params && params.customSetup){
      params.customSetup.call(elm, evt, s)
    }

    if (events.length > 0)
      definedVarNames.push('events')
    if (s.products)
      definedVarNames.push('products')

    // add back the vars from s
    definedVarNames = this.mergeTrackLinkVars(s.linkTrackVars, definedVarNames)

    // add back events from s
    events = this.mergeTrackLinkVars(s.linkTrackEvents, events)

    s.linkTrackVars = this.getCustomLinkVarsList(definedVarNames)

    var eventsKeys = SL.map(events, function(item) {
      return item.split(':')[0]
    });
    s.linkTrackEvents = this.getCustomLinkVarsList(eventsKeys)

    s.tl(true, type || 'o', linkName)
    SL.notify([
      'Adobe Analytics: tracked link ',
      'using: linkTrackVars=',
      SL.stringify(s.linkTrackVars),
      '; linkTrackEvents=',
      SL.stringify(s.linkTrackEvents)
    ].join(''), 1)

    s.linkTrackVars = orgLinkTrackVars
    s.linkTrackEvents = orgLinkTrackEvents
  },
  mergeTrackLinkVars: function(newVarsStr, varsArr){
    if (newVarsStr) {
      varsArr = newVarsStr.split(',').concat(varsArr)
    }

    return varsArr
  },
  getCustomLinkVarsList: function (keysArr) {
    var noneIndex = SL.indexOf(keysArr, 'None');
    if (noneIndex > -1 && keysArr.length > 1) {
      keysArr.splice(noneIndex, 1)
    }

    return keysArr.join(',');
  },
  definedVarNames: function(vars){
    vars = vars || this.varBindings
    var ret = []
    for (var varname in vars){
      if (vars.hasOwnProperty(varname) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(varname))
        ret.push(varname)
    }
    return ret
  },
  $trackPageView: function(elm, evt, params){
    var vars = params && params.setVars
    var events = (params && params.addEvent) || []

    var s = this.getS(null, {
      setVars: vars,
      addEvent: events
    })

    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }
    s.linkTrackVars = ''
    s.linkTrackEvents = ''
    this.executeCustomSetupFuns(s)
    if (params && params.customSetup){
      params.customSetup.call(elm, evt, s)
    }
    s.t()
    this.clearVarBindings()
    this.clearCustomSetup()
    SL.notify("Adobe Analytics: tracked page view", 1)
  },
  $postTransaction: function(elm, evt, varname){
    var trans = SL.data.transaction = window[varname]
      , s = this.varBindings
      , mapping = this.settings.fieldVarMapping

    SL.each(trans.items, function(item){
      this.products.push(item)
    }, this)

    s.products = SL.map(this.products, function(item){
      var vars = []
      if (mapping && mapping.item){
        for (var field in mapping.item){
          if (mapping.item.hasOwnProperty(field)) {
            var varname = mapping.item[field]
            vars.push(varname + '=' + item[field])
            if (varname.substring(0, 5) === 'event')
              this.events.push(varname)
          }
        }
      }
      var arr = ['', item.product, item.quantity, item.unitPrice * item.quantity]
      if (vars.length > 0)
        arr.push(vars.join('|'))
      return arr.join(';')
    }, this).join(',')

    if (mapping && mapping.transaction){
      // Add top-level events/eVars to products string.
      var topLevelVars = []
      for (var field in mapping.transaction){
        if (mapping.transaction.hasOwnProperty(field)) { 
          var varname = mapping.transaction[field]
          topLevelVars.push(varname + '=' + trans[field])
          if (varname.substring(0, 5) === 'event')
            this.events.push(varname)
        }
      }
      if (s.products.length > 0)
        s.products += ','
      s.products += ';;;;' + topLevelVars.join('|')
    }


  },
  $addEvent: function(elm, evt){
    for (var i = 2, len = arguments.length; i < len; i++){
      this.events.push(arguments[i])
    }
  },
  $addProduct: function(elm, evt){
    for (var i = 2, len = arguments.length; i < len; i++){
      this.products.push(arguments[i])
    }
  }

})
SL.availableTools.sc = SiteCatalystTool

// Google Analytics Tool
// ---------------------
//
// The GATool allows you to use any Google Analytics command.
// Example:
//
//      trigger: [
//          {
//              tool: "ga",
//              command: "trackEvent",
//              arguments: [
//                  "video",
//                  "video 10% complete"
//              ]
//          }
//      ]
//
// This trigger will call the `trackEvent` method, which is equivalent to
//
//     _gaq.push(['_trackEvent', 'video', 'video 10% complete'])
function GATool(settings){
  SL.BaseTool.call(this, settings)
}
SL.inherit(GATool, SL.BaseTool)
SL.extend(GATool.prototype, {
  name: 'GA',
  initialize: function(){
    var settings = this.settings
    var before = window._gaq
      , initCommands = settings.initCommands || []
      , customInit = settings.customInit

    if (!before){
      // And yes, I *do* mean to set a global variable
      // of `_gaq` here
      _gaq = []
    }

    if (!this.isSuppressed()){
      if (!before && !GATool.scriptLoaded){
        var https = SL.isHttps()
        var url =
          (https ? 'https://ssl' : 'http://www') +
          '.google-analytics.com/ga.js'
        if (settings.url){
          url = https ? settings.url.https : settings.url.http
        }
        SL.loadScript(url)
        GATool.scriptLoaded = true
        SL.notify('GA: page code loaded.', 1)
      }
      var domain = settings.domain
        , trackerName = settings.trackerName
        , allowLinker = GAUtils.allowLinker()
        , account = SL.replace(settings.account, location)
        , domainList = SL.settings.domainList || []
      _gaq.push([this.cmd('setAccount'), account])
      if (allowLinker)
        _gaq.push([this.cmd('setAllowLinker'), allowLinker])
      _gaq.push([this.cmd('setDomainName'), GAUtils.cookieDomain()])
      SL.each(initCommands, function(cmd){
        var arr = [this.cmd(cmd[0])].concat(SL.preprocessArguments(cmd.slice(1), location, null, this.forceLowerCase))
        _gaq.push(arr)
      }, this)
      if (customInit)
        this.suppressInitialPageView = false === customInit(_gaq, trackerName)
      if (settings.pageName)
        this.$overrideInitialPageView(null, null, settings.pageName)
    }else{
      SL.notify('GA: page code not loaded(suppressed).', 1)
    }

    this.initialized = true
    SL.fireEvent(this.id + '.configure', _gaq, trackerName)

  },
  isSuppressed: function(){
    return this._cancelToolInit || this.settings.initTool === false
  },
  tracker: function(){
    return this.settings.trackerName
  },
  cmd: function(cmd){
    var tracker = this.tracker()
    return tracker ? tracker + '._' + cmd : '_' + cmd
  },
  $overrideInitialPageView: function(elm, evt, url){
    this.urlOverride = url
  },
  trackInitialPageView: function(){
    if (this.isSuppressed()) return
    if (this.suppressInitialPageView) return
    if (this.urlOverride){
      var args = SL.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase)
      this.$missing$('trackPageview', null, null, args)
    }else{
      this.$missing$('trackPageview')
    }
  },
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      SL.notify('GA: Initializing at ' + pageLoadEvent, 1)
      this.initialize()
      this.flushQueue()
      this.trackInitialPageView()
    }
  },
  call: function(cmd, elm, evt, args){
    if (this._cancelToolInit) return
    var settings = this.settings
      , tracker = this.tracker()
      , fullCmd = this.cmd(cmd)
      , args = args ? [fullCmd].concat(args) : [fullCmd]
    _gaq.push(args)
    if (tracker)
      SL.notify("GA: sent command " + cmd + " to tracker " + tracker +
        (args.length > 1 ?
          " with parameters [" + args.slice(1).join(', ') + "]" :
          '') + ".", 1)
    else
      SL.notify("GA: sent command " + cmd +
        (args.length > 1 ?
          " with parameters [" + args.slice(1).join(', ') + "]":
          '') + ".", 1)
  },
  $missing$: function(cmd, elm, evt, args){
    this.call(cmd, elm, evt, args)
  },
  // individual command methods
  $postTransaction: function(elm, evt, varname){
    var trans = SL.data.customVars.transaction = window[varname]
    this.call('addTrans', elm, evt, [
      trans.orderID,
      trans.affiliation,
      trans.total,
      trans.tax,
      trans.shipping,
      trans.city,
      trans.state,
      trans.country
    ])
    SL.each(trans.items, function(item){
      this.call('addItem', elm, evt, [
        item.orderID,
        item.sku,
        item.product,
        item.category,
        item.unitPrice,
        item.quantity
      ])
    }, this)
    this.call('trackTrans', elm, evt)
  },
  delayLink: function(elm, evt){
    var ga = this
    if (!GAUtils.allowLinker()) return
    if (!elm.hostname.match(this.settings.linkerDomains)) return
    if (SL.isSubdomainOf(elm.hostname, location.hostname)) return
    SL.preventDefault(evt)
    var linkDelay = SL.settings.linkDelay || 100
    setTimeout(function(){
      ga.call('link', elm, evt, [elm.href])
    }, linkDelay)
  },
  popupLink: function(elm, evt){
    if (!window._gat) return
    SL.preventDefault(evt)
    var account = this.settings.account
    var tracker = window._gat._createTracker(account)
    var url = tracker._getLinkerUrl(elm.href)
    window.open(url)
  },
  $link: function(elm, evt){
    if (elm.getAttribute('target') === '_blank'){
      this.popupLink(elm, evt)
    }else{
      this.delayLink(elm, evt)
    }
  },
  $trackEvent: function(elm, evt){
    var args = Array.prototype.slice.call(arguments, 2)
    if (args.length >= 4 && args[3] != null){
      // acertain that the 4th element is a number, falling back to 1
      var value = parseInt(args[3], 10)
      if (SL.isNaN(value)){
        value = 1
      }
      args[3] = value
    }
    this.call('trackEvent', elm, evt, args)
  }
})
SL.availableTools.ga = GATool

// The Google Analytics Universal Tool
// ================
//
// This tool interacts with the [GAU library](https://developers.google.com/analytics/devguides/collection/analyticsjs/).
//
// From a high end perspective the following steps will happen. A `ga` dummy
// object will be initialized. Until the `analytics.js` file will be loaded in
// the browser, any triggered command will be queued in the `ga` object. Once
// the `analytics.js` will finish to load, all the queued commands will be
// executed.
//
// The tool is initialized during one of the following page load phases:
// top, bottom. Find out more info about the initializing sequence by clicking
// [here](#-endplphase-).
//
// Data elements are replaced when the tracker is created and on the commands
// from `initCommands` array. For the other situations, the data elements are
// replaced in the `triggerCommand` method from BaseTool.
//
// Beside the settings that are processed by the BaseTool code, this tool uses
// the following extra settings:
//
// - `engine` - The engine identifier (ga_universal)
// - `loadOn` - The PL phase when this tool will be initialized (top | bottom)
// - `url` - Custom URL of the `analytics.js` URL location. If none is provided
//      the Google default URL will be used.
// - `initTool` - Boolean flag that can suppress the tool initialization phase.
//      When set to `false` no JS library will be loaded and no initial command
//      will be executed. All the later commands triggered by this tool will
//      piggy back on any availble `ga` function from the page.
// - `trackerSettings` - Object containing properties that will be added on the
//      command that will create the GAU tracker. For a list of all supported
//      properties please click [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#create)
// - `initCommands` - It's an array containing commands. A command example:
//      `["set", "anonymizeIp", true]`. For a list of all supported commands
//      please click [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference#tracker)
//      The commands defined here will be executed after the tracker is created.
// - `allowLinker` - Flag that will make the GAU library load the cross domain
//      linking plugin.
// - `customInit` - JS code that will be executed immediately after the tool is
//      initialized. The boolean result from `customInit` will affect the
//      initial page view call.

function GAUniversalTool(settings) {
  SL.BaseTool.call(this, settings)
}

SL.inherit(GAUniversalTool, SL.BaseTool);

SL.extend(GAUniversalTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'GAUniversal',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled. Find out more info about the initializing sequence by clicking
  // [here](#-initialize-).
  //
  // After the tool is initialized a page view call is triggered if
  // `suppressInitialPageView` flag is not set to `true`.
  endPLPhase: function(pageLoadEvent) {
    var settings = this.settings;
    var loadOn = settings.loadOn;

    if (pageLoadEvent === loadOn) {
      SL.notify('GAU: Initializing at ' + pageLoadEvent, 1);
      this.initialize();
      this.flushQueue();
      this.trackInitialPageView();
    }
  },

  // `getTrackerName()`
  // ------------------------------------------------
  //
  // Returns the name of the GA tracker initialized by this tool.
  getTrackerName: function () {
    return this.settings.trackerSettings.name || '';
  },

  // Private
  // ------------------------------------------------
  isPageCodeLoadSuppressed: function() {
    return this.settings.initTool === false || this._cancelToolInit === true;
  },

  // `initialize()`
  // ------------------------------------------------
  //
  // The method first creates the GA scaffolding objects (the `ga` object and
  // the `GoogleAnalyticsObject` object.
  //
  // Then it loads the `analytics.js` library and append the command that will
  // create the GAU tracker object to the `ga` object.
  //
  // Next, the commands from the `initCommands` array will be appended to
  // the `ga` object. Finally the JS code defined in the `customInit` setting
  // variable will be called.
  initialize: function() {
    if (this.isPageCodeLoadSuppressed()) {
      this.initialized = true;
      SL.notify('GAU: Page code not loaded (suppressed).', 1);
      return;
    }

    var gaName = 'ga';

    window[gaName] = window[gaName] || this.createGAObject();
    window.GoogleAnalyticsObject = gaName;

    SL.notify('GAU: Page code loaded.', 1);
    SL.loadScriptOnce(this.getToolUrl());

    var settings = this.settings;

    if (GAUtils.allowLinker() && settings.allowLinker !== false) {
      this.createAccountForLinker();
    } else {
      this.createAccount();
    }

    this.executeInitCommands();

    if (settings.customInit){
      var customInit = settings.customInit
      var result = customInit(window[gaName], this.getTrackerName())
      if (result === false){
        this.suppressInitialPageView = true;
      }
    }

    this.initialized = true;
  },

  createGAObject: function() {
    var ga = function() {
      ga.q.push(arguments);
    };

    ga.q = [];
    ga.l = 1 * new Date();
    return ga;
  },

  createAccount: function() {
    this.create();
  },

  createAccountForLinker: function() {
    var options = {};
    if (GAUtils.allowLinker())
      options.allowLinker = true;

    this.create(options);
    this.call('require', 'linker');
    this.call('linker:autoLink', this.autoLinkDomains(), false, true);
  },

  create: function(extra){
    var options = this.settings.trackerSettings;
    options =
      SL.preprocessArguments([options], location, null, this.forceLowerCase)[0];
    options.trackingId =
      SL.replace(this.settings.trackerSettings.trackingId, location);

    if (!options.cookieDomain) {
      options.cookieDomain = GAUtils.cookieDomain();
    }

    SL.extend(options, extra || {});
    this.call('create', options);
  },

  autoLinkDomains: function() {
    var ourDomain = location.hostname;
    return SL.filter(SL.settings.domainList, function(domain) {
      return domain !== ourDomain;
    });
  },

  executeInitCommands: function() {
    var settings = this.settings;

    if (settings.initCommands) {
      SL.each(settings.initCommands, function(command) {
        var args = command.splice(2, command.length - 2);
        command = command.concat(
          SL.preprocessArguments(args, location, null, this.forceLowerCase)
        );
        this.call.apply(this, command);
      }, this);
    }
  },

  trackInitialPageView: function(){
    if (this.suppressInitialPageView || this.isPageCodeLoadSuppressed()) {
      return;
    }

    this.call('send', 'pageview');
  },

  call: function() {
    if (typeof ga !== 'function') {
      SL.notify('GA Universal function not found!', 4);
      return;
    }

    if (this.isCallSuppressed()) {
      return;
    }

    arguments[0] = this.cmd(arguments[0]);
    this.log(SL.toArray(arguments));
    ga.apply(window, arguments);
  },

  isCallSuppressed: function() {
    return this._cancelToolInit === true;
  },

  $missing$: function(command, elm, evt, args) {
    args = args || [];

    args = [command].concat(args);
    this.call.apply(this, args);
  },

  getToolUrl: function() {
    var settings = this.settings;
    var isHttps = SL.isHttps();

    if (settings.url) {
      return isHttps ? settings.url.https : settings.url.http;
    }

    return (isHttps ? 'https://ssl' : 'http://www') + '.google-analytics.com/analytics.js';
  },

  cmd: function(command) {
    var trackerCommands = ['send', 'set', 'get'];
    var trackerName = this.getTrackerName();

    if (!trackerName || SL.indexOf(trackerCommands, command) === -1) {
      return command;
    }

    return trackerName + '.' + command;
  },

  log: function(args) {
    var cmd = args[0];
    var tracker = this.getTrackerName() || 'default';

    var msg = 'GA Universal: sent command ' + cmd + ' to tracker ' + tracker;
    if (args.length > 1) {
      var parameters = SL.stringify(args.slice(1));
      msg += ' with parameters ' + SL.stringify(args.slice(1));
    }
    msg += '.';
    SL.notify(msg, 1);
  }
});

SL.availableTools.ga_universal = GAUniversalTool;

var GAUtils = {
  allowLinker: function() {
    return SL.hasMultipleDomains();
  },
  cookieDomain: function() {
    var domainList = SL.settings.domainList;
    var domainName = SL.find(domainList, function(domain) {
      var hostname = window.location.hostname;
      return SL.equalsIgnoreCase(
        hostname.slice(hostname.length - domain.length),
        domain);
    });
    var cookieDomain = domainName ? ('.' + domainName) : 'auto';

    return cookieDomain;
  }
};

// E-Commerce APIs
// ---------------
//
// The ecommerce API allows web admins to integrate e-commerce tracking with Satellite.
// More details on the [GA E-Commerce API's](http://code.google.com/apis/analytics/docs/gaJS/gaJSApiEcommerce.html).
// Upon any of the methods on the API being called, they will fire an event, which
// in turn can be handled by a rule in the library.

SL.ecommerce = {
  // `addItem(orderId, sku, name, category, price, quantity)`
  // -------------------------------------
  //
  // Add an item to the transaction.
  addItem: function(){
    var args = [].slice.call(arguments)
    SL.onEvent({type: 'ecommerce.additem', target: args})
  },

  // `addTrans(orderId, affiliation, total, tax, shipping, city, state, country)`
  // ----------------------------------------------------------------------------
  //
  // Add a new transaction.
  addTrans: function(){
    var args = [].slice.call(arguments)
    SL.data.saleData.sale = {
      orderId: args[0],
      revenue: args[2]
    }
    SL.onEvent({type: 'ecommerce.addtrans', target: args})
  },

  // `trackTrans()`
  // --------------
  //
  // Send the transaction data that's been set up using `addItem()` and `addTrans()`
  // to GA to be tracked.
  trackTrans: function(){
    SL.onEvent({type: 'ecommerce.tracktrans', target: []})
  }
}

// Visibility API Event Emitter
// ============================
//
// The `visibility API` is used when the browser's tab gets hidden because
// another tab now is visible. For more information see Mozilla's [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)

SL.visibility = {
  // Public
  // ------------------------------------------------

  // `isHidden()`
  //
  // The method returns true if the tab is hidden, otherwise false.
  isHidden: function() {
    var prop = this.getHiddenProperty();
    if (!prop) return false;
    return document[prop];
  },

  // `isVisible()`
  //
  // The method is an alias for the `!isHidden`.
  isVisible: function() {
    return !this.isHidden();
  },

  // Private
  // ------------------------------------------------
  getHiddenProperty: function() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    if ('hidden' in document) return 'hidden';
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++) {
      if ((prefixes[i] + 'Hidden') in document)
        return prefixes[i] + 'Hidden';
    }
    // otherwise it's not supported
    return null;
  },

  getVisibilityEvent: function() {
    var ve = this.getHiddenProperty();
    if (!ve) return null;
    return ve.replace(/[H|h]idden/,'') + 'visibilitychange';
  }
};


_satellite.init({
  "tools": {
    "d50a745cd521ea09810c1674d30afa63": {
      "engine": "sc",
      "loadOn": "pagebottom",
      "account": "bpceceprod1609",
      "euCookie": false,
      "sCodeURL": "aefe7b3b3c01434d871f950641ec477bfb6e4600/s-code-contents-3d24fd22976189ef052b9baeffe854f5279a7509.js",
      "renameS": "s",
      "initVars": {
        "charSet": "UTF-8",
        "currencyCode": "EUR",
        "campaign": 
SL.getQueryParam('cid')
,
        "pageName": "%PagePageName%",
        "trackInlineStats": true,
        "trackDownloadLinks": false,
        "trackExternalLinks": false,
        "linkLeaveQueryString": false,
        "dynamicVariablePrefix": "D=",
        "eVar1": "D=c1",
        "eVar2": "D=c2",
        "eVar3": "D=c3",
        "eVar4": "D=c4",
        "eVar13": "D=c13",
        "eVar14": "D=c14",
        "eVar50": "D=c31",
        "prop1": "%ClientCodeEtablissement%",
        "prop2": "%ClientId%",
        "prop3": "%ClientStatut%",
        "prop4": "%ClientMarche%",
        "prop5": "%PageCodeEnttGrpe%",
        "prop6": "%PageApplicationType%",
        "prop7": "%PageApplicationName%",
        "prop8": "%PageMarche%",
        "prop9": "%PageUnivers%",
        "prop10": "%PagePageType%",
        "prop13": "%window.location.pathname%",
        "prop14": "%FormNom%",
        "prop15": "%FormIdEtape%",
        "prop16": "%PageEspace%",
        "prop17": "%ProduitGamme%",
        "prop18": "%ProduitCode%",
        "prop31": "%PagePageName%"
      },
      "customInit": function(s){
//plugin permettant de collecter les differents univers de navigation
var univers = univers || "";
s.multigetValOnce = new Function("v", "c", "e", ""
+ "var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+ ");if(v && k.indexOf(v,0)<0){a.setTime(a.getTime()+e*0);s.c_w(c,k+'|'+v,e?a:0);}else{v='';k='';} return"
+ " v==k?'':v");    
                               
var univ ;
univ = s.multigetValOnce (s.prop9, univers) ;
 
if (univ && univ != '') {
  s.eVar44 = univ ; 
  s.linkTrackVars = s.linkTrackVars + ",eVar44" ; 
}

//Gestion du non tracking des IFrames
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");

}
    },
    "bd9a3c73bd50f39a9852f0e86056030b7e8aa9ac": {
      "engine": "visitor_id",
      "loadOn": "pagetop",
      "name": "VisitorID",
      "mcOrgId": "3314CACD561ED2727F000101@AdobeOrg",
      "autoRequest": true,
      "initVars": {
      },
      "customerIDs": {
        "IDCRM": {
          "id": "%IDCRM%",
          "authState": "AUTHENTICATED"
        }
      }
    }
  },
  "pageLoadRules": [
    {"name":"EZ - PageLoadDefault","trigger":[{"engine":"sc","command":"setVars","arguments":[{"pageName":"%PagePageName%"}]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
//====== Récupération informations AB-Testing

if ( typeof xt_abmv !== 'undefined' )
{
  let myReg = /([0-9]+)\[[^{}|"^,~[\]`\s<>'#\\]+\]-1-([0-9]+)\[[^{}|"^,~[\]`\s<>'#\\]+\]/g;
  
  if ( myReg.test( xt_abmv ) )
  {
  	let splitAB = xt_abmv.split("[");
  	let splitA = splitAB[1].split("]");
  	let nameAB = splitA[0] ? splitA[0] : "";
  	let splitB = splitAB[2].split("]");
  	let versionAB = splitB[0] ? splitB[0] : "";
  	s.linkTrackVars="eVar48";
  	s.eVar48 = nameAB + "|" + versionAB;
  }
}

//====== Gestion exceptionnelle de l'univers

let currentUrl = document.location.href;

if ( currentUrl.indexOf("gestion-privee") != -1 || currentUrl.indexOf("prendre-rendez-vous-produit") != -1 )
{
  datalayer.page.univers = "Epargner";
	s.prop9 = "Epargner";
}
}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PagePageType"), /.+/i);
},function(){
return _satellite.textMatch(_satellite.getVar("PagePageType"), /^(?!marche)/i);
},function(){
return _satellite.textMatch(_satellite.getVar("window.location.pathname"), /^(?!.*\/search\/).*/i);
},function(){
return _satellite.textMatch(_satellite.getVar("window.location.pathname"), /^(?!.*\\?pdt=).*/i);
}],"event":"pagebottom"},
    {"name":"EZ - PageLoadFormulaireFirstStep","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop14":"%FormNom%","prop15":"%FormIdEtape%","prop18":"%ProduitEnLien%"}]},{"engine":"sc","command":"addEvent","arguments":["event1"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
//====== Récupération informations AB-Testing

if ( typeof xt_abmv !== 'undefined' )
{
  let myReg = /([0-9]+)\[[^{}|"^,~[\]`\s<>'#\\]+\]-1-([0-9]+)\[[^{}|"^,~[\]`\s<>'#\\]+\]/g;
  
  if ( myReg.test( xt_abmv ) )
  {
  	let splitAB = xt_abmv.split("[");
  	let splitA = splitAB[1].split("]");
  	let nameAB = splitA[0] ? splitA[0] : "";
  	let splitB = splitAB[2].split("]");
  	let versionAB = splitB[0] ? splitB[0] : "";
  	s.linkTrackVars="eVar48";
  	s.eVar48 = nameAB + "|" + versionAB;
  }
}
}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("FormIdEtape"), "1");
},function(){
return _satellite.textMatch(_satellite.getVar("PagePageType"), "formulaire");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
}],"event":"pagebottom"},
    {"name":"EZ - PageLoadFormulaireLastStep","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop14":"%FormNom%","prop15":"%FormIdEtape%","prop18":"%ProduitEnLien%"}]},{"engine":"sc","command":"addEvent","arguments":["event2"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
//====== Récupération informations AB-Testing

if ( typeof xt_abmv !== 'undefined' )
{
  let myReg = /([0-9]+)\[[^{}|"^,~[\]`\s<>'#\\]+\]-1-([0-9]+)\[[^{}|"^,~[\]`\s<>'#\\]+\]/g;
  
  if ( myReg.test( xt_abmv ) )
  {
  	let splitAB = xt_abmv.split("[");
  	let splitA = splitAB[1].split("]");
  	let nameAB = splitA[0] ? splitA[0] : "";
  	let splitB = splitAB[2].split("]");
  	let versionAB = splitB[0] ? splitB[0] : "";
  	s.linkTrackVars="eVar48";
  	s.eVar48 = nameAB + "|" + versionAB;
  }
}
}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("FormIdEtape"), "2");
},function(){
return _satellite.textMatch(_satellite.getVar("PagePageType"), "formulaire");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
}],"event":"pagebottom"},
    {"name":"EZ - PageLoadHome","trigger":[{"engine":"sc","command":"setVars","arguments":[{"pageName":"%PagePageName%"}]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){

//====== Récupération informations AB-Testing

if ( typeof xt_abmv !== 'undefined' )
{
  let myReg = /([0-9]+)\[[^{}|"^,~[\]`\s<>'#\\]+\]-1-([0-9]+)\[[^{}|"^,~[\]`\s<>'#\\]+\]/g;
  
  if ( myReg.test( xt_abmv ) )
  {
  	let splitAB = xt_abmv.split("[");
  	let splitA = splitAB[1].split("]");
  	let nameAB = splitA[0] ? splitA[0] : "";
  	let splitB = splitAB[2].split("]");
  	let versionAB = splitB[0] ? splitB[0] : "";
  	s.linkTrackVars="eVar48";
  	s.eVar48 = nameAB + "|" + versionAB;
  }
}


//====== RÈcupÈration et construction nomenclature vignettes majeures et mineures pour list1
let tmpVign = [];
let obj;
let listVignette = "";

//- 1 - Check Menu vignettes

let listMenu = $.find("li.dropdown.header-dropdown");
let tmpA;

$.each( listMenu, function( a, b )
{
    tmpA = $(b).find("div.slide.pushes a");

    if ( tmpA.length == 1 )
    {
        tmpA = tmpA[0];

        /* DEBUT - Ajout FabienJ IT-CE */
        obj  = {};
        obj.title = $(this).find('img').attr('title');
        obj.idc = '';
        /* FIN - Ajout FabienJ IT-CE */

        if ( obj )
        {
            obj.order = "HP-MENU-" + ( a + 1 );
            obj.format = "mineure";
            tmpVign = createList( obj, listVignette );
            listVignette = tmpVign[0];
            tmpA.setAttribute( "adobe_a", tmpVign[1] );
        }
    }
});

//- 2 - Check Maj vignettes

let listMaj = $.find("a.element.big-push-offers");

$.each( listMaj, function( a, b )
{
    /* DEBUT - Modif FabienJ IT-CE */
    obj = getAtiTracking( a, b, 1 );
    /* FIN - Modif FabienJ IT-CE */

    if ( obj )
    {
        obj.order = "HP-MAJ-" + ( a + 1 );
        obj.format = "majeure";
        tmpVign = createList( obj, listVignette );
        listVignette = tmpVign[0];
        b.setAttribute( "adobe_a", tmpVign[1] );
    }
});

//- 3 - Check Min vignettes

let container = $.find("section.pushes-slider")
let listMin = $(container[0]).find("div.slide a");

$.each( listMin, function( a, b )
{
    /* DEBUT - Modif FabienJ IT-CE */
    obj = getAtiTracking( a, b, 4 );
    /* FIN - Modif FabienJ IT-CE */

    if ( obj )
    {
        obj.order = "HP-MIN-" + ( a + 1 );
        obj.format = "mineure";
        tmpVign = createList( obj, listVignette );
        listVignette = tmpVign[0];
        b.setAttribute( "adobe_a", tmpVign[1] );
    }
});

//- 4 - Create List

if ( listVignette !== "" )
{
    s.list1 = listVignette;
    s.events="event28";
}

//=== Methodes tiers ======>

function createList( pObj, pList )
{
    let tmpLibelle = pObj.title + "|" + pObj.idc + "|" + pObj.format + "|" + pObj.order;

    if ( pList == "" )
    {
        pList = tmpLibelle;
    }
    else
    {
        pList += ";" + tmpLibelle;
    }

    return [pList, tmpLibelle];
}

/* DEBUT - Modif FabienJ IT-CE */
function getAtiTracking(currentIndex, link, datalayerOffset) {

    let dataIndex = currentIndex + datalayerOffset;

    let tmpObj = {};

    tmpObj.title = datalayer.generique['data0' + dataIndex];
    tmpObj.idc = '';

    return tmpObj;

}
/* FIN - Modif FabienJ IT-CE */
}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(){
return _satellite.textMatch(_satellite.getVar("PagePageType"), "marche");
}],"event":"pagebottom"},
    {"name":"EZ - PageLoadSearch","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar7":"%GeneriqueData01%","eVar8":"%GeneriqueData02%"}]},{"engine":"sc","command":"addEvent","arguments":["event11"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
//====== Récupération informations AB-Testing

if ( typeof xt_abmv !== 'undefined' )
{
  let myReg = /([0-9]+)\[[^{}|"^,~[\]`\s<>'#\\]+\]-1-([0-9]+)\[[^{}|"^,~[\]`\s<>'#\\]+\]/g;
  
  if ( myReg.test( xt_abmv ) )
  {
  	let splitAB = xt_abmv.split("[");
  	let splitA = splitAB[1].split("]");
  	let nameAB = splitA[0] ? splitA[0] : "";
  	let splitB = splitAB[2].split("]");
  	let versionAB = splitB[0] ? splitB[0] : "";
  	s.linkTrackVars="eVar48";
  	s.eVar48 = nameAB + "|" + versionAB;
  }
}
}]}],"scope":{"URI":{"include":["\\/search\\/"]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
}],"event":"pagebottom"}
  ],
  "rules": [
    {"name":"EZ - FormlrContctClickBtnAnnl","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Annulation","eVar6":"Annuler","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"#main.page-contact-form [data-tracking-form-cancel]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - FormlrContctClickBtnVld","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar25":"%GeneriqueData01%","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Validation","eVar6":"Valider","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var strRaisonMessage = '';
strRaisonMessage = $("#contact-request option:selected").html();
datalayer.generique.data01 = strRaisonMessage;
 return true;
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"#main.page-contact-form [data-tracking-form-submit]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - HeaderClicContactAgence","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Contact conseiller Agence","eVar6":"Contact","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"a.tooltip-contact-link.icon-bpce-circle-pins","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - HeaderClicContactMail","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Contact conseiller Email","eVar6":"Contact","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"a.contact-email.icon-bpce-circle-mail","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - HeaderClicContactPhone","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Contact conseiller Téléphone","eVar6":"contact","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"a.contact-tel.icon-bpce-circle-tel","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - HomePageClickVignetteMajeure","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"%this.getAttribute(data-alt)%","eVar6":"Vignette Majeure","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"customSetup":function(event,s){
//====== Récupération et construction nomenclature vignette


if ( this.hasAttribute("adobe_a") )
{
  let tmpVignette = this.getAttribute("adobe_a");
  s.linkTrackVars="eVar49,eVar50,eVar51,list1,events";
  s.eVar49 = tmpVignette;
  s.eVar50 = datalayer.page.pageName;
  s.eVar51 = "D=c8";
  s.list1 = tmpVignette;
  s.linkTrackEvents="event10,event29";
  s.events="event10,event29";
  s.eVar5 = ( $(this).find("[data-picture]") )[0].getAttribute("data-alt");
}
},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(){
return _satellite.textMatch(_satellite.getVar("PagePageType"), "marche");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"div.main-slider div.container a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - HomePageClickVignetteMineure","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"%this.getAttribute(title)%","eVar50":"D=c31","eVar6":"Vignette Mineure","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"customSetup":function(event,s){
//====== Récupération et construction nomenclature vignette
if ( this.hasAttribute("adobe_a") )
{
  let tmpVignette = this.getAttribute("adobe_a");
  s.linkTrackVars="eVar49,eVar50,eVar51,list1,events";
  s.eVar49 = tmpVignette;
  s.eVar50 = datalayer.page.pageName;
  s.eVar51 = "D=c8";
  s.list1 = tmpVignette;
  s.linkTrackEvents="event10,event29";
  s.events="event10,event29";
  s.eVar5 = ( $(this).find("img") )[0].getAttribute("title");
}
},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(){
return _satellite.textMatch(_satellite.getVar("PagePageType"), "marche");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":".slide a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickBlcFaq","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Bloc FAQ","eVar6":"Annuler","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"#main.product-page .section-faq .question","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickBtnContctConsAgc","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Contact conseiller Agence","eVar6":"Contact","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"a[data-tracking-contact-agence]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickBtnContctConsMel","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Contact conseiller Email","eVar6":"Contact","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"a[data-tracking-contact-mail]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickBtnContctConsTel","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Contact conseiller Téléphone","eVar6":"contact","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"a[data-tracking-contact-tel]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickBtnMtrRch","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Clic Résultat Recherche","eVar6":"Search","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "1");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":".results-list","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickBtnPushPrdt","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar17":"%this.getAttribute(data-tracking-push-type)%","eVar18":"%this.getAttribute(data-tracking-push-title)%","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"%this.getAttribute(data-tracking-push-title)%","eVar6":"Vignette","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event13"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var isMultipanel= $(this).attr("data-tracking-push-bloc-title");
if (typeof(isMultipanel) == "undefined" || isMultipanel == "")
  { 
    console.log("isMultipanel: undefined");
    return true; 
  }
else
  { 
    console.log("isMultipanel: defined");
    return false; 
  }
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"a[data-tracking-push-title]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickBtnPushPrdtBlocMultiPanel","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar15":"%this.getAttribute(data-tracking-push-bloc-title)%","eVar16":"%this.getAttribute(data-tracking-push-tab-title)%","eVar17":"%this.getAttribute(data-tracking-push-type)%","eVar18":"%this.getAttribute(data-tracking-push-title)%","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"%this.getAttribute(data-tracking-push-title)%","eVar6":"Vignette","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event13"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var isMultipanel= $(this).attr("data-tracking-push-bloc-title");
if (typeof(isMultipanel) == "undefined" || isMultipanel == "")
  { 
    console.log("isMultipanel: undefined");
    return false; 
  }
else
  { 
    console.log("isMultipanel: defined");
    return true; 
  }
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"a[data-tracking-push-title]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickBtnRseauxSocx","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"partage","eVar6":"social","eVar9":"%this.getAttribute(data-tracking-social-name)%","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event12"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"#main a[data-tracking-social-name]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickBtnRseauxSocxFoot","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"footer","eVar6":"social","eVar9":"%this.getAttribute(data-tracking-social-name)%","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event12"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"#footer a[data-tracking-social-name]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickButtons","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"%this.innerText%","eVar6":"button","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;
}],"selector":"#main a.cta[target]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickLnFaq","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"FAQ","eVar6":"link","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"#main.page-faq .question-title","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickLnHypertxt","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar10":"%this.getAttribute(href)%","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"%this.innerText%","eVar6":"Link","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":".ezxmltext-field a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PagesClickLnMtrRchResult","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar10":"%GeneriqueData10%","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Clic Résultat Recherche","eVar6":"search","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event10"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var urlLien = '';
urlLien=$(this).parent().attr('href');
datalayer.generique.data10 = urlLien;
return true;
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"#main.page-search .results-element a p","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - PauthVadClickvgntt","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar18":"%this.getAttribute(data-tracking-pauth-thumb)%","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Vignette","eVar6":"vignette","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event13"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;

}],"selector":"#pauth .push a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - SavClickEnvoyerCommentaire","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"%this.innerText%","eVar58":"%GeneriqueData01%","eVar6":"button","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event34"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();

var strSavComment = '';
strSavComment = $(".vote-comment textarea").val();
datalayer.generique.data01 = strSavComment;

return true;
}],"selector":".vote-comment input","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - SavClickEnvoyerMail","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Mail","eVar6":"button","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"}}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;
}],"selector":".icon_mail","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - SavClickEnvoyerMessenger","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"Messenger","eVar6":"button","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"}}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;
}],"selector":".icon_fb","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - SavClickThumbDown","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"%this.innerText%","eVar6":"button","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event33"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;
}],"selector":".savvoting a.vote-down","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"EZ - SavClickThumbUp","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","eVar5":"%this.innerText%","eVar6":"button","prop1":"%ClientCodeEtablissement%","prop10":"%PagePageType%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop31":"%PagePageName%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event32"]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageIframe"), "0");
},function(){
return _satellite.textMatch(_satellite.getVar("PageApplicationName"), "eCommerce");
},function(event,target){
var s = _satellite.getToolsByType('sc')[0].getS();
s.clearVars();
return true;
}],"selector":".savvoting a.vote-up","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false}
  ],
  "directCallRules": [
    {"name":"ezPauthOpen","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar1":"D=c1","eVar13":"D=c13","eVar14":"D=c14","eVar2":"D=c2","eVar3":"D=c3","eVar4":"D=c4","prop1":"%ClientCodeEtablissement%","prop10":"%PageUnivers%","prop13":"%window.location.pathname%","prop14":"%FormNom%","prop15":"%FormIdEtape%","prop16":"%PageEspace%","prop17":"%ProduitGamme%","prop18":"%ProduitCode%","prop2":"%ClientId%","prop3":"%ClientStatut%","prop4":"%ClientMarche%","prop5":"%PageCodeEnttGrpe%","prop6":"%PageApplicationType%","prop7":"%PageApplicationName%","prop8":"%PageMarche%","prop9":"%PageUnivers%","pageName":"%PagePageName%"},"addEvent":["event4"]}]}]}
  ],
  "settings": {
    "trackInternalLinks": true,
    "libraryName": "satelliteLib-2b106a85c533b4c6d371f88d7c371c4fffa189b9",
    "isStaging": false,
    "allowGATTcalls": false,
    "downloadExtensions": /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
    "notifications": false,
    "utilVisible": false,
    "domainList": [
      "caisse-epargne.fr"
    ],
    "scriptDir": "aefe7b3b3c01434d871f950641ec477bfb6e4600/scripts/",
    "tagTimeout": 3000
  },
  "data": {
    "URI": 
document.location.pathname + document.location.search
,
    "browser": {
    },
    "cartItems": [

    ],
    "revenue": "",
    "host": {
      "http": window.location.hostname + "/configuration/file/tracking/portail",
      "https": window.location.hostname + "/configuration/file/tracking/portail"
    }
  },
  "dataElements": {
    "CampagneId": {"jsVariable":"datalayer.campagne.id","storeLength":"pageview"},
    "ClicLibelle": {"jsVariable":"datalayer.clic.libelle","storeLength":"pageview"},
    "ClicType": {"jsVariable":"datalayer.clic.type","storeLength":"pageview"},
    "ClientCodeEtablissement": {"jsVariable":"datalayer.client.idEnttGrpe","storeLength":"pageview"},
    "ClientId": {"jsVariable":"datalayer.client.id","storeLength":"pageview"},
    "ClientMarche": {"jsVariable":"datalayer.client.marche","storeLength":"pageview"},
    "ClientStatut": {"jsVariable":"datalayer.client.statut","storeLength":"pageview"},
    "FormIdEtape": {"jsVariable":"datalayer.form.idEtape","storeLength":"pageview"},
    "FormNom": {"jsVariable":"datalayer.form.nom","storeLength":"pageview"},
    "GeneriqueData01": {"jsVariable":"datalayer.generique.data01","storeLength":"pageview"},
    "GeneriqueData02": {"jsVariable":"datalayer.generique.data02","storeLength":"pageview"},
    "GeneriqueData03": {"jsVariable":"datalayer.generique.data03","storeLength":"pageview"},
    "GeneriqueData04": {"jsVariable":"datalayer.generique.data04","storeLength":"pageview"},
    "GeneriqueData05": {"jsVariable":"datalayer.generique.data05","storeLength":"pageview"},
    "GeneriqueData06": {"jsVariable":"datalayer.generique.data06","storeLength":"pageview"},
    "GeneriqueData07": {"jsVariable":"datalayer.generique.data07","storeLength":"pageview"},
    "GeneriqueData08": {"jsVariable":"datalayer.generique.data08","storeLength":"pageview"},
    "GeneriqueData09": {"jsVariable":"datalayer.generique.data09","storeLength":"pageview"},
    "GeneriqueData10": {"jsVariable":"datalayer.generique.data10","storeLength":"pageview"},
    "IDCRM": {"customJS":function(){
var IDCRM = datalayer.client.idEnttGrpe + datalayer.client.id;
return IDCRM;
},"storeLength":"pageview"},
    "PageApplicationName": {"jsVariable":"datalayer.page.applicationName","storeLength":"pageview"},
    "PageApplicationType": {"jsVariable":"datalayer.page.applicationType","storeLength":"pageview"},
    "PageCodeEnttGrpe": {"jsVariable":"datalayer.page.codeEnttGrpe","storeLength":"pageview"},
    "PageEspace": {"jsVariable":"datalayer.page.espace","storeLength":"pageview"},
    "PageIframe": {"jsVariable":"datalayer.page.iframe","storeLength":"pageview"},
    "PageMarche": {"jsVariable":"datalayer.page.marche","storeLength":"pageview"},
    "PagePageName": {"jsVariable":"datalayer.page.pageName","storeLength":"pageview"},
    "PagePageType": {"jsVariable":"datalayer.page.pageType","storeLength":"pageview"},
    "PageUnivers": {"jsVariable":"datalayer.page.univers","storeLength":"pageview"},
    "ProductLinked": {"storeLength":"pageview"},
    "ProduitCode": {"jsVariable":"datalayer.produit.code","storeLength":"pageview"},
    "ProduitEnLien": {"queryParam":"pdt","default":"NA","storeLength":"pageview","ignoreCase":1},
    "ProduitGamme": {"jsVariable":"datalayer.produit.gamme","storeLength":"pageview"}
  },
  "appVersion": "7QN",
  "buildDate": "2019-05-09 07:49:38 UTC",
  "publishDate": "2019-05-09 07:49:37 UTC"
});
})(window, document);
