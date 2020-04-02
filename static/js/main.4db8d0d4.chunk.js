(this["webpackJsonphomework-4"]=this["webpackJsonphomework-4"]||[]).push([[0],{19:function(e,t,a){e.exports=a(71)},24:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(13),o=a.n(l),s=(a(24),a(10)),i=a(18),u=a(7),c=a(6),p=function(e){return n.a.createElement("div",{id:"inputs",className:"container"},n.a.createElement("label",null,"Lower Limit: "),n.a.createElement("input",{className:"input-fields",type:"text",name:"lower",value:e.rangeLimits.lower,onChange:e.handleRangeChange,disabled:e.rangeLimits.fieldStatus.lower}),n.a.createElement("span",{className:"error"},e.rangeLimits.errors.lower),n.a.createElement("br",null),n.a.createElement("label",null,"Upper Limit: "),n.a.createElement("input",{className:"input-fields",type:"text",name:"upper",value:e.rangeLimits.upper,onChange:e.handleRangeChange,disabled:e.rangeLimits.fieldStatus.upper}),n.a.createElement("span",{className:"error"},e.rangeLimits.errors.upper),n.a.createElement("br",null),n.a.createElement(c.Button,{large:!0,node:"a",style:{margin:5},waves:"light",type:"submit",onClick:e.handleSubmit},"SUBMIT"))},m=function(e){var t=Object(r.useState)(0),a=Object(u.a)(t,2),l=a[0],o=a[1],s=function(e){var t=parseInt(e.target.getAttribute("step"));o(l+t)};return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row counter"},e.buttonMap.lower.map((function(e){return n.a.createElement(c.Button,{className:"col-5 z-depth-3",onClick:s,step:e,name:"subtract",key:e},e)})),n.a.createElement("div",{className:"counter-container row"},n.a.createElement("h2",{className:"col-2 counter-label"},"Counter: ",l),n.a.createElement(c.Button,{id:"reset-button",large:!0,node:"a",style:{margin:5},waves:"light",type:"submit",onClick:function(e){return o(0)}},"RESET")),e.buttonMap.upper.map((function(e){return n.a.createElement(c.Button,{className:"col-5 z-depth-3",onClick:s,step:e,name:"add",key:e},e)}))))},b=function(){var e=Object(r.useState)({lower:1,upper:1,errors:{lower:"",upper:""},fieldStatus:{upper:!1,lower:!1}}),t=Object(u.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)({lower:[-1],upper:[1]}),c=Object(u.a)(o,2),b=c[0],w=c[1],E=Object(r.useState)(""),d=Object(u.a)(E,2),h=d[0],g=d[1],R={rangeLimits:a,buttonMap:b,error:h,handleRangeChange:function(e){var t=e.target,r=t.name,n=t.value,o=a.errors,u=a.fieldStatus;l(Object(i.a)({},a,Object(s.a)({},r,n)));var c=a.upper,p=a.lower;switch(r){case"upper":o.upper=isNaN(n)||Number.isInteger(n)?"ERROR! Input must be an INTEGER":parseInt(n)>=10?"ERROR! Must be less than 10":parseInt(n)<p?"ERROR! Upper Limit Must be GREATER than Lower Limit":"",u.lower=parseInt(n)<p;break;case"lower":o.lower=isNaN(n)||Number.isInteger(n)?"ERROR! Input must be an INTEGER":parseInt(n)<1?"ERROR! Must be greater than zero":parseInt(n)>c?"ERROR! Lower Limit Must be Less than Upper Limit":"",u.upper=parseInt(n)>c}},handleSubmit:function(e){for(var t=parseInt(a.upper)-parseInt(a.lower),r=[],n=[],l=parseInt(a.lower);l<=parseInt(a.lower)+t;l++)r.push(l),console.log(r),n.push(-(parseInt(a.lower)+parseInt(a.lower)+t-l)),console.log(n);t>=0?w({lower:n,upper:r}):g("Invalid Inputs! Check if Upper Limit is Greater than Lower Limit"),e.preventDefault()}};return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,R),n.a.createElement(m,R))};a(70);var w=function(){return n.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.4db8d0d4.chunk.js.map