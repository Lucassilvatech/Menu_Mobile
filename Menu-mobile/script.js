const $menu = document.querySelector('.menu')
const $btnMenuOpen = document.querySelector('.btnMenu_open')
$btnMenuOpen.addEventListener('click', function(){
    $menu.classList.add('menu_open')
})

const $btnMenuClose = document.querySelector('.btnMenu_close')
$btnMenuClose.addEventListener('click', function(){
    $menu.classList.remove('menu_open')
})