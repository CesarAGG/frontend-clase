const carro = {
  id: 1,
  nombre: "LaFerrari",
  date: new Date(),
  marca: {
    id: 1,
    nombre: "Ferrari",
    ubicacion: "Europa",
    edad: 100
  },
  inventarios: [
    {
      id: 1,
      color: "Azul",
      cantidad: 5,
      precio: 11000000
    },
    {
      id: 2,
      color: "Blanco",
      cantidad: 2,
      precio: 10000000
    },
    {
      id: 3,
      color: "Amarillo",
      cantidad: 5,
      precio: 11500000
    }
  ],
  totalInventario: function () {
    let total = 0;
    this.inventarios.forEach(inventario => {
      total = total + inventario.precio;
    });
    return total;
  },
  costo: 10000000,
  saludo: function () {
    return `Hola ${this.marca.nombre} ${this.nombre}`;
  }
}

// carro.nombre = "F40";
carro.costo = 15000000;
console.log(carro);

const salu = carro.saludo();
console.log(salu);
console.log(carro.totalInventario());

const carro2 = { ...carro };

const valida = carro2 === carro;

console.log(valida);

carro2.id = 20;
console.log(carro.id);
console.log(carro2.id);
