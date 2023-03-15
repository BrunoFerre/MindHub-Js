//capturar elemento
let clase=document.querySelector(".category")
let inputs=''
const contenedorCard = document.querySelector("#cards2")

clase.innerHTML=crearInputs()
function crearInputs() {
  let opciones=[]
  for (const categorias of data.events) {
    if (opciones.indexOf(categorias.category)=== -1) {
      opciones.push(categorias.category)
      inputs+=`<label for="${categorias.name}"><input class="form-check-input" name="status" type="checkbox" onchange="FiltrarCardCheckBox()" value="${categorias.category}" id="${categorias.name}">${categorias.category}</label>`
    }
  }
  return inputs
}
function FiltrarCard(array) {
  const buscador = document.getElementById("search")
    contenedorCard.innerHTML=''
     array = data.events.filter((categoria)=>categoria.category.toLowerCase().includes(buscador.value.toLowerCase()))
     if (array == ""){
       contenedorCard.innerHTML+=` <div class='card col-12' style='width: 18rem;'>
      <img src='./assets/error.png' class='card-img-top' alt='...'>
      <div class='card-body bg-primary'>
        <h5 class='card-title fs-4 text-center'>It was not found</h5>
      </div>
      <div class='card-footer bg-info'>
      <a href='./index.html' class="btn btn-primary">GO HOME</a>
      </div>
    </div>`
     }else{
     for (filtro of array) {
        contenedorCard.innerHTML+=` <div class='card' style='width: 18rem;'>
        <img src='${filtro.image}' class='card-img-top' alt='...'>
        <div class='card-body bg-primary'>
          <h5 class='card-title fs-4 text-center'>${filtro.name}</h5>
        </div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item bg-info'>Category: ${filtro.category}</li>
          <li class='list-group-item bg-info'>Place: ${filtro.place}</li>
          <li class='list-group-item bg-info'>Price: ${filtro.price}</li>
        </ul>
        <div class='card-footer bg-info'>
        <a href='./details.html?id=${filtro._id}' class="btn btn-primary">Ver mas</a>
        </div>
      </div>`
  }
}
}
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
  array = data.events.filter((categoria)=>categoria.category.includes(categoriasFiltradas.toString()))
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