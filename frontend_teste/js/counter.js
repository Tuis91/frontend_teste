const counterNow = document.querySelector("#counter-now");
const counterLeftBtn = document.querySelector("#counter-left-btn");
const counterRightBtn = document.querySelector("#counter-right-btn");
let counter = 0;

counterLeftBtn.addEventListener('click', hadleLeftBtn);
counterRightBtn.addEventListener('click', hadleRightBtn);
counterNow.addEventListener('change', hadleCounterNow);

function hadleLeftBtn() {
    if (counter == 0) return        
        counter = counter - 1;
        counterNow.value = counter;
}

function hadleRightBtn() {        
        counter = counter + 1;
        counterNow.value = counter;
}

function hadleCounterNow() {

    if(isNaN(counterNow.value)) {
        counter = 0;
        counterNow.value = 0;
    } else {
        counter = parseInt(counterNow.value);
    }
}