const productos = [
    { nombre: "Yerba", precio: 500, id: "1", img: "../img/yerba.jpg", idCat: "2" },
    { nombre: "Fideos", precio: 180, id: "2", img: "../img/fideos.jpg", idCat: "2" },
    { nombre: "Arroz", precio: 200, id: "3", img: "../img/arroz.jpg", idCat: "3" },
    { nombre: "Aceite", precio: 400, id: "4", img: "../img/aceite.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}