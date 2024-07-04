let cadena = location.search; 

let datos = new URLSearchParams(cadena);

let resultado = {};

for (const [modelo, valor] of datos) {
    resultado[modelo] = valor;
    resultado[precio] = valor;
    resultado[cantidad] = valor
    resultado[descripcion] = valor
    resultado[imagen] = valor
}


document.getElementById("id").value = resultado["id"]
document.getElementById("modelo").value = resultado["modelo"]
document.getElementById("precio").value = resultado["precio"]
document.getElementById("cantidad").value = resultado["cantidad"]
document.getElementById("descripcion").value = resultado["descripcion"]
document.getElementById("imagen").value = resultado["imagen"]