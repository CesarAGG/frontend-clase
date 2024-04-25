const carros = [
    {
        id: 1,
        marca: "Seat",
        modelo: "Fr",
        anio: "2018",
        nombre: "Leon",
        cliente: {
            nombre: "Cesarr",
            apellido: "Guerra"
        }
    }, {
        id: 2,
        marca: "Seat",
        modelo: "Excelence",
        anio: "2018",
        nombre: "Arona",
        cliente: {
            nombre: "Cesar",
            apellido: "Guerra"
        }
    }, {
        id: 3,
        marca: "Cupra",
        modelo: "Cupra",
        anio: "2018",
        nombre: "Ateca",
        cliente: {
            nombre: "Cesar",
            apellido: "Guerra"
        }
    }, {
        id: 4,
        marca: "Cupra",
        modelo: "Cupra",
        anio: "2018",
        nombre: "Formentor",
        cliente: {
            nombre: "Cesar",
            apellido: "Guerra"
        }
    }, {
        id: 5,
        marca: "Seat",
        modelo: "Electrico",
        anio: "2018",
        nombre: "Moto",
        cliente: {
            nombre: "Cesar",
            apellido: "Guerra"
        }
    }
]

const carroPorNombre = nombre => carros.find(e => e.cliente.nombre == nombre);

export {
    carros,
    carroPorNombre
}
