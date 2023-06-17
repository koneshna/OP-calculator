let operator = '';
let topy = '';
let bottomy = '';


document.addEventListener("DOMContentLoaded", function(){
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let deci = document.querySelector(".deci");

let operators = document.querySelectorAll(".operator")
let numbers = document.querySelectorAll(".number");

let previous = document.querySelector(".top");
let current = document.querySelector(".bottom");

numbers.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent);
    current.textContent=bottomy;
        }))
operators.forEach((op) => op.addEventListener("click", function(e){
    handleOperator(e.target.textContent);
    previous.textContent = bottomy + ' ' +operator;
    current.textContent = bottomy
}))

})

function handleNumber(num){
    if(bottomy.length<=5){
        bottomy += num;
    }
    
};

function handleOperator(op){
    operator = op;
    previous = topy;
    bottomy = '';
}