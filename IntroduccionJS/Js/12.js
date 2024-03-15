// "use strict"; // Correr JS en modo
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


Object.seal(producto);

producto.imagen = 'imagen.jpg';  

console.log(Object.isSealed(producto));


console.log(producto);