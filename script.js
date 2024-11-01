

let resultSpace = document.querySelector(".result");

let btn = document.querySelectorAll(".btn");

let operatorBtn = document.querySelectorAll(".operator");

let equals = document.querySelector(".equals");

let firstNumber
let secondNumber
let operatorValue

let displayValue



function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(first, operator, second){
    switch(operator){
        case '+':
            
            let sum = parseInt(first) + parseInt(second);
            firstNumber = sum;
            resultSpace.innerText = sum;
            console.log(sum);
            return;
        case '-':
            let subs = parseInt(first) - parseInt(second);
            firstNumber = subs;
            resultSpace.innerText = subs;
            console.log(subs);
            return;
        case 'x':
            let product = parseInt(first) * parseInt(second);
            firstNumber = product;
            resultSpace.innerText = product;
            console.log(product);
            return;
        case '/':
            let quotient = parseInt(first) / parseInt(second);
            firstNumber = quotient;
            resultSpace.innerText = quotient;
            console.log(quotient);   
            return;
    }
    

}



btn.forEach(button => {
    button.addEventListener("click", () => {
        if(resultSpace.innerText == 0){
            resultSpace.innerText = "";
        }
        

        
        if(operatorValue == null){
            firstNumber = resultSpace.innerText += button.textContent
        } else if (operatorValue != null){
            resultSpace.innerText = "";
            secondNumber = resultSpace.innerText += button.textContent
            
        }
        displayValue = resultSpace.innerText;
    });
});

operatorBtn.forEach(button => {
    button.addEventListener("click", () => {
        operatorValue = button.innerText;

        if(operatorValue == "AC"){
            firstNumber = "";
            secondNumber = "";
            
            operatorValue = null;
            resultSpace.innerText = 0;
        }


        //resultSpace.innerText = "";
        
        
       

    });
});

equals.addEventListener("click", () => {
    if(operatorValue == "+"){
        
        operate(firstNumber, '+' ,secondNumber);    
    }
    if(operatorValue == "-"){
        operate(firstNumber, '-' ,secondNumber);
    }
    if(operatorValue == "/"){
        operate(firstNumber, '/' ,secondNumber);
    }
    if(operatorValue == "x"){
        operate(firstNumber, 'x' ,secondNumber);
    }
    
    
})




