const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" && password.value === "") {
        return alert('Всі поля повинні бути заповнені!');
    }
    else{
console.log(`Email: ${email.value}, Password: ${password.value}`);
           
    }
    event.currentTarget.reset(); 
}