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
		elemento.classList.add("Ocultar")
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
						elemento.classList.remove("Ocultar")
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
            elemento.classList.remove("Ocultar")
        }
	})
}

//Listener de evento
filtros.forEach((filtro) => {
    filtro.addEventListener("change", filtrar)
})


const search = document.querySelector("#Search")
search.addEventListener("keyup", ()=>{
    Tarjetas.forEach((Tarjeta)=>{
        let ClasesTarjeta=Tarjeta.textContent.toLowerCase();
        if(ClasesTarjeta.includes(search.value.toLowerCase())||filtrosActivos.includes(search.value.toLowerCase()))
        {Tarjeta.style.setProperty("display", "block", "important")
        }else{Tarjeta.style.setProperty("display", "none", "important")}
    })

})

