// TO-DO APP v1.0.0
// 2024-03-08

let listaTareas = [];
const htmlPendiente = document.getElementById("pendiente");
const htmlEjecucion = document.getElementById("ejecucion");
const htmlFinalizada = document.getElementById("finalizada");

let formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("Soy el formulario")
  // const descripcion = document.getElementById("descripcion").value

  const tarea = new Object();
  tarea.id = new Date().getTime();
  tarea.descripcion = formulario[0].value;
  tarea.estado = "pendiente";

  listaTareas.push(tarea);

  formulario.reset();
  formulario[0].focus();
  //   console.log(listaTareas);

  mostrarTareas();
});

function mostrarTareas() {
  let tareasPendiente = "";
  let tareasEjecucion = "";
  let tareasFinalizada = "";

  for (let i = 0; i < listaTareas.length; i++) {
    switch (listaTareas[i].estado) {
      case "pendiente":
        tareasPendiente += `<div class="lista-tareas tarea-pendiente">`
        tareasPendiente += `<p id="${listaTareas[i].id}">${listaTareas[i].descripcion}</p><p>`
        tareasPendiente += `<span class="boton boton-finalizada" onclick="cambiarEstado(${listaTareas[i].id}, 'finalizada')">`
        tareasPendiente += `<i class="fa-solid fa-circle-check"></i> </span>`
        tareasPendiente += `<span class="boton boton-borrado" onclick="borrarTarea(${listaTareas[i].id})">`
        tareasPendiente += `<i class="fa-solid fa-trash-can"></i> </span>` 
        tareasPendiente += `<span class="boton boton-ejecucion" onclick="cambiarEstado(${listaTareas[i].id}, 'ejecucion')">`
        tareasPendiente += `<i class="fa-solid fa-person-digging"></i> </span>`
        tareasPendiente += `<span class="boton boton-pendiente"  onclick="cambiarEstado(${listaTareas[i].id}, 'pendiente')">` 
        tareasPendiente += `<i class="fa-regular fa-clipboard"></i></span>`
        tareasPendiente += '</p></div>'          
      
        break;
      case "ejecucion":
        console.log("Es una tarea ejecucion");
        break;
      case "finalizada":
        console.log("Es una tarea finalizada");
        break;
    }
  }

  htmlPendiente.innerHTML = tareasPendiente;
}

const cambiarEstado = (id, estado) => {
    console.log(id, estado);
}


// function solucion1() {
//     alert("Soy un onclick en el HTML")
// }

// document.getElementById("id2").onclick = () => {alert("Soy un onclick desde JS ")}

// document.getElementById("id3").addEventListener("click", () => { alert("soy un eventListener")})
