"use strict";(self.webpackChunkhugiris_nft=self.webpackChunkhugiris_nft||[]).push([[483],{8575:function(t,s,h){var e=h(52511),a=h(62502);function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}s.parse=b,s.resolve=function(t,s){return b(t,!1,!0).resolve(s)},s.resolveObject=function(t,s){return t?b(t,!1,!0).resolveObject(s):s},s.format=function(t){return a.isString(t)&&(t=b(t)),t instanceof r?t.format():r.prototype.format.call(t)},s.Url=r;var n=/^([a-z0-9.+-]+:)/i,o=/:[0-9]*$/,i=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=(s=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),["'"].concat(s)),p=["%","/","?",";","#"].concat(l),u=["/","?","#"],c=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=h(17673);function b(t,s,h){if(t&&a.isObject(t)&&t instanceof r)return t;var e=new r;return e.parse(t,s,h),e}r.prototype.parse=function(t,s,h){if(!a.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var r=-1!==(r=t.indexOf("?"))&&r<t.indexOf("#")?"?":"#",o=t.split(r);o[0]=o[0].replace(/\\/g,"/");var b,O=(O=t=o.join(r)).trim();if(!h&&1===t.split("#").length&&(o=i.exec(O)))return this.path=O,this.href=O,this.pathname=o[1],o[2]?(this.search=o[2],this.query=s?y.parse(this.search.substr(1)):this.search.substr(1)):s&&(this.search="",this.query={}),this;if((r=n.exec(O))&&(b=(r=r[0]).toLowerCase(),this.protocol=b,O=O.substr(r.length)),(h||r||O.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!($="//"===O.substr(0,2))||r&&g[r]||(O=O.substr(2),this.slashes=!0)),!g[r]&&($||r&&!v[r])){for(var j=-1,d=0;d<u.length;d++)-1!==(q=O.indexOf(u[d]))&&(-1===j||q<j)&&(j=q);-1!==(t=-1===j?O.lastIndexOf("@"):O.lastIndexOf("@",j))&&(o=O.slice(0,t),O=O.slice(t+1),this.auth=decodeURIComponent(o));var q;for(j=-1,d=0;d<p.length;d++)-1!==(q=O.indexOf(p[d]))&&(-1===j||q<j)&&(j=q);if(-1===j&&(j=O.length),this.host=O.slice(0,j),O=O.slice(j),this.parseHost(),this.hostname=this.hostname||"",!(h="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1]))for(var x=this.hostname.split(/\./),A=(d=0,x.length);d<A;d++){var C=x[d];if(C&&!C.match(c)){for(var k="",w=0,I=C.length;w<I;w++)127<C.charCodeAt(w)?k+="x":k+=C[w];if(!k.match(c)){var N=x.slice(0,d),U=x.slice(d+1),S=C.match(f);S&&(N.push(S[1]),U.unshift(S[2])),U.length&&(O="/"+U.join(".")+O),this.hostname=N.join(".");break}}}255<this.hostname.length?this.hostname="":this.hostname=this.hostname.toLowerCase(),h||(this.hostname=e.toASCII(this.hostname));var R=this.port?":"+this.port:"",$=this.hostname||"";this.host=$+R,this.href+=this.host,h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==O[0]&&(O="/"+O))}if(!m[b])for(d=0,A=l.length;d<A;d++){var _,z=l[d];-1!==O.indexOf(z)&&((_=encodeURIComponent(z))===z&&(_=escape(z)),O=O.split(z).join(_))}return-1!==(r=O.indexOf("#"))&&(this.hash=O.substr(r),O=O.slice(0,r)),-1!==(t=O.indexOf("?"))?(this.search=O.substr(t),this.query=O.substr(t+1),s&&(this.query=y.parse(this.query)),O=O.slice(0,t)):s&&(this.search="",this.query={}),O&&(this.pathname=O),v[b]&&this.hostname&&!this.pathname&&(this.pathname="/"),(this.pathname||this.search)&&(R=this.pathname||"",o=this.search||"",this.path=R+o),this.href=this.format(),this},r.prototype.format=function(){var t=((n=this.auth||"")&&(n=(n=encodeURIComponent(n)).replace(/%3A/i,":"),n+="@"),this.protocol||""),s=this.pathname||"",h=this.hash||"",e=!1,r="",n=(this.host?e=n+this.host:this.hostname&&(e=n+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(e+=":"+this.port)),this.query&&a.isObject(this.query)&&Object.keys(this.query).length&&(r=y.stringify(this.query)),this.search||r&&"?"+r||"");return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||v[t])&&!1!==e?(e="//"+(e||""),s&&"/"!==s.charAt(0)&&(s="/"+s)):e=e||"",h&&"#"!==h.charAt(0)&&(h="#"+h),n&&"?"!==n.charAt(0)&&(n="?"+n),t+e+(s=s.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(n=n.replace("#","%23"))+h},r.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},r.prototype.resolveObject=function(t){a.isString(t)&&((m=new r).parse(t,!1,!0),t=m);for(var s=new r,h=Object.keys(this),e=0;e<h.length;e++){var n=h[e];s[n]=this[n]}if(s.hash=t.hash,""===t.href)return s.href=s.format(),s;if(t.slashes&&!t.protocol){for(var o=Object.keys(t),i=0;i<o.length;i++){var l=o[i];"protocol"!==l&&(s[l]=t[l])}return v[s.protocol]&&s.hostname&&!s.pathname&&(s.path=s.pathname="/"),s.href=s.format(),s}if(t.protocol&&t.protocol!==s.protocol){if(!v[t.protocol]){for(var p=Object.keys(t),u=0;u<p.length;u++){var c=p[u];s[c]=t[c]}return s.href=s.format(),s}if(s.protocol=t.protocol,t.host||g[t.protocol])s.pathname=t.pathname;else{for(var f=(t.pathname||"").split("/");f.length&&!(t.host=f.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==f[0]&&f.unshift(""),f.length<2&&f.unshift(""),s.pathname=f.join("/")}return s.search=t.search,s.query=t.query,s.host=t.host||"",s.auth=t.auth,s.hostname=t.hostname||t.host,s.port=t.port,(s.pathname||s.search)&&(m=s.pathname||"",d=s.search||"",s.path=m+d),s.slashes=s.slashes||t.slashes,s.href=s.format(),s}var m=s.pathname&&"/"===s.pathname.charAt(0),y=m=(d=t.host||t.pathname&&"/"===t.pathname.charAt(0))||m||s.host&&t.pathname,b=s.pathname&&s.pathname.split("/")||[],O=(f=t.pathname&&t.pathname.split("/")||[],s.protocol&&!v[s.protocol]);if(O&&(s.hostname="",s.port=null,s.host&&(""===b[0]?b[0]=s.host:b.unshift(s.host)),s.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===f[0]?f[0]=t.host:f.unshift(t.host)),t.host=null),m=m&&(""===f[0]||""===b[0])),d)s.host=(t.host||""===t.host?t:s).host,s.hostname=(t.hostname||""===t.hostname?t:s).hostname,s.search=t.search,s.query=t.query,b=f;else if(f.length)(b=b||[]).pop(),b=b.concat(f),s.search=t.search,s.query=t.query;else if(!a.isNullOrUndefined(t.search))return O&&(s.hostname=s.host=b.shift(),(A=!!(s.host&&0<s.host.indexOf("@"))&&s.host.split("@"))&&(s.auth=A.shift(),s.host=s.hostname=A.shift())),s.search=t.search,s.query=t.query,a.isNull(s.pathname)&&a.isNull(s.search)||(s.path=(s.pathname||"")+(s.search||"")),s.href=s.format(),s;if(!b.length)return s.pathname=null,s.search?s.path="/"+s.search:s.path=null,s.href=s.format(),s;for(var j=b.slice(-1)[0],d=(s.host||t.host||1<b.length)&&("."===j||".."===j)||""===j,q=0,x=b.length;0<=x;x--)"."===(j=b[x])?b.splice(x,1):".."===j?(b.splice(x,1),q++):q&&(b.splice(x,1),q--);if(!m&&!y)for(;q--;)b.unshift("..");!m||""===b[0]||b[0]&&"/"===b[0].charAt(0)||b.unshift(""),d&&"/"!==b.join("/").substr(-1)&&b.push("");var A;y=""===b[0]||b[0]&&"/"===b[0].charAt(0);return O&&(s.hostname=s.host=!y&&b.length?b.shift():"",(A=!!(s.host&&0<s.host.indexOf("@"))&&s.host.split("@"))&&(s.auth=A.shift(),s.host=s.hostname=A.shift())),(m=m||s.host&&b.length)&&!y&&b.unshift(""),b.length?s.pathname=b.join("/"):(s.pathname=null,s.path=null),a.isNull(s.pathname)&&a.isNull(s.search)||(s.path=(s.pathname||"")+(s.search||"")),s.auth=t.auth||s.auth,s.slashes=s.slashes||t.slashes,s.href=s.format(),s},r.prototype.parseHost=function(){var t=this.host,s=o.exec(t);s&&(":"!==(s=s[0])&&(this.port=s.substr(1)),t=t.substr(0,t.length-s.length)),t&&(this.hostname=t)}},62502:function(t){t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}}}]);