const contenedor = document.getElementById('cards2')
const buscador = document.getElementById('search')
const clase = document.querySelector(".category")
let inputs=''
async function TraerDatos() {
//  await fetch('https://mindhub-xj03.onrender.com/api/amazing')
  await fetch('./scripts/data.json')
  .then(response =>response.json())
  .then(datosApis => {
    eventos = datosApis.events
    fecha = datosApis.currentDate
    console.log(eventos);
    PintarCards(eventos,contenedor)
    pintarInputs(eventos,clase)
  })
  .catch(error => console.log(error.message))
}
TraerDatos()
function PintarCards(array, lugar) {
  if (array.length == 0) {
    lugar.innerHTML=`<p class="display-1">No such elements</p>`
    return false
  }
  tarjetas = ''
  array.forEach(events => {
    tarjetas+=` <div class='card' style='width: 28rem;'>
    <img src='${events.image}' class='card-img-top' alt='...'>
    <div class='card-body bg-primary'>
      <h5 class='card-title fs-4 text-center'>${events.name}</h5>
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item bg-info'>Category: ${events.category}</li>
      <li class='list-group-item bg-info'>Place: ${events.place}</li>
      <li class='list-group-item bg-info'>Price: ${events.price}</li>
    </ul>
    <div class='card-footer bg-info'>
    <a href='./details.html?id=${events._id}' class="btn btn-primary">Ver mas</a>
    </div>
  </div>`
  })
  lugar.innerHTML=tarjetas
}
function pintarInputs(arrayDatos,ubicacion) {
  label=''
  let opciones = []
  arrayDatos.forEach(events=>{
    if (opciones.indexOf(events.category) === -1) {
      opciones.push(events.category)
      label+=`<label class="p-2"><input onchange="FiltrarCheck()" class="form-check-input" name="status"
       type="checkbox"  value="${events.category}" id="${events.category}">${events.category}</label>`
    }
    //  onchange="FiltrarCardCheckBox()"
  })
  ubicacion.innerHTML=label
}
function FiltrarEventos(array,texto) {
  return array.filter(events => events.category.toLowerCase().includes(texto.toLowerCase())|| events.description.toLowerCase().includes(texto.toLowerCase()))
}
buscador.addEventListener('keyup',()=>{
  let arrayFiltrado = FiltrarEventos(eventos, buscador.value)
  PintarCards(arrayFiltrado,contenedor)
})
function FiltrarCheck() {
  contenedor.innerHTML=''
  let categoriasFiltradas=[]
  let checkbox = document.querySelectorAll('input[name="status"]:checked')
  checkbox.forEach(function (inputs) {
    categoriasFiltradas.push(inputs.value)
    console.log(categoriasFiltradas);
  })
  let arrayNuevo = eventos.filter(events=>events.category.includes(categoriasFiltradas))
  for (const evento of arrayNuevo) {
    contenedor.innerHTML+=` <div class='card' style='width: 28rem;'>
    <img src='${evento.image}' class='card-img-top' alt='...'>
    <div class='card-body bg-primary'>
      <h5 class='card-title fs-4 text-center'>${evento.name}</h5>
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item bg-info'>Category: ${evento.category}</li>
      <li class='list-group-item bg-info'>Place: ${evento.place}</li>
      <li class='list-group-item bg-info'>Price: ${evento.price}</li>
    </ul>
    <div class='card-footer bg-info'>
    <a href='./details.html?id=${evento._id}' class="btn btn-primary">Ver mas</a>
    </div>
  </div>`
  }
}