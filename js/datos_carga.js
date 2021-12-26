//CLASE PRODUCTO
class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponibilidad = true;
    }

    sumarIva() {
        return this.precio * 1.21;
    }

    vender() {
        this.disponible = false;
    }

    precioSugerido() {
        return this.precio * 1.21 * 1.25;
    }

}

var arrayProductos = [];

do {
    var comprobacion = prompt("Ingresá el nombre de producto. Escribí fin para terminar de agregar");

    if (comprobacion === "fin" || comprobacion === "Fin" || comprobacion === "FIN") {
        break;
    } else {
        nombreP = comprobacion;
        var precioP = prompt("Ingresá el precio del producto");
        var detalleP = prompt("Ingresá el detalle del producto");
        var cantidadP = prompt("Ingresá la cantidad comprada del producto");
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
}
while (comprobacion != "fin" || comprobacion != "Fin" || comprobacion != "FIN")

console.log(arrayProductos);

for (let producto of arrayProductos) {

    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<h3>Nombre: ${producto.nombre}</h3>
                            <p>Precio: $ ${producto.precio}</p>
                            <p>Cantidad: ${producto.cantidad}</p>
                            <p>Detalle: ${producto.detalle}</p>`;

    document.body.appendChild(contenedor);

}
