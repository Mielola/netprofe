"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8205],{31849:(y,g,o)=>{o.d(g,{$:()=>C});var b=o(14085),w=o(87122),t=o(54438);const x=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],v=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];function h(r,e){1&r&&(t.j41(0,"div",0),t.SdG(1),t.k0s(),t.j41(2,"div",1),t.SdG(3,1),t.k0s())}function p(r,e){1&r&&(t.j41(0,"div",2),t.SdG(1,3),t.k0s()),2&r&&t.Y8G("@expandCollapse",void 0)}function n(r,e){if(1&r&&(t.SdG(0,2),t.DNE(1,p,2,1,"div",2)),2&r){const i=t.XpG();t.R7$(),t.vxM(i.expanded?1:-1)}}let C=(()=>{class r{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(i){"expanded"in i&&(this.expanded=(0,b.he)(i.expanded.currentValue)),"flippable"in i&&(this.flippable=(0,b.he)(i.flippable.currentValue))}static{this.\u0275fac=function(c){return new(c||r)}}static{this.\u0275cmp=t.VBU({type:r,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(c,m){2&c&&t.HbH(m.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],standalone:!0,features:[t.OA$,t.aNF],ngContentSelectors:v,decls:2,vars:2,consts:[[1,"fuse-card-front"],[1,"fuse-card-back"],[1,"fuse-card-expansion"]],template:function(c,m){1&c&&(t.NAR(x),t.DNE(0,h,4,0)(1,n,2,1)),2&c&&(t.vxM(m.flippable?0:-1),t.R7$(),t.vxM(m.flippable?-1:1))},styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:w.X}})}}return r})()},38205:(y,g,o)=>{o.r(g),o.d(g,{default:()=>B});var b=o(60177),w=o(89417),t=o(88834),x=o(99213),v=o(59042),h=o(96695),p=o(2042),n=o(9159),C=o(49192),r=o(31849),e=o(54438),i=o(96504);const c=()=>["add-user"],m=()=>[5,10,20],k=()=>["edit-user"],F=()=>["view-detail"];function T(a,l){1&a&&(e.j41(0,"mat-header-cell",28),e.EFF(1," Name "),e.k0s())}function S(a,l){if(1&a&&(e.j41(0,"mat-cell",29)(1,"div",30)(2,"div",31),e.EFF(3),e.k0s(),e.j41(4,"div",32),e.EFF(5),e.k0s()()()),2&a){const s=l.$implicit;e.R7$(3),e.JRh(s.comment),e.R7$(2),e.JRh(s.name)}}function j(a,l){1&a&&(e.j41(0,"mat-header-cell",28),e.EFF(1," Profile "),e.k0s())}function R(a,l){if(1&a&&(e.j41(0,"mat-cell"),e.EFF(1),e.k0s()),2&a){const s=l.$implicit;e.R7$(),e.SpI(" ",s.name," ")}}function D(a,l){1&a&&(e.j41(0,"mat-header-cell",28),e.EFF(1," Action "),e.k0s())}function $(a,l){1&a&&(e.j41(0,"mat-cell",33)(1,"a",34),e.nrm(2,"mat-icon",35),e.k0s(),e.j41(3,"a",36),e.nrm(4,"mat-icon",37),e.k0s(),e.j41(5,"a",38),e.nrm(6,"mat-icon",39),e.k0s()()),2&a&&(e.R7$(3),e.Y8G("routerLink",e.lJ4(2,k)),e.R7$(2),e.Y8G("routerLink",e.lJ4(3,F)))}function E(a,l){1&a&&e.nrm(0,"mat-header-row")}function G(a,l){1&a&&e.nrm(0,"mat-row")}const B=[{path:"",component:(()=>{class a{constructor(s){this.mqtt=s,this.displayedColumns=["name","profile","action"],this.data=[],this.dataSource=new n.I6}applyFilter(s){s=(s=s.trim()).toLowerCase(),this.dataSource.filter=s}ngAfterViewInit(){this.dataSource.sort=this.sort,this.mqttSubs=this.mqtt.subscribeToTopic("/test_publish").subscribe(s=>{const d=JSON.parse(s);this.dataSource.data=d.users}),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.mqttSubs.unsubscribe()}static{this.\u0275fac=function(d){return new(d||a)(e.rXU(i.s))}}static{this.\u0275cmp=e.VBU({type:a,selectors:[["app-testing-pagination"]],viewQuery:function(d,f){if(1&d&&(e.GBs(p.B4,5),e.GBs(h.iy,5)),2&d){let u;e.mGM(u=e.lsd())&&(f.sort=u.first),e.mGM(u=e.lsd())&&(f.paginator=u.first)}},standalone:!0,features:[e.aNF],decls:33,vars:11,consts:[["fuseCard",""],["table",""],["paginator",""],[1,"w-full","mx-6","my-4","mb-20","sm:mb-auto"],[1,"flex","flex-col","shadow-md"],[1,"truncate","text-lg","flex-col","sm:flex-row","font-medium","leading-6","tracking-tight","px-5","py-3","flex","items-start","sm:items-center","w-full","justify-between"],[1,"flex","flex-col","sm:flex-row","items-start","sm:items-center","gap-3"],["for","table-search",1,"sr-only"],[1,"relative","my-2"],[1,"absolute","inset-y-0","rtl:inset-r-0","start-0","flex","items-center","ps-3","pointer-events-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],["type","text","matInput","","placeholder","Search users",1,"block","p-2","ps-10","text-sm","text-gray-900","border","border-gray-300","rounded-lg","bg-gray-50","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"keyup"],[1,"flex","items-center","gap-2"],["mat-flat-button","",3,"routerLink","color"],[1,"icon-size-5",3,"svgIcon"],[1,"block","ml-2"],["matSort","",3,"dataSource"],["matColumnDef","name"],["mat-sort-header","",4,"matHeaderCellDef"],["class","py-4",4,"matCellDef"],["matColumnDef","profile"],[4,"matCellDef"],["matColumnDef","action"],["class","px-2 sm:px-6 flex items-center",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions","showFirstLastButtons"],["mat-sort-header",""],[1,"py-4"],[1,"max-sm:pr-4"],[1,"text-base","font-semibold"],[1,"font-normal","text-gray-500"],[1,"px-2","sm:px-6","flex","items-center"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-red-500","hover:cursor-pointer","hover:bg-red-600","rounded","hover:underline"],["svgIcon","heroicons_solid:trash",1,"text-white",2,"transform","scale(0.7)"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-blue-500","hover:bg-blue-600","rounded","hover:underline",3,"routerLink"],["svgIcon","heroicons_solid:pencil-square",1,"text-white",2,"transform","scale(0.7)"],[1,"font-medium","mx-1","text-white","dark:text-white","bg-slate-500","hover:bg-slate-600","rounded","hover:underline",3,"routerLink"],["svgIcon","heroicons_solid:eye",1,"text-white",2,"transform","scale(0.7)"]],template:function(d,f){if(1&d){const u=e.RV6();e.j41(0,"div",3)(1,"fuse-card",4,0)(3,"div",5),e.EFF(4," Hotspot User "),e.j41(5,"div",6)(6,"label",7),e.EFF(7,"Search"),e.k0s(),e.j41(8,"div",8)(9,"div",9),e.qSk(),e.j41(10,"svg",10),e.nrm(11,"path",11),e.k0s()(),e.joV(),e.j41(12,"input",12),e.bIt("keyup",function(P){return e.eBV(u),e.Njj(f.applyFilter(P.target.value))}),e.k0s()(),e.j41(13,"div",13)(14,"a",14),e.nrm(15,"mat-icon",15),e.j41(16,"span",16),e.EFF(17,"Add User"),e.k0s()()()()(),e.j41(18,"mat-table",17,1),e.qex(20,18),e.DNE(21,T,2,0,"mat-header-cell",19)(22,S,6,2,"mat-cell",20),e.bVm(),e.qex(23,21),e.DNE(24,j,2,0,"mat-header-cell",19)(25,R,2,1,"mat-cell",22),e.bVm(),e.qex(26,23),e.DNE(27,D,2,0,"mat-header-cell",19)(28,$,7,4,"mat-cell",24),e.bVm(),e.DNE(29,E,1,0,"mat-header-row",25)(30,G,1,0,"mat-row",26),e.k0s(),e.nrm(31,"mat-paginator",27,2),e.k0s()()}2&d&&(e.R7$(14),e.Y8G("routerLink",e.lJ4(9,c))("color","primary"),e.R7$(),e.Y8G("svgIcon","person_add_alt_1"),e.R7$(3),e.Y8G("dataSource",f.dataSource),e.R7$(11),e.Y8G("matHeaderRowDef",f.displayedColumns),e.R7$(),e.Y8G("matRowDefColumns",f.displayedColumns),e.R7$(),e.Y8G("pageSize",1)("pageSizeOptions",e.lJ4(10,m))("showFirstLastButtons",!0))},dependencies:[h.Ou,h.iy,r.$,n.tP,n.Zl,n.tL,n.ji,n.cC,n.YV,n.iL,n.KS,n.$R,n.YZ,n.NB,b.MD,C.Wk,x.m_,x.An,w.X1,t.Hl,t.It,v.fS,v.fg,p.NQ,p.B4,p.aE],encapsulation:2})}}return a})()}]}}]);