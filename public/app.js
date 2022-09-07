let divisa = "$"
const DOMproductsRoundPizzas = document.querySelector('#RoundPizzas-Container')
const DOMproductsDeepDish = document.querySelector('#deepDish-Container')
const DOMproductsSides = document.querySelector('#Sides-Container')
const DOMproductsDesserts = document.querySelector('#postres-Container')
const DOMcheckout = document.querySelector('#carrito')
const DOMnumCarrito = document.querySelector('#cantidad-carrito')
const checkOutArea = document.getElementById('areaCarrito')
const btnCarrito = document.getElementById('btnCarrito')
const deliverySelection = document.querySelector('.delivery-type')
const checkbox = document.getElementById('check')
let contador = 0
let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    renderizarCheckOut()
})

btnCarrito.addEventListener('click', e => {
    mostrarCheckOutAreaConClick(e)
})

const mostrarCheckOutAreaConClick = e => {
    if(contador == 0) {
        checkOutArea.classList.remove('1184max:hidden')
        contador = 1
    } else {
        checkOutArea.classList.add('1184max:hidden')
        contador = 0
        
    }
}

deliverySelection.addEventListener('click', e => {
    changeInfoYColor(e)
})

const changeInfoYColor = e => {
    checkbox.addEventListener('change', validaCheckbox, false)
    function validaCheckbox() {
        let checked = checkbox.checked
        if(checked){
            document.getElementById('entregaDomicilio').classList.remove('flex')
            document.getElementById('entregaDomicilio').classList.add('hidden')
            document.getElementById('entregaRecoger').classList.add('flex')
            document.getElementById('entregaRecoger').classList.remove('hidden')
            document.getElementById('span-check').classList.add('peer-checked:left-17')
            document.getElementById('deliveryType-checked').classList.remove('text-green-500')
            document.getElementById('deliveryType-nochecked').classList.add('text-green-500')
        } else {
            document.getElementById('entregaDomicilio').classList.add('flex')
            document.getElementById('entregaDomicilio').classList.remove('hidden')
            document.getElementById('entregaRecoger').classList.remove('flex')
            document.getElementById('entregaRecoger').classList.add('hidden')
            document.getElementById('deliveryType-checked').classList.add('text-green-500')
            document.getElementById('deliveryType-nochecked').classList.remove('text-green-500')
        }
    }
}

class roundPizza {
    constructor(id ,nombre, descripcion, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = Number(precio);
        this.imagen = imagen;
    }
}

const roundPizzas = []
roundPizzas.push(new roundPizza(1, "Supreme", "Pizza grande con salsa de tomate, queso, pepperoni, salchicha, hongos, cebollas y morron", 2200, './images/supremeround.jpg'))
roundPizzas.push(new roundPizza(2, "Classic Pepperoni", "Pizza grande con salsa de tomate, queso y pepperoni", 1900, './images/pepperoniround.jpg'))
roundPizzas.push(new roundPizza(3, "Classic Cheese", "Pizza grande con salsa de tomate y queso", 1500, './images/cheeseround.jpg'))

