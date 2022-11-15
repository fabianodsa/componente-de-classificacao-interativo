// id*: busca todos os ementos id que tenham o nome "digito". Descobri que não funcionou antes quando
//eu tinha classificado os botões como div, e não como button.
const display = document.getElementById('display');
const notaSelecionada = document.querySelectorAll('[id*=digito]');

const inserirNumero = (evento) => display.textContent = evento.target.textContent;
//target demonstra o elemento que foi clicado. 

notaSelecionada.forEach (notaSelecionada => notaSelecionada.addEventListener('click', inserirNumero));

// function enviarNota () {
//     const enviarNota = document.getElementById ('botao');
// }


//- crie uma variável para armazenar o texto do botão clicado (por exemplo, valorDoBotao)
//- coloque um evento de clique em cada botão
//  - crie uma função para armazenar esse valor numa variável (salvarValorDoBotao()). Ela receberá um parâmetro (e), para representar o evento que a disparará.  Na implementação dela, vc atribui o texto do botão à variável criada para isso: valorDoBotão = e.target.innerText 
// Ah, lembre de colocar a chamada dessa mesma função criada no evento de click de cada botão
// <button onclick="salvarValorDoBotao()">