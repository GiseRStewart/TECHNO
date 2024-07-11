document.addEventListener("DOMContentLoaded", function() {
    const userRole = localStorage.getItem('userRole');
    console.log(userRole)
    
    if (!userRole) {
        // Si no hay información de usuario, redirige a la página de inicio de sesión
        window.location.href = "/templates/Login.html";
    } else if (userRole !== 'admin' && window.location.pathname.includes("panelusuarioadmin")) {
        // Si el usuario no es admin y está tratando de acceder a la página de admin, redirige
        window.location.href = "/templates/panelUsuarioUser.html";
    } else if (userRole !== 'admin' && window.location.pathname.includes("tabla_usuario.html")){
        window.location.href = "/templates/panelUsuarioUser.html";
    } else if (userRole !== 'admin' && window.location.pathname.includes('editarusuario')){
        window.location.href = "/templates/panelUsuarioUser.html";
    }

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