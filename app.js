const btn = document.querySelector("#menu-button");
const menu = document.querySelector("#nav-menu");
btn.addEventListener("click",()=>{
    menu.classList.toggle('hidden');
});