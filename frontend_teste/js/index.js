console.log("hello Charbel");

const buyStickerForm = document.querySelector("#buyStickerForm");
const validateCounterNow = document.querySelector("#counter-now");
const validateReactCheckbox = document.querySelector("#reactCheckbox");
const validateVueCheckbox = document.querySelector("#vueCheckbox");
const validateAngularCheckbox = document.querySelector("#angularCheckbox");
const errorbox = document.querySelector("#error")
let error = '';


buyStickerForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    errorbox.innerHTML = '';
    if(validateReactCheckbox.checked == false && validateVueCheckbox.checked == false && validateAngularCheckbox.checked == false) {
        error = 'Você precisa escolher quais stickers deseja comprar! :)'
        errorbox.innerHTML = error;
        return
    }
    if(validateCounterNow.value == 0){
        error = 'Ops! Faltou escolher a quantidade de stickers.'
        errorbox.innerHTML = error;
        return
    }
    buyStickerForm.submit();
}