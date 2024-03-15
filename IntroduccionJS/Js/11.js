const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


//Forma anterior
// const precioProducto = producto.precio;

// console.log(precioProducto);




// Destructuring 
const {precio} = producto;
const {nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);