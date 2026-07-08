# Proyecto de Log In

**Materia:** Programacion Web
**Docente:** Martinez Nieto Adelina
**Fecha:** 7 de Julio 2026

### Integrantes del equipo
* **Integrantes del Equipo:**
  * Castellanos Rios Carlos Eduardo
  * Esperanza Chavez Edwin Alexis

### Descripción breve

Este proyecto implementa un sistema de inicio de sesión (**Log In**) construido con HTML, CSS y JavaScript puro, con validación de formulario en tiempo real y alertas visuales mediante SweetAlert2. Al autenticarse correctamente, el usuario es redirigido al sistema principal (`index.html`), donde su nombre queda disponible para el resto de la aplicación (por ejemplo, en el navbar).

Esta parte del README documenta específicamente el módulo de **Log In**, que fue la parte desarrollada por mi cuenta dentro del equipo.

---

## Documentación técnica del módulo de Login

### Framework / tecnologías utilizadas

- **CSS:** No se utilizó un framework CSS (Bootstrap, Tailwind, etc.); el formulario está estilizado con **CSS puro** (`style.css`), con un tema oscuro (fondo `#121212`, tarjeta `#1e1e1e`) y detalles en azul (`#2d79f3`).
- **JavaScript:** Vanilla JS (sin librerías de frontend como React o Vue).
- **Alertas:** [SweetAlert2](https://sweetalert2.github.io/) (cargado vía CDN) para mostrar mensajes de error y éxito con estilo personalizado (fondo oscuro, texto blanco).

### Archivos del módulo

```
login.html      → Estructura del formulario de login
css/style.css   → Estilos del formulario (tema oscuro)
js/utileria.js  → Funciones de validación reutilizables
js/login.js     → Lógica del formulario: validación + autenticación
```

### Flujo del login hacia el sistema

1. El usuario llena los campos de **correo** y **contraseña** en `login.html`.
2. Al enviar el formulario, `login.js` intercepta el evento (`preventDefault`) para evitar el envío tradicional.
3. Se valida el **formato del correo** con `validarCorreo()`.
4. Se valida el **formato de la contraseña** con `validarPassword()`.
5. Si ambos formatos son válidos, se comparan los valores contra las credenciales de prueba definidas en `login.js`.
6. Si las credenciales coinciden:
   - Se guarda el nombre del usuario en `localStorage` bajo la clave `usuarioActivo`.
   - Se muestra una alerta de éxito con SweetAlert2.
   - Se redirige automáticamente a `index.html`.
7. Si el correo/contraseña no cumplen el formato o no coinciden, se muestra una alerta de error correspondiente y el usuario permanece en la pantalla de login.

### Paso del nombre de usuario del login al navbar

El nombre de usuario se comparte entre páginas usando **`localStorage`**, ya que no hay backend ni sesión de servidor:

```javascript
localStorage.setItem('usuarioActivo', NOMBRE_MOSTRAR);
```

### Métodos principales

| Método | Archivo | Descripción |
|---|---|---|
| `validarCorreo(correo)` | `utileria.js` | Valida el formato del correo con expresión regular. |
| `validarPassword(password)` | `utileria.js` | Valida que la contraseña tenga entre 8 y 15 caracteres, con mayúscula, minúscula, número y carácter especial. |
| `formulario.addEventListener('submit', ...)` | `login.js` | Controla el envío del formulario, ejecuta las validaciones y decide si autenticar o mostrar error. |

---

## Proceso de creación paso a paso

> 📸 Agrega tus capturas de pantalla en cada paso correspondiente.

### 1. Estructura del formulario (HTML)

Se creó la estructura base del formulario en `login.html`: título, campo de correo, campo de contraseña (con íconos SVG) y botón de envío, además de un checkbox de "Remember me".

![Captura: estructura del formulario](https://i.postimg.cc/FzTR9yrH/Captura-de-pantalla-2026-07-07-183057.png)

### 2. Estilos del formulario (CSS)

Se diseñó una tarjeta centrada con tema oscuro, bordes redondeados, sombra suave y efecto de foco en azul al seleccionar los inputs.

![Captura: formulario estilizado](https://i.postimg.cc/4d5456h1/Captura-de-pantalla-2026-07-07-184213.png)

### 3. Validaciones (utileria.js)

Se reutilizaron dos funciones de un proyecto anterior con expresiones regulares: una para validar el formato de correo y otra para validar la seguridad de la contraseña y lanzar alertas de validacion incorrecta.

![Captura: Alerta de correo](https://i.postimg.cc/Y007zJHn/Captura-de-pantalla-2026-07-07-184453.png)
![Captura: Alerta de password](https://i.postimg.cc/L5wcB5vX/Captura-de-pantalla-2026-07-07-184617.png)


### 4. Conexión con el sistema principal

Al autenticarse correctamente, se guarda el nombre de usuario en `localStorage` y se redirige a `index.html`, donde se integró el **sidebar**, el **navbar** (mostrando el nombre y número de control del usuario) y el **modal**.

![Captura: sidebar y navbar con usuario](ruta/a/tu/imagen6.png)
![Captura: modal del sistema](ruta/a/tu/imagen7.png)


---

## Credenciales de prueba

> ⚠️ Solo para Demostracion

- **Correo:** `usuario@correo.com`
- **Contraseña:** `Admin.123`


## Sitio web Github Pages
https://cecdev-x.github.io/login-ito/login.html
