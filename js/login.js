import { clientServices } from "./client-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    console.log(nombre," - ",email);

    console.log(clientServices.login())

    clientServices.login().then((data) => {
        data.forEach(element => {

            if(nombre === element.nombre && email === element.email){
                window.location.href = "https://tomasrivetta.github.io/Challenge-4-Ecommerce/html/productos.html"
            }
            else{
                alert("Buscando cuenta...")
                window.location.href = "https://tomasrivetta.github.io/Challenge-4-Ecommerce/index.html"
            }
            // console.log(element.nombre)
            // console.log(element.email)

        });
        // console.log(data)
    }).catch((error) => alert("Ocurrio un error en la base de datos")); 
});