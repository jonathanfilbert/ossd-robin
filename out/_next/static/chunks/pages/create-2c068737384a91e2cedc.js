_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"5jtQ":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),l=n("vOnD"),c=n("w7S9"),s=n("xQut"),u=n("nOHt"),d=n("apO0"),f=n("EjJx"),m=n("AoAR"),p=a.a.createElement,w=l.a.div.withConfig({displayName:"create__Wrapper",componentId:"sc-1b8hfy1-0"})(["background-color:#f9fbfe;@keyframes breathe{from{opacity:1;transform:rotate(0deg);}to{opacity:0;transform:rotate(360deg);}}.spin-slowly{animation:breathe 3s ease-in-out infinite;animation-direction:alternate;}"]);t.default=function(){var e=Object(r.useState)(""),t=e[0],n=e[1],a=Object(r.useState)(""),o=a[0],l=a[1],g=Object(u.useRouter)(),h=function(e){var t=e.origin||e.originalEvent.origin;e.data;m.b.startsWith(t)&&(localStorage.removeItem("uimeet-token"),window.removeEventListener("message",(function(){return null})),g.push("/"))};return Object(r.useEffect)((function(){if(window.addEventListener("message",h,!1),null!==localStorage.getItem("uimeet-token")){var e=localStorage.getItem("uimeet-token"),t=Object(f.a)(e);l(t.cas.name)}else g.push("/")}),[]),p(w,null,p(i.a,null,p("title",null,"uimeet | Create Meeting")),p(d.a,null,p("div",{className:"w-100 flex flex-row items-center justify-center h-64 md:h-auto"},p(c.default,{className:"max-h-full w-auto spin-slowly"})),p("div",{className:"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 "},"Hello, ",o,"."),p("div",{className:"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 my-2 "},p("input",{className:"appearance-none rounded w-full md:w-1/2 py-2 px-3 text-muted leading-tight text-lg focus:shadow-md focus:outline-none",type:"text",placeholder:"Meeting Room Name",value:t,onChange:function(e){return n(e.target.value)}})),p("div",{className:"w-100 flex flex-row justify-center mt-4"},p(s.a,{onClick:function(){return function(){if(t.split(" ").length>1){var e=t.split(" ").join("-");g.push({pathname:"/meet",query:{meetId:e}})}else g.push({pathname:"/meet",query:{meetId:t}})}()}},"CREATE MEETING")),p("div",{className:"self-center mx-3 mt-2 main__text text-muted cursor-pointer",onClick:function(){return function(){var e=window.open(m.b,"_blank"),t=setInterval((function(){e.closed&&clearInterval(t),e.postMessage("JOFIL",m.b)}),1e3)}()}},"LOG OUT")))}},EjJx:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype=new Error,r.prototype.name="InvalidCharacterError";var a="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,a,o=0,i=0,l="";a=t.charAt(i++);~a&&(n=o%4?64*n+a:a,o++%4)?l+=String.fromCharCode(255&n>>(-2*o&6)):0)a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a);return l};function o(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(a(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return a(t)}}function i(e){this.message=e}i.prototype=new Error,i.prototype.name="InvalidTokenError",t.a=function(e,t){if("string"!=typeof e)throw new i("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(o(e.split(".")[n]))}catch(e){throw new i("Invalid token specified: "+e.message)}}},gu6L:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return n("5jtQ")}])}},[["gu6L",0,1,2,3]]]);