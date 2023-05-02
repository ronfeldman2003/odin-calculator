let number1 = 0;
let number2 = 0;
let operator = "";



function add(a,b){
    return a+b;
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