(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a.p+"static/media/LogoBlue.a4a34cab.svg"},129:function(e,t,a){e.exports=a(232)},134:function(e,t,a){},136:function(e,t,a){},205:function(e,t,a){},215:function(e,t,a){},217:function(e,t,a){},219:function(e,t,a){},223:function(e,t,a){},228:function(e,t,a){},230:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(115),i=a.n(c),o=(a(134),a(54)),l=a(58),s=a(61),u=a(59),d=a(62),p=(a(136),a(72)),m=a(36),f=a.n(m),v=a(32),h=a(107),E=a.n(h),y="iqLYPFZ7M4Eq12NppSUo2yv5epuX1PpY",g="https://airapi.airly.eu/v2",O=20,b="FETCH_STATIONS",A="FETCH_DATA_FOR_STATION",T="FETCHED_STATIONS_FAILED",w="FETCHED_ONE_STATION_FAILED",x="IDS_ARRAY",j="FETCH_PARTIAL_DATA",D="FETCHED_PARTIAL_FAILED",k=a(87);function N(e){var t=[];return e.map(function(e){return t.push(e.id)}),t}function L(e,t){return Object(k.a)({},e,t)}var S=f.a.mark(R),I=f.a.mark(P),_=f.a.mark(H),F=function(e){return{type:"FETCHED_STATIONS_DATA",payload:e}},C=function(e){return{type:"FETCHED_DATA_FOR_ONE_STATION",payload:e}},M=function(e){return{type:"FETCHED_PARTIAL_DATA",payload:e}};function R(e){var t,a,n,r,c,i;return f.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.LAT,a=e.LON,n=e.MAX_DISTANCE,r="".concat(g,"/installations/nearest/?lat=").concat(t,"&lng=").concat(a,"&maxDistanceKM=").concat(n,"&maxResults=").concat(O,"&apikey=").concat(y),o.prev=2,o.next=5,Object(v.b)(E.a.get,r);case 5:return c=o.sent,o.next=8,Object(v.c)(F(c.data));case 8:return o.next=10,Object(v.b)(N,c.data);case 10:return i=o.sent,o.next=13,Object(v.c)({type:x,arrayOfIds:i});case 13:o.next=19;break;case 15:return o.prev=15,o.t0=o.catch(2),o.next=19,Object(v.c)({type:T,error:o.t0});case 19:case"end":return o.stop()}},S,this,[[2,15]])}function P(e){var t,a,n,r,c;return f.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.idArray,a=t.map(function(e){return{uid:e}}),i.prev=2,n=t.map(function(e){return"".concat(g,"/measurements/installation?installationId=").concat(e,"&apikey=").concat(y)}),i.next=6,Object(v.a)(n.map(function(e){return Object(v.b)(E.a.get,e)}));case 6:return r=i.sent,i.next=9,Object(v.a)(r.map(function(e,t){return Object(v.b)(L,e.data.current,a[t])}));case 9:return c=i.sent,i.next=12,Object(v.c)(M(c));case 12:i.next=18;break;case 14:return i.prev=14,i.t0=i.catch(2),i.next=18,Object(v.c)({type:D,error:i.t0});case 18:case"end":return i.stop()}},I,this,[[2,14]])}function H(e){var t,a,n;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.installationId,a="".concat(g,"/measurements/installation?installationId=").concat(t,"&apikey=").concat(y),r.prev=2,r.next=5,Object(v.b)(E.a.get,a);case 5:return n=r.sent,r.next=8,Object(v.c)(C(n.data));case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(2),r.next=14,Object(v.c)({type:w,error:r.t0});case 14:case"end":return r.stop()}},_,this,[[2,10]])}var V=a(234),B=a(241),U=a(240),W=a(227),X=a(104),Y=a(243),z=a(225),G=a(242),K=a(233),q=a(25),J=a(105),Z=a(235),Q=a(163),$=[19.9449799,50.0646501],ee={clicked:new J.c({image:new Z.a({radius:10,fill:new Q.a({color:"#1C1F1E"})})}),default:new J.c({image:new Z.a({radius:15,fill:new Q.a({color:"#5A5E60"})})})},te=a(117),ae=a.n(te),ne=a(114),re=a(40),ce=a(74),ie=a(113),oe=a(111),le={PM1:"[\xb5g/m3]",PM25:"[\xb5g/m3]",PM10:"[\xb5g/m3]",HUMIDITY:"[%]",TEMPERATURE:"[\u2103]",PRESSURE:"[hPa]"},se=(a(205),50),ue=50,de=20,pe=20,me=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.title,n=380-de-pe,c=250-se-ue,i=function(e){return e.time},o=function(e){return e.value},l=Math.min.apply(Math,Object(ne.a)(t.map(o))),s=Math.max.apply(Math,Object(ne.a)(t.map(o))),u=Object(ie.a)({rangeRound:[100,n],domain:t.map(i),padding:.2}),d=Object(ie.b)({rangeRound:[c,0],domain:[l-.01*l,s]}),p=function(e,t){return function(a){return e(t(a))}},m=p(u,i),f=p(d,o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,a),r.a.createElement("svg",{width:380,height:250},t.map(function(e){var t=c-f(e);return r.a.createElement(re.a,{key:Math.random(),fill:"#394585"},r.a.createElement(ce.a,{x:m(e),y:c-t,height:t,width:u.bandwidth()}))}),r.a.createElement(oe.a,{top:c+20,label:"Time [h]",labelOffset:20,scale:u,stroke:"black",tickClassName:"tick-bottom",labelClassName:"label"}),r.a.createElement(oe.b,{left:80,scale:d,tickLabelProps:function(){return{dx:"-5px",dy:"7px",fill:"black",fontFamily:"Arial",fontSize:10,textAnchor:"end"}}}),r.a.createElement("text",{x:"-130",y:"35",transform:"rotate(-90)",fontSize:16},a.charAt(0)+a.slice(1).toLowerCase()," ",function(e,t){var a=null;return t in e&&(a=e[t]),a}(le,a))))}}]),t}(n.Component);me.defaultProps={data:[],title:"missing title"};var fe=me,ve=(a(215),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={dataBar:[],title:"",open:!0},a.onClickHandler=function(e){a.getHistoricalData(e)},a.getHistoricalData=function(e){var t=a.props.data.history.map(function(t){var a=void 0===t.values||0===t.values.length?0:t.values.find(function(t){return t.name===e}).value;return{time:t.fromDateTime.slice(11,16),value:a}});a.setState({dataBar:t,title:e})},a.renderCurrentParams=function(){var e=a.props.data.current,t=ae()(e,"values",[]),n=t.map(function(e){return r.a.createElement("div",{className:"Box",key:Math.random()},r.a.createElement("div",null,e.name," - ",e.value),r.a.createElement("button",{type:"button",className:"button",onClick:function(){return a.onClickHandler(e.name)}},"History"))});return r.a.createElement("div",{className:"Current"},r.a.createElement("hr",null),r.a.createElement("p",null,"CURRENT VALUES"),t.length>0?n:r.a.createElement("div",{className:"Box"},r.a.createElement("div",null,"Nothing to show")))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({open:e.openData})}},{key:"componentDidUpdate",value:function(e){var t=this.props.address,a=this.state.dataBar;e.address!==t&&(a.length=0)}},{key:"closeMenu",value:function(){var e=this.state;this.setState({open:!e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.dataBar,n=t.title,c=t.open,i=this.props.address;return r.a.createElement("div",null,c&&r.a.createElement("div",{className:"Data"},r.a.createElement("button",{type:"button",className:"close",onClick:function(){return e.closeMenu()}},"X"),r.a.createElement("div",{className:"Header"},r.a.createElement("h4",null,"STATION:\xa0",i)),r.a.createElement("div",{className:"Values"},this.renderCurrentParams(),r.a.createElement("div",{className:"Historical"},r.a.createElement("hr",null),r.a.createElement("p",null,"VALUES FROM LAST 24 HOURS"),a&&a.length>0?r.a.createElement(fe,{data:a,title:n}):r.a.createElement("div",null)))))}}]),t}(n.Component));ve.defaultProps={data:{},address:"Station Address"};var he=ve,Ee=Object(p.b)(function(e){return{data:e.data}},null)(he),ye=[{minValue:0,maxValue:25,values:"0-25",level:"VERY_LOW",description:"Very Low",color:"#6BC926"},{minValue:25,maxValue:50,values:"25-50",level:"LOW",description:"Low",color:"#D1CF1E"},{minValue:50,maxValue:75,values:"50-75",level:"MEDIUM",description:"Medium",color:"#EFBB0F"},{minValue:75,maxValue:87.5,values:"75-87.5",level:"HIGH",description:"High",color:"#EF7120"},{minValue:87.5,maxValue:100,values:"87.5-100",level:"VERY_HIGH",description:"Very High",color:"#EF2A36"},{minValue:100,maxValue:125,values:"100-125",level:"EXTREME",description:"Extreme",color:"#B00057"},{minValue:125,maxValue:null,values:"125+",level:"AIRMAGEDDON",description:"Airmageddon!",color:"#770078"},{minValue:null,maxValue:null,values:"null",level:"null",description:"Lack of Data",color:"#5A5E60"}],ge=(a(217),function(){var e=ye.map(function(e){return r.a.createElement("div",{className:"list",key:Math.random()},r.a.createElement("span",{style:{backgroundColor:e.color}}),e.description)});return r.a.createElement("div",{className:"legend"},r.a.createElement("header",null,"POLLUTION LEVEL:"),r.a.createElement("div",{className:"row"},e))}),Oe=(a(219),function(e){var t=e.message;return r.a.createElement("div",{className:"error"},r.a.createElement("p",null,"ERROR:"),r.a.createElement("br",null),t)});Oe.defaultProps={message:""};var be=Oe,Ae=(a(221),a(223),function e(t){var a=this;Object(o.a)(this,e),this.addLoading=function(){0===a.loading&&a.show(),++a.loading,a.update()},this.addLoaded=function(){setTimeout(function(){++a.loaded,a.update()},100)},this.update=function(){a.loading===a.loaded&&(a.loading=0,a.loaded=0,setTimeout(function(){a.hide()},250))},this.show=function(){a.el.style.visibility="visible"},this.hide=function(){a.loading===a.loaded&&(a.el.style.visibility="hidden")},this.el=t,this.loading=0,this.loaded=0}),Te="layer_name",we="layer_stations",xe=$[1],je=$[0],De=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleButton=function(){var e=a.state.openData;a.setState({openData:!e})},a.createMap=function(e){var t=new G.a;t.on("tileloadstart",function(){a.progress.addLoading()}),t.on("tileloadend",function(){a.progress.addLoaded()}),t.on("tileloaderror",function(){a.progress.addLoaded()});var n=new Y.a({source:t}),r=new z.a({source:new K.a({features:[]})}),c=new V.a({center:e,zoom:14});return r.set(Te,we),new B.a({target:"map",layers:[n,r],view:c})},a.getMaxDistanceFromMap=function(){return a.map.getSize()[0]/2*a.map.getView().values_.resolution/1e3},a.createLayerFeatures=function(e){return e.map(function(e){var t=e.location.latitude,a=e.location.longitude,n=e.address,r=n.city,c=n.street,i=n.number,o=e.id,l="";l=null===c&&null===i?"".concat(r):"".concat(r," ul. ").concat(c," ").concat(i);var s=new U.a({geometry:new W.a(Object(q.c)([a,t])),address:l});return s.setId(o),s})},a.updateLayerWithFeatures=function(e){var t=new K.a({features:e});a.getLayerByName(a.map.getLayers(),we).setSource(t)},a.mapRegisterEvents=function(e){a.map.on("click",function(t){t.preventDefault();var n=a.map.getFeaturesAtPixel(t.pixel);if(null!==n){var r=n[0].getId(),c=n[0].get("address");e(r),c!==a.state.address&&a.setState({address:c})}})},a.getLayerByName=function(e,t){var a=null;return e.forEach(function(e){e.get(Te)===t&&(a=e)}),a},a.map={},a.progress={},a.state={address:"",openData:!0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.progress=new Ae(document.getElementById("loader")),this.map=this.createMap(Object(q.c)($));var e=this.props,t=e.fetchStations,a=e.fetchMeasurement,n=this.getMaxDistanceFromMap();t(xe,je,n),this.mapRegisterEvents(a),this.featuresLayerPointerMove(),this.featuresLayerClick()}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,a=t.idArray,n=t.fetchPartialData;a!==e.idArray&&n(e.idArray)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.stations,a=e.partial;if(t&&t.length>0&&a.length>0){var n=this.createLayerFeatures(t);this.updateLayerWithFeatures(n),this.createFeaturesLayers(n)}}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.stations,n=e.partial,c=this.state,i=c.address,o=c.openData;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{id:"map",className:"Map"},r.a.createElement("div",{id:"loader"}))),r.a.createElement(ge,null),"string"===typeof a[0]&&r.a.createElement(be,{message:a[0]}),"string"===typeof n[0]&&r.a.createElement(be,{message:n[0]}),t.error&&r.a.createElement(be,{message:t.error}),Object.keys(t).length>0?r.a.createElement(Ee,{address:i,openData:o,handleButton:this.handleButton}):null)}},{key:"setColorFeatureStyle",value:function(e){var t=e.getId(),a=this.props.partial,n="";return t?(a.map(function(e){e.uid===t&&(n=e.indexes[0].color)}),n):ee.default.getFill().getColor()}},{key:"createFeaturesLayers",value:function(e){var t=this;e.map(function(e){var a=new K.a;a.addFeature(e),e.setStyle(new J.c({image:new Z.a({radius:17,fill:new Q.a({color:t.setColorFeatureStyle(e)})})}));var n=new z.a({source:a});n.set(Te,e.getId()),t.map.addLayer(n)})}},{key:"featuresLayerPointerMove",value:function(){var e=this;this.map.on("pointermove",function(t){e.map.getTargetElement().style.cursor=e.map.hasFeatureAtPixel(t.pixel)?"pointer":""})}},{key:"featuresLayerClick",value:function(){var e=new X.a;this.map.addInteraction(e),e.on("select",function(e){e.selected.forEach(function(e){e.setStyle(ee.clicked)})})}}]),t}(n.Component);De.defaultProps={stations:[],data:{},idArray:[],partial:[]};var ke=De,Ne={fetchStations:function(e,t,a){return{type:b,LAT:e,LON:t,MAX_DISTANCE:a}},fetchMeasurement:function(e){return{type:A,installationId:e}},fetchPartialData:function(e){return{type:j,idArray:e}}},Le=Object(p.b)(function(e){return{stations:e.stations,data:e.data,idArray:e.idArray,partial:e.partial}},Ne)(ke),Se=(a(228),a(118)),Ie=a.n(Se),_e=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",null,"KRAK\xd3W AIR CONDITION BASED ON \xa0",r.a.createElement("img",{src:Ie.a,alt:"logo"}),"\xa0 STATIONS"))},Fe=(a(230),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,"Created by Ela "))}),Ce=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_e,null),r.a.createElement(Le,null),r.a.createElement(Fe,null))}}]),t}(n.Component),Me=a(55),Re=a(119),Pe=[],He={},Ve=[],Be=Object(Me.c)({stations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED_STATIONS_DATA":return t.payload;case T:return[t.error.message];default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED_DATA_FOR_ONE_STATION":return t.payload;case w:return Object(k.a)({},e,{error:t.error.message});default:return e}},idArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.arrayOfIds;default:return e}},partial:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED_PARTIAL_DATA":return t.payload;case D:return[t.error.message];default:return e}}}),Ue=f.a.mark(Ye),We=f.a.mark(ze),Xe=f.a.mark(Ge);function Ye(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(b,R);case 2:case"end":return e.stop()}},Ue,this)}function ze(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(A,H);case 2:case"end":return e.stop()}},We,this)}function Ge(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(j,P);case 2:case"end":return e.stop()}},Xe,this)}var Ke=f.a.mark(qe);function qe(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Ye(),ze(),Ge()]);case 2:case"end":return e.stop()}},Ke,this)}var Je=Object(Re.a)(),Ze=[Je],Qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Me.d,$e=Object(Me.e)(Be,{},Qe.apply(void 0,[Me.a.apply(void 0,Ze)].concat([])));Je.run(qe);var et=$e;i.a.render(r.a.createElement(p.a,{store:et},r.a.createElement(Ce,null)),document.getElementById("root"))}},[[129,2,1]]]);
//# sourceMappingURL=main.da8b9db6.chunk.js.map