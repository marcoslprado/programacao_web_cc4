let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", submit);

function submit() {
    let elementName = document.getElementById("name").value;
    let elementAge = document.getElementById("age").value;
    let elementEmail = document.getElementById("email").value; // verificar se o email é válido (valid email regex/doc)
    console.log(`Name: ${elementName}\nAge: ${elementAge}\nEmail: ${elementEmail}`);
}