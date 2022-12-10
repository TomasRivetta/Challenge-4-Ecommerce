import { clientServices } from "./client-service.js";

const formulario = document.querySelector("[data-form]")

console.log(formulario)

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();


    const img = document.querySelector("[data-img]").value;
    const img2 = document.querySelector("[data-imgDos]").value;
    const img3 = document.querySelector("[data-imgTres]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombreProducto = document.querySelector("[data-form-input]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;


    console.log(categoria," - ",nombreProducto," - ",precio," - ",descripcion);

    clientServices.crearProducto(img,img2,img3,categoria,nombreProducto,precio,descripcion).then(() => {
        window.location.href = "/html/productos.html"
    }).catch(err => console.log(err));
});