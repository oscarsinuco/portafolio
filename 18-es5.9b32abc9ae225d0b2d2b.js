function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"ct+p":function(e,n,t){"use strict";t.r(n),t.d(n,"HomePageModule",(function(){return L}));var i=t("ofXK"),o=t("TEn/"),r=t("3Pt+"),c=t("tyNb"),s=t("AytR"),a=t("fXoL"),l=["slides"];function b(e,n){if(1&e){var t=a.Nb();a.Mb(0,"ion-slide"),a.Mb(1,"ion-card",17),a.Ub("click",(function(){a.ic(t);var e=n.$implicit;return a.Wb().openWebpage(e.html_url)})),a.Kb(2,"img",18),a.Mb(3,"ion-card-header"),a.Mb(4,"ion-card-subtitle"),a.mc(5),a.Lb(),a.Mb(6,"ion-card-title",19),a.mc(7),a.Xb(8,"slice"),a.Xb(9,"uppercase"),a.Lb(),a.Lb(),a.Mb(10,"ion-card-content"),a.mc(11),a.Xb(12,"slice"),a.Kb(13,"br"),a.mc(14),a.Xb(15,"slice"),a.Lb(),a.Lb(),a.Lb()}if(2&e){var i=n.$implicit,o=n.index;a.zb(2),a.ec("src","https://picsum.photos/300/180/?random=",o,"&grayscale",a.jc),a.zb(3),a.nc(i.owner.login),a.zb(2),a.oc("",a.Zb(8,5,a.Yb(9,9,i.name),0,9),"..."),a.zb(4),a.oc(" ",a.Zb(12,11,i.language,0,10),"... "),a.zb(3),a.oc(" ",a.Zb(15,15,i.html_url,0,40),"... ")}}var u,p,f,g=function(){return["/bienvenida"]},m=function(){return["/tecnologias"]},d=function(){return["/contacto"]},h=[{path:"",component:(u=function(){function e(n){var t=this;_classCallCheck(this,e),this.zone=n,this.nombre=localStorage.getItem("askd"),this.urlGit=localStorage.getItem("urlGit"),this.slideOpts={loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},slidesPerView:1,spaceBetween:10,freemode:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:20},480:{slidesPerView:2,spaceBetween:30},950:{slidesPerView:2,spaceBetween:40}}},fetch("".concat(s.a.url,"/repos")).then((function(e){return e.json()})).then((function(e){t.proyectos=e,t.proyectos.unshift({name:"Calumet Est\xe1ndar",owner:{login:"UIS"},language:"JAVA + JSP",html_url:"http://cormoran.uis.edu.co/eisi/"}),fetch("https://gitlab.com/api/v4/users/oscarsinuco/projects").then((function(e){return e.json()})).then((function(e){e.forEach((function(e){e.html_url=e.web_url,e.language="Any",e.owner={login:e.namespace.path},t.zone.run((function(){t.proyectos.push(e)}))})),fetch("https://gitlab.com/api/v4/users/Diego.98/projects").then((function(e){return e.json()})).then((function(e){var n=e[0];n.html_url=n.web_url,n.language="Any",n.owner={login:n.namespace.path},t.zone.run((function(){t.proyectos.push(n)}))}))}))}))}return _createClass(e,[{key:"onResize",value:function(){var e=this;setTimeout((function(){return e.slides.update()}),100)}},{key:"openWebpage",value:function(e){window.open(e)}},{key:"ngOnInit",value:function(){}}]),e}(),u.\u0275fac=function(e){return new(e||u)(a.Jb(a.z))},u.\u0275cmp=a.Db({type:u,selectors:[["app-home"]],viewQuery:function(e,n){var t;1&e&&a.pc(l,!0),2&e&&a.gc(t=a.Vb())&&(n.slides=t.first)},hostBindings:function(e,n){1&e&&a.Ub("resize",(function(){return n.onResize()}),!1,a.hc)},decls:32,vars:10,consts:[["mode","ios",1,"ion-padding",3,"fullscreen"],["fixed","",1,"negrilla","margin-bot-lg"],["size-lg","12","size","12",1,"margin-bot-sm","margin-bot-lg"],[2,"height","100px","width","100px","margin","auto"],["src","https://pbs.twimg.com/profile_images/1059180980265738240/jV_3TtMx_400x400.jpg"],["size-lg","2","offset-lg","3","size","4",1,"centrado","menua"],["routerLinkActive","router-link-active","color","light",3,"routerLink"],["size-lg","2","size","4",1,"centrado","menua"],["color","light","routerLinkActive","router-link-active",3,"routerLink"],[2,"text-align","center"],["color","light",1,"negrilla",2,"font-size","2rem"],["size","12","size-lg","6","offset-lg","3"],["mode","ios",3,"options"],["slides",""],[4,"ngFor","ngForOf"],["expand","block","color","light","fill","outline","target","_blank",3,"href"],["id","fondo"],[3,"click"],[1,"swiper-lazy","imgcurso",3,"src"],[2,"font-size","1.5rem"]],template:function(e,n){1&e&&(a.Mb(0,"ion-content",0),a.Mb(1,"ion-grid",1),a.Kb(2,"br"),a.Mb(3,"ion-row"),a.Mb(4,"ion-col",2),a.Mb(5,"ion-avatar",3),a.Kb(6,"img",4),a.Lb(),a.Lb(),a.Mb(7,"ion-col",5),a.Mb(8,"ion-label",6),a.mc(9,"INICIO"),a.Lb(),a.Lb(),a.Mb(10,"ion-col",7),a.Mb(11,"ion-label",8),a.mc(12,"TECNOLOG\xcdAS"),a.Lb(),a.Lb(),a.Mb(13,"ion-col",7),a.Mb(14,"ion-label",8),a.mc(15,"CONTACTO"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(16,"div",9),a.Kb(17,"br"),a.Kb(18,"br"),a.Mb(19,"ion-label",10),a.mc(20,"Proyectos en los que he trabajado"),a.Lb(),a.Lb(),a.Kb(21,"br"),a.Mb(22,"ion-grid"),a.Mb(23,"ion-row"),a.Mb(24,"ion-col",11),a.Mb(25,"ion-slides",12,13),a.lc(27,b,16,19,"ion-slide",14),a.Lb(),a.Kb(28,"br"),a.Mb(29,"ion-button",15),a.mc(30,"Ir a GitHub"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Kb(31,"div",16),a.Lb()),2&e&&(a.cc("fullscreen",!0),a.zb(8),a.cc("routerLink",a.fc(7,g)),a.zb(3),a.cc("routerLink",a.fc(8,m)),a.zb(3),a.cc("routerLink",a.fc(9,d)),a.zb(11),a.cc("options",n.slideOpts),a.zb(2),a.cc("ngForOf",n.proyectos),a.zb(2),a.dc("href",n.urlGit))},directives:[o.l,o.p,o.w,o.k,o.c,o.t,c.i,o.G,c.h,o.A,i.h,o.d,o.z,o.e,o.g,o.h,o.i,o.f],pipes:[i.l,i.m],styles:["@media (max-width:500px){.margin-bot-sm[_ngcontent-%COMP%]{margin-bottom:40px}}@media (min-width:500px){.margin-bot-lg[_ngcontent-%COMP%]{margin-bottom:40px}}.imgcurso[_ngcontent-%COMP%]{width:100%;min-height:160px}"]}),u)}],w=((f=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:f}),f.\u0275inj=a.Gb({factory:function(e){return new(e||f)},imports:[[c.j.forChild(h)],c.j]}),f),L=((p=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:p}),p.\u0275inj=a.Gb({factory:function(e){return new(e||p)},imports:[[i.b,r.e,o.C,w]]}),p)}}]);