webpackJsonp([0],{237:function(n,exports,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var o=e(63),i=t(o),r=e(268),a=t(r),d=e(184),l=t(d),m=e(185),x=t(m),s=e(266),g=t(s),f=e(158),h=t(f),b=e(648),c=t(b),u=e(649),A=t(u),p=e(647),w=t(p),y=e(264),z=t(y);e(657),e(656),e(653),i.default.module("app",[a.default,l.default,x.default,g.default,z.default,h.default,c.default,A.default]).config(["$locationProvider",function(n){"ngInject";n.html5Mode(!0).hashPrefix("!")}]).component("app",w.default)},238:function(module,exports,__webpack_require__){"use strict";(function(module){function _interopRequireDefault(n){return n&&n.__esModule?n:{default:n}}var _raw=__webpack_require__(316),_raw2=_interopRequireDefault(_raw),_fromCodePoint=__webpack_require__(315),_fromCodePoint2=_interopRequireDefault(_fromCodePoint),_setPrototypeOf=__webpack_require__(314),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_is=__webpack_require__(310),_is2=_interopRequireDefault(_is),_assign=__webpack_require__(299),_assign2=_interopRequireDefault(_assign),_epsilon=__webpack_require__(290),_epsilon2=_interopRequireDefault(_epsilon),_minSafeInteger=__webpack_require__(296),_minSafeInteger2=_interopRequireDefault(_minSafeInteger),_maxSafeInteger=__webpack_require__(295),_maxSafeInteger2=_interopRequireDefault(_maxSafeInteger),_parseFloat=__webpack_require__(297),_parseFloat2=_interopRequireDefault(_parseFloat),_parseInt=__webpack_require__(298),_parseInt2=_interopRequireDefault(_parseInt),_isNan=__webpack_require__(293),_isNan2=_interopRequireDefault(_isNan),_isSafeInteger=__webpack_require__(294),_isSafeInteger2=_interopRequireDefault(_isSafeInteger),_isInteger=__webpack_require__(292),_isInteger2=_interopRequireDefault(_isInteger),_isFinite=__webpack_require__(291),_isFinite2=_interopRequireDefault(_isFinite),_fround=__webpack_require__(280),_fround2=_interopRequireDefault(_fround),_trunc=__webpack_require__(289),_trunc2=_interopRequireDefault(_trunc),_hypot=__webpack_require__(281),_hypot2=_interopRequireDefault(_hypot),_atanh=__webpack_require__(275),_atanh2=_interopRequireDefault(_atanh),_asinh=__webpack_require__(274),_asinh2=_interopRequireDefault(_asinh),_acosh=__webpack_require__(273),_acosh2=_interopRequireDefault(_acosh),_tanh=__webpack_require__(288),_tanh2=_interopRequireDefault(_tanh),_sinh=__webpack_require__(287),_sinh2=_interopRequireDefault(_sinh),_cosh=__webpack_require__(278),_cosh2=_interopRequireDefault(_cosh),_expm=__webpack_require__(279),_expm2=_interopRequireDefault(_expm),_log1p=__webpack_require__(284),_log1p2=_interopRequireDefault(_log1p),_log=__webpack_require__(285),_log2=_interopRequireDefault(_log),_log3=__webpack_require__(283),_log4=_interopRequireDefault(_log3),_sign=__webpack_require__(286),_sign2=_interopRequireDefault(_sign),_imul=__webpack_require__(282),_imul2=_interopRequireDefault(_imul),_cbrt=__webpack_require__(276),_cbrt2=_interopRequireDefault(_cbrt),_clz=__webpack_require__(277),_clz2=_interopRequireDefault(_clz),_of=__webpack_require__(272),_of2=_interopRequireDefault(_of),_from=__webpack_require__(271),_from2=_interopRequireDefault(_from),_preventExtensions=__webpack_require__(312),_preventExtensions2=_interopRequireDefault(_preventExtensions),_freeze=__webpack_require__(303),_freeze2=_interopRequireDefault(_freeze),_seal=__webpack_require__(313),_seal2=_interopRequireDefault(_seal),_defineProperties=__webpack_require__(301),_defineProperties2=_interopRequireDefault(_defineProperties),_defineProperty=__webpack_require__(302),_defineProperty2=_interopRequireDefault(_defineProperty),_getOwnPropertyDescriptor=__webpack_require__(304),_getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor),_isExtensible=__webpack_require__(307),_isExtensible2=_interopRequireDefault(_isExtensible),_isFrozen=__webpack_require__(308),_isFrozen2=_interopRequireDefault(_isFrozen),_isSealed=__webpack_require__(309),_isSealed2=_interopRequireDefault(_isSealed),_getOwnPropertyNames=__webpack_require__(305),_getOwnPropertyNames2=_interopRequireDefault(_getOwnPropertyNames),_getPrototypeOf=__webpack_require__(306),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_create=__webpack_require__(300),_create2=_interopRequireDefault(_create),_keys=__webpack_require__(311),_keys2=_interopRequireDefault(_keys),_typeof2=__webpack_require__(320),_typeof3=_interopRequireDefault(_typeof2);!function(window,document,undefined){function is(n,e){return(void 0===n?"undefined":(0,_typeof3.default)(n))===e}function testRunner(){var n,e,t,o,i,r,a;for(var d in tests)if(tests.hasOwnProperty(d)){if(n=[],e=tests[d],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(t=0;t<e.options.aliases.length;t++)n.push(e.options.aliases[t].toLowerCase());for(o=is(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)r=n[i],a=r.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),classes.push((o?"":"no-")+a.join("-"))}}function setClasses(n){var e=docElement.className,t=Modernizr._config.classPrefix||"";if(isSVG&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");e=e.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e+=" "+t+n.join(" "+t),isSVG?docElement.className.baseVal=e:docElement.className=e)}function addTest(n,e){if("object"==(void 0===n?"undefined":(0,_typeof3.default)(n)))for(var t in n)hasOwnProp(n,t)&&addTest(t,n[t]);else{n=n.toLowerCase();var o=n.split("."),i=Modernizr[o[0]];if(2==o.length&&(i=i[o[1]]),void 0!==i)return Modernizr;e="function"==typeof e?e():e,1==o.length?Modernizr[o[0]]=e:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=e),setClasses([(e&&0!=e?"":"no-")+o.join("-")]),Modernizr._trigger(n,e)}return Modernizr}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function getBody(){var n=document.body;return n||(n=createElement(isSVG?"svg":"body"),n.fake=!0),n}function injectElementWithStyles(n,e,t,o){var i,r,a,d,l="modernizr",m=createElement("div"),x=getBody();if(parseInt(t,10))for(;t--;)a=createElement("div"),a.id=o?o[t]:l+(t+1),m.appendChild(a);return i=createElement("style"),i.type="text/css",i.id="s"+l,(x.fake?x:m).appendChild(i),x.appendChild(m),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n)),m.id=l,x.fake&&(x.style.background="",x.style.overflow="hidden",d=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(x)),r=e(m,n),x.fake?(x.parentNode.removeChild(x),docElement.style.overflow=d,docElement.offsetHeight):m.parentNode.removeChild(m),!!r}function contains(n,e){return!!~(""+n).indexOf(e)}function domToCSS(n){return n.replace(/([A-Z])/g,function(n,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function computedStyle(n,e,t){var o;if("getComputedStyle"in window){o=getComputedStyle.call(window,n,e);var i=window.console;if(null!==o)t&&(o=o.getPropertyValue(t));else if(i){var r=i.error?"error":"log";i[r].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!e&&n.currentStyle&&n.currentStyle[t];return o}function nativeTestProps(n,e){var t=n.length;if("CSS"in window&&"supports"in window.CSS){for(;t--;)if(window.CSS.supports(domToCSS(n[t]),e))return!0;return!1}if("CSSSupportsRule"in window){for(var o=[];t--;)o.push("("+domToCSS(n[t])+":"+e+")");return o=o.join(" or "),injectElementWithStyles("@supports ("+o+") { #modernizr { position: absolute; } }",function(n){return"absolute"==computedStyle(n,null,"position")})}return undefined}function cssToDOM(n){return n.replace(/([a-z])-([a-z])/g,function(n,e,t){return e+t.toUpperCase()}).replace(/^-/,"")}function testProps(n,e,t,o){function i(){a&&(delete mStyle.style,delete mStyle.modElem)}if(o=!is(o,"undefined")&&o,!is(t,"undefined")){var r=nativeTestProps(n,t);if(!is(r,"undefined"))return r}for(var a,d,l,m,x,s=["modernizr","tspan","samp"];!mStyle.style&&s.length;)a=!0,mStyle.modElem=createElement(s.shift()),mStyle.style=mStyle.modElem.style;for(l=n.length,d=0;d<l;d++)if(m=n[d],x=mStyle.style[m],contains(m,"-")&&(m=cssToDOM(m)),mStyle.style[m]!==undefined){if(o||is(t,"undefined"))return i(),"pfx"!=e||m;try{mStyle.style[m]=t}catch(n){}if(mStyle.style[m]!=x)return i(),"pfx"!=e||m}return i(),!1}function fnBind(n,e){return function(){return n.apply(e,arguments)}}function testDOMProps(n,e,t){var o;for(var i in n)if(n[i]in e)return!1===t?n[i]:(o=e[n[i]],is(o,"function")?fnBind(o,t||e):o);return!1}function testPropsAll(n,e,t,o,i){var r=n.charAt(0).toUpperCase()+n.slice(1),a=(n+" "+cssomPrefixes.join(r+" ")+r).split(" ");return is(e,"string")||is(e,"undefined")?testProps(a,e,o,i):(a=(n+" "+domPrefixes.join(r+" ")+r).split(" "),testDOMProps(a,e,t))}function testAllProps(n,e,t){return testPropsAll(n,undefined,undefined,e,t)}function roundedEquals(n,e){return n-1===e||n===e||n+1===e}function detectDeleteDatabase(n,e){var t=n.deleteDatabase(e);t.onsuccess=function(){addTest("indexeddb.deletedatabase",!0)},t.onerror=function(){addTest("indexeddb.deletedatabase",!1)}}var tests=[],ModernizrProto={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var t=this;setTimeout(function(){e(t[n])},0)},addTest:function(n,e,t){tests.push({name:n,fn:e,options:t})},addAsyncTest:function(n){tests.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr;var classes=[],docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase(),hasOwnProp;!function(){var n={}.hasOwnProperty;hasOwnProp=is(n,"undefined")||is(n.call,"undefined")?function(n,e){return e in n&&is(n.constructor.prototype[e],"undefined")}:function(e,t){return n.call(e,t)}}(),ModernizrProto._l={},ModernizrProto.on=function(n,e){this._l[n]||(this._l[n]=[]),this._l[n].push(e),Modernizr.hasOwnProperty(n)&&setTimeout(function(){Modernizr._trigger(n,Modernizr[n])},0)},ModernizrProto._trigger=function(n,e){if(this._l[n]){var t=this._l[n];setTimeout(function(){var n;for(n=0;n<t.length;n++)(0,t[n])(e)},0),delete this._l[n]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest});var omPrefixes="Moz O ms Webkit",cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(n){var e,t=prefixes.length,o=window.CSSRule;if(void 0===o)return undefined;if(!n)return!1;if(n=n.replace(/^@/,""),(e=n.replace(/-/g,"_").toUpperCase()+"_RULE")in o)return"@"+n;for(var i=0;i<t;i++){var r=prefixes[i];if(r.toUpperCase()+"_"+e in o)return"@-"+r.toLowerCase()+"-"+n}return!1};ModernizrProto.atRule=atRule;var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var hasEvent=function(){function n(n,t){var o;return!!n&&(t&&"string"!=typeof t||(t=createElement(t||"div")),n="on"+n,o=n in t,!o&&e&&(t.setAttribute||(t=createElement("div")),t.setAttribute(n,""),o="function"==typeof t[n],t[n]!==undefined&&(t[n]=undefined),t.removeAttribute(n)),o)}var e=!("onblur"in document.documentElement);return n}();ModernizrProto.hasEvent=hasEvent;var html5;isSVG||function(n,e){function t(n,e){var t=n.createElement("p"),o=n.getElementsByTagName("head")[0]||n.documentElement;return t.innerHTML="x<style>"+e+"</style>",o.insertBefore(t.lastChild,o.firstChild)}function o(){var n=v.elements;return"string"==typeof n?n.split(" "):n}function i(n,e){var t=v.elements;"string"!=typeof t&&(t=t.join(" ")),"string"!=typeof n&&(n=n.join(" ")),v.elements=t+" "+n,m(e)}function r(n){var e=z[n[w]];return e||(e={},y++,n[w]=y,z[y]=e),e}function a(n,t,o){if(t||(t=e),c)return t.createElement(n);o||(o=r(t));var i;return i=o.cache[n]?o.cache[n].cloneNode():p.test(n)?(o.cache[n]=o.createElem(n)).cloneNode():o.createElem(n),!i.canHaveChildren||A.test(n)||i.tagUrn?i:o.frag.appendChild(i)}function d(n,t){if(n||(n=e),c)return n.createDocumentFragment();t=t||r(n);for(var i=t.frag.cloneNode(),a=0,d=o(),l=d.length;a<l;a++)i.createElement(d[a]);return i}function l(n,e){e.cache||(e.cache={},e.createElem=n.createElement,e.createFrag=n.createDocumentFragment,e.frag=e.createFrag()),n.createElement=function(t){return v.shivMethods?a(t,n,e):e.createElem(t)},n.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-:]+/g,function(n){return e.createElem(n),e.frag.createElement(n),'c("'+n+'")'})+");return n}")(v,e.frag)}function m(n){n||(n=e);var o=r(n);return!v.shivCSS||b||o.hasCSS||(o.hasCSS=!!t(n,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||l(n,o),n}function x(n){for(var e,t=n.getElementsByTagName("*"),i=t.length,r=RegExp("^(?:"+o().join("|")+")$","i"),a=[];i--;)e=t[i],r.test(e.nodeName)&&a.push(e.applyElement(s(e)));return a}function s(n){for(var e,t=n.attributes,o=t.length,i=n.ownerDocument.createElement(E+":"+n.nodeName);o--;)e=t[o],e.specified&&i.setAttribute(e.nodeName,e.nodeValue);return i.style.cssText=n.style.cssText,i}function g(n){for(var e,t=n.split("{"),i=t.length,r=RegExp("(^|[\\s,>+~])("+o().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+E+"\\:$2";i--;)e=t[i]=t[i].split("}"),e[e.length-1]=e[e.length-1].replace(r,a),t[i]=e.join("}");return t.join("{")}function f(n){for(var e=n.length;e--;)n[e].removeNode()}function h(n){function e(){clearTimeout(a._removeSheetTimer),o&&o.removeNode(!0),o=null}var o,i,a=r(n),d=n.namespaces,l=n.parentWindow;return!M||n.printShived?n:(void 0===d[E]&&d.add(E),l.attachEvent("onbeforeprint",function(){e();for(var r,a,d,l=n.styleSheets,m=[],s=l.length,f=Array(s);s--;)f[s]=l[s];for(;d=f.pop();)if(!d.disabled&&k.test(d.media)){try{r=d.imports,a=r.length}catch(n){a=0}for(s=0;s<a;s++)f.push(r[s]);try{m.push(d.cssText)}catch(n){}}m=g(m.reverse().join("")),i=x(n),o=t(n,m)}),l.attachEvent("onafterprint",function(){f(i),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(e,500)}),n.printShived=!0,n)}var b,c,u=n.html5||{},A=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,w="_html5shiv",y=0,z={};!function(){try{var n=e.createElement("a");n.innerHTML="<xyz></xyz>",b="hidden"in n,c=1==n.childNodes.length||function(){e.createElement("a");var n=e.createDocumentFragment();return void 0===n.cloneNode||void 0===n.createDocumentFragment||void 0===n.createElement}()}catch(n){b=!0,c=!0}}();var v={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==u.shivCSS,supportsUnknownElements:c,shivMethods:!1!==u.shivMethods,type:"default",shivDocument:m,createElement:a,createDocumentFragment:d,addElements:i};n.html5=v,m(e);var k=/^$|\b(?:all|print)\b/,E="html5shiv",M=!c&&function(){var t=e.documentElement;return!(void 0===e.namespaces||void 0===e.parentWindow||void 0===t.applyElement||void 0===t.removeNode||void 0===n.attachEvent)}();v.type+=" print",v.shivPrint=h,h(e),"object"==(0,_typeof3.default)(module)&&module.exports&&(module.exports=v)}(void 0!==window?window:this,document);var err=function(){},warn=function(){};window.console&&(err=function(){var n=console.error?"error":"log";window.console[n].apply(window.console,Array.prototype.slice.call(arguments))},warn=function(){var n=console.warn?"warn":"log";window.console[n].apply(window.console,Array.prototype.slice.call(arguments))}),ModernizrProto.load=function(){"yepnope"in window?(warn("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we’ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),window.yepnope.apply(window,[].slice.call(arguments,0))):err("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var mq=function(){var n=window.matchMedia||window.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var e=!1;return injectElementWithStyles("@media "+n+" { #modernizr { position: absolute; } }",function(n){e="absolute"==(window.getComputedStyle?window.getComputedStyle(n,null):n.currentStyle).position}),e}}();ModernizrProto.mq=mq;var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style}),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(n,e,t){return 0===n.indexOf("@")?atRule(n):(-1!=n.indexOf("-")&&(n=cssToDOM(n)),e?testPropsAll(n,e,t):testPropsAll(n,"pfx"))},prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];ModernizrProto._prefixes=prefixes;var prefixedCSS=ModernizrProto.prefixedCSS=function(n){var e=prefixed(n);return e&&domToCSS(e)};ModernizrProto.testAllProps=testAllProps;var testProp=ModernizrProto.testProp=function(n,e,t){return testProps([n],undefined,e,t)},testStyles=ModernizrProto.testStyles=injectElementWithStyles;/*!
  {
    "name": "a[download] Attribute",
    "property": "adownload",
    "caniuse" : "download",
    "tags": ["media", "attribute"],
    "builderAliases": ["a_download"],
    "notes": [{
      "name": "WhatWG Reference",
      "href": "https://developers.whatwg.org/links.html#downloading-resources"
    }]
  }
  !*/
Modernizr.addTest("adownload",!window.externalHost&&"download"in createElement("a")),/*!
  {
    "name": "Ambient Light Events",
    "property": "ambientlight",
    "notes": [{
      "name": "W3C Ambient Light Events",
      "href": "https://www.w3.org/TR/ambient-light/"
    }]
  }
  !*/
Modernizr.addTest("ambientlight",hasEvent("devicelight",window)),/*!
  {
    "name": "Application Cache",
    "property": "applicationcache",
    "caniuse": "offline-apps",
    "tags": ["storage", "offline"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
    }],
    "polyfills": ["html5gears"]
  }
  !*/
Modernizr.addTest("applicationcache","applicationCache"in window),/*!
  {
    "name" : "HTML5 Audio Element",
    "property": "audio",
    "tags" : ["html5", "audio", "media"]
  }
  !*/
Modernizr.addTest("audio",function(){var n=createElement("audio"),e=!1;try{e=!!n.canPlayType,e&&(e=new Boolean(e),e.ogg=n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),e.mp3=n.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),e.opus=n.canPlayType('audio/ogg; codecs="opus"')||n.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),e.wav=n.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),e.m4a=(n.canPlayType("audio/x-m4a;")||n.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return e}),/*!
  {
    "name": "Audio Loop Attribute",
    "property": "audioloop",
    "tags": ["audio", "media"]
  }
  !*/
Modernizr.addTest("audioloop","loop"in createElement("audio")),/*!
  {
    "name": "Audio Preload",
    "property": "audiopreload",
    "tags": ["audio", "media"],
    "async" : true,
    "warnings": ["This test is very large – only include it if you absolutely need it"]
  }
  !*/
Modernizr.addAsyncTest(function(){function n(o){clearTimeout(e);var i=o!==undefined&&"loadeddata"===o.type;t.removeEventListener("loadeddata",n,!1),addTest("audiopreload",i),t.parentNode.removeChild(t)}var e,t=createElement("audio"),o=t.style;if(!(Modernizr.audio&&"preload"in t))return void addTest("audiopreload",!1);o.position="absolute",o.height=0,o.width=0;try{if(Modernizr.audio.mp3)t.src="data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";else if(Modernizr.audio.m4a)t.src="data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";else if(Modernizr.audio.ogg)t.src="data:audio/ogg;base64,T2dnUwACAAAAAAAAAAD/QwAAAAAAAM2LVKsBHgF2b3JiaXMAAAAAAUSsAAAAAAAAgLsAAAAAAAC4AU9nZ1MAAAAAAAAAAAAA/0MAAAEAAADmvOe6Dy3/////////////////MgN2b3JiaXMdAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAwNzA2MjIAAAAAAQV2b3JiaXMfQkNWAQAAAQAYY1QpRplS0kqJGXOUMUaZYpJKiaWEFkJInXMUU6k515xrrLm1IIQQGlNQKQWZUo5SaRljkCkFmVIQS0kldBI6J51jEFtJwdaYa4tBthyEDZpSTCnElFKKQggZU4wpxZRSSkIHJXQOOuYcU45KKEG4nHOrtZaWY4updJJK5yRkTEJIKYWSSgelU05CSDWW1lIpHXNSUmpB6CCEEEK2IIQNgtCQVQAAAQDAQBAasgoAUAAAEIqhGIoChIasAgAyAAAEoCiO4iiOIzmSY0kWEBqyCgAAAgAQAADAcBRJkRTJsSRL0ixL00RRVX3VNlVV9nVd13Vd13UgNGQVAAABAEBIp5mlGiDCDGQYCA1ZBQAgAAAARijCEANCQ1YBAAABAABiKDmIJrTmfHOOg2Y5aCrF5nRwItXmSW4q5uacc845J5tzxjjnnHOKcmYxaCa05pxzEoNmKWgmtOacc57E5kFrqrTmnHPGOaeDcUYY55xzmrTmQWo21uaccxa0pjlqLsXmnHMi5eZJbS7V5pxzzjnnnHPOOeecc6oXp3NwTjjnnHOi9uZabkIX55xzPhmne3NCOOecc84555xzzjnnnHOC0JBVAAAQAABBGDaGcacgSJ+jgRhFiGnIpAfdo8MkaAxyCqlHo6ORUuoglFTGSSmdIDRkFQAACAAAIYQUUkghhRRSSCGFFFKIIYYYYsgpp5yCCiqppKKKMsoss8wyyyyzzDLrsLPOOuwwxBBDDK20EktNtdVYY62555xrDtJaaa211koppZRSSikIDVkFAIAAABAIGWSQQUYhhRRSiCGmnHLKKaigAkJDVgEAgAAAAgAAADzJc0RHdERHdERHdERHdETHczxHlERJlERJtEzL1ExPFVXVlV1b1mXd9m1hF3bd93Xf93Xj14VhWZZlWZZlWZZlWZZlWZZlWYLQkFUAAAgAAIAQQgghhRRSSCGlGGPMMeegk1BCIDRkFQAACAAgAAAAwFEcxXEkR3IkyZIsSZM0S7M8zdM8TfREURRN01RFV3RF3bRF2ZRN13RN2XRVWbVdWbZt2dZtX5Zt3/d93/d93/d93/d93/d1HQgNWQUASAAA6EiOpEiKpEiO4ziSJAGhIasAABkAAAEAKIqjOI7jSJIkSZakSZ7lWaJmaqZneqqoAqEhqwAAQAAAAQAAAAAAKJriKabiKaLiOaIjSqJlWqKmaq4om7Lruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7rui4QGrIKAJAAANCRHMmRHEmRFEmRHMkBQkNWAQAyAAACAHAMx5AUybEsS9M8zdM8TfRET/RMTxVd0QVCQ1YBAIAAAAIAAAAAADAkw1IsR3M0SZRUS7VUTbVUSxVVT1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTVN0zRNIDRkJQAABADAYo3B5SAhJSXl3hDCEJOeMSYhtV4hBJGS3jEGFYOeMqIMct5C4xCDHggNWREARAEAAMYgxxBzyDlHqZMSOeeodJQa5xyljlJnKcWYYs0oldhSrI1zjlJHraOUYiwtdpRSjanGAgAAAhwAAAIshEJDVgQAUQAAhDFIKaQUYow5p5xDjCnnmHOGMeYcc44556B0UirnnHROSsQYc445p5xzUjonlXNOSiehAACAAAcAgAALodCQFQFAnACAQZI8T/I0UZQ0TxRFU3RdUTRd1/I81fRMU1U90VRVU1Vt2VRVWZY8zzQ901RVzzRV1VRVWTZVVZZFVdVt03V123RV3ZZt2/ddWxZ2UVVt3VRd2zdV1/Zd2fZ9WdZ1Y/I8VfVM03U903Rl1XVtW3VdXfdMU5ZN15Vl03Vt25VlXXdl2fc103Rd01Vl2XRd2XZlV7ddWfZ903WF35VlX1dlWRh2XfeFW9eV5XRd3VdlVzdWWfZ9W9eF4dZ1YZk8T1U903RdzzRdV3VdX1dd19Y105Rl03Vt2VRdWXZl2fddV9Z1zzRl2XRd2zZdV5ZdWfZ9V5Z13XRdX1dlWfhVV/Z1WdeV4dZt4Tdd1/dVWfaFV5Z14dZ1Ybl1XRg+VfV9U3aF4XRl39eF31luXTiW0XV9YZVt4VhlWTl+4ViW3feVZXRdX1ht2RhWWRaGX/id5fZ943h1XRlu3efMuu8Mx++k+8rT1W1jmX3dWWZfd47hGDq/8OOpqq+brisMpywLv+3rxrP7vrKMruv7qiwLvyrbwrHrvvP8vrAso+z6wmrLwrDatjHcvm4sv3Acy2vryjHrvlG2dXxfeArD83R1XXlmXcf2dXTjRzh+ygAAgAEHAIAAE8pAoSErAoA4AQCPJImiZFmiKFmWKIqm6LqiaLqupGmmqWmeaVqaZ5qmaaqyKZquLGmaaVqeZpqap5mmaJqua5qmrIqmKcumasqyaZqy7LqybbuubNuiacqyaZqybJqmLLuyq9uu7Oq6pFmmqXmeaWqeZ5qmasqyaZquq3meanqeaKqeKKqqaqqqraqqLFueZ5qa6KmmJ4qqaqqmrZqqKsumqtqyaaq2bKqqbbuq7Pqybeu6aaqybaqmLZuqatuu7OqyLNu6L2maaWqeZ5qa55mmaZqybJqqK1uep5qeKKqq5ommaqqqLJumqsqW55mqJ4qq6omea5qqKsumatqqaZq2bKqqLZumKsuubfu+68qybqqqbJuqauumasqybMu+78qq7oqmKcumqtqyaaqyLduy78uyrPuiacqyaaqybaqqLsuybRuzbPu6aJqybaqmLZuqKtuyLfu6LNu678qub6uqrOuyLfu67vqucOu6MLyybPuqrPq6K9u6b+sy2/Z9RNOUZVM1bdtUVVl2Zdn2Zdv2fdE0bVtVVVs2TdW2ZVn2fVm2bWE0Tdk2VVXWTdW0bVmWbWG2ZeF2Zdm3ZVv2ddeVdV/XfePXZd3murLty7Kt+6qr+rbu+8Jw667wCgAAGHAAAAgwoQwUGrISAIgCAACMYYwxCI1SzjkHoVHKOecgZM5BCCGVzDkIIZSSOQehlJQy5yCUklIIoZSUWgshlJRSawUAABQ4AAAE2KApsThAoSErAYBUAACD41iW55miatqyY0meJ4qqqaq27UiW54miaaqqbVueJ4qmqaqu6+ua54miaaqq6+q6aJqmqaqu67q6Lpqiqaqq67qyrpumqqquK7uy7Oumqqqq68quLPvCqrquK8uybevCsKqu68qybNu2b9y6ruu+7/vCka3rui78wjEMRwEA4AkOAEAFNqyOcFI0FlhoyEoAIAMAgDAGIYMQQgYhhJBSSiGllBIAADDgAAAQYEIZKDRkRQAQJwAAGEMppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkgppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";else{if(!Modernizr.audio.wav)return void addTest("audiopreload",!1);t.src="data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA"}}catch(n){return void addTest("audiopreload",!1)}t.setAttribute("preload","auto"),t.style.cssText="display:none",docElement.appendChild(t),setTimeout(function(){t.addEventListener("loadeddata",n,!1),e=setTimeout(n,300)},0)}),/*!
  {
    "name": "Web Audio API",
    "property": "webaudio",
    "caniuse": "audio-api",
    "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
    "tags": ["audio", "media"],
    "builderAliases": ["audio_webaudio_api"],
    "authors": ["Addy Osmani"],
    "notes": [{
      "name": "W3 Specification",
      "href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
    }]
  }
  !*/
Modernizr.addTest("webaudio",function(){var n="webkitAudioContext"in window,e="AudioContext"in window;return Modernizr._config.usePrefixes?n||e:e}),/*!
  {
    "name": "Battery API",
    "property": "batteryapi",
    "aliases": ["battery-api"],
    "builderAliases": ["battery_api"],
    "tags": ["device", "media"],
    "authors": ["Paul Sayre"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozBattery"
    }]
  }
  !*/
Modernizr.addTest("batteryapi",!!prefixed("battery",navigator),{aliases:["battery-api"]}),/*!
  {
    "name": "Low Battery Level",
    "property": "lowbattery",
    "tags": ["hardware", "mobile"],
    "builderAliases": ["battery_level"],
    "authors": ["Paul Sayre"],
    "notes": [{
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/battery"
    }]
  }
  !*/
Modernizr.addTest("lowbattery",function(){var n=prefixed("battery",navigator);return!!(n&&!n.charging&&n.level<=.2)}),/*!
  {
    "name": "Blob constructor",
    "property": "blobconstructor",
    "aliases": ["blob-constructor"],
    "builderAliases": ["blob_constructor"],
    "caniuse": "blobbuilder",
    "notes": [{
      "name": "W3C spec",
      "href": "https://w3c.github.io/FileAPI/#constructorBlob"
    }],
    "polyfills": ["blobjs"]
  }
  !*/
Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(n){return!1}},{aliases:["blob-constructor"]}),/*!
  {
    "name": "Canvas",
    "property": "canvas",
    "caniuse": "canvas",
    "tags": ["canvas", "graphics"],
    "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
  }
  !*/
Modernizr.addTest("canvas",function(){var n=createElement("canvas");return!(!n.getContext||!n.getContext("2d"))}),/*!
  {
    "name": "canvas blending support",
    "property": "canvasblending",
    "tags": ["canvas"],
    "async" : false,
    "notes": [{
        "name": "HTML5 Spec",
        "href": "https://dvcs.w3.org/hg/FXTF/rawfile/tip/compositing/index.html#blending"
      },
      {
        "name": "Article",
        "href": "https://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas"
      }]
  }
  !*/
Modernizr.addTest("canvasblending",function(){if(!1===Modernizr.canvas)return!1;var n=createElement("canvas").getContext("2d");try{n.globalCompositeOperation="screen"}catch(n){}return"screen"===n.globalCompositeOperation});/*!
  {
    "name": "canvas.toDataURL type support",
    "property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
    "tags": ["canvas"],
    "builderAliases": ["canvas_todataurl_type"],
    "async" : false,
    "notes": [{
      "name": "MDN article",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL"
    }]
  }
  !*/
var canvas=createElement("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===canvas.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===canvas.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var n=!1;try{n=!!Modernizr.canvas&&0===canvas.toDataURL("image/webp").indexOf("data:image/webp")}catch(n){}return n}),/*!
  {
    "name": "canvas winding support",
    "property": ["canvaswinding"],
    "tags": ["canvas"],
    "async" : false,
    "notes": [{
      "name": "Article",
      "href": "https://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/"
    }]
  }
  !*/
Modernizr.addTest("canvaswinding",function(){if(!1===Modernizr.canvas)return!1;var n=createElement("canvas").getContext("2d");return n.rect(0,0,10,10),n.rect(2,2,6,6),!1===n.isPointInPath(5,5,"evenodd")}),/*!
  {
    "name": "Canvas text",
    "property": "canvastext",
    "caniuse": "canvas-text",
    "tags": ["canvas", "graphics"],
    "polyfills": ["canvastext"]
  }
  !*/
Modernizr.addTest("canvastext",function(){return!1!==Modernizr.canvas&&"function"==typeof createElement("canvas").getContext("2d").fillText}),/*!
  {
    "name": "Content Editable",
    "property": "contenteditable",
    "caniuse": "contenteditable",
    "notes": [{
      "name": "WHATWG spec",
      "href": "https://html.spec.whatwg.org/multipage/interaction.html#contenteditable"
    }]
  }
  !*/
Modernizr.addTest("contenteditable",function(){if("contentEditable"in docElement){var n=createElement("div");return n.contentEditable=!0,"true"===n.contentEditable}}),/*!
  {
    "name": "Context menus",
    "property": "contextmenu",
    "caniuse": "menu",
    "notes": [{
      "name": "W3C spec",
      "href": "http://www.w3.org/TR/html5/interactive-elements.html#context-menus"
    },{
      "name": "thewebrocks.com Demo",
      "href": "http://thewebrocks.com/demos/context-menu/"
    }],
    "polyfills": ["jquery-contextmenu"]
  }
  !*/
Modernizr.addTest("contextmenu","contextMenu"in docElement&&"HTMLMenuItemElement"in window),/*!
  {
    "name": "Cookies",
    "property": "cookies",
    "tags": ["storage"],
    "authors": ["tauren"]
  }
  !*/
Modernizr.addTest("cookies",function(){try{document.cookie="cookietest=1";var n=-1!=document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",n}catch(n){return!1}}),/*!
  {
    "name": "Cross-Origin Resource Sharing",
    "property": "cors",
    "caniuse": "cors",
    "authors": ["Theodoor van Donge"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS"
    }],
    "polyfills": ["pmxdr", "ppx", "flxhr"]
  }
  !*/
Modernizr.addTest("cors","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest),/*!
  {
    "name": "Custom Elements API",
    "property": "customelements",
    "tags": ["customelements"],
    "polyfills": ["customelements"],
    "notes": [{
      "name": "Specs for Custom Elements",
      "href": "https://www.w3.org/TR/custom-elements/"
    }]
  }
  !*/
Modernizr.addTest("customelements","customElements"in window);/*!
  {
    "name": "Web Cryptography",
    "property": "cryptography",
    "caniuse": "cryptography",
    "tags": ["crypto"],
    "authors": ["roblarsen"],
    "notes": [{
      "name": "W3C Editor's Draft",
      "href": "https://www.w3.org/TR/WebCryptoAPI/"
    }],
    "polyfills": [
      "polycrypt"
    ]
  }
  !*/
var crypto=prefixed("crypto",window);Modernizr.addTest("crypto",!!prefixed("subtle",crypto));/*!
  {
    "name": "getRandomValues",
    "property": "getrandomvalues",
    "caniuse": "window.crypto.getRandomValues",
    "tags": ["crypto"],
    "authors": ["komachi"],
    "notes": [{
      "name": "W3C Editor’s Draft",
      "href": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#RandomSource-method-getRandomValues"
    }],
    "polyfills": [
      "polycrypt"
    ]
  }
  !*/
var crypto=prefixed("crypto",window),supportsGetRandomValues;if(crypto&&"getRandomValues"in crypto&&"Uint32Array"in window){var array=new Uint32Array(10),values=crypto.getRandomValues(array);supportsGetRandomValues=values&&is(values[0],"number")}Modernizr.addTest("getrandomvalues",!!supportsGetRandomValues),/*!
  {
    "name": "cssall",
    "property": "cssall",
    "notes": [{
      "name": "Spec",
      "href": "https://drafts.csswg.org/css-cascade/#all-shorthand"
    }]
  }
  !*/
Modernizr.addTest("cssall","all"in docElement.style),/*!
  {
    "name": "CSS Animations",
    "property": "cssanimations",
    "caniuse": "css-animation",
    "polyfills": ["transformie", "csssandpaper"],
    "tags": ["css"],
    "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
    "notes": [{
      "name" : "Article: 'Dispelling the Android CSS animation myths'",
      "href": "https://goo.gl/OGw5Gm"
    }]
  }
  !*/
Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),/*!
  {
    "name": "Appearance",
    "property": "appearance",
    "caniuse": "css-appearance",
    "tags": ["css"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance"
    },{
      "name": "CSS-Tricks CSS Almanac: appearance",
      "href": "https://css-tricks.com/almanac/properties/a/appearance/"
    }]
  }
  !*/
Modernizr.addTest("appearance",testAllProps("appearance")),/*!
  {
    "name": "Backdrop Filter",
    "property": "backdropfilter",
    "authors": ["Brian Seward"],
    "tags": ["css"],
    "notes": [
      {
        "name": "W3C Editor’s Draft specification",
        "href": "https://drafts.fxtf.org/filters-2/#BackdropFilterProperty"
      },
      {
        "name": "Caniuse for CSS Backdrop Filter",
        "href": "http://caniuse.com/#feat=css-backdrop-filter"
      },
      {
        "name": "WebKit Blog introduction + Demo",
        "href": "https://www.webkit.org/blog/3632/introducing-backdrop-filters/"
      }
    ]
  }
  !*/
Modernizr.addTest("backdropfilter",testAllProps("backdropFilter")),/*!
  {
    "name": "CSS Background Blend Mode",
    "property": "backgroundblendmode",
    "caniuse": "css-backgroundblendmode",
    "tags": ["css"],
    "notes": [
      {
        "name": "CSS Blend Modes could be the next big thing in Web Design",
        "href": " https://medium.com/@bennettfeely/css-blend-modes-could-be-the-next-big-thing-in-web-design-6b51bf53743a"
      }, {
        "name": "Demo",
        "href": "http://bennettfeely.com/gradients/"
      }
    ]
  }
  !*/
Modernizr.addTest("backgroundblendmode",prefixed("backgroundBlendMode","text")),/*!
  {
    "name": "CSS Background Clip Text",
    "property": "backgroundcliptext",
    "authors": ["ausi"],
    "tags": ["css"],
    "notes": [
      {
        "name": "CSS Tricks Article",
        "href": "https://css-tricks.com/image-under-text/"
      },
      {
        "name": "MDN Docs",
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip"
      },
      {
        "name": "Related Github Issue",
        "href": "https://github.com/Modernizr/Modernizr/issues/199"
      }
    ]
  }
  !*/
Modernizr.addTest("backgroundcliptext",function(){return testAllProps("backgroundClip","text")}),/*!
  {
    "name": "Background Position Shorthand",
    "property": "bgpositionshorthand",
    "tags": ["css"],
    "builderAliases": ["css_backgroundposition_shorthand"],
    "notes": [{
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en/CSS/background-position"
    }, {
      "name": "W3 Spec",
      "href": "https://www.w3.org/TR/css3-background/#background-position"
    }, {
      "name": "Demo",
      "href": "https://jsfiddle.net/Blink/bBXvt/"
    }]
  }
  !*/
Modernizr.addTest("bgpositionshorthand",function(){var n=createElement("a"),e=n.style,t="right 10px bottom 10px";return e.cssText="background-position: "+t+";",e.backgroundPosition===t}),/*!
  {
    "name": "Background Position XY",
    "property": "bgpositionxy",
    "tags": ["css"],
    "builderAliases": ["css_backgroundposition_xy"],
    "authors": ["Allan Lei", "Brandom Aaron"],
    "notes": [{
      "name": "Demo",
      "href": "https://jsfiddle.net/allanlei/R8AYS/"
    }, {
      "name": "Adapted From",
      "href": "https://github.com/brandonaaron/jquery-cssHooks/blob/master/bgpos.js"
    }]
  }
  !*/
Modernizr.addTest("bgpositionxy",function(){return testAllProps("backgroundPositionX","3px",!0)&&testAllProps("backgroundPositionY","5px",!0)}),/*!
  {
    "name": "Background Repeat",
    "property": ["bgrepeatspace", "bgrepeatround"],
    "tags": ["css"],
    "builderAliases": ["css_backgroundrepeat"],
    "authors": ["Ryan Seddon"],
    "notes": [{
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat"
    }, {
      "name": "Test Page",
      "href": "https://jsbin.com/uzesun/"
    }, {
      "name": "Demo",
      "href": "https://jsfiddle.net/ryanseddon/yMLTQ/6/"
    }]
  }
  !*/
Modernizr.addTest("bgrepeatround",testAllProps("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",testAllProps("backgroundRepeat","space")),/*!
  {
    "name": "Background Size",
    "property": "backgroundsize",
    "tags": ["css"],
    "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
    "notes": [{
      "name": "Related Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/396"
    }]
  }
  !*/
Modernizr.addTest("backgroundsize",testAllProps("backgroundSize","100%",!0)),/*!
  {
    "name": "Background Size Cover",
    "property": "bgsizecover",
    "tags": ["css"],
    "builderAliases": ["css_backgroundsizecover"],
    "notes": [{
      "name" : "MDN Docs",
      "href": "https://developer.mozilla.org/en/CSS/background-size"
    }]
  }
  !*/
Modernizr.addTest("bgsizecover",testAllProps("backgroundSize","cover")),/*!
  {
    "name": "Border Image",
    "property": "borderimage",
    "caniuse": "border-image",
    "polyfills": ["css3pie"],
     "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
    "tags": ["css"]
  }
  !*/
Modernizr.addTest("borderimage",testAllProps("borderImage","url() 1",!0)),/*!
  {
    "name": "Border Radius",
    "property": "borderradius",
    "caniuse": "border-radius",
    "polyfills": ["css3pie"],
    "tags": ["css"],
    "notes": [{
      "name": "Comprehensive Compat Chart",
      "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
    }]
  }
  !*/
Modernizr.addTest("borderradius",testAllProps("borderRadius","0px",!0)),/*!
  {
    "name": "Box Shadow",
    "property": "boxshadow",
    "caniuse": "css-boxshadow",
    "tags": ["css"],
    "knownBugs": [
      "WebOS false positives on this test.",
      "The Kindle Silk browser false positives"
    ]
  }
  !*/
Modernizr.addTest("boxshadow",testAllProps("boxShadow","1px 1px",!0)),/*!
  {
    "name": "Box Sizing",
    "property": "boxsizing",
    "caniuse": "css3-boxsizing",
    "polyfills": ["borderboxmodel", "boxsizingpolyfill", "borderbox"],
    "tags": ["css"],
    "builderAliases": ["css_boxsizing"],
    "notes": [{
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
    },{
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/248"
    }]
  }
  !*/
Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(document.documentMode===undefined||document.documentMode>7)),/*!
  {
    "name": "CSS Calc",
    "property": "csscalc",
    "caniuse": "calc",
    "tags": ["css"],
    "builderAliases": ["css_calc"],
    "authors": ["@calvein"]
  }
  !*/
Modernizr.addTest("csscalc",function(){var n=createElement("a");return n.style.cssText="width:"+prefixes.join("calc(10px);width:"),!!n.style.length}),/*!
  {
    "name": "CSS :checked pseudo-selector",
    "caniuse": "css-sel3",
    "property": "checked",
    "tags": ["css"],
    "notes": [{
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/pull/879"
    }]
  }
  !*/
Modernizr.addTest("checked",function(){return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(n){var e=createElement("input");return e.setAttribute("type","checkbox"),e.setAttribute("checked","checked"),n.appendChild(e),20===e.offsetLeft})}),/*!
  {
    "name": "CSS Font ch Units",
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "property": "csschunit",
    "tags": ["css"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
    }]
  }
  !*/
Modernizr.addTest("csschunit",function(){var n,e=modElem.elem.style;try{e.fontSize="3ch",n=-1!==e.fontSize.indexOf("ch")}catch(e){n=!1}return n}),/*!
  {
    "name": "CSS Columns",
    "property": "csscolumns",
    "caniuse": "multicolumn",
    "polyfills": ["css3multicolumnjs"],
    "tags": ["css"]
  }
  !*/
function(){Modernizr.addTest("csscolumns",function(){var n=!1,e=testAllProps("columnCount");try{n=!!e,n&&(n=new Boolean(n))}catch(n){}return n});for(var n,e,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],o=0;o<t.length;o++)n=t[o].toLowerCase(),e=testAllProps("column"+t[o]),"breakbefore"!==n&&"breakafter"!==n&&"breakinside"!=n||(e=e||testAllProps(t[o])),Modernizr.addTest("csscolumns."+n,e)}(),/*!
  {
    "name": "CSS Grid (old & new)",
    "property": ["cssgrid", "cssgridlegacy"],
    "authors": ["Faruk Ates"],
    "tags": ["css"],
    "notes": [{
      "name": "The new, standardized CSS Grid",
      "href": "https://www.w3.org/TR/css3-grid-layout/"
    }, {
      "name": "The _old_ CSS Grid (legacy)",
      "href": "https://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/"
    }]
  }
  !*/
Modernizr.addTest("cssgridlegacy",testAllProps("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",testAllProps("grid-template-rows","none",!0)),/*!
  {
    "name": "CSS Cubic Bezier Range",
    "property": "cubicbezierrange",
    "tags": ["css"],
    "builderAliases": ["css_cubicbezierrange"],
    "doc" : null,
    "authors": ["@calvein"],
    "warnings": ["cubic-bezier values can't be > 1 for Webkit until [bug #45761](https://bugs.webkit.org/show_bug.cgi?id=45761) is fixed"],
    "notes": [{
      "name": "Comprehensive Compat Chart",
      "href": "http://muddledramblings.com/table-of-css3-border-radius-compliance"
    }]
  }
  !*/
Modernizr.addTest("cubicbezierrange",function(){var n=createElement("a");return n.style.cssText=prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!n.style.length}),/*!
  {
    "name": "CSS Display run-in",
    "property": "display-runin",
    "authors": ["alanhogan"],
    "tags": ["css"],
    "builderAliases": ["css_displayrunin"],
    "notes": [{
      "name": "CSS Tricks Article",
      "href": "https://css-tricks.com/596-run-in/"
    },{
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/198"
    }]
  }
  !*/
Modernizr.addTest("displayrunin",testAllProps("display","run-in"),{aliases:["display-runin"]}),/*!
  {
    "name": "CSS Display table",
    "property": "displaytable",
    "caniuse": "css-table",
    "authors": ["scottjehl"],
    "tags": ["css"],
    "builderAliases": ["css_displaytable"],
    "notes": [{
      "name": "Detects for all additional table display values",
      "href": "http://pastebin.com/Gk9PeVaQ"
    }]
  }
  !*/
testStyles("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(n){var e,t=n.childNodes;e=t[0].offsetLeft<t[1].offsetLeft,Modernizr.addTest("displaytable",e,{aliases:["display-table"]})},2),/*!
  {
    "name": "CSS text-overflow ellipsis",
    "property": "ellipsis",
    "caniuse": "text-overflow",
    "polyfills": [
      "text-overflow"
    ],
    "tags": ["css"]
  }
  !*/
Modernizr.addTest("ellipsis",testAllProps("textOverflow","ellipsis"));/*!
  {
    "name": "CSS.escape()",
    "property": "cssescape",
    "polyfills": [
      "css-escape"
    ],
    "tags": [
      "css",
      "cssom"
    ]
  }
  !*/
var CSS=window.CSS;Modernizr.addTest("cssescape",!!CSS&&"function"==typeof CSS.escape),/*!
  {
    "name": "CSS Font ex Units",
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "property": "cssexunit",
    "tags": ["css"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
    }]
  }
  !*/
Modernizr.addTest("cssexunit",function(){var n,e=modElem.elem.style;try{e.fontSize="3ex",n=-1!==e.fontSize.indexOf("ex")}catch(e){n=!1}return n});/*!
  {
    "name": "CSS Supports",
    "property": "supports",
    "caniuse": "css-featurequeries",
    "tags": ["css"],
    "builderAliases": ["css_supports"],
    "notes": [{
      "name": "W3 Spec",
      "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
    },{
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/648"
    },{
      "name": "W3 Info",
      "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
    }]
  }
  !*/
var newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax),/*!
  {
    "name": "CSS Filters",
    "property": "cssfilters",
    "caniuse": "css-filters",
    "polyfills": ["polyfilter"],
    "tags": ["css"],
    "builderAliases": ["css_filters"],
    "notes": [{
      "name": "MDN article on CSS filters",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
    }]
  }
  !*/
Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return testAllProps("filter","blur(2px)");var n=createElement("a");return n.style.cssText=prefixes.join("filter:blur(2px); "),!!n.style.length&&(document.documentMode===undefined||document.documentMode>9)}),/*!
  {
    "name": "Flexbox",
    "property": "flexbox",
    "caniuse": "flexbox",
    "tags": ["css"],
    "notes": [{
      "name": "The _new_ flexbox",
      "href": "http://dev.w3.org/csswg/css3-flexbox"
    }],
    "warnings": [
      "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
    ]
  }
  !*/
Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),/*!
  {
    "name": "Flexbox (legacy)",
    "property": "flexboxlegacy",
    "tags": ["css"],
    "polyfills": ["flexie"],
    "notes": [{
      "name": "The _old_ flexbox",
      "href": "https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
    }]
  }
  !*/
Modernizr.addTest("flexboxlegacy",testAllProps("boxDirection","reverse",!0)),/*!
  {
    "name": "Flexbox (tweener)",
    "property": "flexboxtweener",
    "tags": ["css"],
    "polyfills": ["flexie"],
    "notes": [{
      "name": "The _inbetween_ flexbox",
      "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
    }],
    "warnings": ["This represents an old syntax, not the latest standard syntax."]
  }
  !*/
Modernizr.addTest("flexboxtweener",testAllProps("flexAlign","end",!0)),/*!
  {
    "name": "Flex Line Wrapping",
    "property": "flexwrap",
    "tags": ["css", "flexbox"],
    "notes": [{
      "name": "W3C Flexible Box Layout spec",
      "href": "http://dev.w3.org/csswg/css3-flexbox"
    }],
    "warnings": [
      "Does not imply a modern implementation – see documentation."
    ]
  }
  !*/
Modernizr.addTest("flexwrap",testAllProps("flexWrap","wrap",!0));/*!
  {
    "name": "@font-face",
    "property": "fontface",
    "authors": ["Diego Perini", "Mat Marquis"],
    "tags": ["css"],
    "knownBugs": [
      "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
      "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
    ],
    "notes": [{
      "name": "@font-face detection routine by Diego Perini",
      "href": "http://javascript.nwbox.com/CSSSupport/"
    },{
      "name": "Filament Group @font-face compatibility research",
      "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
    },{
      "name": "Filament Grunticon/@font-face device testing results",
      "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
    },{
      "name": "CSS fonts on Android",
      "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
    },{
      "name": "@font-face and Android",
      "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
    }]
  }
  !*/
var blacklist=function(){var n=navigator.userAgent,e=n.match(/w(eb)?osbrowser/gi),t=n.match(/windows phone/gi)&&n.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return e||t}();blacklist?Modernizr.addTest("fontface",!1):testStyles('@font-face {font-family:"font";src:url("https://")}',function(n,e){var t=document.getElementById("smodernizr"),o=t.sheet||t.styleSheet,i=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",r=/src/i.test(i)&&0===i.indexOf(e.split(" ")[0]);Modernizr.addTest("fontface",r)}),/*!
  {
    "name": "CSS Generated Content",
    "property": "generatedcontent",
    "tags": ["css"],
    "warnings": ["Android won't return correct height for anything below 7px #738"],
    "notes": [{
      "name": "W3C CSS Selectors Level 3 spec",
      "href": "https://www.w3.org/TR/css3-selectors/#gen-content"
    },{
      "name": "MDN article on :before",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
    },{
      "name": "MDN article on :after",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
    }]
  }
  !*/
testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(n){Modernizr.addTest("generatedcontent",n.offsetHeight>=6)}),/*!
  {
    "name": "CSS Gradients",
    "caniuse": "css-gradients",
    "property": "cssgradients",
    "tags": ["css"],
    "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
    "notes": [{
      "name": "Webkit Gradient Syntax",
      "href": "https://webkit.org/blog/175/introducing-css-gradients/"
    },{
      "name": "Linear Gradient Syntax",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
    },{
      "name": "W3C Gradient Spec",
      "href": "https://drafts.csswg.org/css-images-3/#gradients"
    }]
  }
  !*/
Modernizr.addTest("cssgradients",function(){for(var n,e="background-image:",t="",o=0,i=prefixes.length-1;o<i;o++)n=0===o?"to ":"",t+=e+prefixes[o]+"linear-gradient("+n+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(t+=e+"-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");var r=createElement("a"),a=r.style;return a.cssText=t,(""+a.backgroundImage).indexOf("gradient")>-1}),/*! {
    "name": "hairline",
    "property": "hairline",
    "tags": ["css"],
    "authors": ["strarsis"],
    "notes": [{
      "name": "Blog post about CSS retina hairlines",
      "href": "http://dieulot.net/css-retina-hairline"
    },{
      "name": "Derived from",
      "href": "https://gist.github.com/dieulot/520a49463f6058fbc8d1"
    }]
  }
  !*/
Modernizr.addTest("hairline",function(){return testStyles("#modernizr {border:.5px solid transparent}",function(n){return 1===n.offsetHeight})}),/*!
  {
    "name": "CSS HSLA Colors",
    "caniuse": "css3-colors",
    "property": "hsla",
    "tags": ["css"]
  }
  !*/
Modernizr.addTest("hsla",function(){var n=createElement("a").style;return n.cssText="background-color:hsla(120,40%,100%,.5)",contains(n.backgroundColor,"rgba")||contains(n.backgroundColor,"hsla")}),/*!
  {
    "name": "CSS Hyphens",
    "caniuse": "css-hyphens",
    "property": ["csshyphens", "softhyphens", "softhyphensfind"],
    "tags": ["css"],
    "builderAliases": ["css_hyphens"],
    "async" : true,
    "authors": ["David Newton"],
    "warnings": [
      "These tests currently require document.body to be present",
      "If loading Hyphenator.js via yepnope, be cautious of issue 158: http://code.google.com/p/hyphenator/issues/detail?id=158",
      "This is very large – only include it if you absolutely need it"
      ],
    "notes": [{
      "name": "The Current State of Hyphenation on the Web.",
      "href": "http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web"
    },{
      "name": "Hyphenation Test Page",
      "href": "http://davidnewton.ca/demos/hyphenation/test.html"
    },{
      "name": "Hyphenation is Language Specific",
      "href": " http://code.google.com/p/hyphenator/source/diff?spec=svn975&r=975&format=side&path=/trunk/Hyphenator.js#sc_svn975_313"
    },{
      "name": "Related Modernizr Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/312"
    }]
  }
  !*/
Modernizr.addAsyncTest(function(){function n(){function t(){try{var n=createElement("div"),e=createElement("span"),t=n.style,o=0,i=0,r=!1,a=document.body.firstElementChild||document.body.firstChild;return n.appendChild(e),e.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(n,a),t.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",o=e.offsetHeight,i=e.offsetWidth,t.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+prefixes.join("hyphens:auto; "),r=e.offsetHeight!=o||e.offsetWidth!=i,document.body.removeChild(n),n.removeChild(e),r}catch(n){return!1}}function o(n,e){try{var t=createElement("div"),o=createElement("span"),i=t.style,r=0,a=!1,d=!1,l=!1,m=document.body.firstElementChild||document.body.firstChild;return i.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",t.appendChild(o),document.body.insertBefore(t,m),o.innerHTML="mm",r=o.offsetHeight,o.innerHTML="m"+n+"m",d=o.offsetHeight>r,e?(o.innerHTML="m<br />m",r=o.offsetWidth,o.innerHTML="m"+n+"m",l=o.offsetWidth>r):l=!0,!0===d&&!0===l&&(a=!0),document.body.removeChild(t),t.removeChild(o),a}catch(n){return!1}}function i(n){try{var e,t=createElement("input"),o=createElement("div"),i=!1,r=document.body.firstElementChild||document.body.firstChild;o.innerHTML="lebowski"+n+"lebowski",document.body.insertBefore(o,r),document.body.insertBefore(t,o),t.setSelectionRange?(t.focus(),t.setSelectionRange(0,0)):t.createTextRange&&(e=t.createTextRange(),e.collapse(!0),e.moveEnd("character",0),e.moveStart("character",0),e.select());try{window.find?i=window.find("lebowskilebowski"):(e=window.self.document.body.createTextRange(),i=e.findText("lebowskilebowski"))}catch(n){i=!1}return document.body.removeChild(o),document.body.removeChild(t),i}catch(n){return!1}}if(!document.body&&!document.getElementsByTagName("body")[0])return void setTimeout(n,e);addTest("csshyphens",function(){if(!testAllProps("hyphens","auto",!0))return!1;try{return t()}catch(n){return!1}}),addTest("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}catch(n){return!1}}),addTest("softhyphensfind",function(){try{return i("&#173;")&&i("&#8203;")}catch(n){return!1}})}var e=300;setTimeout(n,e)}),/*!
  {
    "name": "CSS :invalid pseudo-class",
    "property": "cssinvalid",
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid"
    }]
  }
  !*/
Modernizr.addTest("cssinvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(n){var e=createElement("input");return e.required=!0,n.appendChild(e),e.clientWidth>10})}),/*!
  {
    "name": "CSS :last-child pseudo-selector",
    "caniuse": "css-sel3",
    "property": "lastchild",
    "tags": ["css"],
    "builderAliases": ["css_lastchild"],
    "notes": [{
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/pull/304"
    }]
  }
  !*/
testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(n){Modernizr.addTest("lastchild",n.lastChild.offsetWidth>n.firstChild.offsetWidth)},2),/*!
  {
    "name": "CSS Mask",
    "caniuse": "css-masks",
    "property": "cssmask",
    "tags": ["css"],
    "builderAliases": ["css_mask"],
    "notes": [
      {
        "name": "Webkit blog on CSS Masks",
        "href": "https://webkit.org/blog/181/css-masks/"
      },
      {
        "name": "Safari Docs",
        "href": "https://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html"
      },
      {
        "name": "CSS SVG mask",
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/mask"
      },
      {
        "name": "Combine with clippaths for awesomeness",
        "href": "https://generic.cx/for/webkit/test.html"
      }
    ]
  }
  !*/
Modernizr.addTest("cssmask",testAllProps("maskRepeat","repeat-x",!0)),/*!
  {
    "name": "CSS Media Queries",
    "caniuse": "css-mediaqueries",
    "property": "mediaqueries",
    "tags": ["css"],
    "builderAliases": ["css_mediaqueries"]
  }
  !*/
Modernizr.addTest("mediaqueries",mq("only all")),/*!
  {
    "name": "CSS Multiple Backgrounds",
    "caniuse": "multibackgrounds",
    "property": "multiplebgs",
    "tags": ["css"]
  }
  !*/
Modernizr.addTest("multiplebgs",function(){var n=createElement("a").style;return n.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(n.background)}),/*!
  {
    "name": "CSS :nth-child pseudo-selector",
    "caniuse": "css-sel3",
    "property": "nthchild",
    "tags": ["css"],
    "notes": [
      {
        "name": "Related Github Issue",
        "href": "https://github.com/Modernizr/Modernizr/pull/685"
      },
      {
        "name": "Sitepoint :nth-child documentation",
        "href": "http://reference.sitepoint.com/css/pseudoclass-nthchild"
      }
    ],
    "authors": ["@emilchristensen"],
    "warnings": ["Known false negative in Safari 3.1 and Safari 3.2.2"]
  }
  !*/
testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(n){for(var e=n.getElementsByTagName("div"),t=!0,o=0;o<5;o++)t=t&&e[o].offsetWidth===o%2+1;Modernizr.addTest("nthchild",t)},5),/*!
  {
    "name": "CSS Object Fit",
    "caniuse": "object-fit",
    "property": "objectfit",
    "tags": ["css"],
    "builderAliases": ["css_objectfit"],
    "notes": [{
      "name": "Opera Article on Object Fit",
      "href": "https://dev.opera.com/articles/css3-object-fit-object-position/"
    }]
  }
  !*/
Modernizr.addTest("objectfit",!!prefixed("objectFit"),{aliases:["object-fit"]}),/*!
  {
    "name": "CSS Opacity",
    "caniuse": "css-opacity",
    "property": "opacity",
    "tags": ["css"]
  }
  !*/
Modernizr.addTest("opacity",function(){var n=createElement("a").style;return n.cssText=prefixes.join("opacity:.55;"),/^0.55$/.test(n.opacity)}),/*!
  {
    "name": "CSS Overflow Scrolling",
    "property": "overflowscrolling",
    "tags": ["css"],
    "builderAliases": ["css_overflow_scrolling"],
    "warnings": ["Introduced in iOS5b2. API is subject to change."],
    "notes": [{
      "name": "Article on iOS overflow scrolling",
      "href": "https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/"
    }]
  }
  !*/
Modernizr.addTest("overflowscrolling",testAllProps("overflowScrolling","touch",!0)),/*!
  {
    "name": "CSS Pointer Events",
    "caniuse": "pointer-events",
    "property": "csspointerevents",
    "authors": ["ausi"],
    "tags": ["css"],
    "builderAliases": ["css_pointerevents"],
    "notes": [
      {
        "name": "MDN Docs",
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events"
      },{
        "name": "Test Project Page",
        "href": "https://ausi.github.com/Feature-detection-technique-for-pointer-events/"
      },{
        "name": "Test Project Wiki",
        "href": "https://github.com/ausi/Feature-detection-technique-for-pointer-events/wiki"
      },
      {
        "name": "Related Github Issue",
        "href": "https://github.com/Modernizr/Modernizr/issues/80"
      }
    ]
  }
  !*/
Modernizr.addTest("csspointerevents",function(){var n=createElement("a").style;return n.cssText="pointer-events:auto","auto"===n.pointerEvents}),/*!
  {
    "name": "CSS position: sticky",
    "property": "csspositionsticky",
    "tags": ["css"],
    "builderAliases": ["css_positionsticky"],
    "notes": [{
      "name": "Chrome bug report",
      "href":"https://code.google.com/p/chromium/issues/detail?id=322972"
    }],
    "warnings": [ "using position:sticky on anything but top aligned elements is buggy in Chrome < 37 and iOS <=7+" ]
  }
  !*/
Modernizr.addTest("csspositionsticky",function(){var n="position:",e=createElement("a"),t=e.style;return t.cssText=n+prefixes.join("sticky;"+n).slice(0,-n.length),-1!==t.position.indexOf("sticky")}),/*!
  {
    "name": "CSS Generated Content Animations",
    "property": "csspseudoanimations",
    "tags": ["css"]
  }
  !*/
Modernizr.addTest("csspseudoanimations",function(){var n=!1;if(!Modernizr.cssanimations||!window.getComputedStyle)return n;var e=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(e,function(e){n="10px"===window.getComputedStyle(e,":before").getPropertyValue("font-size")}),n}),/*!
  {
    "name": "CSS Transitions",
    "property": "csstransitions",
    "caniuse": "css-transitions",
    "tags": ["css"]
  }
  !*/
Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),/*!
  {
    "name": "CSS Generated Content Transitions",
    "property": "csspseudotransitions",
    "tags": ["css"]
  }
  !*/
Modernizr.addTest("csspseudotransitions",function(){var n=!1;if(!Modernizr.csstransitions||!window.getComputedStyle)return n;var e='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(e,function(e){window.getComputedStyle(e,":before").getPropertyValue("font-size"),e.className+="trigger",n="5px"===window.getComputedStyle(e,":before").getPropertyValue("font-size")}),n}),/*!
  {
    "name": "CSS Reflections",
    "caniuse": "css-reflections",
    "property": "cssreflections",
    "tags": ["css"]
  }
  !*/
Modernizr.addTest("cssreflections",testAllProps("boxReflect","above",!0)),/*!
  {
    "name": "CSS Regions",
    "caniuse": "css-regions",
    "authors": ["Mihai Balan"],
    "property": "regions",
    "tags": ["css"],
    "builderAliases": ["css_regions"],
    "notes": [{
      "name": "W3C Specification",
      "href": "https://www.w3.org/TR/css3-regions/"
    }]
  }
  !*/
Modernizr.addTest("regions",function(){if(isSVG)return!1;var n=prefixed("flowFrom"),e=prefixed("flowInto"),t=!1;if(!n||!e)return t;var o=createElement("iframe"),i=createElement("div"),r=createElement("div"),a=createElement("div"),d="modernizr_flow_for_regions_check";r.innerText="M",i.style.cssText="top: 150px; left: 150px; padding: 0px;",a.style.cssText="width: 50px; height: 50px; padding: 42px;",a.style[n]=d,i.appendChild(r),i.appendChild(a),docElement.appendChild(i);var l,m,x=r.getBoundingClientRect();return r.style[e]=d,l=r.getBoundingClientRect(),m=parseInt(l.left-x.left,10),docElement.removeChild(i),42==m?t=!0:(docElement.appendChild(o),x=o.getBoundingClientRect(),o.style[e]=d,l=o.getBoundingClientRect(),x.height>0&&x.height!==l.height&&0===l.height&&(t=!0)),r=a=i=o=undefined,t}),/*!
  {
    "name": "CSS Font rem Units",
    "caniuse": "rem",
    "authors": ["nsfmc"],
    "property": "cssremunit",
    "tags": ["css"],
    "builderAliases": ["css_remunit"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://www.w3.org/TR/css3-values/#relative0"
    },{
      "name": "Font Size with rem by Jonathan Snook",
      "href": "http://snook.ca/archives/html_and_css/font-size-with-rem"
    }]
  }
  !*/
Modernizr.addTest("cssremunit",function(){var n=createElement("a").style;try{n.fontSize="3rem"}catch(n){}return/rem/.test(n.fontSize)}),/*!
  {
    "name": "CSS UI Resize",
    "property": "cssresize",
    "caniuse": "css-resize",
    "tags": ["css"],
    "builderAliases": ["css_resize"],
    "notes": [{
      "name": "W3C Specification",
      "href": "https://www.w3.org/TR/css3-ui/#resize"
    },{
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en/CSS/resize"
    }]
  }
  !*/
Modernizr.addTest("cssresize",testAllProps("resize","both",!0)),/*!
  {
    "name": "CSS rgba",
    "caniuse": "css3-colors",
    "property": "rgba",
    "tags": ["css"],
    "notes": [{
      "name": "CSSTricks Tutorial",
      "href": "https://css-tricks.com/rgba-browser-support/"
    }]
  }
  !*/
Modernizr.addTest("rgba",function(){var n=createElement("a").style;return n.cssText="background-color:rgba(150,255,150,.5)",(""+n.backgroundColor).indexOf("rgba")>-1}),/*!
  {
    "name": "CSS Stylable Scrollbars",
    "property": "cssscrollbar",
    "tags": ["css"],
    "builderAliases": ["css_scrollbars"]
  }
  !*/
testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+prefixes.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(n){Modernizr.addTest("cssscrollbar","scrollWidth"in n&&30==n.scrollWidth)}),/*!
  {
    "name": "Scroll Snap Points",
    "property": "scrollsnappoints",
    "notes": [{
      "name": "Setting native-like scrolling offsets in CSS with Scrolling Snap Points",
      "href": "http://generatedcontent.org/post/66817675443/setting-native-like-scrolling-offsets-in-css-with"
    },{
      "name": "MDN Article",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap_Points"
    }],
    "polyfills": ["scrollsnap"]
  }
  !*/
Modernizr.addTest("scrollsnappoints",testAllProps("scrollSnapType")),/*!
  {
    "name": "CSS Shapes",
    "property": "shapes",
    "tags": ["css"],
    "notes": [{
      "name": "CSS Shapes W3C specification",
      "href": "https://www.w3.org/TR/css-shapes"
    },{
      "name": "Examples from Adobe",
      "href": "http://webplatform.adobe.com/shapes/"
    }, {
      "name": "Samples showcasing uses of Shapes",
      "href": "http://codepen.io/collection/qFesk"
    }]
  }
  !*/
Modernizr.addTest("shapes",testAllProps("shapeOutside","content-box",!0)),/*!
  {
    "name": "CSS general sibling selector",
    "caniuse": "css-sel3",
    "property": "siblinggeneral",
    "tags": ["css"],
    "notes": [{
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/pull/889"
    }]
  }
  !*/
Modernizr.addTest("siblinggeneral",function(){return testStyles("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(n){return 200==n.lastChild.offsetWidth},2)}),/*!
  {
    "name": "CSS Subpixel Fonts",
    "property": "subpixelfont",
    "tags": ["css"],
    "builderAliases": ["css_subpixelfont"],
    "authors": [
      "@derSchepp",
      "@gerritvanaaken",
      "@rodneyrehm",
      "@yatil",
      "@ryanseddon"
    ],
    "notes": [{
      "name": "Origin Test",
      "href": "https://github.com/gerritvanaaken/subpixeldetect"
    }]
  }
  !*/
testStyles("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(n){var e=n.firstChild;e.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",!!window.getComputedStyle&&"44px"!==window.getComputedStyle(e,null).getPropertyValue("width"))},1,["subpixel"]),/*!
  {
    "name": "CSS :target pseudo-class",
    "caniuse": "css-sel3",
    "property": "target",
    "tags": ["css"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:target"
    }],
    "authors": ["@zachleat"],
    "warnings": ["Opera Mini supports :target but doesn't update the hash for anchor links."]
  }
  !*/
Modernizr.addTest("target",function(){var n=window.document;if(!("querySelectorAll"in n))return!1;try{return n.querySelectorAll(":target"),!0}catch(n){return!1}}),/*!
  {
    "name": "CSS text-align-last",
    "property": "textalignlast",
    "tags": ["css"],
    "knownBugs": ["IE does not support the 'start' or 'end' values."],
    "notes": [{
        "name": "Quicksmode",
        "href": "http://www.quirksmode.org/css/text/textalignlast.html"
      },{
        "name": "MDN",
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last"
      }]
  }
  !*/
Modernizr.addTest("textalignlast",testAllProps("textAlignLast")),/*!
  {
    "name": "CSS textshadow",
    "property": "textshadow",
    "caniuse": "css-textshadow",
    "tags": ["css"],
    "knownBugs": ["FF3.0 will false positive on this test"]
  }
  !*/
Modernizr.addTest("textshadow",testProp("textShadow","1px 1px")),/*!
  {
    "name": "CSS Transforms",
    "property": "csstransforms",
    "caniuse": "transforms2d",
    "tags": ["css"]
  }
  !*/
Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&testAllProps("transform","scale(1)",!0)}),/*!
  {
    "name": "CSS Transforms Level 2",
    "property": "csstransformslevel2",
    "authors": ["rupl"],
    "tags": ["css"],
    "notes": [{
      "name": "CSSWG Draft Spec",
      "href": "https://drafts.csswg.org/css-transforms-2/"
    }]
  }
  !*/
Modernizr.addTest("csstransformslevel2",function(){return testAllProps("translate","45px",!0)}),/*!
  {
    "name": "CSS Transforms 3D",
    "property": "csstransforms3d",
    "caniuse": "transforms3d",
    "tags": ["css"],
    "warnings": [
      "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
    ]
  }
  !*/
Modernizr.addTest("csstransforms3d",function(){var n=!!testAllProps("perspective","1px",!0),e=Modernizr._config.usePrefixes;if(n&&(!e||"webkitPerspective"in docElement.style)){var t;Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",e&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",testStyles("#modernizr{width:0;height:0}"+t,function(e){n=7===e.offsetWidth&&18===e.offsetHeight})}return n}),/*!
  {
    "name": "CSS Transform Style preserve-3d",
    "property": "preserve3d",
    "authors": ["denyskoch", "aFarkas"],
    "tags": ["css"],
    "notes": [{
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
    },{
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/1748"
    }]
  }
  !*/
Modernizr.addTest("preserve3d",function(){var n,e,t=window.CSS,o=!1;return!!(t&&t.supports&&t.supports("(transform-style: preserve-3d)"))||(n=createElement("a"),e=createElement("a"),n.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",e.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",n.appendChild(e),docElement.appendChild(n),o=e.getBoundingClientRect(),docElement.removeChild(n),o=o.width&&o.width<4)}),/*!
  {
    "name": "CSS user-select",
    "property": "userselect",
    "caniuse": "user-select-none",
    "authors": ["ryan seddon"],
    "tags": ["css"],
    "builderAliases": ["css_userselect"],
    "notes": [{
      "name": "Related Modernizr Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/250"
    }]
  }
  !*/
Modernizr.addTest("userselect",testAllProps("userSelect","none",!0)),/*!
  {
    "name": "CSS :valid pseudo-class",
    "property": "cssvalid",
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid"
    }]
  }
  !*/
Modernizr.addTest("cssvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(n){var e=createElement("input");return n.appendChild(e),e.clientWidth>10})}),/*!
  {
    "name": "CSS vh unit",
    "property": "cssvhunit",
    "caniuse": "viewport-units",
    "tags": ["css"],
    "builderAliases": ["css_vhunit"],
    "notes": [{
      "name": "Related Modernizr Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/572"
    },{
      "name": "Similar JSFiddle",
      "href": "https://jsfiddle.net/FWeinb/etnYC/"
    }]
  }
  !*/
testStyles("#modernizr { height: 50vh; }",function(n){var e=parseInt(window.innerHeight/2,10),t=parseInt(computedStyle(n,null,"height"),10);Modernizr.addTest("cssvhunit",t==e)}),/*!
  {
    "name": "CSS vmax unit",
    "property": "cssvmaxunit",
    "caniuse": "viewport-units",
    "tags": ["css"],
    "builderAliases": ["css_vmaxunit"],
    "notes": [{
      "name": "Related Modernizr Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/572"
    },{
      "name": "JSFiddle Example",
      "href": "https://jsfiddle.net/glsee/JDsWQ/4/"
    }]
  }
  !*/
testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(n){var e=n.childNodes[2],t=n.childNodes[1],o=n.childNodes[0],i=parseInt((t.offsetWidth-t.clientWidth)/2,10),r=o.clientWidth/100,a=o.clientHeight/100,d=parseInt(50*Math.max(r,a),10),l=parseInt(computedStyle(e,null,"width"),10);Modernizr.addTest("cssvmaxunit",roundedEquals(d,l)||roundedEquals(d,l-i))},3),/*!
  {
    "name": "CSS vmin unit",
    "property": "cssvminunit",
    "caniuse": "viewport-units",
    "tags": ["css"],
    "builderAliases": ["css_vminunit"],
    "notes": [{
      "name": "Related Modernizr Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/572"
    },{
      "name": "JSFiddle Example",
      "href": "https://jsfiddle.net/glsee/JRmdq/8/"
    }]
  }
  !*/
testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(n){var e=n.childNodes[2],t=n.childNodes[1],o=n.childNodes[0],i=parseInt((t.offsetWidth-t.clientWidth)/2,10),r=o.clientWidth/100,a=o.clientHeight/100,d=parseInt(50*Math.min(r,a),10),l=parseInt(computedStyle(e,null,"width"),10);Modernizr.addTest("cssvminunit",roundedEquals(d,l)||roundedEquals(d,l-i))},3),/*!
  {
    "name": "CSS vw unit",
    "property": "cssvwunit",
    "caniuse": "viewport-units",
    "tags": ["css"],
    "builderAliases": ["css_vwunit"],
    "notes": [{
      "name": "Related Modernizr Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/572"
    },{
      "name": "JSFiddle Example",
      "href": "https://jsfiddle.net/FWeinb/etnYC/"
    }]
  }
  !*/
testStyles("#modernizr { width: 50vw; }",function(n){var e=parseInt(window.innerWidth/2,10),t=parseInt(computedStyle(n,null,"width"),10);Modernizr.addTest("cssvwunit",t==e)}),/*!
  {
    "name": "will-change",
    "property": "willchange",
    "notes": [{
      "name": "Spec",
      "href": "https://drafts.csswg.org/css-will-change/"
    }]
  }
  !*/
Modernizr.addTest("willchange","willChange"in docElement.style),/*!
  {
    "name": "CSS wrap-flow",
    "property": "wrapflow",
    "tags": ["css"],
    "notes": [
      {
        "name": "W3C Exclusions spec",
        "href": "https://www.w3.org/TR/css3-exclusions"
      },
      {
        "name": "Example by Adobe",
        "href": "http://html.adobe.com/webstandards/cssexclusions"
      }
    ]
  }
  !*/
Modernizr.addTest("wrapflow",function(){var n=prefixed("wrapFlow");if(!n||isSVG)return!1;var e=n.replace(/([A-Z])/g,function(n,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-"),t=createElement("div"),o=createElement("div"),i=createElement("span");o.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+e+":end;",i.innerText="X",t.appendChild(o),t.appendChild(i),docElement.appendChild(t);var r=i.offsetLeft;return docElement.removeChild(t),o=i=t=undefined,150==r}),/*!
  {
    "name": "Custom protocol handler",
    "property": "customprotocolhandler",
    "authors": ["Ben Schwarz"],
    "builderAliases": ["custom_protocol_handler"],
    "notes": [{
      "name": "WHATWG overview",
      "href": "https://developers.whatwg.org/timers.html#custom-handlers"
    },{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.registerProtocolHandler"
    }],
    "warnings": [],
    "polyfills": []
  }
  !*/
Modernizr.addTest("customprotocolhandler",function(){if(!navigator.registerProtocolHandler)return!1;try{navigator.registerProtocolHandler("thisShouldFail")}catch(n){return n instanceof TypeError}return!1}),/*!
  {
    "name": "CustomEvent",
    "property": "customevent",
    "tags": ["customevent"],
    "authors": ["Alberto Elias"],
    "notes": [{
      "name": "W3C DOM reference",
      "href": "https://www.w3.org/TR/DOM-Level-3-Events/#interface-CustomEvent"
    }, {
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en/docs/Web/API/CustomEvent"
    }],
    "polyfills": ["eventlistener"]
  }
  !*/
Modernizr.addTest("customevent","CustomEvent"in window&&"function"==typeof window.CustomEvent),/*!
  {
    "name": "Dart",
    "property": "dart",
    "authors": ["Theodoor van Donge"],
    "notes": [{
      "name": "Language website",
      "href": "https://www.dartlang.org/"
    }]
  }
  !*/
Modernizr.addTest("dart",!!prefixed("startDart",navigator)),/*!
  {
    "name": "DataView",
    "property": "dataview",
    "authors": ["Addy Osmani"],
    "builderAliases": ["dataview_api"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en/JavaScript_typed_arrays/DataView"
    }],
    "polyfills": ["jdataview"]
  }
  !*/
Modernizr.addTest("dataview","undefined"!=typeof DataView&&"getFloat64"in DataView.prototype),/*!
  {
    "name": "classList",
    "caniuse": "classlist",
    "property": "classlist",
    "tags": ["dom"],
    "builderAliases": ["dataview_api"],
    "notes": [{
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en/DOM/element.classList"
    }]
  }
  !*/
Modernizr.addTest("classlist","classList"in docElement),/*!
  {
    "name": "createElement with Attributes",
    "property": ["createelementattrs", "createelement-attrs"],
    "tags": ["dom"],
    "builderAliases": ["dom_createElement_attrs"],
    "authors": ["James A. Rosen"],
    "notes": [{
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/258"
    }]
  }
  !*/
Modernizr.addTest("createelementattrs",function(){try{return"test"==createElement('<input name="test" />').getAttribute("name")}catch(n){return!1}},{aliases:["createelement-attrs"]}),/*!
  {
    "name": "dataset API",
    "caniuse": "dataset",
    "property": "dataset",
    "tags": ["dom"],
    "builderAliases": ["dom_dataset"],
    "authors": ["@phiggins42"]
  }
  !*/
Modernizr.addTest("dataset",function(){var n=createElement("div");return n.setAttribute("data-a-b","c"),!(!n.dataset||"c"!==n.dataset.aB)}),/*!
  {
    "name": "Document Fragment",
    "property": "documentfragment",
    "notes": [{
      "name": "W3C DOM Level 1 Reference",
      "href": "https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-B63ED1A3"
    }, {
      "name": "SitePoint Reference",
      "href": "http://reference.sitepoint.com/javascript/DocumentFragment"
    }, {
      "name": "QuirksMode Compatibility Tables",
      "href": "http://www.quirksmode.org/m/w3c_core.html#t112"
    }],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "knownBugs": ["false-positive on Blackberry 9500, see QuirksMode note"],
    "tags": []
  }
  !*/
Modernizr.addTest("documentfragment",function(){return"createDocumentFragment"in document&&"appendChild"in docElement}),/*!
  {
    "name": "[hidden] Attribute",
    "property": "hidden",
    "tags": ["dom"],
    "notes": [{
      "name": "WHATWG: The hidden attribute",
      "href": "https://developers.whatwg.org/editing.html#the-hidden-attribute"
    }, {
      "name": "original implementation of detect code",
      "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L38"
    }],
    "polyfills": ["html5shiv"],
    "authors": ["Ron Waldon (@jokeyrhyme)"]
  }
  !*/
Modernizr.addTest("hidden","hidden"in createElement("a")),/*!
  {
    "name": "microdata",
    "property": "microdata",
    "tags": ["dom"],
    "builderAliases": ["dom_microdata"],
    "notes": [{
      "name": "W3 Spec",
      "href": "https://www.w3.org/TR/microdata/"
    }]
  }
  !*/
Modernizr.addTest("microdata","getItems"in document),/*!
  {
    "name": "DOM4 MutationObserver",
    "property": "mutationobserver",
    "caniuse": "mutationobserver",
    "tags": ["dom"],
    "authors": ["Karel Sedláček (@ksdlck)"],
    "polyfills": ["mutationobservers"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"
    }]
  }
  !*/
Modernizr.addTest("mutationobserver",!!window.MutationObserver||!!window.WebKitMutationObserver),/*!
  {
    "authors": ["Rick Byers"],
    "name": "Passive event listeners",
    "notes": [
      {
        "name": "WHATWG specification",
        "href": "https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-passive"
      },
      {
        "name": "WICG explainer",
        "href": "https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md"
      }
    ],
    "property": "passiveeventlisteners",
    "tags": ["dom"]
  }
  !*/
Modernizr.addTest("passiveeventlisteners",function(){var n=!1;try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,e)}catch(n){}return n}),/*!
  {
    "name": "bdi Element",
    "property": "bdi",
    "notes": [{
      "name": "MDN Overview",
      "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
    }]
  }
  !*/
Modernizr.addTest("bdi",function(){var n=createElement("div"),e=createElement("bdi");e.innerHTML="&#1573;",n.appendChild(e),docElement.appendChild(n);var t="rtl"===computedStyle(e,null,"direction");return docElement.removeChild(n),t});var inputElem=createElement("input"),inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),attrs={};Modernizr.input=function(n){for(var e=0,t=n.length;e<t;e++)attrs[n[e]]=!!(n[e]in inputElem);return attrs.list&&(attrs.list=!(!createElement("datalist")||!window.HTMLDataListElement)),attrs}(inputattrs),/*!
  {
    "name": "datalist Element",
    "caniuse": "datalist",
    "property": "datalistelem",
    "tags": ["elem"],
    "builderAliases": ["elem_datalist"],
    "warnings": ["This test is a dupe of Modernizr.input.list. Only around for legacy reasons."],
    "notes": [{
      "name": "CSS Tricks Article",
      "href": "https://css-tricks.com/15346-relevant-dropdowns-polyfill-for-datalist/"
    },{
      "name": "Mike Taylor Code",
      "href": "https://miketaylr.com/code/datalist.html"
    }]
  }
  !*/
Modernizr.addTest("datalistelem",Modernizr.input.list),/*!
  {
    "name": "details Element",
    "caniuse": "details",
    "property": "details",
    "tags": ["elem"],
    "builderAliases": ["elem_details"],
    "authors": ["@mathias"],
    "notes": [{
      "name": "Mathias' Original",
      "href": "https://mathiasbynens.be/notes/html5-details-jquery#comment-35"
    }]
  }
  !*/
Modernizr.addTest("details",function(){var n,e=createElement("details");return"open"in e&&(testStyles("#modernizr details{display:block}",function(t){t.appendChild(e),e.innerHTML="<summary>a</summary>b",n=e.offsetHeight,e.open=!0,n=n!=e.offsetHeight}),n)}),/*!
  {
    "name": "output Element",
    "property": "outputelem",
    "tags": ["elem"],
    "builderAliases": ["elem_output"],
    "notes": [{
      "name": "WhatWG Spec",
      "href": "https://html.spec.whatwg.org/multipage/forms.html#the-output-element"
    }]
  }
  !*/
Modernizr.addTest("outputelem","value"in createElement("output")),/*!
  {
    "name": "picture Element",
    "property": "picture",
    "tags": ["elem"],
    "authors": ["Scott Jehl", "Mat Marquis"],
    "notes": [{
      "name": "Specification",
      "href": "http://picture.responsiveimages.org"
    },{
      "name": "Relevant spec issue",
      "href": "https://github.com/ResponsiveImagesCG/picture-element/issues/87"
    }]
  }
  !*/
Modernizr.addTest("picture","HTMLPictureElement"in window),/*!
  {
    "name": "progress Element",
    "caniuse": "progress",
    "property": ["progressbar", "meter"],
    "tags": ["elem"],
    "builderAliases": ["elem_progress_meter"],
    "authors": ["Stefan Wallin"]
  }
  !*/
Modernizr.addTest("progressbar",createElement("progress").max!==undefined),Modernizr.addTest("meter",createElement("meter").max!==undefined),/*!
  {
    "name": "ruby, rp, rt Elements",
    "caniuse": "ruby",
    "property": "ruby",
    "tags": ["elem"],
    "builderAliases": ["elem_ruby"],
    "authors": ["Cătălin Mariș"],
    "notes": [{
      "name": "WHATWG Specification",
      "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-ruby-element"
    }]
  }
  !*/
Modernizr.addTest("ruby",function(){function n(n,e){var t;return window.getComputedStyle?t=document.defaultView.getComputedStyle(n,null).getPropertyValue(e):n.currentStyle&&(t=n.currentStyle[e]),t}function e(){docElement.removeChild(t),t=null,o=null,i=null}var t=createElement("ruby"),o=createElement("rt"),i=createElement("rp");return t.appendChild(i),t.appendChild(o),docElement.appendChild(t),"none"==n(i,"display")||"ruby"==n(t,"display")&&"ruby-text"==n(o,"display")||"6pt"==n(i,"fontSize")&&"6pt"==n(o,"fontSize")?(e(),!0):(e(),!1)}),/*!
  {
    "name": "Template Tag",
    "property": "template",
    "tags": ["elem"],
    "notes": [{
      "name": "HTML5Rocks Article",
      "href": "http://www.html5rocks.com/en/tutorials/webcomponents/template/"
    },{
      "name": "W3 Spec",
      "href": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html"
    }]
  }
  !*/
Modernizr.addTest("template","content"in createElement("template")),/*!
  {
    "name": "time Element",
    "property": "time",
    "tags": ["elem"],
    "builderAliases": ["elem_time"],
    "notes": [{
      "name": "WhatWG Spec",
      "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-time-element"
    }]
  }
  !*/
Modernizr.addTest("time","valueAsDate"in createElement("time")),/*!
  {
    "name": "Track element and Timed Text Track",
    "property": ["texttrackapi", "track"],
    "tags": ["elem"],
    "builderAliases": ["elem_track"],
    "authors": ["Addy Osmani"],
    "notes": [{
      "name": "W3 track Element Spec",
      "href": "http://www.w3.org/TR/html5/video.html#the-track-element"
    },{
      "name": "W3 track API Spec",
      "href": "http://www.w3.org/TR/html5/media-elements.html#text-track-api"
    }],
    "warnings": ["While IE10 has implemented the track element, IE10 does not expose the underlying APIs to create timed text tracks by JS (really sad)"]
  }
  !*/
Modernizr.addTest("texttrackapi","function"==typeof createElement("video").addTextTrack),Modernizr.addTest("track","kind"in createElement("track")),/*!
  {
    "name": "Unknown Elements",
    "property": "unknownelements",
    "tags": ["elem"],
    "notes": [{
      "name": "The Story of the HTML5 Shiv",
      "href": "https://www.paulirish.com/2011/the-history-of-the-html5-shiv/"
    }, {
      "name": "original implementation of detect code",
      "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L36"
    }],
    "polyfills": ["html5shiv"],
    "authors": ["Ron Waldon (@jokeyrhyme)"]
  }
  !*/
Modernizr.addTest("unknownelements",function(){var n=createElement("a");return n.innerHTML="<xyz></xyz>",1===n.childNodes.length}),/*!
  {
    "name": "Emoji",
    "property": "emoji"
  }
  !*/
Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var n=window.devicePixelRatio||1,e=12*n,t=createElement("canvas"),o=t.getContext("2d");return o.fillStyle="#f00",o.textBaseline="top",o.font="32px Arial",o.fillText("🐨",0,0),0!==o.getImageData(e,e,1,1).data[0]}),/*!
  {
    "name": "ES5 Array",
    "property": "es5array",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "http://www.ecma-international.org/ecma-262/5.1/"
    }],
    "polyfills": ["es5shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["es5"]
  }
  !*/
Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),/*!
  {
    "name": "ES5 Date",
    "property": "es5date",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "http://www.ecma-international.org/ecma-262/5.1/"
    }],
    "polyfills": ["es5shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["es5"]
  }
  !*/
Modernizr.addTest("es5date",function(){var n=!1;try{n=!!Date.parse("2013-04-12T06:06:37.307Z")}catch(n){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&n)}),/*!
  {
    "name": "ES5 Function",
    "property": "es5function",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "http://www.ecma-international.org/ecma-262/5.1/"
    }],
    "polyfills": ["es5shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["es5"]
  }
  !*/
Modernizr.addTest("es5function",function(){return!(!Function.prototype||!Function.prototype.bind)}),/*!
  {
    "name": "ES5 Object",
    "property": "es5object",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "http://www.ecma-international.org/ecma-262/5.1/"
    }],
    "polyfills": ["es5shim", "es5sham"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["es5"]
  }
  !*/
Modernizr.addTest("es5object",function(){return!!(_keys2.default&&_create2.default&&_getPrototypeOf2.default&&_getOwnPropertyNames2.default&&_isSealed2.default&&_isFrozen2.default&&_isExtensible2.default&&_getOwnPropertyDescriptor2.default&&_defineProperty2.default&&_defineProperties2.default&&_seal2.default&&_freeze2.default&&_preventExtensions2.default)}),/*!
  {
    "name": "ES5 Strict Mode",
    "property": "strictmode",
    "caniuse": "sctrict-mode",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "http://www.ecma-international.org/ecma-262/5.1/"
    }],
    "authors": ["@kangax"],
    "tags": ["es5"],
    "builderAliases": ["es5_strictmode"]
  }
  !*/
Modernizr.addTest("strictmode",function(){return!this}()),/*!
  {
    "name": "ES5 String",
    "property": "es5string",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "http://www.ecma-international.org/ecma-262/5.1/"
    }],
    "polyfills": ["es5shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["es5"]
  }
  !*/
Modernizr.addTest("es5string",function(){return!(!String.prototype||!String.prototype.trim)}),/*!
  {
    "name": "JSON",
    "property": "json",
    "caniuse": "json",
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Glossary/JSON"
    }],
    "polyfills": ["json2"]
  }
  !*/
Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),/*!
  {
    "name": "ES5 Syntax",
    "property": "es5syntax",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "http://www.ecma-international.org/ecma-262/5.1/"
    }, {
      "name": "original implementation of detect code",
      "href": "http://kangax.github.io/es5-compat-table/"
    }],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "warnings": ["This detect uses `eval()`, so CSP may be a problem."],
    "tags": ["es5"]
  }
  !*/
Modernizr.addTest("es5syntax",function(){var value,obj,stringAccess,getter,setter,reservedWords,zeroWidthChars;try{return stringAccess=eval('"foobar"[3] === "b"'),getter=eval("({ get x(){ return 1 } }).x === 1"),eval("({ set x(v){ value = v; } }).x = 1"),setter=1===value,eval("obj = ({ if: 1 })"),reservedWords=1===obj.if,zeroWidthChars=eval("_‌‍ = true"),stringAccess&&getter&&setter&&reservedWords&&zeroWidthChars}catch(n){return!1}}),/*!
  {
    "name": "ES5 Immutable Undefined",
    "property": "es5undefined",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "http://www.ecma-international.org/ecma-262/5.1/"
    }, {
      "name": "original implementation of detect code",
      "href": "http://kangax.github.io/es5-compat-table/"
    }],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["es5"]
  }
  !*/
Modernizr.addTest("es5undefined",function(){var n,e;try{e=window.undefined,window.undefined=12345,n=void 0===window.undefined,window.undefined=e}catch(n){return!1}return n}),/*!
  {
    "name": "ES5",
    "property": "es5",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "http://www.ecma-international.org/ecma-262/5.1/"
    }],
    "polyfills": ["es5shim", "es5sham"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["es5"]
  }
  !*/
Modernizr.addTest("es5",function(){return!!(Modernizr.es5array&&Modernizr.es5date&&Modernizr.es5function&&Modernizr.es5object&&Modernizr.strictmode&&Modernizr.es5string&&Modernizr.json&&Modernizr.es5syntax&&Modernizr.es5undefined)}),/*!
  {
    "name": "ES6 Array",
    "property": "es6array",
    "notes": [{
      "name": "unofficial ECMAScript 6 draft specification",
      "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
    }],
    "polyfills": ["es6shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
    "tags": ["es6"]
  }
  !*/
Modernizr.addTest("es6array",!!(Array.prototype&&Array.prototype.copyWithin&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.keys&&Array.prototype.entries&&Array.prototype.values&&_from2.default&&_of2.default)),/*!
  {
    "name": "ES6 Collections",
    "property": "es6collections",
    "notes": [{
      "name": "unofficial ECMAScript 6 draft specification",
      "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
    }],
    "polyfills": ["es6shim", "weakmap"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
    "tags": ["es6"]
  }
  !*/
Modernizr.addTest("es6collections",!!(window.Map&&window.Set&&window.WeakMap&&window.WeakSet)),/*!
  {
    "name": "ES5 String.prototype.contains",
    "property": "contains",
    "authors": ["Robert Kowalski"],
    "tags": ["es6"]
  }
  !*/
Modernizr.addTest("contains",is(String.prototype.contains,"function")),/*!
  {
    "name": "ES6 Generators",
    "property": "generators",
    "authors": ["Michael Kachanovskyi"],
    "tags": ["es6"]
  }
  !*/
Modernizr.addTest("generators",function(){try{new Function("function* test() {}")()}catch(n){return!1}return!0}),/*!
  {
    "name": "ES6 Math",
    "property": "es6math",
    "notes": [{
      "name": "unofficial ECMAScript 6 draft specification",
      "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
    }],
    "polyfills": ["es6shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
    "tags": ["es6"]
  }
  !*/
Modernizr.addTest("es6math",!!(Math&&_clz2.default&&_cbrt2.default&&_imul2.default&&_sign2.default&&_log4.default&&_log2.default&&_log1p2.default&&_expm2.default&&_cosh2.default&&_sinh2.default&&_tanh2.default&&_acosh2.default&&_asinh2.default&&_atanh2.default&&_hypot2.default&&_trunc2.default&&_fround2.default)),/*!
  {
    "name": "ES6 Number",
    "property": "es6number",
    "notes": [{
      "name": "unofficial ECMAScript 6 draft specification",
      "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
    }],
    "polyfills": ["es6shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
    "tags": ["es6"]
  }
  !*/
Modernizr.addTest("es6number",!!(_isFinite2.default&&_isInteger2.default&&_isSafeInteger2.default&&_isNan2.default&&_parseInt2.default&&_parseFloat2.default&&(0,_isInteger2.default)(_maxSafeInteger2.default)&&(0,_isInteger2.default)(_minSafeInteger2.default)&&(0,_isFinite2.default)(_epsilon2.default))),/*!
  {
    "name": "ES6 Object",
    "property": "es6object",
    "notes": [{
      "name": "unofficial ECMAScript 6 draft specification",
      "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
    }],
    "polyfills": ["es6shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
    "tags": ["es6"]
  }
  !*/
Modernizr.addTest("es6object",!!(_assign2.default&&_is2.default&&_setPrototypeOf2.default)),/*!
  {
    "name": "ES6 Promises",
    "property": "promises",
    "caniuse": "promises",
    "polyfills": ["es6promises"],
    "authors": ["Krister Kari", "Jake Archibald"],
    "tags": ["es6"],
    "notes": [{
      "name": "The ES6 promises spec",
      "href": "https://github.com/domenic/promises-unwrapping"
    },{
      "name": "Chromium dashboard - ES6 Promises",
      "href": "https://www.chromestatus.com/features/5681726336532480"
    },{
      "name": "JavaScript Promises: There and back again - HTML5 Rocks",
      "href": "http://www.html5rocks.com/en/tutorials/es6/promises/"
    }]
  }
  !*/
Modernizr.addTest("promises",function(){return"Promise"in window&&"resolve"in window.Promise&&"reject"in window.Promise&&"all"in window.Promise&&"race"in window.Promise&&function(){var n;return new window.Promise(function(e){n=e}),"function"==typeof n}()}),/*!
  {
    "name": "ES6 String",
    "property": "es6string",
    "notes": [{
      "name": "unofficial ECMAScript 6 draft specification",
      "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
    }],
    "polyfills": ["es6shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
    "tags": ["es6"]
  }
  !*/
Modernizr.addTest("es6string",!!(_fromCodePoint2.default&&_raw2.default&&String.prototype.codePointAt&&String.prototype.repeat&&String.prototype.startsWith&&String.prototype.endsWith&&String.prototype.includes)),/*!
  {
    "name": "Orientation and Motion Events",
    "property": ["devicemotion", "deviceorientation"],
    "caniuse": "deviceorientation",
    "notes": [{
      "name": "W3C Editor's Draft",
      "href": "http://w3c.github.io/deviceorientation/spec-source-orientation.html"
    },{
      "name": "Implementation by iOS Safari (Orientation)",
      "href": "http://goo.gl/fhce3"
    },{
      "name": "Implementation by iOS Safari (Motion)",
      "href": "http://goo.gl/rLKz8"
    }],
    "authors": ["Shi Chuan"],
    "tags": ["event"],
    "builderAliases": ["event_deviceorientation_motion"]
  }
  !*/
Modernizr.addTest("devicemotion","DeviceMotionEvent"in window),Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in window),/*!
  {
    "name": "onInput Event",
    "property": "oninput",
    "notes": [{
      "name": "MDN article",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput"
    },{
      "name": "WHATWG spec",
      "href": "https://html.spec.whatwg.org/multipage/forms.html#common-input-element-attributes"
    },{
      "name": "Detecting onInput support",
      "href": "http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support"
    }],
    "authors": ["Patrick Kettner"],
    "tags": ["event"]
  }
  !*/
Modernizr.addTest("oninput",function(){var n,e=createElement("input");if(e.setAttribute("oninput","return"),hasEvent("oninput",docElement)||"function"==typeof e.oninput)return!0;try{var t=document.createEvent("KeyboardEvent");n=!1;var o=function(e){n=!0,e.preventDefault(),e.stopPropagation()};t.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),docElement.appendChild(e),e.addEventListener("input",o,!1),e.focus(),e.dispatchEvent(t),e.removeEventListener("input",o,!1),docElement.removeChild(e)}catch(e){n=!1}return n}),/*!
  {
    "name": "Event Listener",
    "property": "eventlistener",
    "authors": ["Andrew Betts (@triblondon)"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces"
    }],
    "polyfills": ["eventlistener"]
  }
  !*/
Modernizr.addTest("eventlistener","addEventListener"in window),/*!
  {
    "name": "EXIF Orientation",
    "property": "exiforientation",
    "tags": ["image"],
    "builderAliases": ["exif_orientation"],
    "async": true,
    "authors": ["Paul Sayre"],
    "notes": [{
      "name": "Article by Dave Perrett",
      "href": "http://recursive-design.com/blog/2012/07/28/exif-orientation-handling-is-a-ghetto/"
    },{
      "name": "Article by Calvin Hass",
      "href": "http://www.impulseadventure.com/photo/exif-orientation.html"
    }]
  }
  !*/
Modernizr.addAsyncTest(function(){var n=new Image;n.onerror=function(){addTest("exiforientation",!1,{aliases:["exif-orientation"]})},n.onload=function(){addTest("exiforientation",2!==n.width,{aliases:["exif-orientation"]})},n.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="}),/*!
  {
    "name": "File API",
    "property": "filereader",
    "caniuse": "fileapi",
    "notes": [{
      "name": "W3C Working Draft",
      "href": "https://www.w3.org/TR/FileAPI/"
    }],
    "tags": ["file"],
    "builderAliases": ["file_api"],
    "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
  }
  !*/
Modernizr.addTest("filereader",!!(window.File&&window.FileList&&window.FileReader)),/*!
  {
    "name": "Filesystem API",
    "property": "filesystem",
    "caniuse": "filesystem",
    "notes": [{
      "name": "W3 Draft",
      "href": "http://dev.w3.org/2009/dap/file-system/file-dir-sys.html"
    }],
    "authors": ["Eric Bidelman (@ebidel)"],
    "tags": ["file"],
    "builderAliases": ["file_filesystem"],
    "knownBugs": ["The API will be present in Chrome incognito, but will throw an exception. See crbug.com/93417"]
  }
  !*/
Modernizr.addTest("filesystem",!!prefixed("requestFileSystem",window)),/*!
    {
    "name": "Flash",
    "property": "flash",
    "tags": ["flash"],
    "polyfills": ["shumway"]
    }
    !*/
Modernizr.addAsyncTest(function(){var n,e=function(n){docElement.contains(n)||docElement.appendChild(n)},t=function(n){n.fake&&n.parentNode&&n.parentNode.removeChild(n)},o=function(n,e){var t=!!n;if(t&&(t=new Boolean(t),t.blocked="blocked"===n),addTest("flash",function(){return t}),e&&d.contains(e)){for(;e.parentNode!==d;)e=e.parentNode;d.removeChild(e)}};try{n="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(n){}if(!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||n)||isSVG)o(!1);else{var i,r,a=createElement("embed"),d=getBody();if(a.type="application/x-shockwave-flash",d.appendChild(a),!("Pan"in a||n))return e(d),o("blocked",a),void t(d);i=function(){if(e(d),!docElement.contains(d))return d=document.body||d,a=createElement("embed"),a.type="application/x-shockwave-flash",d.appendChild(a),setTimeout(i,1e3);docElement.contains(a)?(r=a.style.cssText,""!==r?o("blocked",a):o(!0,a)):o("blocked"),t(d)},setTimeout(i,10)}}),/*!
  {
    "name": "input[capture] Attribute",
    "property": "capture",
    "tags": ["video", "image", "audio", "media", "attribute"],
    "notes": [{
      "name": "W3C draft: HTML Media Capture",
      "href": "https://www.w3.org/TR/html-media-capture/"
    }]
  }
  !*/
Modernizr.addTest("capture","capture"in createElement("input")),/*!
  {
    "name": "input[file] Attribute",
    "property": "fileinput",
    "caniuse" : "forms",
    "tags": ["file", "forms", "input"],
    "builderAliases": ["forms_fileinput"]
  }
  !*/
Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var n=createElement("input");return n.type="file",!n.disabled}),/*!
  {
    "name": "input[directory] Attribute",
    "property": "directory",
    "authors": ["silverwind"],
    "tags": ["file", "input", "attribute"]
  }
  !*/
Modernizr.addTest("fileinputdirectory",function(){var n=createElement("input");if(n.type="file","directory"in n)return!0;for(var e=0,t=domPrefixes.length;e<t;e++)if(domPrefixes[e]+"directory"in n)return!0;return!1}),/*!
  {
    "name": "input[form] Attribute",
    "property": "formattribute",
    "tags": ["attribute", "forms", "input"],
    "builderAliases": ["forms_formattribute"]
  }
  !*/
Modernizr.addTest("formattribute",function(){var n,e=createElement("form"),t=createElement("input"),o=createElement("div"),i="formtest"+(new Date).getTime(),r=!1;e.id=i;try{t.setAttribute("form",i)}catch(e){document.createAttribute&&(n=document.createAttribute("form"),n.nodeValue=i,t.setAttributeNode(n))}return o.appendChild(e),o.appendChild(t),docElement.appendChild(o),r=e.elements&&1===e.elements.length&&t.form==e,o.parentNode.removeChild(o),r});/*!
  {
    "name": "Form input types",
    "property": "inputtypes",
    "caniuse": "forms",
    "tags": ["forms"],
    "authors": ["Mike Taylor"],
    "polyfills": [
      "jquerytools",
      "webshims",
      "h5f",
      "webforms2",
      "nwxforms",
      "fdslider",
      "html5slider",
      "galleryhtml5forms",
      "jscolor",
      "html5formshim",
      "selectedoptionsjs",
      "formvalidationjs"
    ]
  }
  !*/
var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(n){for(var e,t,o,i=n.length,r=0;r<i;r++)inputElem.setAttribute("type",e=n[r]),o="text"!==inputElem.type&&"style"in inputElem,o&&(inputElem.value="1)",inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),t=document.defaultView,o=t.getComputedStyle&&"textfield"!==t.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(e)||(o=/^(url|email)$/.test(e)?inputElem.checkValidity&&!1===inputElem.checkValidity():"1)"!=inputElem.value)),inputs[n[r]]=!!o;return inputs}(inputtypes),/*!
  {
    "name": "Form Validation",
    "property": "formvalidation",
    "tags": ["forms", "validation", "attribute"],
    "builderAliases": ["forms_validation"]
  }
  !*/
Modernizr.addTest("formvalidation",function(){var n=createElement("form");if(!("checkValidity"in n&&"addEventListener"in n))return!1;if("reportValidity"in n)return!0;var e,t=!1;return Modernizr.formvalidationapi=!0,n.addEventListener("submit",function(n){window.opera&&!window.operamini||n.preventDefault(),n.stopPropagation()},!1),n.innerHTML='<input name="modTest" required="required" /><button></button>',testStyles("#modernizr form{position:absolute;top:-99999em}",function(o){o.appendChild(n),e=n.getElementsByTagName("input")[0],e.addEventListener("invalid",function(n){t=!0,n.preventDefault(),n.stopPropagation()},!1),Modernizr.formvalidationmessage=!!e.validationMessage,n.getElementsByTagName("button")[0].click()}),t}),/*!
  {
    "name": "input[type=\"number\"] Localization",
    "property": "localizednumber",
    "tags": ["forms", "localization", "attribute"],
    "authors": ["Peter Janes"],
    "notes": [{
      "name": "Webkit Bug Tracker Listing",
      "href": "https://bugs.webkit.org/show_bug.cgi?id=42484"
    },{
      "name": "Based on This",
      "href": "https://trac.webkit.org/browser/trunk/LayoutTests/fast/forms/script-tests/input-number-keyoperation.js?rev=80096#L9"
    }],
    "knownBugs": ["Only ever returns true if the browser/OS is configured to use comma as a decimal separator. This is probably fine for most use cases."]
  }
  !*/
Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var n,e=createElement("div"),t=getBody(),o=function(){return docElement.insertBefore(t,docElement.firstElementChild||docElement.firstChild)}();e.innerHTML='<input type="number" value="1.0" step="0.1"/>';var i=e.childNodes[0];o.appendChild(e),i.focus();try{document.execCommand("SelectAll",!1),document.execCommand("InsertText",!1,"1,1")}catch(n){}return n="number"===i.type&&1.1===i.valueAsNumber&&i.checkValidity(),o.removeChild(e),t.fake&&o.parentNode.removeChild(o),n}),/*!
  {
    "name": "placeholder attribute",
    "property": "placeholder",
    "tags": ["forms", "attribute"],
    "builderAliases": ["forms_placeholder"]
  }
  !*/
Modernizr.addTest("placeholder","placeholder"in createElement("input")&&"placeholder"in createElement("textarea")),/*!
  {
    "name": "form#requestAutocomplete()",
    "property": "requestautocomplete",
    "tags": ["form", "forms", "requestAutocomplete", "payments"],
    "notes": [{
      "name": "WHATWG proposed spec",
      "href": "https://wiki.whatwg.org/wiki/RequestAutocomplete"
    }]
  }
  !*/
Modernizr.addTest("requestautocomplete",!!prefixed("requestAutocomplete",createElement("form"))),/*!
  {
    "name": "Fullscreen API",
    "property": "fullscreen",
    "caniuse": "fullscreen",
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en/API/Fullscreen"
    }],
    "polyfills": ["screenfulljs"],
    "builderAliases": ["fullscreen_api"]
  }
  !*/
Modernizr.addTest("fullscreen",!(!prefixed("exitFullscreen",document,!1)&&!prefixed("cancelFullScreen",document,!1))),/*!
  {
    "name": "GamePad API",
    "property": "gamepads",
    "authors": ["Eric Bidelman"],
    "tags": ["media"],
    "notes": [{
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/gamepad/"
    },{
      "name": "HTML5 Rocks tutorial",
      "href": "http://www.html5rocks.com/en/tutorials/doodles/gamepad/#toc-featuredetect"
    }],
    "warnings": [],
    "polyfills": []
  }
  !*/
Modernizr.addTest("gamepads",!!prefixed("getGamepads",navigator)),/*!
  {
    "name": "Geolocation API",
    "property": "geolocation",
    "caniuse": "geolocation",
    "tags": ["media"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
    }],
    "polyfills": [
      "joshuabell-polyfill",
      "webshims",
      "geo-location-javascript",
      "geolocation-api-polyfill"
    ]
  }
  !*/
Modernizr.addTest("geolocation","geolocation"in navigator),/*!
  {
    "name": "Hashchange event",
    "property": "hashchange",
    "caniuse": "hashchange",
    "tags": ["history"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"
    }],
    "polyfills": [
      "jquery-hashchange",
      "moo-historymanager",
      "jquery-ajaxy",
      "hasher",
      "shistory"
    ]
  }
  !*/
Modernizr.addTest("hashchange",function(){return!1!==hasEvent("hashchange",window)&&(document.documentMode===undefined||document.documentMode>7)}),/*!
  {
    "name": "Hidden Scrollbar",
    "property": "hiddenscroll",
    "authors": ["Oleg Korsunsky"],
    "tags": ["overlay"],
    "notes": [{
      "name": "Overlay Scrollbar description",
      "href": "https://developer.apple.com/library/mac/releasenotes/MacOSX/WhatsNewInOSX/Articles/MacOSX10_7.html#//apple_ref/doc/uid/TP40010355-SW39"
    },{
      "name": "Video example of overlay scrollbars",
      "href": "https://gfycat.com/FoolishMeaslyAtlanticsharpnosepuffer"
    }]
  }
  !*/
Modernizr.addTest("hiddenscroll",function(){return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}",function(n){return n.offsetWidth===n.clientWidth})}),/*!
  {
    "name": "History API",
    "property": "history",
    "caniuse": "history",
    "tags": ["history"],
    "authors": ["Hay Kranen", "Alexander Farkas"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
    }, {
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
    }],
    "polyfills": ["historyjs", "html5historyapi"]
  }
  !*/
Modernizr.addTest("history",function(){var n=navigator.userAgent;return(-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone")||"file:"===location.protocol)&&(window.history&&"pushState"in window.history)}),/*!
  {
    "name": "HTML Imports",
    "notes": [
      {
        "name": "W3C HTML Imports Specification",
        "href": "https://w3c.github.io/webcomponents/spec/imports/"
      },
      {
        "name": "HTML Imports - #include for the web",
        "href": "http://www.html5rocks.com/en/tutorials/webcomponents/imports/"
      }
    ],
    "polyfills": ["polymer-htmlimports"],
    "property": "htmlimports",
    "tags": ["html", "import"]
  }
  !*/
addTest("htmlimports","import"in createElement("link")),/*!
  {
    "name": "IE8 compat mode",
    "property": "ie8compat",
    "authors": ["Erich Ocean"]
  }
  !*/
Modernizr.addTest("ie8compat",!window.addEventListener&&!!document.documentMode&&7===document.documentMode),/*!
  {
    "name": "iframe[sandbox] Attribute",
    "property": "sandbox",
    "tags": ["iframe"],
    "builderAliases": ["iframe_sandbox"],
    "notes": [
    {
      "name": "WhatWG Spec",
      "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-sandbox"
    }],
    "knownBugs": [ "False-positive on Firefox < 29" ]
  }
  !*/
Modernizr.addTest("sandbox","sandbox"in createElement("iframe")),/*!
  {
    "name": "iframe[seamless] Attribute",
    "property": "seamless",
    "tags": ["iframe"],
    "builderAliases": ["iframe_seamless"],
    "notes": [{
      "name": "WhatWG Spec",
      "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-seamless"
    }]
  }
  !*/
Modernizr.addTest("seamless","seamless"in createElement("iframe")),/*!
  {
    "name": "iframe[srcdoc] Attribute",
    "property": "srcdoc",
    "tags": ["iframe"],
    "builderAliases": ["iframe_srcdoc"],
    "notes": [{
      "name": "WhatWG Spec",
      "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-srcdoc"
    }]
  }
  !*/
Modernizr.addTest("srcdoc","srcdoc"in createElement("iframe")),/*!
  {
    "name": "Animated PNG",
    "async": true,
    "property": "apng",
    "tags": ["image"],
    "builderAliases": ["img_apng"],
    "notes": [{
      "name": "Wikipedia Article",
      "href": "https://en.wikipedia.org/wiki/APNG"
    }]
  }
  !*/
Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var n=new Image,e=createElement("canvas"),t=e.getContext("2d");n.onload=function(){addTest("apng",function(){return void 0!==e.getContext&&(t.drawImage(n,0,0),0===t.getImageData(0,0,1,1).data[3])})},n.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),/*!
  {
    "name": "Image crossOrigin",
    "property": "imgcrossorigin",
    "notes": [{
      "name": "Cross Domain Images and the Tainted Canvas",
      "href": "https://blog.codepen.io/2013/10/08/cross-domain-images-tainted-canvas/"
    }]
  }
  !*/
Modernizr.addTest("imgcrossorigin","crossOrigin"in createElement("img")),/*!
  {
    "name": "JPEG 2000",
    "async": true,
    "aliases": ["jpeg-2000", "jpg2"],
    "property": "jpeg2000",
    "tags": ["image"],
    "authors": ["@eric_wvgg"],
    "notes": [{
      "name": "Wikipedia Article",
      "href": "https://en.wikipedia.org/wiki/JPEG_2000"
    }]
  }
  !*/
Modernizr.addAsyncTest(function(){var n=new Image;n.onload=n.onerror=function(){addTest("jpeg2000",1==n.width)},n.src="data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="}),/*!
  {
    "name": "JPEG XR (extended range)",
    "async": true,
    "aliases": ["jpeg-xr"],
    "property": "jpegxr",
    "tags": ["image"],
    "notes": [{
      "name": "Wikipedia Article",
      "href": "https://en.wikipedia.org/wiki/JPEG_XR"
    }]
  }
  !*/
Modernizr.addAsyncTest(function(){var n=new Image;n.onload=n.onerror=function(){addTest("jpegxr",1==n.width,{aliases:["jpeg-xr"]})},n.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="}),/*!
  {
    "name": "sizes attribute",
    "async": true,
    "property": "sizes",
    "tags": ["image"],
    "authors": ["Mat Marquis"],
    "notes": [{
      "name": "Spec",
      "href": "http://picture.responsiveimages.org/#parse-sizes-attr"
      },{
      "name": "Usage Details",
      "href": "http://ericportis.com/posts/2014/srcset-sizes/"
      }]
  }
  !*/
Modernizr.addAsyncTest(function(){var n,e,t,o=createElement("img"),i="sizes"in o;!i&&"srcset"in o?(e="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",n="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=function(){addTest("sizes",2==o.width)},o.onload=t,o.onerror=t,o.setAttribute("sizes","9px"),o.srcset=n+" 1w,"+e+" 8w",o.src=n):addTest("sizes",i)}),/*!
  {
    "name": "srcset attribute",
    "property": "srcset",
    "tags": ["image"],
    "notes": [{
      "name": "Smashing Magazine Article",
      "href": "https://en.wikipedia.org/wiki/APNG"
      },{
      "name": "Generate multi-resolution images for srcset with Grunt",
      "href": "https://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/"
      }]
  }
  !*/
Modernizr.addTest("srcset","srcset"in createElement("img")),/*!
  {
    "name": "Webp",
    "async": true,
    "property": "webp",
    "tags": ["image"],
    "builderAliases": ["img_webp"],
    "authors": ["Krister Kari", "@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
    "notes": [{
      "name": "Webp Info",
      "href": "https://developers.google.com/speed/webp/"
    }, {
      "name": "Chormium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
      "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
    }, {
      "name": "Webp Lossless Spec",
      "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
    }, {
      "name": "Article about WebP support on Android browsers",
      "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
    }, {
      "name": "Chormium WebP announcement",
      "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
    }]
  }
  !*/
Modernizr.addAsyncTest(function(){function n(n,e,t){function o(e){var o=!(!e||"load"!==e.type)&&1==i.width;addTest(n,"webp"===n&&o?new Boolean(o):o),t&&t(e)}var i=new Image;i.onerror=o,i.onload=o,i.src=e}var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=e.shift();n(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var o=0;o<e.length;o++)n(e[o].name,e[o].uri)})}),/*!
  {
    "name": "Webp Alpha",
    "async": true,
    "property": "webpalpha",
    "aliases": ["webp-alpha"],
    "tags": ["image"],
    "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
    "notes": [{
      "name": "WebP Info",
      "href": "https://developers.google.com/speed/webp/"
    },{
      "name": "Article about WebP support on Android browsers",
      "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
    },{
      "name": "Chromium WebP announcement",
      "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
    }]
  }
  !*/
Modernizr.addAsyncTest(function(){var n=new Image;n.onerror=function(){addTest("webpalpha",!1,{aliases:["webp-alpha"]})},n.onload=function(){addTest("webpalpha",1==n.width,{aliases:["webp-alpha"]})},n.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),/*!
  {
    "name": "Webp Animation",
    "async": true,
    "property": "webpanimation",
    "aliases": ["webp-animation"],
    "tags": ["image"],
    "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
    "notes": [{
      "name": "WebP Info",
      "href": "https://developers.google.com/speed/webp/"
    },{
      "name": "Chromium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
      "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
    }]
  }
  !*/
Modernizr.addAsyncTest(function(){var n=new Image;n.onerror=function(){addTest("webpanimation",!1,{aliases:["webp-animation"]})},n.onload=function(){addTest("webpanimation",1==n.width,{aliases:["webp-animation"]})},n.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}),/*!
  {
    "name": "Webp Lossless",
    "async": true,
    "property": ["webplossless", "webp-lossless"],
    "tags": ["image"],
    "authors": ["@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
    "notes": [{
      "name": "Webp Info",
      "href": "https://developers.google.com/speed/webp/"
    },{
      "name": "Webp Lossless Spec",
      "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
    }]
  }
  !*/
Modernizr.addAsyncTest(function(){var n=new Image;n.onerror=function(){addTest("webplossless",!1,{aliases:["webp-lossless"]})},n.onload=function(){addTest("webplossless",1==n.width,{aliases:["webp-lossless"]})},n.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}),/*!
  {
    "name": "IndexedDB",
    "property": "indexeddb",
    "caniuse": "indexeddb",
    "tags": ["storage"],
    "polyfills": ["indexeddb"],
    "async": true
  }
  !*/
Modernizr.addAsyncTest(function(){var n;try{n=prefixed("indexedDB",window)}catch(n){}if(n){var e="modernizr-"+Math.random(),t=n.open(e);t.onerror=function(){t.error&&"InvalidStateError"===t.error.name?addTest("indexeddb",!1):(addTest("indexeddb",!0),detectDeleteDatabase(n,e))},t.onsuccess=function(){addTest("indexeddb",!0),detectDeleteDatabase(n,e)}}else addTest("indexeddb",!1)}),/*!
  {
    "name": "IndexedDB Blob",
    "property": "indexeddbblob"
  }
  !*/
Modernizr.addAsyncTest(function(){var n,e,t,o,i="detect-blob-support",r=!1;try{n=prefixed("indexedDB",window)}catch(n){}if(!Modernizr.indexeddb||!Modernizr.indexeddb.deletedatabase)return!1;try{n.deleteDatabase(i).onsuccess=function(){e=n.open(i,1),e.onupgradeneeded=function(){e.result.createObjectStore("store")},e.onsuccess=function(){t=e.result;try{o=t.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),o.onsuccess=function(){r=!0},o.onerror=function(){r=!1}}catch(n){r=!1}finally{addTest("indexeddbblob",r),t.close(),n.deleteDatabase(i)}}}}catch(n){addTest("indexeddbblob",!1)}}),/*!
  {
    "name": "input formaction",
    "property": "inputformaction",
    "aliases": ["input-formaction"],
    "notes": [{
      "name": "WHATWG Spec",
      "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formaction"
    }, {
      "name": "Wufoo demo",
      "href": "https://www.wufoo.com/html5/attributes/13-formaction.html"
    }],
    "polyfills": [
      "webshims"
    ]
  }
  !*/
Modernizr.addTest("inputformaction",!!("formAction"in createElement("input")),{aliases:["input-formaction"]}),/*!
  {
    "name": "input formenctype",
    "property": "inputformenctype",
    "aliases": ["input-formenctype"],
    "notes": [{
      "name": "WHATWG Spec",
      "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formenctype"
    }, {
      "name": "Wufoo demo",
      "href": "https://www.wufoo.com/html5/attributes/16-formenctype.html"
    }],
    "polyfills": [
      "html5formshim"
    ]
  }
  !*/
Modernizr.addTest("inputformenctype",!!("formEnctype"in createElement("input")),{aliases:["input-formenctype"]}),/*!
  {
    "name": "input formmethod",
    "property": "inputformmethod",
    "notes": [{
      "name": "WHATWG Spec",
      "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formmethod"
    }, {
      "name": "Wufoo demo",
      "href": "https://www.wufoo.com/html5/attributes/14-formmethod.html"
    }],
    "polyfills": [
      "webshims"
    ]
  }
  !*/
Modernizr.addTest("inputformmethod",!!("formMethod"in createElement("input"))),/*!
  {
    "name": "input formtarget",
    "property": "inputformtarget",
    "aliases": ["input-formtarget"],
    "notes": [{
      "name": "WHATWG Spec",
      "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formtarget"
    }, {
      "name": "Wufoo demo",
      "href": "https://www.wufoo.com/html5/attributes/15-formtarget.html"
    }],
    "polyfills": [
      "html5formshim"
    ]
  }
  !*/
Modernizr.addTest("inputformtarget",!!("formtarget"in createElement("input")),{aliases:["input-formtarget"]}),/*!
  {
    "name": "input[search] search event",
    "property": "search",
    "tags": ["input","search"],
    "authors": ["Calvin Webster"],
    "notes": [{
      "name": "Wufoo demo",
      "href": "https://www.wufoo.com/html5/types/5-search.html?"
    }, {
      "name": "CSS Tricks",
      "href": "https://css-tricks.com/webkit-html5-search-inputs/"
    }]
  }
  !*/
Modernizr.addTest("inputsearchevent",hasEvent("search")),/*!
   {
   "name": "Internationalization API",
   "property": "intl",
   "notes": [{
   "name": "MDN documentation",
   "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"
   },{
   "name": "ECMAScript spec",
   "href": "http://www.ecma-international.org/ecma-402/1.0/"
   }]
   }
   !*/
Modernizr.addTest("intl",!!prefixed("Intl",window)),/*!
  {
    "name": "Font Ligatures",
    "property": "ligatures",
    "caniuse": "font-feature",
    "notes": [{
      "name": "Cross-browser Web Fonts",
      "href": "http://www.sitepoint.com/cross-browser-web-fonts-part-3/"
    }]
  }
  !*/
Modernizr.addTest("ligatures",testAllProps("fontFeatureSettings",'"liga" 1')),/*!
  {
    "name": "Reverse Ordered Lists",
    "property": "olreversed",
    "notes": [{
      "name": "Impressive Webs article",
      "href": "http://impressivewebs.com/reverse-ordered-lists-html5"
    }],
    "builderAliases": ["lists_reversed"]
  }
  !*/
Modernizr.addTest("olreversed","reversed"in createElement("ol")),/*!
  {
    "name": "MathML",
    "property": "mathml",
    "caniuse": "mathml",
    "authors": ["Addy Osmani", "Davide P. Cervone", "David Carlisle"],
    "knownBugs": ["Firefox < 4 will likely return a false, however it does support MathML inside XHTML documents"],
    "notes": [{
      "name": "W3C spec",
      "href": "https://www.w3.org/Math/"
    }],
    "polyfills": ["mathjax"]
  }
  !*/
Modernizr.addTest("mathml",function(){var n;return testStyles("#modernizr{position:absolute;display:inline-block}",function(e){e.innerHTML+="<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>",n=e.offsetHeight>e.offsetWidth}),n}),/*!
  {
    "name": "Hover Media Query",
    "property": "hovermq",
    "notes": [{
      "name": "//Name of reference document",
      "href": "//URL of reference document"
    }]
  }
  !*/
Modernizr.addTest("hovermq",mq("(hover)")),/*!
  {
    "name": "Pointer Media Query",
    "property": "pointermq",
    "notes": [{
      "name": "//Name of reference document",
      "href": "//URL of reference document"
    }]
  }
  !*/
Modernizr.addTest("pointermq",mq("(pointer:coarse),(pointer:fine),(pointer:none)")),/*!
  {
    "name": "Message Channel",
    "property": "MessageChannel",
    "authors": ["Raju Konga [kongaraju]"],
    "caniuse" : "MessageChannel",
    "tags": ["performance", "messagechannel"],
    "notes": [{
      "name": "W3C Reference",
      "href": "https://www.w3.org/TR/2011/WD-webmessaging-20110317/#message-channels"
    }, {
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging"
    }]
  }
  !*/
Modernizr.addTest("messagechannel","MessageChannel"in window),/*!
  {
    "name": "Beacon API",
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon"
    },{
      "name": "W3C specification",
      "href": "https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/Beacon/Overview.html"
    }],
    "property": "beacon",
    "tags": ["beacon", "network"],
    "authors": ["Cătălin Mariș"]
  }
  !*/
Modernizr.addTest("beacon","sendBeacon"in navigator),/*!
  {
    "name": "Low Bandwidth Connection",
    "property": "lowbandwidth",
    "tags": ["network"],
    "builderAliases": ["network_connection"]
  }
  !*/
Modernizr.addTest("lowbandwidth",function(){var n=navigator.connection||{type:0};return 3==n.type||4==n.type||/^[23]g$/.test(n.type)}),/*!
  {
    "name": "Server Sent Events",
    "property": "eventsource",
    "tags": ["network"],
    "builderAliases": ["network_eventsource"],
    "notes": [{
      "name": "WHATWG Spec",
      "href": "https://html.spec.whatwg.org/multipage/comms.html#server-sent-events"
    }]
  }
  !*/
Modernizr.addTest("eventsource","EventSource"in window),/*!
  {
    "name": "Fetch API",
    "property": "fetch",
    "tags": ["network"],
    "caniuse": "fetch",
    "notes": [{
      "name": "Fetch Living Standard",
      "href": "https://fetch.spec.whatwg.org/"
    }],
    "polyfills": ["fetch"]
  }
  !*/
Modernizr.addTest("fetch","fetch"in window),/*!
  {
    "name": "XHR responseType",
    "property": "xhrresponsetype",
    "tags": ["network"],
    "notes": [{
      "name": "XMLHttpRequest Living Standard",
      "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
    }]
  }
  !*/
Modernizr.addTest("xhrresponsetype",function(){if("undefined"==typeof XMLHttpRequest)return!1;var n=new XMLHttpRequest;return n.open("get","/",!0),"response"in n}());var testXhrType=function(n){if("undefined"==typeof XMLHttpRequest)return!1;var e=new XMLHttpRequest;e.open("get","/",!0);try{e.responseType=n}catch(n){return!1}return"response"in e&&e.responseType==n};/*!
  {
    "name": "XHR responseType='arraybuffer'",
    "property": "xhrresponsetypearraybuffer",
    "tags": ["network"],
    "notes": [{
      "name": "XMLHttpRequest Living Standard",
      "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
    }]
  }
  !*/
Modernizr.addTest("xhrresponsetypearraybuffer",testXhrType("arraybuffer")),/*!
  {
    "name": "XHR responseType='blob'",
    "property": "xhrresponsetypeblob",
    "tags": ["network"],
    "notes": [{
      "name": "XMLHttpRequest Living Standard",
      "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
    }]
  }
  !*/
Modernizr.addTest("xhrresponsetypeblob",testXhrType("blob")),/*!
  {
    "name": "XHR responseType='document'",
    "property": "xhrresponsetypedocument",
    "tags": ["network"],
    "notes": [{
      "name": "XMLHttpRequest Living Standard",
      "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
    }]
  }
  !*/
Modernizr.addTest("xhrresponsetypedocument",testXhrType("document")),/*!
  {
    "name": "XHR responseType='json'",
    "property": "xhrresponsetypejson",
    "tags": ["network"],
    "notes": [{
      "name": "XMLHttpRequest Living Standard",
      "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
    },{
      "name": "Explanation of xhr.responseType='json'",
      "href": "https://mathiasbynens.be/notes/xhr-responsetype-json"
    }]
  }
  !*/
Modernizr.addTest("xhrresponsetypejson",testXhrType("json")),/*!
  {
    "name": "XHR responseType='text'",
    "property": "xhrresponsetypetext",
    "tags": ["network"],
    "notes": [{
      "name": "XMLHttpRequest Living Standard",
      "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
    }]
  }
  !*/
Modernizr.addTest("xhrresponsetypetext",testXhrType("text")),/*!
  {
    "name": "XML HTTP Request Level 2 XHR2",
    "property": "xhr2",
    "tags": ["network"],
    "builderAliases": ["network_xhr2"],
    "notes": [{
      "name": "W3 Spec",
      "href": "https://www.w3.org/TR/XMLHttpRequest2/"
    },{
      "name": "Details on Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/385"
    }]
  }
  !*/
Modernizr.addTest("xhr2","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest),/*!
  {
    "name": "Notification",
    "property": "notification",
    "caniuse": "notifications",
    "authors": ["Theodoor van Donge", "Hendrik Beskow"],
    "notes": [{
      "name": "HTML5 Rocks tutorial",
      "href": "http://www.html5rocks.com/en/tutorials/notifications/quick/"
    },{
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/notifications/"
    }, {
      "name": "Changes in Chrome to Notifications API due to Service Worker Push Notifications",
      "href": "https://developers.google.com/web/updates/2015/05/Notifying-you-of-notificiation-changes"
    }],
    "knownBugs": [
      "Possibility of false-positive on Chrome for Android if permissions we're granted for a website prior to Chrome 44."
    ],
    "polyfills": ["desktop-notify", "html5-notifications"]
  }
  !*/
Modernizr.addTest("notification",function(){if(!window.Notification||!window.Notification.requestPermission)return!1;if("granted"===window.Notification.permission)return!0;try{new window.Notification("")}catch(n){if("TypeError"===n.name)return!1}return!0}),/*!
  {
    "name": "Page Visibility API",
    "property": "pagevisibility",
    "caniuse": "pagevisibility",
    "tags": ["performance"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/DOM/Using_the_Page_Visibility_API"
    },{
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/2011/WD-page-visibility-20110602/"
    },{
      "name": "HTML5 Rocks tutorial",
      "href": "http://www.html5rocks.com/en/tutorials/pagevisibility/intro/"
    }],
    "polyfills": ["visibilityjs", "visiblyjs", "jquery-visibility"]
  }
  !*/
Modernizr.addTest("pagevisibility",!!prefixed("hidden",document,!1)),/*!
  {
    "name": "Navigation Timing API",
    "property": "performance",
    "caniuse": "nav-timing",
    "tags": ["performance"],
    "authors": ["Scott Murphy (@uxder)"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://www.w3.org/TR/navigation-timing/"
    },{
      "name": "HTML5 Rocks article",
      "href": "http://www.html5rocks.com/en/tutorials/webperformance/basics/"
    }],
    "polyfills": ["perfnow"]
  }
  !*/
Modernizr.addTest("performance",!!prefixed("performance",window)),/*!
  {
    "name": "DOM Pointer Events API",
    "property": "pointerevents",
    "tags": ["input"],
    "authors": ["Stu Cox"],
    "notes": [
      {
        "name": "W3C spec",
        "href": "https://www.w3.org/TR/pointerevents/"
      }
    ],
    "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
    "polyfills": ["handjs","pep"]
  }
  !*/
Modernizr.addTest("pointerevents",function(){var n=!1,e=domPrefixes.length;for(n=Modernizr.hasEvent("pointerdown");e--&&!n;)hasEvent(domPrefixes[e]+"pointerdown")&&(n=!0);return n}),/*!
  {
    "name": "Pointer Lock API",
    "property": "pointerlock",
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/API/Pointer_Lock_API"
    }],
    "builderAliases": ["pointerlock_api"]
  }
  !*/
Modernizr.addTest("pointerlock",!!prefixed("exitPointerLock",document)),/*!
  {
    "name": "postMessage",
    "property": "postmessage",
    "caniuse": "x-doc-messaging",
    "notes": [{
      "name": "W3C Spec",
      "href": "http://www.w3.org/TR/html5/comms.html#posting-messages"
    }],
    "polyfills": ["easyxdm", "postmessage-jquery"]
  }
  !*/
Modernizr.addTest("postmessage","postMessage"in window),/*!
  {
    "authors": ["Cătălin Mariș"],
    "caniuse": "proximity",
    "name": "Proximity API",
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events"
    },{
      "name": "W3C specification",
      "href": "https://www.w3.org/TR/proximity/"
    }],
    "property": "proximity",
    "tags": ["events", "proximity"]
  }
  !*/
Modernizr.addAsyncTest(function(){function n(){clearTimeout(e),window.removeEventListener("deviceproximity",n),addTest("proximity",!0)}var e;"ondeviceproximity"in window&&"onuserproximity"in window?(window.addEventListener("deviceproximity",n),e=setTimeout(function(){window.removeEventListener("deviceproximity",n),addTest("proximity",!1)},300)):addTest("proximity",!1)}),/*!
  {
    "name": "QuerySelector",
    "property": "queryselector",
    "caniuse": "queryselector",
    "tags": ["queryselector"],
    "authors": ["Andrew Betts (@triblondon)"],
    "notes": [{
      "name" : "W3C Selectors reference",
      "href": "https://www.w3.org/TR/selectors-api/#queryselectorall"
    }],
    "polyfills": ["css-selector-engine"]
  }
  !*/
Modernizr.addTest("queryselector","querySelector"in document&&"querySelectorAll"in document),/*!
  {
    "name": "Quota Storage Management API",
    "property": "quotamanagement",
    "tags": ["storage"],
    "builderAliases": ["quota_management_api"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://www.w3.org/TR/quota-api/"
    }]
  }
  !*/
Modernizr.addTest("quotamanagement",function(){var n=prefixed("temporaryStorage",navigator),e=prefixed("persistentStorage",navigator);return!(!n||!e)}),/*!
  {
    "name": "requestAnimationFrame",
    "property": "requestanimationframe",
    "aliases": ["raf"],
    "caniuse": "requestanimationframe",
    "tags": ["animation"],
    "authors": ["Addy Osmani"],
    "notes": [{
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/animation-timing/"
    }],
    "polyfills": ["raf"]
  }
  !*/
Modernizr.addTest("requestanimationframe",!!prefixed("requestAnimationFrame",window),{aliases:["raf"]}),/*!
  {
    "name": "script[async]",
    "property": "scriptasync",
    "caniuse": "script-async",
    "tags": ["script"],
    "builderAliases": ["script_async"],
    "authors": ["Theodoor van Donge"]
  }
  !*/
Modernizr.addTest("scriptasync","async"in createElement("script")),/*!
  {
    "name": "script[defer]",
    "property": "scriptdefer",
    "caniuse": "script-defer",
    "tags": ["script"],
    "builderAliases": ["script_defer"],
    "authors": ["Theodoor van Donge"],
    "warnings": ["Browser implementation of the `defer` attribute vary: https://stackoverflow.com/questions/3952009/defer-attribute-chrome#answer-3982619"],
    "knownBugs": ["False positive in Opera 12"]
  }
  !*/
Modernizr.addTest("scriptdefer","defer"in createElement("script")),/*!
  {
    "name": "ServiceWorker API",
    "property": "serviceworker",
    "notes": [{
      "name": "ServiceWorkers Explained",
      "href": "https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md"
    }]
  }
  !*/
Modernizr.addTest("serviceworker","serviceWorker"in navigator),/*!
  {
    "authors": ["Cătălin Mariș"],
    "name": "Speech Recognition API",
    "notes": [
      {
        "name": "W3C Web Speech API Specification - The SpeechRecognition Interface",
        "href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#speechreco-section"
      },
      {
        "name": "Introduction to the Web Speech API",
        "href": "http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API"
      }
    ],
    "property": "speechrecognition",
    "tags": ["input", "speech"]
  }
  !*/
Modernizr.addTest("speechrecognition",!!prefixed("SpeechRecognition",window)),/*!
  {
    "authors": ["Cătălin Mariș"],
    "name": "Speech Synthesis API",
    "notes": [
      {
        "name": "W3C Web Speech API Specification - The SpeechSynthesis Interface",
        "href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#tts-section"
      }
    ],
    "property": "speechsynthesis",
    "tags": ["input", "speech"]
  }
  !*/
Modernizr.addTest("speechsynthesis","SpeechSynthesisUtterance"in window),/*!
  {
    "name": "Local Storage",
    "property": "localstorage",
    "caniuse": "namevalue-storage",
    "tags": ["storage"],
    "knownBugs": [],
    "notes": [],
    "warnings": [],
    "polyfills": [
      "joshuabell-polyfill",
      "cupcake",
      "storagepolyfill",
      "amplifyjs",
      "yui-cacheoffline"
    ]
  }
  !*/
Modernizr.addTest("localstorage",function(){var n="modernizr";try{return localStorage.setItem(n,n),localStorage.removeItem(n),!0}catch(n){return!1}}),/*!
  {
    "name": "Session Storage",
    "property": "sessionstorage",
    "tags": ["storage"],
    "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
  }
  !*/
Modernizr.addTest("sessionstorage",function(){var n="modernizr";try{return sessionStorage.setItem(n,n),sessionStorage.removeItem(n),!0}catch(n){return!1}}),/*!
  {
    "name": "Web SQL Database",
    "property": "websqldatabase",
    "caniuse": "sql-storage",
    "tags": ["storage"]
  }
  !*/
Modernizr.addTest("websqldatabase","openDatabase"in window),/*!
  {
    "name": "style[scoped]",
    "property": "stylescoped",
    "caniuse": "style-scoped",
    "tags": ["dom"],
    "builderAliases": ["style_scoped"],
    "authors": ["Cătălin Mariș"],
    "notes": [{
      "name": "WHATWG Specification",
      "href": "https://html.spec.whatwg.org/multipage/semantics.html#attr-style-scoped"
    }],
    "polyfills": ["scoped-styles"]
  }
  !*/
Modernizr.addTest("stylescoped","scoped"in createElement("style")),/*!
  {
    "name": "SVG",
    "property": "svg",
    "caniuse": "svg",
    "tags": ["svg"],
    "authors": ["Erik Dahlstrom"],
    "polyfills": [
      "svgweb",
      "raphael",
      "amplesdk",
      "canvg",
      "svg-boilerplate",
      "sie",
      "dojogfx",
      "fabricjs"
    ]
  }
  !*/
Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),/*!
  {
    "name": "SVG as an <img> tag source",
    "property": "svgasimg",
    "caniuse" : "svg-img",
    "tags": ["svg"],
    "aliases": ["svgincss"],
    "authors": ["Chris Coyier"],
    "notes": [{
      "name": "HTML5 Spec",
      "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
    }]
  }
  !*/
Modernizr.addTest("svgasimg",document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var toStringFn={}.toString;/*!
  {
    "name": "SVG clip paths",
    "property": "svgclippaths",
    "tags": ["svg"],
    "notes": [{
      "name": "Demo",
      "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
    }]
  }
  !*/
Modernizr.addTest("svgclippaths",function(){return!!document.createElementNS&&/SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),/*!
  {
    "name": "SVG filters",
    "property": "svgfilters",
    "caniuse": "svg-filters",
    "tags": ["svg"],
    "builderAliases": ["svg_filters"],
    "authors": ["Erik Dahlstrom"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://www.w3.org/TR/SVG11/filters.html"
    }]
  }
  !*/
Modernizr.addTest("svgfilters",function(){var n=!1;try{n="SVGFEColorMatrixElement"in window&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return n}),/*!
  {
    "name": "SVG foreignObject",
    "property": "svgforeignobject",
    "tags": ["svg"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://www.w3.org/TR/SVG11/extend.html"
    }]
  }
  !*/
Modernizr.addTest("svgforeignobject",function(){return!!document.createElementNS&&/SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),/*!
  {
    "name": "Inline SVG",
    "property": "inlinesvg",
    "caniuse": "svg-html5",
    "tags": ["svg"],
    "notes": [{
      "name": "Test page",
      "href": "https://paulirish.com/demo/inline-svg"
    }, {
      "name": "Test page and results",
      "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
    }],
    "polyfills": ["inline-svg-polyfill"],
    "knownBugs": ["False negative on some Chromia browsers."]
  }
  !*/
Modernizr.addTest("inlinesvg",function(){var n=createElement("div");return n.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&n.firstChild&&n.firstChild.namespaceURI)}),/*!
  {
    "name": "SVG SMIL animation",
    "property": "smil",
    "caniuse": "svg-smil",
    "tags": ["svg"],
    "notes": [{
    "name": "W3C Synchronised Multimedia spec",
    "href": "https://www.w3.org/AudioVideo/"
    }]
  }
  !*/
Modernizr.addTest("smil",function(){return!!document.createElementNS&&/SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","animate")))}),/*!
  {
    "name": "Template strings",
    "property": "templatestrings",
    "notes": [{
      "name": "MDN Reference",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Browser_compatibility"
    }]
  }
  !*/
Modernizr.addTest("templatestrings",function(){var supports;try{eval("``"),supports=!0}catch(n){}return!!supports}),/*!
  {
    "name": "textarea maxlength",
    "property": "textareamaxlength",
    "aliases": ["textarea-maxlength"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
    }],
    "polyfills": [
      "maxlength"
    ]
  }
  !*/
Modernizr.addTest("textareamaxlength",!!("maxLength"in createElement("textarea"))),/*!
  {
    "name": "Touch Events",
    "property": "touchevents",
    "caniuse" : "touch",
    "tags": ["media", "attribute"],
    "notes": [{
      "name": "Touch Events spec",
      "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
    }],
    "warnings": [
      "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
    ],
    "knownBugs": [
      "False-positive on some configurations of Nokia N900",
      "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
    ]
  }
  !*/
Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)n=!0;else{var e=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(e,function(e){n=9===e.offsetTop})}return n}),/*!
  {
    "name": "Typed arrays",
    "property": "typedarrays",
    "caniuse": "typedarrays",
    "tags": ["js"],
    "authors": ["Stanley Stuart (@fivetanley)"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays"
    },{
      "name": "Kronos spec",
      "href": "https://www.khronos.org/registry/typedarray/specs/latest/"
    }],
    "polyfills": ["joshuabell-polyfill"]
  }
  !*/
Modernizr.addTest("typedarrays","ArrayBuffer"in window),/*!
  {
    "name": "Unicode characters",
    "property": "unicode",
    "tags": ["encoding"],
    "warnings": [
      "positive Unicode support doesn't mean you can use it inside <title>, this seems more related to OS & Language packs"
    ]
  }
  !*/
Modernizr.addTest("unicode",function(){var n,e=createElement("span"),t=createElement("span");return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}",function(o){e.innerHTML=isSVG?"妇":"&#5987;",t.innerHTML=isSVG?"☆":"&#9734;",o.appendChild(e),o.appendChild(t),n="offsetWidth"in e&&e.offsetWidth!==t.offsetWidth}),n}),/*!
  {
    "name": "Unicode Range",
    "property": "unicoderange",
    "notes": [{
      "name" : "W3C reference",
      "href": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#descdef-unicode-range"
    }, {
      "name" : "24 Way article",
      "href": "https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range"
    }]
  }
  !*/
Modernizr.addTest("unicoderange",function(){return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(n){for(var e=[".",".","m","m"],t=0;t<e.length;t++){var o=createElement("span");o.innerHTML=e[t],o.className=t%2?"mono":"",n.appendChild(o),e[t]=o.clientWidth}return e[0]!==e[1]&&e[2]===e[3]})});/*!
  {
    "name": "Blob URLs",
    "property": "bloburls",
    "caniuse": "bloburls",
    "notes": [{
      "name": "W3C Working Draft",
      "href": "https://www.w3.org/TR/FileAPI/#creating-revoking"
    }],
    "tags": ["file", "url"],
    "authors": ["Ron Waldon (@jokeyrhyme)"]
  }
  !*/
var url=prefixed("URL",window,!1);url=url&&window[url],Modernizr.addTest("bloburls",url&&"revokeObjectURL"in url&&"createObjectURL"in url),/*!
  {
    "name": "Data URI",
    "property": "datauri",
    "caniuse": "datauri",
    "tags": ["url"],
    "builderAliases": ["url_data_uri"],
    "async": true,
    "notes": [{
      "name": "Wikipedia article",
      "href": "https://en.wikipedia.org/wiki/Data_URI_scheme"
    }],
    "warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
  }
  !*/
Modernizr.addAsyncTest(function(){function n(){var n=new Image;n.onerror=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=!1},n.onload=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=1==n.width&&1==n.height};for(var e="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.length<33e3;)e="\r\n"+e;n.src="data:image/gif;base64,"+e}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){addTest("datauri",!1)},10);var e=new Image;e.onerror=function(){addTest("datauri",!1)},e.onload=function(){1==e.width&&1==e.height?n():addTest("datauri",!1)},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}),/*!
  {
    "name": "URL parser",
    "property": "urlparser",
    "notes": [{
      "name": "URL",
      "href": "https://dvcs.w3.org/hg/url/raw-file/tip/Overview.html"
    }],
    "polyfills": ["urlparser"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["url"]
  }
  !*/
Modernizr.addTest("urlparser",function(){var n;try{return n=new URL("http://modernizr.com/"),"http://modernizr.com/"===n.href}catch(n){return!1}}),/*!
  {
    "authors": ["Cătălin Mariș"],
    "name": "URLSearchParams API",
    "notes": [
      {
        "name": "WHATWG specification",
        "href": "https://url.spec.whatwg.org/#interface-urlsearchparams"
      },
      {
        "name": "MDN documentation",
        "href": "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams"
      }
    ],
    "property": "urlsearchparams",
    "tags": ["querystring", "url"]
  }
  !*/
Modernizr.addTest("urlsearchparams","URLSearchParams"in window),/*!
  {
    "name": "IE User Data API",
    "property": "userdata",
    "tags": ["storage"],
    "authors": ["@stereobooster"],
    "notes": [{
      "name": "MSDN Documentation",
      "href": "https://msdn.microsoft.com/en-us/library/ms531424.aspx"
    }]
  }
  !*/
Modernizr.addTest("userdata",!!createElement("div").addBehavior),/*!
  {
    "name": "Vibration API",
    "property": "vibrate",
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozVibrate"
    },{
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/vibration/"
    }]
  }
  !*/
Modernizr.addTest("vibrate",!!prefixed("vibrate",navigator)),/*!
  {
    "name": "HTML5 Video",
    "property": "video",
    "caniuse": "video",
    "tags": ["html5"],
    "knownBugs": [
      "Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"
    ],
    "polyfills": [
      "html5media",
      "mediaelementjs",
      "sublimevideo",
      "videojs",
      "leanbackplayer",
      "videoforeverybody"
    ]
  }
  !*/
Modernizr.addTest("video",function(){var n=createElement("video"),e=!1;try{e=!!n.canPlayType,e&&(e=new Boolean(e),e.ogg=n.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=n.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),e.vp9=n.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),e.hls=n.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return e}),/*!
  {
    "name": "Video Autoplay",
    "property": "videoautoplay",
    "tags": ["video"],
    "async" : true,
    "warnings": ["This test is very large – only include it if you absolutely need it"],
    "knownBugs": ["crashes with an alert on iOS7 when added to homescreen"]
  }
  !*/
Modernizr.addAsyncTest(function(){function n(a){i++,clearTimeout(e);var d=a&&"playing"===a.type||0!==r.currentTime;if(!d&&i<o)return void(e=setTimeout(n,t));r.removeEventListener("playing",n,!1),addTest("videoautoplay",d),r.parentNode&&r.parentNode.removeChild(r)}var e,t=200,o=5,i=0,r=createElement("video"),a=r.style;if(!(Modernizr.video&&"autoplay"in r))return void addTest("videoautoplay",!1);a.position="absolute",a.height=0,a.width=0;try{if(Modernizr.video.ogg)r.src="data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";else{if(!Modernizr.video.h264)return void addTest("videoautoplay",!1);r.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(n){return void addTest("videoautoplay",!1)}r.setAttribute("autoplay",""),r.style.cssText="display:none",docElement.appendChild(r),setTimeout(function(){r.addEventListener("playing",n,!1),e=setTimeout(n,t)},0)}),/*!
  {
    "name": "Video crossOrigin",
    "property": "videocrossorigin",
    "caniuse": "cors",
    "authors": ["Florian Mailliet"],
    "notes": [{
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes"
    }]
  }
  !*/
Modernizr.addTest("videocrossorigin","crossOrigin"in createElement("video")),/*!
  {
    "name": "Video Loop Attribute",
    "property": "videoloop",
    "tags": ["video", "media"]
  }
  !*/
Modernizr.addTest("videoloop","loop"in createElement("video")),/*!
  {
    "name": "Video Preload Attribute",
    "property": "videopreload",
    "tags": ["video", "media"]
  }
  !*/
Modernizr.addTest("videopreload","preload"in createElement("video")),/*!
  {
    "name": "VML",
    "property": "vml",
    "caniuse": "vml",
    "tags": ["vml"],
    "authors": ["Craig Andrews (@candrews)"],
    "notes": [{
      "name" : "W3C VML reference",
      "href": "https://www.w3.org/TR/NOTE-VML"
    },{
      "name" : "Microsoft VML reference",
      "href": "https://msdn.microsoft.com/en-us/library/bb263898.aspx"
    }]
  }
  !*/
Modernizr.addTest("vml",function(){var n,e=createElement("div"),t=!1;return isSVG||(e.innerHTML='<v:shape id="vml_flag1" adj="1" />',n=e.firstChild,"style"in n&&(n.style.behavior="url(#default#VML)"),t=!n||"object"==(0,_typeof3.default)(n.adj)),t}),/*!
  {
    "name": "Web Intents",
    "property": "webintents",
    "authors": ["Eric Bidelman"],
    "notes": [{
      "name": "Web Intents project site",
      "href": "http://webintents.org/"
    }],
    "polyfills": ["webintents"],
    "builderAliases": ["web_intents"]
  }
  !*/
Modernizr.addTest("webintents",!!prefixed("startActivity",navigator)),/*!
  {
    "name": "Web Animation API",
    "property": "animation",
    "tags": ["webanimations"],
    "polyfills": ["webanimationsjs"],
    "notes": [{
      "name": "Introducing Web Animations",
      "href": "http://brian.sol1.net/svg/2013/06/26/introducing-web-animations/"
    }]
  }
  !*/
Modernizr.addTest("webanimations","animate"in createElement("div")),/*!
  {
    "name": "WebGL",
    "property": "webgl",
    "caniuse": "webgl",
    "tags": ["webgl", "graphics"],
    "polyfills": ["jebgl", "cwebgl", "iewebgl"]
  }
  !*/
Modernizr.addTest("webgl",function(){var n=createElement("canvas"),e="probablySupportsContext"in n?"probablySupportsContext":"supportsContext";return e in n?n[e]("webgl")||n[e]("experimental-webgl"):"WebGLRenderingContext"in window}),/*!
  {
    "name": "WebGL Extensions",
    "property": "webglextensions",
    "tags": ["webgl", "graphics"],
    "builderAliases": ["webgl_extensions"],
    "async" : true,
    "authors": ["Ilmari Heikkinen"],
    "knownBugs": [],
    "notes": [{
      "name": "Kronos extensions registry",
      "href": "http://www.khronos.org/registry/webgl/extensions/"
    }]
  }
  !*/
Modernizr.addAsyncTest(function(){if(Modernizr.webglextensions=!1,Modernizr.webgl){var n,e,t;try{n=createElement("canvas"),e=n.getContext("webgl")||n.getContext("experimental-webgl"),t=e.getSupportedExtensions()}catch(n){return}e!==undefined&&(Modernizr.webglextensions=new Boolean(!0));for(var o=-1,i=t.length;++o<i;)Modernizr.webglextensions[t[o]]=!0;n=undefined}}),/*!
  {
    "name": "RTC Peer Connection",
    "property": "peerconnection",
    "tags": ["webrtc"],
    "authors": ["Ankur Oberoi"],
    "notes": [{
      "name": "W3C Web RTC spec",
      "href": "https://www.w3.org/TR/webrtc/"
    }]
  }
  !*/
Modernizr.addTest("peerconnection",!!prefixed("RTCPeerConnection",window)),/*!
  {
    "name": "RTC Data Channel",
    "property": "datachannel",
    "notes": [{
      "name": "HTML5 Rocks! Article",
      "href": "http://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
    }]
  }
  !*/
Modernizr.addTest("datachannel",function(){if(!Modernizr.peerconnection)return!1;for(var n=0,e=domPrefixes.length;n<e;n++){var t=window[domPrefixes[n]+"RTCPeerConnection"];if(t){return"createDataChannel"in new t(null)}}return!1}),/*!
  {
    "name": "getUserMedia",
    "property": "getusermedia",
    "caniuse": "stream",
    "tags": ["webrtc"],
    "authors": ["Eric Bidelman"],
    "notes": [{
      "name": "W3C Media Capture and Streams spec",
      "href": "https://www.w3.org/TR/mediacapture-streams/"
    }],
    "polyfills": ["getusermedia"]
  }
  !*/
Modernizr.addTest("getusermedia",!!prefixed("getUserMedia",navigator));/*!
  {
    "name": "WebSockets Support",
    "property": "websockets",
    "authors": ["Phread [fearphage]", "Mike Sherov [mikesherov]", "Burak Yigit Kaya [BYK]"],
    "caniuse": "websockets",
    "tags": ["html5"],
    "warnings": [
      "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"
    ],
    "notes": [{
      "name": "CLOSING State and Spec",
      "href": "https://www.w3.org/TR/websockets/#the-websocket-interface"
    }],
    "polyfills": [
      "sockjs",
      "socketio",
      "kaazing-websocket-gateway",
      "websocketjs",
      "atmosphere",
      "graceful-websocket",
      "portal",
      "datachannel"
    ]
  }
  !*/
var supports=!1;try{supports="WebSocket"in window&&2===window.WebSocket.CLOSING}catch(n){}Modernizr.addTest("websockets",supports),/*!
  {
    "name": "Binary WebSockets",
    "property": "websocketsbinary",
    "tags": ["websockets"],
    "builderAliases": ["websockets_binary"]
  }
  !*/
Modernizr.addTest("websocketsbinary",function(){var n,e="https:"==location.protocol?"wss":"ws";if("WebSocket"in window){if(n="binaryType"in WebSocket.prototype)return n;try{return!!new WebSocket(e+"://.").binaryType}catch(n){}}return!1}),/*!
  {
    "name": "Framed window",
    "property": "framed",
    "tags": ["window"],
    "builderAliases": ["window_framed"]
  }
  !*/
Modernizr.addTest("framed",window.location!=top.location),/*!
  {
    "name": "Workers from Blob URIs",
    "property": "blobworkers",
    "tags": ["performance", "workers"],
    "builderAliases": ["workers_blobworkers"],
    "notes": [{
      "name": "W3C Reference",
      "href": "https://www.w3.org/TR/workers/"
    }],
    "knownBugs": ["This test may output garbage to console."],
    "authors": ["Jussi Kalliokoski"],
    "async": true
  }
  !*/
Modernizr.addAsyncTest(function(){function n(){addTest("blobworkers",!1),e()}function e(){d&&o.revokeObjectURL(d),a&&a.terminate(),l&&clearTimeout(l)}try{var t=window.BlobBuilder,o=window.URL;Modernizr._config.usePrefix&&(t=t||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,o=o||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var i,r,a,d,l,m="this.onmessage=function(e){postMessage(e.data)}";try{i=new Blob([m],{type:"text/javascript"})}catch(n){}i||(r=new t,r.append(m),i=r.getBlob()),d=o.createObjectURL(i),a=new Worker(d),a.onmessage=function(n){addTest("blobworkers","Modernizr"===n.data),e()},a.onerror=n,l=setTimeout(n,200),a.postMessage("Modernizr")}catch(e){n()}}),/*!
  {
    "name": "Workers from Data URIs",
    "property": "dataworkers",
    "tags": ["performance", "workers"],
    "builderAliases": ["workers_dataworkers"],
    "notes": [{
      "name": "W3C Reference",
      "href": "https://www.w3.org/TR/workers/"
    }],
    "knownBugs": ["This test may output garbage to console."],
    "authors": ["Jussi Kalliokoski"],
    "async": true
  }
  !*/
Modernizr.addAsyncTest(function(){try{var n=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");n.onmessage=function(e){n.terminate(),addTest("dataworkers","Modernizr"===e.data),n=null},n.onerror=function(){addTest("dataworkers",!1),n=null},setTimeout(function(){addTest("dataworkers",!1)},200),n.postMessage("Modernizr")}catch(n){setTimeout(function(){addTest("dataworkers",!1)},0)}}),/*!
  {
    "name": "Shared Workers",
    "property": "sharedworkers",
    "caniuse" : "sharedworkers",
    "tags": ["performance", "workers"],
    "builderAliases": ["workers_sharedworkers"],
    "notes": [{
      "name": "W3C Reference",
      "href": "https://www.w3.org/TR/workers/"
    }]
  }
  !*/
Modernizr.addTest("sharedworkers","SharedWorker"in window),/*!
  {
    "name": "Web Workers",
    "property": "webworkers",
    "caniuse" : "webworkers",
    "tags": ["performance", "workers"],
    "notes": [{
      "name": "W3C Reference",
      "href": "https://www.w3.org/TR/workers/"
    }, {
      "name": "HTML5 Rocks article",
      "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
    }, {
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
    }],
    "polyfills": ["fakeworker", "html5shims"]
  }
  !*/
Modernizr.addTest("webworkers","Worker"in window),/*!
  {
    "name": "Transferables Objects",
    "property": "transferables",
    "tags": ["performance", "workers"],
    "builderAliases": ["transferables"],
    "notes": [{
      "name": "HTML5 Rocks article",
      "href": "http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast"
    }],
    "async": true
  }
  !*/
Modernizr.addAsyncTest(function(){function n(){addTest("transferables",!1),e()}function e(){r&&URL.revokeObjectURL(r),a&&a.terminate(),o&&clearTimeout(o)}if(!(Modernizr.blobconstructor&&Modernizr.bloburls&&Modernizr.webworkers&&Modernizr.typedarrays))return addTest("transferables",!1);try{var t,o,i=new Blob(['var hello = "world"'],{type:"text/javascript"}),r=URL.createObjectURL(i),a=new Worker(r);a.onerror=n,o=setTimeout(n,200),t=new ArrayBuffer(1),a.postMessage(t,[t]),addTest("transferables",0===t.byteLength),e()}catch(e){n()}}),/*!
  {
    "name": "XDomainRequest",
    "property": "xdomainrequest",
    "tags": ["cors", "xdomainrequest", "ie9", "ie8"],
    "authors": ["Ivan Pan (@hypotenuse)"],
    "notes": [
    {
      "name": "MDN documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest"
    },
    {
      "name": "MSDN documentation",
      "href": "https://msdn.microsoft.com/library/ie/cc288060.aspx/"
    }]
  }
  !*/
Modernizr.addTest("xdomainrequest","XDomainRequest"in window),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document)}).call(exports,__webpack_require__(661)(module))},239:function(n,exports){n.exports={data:[{title:"Unveiled by the Lakers",body:"After expressing his unwillingness to suit up for the Charlotte Hornets, who drafted him 13th overall in 1996, Los Angeles Lakers owner Jerry West shipped center Vlade Divac to Charlotte for Kobe Bryant, who was unveiled to the L.A. media 10 days later.",date:"July 11, 1996"},{title:"The first championship",body:"A 21-year-old Bryant averaged 15.6 points, 4.2 assists, and 4.6 rebounds in the 2000 NBA Finals, including a 26-point, 10-rebound performance in the deciding Game 6 against the Indiana Pacers, to win his first NBA title.",date:"June 19, 2000"},{title:"Triple-double No. 1",body:"Fighting his way out of Shaquille O'Neal's (massive) shadow in 2000, Bryant made a legitimate case for his own stardom with the first of 21 triple-doubles in his career, racking up 26 points, 11 assists, and 11 rebounds in a 113-112 win against the Vancouver Grizzlies.",date:"January 15, 2001"},{title:"Winning a second consecutive title",body:"Kobe and Shaq asserted themselves as the NBA's most dominant duo again, downing Allen Iverson and his Philadelphia 76ers in the Finals. Bryant finished with 26 points and 12 rebounds in Game 5 to put the series to rest.",date:"June 15, 2001"},{title:"Three-peat",body:"The 2002-03 Lakers became only the fifth team in NBA history to win three consecutive championships when they steamrolled the New Jersey Nets, sweeping them in four games behind Bryant's 26.8 points per game.",date:"June 12, 2002"},{title:"81",body:"No Bryant-career retrospective is complete without mentioning the night he single-handedly took down the Toronto Raptors with an 81-point show, the most points in one game after Wilt Chamberlain scored 100 in 1962.",date:"January 22, 2006"},{title:"Four straight games with 50+ points",body:"Bryant couldn't be stopped when he put up four straight games of at least 50 points against the Portland Trailblazers (65), Minnesota Timberwolves (50), Memphis Grizzlies (60), and New Orleans/Oklahoma City Hornets (50) in March 2007.",date:"March 16-23, 2007"},{title:"The 'Redeem Team'",body:'After a dismal bronze medal in 2004, Team USA invited Bryant to the Olympic squad for the first time in 2008 where he captained the "Redeem Team" to Gold, defeating Spain 118-107 in the final.',date:"August 24, 2008"},{title:"Championship No. 4, the first sans Shaq",body:"Critics who said he couldn't do it without O'Neal were silenced when Bryant led the Lakers over the Orlando Magic in five games, scoring at least 30 points in all but one game in the 2009 Finals.",date:"June 14, 2009"},{title:"Five",body:"In what looks to be his final conquest of an NBA title, Bryant averaged 28.6 points and eight rebounds per game in the 2010 NBA Finals against the Boston Celtics, claiming his fifth Larry O'Brien Trophy.",date:"June 17, 2010"},{title:"Doubling up on Olympic Gold",body:"Bryant was one of five players from the 2008 Olympic squad to return in 2012, where they scored a record 156 points against Nigeria before defeating Spain once again in the gold-medal game, 100-78.",date:"August 12, 2012"},{title:"The beginning of the fall",body:'In a move he had made "a million times," Bryant tore his Achilles tendon in a freak injury against the Golden State Warriors, ruling him out for the rest of the season. He recovered in time for the following season, but never returned to his dominant ways.',date:"April 12, 2013"},{title:"Full circle",body:"Just after facing the team he defeated for his first NBA championship in the Pacers, Bryant addressed reporters after announcing earlier in the day that 2015-16 would be his final season.",date:"November 29, 2015"}]}},644:function(n,exports,e){exports=n.exports=e(80)(),exports.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),exports.i(e(641),""),exports.push([n.i,'body {\n  height: 100%;\n  font: 16px \'Roboto\', sans-serif; }\n\nhtml, div[ui-view], .cd-container {\n  background-color: #e9f0f5 !important; }\n\nhtml, body {\n  height: 100%;\n  position: relative; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\n[tabindex=\'-1\']:focus {\n  outline: none; }\n\n.inset {\n  padding: 10px; }\n\na.md-no-style,\nbutton.md-no-style {\n  font-weight: normal;\n  background-color: inherit;\n  text-align: left;\n  border: none;\n  padding: 0;\n  margin: 0; }\n\nselect,\nbutton,\ntextarea,\ninput {\n  vertical-align: baseline; }\n\ninput[type="reset"],\ninput[type="submit"],\nhtml input[type="button"],\nbutton {\n  cursor: pointer;\n  -webkit-appearance: button; }\n  input[type="reset"][disabled],\n  input[type="submit"][disabled],\n  html input[type="button"][disabled],\n  button[disabled] {\n    cursor: default; }\n\ntextarea {\n  vertical-align: top;\n  overflow: auto; }\n\ninput[type="search"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n  -webkit-box-sizing: content-box; }\n  input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button {\n    -webkit-appearance: none; }\n\ninput:-webkit-autofill {\n  text-shadow: none; }\n\n.md-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.md-shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border-radius: inherit;\n  pointer-events: none; }\n\n.md-shadow-bottom-z-1 {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n\n.md-shadow-bottom-z-2 {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4); }\n\n.md-shadow-animated.md-shadow {\n  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1); }\n\n/*\n * A container inside of a rippling element (eg a button),\n * which contains all of the individual ripples\n */\n.md-ripple-container {\n  pointer-events: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.55s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.md-ripple {\n  position: absolute;\n  transform: translate(-50%, -50%) scale(0);\n  transform-origin: 50% 50%;\n  opacity: 0;\n  border-radius: 50%; }\n  .md-ripple.md-ripple-placed {\n    transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .md-ripple.md-ripple-scaled {\n    transform: translate(-50%, -50%) scale(1); }\n  .md-ripple.md-ripple-active, .md-ripple.md-ripple-full, .md-ripple.md-ripple-visible {\n    opacity: 0.20; }\n  .md-ripple.md-ripple-remove {\n    animation: md-remove-ripple 0.9s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@keyframes md-remove-ripple {\n  0% {\n    opacity: .15; }\n  100% {\n    opacity: 0; } }\n\n.md-padding {\n  padding: 8px; }\n\n.md-margin {\n  margin: 8px; }\n\n.md-scroll-mask {\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 50; }\n  .md-scroll-mask > .md-scroll-mask-bar {\n    display: block;\n    position: absolute;\n    background-color: #fafafa;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 65;\n    box-shadow: inset 0px 0px 1px rgba(0, 0, 0, 0.3); }\n\n.md-no-momentum {\n  -webkit-overflow-scrolling: auto; }\n\n.md-no-flicker {\n  -webkit-filter: blur(0px); }\n\n@media (min-width: 960px) {\n  .md-padding {\n    padding: 16px; } }\n\nhtml[dir=rtl], html[dir=ltr], body[dir=rtl], body[dir=ltr] {\n  unicode-bidi: embed; }\n\nbdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override; }\n\nbdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override; }\n\nhtml, body {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  min-height: 100%;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/************\n * Headings\n ************/\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300;\n  letter-spacing: -0.010em;\n  line-height: 112px; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400;\n  letter-spacing: -0.005em;\n  line-height: 56px; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 64px; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px; }\n\n.md-headline {\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px; }\n\n.md-title {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em; }\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.010em;\n  line-height: 24px; }\n\n/************\n * Body Copy\n ************/\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.010em;\n  line-height: 20px; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.010em;\n  line-height: 24px; }\n\n.md-caption {\n  font-size: 12px;\n  letter-spacing: 0.020em; }\n\n.md-button {\n  letter-spacing: 0.010em; }\n\n/************\n * Defaults\n ************/\nbutton,\nselect,\nhtml,\ntextarea,\ninput {\n  font-family: Roboto, "Helvetica Neue", sans-serif; }\n\nselect,\nbutton,\ntextarea,\ninput {\n  font-size: 100%; }\n\n/*\n*\n*  Responsive attributes\n*\n*  References:\n*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex\n*  2) https://css-tricks.com/almanac/properties/f/flex/\n*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/\n*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items\n*  5) http://godban.com.ua/projects/flexgrid\n*\n*\n*/\n.md-panel-outer-wrapper {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n._md-panel-hidden {\n  display: none; }\n\n._md-panel-offscreen {\n  left: -9999px; }\n\n._md-panel-fullscreen {\n  border-radius: 0;\n  left: 0;\n  min-height: 100%;\n  min-width: 100%;\n  position: fixed;\n  top: 0; }\n\n._md-panel-shown .md-panel {\n  opacity: 1;\n  transition: none; }\n\n.md-panel {\n  opacity: 0;\n  position: fixed; }\n  .md-panel._md-panel-shown {\n    opacity: 1;\n    transition: none; }\n  .md-panel._md-panel-animate-enter {\n    opacity: 1;\n    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1); }\n  .md-panel._md-panel-animate-leave {\n    opacity: 1;\n    transition: all 0.3s cubic-bezier(0.4, 0, 1, 1); }\n  .md-panel._md-panel-animate-scale-out, .md-panel._md-panel-animate-fade-out {\n    opacity: 0; }\n  .md-panel._md-panel-backdrop {\n    height: 100%;\n    position: absolute;\n    width: 100%; }\n  .md-panel._md-opaque-enter {\n    opacity: .48;\n    transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1); }\n  .md-panel._md-opaque-leave {\n    transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1); }\n\nmd-autocomplete {\n  border-radius: 2px;\n  display: block;\n  height: 40px;\n  position: relative;\n  overflow: visible;\n  min-width: 190px; }\n  md-autocomplete[disabled] input {\n    cursor: default; }\n  md-autocomplete[md-floating-label] {\n    border-radius: 0;\n    background: transparent;\n    height: auto; }\n    md-autocomplete[md-floating-label] md-input-container {\n      padding-bottom: 0; }\n    md-autocomplete[md-floating-label] md-autocomplete-wrap {\n      height: auto; }\n    md-autocomplete[md-floating-label] .md-show-clear-button button {\n      display: block;\n      position: absolute;\n      right: 0;\n      top: 20px;\n      width: 30px;\n      height: 30px; }\n    md-autocomplete[md-floating-label] .md-show-clear-button input {\n      padding-right: 30px; }\n      [dir=rtl] md-autocomplete[md-floating-label] .md-show-clear-button input {\n        padding-right: 0;\n        padding-left: 30px; }\n  md-autocomplete md-autocomplete-wrap {\n    display: flex;\n    flex-direction: row;\n    box-sizing: border-box;\n    position: relative;\n    overflow: visible;\n    height: 40px; }\n    md-autocomplete md-autocomplete-wrap.md-menu-showing {\n      z-index: 51; }\n    md-autocomplete md-autocomplete-wrap md-input-container, md-autocomplete md-autocomplete-wrap input {\n      flex: 1 1 0%;\n      box-sizing: border-box;\n      min-width: 0; }\n    md-autocomplete md-autocomplete-wrap md-progress-linear {\n      position: absolute;\n      bottom: -2px;\n      left: 0; }\n      md-autocomplete md-autocomplete-wrap md-progress-linear.md-inline {\n        bottom: 40px;\n        right: 2px;\n        left: 2px;\n        width: auto; }\n      md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 3px;\n        transition: none; }\n        md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate .md-container {\n          transition: none;\n          height: 3px; }\n        md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-enter {\n          transition: opacity 0.15s linear; }\n          md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-enter.ng-enter-active {\n            opacity: 1; }\n        md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-leave {\n          transition: opacity 0.15s linear; }\n          md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-leave.ng-leave-active {\n            opacity: 0; }\n  md-autocomplete input:not(.md-input) {\n    font-size: 14px;\n    box-sizing: border-box;\n    border: none;\n    box-shadow: none;\n    outline: none;\n    background: transparent;\n    width: 100%;\n    padding: 0 15px;\n    line-height: 40px;\n    height: 40px; }\n    md-autocomplete input:not(.md-input)::-ms-clear {\n      display: none; }\n  md-autocomplete .md-show-clear-button button {\n    position: relative;\n    line-height: 20px;\n    text-align: center;\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n    border: none;\n    border-radius: 50%;\n    padding: 0;\n    font-size: 12px;\n    background: transparent;\n    margin: auto 5px; }\n    md-autocomplete .md-show-clear-button button:after {\n      content: \'\';\n      position: absolute;\n      top: -6px;\n      right: -6px;\n      bottom: -6px;\n      left: -6px;\n      border-radius: 50%;\n      transform: scale(0);\n      opacity: 0;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    md-autocomplete .md-show-clear-button button:focus {\n      outline: none; }\n      md-autocomplete .md-show-clear-button button:focus:after {\n        transform: scale(1);\n        opacity: 1; }\n    md-autocomplete .md-show-clear-button button md-icon {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate3d(-50%, -50%, 0) scale(0.9); }\n      md-autocomplete .md-show-clear-button button md-icon path {\n        stroke-width: 0; }\n    md-autocomplete .md-show-clear-button button.ng-enter {\n      transform: scale(0);\n      transition: transform 0.15s ease-out; }\n      md-autocomplete .md-show-clear-button button.ng-enter.ng-enter-active {\n        transform: scale(1); }\n    md-autocomplete .md-show-clear-button button.ng-leave {\n      transition: transform 0.15s ease-out; }\n      md-autocomplete .md-show-clear-button button.ng-leave.ng-leave-active {\n        transform: scale(0); }\n  @media screen and (-ms-high-contrast: active) {\n    md-autocomplete input {\n      border: 1px solid #fff; }\n    md-autocomplete li:focus {\n      color: #fff; } }\n\n.md-virtual-repeat-container.md-autocomplete-suggestions-container {\n  position: absolute;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n  z-index: 100;\n  height: 100%; }\n\n.md-virtual-repeat-container.md-not-found {\n  height: 48px; }\n\n.md-autocomplete-suggestions {\n  margin: 0;\n  list-style: none;\n  padding: 0; }\n  .md-autocomplete-suggestions li {\n    font-size: 14px;\n    overflow: hidden;\n    padding: 0 15px;\n    line-height: 48px;\n    height: 48px;\n    transition: background 0.15s linear;\n    margin: 0;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n    .md-autocomplete-suggestions li:focus {\n      outline: none; }\n    .md-autocomplete-suggestions li:not(.md-not-found-wrapper) {\n      cursor: pointer; }\n\n@media screen and (-ms-high-contrast: active) {\n  md-autocomplete,\n  .md-autocomplete-suggestions {\n    border: 1px solid #fff; } }\n\nmd-backdrop {\n  transition: opacity 450ms;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 50; }\n  md-backdrop.md-menu-backdrop {\n    position: fixed !important;\n    z-index: 99; }\n  md-backdrop.md-select-backdrop {\n    z-index: 81;\n    transition-duration: 0; }\n  md-backdrop.md-dialog-backdrop {\n    z-index: 79; }\n  md-backdrop.md-bottom-sheet-backdrop {\n    z-index: 69; }\n  md-backdrop.md-sidenav-backdrop {\n    z-index: 59; }\n  md-backdrop.md-click-catcher {\n    position: absolute; }\n  md-backdrop.md-opaque {\n    opacity: .48; }\n    md-backdrop.md-opaque.ng-enter {\n      opacity: 0; }\n    md-backdrop.md-opaque.ng-enter.md-opaque.ng-enter-active {\n      opacity: .48; }\n    md-backdrop.md-opaque.ng-leave {\n      opacity: .48;\n      transition: opacity 400ms; }\n    md-backdrop.md-opaque.ng-leave.md-opaque.ng-leave-active {\n      opacity: 0; }\n\nmd-bottom-sheet {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 8px 16px 88px 16px;\n  z-index: 70;\n  border-top-width: 1px;\n  border-top-style: solid;\n  transform: translate3d(0, 80px, 0);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform; }\n  md-bottom-sheet.md-has-header {\n    padding-top: 0; }\n  md-bottom-sheet.ng-enter {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0); }\n  md-bottom-sheet.ng-enter-active {\n    opacity: 1;\n    display: block;\n    transform: translate3d(0, 80px, 0) !important; }\n  md-bottom-sheet.ng-leave-active {\n    transform: translate3d(0, 100%, 0) !important;\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }\n  md-bottom-sheet .md-subheader {\n    background-color: transparent;\n    font-family: Roboto, "Helvetica Neue", sans-serif;\n    line-height: 56px;\n    padding: 0;\n    white-space: nowrap; }\n  md-bottom-sheet md-inline-icon {\n    display: inline-block;\n    height: 24px;\n    width: 24px;\n    fill: #444; }\n  md-bottom-sheet md-list-item {\n    display: flex;\n    outline: none; }\n    md-bottom-sheet md-list-item:hover {\n      cursor: pointer; }\n  md-bottom-sheet.md-list md-list-item {\n    padding: 0;\n    align-items: center;\n    height: 48px; }\n  md-bottom-sheet.md-grid {\n    padding-left: 24px;\n    padding-right: 24px;\n    padding-top: 0; }\n    md-bottom-sheet.md-grid md-list {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      transition: all 0.5s;\n      align-items: center; }\n    md-bottom-sheet.md-grid md-list-item {\n      flex-direction: column;\n      align-items: center;\n      transition: all 0.5s;\n      height: 96px;\n      margin-top: 8px;\n      margin-bottom: 8px;\n      /* Mixin for how many grid items to show per row */ }\n      @media (max-width: 960px) {\n        md-bottom-sheet.md-grid md-list-item {\n          flex: 1 1 33.33333%;\n          max-width: 33.33333%; }\n          md-bottom-sheet.md-grid md-list-item:nth-of-type(3n + 1) {\n            align-items: flex-start; }\n          md-bottom-sheet.md-grid md-list-item:nth-of-type(3n) {\n            align-items: flex-end; } }\n      @media (min-width: 960px) and (max-width: 1279px) {\n        md-bottom-sheet.md-grid md-list-item {\n          flex: 1 1 25%;\n          max-width: 25%; } }\n      @media (min-width: 1280px) and (max-width: 1919px) {\n        md-bottom-sheet.md-grid md-list-item {\n          flex: 1 1 16.66667%;\n          max-width: 16.66667%; } }\n      @media (min-width: 1920px) {\n        md-bottom-sheet.md-grid md-list-item {\n          flex: 1 1 14.28571%;\n          max-width: 14.28571%; } }\n      md-bottom-sheet.md-grid md-list-item::before {\n        display: none; }\n      md-bottom-sheet.md-grid md-list-item .md-list-item-content {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 48px;\n        padding-bottom: 16px; }\n      md-bottom-sheet.md-grid md-list-item .md-grid-item-content {\n        border: 1px solid transparent;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 80px; }\n      md-bottom-sheet.md-grid md-list-item .md-grid-text {\n        font-weight: 400;\n        line-height: 16px;\n        font-size: 13px;\n        margin: 0;\n        white-space: nowrap;\n        width: 64px;\n        text-align: center;\n        text-transform: none;\n        padding-top: 8px; }\n\n@media screen and (-ms-high-contrast: active) {\n  md-bottom-sheet {\n    border: 1px solid #fff; } }\n\nbutton.md-button::-moz-focus-inner {\n  border: 0; }\n\n.md-button {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  /** Alignment adjustments */\n  min-height: 36px;\n  min-width: 88px;\n  line-height: 36px;\n  vertical-align: middle;\n  align-items: center;\n  text-align: center;\n  border-radius: 2px;\n  box-sizing: border-box;\n  /* Reset default button appearance */\n  user-select: none;\n  outline: none;\n  border: 0;\n  /** Custom styling for button */\n  padding: 0 6px;\n  margin: 6px 8px;\n  background: transparent;\n  color: currentColor;\n  white-space: nowrap;\n  /* Uppercase text content */\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 14px;\n  font-style: inherit;\n  font-variant: inherit;\n  font-family: inherit;\n  text-decoration: none;\n  overflow: hidden;\n  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .md-dense > .md-button:not(.md-dense-disabled),\n  .md-dense :not(.md-dense-disabled) .md-button:not(.md-dense-disabled) {\n    min-height: 32px; }\n  .md-dense > .md-button:not(.md-dense-disabled),\n  .md-dense :not(.md-dense-disabled) .md-button:not(.md-dense-disabled) {\n    line-height: 32px; }\n  .md-dense > .md-button:not(.md-dense-disabled),\n  .md-dense :not(.md-dense-disabled) .md-button:not(.md-dense-disabled) {\n    font-size: 13px; }\n  .md-button:focus {\n    outline: none; }\n  .md-button:hover, .md-button:focus {\n    text-decoration: none; }\n  .md-button.ng-hide, .md-button.ng-leave {\n    transition: none; }\n  .md-button.md-cornered {\n    border-radius: 0; }\n  .md-button.md-icon {\n    padding: 0;\n    background: none; }\n  .md-button.md-raised:not([disabled]) {\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n  .md-button.md-icon-button {\n    margin: 0 6px;\n    height: 40px;\n    min-width: 0;\n    line-height: 24px;\n    padding: 8px;\n    width: 40px;\n    border-radius: 50%; }\n    .md-button.md-icon-button .md-ripple-container {\n      border-radius: 50%;\n      background-clip: padding-box;\n      overflow: hidden;\n      -webkit-mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC"); }\n  .md-button.md-fab {\n    z-index: 20;\n    line-height: 56px;\n    min-width: 0;\n    width: 56px;\n    height: 56px;\n    vertical-align: middle;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n    border-radius: 50%;\n    background-clip: padding-box;\n    overflow: hidden;\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n    transition-property: background-color, box-shadow, transform; }\n    .md-button.md-fab.md-fab-bottom-right {\n      top: auto;\n      right: 20px;\n      bottom: 20px;\n      left: auto;\n      position: absolute; }\n    .md-button.md-fab.md-fab-bottom-left {\n      top: auto;\n      right: auto;\n      bottom: 20px;\n      left: 20px;\n      position: absolute; }\n    .md-button.md-fab.md-fab-top-right {\n      top: 20px;\n      right: 20px;\n      bottom: auto;\n      left: auto;\n      position: absolute; }\n    .md-button.md-fab.md-fab-top-left {\n      top: 20px;\n      right: auto;\n      bottom: auto;\n      left: 20px;\n      position: absolute; }\n    .md-button.md-fab .md-ripple-container {\n      border-radius: 50%;\n      background-clip: padding-box;\n      overflow: hidden;\n      -webkit-mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC"); }\n    .md-button.md-fab.md-mini {\n      line-height: 40px;\n      width: 40px;\n      height: 40px; }\n    .md-button.md-fab.ng-hide, .md-button.md-fab.ng-leave {\n      transition: none; }\n  .md-button:not([disabled]).md-raised.md-focused, .md-button:not([disabled]).md-fab.md-focused {\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n  .md-button:not([disabled]).md-raised:active, .md-button:not([disabled]).md-fab:active {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4); }\n  .md-button .md-ripple-container {\n    border-radius: 2px;\n    background-clip: padding-box;\n    overflow: hidden;\n    -webkit-mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC"); }\n\n.md-button.md-icon-button md-icon,\nbutton.md-button.md-fab md-icon {\n  display: block; }\n\n.md-toast-open-top .md-button.md-fab-top-left,\n.md-toast-open-top .md-button.md-fab-top-right {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform: translate3d(0, 42px, 0); }\n  .md-toast-open-top .md-button.md-fab-top-left:not([disabled]).md-focused, .md-toast-open-top .md-button.md-fab-top-left:not([disabled]):hover,\n  .md-toast-open-top .md-button.md-fab-top-right:not([disabled]).md-focused,\n  .md-toast-open-top .md-button.md-fab-top-right:not([disabled]):hover {\n    transform: translate3d(0, 41px, 0); }\n\n.md-toast-open-bottom .md-button.md-fab-bottom-left,\n.md-toast-open-bottom .md-button.md-fab-bottom-right {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform: translate3d(0, -42px, 0); }\n  .md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]).md-focused, .md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]):hover,\n  .md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]).md-focused,\n  .md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]):hover {\n    transform: translate3d(0, -43px, 0); }\n\n.md-button-group {\n  display: flex;\n  flex: 1;\n  width: 100%; }\n  .md-button-group > .md-button {\n    flex: 1;\n    display: block;\n    overflow: hidden;\n    width: 0;\n    border-width: 1px 0px 1px 1px;\n    border-radius: 0;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n    .md-button-group > .md-button:first-child {\n      border-radius: 2px 0px 0px 2px; }\n    .md-button-group > .md-button:last-child {\n      border-right-width: 1px;\n      border-radius: 0px 2px 2px 0px; }\n\n@media screen and (-ms-high-contrast: active) {\n  .md-button.md-raised,\n  .md-button.md-fab {\n    border: 1px solid #fff; } }\n\nmd-card {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  margin: 8px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); }\n  md-card md-card-header {\n    padding: 16px;\n    display: flex;\n    flex-direction: row; }\n    md-card md-card-header:first-child md-card-avatar {\n      margin-right: 12px; }\n      [dir=rtl] md-card md-card-header:first-child md-card-avatar {\n        margin-right: auto;\n        margin-left: 12px; }\n    md-card md-card-header:last-child md-card-avatar {\n      margin-left: 12px; }\n      [dir=rtl] md-card md-card-header:last-child md-card-avatar {\n        margin-left: auto;\n        margin-right: 12px; }\n    md-card md-card-header md-card-avatar {\n      width: 40px;\n      height: 40px; }\n      md-card md-card-header md-card-avatar .md-user-avatar,\n      md-card md-card-header md-card-avatar md-icon {\n        border-radius: 50%; }\n      md-card md-card-header md-card-avatar md-icon {\n        padding: 8px; }\n        md-card md-card-header md-card-avatar md-icon > svg {\n          height: inherit;\n          width: inherit; }\n      md-card md-card-header md-card-avatar + md-card-header-text {\n        max-height: 40px; }\n        md-card md-card-header md-card-avatar + md-card-header-text .md-title {\n          font-size: 14px; }\n    md-card md-card-header md-card-header-text {\n      display: flex;\n      flex: 1;\n      flex-direction: column; }\n      md-card md-card-header md-card-header-text .md-subhead {\n        font-size: 14px; }\n  md-card > img,\n  md-card > md-card-header img,\n  md-card md-card-title-media img {\n    box-sizing: border-box;\n    display: flex;\n    flex: 0 0 auto;\n    width: 100%;\n    height: auto; }\n  md-card md-card-title {\n    padding: 24px 16px 16px;\n    display: flex;\n    flex: 1 1 auto;\n    flex-direction: row; }\n    md-card md-card-title + md-card-content {\n      padding-top: 0; }\n    md-card md-card-title md-card-title-text {\n      flex: 1;\n      flex-direction: column;\n      display: flex; }\n      md-card md-card-title md-card-title-text .md-subhead {\n        padding-top: 0;\n        font-size: 14px; }\n      md-card md-card-title md-card-title-text:only-child .md-subhead {\n        padding-top: 12px; }\n    md-card md-card-title md-card-title-media {\n      margin-top: -8px; }\n      md-card md-card-title md-card-title-media .md-media-sm {\n        height: 80px;\n        width: 80px; }\n      md-card md-card-title md-card-title-media .md-media-md {\n        height: 112px;\n        width: 112px; }\n      md-card md-card-title md-card-title-media .md-media-lg {\n        height: 152px;\n        width: 152px; }\n  md-card md-card-content {\n    display: block;\n    padding: 16px; }\n    md-card md-card-content > p:first-child {\n      margin-top: 0; }\n    md-card md-card-content > p:last-child {\n      margin-bottom: 0; }\n    md-card md-card-content .md-media-xl {\n      height: 240px;\n      width: 240px; }\n  md-card .md-actions, md-card md-card-actions {\n    margin: 8px; }\n    md-card .md-actions.layout-column .md-button:not(.md-icon-button), md-card md-card-actions.layout-column .md-button:not(.md-icon-button) {\n      margin: 2px 0; }\n      md-card .md-actions.layout-column .md-button:not(.md-icon-button):first-of-type, md-card md-card-actions.layout-column .md-button:not(.md-icon-button):first-of-type {\n        margin-top: 0; }\n      md-card .md-actions.layout-column .md-button:not(.md-icon-button):last-of-type, md-card md-card-actions.layout-column .md-button:not(.md-icon-button):last-of-type {\n        margin-bottom: 0; }\n    md-card .md-actions.layout-column .md-button.md-icon-button, md-card md-card-actions.layout-column .md-button.md-icon-button {\n      margin-top: 6px;\n      margin-bottom: 6px; }\n    md-card .md-actions md-card-icon-actions, md-card md-card-actions md-card-icon-actions {\n      flex: 1;\n      justify-content: flex-start;\n      display: flex;\n      flex-direction: row; }\n    md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button), md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button) {\n      margin: 0 4px; }\n      md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type, md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type {\n        margin-left: 0; }\n        [dir=rtl] md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type, [dir=rtl] md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type {\n          margin-left: auto;\n          margin-right: 0; }\n      md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type, md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type {\n        margin-right: 0; }\n        [dir=rtl] md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type, [dir=rtl] md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type {\n          margin-right: auto;\n          margin-left: 0; }\n    md-card .md-actions:not(.layout-column) .md-button.md-icon-button, md-card md-card-actions:not(.layout-column) .md-button.md-icon-button {\n      margin-left: 6px;\n      margin-right: 6px; }\n      md-card .md-actions:not(.layout-column) .md-button.md-icon-button:first-of-type, md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:first-of-type {\n        margin-left: 12px; }\n        [dir=rtl] md-card .md-actions:not(.layout-column) .md-button.md-icon-button:first-of-type, [dir=rtl] md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:first-of-type {\n          margin-left: auto;\n          margin-right: 12px; }\n      md-card .md-actions:not(.layout-column) .md-button.md-icon-button:last-of-type, md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:last-of-type {\n        margin-right: 12px; }\n        [dir=rtl] md-card .md-actions:not(.layout-column) .md-button.md-icon-button:last-of-type, [dir=rtl] md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:last-of-type {\n          margin-right: auto;\n          margin-left: 12px; }\n    md-card .md-actions:not(.layout-column) .md-button + md-card-icon-actions, md-card md-card-actions:not(.layout-column) .md-button + md-card-icon-actions {\n      flex: 1;\n      justify-content: flex-end;\n      display: flex;\n      flex-direction: row; }\n  md-card md-card-footer {\n    margin-top: auto;\n    padding: 16px; }\n\n@media screen and (-ms-high-contrast: active) {\n  md-card {\n    border: 1px solid #fff; } }\n\n.md-image-no-fill > img {\n  width: auto;\n  height: auto; }\n\n.md-contact-chips .md-chips md-chip {\n  padding: 0 25px 0 0; }\n  [dir=rtl] .md-contact-chips .md-chips md-chip {\n    padding: 0 0 0 25px; }\n  .md-contact-chips .md-chips md-chip .md-contact-avatar {\n    float: left; }\n    [dir=rtl] .md-contact-chips .md-chips md-chip .md-contact-avatar {\n      float: right; }\n    .md-contact-chips .md-chips md-chip .md-contact-avatar img {\n      height: 32px;\n      border-radius: 16px; }\n  .md-contact-chips .md-chips md-chip .md-contact-name {\n    display: inline-block;\n    height: 32px;\n    margin-left: 8px; }\n    [dir=rtl] .md-contact-chips .md-chips md-chip .md-contact-name {\n      margin-left: auto;\n      margin-right: 8px; }\n\n.md-contact-suggestion {\n  height: 56px; }\n  .md-contact-suggestion img {\n    height: 40px;\n    border-radius: 20px;\n    margin-top: 8px; }\n  .md-contact-suggestion .md-contact-name {\n    margin-left: 8px;\n    width: 120px; }\n    [dir=rtl] .md-contact-suggestion .md-contact-name {\n      margin-left: auto;\n      margin-right: 8px; }\n  .md-contact-suggestion .md-contact-name, .md-contact-suggestion .md-contact-email {\n    display: inline-block;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.md-contact-chips-suggestions li {\n  height: 100%; }\n\n.md-chips {\n  display: block;\n  font-family: Roboto, "Helvetica Neue", sans-serif;\n  font-size: 16px;\n  padding: 0 0 8px 3px;\n  vertical-align: middle; }\n  .md-chips:after {\n    content: \'\';\n    display: table;\n    clear: both; }\n  [dir=rtl] .md-chips {\n    padding: 0 3px 8px 0; }\n  .md-chips.md-readonly .md-chip-input-container {\n    min-height: 32px; }\n  .md-chips:not(.md-readonly) {\n    cursor: text; }\n  .md-chips.md-removable md-chip {\n    padding-right: 22px; }\n    [dir=rtl] .md-chips.md-removable md-chip {\n      padding-right: 0;\n      padding-left: 22px; }\n    .md-chips.md-removable md-chip .md-chip-content {\n      padding-right: 4px; }\n      [dir=rtl] .md-chips.md-removable md-chip .md-chip-content {\n        padding-right: 0;\n        padding-left: 4px; }\n  .md-chips md-chip {\n    cursor: default;\n    border-radius: 16px;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    margin: 8px 8px 0 0;\n    padding: 0 12px 0 12px;\n    float: left;\n    box-sizing: border-box;\n    max-width: 100%;\n    position: relative; }\n    [dir=rtl] .md-chips md-chip {\n      margin: 8px 0 0 8px; }\n    [dir=rtl] .md-chips md-chip {\n      float: right; }\n    .md-chips md-chip .md-chip-content {\n      display: block;\n      float: left;\n      white-space: nowrap;\n      max-width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n      [dir=rtl] .md-chips md-chip .md-chip-content {\n        float: right; }\n      .md-chips md-chip .md-chip-content:focus {\n        outline: none; }\n    .md-chips md-chip._md-chip-content-edit-is-enabled {\n      -webkit-user-select: none;\n      /* webkit (safari, chrome) browsers */\n      -moz-user-select: none;\n      /* mozilla browsers */\n      -khtml-user-select: none;\n      /* webkit (konqueror) browsers */\n      -ms-user-select: none;\n      /* IE10+ */ }\n    .md-chips md-chip .md-chip-remove-container {\n      position: absolute;\n      right: 0;\n      line-height: 22px; }\n      [dir=rtl] .md-chips md-chip .md-chip-remove-container {\n        right: auto;\n        left: 0; }\n    .md-chips md-chip .md-chip-remove {\n      text-align: center;\n      width: 32px;\n      height: 32px;\n      min-width: 0;\n      padding: 0;\n      background: transparent;\n      border: none;\n      box-shadow: none;\n      margin: 0;\n      position: relative; }\n      .md-chips md-chip .md-chip-remove md-icon {\n        height: 18px;\n        width: 18px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate3d(-50%, -50%, 0); }\n  .md-chips .md-chip-input-container {\n    display: block;\n    line-height: 32px;\n    margin: 8px 8px 0 0;\n    padding: 0;\n    float: left; }\n    [dir=rtl] .md-chips .md-chip-input-container {\n      margin: 8px 0 0 8px; }\n    [dir=rtl] .md-chips .md-chip-input-container {\n      float: right; }\n    .md-chips .md-chip-input-container input:not([type]), .md-chips .md-chip-input-container input[type="email"], .md-chips .md-chip-input-container input[type="number"], .md-chips .md-chip-input-container input[type="tel"], .md-chips .md-chip-input-container input[type="url"], .md-chips .md-chip-input-container input[type="text"] {\n      border: 0;\n      height: 32px;\n      line-height: 32px;\n      padding: 0; }\n      .md-chips .md-chip-input-container input:not([type]):focus, .md-chips .md-chip-input-container input[type="email"]:focus, .md-chips .md-chip-input-container input[type="number"]:focus, .md-chips .md-chip-input-container input[type="tel"]:focus, .md-chips .md-chip-input-container input[type="url"]:focus, .md-chips .md-chip-input-container input[type="text"]:focus {\n        outline: none; }\n    .md-chips .md-chip-input-container md-autocomplete, .md-chips .md-chip-input-container md-autocomplete-wrap {\n      background: transparent;\n      height: 32px; }\n    .md-chips .md-chip-input-container md-autocomplete md-autocomplete-wrap {\n      box-shadow: none; }\n    .md-chips .md-chip-input-container md-autocomplete input {\n      position: relative; }\n    .md-chips .md-chip-input-container input {\n      border: 0;\n      height: 32px;\n      line-height: 32px;\n      padding: 0; }\n      .md-chips .md-chip-input-container input:focus {\n        outline: none; }\n    .md-chips .md-chip-input-container md-autocomplete, .md-chips .md-chip-input-container md-autocomplete-wrap {\n      height: 32px; }\n    .md-chips .md-chip-input-container md-autocomplete {\n      box-shadow: none; }\n      .md-chips .md-chip-input-container md-autocomplete input {\n        position: relative; }\n    .md-chips .md-chip-input-container:not(:first-child) {\n      margin: 8px 8px 0 0; }\n      [dir=rtl] .md-chips .md-chip-input-container:not(:first-child) {\n        margin: 8px 0 0 8px; }\n    .md-chips .md-chip-input-container input {\n      background: transparent;\n      border-width: 0; }\n  .md-chips md-autocomplete button {\n    display: none; }\n\n@media screen and (-ms-high-contrast: active) {\n  .md-chip-input-container,\n  md-chip {\n    border: 1px solid #fff; }\n  .md-chip-input-container md-autocomplete {\n    border: none; } }\n\n.md-inline-form md-checkbox {\n  margin: 19px 0 18px; }\n\nmd-checkbox {\n  box-sizing: border-box;\n  display: inline-block;\n  margin-bottom: 16px;\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  user-select: none;\n  position: relative;\n  min-width: 20px;\n  min-height: 20px;\n  margin-left: 0;\n  margin-right: 16px; }\n  [dir=rtl] md-checkbox {\n    margin-left: 16px; }\n  [dir=rtl] md-checkbox {\n    margin-right: 0; }\n  md-checkbox:last-of-type {\n    margin-left: 0;\n    margin-right: 0; }\n  md-checkbox.md-focused:not([disabled]) .md-container:before {\n    left: -8px;\n    top: -8px;\n    right: -8px;\n    bottom: -8px; }\n  md-checkbox.md-focused:not([disabled]):not(.md-checked) .md-container:before {\n    background-color: rgba(0, 0, 0, 0.12); }\n  md-checkbox.md-align-top-left > div.md-container {\n    top: 12px; }\n  md-checkbox .md-container {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    box-sizing: border-box;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    left: 0;\n    right: auto; }\n    [dir=rtl] md-checkbox .md-container {\n      left: auto; }\n    [dir=rtl] md-checkbox .md-container {\n      right: 0; }\n    md-checkbox .md-container:before {\n      box-sizing: border-box;\n      background-color: transparent;\n      border-radius: 50%;\n      content: \'\';\n      position: absolute;\n      display: block;\n      height: auto;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      transition: all 0.5s;\n      width: auto; }\n    md-checkbox .md-container:after {\n      box-sizing: border-box;\n      content: \'\';\n      position: absolute;\n      top: -10px;\n      right: -10px;\n      bottom: -10px;\n      left: -10px; }\n    md-checkbox .md-container .md-ripple-container {\n      position: absolute;\n      display: block;\n      width: auto;\n      height: auto;\n      left: -15px;\n      top: -15px;\n      right: -15px;\n      bottom: -15px; }\n  md-checkbox .md-icon {\n    box-sizing: border-box;\n    transition: 240ms;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 20px;\n    height: 20px;\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 2px; }\n  md-checkbox.md-checked .md-icon {\n    border-color: transparent; }\n    md-checkbox.md-checked .md-icon:after {\n      box-sizing: border-box;\n      transform: rotate(45deg);\n      position: absolute;\n      left: 4.66667px;\n      top: 0.22222px;\n      display: table;\n      width: 6.66667px;\n      height: 13.33333px;\n      border-width: 2px;\n      border-style: solid;\n      border-top: 0;\n      border-left: 0;\n      content: \'\'; }\n  md-checkbox[disabled] {\n    cursor: default; }\n  md-checkbox.md-indeterminate .md-icon:after {\n    box-sizing: border-box;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: table;\n    width: 12px;\n    height: 2px;\n    border-width: 2px;\n    border-style: solid;\n    border-top: 0;\n    border-left: 0;\n    content: \'\'; }\n  md-checkbox .md-label {\n    box-sizing: border-box;\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: normal;\n    user-select: text;\n    margin-left: 30px;\n    margin-right: 0; }\n    [dir=rtl] md-checkbox .md-label {\n      margin-left: 0; }\n    [dir=rtl] md-checkbox .md-label {\n      margin-right: 30px; }\n\nmd-content {\n  display: block;\n  position: relative;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n  md-content[md-scroll-y] {\n    overflow-y: auto;\n    overflow-x: hidden; }\n  md-content[md-scroll-x] {\n    overflow-x: auto;\n    overflow-y: hidden; }\n  @media print {\n    md-content {\n      overflow: visible !important; } }\n\n/** Styles for mdCalendar. */\nmd-calendar {\n  font-size: 13px;\n  user-select: none; }\n\n.md-calendar-scroll-mask {\n  display: inline-block;\n  overflow: hidden;\n  height: 308px; }\n  .md-calendar-scroll-mask .md-virtual-repeat-scroller {\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch; }\n    .md-calendar-scroll-mask .md-virtual-repeat-scroller::-webkit-scrollbar {\n      display: none; }\n  .md-calendar-scroll-mask .md-virtual-repeat-offsetter {\n    width: 100%; }\n\n.md-calendar-scroll-container {\n  box-shadow: inset -3px 3px 6px rgba(0, 0, 0, 0.2);\n  display: inline-block;\n  height: 308px;\n  width: 346px; }\n\n.md-calendar-date {\n  height: 44px;\n  width: 44px;\n  text-align: center;\n  padding: 0;\n  border: none;\n  box-sizing: content-box; }\n  .md-calendar-date:first-child {\n    padding-left: 16px; }\n    [dir=rtl] .md-calendar-date:first-child {\n      padding-left: 0;\n      padding-right: 16px; }\n  .md-calendar-date:last-child {\n    padding-right: 16px; }\n    [dir=rtl] .md-calendar-date:last-child {\n      padding-right: 0;\n      padding-left: 16px; }\n  .md-calendar-date.md-calendar-date-disabled {\n    cursor: default; }\n\n.md-calendar-date-selection-indicator {\n  transition: background-color, color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  border-radius: 50%;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px; }\n  .md-calendar-date:not(.md-disabled) .md-calendar-date-selection-indicator {\n    cursor: pointer; }\n\n.md-calendar-month-label {\n  height: 44px;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 0 0 24px; }\n  [dir=rtl] .md-calendar-month-label {\n    padding: 0 24px 0 0; }\n  md-calendar-month .md-calendar-month-label:not(.md-calendar-month-label-disabled) {\n    cursor: pointer; }\n  .md-calendar-month-label md-icon {\n    transform: rotate(180deg); }\n    [dir=rtl] .md-calendar-month-label md-icon {\n      transform: none; }\n  .md-calendar-month-label span {\n    vertical-align: middle; }\n\n.md-calendar-day-header {\n  table-layout: fixed;\n  border-spacing: 0;\n  border-collapse: collapse; }\n  .md-calendar-day-header th {\n    height: 40px;\n    width: 44px;\n    text-align: center;\n    padding: 0;\n    border: none;\n    box-sizing: content-box;\n    font-weight: normal; }\n    .md-calendar-day-header th:first-child {\n      padding-left: 16px; }\n      [dir=rtl] .md-calendar-day-header th:first-child {\n        padding-left: 0;\n        padding-right: 16px; }\n    .md-calendar-day-header th:last-child {\n      padding-right: 16px; }\n      [dir=rtl] .md-calendar-day-header th:last-child {\n        padding-right: 0;\n        padding-left: 16px; }\n\n.md-calendar {\n  table-layout: fixed;\n  border-spacing: 0;\n  border-collapse: collapse; }\n  .md-calendar tr:last-child td {\n    border-bottom-width: 1px;\n    border-bottom-style: solid; }\n  .md-calendar:first-child {\n    border-top: 1px solid transparent; }\n  .md-calendar tbody, .md-calendar td, .md-calendar tr {\n    vertical-align: middle;\n    box-sizing: content-box; }\n\n/** Styles for mdDatepicker. */\nmd-datepicker {\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: middle; }\n\n.md-inline-form md-datepicker {\n  margin-top: 12px; }\n\n.md-datepicker-button {\n  display: inline-block;\n  box-sizing: border-box;\n  background: none;\n  vertical-align: middle;\n  position: relative; }\n  .md-datepicker-button:before {\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    content: \'\';\n    speak: none; }\n\n.md-datepicker-input {\n  font-size: 14px;\n  box-sizing: border-box;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background: transparent;\n  min-width: 120px;\n  max-width: 328px;\n  padding: 0 0 5px; }\n  .md-datepicker-input::-ms-clear {\n    display: none; }\n\n._md-datepicker-floating-label > md-datepicker {\n  overflow: visible; }\n  ._md-datepicker-floating-label > md-datepicker .md-datepicker-input-container {\n    border: none; }\n  ._md-datepicker-floating-label > md-datepicker .md-datepicker-button {\n    float: left;\n    margin-top: -12px;\n    top: 9.5px; }\n    [dir=rtl] ._md-datepicker-floating-label > md-datepicker .md-datepicker-button {\n      float: right; }\n\n._md-datepicker-floating-label .md-input {\n  float: none; }\n\n._md-datepicker-floating-label._md-datepicker-has-calendar-icon > label:not(.md-no-float):not(.md-container-ignore) {\n  right: 18px;\n  left: auto;\n  width: calc(100% - 84px); }\n  [dir=rtl] ._md-datepicker-floating-label._md-datepicker-has-calendar-icon > label:not(.md-no-float):not(.md-container-ignore) {\n    right: auto; }\n  [dir=rtl] ._md-datepicker-floating-label._md-datepicker-has-calendar-icon > label:not(.md-no-float):not(.md-container-ignore) {\n    left: 18px; }\n\n._md-datepicker-floating-label._md-datepicker-has-calendar-icon .md-input-message-animation {\n  margin-left: 64px; }\n  [dir=rtl] ._md-datepicker-floating-label._md-datepicker-has-calendar-icon .md-input-message-animation {\n    margin-left: auto;\n    margin-right: 64px; }\n\n._md-datepicker-has-triangle-icon {\n  padding-right: 18px;\n  margin-right: -18px; }\n  [dir=rtl] ._md-datepicker-has-triangle-icon {\n    padding-right: 0;\n    padding-left: 18px; }\n  [dir=rtl] ._md-datepicker-has-triangle-icon {\n    margin-right: auto;\n    margin-left: -18px; }\n\n.md-datepicker-input-container {\n  position: relative;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  display: inline-block;\n  width: auto; }\n  .md-icon-button + .md-datepicker-input-container {\n    margin-left: 12px; }\n    [dir=rtl] .md-icon-button + .md-datepicker-input-container {\n      margin-left: auto;\n      margin-right: 12px; }\n  .md-datepicker-input-container.md-datepicker-focused {\n    border-bottom-width: 2px; }\n\n.md-datepicker-is-showing .md-scroll-mask {\n  z-index: 99; }\n\n.md-datepicker-calendar-pane {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  z-index: 100;\n  border-width: 1px;\n  border-style: solid;\n  background: transparent;\n  transform: scale(0);\n  transform-origin: 0 0;\n  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .md-datepicker-calendar-pane.md-pane-open {\n    transform: scale(1); }\n\n.md-datepicker-input-mask {\n  height: 40px;\n  width: 340px;\n  position: relative;\n  overflow: hidden;\n  background: transparent;\n  pointer-events: none;\n  cursor: text; }\n\n.md-datepicker-calendar {\n  opacity: 0;\n  transition: opacity 0.2s cubic-bezier(0.5, 0, 0.25, 1); }\n  .md-pane-open .md-datepicker-calendar {\n    opacity: 1; }\n  .md-datepicker-calendar md-calendar:focus {\n    outline: none; }\n\n.md-datepicker-expand-triangle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid; }\n\n.md-datepicker-triangle-button {\n  position: absolute;\n  right: 0;\n  bottom: -2.5px;\n  transform: translateX(45%); }\n  [dir=rtl] .md-datepicker-triangle-button {\n    right: auto;\n    left: 0; }\n  [dir=rtl] .md-datepicker-triangle-button {\n    transform: translateX(-45%); }\n\n.md-datepicker-triangle-button.md-button.md-icon-button {\n  height: 36px;\n  width: 36px;\n  position: absolute;\n  padding: 8px; }\n\nmd-datepicker[disabled] .md-datepicker-input-container {\n  border-bottom-color: transparent; }\n\nmd-datepicker[disabled] .md-datepicker-triangle-button {\n  display: none; }\n\n.md-datepicker-open {\n  overflow: hidden; }\n  .md-datepicker-open .md-datepicker-input-container,\n  .md-datepicker-open input.md-input {\n    border-bottom-color: transparent; }\n  .md-datepicker-open .md-datepicker-triangle-button,\n  .md-datepicker-open.md-input-has-value > label,\n  .md-datepicker-open.md-input-has-placeholder > label {\n    display: none; }\n\n.md-datepicker-pos-adjusted .md-datepicker-input-mask {\n  display: none; }\n\n.md-datepicker-calendar-pane .md-calendar {\n  transform: translateY(-85px);\n  transition: transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-delay: 0.125s; }\n\n.md-datepicker-calendar-pane.md-pane-open .md-calendar {\n  transform: translateY(0); }\n\n.md-dialog-is-showing {\n  max-height: 100%; }\n\n.md-dialog-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 80;\n  overflow: hidden; }\n\nmd-dialog {\n  opacity: 0;\n  min-width: 240px;\n  max-width: 80%;\n  max-height: 80%;\n  position: relative;\n  overflow: auto;\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column; }\n  md-dialog.md-transition-in {\n    opacity: 1;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transform: translate(0, 0) scale(1); }\n  md-dialog.md-transition-out {\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transform: translate(0, 100%) scale(0.2); }\n  md-dialog > form {\n    display: flex;\n    flex-direction: column;\n    overflow: auto; }\n  md-dialog .md-dialog-content {\n    padding: 24px; }\n  md-dialog md-dialog-content {\n    order: 1;\n    flex-direction: column;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\n    md-dialog md-dialog-content:not([layout=row]) > *:first-child:not(.md-subheader) {\n      margin-top: 0; }\n    md-dialog md-dialog-content:focus {\n      outline: none; }\n    md-dialog md-dialog-content .md-subheader {\n      margin: 0; }\n    md-dialog md-dialog-content .md-dialog-content-body {\n      width: 100%; }\n    md-dialog md-dialog-content .md-prompt-input-container {\n      width: 100%;\n      box-sizing: border-box; }\n  md-dialog .md-actions, md-dialog md-dialog-actions {\n    display: flex;\n    order: 2;\n    box-sizing: border-box;\n    align-items: center;\n    justify-content: flex-end;\n    margin-bottom: 0;\n    padding-right: 8px;\n    padding-left: 16px;\n    min-height: 52px;\n    overflow: hidden; }\n    [dir=rtl] md-dialog .md-actions, [dir=rtl] md-dialog md-dialog-actions {\n      padding-right: 16px; }\n    [dir=rtl] md-dialog .md-actions, [dir=rtl] md-dialog md-dialog-actions {\n      padding-left: 8px; }\n    md-dialog .md-actions .md-button, md-dialog md-dialog-actions .md-button {\n      margin-bottom: 8px;\n      margin-left: 8px;\n      margin-right: 0;\n      margin-top: 8px; }\n      [dir=rtl] md-dialog .md-actions .md-button, [dir=rtl] md-dialog md-dialog-actions .md-button {\n        margin-left: 0; }\n      [dir=rtl] md-dialog .md-actions .md-button, [dir=rtl] md-dialog md-dialog-actions .md-button {\n        margin-right: 8px; }\n  md-dialog.md-content-overflow .md-actions, md-dialog.md-content-overflow md-dialog-actions {\n    border-top-width: 1px;\n    border-top-style: solid; }\n\n@media screen and (-ms-high-contrast: active) {\n  md-dialog {\n    border: 1px solid #fff; } }\n\n@media (max-width: 959px) {\n  md-dialog.md-dialog-fullscreen {\n    min-height: 100%;\n    min-width: 100%;\n    border-radius: 0; } }\n\nmd-divider {\n  display: block;\n  border-top-width: 1px;\n  border-top-style: solid;\n  margin: 0; }\n  md-divider[md-inset] {\n    margin-left: 80px; }\n    [dir=rtl] md-divider[md-inset] {\n      margin-left: auto;\n      margin-right: 80px; }\n\n.layout-row > md-divider,\n.layout-xs-row > md-divider, .layout-gt-xs-row > md-divider,\n.layout-sm-row > md-divider, .layout-gt-sm-row > md-divider,\n.layout-md-row > md-divider, .layout-gt-md-row > md-divider,\n.layout-lg-row > md-divider, .layout-gt-lg-row > md-divider,\n.layout-xl-row > md-divider {\n  border-top-width: 0;\n  border-right-width: 1px;\n  border-right-style: solid; }\n\nmd-fab-speed-dial {\n  position: relative;\n  display: flex;\n  align-items: center;\n  z-index: 20;\n  /*\n   * Hide some graphics glitches if switching animation types\n   */\n  /*\n   * Handle the animations\n   */ }\n  md-fab-speed-dial.md-fab-bottom-right {\n    top: auto;\n    right: 20px;\n    bottom: 20px;\n    left: auto;\n    position: absolute; }\n  md-fab-speed-dial.md-fab-bottom-left {\n    top: auto;\n    right: auto;\n    bottom: 20px;\n    left: 20px;\n    position: absolute; }\n  md-fab-speed-dial.md-fab-top-right {\n    top: 20px;\n    right: 20px;\n    bottom: auto;\n    left: auto;\n    position: absolute; }\n  md-fab-speed-dial.md-fab-top-left {\n    top: 20px;\n    right: auto;\n    bottom: auto;\n    left: 20px;\n    position: absolute; }\n  md-fab-speed-dial:not(.md-hover-full) {\n    pointer-events: none; }\n    md-fab-speed-dial:not(.md-hover-full) md-fab-trigger, md-fab-speed-dial:not(.md-hover-full) .md-fab-action-item {\n      pointer-events: auto; }\n    md-fab-speed-dial:not(.md-hover-full).md-is-open {\n      pointer-events: auto; }\n  md-fab-speed-dial ._md-css-variables {\n    z-index: 20; }\n  md-fab-speed-dial.md-is-open .md-fab-action-item {\n    align-items: center; }\n  md-fab-speed-dial md-fab-actions {\n    display: flex;\n    height: auto; }\n    md-fab-speed-dial md-fab-actions .md-fab-action-item {\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }\n  md-fab-speed-dial.md-down {\n    flex-direction: column; }\n    md-fab-speed-dial.md-down md-fab-trigger {\n      order: 1; }\n    md-fab-speed-dial.md-down md-fab-actions {\n      flex-direction: column;\n      order: 2; }\n  md-fab-speed-dial.md-up {\n    flex-direction: column; }\n    md-fab-speed-dial.md-up md-fab-trigger {\n      order: 2; }\n    md-fab-speed-dial.md-up md-fab-actions {\n      flex-direction: column-reverse;\n      order: 1; }\n  md-fab-speed-dial.md-left {\n    flex-direction: row; }\n    md-fab-speed-dial.md-left md-fab-trigger {\n      order: 2; }\n    md-fab-speed-dial.md-left md-fab-actions {\n      flex-direction: row-reverse;\n      order: 1; }\n      md-fab-speed-dial.md-left md-fab-actions .md-fab-action-item {\n        transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }\n  md-fab-speed-dial.md-right {\n    flex-direction: row; }\n    md-fab-speed-dial.md-right md-fab-trigger {\n      order: 1; }\n    md-fab-speed-dial.md-right md-fab-actions {\n      flex-direction: row;\n      order: 2; }\n      md-fab-speed-dial.md-right md-fab-actions .md-fab-action-item {\n        transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }\n  md-fab-speed-dial.md-fling-remove .md-fab-action-item > *, md-fab-speed-dial.md-scale-remove .md-fab-action-item > * {\n    visibility: hidden; }\n  md-fab-speed-dial.md-fling .md-fab-action-item {\n    opacity: 1; }\n  md-fab-speed-dial.md-fling.md-animations-waiting .md-fab-action-item {\n    opacity: 0;\n    transition-duration: 0s; }\n  md-fab-speed-dial.md-scale .md-fab-action-item {\n    transform: scale(0);\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n    transition-duration: 0.14286s; }\n\nmd-fab-toolbar {\n  display: block;\n  /*\n   * Closed styling\n   */\n  /*\n   * Hover styling\n   */ }\n  md-fab-toolbar.md-fab-bottom-right {\n    top: auto;\n    right: 20px;\n    bottom: 20px;\n    left: auto;\n    position: absolute; }\n  md-fab-toolbar.md-fab-bottom-left {\n    top: auto;\n    right: auto;\n    bottom: 20px;\n    left: 20px;\n    position: absolute; }\n  md-fab-toolbar.md-fab-top-right {\n    top: 20px;\n    right: 20px;\n    bottom: auto;\n    left: auto;\n    position: absolute; }\n  md-fab-toolbar.md-fab-top-left {\n    top: 20px;\n    right: auto;\n    bottom: auto;\n    left: 20px;\n    position: absolute; }\n  md-fab-toolbar .md-fab-toolbar-wrapper {\n    display: block;\n    position: relative;\n    overflow: hidden;\n    height: 68px; }\n  md-fab-toolbar md-fab-trigger {\n    position: absolute;\n    z-index: 20; }\n    md-fab-toolbar md-fab-trigger button {\n      overflow: visible !important; }\n    md-fab-toolbar md-fab-trigger .md-fab-toolbar-background {\n      display: block;\n      position: absolute;\n      z-index: 21;\n      opacity: 1;\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }\n    md-fab-toolbar md-fab-trigger md-icon {\n      position: relative;\n      z-index: 22;\n      opacity: 1;\n      transition: all 200ms ease-in; }\n  md-fab-toolbar.md-left md-fab-trigger {\n    right: 0; }\n    [dir=rtl] md-fab-toolbar.md-left md-fab-trigger {\n      right: auto;\n      left: 0; }\n  md-fab-toolbar.md-left .md-toolbar-tools {\n    flex-direction: row-reverse; }\n    md-fab-toolbar.md-left .md-toolbar-tools > .md-button:first-child {\n      margin-right: 0.6rem; }\n      [dir=rtl] md-fab-toolbar.md-left .md-toolbar-tools > .md-button:first-child {\n        margin-right: auto;\n        margin-left: 0.6rem; }\n    md-fab-toolbar.md-left .md-toolbar-tools > .md-button:first-child {\n      margin-left: -0.8rem; }\n      [dir=rtl] md-fab-toolbar.md-left .md-toolbar-tools > .md-button:first-child {\n        margin-left: auto;\n        margin-right: -0.8rem; }\n    md-fab-toolbar.md-left .md-toolbar-tools > .md-button:last-child {\n      margin-right: 8px; }\n      [dir=rtl] md-fab-toolbar.md-left .md-toolbar-tools > .md-button:last-child {\n        margin-right: auto;\n        margin-left: 8px; }\n  md-fab-toolbar.md-right md-fab-trigger {\n    left: 0; }\n    [dir=rtl] md-fab-toolbar.md-right md-fab-trigger {\n      left: auto;\n      right: 0; }\n  md-fab-toolbar.md-right .md-toolbar-tools {\n    flex-direction: row; }\n  md-fab-toolbar md-toolbar {\n    background-color: transparent !important;\n    pointer-events: none;\n    z-index: 23; }\n    md-fab-toolbar md-toolbar .md-toolbar-tools {\n      padding: 0 20px;\n      margin-top: 3px; }\n    md-fab-toolbar md-toolbar .md-fab-action-item {\n      opacity: 0;\n      transform: scale(0);\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n      transition-duration: 0.15s; }\n  md-fab-toolbar.md-is-open md-fab-trigger > button {\n    box-shadow: none; }\n    md-fab-toolbar.md-is-open md-fab-trigger > button md-icon {\n      opacity: 0; }\n  md-fab-toolbar.md-is-open .md-fab-action-item {\n    opacity: 1;\n    transform: scale(1); }\n\nmd-icon {\n  margin: auto;\n  background-repeat: no-repeat no-repeat;\n  display: inline-block;\n  vertical-align: middle;\n  fill: currentColor;\n  height: 24px;\n  width: 24px;\n  min-height: 24px;\n  min-width: 24px; }\n  md-icon svg {\n    pointer-events: none;\n    display: block; }\n  md-icon[md-font-icon] {\n    line-height: 24px;\n    width: auto; }\n\nmd-grid-list {\n  box-sizing: border-box;\n  display: block;\n  position: relative; }\n  md-grid-list md-grid-tile,\n  md-grid-list md-grid-tile > figure,\n  md-grid-list md-grid-tile-header,\n  md-grid-list md-grid-tile-footer {\n    box-sizing: border-box; }\n  md-grid-list md-grid-tile {\n    display: block;\n    position: absolute; }\n    md-grid-list md-grid-tile figure {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: 0;\n      margin: 0; }\n    md-grid-list md-grid-tile md-grid-tile-header,\n    md-grid-list md-grid-tile md-grid-tile-footer {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      height: 48px;\n      color: #fff;\n      background: rgba(0, 0, 0, 0.18);\n      overflow: hidden;\n      position: absolute;\n      left: 0;\n      right: 0; }\n      md-grid-list md-grid-tile md-grid-tile-header h3,\n      md-grid-list md-grid-tile md-grid-tile-header h4,\n      md-grid-list md-grid-tile md-grid-tile-footer h3,\n      md-grid-list md-grid-tile md-grid-tile-footer h4 {\n        font-weight: 400;\n        margin: 0 0 0 16px; }\n      md-grid-list md-grid-tile md-grid-tile-header h3,\n      md-grid-list md-grid-tile md-grid-tile-footer h3 {\n        font-size: 14px; }\n      md-grid-list md-grid-tile md-grid-tile-header h4,\n      md-grid-list md-grid-tile md-grid-tile-footer h4 {\n        font-size: 12px; }\n    md-grid-list md-grid-tile md-grid-tile-header {\n      top: 0; }\n    md-grid-list md-grid-tile md-grid-tile-footer {\n      bottom: 0; }\n\n@media screen and (-ms-high-contrast: active) {\n  md-grid-tile {\n    border: 1px solid #fff; }\n  md-grid-tile-footer {\n    border-top: 1px solid #fff; } }\n\nmd-input-container {\n  display: inline-block;\n  position: relative;\n  padding: 2px;\n  margin: 18px 0;\n  vertical-align: middle;\n  /*\n   * The .md-input class is added to the input/textarea\n   */ }\n  md-input-container:after {\n    content: \'\';\n    display: table;\n    clear: both; }\n  md-input-container.md-block {\n    display: block; }\n  md-input-container .md-errors-spacer {\n    float: right;\n    min-height: 24px;\n    min-width: 1px; }\n    [dir=rtl] md-input-container .md-errors-spacer {\n      float: left; }\n  md-input-container > md-icon {\n    position: absolute;\n    top: 8px;\n    left: 2px;\n    right: auto; }\n    [dir=rtl] md-input-container > md-icon {\n      left: auto; }\n    [dir=rtl] md-input-container > md-icon {\n      right: 2px; }\n  md-input-container textarea,\n  md-input-container input[type="text"],\n  md-input-container input[type="password"],\n  md-input-container input[type="datetime"],\n  md-input-container input[type="datetime-local"],\n  md-input-container input[type="date"],\n  md-input-container input[type="month"],\n  md-input-container input[type="time"],\n  md-input-container input[type="week"],\n  md-input-container input[type="number"],\n  md-input-container input[type="email"],\n  md-input-container input[type="url"],\n  md-input-container input[type="search"],\n  md-input-container input[type="tel"],\n  md-input-container input[type="color"] {\n    /* remove default appearance from all input/textarea */\n    -moz-appearance: none;\n    -webkit-appearance: none; }\n  md-input-container input[type="date"],\n  md-input-container input[type="datetime-local"],\n  md-input-container input[type="month"],\n  md-input-container input[type="time"],\n  md-input-container input[type="week"] {\n    min-height: 26px; }\n  md-input-container textarea {\n    resize: none;\n    overflow: hidden; }\n    md-input-container textarea.md-input {\n      min-height: 26px;\n      -ms-flex-preferred-size: auto; }\n    md-input-container textarea[md-no-autogrow] {\n      height: auto;\n      overflow: auto; }\n  md-input-container label:not(.md-container-ignore) {\n    position: absolute;\n    bottom: 100%;\n    left: 0;\n    right: auto; }\n    [dir=rtl] md-input-container label:not(.md-container-ignore) {\n      left: auto; }\n    [dir=rtl] md-input-container label:not(.md-container-ignore) {\n      right: 0; }\n    md-input-container label:not(.md-container-ignore).md-required:after {\n      content: \' *\';\n      font-size: 13px;\n      vertical-align: top; }\n  md-input-container label:not(.md-no-float):not(.md-container-ignore),\n  md-input-container .md-placeholder {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    order: 1;\n    pointer-events: none;\n    -webkit-font-smoothing: antialiased;\n    padding-left: 3px;\n    padding-right: 0;\n    z-index: 1;\n    transform: translate3d(0, 28px, 0) scale(1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    max-width: 100%;\n    transform-origin: left top; }\n    [dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore), [dir=rtl]\n    md-input-container .md-placeholder {\n      padding-left: 0; }\n    [dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore), [dir=rtl]\n    md-input-container .md-placeholder {\n      padding-right: 3px; }\n    [dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore), [dir=rtl]\n    md-input-container .md-placeholder {\n      transform-origin: right top; }\n  md-input-container .md-placeholder {\n    position: absolute;\n    top: 0;\n    opacity: 0;\n    transition-property: opacity, transform;\n    transform: translate3d(0, 30px, 0); }\n  md-input-container.md-input-focused .md-placeholder {\n    opacity: 1;\n    transform: translate3d(0, 24px, 0); }\n  md-input-container.md-input-has-value .md-placeholder {\n    transition: none;\n    opacity: 0; }\n  md-input-container:not(.md-input-has-value) input:not(:focus),\n  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-ampm-field,\n  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-day-field,\n  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-hour-field,\n  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-millisecond-field,\n  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-minute-field,\n  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-month-field,\n  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-second-field,\n  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-week-field,\n  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-year-field,\n  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-text {\n    color: transparent; }\n  md-input-container .md-input {\n    order: 2;\n    display: block;\n    margin-top: 0;\n    background: none;\n    padding-top: 2px;\n    padding-bottom: 1px;\n    padding-left: 2px;\n    padding-right: 2px;\n    border-width: 0 0 1px 0;\n    line-height: 26px;\n    height: 30px;\n    -ms-flex-preferred-size: 26px;\n    border-radius: 0;\n    border-style: solid;\n    width: 100%;\n    box-sizing: border-box;\n    float: left; }\n    [dir=rtl] md-input-container .md-input {\n      float: right; }\n    md-input-container .md-input:focus {\n      outline: none; }\n    md-input-container .md-input:invalid {\n      outline: none;\n      box-shadow: none; }\n    md-input-container .md-input.md-no-flex {\n      flex: none !important; }\n  md-input-container .md-char-counter {\n    text-align: right;\n    padding-right: 2px;\n    padding-left: 0; }\n    [dir=rtl] md-input-container .md-char-counter {\n      text-align: left; }\n    [dir=rtl] md-input-container .md-char-counter {\n      padding-right: 0; }\n    [dir=rtl] md-input-container .md-char-counter {\n      padding-left: 2px; }\n  md-input-container .md-input-messages-animation {\n    position: relative;\n    order: 4;\n    overflow: hidden;\n    clear: left; }\n    [dir=rtl] md-input-container .md-input-messages-animation {\n      clear: right; }\n  md-input-container .md-input-message-animation, md-input-container .md-char-counter {\n    font-size: 12px;\n    line-height: 14px;\n    overflow: hidden;\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n    opacity: 1;\n    margin-top: 0;\n    padding-top: 5px; }\n    md-input-container .md-input-message-animation:not(.md-char-counter), md-input-container .md-char-counter:not(.md-char-counter) {\n      padding-right: 5px;\n      padding-left: 0; }\n      [dir=rtl] md-input-container .md-input-message-animation:not(.md-char-counter), [dir=rtl] md-input-container .md-char-counter:not(.md-char-counter) {\n        padding-right: 0; }\n      [dir=rtl] md-input-container .md-input-message-animation:not(.md-char-counter), [dir=rtl] md-input-container .md-char-counter:not(.md-char-counter) {\n        padding-left: 5px; }\n  md-input-container:not(.md-input-invalid) .md-auto-hide .md-input-message-animation {\n    opacity: 0;\n    margin-top: -100px; }\n  md-input-container .md-input-message-animation.ng-enter-prepare {\n    opacity: 0;\n    margin-top: -100px; }\n  md-input-container .md-input-message-animation.ng-enter:not(.ng-enter-active) {\n    opacity: 0;\n    margin-top: -100px; }\n  md-input-container.md-input-focused label:not(.md-no-float), md-input-container.md-input-has-placeholder label:not(.md-no-float), md-input-container.md-input-has-value label:not(.md-no-float) {\n    transform: translate3d(0, 6px, 0) scale(0.75);\n    transition: transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s, width cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s; }\n  md-input-container.md-input-has-value label {\n    transition: none; }\n  md-input-container.md-input-focused .md-input,\n  md-input-container .md-input.ng-invalid.ng-dirty,\n  md-input-container.md-input-resized .md-input {\n    padding-bottom: 0;\n    border-width: 0 0 2px 0; }\n  md-input-container .md-input[disabled],\n  [disabled] md-input-container .md-input {\n    background-position: bottom -1px left 0;\n    background-size: 4px 1px;\n    background-repeat: repeat-x; }\n  md-input-container.md-icon-float {\n    transition: margin-top 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    md-input-container.md-icon-float > label {\n      pointer-events: none;\n      position: absolute; }\n    md-input-container.md-icon-float > md-icon {\n      top: 8px;\n      left: 2px;\n      right: auto; }\n      [dir=rtl] md-input-container.md-icon-float > md-icon {\n        left: auto; }\n      [dir=rtl] md-input-container.md-icon-float > md-icon {\n        right: 2px; }\n  md-input-container.md-icon-left > label:not(.md-no-float):not(.md-container-ignore),\n  md-input-container.md-icon-left > label .md-placeholder, md-input-container.md-icon-right > label:not(.md-no-float):not(.md-container-ignore),\n  md-input-container.md-icon-right > label .md-placeholder {\n    width: calc(100% - 36px - 18px); }\n  md-input-container.md-icon-left {\n    padding-left: 36px;\n    padding-right: 0; }\n    [dir=rtl] md-input-container.md-icon-left {\n      padding-left: 0; }\n    [dir=rtl] md-input-container.md-icon-left {\n      padding-right: 36px; }\n    md-input-container.md-icon-left > label {\n      left: 36px;\n      right: auto; }\n      [dir=rtl] md-input-container.md-icon-left > label {\n        left: auto; }\n      [dir=rtl] md-input-container.md-icon-left > label {\n        right: 36px; }\n  md-input-container.md-icon-right {\n    padding-left: 0;\n    padding-right: 36px; }\n    [dir=rtl] md-input-container.md-icon-right {\n      padding-left: 36px; }\n    [dir=rtl] md-input-container.md-icon-right {\n      padding-right: 0; }\n    md-input-container.md-icon-right > md-icon:last-of-type {\n      margin: 0;\n      right: 2px;\n      left: auto; }\n      [dir=rtl] md-input-container.md-icon-right > md-icon:last-of-type {\n        right: auto; }\n      [dir=rtl] md-input-container.md-icon-right > md-icon:last-of-type {\n        left: 2px; }\n  md-input-container.md-icon-left.md-icon-right {\n    padding-left: 36px;\n    padding-right: 36px; }\n    md-input-container.md-icon-left.md-icon-right > label:not(.md-no-float):not(.md-container-ignore),\n    md-input-container.md-icon-left.md-icon-right > label .md-placeholder {\n      width: calc(100% - (36px * 2)); }\n\n.md-resize-wrapper {\n  position: relative; }\n  .md-resize-wrapper:after {\n    content: \'\';\n    display: table;\n    clear: both; }\n\n.md-resize-handle {\n  position: absolute;\n  bottom: -5px;\n  left: 0;\n  height: 10px;\n  background: transparent;\n  width: 100%;\n  cursor: ns-resize; }\n\n@media screen and (-ms-high-contrast: active) {\n  md-input-container.md-default-theme > md-icon {\n    fill: #fff; } }\n\nmd-list {\n  display: block;\n  padding: 8px 0px 8px 0px; }\n  md-list .md-subheader {\n    font-size: 14px;\n    font-weight: 500;\n    letter-spacing: 0.010em;\n    line-height: 1.2em; }\n  md-list.md-dense md-list-item,\n  md-list.md-dense md-list-item .md-list-item-inner {\n    min-height: 48px; }\n    md-list.md-dense md-list-item::before,\n    md-list.md-dense md-list-item .md-list-item-inner::before {\n      content: \'\';\n      min-height: 48px;\n      visibility: hidden;\n      display: inline-block; }\n    md-list.md-dense md-list-item md-icon:first-child,\n    md-list.md-dense md-list-item .md-list-item-inner md-icon:first-child {\n      width: 20px;\n      height: 20px; }\n    md-list.md-dense md-list-item > md-icon:first-child:not(.md-avatar-icon),\n    md-list.md-dense md-list-item .md-list-item-inner > md-icon:first-child:not(.md-avatar-icon) {\n      margin-right: 36px; }\n      [dir=rtl] md-list.md-dense md-list-item > md-icon:first-child:not(.md-avatar-icon), [dir=rtl]\n      md-list.md-dense md-list-item .md-list-item-inner > md-icon:first-child:not(.md-avatar-icon) {\n        margin-right: auto;\n        margin-left: 36px; }\n    md-list.md-dense md-list-item .md-avatar, md-list.md-dense md-list-item .md-avatar-icon,\n    md-list.md-dense md-list-item .md-list-item-inner .md-avatar,\n    md-list.md-dense md-list-item .md-list-item-inner .md-avatar-icon {\n      margin-right: 20px; }\n      [dir=rtl] md-list.md-dense md-list-item .md-avatar, [dir=rtl] md-list.md-dense md-list-item .md-avatar-icon, [dir=rtl]\n      md-list.md-dense md-list-item .md-list-item-inner .md-avatar, [dir=rtl]\n      md-list.md-dense md-list-item .md-list-item-inner .md-avatar-icon {\n        margin-right: auto;\n        margin-left: 20px; }\n    md-list.md-dense md-list-item .md-avatar,\n    md-list.md-dense md-list-item .md-list-item-inner .md-avatar {\n      flex: none;\n      width: 36px;\n      height: 36px; }\n  md-list.md-dense md-list-item.md-2-line .md-list-item-text.md-offset, md-list.md-dense md-list-item.md-2-line > .md-no-style .md-list-item-text.md-offset, md-list.md-dense md-list-item.md-3-line .md-list-item-text.md-offset, md-list.md-dense md-list-item.md-3-line > .md-no-style .md-list-item-text.md-offset {\n    margin-left: 56px; }\n    [dir=rtl] md-list.md-dense md-list-item.md-2-line .md-list-item-text.md-offset, [dir=rtl] md-list.md-dense md-list-item.md-2-line > .md-no-style .md-list-item-text.md-offset, [dir=rtl] md-list.md-dense md-list-item.md-3-line .md-list-item-text.md-offset, [dir=rtl] md-list.md-dense md-list-item.md-3-line > .md-no-style .md-list-item-text.md-offset {\n      margin-left: auto;\n      margin-right: 56px; }\n  md-list.md-dense md-list-item.md-2-line .md-list-item-text h3,\n  md-list.md-dense md-list-item.md-2-line .md-list-item-text h4,\n  md-list.md-dense md-list-item.md-2-line .md-list-item-text p, md-list.md-dense md-list-item.md-2-line > .md-no-style .md-list-item-text h3,\n  md-list.md-dense md-list-item.md-2-line > .md-no-style .md-list-item-text h4,\n  md-list.md-dense md-list-item.md-2-line > .md-no-style .md-list-item-text p, md-list.md-dense md-list-item.md-3-line .md-list-item-text h3,\n  md-list.md-dense md-list-item.md-3-line .md-list-item-text h4,\n  md-list.md-dense md-list-item.md-3-line .md-list-item-text p, md-list.md-dense md-list-item.md-3-line > .md-no-style .md-list-item-text h3,\n  md-list.md-dense md-list-item.md-3-line > .md-no-style .md-list-item-text h4,\n  md-list.md-dense md-list-item.md-3-line > .md-no-style .md-list-item-text p {\n    line-height: 1.05;\n    font-size: 12px; }\n  md-list.md-dense md-list-item.md-2-line .md-list-item-text h3, md-list.md-dense md-list-item.md-2-line > .md-no-style .md-list-item-text h3, md-list.md-dense md-list-item.md-3-line .md-list-item-text h3, md-list.md-dense md-list-item.md-3-line > .md-no-style .md-list-item-text h3 {\n    font-size: 13px; }\n  md-list.md-dense md-list-item.md-2-line, md-list.md-dense md-list-item.md-2-line > .md-no-style {\n    min-height: 60px; }\n    md-list.md-dense md-list-item.md-2-line::before, md-list.md-dense md-list-item.md-2-line > .md-no-style::before {\n      content: \'\';\n      min-height: 60px;\n      visibility: hidden;\n      display: inline-block; }\n    md-list.md-dense md-list-item.md-2-line > .md-avatar, md-list.md-dense md-list-item.md-2-line .md-avatar-icon, md-list.md-dense md-list-item.md-2-line > .md-no-style > .md-avatar, md-list.md-dense md-list-item.md-2-line > .md-no-style .md-avatar-icon {\n      margin-top: 12px; }\n  md-list.md-dense md-list-item.md-3-line, md-list.md-dense md-list-item.md-3-line > .md-no-style {\n    min-height: 76px; }\n    md-list.md-dense md-list-item.md-3-line::before, md-list.md-dense md-list-item.md-3-line > .md-no-style::before {\n      content: \'\';\n      min-height: 76px;\n      visibility: hidden;\n      display: inline-block; }\n    md-list.md-dense md-list-item.md-3-line > md-icon:first-child,\n    md-list.md-dense md-list-item.md-3-line > .md-avatar, md-list.md-dense md-list-item.md-3-line > .md-no-style > md-icon:first-child,\n    md-list.md-dense md-list-item.md-3-line > .md-no-style > .md-avatar {\n      margin-top: 16px; }\n\nmd-list-item {\n  position: relative; }\n  md-list-item.md-proxy-focus.md-focused .md-no-style {\n    transition: background-color 0.15s linear; }\n  md-list-item._md-button-wrap {\n    position: relative; }\n    md-list-item._md-button-wrap > div.md-button:first-child {\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      padding: 0 16px;\n      margin: 0;\n      font-weight: 400;\n      text-align: left;\n      border: medium none; }\n      [dir=rtl] md-list-item._md-button-wrap > div.md-button:first-child {\n        text-align: right; }\n      md-list-item._md-button-wrap > div.md-button:first-child > .md-button:first-child {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        margin: 0;\n        padding: 0; }\n      md-list-item._md-button-wrap > div.md-button:first-child .md-list-item-inner {\n        width: 100%;\n        min-height: inherit; }\n  md-list-item.md-no-proxy,\n  md-list-item .md-no-style {\n    position: relative;\n    padding: 0px 16px;\n    flex: 1 1 auto; }\n    md-list-item.md-no-proxy.md-button,\n    md-list-item .md-no-style.md-button {\n      font-size: inherit;\n      height: inherit;\n      text-align: left;\n      text-transform: none;\n      width: 100%;\n      white-space: normal;\n      flex-direction: inherit;\n      align-items: inherit;\n      border-radius: 0;\n      margin: 0; }\n      [dir=rtl] md-list-item.md-no-proxy.md-button, [dir=rtl]\n      md-list-item .md-no-style.md-button {\n        text-align: right; }\n      md-list-item.md-no-proxy.md-button > .md-ripple-container,\n      md-list-item .md-no-style.md-button > .md-ripple-container {\n        border-radius: 0; }\n    md-list-item.md-no-proxy:focus,\n    md-list-item .md-no-style:focus {\n      outline: none; }\n  md-list-item.md-clickable:hover {\n    cursor: pointer; }\n  md-list-item md-divider {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%; }\n    [dir=rtl] md-list-item md-divider {\n      left: auto;\n      right: 0; }\n    md-list-item md-divider[md-inset] {\n      left: 72px;\n      width: calc(100% - 72px);\n      margin: 0 !important; }\n      [dir=rtl] md-list-item md-divider[md-inset] {\n        left: auto;\n        right: 72px; }\n  md-list-item,\n  md-list-item .md-list-item-inner {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    min-height: 48px;\n    height: auto; }\n    md-list-item::before,\n    md-list-item .md-list-item-inner::before {\n      content: \'\';\n      min-height: 48px;\n      visibility: hidden;\n      display: inline-block; }\n    md-list-item > div.md-primary > md-icon:not(.md-avatar-icon),\n    md-list-item > div.md-secondary > md-icon:not(.md-avatar-icon),\n    md-list-item > md-icon:first-child:not(.md-avatar-icon),\n    md-list-item > md-icon.md-secondary:not(.md-avatar-icon),\n    md-list-item .md-list-item-inner > div.md-primary > md-icon:not(.md-avatar-icon),\n    md-list-item .md-list-item-inner > div.md-secondary > md-icon:not(.md-avatar-icon),\n    md-list-item .md-list-item-inner > md-icon:first-child:not(.md-avatar-icon),\n    md-list-item .md-list-item-inner > md-icon.md-secondary:not(.md-avatar-icon) {\n      width: 24px;\n      margin-top: 16px;\n      margin-bottom: 12px;\n      box-sizing: content-box; }\n    md-list-item > div.md-primary > md-checkbox,\n    md-list-item > div.md-secondary > md-checkbox,\n    md-list-item > md-checkbox,\n    md-list-item md-checkbox.md-secondary,\n    md-list-item .md-list-item-inner > div.md-primary > md-checkbox,\n    md-list-item .md-list-item-inner > div.md-secondary > md-checkbox,\n    md-list-item .md-list-item-inner > md-checkbox,\n    md-list-item .md-list-item-inner md-checkbox.md-secondary {\n      align-self: center; }\n      md-list-item > div.md-primary > md-checkbox .md-label,\n      md-list-item > div.md-secondary > md-checkbox .md-label,\n      md-list-item > md-checkbox .md-label,\n      md-list-item md-checkbox.md-secondary .md-label,\n      md-list-item .md-list-item-inner > div.md-primary > md-checkbox .md-label,\n      md-list-item .md-list-item-inner > div.md-secondary > md-checkbox .md-label,\n      md-list-item .md-list-item-inner > md-checkbox .md-label,\n      md-list-item .md-list-item-inner md-checkbox.md-secondary .md-label {\n        display: none; }\n    md-list-item > md-icon:first-child:not(.md-avatar-icon),\n    md-list-item .md-list-item-inner > md-icon:first-child:not(.md-avatar-icon) {\n      margin-right: 32px; }\n      [dir=rtl] md-list-item > md-icon:first-child:not(.md-avatar-icon), [dir=rtl]\n      md-list-item .md-list-item-inner > md-icon:first-child:not(.md-avatar-icon) {\n        margin-right: auto;\n        margin-left: 32px; }\n    md-list-item .md-avatar, md-list-item .md-avatar-icon,\n    md-list-item .md-list-item-inner .md-avatar,\n    md-list-item .md-list-item-inner .md-avatar-icon {\n      margin-top: 8px;\n      margin-bottom: 8px;\n      margin-right: 16px;\n      border-radius: 50%;\n      box-sizing: content-box; }\n      [dir=rtl] md-list-item .md-avatar, [dir=rtl] md-list-item .md-avatar-icon, [dir=rtl]\n      md-list-item .md-list-item-inner .md-avatar, [dir=rtl]\n      md-list-item .md-list-item-inner .md-avatar-icon {\n        margin-right: auto;\n        margin-left: 16px; }\n    md-list-item .md-avatar,\n    md-list-item .md-list-item-inner .md-avatar {\n      flex: none;\n      width: 40px;\n      height: 40px; }\n    md-list-item .md-avatar-icon,\n    md-list-item .md-list-item-inner .md-avatar-icon {\n      padding: 8px; }\n      md-list-item .md-avatar-icon svg,\n      md-list-item .md-list-item-inner .md-avatar-icon svg {\n        width: 24px;\n        height: 24px; }\n    md-list-item > md-checkbox,\n    md-list-item .md-list-item-inner > md-checkbox {\n      width: 24px;\n      margin-left: 3px;\n      margin-right: 29px;\n      margin-top: 16px; }\n      [dir=rtl] md-list-item > md-checkbox, [dir=rtl]\n      md-list-item .md-list-item-inner > md-checkbox {\n        margin-left: 29px; }\n      [dir=rtl] md-list-item > md-checkbox, [dir=rtl]\n      md-list-item .md-list-item-inner > md-checkbox {\n        margin-right: 3px; }\n    md-list-item .md-secondary-container,\n    md-list-item .md-list-item-inner .md-secondary-container {\n      display: flex;\n      align-items: center;\n      flex-shrink: 0;\n      margin: auto;\n      margin-right: 0;\n      margin-left: auto; }\n      [dir=rtl] md-list-item .md-secondary-container, [dir=rtl]\n      md-list-item .md-list-item-inner .md-secondary-container {\n        margin-right: auto; }\n      [dir=rtl] md-list-item .md-secondary-container, [dir=rtl]\n      md-list-item .md-list-item-inner .md-secondary-container {\n        margin-left: 0; }\n      md-list-item .md-secondary-container .md-button:last-of-type, md-list-item .md-secondary-container .md-icon-button:last-of-type,\n      md-list-item .md-list-item-inner .md-secondary-container .md-button:last-of-type,\n      md-list-item .md-list-item-inner .md-secondary-container .md-icon-button:last-of-type {\n        margin-right: 0; }\n        [dir=rtl] md-list-item .md-secondary-container .md-button:last-of-type, [dir=rtl] md-list-item .md-secondary-container .md-icon-button:last-of-type, [dir=rtl]\n        md-list-item .md-list-item-inner .md-secondary-container .md-button:last-of-type, [dir=rtl]\n        md-list-item .md-list-item-inner .md-secondary-container .md-icon-button:last-of-type {\n          margin-right: auto;\n          margin-left: 0; }\n      md-list-item .md-secondary-container md-checkbox,\n      md-list-item .md-list-item-inner .md-secondary-container md-checkbox {\n        margin-top: 0;\n        margin-bottom: 0; }\n        md-list-item .md-secondary-container md-checkbox:last-child,\n        md-list-item .md-list-item-inner .md-secondary-container md-checkbox:last-child {\n          width: 24px;\n          margin-right: 0; }\n          [dir=rtl] md-list-item .md-secondary-container md-checkbox:last-child, [dir=rtl]\n          md-list-item .md-list-item-inner .md-secondary-container md-checkbox:last-child {\n            margin-right: auto;\n            margin-left: 0; }\n      md-list-item .md-secondary-container md-switch,\n      md-list-item .md-list-item-inner .md-secondary-container md-switch {\n        margin-top: 0;\n        margin-bottom: 0;\n        margin-right: -6px; }\n        [dir=rtl] md-list-item .md-secondary-container md-switch, [dir=rtl]\n        md-list-item .md-list-item-inner .md-secondary-container md-switch {\n          margin-right: auto;\n          margin-left: -6px; }\n    md-list-item > p, md-list-item > .md-list-item-inner > p,\n    md-list-item .md-list-item-inner > p,\n    md-list-item .md-list-item-inner > .md-list-item-inner > p {\n      flex: 1 1 auto;\n      margin: 0; }\n  md-list-item.md-2-line, md-list-item.md-2-line > .md-no-style, md-list-item.md-3-line, md-list-item.md-3-line > .md-no-style {\n    align-items: flex-start;\n    justify-content: center; }\n    md-list-item.md-2-line.md-long-text, md-list-item.md-2-line > .md-no-style.md-long-text, md-list-item.md-3-line.md-long-text, md-list-item.md-3-line > .md-no-style.md-long-text {\n      margin-top: 8px;\n      margin-bottom: 8px; }\n    md-list-item.md-2-line .md-list-item-text, md-list-item.md-2-line > .md-no-style .md-list-item-text, md-list-item.md-3-line .md-list-item-text, md-list-item.md-3-line > .md-no-style .md-list-item-text {\n      flex: 1 1 auto;\n      margin: auto;\n      text-overflow: ellipsis;\n      overflow: hidden; }\n      md-list-item.md-2-line .md-list-item-text.md-offset, md-list-item.md-2-line > .md-no-style .md-list-item-text.md-offset, md-list-item.md-3-line .md-list-item-text.md-offset, md-list-item.md-3-line > .md-no-style .md-list-item-text.md-offset {\n        margin-left: 56px; }\n        [dir=rtl] md-list-item.md-2-line .md-list-item-text.md-offset, [dir=rtl] md-list-item.md-2-line > .md-no-style .md-list-item-text.md-offset, [dir=rtl] md-list-item.md-3-line .md-list-item-text.md-offset, [dir=rtl] md-list-item.md-3-line > .md-no-style .md-list-item-text.md-offset {\n          margin-left: auto;\n          margin-right: 56px; }\n      md-list-item.md-2-line .md-list-item-text h3, md-list-item.md-2-line > .md-no-style .md-list-item-text h3, md-list-item.md-3-line .md-list-item-text h3, md-list-item.md-3-line > .md-no-style .md-list-item-text h3 {\n        font-size: 16px;\n        font-weight: 400;\n        letter-spacing: 0.010em;\n        margin: 0 0 0px 0;\n        line-height: 1.2em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      md-list-item.md-2-line .md-list-item-text h4, md-list-item.md-2-line > .md-no-style .md-list-item-text h4, md-list-item.md-3-line .md-list-item-text h4, md-list-item.md-3-line > .md-no-style .md-list-item-text h4 {\n        font-size: 14px;\n        letter-spacing: 0.010em;\n        margin: 3px 0 1px 0;\n        font-weight: 400;\n        line-height: 1.2em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      md-list-item.md-2-line .md-list-item-text p, md-list-item.md-2-line > .md-no-style .md-list-item-text p, md-list-item.md-3-line .md-list-item-text p, md-list-item.md-3-line > .md-no-style .md-list-item-text p {\n        font-size: 14px;\n        font-weight: 500;\n        letter-spacing: 0.010em;\n        margin: 0 0 0 0;\n        line-height: 1.6em; }\n  md-list-item.md-2-line, md-list-item.md-2-line > .md-no-style {\n    height: auto;\n    min-height: 72px; }\n    md-list-item.md-2-line::before, md-list-item.md-2-line > .md-no-style::before {\n      content: \'\';\n      min-height: 72px;\n      visibility: hidden;\n      display: inline-block; }\n    md-list-item.md-2-line > .md-avatar, md-list-item.md-2-line .md-avatar-icon, md-list-item.md-2-line > .md-no-style > .md-avatar, md-list-item.md-2-line > .md-no-style .md-avatar-icon {\n      margin-top: 12px; }\n    md-list-item.md-2-line > md-icon:first-child, md-list-item.md-2-line > .md-no-style > md-icon:first-child {\n      align-self: flex-start; }\n    md-list-item.md-2-line .md-list-item-text, md-list-item.md-2-line > .md-no-style .md-list-item-text {\n      flex: 1 1 auto; }\n  md-list-item.md-3-line, md-list-item.md-3-line > .md-no-style {\n    height: auto;\n    min-height: 88px; }\n    md-list-item.md-3-line::before, md-list-item.md-3-line > .md-no-style::before {\n      content: \'\';\n      min-height: 88px;\n      visibility: hidden;\n      display: inline-block; }\n    md-list-item.md-3-line > md-icon:first-child,\n    md-list-item.md-3-line > .md-avatar, md-list-item.md-3-line > .md-no-style > md-icon:first-child,\n    md-list-item.md-3-line > .md-no-style > .md-avatar {\n      margin-top: 16px; }\n\n.md-open-menu-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 100;\n  opacity: 0;\n  border-radius: 2px;\n  max-height: calc(100vh - 10px);\n  overflow: auto; }\n  .md-open-menu-container md-menu-divider {\n    margin-top: 4px;\n    margin-bottom: 4px;\n    height: 1px;\n    min-height: 1px;\n    max-height: 1px;\n    width: 100%; }\n  .md-open-menu-container md-menu-content > * {\n    opacity: 0; }\n  .md-open-menu-container:not(.md-clickable) {\n    pointer-events: none; }\n  .md-open-menu-container.md-active {\n    opacity: 1;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-duration: 200ms; }\n    .md-open-menu-container.md-active > md-menu-content > * {\n      opacity: 1;\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n      transition-duration: 200ms;\n      transition-delay: 100ms; }\n  .md-open-menu-container.md-leave {\n    opacity: 0;\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n    transition-duration: 250ms; }\n\nmd-menu-content {\n  display: flex;\n  flex-direction: column;\n  padding: 8px 0;\n  max-height: 304px;\n  overflow-y: auto; }\n  md-menu-content.md-dense {\n    max-height: 208px; }\n    md-menu-content.md-dense md-menu-item {\n      height: 32px;\n      min-height: 0px; }\n\nmd-menu-item {\n  display: flex;\n  flex-direction: row;\n  min-height: 48px;\n  height: 48px;\n  align-content: center;\n  justify-content: flex-start;\n  /*\n   * We cannot use flex on <button> elements due to a bug in Firefox, so we also can\'t use it on\n   * <a> elements. Add some top padding to fix alignment since buttons automatically align their\n   * text vertically.\n   */ }\n  md-menu-item > * {\n    width: 100%;\n    margin: auto 0;\n    padding-left: 16px;\n    padding-right: 16px; }\n  md-menu-item > a.md-button {\n    padding-top: 5px; }\n  md-menu-item > .md-button {\n    text-align: left;\n    display: inline-block;\n    border-radius: 0;\n    margin: auto 0;\n    font-size: 15px;\n    text-transform: none;\n    font-weight: 400;\n    height: 100%;\n    padding-left: 16px;\n    padding-right: 16px;\n    width: 100%; }\n    md-menu-item > .md-button::-moz-focus-inner {\n      padding: 0;\n      border: 0; }\n    [dir=rtl] md-menu-item > .md-button {\n      text-align: right; }\n    md-menu-item > .md-button md-icon {\n      margin: auto 16px auto 0; }\n      [dir=rtl] md-menu-item > .md-button md-icon {\n        margin: auto 0 auto 16px; }\n    md-menu-item > .md-button p {\n      display: inline-block;\n      margin: auto; }\n    md-menu-item > .md-button span {\n      margin-top: auto;\n      margin-bottom: auto; }\n    md-menu-item > .md-button .md-ripple-container {\n      border-radius: inherit; }\n\nmd-toolbar .md-menu {\n  height: auto;\n  margin: auto;\n  padding: 0; }\n\n@media (max-width: 959px) {\n  md-menu-content {\n    min-width: 112px; }\n  md-menu-content[width="3"] {\n    min-width: 168px; }\n  md-menu-content[width="4"] {\n    min-width: 224px; }\n  md-menu-content[width="5"] {\n    min-width: 280px; }\n  md-menu-content[width="6"] {\n    min-width: 336px; }\n  md-menu-content[width="7"] {\n    min-width: 392px; } }\n\n@media (min-width: 960px) {\n  md-menu-content {\n    min-width: 96px; }\n  md-menu-content[width="3"] {\n    min-width: 192px; }\n  md-menu-content[width="4"] {\n    min-width: 256px; }\n  md-menu-content[width="5"] {\n    min-width: 320px; }\n  md-menu-content[width="6"] {\n    min-width: 384px; }\n  md-menu-content[width="7"] {\n    min-width: 448px; } }\n\nmd-toolbar.md-menu-toolbar h2.md-toolbar-tools {\n  line-height: 1rem;\n  height: auto;\n  padding: 28px;\n  padding-bottom: 12px; }\n\nmd-toolbar.md-has-open-menu {\n  position: relative;\n  z-index: 100; }\n\nmd-menu-bar {\n  padding: 0 20px;\n  display: block;\n  position: relative;\n  z-index: 2; }\n  md-menu-bar .md-menu {\n    display: inline-block;\n    padding: 0;\n    position: relative; }\n  md-menu-bar button {\n    font-size: 14px;\n    padding: 0 10px;\n    margin: 0;\n    border: 0;\n    background-color: transparent;\n    height: 40px; }\n  md-menu-bar md-backdrop.md-menu-backdrop {\n    z-index: -2; }\n\nmd-menu-content.md-menu-bar-menu.md-dense {\n  max-height: none;\n  padding: 16px 0; }\n  md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent {\n    position: relative; }\n    md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent > md-icon {\n      position: absolute;\n      padding: 0;\n      width: 24px;\n      top: 6px;\n      left: 24px; }\n      [dir=rtl] md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent > md-icon {\n        left: auto;\n        right: 24px; }\n    md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent > .md-button, md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent .md-menu > .md-button {\n      padding: 0 32px 0 64px; }\n      [dir=rtl] md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent > .md-button, [dir=rtl] md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent .md-menu > .md-button {\n        padding: 0 64px 0 32px; }\n  md-menu-content.md-menu-bar-menu.md-dense .md-button {\n    min-height: 0;\n    height: 32px; }\n    md-menu-content.md-menu-bar-menu.md-dense .md-button span {\n      float: left; }\n      [dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-button span {\n        float: right; }\n    md-menu-content.md-menu-bar-menu.md-dense .md-button span.md-alt-text {\n      float: right;\n      margin: 0 8px; }\n      [dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-button span.md-alt-text {\n        float: left; }\n  md-menu-content.md-menu-bar-menu.md-dense md-menu-divider {\n    margin: 8px 0; }\n  md-menu-content.md-menu-bar-menu.md-dense md-menu-item > .md-button, md-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button {\n    text-align: left; }\n    [dir=rtl] md-menu-content.md-menu-bar-menu.md-dense md-menu-item > .md-button, [dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button {\n      text-align: right; }\n  md-menu-content.md-menu-bar-menu.md-dense .md-menu {\n    padding: 0; }\n    md-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button {\n      position: relative;\n      margin: 0;\n      width: 100%;\n      text-transform: none;\n      font-weight: normal;\n      border-radius: 0px;\n      padding-left: 16px; }\n      [dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button {\n        padding-left: 0;\n        padding-right: 16px; }\n      md-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button:after {\n        display: block;\n        content: \'\\25BC\';\n        position: absolute;\n        top: 0px;\n        speak: none;\n        transform: rotate(270deg) scaleY(0.45) scaleX(0.9);\n        right: 28px; }\n        [dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button:after {\n          transform: rotate(90deg) scaleY(0.45) scaleX(0.9); }\n        [dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button:after {\n          right: auto;\n          left: 28px; }\n\n/** Matches "md-tabs md-tabs-wrapper" style. */\n.md-nav-bar {\n  border-style: solid;\n  border-width: 0 0 1px;\n  height: 48px;\n  position: relative; }\n\n._md-nav-bar-list {\n  outline: none;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row; }\n\n.md-nav-item:first-of-type {\n  margin-left: 8px; }\n\n.md-button._md-nav-button {\n  line-height: 24px;\n  margin: 0 4px;\n  padding: 12px 16px;\n  transition: background-color 0.35s cubic-bezier(0.35, 0, 0.25, 1); }\n  .md-button._md-nav-button:focus {\n    outline: none; }\n  .md-button._md-nav-button:hover {\n    background-color: inherit; }\n\nmd-nav-ink-bar {\n  bottom: 0;\n  height: 2px;\n  left: auto;\n  position: absolute;\n  right: auto;\n  background-color: black; }\n  md-nav-ink-bar._md-left {\n    transition: left 0.125s cubic-bezier(0.35, 0, 0.25, 1), right 0.25s cubic-bezier(0.35, 0, 0.25, 1); }\n  md-nav-ink-bar._md-right {\n    transition: left 0.25s cubic-bezier(0.35, 0, 0.25, 1), right 0.125s cubic-bezier(0.35, 0, 0.25, 1); }\n  md-nav-ink-bar.ng-animate {\n    transition: none; }\n\nmd-nav-extra-content {\n  min-height: 48px;\n  padding-right: 12px; }\n\n@keyframes indeterminate-rotate {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\nmd-progress-circular {\n  position: relative;\n  display: block; }\n  md-progress-circular._md-progress-circular-disabled {\n    visibility: hidden; }\n  md-progress-circular.md-mode-indeterminate svg {\n    animation: indeterminate-rotate 1568.63ms linear infinite; }\n  md-progress-circular svg {\n    position: absolute;\n    overflow: visible;\n    top: 0;\n    left: 0; }\n\nmd-progress-linear {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 5px;\n  padding-top: 0 !important;\n  margin-bottom: 0 !important; }\n  md-progress-linear._md-progress-linear-disabled {\n    visibility: hidden; }\n  md-progress-linear .md-container {\n    display: block;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 5px;\n    transform: translate(0, 0) scale(1, 1); }\n    md-progress-linear .md-container .md-bar {\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      height: 5px; }\n    md-progress-linear .md-container .md-dashed:before {\n      content: "";\n      display: none;\n      position: absolute;\n      margin-top: 0;\n      height: 5px;\n      width: 100%;\n      background-color: transparent;\n      background-size: 10px 10px !important;\n      background-position: 0px -23px; }\n    md-progress-linear .md-container .md-bar1, md-progress-linear .md-container .md-bar2 {\n      transition: transform 0.2s linear; }\n    md-progress-linear .md-container.md-mode-query .md-bar1 {\n      display: none; }\n    md-progress-linear .md-container.md-mode-query .md-bar2 {\n      transition: all 0.2s linear;\n      animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1); }\n    md-progress-linear .md-container.md-mode-determinate .md-bar1 {\n      display: none; }\n    md-progress-linear .md-container.md-mode-indeterminate .md-bar1 {\n      animation: md-progress-linear-indeterminate-scale-1 4s infinite, md-progress-linear-indeterminate-1 4s infinite; }\n    md-progress-linear .md-container.md-mode-indeterminate .md-bar2 {\n      animation: md-progress-linear-indeterminate-scale-2 4s infinite, md-progress-linear-indeterminate-2 4s infinite; }\n    md-progress-linear .md-container.ng-hide ._md-progress-linear-disabled md-progress-linear .md-container {\n      animation: none; }\n      md-progress-linear .md-container.ng-hide ._md-progress-linear-disabled md-progress-linear .md-container .md-bar1 {\n        animation-name: none; }\n      md-progress-linear .md-container.ng-hide ._md-progress-linear-disabled md-progress-linear .md-container .md-bar2 {\n        animation-name: none; }\n  md-progress-linear .md-container.md-mode-buffer {\n    background-color: transparent !important;\n    transition: all 0.2s linear; }\n    md-progress-linear .md-container.md-mode-buffer .md-dashed:before {\n      display: block;\n      animation: buffer 3s infinite linear; }\n\n@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1); } }\n\n@keyframes buffer {\n  0% {\n    opacity: 1;\n    background-position: 0px -23px; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1;\n    background-position: -200px -23px; } }\n\n@keyframes md-progress-linear-indeterminate-scale-1 {\n  0% {\n    transform: scaleX(0.1);\n    animation-timing-function: linear; }\n  36.6% {\n    transform: scaleX(0.1);\n    animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1); }\n  69.15% {\n    transform: scaleX(0.83);\n    animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098); }\n  100% {\n    transform: scaleX(0.1); } }\n\n@keyframes md-progress-linear-indeterminate-1 {\n  0% {\n    left: -105.16667%;\n    animation-timing-function: linear; }\n  20% {\n    left: -105.16667%;\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582); }\n  69.15% {\n    left: 21.5%;\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635); }\n  100% {\n    left: 95.44444%; } }\n\n@keyframes md-progress-linear-indeterminate-scale-2 {\n  0% {\n    transform: scaleX(0.1);\n    animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397); }\n  19.15% {\n    transform: scaleX(0.57);\n    animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432); }\n  44.15% {\n    transform: scaleX(0.91);\n    animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179); }\n  100% {\n    transform: scaleX(0.1); } }\n\n@keyframes md-progress-linear-indeterminate-2 {\n  0% {\n    left: -54.88889%;\n    animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968); }\n  25% {\n    left: -17.25%;\n    animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372); }\n  48.35% {\n    left: 29.5%;\n    animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203); }\n  100% {\n    left: 117.38889%; } }\n\nmd-radio-button {\n  box-sizing: border-box;\n  display: block;\n  margin-bottom: 16px;\n  white-space: nowrap;\n  cursor: pointer;\n  position: relative; }\n  md-radio-button[disabled] {\n    cursor: default; }\n    md-radio-button[disabled] .md-container {\n      cursor: default; }\n  md-radio-button .md-container {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    box-sizing: border-box;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    left: 0;\n    right: auto; }\n    [dir=rtl] md-radio-button .md-container {\n      left: auto; }\n    [dir=rtl] md-radio-button .md-container {\n      right: 0; }\n    md-radio-button .md-container .md-ripple-container {\n      position: absolute;\n      display: block;\n      width: auto;\n      height: auto;\n      left: -15px;\n      top: -15px;\n      right: -15px;\n      bottom: -15px; }\n    md-radio-button .md-container:before {\n      box-sizing: border-box;\n      background-color: transparent;\n      border-radius: 50%;\n      content: \'\';\n      position: absolute;\n      display: block;\n      height: auto;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      transition: all 0.5s;\n      width: auto; }\n  md-radio-button.md-align-top-left > div.md-container {\n    top: 12px; }\n  md-radio-button .md-off {\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 20px;\n    height: 20px;\n    border-style: solid;\n    border-width: 2px;\n    border-radius: 50%;\n    transition: border-color ease 0.28s; }\n  md-radio-button .md-on {\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    transition: transform ease 0.28s;\n    transform: scale(0); }\n  md-radio-button.md-checked .md-on {\n    transform: scale(0.5); }\n  md-radio-button .md-label {\n    box-sizing: border-box;\n    position: relative;\n    display: inline-block;\n    margin-left: 30px;\n    margin-right: 0;\n    vertical-align: middle;\n    white-space: normal;\n    pointer-events: none;\n    width: auto; }\n    [dir=rtl] md-radio-button .md-label {\n      margin-left: 0; }\n    [dir=rtl] md-radio-button .md-label {\n      margin-right: 30px; }\n\nmd-radio-group {\n  /** Layout adjustments for the radio group. */ }\n  md-radio-group.layout-column md-radio-button, md-radio-group.layout-xs-column md-radio-button, md-radio-group.layout-gt-xs-column md-radio-button, md-radio-group.layout-sm-column md-radio-button, md-radio-group.layout-gt-sm-column md-radio-button, md-radio-group.layout-md-column md-radio-button, md-radio-group.layout-gt-md-column md-radio-button, md-radio-group.layout-lg-column md-radio-button, md-radio-group.layout-gt-lg-column md-radio-button, md-radio-group.layout-xl-column md-radio-button {\n    margin-bottom: 16px; }\n  md-radio-group.layout-row md-radio-button, md-radio-group.layout-xs-row md-radio-button, md-radio-group.layout-gt-xs-row md-radio-button, md-radio-group.layout-sm-row md-radio-button, md-radio-group.layout-gt-sm-row md-radio-button, md-radio-group.layout-md-row md-radio-button, md-radio-group.layout-gt-md-row md-radio-button, md-radio-group.layout-lg-row md-radio-button, md-radio-group.layout-gt-lg-row md-radio-button, md-radio-group.layout-xl-row md-radio-button {\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: 0;\n    margin-right: 16px; }\n    [dir=rtl] md-radio-group.layout-row md-radio-button, [dir=rtl] md-radio-group.layout-xs-row md-radio-button, [dir=rtl] md-radio-group.layout-gt-xs-row md-radio-button, [dir=rtl] md-radio-group.layout-sm-row md-radio-button, [dir=rtl] md-radio-group.layout-gt-sm-row md-radio-button, [dir=rtl] md-radio-group.layout-md-row md-radio-button, [dir=rtl] md-radio-group.layout-gt-md-row md-radio-button, [dir=rtl] md-radio-group.layout-lg-row md-radio-button, [dir=rtl] md-radio-group.layout-gt-lg-row md-radio-button, [dir=rtl] md-radio-group.layout-xl-row md-radio-button {\n      margin-left: 16px; }\n    [dir=rtl] md-radio-group.layout-row md-radio-button, [dir=rtl] md-radio-group.layout-xs-row md-radio-button, [dir=rtl] md-radio-group.layout-gt-xs-row md-radio-button, [dir=rtl] md-radio-group.layout-sm-row md-radio-button, [dir=rtl] md-radio-group.layout-gt-sm-row md-radio-button, [dir=rtl] md-radio-group.layout-md-row md-radio-button, [dir=rtl] md-radio-group.layout-gt-md-row md-radio-button, [dir=rtl] md-radio-group.layout-lg-row md-radio-button, [dir=rtl] md-radio-group.layout-gt-lg-row md-radio-button, [dir=rtl] md-radio-group.layout-xl-row md-radio-button {\n      margin-right: 0; }\n    md-radio-group.layout-row md-radio-button:last-of-type, md-radio-group.layout-xs-row md-radio-button:last-of-type, md-radio-group.layout-gt-xs-row md-radio-button:last-of-type, md-radio-group.layout-sm-row md-radio-button:last-of-type, md-radio-group.layout-gt-sm-row md-radio-button:last-of-type, md-radio-group.layout-md-row md-radio-button:last-of-type, md-radio-group.layout-gt-md-row md-radio-button:last-of-type, md-radio-group.layout-lg-row md-radio-button:last-of-type, md-radio-group.layout-gt-lg-row md-radio-button:last-of-type, md-radio-group.layout-xl-row md-radio-button:last-of-type {\n      margin-left: 0;\n      margin-right: 0; }\n  md-radio-group:focus {\n    outline: none; }\n  md-radio-group.md-focused .md-checked .md-container:before {\n    left: -8px;\n    top: -8px;\n    right: -8px;\n    bottom: -8px; }\n  md-radio-group[disabled] md-radio-button {\n    cursor: default; }\n    md-radio-group[disabled] md-radio-button .md-container {\n      cursor: default; }\n\n.md-inline-form md-radio-group {\n  margin: 18px 0 19px; }\n  .md-inline-form md-radio-group md-radio-button {\n    display: inline-block;\n    height: 30px;\n    padding: 2px;\n    box-sizing: border-box;\n    margin-top: 0;\n    margin-bottom: 0; }\n\n@media screen and (-ms-high-contrast: active) {\n  md-radio-button.md-default-theme .md-on {\n    background-color: #fff; } }\n\nmd-input-container:not([md-no-float]) .md-select-placeholder span:first-child {\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform-origin: left top; }\n  [dir=rtl] md-input-container:not([md-no-float]) .md-select-placeholder span:first-child {\n    transform-origin: right top; }\n\nmd-input-container.md-input-focused:not([md-no-float]) .md-select-placeholder span:first-child {\n  transform: translateY(-22px) translateX(-2px) scale(0.75); }\n\n.md-select-menu-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 90;\n  opacity: 0;\n  display: none;\n  transform: translateY(-1px); }\n  .md-select-menu-container:not(.md-clickable) {\n    pointer-events: none; }\n  .md-select-menu-container md-progress-circular {\n    display: table;\n    margin: 24px auto !important; }\n  .md-select-menu-container.md-active {\n    display: block;\n    opacity: 1; }\n    .md-select-menu-container.md-active md-select-menu {\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition-duration: 150ms; }\n      .md-select-menu-container.md-active md-select-menu > * {\n        opacity: 1;\n        transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n        transition-duration: 150ms;\n        transition-delay: 100ms; }\n  .md-select-menu-container.md-leave {\n    opacity: 0;\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n    transition-duration: 250ms; }\n\nmd-input-container > md-select {\n  margin: 0;\n  order: 2; }\n\nmd-input-container:not(.md-input-has-value) md-select[required]:not(.md-no-asterisk) .md-select-value span:first-child:after, md-input-container:not(.md-input-has-value) md-select.ng-required:not(.md-no-asterisk) .md-select-value span:first-child:after {\n  content: \' *\';\n  font-size: 13px;\n  vertical-align: top; }\n\nmd-input-container.md-input-invalid md-select .md-select-value {\n  border-bottom-style: solid;\n  padding-bottom: 1px; }\n\nmd-select {\n  display: flex;\n  margin: 20px 0 26px 0; }\n  md-select[required].ng-invalid:not(.md-no-asterisk) .md-select-value span:first-child:after, md-select.ng-required.ng-invalid:not(.md-no-asterisk) .md-select-value span:first-child:after {\n    content: \' *\';\n    font-size: 13px;\n    vertical-align: top; }\n  md-select[disabled] .md-select-value {\n    background-position: 0 bottom;\n    background-size: 4px 1px;\n    background-repeat: repeat-x;\n    margin-bottom: -1px; }\n  md-select:focus {\n    outline: none; }\n  md-select[disabled]:hover {\n    cursor: default; }\n  md-select:not([disabled]):hover {\n    cursor: pointer; }\n  md-select:not([disabled]).ng-invalid.ng-touched .md-select-value {\n    border-bottom-style: solid;\n    padding-bottom: 1px; }\n  md-select:not([disabled]):focus .md-select-value {\n    border-bottom-width: 2px;\n    border-bottom-style: solid;\n    padding-bottom: 0; }\n  md-select:not([disabled]):focus.ng-invalid.ng-touched .md-select-value {\n    padding-bottom: 0; }\n\nmd-input-container.md-input-has-value .md-select-value > span:not(.md-select-icon) {\n  transform: translate3d(0, 1px, 0); }\n\n.md-select-value {\n  display: flex;\n  align-items: center;\n  padding: 2px 2px 1px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  background-color: transparent;\n  position: relative;\n  box-sizing: content-box;\n  min-width: 64px;\n  min-height: 26px;\n  flex-grow: 1; }\n  .md-select-value > span:not(.md-select-icon) {\n    max-width: 100%;\n    flex: 1 1 auto;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden; }\n    .md-select-value > span:not(.md-select-icon) .md-text {\n      display: inline; }\n  .md-select-value .md-select-icon {\n    display: block;\n    align-items: flex-end;\n    text-align: end;\n    width: 24px;\n    margin: 0 4px;\n    transform: translate3d(0, -2px, 0);\n    font-size: 1.2rem; }\n  .md-select-value .md-select-icon:after {\n    display: block;\n    content: \'\\25BC\';\n    position: relative;\n    top: 2px;\n    speak: none;\n    font-size: 13px;\n    transform: scaleY(0.5) scaleX(1); }\n  .md-select-value.md-select-placeholder {\n    display: flex;\n    order: 1;\n    pointer-events: none;\n    -webkit-font-smoothing: antialiased;\n    padding-left: 2px;\n    z-index: 1; }\n\nmd-select-menu {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  max-height: 256px;\n  min-height: 48px;\n  overflow-y: hidden;\n  transform-origin: left top;\n  transform: scale(1); }\n  md-select-menu.md-reverse {\n    flex-direction: column-reverse; }\n  md-select-menu:not(.md-overflow) md-content {\n    padding-top: 8px;\n    padding-bottom: 8px; }\n  [dir=rtl] md-select-menu {\n    transform-origin: right top; }\n  md-select-menu md-content {\n    min-width: 136px;\n    min-height: 48px;\n    max-height: 256px;\n    overflow-y: auto; }\n  md-select-menu > * {\n    opacity: 0; }\n\nmd-option {\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: auto;\n  transition: background 0.15s linear;\n  padding: 0 16px 0 16px;\n  height: 48px; }\n  md-option[disabled] {\n    cursor: default; }\n  md-option:focus {\n    outline: none; }\n  md-option .md-text {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    width: auto;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\nmd-optgroup {\n  display: block; }\n  md-optgroup label {\n    display: block;\n    font-size: 14px;\n    text-transform: uppercase;\n    padding: 16px;\n    font-weight: 500; }\n  md-optgroup md-option {\n    padding-left: 32px;\n    padding-right: 32px; }\n\n@media screen and (-ms-high-contrast: active) {\n  .md-select-backdrop {\n    background-color: transparent; }\n  md-select-menu {\n    border: 1px solid #fff; } }\n\nmd-select-menu[multiple] md-option.md-checkbox-enabled {\n  padding-left: 40px;\n  padding-right: 16px; }\n  [dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled {\n    padding-left: 16px; }\n  [dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled {\n    padding-right: 40px; }\n  md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    box-sizing: border-box;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    left: 0;\n    right: auto; }\n    [dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {\n      left: auto; }\n    [dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {\n      right: 0; }\n    md-select-menu[multiple] md-option.md-checkbox-enabled .md-container:before {\n      box-sizing: border-box;\n      background-color: transparent;\n      border-radius: 50%;\n      content: \'\';\n      position: absolute;\n      display: block;\n      height: auto;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      transition: all 0.5s;\n      width: auto; }\n    md-select-menu[multiple] md-option.md-checkbox-enabled .md-container:after {\n      box-sizing: border-box;\n      content: \'\';\n      position: absolute;\n      top: -10px;\n      right: -10px;\n      bottom: -10px;\n      left: -10px; }\n    md-select-menu[multiple] md-option.md-checkbox-enabled .md-container .md-ripple-container {\n      position: absolute;\n      display: block;\n      width: auto;\n      height: auto;\n      left: -15px;\n      top: -15px;\n      right: -15px;\n      bottom: -15px; }\n  md-select-menu[multiple] md-option.md-checkbox-enabled .md-icon {\n    box-sizing: border-box;\n    transition: 240ms;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 20px;\n    height: 20px;\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 2px; }\n  md-select-menu[multiple] md-option.md-checkbox-enabled[selected] .md-icon {\n    border-color: transparent; }\n    md-select-menu[multiple] md-option.md-checkbox-enabled[selected] .md-icon:after {\n      box-sizing: border-box;\n      transform: rotate(45deg);\n      position: absolute;\n      left: 4.66667px;\n      top: 0.22222px;\n      display: table;\n      width: 6.66667px;\n      height: 13.33333px;\n      border-width: 2px;\n      border-style: solid;\n      border-top: 0;\n      border-left: 0;\n      content: \'\'; }\n  md-select-menu[multiple] md-option.md-checkbox-enabled[disabled] {\n    cursor: default; }\n  md-select-menu[multiple] md-option.md-checkbox-enabled.md-indeterminate .md-icon:after {\n    box-sizing: border-box;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: table;\n    width: 12px;\n    height: 2px;\n    border-width: 2px;\n    border-style: solid;\n    border-top: 0;\n    border-left: 0;\n    content: \'\'; }\n  md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {\n    margin-left: 10.66667px;\n    margin-right: auto; }\n    [dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {\n      margin-left: auto; }\n    [dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {\n      margin-right: 10.66667px; }\n\nmd-sidenav {\n  box-sizing: border-box;\n  position: absolute;\n  flex-direction: column;\n  z-index: 60;\n  width: 320px;\n  max-width: 320px;\n  bottom: 0;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n  md-sidenav ul {\n    list-style: none; }\n  md-sidenav.md-closed {\n    display: none; }\n  md-sidenav.md-closed-add, md-sidenav.md-closed-remove {\n    display: flex;\n    transition: 0.2s ease-in all; }\n  md-sidenav.md-closed-add.md-closed-add-active, md-sidenav.md-closed-remove.md-closed-remove-active {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  md-sidenav.md-locked-open-add, md-sidenav.md-locked-open-remove {\n    position: static;\n    display: flex;\n    transform: translate3d(0, 0, 0); }\n  md-sidenav.md-locked-open, md-sidenav.md-locked-open.md-closed, md-sidenav.md-locked-open.md-closed.md-sidenav-left, md-sidenav.md-locked-open.md-closed, md-sidenav.md-locked-open.md-closed.md-sidenav-right {\n    position: static;\n    display: flex;\n    transform: translate3d(0, 0, 0); }\n  md-sidenav.md-locked-open-remove.md-closed {\n    position: static;\n    display: flex;\n    transform: translate3d(0, 0, 0); }\n  md-sidenav.md-closed.md-locked-open-add {\n    position: static;\n    display: flex;\n    transform: translate3d(0%, 0, 0); }\n  md-sidenav.md-closed.md-locked-open-add:not(.md-locked-open-add-active) {\n    transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n    width: 0 !important;\n    min-width: 0 !important; }\n  md-sidenav.md-closed.md-locked-open-add-active {\n    transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }\n  md-sidenav.md-locked-open-remove-active {\n    transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n    width: 0 !important;\n    min-width: 0 !important; }\n\n.md-sidenav-backdrop.md-locked-open {\n  display: none; }\n\n.md-sidenav-left, md-sidenav {\n  left: 0;\n  top: 0;\n  transform: translate3d(0%, 0, 0); }\n  .md-sidenav-left.md-closed, md-sidenav.md-closed {\n    transform: translate3d(-100%, 0, 0); }\n\n.md-sidenav-right {\n  left: 100%;\n  top: 0;\n  transform: translate(-100%, 0); }\n  .md-sidenav-right.md-closed {\n    transform: translate(0%, 0); }\n\n@media (min-width: 600px) {\n  md-sidenav {\n    max-width: 400px; } }\n\n@media (max-width: 456px) {\n  md-sidenav {\n    width: calc(100% - 56px);\n    min-width: calc(100% - 56px);\n    max-width: calc(100% - 56px); } }\n\n@media screen and (-ms-high-contrast: active) {\n  .md-sidenav-left, md-sidenav {\n    border-right: 1px solid #fff; }\n  .md-sidenav-right {\n    border-left: 1px solid #fff; } }\n\n@keyframes sliderFocusThumb {\n  0% {\n    transform: scale(0.7); }\n  30% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0.7); } }\n\n@keyframes sliderDiscreteFocusThumb {\n  0% {\n    transform: scale(0.7); }\n  50% {\n    transform: scale(0.8); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes sliderDiscreteFocusRing {\n  0% {\n    transform: scale(0.7);\n    opacity: 0; }\n  50% {\n    transform: scale(1);\n    opacity: 1; }\n  100% {\n    transform: scale(0); } }\n\nmd-slider {\n  height: 48px;\n  min-width: 128px;\n  position: relative;\n  margin-left: 4px;\n  margin-right: 4px;\n  padding: 0;\n  display: block;\n  flex-direction: row;\n  /**\n   * Track\n   */\n  /**\n   * Slider thumb\n   */\n  /* The sign that\'s focused in discrete mode */\n  /**\n   * The border/background that comes in when focused in non-discrete mode\n   */\n  /* Don\'t animate left/right while panning */ }\n  md-slider *, md-slider *:after {\n    box-sizing: border-box; }\n  md-slider .md-slider-wrapper {\n    outline: none;\n    width: 100%;\n    height: 100%; }\n  md-slider .md-slider-content {\n    position: relative; }\n  md-slider .md-track-container {\n    width: 100%;\n    position: absolute;\n    top: 23px;\n    height: 2px; }\n  md-slider .md-track {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 100%; }\n  md-slider .md-track-fill {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: width, height; }\n  md-slider .md-track-ticks {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 100%; }\n  md-slider .md-track-ticks canvas {\n    width: 100%;\n    height: 100%; }\n  md-slider .md-thumb-container {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: left, right, bottom; }\n    [dir=rtl] md-slider .md-thumb-container {\n      left: auto;\n      right: 0; }\n  md-slider .md-thumb {\n    z-index: 1;\n    position: absolute;\n    left: -10px;\n    top: 14px;\n    width: 20px;\n    height: 20px;\n    border-radius: 20px;\n    transform: scale(0.7);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    [dir=rtl] md-slider .md-thumb {\n      left: auto;\n      right: -10px; }\n    md-slider .md-thumb:after {\n      content: \'\';\n      position: absolute;\n      width: 20px;\n      height: 20px;\n      border-radius: 20px;\n      border-width: 3px;\n      border-style: solid;\n      transition: inherit; }\n  md-slider .md-sign {\n    /* Center the children (slider-thumb-text) */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    left: -14px;\n    top: -17px;\n    width: 28px;\n    height: 28px;\n    border-radius: 28px;\n    transform: scale(0.4) translate3d(0, 67.5px, 0);\n    transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n    /* The arrow pointing down under the sign */ }\n    md-slider .md-sign:after {\n      position: absolute;\n      content: \'\';\n      left: 0px;\n      border-radius: 16px;\n      top: 19px;\n      border-left: 14px solid transparent;\n      border-right: 14px solid transparent;\n      border-top-width: 16px;\n      border-top-style: solid;\n      opacity: 0;\n      transform: translate3d(0, -8px, 0);\n      transition: all 0.2s cubic-bezier(0.35, 0, 0.25, 1); }\n      [dir=rtl] md-slider .md-sign:after {\n        left: auto;\n        right: 0px; }\n    md-slider .md-sign .md-thumb-text {\n      z-index: 1;\n      font-size: 12px;\n      font-weight: bold; }\n  md-slider .md-focus-ring {\n    position: absolute;\n    left: -17px;\n    top: 7px;\n    width: 34px;\n    height: 34px;\n    border-radius: 34px;\n    transform: scale(0.7);\n    opacity: 0;\n    transition: all 0.35s cubic-bezier(0.35, 0, 0.25, 1); }\n    [dir=rtl] md-slider .md-focus-ring {\n      left: auto;\n      right: -17px; }\n  md-slider .md-disabled-thumb {\n    position: absolute;\n    left: -14px;\n    top: 10px;\n    width: 28px;\n    height: 28px;\n    border-radius: 28px;\n    transform: scale(0.5);\n    border-width: 4px;\n    border-style: solid;\n    display: none; }\n    [dir=rtl] md-slider .md-disabled-thumb {\n      left: auto;\n      right: -14px; }\n  md-slider.md-min .md-sign {\n    opacity: 0; }\n  md-slider:focus {\n    outline: none; }\n  md-slider.md-dragging .md-thumb-container,\n  md-slider.md-dragging .md-track-fill {\n    transition: none; }\n  md-slider:not([md-discrete]) {\n    /* Hide the sign and ticks in non-discrete mode */ }\n    md-slider:not([md-discrete]) .md-track-ticks,\n    md-slider:not([md-discrete]) .md-sign {\n      display: none; }\n    md-slider:not([md-discrete]):not([disabled]) .md-slider-wrapper .md-thumb:hover {\n      transform: scale(0.8); }\n    md-slider:not([md-discrete]):not([disabled]) .md-slider-wrapper.md-focused .md-focus-ring {\n      transform: scale(1);\n      opacity: 1; }\n    md-slider:not([md-discrete]):not([disabled]) .md-slider-wrapper.md-focused .md-thumb {\n      animation: sliderFocusThumb 0.7s cubic-bezier(0.35, 0, 0.25, 1); }\n    md-slider:not([md-discrete]):not([disabled]).md-active .md-slider-wrapper .md-thumb {\n      transform: scale(1); }\n  md-slider[md-discrete]:not([disabled]) .md-slider-wrapper.md-focused .md-focus-ring {\n    transform: scale(0);\n    animation: sliderDiscreteFocusRing 0.5s cubic-bezier(0.35, 0, 0.25, 1); }\n  md-slider[md-discrete]:not([disabled]) .md-slider-wrapper.md-focused .md-thumb {\n    animation: sliderDiscreteFocusThumb 0.5s cubic-bezier(0.35, 0, 0.25, 1); }\n  md-slider[md-discrete]:not([disabled]) .md-slider-wrapper.md-focused .md-thumb, md-slider[md-discrete]:not([disabled]).md-active .md-thumb {\n    transform: scale(0); }\n  md-slider[md-discrete]:not([disabled]) .md-slider-wrapper.md-focused .md-sign,\n  md-slider[md-discrete]:not([disabled]) .md-slider-wrapper.md-focused .md-sign:after, md-slider[md-discrete]:not([disabled]).md-active .md-sign,\n  md-slider[md-discrete]:not([disabled]).md-active .md-sign:after {\n    opacity: 1;\n    transform: translate3d(0, 0, 0) scale(1); }\n  md-slider[md-discrete][disabled][readonly] .md-thumb {\n    transform: scale(0); }\n  md-slider[md-discrete][disabled][readonly] .md-sign,\n  md-slider[md-discrete][disabled][readonly] .md-sign:after {\n    opacity: 1;\n    transform: translate3d(0, 0, 0) scale(1); }\n  md-slider[disabled] .md-track-fill {\n    display: none; }\n  md-slider[disabled] .md-track-ticks {\n    opacity: 0; }\n  md-slider[disabled]:not([readonly]) .md-sign {\n    opacity: 0; }\n  md-slider[disabled] .md-thumb {\n    transform: scale(0.5); }\n  md-slider[disabled] .md-disabled-thumb {\n    display: block; }\n  md-slider[md-vertical] {\n    flex-direction: column;\n    min-height: 128px;\n    min-width: 0; }\n    md-slider[md-vertical] .md-slider-wrapper {\n      flex: 1;\n      padding-top: 12px;\n      padding-bottom: 12px;\n      width: 48px;\n      align-self: center;\n      display: flex;\n      justify-content: center; }\n    md-slider[md-vertical] .md-track-container {\n      height: 100%;\n      width: 2px;\n      top: 0;\n      left: calc(50% - (2px / 2)); }\n    md-slider[md-vertical] .md-thumb-container {\n      top: auto;\n      margin-bottom: 23px;\n      left: calc(50% - 1px);\n      bottom: 0; }\n      md-slider[md-vertical] .md-thumb-container .md-thumb:after {\n        left: 1px; }\n      md-slider[md-vertical] .md-thumb-container .md-focus-ring {\n        left: -16px; }\n    md-slider[md-vertical] .md-track-fill {\n      bottom: 0; }\n    md-slider[md-vertical][md-discrete] .md-sign {\n      left: -40px;\n      top: 9.5px;\n      transform: scale(0.4) translate3d(67.5px, 0, 0);\n      /* The arrow pointing left next the sign */ }\n      md-slider[md-vertical][md-discrete] .md-sign:after {\n        top: 9.5px;\n        left: 19px;\n        border-top: 14px solid transparent;\n        border-right: 0;\n        border-bottom: 14px solid transparent;\n        border-left-width: 16px;\n        border-left-style: solid;\n        opacity: 0;\n        transform: translate3d(0, -8px, 0);\n        transition: all 0.2s ease-in-out; }\n      md-slider[md-vertical][md-discrete] .md-sign .md-thumb-text {\n        z-index: 1;\n        font-size: 12px;\n        font-weight: bold; }\n    md-slider[md-vertical][md-discrete].md-active .md-sign:after,\n    md-slider[md-vertical][md-discrete] .md-focused .md-sign:after, md-slider[md-vertical][md-discrete][disabled][readonly] .md-sign:after {\n      top: 0; }\n    md-slider[md-vertical][disabled][readonly] .md-thumb {\n      transform: scale(0); }\n    md-slider[md-vertical][disabled][readonly] .md-sign,\n    md-slider[md-vertical][disabled][readonly] .md-sign:after {\n      opacity: 1;\n      transform: translate3d(0, 0, 0) scale(1); }\n  md-slider[md-invert]:not([md-vertical]) .md-track-fill {\n    left: auto;\n    right: 0; }\n    [dir=rtl] md-slider[md-invert]:not([md-vertical]) .md-track-fill {\n      left: 0; }\n    [dir=rtl] md-slider[md-invert]:not([md-vertical]) .md-track-fill {\n      right: auto; }\n  md-slider[md-invert][md-vertical] .md-track-fill {\n    bottom: auto;\n    top: 0; }\n\nmd-slider-container {\n  display: flex;\n  align-items: center;\n  flex-direction: row; }\n  md-slider-container > *:first-child:not(md-slider),\n  md-slider-container > *:last-child:not(md-slider) {\n    min-width: 25px;\n    max-width: 42px;\n    height: 25px;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: color, max-width; }\n  md-slider-container > *:first-child:not(md-slider) {\n    margin-right: 16px; }\n    [dir=rtl] md-slider-container > *:first-child:not(md-slider) {\n      margin-right: auto;\n      margin-left: 16px; }\n  md-slider-container > *:last-child:not(md-slider) {\n    margin-left: 16px; }\n    [dir=rtl] md-slider-container > *:last-child:not(md-slider) {\n      margin-left: auto;\n      margin-right: 16px; }\n  md-slider-container[md-vertical] {\n    flex-direction: column; }\n    md-slider-container[md-vertical] > *:first-child:not(md-slider),\n    md-slider-container[md-vertical] > *:last-child:not(md-slider) {\n      margin-right: 0;\n      margin-left: 0;\n      text-align: center; }\n  md-slider-container md-input-container input[type="number"] {\n    text-align: center;\n    padding-left: 15px;\n    height: 50px;\n    margin-top: -25px; }\n    [dir=rtl] md-slider-container md-input-container input[type="number"] {\n      padding-left: 0;\n      padding-right: 15px; }\n\n@media screen and (-ms-high-contrast: active) {\n  md-slider.md-default-theme .md-track {\n    border-bottom: 1px solid #fff; } }\n\n.md-sticky-clone {\n  z-index: 2;\n  top: 0;\n  left: 0;\n  right: 0;\n  position: absolute !important;\n  transform: translate3d(-9999px, -9999px, 0); }\n  .md-sticky-clone[sticky-state="active"] {\n    transform: translate3d(0, 0, 0); }\n    .md-sticky-clone[sticky-state="active"]:not(.md-sticky-no-effect) .md-subheader-inner {\n      animation: subheaderStickyHoverIn 0.3s ease-out both; }\n\n@keyframes subheaderStickyHoverIn {\n  0% {\n    box-shadow: 0 0 0 0 transparent; }\n  100% {\n    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16); } }\n\n@keyframes subheaderStickyHoverOut {\n  0% {\n    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16); }\n  100% {\n    box-shadow: 0 0 0 0 transparent; } }\n\n.md-subheader-wrapper:not(.md-sticky-no-effect) {\n  transition: 0.2s ease-out margin; }\n  .md-subheader-wrapper:not(.md-sticky-no-effect) .md-subheader {\n    margin: 0; }\n  .md-subheader-wrapper:not(.md-sticky-no-effect).md-sticky-clone {\n    z-index: 2; }\n  .md-subheader-wrapper:not(.md-sticky-no-effect)[sticky-state="active"] {\n    margin-top: -2px; }\n  .md-subheader-wrapper:not(.md-sticky-no-effect):not(.md-sticky-clone)[sticky-prev-state="active"] .md-subheader-inner:after {\n    animation: subheaderStickyHoverOut 0.3s ease-out both; }\n\n.md-subheader {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1em;\n  margin: 0 0 0 0;\n  position: relative; }\n  .md-subheader .md-subheader-inner {\n    display: block;\n    padding: 16px; }\n  .md-subheader .md-subheader-content {\n    display: block;\n    z-index: 1;\n    position: relative; }\n\n[md-swipe-left], [md-swipe-right] {\n  touch-action: pan-y; }\n\n[md-swipe-up], [md-swipe-down] {\n  touch-action: pan-x; }\n\n.md-inline-form md-switch {\n  margin-top: 18px;\n  margin-bottom: 19px; }\n\nmd-switch {\n  margin: 16px 0;\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  user-select: none;\n  height: 30px;\n  line-height: 28px;\n  align-items: center;\n  display: flex;\n  margin-left: inherit;\n  margin-right: 16px; }\n  [dir=rtl] md-switch {\n    margin-left: 16px; }\n  [dir=rtl] md-switch {\n    margin-right: inherit; }\n  md-switch:last-of-type {\n    margin-left: inherit;\n    margin-right: 0; }\n    [dir=rtl] md-switch:last-of-type {\n      margin-left: 0; }\n    [dir=rtl] md-switch:last-of-type {\n      margin-right: inherit; }\n  md-switch[disabled] {\n    cursor: default; }\n    md-switch[disabled] .md-container {\n      cursor: default; }\n  md-switch .md-container {\n    cursor: grab;\n    width: 36px;\n    height: 24px;\n    position: relative;\n    user-select: none;\n    margin-right: 8px;\n    float: left; }\n    [dir=rtl] md-switch .md-container {\n      margin-right: 0px;\n      margin-left: 8px; }\n  md-switch.md-inverted .md-container {\n    margin-right: initial;\n    margin-left: 8px; }\n    [dir=rtl] md-switch.md-inverted .md-container {\n      margin-right: 8px; }\n    [dir=rtl] md-switch.md-inverted .md-container {\n      margin-left: initial; }\n  md-switch:not([disabled]) .md-dragging,\n  md-switch:not([disabled]).md-dragging .md-container {\n    cursor: grabbing; }\n  md-switch.md-focused:not([disabled]) .md-thumb:before {\n    left: -8px;\n    top: -8px;\n    right: -8px;\n    bottom: -8px; }\n  md-switch.md-focused:not([disabled]):not(.md-checked) .md-thumb:before {\n    background-color: rgba(0, 0, 0, 0.12); }\n  md-switch .md-label {\n    border-color: transparent;\n    border-width: 0;\n    float: left; }\n  md-switch .md-bar {\n    left: 1px;\n    width: 34px;\n    top: 5px;\n    height: 14px;\n    border-radius: 8px;\n    position: absolute; }\n  md-switch .md-thumb-container {\n    top: 2px;\n    left: 0;\n    width: 16px;\n    position: absolute;\n    transform: translate3d(0, 0, 0);\n    z-index: 1; }\n  md-switch.md-checked .md-thumb-container {\n    transform: translate3d(100%, 0, 0); }\n  md-switch .md-thumb {\n    position: absolute;\n    margin: 0;\n    left: 0;\n    top: 0;\n    outline: none;\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); }\n    md-switch .md-thumb:before {\n      background-color: transparent;\n      border-radius: 50%;\n      content: \'\';\n      position: absolute;\n      display: block;\n      height: auto;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      transition: all 0.5s;\n      width: auto; }\n    md-switch .md-thumb .md-ripple-container {\n      position: absolute;\n      display: block;\n      width: auto;\n      height: auto;\n      left: -20px;\n      top: -20px;\n      right: -20px;\n      bottom: -20px; }\n  md-switch:not(.md-dragging) .md-bar,\n  md-switch:not(.md-dragging) .md-thumb-container,\n  md-switch:not(.md-dragging) .md-thumb {\n    transition: all 0.08s linear;\n    transition-property: transform, background-color; }\n  md-switch:not(.md-dragging) .md-bar,\n  md-switch:not(.md-dragging) .md-thumb {\n    transition-delay: 0.05s; }\n\n@media screen and (-ms-high-contrast: active) {\n  md-switch.md-default-theme .md-bar {\n    background-color: #666; }\n  md-switch.md-default-theme.md-checked .md-bar {\n    background-color: #9E9E9E; }\n  md-switch.md-default-theme .md-thumb {\n    background-color: #fff; } }\n\n@keyframes md-tab-content-hide {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\nmd-tab-data {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  opacity: 0; }\n\nmd-tabs {\n  display: block;\n  margin: 0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0; }\n  md-tabs:not(.md-no-tab-content):not(.md-dynamic-height) {\n    min-height: 248px; }\n  md-tabs[md-align-tabs="bottom"] {\n    padding-bottom: 48px; }\n    md-tabs[md-align-tabs="bottom"] md-tabs-wrapper {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      height: 48px;\n      z-index: 2; }\n    md-tabs[md-align-tabs="bottom"] md-tabs-content-wrapper {\n      top: 0;\n      bottom: 48px; }\n  md-tabs.md-dynamic-height md-tabs-content-wrapper {\n    min-height: 0;\n    position: relative;\n    top: auto;\n    left: auto;\n    right: auto;\n    bottom: auto;\n    overflow: visible; }\n  md-tabs.md-dynamic-height md-tab-content.md-active {\n    position: relative; }\n  md-tabs[md-border-bottom] md-tabs-wrapper {\n    border-width: 0 0 1px;\n    border-style: solid; }\n  md-tabs[md-border-bottom]:not(.md-dynamic-height) md-tabs-content-wrapper {\n    top: 49px; }\n\nmd-tabs-wrapper {\n  display: block;\n  position: relative;\n  transform: translate3d(0, 0, 0); }\n  md-tabs-wrapper md-prev-button, md-tabs-wrapper md-next-button {\n    height: 100%;\n    width: 32px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    line-height: 1em;\n    z-index: 2;\n    cursor: pointer;\n    font-size: 16px;\n    background: transparent no-repeat center center;\n    transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1); }\n    md-tabs-wrapper md-prev-button:focus, md-tabs-wrapper md-next-button:focus {\n      outline: none; }\n    md-tabs-wrapper md-prev-button.md-disabled, md-tabs-wrapper md-next-button.md-disabled {\n      opacity: 0.25;\n      cursor: default; }\n    md-tabs-wrapper md-prev-button.ng-leave, md-tabs-wrapper md-next-button.ng-leave {\n      transition: none; }\n    md-tabs-wrapper md-prev-button md-icon, md-tabs-wrapper md-next-button md-icon {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate3d(-50%, -50%, 0); }\n    [dir="rtl"] md-tabs-wrapper md-prev-button, [dir="rtl"] md-tabs-wrapper md-next-button {\n      transform: rotateY(180deg) translateY(-50%); }\n  md-tabs-wrapper md-prev-button {\n    left: 0;\n    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg=="); }\n    [dir=rtl] md-tabs-wrapper md-prev-button {\n      left: auto;\n      right: 0; }\n  md-tabs-wrapper md-next-button {\n    right: 0;\n    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K"); }\n    [dir=rtl] md-tabs-wrapper md-next-button {\n      right: auto;\n      left: 0; }\n    md-tabs-wrapper md-next-button md-icon {\n      transform: translate3d(-50%, -50%, 0) rotate(180deg); }\n  md-tabs-wrapper.md-stretch-tabs md-pagination-wrapper {\n    width: 100%;\n    flex-direction: row; }\n    md-tabs-wrapper.md-stretch-tabs md-pagination-wrapper md-tab-item {\n      flex-grow: 1; }\n\nmd-tabs-canvas {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  height: 48px; }\n  md-tabs-canvas:after {\n    content: \'\';\n    display: table;\n    clear: both; }\n  md-tabs-canvas .md-dummy-wrapper {\n    position: absolute;\n    top: 0;\n    left: 0; }\n    [dir=rtl] md-tabs-canvas .md-dummy-wrapper {\n      left: auto;\n      right: 0; }\n  md-tabs-canvas.md-paginated {\n    margin: 0 32px; }\n  md-tabs-canvas.md-center-tabs {\n    display: flex;\n    flex-direction: column;\n    text-align: center; }\n    md-tabs-canvas.md-center-tabs .md-tab {\n      float: none;\n      display: inline-block; }\n\nmd-pagination-wrapper {\n  height: 48px;\n  display: flex;\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  position: absolute;\n  left: 0;\n  transform: translate3d(0, 0, 0); }\n  md-pagination-wrapper:after {\n    content: \'\';\n    display: table;\n    clear: both; }\n  [dir=rtl] md-pagination-wrapper {\n    left: auto;\n    right: 0; }\n  md-pagination-wrapper.md-center-tabs {\n    position: relative;\n    justify-content: center; }\n\nmd-tabs-content-wrapper {\n  display: block;\n  position: absolute;\n  top: 48px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden; }\n\nmd-tab-content {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  overflow: auto;\n  transform: translate3d(0, 0, 0); }\n  md-tab-content.md-no-scroll {\n    bottom: auto;\n    overflow: hidden; }\n  md-tab-content.ng-leave, md-tab-content.md-no-transition {\n    transition: none; }\n  md-tab-content.md-left:not(.md-active) {\n    transform: translateX(-100%);\n    animation: 1s md-tab-content-hide;\n    visibility: hidden; }\n    [dir=rtl] md-tab-content.md-left:not(.md-active) {\n      transform: translateX(100%); }\n    md-tab-content.md-left:not(.md-active) * {\n      transition: visibility 0s linear;\n      transition-delay: 0.5s;\n      visibility: hidden; }\n  md-tab-content.md-right:not(.md-active) {\n    transform: translateX(100%);\n    animation: 1s md-tab-content-hide;\n    visibility: hidden; }\n    [dir=rtl] md-tab-content.md-right:not(.md-active) {\n      transform: translateX(-100%); }\n    md-tab-content.md-right:not(.md-active) * {\n      transition: visibility 0s linear;\n      transition-delay: 0.5s;\n      visibility: hidden; }\n  md-tab-content > div {\n    flex: 1 0 100%;\n    min-width: 0; }\n    md-tab-content > div.ng-leave {\n      animation: 1s md-tab-content-hide; }\n\nmd-ink-bar {\n  position: absolute;\n  left: auto;\n  right: auto;\n  bottom: 0;\n  height: 2px; }\n  md-ink-bar.md-left {\n    transition: left 0.125s cubic-bezier(0.35, 0, 0.25, 1), right 0.25s cubic-bezier(0.35, 0, 0.25, 1); }\n  md-ink-bar.md-right {\n    transition: left 0.25s cubic-bezier(0.35, 0, 0.25, 1), right 0.125s cubic-bezier(0.35, 0, 0.25, 1); }\n\nmd-tab {\n  position: absolute;\n  z-index: -1;\n  left: -9999px; }\n\n.md-tab {\n  font-size: 14px;\n  text-align: center;\n  line-height: 24px;\n  padding: 12px 24px;\n  transition: background-color 0.35s cubic-bezier(0.35, 0, 0.25, 1);\n  cursor: pointer;\n  white-space: nowrap;\n  position: relative;\n  text-transform: uppercase;\n  float: left;\n  font-weight: 500;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n  [dir=rtl] .md-tab {\n    float: right; }\n  .md-tab.md-focused, .md-tab:focus {\n    box-shadow: none;\n    outline: none; }\n  .md-tab.md-active {\n    cursor: default; }\n  .md-tab.md-disabled {\n    pointer-events: none;\n    touch-action: pan-y;\n    user-select: none;\n    -webkit-user-drag: none;\n    opacity: 0.5;\n    cursor: default; }\n  .md-tab.ng-leave {\n    transition: none; }\n\nmd-toolbar + md-tabs, md-toolbar + md-dialog-content md-tabs {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.md-toast-text {\n  padding: 0 6px; }\n\nmd-toast {\n  position: absolute;\n  z-index: 105;\n  box-sizing: border-box;\n  cursor: default;\n  overflow: hidden;\n  padding: 8px;\n  opacity: 1;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  /* Transition differently when swiping */\n  /*\n   * When the toast doesn\'t take up the whole screen,\n   * make it rotate when the user swipes it away\n   */ }\n  md-toast .md-toast-content {\n    display: flex;\n    direction: row;\n    align-items: center;\n    max-height: 168px;\n    max-width: 100%;\n    min-height: 48px;\n    padding: 0 18px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n    border-radius: 2px;\n    font-size: 14px;\n    overflow: hidden;\n    transform: translate3d(0, 0, 0) rotateZ(0deg);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    justify-content: flex-start; }\n    md-toast .md-toast-content::before {\n      content: \'\';\n      min-height: 48px;\n      visibility: hidden;\n      display: inline-block; }\n    [dir=rtl] md-toast .md-toast-content {\n      justify-content: flex-end; }\n    md-toast .md-toast-content span {\n      flex: 1 1 0%;\n      box-sizing: border-box;\n      min-width: 0; }\n  md-toast.md-capsule {\n    border-radius: 24px; }\n    md-toast.md-capsule .md-toast-content {\n      border-radius: 24px; }\n  md-toast.ng-leave-active .md-toast-content {\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }\n  md-toast.md-swipeleft .md-toast-content, md-toast.md-swiperight .md-toast-content, md-toast.md-swipeup .md-toast-content, md-toast.md-swipedown .md-toast-content {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  md-toast.ng-enter {\n    opacity: 0; }\n    md-toast.ng-enter .md-toast-content {\n      transform: translate3d(0, 100%, 0); }\n    md-toast.ng-enter.md-top .md-toast-content {\n      transform: translate3d(0, -100%, 0); }\n    md-toast.ng-enter.ng-enter-active {\n      opacity: 1; }\n      md-toast.ng-enter.ng-enter-active .md-toast-content {\n        transform: translate3d(0, 0, 0); }\n  md-toast.ng-leave.ng-leave-active .md-toast-content {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0); }\n  md-toast.ng-leave.ng-leave-active.md-swipeup .md-toast-content {\n    transform: translate3d(0, -50%, 0); }\n  md-toast.ng-leave.ng-leave-active.md-swipedown .md-toast-content {\n    transform: translate3d(0, 50%, 0); }\n  md-toast.ng-leave.ng-leave-active.md-top .md-toast-content {\n    transform: translate3d(0, -100%, 0); }\n  md-toast .md-action {\n    line-height: 19px;\n    margin-left: 24px;\n    margin-right: 0;\n    cursor: pointer;\n    text-transform: uppercase;\n    float: right; }\n  md-toast .md-button {\n    min-width: 0;\n    margin-right: 0;\n    margin-left: 12px; }\n    [dir=rtl] md-toast .md-button {\n      margin-right: 12px; }\n    [dir=rtl] md-toast .md-button {\n      margin-left: 0; }\n\n@media (max-width: 959px) {\n  md-toast {\n    left: 0;\n    right: 0;\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n    border-radius: 0;\n    bottom: 0;\n    padding: 0; }\n    md-toast.ng-leave.ng-leave-active.md-swipeup .md-toast-content {\n      transform: translate3d(0, -50%, 0); }\n    md-toast.ng-leave.ng-leave-active.md-swipedown .md-toast-content {\n      transform: translate3d(0, 50%, 0); } }\n\n@media (min-width: 960px) {\n  md-toast {\n    min-width: 304px;\n    /*\n   * When the toast doesn\'t take up the whole screen,\n   * make it rotate when the user swipes it away\n   */ }\n    md-toast.md-bottom {\n      bottom: 0; }\n    md-toast.md-left {\n      left: 0; }\n    md-toast.md-right {\n      right: 0; }\n    md-toast.md-top {\n      top: 0; }\n    md-toast._md-start {\n      left: 0; }\n      [dir=rtl] md-toast._md-start {\n        left: auto;\n        right: 0; }\n    md-toast._md-end {\n      right: 0; }\n      [dir=rtl] md-toast._md-end {\n        right: auto;\n        left: 0; }\n    md-toast.ng-leave.ng-leave-active.md-swipeleft .md-toast-content {\n      transform: translate3d(-50%, 0, 0); }\n    md-toast.ng-leave.ng-leave-active.md-swiperight .md-toast-content {\n      transform: translate3d(50%, 0, 0); } }\n\n@media (min-width: 1920px) {\n  md-toast .md-toast-content {\n    max-width: 568px; } }\n\n@media screen and (-ms-high-contrast: active) {\n  md-toast {\n    border: 1px solid #fff; } }\n\n.md-toast-animating {\n  overflow: hidden !important; }\n\nmd-toolbar {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 2;\n  font-size: 20px;\n  min-height: 64px;\n  width: 100%; }\n  md-toolbar._md-toolbar-transitions {\n    transition-duration: 0.5s;\n    transition-timing-function: cubic-bezier(0.35, 0, 0.25, 1);\n    transition-property: background-color, fill, color; }\n  md-toolbar.md-whiteframe-z1-add, md-toolbar.md-whiteframe-z1-remove {\n    transition: box-shadow 0.5s linear; }\n  md-toolbar md-toolbar-filler {\n    width: 72px; }\n  md-toolbar *,\n  md-toolbar *:before,\n  md-toolbar *:after {\n    box-sizing: border-box; }\n  md-toolbar.ng-animate {\n    transition: none; }\n  md-toolbar.md-tall {\n    height: 128px;\n    min-height: 128px;\n    max-height: 128px; }\n  md-toolbar.md-medium-tall {\n    height: 88px;\n    min-height: 88px;\n    max-height: 88px; }\n    md-toolbar.md-medium-tall .md-toolbar-tools {\n      height: 48px;\n      min-height: 48px;\n      max-height: 48px; }\n  md-toolbar > .md-indent {\n    margin-left: 64px; }\n    [dir=rtl] md-toolbar > .md-indent {\n      margin-left: auto;\n      margin-right: 64px; }\n  md-toolbar ~ md-content > md-list {\n    padding: 0; }\n    md-toolbar ~ md-content > md-list md-list-item:last-child md-divider {\n      display: none; }\n\n.md-toolbar-tools {\n  font-size: 20px;\n  letter-spacing: 0.005em;\n  box-sizing: border-box;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n  height: 64px;\n  max-height: 64px;\n  padding: 0 16px;\n  margin: 0; }\n  .md-toolbar-tools h1, .md-toolbar-tools h2, .md-toolbar-tools h3 {\n    font-size: inherit;\n    font-weight: inherit;\n    margin: inherit; }\n  .md-toolbar-tools a {\n    color: inherit;\n    text-decoration: none; }\n  .md-toolbar-tools .fill-height {\n    display: flex;\n    align-items: center; }\n  .md-toolbar-tools md-checkbox {\n    margin: inherit; }\n  .md-toolbar-tools .md-button {\n    margin-top: 0;\n    margin-bottom: 0; }\n    .md-toolbar-tools .md-button, .md-toolbar-tools .md-button.md-icon-button md-icon {\n      transition-duration: 0.5s;\n      transition-timing-function: cubic-bezier(0.35, 0, 0.25, 1);\n      transition-property: background-color, fill, color; }\n      .md-toolbar-tools .md-button.ng-animate, .md-toolbar-tools .md-button.md-icon-button md-icon.ng-animate {\n        transition: none; }\n  .md-toolbar-tools > .md-button:first-child {\n    margin-left: -8px; }\n    [dir=rtl] .md-toolbar-tools > .md-button:first-child {\n      margin-left: auto;\n      margin-right: -8px; }\n  .md-toolbar-tools > .md-button:last-child {\n    margin-right: -8px; }\n    [dir=rtl] .md-toolbar-tools > .md-button:last-child {\n      margin-right: auto;\n      margin-left: -8px; }\n  .md-toolbar-tools > md-menu:last-child {\n    margin-right: -8px; }\n    [dir=rtl] .md-toolbar-tools > md-menu:last-child {\n      margin-right: auto;\n      margin-left: -8px; }\n    .md-toolbar-tools > md-menu:last-child > .md-button {\n      margin-right: 0; }\n      [dir=rtl] .md-toolbar-tools > md-menu:last-child > .md-button {\n        margin-right: auto;\n        margin-left: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .md-toolbar-tools {\n      border-bottom: 1px solid #fff; } }\n\n@media (min-width: 0) and (max-width: 959px) and (orientation: portrait) {\n  md-toolbar {\n    min-height: 56px; }\n  .md-toolbar-tools {\n    height: 56px;\n    max-height: 56px; } }\n\n@media (min-width: 0) and (max-width: 959px) and (orientation: landscape) {\n  md-toolbar {\n    min-height: 48px; }\n  .md-toolbar-tools {\n    height: 48px;\n    max-height: 48px; } }\n\n.md-tooltip {\n  pointer-events: none;\n  border-radius: 4px;\n  overflow: hidden;\n  opacity: 0;\n  font-weight: 500;\n  font-size: 14px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  height: 32px;\n  line-height: 32px;\n  padding-right: 16px;\n  padding-left: 16px; }\n  .md-tooltip.md-origin-top {\n    transform-origin: center bottom;\n    margin-top: -24px; }\n  .md-tooltip.md-origin-right {\n    transform-origin: left center;\n    margin-left: 24px; }\n  .md-tooltip.md-origin-bottom {\n    transform-origin: center top;\n    margin-top: 24px; }\n  .md-tooltip.md-origin-left {\n    transform-origin: right center;\n    margin-left: -24px; }\n  @media (min-width: 960px) {\n    .md-tooltip {\n      font-size: 10px;\n      height: 22px;\n      line-height: 22px;\n      padding-right: 8px;\n      padding-left: 8px; }\n      .md-tooltip.md-origin-top {\n        margin-top: -14px; }\n      .md-tooltip.md-origin-right {\n        margin-left: 14px; }\n      .md-tooltip.md-origin-bottom {\n        margin-top: 14px; }\n      .md-tooltip.md-origin-left {\n        margin-left: -14px; } }\n  .md-tooltip.md-show-add {\n    transform: scale(0); }\n  .md-tooltip.md-show {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-duration: 150ms;\n    transform: scale(1);\n    opacity: 0.9; }\n  .md-tooltip.md-hide {\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n    transition-duration: 150ms;\n    transform: scale(0);\n    opacity: 0; }\n\n.md-truncate {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n  .md-truncate.md-clip {\n    text-overflow: clip; }\n  .md-truncate.flex {\n    width: 0; }\n\n.md-virtual-repeat-container {\n  box-sizing: border-box;\n  display: block;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  position: relative; }\n  .md-virtual-repeat-container .md-virtual-repeat-scroller {\n    bottom: 0;\n    box-sizing: border-box;\n    left: 0;\n    margin: 0;\n    overflow-x: hidden;\n    padding: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    -webkit-overflow-scrolling: touch; }\n  .md-virtual-repeat-container .md-virtual-repeat-sizer {\n    box-sizing: border-box;\n    height: 1px;\n    display: block;\n    margin: 0;\n    padding: 0;\n    width: 1px; }\n  .md-virtual-repeat-container .md-virtual-repeat-offsetter {\n    box-sizing: border-box;\n    left: 0;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n\n.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-scroller {\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-offsetter {\n  bottom: 16px;\n  right: auto;\n  white-space: nowrap; }\n  [dir=rtl] .md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-offsetter {\n    right: auto;\n    left: auto; }\n\n.md-whiteframe-1dp, .md-whiteframe-z1 {\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-2dp {\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-3dp {\n  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-4dp, .md-whiteframe-z2 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-5dp {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-6dp {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-7dp, .md-whiteframe-z3 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-8dp {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-9dp {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-10dp, .md-whiteframe-z4 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-11dp {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-12dp {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-13dp, .md-whiteframe-z5 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-14dp {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-15dp {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-16dp {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-17dp {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-18dp {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-19dp {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-20dp {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-21dp {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-22dp {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-23dp {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-whiteframe-24dp {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n@media screen and (-ms-high-contrast: active) {\n  md-whiteframe {\n    border: 1px solid #fff; } }\n\n@media print {\n  md-whiteframe, [md-whiteframe] {\n    background-color: #ffffff; } }\n\n/*\n* Since Layout API uses ng-cloak to hide the dom elements while layouts are adjusted\n*\n*/\n[ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {\n  display: none !important; }\n\n/*\n*\n*  Responsive attributes\n*\n*  References:\n*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex\n*  2) https://css-tricks.com/almanac/properties/f/flex/\n*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/\n*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items\n*  5) http://godban.com.ua/projects/flexgrid\n*\n*\n*/\n@-moz-document url-prefix() {\n  .layout-fill {\n    margin: 0;\n    width: 100%;\n    min-height: 100%;\n    height: 100%; } }\n\n/*\n *  Apply Mixins to create Layout/Flexbox styles\n *\n */\n.flex-order {\n  order: 0; }\n\n.flex-order--20 {\n  order: -20; }\n\n.flex-order--19 {\n  order: -19; }\n\n.flex-order--18 {\n  order: -18; }\n\n.flex-order--17 {\n  order: -17; }\n\n.flex-order--16 {\n  order: -16; }\n\n.flex-order--15 {\n  order: -15; }\n\n.flex-order--14 {\n  order: -14; }\n\n.flex-order--13 {\n  order: -13; }\n\n.flex-order--12 {\n  order: -12; }\n\n.flex-order--11 {\n  order: -11; }\n\n.flex-order--10 {\n  order: -10; }\n\n.flex-order--9 {\n  order: -9; }\n\n.flex-order--8 {\n  order: -8; }\n\n.flex-order--7 {\n  order: -7; }\n\n.flex-order--6 {\n  order: -6; }\n\n.flex-order--5 {\n  order: -5; }\n\n.flex-order--4 {\n  order: -4; }\n\n.flex-order--3 {\n  order: -3; }\n\n.flex-order--2 {\n  order: -2; }\n\n.flex-order--1 {\n  order: -1; }\n\n.flex-order-0 {\n  order: 0; }\n\n.flex-order-1 {\n  order: 1; }\n\n.flex-order-2 {\n  order: 2; }\n\n.flex-order-3 {\n  order: 3; }\n\n.flex-order-4 {\n  order: 4; }\n\n.flex-order-5 {\n  order: 5; }\n\n.flex-order-6 {\n  order: 6; }\n\n.flex-order-7 {\n  order: 7; }\n\n.flex-order-8 {\n  order: 8; }\n\n.flex-order-9 {\n  order: 9; }\n\n.flex-order-10 {\n  order: 10; }\n\n.flex-order-11 {\n  order: 11; }\n\n.flex-order-12 {\n  order: 12; }\n\n.flex-order-13 {\n  order: 13; }\n\n.flex-order-14 {\n  order: 14; }\n\n.flex-order-15 {\n  order: 15; }\n\n.flex-order-16 {\n  order: 16; }\n\n.flex-order-17 {\n  order: 17; }\n\n.flex-order-18 {\n  order: 18; }\n\n.flex-order-19 {\n  order: 19; }\n\n.flex-order-20 {\n  order: 20; }\n\n.offset-0, .flex-offset-0 {\n  margin-left: 0; }\n  [dir=rtl] .offset-0, [dir=rtl] .flex-offset-0 {\n    margin-left: auto;\n    margin-right: 0; }\n\n.offset-5, .flex-offset-5 {\n  margin-left: 5%; }\n  [dir=rtl] .offset-5, [dir=rtl] .flex-offset-5 {\n    margin-left: auto;\n    margin-right: 5%; }\n\n.offset-10, .flex-offset-10 {\n  margin-left: 10%; }\n  [dir=rtl] .offset-10, [dir=rtl] .flex-offset-10 {\n    margin-left: auto;\n    margin-right: 10%; }\n\n.offset-15, .flex-offset-15 {\n  margin-left: 15%; }\n  [dir=rtl] .offset-15, [dir=rtl] .flex-offset-15 {\n    margin-left: auto;\n    margin-right: 15%; }\n\n.offset-20, .flex-offset-20 {\n  margin-left: 20%; }\n  [dir=rtl] .offset-20, [dir=rtl] .flex-offset-20 {\n    margin-left: auto;\n    margin-right: 20%; }\n\n.offset-25, .flex-offset-25 {\n  margin-left: 25%; }\n  [dir=rtl] .offset-25, [dir=rtl] .flex-offset-25 {\n    margin-left: auto;\n    margin-right: 25%; }\n\n.offset-30, .flex-offset-30 {\n  margin-left: 30%; }\n  [dir=rtl] .offset-30, [dir=rtl] .flex-offset-30 {\n    margin-left: auto;\n    margin-right: 30%; }\n\n.offset-35, .flex-offset-35 {\n  margin-left: 35%; }\n  [dir=rtl] .offset-35, [dir=rtl] .flex-offset-35 {\n    margin-left: auto;\n    margin-right: 35%; }\n\n.offset-40, .flex-offset-40 {\n  margin-left: 40%; }\n  [dir=rtl] .offset-40, [dir=rtl] .flex-offset-40 {\n    margin-left: auto;\n    margin-right: 40%; }\n\n.offset-45, .flex-offset-45 {\n  margin-left: 45%; }\n  [dir=rtl] .offset-45, [dir=rtl] .flex-offset-45 {\n    margin-left: auto;\n    margin-right: 45%; }\n\n.offset-50, .flex-offset-50 {\n  margin-left: 50%; }\n  [dir=rtl] .offset-50, [dir=rtl] .flex-offset-50 {\n    margin-left: auto;\n    margin-right: 50%; }\n\n.offset-55, .flex-offset-55 {\n  margin-left: 55%; }\n  [dir=rtl] .offset-55, [dir=rtl] .flex-offset-55 {\n    margin-left: auto;\n    margin-right: 55%; }\n\n.offset-60, .flex-offset-60 {\n  margin-left: 60%; }\n  [dir=rtl] .offset-60, [dir=rtl] .flex-offset-60 {\n    margin-left: auto;\n    margin-right: 60%; }\n\n.offset-65, .flex-offset-65 {\n  margin-left: 65%; }\n  [dir=rtl] .offset-65, [dir=rtl] .flex-offset-65 {\n    margin-left: auto;\n    margin-right: 65%; }\n\n.offset-70, .flex-offset-70 {\n  margin-left: 70%; }\n  [dir=rtl] .offset-70, [dir=rtl] .flex-offset-70 {\n    margin-left: auto;\n    margin-right: 70%; }\n\n.offset-75, .flex-offset-75 {\n  margin-left: 75%; }\n  [dir=rtl] .offset-75, [dir=rtl] .flex-offset-75 {\n    margin-left: auto;\n    margin-right: 75%; }\n\n.offset-80, .flex-offset-80 {\n  margin-left: 80%; }\n  [dir=rtl] .offset-80, [dir=rtl] .flex-offset-80 {\n    margin-left: auto;\n    margin-right: 80%; }\n\n.offset-85, .flex-offset-85 {\n  margin-left: 85%; }\n  [dir=rtl] .offset-85, [dir=rtl] .flex-offset-85 {\n    margin-left: auto;\n    margin-right: 85%; }\n\n.offset-90, .flex-offset-90 {\n  margin-left: 90%; }\n  [dir=rtl] .offset-90, [dir=rtl] .flex-offset-90 {\n    margin-left: auto;\n    margin-right: 90%; }\n\n.offset-95, .flex-offset-95 {\n  margin-left: 95%; }\n  [dir=rtl] .offset-95, [dir=rtl] .flex-offset-95 {\n    margin-left: auto;\n    margin-right: 95%; }\n\n.offset-33, .flex-offset-33 {\n  margin-left: calc(100% / 3); }\n\n.offset-66, .flex-offset-66 {\n  margin-left: calc(200% / 3); }\n  [dir=rtl] .offset-66, [dir=rtl] .flex-offset-66 {\n    margin-left: auto;\n    margin-right: calc(200% / 3); }\n\n.layout-align,\n.layout-align-start-stretch {\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch; }\n\n.layout-align-start,\n.layout-align-start-start,\n.layout-align-start-center,\n.layout-align-start-end,\n.layout-align-start-stretch {\n  justify-content: flex-start; }\n\n.layout-align-center,\n.layout-align-center-start,\n.layout-align-center-center,\n.layout-align-center-end,\n.layout-align-center-stretch {\n  justify-content: center; }\n\n.layout-align-end,\n.layout-align-end-start,\n.layout-align-end-center,\n.layout-align-end-end,\n.layout-align-end-stretch {\n  justify-content: flex-end; }\n\n.layout-align-space-around,\n.layout-align-space-around-center,\n.layout-align-space-around-start,\n.layout-align-space-around-end,\n.layout-align-space-around-stretch {\n  justify-content: space-around; }\n\n.layout-align-space-between,\n.layout-align-space-between-center,\n.layout-align-space-between-start,\n.layout-align-space-between-end,\n.layout-align-space-between-stretch {\n  justify-content: space-between; }\n\n.layout-align-start-start,\n.layout-align-center-start,\n.layout-align-end-start,\n.layout-align-space-between-start,\n.layout-align-space-around-start {\n  align-items: flex-start;\n  align-content: flex-start; }\n\n.layout-align-start-center,\n.layout-align-center-center,\n.layout-align-end-center,\n.layout-align-space-between-center,\n.layout-align-space-around-center {\n  align-items: center;\n  align-content: center;\n  max-width: 100%; }\n\n.layout-align-start-center > *,\n.layout-align-center-center > *,\n.layout-align-end-center > *,\n.layout-align-space-between-center > *,\n.layout-align-space-around-center > * {\n  max-width: 100%;\n  box-sizing: border-box; }\n\n.layout-align-start-end,\n.layout-align-center-end,\n.layout-align-end-end,\n.layout-align-space-between-end,\n.layout-align-space-around-end {\n  align-items: flex-end;\n  align-content: flex-end; }\n\n.layout-align-start-stretch,\n.layout-align-center-stretch,\n.layout-align-end-stretch,\n.layout-align-space-between-stretch,\n.layout-align-space-around-stretch {\n  align-items: stretch;\n  align-content: stretch; }\n\n.flex {\n  flex: 1;\n  box-sizing: border-box; }\n\n.flex-grow {\n  flex: 1 1 100%;\n  box-sizing: border-box; }\n\n.flex-initial {\n  flex: 0 1 auto;\n  box-sizing: border-box; }\n\n.flex-auto {\n  flex: 1 1 auto;\n  box-sizing: border-box; }\n\n.flex-none {\n  flex: 0 0 auto;\n  box-sizing: border-box; }\n\n.flex-noshrink {\n  flex: 1 0 auto;\n  box-sizing: border-box; }\n\n.flex-nogrow {\n  flex: 0 1 auto;\n  box-sizing: border-box; }\n\n.flex-0 {\n  flex: 1 1 100%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-0 {\n  flex: 1 1 100%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box;\n  min-width: 0; }\n\n.layout-column > .flex-0 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 0%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-0 {\n  flex: 1 1 100%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box;\n  min-width: 0; }\n\n.layout-column > .flex-0 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 0%;\n  box-sizing: border-box;\n  min-height: 0; }\n\n.flex-5 {\n  flex: 1 1 100%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-5 {\n  flex: 1 1 100%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-5 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 5%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-5 {\n  flex: 1 1 100%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-5 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 5%;\n  box-sizing: border-box; }\n\n.flex-10 {\n  flex: 1 1 100%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-10 {\n  flex: 1 1 100%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-10 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 10%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-10 {\n  flex: 1 1 100%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-10 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 10%;\n  box-sizing: border-box; }\n\n.flex-15 {\n  flex: 1 1 100%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-15 {\n  flex: 1 1 100%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-15 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 15%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-15 {\n  flex: 1 1 100%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-15 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 15%;\n  box-sizing: border-box; }\n\n.flex-20 {\n  flex: 1 1 100%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-20 {\n  flex: 1 1 100%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-20 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 20%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-20 {\n  flex: 1 1 100%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-20 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 20%;\n  box-sizing: border-box; }\n\n.flex-25 {\n  flex: 1 1 100%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-25 {\n  flex: 1 1 100%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-25 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 25%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-25 {\n  flex: 1 1 100%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-25 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 25%;\n  box-sizing: border-box; }\n\n.flex-30 {\n  flex: 1 1 100%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-30 {\n  flex: 1 1 100%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-30 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 30%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-30 {\n  flex: 1 1 100%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-30 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 30%;\n  box-sizing: border-box; }\n\n.flex-35 {\n  flex: 1 1 100%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-35 {\n  flex: 1 1 100%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-35 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 35%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-35 {\n  flex: 1 1 100%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-35 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 35%;\n  box-sizing: border-box; }\n\n.flex-40 {\n  flex: 1 1 100%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-40 {\n  flex: 1 1 100%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-40 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 40%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-40 {\n  flex: 1 1 100%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-40 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 40%;\n  box-sizing: border-box; }\n\n.flex-45 {\n  flex: 1 1 100%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-45 {\n  flex: 1 1 100%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-45 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 45%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-45 {\n  flex: 1 1 100%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-45 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 45%;\n  box-sizing: border-box; }\n\n.flex-50 {\n  flex: 1 1 100%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-50 {\n  flex: 1 1 100%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-50 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 50%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-50 {\n  flex: 1 1 100%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-50 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 50%;\n  box-sizing: border-box; }\n\n.flex-55 {\n  flex: 1 1 100%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-55 {\n  flex: 1 1 100%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-55 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 55%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-55 {\n  flex: 1 1 100%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-55 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 55%;\n  box-sizing: border-box; }\n\n.flex-60 {\n  flex: 1 1 100%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-60 {\n  flex: 1 1 100%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-60 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 60%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-60 {\n  flex: 1 1 100%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-60 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 60%;\n  box-sizing: border-box; }\n\n.flex-65 {\n  flex: 1 1 100%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-65 {\n  flex: 1 1 100%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-65 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 65%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-65 {\n  flex: 1 1 100%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-65 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 65%;\n  box-sizing: border-box; }\n\n.flex-70 {\n  flex: 1 1 100%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-70 {\n  flex: 1 1 100%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-70 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 70%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-70 {\n  flex: 1 1 100%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-70 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 70%;\n  box-sizing: border-box; }\n\n.flex-75 {\n  flex: 1 1 100%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-75 {\n  flex: 1 1 100%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-75 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 75%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-75 {\n  flex: 1 1 100%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-75 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 75%;\n  box-sizing: border-box; }\n\n.flex-80 {\n  flex: 1 1 100%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-80 {\n  flex: 1 1 100%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-80 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 80%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-80 {\n  flex: 1 1 100%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-80 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 80%;\n  box-sizing: border-box; }\n\n.flex-85 {\n  flex: 1 1 100%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-85 {\n  flex: 1 1 100%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-85 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 85%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-85 {\n  flex: 1 1 100%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-85 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 85%;\n  box-sizing: border-box; }\n\n.flex-90 {\n  flex: 1 1 100%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-90 {\n  flex: 1 1 100%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-90 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 90%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-90 {\n  flex: 1 1 100%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-90 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 90%;\n  box-sizing: border-box; }\n\n.flex-95 {\n  flex: 1 1 100%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-95 {\n  flex: 1 1 100%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-95 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 95%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-95 {\n  flex: 1 1 100%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-95 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 95%;\n  box-sizing: border-box; }\n\n.flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-100 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-33 {\n  flex: 1 1 33.33%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66 {\n  flex: 1 1 66.66%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-33 {\n  flex: 1 1 100%;\n  max-width: 33.33%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex-66 {\n  flex: 1 1 100%;\n  max-width: 66.66%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n.layout-row > .flex {\n  min-width: 0; }\n\n.layout-column > .flex-33 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 33.33%;\n  box-sizing: border-box; }\n\n.layout-column > .flex-66 {\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 66.66%;\n  box-sizing: border-box; }\n\n.layout-column > .flex {\n  min-height: 0; }\n\n.layout, .layout-column, .layout-row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.layout-column {\n  flex-direction: column; }\n\n.layout-row {\n  flex-direction: row; }\n\n.layout-padding-sm > *,\n.layout-padding > .flex-sm {\n  padding: 4px; }\n\n.layout-padding,\n.layout-padding-gt-sm,\n.layout-padding-md,\n.layout-padding > *,\n.layout-padding-gt-sm > *,\n.layout-padding-md > *,\n.layout-padding > .flex,\n.layout-padding > .flex-gt-sm,\n.layout-padding > .flex-md {\n  padding: 8px; }\n\n.layout-padding-gt-md > *,\n.layout-padding-lg > *,\n.layout-padding-gt-lg > *,\n.layout-padding > .flex-gt-md,\n.layout-padding > .flex-lg,\n.layout-padding > .flex-lg,\n.layout-padding > .flex-gt-lg {\n  padding: 16px; }\n\n.layout-margin-sm > *,\n.layout-margin > .flex-sm {\n  margin: 4px; }\n\n.layout-margin,\n.layout-margin-gt-sm,\n.layout-margin-md,\n.layout-margin > *,\n.layout-margin-gt-sm > *,\n.layout-margin-md > *,\n.layout-margin > .flex,\n.layout-margin > .flex-gt-sm,\n.layout-margin > .flex-md {\n  margin: 8px; }\n\n.layout-margin-gt-md > *,\n.layout-margin-lg > *,\n.layout-margin-gt-lg > *,\n.layout-margin > .flex-gt-md,\n.layout-margin > .flex-lg,\n.layout-margin > .flex-gt-lg {\n  margin: 16px; }\n\n.layout-wrap {\n  flex-wrap: wrap; }\n\n.layout-nowrap {\n  flex-wrap: nowrap; }\n\n.layout-fill {\n  margin: 0;\n  width: 100%;\n  min-height: 100%;\n  height: 100%; }\n\n/**\n * `hide-gt-sm show-gt-lg` should hide from 600px to 1200px\n * `show-md hide-gt-sm` should show from 0px to 960px and hide at >960px\n * `hide-gt-md show-gt-sm` should show everywhere (show overrides hide)`\n *\n *  hide means hide everywhere\n *  Sizes:\n *         $layout-breakpoint-xs:     600px !default;\n *         $layout-breakpoint-sm:     960px !default;\n *         $layout-breakpoint-md:     1280px !default;\n *         $layout-breakpoint-lg:     1920px !default;\n */\n@media (max-width: 599px) {\n  .hide-xs:not(.show-xs):not(.show), .hide:not(.show-xs):not(.show) {\n    display: none; }\n  .flex-order-xs--20 {\n    order: -20; }\n  .flex-order-xs--19 {\n    order: -19; }\n  .flex-order-xs--18 {\n    order: -18; }\n  .flex-order-xs--17 {\n    order: -17; }\n  .flex-order-xs--16 {\n    order: -16; }\n  .flex-order-xs--15 {\n    order: -15; }\n  .flex-order-xs--14 {\n    order: -14; }\n  .flex-order-xs--13 {\n    order: -13; }\n  .flex-order-xs--12 {\n    order: -12; }\n  .flex-order-xs--11 {\n    order: -11; }\n  .flex-order-xs--10 {\n    order: -10; }\n  .flex-order-xs--9 {\n    order: -9; }\n  .flex-order-xs--8 {\n    order: -8; }\n  .flex-order-xs--7 {\n    order: -7; }\n  .flex-order-xs--6 {\n    order: -6; }\n  .flex-order-xs--5 {\n    order: -5; }\n  .flex-order-xs--4 {\n    order: -4; }\n  .flex-order-xs--3 {\n    order: -3; }\n  .flex-order-xs--2 {\n    order: -2; }\n  .flex-order-xs--1 {\n    order: -1; }\n  .flex-order-xs-0 {\n    order: 0; }\n  .flex-order-xs-1 {\n    order: 1; }\n  .flex-order-xs-2 {\n    order: 2; }\n  .flex-order-xs-3 {\n    order: 3; }\n  .flex-order-xs-4 {\n    order: 4; }\n  .flex-order-xs-5 {\n    order: 5; }\n  .flex-order-xs-6 {\n    order: 6; }\n  .flex-order-xs-7 {\n    order: 7; }\n  .flex-order-xs-8 {\n    order: 8; }\n  .flex-order-xs-9 {\n    order: 9; }\n  .flex-order-xs-10 {\n    order: 10; }\n  .flex-order-xs-11 {\n    order: 11; }\n  .flex-order-xs-12 {\n    order: 12; }\n  .flex-order-xs-13 {\n    order: 13; }\n  .flex-order-xs-14 {\n    order: 14; }\n  .flex-order-xs-15 {\n    order: 15; }\n  .flex-order-xs-16 {\n    order: 16; }\n  .flex-order-xs-17 {\n    order: 17; }\n  .flex-order-xs-18 {\n    order: 18; }\n  .flex-order-xs-19 {\n    order: 19; }\n  .flex-order-xs-20 {\n    order: 20; }\n  .offset-xs-0, .flex-offset-xs-0 {\n    margin-left: 0; }\n    [dir=rtl] .offset-xs-0, [dir=rtl] .flex-offset-xs-0 {\n      margin-left: auto;\n      margin-right: 0; }\n  .offset-xs-5, .flex-offset-xs-5 {\n    margin-left: 5%; }\n    [dir=rtl] .offset-xs-5, [dir=rtl] .flex-offset-xs-5 {\n      margin-left: auto;\n      margin-right: 5%; }\n  .offset-xs-10, .flex-offset-xs-10 {\n    margin-left: 10%; }\n    [dir=rtl] .offset-xs-10, [dir=rtl] .flex-offset-xs-10 {\n      margin-left: auto;\n      margin-right: 10%; }\n  .offset-xs-15, .flex-offset-xs-15 {\n    margin-left: 15%; }\n    [dir=rtl] .offset-xs-15, [dir=rtl] .flex-offset-xs-15 {\n      margin-left: auto;\n      margin-right: 15%; }\n  .offset-xs-20, .flex-offset-xs-20 {\n    margin-left: 20%; }\n    [dir=rtl] .offset-xs-20, [dir=rtl] .flex-offset-xs-20 {\n      margin-left: auto;\n      margin-right: 20%; }\n  .offset-xs-25, .flex-offset-xs-25 {\n    margin-left: 25%; }\n    [dir=rtl] .offset-xs-25, [dir=rtl] .flex-offset-xs-25 {\n      margin-left: auto;\n      margin-right: 25%; }\n  .offset-xs-30, .flex-offset-xs-30 {\n    margin-left: 30%; }\n    [dir=rtl] .offset-xs-30, [dir=rtl] .flex-offset-xs-30 {\n      margin-left: auto;\n      margin-right: 30%; }\n  .offset-xs-35, .flex-offset-xs-35 {\n    margin-left: 35%; }\n    [dir=rtl] .offset-xs-35, [dir=rtl] .flex-offset-xs-35 {\n      margin-left: auto;\n      margin-right: 35%; }\n  .offset-xs-40, .flex-offset-xs-40 {\n    margin-left: 40%; }\n    [dir=rtl] .offset-xs-40, [dir=rtl] .flex-offset-xs-40 {\n      margin-left: auto;\n      margin-right: 40%; }\n  .offset-xs-45, .flex-offset-xs-45 {\n    margin-left: 45%; }\n    [dir=rtl] .offset-xs-45, [dir=rtl] .flex-offset-xs-45 {\n      margin-left: auto;\n      margin-right: 45%; }\n  .offset-xs-50, .flex-offset-xs-50 {\n    margin-left: 50%; }\n    [dir=rtl] .offset-xs-50, [dir=rtl] .flex-offset-xs-50 {\n      margin-left: auto;\n      margin-right: 50%; }\n  .offset-xs-55, .flex-offset-xs-55 {\n    margin-left: 55%; }\n    [dir=rtl] .offset-xs-55, [dir=rtl] .flex-offset-xs-55 {\n      margin-left: auto;\n      margin-right: 55%; }\n  .offset-xs-60, .flex-offset-xs-60 {\n    margin-left: 60%; }\n    [dir=rtl] .offset-xs-60, [dir=rtl] .flex-offset-xs-60 {\n      margin-left: auto;\n      margin-right: 60%; }\n  .offset-xs-65, .flex-offset-xs-65 {\n    margin-left: 65%; }\n    [dir=rtl] .offset-xs-65, [dir=rtl] .flex-offset-xs-65 {\n      margin-left: auto;\n      margin-right: 65%; }\n  .offset-xs-70, .flex-offset-xs-70 {\n    margin-left: 70%; }\n    [dir=rtl] .offset-xs-70, [dir=rtl] .flex-offset-xs-70 {\n      margin-left: auto;\n      margin-right: 70%; }\n  .offset-xs-75, .flex-offset-xs-75 {\n    margin-left: 75%; }\n    [dir=rtl] .offset-xs-75, [dir=rtl] .flex-offset-xs-75 {\n      margin-left: auto;\n      margin-right: 75%; }\n  .offset-xs-80, .flex-offset-xs-80 {\n    margin-left: 80%; }\n    [dir=rtl] .offset-xs-80, [dir=rtl] .flex-offset-xs-80 {\n      margin-left: auto;\n      margin-right: 80%; }\n  .offset-xs-85, .flex-offset-xs-85 {\n    margin-left: 85%; }\n    [dir=rtl] .offset-xs-85, [dir=rtl] .flex-offset-xs-85 {\n      margin-left: auto;\n      margin-right: 85%; }\n  .offset-xs-90, .flex-offset-xs-90 {\n    margin-left: 90%; }\n    [dir=rtl] .offset-xs-90, [dir=rtl] .flex-offset-xs-90 {\n      margin-left: auto;\n      margin-right: 90%; }\n  .offset-xs-95, .flex-offset-xs-95 {\n    margin-left: 95%; }\n    [dir=rtl] .offset-xs-95, [dir=rtl] .flex-offset-xs-95 {\n      margin-left: auto;\n      margin-right: 95%; }\n  .offset-xs-33, .flex-offset-xs-33 {\n    margin-left: calc(100% / 3); }\n  .offset-xs-66, .flex-offset-xs-66 {\n    margin-left: calc(200% / 3); }\n    [dir=rtl] .offset-xs-66, [dir=rtl] .flex-offset-xs-66 {\n      margin-left: auto;\n      margin-right: calc(200% / 3); }\n  .layout-align-xs,\n  .layout-align-xs-start-stretch {\n    justify-content: flex-start;\n    align-content: stretch;\n    align-items: stretch; }\n  .layout-align-xs-start,\n  .layout-align-xs-start-start,\n  .layout-align-xs-start-center,\n  .layout-align-xs-start-end,\n  .layout-align-xs-start-stretch {\n    justify-content: flex-start; }\n  .layout-align-xs-center,\n  .layout-align-xs-center-start,\n  .layout-align-xs-center-center,\n  .layout-align-xs-center-end,\n  .layout-align-xs-center-stretch {\n    justify-content: center; }\n  .layout-align-xs-end,\n  .layout-align-xs-end-start,\n  .layout-align-xs-end-center,\n  .layout-align-xs-end-end,\n  .layout-align-xs-end-stretch {\n    justify-content: flex-end; }\n  .layout-align-xs-space-around,\n  .layout-align-xs-space-around-center,\n  .layout-align-xs-space-around-start,\n  .layout-align-xs-space-around-end,\n  .layout-align-xs-space-around-stretch {\n    justify-content: space-around; }\n  .layout-align-xs-space-between,\n  .layout-align-xs-space-between-center,\n  .layout-align-xs-space-between-start,\n  .layout-align-xs-space-between-end,\n  .layout-align-xs-space-between-stretch {\n    justify-content: space-between; }\n  .layout-align-xs-start-start,\n  .layout-align-xs-center-start,\n  .layout-align-xs-end-start,\n  .layout-align-xs-space-between-start,\n  .layout-align-xs-space-around-start {\n    align-items: flex-start;\n    align-content: flex-start; }\n  .layout-align-xs-start-center,\n  .layout-align-xs-center-center,\n  .layout-align-xs-end-center,\n  .layout-align-xs-space-between-center,\n  .layout-align-xs-space-around-center {\n    align-items: center;\n    align-content: center;\n    max-width: 100%; }\n  .layout-align-xs-start-center > *,\n  .layout-align-xs-center-center > *,\n  .layout-align-xs-end-center > *,\n  .layout-align-xs-space-between-center > *,\n  .layout-align-xs-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box; }\n  .layout-align-xs-start-end,\n  .layout-align-xs-center-end,\n  .layout-align-xs-end-end,\n  .layout-align-xs-space-between-end,\n  .layout-align-xs-space-around-end {\n    align-items: flex-end;\n    align-content: flex-end; }\n  .layout-align-xs-start-stretch,\n  .layout-align-xs-center-stretch,\n  .layout-align-xs-end-stretch,\n  .layout-align-xs-space-between-stretch,\n  .layout-align-xs-space-around-stretch {\n    align-items: stretch;\n    align-content: stretch; }\n  .flex-xs {\n    flex: 1;\n    box-sizing: border-box; }\n  .flex-xs-grow {\n    flex: 1 1 100%;\n    box-sizing: border-box; }\n  .flex-xs-initial {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-xs-auto {\n    flex: 1 1 auto;\n    box-sizing: border-box; }\n  .flex-xs-none {\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n  .flex-xs-noshrink {\n    flex: 1 0 auto;\n    box-sizing: border-box; }\n  .flex-xs-nogrow {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-xs-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-column > .flex-xs-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-xs-column > .flex-xs-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n    min-height: 0; }\n  .flex-xs-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .flex-xs-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .flex-xs-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .flex-xs-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .flex-xs-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .flex-xs-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .flex-xs-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .flex-xs-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .flex-xs-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .flex-xs-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .flex-xs-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .flex-xs-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .flex-xs-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .flex-xs-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .flex-xs-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .flex-xs-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .flex-xs-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .flex-xs-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .flex-xs-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .flex-xs-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-33 {\n    flex: 1 1 33.33%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xs-66 {\n    flex: 1 1 66.66%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-33 {\n    flex: 1 1 33.33%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xs-66 {\n    flex: 1 1 66.66%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-33 {\n    flex: 1 1 100%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex-xs-66 {\n    flex: 1 1 100%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xs-row > .flex {\n    min-width: 0; }\n  .layout-xs-column > .flex-xs-33 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex-xs-66 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-xs-column > .flex {\n    min-height: 0; }\n  .layout-xs, .layout-xs-column, .layout-xs-row {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .layout-xs-column {\n    flex-direction: column; }\n  .layout-xs-row {\n    flex-direction: row; } }\n\n@media (min-width: 600px) {\n  .flex-order-gt-xs--20 {\n    order: -20; }\n  .flex-order-gt-xs--19 {\n    order: -19; }\n  .flex-order-gt-xs--18 {\n    order: -18; }\n  .flex-order-gt-xs--17 {\n    order: -17; }\n  .flex-order-gt-xs--16 {\n    order: -16; }\n  .flex-order-gt-xs--15 {\n    order: -15; }\n  .flex-order-gt-xs--14 {\n    order: -14; }\n  .flex-order-gt-xs--13 {\n    order: -13; }\n  .flex-order-gt-xs--12 {\n    order: -12; }\n  .flex-order-gt-xs--11 {\n    order: -11; }\n  .flex-order-gt-xs--10 {\n    order: -10; }\n  .flex-order-gt-xs--9 {\n    order: -9; }\n  .flex-order-gt-xs--8 {\n    order: -8; }\n  .flex-order-gt-xs--7 {\n    order: -7; }\n  .flex-order-gt-xs--6 {\n    order: -6; }\n  .flex-order-gt-xs--5 {\n    order: -5; }\n  .flex-order-gt-xs--4 {\n    order: -4; }\n  .flex-order-gt-xs--3 {\n    order: -3; }\n  .flex-order-gt-xs--2 {\n    order: -2; }\n  .flex-order-gt-xs--1 {\n    order: -1; }\n  .flex-order-gt-xs-0 {\n    order: 0; }\n  .flex-order-gt-xs-1 {\n    order: 1; }\n  .flex-order-gt-xs-2 {\n    order: 2; }\n  .flex-order-gt-xs-3 {\n    order: 3; }\n  .flex-order-gt-xs-4 {\n    order: 4; }\n  .flex-order-gt-xs-5 {\n    order: 5; }\n  .flex-order-gt-xs-6 {\n    order: 6; }\n  .flex-order-gt-xs-7 {\n    order: 7; }\n  .flex-order-gt-xs-8 {\n    order: 8; }\n  .flex-order-gt-xs-9 {\n    order: 9; }\n  .flex-order-gt-xs-10 {\n    order: 10; }\n  .flex-order-gt-xs-11 {\n    order: 11; }\n  .flex-order-gt-xs-12 {\n    order: 12; }\n  .flex-order-gt-xs-13 {\n    order: 13; }\n  .flex-order-gt-xs-14 {\n    order: 14; }\n  .flex-order-gt-xs-15 {\n    order: 15; }\n  .flex-order-gt-xs-16 {\n    order: 16; }\n  .flex-order-gt-xs-17 {\n    order: 17; }\n  .flex-order-gt-xs-18 {\n    order: 18; }\n  .flex-order-gt-xs-19 {\n    order: 19; }\n  .flex-order-gt-xs-20 {\n    order: 20; }\n  .offset-gt-xs-0, .flex-offset-gt-xs-0 {\n    margin-left: 0; }\n    [dir=rtl] .offset-gt-xs-0, [dir=rtl] .flex-offset-gt-xs-0 {\n      margin-left: auto;\n      margin-right: 0; }\n  .offset-gt-xs-5, .flex-offset-gt-xs-5 {\n    margin-left: 5%; }\n    [dir=rtl] .offset-gt-xs-5, [dir=rtl] .flex-offset-gt-xs-5 {\n      margin-left: auto;\n      margin-right: 5%; }\n  .offset-gt-xs-10, .flex-offset-gt-xs-10 {\n    margin-left: 10%; }\n    [dir=rtl] .offset-gt-xs-10, [dir=rtl] .flex-offset-gt-xs-10 {\n      margin-left: auto;\n      margin-right: 10%; }\n  .offset-gt-xs-15, .flex-offset-gt-xs-15 {\n    margin-left: 15%; }\n    [dir=rtl] .offset-gt-xs-15, [dir=rtl] .flex-offset-gt-xs-15 {\n      margin-left: auto;\n      margin-right: 15%; }\n  .offset-gt-xs-20, .flex-offset-gt-xs-20 {\n    margin-left: 20%; }\n    [dir=rtl] .offset-gt-xs-20, [dir=rtl] .flex-offset-gt-xs-20 {\n      margin-left: auto;\n      margin-right: 20%; }\n  .offset-gt-xs-25, .flex-offset-gt-xs-25 {\n    margin-left: 25%; }\n    [dir=rtl] .offset-gt-xs-25, [dir=rtl] .flex-offset-gt-xs-25 {\n      margin-left: auto;\n      margin-right: 25%; }\n  .offset-gt-xs-30, .flex-offset-gt-xs-30 {\n    margin-left: 30%; }\n    [dir=rtl] .offset-gt-xs-30, [dir=rtl] .flex-offset-gt-xs-30 {\n      margin-left: auto;\n      margin-right: 30%; }\n  .offset-gt-xs-35, .flex-offset-gt-xs-35 {\n    margin-left: 35%; }\n    [dir=rtl] .offset-gt-xs-35, [dir=rtl] .flex-offset-gt-xs-35 {\n      margin-left: auto;\n      margin-right: 35%; }\n  .offset-gt-xs-40, .flex-offset-gt-xs-40 {\n    margin-left: 40%; }\n    [dir=rtl] .offset-gt-xs-40, [dir=rtl] .flex-offset-gt-xs-40 {\n      margin-left: auto;\n      margin-right: 40%; }\n  .offset-gt-xs-45, .flex-offset-gt-xs-45 {\n    margin-left: 45%; }\n    [dir=rtl] .offset-gt-xs-45, [dir=rtl] .flex-offset-gt-xs-45 {\n      margin-left: auto;\n      margin-right: 45%; }\n  .offset-gt-xs-50, .flex-offset-gt-xs-50 {\n    margin-left: 50%; }\n    [dir=rtl] .offset-gt-xs-50, [dir=rtl] .flex-offset-gt-xs-50 {\n      margin-left: auto;\n      margin-right: 50%; }\n  .offset-gt-xs-55, .flex-offset-gt-xs-55 {\n    margin-left: 55%; }\n    [dir=rtl] .offset-gt-xs-55, [dir=rtl] .flex-offset-gt-xs-55 {\n      margin-left: auto;\n      margin-right: 55%; }\n  .offset-gt-xs-60, .flex-offset-gt-xs-60 {\n    margin-left: 60%; }\n    [dir=rtl] .offset-gt-xs-60, [dir=rtl] .flex-offset-gt-xs-60 {\n      margin-left: auto;\n      margin-right: 60%; }\n  .offset-gt-xs-65, .flex-offset-gt-xs-65 {\n    margin-left: 65%; }\n    [dir=rtl] .offset-gt-xs-65, [dir=rtl] .flex-offset-gt-xs-65 {\n      margin-left: auto;\n      margin-right: 65%; }\n  .offset-gt-xs-70, .flex-offset-gt-xs-70 {\n    margin-left: 70%; }\n    [dir=rtl] .offset-gt-xs-70, [dir=rtl] .flex-offset-gt-xs-70 {\n      margin-left: auto;\n      margin-right: 70%; }\n  .offset-gt-xs-75, .flex-offset-gt-xs-75 {\n    margin-left: 75%; }\n    [dir=rtl] .offset-gt-xs-75, [dir=rtl] .flex-offset-gt-xs-75 {\n      margin-left: auto;\n      margin-right: 75%; }\n  .offset-gt-xs-80, .flex-offset-gt-xs-80 {\n    margin-left: 80%; }\n    [dir=rtl] .offset-gt-xs-80, [dir=rtl] .flex-offset-gt-xs-80 {\n      margin-left: auto;\n      margin-right: 80%; }\n  .offset-gt-xs-85, .flex-offset-gt-xs-85 {\n    margin-left: 85%; }\n    [dir=rtl] .offset-gt-xs-85, [dir=rtl] .flex-offset-gt-xs-85 {\n      margin-left: auto;\n      margin-right: 85%; }\n  .offset-gt-xs-90, .flex-offset-gt-xs-90 {\n    margin-left: 90%; }\n    [dir=rtl] .offset-gt-xs-90, [dir=rtl] .flex-offset-gt-xs-90 {\n      margin-left: auto;\n      margin-right: 90%; }\n  .offset-gt-xs-95, .flex-offset-gt-xs-95 {\n    margin-left: 95%; }\n    [dir=rtl] .offset-gt-xs-95, [dir=rtl] .flex-offset-gt-xs-95 {\n      margin-left: auto;\n      margin-right: 95%; }\n  .offset-gt-xs-33, .flex-offset-gt-xs-33 {\n    margin-left: calc(100% / 3); }\n  .offset-gt-xs-66, .flex-offset-gt-xs-66 {\n    margin-left: calc(200% / 3); }\n    [dir=rtl] .offset-gt-xs-66, [dir=rtl] .flex-offset-gt-xs-66 {\n      margin-left: auto;\n      margin-right: calc(200% / 3); }\n  .layout-align-gt-xs,\n  .layout-align-gt-xs-start-stretch {\n    justify-content: flex-start;\n    align-content: stretch;\n    align-items: stretch; }\n  .layout-align-gt-xs-start,\n  .layout-align-gt-xs-start-start,\n  .layout-align-gt-xs-start-center,\n  .layout-align-gt-xs-start-end,\n  .layout-align-gt-xs-start-stretch {\n    justify-content: flex-start; }\n  .layout-align-gt-xs-center,\n  .layout-align-gt-xs-center-start,\n  .layout-align-gt-xs-center-center,\n  .layout-align-gt-xs-center-end,\n  .layout-align-gt-xs-center-stretch {\n    justify-content: center; }\n  .layout-align-gt-xs-end,\n  .layout-align-gt-xs-end-start,\n  .layout-align-gt-xs-end-center,\n  .layout-align-gt-xs-end-end,\n  .layout-align-gt-xs-end-stretch {\n    justify-content: flex-end; }\n  .layout-align-gt-xs-space-around,\n  .layout-align-gt-xs-space-around-center,\n  .layout-align-gt-xs-space-around-start,\n  .layout-align-gt-xs-space-around-end,\n  .layout-align-gt-xs-space-around-stretch {\n    justify-content: space-around; }\n  .layout-align-gt-xs-space-between,\n  .layout-align-gt-xs-space-between-center,\n  .layout-align-gt-xs-space-between-start,\n  .layout-align-gt-xs-space-between-end,\n  .layout-align-gt-xs-space-between-stretch {\n    justify-content: space-between; }\n  .layout-align-gt-xs-start-start,\n  .layout-align-gt-xs-center-start,\n  .layout-align-gt-xs-end-start,\n  .layout-align-gt-xs-space-between-start,\n  .layout-align-gt-xs-space-around-start {\n    align-items: flex-start;\n    align-content: flex-start; }\n  .layout-align-gt-xs-start-center,\n  .layout-align-gt-xs-center-center,\n  .layout-align-gt-xs-end-center,\n  .layout-align-gt-xs-space-between-center,\n  .layout-align-gt-xs-space-around-center {\n    align-items: center;\n    align-content: center;\n    max-width: 100%; }\n  .layout-align-gt-xs-start-center > *,\n  .layout-align-gt-xs-center-center > *,\n  .layout-align-gt-xs-end-center > *,\n  .layout-align-gt-xs-space-between-center > *,\n  .layout-align-gt-xs-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box; }\n  .layout-align-gt-xs-start-end,\n  .layout-align-gt-xs-center-end,\n  .layout-align-gt-xs-end-end,\n  .layout-align-gt-xs-space-between-end,\n  .layout-align-gt-xs-space-around-end {\n    align-items: flex-end;\n    align-content: flex-end; }\n  .layout-align-gt-xs-start-stretch,\n  .layout-align-gt-xs-center-stretch,\n  .layout-align-gt-xs-end-stretch,\n  .layout-align-gt-xs-space-between-stretch,\n  .layout-align-gt-xs-space-around-stretch {\n    align-items: stretch;\n    align-content: stretch; }\n  .flex-gt-xs {\n    flex: 1;\n    box-sizing: border-box; }\n  .flex-gt-xs-grow {\n    flex: 1 1 100%;\n    box-sizing: border-box; }\n  .flex-gt-xs-initial {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-xs-auto {\n    flex: 1 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-xs-none {\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n  .flex-gt-xs-noshrink {\n    flex: 1 0 auto;\n    box-sizing: border-box; }\n  .flex-gt-xs-nogrow {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-xs-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-column > .flex-gt-xs-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-gt-xs-column > .flex-gt-xs-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n    min-height: 0; }\n  .flex-gt-xs-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .flex-gt-xs-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .flex-gt-xs-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .flex-gt-xs-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .flex-gt-xs-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .flex-gt-xs-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .flex-gt-xs-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .flex-gt-xs-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .flex-gt-xs-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .flex-gt-xs-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .flex-gt-xs-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .flex-gt-xs-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .flex-gt-xs-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .flex-gt-xs-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .flex-gt-xs-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .flex-gt-xs-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .flex-gt-xs-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .flex-gt-xs-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .flex-gt-xs-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .flex-gt-xs-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-33 {\n    flex: 1 1 33.33%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-xs-66 {\n    flex: 1 1 66.66%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-33 {\n    flex: 1 1 33.33%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-xs-66 {\n    flex: 1 1 66.66%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-33 {\n    flex: 1 1 100%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex-gt-xs-66 {\n    flex: 1 1 100%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-xs-row > .flex {\n    min-width: 0; }\n  .layout-gt-xs-column > .flex-gt-xs-33 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex-gt-xs-66 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-gt-xs-column > .flex {\n    min-height: 0; }\n  .layout-gt-xs, .layout-gt-xs-column, .layout-gt-xs-row {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .layout-gt-xs-column {\n    flex-direction: column; }\n  .layout-gt-xs-row {\n    flex-direction: row; } }\n\n@media (min-width: 600px) and (max-width: 959px) {\n  .hide:not(.show-gt-xs):not(.show-sm):not(.show), .hide-gt-xs:not(.show-gt-xs):not(.show-sm):not(.show) {\n    display: none; }\n  .hide-sm:not(.show-gt-xs):not(.show-sm):not(.show) {\n    display: none; }\n  .flex-order-sm--20 {\n    order: -20; }\n  .flex-order-sm--19 {\n    order: -19; }\n  .flex-order-sm--18 {\n    order: -18; }\n  .flex-order-sm--17 {\n    order: -17; }\n  .flex-order-sm--16 {\n    order: -16; }\n  .flex-order-sm--15 {\n    order: -15; }\n  .flex-order-sm--14 {\n    order: -14; }\n  .flex-order-sm--13 {\n    order: -13; }\n  .flex-order-sm--12 {\n    order: -12; }\n  .flex-order-sm--11 {\n    order: -11; }\n  .flex-order-sm--10 {\n    order: -10; }\n  .flex-order-sm--9 {\n    order: -9; }\n  .flex-order-sm--8 {\n    order: -8; }\n  .flex-order-sm--7 {\n    order: -7; }\n  .flex-order-sm--6 {\n    order: -6; }\n  .flex-order-sm--5 {\n    order: -5; }\n  .flex-order-sm--4 {\n    order: -4; }\n  .flex-order-sm--3 {\n    order: -3; }\n  .flex-order-sm--2 {\n    order: -2; }\n  .flex-order-sm--1 {\n    order: -1; }\n  .flex-order-sm-0 {\n    order: 0; }\n  .flex-order-sm-1 {\n    order: 1; }\n  .flex-order-sm-2 {\n    order: 2; }\n  .flex-order-sm-3 {\n    order: 3; }\n  .flex-order-sm-4 {\n    order: 4; }\n  .flex-order-sm-5 {\n    order: 5; }\n  .flex-order-sm-6 {\n    order: 6; }\n  .flex-order-sm-7 {\n    order: 7; }\n  .flex-order-sm-8 {\n    order: 8; }\n  .flex-order-sm-9 {\n    order: 9; }\n  .flex-order-sm-10 {\n    order: 10; }\n  .flex-order-sm-11 {\n    order: 11; }\n  .flex-order-sm-12 {\n    order: 12; }\n  .flex-order-sm-13 {\n    order: 13; }\n  .flex-order-sm-14 {\n    order: 14; }\n  .flex-order-sm-15 {\n    order: 15; }\n  .flex-order-sm-16 {\n    order: 16; }\n  .flex-order-sm-17 {\n    order: 17; }\n  .flex-order-sm-18 {\n    order: 18; }\n  .flex-order-sm-19 {\n    order: 19; }\n  .flex-order-sm-20 {\n    order: 20; }\n  .offset-sm-0, .flex-offset-sm-0 {\n    margin-left: 0; }\n    [dir=rtl] .offset-sm-0, [dir=rtl] .flex-offset-sm-0 {\n      margin-left: auto;\n      margin-right: 0; }\n  .offset-sm-5, .flex-offset-sm-5 {\n    margin-left: 5%; }\n    [dir=rtl] .offset-sm-5, [dir=rtl] .flex-offset-sm-5 {\n      margin-left: auto;\n      margin-right: 5%; }\n  .offset-sm-10, .flex-offset-sm-10 {\n    margin-left: 10%; }\n    [dir=rtl] .offset-sm-10, [dir=rtl] .flex-offset-sm-10 {\n      margin-left: auto;\n      margin-right: 10%; }\n  .offset-sm-15, .flex-offset-sm-15 {\n    margin-left: 15%; }\n    [dir=rtl] .offset-sm-15, [dir=rtl] .flex-offset-sm-15 {\n      margin-left: auto;\n      margin-right: 15%; }\n  .offset-sm-20, .flex-offset-sm-20 {\n    margin-left: 20%; }\n    [dir=rtl] .offset-sm-20, [dir=rtl] .flex-offset-sm-20 {\n      margin-left: auto;\n      margin-right: 20%; }\n  .offset-sm-25, .flex-offset-sm-25 {\n    margin-left: 25%; }\n    [dir=rtl] .offset-sm-25, [dir=rtl] .flex-offset-sm-25 {\n      margin-left: auto;\n      margin-right: 25%; }\n  .offset-sm-30, .flex-offset-sm-30 {\n    margin-left: 30%; }\n    [dir=rtl] .offset-sm-30, [dir=rtl] .flex-offset-sm-30 {\n      margin-left: auto;\n      margin-right: 30%; }\n  .offset-sm-35, .flex-offset-sm-35 {\n    margin-left: 35%; }\n    [dir=rtl] .offset-sm-35, [dir=rtl] .flex-offset-sm-35 {\n      margin-left: auto;\n      margin-right: 35%; }\n  .offset-sm-40, .flex-offset-sm-40 {\n    margin-left: 40%; }\n    [dir=rtl] .offset-sm-40, [dir=rtl] .flex-offset-sm-40 {\n      margin-left: auto;\n      margin-right: 40%; }\n  .offset-sm-45, .flex-offset-sm-45 {\n    margin-left: 45%; }\n    [dir=rtl] .offset-sm-45, [dir=rtl] .flex-offset-sm-45 {\n      margin-left: auto;\n      margin-right: 45%; }\n  .offset-sm-50, .flex-offset-sm-50 {\n    margin-left: 50%; }\n    [dir=rtl] .offset-sm-50, [dir=rtl] .flex-offset-sm-50 {\n      margin-left: auto;\n      margin-right: 50%; }\n  .offset-sm-55, .flex-offset-sm-55 {\n    margin-left: 55%; }\n    [dir=rtl] .offset-sm-55, [dir=rtl] .flex-offset-sm-55 {\n      margin-left: auto;\n      margin-right: 55%; }\n  .offset-sm-60, .flex-offset-sm-60 {\n    margin-left: 60%; }\n    [dir=rtl] .offset-sm-60, [dir=rtl] .flex-offset-sm-60 {\n      margin-left: auto;\n      margin-right: 60%; }\n  .offset-sm-65, .flex-offset-sm-65 {\n    margin-left: 65%; }\n    [dir=rtl] .offset-sm-65, [dir=rtl] .flex-offset-sm-65 {\n      margin-left: auto;\n      margin-right: 65%; }\n  .offset-sm-70, .flex-offset-sm-70 {\n    margin-left: 70%; }\n    [dir=rtl] .offset-sm-70, [dir=rtl] .flex-offset-sm-70 {\n      margin-left: auto;\n      margin-right: 70%; }\n  .offset-sm-75, .flex-offset-sm-75 {\n    margin-left: 75%; }\n    [dir=rtl] .offset-sm-75, [dir=rtl] .flex-offset-sm-75 {\n      margin-left: auto;\n      margin-right: 75%; }\n  .offset-sm-80, .flex-offset-sm-80 {\n    margin-left: 80%; }\n    [dir=rtl] .offset-sm-80, [dir=rtl] .flex-offset-sm-80 {\n      margin-left: auto;\n      margin-right: 80%; }\n  .offset-sm-85, .flex-offset-sm-85 {\n    margin-left: 85%; }\n    [dir=rtl] .offset-sm-85, [dir=rtl] .flex-offset-sm-85 {\n      margin-left: auto;\n      margin-right: 85%; }\n  .offset-sm-90, .flex-offset-sm-90 {\n    margin-left: 90%; }\n    [dir=rtl] .offset-sm-90, [dir=rtl] .flex-offset-sm-90 {\n      margin-left: auto;\n      margin-right: 90%; }\n  .offset-sm-95, .flex-offset-sm-95 {\n    margin-left: 95%; }\n    [dir=rtl] .offset-sm-95, [dir=rtl] .flex-offset-sm-95 {\n      margin-left: auto;\n      margin-right: 95%; }\n  .offset-sm-33, .flex-offset-sm-33 {\n    margin-left: calc(100% / 3); }\n  .offset-sm-66, .flex-offset-sm-66 {\n    margin-left: calc(200% / 3); }\n    [dir=rtl] .offset-sm-66, [dir=rtl] .flex-offset-sm-66 {\n      margin-left: auto;\n      margin-right: calc(200% / 3); }\n  .layout-align-sm,\n  .layout-align-sm-start-stretch {\n    justify-content: flex-start;\n    align-content: stretch;\n    align-items: stretch; }\n  .layout-align-sm-start,\n  .layout-align-sm-start-start,\n  .layout-align-sm-start-center,\n  .layout-align-sm-start-end,\n  .layout-align-sm-start-stretch {\n    justify-content: flex-start; }\n  .layout-align-sm-center,\n  .layout-align-sm-center-start,\n  .layout-align-sm-center-center,\n  .layout-align-sm-center-end,\n  .layout-align-sm-center-stretch {\n    justify-content: center; }\n  .layout-align-sm-end,\n  .layout-align-sm-end-start,\n  .layout-align-sm-end-center,\n  .layout-align-sm-end-end,\n  .layout-align-sm-end-stretch {\n    justify-content: flex-end; }\n  .layout-align-sm-space-around,\n  .layout-align-sm-space-around-center,\n  .layout-align-sm-space-around-start,\n  .layout-align-sm-space-around-end,\n  .layout-align-sm-space-around-stretch {\n    justify-content: space-around; }\n  .layout-align-sm-space-between,\n  .layout-align-sm-space-between-center,\n  .layout-align-sm-space-between-start,\n  .layout-align-sm-space-between-end,\n  .layout-align-sm-space-between-stretch {\n    justify-content: space-between; }\n  .layout-align-sm-start-start,\n  .layout-align-sm-center-start,\n  .layout-align-sm-end-start,\n  .layout-align-sm-space-between-start,\n  .layout-align-sm-space-around-start {\n    align-items: flex-start;\n    align-content: flex-start; }\n  .layout-align-sm-start-center,\n  .layout-align-sm-center-center,\n  .layout-align-sm-end-center,\n  .layout-align-sm-space-between-center,\n  .layout-align-sm-space-around-center {\n    align-items: center;\n    align-content: center;\n    max-width: 100%; }\n  .layout-align-sm-start-center > *,\n  .layout-align-sm-center-center > *,\n  .layout-align-sm-end-center > *,\n  .layout-align-sm-space-between-center > *,\n  .layout-align-sm-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box; }\n  .layout-align-sm-start-end,\n  .layout-align-sm-center-end,\n  .layout-align-sm-end-end,\n  .layout-align-sm-space-between-end,\n  .layout-align-sm-space-around-end {\n    align-items: flex-end;\n    align-content: flex-end; }\n  .layout-align-sm-start-stretch,\n  .layout-align-sm-center-stretch,\n  .layout-align-sm-end-stretch,\n  .layout-align-sm-space-between-stretch,\n  .layout-align-sm-space-around-stretch {\n    align-items: stretch;\n    align-content: stretch; }\n  .flex-sm {\n    flex: 1;\n    box-sizing: border-box; }\n  .flex-sm-grow {\n    flex: 1 1 100%;\n    box-sizing: border-box; }\n  .flex-sm-initial {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-sm-auto {\n    flex: 1 1 auto;\n    box-sizing: border-box; }\n  .flex-sm-none {\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n  .flex-sm-noshrink {\n    flex: 1 0 auto;\n    box-sizing: border-box; }\n  .flex-sm-nogrow {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-sm-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-column > .flex-sm-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-sm-column > .flex-sm-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n    min-height: 0; }\n  .flex-sm-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .flex-sm-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .flex-sm-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .flex-sm-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .flex-sm-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .flex-sm-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .flex-sm-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .flex-sm-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .flex-sm-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .flex-sm-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .flex-sm-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .flex-sm-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .flex-sm-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .flex-sm-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .flex-sm-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .flex-sm-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .flex-sm-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .flex-sm-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .flex-sm-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .flex-sm-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-33 {\n    flex: 1 1 33.33%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-sm-66 {\n    flex: 1 1 66.66%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-33 {\n    flex: 1 1 33.33%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-column > .flex-sm-66 {\n    flex: 1 1 66.66%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-33 {\n    flex: 1 1 100%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex-sm-66 {\n    flex: 1 1 100%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-sm-row > .flex {\n    min-width: 0; }\n  .layout-sm-column > .flex-sm-33 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex-sm-66 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-sm-column > .flex {\n    min-height: 0; }\n  .layout-sm, .layout-sm-column, .layout-sm-row {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .layout-sm-column {\n    flex-direction: column; }\n  .layout-sm-row {\n    flex-direction: row; } }\n\n@media (min-width: 960px) {\n  .flex-order-gt-sm--20 {\n    order: -20; }\n  .flex-order-gt-sm--19 {\n    order: -19; }\n  .flex-order-gt-sm--18 {\n    order: -18; }\n  .flex-order-gt-sm--17 {\n    order: -17; }\n  .flex-order-gt-sm--16 {\n    order: -16; }\n  .flex-order-gt-sm--15 {\n    order: -15; }\n  .flex-order-gt-sm--14 {\n    order: -14; }\n  .flex-order-gt-sm--13 {\n    order: -13; }\n  .flex-order-gt-sm--12 {\n    order: -12; }\n  .flex-order-gt-sm--11 {\n    order: -11; }\n  .flex-order-gt-sm--10 {\n    order: -10; }\n  .flex-order-gt-sm--9 {\n    order: -9; }\n  .flex-order-gt-sm--8 {\n    order: -8; }\n  .flex-order-gt-sm--7 {\n    order: -7; }\n  .flex-order-gt-sm--6 {\n    order: -6; }\n  .flex-order-gt-sm--5 {\n    order: -5; }\n  .flex-order-gt-sm--4 {\n    order: -4; }\n  .flex-order-gt-sm--3 {\n    order: -3; }\n  .flex-order-gt-sm--2 {\n    order: -2; }\n  .flex-order-gt-sm--1 {\n    order: -1; }\n  .flex-order-gt-sm-0 {\n    order: 0; }\n  .flex-order-gt-sm-1 {\n    order: 1; }\n  .flex-order-gt-sm-2 {\n    order: 2; }\n  .flex-order-gt-sm-3 {\n    order: 3; }\n  .flex-order-gt-sm-4 {\n    order: 4; }\n  .flex-order-gt-sm-5 {\n    order: 5; }\n  .flex-order-gt-sm-6 {\n    order: 6; }\n  .flex-order-gt-sm-7 {\n    order: 7; }\n  .flex-order-gt-sm-8 {\n    order: 8; }\n  .flex-order-gt-sm-9 {\n    order: 9; }\n  .flex-order-gt-sm-10 {\n    order: 10; }\n  .flex-order-gt-sm-11 {\n    order: 11; }\n  .flex-order-gt-sm-12 {\n    order: 12; }\n  .flex-order-gt-sm-13 {\n    order: 13; }\n  .flex-order-gt-sm-14 {\n    order: 14; }\n  .flex-order-gt-sm-15 {\n    order: 15; }\n  .flex-order-gt-sm-16 {\n    order: 16; }\n  .flex-order-gt-sm-17 {\n    order: 17; }\n  .flex-order-gt-sm-18 {\n    order: 18; }\n  .flex-order-gt-sm-19 {\n    order: 19; }\n  .flex-order-gt-sm-20 {\n    order: 20; }\n  .offset-gt-sm-0, .flex-offset-gt-sm-0 {\n    margin-left: 0; }\n    [dir=rtl] .offset-gt-sm-0, [dir=rtl] .flex-offset-gt-sm-0 {\n      margin-left: auto;\n      margin-right: 0; }\n  .offset-gt-sm-5, .flex-offset-gt-sm-5 {\n    margin-left: 5%; }\n    [dir=rtl] .offset-gt-sm-5, [dir=rtl] .flex-offset-gt-sm-5 {\n      margin-left: auto;\n      margin-right: 5%; }\n  .offset-gt-sm-10, .flex-offset-gt-sm-10 {\n    margin-left: 10%; }\n    [dir=rtl] .offset-gt-sm-10, [dir=rtl] .flex-offset-gt-sm-10 {\n      margin-left: auto;\n      margin-right: 10%; }\n  .offset-gt-sm-15, .flex-offset-gt-sm-15 {\n    margin-left: 15%; }\n    [dir=rtl] .offset-gt-sm-15, [dir=rtl] .flex-offset-gt-sm-15 {\n      margin-left: auto;\n      margin-right: 15%; }\n  .offset-gt-sm-20, .flex-offset-gt-sm-20 {\n    margin-left: 20%; }\n    [dir=rtl] .offset-gt-sm-20, [dir=rtl] .flex-offset-gt-sm-20 {\n      margin-left: auto;\n      margin-right: 20%; }\n  .offset-gt-sm-25, .flex-offset-gt-sm-25 {\n    margin-left: 25%; }\n    [dir=rtl] .offset-gt-sm-25, [dir=rtl] .flex-offset-gt-sm-25 {\n      margin-left: auto;\n      margin-right: 25%; }\n  .offset-gt-sm-30, .flex-offset-gt-sm-30 {\n    margin-left: 30%; }\n    [dir=rtl] .offset-gt-sm-30, [dir=rtl] .flex-offset-gt-sm-30 {\n      margin-left: auto;\n      margin-right: 30%; }\n  .offset-gt-sm-35, .flex-offset-gt-sm-35 {\n    margin-left: 35%; }\n    [dir=rtl] .offset-gt-sm-35, [dir=rtl] .flex-offset-gt-sm-35 {\n      margin-left: auto;\n      margin-right: 35%; }\n  .offset-gt-sm-40, .flex-offset-gt-sm-40 {\n    margin-left: 40%; }\n    [dir=rtl] .offset-gt-sm-40, [dir=rtl] .flex-offset-gt-sm-40 {\n      margin-left: auto;\n      margin-right: 40%; }\n  .offset-gt-sm-45, .flex-offset-gt-sm-45 {\n    margin-left: 45%; }\n    [dir=rtl] .offset-gt-sm-45, [dir=rtl] .flex-offset-gt-sm-45 {\n      margin-left: auto;\n      margin-right: 45%; }\n  .offset-gt-sm-50, .flex-offset-gt-sm-50 {\n    margin-left: 50%; }\n    [dir=rtl] .offset-gt-sm-50, [dir=rtl] .flex-offset-gt-sm-50 {\n      margin-left: auto;\n      margin-right: 50%; }\n  .offset-gt-sm-55, .flex-offset-gt-sm-55 {\n    margin-left: 55%; }\n    [dir=rtl] .offset-gt-sm-55, [dir=rtl] .flex-offset-gt-sm-55 {\n      margin-left: auto;\n      margin-right: 55%; }\n  .offset-gt-sm-60, .flex-offset-gt-sm-60 {\n    margin-left: 60%; }\n    [dir=rtl] .offset-gt-sm-60, [dir=rtl] .flex-offset-gt-sm-60 {\n      margin-left: auto;\n      margin-right: 60%; }\n  .offset-gt-sm-65, .flex-offset-gt-sm-65 {\n    margin-left: 65%; }\n    [dir=rtl] .offset-gt-sm-65, [dir=rtl] .flex-offset-gt-sm-65 {\n      margin-left: auto;\n      margin-right: 65%; }\n  .offset-gt-sm-70, .flex-offset-gt-sm-70 {\n    margin-left: 70%; }\n    [dir=rtl] .offset-gt-sm-70, [dir=rtl] .flex-offset-gt-sm-70 {\n      margin-left: auto;\n      margin-right: 70%; }\n  .offset-gt-sm-75, .flex-offset-gt-sm-75 {\n    margin-left: 75%; }\n    [dir=rtl] .offset-gt-sm-75, [dir=rtl] .flex-offset-gt-sm-75 {\n      margin-left: auto;\n      margin-right: 75%; }\n  .offset-gt-sm-80, .flex-offset-gt-sm-80 {\n    margin-left: 80%; }\n    [dir=rtl] .offset-gt-sm-80, [dir=rtl] .flex-offset-gt-sm-80 {\n      margin-left: auto;\n      margin-right: 80%; }\n  .offset-gt-sm-85, .flex-offset-gt-sm-85 {\n    margin-left: 85%; }\n    [dir=rtl] .offset-gt-sm-85, [dir=rtl] .flex-offset-gt-sm-85 {\n      margin-left: auto;\n      margin-right: 85%; }\n  .offset-gt-sm-90, .flex-offset-gt-sm-90 {\n    margin-left: 90%; }\n    [dir=rtl] .offset-gt-sm-90, [dir=rtl] .flex-offset-gt-sm-90 {\n      margin-left: auto;\n      margin-right: 90%; }\n  .offset-gt-sm-95, .flex-offset-gt-sm-95 {\n    margin-left: 95%; }\n    [dir=rtl] .offset-gt-sm-95, [dir=rtl] .flex-offset-gt-sm-95 {\n      margin-left: auto;\n      margin-right: 95%; }\n  .offset-gt-sm-33, .flex-offset-gt-sm-33 {\n    margin-left: calc(100% / 3); }\n  .offset-gt-sm-66, .flex-offset-gt-sm-66 {\n    margin-left: calc(200% / 3); }\n    [dir=rtl] .offset-gt-sm-66, [dir=rtl] .flex-offset-gt-sm-66 {\n      margin-left: auto;\n      margin-right: calc(200% / 3); }\n  .layout-align-gt-sm,\n  .layout-align-gt-sm-start-stretch {\n    justify-content: flex-start;\n    align-content: stretch;\n    align-items: stretch; }\n  .layout-align-gt-sm-start,\n  .layout-align-gt-sm-start-start,\n  .layout-align-gt-sm-start-center,\n  .layout-align-gt-sm-start-end,\n  .layout-align-gt-sm-start-stretch {\n    justify-content: flex-start; }\n  .layout-align-gt-sm-center,\n  .layout-align-gt-sm-center-start,\n  .layout-align-gt-sm-center-center,\n  .layout-align-gt-sm-center-end,\n  .layout-align-gt-sm-center-stretch {\n    justify-content: center; }\n  .layout-align-gt-sm-end,\n  .layout-align-gt-sm-end-start,\n  .layout-align-gt-sm-end-center,\n  .layout-align-gt-sm-end-end,\n  .layout-align-gt-sm-end-stretch {\n    justify-content: flex-end; }\n  .layout-align-gt-sm-space-around,\n  .layout-align-gt-sm-space-around-center,\n  .layout-align-gt-sm-space-around-start,\n  .layout-align-gt-sm-space-around-end,\n  .layout-align-gt-sm-space-around-stretch {\n    justify-content: space-around; }\n  .layout-align-gt-sm-space-between,\n  .layout-align-gt-sm-space-between-center,\n  .layout-align-gt-sm-space-between-start,\n  .layout-align-gt-sm-space-between-end,\n  .layout-align-gt-sm-space-between-stretch {\n    justify-content: space-between; }\n  .layout-align-gt-sm-start-start,\n  .layout-align-gt-sm-center-start,\n  .layout-align-gt-sm-end-start,\n  .layout-align-gt-sm-space-between-start,\n  .layout-align-gt-sm-space-around-start {\n    align-items: flex-start;\n    align-content: flex-start; }\n  .layout-align-gt-sm-start-center,\n  .layout-align-gt-sm-center-center,\n  .layout-align-gt-sm-end-center,\n  .layout-align-gt-sm-space-between-center,\n  .layout-align-gt-sm-space-around-center {\n    align-items: center;\n    align-content: center;\n    max-width: 100%; }\n  .layout-align-gt-sm-start-center > *,\n  .layout-align-gt-sm-center-center > *,\n  .layout-align-gt-sm-end-center > *,\n  .layout-align-gt-sm-space-between-center > *,\n  .layout-align-gt-sm-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box; }\n  .layout-align-gt-sm-start-end,\n  .layout-align-gt-sm-center-end,\n  .layout-align-gt-sm-end-end,\n  .layout-align-gt-sm-space-between-end,\n  .layout-align-gt-sm-space-around-end {\n    align-items: flex-end;\n    align-content: flex-end; }\n  .layout-align-gt-sm-start-stretch,\n  .layout-align-gt-sm-center-stretch,\n  .layout-align-gt-sm-end-stretch,\n  .layout-align-gt-sm-space-between-stretch,\n  .layout-align-gt-sm-space-around-stretch {\n    align-items: stretch;\n    align-content: stretch; }\n  .flex-gt-sm {\n    flex: 1;\n    box-sizing: border-box; }\n  .flex-gt-sm-grow {\n    flex: 1 1 100%;\n    box-sizing: border-box; }\n  .flex-gt-sm-initial {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-sm-auto {\n    flex: 1 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-sm-none {\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n  .flex-gt-sm-noshrink {\n    flex: 1 0 auto;\n    box-sizing: border-box; }\n  .flex-gt-sm-nogrow {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-sm-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-column > .flex-gt-sm-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-gt-sm-column > .flex-gt-sm-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n    min-height: 0; }\n  .flex-gt-sm-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .flex-gt-sm-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .flex-gt-sm-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .flex-gt-sm-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .flex-gt-sm-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .flex-gt-sm-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .flex-gt-sm-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .flex-gt-sm-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .flex-gt-sm-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .flex-gt-sm-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .flex-gt-sm-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .flex-gt-sm-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .flex-gt-sm-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .flex-gt-sm-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .flex-gt-sm-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .flex-gt-sm-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .flex-gt-sm-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .flex-gt-sm-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .flex-gt-sm-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .flex-gt-sm-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-33 {\n    flex: 1 1 33.33%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-sm-66 {\n    flex: 1 1 66.66%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-33 {\n    flex: 1 1 33.33%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-sm-66 {\n    flex: 1 1 66.66%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-33 {\n    flex: 1 1 100%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex-gt-sm-66 {\n    flex: 1 1 100%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-sm-row > .flex {\n    min-width: 0; }\n  .layout-gt-sm-column > .flex-gt-sm-33 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex-gt-sm-66 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-gt-sm-column > .flex {\n    min-height: 0; }\n  .layout-gt-sm, .layout-gt-sm-column, .layout-gt-sm-row {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .layout-gt-sm-column {\n    flex-direction: column; }\n  .layout-gt-sm-row {\n    flex-direction: row; } }\n\n@media (min-width: 960px) and (max-width: 1279px) {\n  .hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show), .hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show), .hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show) {\n    display: none; }\n  .hide-md:not(.show-md):not(.show-gt-sm):not(.show-gt-xs):not(.show) {\n    display: none; }\n  .flex-order-md--20 {\n    order: -20; }\n  .flex-order-md--19 {\n    order: -19; }\n  .flex-order-md--18 {\n    order: -18; }\n  .flex-order-md--17 {\n    order: -17; }\n  .flex-order-md--16 {\n    order: -16; }\n  .flex-order-md--15 {\n    order: -15; }\n  .flex-order-md--14 {\n    order: -14; }\n  .flex-order-md--13 {\n    order: -13; }\n  .flex-order-md--12 {\n    order: -12; }\n  .flex-order-md--11 {\n    order: -11; }\n  .flex-order-md--10 {\n    order: -10; }\n  .flex-order-md--9 {\n    order: -9; }\n  .flex-order-md--8 {\n    order: -8; }\n  .flex-order-md--7 {\n    order: -7; }\n  .flex-order-md--6 {\n    order: -6; }\n  .flex-order-md--5 {\n    order: -5; }\n  .flex-order-md--4 {\n    order: -4; }\n  .flex-order-md--3 {\n    order: -3; }\n  .flex-order-md--2 {\n    order: -2; }\n  .flex-order-md--1 {\n    order: -1; }\n  .flex-order-md-0 {\n    order: 0; }\n  .flex-order-md-1 {\n    order: 1; }\n  .flex-order-md-2 {\n    order: 2; }\n  .flex-order-md-3 {\n    order: 3; }\n  .flex-order-md-4 {\n    order: 4; }\n  .flex-order-md-5 {\n    order: 5; }\n  .flex-order-md-6 {\n    order: 6; }\n  .flex-order-md-7 {\n    order: 7; }\n  .flex-order-md-8 {\n    order: 8; }\n  .flex-order-md-9 {\n    order: 9; }\n  .flex-order-md-10 {\n    order: 10; }\n  .flex-order-md-11 {\n    order: 11; }\n  .flex-order-md-12 {\n    order: 12; }\n  .flex-order-md-13 {\n    order: 13; }\n  .flex-order-md-14 {\n    order: 14; }\n  .flex-order-md-15 {\n    order: 15; }\n  .flex-order-md-16 {\n    order: 16; }\n  .flex-order-md-17 {\n    order: 17; }\n  .flex-order-md-18 {\n    order: 18; }\n  .flex-order-md-19 {\n    order: 19; }\n  .flex-order-md-20 {\n    order: 20; }\n  .offset-md-0, .flex-offset-md-0 {\n    margin-left: 0; }\n    [dir=rtl] .offset-md-0, [dir=rtl] .flex-offset-md-0 {\n      margin-left: auto;\n      margin-right: 0; }\n  .offset-md-5, .flex-offset-md-5 {\n    margin-left: 5%; }\n    [dir=rtl] .offset-md-5, [dir=rtl] .flex-offset-md-5 {\n      margin-left: auto;\n      margin-right: 5%; }\n  .offset-md-10, .flex-offset-md-10 {\n    margin-left: 10%; }\n    [dir=rtl] .offset-md-10, [dir=rtl] .flex-offset-md-10 {\n      margin-left: auto;\n      margin-right: 10%; }\n  .offset-md-15, .flex-offset-md-15 {\n    margin-left: 15%; }\n    [dir=rtl] .offset-md-15, [dir=rtl] .flex-offset-md-15 {\n      margin-left: auto;\n      margin-right: 15%; }\n  .offset-md-20, .flex-offset-md-20 {\n    margin-left: 20%; }\n    [dir=rtl] .offset-md-20, [dir=rtl] .flex-offset-md-20 {\n      margin-left: auto;\n      margin-right: 20%; }\n  .offset-md-25, .flex-offset-md-25 {\n    margin-left: 25%; }\n    [dir=rtl] .offset-md-25, [dir=rtl] .flex-offset-md-25 {\n      margin-left: auto;\n      margin-right: 25%; }\n  .offset-md-30, .flex-offset-md-30 {\n    margin-left: 30%; }\n    [dir=rtl] .offset-md-30, [dir=rtl] .flex-offset-md-30 {\n      margin-left: auto;\n      margin-right: 30%; }\n  .offset-md-35, .flex-offset-md-35 {\n    margin-left: 35%; }\n    [dir=rtl] .offset-md-35, [dir=rtl] .flex-offset-md-35 {\n      margin-left: auto;\n      margin-right: 35%; }\n  .offset-md-40, .flex-offset-md-40 {\n    margin-left: 40%; }\n    [dir=rtl] .offset-md-40, [dir=rtl] .flex-offset-md-40 {\n      margin-left: auto;\n      margin-right: 40%; }\n  .offset-md-45, .flex-offset-md-45 {\n    margin-left: 45%; }\n    [dir=rtl] .offset-md-45, [dir=rtl] .flex-offset-md-45 {\n      margin-left: auto;\n      margin-right: 45%; }\n  .offset-md-50, .flex-offset-md-50 {\n    margin-left: 50%; }\n    [dir=rtl] .offset-md-50, [dir=rtl] .flex-offset-md-50 {\n      margin-left: auto;\n      margin-right: 50%; }\n  .offset-md-55, .flex-offset-md-55 {\n    margin-left: 55%; }\n    [dir=rtl] .offset-md-55, [dir=rtl] .flex-offset-md-55 {\n      margin-left: auto;\n      margin-right: 55%; }\n  .offset-md-60, .flex-offset-md-60 {\n    margin-left: 60%; }\n    [dir=rtl] .offset-md-60, [dir=rtl] .flex-offset-md-60 {\n      margin-left: auto;\n      margin-right: 60%; }\n  .offset-md-65, .flex-offset-md-65 {\n    margin-left: 65%; }\n    [dir=rtl] .offset-md-65, [dir=rtl] .flex-offset-md-65 {\n      margin-left: auto;\n      margin-right: 65%; }\n  .offset-md-70, .flex-offset-md-70 {\n    margin-left: 70%; }\n    [dir=rtl] .offset-md-70, [dir=rtl] .flex-offset-md-70 {\n      margin-left: auto;\n      margin-right: 70%; }\n  .offset-md-75, .flex-offset-md-75 {\n    margin-left: 75%; }\n    [dir=rtl] .offset-md-75, [dir=rtl] .flex-offset-md-75 {\n      margin-left: auto;\n      margin-right: 75%; }\n  .offset-md-80, .flex-offset-md-80 {\n    margin-left: 80%; }\n    [dir=rtl] .offset-md-80, [dir=rtl] .flex-offset-md-80 {\n      margin-left: auto;\n      margin-right: 80%; }\n  .offset-md-85, .flex-offset-md-85 {\n    margin-left: 85%; }\n    [dir=rtl] .offset-md-85, [dir=rtl] .flex-offset-md-85 {\n      margin-left: auto;\n      margin-right: 85%; }\n  .offset-md-90, .flex-offset-md-90 {\n    margin-left: 90%; }\n    [dir=rtl] .offset-md-90, [dir=rtl] .flex-offset-md-90 {\n      margin-left: auto;\n      margin-right: 90%; }\n  .offset-md-95, .flex-offset-md-95 {\n    margin-left: 95%; }\n    [dir=rtl] .offset-md-95, [dir=rtl] .flex-offset-md-95 {\n      margin-left: auto;\n      margin-right: 95%; }\n  .offset-md-33, .flex-offset-md-33 {\n    margin-left: calc(100% / 3); }\n  .offset-md-66, .flex-offset-md-66 {\n    margin-left: calc(200% / 3); }\n    [dir=rtl] .offset-md-66, [dir=rtl] .flex-offset-md-66 {\n      margin-left: auto;\n      margin-right: calc(200% / 3); }\n  .layout-align-md,\n  .layout-align-md-start-stretch {\n    justify-content: flex-start;\n    align-content: stretch;\n    align-items: stretch; }\n  .layout-align-md-start,\n  .layout-align-md-start-start,\n  .layout-align-md-start-center,\n  .layout-align-md-start-end,\n  .layout-align-md-start-stretch {\n    justify-content: flex-start; }\n  .layout-align-md-center,\n  .layout-align-md-center-start,\n  .layout-align-md-center-center,\n  .layout-align-md-center-end,\n  .layout-align-md-center-stretch {\n    justify-content: center; }\n  .layout-align-md-end,\n  .layout-align-md-end-start,\n  .layout-align-md-end-center,\n  .layout-align-md-end-end,\n  .layout-align-md-end-stretch {\n    justify-content: flex-end; }\n  .layout-align-md-space-around,\n  .layout-align-md-space-around-center,\n  .layout-align-md-space-around-start,\n  .layout-align-md-space-around-end,\n  .layout-align-md-space-around-stretch {\n    justify-content: space-around; }\n  .layout-align-md-space-between,\n  .layout-align-md-space-between-center,\n  .layout-align-md-space-between-start,\n  .layout-align-md-space-between-end,\n  .layout-align-md-space-between-stretch {\n    justify-content: space-between; }\n  .layout-align-md-start-start,\n  .layout-align-md-center-start,\n  .layout-align-md-end-start,\n  .layout-align-md-space-between-start,\n  .layout-align-md-space-around-start {\n    align-items: flex-start;\n    align-content: flex-start; }\n  .layout-align-md-start-center,\n  .layout-align-md-center-center,\n  .layout-align-md-end-center,\n  .layout-align-md-space-between-center,\n  .layout-align-md-space-around-center {\n    align-items: center;\n    align-content: center;\n    max-width: 100%; }\n  .layout-align-md-start-center > *,\n  .layout-align-md-center-center > *,\n  .layout-align-md-end-center > *,\n  .layout-align-md-space-between-center > *,\n  .layout-align-md-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box; }\n  .layout-align-md-start-end,\n  .layout-align-md-center-end,\n  .layout-align-md-end-end,\n  .layout-align-md-space-between-end,\n  .layout-align-md-space-around-end {\n    align-items: flex-end;\n    align-content: flex-end; }\n  .layout-align-md-start-stretch,\n  .layout-align-md-center-stretch,\n  .layout-align-md-end-stretch,\n  .layout-align-md-space-between-stretch,\n  .layout-align-md-space-around-stretch {\n    align-items: stretch;\n    align-content: stretch; }\n  .flex-md {\n    flex: 1;\n    box-sizing: border-box; }\n  .flex-md-grow {\n    flex: 1 1 100%;\n    box-sizing: border-box; }\n  .flex-md-initial {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-md-auto {\n    flex: 1 1 auto;\n    box-sizing: border-box; }\n  .flex-md-none {\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n  .flex-md-noshrink {\n    flex: 1 0 auto;\n    box-sizing: border-box; }\n  .flex-md-nogrow {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-md-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-column > .flex-md-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-md-column > .flex-md-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n    min-height: 0; }\n  .flex-md-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .flex-md-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .flex-md-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .flex-md-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .flex-md-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .flex-md-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .flex-md-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .flex-md-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .flex-md-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .flex-md-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .flex-md-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .flex-md-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .flex-md-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .flex-md-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .flex-md-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .flex-md-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .flex-md-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .flex-md-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .flex-md-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .flex-md-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-33 {\n    flex: 1 1 33.33%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-md-66 {\n    flex: 1 1 66.66%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-33 {\n    flex: 1 1 33.33%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-column > .flex-md-66 {\n    flex: 1 1 66.66%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-33 {\n    flex: 1 1 100%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex-md-66 {\n    flex: 1 1 100%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-md-row > .flex {\n    min-width: 0; }\n  .layout-md-column > .flex-md-33 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex-md-66 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-md-column > .flex {\n    min-height: 0; }\n  .layout-md, .layout-md-column, .layout-md-row {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .layout-md-column {\n    flex-direction: column; }\n  .layout-md-row {\n    flex-direction: row; } }\n\n@media (min-width: 1280px) {\n  .flex-order-gt-md--20 {\n    order: -20; }\n  .flex-order-gt-md--19 {\n    order: -19; }\n  .flex-order-gt-md--18 {\n    order: -18; }\n  .flex-order-gt-md--17 {\n    order: -17; }\n  .flex-order-gt-md--16 {\n    order: -16; }\n  .flex-order-gt-md--15 {\n    order: -15; }\n  .flex-order-gt-md--14 {\n    order: -14; }\n  .flex-order-gt-md--13 {\n    order: -13; }\n  .flex-order-gt-md--12 {\n    order: -12; }\n  .flex-order-gt-md--11 {\n    order: -11; }\n  .flex-order-gt-md--10 {\n    order: -10; }\n  .flex-order-gt-md--9 {\n    order: -9; }\n  .flex-order-gt-md--8 {\n    order: -8; }\n  .flex-order-gt-md--7 {\n    order: -7; }\n  .flex-order-gt-md--6 {\n    order: -6; }\n  .flex-order-gt-md--5 {\n    order: -5; }\n  .flex-order-gt-md--4 {\n    order: -4; }\n  .flex-order-gt-md--3 {\n    order: -3; }\n  .flex-order-gt-md--2 {\n    order: -2; }\n  .flex-order-gt-md--1 {\n    order: -1; }\n  .flex-order-gt-md-0 {\n    order: 0; }\n  .flex-order-gt-md-1 {\n    order: 1; }\n  .flex-order-gt-md-2 {\n    order: 2; }\n  .flex-order-gt-md-3 {\n    order: 3; }\n  .flex-order-gt-md-4 {\n    order: 4; }\n  .flex-order-gt-md-5 {\n    order: 5; }\n  .flex-order-gt-md-6 {\n    order: 6; }\n  .flex-order-gt-md-7 {\n    order: 7; }\n  .flex-order-gt-md-8 {\n    order: 8; }\n  .flex-order-gt-md-9 {\n    order: 9; }\n  .flex-order-gt-md-10 {\n    order: 10; }\n  .flex-order-gt-md-11 {\n    order: 11; }\n  .flex-order-gt-md-12 {\n    order: 12; }\n  .flex-order-gt-md-13 {\n    order: 13; }\n  .flex-order-gt-md-14 {\n    order: 14; }\n  .flex-order-gt-md-15 {\n    order: 15; }\n  .flex-order-gt-md-16 {\n    order: 16; }\n  .flex-order-gt-md-17 {\n    order: 17; }\n  .flex-order-gt-md-18 {\n    order: 18; }\n  .flex-order-gt-md-19 {\n    order: 19; }\n  .flex-order-gt-md-20 {\n    order: 20; }\n  .offset-gt-md-0, .flex-offset-gt-md-0 {\n    margin-left: 0; }\n    [dir=rtl] .offset-gt-md-0, [dir=rtl] .flex-offset-gt-md-0 {\n      margin-left: auto;\n      margin-right: 0; }\n  .offset-gt-md-5, .flex-offset-gt-md-5 {\n    margin-left: 5%; }\n    [dir=rtl] .offset-gt-md-5, [dir=rtl] .flex-offset-gt-md-5 {\n      margin-left: auto;\n      margin-right: 5%; }\n  .offset-gt-md-10, .flex-offset-gt-md-10 {\n    margin-left: 10%; }\n    [dir=rtl] .offset-gt-md-10, [dir=rtl] .flex-offset-gt-md-10 {\n      margin-left: auto;\n      margin-right: 10%; }\n  .offset-gt-md-15, .flex-offset-gt-md-15 {\n    margin-left: 15%; }\n    [dir=rtl] .offset-gt-md-15, [dir=rtl] .flex-offset-gt-md-15 {\n      margin-left: auto;\n      margin-right: 15%; }\n  .offset-gt-md-20, .flex-offset-gt-md-20 {\n    margin-left: 20%; }\n    [dir=rtl] .offset-gt-md-20, [dir=rtl] .flex-offset-gt-md-20 {\n      margin-left: auto;\n      margin-right: 20%; }\n  .offset-gt-md-25, .flex-offset-gt-md-25 {\n    margin-left: 25%; }\n    [dir=rtl] .offset-gt-md-25, [dir=rtl] .flex-offset-gt-md-25 {\n      margin-left: auto;\n      margin-right: 25%; }\n  .offset-gt-md-30, .flex-offset-gt-md-30 {\n    margin-left: 30%; }\n    [dir=rtl] .offset-gt-md-30, [dir=rtl] .flex-offset-gt-md-30 {\n      margin-left: auto;\n      margin-right: 30%; }\n  .offset-gt-md-35, .flex-offset-gt-md-35 {\n    margin-left: 35%; }\n    [dir=rtl] .offset-gt-md-35, [dir=rtl] .flex-offset-gt-md-35 {\n      margin-left: auto;\n      margin-right: 35%; }\n  .offset-gt-md-40, .flex-offset-gt-md-40 {\n    margin-left: 40%; }\n    [dir=rtl] .offset-gt-md-40, [dir=rtl] .flex-offset-gt-md-40 {\n      margin-left: auto;\n      margin-right: 40%; }\n  .offset-gt-md-45, .flex-offset-gt-md-45 {\n    margin-left: 45%; }\n    [dir=rtl] .offset-gt-md-45, [dir=rtl] .flex-offset-gt-md-45 {\n      margin-left: auto;\n      margin-right: 45%; }\n  .offset-gt-md-50, .flex-offset-gt-md-50 {\n    margin-left: 50%; }\n    [dir=rtl] .offset-gt-md-50, [dir=rtl] .flex-offset-gt-md-50 {\n      margin-left: auto;\n      margin-right: 50%; }\n  .offset-gt-md-55, .flex-offset-gt-md-55 {\n    margin-left: 55%; }\n    [dir=rtl] .offset-gt-md-55, [dir=rtl] .flex-offset-gt-md-55 {\n      margin-left: auto;\n      margin-right: 55%; }\n  .offset-gt-md-60, .flex-offset-gt-md-60 {\n    margin-left: 60%; }\n    [dir=rtl] .offset-gt-md-60, [dir=rtl] .flex-offset-gt-md-60 {\n      margin-left: auto;\n      margin-right: 60%; }\n  .offset-gt-md-65, .flex-offset-gt-md-65 {\n    margin-left: 65%; }\n    [dir=rtl] .offset-gt-md-65, [dir=rtl] .flex-offset-gt-md-65 {\n      margin-left: auto;\n      margin-right: 65%; }\n  .offset-gt-md-70, .flex-offset-gt-md-70 {\n    margin-left: 70%; }\n    [dir=rtl] .offset-gt-md-70, [dir=rtl] .flex-offset-gt-md-70 {\n      margin-left: auto;\n      margin-right: 70%; }\n  .offset-gt-md-75, .flex-offset-gt-md-75 {\n    margin-left: 75%; }\n    [dir=rtl] .offset-gt-md-75, [dir=rtl] .flex-offset-gt-md-75 {\n      margin-left: auto;\n      margin-right: 75%; }\n  .offset-gt-md-80, .flex-offset-gt-md-80 {\n    margin-left: 80%; }\n    [dir=rtl] .offset-gt-md-80, [dir=rtl] .flex-offset-gt-md-80 {\n      margin-left: auto;\n      margin-right: 80%; }\n  .offset-gt-md-85, .flex-offset-gt-md-85 {\n    margin-left: 85%; }\n    [dir=rtl] .offset-gt-md-85, [dir=rtl] .flex-offset-gt-md-85 {\n      margin-left: auto;\n      margin-right: 85%; }\n  .offset-gt-md-90, .flex-offset-gt-md-90 {\n    margin-left: 90%; }\n    [dir=rtl] .offset-gt-md-90, [dir=rtl] .flex-offset-gt-md-90 {\n      margin-left: auto;\n      margin-right: 90%; }\n  .offset-gt-md-95, .flex-offset-gt-md-95 {\n    margin-left: 95%; }\n    [dir=rtl] .offset-gt-md-95, [dir=rtl] .flex-offset-gt-md-95 {\n      margin-left: auto;\n      margin-right: 95%; }\n  .offset-gt-md-33, .flex-offset-gt-md-33 {\n    margin-left: calc(100% / 3); }\n  .offset-gt-md-66, .flex-offset-gt-md-66 {\n    margin-left: calc(200% / 3); }\n    [dir=rtl] .offset-gt-md-66, [dir=rtl] .flex-offset-gt-md-66 {\n      margin-left: auto;\n      margin-right: calc(200% / 3); }\n  .layout-align-gt-md,\n  .layout-align-gt-md-start-stretch {\n    justify-content: flex-start;\n    align-content: stretch;\n    align-items: stretch; }\n  .layout-align-gt-md-start,\n  .layout-align-gt-md-start-start,\n  .layout-align-gt-md-start-center,\n  .layout-align-gt-md-start-end,\n  .layout-align-gt-md-start-stretch {\n    justify-content: flex-start; }\n  .layout-align-gt-md-center,\n  .layout-align-gt-md-center-start,\n  .layout-align-gt-md-center-center,\n  .layout-align-gt-md-center-end,\n  .layout-align-gt-md-center-stretch {\n    justify-content: center; }\n  .layout-align-gt-md-end,\n  .layout-align-gt-md-end-start,\n  .layout-align-gt-md-end-center,\n  .layout-align-gt-md-end-end,\n  .layout-align-gt-md-end-stretch {\n    justify-content: flex-end; }\n  .layout-align-gt-md-space-around,\n  .layout-align-gt-md-space-around-center,\n  .layout-align-gt-md-space-around-start,\n  .layout-align-gt-md-space-around-end,\n  .layout-align-gt-md-space-around-stretch {\n    justify-content: space-around; }\n  .layout-align-gt-md-space-between,\n  .layout-align-gt-md-space-between-center,\n  .layout-align-gt-md-space-between-start,\n  .layout-align-gt-md-space-between-end,\n  .layout-align-gt-md-space-between-stretch {\n    justify-content: space-between; }\n  .layout-align-gt-md-start-start,\n  .layout-align-gt-md-center-start,\n  .layout-align-gt-md-end-start,\n  .layout-align-gt-md-space-between-start,\n  .layout-align-gt-md-space-around-start {\n    align-items: flex-start;\n    align-content: flex-start; }\n  .layout-align-gt-md-start-center,\n  .layout-align-gt-md-center-center,\n  .layout-align-gt-md-end-center,\n  .layout-align-gt-md-space-between-center,\n  .layout-align-gt-md-space-around-center {\n    align-items: center;\n    align-content: center;\n    max-width: 100%; }\n  .layout-align-gt-md-start-center > *,\n  .layout-align-gt-md-center-center > *,\n  .layout-align-gt-md-end-center > *,\n  .layout-align-gt-md-space-between-center > *,\n  .layout-align-gt-md-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box; }\n  .layout-align-gt-md-start-end,\n  .layout-align-gt-md-center-end,\n  .layout-align-gt-md-end-end,\n  .layout-align-gt-md-space-between-end,\n  .layout-align-gt-md-space-around-end {\n    align-items: flex-end;\n    align-content: flex-end; }\n  .layout-align-gt-md-start-stretch,\n  .layout-align-gt-md-center-stretch,\n  .layout-align-gt-md-end-stretch,\n  .layout-align-gt-md-space-between-stretch,\n  .layout-align-gt-md-space-around-stretch {\n    align-items: stretch;\n    align-content: stretch; }\n  .flex-gt-md {\n    flex: 1;\n    box-sizing: border-box; }\n  .flex-gt-md-grow {\n    flex: 1 1 100%;\n    box-sizing: border-box; }\n  .flex-gt-md-initial {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-md-auto {\n    flex: 1 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-md-none {\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n  .flex-gt-md-noshrink {\n    flex: 1 0 auto;\n    box-sizing: border-box; }\n  .flex-gt-md-nogrow {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-md-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-column > .flex-gt-md-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-gt-md-column > .flex-gt-md-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n    min-height: 0; }\n  .flex-gt-md-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .flex-gt-md-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .flex-gt-md-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .flex-gt-md-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .flex-gt-md-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .flex-gt-md-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .flex-gt-md-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .flex-gt-md-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .flex-gt-md-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .flex-gt-md-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .flex-gt-md-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .flex-gt-md-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .flex-gt-md-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .flex-gt-md-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .flex-gt-md-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .flex-gt-md-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .flex-gt-md-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .flex-gt-md-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .flex-gt-md-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .flex-gt-md-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-33 {\n    flex: 1 1 33.33%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-md-66 {\n    flex: 1 1 66.66%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-33 {\n    flex: 1 1 33.33%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-md-66 {\n    flex: 1 1 66.66%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-33 {\n    flex: 1 1 100%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex-gt-md-66 {\n    flex: 1 1 100%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-md-row > .flex {\n    min-width: 0; }\n  .layout-gt-md-column > .flex-gt-md-33 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex-gt-md-66 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-gt-md-column > .flex {\n    min-height: 0; }\n  .layout-gt-md, .layout-gt-md-column, .layout-gt-md-row {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .layout-gt-md-column {\n    flex-direction: column; }\n  .layout-gt-md-row {\n    flex-direction: row; } }\n\n@media (min-width: 1280px) and (max-width: 1919px) {\n  .hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show), .hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show), .hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show), .hide-gt-md:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show) {\n    display: none; }\n  .hide-lg:not(.show-lg):not(.show-gt-md):not(.show-gt-sm):not(.show-gt-xs):not(.show) {\n    display: none; }\n  .flex-order-lg--20 {\n    order: -20; }\n  .flex-order-lg--19 {\n    order: -19; }\n  .flex-order-lg--18 {\n    order: -18; }\n  .flex-order-lg--17 {\n    order: -17; }\n  .flex-order-lg--16 {\n    order: -16; }\n  .flex-order-lg--15 {\n    order: -15; }\n  .flex-order-lg--14 {\n    order: -14; }\n  .flex-order-lg--13 {\n    order: -13; }\n  .flex-order-lg--12 {\n    order: -12; }\n  .flex-order-lg--11 {\n    order: -11; }\n  .flex-order-lg--10 {\n    order: -10; }\n  .flex-order-lg--9 {\n    order: -9; }\n  .flex-order-lg--8 {\n    order: -8; }\n  .flex-order-lg--7 {\n    order: -7; }\n  .flex-order-lg--6 {\n    order: -6; }\n  .flex-order-lg--5 {\n    order: -5; }\n  .flex-order-lg--4 {\n    order: -4; }\n  .flex-order-lg--3 {\n    order: -3; }\n  .flex-order-lg--2 {\n    order: -2; }\n  .flex-order-lg--1 {\n    order: -1; }\n  .flex-order-lg-0 {\n    order: 0; }\n  .flex-order-lg-1 {\n    order: 1; }\n  .flex-order-lg-2 {\n    order: 2; }\n  .flex-order-lg-3 {\n    order: 3; }\n  .flex-order-lg-4 {\n    order: 4; }\n  .flex-order-lg-5 {\n    order: 5; }\n  .flex-order-lg-6 {\n    order: 6; }\n  .flex-order-lg-7 {\n    order: 7; }\n  .flex-order-lg-8 {\n    order: 8; }\n  .flex-order-lg-9 {\n    order: 9; }\n  .flex-order-lg-10 {\n    order: 10; }\n  .flex-order-lg-11 {\n    order: 11; }\n  .flex-order-lg-12 {\n    order: 12; }\n  .flex-order-lg-13 {\n    order: 13; }\n  .flex-order-lg-14 {\n    order: 14; }\n  .flex-order-lg-15 {\n    order: 15; }\n  .flex-order-lg-16 {\n    order: 16; }\n  .flex-order-lg-17 {\n    order: 17; }\n  .flex-order-lg-18 {\n    order: 18; }\n  .flex-order-lg-19 {\n    order: 19; }\n  .flex-order-lg-20 {\n    order: 20; }\n  .offset-lg-0, .flex-offset-lg-0 {\n    margin-left: 0; }\n    [dir=rtl] .offset-lg-0, [dir=rtl] .flex-offset-lg-0 {\n      margin-left: auto;\n      margin-right: 0; }\n  .offset-lg-5, .flex-offset-lg-5 {\n    margin-left: 5%; }\n    [dir=rtl] .offset-lg-5, [dir=rtl] .flex-offset-lg-5 {\n      margin-left: auto;\n      margin-right: 5%; }\n  .offset-lg-10, .flex-offset-lg-10 {\n    margin-left: 10%; }\n    [dir=rtl] .offset-lg-10, [dir=rtl] .flex-offset-lg-10 {\n      margin-left: auto;\n      margin-right: 10%; }\n  .offset-lg-15, .flex-offset-lg-15 {\n    margin-left: 15%; }\n    [dir=rtl] .offset-lg-15, [dir=rtl] .flex-offset-lg-15 {\n      margin-left: auto;\n      margin-right: 15%; }\n  .offset-lg-20, .flex-offset-lg-20 {\n    margin-left: 20%; }\n    [dir=rtl] .offset-lg-20, [dir=rtl] .flex-offset-lg-20 {\n      margin-left: auto;\n      margin-right: 20%; }\n  .offset-lg-25, .flex-offset-lg-25 {\n    margin-left: 25%; }\n    [dir=rtl] .offset-lg-25, [dir=rtl] .flex-offset-lg-25 {\n      margin-left: auto;\n      margin-right: 25%; }\n  .offset-lg-30, .flex-offset-lg-30 {\n    margin-left: 30%; }\n    [dir=rtl] .offset-lg-30, [dir=rtl] .flex-offset-lg-30 {\n      margin-left: auto;\n      margin-right: 30%; }\n  .offset-lg-35, .flex-offset-lg-35 {\n    margin-left: 35%; }\n    [dir=rtl] .offset-lg-35, [dir=rtl] .flex-offset-lg-35 {\n      margin-left: auto;\n      margin-right: 35%; }\n  .offset-lg-40, .flex-offset-lg-40 {\n    margin-left: 40%; }\n    [dir=rtl] .offset-lg-40, [dir=rtl] .flex-offset-lg-40 {\n      margin-left: auto;\n      margin-right: 40%; }\n  .offset-lg-45, .flex-offset-lg-45 {\n    margin-left: 45%; }\n    [dir=rtl] .offset-lg-45, [dir=rtl] .flex-offset-lg-45 {\n      margin-left: auto;\n      margin-right: 45%; }\n  .offset-lg-50, .flex-offset-lg-50 {\n    margin-left: 50%; }\n    [dir=rtl] .offset-lg-50, [dir=rtl] .flex-offset-lg-50 {\n      margin-left: auto;\n      margin-right: 50%; }\n  .offset-lg-55, .flex-offset-lg-55 {\n    margin-left: 55%; }\n    [dir=rtl] .offset-lg-55, [dir=rtl] .flex-offset-lg-55 {\n      margin-left: auto;\n      margin-right: 55%; }\n  .offset-lg-60, .flex-offset-lg-60 {\n    margin-left: 60%; }\n    [dir=rtl] .offset-lg-60, [dir=rtl] .flex-offset-lg-60 {\n      margin-left: auto;\n      margin-right: 60%; }\n  .offset-lg-65, .flex-offset-lg-65 {\n    margin-left: 65%; }\n    [dir=rtl] .offset-lg-65, [dir=rtl] .flex-offset-lg-65 {\n      margin-left: auto;\n      margin-right: 65%; }\n  .offset-lg-70, .flex-offset-lg-70 {\n    margin-left: 70%; }\n    [dir=rtl] .offset-lg-70, [dir=rtl] .flex-offset-lg-70 {\n      margin-left: auto;\n      margin-right: 70%; }\n  .offset-lg-75, .flex-offset-lg-75 {\n    margin-left: 75%; }\n    [dir=rtl] .offset-lg-75, [dir=rtl] .flex-offset-lg-75 {\n      margin-left: auto;\n      margin-right: 75%; }\n  .offset-lg-80, .flex-offset-lg-80 {\n    margin-left: 80%; }\n    [dir=rtl] .offset-lg-80, [dir=rtl] .flex-offset-lg-80 {\n      margin-left: auto;\n      margin-right: 80%; }\n  .offset-lg-85, .flex-offset-lg-85 {\n    margin-left: 85%; }\n    [dir=rtl] .offset-lg-85, [dir=rtl] .flex-offset-lg-85 {\n      margin-left: auto;\n      margin-right: 85%; }\n  .offset-lg-90, .flex-offset-lg-90 {\n    margin-left: 90%; }\n    [dir=rtl] .offset-lg-90, [dir=rtl] .flex-offset-lg-90 {\n      margin-left: auto;\n      margin-right: 90%; }\n  .offset-lg-95, .flex-offset-lg-95 {\n    margin-left: 95%; }\n    [dir=rtl] .offset-lg-95, [dir=rtl] .flex-offset-lg-95 {\n      margin-left: auto;\n      margin-right: 95%; }\n  .offset-lg-33, .flex-offset-lg-33 {\n    margin-left: calc(100% / 3); }\n  .offset-lg-66, .flex-offset-lg-66 {\n    margin-left: calc(200% / 3); }\n    [dir=rtl] .offset-lg-66, [dir=rtl] .flex-offset-lg-66 {\n      margin-left: auto;\n      margin-right: calc(200% / 3); }\n  .layout-align-lg,\n  .layout-align-lg-start-stretch {\n    justify-content: flex-start;\n    align-content: stretch;\n    align-items: stretch; }\n  .layout-align-lg-start,\n  .layout-align-lg-start-start,\n  .layout-align-lg-start-center,\n  .layout-align-lg-start-end,\n  .layout-align-lg-start-stretch {\n    justify-content: flex-start; }\n  .layout-align-lg-center,\n  .layout-align-lg-center-start,\n  .layout-align-lg-center-center,\n  .layout-align-lg-center-end,\n  .layout-align-lg-center-stretch {\n    justify-content: center; }\n  .layout-align-lg-end,\n  .layout-align-lg-end-start,\n  .layout-align-lg-end-center,\n  .layout-align-lg-end-end,\n  .layout-align-lg-end-stretch {\n    justify-content: flex-end; }\n  .layout-align-lg-space-around,\n  .layout-align-lg-space-around-center,\n  .layout-align-lg-space-around-start,\n  .layout-align-lg-space-around-end,\n  .layout-align-lg-space-around-stretch {\n    justify-content: space-around; }\n  .layout-align-lg-space-between,\n  .layout-align-lg-space-between-center,\n  .layout-align-lg-space-between-start,\n  .layout-align-lg-space-between-end,\n  .layout-align-lg-space-between-stretch {\n    justify-content: space-between; }\n  .layout-align-lg-start-start,\n  .layout-align-lg-center-start,\n  .layout-align-lg-end-start,\n  .layout-align-lg-space-between-start,\n  .layout-align-lg-space-around-start {\n    align-items: flex-start;\n    align-content: flex-start; }\n  .layout-align-lg-start-center,\n  .layout-align-lg-center-center,\n  .layout-align-lg-end-center,\n  .layout-align-lg-space-between-center,\n  .layout-align-lg-space-around-center {\n    align-items: center;\n    align-content: center;\n    max-width: 100%; }\n  .layout-align-lg-start-center > *,\n  .layout-align-lg-center-center > *,\n  .layout-align-lg-end-center > *,\n  .layout-align-lg-space-between-center > *,\n  .layout-align-lg-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box; }\n  .layout-align-lg-start-end,\n  .layout-align-lg-center-end,\n  .layout-align-lg-end-end,\n  .layout-align-lg-space-between-end,\n  .layout-align-lg-space-around-end {\n    align-items: flex-end;\n    align-content: flex-end; }\n  .layout-align-lg-start-stretch,\n  .layout-align-lg-center-stretch,\n  .layout-align-lg-end-stretch,\n  .layout-align-lg-space-between-stretch,\n  .layout-align-lg-space-around-stretch {\n    align-items: stretch;\n    align-content: stretch; }\n  .flex-lg {\n    flex: 1;\n    box-sizing: border-box; }\n  .flex-lg-grow {\n    flex: 1 1 100%;\n    box-sizing: border-box; }\n  .flex-lg-initial {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-lg-auto {\n    flex: 1 1 auto;\n    box-sizing: border-box; }\n  .flex-lg-none {\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n  .flex-lg-noshrink {\n    flex: 1 0 auto;\n    box-sizing: border-box; }\n  .flex-lg-nogrow {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-lg-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-column > .flex-lg-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-lg-column > .flex-lg-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n    min-height: 0; }\n  .flex-lg-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .flex-lg-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .flex-lg-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .flex-lg-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .flex-lg-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .flex-lg-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .flex-lg-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .flex-lg-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .flex-lg-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .flex-lg-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .flex-lg-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .flex-lg-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .flex-lg-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .flex-lg-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .flex-lg-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .flex-lg-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .flex-lg-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .flex-lg-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .flex-lg-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .flex-lg-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-33 {\n    flex: 1 1 33.33%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-lg-66 {\n    flex: 1 1 66.66%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-33 {\n    flex: 1 1 33.33%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-column > .flex-lg-66 {\n    flex: 1 1 66.66%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-33 {\n    flex: 1 1 100%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex-lg-66 {\n    flex: 1 1 100%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-lg-row > .flex {\n    min-width: 0; }\n  .layout-lg-column > .flex-lg-33 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex-lg-66 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-lg-column > .flex {\n    min-height: 0; }\n  .layout-lg, .layout-lg-column, .layout-lg-row {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .layout-lg-column {\n    flex-direction: column; }\n  .layout-lg-row {\n    flex-direction: row; } }\n\n@media (min-width: 1920px) {\n  .flex-order-gt-lg--20 {\n    order: -20; }\n  .flex-order-gt-lg--19 {\n    order: -19; }\n  .flex-order-gt-lg--18 {\n    order: -18; }\n  .flex-order-gt-lg--17 {\n    order: -17; }\n  .flex-order-gt-lg--16 {\n    order: -16; }\n  .flex-order-gt-lg--15 {\n    order: -15; }\n  .flex-order-gt-lg--14 {\n    order: -14; }\n  .flex-order-gt-lg--13 {\n    order: -13; }\n  .flex-order-gt-lg--12 {\n    order: -12; }\n  .flex-order-gt-lg--11 {\n    order: -11; }\n  .flex-order-gt-lg--10 {\n    order: -10; }\n  .flex-order-gt-lg--9 {\n    order: -9; }\n  .flex-order-gt-lg--8 {\n    order: -8; }\n  .flex-order-gt-lg--7 {\n    order: -7; }\n  .flex-order-gt-lg--6 {\n    order: -6; }\n  .flex-order-gt-lg--5 {\n    order: -5; }\n  .flex-order-gt-lg--4 {\n    order: -4; }\n  .flex-order-gt-lg--3 {\n    order: -3; }\n  .flex-order-gt-lg--2 {\n    order: -2; }\n  .flex-order-gt-lg--1 {\n    order: -1; }\n  .flex-order-gt-lg-0 {\n    order: 0; }\n  .flex-order-gt-lg-1 {\n    order: 1; }\n  .flex-order-gt-lg-2 {\n    order: 2; }\n  .flex-order-gt-lg-3 {\n    order: 3; }\n  .flex-order-gt-lg-4 {\n    order: 4; }\n  .flex-order-gt-lg-5 {\n    order: 5; }\n  .flex-order-gt-lg-6 {\n    order: 6; }\n  .flex-order-gt-lg-7 {\n    order: 7; }\n  .flex-order-gt-lg-8 {\n    order: 8; }\n  .flex-order-gt-lg-9 {\n    order: 9; }\n  .flex-order-gt-lg-10 {\n    order: 10; }\n  .flex-order-gt-lg-11 {\n    order: 11; }\n  .flex-order-gt-lg-12 {\n    order: 12; }\n  .flex-order-gt-lg-13 {\n    order: 13; }\n  .flex-order-gt-lg-14 {\n    order: 14; }\n  .flex-order-gt-lg-15 {\n    order: 15; }\n  .flex-order-gt-lg-16 {\n    order: 16; }\n  .flex-order-gt-lg-17 {\n    order: 17; }\n  .flex-order-gt-lg-18 {\n    order: 18; }\n  .flex-order-gt-lg-19 {\n    order: 19; }\n  .flex-order-gt-lg-20 {\n    order: 20; }\n  .offset-gt-lg-0, .flex-offset-gt-lg-0 {\n    margin-left: 0; }\n    [dir=rtl] .offset-gt-lg-0, [dir=rtl] .flex-offset-gt-lg-0 {\n      margin-left: auto;\n      margin-right: 0; }\n  .offset-gt-lg-5, .flex-offset-gt-lg-5 {\n    margin-left: 5%; }\n    [dir=rtl] .offset-gt-lg-5, [dir=rtl] .flex-offset-gt-lg-5 {\n      margin-left: auto;\n      margin-right: 5%; }\n  .offset-gt-lg-10, .flex-offset-gt-lg-10 {\n    margin-left: 10%; }\n    [dir=rtl] .offset-gt-lg-10, [dir=rtl] .flex-offset-gt-lg-10 {\n      margin-left: auto;\n      margin-right: 10%; }\n  .offset-gt-lg-15, .flex-offset-gt-lg-15 {\n    margin-left: 15%; }\n    [dir=rtl] .offset-gt-lg-15, [dir=rtl] .flex-offset-gt-lg-15 {\n      margin-left: auto;\n      margin-right: 15%; }\n  .offset-gt-lg-20, .flex-offset-gt-lg-20 {\n    margin-left: 20%; }\n    [dir=rtl] .offset-gt-lg-20, [dir=rtl] .flex-offset-gt-lg-20 {\n      margin-left: auto;\n      margin-right: 20%; }\n  .offset-gt-lg-25, .flex-offset-gt-lg-25 {\n    margin-left: 25%; }\n    [dir=rtl] .offset-gt-lg-25, [dir=rtl] .flex-offset-gt-lg-25 {\n      margin-left: auto;\n      margin-right: 25%; }\n  .offset-gt-lg-30, .flex-offset-gt-lg-30 {\n    margin-left: 30%; }\n    [dir=rtl] .offset-gt-lg-30, [dir=rtl] .flex-offset-gt-lg-30 {\n      margin-left: auto;\n      margin-right: 30%; }\n  .offset-gt-lg-35, .flex-offset-gt-lg-35 {\n    margin-left: 35%; }\n    [dir=rtl] .offset-gt-lg-35, [dir=rtl] .flex-offset-gt-lg-35 {\n      margin-left: auto;\n      margin-right: 35%; }\n  .offset-gt-lg-40, .flex-offset-gt-lg-40 {\n    margin-left: 40%; }\n    [dir=rtl] .offset-gt-lg-40, [dir=rtl] .flex-offset-gt-lg-40 {\n      margin-left: auto;\n      margin-right: 40%; }\n  .offset-gt-lg-45, .flex-offset-gt-lg-45 {\n    margin-left: 45%; }\n    [dir=rtl] .offset-gt-lg-45, [dir=rtl] .flex-offset-gt-lg-45 {\n      margin-left: auto;\n      margin-right: 45%; }\n  .offset-gt-lg-50, .flex-offset-gt-lg-50 {\n    margin-left: 50%; }\n    [dir=rtl] .offset-gt-lg-50, [dir=rtl] .flex-offset-gt-lg-50 {\n      margin-left: auto;\n      margin-right: 50%; }\n  .offset-gt-lg-55, .flex-offset-gt-lg-55 {\n    margin-left: 55%; }\n    [dir=rtl] .offset-gt-lg-55, [dir=rtl] .flex-offset-gt-lg-55 {\n      margin-left: auto;\n      margin-right: 55%; }\n  .offset-gt-lg-60, .flex-offset-gt-lg-60 {\n    margin-left: 60%; }\n    [dir=rtl] .offset-gt-lg-60, [dir=rtl] .flex-offset-gt-lg-60 {\n      margin-left: auto;\n      margin-right: 60%; }\n  .offset-gt-lg-65, .flex-offset-gt-lg-65 {\n    margin-left: 65%; }\n    [dir=rtl] .offset-gt-lg-65, [dir=rtl] .flex-offset-gt-lg-65 {\n      margin-left: auto;\n      margin-right: 65%; }\n  .offset-gt-lg-70, .flex-offset-gt-lg-70 {\n    margin-left: 70%; }\n    [dir=rtl] .offset-gt-lg-70, [dir=rtl] .flex-offset-gt-lg-70 {\n      margin-left: auto;\n      margin-right: 70%; }\n  .offset-gt-lg-75, .flex-offset-gt-lg-75 {\n    margin-left: 75%; }\n    [dir=rtl] .offset-gt-lg-75, [dir=rtl] .flex-offset-gt-lg-75 {\n      margin-left: auto;\n      margin-right: 75%; }\n  .offset-gt-lg-80, .flex-offset-gt-lg-80 {\n    margin-left: 80%; }\n    [dir=rtl] .offset-gt-lg-80, [dir=rtl] .flex-offset-gt-lg-80 {\n      margin-left: auto;\n      margin-right: 80%; }\n  .offset-gt-lg-85, .flex-offset-gt-lg-85 {\n    margin-left: 85%; }\n    [dir=rtl] .offset-gt-lg-85, [dir=rtl] .flex-offset-gt-lg-85 {\n      margin-left: auto;\n      margin-right: 85%; }\n  .offset-gt-lg-90, .flex-offset-gt-lg-90 {\n    margin-left: 90%; }\n    [dir=rtl] .offset-gt-lg-90, [dir=rtl] .flex-offset-gt-lg-90 {\n      margin-left: auto;\n      margin-right: 90%; }\n  .offset-gt-lg-95, .flex-offset-gt-lg-95 {\n    margin-left: 95%; }\n    [dir=rtl] .offset-gt-lg-95, [dir=rtl] .flex-offset-gt-lg-95 {\n      margin-left: auto;\n      margin-right: 95%; }\n  .offset-gt-lg-33, .flex-offset-gt-lg-33 {\n    margin-left: calc(100% / 3); }\n  .offset-gt-lg-66, .flex-offset-gt-lg-66 {\n    margin-left: calc(200% / 3); }\n    [dir=rtl] .offset-gt-lg-66, [dir=rtl] .flex-offset-gt-lg-66 {\n      margin-left: auto;\n      margin-right: calc(200% / 3); }\n  .layout-align-gt-lg,\n  .layout-align-gt-lg-start-stretch {\n    justify-content: flex-start;\n    align-content: stretch;\n    align-items: stretch; }\n  .layout-align-gt-lg-start,\n  .layout-align-gt-lg-start-start,\n  .layout-align-gt-lg-start-center,\n  .layout-align-gt-lg-start-end,\n  .layout-align-gt-lg-start-stretch {\n    justify-content: flex-start; }\n  .layout-align-gt-lg-center,\n  .layout-align-gt-lg-center-start,\n  .layout-align-gt-lg-center-center,\n  .layout-align-gt-lg-center-end,\n  .layout-align-gt-lg-center-stretch {\n    justify-content: center; }\n  .layout-align-gt-lg-end,\n  .layout-align-gt-lg-end-start,\n  .layout-align-gt-lg-end-center,\n  .layout-align-gt-lg-end-end,\n  .layout-align-gt-lg-end-stretch {\n    justify-content: flex-end; }\n  .layout-align-gt-lg-space-around,\n  .layout-align-gt-lg-space-around-center,\n  .layout-align-gt-lg-space-around-start,\n  .layout-align-gt-lg-space-around-end,\n  .layout-align-gt-lg-space-around-stretch {\n    justify-content: space-around; }\n  .layout-align-gt-lg-space-between,\n  .layout-align-gt-lg-space-between-center,\n  .layout-align-gt-lg-space-between-start,\n  .layout-align-gt-lg-space-between-end,\n  .layout-align-gt-lg-space-between-stretch {\n    justify-content: space-between; }\n  .layout-align-gt-lg-start-start,\n  .layout-align-gt-lg-center-start,\n  .layout-align-gt-lg-end-start,\n  .layout-align-gt-lg-space-between-start,\n  .layout-align-gt-lg-space-around-start {\n    align-items: flex-start;\n    align-content: flex-start; }\n  .layout-align-gt-lg-start-center,\n  .layout-align-gt-lg-center-center,\n  .layout-align-gt-lg-end-center,\n  .layout-align-gt-lg-space-between-center,\n  .layout-align-gt-lg-space-around-center {\n    align-items: center;\n    align-content: center;\n    max-width: 100%; }\n  .layout-align-gt-lg-start-center > *,\n  .layout-align-gt-lg-center-center > *,\n  .layout-align-gt-lg-end-center > *,\n  .layout-align-gt-lg-space-between-center > *,\n  .layout-align-gt-lg-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box; }\n  .layout-align-gt-lg-start-end,\n  .layout-align-gt-lg-center-end,\n  .layout-align-gt-lg-end-end,\n  .layout-align-gt-lg-space-between-end,\n  .layout-align-gt-lg-space-around-end {\n    align-items: flex-end;\n    align-content: flex-end; }\n  .layout-align-gt-lg-start-stretch,\n  .layout-align-gt-lg-center-stretch,\n  .layout-align-gt-lg-end-stretch,\n  .layout-align-gt-lg-space-between-stretch,\n  .layout-align-gt-lg-space-around-stretch {\n    align-items: stretch;\n    align-content: stretch; }\n  .flex-gt-lg {\n    flex: 1;\n    box-sizing: border-box; }\n  .flex-gt-lg-grow {\n    flex: 1 1 100%;\n    box-sizing: border-box; }\n  .flex-gt-lg-initial {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-lg-auto {\n    flex: 1 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-lg-none {\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n  .flex-gt-lg-noshrink {\n    flex: 1 0 auto;\n    box-sizing: border-box; }\n  .flex-gt-lg-nogrow {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-gt-lg-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-column > .flex-gt-lg-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-gt-lg-column > .flex-gt-lg-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n    min-height: 0; }\n  .flex-gt-lg-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .flex-gt-lg-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .flex-gt-lg-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .flex-gt-lg-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .flex-gt-lg-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .flex-gt-lg-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .flex-gt-lg-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .flex-gt-lg-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .flex-gt-lg-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .flex-gt-lg-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .flex-gt-lg-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .flex-gt-lg-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .flex-gt-lg-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .flex-gt-lg-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .flex-gt-lg-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .flex-gt-lg-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .flex-gt-lg-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .flex-gt-lg-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .flex-gt-lg-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .flex-gt-lg-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-33 {\n    flex: 1 1 33.33%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-gt-lg-66 {\n    flex: 1 1 66.66%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-33 {\n    flex: 1 1 33.33%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-column > .flex-gt-lg-66 {\n    flex: 1 1 66.66%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-33 {\n    flex: 1 1 100%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex-gt-lg-66 {\n    flex: 1 1 100%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-gt-lg-row > .flex {\n    min-width: 0; }\n  .layout-gt-lg-column > .flex-gt-lg-33 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex-gt-lg-66 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-gt-lg-column > .flex {\n    min-height: 0; }\n  .layout-gt-lg, .layout-gt-lg-column, .layout-gt-lg-row {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .layout-gt-lg-column {\n    flex-direction: column; }\n  .layout-gt-lg-row {\n    flex-direction: row; }\n  .flex-order-xl--20 {\n    order: -20; }\n  .flex-order-xl--19 {\n    order: -19; }\n  .flex-order-xl--18 {\n    order: -18; }\n  .flex-order-xl--17 {\n    order: -17; }\n  .flex-order-xl--16 {\n    order: -16; }\n  .flex-order-xl--15 {\n    order: -15; }\n  .flex-order-xl--14 {\n    order: -14; }\n  .flex-order-xl--13 {\n    order: -13; }\n  .flex-order-xl--12 {\n    order: -12; }\n  .flex-order-xl--11 {\n    order: -11; }\n  .flex-order-xl--10 {\n    order: -10; }\n  .flex-order-xl--9 {\n    order: -9; }\n  .flex-order-xl--8 {\n    order: -8; }\n  .flex-order-xl--7 {\n    order: -7; }\n  .flex-order-xl--6 {\n    order: -6; }\n  .flex-order-xl--5 {\n    order: -5; }\n  .flex-order-xl--4 {\n    order: -4; }\n  .flex-order-xl--3 {\n    order: -3; }\n  .flex-order-xl--2 {\n    order: -2; }\n  .flex-order-xl--1 {\n    order: -1; }\n  .flex-order-xl-0 {\n    order: 0; }\n  .flex-order-xl-1 {\n    order: 1; }\n  .flex-order-xl-2 {\n    order: 2; }\n  .flex-order-xl-3 {\n    order: 3; }\n  .flex-order-xl-4 {\n    order: 4; }\n  .flex-order-xl-5 {\n    order: 5; }\n  .flex-order-xl-6 {\n    order: 6; }\n  .flex-order-xl-7 {\n    order: 7; }\n  .flex-order-xl-8 {\n    order: 8; }\n  .flex-order-xl-9 {\n    order: 9; }\n  .flex-order-xl-10 {\n    order: 10; }\n  .flex-order-xl-11 {\n    order: 11; }\n  .flex-order-xl-12 {\n    order: 12; }\n  .flex-order-xl-13 {\n    order: 13; }\n  .flex-order-xl-14 {\n    order: 14; }\n  .flex-order-xl-15 {\n    order: 15; }\n  .flex-order-xl-16 {\n    order: 16; }\n  .flex-order-xl-17 {\n    order: 17; }\n  .flex-order-xl-18 {\n    order: 18; }\n  .flex-order-xl-19 {\n    order: 19; }\n  .flex-order-xl-20 {\n    order: 20; }\n  .offset-xl-0, .flex-offset-xl-0 {\n    margin-left: 0; }\n    [dir=rtl] .offset-xl-0, [dir=rtl] .flex-offset-xl-0 {\n      margin-left: auto;\n      margin-right: 0; }\n  .offset-xl-5, .flex-offset-xl-5 {\n    margin-left: 5%; }\n    [dir=rtl] .offset-xl-5, [dir=rtl] .flex-offset-xl-5 {\n      margin-left: auto;\n      margin-right: 5%; }\n  .offset-xl-10, .flex-offset-xl-10 {\n    margin-left: 10%; }\n    [dir=rtl] .offset-xl-10, [dir=rtl] .flex-offset-xl-10 {\n      margin-left: auto;\n      margin-right: 10%; }\n  .offset-xl-15, .flex-offset-xl-15 {\n    margin-left: 15%; }\n    [dir=rtl] .offset-xl-15, [dir=rtl] .flex-offset-xl-15 {\n      margin-left: auto;\n      margin-right: 15%; }\n  .offset-xl-20, .flex-offset-xl-20 {\n    margin-left: 20%; }\n    [dir=rtl] .offset-xl-20, [dir=rtl] .flex-offset-xl-20 {\n      margin-left: auto;\n      margin-right: 20%; }\n  .offset-xl-25, .flex-offset-xl-25 {\n    margin-left: 25%; }\n    [dir=rtl] .offset-xl-25, [dir=rtl] .flex-offset-xl-25 {\n      margin-left: auto;\n      margin-right: 25%; }\n  .offset-xl-30, .flex-offset-xl-30 {\n    margin-left: 30%; }\n    [dir=rtl] .offset-xl-30, [dir=rtl] .flex-offset-xl-30 {\n      margin-left: auto;\n      margin-right: 30%; }\n  .offset-xl-35, .flex-offset-xl-35 {\n    margin-left: 35%; }\n    [dir=rtl] .offset-xl-35, [dir=rtl] .flex-offset-xl-35 {\n      margin-left: auto;\n      margin-right: 35%; }\n  .offset-xl-40, .flex-offset-xl-40 {\n    margin-left: 40%; }\n    [dir=rtl] .offset-xl-40, [dir=rtl] .flex-offset-xl-40 {\n      margin-left: auto;\n      margin-right: 40%; }\n  .offset-xl-45, .flex-offset-xl-45 {\n    margin-left: 45%; }\n    [dir=rtl] .offset-xl-45, [dir=rtl] .flex-offset-xl-45 {\n      margin-left: auto;\n      margin-right: 45%; }\n  .offset-xl-50, .flex-offset-xl-50 {\n    margin-left: 50%; }\n    [dir=rtl] .offset-xl-50, [dir=rtl] .flex-offset-xl-50 {\n      margin-left: auto;\n      margin-right: 50%; }\n  .offset-xl-55, .flex-offset-xl-55 {\n    margin-left: 55%; }\n    [dir=rtl] .offset-xl-55, [dir=rtl] .flex-offset-xl-55 {\n      margin-left: auto;\n      margin-right: 55%; }\n  .offset-xl-60, .flex-offset-xl-60 {\n    margin-left: 60%; }\n    [dir=rtl] .offset-xl-60, [dir=rtl] .flex-offset-xl-60 {\n      margin-left: auto;\n      margin-right: 60%; }\n  .offset-xl-65, .flex-offset-xl-65 {\n    margin-left: 65%; }\n    [dir=rtl] .offset-xl-65, [dir=rtl] .flex-offset-xl-65 {\n      margin-left: auto;\n      margin-right: 65%; }\n  .offset-xl-70, .flex-offset-xl-70 {\n    margin-left: 70%; }\n    [dir=rtl] .offset-xl-70, [dir=rtl] .flex-offset-xl-70 {\n      margin-left: auto;\n      margin-right: 70%; }\n  .offset-xl-75, .flex-offset-xl-75 {\n    margin-left: 75%; }\n    [dir=rtl] .offset-xl-75, [dir=rtl] .flex-offset-xl-75 {\n      margin-left: auto;\n      margin-right: 75%; }\n  .offset-xl-80, .flex-offset-xl-80 {\n    margin-left: 80%; }\n    [dir=rtl] .offset-xl-80, [dir=rtl] .flex-offset-xl-80 {\n      margin-left: auto;\n      margin-right: 80%; }\n  .offset-xl-85, .flex-offset-xl-85 {\n    margin-left: 85%; }\n    [dir=rtl] .offset-xl-85, [dir=rtl] .flex-offset-xl-85 {\n      margin-left: auto;\n      margin-right: 85%; }\n  .offset-xl-90, .flex-offset-xl-90 {\n    margin-left: 90%; }\n    [dir=rtl] .offset-xl-90, [dir=rtl] .flex-offset-xl-90 {\n      margin-left: auto;\n      margin-right: 90%; }\n  .offset-xl-95, .flex-offset-xl-95 {\n    margin-left: 95%; }\n    [dir=rtl] .offset-xl-95, [dir=rtl] .flex-offset-xl-95 {\n      margin-left: auto;\n      margin-right: 95%; }\n  .offset-xl-33, .flex-offset-xl-33 {\n    margin-left: calc(100% / 3); }\n  .offset-xl-66, .flex-offset-xl-66 {\n    margin-left: calc(200% / 3); }\n    [dir=rtl] .offset-xl-66, [dir=rtl] .flex-offset-xl-66 {\n      margin-left: auto;\n      margin-right: calc(200% / 3); }\n  .layout-align-xl,\n  .layout-align-xl-start-stretch {\n    justify-content: flex-start;\n    align-content: stretch;\n    align-items: stretch; }\n  .layout-align-xl-start,\n  .layout-align-xl-start-start,\n  .layout-align-xl-start-center,\n  .layout-align-xl-start-end,\n  .layout-align-xl-start-stretch {\n    justify-content: flex-start; }\n  .layout-align-xl-center,\n  .layout-align-xl-center-start,\n  .layout-align-xl-center-center,\n  .layout-align-xl-center-end,\n  .layout-align-xl-center-stretch {\n    justify-content: center; }\n  .layout-align-xl-end,\n  .layout-align-xl-end-start,\n  .layout-align-xl-end-center,\n  .layout-align-xl-end-end,\n  .layout-align-xl-end-stretch {\n    justify-content: flex-end; }\n  .layout-align-xl-space-around,\n  .layout-align-xl-space-around-center,\n  .layout-align-xl-space-around-start,\n  .layout-align-xl-space-around-end,\n  .layout-align-xl-space-around-stretch {\n    justify-content: space-around; }\n  .layout-align-xl-space-between,\n  .layout-align-xl-space-between-center,\n  .layout-align-xl-space-between-start,\n  .layout-align-xl-space-between-end,\n  .layout-align-xl-space-between-stretch {\n    justify-content: space-between; }\n  .layout-align-xl-start-start,\n  .layout-align-xl-center-start,\n  .layout-align-xl-end-start,\n  .layout-align-xl-space-between-start,\n  .layout-align-xl-space-around-start {\n    align-items: flex-start;\n    align-content: flex-start; }\n  .layout-align-xl-start-center,\n  .layout-align-xl-center-center,\n  .layout-align-xl-end-center,\n  .layout-align-xl-space-between-center,\n  .layout-align-xl-space-around-center {\n    align-items: center;\n    align-content: center;\n    max-width: 100%; }\n  .layout-align-xl-start-center > *,\n  .layout-align-xl-center-center > *,\n  .layout-align-xl-end-center > *,\n  .layout-align-xl-space-between-center > *,\n  .layout-align-xl-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box; }\n  .layout-align-xl-start-end,\n  .layout-align-xl-center-end,\n  .layout-align-xl-end-end,\n  .layout-align-xl-space-between-end,\n  .layout-align-xl-space-around-end {\n    align-items: flex-end;\n    align-content: flex-end; }\n  .layout-align-xl-start-stretch,\n  .layout-align-xl-center-stretch,\n  .layout-align-xl-end-stretch,\n  .layout-align-xl-space-between-stretch,\n  .layout-align-xl-space-around-stretch {\n    align-items: stretch;\n    align-content: stretch; }\n  .flex-xl {\n    flex: 1;\n    box-sizing: border-box; }\n  .flex-xl-grow {\n    flex: 1 1 100%;\n    box-sizing: border-box; }\n  .flex-xl-initial {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-xl-auto {\n    flex: 1 1 auto;\n    box-sizing: border-box; }\n  .flex-xl-none {\n    flex: 0 0 auto;\n    box-sizing: border-box; }\n  .flex-xl-noshrink {\n    flex: 1 0 auto;\n    box-sizing: border-box; }\n  .flex-xl-nogrow {\n    flex: 0 1 auto;\n    box-sizing: border-box; }\n  .flex-xl-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-column > .flex-xl-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-0 {\n    flex: 1 1 100%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n    min-width: 0; }\n  .layout-xl-column > .flex-xl-0 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n    min-height: 0; }\n  .flex-xl-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-5 {\n    flex: 1 1 100%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-5 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box; }\n  .flex-xl-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-10 {\n    flex: 1 1 100%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-10 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box; }\n  .flex-xl-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-15 {\n    flex: 1 1 100%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-15 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box; }\n  .flex-xl-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-20 {\n    flex: 1 1 100%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-20 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box; }\n  .flex-xl-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-25 {\n    flex: 1 1 100%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-25 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box; }\n  .flex-xl-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-30 {\n    flex: 1 1 100%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-30 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box; }\n  .flex-xl-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-35 {\n    flex: 1 1 100%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-35 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box; }\n  .flex-xl-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-40 {\n    flex: 1 1 100%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-40 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box; }\n  .flex-xl-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-45 {\n    flex: 1 1 100%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-45 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box; }\n  .flex-xl-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-50 {\n    flex: 1 1 100%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-50 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box; }\n  .flex-xl-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-55 {\n    flex: 1 1 100%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-55 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box; }\n  .flex-xl-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-60 {\n    flex: 1 1 100%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-60 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box; }\n  .flex-xl-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-65 {\n    flex: 1 1 100%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-65 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box; }\n  .flex-xl-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-70 {\n    flex: 1 1 100%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-70 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box; }\n  .flex-xl-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-75 {\n    flex: 1 1 100%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-75 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box; }\n  .flex-xl-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-80 {\n    flex: 1 1 100%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-80 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box; }\n  .flex-xl-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-85 {\n    flex: 1 1 100%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-85 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box; }\n  .flex-xl-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-90 {\n    flex: 1 1 100%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-90 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box; }\n  .flex-xl-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-95 {\n    flex: 1 1 100%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-95 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box; }\n  .flex-xl-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-100 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-33 {\n    flex: 1 1 33.33%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-row > .flex-xl-66 {\n    flex: 1 1 66.66%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-33 {\n    flex: 1 1 33.33%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-column > .flex-xl-66 {\n    flex: 1 1 66.66%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-33 {\n    flex: 1 1 100%;\n    max-width: 33.33%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex-xl-66 {\n    flex: 1 1 100%;\n    max-width: 66.66%;\n    max-height: 100%;\n    box-sizing: border-box; }\n  .layout-xl-row > .flex {\n    min-width: 0; }\n  .layout-xl-column > .flex-xl-33 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 33.33%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex-xl-66 {\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 66.66%;\n    box-sizing: border-box; }\n  .layout-xl-column > .flex {\n    min-height: 0; }\n  .layout-xl, .layout-xl-column, .layout-xl-row {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .layout-xl-column {\n    flex-direction: column; }\n  .layout-xl-row {\n    flex-direction: row; }\n  .hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show), .hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show), .hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show), .hide-gt-md:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show), .hide-gt-lg:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show) {\n    display: none; }\n  .hide-xl:not(.show-xl):not(.show-gt-lg):not(.show-gt-md):not(.show-gt-sm):not(.show-gt-xs):not(.show) {\n    display: none; } }\n\n@media print {\n  .hide-print:not(.show-print):not(.show) {\n    display: none !important; } }\n\n.app {\n  height: 100%; }\n',""])},645:function(n,exports,e){exports=n.exports=e(80)(),exports.push([n.i,"header {\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  background: #303e49;\n  border: 1px solid #303e49;\n}\nheader h1 {\n  color: #fff;\n  font-size: 18px;\n  font-size: 1.125rem;\n}\n.cd-container {\n  width: 90%;\n  max-width: 1170px;\n  margin: 0 auto;\n}\n.cd-container::after {\n  content: '';\n  display: table;\n  clear: both;\n}\n#cd-timeline {\n  position: relative;\n  padding: 2em 0;\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n#cd-timeline::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 4px;\n  background: #d7e4ed;\n}\n@media only screen and (min-width: 1170px) {\n  #cd-timeline::before {\n    left: 50%;\n  }\n}\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n.cd-timeline-block::after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n@media only screen and (min-width: 1170px) {\n  .cd-timeline-block {\n    margin: 4em 0;\n  }\n  .cd-timeline-block:first-child {\n    margin-top: 0;\n  }\n  .cd-timeline-block:last-child {\n    margin-bottom: 0;\n  }\n}\n.cd-timeline-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05);\n}\n.cd-timeline-img img {\n  display: block;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  margin-left: -12px;\n  margin-top: -12px;\n}\n.cd-timeline-img.cd-picture {\n  background: #75ce66;\n}\n.cd-timeline-img.cd-movie {\n  background: #c03b44;\n}\n.cd-timeline-img.cd-location {\n  background: #f0ca45;\n}\n@media only screen and (min-width: 1170px) {\n  .cd-timeline-img {\n    width: 60px;\n    height: 60px;\n    left: 50%;\n    margin-left: -30px;\n    -webkit-transform: translateZ(0);\n    -webkit-backface-visibility: hidden;\n  }\n  .cssanimations .cd-timeline-img.is-hidden {\n    visibility: hidden;\n  }\n  .cssanimations .cd-timeline-img .bounce-in {\n    visibility: visible;\n    animation: cd-bounce-1 0.6s;\n    -webkit-animation: cd-bounce-1 0.6s;\n    -moz-animation: cd-bounce-1 0.6s;\n  }\n}\n@-moz-keyframes cd-bounce-1 {\n  0% {\n    opacity: 0;\n    -moz-transform: scale(0.5);\n  }\n  60% {\n    opacity: 1;\n    -moz-transform: scale(1.2);\n  }\n  100% {\n    -moz-transform: scale(1);\n  }\n}\n@-webkit-keyframes cd-bounce-1 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.5);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n  }\n}\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: #fff;\n  border-radius: 0.25em;\n  padding: 1em;\n  box-shadow: 0 3px 0 #d7e4ed;\n}\n.cd-timeline-content::after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n.cd-timeline-content::before {\n  content: '';\n  position: absolute;\n  top: 16px;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid #fff;\n}\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n.cd-timeline-content .cd-read-more {\n  float: right;\n  padding: 0.8em 1em;\n  background: #acb7c0;\n  color: #fff;\n  border-radius: 0.25em;\n}\n.cd-timeline-content .cd-date {\n  float: left;\n  padding: 0.8em 0;\n  opacity: 0.7;\n}\n.no-touch .cd-timeline-content .cd-read-more:hover {\n  background-color: #bac4cb;\n}\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n  .cd-timeline-content .cd-read-more,\n  .cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n@media only screen and (min-width: 1170px) {\n  .cd-timeline-content {\n    margin-left: 0;\n    padding: 1.6em;\n    width: 40%;\n  }\n  .cd-timeline-content::before {\n    top: 24px;\n    left: 100%;\n    border-color: transparent;\n    border-left-color: #fff;\n  }\n  .cd-timeline-content .cd-read-more {\n    float: left;\n  }\n  .cd-timeline-content .cd-date {\n    position: absolute;\n    width: 100%;\n    left: 122%;\n    top: 6px;\n    font-size: 16px;\n    font-size: 1rem;\n  }\n  .cd-timeline-block:nth-child(even) .cd-timeline-content {\n    float: right;\n  }\n  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {\n    float: right;\n  }\n  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {\n    left: auto;\n    right: 122%;\n    text-align: right;\n  }\n  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {\n    top: 24px;\n    left: auto;\n    right: 100%;\n    border-color: transparent;\n    border-right-color: #fff;\n  }\n  .cssanimations .cd-timeline-content.is-hidden {\n    visibility: hidden;\n  }\n  .cssanimations .cd-timeline-content.bounce-in {\n    visibility: visible;\n    -webkit-animation: cd-bounce-2 0.6s;\n    -moz-animation: cd-bounce-2 0.6s;\n    animation: cd-bounce-2 0.6s;\n  }\n}\n@media only screen and (min-width: 1170px) {\n  .cssanimations .cd-timeline-block:nth-child(even) .cd-timeline-content.bounce-in {\n    -webkit-animation: cd-bounce-2-inverse 0.6s;\n    -moz-animation: cd-bounce-2-inverse 0.6s;\n    animation: cd-bounce-2-inverse 0.6s;\n  }\n}\n@-moz-keyframes cd-bounce-2 {\n  0% {\n    opacity: 0;\n    -moz-transform: translateX(-100px);\n  }\n  60% {\n    opacity: 1;\n    -moz-transform: translateX(20px);\n  }\n  100% {\n    -moz-transform: translateX(0);\n  }\n}\n@-webkit-keyframes cd-bounce-2 {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@-webkit-keyframes cd-bounce-2-inverse {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@-moz-keyframes cd-bounce-2-inverse {\n  0% {\n    opacity: 0;\n    -moz-transform: translateX(100px);\n  }\n  60% {\n    opacity: 1;\n    -moz-transform: translateX(-20px);\n  }\n  100% {\n    -moz-transform: translateX(0);\n  }\n}\n@-moz-keyframes cd-bounce-1 {\n  0% {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes cd-bounce-1 {\n  0% {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-o-keyframes cd-bounce-1 {\n  0% {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes cd-bounce-1 {\n  0% {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-moz-keyframes cd-bounce-2 {\n  0% {\n    opacity: 0;\n    transform: translateX(-100px);\n    -webkit-transform: translateX(-100px);\n    -moz-transform: translateX(-100px);\n    -ms-transform: translateX(-100px);\n    -o-transform: translateX(-100px);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(20x);\n    -webkit-transform: translateX(20px);\n    -moz-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    -o-transform: translateX(20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    -moz-transform: translateX(0);\n    -ms-transform: translateX(0);\n    -o-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@-webkit-keyframes cd-bounce-2 {\n  0% {\n    opacity: 0;\n    transform: translateX(-100px);\n    -webkit-transform: translateX(-100px);\n    -moz-transform: translateX(-100px);\n    -ms-transform: translateX(-100px);\n    -o-transform: translateX(-100px);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(20x);\n    -webkit-transform: translateX(20px);\n    -moz-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    -o-transform: translateX(20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    -moz-transform: translateX(0);\n    -ms-transform: translateX(0);\n    -o-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@-o-keyframes cd-bounce-2 {\n  0% {\n    opacity: 0;\n    transform: translateX(-100px);\n    -webkit-transform: translateX(-100px);\n    -moz-transform: translateX(-100px);\n    -ms-transform: translateX(-100px);\n    -o-transform: translateX(-100px);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(20x);\n    -webkit-transform: translateX(20px);\n    -moz-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    -o-transform: translateX(20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    -moz-transform: translateX(0);\n    -ms-transform: translateX(0);\n    -o-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@keyframes cd-bounce-2 {\n  0% {\n    opacity: 0;\n    transform: translateX(-100px);\n    -webkit-transform: translateX(-100px);\n    -moz-transform: translateX(-100px);\n    -ms-transform: translateX(-100px);\n    -o-transform: translateX(-100px);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(20x);\n    -webkit-transform: translateX(20px);\n    -moz-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    -o-transform: translateX(20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    -moz-transform: translateX(0);\n    -ms-transform: translateX(0);\n    -o-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@-moz-keyframes cd-bounce-2-inverse {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n    -moz-transform: translateX(100px);\n    -ms-transform: translateX(100px);\n    -o-transform: translateX(100px);\n    transform: translateX(100px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    -moz-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    -o-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    -moz-transform: translateX(0);\n    -ms-transform: translateX(0);\n    -o-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@-webkit-keyframes cd-bounce-2-inverse {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n    -moz-transform: translateX(100px);\n    -ms-transform: translateX(100px);\n    -o-transform: translateX(100px);\n    transform: translateX(100px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    -moz-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    -o-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    -moz-transform: translateX(0);\n    -ms-transform: translateX(0);\n    -o-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@-o-keyframes cd-bounce-2-inverse {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n    -moz-transform: translateX(100px);\n    -ms-transform: translateX(100px);\n    -o-transform: translateX(100px);\n    transform: translateX(100px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    -moz-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    -o-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    -moz-transform: translateX(0);\n    -ms-transform: translateX(0);\n    -o-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@keyframes cd-bounce-2-inverse {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n    -moz-transform: translateX(100px);\n    -ms-transform: translateX(100px);\n    -o-transform: translateX(100px);\n    transform: translateX(100px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    -moz-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    -o-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    -moz-transform: translateX(0);\n    -ms-transform: translateX(0);\n    -o-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n",""])},647:function(n,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=e(654),o=function(n){return n&&n.__esModule?n:{default:n}}(t);e(658);var i={template:o.default};exports.default=i},648:function(n,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=e(63),o=function(n){return n&&n.__esModule?n:{default:n}}(t),i=o.default.module("app.common",[]).name;exports.default=i},649:function(n,exports,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(exports,"__esModule",{value:!0});var o=e(63),i=t(o),r=e(652),a=t(r),d=i.default.module("app.components",[a.default]).name;exports.default=d},650:function(n,exports,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(exports,"__esModule",{value:!0});var o=e(655),i=t(o),r=e(651),a=t(r);e(659);var d={bindings:{},template:i.default,controller:a.default};exports.default=d},651:function(n,exports,e){"use strict";function t(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}Object.defineProperty(exports,"__esModule",{value:!0});var o=e(319),i=function(n){return n&&n.__esModule?n:{default:n}}(o),r=e(239),a=t(r),d=e(660),l=t(d),m=function n(){"ngInject";(0,i.default)(this,n),this.$onInit=function(){},this.text="Hola Amigo",this.logo=l.default,this.timelines=a.data};exports.default=m},652:function(n,exports,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(exports,"__esModule",{value:!0});var o=e(63),i=t(o),r=e(158),a=t(r),d=e(650),l=t(d),m=i.default.module("home",[a.default]).config(["$stateProvider","$urlRouterProvider",function(n,e){"ngInject";e.otherwise("/"),n.state("home",{url:"/",component:"home"})}]).component("home",l.default).name;exports.default=m},653:function(n,exports,e){"use strict";(function($){$(document).ready(function($){function n(n,e){n.each(function(){$(this).offset().top<=$(window).scrollTop()+$(window).height()*e&&$(this).find(".cd-timeline-img").hasClass("is-hidden")&&$(this).find(".cd-timeline-img, .cd-timeline-content").removeClass("is-hidden").addClass("bounce-in")})}var e=$(".cd-timeline-block");!function(n,e){n.each(function(){$(this).offset().top>$(window).scrollTop()+$(window).height()*e&&$(this).find(".cd-timeline-img, .cd-timeline-content").addClass("is-hidden")})}(e,.8),$(window).on("scroll",function(){window.requestAnimationFrame?window.requestAnimationFrame(function(){n(e,.8)}):setTimeout(function(){n(e,.8)},100)})})}).call(exports,e(646))},654:function(n,exports){n.exports='\x3c!-- Place all UI elements intended to be present across all routes in this file --\x3e<div class="app"><ui-view></ui-view></div>'},655:function(n,exports){n.exports='<div ui-view="ui-view"><header><h1>Kobe "Bean" Bryant</h1></header><section class="cd-container" id="cd-timeline"><div class="cd-timeline-block" ng-repeat="timeline in $ctrl.timelines"><div class="cd-timeline-img cd-picture"><img ng-src="{{ $ctrl.logo }}" alt="Picture"/></div><div class="cd-timeline-content"><h2>{{ timeline.title }}</h2><p>{{ timeline.body }}</p><span class="cd-date">{{ timeline.date }}</span></div></div></section></div>'},658:function(n,exports,e){var t=e(644);"string"==typeof t&&(t=[[n.i,t,""]]);e(105)(t,{});t.locals&&(n.exports=t.locals)},659:function(n,exports,e){var t=e(645);"string"==typeof t&&(t=[[n.i,t,""]]);e(105)(t,{});t.locals&&(n.exports=t.locals)},660:function(n,exports){n.exports="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibmMtaWNvbiBnbHlwaCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGc+CjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yMywwSDFDMC40LDAsMCwwLjQsMCwxdjIyYzAsMC42LDAuNCwxLDEsMWgyMmMwLjYsMCwxLTAuNCwxLTFWMUMyNCwwLjQsMjMuNiwwLDIzLDB6IE0xMCw1CgljMS4xLDAsMiwwLjksMiwyYzAsMS4xLTAuOSwyLTIsMlM4LDguMSw4LDdDOCw1LjksOC45LDUsMTAsNXogTTE4LjIsMTlINS45Yy0wLjgsMC0xLjMtMC45LTAuOC0xLjZMNy4zLDE0YzAuNC0wLjUsMS4xLTAuNiwxLjUtMC4yCglMMTEsMTZsMy4xLTMuOWMwLjQtMC41LDEuMy0wLjUsMS42LDAuMWwzLjMsNS4zQzE5LjUsMTguMSwxOSwxOSwxOC4yLDE5eiI+PC9wYXRoPgo8L2c+PC9zdmc+"},662:function(n,exports,e){e(236),e(237),n.exports=e(238)}},[662]);