(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n,r=a(0),c=a.n(r),s=a(82),i=a.n(s),o=a(11),l=(a(103),a(77)),m=a(20),d=a(79);const u=Object(r.lazy)(()=>Promise.all([a.e(0),a.e(1)]).then(a.t.bind(null,85,7)));let p=Object(d.a)("首页")(n=Object(o.b)(({homeReducer:e,userReducer:t})=>({userReducer:t,homeReducer:e}),{fetchHome:m.c})(n=class extends r.Component{componentDidMount(){this.props.fetchHome()}render(){const e=i.a.get(this.props.userReducer,"res.data.viewer",""),t=i.a.get(this.props.homeReducer,"res.data.repositoryOwner.repository.object.text","");return c.a.createElement("div",{className:"HomePage"},c.a.createElement(l.a,{title:"主页",data:e}),c.a.createElement(u,{className:"markdown-body HomePage-markdown__body",source:t}))}})||n)||n},77:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(78);t.a=function(e){const{data:t,title:a}=e;return r.a.createElement("div",{className:"Viewer"},r.a.createElement("div",{className:"Viewer__container"},r.a.createElement("h1",{className:"Viewer__title"},a),r.a.createElement("div",{className:"Viewer__detail"},r.a.createElement("img",{className:"Viewer__image",alt:"avatar",src:t.avatarUrl}),r.a.createElement("span",{className:"Viewer__detail-list"},r.a.createElement("span",{className:"Viewer__detail-name"},t.name),r.a.createElement("span",{className:"Viewer__detail-bio"},t.bio)))))}},78:function(e,t,a){},79:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=(e=>t=>(class extends t{componentDidMount(){document.title=e}render(){return r.a.createElement(t,null)}}))}}]);