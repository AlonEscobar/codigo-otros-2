let formulario = document.querySelector("#form");
formulario.onsubmit = function() {
  e.preventDefault();
  
  let n = document.getElementById("name");
  let age = document.getElementById("age");
  let na = document.getElementById("nationality");

  let nombre = n.value
  let edad = age.value

  let i = na.selectedIndex
  let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    age.classList.add("error")
  }

  if (nombre.length > 0 
    && (edad > 18 
      && edad < 120) ) {
    agregarInvitado(nombre, edad, nacionalidad)
    }
}

let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  
  switch (nacionalidad) {
    case "ar":
      nacionalidad = "Argentina"
      break;
    case "mx":
      nacionalidad = "Mexicana"
      break;
    case "vnzl":
      nacionalidad = "Venezolana"
      break;
    case "per":
      nacionalidad = "Peruana"
      break;
    default:
      break;
  }

let lista = document.getElementById("lista-de-invitados")

let elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

let espacio = document.createElement("br")
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
  let fila = document.createElement("tr");
  let columnaNombre = document.createElement("td");
  let columnaEdad = document.createElement("td");
  let columnaNacionalidad = document.createElement("td");
  columnaNombre.textContent = descripcion + ": " + valor;
  columnaEdad.textContent = edad;
  columnaNacionalidad.textContent = nacionalidad;
fila.appendChild(columnaNombre);
fila.appendChild(columnaEdad);
fila.appendChild(columnaNacionalidad);
document.querySelector("#lista-de-invitados tbody").appendChild(fila);
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}