parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"p7kT":[function(require,module,exports) {
function e(e,n){var l="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!l){if(Array.isArray(e)||(l=t(e))||n&&e&&"number"==typeof e.length){l&&(e=l);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,i=!1;return{s:function(){l=l.call(e)},n:function(){var e=l.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==l.return||l.return()}finally{if(i)throw o}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var l=document.querySelector("#icon-open"),r=document.querySelector("#icon-close"),c=document.querySelector("nav");l.addEventListener("click",function(){c.style.transform="translateX(0%)"}),r.addEventListener("click",function(){c.style.transform="translateX(-100%)"});var o=document.querySelector("#next"),a=document.querySelector("#previous"),i=document.querySelector("#carousel__image__container"),s=0;o.addEventListener("click",function(){s+=100,i.style.transform="translateX(-".concat(s,"%)"),a.style.display="block",300===s&&(o.style.display="none")}),a.addEventListener("click",function(){s-=100,i.style.transform="translateX(-".concat(s,"%)"),o.style.display="block",0===s&&(a.style.display="none")});var d=document.querySelectorAll(".carousel_thumbnail");d.forEach(function(t){t.addEventListener("click",function(){d.forEach(function(e){e.classList.remove("selected_thumbnail")}),t.classList.add("selected_thumbnail");var n,l=e(i.children);try{for(l.s();!(n=l.n()).done;){n.value.style.display="none"}}catch(r){l.e(r)}finally{l.f()}i.children[t.dataset.id].style.display="block"})});var u=document.querySelector("#modal"),y=document.querySelector(".modal-images"),m=document.querySelectorAll(".modal_carousel_thumbnail"),f=document.querySelector("#modal_icon-close"),b=document.querySelector("#modal_next"),p=document.querySelector("#modal_previous"),v=0;function _(e){0===e?(b.style.display="block",p.style.display="none"):3===e?(b.style.display="none",p.style.display="block"):(b.style.display="block",p.style.display="block")}i.addEventListener("click",function(){u.style.display="block"}),f.addEventListener("click",function(){u.style.display="none"}),m.forEach(function(t){t.addEventListener("click",function(){m.forEach(function(e){e.classList.remove("modal_selected_thumbnail")}),t.classList.add("modal_selected_thumbnail");var n,l=e(y.children);try{for(l.s();!(n=l.n()).done;){n.value.style.display="none"}}catch(r){l.e(r)}finally{l.f()}y.children[t.dataset.id].style.display="block",_(v=Number(t.dataset.id))})}),b.addEventListener("click",function(){v+=1,m.forEach(function(e){e.classList.remove("modal_selected_thumbnail")}),m[v].classList.add("modal_selected_thumbnail");var t,n=e(y.children);try{for(n.s();!(t=n.n()).done;){t.value.style.display="none"}}catch(l){n.e(l)}finally{n.f()}y.children[v].style.display="block",p.style.display="block",_(v)}),p.addEventListener("click",function(){v-=1,m.forEach(function(e){e.classList.remove("modal_selected_thumbnail")}),m[v].classList.add("modal_selected_thumbnail");var t,n=e(y.children);try{for(n.s();!(t=n.n()).done;){t.value.style.display="none"}}catch(l){n.e(l)}finally{n.f()}y.children[v].style.display="block",b.style.display="block",_(v)});var h=document.querySelector("#cart__icon"),L=document.querySelector("#cart");cart__icon.addEventListener("click",function(){"block"===L.style.display?L.style.display="none":L.style.display="block"});var k=document.querySelector("#minus"),S=document.querySelector("#plus"),q=document.querySelector("#count");S.addEventListener("click",function(){q.innerHTML=Number(q.innerHTML)+1}),k.addEventListener("click",function(){0!==Number(q.innerHTML)&&(q.innerHTML=Number(q.innerHTML)-1)});var E=document.querySelector("#add_to_cart__button"),M=document.querySelector("#cart_checkout__button"),T=document.querySelector("#cart_item"),H=document.querySelector("#cart_empty__message"),g=document.querySelector("#cart_delete__button"),A=document.querySelector("#item_count"),N=document.querySelector("#cart_total"),w=document.querySelector("#cart__notification");E.addEventListener("click",function(){Number(q.innerHTML)>0&&(H.style.display="none",T.style.display="flex",M.style.display="block",w.style.display="block",w.innerHTML=q.innerHTML,A.innerHTML=q.innerHTML,N.innerHTML="$".concat(125*Number(q.innerHTML),".00"))}),g.addEventListener("click",function(){H.style.display="block",T.style.display="none",M.style.display="none",w.style.display="none"});
},{}]},{},["p7kT"], null)
//# sourceMappingURL=/script.0cf97bd7.js.map