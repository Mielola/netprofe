"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8205],{38205:(I,d,n)=>{n.r(d),n.d(d,{default:()=>E});var g=n(60177),h=n(89417),u=n(88834),p=n(99213),f=n(59042),c=n(96695),m=n(2042),o=n(9159),x=n(49192),v=n(31849),t=n(54438),b=n(9157);const y=()=>["add-user"],k=()=>[5,10,20],w=()=>["edit-user"],C=()=>["view-detail"];function T(e,s){1&e&&(t.j41(0,"mat-header-cell",28),t.EFF(1," Name "),t.k0s())}function F(e,s){if(1&e&&(t.j41(0,"mat-cell",29)(1,"div",30)(2,"div",31),t.EFF(3),t.k0s(),t.j41(4,"div",32),t.EFF(5),t.k0s()()()),2&e){const a=s.$implicit;t.R7$(3),t.JRh(a.comment),t.R7$(2),t.JRh(a.name)}}function j(e,s){1&e&&(t.j41(0,"mat-header-cell",28),t.EFF(1," Profile "),t.k0s())}function S(e,s){if(1&e&&(t.j41(0,"mat-cell"),t.EFF(1),t.k0s()),2&e){const a=s.$implicit;t.R7$(),t.SpI(" ",a.name," ")}}function R(e,s){1&e&&(t.j41(0,"mat-header-cell",28),t.EFF(1," Action "),t.k0s())}function D(e,s){1&e&&(t.j41(0,"mat-cell",33)(1,"a",34),t.nrm(2,"mat-icon",35),t.k0s(),t.j41(3,"a",36),t.nrm(4,"mat-icon",37),t.k0s(),t.j41(5,"a",38),t.nrm(6,"mat-icon",39),t.k0s()()),2&e&&(t.R7$(3),t.Y8G("routerLink",t.lJ4(2,w)),t.R7$(2),t.Y8G("routerLink",t.lJ4(3,C)))}function P(e,s){1&e&&t.nrm(0,"mat-header-row")}function $(e,s){1&e&&t.nrm(0,"mat-row")}const E=[{path:"",component:(()=>{class e{constructor(a){this.mqtt=a,this.displayedColumns=["name","profile","action"],this.data=[],this.dataSource=new o.I6}applyFilter(a){a=(a=a.trim()).toLowerCase(),this.dataSource.filter=a}ngAfterViewInit(){this.dataSource.sort=this.sort,this.mqttSubs=this.mqtt.subscribeToTopic("/test_publish").subscribe(a=>{const i=JSON.parse(a);this.dataSource.data=i.users}),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.mqttSubs.unsubscribe()}static{this.\u0275fac=function(i){return new(i||e)(t.rXU(b.s))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-testing-pagination"]],viewQuery:function(i,r){if(1&i&&(t.GBs(m.B4,5),t.GBs(c.iy,5)),2&i){let l;t.mGM(l=t.lsd())&&(r.sort=l.first),t.mGM(l=t.lsd())&&(r.paginator=l.first)}},standalone:!0,features:[t.aNF],decls:33,vars:11,consts:[["fuseCard",""],["table",""],["paginator",""],[1,"w-full","mx-6","my-4","mb-20","sm:mb-auto"],[1,"flex","flex-col","shadow-md"],[1,"truncate","text-lg","flex-col","sm:flex-row","font-medium","leading-6","tracking-tight","px-5","py-3","flex","items-start","sm:items-center","w-full","justify-between"],[1,"flex","flex-col","sm:flex-row","items-start","sm:items-center","gap-3"],["for","table-search",1,"sr-only"],[1,"relative","my-2"],[1,"absolute","inset-y-0","rtl:inset-r-0","start-0","flex","items-center","ps-3","pointer-events-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],["type","text","matInput","","placeholder","Search users",1,"block","p-2","ps-10","text-sm","text-gray-900","border","border-gray-300","rounded-lg","bg-gray-50","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"keyup"],[1,"flex","items-center","gap-2"],["mat-flat-button","",3,"routerLink","color"],[1,"icon-size-5",3,"svgIcon"],[1,"block","ml-2"],["matSort","",3,"dataSource"],["matColumnDef","name"],["mat-sort-header","",4,"matHeaderCellDef"],["class","py-4",4,"matCellDef"],["matColumnDef","profile"],[4,"matCellDef"],["matColumnDef","action"],["class","px-2 sm:px-6 flex items-center",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions","showFirstLastButtons"],["mat-sort-header",""],[1,"py-4"],[1,"max-sm:pr-4"],[1,"text-base","font-semibold"],[1,"font-normal","text-gray-500"],[1,"px-2","sm:px-6","flex","items-center"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-red-500","hover:cursor-pointer","hover:bg-red-600","rounded","hover:underline"],["svgIcon","heroicons_solid:trash",1,"text-white",2,"transform","scale(0.7)"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-blue-500","hover:bg-blue-600","rounded","hover:underline",3,"routerLink"],["svgIcon","heroicons_solid:pencil-square",1,"text-white",2,"transform","scale(0.7)"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-slate-500","hover:bg-slate-600","rounded","hover:underline",3,"routerLink"],["svgIcon","heroicons_solid:eye",1,"text-white",2,"transform","scale(0.7)"]],template:function(i,r){if(1&i){const l=t.RV6();t.j41(0,"div",3)(1,"fuse-card",4,0)(3,"div",5),t.EFF(4," Hotspot User "),t.j41(5,"div",6)(6,"label",7),t.EFF(7,"Search"),t.k0s(),t.j41(8,"div",8)(9,"div",9),t.qSk(),t.j41(10,"svg",10),t.nrm(11,"path",11),t.k0s()(),t.joV(),t.j41(12,"input",12),t.bIt("keyup",function(G){return t.eBV(l),t.Njj(r.applyFilter(G.target.value))}),t.k0s()(),t.j41(13,"div",13)(14,"a",14),t.nrm(15,"mat-icon",15),t.j41(16,"span",16),t.EFF(17,"Add User"),t.k0s()()()()(),t.j41(18,"mat-table",17,1),t.qex(20,18),t.DNE(21,T,2,0,"mat-header-cell",19)(22,F,6,2,"mat-cell",20),t.bVm(),t.qex(23,21),t.DNE(24,j,2,0,"mat-header-cell",19)(25,S,2,1,"mat-cell",22),t.bVm(),t.qex(26,23),t.DNE(27,R,2,0,"mat-header-cell",19)(28,D,7,4,"mat-cell",24),t.bVm(),t.DNE(29,P,1,0,"mat-header-row",25)(30,$,1,0,"mat-row",26),t.k0s(),t.nrm(31,"mat-paginator",27,2),t.k0s()()}2&i&&(t.R7$(14),t.Y8G("routerLink",t.lJ4(9,y))("color","primary"),t.R7$(),t.Y8G("svgIcon","person_add_alt_1"),t.R7$(3),t.Y8G("dataSource",r.dataSource),t.R7$(11),t.Y8G("matHeaderRowDef",r.displayedColumns),t.R7$(),t.Y8G("matRowDefColumns",r.displayedColumns),t.R7$(),t.Y8G("pageSize",1)("pageSizeOptions",t.lJ4(10,k))("showFirstLastButtons",!0))},dependencies:[c.Ou,c.iy,v.$,o.tP,o.Zl,o.tL,o.ji,o.cC,o.YV,o.iL,o.KS,o.$R,o.YZ,o.NB,g.MD,x.Wk,p.m_,p.An,h.X1,u.Hl,u.It,f.fS,f.fg,m.NQ,m.B4,m.aE],encapsulation:2})}}return e})()}]}}]);