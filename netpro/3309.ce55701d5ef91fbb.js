"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3309],{33309:(E,l,r)=>{r.r(l),r.d(l,{default:()=>w});var d=r(10467),c=r(60177),m=r(88834),g=r(75351),h=r(99213),f=r(96695),p=r(49192),e=r(54438),u=r(65706),x=r(44742),v=r(80507),y=r(46601);const k=["userFormTemplate"],F=()=>["role-management"],b=()=>["add-role"],R=()=>[1,5,10,25],j=a=>["edit-role",a];function S(a,C){if(1&a){const t=e.RV6();e.j41(0,"tr",25)(1,"th",26)(2,"div",27)(3,"div",28),e.EFF(4),e.k0s(),e.j41(5,"div",29),e.EFF(6),e.k0s()()(),e.j41(7,"td",30),e.EFF(8),e.k0s(),e.j41(9,"td",30),e.EFF(10),e.k0s(),e.j41(11,"td",30),e.EFF(12),e.k0s(),e.j41(13,"td",31)(14,"a",32),e.bIt("click",function(){const n=e.eBV(t).$implicit,s=e.XpG();return e.Njj(s.deteleProfiles(n.profile_name))}),e.nrm(15,"mat-icon",33),e.k0s(),e.j41(16,"a",34),e.nrm(17,"mat-icon",35),e.k0s()()()}if(2&a){const t=C.$implicit;e.R7$(4),e.JRh(t.profile_name),e.R7$(2),e.JRh(t.profile_name),e.R7$(2),e.SpI(" ",t.shared_users," "),e.R7$(2),e.SpI(" ",t.rate_limit," "),e.R7$(2),e.SpI(" ",t.link," "),e.R7$(4),e.Y8G("routerLink",e.eq3(6,j,t.profile_name))}}const w=[{path:"",component:(()=>{class a{constructor(t,o,n,s,i){this.roleService=t,this.alertController=o,this.fuseLoadingService=n,this.fuseConfirmationService=s,this.dialog=i,this.roleDatas=[],this.currentPage=1,this.pageSize=1}ngOnInit(){this.fetchRoles()}fetchRoles(){var t=this;return(0,d.A)(function*(){try{const o=yield t.roleService.getProfilePagination(t.currentPage);t.page_totals=o.total_pages,t.roleDatas=o.profiles}catch(o){console.error(o)}})()}onPageChange(t){this.currentPage=t.pageIndex+1,this.pageSize=t.pageSize,this.fetchRoles()}deteleProfiles(t){this.fuseConfirmationService.open({title:"Konfirmasi Hapus",message:`Apakah Anda yakin ingin menghapus link ${t}?`,actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&(this.delete(t),window.location.reload())})}openUserForm(){this.dialog.open(this.userFormTemplate,{width:"500px"}).afterClosed().subscribe(o=>{o&&console.log("Received data from form:",o)})}delete(t){var o=this;return(0,d.A)(function*(){const n=yield o.roleService.deleteProfile(t);console.log(n),n&&console.log(n)})()}convertBytesToMB(t){return parseFloat(t)/1048576}calculateSpeed(t,o){return this.convertBytesToMB(t)/o*8}static{this.\u0275fac=function(o){return new(o||a)(e.rXU(u.W),e.rXU(x.hG),e.rXU(v.X),e.rXU(y.G),e.rXU(g.bZ))}}static{this.\u0275cmp=e.VBU({type:a,selectors:[["app-role-management"]],viewQuery:function(o,n){if(1&o&&e.GBs(k,5),2&o){let s;e.mGM(s=e.lsd())&&(n.userFormTemplate=s.first)}},standalone:!0,features:[e.aNF],decls:40,vars:11,consts:[[1,"w-full"],["aria-label","Breadcrumb",1,"flex","shadow","px-5","py-3","text-gray-700","borde","bg-white","dark:bg-slate-800"],[1,"inline-flex","items-center","space-x-1","md:space-x-2","rtl:space-x-reverse"],[1,"inline-flex","items-center"],[1,"inline-flex","items-center","text-sm","font-medium","text-gray-700","hover:text-blue-600","dark:text-gray-400","dark:hover:text-white",3,"routerLink"],[1,"p-3","pb-22"],[1,"bg-card","flex","flex-col","overflow-hidden","rounded-2xl","w-full","p-4","sm:col-span-6","shadow-sm","border"],[1,"truncate","text-lg","flex-col","sm:flex-row","font-medium","leading-6","tracking-tight","px-4","flex","items-start","sm:items-center","w-full","justify-between"],[1,"flex","items-center","sm:items-center","gap-3"],["for","table-search",1,"sr-only"],[1,"relative","my-2"],[1,"absolute","inset-y-0","rtl:inset-r-0","start-0","flex","items-center","ps-3","pointer-events-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],["type","text","id","table-search-users","placeholder","Search users",1,"block","p-2","ps-10","text-sm","text-gray-900","border","border-gray-300","rounded-lg","bg-gray-50","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["mat-flat-button","",3,"routerLink","color"],[1,"icon-size-5",3,"svgIcon"],[1,"hidden","sm:block","ml-2"],[1,"py-4","sm:px-4"],[1,"relative","overflow-x-auto","sm:rounded-lg","max-h-[67svh]"],[1,"w-full","h-fit","text-sm","text-left","rtl:text-right","text-gray-500","dark:text-gray-400"],[1,"text-xs","text-gray-700","uppercase","dark:text-gray-400"],["scope","col",1,"px-6","py-3","text-xs","sm:text-sm"],["class","",4,"ngFor","ngForOf"],["showFirstLastButtons","",3,"page","length","pageSize","pageSizeOptions"],[1,""],["scope","row",1,"flex","items-center","px-6","py-4","font-medium","text-gray-900","whitespace-nowrap","dark:text-white"],[1,"max-sm:pr-4"],[1,"text-base","font-semibold"],[1,"font-normal","text-gray-500"],[1,"px-6","py-4","text-sm","sm:text-sm"],[1,"px-6","translate-y-[10px]","flex","items-center"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-red-500","rounded","hover:underline",3,"click"],["svgIcon","heroicons_solid:trash",1,"text-white",2,"transform","scale(0.7)"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-blue-500","rounded","hover:underline",3,"routerLink"],["svgIcon","heroicons_solid:pencil-square",1,"text-white",2,"transform","scale(0.7)"]],template:function(o,n){1&o&&(e.j41(0,"div",0)(1,"nav",1)(2,"ol",2)(3,"li",3)(4,"a",4),e.EFF(5," User Profile "),e.k0s()()()(),e.j41(6,"section",5)(7,"div",6)(8,"div",7),e.EFF(9," User Profile "),e.j41(10,"div",8)(11,"label",9),e.EFF(12,"Search"),e.k0s(),e.j41(13,"div",10)(14,"div",11),e.qSk(),e.j41(15,"svg",12),e.nrm(16,"path",13),e.k0s()(),e.joV(),e.nrm(17,"input",14),e.k0s(),e.j41(18,"a",15),e.nrm(19,"mat-icon",16),e.j41(20,"span",17),e.EFF(21,"Add Profile"),e.k0s()()()(),e.j41(22,"div",18)(23,"div",19)(24,"table",20)(25,"thead",21)(26,"tr")(27,"th",22),e.EFF(28," Name "),e.k0s(),e.j41(29,"th",22),e.EFF(30," Shared Users "),e.k0s(),e.j41(31,"th",22),e.EFF(32," Upload / Download "),e.k0s(),e.j41(33,"th",22),e.EFF(34," Direct Link "),e.k0s(),e.j41(35,"th",22),e.EFF(36," Action "),e.k0s()()(),e.j41(37,"tbody"),e.DNE(38,S,18,8,"tr",23),e.k0s()(),e.j41(39,"mat-paginator",24),e.bIt("page",function(i){return n.onPageChange(i)}),e.k0s()()()()()()),2&o&&(e.R7$(4),e.Y8G("routerLink",e.lJ4(8,F)),e.R7$(14),e.Y8G("routerLink",e.lJ4(9,b))("color","primary"),e.R7$(),e.Y8G("svgIcon","person_add_alt_1"),e.R7$(19),e.Y8G("ngForOf",n.roleDatas),e.R7$(),e.Y8G("length",n.page_totals*n.pageSize)("pageSize",n.pageSize)("pageSizeOptions",e.lJ4(10,R)))},dependencies:[h.An,c.MD,c.Sq,p.Wk,m.Hl,m.It,f.Ou,f.iy,g.hM]})}}return a})()},{path:"add-role",loadChildren:()=>r.e(2889).then(r.bind(r,72889))},{path:"edit-role/:name",loadChildren:()=>r.e(7131).then(r.bind(r,57131))}]}}]);