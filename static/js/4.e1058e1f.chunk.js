(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{45:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),c=a(9),s=a(8),o=a(10),i=a(0),l=a.n(i),u=a(34);function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){m(e,t,a[t])})}return e}a(45);var d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).keys=[["1","2","3","4","5","6","7","8","9","0","back"],["-","_","(",")","{","}","[","]","|",":",'"'],["<",">",",",".","?","/","+","#","$","%","*"],["q","w","e","r","t","y","u","i","o","p","back"],["a","s","d","f","g","h","j","k","l","enter"],["shift","z","x","c","v","b","n","m","!","?","clear"],["123","@","space",".com",".","123"]],a.alphabet="abcdefghijklmnopqrstuvwxyz",a.state={currentKeys:null,shift:!1,numbers:!1,isMounted:!1,inputCaretPosition:0},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(JSON.stringify(this.keys)).slice(3);this.setState({currentKeys:t,isMounted:!0},function(){var t=e.props.options;if(t&&(!1!==t.alphabet||t.onlyNumeric||e.activateNumbers(),!0===t.onlyNumeric)){e.setState({currentKeys:[["1","2","3"],["4","5","6"],["7","8","9"],["back","0","clear"]]})}})}},{key:"keyClick",value:function(e){var t=this,a=e&&e.trim();return"shift"===a?this.activateShift():"123"===a?this.activateNumbers():this.updateCaretPosition(function(){t.update(a)})}},{key:"activateShift",value:function(){var e=this;this.setState({shift:!this.state.shift},function(){var t=e.state.shift,a=JSON.parse(JSON.stringify(e.keys)).slice(3),n=e.alphabet.split("");a.forEach(function(e){e.forEach(function(e,a,r){1===e.length&&n.indexOf(e)>-1&&(r[a]=t?e.toUpperCase():e.toLowerCase())})}),e.setState({currentKeys:a})})}},{key:"activateNumbers",value:function(){var e=this;this.setState({numbers:!this.state.numbers,shift:!1},function(){var t=e.state.numbers,a=JSON.parse(JSON.stringify(e.keys));t?a.splice(3,3):a.splice(0,3),e.setState({currentKeys:a})})}},{key:"update",value:function(e){var t=this,a=this.state.inputCaretPosition,n=this.props,r=n.updateHandler,c=n.input;if(c&&r){var s=c.value,o=c.name;if("enter"===e){if("textarea"!==c.nodeName.toLocaleLowerCase())return;e="\n"}if("space"===e&&(e=" "),"clear"===e)return a=0,this.setState({inputCaretPosition:a},function(){r(o,"")});if(s){var i="",l=a;if(a>=0&&a<=s.length){var u=a++;"back"===e?l>0?(i=s.substr(0,u-1)+s.substr(u),a-=2):a=l:(i=s.substr(0,u)+e+s.substr(u),".com"===e&&(a+=3))}if(i.length)this.setState({inputCaretPosition:a},function(){r(o,i)});else if("back"===e){if(l<=0)return;this.setState({inputCaretPosition:a},function(){r(o,"")})}else this.setState({inputCaretPosition:a},function(){r(o,"".concat(o).concat(e))})}else{if("back"===e)return;a+=1,".com"===e&&(a+=3),this.setState({inputCaretPosition:a},function(){r(o,e)})}this.setState({inputCaretPosition:a},function(){t.setCaretPosition(c,t.state.inputCaretPosition)})}}},{key:"setCaretPosition",value:function(e,t){if(e){if(e.createTextRange){var a=e.createTextRange();return a.move("character",t),a.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),setTimeout(function(){return e.setSelectionRange(t,t)},0),!0):(e.focus(),!1)}}},{key:"updateCaretPosition",value:function(e){var t=this.props.input;if(t){var a=this.getCaretPosition(t);this.setState({inputCaretPosition:a},e)}}},{key:"getCaretPosition",value:function(e){var t=0;if(document.selection){e.focus();var a=document.selection.createRange();a.moveStart("character",-e.value.length),t=a.text.length}else e&&(e.selectionStart||"0"===e.selectionStart)&&(t=e.selectionStart);return t}},{key:"createKey",value:function(e,t,a){switch(e){case"back":return l.a.createElement("button",{className:"back-key",title:"BACKSPACE"},"\u232b");case"enter":return l.a.createElement("button",{className:"enter-key",title:"ENTER"},"\u21b5");case"shift":return l.a.createElement("button",{className:t?"shift-activated":"shift",title:"SHIFT"},"\u21e7");case"space":return l.a.createElement("button",{className:"space-key",title:"SPACE"},e);case"clear":return l.a.createElement("button",{title:"CLEAR",className:"clear-key"},"\u2a02");default:return l.a.createElement("button",null,a&&"123"===e?"ABC":a&&"ABC"===e?"123":e)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.currentKeys,n=t.shift,r=t.numbers;return t.isMounted?l.a.createElement("div",{className:"keyboard-container",onMouseDown:function(e){return e.stopPropagation()}},a.map(function(t,a){var c=++a;return l.a.createElement("ul",{className:"row-".concat(c),key:c},t.map(function(t,a){var c=++a;return l.a.createElement("li",{key:"".concat(t.toLowerCase(),"-").concat(c),onMouseDown:function(a){a.preventDefault(),a.stopPropagation(),e.keyClick(t)}},e.createKey(t,n,r))}))})):null}}]),t}(i.Component),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={model:{username:"",password:""},currentInputElement:null},a.update=function(e,t){a.setState({model:p({},a.state.model,m({},e,t))})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.model,n=t.currentInputElement;return l.a.createElement("div",{className:"card border-info w-100"},l.a.createElement("h5",{className:"card-header bg-info"},"Exmple one:"),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},l.a.createElement("div",{className:"card mb-2"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"form-inline"},l.a.createElement("label",{htmlFor:"username",className:"mr-2"},"Username:"),l.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",value:a.username,onFocus:function(t){return e.setState({currentInputElement:t.target})},onChange:function(t){e.update("username",t.target.value)},autoFocus:!0}),l.a.createElement("label",{className:"mr-2 ml-3",htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",value:a.password,onFocus:function(t){return e.setState({currentInputElement:t.target})},onChange:function(t){e.update("password",t.target.value)}}))))),l.a.createElement("div",{className:"row h-100 justify-content-center align-items-center px-2 py-2"},l.a.createElement("div",{className:window.innerWidth>800?"w-75 p-3":""},l.a.createElement(d,{updateHandler:this.update,input:n})))))}}]),t}(i.Component),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={model:{phone:""},currentInputElement:null},a.update=function(e,t){a.setState({model:p({},a.state.model,m({},e,t))})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.model,n=t.currentInputElement;return l.a.createElement("div",{className:"card border-info w-100"},l.a.createElement("h5",{className:"card-header bg-info"},"Example two:"),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},l.a.createElement("div",{className:"card mb-2"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"form-inline"},l.a.createElement("label",{htmlFor:"phone",className:"mr-2"},"Phone:"),l.a.createElement("input",{type:"text",className:"form-control",id:"phone",name:"phone",value:a.phone,onFocus:function(t){return e.setState({currentInputElement:t.target})},onChange:function(t){e.update("phone",t.target.value)}}))))),l.a.createElement("div",{className:"row h-100 justify-content-center align-items-center px-2 py-2"},l.a.createElement("div",{className:window.innerWidth>800?"w-75 p-3":""},l.a.createElement(d,{updateHandler:this.update,input:n,options:{alphabet:!1}})))))}}]),t}(i.Component),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={model:{message:""},currentInputElement:null},a.update=function(e,t){a.setState({model:p({},a.state.model,m({},e,t))})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.model,n=t.currentInputElement;return l.a.createElement("div",{className:"card border-info w-100"},l.a.createElement("h5",{className:"card-header bg-info"},"Example Three:"),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},l.a.createElement("div",{className:"card mb-2"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"form-inline"},l.a.createElement("label",{htmlFor:"message",className:"mr-2"},"Message:"),l.a.createElement("textarea",{type:"text",className:"form-control",id:"message",name:"message",value:a.message,onFocus:function(t){return e.setState({currentInputElement:t.target})},onChange:function(t){e.update("message",t.target.value)},style:{margin:"0px auto",height:"38px"}}))))),l.a.createElement("div",{className:"row h-100 justify-content-center align-items-center px-2 py-2"},l.a.createElement("div",{className:window.innerWidth>800?"w-75 p-3":""},l.a.createElement(d,{updateHandler:this.update,input:n})))))}}]),t}(i.Component),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={model:{number1:"",number2:""},currentInputElement:null,action:"ADD",answer:null},a.timeout=null,a.update=function(e,t){a.setState({model:p({},a.state.model,m({},e,t))})},a.handleChange=function(e){a.setState({action:e.target.value})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.model,n=t.currentInputElement,r=t.answer;return l.a.createElement("div",{className:"card border-info w-100"},l.a.createElement("h5",{className:"card-header bg-info"},"Exmple four:"),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},l.a.createElement("div",{className:"card mb-2"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"form-inline",onSubmit:function(t){t.preventDefault(),e.timeout&&(clearTimeout(e.timeout),e.timeout=null);var a,n=e.state.model,r=n.number1,c=n.number2,s=e.state.action;if(r=parseFloat(r),c=parseFloat(c),!isNaN(r)&&!isNaN(c)){switch(s){case"ADD":a=r+c;break;case"SUB":a=r-c;break;case"MUL":a=r*c;break;case"DIV":a=0===c?"Infinity":r/c}a&&e.setState({answer:Math.round(a)||"almost zero"},function(){e.timeout=setTimeout(function(){e.setState({answer:null})},5e3)})}}},l.a.createElement("input",{type:"text",className:"form-control",id:"number1",name:"number1",value:a.number1,onFocus:function(t){return e.setState({currentInputElement:t.target})},onChange:function(t){e.update("number1",t.target.value)},placeholder:"Enter number"}),l.a.createElement("select",{className:"form-control mr-3 ml-3",value:a.action,onChange:this.handleChange},l.a.createElement("option",{value:"ADD"},"ADD"),l.a.createElement("option",{value:"SUB"},"SUB"),l.a.createElement("option",{value:"MUL"},"MUL"),l.a.createElement("option",{value:"DIV"},"DIV")),l.a.createElement("input",{type:"text",className:"form-control",id:"number2",name:"number2",value:a.number2,onFocus:function(t){return e.setState({currentInputElement:t.target})},onChange:function(t){e.update("number2",t.target.value)},placeholder:"Enter number"}),l.a.createElement("button",{type:"submit",className:"btn btn-success ml-3"},"Submit")),r?l.a.createElement("div",{className:"alert alert-info mt-2 text-center"},"Answer is: ",r):null))),l.a.createElement("div",{className:"row h-100 justify-content-center align-items-center px-2 py-2"},l.a.createElement("div",{className:window.innerWidth>800?"w-25 p-3":""},l.a.createElement(d,{updateHandler:this.update,input:n,options:{onlyNumeric:!0}})))))}}]),t}(i.Component),E=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"renderExample",value:function(e){switch(e){case"one":return l.a.createElement(f,null);case"two":return l.a.createElement(h,null);case"three":return l.a.createElement(b,null);case"four":return l.a.createElement(v,null);default:return l.a.createElement("div",{className:"alert alert-info shadow-lg rounded"},"Hi there, please click on one of the example button to see virtual keyboard component in action.")}}},{key:"render",value:function(){var e=this.props.match.params;return l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row justify-content-center align-items-center mb-4"},l.a.createElement("div",{className:"alert alert-info shadow-lg rounded"},"To learn more about react virtual keyboard component, please"," ",l.a.createElement("a",{className:"btn btn-success btn-sm",rel:"noopener noreferrer",href:"https://github.com/priteshjha4u/react-virtual-keyboard",target:"_blank"},"click here"))),l.a.createElement("div",{className:"row justify-content-center align-items-center"},l.a.createElement("div",{className:"card shadow-lg rounded"},l.a.createElement("div",{className:"card-body"},l.a.createElement(u.a,{className:"btn btn-outline-primary ml-2 mb-2 ".concat("one"===e.example?"active":""),to:"/virtual-keyboard/one"},"Example One"),l.a.createElement(u.a,{className:"btn btn-outline-primary ml-2 mb-2 ".concat("two"===e.example?"active":""),to:"/virtual-keyboard/two"},"Example Two"),l.a.createElement(u.a,{className:"btn btn-outline-primary ml-2 mb-2 ".concat("three"===e.example?"active":""),to:"/virtual-keyboard/three"},"Example Three"),l.a.createElement(u.a,{className:"btn btn-outline-primary ml-2 mb-2 ".concat("four"===e.example?"active":""),to:"/virtual-keyboard/four"},"Example Four")))),l.a.createElement("div",{className:"row justify-content-center align-items-center mt-5 px-5"},this.renderExample(e.example))))}}]),t}(l.a.Component);t.default=E}}]);