webpackJsonp([8],{KQKl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),r=n.n(a),s=n("Xxa5"),o=n.n(s),c=n("exGp"),i=n.n(c),l=n("0jG4"),u=(n("YaEn"),n("1nuA"),{name:"Resou",mixins:[n("3AVb").a],components:{NewRow:function(){return n.e(15).then(n.bind(null,"1pu+"))}},data:function(){return{loading:!1,data:[],count:0,params:{pageNo:1,size:20},rows:[],columns:function(){var e=this;return[{type:"selection",width:60,align:"center"},{title:"_id",width:200,key:"_id",align:"center"},{title:"账号",key:"userName",align:"center"},{title:"姓名",key:"name",align:"center"},{title:"性别",key:"sex",align:"center"},{title:"权限",key:"isAdmin",align:"center",render:function(e,t){return t.row.isAdmin?e(Tag,{attrs:{type:"dot",color:"blue"}},["管理员"]):"读者"}},{title:"操作",align:"center",width:200,render:function(t,n){var a=n.row;return t("div",[t(Button,{class:"link",attrs:{type:"text",size:"small"},on:{click:function(){e.$router.push({name:"Record",query:{userId:a._id}})}}},["借阅记录"]),t(Button,{class:"link",attrs:{type:"text",size:"small"},on:{click:function(){e.modal.show=!0,e.modal.row=a}}},["编辑"]),t(Button,{class:"link",attrs:{type:"text",size:"small"},on:{click:function(){return e.deletes([a._id])}}},["删除"])])}}]}.call(this),modal:{show:!1,row:null}}},created:function(){this.showList()},methods:{addrow:function(){var e=this;return i()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.modal.show=!0;case 1:case"end":return t.stop()}},t,e)}))()},showList:function(){var e=this;return i()(o.a.mark(function t(){var n,a,s,c,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.e.get(r()({},e.params));case 2:n=t.sent,a=n.data,s=a.rows,c=void 0===s?[]:s,i=a.count,e.data=c,e.count=i,e.$Message.success("加载完成");case 8:case"end":return t.stop()}},t,e)}))()},confirmDel:function(e){var t=this;return i()(o.a.mark(function n(){var a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.e.delete({ids:e||t.rows.map(function(e){return e._id})});case 2:a=n.sent,a.data,t.$Message.success("删除成功！"),t.showList();case 6:case"end":return n.stop()}},n,t)}))()}}}),d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("FyLayout",{attrs:{bgColor:"#fff"}},[n("SearchBox",{attrs:{params:e.params},on:{search:function(t){e.search()},reset:e.reset},scopedSlots:e._u([{key:"body",fn:function(t){return[n("Col",{attrs:{lg:6,sm:8,xs:24}},[n("FormItem",{attrs:{label:"用户名称",prop:"name"}},[n("Input",{attrs:{icon:"search",placeholder:"搜索用户名称"},model:{value:e.params.name,callback:function(t){e.$set(e.params,"name",t)},expression:"params.name"}})],1)],1)]}}])},[n("template",{slot:"action"},[n("Button",{attrs:{type:"primary",icon:"plus-round"},on:{click:function(t){e.addrow()}}},[e._v("新增")]),e._v(" "),n("Button",{directives:[{name:"show",rawName:"v-show",value:e.rows.length,expression:"rows.length"}],attrs:{type:"ghost"},on:{click:function(t){e.deletes()}}},[e._v("批量删除")])],1)],2),e._v(" "),n("Table",{attrs:{border:"",columns:e.columns,data:e.data},on:{"on-selection-change":e.selectChange}}),e._v(" "),n("Block",{attrs:{align:"right"}},[n("Page",{attrs:{total:e.count,"page-size":e.params.size,"show-elevator":"",current:e.params.pageNo,"show-total":""},on:{"update:current":function(t){e.$set(e.params,"pageNo",t)},"on-change":e.pageChange}})],1),e._v(" "),n("NewRow",{attrs:{modal:e.modal},on:{ok:function(t){e.showList()}}})],1)},staticRenderFns:[]},p=n("VU/8")(u,d,!1,null,null,null);t.default=p.exports}});