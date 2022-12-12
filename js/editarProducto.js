import { clientServices } from "./client-service.js";

const formulario = document.querySelector("[data-form]")

const obtenerInformacion = async () => {

    const url = new URL(window.location);

    const id = url.searchParams.get("id");

    // if(id === null){
    //     window.location.href = "../html/index.html";
    // }

    const img = document.querySelector("[data-img]");
    const img2 = document.querySelector("[data-imgDos]");
    const img3 = document.querySelector("[data-imgTres]");
    const categoria = document.querySelector("[data-categoria]");
    const nombreProducto = document.querySelector("[data-form-input]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    try{
        const productos = await clientServices.detalleProducto(id);

        if(productos.img && productos.img2 && productos.img3 && productos.categoria && productos.nombreProducto && productos.precio &&productos.descripcion){

            img.value = productos.img;
            img2.value = productos.img2;
            img3.value = productos.img3;
            categoria.value = productos.categoria;
            nombreProducto.value = productos.nombreProducto;
            precio.value = productos.precio;
            descripcion.value = productos.descripcion;

        }
        else{
            throw new Error();
        }
    }catch(error){
        window.location.href = "../index.html";
    }

};

obtenerInformacion();


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const img = document.querySelector("[data-img]").value;
    const img2 = document.querySelector("[data-imgDos]").value;
    const img3 = document.querySelector("[data-imgTres]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombreProducto = document.querySelector("[data-form-input]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    clientServices.actualizarProducto(img,img2,img3,categoria,nombreProducto,precio,descripcion,id).then(() => {
        window.location.href = "../html/productos.html";
    });
});