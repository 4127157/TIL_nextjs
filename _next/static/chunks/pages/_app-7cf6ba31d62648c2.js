(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9069)}])},227:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDomainLocale=function(t,e,n,r){return!1},("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},1551:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(2648).Z,a=n(7273).Z,o=r(n(7294)),i=n(1003),u=n(7795),l=n(4465),s=n(2692),d=n(8245),c=n(9246),f=n(227),h=n(3468);let m=new Set;function g(t,e,n,r){if(i.isLocalURL(e)){if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in t?t.locale:void 0,o=e+"%"+n+"%"+a;if(m.has(o))return;m.add(o)}Promise.resolve(t.prefetch(e,n,r)).catch(t=>{})}}function v(t){return"string"==typeof t?t:u.formatUrl(t)}let p=o.default.forwardRef(function(t,e){let n,r;let{href:u,as:m,children:p,prefetch:w,passHref:y,replace:b,shallow:C,scroll:x,locale:T,onClick:k,onMouseEnter:D,onTouchStart:M,legacyBehavior:_=!1}=t,N=a(t,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=p,_&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let S=!1!==w,j=o.default.useContext(s.RouterContext),U=o.default.useContext(d.AppRouterContext),P=null!=j?j:U,E=!j,{href:W,as:L}=o.default.useMemo(()=>{if(!j){let t=v(u);return{href:t,as:m?v(m):t}}let[e,n]=i.resolveHref(j,u,!0);return{href:e,as:m?i.resolveHref(j,m):n||e}},[j,u,m]),O=o.default.useRef(W),Y=o.default.useRef(L);_&&(r=o.default.Children.only(n));let F=_?r&&"object"==typeof r&&r.ref:e,[H,q,B]=c.useIntersection({rootMargin:"200px"}),z=o.default.useCallback(t=>{(Y.current!==L||O.current!==W)&&(B(),Y.current=L,O.current=W),H(t),F&&("function"==typeof F?F(t):"object"==typeof F&&(F.current=t))},[L,F,W,B,H]);o.default.useEffect(()=>{P&&q&&S&&g(P,W,L,{locale:T})},[L,W,q,T,S,null==j?void 0:j.locale,P]);let A={ref:z,onClick(t){_||"function"!=typeof k||k(t),_&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),P&&!t.defaultPrevented&&function(t,e,n,r,a,u,l,s,d,c){let{nodeName:f}=t.currentTarget,h="A"===f.toUpperCase();if(h&&(function(t){let{target:e}=t.currentTarget;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)||!i.isLocalURL(n)))return;t.preventDefault();let m=()=>{"beforePopState"in e?e[a?"replace":"push"](n,r,{shallow:u,locale:s,scroll:l}):e[a?"replace":"push"](r||n,{forceOptimisticNavigation:!c})};d?o.default.startTransition(m):m()}(t,P,W,L,b,C,x,T,E,S)},onMouseEnter(t){_||"function"!=typeof D||D(t),_&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),P&&(S||!E)&&g(P,W,L,{locale:T,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(t){_||"function"!=typeof M||M(t),_&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(t),P&&(S||!E)&&g(P,W,L,{locale:T,priority:!0,bypassPrefetchedCheck:!0})}};if(!_||y||"a"===r.type&&!("href"in r.props)){let R=void 0!==T?T:null==j?void 0:j.locale,I=(null==j?void 0:j.isLocaleDomain)&&f.getDomainLocale(L,R,null==j?void 0:j.locales,null==j?void 0:j.domainLocales);A.href=I||h.addBasePath(l.addLocale(L,R,null==j?void 0:j.defaultLocale))}return _?o.default.cloneElement(r,A):o.default.createElement("a",Object.assign({},N,A),n)});e.default=p,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},9246:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){let{rootRef:e,rootMargin:n,disabled:l}=t,s=l||!o,[d,c]=r.useState(!1),[f,h]=r.useState(null);r.useEffect(()=>{if(o){if(!s&&!d&&f&&f.tagName){let t=function(t,e,n){let{id:r,observer:a,elements:o}=function(t){let e;let n={root:t.root||null,margin:t.rootMargin||""},r=u.find(t=>t.root===n.root&&t.margin===n.margin);if(r&&(e=i.get(r)))return e;let a=new Map,o=new IntersectionObserver(t=>{t.forEach(t=>{let e=a.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)})},t);return e={id:n,observer:o,elements:a},u.push(n),i.set(n,e),e}(n);return o.set(t,e),a.observe(t),function(){if(o.delete(t),a.unobserve(t),0===o.size){a.disconnect(),i.delete(r);let e=u.findIndex(t=>t.root===r.root&&t.margin===r.margin);e>-1&&u.splice(e,1)}}}(f,t=>t&&c(t),{root:null==e?void 0:e.current,rootMargin:n});return t}}else if(!d){let r=a.requestIdleCallback(()=>c(!0));return()=>a.cancelIdleCallback(r)}},[f,s,n,e,d]);let m=r.useCallback(()=>{c(!1)},[]);return[h,d,m]};var r=n(7294),a=n(4686);let o="function"==typeof IntersectionObserver,i=new Map,u=[];("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},9069:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return tT}});var r,a=n(5893);n(4222);var o=n(273),i=n.n(o),u=n(1733),l=n.n(u);function s(t,e){if(e.length<t)throw TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t){s(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===c(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):(("string"==typeof t||"[object String]"===e)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function h(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function m(t){s(1,arguments);var e=f(t),n=e.getUTCDay();return e.setUTCDate(e.getUTCDate()-((n<1?7:0)+n-1)),e.setUTCHours(0,0,0,0),e}function g(t){s(1,arguments);var e=f(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=m(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=m(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}var v={};function p(t,e){s(1,arguments);var n,r,a,o,i,u,l,d,c=h(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e?void 0:null===(i=e.locale)||void 0===i?void 0:null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:v.weekStartsOn)&&void 0!==r?r:null===(l=v.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0);if(!(c>=0&&c<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=f(t),g=m.getUTCDay();return m.setUTCDate(m.getUTCDate()-((g<c?7:0)+g-c)),m.setUTCHours(0,0,0,0),m}function w(t,e){s(1,arguments);var n,r,a,o,i,u,l,d,c=f(t),m=c.getUTCFullYear(),g=h(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e?void 0:null===(i=e.locale)||void 0===i?void 0:null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:v.firstWeekContainsDate)&&void 0!==r?r:null===(l=v.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1);if(!(g>=1&&g<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(m+1,0,g),w.setUTCHours(0,0,0,0);var y=p(w,e),b=new Date(0);b.setUTCFullYear(m,0,g),b.setUTCHours(0,0,0,0);var C=p(b,e);return c.getTime()>=y.getTime()?m+1:c.getTime()>=C.getTime()?m:m-1}function y(t,e){for(var n=Math.abs(t).toString();n.length<e;)n="0"+n;return(t<0?"-":"")+n}var b={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return y("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):y(n+1,2)},d:function(t,e){return y(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return y(t.getUTCHours()%12||12,e.length)},H:function(t,e){return y(t.getUTCHours(),e.length)},m:function(t,e){return y(t.getUTCMinutes(),e.length)},s:function(t,e){return y(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length;return y(Math.floor(t.getUTCMilliseconds()*Math.pow(10,n-3)),e.length)}},C={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};function x(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+(e||"")+y(o,2)}function T(t,e){return t%60==0?(t>0?"-":"+")+y(Math.abs(t)/60,2):k(t,e)}function k(t,e){var n=Math.abs(t);return(t>0?"-":"+")+y(Math.floor(n/60),2)+(e||"")+y(n%60,2)}var D={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear();return n.ordinalNumber(r>0?r:1-r,{unit:"year"})}return b.y(t,e)},Y:function(t,e,n,r){var a=w(t,r),o=a>0?a:1-a;return"YY"===e?y(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):y(o,e.length)},R:function(t,e){return y(g(t),e.length)},u:function(t,e){return y(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return b.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){s(1,arguments);var n=f(t);return Math.round((p(n,e).getTime()-(function(t,e){s(1,arguments);var n,r,a,o,i,u,l,d,c=h(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e?void 0:null===(i=e.locale)||void 0===i?void 0:null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:v.firstWeekContainsDate)&&void 0!==r?r:null===(l=v.locale)||void 0===l?void 0:null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1),f=w(t,e),m=new Date(0);return m.setUTCFullYear(f,0,c),m.setUTCHours(0,0,0,0),p(m,e)})(n,e).getTime())/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):y(a,e.length)},I:function(t,e,n){var r=function(t){s(1,arguments);var e=f(t);return Math.round((m(e).getTime()-(function(t){s(1,arguments);var e=g(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),m(n)})(e).getTime())/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):y(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):b.d(t,e)},D:function(t,e,n){var r=function(t){s(1,arguments);var e=f(t),n=e.getTime();return e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0),Math.floor((n-e.getTime())/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):y(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return y(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return y(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return y(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?C.noon:0===a?C.midnight:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?C.evening:a>=12?C.afternoon:a>=4?C.morning:C.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):b.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):y(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return(0===r&&(r=24),"ko"===e)?n.ordinalNumber(r,{unit:"hour"}):y(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):b.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):b.s(t,e)},S:function(t,e){return b.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return T(a);case"XXXX":case"XX":return k(a);default:return k(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return T(a);case"xxxx":case"xx":return k(a);default:return k(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+x(a,":");default:return"GMT"+k(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+x(a,":");default:return"GMT"+k(a,":")}},t:function(t,e,n,r){return y(Math.floor((r._originalDate||t).getTime()/1e3),e.length)},T:function(t,e,n,r){return y((r._originalDate||t).getTime(),e.length)}},M=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},_=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},N={p:_,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return M(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",M(a,e)).replace("{{time}}",_(o,e))}},S=["D","DD"],j=["YY","YYYY"];function U(t,e,n){if("YYYY"===t)throw RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var P={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function E(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var W={date:E({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:E({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:E({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},L={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function O(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function Y(t){return function(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.width,o=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(o);if(!i)return null;var u=i[0],l=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(l)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(l,function(t){return t.test(u)}):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(l,function(t){return t.test(u)});return n=t.valueCallback?t.valueCallback(s):s,{value:n=r.valueCallback?r.valueCallback(n):n,rest:e.slice(u.length)}}}var F={code:"en-US",formatDistance:function(t,e,n){var r,a=P[t];return(r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:W,formatRelative:function(t,e,n,r){return L[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:O({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:O({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:O({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:O({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:O({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(r={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(r.matchPattern);if(!n)return null;var a=n[0],o=t.match(r.parsePattern);if(!o)return null;var i=r.valueCallback?r.valueCallback(o[0]):o[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(a.length)}}),era:Y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},H=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,B=/^'([^]*?)'?$/,z=/''/g,A=/[a-zA-Z]/,R={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},I=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Q=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,G=/^([+-])(\d{2})(?::?(\d{2}))?$/;function X(t){return t?parseInt(t):1}function Z(t){return t&&parseFloat(t.replace(",","."))||0}var J=[31,null,31,30,31,30,31,31,30,31,30,31];function $(t){return t%400==0||t%4==0&&t%100!=0}var K=n(1540),V=n.n(K),tt=n(7294),te={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let tn=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tr=(t,e)=>{let n=(0,tt.forwardRef)(({color:n="currentColor",size:r=24,strokeWidth:a=2,children:o,...i},u)=>(0,tt.createElement)("svg",{ref:u,...te,width:r,height:r,stroke:n,strokeWidth:a,className:`lucide lucide-${tn(t)}`,...i},[...e.map(([t,e])=>(0,tt.createElement)(t,e)),...(Array.isArray(o)?o:[o])||[]]));return n.displayName=`${t}`,n},ta=tr("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),to=tr("Moon",[["path",{d:"M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"1rit1i"}]]),ti=(0,tt.createContext)({theme:"",setTheme(){}}),tu=()=>{let{theme:t,setTheme:e}=(0,tt.useContext)(ti),[n,r]=(0,tt.useState)("".concat(V().Switch)),o=()=>{"dark"===t?(e("light"),window.localStorage.setItem("theme","light")):"light"===t&&(e("dark"),window.localStorage.setItem("theme","dark"))};return(0,tt.useMemo)(()=>{"dark"===t?r("".concat(V().Switch)):"light"===t&&r("".concat(n," ").concat(V().dark))},[t]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{className:n,onClick:o,"aria-hidden":!0,children:(0,a.jsx)("div",{className:V().iconContainer,children:"dark"===t?(0,a.jsx)(ta,{color:"#FAFAFA",strokeWidth:2}):(0,a.jsx)(to,{color:"#212121",strokeWidth:2})})})})};function tl(t){let{title:e,date:n}=t,{theme:r}=(0,tt.useContext)(ti),o="dark"===r?l().headerClass:"".concat(l().headerClass," ").concat(l().light),i=function(t,e,n){s(2,arguments);var r,a,o,i,u,l,c,m,g,p,w,y,b,C,x,T,k,M,_,P=String(e),E=null!==(a=null!==(o=null==n?void 0:n.locale)&&void 0!==o?o:v.locale)&&void 0!==a?a:F,W=h(null!==(i=null!==(u=null!==(l=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n?void 0:null===(m=n.locale)||void 0===m?void 0:null===(g=m.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==l?l:v.firstWeekContainsDate)&&void 0!==u?u:null===(p=v.locale)||void 0===p?void 0:null===(w=p.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==i?i:1);if(!(W>=1&&W<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var L=h(null!==(y=null!==(b=null!==(C=null!==(x=null==n?void 0:n.weekStartsOn)&&void 0!==x?x:null==n?void 0:null===(T=n.locale)||void 0===T?void 0:null===(k=T.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==C?C:v.weekStartsOn)&&void 0!==b?b:null===(M=v.locale)||void 0===M?void 0:null===(_=M.options)||void 0===_?void 0:_.weekStartsOn)&&void 0!==y?y:0);if(!(L>=0&&L<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw RangeError("locale must contain localize property");if(!E.formatLong)throw RangeError("locale must contain formatLong property");var O=f(t);if(!function(t){return s(1,arguments),(!!function(t){return s(1,arguments),t instanceof Date||"object"===d(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)||"number"==typeof t)&&!isNaN(Number(f(t)))}(O))throw RangeError("Invalid time value");var Y=((r=new Date(Date.UTC(O.getFullYear(),O.getMonth(),O.getDate(),O.getHours(),O.getMinutes(),O.getSeconds(),O.getMilliseconds()))).setUTCFullYear(O.getFullYear()),O.getTime()-r.getTime()),R=function(t,e){return s(2,arguments),function(t,e){s(2,arguments);var n=f(t).getTime(),r=h(e);return new Date(n+r)}(t,-h(e))}(O,Y),I={firstWeekContainsDate:W,weekStartsOn:L,locale:E,_originalDate:O};return P.match(q).map(function(t){var e=t[0];return"p"===e||"P"===e?(0,N[e])(t,E.formatLong):t}).join("").match(H).map(function(r){if("''"===r)return"'";var a,o=r[0];if("'"===o)return(a=r.match(B))?a[1].replace(z,"'"):r;var i=D[o];if(i)return null!=n&&n.useAdditionalWeekYearTokens||-1===j.indexOf(r)||U(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||-1===S.indexOf(r)||U(r,e,String(t)),i(R,r,E.localize,I);if(o.match(A))throw RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r}).join("")}(function(t,e){s(1,arguments);var n,r,a,o=h(null!==(n=null==e?void 0:e.additionalDigits)&&void 0!==n?n:2);if(2!==o&&1!==o&&0!==o)throw RangeError("additionalDigits must be 0, 1 or 2");if(!("string"==typeof t||"[object String]"===Object.prototype.toString.call(t)))return new Date(NaN);var i=function(t){var e,n={},r=t.split(R.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],R.timeZoneDelimiter.test(n.date)&&(n.date=t.split(R.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=R.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}(t);if(i.date){var u=function(t,e){var n=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:t.slice((r[1]||r[2]).length)}}(i.date,o);r=function(t,e){if(null===e)return new Date(NaN);var n,r,a=t.match(I);if(!a)return new Date(NaN);var o=!!a[4],i=X(a[1]),u=X(a[2])-1,l=X(a[3]),s=X(a[4]),d=X(a[5])-1;if(o)return s>=1&&s<=53&&d>=0&&d<=6?((n=new Date(0)).setUTCFullYear(e,0,4),r=n.getUTCDay()||7,n.setUTCDate(n.getUTCDate()+((s-1)*7+d+1-r)),n):new Date(NaN);var c=new Date(0);return u>=0&&u<=11&&l>=1&&l<=(J[u]||($(e)?29:28))&&i>=1&&i<=($(e)?366:365)?(c.setUTCFullYear(e,u,Math.max(i,l)),c):new Date(NaN)}(u.restDateString,u.year)}if(!r||isNaN(r.getTime()))return new Date(NaN);var l=r.getTime(),d=0;if(i.time&&isNaN(d=function(t){var e=t.match(Q);if(!e)return NaN;var n=Z(e[1]),r=Z(e[2]),a=Z(e[3]);return(24===n?0===r&&0===a:a>=0&&a<60&&r>=0&&r<60&&n>=0&&n<25)?36e5*n+6e4*r+1e3*a:NaN}(i.time)))return new Date(NaN);if(i.timezone){if(isNaN(a=function(t){if("Z"===t)return 0;var e=t.match(G);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return a>=0&&a<=59?n*(36e5*r+6e4*a):NaN}(i.timezone)))return new Date(NaN)}else{var c=new Date(l+d),f=new Date(0);return f.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),f.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),f}return new Date(l+d+a)}(n),"MMMM d, yyyy");return(0,a.jsxs)("header",{className:o,children:[(0,a.jsxs)("div",{className:l().metaData,children:[(0,a.jsxs)("h1",{children:["TIL - ",e]}),(0,a.jsxs)("span",{className:l().dateClass,children:["Published: ",(0,a.jsx)("time",{dateTime:n,lang:"en",children:i})]})]}),(0,a.jsx)("div",{className:l().themeBtnContainer,"aria-hidden":!0,children:(0,a.jsx)(tu,{})})]})}var ts=n(4250),td=n.n(ts);function tc(){var t;let e;let n=(0,tt.createRef)(),r=(0,tt.createRef)(),{theme:o}=(0,tt.useContext)(ti),i="dark"===o?td().footer:"".concat(td().footer," ").concat(td().Light),u="dark"===o?td().LinksDark:"",l=t=>{var e;let a=t.target,o=r.current,i=n.current;if(null===(e=a.firstChild)||void 0===e?void 0:e.textContent){let u=o.firstChild.textContent,l=i.firstChild.textContent;navigator.clipboard.writeText(u).then(()=>{o.firstChild.textContent="Copied!",i.firstChild.textContent=" ✅",setTimeout(()=>{o.firstChild.textContent=u,i.firstChild.textContent=l},1e3)},()=>{alert("Clipboard write failed, copy text manually")})}},s=(t=t=>l(t),e=0,function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];let o=new Date().getTime();o-e>=1500&&(e=o,t.apply(this,r))});return(0,a.jsxs)("footer",{className:i,children:[(0,a.jsxs)("ul",{className:td().List,children:[(0,a.jsxs)("li",{children:["Github: ",(0,a.jsx)("a",{target:"_blank",href:"https://github.com/4127157",className:u,children:"github.com/4127157"})]}),(0,a.jsxs)("li",{children:["Discord: ",(0,a.jsx)("span",{className:td().DiscordUsername,onClick:s,children:(0,a.jsxs)("span",{ref:r,children:["4127157#0448",(0,a.jsx)("span",{ref:n,className:td().Emoji,children:" \uD83D\uDCCB"})]})})]}),(0,a.jsxs)("li",{children:["Website: ",(0,a.jsx)("a",{target:"_blank",href:"https://malviya.dev/",className:u,children:"malviya.dev"})]})]}),(0,a.jsx)("span",{children:"Aryansh Malviya \xa9 2022"})]})}var tf=n(9103),th=n.n(tf),tm=n(1664),tg=n.n(tm),tv=n(9827),tp=n.n(tv);let tw=t=>{let{align:e,to:n,text:r}=t,{theme:o}=(0,tt.useContext)(ti),i=tp().navButton;return"light"===o&&(i="".concat(tp().navButton," ").concat(tp().Light)),"right"===e&&(i="".concat(tp().navButton," ").concat(tp().textAligner),"light"===o&&(i="".concat(tp().navButton," ").concat(tp().textAligner," ").concat(tp().Light))),(0,a.jsx)(tg(),{className:i,href:n,passHref:!0,children:r})},ty=t=>{let{prev:e,next:n}=t;return void 0!==e&&void 0!==n?(0,a.jsx)("section",{className:th().sectionClass,children:(0,a.jsx)("div",{className:th().interactionContainer,children:(0,a.jsxs)("div",{className:th().buttonContainer,children:[""==e?(0,a.jsx)(tw,{align:"left",to:"/",text:"Home"}):(0,a.jsx)(tw,{align:"left",to:e,text:"Previous"}),""==n?(0,a.jsx)(tw,{align:"right",to:"/",text:"Home"}):(0,a.jsx)(tw,{align:"right",to:n,text:"Next"})]})})}):(0,a.jsx)(a.Fragment,{})};function tb(t){let{children:e,prevLink:n,nextLink:r,pageTitle:o,postDate:u}=t,[l,s]=(0,tt.useState)("dark");(0,tt.useEffect)(()=>{let t;return s("dark"===(t=window.localStorage.getItem("theme"))||"light"===t?t:"dark")},[]);let d="dark"===l?i().mainContent:"".concat(i().mainContent," ").concat(i().Light);return(0,a.jsx)("div",{className:d,children:(0,a.jsxs)(ti.Provider,{value:{theme:l,setTheme:s},children:[(0,a.jsx)(tl,{title:o,date:u}),(0,a.jsx)("main",{className:i().articleContent,children:e}),(0,a.jsx)(ty,{prev:n,next:r}),(0,a.jsx)(tc,{})]})})}var tC=n(9008),tx=n.n(tC);function tT(t){var e,n;let{Component:r,pageProps:o}=t,{prevLink:i,nextLink:u}=o;if((null===(e=o.postData)||void 0===e?void 0:e.title)&&(null===(n=o.postData)||void 0===n?void 0:n.date)){let{title:l,date:s}=o.postData;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(tx(),{children:(0,a.jsx)("title",{children:l})}),(0,a.jsx)(tb,{prevLink:i,nextLink:u,pageTitle:l,postDate:s,children:(0,a.jsx)(r,{...o})})]})}}},4250:function(t){t.exports={footer:"Footer_footer__pJUho",Light:"Footer_Light__4S7AE",LinksDark:"Footer_LinksDark__PCyGd",Emoji:"Footer_Emoji__7QBQV",List:"Footer_List__6BjXV",DiscordUsername:"Footer_DiscordUsername__EuRWJ"}},1733:function(t){t.exports={headerClass:"Header_headerClass__ljseJ",light:"Header_light__rnw7f",dateClass:"Header_dateClass__pfeIu",metaData:"Header_metaData__hr1iD",themeBtnContainer:"Header_themeBtnContainer__hjDER"}},273:function(t){t.exports={mainContent:"Layout_mainContent__77DYI",articleContent:"Layout_articleContent__O2lMV",Light:"Layout_Light__Z5wIE"}},9827:function(t){t.exports={navButton:"NavButton_navButton__NHMq_",Light:"NavButton_Light__vytzi",textAligner:"NavButton_textAligner__Prlm9"}},9103:function(t){t.exports={sectionClass:"NavComp_sectionClass___Ofaz",interactionContainer:"NavComp_interactionContainer__68E5s",buttonContainer:"NavComp_buttonContainer__E29ng"}},1540:function(t){t.exports={Switch:"ThemeSwitch_Switch__2C_rp",dark:"ThemeSwitch_dark__dih5K",iconContainer:"ThemeSwitch_iconContainer__burZS"}},4222:function(){},9008:function(t,e,n){t.exports=n(3121)},1664:function(t,e,n){t.exports=n(1551)}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(6840),e(880)}),_N_E=t.O()}]);