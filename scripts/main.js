const contenedorCard=document.querySelector("#cards2")
contenedorCard.innerHTML= Eventos()
function Eventos(){
    let cards= ''
    for (const evento of data.events) {
    cards+=` <div class='d-flex h-100 card col-xxl-3 col-xl-3 col-lg-4 col-sm-8 col-md-10'>
    <div class='bg-success-subtle'>
        <img src='${evento.image}' class='card-img-top' alt='...'>
        <div class='card-body'>
            <h5 class='card-title text-center fs-3'>${evento.name}</h5>
            <p class='card-text fs-5'>${evento.description}</p>
            <div class='prices fs-5'>
                <label>Price: ${evento.price}</label>
                <label>${evento.place}</label>
                <label>${evento.category}</label>
            </div>
        </div>
        <div class="card-footer">
        <label class="text-muted bg-warning fs-6">Capacity:${evento.capacity}</label>
        <label class="text-muted bg-warning fs-6">Date:${evento.date}</label>
        <label class="text-muted bg-warning fs-6">Assistance:${evento.assistance}</label>
        </div>
    </div>
</div>`                        
}
    return cards
}
