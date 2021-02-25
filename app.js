var menuButton = document.getElementById('menu-button');
var menu = document.getElementById('menu');

menuButton.addEventListener('click', ()=>toggleMenu());

const toggleMenu=()=>{
    if(menu.style.display==='none'){
        menu.style.display='block'
        menuButton.classList.add('menu-active')
    } else {
        menu.style.display='none'
        menuButton.classList.remove('menu-active')
    }
}