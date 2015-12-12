!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";function o(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t>s.top&&t<s.bot?(c.classList.add("active"),u.classList.add("active")):(c.classList.remove("active"),u.classList.remove("active"))}n(1),n(5),n(7),n(9),n(11),n(13),n(15),n(17),n(20),n(21),n(22),n(23);var i=n(18),r=document.querySelectorAll('[role="scroll-to-top"]'),a=document.querySelectorAll('[role="scroll-to-about"]');document.querySelectorAll('[role="scroll-to-projects"]'),document.querySelectorAll('[role="scroll-to-contacts"]');[].forEach.call(r,function(t){t.addEventListener("click",function(t){(0,i.scrollToY)(0,300)})}),[].forEach.call(a,function(t){t.addEventListener("click",function(t){var e=document.getElementById("landing").getClientRects()[0].height;(0,i.scrollToY)(e,300)})}),window.addEventListener("scroll",o);var l={landing:document.getElementById("landing").getBoundingClientRect(),aboutMe:document.getElementById("aboutme").getBoundingClientRect(),work:document.getElementById("work").getBoundingClientRect()},u=document.getElementById("aboutme-portrait-description-title-openbracket"),c=document.getElementById("aboutme-portrait-description-title-closebracket"),s={top:l.landing.height-100,bot:l.landing.height+l.aboutMe.height-(window.innerWidth>600?600:900)};o()},function(t,e){},,,,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=n(18),a=document.getElementById("landing-bg"),l=document.createElement("canvas"),u=l.getContext("2d");l.width=window.innerWidth,l.height=window.innerHeight>600?window.innerHeight:600;for(var c=function(){function t(e){var n=e.x,i=e.y;o(this,t),this.x=n,this.y=i}return i(t,[{key:"distance",value:function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}},{key:"draw",value:function(t){t.beginPath(),t.arc(this.x,this.y,3,0,2*Math.PI,!1),t.fillStyle="black",t.fill()}}]),t}(),s=function(){function t(e,n,i){var r=i.color;o(this,t),this.A=e,this.B=n,this.color=r||"black"}return i(t,[{key:"draw",value:function(t){t.beginPath(),t.strokeStyle=this.color,t.moveTo(this.A.x,this.A.y),t.lineTo(this.B.x,this.B.y),t.stroke()}}]),t}(),d=window.innerWidth>700?Math.floor((l.width+l.height)/2):Math.floor((l.width+l.height)/4),m=[],f=[],h=0;d>h;h++){for(var g=new c({x:(0,r.randInt)(0,l.width),y:(0,r.randInt)(0,l.height)}),w=0;w<m.length;w++){var p=Math.floor(m[w].distance(g));u.globalAlpha=7/p,75>p&&(f.push(new s(m[w],g,{color:Math.random()<.2?(0,r.randCol)():"white"})),f[f.length-1].draw(u))}m.push(g)}a.appendChild(l)},function(t,e,n){"use strict";function o(t){return"string"!=typeof t&&(t=JSON.stringify(t,void 0,2)),t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),t.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(t){var e="number";return/^"/.test(t)?e=/:$/.test(t)?"key":"string":/true|false/.test(t)?e="boolean":/null/.test(t)&&(e="null"),'<span class="'+e+'">'+t+"</span>"})}function i(t,e){var n="☆",o="★";if(e=e||5,"number"!=typeof t)throw new Error("#starify: first argument is requierd and must be a valid number");for(var i="",r=0;e>r;r++)i+=r>=t?n:o;return i}function r(t,e,n){function o(){r+=1/60;var e=r/l,c=u[n](e);1>e?((0,a.RAF)(o),window.scrollTo(0,i+(t-i)*c)):window.scrollTo(0,t)}var i=window.scrollY,t=t||0,e=e||2e3,n=n||"easeOutSine",r=0,l=Math.max(.1,Math.min(Math.abs(i-t)/e,.8)),u=(Math.PI/2,{easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)}});o()}Object.defineProperty(e,"__esModule",{value:!0}),e.randCol=e.randInt=e.range=void 0,e.syntaxHighlight=o,e.starify=i,e.scrollToY=r;var a=n(19);e.range=function(t){return Array.apply(null,Array(t)).map(function(t,e){return e})},e.randInt=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},e.randCol=function(){return"#"+(16777215*Math.random()<<0).toString(16)}},function(t,e){"use strict";function n(t,e){function n(){var a=(new Date).getTime(),l=a-i;l>=e?t.call():r.value=o(n)}if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setTimeout(t,e);var i=(new Date).getTime(),r=new Object;return r.value=o(n),r}Object.defineProperty(e,"__esModule",{value:!0}),e.requestTimeout=n;var o=e.RAF=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}()},function(t,e,n){"use strict";function o(t){c?(u.style.display="none",c=!1):(u.style.display="inline",c=!0),(0,r.requestTimeout)(o,500)}function i(){if(f){for(var t=l.innerHTML.length-1,e=0;t>e;e++)(0,r.requestTimeout)(s,100*e);f=!1,m++,setTimeout(i,100*t+500)}else{var n=a[m];if(!n)return;for(var t=n.length,o=function(t){(0,r.requestTimeout)(function(){return d(n[t])},100*t)},u=0;t>u;u++)o(u);f=!0,a[m+1]&&setTimeout(i,100*t+1500)}}var r=n(19),a=["developer","designer","human❤"],l=(document.getElementById("landing-heading-bullshit"),document.getElementById("landing-heading-bullshit-content")),u=document.getElementById("landing-heading-bullshit-blinky"),c=!0;(0,r.RAF)(o);var s=function(){return l.innerHTML=l.innerHTML.slice(0,-1)},d=function(t){return l.innerHTML+=t},m=0,f=!0;setTimeout(i,3e3)},function(t,e,n){"use strict";var o=n(18),i=document.getElementById("landing-call-to-action"),r=document.getElementById("landing");i.addEventListener("click",function(){var t=r.getBoundingClientRect().height;(0,o.scrollToY)(t,600)})},function(t,e,n){"use strict";function o(t){var e=Date.now()-t.getTime(),n=new Date(e);return Math.abs(n.getUTCFullYear()-1970)}var i=n(18),r=JSON.stringify({firstName:"Dawid",secondName:"Czarnik",age:o(new Date("1995-07-21T00:00:00+00:00")),knows:{general:["HTML5/CSS3","latest ES6/7 JS","basic PHP","OOP patterns","functional programming techniques","basic SQL"],frameworks:{frontEnd:["react + flux(redux)","angular 1.X","bootstrap"],backEnd:["koa","express","laravel"]},tooling:["webpack(SASS & babel loaders)","gulp","npm / composer"],other:["jquery","momentjs(js) / carbon(php)","socket.io"]}},null,2),a=document.getElementById("aboutme-details-view-json"),l=document.createElement("pre");l.innerHTML=(0,i.syntaxHighlight)(r),a.appendChild(l)},function(t,e){"use strict"}]);