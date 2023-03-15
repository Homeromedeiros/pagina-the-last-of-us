/*
1 - dar um jeito de pegar o elemento HTML dos botões

2- dar um jeito de identificar o clique do usuario no botão

3 - desmarcar o botão selecionado anterior

4 - marcar o botão cliado como se estivesse selecionado

5 - esconder a imagem anterior

6 - fazer aparcer a imagem correspondente ao botão clicado
*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click',()=>{

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();
 
        ativarImagemFundo(indice);
    })
})

function ativarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
