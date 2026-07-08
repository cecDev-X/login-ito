function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    return numero.toString().length <= maxLongitud;
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

function validarTarjetaLuhn(numeroTarjeta) {
   
    const numStr = numeroTarjeta.toString().replace(/\D/g, '');
    if (numStr.length === 0) return false;

    let suma = 0;
    let esPar = false;
    for (let i = numStr.length - 1; i >= 0; i--) {
        let digito = parseInt(numStr.charAt(i), 10);

        if (esPar) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9; 
            }
        }

        suma += digito;
        esPar = !esPar;
    }

    return (suma % 10 === 0);
}

function formatearTarjeta(numeroTarjeta) {
    const numStr = numeroTarjeta.toString().replace(/\D/g, '');
    
    if (numStr.match(/^3[47]/)) {
        return numStr.replace(/(\d{4})(\d{6})?(\d{5})?/, function(match, p1, p2, p3) {
            let res = p1;
            if (p2) res += ' ' + p2;
            if (p3) res += ' ' + p3;
            return res;
        }).trim();
    }
    
    return numStr.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
}