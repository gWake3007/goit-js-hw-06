// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const {
//         elements: { email, password }
//     } = event.currentTarget;

//     if (email.value === "" || password.value === "") {
//         return alert('Всі поля повинні бути заповнені!');
//     }
//     else{
// console.log(`Email: ${email.value}, Password: ${password.value}`);
           
//     }
//     event.currentTarget.reset(); 
// }


const formElement = document.querySelector('.login-form');
formElement.addEventListener('submit', onFormSubmit);

// console.log(formElement);

function onFormSubmit(event) {
    event.preventDefault()

    const { email, password } = event.currentTarget.elements
    console.log(email.value)
    console.log(password.value)


    if (email.value === "" || password.value === "") {
        return alert(`Не всі поля заповненні!`);
    };
    
    const data = {
        email: email.value,
        password: password.value,
    };
    console.log(data);
    event.currentTarget.reset();
};