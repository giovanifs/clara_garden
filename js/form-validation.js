//ACCIONES

/*let myForm = document.getElementById("formRegister");

myForm.addEventListener("submit", formValidation);

function formValidation(e) {
    e.preventDefault();
    swal("Genial!", "Te hemos registrado", "success");
}*/



//ERROR CORREGIDO
function myForm(s) {
    let firstName = document.getElementById("first_name").value;
    swal(`Genial! Te hemos registrado ${firstName}`);
}