function renderizarRoundPizzas() {
    roundPizzas.forEach((info) => {
        const roundPizzasElement = document.createElement('div')
        roundPizzasElement.classList.add('product')
        const roundPizzasProductContent = `<div class="w-full relative">
        <button aria-label="pizza1" class="relative max-w-full m-0 p-0 flex w-full items-center justify-center rounded-md cursor-pointer transition-shadow select-none no-underline text-center bg-white  text-gray-600 border-gray-200 border 765max:border-none">
            <div class="max-w-full flex items-center justify-center flex-grow">
                <span class="w-full font-fontText font-bold tracking-normal text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    <div class="765min:border 765min:border-gray-200 765min:rounded flex flex-5-1-0 flex-row justify-between break-inside-avoid pl-4 text-left min-h-142px">
                        <!-- Contenedor de texto de la tarjeta -->
                        <div class="765min:pr-4 flex flex-col justify-center max-w-full min-h-142px min-w-0">
                            <div class="max-w-full mb-1 flex items-center">
                                <h4 class="product-title text-base font-fontPrincipal tracking-tight text-black m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">${info.nombre}</h4>
                            </div>
                            <div class="max-w-full mb-1">
                                <span class="product-description text-xs font-medium tracking-tight text-gray-500 m-0 p-0 max-w-full overflow-hidden text-ellipsis max-h-10 whitespace-normal">${info.descripcion}</span>
                            </div>
                            <div class="max-w-full flex items-stretch justify-start">
                                <div class="max-w-full mb-1">
                                    <div class="text-sm font-fontPrincipal font-medium tracking-normal text-green-600 m-0 p-0 block text-left max-w-full overflow-hidden text-ellipsis whitespace-nowrap"><span>${divisa}</span><span class="product-precio">${info.precio}</span></div>
                                </div>
                            </div>
                        </div>
                        <!-- Contenedor de imagen de la tarjeta -->
                        <div class="765min:p-0 765min:flex-2-1-0 p-4 min-w-35.5 max-w-35.5">
                            <div class="765max:h-27.5 h-35.5 bg-white">
                                <picture>
                                    <img class="object-cover object-center" src="${info.imagen}" alt="#">
                                </picture>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </button>
        <!-- contenedor de boton de agregar de la tarjeta -->
        <button data-id="${info.id}" class="addToCart absolute right-0 bottom-0 mr-3 mb-3 z-10 max-w-full pt-0 pl-0 w-auto items-center justify-center rounded-full cursor-pointer select-none no-underline text-center bg-gray-100 shadow-sm text-black text-lg font-fontPrincipal font-bold tracking-normal overflow-hidden text-ellipsis whitespace-nowrap h-8 min-w-8 flex">+</button>
    </div>
    <!-- Separador de tarjeta -->
    <div class="hidden 765max:block 765max:my-0 765max:mx-4 765max:border-t 765max:border-solid 765max:border-gray-200"></div>`;
        roundPizzasElement.innerHTML = roundPizzasProductContent;
        DOMproductsRoundPizzas.append(roundPizzasElement);
    })
}
renderizarRoundPizzas()

class deepDishPizza {
    constructor(id, nombre, descripcion, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = Number(precio);
        this.imagen = imagen;
    }
}
const deepDishPizzas = []
deepDishPizzas.push(new deepDishPizza(4, "Detroit-Sytle Deep Dish Sausage", "Pizza grande Estilo Detroit Deep Dish con salsa de tomate, queso y salchicha italiana", 1900, './images/deepdmeet.jpg'))
deepDishPizzas.push(new deepDishPizza(5, "Detroit-Sytle Deep Dish Cheese", "Pizza grande Estilo Detroit Deep Dish con salsa de tomate y queso", 1500, './images/deepdcheese.jpg'))

