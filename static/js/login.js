function validarLogin() {
    let usuarioIngresado = document.getElementById('usuario').value;
    let contraseñaIngresada = document.getElementById('contraseña').value;
    let loginError = document.getElementById('loginError');

    fetch("https://technopower.pythonanywhere.com/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            usuario: usuarioIngresado,
            contraseña: contraseñaIngresada
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            // Guarda el rol del usuario en localStorage
            localStorage.setItem('userRole', data.data.rol);

            
            if (data.data.rol === 'admin') {
                window.location.href = "/templates/panelUsuarioAdmin.html";  // Página de admin
            } else {
                window.location.href = "/templates/panelUsuarioUser.html";  // Página de usuario
            }
        } else {
            loginError.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error al verificar usuario:', error);
        alert("Error al verificar usuario. Intente nuevamente.");
    });


}
