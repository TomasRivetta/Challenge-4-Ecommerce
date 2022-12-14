import { clientServices } from "./client-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    console.log(nombre," - ",email);

    clientServices.crearCliente(nombre,email).then(() => {
        window.location.href = "https://tomasrivetta.github.io/Challenge-4-Ecommerce/html/productos.html"
    }).catch(err => console.log(err));

});