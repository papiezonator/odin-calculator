//display tylko pokazuje, rzeczywista wartosc jest trzymana jako array, operator sluzy do oddzielenia, jesli operator jest wiecej niz 1 to wykonuje 
//funkcje zadeklarowan przez 1 op

resultSpace = document.querySelector(".result");

let btn = document.querySelectorAll(".btn");

let operatorBtn = document.querySelectorAll(".operator");

let equals = document.querySelector(".equals");

let firstNumber
let secondNumber
let operatorValue

let displayValue


/*function add(a, b){

        let sum = parseInt(a)+parseInt(b);
    console.log(sum);
    
}*/

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
        //resultSpace.innerText += button.textContent;

        displayValue = resultSpace.innerText;
        if(operatorValue == null){
            firstNumber = resultSpace.innerText += button.textContent
        } else if (operatorValue != null){
            
            secondNumber = resultSpace.innerText += button.textContent
            
        }
    });
});

operatorBtn.forEach(button => {
    button.addEventListener("click", () => {
        operatorValue = button.innerText;

        resultSpace.innerText = "";
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




/*
for(let i = 0; i < test.length-1; i++){
    console.log(test[i].textContent);
    console.log(parseInt(test[i].textContent) + parseInt(test[i].textContent));
}
*/