webpackJsonp([1],{"01Or":function(t,e){},"2cpj":function(t,e){},"34KM":function(t,e){},"7q3G":function(t,e){},Gnd5:function(t,e){},IKp5:function(t,e){},J8j7:function(t,e){},NHnr:function(t,e,s){"use strict";function n(t,e,s){return t+=(t.indexOf("?")<0?"?":"&")+function(t){var e="";for(var s in t){var n=void 0!==t[s]?t[s]:"";e+="&"+s+"="+encodeURIComponent(n)}return e?e.substring(1):""}(e),new R.a(function(e,n){N()(t,s,function(t,s){t?n(t):e(s)})})}function i(t,e,s){return n("https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp",j()({},x,{format:"jsonp",platform:"h5",needNewCode:1,w:t,zhidaqu:1,catZhida:s?1:0,t:0,flag:1,ie:"utf-8",sem:1,aggr:0,perpage:20,n:20,p:e,remoteplace:"txt.mqq.all",_:1514426893723}),T)}function r(t){return n("https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg",j()({},x,{loginUin:0,hostUin:0,format:"json",platform:"yqq",needNewCode:0,cid:205361747,songmid:t,filename:"C400"+t+".m4a",guid:4808053850}),lt)}function a(t,e){return new ut({id:t.songid,mid:t.songmid,singer:function(t){var e=[];if(!t)return"";return t.forEach(function(t){e.push(t.name)}),e.join("/")}(t.singer),name:t.songname,album:t.albumname,duration:t.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+t.albummid+".jpg?max_age=2592000",url:"http://dl.stream.qqmusic.qq.com/"+e[0].filename+"?vkey="+e[0].vkey+"&guid=4808053850&uin=0&fromtag=66"})}function o(t,e){return t.findIndex(function(t){return t.id===e.id})}Object.defineProperty(e,"__esModule",{value:!0});var c={};s.d(c,"selectPlay",function(){return zt}),s.d(c,"insertSong",function(){return Ut});var l={};s.d(l,"singer",function(){return Dt}),s.d(l,"playing",function(){return Gt}),s.d(l,"fullScreen",function(){return Bt}),s.d(l,"playlist",function(){return Pt}),s.d(l,"sequenceList",function(){return Ft}),s.d(l,"mode",function(){return Zt}),s.d(l,"currentIndex",function(){return Wt}),s.d(l,"currentSong",function(){return Jt}),s.d(l,"disc",function(){return Qt}),s.d(l,"topList",function(){return Vt});s("j1ja");var u=s("/5sW"),h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-header"},[e("div",{staticClass:"icon"}),this._v(" "),e("h1",{staticClass:"text"},[this._v("Doraemon Music")])])}]},d=s("VU/8")({},h,!1,function(t){s("Gnd5")},"data-v-2c1de3c2",null).exports,f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab"},[e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[e("span",{staticClass:"tab-link"},[this._v("推荐")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[e("span",{staticClass:"tab-link"},[this._v("歌手")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[e("span",{staticClass:"tab-link"},[this._v("排行\n    ")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[e("span",{staticClass:"tab-link"},[this._v("搜索")])])],1)},staticRenderFns:[]},p=s("VU/8")({},f,!1,function(t){s("kl57")},"data-v-0493e930",null).exports,g=s("Dd8w"),m=s.n(g),v=s("NYxO"),y={props:{percent:{type:Number,default:0}},watch:{percent:function(t){if(t>=0&&!this.touch.initiated){var e=t*(this.$refs.progressBar.clientWidth-16);this._offset(e)}}},created:function(){this.touch={}},methods:{progressTouchStart:function(t){this.touch.initiated=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.clientWidth},progressTouchMove:function(t){if(this.touch.initiated){var e=t.touches[0].pageX-this.touch.startX,s=Math.min(this.$refs.progressBar.clientWidth-16,Math.max(0,this.touch.left+e));this._offset(s)}},progressTouchEnd:function(){this.touch.initiated=!1,this._triggerPercent()},_offset:function(t){this.$refs.progress.style.width=t+"px",this.$refs.progressBtn.style.transform="translate3d("+t+"px,0,0)",this.$refs.progressBtn.style.webkitTransform="translate3d("+t+"px,0,0)"},progressClick:function(t){var e=this.$refs.progressBar.getBoundingClientRect(),s=t.pageX-e.left;this._offset(s),this._triggerPercent()},_triggerPercent:function(){var t=this.$refs.progressBar.clientWidth-16,e=this.$refs.progress.clientWidth/t;this.$emit("percentChange",e)}}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:t.progressClick}},[s("div",{staticClass:"bar-inner"},[s("div",{ref:"progress",staticClass:"progress"}),t._v(" "),s("div",{ref:"progressBtn",staticClass:"progress-btn-wrapper",on:{touchstart:function(e){e.preventDefault(),t.progressTouchStart(e)},touchmove:function(e){e.preventDefault(),t.progressTouchMove(e)},touchend:t.progressTouchEnd}},[s("div",{staticClass:"progress-btn"})])])])},staticRenderFns:[]},C={components:{progressBar:s("VU/8")(y,A,!1,function(t){s("kVrG")},"data-v-4906a6bc",null).exports},data:function(){return{songReady:!1,currentTime:""}},computed:m()({},Object(v.c)(["fullScreen","playlist","currentSong","playing","currentIndex"]),{playIcon:function(){return this.playing?"icon-pause":"icon-play"},miniIcon:function(){return this.playing?"icon-pause-mini":"icon-play-mini"},cdCls:function(){return this.playing?"play":"play pause"},percent:function(){return this.currentTime/this.currentSong.duration}}),methods:m()({back:function(){this.setFullScreen(!1)},open:function(){this.setFullScreen(!0)},togglePlaying:function(){this.setPlayingState(!this.playing)},next:function(){if(this.songReady){var t=this.currentIndex+1;t===this.playlist.length&&(t=0),this.setCurrentIndex(t),this.playing||this.togglePlaying(),this.songReady=!1}},prev:function(){if(this.songReady){var t=this.currentIndex-1;-1===t&&(t=this.playlist.length-1),this.setCurrentIndex(t),this.playing||this.togglePlaying(),this.songReady=!1}},ready:function(){this.songReady=!0},error:function(){this.songReady=!0},updateTime:function(t){this.currentTime=t.target.currentTime},end:function(){this.next()},format:function(t){var e=(t|=0)%60;return e=e>=10?e:"0"+e,(t/60|0)+":"+e},onProgressBarChange:function(t){this.$refs.audio.currentTime=this.currentSong.duration*t,this.playing||this.togglePlaying()}},Object(v.d)({setFullScreen:"SET_FULL_SCREEN",setPlayingState:"SET_PLAYING_STATE",setCurrentIndex:"SET_CURRENT_INDEX"})),watch:{currentSong:function(t,e){var s=this;t.id&&t.url&&t.id!==e.id&&(this.songReady=!1,setTimeout(function(){s.$refs.audio.src=t.url,s.$refs.audio.play()},0))},playing:function(t){var e=this;this.$nextTick(function(){t?e.$refs.audio.play():e.$refs.audio.pause()})}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.playlist.length>0,expression:"playlist.length>0"}],staticClass:"player"},[s("transition",{attrs:{name:"normal"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[s("div",{staticClass:"background"},[s("img",{attrs:{width:"100%",height:"100%",src:t.currentSong.image}})]),t._v(" "),s("div",{staticClass:"top"},[s("div",{staticClass:"back",on:{click:t.back}},[s("i",{staticClass:"icon-back"})]),t._v(" "),s("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),s("h2",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),s("div",{staticClass:"middle"},[s("div",{ref:"middleL",staticClass:"middle-l"},[s("div",{ref:"cdWrapper",staticClass:"cd-wrapper"},[s("div",{staticClass:"cd",class:t.cdCls},[s("img",{staticClass:"image",attrs:{src:t.currentSong.image}})])]),t._v(" "),s("div",{staticClass:"playing-lyric-wrapper"})])]),t._v(" "),s("div",{staticClass:"bottom"},[s("div",{staticClass:"dot-wrapper"}),t._v(" "),s("div",{staticClass:"progress-wrapper"},[s("span",{staticClass:"time time-l"},[t._v(t._s(t.format(t.currentTime)))]),t._v(" "),s("div",{staticClass:"progress-bar-wrapper"},[s("progress-bar",{attrs:{percent:t.percent},on:{percentChange:t.onProgressBarChange}})],1),t._v(" "),s("span",{staticClass:"time time-r"},[t._v(t._s(t.format(t.currentSong.duration)))])]),t._v(" "),s("div",{staticClass:"operators"},[s("div",{staticClass:"icon i-left"},[s("i",{staticClass:"icon-prev",on:{click:t.prev}})]),t._v(" "),s("div",{staticClass:"icon i-center"},[s("i",{ref:"center",class:t.playIcon,on:{click:t.togglePlaying}})]),t._v(" "),s("div",{staticClass:"icon i-right"},[s("i",{staticClass:"icon-next",on:{click:t.next}})])])])])]),t._v(" "),s("transition",{attrs:{name:"normal"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:t.open}},[s("div",{staticClass:"icon"},[s("img",{class:t.cdCls,attrs:{width:"40",height:"40",src:t.currentSong.image}})]),t._v(" "),s("div",{staticClass:"text"},[s("h2",{staticClass:"name",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),s("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),s("div",{staticClass:"control",on:{click:function(e){e.stopPropagation(),t.togglePlaying(e)}}},[s("i",{class:t.miniIcon})])])]),t._v(" "),s("audio",{ref:"audio",attrs:{autoplay:"",src:t.currentSong.url},on:{canplay:t.ready,error:t.error,timeupdate:t.updateTime,ended:t.end}})],1)},staticRenderFns:[]},_={components:{MHeader:d,Tab:p,Player:s("VU/8")(C,b,!1,function(t){s("7q3G")},"data-v-19e30145",null).exports}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("MHeader"),this._v(" "),e("Tab"),this._v(" "),e("keep-alive",[e("router-view")],1),this._v(" "),e("Player")],1)},staticRenderFns:[]},I=s("VU/8")(_,w,!1,function(t){s("e8YJ")},null,null).exports,S=s("v5o6"),k=s.n(S),q=s("/ocq"),x={g_tk:5381,uin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0},T={param:"jsonpCallback"},E=s("//Fk"),R=s.n(E),L=s("woOf"),j=s.n(L),M=s("hU7x"),N=s.n(M),O=s("mtWM"),z=s.n(O),U=s("GQaK"),D={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},listenScroll:{type:Boolean,default:!1},pullup:{type:Boolean,default:!1}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new U.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll){var e=this;this.scroll.on("scroll",function(t){e.$emit("scroll",t)})}this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},20)}}},G={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper",staticClass:"wrapper"},[this._t("default")],2)},staticRenderFns:[]},B=s("VU/8")(D,G,!1,null,null,null).exports,P={props:{title:{type:String,default:"正在载入..."}}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("img",{attrs:{width:"24",height:"24",src:s("WAac")}}),this._v(" "),e("p",{staticClass:"desc"},[this._v(this._s(this.title))])])},staticRenderFns:[]},Z=s("VU/8")(P,F,!1,function(t){s("YJec")},"data-v-6ecafe40",null).exports,W={computed:m()({},Object(v.c)(["playlist"])),mounted:function(){this.handlePlaylist(this.playlist)},activated:function(){this.handlePlaylist(this.playlist)},watch:{playlist:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("component must implement handlePlaylist method")}}},J={mixins:[W],components:{scroll:B,loading:Z},data:function(){return{recommends:[],discList:[]}},created:function(){var t=this;n("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",j()({},x,{platform:"h5",needNewCode:1,_:1513741337421}),T).then(function(e){0===e.code&&(t.recommends=e.data.slider)}),function(){var t=j()({},x,{picmid:1,rnd:Math.random(),loginUin:0,hostUin:0,notice:0,platform:"yqq",needNewCode:0,categoryId:1e7,sortId:5,sin:0,ein:29,format:"json"});return z.a.get("/api/getDiscList",{params:t}).then(function(t){return R.a.resolve(t.data)})}().then(function(e){0===e.code&&(t.discList=e.data.list)})},methods:m()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.recommend.style.bottom=e,this.$refs.scroll.refresh()},selectItem:function(t){this.$router.push({path:"/recommend/"+t.dissid}),this.setDisc(t)}},Object(v.d)({setDisc:"SET_DISC"}))},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"recommend",staticClass:"recommend"},[s("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.discList}},[s("div",[s("div",{staticClass:"slider-wrapper"},[s("mt-swipe",t._l(t.recommends,function(t,e){return s("mt-swipe-item",{key:e},[s("a",{attrs:{href:t.linkUrl}},[s("img",{staticClass:"needsclick",attrs:{src:t.picUrl,alt:""}})])])}))],1),t._v(" "),s("div",{staticClass:"recommend-list"},[s("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),t._v(" "),s("ul",t._l(t.discList,function(e){return s("li",{staticClass:"item",on:{click:function(s){t.selectItem(e)}}},[s("div",{staticClass:"icon"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60",alt:""}})]),t._v(" "),s("div",{staticClass:"text"},[s("div",{staticClass:"text"},[s("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),s("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])])}))])]),t._v(" "),s("loading")],1),t._v(" "),s("router-view")],1)},staticRenderFns:[]},V=s("VU/8")(J,Q,!1,function(t){s("J8j7")},"data-v-340111f8",null).exports,H=s("Zrlr"),Y=s.n(H),$=function t(e){var s=e.id,n=e.name;Y()(this,t),this.id=s,this.name=n,this.avatar="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+s+".jpg?max_age=2592000"},K={props:{data:{type:Array,default:[]}},components:{scroll:B,loading:Z},methods:{selectItem:function(t){this.$emit("select",t)},refresh:function(){this.$refs.listview.refresh()}}},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data}},[s("ul",t._l(t.data,function(e){return s("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[s("ul",t._l(e.items,function(e){return s("li",{staticClass:"list-group-item",on:{click:function(s){t.selectItem(e)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))])})),t._v(" "),s("loading")],1)},staticRenderFns:[]},tt={mixins:[W],components:{listview:s("VU/8")(K,X,!1,function(t){s("sluw")},"data-v-275e6bef",null).exports},data:function(){return{singers:[]}},created:function(){var t=this;n("https://c.y.qq.com/v8/fcg-bin/v8.fcg",j()({},x,{channel:"singer",page:"list",key:"all_all_all",pagesize:200,pagenum:1,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0}),T).then(function(e){0===e.code&&(t.singers=t.normalizeSinger(e.data.list))})},methods:m()({normalizeSinger:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,s){var n=t.Findex;e[n]||(e[n]={title:n,items:[]}),e[n].items.push(new $({name:t.Fsinger_name,id:t.Fsinger_mid}))});var s=[],n=[];for(var i in e){var r=e[i];r.title.match(/[a-zA-Z]/)?s.push(r):"热门"===r.title&&n.push(r)}return s.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),n.concat(s)},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)}},Object(v.d)({setSinger:"SET_SINGER"}),{handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.singer.style.bottom=e,this.$refs.list.refresh()}})},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"singer",staticClass:"singer"},[e("listview",{ref:"list",attrs:{data:this.singers},on:{select:this.selectSinger}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]},st=s("VU/8")(tt,et,!1,function(t){s("zfXV")},"data-v-3d9f398a",null).exports,nt={mixins:[W],data:function(){return{topList:[]}},created:function(){var t=this;n("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",j()({},x,{platform:"h5",needNewCode:1,_:1514257416758}),T).then(function(e){0===e.code&&(t.topList=e.data.topList)})},components:{scroll:B},methods:m()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.rank.style.bottom=e,this.$refs.toplist.refresh()},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)}},Object(v.d)({setTopList:"SET_TOP_LIST"}))},it={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"rank",staticClass:"rank"},[s("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[s("ul",t._l(t.topList,function(e){return s("li",{staticClass:"item",on:{click:function(s){t.selectItem(e)}}},[s("div",{staticClass:"icon"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),s("ul",{staticClass:"songlist"},t._l(e.songList,function(e,n){return s("li",{staticClass:"song"},[s("span",[t._v(t._s(n+1))]),t._v(" "),s("span",[t._v(t._s(e.songname)+"-"+t._s(e.singername))])])}))])}))]),t._v(" "),s("router-view")],1)},staticRenderFns:[]},rt=s("VU/8")(nt,it,!1,function(t){s("Wx8j")},"data-v-691f7bd4",null).exports,at={props:{placeholder:{type:String,default:"搜索歌曲、歌手"}},data:function(){return{query:""}},methods:{clear:function(){this.query=""},setQuery:function(t){this.query=t}},created:function(){var t=this;this.$watch("query",function(e){t.$emit("query",e)})}},ot={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-box"},[s("i",{staticClass:"icon-search"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"query",staticClass:"box",attrs:{placeholder:t.placeholder},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],staticClass:"icon-dismiss",on:{click:t.clear}})])},staticRenderFns:[]},ct=s("VU/8")(at,ot,!1,function(t){s("iNi/")},"data-v-80ca5bf6",null).exports,lt={param:"callback"},ut=function t(e){var s=e.id,n=e.mid,i=e.singer,r=e.name,a=e.album,o=e.duration,c=e.image,l=e.url;Y()(this,t),this.id=s,this.mid=n,this.singer=i,this.name=r,this.album=a,this.duration=o,this.image=c,this.url=l},ht={components:{scroll:B,loading:Z},props:{query:{type:String,default:""},showSinger:{type:Boolean,default:!0}},data:function(){return{page:1,result:[],pullup:!0,hasMore:!0}},methods:m()({search:function(){var t=this;this.hasMore=!0,this.page=1;var e=[];i(this.query,this.page,this.showSinger).then(function(e){if(0===e.code)return t._checkMore(e.data),e.data}).then(function(s){s.zhida&&s.zhida.singerid&&e.push(m()({},s.zhida,{type:"singer"})),s.song.list.forEach(function(t){r(t.songmid).then(function(t){return t.data.items}).then(function(s){t.songid&&t.albummid&&e.push(a(t,s))})}),t.result=e})},getIconCls:function(t){return"singer"===t.type?"icon-mine":"icon-music"},getDisplayName:function(t){return"singer"===t.type?t.singername:t.name+"-"+t.singer},searchMore:function(){var t=this;this.hasMore&&(this.page++,i(this.query,this.page,this.showSinger).then(function(e){if(0===e.code)return t._checkMore(e.data),e.data}).then(function(e){e.song.list.forEach(function(e){r(e.songmid).then(function(t){return t.data.items}).then(function(s){e.songid&&e.albummid&&t.result.push(a(e,s))})})}))},_checkMore:function(t){var e=t.song;(!e.list.length||e.curnum+20*e.curpage>e.totalnum)&&(this.hasMore=!1)},selectItem:function(t){if("singer"===t.type){var e=new $({id:t.singermid,name:t.singername});this.$router.push({path:"/search/"+e.id}),this.setSinger(e)}else this.insertSong(t)}},Object(v.d)({setSinger:"SET_SINGER"}),Object(v.b)(["insertSong"]),{refresh:function(){this.$refs.suggest.refresh()}}),watch:{query:function(){this.search()}}},dt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("scroll",{ref:"suggest",staticClass:"suggest",attrs:{data:t.result,pullup:t.pullup},on:{scrollToEnd:t.searchMore}},[s("ul",{staticClass:"suggest-list"},[t._l(t.result,function(e){return s("li",{staticClass:"suggest-item",on:{click:function(s){t.selectItem(e)}}},[s("div",{staticClass:"icon"},[s("i",{class:t.getIconCls(e)})]),t._v(" "),s("div",{staticClass:"name"},[s("p",{staticClass:"text",domProps:{innerHTML:t._s(t.getDisplayName(e))}})])])}),t._v(" "),s("loading",{directives:[{name:"show",rawName:"v-show",value:t.hasMore,expression:"hasMore"}]})],2)])},staticRenderFns:[]},ft={mixins:[W],components:{searchBox:ct,suggest:s("VU/8")(ht,dt,!1,function(t){s("WGWz")},"data-v-5ba6999c",null).exports},data:function(){return{hotKey:[],query:""}},created:function(){var t=this;n("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",j()({},x,{format:"json",platform:"h5",needNewCode:1,_:1514344108875}),T).then(function(e){t.hotKey=e.data.hotkey.slice(0,11)})},methods:{addQuery:function(t){this.$refs.searchBox.setQuery(t)},onQueryChange:function(t){this.query=t},handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.searchResult.style.bottom=e,this.$refs.suggest.refresh()}}},pt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-box-wrapper"},[s("search-box",{ref:"searchBox",on:{query:t.onQueryChange}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],staticClass:"shortcut-wrapper"},[s("div",{staticClass:"shortcut"},[s("div",{staticClass:"hot-key"},[s("h1",{staticClass:"title"},[t._v("hot")]),t._v(" "),s("ul",t._l(t.hotKey,function(e){return s("li",{staticClass:"item",on:{click:function(s){t.addQuery(e.k)}}},[s("span",[t._v(t._s(e.k))])])}))])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[s("suggest",{ref:"suggest",attrs:{query:t.query}})],1),t._v(" "),s("router-view")],1)},staticRenderFns:[]},gt=s("VU/8")(ft,pt,!1,function(t){s("nyG0")},null,null).exports,mt={props:{songs:{type:Array,default:[]}},methods:{getDesc:function(t){return t.singer+"·"+t.album},slectItem:function(t,e){this.$emit("select",t,e)}}},vt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"song-list"},[s("ul",t._l(t.songs,function(e,n){return s("li",{staticClass:"item",on:{click:function(s){t.slectItem(e,n)}}},[s("div",{staticClass:"content"},[s("h2",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"desc"},[t._v(t._s(t.getDesc(e)))])])])}))])},staticRenderFns:[]},yt={mixins:[W],components:{scroll:B,songlist:s("VU/8")(mt,vt,!1,function(t){s("2cpj")},"data-v-27f23d96",null).exports,loading:Z},props:{bgImage:{type:String,default:""},title:{type:String,default:""},songs:{type:Array,default:[]}},data:function(){return{bgStyle:{backgroundImage:"url("+this.bgImage+")"},scrollY:0}},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.$refs.bgImage.clientHeight+"px"},methods:m()({back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})}},Object(v.b)(["selectPlay"]),{handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()}}),created:function(){this.probeType=3,this.listenScroll=!0},watch:{scrollY:function(t){var e=Math.max(this.minTransalteY,t);this.$refs.layer.style.transform="translate3d(0,"+e+"px,0)",this.$refs.layer.style.weblitTransform="translate3d(0,"+e+"px,0)";var s=0,n=1,i=Math.abs(t/this.imageHeight);t>0&&(n=1+i,s=10),t<this.minTransalteY?(s=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0),this.$refs.bgImage.style.zIndex=s,this.$refs.bgImage.style.zIndex=s,this.$refs.bgImage.style.transform="scale("+n+")",this.$refs.bgImage.style.weblitTransform="scale("+n+")"}}},At={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:this.back}},[e("i",{staticClass:"icon-back"})]),this._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:this._s(this.title)}}),this._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:this.bgStyle},[e("div",{staticClass:"filter"})]),this._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),this._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{data:this.songs,"listen-scroll":this.listenScroll,"probe-type":this.probeType},on:{scroll:this.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("songlist",{attrs:{songs:this.songs},on:{select:this.selectItem}})],1),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[]},Ct=s("VU/8")(yt,At,!1,function(t){s("IKp5")},"data-v-1a249865",null).exports,bt={data:function(){return{songs:[]}},components:{musiclist:Ct},computed:m()({},Object(v.c)(["singer"]),{title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}}),created:function(){var t=this;console.log(this.singer),this.singer.id||this.$router.back(),function(t){return n("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",j()({},x,{loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:100,songstatus:1}),T)}(this.singer.id).then(function(t){if(0===t.code)return t.data.list}).then(function(e){var s=[];e.forEach(function(t){var e=t.musicData;r(e.songmid).then(function(t){return t.data.items}).then(function(t){e.songid&&e.albummid&&s.push(a(e,t))})}),t.songs=s})}},_t={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("musiclist",{attrs:{songs:this.songs,title:this.title,bgImage:this.bgImage}})],1)},staticRenderFns:[]},wt=s("VU/8")(bt,_t,!1,function(t){s("S22m")},"data-v-e07e456e",null).exports,It={components:{MusicList:Ct},data:function(){return{songs:[]}},computed:m()({},Object(v.c)(["disc"]),{title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}}),created:function(){var t=this;(function(t){var e=j()({},x,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0,loginUin:0,format:"json"});return z.a.get("/api/getSongList",{params:e}).then(function(t){return R.a.resolve(t.data)})})(this.disc.dissid).then(function(e){0===e.code&&(t.songs=t.normalizeSongs(e.cdlist[0].songlist))})},methods:{normalizeSongs:function(t){var e=[];return t.forEach(function(t){r(t.songmid).then(function(t){return t.data.items}).then(function(s){t.songid&&t.albummid&&e.push(a(t,s))})}),e}}},St={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{title:this.title,bgImage:this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]},kt=s("VU/8")(It,St,!1,function(t){s("dv7Q")},"data-v-c0204192",null).exports,qt={components:{MusicList:Ct},computed:m()({},Object(v.c)(["topList"]),{title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:this.topList.picUrl}}),data:function(){return{songs:[]}},created:function(){var t=this;this.topList.id?function(t){return n("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",j()({},x,{format:"json",platform:"h5",needNewCode:1,tpl:3,page:"detail",type:"top",topid:t,_:1514260168147}),T)}(this.topList.id).then(function(e){t.songs=t.normalizeSongs(e.songlist),console.log(t.songs.length)}):this.$router.back()},methods:{normalizeSongs:function(t){var e=[];return t.forEach(function(t){var s=t.data;r(s.songmid).then(function(t){return t.data.items}).then(function(t){s.songid&&s.albummid&&e.push(a(s,t))})}),e}}},xt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{title:this.title,bgImage:this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]},Tt=s("VU/8")(qt,xt,!1,function(t){s("01Or")},"data-v-02fb9b97",null).exports;u.default.use(q.a);var Et,Rt=new q.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:V,children:[{path:":id",component:kt}]},{path:"/singer",component:st,children:[{path:":id",component:wt}]},{path:"/rank",component:rt,children:[{path:":id",component:Tt}]},{path:"/search",component:gt,children:[{path:":id",component:wt}]}]}),Lt="SET_PLAYING_STATE",jt="SET_FULL_SCREEN",Mt="SET_PLAYLIST",Nt="SET_SEQUENCE_LIST",Ot="SET_CURRENT_INDEX",zt=function(t,e){var s=t.commit,n=(t.state,e.list),i=e.index;s(Nt,n),s(Mt,n),s(Ot,i),s(jt,!0),s(Lt,!0)},Ut=function(t,e){var s=t.commit,n=t.state,i=n.playlist.slice(),r=n.sequenceList.slice(),a=n.currentIndex,c=i[a],l=o(i,e);a++,i.splice(a,0,e),l>-1&&(a>l?(i.splice(l,1),a--):i.splice(l+1,1));var u=o(r,c)+1,h=o(r,e);r.splice(u,0,e),h>-1&&(u>h?r.splice(h,1):r.splice(h+1,1)),s(Mt,i),s(Nt,r),s(Ot,a),s(jt,!0),s(Lt,!0)},Dt=function(t){return t.singer},Gt=function(t){return t.playing},Bt=function(t){return t.fullScreen},Pt=function(t){return t.playlist},Ft=function(t){return t.sequenceList},Zt=function(t){return t.mode},Wt=function(t){return t.currentIndex},Jt=function(t){return t.playlist[t.currentIndex]||{}},Qt=function(t){return t.disc},Vt=function(t){return t.topList},Ht={singer:{},playing:!1,fullScreen:!1,playlist:[],sequenceList:[],mode:0,currentIndex:-1,disc:{},topList:{}},Yt=s("bOdI"),$t=s.n(Yt),Kt=(Et={},$t()(Et,"SET_SINGER",function(t,e){t.singer=e}),$t()(Et,Lt,function(t,e){t.playing=e}),$t()(Et,jt,function(t,e){t.fullScreen=e}),$t()(Et,Mt,function(t,e){t.playlist=e}),$t()(Et,Nt,function(t,e){t.sequenceList=e}),$t()(Et,"SET_PLAY_MODE",function(t,e){t.mode=e}),$t()(Et,Ot,function(t,e){t.currentIndex=e}),$t()(Et,"SET_DISC",function(t,e){t.disc=e}),$t()(Et,"SET_TOP_LIST",function(t,e){t.topList=e}),Et);u.default.use(v.a);var Xt=new v.a.Store({actions:c,getters:l,state:Ht,mutations:Kt}),te=s("cTzj"),ee=s.n(te),se=s("Au9i"),ne=s.n(se);s("d8/S"),s("34KM");u.default.use(ne.a),k.a.attach(document.body),u.default.config.productionTip=!1,u.default.use(ee.a),new u.default({el:"#app",router:Rt,store:Xt,render:function(t){return t(I)}})},S22m:function(t,e){},WAac:function(t,e){t.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},WGWz:function(t,e){},Wx8j:function(t,e){},YJec:function(t,e){},"d8/S":function(t,e){},dv7Q:function(t,e){},e8YJ:function(t,e){},"iNi/":function(t,e){},kVrG:function(t,e){},kl57:function(t,e){},nyG0:function(t,e){},sluw:function(t,e){},zfXV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1fb61bb20bfdadd9d703.js.map