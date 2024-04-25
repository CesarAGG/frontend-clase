const carros = ["Ferrari", "Nissan", "Porsche", "McLaren", "Mercedes"];

const carros2 = carros.concat("Mustang GT500", "Challenger", "Camaro");

const motos = ["Italika", "Chopper", "Ninja", "SuperSport"];

const tienda = [...carros, ...motos, "Rin 18"];
const tienda2 = motos.concat(carros).concat("Rin 18");

console.log(carros2);
console.log(tienda2);
