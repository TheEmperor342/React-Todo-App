(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{10:function(e,t,n){e.exports={alert:"Alert_alert__3fdS3"}},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),s=n(9),i=n.n(s),r=n(8),a=n(4),l=n(5),d=n.n(l),u=n(0);function j(e){return Object(u.jsx)("div",{className:d.a.mainDiv,children:Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",placeholder:"New Todo Here",className:d.a.input,id:"input",autoComplete:"off"}),Object(u.jsxs)("div",{className:d.a.buttons,children:[Object(u.jsx)("button",{onClick:function(t){t.preventDefault();var n=document.getElementById("input").value;""!==n?e.setTodo([].concat(Object(a.a)(e.todo),[document.getElementById("input").value])):""===n&&e.showAlert({alert:"Can't take an empty todo",type:"Warning"})},children:"Add Todo"}),Object(u.jsx)("button",{onClick:function(t){t.preventDefault(),e.setTodo([])},children:"Clear Todos"})]})]})})}var h=n(6),p=n.n(h);function b(e){var t=e.todo.map((function(t,n){return Object(u.jsxs)("div",{className:p.a.div,children:[Object(u.jsxs)("p",{id:"para".concat(n),children:[Object(u.jsxs)("span",{children:[n+1,"."]}),"  ",t]}),Object(u.jsx)("button",{onClick:function(t){var o=Object(a.a)(e.todo);o.splice(n,1),e.setTodo(o),e.showAlert({type:"Success",alert:"Todo Deleted!"})},children:"Delete"}),Object(u.jsx)("button",{id:"button",onClick:function(e){"Completed"===e.target.innerHTML?(document.getElementById("para".concat(n)).className=p.a.strikethrough,e.target.innerHTML="Incompleted"):(document.getElementById("para".concat(n)).className="",e.target.innerHTML="Completed")},children:"Completed"})]},n)}));return""===String(t)?(console.log("ran"),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:p.a.nothingHere,children:[Object(u.jsx)("h2",{children:"Looks like there is nothing here..."}),Object(u.jsx)("p",{children:"Lets fix that!"})]})})):t}var m=n(10),O=n.n(m);function x(e){return e.alert&&Object(u.jsx)("div",{className:O.a.alert,id:"alert",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:e.alert.type}),": ",e.alert.alert]})})}n(16);function v(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(o.useState)(null),i=Object(r.a)(s,2),a=i[0],l=i[1],d=function(e){c(e)},h=function(e){l(e),setTimeout((function(){l(null)}),3e3)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{alert:a}),Object(u.jsx)("div",{className:"parent",children:Object(u.jsxs)("div",{className:"innerParent",children:[Object(u.jsx)(j,{setTodo:d,todo:n,showAlert:h}),Object(u.jsx)("h3",{children:"Your ToDos"}),Object(u.jsx)("div",{className:"todos",children:Object(u.jsx)(b,{todo:n,setTodo:d,showAlert:h})})]})})]})}var f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),f()},5:function(e,t,n){e.exports={input:"Input_input__1NoCh",mainDiv:"Input_mainDiv__3qbAs",buttons:"Input_buttons__1uN5C"}},6:function(e,t,n){e.exports={div:"TodoDivs_div__2ANzE",strikethrough:"TodoDivs_strikethrough__1yEhT",nothingHere:"TodoDivs_nothingHere__1Tpa_"}}},[[17,1,2]]]);
//# sourceMappingURL=main.a1a8245b.chunk.js.map