/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

var Mustache;(function(e){typeof module!="undefined"?module.exports=e:typeof define=="function"?define(e):Mustache=e})(function(){function e(e,t){return RegExp.prototype.test.call(e,t)}function t(t){return!e(w,t)}function n(e){var t=e.replace(N,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)});return'"'+t+'"'}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(e){return String(e).replace(/[&<>"'\/]/g,function(e){return C[e]})}function s(e){this.string=e,this.tail=e,this.pos=0}function o(e,t){this.view=e,this.parent=t,this.clearCache()}function u(){this.clearCache()}function a(e,t){var r=['""'],i,s,o;for(var u=0,f=e.length;u<f;++u){i=e[u];switch(i.type){case"#":case"^":s=i.type==="#"?"_section":"_inverted",r.push("r."+s+"("+n(i.value)+", c, function (c, r) {\n"+"  "+a(i.tokens,!0)+"\n"+"})");break;case"{":case"&":case"name":o=i.type==="name"?"true":"false",r.push("r._name("+n(i.value)+", c, "+o+")");break;case">":r.push("r._partial("+n(i.value)+", c)");break;case"text":r.push(n(i.value))}}return r="return "+r.join(" + ")+";",t?r:new Function("c, r",r)}function f(e){if(e.length===2)return[new RegExp(r(e[0])+"\\s*"),new RegExp("\\s*"+r(e[1]))];throw new Error("Invalid tags: "+e.join(" "))}function l(e){var t=[],n=t,r=[],i,s;for(var o=0;o<e.length;++o){i=e[o];switch(i.type){case"#":case"^":i.tokens=[],r.push(i),n.push(i),n=i.tokens;break;case"/":if(r.length===0)throw new Error("Unopened section: "+i.value);s=r.pop();if(s.value!==i.value)throw new Error("Unclosed section: "+s.value);r.length>0?n=r[r.length-1].tokens:n=t;break;default:n.push(i)}}s=r.pop();if(s)throw new Error("Unclosed section: "+s.value);return t}function c(e){var t;for(var n=0;n<e.length;++n){var r=e[n];t&&t.type==="text"&&r.type==="text"?(t.value+=r.value,e.splice(n--,1)):t=r}}function h(e,n){n=n||g.tags;var i=f(n),o=new s(e),u=[],a=[],h=!1,p=!1,d=function(){if(h&&!p)while(a.length)u.splice(a.pop(),1);else a=[];h=!1,p=!1},v,m,w;while(!o.eos()){m=o.scanUntil(i[0]);if(m)for(var T=0,N=m.length;T<N;++T)w=m.charAt(T),t(w)?a.push(u.length):p=!0,u.push({type:"text",value:w}),w==="\n"&&d();if(!o.scan(i[0]))break;h=!0,v=o.scan(x)||"name",o.scan(y);if(v==="=")m=o.scanUntil(E),o.scan(E),o.scanUntil(i[1]);else if(v==="{"){var C=new RegExp("\\s*"+r("}"+n[1]));m=o.scanUntil(C),o.scan(S),o.scanUntil(i[1])}else m=o.scanUntil(i[1]);if(!o.scan(i[1]))throw new Error("Unclosed tag at "+o.pos);u.push({type:v,value:m});if(v==="name"||v==="{"||v==="&")p=!0;v==="="&&(n=m.split(b),i=f(n))}return c(u),l(u)}function p(){k.clearCache()}function d(e,t){return k.compile(e,t)}function v(e,t,n){return k.compilePartial(e,t,n)}function m(e,t,n){if(n)for(var r in n)v(r,n[r]);return k.render(e,t)}var g={};g.name="mustache.js",g.version="0.5.1-dev",g.tags=["{{","}}"],g.parse=h,g.clearCache=p,g.compile=d,g.compilePartial=v,g.render=m,g.Scanner=s,g.Context=o,g.Renderer=u,g.to_html=function(e,t,n,r){var i=m(e,t,n);if(typeof r!="function")return i;r(i)};var y=/\s*/,b=/\s+/,w=/\S/,E=/\s*=/,S=/\s*\}/,x=/#|\^|\/|>|\{|&|=|!/,T=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},N=/[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]/gm,C={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};g.isWhitespace=t,g.isArray=T,g.quote=n,g.escapeRe=r,g.escapeHtml=i,s.prototype.eos=function(){return this.tail===""},s.prototype.scan=function(e){var t=this.tail.match(e);return t&&t.index===0?(this.tail=this.tail.substring(t[0].length),this.pos+=t[0].length,t[0]):null},s.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.pos+=this.tail.length,this.tail="";break;case 0:t=null;break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n),this.pos+=n}return t},o.make=function(e){return e instanceof o?e:new o(e)},o.prototype.clearCache=function(){this._cache={}},o.prototype.push=function(e){return new o(e,this)},o.prototype.lookup=function(e){var t=this._cache[e];if(!t){if(e===".")t=this.view;else{var n=this;while(n){if(e.indexOf(".")>0){var r=e.split("."),i=0;t=n.view;while(t&&i<r.length)t=t[r[i++]]}else t=n.view[e];if(t!=null)break;n=n.parent}}this._cache[e]=t}return typeof t=="function"&&(t=t.call(this.view)),t},u.prototype.clearCache=function(){this._cache={},this._partialCache={}},u.prototype.compile=function(e,t){typeof e=="string"&&(e=h(e,t));var n=a(e),r=this;return function(e){return n(o.make(e),r)}},u.prototype.compilePartial=function(e,t,n){return this._partialCache[e]=this.compile(t,n),this._partialCache[e]},u.prototype.render=function(e,t){var n=this._cache[e];return n||(n=this.compile(e),this._cache[e]=n),n(t)},u.prototype._section=function(e,t,n){var r=t.lookup(e);switch(typeof r){case"object":if(T(r)){var i="";for(var s=0,o=r.length;s<o;++s)i+=n(t.push(r[s]),this);return i}return r?n(t.push(r),this):"";case"function":var u=n(t,this),a=this,f=function(e){return a.render(e,t)};return r.call(t.view,u,f)||"";default:if(r)return n(t,this)}return""},u.prototype._inverted=function(e,t,n){var r=t.lookup(e);return r==null||r===!1||T(r)&&r.length===0?n(t,this):""},u.prototype._partial=function(e,t){var n=this._partialCache[e];return n?n(t,this):""},u.prototype._name=function(e,t,n){var r=t.lookup(e);typeof r=="function"&&(r=r.call(t.view));var s=r==null?"":String(r);return n?i(s):s};var k=new u;return g}());