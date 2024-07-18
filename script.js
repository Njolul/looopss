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

    // Si la validación es exitosa, puedes proceder a enviar los datos
    // Aquí puedes agregar tu lógica de envío de datos, por ejemplo, usando AJAX
    alert('Inicio de sesión exitoso');
});
