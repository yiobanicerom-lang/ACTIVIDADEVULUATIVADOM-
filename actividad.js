//etapa 1 
//ejemplo
const titulo = document.querySelector('#titulo');
console.log(titulo.textContent);
const titulopagina = document.querySelector('#titulodepagina');
//1.1 seleccionar titulo,mensaje,producto,precio y stock
const mensaje = document.querySelector("#mensaje");
console.log(mensaje.textContent);
const producto = document.querySelector("#producto");
console.log(producto.textContent);
const precio = document.querySelector("#precio");
console.log(precio.textContent);
const stock = document.querySelector("#stock");
console.log(stock.textContent);

//1.2 utilizar metodos trabajados durante las clases
console.log(`titulo: ${titulo.textContent}
mensaje: ${mensaje.textContent}
producto: ${producto.textContent}
precio: ${precio.textContent}
stock: ${stock.textContent}`);


//etapa 2
//2.1 modificacion de contenido
titulo.textContent = "Store App-gestion de inventario";
//2.2
mensaje.textContent = "producto registrado correctamente";
//2.3
nombreproducto.textContent = "laptop lenovo thinkpad";

//2.4 atributos
console.log("ID:",producto.getAttribute("data-id"));
console.log("precio:", producto.getAttribute("data-precio"));

//2.5
producto.setAttribute("data-stock", "5")
console.log("data-stock:", producto.getAttribute("data-stock"));

//2.6
titulopagina.removeAttribute("id");
titulopagina.textContent = "producto tecnologico";
console.log("nuevo titulo de pagina:", titulopagina.textContent);

//etapa 3
//3.1
producto.style.padding = "30px";
console.log(producto.style.padding);
//3.2
const botondestacar = document.getElementById("btndestacar");
botondestacar.addEventListener("click", () => {
    producto.classList.toggle("destacar");
    console.log(producto.classList);
});
//3.4
const botondesactivar = document.getElementById("btndesactivar");
botondesactivar.addEventListener("click", () => {
    producto.classList.toggle("inactiva")
});
//3.5
console.log("producto destacado:", producto.classList.contains("destacar"));



