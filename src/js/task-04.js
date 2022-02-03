const valueEl = document.querySelector('#value');
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const decrement = (event) => {
    event.preventDefault();
    counterValue = counterValue - 1;
    valueEl.textContent = counterValue;
    
}
decrementEl.addEventListener('click', decrement);
const increment = (event) => {
    event.preventDefault();
    counterValue = counterValue + 1;   
    valueEl.textContent = counterValue;
}
incrementEl.addEventListener('click', increment);

