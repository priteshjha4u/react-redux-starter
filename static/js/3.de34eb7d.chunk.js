(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{39:function(e,t,a){var n=a(40),r=a(41);e.exports=function(e,t,a){var s=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||n)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;++o)t[s+o]=i[o];return t||r(i)}},40:function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var n=new Uint8Array(16);e.exports=function(){return a(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},41:function(e,t){for(var a=[],n=0;n<256;++n)a[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,r=a;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}},42:function(e,t,a){e.exports=a.p+"static/media/si-glyph-edit.7f611cf5.svg"},43:function(e,t,a){e.exports=a.p+"static/media/si-glyph-delete.287cf291.svg"},44:function(e,t,a){e.exports=a.p+"static/media/si-glyph-checked.0c04f91b.svg"},50:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),s=a(9),i=a(8),o=a(10),l=a(0),c=a.n(l),m=a(15),u=a(39),d=a.n(u),h="object"===typeof localStorage,p=function(){var e=[];try{return(e=JSON.parse(localStorage.getItem("todoAppStorage")))||[]}catch(t){return e}},g=h,f=p,b=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var a=p(),n=t?null:{id:d()(),text:e.tname,done:"false"};return!t&&a.push(n),localStorage.setItem("todoAppStorage",t?JSON.stringify(e):JSON.stringify(a)),{saved:!0}}catch(r){return{saved:!1,err:r}}},v=a(42),k=a.n(v),y=a(43),N=a.n(y),E=a(44),S=a.n(E),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={showControls:!1,taskName:a.props.data.text,tNameEdit:!1,err:!1,errorMsg:""},a.mouseEnter=a.mouseEnter.bind(Object(m.a)(a)),a.mouseLeave=a.mouseLeave.bind(Object(m.a)(a)),a.removeBtnClick=a.removeBtnClick.bind(Object(m.a)(a)),a.okBtnClick=a.okBtnClick.bind(Object(m.a)(a)),a.changeTaskName=a.changeTaskName.bind(Object(m.a)(a)),a.editBtnClick=a.editBtnClick.bind(Object(m.a)(a)),a.iconsStyle={cursor:"pointer",marginRight:"10px",width:"20px",height:"20px"},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"mouseEnter",value:function(e){this.setState({showControls:!0})}},{key:"mouseLeave",value:function(e){this.setState({showControls:!1})}},{key:"removeBtnClick",value:function(){this.props.clickHandler(this.props.data.id)}},{key:"okBtnClick",value:function(){this.props.clickHandler(this.props.data.id,!0)}},{key:"editBtnClick",value:function(){this.setState({tNameEdit:!0})}},{key:"changeTaskName",value:function(e){if(e.preventDefault(),this.props.data.text===this.state.taskName)return this.setState({tNameEdit:!1,err:!1,errorMsg:""});this.setState({tNameEdit:!1,err:!1,errorMsg:""}),this.props.clickHandler(this.props.data.id,!0,this.state.taskName)}},{key:"cancelTaskNameEditing",value:function(){this.setState({tNameEdit:!1,taskName:this.props.data.text,err:!1,errorMsg:""})}},{key:"editInputChanged",value:function(e){var t=this,a=e.target.value,n="";if(a.length>30&&(n="Only 30 chars."),!/^[a-z\d\-_\s]+$/i.test(a)&&a.length&&(n="No special characters.")&&(a=a.substr(0,a.length-1)),n)return this.setState({taskName:a,errorMsg:n,err:!0}),void setTimeout(function(){t.setState({errorMsg:"",err:!1})},4e3);this.setState({taskName:a,err:!1,errorMsg:""})}},{key:"render",value:function(){var e=this.iconsStyle,t=this.state.showControls;if(this.state.tNameEdit){var a=this.state.errorMsg?c.a.createElement("div",{className:"alert alert-danger mt-2"},this.state.errorMsg):null;return c.a.createElement("div",null,c.a.createElement("li",{className:"list-group-item"},c.a.createElement("form",{className:"form-inline",onSubmit:this.changeTaskName},c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",value:this.state.taskName,onChange:this.editInputChanged.bind(this)}),c.a.createElement("div",{className:"input-group-append",id:"button-addon4"},c.a.createElement("button",{className:"btn btn-outline-success",type:"submit",disabled:!this.state.taskName||this.state.err},c.a.createElement("img",{src:S.a,style:{width:"20px",height:"20px",cursor:"pointer"},alt:"Ok"})),c.a.createElement("button",{className:"btn btn-outline-danger",type:"button",onClick:this.cancelTaskNameEditing.bind(this)},c.a.createElement("img",{src:N.a,style:{width:"20px",height:"20px",cursor:"pointer"},alt:"Cancel"})))))),c.a.createElement("div",{className:"row justify-content-center align-items-center"},a))}var n=this.props.data,r=this.props.hash,s=t&&"true"!==n.done?"list-group-item infobg":"true"===n.done?"list-group-item strk":"list-group-item",i=t?c.a.createElement("img",{className:"float-right",onClick:this.removeBtnClick,title:"Remove todo item",src:N.a,style:e,alt:""}):null,o=t&&"true"!==n.done?c.a.createElement("img",{className:"float-right",onClick:this.okBtnClick,title:"Mark as done.",src:S.a,style:e,alt:""}):null,l=t&&"true"!==n.done?c.a.createElement("img",{className:"float-right",onClick:this.editBtnClick,title:"Edit task name.",src:k.a,style:e,alt:""}):null;return c.a.createElement("li",{className:s,onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave},c.a.createElement("b",null,c.a.createElement("span",{className:"float-left"},r,"."),c.a.createElement("span",{className:"rmv",title:n.text.length>25?n.text:""},n.text.length>25?n.text.substr(0,25)+".. ":n.text)),i,o,l)}}]),t}(l.Component),C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={tname:"",error:!1,errorMsg:""},a.tnameChange=a.tnameChange.bind(Object(m.a)(a)),a.handleFormSubmit=a.handleFormSubmit.bind(Object(m.a)(a)),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"tnameChange",value:function(e){var t=this,a=e.target.value,n="";if(a.length>30&&(n="Only 30 chars."),!/^[a-z\d\-_\s]+$/i.test(a)&&a.length&&(n="No special characters.")&&(a=a.substr(0,a.length-1)),n)return this.setState({tname:a,errorMsg:n,error:!0}),void setTimeout(function(){t.setState({errorMsg:"",err:!1})},4e3);this.setState({tname:a,error:!1,errorMsg:""})}},{key:"handleFormSubmit",value:function(e){e.preventDefault();var t={tname:this.state.tname};this.setState({tname:"",errorMsg:"",error:!1}),this.props.formsubmit(t)}},{key:"render",value:function(){var e=this.state.errorMsg?c.a.createElement("div",{className:"alert alert-danger mt-2"},this.state.errorMsg):null;return c.a.createElement("div",null,c.a.createElement("div",{className:"row justify-content-center align-items-center"},c.a.createElement("form",{className:"form-inline",onSubmit:this.handleFormSubmit},c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"What to do?",value:this.state.tname,onChange:this.tnameChange}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-outline-success",type:"submit",disabled:!this.state.tname||this.state.error},"Add"))))),c.a.createElement("div",{className:"row justify-content-center align-items-center"},e))}}]),t}(l.Component),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={data:[]},a.loadTodos=a.loadTodos.bind(Object(m.a)(a)),a.handleFormSubmit=a.handleFormSubmit.bind(Object(m.a)(a)),a.updateTodo=a.updateTodo.bind(Object(m.a)(a)),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.loadTodos()}},{key:"loadTodos",value:function(){this.setState({data:f()})}},{key:"handleFormSubmit",value:function(e){var t=b(e);t.saved?this.loadTodos():console.error("Error: "+t.err.message)}},{key:"updateTodo",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=!1,r=this.state.data;r.forEach(function(r,s){r.id===e&&(n=s),r.id===e&&t&&(a?r.text=a:r.done="true")}),t&&(this.setState({data:r}),b(r,!0)),n>=0&&!t&&r.splice(n,1)&&(this.setState({data:r}),b(r,!0))}},{key:"render",value:function(){var e=this;if(!g)return c.a.createElement("div",{className:"alert alert-danger"},"Your browser do not support Local Storage. Please use any modern browser.");var t=this.state.data.map(function(t,a){return c.a.createElement(j,{data:t,clickHandler:e.updateTodo,key:t.id,hash:a+1})}),a=this.state.data.length?null:c.a.createElement("div",{className:"alert alert-danger"},"Your task list is empty."),n=function(){var t=e.state.data.filter(function(e){return"true"===e.done});return c.a.createElement("span",{className:"btn btn-success float-right"},"Done ",c.a.createElement("span",{className:"badge badge-light"},t.length))}();return c.a.createElement("div",{className:"card"},this.state.data.length?c.a.createElement("div",{className:"card-header"},c.a.createElement("h5",{className:"card-title"},c.a.createElement("span",{className:"btn btn-info"},"Total ",c.a.createElement("span",{className:"badge badge-light"}," ",this.state.data.length)),n)):null,c.a.createElement("div",{className:"card-body"},a,c.a.createElement("ul",{className:"list-group"},t)),c.a.createElement("div",{className:"card-footer"},c.a.createElement(C,{formsubmit:this.handleFormSubmit})))}}]),t}(l.Component),x=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row justify-content-center align-items-center mt-5"},c.a.createElement("div",{className:"col-md-10"},c.a.createElement(O,null)))}}]),t}(c.a.Component);t.default=x}}]);