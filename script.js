let number1 = 0;
let number2 = 1;
let operator = "";
let main_display_text = "";
let top_display_text = "";
const main_display = document.getElementsByClassName('screen_now')[0];
const top_display = document.getElementsByClassName('screen_prev')[0];
const numberButtons = document.querySelectorAll(`button.number`);
numberButtons.forEach(numberButton => numberButton.addEventListener('click',addNumToDisplay));
const operatorButtons = document.querySelectorAll(`button.operator`);
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click',operatorPresed));
const equalls = document.getElementById("btn_=");
equalls.addEventListener('click',equalls_fun);

function equalls_fun(e){
    top_display_text=main_display_text;
    top_display.textContent=top_display_text;
    main_display_text = operate(number1,number2,operator);
    main_display.textContent = main_display_text;
}

function addNumToDisplay(){
    main_display_text += this.textContent;
    main_display.textContent = main_display_text;
}
function operatorPresed(e){
    console.log(e);
    number1=main_display_text;
    operator = this.textContent;
    main_display_text += operator ;
    main_display.textContent = main_display_text;
}

function add(a,b){
    return parseFloat(a)+parseFloat(b);
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b==0){return null}
    return a/b;
}
function operate(n1,n2,o){
    switch(o){
        case "+":
            return add(n1,n2);
            break;
        case "-":
            return subtract(n1,n2);
            break;
        case "*":
            return multiply(n1,n2);
            break;
        case "/":
            if(n2 == 0) return "cant divide by zero";
            return divide(n1,n2);
            break;
        default:
            return null;
    }
}