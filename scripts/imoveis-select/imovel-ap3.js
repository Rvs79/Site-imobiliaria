const lista_imoveis = [
    '../img/imoveis/ap3/foto1.jpg',
    '../img/imoveis/ap3/foto2.jpg',
    '../img/imoveis/ap3/foto3.jpg',
    '../img/imoveis/ap3/foto4.jpg',
    '../img/imoveis/ap3/foto5.jpg'
]

//DECLARANDO OBJETOS

const obj_btn_anterior = document.querySelector('#btn-1')
const obj_btn_proximo = document.querySelector('#btn-2')
const obj_imagem_slider = document.querySelector('.img-principal-card-copy')

let contador_img = 0;
obj_imagem_slider.src = lista_imoveis[contador_img];


//DECLARANDO EVENTOS
obj_btn_anterior.addEventListener('click', funImagemAnterior)
obj_btn_proximo.addEventListener('click', funImagemProxima)


//DECLARANDO FUNCOES
function funImagemAnterior() {
    contador_img = contador_img - 1;
    obj_imagem_slider.src = lista_imoveis[contador_img];
    if(contador_img < 0) {
        contador_img = lista_imoveis.length - 1;
        obj_imagem_slider.src = lista_imoveis[contador_img];
    }
}

function funImagemProxima() {
    contador_img++;
    obj_imagem_slider.src = lista_imoveis[contador_img];
    if(contador_img > lista_imoveis.length - 1) {
        contador_img = 0;
        obj_imagem_slider.src = lista_imoveis[contador_img];
    }
}




