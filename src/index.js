let countEl = document.getElementById("count-el");

let count = 0;

function increase() {
    ++count
    countEl.innerText = count
};

function decrease() {
    --count
    countEl.innerText = count
};

function save() {
    console.log(count);
};