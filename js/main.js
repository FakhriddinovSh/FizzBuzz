'use strict'
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-control");
let elResult = document.querySelector(".form-result");
let elBtn = document.querySelector(".btn")

let elFizz = document.querySelector(".-fizz")
let elBuzz = document.querySelector(".-buzz")
let elFizzBuzz = document.querySelector(".-fizzbuzz")

let fizzLength = document.querySelector(".fizzLength")
let buzzLength = document.querySelector(".buzzLength")
let fizzBuzzLength = document.querySelector(".fizzBuzzLength")


let fizArr = []
let buzArr = []
let fizbuzArr = []

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    let elInputValue = elInput.value;

    if(elInputValue % 5 == 0 && elInputValue % 3 == 0){
        // elResult.textContent = "FizzBuzz"
        fizbuzArr.push(elInputValue)
        elFizzBuzz.textContent = fizbuzArr
        fizzBuzzLength.textContent = fizbuzArr.length
    }else if (elInputValue % 3 == 0){
        // elResult.textContent = "Fizz"
        fizArr.push(elInputValue)
        elFizz.textContent = fizArr
        fizzLength.textContent = fizArr.length
    }else if (elInputValue % 5 == 0){
        // elResult.textContent = "Buzz"
        buzArr.push(elInputValue)
        elBuzz.textContent = buzArr
        buzzLength.textContent = buzArr.length
    }
    else{
        // elResult.textContent = "This number is not divided"
    }
});