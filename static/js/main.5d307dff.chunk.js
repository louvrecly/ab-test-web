(this["webpackJsonpab-test-web"]=this["webpackJsonpab-test-web"]||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(14),o=a.n(s),c=a(10),l=a(62),i=a(8),u=a.n(i),_=a(11),d=a(12),m=a(7),p=a(23),f=a(31),h=a(29),y=a.n(h),v=Object({NODE_ENV:"production",PUBLIC_URL:"/ab-test-web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_SERVER:"http://localhost:8080",REACT_APP_STADIA_MAP_API_KEY:"dc0409eb-addb-404f-a42a-39867c49e57f",REACT_APP_URL_PREFIX:"/ab-test-web"}),b=v.REACT_APP_API_SERVER,E=v.REACT_APP_STADIA_MAP_API_KEY,x=v.REACT_APP_URL_PREFIX;function O(e){return{type:"CREATE_THREAD",newThread:e}}function g(e,t){return{type:e,msg:t}}function S(e){return{type:"SET_SHOW_RECORD_BUTTON_STATE",showRecordButton:e}}function w(e){return{type:"SET_SHOW_PLAY_LIST_STATE",showPlayList:e}}function T(e,t){return{type:"SET_DRAWER_STATE",side:e,open:t}}function z(e){return{type:"EMBED_RECORD_BUTTON",embeddedRecordButton:e}}function R(e,t){return{type:e,msg:t}}var j="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=".concat(E),A={center:[22.2988,114.1722],zoom:12,zoomSnap:.1,zoomDelta:.5,zoomControl:!1,doubleClickZoom:!1},N=a(50),P=a.n(N),D=Object(c.c)((function(e){return{activeThread:e.threads.activeThread,threads:e.threads.threads,drawerState:e.components.drawerState,geolocation:e.geolocation.geolocation}}),(function(e){return{setActiveThread:function(t){return e({type:"SET_ACTIVE_THREAD",activeThread:t})},loadVoices:function(t){return e(function(e){return function(){var t=Object(_.a)(u.a.mark((function t(a){var r,n,s,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/voices?thread_id=").concat(e),{method:"GET"});case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,s=n.isSuccess,o=n.data,a(s?{type:"LOAD_VOICES",voices:o}:R("LOAD_VOICES_FAILED",o));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},stopPlayingThread:function(){return e({type:"STOP_PLAYING_THREAD"})},setDrawerState:function(t,a){return e(T(t,a))},setShowRecordButtonState:function(t){return e(S(t))},setShowPlayListState:function(t){return e(w(t))}}}))((function(e){var t=e.activeThread,a=e.threads,s=e.geolocation,o=e.setActiveThread,c=e.loadVoices,l=e.stopPlayingThread,i=e.setDrawerState,u=e.setShowRecordButtonState,_=e.setShowPlayListState,h=Object(r.useRef)(null),v=Object(r.useRef)(null),b=Object(r.useRef)(null),E=Object(r.useRef)(null),O=Object(r.useState)({}),g=Object(p.a)(O,2),S=g[0],w=g[1],T=Object(f.e)(),z=Object(f.g)("".concat(x,"/threads/:threadId"));return Object(r.useEffect)((function(){var e=y.a.DomUtil.get("map");e&&(e._leaflet_id=null);var t=y.a.tileLayer(j,{className:P.a["tile-layer"],attribution:'\n  &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>,\n  &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>\n  &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>\n  contributors\n'}),a=Object(m.a)(Object(m.a)({},A),{},{layers:[t]});h.current=y.a.map("map",a),v.current=y.a.layerGroup().addTo(h.current),b.current=y.a.layerGroup().addTo(h.current)}),[]),Object(r.useEffect)((function(){v.current.clearLayers();var e=y.a.divIcon({className:P.a.thread});a.forEach((function(t){var a=y.a.latLng([t.location._latitude,t.location._longitude]),r=y.a.popup({className:P.a.popup,closeButton:!1,pane:"shadowPane"}),n=y.a.marker(a,{icon:e}).bindPopup(r).on("mousedown",(function(e){E.current=e.target;var a="".concat(x,"/threads/").concat(t.id);T.push(a)})).on("popupopen",(function(){h.current.flyTo(a),_(!1),u(!1),i("bottom",!0)})).on("popupclose",(function(){E.current=null,u(!0),i("bottom",!1);var e=x;T.push(e)})).addTo(v.current);w((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},t.id,n))}))}))}),[a,T,o,i,u,_]),Object(r.useEffect)((function(){if(s){var e=y.a.divIcon({className:P.a["new-thread"]}),t=y.a.latLng([s._latitude,s._longitude]);E.current=y.a.marker(t,{icon:e}).addTo(b.current),h.current.flyTo(t)}else b.current&&b.current.clearLayers()}),[s]),Object(r.useEffect)((function(){if(z&&z.isExact){var e=z.params.threadId,t=a.find((function(t){return t.id===e}));l(),o(t||null)}else o(null)}),[z,a,l,o]),Object(r.useEffect)((function(){t&&(c(t.id),E.current=S[t.id],E.current.isPopupOpen()||E.current.openPopup())}),[t,S,c]),n.a.createElement("div",{id:"map",className:P.a.map})})),L=a(138),k=a(141),C=a(142),I=a(143),B=a(118),U=a(60),G=a(43),F=a(32),H=a.n(F),M=Object(c.c)((function(e){return{channel:e.channels.channel,drawerState:e.components.drawerState}}),(function(e){return{setDrawerState:function(t,a){return e(T(t,a))},setShowRecordButtonState:function(t){return e(S(t))}}}))((function(e){return n.a.createElement(L.a,{className:H.a["head-nav"],position:"absolute"},n.a.createElement(k.a,null,n.a.createElement(C.a,{className:"".concat(H.a.menu," ").concat(H.a["nav-menu"]),edge:"start",color:"inherit","aria-label":"menu",onClick:function(){var t=!e.drawerState.left;e.setShowRecordButtonState(!t),e.setDrawerState("left",t)}},n.a.createElement(G.c,null)),n.a.createElement(I.a,{className:H.a.switch},n.a.createElement(B.a,{className:"".concat(H.a.prev," ").concat(H.a["stage-previous"]),"aria-label":"previous"},n.a.createElement(G.a,null)),n.a.createElement(B.a,{className:H.a.stage,color:"inherit"},e.channel),n.a.createElement(B.a,{className:"".concat(H.a.next," ").concat(H.a["stage-next"]),"aria-label":"next"},n.a.createElement(G.b,null))),n.a.createElement(C.a,{className:"".concat(H.a.search," ").concat(H.a["nav-search"]),edge:"end",color:"inherit","aria-label":"search"},n.a.createElement(U.a,null))))})),V=a(9);function W(e){return{type:"SET_AUDIO",audio:e}}function Z(e){return{type:"SET_GEOLOCATION",geolocation:e}}function J(){var e=window.navigator.geolocation;if(e){return new Promise((function(t,a){e.getCurrentPosition(t,a)}))}console.log("Geolocation is not supported!")}function Y(e){var t=e.coords;return{_latitude:t.latitude,_longitude:t.longitude}}function q(){return Q.apply(this,arguments)}function Q(){return(Q=Object(_.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:return t=e.sent,e.abrupt("return",t?Y(t):void 0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=a(64),X=a.n(K),$=Object(c.c)((function(e){return{recorder:e.audios.recorder,isRecording:e.audios.isRecording,activeThread:e.threads.activeThread,showRecordButton:e.components.showRecordButton,embeddedRecordButton:e.components.embeddedRecordButton}}),(function(e){return{setAudio:function(t){return e(W(t))},setIsRecordingState:function(t){return e(function(e){return{type:"SET_IS_RECORDING_STATE",isRecording:e}}(t))},setDrawerState:function(t,a){return e(T(t,a))},setShowRecordButtonState:function(t){return e(S(t))},embedRecordButton:function(t){return e(z(t))},setGeolocation:function(t){return e(Z(t))}}}))((function(e){var t,a=Object(f.e)(),r=Object(f.f)(),s=function(){if(e.recorder&&!e.isRecording){e.setGeolocation();var t=r.pathname.replace("/new","");a.push(t),e.setDrawerState("bottom",!0),e.recorder.start(),e.setIsRecordingState(!0),e.embedRecordButton(!1)}else console.log("recorder is not ready!")},o=function(){var t=Object(_.a)(u.a.mark((function t(){var n,s,o,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isRecording){t.next=15;break}return t.next=3,null===(n=e.recorder)||void 0===n?void 0:n.stop();case 3:return s=t.sent,e.setAudio(s),e.setIsRecordingState(!1),o="".concat(e.activeThread?r.pathname:"".concat(x,"/threads"),"/new"),a.push(o),e.setShowRecordButtonState(!1),t.next=11,q();case 11:c=t.sent,e.setGeolocation(c),t.next=16;break;case 15:console.log("no audio is being recorded");case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return n.a.createElement("div",{className:Object(V.a)((t={},Object(d.a)(t,X.a["record-button"],!0),Object(d.a)(t,X.a.floating,!e.embeddedRecordButton),t))},n.a.createElement(C.a,{id:"record",className:X.a.button,"aria-label":"record",onMouseDown:s,onTouchStart:s,onMouseUp:o,onTouchEnd:o,onContextMenu:function(e){return e.preventDefault()}},e.embeddedRecordButton?"\u958b\u59cb\u9304":"9up"))})),ee=a(144),te=a(70),ae=a.n(te),re=Object(c.c)((function(e){return{drawerState:e.components.drawerState}}),(function(e){return{setDrawerState:function(t,a){return e(T(t,a))},setShowRecordButtonState:function(t){return e(S(t))},embedRecordButton:function(t){return e(z(t))},setGeolocation:function(t){return e(Z(t))}}}))((function(e){var t,a=e.side,s=e.drawerState,o=e.disableSwipe,c=e.children,l=e.setDrawerState,i=e.setShowRecordButtonState,u=e.embedRecordButton,_=e.setGeolocation,m=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&(i(!t),l(e,t),u(t))}};return Object(r.useEffect)((function(){s.bottom||_()}),[s.bottom,_]),n.a.createElement(ee.a,{anchor:a,open:s[a],disableSwipeToOpen:o,onClose:m(a,!1),onOpen:m(a,!0),className:Object(V.a)((t={},Object(d.a)(t,ae.a.drawer,!0),Object(d.a)(t,ae.a["drawer-horizontal"],"left"===a||"right"===a),t))},c)})),ne=a(28),se=a(79),oe=a(80),ce=a.n(oe);function le(e){var t=e._seconds,a=e._nanoseconds,r=new se.firestore.Timestamp(t,a);return ce()(r.toDate()).fromNow()}function ie(){var e=Date.now(),t=Math.floor(e/1e3);return{_seconds:t,_nanoseconds:1e6*(e-1e3*t)}}var ue=a(37),_e=a.n(ue),de=Object(c.c)((function(e){return{users:e.users.users}}),(function(e){return{}}))((function(e){var t,a,r;return n.a.createElement("div",{className:_e.a["voice-info"]},n.a.createElement(C.a,{className:_e.a.profile,"aria-label":"profile"},n.a.createElement(ne.g,null),n.a.createElement("span",{className:_e.a.badge},null===(t=e.users.find((function(t){return t.id===e.voice.user_id.split("/")[1]})))||void 0===t||null===(a=t.followers)||void 0===a?void 0:a.length,"+")),n.a.createElement("div",{className:_e.a.info},n.a.createElement("p",{className:_e.a.date},le(e.voice.timestamp)),n.a.createElement("h3",{className:_e.a.user},null===(r=e.users.find((function(t){return t.id===e.voice.user_id.split("/")[1]})))||void 0===r?void 0:r.username)),n.a.createElement(C.a,{className:_e.a.like,"aria-label":"like"},n.a.createElement(ne.e,null),n.a.createElement("span",{className:_e.a.badge},e.voice.liked_by_users.length,"+")))})),me=a(65),pe=a.n(me),fe=Object(c.c)((function(e){return{voices:e.voices.voices}}),(function(e){return{}}))((function(e){var t;return n.a.createElement("div",{className:Object(V.a)((t={},Object(d.a)(t,pe.a["play-list"],!0),Object(d.a)(t,pe.a.open,e.open),t))},n.a.createElement("ul",{className:pe.a.voices},e.voices.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(de,{voice:e}))}))))})),he=a(30),ye=a.n(he),ve=Object(c.c)((function(e){return{activeThread:e.threads.activeThread,users:e.users.users,voices:e.voices.voices,threadPlaying:e.threads.threadPlaying,showPlayList:e.components.showPlayList}}),(function(e){return{toggleThreadPlaying:function(){return e({type:"TOGGLE_THREAD_PLAYING"})},setShowPlayListState:function(t){return e(w(t))},setShowRecordButtonState:function(t){return e(S(t))}}}))((function(e){var t,a=function(){var t=!e.showPlayList;e.setShowPlayListState(t),e.setShowRecordButtonState(t)};return n.a.createElement("div",{className:ye.a["thread-panel"]},e.activeThread&&n.a.createElement("div",{className:ye.a.container},n.a.createElement("div",{className:ye.a.handle,onClick:a}),n.a.createElement("div",{className:ye.a.contents},n.a.createElement("h2",{className:ye.a.title,onClick:a},e.activeThread.title),n.a.createElement("p",{className:ye.a.info},null===(t=e.users.find((function(t){var a;return t.id===(null===(a=e.activeThread)||void 0===a?void 0:a.user_id).split("/")[1]})))||void 0===t?void 0:t.username,"\u30fb",le(e.activeThread.timestamp)),n.a.createElement("div",{className:ye.a.control},n.a.createElement(C.a,{className:ye.a["control-star"],color:"inherit","aria-label":"star"},n.a.createElement(ne.f,null)),n.a.createElement(C.a,{className:ye.a["thread-previous"],color:"inherit","aria-label":"previous"},n.a.createElement(G.e,null)),n.a.createElement(C.a,{className:ye.a["thread-play"],color:"inherit","aria-label":"play",onClick:function(){e.setShowPlayListState(!0),e.setShowRecordButtonState(!0),e.toggleThreadPlaying()}},e.threadPlaying?n.a.createElement(ne.c,null):n.a.createElement(ne.d,null)),n.a.createElement(C.a,{className:ye.a["thread-next"],color:"inherit","aria-label":"next"},n.a.createElement(G.d,null)),n.a.createElement(C.a,{className:ye.a["control-share"],color:"inherit","aria-label":"share"},n.a.createElement(U.b,null))),n.a.createElement(fe,{open:e.showPlayList}))))})),be=a(71),Ee=a.n(be),xe=function(){return n.a.createElement("div",{className:Ee.a["timer-bar"]},n.a.createElement("h2",{className:Ee.a.timer},"00:00"))},Oe=a(87),ge=a(81),Se=a(51),we=a.n(Se),Te=Object(c.c)((function(e){return{}}),(function(e){return{setAudio:function(t){return e(W(t))},setShowRecordButtonState:function(t){return e(S(t))},embedRecordButton:function(t){return e(z(t))}}}))((function(e){var t=Object(r.useState)(!1),a=Object(p.a)(t,2),s=a[0],o=a[1],c=new Audio(e.audioUrl);c.addEventListener("ended",(function(){return o(!1)}));return n.a.createElement("div",{className:we.a["voice-player"]},e.audioUrl?n.a.createElement("div",{className:we.a.control},n.a.createElement(C.a,{className:we.a.play,"aria-label":"play",onClick:function(e){s?c.pause():c.play(),o(!s)}},s?n.a.createElement(ne.c,null):n.a.createElement(ne.d,null)),n.a.createElement("div",{className:we.a["wave-form"]},"WaveForm"),n.a.createElement(C.a,{className:we.a.delete,"aria-label":"delete",onClick:function(){e.setAudio(),e.embedRecordButton(!0),e.setShowRecordButtonState(!0)}},n.a.createElement(ge.a,null))):n.a.createElement($,null))})),ze=a(82);var Re=a(18),je=a.n(Re),Ae=Object(c.c)((function(e){return{audio:e.audios.audio,geolocation:e.geolocation.geolocation}}),(function(e){return{createThread:function(t){return e(function(e){return function(){var t=Object(_.a)(u.a.mark((function t(a){var r,n,s,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/threads"),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)});case 2:return r=t.sent,t.next=5,r.json();case 5:if(n=t.sent,s=n.isSuccess,o=n.data,!s){t.next=13;break}return a(O(o)),t.abrupt("return",o);case 13:a(g("CREATE_THREAD_FAILED",o));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},createVoice:function(t){return e(function(e){return function(){var t=Object(_.a)(u.a.mark((function t(a){var r,n,s,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/voices"),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)});case 2:return r=t.sent,t.next=5,r.json();case 5:if(n=t.sent,s=n.isSuccess,o=n.data,!s){t.next=12;break}return t.abrupt("return",o);case 12:a(R("CREATE_VOICE_FAILED",o));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},setGeolocation:function(t){return e(Z(t))}}}))((function(e){var t,a=Object(Oe.a)(),s=a.register,o=a.handleSubmit,c=Object(r.useRef)(null),l=Object(f.e)(),i=Object(r.useState)(e.thread?e.thread.title:""),d=Object(p.a)(i,2),m=d[0],h=d[1],y=function(){var t=Object(_.a)(u.a.mark((function t(a){var r,n,s,o,c,i,_,d,m,p;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.audio){t.next=26;break}if(r=a.threadTitle,n=ie(),s=e.geolocation){t.next=6;break}return t.abrupt("return",console.log("Location is not available!"));case 6:if(o="",e.thread){t.next=15;break}return c={is_active:!0,title:r,user_id:"Z1aO565FJD1ZmaOqI9Mi",color_code:"Y",bookmarked_by_users:[],location:s,timestamp:n},t.next=11,e.createThread(c);case 11:i=t.sent,o=i.id,t.next=16;break;case 15:o=e.thread.id;case 16:return _={is_active:!0,thread_id:o,user_id:"Z1aO565FJD1ZmaOqI9Mi",voice_url:e.audio.audioUrl,liked_by_users:[],location:s,timestamp:n},t.next=19,e.createVoice(_);case 19:d=t.sent,m=d.thread_id,e.setGeolocation(),p="".concat(x,"/").concat(m),l.push(p),t.next=27;break;case 26:console.log("No voice has been recorded yet!");case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){c.current&&!e.thread&&c.current.focus()}),[]),n.a.createElement("div",{className:je.a["voice-form"]},n.a.createElement("div",{className:je.a.container},n.a.createElement("div",{className:je.a.handle}),n.a.createElement("form",{id:"voice-form",className:je.a.form,onSubmit:o(y)},n.a.createElement("ul",{className:je.a.fields},e.thread?null:n.a.createElement("li",{className:je.a.field},n.a.createElement("label",{className:je.a.label,htmlFor:"channel"},"\u9078\u64c7\u7248\u5340\uff1a"),n.a.createElement("select",{className:je.a.select,name:"channel",ref:s},n.a.createElement("option",{className:je.a.option,value:"\u5439\u6c34\u53f0"},"\u5439\u6c34\u53f0"))),n.a.createElement("li",{className:je.a.field},n.a.createElement("label",{className:je.a.label,htmlFor:"thread"},"".concat(e.thread?"\u56de\u61c9":"\u65b0\u8cbc","\u984c\u76ee\uff1a")),n.a.createElement("input",{className:je.a.input,name:"threadTitle",ref:function(e){s(e,{required:!0}),c.current=e},type:"text",value:m,onChange:function(e){return h(e.target.value)},readOnly:Boolean(e.thread)}))),n.a.createElement(Te,{audioUrl:null===(t=e.audio)||void 0===t?void 0:t.audioUrl}),n.a.createElement("div",{className:je.a.control},n.a.createElement("div",{className:je.a.buttons},n.a.createElement(C.a,{className:je.a.new,"aria-label":"new"},n.a.createElement(ze.a,null)),n.a.createElement(C.a,{className:je.a.music,"aria-label":"music"},n.a.createElement(ne.b,null))),n.a.createElement(C.a,{className:je.a.submit,"aria-label":"submit",type:"submit",form:"voice-form"},n.a.createElement(ne.a,null))))))})),Ne=a(83),Pe=a.n(Ne),De=Object(c.c)((function(e){return{drawerState:e.components.drawerState,activeThread:e.threads.activeThread,showRecordButton:e.components.showRecordButton,isRecording:e.audios.isRecording}}),(function(e){return{}}))((function(e){return n.a.createElement("div",{className:Pe.a.main},n.a.createElement(M,null),e.showRecordButton&&n.a.createElement($,null),n.a.createElement(re,{side:"left"},n.a.createElement("p",null,"drawer contents")),n.a.createElement(re,{side:"bottom",disableSwipe:null===e.activeThread},e.isRecording?n.a.createElement(xe,null):n.a.createElement(f.c,null,n.a.createElement(f.a,{path:"".concat(x,"/threads/new"),component:Ae}),n.a.createElement(f.a,{path:"".concat(x,"/threads/:threadId/new"),children:n.a.createElement(Ae,{thread:e.activeThread})}),n.a.createElement(f.a,{path:"".concat(x,"/"),component:ve}))))}));var Le=a(84),ke=a.n(Le),Ce=Object(c.c)((function(e){return{}}),(function(e){return{loadThreads:function(){return e(function(){var e=Object(_.a)(u.a.mark((function e(t){var a,r,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/threads"),{method:"GET"});case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n=r.isSuccess,s=r.data,t(n?{type:"LOAD_THREADS",threads:s}:g("LOAD_THREADS_FAILED",s));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},loadUsers:function(){return e(function(){var e=Object(_.a)(u.a.mark((function e(t){var a,r,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/users"),{method:"GET"});case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n=r.isSuccess,s=r.data,t(n?{type:"LOAD_USERS",users:s}:{type:"LOAD_USERS_FAILED",msg:s});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},setRecorder:function(t){return e(function(e){return{type:"SET_RECORDER",recorder:e}}(t))}}}))((function(e){var t=function(){var t=Object(_.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(){var e=Object(_.a)(u.a.mark((function e(t){var a,r,n,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0});case 2:a=e.sent,r=new MediaRecorder(a),s=function(e){n=e.data},r.addEventListener("dataavailable",s),o=function(){return new Promise((function(e){r.addEventListener("stop",(function(){var t=new Blob([n]),a=URL.createObjectURL(t);e({audioBlob:t,audioUrl:a})})),r.stop()}))},t({start:function(){return r.start()},stop:o});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:a=t.sent,e.setRecorder(a);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.loadThreads(),e.loadUsers(),t(),n.a.createElement("div",{className:ke.a.app},n.a.createElement(D,null),n.a.createElement(De,null))})),Ie=a(36),Be=a(34),Ue=a(74),Ge=a(85),Fe=a(86),He=a.n(Fe),Me={threads:[],activeThread:null,threadPlaying:!1},Ve={voices:[]},We={users:[]},Ze={recorder:void 0,audio:void 0,isRecording:!1},Je={geolocation:void 0},Ye={channel:"\u5439\u6c34\u53f0"},qe={showRecordButton:!0,showPlayList:!1,drawerState:{top:!1,right:!1,bottom:!1,left:!1},embeddedRecordButton:!1};var Qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ie.d,Ke=Object(Be.a)(),Xe=Object(Ie.c)({threads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_THREADS":var a=t.threads;return Object(m.a)(Object(m.a)({},e),{},{threads:a});case"CREATE_THREAD":var r=t.newThread,n=e.threads.concat(r);return Object(m.a)(Object(m.a)({},e),{},{threads:n});case"SET_ACTIVE_THREAD":var s=t.activeThread;return Object(m.a)(Object(m.a)({},e),{},{activeThread:s});case"TOGGLE_THREAD_PLAYING":var o=!e.threadPlaying;return Object(m.a)(Object(m.a)({},e),{},{threadPlaying:o});case"STOP_PLAYING_THREAD":return Object(m.a)(Object(m.a)({},e),{},{threadPlaying:!1});default:return e}},voices:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_VOICES":var a=t.voices;return Object(m.a)(Object(m.a)({},e),{},{voices:a});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_USERS":var a=t.users;return Object(m.a)(Object(m.a)({},e),{},{users:a});default:return e}},audios:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RECORDER":var a=t.recorder;return Object(m.a)(Object(m.a)({},e),{},{recorder:a});case"SET_AUDIO":var r=t.audio;return Object(m.a)(Object(m.a)({},e),{},{audio:r});case"SET_IS_RECORDING_STATE":var n=t.isRecording;return Object(m.a)(Object(m.a)({},e),{},{isRecording:n});default:return e}},geolocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GEOLOCATION":var a=t.geolocation;return Object(m.a)(Object(m.a)({},e),{},{geolocation:a});default:return e}},channels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHANNEL":var a=t.channel;return Object(m.a)(Object(m.a)({},e),{},{channel:a});default:return e}},components:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SHOW_RECORD_BUTTON_STATE":var a=t.showRecordButton;return Object(m.a)(Object(m.a)({},e),{},{showRecordButton:a});case"SET_SHOW_PLAY_LIST_STATE":var r=t.showPlayList;return Object(m.a)(Object(m.a)({},e),{},{showPlayList:r});case"SET_DRAWER_STATE":var n=t.side,s=t.open,o=e.drawerState;return Object(m.a)(Object(m.a)({},e),{},{drawerState:Object(m.a)(Object(m.a)({},o),{},Object(d.a)({},n,s))});case"EMBED_RECORD_BUTTON":var c=t.embeddedRecordButton;return Object(m.a)(Object(m.a)({},e),{},{embeddedRecordButton:c});default:return e}},router:Object(l.b)(Ke)}),$e=Object(Ie.e)(Xe,Qe(Object(Ie.a)(He.a),Object(Ie.a)(Ge.a),Object(Ie.a)(Object(Ue.a)(Ke))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(115);o.a.render(n.a.createElement(c.a,{store:$e},n.a.createElement(l.a,{history:Ke},n.a.createElement(Ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__ijZIq","text-size-small":"styles_text-size-small__1lNhe","text-size-normal":"styles_text-size-normal__3tbWC","text-size-large":"styles_text-size-large__jaA8s","text-size-larger":"styles_text-size-larger__3cF7A","text-bold":"styles_text-bold__38hor","text-uppercase":"styles_text-uppercase__xPWzx","voice-form":"styles_voice-form__3gLiu",container:"styles_container__zAavQ",handle:"styles_handle__ZPzTV",form:"styles_form__3CGWh",fields:"styles_fields__1ASB4",field:"styles_field__2_bzl",label:"styles_label__lRzte",select:"styles_select__3NPIu",input:"styles_input__k9ZVB",control:"styles_control__kds9w",buttons:"styles_buttons__3vh4D",new:"styles_new__v6Lj7",music:"styles_music__3MWRH",submit:"styles_submit__3y_fb"}},30:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__9ID4P","text-size-small":"styles_text-size-small__EuMrL","text-size-normal":"styles_text-size-normal__1OTia","text-size-large":"styles_text-size-large__3vK1o","text-size-larger":"styles_text-size-larger__28WhF","text-bold":"styles_text-bold__lZla8","text-uppercase":"styles_text-uppercase__bPdLp","thread-panel":"styles_thread-panel__1kB56",container:"styles_container__1lcW7",handle:"styles_handle__226hH",contents:"styles_contents__33G3C",title:"styles_title__24vsv",info:"styles_info__3NRDf",control:"styles_control__252yp","control-star":"styles_control-star__1c7pK","control-share":"styles_control-share__Pds8-","thread-previous":"styles_thread-previous__3lb-e","thread-next":"styles_thread-next__1cawo","thread-play":"styles_thread-play__2CtbI"}},32:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__2Z2H_","text-size-small":"styles_text-size-small__IjZsk","text-size-normal":"styles_text-size-normal__18x1M","text-size-large":"styles_text-size-large__2qn5H","text-size-larger":"styles_text-size-larger__1JRyu","text-bold":"styles_text-bold__tZ_OT","text-uppercase":"styles_text-uppercase___vsP3","head-nav":"styles_head-nav__2AjrA","nav-menu":"styles_nav-menu__2jGZn","nav-search":"styles_nav-search__1ar0n",switch:"styles_switch__E7v1U",stage:"styles_stage__22-Cl","stage-previous":"styles_stage-previous__2AVMx","stage-next":"styles_stage-next__3YrgJ"}},37:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__3CPzR","text-size-small":"styles_text-size-small__39sOw","text-size-normal":"styles_text-size-normal__39O6I","text-size-large":"styles_text-size-large__kZVIY","text-size-larger":"styles_text-size-larger__3d6xL","text-bold":"styles_text-bold__2tYsD","text-uppercase":"styles_text-uppercase__ESUnP","voice-info":"styles_voice-info__2Dqfq",profile:"styles_profile__3TdcI",like:"styles_like__ZTv0n",badge:"styles_badge__1ktpI",info:"styles_info__9gAry",date:"styles_date__1qg4x",user:"styles_user__3DtHt"}},50:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__19mQ2","text-size-small":"styles_text-size-small__3PFkO","text-size-normal":"styles_text-size-normal__30l_J","text-size-large":"styles_text-size-large__2YLkK","text-size-larger":"styles_text-size-larger__1CCYy","text-bold":"styles_text-bold__1ke-k","text-uppercase":"styles_text-uppercase__1FLP5",map:"styles_map__3B7Q2","tile-layer":"styles_tile-layer__1vgma",thread:"styles_thread__32bcF","new-thread":"styles_new-thread__1rYZt",popup:"styles_popup__3EyS_"}},51:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__dLVMu","text-size-small":"styles_text-size-small__1T3RC","text-size-normal":"styles_text-size-normal__1JyEr","text-size-large":"styles_text-size-large__1Sx-k","text-size-larger":"styles_text-size-larger__2dcYQ","text-bold":"styles_text-bold__33hvE","text-uppercase":"styles_text-uppercase__XCFEW","voice-player":"styles_voice-player__2kZum",control:"styles_control__2-hO5",play:"styles_play__3vUqD",delete:"styles_delete__X0VW1","wave-form":"styles_wave-form__1A4Vl"}},64:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__289PS","text-size-small":"styles_text-size-small__3A4cv","text-size-normal":"styles_text-size-normal__3kkF7","text-size-large":"styles_text-size-large__3twJV","text-size-larger":"styles_text-size-larger__3S1MH","text-bold":"styles_text-bold__3S_vo","text-uppercase":"styles_text-uppercase__38Dsw","record-button":"styles_record-button__2zE4x",floating:"styles_floating__1K0uC",button:"styles_button__2Lhpx"}},65:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__QdQq8","text-size-small":"styles_text-size-small__1ntVF","text-size-normal":"styles_text-size-normal__1QG0Q","text-size-large":"styles_text-size-large__60MzJ","text-size-larger":"styles_text-size-larger__1NDP3","text-bold":"styles_text-bold__2aWdQ","text-uppercase":"styles_text-uppercase__2HQOU","play-list":"styles_play-list__xoJ8L",open:"styles_open__24lEQ",voices:"styles_voices__32pWd",voice:"styles_voice__lsVyV"}},70:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__Bb7dO","text-size-small":"styles_text-size-small__29iPd","text-size-normal":"styles_text-size-normal__1FFJy","text-size-large":"styles_text-size-large__2NFd2","text-size-larger":"styles_text-size-larger___t97M","text-bold":"styles_text-bold__1Etxo","text-uppercase":"styles_text-uppercase__1akFl",drawer:"styles_drawer__2KdUm","drawer-horizontal":"styles_drawer-horizontal__39eUO"}},71:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__2vnjx","text-size-small":"styles_text-size-small__3BLTI","text-size-normal":"styles_text-size-normal__3qJii","text-size-large":"styles_text-size-large__1ze8J","text-size-larger":"styles_text-size-larger__2z5Bx","text-bold":"styles_text-bold__1qn8k","text-uppercase":"styles_text-uppercase__2Z6AJ","timer-bar":"styles_timer-bar__1Pml3",timer:"styles_timer__1qpE0"}},83:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__1fi0Z","text-size-small":"styles_text-size-small__PtZps","text-size-normal":"styles_text-size-normal__MAOk3","text-size-large":"styles_text-size-large__2FZ2E","text-size-larger":"styles_text-size-larger__2EDnl","text-bold":"styles_text-bold__37IFA","text-uppercase":"styles_text-uppercase__36vkr",main:"styles_main__3ZYez"}},84:function(e,t,a){e.exports={app:"App_app__2ziFi"}},92:function(e,t,a){e.exports=a(116)}},[[92,1,2]]]);
//# sourceMappingURL=main.5d307dff.chunk.js.map