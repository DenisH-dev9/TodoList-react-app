(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),o=n.n(i),r=n(5),s=n.n(r),a=(n(15),n(4)),l=n(2),d=n.n(l),j=o.a.createContext(),u={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",mardinBottom:".5rem"},input:{marginRight:"1rem"}};var b=function(e){var t=e.todo,n=e.index,o=e.onChange,r=Object(i.useContext)(j).removeTodo,s=[];return t.completed&&s.push("done"),Object(c.jsxs)("li",{style:u.li,children:[Object(c.jsxs)("span",{className:s.join(" "),children:[Object(c.jsx)("input",{type:"checkbox",checked:t.completed,style:u.input,onChange:function(){return o(t.id)}}),Object(c.jsx)("strong",{children:n+1}),"\xa0",t.title]}),Object(c.jsx)("button",{className:"rm",onClick:r.bind(null,t.id),children:"\xd7"})]})},p={ul:{listStyle:"none",margin:0,padding:0}};function h(e){return Object(c.jsx)("ul",{style:p.ul,children:e.todos.map((function(t,n){return Object(c.jsx)(b,{todo:t,index:n,onChange:e.onToggle},t.id)}))})}h.protoTypes={todos:d.a.arrayOf(d.a.object).isRequired,onToggle:d.a.func.isRequired};var O=h,m=function(){return Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(c.jsxs)("div",{className:"lds-ring",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})},x=n(6),f=n(7),g=n(9),v=n(8),y=(n(18),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(x.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isOpen:!1},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){return e.setState({isOpen:!0})},children:"Open modal"}),this.state.isOpen&&Object(c.jsx)("div",{className:"modal",children:Object(c.jsxs)("div",{className:"modal-body",children:[Object(c.jsx)("h1",{children:"Modal title"}),Object(c.jsx)("p",{children:"I am awesome modal!"}),Object(c.jsx)("button",{onClick:function(){return e.setState({isOpen:!1})},children:"Close modal"})]})})]})}}]),n}(o.a.Component)),C=o.a.lazy((function(){return n.e(3).then(n.bind(null,21))}));var T=function(){var e=o.a.useState([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=o.a.useState(!0),l=Object(a.a)(s,2),d=l[0],u=l[1];return Object(i.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return e.json()})).then((function(e){setTimeout((function(){r(e),u(!1)}),2e3)}))}),[]),Object(c.jsx)(j.Provider,{value:{removeTodo:function(e){r(n.filter((function(t){return t.id!==e})))}},children:Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)("h1",{children:"React TodoList"}),Object(c.jsx)(y,{}),Object(c.jsx)(o.a.Suspense,{fallback:Object(c.jsx)("p",{children:"Loading...."}),children:Object(c.jsx)(C,{onCreate:function(e){r(n.concat([{title:e,id:Date.now(),completed:!1}]))}})}),d&&Object(c.jsx)(m,{}),n.length?Object(c.jsx)(O,{todos:n,onToggle:function(e){r(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):d?null:Object(c.jsx)("p",{children:"No todos!!!"})]})})},k=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.fef9c8ce.chunk.js.map