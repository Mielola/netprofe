"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[107],{40107:(j,F,c)=>{c.r(F),c.d(F,{default:()=>J});var l=c(10467),m=c(60177),v=c(88834),h=c(99213),y=c(96695),f=c(49192),p=c(89417),D=c(82765),s=c(30636),i=c(59042),o=c(96850),e=c(54438),g=c(46601),x=c(42641),b=c(95416),w=c(75351);const S=["leasesFormTemplate"];function C(a,u){1&a&&(e.j41(0,"mat-error"),e.EFF(1," Address is required "),e.k0s())}function I(a,u){1&a&&(e.j41(0,"mat-error"),e.EFF(1," Comment is required "),e.k0s())}function _(a,u){if(1&a&&(e.j41(0,"option",33),e.EFF(1),e.k0s()),2&a){const t=u.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t," ")}}function E(a,u){1&a&&(e.j41(0,"mat-error"),e.EFF(1," Binding Comment is required "),e.k0s())}function A(a,u){if(1&a){const t=e.RV6();e.j41(0,"h2",18),e.EFF(1,"Notes"),e.k0s(),e.j41(2,"h3",19),e.EFF(3,"Add notes to leases"),e.k0s(),e.j41(4,"form",20),e.bIt("ngSubmit",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.onSubmit())}),e.j41(5,"mat-form-field",21)(6,"mat-label"),e.EFF(7,"Address"),e.k0s(),e.nrm(8,"input",22),e.DNE(9,C,2,0,"mat-error",23),e.k0s(),e.j41(10,"mat-form-field",24)(11,"mat-label"),e.EFF(12,"Comment"),e.k0s(),e.nrm(13,"input",25),e.DNE(14,I,2,0,"mat-error",23),e.k0s(),e.j41(15,"mat-form-field",26)(16,"mat-label",27),e.EFF(17,"Select Binding Type"),e.k0s(),e.j41(18,"select",28),e.DNE(19,_,2,2,"option",29),e.k0s(),e.nrm(20,"mat-icon",30),e.k0s(),e.j41(21,"mat-form-field",24)(22,"mat-label"),e.EFF(23,"Binding Comment"),e.k0s(),e.nrm(24,"input",31),e.DNE(25,E,2,0,"mat-error",23),e.k0s(),e.j41(26,"button",32)(27,"span"),e.EFF(28,"Create DHCP Server"),e.k0s()()()}if(2&a){let t,r,n;const d=e.XpG();e.R7$(4),e.Y8G("formGroup",d.noteLeasesForm),e.R7$(5),e.Y8G("ngIf",(null==(t=d.noteLeasesForm.get("address"))||null==t.errors?null:t.errors.required)&&(null==(t=d.noteLeasesForm.get("address"))?null:t.touched)),e.R7$(5),e.Y8G("ngIf",(null==(r=d.noteLeasesForm.get("comment"))||null==r.errors?null:r.errors.required)&&(null==(r=d.noteLeasesForm.get("comment"))?null:r.touched)),e.R7$(5),e.Y8G("ngForOf",d.bindingType),e.R7$(),e.Y8G("svgIcon","heroicons_solid:map-pin"),e.R7$(5),e.Y8G("ngIf",(null==(n=d.noteLeasesForm.get("binding_comment"))||null==n.errors?null:n.errors.required)&&(null==(n=d.noteLeasesForm.get("binding_comment"))?null:n.touched)),e.R7$(),e.Y8G("disabled",!d.noteLeasesForm.valid||d.isSubmitting)}}function $(a,u){if(1&a){const t=e.RV6();e.j41(0,"tr",34)(1,"th",35)(2,"div",36)(3,"div",37),e.EFF(4),e.k0s()()(),e.j41(5,"td",38),e.EFF(6),e.k0s(),e.j41(7,"td",38),e.EFF(8),e.k0s(),e.j41(9,"td",38),e.EFF(10),e.k0s(),e.j41(11,"td",38),e.EFF(12),e.k0s(),e.j41(13,"td",38),e.EFF(14),e.k0s(),e.j41(15,"td",38),e.EFF(16),e.k0s(),e.j41(17,"td",39)(18,"a",40),e.bIt("click",function(){const n=e.eBV(t).$implicit,d=e.XpG();return e.Njj(d.deleteNetworks(n.address))}),e.nrm(19,"mat-icon",41),e.k0s(),e.j41(20,"a",42),e.bIt("click",function(){const n=e.eBV(t).$implicit,d=e.XpG();return e.Njj(d.openUserForm(n.address))}),e.EFF(21," Add Notes "),e.k0s()()()}if(2&a){const t=u.$implicit;e.R7$(4),e.SpI(" ",t.address," "),e.R7$(2),e.SpI(" ",t["mac-address"]," "),e.R7$(2),e.SpI(" ",t["client-id"]," "),e.R7$(2),e.SpI(" ",t.server," "),e.R7$(2),e.SpI(" ",t["host-name"]," "),e.R7$(2),e.SpI(" ",t.status," "),e.R7$(2),e.SpI(" ",t.comment," ")}}let N=(()=>{class a{constructor(t,r,n,d,k){this.fuseConfirmationService=t,this.dhcpService=r,this.snackBar=n,this.dialog=d,this.fb=k,this.bindingType=["blocked","bypassed","regular"]}ngOnInit(){}initializeForm(t){this.noteLeasesForm=this.fb.group({address:[{value:t,disabled:!0},p.k0.required],comment:[null,p.k0.required],binding_type:[null,p.k0.required],binding_comment:[null,p.k0.required]})}openUserForm(t){const r=this.dialog.open(this.leasesFormTemplate,{width:"500px"});this.address=t,this.initializeForm(t),r.afterClosed().subscribe(n=>{})}onSubmit(){var t=this;return(0,l.A)(function*(){if(t.noteLeasesForm.valid){const r={address:t.address,comment:t.noteLeasesForm.value.comment,binding_type:t.noteLeasesForm.value.binding_type,binding_comment:t.noteLeasesForm.value.binding_comment};console.log("FORM DATA",r);const n=yield t.dhcpService.postLeases(r);console.log(n),"success"===n.status&&(t.snackBar.open("Successfully Add Notes","Close",{duration:3e3}),t.dialog.closeAll())}})()}deleteNetworks(t){this.fuseConfirmationService.open({title:"Delete Confirmation",message:`Are you sure want to delete ${t}?`,actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this.deleteNetworkBygateway(t)})}deleteNetworkBygateway(t){var r=this;return(0,l.A)(function*(){const n=yield r.dhcpService.deleteNetwork(t);console.log(n),"success"===n.status&&(r.snackBar.open("DHCP Server deleted successfully","Close",{duration:3e3}),window.location.reload())})()}static{this.\u0275fac=function(r){return new(r||a)(e.rXU(g.G),e.rXU(x.S),e.rXU(b.UG),e.rXU(w.bZ),e.rXU(p.ok))}}static{this.\u0275cmp=e.VBU({type:a,selectors:[["app-dhcp-leases"]],viewQuery:function(r,n){if(1&r&&e.GBs(S,5),2&r){let d;e.mGM(d=e.lsd())&&(n.leasesFormTemplate=d.first)}},inputs:{dhcpLeases:"dhcpLeases"},decls:37,vars:1,consts:[["leasesFormTemplate",""],[1,"p-0","m-0"],[1,"mb-10","pb-10"],[1,"bg-card","flex","w-full","flex-col","overflow-hidden","rounded-2xl","border","p-4","shadow-sm","sm:col-span-6"],[1,"flex","w-full","flex-col","items-start","justify-between","truncate","px-4","text-lg","font-medium","leading-6","tracking-tight","sm:flex-row","sm:items-center"],[1,"flex","flex-col","items-start","gap-3","sm:flex-row","sm:items-center"],["for","table-search",1,"sr-only"],[1,"relative","my-2"],[1,"rtl:inset-r-0","pointer-events-none","absolute","inset-y-0","start-0","flex","items-center","ps-3"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"h-4","w-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],["type","text","id","table-search-users","placeholder","Search users",1,"dark:placeholder-gray-400","block","rounded-lg","border","border-gray-300","bg-gray-50","p-2","ps-10","text-sm","text-gray-900","focus:border-blue-500","focus:ring-blue-500","dark:border-gray-600","dark:bg-gray-700","dark:text-white","dark:focus:border-blue-500","dark:focus:ring-blue-500"],[1,"p-3"],[1,"relative","max-h-[67svh]","overflow-x-auto","sm:rounded-lg"],[1,"h-fit","w-full","overflow-y-auto","text-left","text-sm","text-gray-500","dark:text-gray-400","rtl:text-right"],[1,"text-xs","uppercase","text-gray-700","dark:text-gray-400"],["scope","col",1,"px-2","py-3","text-xs","sm:px-6","sm:text-sm"],["class","max-w-full",4,"ngFor","ngForOf"],[1,"text-xl","font-bold"],[1,"font-medium","opacity-70"],[1,"mt-2","flex","flex-col","overflow-hidden","rounded-2xl","p-1","pb-4",3,"ngSubmit","formGroup"],["appearance","outline",1,"w-full","mb-2"],["matInput","","formControlName","address","placeholder","172.16.14.1/24"],[4,"ngIf"],["appearance","outline",1,"w-full","mb-1"],["matInput","","formControlName","comment","placeholder","Comment"],[1,"gt-xs:pr-3","mb-2","flex-auto"],[1,"text-sm"],["matNativeControl","","formControlName","binding_type","required",""],[3,"value",4,"ngFor","ngForOf"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","","formControlName","binding_comment","placeholder","Binding Comment"],["type","submit",1,"bg-green-600","text-white","p-3","font-semibold","rounded","hover:bg-green-700","transition-colors","disabled:bg-gray-400",3,"disabled"],[3,"value"],[1,"max-w-full"],["scope","row",1,"flex","items-center","whitespace-nowrap","px-2","py-4","font-medium","text-gray-900","dark:text-white","sm:px-6"],[1,"max-sm:pr-4"],[1,"text-base","font-medium"],[1,"px-2","py-4","text-sm","sm:px-6","sm:text-sm"],[1,"px-2","sm:px-6","translate-y-[10px]","flex","items-center"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-red-500","hover:cursor-pointer","hover:bg-red-600","rounded","hover:underline",3,"click"],["svgIcon","heroicons_solid:trash",1,"text-white",2,"transform","scale(0.7)"],[1,"font-medium","mx-1","py-[6px]","px-2","text-white","dark:text-white","bg-green-500","hover:bg-green-600","rounded","hover:cursor-pointer",3,"click"]],template:function(r,n){1&r&&(e.DNE(0,A,29,7,"ng-template",1,0,e.C5r),e.j41(2,"section",2)(3,"div",3)(4,"div",4),e.EFF(5," DHCP Leases "),e.j41(6,"div",5)(7,"label",6),e.EFF(8,"Search"),e.k0s(),e.j41(9,"div",7)(10,"div",8),e.qSk(),e.j41(11,"svg",9),e.nrm(12,"path",10),e.k0s()(),e.joV(),e.nrm(13,"input",11),e.k0s()()(),e.j41(14,"div",12)(15,"div",13)(16,"table",14)(17,"thead",15)(18,"tr")(19,"th",16),e.EFF(20," Address "),e.k0s(),e.j41(21,"th",16),e.EFF(22," MAC Address "),e.k0s(),e.j41(23,"th",16),e.EFF(24," Client ID "),e.k0s(),e.j41(25,"th",16),e.EFF(26," Server "),e.k0s(),e.j41(27,"th",16),e.EFF(28," Active Host "),e.k0s(),e.j41(29,"th",16),e.EFF(30," Status "),e.k0s(),e.j41(31,"th",16),e.EFF(32," Comment "),e.k0s(),e.j41(33,"th",16),e.EFF(34," Action "),e.k0s()()(),e.j41(35,"tbody"),e.DNE(36,$,22,7,"tr",17),e.k0s()()()()()()),2&r&&(e.R7$(36),e.Y8G("ngForOf",n.dhcpLeases))},dependencies:[o.RI,h.m_,h.An,f.iI,v.Hl,m.MD,m.Sq,m.bT,p.X1,p.qT,p.xH,p.y7,p.me,p.wz,p.BC,p.cb,p.YS,p.j4,p.JD,p.YN,s.RG,s.rl,s.nJ,s.TL,s.JW,i.fS,i.fg,D.g7],encapsulation:2})}}return a})();const R=()=>["add-dhcp-networks"],L=a=>["edit-dhcp-networks",a];function T(a,u){if(1&a){const t=e.RV6();e.j41(0,"tr",20)(1,"th",21)(2,"div",22)(3,"div",23),e.EFF(4),e.k0s()()(),e.j41(5,"td",24),e.EFF(6),e.k0s(),e.j41(7,"td",24),e.EFF(8),e.k0s(),e.j41(9,"td",24),e.EFF(10),e.k0s(),e.j41(11,"td",25)(12,"a",26),e.bIt("click",function(){const n=e.eBV(t).$implicit,d=e.XpG();return e.Njj(d.deleteNetworks(n.gateway))}),e.nrm(13,"mat-icon",27),e.k0s(),e.j41(14,"a",28),e.nrm(15,"mat-icon",29),e.k0s()()()}if(2&a){const t=u.$implicit;e.R7$(4),e.SpI(" ",t.address," "),e.R7$(2),e.SpI(" ",t.gateway," "),e.R7$(2),e.SpI(" ",t["dns-server"]," "),e.R7$(2),e.SpI(" ",t["win-server"]," "),e.R7$(4),e.Y8G("routerLink",e.eq3(5,L,t.gateway))}}let G=(()=>{class a{constructor(t,r,n){this.fuseConfirmationService=t,this.dhcpService=r,this.snackBar=n}ngOnChanges(t){}deleteNetworks(t){this.fuseConfirmationService.open({title:"Delete Confirmation",message:`Are you sure want to delete ${t}?`,actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this.deleteNetworkBygateway(t)})}deleteNetworkBygateway(t){var r=this;return(0,l.A)(function*(){const n=yield r.dhcpService.deleteNetwork(t);console.log(n),"success"===n.status&&(r.snackBar.open("DHCP Server deleted successfully","Close",{duration:3e3}),window.location.reload())})()}static{this.\u0275fac=function(r){return new(r||a)(e.rXU(g.G),e.rXU(x.S),e.rXU(b.UG))}}static{this.\u0275cmp=e.VBU({type:a,selectors:[["app-dhcp-network"]],inputs:{dhcpNetwork:"dhcpNetwork"},features:[e.OA$],decls:34,vars:5,consts:[[1,"mb-10","pb-10"],[1,"bg-card","flex","w-full","flex-col","overflow-hidden","rounded-2xl","border","p-4","shadow-sm","sm:col-span-6"],[1,"flex","w-full","flex-col","items-start","justify-between","truncate","px-4","text-lg","font-medium","leading-6","tracking-tight","sm:flex-row","sm:items-center"],[1,"flex","flex-col","items-start","gap-3","sm:flex-row","sm:items-center"],["for","table-search",1,"sr-only"],[1,"relative","my-2"],[1,"rtl:inset-r-0","pointer-events-none","absolute","inset-y-0","start-0","flex","items-center","ps-3"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"h-4","w-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],["type","text","id","table-search-users","placeholder","Search users",1,"dark:placeholder-gray-400","block","rounded-lg","border","border-gray-300","bg-gray-50","p-2","ps-10","text-sm","text-gray-900","focus:border-blue-500","focus:ring-blue-500","dark:border-gray-600","dark:bg-gray-700","dark:text-white","dark:focus:border-blue-500","dark:focus:ring-blue-500"],[1,"flex","items-center","gap-2"],["mat-flat-button","",3,"routerLink","color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2","block"],[1,"p-3"],[1,"relative","max-h-[67svh]","overflow-x-auto","sm:rounded-lg"],[1,"h-fit","w-full","overflow-y-auto","text-left","text-sm","text-gray-500","dark:text-gray-400","rtl:text-right"],[1,"text-xs","uppercase","text-gray-700","dark:text-gray-400"],["scope","col",1,"px-2","py-3","text-xs","sm:px-6","sm:text-sm"],["class","max-w-full",4,"ngFor","ngForOf"],[1,"max-w-full"],["scope","row",1,"flex","items-center","whitespace-nowrap","px-2","py-4","font-medium","text-gray-900","dark:text-white","sm:px-6"],[1,"max-sm:pr-4"],[1,"text-base","font-medium"],[1,"px-2","py-4","text-sm","sm:px-6","sm:text-sm"],[1,"px-2","sm:px-6","translate-y-[10px]","flex","items-center"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-red-500","hover:cursor-pointer","hover:bg-red-600","rounded","hover:underline",3,"click"],["svgIcon","heroicons_solid:trash",1,"text-white",2,"transform","scale(0.7)"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-blue-500","hover:bg-blue-600","rounded","hover:underline",3,"routerLink"],["svgIcon","heroicons_solid:pencil-square",1,"text-white",2,"transform","scale(0.7)"]],template:function(r,n){1&r&&(e.j41(0,"section",0)(1,"div",1)(2,"div",2),e.EFF(3," DHCP Networks "),e.j41(4,"div",3)(5,"label",4),e.EFF(6,"Search"),e.k0s(),e.j41(7,"div",5)(8,"div",6),e.qSk(),e.j41(9,"svg",7),e.nrm(10,"path",8),e.k0s()(),e.joV(),e.nrm(11,"input",9),e.k0s(),e.j41(12,"div",10)(13,"a",11),e.nrm(14,"mat-icon",12),e.j41(15,"span",13),e.EFF(16,"Add DHCP Networks"),e.k0s()()()()(),e.j41(17,"div",14)(18,"div",15)(19,"table",16)(20,"thead",17)(21,"tr")(22,"th",18),e.EFF(23," Address "),e.k0s(),e.j41(24,"th",18),e.EFF(25," Gateaway "),e.k0s(),e.j41(26,"th",18),e.EFF(27," DNS Servers "),e.k0s(),e.j41(28,"th",18),e.EFF(29," WINS Servers "),e.k0s(),e.j41(30,"th",18),e.EFF(31," Action "),e.k0s()()(),e.j41(32,"tbody"),e.DNE(33,T,16,7,"tr",19),e.k0s()()()()()()),2&r&&(e.R7$(13),e.Y8G("routerLink",e.lJ4(4,R))("color","primary"),e.R7$(),e.Y8G("svgIcon","person_add_alt_1"),e.R7$(19),e.Y8G("ngForOf",n.dhcpNetwork))},dependencies:[o.RI,h.m_,h.An,f.iI,f.Wk,y.Ou,v.Hl,v.It,m.MD,m.Sq],encapsulation:2})}}return a})();const U=()=>["add-dhcp-server"],B=a=>["edit-dhcp-server",a];function O(a,u){if(1&a){const t=e.RV6();e.j41(0,"tr",20)(1,"th",21)(2,"div",22)(3,"div",23),e.EFF(4),e.k0s()()(),e.j41(5,"td",24),e.EFF(6),e.k0s(),e.j41(7,"td",24),e.EFF(8),e.k0s(),e.j41(9,"td",24),e.EFF(10),e.k0s(),e.j41(11,"td",24),e.EFF(12),e.k0s(),e.j41(13,"td",25)(14,"a",26),e.bIt("click",function(){const n=e.eBV(t).$implicit,d=e.XpG();return e.Njj(d.deleteDhcp(n.name))}),e.nrm(15,"mat-icon",27),e.k0s(),e.j41(16,"a",28),e.nrm(17,"mat-icon",29),e.k0s()()()}if(2&a){const t=u.$implicit;e.R7$(4),e.SpI(" ",t.name," "),e.R7$(2),e.SpI(" ",t.interface," "),e.R7$(2),e.SpI(" ",t.interface," "),e.R7$(2),e.SpI(" ",t["lease-time"]," "),e.R7$(2),e.SpI(" ",t["address-pool"]," "),e.R7$(4),e.Y8G("routerLink",e.eq3(6,B,t.name))}}let P=(()=>{class a{constructor(t,r,n){this.fuseConfirmationService=t,this.dhcpService=r,this.snackBar=n}ngOnChanges(t){t.dhcpServers&&this.dhcpServers&&console.log(this.dhcpServers)}removeItem(t){this.dhcpService.removeItem(t)}deleteDhcp(t){this.fuseConfirmationService.open({title:"Delete Confirmation",message:`Are you sure want to delete ${t}?`,actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this.deleteUserByName(t)})}deleteUserByName(t){var r=this;return(0,l.A)(function*(){const n=yield r.dhcpService.deleteDhcp(t);console.log(n),"success"===n.status&&(r.snackBar.open("DHCP Server deleted successfully","Close",{duration:3e3}),r.removeItem(t))})()}static{this.\u0275fac=function(r){return new(r||a)(e.rXU(g.G),e.rXU(x.S),e.rXU(b.UG))}}static{this.\u0275cmp=e.VBU({type:a,selectors:[["app-dhcp-server"]],inputs:{dhcpServers:"dhcpServers"},features:[e.OA$],decls:36,vars:5,consts:[[1,"mb-10","pb-10"],[1,"bg-card","flex","w-full","flex-col","overflow-hidden","rounded-2xl","border","p-4","shadow-sm","sm:col-span-6"],[1,"flex","w-full","flex-col","items-start","justify-between","truncate","px-4","text-lg","font-medium","leading-6","tracking-tight","sm:flex-row","sm:items-center"],[1,"flex","flex-col","items-start","gap-3","sm:flex-row","sm:items-center"],["for","table-search",1,"sr-only"],[1,"relative","my-2"],[1,"rtl:inset-r-0","pointer-events-none","absolute","inset-y-0","start-0","flex","items-center","ps-3"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"h-4","w-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],["type","text","id","table-search-users","placeholder","Search users",1,"dark:placeholder-gray-400","block","rounded-lg","border","border-gray-300","bg-gray-50","p-2","ps-10","text-sm","text-gray-900","focus:border-blue-500","focus:ring-blue-500","dark:border-gray-600","dark:bg-gray-700","dark:text-white","dark:focus:border-blue-500","dark:focus:ring-blue-500"],[1,"flex","items-center","gap-2"],["mat-flat-button","",3,"routerLink","color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2","block"],[1,"p-3"],[1,"relative","max-h-[67svh]","overflow-x-auto","sm:rounded-lg"],[1,"h-fit","w-full","overflow-y-auto","text-left","text-sm","text-gray-500","dark:text-gray-400","rtl:text-right"],[1,"text-xs","uppercase","text-gray-700","dark:text-gray-400"],["scope","col",1,"px-2","py-3","text-xs","sm:px-6","sm:text-sm"],["class","max-w-full",4,"ngFor","ngForOf"],[1,"max-w-full"],["scope","row",1,"flex","items-center","whitespace-nowrap","px-2","py-4","font-medium","text-gray-900","dark:text-white","sm:px-6"],[1,"max-sm:pr-4"],[1,"text-base","font-medium"],[1,"px-2","py-4","text-sm","sm:px-6","sm:text-sm"],[1,"px-2","sm:px-6","translate-y-[10px]","flex","items-center"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-red-500","hover:cursor-pointer","hover:bg-red-600","rounded","hover:underline",3,"click"],["svgIcon","heroicons_solid:trash",1,"text-white",2,"transform","scale(0.7)"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-blue-500","hover:bg-blue-600","rounded","hover:underline",3,"routerLink"],["svgIcon","heroicons_solid:pencil-square",1,"text-white",2,"transform","scale(0.7)"]],template:function(r,n){1&r&&(e.j41(0,"section",0)(1,"div",1)(2,"div",2),e.EFF(3," DHCP "),e.j41(4,"div",3)(5,"label",4),e.EFF(6,"Search"),e.k0s(),e.j41(7,"div",5)(8,"div",6),e.qSk(),e.j41(9,"svg",7),e.nrm(10,"path",8),e.k0s()(),e.joV(),e.nrm(11,"input",9),e.k0s(),e.j41(12,"div",10)(13,"a",11),e.nrm(14,"mat-icon",12),e.j41(15,"span",13),e.EFF(16,"Add DHCP"),e.k0s()()()()(),e.j41(17,"div",14)(18,"div",15)(19,"table",16)(20,"thead",17)(21,"tr")(22,"th",18),e.EFF(23," Name "),e.k0s(),e.j41(24,"th",18),e.EFF(25," Interface "),e.k0s(),e.j41(26,"th",18),e.EFF(27," Relay "),e.k0s(),e.j41(28,"th",18),e.EFF(29," Leases Time "),e.k0s(),e.j41(30,"th",18),e.EFF(31," Address Pool "),e.k0s(),e.j41(32,"th",18),e.EFF(33," Actions "),e.k0s()()(),e.j41(34,"tbody"),e.DNE(35,O,18,8,"tr",19),e.k0s()()()()()()),2&r&&(e.R7$(13),e.Y8G("routerLink",e.lJ4(4,U))("color","primary"),e.R7$(),e.Y8G("svgIcon","person_add_alt_1"),e.R7$(21),e.Y8G("ngForOf",n.dhcpServers))},dependencies:[o.RI,h.m_,h.An,f.iI,f.Wk,y.Ou,v.Hl,v.It,m.MD,m.Sq],encapsulation:2})}}return a})();var Y=c(21413),M=c(56977);const X=()=>["/dashboards/customer"];function H(a,u){if(1&a&&e.nrm(0,"app-dhcp-server",12),2&a){const t=e.XpG();e.Y8G("dhcpServers",t.dhcpServers)}}function V(a,u){if(1&a&&e.nrm(0,"app-dhcp-network",13),2&a){const t=e.XpG();e.Y8G("dhcpNetwork",t.dhcpNetwork)}}function W(a,u){if(1&a&&e.nrm(0,"app-dhcp-leases",14),2&a){const t=e.XpG();e.Y8G("dhcpLeases",t.dhcpLeases)}}const J=[{path:"",component:(()=>{class a{constructor(t){this.dhcpService=t,this.dhcpServers=[],this.dhcpNetwork=[],this.dhcpLeases=[],this.availableInterface=[],this.selectedTabIndex=0,this.destroyed$=new Y.B}fetchData(){var t=this;return(0,l.A)(function*(){(yield t.dhcpService.getDhcp()).subscribe(n=>{t.dhcpServers=n,t.availableInterface=n.availableInterfaces}),(yield t.dhcpService.getNetwork()).pipe((0,M.Q)(t.destroyed$)).subscribe(n=>{t.dhcpNetwork=n.networks});const r=yield t.dhcpService.getLeases();t.dhcpLeases=r.leases})()}getAvailable(){return this.availableInterface}ngOnInit(){var t=this;return(0,l.A)(function*(){yield t.fetchData();const r=localStorage.getItem("dhcpTabIndex");r&&(t.selectedTabIndex=parseInt(r))})()}onTabChanged(t){localStorage.setItem("dhcpTabIndex",t.index.toString())}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}static{this.\u0275fac=function(r){return new(r||a)(e.rXU(x.S))}}static{this.\u0275cmp=e.VBU({type:a,selectors:[["app-dhcp"]],decls:13,vars:6,consts:[[1,"w-full"],["aria-label","Breadcrumb",1,"flex","shadow","px-5","py-3","text-gray-700","borde","bg-white","dark:bg-slate-800"],[1,"inline-flex","items-center","space-x-1","md:space-x-2","rtl:space-x-reverse"],[1,"inline-flex","items-center"],[1,"inline-flex","items-center","text-sm","font-medium","text-gray-700","hover:text-blue-600","dark:text-gray-400","dark:hover:text-white",3,"routerLink"],[3,"selectedIndexChange","selectedTabChange","selectedIndex"],["label","DHCP",1,"text-white"],[3,"dhcpServers",4,"ngIf"],["label","Networks"],[3,"dhcpNetwork",4,"ngIf"],["label","Leases"],[3,"dhcpLeases",4,"ngIf"],[3,"dhcpServers"],[3,"dhcpNetwork"],[3,"dhcpLeases"]],template:function(r,n){1&r&&(e.j41(0,"section",0)(1,"nav",1)(2,"ol",2)(3,"li",3)(4,"a",4),e.EFF(5," DHCP Server "),e.k0s()()()(),e.j41(6,"mat-tab-group",5),e.mxI("selectedIndexChange",function(k){return e.DH7(n.selectedTabIndex,k)||(n.selectedTabIndex=k),k}),e.bIt("selectedTabChange",function(k){return n.onTabChanged(k)}),e.j41(7,"mat-tab",6),e.DNE(8,H,1,1,"app-dhcp-server",7),e.k0s(),e.j41(9,"mat-tab",8),e.DNE(10,V,1,1,"app-dhcp-network",9),e.k0s(),e.j41(11,"mat-tab",10),e.DNE(12,W,1,1,"app-dhcp-leases",11),e.k0s()()()),2&r&&(e.R7$(4),e.Y8G("routerLink",e.lJ4(5,X)),e.R7$(2),e.R50("selectedIndex",n.selectedTabIndex),e.R7$(2),e.Y8G("ngIf",n.dhcpServers.length>0),e.R7$(2),e.Y8G("ngIf",n.dhcpNetwork.length>0),e.R7$(2),e.Y8G("ngIf",n.dhcpNetwork.length>0))},dependencies:[o.RI,o.mq,o.T8,G,N,h.m_,f.iI,f.Wk,y.Ou,v.Hl,m.MD,m.bT,P],encapsulation:2})}}return a})()},{path:"add-dhcp-server",loadChildren:()=>c.e(5148).then(c.bind(c,55148))},{path:"add-dhcp-networks",loadChildren:()=>c.e(9847).then(c.bind(c,9847))},{path:"edit-dhcp-networks/:gateway",loadChildren:()=>c.e(5063).then(c.bind(c,25063))},{path:"edit-dhcp-server/:name",loadChildren:()=>c.e(8480).then(c.bind(c,18480))}]},42641:(j,F,c)=>{c.d(F,{S:()=>f});var l=c(10467),m=c(51373),v=c(77502),h=c(84412),y=c(54438);let f=(()=>{class p{constructor(){this.apiURrl=v.c.apiUrl,this.availableInterfacesSubject=new h.t([]),this.availableInterfaces$=this.availableInterfacesSubject.asObservable(),this.networksIdSubject=new h.t([]),this.networksId$=this.networksIdSubject.asObservable(),this.dataDhcpNetworkSubject=new h.t([]),this.dataDhcp$=this.dataDhcpNetworkSubject.asObservable(),this.dataDhcpServerSubject=new h.t([]),this.dataDhcpServer$=this.dataDhcpServerSubject.asObservable(),this.dhcpServerIdSubject=new h.t([]),this.dhcpServerId$=this.dhcpServerIdSubject.asObservable(),this.loadingSubject=new h.t(!1),this.loading$=this.loadingSubject.asObservable(),this.errorSubject=new h.t(null),this.error$=this.errorSubject.asObservable(),this.networksCache={},this.dhcpServerCache={}}isDataSame(s,i){return JSON.stringify(s)===JSON.stringify(i)}convertTimeToMinutes(s){const[i,o,e]=s.split(":").map(Number);return`${60*i+o+e/60}m`}removeItem(s){const o=this.dataDhcpServerSubject.getValue().filter(e=>e.name!==s);this.dataDhcpServerSubject.next(o)}getDhcp(){var s=this;return(0,l.A)(function*(){if(s.dhcpCache)return console.log("Data diambil dari cache"),s.dataDhcpServer$;try{const i=yield m.A.get(`${s.apiURrl}api-netpro/api/mikrotik/Dhcp-info`),o=i.data.dhcpServers;return s.isDataSame(o,s.dataDhcpServerSubject.value)?console.log("Data yang diterima sama dengan cache"):(s.dataDhcpServerSubject.next(o),s.dhcpCache=o,console.log("Data diperbarui dari API")),s.availableInterfacesSubject.next(i.data.availableInterfaces),s.dataDhcpServer$}catch(i){throw s.errorSubject.next(i.message),i}})()}deleteDhcp(s){var i=this;return(0,l.A)(function*(){return yield m.A.delete(`${i.apiURrl}api-netpro/api/mikrotik/delete-dhcp/${s}`).then(function(){var o=(0,l.A)(function*(e){return e.data});return function(e){return o.apply(this,arguments)}}()).catch(function(){var o=(0,l.A)(function*(e){return e});return function(e){return o.apply(this,arguments)}}())})()}postDhcp(s){var i=this;return(0,l.A)(function*(){return yield m.A.post(`${i.apiURrl}api-netpro/api/mikrotik/Add-dhcp`,s).then(function(){var o=(0,l.A)(function*(e){if("DHCP server added successfully!"===e.data.message||"DHCP server updated successfully!"===e.data.message){const g=i.dataDhcpServerSubject.getValue(),x={name:s.name,interface:s.interface,"lease-time":i.convertTimeToMinutes(s.lease_time),"address-pool":s.address_pool,add_arp:s.add_arp},b=g.findIndex(S=>S.name===s.name);let w;-1!==b?(g[b]=x,w=[...g]):w=[...g,x],i.dataDhcpServerSubject.next(w)}return e.data});return function(e){return o.apply(this,arguments)}}()).catch(function(){var o=(0,l.A)(function*(e){return console.error("Error in postDhcp:",e),e});return function(e){return o.apply(this,arguments)}}())})()}getDhcpByName(s){var i=this;return(0,l.A)(function*(){if(i.dhcpServerCache[s])return{dhcpServer:[i.dhcpServerCache[s]]};try{const o=yield m.A.get(`${i.apiURrl}api-netpro/api/mikrotik/Dhcp-info/${s}`);return i.dhcpServerCache[s]=o.data.dhcpServer[0],i.dhcpServerIdSubject.next(i.dhcpServerCache),o.data}catch(o){throw console.error("Error fetching network data:",o),o}})()}getNetwork(){var s=this;return(0,l.A)(function*(){try{const o=(yield m.A.get(`${s.apiURrl}api-netpro/api/mikrotik/Network-info`)).data;return s.isDataSame(o,s.dataDhcpNetworkSubject.value)||s.dataDhcpNetworkSubject.next(o),s.dataDhcp$}catch(i){throw console.error("Error fetching network data:",i),i}})()}getNetworkByGateway(s){var i=this;return(0,l.A)(function*(){if(i.networksCache[s])return{networks:[i.networksCache[s]]};try{const o=yield m.A.get(`${i.apiURrl}api-netpro/api/mikrotik/Network-info/${s}`);return i.networksCache[s]=o.data.networks[0],i.networksIdSubject.next(i.networksCache),o.data}catch(o){throw console.error("Error fetching network data:",o),o}})()}deleteNetwork(s){var i=this;return(0,l.A)(function*(){return yield m.A.delete(`${i.apiURrl}api-netpro/api/mikrotik/delete-network/${s}`).then(function(){var o=(0,l.A)(function*(e){return e.data});return function(e){return o.apply(this,arguments)}}()).catch(function(){var o=(0,l.A)(function*(e){return e});return function(e){return o.apply(this,arguments)}}())})()}postNetwork(s){var i=this;return(0,l.A)(function*(){return yield m.A.post(`${i.apiURrl}api-netpro/api/mikrotik/Add-network`,s).then(function(){var o=(0,l.A)(function*(e){return e.data});return function(e){return o.apply(this,arguments)}}()).catch(function(){var o=(0,l.A)(function*(e){return e});return function(e){return o.apply(this,arguments)}}())})()}getLeases(){var s=this;return(0,l.A)(function*(){return yield m.A.get(`${s.apiURrl}api-netpro/api/Lease`).then(function(){var i=(0,l.A)(function*(o){return o.data});return function(o){return i.apply(this,arguments)}}()).catch(function(){var i=(0,l.A)(function*(o){return o});return function(o){return i.apply(this,arguments)}}())})()}deleteLeases(s){var i=this;return(0,l.A)(function*(){return yield m.A.delete(`${i.apiURrl}api-netpro/api/mikrotik/delete-lease/${s}`).then(function(){var o=(0,l.A)(function*(e){return e.data});return function(e){return o.apply(this,arguments)}}()).catch(function(){var o=(0,l.A)(function*(e){return e});return function(e){return o.apply(this,arguments)}}())})()}postLeases(s){var i=this;return(0,l.A)(function*(){return yield m.A.post(`${i.apiURrl}api-netpro/api/mikrotik/Make-lease`,s).then(function(){var o=(0,l.A)(function*(e){return e.data});return function(e){return o.apply(this,arguments)}}()).catch(function(){var o=(0,l.A)(function*(e){return e});return function(e){return o.apply(this,arguments)}}())})()}static{this.\u0275fac=function(i){return new(i||p)}}static{this.\u0275prov=y.jDH({token:p,factory:p.\u0275fac,providedIn:"root"})}}return p})()}}]);