function renderizarDeepDish() {
    deepDishPizzas.forEach((info) => {
        const DeepDishElement = document.createElement('div')
        DeepDishElement.classList.add('product')
        const deepDishProductContent = `<div class="w-full relative">
        <button aria-label="pizza1" class="relative max-w-full m-0 p-0 flex w-full items-center justify-center rounded-md cursor-pointer transition-shadow select-none no-underline text-center bg-white  text-gray-600 border-gray-200 border 765max:border-none">
            <div class="max-w-full flex items-center justify-center flex-grow">
                <span class="w-full font-fontText font-bold tracking-normal text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    <div class="765min:border 765min:border-gray-200 765min:rounded flex flex-5-1-0 flex-row justify-between break-inside-avoid pl-4 text-left min-h-142px">
                        <!-- Contenedor de texto de la tarjeta -->
                        <div class="765min:pr-4 flex flex-col justify-center max-w-full min-h-142px min-w-0">
                            <div class="max-w-full mb-1 flex items-center">
                                <h4 class="product-title text-base font-fontPrincipal tracking-tight text-black m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">${info.nombre}</h4>
                            </div>
                            <div class="max-w-full mb-1">
                                <span class="product-description text-xs font-medium tracking-tight text-gray-500 m-0 p-0 max-w-full overflow-hidden text-ellipsis max-h-10 whitespace-normal">${info.descripcion}</span>
                            </div>
                            <div class="max-w-full flex items-stretch justify-start">
                                <div class="max-w-full mb-1">
                                    <div class="text-sm font-fontPrincipal font-medium tracking-normal text-green-600 m-0 p-0 block text-left max-w-full overflow-hidden text-ellipsis whitespace-nowrap"><span>${divisa}</span><span class="product-precio">${info.precio}</span></div>
                                </div>
                            </div>
                        </div>
                        <!-- Contenedor de imagen de la tarjeta -->
                        <div class="765min:p-0 765min:flex-2-1-0 p-4 min-w-35.5 max-w-35.5">
                            <div class="765max:h-27.5 h-35.5 bg-white">
                                <picture>
                                    <img class="object-cover object-center" src="${info.imagen}" alt="#">
                                </picture>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </button>
        <!-- contenedor de boton de agregar de la tarjeta -->
        <button data-id="${info.id}" class="addToCart absolute right-0 bottom-0 mr-3 mb-3 z-10 max-w-full pt-0 pl-0 w-auto items-center justify-center rounded-full cursor-pointer select-none no-underline text-center bg-gray-100 shadow-sm text-black text-lg font-fontPrincipal font-bold tracking-normal overflow-hidden text-ellipsis whitespace-nowrap h-8 min-w-8 flex">+</button>
    </div>
    <!-- Separador de tarjeta -->
    <div class="hidden 765max:block 765max:my-0 765max:mx-4 765max:border-t 765max:border-solid 765max:border-gray-200"></div>`;
        DeepDishElement.innerHTML = deepDishProductContent;
        DOMproductsDeepDish.append(DeepDishElement);
    })
}
renderizarDeepDish()

class Side {
    constructor(id, nombre, descripcion, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = Number(precio);
        this.imagen = imagen;
    }
}
const Sides = []
Sides.push(new Side(6, "Italian Cheese Bread", "10 piezas de pan recien horneado con borde crispy, queso y topping de especias italianas", 1200, './images/italianbreads.jpg'))
Sides.push(new Side(7, "Crazy Breads", "8 panes tipo baston con sabor a manteca y ajo, cubierto con queso parmesano rallado", 900, './images/crazybreads.jpg'))

function renderizarSides() {
    Sides.forEach((info) => {
        const SidesElement = document.createElement('div')
        SidesElement.classList.add('product')
        const sidesProductContent = `<div class="w-full relative">
        <button aria-label="pizza1" class="relative max-w-full m-0 p-0 flex w-full items-center justify-center rounded-md cursor-pointer transition-shadow select-none no-underline text-center bg-white  text-gray-600 border-gray-200 border 765max:border-none">
            <div class="max-w-full flex items-center justify-center flex-grow">
                <span class="w-full font-fontText font-bold tracking-normal text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    <div class="765min:border 765min:border-gray-200 765min:rounded flex flex-5-1-0 flex-row justify-between break-inside-avoid pl-4 text-left min-h-142px">
                        <!-- Contenedor de texto de la tarjeta -->
                        <div class="765min:pr-4 flex flex-col justify-center max-w-full min-h-142px min-w-0">
                            <div class="max-w-full mb-1 flex items-center">
                                <h4 class="product-title text-base font-fontPrincipal tracking-tight text-black m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">${info.nombre}</h4>
                            </div>
                            <div class="max-w-full mb-1">
                                <span class="product-description text-xs font-medium tracking-tight text-gray-500 m-0 p-0 max-w-full overflow-hidden text-ellipsis max-h-10 whitespace-normal">${info.descripcion}</span>
                            </div>
                            <div class="max-w-full flex items-stretch justify-start">
                                <div class="max-w-full mb-1">
                                    <div class="text-sm font-fontPrincipal font-medium tracking-normal text-green-600 m-0 p-0 block text-left max-w-full overflow-hidden text-ellipsis whitespace-nowrap"><span>${divisa}</span><span class="product-precio">${info.precio}</span></div>
                                </div>
                            </div>
                        </div>
                        <!-- Contenedor de imagen de la tarjeta -->
                        <div class="765min:p-0 765min:flex-2-1-0 p-4 min-w-35.5 max-w-35.5">
                            <div class="765max:h-27.5 h-35.5 bg-white">
                                <picture>
                                    <img class="object-cover object-center" src="${info.imagen}" alt="#">
                                </picture>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </button>
        <!-- contenedor de boton de agregar de la tarjeta -->
        <button data-id="${info.id}" class="addToCart absolute right-0 bottom-0 mr-3 mb-3 z-10 max-w-full pt-0 pl-0 w-auto items-center justify-center rounded-full cursor-pointer select-none no-underline text-center bg-gray-100 shadow-sm text-black text-lg font-fontPrincipal font-bold tracking-normal overflow-hidden text-ellipsis whitespace-nowrap h-8 min-w-8 flex">+</button>
    </div>
    <!-- Separador de tarjeta -->
    <div class="hidden 765max:block 765max:my-0 765max:mx-4 765max:border-t 765max:border-solid 765max:border-gray-200"></div>`;
        SidesElement.innerHTML = sidesProductContent;
        DOMproductsSides.append(SidesElement);
    })
}
renderizarSides()

