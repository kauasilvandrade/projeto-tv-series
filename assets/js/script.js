// BOTÃO DE ABRIR MENU E ÁREA DE PESQUISA
const btnAbrirMenu = document.getElementById('btnOpenMenu');

const menuSidebar = document.getElementById('menu');

const areaPesquisa = document.getElementById('pesquisar');

const imgBusca = document.querySelector('.imgBusca');

function abrirMenu(event) {

    if (event.type === "touchstart") event.preventDefault();

    menuSidebar.classList.toggle('ativado');

    btnAbrirMenu.classList.toggle('ativado');

    areaPesquisa.classList.toggle('ativado');

    imgBusca.classList.toggle('ativado');

    const ativado = btnAbrirMenu.classList.contains('ativado');

    event.currentTarget.setAttribute('aria-expanded', ativado);

    if (ativado) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }

}

btnAbrirMenu.addEventListener('click', abrirMenu);
btnAbrirMenu.addEventListener('touchstart', abrirMenu);

// FUNCÃO PARA EXPANDIR A DESCRIÇÃO DO FILME
const btnExpandir = document.getElementById('btnVerMais');

function expandirDescricao(event) {

    if (event.type === "touchstart") event.preventDefault();

    const filmeDescricao = document.getElementById('verMais');

    verMais.classList.toggle('abrir');

    const ativado = filmeDescricao.classList.contains('abrir');

    event.currentTarget.setAttribute('aria-expanded', ativado)

    if (ativado) {
        event.currentTarget.setAttribute('aria-label', 'Botão fechar seção ver mais')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Botão abrir seção ver mais')
    }
    
}

btnExpandir.addEventListener('click', expandirDescricao);
btnExpandir.addEventListener('touchstart', expandirDescricao);
