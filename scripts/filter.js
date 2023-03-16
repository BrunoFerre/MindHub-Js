
function FiltrarCardCheckBox() {
  contenedorCard.innerHTML=''
  //capturar checkboxs
  let checkbox = document.querySelectorAll('input[name="status"]:checked');
  console.log(checkbox);
  //array con checkboxs seleccionados
  
  let categoriasFiltradas =[]
  checkbox.forEach(function (inputs) {
    categoriasFiltradas.push(inputs.value)
  })
  array = data.events.filter((categoria)=>categoria.category.includes(categoriasFiltradas))
  console.log(array);
  for ( categorias of array) {
    contenedorCard.innerHTML+=` <div class='card' style='width: 28rem;'>
    <img src='${categorias.image}' class='card-img-top' alt='...'>
    <div class='card-body bg-primary'>
      <h5 class='card-title fs-4 text-center'>${categorias.name}</h5>
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item bg-info'>Category: ${categorias.category}</li>
      <li class='list-group-item bg-info'>Place: ${categorias.place}</li>
      <li class='list-group-item bg-info'>Price: ${categorias.price}</li>
    </ul>
    <div class='card-footer bg-info'>
    <a href='./details.html?id=${categorias._id}' class="btn btn-primary">Ver mas</a>
    </div>
  </div>`
  }
}