class Dessert {
    constructor(id, nombre, descripcion, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = Number(precio);
        this.imagen = imagen;
    }
}
const Desserts = []
Desserts.push(new Dessert(8, "Cookie Brownie M&M'S", "Brownie cubierto con masa para galletas y M&M'S", 600, './images/browniemym.jpg'))
Desserts.push(new Dessert(9, "Cookie Brownie Coffler Block", "Brownie cubierto con masa para galletas y chocolates Coffler block", 600, './images/browniechocolate.jpg'))

function renderizarDesserts() {
    Desserts.forEach((info) => {
        const dessertsElement = document.createElement('div')
        dessertsElement.classList.add('product')
        const dessertsProductContent = `<div class="w-full relative">
        <button aria-label="pizza1" class="relative max-w-full m-0 p-0 flex w-full items-center justify-center rounded-md cursor-pointer transition-shadow select-none no-underline text-center bg-white text-gray-600 border-gray-200 border 765max:border-none">
            <div class="max-w-full flex items-center justify-center flex-grow">
                <span class="w-full font-fontText font-bold tracking-normal text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    <div class="765min:border 765min:border-gray-200 765min:rounded flex flex-5-1-0 flex-row justify-between break-inside-avoid pl-4 text-left min-h-142px">
                        <!-- Contenedor de texto de la tarjeta -->
                        <div class="765min:pr-4 flex flex-col justify-center max-w-full min-h-142px min-w-0">
                            <div class="max-w-full mb-1 flex items-center">
                                <h4 class="product-title text-base font-fontPrincipal tracking-tight text-black m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">${info.nombre}</h4>
                            </div>
                            <div class="max-w-full mb-1">
                                <span class="product-description text-xs font-medium tracking-tight text-gray-500 m-0 p-0 max-w-full overflow-hidden text-ellipsis max-h-10 whitespace-normal">${info.descripcion}</span>
                            </div>
                            <div class="max-w-full flex items-stretch justify-start">
                                <div class="max-w-full mb-1">
                                    <div class="text-sm font-fontPrincipal font-medium tracking-normal text-green-600 m-0 p-0 block text-left max-w-full overflow-hidden text-ellipsis whitespace-nowrap"><span>${divisa}</span><span class="product-precio">${info.precio}</span></div>
                                </div>
                            </div>
                        </div>
                        <!-- Contenedor de imagen de la tarjeta -->
                        <div class="765min:p-0 765min:flex-2-1-0 p-4 min-w-35.5 max-w-35.5">
                            <div class="765max:h-27.5 h-35.5 bg-white">
                                <picture>
                                    <img class="object-cover object-center" src="${info.imagen}" alt="#">
                                </picture>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </button>
        <!-- contenedor de boton de agregar de la tarjeta -->
        <button data-id="${info.id}" class="addToCart absolute right-0 bottom-0 mr-3 mb-3 z-10 max-w-full pt-0 pl-0 w-auto items-center justify-center rounded-full cursor-pointer select-none no-underline text-center bg-gray-100 shadow-sm text-black text-lg font-fontPrincipal font-bold tracking-normal overflow-hidden text-ellipsis whitespace-nowrap h-8 min-w-8 flex">+</button>
    </div>
    <!-- Separador de tarjeta -->
    <div class="hidden 765max:block 765max:my-0 765max:mx-4 765max:border-t 765max:border-solid 765max:border-gray-200"></div>`;
        dessertsElement.innerHTML = dessertsProductContent;
        DOMproductsDesserts.append(dessertsElement);
    })
}
renderizarDesserts()

