"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8897],{88897:(jt,L,l)=>{l.r(L),l.d(L,{default:()=>Dt});var t=l(54438),_=l(49192),v=l(1875),A=l(65478),x=l(60177),p=l(88834),b=l(99213),R=l(59115);class V{constructor(a){this.id=a.id||null,this.title=a.title,this.description=a.description||null,this.icon=a.icon||null,this.lastActivity=a.lastActivity||null,this.lists=[],this.labels=[],this.members=[],a.lists&&(this.lists=a.lists.map(e=>e instanceof k?e:new k(e))),a.labels&&(this.labels=a.labels.map(e=>e instanceof S?e:new S(e))),a.members&&(this.members=a.members.map(e=>e instanceof E?e:new E(e)))}}class k{constructor(a){this.id=a.id||null,this.boardId=a.boardId,this.position=a.position,this.title=a.title,this.cards=[],a.cards&&(this.cards=a.cards.map(e=>e instanceof I?e:new I(e)))}}class I{constructor(a){this.id=a.id||null,this.boardId=a.boardId,this.listId=a.listId,this.position=a.position,this.title=a.title,this.description=a.description||null,this.labels=[],this.dueDate=a.dueDate||null,a.labels&&(this.labels=a.labels.map(e=>e instanceof S?e:new S(e)))}}class E{constructor(a){this.id=a.id||null,this.name=a.name,this.avatar=a.avatar||null}}class S{constructor(a){this.id=a.id||null,this.boardId=a.boardId,this.title=a.title}}var F=l(44549),w=l(21413),D=l(56977),B=l(37403),d=l(89417);const N=["titleInput"],M=["titleAutosize"],O=s=>({"pointer-events-none opacity-0":s}),Q=s=>({"opacity-0":s});let P=(()=>{class s{constructor(e,r){this._changeDetectorRef=e,this._formBuilder=r,this.buttonTitle="Add a card",this.saved=new t.bkB,this.formVisible=!1}ngOnInit(){this.form=this._formBuilder.group({title:[""]})}save(){const e=this.form.get("title").value;!e||""===e.trim()||(this.saved.next(e.trim()),this.formVisible=!1,this.form.get("title").setValue(""),setTimeout(()=>{this.titleInput.nativeElement.value="",this.titleAutosize.reset()}),this._changeDetectorRef.markForCheck())}toggleFormVisibility(){this.formVisible=!this.formVisible,this.formVisible&&this.titleInput.nativeElement.focus()}static{this.\u0275fac=function(r){return new(r||s)(t.rXU(t.gRc),t.rXU(d.ze))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["scrumboard-board-add-card"]],viewQuery:function(r,i){if(1&r&&(t.GBs(N,5),t.GBs(M,5)),2&r){let o;t.mGM(o=t.lsd())&&(i.titleInput=o.first),t.mGM(o=t.lsd())&&(i.titleAutosize=o.first)}},inputs:{buttonTitle:"buttonTitle"},outputs:{saved:"saved"},decls:17,vars:18,consts:[["titleInput","","titleAutosize","cdkTextareaAutosize"],[1,"p-3","pt-0"],[1,"relative","flex","h-full","w-full","rounded-lg"],["mat-button","","disableRipple","",1,"absolute","inset-0","w-full","justify-start","rounded-lg",3,"click","ngClass"],[1,"icon-size-5",3,"svgIcon"],[1,"text-secondary","ml-2"],[1,"flex","w-full","flex-col","items-start",3,"ngClass","formGroup"],[1,"bg-card","flex","w-full","rounded-lg","p-5","shadow"],["cdkTextareaAutosize","",1,"w-full","text-lg","font-medium","leading-5",3,"keydown.enter","spellcheck","formControlName","placeholder"],[1,"mt-2","flex","items-center"],["mat-flat-button","",1,"h-8","min-h-8",3,"click","color","type"],["mat-icon-button","",1,"ml-1","h-8","min-h-8","w-8",3,"click","type"],[1,"icon-size-4",3,"svgIcon"]],template:function(r,i){if(1&r){const o=t.RV6();t.j41(0,"div",1)(1,"div",2)(2,"button",3),t.bIt("click",function(){return t.eBV(o),t.Njj(i.toggleFormVisibility())}),t.nrm(3,"mat-icon",4),t.j41(4,"span",5),t.EFF(5),t.k0s()(),t.j41(6,"form",6)(7,"div",7)(8,"textarea",8,0),t.bIt("keydown.enter",function(){return t.eBV(o),t.Njj(i.save())}),t.EFF(11,"                "),t.k0s()(),t.j41(12,"div",9)(13,"button",10),t.bIt("click",function(){return t.eBV(o),t.Njj(i.save())}),t.EFF(14," Add card "),t.k0s(),t.j41(15,"button",11),t.bIt("click",function(){return t.eBV(o),t.Njj(i.toggleFormVisibility())}),t.nrm(16,"mat-icon",12),t.k0s()()()()()}2&r&&(t.AVh("h-13",!i.formVisible),t.R7$(2),t.Y8G("ngClass",t.eq3(14,O,i.formVisible)),t.R7$(),t.Y8G("svgIcon","heroicons_outline:plus-circle"),t.R7$(2),t.JRh(i.buttonTitle),t.R7$(),t.Y8G("ngClass",t.eq3(16,Q,!i.formVisible))("formGroup",i.form),t.R7$(2),t.Y8G("spellcheck","off")("formControlName","title")("placeholder","Enter card title..."),t.R7$(5),t.Y8G("color","primary")("type","button"),t.R7$(2),t.Y8G("type","button"),t.R7$(),t.Y8G("svgIcon","heroicons_solid:x-mark"))},dependencies:[p.Hl,p.$z,p.iY,x.YU,b.m_,b.An,d.YN,d.qT,d.me,d.BC,d.cb,d.X1,d.j4,d.JD,B.EE,B.xb],encapsulation:2,changeDetection:0})}}return s})();const W=["titleInput"],H=s=>({"pointer-events-none opacity-0":s}),Z=s=>({"opacity-0":s});let J=(()=>{class s{constructor(e,r){this._changeDetectorRef=e,this._formBuilder=r,this.buttonTitle="Add a list",this.saved=new t.bkB,this.formVisible=!1}ngOnInit(){this.form=this._formBuilder.group({title:[""]})}save(){const e=this.form.get("title").value;!e||""===e.trim()||(this.saved.next(e.trim()),this.form.get("title").setValue(""),this.formVisible=!1,this._changeDetectorRef.markForCheck())}toggleFormVisibility(){this.formVisible=!this.formVisible,this.formVisible&&this.titleInput.nativeElement.focus()}static{this.\u0275fac=function(r){return new(r||s)(t.rXU(t.gRc),t.rXU(d.ze))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["scrumboard-board-add-list"]],viewQuery:function(r,i){if(1&r&&t.GBs(W,5),2&r){let o;t.mGM(o=t.lsd())&&(i.titleInput=o.first)}},inputs:{buttonTitle:"buttonTitle"},outputs:{saved:"saved"},decls:14,vars:18,consts:[["titleInput",""],[1,"mt-11","w-64","px-2","py-2.5"],[1,"relative","flex","h-full","w-full","overflow-hidden","rounded-xl","bg-gray-200","dark:bg-gray-700"],["mat-button","","disableRipple","",1,"absolute","inset-0","w-full","justify-start","rounded-xl","bg-transparent","px-3",3,"click","ngClass"],[1,"icon-size-5",3,"svgIcon"],[1,"text-secondary","ml-2"],[1,"flex","w-full","flex-col","items-start","p-3",3,"ngClass","formGroup"],[1,"w-full","rounded-md","border","border-gray-300","bg-white","px-3","py-2","leading-5","shadow-sm","focus:border-primary","dark:border-gray-500","dark:bg-black","dark:bg-opacity-5","dark:focus:border-primary",3,"keydown.enter","autocomplete","formControlName","placeholder"],[1,"mt-2","flex","items-center"],["mat-flat-button","",1,"h-8","min-h-8",3,"click","color","type"],["mat-icon-button","",1,"ml-1","h-8","min-h-8","w-8",3,"click","type"],[1,"icon-size-4",3,"svgIcon"]],template:function(r,i){if(1&r){const o=t.RV6();t.j41(0,"div",1)(1,"div",2)(2,"button",3),t.bIt("click",function(){return t.eBV(o),t.Njj(i.toggleFormVisibility())}),t.nrm(3,"mat-icon",4),t.j41(4,"span",5),t.EFF(5),t.k0s()(),t.j41(6,"form",6)(7,"input",7,0),t.bIt("keydown.enter",function(){return t.eBV(o),t.Njj(i.save())}),t.k0s(),t.j41(9,"div",8)(10,"button",9),t.bIt("click",function(){return t.eBV(o),t.Njj(i.save())}),t.EFF(11," Add list "),t.k0s(),t.j41(12,"button",10),t.bIt("click",function(){return t.eBV(o),t.Njj(i.toggleFormVisibility())}),t.nrm(13,"mat-icon",11),t.k0s()()()()()}2&r&&(t.AVh("h-15",!i.formVisible),t.R7$(2),t.Y8G("ngClass",t.eq3(14,H,i.formVisible)),t.R7$(),t.Y8G("svgIcon","heroicons_outline:plus-circle"),t.R7$(2),t.JRh(i.buttonTitle),t.R7$(),t.Y8G("ngClass",t.eq3(16,Z,!i.formVisible))("formGroup",i.form),t.R7$(),t.Y8G("autocomplete","off")("formControlName","title")("placeholder","Enter list title..."),t.R7$(3),t.Y8G("color","primary")("type","button"),t.R7$(2),t.Y8G("type","button"),t.R7$(),t.Y8G("svgIcon","heroicons_solid:x-mark"))},dependencies:[p.Hl,p.$z,p.iY,x.YU,b.m_,b.An,d.YN,d.qT,d.me,d.BC,d.cb,d.X1,d.j4,d.JD],encapsulation:2,changeDetection:0})}}return s})();var K=l(46601),$=l(84412),u=l(96354),h=l(88141),f=l(96697),g=l(25558),T=l(18810),q=l(7673),tt=l(21626);let C=(()=>{class s{constructor(e){this._httpClient=e,this._board=new $.t(null),this._boards=new $.t(null),this._card=new $.t(null)}get board$(){return this._board.asObservable()}get boards$(){return this._boards.asObservable()}get card$(){return this._card.asObservable()}getBoards(){return this._httpClient.get("api/apps/scrumboard/boards").pipe((0,u.T)(e=>e.map(r=>new V(r))),(0,h.M)(e=>this._boards.next(e)))}getBoard(e){return this._httpClient.get("api/apps/scrumboard/board",{params:{id:e}}).pipe((0,u.T)(r=>new V(r)),(0,h.M)(r=>this._board.next(r)))}createBoard(e){return this.boards$.pipe((0,f.s)(1),(0,g.n)(r=>this._httpClient.put("api/apps/scrumboard/board",{board:e}).pipe((0,u.T)(i=>(this._boards.next([...r,i]),i)))))}updateBoard(e,r){return this.boards$.pipe((0,f.s)(1),(0,g.n)(i=>this._httpClient.patch("api/apps/scrumboard/board",{id:e,board:r}).pipe((0,u.T)(o=>{const n=i.findIndex(c=>c.id===e);return i[n]=o,this._boards.next(i),o}))))}deleteBoard(e){return this.boards$.pipe((0,f.s)(1),(0,g.n)(r=>this._httpClient.delete("api/apps/scrumboard/board",{params:{id:e}}).pipe((0,u.T)(i=>{const o=r.findIndex(n=>n.id===e);return r.splice(o,1),this._boards.next(r),this._board.next(null),this._card.next(null),i}))))}createList(e){return this._httpClient.post("api/apps/scrumboard/board/list",{list:e}).pipe((0,u.T)(r=>new k(r)),(0,h.M)(r=>{const i=this._board.value;i.lists=[...i.lists,r],i.lists.sort((o,n)=>o.position-n.position),this._board.next(i)}))}updateList(e){return this._httpClient.patch("api/apps/scrumboard/board/list",{list:e}).pipe((0,u.T)(r=>new k(r)),(0,h.M)(r=>{const i=this._board.value,o=i.lists.findIndex(n=>n.id===e.id);i.lists[o]=r,i.lists.sort((n,c)=>n.position-c.position),this._board.next(i)}))}updateLists(e){return this._httpClient.patch("api/apps/scrumboard/board/lists",{lists:e}).pipe((0,u.T)(r=>r.map(i=>new k(i))),(0,h.M)(r=>{const i=this._board.value;r.forEach(o=>{const n=i.lists.findIndex(c=>c.id===o.id);i.lists[n]=o}),i.lists.sort((o,n)=>o.position-n.position),this._board.next(i)}))}deleteList(e){return this._httpClient.delete("api/apps/scrumboard/board/list",{params:{id:e}}).pipe((0,h.M)(r=>{const i=this._board.value,o=i.lists.findIndex(n=>n.id===e);i.lists.splice(o,1),i.lists.sort((n,c)=>n.position-c.position),this._board.next(i)}))}getCard(e){return this._board.pipe((0,f.s)(1),(0,u.T)(r=>{const i=r.lists.find(o=>o.cards.some(n=>n.id===e)).cards.find(o=>o.id===e);return this._card.next(i),i}),(0,g.n)(r=>r?(0,q.of)(r):(0,T.$)("Could not found the card with id of "+e+"!")))}createCard(e){return this._httpClient.put("api/apps/scrumboard/board/card",{card:e}).pipe((0,u.T)(r=>new I(r)),(0,h.M)(r=>{const i=this._board.value;return i.lists.forEach((o,n,c)=>{o.id===r.listId&&c[n].cards.push(r)}),this._board.next(i),r}))}updateCard(e,r){return this.board$.pipe((0,f.s)(1),(0,g.n)(i=>this._httpClient.patch("api/apps/scrumboard/board/card",{id:e,card:r}).pipe((0,u.T)(o=>(i.lists.forEach(n=>{n.cards.forEach((c,m,j)=>{c.id===e&&(j[m]=o)})}),this._board.next(i),this._card.next(o),o)))))}updateCards(e){return this._httpClient.patch("api/apps/scrumboard/board/cards",{cards:e}).pipe((0,u.T)(r=>r.map(i=>new I(i))),(0,h.M)(r=>{const i=this._board.value;r.forEach(o=>{const n=i.lists.findIndex(m=>m.id===o.listId),c=i.lists[n].cards.findIndex(m=>m.id===o.id);i.lists[n].cards[c]=o,i.lists[n].cards.sort((m,j)=>m.position-j.position)}),this._board.next(i)}))}deleteCard(e){return this.board$.pipe((0,f.s)(1),(0,g.n)(r=>this._httpClient.delete("api/apps/scrumboard/board/card",{params:{id:e}}).pipe((0,u.T)(i=>(r.lists.forEach(o=>{o.cards.forEach((n,c,m)=>{n.id===e&&m.splice(c,1)})}),this._board.next(r),this._card.next(null),i)))))}createLabel(e){return this.board$.pipe((0,f.s)(1),(0,g.n)(r=>this._httpClient.post("api/apps/scrumboard/board/label",{label:e}).pipe((0,u.T)(i=>(r.labels=[...r.labels,i],this._board.next(r),i)))))}updateLabel(e,r){return this.board$.pipe((0,f.s)(1),(0,g.n)(i=>this._httpClient.patch("api/apps/scrumboard/board/label",{id:e,label:r}).pipe((0,u.T)(o=>{const n=i.labels.findIndex(c=>c.id===e);return i.labels[n]=o,this._board.next(i),o}))))}deleteLabel(e){return this.board$.pipe((0,f.s)(1),(0,g.n)(r=>this._httpClient.delete("api/apps/scrumboard/board/label",{params:{id:e}}).pipe((0,u.T)(i=>{const o=r.labels.findIndex(n=>n.id===e);return r.labels.splice(o,1),i&&r.lists.forEach(n=>{n.cards.forEach(c=>{const m=c.labels.findIndex(j=>j.id===e);m>-1&&c.labels.splice(m,1)})}),this._board.next(r),i}))))}search(e){return this._httpClient.get("api/apps/scrumboard/board/search",{params:{query:e}})}static{this.\u0275fac=function(r){return new(r||s)(t.KVO(tt.Qq))}}static{this.\u0275prov=t.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();const et=()=>[".."],rt=s=>["card",s],it=s=>({"text-red-600":s});function ot(s,a){if(1&s&&(t.j41(0,"div",27),t.nrm(1,"img",30),t.k0s()),2&s){const e=t.XpG().$implicit;t.R7$(),t.Y8G("src",e.coverImage,t.B4B)}}function st(s,a){if(1&s&&(t.j41(0,"div",32),t.EFF(1),t.k0s()),2&s){const e=a.$implicit;t.R7$(),t.SpI(" ",e.title," ")}}function nt(s,a){if(1&s&&(t.j41(0,"div")(1,"div",31),t.Z7z(2,st,2,1,"div",32,t.BUC().trackByFn,!0),t.k0s()()),2&s){const e=t.XpG().$implicit;t.R7$(2),t.Dyx(e.labels)}}function at(s,a){if(1&s&&(t.j41(0,"div",29),t.nrm(1,"mat-icon",33),t.j41(2,"div",21),t.EFF(3),t.nI1(4,"date"),t.k0s()()),2&s){const e=t.XpG().$implicit,r=t.XpG(2);t.Y8G("ngClass",t.eq3(6,it,r.isOverdue(e.dueDate))),t.R7$(),t.Y8G("svgIcon","heroicons_outline:clock"),t.R7$(2),t.SpI(" ",t.i5U(4,3,e.dueDate,"longDate")," ")}}function lt(s,a){if(1&s&&(t.j41(0,"a",26),t.DNE(1,ot,2,1,"div",27),t.j41(2,"div",28),t.EFF(3),t.k0s(),t.DNE(4,nt,4,0,"div")(5,at,5,8,"div",29),t.k0s()),2&s){const e=a.$implicit;t.Y8G("routerLink",t.eq3(5,rt,e.id)),t.R7$(),t.vxM(e.coverImage?1:-1),t.R7$(2),t.SpI(" ",e.title," "),t.R7$(),t.vxM(e.labels.length?4:-1),t.R7$(),t.vxM(e.dueDate?5:-1)}}function dt(s,a){if(1&s){const e=t.RV6();t.j41(0,"div",14)(1,"div",17)(2,"div",18)(3,"input",19,0),t.bIt("focusout",function(i){const o=t.eBV(e).$implicit,n=t.XpG();return t.Njj(n.updateListTitle(i,o))})("keydown.enter",function(){t.eBV(e);const i=t.sdS(4);return t.Njj(i.blur())}),t.k0s()(),t.j41(5,"div",20),t.EFF(6),t.k0s(),t.j41(7,"div",21)(8,"button",22),t.nrm(9,"mat-icon",8),t.k0s(),t.j41(10,"mat-menu",null,1)(12,"button",23),t.bIt("click",function(){t.eBV(e);const i=t.sdS(4),o=t.XpG();return t.Njj(o.renameList(i))}),t.nrm(13,"mat-icon",8),t.EFF(14," Rename list "),t.k0s(),t.j41(15,"button",23),t.bIt("click",function(){const i=t.eBV(e).$implicit,o=t.XpG();return t.Njj(o.deleteList(i.id))}),t.nrm(16,"mat-icon",8),t.EFF(17," Delete list "),t.k0s()()()(),t.j41(18,"div",24)(19,"div",25),t.bIt("cdkDropListDropped",function(i){t.eBV(e);const o=t.XpG();return t.Njj(o.cardDropped(i))}),t.Z7z(20,lt,6,7,"a",26,t.BUC().trackByFn,!0),t.k0s(),t.j41(22,"scrumboard-board-add-card",15),t.bIt("saved",function(i){const o=t.eBV(e).$implicit,n=t.XpG();return t.Njj(n.addCard(o,i))}),t.k0s()()()}if(2&s){const e=a.$implicit,r=t.sdS(11);t.Y8G("cdkDragLockAxis","x"),t.R7$(3),t.Y8G("spellcheck","false")("value",e.title),t.R7$(3),t.SpI(" ",e.cards.length," "),t.R7$(2),t.Y8G("matMenuTriggerFor",r),t.R7$(),t.Y8G("svgIcon","heroicons_solid:ellipsis-vertical"),t.R7$(4),t.Y8G("svgIcon","heroicons_solid:pencil-square"),t.R7$(3),t.Y8G("svgIcon","heroicons_solid:trash"),t.R7$(3),t.Y8G("id",e.id)("cdkDropListData",e.cards),t.R7$(),t.Dyx(e.cards),t.R7$(2),t.Y8G("buttonTitle",e.cards.length?"Add another card":"Add a card")}}let ct=(()=>{class s{constructor(e,r,i,o){this._changeDetectorRef=e,this._formBuilder=r,this._fuseConfirmationService=i,this._scrumboardService=o,this._positionStep=65536,this._maxListCount=200,this._maxPosition=500*this._positionStep,this._unsubscribeAll=new w.B}ngOnInit(){this.listTitleForm=this._formBuilder.group({title:[""]}),this._scrumboardService.board$.pipe((0,D.Q)(this._unsubscribeAll)).subscribe(e=>{this.board={...e},this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}renameList(e){setTimeout(()=>{e.focus()})}addList(e){if(this.board.lists.length>=this._maxListCount)return;const r=new k({boardId:this.board.id,position:this.board.lists.length?this.board.lists[this.board.lists.length-1].position+this._positionStep:this._positionStep,title:e});this._scrumboardService.createList(r).subscribe()}updateListTitle(e,r){const i=e.target,o=i.value;o&&""!==o.trim()?(r.title=i.value=o.trim(),this._scrumboardService.updateList(r).subscribe()):i.value=r.title}deleteList(e){this._fuseConfirmationService.open({title:"Delete list",message:"Are you sure you want to delete this list and its cards? This action cannot be undone!",actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._scrumboardService.deleteList(e).subscribe()})}addCard(e,r){const i=new I({boardId:this.board.id,listId:e.id,position:e.cards.length?e.cards[e.cards.length-1].position+this._positionStep:this._positionStep,title:r});this._scrumboardService.createCard(i).subscribe()}listDropped(e){(0,v.HD)(e.container.data,e.previousIndex,e.currentIndex);const r=this._calculatePositions(e);this._scrumboardService.updateLists(r).subscribe()}cardDropped(e){e.previousContainer===e.container?(0,v.HD)(e.container.data,e.previousIndex,e.currentIndex):((0,v.eg)(e.previousContainer.data,e.container.data,e.previousIndex,e.currentIndex),e.container.data[e.currentIndex].listId=e.container.id);const r=this._calculatePositions(e);this._scrumboardService.updateCards(r).subscribe()}isOverdue(e){return F.c9.fromISO(e).startOf("day")<F.c9.now().startOf("day")}trackByFn(e,r){return r.id||e}_calculatePositions(e){let r=e.container.data;const i=r[e.currentIndex],o=r[e.currentIndex-1]||null,n=r[e.currentIndex+1]||null;return i.position=o?n?(o.position+n.position)/2:o.position+this._positionStep:n?n.position/2:this._positionStep,!Number.isInteger(i.position)||i.position>=this._maxPosition?(r=r.map((c,m)=>(c.position=(m+1)*this._positionStep,c)),r):[i]}static{this.\u0275fac=function(r){return new(r||s)(t.rXU(t.gRc),t.rXU(d.ze),t.rXU(K.G),t.rXU(C))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["scrumboard-board"]],decls:22,vars:8,consts:[["listTitleInput",""],["listMenu","matMenu"],[1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-hidden"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],["mat-stroked-button","",3,"routerLink"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-stroked-button","",1,"ml-3"],["cdkScrollable","",1,"flex-auto","overflow-y-auto","p-6","sm:p-8","sm:pt-4"],["cdkDropList","",1,"flex",3,"cdkDropListDropped","cdkDropListData","cdkDropListOrientation"],["cdkDropListGroup","",1,"flex","items-start"],["cdkDrag","",1,"bg-default","w-72","flex-0","rounded-2xl","p-2",3,"cdkDragLockAxis"],[3,"saved","buttonTitle"],[1,"pointer-events-none","invisible","absolute","h-0","w-0","opacity-0"],["cdkDragHandle","",1,"flex","items-center","justify-between"],[1,"flex","w-full","cursor-text","items-center","rounded-md","border","border-transparent","px-3","py-2","focus-within:border-primary","focus-within:bg-white","focus-within:shadow-sm","dark:focus-within:bg-gray-900"],[1,"w-full","bg-transparent","font-medium","leading-5",3,"focusout","keydown.enter","spellcheck","value"],[1,"text-secondary","ml-4","flex","min-w-6","items-center","justify-center","rounded-full","bg-gray-300","text-sm","font-semibold","leading-6","dark:bg-gray-700"],[1,"ml-1"],["mat-icon-button","",1,"h-8","min-h-8","w-8",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"mt-2","rounded-xl","bg-gray-400","bg-opacity-12","dark:border","dark:bg-transparent"],["cdkDropList","",1,"p-3","pb-0",3,"cdkDropListDropped","id","cdkDropListData"],["cdkDrag","",1,"bg-card","mb-3","flex","flex-col","items-start","space-y-3","overflow-hidden","rounded-lg","p-5","shadow",3,"routerLink"],[1,"-mx-5","-mt-5","mb-2"],[1,"text-lg","font-medium","leading-5"],[1,"text-secondary","flex","items-center","rounded","text-sm","font-medium","leading-5",3,"ngClass"],[1,"w-full","object-cover",3,"src"],[1,"-mx-1","-mb-2","flex","flex-wrap"],[1,"mx-1","mb-2","rounded-full","bg-gray-100","px-3","py-0.5","text-sm","font-medium","text-gray-500","dark:bg-gray-700","dark:text-gray-300"],[1,"text-current","icon-size-4",3,"svgIcon"]],template:function(r,i){1&r&&(t.j41(0,"div",2)(1,"div",3)(2,"div",4)(3,"h2",5),t.EFF(4),t.k0s()(),t.j41(5,"div",6)(6,"a",7),t.nrm(7,"mat-icon",8),t.j41(8,"span",9),t.EFF(9,"Boards"),t.k0s()(),t.j41(10,"button",10),t.nrm(11,"mat-icon",8),t.j41(12,"span",9),t.EFF(13,"Settings"),t.k0s()()()(),t.j41(14,"div",11)(15,"div",12),t.bIt("cdkDropListDropped",function(n){return i.listDropped(n)}),t.j41(16,"div",13),t.Z7z(17,dt,23,11,"div",14,i.trackByFn,!0),t.j41(19,"scrumboard-board-add-list",15),t.bIt("saved",function(n){return i.addList(n)}),t.k0s()()()()(),t.j41(20,"div",16),t.nrm(21,"router-outlet"),t.k0s()),2&r&&(t.R7$(4),t.SpI(" ",i.board.title," "),t.R7$(2),t.Y8G("routerLink",t.lJ4(7,et)),t.R7$(),t.Y8G("svgIcon","heroicons_solid:view-columns"),t.R7$(4),t.Y8G("svgIcon","heroicons_solid:cog-8-tooth"),t.R7$(4),t.Y8G("cdkDropListData",i.board.lists)("cdkDropListOrientation","horizontal"),t.R7$(2),t.Dyx(i.board.lists),t.R7$(2),t.Y8G("buttonTitle",i.board.lists.length?"Add another list":"Add a list"))},dependencies:[p.Hl,p.It,p.$z,p.iY,_.Wk,b.m_,b.An,A.uv,v.O7,v.RK,v.T1,v.Fb,R.Cn,R.kk,R.fb,R.Cp,x.YU,P,J,_.n3,x.vh],styles:[".cdk-drag-preview{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drop-list-dragging div:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"],encapsulation:2,changeDetection:0})}}return s})();const ut=s=>[s];function mt(s,a){1&s&&t.nrm(0,"img",16),2&s&&t.Y8G("src",a.$implicit.avatar,t.B4B)}function pt(s,a){if(1&s&&(t.j41(0,"div",17)(1,"div",18),t.EFF(2),t.k0s()()),2&s){const e=t.XpG(2).$implicit;t.R7$(2),t.SpI(" +",e.members.slice(5).length," ")}}function bt(s,a){if(1&s&&(t.nrm(0,"div",14),t.j41(1,"div",15),t.Z7z(2,mt,1,1,"img",16,t.BUC().trackByFn,!0),t.DNE(4,pt,3,1,"div",17),t.k0s()),2&s){const e=t.XpG().$implicit;t.R7$(2),t.Dyx(e.members.slice(0,5)),t.R7$(2),t.vxM(e.members.length>5?4:-1)}}function ht(s,a){if(1&s&&(t.j41(0,"a",4)(1,"div",7),t.nrm(2,"mat-icon",8),t.k0s(),t.j41(3,"div",9),t.EFF(4),t.k0s(),t.j41(5,"div",10),t.EFF(6),t.k0s(),t.DNE(7,bt,5,1),t.j41(8,"div",11)(9,"div",12),t.EFF(10,"Edited:"),t.k0s(),t.j41(11,"div",13),t.EFF(12),t.k0s()()()),2&s){const e=a.$implicit,r=t.XpG();t.Y8G("routerLink",t.eq3(6,ut,e.id)),t.R7$(2),t.Y8G("svgIcon",e.icon),t.R7$(2),t.SpI(" ",e.title," "),t.R7$(2),t.SpI(" ",e.description," "),t.R7$(),t.vxM(null!=e.members&&e.members.length?7:-1),t.R7$(5),t.SpI(" ",r.formatDateAsRelative(e.lastActivity)," ")}}let ft=(()=>{class s{constructor(e,r){this._changeDetectorRef=e,this._scrumboardService=r,this._unsubscribeAll=new w.B}ngOnInit(){this._scrumboardService.boards$.pipe((0,D.Q)(this._unsubscribeAll)).subscribe(e=>{this.boards=e,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}formatDateAsRelative(e){return F.c9.fromISO(e).toRelative()}trackByFn(e,r){return r.id||e}static{this.\u0275fac=function(r){return new(r||s)(t.rXU(t.gRc),t.rXU(C))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["scrumboard-boards"]],decls:9,vars:1,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-y-auto"],[1,"flex","flex-auto","flex-col","items-center","p-6","sm:p-10"],[1,"mt-4","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:mt-24","md:text-6xl"],[1,"mt-8","grid","grid-cols-1","gap-4","sm:grid-cols-2","md:mt-16","lg:grid-cols-4"],[1,"bg-card","flex","w-56","flex-col","items-start","rounded-lg","p-6","shadow","transition-shadow","duration-150","ease-in-out","hover:shadow-xl",3,"routerLink"],[1,"flex","w-56","cursor-pointer","flex-col","items-center","justify-center","rounded-lg","border-2","border-dashed","border-gray-300","transition-colors","duration-150","ease-in-out","hover:bg-hover"],[1,"text-hint","icon-size-12",3,"svgIcon"],[1,"flex","items-center","justify-center","rounded-full","bg-primary-50","p-4","text-primary-700","dark:bg-primary","dark:text-on-primary"],[1,"text-current",3,"svgIcon"],[1,"mt-5","text-lg","font-medium","leading-5"],[1,"text-secondary","mt-0.5","line-clamp-2"],[1,"font-md","mt-4","flex","items-center","text-md"],[1,"text-secondary"],[1,"ml-1"],[1,"mt-6","h-1","w-12","border-t-2"],[1,"mt-6","flex","items-center","-space-x-1.5"],["alt","Member avatar",1,"ring-bg-card","h-8","w-8","flex-0","rounded-full","object-cover","ring","ring-offset-1","ring-offset-transparent",3,"src"],[1,"ring-bg-card","flex","h-8","w-8","flex-0","items-center","justify-center","rounded-full","bg-gray-200","text-gray-500","ring","ring-offset-1","ring-offset-transparent"],[1,"text-md","font-semibold"]],template:function(r,i){1&r&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2),t.EFF(3," Scrumboard Boards "),t.k0s(),t.j41(4,"div",3),t.Z7z(5,ht,13,8,"a",4,i.trackByFn,!0),t.j41(7,"div",5),t.nrm(8,"mat-icon",6),t.k0s()()()()),2&r&&(t.R7$(5),t.Dyx(i.boards),t.R7$(3),t.Y8G("svgIcon","heroicons_outline:plus"))},dependencies:[A.uv,_.Wk,b.m_,b.An],encapsulation:2,changeDetection:0})}}return s})();var Y=l(82765),y=l(25084),G=l(30636),z=l(59042),gt=l(34948),_t=l(70152),X=l(75351);const vt=["labelInput"],xt=(s,a,e)=>({"bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300":s,"bg-green-200 text-green-800 dark:bg-green-500 dark:text-green-100":a,"bg-red-200 text-red-800 dark:bg-red-500 dark:text-red-100":e});function kt(s,a){if(1&s&&(t.EFF(0),t.nI1(1,"date")),2&s){const e=t.XpG();t.SpI(" ",t.i5U(1,1,e.card.dueDate,"longDate")," ")}}function Ct(s,a){1&s&&t.EFF(0," Not set ")}function yt(s,a){if(1&s){const e=t.RV6();t.j41(0,"mat-checkbox",25),t.bIt("change",function(i){const o=t.eBV(e).$implicit,n=t.XpG();return t.Njj(n.toggleProductTag(o,i))}),t.EFF(1),t.k0s()}if(2&s){const e=a.$implicit,r=t.XpG();t.Y8G("color","primary")("checked",r.hasLabel(e)),t.R7$(),t.SpI(" ",e.title," ")}}let It=(()=>{class s{constructor(e,r,i,o){this.matDialogRef=e,this._changeDetectorRef=r,this._formBuilder=i,this._scrumboardService=o,this._unsubscribeAll=new w.B}ngOnInit(){this._scrumboardService.board$.pipe((0,D.Q)(this._unsubscribeAll)).subscribe(e=>{this.board=e,this.labels=this.filteredLabels=e.labels}),this._scrumboardService.card$.pipe((0,D.Q)(this._unsubscribeAll)).subscribe(e=>{this.card=e}),this.cardForm=this._formBuilder.group({id:[""],title:["",d.k0.required],description:[""],labels:[[]],dueDate:[null]}),this.cardForm.setValue({id:this.card.id,title:this.card.title,description:this.card.description,labels:this.card.labels,dueDate:this.card.dueDate}),this.cardForm.valueChanges.pipe((0,h.M)(e=>{this.card=(0,gt.A)(this.card,e)}),(0,_t.B)(300),(0,D.Q)(this._unsubscribeAll)).subscribe(e=>{this._scrumboardService.updateCard(e.id,e).subscribe(),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}hasLabel(e){return!!this.card.labels.find(r=>r.id===e.id)}filterLabels(e){const r=e.target.value.toLowerCase();this.filteredLabels=this.labels.filter(i=>i.title.toLowerCase().includes(r))}filterLabelsInputKeyDown(e){if("Enter"!==e.key||0===this.filteredLabels.length)return;const r=this.filteredLabels[0];this.card.labels.find(o=>o.id===r.id)?this.removeLabelFromCard(r):this.addLabelToCard(r)}toggleProductTag(e,r){r.checked?this.addLabelToCard(e):this.removeLabelFromCard(e)}addLabelToCard(e){this.card.labels.unshift(e),this.cardForm.get("labels").patchValue(this.card.labels),this._changeDetectorRef.markForCheck()}removeLabelFromCard(e){this.card.labels.splice(this.card.labels.findIndex(r=>r.id===e.id),1),this.cardForm.get("labels").patchValue(this.card.labels),this._changeDetectorRef.markForCheck()}isOverdue(e){return F.c9.fromISO(e).startOf("day")<F.c9.now().startOf("day")}trackByFn(e,r){return r.id||e}_readAsDataURL(e){return new Promise((r,i)=>{const o=new FileReader;o.onload=()=>{r(o.result)},o.onerror=n=>{i(n)},o.readAsDataURL(e)})}static{this.\u0275fac=function(r){return new(r||s)(t.rXU(X.CP),t.rXU(t.gRc),t.rXU(d.ze),t.rXU(C))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["scrumboard-card-details"]],viewQuery:function(r,i){if(1&r&&t.GBs(vt,5),2&r){let o;t.mGM(o=t.lsd())&&(i.labelInput=o.first)}},decls:45,vars:25,consts:[["dueDatePicker",""],[1,"-m-6","flex","max-h-160","flex-auto","flex-col","overflow-y-auto","md:w-160","md:min-w-160"],[1,"flex","h-16","flex-0","items-center","justify-between","bg-primary","pl-6","pr-3","text-on-primary","sm:pl-8","sm:pr-5"],[1,"text-lg","font-medium"],["mat-icon-button","",3,"click","tabIndex"],[1,"text-current",3,"svgIcon"],[1,"flex","w-full","flex-0","flex-col","items-start","space-y-6","overflow-y-auto","p-6","sm:p-8",3,"formGroup"],[1,"w-full",3,"subscriptSizing"],["matInput","","cdkTextareaAutosize","",3,"formControlName","rows","cdkAutosizeMinRows"],[1,"font-medium"],[1,"relative","mt-1.5","flex","cursor-pointer","items-center","rounded-full","px-4","leading-9",3,"click","ngClass"],[1,"text-current","icon-size-5",3,"svgIcon"],[1,"ml-2","text-md","font-medium"],[1,"fuse-mat-dense","pointer-events-none","invisible","absolute","inset-0","-mt-2.5","opacity-0",3,"subscriptSizing"],["matInput","",3,"formControlName","matDatepicker"],["mat-button","","matDatepickerCancel","",3,"click"],["mat-flat-button","","matDatepickerApply","",3,"color"],[1,"w-full"],[1,"mt-1","overflow-hidden","rounded-md","border","border-gray-300","shadow-sm"],[1,"mx-3","my-2","flex","items-center"],[1,"flex","min-w-0","flex-auto","items-center"],[1,"icon-size-5",3,"svgIcon"],["type","text","placeholder","Enter label name",1,"ml-2","min-w-0","border-0","py-1",3,"input","keydown","maxLength"],[1,"max-h-40","overflow-y-auto","border-t","leading-none"],[1,"flex","h-10","min-h-10","items-center","pl-1","pr-4",3,"color","checked"],[1,"flex","h-10","min-h-10","items-center","pl-1","pr-4",3,"change","color","checked"]],template:function(r,i){if(1&r){const o=t.RV6();t.j41(0,"div",1)(1,"div",2)(2,"div",3),t.EFF(3,"Card"),t.k0s(),t.j41(4,"button",4),t.bIt("click",function(){return t.eBV(o),t.Njj(i.matDialogRef.close())}),t.nrm(5,"mat-icon",5),t.k0s()(),t.j41(6,"form",6)(7,"mat-form-field",7)(8,"mat-label"),t.EFF(9,"Title"),t.k0s(),t.j41(10,"textarea",8),t.EFF(11,"            "),t.k0s()(),t.j41(12,"mat-form-field",7)(13,"mat-label"),t.EFF(14,"Description"),t.k0s(),t.j41(15,"textarea",8),t.EFF(16,"            "),t.k0s()(),t.j41(17,"div")(18,"div",9),t.EFF(19,"Due date"),t.k0s(),t.j41(20,"div",10),t.bIt("click",function(){t.eBV(o);const c=t.sdS(28);return t.Njj(c.open())}),t.nrm(21,"mat-icon",11),t.j41(22,"span",12),t.DNE(23,kt,2,4)(24,Ct,1,0),t.k0s(),t.j41(25,"mat-form-field",13),t.nrm(26,"input",14),t.j41(27,"mat-datepicker",null,0)(29,"mat-datepicker-actions")(30,"button",15),t.bIt("click",function(){return t.eBV(o),t.Njj(i.cardForm.get("dueDate").setValue(null))}),t.EFF(31," Clear "),t.k0s(),t.j41(32,"button",16),t.EFF(33," Select "),t.k0s()()()()()(),t.j41(34,"div",17)(35,"div",9),t.EFF(36,"Labels"),t.k0s(),t.j41(37,"div",18)(38,"div",19)(39,"div",20),t.nrm(40,"mat-icon",21),t.j41(41,"input",22),t.bIt("input",function(c){return t.eBV(o),t.Njj(i.filterLabels(c))})("keydown",function(c){return t.eBV(o),t.Njj(i.filterLabelsInputKeyDown(c))}),t.k0s()()(),t.j41(42,"div",23),t.Z7z(43,yt,2,3,"mat-checkbox",24,i.trackByFn,!0),t.k0s()()()()()}if(2&r){const o=t.sdS(28);t.R7$(4),t.Y8G("tabIndex",-1),t.R7$(),t.Y8G("svgIcon","heroicons_outline:x-mark"),t.R7$(),t.Y8G("formGroup",i.cardForm),t.R7$(),t.Y8G("subscriptSizing","dynamic"),t.R7$(3),t.Y8G("formControlName","title")("rows",1)("cdkAutosizeMinRows",1),t.R7$(2),t.Y8G("subscriptSizing","dynamic"),t.R7$(3),t.Y8G("formControlName","description")("rows",1)("cdkAutosizeMinRows",1),t.R7$(5),t.Y8G("ngClass",t.sMw(21,xt,!i.card.dueDate,i.card.dueDate&&!i.isOverdue(i.card.dueDate),i.card.dueDate&&i.isOverdue(i.card.dueDate))),t.R7$(),t.Y8G("svgIcon","heroicons_solid:calendar"),t.R7$(2),t.vxM(i.card.dueDate?23:-1),t.R7$(),t.vxM(i.card.dueDate?-1:24),t.R7$(),t.Y8G("subscriptSizing","dynamic"),t.R7$(),t.Y8G("formControlName","dueDate")("matDatepicker",o),t.R7$(6),t.Y8G("color","primary"),t.R7$(8),t.Y8G("svgIcon","heroicons_solid:magnifying-glass"),t.R7$(),t.Y8G("maxLength",50),t.R7$(2),t.Dyx(i.filteredLabels)}},dependencies:[p.Hl,p.$z,p.iY,b.m_,b.An,d.YN,d.qT,d.me,d.BC,d.cb,d.X1,d.j4,d.JD,G.RG,G.rl,G.nJ,z.fS,z.fg,B.xb,B.EE,x.YU,y.X6,y.Vh,y.bZ,y.Cz,y.jj,y.T7,Y.g7,Y.So,x.vh],encapsulation:2,changeDetection:0})}}return s})(),Ft=(()=>{class s{constructor(e,r,i){this._activatedRoute=e,this._matDialog=r,this._router=i}ngOnInit(){this._matDialog.open(It,{autoFocus:!1}).afterClosed().subscribe(()=>{this._router.navigate(["./../.."],{relativeTo:this._activatedRoute})})}static{this.\u0275fac=function(r){return new(r||s)(t.rXU(_.nX),t.rXU(X.bZ),t.rXU(_.Ix))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["scrumboard-card"]],decls:1,vars:0,template:function(r,i){1&r&&t.EFF(0,"SCRUMBOARD -> BOARDS -> LIST -> CARD\n")},encapsulation:2,changeDetection:0})}}return s})();var U=l(99437);const Dt=[{path:"",component:ft,resolve:{boards:()=>(0,t.WQX)(C).getBoards()}},{path:":boardId",component:ct,resolve:{board:(s,a)=>{const e=(0,t.WQX)(C),r=(0,t.WQX)(_.Ix);return e.getBoard(s.paramMap.get("boardId")).pipe((0,U.W)(i=>{console.error(i);const o=a.url.split("/").slice(0,-1).join("/");return r.navigateByUrl(o),(0,T.$)(i)}))}},children:[{path:"card/:cardId",component:Ft,resolve:{card:(s,a)=>{const e=(0,t.WQX)(C),r=(0,t.WQX)(_.Ix);return e.getCard(s.paramMap.get("cardId")).pipe((0,U.W)(i=>{console.error(i);const o=a.url.split("/").slice(0,-1).join("/");return r.navigateByUrl(o),(0,T.$)(i)}))}}}]}]}}]);