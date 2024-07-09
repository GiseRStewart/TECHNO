function modificarUsuario(){
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let apellido_ingresado = document.getElementById("apellido").value
    let usuario_ingresado = document.getElementById("usuario").value
    let rol_ingresado = document.getElementById("rol").value
    let email_ingresado = document.getElementById("email").value
    let contraseña_ingresada = document.getElementById("contraseña").value

    if (!nombre_ingresado || !apellido_ingresado || !usuario_ingresado || !email_ingresado || !rol_ingresado || !contraseña_ingresada){
        alert("Por favor complete todos los campos");
        return;
    }
        
    function validarContraseña(contraseña) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return regex.test(contraseña);
    }
    
    if (!validarContraseña(contraseña_ingresada)) {
        console.log(validarContraseña(contraseña_ingresada))
        alert("La contraseña debe contener una al menos una mayúscula, una minúscula, un número y 8 caracteres.");
        return;
    }

    let usuario = {
        nombre : nombre_ingresado,
        apellido : apellido_ingresado,
        usuario : usuario_ingresado,
        rol : rol_ingresado,
        email : email_ingresado,
        contraseña : contraseña_ingresada
    }

    let url = "https://technopower.pythonanywhere.com/actualizarUsuario/"+id
    var options = {
        body: JSON.stringify(usuario),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "/templates/tabla_usuario.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}