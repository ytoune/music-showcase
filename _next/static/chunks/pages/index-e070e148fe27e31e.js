(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7933)}])},7933:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Fn}});var t,o=r(7997),u=r(1720),i=r(6515),a=r(1173),c=r(8510),l=r(9127),f=new i.X(0),s=function(n){return f.next(n)},d=Number("u">("undefined"===typeof localStorage?"undefined":(t=localStorage)&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t)&&localStorage.getItem("my:cursor"))||0,p=f.pipe((0,a.R)((function(n,e){return n+e}),d),(0,c.d)(1)),v=f.pipe((0,l.U)((function(n){return!n})),(0,c.d)(1));s(1),s(-1);var m=new(r(2649).x),y=function(n){m.next(n)},b=m.pipe((0,c.d)(1)),h=r(282),w=function(){var n=(0,u.useRef)(null),e=(0,u.useCallback)((function(){null!=n.current&&n.current.click()}),[]),r=(0,u.useCallback)((function(n){n.target.files&&Array.from(n.target.files).map(y)}),[]);return(0,o.BX)(o.HY,{children:[(0,o.tZ)(h.Z,{onClick:e,variant:"outlined",children:"upload zip file"}),(0,o.tZ)("input",{type:"file",ref:n,style:{display:"none"},onChange:r})]})},g=r(4978),x=r(6174),k=r(8520),O=r.n(k),Z=r(5733),E=r(983);function A(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=[],t=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(t=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);t=!0);}catch(c){o=!0,u=c}finally{try{t||null==a.return||a.return()}finally{if(o)throw u}}return r}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S="RESET",P="ADD",j="DONE",C=new i.X(S),T=function(n){return C.next(n)},I=C.pipe((0,a.R)((function(n,e){var r=A(n,2),t=r[0],o=r[1];switch(e){case S:return[t-o,0];case P:return[t,o+1];case j:return[t+1,o];default:return[t,o]}}),[0,0]),(0,l.U)((function(n){var e=A(n,2),r=e[0],t=e[1];return{done:Math.max(0,r),total:t,progress:t?Math.max(0,r)/t:0}})),(0,c.d)(1));function N(n,e,r,t,o,u,i){try{var a=n[u](i),c=a.value}catch(l){return void r(l)}a.done?e(c):Promise.resolve(c).then(t,o)}function _(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function R(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){_(n,e,r[e])}))}return n}var U,D=(U=O().mark((function n(e){var t,o,u,i;return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return T(P),T(P),n.next=4,Promise.all([r.e(463),r.e(726)]).then(r.bind(r,2463));case 4:return t=n.sent.parseBlob,o=e.name,n.next=8,e.async("blob");case 8:return u=n.sent,T(j),n.next=12,t(u);case 12:return i=n.sent,T(j),n.abrupt("return",R({name:o},i,{blob:u}));case 15:case"end":return n.stop()}}),n)})),function(){var n=this,e=arguments;return new Promise((function(r,t){var o=U.apply(n,e);function u(n){N(o,r,t,u,i,"next",n)}function i(n){N(o,r,t,u,i,"throw",n)}u(void 0)}))}),L=function(n){return n.trim().split(/\r?\n/giu).map((function(n){return n.trim()})).filter(Boolean).map((function(n){var e,r,t,o=n.split(/\t/giu).map((function(n){return n.trim()}));return{filename:null===(e=o[0])||void 0===e?void 0:e.trim(),start:null===(r=o[1])||void 0===r?void 0:r.trim(),end:null===(t=o[2])||void 0===t?void 0:t.trim()}}))};function B(n,e,r,t,o,u,i){try{var a=n[u](i),c=a.value}catch(l){return void r(l)}a.done?e(c):Promise.resolve(c).then(t,o)}function M(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function X(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){M(n,e,r[e])}))}return n}function z(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},u=Object.keys(n);for(t=0;t<u.length;t++)r=u[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(t=0;t<u.length;t++)r=u[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function F(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=[],t=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(t=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);t=!0);}catch(c){o=!0,u=c}finally{try{t||null==a.return||a.return()}finally{if(o)throw u}}return r}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var H=function(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var u=n.apply(e,r);function i(n){B(u,t,o,i,a,"next",n)}function a(n){B(u,t,o,i,a,"throw",n)}i(void 0)}))}}(O().mark((function n(e){var r;return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return T(P),n.t0=L,n.next=4,e.async("text");case 4:return n.t1=n.sent,r=(0,n.t0)(n.t1).map(q).filter($).reduce(J,{}),T(j),n.abrupt("return",Y(r));case 8:case"end":return n.stop()}}),n)}))),Y=function(n){return function(e){return e.map((function(e){var r=e.name,t=z(e,["name"]);return X({name:r,preview:n[r]||{}},t)}))}},$=function(n){return!!n.filename&&Number.isFinite(n.start)&&Number.isFinite(n.end)},q=function(n){var e=n.filename,r=n.start,t=n.end;return{filename:e,start:G(r),end:G(t)}},G=function(n){if(n){var e=/^(\d+):(\d+)(\.\d+|)$/.exec(n);if(e){var r=F(e.slice(1).map(K),3);return 60*r[0]+r[1]+r[2]}}},J=function(n,e){return X({},n,M({},e.filename,{start:e.start,end:e.end}))},K=function(n){return Number(n)||0};function Q(n,e,r,t,o,u,i){try{var a=n[u](i),c=a.value}catch(l){return void r(l)}a.done?e(c):Promise.resolve(c).then(t,o)}function V(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=[],t=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(t=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);t=!0);}catch(c){o=!0,u=c}finally{try{t||null==a.return||a.return()}finally{if(o)throw u}}return r}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function W(n){return function(n){if(Array.isArray(n)){for(var e=0,r=new Array(n.length);e<n.length;e++)r[e]=n[e];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var nn=function(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var u=n.apply(e,r);function i(n){Q(u,t,o,i,a,"next",n)}function a(n){Q(u,t,o,i,a,"throw",n)}i(void 0)}))}}(O().mark((function n(e){var r;return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.dir){n.next=2;break}return n.abrupt("return",[0,null]);case 2:if(n.prev=2,!(r=(0,E.lookup)(e.name))||"audio/"!==r.slice(0,6)){n.next=11;break}return n.t0=en,n.next=8,D(e);case 8:return n.t1=n.sent,n.t2=(0,n.t0)(n.t1),n.abrupt("return",[1,n.t2]);case 11:if("text/tab-separated-values"!==r){n.next=16;break}return n.next=14,H(e);case 14:return n.t3=n.sent,n.abrupt("return",[9,n.t3]);case 16:return n.abrupt("return",[0,null]);case 19:if(n.prev=19,n.t4=n.catch(2),!/(^|\/)\./.test(e.name)){n.next=23;break}return n.abrupt("return",[0,null]);case 23:throw n.t4;case 24:case"end":return n.stop()}}),n,null,[[2,19]])}))),en=function(n){return function(e){return W(e).concat([n])}},rn=function(n,e){var r=V(e,2),t=(r[0],r[1]);return"function"===typeof t?t(n):n},tn=function(n,e){return V(n,1)[0]-V(e,1)[0]};function on(n,e,r,t,o,u,i){try{var a=n[u](i),c=a.value}catch(l){return void r(l)}a.done?e(c):Promise.resolve(c).then(t,o)}var un=function(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var u=n.apply(e,r);function i(n){on(u,t,o,i,a,"next",n)}function a(n){on(u,t,o,i,a,"throw",n)}i(void 0)}))}}(O().mark((function n(e){var t,o,u;return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return T(S),T(P),n.next=4,r.e(456).then(r.t.bind(r,5456,23));case 4:return t=n.sent.convert,n.next=7,(0,Z.loadAsync)(e,{decodeFileName:function(n){return t(n,{to:"UNICODE",from:"AUTO",type:"string"})}});case 7:return o=n.sent,T(j),u=[],o.forEach((function(n,e){return u.push(e)})),n.next=13,Promise.all(u.map(nn));case 13:return n.abrupt("return",n.sent.sort(tn).reduce(rn,[]));case 14:case"end":return n.stop()}}),n)})));function an(n,e,r,t,o,u,i){try{var a=n[u](i),c=a.value}catch(l){return void r(l)}a.done?e(c):Promise.resolve(c).then(t,o)}function cn(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var ln="files",fn=function(){function n(e,r){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.open=e,this.key=r}var e,r,t;return e=n,(r=[{key:"read",value:function(){var n=this;return sn(this.open,"readonly",(function(e){var r=n;return new Promise((function(n,t){var o=e.get(r.key);o.onerror=t,o.onsuccess=function(){var e;n(null===(e=o.result)||void 0===e?void 0:e.val)}}))}))}},{key:"write",value:function(n){var e=this;return sn(this.open,"readwrite",(function(r){return new Promise((function(t,o){var u=r.put({ssn:e.key,val:n});u.onerror=o,u.onsuccess=function(){t(u.result)}}))}))}}])&&cn(e.prototype,r),t&&cn(e,t),n}(),sn=function(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var u=n.apply(e,r);function i(n){an(u,t,o,i,a,"next",n)}function a(n){an(u,t,o,i,a,"throw",n)}i(void 0)}))}}(O().mark((function n(e,r,t){var o,u;return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:return o=n.sent,n.prev=3,u=o.transaction([ln],r).objectStore(ln),n.next=7,t(u);case 7:return n.abrupt("return",n.sent);case 8:return n.prev=8,o.close(),n.finish(8);case 11:case"end":return n.stop()}}),n,null,[[3,,8,11]])}))),dn=r(2817),pn=r(9293),vn=new fn((function(){return new Promise((function(n,e){try{var r=indexedDB.open("app",1);r.onerror=e,r.onupgradeneeded=function(n){n.target.result.createObjectStore(ln,{keyPath:"ssn"})},r.onsuccess=function(e){var r=e.target.result;n(r)}}catch(t){e(t)}}))}),"files"),mn=new pn.y((function(n){var e=!0;return vn.read().catch((function(n){console.error(n)})).then((function(r){r&&e&&(n.next(r),setTimeout(yn,10)),n.complete()})),{unsubscribe:function(){e=!1}}})),yn=function(){var n=document.body,e=document.createElement("div");e.style.position="fixed",e.style.top="0",e.style.bottom="0",e.style.right="0",e.style.left="0",e.style.zIndex="99999999",e.addEventListener("click",(function(){var r;n.removeChild(e),null===(r=n.querySelector("audio"))||void 0===r||r.play()})),n.appendChild(e)},bn="LOAD_CACHE",hn=b.pipe((0,g.w)(un),(0,l.U)((function(n){return n.slice().sort((function(n,e){return n.name.localeCompare(e.name,[],{numeric:!0})}))})),(0,x.O)(bn),(0,g.w)((function(n){return bn===n?mn:function(n){return vn.write(n).catch((function(n){console.error(n)})),(0,dn.of)(n)}(n)})),(0,c.d)(1)),wn=function(n){var e=n.start,r=n.end,t=n.src,i=n.onEnded,a=(0,u.useRef)(null);(0,u.useEffect)((function(){var n=v.subscribe((function(n){return n&&void(null!=a.current&&(a.current.currentTime=0))})),e=Number(localStorage.getItem("my:volume"));return a.current&&e&&(a.current.volume=e),function(){return n.unsubscribe()}}),[]);var c=(0,u.useCallback)((function(n){var t=n.target,o=n.target.currentTime,u="number"===typeof e?e:0;switch(!0){case"number"!==typeof o:case"number"===typeof r&&r<u:return;case o<u:case r&&r<=o:return void(t.currentTime=u)}}),[e,r]),l=(0,u.useCallback)((function(){return i((function(){null!=a.current&&a.current.play()}))}),[i]);return(0,o.tZ)("audio",{src:t,ref:a,controls:!0,autoPlay:!0,onEnded:l,onTimeUpdate:c})},gn=r(9895),xn=r(385),kn=r(2456),On=r(2822),Zn=r(7476);function En(n){return function(n){if(Array.isArray(n)){for(var e=0,r=new Array(n.length);e<n.length;e++)r[e]=n[e];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var An=(0,Zn.Z)({root:{textAlign:"center",padding:"80px 30px"}})(gn.Z),Sn=function(n){var e,r=n.files;if(!r.length)return(0,o.BX)(An,{children:["\u4e0b\u306e\u30dc\u30bf\u30f3\u304b\u3089",(0,o.tZ)("br",{}),"mp3 \u3092 zip \u3067",(0,o.tZ)("br",{}),"\u307e\u3068\u3081\u3066\u3042\u3052\u3066\u304f\u3060\u3055\u3044\u3002",(0,o.tZ)("br",{}),(0,o.tZ)("a",{href:"https://github.com/ytoune/music-showcase/blob/master/README.md",target:"_blank",rel:"noopener noreferrer",children:"\u4f7f\u3044\u65b9"})]});var t=r.map((function(n,e){var r=n.name,t=n.common,u=t.artists,i=t.title;return(0,o.tZ)(xn.Z,{button:!0,onClick:function(){return s(e)},selected:!e,children:(0,o.tZ)(kn.Z,{primary:i||r,secondary:u&&u.join(", ")})},r)}));return(e=t).unshift.apply(e,En(t.splice(-1))),(0,o.tZ)(On.Z,{children:t})},Pn=function(n){var e=n.show,r=n.children;return(0,o.tZ)(o.HY,{children:e?r:null})},jn=r(4489),Cn=r(3457),Tn=r(143),In={"@global":{body:{margin:0,padding:0,"& #screen":{"&::after":{display:"block",content:'""',overflow:"hidden",clear:"both"},margin:0,padding:0,"& > *":{width:"100%"},"& main":{position:"fixed",overflow:"hidden",left:10,right:10,top:30,bottom:30,zIndex:"1"},"& header, & footer":{position:"fixed",left:0,right:0,margin:"0 auto",textAlign:"center",zIndex:"10"},"& header":{top:0},"& footer":{bottom:0,padding:"5px 20px 10px"}}}}},Nn=(0,Tn.Z)({}),_n=(0,Tn.Z)({palette:{type:"dark"},overrides:{MuiListItem:{root:{"&$selected":{color:"#ffffff",background:"#7986CB"}}},MuiPaper:{root:{"&.main":{position:"absolute",top:0,bottom:0,left:0,right:0}}}}}),Rn=function(n,e){var r=(0,u.useState)(e),t=r[0],o=r[1];return(0,u.useEffect)((function(){var e=n.subscribe(o);return function(){e.unsubscribe()}}),[]),t};function Un(n){return function(n){if(Array.isArray(n)){for(var e=0,r=new Array(n.length);e<n.length;e++)r[e]=n[e];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Dn=function(n){switch(n.key){case"ArrowUp":s(-1);break;case"ArrowDown":s(1);break;case"ArrowRight":case"ArrowLeft":case" ":case"Enter":s(0);break;case"Escape":s(1),s(-1)}},Ln=function(){var n=Rn(hn,[]),e=Rn(p,0);return(0,u.useEffect)((function(){return document.body.addEventListener("keydown",Dn),function(){document.body.removeEventListener("keydown",Dn)}}),[]),(0,u.useMemo)((function(){var r=n.length,t=r?e%r:0;return"u">("undefined"===typeof localStorage?"undefined":function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n}(localStorage))&&localStorage.setItem("my:cursor",String(1+t)),Un(n.slice(t)).concat(Un(n.slice(0,t)))}),[n,e])},Bn=function(){return Rn(I,{})},Mn=function(){return Rn(v,!1)},Xn=function(){return s(-1)},zn=function(){return s(1)},Fn=(0,Zn.Z)(In)((function(){var n=Ln(),e=Mn(),r=Bn(),t=r.total,i=void 0===t?0:t,a=r.progress,c=void 0===a?0:a,l=function(n){var e=(0,u.useMemo)((function(){return n[0]||{}}),[n]),r=e.blob,t=e.preview,o=void 0===t?{}:t,i=o.start,a=void 0===i?0:i,c=o.end,l=void 0===c?0:c,f=(0,u.useRef)({url:""});return{url:(0,u.useMemo)((function(){return f.current.url&&URL.revokeObjectURL(f.current.url),r?f.current.url=URL.createObjectURL(r):""}),[r]),start:a,end:l}}(n),f=l.url,d=l.start,p=l.end,v=(0,u.useCallback)((function(n){return e?n():s(1)}),[e]);return(0,o.tZ)("div",{children:(0,o.tZ)(Cn.Z,{theme:e&&f?_n:Nn,children:(0,o.BX)(gn.Z,{className:"main",children:[(0,o.BX)("header",{children:[(0,o.tZ)(Pn,{show:!!i&&c<1,children:(0,o.tZ)(jn.Z,{variant:"determinate",value:Math.floor(100*c)})}),(0,o.tZ)(Pn,{show:!!f,children:(0,o.tZ)(wn,{src:f,start:!e&&d,end:!e&&p,onEnded:v})})]}),(0,o.tZ)("main",{children:(0,o.tZ)(Sn,{files:n})}),(0,o.BX)("footer",{children:[(0,o.tZ)(h.Z,{onClick:Xn,variant:"outlined",children:"up"}),(0,o.tZ)(h.Z,{onClick:zn,variant:"outlined",children:"down"}),(0,o.tZ)(w,{})]})]})})})}))}},function(n){n.O(0,[144,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);