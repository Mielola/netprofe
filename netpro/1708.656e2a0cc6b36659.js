"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[1708],{31708:(b,p,m)=>{m.r(p),m.d(p,{default:()=>x});var d=m(10467),l=m(60177),s=m(89417),u=m(96850),f=m(29718),n=m(54438),g=m(97517);const h=["terminalDisplay"];function y(e,a){if(1&e&&(n.qex(0),n.j41(1,"div",8)(2,"p"),n.EFF(3),n.k0s()(),n.bVm()),2&e){const t=n.XpG().$implicit;n.R7$(3),n.SpI(" ",t.content," ")}}function C(e,a){if(1&e&&(n.qex(0),n.j41(1,"span",9),n.EFF(2,"[Mikrotik >]"),n.k0s(),n.EFF(3),n.bVm()),2&e){const t=n.XpG().$implicit;n.R7$(3),n.SpI(" ",t.content," ")}}function v(e,a){if(1&e&&(n.qex(0),n.j41(1,"div",10)(2,"p"),n.EFF(3),n.k0s()(),n.bVm()),2&e){const t=n.XpG().$implicit;n.R7$(3),n.SpI(" ",t.content," ")}}function T(e,a){if(1&e&&(n.j41(0,"div"),n.DNE(1,y,4,1,"ng-container",7)(2,C,4,1,"ng-container",7)(3,v,4,1,"ng-container",7),n.k0s()),2&e){const t=a.$implicit;n.R7$(),n.Y8G("ngIf","intro"===t.type),n.R7$(),n.Y8G("ngIf","command"===t.type),n.R7$(),n.Y8G("ngIf","response"===t.type)}}const x=[{path:"",component:(()=>{class e{constructor(t){this._terminalService=t,this.currentCommand="",this.commandHistory=[],this.terminalPosition="-460px",this.isTerminalOpen=!1}handleSubmit(t){var o=this;return(0,d.A)(function*(){const i=yield o._terminalService.postCommand(t);o.scrollToBottom(),i&&i.result&&(o.responseCommand=JSON.stringify(i.result,null,10),o.commandHistory.push({type:"response",content:o.responseCommand}))})()}executeCommand(){var t=this;return(0,d.A)(function*(){""!==t.currentCommand.trim()&&("clear"===t.currentCommand.trim().toLowerCase()?t.commandHistory=[]:(t.commandHistory.push({type:"command",content:t.currentCommand}),t.scrollToBottom(),yield t.handleSubmit(t.currentCommand)),t.currentCommand="")})()}scrollToBottom(){setTimeout(()=>{this.terminalDisplay&&this.terminalDisplay.nativeElement&&(this.terminalDisplay.nativeElement.scrollTop=this.terminalDisplay.nativeElement.scrollHeight)},0)}ngOnInit(){this.commandHistory.push({type:"intro",content:"Welcome To Netpro Terminal"}),console.log(this.commandHistory)}static{this.\u0275fac=function(o){return new(o||e)(n.rXU(g.E))}}static{this.\u0275cmp=n.VBU({type:e,selectors:[["app-terminal"]],viewQuery:function(o,i){if(1&o&&n.GBs(h,5),2&o){let r;n.mGM(r=n.lsd())&&(i.terminalDisplay=r.first)}},standalone:!0,features:[n.aNF],decls:8,vars:2,consts:[["terminalDisplay",""],[1,"text-white","p-4","rounded-lg","w-full","h-full","pb-32"],[1,"overflow-y-auto","h-[530px]","p-2","text-sm","bg-gray-900","border","border-gray-700","rounded-lg"],[4,"ngFor","ngForOf"],[1,"mt-2","py-3","rounded-lg","px-2","bg-slate-300","flex","items-center"],[1,"text-green-500","font-medium"],["type","text","placeholder","Enter command","autofocus","",1,"text-black","border-none","outline-none","ml-2","w-full",3,"ngModelChange","keydown.enter","ngModel"],[4,"ngIf"],[1,"text-green-500","text-base","mb-4"],[1,"text-green-500"],[1,"text-blue-400"]],template:function(o,i){if(1&o){const r=n.RV6();n.j41(0,"div",1)(1,"div",2,0),n.DNE(3,T,4,3,"div",3),n.k0s(),n.j41(4,"div",4)(5,"span",5),n.EFF(6,"[Mikrotik]"),n.k0s(),n.j41(7,"input",6),n.mxI("ngModelChange",function(c){return n.eBV(r),n.DH7(i.currentCommand,c)||(i.currentCommand=c),n.Njj(c)}),n.bIt("keydown.enter",function(){return n.eBV(r),n.Njj(i.executeCommand())}),n.k0s()()()}2&o&&(n.R7$(3),n.Y8G("ngForOf",i.commandHistory),n.R7$(4),n.R50("ngModel",i.currentCommand))},dependencies:[f.ju,l.MD,l.Sq,l.bT,u.RI,s.YN,s.me,s.BC,s.vS],styles:["[_nghost-%COMP%]{display:block;height:100%}#terminal[_ngcontent-%COMP%]{height:100%;width:100%}"]})}}return e})()}]}}]);