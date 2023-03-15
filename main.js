const currentNumber = document.getSelector ('.currentNumber');

const previousNumber = document.querySelector ('.previousNumber p');

const mathSing = document.querySelector ('.mathSingth');

const numbersButtons = document.querySelectorAll ('.number');

const operatorsButtons = document.querySelecetorAll('.operator');

const equalsButton = document.querySelector ('.equals');

const clearButton = document.querySelector ('.clear');

const calculatorHistory = document.querySelector('.history');

const historybtn = documentquerySelector('.history-btn');

let result = '';

function displayNumbers (){
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML ==='') return currentNumber.innerHTML = '.0'
    currentNumber.innerHTML += this.textContent;
}

function operate (){
    if(currentNumber.innerHTML === '' && this.textCintent === '-'){
        currentNumber.innerHTML = '-';
        return;
    }
    else if(currentNumber.innerHTML === '') {
        return
    }
}

function showResult (){

}

function clearScreen (){

}

// BTN lisiner

operatorsButtons.forEach((button) => button.addEventListener('click', operate))
equalsButton.addEventListener('click', showResult);
clearButton.addEventListener('click', clearScreen);
numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers);
});
historybtn.addEventListener('click', clearHistory);

