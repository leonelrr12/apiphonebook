(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t(14),a=t.n(c),o=t(3),i=t(4),u=t.n(i),s="/api/persons",d=function(){return u.a.get(s).then((function(e){return e.data}))},b=function(e){return u.a.post(s,e).then((function(e){return e.data}))},l=function(e,n){return u.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){return u.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},f=t(0),h=function(e){var n=e.name,t=e.setNewName,r=e.number,c=e.setNewNumber,a=e.addPerson;return Object(f.jsxs)("form",{children:[Object(f.jsxs)("div",{children:["Name: ",Object(f.jsx)("input",{name:"name",value:n,onChange:function(e){return t(e.target.value)}})]}),Object(f.jsxs)("div",{children:["Number: ",Object(f.jsx)("input",{name:"number",value:r,onChange:function(e){return c(e.target.value)}})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",onClick:a,children:"Add"})})]})},m=function(e){var n=e.result,t=e.deletePerson;return Object(f.jsx)("ul",{children:n.map((function(e,n){return Object(f.jsxs)("li",{children:[e.name," ",e.number,Object(f.jsx)("button",{onClick:function(){return t(e.id)},children:"Delete"})]},n)}))})},O=function(e){var n=e.search,t=e.setSearch;return Object(f.jsxs)(f.Fragment,{children:["Filter shown with: ",Object(f.jsx)("input",{name:"search",value:n,onChange:function(e){return t(e.target.value)}})]})},x=function(e){var n=e.message,t=n.text,r={color:n.tipo,background:"lightgray",borderStyle:"solid",borderRadius:15,fontSize:16,padding:10,paddingLeft:30,marginBottom:15,width:350};return Object(f.jsx)("div",{style:r,children:t})},p=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),i=Object(o.a)(a,2),u=i[0],s=i[1],p=Object(r.useState)(""),v=Object(o.a)(p,2),g=v[0],w=v[1],N=Object(r.useState)(""),k=Object(o.a)(N,2),C=k[0],S=k[1],y=Object(r.useState)({text:"",tipo:"green"}),L=Object(o.a)(y,2),P=L[0],D=L[1];Object(r.useEffect)((function(){d().then((function(e){c(e)}))}),[]);var E=function(e,n){D({text:e,tipo:n}),setTimeout((function(){D("")}),2e3)},F=C?t.filter((function(e){return e.name.toLocaleLowerCase().includes(C.toLocaleLowerCase())})):t;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Phonebook"}),P.text?Object(f.jsx)(x,{message:P}):"",Object(f.jsx)(O,{search:C,setSearch:S}),Object(f.jsx)("h2",{children:"Add a new"}),Object(f.jsx)(h,{name:u,setNewName:s,number:g,setNewNumber:w,addPerson:function(e){e.preventDefault();var n=t.map((function(e){return e.name})),r=t.map((function(e){return e.number})),a=n.indexOf(u);if(n.indexOf(u)>=0){var o=t[a].id;if(r.indexOf(g)>=0)return void E("".concat(u," and ").concat(g," is already added to phonebook"),"blue");if(!window.confirm("".concat(u," is already added to phonebook, \nreplace the old number with a new one?")))return;l(o,{name:u,number:g}).then((function(e){c(e),s(""),w(""),E("Contacto actualizado.")})).catch((function(e){c(t.filter((function(e){return e.id!==o}))),E("La persona ".concat(u," no existe en el servidor!"))}))}else b({name:u,number:g}).then((function(e){c(e),s(""),w(""),E("Nueva contacta adicionado.","green")})).catch((function(e){E("Error al crear nuevo contacto!","red")}))}}),Object(f.jsx)("h2",{children:"Numbers"}),Object(f.jsx)(m,{result:F,deletePerson:function(e){window.confirm("Realmente desea eliminar este registro?")&&j(e).then((function(e){c(e),E("Contacto eliminado.","green")})).catch((function(n){c(t.filter((function(n){return n.id!==e}))),E("La persona con ID: ".concat(e," no existe en el servidor!"),"red")}))}})]})};a.a.render(Object(f.jsx)(p,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.115aa607.chunk.js.map