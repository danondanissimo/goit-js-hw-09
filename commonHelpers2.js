import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const s=document.querySelector(".feedback-form"),a="feedback-form-state";let o=JSON.parse(localStorage.getItem(a))||{};const m={email:"",message:""};s.addEventListener("input",t=>{const e=t.currentTarget.elements.email.value,l=t.currentTarget.elements.message.value;console.log(e,l);const r={email:e,message:l};console.log(r),localStorage.setItem(a,JSON.stringify(r))});s.addEventListener("submit",t=>{t.preventDefault();const e=s.elements.email.value.trim(),l=s.elements.message.value.trim();e.length===0||l.length===0?alert("All form fields must be filled in"):console.log({email:e,message:l}),s.reset(),localStorage.setItem(a,JSON.stringify(m))});function n(t="empty"){try{return o}catch{console.error(error)}}function c(){const{email:t,message:e}=n(a);s.elements.email.value=t,s.elements.message.value=e}c();
//# sourceMappingURL=commonHelpers2.js.map