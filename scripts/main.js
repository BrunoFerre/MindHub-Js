const contenedorCard = document.querySelector("#cards2")
contenedorCard.innerHTML = Eventos()
let buscador = document.getElementById("search")
function Eventos(evento) {
  let cards = ''
  for (evento of data.events) {
    cards += ` <div class='card' style='width: 18rem;'>
    <img src='${evento.image}' class='card-img-top' alt='...'>
    <div class='card-body bg-primary'>
      <h5 class='card-title fs-4 text-center'>${evento.name}</h5>
      <p class='card-text fs-5'>${evento.description}</p>
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item bg-info'>Category: ${evento.category}</li>
      <li class='list-group-item bg-info'>Place: ${evento.place}</li>
      <li class='list-group-item bg-info'>Price: ${evento.price}</li>
    </ul>
    <div class='card-footer bg-info'>
      <a href'"#' class='card-link'>Capacity:${evento.capacity}</a>
      <a href'"#' class='card-link d-flex flex-wrap m-0'>Assistance: ${evento.assistance}</a>
    </div>
  </div>`
  }
  return cards
}
buscador.addEventListener("change",()=>{
  contenedorCard.innerHTML=''
  let ev=data.events
  let categoriasFiltradas = ev.filter((categoria)=> categoria.category.toLowerCase().includes( buscador.value))
  for ( filtro of categoriasFiltradas) {    
    contenedorCard.innerHTML+=` <div class='card' style='width: 18rem;'>
   <img src='${filtro.image}' class='card-img-top' alt='...'>
   <div class='card-body bg-primary'>
     <h5 class='card-title fs-4 text-center'>${filtro.name}</h5>
     <p class='card-text fs-5'>${filtro.description}</p>
   </div>
   <ul class='list-group list-group-flush'>
     <li class='list-group-item bg-info'>Category: ${filtro.category}</li>
     <li class='list-group-item bg-info'>Place: ${filtro.place}</li>
     <li class='list-group-item bg-info'>Price: ${filtro.price}</li>
   </ul>
   <div class='card-footer bg-info'>
     <a href'"#' class='card-link'>Capacity:${filtro.capacity}</a>
     <a href'"#' class='card-link d-flex flex-wrap m-0'>Assistance: ${filtro.assistance}</a>
   </div>
 </div>`
  }
}
)