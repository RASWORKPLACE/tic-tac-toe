(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{18:function(e,t,r){},19:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r(1),c=r.n(n),i=r(3),a=r.n(i),u=(r(18),r(19),r(8)),j=r(4),b=r(5),o=r(11),l=r(9),h=r(6),d=r(7),x=r(12),O=r(10);function v(e){return Object(s.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var f=function(e){Object(x.a)(r,e);var t=Object(O.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(s.jsx)(v,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"border-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(s.jsxs)("div",{className:"border-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(s.jsxs)("div",{className:"border-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(n.Component),m=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(e){var s;return Object(j.a)(this,r),(s=t.call(this,e)).state={xIsNext:!0,stepNumber:0,history:[{squares:Array(9).fill(null)}]},s}return Object(b.a)(r,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();p(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat({squares:r}),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"render",value:function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],c=p(n.squares),i=r.map((function(e,r){var n=r?"Go to #"+r:"Start the Game";return Object(s.jsx)("li",{children:Object(s.jsx)("button",{onClick:function(){t.jumpTo(r)},children:n})},r)}));return e=c?"Winner is "+c:"Next Player is "+(this.state.xIsNext?"X":"O"),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:" \xa0 RAS Samples"}),Object(s.jsx)("div",{className:"game",children:Object(s.jsx)("div",{className:"game-board",children:Object(s.jsx)(f,{onClick:function(e){return t.handleClick(e)},squares:n.squares})})}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"game-info",children:[Object(s.jsx)("div",{children:e}),Object(s.jsx)("ul",{children:i})]})]})}}]),r}(n.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(u.a)(t[r],3),n=s[0],c=s[1],i=s[2];if(e[n]&&e[n]===e[c]&&e[c]===e[i])return e[n]}return null}var N=function(){return Object(s.jsx)(m,{})},q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,21)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),s(e),n(e),c(e),i(e)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),q()}},[[20,1,2]]]);
//# sourceMappingURL=main.e5b6df43.chunk.js.map