(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),i=n.n(c),s=n(25),l=(n(93),n(94),n(41)),o=n(141),d=n(143),b=n(68),j=n.n(b),u=n(33),m=n.n(u),O=n(26),h=Object(O.b)("contacts/add"),p=Object(O.b)("contacts/del"),x=Object(O.b)("filter/set"),f=n(73),v=n(2);function y(){var e,t,n,a,r=Object(f.a)(),c=r.register,i=r.handleSubmit,b=r.reset,u=r.formState.errors,O=Object(s.b)();return Object(v.jsxs)("form",{className:m.a.form,onSubmit:i((function(e){O(h(Object(l.a)(Object(l.a)({},e),{},{id:Object(o.a)()}))),b()})),children:[Object(v.jsxs)("label",{className:m.a.label,children:["Name",Object(v.jsx)("input",Object(l.a)({type:"text",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."},c("name",{required:!0,pattern:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/}))),"required"===(null===u||void 0===u||null===(e=u.name)||void 0===e?void 0:e.type)&&Object(v.jsx)("p",{className:m.a.error,children:"This field is required"}),"pattern"===(null===u||void 0===u||null===(t=u.name)||void 0===t?void 0:t.type)&&Object(v.jsx)("p",{className:m.a.error,children:"Alphabetical characters only"})]}),Object(v.jsxs)("label",{className:m.a.label,children:["Number",Object(v.jsx)("input",Object(l.a)(Object(l.a)({type:"tel"},c("number",{required:!0,pattern:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/})),{},{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"})),"required"===(null===u||void 0===u||null===(n=u.number)||void 0===n?void 0:n.type)&&Object(v.jsx)("p",{className:m.a.error,children:"This field is required"}),"pattern"===(null===u||void 0===u||null===(a=u.number)||void 0===a?void 0:a.type)&&Object(v.jsx)("p",{className:m.a.error,children:"Numeric characters only"})]}),Object(v.jsx)(d.a,{variant:"contained",type:"submit",size:"small",endIcon:Object(v.jsx)(j.a,{}),children:"Add contact"})]})}var C=n(144),g=n(69),_=n.n(g),N=n(50),k=n.n(N);function w(e){var t=e.contact,n=e.handleDelItem;return Object(v.jsxs)("li",{className:k.a.item,children:[Object(v.jsxs)("span",{children:[t.name,": ",Object(v.jsx)("span",{children:t.number})]}),Object(v.jsx)(C.a,{"aria-label":"delete",id:t.id,onClick:n,children:Object(v.jsx)(_.a,{})})]})}function A(e){e.handleDelItem;var t=Object(s.c)((function(e){return e.contacts.filter((function(t){return t.name.toLocaleLowerCase().includes(e.filter.toLowerCase())}))})),n=Object(s.b)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{className:k.a.title,children:"Contacts"}),Object(v.jsx)("ul",{children:t.map((function(e){return Object(v.jsx)(w,{contact:e,handleDelItem:function(){return n(p(e.id))}},e.id)}))})]})}var L=n(139);function F(){var e=Object(s.c)((function(e){return e.filter})),t=Object(s.b)();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(L.a,{id:"standard-search",label:"Find contacts by name",type:"search",variant:"standard",value:e,onChange:function(e){return t(x(e.target.value))}})})}function q(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)("h1",{className:"appTitle",children:"Phonebook"}),Object(v.jsx)(y,{}),Object(v.jsx)(F,{}),Object(v.jsx)(A,{})]})}var z,I=n(4),J=n(14),S=n(19),M=Object(O.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(z={},Object(I.a)(z,h,(function(e,t){var n=t.payload;return e.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?(alert("this contact already exists"),e):[].concat(Object(J.a)(e),[n])})),Object(I.a)(z,p,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),z)),D=Object(O.c)("",Object(I.a)({},x,(function(e,t){return t.payload}))),T=Object(S.b)({contacts:M,filter:D}),Z=n(29),B=n(70),E={key:"\u0441ontacts",storage:n.n(B).a,blacklist:["filter"]},G=Object(Z.g)(E,T),H=Object(O.a)({reducer:G,middleware:Object(O.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})}),K=Object(Z.h)(H),P=n(71);i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(s.a,{store:H,children:Object(v.jsx)(P.a,{loading:Object(v.jsx)("p",{children:"Loading..."}),persistor:K,children:Object(v.jsx)(q,{})})})}),document.getElementById("root"))},33:function(e,t,n){e.exports={form:"ContactsForm_form__M96xx",label:"ContactsForm_label__3pJFc",error:"ContactsForm_error__3rtGx"}},50:function(e,t,n){e.exports={title:"ContactList_title__2Jsga",item:"ContactList_item__3MYQO"}},93:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.653a945e.chunk.js.map