(this.webpackJsonpchalhoubgroup=this.webpackJsonpchalhoubgroup||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},25:function(e,a,t){e.exports=t(45)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(18),o=t.n(r),l=(t(30),t(31),t(32),t(33),t(19)),s=t(20),m=t(24),i=t(23),u=(t(34),t(7)),d=t(21),p=t.n(d),_=t(10),E=t(11);var N=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=a.call(this,e)).state={ProductData:[],isLoading:!1},c}return Object(s.a)(t,[{key:"GetProduct",value:function(e){var a=this;fetch(e).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong ...")})).then((function(e){return a.setState({ProductData:e,isLoading:!1})})).catch((function(e){a.setState({error:e,isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.GetProduct("./data/product-1.json")}},{key:"render",value:function(){var e=this,a=this.state,t=a.ProductData,c=a.isLoading,r=a.error;return r?n.a.createElement("p",null,r.message):c?n.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}):t&&t.data&&t.moreProducts?n.a.createElement("div",{className:"m-product","data-testid":"Product"},n.a.createElement("div",{className:"m-product__image-container"},n.a.createElement("img",{className:"m-product__image",src:t.data.image,alt:t.data.alt,onClick:function(){e.GetProduct("./data/product-2.json")}}),n.a.createElement("button",{className:"m-product__preview-btn"},n.a.createElement(_.a,{icon:E.a,className:"m-product__preview-btn-icon"}))),n.a.createElement("div",{className:"m-product__info"},n.a.createElement("h3",{className:"m-product__title"},t.data.title),n.a.createElement("p",{className:"m-product__price-container"},n.a.createElement("span",{className:"m-product__currency"},t.data.currency),n.a.createElement("span",{className:"m-product__price"},t.data.price)),n.a.createElement("p",{className:"m-product__sizes"},"available sizes:",t.data.sizes.map((function(e,a){return n.a.createElement("span",{key:a,className:"m-product__size"},e)}))),n.a.createElement("div",{className:"m-product__colors-container"},n.a.createElement("p",{className:"m-product__colors-label"},"Colors"),n.a.createElement("div",{className:"m-product__colors"},t.data.colors.map((function(e,a){return n.a.createElement("button",{key:a,className:"m-product__color",style:{backgroundColor:e}})}))),n.a.createElement("div",{className:"m-product__color-bg"}))),n.a.createElement("div",{className:"m-product__description-container"},n.a.createElement("p",{className:"m-product__description-title"},t.data.descriptionTitle),n.a.createElement("p",{className:"m-product__description"},t.data.description),n.a.createElement("ul",{className:"m-product__description-list"},t.data.descriptionList.map((function(e,a){return n.a.createElement("li",{key:a,className:"m-product__description-list-item"},e)})))),n.a.createElement("div",{className:"m-product__more-products"},n.a.createElement("p",{className:"m-product__description-title"},t.moreProducts.title),n.a.createElement("div",{className:"m-product__more-products-images"},t.moreProducts.images.map((function(e,a){return n.a.createElement(u.b,{to:e.link,key:a,className:"m-product__more-products-link"},n.a.createElement("img",{className:"m-product__more-products-image",src:e.smallImage,alt:e.alt}))}))))):void 0}}]),t}(n.a.Component),h=function(){return n.a.createElement("div",{className:"Home","data-testid":"Home"},n.a.createElement("div",{className:"layout"},n.a.createElement(N,null)))},f=(t(42),t(43),function(){return n.a.createElement("div",{className:"c-search__container","data-testid":"Search"},n.a.createElement("form",null,n.a.createElement("div",{className:"c-search__inner"},n.a.createElement("input",{className:"c-search__input",name:"search",placeholder:"search"}),n.a.createElement("button",{className:"c-search__btn"},n.a.createElement(_.a,{icon:E.b,className:"c-search__btn-icon"})))))}),v=["men","women","kids","ftw","accessories"].map((function(e,a){return n.a.createElement("li",{key:a,className:"l-header__menu-item"},n.a.createElement(u.b,{to:"/",className:"l-header__menu-link"},e))})),g=function(){return n.a.createElement("header",{className:"Header","data-testid":"Header"},n.a.createElement("div",{className:"layout"},n.a.createElement("div",{className:"l-header__container"},n.a.createElement(u.b,{to:"/",className:"l-header__logo"},n.a.createElement("h1",null,"Logo")),n.a.createElement("nav",null,n.a.createElement("ul",{className:"l-header__menu"},v)),n.a.createElement(f,null))))},b=(t(44),function(){return n.a.createElement("div",{className:"Footer","data-testid":"Footer"},n.a.createElement("div",{className:"layout"}))}),k=t(2);var w=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u.a,null,n.a.createElement(g,null),n.a.createElement(k.c,null,n.a.createElement(k.a,{path:"/",exact:!0,component:h})),n.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.8f423aa3.chunk.js.map