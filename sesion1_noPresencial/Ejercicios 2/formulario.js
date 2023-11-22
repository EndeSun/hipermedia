// Validación del formulario


function validar() {
    var user = document.getElementById('user');
    var password = document.getElementById('password');
    var userError = document.getElementById('errorUsuario');
    var passwordError = document.getElementById('errorPassword');

    userError.style.display = user.value === "" ? 'block' : 'none';
    passwordError.style.display = password.value.length < 3 ? 'block' : 'none';

    if (user.value !== "" && password.value.length >= 3) {
        alert("Validación correcta");
    }
}