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

(function(g){var window=this;var mqa=function(a,b){return g.Sb(a,b)},$5=function(a,b,c){a.w.set(b,c)},a6=function(a){$5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.A)()).toString(36));
return a},b6=function(a,b,c){g.Ha(c)||(c=[String(c)]);
g.Rm(a.w,b,c)},nqa=function(a,b){var c=[];
g.Xi(b,function(d){try{var e=g.Dn.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Cn(e)&&c.push(d)},a);
return c},oqa=function(a,b){var c=nqa(a,b);
(0,g.z)(c,function(d){g.Dn.prototype.remove.call(this,d)},a)},pqa=function(a){if(a.Yc){if(a.Yc.locationOverrideToken)return{locationOverrideToken:a.Yc.locationOverrideToken};
if(null!=a.Yc.latitudeE7&&null!=a.Yc.longitudeE7)return{latitudeE7:a.Yc.latitudeE7,longitudeE7:a.Yc.longitudeE7}}return null},qqa=function(a,b){g.Xa(a,b)||a.push(b)},c6=function(a){var b=0,c;
for(c in a)b++;return b},rqa=function(a,b){var c=b instanceof g.yc?b:g.Cc(b,/^data:image\//i.test(b));
a.src=g.zc(c)},d6=function(){},sqa=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},tqa=function(a){if(a.md&&"function"==typeof a.md)return a.md();
if("string"===typeof a)return a.split("");if(g.Ia(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Ob(a)},uqa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ia(a)||"string"===typeof a)(0,g.z)(a,b,void 0);else{if(a.Wd&&"function"==typeof a.Wd)var c=a.Wd();else if(a.md&&"function"==typeof a.md)c=void 0;else if(g.Ia(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Pb(a);d=tqa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},vqa=function(a,b,c,d){var e=new g.Fm(null,void 0);
a&&g.Gm(e,a);b&&g.Hm(e,b);c&&g.Im(e,c);d&&(e.u=d);return e},e6=function(a,b){g.Bo[a]=!0;
var c=g.zo();c&&c.publish.apply(c,arguments);g.Bo[a]=!1},f6=function(a){try{var b=(0,g.hy)(),c=(0,g.gy)();
b&&b.remove(a);c&&c.remove(a)}catch(d){}},wqa=function(){var a=(0,g.gy)();
a&&oqa(a,a.o.jf(!0))},g6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.w=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Cm;this.o=this.u="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",xqa(this,a.capabilities||""),yqa(this,a.experiments||""),this.u=a.remoteControllerUrl||"",this.o=a.localChannelEncryptionKey||
"")},xqa=function(a,b){a.capabilities.clear();
(0,g.Td)(b.split(","),g.Na(mqa,zqa)).forEach(function(c){a.capabilities.add(c)})},yqa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},h6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},i6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},Aqa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Bqa=function(a){return new h6(a)},Cqa=function(a){return g.Ha(a)?(0,g.ee)(a,Bqa):[]},j6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},k6=function(a){return g.Ha(a)?"["+(0,g.ee)(a,j6).join(",")+"]":"null"},l6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Dqa=function(a){return(0,g.ee)(a,function(b){return{key:b.id,
name:b.name}})},m6=function(a,b){return g.Ua(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},n6=function(a,b){return g.Ua(a,function(c){return i6(c,b)})},o6=function(){var a=g.jy("yt-remote-connected-devices")||[];
g.nb(a);return a},Eqa=function(a){if(g.Ya(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.ee)(a,function(d,e){return 0==e?d:d.substring(c.length)})},Fqa=function(a){g.iy("yt-remote-connected-devices",a,86400)},q6=function(){if(p6)return p6;
var a=g.jy("yt-remote-device-id");a||(a=l6(),g.iy("yt-remote-device-id",a,31536E3));for(var b=o6(),c=1,d=a;g.Xa(b,d);)c++,d=a+"#"+c;return p6=d},r6=function(){var a=o6(),b=q6();
g.Xa(a,b);g.tM()&&g.pb(a,b);a=Eqa(a);if(g.Ya(a))try{g.ur("remote_sid")}catch(c){}else try{g.tr("remote_sid",a.join(","),-1)}catch(c){}},Gqa=function(){return g.jy("yt-remote-session-browser-channel")},Hqa=function(){return g.jy("yt-remote-local-screens")||[]},Iqa=function(){g.iy("yt-remote-lounge-token-expiration",!0,86400)},Jqa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.ee)(Hqa(),function(d){return d.loungeToken}),c=(0,g.ee)(a,function(d){return d.loungeToken});
(0,g.$g)(c,function(d){return!g.Xa(b,d)})&&Iqa();
g.iy("yt-remote-local-screens",a,31536E3)},Kqa=function(a,b){g.iy("yt-remote-session-browser-channel",a);
g.iy("yt-remote-session-screen-id",b);var c=o6(),d=q6();g.Xa(c,d)||c.push(d);Fqa(c);r6()},s6=function(a){a||(f6("yt-remote-session-screen-id"),f6("yt-remote-session-video-id"));
r6();a=o6();g.ab(a,q6());Fqa(a)},Lqa=function(){if(!t6){var a=g.Nn();
a&&(t6=new g.xn(a))}return t6?!!t6.get("yt-remote-use-staging-server"):!1},Mqa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},Nqa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},u6=function(a){a.length?Oqa(a.shift(),function(){u6(a)}):v6()},Pqa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},Oqa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},v6=function(){var a=Nqa();
a&&a(!1,"No cast extension found")},Rqa=function(){if(Qqa){var a=2,b=Nqa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Oqa("//web.archive.org/web/20191103020852/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",v6,c)}},Sqa=function(){Rqa();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);u6(["//web.archive.org/web/20191103020852/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20191103020852/https://www.gstatic.com/eureka/clank/cast_sender.js"])},w6=function(a,b,c){g.E.call(this);
this.C=null!=c?(0,g.x)(a,c):a;this.Rc=b;this.B=(0,g.x)(this.aD,this);this.o=!1;this.u=0;this.w=this.Fa=null;this.A=[]},x6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return sqa(a)},y6=function(){},z6=function(){},Tqa=function(){},Vqa=function(a){return(a=Uqa(a))?new ActiveXObject(a):new XMLHttpRequest},Uqa=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},A6=function(a,b,c,d){this.o=a;
this.w=b;this.G=c;this.D=d||1;this.B=45E3;this.A=new g.r_(this);this.u=new g.bl;this.u.setInterval(250)},Xqa=function(a,b,c){a.ii=1;
a.Vf=a6(b.clone());a.uh=c;a.C=!0;Wqa(a,null)},B6=function(a,b,c,d,e){a.ii=1;
a.Vf=a6(b.clone());a.uh=null;a.C=c;e&&(a.Ez=!1);Wqa(a,d)},Wqa=function(a,b){a.Ni=(0,g.A)();
C6(a);a.Bg=a.Vf.clone();b6(a.Bg,"t",a.D);a.Uk=0;a.uc=a.o.bp(a.o.Ik()?b:null);0<a.Gp&&(a.Fn=new g.el((0,g.x)(a.FA,a,a.uc),a.Gp));a.A.ga(a.uc,"readystatechange",a.eM);var c=a.Yg?g.Zb(a.Yg):{};a.uh?(a.ko="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.uc.send(a.Bg,a.ko,a.uh,c)):(a.ko="GET",a.Ez&&!g.Id&&(c.Connection="close"),a.uc.send(a.Bg,a.ko,null,c));a.o.le(1)},$qa=function(a,b,c){for(var d=!0;!a.Lg&&a.Uk<c.length;){var e=Yqa(a,c);
if(e==D6){4==b&&(a.lg=4,E6(15),d=!1);break}else if(e==Zqa){a.lg=4;E6(16);d=!1;break}else F6(a,e)}4==b&&0==c.length&&(a.lg=1,E6(17),d=!1);a.me=a.me&&d;d||(G6(a),H6(a))},Yqa=function(a,b){var c=a.Uk,d=b.indexOf("\n",c);
if(-1==d)return D6;c=Number(b.substring(c,d));if(isNaN(c))return Zqa;d+=1;if(d+c>b.length)return D6;var e=b.substr(d,c);a.Uk=d+c;return e},bra=function(a,b){a.Ni=(0,g.A)();
C6(a);var c=b?window.location.hostname:"";a.Bg=a.Vf.clone();$5(a.Bg,"DOMAIN",c);$5(a.Bg,"t",a.D);try{a.se=new ActiveXObject("htmlfile")}catch(n){G6(a);a.lg=7;E6(22);H6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in I6)k=I6[l];else if(l in ara)k=I6[l]=ara[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
I6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Qc(g.pc("b/12014412"),d+"</body></html>");a.se.open();a.se.write(g.Lc(c));a.se.close();a.se.parentWindow.m=(0,g.x)(a.vL,a);a.se.parentWindow.d=(0,g.x)(a.Ly,a,!0);a.se.parentWindow.rpcClose=(0,g.x)(a.Ly,a,!1);c=a.se.createElement("DIV");a.se.parentWindow.document.body.appendChild(c);d=g.Bc(a.Bg.toString());d=g.Xc(g.zc(d));d=g.Qc(g.pc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Rc(c,d);a.o.le(1)},C6=function(a){a.Js=(0,g.A)()+a.B;
cra(a,a.B)},cra=function(a,b){if(null!=a.bj)throw Error("WatchDog timer not null");
a.bj=J6((0,g.x)(a.CL,a),b)},K6=function(a){a.bj&&(g.v.clearTimeout(a.bj),a.bj=null)},H6=function(a){a.o.Bv()||a.Lg||a.o.xn(a)},G6=function(a){K6(a);
g.yi(a.Fn);a.Fn=null;a.u.stop();g.t_(a.A);if(a.uc){var b=a.uc;a.uc=null;b.abort();b.dispose()}a.se&&(a.se=null)},F6=function(a,b){try{a.o.Ey(a,b),a.o.le(4)}catch(c){}},era=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;dra(a,b,function(k){k?c(!0):g.v.setTimeout(function(){era(a,b,c,d,f)},f)})}},dra=function(a,b,c){var d=new Image;
d.onload=function(){try{L6(d),c(!0)}catch(e){}};
d.onerror=function(){try{L6(d),c(!1)}catch(e){}};
d.onabort=function(){try{L6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{L6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
rqa(d,a)},L6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},fra=function(a){this.o=a;
this.u=new y6},gra=function(a){var b=M6(a.o,a.jj,"/mail/images/cleardot.gif");
a6(b);era(b.toString(),5E3,(0,g.x)(a.WB,a),3,2E3);a.le(1)},O6=function(a){var b=a.o.H;
if(null!=b)E6(5),b?(E6(11),N6(a.o,a,!1)):(E6(12),N6(a.o,a,!0));else if(a.wd=new A6(a,void 0,void 0,void 0),a.wd.Yg=a.Ep,b=a.o,b=M6(b,b.Ik()?a.Fj:null,a.Fp),E6(5),!g.Gd||g.kd(10))b6(b,"TYPE","xmlhttp"),B6(a.wd,b,!1,a.Fj,!1);else{b6(b,"TYPE","html");var c=a.wd;a=!!a.Fj;c.ii=3;c.Vf=a6(b.clone());bra(c,a)}},P6=function(a){g.rk.call(this);
this.headers=new g.Cm;this.P=a||null;this.w=!1;this.U=this.o=null;this.Z=this.H="";this.C=0;this.A="";this.B=this.da=this.G=this.T=!1;this.D=0;this.J=null;this.aa="";this.K=this.V=!1},hra=function(a){return g.Gd&&g.jd(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},ira=function(a){return"content-type"==a.toLowerCase()},kra=function(a,b){a.w=!1;
a.o&&(a.B=!0,a.o.abort(),a.B=!1);a.A=b;a.C=5;jra(a);Q6(a)},jra=function(a){a.T||(a.T=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},mra=function(a){if(a.w&&"undefined"!=typeof g.z_)if(a.U[1]&&4==R6(a)&&2==a.getStatus())S6(a,"Local request error detected and ignored");
else if(a.G&&4==R6(a))g.cl(a.Dv,0,a);else if(a.dispatchEvent("readystatechange"),4==R6(a)){S6(a,"Request complete");a.w=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.vf(1,String(a.H));if(!f&&g.v.self&&g.v.self.location){var k=g.v.self.location.protocol;f=k.substr(0,k.length-1)}e=!lra.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.C=6;try{var l=2<R6(a)?a.o.statusText:""}catch(m){l=""}a.A=l+" ["+a.getStatus()+"]";jra(a)}}finally{Q6(a)}}},Q6=function(a,b){if(a.o){nra(a);
var c=a.o,d=a.U[0]?g.Ea:null;a.o=null;a.U=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},nra=function(a){a.o&&a.K&&(a.o.ontimeout=null);
a.J&&(g.v.clearTimeout(a.J),a.J=null)},R6=function(a){return a.o?a.o.readyState:0},T6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},S6=function(a,b){return b+" ["+a.Z+" "+a.H+" "+a.getStatus()+"]"},U6=function(a,b,c){this.o=1;
this.u=[];this.A=[];this.B=new y6;this.G=a||null;this.H=null!=b?b:null;this.C=c||!1},ora=function(a,b){this.o=a;
this.map=b;this.context=null},pra=function(a){g.Uj.call(this,"statevent",a)},qra=function(a,b){g.Uj.call(this,"timingevent",a);
this.size=b},rra=function(a){g.Uj.call(this,"serverreachability",a)},ura=function(a){sra(a);
if(3==a.o){var b=a.mk++,c=a.Yl.clone();$5(c,"SID",a.w);$5(c,"RID",b);$5(c,"TYPE","terminate");V6(a,c);b=new A6(a,a.w,b,void 0);b.ii=2;b.Vf=a6(c.clone());rqa(new Image,b.Vf.toString());b.Ni=(0,g.A)();C6(b)}tra(a)},vra=function(a){a.sC(1,0);
a.Yl=M6(a,null,a.Dp);W6(a)},sra=function(a){a.Zf&&(a.Zf.abort(),a.Zf=null);
a.Qb&&(a.Qb.cancel(),a.Qb=null);a.kf&&(g.v.clearTimeout(a.kf),a.kf=null);X6(a);a.qd&&(a.qd.cancel(),a.qd=null);a.gg&&(g.v.clearTimeout(a.gg),a.gg=null)},wra=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new ora(a.JH++,b));2!=a.o&&3!=a.o||W6(a)},W6=function(a){a.qd||a.gg||(a.gg=J6((0,g.x)(a.Ky,a),0),a.Vh=0)},yra=function(a,b){if(1==a.o){if(!b){a.mk=Math.floor(1E5*Math.random());
var c=a.mk++,d=new A6(a,"",c,void 0);d.Yg=null;var e=Y6(a),f=a.Yl.clone();$5(f,"RID",c);$5(f,"CVER","1");V6(a,f);Xqa(d,f,e);a.qd=d;a.o=2}}else 3==a.o&&(b?xra(a,b):0==a.u.length||a.qd||xra(a))},xra=function(a,b){if(b)if(6<a.Mg){a.u=a.A.concat(a.u);
a.A.length=0;var c=a.mk-1;var d=Y6(a)}else c=b.G,d=b.uh;else c=a.mk++,d=Y6(a);var e=a.Yl.clone();$5(e,"SID",a.w);$5(e,"RID",c);$5(e,"AID",a.wi);V6(a,e);c=new A6(a,a.w,c,a.Vh+1);c.Yg=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.qd=c;Xqa(c,e,d)},V6=function(a,b){if(a.Oc){var c=a.Oc.Wu();
c&&g.Hb(c,function(d,e){$5(b,e,d)})}},Y6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Mg&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,k=a.u[e].map;f=6>=a.Mg?e:f-d;try{g.Hb(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.A=a.A.concat(a.u.splice(0,b));
return c.join("&")},zra=function(a){a.Qb||a.kf||(a.D=1,a.kf=J6((0,g.x)(a.Jy,a),0),a.Ph=0)},Z6=function(a){if(a.Qb||a.kf||3<=a.Ph)return!1;
a.D++;a.kf=J6((0,g.x)(a.Jy,a),Ara(a,a.Ph));a.Ph++;return!0},N6=function(a,b,c){a.ho=c;
a.Be=b.yf;a.C||vra(a)},X6=function(a){null!=a.Qg&&(g.v.clearTimeout(a.Qg),a.Qg=null)},Ara=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},$6=function(a,b){if(2==b||9==b){var c=null;
a.Oc&&(c=null);var d=(0,g.x)(a.PM,a);c||(c=new g.Fm("//web.archive.org/web/20191103020852/https://www.google.com/images/cleardot.gif"),a6(c));dra(c.toString(),1E4,d)}else E6(2);Bra(a,b)},Bra=function(a,b){a.o=0;
a.Oc&&a.Oc.lu(b);tra(a);sra(a)},tra=function(a){a.o=0;
a.Be=-1;if(a.Oc)if(0==a.A.length&&0==a.u.length)a.Oc.To();else{g.db(a.A);var b=g.db(a.u);a.A.length=0;a.u.length=0;a.Oc.To(b)}},M6=function(a,b,c){var d=g.Nm(c);
if(""!=d.o)b&&g.Hm(d,b+"."+d.o),g.Im(d,d.B);else{var e=window.location;d=vqa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.uj&&g.Hb(a.uj,function(f,k){$5(d,k,f)});
$5(d,"VER",a.Mg);V6(a,d);return d},J6=function(a,b){if(!g.Ja(a))throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},E6=function(a){a7.dispatchEvent(new pra(a7,a))},Cra=function(){},Dra=function(){this.o=[];
this.u=[]},Era=function(a,b){this.action=a;
this.params=b||{}},b7=function(a,b){g.E.call(this);
this.o=new g.J(this.mL,0,this);g.H(this,this.o);this.Rc=5E3;this.u=0;if(g.Ja(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Ja(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.w=a},c7=function(a,b,c){this.J=a;
this.C=b;this.w=new g.wn;this.u=new b7(this.oM,this);this.o=null;this.bb=!1;this.B=null;this.H="";this.G=this.A=0;this.D=[];this.K=c||!1},Fra=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.ho,sessionId:a.o.w,arrayId:a.o.wi}},Gra=function(a,b){a.G=b||0;
a.u.stop();a.o&&(3==a.o.o&&yra(a.o),ura(a.o));a.G=0},d7=function(a){return!!a.o&&3==a.o.o},Hra=function(a,b){(a.C.loungeIdToken=b)||a.u.stop()},e7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.vf(4,a))||"";b&&(this.port=":"+b);this.domain=g.wf(a)||"";a=g.Fb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Eb(a,"10.0")&&(this.u=!1))},f7=function(a,b){var c=a.o;
a.u&&(c="https://"+a.domain+a.port+a.o);return g.Ff(c+b,{})},g7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Na(a.A,d,!0),onError:g.Na(a.w,e),Md:g.Na(a.B,e)};c&&(a.ub=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Bp(b,a)},Lra=function(){var a=Ira;
Jra();h7.push(a);Kra(h7)},i7=function(a,b){Jra();
var c=h7,d=Mra(a,String(b));g.Ya(c)?Nra(d):(Kra(c),(0,g.z)(c,function(e){e(d)}))},Jra=function(){h7||(h7=g.w("yt.mdx.remote.debug.handlers_")||[],g.Ca("yt.mdx.remote.debug.handlers_",h7,void 0))},Nra=function(a){var b=(j7+1)%50;
j7=b;k7[b]=a;l7||(l7=49==b)},Kra=function(a){var b=k7;
if(b[0]){var c=j7,d=l7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.z)(a,function(f){f(e)})}while(d!=c);
k7=Array(50);j7=-1;l7=!1}},Mra=function(a,b){var c=((0,g.A)()-Ora)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},m7=function(a){g.P.call(this);
this.D=a;this.o=[]},Pra=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},Qra=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Td)(a.o,function(f){return!!m6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=Pra(a,b[d])||c;return c},Rra=function(a,b){var c=a.o.length;
a.o=(0,g.Td)(a.o,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.o.length<c},n7=function(a,b,c,d){g.P.call(this);
this.C=a;this.B=b;this.w=c;this.A=d;this.u=0;this.o=null;this.Fa=NaN},p7=function(a){m7.call(this,"LocalScreenService");
this.w=a;this.u=NaN;o7(this);this.info("Initializing with "+k6(this.o))},Sra=function(a){if(a.o.length){var b=(0,g.ee)(a.o,function(d){return d.id}),c=f7(a.w,"/pairing/get_lounge_token_batch");
g7(a.w,c,{screen_ids:b.join(",")},(0,g.x)(a.kD,a),(0,g.x)(a.jD,a))}},o7=function(a){var b=Cqa(Hqa());
b=(0,g.Td)(b,function(c){return!c.uuid});
return Qra(a,b)},q7=function(a,b){Jqa((0,g.ee)(a.o,Aqa));
b&&Iqa()},s7=function(a,b){g.P.call(this);
this.C=b;var c=g.jy("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Xa(c,l)}this.o=d;this.B=a;this.w=this.A=NaN;this.u=null;r7("Initialized with "+g.xj(this.o))},Tra=function(a,b,c){var d=f7(a.B,"/pairing/get_screen_availability");
g7(a.B,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},t7=function(a,b){a:if(c6(b)!=c6(a.o))var c=!1;
else{c=g.Pb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(r7("Updated online screens: "+g.xj(a.o)),a.o=b,a.R("screenChange"));Ura(a)},u7=function(a){isNaN(a.w)||g.yo(a.w);
a.w=g.wo((0,g.x)(a.Or,a),0<a.A&&a.A<(0,g.A)()?2E4:1E4)},r7=function(a){i7("OnlineScreenService",a)},Vra=function(a){var b={};
(0,g.z)(a.C(),function(c){c.token?b[c.token]=c.id:this.Jb("Requesting availability of screen w/o lounge token.")});
return b},Ura=function(a){a=g.Pb(g.Ib(a.o,function(b){return b}));
g.nb(a);a.length?g.iy("yt-remote-online-screen-ids",a.join(","),60):f6("yt-remote-online-screen-ids")},v7=function(a){m7.call(this,"ScreenService");
this.C=a;this.u=this.w=null;this.A=[];this.B={};Wra(this)},Yra=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.Id();if(k=(c?n6(k,c):null)||n6(k,b)){k.uuid=b;var l=w7(a,k);Tra(a.u,l,function(m){e(m?l:null)})}else c?Xra(a,c,(0,g.x)(function(m){var n=w7(this,new h6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));Tra(this.u,n,function(q){e(q?n:null)})},a),f):e(null)},Zra=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},Xra=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={ub:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Bp(f7(a.C,"/pairing/get_lounge_token_batch"),e)},$ra=function(a){a.o=a.w.Id();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+k6(a.o))},Wra=function(a){x7(a);
a.w=new p7(a.C);a.w.subscribe("screenChange",(0,g.x)(a.rD,a));$ra(a);a.A=Cqa(g.jy("yt-remote-automatic-screen-cache")||[]);x7(a);a.info("Initializing automatic screens: "+k6(a.A));a.u=new s7(a.C,(0,g.x)(a.Id,a,!0));a.u.subscribe("screenChange",(0,g.x)(function(){this.R("onlineScreenChange")},a))},w7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=n6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.iy("yt-remote-automatic-screen-cache",(0,g.ee)(a.A,Aqa)));x7(a);a.B[b.uuid]=b.id;g.iy("yt-remote-device-id-map",a.B,31536E3);return b},x7=function(a){a.B=g.jy("yt-remote-device-id-map")||{}},y7=function(a,b,c){g.P.call(this);
this.U=c;this.H=a;this.u=b;this.w=null},z7=function(a,b){i7(a.U,b)},A7=function(a,b){y7.call(this,a,b,"CastSession");
this.o=null;this.A=0;this.C=(0,g.x)(this.yN,this);this.B=(0,g.x)(this.NL,this);this.A=g.wo((0,g.x)(function(){asa(this,null)},this),12E4)},bsa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.xj(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ea,(0,g.x)(function(){z7(this,"Failed to send message: getMdxSessionStatus.")},a)):z7(a,"Sending yt message without session: "+g.xj(b))},asa=function(a,b){g.yo(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.w||a.w.id!=b){var c=(0,g.x)(a.zn,a),d=(0,g.x)(a.Ld,a);a.vv(b,c,d,5)}}else a.Ld(Error("Waiting for session status timed out."))},B7=function(a,b,c){y7.call(this,a,b,"DialSession");
this.A=this.G=null;this.J="";this.P=c;this.B=null;this.D=g.Ea;this.C=NaN;this.K=(0,g.x)(this.BN,this);this.o=g.Ea},csa=function(a){a.o=a.H.LA(a.J,a.u.label,a.u.friendlyName,(0,g.x)(function(b){this.o=g.Ea;
this.zn(b)},a),(0,g.x)(function(b){this.o=g.Ea;
this.Ld(b)},a))},dsa=function(a){var b={};
b.pairingCode=a.J;b.theme=a.P;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}Lqa()&&(b.env_useStageMdx=1);return g.Df(b)},C7=function(a,b){y7.call(this,a,b,"ManualSession");
this.o=g.wo((0,g.x)(this.xi,this,null),150)},D7=function(a,b,c,d){g.P.call(this);
this.u=a;this.D=b||"233637DE";this.C=c||"cl";this.G=d||!1;this.o=null;this.B=!1;this.w=[];this.A=(0,g.x)(this.uK,this)},esa=function(a,b){return b?g.Ua(a.w,function(c){return i6(b,c.label)},a):null},E7=function(a){i7("Controller",a)},Ira=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},F7=function(a){return a.B||!!a.w.length||!!a.o},G7=function(a,b,c){b!=a.o&&(g.yi(a.o),(a.o=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.u):a.R("yt-remote-cast2-receiver-selected",
b.u),b.subscribe("sessionScreen",(0,g.x)(a.Hy,a,b)),b.w?a.R("yt-remote-cast2-session-change",b.w):c&&a.o.xi(null)):a.R("yt-remote-cast2-session-change",null))},fsa=function(a){var b=a.u.KA(),c=a.o&&a.o.u;
a=(0,g.ee)(b,function(d){c&&i6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=esa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},lsa=function(a,b,c,d,e,f,k){gsa()?hsa(b,e,f,k)&&(I7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?isa(a,c):(window.__onGCastApiAvailable=function(l,m){l?isa(a,c):(J7("Failed to load cast API: "+m),K7(!1),I7(!1),f6("yt-remote-cast-available"),f6("yt-remote-cast-receiver"),jsa(),c(!1))},d?g.Oo("https://web.archive.org/web/20191103020852/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?Sqa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?v6():(Rqa(),u6(ksa.map(Pqa))))):H7("Cannot initialize because not running Chrome")},jsa=function(){H7("dispose");
var a=L7();a&&a.dispose();g.Ca("yt.mdx.remote.cloudview.instance_",null,void 0);msa(!1);g.Eo(M7);M7.length=0},N7=function(){return!!g.jy("yt-remote-cast-installed")},nsa=function(){var a=g.jy("yt-remote-cast-receiver");
return a?a.friendlyName:null},osa=function(){H7("clearCurrentReceiver");
f6("yt-remote-cast-receiver")},psa=function(){return N7()?L7()?L7().getCastSession():(J7("getCastSelector: Cast is not initialized."),null):(J7("getCastSelector: Cast API is not installed!"),null)},P7=function(){N7()?L7()?O7()?(H7("Requesting cast selector."),L7().requestSession()):(H7("Wait for cast API to be ready to request the session."),M7.push(g.Do("yt-remote-cast2-api-ready",P7))):J7("requestCastSelector: Cast is not initialized."):J7("requestCastSelector: Cast API is not installed!")},Q7=
function(a,b){O7()?L7().setConnectedScreenStatus(a,b):J7("setConnectedScreenStatus called before ready.")},gsa=function(){var a=0<=g.Fb.search(/ (CrMo|Chrome|CriOS)\//);
return g.Ms||a},qsa=function(a,b){L7().init(a,b)},hsa=function(a,b,c,d){var e=!1;
L7()||(a=new D7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.iy("yt-remote-cast-available",f);e6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){H7("onReceiverSelected: "+f.friendlyName);
g.iy("yt-remote-cast-receiver",f);e6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){H7("onReceiverResumed: "+f.friendlyName);
g.iy("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){H7("onSessionChange: "+j6(f));
f||f6("yt-remote-cast-receiver");e6("yt-remote-cast2-session-change",f)}),g.Ca("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
H7("cloudview.createSingleton_: "+e);return e},L7=function(){return g.w("yt.mdx.remote.cloudview.instance_")},isa=function(a,b){K7(!0);
I7(!1);qsa(a,function(c){c?(msa(!0),g.Go("yt-remote-cast2-api-ready")):(J7("Failed to initialize cast API."),K7(!1),f6("yt-remote-cast-available"),f6("yt-remote-cast-receiver"),jsa());b(c)})},H7=function(a){i7("cloudview",a)},J7=function(a){i7("cloudview",a)},K7=function(a){H7("setCastInstalled_ "+a);
g.iy("yt-remote-cast-installed",a)},O7=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},msa=function(a){H7("setApiReady_ "+a);
g.Ca("yt.mdx.remote.cloudview.apiReady_",a,void 0)},I7=function(a){g.Ca("yt.mdx.remote.cloudview.initializing_",a,void 0)},R7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.C=this.D=0;this.o=null;this.hasNext=this.Ce=!1;this.H=this.G=this.u=this.A=0;this.w=NaN;this.B=!1;this.reset(a)},S7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.Ce=!1;a.hasNext=!1;a.D=0;a.C=(0,g.A)();a.A=0;a.u=0;a.G=0;a.H=0;a.w=NaN;a.B=!1},T7=function(a){return 1==a.playerState?((0,g.A)()-a.C)/1E3:0},U7=function(a,b){a.D=b;
a.C=(0,g.A)()},V7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.A)()-a.C)/1E3+a.D;
case -1E3:return 0}return a.D},W7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&S7(a)},X7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.$b(a.o);b.hasPrevious=a.Ce;b.hasNext=a.hasNext;b.playerTime=a.D;b.playerTimeAt=a.C;b.seekableStart=a.A;b.seekableEnd=a.u;b.duration=a.G;b.loadedTime=a.H;b.liveIngestionTime=a.w;return b},Z7=function(a,b){g.P.call(this);
this.o=0;this.A=a;this.C=[];this.B=new Dra;this.w=this.u=null;this.H=(0,g.x)(this.rI,this);this.D=(0,g.x)(this.qk,this);this.G=(0,g.x)(this.qI,this);this.J=(0,g.x)(this.DI,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Ms,this),rsa(this))):c=3;0!=c&&(b?this.Ms(c):g.wo((0,g.x)(function(){this.Ms(c)},this),0));
var d=psa();d&&Y7(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},$7=function(a){return new R7(a.A.getPlayerContextData())},rsa=function(a){(0,g.z)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.C.push(this.A.subscribe(b,g.Na(this.rK,b),this))},a)},ssa=function(a){(0,g.z)(a.C,function(b){this.A.unsubscribeByKey(b)},a);
a.C.length=0},a8=function(a,b){var c=a.B;
50>c.o.length+c.u.length&&a.B.u.push(b)},c8=function(a,b,c){var d=$7(a);
U7(d,c);-1E3!=d.playerState&&(d.playerState=b);b8(a,d)},d8=function(a,b,c){a.A.sendMessage(b,c)},b8=function(a,b){ssa(a);
a.A.setPlayerContextData(X7(b));rsa(a)},Y7=function(a,b){a.w&&(a.w.removeUpdateListener(a.H),a.w.removeMediaListener(a.D),a.qk(null));
a.w=b;a.w&&(i7("CP","Setting cast session: "+a.w.sessionId),a.w.addUpdateListener(a.H),a.w.addMediaListener(a.D),a.w.media.length&&a.qk(a.w.media[0]))},tsa=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=$7(a);b.contentId!=d.videoId&&i7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;U7(d,a.u.getEstimatedTime());b8(a,d)}else i7("CP","No cast media video. Ignoring state update.")},e8=function(a,b,c){return(0,g.x)(function(d){this.Jb("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Jb("Retrying "+b+" using MDx browser channel."),d8(this,b,c))},a)},f8=function(a,b,c){g.P.call(this);
this.B=NaN;this.K=!1;this.G=this.D=this.H=this.J=NaN;this.U=[];this.A=this.C=this.w=this.Qa=this.o=null;this.T=a;this.U.push(g.Yq(window,"beforeunload",(0,g.x)(this.dD,this)));this.u=[];this.Qa=new R7;this.P=b.id;this.o=usa(this,c);this.o.subscribe("handlerOpened",this.vI,this);this.o.subscribe("handlerClosed",this.sI,this);this.o.subscribe("handlerError",this.tI,this);this.o.subscribe("handlerMessage",this.uI,this);Hra(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Qa.videoId;
g.tM()&&g.iy("yt-remote-session-video-id",d)},this)},g8=function(a){i7("conn",a)},usa=function(a,b){return new c7(f7(a.T,"/bc"),b)},h8=function(a,b){a.R("proxyStateChange",b)},vsa=function(a){a.B=g.wo((0,g.x)(function(){g8("Connecting timeout");
this.Th(1)},a),2E4)},i8=function(a){g.yo(a.B);
a.B=NaN},j8=function(a){g.yo(a.J);
a.J=NaN},wsa=function(a){k8(a);
a.H=g.wo((0,g.x)(function(){l8(this,"getNowPlaying")},a),2E4)},k8=function(a){g.yo(a.H);
a.H=NaN},ysa=function(a,b){b&&(i8(a),j8(a));
b==(d7(a.o)&&isNaN(a.B))?b&&(h8(a,1),l8(a,"getSubtitlesTrack")):b?(a.qv()&&a.Qa.reset(),h8(a,1),l8(a,"getNowPlaying"),xsa(a)):a.Th(1)},zsa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Qa.videoId&&(g.Wb(b.params)?a.Qa.o=null:a.Qa.o=b.params,a.R("remotePlayerChange"))},Asa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Qa.listId=b.params.listId||a.Qa.listId;W7(a.Qa,c,d);a.R("remoteQueueChange")},Csa=function(a,b){b.params=b.params||{};
Asa(a,b);Bsa(a,b);a.R("autoplayDismissed")},Bsa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
U7(a.Qa,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Qa.playerState&&(c=-1E3);a.Qa.playerState=c;c=Number(b.params.loadedTime);a.Qa.H=isNaN(c)?0:c;c=Number(b.params.duration);a.Qa.G=isNaN(c)?0:c;c=a.Qa;var d=Number(b.params.liveIngestionTime);c.w=d;c.B=isNaN(d)?!1:!0;c=a.Qa;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.A=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.Qa.playerState?wsa(a):k8(a);a.R("remotePlayerChange")},Dsa=function(a,b){if(-1E3!=
a.Qa.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Qa.playerState=c;c=parseInt(b.params.currentTime,10);U7(a.Qa,isNaN(c)?0:c);a.R("remotePlayerChange")}},Esa=function(a,b){var c="true"==b.params.muted;
a.Qa.volume=parseInt(b.params.volume,10);a.Qa.muted=c;a.R("remotePlayerChange")},Fsa=function(a,b){a.C=b.params.videoId;
a.R("nowAutoplaying",parseInt(b.params.timeout,10))},Gsa=function(a,b){var c="true"==b.params.hasNext;
a.Qa.Ce="true"==b.params.hasPrevious;a.Qa.hasNext=c;a.R("previousNextChange")},xsa=function(a){g.yo(a.G);
a.G=g.wo((0,g.x)(a.Th,a,1),864E5)},l8=function(a,b,c){c?g8("Sending: action="+b+", params="+g.xj(c)):g8("Sending: action="+b);
a.o.sendMessage(b,c)},m8=function(a){m7.call(this,"ScreenServiceProxy");
this.Qc=a;this.u=[];this.u.push(this.Qc.$_s("screenChange",(0,g.x)(this.wN,this)));this.u.push(this.Qc.$_s("onlineScreenChange",(0,g.x)(this.VJ,this)))},Lsa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.oo("MDX_CONFIG")||b;wqa();r6();n8||(n8=new e7(b?b.loungeApiHost:void 0),Lqa()&&(n8.o="/api/loungedev"));o8||(o8=g.w("yt.mdx.remote.deferredProxies_")||[],g.Ca("yt.mdx.remote.deferredProxies_",o8,void 0));Hsa();var c=p8();if(!c){var d=new v7(n8);g.Ca("yt.mdx.remote.screenService_",d,void 0);c=p8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);lsa(a,d,function(m){m?q8()&&Q7(q8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){e6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.w("yt.mdx.remote.initialized_")&&(g.Ca("yt.mdx.remote.initialized_",!0,void 0),r8("Initializing: "+g.xj(b)),s8.push(g.Do("yt-remote-cast2-availability-change",function(){e6("yt-remote-receiver-availability-change")})),s8.push(g.Do("yt-remote-cast2-receiver-selected",function(){t8(null);
e6("yt-remote-auto-connect","cast-selector-receiver")})),s8.push(g.Do("yt-remote-cast2-receiver-resumed",function(){e6("yt-remote-receiver-resumed","cast-selector-receiver")})),s8.push(g.Do("yt-remote-cast2-session-change",Isa)),s8.push(g.Do("yt-remote-connection-change",function(m){m?Q7(q8(),"YouTube TV"):u8()||(Q7(null,null),osa())})),a=v8(),b.isAuto&&(a.id+="#dial"),g.sp("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),r8(" -- with channel params: "+
g.xj(a)),Jsa(a),c.start(),q8()||Ksa())},Nsa=function(){var a=Msa();
N7()&&g.jy("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Msa=function(){var a=p8().Qc.$_gos();
var b=w8();b&&x8()&&(m6(a,b)||a.push(b));return Dqa(a)},y8=function(){var a=Osa();
!a&&N7()&&nsa()&&(a={key:"cast-selector-receiver",name:nsa()});return a},Osa=function(){var a=Msa(),b=w8();
b||(b=u8());return g.Ua(a,function(c){return b&&i6(b,c.key)?!0:!1})},w8=function(){var a=q8();
if(!a)return null;var b=p8().Id();return n6(b,a)},Isa=function(a){r8("remote.onCastSessionChange_: "+j6(a));
if(a){var b=w8();b&&b.id==a.id?Q7(b.id,"YouTube TV"):(b&&z8(),A8(a,1))}else x8()&&z8()},z8=function(){O7()?L7().stopSession():J7("stopSession called before API ready.");
var a=x8();a&&(a.disconnect(1),B8(null))},C8=function(){var a=x8();
return!!a&&3!=a.getProxyState()},r8=function(a){i7("remote",a)},p8=function(){if(!D8){var a=g.w("yt.mdx.remote.screenService_");
D8=a?new m8(a):null}return D8},q8=function(){return g.w("yt.mdx.remote.currentScreenId_")},Psa=function(a){g.Ca("yt.mdx.remote.currentScreenId_",a,void 0)},Qsa=function(){return g.w("yt.mdx.remote.connectData_")},t8=function(a){g.Ca("yt.mdx.remote.connectData_",a,void 0)},x8=function(){return g.w("yt.mdx.remote.connection_")},B8=function(a){var b=x8();
t8(null);a||Psa("");g.Ca("yt.mdx.remote.connection_",a,void 0);o8&&((0,g.z)(o8,function(c){c(a)}),o8.length=0);
b&&!a?e6("yt-remote-connection-change",!1):!b&&a&&e6("yt-remote-connection-change",!0)},u8=function(){var a=g.tM();
if(!a)return null;var b=p8().Id();return n6(b,a)},A8=function(a,b){q8();
w8()&&w8();if(E8)F8=a;else{Psa(a.id);var c=new f8(n8,a,v8());c.connect(b,Qsa());c.subscribe("beforeDisconnect",function(d){e6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){x8()&&(x8(),B8(null))});
B8(c)}},Ksa=function(){var a=u8();
a?(r8("Resume connection to: "+j6(a)),A8(a,0)):(s6(),osa(),r8("Skipping connecting because no session screen found."))},Hsa=function(){var a=v8();
if(g.Wb(a)){a=q6();var b=g.jy("yt-remote-session-name")||"",c=g.jy("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ca("yt.mdx.remote.channelParams_",a,void 0)}},v8=function(){return g.w("yt.mdx.remote.channelParams_")||{}},Jsa=function(a){a?(g.iy("yt-remote-session-app",a.app),g.iy("yt-remote-session-name",a.name)):(f6("yt-remote-session-app"),f6("yt-remote-session-name"));
g.Ca("yt.mdx.remote.channelParams_",a,void 0)},G8=function(a,b,c){g.E.call(this);
this.B=a;this.u=b;this.w=new g.Q(this);g.H(this,this.w);this.w.M(b,"onCaptionsTrackListChanged",this.qJ);this.w.M(b,"captionschanged",this.pI);this.w.M(b,"captionssettingschanged",this.Vz);this.w.M(b,"videoplayerreset",this.An);this.w.M(b,"mdxautoplaycancel",this.VB);this.P=this.w.M(b,"onVolumeChange",this.oy);this.G=!1;this.o=c;c.subscribe("proxyStateChange",this.Dy,this);c.subscribe("remotePlayerChange",this.tk,this);c.subscribe("remoteQueueChange",this.An,this);c.subscribe("autoplayUpNext",this.dy,
this);c.subscribe("previousNextChange",this.Ay,this);c.subscribe("nowAutoplaying",this.vy,this);c.subscribe("autoplayDismissed",this.by,this);this.suggestion=null;this.H=new g.It(64);this.A=new g.J(this.Tz,500,this);g.H(this,this.A);this.C=new g.J(this.Uz,1E3,this);g.H(this,this.C);this.K=new w6(this.ZM,0,this);g.H(this,this.K);this.D={};this.U=new g.J(this.xA,1E3,this);g.H(this,this.U);this.J=new g.el(this.HF,1E3,this);g.H(this,this.J);this.T=g.Ea;this.Vz();this.An();this.tk()},H8=function(a,b){var c=
a.B,d=a.u.getVideoData().lengthSeconds;
c.U=b||0;c.player.R("progresssync",b,d)},Rsa=function(a){H8(a,0);
a.A.stop();I8(a,new g.It(64))},K8=function(a,b){if(J8(a)&&!a.G){var c=null;
b&&(c={style:a.u.getSubtitlesUserSettings()},g.bc(c,b));a.o.Jz(a.u.getVideoData(1).videoId,c);a.D=$7(a.o).o}},L8=function(a,b){var c=a.u.getPlaylist();
if(c){var d=c.Sa;var e=c.listId.toString()}c=a.u.getVideoData(1);a.o.playVideo(c.videoId,b,d,e,c.playerParams,c.Ee,pqa(c));I8(a,new g.It(1))},Ssa=function(a,b){if(b){var c=a.u.getOption("captions","tracklist",{lR:1});
c&&c.length?(a.u.setOption("captions","track",b),a.G=!1):(a.u.loadModule("captions"),a.G=!0)}else a.u.setOption("captions","track",{})},J8=function(a){return $7(a.o).videoId==a.u.getVideoData(1).videoId},I8=function(a,b){a.C.stop();
var c=a.H;if(!g.Ot(c,b)){var d=g.T(b,2);d!=g.T(a.H,2)&&g.zT(a.u.app,d);a.H=b;Tsa(a.B,c,b)}},M8=function(){g.W.call(this,{F:"div",
I:"ytp-mdx-popup-dialog",N:{role:"dialog"},L:[{F:"div",I:"ytp-mdx-popup-dialog-inner-content",L:[{F:"div",I:"ytp-mdx-popup-title",W:"You're signed out"},{F:"div",I:"ytp-mdx-popup-description",W:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{F:"div",I:"ytp-mdx-privacy-popup-buttons",L:[{F:"button",X:["ytp-button","ytp-mdx-privacy-popup-cancel"],W:"Cancel"},{F:"button",X:["ytp-button","ytp-mdx-privacy-popup-confirm"],
W:"Confirm"}]}]}]});this.w=new g.zM(this,250);g.H(this,this.w);this.D=this.u["ytp-mdx-privacy-popup-cancel"];this.M(this.D,"click",this.A);this.B=this.u["ytp-mdx-privacy-popup-confirm"];this.M(this.B,"click",this.C)},N8=function(a){g.W.call(this,{F:"div",
I:"ytp-remote",L:[{F:"div",I:"ytp-remote-display-status",L:[{F:"div",I:"ytp-remote-display-status-icon",L:[g.BM()]},{F:"div",I:"ytp-remote-display-status-text",W:"{{statustext}}"}]}]});this.w=new g.zM(this,250);g.H(this,this.w);this.A=a;this.M(a,"presentingplayerstatechange",this.B);Usa(this,g.FK(a))},Usa=function(a,b){if(3==a.A.getPresentingPlayerType()){var c={RECEIVER_NAME:a.A.getOption("remote","currentReceiver").name};
c=g.T(b,128)?g.fN("Error on $RECEIVER_NAME",c):g.Pt(b)||g.T(b,4)?g.fN("Playing on $RECEIVER_NAME",c):g.fN("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.w.show()}else a.w.hide()},O8=function(a,b){g.bP.call(this,"Play on",0,a,b);
this.w=a;this.D={};this.M(a,"onMdxReceiversChange",this.K);this.M(a,"presentingplayerstatechange",this.K);this.K()},P8=function(a){g.kQ.call(this,a);
this.u={key:l6(),name:"This computer"};this.B=null;this.A=[];this.P=this.o=null;this.J=[this.u];this.w=this.u;this.D=new g.It(64);this.U=0;this.H=-1;this.C=null;if(!g.lz(this.player.O())){a=this.player;var b=g.iD(a);b&&(b=b.ek())&&(b=new O8(a,b),g.H(this,b));b=new N8(a);g.H(this,b);g.YK(a,b.element,4);this.C=new M8;g.H(this,this.C);g.YK(a,this.C.element,4);this.K=!!u8()}this.G=null},Q8=function(a){a.G&&(a.player.removeEventListener("presentingplayerstatechange",a.G),a.G=null)},Tsa=function(a,b,c){a.D=
c;
a.player.R("presentingplayerstatechange",new g.zD(c,b))},R8=function(a,b){if(b.key!=a.w.key)if(b.key==a.u.key)z8();
else{var c;(c=!g.R(a.player.O().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.oo("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.oo("SESSION_INDEX")&&!g.oo("LOGGED_IN")))||a.K||!a.C);if(c?0:a.player.O().Ge()||"WEB_EMBEDDED_PLAYER"==a.player.O().deviceParams.c)g.Pt(g.FK(a.player))?a.player.pauseVideo():(a.G=(0,g.x)(a.SL,a),a.player.addEventListener("presentingplayerstatechange",a.G)),a.C&&a.C.w.show(),x8()||(E8=!0);a.w=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(d||e){var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.va(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ee,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(c=pqa(c))&&(d.locationInfo=c);c=d}else c=null;r8("Connecting to: "+g.xj(b));"cast-selector-receiver"==b.key?(t8(c||null),c=c||null,O7()?L7().setLaunchParams(c):J7("setLaunchParams called before ready.")):
!c&&C8()&&q8()==b.key?e6("yt-remote-connection-change",!0):(z8(),t8(c||null),c=p8().Id(),(c=n6(c,b.key))&&A8(c,1))}},ara={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},I6={"'":"\\'"},Vsa={},zqa={ZN:"atp",vQ:"ska",kQ:"que",LP:"mus",uQ:"sus",ZO:"dsp",rQ:"seq"};
g6.prototype.ag=function(){var a=new g6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.w=this.w;a.u=this.u;a.o=this.o};
var t6,p6="",Qqa=Mqa("loadCastFramework")||Mqa("loadCastApplicationFramework"),ksa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.Pa(w6,g.E);g.h=w6.prototype;g.h.ZC=function(a){this.A=arguments;this.o=!1;this.Fa?this.w=(0,g.A)()+this.Rc:this.Fa=g.cl(this.B,this.Rc)};
g.h.stop=function(){this.Fa&&(g.v.clearTimeout(this.Fa),this.Fa=null);this.w=null;this.o=!1;this.A=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.C.apply(null,this.A)))};
g.h.Y=function(){this.stop();w6.xb.Y.call(this)};
g.h.aD=function(){this.w?(this.Fa=g.cl(this.B,this.w-(0,g.A)()),this.w=null):(this.Fa=null,this.u?this.o=!0:(this.o=!1,this.C.apply(null,this.A)))};y6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
y6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};z6.prototype.o=null;z6.prototype.getOptions=function(){var a;(a=this.o)||(a={},Uqa(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var S8;g.Pa(Tqa,z6);S8=new Tqa;g.h=A6.prototype;g.h.Yg=null;g.h.me=!1;g.h.bj=null;g.h.Js=null;g.h.Ni=null;g.h.ii=null;g.h.Vf=null;g.h.Bg=null;g.h.uh=null;g.h.uc=null;g.h.Uk=0;g.h.se=null;g.h.ko=null;g.h.lg=null;g.h.Gj=-1;g.h.Ez=!0;g.h.Lg=!1;g.h.Gp=0;g.h.Fn=null;var Zqa={},D6={};g.h=A6.prototype;g.h.setTimeout=function(a){this.B=a};
g.h.eM=function(a){a=a.target;var b=this.Fn;b&&3==R6(a)?b.nm():this.FA(a)};
g.h.FA=function(a){try{if(a==this.uc)a:{var b=R6(this.uc),c=this.uc.C,d=this.uc.getStatus();if(g.Gd&&!g.kd(10)||g.Id&&!g.jd("420+")){if(4>b)break a}else if(3>b||3==b&&!g.dg&&!T6(this.uc))break a;this.Lg||4!=b||7==c||(8==c||0>=d?this.o.le(3):this.o.le(2));K6(this);var e=this.uc.getStatus();this.Gj=e;var f=T6(this.uc);(this.me=200==e)?(4==b&&G6(this),this.C?($qa(this,b,f),g.dg&&this.me&&3==b&&(this.A.ga(this.u,"tick",this.YL),this.u.start())):F6(this,f),this.me&&!this.Lg&&(4==b?this.o.xn(this):(this.me=
!1,C6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.lg=3,E6(13)):(this.lg=0,E6(14)),G6(this),H6(this))}}catch(k){this.uc&&T6(this.uc)}finally{}};
g.h.YL=function(){var a=R6(this.uc),b=T6(this.uc);this.Uk<b.length&&(K6(this),$qa(this,a,b),this.me&&4!=a&&C6(this))};
g.h.vL=function(a){J6((0,g.x)(this.uL,this,a),0)};
g.h.uL=function(a){this.Lg||(K6(this),F6(this,a),C6(this))};
g.h.Ly=function(a){J6((0,g.x)(this.tL,this,a),0)};
g.h.tL=function(a){this.Lg||(G6(this),this.me=a,this.o.xn(this),this.o.le(4))};
g.h.cancel=function(){this.Lg=!0;G6(this)};
g.h.CL=function(){this.bj=null;var a=(0,g.A)();0<=a-this.Js?(2!=this.ii&&this.o.le(3),G6(this),this.lg=2,E6(18),H6(this)):cra(this,this.Js-a)};
g.h.getLastError=function(){return this.lg};g.h=fra.prototype;g.h.Ep=null;g.h.wd=null;g.h.Gn=!1;g.h.Cv=null;g.h.Wl=null;g.h.iq=null;g.h.Fp=null;g.h.Zd=null;g.h.yf=-1;g.h.Fj=null;g.h.jj=null;g.h.connect=function(a){this.Fp=a;a=M6(this.o,null,this.Fp);E6(3);this.Cv=(0,g.A)();var b=this.o.G;null!=b?(this.Fj=b[0],(this.jj=b[1])?(this.Zd=1,gra(this)):(this.Zd=2,O6(this))):(b6(a,"MODE","init"),this.wd=new A6(this,void 0,void 0,void 0),this.wd.Yg=this.Ep,B6(this.wd,a,!1,null,!0),this.Zd=0)};
g.h.WB=function(a){if(a)this.Zd=2,O6(this);else{E6(4);var b=this.o;b.Be=b.Zf.yf;$6(b,9)}a&&this.le(2)};
g.h.bp=function(a){return this.o.bp(a)};
g.h.abort=function(){this.wd&&(this.wd.cancel(),this.wd=null);this.yf=-1};
g.h.Bv=function(){return!1};
g.h.Ey=function(a,b){this.yf=a.Gj;if(0==this.Zd)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.Be=this.yf;$6(c,2);return}this.Fj=c[0];this.jj=c[1]}else c=this.o,c.Be=this.yf,$6(c,2);else if(2==this.Zd)if(this.Gn)E6(7),this.iq=(0,g.A)();else if("11111"==b){if(E6(6),this.Gn=!0,this.Wl=(0,g.A)(),c=this.Wl-this.Cv,!g.Gd||g.kd(10)||500>c)this.yf=200,this.wd.cancel(),E6(12),N6(this.o,this,!0)}else E6(8),this.Wl=this.iq=(0,g.A)(),this.Gn=!1};
g.h.xn=function(){this.yf=this.wd.Gj;if(this.wd.me)0==this.Zd?this.jj?(this.Zd=1,gra(this)):(this.Zd=2,O6(this)):2==this.Zd&&((!g.Gd||g.kd(10)?!this.Gn:200>this.iq-this.Wl)?(E6(11),N6(this.o,this,!1)):(E6(12),N6(this.o,this,!0)));else{0==this.Zd?E6(9):2==this.Zd&&E6(10);var a=this.o;this.wd.getLastError();a.Be=this.yf;$6(a,2)}};
g.h.Ik=function(){return this.o.Ik()};
g.h.isActive=function(){return this.o.isActive()};
g.h.le=function(a){this.o.le(a)};g.Pa(P6,g.rk);var lra=/^https?$/i,Wsa=["POST","PUT"];g.h=P6.prototype;
g.h.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET";this.H=a;this.A="";this.C=0;this.Z=b;this.T=!1;this.w=!0;this.o=this.P?Vqa(this.P):Vqa(S8);this.U=this.P?this.P.getOptions():S8.getOptions();this.o.onreadystatechange=(0,g.x)(this.Dv,this);try{d6(S6(this,"Opening Xhr")),this.da=!0,this.o.open(b,String(a),!0),this.da=!1}catch(f){d6(S6(this,"Error opening Xhr: "+f.message));kra(this,f);return}a=c||
"";var e=this.headers.clone();d&&uqa(d,function(f,k){e.set(k,f)});
d=g.Ua(e.Wd(),ira);c=g.v.FormData&&a instanceof g.v.FormData;!g.Xa(Wsa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.o.setRequestHeader(k,f)},this);
this.aa&&(this.o.responseType=this.aa);"withCredentials"in this.o&&this.o.withCredentials!==this.V&&(this.o.withCredentials=this.V);try{nra(this),0<this.D&&(this.K=hra(this.o),d6(S6(this,"Will abort after "+this.D+"ms if incomplete, xhr2 "+this.K)),this.K?(this.o.timeout=this.D,this.o.ontimeout=(0,g.x)(this.Ev,this)):this.J=g.cl(this.Ev,this.D,this)),d6(S6(this,"Sending request")),this.G=!0,this.o.send(a),this.G=!1}catch(f){d6(S6(this,"Send error: "+f.message)),kra(this,f)}};
g.h.Ev=function(){"undefined"!=typeof g.z_&&this.o&&(this.A="Timed out after "+this.D+"ms, aborting",this.C=8,S6(this,this.A),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.o&&this.w&&(S6(this,"Aborting"),this.w=!1,this.B=!0,this.o.abort(),this.B=!1,this.C=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Q6(this))};
g.h.Y=function(){this.o&&(this.w&&(this.w=!1,this.B=!0,this.o.abort(),this.B=!1),Q6(this,!0));P6.xb.Y.call(this)};
g.h.Dv=function(){this.ha()||(this.da||this.G||this.B?mra(this):this.tK())};
g.h.tK=function(){mra(this)};
g.h.isActive=function(){return!!this.o};
g.h.getStatus=function(){try{return 2<R6(this)?this.o.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return"string"===typeof this.A?this.A:String(this.A)};g.h=U6.prototype;g.h.uj=null;g.h.qd=null;g.h.Qb=null;g.h.Dp=null;g.h.Yl=null;g.h.Yt=null;g.h.om=null;g.h.mk=0;g.h.JH=0;g.h.Oc=null;g.h.gg=null;g.h.kf=null;g.h.Qg=null;g.h.Zf=null;g.h.ho=null;g.h.wi=-1;g.h.iw=-1;g.h.Be=-1;g.h.Vh=0;g.h.Ph=0;g.h.Mg=8;var a7=new g.rk;g.Pa(pra,g.Uj);g.Pa(qra,g.Uj);g.Pa(rra,g.Uj);g.h=U6.prototype;g.h.connect=function(a,b,c,d,e){E6(0);this.Dp=b;this.uj=c||{};d&&void 0!==e&&(this.uj.OSID=d,this.uj.OAID=e);this.C?(J6((0,g.x)(this.tu,this,a),100),vra(this)):this.tu(a)};
g.h.tu=function(a){this.Zf=new fra(this);this.Zf.Ep=null;this.Zf.u=this.B;this.Zf.connect(a)};
g.h.Bv=function(){return 0==this.o};
g.h.Ky=function(a){this.gg=null;yra(this,a)};
g.h.Jy=function(){this.kf=null;this.Qb=new A6(this,this.w,"rpc",this.D);this.Qb.Yg=null;this.Qb.Gp=0;var a=this.Yt.clone();$5(a,"RID","rpc");$5(a,"SID",this.w);$5(a,"CI",this.ho?"0":"1");$5(a,"AID",this.wi);V6(this,a);if(!g.Gd||g.kd(10))$5(a,"TYPE","xmlhttp"),B6(this.Qb,a,!0,this.om,!1);else{$5(a,"TYPE","html");var b=this.Qb,c=!!this.om;b.ii=3;b.Vf=a6(a.clone());bra(b,c)}};
g.h.Ey=function(a,b){if(0!=this.o&&(this.Qb==a||this.qd==a))if(this.Be=a.Gj,this.qd==a&&3==this.o)if(7<this.Mg){try{var c=this.B.parse(b)}catch(f){c=null}if(g.Ha(c)&&3==c.length)if(0==c[0])a:{if(!this.kf){if(this.Qb)if(this.Qb.Ni+3E3<this.qd.Ni)X6(this),this.Qb.cancel(),this.Qb=null;else break a;Z6(this);E6(19)}}else this.iw=c[1],0<this.iw-this.wi&&37500>c[2]&&this.ho&&0==this.Ph&&!this.Qg&&(this.Qg=J6((0,g.x)(this.lI,this),6E3));else $6(this,11)}else b!=Vsa.xO.o&&$6(this,11);else if(this.Qb==a&&
X6(this),!g.tb(b)){c=this.B.parse(b);g.Ha(c);for(var d=0;d<c.length;d++){var e=c[d];this.wi=e[0];e=e[1];2==this.o?"c"==e[0]?(this.w=e[1],this.om=e[2],e=e[3],null!=e?this.Mg=e:this.Mg=6,this.o=3,this.Oc&&this.Oc.nu(),this.Yt=M6(this,this.Ik()?this.om:null,this.Dp),zra(this)):"stop"==e[0]&&$6(this,7):3==this.o&&("stop"==e[0]?$6(this,7):"noop"!=e[0]&&this.Oc&&this.Oc.mu(e),this.Ph=0)}}};
g.h.lI=function(){null!=this.Qg&&(this.Qg=null,this.Qb.cancel(),this.Qb=null,Z6(this),E6(20))};
g.h.xn=function(a){if(this.Qb==a){X6(this);this.Qb=null;var b=2}else if(this.qd==a)this.qd=null,b=1;else return;this.Be=a.Gj;if(0!=this.o)if(a.me)1==b?(b=(0,g.A)()-a.Ni,a7.dispatchEvent(new qra(a7,a.uh?a.uh.length:0,b,this.Vh)),W6(this),this.A.length=0):zra(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Be)){if(d=1==b)this.qd||this.gg||1==this.o||2<=this.Vh?d=!1:(this.gg=J6((0,g.x)(this.Ky,this,a),Ara(this,this.Vh)),this.Vh++,d=!0);d=!(d||2==b&&Z6(this))}if(d)switch(c){case 1:$6(this,
5);break;case 4:$6(this,10);break;case 3:$6(this,6);break;case 7:$6(this,12);break;default:$6(this,2)}}};
g.h.sC=function(a){if(!g.Xa(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.PM=function(a){a?E6(2):(E6(1),Bra(this,8))};
g.h.bp=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new P6;a.V=!1;return a};
g.h.isActive=function(){return!!this.Oc&&this.Oc.isActive(this)};
g.h.le=function(a){a7.dispatchEvent(new rra(a7,a))};
g.h.Ik=function(){return!(!g.Gd||g.kd(10))};
g.h=Cra.prototype;g.h.nu=function(){};
g.h.mu=function(){};
g.h.lu=function(){};
g.h.To=function(){};
g.h.Wu=function(){return{}};
g.h.isActive=function(){return!0};g.h=Dra.prototype;g.h.isEmpty=function(){return g.Ya(this.o)&&g.Ya(this.u)};
g.h.clear=function(){this.o=[];this.u=[]};
g.h.contains=function(a){return g.Xa(this.o,a)||g.Xa(this.u,a)};
g.h.remove=function(a){var b=this.o;var c=(0,g.Sna)(b,a);0<=c?(g.$a(b,c),b=!0):b=!1;return b||g.ab(this.u,a)};
g.h.md=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Pa(b7,g.E);g.h=b7.prototype;g.h.mL=function(){this.Rc=Math.min(3E5,2*this.Rc);this.w();this.u&&this.start()};
g.h.start=function(){var a=this.Rc+15E3*Math.random();g.Ym(this.o,a);this.u=(0,g.A)()+a};
g.h.stop=function(){this.o.stop();this.u=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.Rc=5E3};g.Pa(c7,Cra);g.h=c7.prototype;g.h.subscribe=function(a,b,c){return this.w.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.w.unsubscribe(a,b,c)};
g.h.If=function(a){return this.w.Zg(a)};
g.h.R=function(a,b){return this.w.R.apply(this.w,arguments)};
g.h.dispose=function(){this.bb||(this.bb=!0,g.yi(this.w),Gra(this),g.yi(this.u),this.u=null)};
g.h.ha=function(){return this.bb};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.H="";this.u.stop();this.B=a||null;this.A=b||0;a=this.J+"/test";b=this.J+"/bind";var d=new U6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.K),e=this.o;e&&(e.Oc=null);d.Oc=this;this.o=d;e?this.o.connect(a,b,this.C,e.w,e.wi):c?this.o.connect(a,b,this.C,c.sessionId,c.arrayId):this.o.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.bc(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.D.push(c):d7(this)&&wra(this.o,c)};
g.h.nu=function(){this.u.reset();this.B=null;this.A=0;if(this.D.length){var a=this.D;this.D=[];for(var b=0,c=a.length;b<c;++b)wra(this.o,a[b])}this.R("handlerOpened")};
g.h.lu=function(a){var b=2==a&&401==this.o.Be;4==a||b||this.u.start();this.R("handlerError",a)};
g.h.To=function(a){if(!this.u.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.D.push(d)}};
g.h.Wu=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.G&&(a.ui=""+this.G);this.B&&g.bc(a,this.B);return a};
g.h.mu=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),ura(this.o)):this.R("handlerMessage",new Era(a[0],a[1]))};
g.h.oM=function(){this.u.isActive();var a=this.o,b=0;a.Qb&&b++;a.qd&&b++;0==b&&this.connect(this.B,this.A)};e7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
e7.prototype.w=function(a,b){a(Error("Request error: "+b.status))};
e7.prototype.B=function(a){a(Error("request timed out"))};var Ora=(0,g.A)(),h7=null,k7=Array(50),j7=-1,l7=!1;g.Pa(m7,g.P);m7.prototype.Id=function(){return this.o};
m7.prototype.contains=function(a){return!!m6(this.o,a)};
m7.prototype.get=function(a){return a?n6(this.o,a):null};
m7.prototype.info=function(a){i7(this.D,a)};g.r(n7,g.P);g.h=n7.prototype;g.h.start=function(){!this.o&&isNaN(this.Fa)&&this.JA()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.Fa)||(g.yo(this.Fa),this.Fa=NaN)};
g.h.Y=function(){this.stop();g.P.prototype.Y.call(this)};
g.h.JA=function(){this.Fa=NaN;this.o=g.Bp(f7(this.C,"/pairing/get_screen"),{method:"POST",ub:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.x)(this.uN,this),onError:(0,g.x)(this.tN,this),Md:(0,g.x)(this.vN,this)})};
g.h.uN=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.w;c.name=this.A;this.R("pairingComplete",new h6(c))};
g.h.tN=function(a){this.o=null;a.status&&404==a.status?this.u>=Xsa.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=Xsa[this.u],this.Fa=g.wo((0,g.x)(this.JA,this),a),this.u++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.vN=function(){this.o=null;this.R("pairingFailed",Error("Server not responding"))};
var Xsa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Pa(p7,m7);g.h=p7.prototype;g.h.start=function(){o7(this)&&this.R("screenChange");!g.jy("yt-remote-lounge-token-expiration")&&Sra(this);g.yo(this.u);this.u=g.wo((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){o7(this);Pra(this,a);q7(this,!1);this.R("screenChange");b(a);a.token||Sra(this)};
g.h.remove=function(a,b){var c=o7(this);Rra(this,a)&&(q7(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.co=function(a,b,c,d){var e=o7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,q7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.Y=function(){g.yo(this.u);p7.xb.Y.call(this)};
g.h.kD=function(a){o7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}q7(this,!b);b&&i7(this.D,"Missed "+b+" lounge tokens.")};
g.h.jD=function(a){i7(this.D,"Requesting lounge tokens failed: "+a)};g.r(s7,g.P);g.h=s7.prototype;g.h.start=function(){var a=parseInt(g.jy("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.A)()-144E5<a?0:a)?u7(this):(this.A=(0,g.A)()+3E5,g.iy("yt-remote-fast-check-period",this.A),this.Or())};
g.h.isEmpty=function(){return g.Wb(this.o)};
g.h.update=function(){r7("Updating availability on schedule.");var a=this.C(),b=g.Ib(this.o,function(c,d){return c&&!!n6(a,d)},this);
t7(this,b)};
g.h.Y=function(){g.yo(this.w);this.w=NaN;this.u&&(this.u.abort(),this.u=null);g.P.prototype.Y.call(this)};
g.h.Or=function(){g.yo(this.w);this.w=NaN;this.u&&this.u.abort();var a=Vra(this);if(c6(a)){var b=f7(this.B,"/pairing/get_screen_availability");this.u=g7(this.B,b,{lounge_token:g.Pb(a).join(",")},(0,g.x)(this.PK,this,a),(0,g.x)(this.OK,this))}else t7(this,{}),u7(this)};
g.h.PK=function(a,b){this.u=null;var c=g.Pb(Vra(this));if(g.ob(c,g.Pb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;t7(this,d);u7(this)}else this.Jb("Changing Screen set during request."),this.Or()};
g.h.OK=function(a){this.Jb("Screen availability failed: "+a);this.u=null;u7(this)};
g.h.Jb=function(a){i7("OnlineScreenService",a)};g.Pa(v7,m7);g.h=v7.prototype;g.h.start=function(){this.w.start();this.u.start();this.o.length&&(this.R("screenChange"),this.u.isEmpty()||this.R("onlineScreenChange"))};
g.h.add=function(a,b,c){this.w.add(a,b,c)};
g.h.remove=function(a,b,c){this.w.remove(a,b,c);this.u.update()};
g.h.co=function(a,b,c,d){this.w.contains(a)?this.w.co(a,b,c,d):(a="Updating name of unknown screen: "+a.name,i7(this.D,a),d(Error(a)))};
g.h.Id=function(a){return a?this.o:g.cb(this.o,(0,g.Td)(this.A,function(b){return!this.contains(b)},this))};
g.h.KA=function(){return(0,g.Td)(this.Id(!0),function(a){return!!this.u.o[a.id]},this)};
g.h.LA=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new n7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.yi(f);d(w7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.yi(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.xN=function(a,b,c,d){g.Bp(f7(this.C,"/pairing/get_screen"),{method:"POST",ub:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new h6(f.screen||{});if(!k.name||Zra(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);Zra(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(w7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Md:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.Y=function(){g.yi(this.w);g.yi(this.u);v7.xb.Y.call(this)};
g.h.rD=function(){$ra(this);this.R("screenChange");this.u.update()};
v7.prototype.dispose=v7.prototype.dispose;g.Pa(y7,g.P);g.h=y7.prototype;g.h.zn=function(a){this.w=a;this.R("sessionScreen",this.w)};
g.h.Ld=function(a){this.ha()||(a&&z7(this,""+a),this.w=null,this.R("sessionScreen",null))};
g.h.info=function(a){i7(this.U,a)};
g.h.NA=function(){return null};
g.h.Wr=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){z7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.Y=function(){this.Wr("");y7.xb.Y.call(this)};g.Pa(A7,y7);g.h=A7.prototype;g.h.Vr=function(a){if(this.o){if(this.o==a)return;z7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.C);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.o=a;this.o.addUpdateListener(this.C);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);bsa(this)};
g.h.xi=function(a){this.info("launchWithParams no-op for Cast: "+g.xj(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.x)(function(){this.Ld()},this),(0,g.x)(function(){this.Ld(Error("Failed to stop receiver app."))},this)):this.Ld(Error("Stopping cast device witout session."))};
g.h.Wr=g.Ea;g.h.Y=function(){this.info("disposeInternal");g.yo(this.A);this.A=0;this.o&&(this.o.removeUpdateListener(this.C),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.o=null;A7.xb.Y.call(this)};
g.h.NL=function(a,b){if(!this.ha())if(b){var c=x6(b);if(g.Ka(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.xj(c));switch(d){case "mdxSessionStatus":asa(this,c.screenId);break;default:z7(this,"Unknown youtube message: "+d)}}else z7(this,"Unable to parse message.")}else z7(this,"No data in message.")};
g.h.vv=function(a,b,c,d){Yra(this.H,this.u.label,a,this.u.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(z7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.wo((0,g.x)(this.vv,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.NA=function(){return this.o};
g.h.yN=function(a){this.ha()||a||(z7(this,"Cast session died."),this.Ld())};g.Pa(B7,y7);g.h=B7.prototype;g.h.Vr=function(a){this.A=a;this.A.addUpdateListener(this.K)};
g.h.xi=function(a){this.B=a;this.D()};
g.h.stop=function(){this.o();this.o=g.Ea;g.yo(this.C);this.A?this.A.stop((0,g.x)(this.Ld,this,null),(0,g.x)(this.Ld,this,"Failed to stop DIAL device.")):this.Ld()};
g.h.Y=function(){this.o();this.o=g.Ea;g.yo(this.C);this.A&&this.A.removeUpdateListener(this.K);this.A=null;B7.xb.Y.call(this)};
g.h.BN=function(a){this.ha()||a||(z7(this,"DIAL session died."),this.o(),this.o=g.Ea,this.Ld())};
g.h.Sp=function(a){this.J=l6();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,dsa(this));a(b);csa(this)}else this.D=(0,g.x)(function(){g.yo(this.C);this.D=g.Ea;this.C=NaN;var c=new chrome.cast.DialLaunchResponse(!0,dsa(this));a(c);csa(this)},this),this.C=g.wo((0,g.x)(function(){this.D()},this),100)};
g.h.MD=function(a,b,c){Yra(this.H,this.G.receiver.label,a,this.u.friendlyName,(0,g.x)(function(d){d&&d.token?(this.zn(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Sp(b,c)},this),(0,g.x)(function(d){z7(this,"Failed to get DIAL screen: "+d);
this.Sp(b,c)},this))};g.Pa(C7,y7);C7.prototype.stop=function(){this.Ld()};
C7.prototype.Vr=g.Ea;C7.prototype.xi=function(){g.yo(this.o);this.o=NaN;var a=n6(this.H.Id(),this.u.label);a?this.zn(a):this.Ld(Error("No such screen"))};
C7.prototype.Y=function(){g.yo(this.o);this.o=NaN;C7.xb.Y.call(this)};g.Pa(D7,g.P);g.h=D7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.D);this.G||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.yK,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.Gy,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.LI,this);chrome.cast.initialize(c,(0,g.x)(function(){this.ha()||
(chrome.cast.addReceiverActionListener(this.A),Lra(),this.u.subscribe("onlineScreenChange",(0,g.x)(this.MA,this)),this.w=fsa(this),chrome.cast.setCustomReceivers(this.w,g.Ea,(0,g.x)(function(k){this.Jb("Failed to set initial custom receivers: "+g.xj(k))},this)),this.R("yt-remote-cast2-availability-change",F7(this)),b(!0))},this),(0,g.x)(function(k){this.Jb("Failed to initialize API: "+g.xj(k));
b(!1)},this))};
g.h.wM=function(a,b){E7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.w;if(!a||c&&c.id!=a)E7("Unsetting old screen status: "+this.o.u.friendlyName),G7(this,null)}if(a&&b){if(!this.o){c=n6(this.u.Id(),a);if(!c){E7("setConnectedScreenStatus: Unknown screen.");return}var d=esa(this,c);d||(E7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.w.push(d),chrome.cast.setCustomReceivers(this.w,
g.Ea,(0,g.x)(function(e){this.Jb("Failed to set initial custom receivers: "+g.xj(e))},this)));
E7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);G7(this,new C7(this.u,d),!0)}this.o.Wr(b)}else E7("setConnectedScreenStatus: no screen.")};
g.h.xM=function(a){this.ha()?this.Jb("Setting connection data on disposed cast v2"):this.o?this.o.xi(a):this.Jb("Setting connection data without a session")};
g.h.AN=function(){this.ha()?this.Jb("Stopping session on disposed cast v2"):this.o?(this.o.stop(),G7(this,null)):E7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.Gy,this),(0,g.x)(this.VK,this))};
g.h.Y=function(){this.u.unsubscribe("onlineScreenChange",(0,g.x)(this.MA,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.A);var a=Ira,b=g.w("yt.mdx.remote.debug.handlers_");g.ab(b||[],a);g.yi(this.o);D7.xb.Y.call(this)};
g.h.Jb=function(a){i7("Controller",a)};
g.h.Hy=function(a,b){this.o==a&&(b||G7(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.uK=function(a,b){if(!this.ha())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),E7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.u.label!=a.label)E7("onReceiverAction_: Stopping active receiver: "+this.o.u.friendlyName),this.o.stop();else{E7("onReceiverAction_: Casting to active receiver.");this.o.w&&this.R("yt-remote-cast2-session-change",this.o.w);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:G7(this,
new C7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:G7(this,new B7(this.u,a,this.C));break;case chrome.cast.ReceiverType.CAST:G7(this,new A7(this.u,a));break;default:this.Jb("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.u.label==a.label?this.o.stop():this.Jb("Stopping receiver w/o session: "+a.friendlyName)}else this.Jb("onReceiverAction_ called without receiver.")};
g.h.LI=function(a){if(this.ha())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Jb("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.u:null;if(!c||c.label!=b.label)return this.Jb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.w)return E7("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.o.w),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Jb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);G7(this,new B7(this.u,b,this.C))}b=this.o;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.MD,b,(b.G.extraData||{}).screenId||null)):new Promise((0,g.x)(b.Sp,b))};
g.h.Gy=function(a){if(!this.ha()){E7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)E7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),G7(this,new A7(this.u,b),!0);else{this.Jb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.u,d=n6(this.u.Id(),c.label);d&&i6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(E7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.yi(this.o),this.o=new A7(this.u,b),this.o.subscribe("sessionScreen",(0,g.x)(this.Hy,this,this.o)),this.o.xi(null));this.o.Vr(a)}}};
g.h.zN=function(){return this.o?this.o.NA():null};
g.h.VK=function(a){this.ha()||(this.Jb("Failed to estabilish a session: "+g.xj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&G7(this,null))};
g.h.yK=function(a){E7("Receiver availability updated: "+a);if(!this.ha()){var b=F7(this);this.B=a==chrome.cast.ReceiverAvailability.AVAILABLE;F7(this)!=b&&this.R("yt-remote-cast2-availability-change",F7(this))}};
g.h.MA=function(){this.ha()||(this.w=fsa(this),E7("Updating custom receivers: "+g.xj(this.w)),chrome.cast.setCustomReceivers(this.w,g.Ea,(0,g.x)(function(){this.Jb("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",F7(this)))};
D7.prototype.setLaunchParams=D7.prototype.xM;D7.prototype.setConnectedScreenStatus=D7.prototype.wM;D7.prototype.stopSession=D7.prototype.AN;D7.prototype.getCastSession=D7.prototype.zN;D7.prototype.requestSession=D7.prototype.requestSession;D7.prototype.init=D7.prototype.init;D7.prototype.dispose=D7.prototype.dispose;var M7=[];R7.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";S7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.Ce=a.hasPrevious,this.hasNext=a.hasNext,this.D=a.playerTime,this.C=a.playerTimeAt,this.A=a.seekableStart,this.u=a.seekableEnd,this.G=a.duration,this.H=a.loadedTime,this.w=a.liveIngestionTime,this.B=
!isNaN(this.w))};
R7.prototype.isAdPlaying=function(){return 1081==this.playerState};
R7.prototype.getDuration=function(){return this.B?this.G+T7(this):this.G};
R7.prototype.clone=function(){return new R7(X7(this))};g.r(Z7,g.P);g.h=Z7.prototype;g.h.play=function(){1==this.o?(this.u?this.u.play(null,g.Ea,e8(this,"play")):d8(this,"play"),c8(this,1,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.play)};
g.h.pause=function(){1==this.o?(this.u?this.u.pause(null,g.Ea,e8(this,"pause")):d8(this,"pause"),c8(this,2,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.o){if(this.u){var b=$7(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Ea,e8(this,"seekTo",{newTime:a}))}else d8(this,"seekTo",{newTime:a});c8(this,3,a);this.R("remotePlayerChange")}else a8(this,g.Na(this.seekTo,a))};
g.h.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.Ea,e8(this,"stopVideo")):d8(this,"stopVideo");var a=$7(this);a.index=-1;a.videoId="";S7(a);b8(this,a);this.R("remotePlayerChange")}else a8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=$7(this);if(this.w){if(c.volume!=a){var d=Math.round(a)/100;this.w.setReceiverVolumeLevel(d,(0,g.x)(function(){i7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.Jb("failed to set receiver volume.")},this))}c.muted!=b&&this.w.setReceiverMuted(b,(0,g.x)(function(){i7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.Jb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);d8(this,"setVolume",e)}c.muted=b;c.volume=a;b8(this,c)}else a8(this,g.Na(this.setVolume,a,b))};
g.h.Jz=function(a,b){if(1==this.o){var c=$7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.xj(b.style),g.bc(d,c.o));d8(this,"setSubtitlesTrack",d);b8(this,c)}else a8(this,g.Na(this.Jz,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();d8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=$7(this);d.audioTrackId=c;b8(this,d)}else a8(this,g.Na(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=$7(this);c=c||0;var m={videoId:a,currentIndex:c};W7(l,a,c);void 0!==b&&(U7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.xj(k));d8(this,"setPlaylist",m);d||b8(this,l)};
g.h.IA=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"previous")}else a8(this,g.Na(this.IA,a,b))};
g.h.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"next")}else a8(this,g.Na(this.nextVideo,a,b))};
g.h.Au=function(){1==this.o?d8(this,"dismissAutoplay"):a8(this,this.Au)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.R("proxyStateChange",a,this.o)}g.P.prototype.dispose.call(this)};
g.h.Y=function(){ssa(this);this.A=null;this.B.clear();Y7(this,null);g.P.prototype.Y.call(this)};
g.h.Ms=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,g.Ya(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.h.rK=function(a,b){this.R(a,b)};
g.h.rI=function(a){if(!a)this.qk(null),Y7(this,null);else if(this.w.receiver.volume){a=this.w.receiver.volume;var b=$7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)i7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,b8(this,b)}};
g.h.qk=function(a){i7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.G);if(this.u=a)this.u.addUpdateListener(this.G),tsa(this),this.R("remotePlayerChange")};
g.h.qI=function(a){a?(tsa(this),this.R("remotePlayerChange")):this.qk(null)};
g.h.DI=function(){var a=psa();a&&Y7(this,a)};
g.h.Jb=function(a){i7("CP",a)};g.r(f8,g.P);g.h=f8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==k&&(l.currentIndex=k);c&&(this.Qa.listId=c);this.Qa.videoId=d;this.Qa.index=k||0;this.Qa.state=3;U7(this.Qa,m);this.A="UNSUPPORTED";g8("Connecting with setPlaylist and params: "+g.xj(l));this.o.connect({method:"setPlaylist",
params:g.xj(l)},a,Gqa())}else g8("Connecting without params"),this.o.connect({},a,Gqa());vsa(this)};
g.h.dispose=function(){this.ha()||(this.R("beforeDispose"),h8(this,3));g.P.prototype.dispose.call(this)};
g.h.Y=function(){i8(this);k8(this);j8(this);g.yo(this.D);this.D=NaN;g.yo(this.G);this.G=NaN;this.w=null;g.Zq(this.U);this.U.length=0;this.o.dispose();g.P.prototype.Y.call(this);this.A=this.C=this.u=this.Qa=this.o=null};
g.h.dD=function(){this.Th(2)};
g.h.vI=function(){g8("Channel opened");this.K&&(this.K=!1,j8(this),this.J=g.wo((0,g.x)(function(){g8("Timing out waiting for a screen.");this.Th(1)},this),15E3));
Kqa(Fra(this.o),this.P)};
g.h.sI=function(){g8("Channel closed");isNaN(this.B)?s6(!0):s6();this.dispose()};
g.h.tI=function(a){s6();isNaN(this.Aj())?(g8("Channel error: "+a+" without reconnection"),this.dispose()):(this.K=!0,g8("Channel error: "+a+" with reconnection in "+this.Aj()+" ms"),h8(this,2))};
g.h.uI=function(a){a.params?g8("Received: action="+a.action+", params="+g.xj(a.params)):g8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=x6(a.params.devices);this.u=(0,g.ee)(a,function(c){return new g6(c)});
a=!!g.Ua(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
ysa(this,a);break;case "loungeScreenDisconnected":g.bb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
ysa(this,!1);break;case "remoteConnected":var b=new g6(x6(a.params.device));g.Ua(this.u,function(c){return b?c.id==b.id:!1})||qqa(this.u,b);
break;case "remoteDisconnected":b=new g6(x6(a.params.device));g.bb(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":Asa(this,a);break;case "nowPlaying":Csa(this,a);break;case "onStateChange":Bsa(this,a);break;case "onAdStateChange":Dsa(this,a);break;case "onVolumeChanged":Esa(this,a);break;case "onSubtitlesTrackChanged":zsa(this,a);break;case "nowAutoplaying":Fsa(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.C=a.params.videoId||null;this.R("autoplayUpNext",this.C);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.R("autoplayModeChange",this.A);"DISABLED"==this.A&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":Gsa(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:g8("Unrecognized action: "+a.action)}};
g.h.lM=function(){if(this.w){var a=this.w;this.w=null;this.Qa.videoId!=a&&l8(this,"getNowPlaying")}};
g.h.SC=function(){var a=3;this.ha()||(a=0,isNaN(this.Aj())?d7(this.o)&&isNaN(this.B)&&(a=1):a=2);return a};
g.h.Th=function(a){g8("Disconnecting with "+a);i8(this);this.R("beforeDisconnect",a);1==a&&s6();Gra(this.o,a);this.dispose()};
g.h.RC=function(){var a=this.Qa;this.w&&(a=this.Qa.clone(),W7(a,this.w,a.index));return X7(a)};
g.h.yM=function(a){var b=new R7(a);b.videoId&&b.videoId!=this.Qa.videoId&&(this.w=b.videoId,g.yo(this.D),this.D=g.wo((0,g.x)(this.lM,this),5E3));var c=[];this.Qa.listId==b.listId&&this.Qa.videoId==b.videoId&&this.Qa.index==b.index||c.push("remoteQueueChange");this.Qa.playerState==b.playerState&&this.Qa.volume==b.volume&&this.Qa.muted==b.muted&&V7(this.Qa)==V7(b)&&g.xj(this.Qa.o)==g.xj(b.o)||c.push("remotePlayerChange");this.Qa.reset(a);(0,g.z)(c,function(d){this.R(d)},this)};
g.h.qv=function(){var a=this.o.C.id,b=g.Ua(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.Aj=function(){var a=this.o;return a.u.isActive()?a.u.u-(0,g.A)():NaN};
g.h.GC=function(){return this.A||"UNSUPPORTED"};
g.h.HC=function(){return this.C||""};
g.h.sN=function(){if(!isNaN(this.Aj())){var a=this.o.u;g.Zm(a.o);a.start()}};
g.h.tM=function(a,b){l8(this,a,b);xsa(this)};
f8.prototype.subscribe=f8.prototype.subscribe;f8.prototype.unsubscribeByKey=f8.prototype.If;f8.prototype.getProxyState=f8.prototype.SC;f8.prototype.disconnect=f8.prototype.Th;f8.prototype.getPlayerContextData=f8.prototype.RC;f8.prototype.setPlayerContextData=f8.prototype.yM;f8.prototype.getOtherConnectedRemoteId=f8.prototype.qv;f8.prototype.getReconnectTimeout=f8.prototype.Aj;f8.prototype.getAutoplayMode=f8.prototype.GC;f8.prototype.getAutoplayVideoId=f8.prototype.HC;f8.prototype.reconnect=f8.prototype.sN;
f8.prototype.sendMessage=f8.prototype.tM;g.r(m8,m7);g.h=m8.prototype;g.h.Id=function(a){return this.Qc.$_gs(a)};
g.h.contains=function(a){return!!this.Qc.$_c(a)};
g.h.get=function(a){return this.Qc.$_g(a)};
g.h.start=function(){this.Qc.$_st()};
g.h.add=function(a,b,c){this.Qc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Qc.$_r(a,b,c)};
g.h.co=function(a,b,c,d){this.Qc.$_un(a,b,c,d)};
g.h.Y=function(){for(var a=0,b=this.u.length;a<b;++a)this.Qc.$_ubk(this.u[a]);this.u.length=0;this.Qc=null;m7.prototype.Y.call(this)};
g.h.wN=function(){this.R("screenChange")};
g.h.VJ=function(){this.R("onlineScreenChange")};
v7.prototype.$_st=v7.prototype.start;v7.prototype.$_gspc=v7.prototype.xN;v7.prototype.$_gsppc=v7.prototype.LA;v7.prototype.$_c=v7.prototype.contains;v7.prototype.$_g=v7.prototype.get;v7.prototype.$_a=v7.prototype.add;v7.prototype.$_un=v7.prototype.co;v7.prototype.$_r=v7.prototype.remove;v7.prototype.$_gs=v7.prototype.Id;v7.prototype.$_gos=v7.prototype.KA;v7.prototype.$_s=v7.prototype.subscribe;v7.prototype.$_ubk=v7.prototype.If;var F8=null,E8=!1,n8=null,o8=null,D8=null,s8=[];g.r(G8,g.E);g.h=G8.prototype;
g.h.Y=function(){g.E.prototype.Y.call(this);this.A.stop();this.C.stop();this.K.stop();this.T();this.o.unsubscribe("proxyStateChange",this.Dy,this);this.o.unsubscribe("remotePlayerChange",this.tk,this);this.o.unsubscribe("remoteQueueChange",this.An,this);this.o.unsubscribe("autoplayUpNext",this.dy,this);this.o.unsubscribe("previousNextChange",this.Ay,this);this.o.unsubscribe("nowAutoplaying",this.vy,this);this.o.unsubscribe("autoplayDismissed",this.by,this);this.o=this.B=null};
g.h.Yw=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(J8(this)){if(!$7(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==$7(this.o).playerState?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.J.nm(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.u.getCurrentTime();L8(this,0==c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,c)}};
g.h.pI=function(a){this.K.ZC(a)};
g.h.ZM=function(a){this.Yw("control_subtitles_set_track",g.Wb(a)?null:a)};
g.h.Vz=function(){var a=this.u.getOption("captions","track");g.Wb(a)||K8(this,a)};
g.h.oy=function(a){if(J8(this)){this.o.unsubscribe("remotePlayerChange",this.tk,this);var b=Math.round(a.volume);a=!!a.muted;var c=$7(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.U.start();this.o.subscribe("remotePlayerChange",this.tk,this)}};
g.h.qJ=function(){g.Wb(this.D)||Ssa(this,this.D);this.G=!1};
g.h.Dy=function(a,b){this.C.stop();2==b&&this.Uz()};
g.h.tk=function(){if(J8(this)){this.A.stop();var a=$7(this.o);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.H=1;break;case 1082:case 1083:this.B.H=0;break;default:this.B.H=-1}switch(a.playerState){case 1081:case 1:I8(this,new g.It(8));this.Tz();break;case 1085:case 3:I8(this,new g.It(9));break;case 1083:case 0:I8(this,new g.It(2));this.J.stop();H8(this,this.u.getVideoData().lengthSeconds);break;case 1084:I8(this,new g.It(4));break;case 2:I8(this,new g.It(4));H8(this,V7(a));
break;case -1:I8(this,new g.It(64));break;case -1E3:I8(this,new g.It(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=$7(this.o).o;var b=this.D;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.D=a,Ssa(this,a));a=$7(this.o);-1==a.volume||Math.round(this.u.getVolume())==a.volume&&this.u.isMuted()==a.muted||this.U.isActive()||this.xA()}else Rsa(this)};
g.h.Ay=function(){this.u.R("mdxpreviousnextchange")};
g.h.An=function(){J8(this)||Rsa(this)};
g.h.VB=function(){this.o.Au()};
g.h.dy=function(){};
g.h.vy=function(a){isNaN(a)||this.u.R("mdxnowautoplaying",a)};
g.h.by=function(){this.u.R("mdxautoplaycanceled")};
g.h.HF=function(a,b){-1==$7(this.o).playerState?L8(this,a):b&&this.o.seekTo(a)};
g.h.xA=function(){if(J8(this)){var a=$7(this.o);this.w.Ta(this.P);a.muted?this.u.mute():this.u.unMute();this.u.setVolume(a.volume);this.P=this.w.M(this.u,"onVolumeChange",this.oy)}};
g.h.Tz=function(){this.A.stop();if(!this.o.ha()){var a=$7(this.o);1==a.playerState&&I8(this,new g.It(8));H8(this,V7(a));this.A.start()}};
g.h.Uz=function(){this.C.stop();this.A.stop();var a=this.o.A.getReconnectTimeout();2==this.o.o&&!isNaN(a)&&this.C.start()};g.r(M8,g.W);M8.prototype.A=function(){e6("mdx-privacy-popup-cancel");this.w.hide()};
M8.prototype.C=function(){e6("mdx-privacy-popup-confirm");this.w.hide()};g.r(N8,g.W);N8.prototype.B=function(a){Usa(this,a.state)};g.r(O8,g.bP);O8.prototype.K=function(){var a=this.w.getOption("remote","receivers");a&&1<a.length&&!this.w.getOption("remote","quickCast")?(this.D=g.qb(a,this.C,this),g.dP(this,(0,g.ee)(a,this.C)),a=this.w.getOption("remote","currentReceiver"),this.ce(this.C(a)),this.enable(!0)):this.enable(!1)};
O8.prototype.C=function(a){return a.key};
O8.prototype.je=function(a){return"cast-selector-receiver"==a?"Cast...":this.D[a].name};
O8.prototype.Ic=function(a){g.bP.prototype.Ic.call(this,a);this.w.setOption("remote","currentReceiver",this.D[a]);this.A.ib()};g.r(P8,g.kQ);g.h=P8.prototype;
g.h.create=function(){Lsa(g.cz(this.player.O()));this.A.push(g.Do("yt-remote-before-disconnect",this.mI,this));this.A.push(g.Do("yt-remote-connection-change",this.zK,this));this.A.push(g.Do("yt-remote-receiver-availability-change",this.By,this));this.A.push(g.Do("yt-remote-auto-connect",this.xK,this));this.A.push(g.Do("yt-remote-receiver-resumed",this.wK,this));this.A.push(g.Do("mdx-privacy-popup-confirm",this.bM,this));this.A.push(g.Do("mdx-privacy-popup-cancel",this.aM,this));this.By()};
g.h.load=function(){this.player.cancelPlayback();g.kQ.prototype.load.call(this);this.B=new G8(this,this.player,this.o);var a=(a=Qsa())?a.currentTime:0;var b=C8()?new Z7(x8(),void 0):null;0==a&&b&&(a=V7($7(b)));0!=a&&(this.U=a||0,this.player.R("progresssync",a,void 0));Tsa(this,this.D,this.D);g.FT(this.player.app,6)};
g.h.unload=function(){this.player.R("mdxautoplaycanceled");this.w=this.u;g.zi(this.B,this.o);this.o=this.B=null;g.kQ.prototype.unload.call(this);g.FT(this.player.app,5);Q8(this)};
g.h.Y=function(){g.Eo(this.A);g.kQ.prototype.Y.call(this)};
g.h.ck=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.Yw.apply(this.B,[a].concat(g.ea(c)))};
g.h.getAdState=function(){return this.H};
g.h.UC=function(){return this.loaded?this.B.suggestion:null};
g.h.Ce=function(){return this.o?$7(this.o).Ce:!1};
g.h.hasNext=function(){return this.o?$7(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.U};
g.h.getProgressState=function(){var a=$7(this.o),b=this.player.getVideoData();return{allowSeeking:g.R(this.player.O().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.lc():!a.isAdPlaying()&&this.player.lc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.B?a.w+T7(a):a.w,isAtLiveHead:1>=(a.B?a.u+T7(a):a.u)-this.getCurrentTime(),loaded:a.H,seekableEnd:a.B?a.u+T7(a):a.u,seekableStart:0<a.A?a.A+T7(a):
a.A}};
g.h.nextVideo=function(){this.o&&this.o.nextVideo()};
g.h.vF=function(){this.o&&this.o.IA()};
g.h.mI=function(a){1==a&&(this.P=this.o?$7(this.o):null)};
g.h.zK=function(){var a=C8()?new Z7(x8(),void 0):null;if(a){var b=this.w;this.loaded&&this.unload();this.o=a;this.P=null;b.key!=this.u.key&&(this.w=b,this.load())}else g.yi(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.P)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,V7(a)));this.player.R("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.By=function(){this.J=[this.u].concat(Nsa());var a=y8()||this.u;R8(this,a);this.player.la("onMdxReceiversChange")};
g.h.SL=function(a){!this.K&&g.BD(a,8)&&(this.player.pauseVideo(),Q8(this))};
g.h.xK=function(){var a=y8();R8(this,a)};
g.h.wK=function(){this.w=y8()};
g.h.bM=function(){this.K=!0;Q8(this);E8=!1;F8&&A8(F8,1);F8=null};
g.h.aM=function(){this.K=!1;Q8(this);R8(this,this.u);this.w=this.u;E8=!1;F8=null;this.player.playVideo()};
g.h.wc=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.J;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?P7():R8(this,b)),this.loaded?this.w:this.u;case "quickCast":return 2==this.J.length&&"cast-selector-receiver"==this.J[1].key?(b&&P7(),!0):!1}};
g.h.wF=function(){d8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Ve=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.zQ.remote=P8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 02:08:52 Nov 03, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:47:51 May 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.356
  load_resource: 492.69
  LoadShardBlock: 159.402 (3)
  CDXLines.iter: 207.996 (3)
  PetaboxLoader3.resolve: 258.111 (2)
  captures_list: 2007.376
  RedisCDXSource: 1.621
  exclusion.robots.policy: 0.33
  PetaboxLoader3.datanode: 307.248 (4)
  esindex: 0.049
*/