const productsRoundPizza = document.getElementById('RoundPizzas-Container')
const productsDeepDish = document.getElementById('deepDish-Container')
const productsSides = document.getElementById('Sides-Container')
const productsDesserts = document.getElementById('postres-Container')

productsRoundPizza.addEventListener('click', e => {
    addCarrito(e)
})
productsDeepDish.addEventListener('click', e => {
    addCarrito(e)
})
productsSides.addEventListener('click', e => {
    addCarrito(e)
})
productsDesserts.addEventListener('click', e => {
    addCarrito(e)
})

const productos = Array.prototype.concat(roundPizzas, deepDishPizzas, Sides, Desserts)
DOMnumCarrito.innerHTML = Number(carrito.length)
DOMcheckout.innerHTML = `<div class="w-full max-w-full p-4 flex flex-col">
<div class="my-5 mx-0"><img class="w-full" src="./images/Frame.svg" alt="#"></div>
<span class="font-fontText font-medium text-sm text-center text-gray-500">Tu carrito esta vacío</span>
<span class="font-fontText font-medium text-sm text-center text-gray-500">Agrega elementos para comenzar</span>
</div>`

const addCarrito = e => {
    if(e.target.classList.contains('addToCart')) {
        carrito.push(e.target.getAttribute('data-id'))
    }
    renderizarCheckOut()
}

