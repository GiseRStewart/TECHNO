let cadena = location.search;

let datos = new URLSearchParams(cadena);

let resultado = {};

for (const [nombre, valor] of datos){
    resultado[nombre] = valor;
    resultado[apellido] = valor;
    resultado[usuario] = valor;
    resultado[email] = valor;
    resultado[rol] = valor;
    resultado[contraseña] = valor;
}

document.getElementById("id").value = resultado["id"]
document.getElementById("nombre").value = resultado["nombre"]
document.getElementById("apellido").value = resultado["apellido"]
document.getElementById("usuario").value = resultado["usuario"]
document.getElementById("email").value = resultado["email"]
document.getElementById("rol").value = resultado["rol"]
document.getElementById("contraseña").value = resultado["contraseña"]
