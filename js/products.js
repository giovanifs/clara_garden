
// FUNCIÓN PARA DAR UN SALUDO
/*function saludoBienvenida() {
    //Ingresamos un mensaje a mostrar
    var nombreUsuario = prompt("¿Cuál es tu nombre?");
    //Detectamos si el usuario ingresó un valor
    if (nombreUsuario != "") {
        alert(`Bienvenido ${nombreUsuario}`);
    }
    //Detectamos si el usuario NO ingresó un valor
    else {
        alert(`No has ingresado un nombre`);
    }
}
saludoBienvenida();*/

//ACCIONES

/*let myForm = document.getElementById("formRegister");

myForm.addEventListener("submit", formValidation);

function formValidation(e) {
    e.preventDefault();
    swal("Genial!", `Bienvenido ${nombre}`, "success");
}


let myForm = document.getElementById("formRegister");

myForm.addEventListener("submit", formValidation);

function formValidation(e) {

    e.preventDefault();

    let formRegister = e.target

    console.log(formRegister.children[1].value);

    //swal("Genial!", `Bienvenido ${nombre}`, "success");

}



/*function show() {
    swal("Genial!", "Bienvenido...!", "success");
}*/

















/*
//ACCESO A INFO DEL OBJETO
const producto1 = { id: 1, producto: "Cactus", precio: 150, color: "verde", tipos: ["peyote", "ferocactus", "gracilis"], disponible: true };

function preguntoDatosExtra() {
    const interesadoEn = prompt('Qué te gustaría conocer acerca del Cactus? Escoge entre: precio o color');
    if (interesadoEn == 'precio') {
        alert(producto1.precio)
    } else if (interesadoEn == 'color') {
        alert(producto1.color)
    } else {
        alert('Solicitud errada!');
        preguntoDatosExtra()
    }
}
preguntoDatosExtra()

// FUNCIÓN PARA CALCULAR EL PRECIO DEL PRODUCTO CON IVA
let cantidadProducto = parseInt(prompt("¿Cuantos cactus queres llevar?"));
const precioCactus = 150;

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

//CALCULO IVA
const iva = x => x * 0.21;

let precioProducto = precioCactus * cantidadProducto;
let precioDescuento = 50;

let precioTotal = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
alert(`El total de tu compra es ${precioTotal}$ | Aplicamos un descuento de 50$ por ser tu primera compra :)`)

// CLASE PRODUCTO
class Producto {
    constructor(id, nombre, color, precio) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = parseFloat(precio);
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}


// INCORPORAR ARRAYS
const productos = [
    { id: 1, producto: "Cactus", precio: 150, color: "verde", disponible: true },
    { id: 2, producto: "Suculenta", precio: 120, color: "amarillo", disponible: false },
    { id: 3, producto: "Maceta", precio: 180, color: "naranja", disponible: false },
    { id: 4, producto: "Abono", precio: 80, color: "negro", disponible: true },
];*/

