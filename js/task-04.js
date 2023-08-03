let counterValue = 0;
const value = document.querySelector("#value");
const decrementValue = document.querySelector(`[data-action="decrement"]`);
const incrementValue = document.querySelector(`[data-action="increment"]`);

function incr (evt){
    counterValue += 1;
    value.textContent = counterValue;
}

function decr (evt){
    counterValue -= 1;
    value.textContent = counterValue;
}

incrementValue.addEventListener("click", incr);
decrementValue.addEventListener("click", decr);