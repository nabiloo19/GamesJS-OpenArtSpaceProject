!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/Game-of-15/",e(0)}([function(t,e,n){n(1),t.exports=n(5)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),r=i(o),a=n(4),s=i(a);s["default"].attach(document.body);var c=new r["default"](document.getElementById("gameContainer"),4);document.querySelector("#gameControls button").addEventListener("click",function(){c.deleteWinModal(),c.shuffle()})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(3),s=i(a),c=function(){function t(e,n){var i=this;o(this,t),this._container=e,this._gridSize=n,this.emptySquare={},this.squares=[],this.emptySquare.X=this.emptySquare.Y=n-1,this.moves=0;for(var r=function(t){var e=new s["default"]("square",t+1),o=t%n,r=parseInt(t/n);e.square.addEventListener("click",function(){this.canMove(e)&&(this.shift(e),this.moves++,document.querySelector("#gameStatus span").innerText=this.moves+""),this.gameWon()&&this.showWinModal()}.bind(i)),e.move(o,r),e.square.style.backgroundPosition="-"+e.square.style.left+" -"+e.square.style.top,i._container.appendChild(e.square),i.squares.push(e)},a=0;a<Math.pow(this.gridSize,2)-1;a++)r(a);document.querySelector("#gameStatus span").innerText=this.moves+"",this.shuffle()}return r(t,[{key:"shuffle",value:function(){for(var t=0;t<1e3;t++){var e=this.squares.filter(function(t){return this.canMove(t)}.bind(this)),n=e[Math.floor(Math.random()*e.length)];this.shift(n)}this.setBackground()}},{key:"canMove",value:function(t){return Math.abs(this.emptySquare.X-t.X)+Math.abs(this.emptySquare.Y-t.Y)==1}},{key:"shift",value:function(t){var e=t.X,n=t.Y;t.move(this.emptySquare.X,this.emptySquare.Y),this.emptySquare.X=parseInt(e),this.emptySquare.Y=parseInt(n)}},{key:"setBackground",value:function(){var t=Math.floor(7*Math.random())+1,e=!0,n=!1,i=void 0;try{for(var o,r=this.squares[Symbol.iterator]();!(e=(o=r.next()).done);e=!0){var a=o.value;a.square.style.backgroundImage="url('./assets/img/"+t+".jpg')"}}catch(s){n=!0,i=s}finally{try{!e&&r["return"]&&r["return"]()}finally{if(n)throw i}}}},{key:"gameWon",value:function(){var t=-1,e=-1,n=!0,i=!1,o=void 0;try{for(var r,a=this.squares[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var s=r.value;if(s.Y<t||s.X<e&&e!=this.gridSize-1||s.X==s.Y&&s.Y==this.gridSize-1)return!1;e=s.X,t=s.Y}}catch(c){i=!0,o=c}finally{try{!n&&a["return"]&&a["return"]()}finally{if(i)throw o}}return!0}},{key:"showWinModal",value:function(){var t=document.createElement("div");t.classList.add("modal-bg");var e=document.createElement("div");e.classList.add("modal-content"),e.appendChild(document.createTextNode("You have won the game!"));var n=document.createElement("iframe");n.width="100%",n.style.border="none",n.src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&modestbranding=1&showinfo=0",document.body.classList.add("win"),e.appendChild(n),t.appendChild(e),this._container.appendChild(t)}},{key:"deleteWinModal",value:function(){var t=void 0;(t=this._container.querySelector(".modal-bg"))&&(this._container.removeChild(t),document.body.classList.remove("win")),this.moves=0,document.querySelector("#gameStatus span").innerText=this.moves+""}},{key:"gridSize",get:function(){return this._gridSize},set:function(t){for(;this._container.firstChild;)this._container.removeChild(this._container.firstChild);this.constructor(this._container,t)}}]),t}();e["default"]=c},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e,i){var o=arguments.length<=2||void 0===arguments[2]?"div":arguments[2];n(this,t),this.square=document.createElement(o),this.square.classList.add(e),this.square.style.backgroundPosition="-"+this.square.style.left+" -"+this.square.style.top,this.square.appendChild(document.createTextNode(i)),this._X=null,this._Y=null}return i(t,[{key:"move",value:function(t,e){this.X=t,this.Y=e}},{key:"X",get:function(){return this._X},set:function(t){this.square.style.left=100*t+"px",this._X=t}},{key:"Y",get:function(){return this._Y},set:function(t){this.square.style.top=100*t+"px",this._Y=t}}]),t}();e["default"]=o},function(t,e,n){var i;!function(){"use strict";/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */
function o(t,e){function n(t,e){return function(){return t.apply(e,arguments)}}var i;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700,!o.notNeeded(t)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],s=this,c=0,u=r.length;c<u;c++)s[r[c]]=n(s[r[c]],s);a&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(i=t.onclick,t.addEventListener("click",function(t){i(t)},!1),t.onclick=null)}}var r=navigator.userAgent.indexOf("Windows Phone")>=0,a=navigator.userAgent.indexOf("Android")>0&&!r,s=/iP(ad|hone|od)/.test(navigator.userAgent)&&!r,c=s&&/OS 4_\d(_\d)?/.test(navigator.userAgent),u=s&&/OS [6-7]_\d/.test(navigator.userAgent),l=navigator.userAgent.indexOf("BB10")>0;o.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(s&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},o.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!a;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},o.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},o.prototype.determineEventType=function(t){return a&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},o.prototype.focus=function(t){var e;s&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},o.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},o.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},o.prototype.onTouchStart=function(t){var e,n,i;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],s){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!c){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},o.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},o.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},o.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},o.prototype.onTouchEnd=function(t){var e,n,i,o,r,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,u&&(r=t.changedTouches[0],l=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),i=l.tagName.toLowerCase(),"label"===i){if(e=this.findControl(l)){if(this.focus(l),a)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-n>100||s&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),s&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return!(!s||c||(o=l.fastClickScrollParent,!o||o.fastClickLastScrollTop===o.scrollTop))||(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},o.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},o.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},o.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},o.prototype.destroy=function(){var t=this.layer;a&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},o.notNeeded=function(t){var e,n,i,o;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!a)return!0;if(e=document.querySelector("meta[name=viewport]")){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(l&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(o=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(o>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(e.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},o.attach=function(t,e){return new o(t,e)},i=function(){return o}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))}()},function(t,e){}]);
//# sourceMappingURL=app.8a84a2b216f7b6a05e6b.js.map