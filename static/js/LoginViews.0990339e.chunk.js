(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{107:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var c=t(27),s=t(99),r=t.n(s),i=t(0),l=t(6),o=t(7),n=t(96),d=t(94),b=t(22),j=t(1);function f(){var e=Object(l.b)(),a=Object(i.useState)(""),t=Object(c.a)(a,2),s=t[0],f=t[1],m=Object(i.useState)(""),u=Object(c.a)(m,2),v=u[0],O=u[1],p=function(e){var a=e.target,t=a.name,c=a.value;switch(t){case"email":return f(c);case"password":return O(c);default:return}};return Object(j.jsxs)("div",{className:r.a.login,children:[Object(j.jsx)("h1",{children:"Log in"}),Object(j.jsxs)(n.a,{onSubmit:function(a){a.preventDefault(),0===s.length||0===v.length?b.b.error("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f",{theme:"colored"}):e(o.a.logIn({email:s,password:v})),f(""),O("")},children:[Object(j.jsxs)(n.a.Group,{className:"mb-2",controlId:"formBasicEmail",children:[Object(j.jsx)(n.a.Label,{children:"Email address"}),Object(j.jsx)(n.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:s,onChange:p}),Object(j.jsx)(n.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(j.jsxs)(n.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(j.jsx)(n.a.Label,{children:"Password"}),Object(j.jsx)(n.a.Control,{type:"password",name:"password",value:v,placeholder:"Password",onChange:p})]}),Object(j.jsx)(d.a,{variant:"primary",type:"submit",children:"Submit"})]})]})}},95:function(e,a,t){"use strict";var c=function(){};e.exports=c},96:function(e,a,t){"use strict";var c=t(5),s=t(19),r=t(36),i=t.n(r),l=t(20),o=t.n(l),n=t(0),d=t(1),b=["as","className","type","tooltip"],j={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},f=n.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,l=e.className,o=e.type,n=void 0===o?"valid":o,j=e.tooltip,f=void 0!==j&&j,m=Object(s.a)(e,b);return Object(d.jsx)(r,Object(c.a)(Object(c.a)({},m),{},{ref:a,className:i()(l,"".concat(n,"-").concat(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=j;var m=f,u=n.createContext({}),v=t(37),O=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=n.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.className,o=e.type,b=void 0===o?"checkbox":o,j=e.isValid,f=void 0!==j&&j,m=e.isInvalid,p=void 0!==m&&m,x=e.as,h=void 0===x?"input":x,N=Object(s.a)(e,O),y=Object(n.useContext)(u).controlId;return r=Object(v.a)(r,"form-check-input"),Object(d.jsx)(h,Object(c.a)(Object(c.a)({},N),{},{ref:a,type:b,id:t||y,className:i()(l,r,f&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var x=p,h=["bsPrefix","className","htmlFor"],N=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.htmlFor,o=Object(s.a)(e,h),b=Object(n.useContext)(u).controlId;return t=Object(v.a)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:a,htmlFor:l||b,className:i()(r,t)}))}));N.displayName="FormCheckLabel";var y=N,w=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"],P=n.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,j=e.disabled,f=void 0!==j&&j,O=e.isValid,p=void 0!==O&&O,h=e.isInvalid,N=void 0!==h&&h,P=e.feedbackTooltip,g=void 0!==P&&P,I=e.feedback,F=e.className,C=e.style,k=e.title,R=void 0===k?"":k,S=e.type,L=void 0===S?"checkbox":S,z=e.label,V=e.children,T=e.as,E=void 0===T?"input":T,G=Object(s.a)(e,w);r=Object(v.a)(r,"form-check"),l=Object(v.a)(l,"form-switch");var _=Object(n.useContext)(u).controlId,H=Object(n.useMemo)((function(){return{controlId:t||_}}),[_,t]),B=null!=z&&!1!==z&&!V,D=Object(d.jsx)(x,Object(c.a)(Object(c.a)({},G),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:p,isInvalid:N,disabled:f,as:E}));return Object(d.jsx)(u.Provider,{value:H,children:Object(d.jsx)("div",{style:C,className:i()(F,z&&r,b&&"".concat(r,"-inline"),"switch"===L&&l),children:V||Object(d.jsxs)(d.Fragment,{children:[D,B&&Object(d.jsx)(y,{title:R,children:z}),(p||N)&&Object(d.jsx)(m,{type:p?"valid":"invalid",tooltip:g,children:I})]})})})}));P.displayName="FormCheck";var g=Object.assign(P,{Input:x,Label:y}),I=t(3),F=(t(95),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=n.forwardRef((function(e,a){var t,r,l=e.bsPrefix,o=e.type,b=e.size,j=e.htmlSize,f=e.id,m=e.className,O=e.isValid,p=void 0!==O&&O,x=e.isInvalid,h=void 0!==x&&x,N=e.plaintext,y=e.readOnly,w=e.as,P=void 0===w?"input":w,g=Object(s.a)(e,F),C=Object(n.useContext)(u).controlId;(l=Object(v.a)(l,"form-control"),N)?t=Object(I.a)({},"".concat(l,"-plaintext"),!0):(r={},Object(I.a)(r,l,!0),Object(I.a)(r,"".concat(l,"-").concat(b),b),t=r);return Object(d.jsx)(P,Object(c.a)(Object(c.a)({},g),{},{type:o,size:j,ref:a,readOnly:y,id:f||C,className:i()(m,t,p&&"is-valid",h&&"is-invalid","color"===o&&"".concat(l,"-color"))}))}));C.displayName="FormControl";var k=Object.assign(C,{Feedback:m}),R=/-(.)/g;var S=["className","bsPrefix","as"],L=function(e){return e[0].toUpperCase()+(a=e,a.replace(R,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var z=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,r=void 0===t?L(e):t,l=a.Component,o=a.defaultProps,b=n.forwardRef((function(a,t){var r=a.className,o=a.bsPrefix,n=a.as,b=void 0===n?l||"div":n,j=Object(s.a)(a,S),f=Object(v.a)(o,e);return Object(d.jsx)(b,Object(c.a)({ref:t,className:i()(r,f)},j))}));return b.defaultProps=o,b.displayName=r,b}("form-floating"),V=["controlId","as"],T=n.forwardRef((function(e,a){var t=e.controlId,r=e.as,i=void 0===r?"div":r,l=Object(s.a)(e,V),o=Object(n.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(u.Provider,{value:o,children:Object(d.jsx)(i,Object(c.a)(Object(c.a)({},l),{},{ref:a}))})}));T.displayName="FormGroup";var E=T,G=t(27),_=["as","bsPrefix","className"],H=["className"],B=["xxl","xl","lg","md","sm","xs"];var D=n.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,r=e.className,l=Object(s.a)(e,_);t=Object(v.a)(t,"col");var o=[],n=[];return B.forEach((function(e){var a,c,s,r=l[e];if(delete l[e],"object"===typeof r&&null!=r){var i=r.span;a=void 0===i||i,c=r.offset,s=r.order}else a=r;var d="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(t).concat(d):"".concat(t).concat(d,"-").concat(a)),null!=s&&n.push("order".concat(d,"-").concat(s)),null!=c&&n.push("offset".concat(d,"-").concat(c))})),[Object(c.a)(Object(c.a)({},l),{},{className:i.a.apply(void 0,[r].concat(n,o))}),{as:a,bsPrefix:t,spans:o}]}(e),r=Object(G.a)(t,2),l=r[0],o=l.className,n=Object(s.a)(l,H),b=r[1],j=b.as,f=void 0===j?"div":j,m=b.bsPrefix,u=b.spans;return Object(d.jsx)(f,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:i()(o,!u.length&&m)}))}));D.displayName="Col";var J=D,M=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],U=n.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,l=e.bsPrefix,o=e.column,b=e.visuallyHidden,j=e.className,f=e.htmlFor,m=Object(s.a)(e,M),O=Object(n.useContext)(u).controlId;l=Object(v.a)(l,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var x=i()(j,l,b&&"visually-hidden",o&&p);return f=f||O,o?Object(d.jsx)(J,Object(c.a)({ref:a,as:"label",className:x,htmlFor:f},m)):Object(d.jsx)(r,Object(c.a)({ref:a,className:x,htmlFor:f},m))}));U.displayName="FormLabel",U.defaultProps={column:!1,visuallyHidden:!1};var W=U,q=["bsPrefix","className","id"],A=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.id,o=Object(s.a)(e,q),b=Object(n.useContext)(u).controlId;return t=Object(v.a)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:i()(r,t),id:l||b}))}));A.displayName="FormRange";var K=A,Q=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],X=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,l=e.htmlSize,o=e.className,b=e.isValid,j=void 0!==b&&b,f=e.isInvalid,m=void 0!==f&&f,O=e.id,p=Object(s.a)(e,Q),x=Object(n.useContext)(u).controlId;return t=Object(v.a)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:l,ref:a,className:i()(o,t,r&&"".concat(t,"-").concat(r),j&&"is-valid",m&&"is-invalid"),id:O||x}))}));X.displayName="FormSelect";var Y=X,Z=["bsPrefix","className","as","muted"],$=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.as,o=void 0===l?"small":l,n=e.muted,b=Object(s.a)(e,Z);return t=Object(v.a)(t,"form-text"),Object(d.jsx)(o,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:i()(r,t,n&&"text-muted")}))}));$.displayName="FormText";var ee=$,ae=n.forwardRef((function(e,a){return Object(d.jsx)(g,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));ae.displayName="Switch";var te=Object.assign(ae,{Input:g.Input,Label:g.Label}),ce=["bsPrefix","className","children","controlId","label"],se=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.children,o=e.controlId,n=e.label,b=Object(s.a)(e,ce);return t=Object(v.a)(t,"form-floating"),Object(d.jsxs)(E,Object(c.a)(Object(c.a)({ref:a,className:i()(r,t),controlId:o},b),{},{children:[l,Object(d.jsx)("label",{htmlFor:o,children:n})]}))}));se.displayName="FloatingLabel";var re=se,ie=["className","validated","as"],le={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},oe=n.forwardRef((function(e,a){var t=e.className,r=e.validated,l=e.as,o=void 0===l?"form":l,n=Object(s.a)(e,ie);return Object(d.jsx)(o,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:i()(t,r&&"was-validated")}))}));oe.displayName="Form",oe.propTypes=le;a.a=Object.assign(oe,{Group:E,Control:k,Floating:z,Check:g,Switch:te,Label:W,Text:ee,Range:K,Select:Y,FloatingLabel:re})},99:function(e,a,t){e.exports={login:"LoginViews_login__oDSsw"}}}]);
//# sourceMappingURL=LoginViews.0990339e.chunk.js.map