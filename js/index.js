        document.addEventListener('DOMContentLoaded', () => {
            // 1. Buscamos el ticket que dejó tu compañero en el login
            const usuarioActivo = localStorage.getItem('usuarioActivo');
            const elementoBienvenida = document.getElementById('mensajeBienvenida');

            // 2. Validamos si existe alguien logueado
            if (usuarioActivo) {
                // Si hay alguien, actualizamos el texto del HTML
                elementoBienvenida.textContent = `Hola, ${usuarioActivo}`;
            } else {
                // Si intentan entrar sin loguearse, los rebotamos al login de tu compañero
                window.location.href = 'login.html';
            }

            // 3. Lógica para el botón de cerrar sesión
            document.getElementById('btnCerrarSesion').addEventListener('click', () => {
                // Borramos el registro del navegador
                localStorage.removeItem('usuarioActivo');
                // Redirigimos de vuelta
                window.location.href = 'login.html';
            });
        });