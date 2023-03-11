import { data } from "./data.js"
const urlObject = new URL(window.location.href)
const idObjeto = urlObject.searchParams.get('id')

let bodyInsert = document.getElementById("Contenedor")

function InsertarElementos(id){
    if (bodyInsert != null) {
        data.events.forEach((event)=>{
            if(event._id==id){
                bodyInsert.insertAdjacentHTML("beforeend",`
                    <div class="m-auto d-flex flex-column w-50">
                        <div class="shadow rounded d-flex p-3">
                            <div class="w-25 mx-3 my-auto">
                                <img src="${event.image}" alt="Illustatrive image" class="w-100">
                            </div>
                            <section class="d-flex text-dark flex-column g-2">
                                <h2>${event.name}<span class="badge fs-6 ms-2 bg-secondary">${event.date}</span></h2>
                                <p>${event.description}</p>
                                <section>
                                    <i class="bi bi-cash-stack"></i>
                                    <p class="d-inline fw-bold">Price:</p>
                                    <p class="d-inline">${event.price}</p>
                                </section>
                                <section>
                                    <i class="bi bi-geo-alt-fill"></i>
                                    <p class="d-inline fw-bold">Location:</p>
                                    <p class="d-inline">${event.place}</p>
                                </section>
                                <section>
                                    <i class="bi d-inline bi-person-check-fill"></i>
                                    <p class="d-inline fw-bold">Capacity:</p>
                                    <p class="d-inline">${event.capacity}</p>
                                </section>
                                <section>
                                    <i class="bi bi-person-fill"></i>
                                    <p class="d-inline fw-bold">Estimate:</p>
                                    <p class="d-inline">${event.estimate!=null?event.estimate:event.assistance}</p>
                                </section>
                            </section>
                        </div>
                        <a class="btn btn-secondary mt-2 shadow" href="./index.html"><i class="bi bi-arrow-left-short"></i> Back Home</a>
                    </div>
                    `
                )
            }
        })
    }
}

InsertarElementos(idObjeto)