const formulario = document.querySelector("#form")

formulario.onsubmit = function(event) {

  //se coloco el Default que faltaba
  event.preventDefault();
  
  const n = formulario.elements[0]
  const e = formulario.elements[1]
  const na = formulario.elements[2]

  const nombre = n.value
  const edad = e.value

  const i = na.selectedIndex
  const nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

//Se eliminaron lineas de codigo que agregaban nuevamente el elemento nombre y el botón borrar


function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados")

const elementoLista = document.createElement("div")
// se cambio de added a el método correcto que es add
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)


function crearElemento(descripcion, valor) {
const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
// Se coloca un solo append para no tener tantas líneas de código
elementoLista.append(spanNombre, inputNombre, espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)

const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
elementoLista.append(corteLinea, botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}