// script for buttons
const num = document.querySelector('.num');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
let valueNumber = 0;

minus.addEventListener('click', decrement);
plus.addEventListener('click', increment);

function update () {
    num.textContent = valueNumber;
};

function increment() {
    valueNumber++;
    update();


}

function decrement () {
    valueNumber--;
    update();
}
