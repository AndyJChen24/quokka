(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},31:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),o=a(16),i=a(10);a(31);var u=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var s=function({children:e}){return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},e)},m=a(11),E=a.n(m),d=function(){return E.a.get("/api/books")},h=function(e){return E.a.get("/api/books/"+e)},f=function(e){return E.a.delete("/api/books/"+e)},b=function(e){return E.a.post("/api/books",e)},p=a(8);function g({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function v({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}function j({size:e,children:t}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},t)}a(50);function k({children:e}){return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},e))}function N({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}function O(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function y(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function x(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var z=function(){const e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),m=Object(i.a)(c,2),E=m[0],h=m[1];function z(){d().then(e=>r(e.data)).catch(e=>console.log(e))}function S(e){const t=e.target,a=t.name,n=t.value;h(Object(o.a)(Object(o.a)({},E),{},{[a]:n}))}return Object(n.useEffect)(()=>{z()},[]),l.a.createElement(g,{fluid:!0},l.a.createElement(v,null,l.a.createElement(j,{size:"md-6"},l.a.createElement(s,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(O,{onChange:S,name:"title",placeholder:"Title (required)"}),l.a.createElement(O,{onChange:S,name:"author",placeholder:"Author (required)"}),l.a.createElement(y,{onChange:S,name:"synopsis",placeholder:"Synopsis (Optional)"}),l.a.createElement(x,{disabled:!(E.author&&E.title),onClick:function(e){e.preventDefault(),E.title&&E.author&&b({title:E.title,author:E.author,synopsis:E.synopsis}).then(e=>z()).catch(e=>console.log(e))}},"Submit Book"))),l.a.createElement(j,{size:"md-6 sm-12"},l.a.createElement(s,null,l.a.createElement("h1",null,"Books On My List")),a.length?l.a.createElement(k,null,a.map(e=>l.a.createElement(N,{key:e._id},l.a.createElement(p.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(u,{onClick:()=>{return t=e._id,void f(t).then(e=>z()).catch(e=>console.log(e));var t}})))):l.a.createElement("h3",null,"No Results to Display"))))},S=a(1);var B=function(){const e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(S.f)().id;return Object(n.useEffect)(()=>{h(c).then(e=>r(e.data)).catch(e=>console.log(e))},[]),l.a.createElement(g,{fluid:!0},l.a.createElement(v,null,l.a.createElement(j,{size:"md-12"},l.a.createElement(s,null,l.a.createElement("h1",null,a.title," by ",a.author)))),l.a.createElement(v,null,l.a.createElement(j,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,a.synopsis)))),l.a.createElement(v,null,l.a.createElement(j,{size:"md-2"},l.a.createElement(p.b,{to:"/"},"\u2190 Back to Authors"))))};var w=function(){return l.a.createElement(g,{fluid:!0},l.a.createElement(v,null,l.a.createElement(j,{size:"md-12"},l.a.createElement(s,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var C=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var R=function(){return l.a.createElement(p.a,null,l.a.createElement(C,null),l.a.createElement("div",null,l.a.createElement(S.c,null,l.a.createElement(S.a,{exact:!0,path:"/"},l.a.createElement(z,null)),l.a.createElement(S.a,{exact:!0,path:"/books"},l.a.createElement(z,null)),l.a.createElement(S.a,{path:"/books/:id",children:l.a.createElement(B,null)}),l.a.createElement(S.a,null,l.a.createElement(w,null)))))};c.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.cb59ca0e.chunk.js.map