var o=class{constructor(){this.inboxes={},this.queue=[],this.flushQueue()}flushQueue(){if(this.queue.length){let e=this.queue.splice(0,this.queue.length);for(let i=e.length-1;i>=0;i--)if(this.inboxes?.[e[i].recipient]){let t={data:e[i].data,replyId:e[i].senderId};for(let s=0;s<this.inboxes[e[i].recipient].length;s++)this.inboxes[e[i].recipient][s].inbox(t);e.splice(i,1)}else e[i].attempts++,e[i].attempts>=e[i].maxAttempts&&e.splice(i,1);this.queue=[...this.queue,...e]}setTimeout(this.flushQueue.bind(this),1e3)}sendMessage(e){if(this.inboxes?.[e.recipient]){let i={data:e.data,replyId:e.senderId};for(let t=0;t<this.inboxes[e.recipient].length;t++)this.inboxes[e.recipient][t].inbox(i)}else e.maxAttempts>1&&this.queue.push(e)}uid(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}register(e,i){let t=this.uid();return this.inboxes?.[e]||(this.inboxes[e]=[]),this.inboxes[e].push({id:t,inbox:i}),t}unregister(e){let i=!1;for(let t in this.inboxes){for(let s=0;s<this.inboxes[t].length;s++)if(this.inboxes[t][s].id===e){this.inboxes[t].splice(s,1),i=!0;break}if(i){this.inboxes[t].length===0&&delete this.inboxes[t];break}}}message(e){let i=Object.assign({maxAttempts:1,senderId:null,attempts:0,recipient:null,data:null},e);i.recipient!==null?this.sendMessage(i):console.error("Messaging Error: recipient field required.")}reply(e,i){if(e===null){console.error("Messaging error: replyId cannot be null");return}let t=!1;for(let s in this.inboxes){for(let r=0;r<this.inboxes[s].length;r++)if(this.inboxes[s][r].id===e){let l={data:i.data,replyId:i?.senderId??null};this.inboxes[s][r].inbox(l),t=!0;break}if(t)break}}},n=new o,h=n.register.bind(n),u=n.unregister.bind(n),a=n.message.bind(n),b=n.reply.bind(n);export{a as message,h as register,b as reply,u as unregister};
