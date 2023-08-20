/*!
 DMXzone State Management
 Version: 2.0.0-beta.1
 (c) 2023 Wappler.io
 @build 2023-05-11 16:22:23
 */
dmx.Component("query-manager",{initialData:{data:{}},methods:{set:function(e,t){this.setQueryParam(e,t)},remove:function(e){this.setQueryParam(e)},removeAll:function(){this.setQueryParam()}},render:function(e){this.search=window.location.search,this.updateData=this.updateData.bind(this),window.addEventListener("popstate",this.updateData),window.addEventListener("pushstate",this.updateData),window.addEventListener("replacestate",this.updateData),this.updateData()},updateData:function(){this.search!==window.location.search&&(this.search=window.location.search,this.set("data",this.parseQuery()))},setQueryParam:function(e,t){let o=!1,n=dmx.clone(this.data.data);if(null==t?null==e?(n={},o=!0):n[e]&&(delete n[e],o=!0):n[e]!=t&&(n[e]=t,o=!0),o)if(window.URLSearchParams){var a=new URL(window.location);a.search=new URLSearchParams(n),window.history.pushState(null,null,a)}else window.history.pushState(null,null,window.location.pathname+this.buildQuery(n)+window.location.hash)},buildQuery:function(e){const t=Object.keys(e);return t.length?"?"+t.reduce((function(t,o){return t&&(t+="&"),t+=encodeURIComponent(o)+"="+encodeURIComponent(e[o])}),""):""},parseQuery:function(){return this.search.replace(/^\?/,"").split("&").reduce((function(e,t){const o=t.replace(/\+/g," ").split("=");return o[0]&&(e[decodeURIComponent(o[0])]=decodeURIComponent(o[1]||"")),e}),{})}}),dmx.Component("cookie-manager",{initialData:function(){return this.cookie=document.cookie,{data:this.getCookie()}},methods:{set:function(e,t,o){this.setCookie(e,t,o)},remove:function(e,t){(t=t||{}).expires="1970-01-01T00:00:00Z",this.setCookie(e,"",t)},removeAll:function(e){(e=e||{}).expires="1970-01-01T00:00:00Z",Object.keys(this.data.data).forEach((function(t){this.setCookie(t,"",e)}))}},getCookie:function(){return this.cookie.split(/;\s*/).reduce((function(e,t){var o=t.indexOf("=");return e[decodeURIComponent(t.substr(0,o))]=decodeURIComponent(t.substr(o+1)),e}),{})},setCookie:function(e,t,o){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;(o=o||{}).path=o.path||"/";var n=(e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape))+"="+(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent));o.expires&&("number"==typeof o.expires&&(o.expires=Date.now()+864e5*o.expires),n+="; expires="+new Date(o.expires).toUTCString()),o.domain&&(n+="; domain="+o.domain),o.path&&(n+="; path="+o.path),o.secure&&(n+="; secure"),document.cookie=n,this.cookie=document.cookie,this.set("data",this.getCookie())}}),dmx.Component("local-manager",{initialData:{data:{}},methods:{set:function(e,t){const o=JSON.stringify(t);null!=o?window.localStorage.setItem("dmxState-"+e,o):window.localStorage.removeItem("dmxState-"+e),this.getData()},remove:function(e){window.localStorage.removeItem("dmxState-"+e),this.getData()},removeAll:function(){Object.keys(window.localStorage).forEach((function(e){e.startsWith("dmxState-")&&window.localStorage.removeItem(e)})),this.getData()}},render:function(e){this.getData()},getData:function(){this.set("data",Object.keys(window.localStorage).reduce((function(e,t){if(t.startsWith("dmxState-"))try{e[t.substr(9)]=JSON.parse(window.localStorage.getItem(t))}catch(e){console.warn("Error parsing JSON: "+window.localStorage.getItem(t))}return e}),{}))}}),dmx.Component("session-manager",{initialData:{data:{}},methods:{set:function(e,t){const o=JSON.stringify(t);null!=o?window.sessionStorage.setItem("dmxState-"+e,o):window.sessionStorage.removeItem("dmxState-"+e),this.getData()},remove:function(e){window.sessionStorage.removeItem("dmxState-"+e),this.getData()},removeAll:function(){Object.keys(window.sessionStorage).forEach((function(e){e.startsWith("dmxState-")&&window.sessionStorage.removeItem(e)})),this.getData()}},render:function(e){this.getData()},getData:function(){this.set("data",Object.keys(window.sessionStorage).reduce((function(e,t){if(t.startsWith("dmxState-"))try{e[t.substr(9)]=JSON.parse(window.sessionStorage.getItem(t))}catch(e){console.warn("Error parsing JSON: "+window.sessionStorage.getItem(t))}return e}),{}))}});
//# sourceMappingURL=../maps/dmxStateManagement.js.map
