function guardarUsuario() {
    let nombre_ingresado = document.getElementById('nombre').value
    let apellido_ingresado = document.getElementById('apellido').value
    let usuario_ingresado = document.getElementById('usuario').value
    let email_ingresado = document.getElementById('email').value
    let contraseña_ingresada = document.getElementById('contraseña').value
    let registroError = document.getElementById('registroError');  // Elemento para mostrar el error



    
if (!nombre_ingresado || !apellido_ingresado || !usuario_ingresado || !email_ingresado || !contraseña_ingresada){
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
    email : email_ingresado,
    contraseña : contraseña_ingresada
}

console.log(usuario)

let url = "https://technopower.pythonanywhere.com/registroUsuario";
var options = {
    body: JSON.stringify(usuario),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
};

fetch(url, options)
.then(response => response.json())
.then(data => {
    if (data.status === "success") {
        alert("Usuario registrado exitosamente.");
        window.location.href = "/templates/Login.html";
    } else {
        registroError.textContent = data.message;
        registroError.style.display = 'block';
    }
})
.catch(err => {
    alert("Error al registrar usuario");
    console.error(err);
});
}