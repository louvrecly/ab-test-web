(this["webpackJsonpab-test-web"]=this["webpackJsonpab-test-web"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(14),c=a.n(s),o=a(10),l=a(62),i=a(8),u=a.n(i),_=a(11),d=a(12),m=a(7),p=a(16),f=a(31),h=a(29),v=a.n(h),y=Object({NODE_ENV:"production",PUBLIC_URL:"/ab-test-web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_SERVER:"http://localhost:8080",REACT_APP_STADIA_MAP_API_KEY:"dc0409eb-addb-404f-a42a-39867c49e57f",REACT_APP_URL_PREFIX:"/ab-test-web"}),b=y.REACT_APP_API_SERVER,E=y.REACT_APP_STADIA_MAP_API_KEY,x=y.REACT_APP_URL_PREFIX;function O(e){return{type:"CREATE_THREAD",newThread:e}}function g(e,t){return{type:e,msg:t}}function S(e){return{type:"SET_SHOW_RECORD_BUTTON_STATE",showRecordButton:e}}function w(e){return{type:"SET_SHOW_PLAY_LIST_STATE",showPlayList:e}}function T(e,t){return{type:"SET_DRAWER_STATE",side:e,open:t}}function z(e){return{type:"EMBED_RECORD_BUTTON",embeddedRecordButton:e}}function R(e,t){return{type:e,msg:t}}function j(e){return function(){var t=Object(_.a)(u.a.mark((function t(a){var r,n,s,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/voices?thread_id=").concat(e),{method:"GET"});case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,s=n.isSuccess,c=n.data,a(s?{type:"LOAD_VOICES",voices:c}:R("LOAD_VOICES_FAILED",c));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var A="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=".concat(E),N={center:[22.2988,114.1722],zoom:12,zoomSnap:.1,zoomDelta:.5,zoomControl:!1,doubleClickZoom:!1},P=a(49),D=a.n(P),L=Object(o.c)((function(e){return{activeThread:e.threads.activeThread,threads:e.threads.threads,drawerState:e.components.drawerState,geolocation:e.geolocation.geolocation}}),(function(e){return{setActiveThread:function(t){return e({type:"SET_ACTIVE_THREAD",activeThread:t})},loadVoices:function(t){return e(j(t))},stopPlayingThread:function(){return e({type:"STOP_PLAYING_THREAD"})},setDrawerState:function(t,a){return e(T(t,a))},setShowRecordButtonState:function(t){return e(S(t))},setShowPlayListState:function(t){return e(w(t))}}}))((function(e){var t=e.activeThread,a=e.threads,s=e.geolocation,c=e.setActiveThread,o=e.loadVoices,l=e.stopPlayingThread,i=e.setDrawerState,u=e.setShowRecordButtonState,_=e.setShowPlayListState,h=Object(r.useRef)(null),y=Object(r.useRef)(null),b=Object(r.useRef)(null),E=Object(r.useRef)(null),O=Object(r.useState)({}),g=Object(p.a)(O,2),S=g[0],w=g[1],T=Object(f.e)(),z=Object(f.g)("".concat(x,"/threads/:threadId"));return Object(r.useEffect)((function(){var e=v.a.DomUtil.get("map");e&&(e._leaflet_id=null);var t=v.a.tileLayer(A,{className:D.a["tile-layer"],attribution:'\n  &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>,\n  &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>\n  &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>\n  contributors\n'}),a=Object(m.a)(Object(m.a)({},N),{},{layers:[t]});h.current=v.a.map("map",a),y.current=v.a.layerGroup().addTo(h.current),b.current=v.a.layerGroup().addTo(h.current)}),[]),Object(r.useEffect)((function(){y.current.clearLayers();var e=v.a.divIcon({className:D.a.thread});a.forEach((function(t){var a=v.a.latLng([t.location._latitude,t.location._longitude]),r=v.a.popup({className:D.a.popup,closeButton:!1,pane:"shadowPane"}),n=v.a.marker(a,{icon:e}).bindPopup(r).on("popupopen",(function(){h.current.flyTo(a),_(!1),u(!1),i("bottom",!0);var e="".concat(x,"/threads/").concat(t.id);T.push(e)})).on("popupclose",(function(){E.current=null,u(!0),i("bottom",!1);var e=x;T.push(e)})).addTo(y.current);w((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},t.id,n))}))}))}),[a,T,c,i,u,_]),Object(r.useEffect)((function(){if(s){var e=v.a.divIcon({className:D.a["new-thread"]}),t=v.a.latLng([s._latitude,s._longitude]);E.current=v.a.marker(t,{icon:e}).addTo(b.current),h.current.flyTo(t)}else b.current&&b.current.clearLayers()}),[s]),Object(r.useEffect)((function(){if(z){var e=z.params.threadId,t=a.find((function(t){return t.id===e}));l(),t?(c(t),o(t.id)):c(null)}else c(null)}),[z,a,l,c,o]),Object(r.useEffect)((function(){t&&(E.current=S[t.id],E.current.isPopupOpen()||E.current.openPopup())}),[t,S]),n.a.createElement("div",{id:"map",className:D.a.map})})),k=a(137),B=a(140),C=a(141),I=a(142),U=a(117),G=a(60),F=a(43),V=a(32),H=a.n(V),M=Object(o.c)((function(e){return{channel:e.channels.channel,drawerState:e.components.drawerState}}),(function(e){return{setDrawerState:function(t,a){return e(T(t,a))},setShowRecordButtonState:function(t){return e(S(t))}}}))((function(e){return n.a.createElement(k.a,{className:H.a["head-nav"],position:"absolute"},n.a.createElement(B.a,null,n.a.createElement(C.a,{className:"".concat(H.a.menu," ").concat(H.a["nav-menu"]),edge:"start",color:"inherit","aria-label":"menu",onClick:function(){var t=!e.drawerState.left;e.setShowRecordButtonState(!t),e.setDrawerState("left",t)}},n.a.createElement(F.c,null)),n.a.createElement(I.a,{className:H.a.switch},n.a.createElement(U.a,{className:"".concat(H.a.prev," ").concat(H.a["stage-previous"]),"aria-label":"previous"},n.a.createElement(F.a,null)),n.a.createElement(U.a,{className:H.a.stage,color:"inherit"},e.channel),n.a.createElement(U.a,{className:"".concat(H.a.next," ").concat(H.a["stage-next"]),"aria-label":"next"},n.a.createElement(F.b,null))),n.a.createElement(C.a,{className:"".concat(H.a.search," ").concat(H.a["nav-search"]),edge:"end",color:"inherit","aria-label":"search"},n.a.createElement(G.a,null))))})),W=a(9);function Z(e){return{type:"SET_AUDIO",audio:e}}function J(e){return{type:"SET_GEOLOCATION",geolocation:e}}function Y(){var e=window.navigator.geolocation;if(e){return new Promise((function(t,a){e.getCurrentPosition(t,a)}))}console.log("Geolocation is not supported!")}function q(e){var t=e.coords;return{_latitude:t.latitude,_longitude:t.longitude}}function Q(){return K.apply(this,arguments)}function K(){return(K=Object(_.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:return t=e.sent,e.abrupt("return",t?q(t):null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=a(64),$=a.n(X),ee=Object(o.c)((function(e){return{recorder:e.audios.recorder,isRecording:e.audios.isRecording,activeThread:e.threads.activeThread,showRecordButton:e.components.showRecordButton,embeddedRecordButton:e.components.embeddedRecordButton}}),(function(e){return{setAudio:function(t){return e(Z(t))},setIsRecordingState:function(t){return e(function(e){return{type:"SET_IS_RECORDING_STATE",isRecording:e}}(t))},setDrawerState:function(t,a){return e(T(t,a))},setShowRecordButtonState:function(t){return e(S(t))},embedRecordButton:function(t){return e(z(t))},setGeolocation:function(t){return e(J(t))}}}))((function(e){var t,a=Object(r.useState)(0),s=Object(p.a)(a,2),c=s[0],o=s[1],l=Object(f.e)(),i=Object(f.f)(),m=function(){var t=Object(_.a)(u.a.mark((function t(){var a,r,n,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isRecording){t.next=15;break}return t.next=3,null===(a=e.recorder)||void 0===a?void 0:a.stop();case 3:return r=t.sent,e.setAudio(r),e.setIsRecordingState(!1),n="".concat(e.activeThread?i.pathname:"".concat(x,"/threads"),"/new"),l.push(n),e.setShowRecordButtonState(!1),t.next=11,Q();case 11:s=t.sent,e.setGeolocation(s),t.next=16;break;case 15:console.log("no audio is being recorded");case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){return e.isRecording?m():e.recorder?function(){if(e.recorder&&!e.isRecording){e.setGeolocation(null);var t=i.pathname.replace("/new","");l.push(t),e.setDrawerState("bottom",!0),e.recorder.start(),e.setIsRecordingState(!0),e.embedRecordButton(!1)}else console.log("recorder is not ready!")}():void 0};return n.a.createElement("div",{className:Object(W.a)((t={},Object(d.a)(t,$.a["record-button"],!0),Object(d.a)(t,$.a.floating,!e.embeddedRecordButton),t))},n.a.createElement(C.a,{id:"record",className:$.a.button,"aria-label":"record",onDoubleClick:h,onTouchStart:function(e){e.preventDefault();var t=(new Date).getTime();if(o(t),function(e){return e-c<600}(t))return h()},onContextMenu:function(e){return e.preventDefault()}},e.embeddedRecordButton?"\u958b\u59cb\u9304":"9up"))})),te=a(143),ae=a(70),re=a.n(ae),ne=Object(o.c)((function(e){return{drawerState:e.components.drawerState}}),(function(e){return{setDrawerState:function(t,a){return e(T(t,a))},setShowRecordButtonState:function(t){return e(S(t))},embedRecordButton:function(t){return e(z(t))},setGeolocation:function(t){return e(J(t))}}}))((function(e){var t,a=e.side,s=e.drawerState,c=e.disableSwipe,o=e.children,l=e.setDrawerState,i=e.setShowRecordButtonState,u=e.embedRecordButton,_=e.setGeolocation,m=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&(i(!t),l(e,t),u(t))}};return Object(r.useEffect)((function(){s.bottom||_(null)}),[s.bottom,_]),n.a.createElement(te.a,{anchor:a,open:s[a],disableSwipeToOpen:c,onClose:m(a,!1),onOpen:m(a,!0),className:Object(W.a)((t={},Object(d.a)(t,re.a.drawer,!0),Object(d.a)(t,re.a["drawer-horizontal"],"left"===a||"right"===a),t))},o)})),se=a(28),ce=a(79),oe=a(80),le=a.n(oe);function ie(e){var t=e._seconds,a=e._nanoseconds,r=new ce.firestore.Timestamp(t,a);return le()(r.toDate()).fromNow()}function ue(){var e=Date.now(),t=Math.floor(e/1e3);return{_seconds:t,_nanoseconds:1e6*(e-1e3*t)}}var _e=a(36),de=a.n(_e),me=Object(o.c)((function(e){return{users:e.users.users}}),(function(e){return{}}))((function(e){var t,a,s,c=Object(r.useState)(!1),o=Object(p.a)(c,2),l=o[0],i=o[1],u=document.createElement("audio");u.src=e.voice.voice_url;var _=Object(r.useRef)(u);return n.a.createElement("div",{className:de.a["voice-info"]},n.a.createElement(C.a,{className:de.a.profile,"aria-label":"profile"},n.a.createElement(se.g,null),n.a.createElement("span",{className:de.a.badge},null===(t=e.users.find((function(t){return t.id===e.voice.user_id.split("/")[1]})))||void 0===t||null===(a=t.followers)||void 0===a?void 0:a.length,"+")),n.a.createElement("div",{className:de.a.info},n.a.createElement("p",{className:de.a.date},ie(e.voice.timestamp)),n.a.createElement("h3",{className:de.a.user,onClick:function(){l?_.current.pause():_.current.play(),i((function(e){return!e}))}},null===(s=e.users.find((function(t){return t.id===e.voice.user_id.split("/")[1]})))||void 0===s?void 0:s.username)),n.a.createElement(C.a,{className:de.a.like,"aria-label":"like"},n.a.createElement(se.e,null),n.a.createElement("span",{className:de.a.badge},e.voice.liked_by_users.length,"+")))})),pe=a(65),fe=a.n(pe),he=Object(o.c)((function(e){return{voices:e.voices.voices}}),(function(e){return{}}))((function(e){var t;return n.a.createElement("div",{className:Object(W.a)((t={},Object(d.a)(t,fe.a["play-list"],!0),Object(d.a)(t,fe.a.open,e.open),t))},n.a.createElement("ul",{className:fe.a.voices},e.voices.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(me,{voice:e}))}))))})),ve=a(30),ye=a.n(ve),be=Object(o.c)((function(e){return{activeThread:e.threads.activeThread,users:e.users.users,voices:e.voices.voices,threadPlaying:e.threads.threadPlaying,showPlayList:e.components.showPlayList}}),(function(e){return{toggleThreadPlaying:function(){return e({type:"TOGGLE_THREAD_PLAYING"})},setShowPlayListState:function(t){return e(w(t))},setShowRecordButtonState:function(t){return e(S(t))}}}))((function(e){var t,a=function(){var t=!e.showPlayList;e.setShowPlayListState(t),e.setShowRecordButtonState(t)};return n.a.createElement("div",{className:ye.a["thread-panel"]},e.activeThread&&n.a.createElement("div",{className:ye.a.container},n.a.createElement("div",{className:ye.a.handle,onClick:a}),n.a.createElement("div",{className:ye.a.contents},n.a.createElement("h2",{className:ye.a.title,onClick:a},e.activeThread.title),n.a.createElement("p",{className:ye.a.info},null===(t=e.users.find((function(t){var a;return t.id===(null===(a=e.activeThread)||void 0===a?void 0:a.user_id).split("/")[1]})))||void 0===t?void 0:t.username,"\u30fb",ie(e.activeThread.timestamp)),n.a.createElement("div",{className:ye.a.control},n.a.createElement(C.a,{className:ye.a["control-star"],color:"inherit","aria-label":"star"},n.a.createElement(se.f,null)),n.a.createElement(C.a,{className:ye.a["thread-previous"],color:"inherit","aria-label":"previous"},n.a.createElement(F.e,null)),n.a.createElement(C.a,{className:ye.a["thread-play"],color:"inherit","aria-label":"play",onClick:function(){e.setShowPlayListState(!0),e.setShowRecordButtonState(!0),e.toggleThreadPlaying()}},e.threadPlaying?n.a.createElement(se.c,null):n.a.createElement(se.d,null)),n.a.createElement(C.a,{className:ye.a["thread-next"],color:"inherit","aria-label":"next"},n.a.createElement(F.d,null)),n.a.createElement(C.a,{className:ye.a["control-share"],color:"inherit","aria-label":"share"},n.a.createElement(G.b,null))),n.a.createElement(he,{open:e.showPlayList}))))})),Ee=a(71),xe=a.n(Ee),Oe=function(){return n.a.createElement("div",{className:xe.a["timer-bar"]},n.a.createElement("h2",{className:xe.a.timer},"00:00"))},ge=a(86),Se=a(81),we=a(50),Te=a.n(we),ze=Object(o.c)((function(e){return{}}),(function(e){return{setAudio:function(t){return e(Z(t))},setShowRecordButtonState:function(t){return e(S(t))},embedRecordButton:function(t){return e(z(t))}}}))((function(e){var t=Object(r.useState)(!1),a=Object(p.a)(t,2),s=a[0],c=a[1],o=new Audio(e.audioUrl);o.addEventListener("ended",(function(){return c(!1)}));return n.a.createElement("div",{className:Te.a["voice-player"]},e.audioUrl?n.a.createElement("div",{className:Te.a.control},n.a.createElement(C.a,{className:Te.a.play,"aria-label":"play",onClick:function(e){s?o.pause():o.play(),c(!s)}},s?n.a.createElement(se.c,null):n.a.createElement(se.d,null)),n.a.createElement("div",{className:Te.a["wave-form"]},"WaveForm"),n.a.createElement(C.a,{className:Te.a.delete,"aria-label":"delete",onClick:function(){e.setAudio(null),e.embedRecordButton(!0),e.setShowRecordButtonState(!0)}},n.a.createElement(Se.a,null))):n.a.createElement(ee,null))})),Re=a(82);var je=a(19),Ae=a.n(je),Ne=Object(o.c)((function(e){return{audio:e.audios.audio,geolocation:e.geolocation.geolocation}}),(function(e){return{createThread:function(t){return e(function(e){return function(){var t=Object(_.a)(u.a.mark((function t(a){var r,n,s,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(b,"/threads"),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)});case 2:return r=t.sent,t.next=5,r.json();case 5:if(n=t.sent,s=n.isSuccess,c=n.data,!s){t.next=13;break}return a(O(c)),t.abrupt("return",c);case 13:return a(g("CREATE_THREAD_FAILED",c)),t.abrupt("return",null);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},createVoice:function(t,a){return e(function(e,t){var a=JSON.stringify(e),r=new FormData;return r.append("voice_string",a),r.append("audio_blob",t),function(){var e=Object(_.a)(u.a.mark((function e(t){var a,n,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/voices"),{method:"POST",body:r});case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,s=n.isSuccess,c=n.data,!s){e.next=12;break}return e.abrupt("return",c);case 12:t(R("CREATE_VOICE_FAILED",c));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(t,a))},setGeolocation:function(t){return e(J(t))},loadVoices:function(t){return e(j(t))},setShowRecordButtonState:function(t){return e(S(t))}}}))((function(e){var t,a=Object(ge.a)(),s=a.register,c=a.handleSubmit,o=Object(r.useRef)(null),l=Object(f.e)(),i=Object(r.useState)(e.thread?e.thread.title:""),d=Object(p.a)(i,2),m=d[0],h=d[1],v=function(){var t=Object(_.a)(u.a.mark((function t(a){var r,n,s,c,o,i,_,d,m,p,f,h,v;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.audio){t.next=29;break}if(r=a.threadTitle,n=ue(),s=e.geolocation){t.next=6;break}return t.abrupt("return",console.log("Location is not available!"));case 6:if(c="",e.thread){t.next=15;break}return o={is_active:!0,title:r,user_id:"Z1aO565FJD1ZmaOqI9Mi",color_code:"Y",bookmarked_by_users:[],location:s,timestamp:n},t.next=11,e.createThread(o);case 11:i=t.sent,c=i.id,t.next=16;break;case 15:c=e.thread.id;case 16:return _=e.audio,d=_.audioUrl,m=_.audioBlob,p={is_active:!0,thread_id:c,user_id:"Z1aO565FJD1ZmaOqI9Mi",voice_url:d,liked_by_users:[],location:s,timestamp:n},t.next=20,e.createVoice(p,m);case 20:f=t.sent,h=f.thread_id,e.setGeolocation(null),v="".concat(x,"/").concat(h),l.push(v),e.loadVoices(c),e.setShowRecordButtonState(!0),t.next=30;break;case 29:console.log("No voice has been recorded yet!");case 30:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){o.current&&!e.thread&&o.current.focus()}),[e.thread]),n.a.createElement("div",{className:Ae.a["voice-form"]},n.a.createElement("div",{className:Ae.a.container},n.a.createElement("div",{className:Ae.a.handle}),n.a.createElement("form",{id:"voice-form",className:Ae.a.form,onSubmit:c(v)},n.a.createElement("ul",{className:Ae.a.fields},e.thread?null:n.a.createElement("li",{className:Ae.a.field},n.a.createElement("label",{className:Ae.a.label,htmlFor:"channel"},"\u9078\u64c7\u7248\u5340\uff1a"),n.a.createElement("select",{className:Ae.a.select,name:"channel",ref:s},n.a.createElement("option",{className:Ae.a.option,value:"\u5439\u6c34\u53f0"},"\u5439\u6c34\u53f0"))),n.a.createElement("li",{className:Ae.a.field},n.a.createElement("label",{className:Ae.a.label,htmlFor:"thread"},"".concat(e.thread?"\u56de\u61c9":"\u65b0\u8cbc","\u984c\u76ee\uff1a")),n.a.createElement("input",{className:Ae.a.input,name:"threadTitle",ref:function(e){s(e,{required:!0}),o.current=e},type:"text",value:m,onChange:function(e){return h(e.target.value)},readOnly:Boolean(e.thread)}))),n.a.createElement(ze,{audioUrl:null===(t=e.audio)||void 0===t?void 0:t.audioUrl}),n.a.createElement("div",{className:Ae.a.control},n.a.createElement("div",{className:Ae.a.buttons},n.a.createElement(C.a,{className:Ae.a.new,"aria-label":"new"},n.a.createElement(Re.a,null)),n.a.createElement(C.a,{className:Ae.a.music,"aria-label":"music"},n.a.createElement(se.b,null))),n.a.createElement(C.a,{className:Ae.a.submit,"aria-label":"submit",type:"submit",form:"voice-form"},n.a.createElement(se.a,null))))))})),Pe=a(83),De=a.n(Pe),Le=Object(o.c)((function(e){return{drawerState:e.components.drawerState,activeThread:e.threads.activeThread,showRecordButton:e.components.showRecordButton,isRecording:e.audios.isRecording}}),(function(e){return{}}))((function(e){return n.a.createElement("div",{className:De.a.main},n.a.createElement(M,null),e.showRecordButton&&n.a.createElement(ee,null),n.a.createElement(ne,{side:"left"},n.a.createElement("p",null,"drawer contents")),n.a.createElement(ne,{side:"bottom",disableSwipe:null===e.activeThread},e.isRecording?n.a.createElement(Oe,null):n.a.createElement(f.c,null,n.a.createElement(f.a,{path:"".concat(x,"/threads/new"),children:n.a.createElement(Ne,{thread:e.activeThread})}),n.a.createElement(f.a,{path:"".concat(x,"/threads/:threadId/new"),children:n.a.createElement(Ne,{thread:e.activeThread})}),n.a.createElement(f.a,{path:"".concat(x,"/"),component:be}))))}));var ke=a(84),Be=a.n(ke),Ce=Object(o.c)((function(e){return{}}),(function(e){return{loadThreads:function(){return e(function(){var e=Object(_.a)(u.a.mark((function e(t){var a,r,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/threads"),{method:"GET"});case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n=r.isSuccess,s=r.data,t(n?{type:"LOAD_THREADS",threads:s}:g("LOAD_THREADS_FAILED",s));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},loadUsers:function(){return e(function(){var e=Object(_.a)(u.a.mark((function e(t){var a,r,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/users"),{method:"GET"});case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n=r.isSuccess,s=r.data,t(n?{type:"LOAD_USERS",users:s}:{type:"LOAD_USERS_FAILED",msg:s});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},setRecorder:function(t){return e(function(e){return{type:"SET_RECORDER",recorder:e}}(t))}}}))((function(e){var t=function(){var t=Object(_.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(){var e=Object(_.a)(u.a.mark((function e(t){var a,r,n,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0});case 2:a=e.sent,r=new MediaRecorder(a),s=function(e){n=e.data},r.addEventListener("dataavailable",s),c=function(){return new Promise((function(e){r.addEventListener("stop",(function(){var t=new Blob([n]),a=URL.createObjectURL(t);e({audioBlob:t,audioUrl:a})})),r.stop()}))},t({start:function(){return r.start()},stop:c});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:a=t.sent,e.setRecorder(a);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.loadThreads(),e.loadUsers(),t(),n.a.createElement("div",{className:Be.a.app},n.a.createElement(L,null),n.a.createElement(Le,null))})),Ie=a(39),Ue=a(34),Ge=a(74),Fe=a(85),Ve={threads:[],activeThread:null,threadPlaying:!1},He={voices:[]},Me={users:[]},We={recorder:null,audio:null,isRecording:!1},Ze={geolocation:null},Je={channel:"\u5439\u6c34\u53f0"},Ye={showRecordButton:!0,showPlayList:!1,drawerState:{top:!1,right:!1,bottom:!1,left:!1},embeddedRecordButton:!1};var qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ie.d,Qe=Object(Ue.a)(),Ke=Object(Ie.c)({threads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_THREADS":var a=t.threads;return Object(m.a)(Object(m.a)({},e),{},{threads:a});case"CREATE_THREAD":var r=t.newThread,n=e.threads.concat(r);return Object(m.a)(Object(m.a)({},e),{},{threads:n});case"SET_ACTIVE_THREAD":var s=t.activeThread;return Object(m.a)(Object(m.a)({},e),{},{activeThread:s});case"TOGGLE_THREAD_PLAYING":var c=!e.threadPlaying;return Object(m.a)(Object(m.a)({},e),{},{threadPlaying:c});case"STOP_PLAYING_THREAD":return Object(m.a)(Object(m.a)({},e),{},{threadPlaying:!1});default:return e}},voices:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_VOICES":var a=t.voices;return Object(m.a)(Object(m.a)({},e),{},{voices:a});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_USERS":var a=t.users;return Object(m.a)(Object(m.a)({},e),{},{users:a});default:return e}},audios:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RECORDER":var a=t.recorder;return Object(m.a)(Object(m.a)({},e),{},{recorder:a});case"SET_AUDIO":var r=t.audio;return Object(m.a)(Object(m.a)({},e),{},{audio:r});case"SET_IS_RECORDING_STATE":var n=t.isRecording;return Object(m.a)(Object(m.a)({},e),{},{isRecording:n});default:return e}},geolocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GEOLOCATION":var a=t.geolocation;return Object(m.a)(Object(m.a)({},e),{},{geolocation:a});default:return e}},channels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHANNEL":var a=t.channel;return Object(m.a)(Object(m.a)({},e),{},{channel:a});default:return e}},components:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SHOW_RECORD_BUTTON_STATE":var a=t.showRecordButton;return Object(m.a)(Object(m.a)({},e),{},{showRecordButton:a});case"SET_SHOW_PLAY_LIST_STATE":var r=t.showPlayList;return Object(m.a)(Object(m.a)({},e),{},{showPlayList:r});case"SET_DRAWER_STATE":var n=t.side,s=t.open,c=e.drawerState;return Object(m.a)(Object(m.a)({},e),{},{drawerState:Object(m.a)(Object(m.a)({},c),{},Object(d.a)({},n,s))});case"EMBED_RECORD_BUTTON":var o=t.embeddedRecordButton;return Object(m.a)(Object(m.a)({},e),{},{embeddedRecordButton:o});default:return e}},router:Object(l.b)(Qe)}),Xe=Object(Ie.e)(Ke,qe(Object(Ie.a)(Fe.a),Object(Ie.a)(Object(Ge.a)(Qe))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(114);c.a.render(n.a.createElement(o.a,{store:Xe},n.a.createElement(l.a,{history:Qe},n.a.createElement(Ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__ijZIq","text-size-small":"styles_text-size-small__1lNhe","text-size-normal":"styles_text-size-normal__3tbWC","text-size-large":"styles_text-size-large__jaA8s","text-size-larger":"styles_text-size-larger__3cF7A","text-bold":"styles_text-bold__38hor","text-uppercase":"styles_text-uppercase__xPWzx","voice-form":"styles_voice-form__3gLiu",container:"styles_container__zAavQ",handle:"styles_handle__ZPzTV",form:"styles_form__3CGWh",fields:"styles_fields__1ASB4",field:"styles_field__2_bzl",label:"styles_label__lRzte",select:"styles_select__3NPIu",input:"styles_input__k9ZVB",control:"styles_control__kds9w",buttons:"styles_buttons__3vh4D",new:"styles_new__v6Lj7",music:"styles_music__3MWRH",submit:"styles_submit__3y_fb"}},30:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__9ID4P","text-size-small":"styles_text-size-small__EuMrL","text-size-normal":"styles_text-size-normal__1OTia","text-size-large":"styles_text-size-large__3vK1o","text-size-larger":"styles_text-size-larger__28WhF","text-bold":"styles_text-bold__lZla8","text-uppercase":"styles_text-uppercase__bPdLp","thread-panel":"styles_thread-panel__1kB56",container:"styles_container__1lcW7",handle:"styles_handle__226hH",contents:"styles_contents__33G3C",title:"styles_title__24vsv",info:"styles_info__3NRDf",control:"styles_control__252yp","control-star":"styles_control-star__1c7pK","control-share":"styles_control-share__Pds8-","thread-previous":"styles_thread-previous__3lb-e","thread-next":"styles_thread-next__1cawo","thread-play":"styles_thread-play__2CtbI"}},32:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__2Z2H_","text-size-small":"styles_text-size-small__IjZsk","text-size-normal":"styles_text-size-normal__18x1M","text-size-large":"styles_text-size-large__2qn5H","text-size-larger":"styles_text-size-larger__1JRyu","text-bold":"styles_text-bold__tZ_OT","text-uppercase":"styles_text-uppercase___vsP3","head-nav":"styles_head-nav__2AjrA","nav-menu":"styles_nav-menu__2jGZn","nav-search":"styles_nav-search__1ar0n",switch:"styles_switch__E7v1U",stage:"styles_stage__22-Cl","stage-previous":"styles_stage-previous__2AVMx","stage-next":"styles_stage-next__3YrgJ"}},36:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__3CPzR","text-size-small":"styles_text-size-small__39sOw","text-size-normal":"styles_text-size-normal__39O6I","text-size-large":"styles_text-size-large__kZVIY","text-size-larger":"styles_text-size-larger__3d6xL","text-bold":"styles_text-bold__2tYsD","text-uppercase":"styles_text-uppercase__ESUnP","voice-info":"styles_voice-info__2Dqfq",profile:"styles_profile__3TdcI",like:"styles_like__ZTv0n",badge:"styles_badge__1ktpI",info:"styles_info__9gAry",date:"styles_date__1qg4x",user:"styles_user__3DtHt"}},49:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__19mQ2","text-size-small":"styles_text-size-small__3PFkO","text-size-normal":"styles_text-size-normal__30l_J","text-size-large":"styles_text-size-large__2YLkK","text-size-larger":"styles_text-size-larger__1CCYy","text-bold":"styles_text-bold__1ke-k","text-uppercase":"styles_text-uppercase__1FLP5",map:"styles_map__3B7Q2","tile-layer":"styles_tile-layer__1vgma",thread:"styles_thread__32bcF","new-thread":"styles_new-thread__1rYZt",popup:"styles_popup__3EyS_"}},50:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__dLVMu","text-size-small":"styles_text-size-small__1T3RC","text-size-normal":"styles_text-size-normal__1JyEr","text-size-large":"styles_text-size-large__1Sx-k","text-size-larger":"styles_text-size-larger__2dcYQ","text-bold":"styles_text-bold__33hvE","text-uppercase":"styles_text-uppercase__XCFEW","voice-player":"styles_voice-player__2kZum",control:"styles_control__2-hO5",play:"styles_play__3vUqD",delete:"styles_delete__X0VW1","wave-form":"styles_wave-form__1A4Vl"}},64:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__289PS","text-size-small":"styles_text-size-small__3A4cv","text-size-normal":"styles_text-size-normal__3kkF7","text-size-large":"styles_text-size-large__3twJV","text-size-larger":"styles_text-size-larger__3S1MH","text-bold":"styles_text-bold__3S_vo","text-uppercase":"styles_text-uppercase__38Dsw","record-button":"styles_record-button__2zE4x",floating:"styles_floating__1K0uC",button:"styles_button__2Lhpx"}},65:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__QdQq8","text-size-small":"styles_text-size-small__1ntVF","text-size-normal":"styles_text-size-normal__1QG0Q","text-size-large":"styles_text-size-large__60MzJ","text-size-larger":"styles_text-size-larger__1NDP3","text-bold":"styles_text-bold__2aWdQ","text-uppercase":"styles_text-uppercase__2HQOU","play-list":"styles_play-list__xoJ8L",open:"styles_open__24lEQ",voices:"styles_voices__32pWd",voice:"styles_voice__lsVyV"}},70:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__Bb7dO","text-size-small":"styles_text-size-small__29iPd","text-size-normal":"styles_text-size-normal__1FFJy","text-size-large":"styles_text-size-large__2NFd2","text-size-larger":"styles_text-size-larger___t97M","text-bold":"styles_text-bold__1Etxo","text-uppercase":"styles_text-uppercase__1akFl",drawer:"styles_drawer__2KdUm","drawer-horizontal":"styles_drawer-horizontal__39eUO"}},71:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__2vnjx","text-size-small":"styles_text-size-small__3BLTI","text-size-normal":"styles_text-size-normal__3qJii","text-size-large":"styles_text-size-large__1ze8J","text-size-larger":"styles_text-size-larger__2z5Bx","text-bold":"styles_text-bold__1qn8k","text-uppercase":"styles_text-uppercase__2Z6AJ","timer-bar":"styles_timer-bar__1Pml3",timer:"styles_timer__1qpE0"}},83:function(e,t,a){e.exports={"text-size-smaller":"styles_text-size-smaller__1fi0Z","text-size-small":"styles_text-size-small__PtZps","text-size-normal":"styles_text-size-normal__MAOk3","text-size-large":"styles_text-size-large__2FZ2E","text-size-larger":"styles_text-size-larger__2EDnl","text-bold":"styles_text-bold__37IFA","text-uppercase":"styles_text-uppercase__36vkr",main:"styles_main__3ZYez"}},84:function(e,t,a){e.exports={app:"App_app__2ziFi"}},91:function(e,t,a){e.exports=a(115)}},[[91,1,2]]]);
//# sourceMappingURL=main.922ae205.chunk.js.map