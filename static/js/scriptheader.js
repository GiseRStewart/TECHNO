document.addEventListener("DOMContentLoaded", function() {
    const userRole = localStorage.getItem('userRole');
    console.log(userRole)

    const scriptElement = document.createElement('script');

    if (userRole){
        scriptElement.src = '../static/js/headerlog.js';
    } else {
        scriptElement.src = '../static/js/header.js';
    }

    document.head.appendChild(scriptElement);
});

function logout() {
    // Borra todos los datos del localStorage
    localStorage.clear();

    // Redirige al usuario a la página de inicio de sesión
    window.location.href = "/templates/login.html";
}