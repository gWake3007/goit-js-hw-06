// No working

// const inputText = document.querySelector("input#name-input");
// const spanText = document.querySelector("span#name-output");

// inputText.addEventListener("text", (event) => {
//     event.preventDefault();
//     const {
//         element: {spanText}
//     } = event.currentTarget;
//     console.log(`${spanText.textContent}`);
// });

const inputText = document.getElementById("name-input");
const spanText = document.getElementById("name-output");
let anonymous = "Anonymous";

spanText.textContent = anonymous;

inputText.addEventListener("input", onInput);

function onInput(event) {
    spanText.textContent = event.target.value || anonymous;
}