"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5944],{37417:(k,_,h)=>{h.r(_),h.d(_,{default:()=>r});var g=h(10467),C=h(60177),c=h(89417),v=h(88834),E=h(75351),y=h(90882),S=h(9159),s=h(54438),a=h(65706),M=h(25798),D=h(80507);const T=["orderMessage"],V=["drawer"];function A(e,n){if(1&e&&(s.j41(0,"h2",3),s.EFF(1,"Pesanan Berhasil"),s.k0s(),s.nrm(2,"br"),s.j41(3,"p"),s.EFF(4),s.k0s()),2&e){const t=s.XpG();s.R7$(4),s.SpI("Message : ",t.message,"")}}const r=[{path:"",component:(()=>{class e{constructor(t,o,i,l,d){this.roleService=t,this.fb=o,this.userService=i,this.dialog=l,this.fuseLoadingService=d,this.users=[],this.displayedColumns=["name","email"],this.selectedUser=null}ngOnInit(){var t=this;return(0,g.A)(function*(){t.orderForm=t.fb.group({name:["",c.k0.required],no_hp:["",c.k0.required],menu_ids:[Number,c.k0.required]});const o=yield t.roleService.getProfile();console.log(o),t.users=o.profiles})()}openDrawer(t){var o=this;return(0,g.A)(function*(){const i=yield o.roleService.getProfileByName(t);console.log(i),o.selectedUser=i,o.drawer.open()})()}onSubmit(){var t=this;return(0,g.A)(function*(){if(t.orderForm.valid){const o={no_hp:t.orderForm.value.no_hp,name:t.orderForm.value.name,menu_ids:[t.orderForm.value.menu_ids]};console.log(o),t.fuseLoadingService.show();try{const i=yield t.userService.orderPost(o);console.log(i.message),t.message=i.message,t.note=i.note,t.openModal("Pemesanan Berhasil",t.message)}catch(i){console.error("Error:",i)}finally{t.fuseLoadingService.hide()}}else console.log("Invalid form")})()}openModal(t,o){this.dialog.open(this.orderMessage,{data:{title:t,message:o}})}static{this.\u0275fac=function(o){return new(o||e)(s.rXU(a.W),s.rXU(c.ok),s.rXU(M.D),s.rXU(E.bZ),s.rXU(D.X))}}static{this.\u0275cmp=s.VBU({type:e,selectors:[["app-demo-order"]],viewQuery:function(o,i){if(1&o&&(s.GBs(T,5),s.GBs(V,5)),2&o){let l;s.mGM(l=s.lsd())&&(i.orderMessage=l.first),s.mGM(l=s.lsd())&&(i.drawer=l.first)}},standalone:!0,features:[s.aNF],decls:17,vars:1,consts:[["orderMessage",""],[1,"w-full","h-full","p-4","flex"],[1,"bg-white","m-auto","p-5","rounded-md","md:p-10","shadow-md","w-[90%]"],[1,"text-xl","font-bold"],[1,"font-medium","opacity-70"],["action","",1,"py-2","w-full","h-full",3,"submit","formGroup"],["type","text","formControlName","name","placeholder","Masukkan Nama Pemesan",1,"py-2","mt-4","px-2","border-2","rounded","w-full"],["type","text","formControlName","no_hp","placeholder","Masukkan No Hp Pemesan",1,"py-2","mt-4","px-2","border-2","rounded","w-full"],["type","number","formControlName","menu_ids","placeholder","Masukkan Waktu",1,"py-2","mt-4","px-2","border-2","rounded","w-full"],["type","submit","mat-button","",1,"bg-green-600","w-full","text-white","mt-4"]],template:function(o,i){if(1&o){const l=s.RV6();s.j41(0,"div",1),s.DNE(1,A,5,1,"ng-template",null,0,s.C5r),s.j41(3,"div",2)(4,"h2",3),s.EFF(5,"Form Pemesanan"),s.k0s(),s.j41(6,"h3",4),s.EFF(7,"Masukkan inputan pemesanan"),s.k0s(),s.j41(8,"form",5),s.bIt("submit",function(){return s.eBV(l),s.Njj(i.onSubmit())}),s.j41(9,"div"),s.nrm(10,"input",6),s.k0s(),s.j41(11,"div"),s.nrm(12,"input",7),s.k0s(),s.j41(13,"div"),s.nrm(14,"input",8),s.k0s(),s.j41(15,"button",9),s.EFF(16,"Lakukan Pemesanan"),s.k0s()()()()}2&o&&(s.R7$(8),s.Y8G("formGroup",i.orderForm))},dependencies:[y.vg,S.tP,C.MD,v.Hl,v.$z,c.X1,c.qT,c.me,c.Q0,c.BC,c.cb,c.j4,c.JD,E.hM],styles:["table[_ngcontent-%COMP%]{width:100%}mat-sidenav[_ngcontent-%COMP%]{width:300px}"]})}}return e})()}]},45024:(k,_,h)=>{h.d(_,{CB:()=>V,DQ:()=>T,Q3:()=>a,qS:()=>y,sL:()=>M,xn:()=>D,y4:()=>S,zP:()=>w});var g=h(30017),v=(h(74402),h(7673),h(21413)),E=h(54438);class y{}function S(r){return r&&"function"==typeof r.connect&&!(r instanceof g.G)}var a=function(r){return r[r.REPLACED=0]="REPLACED",r[r.INSERTED=1]="INSERTED",r[r.MOVED=2]="MOVED",r[r.REMOVED=3]="REMOVED",r}(a||{});const M=new E.nKC("_ViewRepeater");class D{applyChanges(e,n,t,o,i){e.forEachOperation((l,d,f)=>{let m,u;if(null==l.previousIndex){const p=t(l,d,f);m=n.createEmbeddedView(p.templateRef,p.context,p.index),u=a.INSERTED}else null==f?(n.remove(d),u=a.REMOVED):(m=n.get(d),n.move(m,f),u=a.MOVED);i&&i({context:m?.context,operation:u,record:l})})}detach(){}}class T{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(e,n,t,o,i){e.forEachOperation((l,d,f)=>{let m,u;null==l.previousIndex?(m=this._insertView(()=>t(l,d,f),f,n,o(l)),u=m?a.INSERTED:a.REPLACED):null==f?(this._detachAndCacheView(d,n),u=a.REMOVED):(m=this._moveView(d,f,n,o(l)),u=a.MOVED),i&&i({context:m?.context,operation:u,record:l})})}detach(){for(const e of this._viewCache)e.destroy();this._viewCache=[]}_insertView(e,n,t,o){const i=this._insertViewFromCache(n,t);if(i)return void(i.context.$implicit=o);const l=e();return t.createEmbeddedView(l.templateRef,l.context,l.index)}_detachAndCacheView(e,n){const t=n.detach(e);this._maybeCacheView(t,n)}_moveView(e,n,t,o){const i=t.get(e);return t.move(i,n),i.context.$implicit=o,i}_maybeCacheView(e,n){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{const t=n.indexOf(e);-1===t?e.destroy():n.remove(t)}}_insertViewFromCache(e,n){const t=this._viewCache.pop();return t&&n.insert(t,e),t||null}}class V{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(e=!1,n,t=!0,o){this._multiple=e,this._emitChanges=t,this.compareWith=o,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new v.B,n&&n.length&&(e?n.forEach(i=>this._markSelected(i)):this._markSelected(n[0]),this._selectedToEmit.length=0)}select(...e){this._verifyValueAssignment(e),e.forEach(t=>this._markSelected(t));const n=this._hasQueuedChanges();return this._emitChangeEvent(),n}deselect(...e){this._verifyValueAssignment(e),e.forEach(t=>this._unmarkSelected(t));const n=this._hasQueuedChanges();return this._emitChangeEvent(),n}setSelection(...e){this._verifyValueAssignment(e);const n=this.selected,t=new Set(e);e.forEach(i=>this._markSelected(i)),n.filter(i=>!t.has(this._getConcreteValue(i,t))).forEach(i=>this._unmarkSelected(i));const o=this._hasQueuedChanges();return this._emitChangeEvent(),o}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();const n=this._hasQueuedChanges();return e&&this._emitChangeEvent(),n}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}_getConcreteValue(e,n){if(this.compareWith){n=n??this._selection;for(let t of n)if(this.compareWith(e,t))return t;return e}return e}}let w=(()=>{class r{constructor(){this._listeners=[]}notify(n,t){for(let o of this._listeners)o(n,t)}listen(n){return this._listeners.push(n),()=>{this._listeners=this._listeners.filter(t=>n!==t)}}ngOnDestroy(){this._listeners=[]}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=E.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})()}}]);