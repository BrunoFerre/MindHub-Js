const contenedorCard=document.querySelector("#cards2")
contenedorCard.innerHTML= Eventos()
function Eventos(){
    let cards= ''
    for (const evento of data.events) {
    cards+=` <div class='card' style='width: 18rem;'>
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
