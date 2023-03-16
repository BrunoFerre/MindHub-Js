const tabla = document.getElementById('tabla')

function TraerDatos(){
     fetch('./scripts/data.json')
    .then(response =>response.json())
    .then(datosApis => {
      fecha = datosApis.currentDate
      eventos = datosApis.events
      console.log(eventos);
      pintartabla(eventos,tabla)
    })
    .catch(error => console.log(error.message))
}
TraerDatos()
function pintartabla(array,lugar){
    table=''
    const d = document.getElementById('aver')
    array.forEach(events => {
        d.appendChild('<td>')
        
})
    lugar.innerHTML=d
}