(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},39:function(e,t,a){},40:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(30),o=a.n(l),m=(a(39),a(40),a(8)),r=a(9),s=a(11),i=a(10),u=a(12),d=a(15),E=a.n(d),h=(a(58),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={menuItems:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://formula-test-api.herokuapp.com/menu").then(function(t){var a=t.data,n=new Date("01/01/2018"),c=a.filter(function(e){var t=e.expirationDate.split("-");return new Date(t[2],+t[0]-1,t[1])>n});e.setState({menuItems:c})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement("section",{id:"section-content"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"intro"},c.a.createElement("div",{className:"intro-icon"},c.a.createElement("img",{src:"icons/hotdog.png",alt:"hotdog"})),c.a.createElement("h2",null,"Dirty Dogs serves all-beef, vegan and vegatagian hot dogs."),c.a.createElement("div",{className:"btn"},c.a.createElement("a",{href:"#"},"More Dogs\u2018n Make Em Hot"))),c.a.createElement("div",{className:"content-wr"},this.state.menuItems.map(function(e){return c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"block"},c.a.createElement("div",{className:"block-text"},c.a.createElement("div",{className:"block-text-inner"},c.a.createElement("div",{className:"block-title"},c.a.createElement("h2",null,e.name)),c.a.createElement("div",{className:"block-content"},c.a.createElement("p",null,e.description))))),c.a.createElement("div",{className:"block"},c.a.createElement("div",{className:"block-image"},c.a.createElement("img",{src:e.backgroundURL,alt:"image"}))))})))))}}]),t}(n.Component)),g=(a(59),a(5)),p=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).state={isActive:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"toggleActive",value:function(){this.setState({isActive:!this.state.isActive}),document.querySelector(".mobile-menu-wrapper").classList.contains("active")?document.body.style.overflow="auto":document.body.style.overflow="hidden"}},{key:"render",value:function(){var e=this,t=this.state.isActive;return c.a.createElement("div",{className:"header"},c.a.createElement("main",{id:"main"},c.a.createElement("section",{id:"section-header"},c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-inner"},c.a.createElement("div",{className:"photo-grid"},c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"hashtag"},c.a.createElement("a",{href:"#"},"#hotdogs")),c.a.createElement("div",{className:"grid"},c.a.createElement("img",{className:"photo",src:"img/photo1.png",alt:"hotdog"}),c.a.createElement("img",{className:"photo",src:"img/photo2.png",alt:"hotdog"}),c.a.createElement("img",{className:"photo",src:"img/photo3.png",alt:"hotdog"}),c.a.createElement("img",{className:"photo",src:"img/photo4.png",alt:"hotdog"}),c.a.createElement("img",{className:"photo",src:"img/photo5.png",alt:"hotdog"}),c.a.createElement("img",{className:"photo",src:"img/photo6.png",alt:"hotdog"})),c.a.createElement("div",{className:"grid"},c.a.createElement("img",{className:"photo",src:"img/photo7.png",alt:"hotdog"}),c.a.createElement("img",{className:"photo",src:"img/photo8.png",alt:"hotdog"}),c.a.createElement("img",{className:"photo",src:"img/photo9.png",alt:"hotdog"}),c.a.createElement("img",{className:"photo",src:"img/photo10.png",alt:"hotdog"}),c.a.createElement("img",{className:"photo",src:"img/photo11.png",alt:"hotdog"}),c.a.createElement("img",{className:"photo",src:"img/photo12.png",alt:"hotdog"}))),c.a.createElement("nav",{className:"desctop-menu"},c.a.createElement("ul",null,c.a.createElement(g.b,{to:"/"},c.a.createElement("li",null,"Menu")),c.a.createElement(g.b,{to:"/Catering"},c.a.createElement("li",null,"Catering")),c.a.createElement(g.b,{to:"/AboutUs"},c.a.createElement("li",null,"About us")),c.a.createElement(g.b,{to:"/Contacts"},c.a.createElement("li",null,"Contact"))))),c.a.createElement("div",{className:"mobile-controls",onClick:function(){return e.toggleActive()}},c.a.createElement("div",{className:"hotdog ".concat(t?"active":"")},c.a.createElement("img",{src:"icons/hotdog-mobile.png",alt:"hotdog"})),c.a.createElement("div",{className:"close ".concat(t?"active":"")},c.a.createElement("img",{src:"icons/close.png",alt:"close"}))),c.a.createElement("nav",{className:"mobile-menu-wrapper ".concat(t?"active":"")},c.a.createElement("div",{className:"mobile-menu"},c.a.createElement("ul",null,c.a.createElement(g.b,{to:"/"},c.a.createElement("li",null,"Menu")),c.a.createElement(g.b,{to:"/Catering"},c.a.createElement("li",null,"Catering")),c.a.createElement(g.b,{to:"/AboutUs"},c.a.createElement("li",null,"About us")),c.a.createElement(g.b,{to:"/Contacts"},c.a.createElement("li",null,"Contact")))))))))}}]),t}(n.Component),v=a(33),N=(a(64),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).changeHandler=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.submitHandler=function(t){t.preventDefault(),E.a.post(" https://formula-test-api.herokuapp.com/contact",e.state).then(function(e){console.log(e),console.log(e.data)})},e.state={name:"",email:"",comment:""},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.comment;return c.a.createElement("div",{className:"contacts"},c.a.createElement("section",{id:"contacts"},c.a.createElement("div",{className:"form-wr"},c.a.createElement("form",{onSubmit:this.submitHandler},c.a.createElement("div",{className:"form-inner"},c.a.createElement("div",{className:"inputs-wr"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your Name",id:"name",value:t,onChange:this.changeHandler}),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email Address",id:"e-mail",value:a,onChange:this.changeHandler})),c.a.createElement("textarea",{name:"comment",id:"message",placeholder:"Comment...",maxLength:"1000",value:n,onChange:this.changeHandler}),c.a.createElement("div",{className:"button"},c.a.createElement("button",null,"Send Message")))))))}}]),t}(n.Component)),b=a(7);a(65);var f=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("section",{id:"section-footer"},c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer-inner"},c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"block"},c.a.createElement("div",{className:"creator"},c.a.createElement("p",null,"\xae 2016 Dirty Dogs all rights reserved"))),c.a.createElement("div",{className:"block"},c.a.createElement("div",{className:"contacts"},c.a.createElement("p",null,"274 Marconi Blvd. Columbus, Ohio 43215"),c.a.createElement("p",{className:"line"},"|"),c.a.createElement("p",null,"614.538.0095"),c.a.createElement("p",{className:"line"},"|"),c.a.createElement("a",{href:"#"},"Contact Us"))))))))};var k=function(){return c.a.createElement(g.a,null,c.a.createElement("div",{id:"main"},c.a.createElement(p,null),c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/",exact:!0,component:h}),c.a.createElement(b.a,{path:"/Contacts",component:N})),c.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.a3cb3d54.chunk.js.map