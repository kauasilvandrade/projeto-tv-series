// BOTÃO DE ABRIR MENU E ÁREA DE PESQUISA
const btnAbrirMenu = document.getElementById('btnOpenMenu');

function abrirMenu(event) {

    // TIRAR OS PADRÕES 
    if (event.type === "touchstart") event.preventDefault();

    const menuSidebar = document.getElementById('menu');
    menuSidebar.classList.toggle('ativado');

    const areaPesquisa = document.getElementById('pesquisar');
    areaPesquisa.classList.toggle('ativado');

    const imgBusca = document.querySelector('.imgBusca');
    imgBusca.classList.toggle('ativado');

    btnAbrirMenu.classList.toggle('ativado');

    // TRUE E FALSE
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

    filmeDescricao.classList.toggle('abrir');

    // TRUE E FALSE
    const ativado = filmeDescricao.classList.contains('abrir');

    event.currentTarget.setAttribute('aria-expanded', ativado);

    if (ativado) {
        event.currentTarget.setAttribute('aria-label', 'Botão fechar seção ver mais')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Botão abrir seção ver mais')
    }
    
}

btnExpandir.addEventListener('click', expandirDescricao);

btnExpandir.addEventListener('touchstart', expandirDescricao);