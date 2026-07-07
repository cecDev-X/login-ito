// Seleccionan los campos de entrada
const formulario = document.querySelector('.form');
const emailInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

// credenciales quemadas 
const USUARIO_CORRECTO = "admin@gmail.com";
const CONTRASENA_CORRECTA = "123456789";
const NOMBRE_MOSTRAR = "Usuario Admin";

// Evento de envío (submit) del formulario
formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (email === USUARIO_CORRECTO && password === CONTRASENA_CORRECTA) {

        localStorage.setItem('usuarioActivo', NOMBRE_MOSTRAR);

        window.location.href = 'index.html';

    } else {
        alert("El correo electrónico o la contraseña son incorrectos.");
    }
});