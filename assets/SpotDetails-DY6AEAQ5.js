import{g as oe,u as ae,a as ie,r as v,b as le,c as ce,j as t,d as de,p as ue,L as fe,F as pe,e as xe,f as he,h as me,A as ge,B as O}from"./index-DKBlHxXP.js";var B={exports:{}};B.exports;var I;function ve(){return I||(I=1,function(L){var N=function(){var b=String.fromCharCode,_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",R="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",E={};function C(s,r){if(!E[s]){E[s]={};for(var l=0;l<s.length;l++)E[s][s.charAt(l)]=l}return E[s][r]}var y={compressToBase64:function(s){if(s==null)return"";var r=y._compress(s,6,function(l){return _.charAt(l)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(s){return s==null?"":s==""?null:y._decompress(s.length,32,function(r){return C(_,s.charAt(r))})},compressToUTF16:function(s){return s==null?"":y._compress(s,15,function(r){return b(r+32)})+" "},decompressFromUTF16:function(s){return s==null?"":s==""?null:y._decompress(s.length,16384,function(r){return s.charCodeAt(r)-32})},compressToUint8Array:function(s){for(var r=y.compress(s),l=new Uint8Array(r.length*2),o=0,n=r.length;o<n;o++){var m=r.charCodeAt(o);l[o*2]=m>>>8,l[o*2+1]=m%256}return l},decompressFromUint8Array:function(s){if(s==null)return y.decompress(s);for(var r=new Array(s.length/2),l=0,o=r.length;l<o;l++)r[l]=s[l*2]*256+s[l*2+1];var n=[];return r.forEach(function(m){n.push(b(m))}),y.decompress(n.join(""))},compressToEncodedURIComponent:function(s){return s==null?"":y._compress(s,6,function(r){return R.charAt(r)})},decompressFromEncodedURIComponent:function(s){return s==null?"":s==""?null:(s=s.replace(/ /g,"+"),y._decompress(s.length,32,function(r){return C(R,s.charAt(r))}))},compress:function(s){return y._compress(s,16,function(r){return b(r)})},_compress:function(s,r,l){if(s==null)return"";var o,n,m={},w={},c="",S="",x="",g=2,h=3,f=2,d=[],e=0,a=0,i;for(i=0;i<s.length;i+=1)if(c=s.charAt(i),Object.prototype.hasOwnProperty.call(m,c)||(m[c]=h++,w[c]=!0),S=x+c,Object.prototype.hasOwnProperty.call(m,S))x=S;else{if(Object.prototype.hasOwnProperty.call(w,x)){if(x.charCodeAt(0)<256){for(o=0;o<f;o++)e=e<<1,a==r-1?(a=0,d.push(l(e)),e=0):a++;for(n=x.charCodeAt(0),o=0;o<8;o++)e=e<<1|n&1,a==r-1?(a=0,d.push(l(e)),e=0):a++,n=n>>1}else{for(n=1,o=0;o<f;o++)e=e<<1|n,a==r-1?(a=0,d.push(l(e)),e=0):a++,n=0;for(n=x.charCodeAt(0),o=0;o<16;o++)e=e<<1|n&1,a==r-1?(a=0,d.push(l(e)),e=0):a++,n=n>>1}g--,g==0&&(g=Math.pow(2,f),f++),delete w[x]}else for(n=m[x],o=0;o<f;o++)e=e<<1|n&1,a==r-1?(a=0,d.push(l(e)),e=0):a++,n=n>>1;g--,g==0&&(g=Math.pow(2,f),f++),m[S]=h++,x=String(c)}if(x!==""){if(Object.prototype.hasOwnProperty.call(w,x)){if(x.charCodeAt(0)<256){for(o=0;o<f;o++)e=e<<1,a==r-1?(a=0,d.push(l(e)),e=0):a++;for(n=x.charCodeAt(0),o=0;o<8;o++)e=e<<1|n&1,a==r-1?(a=0,d.push(l(e)),e=0):a++,n=n>>1}else{for(n=1,o=0;o<f;o++)e=e<<1|n,a==r-1?(a=0,d.push(l(e)),e=0):a++,n=0;for(n=x.charCodeAt(0),o=0;o<16;o++)e=e<<1|n&1,a==r-1?(a=0,d.push(l(e)),e=0):a++,n=n>>1}g--,g==0&&(g=Math.pow(2,f),f++),delete w[x]}else for(n=m[x],o=0;o<f;o++)e=e<<1|n&1,a==r-1?(a=0,d.push(l(e)),e=0):a++,n=n>>1;g--,g==0&&(g=Math.pow(2,f),f++)}for(n=2,o=0;o<f;o++)e=e<<1|n&1,a==r-1?(a=0,d.push(l(e)),e=0):a++,n=n>>1;for(;;)if(e=e<<1,a==r-1){d.push(l(e));break}else a++;return d.join("")},decompress:function(s){return s==null?"":s==""?null:y._decompress(s.length,32768,function(r){return s.charCodeAt(r)})},_decompress:function(s,r,l){var o=[],n=4,m=4,w=3,c="",S=[],x,g,h,f,d,e,a,i={val:l(0),position:r,index:1};for(x=0;x<3;x+=1)o[x]=x;for(h=0,d=Math.pow(2,2),e=1;e!=d;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=l(i.index++)),h|=(f>0?1:0)*e,e<<=1;switch(h){case 0:for(h=0,d=Math.pow(2,8),e=1;e!=d;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=l(i.index++)),h|=(f>0?1:0)*e,e<<=1;a=b(h);break;case 1:for(h=0,d=Math.pow(2,16),e=1;e!=d;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=l(i.index++)),h|=(f>0?1:0)*e,e<<=1;a=b(h);break;case 2:return""}for(o[3]=a,g=a,S.push(a);;){if(i.index>s)return"";for(h=0,d=Math.pow(2,w),e=1;e!=d;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=l(i.index++)),h|=(f>0?1:0)*e,e<<=1;switch(a=h){case 0:for(h=0,d=Math.pow(2,8),e=1;e!=d;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=l(i.index++)),h|=(f>0?1:0)*e,e<<=1;o[m++]=b(h),a=m-1,n--;break;case 1:for(h=0,d=Math.pow(2,16),e=1;e!=d;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=l(i.index++)),h|=(f>0?1:0)*e,e<<=1;o[m++]=b(h),a=m-1,n--;break;case 2:return S.join("")}if(n==0&&(n=Math.pow(2,w),w++),o[a])c=o[a];else if(a===m)c=g+g.charAt(0);else return null;S.push(c),o[m++]=g+c.charAt(0),n--,g=c,n==0&&(n=Math.pow(2,w),w++)}}};return y}();L!=null?L.exports=N:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return N})}(B)),B.exports}var be=ve();const ye=oe(be),we=L=>ye.decompress(L);function Se({deleteSpot:L,claimSpot:N,followSpot:b,unFollowSpot:_,spotSpot:R,spotAction:E,selectedAction:C,getConnections:y,getRelations:s}){const{id:r}=ae();console.log("SpotDetails called with id:",r);const{isLoggedIn:l,openModal:o}=ie(),[n,m]=v.useState(null);le();const w=ce(),c=w.data||{},S=w.error;if(v.useEffect(()=>{S&&m(S)},[S]),n)return t.jsxs("div",{children:["Error: ",n]});const[x,g]=v.useState(!0);v.useEffect(()=>{c&&g(!1)},[c]),de();const h=localStorage.getItem("token"),f=h?ue(h):null,d=f?f.userId:null,[e,a]=v.useState([{id:"spot",label:"Spot",isActive:!1,reversible:!1},{id:"follow",label:"Follow",isActive:!1,reversible:!0},{id:"like",label:"Like",isActive:!1,reversible:!0},{id:"buy",label:"Buy",isActive:!1,reversible:!0},{id:"sell",label:"Sell",isActive:!1,reversible:!0}]);v.useState(!1),v.useState([!1]);const i=c?c.data.claimable:!1,J=c?c.data.claimedBy:[],[K,H]=v.useState(!!J),G=c&&(c.data.slug||"").replaceAll("_"," "),D=c?c.data.types:null;console.log("types",c.data.types);const Q=c?c.data.description||we(c.data.abstract):null;v.useState({types:[],relations:[]});const[U,W]=v.useState([]),[X,Y]=v.useState([]),[T,P]=v.useState(0),[F]=v.useState(25),[V,ee]=v.useState(!0),[te,z]=v.useState(!1),[$,se]=v.useState({description:!1,relations:!1}),re=u=>{se(p=>({...p,[u]:!p[u]}))},Z=async(u,p,j,A)=>{try{const k=await s(u,p,j,A);k.length>0?(Y(M=>[...M,...k]),P(A+j)):ee(!1)}catch(k){console.error(`Failed to fetch ${p}:`,k)}};v.useEffect(()=>{Z(c.data.slug,"relations",F,T)},[c.data.slug]);const q=async()=>{try{await requestClaimSpot(c.slug,d),H(!0),O.success("Spot claimed successfully!")}catch(u){O.error(`Claim failed: ${u}`)}},ne=async u=>{if(!l){o();return}try{const p=e.find(k=>k.id===u);if(!p)return;if(!p.reversible&&p.isActive){O.error("This action cannot be undone.");return}const j=!p.isActive,A=await E(u,c.data.slug,d,j);a(k=>k.map(M=>M.id===u?{...M,isActive:j}:M)),O.success(`${p.label} ${j?"activated":"deactivated"}!`)}catch(p){O.error(`Action failed: ${p.message}`)}};return v.useEffect(()=>{const u=e.map(p=>{const j=p.id;console.log("actionKey:",j),console.log("actions:",c.data);const A=c.data.actions[j]||[];return{...p,isActive:Array.isArray(A)&&A.includes(d)}});a(u)},[c.data,d]),v.useEffect(()=>{l&&(async()=>{z(!0);try{const p=await y(c.data._id);W(p.connections)}catch(p){m(p.message)}finally{z(!1)}})()},[l,d]),x?t.jsx("div",{children:"Loading..."}):!c||Object.keys(c).length===0?t.jsx("div",{children:"Error: Spot data not available"}):t.jsxs(t.Fragment,{children:[t.jsx("section",{className:"dark:bg-gray-800 ",children:t.jsx("div",{className:"container m-auto py-6 px-6",children:t.jsxs(fe,{to:"/spots",className:"text-indigo-500 dark:text-gray-300 hover:text-indigo-600 flex items-center",rel:"nofollow",children:[t.jsx(pe,{className:"fas fa-arrow-left mr-2 dark:text-gray-300"})," Back to Spot Listings"]})})}),t.jsx("section",{className:"bg-indigo-50 dark:bg-gray-600",children:t.jsx("div",{className:"container m-auto py-10 px-6",children:t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-70/30 w-full gap-6",children:[t.jsxs("main",{children:[t.jsxs("div",{className:"max-w-6xl mx-auto p-6",children:[t.jsx("h1",{className:"text-4xl font-bold text-left text-gray-800 dark:text-gray-200 mb-2",children:G}),t.jsx("div",{className:"mb-2",children:D&&D.length>0?t.jsx("ul",{className:"flex flex-wrap list-none",children:D.map((u,p)=>t.jsx("li",{className:"text-sm bg-white px-2 mr-2 rounded-lg border border-indigo-400 text-center md:text-left",children:u},p))}):t.jsx("p",{children:"No types available"})})]}),t.jsx("div",{className:"max-w-6xl mx-auto p-6",children:l?t.jsxs(t.Fragment,{children:[t.jsx("h1",{className:"text-4xl font-bold text-center text-gray-800 mb-6",children:"Spot Rankings"}),te?t.jsx("p",{children:"Loading..."}):n?t.jsx("p",{className:"text-red-500",children:n}):t.jsx("div",{children:U.length?U.map((u,p)=>t.jsxs("div",{className:"mb-8 p-6 border rounded-lg shadow-lg bg-gradient-to-r from-purple-100 via-blue-100 to-green-100x",children:[t.jsx("h2",{className:"text-2xl font-semibold text-gray-700 mb-4",children:t.jsx("span",{className:"capitalize",children:u.action})}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:u.users.length?u.users.map((j,A)=>t.jsx("div",{className:"flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm min-h-20 max-h-10",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold",children:j.userName.toString().slice(0,1)}),t.jsxs("div",{className:"ml-4",children:[t.jsx("p",{className:"text-lg font-medium text-gray-800",children:j.userName.toString()}),t.jsxs("div",{className:"inline-flex items-center",children:[t.jsx(xe,{}),t.jsx("p",{className:"text-sm text-gray-500",children:j.location})]})]}),t.jsx("div",{className:"text-right",children:t.jsxs("p",{className:"text-xl font-bold text-gray-700",children:["Score: ",j.score]})})]})},A)):t.jsx("p",{children:"No users found."})})]},p)):t.jsx("p",{children:"No connections found."})})]}):t.jsx("div",{children:t.jsx("p",{className:"dark:text-white",children:"Please login to view Spot Connections."})})}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 mt-4 rounded-lg shadow-md text-center md:text-left",children:[t.jsx("h1",{className:"dark:text-gray-200 text-3xl font-bold mb-4",children:"Description"}),t.jsx("div",{className:`text-gray-500 mb-4 flex align-middle justify-center md:justify-start overflow-hidden transition-all duration-300 ${$.description?"h-auto":"h-40"}`,children:t.jsx("p",{className:"text-blue-900 dark:text-blue-100",children:Q})}),t.jsx("button",{onClick:()=>re("description"),className:"mt-2 text-indigo-500 hover:text-indigo-700 font-semibold",children:$.description?"Show Less":"Read More"})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 mt-4 rounded-lg shadow-md text-center md:text-left",children:[t.jsx("h1",{className:"dark:text-gray-200 text-3xl font-bold mb-4",children:"Relations"}),t.jsx("div",{className:"flex flex-wrap mb-4 transition-all duration-300 h-auto",children:X.map((u,p)=>t.jsx("div",{className:"bg-gray-400 dark:bg-gray-700 mb-2 mr-2 px-2 py-2 rounded-lg",children:t.jsx("p",{className:"dark:text-gray-200",children:t.jsx("a",{href:`/spots/${u.slug}`,className:"hover:text-indigo-500",children:u.slug.replaceAll("_"," ")})})},p))}),V&&t.jsx("button",{onClick:()=>Z(c.data.slug,"relations",F,T),className:"mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700",children:"More"})]})]}),t.jsx("aside",{children:t.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md",children:[t.jsx("h3",{className:"dark:text-gray-200 text-xl font-bold mb-6",children:"Spot Actions"}),t.jsx("div",{className:"action-container",children:e.map(u=>t.jsxs("div",{onClick:()=>ne(u.id),className:"dark:text-gray-200 cursor-pointer flex justify-center items-center mt-4",children:[t.jsxs("h4",{children:[u.isActive?u.label==="Follow"?"Unfollow":u.label==="Like"?"Unlike":u.label==="Spot"?"Spotted":u.label:u.label,":"]}),u.isActive?t.jsx(he,{className:"text-green-500 text-2xl hover:scale-110 transition-transform ml-2"}):t.jsx(me,{className:"text-gray-400 text-2xl hover:scale-110 transition-transform ml-2"})]},u.id))}),c.isClaimable&&!K&&t.jsx("button",{onClick:q,className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block",children:"Claim Spot"}),i&&t.jsx("button",{onClick:q,className:"bg-red-500 hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block",children:"Claim Spot"})]})})]})})})]})}async function Ne({params:L}){const N=L.id;localStorage.getItem(N);try{const b=await fetch(ge+`single-spot?id=${N}`);if(console.log("response from server",b),!b.ok)throw new Error("Failed to fetch data");const _=await b.json();return console.log("data for cache",_),localStorage.setItem(N,JSON.stringify(_)),{data:_||{}}}catch(b){return console.error("Error fetching spot data:",b),{data:{},error:b.message}}}export{Se as SpotDetails,Ne as spotDetailsLoader};
