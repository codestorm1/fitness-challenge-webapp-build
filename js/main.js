
/*! jQuery v1.8.2 jquery.com | jquery.org/license */

(function(e,t){function n(e){var t=dt[e]={};return Y.each(e.split(tt),function(e,n){t[n]=!0}),t}function r(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(mt,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:vt.test(r)?Y.parseJSON(r):r}catch(s){}Y.data(e,n,r)}else r=t}return r}function i(e){var t;for(t in e){if(t==="data"&&Y.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function s(){return!1}function o(){return!0}function u(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function a(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function f(e,t,n){t=t||0;if(Y.isFunction(t))return Y.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return Y.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=Y.grep(e,function(e){return e.nodeType===1});if(Bt.test(t))return Y.filter(t,r,!n);t=Y.filter(t,r)}return Y.grep(e,function(e,r){return Y.inArray(e,t)>=0===n})}function l(e){var t=It.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function c(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function h(e,t){if(t.nodeType!==1||!Y.hasData(e))return;var n,r,i,s=Y._data(e),o=Y._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)Y.event.add(t,n,u[n][r])}o.data&&(o.data=Y.extend({},o.data))}function p(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),Y.support.html5Clone&&e.innerHTML&&!Y.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Kt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(Y.expando)}function d(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function v(e){Kt.test(e.type)&&(e.defaultChecked=e.checked)}function m(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=yn.length;while(i--){t=yn[i]+n;if(t in e)return t}return r}function g(e,t){return e=t||e,Y.css(e,"display")==="none"||!Y.contains(e.ownerDocument,e)}function y(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=Y._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&g(n)&&(i[s]=Y._data(n,"olddisplay",S(n.nodeName)))):(r=nn(n,"display"),!i[s]&&r!=="none"&&Y._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function b(e,t,n){var r=cn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function w(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=Y.css(e,n+gn[i],!0)),r?(n==="content"&&(s-=parseFloat(nn(e,"padding"+gn[i]))||0),n!=="margin"&&(s-=parseFloat(nn(e,"border"+gn[i]+"Width"))||0)):(s+=parseFloat(nn(e,"padding"+gn[i]))||0,n!=="padding"&&(s+=parseFloat(nn(e,"border"+gn[i]+"Width"))||0));return s}function E(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=Y.support.boxSizing&&Y.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=nn(e,t);if(r<0||r==null)r=e.style[t];if(hn.test(r))return r;i=s&&(Y.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+w(e,t,n||(s?"border":"content"),i)+"px"}function S(e){if(dn[e])return dn[e];var t=Y("<"+e+">").appendTo(R.body),n=t.css("display");t.remove();if(n==="none"||n===""){rn=R.body.appendChild(rn||Y.extend(R.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!sn||!rn.createElement)sn=(rn.contentWindow||rn.contentDocument).document,sn.write("<!doctype html><html><body>"),sn.close();t=sn.body.appendChild(sn.createElement(e)),n=nn(t,"display"),R.body.removeChild(rn)}return dn[e]=n,n}function x(e,t,n,r){var i;if(Y.isArray(t))Y.each(t,function(t,i){n||En.test(e)?r(e,i):x(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&Y.type(t)==="object")for(i in t)x(e+"["+i+"]",t[i],n,r);else r(e,t)}function T(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(tt),u=0,a=o.length;if(Y.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function N(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===jn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=N(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=N(e,n,r,i,"*",o)),u}function C(e,n){var r,i,s=Y.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&Y.extend(!0,e,i)}function k(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function L(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function A(){try{return new e.XMLHttpRequest}catch(t){}}function O(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function M(){return setTimeout(function(){Jn=t},0),Jn=Y.now()}function _(e,t){Y.each(t,function(t,n){var r=(er[t]||[]).concat(er["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function D(e,t,n){var r,i=0,s=0,o=Zn.length,u=Y.Deferred().always(function(){delete a.elem}),a=function(){var t=Jn||M(),n=Math.max(0,f.startTime+f.duration-t),r=1-(n/f.duration||0),i=0,s=f.tweens.length;for(;i<s;i++)f.tweens[i].run(r);return u.notifyWith(e,[f,r,n]),r<1&&s?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:Y.extend({},t),opts:Y.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Jn||M(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=Y.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;P(l,f.opts.specialEasing);for(;i<o;i++){r=Zn[i].call(f,e,l,f.opts);if(r)return r}return _(f,l),Y.isFunction(f.opts.start)&&f.opts.start.call(e,f),Y.fx.timer(Y.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function P(e,t){var n,r,i,s,o;for(n in e){r=Y.camelCase(n),i=t[r],s=e[n],Y.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=Y.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function H(e,t,n){var r,i,s,o,u,a,f,l,c=this,h=e.style,p={},d=[],v=e.nodeType&&g(e);n.queue||(f=Y._queueHooks(e,"fx"),f.unqueued==null&&(f.unqueued=0,l=f.empty.fire,f.empty.fire=function(){f.unqueued||l()}),f.unqueued++,c.always(function(){c.always(function(){f.unqueued--,Y.queue(e,"fx").length||f.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],Y.css(e,"display")==="inline"&&Y.css(e,"float")==="none"&&(!Y.support.inlineBlockNeedsLayout||S(e.nodeName)==="inline"?h.display="inline-block":h.zoom=1)),n.overflow&&(h.overflow="hidden",Y.support.shrinkWrapBlocks||c.done(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Qn.exec(s)){delete t[r];if(s===(v?"hide":"show"))continue;d.push(r)}}o=d.length;if(o){u=Y._data(e,"fxshow")||Y._data(e,"fxshow",{}),v?Y(e).show():c.done(function(){Y(e).hide()}),c.done(function(){var t;Y.removeData(e,"fxshow",!0);for(t in p)Y.style(e,t,p[t])});for(r=0;r<o;r++)i=d[r],a=c.createTween(i,v?u[i]:0),p[i]=u[i]||Y.style(e,i),i in u||(u[i]=a.start,v&&(a.end=a.start,a.start=i==="width"||i==="height"?1:0))}}function B(e,t,n,r,i){return new B.prototype.init(e,t,n,r,i)}function j(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=gn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function F(e){return Y.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var I,q,R=e.document,U=e.location,z=e.navigator,W=e.jQuery,X=e.$,V=Array.prototype.push,$=Array.prototype.slice,J=Array.prototype.indexOf,K=Object.prototype.toString,Q=Object.prototype.hasOwnProperty,G=String.prototype.trim,Y=function(e,t){return new Y.fn.init(e,t,I)},Z=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,et=/\S/,tt=/\s+/,nt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rt=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,it=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,st=/^[\],:{}\s]*$/,ot=/(?:^|:|,)(?:\s*\[)+/g,ut=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,at=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,ft=/^-ms-/,lt=/-([\da-z])/gi,ct=function(e,t){return(t+"").toUpperCase()},ht=function(){R.addEventListener?(R.removeEventListener("DOMContentLoaded",ht,!1),Y.ready()):R.readyState==="complete"&&(R.detachEvent("onreadystatechange",ht),Y.ready())},pt={};Y.fn=Y.prototype={constructor:Y,init:function(e,n,r){var i,s,o,u;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?i=[null,e,null]:i=rt.exec(e);if(i&&(i[1]||!n)){if(i[1])return n=n instanceof Y?n[0]:n,u=n&&n.nodeType?n.ownerDocument||n:R,e=Y.parseHTML(i[1],u,!0),it.test(i[1])&&Y.isPlainObject(n)&&this.attr.call(e,n,!0),Y.merge(this,e);s=R.getElementById(i[2]);if(s&&s.parentNode){if(s.id!==i[2])return r.find(e);this.length=1,this[0]=s}return this.context=R,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return Y.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),Y.makeArray(e,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return $.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=Y.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return Y.each(this,e,t)},ready:function(e){return Y.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack($.apply(this,arguments),"slice",$.call(arguments).join(","))},map:function(e){return this.pushStack(Y.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:V,sort:[].sort,splice:[].splice},Y.fn.init.prototype=Y.fn,Y.extend=Y.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!Y.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(Y.isPlainObject(i)||(s=Y.isArray(i)))?(s?(s=!1,o=r&&Y.isArray(r)?r:[]):o=r&&Y.isPlainObject(r)?r:{},u[n]=Y.extend(l,o,i)):i!==t&&(u[n]=i)}return u},Y.extend({noConflict:function(t){return e.$===Y&&(e.$=X),t&&e.jQuery===Y&&(e.jQuery=W),Y},isReady:!1,readyWait:1,holdReady:function(e){e?Y.readyWait++:Y.ready(!0)},ready:function(e){if(e===!0?--Y.readyWait:Y.isReady)return;if(!R.body)return setTimeout(Y.ready,1);Y.isReady=!0;if(e!==!0&&--Y.readyWait>0)return;q.resolveWith(R,[Y]),Y.fn.trigger&&Y(R).trigger("ready").off("ready")},isFunction:function(e){return Y.type(e)==="function"},isArray:Array.isArray||function(e){return Y.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):pt[K.call(e)]||"object"},isPlainObject:function(e){if(!e||Y.type(e)!=="object"||e.nodeType||Y.isWindow(e))return!1;try{if(e.constructor&&!Q.call(e,"constructor")&&!Q.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||Q.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||R,(r=it.exec(e))?[t.createElement(r[1])]:(r=Y.buildFragment([e],t,n?null:[]),Y.merge([],(r.cacheable?Y.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=Y.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(st.test(t.replace(ut,"@").replace(at,"]").replace(ot,"")))return(new Function("return "+t))();Y.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&Y.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&et.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(ft,"ms-").replace(lt,ct)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||Y.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:G&&!G.call("﻿ ")?function(e){return e==null?"":G.call(e)}:function(e){return e==null?"":(e+"").replace(nt,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=Y.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||Y.isWindow(e)?V.call(r,e):Y.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(J)return J.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof Y||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||Y.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),Y.isFunction(e)?(i=$.call(arguments,2),s=function(){return e.apply(n,i.concat($.call(arguments)))},s.guid=e.guid=e.guid||Y.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)Y.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&Y.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(Y(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),Y.ready.promise=function(t){if(!q){q=Y.Deferred();if(R.readyState==="complete")setTimeout(Y.ready,1);else if(R.addEventListener)R.addEventListener("DOMContentLoaded",ht,!1),e.addEventListener("load",Y.ready,!1);else{R.attachEvent("onreadystatechange",ht),e.attachEvent("onload",Y.ready);var n=!1;try{n=e.frameElement==null&&R.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!Y.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}Y.ready()}}()}}return q.promise(t)},Y.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){pt["[object "+t+"]"]=t.toLowerCase()}),I=Y(R);var dt={};Y.Callbacks=function(e){e=typeof e=="string"?dt[e]||n(e):Y.extend({},e);var r,i,s,o,u,a,f=[],l=!e.once&&[],c=function(t){r=e.memory&&t,i=!0,a=o||0,o=0,u=f.length,s=!0;for(;f&&a<u;a++)if(f[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}s=!1,f&&(l?l.length&&c(l.shift()):r?f=[]:h.disable())},h={add:function(){if(f){var t=f.length;(function n(t){Y.each(t,function(t,r){var i=Y.type(r);i==="function"&&(!e.unique||!h.has(r))?f.push(r):r&&r.length&&i!=="string"&&n(r)})})(arguments),s?u=f.length:r&&(o=t,c(r))}return this},remove:function(){return f&&Y.each(arguments,function(e,t){var n;while((n=Y.inArray(t,f,n))>-1)f.splice(n,1),s&&(n<=u&&u--,n<=a&&a--)}),this},has:function(e){return Y.inArray(e,f)>-1},empty:function(){return f=[],this},disable:function(){return f=l=r=t,this},disabled:function(){return!f},lock:function(){return l=t,r||h.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],f&&(!i||l)&&(s?l.push(t):c(t)),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!i}};return h},Y.extend({Deferred:function(e){var t=[["resolve","done",Y.Callbacks("once memory"),"resolved"],["reject","fail",Y.Callbacks("once memory"),"rejected"],["notify","progress",Y.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Y.Deferred(function(n){Y.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](Y.isFunction(o)?function(){var e=o.apply(this,arguments);e&&Y.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?Y.extend(e,r):r}},i={};return r.pipe=r.then,Y.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=$.call(arguments),r=n.length,i=r!==1||e&&Y.isFunction(e.promise)?r:0,s=i===1?e:Y.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?$.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&Y.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),Y.support=function(){var t,n,r,i,s,o,u,a,f,l,c,h=R.createElement("div");h.setAttribute("className","t"),h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=h.getElementsByTagName("*"),r=h.getElementsByTagName("a")[0],r.style.cssText="top:1px;float:left;opacity:.5";if(!n||!n.length)return{};i=R.createElement("select"),s=i.appendChild(R.createElement("option")),o=h.getElementsByTagName("input")[0],t={leadingWhitespace:h.firstChild.nodeType===3,tbody:!h.getElementsByTagName("tbody").length,htmlSerialize:!!h.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:o.value==="on",optSelected:s.selected,getSetAttribute:h.className!=="t",enctype:!!R.createElement("form").enctype,html5Clone:R.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:R.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,i.disabled=!0,t.optDisabled=!s.disabled;try{delete h.test}catch(p){t.deleteExpando=!1}!h.addEventListener&&h.attachEvent&&h.fireEvent&&(h.attachEvent("onclick",c=function(){t.noCloneEvent=!1}),h.cloneNode(!0).fireEvent("onclick"),h.detachEvent("onclick",c)),o=R.createElement("input"),o.value="t",o.setAttribute("type","radio"),t.radioValue=o.value==="t",o.setAttribute("checked","checked"),o.setAttribute("name","t"),h.appendChild(o),u=R.createDocumentFragment(),u.appendChild(h.lastChild),t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=o.checked,u.removeChild(o),u.appendChild(h);if(h.attachEvent)for(f in{submit:!0,change:!0,focusin:!0})a="on"+f,l=a in h,l||(h.setAttribute(a,"return;"),l=typeof h[a]=="function"),t[f+"Bubbles"]=l;return Y(function(){var n,r,i,s,o="padding:0;margin:0;border:0;display:block;overflow:hidden;",u=R.getElementsByTagName("body")[0];if(!u)return;n=R.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",u.insertBefore(n,u.firstChild),r=R.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=r.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",l=i[0].offsetHeight===0,i[0].style.display="",i[1].style.display="none",t.reliableHiddenOffsets=l&&i[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=u.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",s=R.createElement("div"),s.style.cssText=r.style.cssText=o,s.style.marginRight=s.style.width="0",r.style.width="1px",r.appendChild(s),t.reliableMarginRight=!parseFloat((e.getComputedStyle(s,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),u.removeChild(n),n=r=i=s=null}),u.removeChild(h),n=r=i=s=o=u=h=null,t}();var vt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,mt=/([A-Z])/g;Y.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(Y.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?Y.cache[e[Y.expando]]:e[Y.expando],!!e&&!i(e)},data:function(e,n,r,i){if(!Y.acceptData(e))return;var s,o,u=Y.expando,a=typeof n=="string",f=e.nodeType,l=f?Y.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=Y.deletedIds.pop()||Y.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=Y.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=Y.extend(l[c],n):l[c].data=Y.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[Y.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[Y.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!Y.acceptData(e))return;var r,s,o,u=e.nodeType,a=u?Y.cache:e,f=u?e[Y.expando]:Y.expando;if(!a[f])return;if(t){r=n?a[f]:a[f].data;if(r){Y.isArray(t)||(t in r?t=[t]:(t=Y.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(s=0,o=t.length;s<o;s++)delete r[t[s]];if(!(n?i:Y.isEmptyObject)(r))return}}if(!n){delete a[f].data;if(!i(a[f]))return}u?Y.cleanData([e],!0):Y.support.deleteExpando||a!=a.window?delete a[f]:a[f]=null},_data:function(e,t,n){return Y.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&Y.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),Y.fn.extend({data:function(e,n){var i,s,o,u,a,f=this[0],l=0,c=null;if(e===t){if(this.length){c=Y.data(f);if(f.nodeType===1&&!Y._data(f,"parsedAttrs")){o=f.attributes;for(a=o.length;l<a;l++)u=o[l].name,u.indexOf("data-")||(u=Y.camelCase(u.substring(5)),r(f,u,c[u]));Y._data(f,"parsedAttrs",!0)}}return c}return typeof e=="object"?this.each(function(){Y.data(this,e)}):(i=e.split(".",2),i[1]=i[1]?"."+i[1]:"",s=i[1]+"!",Y.access(this,function(n){if(n===t)return c=this.triggerHandler("getData"+s,[i[0]]),c===t&&f&&(c=Y.data(f,e),c=r(f,e,c)),c===t&&i[1]?this.data(i[0]):c;i[1]=n,this.each(function(){var t=Y(this);t.triggerHandler("setData"+s,i),Y.data(this,e,n),t.triggerHandler("changeData"+s,i)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){Y.removeData(this,e)})}}),Y.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y._data(e,t),n&&(!r||Y.isArray(n)?r=Y._data(e,t,Y.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=Y.queue(e,t),r=n.length,i=n.shift(),s=Y._queueHooks(e,t),o=function(){Y.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y._data(e,n)||Y._data(e,n,{empty:Y.Callbacks("once memory").add(function(){Y.removeData(e,t+"queue",!0),Y.removeData(e,n,!0)})})}}),Y.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?Y.queue(this[0],e):n===t?this:this.each(function(){var t=Y.queue(this,e,n);Y._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&Y.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Y.dequeue(this,e)})},delay:function(e,t){return e=Y.fx?Y.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=Y.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=Y._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var gt,yt,bt,wt=/[\t\r\n]/g,Et=/\r/g,St=/^(?:button|input)$/i,xt=/^(?:button|input|object|select|textarea)$/i,Tt=/^a(?:rea|)$/i,Nt=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Ct=Y.support.getSetAttribute;Y.fn.extend({attr:function(e,t){return Y.access(this,Y.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Y.removeAttr(this,e)})},prop:function(e,t){return Y.access(this,Y.prop,e,t,arguments.length>1)},removeProp:function(e){return e=Y.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(Y.isFunction(e))return this.each(function(t){Y(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(tt);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=Y.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(Y.isFunction(e))return this.each(function(t){Y(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(tt);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(wt," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?Y.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return Y.isFunction(e)?this.each(function(n){Y(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=Y(this),u=t,a=e.split(tt);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&Y._data(this,"__className__",this.className),this.className=this.className||e===!1?"":Y._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(wt," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=Y.valHooks[s.type]||Y.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(Et,""):r==null?"":r);return}return i=Y.isFunction(e),this.each(function(r){var s,o=Y(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":Y.isArray(s)&&(s=Y.map(s,function(e){return e==null?"":e+""})),n=Y.valHooks[this.type]||Y.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),Y.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r,i,s=e.selectedIndex,o=[],u=e.options,a=e.type==="select-one";if(s<0)return null;n=a?s:0,r=a?s+1:u.length;for(;n<r;n++){i=u[n];if(i.selected&&(Y.support.optDisabled?!i.disabled:i.getAttribute("disabled")===null)&&(!i.parentNode.disabled||!Y.nodeName(i.parentNode,"optgroup"))){t=Y(i).val();if(a)return t;o.push(t)}}return a&&!o.length&&u.length?Y(u[s]).val():o},set:function(e,t){var n=Y.makeArray(t);return Y(e).find("option").each(function(){this.selected=Y.inArray(Y(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&Y.isFunction(Y.fn[n]))return Y(e)[n](r);if(typeof e.getAttribute=="undefined")return Y.prop(e,n,r);u=a!==1||!Y.isXMLDoc(e),u&&(n=n.toLowerCase(),o=Y.attrHooks[n]||(Nt.test(n)?yt:gt));if(r!==t){if(r===null){Y.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(tt);for(;o<r.length;o++)i=r[o],i&&(n=Y.propFix[i]||i,s=Nt.test(i),s||Y.attr(e,i,""),e.removeAttribute(Ct?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(St.test(e.nodeName)&&e.parentNode)Y.error("type property can't be changed");else if(!Y.support.radioValue&&t==="radio"&&Y.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return gt&&Y.nodeName(e,"button")?gt.get(e,t):t in e?e.value:null},set:function(e,t,n){if(gt&&Y.nodeName(e,"button"))return gt.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!Y.isXMLDoc(e),o&&(n=Y.propFix[n]||n,s=Y.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):xt.test(e.nodeName)||Tt.test(e.nodeName)&&e.href?0:t}}}}),yt={get:function(e,n){var r,i=Y.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?Y.removeAttr(e,n):(r=Y.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},Ct||(bt={name:!0,id:!0,coords:!0},gt=Y.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(bt[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=R.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},Y.each(["width","height"],function(e,t){Y.attrHooks[t]=Y.extend(Y.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),Y.attrHooks.contenteditable={get:gt.get,set:function(e,t,n){t===""&&(t="false"),gt.set(e,t,n)}}),Y.support.hrefNormalized||Y.each(["href","src","width","height"],function(e,n){Y.attrHooks[n]=Y.extend(Y.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),Y.support.style||(Y.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),Y.support.optSelected||(Y.propHooks.selected=Y.extend(Y.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),Y.support.enctype||(Y.propFix.enctype="encoding"),Y.support.checkOn||Y.each(["radio","checkbox"],function(){Y.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),Y.each(["radio","checkbox"],function(){Y.valHooks[this]=Y.extend(Y.valHooks[this],{set:function(e,t){if(Y.isArray(t))return e.checked=Y.inArray(Y(e).val(),t)>=0}})});var kt=/^(?:textarea|input|select)$/i,Lt=/^([^\.]*|)(?:\.(.+)|)$/,At=/(?:^|\s)hover(\.\S+|)\b/,Ot=/^key/,Mt=/^(?:mouse|contextmenu)|click/,_t=/^(?:focusinfocus|focusoutblur)$/,Dt=function(e){return Y.event.special.hover?e:e.replace(At,"mouseenter$1 mouseleave$1")};Y.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,v,m;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=Y._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=Y.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof Y=="undefined"||!!e&&Y.event.triggered===e.type?t:Y.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=Y.trim(Dt(n)).split(" ");for(f=0;f<n.length;f++){l=Lt.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),m=Y.event.special[c]||{},c=(s?m.delegateType:m.bindType)||c,m=Y.event.special[c]||{},p=Y.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&Y.expr.match.needsContext.test(s),namespace:h.join(".")},d),v=a[c];if(!v){v=a[c]=[],v.delegateCount=0;if(!m.setup||m.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}m.add&&(m.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?v.splice(v.delegateCount++,0,p):v.push(p),Y.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,v,m=Y.hasData(e)&&Y._data(e);if(!m||!(h=m.events))return;t=Y.trim(Dt(t||"")).split(" ");for(s=0;s<t.length;s++){o=Lt.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)Y.event.remove(e,u+t[s],n,r,!0);continue}p=Y.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)v=d[c],(i||a===v.origType)&&(!n||n.guid===v.guid)&&(!f||f.test(v.namespace))&&(!r||r===v.selector||r==="**"&&v.selector)&&(d.splice(c--,1),v.selector&&d.delegateCount--,p.remove&&p.remove.call(e,v));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,m.handle)===!1)&&Y.removeEvent(e,u,m.handle),delete h[u])}Y.isEmptyObject(h)&&(delete m.handle,Y.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,i,s){if(!i||i.nodeType!==3&&i.nodeType!==8){var o,u,a,f,l,c,h,p,d,v,m=n.type||n,g=[];if(_t.test(m+Y.event.triggered))return;m.indexOf("!")>=0&&(m=m.slice(0,-1),u=!0),m.indexOf(".")>=0&&(g=m.split("."),m=g.shift(),g.sort());if((!i||Y.event.customEvent[m])&&!Y.event.global[m])return;n=typeof n=="object"?n[Y.expando]?n:new Y.Event(m,n):new Y.Event(m),n.type=m,n.isTrigger=!0,n.exclusive=u,n.namespace=g.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,c=m.indexOf(":")<0?"on"+m:"";if(!i){o=Y.cache;for(a in o)o[a].events&&o[a].events[m]&&Y.event.trigger(n,r,o[a].handle.elem,!0);return}n.result=t,n.target||(n.target=i),r=r!=null?Y.makeArray(r):[],r.unshift(n),h=Y.event.special[m]||{};if(h.trigger&&h.trigger.apply(i,r)===!1)return;d=[[i,h.bindType||m]];if(!s&&!h.noBubble&&!Y.isWindow(i)){v=h.delegateType||m,f=_t.test(v+m)?i:i.parentNode;for(l=i;f;f=f.parentNode)d.push([f,v]),l=f;l===(i.ownerDocument||R)&&d.push([l.defaultView||l.parentWindow||e,v])}for(a=0;a<d.length&&!n.isPropagationStopped();a++)f=d[a][0],n.type=d[a][1],p=(Y._data(f,"events")||{})[n.type]&&Y._data(f,"handle"),p&&p.apply(f,r),p=c&&f[c],p&&Y.acceptData(f)&&p.apply&&p.apply(f,r)===!1&&n.preventDefault();return n.type=m,!s&&!n.isDefaultPrevented()&&(!h._default||h._default.apply(i.ownerDocument,r)===!1)&&(m!=="click"||!Y.nodeName(i,"a"))&&Y.acceptData(i)&&c&&i[m]&&(m!=="focus"&&m!=="blur"||n.target.offsetWidth!==0)&&!Y.isWindow(i)&&(l=i[c],l&&(i[c]=null),Y.event.triggered=m,i[m](),Y.event.triggered=t,l&&(i[c]=l)),n.result}return},dispatch:function(n){n=Y.event.fix(n||e.event);var r,i,s,o,u,a,f,l,c,h,p=(Y._data(this,"events")||{})[n.type]||[],d=p.delegateCount,v=$.call(arguments),m=!n.exclusive&&!n.namespace,g=Y.event.special[n.type]||{},y=[];v[0]=n,n.delegateTarget=this;if(g.preDispatch&&g.preDispatch.call(this,n)===!1)return;if(d&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<d;r++)l=p[r],c=l.selector,u[c]===t&&(u[c]=l.needsContext?Y(c,this).index(s)>=0:Y.find(c,this,null,[s]).length),u[c]&&f.push(l);f.length&&y.push({elem:s,matches:f})}p.length>d&&y.push({elem:this,matches:p.slice(d)});for(r=0;r<y.length&&!n.isPropagationStopped();r++){a=y[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){l=a.matches[i];if(m||!n.namespace&&!l.namespace||n.namespace_re&&n.namespace_re.test(l.namespace))n.data=l.data,n.handleObj=l,o=((Y.event.special[l.origType]||{}).handle||l.handler).apply(a.elem,v),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return g.postDispatch&&g.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,s,o=n.button,u=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||R,i=r.documentElement,s=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||s&&s.scrollLeft||0)-(i&&i.clientLeft||s&&s.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||s&&s.scrollTop||0)-(i&&i.clientTop||s&&s.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),!e.which&&o!==t&&(e.which=o&1?1:o&2?3:o&4?2:0),e}},fix:function(e){if(e[Y.expando])return e;var t,n,r=e,i=Y.event.fixHooks[e.type]||{},s=i.props?this.props.concat(i.props):this.props;e=Y.Event(r);for(t=s.length;t;)n=s[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||R),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){Y.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=Y.extend(new Y.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?Y.event.trigger(i,null,t):Y.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Y.event.handle=Y.event.dispatch,Y.removeEvent=R.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},Y.Event=function(e,t){if(!(this instanceof Y.Event))return new Y.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?o:s):this.type=e,t&&Y.extend(this,t),this.timeStamp=e&&e.timeStamp||Y.now(),this[Y.expando]=!0},Y.Event.prototype={preventDefault:function(){this.isDefaultPrevented=o;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=o;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=o,this.stopPropagation()},isDefaultPrevented:s,isPropagationStopped:s,isImmediatePropagationStopped:s},Y.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){Y.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!Y.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),Y.support.submitBubbles||(Y.event.special.submit={setup:function(){if(Y.nodeName(this,"form"))return!1;Y.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=Y.nodeName(n,"input")||Y.nodeName(n,"button")?n.form:t;r&&!Y._data(r,"_submit_attached")&&(Y.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),Y._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&Y.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(Y.nodeName(this,"form"))return!1;Y.event.remove(this,"._submit")}}),Y.support.changeBubbles||(Y.event.special.change={setup:function(){if(kt.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")Y.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),Y.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),Y.event.simulate("change",this,e,!0)});return!1}Y.event.add(this,"beforeactivate._change",function(e){var t=e.target;kt.test(t.nodeName)&&!Y._data(t,"_change_attached")&&(Y.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&Y.event.simulate("change",this.parentNode,e,!0)}),Y._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return Y.event.remove(this,"._change"),!kt.test(this.nodeName)}}),Y.support.focusinBubbles||Y.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){Y.event.simulate(t,e.target,Y.event.fix(e),!0)};Y.event.special[t]={setup:function(){n++===0&&R.addEventListener(e,r,!0)},teardown:function(){--n===0&&R.removeEventListener(e,r,!0)}}}),Y.fn.extend({on:function(e,n,r,i,o){var u,a;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=s;else if(!i)return this;return o===1&&(u=i,i=function(e){return Y().off(e),u.apply(this,arguments)},i.guid=u.guid||(u.guid=Y.guid++)),this.each(function(){Y.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,Y(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(o in e)this.off(o,n,e[o]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=s),this.each(function(){Y.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return Y(this.context).on(e,this.selector,t,n),this},die:function(e,t){return Y(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){Y.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return Y.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||Y.guid++,r=0,i=function(n){var i=(Y._data(this,"lastToggle"+e.guid)||0)%r;return Y._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),Y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Y.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Ot.test(t)&&(Y.event.fixHooks[t]=Y.event.keyHooks),Mt.test(t)&&(Y.event.fixHooks[t]=Y.event.mouseHooks)}),function(e,t){function n(e,t,n,r){n=n||[],t=t||M;var i,s,o,u,a=t.nodeType;if(!e||typeof e!="string")return n;if(a!==1&&a!==9)return[];o=E(t);if(!o&&!r)if(i=nt.exec(e))if(u=i[1]){if(a===9){s=t.getElementById(u);if(!s||!s.parentNode)return n;if(s.id===u)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(u))&&S(t,s)&&s.id===u)return n.push(s),n}else{if(i[2])return B.apply(n,j.call(t.getElementsByTagName(e),0)),n;if((u=i[3])&&dt&&t.getElementsByClassName)return B.apply(n,j.call(t.getElementsByClassName(u),0)),n}return v(e.replace(G,"$1"),t,n,r,o)}function r(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function i(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function s(e){return I(function(t){return t=+t,I(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function o(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function u(e,t){var r,i,s,o,u,a,f,l=U[A][e];if(l)return t?0:l.slice(0);u=e,a=[],f=b.preFilter;while(u){if(!r||(i=Z.exec(u)))i&&(u=u.slice(i[0].length)),a.push(s=[]);r=!1;if(i=et.exec(u))s.push(r=new O(i.shift())),u=u.slice(r.length),r.type=i[0].replace(G," ");for(o in b.filter)(i=ft[o].exec(u))&&(!f[o]||(i=f[o](i,M,!0)))&&(s.push(r=new O(i.shift())),u=u.slice(r.length),r.type=o,r.matches=i);if(!r)break}return t?u.length:u?n.error(e):U(e,a).slice(0)}function a(e,t,n){var r=t.dir,i=n&&t.dir==="parentNode",s=P++;return t.first?function(t,n,s){while(t=t[r])if(i||t.nodeType===1)return e(t,n,s)}:function(t,n,o){if(!o){var u,a=D+" "+s+" ",f=a+g;while(t=t[r])if(i||t.nodeType===1){if((u=t[A])===f)return t.sizset;if(typeof u=="string"&&u.indexOf(a)===0){if(t.sizset)return t}else{t[A]=f;if(e(t,n,o))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[r])if(i||t.nodeType===1)if(e(t,n,o))return t}}function f(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function l(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function c(e,t,n,r,i,s){return r&&!r[A]&&(r=c(r)),i&&!i[A]&&(i=c(i,s)),I(function(s,o,u,a){if(s&&i)return;var f,c,h,p=[],v=[],m=o.length,g=s||d(t||"*",u.nodeType?[u]:u,[],s),y=e&&(s||!t)?l(g,p,e,u,a):g,b=n?i||(s?e:m||r)?[]:o:y;n&&n(y,b,u,a);if(r){h=l(b,v),r(h,[],u,a),f=h.length;while(f--)if(c=h[f])b[v[f]]=!(y[v[f]]=c)}if(s){f=e&&b.length;while(f--)if(c=b[f])s[p[f]]=!(o[p[f]]=c)}else b=l(b===o?b.splice(m,b.length):b),i?i(null,o,b,a):B.apply(o,b)})}function h(e){var t,n,r,i=e.length,s=b.relative[e[0].type],o=s||b.relative[" "],u=s?1:0,l=a(function(e){return e===t},o,!0),p=a(function(e){return F.call(t,e)>-1},o,!0),d=[function(e,n,r){return!s&&(r||n!==C)||((t=n).nodeType?l(e,n,r):p(e,n,r))}];for(;u<i;u++)if(n=b.relative[e[u].type])d=[a(f(d),n)];else{n=b.filter[e[u].type].apply(null,e[u].matches);if(n[A]){r=++u;for(;r<i;r++)if(b.relative[e[r].type])break;return c(u>1&&f(d),u>1&&e.slice(0,u-1).join("").replace(G,"$1"),n,u<r&&h(e.slice(u,r)),r<i&&h(e=e.slice(r)),r<i&&e.join(""))}d.push(n)}return f(d)}function p(e,t){var r=t.length>0,i=e.length>0,s=function(o,u,a,f,c){var h,p,d,v=[],m=0,y="0",w=o&&[],E=c!=null,S=C,x=o||i&&b.find.TAG("*",c&&u.parentNode||u),T=D+=S==null?1:Math.E;E&&(C=u!==M&&u,g=s.el);for(;(h=x[y])!=null;y++){if(i&&h){for(p=0;d=e[p];p++)if(d(h,u,a)){f.push(h);break}E&&(D=T,g=++s.el)}r&&((h=!d&&h)&&m--,o&&w.push(h))}m+=y;if(r&&y!==m){for(p=0;d=t[p];p++)d(w,v,u,a);if(o){if(m>0)while(y--)!w[y]&&!v[y]&&(v[y]=H.call(f));v=l(v)}B.apply(f,v),E&&!o&&v.length>0&&m+t.length>1&&n.uniqueSort(f)}return E&&(D=T,C=S),w};return s.el=0,r?I(s):s}function d(e,t,r,i){var s=0,o=t.length;for(;s<o;s++)n(e,t[s],r,i);return r}function v(e,t,n,r,i){var s,o,a,f,l,c=u(e),h=c.length;if(!r&&c.length===1){o=c[0]=c[0].slice(0);if(o.length>2&&(a=o[0]).type==="ID"&&t.nodeType===9&&!i&&b.relative[o[1].type]){t=b.find.ID(a.matches[0].replace(at,""),t,i)[0];if(!t)return n;e=e.slice(o.shift().length)}for(s=ft.POS.test(e)?-1:o.length-1;s>=0;s--){a=o[s];if(b.relative[f=a.type])break;if(l=b.find[f])if(r=l(a.matches[0].replace(at,""),it.test(o[0].type)&&t.parentNode||t,i)){o.splice(s,1),e=r.length&&o.join("");if(!e)return B.apply(n,j.call(r,0)),n;break}}}return x(e,c)(r,t,i,n,it.test(e)),n}function m(){}var g,y,b,w,E,S,x,T,N,C,k=!0,L="undefined",A=("sizcache"+Math.random()).replace(".",""),O=String,M=e.document,_=M.documentElement,D=0,P=0,H=[].pop,B=[].push,j=[].slice,F=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},I=function(e,t){return e[A]=t==null||t,e},q=function(){var e={},t=[];return I(function(n,r){return t.push(n)>b.cacheLength&&delete e[t.shift()],e[n]=r},e)},R=q(),U=q(),z=q(),W="[\\x20\\t\\r\\n\\f]",X="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",V=X.replace("w","w#"),$="([*^$|!~]?=)",J="\\["+W+"*("+X+")"+W+"*(?:"+$+W+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+V+")|)|)"+W+"*\\]",K=":("+X+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+J+")|[^:]|\\\\.)*|.*))\\)|)",Q=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+W+"*((?:-\\d)?\\d*)"+W+"*\\)|)(?=[^-]|$)",G=new RegExp("^"+W+"+|((?:^|[^\\\\])(?:\\\\.)*)"+W+"+$","g"),Z=new RegExp("^"+W+"*,"+W+"*"),et=new RegExp("^"+W+"*([\\x20\\t\\r\\n\\f>+~])"+W+"*"),tt=new RegExp(K),nt=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,rt=/^:not/,it=/[\x20\t\r\n\f]*[+~]/,st=/:not\($/,ot=/h\d/i,ut=/input|select|textarea|button/i,at=/\\(?!\\)/g,ft={ID:new RegExp("^#("+X+")"),CLASS:new RegExp("^\\.("+X+")"),NAME:new RegExp("^\\[name=['\"]?("+X+")['\"]?\\]"),TAG:new RegExp("^("+X.replace("w","w*")+")"),ATTR:new RegExp("^"+J),PSEUDO:new RegExp("^"+K),POS:new RegExp(Q,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+W+"*(even|odd|(([+-]|)(\\d*)n|)"+W+"*(?:([+-]|)"+W+"*(\\d+)|))"+W+"*\\)|)","i"),needsContext:new RegExp("^"+W+"*[>+~]|"+Q,"i")},lt=function(e){var t=M.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},ct=lt(function(e){return e.appendChild(M.createComment("")),!e.getElementsByTagName("*").length}),ht=lt(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==L&&e.firstChild.getAttribute("href")==="#"}),pt=lt(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),dt=lt(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),vt=lt(function(e){e.id=A+0,e.innerHTML="<a name='"+A+"'></a><div name='"+A+"'></div>",_.insertBefore(e,_.firstChild);var t=M.getElementsByName&&M.getElementsByName(A).length===2+M.getElementsByName(A+0).length;return y=!M.getElementById(A),_.removeChild(e),t});try{j.call(_.childNodes,0)[0].nodeType}catch(mt){j=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}n.matches=function(e,t){return n(e,null,null,t)},n.matchesSelector=function(e,t){return n(t,null,null,[e]).length>0},w=n.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=w(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=w(t);return n},E=n.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},S=n.contains=_.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:_.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},n.attr=function(e,t){var n,r=E(e);return r||(t=t.toLowerCase()),(n=b.attrHandle[t])?n(e):r||pt?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},b=n.selectors={cacheLength:50,createPseudo:I,match:ft,attrHandle:ht?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:y?function(e,t,n){if(typeof t.getElementById!==L&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==L&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==L&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:ct?function(e,t){if(typeof t.getElementsByTagName!==L)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:vt&&function(e,t){if(typeof t.getElementsByName!==L)return t.getElementsByName(name)},CLASS:dt&&function(e,t,n){if(typeof t.getElementsByClassName!==L&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(at,""),e[3]=(e[4]||e[5]||"").replace(at,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||n.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&n.error(e[0]),e},PSEUDO:function(e){var t,n;if(ft.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])tt.test(t)&&(n=u(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:y?function(e){return e=e.replace(at,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace(at,""),function(t){var n=typeof t.getAttributeNode!==L&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace(at,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=R[A][e];return t||(t=R(e,new RegExp("(^|"+W+")"+e+"("+W+"|$)"))),function(e){return t.test(e.className||typeof e.getAttribute!==L&&e.getAttribute("class")||"")}},ATTR:function(e,t,r){return function(i,s){var o=n.attr(i,e);return o==null?t==="!=":t?(o+="",t==="="?o===r:t==="!="?o!==r:t==="^="?r&&o.indexOf(r)===0:t==="*="?r&&o.indexOf(r)>-1:t==="$="?r&&o.substr(o.length-r.length)===r:t==="~="?(" "+o+" ").indexOf(r)>-1:t==="|="?o===r||o.substr(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var r,i=b.pseudos[e]||b.setFilters[e.toLowerCase()]||n.error("unsupported pseudo: "+e);return i[A]?i(t):i.length>1?(r=[e,e,"",t],b.setFilters.hasOwnProperty(e.toLowerCase())?I(function(e,n){var r,s=i(e,t),o=s.length;while(o--)r=F.call(e,s[o]),e[r]=!(n[r]=s[o])}):function(e){return i(e,0,r)}):i}},pseudos:{not:I(function(e){var t=[],n=[],r=x(e.replace(G,"$1"));return r[A]?I(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:I(function(e){return function(t){return n(e,t).length>0}}),contains:I(function(e){return function(t){return(t.textContent||t.innerText||w(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!b.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return ot.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:r("radio"),checkbox:r("checkbox"),file:r("file"),password:r("password"),image:r("image"),submit:i("submit"),reset:i("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return ut.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&(!!e.type||!!e.href)},active:function(e){return e===e.ownerDocument.activeElement},first:s(function(e,t,n){return[0]}),last:s(function(e,t,n){return[t-1]}),eq:s(function(e,t,n){return[n<0?n+t:n]}),even:s(function(e,t,n){for(var r=0;r<t;r+=2)e.push(r);return e}),odd:s(function(e,t,n){for(var r=1;r<t;r+=2)e.push(r);return e}),lt:s(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:s(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T=_.compareDocumentPosition?function(e,t){return e===t?(N=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return N=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],u=e.parentNode,a=t.parentNode,f=u;if(u===a)return o(e,t);if(!u)return-1;if(!a)return 1;while(f)i.unshift(f),f=f.parentNode;f=a;while(f)s.unshift(f),f=f.parentNode;n=i.length,r=s.length;for(var l=0;l<n&&l<r;l++)if(i[l]!==s[l])return o(i[l],s[l]);return l===n?o(e,s[l],-1):o(i[l],t,1)},[0,0].sort(T),k=!N,n.uniqueSort=function(e){var t,n=1;N=k,e.sort(T);if(N)for(;t=e[n];n++)t===e[n-1]&&e.splice(n--,1);return e},n.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},x=n.compile=function(e,t){var n,r=[],i=[],s=z[A][e];if(!s){t||(t=u(e)),n=t.length;while(n--)s=h(t[n]),s[A]?r.push(s):i.push(s);s=z(e,p(i,r))}return s},M.querySelectorAll&&function(){var e,t=v,r=/'|\\/g,i=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,s=[":focus"],o=[":active",":focus"],a=_.matchesSelector||_.mozMatchesSelector||_.webkitMatchesSelector||_.oMatchesSelector||_.msMatchesSelector;lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||s.push("\\["+W+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||s.push(":checked")}),lt(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&s.push("[*^$]="+W+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||s.push(":enabled",":disabled")}),s=new RegExp(s.join("|")),v=function(e,n,i,o,a){if(!o&&!a&&(!s||!s.test(e))){var f,l,c=!0,h=A,p=n,d=n.nodeType===9&&e;if(n.nodeType===1&&n.nodeName.toLowerCase()!=="object"){f=u(e),(c=n.getAttribute("id"))?h=c.replace(r,"\\$&"):n.setAttribute("id",h),h="[id='"+h+"'] ",l=f.length;while(l--)f[l]=h+f[l].join("");p=it.test(e)&&n.parentNode||n,d=f.join(",")}if(d)try{return B.apply(i,j.call(p.querySelectorAll(d),0)),i}catch(v){}finally{c||n.removeAttribute("id")}}return t(e,n,i,o,a)},a&&(lt(function(t){e=a.call(t,"div");try{a.call(t,"[test!='']:sizzle"),o.push("!=",K)}catch(n){}}),o=new RegExp(o.join("|")),n.matchesSelector=function(t,r){r=r.replace(i,"='$1']");if(!E(t)&&!o.test(r)&&(!s||!s.test(r)))try{var u=a.call(t,r);if(u||e||t.document&&t.document.nodeType!==11)return u}catch(f){}return n(r,null,null,[t]).length>0})}(),b.pseudos.nth=b.pseudos.eq,b.filters=m.prototype=b.pseudos,b.setFilters=new m,n.attr=Y.attr,Y.find=n,Y.expr=n.selectors,Y.expr[":"]=Y.expr.pseudos,Y.unique=n.uniqueSort,Y.text=n.getText,Y.isXMLDoc=n.isXML,Y.contains=n.contains}(e);var Pt=/Until$/,Ht=/^(?:parents|prev(?:Until|All))/,Bt=/^.[^:#\[\.,]*$/,jt=Y.expr.match.needsContext,Ft={children:!0,contents:!0,next:!0,prev:!0};Y.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return Y(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(Y.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,Y.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=Y(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(Y.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(f(this,e,!1),"not",e)},filter:function(e){return this.pushStack(f(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?jt.test(e)?Y(e,this.context).index(this[0])>=0:Y.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=jt.test(e)||typeof e!="string"?Y(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:Y.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?Y.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?Y.inArray(this[0],Y(e)):Y.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?Y(e,t):Y.makeArray(e&&e.nodeType?[e]:e),r=Y.merge(this.get(),n);return this.pushStack(u(n[0])||u(r[0])?r:Y.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),Y.fn.andSelf=Y.fn.addBack,Y.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return Y.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Y.dir(e,"parentNode",n)},next:function(e){return a(e,"nextSibling")},prev:function(e){return a(e,"previousSibling")},nextAll:function(e){return Y.dir(e,"nextSibling")},prevAll:function(e){return Y.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Y.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Y.dir(e,"previousSibling",n)},siblings:function(e){return Y.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Y.sibling(e.firstChild)},contents:function(e){return Y.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:Y.merge([],e.childNodes)}},function(e,t){Y.fn[e]=function(n,r){var i=Y.map(this,t,n);return Pt.test(e)||(r=n),r&&typeof r=="string"&&(i=Y.filter(r,i)),i=this.length>1&&!Ft[e]?Y.unique(i):i,this.length>1&&Ht.test(e)&&(i=i.reverse()),this.pushStack(i,e,$.call(arguments).join(","))}}),Y.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?Y.find.matchesSelector(t[0],e)?[t[0]]:[]:Y.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!Y(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var It="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",qt=/ jQuery\d+="(?:null|\d+)"/g,Rt=/^\s+/,Ut=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,zt=/<([\w:]+)/,Wt=/<tbody/i,Xt=/<|&#?\w+;/,Vt=/<(?:script|style|link)/i,$t=/<(?:script|object|embed|option|style)/i,Jt=new RegExp("<(?:"+It+")[\\s/>]","i"),Kt=/^(?:checkbox|radio)$/,Qt=/checked\s*(?:[^=]|=\s*.checked.)/i,Gt=/\/(java|ecma)script/i,Yt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Zt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},en=l(R),tn=en.appendChild(R.createElement("div"));Zt.optgroup=Zt.option,Zt.tbody=Zt.tfoot=Zt.colgroup=Zt.caption=Zt.thead,Zt.th=Zt.td,Y.support.htmlSerialize||(Zt._default=[1,"X<div>","</div>"]),Y.fn.extend({text:function(e){return Y.access(this,function(e){return e===t?Y.text(this):this.empty().append((this[0]&&this[0].ownerDocument||R).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(Y.isFunction(e))return this.each(function(t){Y(this).wrapAll(e.call(this,t))});if(this[0]){var t=Y(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return Y.isFunction(e)?this.each(function(t){Y(this).wrapInner(e.call(this,t))}):this.each(function(){var t=Y(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Y.isFunction(e);return this.each(function(n){Y(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Y.nodeName(this,"body")||Y(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!u(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=Y.clean(arguments);return this.pushStack(Y.merge(e,this),"before",this.selector)}},after:function(){if(!u(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=Y.clean(arguments);return this.pushStack(Y.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||Y.filter(e,[n]).length)!t&&n.nodeType===1&&(Y.cleanData(n.getElementsByTagName("*")),Y.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&Y.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return Y.clone(this,e,t)})},html:function(e){return Y.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(qt,""):t;if(typeof e=="string"&&!Vt.test(e)&&(Y.support.htmlSerialize||!Jt.test(e))&&(Y.support.leadingWhitespace||!Rt.test(e))&&!Zt[(zt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ut,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(Y.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return u(this[0])?this.length?this.pushStack(Y(Y.isFunction(e)?e():e),"replaceWith",e):this:Y.isFunction(e)?this.each(function(t){var n=Y(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=Y(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;Y(this).remove(),t?Y(t).before(e):Y(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],h=this.length;if(!Y.support.checkClone&&h>1&&typeof f=="string"&&Qt.test(f))return this.each(function(){Y(this).domManip(e,n,r)});if(Y.isFunction(f))return this.each(function(i){var s=Y(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=Y.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&Y.nodeName(s,"tr");for(u=i.cacheable||h-1;a<h;a++)r.call(n&&Y.nodeName(this[a],"table")?c(this[a],"tbody"):this[a],a===u?o:Y.clone(o,!0,!0))}o=s=null,l.length&&Y.each(l,function(e,t){t.src?Y.ajax?Y.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):Y.error("no ajax"):Y.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Yt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),Y.buildFragment=function(e,n,r){var i,s,o,u=e[0];return n=n||R,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof u=="string"&&u.length<512&&n===R&&u.charAt(0)==="<"&&!$t.test(u)&&(Y.support.checkClone||!Qt.test(u))&&(Y.support.html5Clone||!Jt.test(u))&&(s=!0,i=Y.fragments[u],o=i!==t),i||(i=n.createDocumentFragment(),Y.clean(e,n,i,r),s&&(Y.fragments[u]=o&&i)),{fragment:i,cacheable:s}},Y.fragments={},Y.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Y.fn[e]=function(n){var r,i=0,s=[],o=Y(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),Y(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),Y.extend({clone:function(e,t,n){var r,i,s,o;Y.support.html5Clone||Y.isXMLDoc(e)||!Jt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(tn.innerHTML=e.outerHTML,tn.removeChild(o=tn.firstChild));if((!Y.support.noCloneEvent||!Y.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!Y.isXMLDoc(e)){p(e,o),r=d(e),i=d(o);for(s=0;r[s];++s)i[s]&&p(r[s],i[s])}if(t){h(e,o);if(n){r=d(e),i=d(o);for(s=0;r[s];++s)h(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var i,s,o,u,a,f,c,h,p,d,m,g,y=t===R&&en,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=R;for(i=0;(o=e[i])!=null;i++){typeof o=="number"&&(o+="");if(!o)continue;if(typeof o=="string")if(!Xt.test(o))o=t.createTextNode(o);else{y=y||l(t),c=t.createElement("div"),y.appendChild(c),o=o.replace(Ut,"<$1></$2>"),u=(zt.exec(o)||["",""])[1].toLowerCase(),a=Zt[u]||Zt._default,f=a[0],c.innerHTML=a[1]+o+a[2];while(f--)c=c.lastChild;if(!Y.support.tbody){h=Wt.test(o),p=u==="table"&&!h?c.firstChild&&c.firstChild.childNodes:a[1]==="<table>"&&!h?c.childNodes:[];for(s=p.length-1;s>=0;--s)Y.nodeName(p[s],"tbody")&&!p[s].childNodes.length&&p[s].parentNode.removeChild(p[s])}!Y.support.leadingWhitespace&&Rt.test(o)&&c.insertBefore(t.createTextNode(Rt.exec(o)[0]),c.firstChild),o=c.childNodes,c.parentNode.removeChild(c)}o.nodeType?b.push(o):Y.merge(b,o)}c&&(o=c=y=null);if(!Y.support.appendChecked)for(i=0;(o=b[i])!=null;i++)Y.nodeName(o,"input")?v(o):typeof o.getElementsByTagName!="undefined"&&Y.grep(o.getElementsByTagName("input"),v);if(n){m=function(e){if(!e.type||Gt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(i=0;(o=b[i])!=null;i++)if(!Y.nodeName(o,"script")||!m(o))n.appendChild(o),typeof o.getElementsByTagName!="undefined"&&(g=Y.grep(Y.merge([],o.getElementsByTagName("script")),m),b.splice.apply(b,[i+1,0].concat(g)),i+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=Y.expando,a=Y.cache,f=Y.support.deleteExpando,l=Y.event.special;for(;(i=e[o])!=null;o++)if(t||Y.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?Y.event.remove(i,s):Y.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,Y.deletedIds.push(r))}}}}),function(){var e,t;Y.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=Y.uaMatch(z.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),Y.browser=t,Y.sub=function(){function e(t,n){return new e.fn.init(t,n)}Y.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function n(n,r){return r&&r instanceof Y&&!(r instanceof e)&&(r=e(r)),Y.fn.init.call(this,n,r,t)},e.fn.init.prototype=e.fn;var t=e(R);return e}}();var nn,rn,sn,on=/alpha\([^)]*\)/i,un=/opacity=([^)]*)/,an=/^(top|right|bottom|left)$/,fn=/^(none|table(?!-c[ea]).+)/,ln=/^margin/,cn=new RegExp("^("+Z+")(.*)$","i"),hn=new RegExp("^("+Z+")(?!px)[a-z%]+$","i"),pn=new RegExp("^([-+])=("+Z+")","i"),dn={},vn={position:"absolute",visibility:"hidden",display:"block"},mn={letterSpacing:0,fontWeight:400},gn=["Top","Right","Bottom","Left"],yn=["Webkit","O","Moz","ms"],bn=Y.fn.toggle;Y.fn.extend({css:function(e,n){return Y.access(this,function(e,n,r){return r!==t?Y.style(e,n,r):Y.css(e,n)},e,n,arguments.length>1)},show:function(){return y(this,!0)},hide:function(){return y(this)},toggle:function(e,t){var n=typeof e=="boolean";return Y.isFunction(e)&&Y.isFunction(t)?bn.apply(this,arguments):this.each(function(){(n?e:g(this))?Y(this).show():Y(this).hide()})}}),Y.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=nn(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":Y.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=Y.camelCase(n),f=e.style;n=Y.cssProps[a]||(Y.cssProps[a]=m(f,a)),u=Y.cssHooks[n]||Y.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=pn.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(Y.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!Y.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=Y.camelCase(n);return n=Y.cssProps[a]||(Y.cssProps[a]=m(e.style,a)),u=Y.cssHooks[n]||Y.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=nn(e,n)),s==="normal"&&n in mn&&(s=mn[n]),r||i!==t?(o=parseFloat(s),r||Y.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?nn=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u[n],r===""&&!Y.contains(t.ownerDocument,t)&&(r=Y.style(t,n)),hn.test(r)&&ln.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:R.documentElement.currentStyle&&(nn=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),hn.test(i)&&!an.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),Y.each(["height","width"],function(e,t){Y.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&fn.test(nn(e,"display"))?Y.swap(e,vn,function(){return E(e,t,r)}):E(e,t,r)},set:function(e,n,r){return b(e,n,r?w(e,t,r,Y.support.boxSizing&&Y.css(e,"boxSizing")==="border-box"):0)}}}),Y.support.opacity||(Y.cssHooks.opacity={get:function(e,t){return un.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=Y.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&Y.trim(s.replace(on,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=on.test(s)?s.replace(on,i):s+" "+i}}),Y(function(){Y.support.reliableMarginRight||(Y.cssHooks.marginRight={get:function(e,t){return Y.swap(e,{display:"inline-block"},function(){if(t)return nn(e,"marginRight")})}}),!Y.support.pixelPosition&&Y.fn.position&&Y.each(["top","left"],function(e,t){Y.cssHooks[t]={get:function(e,n){if(n){var r=nn(e,t);return hn.test(r)?Y(e).position()[t]+"px":r}}}})}),Y.expr&&Y.expr.filters&&(Y.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!Y.support.reliableHiddenOffsets&&(e.style&&e.style.display||nn(e,"display"))==="none"},Y.expr.filters.visible=function(e){return!Y.expr.filters.hidden(e)}),Y.each({margin:"",padding:"",border:"Width"},function(e,t){Y.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+gn[r]+t]=i[r]||i[r-2]||i[0];return s}},ln.test(e)||(Y.cssHooks[e+t].set=b)});var wn=/%20/g,En=/\[\]$/,Sn=/\r?\n/g,xn=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Tn=/^(?:select|textarea)/i;Y.fn.extend({serialize:function(){return Y.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?Y.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Tn.test(this.nodeName)||xn.test(this.type))}).map(function(e,t){var n=Y(this).val();return n==null?null:Y.isArray(n)?Y.map(n,function(e,n){return{name:t.name,value:e.replace(Sn,"\r\n")}}):{name:t.name,value:n.replace(Sn,"\r\n")}}).get()}}),Y.param=function(e,n){var r,i=[],s=function(e,t){t=Y.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=Y.ajaxSettings&&Y.ajaxSettings.traditional);if(Y.isArray(e)||e.jquery&&!Y.isPlainObject(e))Y.each(e,function(){s(this.name,this.value)});else for(r in e)x(r,e[r],n,s);return i.join("&").replace(wn,"+")};var Nn,Cn,kn=/#.*$/,Ln=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,An=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,On=/^(?:GET|HEAD)$/,Mn=/^\/\//,_n=/\?/,Dn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Pn=/([?&])_=[^&]*/,Hn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Bn=Y.fn.load,jn={},Fn={},In=["*/"]+["*"];try{Cn=U.href}catch(qn){Cn=R.createElement("a"),Cn.href="",Cn=Cn.href}Nn=Hn.exec(Cn.toLowerCase())||[],Y.fn.load=function(e,n,r){if(typeof e!="string"&&Bn)return Bn.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),Y.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),Y.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?Y("<div>").append(e.replace(Dn,"")).find(i):e)}),this},Y.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){Y.fn[t]=function(e){return this.on(t,e)}}),Y.each(["get","post"],function(e,n){Y[n]=function(e,r,i,s){return Y.isFunction(r)&&(s=s||i,i=r,r=t),Y.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),Y.extend({getScript:function(e,n){return Y.get(e,t,n,"script")},getJSON:function(e,t,n){return Y.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?C(e,Y.ajaxSettings):(t=e,e=Y.ajaxSettings),C(e,t),e},ajaxSettings:{url:Cn,isLocal:An.test(Nn[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":In},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":Y.parseJSON,"text xml":Y.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:T(jn),ajaxTransport:T(Fn),ajax:function(e,n){function r(e,n,r,o){var f,c,y,b,E,x=n;if(w===2)return;w=2,a&&clearTimeout(a),u=t,s=o||"",S.readyState=e>0?4:0,r&&(b=k(h,S,r));if(e>=200&&e<300||e===304)h.ifModified&&(E=S.getResponseHeader("Last-Modified"),E&&(Y.lastModified[i]=E),E=S.getResponseHeader("Etag"),E&&(Y.etag[i]=E)),e===304?(x="notmodified",f=!0):(f=L(h,b),x=f.state,c=f.data,y=f.error,f=!y);else{y=x;if(!x||e)x="error",e<0&&(e=0)}S.status=e,S.statusText=(n||x)+"",f?v.resolveWith(p,[c,x,S]):v.rejectWith(p,[S,x,y]),S.statusCode(g),g=t,l&&d.trigger("ajax"+(f?"Success":"Error"),[S,h,f?c:y]),m.fireWith(p,[S,x]),l&&(d.trigger("ajaxComplete",[S,h]),--Y.active||Y.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var i,s,o,u,a,f,l,c,h=Y.ajaxSetup({},n),p=h.context||h,d=p!==h&&(p.nodeType||p instanceof Y)?Y(p):Y.event,v=Y.Deferred(),m=Y.Callbacks("once memory"),g=h.statusCode||{},y={},b={},w=0,E="canceled",S={readyState:0,setRequestHeader:function(e,t){if(!w){var n=e.toLowerCase();e=b[n]=b[n]||e,y[e]=t}return this},getAllResponseHeaders:function(){return w===2?s:null},getResponseHeader:function(e){var n;if(w===2){if(!o){o={};while(n=Ln.exec(s))o[n[1].toLowerCase()]=n[2]}n=o[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return w||(h.mimeType=e),this},abort:function(e){return e=e||E,u&&u.abort(e),r(0,e),this}};v.promise(S),S.success=S.done,S.error=S.fail,S.complete=m.add,S.statusCode=function(e){if(e){var t;if(w<2)for(t in e)g[t]=[g[t],e[t]];else t=e[S.status],S.always(t)}return this},h.url=((e||h.url)+"").replace(kn,"").replace(Mn,Nn[1]+"//"),h.dataTypes=Y.trim(h.dataType||"*").toLowerCase().split(tt),h.crossDomain==null&&(f=Hn.exec(h.url.toLowerCase())||!1,h.crossDomain=f&&f.join(":")+(f[3]?"":f[1]==="http:"?80:443)!==Nn.join(":")+(Nn[3]?"":Nn[1]==="http:"?80:443)),h.data&&h.processData&&typeof h.data!="string"&&(h.data=Y.param(h.data,h.traditional)),N(jn,h,n,S);if(w===2)return S;l=h.global,h.type=h.type.toUpperCase(),h.hasContent=!On.test(h.type),l&&Y.active++===0&&Y.event.trigger("ajaxStart");if(!h.hasContent){h.data&&(h.url+=(_n.test(h.url)?"&":"?")+h.data,delete h.data),i=h.url;if(h.cache===!1){var x=Y.now(),T=h.url.replace(Pn,"$1_="+x);h.url=T+(T===h.url?(_n.test(h.url)?"&":"?")+"_="+x:"")}}(h.data&&h.hasContent&&h.contentType!==!1||n.contentType)&&S.setRequestHeader("Content-Type",h.contentType),h.ifModified&&(i=i||h.url,Y.lastModified[i]&&S.setRequestHeader("If-Modified-Since",Y.lastModified[i]),Y.etag[i]&&S.setRequestHeader("If-None-Match",Y.etag[i])),S.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+(h.dataTypes[0]!=="*"?", "+In+"; q=0.01":""):h.accepts["*"]);for(c in h.headers)S.setRequestHeader(c,h.headers[c]);if(!h.beforeSend||h.beforeSend.call(p,S,h)!==!1&&w!==2){E="abort";for(c in{success:1,error:1,complete:1})S[c](h[c]);u=N(Fn,h,n,S);if(!u)r(-1,"No Transport");else{S.readyState=1,l&&d.trigger("ajaxSend",[S,h]),h.async&&h.timeout>0&&(a=setTimeout(function(){S.abort("timeout")},h.timeout));try{w=1,u.send(y,r)}catch(C){if(!(w<2))throw C;r(-1,C)}}return S}return S.abort()},active:0,lastModified:{},etag:{}});var Rn=[],Un=/\?/,zn=/(=)\?(?=&|$)|\?\?/,Wn=Y.now();Y.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Rn.pop()||Y.expando+"_"+Wn++;return this[e]=!0,e}}),Y.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&zn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&zn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=Y.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(zn,"$1"+s):h?n.data=a.replace(zn,"$1"+s):l&&(n.url+=(Un.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||Y.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Rn.push(s)),u&&Y.isFunction(o)&&o(u[0]),u=o=t}),"script"}),Y.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return Y.globalEval(e),e}}}),Y.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),Y.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=R.head||R.getElementsByTagName("head")[0]||R.documentElement;return{send:function(i,s){n=R.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||s(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Xn,Vn=e.ActiveXObject?function(){for(var e in Xn)Xn[e](0,1)}:!1,$n=0;Y.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&A()||O()}:A,function(e){Y.extend(Y.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(Y.ajaxSettings.xhr()),Y.support.ajax&&Y.ajaxTransport(function(n){if(!n.crossDomain||Y.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=Y.noop,Vn&&delete Xn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(e){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++$n,Vn&&(Xn||(Xn={},Y(e).unload(Vn)),Xn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var Jn,Kn,Qn=/^(?:toggle|show|hide)$/,Gn=new RegExp("^(?:([-+])=|)("+Z+")([a-z%]*)$","i"),Yn=/queueHooks$/,Zn=[H],er={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=Gn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(Y.cssNumber[e]?"":"px");if(r!=="px"&&u){u=Y.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,Y.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};Y.Animation=Y.extend(D,{tweener:function(e,t){Y.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],er[n]=er[n]||[],er[n].unshift(t)},prefilter:function(e,t){t?Zn.unshift(e):Zn.push(e)}}),Y.Tween=B,B.prototype={constructor:B,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(Y.cssNumber[n]?"":"px")},cur:function(){var e=B.propHooks[this.prop];return e&&e.get?e.get(this):B.propHooks._default.get(this)},run:function(e){var t,n=B.propHooks[this.prop];return this.options.duration?this.pos=t=Y.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):B.propHooks._default.set(this),this}},B.prototype.init.prototype=B.prototype,B.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=Y.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){Y.fx.step[e.prop]?Y.fx.step[e.prop](e):e.elem.style&&(e.elem.style[Y.cssProps[e.prop]]!=null||Y.cssHooks[e.prop])?Y.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},B.propHooks.scrollTop=B.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Y.each(["toggle","show","hide"],function(e,t){var n=Y.fn[t];Y.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&Y.isFunction(r)&&Y.isFunction(i)?n.apply(this,arguments):this.animate(j(t,!0),r,i,s)}}),Y.fn.extend({fadeTo:function(e,t,n,r){return this.filter(g).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Y.isEmptyObject(e),s=Y.speed(t,n,r),o=function(){var t=D(this,Y.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=Y.timers,o=Y._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Yn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&Y.dequeue(this,e)})}}),Y.each({slideDown:j("show"),slideUp:j("hide"),slideToggle:j("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Y.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Y.speed=function(e,t,n){var r=e&&typeof e=="object"?Y.extend({},e):{complete:n||!n&&t||Y.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Y.isFunction(t)&&t};r.duration=Y.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in Y.fx.speeds?Y.fx.speeds[r.duration]:Y.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){Y.isFunction(r.old)&&r.old.call(this),r.queue&&Y.dequeue(this,r.queue)},r},Y.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Y.timers=[],Y.fx=B.prototype.init,Y.fx.tick=function(){var e,t=Y.timers,n=0;for(;n<t.length;n++)e=t[n],!e()&&t[n]===e&&t.splice(n--,1);t.length||Y.fx.stop()},Y.fx.timer=function(e){e()&&Y.timers.push(e)&&!Kn&&(Kn=setInterval(Y.fx.tick,Y.fx.interval))},Y.fx.interval=13,Y.fx.stop=function(){clearInterval(Kn),Kn=null},Y.fx.speeds={slow:600,fast:200,_default:400},Y.fx.step={},Y.expr&&Y.expr.filters&&(Y.expr.filters.animated=function(e){return Y.grep(Y.timers,function(t){return e===t.elem}).length});var tr=/^(?:body|html)$/i;Y.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){Y.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?Y.offset.bodyOffset(l):(n=c.documentElement,Y.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=F(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},Y.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return Y.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(Y.css(e,"marginTop"))||0,n+=parseFloat(Y.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=Y.css(e,"position");r==="static"&&(e.style.position="relative");var i=Y(e),s=i.offset(),o=Y.css(e,"top"),u=Y.css(e,"left"),a=(r==="absolute"||r==="fixed")&&Y.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),Y.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},Y.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=tr.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(Y.css(e,"marginTop"))||0,n.left-=parseFloat(Y.css(e,"marginLeft"))||0,r.top+=parseFloat(Y.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(Y.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||R.body;while(e&&!tr.test(e.nodeName)&&Y.css(e,"position")==="static")e=e.offsetParent;return e||R.body})}}),Y.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);Y.fn[e]=function(i){return Y.access(this,function(e,i,s){var o=F(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?Y(o).scrollLeft():s,r?s:Y(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),Y.each({Height:"height",Width:"width"},function(e,n){Y.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){Y.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return Y.access(this,function(n,r,i){var s;return Y.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?Y.css(n,r,i,u):Y.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=Y,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return Y})})(window);
//     Underscore.js 1.4.1
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

(function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.concat,f=r.unshift,l=i.toString,c=i.hasOwnProperty,h=r.forEach,p=r.map,d=r.reduce,v=r.reduceRight,m=r.filter,g=r.every,y=r.some,b=r.indexOf,w=r.lastIndexOf,E=Array.isArray,S=Object.keys,x=s.bind,T=function(e){if(e instanceof T)return e;if(!(this instanceof T))return new T(e);this._wrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=T),exports._=T):e._=T,T.VERSION="1.4.1";var N=T.each=T.forEach=function(e,t,r){if(h&&e.forEach===h)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(t.call(r,e[i],i,e)===n)return}else for(var o in e)if(T.has(e,o)&&t.call(r,e[o],o,e)===n)return};T.map=T.collect=function(e,t,n){var r=[];return p&&e.map===p?e.map(t,n):(N(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),r)},T.reduce=T.foldl=T.inject=function(e,t,n,r){var i=arguments.length>2;if(d&&e.reduce===d)return r&&(t=T.bind(t,r)),i?e.reduce(t,n):e.reduce(t);N(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n},T.reduceRight=T.foldr=function(e,t,n,r){var i=arguments.length>2;if(v&&e.reduceRight===v)return r&&(t=T.bind(t,r)),arguments.length>2?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=T.keys(e);s=o.length}N(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n},T.find=T.detect=function(e,t,n){var r;return C(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},T.filter=T.select=function(e,t,n){var r=[];return m&&e.filter===m?e.filter(t,n):(N(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)}),r)},T.reject=function(e,t,n){var r=[];return N(e,function(e,i,s){t.call(n,e,i,s)||(r[r.length]=e)}),r},T.every=T.all=function(e,t,r){t||(t=T.identity);var i=!0;return g&&e.every===g?e.every(t,r):(N(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n}),!!i)};var C=T.some=T.any=function(e,t,r){t||(t=T.identity);var i=!1;return y&&e.some===y?e.some(t,r):(N(e,function(e,s,o){if(i||(i=t.call(r,e,s,o)))return n}),!!i)};T.contains=T.include=function(e,t){var n=!1;return b&&e.indexOf===b?e.indexOf(t)!=-1:(n=C(e,function(e){return e===t}),n)},T.invoke=function(e,t){var n=u.call(arguments,2);return T.map(e,function(e){return(T.isFunction(t)?t:e[t]).apply(e,n)})},T.pluck=function(e,t){return T.map(e,function(e){return e[t]})},T.where=function(e,t){return T.isEmpty(t)?[]:T.filter(e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},T.max=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&T.isEmpty(e))return-Infinity;var r={computed:-Infinity};return N(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>=r.computed&&(r={value:e,computed:o})}),r.value},T.min=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&T.isEmpty(e))return Infinity;var r={computed:Infinity};return N(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o<r.computed&&(r={value:e,computed:o})}),r.value},T.shuffle=function(e){var t,n=0,r=[];return N(e,function(e){t=T.random(n++),r[n-1]=r[t],r[t]=e}),r};var k=function(e){return T.isFunction(e)?e:function(t){return t[e]}};T.sortBy=function(e,t,n){var r=k(t);return T.pluck(T.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index<t.index?-1:1}),"value")};var L=function(e,t,n,r){var i={},s=k(t);return N(e,function(t,o){var u=s.call(n,t,o,e);r(i,u,t)}),i};T.groupBy=function(e,t,n){return L(e,t,n,function(e,t,n){(T.has(e,t)?e[t]:e[t]=[]).push(n)})},T.countBy=function(e,t,n){return L(e,t,n,function(e,t,n){T.has(e,t)||(e[t]=0),e[t]++})},T.sortedIndex=function(e,t,n,r){n=n==null?T.identity:k(n);var i=n.call(r,t),s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s},T.toArray=function(e){return e?e.length===+e.length?u.call(e):T.values(e):[]},T.size=function(e){return e.length===+e.length?e.length:T.keys(e).length},T.first=T.head=T.take=function(e,t,n){return t!=null&&!n?u.call(e,0,t):e[0]},T.initial=function(e,t,n){return u.call(e,0,e.length-(t==null||n?1:t))},T.last=function(e,t,n){return t!=null&&!n?u.call(e,Math.max(e.length-t,0)):e[e.length-1]},T.rest=T.tail=T.drop=function(e,t,n){return u.call(e,t==null||n?1:t)},T.compact=function(e){return T.filter(e,function(e){return!!e})};var A=function(e,t,n){return N(e,function(e){T.isArray(e)?t?o.apply(n,e):A(e,t,n):n.push(e)}),n};T.flatten=function(e,t){return A(e,t,[])},T.without=function(e){return T.difference(e,u.call(arguments,1))},T.uniq=T.unique=function(e,t,n,r){var i=n?T.map(e,n,r):e,s=[],o=[];return N(i,function(n,r){if(t?!r||o[o.length-1]!==n:!T.contains(o,n))o.push(n),s.push(e[r])}),s},T.union=function(){return T.uniq(a.apply(r,arguments))},T.intersection=function(e){var t=u.call(arguments,1);return T.filter(T.uniq(e),function(e){return T.every(t,function(t){return T.indexOf(t,e)>=0})})},T.difference=function(e){var t=a.apply(r,u.call(arguments,1));return T.filter(e,function(e){return!T.contains(t,e)})},T.zip=function(){var e=u.call(arguments),t=T.max(T.pluck(e,"length")),n=new Array(t);for(var r=0;r<t;r++)n[r]=T.pluck(e,""+r);return n},T.object=function(e,t){var n={};for(var r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},T.indexOf=function(e,t,n){var r=0,i=e.length;if(n){if(typeof n!="number")return r=T.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(b&&e.indexOf===b)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},T.lastIndexOf=function(e,t,n){var r=n!=null;if(w&&e.lastIndexOf===w)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1},T.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s};var O=function(){};T.bind=function(e,t){var n,r;if(e.bind===x&&x)return x.apply(e,u.call(arguments,1));if(!T.isFunction(e))throw new TypeError;return r=u.call(arguments,2),n=function(){if(this instanceof n){O.prototype=e.prototype;var i=new O,s=e.apply(i,r.concat(u.call(arguments)));return Object(s)===s?s:i}return e.apply(t,r.concat(u.call(arguments)))}},T.bindAll=function(e){var t=u.call(arguments,1);return t.length==0&&(t=T.functions(e)),N(t,function(t){e[t]=T.bind(e[t],e)}),e},T.memoize=function(e,t){var n={};return t||(t=T.identity),function(){var r=t.apply(this,arguments);return T.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},T.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},T.defer=function(e){return T.delay.apply(T,[e,1].concat(u.call(arguments,1)))},T.throttle=function(e,t){var n,r,i,s,o,u,a=T.debounce(function(){o=s=!1},t);return function(){n=this,r=arguments;var f=function(){i=null,o&&(u=e.apply(n,r)),a()};return i||(i=setTimeout(f,t)),s?o=!0:(s=!0,u=e.apply(n,r)),a(),u}},T.debounce=function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},T.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}},T.wrap=function(e,t){return function(){var n=[e];return o.apply(n,arguments),t.apply(this,n)}},T.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},T.after=function(e,t){return e<=0?t():function(){if(--e<1)return t.apply(this,arguments)}},T.keys=S||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)T.has(e,n)&&(t[t.length]=n);return t},T.values=function(e){var t=[];for(var n in e)T.has(e,n)&&t.push(e[n]);return t},T.pairs=function(e){var t=[];for(var n in e)T.has(e,n)&&t.push([n,e[n]]);return t},T.invert=function(e){var t={};for(var n in e)T.has(e,n)&&(t[e[n]]=n);return t},T.functions=T.methods=function(e){var t=[];for(var n in e)T.isFunction(e[n])&&t.push(n);return t.sort()},T.extend=function(e){return N(u.call(arguments,1),function(t){for(var n in t)e[n]=t[n]}),e},T.pick=function(e){var t={},n=a.apply(r,u.call(arguments,1));return N(n,function(n){n in e&&(t[n]=e[n])}),t},T.omit=function(e){var t={},n=a.apply(r,u.call(arguments,1));for(var i in e)T.contains(n,i)||(t[i]=e[i]);return t},T.defaults=function(e){return N(u.call(arguments,1),function(t){for(var n in t)e[n]==null&&(e[n]=t[n])}),e},T.clone=function(e){return T.isObject(e)?T.isArray(e)?e.slice():T.extend({},e):e},T.tap=function(e,t){return t(e),e};var M=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e instanceof T&&(e=e._wrapped),t instanceof T&&(t=t._wrapped);var i=l.call(e);if(i!=l.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var s=n.length;while(s--)if(n[s]==e)return r[s]==t;n.push(e),r.push(t);var o=0,u=!0;if(i=="[object Array]"){o=e.length,u=o==t.length;if(u)while(o--)if(!(u=M(e[o],t[o],n,r)))break}else{var a=e.constructor,f=t.constructor;if(a!==f&&!(T.isFunction(a)&&a instanceof a&&T.isFunction(f)&&f instanceof f))return!1;for(var c in e)if(T.has(e,c)){o++;if(!(u=T.has(t,c)&&M(e[c],t[c],n,r)))break}if(u){for(c in t)if(T.has(t,c)&&!(o--))break;u=!o}}return n.pop(),r.pop(),u};T.isEqual=function(e,t){return M(e,t,[],[])},T.isEmpty=function(e){if(e==null)return!0;if(T.isArray(e)||T.isString(e))return e.length===0;for(var t in e)if(T.has(e,t))return!1;return!0},T.isElement=function(e){return!!e&&e.nodeType===1},T.isArray=E||function(e){return l.call(e)=="[object Array]"},T.isObject=function(e){return e===Object(e)},N(["Arguments","Function","String","Number","Date","RegExp"],function(e){T["is"+e]=function(t){return l.call(t)=="[object "+e+"]"}}),T.isArguments(arguments)||(T.isArguments=function(e){return!!e&&!!T.has(e,"callee")}),typeof /./!="function"&&(T.isFunction=function(e){return typeof e=="function"}),T.isFinite=function(e){return T.isNumber(e)&&isFinite(e)},T.isNaN=function(e){return T.isNumber(e)&&e!=+e},T.isBoolean=function(e){return e===!0||e===!1||l.call(e)=="[object Boolean]"},T.isNull=function(e){return e===null},T.isUndefined=function(e){return e===void 0},T.has=function(e,t){return c.call(e,t)},T.noConflict=function(){return e._=t,this},T.identity=function(e){return e},T.times=function(e,t,n){for(var r=0;r<e;r++)t.call(n,r)},T.random=function(e,t){return t==null&&(t=e,e=0),e+(0|Math.random()*(t-e+1))};var _={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};_.unescape=T.invert(_.escape);var D={escape:new RegExp("["+T.keys(_.escape).join("")+"]","g"),unescape:new RegExp("("+T.keys(_.unescape).join("|")+")","g")};T.each(["escape","unescape"],function(e){T[e]=function(t){return t==null?"":(""+t).replace(D[e],function(t){return _[e][t]})}}),T.result=function(e,t){if(e==null)return null;var n=e[t];return T.isFunction(n)?n.call(e):n},T.mixin=function(e){N(T.functions(e),function(t){var n=T[t]=e[t];T.prototype[t]=function(){var e=[this._wrapped];return o.apply(e,arguments),F.call(this,n.apply(T,e))}})};var P=0;T.uniqueId=function(e){var t=P++;return e?e+t:t},T.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var H=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},j=/\\|'|\r|\n|\t|\u2028|\u2029/g;T.template=function(e,t,n){n=T.defaults({},n,T.templateSettings);var r=new RegExp([(n.escape||H).source,(n.interpolate||H).source,(n.evaluate||H).source].join("|")+"|$","g"),i=0,s="__p+='";e.replace(r,function(t,n,r,o,u){s+=e.slice(i,u).replace(j,function(e){return"\\"+B[e]}),s+=n?"'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?"'+\n((__t=("+r+"))==null?'':__t)+\n'":o?"';\n"+o+"\n__p+='":"",i=u+t.length}),s+="';\n",n.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var o=new Function(n.variable||"obj","_",s)}catch(u){throw u.source=s,u}if(t)return o(t,T);var a=function(e){return o.call(this,e,T)};return a.source="function("+(n.variable||"obj")+"){\n"+s+"}",a},T.chain=function(e){return T(e).chain()};var F=function(e){return this._chain?T(e).chain():e};T.mixin(T),N(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];T.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e=="shift"||e=="splice")&&n.length===0&&delete n[0],F.call(this,n)}}),N(["concat","join","slice"],function(e){var t=r[e];T.prototype[e]=function(){return F.call(this,t.apply(this._wrapped,arguments))}}),T.extend(T.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
define("underscore", (function (global) {
    return function () {
        var ret, fn;
        return ret || global._;
    };
}(this)));

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org

(function(){var e=this,t=e.Backbone,n=Array.prototype.slice,r=Array.prototype.splice,i;i="undefined"!=typeof exports?exports:e.Backbone={},i.VERSION="0.9.2";var s=e._;!s&&"undefined"!=typeof require&&(s=require("underscore"));var o=e.jQuery||e.Zepto||e.ender;i.setDomLibrary=function(e){o=e},i.noConflict=function(){return e.Backbone=t,this},i.emulateHTTP=!1,i.emulateJSON=!1;var u=/\s+/,a=i.Events={on:function(e,t,n){var r,i,s,o,a;if(!t)return this;e=e.split(u);for(r=this._callbacks||(this._callbacks={});i=e.shift();)s=(a=r[i])?a.tail:{},s.next=o={},s.context=n,s.callback=t,r[i]={tail:o,next:a?a.next:s};return this},off:function(e,t,n){var r,i,o,a,f,l;if(i=this._callbacks){if(!e&&!t&&!n)return delete this._callbacks,this;for(e=e?e.split(u):s.keys(i);r=e.shift();)if(o=i[r],delete i[r],o&&(t||n))for(a=o.tail;(o=o.next)!==a;)(f=o.callback,l=o.context,t&&f!==t||n&&l!==n)&&this.on(r,f,l);return this}},trigger:function(e){var t,r,i,s,o,a;if(!(i=this._callbacks))return this;o=i.all,e=e.split(u);for(a=n.call(arguments,1);t=e.shift();){if(r=i[t])for(s=r.tail;(r=r.next)!==s;)r.callback.apply(r.context||this,a);if(r=o){s=r.tail;for(t=[t].concat(a);(r=r.next)!==s;)r.callback.apply(r.context||this,t)}}return this}};a.bind=a.on,a.unbind=a.off;var f=i.Model=function(e,t){var n;e||(e={}),t&&t.parse&&(e=this.parse(e));if(n=T(this,"defaults"))e=s.extend({},n,e);t&&t.collection&&(this.collection=t.collection),this.attributes={},this._escapedAttributes={},this.cid=s.uniqueId("c"),this.changed={},this._silent={},this._pending={},this.set(e,{silent:!0}),this.changed={},this._silent={},this._pending={},this._previousAttributes=s.clone(this.attributes),this.initialize.apply(this,arguments)};s.extend(f.prototype,a,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return s.clone(this.attributes)},get:function(e){return this.attributes[e]},escape:function(e){var t;return(t=this._escapedAttributes[e])?t:(t=this.get(e),this._escapedAttributes[e]=s.escape(null==t?"":""+t))},has:function(e){return null!=this.get(e)},set:function(e,t,n){var r,i;s.isObject(e)||null==e?(r=e,n=t):(r={},r[e]=t),n||(n={});if(!r)return this;r instanceof f&&(r=r.attributes);if(n.unset)for(i in r)r[i]=void 0;if(!this._validate(r,n))return!1;this.idAttribute in r&&(this.id=r[this.idAttribute]);var t=n.changes={},o=this.attributes,u=this._escapedAttributes,a=this._previousAttributes||{};for(i in r){e=r[i];if(!s.isEqual(o[i],e)||n.unset&&s.has(o,i))delete u[i],(n.silent?this._silent:t)[i]=!0;n.unset?delete o[i]:o[i]=e,!s.isEqual(a[i],e)||s.has(o,i)!=s.has(a,i)?(this.changed[i]=e,n.silent||(this._pending[i]=!0)):(delete this.changed[i],delete this._pending[i])}return n.silent||this.change(n),this},unset:function(e,t){return(t||(t={})).unset=!0,this.set(e,null,t)},clear:function(e){return(e||(e={})).unset=!0,this.set(s.clone(this.attributes),e)},fetch:function(e){var e=e?s.clone(e):{},t=this,n=e.success;return e.success=function(r,i,s){if(!t.set(t.parse(r,s),e))return!1;n&&n(t,r)},e.error=i.wrapError(e.error,t,e),(this.sync||i.sync).call(this,"read",this,e)},save:function(e,t,n){var r,o;s.isObject(e)||null==e?(r=e,n=t):(r={},r[e]=t),n=n?s.clone(n):{};if(n.wait){if(!this._validate(r,n))return!1;o=s.clone(this.attributes)}e=s.extend({},n,{silent:!0});if(r&&!this.set(r,n.wait?e:n))return!1;var u=this,a=n.success;return n.success=function(e,t,i){t=u.parse(e,i),n.wait&&(delete n.wait,t=s.extend(r||{},t));if(!u.set(t,n))return!1;a?a(u,e):u.trigger("sync",u,e,n)},n.error=i.wrapError(n.error,u,n),t=this.isNew()?"create":"update",t=(this.sync||i.sync).call(this,t,this,n),n.wait&&this.set(o,e),t},destroy:function(e){var e=e?s.clone(e):{},t=this,n=e.success,r=function(){t.trigger("destroy",t,t.collection,e)};if(this.isNew())return r(),!1;e.success=function(i){e.wait&&r(),n?n(t,i):t.trigger("sync",t,i,e)},e.error=i.wrapError(e.error,t,e);var o=(this.sync||i.sync).call(this,"delete",this,e);return e.wait||r(),o},url:function(){var e=T(this,"urlRoot")||T(this.collection,"url")||N();return this.isNew()?e:e+("/"==e.charAt(e.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(e){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(e){e||(e={});var t=this._changing;this._changing=!0;for(var n in this._silent)this._pending[n]=!0;var r=s.extend({},e.changes,this._silent);this._silent={};for(n in r)this.trigger("change:"+n,this,this.get(n),e);if(t)return this;for(;!s.isEmpty(this._pending);){this._pending={},this.trigger("change",this,e);for(n in this.changed)!this._pending[n]&&!this._silent[n]&&delete this.changed[n];this._previousAttributes=s.clone(this.attributes)}return this._changing=!1,this},hasChanged:function(e){return arguments.length?s.has(this.changed,e):!s.isEmpty(this.changed)},changedAttributes:function(e){if(!e)return this.hasChanged()?s.clone(this.changed):!1;var t,n=!1,r=this._previousAttributes,i;for(i in e)s.isEqual(r[i],t=e[i])||((n||(n={}))[i]=t);return n},previous:function(e){return!arguments.length||!this._previousAttributes?null:this._previousAttributes[e]},previousAttributes:function(){return s.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(e,t){if(t.silent||!this.validate)return!0;var e=s.extend({},this.attributes,e),n=this.validate(e,t);return n?(t&&t.error?t.error(this,n,t):this.trigger("error",this,n,t),!1):!0}});var l=i.Collection=function(e,t){t||(t={}),t.model&&(this.model=t.model),t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,{silent:!0,parse:t.parse})};s.extend(l.prototype,a,{model:f,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},add:function(e,t){var n,i,o,u,a,f={},l={},c=[];t||(t={}),e=s.isArray(e)?e.slice():[e],n=0;for(i=e.length;n<i;n++){if(!(o=e[n]=this._prepareModel(e[n],t)))throw Error("Can't add an invalid model to a collection");u=o.cid,a=o.id,f[u]||this._byCid[u]||null!=a&&(l[a]||this._byId[a])?c.push(n):f[u]=l[a]=o}for(n=c.length;n--;)e.splice(c[n],1);n=0;for(i=e.length;n<i;n++)(o=e[n]).on("all",this._onModelEvent,this),this._byCid[o.cid]=o,null!=o.id&&(this._byId[o.id]=o);this.length+=i,r.apply(this.models,[null!=t.at?t.at:this.models.length,0].concat(e)),this.comparator&&this.sort({silent:!0});if(t.silent)return this;n=0;for(i=this.models.length;n<i;n++)f[(o=this.models[n]).cid]&&(t.index=n,o.trigger("add",o,this,t));return this},remove:function(e,t){var n,r,i,o;t||(t={}),e=s.isArray(e)?e.slice():[e],n=0;for(r=e.length;n<r;n++)if(o=this.getByCid(e[n])||this.get(e[n]))delete this._byId[o.id],delete this._byCid[o.cid],i=this.indexOf(o),this.models.splice(i,1),this.length--,t.silent||(t.index=i,o.trigger("remove",o,this,t)),this._removeReference(o);return this},push:function(e,t){return e=this._prepareModel(e,t),this.add(e,t),e},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return e=this._prepareModel(e,t),this.add(e,s.extend({at:0},t)),e},shift:function(e){var t=this.at(0);return this.remove(t,e),t},get:function(e){return null==e?void 0:this._byId[null!=e.id?e.id:e]},getByCid:function(e){return e&&this._byCid[e.cid||e]},at:function(e){return this.models[e]},where:function(e){return s.isEmpty(e)?[]:this.filter(function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},sort:function(e){e||(e={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var t=s.bind(this.comparator,this);return 1==this.comparator.length?this.models=this.sortBy(t):this.models.sort(t),e.silent||this.trigger("reset",this,e),this},pluck:function(e){return s.map(this.models,function(t){return t.get(e)})},reset:function(e,t){e||(e=[]),t||(t={});for(var n=0,r=this.models.length;n<r;n++)this._removeReference(this.models[n]);return this._reset(),this.add(e,s.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),this},fetch:function(e){e=e?s.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=this,n=e.success;return e.success=function(r,i,s){t[e.add?"add":"reset"](t.parse(r,s),e),n&&n(t,r)},e.error=i.wrapError(e.error,t,e),(this.sync||i.sync).call(this,"read",this,e)},create:function(e,t){var n=this,t=t?s.clone(t):{},e=this._prepareModel(e,t);if(!e)return!1;t.wait||n.add(e,t);var r=t.success;return t.success=function(i,s){t.wait&&n.add(i,t),r?r(i,s):i.trigger("sync",e,s,t)},e.save(null,t),e},parse:function(e){return e},chain:function(){return s(this.models).chain()},_reset:function(){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(e,t){return t||(t={}),e instanceof f?e.collection||(e.collection=this):(t.collection=this,e=new this.model(e,t),e._validate(e.attributes,t)||(e=!1)),e},_removeReference:function(e){this==e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){("add"==e||"remove"==e)&&n!=this||("destroy"==e&&this.remove(t,r),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],this._byId[t.id]=t),this.trigger.apply(this,arguments))}}),s.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(e){l.prototype[e]=function(){return s[e].apply(s,[this.models].concat(s.toArray(arguments)))}});var c=i.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},h=/:\w+/g,p=/\*\w+/g,d=/[-[\]{}()+?.,\\^$|#\s]/g;s.extend(c.prototype,a,{initialize:function(){},route:function(e,t,n){return i.history||(i.history=new v),s.isRegExp(e)||(e=this._routeToRegExp(e)),n||(n=this[t]),i.history.route(e,s.bind(function(r){r=this._extractParameters(e,r),n&&n.apply(this,r),this.trigger.apply(this,["route:"+t].concat(r)),i.history.trigger("route",this,t,r)},this)),this},navigate:function(e,t){i.history.navigate(e,t)},_bindRoutes:function(){if(this.routes){var e=[],t;for(t in this.routes)e.unshift([t,this.routes[t]]);t=0;for(var n=e.length;t<n;t++)this.route(e[t][0],e[t][1],this[e[t][1]])}},_routeToRegExp:function(e){return e=e.replace(d,"\\$&").replace(h,"([^/]+)").replace(p,"(.*?)"),RegExp("^"+e+"$")},_extractParameters:function(e,t){return e.exec(t).slice(1)}});var v=i.History=function(){this.handlers=[],s.bindAll(this,"checkUrl")},m=/^[#\/]/,g=/msie [\w.]+/;v.started=!1,s.extend(v.prototype,a,{interval:50,getHash:function(e){return(e=(e?e.location:window.location).href.match(/#(.*)$/))?e[1]:""},getFragment:function(e,t){if(null==e)if(this._hasPushState||t){var e=window.location.pathname,n=window.location.search;n&&(e+=n)}else e=this.getHash();return e.indexOf(this.options.root)||(e=e.substr(this.options.root.length)),e.replace(m,"")},start:function(e){if(v.started)throw Error("Backbone.history has already been started");v.started=!0,this.options=s.extend({},{root:"/"},this.options,e),this._wantsHashChange=!1!==this.options.hashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.options.pushState||!window.history||!window.history.pushState);var e=this.getFragment(),t=document.documentMode;if(t=g.exec(navigator.userAgent.toLowerCase())&&(!t||7>=t))this.iframe=o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(e);this._hasPushState?o(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!t?o(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=e,e=window.location,t=e.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!t)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&t&&e.hash&&(this.fragment=this.getHash().replace(m,""),window.history.replaceState({},document.title,e.protocol+"//"+e.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},stop:function(){o(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),v.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(){var e=this.getFragment();e==this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe)));if(e==this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(e){var t=this.fragment=this.getFragment(e);return s.any(this.handlers,function(e){if(e.route.test(t))return e.callback(t),!0})},navigate:function(e,t){if(!v.started)return!1;if(!t||!0===t)t={trigger:t};var n=(e||"").replace(m,"");this.fragment!=n&&(this._hasPushState?(0!=n.indexOf(this.options.root)&&(n=this.options.root+n),this.fragment=n,window.history[t.replace?"replaceState":"pushState"]({},document.title,n)):this._wantsHashChange?(this.fragment=n,this._updateHash(window.location,n,t.replace),this.iframe&&n!=this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,n,t.replace))):window.location.assign(this.options.root+e),t.trigger&&this.loadUrl(e))},_updateHash:function(e,t,n){n?e.replace(e.toString().replace(/(javascript:|#).*$/,"")+"#"+t):e.hash=t}});var y=i.View=function(e){this.cid=s.uniqueId("view"),this._configure(e||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},b=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");s.extend(y.prototype,a,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(e,t,n){return e=document.createElement(e),t&&o(e).attr(t),n&&o(e).html(n),e},setElement:function(e,t){return this.$el&&this.undelegateEvents(),this.$el=e instanceof o?e:o(e),this.el=this.$el[0],!1!==t&&this.delegateEvents(),this},delegateEvents:function(e){if(e||(e=T(this,"events"))){this.undelegateEvents();for(var t in e){var n=e[t];s.isFunction(n)||(n=this[e[t]]);if(!n)throw Error('Method "'+e[t]+'" does not exist');var r=t.match(b),i=r[1],r=r[2],n=s.bind(n,this),i=i+(".delegateEvents"+this.cid);""===r?this.$el.bind(i,n):this.$el.delegate(r,i,n)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(e){this.options&&(e=s.extend({},this.options,e));for(var t=0,n=w.length;t<n;t++){var r=w[t];e[r]&&(this[r]=e[r])}this.options=e},_ensureElement:function(){if(this.el)this.setElement(this.el,!1);else{var e=T(this,"attributes")||{};this.id&&(e.id=this.id),this.className&&(e["class"]=this.className),this.setElement(this.make(this.tagName,e),!1)}}}),f.extend=l.extend=c.extend=y.extend=function(e,t){var n=x(this,e,t);return n.extend=this.extend,n};var E={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};i.sync=function(e,t,n){var r=E[e];n||(n={});var u={type:r,dataType:"json"};return n.url||(u.url=T(t,"url")||N()),!n.data&&t&&("create"==e||"update"==e)&&(u.contentType="application/json",u.data=JSON.stringify(t.toJSON())),i.emulateJSON&&(u.contentType="application/x-www-form-urlencoded",u.data=u.data?{model:u.data}:{}),i.emulateHTTP&&("PUT"===r||"DELETE"===r)&&(i.emulateJSON&&(u.data._method=r),u.type="POST",u.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",r)}),"GET"!==u.type&&!i.emulateJSON&&(u.processData=!1),o.ajax(s.extend(u,n))},i.wrapError=function(e,t,n){return function(r,i){i=r===t?i:r,e?e(t,i,n):t.trigger("error",t,i,n)}};var S=function(){},x=function(e,t,n){var r;return r=t&&t.hasOwnProperty("constructor")?t.constructor:function(){e.apply(this,arguments)},s.extend(r,e),S.prototype=e.prototype,r.prototype=new S,t&&s.extend(r.prototype,t),n&&s.extend(r,n),r.prototype.constructor=r,r.__super__=e.prototype,r},T=function(e,t){return!e||!e[t]?null:s.isFunction(e[t])?e[t]():e[t]},N=function(){throw Error('A "url" property or function must be specified')}}).call(this);
define("backbone", ["underscore","jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Backbone;
    };
}(this)));

/*
 StackMob JS SDK Version 0.8.0 
 Copyright 2012 StackMob Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

(function(){window.StackMob=this.StackMob={DEFAULT_API_VERSION:0,DEFAULT_LOGIN_SCHEMA:"user",DEFAULT_LOGIN_FIELD:"username",DEFAULT_PASSWORD_FIELD:"password",EARTH_RADIANS_MI:3956.6,EARTH_RADIANS_KM:6367.5,FORCE_CREATE_REQUEST:"stackmob_force_create_request",ARRAY_FIELDNAME:"stackmob_array_fieldname",ARRAY_VALUES:"stackmob_array_values",CASCADE_DELETE:"stackmob_cascade_delete",HARD_DELETE:!0,SOFT_DELETE:!1,API_SERVER:"api.stackmob.com",RETRY_WAIT:1e4,RETRY_ATTEMPTS:3,REFRESH_TOKEN_KEY:"oauth2.refreshToken",POST:"POST",PUT:"PUT",DELETE:"DELETE",CONTENT_TYPE_JSON:"application/json",apiVersion:0,sdkVersion:"0.8.0",publicKey:null,Storage:{STORAGE_PREFIX:"stackmob.",persist:function(e,t){localStorage&&localStorage.setItem(this.STORAGE_PREFIX+e,t)},retrieve:function(e){return localStorage?localStorage.getItem(this.STORAGE_PREFIX+e):null},remove:function(e){localStorage&&localStorage.removeItem(this.STORAGE_PREFIX+e)}},_generateCallbacks:function(e,t){return e.success=function(e){t.isValidResult(e)?"function"==typeof t.yes&&t.yes(e):"function"==typeof t.no&&t.no(e)},!e.error&&"function"==typeof t.error&&(e.error=t.error),e},_containsCallbacks:function(e,t){return"object"==typeof e&&_.some(t,function(t){return"function"==typeof e[t]})},getLoggedInUser:function(e){var t=!this.isOAuth2Mode()&&this.Storage.retrieve(this.loggedInUserKey)||this.Storage.retrieve("oauth2.user");if(!e||!e.success)return this.isLoggedIn(e)&&t?t:null;this.hasValidOAuth(e)},isLoggedIn:function(e){if(!this._containsCallbacks(e,["yes","no"]))return!this.isLoggedOut()||this.hasValidOAuth(e);e=this._generateCallbacks(e,{isValidResult:function(e){return"undefined"!=typeof e},yes:e.yes,no:e.no,error:e.no}),this.hasValidOAuth(e)},isUserLoggedIn:function(e,t){if(!this._containsCallbacks(t,["yes","no"]))return e==this.getLoggedInUser(t);t=this._generateCallbacks(t,{isValidResult:function(t){return t==e},yes:t.yes,no:t.no,error:t.no}),this.hasValidOAuth(t)},isLoggedOut:function(e){if(!this._containsCallbacks(e,["yes","no"]))return!this.hasValidOAuth(e);e=this._generateCallbacks(e,{isValidResult:function(e){return"undefined"==typeof e},yes:e.yes,no:e.no,error:e.yes}),this.hasValidOAuth(e)},getScheme:function(){return!0===this.secure?"https":"http"},getBaseURL:function(){return StackMob.useRelativePathForAjax?StackMob.apiURL||window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")+"/":StackMob.apiURL||this.getScheme()+"://"+StackMob.API_SERVER+"/"},throwError:function(e){throw Error(e)},urlError:function(){this.throwError('A "url" property or function must be specified')},requirePublicKey:function(){StackMob.publicKey||this.throwError("Error: This requires that you initialize StackMob with a public key.")},isOAuth2Mode:function(){return!isNaN(StackMob.publicKey&&!StackMob.privateKey)},prepareCredsForSaving:function(e,t,n,r,i){return r=(new Date).getTime()+1e3*r,e={"oauth2.accessToken":e,"oauth2.macKey":n,"oauth2.expires":r,"oauth2.user":i},e[StackMob.REFRESH_TOKEN_KEY]=t,e},saveOAuthCredentials:function(e){var t=e["oauth2.accessToken"],n=e[StackMob.REFRESH_TOKEN_KEY];this.Storage.retrieve("oauth2.accessToken")!=t&&this.Storage.persist("oauth2.expires",e["oauth2.expires"]),this.Storage.persist("oauth2.accessToken",t),this.Storage.persist(StackMob.REFRESH_TOKEN_KEY,n),this.Storage.persist("oauth2.macKey",e["oauth2.macKey"]),this.Storage.persist("oauth2.user",e["oauth2.user"])},hasValidOAuth:function(e){if(!this.isOAuth2Mode())return e&&e.error&&e.error(),!1;var t=this.getOAuthCredentials();if(!_.all([t["oauth2.accessToken"],t["oauth2.macKey"],t["oauth2.expires"]||0],_.identity))return e&&e.success&&e.success(void 0),!1;if(!StackMob.hasExpiredOAuth())return e&&e.success&&e.success(this.Storage.retrieve("oauth2.user")),this.Storage.retrieve("oauth2.user");if(!e||!e.success)return!1;var n=e.success;e.success=function(e){n(e[StackMob.loginField])},StackMob.refreshSession.call(StackMob,e)},shouldSendRefreshToken:function(){return this.hasExpiredOAuth()&&this.hasRefreshToken()&&this.shouldKeepLoggedIn()},keepLoggedIn:function(e){StackMob.Storage.persist("oauth2.shouldKeepLoggedIn",!0===e)},shouldKeepLoggedIn:function(){return"true"===StackMob.Storage.retrieve("oauth2.shouldKeepLoggedIn")},hasRefreshToken:function(){var e=this.getOAuthCredentials();return e&&"undefined"!=typeof e[StackMob.REFRESH_TOKEN_KEY]&&null!=e[StackMob.REFRESH_TOKEN_KEY]},getRefreshToken:function(){return this.getOAuthCredentials()[StackMob.REFRESH_TOKEN_KEY]},hasExpiredOAuth:function(){return this.isOAuth2Mode()&&null==this.getOAuthExpireTime()||this.getOAuthExpireTime()<=(new Date).getTime()},getOAuthCredentials:function(){var e=StackMob.Storage.retrieve("oauth2.accessToken"),t=StackMob.Storage.retrieve("oauth2.macKey"),n=StackMob.Storage.retrieve("oauth2.expires"),r=StackMob.Storage.retrieve(StackMob.REFRESH_TOKEN_KEY),e={"oauth2.accessToken":e,"oauth2.macKey":t,"oauth2.expires":n};return e[StackMob.REFRESH_TOKEN_KEY]=r,e},getOAuthExpireTime:function(){var e=this.Storage.retrieve("oauth2.expires");return e?parseInt(e):null},METHOD_MAP:{create:"POST",read:"GET",update:"PUT","delete":"DELETE",post:"POST",get:"GET",put:"PUT",addRelationship:"POST",appendAndSave:"PUT",deleteAndSave:"DELETE",login:"GET",accessToken:"POST",refreshToken:"POST",logout:"GET",forgotPassword:"POST",loginWithTempAndSetNewPassword:"GET",resetPassword:"POST",facebookAccessToken:"POST",createUserWithFacebook:"POST",linkUserWithFacebook:"POST"},getProperty:function(e,t){return!e||!e[t]?null:_.isFunction(e[t])?e[t]():e[t]},init:function(e){e=e||{},this.initStart(e),this.userSchema=e.userSchema||this.DEFAULT_LOGIN_SCHEMA,this.loginField=e.loginField||this.DEFAULT_LOGIN_FIELD,this.passwordField=e.passwordField||this.DEFAULT_PASSWORD_FIELD,this.newPasswordField=e.newPasswordField||"new_password",this.apiVersion=e.apiVersion||this.DEFAULT_API_VERSION,this.appName=this.getProperty(e,"appName")||this.throwError("An appName must be specified"),this.clientSubdomain=this.getProperty(e,"clientSubdomain"),this.publicKey=e.publicKey,this.apiURL=e.apiURL;var t=0<window.location.hostname.indexOf(".stackmobapp.com");return this.useRelativePathForAjax=e.useRelativePathForAjax||t,this.oauth2targetdomain=e.oauth2targetdomain||this.oauth2targetdomain||"www.stackmob.com",this.secure=!0===e.secure,this.fullURL=!0===e.fullURL||"undefined"!=typeof PhoneGap||this.fullURL,this.ajax=e.ajax||this.ajax,this.urlRoot=e.urlRoot||this.getBaseURL(),this.initEnd(e),this},initStart:function(){},initEnd:function(){}}}).call(this),function(){function e(e,t){var n=StackMob.getBaseURL(),r=t.url.replace(RegExp(n,"g"),"/"),i=n.replace(RegExp("^http://|^https://","g"),"").replace(/\//,""),s=StackMob.Storage.retrieve("oauth2.accessToken"),o=StackMob.Storage.retrieve("oauth2.macKey");StackMob.Storage.retrieve("oauth2.expires");if(StackMob.isOAuth2Mode()&&s&&o){var u=t.type,a=i.split(":"),i=1<a.length?a[0]:i,f=1<a.length?a[1]:"https"==n.substring(0,5)?443:80,n=Math.round((new Date).getTime()/1e3),a="n"+Math.round(1e4*Math.random()),r=CryptoJS.HmacSHA1(n+"\n"+a+"\n"+u+"\n"+r+"\n"+i+"\n"+f+"\n\n",o).toString(CryptoJS.enc.Base64);return'MAC id="'+s+'",ts="'+n+'",nonce="'+a+'",mac="'+r+'"'}}var t=this;_.extend(StackMob,{isSencha:function(){return t.Ext},isZepto:function(){return t.Zepto},initEnd:function(){StackMob.Model=Backbone.Model.extend({urlRoot:StackMob.urlRoot,url:function(){var e=StackMob.urlRoot||StackMob.urlError();return e+=this.schemaName},getPrimaryKeyField:function(){return this.schemaName+"_id"},constructor:function(){this.setIDAttribute(),Backbone.Model.prototype.constructor.apply(this,arguments)},initialize:function(){StackMob.getProperty(this,"schemaName")||StackMob.throwError("A schemaName must be defined"),this.setIDAttribute()},setIDAttribute:function(){this.idAttribute=this.getPrimaryKeyField()},parse:function(e){return!e||e&&(!e.text||""==e.text)?e:JSON.parse(e.text)},sync:function(e,t,n){StackMob.sync.call(this,e,this,n)},create:function(e){var t={};t[StackMob.FORCE_CREATE_REQUEST]=!0,_.extend(t,e),this.save(null,t)},query:function(e,t){t=t||{},_.extend(t,{query:e}),this.fetch(t)},save:function(e,t){var n=e?e.success:{},r=e?e.error:{};"undefined"==typeof t&&(_.isFunction(n)||_.isFunction(r))?Backbone.Model.prototype.save.call(this,null,e):Backbone.Model.prototype.save.call(this,e,t)},fetchExpanded:function(e,t){(0>e||3<e)&&StackMob.throwError("Depth must be between 0 and 3 inclusive.");var n={};_.extend(n,t),n.data=n.data||{},n.data._expand=e,this.fetch(n)},getAsModel:function(e,t){var n=this.get(e);return n?_.isArray(n)?_.map(n,function(e){return new t(e)}):new t(n):{}},appendAndCreate:function(e,t,n){this.addRelationship(e,t,n)},addRelationship:function(e,t,n){n=n||{},n[StackMob.ARRAY_FIELDNAME]=e,n[StackMob.ARRAY_VALUES]=t,StackMob.sync.call(this,"addRelationship",this,n)},appendAndSave:function(e,t,n){n=n||{},n[StackMob.ARRAY_FIELDNAME]=e,n[StackMob.ARRAY_VALUES]=t,StackMob.sync.call(this,"appendAndSave",this,n)},deleteAndSave:function(e,t,n,r){r=r||{},r[StackMob.ARRAY_FIELDNAME]=e,r[StackMob.ARRAY_VALUES]=t,r[StackMob.CASCADE_DELETE]=n;var i=this;r.stackmob_ondeleteAndSave=function(){var n=i.get(e);i.set(e,_.difference(n,t))},StackMob.sync.call(this,"deleteAndSave",this,r)},setBinaryFile:function(e,t,n,r){this.set(e,"Content-Type: "+n+"\nContent-Disposition: attachment; filename="+t+"\nContent-Transfer-Encoding: base64\n\n"+r)},incrementOnSave:function(e,t){this.attributes[this.idAttribute]?(this.attributes[e]&&delete this.attributes[e],this.set(e+"[inc]",t)):StackMob.throwError("Please specify an id for the row you wish to update. When creating a new instance of your object, you need to pass in JSON that includes the id field and value (e.g. var user = new StackMob.User({ username: 'chucknorris' });)  Or, for custom objects: var todoInstance = new Todo({todo_id : '1234'})")},decrementOnSave:function(e,t){this.incrementOnSave(e,-1*t)}}),StackMob.Collection=Backbone.Collection.extend({initialize:function(){this.model||StackMob.throwError("Please specify a StackMob.Model for this collection. e.g., var Items = StackMob.Collection.extend({ model: Item });"),this.schemaName=(new this.model).schemaName},url:function(){var e=StackMob.urlRoot||StackMob.urlError();return e+=this.schemaName},parse:function(e){return!e||e&&(!e.text||""==e.text)?e:JSON.parse(e.text)},sync:function(e,t,n){StackMob.sync.call(this,e,this,n)},query:function(e,t){t=t||{},_.extend(t,{query:e}),this.fetch(t)},create:function(e,t){var n={};n[StackMob.FORCE_CREATE_REQUEST]=!0,_.extend(n,t),Backbone.Collection.prototype.create.call(this,e,n)},count:function(e,t){e=e||new StackMob.Collection.Query,t=t||{},t.stackmob_count=!0;var n=t.success;return t.success=function(e){if(e&&e.getAllResponseHeaders){var t=e.getResponseHeader("Content-Range"),r=0;t&&(r=t.substring(t.indexOf("/")+1,t.length));if(0===r)try{r=JSON.parse(e.responseText).length}catch(i){}n&&n(r)}else n(e)},e.setRange&&(t.query=e.setRange(0,0)),(this.sync||Backbone.sync).call(this,"query",this,t)}}),StackMob.User=StackMob.Model.extend({idAttribute:StackMob.loginField,schemaName:StackMob.userSchema,getPrimaryKeyField:function(){return StackMob.loginField},isLoggedIn:function(e){if(!StackMob._containsCallbacks(e,["yes","no"]))return StackMob.isUserLoggedIn(this.get(StackMob.loginField),e);e=StackMob._generateCallbacks(e,{isValidResult:function(e){return"undefined"!=typeof e},yes:e.yes,no:e.no,error:e.no}),StackMob.hasValidOAuth(e)},login:function(e,t){t=t||{},StackMob.keepLoggedIn("undefined"==typeof e?!1:e),t.data=t.data||{},t.data[StackMob.loginField]=this.get(StackMob.loginField),t.data[StackMob.passwordField]=this.get(StackMob.passwordField),StackMob.isOAuth2Mode()&&(t.data.token_type="mac"),t.stackmob_onaccessToken=StackMob.processLogin,(this.sync||Backbone.sync).call(this,StackMob.isOAuth2Mode()?"accessToken":"login",this,t)},logout:function(e){e=e||{},e.data=e.data||{},e.stackmob_onlogout=function(){StackMob.Storage.remove(StackMob.loggedInUserKey),StackMob.Storage.remove("oauth2.accessToken"),StackMob.Storage.remove(StackMob.REFRESH_TOKEN_KEY),StackMob.Storage.remove("oauth2.macKey"),StackMob.Storage.remove("oauth2.expires"),StackMob.Storage.remove("oauth2.user")},(this.sync||Backbone.sync).call(this,"logout",this,e)},loginWithFacebookToken:function(e,t,n){n=n||{},n.data=n.data||{},_.extend(n.data,{fb_at:e,token_type:"mac"}),n.stackmob_onfacebookAccessToken=StackMob.processLogin,(this.sync||Backbone.sync).call(this,"facebookAccessToken",this,n)},createUserWithFacebook:function(e,t){t=t||{},t.data=t.data||{},_.extend(t.data,{fb_at:e,token_type:"mac"}),t.data[StackMob.loginField]=t[StackMob.loginField]||this.get(StackMob.loginField),(this.sync||Backbone.sync).call(this,"createUserWithFacebook",this,t)},linkUserWithFacebook:function(e,t){t=t||{},t.data=t.data||{},_.extend(t.data,{fb_at:e,token_type:"mac"}),(this.sync||Backbone.sync).call(this,"linkUserWithFacebook",this,t)},loginWithTempAndSetNewPassword:function(e,t,n,r){r=r||{},r.data=r.data||{};var i={};i[StackMob.passwordField]=e,this.set(i),r.data[StackMob.newPasswordField]=t,this.login(n,r)},forgotPassword:function(e){e=e||{},e.data=e.data||{},e.data[StackMob.loginField]=this.get(StackMob.loginField),(this.sync||Backbone.sync).call(this,"forgotPassword",this,e)},resetPassword:function(e,t,n){n=n||{},n.data=n.data||{},n.data.old={password:e},n.data["new"]={password:t},(this.sync||Backbone.sync).call(this,"resetPassword",this,n)}}),StackMob.Users=StackMob.Collection.extend({model:StackMob.User}),StackMob.GeoPoint=function(e,t){_.isNumber(e)?((-90>e||90<e)&&StackMob.throwError("Latitude value must be between -90 and 90 inclusive."),(-180>t||180<t)&&StackMob.throwError("Longitude value must be between -180 and 180 inclusive."),this.lat=e,this.lon=t):((-90>e.lat||90<e.lat)&&StackMob.throwError("Latitude value must be between -90 and 90 inclusive."),(-180>e.lon||180<e.lon)&&StackMob.throwError("Longitude value must be between -180 and 180 inclusive."),this.lat=e.lat,this.lon=e.lon)},StackMob.GeoPoint.prototype.toJSON=function(){return{lat:this.lat,lon:this.lon}},StackMob.Model.Query=function(){this.selectFields=[],this.params={}},_.extend(StackMob.Model.Query.prototype,{select:function(e){return this.selectFields.push(e),this},setExpand:function(e){return this.params._expand=e,this}}),StackMob.Collection.Query=function(){this.params={},this.selectFields=[],this.orderBy=[],this.range=null},StackMob.Collection.Query.prototype=new StackMob.Model.Query,StackMob.Collection.Query.prototype.constructor=StackMob.Collection.Query,_.extend(StackMob.Collection.Query.prototype,{addParam:function(e,t){return this.params[e]=t,this},equals:function(e,t){return this.params[e]=t,this},lt:function(e,t){return this.params[e+"[lt]"]=t,this},lte:function(e,t){return this.params[e+"[lte]"]=t,this},gt:function(e,t){return this.params[e+"[gt]"]=t,this},gte:function(e,t){return this.params[e+"[gte]"]=t,this},notEquals:function(e,t){return this.params[e+"[ne]"]=t,this},isNull:function(e){return this.params[e+"[null]"]=!0,this},isNotNull:function(e){return this.params[e+"[null]"]=!1,this},mustBeOneOf:function(e,t){var n="";if(_.isArray(t))for(var r=t.length,i=0;i<r;i++)n+=t[i],i+1<r&&(n+=",");else n=t;return this.params[e+"[in]"]=n,this},orderAsc:function(e){return this.orderBy.push(e+":asc"),this},orderDesc:function(e){return this.orderBy.push(e+":desc"),this},setRange:function(e,t){return this.range={start:e,end:t},this},mustBeNear:function(e,t,n){return this.params[e+"[near]"]=t.lat+","+t.lon+","+n,this},mustBeNearMi:function(e,t,n){return this.mustBeNear(e,t,n/StackMob.EARTH_RADIANS_MI),this},mustBeNearKm:function(e,t,n){return this.mustBeNear(e,t,n/StackMob.EARTH_RADIANS_KM),this},isWithin:function(e,t,n){return this.params[e+"[within]"]=t.lat+","+t.lon+","+n,this},isWithinMi:function(e,t,n){return this.isWithin(e,t,n/StackMob.EARTH_RADIANS_MI),this},isWithinKm:function(e,t,n){return this.isWithin(e,t,n/StackMob.EARTH_RADIANS_KM),this},isWithinBox:function(e,t,n){return this.params[e+"[within]"]=t.lat+","+t.lon+","+n.lat+","+n.lon,this}})},cc:function(e,t,n,r){this.customcode(e,t,n,r)},customcode:function(e,t,n,r){_.isObject(n)?(r=n||{},n=(n=r.httpVerb)&&!_.isUndefined(StackMob.METHOD_MAP[n.toLowerCase()])?n:"GET",r.httpVerb=n):(r=r||{},_.isString(n)&&n&&!_.isUndefined(StackMob.METHOD_MAP[n.toLowerCase()])&&(r.httpVerb=n.toUpperCase())),r.data=r.data||{},"GET"!==n&&(r.contentType=r.contentType||StackMob.CONTENT_TYPE_JSON),_.extend(r.data,t),r.url=this.getBaseURL(),this.sync.call(StackMob,e,null,r)},processLogin:function(e){if(StackMob.isOAuth2Mode()){var t=e.access_token,n=e.refresh_token,r=e.mac_key,i=e.expires_in,s=null;try{var s=e.stackmob.user[StackMob.loginField],o=StackMob.prepareCredsForSaving(t,n,r,i,s);StackMob.saveOAuthCredentials(o),StackMob.Storage.persist(StackMob.loggedInUserKey,s)}catch(u){console&&console.error("Problem saving OAuth 2.0 credentials and user")}}},getCallId:function(e,t){var n={method:e,model:t||{},time:(new Date).getTime()};return JSON.stringify(n)},sync:function(t,n,r){r=r||{};if(!StackMob.isAccessTokenMethod(t)&&StackMob.shouldSendRefreshToken()&&!0!==r.stackmob_attempted_refresh){var i=t,s=r;s.stackmob_attempted_refresh=!0;var o=this;return StackMob.refreshSession.call(StackMob,{oncomplete:function(){StackMob.sync.call(o,i,n,s)}}),!1}var u=!0===r[StackMob.FORCE_CREATE_REQUEST];u&&(t="create");var a=_.extend({type:r.httpVerb||StackMob.METHOD_MAP[t]||"GET",dataType:"json"},r);a.data=a.data||{},!a.url&&n&&(a.url=StackMob.getProperty(n,"url"));var f="cc"!=t,l=n&&n.isNew&&!n.isNew(),u=!u,h="addRelationship"==t||"appendAndSave"==t||"deleteAndSave"==t;if(_.include("create update delete read query deleteAndSave appendAndSave addRelationship".split(" "),t)){if(h||f&&l&&u)a.url+=("/"==a.url.charAt(a.url.length-1)?"":"/")+encodeURIComponent(n.get(n.getPrimaryKeyField())),h&&(a.url+="/"+r[StackMob.ARRAY_FIELDNAME]),"deleteAndSave"==t&&(f="",f=_.isArray(r[StackMob.ARRAY_VALUES])?_.map(r[StackMob.ARRAY_VALUES],function(e){return encodeURIComponent(e)}).join(","):encodeURIComponent(r[StackMob.ARRAY_VALUES]),a.url+="/"+f)}else a.url+=("/"==a.url.charAt(a.url.length-1)?"":"/")+t;f=r,a.headers=a.headers||{},a.headers=_.extend({Accept:"application/vnd.stackmob+json; version="+StackMob.apiVersion},a.headers),_.extend(a.headers,{"X-StackMob-User-Agent":"StackMob (JS; "+StackMob.sdkVersion+")"}),StackMob.publicKey&&!StackMob.privateKey?(a.headers["X-StackMob-API-Key"]=StackMob.publicKey,a.headers["X-StackMob-Proxy-Plain"]="stackmob-api",a.headers["X-StackMob-API-Key-"+StackMob.publicKey]=""):a.headers["X-StackMob-Proxy"]="stackmob-api",StackMob.isOAuth2Mode()&&StackMob.isAccessTokenMethod(t)?a.contentType="application/x-www-form-urlencoded":_.include(["PUT","POST"],StackMob.METHOD_MAP[t])&&(a.contentType=a.contentType||StackMob.CONTENT_TYPE_JSON),isNaN(f[StackMob.CASCADE_DELETE])||(a.headers["X-StackMob-CascadeDelete"]=1==f[StackMob.CASCADE_DELETE]);if(f.query&&(f=a.query||throwError("No StackMobQuery object provided to the query call."),f.selectFields&&0<f.selectFields.length&&(a.headers["X-StackMob-Select"]=f.selectFields.join()),f.range&&(a.headers.Range="objects="+f.range.start+"-"+f.range.end),_.extend(a.data,f.params),f.orderBy&&0<f.orderBy.length)){f=f.orderBy,l="",u=f.length;for(h=0;h<u;h++)l+=f[h],h+1<u&&(l+=",");a.headers["X-StackMob-OrderBy"]=l}f=t,l=function(e){return _.map(_.keys(e),function(t){return t+"="+encodeURIComponent(e[t])}).join("&")},r=r||{};if(StackMob.isOAuth2Mode()&&StackMob.isAccessTokenMethod(f))a.data=l(a.data);else if("POST"==a.type||"PUT"==a.type)if("resetPassword"==f||"forgotPassword"==f)a.data=JSON.stringify(a.data);else if("addRelationship"==f||"appendAndSave"==f)r&&r[StackMob.ARRAY_VALUES]&&(a.data=JSON.stringify(r[StackMob.ARRAY_VALUES]));else if(n){var p=n.toJSON();_.each(r.remote_ignore||[],function(e){delete p[e]}),delete p.lastmoddate,delete p.createddate,"update"==f&&delete p[StackMob.passwordField],StackMob.isOAuth2Mode()&&delete p.sm_owner,a.data=JSON.stringify(_.extend(p,a.data))}else a.data=JSON.stringify(a.data);else"GET"==a.type&&!_.isEmpty(a.data)&&(a.url+="?",r=l(a.data),a.url+=r),delete a.data;r=a||{},r.processData=!1,r.accepts=r.headers.Accept,StackMob.isAccessTokenMethod(t)||(r=t,StackMob.isAccessTokenMethod(r)||(r=e(r,a))&&(a.headers.Authorization=r)),StackMob.makeAPICall(n,a,t)},refreshSession:function(e){var t={};_.extend(t,e);if(StackMob.hasRefreshToken()){t.url="/"+StackMob.userSchema,t.contentType="application/x-www-form-urlencoded",t.data={refresh_token:StackMob.getOAuthCredentials()[StackMob.REFRESH_TOKEN_KEY],grant_type:"refresh_token",token_type:"mac",mac_algorithm:"hmac-sha1"};var n=e.oncomplete;n&&(t.oncomplete=function(){n()}),e&&e.success&&(t.success=e.success),t.stackmob_onrefreshToken=StackMob.processLogin,t.error=function(){e&&e.error&&e.error(),StackMob.Storage.remove(StackMob.REFRESH_TOKEN_KEY)},(this.sync||Backbone.sync).call(this,"refreshToken",this,t)}else e&&e.error&&e.error()},makeAPICall:function(e,t,n){return StackMob.ajax?StackMob.ajax(e,t,n):StackMob.isSencha()?StackMob.ajaxOptions.sencha(e,t,n):StackMob.isZepto()?StackMob.ajaxOptions.zepto(e,t,n):StackMob.ajaxOptions.jquery(e,t,n)},onsuccess:function(e,t,n,r,i){n&&(_.isFunction(n["stackmob_on"+t])&&n["stackmob_on"+t](r),_.isFunction(n.oncomplete)&&n.oncomplete(r)),i&&(r?(StackMob.isOAuth2Mode()&&StackMob.isAccessTokenMethod(t)&&r.stackmob&&(r=r.stackmob.user),i(r)):i())},onerror:function(t,n,r,i,s,o){var u=t.status,a;try{a=JSON.parse(n)}catch(f){a={error:"Invalid JSON returned."}}if(503==u){t=t.getResponseHeader("retry-after");try{t=1e3*parseInt(responseHeaderValue)}catch(l){t=StackMob.RETRY_WAIT}if("number"==typeof s.stackmob_retry){if(s.stackmob_retry-=1,0>=s.stackmob_retry)return}else s.stackmob_retry=StackMob.RETRY_ATTEMPTS;_.delay(function(){var t=e(i,s);s.headers.Authorization=t,r(s)},t)}else _.isFunction(s.oncomplete)&&s.oncomplete(a),o&&o(i,a)},isAccessTokenMethod:function(e){return _.include(["accessToken","facebookAccessToken","refreshToken"],e)}})}.call(this),function(){var e=this.jQuery||this.Ext||this.Zepto;_.extend(StackMob,{ajaxOptions:{sencha:function(t,n,r){var i={},s=n.success;n.success=function(e){var i=e&&e.responseText?JSON.parse(e.responseText):null;!0===n.stackmob_count&&(i=e),StackMob.onsuccess(t,r,n,i,s)};var o=n.error;return i.url=n.url,i.headers=n.headers,i.params=n.data,i.success=n.success,i.disableCaching=!1,i.method=n.type,n.error=function(n){StackMob.onerror(n,n.responseText||n.text,e.Ajax.request,t,i,o)},i.failure=n.error,e.Ajax.request(i)},zepto:function(t,n,r){var i=n.success,s=function(e,s){s=e?JSON.parse(e):null,StackMob.onsuccess(t,r,n,s,i)};n.success=s;var o=n.error,u=function(r){StackMob.onerror(r,r.responseText||r.text,e.ajax,t,n,o)};n.error=u;var a={};return a.url=n.url,a.headers=n.headers,a.contentType=n.headers.contentType,a.type=n.type,a.data=n.data,a.success=s,a.error=u,e.ajax(a)},jquery:function(t,n,r){n.beforeSend=function(e,t){e.setRequestHeader("Accept",t.accepts);if(!_.isEmpty(t.headers))for(key in t.headers)e.setRequestHeader(key,t.headers[key])};var i=n.error;n.error=function(r,s,o){0==r.status&&n.query&&"object"==typeof n.query.range?this.success(r,s,o):StackMob.onerror(r,r.responseText||r.text,e.ajax,t,n,i)};var s=n.success;return n.success=function(e,t,i){var o;!0===n.stackmob_count?o=i:e&&e.toJSON?o=e:e&&(e.responseText||e.text)?o=JSON.parse(e.responseText||e.text):e&&(o=e),StackMob.onsuccess(e,r,n,o,s)},e.ajax(n)}}})}.call(this);var CryptoJS=CryptoJS||function(e,t){var n={},r=n.lib={},i=function(){},s=r.Base={extend:function(e){i.prototype=this;var t=new i;return e&&t.mixIn(e),t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.$super.extend(this)}},o=r.WordArray=s.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n!=t?n:4*e.length},toString:function(e){return(e||a).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,e=e.sigBytes;this.clamp();if(r%4)for(var i=0;i<e;i++)t[r+i>>>2]|=(n[i>>>2]>>>24-8*(i%4)&255)<<24-8*((r+i)%4);else if(65535<n.length)for(i=0;i<e;i+=4)t[r+i>>>2]=n[i>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-8*(n%4),t.length=e.ceil(n/4)},clone:function(){var e=s.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(4294967296*e.random()|0);return o.create(n,t)}}),u=n.enc={},a=u.Hex={stringify:function(e){for(var t=e.words,e=e.sigBytes,n=[],r=0;r<e;r++){var i=t[r>>>2]>>>24-8*(r%4)&255;n.push((i>>>4).toString(16)),n.push((i&15).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-4*(r%8);return o.create(n,t/2)}},f=u.Latin1={stringify:function(e){for(var t=e.words,e=e.sigBytes,n=[],r=0;r<e;r++)n.push(String.fromCharCode(t[r>>>2]>>>24-8*(r%4)&255));return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(e.charCodeAt(r)&255)<<24-8*(r%4);return o.create(n,t)}},l=u.Utf8={stringify:function(e){try{return decodeURIComponent(escape(f.stringify(e)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(e){return f.parse(unescape(encodeURIComponent(e)))}},c=r.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=o.create(),this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,s=this.blockSize,u=i/(4*s),u=t?e.ceil(u):e.max((u|0)-this._minBufferSize,0),t=u*s,i=e.min(4*t,i);if(t){for(var a=0;a<t;a+=s)this._doProcessBlock(r,a);a=r.splice(0,t),n.sigBytes-=i}return o.create(a,i)},clone:function(){var e=s.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});r.Hasher=c.extend({init:function(){this.reset()},reset:function(){c.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize(),this._hash},clone:function(){var e=c.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:16,_createHelper:function(e){return function(t,n){return e.create(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return h.HMAC.create(e,n).finalize(t)}}});var h=n.algo={};return n}(Math);(function(){var e=CryptoJS,t=e.lib,n=t.WordArray,t=t.Hasher,r=[],i=e.algo.SHA1=t.extend({_doReset:function(){this._hash=n.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,i=n[0],s=n[1],o=n[2],u=n[3],a=n[4],f=0;80>f;f++){if(16>f)r[f]=e[t+f]|0;else{var l=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=l<<1|l>>>31}l=(i<<5|i>>>27)+a+r[f],l=20>f?l+((s&o|~s&u)+1518500249):40>f?l+((s^o^u)+1859775393):60>f?l+((s&o|s&u|o&u)-1894007588):l+((s^o^u)-899497514),a=u,u=o,o=s<<30|s>>>2,s=i,i=l}n[0]=n[0]+i|0,n[1]=n[1]+s|0,n[2]=n[2]+o|0,n[3]=n[3]+u|0,n[4]=n[4]+a|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;t[r>>>5]|=128<<24-r%32,t[(r+64>>>9<<4)+15]=n,e.sigBytes=4*t.length,this._process()}});e.SHA1=t._createHelper(i),e.HmacSHA1=t._createHmacHelper(i)})(),function(){var e=CryptoJS,t=e.enc.Utf8;e.algo.HMAC=e.lib.Base.extend({init:function(e,n){e=this._hasher=e.create(),"string"==typeof n&&(n=t.parse(n));var r=e.blockSize,i=4*r;n.sigBytes>i&&(n=e.finalize(n));for(var s=this._oKey=n.clone(),o=this._iKey=n.clone(),u=s.words,a=o.words,l=0;l<r;l++)u[l]^=1549556828,a[l]^=909522486;s.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,e=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(e))}})}(),function(){var e=CryptoJS,t=e.lib.WordArray;e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var e=[],i=0;i<n;i+=3)for(var s=(t[i>>>2]>>>24-8*(i%4)&255)<<16|(t[i+1>>>2]>>>24-8*((i+1)%4)&255)<<8|t[i+2>>>2]>>>24-8*((i+2)%4)&255,o=0;4>o&&i+.75*o<n;o++)e.push(r.charAt(s>>>6*(3-o)&63));if(t=r.charAt(64))for(;e.length%4;)e.push(t);return e.join("")},parse:function(e){var e=e.replace(/\s/g,""),n=e.length,r=this._map,i=r.charAt(64);i&&(i=e.indexOf(i),-1!=i&&(n=i));for(var i=[],s=0,o=0;o<n;o++)if(o%4){var u=r.indexOf(e.charAt(o-1))<<2*(o%4),a=r.indexOf(e.charAt(o))>>>6-2*(o%4);i[s>>>2]|=(u|a)<<24-8*(s%4),s++}return t.create(i,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}();
define("stackmob", ["jquery","backbone"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.StackMob;
    };
}(this)));

define("stackmobinit", ["stackmob"], function(StackMob ) {

    if (window.location.href.indexOf('stackmobapp.com') !== -1) {
        StackMob.init({ // production
            appName: "fitnesschallenge",
            clientSubdomain: "twistedogregmailcom",
            publicKey: "eb6421b3-9737-4f0b-97ce-8aebc448739b",
            apiVersion: 2
        });
    }
    else {
        StackMob.init({ // dev
            appName: "fitnesschallenge",
            clientSubdomain: "twistedogregmailcom",
            publicKey: "ba025b72-92db-4681-9abb-231baca5a94d",
            apiVersion: 0
        });
    }

});

define("customCodeClient", ["jquery"], function($) {
    // private methods
    var that = this;


    return {
    formatDate : function(date) {
        var day = date.getDate();
        var month = date.getMonth() + 1; //Months are zero based
        var year = date.getFullYear();
        var dateStr = month + "/" + day  + "/" + year;
        return dateStr;
    },

    getQueryVariable : function (url, key) { // TODO move getQueryVariable to another js lib
            var query = url.split("?");
            if (query.length > 1) {
                var vars = query[1].split("&");
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] == key) {
                        return pair[1];
                    }
                }
            }
            return null;
        },

        showMessage : function(message) {
            alert(message);
        },

        getNextUserID : function(callback) {
            var UserIDCounter = StackMob.Model.extend({ schemaName: 'user_id_counter' });
            var counter = new UserIDCounter({'user_id_counter_id' : '1'});
            counter.fetch({
                success: function(model) {
                    model.incrementOnSave('current_id', 1); // the field will be incremented by 1
                    model.save({}, {
                        success: function(model) {
                            if (typeof callback === "function") {
                                var currentId = model.get('current_id');
                                if (currentId) {
                                    callback(true, currentId);
                                }
                                else {
                                    callback(false);
                                }
                            }

                        },
                        error: function(model, response) {
                            // response['error'] is the container for our error message
                            console.debug("Aww...why did you fail on me?! " + response['error']);
                            if (typeof callback === "function") {
                                callback(false);
                            }
                        }
                    });
                },
                error: function(model, response) {
                    console.debug(response);
                    if (typeof callback === "function") {
                        callback(false);
                    }
                }
            });
        },

        getFitbitRequestToken : function(userID, callback) {
            if (typeof callback !== "function") {
                throw 'callback is required';
            }
            StackMob.customcode('fetch_fitbit_request_token', {'stackmob_user_id' : userID}, {
                success: function(tokens) {
                    callback(true, tokens)
                },
                error: function(data) {
                    callback(false, data)
                }
            });
        },

        getFitbitAccessToken : function(requestToken, requestTokenSecret, oauthVerifier, callback) {
            if (typeof callback !== "function") {
                throw 'callback is required';
            }

            var params = {
                "request_token" : requestToken,
                "request_token_secret" : requestTokenSecret,
                "oauth_verifier" : oauthVerifier
            };

            StackMob.customcode('fetch_fitbit_access_token', params, 'GET', {
                success: function(accessTokenData) {
                    callback(true, accessTokenData);
                },

                error: function(jsonResult) {
                    callback(false, jsonResult);
                }
            });
        },

        getFitbitUser : function(accessToken, accessTokenSecret, fitbitUserID, callback) {
            if (typeof callback !== "function") {
                throw 'callback is required';
            }

            var params = {
                "access_token" : accessToken,
                "access_token_secret" : accessTokenSecret,
                "fitbit_user_id" : fitbitUserID
            };
            StackMob.customcode('fetch_fitbit_user', params, 'GET', {
                success: function(jsonResult) {
                    var userInfoResponse = jsonResult['userInfoJson'];
                    var user = JSON.parse(userInfoResponse)['user'];
                    callback(true, user);
                },

                error: function(errorData) {
                    callback(false, errorData);
                }
            });
        },

        lookupFitnessUser : function(email, password, callback) {
            if (typeof callback !== 'function') {
                throw 'callback is required';
            }

            var that = this;
            if (!email) {
                if (typeof callback === 'function') {
                    callback(false, 'email address is required');
                }
                return;
            }
            var User = StackMob.Model.extend({ schemaName: 'user' });
            var Users = StackMob.Collection.extend({ model: User });
            var users = new Users();
            var q = new StackMob.Collection.Query();
            q.equals('email', email);
            if (password) {
                q.equals('fc_password', password);
            }
            users.query(q, {
                success: function(model) {
                    if (model.length == 1) {
                        callback(true, model.models[0]);
                    }
                    else {
                        callback(false, 'Could not find user with given email and password');
                    }
                },
                error: function(response) {
                    that.showMessage('query failed trying to get user ' + response);
                    console.debug(response);
                    callback(false, response);
                }
            });
        },

        createStackmobUser : function(email, password, callback) {
            var that = this;
            if (typeof callback !== "function") {
                callback = function() {};
            }
            that.lookupFitnessUser(email, password, function(success, data) {
                if (success) {
                    callback(false, 'That email address is already in use');
                    return;
                }
                that.getNextUserID(function(success, currentUserID) {
                    if (success) {
                        var regInfo = {
                            "email" : email,
                            "password" : password,
                            "fc_password" : password,
                            "username" : currentUserID.toString(),
                            "friends" : [],
                            "challenges" : []
                        };

                        var user = new StackMob.User(regInfo);
                        user.create({
                            success: function(model) {
                                console.debug('user object is saved');
                                callback(true, model);
                            },
                            error: function(model, response) {
                                console.debug(response);
                                callback(false, 'failed to save user to datastore');
                            }
                        });
                    }
                    else {
                        callback(false, 'Failed to get next StackMob user ID');
                    }
                });
            });
        },

        updateUserWithParams : function(stackMobUser, params, callback) {
            if (typeof callback !== "function") {
                throw 'callback is required';
            }

            delete params.encodedid;
            for (var prop in params) {
                if (params.hasOwnProperty(prop)) {
                    stackMobUser.set(prop, params[prop]);
                }
            }

            var user = new StackMob.User({ username : stackMobUser.get('username') });
            user.save(stackMobUser, {
                success: function(model) {
                    callback(true, model);
                },
                error: function(model, response) {
                    console.debug(response);
                    callback(false, response);
                }
            });
        },

        getFitbitFriends : function(username, callback) {
            var that = this;
            StackMob.customcode('fetch_fitbit_friends', {"stackmob_user_id" : username}, 'GET', {
                success: function(jsonResult) {
                    var friendsResponse = jsonResult['friendsJson'];
                    var friends = JSON.parse(friendsResponse)['friends'];

                    if (typeof callback === "function") {
                        callback(true, friends);
                    }
                },

                error: function(response) {
                    if (typeof callback === "function") {
                        callback(false, response);
                    }
                }
            });
        },

        // not used now, for debugging
        showFriends : function(friends) {
            var friendsHTML = '';
            var len = friends.length;
            var friend;
            for (var i = 0; i < len; i++) {
                friend = friends[i]['user'];
                for (var key in friend) {
                    friendsHTML += key + ": " + friend[key] + '<br>\n';
                }
            }
            $('#results').html(friendsHTML);
        },

        getFriends : function(callback) {
            if (this.user.get('friends')) {

            }

        },

        saveFriendsToStackmob : function(username, friends, callback) { // TODO change list of friends to a backbone collection
            if (typeof callback !== "function") {
                throw 'callback is required';
            }
            if (!friends) {
                callback(false, 'no friends to update');
            }

            var that = this;
            var fitbitUserIDs = [];
            var len = friends.length;
            for (var i = 0; i < len; i++) {
                var friend = friends[i]['user'];
                fitbitUserIDs.push(friend['encodedId']);
            }

            var User = StackMob.Model.extend({ schemaName: 'user' });
            var Users = StackMob.Collection.extend({ model: User });
            var users = new Users();

            var friendsQuery = new StackMob.Collection.Query();
            friendsQuery.mustBeOneOf('fitbituserid', fitbitUserIDs);
            users.query(friendsQuery, {
                success: function(friends) {
                    var stackmobFriendIDs = [];
                    if (friends.models.length > 0) {
                        len = friends.models.length;
                        for (var i = 0; i < len; i++) {
                            var friend = friends.models[i];
                            stackmobFriendIDs.push(friend.get('username'));
                        }
                    }
                    var user = new StackMob.User({ username : username });
                    var params = {
                        "friends" : stackmobFriendIDs,
                        "friendcount" : stackmobFriendIDs.length,
                        "fitbitfriendcount" : fitbitUserIDs.length
                    };
                    user.save(params, {
                        success: function(model) {
                            callback(true, model);
                        },
                        error: function(model, response) {
                            console.debug(response);
                            callback(false, response);
                        }
                    });
                },
                error: function(repsonse) {
                    console.debug(response);
                    callback(false, response);
                }
            });
        },

        updateActivities : function(username, callback) {
            var today = new Date();
            var lastWeek = new Date(today.getTime() - 6*24*60*60*1000);

            var params = {
                "stackmob_user_id" : getchalusername,
                "start_date" : this.formatDate(lastWeek),
                "end_date" : this.formatDate(today)
            };
            StackMob.customcode('update_fitbit_activities', params, {
                success: function(tokens) {
                    console.debug('tokens response: ' + JSON.stringify(tokens));
                    if (typeof callback === "function") {
                        callback(true, tokens)
                    }
                },
                error: function(data) {
                    if (typeof callback === "function") {
                        callback(false, data)
                    }
                }
            });
        },

        completeFitbitAuth : function(stackMobUser, requestToken, requestTokenSecret, oauthVerifier, callback) {
            var that = this;
            this.getFitbitAccessToken(requestToken, requestTokenSecret, oauthVerifier, function(success, tokenData) {
                if (success) {
//                    if (that.user) {
                        that.getFitbitUser(tokenData.oauth_token, tokenData.oauth_token_secret, tokenData.fitbit_user_id, function(success, fitbitUserData) {
                            if (success) {
                                console.debug('get fitbit user response: ' + JSON.stringify(fitbitUserData));
                                delete fitbitUserData.encodedID;
                                var params = fitbitUserData;
                                params.accesstoken =  tokenData.oauth_token;
                                params.accesstokensecret = tokenData.oauth_token_secret;
                                params.fitbituserid = tokenData.fitbit_user_id;

                                that.updateUserWithParams(stackMobUser, params, function(success, stackMobUserData) {
                                    if (success) {
                                        callback(true, stackMobUserData);
                                    }
                                    else {
                                        callback(false, 'failed to update with fitbit info\n ' + stackMobUserData.error);
                                    }
                                });
                            }
                            else {
                                callback(false, 'failed to get Fitbit User: ' + fitbitUserData);
                            }
                        });
//                    }
                }
                else {
                    callback(false, 'failed to get Fitbit access token');
                }
            });
        },

        loginWithID : function(username, callback) {
            if (typeof callback !== "function") {
                throw 'callback is required';
            }
            if (username) {
                var user = new StackMob.User({ username: username });
                user.fetch({
                    success: function(model) {
                        console.debug('login response: ' + JSON.stringify(model.toJSON()));
                        callback(true, model);
                    },
                    error: function(data) {
                        callback(false, 'could not retrieve your data' + data);
                    }
                });
            }
        },

        getChallengeInvites : function(username, callback) {
            if (typeof callback !== "function") {
                throw 'callback is required';
            }
            var Invitation = StackMob.Model.extend({ schemaName: 'invitation' });
            var Invitations = StackMob.Collection.extend({ model: Invitation });
            var invitations = new Invitations();
            var q = new StackMob.Collection.Query();
            q.equals('inviteduser', username);
            q.equals('responded', false);
            q.setExpand(3);
            invitations.query(q, {
                success: function(model) {
                    var len = model.models.length;
                    console.debug('invitation response: ' + JSON.stringify(model.toJSON()));
                    if (len === 0) {
                        callback(true, model);
                        return;
                    }


                    // TODO: move this into a separate call?
//                    for (var i = 0; i < len; i++) {
//                        var invite = model.models[i];
//                        var Challenge = StackMob.Model.extend({ schemaName: 'challenge', "challenge_id" : invite.challenge_id });
//                        var challenge = new Challenge();
//                        challenge.fetch( {
//                            success: function(model) {
//                                callback(true, model);
//                            },
//                            error: function(model, response) {
//                                console.debug(response);
//                                callback(true, response);
//                            }
//                        });
//                    }
                    callback(true, model);
                },
                error: function(model, response) {
                    that.showMessage('query failed trying to get user ' + response);
                    console.debug(response);
                    callback(false, response);
                }
            });
        }

//        getUserChallenges : function(username, callback) {
//            if (typeof callback !== "function") {
//                throw 'callback is required';
//            }
//            var Challenge = StackMob.Model.extend({ schemaName: 'challenge' });
//            var Challenges = StackMob.Collection.extend({ model: Challenge });
//            var challenges = new Challenges();
//            var q = new StackMob.Collection.Query();
//            q.mustBeOneOf('users', username);
//            q.setExpand(1);
//            challenges.query(q, {
//                success: function(model) {
//                    console.debug('challenges response: ' + JSON.stringify(model.toJSON()));
//                    callback(true, model);
//                },
//                error: function(response) {
//                    console.debug(response);
//                    callback(false, response);
//                }
//            });
//        }
    }
});


define("fitness", ["jquery", "stackmobinit", "customCodeClient"], function($, __SI, customCode) {
    //
    return {
        parseDate : function(dateStr) {
            var parts = dateStr.match(/(\d+)/g);
            // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
            return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
        },

        showMessage : function(message) {
            alert(message);
        },

        log : function(message) {
            if (console && typeof console.log === 'function') {
                console.log(message);
            }
        },

        isLoggedIn: function() {
            return !!this.user;
        },

        logout : function() {
            localStorage.removeItem('username');
            delete this.user;
        },

        deleteUser : function(callback) {
            var that = this;
            this.user.destroy({
                success: function(data) {
                    that.logout();
                    callback(true, data);
                },
                error: function(data) {
                    callback(false, data);
                }
            });
        },

        loginWithID : function(username, callback) {
            var that = this;
            if (typeof callback !== "function") {
                throw 'callback is required';
            }
            if (!username) {
                callback(false);
                return;
            }
            var sm_user = new StackMob.User({ username: username });
            sm_user.fetch({
                success: function(model) {
                    that.user = model;
                    callback(true, model);
                },
                error: function(data) {
                    that.showMessage('Could not retrieve your user data');
                    callback(false, data);
                }
            });
        },

        updateFitbitFriends : function(username, callback) {
            var that = this;
            customCode.getFitbitFriends(username, function(success, friends) {
                if (!success) {
                    that.showMessage("Failed to get fitbit friends");
                    callback(false, friends);
                }
                else {
                    that.fitbitFriends = friends;
                    if (friends) {
                        customCode.saveFriendsToStackmob(username, friends, function(success, data) {
                            if (!success) {
                                that.showMessage('Failed to save friends');
                                if (typeof data === "string") {
                                    console.log(data);
                                }
                                callback(false, data);
                            }
                            else {
                                that.friendIDs = data.get('friends');
                                callback(true, data);
                                //that.showMessage(data.get('friendcount') + ' of your ' + data.get('fitbitfriendcount') + ' friends are using fitness challenge');
                            }
                        });
                    }
                }
            });
        },

        getStackmobFriends: function(friendIDs, callback) {
            var that = this;
            if (typeof callback !== "function") {
                throw 'callback is required';
            }
            var User = StackMob.Model.extend({ schemaName: 'user' });
            var Users = StackMob.Collection.extend({ model: User });
            var users = new Users();

            var friendsQuery = new StackMob.Collection.Query();
            friendsQuery.mustBeOneOf('username', friendIDs);
            users.query(friendsQuery, {
                success: function(friends) {
                    that.friends = friends;
                    callback(true, friends);
                },
                error: function(friends, response) {
                    console.debug('failed to get fitness challenge friends');
                    callback(false, response);
                }
            });
        },

        getInvitations : function(username, allowCaching, callback) {
            var that = this;
            if (allowCaching && this.invitations) {
                callback(true, this.invitations);
                return;
            }
            customCode.getChallengeInvites(username, function(success, data) {
                if (!success) {
                    that.showMessage('Failed to check for challenge invites');
                    callback(false, data);
                    return;
                }
                that.invitations = data;
                that.invitationLookup = {};
                _.each(data.models, function(invitation) {
                    that.invitationLookup[invitation.get('invitation_id')] = invitation;
                });
                callback(true, data);
            });
        },


        getChallenge : function(challengeID, callback) {
            var that = this;
            if (typeof callback !== "function") {
                throw 'callback is required';
            }
            if (!challengeID) {
                callback(false);
                return;
            }

            var Challenge = StackMob.Model.extend({ schemaName: 'challenge'});
            var challenge = new Challenge({'challenge_id' : challengeID});
            challenge.fetchExpanded(2, {
                success: function(model) {
                    console.debug(JSON.stringify(model.toJSON()));
                    that.challengeLookup = that.challengeLookup || {};
                    that.challengeLookup[model.get('challenge_id')] = model;
                    callback(true, model);
                },
                error: function(model, response) {
                    console.debug(response);
                    callback(false, response);
                }
            });
        },


        getUserChallenges : function(username, allowCaching, callback) {
            var that = this;
            if (typeof callback !== "function") {
                throw 'callback is required';
            }
            if (allowCaching && this.challenges) {
                callback(true, this.challenges);
                return;
            }
            if (!username) {
                callback(false);
                return;
            }

            var sm_user = new StackMob.User({ username: username });
            sm_user.fetchExpanded(1, {
                success: function(model) {
                    var tempUser = model;
                    that.challenges = tempUser.get('challenges');
                    if (!that.challenges) {
                        that.showMessage('Could not retrieve your user data');
                        callback(false, response);
                        return;
                    }
                    callback(true, model);
                },
                error: function(data, response) {
                    that.showMessage('Could not retrieve your user data');
                    callback(false, response);
                }
            });
        },

        updateIfStale : function(username, callback) {
            if (typeof callback !== "function") {
                throw 'callback is required';
            }
//            var lastUpdate = sessionStorage.getItem('fitbitUpdated');
//            if (lastUpdate) {
//                callback(true, 'Already updated fitbit info');
//                return;
//            }
//            if (this.friends) {
//                callback(true);
//                return;
//            }
            var that = this;
//            var updatedFully = true;
            that.getInvitations(username, true, callback);
//                    if (data.models.length > 0) {
//                        for (var i = 0; i < data.models.length; i++) {
//                            var model = data.models[i];
//                            that.showMessage('you have a challenge invitation from ' + model.get('challengeinviter') + '!');
//                        }
//                    }
//                    else {
//                        //that.showMessage('You have no pending challenge invitations');
//                    }
//                customCode.getFitbitFriends(username, function(success, friends) {
//                    if (!success) {
//                        that.showMessage("Failed to get fitbit friends");
//                        updatedFully = false;
//                    }
//                    else {
//                        that.friends = friends;
//                        if (friends) {
//                            customCode.saveFriendsToStackmob(username, friends, function(success, data) {
//                                if (!success) {
//                                    that.showMessage('Failed to save friends');
//                                    if (typeof data === "string") {
//                                        console.log(data);
//                                    }
//                                }
//                                else {
//                                    //that.showMessage(data.get('friendcount') + ' of your ' + data.get('fitbitfriendcount') + ' friends are using fitness challenge');
//                                }
//                            });
//                        }
//                    }
//                    customCode.updateActivities(username, function(success, data) {
//                        if (!success) {
//                            that.showMessage('Failed to get fitbit activities');
//                            updatedFully = false;
//                        }
//                        else {
//                            //that.showMessage("updated activities");
//                        }
//                        if (updatedFully) {
//                            sessionStorage.setItem('fitbitUpdated', 'true');
//                        }
//                        callback(updatedFully, data);
//                    });
//                });
//            });
        },

        joinUserToChallenge : function(stackmobUserID, challengeID, callback) {
            var that = this;
            if (typeof callback !== "function") {
                throw 'callback is required';
            }

            var Challenge = StackMob.Model.extend({ schemaName: 'challenge' });
            var challenge = new Challenge({'challenge_id' : challengeID});
            challenge.fetch({
                success: function(model) {

                    var Leader = StackMob.Model.extend({ schemaName: 'leader' });
                    var leaderID = challengeID + '_' + stackmobUserID;
                    var leaderData =  {
                            "leader_id" : leaderID,
                            "user" : stackmobUserID,
                            "challenge" : challengeID
                        };
                    var challengeType = model.get('value_type');
                    switch (challengeType) {
                        case "int":
                        case null:
                            leaderData.value_int = 0;
                            break;
                        case "float":
                            leaderData.value_float = 0.0;
                            break;
                        case "boolean":
                            leaderData.value_boolen = false;
                    }
                    var leader = new Leader(leaderData);

                    leader.create({
                        success: function(model) {
                            var leaderID = model.get('leader_id');
                            console.debug('leader object is saved, leader_id: ' + leaderID);
                            var leaders = challenge.get('leaders') || [];
                            leaders.push(leaderID);
                            challenge.save({"leaders" : leaders}, {
                                success: function(model) {
                                    var challengeList = that.user.get('challenges');
                                    challengeList = challengeList || [];
                                    if ($.inArray(challengeID, challengeList) == -1) {
                                        challengeList.push(challengeID);
                                        that.user.save({'challenges' : challengeList}, {
                                            success: function(model) {
                                                callback(true, model);
                                            },
                                            error: function(model, response) {
                                                console.debug("Failed to update challenge");
                                                leader.delete();
                                                callback(false, response);
                                            }
                                        });
                                    }
                                },
                                error: function(model, response) {
                                    console.debug("Failed to update challenge with new leader entry");
                                    leader.delete();
                                    console.debug(response);
                                    callback(false, response);
                                }
                            });
                        },
                        error: function(model, response) {
                            console.debug(response);
                            console.debug("Failed to create leader entry");
                            callback(false, response);
                        }
                    });
                },
                error: function(model, response) {
                    console.debug(response);
                    console.debug("Failed to fetch challenge");
                    callback(false, response);
                }
            });
        },

        inviteFriendsToChallenge : function(challengeID, callback) {
            var that = this;
            var friendIDs = that.friends.models; //that.user.get('friends');
            if (friendIDs && friendIDs.length > 0) {
                var Invitation = StackMob.Model.extend({ schemaName: 'invitation' });
                var len = friendIDs.length;
                var successCount = 0;
                var errorCount = 0;
                for (var i = 0; i < len; i++) {
                    function makeCallbackIfDone() {
                        if (i = len) {
                            var success = len === successCount;
                            callback(success, successCount + ' invitations sent, ' + errorCount + ' failed.');
                        }
                    }
                    var friendID = friendIDs[i];
                    if (typeof friendID === "object") {
                        friendID = friendID.get('username');
                    }
                    var invitation = new Invitation({
                        "challenge" : challengeID,
                        "challengeinviter" : that.user.get('username'),
                        "inviteduser" : friendID,
                        "responded" : false,
                        "accepted" : false});
                    invitation.create({
                        success: function(model) {
                            successCount++;
                            makeCallbackIfDone();
                            console.debug('Invitation to ' + friendID + ' sent.');
                        },
                        error: function(model, response) {
                            errorCount++;
                            console.debug(response);
                            makeCallbackIfDone();
                            console.debug('Invitation to ' + friendID + ' failed.');
                        }
                    });
                }
            }
        },


//            router : new FitnessRouter(),

        init : function() {
            var that = this;
        }
    }

});


define("models/ChallengeModel", [ "stackmob", "stackmobinit"], function(StackMob, stackmobinit ) {

    // The ChallengeModel constructor

    var ChallengeModel = StackMob.Model.extend(
        { schemaName: 'challenge'}
    );

    // Returns the ChallengeModel class
    return ChallengeModel;

} );
define("views/FooterView", [ "jquery", "backbone", "fitness"], function( $, Backbone, fitness) {

    var FooterView = Backbone.View.extend({
        initialize: function() {
            this.render();
        },

        events: {"click .logout_link" : "logout"} ,

        render: function() {
            var footer = $('#footer_template');
            this.$el.empty();
            this.$el.append(footer.html());
            if (!fitness.isLoggedIn()) {
                this.$el.find('.logout_link').hide();
            }
            this.$el.trigger('create');
            return this;
        },

        logout: function () {
            fitness.logout();
            $.mobile.changePage( "#login" , { reverse: false, changeHash: true } );
        }

    });
    return FooterView;
});

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

var Mustache;(function(e){typeof module!="undefined"?module.exports=e:typeof define=="function"?define('mustache',e):Mustache=e})(function(){function u(e,t){return RegExp.prototype.test.call(e,t)}function a(e){return!u(r,e)}function c(e){var t=e.replace(l,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)});return'"'+t+'"'}function h(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function d(e){return String(e).replace(/[&<>"'\/]/g,function(e){return p[e]})}function v(e){this.string=e,this.tail=e,this.pos=0}function m(e,t){this.view=e,this.parent=t,this.clearCache()}function g(){this.clearCache()}function y(e,t){var n=['""'],r,i,s;for(var o=0,u=e.length;o<u;++o){r=e[o];switch(r.type){case"#":case"^":i=r.type==="#"?"_section":"_inverted",n.push("r."+i+"("+c(r.value)+", c, function (c, r) {\n"+"  "+y(r.tokens,!0)+"\n"+"})");break;case"{":case"&":case"name":s=r.type==="name"?"true":"false",n.push("r._name("+c(r.value)+", c, "+s+")");break;case">":n.push("r._partial("+c(r.value)+", c)");break;case"text":n.push(c(r.value))}}return n="return "+n.join(" + ")+";",t?n:new Function("c, r",n)}function b(e){if(e.length===2)return[new RegExp(h(e[0])+"\\s*"),new RegExp("\\s*"+h(e[1]))];throw new Error("Invalid tags: "+e.join(" "))}function w(e){var t=[],n=t,r=[],i,s;for(var o=0;o<e.length;++o){i=e[o];switch(i.type){case"#":case"^":i.tokens=[],r.push(i),n.push(i),n=i.tokens;break;case"/":if(r.length===0)throw new Error("Unopened section: "+i.value);s=r.pop();if(s.value!==i.value)throw new Error("Unclosed section: "+s.value);r.length>0?n=r[r.length-1].tokens:n=t;break;default:n.push(i)}}s=r.pop();if(s)throw new Error("Unclosed section: "+s.value);return t}function E(e){var t;for(var n=0;n<e.length;++n){var r=e[n];t&&t.type==="text"&&r.type==="text"?(t.value+=r.value,e.splice(n--,1)):t=r}}function S(r,u){u=u||e.tags;var f=b(u),l=new v(r),c=[],p=[],d=!1,m=!1,g=function(){if(d&&!m)while(p.length)c.splice(p.pop(),1);else p=[];d=!1,m=!1},y,S,x;while(!l.eos()){S=l.scanUntil(f[0]);if(S)for(var T=0,N=S.length;T<N;++T)x=S.charAt(T),a(x)?p.push(c.length):m=!0,c.push({type:"text",value:x}),x==="\n"&&g();if(!l.scan(f[0]))break;d=!0,y=l.scan(o)||"name",l.scan(t);if(y==="=")S=l.scanUntil(i),l.scan(i),l.scanUntil(f[1]);else if(y==="{"){var C=new RegExp("\\s*"+h("}"+u[1]));S=l.scanUntil(C),l.scan(s),l.scanUntil(f[1])}else S=l.scanUntil(f[1]);if(!l.scan(f[1]))throw new Error("Unclosed tag at "+l.pos);c.push({type:y,value:S});if(y==="name"||y==="{"||y==="&")m=!0;y==="="&&(u=S.split(n),f=b(u))}return E(c),w(c)}function T(){x.clearCache()}function N(e,t){return x.compile(e,t)}function C(e,t,n){return x.compilePartial(e,t,n)}function k(e,t,n){if(n)for(var r in n)C(r,n[r]);return x.render(e,t)}var e={};e.name="mustache.js",e.version="0.5.1-dev",e.tags=["{{","}}"],e.parse=S,e.clearCache=T,e.compile=N,e.compilePartial=C,e.render=k,e.Scanner=v,e.Context=m,e.Renderer=g,e.to_html=function(e,t,n,r){var i=k(e,t,n);if(typeof r!="function")return i;r(i)};var t=/\s*/,n=/\s+/,r=/\S/,i=/\s*=/,s=/\s*\}/,o=/#|\^|\/|>|\{|&|=|!/,f=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},l=/[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]/gm,p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};e.isWhitespace=a,e.isArray=f,e.quote=c,e.escapeRe=h,e.escapeHtml=d,v.prototype.eos=function(){return this.tail===""},v.prototype.scan=function(e){var t=this.tail.match(e);return t&&t.index===0?(this.tail=this.tail.substring(t[0].length),this.pos+=t[0].length,t[0]):null},v.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.pos+=this.tail.length,this.tail="";break;case 0:t=null;break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n),this.pos+=n}return t},m.make=function(e){return e instanceof m?e:new m(e)},m.prototype.clearCache=function(){this._cache={}},m.prototype.push=function(e){return new m(e,this)},m.prototype.lookup=function(e){var t=this._cache[e];if(!t){if(e===".")t=this.view;else{var n=this;while(n){if(e.indexOf(".")>0){var r=e.split("."),i=0;t=n.view;while(t&&i<r.length)t=t[r[i++]]}else t=n.view[e];if(t!=null)break;n=n.parent}}this._cache[e]=t}return typeof t=="function"&&(t=t.call(this.view)),t},g.prototype.clearCache=function(){this._cache={},this._partialCache={}},g.prototype.compile=function(e,t){typeof e=="string"&&(e=S(e,t));var n=y(e),r=this;return function(e){return n(m.make(e),r)}},g.prototype.compilePartial=function(e,t,n){return this._partialCache[e]=this.compile(t,n),this._partialCache[e]},g.prototype.render=function(e,t){var n=this._cache[e];return n||(n=this.compile(e),this._cache[e]=n),n(t)},g.prototype._section=function(e,t,n){var r=t.lookup(e);switch(typeof r){case"object":if(f(r)){var i="";for(var s=0,o=r.length;s<o;++s)i+=n(t.push(r[s]),this);return i}return r?n(t.push(r),this):"";case"function":var u=n(t,this),a=this,l=function(e){return a.render(e,t)};return r.call(t.view,u,l)||"";default:if(r)return n(t,this)}return""},g.prototype._inverted=function(e,t,n){var r=t.lookup(e);return r==null||r===!1||f(r)&&r.length===0?n(t,this):""},g.prototype._partial=function(e,t){var n=this._partialCache[e];return n?n(t,this):""},g.prototype._name=function(e,t,n){var r=t.lookup(e);typeof r=="function"&&(r=r.call(t.view));var i=r==null?"":String(r);return n?d(i):i};var x=new g;return e}());
define("views/HomeView", [ "jquery", "backbone", "mustache"], function( $, Backbone, Mustache) {


    this.HomeView = Backbone.View.extend({

        initialize: function() {
            this.render();
        },

        render: function() {

            var template = $('#home_template');
//            var dto = {
//                "username" : fitness.user.get('username'),
//                "displayName" : fitness.user.displayname,
//                "friendCount" : fitness.user.friendcount,
//                "fitbitFriendCount" : fitness.user.fitbitfriendcount
//            };
//            var html = Mustache.to_html(template.html(), dto);
            this.$el.empty();
            this.$el.append(template.html());
            this.$el.trigger('create');

            return this;
        }
    });
    return HomeView;
});

define("views/FriendsView", [ "jquery", "backbone", "mustache", "fitness" ], function( $, Backbone, Mustache, fitness ) {

    this.FriendsView = Backbone.View.extend({

        initialize: function() {
            this.render();
        },

        render: function() {
            var header = $('#header_template');
            var template = $('#friends_template');

            var dto = {
                    "friends" : this.model.models
            };
            var html = Mustache.to_html(template.html(), dto);
            this.$el.empty();
            this.$el.append(header.html()).append(html);
            $('#friends[data-role="listview"]').listview();
            //this.$el.trigger('create');
            return this;
        }
    });
    return FriendsView;
});

define("views/LoginView", [ "jquery", "backbone", "fitness", "customCodeClient"], function( $, Backbone, fitness, customCode) {

    var LoginView = Backbone.View.extend({

        initialize: function() {
            this.render();
        },

        events: {"click #login_submit" : "loginSubmit"} ,

        render: function() {

            //var footerView = new FooterView( { el: "#login .footer" } );

            var header = $('#static_header_template');
            var template = $('#login_template');
            this.$el.empty();
            this.$el.append(header.html()).append(template.html());
            this.$el.trigger('create');
            var lastEmail = localStorage.getItem('lastEmail');
            if (lastEmail) {
                $("#email").val(lastEmail);
            }
            return this;
        },

        loginSubmit : function() {
            var email = $("#email").val();
            if (email) {
                localStorage.setItem('lastEmail', email);
            }
            var password = $('#password').val();
            $.mobile.loading("show");
            customCode.lookupFitnessUser(email, password, function(success, data) {
                if (success) { // logged in
                    fitness.user = data;
                    var username = fitness.user.get('username');
                    var user = new StackMob.User({ username: username, password: password });
                    user.login(false, {
                        success: function(model) {
//                            $.mobile.loading("hide");
                            fitness.user = data;
                            if (username) {
                                fitness.log("logged in as " + username + " (" + fitness.user.get('email') + ")");
                                localStorage.setItem('username', username);
                            }
//                            $.mobile.loading("show");
                            console.debug(model);
                            router.navigate('#home', true);
                        },
                        error: function(model, response) {
                            console.debug(response);
                            $.mobile.loading("hide");
                            fitness.showMessage('login failed\n ' + data);
                        }
                    });
                }
                else {
                    $.mobile.loading("hide");
                    fitness.showMessage('login failed\n ' + data);
                }
            });
        }
    });
    return LoginView;
});

define("views/RegisterView", [ "jquery", "backbone", "fitness", "customCodeClient"], function( $, Backbone, fitness, customCode) {

     var RegisterView = Backbone.View.extend({

        initialize: function() {
            this.render();
        },

         events: {"click #register_submit" : "registerSubmit"} ,

         render: function() {
             var template = $('#register_template');
             var header = $('#header_template');
             this.$el.empty();
             this.$el.append(header.html()).append(template.html());
             this.$el.trigger('create');
             var lastEmail = localStorage.getItem('lastEmail');
             if (lastEmail) {
                 $("#register_email").val(lastEmail);
             }
             return this;
         },

         registerSubmit: function() {

             var email = $("#register_email").val();
             if (email) {
                 localStorage.setItem('lastEmail', email);
             }
             var newPassword = $('#new_password').val();
             var confirmPassword = $('#confirm_password').val();
             if (newPassword !== confirmPassword) {
                 fitness.showMessage("Passwords do not match");
                 return;
             }
             $.mobile.loading("show");
             customCode.createStackmobUser(email, newPassword, function(success, data) {
                 if (success) {
                     $.mobile.loading("hide");
                     fitness.user = data;
                     if (fitness.user.get('username')) {
                         localStorage.setItem('username', fitness.user.get('username'));
                     }
                     router.navigate("auth", true);

                     //window.location.href = '/#auth'; // could send to '#' and let the router decide to go to #auth

                 }
                 else {
                     $.mobile.loading("hide");
                     fitness.showMessage('Failed to save user:\n' + data);
                 }
             });
         }

    });
    return RegisterView;
});

define("views/ProfileView", [ "jquery", "backbone", "mustache", "fitness", "customCodeClient"], function( $, Backbone, Mustache, fitness, customCode) {

    var ProfileView = Backbone.View.extend({

        initialize: function() {
            this.render();
        },

        events: {
            "click #deauthorize" : "deauthorizeFitbit",
            "click #delete_user" : "deleteAccount"
        },

        render: function() {
            var template = $('#profile_template');
            var dto = this.model.toJSON();
            var html = Mustache.to_html(template.html(), dto);

            var header = $('#header_template');
            this.$el.empty();
            this.$el.append(header.html()).append(html);
            //this.$el.append(header.html());
            this.$el.trigger('create');
            return this;
        },

        deauthorizeFitbit : function() {
            $.mobile.loading("show");
            customCode.updateUserWithParams(fitness.user, {accesstoken : null}, function(success, data) {
                $.mobile.loading("hide");
                if (success) {
                    router.navigate("auth", true);
                }
                else {
                    fitness.showMessage('Failed to update user:\n' + data);
                }
            });
        },

        deleteAccount : function() {
            $.mobile.loading("show");
            fitness.deleteUser(function(success, data, response) {
                $.mobile.loading("hide");
                if (success) {
                    fitness.showMessage('Account deleted');
                    router.navigate("login", true);
                }
                else {
                    var message = 'Failed to delete account ' + response || '';
                    fitness.showMessage(message);
                }
            });
        }

    });
    return ProfileView;
});


define("views/AuthView", ["jquery", "backbone", "fitness", "customCodeClient"], function( $, Backbone, fitness, customCode) {

    var AuthView = Backbone.View.extend({
        initialize: function() {
            this.render();
        },

        events: {"click #authorize_link" : "authorize"} ,

        render: function() {
            var header = $('#header_template');
            var template = $('#auth_template');
//                var html = Mustache.to_html(template.html(), dto);
            this.$el.empty();
            this.$el.append(header.html()).append(template.html());
            this.$el.trigger('create');
            return this;
        },

        authorize: function () {
            localStorage.removeItem('request_token');
            localStorage.removeItem('request_token_secret');
            $.mobile.loading("show");
            customCode.getFitbitRequestToken(fitness.user.get('username'), function(success, tokens) {
                    if (success) {
                        localStorage.setItem('request_token', tokens.oauth_token);
                        localStorage.setItem('request_token_secret', tokens.oauth_token_secret);
                        window.location.href = 'http://www.fitbit.com/oauth/authorize?oauth_token=' + tokens.oauth_token + "&display=touch";
                    }
                    else {
                        fitness.showMessage('Sorry, could not authorize with fitbit.\n  Failed to get fitbit request token');
                    }
                }
            );
        }

    });
    return AuthView;
});

// file dependencies
define("views/CreateChallengeView", [ "jquery", "backbone", "mustache", "fitness", "models/ChallengeModel" ], function( $, Backbone, Mustache, fitness, ChallengeModel ) {


    var CreateChallengeView = Backbone.View.extend({
        initialize: function() {
            this.render();
        },

        events: {"click #create_challenge_submit" : "createChallengeSubmit"} ,

        render: function() {
            var template = $('#create_challenge_template');
            var header = $('#header_template');
            var dto = {};
            var html = Mustache.to_html(template.html(), dto);
            this.$el.empty();
            this.$el.append(header.html()).append(template.html());
            this.$el.trigger('create');
            return this;


//            var template = $('#profile_template');
//            var dto = fitness.user.toJSON();
//            var html = Mustache.to_html(template.html(), dto);
//
//            var header = $('#header_template');
//            this.$el.empty();
//            this.$el.append(header.html()).append(html);
//            //this.$el.append(header.html());
//            this.$el.trigger('create');
//            return this;

        },


        createChallengeSubmit : function() {
            var friendsInvited = 0;
            var challengeType = $("#challenge_type").val();


            var startDateStr = $('#start_date').val();
            var endDateStr = $('#end_date').val();

            if (!startDateStr || !endDateStr) {
                fitness.showMessage('Please enter a start and end date')
            }

            var startDate = fitness.parseDate(startDateStr);
            var endDate = fitness.parseDate(endDateStr);

            var challengeID = fitness.user.get('username') + '_' + challengeType + '_' + startDateStr + '_' + endDateStr;

            var Challenge = StackMob.Model.extend({ schemaName: 'challenge'});
            var challenge = new Challenge( {
                "challenge_id" : challengeID,
                "challengetype" : challengeType,
                "startdate" : startDate.getTime(),
                "enddate" : endDate.getTime(),
                "challengecreator" : fitness.user.get('username'),
                "value_type" : "int"
//                "users" : [fitness.user.get('username')]
                });
            $.mobile.loading("show");
            challenge.create({
                success: function(model) {
                    $.mobile.loading("hide");
                    fitness.joinUserToChallenge(fitness.user.get('username'), challengeID, function(success, leaderModel) {
                        if (!success) {
                            fitness.showMessage('Failed to create challenge, please try again');
                            challenge.delete();
                            return;
                        }
                        fitness.showMessage('Challenge created!');
                        fitness.inviteFriendsToChallenge(challengeID, function(success, data) {
                            fitness.showMessage('Finished inviting friends: ' + data);
                        })
                    });
                },
                error: function(model, response) {
                    $.mobile.loading("hide");
                    console.debug("Save challenge failed: " + response['error']);
                    if (response.error.indexOf('Duplicate') !== -1) {
                        fitness.showMessage("You've already created that challenge");
                    }
                    if (typeof callback === "function") {
                        callback(false);
                    }
                }
            });
        }
    });

    // Returns the View class
    return CreateChallengeView;

});
define("views/ChallengeListView", [ "jquery", "backbone", "mustache", "fitness", "customCodeClient"],
    function( $, Backbone, Mustache, fitness, customCode) {


        var ChallengeListView = Backbone.View.extend({

            initialize: function() {
                this.render();
            },

            render: function() {
                var header = $('#header_template');
                var template = $('#challenge_list_template');
                var challenges = [];
                _.each(this.model, function(challenge) {
                    //var description = challenge.get('challengetype');
                    var startDate = new Date(challenge.startdate);
                    var endDate = new Date(challenge.enddate);
                    var description = "Total steps from " + startDate.toLocaleDateString() + ' to ' + endDate.toLocaleDateString();
                    var count = challenge.leaders.length;
                    var challengeDTO = { "challengeID" : challenge.challenge_id,
                                         "description" : description,
                                         "count" : count};
                    challenges.push(challengeDTO);
                });
                var dto = {"challenges" : challenges};
                var html = Mustache.to_html(template.html(), dto);
                this.$el.empty();
                this.$el.append(header.html()).append(html);
                this.$el.trigger('refresh');

                //this.$el.trigger('create');
                //$('#challenge_list[data-role="listview"]').listview().listview('refresh');
                return this;
            }
        });
        return ChallengeListView;
    });

define("views/ChallengeView", [ "jquery", "backbone", "mustache", "fitness" ], function( $, Backbone, Mustache, fitness ) {

    var ChallengeView = Backbone.View.extend({

        initialize: function() {
            this.render();
        },

        render: function() {
            var header = $('#header_template');
            var template = $('#challenge_template');

            var startDate = new Date(this.model.get('startdate'));
            var endDate = new Date(this.model.get('enddate'));

            var dto = { "challengeID" : this.model.get('challenge_id'),
                "description" : "Total steps from " + startDate.toLocaleDateString() + ' to ' + endDate.toLocaleDateString(),
                "leaders" : this.model.get('leaders')
            };
//            var Leader = StackMob.Model.extend({ schemaName: 'leader' });
//            var Leaders = StackMob.Collection.extend({ model: Leader });
//            var leaders = new Leaders();
            var html = Mustache.to_html(template.html(), dto);
            this.$el.empty();
            this.$el.append(header.html()).append(html);
            $('#challenge[data-role="listview"]').listview().listview('refresh');
            //this.$el.trigger('create');
            return this;
        }
    });
    return ChallengeView;
});

define("views/InvitationView", [ "jquery", "backbone", "mustache", "fitness", "customCodeClient"],
    function( $, Backbone, Mustache, fitness, customCode) {

//        var q = [
//            {
//                "challenge": "10072_steps_date_range_2013-03-09_2013-03-09",
//                "challengeinviter": "10072",
//                "invitation_id": "12050d9daf834380bac0f0194c6eee11",
//                "accepted": false,
//                "lastmoddate": 1362854801650,
//                "createddate": 1362854801650,
//                "responded": false,
//                "inviteduser": "10069"
//            }
//        ];


        var InvitationView = Backbone.View.extend({

            initialize: function() {
                this.render();
            },

            events: {"click .invitation_accept" : "acceptInvitation",
                     "click .invitation_decline" : "declineInvitation"
            },

            render: function() {
                var header = $('#header_template');
                var template = $('#invitation_template');
//                var challenges = [
//                    { "attributes" : {"challengecreator" : "someone", "challengetype" : "steps"}},
//                    { "attributes" : {"challengecreator" : "someone", "challengetype" : "steps2"}},
//                    { "attributes" : {"challengecreator" : "someone", "challengetype" : "steps3"}}];
//                var dto = {"challenges" : challenges};

                var challenge = this.model.get('challenge');
                //var description = challenge.get('challengetype');
                var startDate = new Date(challenge.startdate);
                var endDate = new Date(challenge.enddate);
                var description = "Total steps from " + startDate.toLocaleDateString() + ' to ' + endDate.toLocaleDateString();
                var count = challenge.leaders.length;
                var invitationDTO = {
                    "invitation_id" : this.model.get('invitation_id'),
                    "description" : description,
                    "count" : count
                };

                var html = Mustache.to_html(template.html(), invitationDTO);
                this.$el.empty();
                this.$el.append(header.html()).append(html);
                this.$el.trigger('create');
//                $('#invitation[data-role="listview"]').listview();e
                return this;
            },

            saveModelChangePage : function(changes) {
                var Invitation = StackMob.Model.extend({ schemaName: 'invitation' });
                var invitation = new Invitation({ invitation_id: this.model.get('invitation_id')});
                // can't save the model directly since it has been expanded to include referenced objects
                invitation.save(changes, {
                    success: function(model) {
                        console.debug(JSON.stringify(model.toJSON()));
                        //fitness.showMessage('updated invitation');
                        router.navigate('#invitation_list', true);
                        //$.mobile.changePage('#invitation_list', {'reverse' : true, 'changeHash' : true});
                    },
                    error: function(model, response) {
                        console.debug(response);
                        fitness.showMessage('failed to update invitation');
                    }
                });
            },

            acceptInvitation : function(e) {
                var that = this;
                e.preventDefault();
                var inviteChallenge = this.model.get('challenge');
                $.mobile.showPageLoadingMsg();
                fitness.joinUserToChallenge(fitness.user.get('username'), inviteChallenge.challenge_id, function(success) {
                    if (!success) {
                        $.mobile.hidePageLoadingMsg();
                        fitness.showMessage('Failed to accept challenge, please try again');
                        return;
                    }
                });
                var username = this.model.get('inviteduser').username;
                var changes = {'accepted': true, 'responded' : true};
                that.model.set(changes);
                that.saveModelChangePage(changes);
            },

            declineInvitation : function(e) {
                e.preventDefault();
                var changes = {'accepted': false, 'responded' : true};
                this.model.set(changes);
                this.saveModelChangePage(changes);
            }

        });
        return InvitationView;
    });

define("views/InvitationListView", [ "jquery", "backbone", "mustache", "fitness", "customCodeClient"],
    function( $, Backbone, Mustache, fitness, customCode) {

//        var q = [
//            {
//                "challenge": "10072_steps_date_range_2013-03-09_2013-03-09",
//                "challengeinviter": "10072",
//                "invitation_id": "12050d9daf834380bac0f0194c6eee11",
//                "accepted": false,
//                "lastmoddate": 1362854801650,
//                "createddate": 1362854801650,
//                "responded": false,
//                "inviteduser": "10069"
//            }
//        ];


        var InvitationListView = Backbone.View.extend({

            initialize: function() {
                this.render();
            },

            render: function() {
                var header = $('#header_template');
                var template = $('#invitation_list_template');
//                var challenges = [
//                    { "attributes" : {"challengecreator" : "someone", "challengetype" : "steps"}},
//                    { "attributes" : {"challengecreator" : "someone", "challengetype" : "steps2"}},
//                    { "attributes" : {"challengecreator" : "someone", "challengetype" : "steps3"}}];
//                var dto = {"challenges" : challenges};

                var invitations = [];
                _.each(this.model.models, function(invitation) {
                    var challenge = invitation.get('challenge');
                    //var description = challenge.get('challengetype');
                    var startDate = new Date(challenge.startdate);
                    var endDate = new Date(challenge.enddate);
                    var description = "Total steps from " + startDate.toLocaleDateString() + ' to ' + endDate.toLocaleDateString();
                    var count = challenge.leaders.length;
                    var challengeDTO = {
                        "invitation_id" : invitation.get('invitation_id'),
                        "description" : description,
                        "count" : count
                    };
                    invitations.push(challengeDTO);
                });
                var dto = {"invitations" : invitations};
                var html = Mustache.to_html(template.html(), dto);
                this.$el.empty();
                this.$el.append(header.html()).append(html);
                //this.$el.trigger('create');
                this.$el.trigger('refresh');
                //$('#invitation_list[data-role="listview"]').listview();
                return this;
            }
        });
        return InvitationListView;
    });

/*! jQuery Mobile vGit Build: SHA1: 3d48d6517f808550ee402a2859feedec13b0a3fe <> Date: Tue Feb 19 15:25:22 2013 -0800 jquerymobile.com | jquery.org/license !*/
(function(a,b,c){typeof define=="function"&&define.amd?define('jquerymobile',["jquery"],function(d){return c(d,a,b),d.mobile}):c(a.jQuery,a,b)})(this,document,function(a,b,c,d){(function(a){a.mobile={}})(a),function(a,b,d){var e={};a.mobile=a.extend(a.mobile,{version:"1.3.0",ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:250,touchOverflowEnabled:!1,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"e",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,orientationChangeEnabled:!0,buttonMarkup:{hoverDelay:200},window:a(b),document:a(c),keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},behaviors:{},silentScroll:function(c){a.type(c)!=="number"&&(c=a.mobile.defaultHomeScroll),a.event.special.scrollstart.enabled=!1,setTimeout(function(){b.scrollTo(0,c),a.mobile.document.trigger("silentscroll",{x:0,y:c})},20),setTimeout(function(){a.event.special.scrollstart.enabled=!0},150)},nsNormalizeDict:e,nsNormalize:function(b){if(!b)return;return e[b]||(e[b]=a.camelCase(a.mobile.ns+b))},getInheritedTheme:function(a,b){var c=a[0],d="",e=/ui-(bar|body|overlay)-([a-z])\b/,f,g;while(c){f=c.className||"";if(f&&(g=e.exec(f))&&(d=g[2]))break;c=c.parentNode}return d||b||"a"},closestPageData:function(a){return a.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("mobile-page")},enhanceable:function(a){return this.haveParents(a,"enhance")},hijackable:function(a){return this.haveParents(a,"ajax")},haveParents:function(b,c){if(!a.mobile.ignoreContentEnabled)return b;var d=b.length,e=a(),f,g,h;for(var i=0;i<d;i++){g=b.eq(i),h=!1,f=b[i];while(f){var j=f.getAttribute?f.getAttribute("data-"+a.mobile.ns+c):"";if(j==="false"){h=!0;break}f=f.parentNode}h||(e=e.add(g))}return e},getScreenHeight:function(){return b.innerHeight||a.mobile.window.height()}},a.mobile),a.fn.jqmData=function(b,c){var e;return typeof b!="undefined"&&(b&&(b=a.mobile.nsNormalize(b)),arguments.length<2||c===d?e=this.data(b):e=this.data(b,c)),e},a.jqmData=function(b,c,d){var e;return typeof c!="undefined"&&(e=a.data(b,c?a.mobile.nsNormalize(c):c,d)),e},a.fn.jqmRemoveData=function(b){return this.removeData(a.mobile.nsNormalize(b))},a.jqmRemoveData=function(b,c){return a.removeData(b,a.mobile.nsNormalize(c))},a.fn.removeWithDependents=function(){a.removeWithDependents(this)},a.removeWithDependents=function(b){var c=a(b);(c.jqmData("dependents")||a()).remove(),c.remove()},a.fn.addDependents=function(b){a.addDependents(a(this),b)},a.addDependents=function(b,c){var d=a(b).jqmData("dependents")||a();a(b).jqmData("dependents",a.merge(d,c))},a.fn.getEncodedText=function(){return a("<div/>").text(a(this).text()).html()},a.fn.jqmEnhanceable=function(){return a.mobile.enhanceable(this)},a.fn.jqmHijackable=function(){return a.mobile.hijackable(this)};var f=a.find,g=/:jqmData\(([^)]*)\)/g;a.find=function(b,c,d,e){return b=b.replace(g,"[data-"+(a.mobile.ns||"")+"$1]"),f.call(this,b,c,d,e)},a.extend(a.find,f),a.find.matches=function(b,c){return a.find(b,null,null,c)},a.find.matchesSelector=function(b,c){return a.find(c,null,null,[b]).length>0}}(a,this),function(a,b){var c=0,d=Array.prototype.slice,e=a.cleanData;a.cleanData=function(b){for(var c=0,d;(d=b[c])!=null;c++)try{a(d).triggerHandler("remove")}catch(f){}e(b)},a.widget=function(b,c,d){var e,f,g,h,i=b.split(".")[0];b=b.split(".")[1],e=i+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[i]=a[i]||{},f=a[i][b],g=a[i][b]=function(a,b){if(!this._createWidget)return new g(a,b);arguments.length&&this._createWidget(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,e){a.isFunction(e)&&(d[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},d=function(a){return c.prototype[b].apply(this,a)};return function(){var b=this._super,c=this._superApply,f;return this._super=a,this._superApply=d,f=e.apply(this,arguments),this._super=b,this._superApply=c,f}}())}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix:b},d,{constructor:g,namespace:i,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g)},a.widget.extend=function(c){var e=d.call(arguments,1),f=0,g=e.length,h,i;for(;f<g;f++)for(h in e[f])i=e[f][h],e[f].hasOwnProperty(h)&&i!==b&&(a.isPlainObject(i)?c[h]=a.isPlainObject(c[h])?a.widget.extend({},c[h],i):a.widget.extend({},i):c[h]=i);return c},a.widget.bridge=function(c,e){var f=e.prototype.widgetFullName||c;a.fn[c]=function(g){var h=typeof g=="string",i=d.call(arguments,1),j=this;return g=!h&&i.length?a.widget.extend.apply(null,[g].concat(i)):g,h?this.each(function(){var d,e=a.data(this,f);if(!e)return a.error("cannot call methods on "+c+" prior to initialization; "+"attempted to call method '"+g+"'");if(!a.isFunction(e[g])||g.charAt(0)==="_")return a.error("no such method '"+g+"' for "+c+" widget instance");d=e[g].apply(e,i);if(d!==e&&d!==b)return j=d&&d.jquery?j.pushStack(d.get()):d,!1}):this.each(function(){var b=a.data(this,f);b?b.option(g||{})._init():a.data(this,f,new e(g,this))}),j}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(c,d){var e=c,f,g,h;if(arguments.length===0)return a.widget.extend({},this.options);if(typeof c=="string"){e={},f=c.split("."),c=f.shift();if(f.length){g=e[c]=a.widget.extend({},this.options[c]);for(h=0;h<f.length-1;h++)g[f[h]]=g[f[h]]||{},g=g[f[h]];c=f.pop();if(d===b)return g[c]===b?null:g[c];g[c]=d}else{if(d===b)return this.options[c]===b?null:this.options[c];e[c]=d}}return this._setOptions(e),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!b).attr("aria-disabled",b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(b,c,d){var e,f=this;typeof b!="boolean"&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(!b&&(f.options.disabled===!0||a(this).hasClass("ui-state-disabled")))return;return(typeof g=="string"?f[g]:g).apply(f,arguments)}typeof g!="string"&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^(\w+)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b)},_delay:function(a,b){function c(){return(typeof a=="string"?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){typeof e=="string"&&(e={effect:e});var g,h=e?e===!0||typeof e=="number"?c:e.effect||c:b;e=e||{},typeof e=="number"&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}})}(a),function(a,b){a.widget("mobile.widget",{_createWidget:function(){a.Widget.prototype._createWidget.apply(this,arguments),this._trigger("init")},_getCreateOptions:function(){var c=this.element,d={};return a.each(this.options,function(a){var e=c.jqmData(a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}));e!==b&&(d[a]=e)}),d},enhanceWithin:function(b,c){this.enhance(a(this.options.initSelector,a(b)),c)},enhance:function(b,c){var d,e,f=a(b),g=this;f=a.mobile.enhanceable(f),c&&f.length&&(d=a.mobile.closestPageData(f),e=d&&d.keepNativeSelector()||"",f=f.not(e)),f[this.widgetName]()},raise:function(a){throw"Widget ["+this.widgetName+"]: "+a}})}(a),function(a,b){a.extend(a.mobile,{loadingMessageTextVisible:d,loadingMessageTheme:d,loadingMessage:d,showPageLoadingMsg:function(b,c,d){a.mobile.loading("show",b,c,d)},hidePageLoadingMsg:function(){a.mobile.loading("hide")},loading:function(){this.loaderWidget.loader.apply(this.loaderWidget,arguments)}});var c="ui-loader",e=a("html"),f=a.mobile.window;a.widget("mobile.loader",{options:{theme:"a",textVisible:!1,html:"",text:"loading"},defaultHtml:"<div class='"+c+"'>"+"<span class='ui-icon ui-icon-loading'></span>"+"<h1></h1>"+"</div>",fakeFixLoader:function(){var b=a("."+a.mobile.activeBtnClass).first();this.element.css({top:a.support.scrollTop&&f.scrollTop()+f.height()/2||b.length&&b.offset().top||100})},checkLoaderPosition:function(){var b=this.element.offset(),c=f.scrollTop(),d=a.mobile.getScreenHeight();if(b.top<c||b.top-c>d)this.element.addClass("ui-loader-fakefix"),this.fakeFixLoader(),f.unbind("scroll",this.checkLoaderPosition).bind("scroll",a.proxy(this.fakeFixLoader,this))},resetHtml:function(){this.element.html(a(this.defaultHtml).html())},show:function(b,g,h){var i,j,k,l;this.resetHtml(),a.type(b)==="object"?(l=a.extend({},this.options,b),b=l.theme||a.mobile.loadingMessageTheme):(l=this.options,b=b||a.mobile.loadingMessageTheme||l.theme),j=g||a.mobile.loadingMessage||l.text,e.addClass("ui-loading");if(a.mobile.loadingMessage!==!1||l.html)a.mobile.loadingMessageTextVisible!==d?i=a.mobile.loadingMessageTextVisible:i=l.textVisible,this.element.attr("class",c+" ui-corner-all ui-body-"+b+" ui-loader-"+(i||g||b.text?"verbose":"default")+(l.textonly||h?" ui-loader-textonly":"")),l.html?this.element.html(l.html):this.element.find("h1").text(j),this.element.appendTo(a.mobile.pageContainer),this.checkLoaderPosition(),f.bind("scroll",a.proxy(this.checkLoaderPosition,this))},hide:function(){e.removeClass("ui-loading"),a.mobile.loadingMessage&&this.element.removeClass("ui-loader-fakefix"),a.mobile.window.unbind("scroll",this.fakeFixLoader),a.mobile.window.unbind("scroll",this.checkLoaderPosition)}}),f.bind("pagecontainercreate",function(){a.mobile.loaderWidget=a.mobile.loaderWidget||a(a.mobile.loader.prototype.defaultHtml).loader()})}(a,this),function(a,b,d){function k(a){return a=a||location.href,"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}var e="hashchange",f=c,g,h=a.event.special,i=f.documentMode,j="on"+e in b&&(i===d||i>7);a.fn[e]=function(a){return a?this.bind(e,a):this.trigger(e)},a.fn[e].delay=50,h[e]=a.extend(h[e],{setup:function(){if(j)return!1;a(g.start)},teardown:function(){if(j)return!1;a(g.stop)}}),g=function(){function n(){var c=k(),d=m(h);c!==h?(l(h=c,d),a(b).trigger(e)):d!==h&&(location.href=location.href.replace(/#.*/,"")+d),g=setTimeout(n,a.fn[e].delay)}var c={},g,h=k(),i=function(a){return a},l=i,m=i;return c.start=function(){g||n()},c.stop=function(){g&&clearTimeout(g),g=d},b.attachEvent&&!b.addEventListener&&!j&&function(){var b,d;c.start=function(){b||(d=a.fn[e].src,d=d&&d+k(),b=a('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){d||l(k()),n()}).attr("src",d||"javascript:0").insertAfter("body")[0].contentWindow,f.onpropertychange=function(){try{event.propertyName==="title"&&(b.document.title=f.title)}catch(a){}})},c.stop=i,m=function(){return k(b.location.href)},l=function(c,d){var g=b.document,h=a.fn[e].domain;c!==d&&(g.title=f.title,g.open(),h&&g.write('<script>document.domain="'+h+'"</script>'),g.close(),b.location.hash=c)}}(),c}()}(a,this),function(a,d){b.matchMedia=b.matchMedia||function(a,b){var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=g.offsetWidth===42,d.removeChild(f),{matches:c,media:a}}}(c),a.mobile.media=function(a){return b.matchMedia(a).matches}}(a),function(a,b){var d={touch:"ontouchend"in c};a.mobile.support=a.mobile.support||{},a.extend(a.support,d),a.extend(a.mobile.support,d)}(a),function(a,c){a.extend(a.support,{orientation:"orientation"in b&&"onorientationchange"in b})}(a),function(a,d){function e(a){var b=a.charAt(0).toUpperCase()+a.substr(1),c=(a+" "+h.join(b+" ")+b).split(" ");for(var e in c)if(g[c[e]]!==d)return!0}function m(a,b,d){var e=c.createElement("div"),f=function(a){return a.charAt(0).toUpperCase()+a.substr(1)},g=function(a){return a===""?"":"-"+a.charAt(0).toLowerCase()+a.substr(1)+"-"},i=function(c){var d=g(c)+a+": "+b+";",h=f(c),i=h+(h===""?a:f(a));e.setAttribute("style",d),!e.style[i]||(k=!0)},j=d?d:h,k;for(var l=0;l<j.length;l++)i(j[l]);return!!k}function n(){var e="transform-3d",g=a.mobile.media("(-"+h.join("-"+e+"),(-")+"-"+e+"),("+e+")");if(g)return!!g;var i=c.createElement("div"),j={MozTransform:"-moz-transform",transform:"transform"};f.append(i);for(var k in j)i.style[k]!==d&&(i.style[k]="translate3d( 100px, 1px, 1px )",g=b.getComputedStyle(i).getPropertyValue(j[k]));return!!g&&g!=="none"}function o(){var b=location.protocol+"//"+location.host+location.pathname+"ui-dir/",c=a("head base"),d=null,e="",g,h;return c.length?e=c.attr("href"):c=d=a("<base>",{href:b}).appendTo("head"),g=a("<a href='testurl' />").prependTo(f),h=g[0].href,c[0].href=e||location.pathname,d&&d.remove(),h.indexOf(b)===0}function p(){var a=c.createElement("x"),d=c.documentElement,e=b.getComputedStyle,f;return"pointerEvents"in a.style?(a.style.pointerEvents="auto",a.style.pointerEvents="x",d.appendChild(a),f=e&&e(a,"").pointerEvents==="auto",d.removeChild(a),!!f):!1}function q(){var a=c.createElement("div");return typeof a.getBoundingClientRect!="undefined"}function r(){var a=b,c=navigator.userAgent,d=navigator.platform,e=c.match(/AppleWebKit\/([0-9]+)/),f=!!e&&e[1],g=c.match(/Fennec\/([0-9]+)/),h=!!g&&g[1],i=c.match(/Opera Mobi\/([0-9]+)/),j=!!i&&i[1];return(d.indexOf("iPhone")>-1||d.indexOf("iPad")>-1||d.indexOf("iPod")>-1)&&f&&f<534||a.operamini&&{}.toString.call(a.operamini)==="[object OperaMini]"||i&&j<7458||c.indexOf("Android")>-1&&f&&f<533||h&&h<6||"palmGetResource"in b&&f&&f<534||c.indexOf("MeeGo")>-1&&c.indexOf("NokiaBrowser/8.5.0")>-1?!1:!0}var f=a("<body>").prependTo("html"),g=f[0].style,h=["Webkit","Moz","O"],i="palmGetResource"in b,j=b.opera,k=b.operamini&&{}.toString.call(b.operamini)==="[object OperaMini]",l=b.blackberry&&!e("-webkit-transform");a.extend(a.mobile,{browser:{}}),a.mobile.browser.oldIE=function(){var a=3,b=c.createElement("div"),d=b.all||[];do b.innerHTML="<!--[if gt IE "+ ++a+"]><br><![endif]-->";while(d[0]);return a>4?a:!a}(),a.extend(a.support,{cssTransitions:"WebKitTransitionEvent"in b||m("transition","height 100ms linear",["Webkit","Moz",""])&&!a.mobile.browser.oldIE&&!j,pushState:"pushState"in history&&"replaceState"in history&&b.navigator.userAgent.search(/CriOS/)===-1,mediaquery:a.mobile.media("only all"),cssPseudoElement:!!e("content"),touchOverflow:!!e("overflowScrolling"),cssTransform3d:n(),boxShadow:!!e("boxShadow")&&!l,fixedPosition:r(),scrollTop:("pageXOffset"in b||"scrollTop"in c.documentElement||"scrollTop"in f[0])&&!i&&!k,dynamicBaseTag:o(),cssPointerEvents:p(),boundingRect:q()}),f.remove();var s=function(){var a=b.navigator.userAgent;return a.indexOf("Nokia")>-1&&(a.indexOf("Symbian/3")>-1||a.indexOf("Series60/5")>-1)&&a.indexOf("AppleWebKit")>-1&&a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}();a.mobile.gradeA=function(){return(a.support.mediaquery||a.mobile.browser.oldIE&&a.mobile.browser.oldIE>=7)&&(a.support.boundingRect||a.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/)!==null)},a.mobile.ajaxBlacklist=b.blackberry&&!b.WebKitPoint||k||s,s&&a(function(){a("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),a.support.boxShadow||a("html").addClass("ui-mobile-nosupport-boxshadow")}(a),function(a,b){var c=a.mobile.window,d,e;a.event.special.navigate=d={bound:!1,pushStateEnabled:!0,originalEventName:b,isPushStateEnabled:function(){return a.support.pushState&&a.mobile.pushStateEnabled===!0&&this.isHashChangeEnabled()},isHashChangeEnabled:function(){return a.mobile.hashListeningEnabled===!0},popstate:function(b){var d=new a.Event("navigate"),e=new a.Event("beforenavigate"),f=b.originalEvent.state||{},g=location.href;c.trigger(e);if(e.isDefaultPrevented())return;b.historyState&&a.extend(f,b.historyState),d.originalEvent=b,setTimeout(function(){c.trigger(d,{state:f})},0)},hashchange:function(b,d){var e=new a.Event("navigate"),f=new a.Event("beforenavigate");c.trigger(f);if(f.isDefaultPrevented())return;e.originalEvent=b,c.trigger(e,{state:b.hashchangeState||{}})},setup:function(a,b){if(d.bound)return;d.bound=!0,d.isPushStateEnabled()?(d.originalEventName="popstate",c.bind("popstate.navigate",d.popstate)):d.isHashChangeEnabled()&&(d.originalEventName="hashchange",c.bind("hashchange.navigate",d.hashchange))}}}(a),function(a,c){var d,e,f,g="&ui-state=dialog";a.mobile.path=d={uiStateKey:"&ui-state",urlParseRE:/^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,getLocation:function(a){var b=a?this.parseUrl(a):location,c=this.parseUrl(a||location.href).hash;return c=c==="#"?"":c,b.protocol+"//"+b.host+b.pathname+b.search+c},parseLocation:function(){return this.parseUrl(this.getLocation())},parseUrl:function(b){if(a.type(b)==="object")return b;var c=d.urlParseRE.exec(b||"")||[];return{href:c[0]||"",hrefNoHash:c[1]||"",hrefNoSearch:c[2]||"",domain:c[3]||"",protocol:c[4]||"",doubleSlash:c[5]||"",authority:c[6]||"",username:c[8]||"",password:c[9]||"",host:c[10]||"",hostname:c[11]||"",port:c[12]||"",pathname:c[13]||"",directory:c[14]||"",filename:c[15]||"",search:c[16]||"",hash:c[17]||""}},makePathAbsolute:function(a,b){if(a&&a.charAt(0)==="/")return a;a=a||"",b=b?b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"";var c=b?b.split("/"):[],d=a.split("/");for(var e=0;e<d.length;e++){var f=d[e];switch(f){case".":break;case"..":c.length&&c.pop();break;default:c.push(f)}}return"/"+c.join("/")},isSameDomain:function(a,b){return d.parseUrl(a).domain===d.parseUrl(b).domain},isRelativeUrl:function(a){return d.parseUrl(a).protocol===""},isAbsoluteUrl:function(a){return d.parseUrl(a).protocol!==""},makeUrlAbsolute:function(a,b){if(!d.isRelativeUrl(a))return a;b===c&&(b=this.documentBase);var e=d.parseUrl(a),f=d.parseUrl(b),g=e.protocol||f.protocol,h=e.protocol?e.doubleSlash:e.doubleSlash||f.doubleSlash,i=e.authority||f.authority,j=e.pathname!=="",k=d.makePathAbsolute(e.pathname||f.filename,f.pathname),l=e.search||!j&&f.search||"",m=e.hash;return g+h+i+k+l+m},addSearchParams:function(b,c){var e=d.parseUrl(b),f=typeof c=="object"?a.param(c):c,g=e.search||"?";return e.hrefNoSearch+g+(g.charAt(g.length-1)!=="?"?"&":"")+f+(e.hash||"")},convertUrlToDataUrl:function(a){var c=d.parseUrl(a);return d.isEmbeddedPage(c)?c.hash.split(g)[0].replace(/^#/,"").replace(/\?.*$/,""):d.isSameDomain(c,this.documentBase)?c.hrefNoHash.replace(this.documentBase.domain,"").split(g)[0]:b.decodeURIComponent(a)},get:function(a){return a===c&&(a=d.parseLocation().hash),d.stripHash(a).replace(/[^\/]*\.[^\/*]+$/,"")},set:function(a){location.hash=a},isPath:function(a){return/\//.test(a)},clean:function(a){return a.replace(this.documentBase.domain,"")},stripHash:function(a){return a.replace(/^#/,"")},stripQueryParams:function(a){return a.replace(/\?.*$/,"")},cleanHash:function(a){return d.stripHash(a.replace(/\?.*$/,"").replace(g,""))},isHashValid:function(a){return/^#[^#]+$/.test(a)},isExternal:function(a){var b=d.parseUrl(a);return b.protocol&&b.domain!==this.documentUrl.domain?!0:!1},hasProtocol:function(a){return/^(:?\w+:)/.test(a)},isEmbeddedPage:function(a){var b=d.parseUrl(a);return b.protocol!==""?!this.isPath(b.hash)&&b.hash&&(b.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&b.hrefNoHash===this.documentBase.hrefNoHash):/^#/.test(b.href)},squash:function(a,b){var c,e,f,g,h,i=this.isPath(a),j=this.parseUrl(a),k=j.hash,l="";b=b||(d.isPath(a)?d.getLocation():d.getDocumentUrl()),f=i?d.stripHash(a):a,f=d.isPath(j.hash)?d.stripHash(j.hash):f,h=f.indexOf(this.uiStateKey),h>-1&&(l=f.slice(h),f=f.slice(0,h)),e=d.makeUrlAbsolute(f,b),g=this.parseUrl(e).search;if(i){if(d.isPath(k)||k.replace("#","").indexOf(this.uiStateKey)===0)k="";l&&k.indexOf(this.uiStateKey)===-1&&(k+=l),k.indexOf("#")===-1&&k!==""&&(k="#"+k),e=d.parseUrl(e),e=e.protocol+"//"+e.host+e.pathname+g+k}else e+=e.indexOf("#")>-1?l:"#"+l;return e},isPreservableHash:function(a){return a.replace("#","").indexOf(this.uiStateKey)===0}},d.documentUrl=d.parseLocation(),f=a("head").find("base"),d.documentBase=f.length?d.parseUrl(d.makeUrlAbsolute(f.attr("href"),d.documentUrl.href)):d.documentUrl,d.documentBaseDiffers=d.documentUrl.hrefNoHash!==d.documentBase.hrefNoHash,d.getDocumentUrl=function(b){return b?a.extend({},d.documentUrl):d.documentUrl.href},d.getDocumentBase=function(b){return b?a.extend({},d.documentBase):d.documentBase.href}}(a),function(a,b){var c=a.mobile.path;a.mobile.History=function(a,b){this.stack=a||[],this.activeIndex=b||0},a.extend(a.mobile.History.prototype,{getActive:function(){return this.stack[this.activeIndex]},getLast:function(){return this.stack[this.previousIndex]},getNext:function(){return this.stack[this.activeIndex+1]},getPrev:function(){return this.stack[this.activeIndex-1]},add:function(a,b){b=b||{},this.getNext()&&this.clearForward(),b.hash&&b.hash.indexOf("#")===-1&&(b.hash="#"+b.hash),b.url=a,this.stack.push(b),this.activeIndex=this.stack.length-1},clearForward:function(){this.stack=this.stack.slice(0,this.activeIndex+1)},find:function(a,b,c){b=b||this.stack;var d,e,f=b.length,g;for(e=0;e<f;e++){d=b[e];if(decodeURIComponent(a)===decodeURIComponent(d.url)||decodeURIComponent(a)===decodeURIComponent(d.hash)){g=e;if(c)return g}}return g},closest:function(a){var c,d=this.activeIndex;return c=this.find(a,this.stack.slice(0,d)),c===b&&(c=this.find(a,this.stack.slice(d),!0),c=c===b?c:c+d),c},direct:function(c){var d=this.closest(c.url),e=this.activeIndex;d!==b&&(this.activeIndex=d,this.previousIndex=e),d<e?(c.present||c.back||a.noop)(this.getActive(),"back"):d>e?(c.present||c.forward||a.noop)(this.getActive(),"forward"):d===b&&c.missing&&c.missing(this.getActive())}})}(a),function(a,d){var e=a.mobile.path;a.mobile.Navigator=function(b){this.history=b,this.ignoreInitialHashChange=!0,setTimeout(a.proxy(function(){this.ignoreInitialHashChange=!1},this),200),a.mobile.window.bind({"popstate.history":a.proxy(this.popstate,this),"hashchange.history":a.proxy(this.hashchange,this)})},a.extend(a.mobile.Navigator.prototype,{squash:function(d,f){var g,h,i=e.isPath(d)?e.stripHash(d):d;return h=e.squash(d),g=a.extend({hash:i,url:h},f),b.history.replaceState(g,g.title||c.title,h),g},hash:function(a,b){var c,d,f;c=e.parseUrl(a),d=e.parseLocation();if(d.pathname+d.search===c.pathname+c.search)f=c.hash?c.hash:c.pathname+c.search;else if(e.isPath(a)){var g=e.parseUrl(b);f=g.pathname+g.search+(e.isPreservableHash(g.hash)?g.hash.replace("#",""):"")}else f=a;return f},go:function(d,f,g){var h,i,j,k,l=a.event.special.navigate.isPushStateEnabled();i=e.squash(d),j=this.hash(d,i),g&&j!==e.stripHash(e.parseLocation().hash)&&(this.preventNextHashChange=g),this.preventHashAssignPopState=!0,b.location.hash=j,this.preventHashAssignPopState=!1,h=a.extend({url:i,hash:j,title:c.title},f),l&&(k=new a.Event("popstate"),k.originalEvent={type:"popstate",state:null},this.squash(d,h),g||(this.ignorePopState=!0,a.mobile.window.trigger(k))),this.history.add(h.url,h)},popstate:function(b){var c,d,f,g;if(!a.event.special.navigate.isPushStateEnabled())return;if(this.preventHashAssignPopState){this.preventHashAssignPopState=!1,b.stopImmediatePropagation();return}if(this.ignorePopState){this.ignorePopState=!1;return}if(!b.originalEvent.state&&this.history.stack.length===1&&this.ignoreInitialHashChange){this.ignoreInitialHashChange=!1;return}d=e.parseLocation().hash;if(!b.originalEvent.state&&d){f=this.squash(d),this.history.add(f.url,f),b.historyState=f;return}this.history.direct({url:(b.originalEvent.state||{}).url||d,present:function(c,d){b.historyState=a.extend({},c),b.historyState.direction=d}})},hashchange:function(b){var d,f;if(!a.event.special.navigate.isHashChangeEnabled()||a.event.special.navigate.isPushStateEnabled())return;if(this.preventNextHashChange){this.preventNextHashChange=!1,b.stopImmediatePropagation();return}d=this.history,f=e.parseLocation().hash,this.history.direct({url:f,present:function(c,d){b.hashchangeState=a.extend({},c),b.hashchangeState.direction=d},missing:function(){d.add(f,{hash:f,title:c.title})}})}})}(a),function(a,b){a.mobile.navigate=function(b,c,d){a.mobile.navigate.navigator.go(b,c,d)},a.mobile.navigate.history=new a.mobile.History,a.mobile.navigate.navigator=new a.mobile.Navigator(a.mobile.navigate.history);var c=a.mobile.path.parseLocation();a.mobile.navigate.history.add(c.href,{hash:c.hash})}(a),function(a,b,c,d){function x(a){while(a&&typeof a.originalEvent!="undefined")a=a.originalEvent;return a}function y(b,c){var e=b.type,f,g,i,k,l,m,n,o,p;b=a.Event(b),b.type=c,f=b.originalEvent,g=a.event.props,e.search(/^(mouse|click)/)>-1&&(g=j);if(f)for(n=g.length,k;n;)k=g[--n],b[k]=f[k];e.search(/mouse(down|up)|click/)>-1&&!b.which&&(b.which=1);if(e.search(/^touch/)!==-1){i=x(f),e=i.touches,l=i.changedTouches,m=e&&e.length?e[0]:l&&l.length?l[0]:d;if(m)for(o=0,p=h.length;o<p;o++)k=h[o],b[k]=m[k]}return b}function z(b){var c={},d,f;while(b){d=a.data(b,e);for(f in d)d[f]&&(c[f]=c.hasVirtualBinding=!0);b=b.parentNode}return c}function A(b,c){var d;while(b){d=a.data(b,e);if(d&&(!c||d[c]))return b;b=b.parentNode}return null}function B(){r=!1}function C(){r=!0}function D(){v=0,p.length=0,q=!1,C()}function E(){B()}function F(){G(),l=setTimeout(function(){l=0,D()},a.vmouse.resetTimerDuration)}function G(){l&&(clearTimeout(l),l=0)}function H(b,c,d){var e;if(d&&d[b]||!d&&A(c.target,b))e=y(c,b),a(c.target).trigger(e);return e}function I(b){var c=a.data(b.target,f);if(!q&&(!v||v!==c)){var d=H("v"+b.type,b);d&&(d.isDefaultPrevented()&&b.preventDefault(),d.isPropagationStopped()&&b.stopPropagation(),d.isImmediatePropagationStopped()&&b.stopImmediatePropagation())}}function J(b){var c=x(b).touches,d,e;if(c&&c.length===1){d=b.target,e=z(d);if(e.hasVirtualBinding){v=u++,a.data(d,f,v),G(),E(),o=!1;var g=x(b).touches[0];m=g.pageX,n=g.pageY,H("vmouseover",b,e),H("vmousedown",b,e)}}}function K(a){if(r)return;o||H("vmousecancel",a,z(a.target)),o=!0,F()}function L(b){if(r)return;var c=x(b).touches[0],d=o,e=a.vmouse.moveDistanceThreshold,f=z(b.target);o=o||Math.abs(c.pageX-m)>e||Math.abs(c.pageY-n)>e,o&&!d&&H("vmousecancel",b,f),H("vmousemove",b,f),F()}function M(a){if(r)return;C();var b=z(a.target),c;H("vmouseup",a,b);if(!o){var d=H("vclick",a,b);d&&d.isDefaultPrevented()&&(c=x(a).changedTouches[0],p.push({touchID:v,x:c.clientX,y:c.clientY}),q=!0)}H("vmouseout",a,b),o=!1,F()}function N(b){var c=a.data(b,e),d;if(c)for(d in c)if(c[d])return!0;return!1}function O(){}function P(b){var c=b.substr(1);return{setup:function(d,f){N(this)||a.data(this,e,{});var g=a.data(this,e);g[b]=!0,k[b]=(k[b]||0)+1,k[b]===1&&t.bind(c,I),a(this).bind(c,O),s&&(k.touchstart=(k.touchstart||0)+1,k.touchstart===1&&t.bind("touchstart",J).bind("touchend",M).bind("touchmove",L).bind("scroll",K))},teardown:function(d,f){--k[b],k[b]||t.unbind(c,I),s&&(--k.touchstart,k.touchstart||t.unbind("touchstart",J).unbind("touchmove",L).unbind("touchend",M).unbind("scroll",K));var g=a(this),h=a.data(this,e);h&&(h[b]=!1),g.unbind(c,O),N(this)||g.removeData(e)}}}var e="virtualMouseBindings",f="virtualTouchID",g="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),h="clientX clientY pageX pageY screenX screenY".split(" "),i=a.event.mouseHooks?a.event.mouseHooks.props:[],j=a.event.props.concat(i),k={},l=0,m=0,n=0,o=!1,p=[],q=!1,r=!1,s="addEventListener"in c,t=a(c),u=1,v=0,w;a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var Q=0;Q<g.length;Q++)a.event.special[g[Q]]=P(g[Q]);s&&c.addEventListener("click",function(b){var c=p.length,d=b.target,e,g,h,i,j,k;if(c){e=b.clientX,g=b.clientY,w=a.vmouse.clickDistanceThreshold,h=d;while(h){for(i=0;i<c;i++){j=p[i],k=0;if(h===d&&Math.abs(j.x-e)<w&&Math.abs(j.y-g)<w||a.data(h,f)===j.touchID){b.preventDefault(),b.stopPropagation();return}}h=h.parentNode}}},!0)}(a,b,c),function(a,b,d){function k(b,c,d){var e=d.type;d.type=c,a.event.dispatch.call(b,d),d.type=e}var e=a(c);a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(b,c){a.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)},a.attrFn&&(a.attrFn[c]=!0)});var f=a.mobile.support.touch,g="touchmove scroll",h=f?"touchstart":"mousedown",i=f?"touchend":"mouseup",j=f?"touchmove":"mousemove";a.event.special.scrollstart={enabled:!0,setup:function(){function f(a,c){d=c,k(b,d?"scrollstart":"scrollstop",a)}var b=this,c=a(b),d,e;c.bind(g,function(b){if(!a.event.special.scrollstart.enabled)return;d||f(b,!0),clearTimeout(e),e=setTimeout(function(){f(b,!1)},50)})}},a.event.special.tap={tapholdThreshold:750,setup:function(){var b=this,c=a(b);c.bind("vmousedown",function(d){function i(){clearTimeout(h)}function j(){i(),c.unbind("vclick",l).unbind("vmouseup",i),e.unbind("vmousecancel",j)}function l(a){j(),f===a.target&&k(b,"tap",a)}if(d.which&&d.which!==1)return!1;var f=d.target,g=d.originalEvent,h;c.bind("vmouseup",i).bind("vclick",l),e.bind("vmousecancel",j),h=setTimeout(function(){k(b,"taphold",a.Event("taphold",{target:f}))},a.event.special.tap.tapholdThreshold)})}},a.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(b){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;return{time:(new Date).getTime(),coords:[c.pageX,c.pageY],origin:a(b.target)}},stop:function(a){var b=a.originalEvent.touches?a.originalEvent.touches[0]:a;return{time:(new Date).getTime(),coords:[b.pageX,b.pageY]}},handleSwipe:function(b,c){c.time-b.time<a.event.special.swipe.durationThreshold&&Math.abs(b.coords[0]-c.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(b.coords[1]-c.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&b.origin.trigger("swipe").trigger(b.coords[0]>c.coords[0]?"swipeleft":"swiperight")},setup:function(){var b=this,c=a(b);c.bind(h,function(b){function g(b){if(!e)return;f=a.event.special.swipe.stop(b),Math.abs(e.coords[0]-f.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}var e=a.event.special.swipe.start(b),f;c.bind(j,g).one(i,function(){c.unbind(j,g),e&&f&&a.event.special.swipe.handleSwipe(e,f),e=f=d})})}},a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(b,c){a.event.special[b]={setup:function(){a(this).bind(c,a.noop)}}})}(a,this),function(a){a.event.special.throttledresize={setup:function(){a(this).bind("resize",c)},teardown:function(){a(this).unbind("resize",c)}};var b=250,c=function(){f=(new Date).getTime(),g=f-d,g>=b?(d=f,a(this).trigger("throttledresize")):(e&&clearTimeout(e),e=setTimeout(c,b-g))},d=0,e,f,g}(a),function(a,b){function o(){var a=g();a!==h&&(h=a,d.trigger(e))}var d=a(b),e="orientationchange",f,g,h,i,j,k={0:!0,180:!0};if(a.support.orientation){var l=b.innerWidth||d.width(),m=b.innerHeight||d.height(),n=50;i=l>m&&l-m>n,j=k[b.orientation];if(i&&j||!i&&!j)k={"-90":!0,90:!0}}a.event.special.orientationchange=a.extend({},a.event.special.orientationchange,{setup:function(){if(a.support.orientation&&!a.event.special.orientationchange.disabled)return!1;h=g(),d.bind("throttledresize",o)},teardown:function(){if(a.support.orientation&&!a.event.special.orientationchange.disabled)return!1;d.unbind("throttledresize",o)},add:function(a){var b=a.handler;a.handler=function(a){return a.orientation=g(),b.apply(this,arguments)}}}),a.event.special.orientationchange.orientation=g=function(){var d=!0,e=c.documentElement;return a.support.orientation?d=k[b.orientation]:d=e&&e.clientWidth/e.clientHeight<1.1,d?"portrait":"landscape"},a.fn[e]=function(a){return a?this.bind(e,a):this.trigger(e)},a.attrFn&&(a.attrFn[e]=!0)}(a,this),function(a,b){a.widget("mobile.page",a.mobile.widget,{options:{theme:"c",domCache:!1,keepNativeDefault:":jqmData(role='none'), :jqmData(role='nojs')"},_create:function(){if(this._trigger("beforecreate")===!1)return!1;this.element.attr("tabindex","0").addClass("ui-page ui-body-"+this.options.theme),this._on(this.element,{pagebeforehide:"removeContainerBackground",pagebeforeshow:"_handlePageBeforeShow"})},_handlePageBeforeShow:function(a){this.setContainerBackground()},removeContainerBackground:function(){a.mobile.pageContainer.removeClass("ui-overlay-"+a.mobile.getInheritedTheme(this.element.parent()))},setContainerBackground:function(b){this.options.theme&&a.mobile.pageContainer.addClass("ui-overlay-"+(b||this.options.theme))},keepNativeSelector:function(){var b=this.options,c=b.keepNative&&a.trim(b.keepNative);return c&&b.keepNative!==b.keepNativeDefault?[b.keepNative,b.keepNativeDefault].join(", "):b.keepNativeDefault}})}(a),function(a,b,c){var d=function(d){return d===c&&(d=!0),function(c,e,f,g){var h=new a.Deferred,i=e?" reverse":"",j=a.mobile.urlHistory.getActive(),k=j.lastScroll||a.mobile.defaultHomeScroll,l=a.mobile.getScreenHeight(),m=a.mobile.maxTransitionWidth!==!1&&a.mobile.window.width()>a.mobile.maxTransitionWidth,n=!a.support.cssTransitions||m||!c||c==="none"||Math.max(a.mobile.window.scrollTop(),k)>a.mobile.getMaxScrollForTransition(),o=" ui-page-pre-in",p=function(){a.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-"+c)},q=function(){a.event.special.scrollstart.enabled=!1,b.scrollTo(0,k),setTimeout(function(){a.event.special.scrollstart.enabled=!0},150)},r=function(){g.removeClass(a.mobile.activePageClass+" out in reverse "+c).height("")},s=function(){d?g.animationComplete(t):t(),g.height(l+a.mobile.window.scrollTop()).addClass(c+" out"+i)},t=function(){g&&d&&r(),u()},u=function(){f.css("z-index",-10),f.addClass(a.mobile.activePageClass+o),a.mobile.focusPage(f),f.height(l+k),q(),f.css("z-index",""),n||f.animationComplete(v),f.removeClass(o).addClass(c+" in"+i),n&&v()},v=function(){d||g&&r(),f.removeClass("out in reverse "+c).height(""),p(),a.mobile.window.scrollTop()!==k&&q(),h.resolve(c,e,f,g,!0)};return p(),g&&!n?s():t(),h.promise()}},e=d(),f=d(!1),g=function(){return a.mobile.getScreenHeight()*3};a.mobile.defaultTransitionHandler=e,a.mobile.transitionHandlers={"default":a.mobile.defaultTransitionHandler,sequential:e,simultaneous:f},a.mobile.transitionFallbacks={},a.mobile._maybeDegradeTransition=function(b){return b&&!a.support.cssTransform3d&&a.mobile.transitionFallbacks[b]&&(b=a.mobile.transitionFallbacks[b]),b},a.mobile.getMaxScrollForTransition=a.mobile.getMaxScrollForTransition||g}(a,this),function(a,d){function w(b){!!j&&(!j.closest("."+a.mobile.activePageClass).length||b)&&j.removeClass(a.mobile.activeBtnClass),j=null}function x(){o=!1,n.length>0&&a.mobile.changePage.apply(null,n.pop())}function B(b,c,d,e){c&&c.data("mobile-page")._trigger("beforehide",null,{nextPage:b}),b.data("mobile-page")._trigger("beforeshow",null,{prevPage:c||a("")}),a.mobile.hidePageLoadingMsg(),d=a.mobile._maybeDegradeTransition(d);var f=a.mobile.transitionHandlers[d||"default"]||a.mobile.defaultTransitionHandler,g=f(d,e,b,c);return g.done(function(){c&&c.data("mobile-page")._trigger("hide",null,{nextPage:b}),b.data("mobile-page")._trigger("show",null,{prevPage:c||a("")})}),g}function C(b,c){c&&b.attr("data-"+a.mobile.ns+"role",c),b.page()}function D(){var b=a.mobile.activePage&&F(a.mobile.activePage);return b||s.hrefNoHash}function E(a){while(a){if(typeof a.nodeName=="string"&&a.nodeName.toLowerCase()==="a")break;a=a.parentNode}return a}function F(b){var c=a(b).closest(".ui-page").jqmData("url"),d=s.hrefNoHash;if(!c||!h.isPath(c))c=d;return h.makeUrlAbsolute(c,d)}var e=a.mobile.window,f=a("html"),g=a("head"),h=a.extend(a.mobile.path,{getFilePath:function(b){var c="&"+a.mobile.subPageUrlKey;return b&&b.split(c)[0].split(p)[0]},isFirstPageUrl:function(b){var c=h.parseUrl(h.makeUrlAbsolute(b,this.documentBase)),e=c.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&c.hrefNoHash===this.documentBase.hrefNoHash,f=a.mobile.firstPage,g=f&&f[0]?f[0].id:d;return e&&(!c.hash||c.hash==="#"||g&&c.hash.replace(/^#/,"")===g)},isPermittedCrossDomainRequest:function(b,c){return a.mobile.allowCrossDomainPages&&b.protocol==="file:"&&c.search(/^https?:/)!==-1}}),i=null,j=null,k=a.Deferred(),l=a.mobile.navigate.history,m="[tabindex],a,button:visible,select:visible,input",n=[],o=!1,p="&ui-state=dialog",q=g.children("base"),r=h.documentUrl,s=h.documentBase,t=h.documentBaseDiffers,u=a.mobile.getScreenHeight,v=a.support.dynamicBaseTag?{element:q.length?q:a("<base>",{href:s.hrefNoHash}).prependTo(g),set:function(a){a=h.parseUrl(a).hrefNoHash,v.element.attr("href",h.makeUrlAbsolute(a,s))},reset:function(){v.element.attr("href",s.hrefNoSearch)}}:d;a.mobile.getDocumentUrl=h.getDocumentUrl,a.mobile.getDocumentBase=h.getDocumentBase,a.mobile.back=function(){var a=b.navigator;this.phonegapNavigationEnabled&&a&&a.app&&a.app.backHistory?a.app.backHistory():b.history.back()},a.mobile.focusPage=function(a){var b=a.find("[autofocus]"),c=a.find(".ui-title:eq(0)");if(b.length){b.focus();return}c.length?c.focus():a.focus()};var y=!0,z,A;z=function(){if(!y)return;var b=a.mobile.urlHistory.getActive();if(b){var c=e.scrollTop();b.lastScroll=c<a.mobile.minScrollBack?a.mobile.defaultHomeScroll:c}},A=function(){setTimeout(z,100)},e.bind(a.support.pushState?"popstate":"hashchange",function(){y=!1}),e.one(a.support.pushState?"popstate":"hashchange",function(){y=!0}),e.one("pagecontainercreate",function(){a.mobile.pageContainer.bind("pagechange",function(){y=!0,e.unbind("scrollstop",A),e.bind("scrollstop",A)})}),e.bind("scrollstop",A),a.mobile._maybeDegradeTransition=a.mobile._maybeDegradeTransition||function(a){return a},a.mobile.resetActivePageHeight=function(b){var c=a("."+a.mobile.activePageClass),d=parseFloat(c.css("padding-top")),e=parseFloat(c.css("padding-bottom")),f=parseFloat(c.css("border-top-width")),g=parseFloat(c.css("border-bottom-width"));b=typeof b=="number"?b:u(),c.css("min-height",b-d-e-f-g)},a.fn.animationComplete=function(b){return a.support.cssTransitions?a(this).one("webkitAnimationEnd animationend",b):(setTimeout(b,0),a(this))},a.mobile.path=h,a.mobile.base=v,a.mobile.urlHistory=l,a.mobile.dialogHashKey=p,a.mobile.allowCrossDomainPages=!1,a.mobile._bindPageRemove=function(){var b=a(this);!b.data("mobile-page").options.domCache&&b.is(":jqmData(external-page='true')")&&b.bind("pagehide.remove",function(b){var c=a(this),d=new a.Event("pageremove");c.trigger(d),d.isDefaultPrevented()||c.removeWithDependents()})},a.mobile.loadPage=function(b,c){var e=a.Deferred(),f=a.extend({},a.mobile.loadPage.defaults,c),g=null,i=null,j=h.makeUrlAbsolute(b,D());f.data&&f.type==="get"&&(j=h.addSearchParams(j,f.data),f.data=d),f.data&&f.type==="post"&&(f.reloadPage=!0);var k=h.getFilePath(j),l=h.convertUrlToDataUrl(j);f.pageContainer=f.pageContainer||a.mobile.pageContainer,g=f.pageContainer.children("[data-"+a.mobile.ns+"url='"+l+"']"),g.length===0&&l&&!h.isPath(l)&&(g=f.pageContainer.children("#"+l).attr("data-"+a.mobile.ns+"url",l).jqmData("url",l));if(g.length===0)if(a.mobile.firstPage&&h.isFirstPageUrl(k))a.mobile.firstPage.parent().length&&(g=a(a.mobile.firstPage));else if(h.isEmbeddedPage(k))return e.reject(j,c),e.promise();if(g.length){if(!f.reloadPage)return C(g,f.role),e.resolve(j,c,g),e.promise();i=g}var m=f.pageContainer,n=new a.Event("pagebeforeload"),o={url:b,absUrl:j,dataUrl:l,deferred:e,options:f};m.trigger(n,o);if(n.isDefaultPrevented())return e.promise();if(f.showLoadMsg)var p=setTimeout(function(){a.mobile.showPageLoadingMsg()},f.loadMsgDelay),q=function(){clearTimeout(p),a.mobile.hidePageLoadingMsg()};return v&&v.reset(),!a.mobile.allowCrossDomainPages&&!h.isSameDomain(r,j)?e.reject(j,c):a.ajax({url:k,type:f.type,data:f.data,dataType:"html",success:function(d,m,n){var p=a("<div></div>"),r=d.match(/<title[^>]*>([^<]*)/)&&RegExp.$1,s=new RegExp("(<[^>]+\\bdata-"+a.mobile.ns+"role=[\"']?page[\"']?[^>]*>)"),t=new RegExp("\\bdata-"+a.mobile.ns+"url=[\"']?([^\"'>]*)[\"']?");s.test(d)&&RegExp.$1&&t.test(RegExp.$1)&&RegExp.$1&&(b=k=h.getFilePath(a("<div>"+RegExp.$1+"</div>").text())),v&&v.set(k),p.get(0).innerHTML=d,g=p.find(":jqmData(role='page'), :jqmData(role='dialog')").first(),g.length||(g=a("<div data-"+a.mobile.ns+"role='page'>"+(d.split(/<\/?body[^>]*>/gmi)[1]||"")+"</div>")),r&&!g.jqmData("title")&&(~r.indexOf("&")&&(r=a("<div>"+r+"</div>").text()),g.jqmData("title",r));if(!a.support.dynamicBaseTag){var u=h.get(k);g.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function(){var b=a(this).is("[href]")?"href":a(this).is("[src]")?"src":"action",c=a(this).attr(b);c=c.replace(location.protocol+"//"+location.host+location.pathname,""),/^(\w+:|#|\/)/.test(c)||a(this).attr(b,u+c)})}g.attr("data-"+a.mobile.ns+"url",h.convertUrlToDataUrl(k)).attr("data-"+a.mobile.ns+"external-page",!0).appendTo(f.pageContainer),g.one("pagecreate",a.mobile._bindPageRemove),C(g,f.role),j.indexOf("&"+a.mobile.subPageUrlKey)>-1&&(g=f.pageContainer.children("[data-"+a.mobile.ns+"url='"+l+"']")),f.showLoadMsg&&q(),o.xhr=n,o.textStatus=m,o.page=g,f.pageContainer.trigger("pageload",o),e.resolve(j,c,g,i)},error:function(b,d,g){v&&v.set(h.get()),o.xhr=b,o.textStatus=d,o.errorThrown=g;var i=new a.Event("pageloadfailed");f.pageContainer.trigger(i,o);if(i.isDefaultPrevented())return;f.showLoadMsg&&(q(),a.mobile.showPageLoadingMsg(a.mobile.pageLoadErrorMessageTheme,a.mobile.pageLoadErrorMessage,!0),setTimeout(a.mobile.hidePageLoadingMsg,1500)),e.reject(j,c)}}),e.promise()},a.mobile.loadPage.defaults={type:"get",data:d,reloadPage:!1,role:d,showLoadMsg:!1,pageContainer:d,loadMsgDelay:50},a.mobile.changePage=function(b,e){if(o){n.unshift(arguments);return}var f=a.extend({},a.mobile.changePage.defaults,e),g;f.pageContainer=f.pageContainer||a.mobile.pageContainer,f.fromPage=f.fromPage||a.mobile.activePage,g=typeof b=="string";var i=f.pageContainer,j=new a.Event("pagebeforechange"),k={toPage:b,options:f};g?k.absUrl=h.makeUrlAbsolute(b,D()):k.absUrl=b.data("absUrl"),i.trigger(j,k);if(j.isDefaultPrevented())return;b=k.toPage,g=typeof b=="string",o=!0;if(g){f.target=b,a.mobile.loadPage(b,f).done(function(b,c,d,e){o=!1,c.duplicateCachedPage=e,d.data("absUrl",k.absUrl),a.mobile.changePage(d,c)}).fail(function(a,b){o=!1,w(!0),x(),f.pageContainer.trigger("pagechangefailed",k)});return}b[0]===a.mobile.firstPage[0]&&!f.dataUrl&&(f.dataUrl=r.hrefNoHash);var m=f.fromPage,q=f.dataUrl&&h.convertUrlToDataUrl(f.dataUrl)||b.jqmData("url"),s=q,t=h.getFilePath(q),u=l.getActive(),v=l.activeIndex===0,y=0,z=c.title,A=f.role==="dialog"||b.jqmData("role")==="dialog";if(m&&m[0]===b[0]&&!f.allowSamePageTransition){o=!1,i.trigger("pagechange",k),f.fromHashChange&&l.direct({url:q});return}C(b,f.role),f.fromHashChange&&(y=e.direction==="back"?-1:1);try{c.activeElement&&c.activeElement.nodeName.toLowerCase()!=="body"?a(c.activeElement).blur():a("input:focus, textarea:focus, select:focus").blur()}catch(E){}var F=!1;A&&u&&(u.url&&u.url.indexOf(p)>-1&&a.mobile.activePage&&!a.mobile.activePage.is(".ui-dialog")&&l.activeIndex>0&&(f.changeHash=!1,F=!0),q=u.url||"",!F&&q.indexOf("#")>-1?q+=p:q+="#"+p,l.activeIndex===0&&q===l.initialDst&&(q+=p));var G=u?b.jqmData("title")||b.children(":jqmData(role='header')").find(".ui-title").getEncodedText():z;!!G&&z===c.title&&(z=G),b.jqmData("title")||b.jqmData("title",z),f.transition=f.transition||(y&&!v?u.transition:d)||(A?a.mobile.defaultDialogTransition:a.mobile.defaultPageTransition),!y&&F&&(l.getActive().pageUrl=s);if(q&&!f.fromHashChange){var H;!h.isPath(q)&&q.indexOf("#")<0&&(q="#"+q),H={transition:f.transition,title:z,pageUrl:s,role:f.role},f.changeHash!==!1&&a.mobile.hashListeningEnabled?a.mobile.navigate(q,H,!0):b[0]!==a.mobile.firstPage[0]&&a.mobile.navigate.history.add(q,H)}c.title=z,a.mobile.activePage=b,f.reverse=f.reverse||y<0,B(b,m,f.transition,f.reverse).done(function(c,d,e,g,h){w(),f.duplicateCachedPage&&f.duplicateCachedPage.remove(),h||a.mobile.focusPage(b),x(),i.trigger("pagechange",k)})},a.mobile.changePage.defaults={transition:d,reverse:!1,changeHash:!0,fromHashChange:!1,role:d,duplicateCachedPage:d,pageContainer:d,showLoadMsg:!0,dataUrl:d,fromPage:d,allowSamePageTransition:!1},a.mobile.navreadyDeferred=a.Deferred(),a.mobile._registerInternalEvents=function(){var c=function(b,c){var d,e,f,g=!0,j,k;return!a.mobile.ajaxEnabled||b.is(":jqmData(ajax='false')")||!b.jqmHijackable().length?!1:(e=b.attr("target"),f=b.attr("action"),f||(f=F(b),f===s.hrefNoHash&&(f=r.hrefNoSearch)),f=h.makeUrlAbsolute(f,F(b)),h.isExternal(f)&&!h.isPermittedCrossDomainRequest(r,f)||e?!1:(c||(d=b.attr("method"),j=b.serializeArray(),i&&i[0].form===b[0]&&(k=i.attr("name"),k&&(a.each(j,function(a,b){if(b.name===k)return k="",!1}),k&&j.push({name:k,value:i.attr("value")}))),g={url:f,options:{type:d&&d.length&&d.toLowerCase()||"get",data:a.param(j),transition:b.jqmData("transition"),reverse:b.jqmData("direction")==="reverse",reloadPage:!0}}),g))};a.mobile.document.delegate("form","submit",function(b){var d=c(a(this));d&&(a.mobile.changePage(d.url,d.options),b.preventDefault())}),a.mobile.document.bind("vclick",function(b){var d,e,f=b.target,g=!1;if(b.which>1||!a.mobile.linkBindingEnabled)return;i=a(f);if(a.data(f,"mobile-button")){if(!c(a(f).closest("form"),!0))return;f.parentNode&&(f=f.parentNode)}else{f=E(f);if(!f||h.parseUrl(f.getAttribute("href")||"#").hash==="#")return;if(!a(f).jqmHijackable().length)return}~f.className.indexOf("ui-link-inherit")?f.parentNode&&(e=a.data(f.parentNode,"buttonElements")):e=a.data(f,"buttonElements"),e?f=e.outer:g=!0,d=a(f),g&&(d=d.closest(".ui-btn")),d.length>0&&!d.hasClass("ui-disabled")&&(w(!0),j=d,j.addClass(a.mobile.activeBtnClass))}),a.mobile.document.bind("click",function(c){if(!a.mobile.linkBindingEnabled||c.isDefaultPrevented())return;var e=E(c.target),f=a(e),g;if(!e||c.which>1||!f.jqmHijackable().length)return;g=function(){b.setTimeout(function(){w(!0)},200)};if(f.is(":jqmData(rel='back')"))return a.mobile.back(),!1;var i=F(f),j=h.makeUrlAbsolute(f.attr("href")||"#",i);if(!a.mobile.ajaxEnabled&&!h.isEmbeddedPage(j)){g();return}if(j.search("#")!==-1){j=j.replace(/[^#]*#/,"");if(!j){c.preventDefault();return}h.isPath(j)?j=h.makeUrlAbsolute(j,i):j=h.makeUrlAbsolute("#"+j,r.hrefNoHash)}var k=f.is("[rel='external']")||f.is(":jqmData(ajax='false')")||f.is("[target]"),l=k||h.isExternal(j)&&!h.isPermittedCrossDomainRequest(r,j);if(l){g();return}var m=f.jqmData("transition"),n=f.jqmData("direction")==="reverse"||f.jqmData("back"),o=f.attr("data-"+a.mobile.ns+"rel")||d;a.mobile.changePage(j,{transition:m,reverse:n,role:o,link:f}),c.preventDefault()}),a.mobile.document.delegate(".ui-page","pageshow.prefetch",function(){var b=[];a(this).find("a:jqmData(prefetch)").each(function(){var c=a(this),d=c.attr("href");d&&a.inArray(d,b)===-1&&(b.push(d),a.mobile.loadPage(d,{role:c.attr("data-"+a.mobile.ns+"rel")}))})}),a.mobile._handleHashChange=function(c,e){var f=h.stripHash(c),g=a.mobile.urlHistory.stack.length===0?"none":d,i={changeHash:!1,fromHashChange:!0,reverse:e.direction==="back"};a.extend(i,e,{transition:(l.getLast()||{}).transition||g});if(l.activeIndex>0&&f.indexOf(p)>-1&&l.initialDst!==f){if(a.mobile.activePage&&!a.mobile.activePage.is(".ui-dialog")){e.direction==="back"?a.mobile.back():b.history.forward();return}f=e.pageUrl;var j=a.mobile.urlHistory.getActive();a.extend(i,{role:j.role,transition:j.transition,reverse:e.direction==="back"})}f?(f=h.isPath(f)?f:h.makeUrlAbsolute("#"+f,s),f===h.makeUrlAbsolute("#"+l.initialDst,s)&&l.stack.length&&l.stack[0].url!==l.initialDst.replace(p,"")&&(f=a.mobile.firstPage),a.mobile.changePage(f,i)):a.mobile.changePage(a.mobile.firstPage,i)},e.bind("navigate",function(b,c){var d=a.event.special.navigate.originalEventName.indexOf("hashchange")>-1?c.state.hash:c.state.url;d||(d=a.mobile.path.parseLocation().hash);if(!d||d==="#"||d.indexOf("#"+a.mobile.path.uiStateKey)===0)d=location.href;a.mobile._handleHashChange(d,c.state)}),a.mobile.document.bind("pageshow",a.mobile.resetActivePageHeight),a.mobile.window.bind("throttledresize",a.mobile.resetActivePageHeight)},a(function(){k.resolve()}),a.when(k,a.mobile.navreadyDeferred).done(function(){a.mobile._registerInternalEvents()})}(a),function(a,b,c){a.mobile.transitionFallbacks.flip="fade"}(a,this),function(a,b,c){a.mobile.transitionFallbacks.flow="fade"}(a,this),function(a,b,c){a.mobile.transitionFallbacks.pop="fade"}(a,this),function(a,b,c){a.mobile.transitionHandlers.slide=a.mobile.transitionHandlers.simultaneous,a.mobile.transitionFallbacks.slide="fade"}(a,this),function(a,b,c){a.mobile.transitionFallbacks.slidedown="fade"}(a,this),function(a,b,c){a.mobile.transitionFallbacks.slidefade="fade"}(a,this),function(a,b,c){a.mobile.transitionFallbacks.slideup="fade"}(a,this),function(a,b,c){a.mobile.transitionFallbacks.turn="fade"}(a,this),function(a,b){a.mobile.page.prototype.options.degradeInputs={color:!1,date:!1,datetime:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:"number",search:"text",tel:!1,time:!1,url:!1,week:!1},a.mobile.document.bind("pagecreate create",function(b){var c=a.mobile.closestPageData(a(b.target)),d;if(!c)return;d=c.options,a(b.target).find("input").not(c.keepNativeSelector()).each(function(){var b=a(this),c=this.getAttribute("type"),e=d.degradeInputs[c]||"text";if(d.degradeInputs[c]){var f=a("<div>").html(b.clone()).html(),g=f.indexOf(" type=")>-1,h=g?/\s+type=["']?\w+['"]?/:/\/?>/,i=' type="'+e+'" data-'+a.mobile.ns+'type="'+c+'"'+(g?"":">");b.replaceWith(f.replace(h,i))}})})}(a),function(a,b,c){a.widget("mobile.dialog",a.mobile.widget,{options:{closeBtn:"left",closeBtnText:"Close",overlayTheme:"a",corners:!0,initSelector:":jqmData(role='dialog')"},_handlePageBeforeShow:function(){this._isCloseable=!0,this.options.overlayTheme&&this.element.page("removeContainerBackground").page("setContainerBackground",this.options.overlayTheme)},_create:function(){var b=this,c=this.element,d=this.options.corners?" ui-corner-all":"",e=a("<div/>",{role:"dialog","class":"ui-dialog-contain ui-overlay-shadow"+d});c.addClass("ui-dialog ui-overlay-"+this.options.overlayTheme),c.wrapInner(e),c.bind("vclick submit",function(b){var c=a(b.target).closest(b.type==="vclick"?"a":"form"),d;c.length&&!c.jqmData("transition")&&(d=a.mobile.urlHistory.getActive()||{},c.attr("data-"+a.mobile.ns+"transition",d.transition||a.mobile.defaultDialogTransition).attr("data-"+a.mobile.ns+"direction","reverse"))}),this._on(c,{pagebeforeshow:"_handlePageBeforeShow"}),a.extend(this,{_createComplete:!1}),this._setCloseBtn(this.options.closeBtn)},_setCloseBtn:function(b){var c=this,d,e;this._headerCloseButton&&(this._headerCloseButton.remove(),this._headerCloseButton=null),b!=="none"&&(e=b==="left"?"left":"right",d=a("<a href='#' class='ui-btn-"+e+"' data-"+a.mobile.ns+"icon='delete' data-"+a.mobile.ns+"iconpos='notext'>"+this.options.closeBtnText+"</a>"),this.element.children().find(":jqmData(role='header')").first().prepend(d),this._createComplete&&a.fn.buttonMarkup&&d.buttonMarkup(),this._createComplete=!0,d.bind("click",function(){c.close()}),this._headerCloseButton=d)},_setOption:function(b,c){b==="closeBtn"&&(this._setCloseBtn(c),this._super(b,c),this.element.attr("data-"+(a.mobile.ns||"")+"close-btn",c))},close:function(){var b,c,d=a.mobile.navigate.history;this._isCloseable&&(this._isCloseable=!1,a.mobile.hashListeningEnabled&&d.activeIndex>0?a.mobile.back():(b=Math.max(0,d.activeIndex-1),c=d.stack[b].pageUrl||d.stack[b].url,d.previousIndex=d.activeIndex,d.activeIndex=b,a.mobile.path.isPath(c)||(c=a.mobile.path.makeUrlAbsolute("#"+c)),a.mobile.changePage(c,{direction:"back",changeHash:!1,fromHashChange:!0})))}}),a.mobile.document.delegate(a.mobile.dialog.prototype.options.initSelector,"pagecreate",function(){a.mobile.dialog.prototype.enhance(this)})}(a,this),function(a,b){a.mobile.page.prototype.options.backBtnText="Back",a.mobile.page.prototype.options.addBackBtn=!1,a.mobile.page.prototype.options.backBtnTheme=null,a.mobile.page.prototype.options.headerTheme="a",a.mobile.page.prototype.options.footerTheme="a",a.mobile.page.prototype.options.contentTheme=null,a.mobile.document.bind("pagecreate",function(b){var c=a(b.target),d=c.data("mobile-page").options,e=c.jqmData("role"),f=d.theme;a(":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')",c).jqmEnhanceable().each(function(){var b=a(this),g=b.jqmData("role"),h=b.jqmData("theme"),i=h||d.contentTheme||e==="dialog"&&f,j,k,l,m;b.addClass("ui-"+g);if(g==="header"||g==="footer"){var n=h||(g==="header"?d.headerTheme:d.footerTheme)||f;b.addClass("ui-bar-"+n).attr("role",g==="header"?"banner":"contentinfo"),g==="header"&&(j=b.children("a, button"),k=j.hasClass("ui-btn-left"),l=j.hasClass("ui-btn-right"),k=k||j.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length,l=l||j.eq(1).addClass("ui-btn-right").length),d.addBackBtn&&g==="header"&&a(".ui-page").length>1&&c.jqmData("url")!==a.mobile.path.stripHash(location.hash)&&!k&&(m=a("<a href='javascript:void(0);' class='ui-btn-left' data-"+a.mobile.ns+"rel='back' data-"+a.mobile.ns+"icon='arrow-l'>"+d.backBtnText+"</a>").attr("data-"+a.mobile.ns+"theme",d.backBtnTheme||n).prependTo(b)),b.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({role:"heading","aria-level":"1"})}else g==="content"&&(i&&b.addClass("ui-body-"+i),b.attr("role","main"))})})}(a),function(a,b){a.mobile.behaviors.addFirstLastClasses={_getVisibles:function(a,b){var c;return b?c=a.not(".ui-screen-hidden"):(c=a.filter(":visible"),c.length===0&&(c=a.not(".ui-screen-hidden"))),c},_addFirstLastClasses:function(a,b,c){a.removeClass("ui-first-child ui-last-child"),b.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"),c||this.element.trigger("updatelayout")}}}(a),function(a,b){a.fn.fieldcontain=function(a){return this.addClass("ui-field-contain ui-body ui-br").contents().filter(function(){return this.nodeType===3&&!/\S/.test(this.nodeValue)}).remove()},a(c).bind("pagecreate create",function(b){a(":jqmData(role='fieldcontain')",b.target).jqmEnhanceable().fieldcontain()})}(a),function(a,b){a.fn.grid=function(b){return this.each(function(){var c=a(this),d=a.extend({grid:null},b),e=c.children(),f={solo:1,a:2,b:3,c:4,d:5},g=d.grid,h;if(!g)if(e.length<=5)for(var i in f)f[i]===e.length&&(g=i);else g="a",c.addClass("ui-grid-duo");h=f[g],c.addClass("ui-grid-"+g),e.filter(":nth-child("+h+"n+1)").addClass("ui-block-a"),h>1&&e.filter(":nth-child("+h+"n+2)").addClass("ui-block-b"),h>2&&e.filter(":nth-child("+h+"n+3)").addClass("ui-block-c"),h>3&&e.filter(":nth-child("+h+"n+4)").addClass("ui-block-d"),h>4&&e.filter(":nth-child("+h+"n+5)").addClass("ui-block-e")})}}(a),function(a,b){a(c).bind("pagecreate create",function(b){a(":jqmData(role='nojs')",b.target).addClass("ui-nojs")})}(a),function(a,b){a.mobile.behaviors.formReset={_handleFormReset:function(){this._on(this.element.closest("form"),{reset:function(){this._delay("_reset")}})}}}(a),function(a,b){function e(a){var b;while(a){b=typeof a.className=="string"&&a.className+" ";if(b&&b.indexOf("ui-btn ")>-1&&b.indexOf("ui-disabled ")<0)break;a=a.parentNode}return a}function f(d,e,f,g,h){var i=a.data(d[0],"buttonElements");d.removeClass(e).addClass(f),i&&(i.bcls=a(c.createElement("div")).addClass(i.bcls+" "+f).removeClass(e).attr("class"),g!==b&&(i.hover=g),i.state=h)}var d=function(a,c){var d=a.getAttribute(c);return d==="true"?!0:d==="false"?!1:d===null?b:d};a.fn.buttonMarkup=function(e){var f=this,h="data-"+a.mobile.ns,i;e=e&&a.type(e)==="object"?e:{};for(var j=0;j<f.length;j++){var k=f.eq(j),l=k[0],m=a.extend({},a.fn.buttonMarkup.defaults,{icon:e.icon!==b?e.icon:d(l,h+"icon"),iconpos:e.iconpos!==b?e.iconpos:d(l,h+"iconpos"),theme:e.theme!==b?e.theme:d(l,h+"theme")||a.mobile.getInheritedTheme(k,"c"),inline:e.inline!==b?e.inline:d(l,h+"inline"),shadow:e.shadow!==b?e.shadow:d(l,h+"shadow"),corners:e.corners!==b?e.corners:d(l,h+"corners"),iconshadow:e.iconshadow!==b?e.iconshadow:d(l,h+"iconshadow"),mini:e.mini!==b?e.mini:d(l,h+"mini")},e),n="ui-btn-inner",o="ui-btn-text",p,q,r=!1,s="up",t,u,v,w;for(i in m)l.setAttribute(h+i,m[i]);d(l,h+"rel")==="popup"&&k.attr("href")&&(l.setAttribute("aria-haspopup",!0),l.setAttribute("aria-owns",k.attr("href"))),w=a.data(l.tagName==="INPUT"||l.tagName==="BUTTON"?l.parentNode:l,"buttonElements"),w?(l=w.outer,k=a(l),t=w.inner,u=w.text,a(w.icon).remove(),w.icon=null,r=w.hover,s=w.state):(t=c.createElement(m.wrapperEls),u=c.createElement(m.wrapperEls)),v=m.icon?c.createElement("span"):null,g&&!w&&g(),m.theme||(m.theme=a.mobile.getInheritedTheme(k,"c")),p="ui-btn ",p+=r?"ui-btn-hover-"+m.theme:"",p+=s?" ui-btn-"+s+"-"+m.theme:"",p+=m.shadow?" ui-shadow":"",p+=m.corners?" ui-btn-corner-all":"",m.mini!==b&&(p+=m.mini===!0?" ui-mini":" ui-fullsize"),m.inline!==b&&(p+=m.inline===!0?" ui-btn-inline":" ui-btn-block"),m.icon&&(m.icon="ui-icon-"+m.icon,m.iconpos=m.iconpos||"left",q="ui-icon "+m.icon,m.iconshadow&&(q+=" ui-icon-shadow")),m.iconpos&&(p+=" ui-btn-icon-"+m.iconpos,m.iconpos==="notext"&&!k.attr("title")&&k.attr("title",k.getEncodedText())),m.iconpos&&m.iconpos==="notext"&&!k.attr("title")&&k.attr("title",k.getEncodedText()),w&&k.removeClass(w.bcls||""),k.removeClass("ui-link").addClass(p),t.className=n,u.className=o,w||t.appendChild(u);if(v){v.className=q;if(!w||!w.icon)v.innerHTML="&#160;",t.appendChild(v)}while(l.firstChild&&!w)u.appendChild(l.firstChild);w||l.appendChild(t),w={hover:r,state:s,bcls:p,outer:l,inner:t,text:u,icon:v},a.data(l,"buttonElements",w),a.data(t,"buttonElements",w),a.data(u,"buttonElements",w),v&&a.data(v,"buttonElements",w)}return this},a.fn.buttonMarkup.defaults={corners:!0,shadow:!0,iconshadow:!0,wrapperEls:"span"};var g=function(){var c=a.mobile.buttonMarkup.hoverDelay,d,h;a.mobile.document.bind({"vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart":function(g){var i,j=a(e(g.target)),k=g.originalEvent&&/^touch/.test(g.originalEvent.type),l=g.type;if(j.length){i=j.attr("data-"+a.mobile.ns+"theme");if(l==="vmousedown")k?d=setTimeout(function(){f(j,"ui-btn-up-"+i,"ui-btn-down-"+i,b,"down")},c):f(j,"ui-btn-up-"+i,"ui-btn-down-"+i,b,"down");else if(l==="vmousecancel"||l==="vmouseup")f(j,"ui-btn-down-"+i,"ui-btn-up-"+i,b,"up");else if(l==="vmouseover"||l==="focus")k?h=setTimeout(function(){f(j,"ui-btn-up-"+i,"ui-btn-hover-"+i,!0,"")},c):f(j,"ui-btn-up-"+i,"ui-btn-hover-"+i,!0,"");else if(l==="vmouseout"||l==="blur"||l==="scrollstart")f(j,"ui-btn-hover-"+i+" ui-btn-down-"+i,"ui-btn-up-"+i,!1,"up"),d&&clearTimeout(d),h&&clearTimeout(h)}},"focusin focus":function(b){a(e(b.target)).addClass(a.mobile.focusClass)},"focusout blur":function(b){a(e(b.target)).removeClass(a.mobile.focusClass)}}),g=null};a.mobile.document.bind("pagecreate create",function(b){a(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a",b.target).jqmEnhanceable().not("button, input, .ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()})}(a),function(a,b){a.widget("mobile.collapsible",a.mobile.widget,{options:{expandCueText:" click to expand contents",collapseCueText:" click to collapse contents",collapsed:!0,heading:"h1,h2,h3,h4,h5,h6,legend",collapsedIcon:"plus",expandedIcon:"minus",iconpos:"left",theme:null,contentTheme:null,inset:!0,corners:!0,mini:!1,initSelector:":jqmData(role='collapsible')"},_create:function(){var c=this.element,d=this.options,e=c.addClass("ui-collapsible"),f=c.children(d.heading).first(),g=e.wrapInner("<div class='ui-collapsible-content'></div>").children(".ui-collapsible-content"),h=c.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set"),i="";f.is("legend")&&(f=a("<div role='heading'>"+f.html()+"</div>").insertBefore(f),f.next().remove()),h.length?(d.theme||(d.theme=h.jqmData("theme")||a.mobile.getInheritedTheme(h,"c")),d.contentTheme||(d.contentTheme=h.jqmData("content-theme")),d.collapsedIcon=c.jqmData("collapsed-icon")||h.jqmData("collapsed-icon")||d.collapsedIcon,d.expandedIcon=c.jqmData("expanded-icon")||h.jqmData("expanded-icon")||d.expandedIcon,d.iconpos=c.jqmData("iconpos")||h.jqmData("iconpos")||d.iconpos,h.jqmData("inset")!==b?d.inset=h.jqmData("inset"):d.inset=!0,d.corners=!1,d.mini||(d.mini=h.jqmData("mini"))):d.theme||(d.theme=a.mobile.getInheritedTheme(c,"c")),!d.inset||(i+=" ui-collapsible-inset",!d.corners||(i+=" ui-corner-all")),d.contentTheme&&(i+=" ui-collapsible-themed-content",g.addClass("ui-body-"+d.contentTheme)),i!==""&&e.addClass(i),f.insertBefore(g).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().buttonMarkup({shadow:!1,corners:!1,iconpos:d.iconpos,icon:d.collapsedIcon,mini:d.mini,theme:d.theme}),e.bind("expand collapse",function(b){if(!b.isDefaultPrevented()){var c=a(this),e=b.type==="collapse";b.preventDefault(),f.toggleClass("ui-collapsible-heading-collapsed",e).find(".ui-collapsible-heading-status").text(e?d.expandCueText:d.collapseCueText).end().find(".ui-icon").toggleClass("ui-icon-"+d.expandedIcon,!e).toggleClass("ui-icon-"+d.collapsedIcon,e||d.expandedIcon===d.collapsedIcon).end().find("a").first().removeClass(a.mobile.activeBtnClass),c.toggleClass("ui-collapsible-collapsed",e),g.toggleClass("ui-collapsible-content-collapsed",e).attr("aria-hidden",e),g.trigger("updatelayout")}}).trigger(d.collapsed?"collapse":"expand"),f.bind("tap",function(b){f.find("a").first().addClass(a.mobile.activeBtnClass)}).bind("click",function(a){var b=f.is(".ui-collapsible-heading-collapsed")?"expand":"collapse";e.trigger(b),a.preventDefault(),a.stopPropagation()})}}),a.mobile.document.bind("pagecreate create",function(b){a.mobile.collapsible.prototype.enhanceWithin(b.target)})}(a),function(a,b){a.widget("mobile.collapsibleset",a.mobile.widget,{options:{initSelector:":jqmData(role='collapsible-set')"},_create:function(){var c=this.element.addClass("ui-collapsible-set"),d=this.options;d.theme||(d.theme=a.mobile.getInheritedTheme(c,"c")),d.contentTheme||(d.contentTheme=c.jqmData("content-theme")),d.corners||(d.corners=c.jqmData("corners")),c.jqmData("inset")!==b&&(d.inset=c.jqmData("inset")),d.inset=d.inset!==b?d.inset:!0,d.corners=d.corners!==b?d.corners:!0,!!d.corners&&!!d.inset&&c.addClass("ui-corner-all"),c.jqmData("collapsiblebound")||c.jqmData("collapsiblebound",!0).bind("expand",function(b){var c=a(b.target).closest(".ui-collapsible");c.parent().is(":jqmData(role='collapsible-set')")&&c.siblings(".ui-collapsible").trigger("collapse")})},_init:function(){var a=this.element,b=a.children(":jqmData(role='collapsible')"),c=b.filter(":jqmData(collapsed='false')");this._refresh("true"),c.trigger("expand")},_refresh:function(b){var c=this.element.children(":jqmData(role='collapsible')");a.mobile.collapsible.prototype.enhance(c.not(".ui-collapsible")),this._addFirstLastClasses(c,this._getVisibles(c,b),b)},refresh:function(){this._refresh(!1)}}),a.widget("mobile.collapsibleset",a.mobile.collapsibleset,a.mobile.behaviors.addFirstLastClasses),a.mobile.document.bind("pagecreate create",function(b){a.mobile.collapsibleset.prototype.enhanceWithin(b.target)})}(a),function(a,b){a.widget("mobile.navbar",a.mobile.widget,{options:{iconpos:"top",grid:null,initSelector:":jqmData(role='navbar')"},_create:function(){var d=this.element,e=d.find("a"),f=e.filter(":jqmData(icon)").length?this.options.iconpos:b;d.addClass("ui-navbar ui-mini").attr("role","navigation").find("ul").jqmEnhanceable().grid({grid:this.options.grid}),e.buttonMarkup({corners:!1,shadow:!1,inline:!0,iconpos:f}),d.delegate("a","vclick",function(b){if(!a(b.target).hasClass("ui-disabled")){e.removeClass(a.mobile.activeBtnClass),a(this).addClass(a.mobile.activeBtnClass);var d=a(this);a(c).one("pagechange",function(b){d.removeClass(a.mobile.activeBtnClass)})}}),d.closest(".ui-page").bind("pagebeforeshow",function(){e.filter(".ui-state-persist").addClass(a.mobile.activeBtnClass)})}}),a.mobile.document.bind("pagecreate create",function(b){a.mobile.navbar.prototype.enhanceWithin(b.target)})}(a),function(a,b){var d={};a.widget("mobile.listview",a.mobile.widget,{options:{theme:null,countTheme:"c",headerTheme:"b",dividerTheme:"b",icon:"arrow-r",splitIcon:"arrow-r",splitTheme:"b",corners:!0,shadow:!0,inset:!1,initSelector:":jqmData(role='listview')"},_create:function(){var a=this,b="";b+=a.options.inset?" ui-listview-inset":"",!a.options.inset||(b+=a.options.corners?" ui-corner-all":"",b+=a.options.shadow?" ui-shadow":""),a.element.addClass(function(a,c){return c+" ui-listview"+b}),a.refresh(!0)},_findFirstElementByTagName:function(a,b,c,d){var e={};e[c]=e[d]=!0;while(a){if(e[a.nodeName])return a;a=a[b]}return null},_getChildrenByTagName:function(b,c,d){var e=[],f={};f[c]=f[d]=!0,b=b.firstChild;while(b)f[b.nodeName]&&e.push(b),b=b.nextSibling;return a(e)},_addThumbClasses:function(b){var c,d,e=b.length;for(c=0;c<e;c++)d=a(this._findFirstElementByTagName(b[c].firstChild,"nextSibling","img","IMG")),d.length&&(d.addClass("ui-li-thumb"),a(this._findFirstElementByTagName(d[0].parentNode,"parentNode","li","LI")).addClass(d.is(".ui-li-icon")?"ui-li-has-icon":"ui-li-has-thumb"))},refresh:function(b){this.parentPage=this.element.closest(".ui-page"),this._createSubPages();var d=this.options,e=this.element,f=this,g=e.jqmData("dividertheme")||d.dividerTheme,h=e.jqmData("splittheme"),i=e.jqmData("spliticon"),j=e.jqmData("icon"),k=this._getChildrenByTagName(e[0],"li","LI"),l=!!a.nodeName(e[0],"ol"),m=!a.support.cssPseudoElement,n=e.attr("start"),o={},p,q,r,s,t,u,v,w,x,y,z,A,B,C;l&&m&&e.find(".ui-li-dec").remove(),l&&(n||n===0?m?v=parseInt(n,10):(w=parseInt(n,10)-1,e.css("counter-reset","listnumbering "+w)):m&&(v=1)),d.theme||(d.theme=a.mobile.getInheritedTheme(this.element,"c"));for(var D=0,E=k.length;D<E;D++){p=k.eq(D),q="ui-li";if(b||!p.hasClass("ui-li")){r=p.jqmData("theme")||d.theme,s=this._getChildrenByTagName(p[0],"a","A");var F=p.jqmData("role")==="list-divider";s.length&&!F?(z=p.jqmData("icon"),p.buttonMarkup({wrapperEls:"div",shadow:!1,corners:!1,iconpos:"right",icon:s.length>1||z===!1?!1:z||j||d.icon,theme:r}),z!==!1&&s.length===1&&p.addClass("ui-li-has-arrow"),s.first().removeClass("ui-link").addClass("ui-link-inherit"),s.length>1&&(q+=" ui-li-has-alt",t=s.last(),u=h||t.jqmData("theme")||d.splitTheme,C=t.jqmData("icon"),t.appendTo(p).attr("title",a.trim(t.getEncodedText())).addClass("ui-li-link-alt").empty().buttonMarkup({shadow:!1,corners:!1,theme:r,icon:!1,iconpos:"notext"}).find(".ui-btn-inner").append(a(c.createElement("span")).buttonMarkup({shadow:!0,corners:!0,theme:u,iconpos:"notext",icon:C||z||i||d.splitIcon})))):F?(q+=" ui-li-divider ui-bar-"+(p.jqmData("theme")||g),p.attr("role","heading"),l&&(n||n===0?m?v=parseInt(n,10):(x=parseInt(n,10)-1,p.css("counter-reset","listnumbering "+x)):m&&(v=1))):q+=" ui-li-static ui-btn-up-"+r}l&&m&&q.indexOf("ui-li-divider")<0&&(y=q.indexOf("ui-li-static")>0?p:p.find(".ui-link-inherit"),y.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>"+v++ +". </span>")),o[q]||(o[q]=[]),o[q].push(p[0])}for(q in o)a(o[q]).addClass(q).children(".ui-btn-inner").addClass(q);e.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(".ui-li-aside").each(function(){var b=a(this);b.prependTo(b.parent())}).end().find(".ui-li-count").each(function(){a(this).closest("li").addClass("ui-li-has-count")}).addClass("ui-btn-up-"+(e.jqmData("counttheme")||this.options.countTheme)+" ui-btn-corner-all"),this._addThumbClasses(k),this._addThumbClasses(e.find(".ui-link-inherit")),this._addFirstLastClasses(k,this._getVisibles(k,b),b),this._trigger("afterrefresh")},_idStringEscape:function(a){return a.replace(/[^a-zA-Z0-9]/g,"-")},_createSubPages:function(){var b=this.element,c=b.closest(".ui-page"),e=c.jqmData("url"),f=e||c[0][a.expando],g=b.attr("id"),h=this.options,i="data-"+a.mobile.ns,j=this,k=c.find(":jqmData(role='footer')").jqmData("id"),l;typeof d[f]=="undefined"&&(d[f]=-1),g=g||++d[f],a(b.find("li>ul, li>ol").toArray().reverse()).each(function(c){var d=this,f=a(this),j=f.attr("id")||g+"-"+c,m=f.parent(),n=a(f.prevAll().toArray().reverse()),p=n.length?n:a("<span>"+a.trim(m.contents()[0].nodeValue)+"</span>"),q=p.first().getEncodedText(),r=(e||"")+"&"+a.mobile.subPageUrlKey+"="+j,s=f.jqmData("theme")||h.theme,t=f.jqmData("counttheme")||b.jqmData("counttheme")||h.countTheme,u,v;l=!0,u=f.detach().wrap("<div "+i+"role='page' "+i+"url='"+r+"' "+i+"theme='"+s+"' "+i+"count-theme='"+t+"'><div "+i+"role='content'></div></div>").parent().before("<div "+i+"role='header' "+i+"theme='"+h.headerTheme+"'><div class='ui-title'>"+q+"</div></div>").after(k?a("<div "+i+"role='footer' "+i+"id='"+k+"'>"):"").parent().appendTo(a.mobile.pageContainer),u.page(),v=m.find("a:first"),v.length||(v=a("<a/>").html(p||q).prependTo(m.empty())),v.attr("href","#"+r)}).listview();if(l&&c.is(":jqmData(external-page='true')")&&c.data("mobile-page").options.domCache===!1){var m=function(b,d){var f=d.nextPage,g,h=new a.Event("pageremove");d.nextPage&&(g=f.jqmData("url"),g.indexOf(e+"&"+a.mobile.subPageUrlKey)!==0&&(j.childPages().remove(),c.trigger(h),h.isDefaultPrevented()||c.removeWithDependents()))};c.unbind("pagehide.remove").bind("pagehide.remove",m)}},childPages:function(){var b=this.parentPage.jqmData("url");return a(":jqmData(url^='"+b+"&"+a.mobile.subPageUrlKey+"')")}}),a.widget("mobile.listview",a.mobile.listview,a.mobile.behaviors.addFirstLastClasses),a.mobile.document.bind("pagecreate create",function(b){a.mobile.listview.prototype.enhanceWithin(b.target)})}(a),function(a,b){a.mobile.listview.prototype.options.autodividers=!1,a.mobile.listview.prototype.options.autodividersSelector=function(b){var c=a.trim(b.text())||null;return c?(c=c.slice(0,1).toUpperCase(),c):null},a.mobile.document.delegate("ul,ol","listviewcreate",function(){var b=a(this),d=b.data("mobile-listview");if(!d||!d.options.autodividers)return;var e=function(){b.find("li:jqmData(role='list-divider')").remove();var e=b.find("li"),f=null,g,h;for(var i=0;i<e.length;i++){g=e[i],h=d.options.autodividersSelector(a(g));if(h&&f!==h){var j=c.createElement("li");j.appendChild(c.createTextNode(h)),j.setAttribute("data-"+a.mobile.ns+"role","list-divider"),g.parentNode.insertBefore(j,g)}f=h}},f=function(){b.unbind("listviewafterrefresh",f),e(),d.refresh(),b.bind("listviewafterrefresh",f)};f()})}(a),function(a,b){a.widget("mobile.checkboxradio",a.mobile.widget,{options:{theme:null,mini:!1,initSelector:"input[type='checkbox'],input[type='radio']"},_create:function(){var b=this,d=this.element,e=this.options,f=function(a,b){return a.jqmData(b)||a.closest("form, fieldset").jqmData(b)},g=a(d).closest("label"),h=g.length?g:a(d).closest("form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')").find("label").filter("[for='"+d[0].id+"']").first(),i=d[0].type,j=f(d,"mini")||e.mini,k=i+"-on",l=i+"-off",m=f(d,"iconpos"),n="ui-"+k,o="ui-"+l;if(i!=="checkbox"&&i!=="radio")return;a.extend(this,{label:h,inputtype:i,checkedClass:n,uncheckedClass:o,checkedicon:k,uncheckedicon:l}),e.theme||(e.theme=a.mobile.getInheritedTheme(this.element,"c")),h.buttonMarkup({theme:e.theme,icon:l,shadow:!1,mini:j,iconpos:m});var p=c.createElement("div");p.className="ui-"+i,d.add(h).wrapAll(p),h.bind({vmouseover:function(b){a(this).parent().is(".ui-disabled")&&b.stopPropagation()},vclick:function(a){if(d.is(":disabled")){a.preventDefault();return}return b._cacheVals(),d.prop("checked",i==="radio"&&!0||!d.prop("checked")),d.triggerHandler("click"),b._getInputSet().not(d).prop("checked",!1),b._updateAll(),!1}}),d.bind({vmousedown:function(){b._cacheVals()},vclick:function(){var c=a(this);c.is(":checked")?(c.prop("checked",!0),b._getInputSet().not(c).prop("checked",!1)):c.prop("checked",!1),b._updateAll()},focus:function(){h.addClass(a.mobile.focusClass)},blur:function(){h.removeClass(a.mobile.focusClass)}}),this._handleFormReset&&this._handleFormReset(),this.refresh()},_cacheVals:function(){this._getInputSet().each(function(){a(this).jqmData("cacheVal",this.checked)})},_getInputSet:function(){return this.inputtype==="checkbox"?this.element:this.element.closest("form, :jqmData(role='page'), :jqmData(role='dialog')").find("input[name='"+this.element[0].name+"'][type='"+this.inputtype+"']")},_updateAll:function(){var b=this;this._getInputSet().each(function(){var c=a(this);(this.checked||b.inputtype==="checkbox")&&c.trigger("change")}).checkboxradio("refresh")},_reset:function(){this.refresh()},refresh:function(){var b=this.element[0],c=" "+a.mobile.activeBtnClass,d=this.checkedClass+(this.element.parents(".ui-controlgroup-horizontal").length?c:""),e=this.label;b.checked?e.removeClass(this.uncheckedClass+c).addClass(d).buttonMarkup({icon:this.checkedicon}):e.removeClass(d).addClass(this.uncheckedClass).buttonMarkup({icon:this.uncheckedicon}),b.disabled?this.disable():this.enable()},disable:function(){this.element.prop("disabled",!0).parent().addClass("ui-disabled")},enable:function(){this.element.prop("disabled",!1).parent().removeClass("ui-disabled")}}),a.widget("mobile.checkboxradio",a.mobile.checkboxradio,a.mobile.behaviors.formReset),a.mobile.document.bind("pagecreate create",function(b){a.mobile.checkboxradio.prototype.enhanceWithin(b.target,!0)})}(a),function(a,b){a.widget("mobile.button",a.mobile.widget,{options:{theme:null,icon:null,iconpos:null,corners:!0,shadow:!0,iconshadow:!0,inline:null,mini:null,initSelector:"button, [type='button'], [type='submit'], [type='reset']"},_create:function(){var b=this.element,c,d=function(a){var b,c={};for(b in a)a[b]!==null&&b!=="initSelector"&&(c[b]=a[b]);return c}(this.options),e="",f;if(b[0].tagName==="A"){b.hasClass("ui-btn")||b.buttonMarkup();return}this.options.theme||(this.options.theme=a.mobile.getInheritedTheme(this.element,"c")),!~b[0].className.indexOf("ui-btn-left")||(e="ui-btn-left"),!~b[0].className.indexOf("ui-btn-right")||(e="ui-btn-right");if(b.attr("type")==="submit"||b.attr("type")==="reset")e?e+=" ui-submit":e="ui-submit";a("label[for='"+b.attr("id")+"']").addClass("ui-submit"),this.button=a("<div></div>")[b.html()?"html":"text"](b.html()||b.val()).insertBefore(b).buttonMarkup(d).addClass(e).append(b.addClass("ui-btn-hidden")),c=this.button,b.bind({focus:function(){c.addClass(a.mobile.focusClass)},blur:function(){c.removeClass(a.mobile.focusClass)}}),this.refresh()},_setOption:function(b,c){var d={};d[b]=c,b!=="initSelector"&&(this.button.buttonMarkup(d),this.element.attr("data-"+(a.mobile.ns||"")+b.replace(/([A-Z])/,"-$1").toLowerCase(),c)),this._super("_setOption",b,c)},enable:function(){return this.element.attr("disabled",!1),this.button.removeClass("ui-disabled").attr("aria-disabled",!1),this._setOption("disabled",!1)},disable:function(){return this.element.attr("disabled",!0),this.button.addClass("ui-disabled").attr("aria-disabled",!0),this._setOption("disabled",!0)},refresh:function(){var b=this.element;b.prop("disabled")?this.disable():this.enable(),a(this.button.data("buttonElements").text)[b.html()?"html":"text"](b.html()||b.val())}}),a.mobile.document.bind("pagecreate create",function(b){a.mobile.button.prototype.enhanceWithin(b.target,!0)})}(a),function(a,b){a.widget("mobile.controlgroup",a.mobile.widget,{options:{shadow:!1,corners:!0,excludeInvisible:!0,type:"vertical",mini:!1,initSelector:":jqmData(role='controlgroup')"},_create:function(){var c=this.element,d={inner:a("<div class='ui-controlgroup-controls'></div>"),legend:a("<div role='heading' class='ui-controlgroup-label'></div>")},e=c.children("legend"),f=this;c.wrapInner(d.inner),e.length&&d.legend.append(e).insertBefore(c.children(0)),c.addClass("ui-corner-all ui-controlgroup"),a.extend(this,{_initialRefresh:!0}),a.each(this.options,function(a,c){f.options[a]=b,f._setOption(a,c,!0)})},_init:function(){this.refresh()},_setOption:function(c,d){var e="_set"+c.charAt(0).toUpperCase()+c.slice(1);this[e]!==b&&this[e](d),this._super(c,d),this.element.attr("data-"+(a.mobile.ns||"")+c.replace(/([A-Z])/,"-$1").toLowerCase(),d)},_setType:function(a){this.element.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-"+a),this.refresh()},_setCorners:function(a){this.element.toggleClass("ui-corner-all",a)},_setShadow:function(a){this.element.toggleClass("ui-shadow",a)},_setMini:function(a){this.element.toggleClass("ui-mini",a)},container:function(){return this.element.children(".ui-controlgroup-controls")},refresh:function(){var b=this.element.find(".ui-btn").not(".ui-slider-handle"),c=this._initialRefresh;a.mobile.checkboxradio&&this.element.find(":mobile-checkboxradio").checkboxradio("refresh"),this._addFirstLastClasses(b,this.options.excludeInvisible?this._getVisibles(b,c):b,c),this._initialRefresh=!1}}),a.widget("mobile.controlgroup",a.mobile.controlgroup,a.mobile.behaviors.addFirstLastClasses),a(function(){a.mobile.document.bind("pagecreate create",function(b){a.mobile.controlgroup.prototype.enhanceWithin(b.target,!0)})})}(a),function(a,b){a(c).bind("pagecreate create",function(b){a(b.target).find("a").jqmEnhanceable().not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")})}(a),function(a,d){function e(a,b,c,d){var e=d;return a<b?e=c+(a-b)/2:e=Math.min(Math.max(c,d-b/2),c+a-b),e}function f(){var c=a.mobile.window;return{x:c.scrollLeft(),y:c.scrollTop(),cx:b.innerWidth||c.width(),cy:b.innerHeight||c.height()}}a.widget("mobile.popup",a.mobile.widget,{options:{theme:null,overlayTheme:null,shadow:!0,corners:!0,transition:"none",positionTo:"origin",tolerance:null,initSelector:":jqmData(role='popup')",closeLinkSelector:"a:jqmData(rel='back')",closeLinkEvents:"click.popup",navigateEvents:"navigate.popup",closeEvents:"navigate.popup pagebeforechange.popup",dismissible:!0,history:!a.mobile.browser.oldIE},_eatEventAndClose:function(a){return a.preventDefault(),a.stopImmediatePropagation(),this.options.dismissible&&this.close(),!1},_resizeScreen:function(){var a=this._ui.container.outerHeight(!0);this._ui.screen.removeAttr("style"),a>this._ui.screen.height()&&this._ui.screen.height(a)},_handleWindowKeyUp:function(b){if(this._isOpen&&b.keyCode===a.mobile.keyCode.ESCAPE)return this._eatEventAndClose(b)},_expectResizeEvent:function(){var b=f();if(this._resizeData){if(b.x===this._resizeData.winCoords.x&&b.y===this._resizeData.winCoords.y&&b.cx===this._resizeData.winCoords.cx&&b.cy===this._resizeData.winCoords.cy)return!1;clearTimeout(this._resizeData.timeoutId)}return this._resizeData={timeoutId:setTimeout(a.proxy(this,"_resizeTimeout"),200),winCoords:b},!0},_resizeTimeout:function(){this._isOpen?this._expectResizeEvent()||(this._ui.container.hasClass("ui-popup-hidden")&&(this._ui.container.removeClass("ui-popup-hidden"),this.reposition({positionTo:"window"}),this._ignoreResizeEvents()),this._resizeScreen(),this._resizeData=null,this._orientationchangeInProgress=!1):(this._resizeData=null,this._orientationchangeInProgress=!1)},_ignoreResizeEvents:function(){var a=this;this._ignoreResizeTo&&clearTimeout(this._ignoreResizeTo),this._ignoreResizeTo=setTimeout(function(){a._ignoreResizeTo=0},1e3)},_handleWindowResize:function(a){this._isOpen&&this._ignoreResizeTo===0&&(this._expectResizeEvent()||this._orientationchangeInProgress)&&!this._ui.container.hasClass("ui-popup-hidden")&&this._ui.container.addClass("ui-popup-hidden").removeAttr("style")},_handleWindowOrientationchange:function(a){!this._orientationchangeInProgress&&this._isOpen&&this._ignoreResizeTo===0&&(this._expectResizeEvent(),this._orientationchangeInProgress=!0)},_handleDocumentFocusIn:function(b){var d=b.target,e,f=this._ui;if(!this._isOpen)return;if(d!==f.container[0]){e=a(b.target);if(0===e.parents().filter(f.container[0]).length)return a(c.activeElement).one("focus",function(a){e.blur()}),f.focusElement.focus(),b.preventDefault(),b.stopImmediatePropagation(),!1;f.focusElement[0]===f.container[0]&&(f.focusElement=e)}else f.focusElement&&f.focusElement[0]!==f.container[0]&&(f.container.blur(),f.focusElement.focus());this._ignoreResizeEvents()},_create:function(){var b={screen:a("<div class='ui-screen-hidden ui-popup-screen'></div>"),placeholder:a("<div style='display: none;'><!-- placeholder --></div>"),container:a("<div class='ui-popup-container ui-popup-hidden'></div>")},c=this.element.closest(".ui-page"),e=this.element.attr("id"),f=this;this.options.history=this.options.history&&a.mobile.ajaxEnabled&&a.mobile.hashListeningEnabled,c.length===0&&(c=a("body")),this.options.container=this.options.container||a.mobile.pageContainer,c.append(b.screen),b.container.insertAfter(b.screen),b.placeholder.insertAfter(this.element),e&&(b.screen.attr("id",e+"-screen"),b.container.attr("id",e+"-popup"),b.placeholder.html("<!-- placeholder for "+e+" -->")),b.container.append(this.element),b.focusElement=b.container,this.element.addClass("ui-popup"),a.extend(this,{_scrollTop:0,_page:c,_ui:b,_fallbackTransition:"",_currentTransition:!1,_prereqs:null,_isOpen:!1,_tolerance:null,_resizeData:null,_ignoreResizeTo:0,_orientationchangeInProgress:!1}),a.each(this.options,function(a,b){f.options[a]=d,f._setOption(a,b,!0)}),b.screen.bind("vclick",a.proxy(this,"_eatEventAndClose")),this._on(a.mobile.window,{orientationchange:a.proxy(this,"_handleWindowOrientationchange"),resize:a.proxy(this,"_handleWindowResize"),keyup:a.proxy(this,"_handleWindowKeyUp")}),this._on(a.mobile.document,{focusin:a.proxy(this,"_handleDocumentFocusIn")})},_applyTheme:function(a,b,c){var d=(a.attr("class")||"").split(" "),e=!0,f=null,g,h=String(b);while(d.length>0){f=d.pop(),g=(new RegExp("^ui-"+c+"-([a-z])$")).exec(f);if(g&&g.length>1){f=g[1];break}f=null}b!==f&&(a.removeClass("ui-"+c+"-"+f),b!==null&&b!=="none"&&a.addClass("ui-"+c+"-"+h))},_setTheme:function(a){this._applyTheme(this.element,a,"body")},_setOverlayTheme:function(a){this._applyTheme(this._ui.screen,a,"overlay"),this._isOpen&&this._ui.screen.addClass("in")},_setShadow:function(a){this.element.toggleClass("ui-overlay-shadow",a)},_setCorners:function(a){this.element.toggleClass("ui-corner-all",a)},_applyTransition:function(b){this._ui.container.removeClass(this._fallbackTransition),b&&b!=="none"&&(this._fallbackTransition=a.mobile._maybeDegradeTransition(b),this._fallbackTransition==="none"&&(this._fallbackTransition=""),this._ui.container.addClass(this._fallbackTransition))},_setTransition:function(a){this._currentTransition||this._applyTransition(a)},_setTolerance:function(b){var c={t:30,r:15,b:30,l:15};if(b!==d){var e=String(b).split(",");a.each(e,function(a,b){e[a]=parseInt(b,10)});switch(e.length){case 1:isNaN(e[0])||(c.t=c.r=c.b=c.l=e[0]);break;case 2:isNaN(e[0])||(c.t=c.b=e[0]),isNaN(e[1])||(c.l=c.r=e[1]);break;case 4:isNaN(e[0])||(c.t=e[0]),isNaN(e[1])||(c.r=e[1]),isNaN(e[2])||(c.b=e[2]),isNaN(e[3])||(c.l=e[3]);break;default:}}this._tolerance=c},_setOption:function(b,c){var e,f="_set"+b.charAt(0).toUpperCase()+b.slice(1);this[f]!==d&&this[f](c),e=["initSelector","closeLinkSelector","closeLinkEvents","navigateEvents","closeEvents","history","container"],a.mobile.widget.prototype._setOption.apply(this,arguments),a.inArray(b,e)===-1&&this.element.attr("data-"+(a.mobile.ns||"")+b.replace(/([A-Z])/,"-$1").toLowerCase(),c)},_placementCoords:function(a){var b=f(),d={x:this._tolerance.l,y:b.y+this._tolerance.t,cx:b.cx-this._tolerance.l-this._tolerance.r,cy:b.cy-this._tolerance.t-this._tolerance.b},g,h;this._ui.container.css("max-width",d.cx),g={cx:this._ui.container.outerWidth(!0),cy:this._ui.container.outerHeight(!0)},h={x:e(d.cx,g.cx,d.x,a.x),y:e(d.cy,g.cy,d.y,a.y)},h.y=Math.max(0,h.y);var i=c.documentElement,j=c.body,k=Math.max(i.clientHeight,j.scrollHeight,j.offsetHeight,i.scrollHeight,i.offsetHeight);return h.y-=Math.min(h.y,Math.max(0,h.y+g.cy-k)),{left:h.x,top:h.y}},_createPrereqs:function(b,c,d){var e=this,f;f={screen:a.Deferred(),container:a.Deferred()},f.screen.then(function(){f===e._prereqs&&b()}),f.container.then(function(){f===e._prereqs&&c()}),a.when(f.screen,f.container).done(function(){f===e._prereqs&&(e._prereqs=null,d())}),e._prereqs=f},_animate:function(b){this._ui.screen.removeClass(b.classToRemove).addClass(b.screenClassToAdd),b.prereqs.screen.resolve();if(b.transition&&b.transition!=="none"){b.applyTransition&&this._applyTransition(b.transition);if(this._fallbackTransition){this._ui.container.animationComplete(a.proxy(b.prereqs.container,"resolve")).addClass(b.containerClassToAdd).removeClass(b.classToRemove);return}}this._ui.container.removeClass(b.classToRemove),b.prereqs.container.resolve()},_desiredCoords:function(b){var c=null,d,e=f(),g=b.x,h=b.y,i=b.positionTo;if(i&&i!=="origin")if(i==="window")g=e.cx/2+e.x,h=e.cy/2+e.y;else{try{c=a(i)}catch(j){c=null}c&&(c.filter(":visible"),c.length===0&&(c=null))}c&&(d=c.offset(),g=d.left+c.outerWidth()/2,h=d.top+c.outerHeight()/2);if(a.type(g)!=="number"||isNaN(g))g=e.cx/2+e.x;if(a.type(h)!=="number"||isNaN(h))h=e.cy/2+e.y;return{x:g,y:h}},_reposition:function(a){a={x:a.x,y:a.y,positionTo:a.positionTo},this._trigger("beforeposition",a),this._ui.container.offset(this._placementCoords(this._desiredCoords(a)))},reposition:function(a){this._isOpen&&this._reposition(a)},_openPrereqsComplete:function(){this._ui.container.addClass("ui-popup-active"),this._isOpen=!0,this._resizeScreen(),this._ui.container.attr("tabindex","0").focus(),this._ignoreResizeEvents(),this._trigger("afteropen")},_open:function(c){var d=a.extend({},this.options,c),e=function(){var a=b,c=navigator.userAgent,d=c.match(/AppleWebKit\/([0-9\.]+)/),e=!!d&&d[1],f=c.match(/Android (\d+(?:\.\d+))/),g=!!f&&f[1],h=c.indexOf("Chrome")>-1;return f!==null&&g==="4.0"&&e&&e>534.13&&!h?!0:!1}();this._createPrereqs(a.noop,a.noop,a.proxy(this,"_openPrereqsComplete")),this._currentTransition=d.transition,this._applyTransition(d.transition),this.options.theme||this._setTheme(this._page.jqmData("theme")||a.mobile.getInheritedTheme(this._page,"c")),this._ui.screen.removeClass("ui-screen-hidden"),this._ui.container.removeClass("ui-popup-hidden"),this._reposition(d),this.options.overlayTheme&&e&&this.element.closest(".ui-page").addClass("ui-popup-open"),this._animate({additionalCondition:!0,transition:d.transition,classToRemove:"",screenClassToAdd:"in",containerClassToAdd:"in",applyTransition:!1,prereqs:this._prereqs})},_closePrereqScreen:function(){this._ui.screen.removeClass("out").addClass("ui-screen-hidden")},_closePrereqContainer:function(){this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden").removeAttr("style")},_closePrereqsDone:function(){var b=this.options;this._ui.container.removeAttr("tabindex"),a.mobile.popup.active=d,this._trigger("afterclose")},_close:function(b){this._ui.container.removeClass("ui-popup-active"),this._page.removeClass("ui-popup-open"),this._isOpen=!1,this._createPrereqs(a.proxy(this,"_closePrereqScreen"),a.proxy(this,"_closePrereqContainer"),a.proxy(this,"_closePrereqsDone")),this._animate({additionalCondition:this._ui.screen.hasClass("in"),transition:b?"none":this._currentTransition,classToRemove:"in",screenClassToAdd:"out",containerClassToAdd:"reverse out",applyTransition:!0,prereqs:this._prereqs})},_unenhance:function(){this._setTheme("none"),this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all"),this._ui.screen.remove(),this._ui.container.remove(),this._ui.placeholder.remove()},_destroy:function(){a.mobile.popup.active===this?(this.element.one("popupafterclose",a.proxy(this,"_unenhance")),this.close()):this._unenhance()},_closePopup:function(c,d){var e,f,g=this.options,h=!1;b.scrollTo(0,this._scrollTop),c&&c.type==="pagebeforechange"&&d&&(typeof d.toPage=="string"?e=d.toPage:e=d.toPage.jqmData("url"),e=a.mobile.path.parseUrl(e),f=e.pathname+e.search+e.hash,this._myUrl!==a.mobile.path.makeUrlAbsolute(f)?h=!0:c.preventDefault()),g.container.unbind(g.closeEvents),this.element.undelegate(g.closeLinkSelector,g.closeLinkEvents),this._close(h)},_bindContainerClose:function(){this.options.container.one(this.options.closeEvents,a.proxy(this,"_closePopup"))},open:function(c){var d=this,e=this.options,f,g,h,i,j,k;if(a.mobile.popup.active)return;a.mobile.popup.active=this,this._scrollTop=a.mobile.window.scrollTop();if(!e.history){d._open(c),d._bindContainerClose(),d.element.delegate(e.closeLinkSelector,e.closeLinkEvents,function(a){d.close(),a.preventDefault()});return}k=a.mobile.urlHistory,g=a.mobile.dialogHashKey,h=a.mobile.activePage,i=h.is(".ui-dialog"),this._myUrl=f=k.getActive().url,j=f.indexOf(g)>-1&&!i&&k.activeIndex>0;if(j){d._open(c),d._bindContainerClose();return}f.indexOf(g)===-1&&!i?f=f+(f.indexOf("#")>-1?g:"#"+g):f=a.mobile.path.parseLocation().hash+g,k.activeIndex===0&&f===k.initialDst&&(f+=g),a(b).one("beforenavigate",function(a){a.preventDefault(),d._open(c),d._bindContainerClose()}),this.urlAltered=!0,a.mobile.navigate(f,{role:"dialog"})},close:function(){if(a.mobile.popup.active!==this)return;this._scrollTop=a.mobile.window.scrollTop(),this.options.history&&this.urlAltered?(a.mobile.back(),this.urlAltered=!1):this._closePopup()}}),a.mobile.popup.handleLink=function(b){var c=b.closest(":jqmData(role='page')"),d=c.length===0?a("body"):c,e=a(a.mobile.path.parseUrl(b.attr("href")).hash,d[0]),f;e.data("mobile-popup")&&(f=b.offset(),e.popup("open",{x:f.left+b.outerWidth()/2,y:f.top+b.outerHeight()/2,transition:b.jqmData("transition"),positionTo:b.jqmData("position-to")})),setTimeout(function(){var c=b.parent().parent();c.hasClass("ui-li")&&(b=c.parent()),b.removeClass(a.mobile.activeBtnClass)},300)},a.mobile.document.bind("pagebeforechange",function(b,c){c.options.role==="popup"&&(a.mobile.popup.handleLink(c.options.link),b.preventDefault())}),a.mobile.document.bind("pagecreate create",function(b){a.mobile.popup.prototype.enhanceWithin(b.target,!0)})}(a),function(a,d){a.widget("mobile.panel",a.mobile.widget,{options:{classes:{panel:"ui-panel",panelOpen:"ui-panel-open",panelClosed:"ui-panel-closed",panelFixed:"ui-panel-fixed",panelInner:"ui-panel-inner",modal:"ui-panel-dismiss",modalOpen:"ui-panel-dismiss-open",pagePanel:"ui-page-panel",pagePanelOpen:"ui-page-panel-open",contentWrap:"ui-panel-content-wrap",contentWrapOpen:"ui-panel-content-wrap-open",contentWrapClosed:"ui-panel-content-wrap-closed",contentFixedToolbar:"ui-panel-content-fixed-toolbar",contentFixedToolbarOpen:"ui-panel-content-fixed-toolbar-open",contentFixedToolbarClosed:"ui-panel-content-fixed-toolbar-closed",animate:"ui-panel-animate"},animate:!0,theme:"c",position:"left",dismissible:!0,display:"reveal",initSelector:":jqmData(role='panel')",swipeClose:!0,positionFixed:!1},_panelID:null,_closeLink:null,_page:null,_modal:null,_pannelInner:null,_wrapper:null,_fixedToolbar:null,_create:function(){var b=this,c=b.element,d=c.closest(":jqmData(role='page')"),e=function(){var b=a.data(d[0],"mobilePage").options.theme,c="ui-body-"+b;return c},f=function(){var a=c.find("."+b.options.classes.panelInner);return a.length===0&&(a=c.children().wrapAll('<div class="'+b.options.classes.panelInner+'" />').parent()),a},g=function(){var c=d.find("."+b.options.classes.contentWrap);return c.length===0&&(c=d.children(".ui-header:not(:jqmData(position='fixed')), .ui-content:not(:jqmData(role='popup')), .ui-footer:not(:jqmData(position='fixed'))").wrapAll('<div class="'+b.options.classes.contentWrap+" "+e()+'" />').parent(),a.support.cssTransform3d&&!!b.options.animate&&c.addClass(b.options.classes.animate)),c},h=function(){var c=d.find("."+b.options.classes.contentFixedToolbar);return c.length===0&&(c=d.find(".ui-header:jqmData(position='fixed'), .ui-footer:jqmData(position='fixed')").addClass(b.options.classes.contentFixedToolbar),a.support.cssTransform3d&&!!b.options.animate&&c.addClass(b.options.classes.animate)),c};a.extend(this,{_panelID:c.attr("id"),_closeLink:c.find(":jqmData(rel='close')"),_page:c.closest(":jqmData(role='page')"),_pageTheme:e(),_pannelInner:f(),_wrapper:g(),_fixedToolbar:h()}),b._addPanelClasses(),b._wrapper.addClass(this.options.classes.contentWrapClosed),b._fixedToolbar.addClass(this.options.classes.contentFixedToolbarClosed),b._page.addClass(b.options.classes.pagePanel),a.support.cssTransform3d&&!!b.options.animate&&this.element.addClass(b.options.classes.animate),b._bindUpdateLayout(),b._bindCloseEvents(),b._bindLinkListeners(),b._bindPageEvents(),!b.options.dismissible||b._createModal(),b._bindSwipeEvents()},_createModal:function(b){var c=this;c._modal=a("<div class='"+c.options.classes.modal+"' data-panelid='"+c._panelID+"'></div>").on("mousedown",function(){c.close()}).appendTo(this._page)},_getPosDisplayClasses:function(a){return a+"-position-"+this.options.position+" "+a+"-display-"+this.options.display},_getPanelClasses:function(){var a=this.options.classes.panel+" "+this._getPosDisplayClasses(this.options.classes.panel)+" "+this.options.classes.panelClosed;return this.options.theme&&(a+=" ui-body-"+this.options.theme),!this.options.positionFixed||(a+=" "+this.options.classes.panelFixed),a},_addPanelClasses:function(){this.element.addClass(this._getPanelClasses())},_bindCloseEvents:function(){var a=this;a._closeLink.on("click.panel",function(b){return b.preventDefault(),a.close(),!1}),a.element.on("click.panel","a:jqmData(ajax='false')",function(b){a.close()})},_positionPanel:function(){var b=this,c=b._pannelInner.outerHeight(),d=c>a.mobile.getScreenHeight();d||!b.options.positionFixed?(d&&(b._unfixPanel(),a.mobile.resetActivePageHeight(c)),b._scrollIntoView(c)):b._fixPanel()},_scrollIntoView:function(c){c<a(b).scrollTop()&&b.scrollTo(0,0)},_bindFixListener:function(){this._on(a(b),{throttledresize:"_positionPanel"})},_unbindFixListener:function(){this._off(a(b),"throttledresize")},_unfixPanel:function(){!!this.options.positionFixed&&a.support.fixedPosition&&this.element.removeClass(this.options.classes.panelFixed)},_fixPanel:function(){!!this.options.positionFixed&&a.support.fixedPosition&&this.element.addClass(this.options.classes.panelFixed)},_bindUpdateLayout:function(){var a=this;a.element.on("updatelayout",function(b){a._open&&a._positionPanel()})},_bindLinkListeners:function(){var b=this;b._page.on("click.panel","a",function(c){if(this.href.split("#")[1]===b._panelID&&b._panelID!==d){c.preventDefault();var e=a(this);return e.hasClass("ui-link")||(e.addClass(a.mobile.activeBtnClass),b.element.one("panelopen panelclose",function(){e.removeClass(a.mobile.activeBtnClass)})),b.toggle(),!1}})},_bindSwipeEvents:function(){var a=this,b=a._modal?a.element.add(a._modal):a.element;!a.options.swipeClose||(a.options.position==="left"?b.on("swipeleft.panel",function(b){a.close()}):b.on("swiperight.panel",function(b){a.close()}))},_bindPageEvents:function(){var a=this;a._page.on("panelbeforeopen",function(b){a._open&&b.target!==a.element[0]&&a.close()}).on("pagehide",function(b){a._open&&a.close(!0)}).on("keyup.panel",function(b){b.keyCode===27&&a._open&&a.close()})},_open:!1,_contentWrapOpenClasses:null,_fixedToolbarOpenClasses:null,_modalOpenClasses:null,open:function(b){if(!this._open){var c=this,d=c.options,e=function(){c._page.off("panelclose"),c._page.jqmData("panel","open"),!b&&a.support.cssTransform3d&&!!d.animate?c.element.add(c._wrapper).on(c._transitionEndEvents,f):setTimeout(f,0),c.options.theme&&c.options.display!=="overlay"&&c._page.removeClass(c._pageTheme).addClass("ui-body-"+c.options.theme),c.element.removeClass(d.classes.panelClosed).addClass(d.classes.panelOpen),c._contentWrapOpenClasses=c._getPosDisplayClasses(d.classes.contentWrap),c._wrapper.removeClass(d.classes.contentWrapClosed).addClass(c._contentWrapOpenClasses+" "+d.classes.contentWrapOpen),c._fixedToolbarOpenClasses=c._getPosDisplayClasses(d.classes.contentFixedToolbar),c._fixedToolbar.removeClass(d.classes.contentFixedToolbarClosed).addClass(c._fixedToolbarOpenClasses+" "+d.classes.contentFixedToolbarOpen),c._modalOpenClasses=c._getPosDisplayClasses(d.classes.modal)+" "+d.classes.modalOpen,c._modal&&c._modal.addClass(c._modalOpenClasses)},f=function(){c.element.add(c._wrapper).off(c._transitionEndEvents,f),c._page.addClass(d.classes.pagePanelOpen),c._positionPanel(),c._bindFixListener(),c._trigger("open")};this.element.closest(".ui-page-active").length<0&&(b=!0),c._trigger("beforeopen"),c._page.jqmData("panel")==="open"?c._page.on("panelclose",function(){e()}):e(),c._open=!0}},close:function(b){if(this._open){var c=this.options,d=this,e=function(){!b&&a.support.cssTransform3d&&!!c.animate?d.element.add(d._wrapper).on(d._transitionEndEvents,f):setTimeout(f,0),d._page.removeClass(c.classes.pagePanelOpen),d.element.removeClass(c.classes.panelOpen),d._wrapper.removeClass(c.classes.contentWrapOpen),d._fixedToolbar.removeClass(c.classes.contentFixedToolbarOpen),d._modal&&d._modal.removeClass(d._modalOpenClasses)},f=function(){d.options.theme&&d.options.display!=="overlay"&&d._page.removeClass("ui-body-"+d.options.theme).addClass(d._pageTheme),d.element.add(d._wrapper).off(d._transitionEndEvents,f),d.element.addClass(c.classes.panelClosed),d._wrapper.removeClass(d._contentWrapOpenClasses).addClass(c.classes.contentWrapClosed),d._fixedToolbar.removeClass(d._fixedToolbarOpenClasses).addClass(c.classes.contentFixedToolbarClosed),d._fixPanel(),d._unbindFixListener(),a.mobile.resetActivePageHeight(),d._page.jqmRemoveData("panel"),d._trigger("close")};this.element.closest(".ui-page-active").length<0&&(b=!0),d._trigger("beforeclose"),e(),d._open=!1}},toggle:function(a){this[this._open?"close":"open"]()},_transitionEndEvents:"webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd",_destroy:function(){var b=this.options.classes,c=this.options.theme,d=this.element.siblings("."+b.panel).length;d?this._open&&(this._wrapper.removeClass(b.contentWrapOpen),this._fixedToolbar.removeClass(b.contentFixedToolbarOpen),this._page.jqmRemoveData("panel"),this._page.removeClass(b.pagePanelOpen),c&&this._page.removeClass("ui-body-"+c).addClass(this._pageTheme)):(this._wrapper.children().unwrap(),this._page.find("a").unbind("panelopen panelclose"),this._page.removeClass(b.pagePanel),this._open&&(this._page.jqmRemoveData("panel"),this._page.removeClass(b.pagePanelOpen),c&&this._page.removeClass("ui-body-"+c).addClass(this._pageTheme),a.mobile.resetActivePageHeight())),this._pannelInner.children().unwrap(),this.element.removeClass([this._getPanelClasses(),b.panelAnimate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"),this._closeLink.off("click.panel"),this._modal&&this._modal.remove(),this.element.off(this._transitionEndEvents).removeClass([b.panelUnfixed,b.panelClosed,b.panelOpen].join(" "))}}),a(c).bind("pagecreate create",function(b){a.mobile.panel.prototype.enhanceWithin(b.target)})}(a),function(a,b){a.widget("mobile.table",a.mobile.widget,{options:{classes:{table:"ui-table"},initSelector:":jqmData(role='table')"},_create:function(){var b=this,c=this.element.find("thead tr");this.element.addClass(this.options.classes.table),b.headers=this.element.find("tr:eq(0)").children(),b.allHeaders=b.headers.add(c.children()),c.each(function(){var d=0;a(this).children().each(function(e){var f=parseInt(a(this).attr("colspan"),10),g=":nth-child("+(d+1)+")";a(this).jqmData("colstart",d+1);if(f)for(var h=0;h<f-1;h++)d++,g+=", :nth-child("+(d+1)+")";a(this).jqmData("cells",b.element.find("tr").not(c.eq(0)).not(this).children(g)),d++})})}}),a.mobile.document.bind("pagecreate create",function(b){a.mobile.table.prototype.enhanceWithin(b.target)})}(a),function(a,b){a.mobile.table.prototype.options.mode="columntoggle",a.mobile.table.prototype.options.columnBtnTheme=null,a.mobile.table.prototype.options.columnPopupTheme=null,a.mobile.table.prototype.options.columnBtnText="Columns...",a.mobile.table.prototype.options.classes=a.extend(a.mobile.table.prototype.options.classes,{popup:"ui-table-columntoggle-popup",columnBtn:"ui-table-columntoggle-btn",priorityPrefix:"ui-table-priority-",columnToggleTable:"ui-table-columntoggle"}),a.mobile.document.delegate(":jqmData(role='table')","tablecreate",function(){var b=a(this),c=b.data("mobile-table"),d=c.options,e=a.mobile.ns;if(d.mode!=="columntoggle")return;c.element.addClass(d.classes.columnToggleTable);var f=(b.attr("id")||d.classes.popup)+"-popup",g=a("<a href='#"+f+"' class='"+d.classes.columnBtn+"' data-"+e+"rel='popup' data-"+e+"mini='true'>"+d.columnBtnText+"</a>"),h=a("<div data-"+e+"role='popup' data-"+e+"role='fieldcontain' class='"+d.classes.popup+"' id='"+f+"'></div>"),i=a("<fieldset data-"+e+"role='controlgroup'></fieldset>");c.headers.not("td").each(function(){var b=a(this).jqmData("priority"),c=a(this).add(a(this).jqmData("cells"));b&&(c.addClass(d.classes.priorityPrefix+b),a("<label><input type='checkbox' checked />"+a(this).text()+"</label>").appendTo(i).children(0).jqmData("cells",c).checkboxradio({theme:d.columnPopupTheme}))}),i.appendTo(h),i.on("change","input",function(b){this.checked?a(this).jqmData("cells").removeClass("ui-table-cell-hidden").addClass("ui-table-cell-visible"):a(this).jqmData("cells").removeClass("ui-table-cell-visible").addClass("ui-table-cell-hidden")}),g.insertBefore(b).buttonMarkup({theme:d.columnBtnTheme}),h.insertBefore(b).popup(),c.refresh=function(){i.find("input").each(function(){this.checked=a(this).jqmData("cells").eq(0).css("display")==="table-cell",a(this).checkboxradio("refresh")})},a.mobile.window.on("throttledresize",c.refresh),c.refresh()})}(a),function(a,b){a.mobile.table.prototype.options.mode="reflow",a.mobile.table.prototype.options.classes=a.extend(a.mobile.table.prototype.options.classes,{reflowTable:"ui-table-reflow",cellLabels:"ui-table-cell-label"}),a.mobile.document.delegate(":jqmData(role='table')","tablecreate",function(){var b=a(this),c=b.data("mobile-table"),d=c.options;if(d.mode!=="reflow")return;c.element.addClass(d.classes.reflowTable);var e=a(c.allHeaders.get().reverse());e.each(function(b){var c=a(this).jqmData("cells"),e=a(this).jqmData("colstart"),f=c.not(this).filter("thead th").length&&" ui-table-cell-label-top",g=a(this).text();if(g!=="")if(f){var h=parseInt(a(this).attr("colspan"),10),i="";h&&(i="td:nth-child("+h+"n + "+e+")"),c.filter(i).prepend("<b class='"+d.classes.cellLabels+f+"'>"+g+"</b>")}else c.prepend("<b class='"+d.classes.cellLabels+"'>"+g+"</b>")})})}(a),function(a){var b=a("meta[name=viewport]"),c=b.attr("content"),d=c+",maximum-scale=1, user-scalable=no",e=c+",maximum-scale=10, user-scalable=yes",f=/(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(c);a.mobile.zoom=a.extend({},{enabled:!f,locked:!1,disable:function(c){!f&&!a.mobile.zoom.locked&&(b.attr("content",d),a.mobile.zoom.enabled=!1,a.mobile.zoom.locked=c||!1)},enable:function(c){!f&&(!a.mobile.zoom.locked||c===!0)&&(b.attr("content",e),a.mobile.zoom.enabled=!0,a.mobile.zoom.locked=!1)},restore:function(){f||(b.attr("content",c),a.mobile.zoom.enabled=!0)}})}(a),function(a,b){a.widget("mobile.textinput",a.mobile.widget,{options:{theme:null,mini:!1,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,initSelector:"input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type]), input[type='file']",clearBtn:!1,clearSearchButtonText:null,clearBtnText:"clear text",disabled:!1},_create:function(){function o(){setTimeout(function(){j.toggleClass("ui-input-clear-hidden",!c.val())},0)}var b=this,c=this.element,d=this.options,e=d.theme||a.mobile.getInheritedTheme(this.element,"c"),f=" ui-body-"+e,g=d.mini?" ui-mini":"",h=c.is("[type='search'], :jqmData(type='search')"),i,j,k=d.clearSearchButtonText||d.clearBtnText,l=c.is("textarea, :jqmData(type='range')"),m=!!d.clearBtn&&!l,n=c.is("input")&&!c.is(":jqmData(type='range')");a("label[for='"+c.attr("id")+"']").addClass("ui-input-text"),i=c.addClass("ui-input-text ui-body-"+e),typeof c[0].autocorrect!="undefined"&&!a.support.touchOverflow&&(c[0].setAttribute("autocorrect","off"),c[0].setAttribute("autocomplete","off")),h?i=c.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield"+f+g+"'></div>").parent():n&&(i=c.wrap("<div class='ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow"+f+g+"'></div>").parent()),m||h?(j=a("<a href='#' class='ui-input-clear' title='"+k+"'>"+k+"</a>").bind("click",function(a){c.val("").focus().trigger("change"),j.addClass("ui-input-clear-hidden"),a.preventDefault()}).appendTo(i).buttonMarkup({icon:"delete",iconpos:"notext",corners:!0,shadow:!0,mini:d.mini}),h||i.addClass("ui-input-has-clear"),o(),c.bind("paste cut keyup input focus change blur",o)):!n&&!h&&c.addClass("ui-corner-all ui-shadow-inset"+f+g),c.focus(function(){d.preventFocusZoom&&a.mobile.zoom.disable(!0),i.addClass(a.mobile.focusClass)}).blur(function(){i.removeClass(a.mobile.focusClass),d.preventFocusZoom&&a.mobile.zoom.enable(!0)});if(c.is("textarea")){var p=15,q=100,r;this._keyup=function(){var a=c[0].scrollHeight,b=c[0].clientHeight;b<a&&c.height(a+p)},c.on("keyup change input paste",function(){clearTimeout(r),r=setTimeout(b._keyup,q)}),this._on(a.mobile.document,{pagechange:"_keyup"}),a.trim(c.val())&&this._on(a.mobile.window,{load:"_keyup"})}c.attr("disabled")&&this.disable()},disable:function(){var a,b=this.element.is("[type='search'], :jqmData(type='search')"),c=this.element.is("input")&&!this.element.is(":jqmData(type='range')"),d=this.element.attr("disabled",!0)&&(c||b);return d?a=this.element.parent():a=this.element,a.addClass("ui-disabled"),this._setOption("disabled",!0)},enable:function(){var a,b=this.element.is("[type='search'], :jqmData(type='search')"),c=this.element.is("input")&&!this.element.is(":jqmData(type='range')"),d=this.element.attr("disabled",!1)&&(c||b);return d?a=this.element.parent():a=this.element,a.removeClass("ui-disabled"),this._setOption("disabled",!1)}}),a.mobile.document.bind("pagecreate create",function(b){a.mobile.textinput.prototype.enhanceWithin(b.target,!0)})}(a),function(a,b){a.mobile.listview.prototype.options.filter=!1,a.mobile.listview.prototype.options.filterPlaceholder="Filter items...",a.mobile.listview.prototype.options.filterTheme="c",a.mobile.listview.prototype.options.filterReveal=!1;var c=function(a,b,c){return a.toString().toLowerCase().indexOf(b)===-1};a.mobile.listview.prototype.options.filterCallback=c,a.mobile.document.delegate("ul, ol","listviewcreate",function(){var b=a(this),d=b.data("mobile-listview");if(!d.options.filter)return;d.options.filterReveal&&b.children().addClass("ui-screen-hidden");var e=a("<form>",{"class":"ui-listview-filter ui-bar-"+d.options.filterTheme,role:"search"}).submit(function(a){a.preventDefault(),g.blur()}),f=function(e){var f=a(this),g=this.value.toLowerCase(),h=null,i=b.children(),j=f.jqmData("lastval")+"",k=!1,l="",m,n=d.options.filterCallback!==c;if(j&&j===g)return;d._trigger("beforefilter","beforefilter",{input:this}),f.jqmData("lastval",g),n||g.length<j.length||g.indexOf(j)!==0?h=b.children():(h=b.children(":not(.ui-screen-hidden)"),!h.length&&d.options.filterReveal&&(h=b.children(".ui-screen-hidden")));if(g){for(var o=h.length-1;o>=0;o--)m=a(h[o]),l=m.jqmData("filtertext")||m.text(),m.is("li:jqmData(role=list-divider)")?(m.toggleClass("ui-filter-hidequeue",!k),k=!1):d.options.filterCallback(l,g,m)?m.toggleClass("ui-filter-hidequeue",!0):k=!0;h.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden",!1),h.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden",!0).toggleClass("ui-filter-hidequeue",!1)}else h.toggleClass("ui-screen-hidden",!!d.options.filterReveal);d._addFirstLastClasses(i,d._getVisibles(i,!1),!1)},g=a("<input>",{placeholder:d.options.filterPlaceholder}).attr("data-"+a.mobile.ns+"type","search").jqmData("lastval","").bind("keyup change input",f).appendTo(e).textinput();d.options.inset&&e.addClass("ui-listview-filter-inset"),e.bind("submit",function(){return!1}).insertBefore(b)})}(a),function(a,d){a.widget("mobile.slider",a.mobile.widget,{widgetEventPrefix:"slide",options:{theme:null,trackTheme:null,disabled:!1,initSelector:"input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",mini:!1,highlight:!1},_create:function(){var e=this,f=this.element,g=a.mobile.getInheritedTheme(f,"c"),h=this.options.theme||g,i=this.options.trackTheme||g,j=f[0].nodeName.toLowerCase(),k=this.isToggleSwitch=j==="select",l=f.parent().is(":jqmData(role='rangeslider')"),m=this.isToggleSwitch?"ui-slider-switch":"",n=f.attr("id"),o=a("[for='"+n+"']"),p=o.attr("id")||n+"-label",q=o.attr("id",p),r=this.isToggleSwitch?0:parseFloat(f.attr("min")),s=this.isToggleSwitch?f.find("option").length-1:parseFloat(f.attr("max")),t=b.parseFloat(f.attr("step")||1),u=this.options.mini||f.jqmData("mini")?" ui-mini":"",v=c.createElement("a"),w=a(v),x=c.createElement("div"),y=a(x),z=this.options.highlight&&!this.isToggleSwitch?function(){var b=c.createElement("div");return b.className="ui-slider-bg "+a.mobile.activeBtnClass+" ui-btn-corner-all",a(b).prependTo(y)}():!1,A;v.setAttribute("href","#"),x.setAttribute("role","application"),x.className=[this.isToggleSwitch?"ui-slider ":"ui-slider-track ",m," ui-btn-down-",i," ui-btn-corner-all",u].join(""),v.className="ui-slider-handle",x.appendChild(v),w.buttonMarkup({corners:!0,theme:h,shadow:!0}).attr({role:"slider","aria-valuemin":r,"aria-valuemax":s,"aria-valuenow":this._value(),"aria-valuetext":this._value(),title:this._value(),"aria-labelledby":p}),a.extend(this,{slider:y,handle:w,type:j,step:t,max:s,min:r,valuebg:z,isRangeslider:l,dragging:!1,beforeStart:null,userModified:!1,mouseMoved:!1});if(this.isToggleSwitch){var B=c.createElement("div");B.className="ui-slider-inneroffset";for(var C=0,D=x.childNodes.length;C<D;C++)B.appendChild(x.childNodes[C]);x.appendChild(B),w.addClass("ui-slider-handle-snapping"),A=f.find("option");for(var E=0,F=A.length;E<F;E++){var G=E?"a":"b",H=E?" "+a.mobile.activeBtnClass:" ui-btn-down-"+i,I=c.createElement("div"),J=c.createElement("span");J.className=["ui-slider-label ui-slider-label-",G,H," ui-btn-corner-all"].join(""),J.setAttribute("role","img"),J.appendChild(c.createTextNode(A[E].innerHTML)),a(J).prependTo(y)}e._labels=a(".ui-slider-label",y)}q.addClass("ui-slider"),f.addClass(this.isToggleSwitch?"ui-slider-switch":"ui-slider-input"),this._on(f,{change:"_controlChange",keyup:"_controlKeyup",blur:"_controlBlur",vmouseup:"_controlVMouseUp"}),y.bind("vmousedown",a.proxy(this._sliderVMouseDown,this)).bind("vclick",!1),this._on(c,{vmousemove:"_preventDocumentDrag"}),this._on(y.add(c),{vmouseup:"_sliderVMouseUp"}),y.insertAfter(f);if(!this.isToggleSwitch&&!l){var B=this.options.mini?"<div class='ui-slider ui-mini'>":"<div class='ui-slider'>";f.add(y).wrapAll(B)}this.isToggleSwitch&&this.handle.bind({focus:function(){y.addClass(a.mobile.focusClass)},blur:function(){y.removeClass(a.mobile.focusClass)}}),this._on(this.handle,{vmousedown:"_handleVMouseDown",keydown:"_handleKeydown",keyup:"_handleKeyup"}),this.handle.bind("vclick",!1),this._handleFormReset&&this._handleFormReset(),this.refresh(d,d,!0)},_controlChange:function(a){if(this._trigger("controlchange",a)===!1)return!1;this.mouseMoved||this.refresh(this._value(),!0)},_controlKeyup:function(a){this.refresh(this._value(),!0,!0)},_controlBlur:function(a){this.refresh(this._value(),!0)},_controlVMouseUp:function(a){this._checkedRefresh()},_handleVMouseDown:function(a){this.handle.focus()},_handleKeydown:function(b){var c=this._value();if(this.options.disabled)return;switch(b.keyCode){case a.mobile.keyCode.HOME:case a.mobile.keyCode.END:case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:b.preventDefault(),this._keySliding||(this._keySliding=!0,this.handle.addClass("ui-state-active"))}switch(b.keyCode){case a.mobile.keyCode.HOME:this.refresh(this.min);break;case a.mobile.keyCode.END:this.refresh(this.max);break;case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:this.refresh(c+this.step);break;case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:this.refresh(c-this.step)}},_handleKeyup:function(a){this._keySliding&&(this._keySliding=!1,this.handle.removeClass("ui-state-active"))},_sliderVMouseDown:function(a){return this.options.disabled?!1:this._trigger("beforestart",a)===!1?!1:(this.dragging=!0,this.userModified=!1,this.mouseMoved=!1,this.isToggleSwitch&&(this.beforeStart=this.element[0].selectedIndex),this.refresh(a),this._trigger("start"),!1)},_sliderVMouseUp:function(){if(this.dragging)return this.dragging=!1,this.isToggleSwitch&&(this.handle.addClass("ui-slider-handle-snapping"),this.mouseMoved?this.userModified?this.refresh(this.beforeStart===0?1:0):this.refresh(this.beforeStart):this.refresh(this.beforeStart===0?1:0)),this.mouseMoved=!1,this._trigger("stop"),!1},_preventDocumentDrag:function(a){if(this._trigger("drag",a)===!1)return!1;if(this.dragging&&!this.options.disabled)return this.mouseMoved=!0,this.isToggleSwitch&&this.handle.removeClass("ui-slider-handle-snapping"),this.refresh(a),this.userModified=this.beforeStart!==this.element[0].selectedIndex,!1},_checkedRefresh:function(){this.value!=this._value()&&this.refresh(this._value())},_value:function(){return this.isToggleSwitch?this.element[0].selectedIndex:parseFloat(this.element.val())},_reset:function(){this.refresh(d,!1,!0)},refresh:function(b,d,e){var f=this,g=a.mobile.getInheritedTheme(this.element,"c"),h=this.options.theme||g,i=this.options.trackTheme||g;f.slider[0].className=[this.isToggleSwitch?"ui-slider ui-slider-switch":"ui-slider-track"," ui-btn-down-"+i," ui-btn-corner-all",this.options.mini?" ui-mini":""].join(""),(this.options.disabled||this.element.attr("disabled"))&&this.disable(),this.value=this._value(),this.options.highlight&&!this.isToggleSwitch&&this.slider.find(".ui-slider-bg").length===0&&(this.valuebg=function(){var b=c.createElement("div");return b.className="ui-slider-bg "+a.mobile.activeBtnClass+" ui-btn-corner-all",a(b).prependTo(f.slider)}()),this.handle.buttonMarkup({corners:!0,theme:h,shadow:!0});var j,k,l=this.element,m=!this.isToggleSwitch,n=m?[]:l.find("option"),o=m?parseFloat(l.attr("min")):0,p=m?parseFloat(l.attr("max")):n.length-1,q=m&&parseFloat(l.attr("step"))>0?parseFloat(l.attr("step")):1;if(typeof b=="object"){var r,s,t=b,u=8;r=this.slider.offset().left,s=this.slider.width(),j=s/((p-o)/q);if(!this.dragging||t.pageX<r-u||t.pageX>r+s+u)return;j>1?k=(t.pageX-r)/s*100:k=Math.round((t.pageX-r)/s*100)}else b==null&&(b=m?parseFloat(l.val()||0):l[0].selectedIndex),k=(parseFloat(b)-o)/(p-o)*100;if(isNaN(k))return;var v=k/100*(p-o)+o,w=(v-o)%q,x=v-w;Math.abs(w)*2>=q&&(x+=w>0?q:-q);var y=100/((p-o)/q);v=parseFloat(x.toFixed(5)),typeof j=="undefined"&&(j=s/((p-o)/q)),j>1&&m&&(k=(v-o)*y*(1/q)),k<0&&(k=0),k>100&&(k=100),v<o&&(v=o),v>p&&(v=p),this.handle.css("left",k+"%"),this.handle[0].setAttribute("aria-valuenow",m?v:n.eq(v).attr("value")),this.handle[0].setAttribute("aria-valuetext",m?v:n.eq(v).getEncodedText()),this.handle[0].setAttribute("title",m?v:n.eq(v).getEncodedText()),this.valuebg&&this.valuebg.css("width",k+"%");if(this._labels){var z=this.handle.width()/this.slider.width()*100,A=k&&z+(100-z)*k/100,B=k===100?0:Math.min(z+100-A,100);this._labels.each(function(){var b=a(this).is(".ui-slider-label-a");a(this).width((b?A:B)+"%")})}if(!e){var C=!1;m?(C=l.val()!==v,l.val(v)):(C=l[0].selectedIndex!==v,l[0].selectedIndex=v);if(this._trigger("beforechange",b)===!1)return!1;!d&&C&&l.trigger("change")}},enable:function(){return this.element.attr("disabled",!1),this.slider.removeClass("ui-disabled").attr("aria-disabled",!1),this._setOption("disabled",!1)},disable:function(){return this.element.attr("disabled",!0),this.slider.addClass("ui-disabled").attr("aria-disabled",!0),this._setOption("disabled",!0)}}),a.widget("mobile.slider",a.mobile.slider,a.mobile.behaviors.formReset),a.mobile.document.bind("pagecreate create",function(b){a.mobile.slider.prototype.enhanceWithin(b.target,!0)})}(a),function(a,b){a.widget("mobile.rangeslider",a.mobile.widget,{options:{theme:null,trackTheme:null,disabled:!1,initSelector:":jqmData(role='rangeslider')",mini:!1,highlight:!0},_create:function(){var b,c=this.element,d=this.options.mini?"ui-rangeslider ui-mini":"ui-rangeslider",e=c.find("input").first(),f=c.find("input").last(),g=c.find("label").first(),h=a.data(e.get(0),"mobileSlider").slider,i=a.data(f.get(0),"mobileSlider").slider,j=a.data(e.get(0),"mobileSlider").handle,k=a('<div class="ui-rangeslider-sliders" />').appendTo(c);c.find("label").length>1&&(b=c.find("label").last().hide()),e.addClass("ui-rangeslider-first"),f.addClass("ui-rangeslider-last"),c.addClass(d),h.appendTo(k),i.appendTo(k),g.prependTo(c),j.prependTo(i),a.extend(this,{_inputFirst:e,_inputLast:f,_sliderFirst:h,_sliderLast:i,_targetVal:null,_sliderTarget:!1,_sliders:k,_proxy:!1}),this.refresh(),this._on(this.element.find("input.ui-slider-input"),{slidebeforestart:"_slidebeforestart",slidestop:"_slidestop",slidedrag:"_slidedrag",slidebeforechange:"_change",blur:"_change",keyup:"_change"}),this._on(j,{vmousedown:"_dragFirstHandle"})},_dragFirstHandle:function(b){return a.data(this._inputFirst.get(0),"mobileSlider").dragging=!0,a.data(this._inputFirst.get(0),"mobileSlider").refresh(b),!1},_slidedrag:function(b){var c=a(b.target).is(this._inputFirst),d=c?this._inputLast:this._inputFirst;this._sliderTarget=!1;if(this._proxy==="first"&&c||this._proxy==="last"&&!c)return a.data(d.get(0),"mobileSlider").dragging=!0,a.data(d.get(0),"mobileSlider").refresh(b),!1},_slidestop:function(b){var c=a(b.target).is(this._inputFirst);this._proxy=!1,this.element.find("input").trigger("vmouseup"),this._sliderFirst.css("z-index",c?1:"")},_slidebeforestart:function(b){this._sliderTarget=!1,a(b.originalEvent.target).hasClass("ui-slider-track")&&(this._sliderTarget=!0,this._targetVal=a(b.target).val())},_setOption:function(a){this._superApply(a),this.refresh()},refresh:function(){var a=this.element,b=this.options;a.find("input").slider({theme:b.theme,trackTheme:b.trackTheme,disabled:b.disabled,mini:b.mini,highlight:b.highlight}).slider("refresh"),this._updateHighlight()},_change:function(b){if(b.type=="keyup")return this._updateHighlight(),!1;var c=parseFloat(this._inputFirst.val(),10),d=parseFloat(this._inputLast.val(),10),e=a(b.target).hasClass("ui-rangeslider-first"),f=e?this._inputFirst:this._inputLast,g=e?this._inputLast:this._inputFirst;if(c>d&&!this._sliderTarget)f.val(e?d:c).slider("refresh"),this._trigger("normalize");else if(c>d){f.val(this._targetVal).slider("refresh");var h=this;setTimeout(function(){g.val(e?c:d).slider("refresh"),a.data(g.get(0),"mobileSlider").handle.focus(),h._sliderFirst.css("z-index",e?"":1),h._trigger("normalize")},0),this._proxy=e?"first":"last"}c===d?(a.data(f.get(0),"mobileSlider").handle.css("z-index",1),a.data(g.get(0),"mobileSlider").handle.css("z-index",0)):(a.data(g.get(0),"mobileSlider").handle.css("z-index",""),a.data(f.get(0),"mobileSlider").handle.css("z-index","")),this._updateHighlight();if(c>=d)return!1},_updateHighlight:function(){var b=parseInt(a.data(this._inputFirst.get(0),"mobileSlider").handle.get(0).style.left,10),c=parseInt(a.data(this._inputLast.get(0),"mobileSlider").handle.get(0).style.left,10),d=c-b;this.element.find(".ui-slider-bg").css({"margin-left":b+"%",width:d+"%"})},_destroy:function(){this.element.removeClass("ui-rangeslider ui-mini").find("label").show(),this._inputFirst.after(this._sliderFirst),this._inputLast.after(this._sliderLast),this._sliders.remove(),this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")}}),a.widget("mobile.rangeslider",a.mobile.rangeslider,a.mobile.behaviors.formReset),a(c).bind("pagecreate create",function(b){a.mobile.rangeslider.prototype.enhanceWithin(b.target,!0)})}(a),function(a,d){a.widget("mobile.selectmenu",a.mobile.widget,{options:{theme:null,disabled:!1,icon:"arrow-d",iconpos:"right",inline:!1,corners:!0,shadow:!0,iconshadow:!0,overlayTheme:"a",dividerTheme:"b",hidePlaceholderMenuItems:!0,closeText:"Close",nativeMenu:!0,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,initSelector:"select:not( :jqmData(role='slider') )",mini:!1},_button:function(){return a("<div/>")},_setDisabled:function(a){return this.element.attr("disabled",a),this.button.attr("aria-disabled",a),this._setOption("disabled",a)},_focusButton:function(){var a=this;setTimeout(function(){a.button.focus()},40)},_selectOptions:function(){return this.select.find("option")},_preExtension:function(){var b="";!~this.element[0].className.indexOf("ui-btn-left")||(b=" ui-btn-left"),!~this.element[0].className.indexOf("ui-btn-right")||(b=" ui-btn-right"),this.select=this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select"+b+"'>"),this.selectID=this.select.attr("id"),this.label=a("label[for='"+this.selectID+"']").addClass("ui-select"),this.isMultiple=this.select[0].multiple,this.options.theme||(this.options.theme=a.mobile.getInheritedTheme(this.select,"c"))},_destroy:function(){var a=this.element.parents(".ui-select");a.length>0&&(a.is(".ui-btn-left, .ui-btn-right")&&this.element.addClass(a.is(".ui-btn-left")?"ui-btn-left":"ui-btn-right"),this.element.insertAfter(a),a.remove())},_create:function(){this._preExtension(),this._trigger("beforeCreate"),this.button=this._button();var c=this,d=this.options,e=d.inline||this.select.jqmData("inline"),f=d.mini||this.select.jqmData("mini"),g=d.icon?d.iconpos||this.select.jqmData("iconpos"):!1,h=this.select[0].selectedIndex===-1?0:this.select[0].selectedIndex,i=this.button.insertBefore(this.select).buttonMarkup({theme:d.theme,icon:d.icon,iconpos:g,inline:e,corners:d.corners,shadow:d.shadow,iconshadow:d.iconshadow,mini:f});this.setButtonText(),d.nativeMenu&&b.opera&&b.opera.version&&i.addClass("ui-select-nativeonly"),this.isMultiple&&(this.buttonCount=a("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(i.addClass("ui-li-has-count"))),(d.disabled||this.element.attr("disabled"))&&this.disable(),this.select.change(function(){c.refresh()}),this._handleFormReset&&this._handleFormReset(),this.build()},build:function(){var b=this;this.select.appendTo(b.button).bind("vmousedown",function(){b.button.addClass(a.mobile.activeBtnClass)}).bind("focus",function(){b.button.addClass(a.mobile.focusClass)}).bind("blur",function(){b.button.removeClass(a.mobile.focusClass)}).bind("focus vmouseover",function(){b.button.trigger("vmouseover")}).bind("vmousemove",function(){b.button.removeClass(a.mobile.activeBtnClass)}).bind("change blur vmouseout",function(){b.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)}).bind("change blur",function(){b.button.removeClass("ui-btn-down-"+b.options.theme)}),b.button.bind("vmousedown",function(){b.options.preventFocusZoom&&a.mobile.zoom.disable(!0)}),b.label.bind("click focus",function(){b.options.preventFocusZoom&&a.mobile.zoom.disable(!0)}),b.select.bind("focus",function(){b.options.preventFocusZoom&&a.mobile.zoom.disable(!0)}),b.button.bind("mouseup",function(){b.options.preventFocusZoom&&setTimeout(function(){a.mobile.zoom.enable(!0)},0)}),b.select.bind("blur",function(){b.options.preventFocusZoom&&a.mobile.zoom.enable(!0)})},selected:function(){return this._selectOptions().filter(":selected")},selectedIndices:function(){var a=this;return this.selected().map(function(){return a._selectOptions().index(this)}).get()},setButtonText:function(){var b=this,d=this.selected(),e=this.placeholder,f=a(c.createElement("span"));this.button.find(".ui-btn-text").html(function(){return d.length?e=d.map(function(){return a(this).text()}).get().join(", "):e=b.placeholder,f.text(e).addClass(b.select.attr("class")).addClass(d.attr("class"))})},setButtonCount:function(){var a=this.selected();this.isMultiple&&this.buttonCount[a.length>1?"show":"hide"]().text(a.length)},_reset:function(){this.refresh()},refresh:function(){this.setButtonText(),this.setButtonCount()},open:a.noop,close:a.noop,disable:function(){this._setDisabled(!0),this.button.addClass("ui-disabled")},enable:function(){this._setDisabled(!1),this.button.removeClass("ui-disabled")}}),a.widget("mobile.selectmenu",a.mobile.selectmenu,a.mobile.behaviors.formReset),a.mobile.document.bind("pagecreate create",function(b){a.mobile.selectmenu.prototype.enhanceWithin(b.target,!0)})}(a),function(a,b){var d=function(d){var e=d.select,f=d._destroy,g=d.selectID,h=g?g:(a.mobile.ns||"")+"uuid-"+d.uuid,i=h+"-listbox",j=h+"-dialog",k=d.label,l=d.select.closest(".ui-page"),m=d._selectOptions(),n=d.isMultiple=d.select[0].multiple,o=g+"-button",p=g+"-menu",q=a("<div data-"+a.mobile.ns+"role='dialog' id='"+j+"' data-"+a.mobile.ns+"theme='"+d.options.theme+"' data-"+a.mobile.ns+"overlay-theme='"+d.options.overlayTheme+"'>"+"<div data-"+a.mobile.ns+"role='header'>"+"<div class='ui-title'>"+k.getEncodedText()+"</div>"+"</div>"+"<div data-"+a.mobile.ns+"role='content'></div>"+"</div>"),r=a("<div id='"+i+"' class='ui-selectmenu'>").insertAfter(d.select).popup({theme:d.options.overlayTheme}),s=a("<ul>",{"class":"ui-selectmenu-list",id:p,role:"listbox","aria-labelledby":o}).attr("data-"+a.mobile.ns+"theme",d.options.theme).attr("data-"+a.mobile.ns+"divider-theme",d.options.dividerTheme).appendTo(r),t=a("<div>",{"class":"ui-header ui-bar-"+d.options.theme}).prependTo(r),u=a("<h1>",{"class":"ui-title"}).appendTo(t),v,w,x;d.isMultiple&&(x=a("<a>",{text:d.options.closeText,href:"#","class":"ui-btn-left"}).attr("data-"+a.mobile.ns+"iconpos","notext").attr("data-"+a.mobile.ns+"icon","delete").appendTo(t).buttonMarkup()),a.extend(d,{select:d.select,selectID:g,buttonId:o,menuId:p,popupID:i,dialogID:j,thisPage:l,menuPage:q,label:k,selectOptions:m,isMultiple:n,theme:d.options.theme,listbox:r,list:s,header:t,headerTitle:u,headerClose:x,menuPageContent:v,menuPageClose:w,placeholder:"",build:function(){var c=this;c.refresh(),c._origTabIndex===b&&(c._origTabIndex=c.select[0].getAttribute("tabindex")===null?!1:c.select.attr("tabindex")),c.select.attr("tabindex","-1").focus(function(){a(this).blur(),c.button.focus()}),c.button.bind("vclick keydown",function(b){if(c.options.disabled||c.isOpen)return;if(b.type==="vclick"||b.keyCode&&(b.keyCode===a.mobile.keyCode.ENTER||b.keyCode===a.mobile.keyCode.SPACE))c._decideFormat(),c.menuType==="overlay"?c.button.attr("href","#"+c.popupID).attr("data-"+(a.mobile.ns||"")+"rel","popup"):c.button.attr("href","#"+c.dialogID).attr("data-"+(a.mobile.ns||"")+"rel","dialog"),c.isOpen=!0}),c.list.attr("role","listbox").bind("focusin",function(b){a(b.target).attr("tabindex","0").trigger("vmouseover")}).bind("focusout",function(b){a(b.target).attr("tabindex","-1").trigger("vmouseout")}).delegate("li:not(.ui-disabled, .ui-li-divider)","click",function(b){var e=c.select[0].selectedIndex,f=c.list.find("li:not(.ui-li-divider)").index(this),g=c._selectOptions().eq(f)[0];g.selected=c.isMultiple?!g.selected:!0,c.isMultiple&&a(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on",g.selected).toggleClass("ui-icon-checkbox-off",!g.selected),(c.isMultiple||e!==f)&&c.select.trigger("change"),c.isMultiple?c.list.find("li:not(.ui-li-divider)").eq(f).addClass("ui-btn-down-"+d.options.theme).find("a").first().focus():c.close(),b.preventDefault()}).keydown(function(b){var c=a(b.target),e=c.closest("li"),f,g;switch(b.keyCode){case 38:return f=e.prev().not(".ui-selectmenu-placeholder"),f.is(".ui-li-divider")&&(f=f.prev()),f.length&&(c.blur().attr("tabindex","-1"),f.addClass("ui-btn-down-"+d.options.theme).find("a").first().focus()),!1;case 40:return g=e.next(),g.is(".ui-li-divider")&&(g=g.next()),g.length&&(c.blur().attr("tabindex","-1"),g.addClass("ui-btn-down-"+d.options.theme).find("a").first().focus()),!1;case 13:case 32:return c.trigger("click"),!1}}),c.menuPage.bind("pagehide",function(){a.mobile._bindPageRemove.call(c.thisPage)}),c.listbox.bind("popupafterclose",function(a){c.close()}),c.isMultiple&&c.headerClose.click(function(){if(c.menuType==="overlay")return c.close(),!1}),c.thisPage.addDependents(this.menuPage)},_isRebuildRequired:function(){var a=this.list.find("li"),b=this._selectOptions();return b.text()!==a.text()},selected:function(){return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")},refresh:function(b,c){var d=this,e=this.element,f=this.isMultiple,g;(b||this._isRebuildRequired())&&d._buildList(),g=this.selectedIndices(),d.setButtonText(),d.setButtonCount(),d.list.find("li:not(.ui-li-divider)").removeClass(a.mobile.activeBtnClass).attr("aria-selected",!1).each(function(b){if(a.inArray(b,g)>-1){var c=a(this);c.attr("aria-selected",!0),d.isMultiple?c.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on"):c.is(".ui-selectmenu-placeholder")?c.next().addClass(a.mobile.activeBtnClass):c.addClass(a.mobile.activeBtnClass)}})},close:function(){if(this.options.disabled||!this.isOpen)return;var a=this;a.menuType==="page"?(a.menuPage.dialog("close"),a.list.appendTo(a.listbox)):a.listbox.popup("close"),a._focusButton(),a.isOpen=!1},open:function(){this.button.click()},_decideFormat:function(){function m(){var c=b.list.find("."+a.mobile.activeBtnClass+" a");c.length===0&&(c=b.list.find("li.ui-btn:not( :jqmData(placeholder='true') ) a")),c.first().focus().closest("li").addClass("ui-btn-down-"+d.options.theme)}var b=this,c=a.mobile.window,e=b.list.parent(),f=e.outerHeight(),g=e.outerWidth(),h=a("."+a.mobile.activePageClass),i=c.scrollTop(),j=b.button.offset().top,k=c.height(),l=c.width();f>k-80||!a.support.scrollTop?(b.menuPage.appendTo(a.mobile.pageContainer).page(),b.menuPageContent=q.find(".ui-content"),b.menuPageClose=q.find(".ui-header a"),b.thisPage.unbind("pagehide.remove"),i===0&&j>k&&b.thisPage.one("pagehide",function(){a(this).jqmData("lastScroll",j)}),b.menuPage.one("pageshow",function(){m()}).one("pagehide",function(){b.close()}),b.menuType="page",b.menuPageContent.append(b.list),b.menuPage.find("div .ui-title").text(b.label.text())):(b.menuType="overlay",b.listbox.one("popupafteropen",m))},_buildList:function(){var b=this,d=this.options,e=this.placeholder,f=!0,g=[],h=[],i=b.isMultiple?"checkbox-off":"false";b.list.empty().filter(".ui-listview").listview("destroy");var j=b.select.find("option"),k=j.length,l=this.select[0],m="data-"+a.mobile.ns,n=m+"option-index",o=m+"icon",p=m+"role",q=m+"placeholder",r=c.createDocumentFragment(),s=!1,t;for(var u=0;u<k;u++,s=!1){var v=j[u],w=a(v),x=v.parentNode,y=w.text(),z=c.createElement("a"),A=[];z.setAttribute("href","#"),z.appendChild(c.createTextNode(y));if(x!==l&&x.nodeName.toLowerCase()==="optgroup"){var B=x.getAttribute("label");if(B!==t){var C=c.createElement("li");C.setAttribute(p,"list-divider"),C.setAttribute("role","option"),C.setAttribute("tabindex","-1"),C.appendChild(c.createTextNode(B)),r.appendChild(C),t=B}}f&&(!v.getAttribute("value")||y.length===0||w.jqmData("placeholder"))&&(f=!1,s=!0,null===v.getAttribute(q)&&(this._removePlaceholderAttr=!0),v.setAttribute(q,!0),d.hidePlaceholderMenuItems&&A.push("ui-selectmenu-placeholder"),e!==y&&(e=b.placeholder=y));var D=c.createElement("li");v.disabled&&(A.push("ui-disabled"),D.setAttribute("aria-disabled",!0)),D.setAttribute(n,u),D.setAttribute(o,i),s&&D.setAttribute(q,!0),D.className=A.join(" "),D.setAttribute("role","option"),z.setAttribute("tabindex","-1"),D.appendChild(z),r.appendChild(D)}b.list[0].appendChild(r),!this.isMultiple&&!e.length?this.header.hide():this.headerTitle.text(this.placeholder),b.list.listview()},_button:function(){return a("<a>",{href:"#",role:"button",id:this.buttonId,"aria-haspopup":"true","aria-owns":this.menuId})},_destroy:function(){this.close(),this._origTabIndex!==b&&(this._origTabIndex!==!1?this.select.attr("tabindex",this._origTabIndex):this.select.removeAttr("tabindex")),this._removePlaceholderAttr&&this._selectOptions().removeAttr("data-"+a.mobile.ns+"placeholder"),this.listbox.remove(),f.apply(this,arguments)}})};a.mobile.document.bind("selectmenubeforecreate",function(b){var c=a(b.target).data("mobile-selectmenu");!c.options.nativeMenu&&c.element.parents(":jqmData(role='popup')").length===0&&d(c)})}(a),function(a,b){a.widget("mobile.fixedtoolbar",a.mobile.widget,{options:{visibleOnPageShow:!0,disablePageZoom:!0,transition:"slide",fullscreen:!1,tapToggle:!0,tapToggleBlacklist:"a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-popup, .ui-panel, .ui-panel-dismiss-open",hideDuringFocus:"input, textarea, select",updatePagePadding:!0,trackPersistentToolbars:!0,supportBlacklist:function(){return!a.support.fixedPosition},initSelector:":jqmData(position='fixed')"},_create:function(){var b=this,c=b.options,d=b.element,e=d.is(":jqmData(role='header')")?"header":"footer",f=d.closest(".ui-page");if(c.supportBlacklist()){b.destroy();return}d.addClass("ui-"+e+"-fixed"),c.fullscreen?(d.addClass("ui-"+e+"-fullscreen"),f.addClass("ui-page-"+e+"-fullscreen")):f.addClass("ui-page-"+e+"-fixed"),a.extend(this,{_thisPage:null}),b._addTransitionClass(),b._bindPageEvents(),b._bindToggleHandlers()},_addTransitionClass:function(){var a=this.options.transition;a&&a!=="none"&&(a==="slide"&&(a=this.element.is(".ui-header")?"slidedown":"slideup"),this.element.addClass(a))},_bindPageEvents:function(){this._thisPage=this.element.closest(".ui-page"),this._on(this._thisPage,{pagebeforeshow:"_handlePageBeforeShow",webkitAnimationStart:"_handleAnimationStart",animationstart:"_handleAnimationStart",updatelayout:"_handleAnimationStart",pageshow:"_handlePageShow",pagebeforehide:"_handlePageBeforeHide"})},_handlePageBeforeShow:function(){var b=this.options;b.disablePageZoom&&a.mobile.zoom.disable(!0),b.visibleOnPageShow||this.hide(!0)},_handleAnimationStart:function(){this.options.updatePagePadding&&this.updatePagePadding(this._thisPage)},_handlePageShow:function(){this.updatePagePadding(this._thisPage),this.options.updatePagePadding&&this._on(a.mobile.window,{throttledresize:"updatePagePadding"})},_handlePageBeforeHide:function(b,c){var d=this.options;d.disablePageZoom&&a.mobile.zoom.enable(!0),d.updatePagePadding&&this._off(a.mobile.window,"throttledresize");if(d.trackPersistentToolbars){var e=a(".ui-footer-fixed:jqmData(id)",this._thisPage),f=a(".ui-header-fixed:jqmData(id)",this._thisPage),g=e.length&&c.nextPage&&a(".ui-footer-fixed:jqmData(id='"+e.jqmData("id")+"')",c.nextPage)||a(),h=f.length&&c.nextPage&&a(".ui-header-fixed:jqmData(id='"+f.jqmData("id")+"')",c.nextPage)||a();if(g.length||h.length)g.add(h).appendTo(a.mobile.pageContainer),c.nextPage.one("pageshow",function(){h.prependTo(this),g.appendTo(this)})}},_visible:!0,updatePagePadding:function(b){var c=this.element,d=c.is(".ui-header"),e=parseFloat(c.css(d?"top":"bottom"));if(this.options.fullscreen)return;b=b||this._thisPage||c.closest(".ui-page"),a(b).css("padding-"+(d?"top":"bottom"),c.outerHeight()+e)},_useTransition:function(b){var c=a.mobile.window,d=this.element,e=c.scrollTop(),f=d.height(),g=d.closest(".ui-page").height(),h=a.mobile.getScreenHeight(),i=d.is(":jqmData(role='header')")?"header":"footer";return!b&&(this.options.transition&&this.options.transition!=="none"&&(i==="header"&&!this.options.fullscreen&&e>f||i==="footer"&&!this.options.fullscreen&&e+h<g-f)||this.options.fullscreen)},show:function(a){var b="ui-fixed-hidden",c=this.element;this._useTransition(a)?c.removeClass("out "+b).addClass("in").animationComplete(function(){c.removeClass("in")}):c.removeClass(b),this._visible=!0},hide:function(a){var b="ui-fixed-hidden",c=this.element,d="out"+(this.options.transition==="slide"?" reverse":"");this._useTransition(a)?c.addClass(d).removeClass("in").animationComplete(function(){c.addClass(b).removeClass(d)}):c.addClass(b).removeClass(d),this._visible=!1},toggle:function(){this[this._visible?"hide":"show"]()},_bindToggleHandlers:function(){var b=this,c,d=b.options,e=b.element;e.closest(".ui-page").bind("vclick",function(c){d.tapToggle&&!a(c.target).closest(d.tapToggleBlacklist).length&&b.toggle()}).bind("focusin focusout",function(e){screen.width<1025&&a(e.target).is(d.hideDuringFocus)&&!a(e.target).closest(".ui-header-fixed, .ui-footer-fixed").length&&(e.type==="focusout"&&!b._visible?c=setTimeout(function(){b.show()},0):e.type==="focusin"&&b._visible&&(clearTimeout(c),b.hide()))})},_destroy:function(){var a=this.element,b=a.is(".ui-header");a.closest(".ui-page").css("padding-"+(b?"top":"bottom"),""),a.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"),a.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen")}}),a.mobile.document.bind("pagecreate create",function(b){a(b.target).jqmData("fullscreen")&&a(a.mobile.fixedtoolbar.prototype.options.initSelector,b.target).not(":jqmData(fullscreen)").jqmData("fullscreen",!0),a.mobile.fixedtoolbar.prototype.enhanceWithin(b.target)})}(a),function(a,b){a.widget("mobile.fixedtoolbar",a.mobile.fixedtoolbar,{_create:function(){this._super(),this._workarounds()},_workarounds:function(){var a=navigator.userAgent,b=navigator.platform,c=a.match(/AppleWebKit\/([0-9]+)/),d=!!c&&c[1],e=null,f=this;if(b.indexOf("iPhone")>-1||b.indexOf("iPad")>-1||b.indexOf("iPod")>-1)e="ios";else if(a.indexOf("Android")>-1)e="android";else return;if(e==="ios")f._bindScrollWorkaround();else if(e==="android"&&d&&d<534)f._bindScrollWorkaround(),f._bindListThumbWorkaround();else return},_viewportOffset:function(){var b=this.element,c=b.is(".ui-header"),d=Math.abs(b.offset().top-a.mobile.window.scrollTop());return c||(d=Math.round(d-a.mobile.window.height()+b.outerHeight())-60),d},_bindScrollWorkaround:function(){var b=this;this._on(a.mobile.window,{scrollstop:function(){var a=b._viewportOffset();a>2&&b._visible&&b._triggerRedraw()}})},_bindListThumbWorkaround:function(){this.element.closest(".ui-page").addClass("ui-android-2x-fixed")},_triggerRedraw:function(){var b=parseFloat(a(".ui-page-active").css("padding-bottom"));a(".ui-page-active").css("padding-bottom",b+1+"px"),setTimeout(function(){a(".ui-page-active").css("padding-bottom",b+"px")},0)},destroy:function(){this._super(),this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")}})}(a),function(a,b){function j(a){e=a.originalEvent,i=e.accelerationIncludingGravity,f=Math.abs(i.x),g=Math.abs(i.y),h=Math.abs(i.z),!b.orientation&&(f>7||(h>6&&g<8||h<8&&g>6)&&f>5)?d.enabled&&d.disable():d.enabled||d.enable()}a.mobile.iosorientationfixEnabled=!0;var c=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(c)&&c.indexOf("AppleWebKit")>-1)){a.mobile.iosorientationfixEnabled=!1;return}var d=a.mobile.zoom,e,f,g,h,i;a.mobile.document.on("mobileinit",function(){a.mobile.iosorientationfixEnabled&&a.mobile.window.bind("orientationchange.iosorientationfix",d.enable).bind("devicemotion.iosorientationfix",j)})}(a,this),function(a,b,d){function h(){e.removeClass("ui-mobile-rendering")}var e=a("html"),f=a("head"),g=a.mobile.window;a(b.document).trigger("mobileinit");if(!a.mobile.gradeA())return;a.mobile.ajaxBlacklist&&(a.mobile.ajaxEnabled=!1),e.addClass("ui-mobile ui-mobile-rendering"),setTimeout(h,5e3),a.extend(a.mobile,{initializePage:function(){var b=a.mobile.path,d=a(":jqmData(role='page'), :jqmData(role='dialog')"),e=b.stripHash(b.stripQueryParams(b.parseLocation().hash)),f=c.getElementById(e);d.length||(d=a("body").wrapInner("<div data-"+a.mobile.ns+"role='page'></div>").children(0)),d.each(function(){var b=a(this);b.jqmData("url")||b.attr("data-"+a.mobile.ns+"url",b.attr("id")||location.pathname+location.search)}),a.mobile.firstPage=d.first(),a.mobile.pageContainer=a.mobile.firstPage.parent().addClass("ui-mobile-viewport"),g.trigger("pagecontainercreate"),a.mobile.showPageLoadingMsg(),h(),!a.mobile.hashListeningEnabled||!a.mobile.path.isHashValid(location.hash)||!a(f).is(':jqmData(role="page")')&&!a.mobile.path.isPath(e)&&e!==a.mobile.dialogHashKey?(a.mobile.path.isHashValid(location.hash)&&(a.mobile.urlHistory.initialDst=e.replace("#","")),a.event.special.navigate.isPushStateEnabled()&&a.mobile.navigate.navigator.squash(b.parseLocation().href),a.mobile.changePage(a.mobile.firstPage,{transition:"none",reverse:!0,changeHash:!1,fromHashChange:!0})):a.event.special.navigate.isPushStateEnabled()?(a.mobile.navigate.history.stack=[],a.mobile.navigate(a.mobile.path.isPath(location.hash)?location.hash:location.href)):g.trigger("hashchange",[!0])}}),a.mobile.navreadyDeferred.resolve(),a(function(){b.scrollTo(0,1),a.mobile.defaultHomeScroll=!a.support.scrollTop||a.mobile.window.scrollTop()===1?0:1,a.mobile.autoInitializePage&&a.mobile.initializePage(),g.load(a.mobile.silentScroll),a.support.cssPointerEvents||a.mobile.document.delegate(".ui-disabled","vclick",function(a){a.preventDefault(),a.stopImmediatePropagation()})})}(a,this)});
define("routers/FitnessRouter", [ "jquery", "backbone", "fitness", "customCodeClient", "models/ChallengeModel",
    "views/FooterView", "views/HomeView", "views/FriendsView", "views/LoginView", "views/RegisterView", "views/ProfileView", "views/AuthView",
    "views/CreateChallengeView", "views/ChallengeListView", "views/ChallengeView", "views/InvitationView", "views/InvitationListView", "jquerymobile" ],
    function( $, Backbone, fitness, customCode, ChallengeModel,
              FooterView, HomeView, FriendsView, LoginView, RegisterView, ProfileView, AuthView,
              CreateChallengeView, ChallengeListView, ChallengeView, InvitationView, InvitationListView, $__jqm ) {

       // 
    // Extends Backbone.Router
    var FitnessRouter = Backbone.Router.extend( {


        // The Router constructor
        initialize: function() {

//            $('#header').html(new HeaderView().render().el);

//            this.invitationViews = [];
            this.loginView = new LoginView( { el: "#login" } );
            this.registerView = new RegisterView( { el: "#register"} );

            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },

        // Backbone.js Routes
        routes: {
            "": "whereTo",
            "home": "showHome",
            "login" : "showLogin",
            "challenge_list" : "showChallengeList",
            "challenge/:challenge_id" : "showChallenge",
            "invitation_list" : "showInvitationList",
            "invitation/:invitation_id" : "showInvitation",
            "create" : "showCreate",
            "profile" : "showProfile",
            "friends" : "showFriends",
            "register" : "showRegister",
            "auth" : "showAuth"
        },

        ensureLogin: function(callback) {
            if (fitness.isLoggedIn()) {
                callback(true);
                return;
            }
            var username = localStorage.getItem('username');
            if (!username) {
                callback(false);
                return;
            }
            $.mobile.showPageLoadingMsg();
            fitness.loginWithID(username, function(success) {
                $.mobile.hidePageLoadingMsg();
                callback(success);
                return;
            });
        },

        // Home method
        whereTo: function() {
            var that = this;
            this.ensureLogin(function(success) {
                if (!success) {
                    that.showLogin();
                    return;
                }
                if (fitness.user && fitness.user.get('accesstoken')) {
                    that.showHome();
                }
                else { // need to auth with Fitbit
                    if (window.location.href.indexOf('oauth_token') !== -1) { // user authorized on Fitbit and was redirected here
                        var requestToken = localStorage.getItem("request_token");
                        if (!requestToken) {
                            fitness.showMessage('Missing Fitbit request token.'); // need to start over with request token call on auth page
                            that.showAuth();
                        }
                        var requestTokenSecret = localStorage.getItem("request_token_secret");
                        var oauthVerifier = customCode.getQueryVariable(window.location.href, 'oauth_verifier');

                        var pos = oauthVerifier.length - 1;
                        if (oauthVerifier[pos] === '/') { // stackmob mistakenly adds a slash to the URL, so remove it
                            oauthVerifier = oauthVerifier.substring(0, pos).replace('#',''); // also kill a # if there is one
                        }
                        customCode.completeFitbitAuth(fitness.user, requestToken, requestTokenSecret, oauthVerifier, function(success, data) {
                            if (success) {
                                var accessTokenData = data;
                                fitness.user.set('accesstoken', accessTokenData.oauth_token);
                                fitness.user.set('accesstokensecret', accessTokenData.oauth_token_secret);
                                fitness.user.set('fitbituserid', accessTokenData.fitbit_user_id);
                                localStorage.removeItem('request_token');
                                localStorage.removeItem('request_token_secret');
                                window.location.href = '/#home'; // using location.href instead of router navigation to clear the query string
                            }
                            else {
                                localStorage.removeItem('request_token');
                                localStorage.removeItem('request_token_secret');
                                fitness.showMessage(data);
                            }
                        });
                    }
                    else {
                        that.showAuth();
                    }
                }
            });
        },

        // Home method
        showHome: function() {
            var that = this;
            this.ensureLogin(function(success) {
                if (!success) {
                    that.showLogin();
                    return;
                }
                var username = fitness.user.get('username');
                fitness.updateIfStale(username, function(success, data) {
                    if (fitness.user && fitness.user.get('accesstoken')) {
                        that.homeView = new HomeView( { el: "#home"} );
                        var footerView = new FooterView( { el: "#home .footer"} );
                        $.mobile.changePage( "#home" , { reverse: true, changeHash: true } );
    //                    var activePage = $.mobile.activePage[0].id;
    //                    if (activePage != "home" && activePage != '') {
    //                    }
                    }
                    else {
                        that.showAuth();
                    }
                });
            });
        },

        showChallengeList: function() {
            var that = this;
            this.ensureLogin(function(success) {
                if (!success) {
                    that.showLogin();
                    return;
                }
                var pageSelector = '#challenge_list';
                var footerSelector = pageSelector + ' .footer';
                function createAndShowView() {
                    if (!that.challengesView) {
                        that.challengesView = new ChallengeListView({el: pageSelector, model: fitness.challenges});
                        var footerView = new FooterView({el: footerSelector});
                    }
                    $.mobile.changePage(pageSelector, {reverse: false, changeHash: true});
                }
                if (!fitness.challenges) {
                    $.mobile.showPageLoadingMsg();
                    fitness.getUserChallenges(fitness.user.get('username'), true, function(success, data) {
                        if (!success) {
                            fitness.showMessage('Failed to get challenges');
                            return;
                        }
                        createAndShowView();
                    });
                }
                else {
                    $(pageSelector + ' ul[data-role="listview"] a').removeClass('ui-btn-active');
                    createAndShowView();
                }
            });
        },

        showChallenge: function(challengeID) {
            var that = this;
            this.ensureLogin(function(success) {
                if (!success) {
                    that.showLogin();
                    return;
                }
                var pageSelector = '#challenge';
                var footerSelector = pageSelector + ' .footer';
                function setView() {
                    if (!that.challengeView) {
                        that.challengeView = new ChallengeView({el: pageSelector, model: fitness.challengeLookup[challengeID]});
                        var footerView = new FooterView({el: footerSelector});
                    }
                    $.mobile.changePage(pageSelector, {reverse: false, changeHash: true});
                };
                if (fitness.challengeLookup && fitness.challengeLookup[challengeID]) {
                    setView();
                }
                else {
                    $.mobile.showPageLoadingMsg();
                    fitness.getChallenge(challengeID, function(success, data) {
                        if (!success) {
                            fitness.showMessage('Failed to get challenge');
                            return;
                        }
                        setView();
                    });
                }
            });
        },

        showInvitationList: function() {
            var that = this;
            this.ensureLogin(function(success) {
                    if (!success) {
                    that.showLogin();
                    return;
                }

                var pageSelector = '#invitation_list';
                var footerSelector = pageSelector + ' .footer';

                function createAndShowView() {
                    if (!that.invitationsView) {
                        that.invitationsView = new InvitationListView({el: pageSelector, model: fitness.invitations});
                        var footerView = new FooterView({el: footerSelector});
                    }
                    $.mobile.changePage(pageSelector, {reverse: false, changeHash: true});
                }
                if (!fitness.invitations) {
                    $.mobile.showPageLoadingMsg();
                    fitness.getInvitations(fitness.user.get('username'), false, function(success, data) {
                        if (!success) {
                            fitness.showMessage('Failed to load invitations');
                            return;
                        }
                        createAndShowView();
                    });
                }
                else {
                    $(pageSelector + ' ul[data-role="listview"] a').removeClass('ui-btn-active');
                    createAndShowView();
                }
            });
        },

        showInvitation: function(invitationID) {
            var that = this;
            this.ensureLogin(function(success) {
                    if (!success) {
                    that.showLogin();
                    return;
                }
                var pageSelector = '#invitation';
                var footerSelector = pageSelector + ' .footer';
                function createAndShowView() {
                    that.invitationView = new InvitationView({el: "#invitation", model: fitness.invitationLookup[invitationID]});
                    var footerView = new FooterView({el: footerSelector});
                    $.mobile.changePage(pageSelector, {reverse: false, changeHash: true});
                }
                this.ensureLogin(function(success) {
                    if (!fitness.invitations) {
                        $.mobile.showPageLoadingMsg();
                        fitness.getInvitations(fitness.user.get('username'), true, function(success) {
                            if (!success) {
                                fitness.showMessage('Failed to load invitations');
                                return;
                            }
                            createAndShowView();
                        });
                    }
                    else {
                        createAndShowView();
                    }
                });
            });
        },


        showProfile: function() {
            var that = this;
            this.ensureLogin(function(success) {
                if (!success) {
                    that.showLogin();
                    return;
                }
                if (!that.profileView) {
                    that.profileView = new ProfileView( { el: "#profile", model: fitness.user } );
                    var footerView = new FooterView( { el: "#profile .footer"});
                    $.mobile.changePage( "#profile" , { reverse: false, changeHash: true } );
                }
                else {
                    $.mobile.changePage( "#profile" , { reverse: false, changeHash: true } );
                }
            });
        },

        showLogin: function() {
            var footerView = new FooterView( { el: "#login .footer"} );
            $.mobile.changePage( "#login" , { reverse: false, changeHash: true } );
            $.mobile.showPageLoadingMsg();
        },

        showRegister: function() {
            var footerView = new FooterView( { el: "#register .footer" } );
            $.mobile.changePage( "#register" , { reverse: false, changeHash: true } );
            $.mobile.showPageLoadingMsg();
        },

        showAuth: function() {
            var that = this;
            this.ensureLogin(function(success) {
                if (!success) {
                    that.showLogin();
                    return;
                }
                if (!that.authView) {
                    var footerView = new FooterView( { el: "#auth .footer" } );
                    that.authView = new AuthView( { el: "#auth" } );
                    $.mobile.changePage( "#auth" , { reverse: false, changeHash: true } );
                    $.mobile.showPageLoadingMsg();
                }
                else {
                    $.mobile.changePage( "#auth" , { reverse: false, changeHash: true } );
                    $.mobile.showPageLoadingMsg();
                }
            });
        },

        showCreate: function() {
            var that = this;
            this.ensureLogin(function(success) {
                if (!success) {
                    that.showLogin();
                    return;
                }
                function createAndShowView() {
                    that.createChallengeView = new CreateChallengeView( { el: "#create" } );
                    var footerView = new FooterView( { el: "#create .footer" } );
                    $.mobile.changePage( "#create" , { reverse: false, changeHash: true } );
                }
                if (!that.createChallengeView) {
                    $.mobile.showPageLoadingMsg();
                    if (!fitness.friends) {
                        fitness.getStackmobFriends(fitness.user.get('friends'), function(success, data) {
                            createAndShowView();
                        });
                    }
                    else {
                        createAndShowView();
                    }
                }
                else {
                    $.mobile.changePage( "#create" , { reverse: false, changeHash: true } );
                }
            });
        },

        showFriends: function() {
            var that = this;
            this.ensureLogin(function(success) {
                if (!success) {
                    that.showLogin();
                    return;
                }

                if (!that.friendsView) {
                    $.mobile.showPageLoadingMsg();
                    fitness.updateFitbitFriends(fitness.user.get('username'), function(success, data) {
                        if (!success) {
                            console.debug('Failed to update fitbit friends');
                        }
                        fitness.getStackmobFriends(fitness.user.get('friends'), function(success, data) {
                            that.friendsView = new FriendsView( { el: "#friends", model: fitness.friends } );
                            var footerView = new FooterView( { el: "#friends .footer" } );
                            $.mobile.changePage( "#friends" , { reverse: false, changeHash: true } );
                        });
                    });
                }
                else {
                    $.mobile.changePage( "#friends" , { reverse: false, changeHash: true } );
                }
            });
        }

    });

    // Returns the Router class
    return FitnessRouter;

} );

// Sets the require.js configuration for your application.
require.config( {

    baseUrl: "/js/",
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
    paths: {

        // Core Libraries
        "json2": "libs/json2-min",
        "underscore": "libs/underscore-1.4.1-min",
        //"underscore": "libs/lodash",
        "jquery": "libs/jquery-1.8.2.min",
        "jquerymobile": "libs/jquery.mobile-1.3.0.min",
        "backbone": "libs/backbone-0.9.2-min",
        "stackmob" : "libs/stackmob-js-0.8.0-min",
        "mustache": "libs/mustache"
    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        "underscore": {
            "exports" : "_"
        },

        "backbone": {
            "deps": [ "underscore", "jquery" ],
            "exports": "Backbone"  //attaches "Backbone" to the window object
        },
        "stackmob": {
            "deps": [ "jquery", "backbone" ],
            "exports": "StackMob"
        },
        "mustache": {
            "exports": "Mustache"
        }
    } // end Shim Configuration

} );

require(["jquery"], function($) {
    // console.log shim
    if (!window.console) {
        window.console = {};
        window.console.log = function() {};
    }
    // Set up the "mobileinit" handler before requiring jQuery Mobile's module
    $(document).live("mobileinit", function() {
        //$.mobile.ajaxEnabled = false; // ???
        $.mobile.linkBindingEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;
        $.mobile.defaultPageTransition = 'fade';

        $('ul[data-role="listview"] a').live('click', function (event, ui) {
            $(event.currentTarget).addClass('ui-btn-active');
        });
        $('div[data-role="page"]').live('pageshow', function (event, ui) {
            $.mobile.hidePageLoadingMsg();
        });
        $('.back_button, .home_button').live('click', function(event, ui) {
            $.mobile.showPageLoadingMsg();
        });
    });
});


require(["routers/FitnessRouter"], function(FitnessRouter) {
    window.router = new FitnessRouter(); // TODO: figure out how to put this in a namespace
    //router.navigate();
});

define("../temp-build/js/main.js", function(){});
