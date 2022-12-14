

const login = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const mostrarProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const crearCliente = (nombre,email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            nombre,email, id:uuid.v4()
        })
    })
}

const crearProducto = (img,img2,img3,categoria,nombreProducto,precio,descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            img,img2,img3,categoria,nombreProducto,precio,descripcion, id:uuid.v4()
        })
    })
}

const eliminarProducto = (id) => {

    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE",
    });
    
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then(respuesta => respuesta.json())
};

const actualizarProducto = (img,img2,img3,categoria,nombreProducto,precio,descripcion,id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            img,img2,img3,categoria,nombreProducto,precio,descripcion
        }),
    }).then( (respuesta) => respuesta).catch((err) => console.log(err))
}


export const clientServices = {
    crearCliente,
    crearProducto,
    mostrarProductos,
    eliminarProducto,
    login,
    detalleProducto,
    actualizarProducto,
}