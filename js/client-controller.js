import { clientServices } from "./client-service.js";

const crearNuevaLinea = (img,img2,img3,nombreProducto,precio,descripcion,id) => {

    const linea = document.createElement("div")

    const contenido = `
    <div class="card" style="width: 18rem">
                        <div id="carouselExampleDark${id}" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark${id}" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark${id}" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark${id}" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="${img}" class="d-block w-100"
                                        alt="..." />
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="${img2}" class="d-block w-100"
                                        alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="${img3}" class="d-block w-100"
                                        alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark${id}"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previo</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark${id}"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Siguiente</span>
                            </button>
                        </div>
                        <div class="card-body producto-cuerpo">
                            <h5 class="card-title producto-cuerpo__titulo">
                                ${nombreProducto}
                            </h5>
                            <p class="card-text producto-cuerpo__precio">$${precio}</p>
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary botonProductos" data-bs-toggle="modal"
                                data-bs-target="#exampleModal${id}">
                                Ver Producto
                            </button>
                            <button class="btn btn-danger botonProductos" name="botonEliminar" type="button" id="${id}">Eliminar</button>
                            
                            <button class="btn btn-dark botonProductos" name="botonEditar" type="button" id="${id}">Editar </button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">${nombreProducto}</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <img src="${img}" class="d-block w-100"
                                                alt="..." />
                                                ${descripcion}
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-success"
                                                data-bs-dismiss="modal">Comprar producto</button>
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `
    linea.innerHTML = contenido

    //ELIMINAR PRODUCTO
    const btn = linea.querySelector('[name="botonEliminar"]');
    btn.addEventListener("click", () => {
        const id = btn.id
        clientServices.eliminarProducto(id).then( (respuesta) => {
            console.log(respuesta)
        }).catch((err) => alert("Ocurrio un error"));
    });

    return linea

}

const table = document.querySelector("[data-list]");

clientServices.mostrarProductos().then((data) => {
    data.forEach(({img,img2,img3,nombreProducto,precio,descripcion,id}) => {
        const nuevaLinea = crearNuevaLinea(img,img2,img3,nombreProducto,precio,descripcion,id)
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrio un error no cargan los productos"));