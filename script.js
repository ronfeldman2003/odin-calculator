let number1 = 0;
let number2 = 0;
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
const clear = document.getElementById("btn_clear");
clear.addEventListener('click',clear_fun);
const dot = document.getElementById("btn_.");
dot.addEventListener('click',dot_fun);


function dot_fun(){
    if(operator == ""){
    if(main_display_text.indexOf('.')== -1){
    main_display_text += this.textContent;
    updateDisplay();}}
    else if(main_display_text.slice(main_display_text.indexOf(operator)+1).indexOf('.')== -1){
        main_display_text += this.textContent;
        updateDisplay();
    }
}
function clear_fun(){ //reset calculator
    number1 = 0 
    number2 = 0
    operator = ""
    main_display_text = "0"
    top_display_text = ""
    updateDisplay();
    main_display_text = ""
}
function updateDisplay(){ //update the display in the html
    main_display.textContent = main_display_text
    top_display.textContent=top_display_text;
}
function equalls_fun(){ //display calculations
    top_display_text=main_display_text; 
    number2 = main_display_text.slice(main_display_text.indexOf(operator)+1);
    console.log(`display text:${main_display_text} num1:${number1} num2:${number2} operator:${operator}`);
    main_display_text = operate(number1,number2,operator);
    main_display_text =Math.round((main_display_text + Number.EPSILON) * 100) / 100
    updateDisplay();
    number1 = 0 
    number2 = 0
    operator = ""
}

function addNumToDisplay(){// add pressed numbers to display
    main_display_text += this.textContent;
    updateDisplay();
}
function operatorPresed(e){ // do the calculations
    if(operator != ""){
        equalls_fun();
    }
    console.log(e);
    number1=main_display_text;
    operator = this.textContent;
    main_display_text += operator ;
    updateDisplay();
    
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
            if(n2 == 0) return "math eror";
            return divide(n1,n2);
            break;
        default:
            return null;
    }
}