// id*: busca todos os ementos id que tenham o nome "digito". Descobri que não funcionou antes quando
//eu tinha classificado os botões como div, e não como button.
const display = document.getElementById('display');
const notaSelecionada = document.querySelectorAll('[id*=digito]');

const botaoEnviarNota = document.getElementById('botao')

const inserirNumero = (evento) => display.textContent = evento.target.textContent;
//target monstra o elemento que foi clicado. Com o evento textContent, eu estou enviando para o disypay o texto que está dentro 
// de cada uma dos números que foram clicados.

notaSelecionada.forEach (notaSelecionada => notaSelecionada.addEventListener('click', inserirNumero));

// let armazenaNumero = notaSelecionada;

// const guardarNumero = (evento) => {
//     armazenaNumero = display.textContent;
// }


// function armazenaNumero (armazenaNumero) {
//     if notaSelecionada == 1 {
//         return "Você selecionou 1";
//     }
// }

botaoEnviarNota.addEventListener('click', () => {
    alert("Você enviou a sua avaliação. Obrigado!")
})