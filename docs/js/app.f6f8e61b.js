(function(e){function t(t){for(var n,s,u=t[0],c=t[1],o=t[2],h=0,v=[];h<u.length;h++)s=u[h],r[s]&&v.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(v.length)v.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,u=1;u<a.length;u++){var c=a[u];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/image-processing-ts-demo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},2925:function(e,t,a){},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=(a("5c0b"),a("2877")),u={},c=Object(s["a"])(u,r,i,!1,null,null,null),o=c.exports,l=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("ul",{staticClass:"nav"},[a("li",[a("router-link",{attrs:{to:"/"}},[e._v("HOME")]),a("router-link",{attrs:{to:"/nega"}},[e._v("Nega")]),a("router-link",{attrs:{to:"/grayscale"}},[e._v("GrayScale")]),a("router-link",{attrs:{to:"/thresholding"}},[e._v("Thresholding")]),a("router-link",{attrs:{to:"/gaussian"}},[e._v("Gaussian")]),a("router-link",{attrs:{to:"/laplacian"}},[e._v("Laplacian")]),a("router-link",{attrs:{to:"/sharping"}},[e._v("Sharping")]),a("router-link",{attrs:{to:"/bilateral"}},[e._v("Bilateral")]),a("router-link",{attrs:{to:"/mosaic"}},[e._v("Mosaic")]),a("router-link",{attrs:{to:"/pixel-art"}},[e._v("PixelArt")])],1)]),a("div",{staticClass:"main"},[a("canvas",{staticClass:"sample-canvas"}),a("router-view")],1)])},v=[],p=(a("96cf"),a("3b8d")),f=a("d225"),m=a("b0b4"),d=a("308d"),g=a("6bb5"),b=a("4e2b"),k=a("9ab4"),w=a("60a3"),O=function(){function e(){Object(f["a"])(this,e)}return Object(m["a"])(e,[{key:"lennner",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=document.querySelector(e);if(!a)return null;var n=a.getContext("2d");return n?new Promise(function(e,r){var i=new Image;i.crossOrigin="Anonymous",i.src=""!=t?t:"./lenna.png",i.onload=function(){n.clearRect(0,0,i.width,i.height),a.width=i.width,a.height=i.height,n.drawImage(i,0,0);var t=n.getImageData(0,0,a.width,a.height);e({canvas:a,context:n,imgData:t,pixels:t.data,width:a.width,height:a.height})},i.onerror=function(){return r(null)}}):null}}]),e}(),j=O,y=function(e){function t(){return Object(f["a"])(this,t),Object(d["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(b["a"])(t,e),Object(m["a"])(t,[{key:"mounted",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".sample-canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:for(n=0;n<a.height;n++)for(r=0;r<a.width;r++)i=4*(n*a.width+r),a.pixels[i+0]=a.pixels[i+0],a.pixels[i+1]=a.pixels[i+1],a.pixels[i+2]=a.pixels[i+2],a.pixels[i+3]=255;a.context.putImageData(a.imgData,0,0);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(w["b"]);y=k["a"]([Object(w["a"])({components:{}})],y);var x=y,_=x,S=(a("fa3a"),Object(s["a"])(_,h,v,!1,null,"24e5afcc",null)),z=S.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nega"},[a("canvas",{staticClass:"main_canvas"})])}],I=function(){function e(){Object(f["a"])(this,e)}return Object(m["a"])(e,[{key:"apply",value:function(e,t,a){for(var n=0;n<a;n++)for(var r=0;r<a;r++){var i=4*(n*t+r);e.data[i]=255-e.data[i],e.data[i+1]=255-e.data[i+1],e.data[i+2]=255-e.data[i+2],e.data[i+3]=255}return e}}]),e}(),M=I,R=function(e){function t(){return Object(f["a"])(this,t),Object(d["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(b["a"])(t,e),Object(m["a"])(t,[{key:"mounted",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:n=new M,r=n.apply(a.imgData,a.width,a.height),a.context.putImageData(r,0,0);case 9:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(w["b"]);R=k["a"]([Object(w["a"])({components:{}})],R);var V=R,E=V,$=Object(s["a"])(E,C,D,!1,null,"0e7da36c",null),P=$.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("canvas",{staticClass:"main_canvas"})])}],A=function(){function e(){Object(f["a"])(this,e)}return Object(m["a"])(e,[{key:"apply",value:function(e,t,a){for(var n=0;n<a;n++)for(var r=0;r<a;r++){var i=4*(n*t+r),s=(Math.max(e.data[i+0],e.data[i+1],e.data[i+2])+Math.min(e.data[i+0],e.data[i+1],e.data[i+2]))/2;e.data[i]=s,e.data[i+1]=s,e.data[i+2]=s,e.data[i+3]=255}return e}}]),e}(),X=A,T=function(e){function t(){return Object(f["a"])(this,t),Object(d["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(b["a"])(t,e),Object(m["a"])(t,[{key:"mounted",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:n=new X,r=n.apply(a.imgData,a.width,a.height),a.context.putImageData(r,0,0);case 9:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(w["b"]);T=k["a"]([Object(w["a"])({components:{}})],T);var Y=T,q=Y,K=Object(s["a"])(q,F,N,!1,null,"20803cf7",null),L=K.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("canvas",{staticClass:"main_canvas"})])}],U=function(){function e(){Object(f["a"])(this,e)}return Object(m["a"])(e,[{key:"apply",value:function(e,t,a){for(var n=0,r=0;r<a;r++)for(var i=0;i<t;i++){var s=4*(r*t+i);n+=e.data[s+1]}n/=a*t;for(var u=0;u<a;u++)for(var c=0;c<a;c++){var o=4*(u*t+c);e.data[o]=e.data[o+1]>n?255:0,e.data[o+1]=e.data[o+1]>n?255:0,e.data[o+2]=e.data[o+1]>n?255:0,e.data[o+3]=255}return e}}]),e}(),B=U,H=function(e){function t(){return Object(f["a"])(this,t),Object(d["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(b["a"])(t,e),Object(m["a"])(t,[{key:"mounted",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:n=new B,r=n.apply(a.imgData,a.width,a.height),a.context.putImageData(r,0,0);case 9:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(w["b"]);H=k["a"]([Object(w["a"])({components:{}})],H);var W=H,Q=W,Z=Object(s["a"])(Q,G,J,!1,null,"60236af0",null),ee=Z.exports,te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("canvas",{staticClass:"main_canvas"})])}],ne=(a("63d9"),function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.023,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;Object(f["a"])(this,e),this.sigma=t,this.w=a,this.h=n,this.centerX=Math.floor(this.w/2),this.centerY=Math.floor(this.h/2),this.kernel=new Float32Array(this.w*this.h);for(var r=0;r<this.h;r++)for(var i=0;i<this.w;i++)this.kernel[r*this.w+i]=this.get(Math.pow(i-this.centerX,2)+Math.pow(r-this.centerY,2))}return Object(m["a"])(e,[{key:"get",value:function(e){return Math.exp(-e/(2*Math.pow(this.sigma,2)))/(2*Math.PI*this.sigma)}},{key:"apply",value:function(e,t,a){var n=document.createElement("canvas"),r=n.getContext("2d");if(!r)return e;for(var i=r.createImageData(e.width,e.height),s=Math.floor(this.w/2),u=Math.floor(this.h/2),c=0;c<a;c++)for(var o=0;o<a;o++){for(var l=4*(c*t+o),h=0,v=0,p=0,f=-u;f<=u;f++)for(var m=-s;m<=s;m++){var d=4*((c+f)*t+(o+m));c+f>0&&o+m>0&&c+f<a&&o+m<t&&(h+=e.data[d]*this.kernel[(f+u)*this.w+(m+s)],v+=e.data[d+1]*this.kernel[(f+u)*this.w+(m+s)],p+=e.data[d+2]*this.kernel[(f+u)*this.w+(m+s)])}i.data[l]=h,i.data[l+1]=v,i.data[l+2]=p,i.data[l+3]=255}return i}}]),e}()),re=ne,ie=function(e){function t(){return Object(f["a"])(this,t),Object(d["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(b["a"])(t,e),Object(m["a"])(t,[{key:"mounted",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:n=new re,r=n.apply(a.imgData,a.width,a.height),a.context.putImageData(r,0,0);case 9:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(w["b"]);ie=k["a"]([Object(w["a"])({components:{}})],ie);var se=ie,ue=se,ce=Object(s["a"])(ue,te,ae,!1,null,"161a9cf4",null),oe=ce.exports,le=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},he=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("canvas",{staticClass:"main_canvas"})])}],ve=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;Object(f["a"])(this,e),this.kernelSize=t,this.kernel=[];for(var a=Math.floor(this.kernelSize/2),n=Math.floor(this.kernelSize*this.kernelSize/2),r=0;r<this.kernelSize;r++)for(var i=0;i<this.kernelSize;i++){var s=r*this.kernelSize+i;this.kernel[s]=s===n?-4*a:n-a<=s&&s<=n+a||i==a?1:0}}return Object(m["a"])(e,[{key:"apply",value:function(e,t,a){var n=document.createElement("canvas"),r=n.getContext("2d");if(!r)return e;for(var i=r.createImageData(e.width,e.height),s=Math.floor(this.kernelSize/2),u=0;u<a;u++)for(var c=0;c<a;c++){for(var o=4*(u*t+c),l=0,h=0,v=0,p=-s;p<=s;p++)for(var f=-s;f<=s;f++){var m=4*((u+p)*t+(c+f));u+p>=0&&c+f>=0&&u+p<=a&&c+f<=t&&(l+=e.data[m]*this.kernel[(p+s)*this.kernelSize+(f+s)],h+=e.data[m+1]*this.kernel[(p+s)*this.kernelSize+(f+s)],v+=e.data[m+2]*this.kernel[(p+s)*this.kernelSize+(f+s)])}i.data[o]=l,i.data[o+1]=h,i.data[o+2]=v,i.data[o+3]=255}return i}}]),e}(),pe=ve,fe=function(e){function t(){return Object(f["a"])(this,t),Object(d["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(b["a"])(t,e),Object(m["a"])(t,[{key:"mounted",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:n=new pe,r=n.apply(a.imgData,a.width,a.height),a.context.putImageData(r,0,0);case 9:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(w["b"]);fe=k["a"]([Object(w["a"])({components:{}})],fe);var me=fe,de=me,ge=Object(s["a"])(de,le,he,!1,null,"566a8f4a",null),be=ge.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sharping"},[a("canvas",{staticClass:"main_canvas"}),a("div",[a("label",[e._v("K: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.kValue,expression:"kValue"}],attrs:{type:"number",minlength:"1"},domProps:{value:e.kValue},on:{input:function(t){t.target.composing||(e.kValue=t.target.value)}}})])])},we=[],Oe=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;Object(f["a"])(this,e),this.kernelSize=a,this.kernel=[],this.k=t;for(var n=Math.floor(this.kernelSize*this.kernelSize/2),r=0;r<this.kernelSize;r++)for(var i=0;i<this.kernelSize;i++){var s=r*this.kernelSize+i;this.kernel[s]=s===n?1+this.k*(this.kernelSize*this.kernelSize-1)/(this.kernelSize*this.kernelSize):-this.k/(this.kernelSize*this.kernelSize)}}return Object(m["a"])(e,[{key:"apply",value:function(e,t,a){var n=document.createElement("canvas"),r=n.getContext("2d");if(!r)return e;for(var i=r.createImageData(e.width,e.height),s=Math.floor(this.kernelSize/2),u=0;u<a;u++)for(var c=0;c<a;c++){for(var o=4*(u*t+c),l=0,h=0,v=0,p=-s;p<=s;p++)for(var f=-s;f<=s;f++){var m=4*((u+p)*t+(c+f));u+p>0&&c+f>0&&u+p<a&&c+f<t&&(l+=e.data[m]*this.kernel[(p+s)*this.kernelSize+(f+s)],h+=e.data[m+1]*this.kernel[(p+s)*this.kernelSize+(f+s)],v+=e.data[m+2]*this.kernel[(p+s)*this.kernelSize+(f+s)])}i.data[o]=l,i.data[o+1]=h,i.data[o+2]=v,i.data[o+3]=255}return i}}]),e}(),je=Oe,ye=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(d["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.kValue=9,e}return Object(b["a"])(t,e),Object(m["a"])(t,[{key:"onChange",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:n=new je(this.kValue,3),r=n.apply(a.imgData,a.width,a.height),a.context.putImageData(r,0,0);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:n=new je(this.kValue,3),r=n.apply(a.imgData,a.width,a.height),a.context.putImageData(r,0,0);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(w["b"]);k["a"]([Object(w["c"])("kValue")],ye.prototype,"onChange",null),ye=k["a"]([Object(w["a"])({components:{}})],ye);var xe=ye,_e=xe,Se=Object(s["a"])(_e,ke,we,!1,null,"d1f569b2",null),ze=Se.exports,Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("canvas",{staticClass:"main_canvas"}),a("div",[a("label",[e._v("K: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.kValue,expression:"kValue"}],attrs:{type:"number",minlength:"1",maxlength:"255"},domProps:{value:e.kValue},on:{input:function(t){t.target.composing||(e.kValue=t.target.value)}}})])])},De=[],Ie=function(){function e(t,a,n){Object(f["a"])(this,e),this.sigma=t,this.w=a,this.h=n,this.gaussian=new re(this.sigma,this.w,this.h)}return Object(m["a"])(e,[{key:"apply",value:function(e,t,a){var n=document.createElement("canvas"),r=n.getContext("2d");if(!r)return e;for(var i=r.createImageData(e.width,e.height),s=2.04045,u=this.sigma/255*Math.sqrt(195075)/s,c=-.5/(u*u),o=0;o<a;o++)for(var l=0;l<t;l++){for(var h=4*(o*t+l),v=e.data[h],p=e.data[h+1],f=e.data[h+2],m=0,d=[0,0,0],g=-this.gaussian.centerY;g<=this.gaussian.centerY;g++)for(var b=-this.gaussian.centerX;b<=this.gaussian.centerX;b++)if(o+g>0&&l+b>0&&o+g<a&&l+b<t){var k=4*((o+g)*t+(l+b)),w=e.data[k],O=e.data[k+1],j=e.data[k+2],y=w-v,x=O-p,_=j-f,S=y*y+x*x+_*_,z=this.gaussian.kernel[(g+this.gaussian.centerY)*this.gaussian.w+(b+this.gaussian.centerX)]*Math.exp(S*c);m+=z,d[0]+=w*z,d[1]+=O*z,d[2]+=j*z}i.data[h]=d[0]/m,i.data[h+1]=d[1]/m,i.data[h+2]=d[2]/m,i.data[h+3]=255}return i}}]),e}(),Me=Ie,Re=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(d["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.kValue=80,e}return Object(b["a"])(t,e),Object(m["a"])(t,[{key:"onChange",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:n=new Me(this.kValue,7,7),r=n.apply(a.imgData,a.width,a.height),a.context.putImageData(r,0,0);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:n=new Me(this.kValue,7,7),r=n.apply(a.imgData,a.width,a.height),a.context.putImageData(r,0,0);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(w["b"]);k["a"]([Object(w["c"])("kValue")],Re.prototype,"onChange",null),Re=k["a"]([Object(w["a"])({components:{}})],Re);var Ve=Re,Ee=Ve,$e=Object(s["a"])(Ee,Ce,De,!1,null,"457af4f9",null),Pe=$e.exports,Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("canvas",{staticClass:"main_canvas"}),a("div",[a("label",[e._v("K: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.kValue,expression:"kValue"}],attrs:{type:"number",minlength:"1"},domProps:{value:e.kValue},on:{input:function(t){t.target.composing||(e.kValue=t.target.value)}}})])])},Ne=[],Ae=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;Object(f["a"])(this,e),this.kernelSize=t}return Object(m["a"])(e,[{key:"apply",value:function(e,t,a){for(var n=Math.floor(this.kernelSize/2),r=0;r<a;r+=this.kernelSize)for(var i=0;i<a;i+=this.kernelSize){for(var s=0,u=0,c=0,o=0,l=-n;l<=n;l++)for(var h=-n;h<=n;h++){var v=4*((r+l)*t+(i+h));r+l>0&&i+h>0&&r+l<a&&i+h<t&&(s+=e.data[v],u+=e.data[v+1],c+=e.data[v+2],o++)}for(var p=-n;p<=n;p++)for(var f=-n;f<=n;f++){var m=4*((r+p)*t+(i+f));r+p>0&&i+f>0&&r+p<a&&i+f<t&&(e.data[m]=s/o,e.data[m+1]=u/o,e.data[m+2]=c/o,e.data[m+3]=255)}}return e}}]),e}(),Xe=Ae,Te=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(d["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.kValue=5,e}return Object(b["a"])(t,e),Object(m["a"])(t,[{key:"onChange",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:n=new Xe(parseInt("".concat(this.kValue))),r=n.apply(a.imgData,a.width,a.height),a.context.putImageData(r,0,0);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:n=new Xe(parseInt("".concat(this.kValue))),r=n.apply(a.imgData,a.width,a.height),a.context.putImageData(r,0,0);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(w["b"]);k["a"]([Object(w["c"])("kValue")],Te.prototype,"onChange",null),Te=k["a"]([Object(w["a"])({components:{}})],Te);var Ye=Te,qe=Ye,Ke=Object(s["a"])(qe,Fe,Ne,!1,null,"3ebe815e",null),Le=Ke.exports,Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("canvas",{staticClass:"main_canvas"}),a("div",[a("label",[e._v("Frame: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.frame,expression:"frame"}],attrs:{type:"number",minlength:"1",maxlength:"50"},domProps:{value:e.frame},on:{input:function(t){t.target.composing||(e.frame=t.target.value)}}})]),a("div",[a("label",[e._v("Color: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.color,expression:"color"}],attrs:{type:"number",minlength:"1",maxlength:"255"},domProps:{value:e.color},on:{input:function(t){t.target.composing||(e.color=t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.runnable,expression:"!runnable"}]},[a("span",[e._v("[Warn] Frame has mod.")])])])},Je=[],Ue=(a("c5f6"),function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;Object(f["a"])(this,e),this.samples=t,this.ncluster=a}return Object(m["a"])(e,[{key:"run",value:function(){var e,t,a,n=[],r=[],i=[],s=[],u=this.samples.length,c=1e-8,o=1e3,l=0,h=[],v=0,p=Math.floor(Math.random()*u);for(n[0]=[],n[0][0]=this.samples[p][0],n[0][1]=this.samples[p][1],n[0][2]=this.samples[p][2],r[0]=[0,0,0],i[0]=[],t=1;t<this.ncluster;t++){for(v=0,a=0;a<u;a++)h[a]=this.nearest(this.samples[a],n)[1],v+=h[a];for(v*=Math.random(),a=0;a<u;a++)if(v-=h[a],!(v>0)){n[t]=[],n[t][0]=this.samples[a][0],n[t][1]=this.samples[a][1],n[t][2]=this.samples[a][2];break}r[t]=[0,0,0],i[t]=[]}for(a=0;a<u;a++)e=this.nearest(this.samples[a],n),i[e[0]].push(this.samples[a]);while(!this.canTerminate(n,r,c)&&l<o){l++;for(var f=0;f<this.ncluster;f++)if(i[f]&&i.length){for(var m=0,d=0,g=0,b=i[f].length,k=0;k<b;k++)m+=i[f][k][0],d+=i[f][k][1],g+=i[f][k][2];r[f][0]=n[f][0],r[f][1]=n[f][1],r[f][2]=n[f][2],n[f]=[m/b,d/b,g/b]}for(i=[],s=[],a=0;a<u;a++){var w=Number.MAX_VALUE,O=-1;for(t=0;t<this.ncluster;t++){var j=this.distance(n[t],this.samples[a]);j<w&&(w=j,O=t)}i[O]||(i[O]=[]),s[O]||(s[O]=[]),i[O].push(this.samples[a]),s[O].push(a)}}return{centroids:n,code:s}}},{key:"quantize",value:function(e,t,a){for(var n=t.length,r=0;r<n;r++)for(var i=0;i<a[r].length;i++)e[a[r][i]]=t[r];return e}},{key:"distance",value:function(e,t){var a=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return a*a+n*n+r*r}},{key:"nearest",value:function(e,t){for(var a=0,n=Number.MAX_VALUE,r=t.length,i=0;i<r;i++){var s=this.distance(t[i],e);n>s&&(n=s,a=i)}return[a,n]}},{key:"canTerminate",value:function(e,t,a){for(var n=0,r=0;r<this.ncluster;r++)this.distance(e[r],t[r])<a&&n++;return n===this.ncluster}}]),e}()),Be=Ue,He=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;Object(f["a"])(this,e),this.kernelSize=t,this.colorSize=a,this.features=[]}return Object(m["a"])(e,[{key:"apply",value:function(e){var t=document.createElement("canvas"),a=t.getContext("2d");if(!a)return e;var n=a.createImageData(e.width,e.height);this.getFeatures(e,e.width,e.height);for(var r=new Be(this.features,this.colorSize),i=r.run(),s=r.quantize(this.features,i.centroids,i.code),u=0,c=0;c<e.height;c+=this.kernelSize)for(var o=0;o<e.width;o+=this.kernelSize){for(var l=0;l<this.kernelSize;l++)for(var h=0;h<this.kernelSize;h++){var v=4*((c+l)*e.width+(o+h));n.data[v]=s[u][0],n.data[v+1]=s[u][1],n.data[v+2]=s[u][2],n.data[v+3]=255}u++}return n}},{key:"getFeatures",value:function(e,t,a){for(var n=0;n<a;n+=this.kernelSize)for(var r=0;r<a;r+=this.kernelSize){for(var i=0,s=0,u=0,c=0,o=0;o<this.kernelSize;o++)for(var l=0;l<this.kernelSize;l++){var h=4*((n+o)*t+(r+l));i+=e.data[h],s+=e.data[h+1],u+=e.data[h+2],c++}this.features.push([i/c,s/c,u/c])}return e}}]),e}(),We=He,Qe=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(d["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.frame=5,e.color=4,e.validFrames=[],e.runnable=!0,e}return Object(b["a"])(t,e),Object(m["a"])(t,[{key:"onFrameChange",value:function(){this.renderImage()}},{key:"onColorChange",value:function(){this.renderImage()}},{key:"mounted",value:function(){this.renderImage()}},{key:"renderImage",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new j,e.next=3,t.lennner(".main_canvas");case 3:if(a=e.sent,n=parseInt("".concat(this.frame)),r=parseInt("".concat(this.color)),a&&this.validate(a.width)){e.next=8;break}return e.abrupt("return");case 8:i=new We(n,r),s=i.apply(a.imgData),a.context.putImageData(s,0,0);case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"validate",value:function(e){if(0===this.validFrames.length)for(var t=0;t<50;t++)e%t===0&&this.validFrames.push(t);return-1===this.validFrames.indexOf(parseInt("".concat(this.frame)))?(this.runnable=!1,!1):(this.runnable=!0,!0)}}]),t}(w["b"]);k["a"]([Object(w["c"])("frame")],Qe.prototype,"onFrameChange",null),k["a"]([Object(w["c"])("color")],Qe.prototype,"onColorChange",null),Qe=k["a"]([Object(w["a"])({components:{}})],Qe);var Ze=Qe,et=Ze,tt=Object(s["a"])(et,Ge,Je,!1,null,"19a13fae",null),at=tt.exports;n["default"].use(l["a"]);var nt=new l["a"]({mode:"history",base:"/image-processing-ts-demo/",routes:[{path:"/",name:"home",component:z,children:[{path:"/nega",name:"nega",component:P},{path:"/grayscale",name:"grayscale",component:L},{path:"/thresholding",name:"thresholding",component:ee},{path:"/gaussian",name:"gaussian",component:oe},{path:"/laplacian",name:"laplacian",component:be},{path:"/sharping",name:"sharping",component:ze},{path:"/bilateral",name:"bilateral",component:Pe},{path:"/mosaic",name:"mosaic",component:Le},{path:"/pixel-art",name:"pixel-art",component:at}]}]});n["default"].config.productionTip=!1,new n["default"]({router:nt,render:function(e){return e(o)}}).$mount("#app")},fa3a:function(e,t,a){"use strict";var n=a("2925"),r=a.n(n);r.a}});
//# sourceMappingURL=app.f6f8e61b.js.map