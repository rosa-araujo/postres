google.maps.__gjsload__('overlay', function(_){var Zy=function(a){this.g=a},$y=function(){},az=function(a){a.Fh=a.Fh||new $y;return a.Fh},bz=function(a){this.Ga=new _.pi(function(){var b=a.Fh;if(a.getPanes()){if(a.getProjection()){if(!b.Rg&&a.onAdd)a.onAdd();b.Rg=!0;a.draw()}}else{if(b.Rg)if(a.onRemove)a.onRemove();else a.remove();b.Rg=!1}},0)},cz=function(a,b){function c(){return _.qi(e.Ga)}var d=az(a),e=d.jg;e||(e=d.jg=new bz(a));_.A(d.Ea||[],_.K.removeListener);var f=d.Ka=d.Ka||new _.Vu,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",
g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Tj=d.Tj||new Zy(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Ea=[_.K.addListener(a,"panes_changed",c),_.K.addListener(g,"zoom_changed",c),_.K.addListener(g,"offset_changed",c),_.K.addListener(b,"projection_changed",c),_.K.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.qf&&(_.ng(b,
"Ox"),_.ao("Ox","-p",a))},hz=function(a){if(a){var b=a.getMap();if(dz(a)!==b&&b&&b instanceof _.qf){var c=b.__gm;c.overlayLayer?a.__gmop=new ez(b,a,c.overlayLayer):c.i.then(function(d){d=d.hb;var e=new fz(b,d);d.ab(e);c.overlayLayer=e;gz(a);hz(a)})}}},gz=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,_.bo("Ox","-p",b.g),b.g.unbindAll(),b.g.set("panes",null),b.g.set("projection",null),b.j.Wc(b),b.i&&(b.i=!1,b.g.onRemove?b.g.onRemove():b.g.remove()))}},dz=function(a){return(a=a.__gmop)?a.map:null},
ez=function(a,b,c){this.map=a;this.g=b;this.j=c;this.i=!1;_.ng(this.map,"Ox");_.ao("Ox","-p",this.g);c.Pc(this)},iz=function(a,b){a.g.get("projection")!=b&&(a.g.bindTo("panes",a.map.__gm),a.g.set("projection",b))},fz=function(a,b){this.o=a;this.j=b;this.g=null;this.i=[]};_.z(Zy,_.M);
Zy.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.ae(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.g:null))};var jz={};_.z(bz,_.M);jz.Pc=function(a){if(a){var b=a.getMap();(az(a).Ij||null)!==b&&(b&&cz(a,b),az(a).Ij=b)}};jz.Wc=function(a){var b=az(a),c=b.Ka;c&&c.unbindAll();(c=b.Tj)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Ea&&_.A(b.Ea,_.K.removeListener);b.Ea=null;b.jg&&(b.jg.Ga.Ib(),b.jg=null);_.bo("Ox","-p",a);delete az(a).Ij};var kz={};ez.prototype.draw=function(){this.i||(this.i=!0,this.g.onAdd&&this.g.onAdd());this.g.draw&&this.g.draw()};fz.prototype.dispose=function(){};fz.prototype.Kb=function(a,b,c,d,e,f,g,h){var k=this.g=this.g||new _.Xp(this.o,this.j,function(){});k.Kb(a,b,c,d,e,f,g,h);a=_.p(this.i);for(b=a.next();!b.done;b=a.next())b=b.value,iz(b,k),b.draw()};fz.prototype.Pc=function(a){this.i.push(a);this.g&&iz(a,this.g);this.j.refresh()};fz.prototype.Wc=function(a){_.cb(this.i,a)};kz.Pc=hz;kz.Wc=gz;_.Xe("overlay",{Li:function(a){if(a){(0,jz.Wc)(a);(0,kz.Wc)(a);var b=a.getMap();b&&(b instanceof _.qf?(0,kz.Pc)(a):(0,jz.Pc)(a))}},preventMapHitsFrom:function(a){_.Pq(a,{onClick:function(b){return _.kq(b.event)},Cb:function(b){return _.hq(b)},Id:function(b){return _.iq(b)},Sb:function(b){return _.iq(b)},Gb:function(b){return _.jq(b)}}).de(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.af);a.addEventListener("contextmenu",_.af);a.addEventListener("dblclick",_.af);a.addEventListener("mousedown",
_.af);a.addEventListener("mousemove",_.af);a.addEventListener("MSPointerDown",_.af);a.addEventListener("pointerdown",_.af);a.addEventListener("touchstart",_.af);a.addEventListener("wheel",_.af)}});});