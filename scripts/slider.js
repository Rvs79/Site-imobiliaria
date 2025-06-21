//DECLARANDO OBJETOS
const obj_slider_img = document.querySelector('#slider-img');
const array_fotos_slider = [
    'img/imovel-livre-de-burocracias.png',
    'img/melhores-imoveis-na-regiao-de-guarulhos.png'
]
let indiceFotoAtual = 0;

//DECLARANDO EVENTOS
setInterval(proximaFoto, 5000);

document.addEventListener('DOMContentLoaded', () => {
    mudarFoto(indiceFotoAtual); 
});

//DECLARANDO FUNCOES
function mudarFoto(index) {
    obj_slider_img.style.opacity = 0;
    setTimeout(() => {
        obj_slider_img.src = array_fotos_slider[index];
        obj_slider_img.style.opacity = 1;
    }, 700);
}

function proximaFoto() {
    indiceFotoAtual = (indiceFotoAtual + 1);
    if(indiceFotoAtual > array_fotos_slider.length - 1){
        indiceFotoAtual = 0;
    }
    mudarFoto(indiceFotoAtual);
}
