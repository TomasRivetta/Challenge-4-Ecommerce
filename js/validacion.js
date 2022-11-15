//VALIDADOR DE SI ES MAYOR DE EDAD O NO
export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }
    else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)

    }
}

const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]


const mensajesDeError = {
    nombre:{
        valueMissing:"El campo nombre no puede estar vacio"
    },
    email:{
        valueMissing:"El campo correo no puede estar vacio",
        typeMismatch:"El correo no es valido"
    },
    password:{
        valueMissing:"El campo contraseña no puede estar vacio",
        patternMismatch: "Al menoz 6 caracteres, maximo 12, debe contener una letra Minuscula, una letra Mayuscula, un numero y no puede contener caracteres especiales",
    },
    nacimiento:{
        valueMissing:"Este campo no puede estar vacio",
        customError:"Debes tener 18 años de edad"
    },
    numero:{
        valueMissing:"El campo N°Telefono no puede estar vacio",
        patternMismatch: "El formato requerido es xxxxxxxxxx 10 numeros",
    },
    direccion:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 a 40 caracteres",
    },
    ciudad:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres",
    },
    estado:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres",
    },
}

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeError.forEach(error => {
        if(input.validity[error]){
            //console.log(tipoDeInput,error)
            //console.log(input.validity[error])
            //console.log(mensajesDeError[tipoDeInput][error])
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje
}

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = ""
    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener 18 años de edad";
    }
    input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
        );
        return diferenciaFechas <=  fechaActual;
    //console.log(diferenciaFechas <=  fechaActual);
    //console.log(fecha,"-----", fechaActual)
}