// BOTÃO DE ABRIR MENU E ÁREA DE PESQUISA
const btnAbrirMenu = document.getElementById('btnOpenMenu');

const menuSidebar = document.querySelector('.lista-links');

const areaPesquisa = document.getElementById('pesquisar');

const imgBusca = document.querySelector('.imgBusca');

function abrirMenu(event) {

    event.preventDefault();

    menuSidebar.classList.toggle('ativado');

    btnAbrirMenu.classList.toggle('ativado');

    areaPesquisa.classList.toggle('ativado');

    imgBusca.classList.toggle('ativado');
}

btnAbrirMenu.addEventListener('click', abrirMenu);

// FUNCÃO PARA EXPANDIR A DESCRIÇÃO DO FILME
const btnExpandir = document.getElementById('verMais');

function expandirDescricao() {

    const filmeDescricao = document.querySelector('.descricao-filme');

    filmeDescricao.classList.toggle('abrir');
    

}

btnExpandir.addEventListener('click', expandirDescricao);
