var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(g){var window=this;var Ipa=function(a,b){return g.Wb(a,b)},f5=function(a,b,c){a.l.set(b,c)},g5=function(a){f5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.A)()).toString(36));
return a},h5=function(a,b,c){g.La(c)||(c=[String(c)]);
g.Vm(a.l,b,c)},Jpa=function(a,b){var c=[];
g.Zi(b,function(d){try{var e=g.Fn.prototype.i.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.En(e)&&c.push(d)},a);
return c},Kpa=function(a,b){var c=Jpa(a,b);
(0,g.z)(c,function(d){g.Fn.prototype.remove.call(this,d)},a)},i5=function(a){if(a.bd){if(a.bd.locationOverrideToken)return{locationOverrideToken:a.bd.locationOverrideToken};
if(null!=a.bd.latitudeE7&&null!=a.bd.longitudeE7)return{latitudeE7:a.bd.latitudeE7,longitudeE7:a.bd.longitudeE7}}return null},Lpa=function(a,b){g.ab(a,b)||a.push(b)},j5=function(a){var b=0,c;
for(c in a)b++;return b},k5=function(a,b){var c=b instanceof g.xc?b:g.Cc(b,/^data:image\//i.test(b));
a.src=g.yc(c)},l5=function(){},Mpa=function(a){try{return g.u.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Npa=function(a){if(a.wd&&"function"==typeof a.wd)return a.wd();
if("string"===typeof a)return a.split("");if(g.Ma(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Sb(a)},Opa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ma(a)||"string"===typeof a)(0,g.z)(a,b,void 0);else{if(a.Yd&&"function"==typeof a.Yd)var c=a.Yd();else if(a.wd&&"function"==typeof a.wd)c=void 0;else if(g.Ma(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Tb(a);d=Npa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},Ppa=function(a,b,c,d){var e=new g.Jm(null,void 0);
a&&g.Km(e,a);b&&g.Lm(e,b);c&&g.Mm(e,c);d&&(e.i=d);return e},m5=function(a,b){g.Ho[a]=!0;
var c=g.Fo();c&&c.publish.apply(c,arguments);g.Ho[a]=!1},n5=function(a){try{var b=(0,g.$x)(),c=(0,g.Zx)();
b&&b.remove(a);c&&c.remove(a)}catch(d){}},Qpa=function(){var a=(0,g.Zx)();
a&&Kpa(a,a.g.ff(!0))},o5=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.l=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Gm;this.g=this.i="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Rpa(this,a.capabilities||""),Spa(this,a.experiments||""),this.i=a.remoteControllerUrl||"",this.g=a.localChannelEncryptionKey||
"")},Rpa=function(a,b){a.capabilities.clear();
(0,g.Wd)(b.split(","),g.Ra(Ipa,Tpa)).forEach(function(c){a.capabilities.add(c)})},Spa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},p5=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},q5=function(a,b){return!!b&&(a.id==b||a.uuid==b)},r5=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Upa=function(a){return new p5(a)},s5=function(a){return g.La(a)?(0,g.fe)(a,Upa):[]},t5=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},u5=function(a){return g.La(a)?"["+(0,g.fe)(a,t5).join(",")+"]":"null"},v5=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Vpa=function(a){return(0,g.fe)(a,function(b){return{key:b.id,
name:b.name}})},w5=function(a,b){return g.Ya(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},x5=function(a,b){return g.Ya(a,function(c){return q5(c,b)})},y5=function(){var a=g.by("yt-remote-connected-devices")||[];
g.rb(a);return a},Wpa=function(a){if(g.bb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.fe)(a,function(d,e){return 0==e?d:d.substring(c.length)})},z5=function(a){g.ay("yt-remote-connected-devices",a,86400)},B5=function(){if(A5)return A5;
var a=g.by("yt-remote-device-id");a||(a=v5(),g.ay("yt-remote-device-id",a,31536E3));for(var b=y5(),c=1,d=a;g.ab(b,d);)c++,d=a+"#"+c;return A5=d},C5=function(){var a=y5(),b=B5();
g.ab(a,b);g.jL()&&g.ub(a,b);a=Wpa(a);if(g.bb(a))try{g.ur("remote_sid")}catch(c){}else try{g.tr("remote_sid",a.join(","),-1)}catch(c){}},D5=function(){return g.by("yt-remote-session-browser-channel")},E5=function(){return g.by("yt-remote-local-screens")||[]},F5=function(){g.ay("yt-remote-lounge-token-expiration",!0,86400)},Xpa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.fe)(E5(),function(d){return d.loungeToken}),c=(0,g.fe)(a,function(d){return d.loungeToken});
(0,g.Yg)(c,function(d){return!g.ab(b,d)})&&F5();
g.ay("yt-remote-local-screens",a,31536E3)},Ypa=function(a,b){g.ay("yt-remote-session-browser-channel",a);
g.ay("yt-remote-session-screen-id",b);var c=y5(),d=B5();g.ab(c,d)||c.push(d);z5(c);C5()},G5=function(a){a||(n5("yt-remote-session-screen-id"),n5("yt-remote-session-video-id"));
C5();a=y5();g.eb(a,B5());z5(a)},I5=function(){if(!H5){var a=g.Pn();
a&&(H5=new g.zn(a))}return H5?!!H5.get("yt-remote-use-staging-server"):!1},J5=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},K5=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},M5=function(a){a.length?L5(a.shift(),function(){M5(a)}):N5()},Zpa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},L5=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},N5=function(){var a=K5();
a&&a(!1,"No cast extension found")},O5=function(){if($pa){var a=2,b=K5(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;L5("//web.archive.org/web/20191003170541/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",N5,c)}},aqa=function(){O5();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);M5(["//web.archive.org/web/20191003170541/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20191003170541/https://www.gstatic.com/eureka/clank/cast_sender.js"])},P5=function(a,b,c){g.E.call(this);
this.w=null!=c?(0,g.x)(a,c):a;this.Tc=b;this.u=(0,g.x)(this.ZB,this);this.g=!1;this.i=0;this.l=this.za=null;this.o=[]},Q5=function(a){if(g.u.JSON)try{return g.u.JSON.parse(a)}catch(b){}return Mpa(a)},R5=function(){},S5=function(){},T5=function(){},V5=function(a){return(a=U5(a))?new ActiveXObject(a):new XMLHttpRequest},U5=function(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i},W5=function(a,b,c,d){this.g=a;
this.l=b;this.B=c;this.w=d||1;this.o=45E3;this.ba=new g.sZ(this);this.i=new g.gl;this.i.setInterval(250)},Y5=function(a,b,c){a.Mh=1;
a.Mf=g5(b.clone());a.gh=c;a.u=!0;X5(a,null)},Z5=function(a,b,c,d,e){a.Mh=1;
a.Mf=g5(b.clone());a.gh=null;a.u=c;e&&(a.Vy=!1);X5(a,d)},X5=function(a,b){a.vi=(0,g.A)();
$5(a);a.rg=a.Mf.clone();h5(a.rg,"t",a.w);a.Gk=0;a.uc=a.g.Ko(a.g.uk()?b:null);0<a.np&&(a.ln=new g.jl((0,g.x)(a.Tz,a,a.uc),a.np));a.ba.ea(a.uc,"readystatechange",a.TK);var c=a.Ng?g.bc(a.Ng):{};a.gh?(a.Qn="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.uc.send(a.rg,a.Qn,a.gh,c)):(a.Qn="GET",a.Vy&&!g.Ld&&(c.Connection="close"),a.uc.send(a.rg,a.Qn,null,c));a.g.ne(1)},g6=function(a,b,c){for(var d=!0;!a.Bg&&a.Gk<c.length;){var e=bqa(a,c);
if(e==a6){4==b&&(a.cg=4,b6(15),d=!1);break}else if(e==c6){a.cg=4;b6(16);d=!1;break}else d6(a,e)}4==b&&0==c.length&&(a.cg=1,b6(17),d=!1);a.oe=a.oe&&d;d||(e6(a),f6(a))},bqa=function(a,b){var c=a.Gk,d=b.indexOf("\n",c);
if(-1==d)return a6;c=Number(b.substring(c,d));if(isNaN(c))return c6;d+=1;if(d+c>b.length)return a6;var e=b.substr(d,c);a.Gk=d+c;return e},j6=function(a,b){a.vi=(0,g.A)();
$5(a);var c=b?window.location.hostname:"";a.rg=a.Mf.clone();f5(a.rg,"DOMAIN",c);f5(a.rg,"t",a.w);try{a.ue=new ActiveXObject("htmlfile")}catch(n){e6(a);a.cg=7;b6(22);f6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in h6)k=h6[l];else if(l in i6)k=h6[l]=i6[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
h6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Rc(g.qc("b/12014412"),d+"</body></html>");a.ue.open();a.ue.write(g.Mc(c));a.ue.close();a.ue.parentWindow.m=(0,g.x)(a.jK,a);a.ue.parentWindow.d=(0,g.x)(a.dy,a,!0);a.ue.parentWindow.rpcClose=(0,g.x)(a.dy,a,!1);c=a.ue.createElement("DIV");a.ue.parentWindow.document.body.appendChild(c);d=g.Bc(a.rg.toString());d=g.Zc(g.zc(d));d=g.Rc(g.qc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Sc(c,d);a.g.ne(1)},$5=function(a){a.Vr=(0,g.A)()+a.o;
k6(a,a.o)},k6=function(a,b){if(null!=a.Ji)throw Error("WatchDog timer not null");
a.Ji=l6((0,g.x)(a.rK,a),b)},m6=function(a){a.Ji&&(g.u.clearTimeout(a.Ji),a.Ji=null)},f6=function(a){a.g.Vu()||a.Bg||a.g.bn(a)},e6=function(a){m6(a);
g.Ci(a.ln);a.ln=null;a.i.stop();g.uZ(a.ba);if(a.uc){var b=a.uc;a.uc=null;b.abort();b.dispose()}a.ue&&(a.ue=null)},d6=function(a,b){try{a.g.Wx(a,b),a.g.ne(4)}catch(c){}},o6=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;n6(a,b,function(k){k?c(!0):g.u.setTimeout(function(){o6(a,b,c,d,f)},f)})}},n6=function(a,b,c){var d=new Image;
d.onload=function(){try{p6(d),c(!0)}catch(e){}};
d.onerror=function(){try{p6(d),c(!1)}catch(e){}};
d.onabort=function(){try{p6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{p6(d),c(!1)}catch(e){}};
g.u.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
k5(d,a)},p6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},q6=function(a){this.g=a;
this.i=new R5},s6=function(a){var b=r6(a.g,a.Ri,"/mail/images/cleardot.gif");
g5(b);o6(b.toString(),5E3,(0,g.x)(a.fB,a),3,2E3);a.ne(1)},u6=function(a){var b=a.g.D;
if(null!=b)b6(5),b?(b6(11),t6(a.g,a,!1)):(b6(12),t6(a.g,a,!0));else if(a.Ad=new W5(a,void 0,void 0,void 0),a.Ad.Ng=a.lp,b=a.g,b=r6(b,b.uk()?a.tj:null,a.mp),b6(5),!g.Jd||g.nd(10))h5(b,"TYPE","xmlhttp"),Z5(a.Ad,b,!1,a.tj,!1);else{h5(b,"TYPE","html");var c=a.Ad;a=!!a.tj;c.Mh=3;c.Mf=g5(b.clone());j6(c,a)}},v6=function(a){g.wk.call(this);
this.headers=new g.Gm;this.M=a||null;this.l=!1;this.R=this.g=null;this.W=this.D="";this.w=0;this.o="";this.u=this.aa=this.C=this.P=!1;this.B=0;this.G=null;this.X="";this.I=this.S=!1},cqa=function(a){return g.Jd&&g.ld(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},dqa=function(a){return"content-type"==a.toLowerCase()},y6=function(a,b){a.l=!1;
a.g&&(a.u=!0,a.g.abort(),a.u=!1);a.o=b;a.w=5;w6(a);x6(a)},w6=function(a){a.P||(a.P=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},B6=function(a){if(a.l&&"undefined"!=typeof g.yZ)if(a.R[1]&&4==z6(a)&&2==a.getStatus())A6(a,"Local request error detected and ignored");
else if(a.C&&4==z6(a))g.hl(a.Xu,0,a);else if(a.dispatchEvent("readystatechange"),4==z6(a)){A6(a,"Request complete");a.l=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.uf(1,String(a.D));if(!f&&g.u.self&&g.u.self.location){var k=g.u.self.location.protocol;f=k.substr(0,k.length-1)}e=!eqa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.w=6;try{var l=2<z6(a)?a.g.statusText:""}catch(m){l=""}a.o=l+" ["+a.getStatus()+"]";w6(a)}}finally{x6(a)}}},x6=function(a,b){if(a.g){C6(a);
var c=a.g,d=a.R[0]?g.Ia:null;a.g=null;a.R=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},C6=function(a){a.g&&a.I&&(a.g.ontimeout=null);
a.G&&(g.u.clearTimeout(a.G),a.G=null)},z6=function(a){return a.g?a.g.readyState:0},D6=function(a){try{return a.g?a.g.responseText:""}catch(b){return""}},A6=function(a,b){return b+" ["+a.W+" "+a.D+" "+a.getStatus()+"]"},E6=function(a,b,c){this.g=1;
this.i=[];this.o=[];this.u=new R5;this.C=a||null;this.D=null!=b?b:null;this.w=c||!1},fqa=function(a,b){this.g=a;
this.map=b;this.context=null},F6=function(a){g.Zj.call(this,"statevent",a)},G6=function(a,b){g.Zj.call(this,"timingevent",a);
this.size=b},H6=function(a){g.Zj.call(this,"serverreachability",a)},L6=function(a){I6(a);
if(3==a.g){var b=a.Yj++,c=a.Kl.clone();f5(c,"SID",a.l);f5(c,"RID",b);f5(c,"TYPE","terminate");J6(a,c);b=new W5(a,a.l,b,void 0);b.Mh=2;b.Mf=g5(c.clone());k5(new Image,b.Mf.toString());b.vi=(0,g.A)();$5(b)}K6(a)},N6=function(a){a.zB(1,0);
a.Kl=r6(a,null,a.kp);M6(a)},I6=function(a){a.Rf&&(a.Rf.abort(),a.Rf=null);
a.Qb&&(a.Qb.cancel(),a.Qb=null);a.gf&&(g.u.clearTimeout(a.gf),a.gf=null);O6(a);a.td&&(a.td.cancel(),a.td=null);a.Xf&&(g.u.clearTimeout(a.Xf),a.Xf=null)},P6=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.i.push(new fqa(a.yG++,b));2!=a.g&&3!=a.g||M6(a)},M6=function(a){a.td||a.Xf||(a.Xf=l6((0,g.x)(a.by,a),0),a.Fh=0)},S6=function(a,b){if(1==a.g){if(!b){a.Yj=Math.floor(1E5*Math.random());
var c=a.Yj++,d=new W5(a,"",c,void 0);d.Ng=null;var e=Q6(a),f=a.Kl.clone();f5(f,"RID",c);f5(f,"CVER","1");J6(a,f);Y5(d,f,e);a.td=d;a.g=2}}else 3==a.g&&(b?R6(a,b):0==a.i.length||a.td||R6(a))},R6=function(a,b){if(b)if(6<a.Cg){a.i=a.o.concat(a.i);
a.o.length=0;var c=a.Yj-1;var d=Q6(a)}else c=b.B,d=b.gh;else c=a.Yj++,d=Q6(a);var e=a.Kl.clone();f5(e,"SID",a.l);f5(e,"RID",c);f5(e,"AID",a.ai);J6(a,e);c=new W5(a,a.l,c,a.Fh+1);c.Ng=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.td=c;Y5(c,e,d)},J6=function(a,b){if(a.Qc){var c=a.Qc.xu();
c&&g.Mb(c,function(d,e){f5(b,e,d)})}},Q6=function(a){var b=Math.min(a.i.length,1E3),c=["count="+b];
if(6<a.Cg&&0<b){var d=a.i[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.i[e].g,k=a.i[e].map;f=6>=a.Cg?e:f-d;try{g.Mb(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.o=a.o.concat(a.i.splice(0,b));
return c.join("&")},T6=function(a){a.Qb||a.gf||(a.B=1,a.gf=l6((0,g.x)(a.ay,a),0),a.zh=0)},V6=function(a){if(a.Qb||a.gf||3<=a.zh)return!1;
a.B++;a.gf=l6((0,g.x)(a.ay,a),U6(a,a.zh));a.zh++;return!0},t6=function(a,b,c){a.On=c;
a.Ae=b.tf;a.w||N6(a)},O6=function(a){null!=a.Gg&&(g.u.clearTimeout(a.Gg),a.Gg=null)},U6=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},X6=function(a,b){if(2==b||9==b){var c=null;
a.Qc&&(c=null);var d=(0,g.x)(a.AL,a);c||(c=new g.Jm("//web.archive.org/web/20191003170541/https://www.google.com/images/cleardot.gif"),g5(c));n6(c.toString(),1E4,d)}else b6(2);W6(a,b)},W6=function(a,b){a.g=0;
a.Qc&&a.Qc.It(b);K6(a);I6(a)},K6=function(a){a.g=0;
a.Ae=-1;if(a.Qc)if(0==a.o.length&&0==a.i.length)a.Qc.Eo();else{g.ib(a.o);var b=g.ib(a.i);a.o.length=0;a.i.length=0;a.Qc.Eo(b)}},r6=function(a,b,c){var d=g.Rm(c);
if(""!=d.g)b&&g.Lm(d,b+"."+d.g),g.Mm(d,d.u);else{var e=window.location;d=Ppa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.dj&&g.Mb(a.dj,function(f,k){f5(d,k,f)});
f5(d,"VER",a.Cg);J6(a,d);return d},l6=function(a,b){if(!g.Na(a))throw Error("Fn must not be null and must be a function");
return g.u.setTimeout(function(){a()},b)},b6=function(a){Y6.dispatchEvent(new F6(Y6,a))},Z6=function(){},$6=function(){this.g=[];
this.i=[]},gqa=function(a,b){this.action=a;
this.params=b||{}},a7=function(a,b){g.E.call(this);
this.g=new g.I(this.aK,0,this);g.H(this,this.g);this.Tc=5E3;this.i=0;if(g.Na(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Na(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.l=a},b7=function(a,b,c){this.G=a;
this.w=b;this.l=new g.yn;this.i=new a7(this.dL,this);this.g=null;this.bb=!1;this.u=null;this.D="";this.C=this.o=0;this.B=[];this.I=c||!1},hqa=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.On,sessionId:a.g.l,arrayId:a.g.ai}},c7=function(a,b){a.C=b||0;
a.i.stop();a.g&&(3==a.g.g&&S6(a.g),L6(a.g));a.C=0},d7=function(a){return!!a.g&&3==a.g.g},iqa=function(a,b){(a.w.loungeIdToken=b)||a.i.stop()},e7=function(a){this.port=this.domain="";
this.g="/api/lounge";this.i=!0;a=a||document.location.href;var b=Number(g.uf(4,a))||"";b&&(this.port=":"+b);this.domain=g.vf(a)||"";a=g.Kb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Jb(a,"10.0")&&(this.i=!1))},f7=function(a,b){var c=a.g;
if(g.Ca(void 0)?0:a.i)c="https://"+a.domain+a.port+a.g;return g.Ff(c+b,{})},g7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ra(a.o,d,!0),onError:g.Ra(a.l,e),Nd:g.Ra(a.u,e)};c&&(a.sb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Ap(b,a)},jqa=function(){var a=h7;
i7();j7.push(a);k7(j7)},l7=function(a,b){i7();
var c=j7,d=kqa(a,String(b));g.bb(c)?lqa(d):(k7(c),(0,g.z)(c,function(e){e(d)}))},i7=function(){j7||(j7=g.w("yt.mdx.remote.debug.handlers_")||[],g.Ga("yt.mdx.remote.debug.handlers_",j7,void 0))},lqa=function(a){var b=(m7+1)%50;
m7=b;n7[b]=a;o7||(o7=49==b)},k7=function(a){var b=n7;
if(b[0]){var c=m7,d=o7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.z)(a,function(f){f(e)})}while(d!=c);
n7=Array(50);m7=-1;o7=!1}},kqa=function(a,b){var c=((0,g.A)()-mqa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},p7=function(a){g.O.call(this);
this.B=a;this.g=[]},q7=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},nqa=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Wd)(a.g,function(f){return!!w5(b,f)});
for(var d=0,e=b.length;d<e;d++)c=q7(a,b[d])||c;return c},oqa=function(a,b){var c=a.g.length;
a.g=(0,g.Wd)(a.g,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.g.length<c},r7=function(a,b,c,d){g.O.call(this);
this.w=a;this.u=b;this.l=c;this.o=d;this.i=0;this.g=null;this.za=NaN},t7=function(a){p7.call(this,"LocalScreenService");
this.l=a;this.i=NaN;s7(this);this.info("Initializing with "+u5(this.g))},u7=function(a){if(a.g.length){var b=(0,g.fe)(a.g,function(d){return d.id}),c=f7(a.l,"/pairing/get_lounge_token_batch");
g7(a.l,c,{screen_ids:b.join(",")},(0,g.x)(a.jC,a),(0,g.x)(a.iC,a))}},s7=function(a){var b=s5(E5());
b=(0,g.Wd)(b,function(c){return!c.uuid});
return nqa(a,b)},v7=function(a,b){Xpa((0,g.fe)(a.g,r5));
b&&F5()},x7=function(a,b){g.O.call(this);
this.w=b;var c=g.by("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.w(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.ab(c,l)}this.g=d;this.u=a;this.l=this.o=NaN;this.i=null;w7("Initialized with "+g.zj(this.g))},y7=function(a,b,c){var d=f7(a.u,"/pairing/get_screen_availability");
g7(a.u,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},z7=function(a,b){a:if(j5(b)!=j5(a.g))var c=!1;
else{c=g.Tb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(w7("Updated online screens: "+g.zj(a.g)),a.g=b,a.N("screenChange"));pqa(a)},A7=function(a){isNaN(a.l)||g.Eo(a.l);
a.l=g.Co((0,g.x)(a.jr,a),0<a.o&&a.o<(0,g.A)()?2E4:1E4)},w7=function(a){l7("OnlineScreenService",a)},B7=function(a){var b={};
(0,g.z)(a.w(),function(c){c.token?b[c.token]=c.id:this.Kb("Requesting availability of screen w/o lounge token.")});
return b},pqa=function(a){a=g.Tb(g.Nb(a.g,function(b){return b}));
g.rb(a);a.length?g.ay("yt-remote-online-screen-ids",a.join(","),60):n5("yt-remote-online-screen-ids")},C7=function(a){p7.call(this,"ScreenService");
this.w=a;this.i=this.l=null;this.o=[];this.u={};qqa(this)},E7=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.u[b]);var k=a.Kd();if(k=(c?x5(k,c):null)||x5(k,b)){k.uuid=b;var l=D7(a,k);y7(a.i,l,function(m){e(m?l:null)})}else c?rqa(a,c,(0,g.x)(function(m){var n=D7(this,new p5({name:d,
screenId:c,loungeToken:m,dialId:b||""}));y7(this.i,n,function(q){e(q?n:null)})},a),f):e(null)},F7=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},rqa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={sb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Ap(f7(a.w,"/pairing/get_lounge_token_batch"),e)},G7=function(a){a.g=a.l.Kd();
var b=a.u,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+u5(a.g))},qqa=function(a){H7(a);
a.l=new t7(a.w);a.l.subscribe("screenChange",(0,g.x)(a.qC,a));G7(a);a.o=s5(g.by("yt-remote-automatic-screen-cache")||[]);H7(a);a.info("Initializing automatic screens: "+u5(a.o));a.i=new x7(a.w,(0,g.x)(a.Kd,a,!0));a.i.subscribe("screenChange",(0,g.x)(function(){this.N("onlineScreenChange")},a))},D7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=x5(a.o,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.o.push(b),g.ay("yt-remote-automatic-screen-cache",(0,g.fe)(a.o,r5)));H7(a);a.u[b.uuid]=b.id;g.ay("yt-remote-device-id-map",a.u,31536E3);return b},H7=function(a){a.u=g.by("yt-remote-device-id-map")||{}},I7=function(a,b,c){g.O.call(this);
this.R=c;this.D=a;this.i=b;this.l=null},J7=function(a,b){l7(a.R,b)},L7=function(a,b){I7.call(this,a,b,"CastSession");
this.g=null;this.o=0;this.w=(0,g.x)(this.gM,this);this.u=(0,g.x)(this.CK,this);this.o=g.Co((0,g.x)(function(){K7(this,null)},this),12E4)},sqa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.zj(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ia,(0,g.x)(function(){J7(this,"Failed to send message: getMdxSessionStatus.")},a)):J7(a,"Sending yt message without session: "+g.zj(b))},K7=function(a,b){g.Eo(a.o);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.l||a.l.id!=b){var c=(0,g.x)(a.dn,a),d=(0,g.x)(a.Md,a);a.Qu(b,c,d,5)}}else a.Md(Error("Waiting for session status timed out."))},M7=function(a,b,c){I7.call(this,a,b,"DialSession");
this.o=this.C=null;this.G="";this.M=c;this.u=null;this.B=g.Ia;this.w=NaN;this.I=(0,g.x)(this.jM,this);this.g=g.Ia},N7=function(a){a.g=a.D.Zz(a.G,a.i.label,a.i.friendlyName,(0,g.x)(function(b){this.g=g.Ia;
this.dn(b)},a),(0,g.x)(function(b){this.g=g.Ia;
this.Md(b)},a))},O7=function(a){var b={};
b.pairingCode=a.G;b.theme=a.M;if(a.u){var c=a.u.currentTime||0;b.v=a.u.videoId;b.t=c}I5()&&(b.env_useStageMdx=1);return g.Cf(b)},P7=function(a,b){I7.call(this,a,b,"ManualSession");
this.g=g.Co((0,g.x)(this.bi,this,null),150)},Q7=function(a,b,c,d){g.O.call(this);
this.i=a;this.B=b||"233637DE";this.w=c||"cl";this.C=d||!1;this.g=null;this.u=!1;this.l=[];this.o=(0,g.x)(this.jJ,this)},R7=function(a,b){return b?g.Ya(a.l,function(c){return q5(b,c.label)},a):null},S7=function(a){l7("Controller",a)},h7=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},T7=function(a){return a.u||!!a.l.length||!!a.g},U7=function(a,b,c){b!=a.g&&(g.Ci(a.g),(a.g=b)?(c?a.N("yt-remote-cast2-receiver-resumed",b.i):a.N("yt-remote-cast2-receiver-selected",
b.i),b.subscribe("sessionScreen",(0,g.x)(a.Zx,a,b)),b.l?a.N("yt-remote-cast2-session-change",b.l):c&&a.g.bi(null)):a.N("yt-remote-cast2-session-change",null))},V7=function(a){var b=a.i.Yz(),c=a.g&&a.g.i;
a=(0,g.fe)(b,function(d){c&&q5(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=R7(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},wqa=function(a,b,c,d,e,f,k){tqa()?uqa(b,e,f,k)&&(X7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Y7(a,c):(window.__onGCastApiAvailable=function(l,m){l?Y7(a,c):(Z7("Failed to load cast API: "+m),$7(!1),X7(!1),n5("yt-remote-cast-available"),n5("yt-remote-cast-receiver"),a8(),c(!1))},d?g.Po("https://web.archive.org/web/20191003170541/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?aqa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?N5():(O5(),M5(vqa.map(Zpa))))):W7("Cannot initialize because not running Chrome")},a8=function(){W7("dispose");
var a=b8();a&&a.dispose();g.Ga("yt.mdx.remote.cloudview.instance_",null,void 0);c8(!1);g.Ko(d8);d8.length=0},e8=function(){return!!g.by("yt-remote-cast-installed")},f8=function(){var a=g.by("yt-remote-cast-receiver");
return a?a.friendlyName:null},g8=function(){W7("clearCurrentReceiver");
n5("yt-remote-cast-receiver")},h8=function(){return e8()?b8()?b8().getCastSession():(Z7("getCastSelector: Cast is not initialized."),null):(Z7("getCastSelector: Cast API is not installed!"),null)},j8=function(){e8()?b8()?i8()?(W7("Requesting cast selector."),b8().requestSession()):(W7("Wait for cast API to be ready to request the session."),d8.push(g.Jo("yt-remote-cast2-api-ready",j8))):Z7("requestCastSelector: Cast is not initialized."):Z7("requestCastSelector: Cast API is not installed!")},k8=function(a,
b){i8()?b8().setConnectedScreenStatus(a,b):Z7("setConnectedScreenStatus called before ready.")},tqa=function(){var a=0<=g.Kb.search(/ (CrMo|Chrome|CriOS)\//);
return g.Js||a},xqa=function(a,b){b8().init(a,b)},uqa=function(a,b,c,d){var e=!1;
b8()||(a=new Q7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.ay("yt-remote-cast-available",f);m5("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){W7("onReceiverSelected: "+f.friendlyName);
g.ay("yt-remote-cast-receiver",f);m5("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){W7("onReceiverResumed: "+f.friendlyName);
g.ay("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){W7("onSessionChange: "+t5(f));
f||n5("yt-remote-cast-receiver");m5("yt-remote-cast2-session-change",f)}),g.Ga("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
W7("cloudview.createSingleton_: "+e);return e},b8=function(){return g.w("yt.mdx.remote.cloudview.instance_")},Y7=function(a,b){$7(!0);
X7(!1);xqa(a,function(c){c?(c8(!0),g.Mo("yt-remote-cast2-api-ready")):(Z7("Failed to initialize cast API."),$7(!1),n5("yt-remote-cast-available"),n5("yt-remote-cast-receiver"),a8());b(c)})},W7=function(a){l7("cloudview",a)},Z7=function(a){l7("cloudview",a)},$7=function(a){W7("setCastInstalled_ "+a);
g.ay("yt-remote-cast-installed",a)},i8=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},c8=function(a){W7("setApiReady_ "+a);
g.Ga("yt.mdx.remote.cloudview.apiReady_",a,void 0)},X7=function(a){g.Ga("yt.mdx.remote.cloudview.initializing_",a,void 0)},l8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.w=this.B=0;this.g=null;this.hasNext=this.Be=!1;this.D=this.C=this.i=this.o=0;this.l=NaN;this.u=!1;this.reset(a)},m8=function(a){a.audioTrackId=null;
a.g=null;a.playerState=-1;a.Be=!1;a.hasNext=!1;a.B=0;a.w=(0,g.A)();a.o=0;a.i=0;a.C=0;a.D=0;a.l=NaN;a.u=!1},n8=function(a){return 1==a.playerState?((0,g.A)()-a.w)/1E3:0},o8=function(a,b){a.B=b;
a.w=(0,g.A)()},p8=function(a){switch(a.playerState){case 1:case 1081:return((0,g.A)()-a.w)/1E3+a.B;
case -1E3:return 0}return a.B},q8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&m8(a)},r8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.cc(a.g);b.hasPrevious=a.Be;b.hasNext=a.hasNext;b.playerTime=a.B;b.playerTimeAt=a.w;b.seekableStart=a.o;b.seekableEnd=a.i;b.duration=a.C;b.loadedTime=a.D;b.liveIngestionTime=a.l;return b},u8=function(a,b){g.O.call(this);
this.g=0;this.o=a;this.w=[];this.u=new $6;this.l=this.i=null;this.D=(0,g.x)(this.gH,this);this.B=(0,g.x)(this.bk,this);this.C=(0,g.x)(this.fH,this);this.G=(0,g.x)(this.sH,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Yr,this),s8(this))):c=3;0!=c&&(b?this.Yr(c):g.Co((0,g.x)(function(){this.Yr(c)},this),0));
var d=h8();d&&t8(this,d);this.subscribe("yt-remote-cast2-session-change",this.G)},v8=function(a){return new l8(a.o.getPlayerContextData())},s8=function(a){(0,g.z)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.w.push(this.o.subscribe(b,g.Ra(this.gJ,b),this))},a)},w8=function(a){(0,g.z)(a.w,function(b){this.o.unsubscribeByKey(b)},a);
a.w.length=0},x8=function(a,b){var c=a.u;
50>c.g.length+c.i.length&&a.u.i.push(b)},z8=function(a,b,c){var d=v8(a);
o8(d,c);-1E3!=d.playerState&&(d.playerState=b);y8(a,d)},A8=function(a,b,c){a.o.sendMessage(b,c)},y8=function(a,b){w8(a);
a.o.setPlayerContextData(r8(b));s8(a)},t8=function(a,b){a.l&&(a.l.removeUpdateListener(a.D),a.l.removeMediaListener(a.B),a.bk(null));
a.l=b;a.l&&(l7("CP","Setting cast session: "+a.l.sessionId),a.l.addUpdateListener(a.D),a.l.addMediaListener(a.B),a.l.media.length&&a.bk(a.l.media[0]))},B8=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=v8(a);b.contentId!=d.videoId&&l7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;o8(d,a.i.getEstimatedTime());y8(a,d)}else l7("CP","No cast media video. Ignoring state update.")},C8=function(a,b,c){return(0,g.x)(function(d){this.Kb("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Kb("Retrying "+b+" using MDx browser channel."),A8(this,b,c))},a)},D8=function(a,b,c){g.O.call(this);
this.u=NaN;this.I=!1;this.C=this.B=this.D=this.G=NaN;this.R=[];this.o=this.w=this.l=this.Na=this.g=null;this.P=a;this.R.push(g.Zq(window,"beforeunload",(0,g.x)(this.cC,this)));this.i=[];this.Na=new l8;this.M=b.id;this.g=yqa(this,c);this.g.subscribe("handlerOpened",this.kH,this);this.g.subscribe("handlerClosed",this.hH,this);this.g.subscribe("handlerError",this.iH,this);this.g.subscribe("handlerMessage",this.jH,this);iqa(this.g,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Na.videoId;
g.jL()&&g.ay("yt-remote-session-video-id",d)},this)},E8=function(a){l7("conn",a)},yqa=function(a,b){return new b7(f7(a.P,"/bc"),b)},F8=function(a,b){a.N("proxyStateChange",b)},zqa=function(a){a.u=g.Co((0,g.x)(function(){E8("Connecting timeout");
this.Dh(1)},a),2E4)},G8=function(a){g.Eo(a.u);
a.u=NaN},H8=function(a){g.Eo(a.G);
a.G=NaN},Aqa=function(a){I8(a);
a.D=g.Co((0,g.x)(function(){J8(this,"getNowPlaying")},a),2E4)},I8=function(a){g.Eo(a.D);
a.D=NaN},L8=function(a,b){b&&(G8(a),H8(a));
b==(d7(a.g)&&isNaN(a.u))?b&&(F8(a,1),J8(a,"getSubtitlesTrack")):b?(a.Ou()&&a.Na.reset(),F8(a,1),J8(a,"getNowPlaying"),K8(a)):a.Dh(1)},Bqa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Na.videoId&&(g.Zb(b.params)?a.Na.g=null:a.Na.g=b.params,a.N("remotePlayerChange"))},M8=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Na.listId=b.params.listId||a.Na.listId;q8(a.Na,c,d);a.N("remoteQueueChange")},Cqa=function(a,b){b.params=b.params||{};
M8(a,b);N8(a,b);a.N("autoplayDismissed")},N8=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
o8(a.Na,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Na.playerState&&(c=-1E3);a.Na.playerState=c;c=Number(b.params.loadedTime);a.Na.D=isNaN(c)?0:c;c=Number(b.params.duration);a.Na.C=isNaN(c)?0:c;c=a.Na;var d=Number(b.params.liveIngestionTime);c.l=d;c.u=isNaN(d)?!1:!0;c=a.Na;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.o=isNaN(d)?0:d;c.i=isNaN(e)?0:e;1==a.Na.playerState?Aqa(a):I8(a);a.N("remotePlayerChange")},Dqa=function(a,b){if(-1E3!=
a.Na.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Na.playerState=c;c=parseInt(b.params.currentTime,10);o8(a.Na,isNaN(c)?0:c);a.N("remotePlayerChange")}},Eqa=function(a,b){var c="true"==b.params.muted;
a.Na.volume=parseInt(b.params.volume,10);a.Na.muted=c;a.N("remotePlayerChange")},Fqa=function(a,b){a.w=b.params.videoId;
a.N("nowAutoplaying",parseInt(b.params.timeout,10))},Gqa=function(a,b){var c="true"==b.params.hasNext;
a.Na.Be="true"==b.params.hasPrevious;a.Na.hasNext=c;a.N("previousNextChange")},K8=function(a){g.Eo(a.C);
a.C=g.Co((0,g.x)(a.Dh,a,1),864E5)},J8=function(a,b,c){c?E8("Sending: action="+b+", params="+g.zj(c)):E8("Sending: action="+b);
a.g.sendMessage(b,c)},O8=function(a){p7.call(this,"ScreenServiceProxy");
this.Sc=a;this.i=[];this.i.push(this.Sc.$_s("screenChange",(0,g.x)(this.eM,this)));this.i.push(this.Sc.$_s("onlineScreenChange",(0,g.x)(this.JI,this)))},Lqa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.uo("MDX_CONFIG")||b;Qpa();C5();P8||(P8=new e7(b?b.loungeApiHost:void 0),I5()&&(P8.g="/api/loungedev"));Q8||(Q8=g.w("yt.mdx.remote.deferredProxies_")||[],g.Ga("yt.mdx.remote.deferredProxies_",Q8,void 0));Hqa();var c=R8();if(!c){var d=new C7(P8);g.Ga("yt.mdx.remote.screenService_",d,void 0);c=R8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);wqa(a,d,function(m){m?S8()&&k8(S8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){m5("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.w("yt.mdx.remote.initialized_")&&(g.Ga("yt.mdx.remote.initialized_",!0,void 0),T8("Initializing: "+g.zj(b)),U8.push(g.Jo("yt-remote-cast2-availability-change",function(){m5("yt-remote-receiver-availability-change")})),U8.push(g.Jo("yt-remote-cast2-receiver-selected",function(){V8(null);
m5("yt-remote-auto-connect","cast-selector-receiver")})),U8.push(g.Jo("yt-remote-cast2-receiver-resumed",function(){m5("yt-remote-receiver-resumed","cast-selector-receiver")})),U8.push(g.Jo("yt-remote-cast2-session-change",Iqa)),U8.push(g.Jo("yt-remote-connection-change",function(m){m?k8(S8(),"YouTube TV"):W8()||(k8(null,null),g8())})),a=X8(),b.isAuto&&(a.id+="#dial"),g.rp("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),T8(" -- with channel params: "+
g.zj(a)),Jqa(a),c.start(),S8()||Kqa())},Mqa=function(){var a=Y8();
e8()&&g.by("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Y8=function(){var a=R8().Sc.$_gos();
var b=Z8();b&&$8()&&(w5(a,b)||a.push(b));return Vpa(a)},a9=function(){var a=Nqa();
!a&&e8()&&f8()&&(a={key:"cast-selector-receiver",name:f8()});return a},Nqa=function(){var a=Y8(),b=Z8();
b||(b=W8());return g.Ya(a,function(c){return b&&q5(b,c.key)?!0:!1})},Z8=function(){var a=S8();
if(!a)return null;var b=R8().Kd();return x5(b,a)},Iqa=function(a){T8("remote.onCastSessionChange_: "+t5(a));
if(a){var b=Z8();b&&b.id==a.id?k8(b.id,"YouTube TV"):(b&&b9(),c9(a,1))}else $8()&&b9()},b9=function(){i8()?b8().stopSession():Z7("stopSession called before API ready.");
var a=$8();a&&(a.disconnect(1),d9(null))},e9=function(){var a=$8();
return!!a&&3!=a.getProxyState()},T8=function(a){l7("remote",a)},R8=function(){if(!f9){var a=g.w("yt.mdx.remote.screenService_");
f9=a?new O8(a):null}return f9},S8=function(){return g.w("yt.mdx.remote.currentScreenId_")},Oqa=function(a){g.Ga("yt.mdx.remote.currentScreenId_",a,void 0)},Pqa=function(){return g.w("yt.mdx.remote.connectData_")},V8=function(a){g.Ga("yt.mdx.remote.connectData_",a,void 0)},$8=function(){return g.w("yt.mdx.remote.connection_")},d9=function(a){var b=$8();
V8(null);a||Oqa("");g.Ga("yt.mdx.remote.connection_",a,void 0);Q8&&((0,g.z)(Q8,function(c){c(a)}),Q8.length=0);
b&&!a?m5("yt-remote-connection-change",!1):!b&&a&&m5("yt-remote-connection-change",!0)},W8=function(){var a=g.jL();
if(!a)return null;var b=R8().Kd();return x5(b,a)},c9=function(a,b){Z8()&&Z8();
if(g9)h9=a;else{Oqa(a.id);var c=new D8(P8,a,X8());c.connect(b,Pqa());c.subscribe("beforeDisconnect",function(d){m5("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){$8()&&d9(null)});
d9(c)}},Kqa=function(){var a=W8();
a?(T8("Resume connection to: "+t5(a)),c9(a,0)):(G5(),g8(),T8("Skipping connecting because no session screen found."))},Hqa=function(){var a=X8();
if(g.Zb(a)){a=B5();var b=g.by("yt-remote-session-name")||"",c=g.by("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ga("yt.mdx.remote.channelParams_",a,void 0)}},X8=function(){return g.w("yt.mdx.remote.channelParams_")||{}},Jqa=function(a){a?(g.ay("yt-remote-session-app",a.app),g.ay("yt-remote-session-name",a.name)):(n5("yt-remote-session-app"),n5("yt-remote-session-name"));
g.Ga("yt.mdx.remote.channelParams_",a,void 0)},i9=function(a,b,c){g.E.call(this);
this.u=a;this.i=b;this.l=new g.Qs(this);g.H(this,this.l);this.l.J(b,"onCaptionsTrackListChanged",this.eI);this.l.J(b,"captionschanged",this.eH);this.l.J(b,"captionssettingschanged",this.lz);this.l.J(b,"videoplayerreset",this.en);this.l.J(b,"mdxautoplaycancel",this.eB);this.P=this.l.J(b,"onVolumeChange",this.Hx);this.C=!1;this.g=c;c.subscribe("proxyStateChange",this.Vx,this);c.subscribe("remotePlayerChange",this.dk,this);c.subscribe("remoteQueueChange",this.en,this);c.subscribe("autoplayUpNext",this.xx,
this);c.subscribe("previousNextChange",this.Sx,this);c.subscribe("nowAutoplaying",this.Ox,this);c.subscribe("autoplayDismissed",this.wx,this);this.suggestion=null;this.D=new g.Ct(64);this.o=new g.I(this.jz,500,this);g.H(this,this.o);this.w=new g.I(this.kz,1E3,this);g.H(this,this.w);this.I=new P5(this.JL,0,this);g.H(this,this.I);this.B={};this.R=new g.I(this.Lz,1E3,this);g.H(this,this.R);this.G=new g.jl(this.BE,1E3,this);g.H(this,this.G);this.M=g.Ia;this.lz();this.en();this.dk()},j9=function(a,b){var c=
a.u,d=a.i.getVideoData().lengthSeconds;
c.R=b||0;c.player.N("progresssync",b,d)},Qqa=function(a){j9(a,0);
a.o.stop();k9(a,new g.Ct(64))},m9=function(a,b){if(l9(a)&&!a.C){var c=null;
b&&(c={style:a.i.getSubtitlesUserSettings()},g.ec(c,b));a.g.az(a.i.getVideoData(1).videoId,c);a.B=v8(a.g).g}},n9=function(a,b){var c=a.i.getPlaylist();
if(c){var d=c.Qa;var e=c.listId.toString()}c=a.i.getVideoData(1);a.g.playVideo(c.videoId,b,d,e,c.playerParams,c.De,i5(c));k9(a,new g.Ct(1))},Rqa=function(a,b){if(b){var c=a.i.getOption("captions","tracklist",{SP:1});
c&&c.length?(a.i.setOption("captions","track",b),a.C=!1):(a.i.loadModule("captions"),a.C=!0)}else a.i.setOption("captions","track",{})},l9=function(a){return v8(a.g).videoId==a.i.getVideoData(1).videoId},k9=function(a,b){a.w.stop();
var c=a.D;if(!g.It(c,b)){var d=g.R(b,2);d!=g.R(a.D,2)&&g.lS(a.i.app,d);a.D=b;Sqa(a.u,c,b)}},o9=function(){g.T.call(this,{A:"div",
F:"ytp-mdx-popup-dialog",K:{role:"dialog"},H:[{A:"div",F:"ytp-mdx-popup-dialog-inner-content",H:[{A:"div",F:"ytp-mdx-popup-title",T:"You're signed out"},{A:"div",F:"ytp-mdx-popup-description",T:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{A:"div",F:"ytp-mdx-privacy-popup-buttons",H:[{A:"button",U:["ytp-button","ytp-mdx-privacy-popup-cancel"],T:"Cancel"},{A:"button",U:["ytp-button","ytp-mdx-privacy-popup-confirm"],
T:"Confirm"}]}]}]});this.l=new g.pL(this,250);g.H(this,this.l);this.B=this.i["ytp-mdx-privacy-popup-cancel"];this.J(this.B,"click",this.o);this.u=this.i["ytp-mdx-privacy-popup-confirm"];this.J(this.u,"click",this.w)},p9=function(a){g.T.call(this,{A:"div",
F:"ytp-remote",H:[{A:"div",F:"ytp-remote-display-status",H:[{A:"div",F:"ytp-remote-display-status-icon",H:[g.rL()]},{A:"div",F:"ytp-remote-display-status-text",T:"{{statustext}}"}]}]});this.l=new g.pL(this,250);g.H(this,this.l);this.o=a;this.J(a,"presentingplayerstatechange",this.u);Tqa(this,g.lK(a))},Tqa=function(a,b){if(3==a.o.getPresentingPlayerType()){var c={RECEIVER_NAME:a.o.getOption("remote","currentReceiver").name};
c=g.R(b,128)?g.WL("Error on $RECEIVER_NAME",c):g.Jt(b)||g.R(b,4)?g.WL("Playing on $RECEIVER_NAME",c):g.WL("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.l.show()}else a.l.hide()},q9=function(a,b){g.SN.call(this,"Play on",0,a,b);
this.l=a;this.B={};this.J(a,"onMdxReceiversChange",this.I);this.J(a,"presentingplayerstatechange",this.I);this.I()},r9=function(a){g.aP.call(this,a);
this.i={key:v5(),name:"This computer"};this.u=null;this.o=[];this.M=this.g=null;this.G=[this.i];this.l=this.i;this.B=new g.Ct(64);this.R=0;this.D=-1;this.w=null;if(!g.fz(this.player.L())){a=this.player;var b=g.RC(a);b&&(b=b.Lm())&&(b=new q9(a,b),g.H(this,b));b=new p9(a);g.H(this,b);g.DK(a,b.element,4);this.w=new o9;g.H(this,this.w);g.DK(a,this.w.element,4);this.I=!!W8()}this.C=null},s9=function(a){a.C&&(a.player.removeEventListener("presentingplayerstatechange",a.C),a.C=null)},Sqa=function(a,b,c){a.B=
c;
a.player.N("presentingplayerstatechange",new g.hD(c,b))},t9=function(a,b){if(b.key!=a.l.key)if(b.key==a.i.key)b9();
else{var c;(c=!g.P(a.player.L().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.uo("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.uo("SESSION_INDEX")&&!g.uo("LOGGED_IN")))||a.I||!a.w);if(c?0:"WEB"==a.player.L().deviceParams.c||"WEB_EMBEDDED_PLAYER"==a.player.L().deviceParams.c)g.Jt(g.lK(a.player))?a.player.pauseVideo():(a.C=(0,g.x)(a.HK,a),a.player.addEventListener("presentingplayerstatechange",a.C)),a.w&&a.w.l.show(),$8()||(g9=!0);a.l=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(d||e){var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.ra(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.De,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(c=i5(c))&&(d.locationInfo=c);c=d}else c=null;T8("Connecting to: "+g.zj(b));"cast-selector-receiver"==b.key?(V8(c||null),i8()?b8().setLaunchParams(c||null):Z7("setLaunchParams called before ready.")):
!c&&e9()&&S8()==b.key?m5("yt-remote-connection-change",!0):(b9(),V8(c||null),c=R8().Kd(),(c=x5(c,b.key))&&c9(c,1))}},i6={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},h6={"'":"\\'"},Uqa={},Tpa={HM:"atp",eP:"ska",TO:"que",uO:"mus",dP:"sus",IN:"dsp",aP:"seq"};
o5.prototype.Sf=function(){var a=new o5({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.l=this.l;a.i=this.i;a.g=this.g};
var H5,A5="",$pa=J5("loadCastFramework")||J5("loadCastApplicationFramework"),vqa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.Ta(P5,g.E);g.h=P5.prototype;g.h.YB=function(a){this.o=arguments;this.g=!1;this.za?this.l=(0,g.A)()+this.Tc:this.za=g.hl(this.u,this.Tc)};
g.h.stop=function(){this.za&&(g.u.clearTimeout(this.za),this.za=null);this.l=null;this.g=!1;this.o=[]};
g.h.pause=function(){++this.i};
g.h.resume=function(){this.i&&(--this.i,!this.i&&this.g&&(this.g=!1,this.w.apply(null,this.o)))};
g.h.V=function(){this.stop();P5.xb.V.call(this)};
g.h.ZB=function(){this.l?(this.za=g.hl(this.u,this.l-(0,g.A)()),this.l=null):(this.za=null,this.i?this.g=!0:(this.g=!1,this.w.apply(null,this.o)))};R5.prototype.stringify=function(a){return g.u.JSON.stringify(a,void 0)};
R5.prototype.parse=function(a){return g.u.JSON.parse(a,void 0)};S5.prototype.g=null;S5.prototype.getOptions=function(){var a;(a=this.g)||(a={},U5(this)&&(a[0]=!0,a[1]=!0),a=this.g=a);return a};var u9;g.Ta(T5,S5);u9=new T5;g.h=W5.prototype;g.h.Ng=null;g.h.oe=!1;g.h.Ji=null;g.h.Vr=null;g.h.vi=null;g.h.Mh=null;g.h.Mf=null;g.h.rg=null;g.h.gh=null;g.h.uc=null;g.h.Gk=0;g.h.ue=null;g.h.Qn=null;g.h.cg=null;g.h.uj=-1;g.h.Vy=!0;g.h.Bg=!1;g.h.np=0;g.h.ln=null;var c6={},a6={};g.h=W5.prototype;g.h.setTimeout=function(a){this.o=a};
g.h.TK=function(a){a=a.target;var b=this.ln;b&&3==z6(a)?b.Wl():this.Tz(a)};
g.h.Tz=function(a){try{if(a==this.uc)a:{var b=z6(this.uc),c=this.uc.w,d=this.uc.getStatus();if(g.Jd&&!g.nd(10)||g.Ld&&!g.ld("420+")){if(4>b)break a}else if(3>b||3==b&&!g.bg&&!D6(this.uc))break a;this.Bg||4!=b||7==c||(8==c||0>=d?this.g.ne(3):this.g.ne(2));m6(this);var e=this.uc.getStatus();this.uj=e;var f=D6(this.uc);(this.oe=200==e)?(4==b&&e6(this),this.u?(g6(this,b,f),g.bg&&this.oe&&3==b&&(this.ba.ea(this.i,"tick",this.NK),this.i.start())):d6(this,f),this.oe&&!this.Bg&&(4==b?this.g.bn(this):(this.oe=
!1,$5(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.cg=3,b6(13)):(this.cg=0,b6(14)),e6(this),f6(this))}}catch(k){this.uc&&D6(this.uc)}finally{}};
g.h.NK=function(){var a=z6(this.uc),b=D6(this.uc);this.Gk<b.length&&(m6(this),g6(this,a,b),this.oe&&4!=a&&$5(this))};
g.h.jK=function(a){l6((0,g.x)(this.iK,this,a),0)};
g.h.iK=function(a){this.Bg||(m6(this),d6(this,a),$5(this))};
g.h.dy=function(a){l6((0,g.x)(this.hK,this,a),0)};
g.h.hK=function(a){this.Bg||(e6(this),this.oe=a,this.g.bn(this),this.g.ne(4))};
g.h.cancel=function(){this.Bg=!0;e6(this)};
g.h.rK=function(){this.Ji=null;var a=(0,g.A)();0<=a-this.Vr?(2!=this.Mh&&this.g.ne(3),e6(this),this.cg=2,b6(18),f6(this)):k6(this,this.Vr-a)};
g.h.getLastError=function(){return this.cg};g.h=q6.prototype;g.h.lp=null;g.h.Ad=null;g.h.mn=!1;g.h.Wu=null;g.h.Il=null;g.h.Pp=null;g.h.mp=null;g.h.be=null;g.h.tf=-1;g.h.tj=null;g.h.Ri=null;g.h.connect=function(a){this.mp=a;a=r6(this.g,null,this.mp);b6(3);this.Wu=(0,g.A)();var b=this.g.C;null!=b?(this.tj=b[0],(this.Ri=b[1])?(this.be=1,s6(this)):(this.be=2,u6(this))):(h5(a,"MODE","init"),this.Ad=new W5(this,void 0,void 0,void 0),this.Ad.Ng=this.lp,Z5(this.Ad,a,!1,null,!0),this.be=0)};
g.h.fB=function(a){if(a)this.be=2,u6(this);else{b6(4);var b=this.g;b.Ae=b.Rf.tf;X6(b,9)}a&&this.ne(2)};
g.h.Ko=function(a){return this.g.Ko(a)};
g.h.abort=function(){this.Ad&&(this.Ad.cancel(),this.Ad=null);this.tf=-1};
g.h.Vu=function(){return!1};
g.h.Wx=function(a,b){this.tf=a.uj;if(0==this.be)if(b){try{var c=this.i.parse(b)}catch(d){c=this.g;c.Ae=this.tf;X6(c,2);return}this.tj=c[0];this.Ri=c[1]}else c=this.g,c.Ae=this.tf,X6(c,2);else if(2==this.be)if(this.mn)b6(7),this.Pp=(0,g.A)();else if("11111"==b){if(b6(6),this.mn=!0,this.Il=(0,g.A)(),c=this.Il-this.Wu,!g.Jd||g.nd(10)||500>c)this.tf=200,this.Ad.cancel(),b6(12),t6(this.g,this,!0)}else b6(8),this.Il=this.Pp=(0,g.A)(),this.mn=!1};
g.h.bn=function(){this.tf=this.Ad.uj;if(this.Ad.oe)0==this.be?this.Ri?(this.be=1,s6(this)):(this.be=2,u6(this)):2==this.be&&((!g.Jd||g.nd(10)?!this.mn:200>this.Pp-this.Il)?(b6(11),t6(this.g,this,!1)):(b6(12),t6(this.g,this,!0)));else{0==this.be?b6(9):2==this.be&&b6(10);var a=this.g;this.Ad.getLastError();a.Ae=this.tf;X6(a,2)}};
g.h.uk=function(){return this.g.uk()};
g.h.isActive=function(){return this.g.isActive()};
g.h.ne=function(a){this.g.ne(a)};g.Ta(v6,g.wk);var eqa=/^https?$/i,Vqa=["POST","PUT"];g.h=v6.prototype;
g.h.send=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);b=b?b.toUpperCase():"GET";this.D=a;this.o="";this.w=0;this.W=b;this.P=!1;this.l=!0;this.g=this.M?V5(this.M):V5(u9);this.R=this.M?this.M.getOptions():u9.getOptions();this.g.onreadystatechange=(0,g.x)(this.Xu,this);try{l5(A6(this,"Opening Xhr")),this.aa=!0,this.g.open(b,String(a),!0),this.aa=!1}catch(f){l5(A6(this,"Error opening Xhr: "+f.message));y6(this,f);return}a=c||"";
var e=this.headers.clone();d&&Opa(d,function(f,k){e.set(k,f)});
d=g.Ya(e.Yd(),dqa);c=g.u.FormData&&a instanceof g.u.FormData;!g.ab(Vqa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.g.setRequestHeader(k,f)},this);
this.X&&(this.g.responseType=this.X);"withCredentials"in this.g&&this.g.withCredentials!==this.S&&(this.g.withCredentials=this.S);try{C6(this),0<this.B&&(this.I=cqa(this.g),l5(A6(this,"Will abort after "+this.B+"ms if incomplete, xhr2 "+this.I)),this.I?(this.g.timeout=this.B,this.g.ontimeout=(0,g.x)(this.Yu,this)):this.G=g.hl(this.Yu,this.B,this)),l5(A6(this,"Sending request")),this.C=!0,this.g.send(a),this.C=!1}catch(f){l5(A6(this,"Send error: "+f.message)),y6(this,f)}};
g.h.Yu=function(){"undefined"!=typeof g.yZ&&this.g&&(this.o="Timed out after "+this.B+"ms, aborting",this.w=8,A6(this,this.o),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.g&&this.l&&(A6(this,"Aborting"),this.l=!1,this.u=!0,this.g.abort(),this.u=!1,this.w=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),x6(this))};
g.h.V=function(){this.g&&(this.l&&(this.l=!1,this.u=!0,this.g.abort(),this.u=!1),x6(this,!0));v6.xb.V.call(this)};
g.h.Xu=function(){this.fa()||(this.aa||this.C||this.u?B6(this):this.iJ())};
g.h.iJ=function(){B6(this)};
g.h.isActive=function(){return!!this.g};
g.h.getStatus=function(){try{return 2<z6(this)?this.g.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return"string"===typeof this.o?this.o:String(this.o)};g.h=E6.prototype;g.h.dj=null;g.h.td=null;g.h.Qb=null;g.h.kp=null;g.h.Kl=null;g.h.vt=null;g.h.Xl=null;g.h.Yj=0;g.h.yG=0;g.h.Qc=null;g.h.Xf=null;g.h.gf=null;g.h.Gg=null;g.h.Rf=null;g.h.On=null;g.h.ai=-1;g.h.Jv=-1;g.h.Ae=-1;g.h.Fh=0;g.h.zh=0;g.h.Cg=8;var Y6=new g.wk;g.Ta(F6,g.Zj);g.Ta(G6,g.Zj);g.Ta(H6,g.Zj);g.h=E6.prototype;g.h.connect=function(a,b,c,d,e){b6(0);this.kp=b;this.dj=c||{};d&&void 0!==e&&(this.dj.OSID=d,this.dj.OAID=e);this.w?(l6((0,g.x)(this.Qt,this,a),100),N6(this)):this.Qt(a)};
g.h.Qt=function(a){this.Rf=new q6(this);this.Rf.lp=null;this.Rf.i=this.u;this.Rf.connect(a)};
g.h.Vu=function(){return 0==this.g};
g.h.by=function(a){this.Xf=null;S6(this,a)};
g.h.ay=function(){this.gf=null;this.Qb=new W5(this,this.l,"rpc",this.B);this.Qb.Ng=null;this.Qb.np=0;var a=this.vt.clone();f5(a,"RID","rpc");f5(a,"SID",this.l);f5(a,"CI",this.On?"0":"1");f5(a,"AID",this.ai);J6(this,a);if(!g.Jd||g.nd(10))f5(a,"TYPE","xmlhttp"),Z5(this.Qb,a,!0,this.Xl,!1);else{f5(a,"TYPE","html");var b=this.Qb,c=!!this.Xl;b.Mh=3;b.Mf=g5(a.clone());j6(b,c)}};
g.h.Wx=function(a,b){if(0!=this.g&&(this.Qb==a||this.td==a))if(this.Ae=a.uj,this.td==a&&3==this.g)if(7<this.Cg){try{var c=this.u.parse(b)}catch(f){c=null}if(g.La(c)&&3==c.length)if(0==c[0])a:{if(!this.gf){if(this.Qb)if(this.Qb.vi+3E3<this.td.vi)O6(this),this.Qb.cancel(),this.Qb=null;else break a;V6(this);b6(19)}}else this.Jv=c[1],0<this.Jv-this.ai&&37500>c[2]&&this.On&&0==this.zh&&!this.Gg&&(this.Gg=l6((0,g.x)(this.aH,this),6E3));else X6(this,11)}else b!=Uqa.gN.g&&X6(this,11);else if(this.Qb==a&&
O6(this),!g.yb(b)){c=this.u.parse(b);g.La(c);for(var d=0;d<c.length;d++){var e=c[d];this.ai=e[0];e=e[1];2==this.g?"c"==e[0]?(this.l=e[1],this.Xl=e[2],e=e[3],null!=e?this.Cg=e:this.Cg=6,this.g=3,this.Qc&&this.Qc.Kt(),this.vt=r6(this,this.uk()?this.Xl:null,this.kp),T6(this)):"stop"==e[0]&&X6(this,7):3==this.g&&("stop"==e[0]?X6(this,7):"noop"!=e[0]&&this.Qc&&this.Qc.Jt(e),this.zh=0)}}};
g.h.aH=function(){null!=this.Gg&&(this.Gg=null,this.Qb.cancel(),this.Qb=null,V6(this),b6(20))};
g.h.bn=function(a){if(this.Qb==a){O6(this);this.Qb=null;var b=2}else if(this.td==a)this.td=null,b=1;else return;this.Ae=a.uj;if(0!=this.g)if(a.oe)1==b?(b=(0,g.A)()-a.vi,Y6.dispatchEvent(new G6(Y6,a.gh?a.gh.length:0,b,this.Fh)),M6(this),this.o.length=0):T6(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Ae)){if(d=1==b)this.td||this.Xf||1==this.g||2<=this.Fh?d=!1:(this.Xf=l6((0,g.x)(this.by,this,a),U6(this,this.Fh)),this.Fh++,d=!0);d=!(d||2==b&&V6(this))}if(d)switch(c){case 1:X6(this,
5);break;case 4:X6(this,10);break;case 3:X6(this,6);break;case 7:X6(this,12);break;default:X6(this,2)}}};
g.h.zB=function(a){if(!g.ab(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.AL=function(a){a?b6(2):(b6(1),W6(this,8))};
g.h.Ko=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new v6;a.S=!1;return a};
g.h.isActive=function(){return!!this.Qc&&this.Qc.isActive(this)};
g.h.ne=function(a){Y6.dispatchEvent(new H6(Y6,a))};
g.h.uk=function(){return!(!g.Jd||g.nd(10))};
g.h=Z6.prototype;g.h.Kt=function(){};
g.h.Jt=function(){};
g.h.It=function(){};
g.h.Eo=function(){};
g.h.xu=function(){return{}};
g.h.isActive=function(){return!0};g.h=$6.prototype;g.h.isEmpty=function(){return g.bb(this.g)&&g.bb(this.i)};
g.h.clear=function(){this.g=[];this.i=[]};
g.h.contains=function(a){return g.ab(this.g,a)||g.ab(this.i,a)};
g.h.remove=function(a){var b=this.g;var c=(0,g.una)(b,a);0<=c?(g.db(b,c),b=!0):b=!1;return b||g.eb(this.i,a)};
g.h.wd=function(){for(var a=[],b=this.g.length-1;0<=b;--b)a.push(this.g[b]);var c=this.i.length;for(b=0;b<c;++b)a.push(this.i[b]);return a};g.Ta(a7,g.E);g.h=a7.prototype;g.h.aK=function(){this.Tc=Math.min(3E5,2*this.Tc);this.l();this.i&&this.start()};
g.h.start=function(){var a=this.Tc+15E3*Math.random();g.bn(this.g,a);this.i=(0,g.A)()+a};
g.h.stop=function(){this.g.stop();this.i=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.Tc=5E3};g.Ta(b7,Z6);g.h=b7.prototype;g.h.subscribe=function(a,b,c){return this.l.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.l.unsubscribe(a,b,c)};
g.h.Bf=function(a){return this.l.Og(a)};
g.h.N=function(a,b){return this.l.N.apply(this.l,arguments)};
g.h.dispose=function(){this.bb||(this.bb=!0,g.Ci(this.l),c7(this),g.Ci(this.i),this.i=null)};
g.h.fa=function(){return this.bb};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.D="";this.i.stop();this.u=a||null;this.o=b||0;a=this.G+"/test";b=this.G+"/bind";var d=new E6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.I),e=this.g;e&&(e.Qc=null);d.Qc=this;this.g=d;e?this.g.connect(a,b,this.w,e.l,e.ai):c?this.g.connect(a,b,this.w,c.sessionId,c.arrayId):this.g.connect(a,b,this.w)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.ec(c,b);this.i.isActive()||2==(this.g?this.g.g:0)?this.B.push(c):d7(this)&&P6(this.g,c)};
g.h.Kt=function(){this.i.reset();this.u=null;this.o=0;if(this.B.length){var a=this.B;this.B=[];for(var b=0,c=a.length;b<c;++b)P6(this.g,a[b])}this.N("handlerOpened")};
g.h.It=function(a){var b=2==a&&401==this.g.Ae;4==a||b||this.i.start();this.N("handlerError",a)};
g.h.Eo=function(a){if(!this.i.isActive())this.N("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.B.push(d)}};
g.h.xu=function(){var a={v:2};this.D&&(a.gsessionid=this.D);0!=this.o&&(a.ui=""+this.o);0!=this.C&&(a.ui=""+this.C);this.u&&g.ec(a,this.u);return a};
g.h.Jt=function(a){"S"==a[0]?this.D=a[1]:"gracefulReconnect"==a[0]?(this.i.start(),L6(this.g)):this.N("handlerMessage",new gqa(a[0],a[1]))};
g.h.dL=function(){this.i.isActive();var a=this.g,b=0;a.Qb&&b++;a.td&&b++;0==b&&this.connect(this.u,this.o)};e7.prototype.o=function(a,b,c,d){b?a(d):a({text:c.responseText})};
e7.prototype.l=function(a,b){a(Error("Request error: "+b.status))};
e7.prototype.u=function(a){a(Error("request timed out"))};var mqa=(0,g.A)(),j7=null,n7=Array(50),m7=-1,o7=!1;g.Ta(p7,g.O);p7.prototype.Kd=function(){return this.g};
p7.prototype.contains=function(a){return!!w5(this.g,a)};
p7.prototype.get=function(a){return a?x5(this.g,a):null};
p7.prototype.info=function(a){l7(this.B,a)};g.r(r7,g.O);g.h=r7.prototype;g.h.start=function(){!this.g&&isNaN(this.za)&&this.Xz()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);isNaN(this.za)||(g.Eo(this.za),this.za=NaN)};
g.h.V=function(){this.stop();g.O.prototype.V.call(this)};
g.h.Xz=function(){this.za=NaN;this.g=g.Ap(f7(this.w,"/pairing/get_screen"),{method:"POST",sb:{pairing_code:this.u},timeout:5E3,onSuccess:(0,g.x)(this.cM,this),onError:(0,g.x)(this.bM,this),Nd:(0,g.x)(this.dM,this)})};
g.h.cM=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.l;c.name=this.o;this.N("pairingComplete",new p5(c))};
g.h.bM=function(a){this.g=null;a.status&&404==a.status?this.i>=Wqa.length?this.N("pairingFailed",Error("DIAL polling timed out")):(a=Wqa[this.i],this.za=g.Co((0,g.x)(this.Xz,this),a),this.i++):this.N("pairingFailed",Error("Server error "+a.status))};
g.h.dM=function(){this.g=null;this.N("pairingFailed",Error("Server not responding"))};
var Wqa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ta(t7,p7);g.h=t7.prototype;g.h.start=function(){s7(this)&&this.N("screenChange");!g.by("yt-remote-lounge-token-expiration")&&u7(this);g.Eo(this.i);this.i=g.Co((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){s7(this);q7(this,a);v7(this,!1);this.N("screenChange");b(a);a.token||u7(this)};
g.h.remove=function(a,b){var c=s7(this);oqa(this,a)&&(v7(this,!1),c=!0);b(a);c&&this.N("screenChange")};
g.h.Kn=function(a,b,c,d){var e=s7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,v7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.N("screenChange")};
g.h.V=function(){g.Eo(this.i);t7.xb.V.call(this)};
g.h.jC=function(a){s7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}v7(this,!b);b&&l7(this.B,"Missed "+b+" lounge tokens.")};
g.h.iC=function(a){l7(this.B,"Requesting lounge tokens failed: "+a)};g.r(x7,g.O);g.h=x7.prototype;g.h.start=function(){var a=parseInt(g.by("yt-remote-fast-check-period")||"0",10);(this.o=(0,g.A)()-144E5<a?0:a)?A7(this):(this.o=(0,g.A)()+3E5,g.ay("yt-remote-fast-check-period",this.o),this.jr())};
g.h.isEmpty=function(){return g.Zb(this.g)};
g.h.update=function(){w7("Updating availability on schedule.");var a=this.w(),b=g.Nb(this.g,function(c,d){return c&&!!x5(a,d)},this);
z7(this,b)};
g.h.V=function(){g.Eo(this.l);this.l=NaN;this.i&&(this.i.abort(),this.i=null);g.O.prototype.V.call(this)};
g.h.jr=function(){g.Eo(this.l);this.l=NaN;this.i&&this.i.abort();var a=B7(this);if(j5(a)){var b=f7(this.u,"/pairing/get_screen_availability");this.i=g7(this.u,b,{lounge_token:g.Tb(a).join(",")},(0,g.x)(this.EJ,this,a),(0,g.x)(this.DJ,this))}else z7(this,{}),A7(this)};
g.h.EJ=function(a,b){this.i=null;var c=g.Tb(B7(this));if(g.sb(c,g.Tb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;z7(this,d);A7(this)}else this.Kb("Changing Screen set during request."),this.jr()};
g.h.DJ=function(a){this.Kb("Screen availability failed: "+a);this.i=null;A7(this)};
g.h.Kb=function(a){l7("OnlineScreenService",a)};g.Ta(C7,p7);g.h=C7.prototype;g.h.start=function(){this.l.start();this.i.start();this.g.length&&(this.N("screenChange"),this.i.isEmpty()||this.N("onlineScreenChange"))};
g.h.add=function(a,b,c){this.l.add(a,b,c)};
g.h.remove=function(a,b,c){this.l.remove(a,b,c);this.i.update()};
g.h.Kn=function(a,b,c,d){this.l.contains(a)?this.l.Kn(a,b,c,d):(a="Updating name of unknown screen: "+a.name,l7(this.B,a),d(Error(a)))};
g.h.Kd=function(a){return a?this.g:g.gb(this.g,(0,g.Wd)(this.o,function(b){return!this.contains(b)},this))};
g.h.Yz=function(){return(0,g.Wd)(this.Kd(!0),function(a){return!!this.i.g[a.id]},this)};
g.h.Zz=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new r7(this.w,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.Ci(f);d(D7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.Ci(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.fM=function(a,b,c,d){g.Ap(f7(this.w,"/pairing/get_screen"),{method:"POST",sb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new p5(f.screen||{});if(!k.name||F7(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);F7(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(D7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Nd:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.V=function(){g.Ci(this.l);g.Ci(this.i);C7.xb.V.call(this)};
g.h.qC=function(){G7(this);this.N("screenChange");this.i.update()};
C7.prototype.dispose=C7.prototype.dispose;g.Ta(I7,g.O);g.h=I7.prototype;g.h.dn=function(a){this.l=a;this.N("sessionScreen",this.l)};
g.h.Md=function(a){this.fa()||(a&&J7(this,""+a),this.l=null,this.N("sessionScreen",null))};
g.h.info=function(a){l7(this.R,a)};
g.h.bA=function(){return null};
g.h.ur=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){J7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.V=function(){this.ur("");I7.xb.V.call(this)};g.Ta(L7,I7);g.h=L7.prototype;g.h.tr=function(a){if(this.g){if(this.g==a)return;J7(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.w);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.u)}this.g=a;this.g.addUpdateListener(this.w);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.u);sqa(this)};
g.h.bi=function(a){this.info("launchWithParams no-op for Cast: "+g.zj(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.x)(function(){this.Md()},this),(0,g.x)(function(){this.Md(Error("Failed to stop receiver app."))},this)):this.Md(Error("Stopping cast device witout session."))};
g.h.ur=g.Ia;g.h.V=function(){this.info("disposeInternal");g.Eo(this.o);this.o=0;this.g&&(this.g.removeUpdateListener(this.w),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.u));this.g=null;L7.xb.V.call(this)};
g.h.CK=function(a,b){if(!this.fa())if(b){var c=Q5(b);if(g.Oa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.zj(c));switch(d){case "mdxSessionStatus":K7(this,c.screenId);break;default:J7(this,"Unknown youtube message: "+d)}}else J7(this,"Unable to parse message.")}else J7(this,"No data in message.")};
g.h.Qu=function(a,b,c,d){E7(this.D,this.i.label,a,this.i.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(J7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Co((0,g.x)(this.Qu,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.bA=function(){return this.g};
g.h.gM=function(a){this.fa()||a||(J7(this,"Cast session died."),this.Md())};g.Ta(M7,I7);g.h=M7.prototype;g.h.tr=function(a){this.o=a;this.o.addUpdateListener(this.I)};
g.h.bi=function(a){this.u=a;this.B()};
g.h.stop=function(){this.g();this.g=g.Ia;g.Eo(this.w);this.o?this.o.stop((0,g.x)(this.Md,this,null),(0,g.x)(this.Md,this,"Failed to stop DIAL device.")):this.Md()};
g.h.V=function(){this.g();this.g=g.Ia;g.Eo(this.w);this.o&&this.o.removeUpdateListener(this.I);this.o=null;M7.xb.V.call(this)};
g.h.jM=function(a){this.fa()||a||(J7(this,"DIAL session died."),this.g(),this.g=g.Ia,this.Md())};
g.h.Bp=function(a){this.G=v5();if(this.u){var b=new chrome.cast.DialLaunchResponse(!0,O7(this));a(b);N7(this)}else this.B=(0,g.x)(function(){g.Eo(this.w);this.B=g.Ia;this.w=NaN;var c=new chrome.cast.DialLaunchResponse(!0,O7(this));a(c);N7(this)},this),this.w=g.Co((0,g.x)(function(){this.B()},this),100)};
g.h.LC=function(a,b,c){E7(this.D,this.C.receiver.label,a,this.i.friendlyName,(0,g.x)(function(d){d&&d.token?(this.dn(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Bp(b,c)},this),(0,g.x)(function(d){J7(this,"Failed to get DIAL screen: "+d);
this.Bp(b,c)},this))};g.Ta(P7,I7);P7.prototype.stop=function(){this.Md()};
P7.prototype.tr=g.Ia;P7.prototype.bi=function(){g.Eo(this.g);this.g=NaN;var a=x5(this.D.Kd(),this.i.label);a?this.dn(a):this.Md(Error("No such screen"))};
P7.prototype.V=function(){g.Eo(this.g);this.g=NaN;P7.xb.V.call(this)};g.Ta(Q7,g.O);g.h=Q7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.B);this.C||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.nJ,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.Yx,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.zH,this);chrome.cast.initialize(c,(0,g.x)(function(){this.fa()||
(chrome.cast.addReceiverActionListener(this.o),jqa(),this.i.subscribe("onlineScreenChange",(0,g.x)(this.aA,this)),this.l=V7(this),chrome.cast.setCustomReceivers(this.l,g.Ia,(0,g.x)(function(k){this.Kb("Failed to set initial custom receivers: "+g.zj(k))},this)),this.N("yt-remote-cast2-availability-change",T7(this)),b(!0))},this),(0,g.x)(function(k){this.Kb("Failed to initialize API: "+g.zj(k));
b(!1)},this))};
g.h.lL=function(a,b){S7("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.l;if(!a||c&&c.id!=a)S7("Unsetting old screen status: "+this.g.i.friendlyName),U7(this,null)}if(a&&b){if(!this.g){c=x5(this.i.Kd(),a);if(!c){S7("setConnectedScreenStatus: Unknown screen.");return}var d=R7(this,c);d||(S7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.l.push(d),chrome.cast.setCustomReceivers(this.l,
g.Ia,(0,g.x)(function(e){this.Kb("Failed to set initial custom receivers: "+g.zj(e))},this)));
S7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);U7(this,new P7(this.i,d),!0)}this.g.ur(b)}else S7("setConnectedScreenStatus: no screen.")};
g.h.mL=function(a){this.fa()?this.Kb("Setting connection data on disposed cast v2"):this.g?this.g.bi(a):this.Kb("Setting connection data without a session")};
g.h.iM=function(){this.fa()?this.Kb("Stopping session on disposed cast v2"):this.g?(this.g.stop(),U7(this,null)):S7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.Yx,this),(0,g.x)(this.KJ,this))};
g.h.V=function(){this.i.unsubscribe("onlineScreenChange",(0,g.x)(this.aA,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.o);g.eb(g.w("yt.mdx.remote.debug.handlers_")||[],h7);g.Ci(this.g);Q7.xb.V.call(this)};
g.h.Kb=function(a){l7("Controller",a)};
g.h.Zx=function(a,b){this.g==a&&(b||U7(this,null),this.N("yt-remote-cast2-session-change",b))};
g.h.jJ=function(a,b){if(!this.fa())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),S7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.i.label!=a.label)S7("onReceiverAction_: Stopping active receiver: "+this.g.i.friendlyName),this.g.stop();else{S7("onReceiverAction_: Casting to active receiver.");this.g.l&&this.N("yt-remote-cast2-session-change",this.g.l);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:U7(this,
new P7(this.i,a));break;case chrome.cast.ReceiverType.DIAL:U7(this,new M7(this.i,a,this.w));break;case chrome.cast.ReceiverType.CAST:U7(this,new L7(this.i,a));break;default:this.Kb("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.g&&this.g.i.label==a.label?this.g.stop():this.Kb("Stopping receiver w/o session: "+a.friendlyName)}else this.Kb("onReceiverAction_ called without receiver.")};
g.h.zH=function(a){if(this.fa())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Kb("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.i:null;if(!c||c.label!=b.label)return this.Kb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.g.l)return S7("Reselecting dial screen."),
this.N("yt-remote-cast2-session-change",this.g.l),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Kb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);U7(this,new M7(this.i,b,this.w))}b=this.g;b.C=a;return b.C.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.LC,b,(b.C.extraData||{}).screenId||null)):new Promise((0,g.x)(b.Bp,b))};
g.h.Yx=function(a){if(!this.fa()){S7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==chrome.cast.ReceiverType.CAST)S7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),U7(this,new L7(this.i,b),!0);else{this.Kb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.i,d=x5(this.i.Kd(),c.label);d&&q5(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(S7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Ci(this.g),this.g=new L7(this.i,b),this.g.subscribe("sessionScreen",(0,g.x)(this.Zx,this,this.g)),this.g.bi(null));this.g.tr(a)}}};
g.h.hM=function(){return this.g?this.g.bA():null};
g.h.KJ=function(a){this.fa()||(this.Kb("Failed to estabilish a session: "+g.zj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&U7(this,null))};
g.h.nJ=function(a){S7("Receiver availability updated: "+a);if(!this.fa()){var b=T7(this);this.u=a==chrome.cast.ReceiverAvailability.AVAILABLE;T7(this)!=b&&this.N("yt-remote-cast2-availability-change",T7(this))}};
g.h.aA=function(){this.fa()||(this.l=V7(this),S7("Updating custom receivers: "+g.zj(this.l)),chrome.cast.setCustomReceivers(this.l,g.Ia,(0,g.x)(function(){this.Kb("Failed to set custom receivers.")},this)),this.N("yt-remote-cast2-availability-change",T7(this)))};
Q7.prototype.setLaunchParams=Q7.prototype.mL;Q7.prototype.setConnectedScreenStatus=Q7.prototype.lL;Q7.prototype.stopSession=Q7.prototype.iM;Q7.prototype.getCastSession=Q7.prototype.hM;Q7.prototype.requestSession=Q7.prototype.requestSession;Q7.prototype.init=Q7.prototype.init;Q7.prototype.dispose=Q7.prototype.dispose;var d8=[];l8.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";m8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.g=a.trackData,this.Be=a.hasPrevious,this.hasNext=a.hasNext,this.B=a.playerTime,this.w=a.playerTimeAt,this.o=a.seekableStart,this.i=a.seekableEnd,this.C=a.duration,this.D=a.loadedTime,this.l=a.liveIngestionTime,this.u=
!isNaN(this.l))};
l8.prototype.isAdPlaying=function(){return 1081==this.playerState};
l8.prototype.getDuration=function(){return this.u?this.C+n8(this):this.C};
l8.prototype.clone=function(){return new l8(r8(this))};g.r(u8,g.O);g.h=u8.prototype;g.h.play=function(){1==this.g?(this.i?this.i.play(null,g.Ia,C8(this,"play")):A8(this,"play"),z8(this,1,p8(v8(this))),this.N("remotePlayerChange")):x8(this,this.play)};
g.h.pause=function(){1==this.g?(this.i?this.i.pause(null,g.Ia,C8(this,"pause")):A8(this,"pause"),z8(this,2,p8(v8(this))),this.N("remotePlayerChange")):x8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.g){if(this.i){var b=v8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ia,C8(this,"seekTo",{newTime:a}))}else A8(this,"seekTo",{newTime:a});z8(this,3,a);this.N("remotePlayerChange")}else x8(this,g.Ra(this.seekTo,a))};
g.h.stop=function(){if(1==this.g){this.i?this.i.stop(null,g.Ia,C8(this,"stopVideo")):A8(this,"stopVideo");var a=v8(this);a.index=-1;a.videoId="";m8(a);y8(this,a);this.N("remotePlayerChange")}else x8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=v8(this);if(this.l){if(c.volume!=a){var d=Math.round(a)/100;this.l.setReceiverVolumeLevel(d,(0,g.x)(function(){l7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.Kb("failed to set receiver volume.")},this))}c.muted!=b&&this.l.setReceiverMuted(b,(0,g.x)(function(){l7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.Kb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);A8(this,"setVolume",e)}c.muted=b;c.volume=a;y8(this,c)}else x8(this,g.Ra(this.setVolume,a,b))};
g.h.az=function(a,b){if(1==this.g){var c=v8(this),d={videoId:a};b&&(c.g={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.zj(b.style),g.ec(d,c.g));A8(this,"setSubtitlesTrack",d);y8(this,c)}else x8(this,g.Ra(this.az,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.g){var c=b.getLanguageInfo().getId();A8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=v8(this);d.audioTrackId=c;y8(this,d)}else x8(this,g.Ra(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=v8(this);c=c||0;var m={videoId:a,currentIndex:c};q8(l,a,c);g.Ca(b)&&(o8(l,b),m.currentTime=b);g.Ca(d)&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.zj(k));A8(this,"setPlaylist",m);d||y8(this,l)};
g.h.Wz=function(a,b){if(1==this.g){if(a&&b){var c=v8(this);q8(c,a,b);y8(this,c)}A8(this,"previous")}else x8(this,g.Ra(this.Wz,a,b))};
g.h.nextVideo=function(a,b){if(1==this.g){if(a&&b){var c=v8(this);q8(c,a,b);y8(this,c)}A8(this,"next")}else x8(this,g.Ra(this.nextVideo,a,b))};
g.h.Yt=function(){1==this.g?A8(this,"dismissAutoplay"):x8(this,this.Yt)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.N("proxyStateChange",a,this.g)}g.O.prototype.dispose.call(this)};
g.h.V=function(){w8(this);this.o=null;this.u.clear();t8(this,null);g.O.prototype.V.call(this)};
g.h.Yr=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.N("proxyStateChange",b,a);if(1==a)for(;!this.u.isEmpty();)b=a=this.u,g.bb(b.g)&&(b.g=b.i,b.g.reverse(),b.i=[]),a.g.pop().apply(this);else 3==a&&this.dispose()}};
g.h.gJ=function(a,b){this.N(a,b)};
g.h.gH=function(a){if(!a)this.bk(null),t8(this,null);else if(this.l.receiver.volume){a=this.l.receiver.volume;var b=v8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)l7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,y8(this,b)}};
g.h.bk=function(a){l7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.C);if(this.i=a)this.i.addUpdateListener(this.C),B8(this),this.N("remotePlayerChange")};
g.h.fH=function(a){a?(B8(this),this.N("remotePlayerChange")):this.bk(null)};
g.h.sH=function(){var a=h8();a&&t8(this,a)};
g.h.Kb=function(a){l7("CP",a)};g.r(D8,g.O);g.h=D8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.Ca(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.Ca(k)&&(l.currentIndex=k);c&&(this.Na.listId=c);this.Na.videoId=d;this.Na.index=k||0;this.Na.state=3;o8(this.Na,m);this.o="UNSUPPORTED";E8("Connecting with setPlaylist and params: "+g.zj(l));this.g.connect({method:"setPlaylist",
params:g.zj(l)},a,D5())}else E8("Connecting without params"),this.g.connect({},a,D5());zqa(this)};
g.h.dispose=function(){this.fa()||(this.N("beforeDispose"),F8(this,3));g.O.prototype.dispose.call(this)};
g.h.V=function(){G8(this);I8(this);H8(this);g.Eo(this.B);this.B=NaN;g.Eo(this.C);this.C=NaN;this.l=null;g.$q(this.R);this.R.length=0;this.g.dispose();g.O.prototype.V.call(this);this.o=this.w=this.i=this.Na=this.g=null};
g.h.cC=function(){this.Dh(2)};
g.h.kH=function(){E8("Channel opened");this.I&&(this.I=!1,H8(this),this.G=g.Co((0,g.x)(function(){E8("Timing out waiting for a screen.");this.Dh(1)},this),15E3));
Ypa(hqa(this.g),this.M)};
g.h.hH=function(){E8("Channel closed");isNaN(this.u)?G5(!0):G5();this.dispose()};
g.h.iH=function(a){G5();isNaN(this.nj())?(E8("Channel error: "+a+" without reconnection"),this.dispose()):(this.I=!0,E8("Channel error: "+a+" with reconnection in "+this.nj()+" ms"),F8(this,2))};
g.h.jH=function(a){a.params?E8("Received: action="+a.action+", params="+g.zj(a.params)):E8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Q5(a.params.devices);this.i=(0,g.fe)(a,function(c){return new o5(c)});
a=!!g.Ya(this.i,function(c){return"LOUNGE_SCREEN"==c.type});
L8(this,a);break;case "loungeScreenDisconnected":g.fb(this.i,function(c){return"LOUNGE_SCREEN"==c.type});
L8(this,!1);break;case "remoteConnected":var b=new o5(Q5(a.params.device));g.Ya(this.i,function(c){return b?c.id==b.id:!1})||Lpa(this.i,b);
break;case "remoteDisconnected":b=new o5(Q5(a.params.device));g.fb(this.i,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":M8(this,a);break;case "nowPlaying":Cqa(this,a);break;case "onStateChange":N8(this,a);break;case "onAdStateChange":Dqa(this,a);break;case "onVolumeChanged":Eqa(this,a);break;case "onSubtitlesTrackChanged":Bqa(this,a);break;case "nowAutoplaying":Fqa(this,a);break;case "autoplayDismissed":this.N("autoplayDismissed");break;case "autoplayUpNext":this.w=a.params.videoId||null;this.N("autoplayUpNext",this.w);break;case "onAutoplayModeChanged":this.o=
a.params.autoplayMode;this.N("autoplayModeChange",this.o);"DISABLED"==this.o&&this.N("autoplayDismissed");break;case "onHasPreviousNextChanged":Gqa(this,a);break;case "requestAssistedSignIn":this.N("assistedSignInRequested",a.params.authCode);break;default:E8("Unrecognized action: "+a.action)}};
g.h.aL=function(){if(this.l){var a=this.l;this.l=null;this.Na.videoId!=a&&J8(this,"getNowPlaying")}};
g.h.SB=function(){var a=3;this.fa()||(a=0,isNaN(this.nj())?d7(this.g)&&isNaN(this.u)&&(a=1):a=2);return a};
g.h.Dh=function(a){E8("Disconnecting with "+a);G8(this);this.N("beforeDisconnect",a);1==a&&G5();c7(this.g,a);this.dispose()};
g.h.RB=function(){var a=this.Na;this.l&&(a=this.Na.clone(),q8(a,this.l,a.index));return r8(a)};
g.h.nL=function(a){var b=new l8(a);b.videoId&&b.videoId!=this.Na.videoId&&(this.l=b.videoId,g.Eo(this.B),this.B=g.Co((0,g.x)(this.aL,this),5E3));var c=[];this.Na.listId==b.listId&&this.Na.videoId==b.videoId&&this.Na.index==b.index||c.push("remoteQueueChange");this.Na.playerState==b.playerState&&this.Na.volume==b.volume&&this.Na.muted==b.muted&&p8(this.Na)==p8(b)&&g.zj(this.Na.g)==g.zj(b.g)||c.push("remotePlayerChange");this.Na.reset(a);(0,g.z)(c,function(d){this.N(d)},this)};
g.h.Ou=function(){var a=this.g.w.id,b=g.Ya(this.i,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.nj=function(){var a=this.g;return a.i.isActive()?a.i.i-(0,g.A)():NaN};
g.h.LB=function(){return this.o||"UNSUPPORTED"};
g.h.MB=function(){return this.w||""};
g.h.aM=function(){if(!isNaN(this.nj())){var a=this.g.i;g.cn(a.g);a.start()}};
g.h.iL=function(a,b){J8(this,a,b);K8(this)};
D8.prototype.subscribe=D8.prototype.subscribe;D8.prototype.unsubscribeByKey=D8.prototype.Bf;D8.prototype.getProxyState=D8.prototype.SB;D8.prototype.disconnect=D8.prototype.Dh;D8.prototype.getPlayerContextData=D8.prototype.RB;D8.prototype.setPlayerContextData=D8.prototype.nL;D8.prototype.getOtherConnectedRemoteId=D8.prototype.Ou;D8.prototype.getReconnectTimeout=D8.prototype.nj;D8.prototype.getAutoplayMode=D8.prototype.LB;D8.prototype.getAutoplayVideoId=D8.prototype.MB;D8.prototype.reconnect=D8.prototype.aM;
D8.prototype.sendMessage=D8.prototype.iL;g.r(O8,p7);g.h=O8.prototype;g.h.Kd=function(a){return this.Sc.$_gs(a)};
g.h.contains=function(a){return!!this.Sc.$_c(a)};
g.h.get=function(a){return this.Sc.$_g(a)};
g.h.start=function(){this.Sc.$_st()};
g.h.add=function(a,b,c){this.Sc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Sc.$_r(a,b,c)};
g.h.Kn=function(a,b,c,d){this.Sc.$_un(a,b,c,d)};
g.h.V=function(){for(var a=0,b=this.i.length;a<b;++a)this.Sc.$_ubk(this.i[a]);this.i.length=0;this.Sc=null;p7.prototype.V.call(this)};
g.h.eM=function(){this.N("screenChange")};
g.h.JI=function(){this.N("onlineScreenChange")};
C7.prototype.$_st=C7.prototype.start;C7.prototype.$_gspc=C7.prototype.fM;C7.prototype.$_gsppc=C7.prototype.Zz;C7.prototype.$_c=C7.prototype.contains;C7.prototype.$_g=C7.prototype.get;C7.prototype.$_a=C7.prototype.add;C7.prototype.$_un=C7.prototype.Kn;C7.prototype.$_r=C7.prototype.remove;C7.prototype.$_gs=C7.prototype.Kd;C7.prototype.$_gos=C7.prototype.Yz;C7.prototype.$_s=C7.prototype.subscribe;C7.prototype.$_ubk=C7.prototype.Bf;var h9=null,g9=!1,P8=null,Q8=null,f9=null,U8=[];g.r(i9,g.E);g.h=i9.prototype;
g.h.V=function(){g.E.prototype.V.call(this);this.o.stop();this.w.stop();this.I.stop();this.M();this.g.unsubscribe("proxyStateChange",this.Vx,this);this.g.unsubscribe("remotePlayerChange",this.dk,this);this.g.unsubscribe("remoteQueueChange",this.en,this);this.g.unsubscribe("autoplayUpNext",this.xx,this);this.g.unsubscribe("previousNextChange",this.Sx,this);this.g.unsubscribe("nowAutoplaying",this.Ox,this);this.g.unsubscribe("autoplayDismissed",this.wx,this);this.g=this.u=null};
g.h.rw=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(l9(this)){if(!v8(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==v8(this.g).playerState?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.G.Wl(c[0],c[1]);break;case "control_subtitles_set_track":m9(this,c[0]);break;case "control_set_audio_track":c=c[0],l9(this)&&this.g.setAudioTrack(this.i.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.i.getCurrentTime();n9(this,0==c?void 0:c);break;case "control_seek":n9(this,c[0]);break;case "control_subtitles_set_track":m9(this,c[0]);break;case "control_set_audio_track":c=c[0],l9(this)&&this.g.setAudioTrack(this.i.getVideoData(1).videoId,c)}};
g.h.eH=function(a){this.I.YB(a)};
g.h.JL=function(a){this.rw("control_subtitles_set_track",g.Zb(a)?null:a)};
g.h.lz=function(){var a=this.i.getOption("captions","track");g.Zb(a)||m9(this,a)};
g.h.Hx=function(a){if(l9(this)){this.g.unsubscribe("remotePlayerChange",this.dk,this);var b=Math.round(a.volume);a=!!a.muted;var c=v8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.R.start();this.g.subscribe("remotePlayerChange",this.dk,this)}};
g.h.eI=function(){g.Zb(this.B)||Rqa(this,this.B);this.C=!1};
g.h.Vx=function(a,b){this.w.stop();2==b&&this.kz()};
g.h.dk=function(){if(l9(this)){this.o.stop();var a=v8(this.g);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.D=1;break;case 1082:case 1083:this.u.D=0;break;default:this.u.D=-1}switch(a.playerState){case 1081:case 1:k9(this,new g.Ct(8));this.jz();break;case 1085:case 3:k9(this,new g.Ct(9));break;case 1083:case 0:k9(this,new g.Ct(2));this.G.stop();j9(this,this.i.getVideoData().lengthSeconds);break;case 1084:k9(this,new g.Ct(4));break;case 2:k9(this,new g.Ct(4));j9(this,p8(a));
break;case -1:k9(this,new g.Ct(64));break;case -1E3:k9(this,new g.Ct(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=v8(this.g).g;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,Rqa(this,a));a=v8(this.g);-1==a.volume||Math.round(this.i.getVolume())==a.volume&&this.i.isMuted()==a.muted||this.R.isActive()||this.Lz()}else Qqa(this)};
g.h.Sx=function(){this.i.N("mdxpreviousnextchange")};
g.h.en=function(){l9(this)||Qqa(this)};
g.h.eB=function(){this.g.Yt()};
g.h.xx=function(a){a&&!g.P(this.i.L().experiments,"disable_legacy_desktop_remote_queue")&&(a=g.Ap("/watch_queue_ajax",{method:"GET",od:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.x)(this.lK,this)}))&&(this.M=(0,g.x)(a.abort,a))};
g.h.lK=function(a,b){var c=new g.LB(this.i.L(),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.i.N("mdxautoplayupnext",c)};
g.h.Ox=function(a){isNaN(a)||this.i.N("mdxnowautoplaying",a)};
g.h.wx=function(){this.i.N("mdxautoplaycanceled")};
g.h.BE=function(a,b){-1==v8(this.g).playerState?n9(this,a):b&&this.g.seekTo(a)};
g.h.Lz=function(){if(l9(this)){var a=v8(this.g);this.l.Sa(this.P);a.muted?this.i.mute():this.i.unMute();this.i.setVolume(a.volume);this.P=this.l.J(this.i,"onVolumeChange",this.Hx)}};
g.h.jz=function(){this.o.stop();if(!this.g.fa()){var a=v8(this.g);1==a.playerState&&k9(this,new g.Ct(8));j9(this,p8(a));this.o.start()}};
g.h.kz=function(){this.w.stop();this.o.stop();var a=this.g.o.getReconnectTimeout();2==this.g.g&&!isNaN(a)&&this.w.start()};g.r(o9,g.T);o9.prototype.o=function(){m5("mdx-privacy-popup-cancel");this.l.hide()};
o9.prototype.w=function(){m5("mdx-privacy-popup-confirm");this.l.hide()};g.r(p9,g.T);p9.prototype.u=function(a){Tqa(this,a.state)};g.r(q9,g.SN);q9.prototype.I=function(){var a=this.l.getOption("remote","receivers");a&&1<a.length&&!this.l.getOption("remote","quickCast")?(this.B=g.vb(a,this.w,this),g.UN(this,(0,g.fe)(a,this.w)),a=this.l.getOption("remote","currentReceiver"),this.ee(this.w(a)),this.enable(!0)):this.enable(!1)};
q9.prototype.w=function(a){return a.key};
q9.prototype.me=function(a){return"cast-selector-receiver"==a?"Cast...":this.B[a].name};
q9.prototype.Mc=function(a){g.SN.prototype.Mc.call(this,a);this.l.setOption("remote","currentReceiver",this.B[a]);this.o.gb()};g.r(r9,g.aP);g.h=r9.prototype;
g.h.create=function(){Lqa(g.Xy(this.player.L()));this.o.push(g.Jo("yt-remote-before-disconnect",this.bH,this));this.o.push(g.Jo("yt-remote-connection-change",this.oJ,this));this.o.push(g.Jo("yt-remote-receiver-availability-change",this.Tx,this));this.o.push(g.Jo("yt-remote-auto-connect",this.mJ,this));this.o.push(g.Jo("yt-remote-receiver-resumed",this.lJ,this));this.o.push(g.Jo("mdx-privacy-popup-confirm",this.QK,this));this.o.push(g.Jo("mdx-privacy-popup-cancel",this.PK,this));this.Tx()};
g.h.load=function(){this.player.cancelPlayback();g.aP.prototype.load.call(this);this.u=new i9(this,this.player,this.g);var a=(a=Pqa())?a.currentTime:0;var b=e9()?new u8($8(),void 0):null;0==a&&b&&(a=p8(v8(b)));0!=a&&(this.R=a||0,this.player.N("progresssync",a,void 0));Sqa(this,this.B,this.B);g.rS(this.player.app,6)};
g.h.unload=function(){this.player.N("mdxautoplaycanceled");this.l=this.i;g.Di(this.u,this.g);this.g=this.u=null;g.aP.prototype.unload.call(this);g.rS(this.player.app,5);s9(this)};
g.h.V=function(){g.Ko(this.o);g.aP.prototype.V.call(this)};
g.h.Oj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.u.rw.apply(this.u,[a].concat(g.ea(c)))};
g.h.getAdState=function(){return this.D};
g.h.UB=function(){return this.loaded?this.u.suggestion:null};
g.h.Be=function(){return this.g?v8(this.g).Be:!1};
g.h.hasNext=function(){return this.g?v8(this.g).hasNext:!1};
g.h.getCurrentTime=function(){return this.R};
g.h.getProgressState=function(){var a=v8(this.g),b=this.player.getVideoData();return{allowSeeking:g.P(this.player.L().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.oc():!a.isAdPlaying()&&this.player.oc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.l+n8(a):a.l,isAtLiveHead:1>=(a.u?a.i+n8(a):a.i)-this.getCurrentTime(),loaded:a.D,seekableEnd:a.u?a.i+n8(a):a.i,seekableStart:0<a.o?a.o+n8(a):
a.o}};
g.h.nextVideo=function(){this.g&&this.g.nextVideo()};
g.h.pE=function(){this.g&&this.g.Wz()};
g.h.bH=function(a){1==a&&(this.M=this.g?v8(this.g):null)};
g.h.oJ=function(){var a=e9()?new u8($8(),void 0):null;if(a){var b=this.l;this.loaded&&this.unload();this.g=a;this.M=null;b.key!=this.i.key&&(this.l=b,this.load())}else g.Ci(this.g),this.g=null,this.loaded&&(this.unload(),(a=this.M)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,p8(a)));this.player.N("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.Tx=function(){this.G=[this.i].concat(Mqa());var a=a9()||this.i;t9(this,a);this.player.ha("onMdxReceiversChange")};
g.h.HK=function(a){!this.I&&g.jD(a,8)&&(this.player.pauseVideo(),s9(this))};
g.h.mJ=function(){var a=a9();t9(this,a)};
g.h.lJ=function(){this.l=a9()};
g.h.QK=function(){this.I=!0;s9(this);g9=!1;h9&&c9(h9,1);h9=null};
g.h.PK=function(){this.I=!1;s9(this);t9(this,this.i);this.l=this.i;g9=!1;h9=null;this.player.playVideo()};
g.h.xc=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?j8():t9(this,b)),this.loaded?this.l:this.i;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&j8(),!0):!1}};
g.h.qE=function(){A8(this.g,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Se=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.oP.remote=r9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 17:05:41 Oct 03, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:47:49 May 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 79.014 (2)
  RedisCDXSource: 0.811
  captures_list: 207.088
  CDXLines.iter: 38.142 (3)
  exclusion.robots: 0.213
  exclusion.robots.policy: 0.199
  LoadShardBlock: 106.385 (3)
  load_resource: 114.033
  esindex: 0.014
  PetaboxLoader3.datanode: 119.578 (4)
*/