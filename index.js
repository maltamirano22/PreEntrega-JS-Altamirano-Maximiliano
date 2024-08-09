//Carrito de Compras:

const listaDeProductos=[
    {
        id:1,
        nombre: "Cortante",
        precio: 4500,
    },
    {
        id:2,
        nombre: "Shot Crystal",
        precio: 5000,
    },
    {
        id:3,
        nombre: "Shot Crystal Skull",
        precio: 3250,
    },
    {
        id:4,
        nombre: "Sorbetes",
        precio: 1500,
    },
    {
        id:5,
        nombre: "Sprinkles",
        precio: 1300,
    },
    {
        id:6,
        nombre: "Stencil",
        precio: 6000,
    }


]

alert("Bienvenido a la tienda");

let mensaje = "Productos disponibles:\n";
for (let i = 0; i < listaDeProductos.length; i++) {
    mensaje += "ID: " + listaDeProductos[i].id + " - " + listaDeProductos[i].nombre + " - Precio: $" + listaDeProductos[i].precio + "\n";
}
alert(mensaje);
let carrito = [];
let continuar = true;

while (continuar) {
    const idProducto = parseInt(prompt("Ingresa el ID del producto que deseas agregar al carrito (0 para finalizar):"));
    
    if (idProducto === 0 ) {
        continuar = false;
    } else {
        let productoEncontrado = false;
        for (let i = 0; i < listaDeProductos.length; i++) {
            if (listaDeProductos[i].id === idProducto) {
                carrito.push(listaDeProductos[i]);
                alert("Has agregado " + listaDeProductos[i].nombre + " al carrito.");
                productoEncontrado = true;
                break;
            }
        }
        if (!productoEncontrado) {
            alert("Producto no encontrado. Por favor, ingresa un ID válido.");
        }
    }
}

// Calcular el total del carrito

function totalCarrito(carrito) {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

//Mostrar el total

const total = totalCarrito(carrito);
alert("El total de tu carrito es: $" + total);









