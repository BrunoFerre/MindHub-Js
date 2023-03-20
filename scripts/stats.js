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
const primeraTabla = document.getElementById('capacity-statics')
const segundaTabla = document.getElementById('UpcomingEvents')
const terceraTabla = document.getElementById('PastEvents')
function TraerDatos() {
  fetch('./scripts/data.json')
    .then(response => response.json())
    .then(datosApis => {
      const date = datosApis.currentDate
      const upcomingEvents = []
      const pastEvents = []
      const opciones = []

      //tipos de eventos 
      for (const evento of datosApis.events) {
        if (evento.date >= date) {
          upcomingEvents.push(evento)
        }else{
          pastEvents.push(evento)
        }
      }
       //generar categorias
       for (const element of datosApis.events) {
        if (opciones.indexOf(element.category) === -1) {
          opciones.push(element.category);
        }
      }

      //orden por asistencia y capacidad
      //orden desendente
      const EventosAsistenciaDesc = datosApis.events.map
        ((evento) => ({
          name: evento.name,
          attendance:
            evento.assistance === undefined ? (evento.estimate * 100) / evento.capacity
              : (evento.assistance * 100) / evento.capacity,
        })).sort((a, b) => b.attendance - a.attendance)
      //orden ascendente
      const EventosAsistenciaAsce = EventosAsistenciaDesc.slice().reverse()

      //orden capacidad desc
      const EventosCapacidadDesc = EventosAsistenciaDesc.slice().sort((a, b) => b.capacity - a.capacity)
      //capturar primera tabla
    
      primeraTabla.innerHTML = PintarTabla(EventosAsistenciaDesc, EventosAsistenciaAsce, EventosCapacidadDesc)

      function PintarTabla(EventosAsistenciaDesc, EventosAsistenciaAsce, EventosCapacidadDesc) {
        let tabla = ''
        let contador = 0
        for (const [index, event] of EventosAsistenciaDesc.entries()) {
          if (contador < 7) {
            tabla += `<tr>
          <td>${event.name}, ${event.attendance.toFixed(0)}%</td>
          <td>${EventosAsistenciaAsce[index].name
              }, ${EventosAsistenciaAsce[index].attendance.toFixed(0)}%</td>
          <td>${EventosCapacidadDesc[index].name +":"+ EventosCapacidadDesc[index].attendance}</td>
        </tr>`;
          }
          contador++
        }
        return tabla
      }


      segundaTabla.innerHTML = CreateUpcoming(upcomingEvents,opciones)


      function CreateUpcoming(upcomingEvents, opciones) {
        let tabla = ""
        for (let i = 0; i < opciones.length; i++) {
          let categorias2 = opciones[i]
          let revenue = 0
          let capacity = 0
          let assistance = 0
          for (const events of upcomingEvents) {
            if (categorias2 == events.category) {
              if (events.assistance === undefined) {
                revenue = revenue + events.price * events.estimate
                capacity = capacity + events.capacity
                assistance = assistance + events.estimate
              } else {
                revenue = revenue + events.price * events.assistance;
                capacity = capacity + events.capacity;
                assistance = assistance + events.assistance;
              }
            }
          }
          tabla += `<tr>
          <td>${categorias2}</td>
          <td>$${revenue.toFixed(0)}</td>
          <td>${((assistance * 100) / capacity).toFixed(0)}%</td>
          </tr>`;
        }
        return tabla
      }
      terceraTabla.innerHTML=CreatePast(pastEvents,opciones)
      function  CreatePast(pastEvents, opciones) {
        let tabla = "";
        for (let i = 0; i < opciones.length; i++) {
          let categorias2 = opciones[i];
          let revenue = 0;
          let capacity = 0;
          let assistance = 0;
          for (const event of pastEvents) {
            if (categorias2 == event.category) {
              if (event.assistance === undefined) {
                revenue = revenue + event.price * event.estimate;
                capacity = capacity + event.capacity;
                assistance = assistance + event.estimate;
              } else {
                revenue = revenue + event.price * event.assistance;
                capacity = capacity + event.capacity;
                assistance = assistance + event.assistance;
              }
            }
          }
          tabla += `<tr>
                    <td>${categorias2}</td>
                    <td>$${revenue.toFixed(0)}</td>
                    <td>${((assistance * 100) / capacity).toFixed(0)}%</td>
                  </tr>`;
        }
        return tabla;
      }

    })
    .catch(error => console.log(error.message))
}
TraerDatos()

