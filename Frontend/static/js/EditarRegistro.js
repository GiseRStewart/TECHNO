function modificar() {
    let id = document.getElementById('id').value
    let modelo_ingresado = document.getElementById("modelo").value
    let precio_ingresado = document.getElementById("precio").value 
    let cantidad_ingresado = document.getElementById("cantidad").value 
    let descripcion_ingresada = document.getElementById('descripcion').value
    let imagen_ingresada = document.getElementById("imagen").value 


    let datos = {
        modelo:modelo_ingresado,
        precio:precio_ingresado,
        cantidad:cantidad_ingresado,
        descripcion:descripcion_ingresada,
        imagen:imagen_ingresada
    }
    
    let url = "http://localhost:5000/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "/Frontend/tabla_productos.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}