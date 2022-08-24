class roundPizza {
    constructor(nombre, descripcion, precio){
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const roundPizzas = []
roundPizzas.push(new roundPizza("pepperoni", "Pizza grande con salsa de tomate, queso y pepperoni", 1900))
roundPizzas.push(new roundPizza("cheese", "Pizza grande con salsa de tomate y queso", 1500))
roundPizzas.push(new roundPizza("supreme", "Pizza grande con salsa de tomate, queso, pepperoni, salchicha, hongos, cebollas y morron", 2200))

class Side {
    constructor(nombre, descripcion, precio){
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const Sides = []
Sides.push(new Side("italian cheese bread", "10 piezas de pan recien horneado con borde crispy, cubierto de queso y topping de especias italianas", 1200))
Sides.push(new Side("crazy breads", "8 panes tipo baston con sabor a manteca y ajo, cubierto con queso parmesano rallado", 900))

class Drink {
    constructor(nombre, descripcion, precio){
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}
const Drinks = []
Drinks.push(new Drink("coca cola", "Gaseosa Coca Cola de 2.25 lts", 450))
Drinks.push(new Drink("sprite", "Gaseosa Sprite de 1.5 lts", 350))

const carrito = []

alert("Hola, Bienvenido a Pizza Time")

let seleccion = prompt("Desea ordenar algun producto el dia de hoy? \n si o no")

while(seleccion != "si" && seleccion != "no") {
    alert("Por favor ingresa si o no")
    seleccion = prompt("Desea ordenar algo, \n si o no")
}

if(seleccion == "si") {
    alert("A continuación nuestro menu");
    let seccionRoundPizzas = roundPizzas.map((producto) => producto.nombre + " - " + producto.descripcion + "\n" + "Precio: " + producto.precio + "$");

    let seccionSides = Sides.map((producto) => producto.nombre + " - " + producto.descripcion + "\n" + "Precio: " + producto.precio + "$");

    let seccionDrinks = Drinks.map((producto) => producto.nombre + " - " + producto.descripcion + "\n" + "Precio: " + producto.precio + "$");

    alert("Round Pizzas \n" + seccionRoundPizzas.join("\n") + "\n" + "\nSides \n" + seccionSides.join("\n") + "\n" + "\nDrinks \n" + seccionDrinks.join("\n"));

    console.log("Round Pizzas \n" + seccionRoundPizzas.join("\n") + "\n" + "\nSides \n" + seccionSides.join("\n") + "\n" + "\nDrinks \n" + seccionDrinks.join("\n"));

} else if (seleccion == "no") {
    alert("Gracias por venir, hasta pronto!!")
}

const productos = Array.prototype.concat(roundPizzas, Sides, Drinks)

while(seleccion != "no") {
    let prod = prompt("agrega un producto a tu carrito").toUpperCase()
    let precio = 0
    
    for(const i in productos) {
        if(prod == productos[i].nombre) {
            precio = Number(productos[i].precio)
        } // else {
            //     alert("No tenemos ese producto") Quiero mostrar este alert si el producto recibido en el prompt no esta en la lista, pero no me funciona correctamente no se porque, es como que el for in sigue recorriendo por todos los elementos del array y al mostrar por alert o consola lo ejecuta la cantidad de veces igual a los elementos que hay en el array. No se que metodo o tipo de bucle usar para que no pase eso
            // }
    }
    let unidades = Number(prompt("Cuantas unidades quiere llevar?"))
    carrito.push({prod, unidades, precio})
    
    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no") {
        alert("Gracias por la compra, Hasta pronto!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.prod}, unidades: ${carritoFinal.unidades}, Total a pagar por producto: $${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: $${total}`)