(this["webpackJsonpreact-redux-testing"]=this["webpackJsonpreact-redux-testing"]||[]).push([[0],{10:function(t,e,a){t.exports={navbar:"navbar_navbar__3SrOq",logo:"navbar_logo__2qGJ9"}},2:function(t,e,a){t.exports={postContainer:"post_postContainer__9Pj96",postTitle:"post_postTitle__1VmcJ",postBody:"post_postBody__2vSP6",postTab:"post_postTab__pTnzt",postContainerTitle:"post_postContainerTitle__2sBsJ",addFavouriteButton:"post_addFavouriteButton__1FECq",favouritePostContainer:"post_favouritePostContainer__3bhAW",favouritePostTab:"post_favouritePostTab__-S7g-",favouritePostContainerTitle:"post_favouritePostContainerTitle__3P0Vb",favouritePostTitle:"post_favouritePostTitle__kvKMI",favouritePostBody:"post_favouritePostBody__-W8u2",noFavouritePost:"post_noFavouritePost__2sMvY"}},24:function(t,e,a){t.exports={contentContainer:"app_contentContainer__A6dbJ"}},29:function(t,e,a){t.exports=a(58)},34:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(6),s=a.n(r),c=(a(34),a(20)),i=a(21),u=a(28),l=a(26),d=a(1),p=a(22),v=a.n(p),m=function(t){return{type:"REMOVE_POST_FROM_FAVIOURITE",payload:t}},f=a(5),_=a(2),E=a.n(_),O=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPost()}},{key:"render",value:function(){var t=this,e=this.props.postData;return n.a.createElement("div",{className:E.a.postTab},n.a.createElement("h1",{className:E.a.postContainerTitle},"Posts"),e.loading?n.a.createElement("h2",null,"Loading..."):e.error?n.a.createElement("h3",null,"Error:",e.error):e.posts.map((function(e){return n.a.createElement("div",{className:E.a.postContainer,key:e.id},n.a.createElement("h3",{className:E.a.postTitle},e.title),n.a.createElement("p",{className:E.a.postBody},e.body),e.addPostToFavouriteButton?n.a.createElement("button",{className:E.a.addFavouriteButton,onClick:function(){return t.props.addPostToFavourite(e)}},"Add to favourite"):n.a.createElement("button",{className:E.a.addFavouriteButton,onClick:function(){return t.props.removeFromFavourite(e.id)}},"Remove "))})))}}]),a}(o.Component),T=Object(f.b)((function(t){return{postData:t.postState}}),(function(t){return{fetchPost:function(){return t((function(t){t({type:"FETCH_POST_REQUEST"}),v.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){var a=e.data.map((function(t){return Object(d.a)({},t,{addPostToFavouriteButton:!0})}));t(function(t){return{type:"FETCH_POST_SUCCESS",payload:t}}(a))})).catch((function(e){var a=e.message;t({type:"FETCH_POST_FAILURE",payload:a})}))}))},addPostToFavourite:function(e){return t(function(t){return{type:"ADD_POST_TO_FAVIOURITE",payload:t}}(e))},removeFromFavourite:function(e){return t(m(e))}}}))(O),C=a(10),P=a.n(C);function b(){return n.a.createElement("div",{className:P.a.navbar},n.a.createElement("h1",{className:P.a.logo},"React Redux Posts App"))}function h(){var t=Object(f.d)((function(t){return t.postState})).favouritePost,e=Object(f.c)();return n.a.createElement("div",{className:E.a.favouritePostTab},n.a.createElement("h1",{className:E.a.favouritePostContainerTitle},"  Favourite Posts"),t.length?t.map((function(t){return n.a.createElement("div",{className:E.a.favouritePostContainer,key:t.id},n.a.createElement("h3",{className:E.a.favouritePostTitle},t.title),n.a.createElement("p",{className:E.a.favouritePostBody},t.body),n.a.createElement("button",{className:E.a.addFavouriteButton,onClick:function(){return e(m(t.id))}},"Remove"))})):n.a.createElement("h3",{className:E.a.noFavouritePost},"No Favourite post"))}var y=a(24),F=a.n(y);var N=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(b,null),n.a.createElement("div",{className:F.a.contentContainer},n.a.createElement(T,null),n.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(4),g={cakeType:"Black forest",numOfCakes:10},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INCREMENT_CAKE":return Object(d.a)({},t,{numOfCakes:t.numOfCakes+1});case"DECREMENT_CAKE":return Object(d.a)({},t,{numOfCakes:t.numOfCakes-1});default:return t}},R={numOfIcecream:50},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INCREMENT_ICECREAM":return Object(d.a)({},t,{numOfIcecream:t.numOfIcecream+1});case"DECREMENT_ICECREAM":return Object(d.a)({},t,{numOfIcecream:t.numOfIcecream-1});default:return t}},B={numOfCandy:100},k=a(27),A={loading:!1,posts:[],favouritePost:[],error:""},M=j,w=I,D=Object(S.c)({cakeState:M,icecreamState:w,candyState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INCREMENT_CANDY":return Object(d.a)({},t,{numOfCandy:t.numOfCandy+1});case"DECREMENT_CANDY":return Object(d.a)({},t,{numOfCandy:t.numOfCandy-1});default:return t}},postState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_POST_REQUEST":return Object(d.a)({},t,{loading:!0});case"FETCH_POST_SUCCESS":return Object(d.a)({},t,{loading:!1,posts:e.payload,error:""});case"FETCH_POST_FAILURE":return Object(d.a)({},t,{loading:!1,posts:[],error:e.payload});case"ADD_POST_TO_FAVIOURITE":var a=t.posts.map((function(t){return t.id===e.payload.id?Object(d.a)({},t,{addPostToFavouriteButton:!t.addPostToFavouriteButton}):t}));return Object(d.a)({},t,{posts:a,favouritePost:[].concat(Object(k.a)(t.favouritePost),[e.payload])});case"REMOVE_POST_FROM_FAVIOURITE":var o=t.posts.map((function(t){return t.id===e.payload?Object(d.a)({},t,{addPostToFavouriteButton:!t.addPostToFavouriteButton}):t})),n=t.favouritePost.filter((function(t){return t.id!==e.payload}));return Object(d.a)({},t,{posts:o,favouritePost:n});default:return t}}}),U=a(25),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.d,x=Object(S.e)(D,V(Object(S.a)(U.a)));s.a.render(n.a.createElement(f.a,{store:x},n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.6c04a6ad.chunk.js.map