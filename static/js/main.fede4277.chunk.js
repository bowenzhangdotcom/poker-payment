(this["webpackJsonppoker-payment"]=this["webpackJsonppoker-payment"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),s=n(44),c=n(45),l=n(51),u=n(50),b=n(35),d=n.n(b),j=n(66),m=n.n(j),h=n(67),p=n.n(h),x=n(78),y=n(136),O=n(5),v=Object(y.a)({myDropZone:{background:"#f1f1f1",borderColor:"#04957D",minHeight:"200px",borderWidth:"1px",borderStyle:"dashed"},myDropZoneText:{fontSize:"20px",paddingLeft:"2.5%",paddingRight:"2.5%",marginTop:"10%"}});function f(e){var t=v();return Object(O.jsx)("div",{className:p.a.DropzoneAreaContainer,children:Object(O.jsx)(x.a,{onChange:e.handleFileChange,dropzoneText:"Select your PokerNow CSV or enter buy-ins in the form",filesLimit:1,showPreviewsInDropzone:!0,useChipsForPreview:!0,dropzoneClass:t.myDropZone,dropzoneParagraphClass:t.myDropZoneText})})}var _=n(61),N=n.n(_),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){for(var e=[],t=this.props.data,n=0;n<t.length;n++)e.push(Object(O.jsxs)("div",{className:N.a.TextRow,children:[t[n].Loser," pays ",t[n].Winner," $",t[n].Amount]},n));return Object(O.jsx)("div",{id:"ResultsTable",className:N.a.ResultsTable,children:e})}}]),n}(r.a.Component),g=n(48),T=n(53),F=n(63),k=n(54),D=n(16),A=n.n(D);function B(e){var t=Object(a.useState)([{name:"Lost69",net:-69},{name:"Won68",buyin:1,buyout:69},{name:"Won1",buyin:420,buyout:421}]),n=Object(k.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(!0),s=Object(k.a)(i,2),c=s[0],l=s[1],u=Object(a.useState)({name:"",buyin:"",buyout:""}),b=Object(k.a)(u,2),d=b[0],j=b[1],m=function(e){j(Object(T.a)(Object(T.a)({},d),{},Object(g.a)({},e.target.name,e.target.value)))},h=function(e){var t=r;t.splice(e.target.id,1),o(Object(F.a)(t))};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("table",{className:A.a.DataTable,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{className:A.a.TableHead,children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Buy-in"}),Object(O.jsx)("th",{children:"Buy-out"}),Object(O.jsx)("th",{children:"Net"}),Object(O.jsx)("th",{children:"Action"})]})}),Object(O.jsx)("tbody",{children:r.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:A.a.TableName,children:e.name}),Object(O.jsx)("td",{className:A.a.TableNumber,children:e.buyin}),Object(O.jsx)("td",{className:A.a.TableNumber,children:e.buyout}),Object(O.jsx)("td",{className:A.a.TableNumber,children:e.net}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{className:A.a.deleteRow,onClick:h,id:t,children:"Delete"})})]})}))})]}),c?Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{placeholder:"Name",onChange:m,value:d.name,name:"name",className:A.a.InputBox}),Object(O.jsx)("input",{placeholder:"Buy-in",onChange:m,value:d.buyin,name:"buyin",className:A.a.InputBox}),Object(O.jsx)("input",{placeholder:"Buy-out",onChange:m,value:d.buyout,name:"buyout",className:A.a.InputBox}),Object(O.jsx)("input",{placeholder:"Net",onChange:m,value:d.net,name:"net",className:A.a.InputBox})]}),Object(O.jsx)("button",{onClick:function(){o([].concat(Object(F.a)(r),[Object(T.a)({},d)])),j({name:"",buyin:"",buyout:""}),l(!1)},className:A.a.addButton,children:"Add Person"})]}):Object(O.jsx)("button",{onClick:function(){return l(!c)},className:A.a.addButton,children:"Add Row"}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(t){e.handleFormEntry(r)},className:A.a.submitForm,children:"Submit!"})})]})}var w=n(62),E=function(e,t){var n={};"PokerNow"===t?n=function(e){for(var t=e.data,n={},a=0;a<t.length;a++){var r=t[a];if(Object.keys(r).length>1){var o="".concat(r.player_nickname," (").concat(r.player_id,")");o in n||(n[o]=0),n[o]+=parseInt(r.net)}}return n}(e):"FormEntry"===t&&(n=function(e){for(var t={},n=0;n<e.length;n++){var a=e[n],r=a.name,o=void 0;o=a.net?parseInt(a.net):parseInt(a.buyout)-parseInt(a.buyin),r in t||(t[r]=0),t[r]+=o}return t}(e));for(var a=[],r=[],o=0,i=0,s=Object.keys(n);i<s.length;i++){var c=s[i],l=c,u=n[c],b=[l,u];u<0?a.push(b):r.push(b),o+=u}0!==o&&alert("Net total is off by ".concat(o));var d=new w.a((function(e,t){return e[1]-t[1]}));d.init(a);var j=new w.a((function(e,t){return t[1]-e[1]}));j.init(r);for(var m=[];d.size()>0&&j.size()>0;){var h={Winner:"",Loser:"",Amount:""},p=d.poll(),x=j.poll();h.Winner=x[0],h.Loser=p[0];var y=x[1]+p[1];y<0&&(h.Amount=x[1],d.add([p[0],y])),y>0?(h.Amount=-p[1],j.add([x[0],y])):h.Amount=x[1],m.push(h)}return m},S=function(e){var t=function(e){if(Array.isArray(e))return"FormEntry";if("object"===typeof e){var t=e.data[0];if("buy_in"in t&&"buy_out"in t&&"net"in t&&"player_id"in t&&"player_nickname"in t&&"session_end_at"in t&&"session_start_at"in t&&"stack"in t)return"PokerNow"}alert("Invalid data source - check that the file is the original export!")}(e);return E(e,t)},I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a.handleFileChange=function(e){e.length>0&&m.a.parse(e[0],{header:!0,complete:function(e){var t=S(e);a.setState({processedData:t})}})},a.handleFormEntry=function(e){var t=S(e);a.setState({processedData:t})},a.state={processedData:[{Winner:"exampleWinner1",Loser:"exampleLoser1",Amount:1},{Winner:"exampleWinner2",Loser:"exampleLoser2",Amount:2},{Winner:"exampleWinner3",Loser:"exampleLoser3",Amount:3}]},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:d.a.Body,children:[Object(O.jsx)("h1",{children:"Poker Payments"}),Object(O.jsx)("div",{className:d.a.SubmitContainer,children:Object(O.jsx)(f,{handleFileChange:this.handleFileChange})}),Object(O.jsx)("div",{className:d.a.TableContainer,children:Object(O.jsx)(B,{handleFormEntry:this.handleFormEntry})}),Object(O.jsx)("h2",{children:"Payments"}),Object(O.jsx)("div",{className:d.a.ResultsTable,children:Object(O.jsx)(C,{data:this.state.processedData})})]})}}]),n}(r.a.Component);i.a.render(Object(O.jsx)(I,{}),document.getElementById("root"))},16:function(e,t,n){e.exports={DataTable:"FormEntry_DataTable__1_ytq",TableHead:"FormEntry_TableHead__3ahv6",TableNumber:"FormEntry_TableNumber__3V3Oy",TableName:"FormEntry_TableName__2GlTS",InputBox:"FormEntry_InputBox__2GI1Y",addButton:"FormEntry_addButton__3RZPx",deleteRow:"FormEntry_deleteRow__3qx7X",submitForm:"FormEntry_submitForm__2El8v"}},35:function(e,t,n){e.exports={SubmitContainer:"App_SubmitContainer__1B5DM",TableContainer:"App_TableContainer__2b5u9"}},61:function(e,t,n){},67:function(e,t,n){e.exports={DropzoneAreaContainer:"FileSubmit_DropzoneAreaContainer__3mwDz"}}},[[104,1,2]]]);
//# sourceMappingURL=main.fede4277.chunk.js.map