'use strict'
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-control");
let elResult = document.querySelector(".form-result");
let elBtn = document.querySelector(".btn")

console.log(elForm, elInput, elResult)

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    let elInputValue = elInput.value;

    if(elInputValue % 5 == 0 && elInputValue % 3 == 0){
        elResult.textContent = "FizzBuzz"
    }else if (elInputValue % 3 == 0){
        elResult.textContent = "Fizz"
    }else if (elInputValue % 5 == 0){
        elResult.textContent = "Buzz"
    }
    else{
        elResult.textContent = "Bu son bo'linmaydi"
    }
})

