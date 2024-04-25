const carros = ["Ferrari", "Nissan GTR", "Porsche", "McLaren", "Mercedes GLC"];

carros.push("Mustang GT500", "Challenger", "Camaro");

// console.log(carros);

const num = [10, 5, 6, 12, 22];
num.push(332, 532, 545)

// console.log(num);

carros.forEach(carro => console.log(carro));

for (const carro of carros) {
  console.log(carro);
}

for (let i = 0; i < carros.length; i++) {
  const elem = carros[i]
  console.log(i + elem);
}
