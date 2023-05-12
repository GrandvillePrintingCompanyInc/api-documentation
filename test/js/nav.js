import a from"./supercomponent.js";import{html as s,render as o}from"./lit-html.js";import{register as p}from"./messaging.js";import{navigate as g}from"./navigation.js";class v extends a{constructor(){super(),this.state="LOADING",this.stateMachine={LOADING:{PASS:"IDLING",FAIL:"ERROR"}},this.model={fsLinks:[]},p("navigation",this.inbox.bind(this)),this.render(),this.fetchData()}inbox(t){this.openNavigationMenus()}async openNavigationMenus(){console.log("openNavigationMenus");const e=location.pathname.replace(/^\//,"").split("/");let n="";for(const c of e){n.length?n+=`/${c}`:n=c;const r=document.body.querySelector(`button[data-slug="${n}"]`);console.log(r),r&&r.parentElement instanceof l&&await r.parentElement.open()}}async fetchFSData(){const e=await(await fetch("/api/navigation.json")).json();this.set({fsLinks:e})}async fetchData(){try{await Promise.all([this.fetchFSData()]),this.trigger("PASS")}catch{this.trigger("FAIL")}}render(){let t;switch(this.state){case"LOADING":t=s`
                    ${Array.from(Array(8)).map(()=>s`
                            <div class="skeleton -copy w-full mb-0.25"></div>
                        `)}
                `;break;case"IDLING":t=s`
                    ${this.model.fsLinks.map(e=>s`
                            ${e.children!==null?u(e):h(e)}
                        `)}
                `;break;case"ERROR":t=s`<p class="block w-full text-center font-danger-700">An error occured. Please contact support.</p>`;break}console.log("rendering"),o(t,this),console.log("rendered"),this.openNavigationMenus()}}class l extends a{constructor(e){super();this.toggleGroup=e=>{this.model.isOpen?this.set({isOpen:!1}):this.set({isOpen:!0})};this.model={label:e.label,children:e.children,slug:e.slug,isOpen:!1},this.render()}async open(){this.set({isOpen:!0})}render(){const e=s`
            <button class="${this.model.isOpen?"is-open":""}" @click=${this.toggleGroup} data-slug="${this.model.slug}">
                <span>${this.model.label}</span>
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"/></svg>
                </i>
            </button>
            <nav-children-container>
                ${this.model.children.map(n=>n.children!==null?u(n):h(n))}
            </nav-children-container>
        `;o(e,this)}}customElements.define("nav-link-group",l);function h(i){return new d(i)}function u(i){return new l(i)}class d extends a{constructor(e){super();this.navigationEvent=e=>{g(this.model.slug)};this.model=e,p("navigation",this.inbox.bind(this)),this.render()}inbox(e){this.render()}render(){const e=this.model.slug.replace(/\.md$/,""),n=s`<button class="${location.pathname===`/${e}`?"is-active":""}" @click=${this.navigationEvent} data-slug="${e}">${this.model.label.replace(/\-/g," ")}</button>`;o(n,this)}}customElements.define("nav-link",d);export{v as default};
