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

console.log(carros);

const marcasCarros = carros.map(e => e.marca);

const nombresCarros = carros.map(e => e.cliente.nombre);

console.log(marcasCarros);
console.log(nombresCarros);

const carroPorNombre = carros.find(e => e.cliente.nombre == "Cesar");

console.log(carroPorNombre);

const carroFilter = carros.filter(e => e.id != 1);

console.log(carroFilter);

const carroSome = carros.some(e => e.cliente.nombre == "Cessar");

console.log(carroSome);
