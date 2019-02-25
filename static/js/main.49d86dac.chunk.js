(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(e,t,n){e.exports=n(398)},238:function(e,t,n){},397:function(e,t,n){},398:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(42),s=n.n(o),i=(n(238),n(16)),c=n(17),l=n(19),u=n(18),h=n(20),m=n(26),p=n(21),g=(n(239),n(405)),d=n(414),f=n(416),E=n(413),C=n(407),b=n(411),v=n(412),y=n(406);function w(){var e=Object(m.a)(["\n\tmargin-bottom: 20px;\n"]);return w=function(){return e},e}function O(){var e=Object(m.a)(["\n\t&&& {\n\t\ttext-align: center;\n\t\tmargin-top: 15vh\n\t\tmax-width: 800px!important;\n\n\t\t@media (max-width: 767px) {\n\t\t  margin-top: 40px\n\t\t}\n\t}\n"]);return O=function(){return e},e}var j=Object(p.b)(g.a)(O()),S=p.b.div(w()),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).checkScreenSize=function(e){e.matches?n.setState({size:"small"}):n.setState({size:"big"})},n.onNameChange=function(e){n.setState({name:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onLogin=function(){n.state.name&&n.state.password?(n.setState({buttonLoading:!0}),fetch("https://chattychat777.herokuapp.com/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,password:n.state.password})}).then(function(e){return e.json()}).then(function(e){e.name?(n.props.saveUserData(e),n.props.changeRoute("main")):"No User"===e?n.setState({errorLogging:"noUser"}):n.setState({errorLogging:"error"})}).then(function(){n.setState({buttonLoading:!1})})):n.setState({errorLogging:"empty"})},n.setErrorMessage=function(){return"noUser"===n.state.errorLogging?r.a.createElement("div",null,"Incorrect user or password"):"error"===n.state.errorLogging?r.a.createElement("div",null,"Error logging in. Please try again later"):"empty"===n.state.errorLogging?r.a.createElement("div",null,"Please enter name and password"):void 0},n.state={name:"",password:"",errorLogging:"",size:"",buttonLoading:!1},n.mobileViewport=window.matchMedia("screen and (max-width: 767px)"),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.checkScreenSize(this.mobileViewport),this.mobileViewport.addListener(this.checkScreenSize)}},{key:"render",value:function(){var e=this;return r.a.createElement(j,null,r.a.createElement(d.a,{as:"h1"},"Chatty Chat"),r.a.createElement(S,null,"Welcome to Chatty Chat",r.a.createElement("br",null),"It's a simple chat app made to practise back-end stack. ",r.a.createElement("br",null)," You can register a new user (no e-mail required) or sign up with login: anon, pass: anon"),r.a.createElement(f.a,{placeholder:!0},r.a.createElement(E.a,{columns:2,relaxed:"very",stackable:!0},r.a.createElement(E.a.Column,null,r.a.createElement(C.a,{error:!0},r.a.createElement(b.a,{error:!0,content:this.setErrorMessage()}),r.a.createElement(C.a.Input,{icon:"user",iconPosition:"left",label:"Username",placeholder:"Username",onChange:this.onNameChange}),r.a.createElement(C.a.Input,{icon:"lock",iconPosition:"left",label:"Password",type:"password",onChange:this.onPasswordChange}),this.state.buttonLoading?r.a.createElement(v.a,{loading:!0,primary:!0,content:"Login"}):r.a.createElement(v.a,{content:"Login",primary:!0,onClick:this.onLogin}))),"small"===this.state.size&&r.a.createElement(y.a,{horizontal:!0}),r.a.createElement(E.a.Column,{verticalAlign:"middle"},r.a.createElement(v.a,{content:"Sign up",icon:"signup",size:"big",onClick:function(){return e.props.changeRoute("register")}}))),"big"===this.state.size&&r.a.createElement(y.a,{vertical:!0},"Or")))}}]),t}(r.a.Component);function x(){var e=Object(m.a)(["\n\tdisplay: block;\n\tpadding-top: 10px;\n\ttext-decoration: underline;\n\tcursor: pointer;\n\tcolor: inherit;\n"]);return x=function(){return e},e}function M(){var e=Object(m.a)(["\n\t&&& {\n\t\ttext-align: center;\n\t\tmargin-top: 15vh\n\t\tmax-width: 400px!important;\n\n\t\t@media (max-width: 767px) {\n\t\t  margin-top: 40px\n\t\t}\n\t}\n"]);return M=function(){return e},e}var L=Object(p.b)(g.a)(M()),R=p.b.a(x()),D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onNameChange=function(e){n.setState({name:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onRegister=function(){n.state.name&&n.state.password?(n.setState({buttonLoading:!0}),fetch("https://chattychat777.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,password:n.state.password})}).then(function(e){return e.json()}).then(function(e){e.id?(n.props.saveUserData({id:e.id,name:n.state.name}),n.props.changeRoute("main")):"Existing"===e?n.setState({errorRegistering:"Existing"}):n.setState({errorRegistering:"Error"})}).then(function(){n.setState({buttonLoading:!1})})):n.setState({errorRegistering:"Empty"})},n.setErrorMessage=function(){return"Existing"===n.state.errorRegistering?r.a.createElement("div",null,"User already exists"):"Error"===n.state.errorRegistering?r.a.createElement("div",null,"Error registering. Please try again later"):"Empty"===n.state.errorRegistering?r.a.createElement("div",null,"Please enter name and password"):void 0},n.state={name:"",password:"",errorRegistering:"no",buttonLoading:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(L,null,r.a.createElement(d.a,{as:"h1"},"Register"),r.a.createElement(f.a,{placeholder:!0,padded:"very"},r.a.createElement(C.a,{error:!0},r.a.createElement(b.a,{error:!0,content:this.setErrorMessage()}),r.a.createElement(C.a.Input,{icon:"user",iconPosition:"left",label:"Username",placeholder:"Username",onChange:this.onNameChange}),r.a.createElement(C.a.Input,{icon:"lock",iconPosition:"left",label:"Password",type:"password",onChange:this.onPasswordChange}),this.state.buttonLoading?r.a.createElement(v.a,{loading:!0,primary:!0,content:"Register"}):r.a.createElement(v.a,{content:"Register",primary:!0,onClick:this.onRegister}),r.a.createElement(R,{onClick:function(){return e.props.changeRoute("login")}},"Back to login"))))}}]),t}(r.a.Component),I=n(408);function P(){var e=Object(m.a)(["\n\t\n"]);return P=function(){return e},e}var N=p.b.div(P()),U=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChannelNameChange=function(e){n.setState({newChannelName:e.target.value})},n.onChannelDescriptionChange=function(e){n.setState({newChannelDescription:e.target.value})},n.createChannel=function(){n.state.newChannelName&&n.state.newChannelDescription?fetch("https://chattychat777.herokuapp.com/createChannel",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({newChannelName:n.state.newChannelName,newChannelDescription:n.state.newChannelDescription})}).then(function(e){return e.json()}).then(function(e){"Channel Added"===e?(n.props.refreshChannelList(),n.handleModalClose()):"Existing"===e?n.setState({errorCreating:"Existing"}):n.setState({errorCreating:"Error"})}):n.setState({errorCreating:"Empty"})},n.setErrorMessage=function(){return"Existing"===n.state.errorCreating?r.a.createElement("div",null,"Channel with that name already exists"):"Error"===n.state.errorCreating?r.a.createElement("div",null,"Error creating channel. Please try again later"):"Empty"===n.state.errorCreating?r.a.createElement("div",null,"Please enter channel name and description"):void 0},n.handleModalOpen=function(){return n.setState({modalOpen:!0})},n.handleModalClose=function(){return n.setState({modalOpen:!1})},n.state={newChannelName:"",newChannelDescription:"",errorCreating:"",modalOpen:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(I.a,{trigger:r.a.createElement(v.a,{onClick:this.handleModalOpen},"New Channel"),size:"mini",open:this.state.modalOpen,onClose:this.handleModalClose},r.a.createElement(I.a.Header,null,"Create channel"),r.a.createElement(I.a.Content,null,r.a.createElement(I.a.Description,null,r.a.createElement(C.a,{error:!0},r.a.createElement(b.a,{error:!0,content:this.setErrorMessage()}),r.a.createElement(C.a.Input,{label:"Channel name",placeholder:"Channel name",onChange:this.onChannelNameChange}),r.a.createElement(C.a.Input,{label:"Description",type:"Description",onChange:this.onChannelDescriptionChange}),r.a.createElement(v.a,{content:"Create",primary:!0,onClick:this.createChannel}))))))}}]),t}(r.a.Component),T=n(410),F=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getChannels=function(){fetch("https://chattychat777.herokuapp.com/channelsList").then(function(e){return e.json()}).then(function(e){n.setState({channels:e})})},n.renderChannels=function(){return n.state.channels.map(function(e){return r.a.createElement(T.a,{key:e.id,onClick:function(){return n.props.changeRoute("channel",e.id)}},r.a.createElement(T.a.Content,null,r.a.createElement(T.a.Header,null,e.name),r.a.createElement(T.a.Description,null,e.description)))})},n.state={newChannelClicked:!1,channels:[]},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getChannels()}},{key:"componentDidUpdate",value:function(e){e.refreshChannelState!==this.props.refreshChannelState&&this.getChannels()}},{key:"render",value:function(){return r.a.createElement(f.a,{placeholder:!0},r.a.createElement(T.a.Group,{centered:!0},this.renderChannels()))}}]),t}(r.a.Component);function z(){var e=Object(m.a)(["\n\t&&& {\n\t\tmargin-top: 60px;\n\t\tmax-width: 800px!important;\n\t}\n"]);return z=function(){return e},e}var B=Object(p.b)(g.a)(z()),J=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).refreshChannelList=function(){n.setState({refreshChannelState:n.state.refreshChannelState+1})},n.state={newChannelName:"",refreshChannelState:0},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(B,null,r.a.createElement(f.a,null,r.a.createElement(d.a,{as:"h1",textAlign:"center"},"Channels"),r.a.createElement(F,{refreshChannelState:this.state.refreshChannelState,changeRoute:this.props.changeRoute})),r.a.createElement(U,{refreshChannelList:this.refreshChannelList}))}}]),t}(r.a.Component),A=n(409);function G(){var e=Object(m.a)(["\n\theight: 300px;\n\toverflow: auto;\n"]);return G=function(){return e},e}var H=Object(p.b)(f.a)(G()),W=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).scrollToBottom=function(){n.messagesEnd.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},n.makeDatePretty=function(e){var t=new Date(e),n=t.getHours(),a=t.getMinutes(),r=t.getSeconds();return a<10&&(a="0"+a),r<10&&(r="0"+r),n+":"+a+":"+r},n.renderMessages=function(){return n.props.messages.map(function(e){return r.a.createElement(A.a,{key:e.id},r.a.createElement(A.a.Avatar,{src:"https://ui-avatars.com/api/?name="+e.name+"&background="+e.avatarColor+"&length=1&rounded=true"}),r.a.createElement(A.a.Content,null,r.a.createElement(A.a.Author,{as:"a"},e.name),r.a.createElement(A.a.Metadata,null,r.a.createElement("div",null,n.makeDatePretty(e.date))),r.a.createElement(A.a.Text,null,e.content)))})},n.showPlaceholderForMessages=function(){return!0===n.props.messagesLoaded?n.props.messages.length<1&&r.a.createElement("div",null,"Your message will be the first one"):r.a.createElement("div",null,"Loading messages...")},n.state={},n.eventSource="",n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(e){this.scrollToBottom()}},{key:"render",value:function(){var e=this;return r.a.createElement(H,null,this.showPlaceholderForMessages(),r.a.createElement(A.a.Group,null,this.renderMessages()),r.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}))}}]),t}(r.a.Component),V=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onMessageChange=function(e){n.setState({messageText:e.target.value})},n.onKeyPress=function(e){13===e.keyCode&&n.sendMessage()},n.sendMessage=function(){n.state.messageText&&fetch("https://chattychat777.herokuapp.com/sendMessage",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:n.state.messageText,userId:n.props.user.id,channelId:n.props.channelId})}).then(function(){return n.props.getMessages(n.props.channelId)}).then(function(){return n.resetInput()})},n.resetInput=function(){document.getElementById("messageInput").value="",n.setState({messageText:""})},n.state={messageText:""},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,{reply:!0},r.a.createElement(C.a.TextArea,{onChange:this.onMessageChange,onKeyDown:this.onKeyPress,placeholder:"Message text",id:"messageInput"}),r.a.createElement(v.a,{onClick:this.sendMessage,content:"Send",labelPosition:"left",icon:"edit",primary:!0}),r.a.createElement(v.a,{onClick:function(){e.props.changeRoute("main")}},"Back"))}}]),t}(r.a.Component);function K(){var e=Object(m.a)(["\n\t&&& {\n\t\tmargin-top: 60px;\n\t\tmax-width: 800px!important;\n\t}\n"]);return K=function(){return e},e}var Y=Object(p.b)(g.a)(K()),q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getMessages=function(){fetch("https://chattychat777.herokuapp.com/messagesList",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({channelId:n.props.channelId})}).then(function(e){return e.json()}).then(function(e){return n.setState({messages:e,messagesLoaded:!0})})},n.setMessagesSSE=function(){var e="https://chattychat777.herokuapp.com/messagesListSSE/"+n.props.channelId;n.eventSource=new EventSource(e),n.eventSource.onmessage=function(e){n.setState({messages:JSON.parse(e.data)})}},n.state={messages:[],messagesLoaded:!1},n.eventSource="",n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getMessages(),this.setMessagesSSE()}},{key:"componentWillUnmount",value:function(){this.eventSource.close()}},{key:"render",value:function(){return r.a.createElement(Y,null,r.a.createElement(W,{messages:this.state.messages,messagesLoaded:this.state.messagesLoaded}),r.a.createElement(V,{changeRoute:this.props.changeRoute,getMessages:this.getMessages,channelId:this.props.channelId,user:this.props.user}))}}]),t}(r.a.Component),$={color:{accent:"#35CC62",lightGray:"#878787",gray:"#666666",darkGray:"#333333",background:"#FFFFFF",heroText:"#FFFFFF"},layout:{contentWidthDesktop:"1240px",wrapperPaddingMobile:"80px 20px 0 20px",navHeightMobile:"60px",navHeightDesktop:"80px"}};n(397);function Q(){var e=Object(m.a)(["\n\tcolor: ",";\n"]);return Q=function(){return e},e}var X=p.b.div(Q(),function(e){return e.theme.color.darkGray}),Z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).wakeServerUp=function(){fetch("https://chattychat777.herokuapp.com/")},n.pickRoute=function(){return"register"===n.state.route?r.a.createElement(D,{changeRoute:n.changeRoute,saveUserData:n.saveUserData}):"main"===n.state.route?r.a.createElement(J,{changeRoute:n.changeRoute,user:n.state.user}):"login"===n.state.route?r.a.createElement(k,{changeRoute:n.changeRoute,saveUserData:n.saveUserData}):"channel"===n.state.route?r.a.createElement(q,{changeRoute:n.changeRoute,channelId:n.state.channelId,user:n.state.user}):void 0},n.changeRoute=function(e,t){t&&n.setState({channelId:t}),n.setState({route:e})},n.saveUserData=function(e){n.setState({user:e})},n.state={route:"login",channelId:0,user:{}},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.wakeServerUp()}},{key:"render",value:function(){return r.a.createElement(p.a,{theme:$},r.a.createElement(X,null,this.pickRoute()))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[233,1,2]]]);
//# sourceMappingURL=main.49d86dac.chunk.js.map