(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3gP5Y",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2nRDd"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__15AyM",Modal:"Modal_Modal__39S7m"}},14:function(e,t,a){e.exports={Button:"Button_Button__3AN3l"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3gTEt"}},16:function(e,t,a){e.exports={wrapper:"Container_wrapper__1DpfW"}},22:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),c=a(8),l=a.n(c),i=(a(22),a(3)),s=a(4),u=a(6),h=a(5),d=a(7),g=a.n(d),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.getValue=function(t){e.setState({value:t.target.value})},e.onSubmitHandler=function(t){t.preventDefault(),e.props.onSubmitHandler(e.state.value),e.setState({value:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.value;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(n.jsx)("header",{className:g.a.Searchbar,children:Object(n.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.onSubmitHandler,children:[Object(n.jsx)("input",{className:g.a.SearchFormInput,type:"text",onChange:this.getValue,value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"}),Object(n.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(n.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})})]})})}}]),a}(r.Component),b=a(13),p=a(11),j=a.n(p);function v(e){var t=e.smallImg,a=e.bigImg,r=e.tags;return Object(n.jsx)("li",{className:j.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:t,alt:r,"data-big":a,className:j.a.ImageGalleryItemImage,onClick:e.onClick})})}var f=a(14),O=a.n(f);function y(e){return Object(n.jsx)("button",{type:"button",className:O.a.Button,onClick:e.onPageChange,children:"Load more"})}var S=a(9),I=a.n(S),x=a.p+"static/media/cat.c79bab9c.jpg",_=a(15),w=a.n(_);var C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,status:"idle",page:1},e.onPageChange=function(){e.setState((function(e){return{page:e.page+1}}))},e.imageClickHandler=function(t){var a=t.target,n=a.dataset,r=a.alt;e.props.getContentForModal(n.big,r)},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.query,r=this.props.query,o=this.state.page;n!==r&&this.setState({images:[]}),n===r&&t.page===this.state.page||(this.setState({status:"pending"}),function(e,t){var a=["q=".concat(e),"page=".concat(t),"key=".concat("18591857-af67bc0007236afb4a9ddb74e"),"image_type=photo","orientation=horizontal","per_page=12"];return fetch("".concat("https://pixabay.com/api/","?").concat(a.join("&"))).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a ".concat(e)))}))}(r,o).then((function(e){return a.setState((function(t){return{images:[].concat(Object(b.a)(t.images),Object(b.a)(e.hits)),status:"resolved"}}))})).catch((function(e){return a.setState({error:e,status:"rejected"})}))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,r=t.status;return 0===a.length&&"resolved"===r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"\u041f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(n.jsx)("p",{children:"\u041d\u0435 \u043e\u0433\u043e\u0447\u0430\u0439\u0442\u0435\u0441\u044c. \u0412\u043e\u0442 \u0412\u0430\u043c \u043a\u043e\u0442\u0438\u043a =)"}),Object(n.jsx)("img",{src:x,alt:"cat",width:"500"})]}):"resolved"===r||"pending"===r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:w.a.ImageGallery,children:a.map((function(t){var a=t.id,r=t.webformatURL,o=t.largeImageURL,c=t.tags;return Object(n.jsx)(v,{smallImg:r,bigImg:o,tags:c,onClick:e.imageClickHandler},a)}))}),"pending"===r?Object(n.jsx)(I.a,{type:"RevolvingDot",color:"#00BFFF",height:100,width:100}):Object(n.jsx)(y,{onPageChange:this.onPageChange})]}):"idle"===r?Object(n.jsx)("h1",{children:"\u0414\u0430\u0432\u0430\u0439 \u0438\u0441\u043a\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 =)"}):"rejected"===r?Object(n.jsx)("h1",{children:"Oh no =("}):void 0}}]),a}(r.Component),F=a(16),k=a.n(F);function M(e){return Object(n.jsx)("div",{className:k.a.wrapper,children:e.children})}var B=a(12),L=a.n(B),N=document.querySelector("#modal"),G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageStatus:"loading"},e.toggleModal=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.toggleModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.toggleModal)}},{key:"handleImageLoaded",value:function(){this.setState({imageStatus:"loaded"})}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(c.createPortal)(Object(n.jsx)("div",{className:L.a.Overlay,onClick:this.handleBackdropClick,children:Object(n.jsxs)("div",{className:L.a.Modal,children:[Object(n.jsx)("img",{src:t,alt:a,onLoad:this.handleImageLoaded.bind(this)}),"loading"===this.state.imageStatus?Object(n.jsx)(I.a,{type:"RevolvingDot",color:"#00BFFF",height:100,width:100}):null]})}),N)}}]),a}(r.Component),H=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",showModal:!1,bigImage:null,alt:null},e.onSubmitHandler=function(t){e.setState({query:t})},e.getContentForModal=function(t,a){e.setState({bigImage:t,alt:a,showModal:!0})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.query,a=e.showModal,r=e.bigImage,o=e.alt;return Object(n.jsxs)(M,{children:[Object(n.jsx)(m,{onSubmitHandler:this.onSubmitHandler}),Object(n.jsx)(C,{query:t,getContentForModal:this.getContentForModal}),a&&Object(n.jsx)(G,{src:r,alt:o,onClose:this.toggleModal})]})}}]),a}(r.Component),D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};l.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root")),D()},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__29I8L",SearchForm:"Searchbar_SearchForm__138-M",SearchFormButton:"Searchbar_SearchFormButton__2FKXY",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1K3vT",SearchFormInput:"Searchbar_SearchFormInput__1DsAl"}}},[[44,1,2]]]);
//# sourceMappingURL=main.900ea549.chunk.js.map