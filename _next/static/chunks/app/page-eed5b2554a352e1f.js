(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1251:function(e,t,a){Promise.resolve().then(a.bind(a,5332))},5332:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var s=a(7437),i=a(8475),r=a.n(i),l=a(6691),n=a.n(l);let o=e=>{let{title:t,description:a,ctaText:i,galleryText:r}=e;return(0,s.jsxs)("section",{className:"relative h-screen w-full overflow-hidden",children:[(0,s.jsxs)("div",{className:"absolute inset-0",children:[(0,s.jsx)(n(),{src:"".concat("/ciftlik","/hero-farm.jpg"),alt:"\xc7iftliğimizden genel g\xf6r\xfcn\xfcm",fill:!0,priority:!0,quality:100,className:"object-cover",sizes:"100vw"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-black/70"})]}),(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsxs)("div",{className:"text-center text-white px-4 max-w-4xl mx-auto",children:[(0,s.jsxs)("h1",{className:"text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg",children:[t,(0,s.jsx)("br",{})]}),(0,s.jsx)("p",{className:"text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto drop-shadow-lg",children:a}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[(0,s.jsx)("a",{href:"#contact",className:"bg-accent hover:bg-accent-dark text-white font-bold py-5 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg",children:i}),(0,s.jsx)("a",{href:"#gallery-section",className:"bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm",children:r})]})]})})]})};var c=a(2265);let d=e=>{let{images:t,title:a,description:i}=e,[r,l]=(0,c.useState)(null),[o,d]=(0,c.useState)(0),x="/ciftlik",h=e=>{l(e),d(e)},m=()=>{let e=(o-1+t.length)%t.length;d(e),l(e)},p=()=>{let e=(o+1)%t.length;d(e),l(e)};return(0,c.useEffect)(()=>{let e=e=>{r&&("ArrowLeft"===e.key?m():"ArrowRight"===e.key?p():"Escape"===e.key&&l(null))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[r,o]),(0,s.jsx)("section",{id:"gallery-section",className:"py-12 sm:py-16 px-4 bg-background",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,s.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold text-center mb-4 text-primary",children:a}),(0,s.jsx)("p",{className:"text-text-light text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base",children:i}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map((e,t)=>(0,s.jsxs)("div",{className:"relative aspect-[4/3] cursor-pointer group overflow-hidden rounded-lg",onClick:()=>h(t),children:[(0,s.jsx)(n(),{src:"".concat(x).concat(e.src),alt:e.alt,fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",className:"object-cover transition duration-300 group-hover:scale-110",loading:e.priority?"eager":"lazy",quality:85}),(0,s.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center",children:(0,s.jsx)("span",{className:"text-white text-lg font-semibold",children:"G\xf6r\xfcnt\xfcle"})})]},t))}),null!==r&&(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4",onClick:()=>l(null),children:(0,s.jsxs)("div",{className:"relative max-w-4xl w-full",children:[(0,s.jsx)("button",{onClick:e=>{e.stopPropagation(),l(null)},className:"absolute -top-12 right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300","aria-label":"Kapat",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),(0,s.jsx)("div",{className:"relative aspect-[4/3]",children:(0,s.jsx)(n(),{src:"".concat(x).concat(t[o].src),alt:t[o].alt,fill:!0,className:"object-contain",priority:!0})}),(0,s.jsx)("button",{onClick:e=>{e.stopPropagation(),m()},className:"absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300","aria-label":"\xd6nceki",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),(0,s.jsx)("button",{onClick:e=>{e.stopPropagation(),p()},className:"absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300","aria-label":"Sonraki",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})})]})})},x=e=>{let{contactInfo:t,title:a}=e;return(0,s.jsx)("section",{id:"contact",className:"py-12 sm:py-16 px-4 bg-background-dark pb-24 sm:pb-28",children:(0,s.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,s.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold text-center mb-4 text-primary",children:a}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-8",children:[(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300",children:[(0,s.jsx)("div",{className:"flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4 mx-auto",children:(0,s.jsx)("i",{className:"fas fa-phone text-white text-xl"})}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-center mb-2 text-primary",children:"Telefon"}),(0,s.jsx)("p",{className:"text-text-light text-center",children:t.phone})]}),(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300",children:[(0,s.jsx)("div",{className:"flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4 mx-auto",children:(0,s.jsx)("i",{className:"fab fa-whatsapp text-white text-xl"})}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-center mb-2 text-primary",children:"WhatsApp"}),(0,s.jsx)("p",{className:"text-text-light text-center",children:t.whatsapp})]}),(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300",children:[(0,s.jsx)("div",{className:"flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4 mx-auto",children:(0,s.jsx)("i",{className:"fas fa-map-marker-alt text-white text-xl"})}),(0,s.jsx)("h3",{className:"text-lg font-semibold text-center mb-2 text-primary",children:"Adres"}),(0,s.jsxs)("p",{className:"text-text-light text-center",children:[t.address.street,(0,s.jsx)("br",{}),t.address.city]})]})]})]})})},h=e=>{let{contactInfo:t}=e;return(0,s.jsx)("div",{className:"fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-primary/10",children:(0,s.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-0",children:[(0,s.jsxs)("a",{href:"tel:".concat(t.phone),className:"flex items-center justify-center gap-3 py-4 px-4 bg-white hover:bg-background transition-colors duration-300",children:[(0,s.jsx)("i",{className:"fas fa-phone text-primary text-2xl"}),(0,s.jsx)("span",{className:"text-base font-medium text-primary",children:"Ara"})]}),(0,s.jsxs)("a",{href:"https://wa.me/".concat(t.whatsapp.replace(/\D/g,"")),target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-3 py-4 px-4 bg-white hover:bg-background transition-colors duration-300",children:[(0,s.jsx)("i",{className:"fab fa-whatsapp text-primary text-2xl"}),(0,s.jsx)("span",{className:"text-base font-medium text-primary",children:"WhatsApp"})]}),(0,s.jsxs)("a",{href:"https://www.google.com/maps?q=36.88754,34.78861",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-3 py-4 px-4 bg-white hover:bg-background transition-colors duration-300",children:[(0,s.jsx)("i",{className:"fas fa-map-marker-alt text-primary text-2xl"}),(0,s.jsx)("span",{className:"text-base font-medium text-primary",children:"Konum"})]})]})})})},m=[{src:"/farm-1.jpg",alt:"\xc7iftliğimizden besili inekler",width:800,height:600,priority:!0},{src:"/farm-2.jpg",alt:"Kurbanlık hayvan se\xe7imi",width:800,height:600},{src:"/farm-3.jpg",alt:"\xc7iftlik ortamı ve hayvanlar",width:800,height:600},{src:"/farm-4.jpg",alt:"Sağlıklı ve besili hayvanlar",width:800,height:600},{src:"/farm-5.jpg",alt:"\xc7iftlik tesisleri",width:800,height:600},{src:"/farm-6.jpg",alt:"Hayvan bakım ve besleme",width:800,height:600},{src:"/farm-7.jpg",alt:"Modern \xe7iftlik altyapısı",width:800,height:600},{src:"/farm-8.jpg",alt:"Hayvan sağlık kontrolleri",width:800,height:600},{src:"/farm-9.jpg",alt:"\xc7iftlik manzarası",width:800,height:600},{src:"/farm-10.jpg",alt:"Besili hayvanlar",width:800,height:600},{src:"/farm-11.jpg",alt:"\xc7iftlik yaşamı",width:800,height:600},{src:"/farm-12.jpg",alt:"Kurbanlık hayvan yetiştirme",width:800,height:600}],p={title:"İletişim",phone:"+90 545 544 2933",whatsapp:"+90 545 544 2933",address:{street:"Evci Mahallesi, \xc7atalk\xf6yak K\xfcme Evleri No:20",city:"Akdeniz, Mersin"}},g={"@context":"https://schema.org","@type":"LocalBusiness",name:"\xc7iftlik",image:"https://your-domain.com/images/hero.jpg",description:"Kurban Bayramı i\xe7in en iyi besili inekler. Sağlıklı ve besili hayvanlar, uygun fiyatlar.",address:{"@type":"PostalAddress",streetAddress:"\xc7atalkoyak K\xfcme Evleri No:20",addressLocality:"Mersin",addressRegion:"Akdeniz",postalCode:"33500",addressCountry:"TR"},geo:{"@type":"GeoCoordinates",latitude:"36.88754",longitude:"34.78861"},url:"https://your-domain.com",telephone:"+905455442933",openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],opens:"09:00",closes:"18:00"}],sameAs:["https://facebook.com/your-page","https://instagram.com/your-profile","https://twitter.com/your-handle"]};function u(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r(),{id:"structured-data",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(g)}}),(0,s.jsxs)("main",{className:"min-h-screen bg-background",children:[(0,s.jsx)(o,{title:"Kurban Bayramı İ\xe7in Besili İnekler ve Profesyonel Kesim Hizmeti",description:"Sağlıklı ve besili hayvanlarımızla hizmetinizdeyiz. Kaliteli ve g\xfcvenilir alışveriş i\xe7in hemen iletişime ge\xe7in.",ctaText:"Hemen İletişime Ge\xe7in",galleryText:"Galeriyi G\xf6r\xfcnt\xfcle"}),(0,s.jsx)(d,{images:m,title:"\xc7iftliğimizden Kareler",description:"Sağlıklı ve besili hayvanlarımızın fotoğrafları"}),(0,s.jsx)(x,{title:"İletişim",contactInfo:p}),(0,s.jsx)(h,{contactInfo:p})]})]})}}},function(e){e.O(0,[740,971,596,744],function(){return e(e.s=1251)}),_N_E=e.O()}]);