const contenedor = document.getElementById('cards2')
const buscador = document.getElementById('search')
const cat = document.querySelector(".category")
let chec = document.querySelectorAll('input[name="status"]:checked')
let inputs = ''
traerDatos()
let opciones = []
function traerDatos() {
    // fetch('https://mindhub-xj03.onrender.com/api/amazing')
        fetch('./scripts/data.json')
        .then(response => response.json())
        .then(datosApi => {
            eventos = datosApi.events
            pintarTarjetas(eventos, contenedor,datosApi)
            pintarInputs(eventos, cat)
        })
        .catch(error => console.log(error.message))
}
function pintarTarjetas(arrayDatos, lugar,datos) {
    if (arrayDatos.length == 0) {
        lugar.innerHTML = `<p class='display-1'>No se encontraron elementos</p>`
        return false
    }
    tarjetas = ''
    arrayDatos.forEach(evento => {
      if (evento.date < datos.currentDate) {
        tarjetas += `<div class='card' style='width: 18rem;'>
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
      })
    lugar.innerHTML = tarjetas
}

function pintarInputs(array, ubicacion) {
    label = ''
    array.forEach(categorias => {
        if (opciones.indexOf(categorias.category) === -1) {
            opciones.push(categorias.category)
            label += `<label class="m-2"><input class="checkbox form-check-input " name="status" type="checkbox"
            value="${categorias.category}" id="${categorias.category}">${categorias.category}</label>`
        }
    })
    ubicacion.innerHTML = label
}