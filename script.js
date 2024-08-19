let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", submit);

function submit(event) {
    let elementName = document.getElementById("name").value;
    let elementAge = document.getElementById("age").value;
    let elementEmail = document.getElementById("email").value;

    // Validar o email
    if (!validateEmail(elementEmail)) {
        alert("Please, insert a valid email.");
        event.preventDefault(); // Evita que o formulário seja enviado
        return; // Sai da função se o e-mail for inválido
    }

    console.log(`Name: ${elementName}\nAge: ${elementAge}\nEmail: ${elementEmail}`);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9]+(\w[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+)*([-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+(\.[a-zA-Z]{2,})*$/;
    return emailRegex.test(email);
}