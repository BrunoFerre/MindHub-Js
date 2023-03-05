const UpcomingCards = document.querySelector("#cards2")
UpcomingCards.innerHTML= UpcomingEvents()
function UpcomingEvents() {
  let cards = ''
  // let array = data.events.filter((categorias) => categorias.category == "Food Fair")
  for (const evento of data.events) {
    if (evento.date > data.currentDate) {
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
                  <label class='card-link'>Capacity:${evento.capacity}</label>
                  <label class='card-link m-0'>Assistance: ${evento.assistance}</label>
                </div>
              </div>`
    }
  }
  return cards
}
