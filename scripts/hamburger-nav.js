//DECLARANDO OBJETOS
const obj_btn_hamburguer = document.querySelector('.btn-hamb')
const obj_ul_nav_links = document.querySelector('#ul-nav-links')
const obj_btn_hamb = document.querySelector('.btn-hamb')
const obj_btn_venda_nav = document.querySelector('#btn-venda-nav')


//DECLARANDO EVENTOS
obj_btn_hamburguer.addEventListener('click', funClickHamburguer)
obj_btn_venda_nav.addEventListener('click', funClickHamburguer)

//DECLARANDO FUNCOES
function funClickHamburguer() {
    obj_ul_nav_links.classList.toggle('active')
    obj_btn_hamb.classList.toggle('active')
}