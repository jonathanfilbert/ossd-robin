_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"5jtQ":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),s=n("vOnD"),l=n("w7S9"),u=n("xQut"),c=n("nOHt"),m=n("apO0"),d=n("EjJx"),f=n("AoAR"),p=n("OVs6"),g=r.a.createElement,w=s.a.div.withConfig({displayName:"create__Wrapper",componentId:"sc-1b8hfy1-0"})(["background-color:#f9fbfe;@keyframes breathe{from{opacity:1;transform:rotate(0deg);}to{opacity:0;transform:rotate(360deg);}}.spin-slowly{animation:breathe 3s ease-in-out infinite;animation-direction:alternate;}"]);t.default=function(){var e=Object(a.useState)(""),t=e[0],n=e[1],r=Object(a.useState)(""),o=r[0],s=r[1],x=Object(a.useState)([]),h=x[0],v=x[1],y=Object(c.useRouter)(),b=function(e){var t=e.origin||e.originalEvent.origin;"ok"===e.data&&(sessionStorage.removeItem("uimeet-token"),window.removeEventListener("message",(function(){return null})),y.push("/")),f.b.startsWith(t)&&e.data.startsWith("ey")&&(sessionStorage.removeItem("uimeet-token"),window.removeEventListener("message",(function(){return null})),y.push("/"))};return Object(a.useEffect)((function(){if(window.addEventListener("message",b,!1),null!==sessionStorage.getItem("uimeet-token")){null!==sessionStorage.getItem("uimeet-history")?v(JSON.parse(sessionStorage.getItem("uimeet-history"))):sessionStorage.setItem("uimeet-history",JSON.stringify([]));var e=sessionStorage.getItem("uimeet-token"),t=Object(d.a)(e);s(t.cas.name)}else y.push("/")}),[]),Object(a.useEffect)((function(){console.log("ini meeting",h)}),[h]),g(w,null,g(i.a,null,g("title",null,"uimeet | Create Meeting")),g(m.a,null,g("div",{className:"w-100 flex flex-row items-center justify-center h-64 md:h-auto"},g(l.default,{className:"max-h-full w-auto spin-slowly"})),g("div",{className:"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 "},"Hello, ",o,"."),g("div",{className:"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 my-2 "},g("input",{className:"appearance-none rounded w-full md:w-1/2 py-2 px-3 text-muted leading-tight text-lg focus:shadow-md focus:outline-none",type:"text",placeholder:"Meeting Room Name",value:t,onChange:function(e){return n(e.target.value)}})),g("div",{className:"w-100 flex flex-row justify-center mt-4"},g(u.a,{onClick:function(){return function(){if(t.split(" ").length>1){var e=t.split(" ").join("-");y.push({pathname:"/meet",query:{meetId:e}})}else y.push({pathname:"/meet",query:{meetId:t}})}()}},"CREATE MEETING")),g("div",{className:"self-center mx-3 mt-2 main__text text-muted cursor-pointer",onClick:function(){return function(){var e=window.open(f.b,"_blank"),t=setInterval((function(){e.closed&&clearInterval(t),e.postMessage("JOFIL",f.b)}),1e3)}()}},"LOG OUT"),g("div",{className:"w-100 min-h-screen"},h.length>0?g(p.default,{meetings:h}):g("div",null,"Empty."))))}},EjJx:function(e,t,n){"use strict";function a(e){this.message=e}a.prototype=new Error,a.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new a("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,o=0,i=0,s="";r=t.charAt(i++);~r&&(n=o%4?64*n+r:r,o++%4)?s+=String.fromCharCode(255&n>>(-2*o&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return s};function o(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return r(t)}}function i(e){this.message=e}i.prototype=new Error,i.prototype.name="InvalidTokenError",t.a=function(e,t){if("string"!=typeof e)throw new i("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(o(e.split(".")[n]))}catch(e){throw new i("Invalid token specified: "+e.message)}}},OVs6:function(e,t,n){"use strict";n.r(t);var a=n("nOHt"),r=n("q1tI"),o=n.n(r).a.createElement;t.default=function(e){var t=e.meetings,n=void 0===t?[]:t,r=Object(a.useRouter)();return o("div",{className:" max-w-sm m-auto flex flex-col justify-center mt-10 px-5 main__text"},o("span",{className:"main__bold text-2xl text-center mb-4"},"My Meeting History"),n.length>0&&n.map((function(e,t){return o("div",{onClick:function(){return r.push("/meet?meetId=".concat(e))},className:"shadow-xs w-full h-auto bg-white  hover:shadow-lg transition-all duration-100 rounded-md px-6 py-2 text-black cursor-pointer my-2",key:t},o("div",{className:"flex flex-col"},o("div",{className:" text-xs"},"ROOM NAME"),o("div",{className:"text-2xl"},e),o("div",{className:"w-full flex flex-row justify-end"},o("div",{className:"py-2 px-3 rounded-md text-main hover:bg-orange-100 focus:bg-orange-200 "},"JOIN"))))})))}},gu6L:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return n("5jtQ")}])}},[["gu6L",0,1,2,3]]]);