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
    // Puedes añadir más verificaciones de rol para otras páginas aquí
});

function logout() {
    // Borra todos los datos del localStorage
    localStorage.clear();

    // Redirige al usuario a la página de inicio de sesión
    window.location.href = "/templates/login.html";
}