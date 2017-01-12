!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}n(2);var o=n(3),a=i(o),r=n(6),s=i(r);(new a.default).init(),(new s.default).init()},function(e,t){},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(4),s=i(r),u=n(5),l=i(u),f=null,c=function(){function e(){var t=this;return o(this,e),f?f:(f=this,this.config=new s.default,this.nameCount=0,this.running=!1,this.stopSignal=!1,this.runner=null,l.default.resetBtn.addEventListener("click",function(e){!t.running&&confirm(l.default.resetBtn.dataset.confirm)&&t.init(!0)}),window.addEventListener("resize",function(e){var n=!0,i=!1,o=void 0;try{for(var a,r=l.default.nameNodes()[Symbol.iterator]();!(n=(a=r.next()).done);n=!0){var s=a.value;t.setNameSize(s)}}catch(e){i=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(i)throw o}}}),l.default.clickArea.addEventListener("click",this.clickHandler.bind(this)),void document.body.addEventListener("keyup",this.clickHandler.bind(this)))}return a(e,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.running=!1,this.stopSignal=!0;var n=!0,i=!1,o=void 0;try{for(var a,r=l.default.nameNodes()[Symbol.iterator]();!(n=(a=r.next()).done);n=!0){var s=a.value;s.parentNode.removeChild(s)}}catch(e){i=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(i)throw o}}this.config.lightTheme?l.default.wrapper.classList.add("light-theme"):l.default.wrapper.classList.remove("light-theme");var u=this.config.names.replace(/[\s\,、，]+/g,",").split(",");u=u.filter(function(e){return""!=e}),this.nameCount=u.length,t&&(this.config.nameRemovedIndexes=[],this.config.save()),u.forEach(function(t,n){var i=document.createElement("div");i.className="name",i.textContent=t,e.setNameSize(i),e.config.nameRemovedIndexes.indexOf(""+n)!=-1&&i.classList.add("disabled"),l.default.namesPanel.appendChild(i)}),this.nameCount<2?l.default.optionsBtn.classList.add("bouncing"):l.default.optionsBtn.classList.remove("bouncing")}},{key:"setNameSize",value:function(e){var t=Math.max(3,e.textContent.length),n=Math.ceil(Math.sqrt(this.nameCount)),i=document.documentElement.clientWidth/n,o=document.documentElement.clientHeight/n,a=Math.min(.8*i/t,.8*o);e.style.width=i+"px",e.style.height=o+"px",e.style.lineHeight=o+"px",e.style.fontSize=a+"px"}},{key:"highlightName",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return!1;var n=l.default.nameOnNode();return n instanceof Node&&n.classList.remove("on"),t?e.classList.add("on"):e.classList.remove("on"),!0}},{key:"transformName",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return!1;var n="none";if(t){var i=e.getBoundingClientRect(),o=i.width,a=i.height,r=i.left,s=i.top,u=document.documentElement,l=u.clientWidth,f=u.clientHeight,c=.6*Math.min(l/o,f/a),d=((l-o)/2-r)/c,h=((f-a)/2-s)/c;n="scale("+c+") translate("+d+"px, "+h+"px)"}return["webkitTransform","transform"].forEach(function(t){t in e.style&&(e.style[t]=n)}),!0}},{key:"speakName",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.language;if(!this.config.readOutNames||!window.speechSynthesis)return!1;var n=new SpeechSynthesisUtterance(e.textContent);n.lang=t,window.speechSynthesis.speak(n)}},{key:"disableName",value:function(e){return!!this.config.removeAfterHit&&(this.config.nameRemovedIndexes.push(l.default.nameNodes().indexOf(e)),this.config.save(),void e.classList.add("disabled"))}},{key:"gotoName",value:function(){if(this.config.stopOnDemand&&this.stopSignal){clearInterval(this.runner);var e=l.default.nameOnNode();return this.transformName(e),this.speakName(e),void(this.running=!1)}var t=l.default.nameNodesLeft(),n=Math.floor(Math.random()*(t.length+1));this.highlightName(t[n])}},{key:"run",value:function(e,t){var n=this;if(e>=t||this.stopSignal){var i=l.default.nameOnNode();return this.transformName(i),this.speakName(i),this.running=!1,!0}this.runner=setInterval(this.gotoName.bind(this),e),this.config.stopOnDemand||setTimeout(function(){clearInterval(n.runner),n.run(4*e,t)},t)}},{key:"clickHandler",value:function(e){if(l.default.wrapper.classList.contains("flip"))return!1;if("keyup"==e.type&&[13,32].indexOf(e.keyCode)==-1)return!1;if(this.running)return this.config.stopOnDemand&&(this.stopSignal=!0),!1;if(this.config.nameRemovedIndexes.length>=this.nameCount)return!1;var t=l.default.nameOnNode();return t instanceof Node?(this.highlightName(t,!1),this.transformName(t,!1),this.disableName(t),!1):(this.running=!0,this.stopSignal=!1,void this.run(100,3e3))}}]),e}();t.default=c},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=null,r={names:"",nameRemovedIndexes:[],removeAfterHit:!0,stopOnDemand:!1,lightTheme:!1,readOutNames:!1},s=function(){function e(){if(n(this,e),a)return a;a=this;for(var t in r)if(r.hasOwnProperty(t)){var o=r[t],s=window.localStorage[t];if(null==s||""==s)this[t]=o;else switch("undefined"==typeof o?"undefined":i(o)){case"object":this[t]=s.split(",");break;case"boolean":this[t]="1"==s;break;default:this[t]=s}}}return o(e,[{key:"save",value:function(){for(var e in r)if(r.hasOwnProperty(e)){var t=r[e];switch("undefined"==typeof t?"undefined":i(t)){case"object":window.localStorage[e]=this[e].join(",");break;case"boolean":window.localStorage[e]=this[e]+0;break;default:window.localStorage[e]=this[e]}}}}]),e}();t.default=s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return document.querySelector(e)},i=function(e){return Array.from(document.querySelectorAll(e))},o={wrapper:n("#wrapper"),namesPanel:n("#namesPanel"),nameNodes:function(){return i(".name")},nameNodesLeft:function(){return i(".name:not(.on):not(.disabled)")},nameOnNode:function(){return n(".name.on")},resetBtn:n("#reset-btn"),clickArea:n("#click-area"),optionsBtn:n("#options-btn"),optionsPanel:n("#optionsPanel"),optionsForm:n("#options-form"),options_names:n("#names"),options_removeAfterHit:n("#removeAfterHit"),options_stopOnDemand:n("#stopOnDemand"),options_lightTheme:n("#lightTheme"),options_readOutNames:n("#readOutNames"),options_optionCancel:n("#optionCancel")};t.default=o},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(4),s=i(r),u=n(5),l=i(u),f=n(3),c=i(f),d=null,h=function(){function e(){var t=this;return o(this,e),d?d:(d=this,this.config=new s.default,this.namesPanel=new c.default,l.default.optionsBtn.addEventListener("click",function(e){t.open()}),l.default.optionsForm.addEventListener("submit",function(e){e.preventDefault(),t.save(),t.namesPanel.init(!0),t.close()}),void l.default.options_optionCancel.addEventListener("click",function(e){t.init(),t.close()}))}return a(e,[{key:"init",value:function(){l.default.options_names.value=this.config.names,l.default.options_removeAfterHit.checked=this.config.removeAfterHit,l.default.options_stopOnDemand.checked=this.config.stopOnDemand,l.default.options_lightTheme.checked=this.config.lightTheme,l.default.options_readOutNames.checked=this.config.readOutNames}},{key:"save",value:function(){this.config.names=l.default.options_names.value,this.config.removeAfterHit=l.default.options_removeAfterHit.checked,this.config.stopOnDemand=l.default.options_stopOnDemand.checked,this.config.lightTheme=l.default.options_lightTheme.checked,this.config.readOutNames=l.default.options_readOutNames.checked,this.config.save()}},{key:"open",value:function(){l.default.wrapper.classList.add("flip")}},{key:"close",value:function(){l.default.wrapper.classList.remove("flip")}}]),e}();t.default=h}]);
//# sourceMappingURL=bundle.js.map