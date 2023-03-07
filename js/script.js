import { data } from "./data.js"

data.events.forEach((element) => {
	//Fechas totales
	let Tarjetas = document.getElementById("Events-Home")
	if (Tarjetas != null) {
		Tarjetas.insertAdjacentHTML(
			"beforeend",
			`
        <div class="d-inline-block mt-2 ms-2 card ${element.category}">
        <img src="${element.image}" class="card-img-top" alt="${element.name}">
        <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.description}</p>
            <div class="d-flex">
                <a type="button" class="btn btn-primary" href="./details.html">
                Learn more
                </a>
                <p class="ms-3 py-2 text-center d-block my-auto bg-success rounded w-25 text-light">${element.price}$</p>
            </div>
        </div>
        </div> 
        `
		)
	}
})

data.events.forEach((element) => {
	//Fechas proximas
	let Tarjetas = document.getElementById("Events-Upcoming")
	if (Tarjetas != null) {
		if (data.currentDate < element.date) {
			Tarjetas.insertAdjacentHTML(
                "beforeend",
                `
            <div class="d-inline-block mt-2 ms-2 card ${element.category}">
            <img src="${element.image}" class="card-img-top" alt="${element.name}">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <div class="d-flex">
                    <a type="button" class="btn btn-primary" href="./details.html">
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
})

data.events.forEach((element) => {
	//Fechas pasadas
	let Tarjetas = document.getElementById("Events-Past")
	if (Tarjetas != null) {
		if (data.currentDate > element.date) {
			Tarjetas.insertAdjacentHTML(
                "beforeend",
                `
            <div class="d-inline-block mt-2 ms-2 card ${element.category}">
            <img src="${element.image}" class="card-img-top" alt="${element.name}">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <div class="d-flex">
                    <a type="button" class="btn btn-primary" href="./details.html">
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
})

//Filtrado
const elementos = document.querySelectorAll(".card")
const filtros = document.querySelectorAll(".filtro")

function filtrar() {
	elementos.forEach((elemento) => {
		let mostrar = true
		filtros.forEach((filtro) => {
			const valorFiltro = filtro.dataset.valor
			if (filtro.checked) {
				if (!elemento.classList.contains(valorFiltro)) {
					mostrar = false
				}
			}
		})
		elemento.style.display = mostrar
			? elemento.style.setProperty("display", "block", "important")
			: elemento.style.setProperty("display", "none", "important")
	})
}

filtros.forEach((filtro) => {
	filtro.addEventListener("change", filtrar)
})
