(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(14),a=n.n(c),o=n(3),i=n(4),u=n.n(i),s="/api/persons",d=function(){return u.a.get(s).then((function(e){return e.data}))},b=function(e){return u.a.post(s,e).then((function(e){return e.data}))},f=function(e,t){return u.a.put("".concat(s,"/").concat(e),t).then((function(e){return e.data}))},j=function(e){return u.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},l=n(0),h=function(e){var t=e.name,n=e.setNewName,r=e.number,c=e.setNewNumber,a=e.addPerson;return Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{children:["Name: ",Object(l.jsx)("input",{name:"name",value:t,onChange:function(e){return n(e.target.value)}})]}),Object(l.jsxs)("div",{children:["Number: ",Object(l.jsx)("input",{name:"number",value:r,onChange:function(e){return c(e.target.value)}})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",onClick:a,children:"Add"})})]})},m=function(e){var t=e.result,n=e.deletePerson;return Object(l.jsx)("ul",{children:t.map((function(e,t){return Object(l.jsxs)("li",{children:[e.name," ",e.number,Object(l.jsx)("button",{onClick:function(){return n(e.id)},children:"Delete"})]},t)}))})},O=function(e){var t=e.search,n=e.setSearch;return Object(l.jsxs)(l.Fragment,{children:["Filter shown with: ",Object(l.jsx)("input",{name:"search",value:t,onChange:function(e){return n(e.target.value)}})]})},p=function(e){var t=e.message,n=t.text,r={color:t.tipo,background:"lightgray",borderStyle:"solid",borderRadius:15,fontSize:16,padding:10,paddingLeft:30,marginBottom:15,width:350};return Object(l.jsx)("div",{style:r,children:n})},x=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(o.a)(a,2),u=i[0],s=i[1],x=Object(r.useState)(""),g=Object(o.a)(x,2),v=g[0],w=g[1],N=Object(r.useState)(""),k=Object(o.a)(N,2),C=k[0],S=k[1],y=Object(r.useState)({text:"",tipo:"green"}),E=Object(o.a)(y,2),L=E[0],P=E[1];Object(r.useEffect)((function(){d().then((function(e){c(e)}))}),[]);var F=function(e,t){P({text:e,tipo:t}),setTimeout((function(){P("")}),2e3)},z=C?n.filter((function(e){return e.name.toLocaleLowerCase().includes(C.toLocaleLowerCase())})):n;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Phonebook"}),L.text?Object(l.jsx)(p,{message:L}):"",Object(l.jsx)(O,{search:C,setSearch:S}),Object(l.jsx)("h2",{children:"Add a new"}),Object(l.jsx)(h,{name:u,setNewName:s,number:v,setNewNumber:w,addPerson:function(e){e.preventDefault();var t=n.map((function(e){return e.name})),r=n.map((function(e){return e.number})),a=t.indexOf(u);if(t.indexOf(u)>=0){var o=n[a].id;if(r.indexOf(v)>=0)return void F("".concat(u," and ").concat(v," is already added to phonebook"),"blue");if(!window.confirm("".concat(u," is already added to phonebook, \nreplace the old number with a new one?")))return;f(o,{name:u,number:v}).then((function(e){c(n.map((function(t){return t.id===o?e:t}))),s(""),w(""),F("Contacto actualizado.")})).catch((function(e){c(n.filter((function(e){return e.id!==o}))),F("Error: ".concat(e.response.data.error))}))}else b({name:u,number:v}).then((function(e){c(n.concat(e)),s(""),w(""),F("Nueva contacta adicionado.","green")})).catch((function(e){F("Error: ".concat(e.response.data.error))}))}}),Object(l.jsx)("h2",{children:"Numbers"}),Object(l.jsx)(m,{result:z,deletePerson:function(e){window.confirm("Realmente desea eliminar este registro?")&&j(e).then((function(t){c(n.filter((function(t){return t.id!==e}))),F("Contacto eliminado.","green")})).catch((function(t){c(n.filter((function(t){return t.id!==e}))),F("Error: ".concat(t.response.data.error),"red")}))}})]})};a.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9818b6cb.chunk.js.map