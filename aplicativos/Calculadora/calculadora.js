let inputNumber = document.getElementById('input-number')
let enviar = document.querySelector('.enviar');
let addButton = document.querySelector('.add-button');
let subButton = document.querySelector('.subtract-button');
let multButton = document.querySelector('.multiplicar-button');
let divButton= document.querySelector('.dividir-button');
let currentResult = document.querySelector('#current-result');

let defaultResult = 0;
let resposta = 0;

//soma
function add() {
    console.log(resposta = resposta + +inputNumber.value);
    currentResult.textContent = resposta;
    return resposta;
}
//subtrai
function subtrair() {
    console.log(resposta = resposta - +inputNumber.value);
    currentResult.textContent = resposta;
    return resposta;
}
//multiplicar
function multiplicar() {
    console.log(resposta = resposta * +inputNumber.value);
    currentResult.textContent = resposta;
    return resposta;
}
//dividir
function dividir() {
    console.log(resposta = resposta / +inputNumber.value);
    currentResult.textContent = resposta;
    return resposta;
}



function result () {
    alert(resposta);
}

//soma action
addButton.addEventListener('click', add);
//subtração action
subButton.addEventListener('click', subtrair);
//multiplicação action
multButton.addEventListener('click', multiplicar);
//dividir action
divButton.addEventListener('click', dividir);

enviar.addEventListener('click', result);

