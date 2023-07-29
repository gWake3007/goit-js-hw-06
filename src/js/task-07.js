const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// input.setAttribute(text.style.fontSize, 90);

input.addEventListener("input", skroll);
function skroll(e) {
    text.style.fontSize = `${e.target.value}px`;
}