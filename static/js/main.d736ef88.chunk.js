(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{19:function(e,c,s){},20:function(e,c,s){},21:function(e,c,s){},24:function(e,c,s){},25:function(e,c,s){},26:function(e,c,s){},27:function(e,c,s){},29:function(e,c,s){"use strict";s.r(c);var a=s(0),t=s(2),r=s.n(t),n=s(10),i=s.n(n),o=s(5),l=s(3),d=(s(19),s(7)),j=s(4),m=(s(20),function(e){var c=e.value,s=e.placeholder,t=e.type,r=e.onChange;return Object(a.jsx)("input",{type:t,className:"nameInput",value:c,placeholder:s,onChange:function(e){return r(e.target.value)}})}),u=(s(21),s(6)),b=function(e){var c=e.player,s=e.start,t=c.name,r=c.score,n=c.choise.icon;return Object(a.jsxs)("div",{className:"playerCard",children:[Object(a.jsxs)("p",{className:"playerCard__text",children:[t.length?t:"Player"," : ",r]}),Object(a.jsx)("div",{className:"playCard__icon-wrapper",children:s?Object(a.jsx)(u.a,{icon:l.h,size:"4x",className:"playCard__icon",spin:!0}):Object(a.jsx)(u.a,{icon:n,size:"4x",className:"playCard__icon"})}),Object(a.jsx)("p",{className:"playerCard__text",children:s?"Start":c.choise.name})]})},x=(s(24),function(e){var c=e.result;return Object(a.jsxs)("div",{className:"resultInfo",children:[Object(a.jsx)("p",{className:"resultInfo__text ".concat("You win!"===c.message?"win":""," ").concat("You lose!"===c.message?"lose":""),children:c.message}),Object(a.jsx)("p",{children:c.description})]})}),p=(s(25),function(e){var c=e.icon,s=e.clickHandler,t=e.size;return Object(a.jsx)("button",{type:"button",className:"button ".concat("small"===t?"small":""),onClick:s,children:Object(a.jsx)(u.a,{icon:c,size:"small"===t?"3x":"4x",className:"button__icon"})})}),O=s.p+"static/media/looserImage.8985203d.jpg",h=s.p+"static/media/winnerImage.0cdad03f.jpg",v=(s(26),function(e){var c=e.name,s=e.playerScore,t=e.computerScore;return Object(a.jsxs)("div",{className:"gameOver",children:["Computer"===c?Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"gameOver__text",children:["Game Over! The winner is ",c,"!"]}),Object(a.jsx)("div",{className:"gameOver__image-wrapper",children:Object(a.jsx)("img",{src:O,alt:"looser_image",className:"gameOver__image"})})]}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"gameOver__text",children:["Congratulations, ",c.length?c:"Player","!"]}),Object(a.jsx)("div",{className:"gameOver__image-wrapper",children:Object(a.jsx)("img",{src:h,alt:"winner_image",className:"gameOver__image"})})]}),Object(a.jsxs)("p",{className:"gameOver__text",children:["Your score: ",s," | Computer score: ",t]})]})}),f=[{name:"",score:0,choise:{id:10,name:"",icon:l.h}},{name:"Computer",score:0,choise:{id:10,name:"",icon:l.h}}],g={message:"",description:"Just play, Have fun, Enjoy the game!"},N=[{id:1,name:"Rock",icon:l.e},{id:2,name:"Paper",icon:l.c},{id:3,name:"Scissors",icon:l.d},{id:4,name:"Lizard",icon:l.b},{id:5,name:"Spock",icon:l.f}],_=function(e,c){return"Rock"===e?y(c):"Lizard"===e?S(c):"Spock"===e?k(c):"Scissors"===e?P(c):w(c)},y=function(e){return"Rock crushes ".concat(e)},S=function(e){return"Spock"===e?"Lizard poisons Spock":"Lizard eats Paper"},k=function(e){return"Scissors"===e?"Spock smashes Scissors":"Spock vaporizes Rock"},P=function(e){return"Paper"===e?"Scissors cuts Paper":"Scissors decapitates Lizard"},w=function(e){return"Rock"===e?"Paper covers Rock":"Paper disproves Spock"},C=(s(27),function(){var e=Object(t.useState)(f[0]),c=Object(j.a)(e,2),s=c[0],r=c[1],n=Object(t.useState)(f[1]),i=Object(j.a)(n,2),o=i[0],u=i[1],O=Object(t.useState)(g),h=Object(j.a)(O,2),y=h[0],S=h[1],k=Object(t.useState)(!0),P=Object(j.a)(k,2),w=P[0],C=P[1],z=Object(t.useState)(!1),L=Object(j.a)(z,2),R=L[0],I=L[1],H=Object(t.useState)(""),Y=Object(j.a)(H,2),E=Y[0],F=Y[1],J=Object(t.useState)(""),M=Object(j.a)(J,2),T=M[0],B=M[1];Object(t.useEffect)((function(){(s.score>=10||o.score>=10)&&(s.score>o.score?F(s.name):F(o.name),I(!0))}),[s,o]);var D=Object(d.a)({},s),G=Object(d.a)({},o),q=Object(d.a)({},y),A=function(e){var c,s=N.findIndex((function(c){return c.id===e})),a=N[s].icon,t=N[s].name,n=Math.floor(5*Math.random()),i=N[n].icon,o=N[n].name,l=function(e,c){var s="";return e===c?s="tie":"Rock"===e?s="Lizard"===c||"Scissors"===c?"firstPlayer":"secondPlayer":"Lizard"===e?s="Spock"===c||"Paper"===c?"firstPlayer":"secondPlayer":"Spock"===e?s="Scissors"===c||"Rock"===c?"firstPlayer":"secondPlayer":"Scissors"===e?s="Paper"===c||"Lizard"===c?"firstPlayer":"secondPlayer":"Paper"===e&&(s="Spock"===c||"Rock"===c?"firstPlayer":"secondPlayer"),s}(t,o);"tie"===l?c="".concat(t," = ").concat(o):"firstPlayer"===l?(D.score+=1,c=_(t,o)):(G.score+=1,c=_(o,t)),q.message=function(e){var c="";switch(e){case"firstPlayer":c="You win!";break;case"secondPlayer":c="You lose!";break;case"tie":c="Its a tie!"}return c}(l),q.description=c,D.choise.icon=a,D.choise.name=t,G.choise.icon=i,G.choise.name=o,r(D),u(G),S(q),C(!1)};return R?Object(a.jsxs)("div",{className:"container container-fluid",children:[Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsx)("div",{className:"col-xs-12",children:Object(a.jsx)(v,{name:E,playerScore:s.score,computerScore:o.score})})}),Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsxs)("div",{className:"col-xs-12",children:[Object(a.jsx)("p",{className:"game__text",children:"Press buttton for restart!"}),Object(a.jsx)(p,{icon:l.a,clickHandler:function(){r(f[0]),u(f[1]),S(g),F(""),C(!0),I(!1)},size:"normal"})]})})]}):Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"container container-fluid",children:[Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsx)("div",{className:"col-xs-12",children:Object(a.jsx)("h1",{className:"game__heading",children:"Rock | Paper | Scissors | Lizard | Spock"})})}),Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsx)("div",{className:"col-xs-12 col-md-6",children:Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)(m,{type:"text",value:T,placeholder:"Enter your name",onChange:function(e){B(e)}}),Object(a.jsx)(p,{icon:l.g,clickHandler:function(){T&&(D.name=T,r(D),B(""))},size:"small"})]})})}),Object(a.jsxs)("div",{className:"row middle-xs",children:[Object(a.jsx)("div",{className:"col-xs-6 col-md-4 first-md",children:Object(a.jsx)(b,{player:s,start:w})}),Object(a.jsx)("div",{className:"col-xs-12 col-md-4 last-xs",children:Object(a.jsx)(x,{result:y})}),Object(a.jsx)("div",{className:"col-xs-6 col-md-4 last-md",children:Object(a.jsx)(b,{player:o,start:w})})]}),Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsx)("div",{className:"col-xs-12",children:Object(a.jsx)("p",{className:"game__text",children:"Choose your weapon"})})}),Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsx)("div",{className:"col-xs-12",children:N.map((function(e){var c=e.id,s=e.icon;return Object(a.jsx)(p,{clickHandler:function(){return A(c)},icon:s,size:"normal"},c)}))})})]})})}),z=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(C,{})})},L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,30)).then((function(c){var s=c.getCLS,a=c.getFID,t=c.getFCP,r=c.getLCP,n=c.getTTFB;s(e),a(e),t(e),r(e),n(e)}))};s(28);o.b.add(l.h,l.e,l.d,l.f,l.c,l.b),i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root")),L()}},[[29,1,2]]]);
//# sourceMappingURL=main.d736ef88.chunk.js.map