exports.id=183,exports.ids=[183],exports.modules={4103:(e,a,t)=>{"use strict";t.d(a,{Z:()=>f});var i=t(2),l=t(8293),n=t.n(l),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,m=(e,a)=>{for(var t in a||(a={}))c.call(a,t)&&g(e,t,a[t]);if(d)for(var t of d(a))u.call(a,t)&&g(e,t,a[t]);return e},y=(e,a)=>o(e,p(a)),v=(e,a)=>{var t={};for(var i in e)c.call(e,i)&&0>a.indexOf(i)&&(t[i]=e[i]);if(null!=e&&d)for(var i of d(e))0>a.indexOf(i)&&u.call(e,i)&&(t[i]=e[i]);return t},f=(e,a,t)=>{let l=(0,i.forwardRef)((a,l)=>{var{color:n="currentColor",size:r=24,stroke:o=2,children:p}=a,d=v(a,["color","size","stroke","children"]);return(0,i.createElement)("svg",m(y(m({ref:l},s),{width:r,height:r,stroke:n,strokeWidth:o,className:`tabler-icon tabler-icon-${e}`}),d),[...t.map(([e,a])=>(0,i.createElement)(e,a)),...p||[]])});return l.propTypes={color:n().string,size:n().oneOfType([n().string,n().number]),stroke:n().oneOfType([n().string,n().number])},l.displayName=`${a}`,l}},8026:(e,a,t)=>{let{createProxy:i}=t(6843);e.exports=i("/home/batyr/projects/yuusell/frontend/node_modules/next/dist/client/link.js")},646:(e,a,t)=>{e.exports=t(8026)},184:(e,a,t)=>{"use strict";var i=t(7905);function l(){}function n(){}n.resetWarningCache=l,e.exports=function(){function e(e,a,t,l,n,s){if(s!==i){var r=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:l};return t.PropTypes=t,t}},8293:(e,a,t)=>{e.exports=t(184)()},7905:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2119:()=>{},3141:()=>{},3583:(e,a,t)=>{"use strict";t.d(a,{pt:()=>p,W_:()=>s,tl:()=>o});var i=t(5882),l=t(3688);function n(e,a,t,i){return e.params.createElements&&Object.keys(i).forEach(n=>{if(!t[n]&&!0===t.auto){let s=(0,l.e)(e.el,`.${i[n]}`)[0];s||((s=(0,l.c)("div",i[n])).className=i[n],e.el.append(s)),t[n]=s,a[n]=s}}),t}function s(e){let{swiper:a,extendParams:t,on:i,emit:l}=e;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null};let s=e=>(Array.isArray(e)?e:[e]).filter(e=>!!e);function r(e){let t;return e&&"string"==typeof e&&a.isElement&&(t=a.el.querySelector(e))?t:(e&&("string"==typeof e&&(t=[...document.querySelectorAll(e)]),a.params.uniqueNavElements&&"string"==typeof e&&t.length>1&&1===a.el.querySelectorAll(e).length&&(t=a.el.querySelector(e))),e&&!t)?e:t}function o(e,t){let i=a.params.navigation;(e=s(e)).forEach(e=>{e&&(e.classList[t?"add":"remove"](...i.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=t),a.params.watchOverflow&&a.enabled&&e.classList[a.isLocked?"add":"remove"](i.lockClass))})}function p(){let{nextEl:e,prevEl:t}=a.navigation;if(a.params.loop){o(t,!1),o(e,!1);return}o(t,a.isBeginning&&!a.params.rewind),o(e,a.isEnd&&!a.params.rewind)}function d(e){e.preventDefault(),(!a.isBeginning||a.params.loop||a.params.rewind)&&(a.slidePrev(),l("navigationPrev"))}function c(e){e.preventDefault(),(!a.isEnd||a.params.loop||a.params.rewind)&&(a.slideNext(),l("navigationNext"))}function u(){let e=a.params.navigation;if(a.params.navigation=n(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(e.nextEl||e.prevEl))return;let t=r(e.nextEl),i=r(e.prevEl);Object.assign(a.navigation,{nextEl:t,prevEl:i}),t=s(t),i=s(i);let l=(t,i)=>{t&&t.addEventListener("click","next"===i?c:d),!a.enabled&&t&&t.classList.add(...e.lockClass.split(" "))};t.forEach(e=>l(e,"next")),i.forEach(e=>l(e,"prev"))}function g(){let{nextEl:e,prevEl:t}=a.navigation;e=s(e),t=s(t);let i=(e,t)=>{e.removeEventListener("click","next"===t?c:d),e.classList.remove(...a.params.navigation.disabledClass.split(" "))};e.forEach(e=>i(e,"next")),t.forEach(e=>i(e,"prev"))}i("init",()=>{!1===a.params.navigation.enabled?m():(u(),p())}),i("toEdge fromEdge lock unlock",()=>{p()}),i("destroy",()=>{g()}),i("enable disable",()=>{let{nextEl:e,prevEl:t}=a.navigation;if(e=s(e),t=s(t),a.enabled){p();return}[...e,...t].filter(e=>!!e).forEach(e=>e.classList.add(a.params.navigation.lockClass))}),i("click",(e,t)=>{let{nextEl:i,prevEl:n}=a.navigation;i=s(i),n=s(n);let r=t.target;if(a.params.navigation.hideOnClick&&!n.includes(r)&&!i.includes(r)){let e;if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===r||a.pagination.el.contains(r)))return;i.length?e=i[0].classList.contains(a.params.navigation.hiddenClass):n.length&&(e=n[0].classList.contains(a.params.navigation.hiddenClass)),!0===e?l("navigationShow"):l("navigationHide"),[...i,...n].filter(e=>!!e).forEach(e=>e.classList.toggle(a.params.navigation.hiddenClass))}});let m=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),g()};Object.assign(a.navigation,{enable:()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),u(),p()},disable:m,update:p,init:u,destroy:g})}function r(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function o(e){let a,{swiper:t,extendParams:i,on:s,emit:o}=e,p="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${p}-bullet`,bulletActiveClass:`${p}-bullet-active`,modifierClass:`${p}-`,currentClass:`${p}-current`,totalClass:`${p}-total`,hiddenClass:`${p}-hidden`,progressbarFillClass:`${p}-progressbar-fill`,progressbarOppositeClass:`${p}-progressbar-opposite`,clickableClass:`${p}-clickable`,lockClass:`${p}-lock`,horizontalClass:`${p}-horizontal`,verticalClass:`${p}-vertical`,paginationDisabledClass:`${p}-disabled`}}),t.pagination={el:null,bullets:[]};let d=0,c=e=>(Array.isArray(e)?e:[e]).filter(e=>!!e);function u(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function g(e,a){let{bulletActiveClass:i}=t.params.pagination;e&&(e=e[`${"prev"===a?"previous":"next"}ElementSibling`])&&(e.classList.add(`${i}-${a}`),(e=e[`${"prev"===a?"previous":"next"}ElementSibling`])&&e.classList.add(`${i}-${a}-${a}`))}function m(e){let a=e.target.closest(r(t.params.pagination.bulletClass));if(!a)return;e.preventDefault();let i=(0,l.g)(a)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===i)return;t.slideToLoop(i)}else t.slideTo(i)}function y(){let e,i;let n=t.rtl,s=t.params.pagination;if(u())return;let p=t.pagination.el;p=c(p);let m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,y=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(i=t.previousRealIndex||0,e=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):void 0!==t.snapIndex?(e=t.snapIndex,i=t.previousSnapIndex):(i=t.previousIndex||0,e=t.activeIndex||0),"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){let r,o,c;let u=t.pagination.bullets;if(s.dynamicBullets&&(a=(0,l.f)(u[0],t.isHorizontal()?"width":"height",!0),p.forEach(e=>{e.style[t.isHorizontal()?"width":"height"]=`${a*(s.dynamicMainBullets+4)}px`}),s.dynamicMainBullets>1&&void 0!==i&&((d+=e-(i||0))>s.dynamicMainBullets-1?d=s.dynamicMainBullets-1:d<0&&(d=0)),c=((o=(r=Math.max(e-d,0))+(Math.min(u.length,s.dynamicMainBullets)-1))+r)/2),u.forEach(e=>{let a=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(e=>`${s.bulletActiveClass}${e}`)].map(e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e).flat();e.classList.remove(...a)}),p.length>1)u.forEach(a=>{let i=(0,l.g)(a);i===e?a.classList.add(...s.bulletActiveClass.split(" ")):t.isElement&&a.setAttribute("part","bullet"),s.dynamicBullets&&(i>=r&&i<=o&&a.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),i===r&&g(a,"prev"),i===o&&g(a,"next"))});else{let a=u[e];if(a&&a.classList.add(...s.bulletActiveClass.split(" ")),t.isElement&&u.forEach((a,t)=>{a.setAttribute("part",t===e?"bullet-active":"bullet")}),s.dynamicBullets){let e=u[r],a=u[o];for(let e=r;e<=o;e+=1)u[e]&&u[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));g(e,"prev"),g(a,"next")}}if(s.dynamicBullets){let e=Math.min(u.length,s.dynamicMainBullets+4),i=(a*e-a)/2-c*a,l=n?"right":"left";u.forEach(e=>{e.style[t.isHorizontal()?l:"top"]=`${i}px`})}}p.forEach((a,i)=>{if("fraction"===s.type&&(a.querySelectorAll(r(s.currentClass)).forEach(a=>{a.textContent=s.formatFractionCurrent(e+1)}),a.querySelectorAll(r(s.totalClass)).forEach(e=>{e.textContent=s.formatFractionTotal(y)})),"progressbar"===s.type){let i;i=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";let l=(e+1)/y,n=1,o=1;"horizontal"===i?n=l:o=l,a.querySelectorAll(r(s.progressbarFillClass)).forEach(e=>{e.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${o})`,e.style.transitionDuration=`${t.params.speed}ms`})}"custom"===s.type&&s.renderCustom?(a.innerHTML=s.renderCustom(t,e+1,y),0===i&&o("paginationRender",a)):(0===i&&o("paginationRender",a),o("paginationUpdate",a)),t.params.watchOverflow&&t.enabled&&a.classList[t.isLocked?"add":"remove"](s.lockClass)})}function v(){let e=t.params.pagination;if(u())return;let a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length,i=t.pagination.el;i=c(i);let l="";if("bullets"===e.type){let i=t.params.loop?Math.ceil(a/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&i>a&&(i=a);for(let a=0;a<i;a+=1)e.renderBullet?l+=e.renderBullet.call(t,a,e.bulletClass):l+=`<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(l=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(l=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],i.forEach(a=>{"custom"!==e.type&&(a.innerHTML=l||""),"bullets"===e.type&&t.pagination.bullets.push(...a.querySelectorAll(r(e.bulletClass)))}),"custom"!==e.type&&o("paginationRender",i[0])}function f(){let e;t.params.pagination=n(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});let a=t.params.pagination;a.el&&("string"==typeof a.el&&t.isElement&&(e=t.el.querySelector(a.el)),e||"string"!=typeof a.el||(e=[...document.querySelectorAll(a.el)]),e||(e=a.el),e&&0!==e.length&&(t.params.uniqueNavElements&&"string"==typeof a.el&&Array.isArray(e)&&e.length>1&&(e=[...t.el.querySelectorAll(a.el)]).length>1&&(e=e.filter(e=>(0,l.a)(e,".swiper")[0]===t.el)[0]),Array.isArray(e)&&1===e.length&&(e=e[0]),Object.assign(t.pagination,{el:e}),(e=c(e)).forEach(e=>{"bullets"===a.type&&a.clickable&&e.classList.add(...(a.clickableClass||"").split(" ")),e.classList.add(a.modifierClass+a.type),e.classList.add(t.isHorizontal()?a.horizontalClass:a.verticalClass),"bullets"===a.type&&a.dynamicBullets&&(e.classList.add(`${a.modifierClass}${a.type}-dynamic`),d=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),"progressbar"===a.type&&a.progressbarOpposite&&e.classList.add(a.progressbarOppositeClass),a.clickable&&e.addEventListener("click",m),t.enabled||e.classList.add(a.lockClass)})))}function b(){let e=t.params.pagination;if(u())return;let a=t.pagination.el;a&&(a=c(a)).forEach(a=>{a.classList.remove(e.hiddenClass),a.classList.remove(e.modifierClass+e.type),a.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(a.classList.remove(...(e.clickableClass||"").split(" ")),a.removeEventListener("click",m))}),t.pagination.bullets&&t.pagination.bullets.forEach(a=>a.classList.remove(...e.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;let e=t.params.pagination,{el:a}=t.pagination;(a=c(a)).forEach(a=>{a.classList.remove(e.horizontalClass,e.verticalClass),a.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)})}),s("init",()=>{!1===t.params.pagination.enabled?h():(f(),v(),y())}),s("activeIndexChange",()=>{void 0===t.snapIndex&&y()}),s("snapIndexChange",()=>{y()}),s("snapGridLengthChange",()=>{v(),y()}),s("destroy",()=>{b()}),s("enable disable",()=>{let{el:e}=t.pagination;e&&(e=c(e)).forEach(e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))}),s("lock unlock",()=>{y()}),s("click",(e,a)=>{let i=a.target,l=c(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&l&&l.length>0&&!i.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&i===t.navigation.nextEl||t.navigation.prevEl&&i===t.navigation.prevEl))return;!0===l[0].classList.contains(t.params.pagination.hiddenClass)?o("paginationShow"):o("paginationHide"),l.forEach(e=>e.classList.toggle(t.params.pagination.hiddenClass))}});let h=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=c(e)).forEach(e=>e.classList.add(t.params.pagination.paginationDisabledClass)),b()};Object.assign(t.pagination,{enable:()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=c(e)).forEach(e=>e.classList.remove(t.params.pagination.paginationDisabledClass)),f(),v(),y()},disable:h,render:v,update:y,init:f,destroy:b})}function p(e){let a,t,l,n,s,r,o,p,d,c,{swiper:u,extendParams:g,on:m,emit:y,params:v}=e;u.autoplay={running:!1,paused:!1,timeLeft:0},g({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let f=v&&v.autoplay?v.autoplay.delay:3e3,b=v&&v.autoplay?v.autoplay.delay:3e3,h=new Date().getTime();function C(e){u&&!u.destroyed&&u.wrapperEl&&e.target===u.wrapperEl&&(u.wrapperEl.removeEventListener("transitionend",C),!c&&$())}let E=()=>{if(u.destroyed||!u.autoplay.running)return;u.autoplay.paused?n=!0:n&&(b=l,n=!1);let e=u.autoplay.paused?l:h+b-new Date().getTime();u.autoplay.timeLeft=e,y("autoplayTimeLeft",e,e/f),t=requestAnimationFrame(()=>{E()})},L=()=>{let e;if(e=u.virtual&&u.params.virtual.enabled?u.slides.filter(e=>e.classList.contains("swiper-slide-active"))[0]:u.slides[u.activeIndex])return parseInt(e.getAttribute("data-swiper-autoplay"),10)},x=e=>{if(u.destroyed||!u.autoplay.running)return;cancelAnimationFrame(t),E();let i=void 0===e?u.params.autoplay.delay:e;f=u.params.autoplay.delay,b=u.params.autoplay.delay;let n=L();!Number.isNaN(n)&&n>0&&void 0===e&&(i=n,f=n,b=n),l=i;let s=u.params.speed,r=()=>{u&&!u.destroyed&&(u.params.autoplay.reverseDirection?!u.isBeginning||u.params.loop||u.params.rewind?(u.slidePrev(s,!0,!0),y("autoplay")):u.params.autoplay.stopOnLastSlide||(u.slideTo(u.slides.length-1,s,!0,!0),y("autoplay")):!u.isEnd||u.params.loop||u.params.rewind?(u.slideNext(s,!0,!0),y("autoplay")):u.params.autoplay.stopOnLastSlide||(u.slideTo(0,s,!0,!0),y("autoplay")),u.params.cssMode&&(h=new Date().getTime(),requestAnimationFrame(()=>{x()})))};return i>0?(clearTimeout(a),a=setTimeout(()=>{r()},i)):requestAnimationFrame(()=>{r()}),i},w=()=>{h=new Date().getTime(),u.autoplay.running=!0,x(),y("autoplayStart")},O=()=>{u.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(t),y("autoplayStop")},k=(e,t)=>{if(u.destroyed||!u.autoplay.running)return;clearTimeout(a),e||(d=!0);let i=()=>{y("autoplayPause"),u.params.autoplay.waitForTransition?u.wrapperEl.addEventListener("transitionend",C):$()};if(u.autoplay.paused=!0,t){p&&(l=u.params.autoplay.delay),p=!1,i();return}l=(l||u.params.autoplay.delay)-(new Date().getTime()-h),u.isEnd&&l<0&&!u.params.loop||(l<0&&(l=0),i())},$=()=>{u.isEnd&&l<0&&!u.params.loop||u.destroyed||!u.autoplay.running||(h=new Date().getTime(),d?(d=!1,x(l)):x(),u.autoplay.paused=!1,y("autoplayResume"))},T=()=>{if(u.destroyed||!u.autoplay.running)return;let e=(0,i.g)();"hidden"===e.visibilityState&&(d=!0,k(!0)),"visible"===e.visibilityState&&$()},A=e=>{"mouse"===e.pointerType&&(d=!0,c=!0,u.animating||u.autoplay.paused||k(!0))},S=e=>{"mouse"===e.pointerType&&(c=!1,u.autoplay.paused&&$())},M=()=>{u.params.autoplay.pauseOnMouseEnter&&(u.el.addEventListener("pointerenter",A),u.el.addEventListener("pointerleave",S))},P=()=>{u.el.removeEventListener("pointerenter",A),u.el.removeEventListener("pointerleave",S)},B=()=>{(0,i.g)().addEventListener("visibilitychange",T)},D=()=>{(0,i.g)().removeEventListener("visibilitychange",T)};m("init",()=>{u.params.autoplay.enabled&&(M(),B(),w())}),m("destroy",()=>{P(),D(),u.autoplay.running&&O()}),m("_freeModeStaticRelease",()=>{(r||d)&&$()}),m("_freeModeNoMomentumRelease",()=>{u.params.autoplay.disableOnInteraction?O():k(!0,!0)}),m("beforeTransitionStart",(e,a,t)=>{!u.destroyed&&u.autoplay.running&&(t||!u.params.autoplay.disableOnInteraction?k(!0,!0):O())}),m("sliderFirstMove",()=>{if(!u.destroyed&&u.autoplay.running){if(u.params.autoplay.disableOnInteraction){O();return}s=!0,r=!1,d=!1,o=setTimeout(()=>{d=!0,r=!0,k(!0)},200)}}),m("touchEnd",()=>{if(!u.destroyed&&u.autoplay.running&&s){if(clearTimeout(o),clearTimeout(a),u.params.autoplay.disableOnInteraction){r=!1,s=!1;return}r&&u.params.cssMode&&$(),r=!1,s=!1}}),m("slideChange",()=>{!u.destroyed&&u.autoplay.running&&(p=!0)}),Object.assign(u.autoplay,{start:w,stop:O,pause:k,resume:$})}}};