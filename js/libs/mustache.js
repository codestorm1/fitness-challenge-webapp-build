/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

var Mustache;(function(e){typeof module!="undefined"?module.exports=e:typeof define=="function"?define(e):Mustache=e})(function(){function u(e,t){return RegExp.prototype.test.call(e,t)}function a(e){return!u(r,e)}function c(e){var t=e.replace(l,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)});return'"'+t+'"'}function h(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function d(e){return String(e).replace(/[&<>"'\/]/g,function(e){return p[e]})}function v(e){this.string=e,this.tail=e,this.pos=0}function m(e,t){this.view=e,this.parent=t,this.clearCache()}function g(){this.clearCache()}function y(e,t){var n=['""'],r,i,s;for(var o=0,u=e.length;o<u;++o){r=e[o];switch(r.type){case"#":case"^":i=r.type==="#"?"_section":"_inverted",n.push("r."+i+"("+c(r.value)+", c, function (c, r) {\n"+"  "+y(r.tokens,!0)+"\n"+"})");break;case"{":case"&":case"name":s=r.type==="name"?"true":"false",n.push("r._name("+c(r.value)+", c, "+s+")");break;case">":n.push("r._partial("+c(r.value)+", c)");break;case"text":n.push(c(r.value))}}return n="return "+n.join(" + ")+";",t?n:new Function("c, r",n)}function b(e){if(e.length===2)return[new RegExp(h(e[0])+"\\s*"),new RegExp("\\s*"+h(e[1]))];throw new Error("Invalid tags: "+e.join(" "))}function w(e){var t=[],n=t,r=[],i,s;for(var o=0;o<e.length;++o){i=e[o];switch(i.type){case"#":case"^":i.tokens=[],r.push(i),n.push(i),n=i.tokens;break;case"/":if(r.length===0)throw new Error("Unopened section: "+i.value);s=r.pop();if(s.value!==i.value)throw new Error("Unclosed section: "+s.value);r.length>0?n=r[r.length-1].tokens:n=t;break;default:n.push(i)}}s=r.pop();if(s)throw new Error("Unclosed section: "+s.value);return t}function E(e){var t;for(var n=0;n<e.length;++n){var r=e[n];t&&t.type==="text"&&r.type==="text"?(t.value+=r.value,e.splice(n--,1)):t=r}}function S(r,u){u=u||e.tags;var f=b(u),l=new v(r),c=[],p=[],d=!1,m=!1,g=function(){if(d&&!m)while(p.length)c.splice(p.pop(),1);else p=[];d=!1,m=!1},y,S,x;while(!l.eos()){S=l.scanUntil(f[0]);if(S)for(var T=0,N=S.length;T<N;++T)x=S.charAt(T),a(x)?p.push(c.length):m=!0,c.push({type:"text",value:x}),x==="\n"&&g();if(!l.scan(f[0]))break;d=!0,y=l.scan(o)||"name",l.scan(t);if(y==="=")S=l.scanUntil(i),l.scan(i),l.scanUntil(f[1]);else if(y==="{"){var C=new RegExp("\\s*"+h("}"+u[1]));S=l.scanUntil(C),l.scan(s),l.scanUntil(f[1])}else S=l.scanUntil(f[1]);if(!l.scan(f[1]))throw new Error("Unclosed tag at "+l.pos);c.push({type:y,value:S});if(y==="name"||y==="{"||y==="&")m=!0;y==="="&&(u=S.split(n),f=b(u))}return E(c),w(c)}function T(){x.clearCache()}function N(e,t){return x.compile(e,t)}function C(e,t,n){return x.compilePartial(e,t,n)}function k(e,t,n){if(n)for(var r in n)C(r,n[r]);return x.render(e,t)}var e={};e.name="mustache.js",e.version="0.5.1-dev",e.tags=["{{","}}"],e.parse=S,e.clearCache=T,e.compile=N,e.compilePartial=C,e.render=k,e.Scanner=v,e.Context=m,e.Renderer=g,e.to_html=function(e,t,n,r){var i=k(e,t,n);if(typeof r!="function")return i;r(i)};var t=/\s*/,n=/\s+/,r=/\S/,i=/\s*=/,s=/\s*\}/,o=/#|\^|\/|>|\{|&|=|!/,f=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},l=/[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]/gm,p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};e.isWhitespace=a,e.isArray=f,e.quote=c,e.escapeRe=h,e.escapeHtml=d,v.prototype.eos=function(){return this.tail===""},v.prototype.scan=function(e){var t=this.tail.match(e);return t&&t.index===0?(this.tail=this.tail.substring(t[0].length),this.pos+=t[0].length,t[0]):null},v.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.pos+=this.tail.length,this.tail="";break;case 0:t=null;break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n),this.pos+=n}return t},m.make=function(e){return e instanceof m?e:new m(e)},m.prototype.clearCache=function(){this._cache={}},m.prototype.push=function(e){return new m(e,this)},m.prototype.lookup=function(e){var t=this._cache[e];if(!t){if(e===".")t=this.view;else{var n=this;while(n){if(e.indexOf(".")>0){var r=e.split("."),i=0;t=n.view;while(t&&i<r.length)t=t[r[i++]]}else t=n.view[e];if(t!=null)break;n=n.parent}}this._cache[e]=t}return typeof t=="function"&&(t=t.call(this.view)),t},g.prototype.clearCache=function(){this._cache={},this._partialCache={}},g.prototype.compile=function(e,t){typeof e=="string"&&(e=S(e,t));var n=y(e),r=this;return function(e){return n(m.make(e),r)}},g.prototype.compilePartial=function(e,t,n){return this._partialCache[e]=this.compile(t,n),this._partialCache[e]},g.prototype.render=function(e,t){var n=this._cache[e];return n||(n=this.compile(e),this._cache[e]=n),n(t)},g.prototype._section=function(e,t,n){var r=t.lookup(e);switch(typeof r){case"object":if(f(r)){var i="";for(var s=0,o=r.length;s<o;++s)i+=n(t.push(r[s]),this);return i}return r?n(t.push(r),this):"";case"function":var u=n(t,this),a=this,l=function(e){return a.render(e,t)};return r.call(t.view,u,l)||"";default:if(r)return n(t,this)}return""},g.prototype._inverted=function(e,t,n){var r=t.lookup(e);return r==null||r===!1||f(r)&&r.length===0?n(t,this):""},g.prototype._partial=function(e,t){var n=this._partialCache[e];return n?n(t,this):""},g.prototype._name=function(e,t,n){var r=t.lookup(e);typeof r=="function"&&(r=r.call(t.view));var i=r==null?"":String(r);return n?d(i):i};var x=new g;return e}());