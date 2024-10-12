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

resultSpace = document.querySelector(".result");

let btn = document.querySelectorAll(".btn");



btn.forEach(button => {
    button.addEventListener("click", () => {
        console.log(parseInt(button.textContent));
    })
})




/*
for(let i = 0; i < test.length-1; i++){
    console.log(test[i].textContent);
    console.log(parseInt(test[i].textContent) + parseInt(test[i].textContent));
}
*/