
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
const form=document.querySelector('#enquiry');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);let lines=['Hello Linet Tours & Travel, I would like to make an enquiry.'];for(const [k,v] of d.entries())lines.push(k.replace(/_/g,' ')+': '+v);window.open('https://wa.me/254726826529?text='+encodeURIComponent(lines.join('\n')),'_blank')});
const menu=document.querySelector('.menu');if(menu)menu.addEventListener('click',()=>{const n=document.querySelector('.links');n.style.display=n.style.display==='flex'?'none':'flex'});
