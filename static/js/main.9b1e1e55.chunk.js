(this["webpackJsonphomework-4"]=this["webpackJsonphomework-4"]||[]).push([[0],{19:function(e,t,a){e.exports=a(71)},24:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),s=a.n(l),o=(a(24),a(10)),i=a(18),u=a(6),c=a(7),p=function(e){return r.a.createElement("div",{id:"inputs",className:"container"},r.a.createElement("label",null,"From: "),r.a.createElement("input",{className:"input-fields",type:"text",name:"lower",value:e.rangeLimits.lower,onChange:e.handleRangeChange,disabled:e.rangeLimits.fieldStatus.lower}),r.a.createElement("span",{className:"error"},"   ",e.rangeLimits.errors.lower),r.a.createElement("br",null),r.a.createElement("label",null,"To: "),r.a.createElement("input",{className:"input-fields",type:"text",name:"upper",value:e.rangeLimits.upper,onChange:e.handleRangeChange,disabled:e.rangeLimits.fieldStatus.upper}),r.a.createElement("span",{className:"error"},"   ",e.rangeLimits.errors.upper),r.a.createElement("br",null),r.a.createElement(c.Button,{large:!0,node:"a",style:{margin:5},waves:"light",type:"submit",onClick:e.handleSubmit},"SUBMIT"))},m=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),l=a[0],s=a[1],o=e.buttonMap,i=e.buttonMap.reverse(),p=function(e){var t=parseInt(e.target.getAttribute("step"));s(l+t),e.preventDefault()};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row counter"},i.map((function(e){return r.a.createElement(c.Button,{className:"col-5 z-depth-3",onClick:p,step:e,name:"subtract",key:e},e)})),r.a.createElement("h1",{className:"col-2 counter-label"},"Counter: ",l),o.map((function(e){return r.a.createElement(c.Button,{className:"col-5 z-depth-3",onClick:p,step:-e,name:"add",key:-e},-e)}))))},b=function(){var e=Object(n.useState)({lower:1,upper:1,errors:{lower:"",upper:""},fieldStatus:{upper:!1,lower:!1}}),t=Object(u.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)([1]),c=Object(u.a)(s,2),b=c[0],E=c[1],d=Object(n.useState)(""),h=Object(u.a)(d,2),g=h[0],w=h[1],f={rangeLimits:a,buttonMap:b,error:g,handleRangeChange:function(e){var t=e.target,n=t.name,r=t.value,s=a.errors,u=a.fieldStatus;l(Object(i.a)({},a,Object(o.a)({},n,r)));var c=a.upper,p=a.lower;switch(n){case"upper":s.upper=isNaN(r)||Number.isInteger(r)?"ERROR! Input must be an INTEGER":parseInt(r)>=10?"ERROR! Must be less than 10":parseInt(r)<p?"ERROR! Upper Limit Must be GREATER than Lower Limit":"",u.lower=parseInt(r)<p;break;case"lower":s.lower=isNaN(r)||Number.isInteger(r)?"ERROR! Input must be an INTEGER":parseInt(r)<1?"ERROR! Must be greater than zero":parseInt(r)>c?"ERROR! Lower Limit Must be Less than Upper Limit":"",u.upper=parseInt(r)>c}e.preventDefault()},handleSubmit:function(e){var t=parseInt(a.upper)-parseInt(a.lower);t>=0?E(Array(t+1).fill().map((function(e,t){return parseInt(a.lower)+t}))):w("Invalid Inputs! Check if Upper Limit is Greater than Lower Limit"),e.preventDefault()}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,f),r.a.createElement(m,f))};a(70);var E=function(){return r.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.9b1e1e55.chunk.js.map