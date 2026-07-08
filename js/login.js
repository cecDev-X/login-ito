const formulario = document.querySelector('.form');
const emailInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

// Credenciales correctas que sí cumplen con las validaciones de tu utilería
const USUARIO_CORRECTO = "usuario@correo.com";
const CONTRASENA_CORRECTA = "Admin.123"; 
const NOMBRE_MOSTRAR = "Usuario Pro";

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // 1. Validar formato del correo usando utilería[cite: 5]
    if (!validarCorreo(email)) {
        Swal.fire({
            icon: "error",
            title: "Correo inválido",
            text: "Por favor, ingresa un correo electrónico con formato válido.",
            background: "#1e1e1e", // Color de fondo oscuro
            color: "#ffffff",      // Color del texto en blanco
            confirmButtonColor: "#2d79f3"
        });
        return;
    }

    // 2. Validar formato de la contraseña usando utilería[cite: 5]
    if (!validarPassword(password)) {
        Swal.fire({
            icon: "error",
            title: "Contraseña insegura",
            text: "La contraseña debe tener entre 8 y 15 caracteres, incluir mayúsculas, minúsculas, números y un carácter especial.",
            background: "#1e1e1e", // Color de fondo oscuro
            color: "#ffffff",      // Color del texto en blanco
            confirmButtonColor: "#2d79f3"
        });
        return;
    }

    // 3. Verificar si las credenciales coinciden con las quemadas
    if (email === USUARIO_CORRECTO && password === CONTRASENA_CORRECTA) {
        localStorage.setItem('usuarioActivo', NOMBRE_MOSTRAR);

        Swal.fire({
            icon: "success",
            title: "¡Bienvenido!",
            text: "Inicio de sesión exitoso.",
            background: "#1e1e1e", // Color de fondo oscuro
            color: "#ffffff",      // Color del texto en blanco
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = 'index.html';
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Acceso denegado",
            text: "El correo electrónico o la contraseña son incorrectos.",
            background: "#1e1e1e", // Color de fondo oscuro
            color: "#ffffff",      // Color del texto en blanco
            confirmButtonColor: "#2d79f3"
        });
    }
});