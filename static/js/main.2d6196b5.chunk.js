(this["webpackJsonpreact-local"]=this["webpackJsonpreact-local"]||[]).push([[0],{192:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},202:function(e,t,n){},220:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(57),a=n.n(s),r=n(93),l=n(99),o=n(155),j=n(157),d=(n(178),n(192),n(258)),m=n(168),h=n.p+"static/media/instagram.7e5e2865.svg",x=n.p+"static/media/telegram.bbd5e771.svg",b=n.p+"static/media/skype.8559faf5.svg",u=n.p+"static/media/img.11aaa43a.jpeg",p=n.p+"static/media/MyReusme.a80e59c1.pdf",O=n(259),_=n(119),f=n.n(_),g=n(120),k=n.n(g),v=(n(197),n(251)),y=n(252),w=n(167),N=n(146),R=n.n(N),C=(n(198),n(6)),S=function(){var e=Object(c.useState)(!1),t=Object(C.a)(e,2),n=t[0],i=t[1];return{toggle:n,handleToggle:function(){i(!n)}}},T=n(158),M=n(1),I=Object(T.a)("checkrtl"),L=Object(c.createContext)(null),A=function(e){var t=e.children,n=I(""),c=Object(C.a)(n,2),i=c[0],s=c[1];return Object(M.jsx)(L.Provider,{value:{isRtl:i,setIsRtl:s},children:t})},B=n(144),E=n.n(B),P=function(){var e=S(),t=e.toggle,n=e.handleToggle,i=[{code:"fa",name:"\u0641\u0627\u0631\u0633\u06cc",country_code:"ir",dir:"rtl",id:1},{code:"en",name:"English",country_code:"gb",id:2}],s=k.a.get("i18next")||"en",a=i.find((function(e){return e.code===s})),l=Object(O.a)().t,o=Object(c.useContext)(L).setIsRtl;return Object(c.useEffect)((function(){document.title=l("app_title")}),[a,l]),Object(M.jsxs)("div",{className:"phone_menu",children:[Object(M.jsxs)("div",{className:"d-flex flex-row-reverse justify-content-between align-items-center",children:[Object(M.jsx)("div",{className:"mx-3 pt-2 ",onClick:n,children:Object(M.jsx)(R.a,{sx:{width:40,height:40},className:"text-white"})}),Object(M.jsx)(v.a,{children:Object(M.jsx)(y.a,{title:Object(M.jsx)(E.a,{sx:{width:30,height:30,marginTop:"10px"}}),className:"button_toggle_langage",children:i.map((function(e,t){return Object(M.jsx)(w.a.Item,{onClick:function(){o(e.code),r.a.changeLanguage(e.code)},className:"yekanBold",children:Object(M.jsxs)("div",{children:[Object(M.jsx)("span",{className:"mx-2 flag-icon flag-icon-".concat(e.country_code)}),e.name]})},e.code)}))})})]}),Object(M.jsxs)("div",{className:"container_menu_phone",style:t?{transform:"translateX(0)"}:void 0,children:[Object(M.jsx)("div",{className:"mx-3 pt-2",onClick:n,children:Object(M.jsx)(R.a,{sx:{width:40,height:40},className:"text-white"})}),Object(M.jsx)("div",{className:"container_menu",children:Object(M.jsxs)("ul",{children:[Object(M.jsx)("h4",{children:l("logo")}),Object(M.jsx)("li",{onClick:n,children:Object(M.jsx)("a",{href:"#home",children:l("menuitem1")})}),Object(M.jsx)("li",{onClick:n,children:Object(M.jsx)("a",{href:"#aboutme",children:l("menuitem2")})}),Object(M.jsx)("li",{onClick:n,children:Object(M.jsxs)("a",{href:"#reusme",children:[" ",l("menuitem3")]})}),Object(M.jsx)("li",{onClick:n,children:Object(M.jsxs)("a",{href:"#works",children:[" ",l("menuitem4")]})}),Object(M.jsx)("li",{onClick:n,children:Object(M.jsxs)("a",{href:"#contentme",children:[" ",l("menuitem5")]})})]})})]})]})},D=function(){var e=k.a.get("i18next")||"en",t=[{code:"fa",name:"\u0641\u0627\u0631\u0633\u06cc",country_code:"ir",dir:"rtl",id:1},{code:"en",name:"English",country_code:"gb",id:2}].find((function(t){return t.code===e})),n=Object(O.a)().t;Object(c.useContext)(L).setIsRtl;return Object(c.useEffect)((function(){document.body.dir=t.dir||"ltr",document.title=n("app_title")}),[t,n]),Object(M.jsx)(f.a,{items:["section-1","section-2","section-3"],currentClassName:"is-current",children:Object(M.jsx)("header",{children:Object(M.jsxs)("div",{className:"header",children:[Object(M.jsx)("nav",{className:"menu_header",children:Object(M.jsxs)("ul",{children:[Object(M.jsx)("li",{children:n("logo")}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#Home",children:n("menuitem1")})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#aboutme",children:n("menuitem2")})}),Object(M.jsx)("li",{children:Object(M.jsxs)("a",{href:"#reusme",children:[" ",n("menuitem3")]})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#works",children:n("menuitem4")})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#contentme",children:n("menuitem5")})})]})}),Object(M.jsx)(P,{}),Object(M.jsxs)("div",{className:"personal__info",children:[Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{className:"container__image_",children:[Object(M.jsx)("a",{href:"https://www.instagram.com/mahdi_shariflo/",children:Object(M.jsx)("img",{src:h,alt:"instagram"})}),Object(M.jsx)("a",{href:"https://t.me/Mahdi_Shariflo",children:Object(M.jsx)("img",{src:x,alt:"telegram"})}),Object(M.jsx)("a",{href:"https://join.skype.com/invite/iF0Cjsce2cyB",children:Object(M.jsx)("img",{src:b,alt:"skype"})})]}),Object(M.jsx)("div",{className:"mt-3",children:Object(M.jsx)("h6",{className:"text-white yekanBold text-center",children:n("text_interduce")})}),Object(M.jsx)("div",{className:"typecal_write",children:Object(M.jsx)(m.a,{steps:[n("item1_typecal"),4e3,n("item2_typecal"),4e3,n("item3_typecal"),4e3,n("item4_typecal"),4e3],loop:1/0,wrapper:"p"})}),Object(M.jsx)("div",{children:Object(M.jsx)("h6",{className:"text-white yekanBold text-center px-1",children:n("text_header_item")})}),Object(M.jsxs)("div",{className:"container__btn",children:[Object(M.jsx)("button",{children:Object(M.jsx)("a",{href:"#aboutme",children:n("buttton_header1")})}),Object(M.jsx)("button",{children:Object(M.jsx)("a",{href:p,download:"MyResume",children:n("buttton_header2")})})]})]}),Object(M.jsx)("div",{className:"container_avatar",children:Object(M.jsx)(d.a,{src:u,sx:{width:170,height:170}})})]})]})})})};n(202),n(253),n(255),n(162),n(163),n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n(4),n(164),n(166),n(165),n.p,n.p,n.p,n.p,n.p,n(220),n(256),n(254);var F=function(){return Object(M.jsx)("div",{children:Object(M.jsx)(D,{})})};function J(){return Object(M.jsx)(A,{children:Object(M.jsx)(F,{})})}n(221),n(222),n(223),n(224);r.a.use(o.a).use(j.a).use(l.e).init({supportedLngs:["en","fa"],fallbackLng:"fa",debug:!1,resources:{fa:{translation:{app_title:"\u0631\u0632\u0648\u0645\u0647",logo:"\u0645\u0647\u062f\u06cc \u0634\u0631\u06cc\u0641\u0644\u0648",menuitem1:"\u062e\u0627\u0646\u0647",menuitem2:"\u062f\u0631\u0628\u0627\u0631\u0647\u200c\u06cc \u0645\u0646",menuitem3:"\u0631\u0632\u0648\u0645\u0647",menuitem4:"\u067e\u0631\u0648\u0698\u0647 \u0647\u0627\u06cc \u0645\u0646",menuitem5:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0646",text_interduce:"\u0633\u0644\u0627\u0645\u060c \u0645\u0646 \u0645\u0647\u062f\u06cc \u0634\u0631\u06cc\u0641\u0644\u0648 \u0647\u0633\u062a\u0645",item1_typecal:"\u062c\u0627\u0648\u0627 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a",item2_typecal:"\u0631\u06cc \u0627\u06a9\u062a \u0648 \u0646\u06a9\u0633\u062a \u062c\u06cc \u0627\u0633",item3_typecal:"\u0631\u06cc \u0627\u06a9\u062a \u062a\u0627\u06cc\u067e \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a",item4_typecal:"\u0648\u0628 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \ud83d\ude05",text_header_item:"\u0633\u0627\u062e\u062a \u0648\u0628 \u0633\u0627\u06cc\u062a \u0647\u0627\u060c \u0648\u0628 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0647\u0627 \u0648 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0647\u0627\u06cc \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646\u06cc",buttton_header1:"\u0645\u0646 \u0627\u06cc\u0646\u062c\u0627\u0645",buttton_header2:"\u0631\u0632\u0648\u0645\u0647",about_me:"\u062f\u0631\u0628\u0627\u0631\u0647\u200c\u06cc \u0645\u0646",Property:"\u0645\u0634\u062e\u0635\u0627\u062a",property_text:"\n          \u0633\u0644\u0627\u0645\u060c \u0645\u0647\u062f\u06cc \u0634\u0631\u06cc\u0641\u0644\u0648 \u0628\u0647 \u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u0646\u062f\u0647\u200c\u06cc Raect \u0648 Next.js .\u0641\u0639\u0627\u0644\u06cc\u062a \u062f\u0627\u0631\u0645. \u0628\u0647 \u0645\u062f\u062a \u06cc\u06a9 \u0633\u0627\u0644 \u062f\u0631 \u0634\u0631\u06a9\u062a \u0647\u0648\u0634 \u0648 \u067e\u062f\u06cc\u062f\u0647\n           \u0641\u0646\u0627\u0648\u06cc \u0645\u0634\u063a\u0648\u0644 \u06a9\u0627\u0631 \u0622\u0645\u0648\u0632\u06cc \u0628\u0648\u062f\u0645 \u0648 \u0637\u06cc \u0627\u06cc\u0646 \u0645\u062f\u062a \u06cc\u0647 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0634\u0646 \u0648 \n          \u0648\u0628 \u0633\u0627\u06cc\u062a  \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u0627\u06cc\u062c\u0627\u062f \u06a9\u0631\u062f\u0645.\u06a9\u0627\u0631 \u0622\u0645\u0648\u0632\u06cc \u062f\u0631 \n          \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u0628\u0647 \u0645\u0646 \u0645\u0646\u0638\u0645 \u0628\u0648\u062f\u0646 \u0648 \u06a9\u0627\u0631 \u06a9\u0627\u0631 \u06af\u0631\u0648\u0647\u06cc \u0631\u0627 \u062f\u0627\u062f\n           \u0648 \u0645\u0647\u0627\u0631\u062a\u200c\u0647\u0627\u06cc \u0632\u06cc\u0627\u062f\u06cc \u0631\u0627\u060c \u0627\u0632 \u062c\u0645\u0644\u0647  \u06a9\u0627\u0631 \u0628\u0627 \u0627\u0633\u062a\u06cc\u062a \u0645\u0646\u06cc\u062c\u0631 \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0648 Rest Api \u0648 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0648 \n           \u067e\u06a9\u06cc\u062c \u0647\u0627\u06cc \u0632\u06cc\u0627\u062f\u06cc \u0631\u0627 \u06a9\u0633\u0628 \u06a9\u0631\u062f\u0645",Reusme:"\u0631\u0632\u0648\u0645\u0647",Details_my_reusme:"\u062c\u0632\u0626\u06cc\u0627\u062a \u0631\u0632\u0648\u0645\u0647\u200c\u06cc \u0645\u0646",Skills:"\u0645\u0647\u0627\u0631\u062a",Projects:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631\u200c\u0647\u0627",Interests:"\u0639\u0644\u0627\u0642\u0647 \u0645\u0646\u062f\u06cc",some_Work_samples:"\u0628\u0631\u062e\u06cc \u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631\u0647\u0627",link_first_work_:"\u0627\u06cc\u0646 \u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631 \u0628\u0627 \u0641\u0631\u06cc\u0645\u0648\u0631\u06a9 Next.js \u0648 \u067e\u0627\u06cc\u06af\u0627\u0647 \u062f\u0627\u062f\u0647 MongoDb \u067e\u06cc\u0627\u062f\u0647 \u0633\u0627\u0632\u06cc \u0634\u062f\u0647 . \u062a\u0648\u06cc \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u0645\u0647\u0627\u0631\u062a \u0647\u0627\u06cc SSR\u060c \u062a\u0627\u062b\u06cc\u0631 Next.js \u0628\u0631\u0627\u06cc \u0633\u0626\u0648 \u0648 TypeScript, CssTaillwind\u0631\u0648 \u067e\u06cc\u0627\u062f\u0647 \u06a9\u0631\u062f\u0645   \u0648  \u0628\u0647 \u062a\u0631\u062a\u06cc\u0628 \u0627\u0632 Atom , redaux \u0648 contextApi \u0628\u0631\u0627\u06cc \u0645\u062f\u06cc\u0631\u06cc\u062a state \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u0645.",link_second_work_:"\u067e\u0631\u0648\u0698\u0647 \u0627\u0648\u0644 \u0648 \u062f\u0648\u0645 \u0628\u0627 \u0647\u062f\u0641  Responsive design \u0637\u0631\u0627\u062d\u06cc \u0634\u062f\u0647  \u0648 \u0647\u06cc\u0686\u06cc \u062f\u0627\u062f\u0647 \u0627\u06cc \u062f\u0631 \u0627\u0648\u0646 \u0631\u062f \u0648 \u0628\u062f\u0644 \u0646\u0645\u06cc\u0634\u0647.",link_three_work_:"\u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u06cc\u0647 \u067e\u0631\u0648\u0698\u0647 Fullstack \u0647\u0633\u062a.\n           \u0642\u0633\u0645\u062a \u0641\u0631\u0627\u0646\u062a \u0628\u0627 React.js \u0648 \u0642\u0633\u0645\u062a \u0628\u06a9 \u0627\u0646\u062f \u0628 Node.js \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647. \u062a\u0648\u06cc \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u06a9\u0647 \u0622\u0632\u0645\u0648\u0646 \u0627\u0646\u0644\u0627\u06cc\u0646 \u0647\u0633\u062a \n           \u0627\u0628\u062a\u062f\u0627 \u06a9\u0627\u0631\u0628\u0631 \u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646 \u062e\u0648\u062f\u0634 \u0631\u0648 \u0648\u0627\u0631\u062f \u0645\u06cc\u06a9\u0646\u0647\u060c\n            \u0633\u067e\u0633 \u0628\u0631\u0627\u06cc \u0634\u0628\u06cc\u0647 \u0633\u0627\u0632\u06cc \u06cc\u0647 \u06a9\u062f\u06cc \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u0634\u0647\u060c\n             \u0645\u0646 \u0627\u0648\u0646 \u06a9\u062f \u0631\u0648 \u0628\u0647 \u0635\u0648\u0631\u062a \u0646\u0648\u062a\u0641\u06cc\u06a9\u06cc\u0634\u0646 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u0646\u0634\u0648\u0646 \u0645\u06cc\u062f\u0645\n              \u0648 \u06a9\u0627\u0631\u0628\u0631 \u0627\u0648\u0646 \u0631\u0648 \u0648\u0627\u0631\u062f \u0645\u06cc\u06a9\u0646\u0647. \u062a\u0648\u06cc\n                \u062f\u0631 \u0627\u0648\u0646\u0647\u0627 \u0627\u06cc\u0646 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u06a9\u0627\u0631\u0628\u0631 \u0645\u06cc\u062a\u0648\u0646\u0647 \u0622\u0632\u0645\u0648\u0646 \u0647\u0627\u06cc\u06cc \u0631\u0648 \u062f\u0631 \u0622\u06cc\u0646\u062f\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u0646 \u0631\u0648 \u0628\u0628\u06cc\u0646\u0647 \u0648\n               \u0634\u0631\u06a9\u062a \u0628\u06a9\u0646\u0647 \u0648 \u062f\u0631 \u0642\u0633\u0645\u062a \u067e\u0631\u0648\u0641\u0627\u06cc\u0644 \u0645\u06cc\u062a\u0648\u0646\u0647 \n               \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u0634 \u0631\u0648 \u062a\u06a9\u0645\u06cc\u0644 \u06cc\u0627 \u0627\u0648\u0646 \u0647\u0627 \u0631\u0648 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0628\u06a9\u0646\u0647\u060c\n               \u062a\u0648\u06cc \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u0633\u0639\u06cc \u06a9\u0631\u062f\u0645 \u0645\u0647\u0627\u0631\u062a \u0647\u0627\u06cc RestApi, Responsive design, \u06a9\u0646\u062a\u0631\u0644 \u0648\u0636\u0639\u06cc\u062a \u0647\u0627\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0631\u0648 \u0628\u0647 \u0646\u0645\u0627\u06cc\u0634 \u0628\u0632\u0627\u0631\u0645\n               ",link_four_work_:"\u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u0686\u062a \u0622\u0646\u0644\u0627\u06cc\u0646 \u06a9\u0647 \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647 MernStack \u0647\u0633\u062a\u0634 \u0645\u0646 \u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u06a9\u0627\u0631 \u0628\u0627 socket.io \u0628\u0647 \u0646\u0645\u0627\u06cc\u0634 \u06af\u0630\u0627\u0634\u062a\u0645 \u06a9\u0647 \u0648\u0642\u062a\u06cc \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u067e\u06cc\u0627\u0645\u06cc \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u0634\u0647\u200c\u060c \u0645\u06cc\u062a\u0648\u0646\u0647 \u0627\u0648\u0646 \u067e\u06cc\u0627\u0645 \u0631\u0648 \u0647\u0645\u0648\u0646 \u0644\u062d\u0636\u0647 \u0645\u0634\u0627\u0647\u062f\u0647 \u0628\u06a9\u0646\u0647",link_five_work_:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a: \u0645\u0646 \u0646\u0633\u0628\u062a\u0627 \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0646\u0648\u062f \u062c\u06cc \u0627\u0633 \u0648 \u067e\u0627\u06cc\u06af\u0627\u0647 \u062f\u0627\u062f\u0647 MongoDb \u062f\u0627\u0631\u0645 \u0648 \u0628\u0647 \u0635\u0648\u0631\u062a \u062d\u0631\u0641\u0647 \u0627\u06cc \u0628\u0647\u0634\u0648\u0646 \u0645\u0633\u0644\u0637 \u0646\u06cc\u0633\u062a\u0645.",music:"\u0645\u0648\u0632\u06cc\u06a9",music_text:" \u0628\u06cc\u0634\u062a\u0631 \u0627\u0648\u0642\u0627\u062a \u0645\u0648\u0633\u06cc\u0642\u06cc \u06af\u0648\u0634 \u0645\u06cc \u062f\u0647\u0645",film:"\u0641\u06cc\u0644\u0645",film_text:"\u062a\u0645\u0627\u0634\u0627\u06cc \u0641\u06cc\u0644\u0645 \u0648 \u0633\u0631\u06cc\u0627\u0644 \u06cc\u06a9\u06cc \u0627\u0632 \u0639\u0627\u062f\u062a \u0647\u0627\u06cc \u0631\u0648\u0632\u0645\u0631\u0647 \u0645\u0646 \u0627\u0633\u062a\u060c \u0647\u0631 \u0632\u0645\u0627\u0646 \u06a9\u0647 \u0628\u06cc\u06a9\u0627\u0631 \u0628\u0627\u0634\u0645 \u0634\u0631\u0648\u0639 \u0628\u0647 \u062f\u06cc\u062f\u0646 \u0641\u06cc\u0644\u0645 \u0645\u06cc \u06a9\u0646\u0645.",Training_being:"\u0622\u0645\u0648\u0632\u0634 \u0648 \u0628\u0647 \u0631\u0648\u0632 \u0628\u0648\u062f\u0646",Training_being_text:"\u0641\u06cc\u0644\u0645 \u0647\u0627\u06cc \u0622\u0645\u0648\u0632\u0634\u06cc \u0648 \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u0648\u0644\u0648\u06cc\u062a \u0647\u0627\u06cc \u0645\u0646 \u0627\u0633\u062a \u0648 \u0647\u0631 \u0631\u0648\u0632 \u0632\u0645\u0627\u0646\u06cc \u0631\u0627 \u0635\u0631\u0641 \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0686\u06cc\u0632\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0645\u06cc \u06a9\u0646\u0645.",show_works:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0631\u200c\u0647\u0627",details_works:"\u062c\u0632\u0626\u06cc\u0627\u062a \u06a9\u0627\u0631\u0647\u0627",contect_me:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0646",details_content_me:"\u062c\u0632\u0626\u06cc\u0627\u062a \u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0646",Social_Networks:"\u0634\u0628\u06a9\u0647 \u0647\u0627\u06cc \u0627\u062c\u062a\u0645\u0627\u0626\u06cc",email_phonenumber:"\u0627\u06cc\u0645\u06cc\u0644 \u0648 \u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646",email:"\u0627\u06cc\u0645\u06cc\u0644",phonenumber:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646",practice_project:"\u067e\u0631\u0648\u0698\u0647\u200c\u06cc \u062a\u0645\u0631\u06cc\u0646\u06cc",experience_Text:"\u0645\u0646 \u062d\u062f\u0648\u062f \u06cc\u06a9 \u0648 \u0646\u06cc\u0645 \u0633\u0627\u0644 \u062f\u0631 \u0634\u0631\u06a9\u062a \u0622\u0648\u0631\u06cc\u0646 \u062a\u06a9 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u0646\u062f\u0647 \u0641\u0631\u0627\u0646\u062a \u06a9\u0627\u0631 \u06a9\u0631\u062f\u0645.\n           \u067e\u0631\u0648\u0698\u0647 \u0627\u06cc \u06a9\u0647 \u0631\u0648\u0634 \u06a9\u0627\u0631 \u0645\u06cc\u06a9\u0631\u062f\u0645 \u0645\u062b\u0644 \u06cc\u0647 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u0632\u0631\u06af \u0628\u0648\u062f\u060c\n            \u06a9\u0647 \u0628\u0633\u06cc\u0627\u0631\u06cc \u0627\u0632 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0647\u0627\u06cc \u06a9\u0648\u0686\u06cc\u06a9 \u0632\u06cc\u0631 \u0645\u062c\u0645\u0648\u0639\u0647\u200c\u06cc \u0627\u0648\u0646 \u0628\u0648\u062f\u0646\u060c\n             \u062f\u0631 \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u06a9\u0647 \u067e\u0631\u0648\u0698\u0647 \u0646\u0633\u0628\u062a \u0628\u0632\u0631\u06af\u06cc \u0646\u0628\u0648\u062f\u060c \u0645\u0646 \u0627\u0632 \n            StateManager Recoil \u0628\u0647 \u062c\u0627\u06cc \u0631\u06cc\u062f\u0627\u06a9\u0633 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u0645. \u062f\u0644\u06cc\u0644\u0634 \u0647\u0645 \n            \u0622\u0633\u0627\u0646 \u0628\u0648\u062f\u0646 \u0648 \u0646\u062f\u0627\u0634\u062a\u0646 \u067e\u06cc\u0686\u06cc\u062f\u06af\u06cc \u0646\u0633\u0628\u062a \u0628\u0647 \u0631\u06cc\u062f\u0627\u06a9\u0633 \u0628\u0648\u062f \u0648\u0644\u06cc  \u0628\u0627 \u0631\u06cc\u062f\u0627\u06a9\u0633 \u06a9\u0627\u0631 \u06a9\u0631\u062f\u0645\n          \u0648 \u0645\u0634\u06a9\u0644\u06cc \u062a\u0648\u06cc \u0627\u06cc\u0646 \u0632\u0645\u06cc\u0646\u0647 \u0646\u062f\u0627\u0631\u0645. \n         \u0628\u0631\u0627\u06cc \u0645\u062f\u06cc\u0631\u06cc\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0647\u0627\u06cc \u0633\u0631\u0648\u0631 \u06cc\u0627 \u0647\u0645\u0648\u0646 RestApi \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0648\u0646\u0647 ReactQuery \n          \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u0645 \u062a\u0627 \u06a9\u0646\u062a\u0631\u0644 \u0628\u0647\u062a\u0631\u06cc \u0628\u0631 \u0631\u0648\u06cc \u0648\u0636\u0639\u06cc\u062a \u0647\u0631 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0648 \u06a9\u0634 \u06a9\u0631\u062f\u0646 \u062f\u06cc\u062a\u0627\n          \u0648 \u067e\u0631\u0641\u0648\u0631\u0645\u0646\u0633 \u0628\u0627\u0644\u0627\u06cc\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u0645 .\n           \u062f\u0631 \u0628\u062e\u0634 \u067e\u0646\u0644 \u0622\u062f\u0645\u06cc\u0646 \u0628\u0627 \u062a\u0648\u062c\u0647 \u0632\u06cc\u0627\u062f \u0628\u0648\u062f\u0646 \u0641\u0631\u0645 \u0647\u0627\u060c \u06a9\u0646\u062a\u0631\u0644 \u0648 validation \u06a9\u0631\u062f\u0646 \u0627\u0648\u0646 \u0647\u0627 \u060c \u06a9\u062a\u0627\u0628\u062e\u0648\u0646\u0647 \n           React-hook-form  \u0628\u0631\u0627\u06cc validation , \u063a\u06cc\u0631\u0647 \u0627\u0632\u0634 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u0645.\n            \u0628\u0647 \u0646\u0638\u0631\u0645 \u0648\u0642\u062a\u06cc \u062f\u0631 \u06cc\u0647 \u0635\u062d\u0641\u0647 \u0628\u06cc\u0634 \u0627\u0632 10 \u06cc\u0627 17 \u062a\u0627 input \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u0648 \u0628\u062e\u0627\u06cc\u06cc\u0645 \u0627\u0633\u062a\u06cc\u062a \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u0645 \n          \u0648 \u06a9\u0646\u062a\u0631\u0644 \u0631\u0648\u06cc \u0647\u0631 \u0627\u06cc\u0646\u067e\u0648\u062a \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u06a9\u0647 \u067e\u0631 \u0634\u062f\u0647 \u06cc\u0627 \u0646\u0647 \u0648 \u06cc\u0627 Regex \u06a9\u0647 \u0645\u06cc\u062e\u0627\u06cc\u0645 \u0631\u0639\u0627\u06cc\u062a \u0634\u062f\u0647 \u06cc\u0627 \u0646\u0647 \u060c \u0648 \u06cc\u0627 \u0628\u0639\u0636\u06cc \u0645\u0648\u0642\u0639 \u0647\u0627\n           \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0648\u0646\u0647 \u0647\u0627\u06cc \u062e\u0627\u0635\u06cc \u0645\u062b\u0644 React-select\n           \u0646\u06cc\u0627\u0632 \u0628\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0628\u0634\u0647 \u06a9\u0647 \u0627\u06cc\u0646 \u06a9\u062a\u0627\u0628\u062e\u0648\u0646\u0647 \n           \u062e\u06cc\u0644\u06cc \u062e\u0648\u0628 \u0645\u06cc\u062a\u0648\u0646\u0633\u062a \u0627\u06cc\u0646 \u06a9\u0627\u0631\u0648 \u0627\u0646\u062c\u0627\u0645 \u0628\u062f\u0647.\n             \u067e\u06cc\u0627\u062f\u0647 \u0633\u0627\u0632\u06cc \u0648 \u0646\u0648\u0634\u062a\u0646 \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u06cc\u06a9\u06cc \u0627\u0632 \u0646\u06a9\u0627\u062a\u06cc \u0628\u0648\u062f\n             \u06a9\u0647 \u0628\u0627\u06cc\u062f \u0631\u0639\u0627\u06cc\u062a \u0645\u06cc\u0634\u062f\n              \u0686\u0648\u0646 \u067e\u0631\u0648\u0698\u0647 \u0647\u0631 \u0631\u0648\u0632 \u0628\u0632\u0631\u06af \u062a\u0631 \u0645\u06cc\u0634\u062f\u060c \u0645\u062b\u0644 \u062f\u0631\u06af\u0627\u0647 \u067e\u0631\u062f\u0627\u062e\u062a \u0648\n               Pwa \u0628\u0631\u0627\u06cc \u0646\u0648\u062a\u0641\u06cc\u06a9\u06cc\u0634\u0646 \u0647\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u060c \u06a9\u0647 \u0628\u0647 \u062e\u0648\u0628\u06cc \u0627\u0646\u062c\u0627\u0645 \u0634\u062f . \u0648\u0644\u06cc \u0628\u0639\u062f \u0627\u0632 \u0645\u062f\u062a\u06cc \u0646\u06cc\u0627\u0632 \u0628\u0647 \n               SSR(server-side-rendering) \u06cc\u0627 \u0647\u0645\u0648\u0646 \u0631\u0646\u062f\u0631 \u0633\u0645\u062a \u0633\u0631\u0648\u0631  \u062f\u0631 \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u062f\u06cc\u062f\u0647 \u0645\u06cc\u200c\u0634\u062f\n                \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0628\u0627\u06cc\u062f \u0627\u0632 Next.js \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0631\u062f\u06cc\u0645\n                 \u060c \u0628\u0647 \u062e\u0627\u0637\u0631 Routing \u0633\u0627\u062f\u0647 \u0635\u0641\u062d\u0627\u062a \u0648 \u062a\u0639\u0631\u06cc\u0641 Route \u0647\u0627\u06cc api \u0633\u0631\u0648\u0631 Next.js \u0628\u0647\u062a\u0631\u06cc\u0646 \u06af\u0632\u06cc\u0646\u0647 \u0628\u0648\u062f . \u0686\u0627\u0644\u0634 \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062a\u0648\u06cc \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u062f\u0627\u0634\u062a\u0645  \u0646\u0645\u06cc\u0634\u0647 \u0632\u06cc\u0627\u062f \u06af\u0641\u062a\n                  \u0648\u0644\u06cc \u0627\u06af\u0631 \u0628\u062e\u0648\u0627\u0645 \u062f\u0631  \u06a9\u0644 \u0627\u0633\u0645 \u0628\u0628\u0631\u0645 \u0645\u062b\u0644: Optomatic update \u06cc\u0627 Lazy Loading , Scram \u06a9\u0647 Task \u06cc\u0627 \u0647\u0645\u0648\u0646 \u0648\u0638\u06cc\u0641\u0647 \u0628\u0647 \u0635\u0648\u0631\u062a \u0647\u0641\u062a\u06af\u06cc \u0628\u0631\u0627\u06cc \u062e\u0648\u062f\u0645\u0648\u0646 \u062f\u0627\u0634\u062a\u06cc\u0645 \n                  \u0648 \u0647\u0631 \u0631\u0648\u0632 \u0628\u0647 \u0635\u0648\u0631\u062a 10 \u0627\u0644\u06cc 15 \u062f\u0642\u06cc\u0642\u0647\n                    \u0628\u0627\u06cc\u062f \u0645\u06cc\u06af\u0641\u062a\u06cc\u0645 \u0686\u06cc\u06a9\u0627\u0631 \u0645\u06cc\u06a9\u0631\u062f\u06cc\u0645 \u0648 \u0686\u06cc\u06a9\u0627\u0631 \u0628\u0627\u06cc\u062f \u0628\u06a9\u0646\u06cc\u0645 \n     \u0627\u0644\u0628\u062a\u0647 \u062a\u06cc\u0645 \u0645\u0627 \u062f\u0648 \u06cc\u0647 \u0633\u0647 \u0646\u0641\u0631 \u0628\u0648\u062f \n      \u060c \u062f\u0631 \u06a9\u0644\u0627 \u062a\u062c\u0631\u0628\u0647\u200c\u0627\u06cc \u062e\u0648\u0628\u06cc \u0648 \u0686\u0627\u0644\u0634 \u0647\u0627\u06cc \u0632\u06cc\u0627\u062f\u06cc \u062f\u0631 \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u062f\u0627\u0634\u062a\u0645.",experience_Work:"\u062a\u062c\u0631\u0628\u0647\u200c\u06cc \u06a9\u0627\u0631",text_vpn:"\u0644\u0637\u0641\u0627 \u0628\u0647 \u0647\u0646\u06af\u0627\u0645 \u0645\u0634\u0627\u0647\u062f\u0647\u200c\u06cc \u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631 \u0647\u0627 \u0641\u06cc\u0644\u062a\u0631 \u0634\u06a9\u0646 \u062e\u0648\u062f \u0631\u0627 \u0631\u0648\u0634\u0646 \u06a9\u0646\u06cc\u062f "}}},detection:{order:["path","cookie","htmlTag"],caches:["cookie"]}});var W=Object(M.jsx)("div",{className:"py-4 text-center",children:Object(M.jsx)("h3",{children:"Loading.."})});a.a.render(Object(M.jsx)(c.Suspense,{fallback:W,children:Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(J,{})})}),document.getElementById("root"))}},[[225,1,2]]]);
//# sourceMappingURL=main.2d6196b5.chunk.js.map