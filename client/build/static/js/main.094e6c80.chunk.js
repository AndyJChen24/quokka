(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{28:function(e,t,a){e.exports=a(57)},33:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),c=a.n(r),o=a(15),i=a(11);a(33);var m=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var u=function({children:e}){return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},e)},s=a(7),p=a.n(s),E=function(){return p.a.get("/api/books")},d=function(e){return p.a.get("/api/books/"+e)},h=function(e){return p.a.delete("/api/books/"+e)},f=function(e){return p.a.post("/api/books",e)},b=a(9);function g({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function k({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}function v({size:e,children:t}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},t)}a(51);function x({children:e}){return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},e))}function y({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}function N(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function j(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function O(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var C=function(e){return p.a.get("https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants/?temperature_minimum_deg_f<".concat(e,"&token=").concat("cHhTeGd4R21rUFc3b2tMK0x4bDNqQT09"))},T=function(){return p.a.get("https://trefle.io/api/species/984782?token=".concat("cHhTeGd4R21rUFc3b2tMK0x4bDNqQT09"),{method:"GET","Content-Type":"application/json","Access-Control-Allow-Origin":"*"})},w=function(e){return p.a.get("/api/plants/species/milkweed")};var S=function(){const e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),s=Object(i.a)(c,2),p=s[0],d=s[1];function S(){E().then(e=>r(e.data)).catch(e=>console.log(e))}function z(e){const t=e.target,a=t.name,n=t.value;d(Object(o.a)(Object(o.a)({},p),{},{[a]:n}))}return Object(n.useEffect)(()=>{S()},[]),l.a.createElement(g,{fluid:!0},l.a.createElement(k,null,l.a.createElement(v,{size:"md-6"},l.a.createElement(u,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(N,{onChange:z,name:"title",placeholder:"Title (required)"}),l.a.createElement(N,{onChange:z,name:"author",placeholder:"Author (required)"}),l.a.createElement(j,{onChange:z,name:"synopsis",placeholder:"Synopsis (Optional)"}),l.a.createElement(O,{disabled:!(p.author&&p.title),onClick:function(e){e.preventDefault(),p.title&&p.author&&f({title:p.title,author:p.author,synopsis:p.synopsis}).then(e=>S()).catch(e=>console.log(e))}},"Submit Book")),l.a.createElement("form",null,l.a.createElement(N,{onChange:z,name:"minTemp",placeholder:"MinTemp"}),l.a.createElement(O,{onClick:function(e){e.preventDefault(),C(p.minTemp).then(e=>console.log(e))}},"Submit Temp")),l.a.createElement("form",null,l.a.createElement(O,{onClick:function(e){e.preventDefault(),T().then(e=>console.log(e.data.images[0].url))}},"Get Image URL")),l.a.createElement("form",null,l.a.createElement(O,{onClick:function(e){e.preventDefault(),w("milkweed").then(e=>console.log(e))}},"Get Plants By Common Name"))),l.a.createElement(v,{size:"md-6 sm-12"},l.a.createElement(u,null,l.a.createElement("h1",null,"Books On My List")),a.length?l.a.createElement(x,null,a.map(e=>l.a.createElement(y,{key:e._id},l.a.createElement(b.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(m,{onClick:()=>{return t=e._id,void h(t).then(e=>S()).catch(e=>console.log(e));var t}})))):l.a.createElement("h3",null,"No Results to Display"))))},z=a(1);var B=function(){const e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(z.f)().id;return Object(n.useEffect)(()=>{d(c).then(e=>r(e.data)).catch(e=>console.log(e))},[c]),l.a.createElement(g,{fluid:!0},l.a.createElement(k,null,l.a.createElement(v,{size:"md-12"},l.a.createElement(u,null,l.a.createElement("h1",null,a.title," by ",a.author)))),l.a.createElement(k,null,l.a.createElement(v,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,a.synopsis)))),l.a.createElement(k,null,l.a.createElement(v,{size:"md-2"},l.a.createElement(b.b,{to:"/"},"\u2190 Back to Authors"))))};var q=function(){return l.a.createElement(g,{fluid:!0},l.a.createElement(k,null,l.a.createElement(v,{size:"md-12"},l.a.createElement(u,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var D=()=>l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",style:{boxShadow:"0px 5px 10px 5px pink",marginBottom:"20px"}},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:"../img/quokka-logo.png",alt:"quokka-image",style:{width:"65px",height:"65px",margin:"0px 10px 25px 0px",position:"absolute"}}),l.a.createElement("p",{style:{position:"relative",padding:"12px 0px 0px 75px",color:"cornsilk",fontSize:"30px",fontFamily:"Chalkduster, fantasy"}},"quokka")));var R=function(){return l.a.createElement(b.a,null,l.a.createElement(D,null),l.a.createElement("div",null,l.a.createElement(z.c,null,l.a.createElement(z.a,{exact:!0,path:"/"},l.a.createElement(S,null)),l.a.createElement(z.a,{exact:!0,path:"/books"},l.a.createElement(S,null)),l.a.createElement(z.a,{path:"/books/:id",children:l.a.createElement(B,null)}),l.a.createElement(z.a,null,l.a.createElement(q,null)))))};c.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.094e6c80.chunk.js.map