(this["webpackJsonpgeo-photowall"]=this["webpackJsonpgeo-photowall"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(0),r=n.n(a),c=n(4),i=n.n(c),s=(n(22),n(23),n(10)),u=n(11),j=n(16),d=n(15),h=n(5),p=function(t){return Object(o.jsx)("div",{className:"Post",children:Object(o.jsx)("a",{href:t.img.url,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:t.img.src.medium,alt:t.img.photographer})})})},b=function(t){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"This is GEORGIA \ud83d\udcf7  \ud83c\uddec\ud83c\uddea \u2764\ufe0f"}),Object(o.jsx)("div",{className:"Feed",children:t.photos.map((function(t){return Object(o.jsx)(p,{img:t})}))})]})},l=n(3),O=n(13),g=Object(O.a)("563492ad6f9170000100000153f3dfc509fe4dd28cbf275bcfd9534b"),f=function(){return g.photos.search({query:"Georgia",orientation:"landscape",per_page:50}).then((function(t){return t.photos}))},m="SET-PHOTOS",x="TOGGLE-IS-LOADING",v={photosData:[],isLoading:!1},L=function(t){return{type:x,isLoading:t}},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(l.a)(Object(l.a)({},t),{},{photosData:e.photos});case x:return Object(l.a)(Object(l.a)({},t),{},{isLoading:e.isLoading});default:return t}},y=n.p+"static/media/loading.491eaef9.svg",w=function(t){return Object(o.jsx)("img",{src:y,className:"Preloader",alt:"Preloader is loading"})},D=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getPhotos()}},{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{photos:this.props.photosData}),this.props.isLoading?Object(o.jsx)(w,{}):null]})}}]),n}(r.a.Component),G=Object(h.b)((function(t){return{photosData:t.mainPage.photosData,isLoading:t.mainPage.isLoading}}),{getPhotos:function(){return function(t){t(L(!0)),f().then((function(e){t({type:m,photos:e}),t(L(!1))}))}}})(D);var k=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(G,{})})},N=n(2),E=n(14),I=Object(N.c)({mainPage:P}),S=Object(N.d)(I,Object(N.a)(E.a));window.store=S;var T=S;i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(h.a,{store:T,children:Object(o.jsx)(k,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.460882e2.chunk.js.map