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
    previous.textContent = topy + ' ' +operator;
    current.textContent = bottomy;
}))

clear.addEventListener("click", function(){
    topy = '';
    bottomy = '';
    operator = '';
    previous.textContent = bottomy;
    current.textContent = topy;
})

equal.addEventListener("click", function(){
    calculate()
    previous.textContent = '';
    if(topy.length <= 5){current.textContent = topy}
    else{
        current.textContent = topy.slice(0,5) + '...'
    }
    
})

deci.addEventListener("click", function(){
    addDeci()
})
})

function handleNumber(num){
    if(bottomy.length<=5){
        bottomy += num;
    }
    
};

function handleOperator(op){
    operator = op;
    topy = bottomy;
    bottomy = '';
}

function calculate(){
    topy = Number(topy);
    bottomy = Number(bottomy);

    if(operator === "+"){
        topy += bottomy
    }else if (operator === "-"){
        topy -= bottomy;
    }else if (operator === 'x'){
        topy *= bottomy
    }else {
        topy/=bottomy
    }
    topy = roundNumber(topy);
    topy=topy.toString();
    bottomy=bottomy.toString();
    console.log(topy);
}

function roundNumber(num){
return Math.round(num * 1000)/1000;
}

function addDeci(){
if (!bottomy.includes('.')){
    bottomy += '.';
}
}