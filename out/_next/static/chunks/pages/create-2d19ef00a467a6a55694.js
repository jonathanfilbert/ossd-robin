_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"5jtQ":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),s=n("vOnD"),l=n("w7S9"),c=n("xQut"),u=n("nOHt"),m=n("apO0"),d=n("EjJx"),f=n("AoAR"),p=n("OVs6"),g=n("IzYg"),w=r.a.createElement,h=s.a.div.withConfig({displayName:"create__Wrapper",componentId:"sc-1b8hfy1-0"})(["background-color:#f9fbfe;@keyframes breathe{from{opacity:1;transform:rotate(0deg);}to{opacity:0;transform:rotate(360deg);}}.spin-slowly{animation:breathe 3s ease-in-out infinite;animation-direction:alternate;}"]);t.default=function(){var e=Object(a.useState)(""),t=e[0],n=e[1],r=Object(a.useState)(""),o=r[0],s=r[1],x=Object(a.useState)([]),v=x[0],y=x[1],b=Object(u.useRouter)(),N=function(e){var t=e.origin||e.originalEvent.origin;"ok"===e.data&&(sessionStorage.removeItem("uimeet-token"),window.removeEventListener("message",(function(){return null})),b.push("/")),f.b.startsWith(t)&&e.data.startsWith("ey")&&(sessionStorage.removeItem("uimeet-token"),window.removeEventListener("message",(function(){return null})),b.push("/"))};return Object(a.useEffect)((function(){if(window.addEventListener("message",N,!1),null!==sessionStorage.getItem("uimeet-token")){null!==sessionStorage.getItem("uimeet-history")?y(JSON.parse(sessionStorage.getItem("uimeet-history"))):sessionStorage.setItem("uimeet-history",JSON.stringify([]));var e=sessionStorage.getItem("uimeet-token"),t=Object(d.a)(e);s(t.cas.name)}else b.push("/")}),[]),w(h,null,w(i.a,null,w("title",null,"uimeet | Create Meeting")),w(m.a,null,w("div",{className:"w-100 flex flex-row items-center justify-center h-64 md:h-auto"},w(l.default,{className:"max-h-full w-auto spin-slowly"})),w("div",{className:"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 "},"Hello, ",o,"."),w("div",{className:"w-100 flex flex-row justify-center main__normal text-3xl md:text-4xl text-center px-6 md:px-0 my-2 "},w("input",{className:"appearance-none rounded w-full md:w-1/2 py-2 px-3 text-muted leading-tight text-lg focus:shadow-md focus:outline-none",type:"text",placeholder:"Meeting Room Name",value:t,onChange:function(e){return n(e.target.value)}})),w("div",{className:"w-100 flex flex-row justify-center mt-4"},w(c.a,{onClick:function(){return function(){if(t.split(" ").length>1){var e=t.split(" ").join("-");b.push({pathname:"/meet",query:{meetId:e}})}else b.push({pathname:"/meet",query:{meetId:t}})}()}},"CREATE MEETING")),w("div",{className:"self-center mx-3 mt-2 main__text text-muted cursor-pointer",onClick:function(){return function(){var e=window.open(f.b,"_blank"),t=setInterval((function(){e.closed&&clearInterval(t),e.postMessage("JOFIL",f.b)}),1e3)}()}},"LOG OUT"),w("div",{className:"w-100 min-h-screen m-auto mt-10"},w("div",{className:"main__bold text-2xl text-center mb-4"},"My Meeting History"),v.length>0?w(p.default,{meetings:v}):w("div",{className:"text-center mt-24"},w("div",{className:"w-24 m-auto"},w(g.default,null)),w("div",{className:"font-normal mt-3 main__text",style:{color:"#DCE0E5"}},"Start a meeting and it will appear here.")))))}},EjJx:function(e,t,n){"use strict";function a(e){this.message=e}a.prototype=new Error,a.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new a("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,o=0,i=0,s="";r=t.charAt(i++);~r&&(n=o%4?64*n+r:r,o++%4)?s+=String.fromCharCode(255&n>>(-2*o&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return s};function o(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return r(t)}}function i(e){this.message=e}i.prototype=new Error,i.prototype.name="InvalidTokenError",t.a=function(e,t){if("string"!=typeof e)throw new i("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(o(e.split(".")[n]))}catch(e){throw new i("Invalid token specified: "+e.message)}}},IzYg:function(e,t,n){"use strict";n.r(t);var a=n("wx14"),r=n("q1tI"),o=r.createElement;t.default=function(e){return o("svg",Object(a.a)({viewBox:"0 0 293 313",fill:"none"},e),o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M184.808 0c20.533 0 42.083 21.956 42.083 48.995 0 21.143-13.215 30.698-34.155 30.901-.609 7.319-1.626 19.923-1.829 27.852h-5.286c-1.22-13.418-2.44-25.412-4.473-38.83l2.643-3.863c27.649 0 35.171-5.489 35.171-17.89 0-18.5-16.264-27.648-26.429-27.648-2.152 0-3.926.252-5.496.476-1.249.177-2.369.337-3.449.337-6.506 0-11.588-3.253-11.588-9.962C172 3.456 178.506 0 184.808 0zm3.049 147.188c-6.912 0-11.994-5.083-11.994-11.995 0-6.912 5.082-11.994 11.994-11.994s11.995 5.082 11.995 11.994-5.083 11.995-11.995 11.995zm-65.176 164.096c36.331-6.944 56.86-59.252 45.854-116.833-11.005-57.58-49.379-98.63-85.71-91.685-36.33 6.944-56.86 59.252-45.855 116.833 11.006 57.58 49.38 98.629 85.711 91.685zM80.225 214.03c8.375 0 15.163-6.789 15.163-15.164s-6.788-15.164-15.163-15.164-15.164 6.789-15.164 15.164 6.789 15.164 15.164 15.164zm42.964 40.437l-18.954-72.028 41.7 64.446-22.746 7.582zm163.708-62.401c11.771-17.027 3.602-43.107-13.288-54.783-5.184-3.584-12.04-5.107-15.049-.754-2.92 4.225-.155 9.163 5.196 12.862.889.615 1.879 1.151 2.983 1.749 1.39.753 2.959 1.602 4.729 2.826 8.361 5.78 17.757 20.79 9.704 32.439-5.399 7.81-13.976 6.989-36.719-8.733l-3.855.929c-4.169 9.605-8.387 17.852-13.225 26.995l4.348 3.006c3.619-4.877 9.942-12.237 13.63-16.498 17.313 11.779 32.342 13.276 41.546-.038zm-79.498 25.264c-3.009 4.353-1.041 10.443 4.645 14.374 5.686 3.93 12.079 3.62 15.088-.733 3.009-4.352 1.041-10.443-4.645-14.374-5.686-3.93-12.079-3.62-15.088.733zM32.5 18v51.5L68 53l-50 77 14.5-41.5-32.5 16L32.5 18z",fill:"#DCE0E5"}))}},OVs6:function(e,t,n){"use strict";n.r(t);var a=n("nOHt"),r=n("q1tI"),o=n.n(r),i=n("xQut"),s=o.a.createElement;t.default=function(e){var t=e.meetings,n=void 0===t?[]:t,r=Object(a.useRouter)();return s("div",{className:" max-w-sm m-auto flex flex-col justify-center mt-10 px-5 main__text"},n.length>0&&n.map((function(e,t){return s("div",{onClick:function(){return r.push("/meet?meetId=".concat(e))},className:"shadow-xs w-full h-auto bg-white  hover:shadow-lg transition-all duration-100 rounded-md px-6 py-2 text-black cursor-pointer my-2",key:t},s("div",{className:"flex flex-col"},s("div",{className:" text-xs"},"ROOM NAME"),s("div",{className:"text-2xl"},e),s("div",{className:"w-full flex flex-row justify-end"},s("div",{className:"py-2 px-3 rounded-md text-main hover:bg-orange-100 focus:bg-orange-200 "},"JOIN"))))})),s("div",{className:"mt-5"},s(i.a,{onClick:function(){confirm("Are you sure you want to clear your meeting history?")&&(sessionStorage.setItem("uimeet-history",JSON.stringify([])),r.push("/"))}},"Clear")))}},gu6L:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return n("5jtQ")}])}},[["gu6L",0,1,2,3]]]);