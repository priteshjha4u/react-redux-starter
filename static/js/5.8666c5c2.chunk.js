(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{64:function(e,a,t){e.exports=t.p+"static/media/cat.5b3b5966.svg"},67:function(e,a,t){"use strict";t.r(a);var n=t(24),s=t(9),r=t(10),l=t(12),i=t(11),c=t(13),m=t(0),o=t.n(m),d=t(64),u=t.n(d),p=t(5),h=t(27),b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),m=0;m<r;m++)c[m]=arguments[m];return(t=Object(l.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(c)))).state={username:"",password:""},t.submit=function(e){e.preventDefault();var a=t.state,n=a.username,s=a.password,r=t.props,l=r.dispatch,i=r.history;l(Object(p.c)(n,s,i))},t.handleChange=function(e){t.setState(Object(n.a)({},e.target.name,e.target.value))},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.password,n=this.props.authInfo;return o.a.createElement("div",{className:"row justify-content-center align-items-center"},o.a.createElement("div",{className:"col-md-10"},o.a.createElement("form",{className:"form-signin",onSubmit:this.submit,style:{marginTop:"10%"}},o.a.createElement("img",{className:"mb-4",src:u.a,alt:"",width:"50",height:"50",style:{marginLeft:"40%"}}),o.a.createElement("h1",{className:"h3 mb-3 font-weight-normal text-center"},"Please sign in"),o.a.createElement("p",{className:"text-center"},"(username: admin, password: admin)"),o.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),o.a.createElement("input",{type:"text",name:"username",id:"inputEmail",className:"form-control",placeholder:"Username",required:!0,autoFocus:!0,value:a,onChange:this.handleChange}),o.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),o.a.createElement("input",{type:"password",name:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0,value:t,onChange:this.handleChange}),o.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit",disabled:!a||!t||n.isLoading},"Sign in"),n.isLoading&&o.a.createElement(h.a,{cls:"mt-4"}),!n.isLoading&&n.error&&o.a.createElement("div",{className:"alert alert-danger mt-3"},n.error.message))))}}]),a}(o.a.Component);a.default=b}}]);