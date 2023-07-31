// const input = document.querySelector("#font-size-control");
// const text = document.querySelector("#text");

// // input.setAttribute(text.style.fontSize, 90);

// input.addEventListener("input", skroll);
// function skroll(e) {
//     text.style.fontSize = `${e.target.value}px`;
// }


const inputField = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);
inputField.addEventListener(`input`, () => {
    const fontSize = inputField.value + `px`;
    text.style.fontSize = fontSize;
})


// const inputField = document.querySelector(`#font-size-control`);
// const text = document.querySelector(`#text`);

// input.addEventListener("input", skroll);

// function skroll(event) {
//     const fontSizeValue = event.target.value;
//     text.style.fontSize = Number`${fontSizeValue} + px`;
// };