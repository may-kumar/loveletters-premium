(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{119:function(e,a){},126:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(52),c=t.n(s),l=(t(66),t(6)),i=t(7),o=t(3),d=t(9),u=t(8),m=(t(13),t(14),t(11)),p=t(12),g=function(e){Object(d.a)(n,e);var a=Object(u.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).clickCard=function(){t.setState({opacity:.9}),console.log("inner click")},t.state={opacity:1},t.clickCard=t.clickCard.bind(Object(o.a)(t)),t}return Object(i.a)(n,[{key:"getCard",value:function(){return t(34)("./"+this.props.cardname+".png")}},{key:"render",value:function(){return r.a.createElement(p.a,{hoverable:"true",onClick:this.clickCard,style:{opacity:this.state.opacity},className:"Card-design"},r.a.createElement(p.a.Body,{style:{padding:0}},r.a.createElement(p.a.Img,{src:this.getCard()})))}}]),n}(r.a.Component),b=t(59),y={num_players:3,all_players:["p1","p2","p3"],all_cards:["Jester","Assassin","Guard","Priest","Princess","Baron"],player_points:{p1:0,p2:0,p3:0},played_cards:["Guard","Priest","Princess"],current_cards:{p1:"Priest",p2:"Jester",p3:"Baron"},draw_pile:["Assassin","Guard","Priest","Baron"]},h=function(e){Object(d.a)(n,e);var a=Object(u.a)(n);function n(){return Object(l.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"getCard",value:function(e){return t(34)("./"+e+".png")}},{key:"render",value:function(){var e=this,a=y.played_cards;return" "!=this.props.addCard&&(a=[].concat(Object(b.a)(a),[this.props.addCard])),r.a.createElement("div",{className:"Card-carousel"},a.map((function(a){return r.a.createElement("div",{id:a},r.a.createElement(p.a,{style:{width:"6rem",marginLeft:"2px"}},r.a.createElement(p.a.Body,{style:{padding:0}},r.a.createElement(p.a.Img,{src:e.getCard(a)}))))})))}}]),n}(r.a.Component),f=t(10),C=(t(84),t(127)),k=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={selectedPlayer:" "},n.selectPlayer=n.selectPlayer.bind(Object(o.a)(n)),n.endPlay=n.endPlay.bind(Object(o.a)(n)),n.getList=n.getList.bind(Object(o.a)(n)),n}return Object(i.a)(t,[{key:"selectPlayer",value:function(e){this.setState({selectedPlayer:e})}},{key:"endPlay",value:function(){var e={};e[this.state.selectedPlayer]=y.current_cards[this.state.selectedPlayer],e[this.props.currentPlayer]=this.props.cardRemaining,console.log(e);var a={};a[this.state.selectedPlayer]=1,a[this.props.currentPlayer]=-1,this.props.roundCallback(a)}},{key:"getList",value:function(){var e=this;return this.props.cardPlayed in["Assassin","Constable","Count","Countess","Handmaid","Princess"]?{}:("Baroness"==this.props.cardPlayed||this.props.cardPlayed,r.a.createElement(f.a,null,y.all_players.map((function(a,t){return r.a.createElement(f.a.Item,{action:!0,className:"List-item-design",key:a,onClick:function(t){return e.selectPlayer(a,t)}},a)}))))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C.a,{style:{margin:"auto"}},this.getList()),r.a.createElement(C.a,{style:{width:"50vw"}},r.a.createElement(m.a,{size:"lg",block:!0,className:"Confirm-button",onClick:this.endPlay},"OK")))}}]),t}(r.a.Component),E=t(128),v=t(129),O=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).discard=function(){n.setState({discardMode:!0}),console.log("Discarding "+n.state.cardToPlay)},n.endPlay=function(){n.setState({discardMode:!1}),console.log("Ending Play")},n.playCardCallback=function(e){n.setState({results:e,winner:"p1"})," "!=n.state.winner?n.props.gameCallback(n.state.winner):n.endPlay()},n.state={opacity:1,cardToPlay:" ",cardRemaining:" ",discardMode:!1,currentPlayer:"p1",playStatus:"p1 is discarding",results:y.player_points,winner:"p1"},n.drawCard=n.drawCard.bind(Object(o.a)(n)),n.selectCard=n.selectCard.bind(Object(o.a)(n)),n.discard=n.discard.bind(Object(o.a)(n)),n.endPlay=n.endPlay.bind(Object(o.a)(n)),n.playCardCallback=n.playCardCallback.bind(Object(o.a)(n)),n}return Object(i.a)(t,[{key:"drawCard",value:function(){var e=y.draw_pile[0];return console.log(y.draw_pile.splice(0,0)),e}},{key:"selectCard",value:function(e,a){this.setState({cardToPlay:e,cardRemaining:a,opacity:.9}),console.log("Clicked "+this.state.cardToPlay)}},{key:"render",value:function(){var e=this,a=y.current_cards[this.state.currentPlayer],t=this.drawCard();return console.log("in round"),this.state.discardMode?r.a.createElement(E.a,{className:"Game-header"},r.a.createElement(C.a,null,r.a.createElement(h,{addCard:this.state.cardToPlay})),r.a.createElement(C.a,null,r.a.createElement("h4",{className:"Play-status"},this.state.playStatus)),r.a.createElement(k,{currentPlayer:this.state.currentPlayer,cardPlayed:this.state.cardToPlay,cardRemaining:this.state.cardRemaining,roundCallback:this.playCardCallback})):r.a.createElement(E.a,{className:"Game-header"},r.a.createElement(C.a,null,r.a.createElement(h,{addCard:" "})),r.a.createElement(C.a,null,r.a.createElement("h4",{className:"Play-status"},this.state.playStatus)),r.a.createElement(C.a,null,r.a.createElement(v.a,{style:{display:"inline-flex"},onClick:function(n){return e.selectCard(a,t,n)}},r.a.createElement(g,{cardname:a})),r.a.createElement(v.a,{style:{display:"inline-flex"},onClick:function(n){return e.selectCard(t,a,n)}},r.a.createElement(g,{cardname:t}))),r.a.createElement(C.a,{style:{width:"50vw"}},r.a.createElement(m.a,{size:"lg",block:!0,className:"Confirm-button",disabled:" "==this.state.cardToPlay,onClick:this.discard},"Discard")))}}]),t}(r.a.Component),P=t(57)({transports:["websocket"],upgrade:!1}),w=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).startGame=function(){n.props.gameCallback(1)},n.startNewGame=function(){n.props.gameCallback(0)},n.endGame=function(){n.setState({gameOn:!1})},n.state={gameOn:!0},n.startGame=n.startGame.bind(Object(o.a)(n)),n.startNewGame=n.startNewGame.bind(Object(o.a)(n)),n.endGame=n.endGame.bind(Object(o.a)(n)),n.all_players=[],P.send("join"),P.on("message",(function(e){this.all_players=e.in,console.log(e.in)})),n}return Object(i.a)(t,[{key:"render",value:function(){return this.props.toStartGame?r.a.createElement(E.a,{className:"Game-header"},r.a.createElement(C.a,{style:{margin:"auto"}},r.a.createElement("h4",{className:"Play-status"},"Waiting For Players...")),r.a.createElement(C.a,{style:{margin:"auto"}},r.a.createElement(f.a,null,this.all_players.map((function(e,a){return r.a.createElement(f.a.Item,{className:"List-item-design"},e)})))),r.a.createElement(C.a,{style:{width:"50vw"}},r.a.createElement(m.a,{size:"lg",block:!0,className:"Confirm-button",onClick:this.startGame},"Start Game"))):r.a.createElement(E.a,{className:"Game-header"},r.a.createElement(C.a,{style:{margin:"auto"}},r.a.createElement("h4",{className:"Play-status"},this.props.final_winner," won the game!")),r.a.createElement(C.a,{style:{margin:"auto"}},r.a.createElement(v.a,null,r.a.createElement(m.a,{size:"lg",style:{width:"30vw"},block:!0,className:"Confirm-button",onClick:this.endGame},"Leave Game")),r.a.createElement(v.a,null,r.a.createElement(m.a,{size:"lg",style:{width:"30vw"},block:!0,className:"Confirm-button",onClick:this.startNewGame},"Start New Game"))))}}]),t}(r.a.Component),j=t(33),S=(t(122),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).sendResults=n.sendResults.bind(Object(o.a)(n)),n}return Object(i.a)(t,[{key:"sendResults",value:function(e){console.log("Sent winner="+e),this.props.gameCallback(e)}},{key:"render",value:function(){var e=this,a=this.props.points,t="p1";return Object.entries(a).map((function(e){var n=Object(j.a)(e,2),r=n[0],s=n[1];s>=4&&(t=r);for(var c="",l=0;l<s;l++)c+="*";a[r]=c})),r.a.createElement(E.a,{className:"Game-header"},r.a.createElement(C.a,{style:{margin:"auto"}},r.a.createElement("h4",{className:"Play-status"},this.props.winner,"'s letter reached the Princess!")),r.a.createElement(C.a,{style:{margin:"auto"}},r.a.createElement(f.a,null,Object.entries(a).map((function(e){var a=Object(j.a)(e,2),t=a[0],n=a[1];return r.a.createElement(f.a.Item,{className:"List-item-design"},r.a.createElement(v.a,{style:{display:"inline"}},t),r.a.createElement(v.a,{style:{display:"inline"}},n))})))),r.a.createElement(C.a,{style:{width:"50vw"}}," "!=t?r.a.createElement(m.a,{size:"lg",block:!0,className:"Confirm-button",onClick:function(a){return e.sendResults(t,a)}},"OK"):r.a.createElement(m.a,{size:"lg",block:!0,className:"Confirm-button",onClick:function(a){return e.sendResults(t,a)}},"Start Next Round")))}}]),t}(r.a.Component)),G=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).landingCallback=function(e){n.setState({gameStatus:e})},n.roundCallback=function(e){var a=e,t=n.state.points;t[a]=t[a]+1,n.setState({rounds_played:n.state.rounds_played+1,points:t,gameStatus:2,round_winner:a})},n.resultsCallback=function(e){" "!=e?(n.setState({gameStatus:3,round_winner:e}),console.log("results="+e),console.log("set state=3")):(n.setState({gameStatus:1}),console.log("set state=1"))},n.state={gameStatus:0,toStartGame:!0,rounds_played:0,points:y.player_points,round_winner:" "},n.landingCallback=n.landingCallback.bind(Object(o.a)(n)),n.roundCallback=n.roundCallback.bind(Object(o.a)(n)),n.resultsCallback=n.resultsCallback.bind(Object(o.a)(n)),n}return Object(i.a)(t,[{key:"render",value:function(){return 0==this.state.gameStatus?r.a.createElement(w,{toStartGame:this.state.toStartGame,gameCallback:this.landingCallback}):1==this.state.gameStatus?r.a.createElement(O,{gameCallback:this.roundCallback}):2==this.state.gameStatus?r.a.createElement(S,{points:this.state.points,winner:this.state.round_winner,gameCallback:this.resultsCallback}):r.a.createElement(w,{toStartGame:!1,final_winner:this.state.round_winner,gameCallback:this.landingCallback})}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},13:function(e,a,t){},34:function(e,a,t){var n={"./Assassin.png":67,"./Baron.png":68,"./Baroness.png":69,"./Bishop.png":70,"./Cardinal.png":71,"./Constable.png":72,"./Count.png":73,"./Countess.png":74,"./Dowager Queen.png":75,"./Guard.png":76,"./Handmaid.png":77,"./Jester.png":78,"./King.png":79,"./Priest.png":80,"./Prince.png":81,"./Princess.png":82,"./Sycophant.png":83};function r(e){var a=s(e);return t(a)}function s(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=34},61:function(e,a,t){e.exports=t(126)},66:function(e,a,t){},67:function(e,a,t){e.exports=t.p+"static/media/Assassin.6c7b8198.png"},68:function(e,a,t){e.exports=t.p+"static/media/Baron.ac315008.png"},69:function(e,a,t){e.exports=t.p+"static/media/Baroness.1c5a87ee.png"},70:function(e,a,t){e.exports=t.p+"static/media/Bishop.0b0e0959.png"},71:function(e,a,t){e.exports=t.p+"static/media/Cardinal.c7b46de0.png"},72:function(e,a,t){e.exports=t.p+"static/media/Constable.f6ac8dd7.png"},73:function(e,a,t){e.exports=t.p+"static/media/Count.67f8d8d4.png"},74:function(e,a,t){e.exports=t.p+"static/media/Countess.6e495d6c.png"},75:function(e,a,t){e.exports=t.p+"static/media/Dowager Queen.51a0834e.png"},76:function(e,a,t){e.exports=t.p+"static/media/Guard.13b4141c.png"},77:function(e,a,t){e.exports=t.p+"static/media/Handmaid.4af99d42.png"},78:function(e,a,t){e.exports=t.p+"static/media/Jester.845851da.png"},79:function(e,a,t){e.exports=t.p+"static/media/King.52d72f4c.png"},80:function(e,a,t){e.exports=t.p+"static/media/Priest.2ef7dd82.png"},81:function(e,a,t){e.exports=t.p+"static/media/Prince.fece33d0.png"},82:function(e,a,t){e.exports=t.p+"static/media/Princess.2f3b56ce.png"},83:function(e,a,t){e.exports=t.p+"static/media/Sycophant.09602aa7.png"}},[[61,1,2]]]);
//# sourceMappingURL=main.b1028bc1.chunk.js.map