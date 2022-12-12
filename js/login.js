import { clientServices } from "./client-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    console.log(nombre," - ",email);

    clientServices.login(nombre,email).then(() => {
        if(nombre === login.nombre1 && email === login.email ){
            window.location.href = "https://tomasrivetta.github.io/Challenge-4-Ecommerce/html/productos.html"
        }
        else{
            alert("Error en nombre o mail");
        }
    }).catch(err => console.log(err));

});