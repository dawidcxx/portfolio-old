!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;e>h.top&&e<h.bot?(g.classList.add("active"),m.classList.add("active")):(g.classList.remove("active"),m.classList.remove("active"))}n(1),n(5),n(7),n(9),n(11),n(13),n(15),n(17),n(21),n(22),n(23),n(24),n(25),n(28);var r=n(19),i=document.getElementById("landing"),a=document.getElementById("aboutme"),c=(document.getElementById("contact"),document.getElementById("work")),l=document.querySelectorAll('[role="scroll-to-top"]'),u=document.querySelectorAll('[role="scroll-to-about"]'),s=document.querySelectorAll('[role="scroll-to-projects"]'),d=document.querySelectorAll('[role="scroll-to-contacts"]');[].forEach.call(l,function(e){e.addEventListener("click",function(e){(0,r.scrollToY)(0,300)})}),[].forEach.call(u,function(e){e.addEventListener("click",function(e){var t=i.getClientRects()[0].height;(0,r.scrollToY)(t,300)})}),[].forEach.call(s,function(e){e.addEventListener("click",function(e){var t=i.getClientRects()[0].height,n=a.getClientRects()[0].height,o=t+n;(0,r.scrollToY)(o,300)})}),[].forEach.call(d,function(e){e.addEventListener("click",function(e){var t=i.getClientRects()[0].height,n=a.getClientRects()[0].height,o=c.getClientRects()[0].height,l=t+n+o;(0,r.scrollToY)(l,300)})}),window.addEventListener("scroll",o);var f={landing:document.getElementById("landing").getBoundingClientRect(),aboutMe:document.getElementById("aboutme").getBoundingClientRect(),work:document.getElementById("work").getBoundingClientRect()},m=document.getElementById("aboutme-portrait-description-title-openbracket"),g=document.getElementById("aboutme-portrait-description-title-closebracket"),h={top:f.landing.height-100,bot:f.landing.height+f.aboutMe.height-(window.innerWidth>600?600:900)};o()},function(e,t){},,,,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(18),i=o(r),a=n(20),c=window.innerWidth,l=window.innerHeight>600?window.innerHeight:600,u=document.getElementById("landing-bg"),s=document.createElement("video"),d=document.createElement("source");d.src="./background.mp4",d.type="video/mp4",s.appendChild(d),s.width=c,s.height=l,s.loop=!0,s.style.background="#333",s.style.objectFit="fill","objectFit"in document.body.style?u.appendChild(s):!function(){var e=document.createElement("canvas");e.width=c,e.height=l;var t=e.getContext("2d"),n=null,o=function r(){t.drawImage(n,0,0,c,l),(0,a.RAF)(r)};s.addEventListener("play",function(e){n=this,o()}),s.style.display="none",document.body.appendChild(s),u.appendChild(e)}(),s.play(),(0,i["default"])(u,c,l-150,6,!1)},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t,n,o,r){var i=document.createElement("canvas"),u=i.getContext("2d");i.width=t,i.height=n;for(var s=Math.floor((i.width+i.height)/o),d=[],f=[],m=0;s>m;m++){for(var g=new c({x:(0,a.randInt)(0,i.width),y:(0,a.randInt)(0,i.height)}),h=0;h<d.length;h++){var p=Math.floor(d[h].distance(g));u.globalAlpha=o/p,50>p&&(f.push(new l(d[h],g,{color:Math.random()<.2?(0,a.randCol)():"white"})),f[f.length-1].draw(u))}d.push(g)}r?(console.log("hey"),e.style.backgroundPosition="0 100%",e.style.backgroundImage='url("'+i.toDataURL()+'")'):e.appendChild(i)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t["default"]=r;var a=n(19),c=function(){function e(t){var n=t.x,r=t.y;o(this,e),this.x=n,this.y=r}return i(e,[{key:"distance",value:function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))}},{key:"draw",value:function(e){e.beginPath(),e.arc(this.x,this.y,3,0,2*Math.PI,!1),e.fillStyle="black",e.fill()}}]),e}(),l=function(){function e(t,n,r){var i=r.color;o(this,e),this.A=t,this.B=n,this.color=i||"black"}return i(e,[{key:"draw",value:function(e){e.beginPath(),e.strokeStyle=this.color,e.moveTo(this.A.x,this.A.y),e.lineTo(this.B.x,this.B.y),e.stroke()}}]),e}()},function(e,t,n){"use strict";function o(e){return"string"!=typeof e&&(e=JSON.stringify(e,void 0,2)),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),'<span class="'+t+'">'+e+"</span>"})}function r(e,t){var n="☆",o="★";if(t=t||5,"number"!=typeof e)throw new Error("#starify: first argument is requierd and must be a valid number");for(var r="",i=0;t>i;i++)r+=i>=e?n:o;return r}function i(e,t,n){function o(){i+=1/60;var t=i/c,u=l[n](t);1>t?((0,a.RAF)(o),window.scrollTo(0,r+(e-r)*u)):window.scrollTo(0,e)}var r=window.scrollY,e=e||0,t=t||2e3,n=n||"easeOutSine",i=0,c=Math.max(.1,Math.min(Math.abs(r-e)/t,.8)),l=(Math.PI/2,{easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}});o()}Object.defineProperty(t,"__esModule",{value:!0}),t.HTTP=t.randCol=t.randInt=t.range=void 0,t.syntaxHighlight=o,t.starify=r,t.scrollToY=i;var a=n(20);t.range=function(e){return Array.apply(null,Array(e)).map(function(e,t){return t})},t.randInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},t.randCol=function(){return"#"+(16777215*Math.random()<<0).toString(16)},t.HTTP={post:function(e,t,n){var o=new XMLHttpRequest;o.open("POST",e,!0),o.setRequestHeader("Content-Type","application/json; charset=UTF-8"),o.send(JSON.stringify(t)),o.onreadystatechange=function(){4==o.readyState&&o.status>200&&o.status<300?n(null,{data:o.responseText,code:o.status}):4==o.readyState&&o.status>=400&&n({data:o.responseText,code:o.status})}},head:function(e,t){var n=new XMLHttpRequest;n.open("HEAD",e,!0),n.onreadystatechange=function(){this.readyState==this.DONE&&t(404!=this.status)}}}},function(e,t){"use strict";function n(e,t){function n(){var a=(new Date).getTime(),c=a-r;c>=t?e.call():i.value=o(n)}if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setTimeout(e,t);var r=(new Date).getTime(),i=new Object;return i.value=o(n),i}Object.defineProperty(t,"__esModule",{value:!0}),t.requestTimeout=n;var o=t.RAF=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}()},function(e,t,n){"use strict";function o(e){u?(l.style.display="none",u=!1):(l.style.display="inline",u=!0),(0,i.requestTimeout)(o,500)}function r(){if(m){for(var e=c.innerHTML.length-1,t=0;e>t;t++)(0,i.requestTimeout)(s,100*t);m=!1,f++,setTimeout(r,100*e+500)}else{var n=a[f];if(!n)return;for(var e=n.length,o=function(e){(0,i.requestTimeout)(function(){return d(n[e])},100*e)},l=0;e>l;l++)o(l);m=!0,a[f+1]&&setTimeout(r,100*e+1500)}}var i=n(20),a=["developer","designer","human❤"],c=(document.getElementById("landing-heading-bullshit"),document.getElementById("landing-heading-bullshit-content")),l=document.getElementById("landing-heading-bullshit-blinky"),u=!0;(0,i.RAF)(o);var s=function(){return c.innerHTML=c.innerHTML.slice(0,-1)},d=function(e){return c.innerHTML+=e},f=0,m=!0;setTimeout(r,3e3)},function(e,t,n){"use strict";var o=n(19),r=document.getElementById("landing-call-to-action"),i=document.getElementById("landing");r.addEventListener("click",function(){var e=i.getBoundingClientRect().height;(0,o.scrollToY)(e,600)})},function(e,t,n){"use strict";function o(e){var t=Date.now()-e.getTime(),n=new Date(t);return Math.abs(n.getUTCFullYear()-1970)}var r=n(19),i=JSON.stringify({firstName:"Dawid",secondName:"Czarnik",age:o(new Date("1995-07-21T00:00:00+00:00")),knows:{general:["HTML5/CSS3","latest ES6/7 JS","basic PHP","OOP patterns","functional programming techniques","basic SQL"],frameworks:{frontEnd:["react + flux(redux)","angular 1.X","bootstrap"],backEnd:["koa","express","laravel"]},tooling:["webpack(babel loader❤)","gulp","npm / composer"],other:["jquery","bookshelf / eloquent","socket.io"]}},null,2),a=document.getElementById("aboutme-details-view-json"),c=document.createElement("pre");c.innerHTML=(0,r.syntaxHighlight)(i),a.appendChild(c)},function(e,t){"use strict"},function(e,t,n){"use strict";function o(e){e.classList.add("active")}function r(e){return function(t){m.disabled=!1,m.innerText="send",t.preventDefault(),e.classList.remove("active")}}var i=n(19),a=Object.keys||n(26),c="https://mighty-taiga-50462.herokuapp.com/sendmail",l=document.getElementById("contact-left"),u=document.getElementById("contact-left-overlay-success"),s=document.querySelector("#contact-left-overlay-success-button-group > button"),d=document.getElementById("contact-left-overlay-failure"),f=document.querySelector("#contact-left-overlay-failure-button-group > button"),m=document.querySelector('#contact-left button[type="submit"]'),g={fname:document.getElementById("contact-left-form-fname"),lname:document.getElementById("contact-left-form-lname"),email:document.getElementById("contact-left-form-email"),message:document.getElementById("contact-left-form-message")};setTimeout(function(){return i.HTTP.head(c)},1e3),l.addEventListener("submit",function(e){e.preventDefault();var t={firstName:g.fname.value,lastName:g.lname.value,email:g.email.value,message:g.message.value};a(g).forEach(function(e){return g[e].value=""}),i.HTTP.post(c,t,function(e,t){e?(o(d),console.log(e)):(o(u),console.log(t)),m.disabled=!0,m.innerText="send"}),m.disabled=!0,m.innerText="sending.."}),s.addEventListener("click",r(u)),f.addEventListener("click",r(d))},function(e,t,n){"use strict";var o=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Array.prototype.slice,a=n(27),c=!{toString:null}.propertyIsEnumerable("toString"),l=function(){}.propertyIsEnumerable("prototype"),u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],s=function(e){var t=e.constructor;return t&&t.prototype===e},d={$console:!0,$frame:!0,$frameElement:!0,$frames:!0,$parent:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!d["$"+e]&&o.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{s(window[e])}catch(t){return!0}}catch(t){return!0}return!1}(),m=function(e){if("undefined"==typeof window||!f)return s(e);try{return s(e)}catch(t){return!1}},g=function(e){var t=null!==e&&"object"==typeof e,n="[object Function]"===r.call(e),i=a(e),s=t&&"[object String]"===r.call(e),d=[];if(!t&&!n&&!i)throw new TypeError("Object.keys called on a non-object");var f=l&&n;if(s&&e.length>0&&!o.call(e,0))for(var g=0;g<e.length;++g)d.push(String(g));if(i&&e.length>0)for(var h=0;h<e.length;++h)d.push(String(h));else for(var p in e)f&&"prototype"===p||!o.call(e,p)||d.push(String(p));if(c)for(var y=m(e),v=0;v<u.length;++v)y&&"constructor"===u[v]||!o.call(e,u[v])||d.push(u[v]);return d};g.shim=function(){if(Object.keys){var e=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!e){var t=Object.keys;Object.keys=function(e){return t(a(e)?i.call(e):e)}}}else Object.keys=g;return Object.keys||g},e.exports=g},function(e,t){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),o="[object Arguments]"===t;return o||(o="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),o}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(18),i=o(r),a=window.innerWidth,c=200;(0,i["default"])(document.getElementById("footer"),a,c,7,!0)}]);