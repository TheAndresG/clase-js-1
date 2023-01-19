//Const es una "variable" que es inmutable, es decir, constante. No se le puede reasignar un valor.

//Gracias al GetElementById, agarramos los elementos HTML del DOM buscandolos por su ID
const texto1 = document.getElementById("texto1");
const boton1 = document.getElementById("boton1");

//AddEventListener agrega "escuchas" a un "evento". En este caso, al hacer click, se desencadena el evento.
//Luego de declarar el tipo de evento a capturar, se ejecuta una funcion, en este caso, una arrow function "()=>{}".
boton1.addEventListener("click", (e) => {
  // e, es el evento en si. Es la accion del click, y contiene muchisima informacion que podria usarse.
  // El PreventDefault es una funcion que desactiva y evita que el evento active sus funciones por defecto
  //que el navegador le incorpora.
  e.preventDefault();

  //Condicion para el caso donde no haya nada mas que espacios vacios en el input.
  if (texto1.value.trim() === "") alert("Input vacio :(");
  else alert(texto1.value);
});

//Ejemplo 2

const texto2 = document.getElementById("texto2");
const textoCambiante =
  document.getElementById("textoCambiante").firstElementChild;

texto2.addEventListener("input", (e) => {
  textoCambiante.textContent = texto2.value;
});

//Ejemplo 3

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const select = document.getElementById("select");
const igual = document.getElementById("igual");
const resultado = document.getElementById("resultado");

igual.addEventListener("click", (e) => {
  e.preventDefault();

  resultado.textContent = eval(numero1.value + select.value + numero2.value);
});
