document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos de entrada
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Validación básica
    if (!email) {
        alert('Por favor, introduce tu correo electrónico.');
        return;
    }

    if (!password) {
        alert('Por favor, introduce tu contraseña.');
        return;
    }

    // Simulando inicio de sesión exitoso (aquí deberías realizar la autenticación real)
    var loggedIn = true; // Cambia a false si la autenticación falla

    if (loggedIn) {
        // Redirigir a otra página
        window.location.href = 'index.html'; // Cambia 'dashboard.html' por la URL de la página a la que quieres redirigir
    } else {
        alert('Inicio de sesión fallido. Por favor, verifica tus credenciales.');
    }
});