const renderizarCheckOut = () => {
    const modificarNumCarrito = () => {
        DOMnumCarrito.innerHTML = carrito.length
    }
    modificarNumCarrito()
    const calcularTotal = () => {
        return carrito.reduce((total, item) => {
            const miItem = productos.filter((itemProductos) => {
                return itemProductos.id === Number(item);
            });
            return total + miItem[0].precio;
        }, 0);
    }
    
    if(carrito.length > 0) {
        DOMcheckout.innerHTML = 
        `<div id="checkout" class="w-full">
            <div class="max-w-full p-4">
                <span class="text-xs font-fontText font-bold tracking-normal text-gray-500 m-0 p-0 block">Tu carrito de
                </span>
                <a href="index.html" class="text-inherit cursor-pointer">
                    <div class="max-w-full flex items-center justify-start">
                        <span class="text-lg font-fontPrincipal font-bold tracking-tight text-black m-0 p-0 block">
                            Pizza Time Palermo
                        </span>
                        <svg width="16" height="16" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="flex-shrink-0 ml-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.79289 16.7071C9.40237 16.3166 9.40237 15.6834 9.79289 15.2929L13.0858 12L9.79289 8.70711C9.40237 8.31658 9.40237 7.68342 9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289L15.2071 11.2929C15.3946 11.4804 15.5 11.7348 15.5 12C15.5 12.2652 15.3946 12.5196 15.2071 12.7071L11.2071 16.7071C10.8166 17.0976 10.1834 17.0976 9.79289 16.7071Z" fill="#191919"></path>
                        </svg>
                    </div>
                </a>
            </div>
            <div class="py-0 px-4 mb-4">
                <div class="max-w-full">
                    <a href="#" class="text-inherit cursor-pointer relative max-w-full m-0 p-0 flex min-h-40px w-full items-center justify-center rounded-full select-none text-center bg-red-500 shadow-transparent text-white">
                        <div class="w-full max-w-full flex items-center justify-center">
                            <span class="w-full font-fontPrincipal text-base font-bold tracking-normal text-center m-0 px-4 max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-white flex justify-between">
                                <div id="comprar">Continuar</div>
                                <div><span>$</span>${calcularTotal()}</div>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="w-full pl-4 mt-0 mb-0">
                    <hr class="block w-full m-0 h-px bg-white">
                </div>
                <div id="cartProductContainer" class="relative">
                </div>
                <div class="w-full pl-4 mt-0 mb-0">
                    <hr class="block w-full m-0 h-px bg-white">
                </div>
            </div>
        </div>`
    } else {
        DOMcheckout.innerHTML = `<div class="w-full max-w-full p-4 flex flex-col">
<div class="my-5 mx-0"><img class="w-full" src="./images/Frame.svg" alt="#"></div>
<span class="font-fontText font-medium text-sm text-center text-gray-500">Tu carrito esta vacío</span>
<span class="font-fontText font-medium text-sm text-center text-gray-500">Agrega elementos para comenzar</span>
</div>`
    }
    const DOMproductsCarrito = document.querySelector('#cartProductContainer')
    
    const carritoSinDuplicados = [...new Set(carrito)]
    carritoSinDuplicados.forEach((item) => {
        const miItem = productos.filter((itemProductos) => {
            return itemProductos.id === Number(item)
        })
        const cantidadItem = carrito.reduce((acc, itemID) => {
            return itemID === item ? acc += 1 : acc
        }, 0)

        const productsElement = document.createElement('div')
        productsElement.classList.add('max-w-full')
        productsElement.classList.add('flex')
        productsElement.classList.add('gap-4')
        productsElement.classList.add('p-4')
        productsElement.dataset.item = item
        const cartProductContent = `
        <div class="max-w-full flex flex-shrink-0 items-center">
            <span class="text-base font-fontPrincipal font-medium tracking-normal text-black m-0 p-0 block">${cantidadItem}</span>
            <span class="text-base font-fontPrincipal font-medium tracking-normal text-black ml-0.5 my-0 mr-0 p-0 block">x</span>
        </div>
        <div class="flex-grow overflow-hidden basis-full">
            <div class="h-full flex flex-col  text-lg font-fontPrincipal tracking-tight text-black text-left m-0 p-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                <span class="text-base font-fontPrincipal font-medium tracking-normal text-black m-0 p-0 max-w-full max-h-11 overflow-hidden text-ellipsis whitespace-normal">${miItem[0].nombre}</span>
                <span class="text-xs font-fontPrincipal font-medium tracking-normal text-gray-500 m-0 p-0 max-w-full max-h-9 overflow-hidden text-ellipsis whitespace-normal">${miItem[0].descripcion}</span>
                <span class="text-sm font-fontPrincipal font-medium tracking-normal text-black mt-2 mx-0 mb-0 p-0 max-w-full max-h-9 overflow-hidden text-ellipsis whitespace-normal"><span>$</span>${cantidadItem*miItem[0].precio}</span>
            </div>
        </div>
        <button aria-label="boton-trash" class="flex-shrink-0 leading-none flex -m-1 bg-transparent relative max-w-full rounded-100% cursor-pointer select-none no-underline text-center shadow-transparent p-0 items-center justify-center">
            <img id="borrar-btn" class="borrar-btn flex-shrink-0 overflow-visible" data-id="${item}" src="./images/trash.svg" alt="#">
        </button>`
        productsElement.innerHTML = cartProductContent;
        DOMproductsCarrito.append(productsElement);
        const borrarBtn = document.querySelector('.borrar-btn');
        borrarBtn.addEventListener('click', borrarItemCarrito)
    })
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito)
}

const borrarItemCarrito = e => {
    const id = e.target.dataset.id
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        })
        console.log(id)
        renderizarCheckOut()
    }