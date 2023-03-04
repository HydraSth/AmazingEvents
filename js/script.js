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
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${
					element._id
				}">
                Learn more
                </button>
                <p class="ms-3 py-2 text-center d-block my-auto bg-success rounded w-25 text-light">${
					element.price
				}$</p>
            </div>
            <div class="modal fade" id="${
				element._id
			}" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="p-3 text-bg-dark rounded-3 modal-title fs-5" >${
								element.name
							}</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex wrap justify-content-around">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8rem" viewBox="0 0 16 16">
                                    <path d="M4 4.85v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z"/>
                                    <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Z"/>
                                </svg>
                                <div class="d-flex flex-column">
                                    ${
										element.assistance == null
											? `<p><b>Estimate: </b>${element.estimate}</p>`
											: `<p><b>Assistance: </b>${element.assistance}</p>`
									}
                                    <p><b>Capacity: </b>${element.capacity}</p>
                                    <p><b>Category: </b>${element.category}</p>
                                    <p><b>Place: </b>${element.place}</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">Buy</button>
                        </div>
                    </div>
                </div>
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
            <img src="${element.image}" class="card-img-top" alt="${
					element.name
				}">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <div class="d-flex">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${
						element._id
					}">
                    Learn more
                    </button>
                    <p class="ms-3 py-2 text-center d-block my-auto bg-success rounded w-25 text-light">${
						element.price
					}$</p>
                </div>
                <div class="modal fade" id="${
					element._id
				}" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="p-3 text-bg-dark rounded-3 modal-title fs-5" >${
									element.name
								}</h2>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="d-flex wrap justify-content-around">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8rem" viewBox="0 0 16 16">
                                        <path d="M4 4.85v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z"/>
                                        <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Z"/>
                                    </svg>
                                    <div class="d-flex flex-column">
                                        ${
											element.assistance == null
												? `<p><b>Estimate: </b>${element.estimate}</p>`
												: `<p><b>Assistance: </b>${element.assistance}</p>`
										}
                                        <p><b>Capacity: </b>${
											element.capacity
										}</p>
                                        <p><b>Category: </b>${
											element.category
										}</p>
                                        <p><b>Place: </b>${element.place}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-success">Buy</button>
                            </div>
                        </div>
                    </div>
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
            <img src="${element.image}" class="card-img-top" alt="${
					element.name
				}">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <div class="d-flex">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${
						element._id
					}">
                    Learn more
                    </button>
                    <p class="ms-3 py-2 text-center d-block my-auto bg-success rounded w-25 text-light">${
						element.price
					}$</p>
                </div>
                <div class="modal fade" id="${
					element._id
				}" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="p-3 text-bg-dark rounded-3 modal-title fs-5" >${
									element.name
								}</h2>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="d-flex wrap justify-content-around">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8rem" viewBox="0 0 16 16">
                                        <path d="M4 4.85v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z"/>
                                        <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Z"/>
                                    </svg>
                                    <div class="d-flex flex-column">
                                        ${
											element.assistance == null
												? `<p><b>Estimate: </b>${element.estimate}</p>`
												: `<p><b>Assistance: </b>${element.assistance}</p>`
										}
                                        <p><b>Capacity: </b>${
											element.capacity
										}</p>
                                        <p><b>Category: </b>${
											element.category
										}</p>
                                        <p><b>Place: </b>${element.place}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-success">Buy</button>
                            </div>
                        </div>
                    </div>
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
