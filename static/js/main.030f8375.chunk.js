(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,r){},8:function(e,t,r){e.exports=r(9)},9:function(e,t,r){"use strict";r.r(t);var a=r(7),n=r(1),s=r(2),i=r(4),u=r(3),l=r(0),c=r.n(l),o=r(6),h=r.n(o);r(14);function m(e){return c.a.createElement("button",{className:"square",onClick:function(){e.onClick()}},e.value)}var d=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"renderSquare",value:function(e){var t=this;return c.a.createElement(m,{value:this.props.squares[e],onClick:function(){t.props.onClick(e)}})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),r}(c.a.Component),v=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},a}return Object(s.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();this.calculateWinner(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"calculateWinner",value:function(e){for(var t=[[0,1,2],[6,7,8],[0,3,6],[3,4,5],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(a.a)(t[r],3),s=n[0],i=n[1],u=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[u])return e[s]}return null}},{key:"renderHistoryList",value:function(){var e=this;return this.state.history.map((function(t,r){var a=r?"Go to move #"+r:"Go to game start";return c.a.createElement("li",{key:r},c.a.createElement("button",{onClick:function(){return e.jumpTo(r)}},a))}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.calculateWinner(this.state.history[this.state.history.length-1].squares);return e=null!==r?"Winner is :"+r:"Next player:"+(this.state.xIsNext?"X":"O"),c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(d,{squares:this.state.history[this.state.stepNumber].squares,onClick:function(e){t.handleClick(e)}})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null,e),c.a.createElement("div",null,this.renderHistoryList())))}}]),r}(c.a.Component);h.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.030f8375.chunk.js.map