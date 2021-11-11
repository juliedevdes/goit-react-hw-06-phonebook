(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={list:"ContactsList_list__34tUS",item:"ContactsList_item__3rKXe"}},13:function(t,e,n){t.exports={label:"Filter_label__2qBQy",input:"Filter_input__2oxEd"}},15:function(t,e,n){t.exports={root:"App_root__2hjlr"}},29:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=n(3),u=n(31),s=n(5),l=n.n(s),b=n(2),m=n(1);var j=Object(b.b)(null,(function(t){return{onSubmit:function(e){return t(function(t){return{type:"SUBMIT",payload:t}}(e))}}}))((function(t){var e=t.onSubmit,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(""),b=Object(i.a)(s,2),j=b[0],d=b[1],p=Object(a.useState)(Object(u.a)()),h=Object(i.a)(p,2),f=h[0],O=h[1],_=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":d(a);break;default:return}},v=function(){O(Object(u.a)()),d(""),o("")};return Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:c,number:j,id:f}),v()},children:[Object(m.jsxs)("label",{children:["name:",Object(m.jsx)("input",{className:l.a.inputName,placeholder:"Jane Wayeet",name:"name",onChange:_,value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",type:"text",required:!0})]}),Object(m.jsxs)("label",{className:l.a.label,children:["number:",Object(m.jsx)("input",{className:l.a.inputNum,placeholder:"+ 00-000-00",name:"number",onChange:_,value:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",type:"tel",required:!0})]}),Object(m.jsx)("button",{className:l.a.btn,type:"submit",children:"add contact"})]})})),d=n(9),p=n.n(d);var h=Object(b.b)(null,(function(t){return{removeContact:function(e){return t(function(t){return{type:"DELETE_CONTACT",payload:t}}(e))}}}))((function(t){var e=t.id,n=t.name,a=t.number,r=t.removeContact;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{className:p.a.name,children:[" ",n]}),Object(m.jsxs)("span",{className:p.a.num,children:[" ",a]}),Object(m.jsx)("button",{className:p.a.btn,name:n,onClick:function(){return r(e)},children:"delete"})]})})),f=n(12),O=n.n(f);var _=Object(b.b)((function(t){return{contacts:(e=t.contacts,n=t.filter,e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})))};var e,n}))((function(t){var e=t.contacts;return Object(m.jsx)("ul",{className:O.a.list,children:e.map((function(t){return Object(m.jsx)("li",{className:O.a.item,children:Object(m.jsx)(h,{name:t.name,number:t.number,id:t.id})},t.id)}))})}));var v=n(13),x=n.n(v);var N=Object(b.b)((function(t){return{filter:t.filter}}),(function(t){return{handleFilter:function(e){return t(function(t){return{type:"HANDLE_FILTER",payload:t}}(e))}}}))((function(t){var e=t.handleFilter,n=t.filter;return Object(m.jsxs)("label",{className:x.a.label,children:["search through your contacts",Object(m.jsx)("input",{placeholder:"...",className:x.a.input,name:"filterValue",onChange:function(t){e(t.currentTarget.value)},value:n})]})})),C=n(15),y=n.n(C);function g(){return Object(m.jsxs)("div",{className:y.a.root,children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(j,{}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(N,{}),Object(m.jsx)(_,{})]})}var T=n(17),L=n(8),S=n(16),E=Object(L.combineReducers)({filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;return"HANDLE_FILTER"===n?"".concat(a):t},contacts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case"SUBMIT":return t.some((function(t){return t.name===a.name}))?(alert("There is already contact with the same name"),t):[].concat(Object(T.a)(t),[a]);case"DELETE_CONTACT":return t.filter((function(t){return t.id!==a}));default:return t}}}),F=Object(L.createStore)(E,Object(S.composeWithDevTools)());o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(b.a,{store:F,children:Object(m.jsx)(g,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={inputName:"ContactForm_inputName__1iBvm",inputNum:"ContactForm_inputNum__2gVNq",label:"ContactForm_label__ZM1dF",btn:"ContactForm_btn__2Dqt5"}},9:function(t,e,n){t.exports={name:"ContactsListItem_name__3ybtg",num:"ContactsListItem_num__SrA5q",btn:"ContactsListItem_btn__3nWSA"}}},[[29,1,2]]]);
//# sourceMappingURL=main.b41ae233.chunk.js.map