document.addEventListener('DOMContentLoaded', () => {
    
    const usuarioActivo = localStorage.getItem('usuarioActivo');
    const elementoBienvenida = document.getElementById('mensajeBienvenida');
    
    const nombreUsuarioNav = document.getElementById('nombreUsuarioNav'); 

    if (usuarioActivo) {
        elementoBienvenida.textContent = `Hola, ${usuarioActivo}`;
        
        // Si el elemento del Navbar existe (del HTML que te pasé antes), lo actualiza
        if(nombreUsuarioNav) {
            nombreUsuarioNav.textContent = usuarioActivo;
        }
    } else {
        // OJO: Si estás probando y te redirige a cada rato, comenta esta línea temporalmente
        window.location.href = 'login.html';
    }

    document.getElementById('btnCerrarSesion').addEventListener('click', () => {
        localStorage.removeItem('usuarioActivo');
        window.location.href = 'login.html';
    });


    // ==========================================
    // 2. LO QUE TE FALTABA (Lógica del Formulario)
    // ==========================================
    const formCaptura = document.getElementById('formCaptura');
    
    // Si el formulario existe en la pantalla actual, le aplicamos la lógica
    if (formCaptura) {
        // Preparamos el Modal
        const modalEdad = new bootstrap.Modal(document.getElementById('modalEdad'));

        formCaptura.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue de golpe

            // Capturamos los datos
            const nombre = document.getElementById('nombreAlumno').value;
            const correo = document.getElementById('correoAlumno').value;
            const password = document.getElementById('passwordAlumno').value;
            const numControl = document.getElementById('numControl').value;
            const fechaNacimiento = document.getElementById('fechaNacimiento').value;

            // Validaciones llamando a tu librería utileria.js
            if (!validarCorreo(correo)) {
                alert("Error: El correo ingresado no es válido.");
                return;
            }

            if (!validarPassword(password)) {
                alert("Error: La contraseña no cumple los requisitos.");
                return;
            }

            if (numControl.length !== 6 || isNaN(numControl)) {
                alert("Error: El número de control debe tener 6 números exactos.");
                return;
            }

            // Cálculo matemático de la edad
            const fechaNac = new Date(fechaNacimiento);
            const hoy = new Date();
            let edad = hoy.getFullYear() - fechaNac.getFullYear();
            const mes = hoy.getMonth() - fechaNac.getMonth();
            
            if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
                edad--;
            }

            // Mandamos los datos al Modal
            const tituloModal = document.getElementById('resultadoEdad');
            const detalleModal = document.getElementById('detalleAlumno');

            if (edad >= 18) {
                tituloModal.textContent = "El alumno es MAYOR de edad";
                tituloModal.className = "text-success fw-bold"; 
            } else {
                tituloModal.textContent = "El alumno es MENOR de edad";
                tituloModal.className = "text-danger fw-bold"; 
            }

            detalleModal.textContent = `Nombre: ${nombre} | Control: ${numControl} | Edad: ${edad} años.`;

            // Mostramos el modal y limpiamos formulario
            modalEdad.show();
            formCaptura.reset();
        });
    }
});