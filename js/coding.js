import { valida } from "../js/validacion.js";
import { addProducto } from "../js/addProducto.js";

const inputs = document.querySelectorAll("input");

inputs.forEach( input =>{
    input.addEventListener("blur", (input) =>{
        valida(input.target);
    });
});


const btn = document.querySelectorAll("[data-form-btn]")

btn.addEventListener("click", addProducto);