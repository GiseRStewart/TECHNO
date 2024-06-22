function guardar() {
    let nombre_ingresado = document.getElementById("modelo").value //input
    let precio_ingresado = document.getElementById("precio").value 
    let stock_ingresado = document.getElementById("cantidad").value 
    let imagen_ingresada = document.getElementById("imagen").value 

    console.log(modelo_ingresado,precio_ingresado,cantidad_ingresado,imagen_ingresada);
    // Se arma el objeto de js 
    let datos = {
        modelo: modelo_ingresado,
        precio:precio_ingresado,
        cantidad:cantidad_ingresado,
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
            window.location.href = "/Frontend/static/EditarRegistro.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}