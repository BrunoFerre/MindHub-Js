const UpcomingCards = document.querySelector("#cards2")
UpcomingCards.innerHTML= UpcomingEvents()
function UpcomingEvents() {
  let cards = ''
  for (const evento of data.events) {
    if (evento.date > data.currentDate) {
      cards += ` <div class='card' style='width: 18rem;'>
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
  return cards
}
