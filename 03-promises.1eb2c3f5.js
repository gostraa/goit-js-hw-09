var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("iQIUW");const i=document.querySelector(".form");function l(e,n){const t=Math.random()>.3;return new Promise(((r,i)=>{setTimeout((()=>{t?o.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`):o.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();const n=Number(i.elements.delay.value),t=Number(i.elements.step.value),r=Number(i.elements.amount.value);for(let e=1;e<=r;e+=1)l(e,n).then().catch(),n+=t}));
//# sourceMappingURL=03-promises.1eb2c3f5.js.map
