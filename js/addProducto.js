export const addProducto = (evento) => {
    const list = document.querySelector("[data-list]");
    const task = createProducto(evento);
    list.appendChild(task);
}

const createProducto = (evento) => {

    evento.preventDefault();


    const input = document.querySelector("[data-form-input]");
    const value = input.value;

    console.log(value);

}
