"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[181],{9181:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var a=t(9434),r=t(4270),s=t(3064),c=function(e){return e.contacts},i=function(e){return e.contacts.isLoading},o=t(2791),m="ContactList_delete__dvPUy",l="ContactList_ContactUl__I-fzQ",u="ContactList_ContactItem__XiC+M",_="ContactList_ContactName__vEA6D",d="ContactList_ContactNumber__Cxv8N",f=t(3329),h=function(){var e=(0,a.I0)();(0,o.useEffect)((function(){e(s.yF())}),[e]);var n=(0,a.v9)((function(e){return e.filters}))||"",t=function(e,n){return n===n?e.filter((function(e){return e.name.toLowerCase().includes(n)})):e}((0,a.v9)(c).items,n);return(0,f.jsx)("ul",{className:l,children:t.map((function(n){return(0,f.jsxs)("li",{className:u,children:[(0,f.jsxs)("span",{className:_,children:[n.name,":"]}),(0,f.jsx)("span",{className:d,children:n.number})," ",(0,f.jsx)("button",{className:m,onClick:function(){return t=n.id,a=n.name,void e(s.zY({id:t,name:a}));var t,a},children:"Delete"})]},n.id)}))})},x=t(5705),j=t(6727),p=t(3402),v="ContactForm_FormWrapper__Fx9VQ",C="ContactForm_FormLabel__SwfwS",b="ContactForm_FormInput__s9Pni",F="ContactForm_ButtonForm__X1lS5",N={name:"",number:""},L=function(){var e=(0,a.I0)(),n=(0,a.v9)(c).items,t=j.Ry().shape({name:j.Z_().required().min(4),number:j.Rx().required().min(4)});return(0,f.jsx)(x.J9,{initialValues:N,validationSchema:t,onSubmit:function(t,a){var r=a.resetForm;if(n.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})))return p.ZP.error("".concat(t.name," is already in contacts"))({duration:1e3,position:"top-center"});e(s.uK({name:t.name.trim(),number:t.number.trim()})),r()},children:(0,f.jsxs)(x.l0,{className:v,children:[(0,f.jsx)("label",{className:C,htmlFor:"name",children:"Name"}),(0,f.jsx)(x.gN,{className:b,name:"name",type:"name"}),(0,f.jsx)(x.Bc,{name:"name",component:"div"}),(0,f.jsx)("label",{className:C,htmlFor:"number",children:"Number"}),(0,f.jsx)(x.gN,{className:b,name:"number",type:"tel"}),(0,f.jsx)(x.Bc,{name:"number",component:"div"}),(0,f.jsx)("button",{className:F,type:"submit",children:"add contacts"})]})})},w=t(9439),y=t(42),k="Filter_FilterInput__-+rOd",g="Filter_FilterWrap__Xh2KK",I=function(){var e=(0,a.I0)(),n=(0,o.useState)(""),t=(0,w.Z)(n,2),r=t[0],s=t[1];return(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)("label",{htmlFor:"",children:"Find contacts by name"}),(0,f.jsx)("input",{className:k,name:"filter",type:"text",value:r,onChange:function(n){s(n.target.value),e((0,y.h)(n.target.value))}})]})},S=t(4414);function q(){var e=(0,a.v9)(i);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.q,{children:(0,f.jsx)("title",{children:"Your tasks"})}),(0,f.jsx)(L,{}),e&&(0,f.jsx)(S.a,{}),(0,f.jsx)(I,{}),(0,f.jsx)(h,{})]})}}}]);
//# sourceMappingURL=181.a080865b.chunk.js.map