(this["webpackJsonpgit-search"]=this["webpackJsonpgit-search"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),u=(a(13),a(1)),s=a(2),i=a(4),o=a(3),h=a(5),m=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){a.setState({input:e.target.value})},a.handlePress=function(e){13===e.keyCode&&a.handleSubmit()},a.handleSubmit=function(){""!==a.state.input&&a.props.handleEntry(a.state.input),a.setState({input:""}),document.querySelector("input").value=""},a.state={input:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"entry"},l.a.createElement("input",{placeholder:"type username...",type:"text",autoFocus:!0,onChange:this.handleChange,onKeyDown:this.handlePress}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.handleSubmit}," Search GitHub user   "))}}]),t}(n.Component);function p(e){var t=e.user,a=t.username,n=t.name,r=t.location,c=t.followers,u=t.public_repos,s=t.html_url,i=t.avatar_url;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"circle"}," ",l.a.createElement("img",{src:i,alt:"Display Avatar"})," "),l.a.createElement("div",{className:"details"},l.a.createElement("a",{href:s,target:"blank"}," ",l.a.createElement("h3",null," ",a," ")),l.a.createElement("p",null,"Real name ",l.a.createElement("br",null)," ",l.a.createElement("span",null,n)," "),l.a.createElement("p",null," Location ",l.a.createElement("br",null)," ",l.a.createElement("span",null," ",r," ")," "),l.a.createElement("p",null," Followers ",l.a.createElement("br",null)," ",l.a.createElement("span",null," ",c)," "),l.a.createElement("p",null," Number Public Repo ",l.a.createElement("br",null)," ",l.a.createElement("span",null," ",u," ")," ")))}var E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleEntry=function(e){var t="https://api.github.com/users/".concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){return a.extractData(e)}))},a.state={username:"",name:"",pic:"",location:"",followers:"",public_repos:"",html_url:"",avatar_url:""},a.fetched=!1,a.showDetails=!1,a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"extractData",value:function(e){this.showDetails=!0;var t=e.login,a=e.name,n=e.location,l=e.followers,r=e.public_repos,c=e.message,u=e.html_url,s=e.avatar_url;this.fetched=!c,this.notFound=!this.fetched,this.setState({username:t,name:a,location:n,followers:l,public_repos:r,html_url:u,avatar_url:s})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{handleEntry:this.handleEntry}),this.showDetails&&this.fetched&&l.a.createElement(p,{user:this.state}),this.showDetails&&(this.fetched||l.a.createElement("p",null," Oops user Not found ")))}}]),t}(l.a.Component);c.a.render(l.a.createElement((function(){return l.a.createElement(E,null)}),null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1dd2109e.chunk.js.map