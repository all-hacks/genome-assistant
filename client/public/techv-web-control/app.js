webpackJsonp([1],{"/Iii":function(t,e,i){"use strict";var n=i("Dd8w"),s=i.n(n),o=i("NYxO"),a=i("YzIw"),u=i("14gb"),c=i("JKEc"),r=i("Cfnf"),l=i("z0ug"),g=(i("A8jS"),i("Vzbl")),d=i.n(g),v=i("kr9P"),f=i.n(v);e.a={name:"conversationScreen",mounted:function(){var t=this;u.a.$on("openWebView",function(e){t.openWebView(e)}),u.a.$on("closeWebView",function(){t.closeWebView()})},updated:function(){this.scrollDown()},data:function(){return{}},components:{activityComponent:c.a,inputComponent:r.a,pulseLoader:a.a},computed:s()({volumeIconSrc:function(){return this.isAudioMuted?f.a:d.a}},Object(o.c)(["audio","isAudioMuted","isMobile","webViewUrl","isWebViewVisible","activities","activityQueue","lastActivity","isTyping"])),methods:s()({},Object(o.d)(["addActivity","setAudio","setIsAudioMuted"]),Object(o.b)(["openWebView","closeWebView","startTyping","stopTyping"]),{getChatViewClasses:function(){var t={};return this.isWebViewVisible?t["twc-chat-view--narrow"]=!0:t["twc-chat-view--wide"]=!0,t},scrollDown:function(){var t=this.$el.querySelector(".twc-history");Object(l.a)(t,500)},handleVolumeBtnClick:function(){this.isAudioMuted?(this.audio&&(this.audio.muted=!1),this.setIsAudioMuted(!1)):(this.audio&&(this.audio.muted=!0),this.setIsAudioMuted(!0))}})}},0:function(t,e){},"0OBz":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"twc-input"},[t.isTextboxEnabled?i("div",{staticClass:"twc-textbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.textboxValue,expression:"textboxValue"}],staticClass:"twc-textbox__field",attrs:{type:"text",size:"30",autofocus:"",placeholder:"Type your message here..."},domProps:{value:t.textboxValue},on:{input:[function(e){e.target.composing||(t.textboxValue=e.target.value)},t.enableSuggestions],keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"escape",void 0,e.key))return null;t.disableSuggestions(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleTextboxEnter(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key))return null;t.handleTextboxUp(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key))return null;t.handleTextboxDown(e)}]}}),t._v(" "),t.shouldShowSuggestions?i("div",{staticClass:"twc-suggestions"},t._l(t.matches,function(e,n){return i("div",{class:t.getSuggestionClasses(n),on:{click:function(e){t.handleSuggestionClick(n)}}},[i("span",[t._v(t._s(e))])])})):t._e()]):t._e(),t._v(" "),t.shouldShowActions?i("div",{staticClass:"twc-actions"},t._l(t.lastActivity.actions,function(e){return i("a",{staticClass:"twc-actions__action",on:{click:function(i){t.sendAction(e)}}},[t._v("\n            "+t._s(e.title)+"\n        ")])})):t._e()])},s=[],o={render:n,staticRenderFns:s};e.a=o},"14gb":function(t,e,i){"use strict";var n=i("7+uW");e.a=new n.a},"6hGL":function(t,e,i){"use strict";var n=i("Zrlr"),s=i.n(n),o=i("wxAW"),a=i.n(o),u=i("DmT9"),c=i.n(u),r=i("2bpm"),l=i.n(r),g=i("14gb"),d=function(){function t(e){s()(this,t),this.channelUrl=e.channelUrl,this.bot=e.bot,this.user=e.user,this.socket=null,this.conversationUpdated=!1}return a()(t,[{key:"connect",value:function(){var t=this;this.socket=c()(this.channelUrl+"?user_id="+this.user.id),this.socket.on("connect",function(){if(console.log("Connected"),!t.conversationUpdated){var e={type:"conversationUpdate",from:t.user,recipient:t.bot,membersAdded:[t.user]};t.socket.emit("activity",e),t.conversationUpdated=!0}}),this._registerClientHandlers(),this._registerServerHandlers()}},{key:"_registerClientHandlers",value:function(){var t=this;g.a.$on("userActivity",function(e){var i={id:l()(),type:"message",from:t.user,recipient:t.bot};e.payload?(i.text=e.payload,i.value=e.payload):(i.text=e.text,i.value=e.text),t.socket.emit("activity",i)})}},{key:"_registerServerHandlers",value:function(){this.socket.on("activity",function(t){if("message"===t.type){var e={id:t.id,text:t.text,from:"bot"};if(t.speak&&(e.speak=t.speak),t.suggestedActions&&(e.actions=t.suggestedActions.actions),t.channelData&&t.channelData.attachments&&"buttons"===t.channelData.attachments.contentType&&(e.buttons=t.channelData.attachments.content),t.inputHint)switch(t.inputHint){case"ignoringInput":e.input="ignore";break;case"acceptingInput":e.input="accept";break;case"expectingInput":e.input="expect"}g.a.$emit("botActivity",e)}}),this.socket.on("activity",function(t){"typing"===t.type&&g.a.$emit("typing")}),this.socket.on("activity",function(t){"event"===t.type&&g.a.$emit(t.name,t.payload)})}}]),t}();e.a=d},"8L6P":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"twc-container"}},[t.isConversationScreenVisible?i("conversation-screen",{ref:"conversationScreen"}):t._e()],1)},s=[],o={render:n,staticRenderFns:s};e.a=o},"8QQJ":function(t,e,i){"use strict";function n(t){i("v05v")}var s=i("si2P"),o=i("8L6P"),a=i("VU/8"),u=n,c=a(s.a,o.a,!1,u,null,null);e.a=c.exports},A8jS:function(t,e,i){"use strict";var n=i("Zrlr"),s=i.n(n),o=i("wxAW"),a=i.n(o),u=function(){function t(){s()(this,t),this.items=[]}return a()(t,[{key:"enqueue",value:function(t){this.items.push(t)}},{key:"dequeue",value:function(){return this.items.shift()}},{key:"getFirst",value:function(){return this.items[0]}},{key:"isEmpty",value:function(){return 0===this.items.length}}]),t}();e.a=u},B4jh:function(t,e){},Cfnf:function(t,e,i){"use strict";function n(t){i("k3ky")}var s=i("snYt"),o=i("0OBz"),a=i("VU/8"),u=n,c=a(s.a,o.a,!1,u,"data-v-711e806f",null);e.a=c.exports},HayK:function(t,e,i){"use strict";var n=i("olkN"),s=function(t){var e=n.a.getters.voiceApiUrl+encodeURIComponent(t);return new Audio(e)};e.a={create:s}},JA1j:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABQElEQVR4Ae3a3WkCURRF4d2AppyrnTsNaMpRG5ggebgPYSAPfgMhe90G1ppfOJyUUkoppZRSSinll3xkyYjgnEsOXv8za+4ZQP+ZNdccvf76nQD0X+eWI9afCUB/Jkj9mQD0WcKS9cd5ZAD911nydkYeIGHqg3sLEoA+SBD6PoHr+wSt7xNOQB9x2krg+j6B6/sEru8TtL5POAN9xHkrgev7BK7vE7i+T+D6PgHoGzZEn1jfJwB9m8D1fQLX9wle3yd4/Qb4R6gvsf+M9kfm9e9gILmr/siQCV7/hUzw+jTB69MEr88SvD6Yqe6pDwaSe+vTBK9PE7w+S/D6YKa6pz4YSO6tTxO8Pk3w+jTB6/+FhMuGvrkwl7ydY267rdtcc0h0Alp4mvo2Aa2cTX2XoJf+Dv9i7bKUUkoppZRSSilfvlEwaH0mtuUAAAAASUVORK5CYII="},JKEc:function(t,e,i){"use strict";function n(t){i("VmvZ")}var s=i("XFAn"),o=i("JPgM"),a=i("VU/8"),u=n,c=a(s.a,o.a,!1,u,"data-v-049d23fa",null);e.a=c.exports},JPgM:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"twc-message"},[i("div",{class:t.getMessageContentClasses(t.activity)},[t.activity.text?i("div",{class:t.getMessageTextClasses(t.activity)},[t._v("\n            "+t._s(t.activity.text)+"\n        ")]):t._e(),t._v(" "),t._l(t.activity.buttons,function(e){return i("a",{staticClass:"twc-button",on:{click:function(i){t.sendAction(e)}}},[t._v("\n            "+t._s(e.title)+"\n        ")])})],2)])},s=[],o={render:n,staticRenderFns:s};e.a=o},MZp3:function(t,e,i){"use strict";function n(t){i("B4jh")}var s=i("/Iii"),o=i("zEt0"),a=i("VU/8"),u=n,c=a(s.a,o.a,!1,u,null,null);e.a=c.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Zrlr"),s=i.n(n),o=i("wxAW"),a=i.n(o),u=i("7+uW"),c=i("6VvU"),r=i.n(c),l=i("14gb"),g=i("8QQJ"),d=i("6hGL"),v=i("olkN");u.a.config.productionTip=!1;var f=function(){function t(e){s()(this,t),this.container=e.container,this.connector=new d.a(e.connector),this._initialize(),this._connect();var i=r()();v.a.commit("setIsMobile",i),i||v.a.commit("setIsAudioMuted",e.isAudioMuted)}return a()(t,[{key:"sendEvent",value:function(t,e){l.a.$emit(t,e)}},{key:"_initialize",value:function(){new u.a({el:this.container,template:'<app ref="app"/>',components:{app:g.a},store:v.a})}},{key:"_connect",value:function(){this.connector.connect()}}]),t}();window.TechvWebControl=f},"Row+":function(t,e){},VmvZ:function(t,e){},Vzbl:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAADA0lEQVR4Ae2az0vUXRSHH4aZMcyyX5oZpua6NkEoEpr0F4T5g4IKstSiIigIKltUqwzKhX9AreIlX3gtISKCjKQCS5GgaBFhqTiFRZozr92gTXDv+eIQwpwL9znbcy6fB+Y7M3zvIeA/gUAgEAgEPCKO58zwL52U4i3mdy1wn70k/RT4U+OcZiWquegKWJXiGHG98Y0rINQYO7TGlwXcWuAqeRrjywJyvaJSW3xZILqm2aktvivQTB/zkQoZWnTFN0gUc4GpyKdhv6b4higK6OKbqPCTVj3xDdHAJu6KCvPUaYlvWIwOfghTX6jSEd+wONv4KMy9IKkhviEbynktTF7XEN+QHSW8ER7m2tzHN2RLGePO7CiJXMc3ZM925pzpU7mO7wrEiKbdmZ6iILfxXYFRGoim35k/m9v48p+5XpYhU8Z3a36CRC7jywKGIYqQOe+c0Jy7+NEChjHWIbGcaeuER/wVZokq+twh8pA45/webNApYOhFopi0dUa7VgHDLiT+sboG9AqMEcOlyer6SkyrgKEFl0IyVtdWvQJPkHhqdR3WK2CoxOWG1XNNs0AnLgesnj7NArdwqbN6XuoVkMNVWD0fNAtM47La6vmsWSCDS9LqSRNJEAgfoWHfH+KbuNT79DXagctBn37IynHpsXq69Qo8RmLI6mrTK9CEyyrn7/QWrQKjxHBpsbpmiGkVaEDijtV1D3QK9CCx3vkAHdEpMEgSiS7ntUqJxhdbI6xBYgUp64SHGl8tDrI261P36Hu520MeMuXMWvOfSOh6vT5CPdEMOPNnfLrgOOpMT5DvzxVTjXBjfMKfS74KJoQFnLgv16wbeSesfVT7ctFdxVthstuXVYMaJoW5ZyT8WPY4SVqYSlHpw7rNZh5ghJqjVv/CUyFXmI3Y2WrUvnJWymVSkVtzrbqX/vbRTxoTUfPs9nntcpJanxdfn1Pm7+rx/1wi4e/y9zDV/q7fT9JGDC9wBd5znHwA/wQy/EcjcTwkxW0OUYS3xFgiAoFAIBAIBAK/AGCab9QFQ1K5AAAAAElFTkSuQmCC"},XFAn:function(t,e,i){"use strict";var n=i("DtRx"),s=i.n(n),o=i("14gb");e.a={name:"activity",props:["activity"],data:function(){return{showActions:!0}},methods:{sendAction:function(t){var e={id:s()(),type:"message",text:t.title,payload:t.value,from:"user"};o.a.$emit("userActivity",e)},getMessageContentClasses:function(t){var e={};return"user"===t.from?e["twc-message__content--user"]=!0:e["twc-message__content--bot"]=!0,e},getMessageTextClasses:function(t){var e={};return"user"===t.from?e["twc-message__text--user"]=!0:(e["twc-message__text--bot"]=!0,t.buttons&&(e["twc-message__text--actionable"]=!0)),e}}}},YzIw:function(t,e,i){"use strict";function n(t){i("Row+")}var s=i("i/iG"),o=i("t3+P"),a=i("VU/8"),u=n,c=a(s.a,o.a,!1,u,null,null);e.a=c.exports},"i/iG":function(t,e,i){"use strict";e.a={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}}},k3ky:function(t,e){},kr9P:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAADY0lEQVR4Ae3YzUt8VRjA8e8dHS1MoijJHz9LcRcRQRBBhWT2D7RQaREtynzZFBS06MVeiCCiCHJGe1m1DIxQJAhaSSItEpOgZWkvIoFJZqPjaRORzzkz8zB3vM8dON+7Pffh+Qjz+3EusTrFYrFYLBaLzfA+Ca2rM+v1z3EstJBwyGfMciXL9V0rCf/Oq/IFj9KV1fqtJLj/Pbs8S28G66cgzPsA8RwwRweX0AIOl5IwjwsDxPMd99PyEkopCa/glABHlbfozoZQItGu3wggnm8Zyg/hVZwOIH4PD7aeUNYTxPphwATL/F2TcMqEPeE1nASI+niJfcKEMx6zJMj1HbW6jpc5ChLOmbQjDHOsBADcymqQcMKIHeFhQWjUDCeByb8z3HrCopIwdoHQuLv5OTD5G7qyIZQbEDTdxveBye+CHeGh/wi6buGHwI/5vjwQtA2w583dpmhP0HcPf3lzn4HLICwpCaMcIytQu2lv6j491gTZNqPUbsWb+jzYEmQOR4lrCDfAn2LmrxTtCRLg2OBmwr3ozRyHLAmLJAqAY4ebCNXDgZj4FU3ltI+eIOZu0E2oF7z/D/ozAOgIYm6JUH1UxLzpDABKgpw7RqhPxam1DABKgpy7QwG/cXHqDwoZAJQEeV+YxO96TsWpOy0AkhC+L6wT6msxacoG4FhSEIbwe0/MedsAoCbM4ve4mLJsAFATPsFvRH70MgAoCeHlBsWEnwwAasIBfjfIS74BQE2o4Ncl3q4YANSEM/wK8uu1AUBN2MWvV7x5bABQE27Hb0i894sBQE9Q/DO6ZQJIQXhKvLNqB1hoilCWX+nsAElThB1x/gk7AE0Qrnqn7zIENEGY8y40HYaAJgjr4tznYA0APaHX+7g1ZQpogjB6gXBGH5fQvBaQmrAGYEcgNeERsCSQkvAjHWBJICXhaQBLAqkID3At2BJISQBsCbQ7gXYn0O4E2p1Qv05ex+WbUK872JTn80eo1Y28w6k4m0tCqH7e4FAunFeCbJxl+ZfPNwH094xKHgl6wCaDfJwvgh5Q5U2KQMJHuSIoAVvcCwA1CWUwIjQE/MasuLIkfCjOnPMkxoUBezxHDzJJMF4/DKjyJRMUqVXCB/lcH45YYYZ+RCFCHteHTrQllOutH4vFYrFYLBb7BxoSB7FflaA7AAAAAElFTkSuQmCC"},olkN:function(t,e,i){"use strict";var n=i("7+uW"),s=i("NYxO"),o=i("A8jS");n.a.use(s.a);var a=new s.a.Store({state:{mode:"default",isMobile:null,isWebViewVisible:!1,webViewUrl:null,isTyping:!1,typingTimeout:null,activities:[],activityQueue:new o.a,audio:null,isAudioMuted:!0,suggestions:[],voiceApiUrl:null},getters:{mode:function(t){return t.mode},isMobile:function(t){return t.isMobile},isWebViewVisible:function(t){return t.isWebViewVisible},webViewUrl:function(t){return t.webViewUrl},isTyping:function(t){return t.isTyping},typingTimeout:function(t){return t.typingTimeout},activities:function(t){return t.activities},lastActivity:function(t){return 0===t.activities.length?null:t.activities[t.activities.length-1]},activityQueue:function(t){return t.activityQueue},audio:function(t){return t.audio},isAudioMuted:function(t){return t.isAudioMuted},config:function(t){return t.config},suggestions:function(t){return t.suggestions},voiceApiUrl:function(t){return t.voiceApiUrl}},mutations:{setIsMobile:function(t,e){t.isMobile=e},setConfig:function(t,e){t.config=e},setWebViewUrl:function(t,e){t.webViewUrl=e},setIsWebViewVisible:function(t,e){t.isWebViewVisible=e},addActivity:function(t,e){t.activities.push(e)},setIsTyping:function(t,e){t.isTyping=e},setTypingTimeout:function(t,e){t.typingTimeout=e},setIsAudioMuted:function(t,e){t.isAudioMuted=e},setAudio:function(t,e){t.audio=e},setSuggestions:function(t,e){t.suggestions=e},setVoiceApiUrl:function(t,e){t.voiceApiUrl=e}},actions:{closeWebView:function(t){var e=t.commit;e("setWebViewUrl",null),e("setIsWebViewVisible",!1)},openWebView:function(t,e){var i=t.commit;i("setWebViewUrl",e),i("setIsWebViewVisible",!0)},startTyping:function(t){var e=t.commit,i=t.dispatch,n=setTimeout(function(){i("stopTyping")},15e3);i("stopTyping"),e("setIsTyping",!0),e("setTypingTimeout",n)},stopTyping:function(t){var e=t.state,i=t.commit;e.typingTimeout&&clearTimeout(e.typingTimeout),i("setIsTyping",!1)}}});e.a=a},si2P:function(t,e,i){"use strict";var n=i("Dd8w"),s=i.n(n),o=i("NYxO"),a=i("14gb"),u=i("MZp3"),c=i("HayK");e.a={name:"app",mounted:function(){var t=this;this.startTyping(),a.a.$on("config",function(e){e.suggestions&&t.setSuggestions(e.suggestions),e.voiceApiUrl&&t.setVoiceApiUrl(e.voiceApiUrl),t.setConfig(e)}),a.a.$on("typing",function(e){t.startTyping()}),a.a.$on("botActivity",function(e){t.activityQueue.enqueue(e)}),a.a.$on("userActivity",function(e){t.startTyping(),t.addActivity(e)}),this.startActivityScheduling()},data:function(){return{isConversationScreenVisible:!0}},components:{conversationScreen:u.a},computed:s()({},Object(o.c)(["isMobile","isTyping","activityQueue","audio","isAudioMuted"])),methods:s()({},Object(o.b)(["startTyping","stopTyping"]),Object(o.d)(["addActivity","setAudio","setConfig","setSuggestions","setVoiceApiUrl"]),{isAudioPlaying:function(){return this.audio&&!this.audio.ended&&!this.isAudioMuted},startActivityScheduling:function(){setTimeout(this.pullActivityFromQueue.bind(this),100)},pullActivityFromQueue:function(){if(this.isAudioPlaying())return void setTimeout(this.pullActivityFromQueue.bind(this),500);if(this.activityQueue.isEmpty())return void setTimeout(this.pullActivityFromQueue.bind(this),100);var t=this.activityQueue.dequeue();this.stopTyping(),this.addActivity(t),this.isAudioMuted?this.setAudio(null):this.speak(t),setTimeout(this.pullActivityFromQueue.bind(this),500)},speak:function(t){var e=t.speak||t.text||null;if(e){var i=c.a.create(e);i.play(),i.muted=this.isAudioMuted,this.setAudio(i)}}})}},snYt:function(t,e,i){"use strict";var n=i("Dd8w"),s=i.n(n),o=i("NYxO"),a=i("DtRx"),u=i.n(a),c=i("14gb");e.a={props:["activity"],data:function(){return{areActionsEnabled:!1,textboxValue:"",areSuggestionsEnabled:!1,currentSuggestion:-1}},watch:{lastActivity:function(t){"bot"===t.from&&(this.areActionsEnabled=!0)}},computed:s()({},Object(o.c)(["isMobile","lastActivity","suggestions"]),{isTextboxEnabled:function(){return!(this.lastActivity&&"ignore"===this.lastActivity.input)},matches:function(){var t=this;return this.suggestions.filter(function(e){var i=e.toLowerCase(),n=t.textboxValue.toLowerCase();return i.indexOf(n)>=0}).slice(0,3)},shouldShowSuggestions:function(){return!1===this.isMobile&&""!==this.textboxValue&&0!==this.matches.length&&!0===this.areSuggestionsEnabled},shouldShowActions:function(){return this.areActionsEnabled&&this.lastActivity&&this.lastActivity.actions}}),methods:s()({},Object(o.d)(["openWebView"]),{enableSuggestions:function(){this.areSuggestionsEnabled=!0},disableSuggestions:function(){this.areSuggestionsEnabled=!1,this.currentSuggestion=-1},sendMessage:function(){var t={id:u()(),type:"message",text:this.textboxValue,from:"user"};""!==t.text&&(c.a.$emit("userActivity",t),this.textboxValue="",this.areActionsEnabled=!1)},sendAction:function(t){if("openUrl"===t.type)window.open(t.value,"_blank");else{var e={id:u()(),type:"message",text:t.title,payload:t.value,from:"user"};c.a.$emit("userActivity",e),this.textboxValue="",this.areActionsEnabled=!1}},handleTextboxEnter:function(){this.currentSuggestion>=0&&(this.textboxValue=this.matches[this.currentSuggestion]),this.disableSuggestions(),this.sendMessage()},handleTextboxUp:function(){this.currentSuggestion>=0&&this.currentSuggestion--},handleTextboxDown:function(){this.currentSuggestion<this.matches.length-1&&this.currentSuggestion++},getSuggestionClasses:function(t){var e={};return this.isSuggestionActive(t)?e["twc-suggestions__suggestion--active"]=!0:e["twc-suggestions__suggestion"]=!0,e},isSuggestionActive:function(t){return t===this.currentSuggestion},handleSuggestionClick:function(t){this.textboxValue=this.matches[t],this.disableSuggestions(),this.sendMessage()}})}},"t3+P":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[i("div",{staticClass:"v-pulse v-pulse1",style:[t.spinnerStyle,t.spinnerDelay1]}),i("div",{staticClass:"v-pulse v-pulse2",style:[t.spinnerStyle,t.spinnerDelay2]}),i("div",{staticClass:"v-pulse v-pulse3",style:[t.spinnerStyle,t.spinnerDelay3]})])},s=[],o={render:n,staticRenderFns:s};e.a=o},v05v:function(t,e){},z0ug:function(t,e,i){"use strict";e.a=function(t,e){function i(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:(t-=1,-i/2*(t*(t-2)-1)+e)}function n(o){o+=u;var c=i(o,s,a,e);t.scrollTop=c,o<e&&setTimeout(function(){n(o)},u)}var s=t.scrollTop,o=t.scrollHeight,a=o-s,u=20;n(0)}},zEt0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twc-conversation-screen"},[n("div",{class:t.getChatViewClasses()},[t.isMobile?t._e():n("img",{staticClass:"twc-volume-btn",attrs:{src:t.volumeIconSrc},on:{click:t.handleVolumeBtnClick}}),t._v(" "),n("div",{staticClass:"twc-history"},[n("transition-group",{attrs:{name:"slide-in"}},t._l(t.activities,function(t){return n("activityComponent",{key:t.id,attrs:{activity:t}})})),t._v(" "),n("div",{staticClass:"twc-typing-indicator"},[n("pulseLoader",{attrs:{loading:t.isTyping,color:"#0084ff",size:"15px"}})],1)],1),t._v(" "),n("inputComponent",{attrs:{activity:t.lastActivity}})],1),t._v(" "),n("transition",{attrs:{name:"open-right"}},[t.isWebViewVisible?n("div",{staticClass:"twc-web-view"},[n("img",{staticClass:"twc-close-btn",attrs:{src:i("JA1j")},on:{click:t.closeWebView}}),t._v(" "),n("iframe",{staticClass:"twc-web-view__iframe",attrs:{src:t.webViewUrl}})]):t._e()])],1)},s=[],o={render:n,staticRenderFns:s};e.a=o}},["NHnr"]);
//# sourceMappingURL=app.js.map