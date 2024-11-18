"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9847],{9847:(D,p,n)=>{n.r(p),n.d(p,{default:()=>j});var f=n(10467),h=n(60177),s=n(89417),v=n(82765),m=n(53719),k=n(99213),g=n(59042),c=n(49192),e=n(54438),F=n(42641),b=n(95416);const w=()=>["/dashboards/dhcp"];function y(o,u){1&o&&(e.j41(0,"mat-error"),e.EFF(1," Address is required "),e.k0s())}function C(o,u){1&o&&(e.j41(0,"mat-error"),e.EFF(1," Gateaway is required "),e.k0s())}function N(o,u){1&o&&(e.j41(0,"mat-error"),e.EFF(1," Dns Server is required "),e.k0s())}function S(o,u){1&o&&(e.j41(0,"span"),e.EFF(1,"Create DHCP Server"),e.k0s())}function x(o,u){1&o&&(e.j41(0,"span"),e.EFF(1,"Creating..."),e.k0s())}const j=[{path:"",component:(()=>{class o{constructor(t,a,r,l){this.fb=t,this.dhcpService=a,this.router=r,this.snackBar=l,this.isSubmitting=!1,this.availableInterfaces$=this.dhcpService.availableInterfaces$,this.loading$=this.dhcpService.loading$,this.error$=this.dhcpService.error$}ngOnInit(){var t=this;return(0,f.A)(function*(){t.initializeForm()})()}initializeForm(){this.dhcpNetworkForm=this.fb.group({address:[null,s.k0.required],gateway:[null,s.k0.required],dns_server:[null,s.k0.required]})}onSubmit(){var t=this;return(0,f.A)(function*(){if(t.dhcpNetworkForm.valid&&!t.isSubmitting){t.isSubmitting=!0;const a={address:t.dhcpNetworkForm.value.address,gateway:t.dhcpNetworkForm.value.gateway,dns_server:t.dhcpNetworkForm.value.dns_server};console.log(a);try{const r=yield t.dhcpService.postNetwork(a);console.log(r),"success"===r.status&&"Network added successfully!"===r.message?t.snackBar.open("DHCP Networks created successfully","Close",{duration:3e3}):"success"===r.status&&"Network updated successfully!"===r.message&&t.snackBar.open("DHCP Network already exists and will be automatically updated.","Close",{duration:3e3}),yield t.router.navigateByUrl("/dashboards/dhcp",{skipLocationChange:!0}),yield t.router.navigate(["/dashboards/dhcp/add-dhcp-networks"])}catch(r){console.error("Error creating DHCP Server:",r),t.snackBar.open("Error creating DHCP Server","Close",{duration:3e3})}finally{t.isSubmitting=!1}}})()}static{this.\u0275fac=function(a){return new(a||o)(e.rXU(s.ok),e.rXU(F.S),e.rXU(c.Ix),e.rXU(b.UG))}}static{this.\u0275cmp=e.VBU({type:o,selectors:[["app-form-add"]],standalone:!0,features:[e.aNF],decls:32,vars:9,consts:[[1,"h-full","w-full","pb-15"],["aria-label","Breadcrumb",1,"flex","shadow","px-5","py-3","text-gray-700","borde","bg-white","dark:bg-slate-800"],[1,"inline-flex","items-center","space-x-1","md:space-x-2","rtl:space-x-reverse"],[1,"inline-flex","items-center"],[1,"inline-flex","items-center","text-sm","font-medium","text-gray-700","hover:text-blue-600","dark:text-gray-400","dark:hover:text-white",3,"routerLink"],[1,"flex","items-center"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 6 10",1,"rtl:rotate-180","block","w-3","h-3","mx-1","text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 9 4-4-4-4"],[1,"ms-1","text-sm","font-medium","text-gray-700","hover:text-blue-600","md:ms-2","dark:text-gray-400","dark:hover:text-white"],[1,"p-3"],[1,"bg-card","mt-2","flex","flex-col","overflow-hidden","rounded-2xl","p-8","pb-4","shadow",3,"ngSubmit","formGroup"],["appearance","outline",1,"w-full","mb-2"],["matInput","","formControlName","address","placeholder","172.16.14.1/24"],[4,"ngIf"],["matInput","","formControlName","gateway","placeholder","172.16.14.1"],["matInput","","formControlName","dns_server","placeholder","8.8.8.8"],["type","submit",1,"bg-green-600","text-white","p-3","font-semibold","rounded","hover:bg-green-700","transition-colors","disabled:bg-gray-400",3,"disabled"]],template:function(a,r){if(1&a&&(e.j41(0,"div",0)(1,"nav",1)(2,"ol",2)(3,"li",3)(4,"a",4),e.EFF(5," DHCP Networks "),e.k0s()(),e.j41(6,"li")(7,"div",5),e.qSk(),e.j41(8,"svg",6),e.nrm(9,"path",7),e.k0s(),e.joV(),e.j41(10,"a",8),e.EFF(11,"Add DHCP Networks"),e.k0s()()()()(),e.j41(12,"div",9)(13,"form",10),e.bIt("ngSubmit",function(){return r.onSubmit()}),e.j41(14,"mat-form-field",11)(15,"mat-label"),e.EFF(16,"Address"),e.k0s(),e.nrm(17,"input",12),e.DNE(18,y,2,0,"mat-error",13),e.k0s(),e.j41(19,"mat-form-field",11)(20,"mat-label"),e.EFF(21,"Gateaway"),e.k0s(),e.nrm(22,"input",14),e.DNE(23,C,2,0,"mat-error",13),e.k0s(),e.j41(24,"mat-form-field",11)(25,"mat-label"),e.EFF(26,"Dns Server"),e.k0s(),e.nrm(27,"input",15),e.DNE(28,N,2,0,"mat-error",13),e.k0s(),e.j41(29,"button",16),e.DNE(30,S,2,0,"span",13)(31,x,2,0,"span",13),e.k0s()()()()),2&a){let l,i,d;e.R7$(4),e.Y8G("routerLink",e.lJ4(8,w)),e.R7$(9),e.Y8G("formGroup",r.dhcpNetworkForm),e.R7$(5),e.Y8G("ngIf",(null==(l=r.dhcpNetworkForm.get("address"))||null==l.errors?null:l.errors.required)&&(null==(l=r.dhcpNetworkForm.get("address"))?null:l.touched)),e.R7$(5),e.Y8G("ngIf",(null==(i=r.dhcpNetworkForm.get("gateway"))||null==i.errors?null:i.errors.required)&&(null==(i=r.dhcpNetworkForm.get("gateway"))?null:i.touched)),e.R7$(5),e.Y8G("ngIf",(null==(d=r.dhcpNetworkForm.get("dns_server"))||null==d.errors?null:d.errors.required)&&(null==(d=r.dhcpNetworkForm.get("dns_server"))?null:d.touched)),e.R7$(),e.Y8G("disabled",!r.dhcpNetworkForm.valid||r.isSubmitting),e.R7$(),e.Y8G("ngIf",!r.isSubmitting),e.R7$(),e.Y8G("ngIf",r.isSubmitting)}},dependencies:[c.iI,c.Wk,s.X1,s.qT,s.me,s.BC,s.cb,s.j4,s.JD,s.YN,m.RG,m.rl,m.nJ,m.TL,k.m_,g.fS,g.fg,h.MD,h.bT,v.g7],encapsulation:2})}}return o})()}]}}]);