let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increase() {
    ++count
    countEl.textContent = count
};

function decrease() {
    --count
    countEl.textContent = count
};

function save() {
    let countStr = count + " | ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
};

function reset() {
    saveEl.textContent = "";
};