

let resultSpace = document.querySelector(".result");

let btn = document.querySelectorAll(".btn");

let operatorBtn = document.querySelectorAll(".operator");

let equals = document.querySelector(".equals");

let firstNumber
let secondNumber
let operatorValue
let displayValue
let arr = [];
let equal


function sum(num1,num2){
    return parseFloat(num1) + parseFloat(num2);
}

function substract(num1,num2){
    return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1,num2){
    return parseFloat(num1) * parseFloat(num2);
}

function divide(num1,num2){
    return parseFloat(num1) * parseFloat(num2);
}

function operate(first, operator, second){
    switch(operator){
        case '+':
            firstNumber = sum(first, second);
            resultSpace.innerText = firstNumber;
            //console.log(`firstNumber: ${firstNumber}`);
            secondNumber = undefined;
            //console.log("before: ", arr);
            arr = [];
            arr.push(firstNumber);
            arr.push(operatorValue);
            //console.log("after: ", arr);
            return;
        case '-':
            firstNumber = substract(first, second);
            resultSpace.innerText = firstNumber;
            //console.log(`firstNumber: ${firstNumber}`);
            secondNumber = undefined;
            arr = [];
            arr.push(firstNumber);
            arr.push(operatorValue);
            //console.log("after: ", arr);
            
            return;
        case 'x':
            firstNumber = parseInt(first) * parseInt(second);
            resultSpace.innerText = firstNumber;
            //console.log(`firstNumber: ${firstNumber}`);
            secondNumber = undefined;
            arr = [];
            arr.push(firstNumber);
            arr.push(operatorValue);
            
            return;
        case '/':
            firstNumber = parseInt(first) / parseInt(second);
            resultSpace.innerText = firstNumber;
            //console.log(`firstNumber: ${firstNumber}`);
            secondNumber = undefined;
            arr = [];
            arr.push(firstNumber);
            arr.push(operatorValue);
            
            return; 
    }
}

btn.forEach(button => {
    button.addEventListener("click", () => {
        if(resultSpace.innerText == 0){
            resultSpace.innerText = "";
        } 
        
        if(operatorValue == undefined){
            firstNumber = resultSpace.innerText += button.textContent
        } else if (operatorValue != undefined){
            if(secondNumber == undefined){
                resultSpace.innerText = "";
            }
            secondNumber = resultSpace.innerText += button.textContent
            
        }
        
    });
});

operatorBtn.forEach(button => {
    button.addEventListener("click", () => {
        operatorValue = button.innerText;
        if(arr.includes(firstNumber) != true) {
            arr.push(firstNumber);
            arr.push(operatorValue);
        }
        if(arr.includes(secondNumber) != true && secondNumber != undefined){
            arr.push(secondNumber);
        }
        if(operatorValue == "AC"){
            firstNumber = undefined;
            secondNumber = undefined;
            operatorValue = undefined;
            resultSpace.innerText = 0;
            arr = [];
        } else if (operatorValue != undefined && secondNumber != undefined){
            //console.log(`firstNumber: ${firstNumber}, operatorValue: ${operatorValue}, secondNumber: ${secondNumber}`)
            operate(firstNumber, arr[1], secondNumber);
        }
        if(equal == true){
            arr.splice(arr[1], 1)
            arr.push(operatorValue); 
        }
        
        
    });
});

equals.addEventListener("click", () => {
    if (secondNumber != undefined){
    equal = true;
    operate(firstNumber, arr[1], secondNumber);
    
}
    
})




