(this.webpackJsonppagination=this.webpackJsonppagination||[]).push([[0],{20:function(t,e,a){t.exports=a(49)},25:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(13),c=a.n(r),i=(a(25),a(14)),s=a(15),l=a(2),u=a(19),d=a(18),m=a(16),S=a.n(m),h=a(17),y=a.n(h),g=(a(48),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).handlePageClick=function(t){var e=t.selected,a=e*n.state.perPage;n.setState({id:a,currentPage:e,offset:a},(function(){n.receivedData(n.state.sortKey)}))},n.sortBy=function(t){n.receivedData(t),n.setState({ascSort:t===n.state.sortKey&&n.state.ascSort?0:1})},n.state={id:0,offset:0,data:[],perPage:13,currentPage:0,sortKey:"code",ascSort:1,codeSort:"(ASC)",nameSort:"",citySort:"",countrySort:""},n.handlePageClick=n.handlePageClick.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"receivedData",value:function(t){var e=this;S.a.get("https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json").then((function(a){var n=a.data;1===e.state.ascSort?n.sort((function(e,a){return e[t].localeCompare(a[t])})):n.sort((function(e,a){return a[t].localeCompare(e[t])}));var r=n.slice(e.state.offset,e.state.offset+e.state.perPage).map((function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",{key:t.code},o.a.createElement("td",null,++e.state.id),o.a.createElement("td",null,t.code?t.code:"###"),o.a.createElement("td",null,t.name?t.name:"### airport"),o.a.createElement("td",null,t.city?t.city:"### city"),o.a.createElement("td",null,t.country?t.country:"### country")))}));e.setState({id:e.state.offset,pageCount:Math.ceil(n.length/e.state.perPage),data:a.data,sortKey:t,codeSort:"code"===t?e.state.ascSort?"(ASC)":"(DESC)":"",nameSort:"name"===t?e.state.ascSort?"(ASC)":"(DESC)":"",citySort:"city"===t?e.state.ascSort?"(ASC)":"(DESC)":"",countrySort:"country"===t?e.state.ascSort?"(ASC)":"(DESC)":"",postData:r})}))}},{key:"componentDidMount",value:function(){this.receivedData(this.state.sortKey)}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{align:"center"},o.a.createElement("h2",null,"JSON into Table With Pagination and Sort"),o.a.createElement("table",{align:"center",cellPadding:"6",cellSpacing:"0",border:"1"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Sl.No "),o.a.createElement("td",{onClick:function(){return t.sortBy("code")}},"Code ",this.state.codeSort),o.a.createElement("td",{onClick:function(){return t.sortBy("name")}},"Name ",this.state.nameSort),o.a.createElement("td",{onClick:function(){return t.sortBy("city")}},"City ",this.state.citySort),o.a.createElement("td",{onClick:function(){return t.sortBy("country")}},"Country ",this.state.countrySort))),o.a.createElement("tbody",null,this.state.postData,o.a.createElement(y.a,{pageCount:this.state.pageCount,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.950105a6.chunk.js.map