const contenedor = document.getElementById('cards2')
const buscador = document.getElementById('search')
const clase = document.querySelector(".category")
let inputs=''
async function TraerDatos() {
//  await fetch('https://mindhub-xj03.onrender.com/api/amazing')
  await fetch('./scripts/data.json')
  .then(response =>response.json())
  .then(datosApis => {
    fecha = datosApis.currentDate
    eventos = datosApis.events.filter(events=>events.date<fecha)
    console.log(eventos);
    PintarCards(eventos,fecha,contenedor)
    pintarInputs(eventos,clase)
  })
  .catch(error => console.log(error.message))
}
TraerDatos()
function PintarCards(array,date, lugar) {
  if (array.length == 0) {
    lugar.innerHTML=`<p class="display-1">No such elements</p>`
    return false
  }
  tarjetas = ''
  array.forEach(events => {
    if (events.date<date) {   
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
    }
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