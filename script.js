function add(a, b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(first, op, second){
    if(op == '+'){
        return add(first, second);
    }

}

resultSpace = document.querySelector(".result");

let btn = document.querySelectorAll(".btn");

let operatorBtn = document.querySelectorAll(".operator");

let equals = document.querySelector(".equals");

let firstNumber
let secondNumber
let operatorValue
let displayValue

btn.forEach(button => {
    button.addEventListener("click", () => {
        if(resultSpace.innerText == 0){
            resultSpace.innerText = "";
        }
        console.log(button.textContent);
        //let test = document.createTextNode(button.textContent);
        
        resultSpace.innerText = resultSpace.innerText + button.textContent;
        displayValue = resultSpace.innerText;
        //resultSpace.appendChild(test);
    });
});

operatorBtn.forEach(button => {
    button.addEventListener("click", () => {
        operatorValue = button.innerText;
    });
});






/*
for(let i = 0; i < test.length-1; i++){
    console.log(test[i].textContent);
    console.log(parseInt(test[i].textContent) + parseInt(test[i].textContent));
}
*/