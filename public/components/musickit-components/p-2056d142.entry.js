import{r as t,e as n,h as i,g as s,H as o}from"./p-a23b3d3a.js";const a=new Map,e=class{constructor(n){t(this,n)}async nameChanged(t,n){t!==n&&await this.loadAsset()}async componentWillLoad(){await this.loadAsset()}async loadAsset(){const{name:t}=this;if(!(t=>(null==t?void 0:t.length)>0&&/^[a-zA-Z0-9-]+$/.test(t))(t))return this.iconContent="",void console.warn(`"${t}" is not a valid icon name.`);if(a.has(t))this.iconContent=a.get(t);else try{const i=await fetch(n(`assets/icons/${t}.svg`));if(!i.ok)throw this.iconContent="",new Error("Icon not found");this.iconContent=await i.text(),a.set(t,this.iconContent)}catch(i){console.warn("Cannot load icon",this.name),this.iconContent=""}}render(){return i(o,{class:"icon",role:"presentation","aria-hidden":"true",innerHTML:this.iconContent})}get el(){return s(this)}static get watchers(){return{name:["nameChanged"]}}};e.style=".icon{display:block}.icon svg{width:inherit;height:inherit;display:block;color:currentColor;pointer-events:none}.icon svg *{fill:currentColor}";export{e as amp_icon}