(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{12:function(e,t,s){e.exports={header:"header_header__v9FKw"}},13:function(e,t,s){e.exports={sidebar:"sidebar_sidebar__3_jwy"}},14:function(e,t,s){e.exports={footer:"footer_footer__1lZIc"}},22:function(e,t,s){},23:function(e,t,s){},3:function(e,t,s){e.exports={profile:"profile_profile__FOwjt",bg:"profile_bg__3Iag3",profileInfo:"profile_profileInfo__14Mlr",avatar:"profile_avatar__1jKK_",aboutMe:"profile_aboutMe__F7eXL"}},30:function(e,t,s){"use strict";s.r(t);var c=s(0),r=s(1),n=s.n(r),a=s(5),i=s.n(a),j=(s(22),s(23),s(12)),l=s.n(j),o=function(){return Object(c.jsx)("div",{className:l.a.header,children:Object(c.jsx)("p",{children:"Social Network"})})},b=s(13),d=s.n(b),O=function(){return Object(c.jsx)("div",{className:d.a.sidebar,children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Profile"}),Object(c.jsx)("li",{children:"Messages"}),Object(c.jsx)("li",{children:"Friends"}),Object(c.jsx)("li",{children:"News"}),Object(c.jsx)("li",{children:"Blog"})]})})},u=s(3),x=s.n(u),h=s.p+"static/media/oranges.6cd301f4.jpg",p=s.p+"static/media/ricardo-gomez-angel-lexRTRXv-ok-unsplash.27a19c56.jpg",f=s(8),_=s.n(f),m=function(){return Object(c.jsxs)("div",{className:_.a.post,children:[Object(c.jsx)("img",{src:p,alt:"My avatar",width:"77px",className:_.a.postAvatar}),Object(c.jsx)("p",{children:"Post content"}),Object(c.jsx)("span",{children:"Like"})]})},g=function(){return Object(c.jsxs)("div",{className:x.a.posts,children:[Object(c.jsx)("h3",{children:"My posts"}),Object(c.jsxs)("div",{className:x.a.newPost,children:[Object(c.jsx)("textarea",{name:"newText",id:"newPost",cols:30,rows:10,children:"New Post"}),Object(c.jsx)("button",{children:"Post it"})]}),Object(c.jsx)(m,{}),Object(c.jsx)(m,{}),Object(c.jsx)(m,{})]})},v=function(){return Object(c.jsxs)("div",{className:x.a.profile,children:[Object(c.jsx)("img",{src:h,alt:"Oranges",className:x.a.bg}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:x.a.profileInfo,children:[Object(c.jsx)("img",{src:p,alt:"My avatar",className:x.a.avatar}),Object(c.jsxs)("article",{className:x.a.aboutMe,children:[Object(c.jsx)("h1",{children:"My profile"}),Object(c.jsx)("h3",{children:"Name:"}),Object(c.jsx)("p",{children:"Monica Mo"}),Object(c.jsx)("h3",{children:"Job:"}),Object(c.jsx)("p",{children:"Freelancer"}),Object(c.jsx)("h3",{children:"Languages:"}),Object(c.jsx)("p",{children:"All human + JS"})]})]}),Object(c.jsx)(g,{})]})]})},N=s(14),w=s.n(N),F=function(){return Object(c.jsx)("div",{className:w.a.footer,children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Fb"}),Object(c.jsx)("li",{children:"Instagram"}),Object(c.jsx)("li",{children:"LinkedIn"})]})})};var L=function(){return Object(c.jsxs)("div",{className:"app-wrapper",children:[Object(c.jsx)(o,{}),Object(c.jsx)(O,{}),Object(c.jsx)(v,{}),Object(c.jsx)(F,{})]})},M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,31)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),r(e),n(e),a(e)}))},I=s(16),P=s(4),S=s(11),y=s(2),k="FOLLLOW",A="UNFOLLLOW",C="SET_USERS",T={users:[],pageSize:3,totalUsersCount:19,currentPage:1},J=function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return Object(y.a)(Object(y.a)({},T),{},{users:T.users.map((function(t){return t.id===e.userID?Object(y.a)(Object(y.a)({},t),{},{isFollowed:!0}):t}))});case A:return Object(y.a)(Object(y.a)({},T),{},{users:T.users.map((function(t){return t.id===e.userID?Object(y.a)(Object(y.a)({},t),{},{isFollowed:!1}):t}))});case C:return Object(y.a)(Object(y.a)({},T),{},{users:[].concat(Object(S.a)(T.users),Object(S.a)(e.usersFromOutside))});default:return T}},B=Object(P.b)({usersPage:J}),D=Object(P.c)(B);i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(I.a,{store:D,children:Object(c.jsx)(L,{})})}),document.getElementById("root")),M()},8:function(e,t,s){e.exports={post:"post_post__35uCm",postAvatar:"post_postAvatar__2AfX7"}}},[[30,1,2]]]);
//# sourceMappingURL=main.95629c79.chunk.js.map