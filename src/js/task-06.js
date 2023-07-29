const input = document.querySelector('#validation-input');

console.dir(input);
const lengthInput = Number(input.getAttribute('data-length'));

input.addEventListener('blur', getBorderColor);

function getBorderColor(event) {
    console.log((event.currentTarget.value))
    if (event.currentTarget.value.length === lengthInput) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
};


// const checkInput = document.querySelector("validation-input");
// const lengthInput = Number(checkInput.dataset.length);

// console.log(lengthInput);

// checkInput.addEventListener('blur', validateInput);

// function validateInput(eve) {
//     console.log(eve.currentTarget.value.length);

//     if (Number(eve.currentTarget.value.length) === Number(lengthInput)){
//         console.log(Number(eve.currentTarget.value.length) === lengthInput);
        
//         checkInput.classList.remove("invalid");
//         checkInput.classList.add("valid");
//         // checkInput.classList.remove("#validation-input");
//         // checkInput.style.borderColor = "green";
//         // return;
//     }
//     else {
//         checkInput.classList.remove("valid");
//         checkInput.classList.add("invalid");
//         // checkInput.classList.remove("#validation-input");
//         // checkInput.style.borderColor = "red";
//     }
// }