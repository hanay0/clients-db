import{B as u,C as v,D as g,F as h,H as f,T as b,b as l,d as a,e as c,l as r,m as n,n as m,r as p}from"./chunk-WW4OF4KU.js";var C=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=a({type:t,selectors:[["app-not-found"]],decls:2,vars:0,template:function(o,d){o&1&&(r(0,"p"),p(1,"not-found works!"),n())}});let e=t;return e})();var D=[{path:"clients",loadChildren:()=>import("./chunk-3QVQ4MWR.js").then(e=>e.ClientModule)},{path:"",redirectTo:"clients",pathMatch:"full"},{path:"**",component:C}],y=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c({type:t}),t.\u0275inj=l({imports:[f.forRoot(D),f]});let e=t;return e})();var x=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=a({type:t,selectors:[["app-header"]],decls:8,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"]],template:function(o,d){o&1&&(r(0,"nav",0)(1,"div",1)(2,"a",2),p(3,"CLients DB"),n(),r(4,"button",3),m(5,"span",4),n(),r(6,"div",5),m(7,"ul",6),n()()())}});let e=t;return e})();var M=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=a({type:t,selectors:[["app-footer"]],decls:3,vars:0,consts:[[1,"d-flex","justify-content-center","align-items-center","bg-dark","text-light"],[1,"mb-0"]],template:function(o,d){o&1&&(r(0,"footer",0)(1,"p",1),p(2,"All Rights are reserved \xA9 "),n()())}});let e=t;return e})();var F=(()=>{let t=class t{constructor(){this.title="clients"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=a({type:t,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"app-wrapper"]],template:function(o,d){o&1&&(r(0,"div",0),m(1,"app-header")(2,"router-outlet")(3,"app-footer"),n())},dependencies:[h,x,M]});let e=t;return e})();var w=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c({type:t,bootstrap:[F]}),t.\u0275inj=l({imports:[g,y,u,b]});let e=t;return e})();v().bootstrapModule(w).catch(e=>console.error(e));