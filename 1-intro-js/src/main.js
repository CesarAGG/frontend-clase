import { carros, carroPorNombre } from './data/carros'

console.log(carros);

const marcasCarros = carros.map(e => e.marca);

const nombresCarros = carros.map(e => e.cliente.nombre);

console.log(marcasCarros);
console.log(nombresCarros);

console.log("Carro por nombre: ");
console.log(carroPorNombre("Cesar"));

const carroFilter = carros.filter(e => e.id != 1);

console.log(carroFilter);

const carroSome = carros.some(e => e.cliente.nombre == "Cessar");

console.log(carroSome);
