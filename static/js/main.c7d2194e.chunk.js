(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(9),n=a.n(i),r=(a(28),a(3)),l=a(4),o=a(6),d=a(5),j=(a(29),a(7)),m=a.n(j),h=a(10),b=a.n(h),u=(a(30),a(0)),O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){b()(document).ready((function(){b()("a.nav-link").click((function(){b()(".navbar-collapse").hasClass("show")&&b()(".navbar-toggler").click()}))}))}},{key:"render",value:function(){function e(e){var t=document.getElementById(e);t&&setTimeout((function(){window.scrollTo(t.offsetLeft,t.offsetTop-50)}),2)}return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("a",{className:"navbar-brand",href:"#",children:"Navein"}),Object(u.jsx)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-controls":"navigation","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navigation",children:Object(u.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(u.jsx)("li",{className:"nav-item active",children:Object(u.jsx)("a",{className:"nav-link active",href:"#",id:"nav-home",onClick:function(){return e("home")},children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"#",id:"nav-about",onClick:function(){return e("about")},children:"About"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"#",id:"nav-resume",onClick:function(){return e("resume")},children:"Resume"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"#",id:"nav-technology",onClick:function(){return e("technology")},children:"Technology"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"#",id:"nav-volunteer",onClick:function(){return e("volunteer")},children:"Volunteer"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"#",id:"nav-certification",onClick:function(){return e("certification")},children:"Certifications"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"#",id:"nav-contact",onClick:function(){return e("contact")},children:"Contact"})})]})})]})})}}]),a}(s.Component),v=a.p+"static/media/workspace-1280538_1280.6a13d347.jpg",x=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={name:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e,t="";return this.props.data&&(t=this.props.data.name,e=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(u.jsx)("i",{className:e.className})})},e.name)}))),Object(u.jsx)("div",{className:"section home-section",id:"home",style:{backgroundImage:"url(".concat(v,")")},children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"home-banner",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)("div",{className:"home-info",children:"I am a Software Engineer currently located in the Silicon Valley of India."}),Object(u.jsx)("div",{className:"home-info",children:"My experience spans both frontend and backend technologies."}),Object(u.jsx)("div",{className:"home-info",children:"Scroll down to see more details about me."}),Object(u.jsx)("hr",{}),Object(u.jsx)("ul",{className:"social",children:e})]})})})}}]),a}(s.Component),p=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data&&this.props.data.photoUrl)var e="".concat("/resume","/").concat(this.props.data.photoUrl),t=this.props.data.title;return Object(u.jsx)("div",{className:"section about-section",id:"about",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-4 col-0",children:Object(u.jsx)("img",{className:"image-style",src:e,alt:"Navein Austin Fernandes"})}),Object(u.jsxs)("div",{className:"col-md-8 col-12",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsxs)("div",{className:"about-me",children:[Object(u.jsx)("p",{children:"Hello, I am a passionate developer with diverse set of skills. As a programmer with extensive experience, I am comfortable developing both frontend and backend applications. The idea of finishing off a project in an innovative way is always appealing to me. My desire to learn is constant and you will find me studying something all the time."}),Object(u.jsx)("p",{children:"Basketball and listening to music are two of my favorite pastimes outside of work. Furthermore, I volunteer at an annual agile conference in Bengaluru, India."})]})]})]})})})}}]),a}(s.Component),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=(new Date).getFullYear();if(this.props.data)var t=this.props.data.techUsed,a=this.props.data.copyrightInfo;return Object(u.jsxs)("div",{className:"footer-section",id:"footer",children:[Object(u.jsxs)("div",{children:["This website was developed using: ",t]}),Object(u.jsxs)("div",{children:["Background Image by ",Object(u.jsx)("a",{href:"https://pixabay.com/users/freephotocc-2275370/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1280538",children:"Free Photos"})," from ",Object(u.jsx)("a",{href:"https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1280538",children:"Pixabay"})]}),Object(u.jsxs)("div",{className:"copyright",children:["\xa9 Copyright ",e," ",a]})]})}}]),a}(s.Component),N=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={name:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e,t,a="",s="";return this.props.data&&(this.props.data.work&&(a=this.props.data.work.title,e=this.props.data.work.companies.map((function(e,t){return Object(u.jsxs)("div",{className:"each-section",children:[Object(u.jsx)("div",{className:"role",children:Object(u.jsx)("h4",{children:e.role})}),Object(u.jsx)("span",{className:"company",children:e.name}),Object(u.jsx)("span",{className:"separator",children:"\u2022"}),Object(u.jsx)("span",{className:"tenure",children:e.duration}),Object(u.jsx)("span",{className:"separator",children:"\u2022"}),Object(u.jsx)("span",{className:"location",children:e.location}),Object(u.jsxs)("div",{className:"work-desc",children:[Object(u.jsx)("p",{children:e.description1}),Object(u.jsx)("p",{children:e.description2})]})]},t)}))),this.props.data.education&&(s=this.props.data.education.title,t=this.props.data.education.schools.map((function(e,t){return Object(u.jsxs)("div",{className:"each-section",children:[Object(u.jsx)("div",{className:"role",children:Object(u.jsx)("h4",{children:e.degree})}),Object(u.jsx)("span",{className:"college-name",children:e.collegeName}),Object(u.jsx)("span",{className:"separator",children:"\u2022"}),Object(u.jsx)("span",{className:"completion",children:e.completion}),Object(u.jsx)("span",{className:"separator",children:"\u2022"}),Object(u.jsx)("span",{className:"score",children:e.score}),Object(u.jsx)("div",{className:"location",children:e.location})]},t)})))),Object(u.jsxs)("div",{className:"section resume-section",id:"resume",children:[Object(u.jsx)("div",{className:"container work",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-4 col-12",children:Object(u.jsx)("h3",{children:Object(u.jsx)("span",{className:"sub-title",children:a})})}),Object(u.jsx)("div",{className:"col-md-8 col-12 sub-section",children:e})]})}),Object(u.jsx)("div",{className:"resume-divider",children:Object(u.jsx)("hr",{})}),Object(u.jsx)("div",{className:"container education",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-4 col-12",children:Object(u.jsx)("h3",{children:Object(u.jsx)("span",{className:"sub-title",children:s})})}),Object(u.jsx)("div",{className:"col-md-8 col-12 sub-section",children:t})]})})]})}}]),a}(s.Component),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={name:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e;if(this.props.data){var t=this.props.data.title;this.props.data.techList&&(e=this.props.data.techList.map((function(e){var t="".concat("/resume","/").concat(e.image);return Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{src:t,alt:e.title,className:"logo"}),Object(u.jsx)("div",{className:"tech-title",children:e.title}),Object(u.jsx)("div",{children:e.description})]},e.name)})))}return Object(u.jsxs)("div",{className:"section technology-section",id:"technology",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-4 col-12",children:Object(u.jsx)("h3",{children:Object(u.jsx)("span",{className:"sub-title",children:t})})}),Object(u.jsx)("div",{className:"col-md-8 col-12 sub-section",children:"I have been working on a number of technologies and tools over the years. Here listed are some of them. The list also includes technologies that I am learning or have a limited knowledge off. These are listed at the bottom."})]})}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("ul",{className:"tech-list",children:e})}),Object(u.jsx)("div",{style:{fontWeight:"bold"},children:"** All images shown above are for depicting the technology used/learnt. No copyright infringement is intended."})]})]})}}]),a}(s.Component),y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={name:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e,t="";return this.props.data&&(t=this.props.data.title,this.props.data.certList&&(e=this.props.data.certList.map((function(e){var t="".concat("/resume","/").concat(e.image);return e.link&&""!==e.link&&e.dimension&&""!==e.dimension?Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{style:e.dimension,src:e.image,alt:e.title,className:"logo"})}),Object(u.jsx)("div",{className:"cert-title",children:e.title})]},e.name):e.link&&""!==e.link?Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:t,alt:e.title,className:"logo"})}),Object(u.jsx)("div",{className:"cert-title",children:e.title})]},e.name):e.dimension&&""!==e.dimension?Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{style:e.dimension,src:t,alt:e.title,className:"logo"}),Object(u.jsx)("div",{className:"cert-title",children:e.title})]},e.name):Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{src:t,alt:e.title,className:"logo"}),Object(u.jsx)("div",{className:"cert-title",children:e.title})]},e.name)})))),Object(u.jsxs)("div",{className:"section certification-section",id:"certification",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-4 col-12",children:Object(u.jsx)("h3",{children:Object(u.jsx)("span",{className:"sub-title",children:t})})}),Object(u.jsx)("div",{className:"col-md-8 col-12 sub-section",children:"A list of certifications that I have achieved over the years."})]})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("ul",{className:"cert-list",children:e})})})]})}}]),a}(s.Component),k=a(16),w=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={name:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e,t="";return this.props.data&&(t=this.props.data.title,e=this.props.data.carousel.map((function(e,t){var a="".concat("/resume")+e.image;return Object(u.jsx)(k.a.Item,{children:Object(u.jsx)("img",{className:"w-50",src:a,alt:e.title})},t)}))),Object(u.jsxs)("div",{className:"section volunteer-section",id:"volunteer",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-4 col-12",children:Object(u.jsx)("h3",{children:Object(u.jsx)("span",{className:"sub-title",children:t})})}),Object(u.jsxs)("div",{className:"col-md-8 col-12 sub-section",children:[Object(u.jsx)("div",{children:"I have been volunteering at the Technical Agility Conference(TAC) since its inception in 2018. TAC is world's first Technical Agility themed conference that his held annually at Bangalore, India."}),Object(u.jsxs)("div",{children:["To know more about TAC2021 ",Object(u.jsx)("a",{href:"https://technicalagility.institute/tac2021/",target:"_blank",rel:"noreferrer",children:"click here"})]})]})]})}),Object(u.jsx)("div",{className:"container carousel-section",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(k.a,{variant:"dark",interval:3e3,children:e})})})]})}}]),a}(s.Component),C=a(11),I=a(12),D=a.n(I),_=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={name:""},s.sendDetails=s.sendDetails.bind(Object(C.a)(s)),s}return Object(l.a)(a,[{key:"addNotification",value:function(e,t,a){I.store.addNotification({title:e,message:t,type:a,insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}})}},{key:"addSuccessNotification",value:function(e){this.addNotification("Success!",e,"success")}},{key:"addErrorNotification",value:function(e){this.addNotification("Error!",e,"danger")}},{key:"sendDetails",value:function(e){if(e.preventDefault(),""!==document.getElementById("name").value)if(""!==document.getElementById("email").value){var t=m()("#contactForm").serializeArray();t.push({name:"date_time",value:new Date});var a=this;m.a.ajax({url:"https://api.apispreadsheets.com/data/15682/",type:"post",data:t}).done((function(){a.addSuccessNotification("Your data has been submitted. We will get back to you."),a.clearForm()})).fail((function(){a.addErrorNotification("Your data was not submitted. Please try again later.")}))}else this.addErrorNotification("Email is a required field");else this.addErrorNotification("Name is a required field")}},{key:"clearForm",value:function(){m()("#name").val(""),m()("#email").val(""),m()("#subject").val(""),m()("#message").val("")}},{key:"render",value:function(){var e="",t="",a="",s="",c="",i="",n="";return this.props.data&&(e=this.props.data.title,t=this.props.data.address1,a=this.props.data.address2,s=this.props.data.address3,c=this.props.data.address4,i=this.props.data.phone,n=this.props.data.email),Object(u.jsxs)("div",{className:"section contact-section",id:"contact",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-4 col-12",children:Object(u.jsx)("h3",{children:Object(u.jsx)("span",{className:"sub-title",children:e})})}),Object(u.jsx)("div",{className:"col-md-8 col-12 sub-section",children:"Am I a good fit or would I be a valuable addition to your team/company? Is there a project that you would like me to work on? Please do not hesitate to contact me."})]})}),Object(u.jsx)("div",{className:"container contact-me",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-8 col-12 form",children:Object(u.jsx)("form",{id:"contactForm",action:"",children:Object(u.jsxs)("div",{className:"grid-container",children:[Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsxs)("label",{htmlFor:"name",children:["Name ",Object(u.jsx)("span",{className:"required",children:"*"})]})}),Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsx)("input",{type:"text",id:"name",name:"name",size:"35"})}),Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsxs)("label",{htmlFor:"email",children:["Email ",Object(u.jsx)("span",{className:"required",children:"*"})]})}),Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsx)("input",{type:"text",id:"email",name:"email",size:"35"})}),Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsx)("label",{htmlFor:"subject",children:"Subject"})}),Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsx)("input",{type:"text",id:"subject",name:"subject",size:"35"})}),Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsx)("label",{htmlFor:"message",children:"Message"})}),Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsx)("textarea",{cols:"35",rows:"8",id:"message",name:"message"})}),Object(u.jsx)("div",{className:"grid-item"}),Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsx)("button",{id:"submit",name:"submit",className:"btn",onClick:this.sendDetails,children:"Submit"})})]})})}),Object(u.jsx)("div",{className:"col-md-4 col-12 contact",children:Object(u.jsxs)("div",{className:"grid-container",children:[Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsx)("i",{className:"fa fa-map-marker"})}),Object(u.jsxs)("div",{className:"grid-item",children:[Object(u.jsx)("div",{children:t}),Object(u.jsx)("div",{children:a}),Object(u.jsx)("div",{children:s}),Object(u.jsx)("div",{children:c})]}),Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsx)("i",{className:"fa fa-phone"})}),Object(u.jsx)("div",{className:"grid-item",children:i}),Object(u.jsx)("div",{className:"grid-item",children:Object(u.jsx)("i",{className:"fa fa-envelope"})}),Object(u.jsx)("div",{className:"grid-item",children:n})]})})]})})]})}}]),a}(s.Component),T=(a(51),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={resumeData:{}},s}return Object(l.a)(a,[{key:"getResumeData",value:function(){m.a.ajax({url:"".concat("/resume","/resume-data.json"),dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(D.a,{}),Object(u.jsx)(O,{}),Object(u.jsxs)("div",{className:"",style:{paddingTop:"3.5em"},children:[Object(u.jsx)(x,{data:this.state.resumeData.home}),Object(u.jsx)(p,{data:this.state.resumeData.about}),Object(u.jsx)(N,{data:this.state.resumeData.resume}),Object(u.jsx)(g,{data:this.state.resumeData.technology}),Object(u.jsx)(w,{data:this.state.resumeData.volunteer}),Object(u.jsx)(y,{data:this.state.resumeData.certification}),Object(u.jsx)(_,{data:this.state.resumeData.contact}),Object(u.jsx)(f,{data:this.state.resumeData.footer})]})]})}}]),a}(s.Component)),F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),i(e),n(e)}))};a(52);n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),F()}},[[54,1,2]]]);
//# sourceMappingURL=main.c7d2194e.chunk.js.map