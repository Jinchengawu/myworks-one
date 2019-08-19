(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-672af9b6"],{7438:function(t,e,a){"use strict";var o=a("e0f9"),n=a.n(o);n.a},ba4d:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addCustomer"},[a("div",{staticClass:"container"},[a("van-cell-group",{staticStyle:{background:"#FCFCFC"},attrs:{border:!1}},[a("van-field",{attrs:{label:"客户名称",required:"",disabled:2==t.$route.query.OTP||1==t.$route.query.OTP,type:"text","input-align":"right",placeholder:"请输入联系人姓名（必填）",error:!1,border:!1},model:{value:t.form.companyName,callback:function(e){t.$set(t.form,"companyName",e)},expression:"form.companyName"}}),a("van-field",{attrs:{label:"客户简称",disabled:2==t.$route.query.OTP,required:"",type:"text","input-align":"right",placeholder:"请输入客户简称",border:!1},model:{value:t.form.companyAbbreviation,callback:function(e){t.$set(t.form,"companyAbbreviation",e)},expression:"form.companyAbbreviation"}}),a("van-field",{attrs:{label:"地址",disabled:2==t.$route.query.OTP,required:"",type:"text","input-align":"right",placeholder:"请输入企业地址（必填）",error:!1,border:!1},model:{value:t.form.companyAdress,callback:function(e){t.$set(t.form,"companyAdress",e)},expression:"form.companyAdress"}}),a("van-field",{attrs:{label:"行业",disabled:2==t.$route.query.OTP,required:"",type:"text","input-align":"right",placeholder:"请输入行业分类",border:!1},model:{value:t.form.companyIndustry,callback:function(e){t.$set(t.form,"companyIndustry",e)},expression:"form.companyIndustry"}}),a("van-field",{attrs:{label:"统一社会信用代码",disabled:2==t.$route.query.OTP,required:"",type:"text","input-align":"right",placeholder:"请输入统一社会信用代码",border:!1},model:{value:t.form.companyBusinessLicense,callback:function(e){t.$set(t.form,"companyBusinessLicense",e)},expression:"form.companyBusinessLicense"}}),a("div",{staticClass:"money-text"},[a("van-field",{staticStyle:{width:"90%"},attrs:{label:"授信额度",disabled:2==t.$route.query.OTP,required:"",type:"number","input-align":"right",placeholder:"请输入授信额度 单位:",border:!1},model:{value:t.form.companyCreditQuota,callback:function(e){t.$set(t.form,"companyCreditQuota",e)},expression:"form.companyCreditQuota"}}),a("span",{staticClass:"right-text"},[t._v("万元")])],1),a("div",{staticClass:"select-list",staticStyle:{position:"relative"}},[a("div",{staticClass:"list"},[a("div",{staticClass:"left"},[a("span",{staticStyle:{position:"absolute",left:"7px","font-size":"14px",color:"#f44"}},[t._v("*")]),t._v("  客户类别\n          ")]),a("div",{staticClass:"right"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.companyCustomerType,expression:"form.companyCustomerType"},{name:"placeholder",rawName:"v-placeholder",value:{color:t.customerProfile},expression:"{color: customerProfile}"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.form,"companyCustomerType",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("\n                请选择\n              ")]),a("option",{attrs:{value:"一般客户"}},[t._v("\n                一般客户\n              ")]),a("option",{attrs:{value:"意向客户"}},[t._v("\n                意向客户\n              ")]),a("option",{attrs:{value:"潜在客户"}},[t._v("\n                潜在客户\n              ")])])]),a("div",{directives:[{name:"sanjiao",rawName:"v-sanjiao",value:{color:t.customerProfile},expression:"{color: customerProfile}"}],staticClass:"saojiao"})])]),t.showMoreBox?a("div",[a("div",{staticClass:"money-text"},[a("van-field",{staticStyle:{width:"90%"},attrs:{label:"初步资金需求",disabled:2==t.$route.query.OTP,type:"number","input-align":"right",placeholder:"初步资金需求 单位:",border:!1},model:{value:t.form.companyInitialFundingRequirements,callback:function(e){t.$set(t.form,"companyInitialFundingRequirements",e)},expression:"form.companyInitialFundingRequirements"}}),a("span",{staticClass:"right-text"},[t._v("万元")])],1),a("div",{staticClass:"money-text"},[a("van-field",{staticStyle:{width:"90%"},attrs:{label:"注册资金",type:"number","input-align":"right",placeholder:"请输入注册资金 单位:",border:!1,disabled:2==t.$route.query.OTP},model:{value:t.form.companyRegisteredCapital,callback:function(e){t.$set(t.form,"companyRegisteredCapital",e)},expression:"form.companyRegisteredCapital"}}),a("span",{staticClass:"right-text"},[t._v("万元")])],1),a("div",{staticClass:"select-list"},[a("div",{staticClass:"list",on:{click:function(e){return t.startTimeClick()}}},[a("div",{staticClass:"left"},[t._v("\n              成立时间\n            ")]),a("div",{staticClass:"right",class:{selectPlaceholder:""==t.form.companyEstablishmentTime}},[t._v("\n              "+t._s(""==t.form.companyEstablishmentTime?"请选择":t.form.companyEstablishmentTime)+"\n            ")]),a("div",{staticClass:"timeBox"},[a("span",{staticClass:"iconfont iconrili",staticStyle:{color:"#aebab4"}})])])]),a("van-field",{attrs:{label:"银行账号",type:"number","input-align":"right",placeholder:"请输入",border:!1,disabled:2==t.$route.query.OTP},model:{value:t.form.companyBankAccount,callback:function(e){t.$set(t.form,"companyBankAccount",e)},expression:"form.companyBankAccount"}}),a("van-field",{attrs:{label:"开户行信息",type:"text","input-align":"right",placeholder:"请输入",border:!1,disabled:2==t.$route.query.OTP},model:{value:t.form.openingAccountInformation,callback:function(e){t.$set(t.form,"openingAccountInformation",e)},expression:"form.openingAccountInformation"}}),a("van-field",{attrs:{label:"实际控制人",type:"text","input-align":"right",placeholder:"请输入",border:!1,disabled:2==t.$route.query.OTP},model:{value:t.form.enterpriseActualController,callback:function(e){t.$set(t.form,"enterpriseActualController",e)},expression:"form.enterpriseActualController"}}),a("van-field",{attrs:{label:"法定代表人",type:"text","input-align":"right",placeholder:"请输入",border:!1,disabled:2==t.$route.query.OTP},model:{value:t.form.enterpriseCorporateRepresentative,callback:function(e){t.$set(t.form,"enterpriseCorporateRepresentative",e)},expression:"form.enterpriseCorporateRepresentative"}}),a("div",{staticClass:"select-list",staticStyle:{position:"relative"}},[a("div",{staticClass:"list"},[a("div",{staticClass:"left"},[t._v("\n              证件类型\n            ")]),a("div",{staticClass:"right"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.documentType,expression:"form.documentType"},{name:"placeholder",rawName:"v-placeholder",value:{color:t.customerProfile},expression:"{color: customerProfile}"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.form,"documentType",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("\n                  请选择\n                ")]),a("option",{attrs:{value:"中华人民共和国居民身份证"}},[t._v("\n                  中华人民共和国居民身份证\n                ")]),a("option",{attrs:{value:"护照"}},[t._v("\n                  护照\n                ")]),a("option",{attrs:{value:"军官证"}},[t._v("\n                  军官证\n                ")])])]),a("div",{directives:[{name:"sanjiao",rawName:"v-sanjiao",value:{color:t.customerProfile},expression:"{color: customerProfile}"}],staticClass:"saojiao"})])]),a("van-field",{attrs:{label:"法定代表人身份证号",type:"text","input-align":"right",placeholder:"请输入",border:!1,disabled:2==t.$route.query.OTP},model:{value:t.form.enterpriseCorporateIdCard,callback:function(e){t.$set(t.form,"enterpriseCorporateIdCard",e)},expression:"form.enterpriseCorporateIdCard"}})],1):t._e()],1),a("div",{staticClass:"show-more",on:{click:function(e){return t.showMore()}}},[a("span",[t._v(t._s(0==t.showMoreBox?"查看更多":"收回"))]),t.showMoreBox?t._e():a("van-icon",{staticStyle:{position:"relative",top:"2px"},attrs:{name:"arrow-down"}}),t.showMoreBox?a("van-icon",{staticStyle:{position:"relative",top:"1px"},attrs:{name:"arrow-up"}}):t._e()],1),t._l(t.fuLiContactsInfoDTOS,function(e,o){return a("div",{key:o,staticClass:"first-contact"},[a("div",{staticClass:"title"},[t._v("\n        "+t._s(e.contactsIdentification)+" \n      ")]),a("van-cell-group",{staticStyle:{background:"#FCFCFC"},attrs:{border:!1}},[a("van-field",{attrs:{label:"姓名",type:"text",disabled:2==t.$route.query.OTP,required:e.contactsIdentification.indexOf("第一")>-1||!1,"input-align":"right",placeholder:"请输入联系人姓名（必填）",error:!1,border:!1},model:{value:e.contactsName,callback:function(a){t.$set(e,"contactsName",a)},expression:"itm.contactsName"}}),a("van-field",{attrs:{label:"职务",type:"text",required:e.contactsIdentification.indexOf("第一")>-1||!1,"input-align":"right",placeholder:"请输入联系人职务（必填）",error:!1,border:!1,disabled:2==t.$route.query.OTP},model:{value:e.contactsPost,callback:function(a){t.$set(e,"contactsPost",a)},expression:"itm.contactsPost"}}),a("van-field",{attrs:{label:"手机",type:"tel",required:e.contactsIdentification.indexOf("第一")>-1||!1,"input-align":"right",placeholder:"请输入联系人手机（11位纯数字）",error:!1,border:!1,disabled:2==t.$route.query.OTP},model:{value:e.contactsMoblie,callback:function(a){t.$set(e,"contactsMoblie",a)},expression:"itm.contactsMoblie"}}),a("van-field",{attrs:{label:"邮箱",type:"text",required:e.contactsIdentification.indexOf("第一")>-1||!1,"input-align":"right",placeholder:"请输入联系人邮箱",error:!1,border:!1,disabled:2==t.$route.query.OTP},model:{value:e.contactsEmail,callback:function(a){t.$set(e,"contactsEmail",a)},expression:"itm.contactsEmail"}})],1)],1)}),a("div",{staticClass:"footer"},[2!=t.$route.query.OTP?a("van-button",{staticClass:"gradual-btn",staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.addBut}},[t._v("\n        "+t._s(t.butTxt)+"\n      ")]):t._e()],1)],2),a("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.selectStartTime,callback:function(e){t.selectStartTime=e},expression:"selectStartTime"}},[a("van-datetime-picker",{attrs:{type:"date","max-date":t.maxDate,"min-date":t.minDate,formatter:t.formatter},on:{confirm:function(e){return t.startconfirm(e)},cancel:function(e){return t.startconfirm()}},model:{value:t.currentTime,callback:function(e){t.currentTime=e},expression:"currentTime"}})],1)],1)},n=[],i=(a("28a5"),a("97a7")),r=a("5217"),s=a("ed08"),c={name:"AddCustomer",data:function(){return{customerProfile:-1,showMoreBox:!1,selectStartTime:!1,createTime:"",maxDate:new Date,minDate:new Date(1900,1,1),currentTime:new Date,form:{companyName:"",companyAdress:"",companyIndustry:"",companyCreditQuota:"",companyCustomerType:"",companyInitialFundingRequirements:"",companyUnifiedCreditCode:"",companyRegisteredCapital:"",companyEstablishmentTime:"",companyBankAccount:"",enterpriseActualController:"",enterpriseCorporateRepresentative:"",enterpriseCorporateIdCard:"",companyAbbreviation:"",companyBusinessLicense:"",openingAccountInformation:"",documentType:"",contactsFixedTelephone:""},fuLiContactsInfoDTOS:[{contactsFirsted:"1",contactsSecond:"0",contactsName:"",contactsPost:"",contactsMoblie:"",contactsEmail:"",contactsIdentification:"第一联络人"},{contactsFirsted:"0",contactsSecond:"1",contactsName:"",contactsPost:"",contactsMoblie:"",contactsEmail:"",contactsIdentification:"第二联络人"}],duty:"",mobile:"",butTxt:"新建完成"}},computed:{},watch:{},destroyed:function(){this.$store.commit("SET_UserType",!1)},created:function(){this.$route.query.id&&(this.$store.commit("SET_UserType",!0),this.getData())},methods:{formatter:function(t,e){return"".concat(e,"year"===t?"年":"month"===t?"月":"日")},showMore:function(){this.showMoreBox=!this.showMoreBox},startTimeClick:function(){this.selectStartTime=!0},startconfirm:function(t){if(Object(s["e"])(t))this.selectStartTime=!1;else{var e=Object(s["d"])(new Date(t),"yyyy-MM-dd","special"),a=e.split("-");this.form.companyEstablishmentTime="".concat(a[0],"-").concat(a[1],"-").concat(a[2]),this.selectStartTime=!1}},addBut:function(){var t=this,e=this.form;e.fuLiContactsInfoDTOS=this.fuLiContactsInfoDTOS,delete e.companyId;var a={companyCustomerType:"客户类别",companyCreditQuota:"授信额度",companyAdress:"地址",companyIndustry:"行业",companyAbbreviation:"客户简称",companyName:"客户名称",companyBusinessLicense:"统一社会信用代码"};this.$checkFrom(e,a)&&(Object(s["e"])(e.fuLiContactsInfoDTOS[0].contactsName)?t.$notify("第一联系人姓名不能为空"):Object(s["e"])(e.fuLiContactsInfoDTOS[0].contactsPost)?t.$notify("第一联系人职务不能为空"):Object(s["c"])(e.fuLiContactsInfoDTOS[0].contactsMoblie)?Object(s["b"])(e.fuLiContactsInfoDTOS[0].contactsEmail)?this.$route.query.id?this.updated():this.inserted():t.$notify("请确认第一联系人邮箱"):t.$notify("请确认第一联系人手机号码"))},inserted:function(){var t=this,e=this,a=this.form,o=!0;if(a.fuLiContactsInfoDTOS=this.fuLiContactsInfoDTOS,delete a.companyId,Object(s["e"])(a.fuLiContactsInfoDTOS[0].contactsName))return e.$notify("第一联系人姓名不能为空"),void(o=!1);if(Object(s["e"])(a.fuLiContactsInfoDTOS[0].contactsPost))return e.$notify("第一联系人职务不能为空"),void(o=!1);if(!Object(s["c"])(a.fuLiContactsInfoDTOS[0].contactsMoblie))return e.$notify("第一联系人手机号码有误"),void(o=!1);Object(s["b"])(a.fuLiContactsInfoDTOS[0].contactsEmail)||(e.$notify("第一联系人邮箱邮箱有误"),o=!1);var n={companyName:"客户名称",companyIndustry:"行业",companyAdress:"地址",companyCreditQuota:"授信额度",companyCustomerType:"客户类别",companyAbbreviation:"客户简称",companyBusinessLicense:"营业执照"};o&&this.$checkFrom(a,n)&&Object(i["c"])(a).then(function(e){e.data?(t.$notifySty("操作成功"),t.$router.go(-1)):t.$notify(e.message)})},updated:function(){var t=this,e=this.form;delete e.createTime,delete e.updateTime,delete e.leadingOfficialUserId,e.fuLiContactsInfoDTOS=this.fuLiContactsInfoDTOS,this.$checkFrom(e)&&Object(i["e"])(e).then(function(e){t.$notifySty("操作成功"),t.$router.go(-1)})},getData:function(){var t=this,e={id:this.$route.query.id};Object(r["m"])(e).then(function(e){t.tabData=e.data,t.form=e.data,t.fuLiContactsInfoDTOS=e.data.fuLiContactsInfoVO;var a=t.fuLiContactsInfoDTOS;a=a||[];var o=null,n=null,i=[];a.map(function(t,e){return t.contactsIdentification=t.contactsIdentification||"",t.contactsIdentification.indexOf("第一")>-1&&(o=t),t.contactsIdentification.indexOf("第二")>-1&&(n=t),-1==t.contactsIdentification.indexOf("第二")&&-1==t.contactsIdentification.indexOf("第一")&&i.push(t),t}),n&&i.unshift(n),o&&i.unshift(o),t.fuLiContactsInfoDTOS=i,t.butTxt="提交更新"})}}},l=c,u=(a("7438"),a("2877")),d=Object(u["a"])(l,o,n,!1,null,"7f4c486b",null);e["default"]=d.exports},e0f9:function(t,e,a){}}]);
//# sourceMappingURL=chunk-672af9b6.e15e5cc6.js.map