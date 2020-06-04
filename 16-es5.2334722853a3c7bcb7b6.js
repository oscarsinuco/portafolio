function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Gwtq:function(t,n,e){"use strict";e.r(n),e.d(n,"BienvenidaPageModule",(function(){return g}));var i,o,a,c=e("ofXK"),r=e("3Pt+"),l=e("TEn/"),b=e("tyNb"),s=e("AytR"),d=e("fXoL"),u=function(){return["/home"]},p=function(){return["/contacto"]},h=[{path:"",component:(i=function(){function t(){var n=this;_classCallCheck(this,t),this.datosMios={},this.nombre=localStorage.getItem("askd"),fetch(s.a.url).then((function(t){return t.json()})).then((function(t){n.datosMios=t,localStorage.setItem("askd",t.name),localStorage.setItem("urlGit",t.html_url),localStorage.setItem("avatar",t.avatar_url)}))}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=d.Db({type:i,selectors:[["app-bienvenida"]],decls:62,vars:7,consts:[[1,"presentacion"],[1,"ion-padding"],[1,"ion-justify-content-center"],["size","12"],[1,"foto"],[2,"margin","auto"],[3,"src"],[1,"text-center",2,"color","white","font-weight","bold"],[2,"width","100%","margin","auto"],[1,"descripcion"],["color","light",1,"text-center"],[2,"width","100%","display","flex","justify-content","center"],["color","light"],["name","bookmarks"],["href","https://www.uis.edu.co/","target","_blank"],["src","../../assets/logo.svg",2,"color","white"],["href","https://www.google.com.co/maps/place/Bucaramanga","target","_blank"],["name","navigate-outline"],[1,"buttons"],["size-lg","4","size-sm","12"],["expand","block","routerLinkActive","router-link-active","color","light","fill","outline",1,"ion-activatable","ripple-parent",3,"routerLink"],["type","unbounded"],["href","https://www.linkedin.com/in/oscar-esneyder-sinuco-tirado-023708180/","target","_blank","color","light","expand","block","fill","outline",1,"ion-activatable","ripple-parent"],["target","_blank","color","light","expand","block","fill","outline",1,"ion-activatable","ripple-parent",3,"href"],["size-lg","3","offset-lg","3","size-sm","12"],["href","https://gitlab.com/oscarsinuco","target","_blank","color","light","expand","block","fill","outline",1,"ion-activatable","ripple-parent"],["size-lg","3","size-sm","12"],["routerLinkActive","router-link-active","color","light","expand","block","fill","outline",1,"ion-activatable","ripple-parent",3,"routerLink"]],template:function(t,n){1&t&&(d.Mb(0,"ion-content"),d.Mb(1,"div",0),d.Mb(2,"div",1),d.Mb(3,"ion-grid"),d.Mb(4,"ion-row",2),d.Mb(5,"ion-col",3),d.Mb(6,"div",4),d.Mb(7,"ion-avatar",5),d.Kb(8,"img",6),d.Lb(),d.Mb(9,"h1",7),d.mc(10),d.Lb(),d.Lb(),d.Lb(),d.Mb(11,"ion-col",3),d.Mb(12,"div",8),d.Mb(13,"div",9),d.Mb(14,"p",10),d.mc(15," Ingeniero de Sistemas graduado de la Universidad Industrial de Santander, autodidacta, desarrollador FullStack, amante de los viajes, la comida y el f\xfatbol. "),d.Kb(16,"br"),d.Mb(17,"i"),d.mc(18,"'Compartir el conocimiento es generar riqueza intelectual.'"),d.Lb(),d.mc(19," - Richard Stallman "),d.Lb(),d.Lb(),d.Kb(20,"br"),d.Mb(21,"div",11),d.Mb(22,"div"),d.Mb(23,"ion-chip",12),d.Kb(24,"ion-icon",13),d.Mb(25,"ion-label"),d.mc(26,"Ingeniero de sistemas"),d.Lb(),d.Lb(),d.Mb(27,"a",14),d.Mb(28,"ion-chip",12),d.Kb(29,"ion-icon",15),d.Mb(30,"ion-label"),d.mc(31,"Universidad industrial de santander"),d.Lb(),d.Lb(),d.Lb(),d.Mb(32,"a",16),d.Mb(33,"ion-chip",12),d.Kb(34,"ion-icon",17),d.Mb(35,"ion-label"),d.mc(36,"Bucaramanga"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Kb(37,"br"),d.Mb(38,"div",11),d.Mb(39,"div",18),d.Mb(40,"ion-grid"),d.Mb(41,"ion-row"),d.Mb(42,"ion-col",19),d.Mb(43,"ion-button",20),d.mc(44,"Proyectos "),d.Kb(45,"ion-ripple-effect",21),d.Lb(),d.Lb(),d.Mb(46,"ion-col",19),d.Mb(47,"ion-button",22),d.mc(48,"Hoja de vida "),d.Kb(49,"ion-ripple-effect",21),d.Lb(),d.Lb(),d.Mb(50,"ion-col",19),d.Mb(51,"ion-button",23),d.mc(52,"GitHub "),d.Kb(53,"ion-ripple-effect",21),d.Lb(),d.Lb(),d.Mb(54,"ion-col",24),d.Mb(55,"ion-button",25),d.mc(56,"GitLab "),d.Kb(57,"ion-ripple-effect",21),d.Lb(),d.Lb(),d.Mb(58,"ion-col",26),d.Mb(59,"ion-button",27),d.mc(60,"CONTACTO "),d.Kb(61,"ion-ripple-effect",21),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&t&&(d.zb(8),d.dc("src",n.datosMios.avatar_url,d.jc),d.zb(2),d.nc(n.datosMios.name||n.nombre),d.zb(33),d.cc("routerLink",d.fc(5,u)),d.zb(8),d.dc("href",n.datosMios.html_url),d.zb(8),d.cc("routerLink",d.fc(6,p)))},directives:[l.l,l.p,l.w,l.k,l.c,l.j,l.q,l.t,l.d,b.i,l.G,b.h,l.u],styles:[".presentacion[_ngcontent-%COMP%]{min-height:100vh;width:100vw;display:flex;justify-content:center;align-items:center}ion-avatar[_ngcontent-%COMP%]{width:20vw;height:20vw}p[_ngcontent-%COMP%]{color:var(--ion-color-light)}.descripcion[_ngcontent-%COMP%]{margin:auto}@media (max-width:500px){.foto[_ngcontent-%COMP%]{width:70%;margin:auto}.foto[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:150px;height:150px}.buttons[_ngcontent-%COMP%], .descripcion[_ngcontent-%COMP%], ion-chip[_ngcontent-%COMP%]{width:100%}}@media (min-width:500px) and (max-width:800px){.foto[_ngcontent-%COMP%]{width:50%;margin:auto}.descripcion[_ngcontent-%COMP%]{width:70%}.buttons[_ngcontent-%COMP%]{width:80%}}@media (min-width:800px){.foto[_ngcontent-%COMP%]{width:40%;margin:auto}.descripcion[_ngcontent-%COMP%]{width:50%}.buttons[_ngcontent-%COMP%]{width:60%}}"]}),i)}],f=((a=function t(){_classCallCheck(this,t)}).\u0275mod=d.Hb({type:a}),a.\u0275inj=d.Gb({factory:function(t){return new(t||a)},imports:[[b.j.forChild(h)],b.j]}),a),g=((o=function t(){_classCallCheck(this,t)}).\u0275mod=d.Hb({type:o}),o.\u0275inj=d.Gb({factory:function(t){return new(t||o)},imports:[[c.b,r.e,l.C,f]]}),o)}}]);