function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{ptoG:function(n,t,e){"use strict";e.r(t),e.d(t,"TecnologiasPageModule",(function(){return M}));var i=e("ofXK"),o=e("3Pt+"),c=e("TEn/"),r=e("tyNb"),s=e("AytR"),a=e("fXoL"),b=["slides"];function l(n,t){if(1&n&&(a.Mb(0,"ion-slide"),a.Mb(1,"ion-card"),a.Kb(2,"img",23),a.Mb(3,"ion-card-header"),a.Mb(4,"ion-card-subtitle"),a.lc(5),a.Lb(),a.Mb(6,"ion-card-title"),a.lc(7),a.Xb(8,"slice"),a.Xb(9,"uppercase"),a.Lb(),a.Lb(),a.Mb(10,"ion-card-content"),a.lc(11),a.Xb(12,"slice"),a.Lb(),a.Lb(),a.Lb()),2&n){var e=t.$implicit;a.zb(2),a.dc("src",e.imagen,a.ic),a.zb(3),a.mc(e.nombre),a.zb(2),a.nc("",a.Zb(8,4,a.Yb(9,8,e.tipo),0,11)," "),a.zb(4),a.nc(" ",a.Zb(12,10,e.descripcion,0,45),"... ")}}var d,u,g,p=function(){return["/home"]},h=[{path:"",component:(d=function(){function n(t){var e=this;_classCallCheck(this,n),this.zone=t,this.datosMios={},this.nombre=localStorage.getItem("askd"),this.slideOpts={autoplay:{delay:2e3,disableOnInteraction:!0},freemode:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:20},480:{slidesPerView:2,spaceBetween:30},840:{slidesPerView:2,spaceBetween:50}}},this.tec=[],this.tipo="Frontend",fetch("".concat(s.a.url,"/tecnologias")).then((function(n){return n.json()})).then((function(n){e.tec=n.tecnologias}))}return _createClass(n,[{key:"onResize",value:function(){var n=this;setTimeout((function(){return n.slides.update()}),100)}},{key:"ngOnInit",value:function(){}},{key:"getFiltrados",value:function(n,t){return console.log(n),n.filter((function(n){return n.tipo==t}))}},{key:"segmentChanged",value:function(n){this.tipo=n.target.value}}]),n}(),d.\u0275fac=function(n){return new(n||d)(a.Jb(a.z))},d.\u0275cmp=a.Db({type:d,selectors:[["app-tecnologias"]],viewQuery:function(n,t){var e;1&n&&a.oc(b,!0),2&n&&a.fc(e=a.Vb())&&(t.slides=e.first)},hostBindings:function(n,t){1&n&&a.Ub("resize",(function(){return t.onResize()}),!1,a.gc)},decls:49,vars:5,consts:[["mode","ios"],[1,"presentacion"],[1,"ion-justify-content-center"],["size","12"],[1,"foto"],[2,"margin","auto"],["src","https://pbs.twimg.com/profile_images/1059180980265738240/jV_3TtMx_400x400.jpg"],[1,"text-center",2,"color","white","font-weight","bold"],["size-lg","10","size-sm","12"],["value","Frontend",3,"ionChange"],["value","Frontend",1,"menua"],["color","light"],["value","Backend",1,"menua"],["value","Motor de BD",1,"menua"],["size","12","size-sm","8","offset-sm","2","size-xl","4","size-lg","6","offset-lg","3","offset-xl","4"],["mode","ios",3,"options"],[4,"ngFor","ngForOf"],[2,"width","100%","display","flex","justify-content","center"],[1,"buttons"],["size-xl","7","size-lg","4","size-sm","12"],["expand","block","routerLinkActive","router-link-active","color","light","fill","outline",1,"ion-activatable","ripple-parent",3,"routerLink"],["slot","start","name","arrow-back"],["type","unbounded"],[1,"swiper-lazy","imgtec",3,"src"]],template:function(n,t){1&n&&(a.Mb(0,"ion-content",0),a.Mb(1,"div",1),a.Mb(2,"div"),a.Mb(3,"ion-grid"),a.Mb(4,"ion-row",2),a.Mb(5,"ion-col",3),a.Mb(6,"div",4),a.Kb(7,"br"),a.Kb(8,"br"),a.Mb(9,"ion-avatar",5),a.Kb(10,"img",6),a.Lb(),a.Kb(11,"br"),a.Mb(12,"h1",7),a.lc(13," Tecnolog\xedas que manejo"),a.Lb(),a.Mb(14,"h5",7),a.lc(15),a.Lb(),a.Lb(),a.Lb(),a.Mb(16,"ion-col",8),a.Mb(17,"div",5),a.Mb(18,"div"),a.Mb(19,"ion-segment",9),a.Ub("ionChange",(function(n){return t.segmentChanged(n)})),a.Mb(20,"ion-segment-button",10),a.Mb(21,"ion-label",11),a.lc(22,"Frontend"),a.Lb(),a.Lb(),a.Mb(23,"ion-segment-button",12),a.Mb(24,"ion-label",11),a.lc(25,"Backend"),a.Lb(),a.Lb(),a.Mb(26,"ion-segment-button",13),a.Mb(27,"ion-label",11),a.lc(28,"Motores de BD"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(29,"ion-grid"),a.Mb(30,"ion-row"),a.Mb(31,"ion-col",14),a.Mb(32,"ion-slides",15),a.kc(33,l,13,14,"ion-slide",16),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(34,"div"),a.Mb(35,"div"),a.Mb(36,"ion-grid"),a.Mb(37,"ion-row"),a.Mb(38,"ion-col",3),a.Mb(39,"div"),a.Mb(40,"div",17),a.Mb(41,"div",18),a.Mb(42,"ion-grid"),a.Mb(43,"ion-row",2),a.Mb(44,"ion-col",19),a.Mb(45,"ion-button",20),a.Kb(46,"ion-icon",21),a.lc(47," Volver "),a.Kb(48,"ion-ripple-effect",22),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&n&&(a.zb(15),a.nc(" ",t.datosMios.name||t.nombre,""),a.zb(17),a.cc("options",t.slideOpts),a.zb(1),a.cc("ngForOf",t.getFiltrados(t.tec,t.tipo)),a.zb(12),a.cc("routerLink",a.ec(4,p)))},directives:[c.l,c.m,c.t,c.k,c.c,c.u,c.E,c.v,c.q,c.x,i.h,c.d,r.i,c.D,r.h,c.n,c.r,c.w,c.e,c.g,c.h,c.i,c.f],pipes:[i.l,i.m],styles:[".presentacion[_ngcontent-%COMP%]{width:100vw;display:flex;justify-content:center;align-items:center}ion-avatar[_ngcontent-%COMP%]{width:20vw;height:20vw}p[_ngcontent-%COMP%]{color:var(--ion-color-light)}.descripcion[_ngcontent-%COMP%]{margin:auto}.imgtec[_ngcontent-%COMP%]{width:inherit!important;height:140px!important}@media (max-width:500px){.foto[_ngcontent-%COMP%]{width:70%;margin:auto}.foto[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:150px;height:150px}.buttons[_ngcontent-%COMP%], .descripcion[_ngcontent-%COMP%], ion-chip[_ngcontent-%COMP%]{width:100%}.slides2[_ngcontent-%COMP%]{width:100%!important}}@media (min-width:500px) and (max-width:800px){.foto[_ngcontent-%COMP%]{width:50%;margin:auto}.descripcion[_ngcontent-%COMP%]{width:70%}.buttons[_ngcontent-%COMP%]{width:80%}.slides2[_ngcontent-%COMP%]{width:80%!important}}@media (min-width:800px){.foto[_ngcontent-%COMP%]{width:40%;margin:auto}ion-avatar[_ngcontent-%COMP%]{width:40%!important;height:40%!important}.descripcion[_ngcontent-%COMP%]{width:70%}.buttons[_ngcontent-%COMP%]{width:60%}.slides2[_ngcontent-%COMP%]{width:55%!important}}.slides2[_ngcontent-%COMP%]{margin:auto}"]}),d)}],f=((g=function n(){_classCallCheck(this,n)}).\u0275mod=a.Hb({type:g}),g.\u0275inj=a.Gb({factory:function(n){return new(n||g)},imports:[[r.j.forChild(h)],r.j]}),g),M=((u=function n(){_classCallCheck(this,n)}).\u0275mod=a.Hb({type:u}),u.\u0275inj=a.Gb({factory:function(n){return new(n||u)},imports:[[i.b,o.e,c.z,f]]}),u)}}]);