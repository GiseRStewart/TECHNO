function guardar() {
    let modelo_ingresado = document.getElementById("modelo").value //input
    let precio_ingresado = document.getElementById("precio").value 
    let cantidad_ingresado = document.getElementById("cantidad").value  
    let descripcion_ingresada = document.getElementById('descripcion').value
    let imagen_ingresada = document.getElementById("imagen").value 


    if (!modelo_ingresado || !precio_ingresado || !cantidad_ingresado || !descripcion_ingresada || !imagen_ingresada) {
        alert("Por favor complete todos los campos.");
        return;
    }

    // Se arma el objeto de js 
    let datos = {
        modelo: modelo_ingresado,
        precio:precio_ingresado,
        cantidad:cantidad_ingresado,
        descripcion:descripcion_ingresada,
        imagen:imagen_ingresada
    }
    console.log(datos);
    
    let url = "http://localhost:5000/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "/Frontend/tabla_productos.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}