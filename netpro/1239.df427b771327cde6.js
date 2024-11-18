"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[1239],{41239:(w,p,n)=>{n.r(p),n.d(p,{default:()=>E});var h=n(10467),u=n(60177),t=n(89417),m=n(53719),v=n(99213),g=n(59042),c=n(49192),e=n(54438),F=n(70600),k=n(65706),x=n(25798),b=n(46601);const C=()=>["/dashboards/customer"];function N(a,d){1&a&&(e.j41(0,"mat-error"),e.EFF(1,"NIK / Nomer HP wajib diisi"),e.k0s())}function y(a,d){1&a&&(e.j41(0,"mat-error"),e.EFF(1,"Format NIK / Nomer HP tidak valid (harus 10-12 digit angka)"),e.k0s())}function I(a,d){1&a&&(e.j41(0,"mat-error"),e.EFF(1,"Nama wajib diisi"),e.k0s())}function j(a,d){if(1&a&&(e.j41(0,"option",20),e.EFF(1),e.k0s()),2&a){const r=d.$implicit;e.Y8G("value",r.profile_name),e.R7$(),e.SpI(" ",r.profile_name," ")}}const E=[{path:"",component:(()=>{class a{constructor(r,o,i,l,s,f,A,G){this.platform=r,this.router=o,this.fb=i,this.roleService=l,this.userService=s,this.route=f,this.location=A,this.fuseConfirmationService=G,this.roleDatas=[]}ngOnInit(){this.userForm=this.fb.group({no_hp:["",[t.k0.required,t.k0.pattern(/^[0-9]+$/)]],name:["",t.k0.required],profile:["",t.k0.required]}),this.platform.backButton.subscribeWithPriority(10,()=>{this.router.navigate(["/dashboard/customer"])}),this.userForm.patchValue({profile:"default"}),this.getRole()}getRole(){var r=this;return(0,h.A)(function*(){const o=yield r.roleService.getProfile();console.log(o),r.roleDatas=o.profiles})()}onSubmit(){var r=this;return(0,h.A)(function*(){if(r.userForm.valid){const o=new FormData;o.append("no_hp",r.userForm.value.no_hp),o.append("name",r.userForm.value.name),o.append("profile",r.userForm.value.profile);const i=yield r.userService.addUsers(o);console.log(i),i?(r.userForm.reset(),r.userForm.disable(),r.location.back()):r.fuseConfirmationService.open({title:"Notification",message:"The user data already exists on the server. Would you like to create another account anyway?",icon:{color:"warning"},actions:{confirm:{label:"Confirmation",color:"warn"}}})}else console.log("invalid form")})()}preventInvalidChars(r){r.target.value=r.target.value.replace(/[^0-9]/g,"")}static{this.\u0275fac=function(o){return new(o||a)(e.rXU(F.OD),e.rXU(c.Ix),e.rXU(t.ok),e.rXU(k.W),e.rXU(x.D),e.rXU(c.Ix),e.rXU(u.aZ),e.rXU(b.G))}}static{this.\u0275cmp=e.VBU({type:a,selectors:[["app-form-add"]],standalone:!0,features:[e.aNF],decls:33,vars:10,consts:[[1,"h-full","w-full"],["aria-label","Breadcrumb",1,"flex","shadow","px-5","py-3","text-gray-700","borde","bg-white","dark:bg-slate-800"],[1,"inline-flex","items-center","space-x-1","md:space-x-2","rtl:space-x-reverse"],[1,"inline-flex","items-center"],[1,"inline-flex","items-center","text-sm","font-medium","text-gray-700","hover:text-blue-600","dark:text-gray-400","dark:hover:text-white",3,"routerLink"],[1,"flex","items-center"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 6 10",1,"rtl:rotate-180","block","w-3","h-3","mx-1","text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 9 4-4-4-4"],[1,"ms-1","text-sm","font-medium","text-gray-700","hover:text-blue-600","md:ms-2","dark:text-gray-400","dark:hover:text-white"],[1,"p-3"],[1,"bg-card","mt-2","flex","flex-col","overflow-hidden","rounded-2xl","p-8","pb-4","shadow",3,"formGroup"],["floatLabel","always",1,"w-full","mb-2"],["matInput","","formControlName","no_hp","type","number",3,"input","placeholder"],[4,"ngIf"],["matInput","","formControlName","name",3,"placeholder"],[1,"gt-xs:pr-3","mb-2","flex-auto"],["matNativeControl","","formControlName","profile"],[3,"value",4,"ngFor","ngForOf"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],[1,"bg-green-600","text-white","p-2","rounded",3,"click"],[3,"value"]],template:function(o,i){if(1&o&&(e.j41(0,"div",0)(1,"nav",1)(2,"ol",2)(3,"li",3)(4,"a",4),e.EFF(5," Hotspot Users "),e.k0s()(),e.j41(6,"li")(7,"div",5),e.qSk(),e.j41(8,"svg",6),e.nrm(9,"path",7),e.k0s(),e.joV(),e.j41(10,"a",8),e.EFF(11,"Tambah Akun"),e.k0s()()()()(),e.j41(12,"div",9)(13,"form",10)(14,"mat-form-field",11)(15,"mat-label"),e.EFF(16,"NIK / Nomer Hp"),e.k0s(),e.j41(17,"input",12),e.bIt("input",function(s){return i.preventInvalidChars(s)}),e.k0s(),e.DNE(18,N,2,0,"mat-error",13)(19,y,2,0,"mat-error",13),e.k0s(),e.j41(20,"mat-form-field",11)(21,"mat-label"),e.EFF(22,"Nama Pengguna"),e.k0s(),e.nrm(23,"input",14),e.DNE(24,I,2,0,"mat-error",13),e.k0s(),e.j41(25,"mat-form-field",15)(26,"mat-label"),e.EFF(27,"Profile Akun"),e.k0s(),e.j41(28,"select",16),e.DNE(29,j,2,2,"option",17),e.k0s(),e.nrm(30,"mat-icon",18),e.k0s(),e.j41(31,"button",19),e.bIt("click",function(){return i.onSubmit()}),e.EFF(32," Tambah Akun "),e.k0s()()()()),2&o){let l,s,f;e.R7$(4),e.Y8G("routerLink",e.lJ4(9,C)),e.R7$(9),e.Y8G("formGroup",i.userForm),e.R7$(4),e.Y8G("placeholder","NIK / Nomer HP"),e.R7$(),e.Y8G("ngIf",null==(l=i.userForm.get("no_hp"))?null:l.hasError("required")),e.R7$(),e.Y8G("ngIf",null==(s=i.userForm.get("no_hp"))?null:s.hasError("pattern")),e.R7$(4),e.Y8G("placeholder","Nama Pengguna"),e.R7$(),e.Y8G("ngIf",null==(f=i.userForm.get("name"))?null:f.hasError("required")),e.R7$(5),e.Y8G("ngForOf",i.roleDatas),e.R7$(),e.Y8G("svgIcon","heroicons_solid:map-pin")}},dependencies:[c.Wk,m.RG,m.rl,m.nJ,m.TL,m.JW,t.YN,t.qT,t.xH,t.y7,t.me,t.Q0,t.wz,t.BC,t.cb,g.fS,g.fg,t.X1,t.j4,t.JD,u.MD,u.Sq,u.bT,v.m_,v.An]})}}return a})()}]}}]);