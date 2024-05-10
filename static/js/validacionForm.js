function validarDatos(){
    let nombre = document.getElementById("nombre").value.trim()
    let asunto = document.getElementById("asunto").value.trim()
    let mensaje = document.getElementById("mensaje").value.trim()
    let checkbox1 = document.getElementById("ventas").checked;
    let checkbox2 = document.getElementById("rrhh").checked;
    let checkbox3 = document.getElementById("compras").checked;
    let error = document.getElementById("aviso")


    if( nombre === "" || asunto === "" || mensaje === ""){
        error.textContent = "Por favor complete todos los campos."
        error.style.color = "red"
        return false
    }

    if(!/^[a-zA-Z]+$/.test(nombre)){
        error.textContent = "Por favor ingrese un nombre válido."
        error.style.color = "orange"
        return false
    }

    if(!(checkbox1 || checkbox2 || checkbox3 )){
        error.textContent = "Por favor selecciones al menos un area de contacto."
        error.style.color = "orange"
        return false
    }

    alert("Mensaje enviado correctamente!!")
    return  true
}


