(function(e){function t(t){for(var a,c,s=t[0],u=t[1],o=t[2],p=0,f=[];p<s.length;p++)c=s[p],r[c]&&f.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/image-processing-ts-demo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},4079:function(e,t,n){},4300:function(e,t,n){},5209:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},c45d:function(e,t,n){"use strict";var a=n("4300"),r=n.n(a);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("5c0b"),n("2877")),s={},u=Object(c["a"])(s,r,i,!1,null,null,null),o=u.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("ul",{staticClass:"nav"},[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("HOME")]),n("router-link",{attrs:{to:"/lenna"}},[e._v("Lenna")]),n("router-link",{attrs:{to:"/nega"}},[e._v("Nega")]),n("router-link",{attrs:{to:"/grayscale"}},[e._v("GrayScale")]),n("router-link",{attrs:{to:"/thresholding"}},[e._v("Thresholding")]),n("router-link",{attrs:{to:"/gaussian"}},[e._v("Gaussian")]),n("router-link",{attrs:{to:"/laplacian"}},[e._v("Laplacian")]),n("router-link",{attrs:{to:"/sharping"}},[e._v("Sharping")]),n("router-link",{attrs:{to:"/self-filter"}},[e._v("Self-Filter")])],1)]),n("router-view")],1)},f=[],h=n("d225"),v=n("b0b4"),m=n("308d"),b=n("6bb5"),d=n("4e2b"),g=n("9ab4"),x=n("60a3"),O=function(e){function t(){return Object(h["a"])(this,t),Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(v["a"])(t,[{key:"mounted",value:function(){}}]),t}(x["b"]);O=g["a"]([Object(x["a"])({components:{}})],O);var w=O,j=w,_=(n("fad9"),Object(c["a"])(j,p,f,!1,null,"05590eae",null)),y=_.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{staticClass:"main_canvas"})])}],I=(n("96cf"),n("3b8d")),R=function(){function e(){Object(h["a"])(this,e)}return Object(v["a"])(e,[{key:"lennner",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.querySelector(e);if(!n)return null;var a=n.getContext("2d");return a?new Promise(function(e,r){var i=new Image;i.crossOrigin="Anonymous",i.src=""!=t?t:"./lenna.png",i.onload=function(){a.clearRect(0,0,i.width,i.height),n.width=i.width,n.height=i.height,a.drawImage(i,0,0);var t=a.getImageData(0,0,n.width,n.height);e({canvas:n,context:a,imgData:t,pixels:t.data,width:n.width,height:n.height})},i.onerror=function(){return r(null)}}):null}}]),e}(),C=R,E=function(e){function t(){return Object(h["a"])(this,t),Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(v["a"])(t,[{key:"mounted",value:function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new C,e.next=3,t.lennner(".main_canvas");case 3:if(n=e.sent,n){e.next=6;break}return e.abrupt("return");case 6:for(a=0;a<n.height;a++)for(r=0;r<n.width;r++)i=4*(a*n.width+r),n.pixels[i+0]=n.pixels[i+0],n.pixels[i+1]=n.pixels[i+1],n.pixels[i+2]=n.pixels[i+2],n.pixels[i+3]=255;n.context.putImageData(n.imgData,0,0);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(x["b"]);E=g["a"]([Object(x["a"])({components:{}})],E);var D=E,$=D,z=Object(c["a"])($,k,S,!1,null,"5f87b3c4",null),M=z.exports,K=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nega"},[n("canvas",{staticClass:"main_canvas"})])}],V=function(e){function t(){return Object(h["a"])(this,t),Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(v["a"])(t,[{key:"mounted",value:function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new C,e.next=3,t.lennner(".main_canvas");case 3:if(n=e.sent,n){e.next=6;break}return e.abrupt("return");case 6:for(a=0;a<n.height;a++)for(r=0;r<n.width;r++)i=4*(a*n.width+r),n.pixels[i+0]=255-n.pixels[i+0],n.pixels[i+1]=255-n.pixels[i+1],n.pixels[i+2]=255-n.pixels[i+2],n.pixels[i+3]=255;n.context.putImageData(n.imgData,0,0);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(x["b"]);V=g["a"]([Object(x["a"])({components:{}})],V);var N=V,T=N,q=Object(c["a"])(T,K,P,!1,null,"4fb16345",null),A=q.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{staticClass:"main_canvas"})])}],G=function(e){function t(){return Object(h["a"])(this,t),Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(v["a"])(t,[{key:"mounted",value:function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,i,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new C,e.next=3,t.lennner(".main_canvas");case 3:if(n=e.sent,n){e.next=6;break}return e.abrupt("return");case 6:for(a=0;a<n.height;a++)for(r=0;r<n.width;r++)i=4*(a*n.width+r),c=(Math.max(n.pixels[i+0],n.pixels[i+1],n.pixels[i+2])+Math.min(n.pixels[i+0],n.pixels[i+1],n.pixels[i+2]))/2,n.pixels[i+0]=c,n.pixels[i+1]=c,n.pixels[i+2]=c,n.pixels[i+3]=255;n.context.putImageData(n.imgData,0,0);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(x["b"]);G=g["a"]([Object(x["a"])({components:{}})],G);var J=G,L=J,H=Object(c["a"])(L,F,W,!1,null,"a833222c",null),B=H.exports,Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{staticClass:"main_canvas"})])}],X=function(e){function t(){return Object(h["a"])(this,t),Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(v["a"])(t,[{key:"mounted",value:function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,i,c,s,u,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new C,e.next=3,t.lennner(".main_canvas");case 3:if(n=e.sent,n){e.next=6;break}return e.abrupt("return");case 6:for(a=0,0,r=0;r<n.height;r++)for(i=0;i<n.width;i++)c=4*(r*n.width+i),a+=n.pixels[c+1],0;for(a/=n.height*n.width,s=0;s<n.height;s++)for(u=0;u<n.width;u++)o=4*(s*n.width+u),n.pixels[o+0]=n.pixels[o+1]>a?255:0,n.pixels[o+1]=n.pixels[o+1]>a?255:0,n.pixels[o+2]=n.pixels[o+1]>a?255:0,n.pixels[o+3]=255;n.context.putImageData(n.imgData,0,0);case 12:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(x["b"]);X=g["a"]([Object(x["a"])({components:{}})],X);var Y=X,Z=Y,ee=Object(c["a"])(Z,Q,U,!1,null,"3d489b18",null),te=ee.exports,ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{staticClass:"main_canvas"})])}],re=function(){function e(){Object(h["a"])(this,e)}return Object(v["a"])(e,[{key:"convolve2d",value:function(e,t){for(var n=e.context.createImageData(e.width,e.height),a=4,r=0;r<e.height;r++)for(var i=0;i<e.width;i++){var c=(r*e.width+i)*a;n.data[c+0]=this.patchKernel(e,i,r,t,a,0),n.data[c+1]=this.patchKernel(e,i,r,t,a,1),n.data[c+2]=this.patchKernel(e,i,r,t,a,2),n.data[c+3]=255}return n}},{key:"patchKernel",value:function(e,t,n,a,r,i){for(var c=0,s=Math.floor(a.length/2),u=-s;u<a.length-s;u++)for(var o=0;o<a[0].length;o++){var l=((n+u)*e.width+t)*r;c+=isNaN(e.pixels[l+i+r*u]*a[u+1][o])?0:e.pixels[l+i+r*u]*a[u+1][o]}return c}}]),e}(),ie=re,ce=function(e){function t(){return Object(h["a"])(this,t),Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(v["a"])(t,[{key:"mounted",value:function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new C,e.next=3,t.lennner(".main_canvas");case 3:if(n=e.sent,n){e.next=6;break}return e.abrupt("return");case 6:a=[[21/256,31/256,21/256],[31/256,.1875,31/256],[21/256,31/256,21/256]],r=new ie,n.context.putImageData(r.convolve2d(n,a),0,0);case 9:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(x["b"]);ce=g["a"]([Object(x["a"])({components:{}})],ce);var se=ce,ue=se,oe=Object(c["a"])(ue,ne,ae,!1,null,"48bdfe8e",null),le=oe.exports,pe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},fe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{staticClass:"main_canvas"})])}],he=function(e){function t(){return Object(h["a"])(this,t),Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(v["a"])(t,[{key:"mounted",value:function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new C,e.next=3,t.lennner(".main_canvas");case 3:if(n=e.sent,n){e.next=6;break}return e.abrupt("return");case 6:a=[[0,-1,0],[-1,4,-1],[0,-1,0]],r=new ie,n.context.putImageData(r.convolve2d(n,a),0,0);case 9:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(x["b"]);he=g["a"]([Object(x["a"])({components:{}})],he);var ve=he,me=ve,be=Object(c["a"])(me,pe,fe,!1,null,"6420be16",null),de=be.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sharping"},[n("canvas",{staticClass:"main_canvas"}),n("label",[e._v("K: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.kValue,expression:"kValue"}],attrs:{type:"number",minlength:"1"},domProps:{value:e.kValue},on:{input:function(t){t.target.composing||(e.kValue=t.target.value)}}})])},xe=[],Oe=function(e){function t(){var e;return Object(h["a"])(this,t),e=Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments)),e.kValue=9,e}return Object(d["a"])(t,e),Object(v["a"])(t,[{key:"onChange",value:function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new C,e.next=3,t.lennner(".main_canvas");case 3:if(n=e.sent,n){e.next=6;break}return e.abrupt("return");case 6:a=new ie,r=this.getKernel(this.kValue),n.context.putImageData(a.convolve2d(n,r),0,0);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new C,e.next=3,t.lennner(".main_canvas");case 3:if(n=e.sent,n){e.next=6;break}return e.abrupt("return");case 6:a=new ie,r=this.getKernel(this.kValue),n.context.putImageData(a.convolve2d(n,r),0,0);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getKernel",value:function(e){return[[-e/9,-e/9,-e/9],[-e/9,1+8*e/9,-e/9],[-e/9,-e/9,-e/9]]}}]),t}(x["b"]);g["a"]([Object(x["c"])("kValue")],Oe.prototype,"onChange",null),Oe=g["a"]([Object(x["a"])({components:{}})],Oe);var we=Oe,je=we,_e=(n("f748"),Object(c["a"])(je,ge,xe,!1,null,"48ae514e",null)),ye=_e.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"self-filter"},[n("canvas",{staticClass:"main_canvas"}),n("p",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[e._v("Proccessing..")]),n("label",[e._v("filter size: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filterSize,expression:"filterSize"}],attrs:{type:"number",min:"3",step:"2"},domProps:{value:e.filterSize},on:{input:function(t){t.target.composing||(e.filterSize=t.target.value)}}}),n("div",{staticClass:"matrixes",style:"width: "+e.matrixWidth+"px"},e._l(e.fields,function(t,a){return n("input",{key:t+"_"+a,staticClass:"column",attrs:{type:"number",name:"matrix[]"},domProps:{value:t},on:{change:e.onMatrixChange}})}),0)])},Se=[],Ie=(n("ac6a"),n("6c7b"),function(e){function t(){var e;return Object(h["a"])(this,t),e=Object(m["a"])(this,Object(b["a"])(t).apply(this,arguments)),e.loading=!1,e}return Object(d["a"])(t,e),Object(v["a"])(t,[{key:"onFilterSize",value:function(){this.matrixWidth=100*parseInt("".concat(this.filterSize))+6*parseInt("".concat(this.filterSize)),this.fields=new Array(parseInt("".concat(this.filterSize))*parseInt("".concat(this.filterSize))).fill(0)}},{key:"beforeMount",value:function(){this.filterSize=3,this.fields=[-1,-1,-1,-1,9,-1,-1,-1,-1],this.matrixWidth=100*parseInt("".concat(this.filterSize))+6*parseInt("".concat(this.filterSize))}},{key:"mounted",value:function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new C,e.next=3,t.lennner(".main_canvas");case 3:if(n=e.sent,n){e.next=6;break}return e.abrupt("return");case 6:a=new ie,r=this.getKernel(this.fields),n.context.putImageData(a.convolve2d(n,r),0,0);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"onMatrixChange",value:function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,i,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new C,e.next=3,t.lennner(".main_canvas");case 3:if(n=e.sent,n){e.next=6;break}return e.abrupt("return");case 6:a=document.querySelectorAll(".column"),r=[],a.forEach(function(e){return r.push(parseInt(e.value))}),i=new ie,c=this.getKernel(r),n.context.putImageData(i.convolve2d(n,c),0,0);case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getKernel",value:function(e){for(var t=[],n=e.length,a=Math.sqrt(n),r=0;r<n;r++)r%a===0&&t.push([]),t[Math.floor(r/a)][r%a]=e[r];return t}}]),t}(x["b"]));g["a"]([Object(x["c"])("filterSize")],Ie.prototype,"onFilterSize",null),Ie=g["a"]([Object(x["a"])({components:{}})],Ie);var Re=Ie,Ce=Re,Ee=(n("c45d"),Object(c["a"])(Ce,ke,Se,!1,null,"326a7c8d",null)),De=Ee.exports;a["default"].use(l["a"]);var $e=new l["a"]({mode:"history",base:"/image-processing-ts-demo/",routes:[{path:"/",name:"home",component:y,children:[{path:"/lenna",name:"lenna",component:M},{path:"/nega",name:"nega",component:A},{path:"/grayscale",name:"grayscale",component:B},{path:"/thresholding",name:"thresholding",component:te},{path:"/gaussian",name:"gaussian",component:le},{path:"/laplacian",name:"laplacian",component:de},{path:"/sharping",name:"sharping",component:ye},{path:"/self-filter",name:"self-filter",component:De}]}]});a["default"].config.productionTip=!1,new a["default"]({router:$e,render:function(e){return e(o)}}).$mount("#app")},f748:function(e,t,n){"use strict";var a=n("4079"),r=n.n(a);r.a},fad9:function(e,t,n){"use strict";var a=n("5209"),r=n.n(a);r.a}});
//# sourceMappingURL=app.468cd066.js.map