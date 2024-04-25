const carros = [
    {
        marca: "Seat",
        modelo: "Fr",
        anio: "2018",
        nombre: "Leon",
        cliente: {
            nombre: "Cesar",
            apellido: "Guerra"
        }
    }, {
        marca: "Seat",
        modelo: "Exce;;emce",
        anio: "2018",
        nombre: "Arona",
        cliente: {
            nombre: "Cesar",
            apellido: "Guerra"
        }
    }, {
        marca: "Cupra",
        modelo: "Cupra",
        anio: "2018",
        nombre: "Ateca",
        cliente: {
            nombre: "Cesar",
            apellido: "Guerra"
        }
    }, {
        marca: "Cupra",
        modelo: "Cupra",
        anio: "2018",
        nombre: "Formentor",
        cliente: {
            nombre: "Cesar",
            apellido: "Guerra"
        }
    }, {
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

console.log(carros);

const marcasCarros = carros.map(e => e.marca);

const nombresCarros = carros.map(e => e.cliente.nombre);

console.log(marcasCarros);
console.log(nombresCarros);
