import { data } from "./data.js"

let bodyInsert = document.getElementById("bodyInsert")

function InsertarElementos(element){
    if (bodyInsert != null) {
		bodyInsert.insertAdjacentHTML(
			"beforeend",
			`
        <div class="d-inline-block mt-2 ms-2 card ${element.category.toLowerCase()} ${element._id}">
        <img src="${element.image}" class="card-img-top" alt="${element.name}">
        <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text description">${element.description}</p>
            <div class="d-flex">
                <a type="button" class="btn btn-primary" href="./details.html?id=${element._id}">
                Learn more
                </a>
                <p class="ms-3 py-2 text-center d-block my-auto bg-success rounded w-25 text-light">${element.price}$</p>
            </div>
        </div>
        </div>
        `
		)
	}
}
if(window.location.href.includes('/index.html')){
    data.events.forEach((element)=>InsertarElementos(element))
}else if(window.location.href.includes('/pEvents.html')){
    data.events.forEach((element)=>{ if(element.date<data.currentDate){InsertarElementos(element)} })
}else if(window.location.href.includes('/uEvents.html')){
    data.events.forEach((element)=>{ if(element.date>data.currentDate){InsertarElementos(element)} })
}

//Filtrado
const Tarjetas = document.querySelectorAll(".card")
const filtros = document.querySelectorAll(".filtro")
let filtrosActivos=[]

function filtrar() {
	Tarjetas.forEach((elemento) => {
        //Se ocultan todos los elementos
		visibility(elemento,'ocultar')
		filtros.forEach((filtro) => {
            //Si el filtro esta activo
			if (filtro.checked) {
                //Y no esta colocado en el array de filtros activos
				if (!filtrosActivos.includes(filtro.dataset.valor)) {
                    //Lo añade
					filtrosActivos.push(filtro.dataset.valor)
				}
                //Todos los elementos que cumplan con el filtro se muestran
				for (let i = 0; i <= filtrosActivos.length - 1; i++) {
					if (elemento.classList.contains(filtrosActivos[i])) {
                        visibility(elemento,'mostrar')
					}
				}
            //Si el filtro no esta activo
			}else{
                //Si estaba activado y se desactivo
				if (filtrosActivos.includes(filtro.dataset.valor)) {
                    //Se quita
					filtrosActivos = filtrosActivos.filter(
						(mod) => mod != filtro.dataset.valor
					)
				}
			}
		})
        //Si no hay ningun filtro activo se muestran todos
        if(filtrosActivos.length==0){
            visibility(elemento,'ocultar')
        }
	})
}

//Listener de evento
filtros.forEach((filtro) => {
    filtro.addEventListener("change", filtrar)
})

// Filtrado de texto
const search = document.querySelector("#Search")

//Listener de texto
search.addEventListener("keyup", ()=>{
    //Cantidad de tarjetas ocultas
    let tarjetasOcultas = 0
    //Si la barra de busqueda no esta vacia
    if(search.value!=''){
        Tarjetas.forEach((Tarjeta)=>{
            //Se guarda toda la informacion de la tarjeta
            let ClasesTarjeta=Tarjeta.textContent.toLowerCase()
            
            if(ClasesTarjeta.includes(search.value.toLowerCase())){
                visibility(Tarjeta,'mostrar')
                notFound(false)
            }else{
                visibility(Tarjeta,'ocultar')
                tarjetasOcultas +=1
            }
            if(tarjetasOcultas==14){
                notFound(true)
            }
        })
    //Si la barra de busqueda esta vacia
    }else{
        Tarjetas.forEach((Tarjeta)=>{
            visibility(Tarjeta,'mostrar')
            notFound(false)
        })
    }
})

function notFound(cantidadDeCarteles){
    let cartel = document.getElementById("NotFound");
    let bloqueMain = document.querySelector("main")
    if(cantidadDeCarteles==1){
        if(cartel==null){
            bloqueMain.insertAdjacentHTML(
                "beforeend",
                `
                    <section id="NotFound" class="m-auto text-center w-50 shadow rounded p-3">
                        <h2 class="fs-2">No events found<h2>
                        <p class="fs-5 text-muted">Try searching this instead<p>
                        <p class="fs-6 text-muted"><b>"batman"</b><p>
                    </section>
                `
            )
        }
    }else if(cantidadDeCarteles==0){
        if(cartel!=null){
            cartel.remove()
            cantidadDeCarteles=0
        }
    }
}

//Oculta o muestra los elementos
function visibility(elemento,view){
    if(view=='mostrar'){
        elemento.style.setProperty("display", "block", "important")
    }else if(view=='ocultar'){
        elemento.style.setProperty("display", "none", "important")
    }
}
