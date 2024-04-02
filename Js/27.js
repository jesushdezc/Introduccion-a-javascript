// POO

/* Object literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object constructor
function Producto(nombre, precio, disponible, color) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
    this.color = color;

}

// Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo de 49"', 800, true, "rojo");
const producto3 = new Producto('Laptop', 300, false, "gris" );



function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3);



