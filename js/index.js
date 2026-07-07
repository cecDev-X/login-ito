document.addEventListener('DOMContentLoaded', () => {
    const usuarioActivo = localStorage.getItem('usuarioActivo');
    const elementoBienvenida = document.getElementById('mensajeBienvenida');

    if (usuarioActivo) {
        elementoBienvenida.textContent = `Hola, ${usuarioActivo}`;
    } else {
        window.location.href = 'login.html';
    }

    document.getElementById('btnCerrarSesion').addEventListener('click', () => {
        localStorage.removeItem('usuarioActivo');
        window.location.href = 'login.html';
    });
});