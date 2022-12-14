import { clientServices } from "./client-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    console.log(nombre," - ",email);

    clientServices.registroCliente().then((data) => {
        data.forEach(element => {
            
            if(email !== element.email){
                clientServices.crearCliente(nombre,email).then(() => {
                    window.location.href = "https://tomasrivetta.github.io/Challenge-4-Ecommerce/html/productos.html"
                }).catch(err => console.log(err));
            }
            else{
                alert("Ya existe una cuenta con ese nombre o email");
                window.location.href = "https://tomasrivetta.github.io/Challenge-4-Ecommerce/html/registro.html"
            }

        });
    })
});