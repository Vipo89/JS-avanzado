console.log("(1)=====================================================(1)");
// function discount(price) {
//   return price * 0.9;
// }

const discount = (price) => price * 0.9;

console.log(discount(100));

console.log("(2)=====================================================(2)");

const persona = {
  nombre: "Lucía",
  edad: 30,
};

const nuevapersona = { ...persona, nombre: "Lucía Pérez" };

console.log(persona);
console.log(nuevapersona);

console.log("(3)=====================================================(3)");

// function operar(fn, a, b) {
//   return fn(a, b);
// }

// function suma (n1,n2){
//     return n1+n2
// }
// function resta (n1,n2){
//     return n1-n2;
// }

// function multiplicar(n1, n2) {
//   return n1 * n2;
// }

// console.log(`Suma: ${operar(resta,2,5)}`);
// console.log(`Resta: ${operar(resta,2,5)}`);
// console.log(`Multiplicación: ${operar(resta,2,5)}`);

const operar = (fn, a, b) => fn(a, b);

const suma = (n1, n2) => n1 + n2;
const resta = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;

let x = 2;

let y = 5;

console.log(`Suma: ${operar(suma, x, y)}`);
console.log(`Resta: ${operar(resta, x, y)}`);
console.log(`Multiplicación: ${operar(multiplicar, x, y)}`);

console.log("(4)=====================================================(4)");

const doble = (x) => x * 2;

const incrementar = (x) => x + 1;

const dividirLaMitad = (x) => x / 2;

console.log(incrementar(doble(5)));

console.log("(5)=====================================================(5)");

class Coche {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  arrancar() {
    console.log(`El coche ${this.marca}`);
  }

  get info() {
    return `${this.marca} ${this.modelo}`;
  }
  static tipos() {
    console.log("Vehículo terrestre");
  }
}

const myCar = new Coche("Renault", "Megane");
myCar.arrancar();

console.log("(6)=====================================================(6)");
//A los métodos estáticos sólo se les puede llamar desde la clase
Coche.tipos();

console.log("(7)=====================================================(7)");

class Electrico extends Coche {
  constructor(marca, modelo, bateria) {
    super(marca, modelo);
    this.bateria = bateria;
  }
  arrancar() {
    console.log(
      `El coche ${this.marca} tiene una batería de ${this.bateria} kWh`
    );
  }
}

const myTesla = new Electrico("Tesla", "Y", 75);

myTesla.arrancar();

console.log("(8)=====================================================(8)");

console.log(myCar.info);
console.log(myTesla.info);

console.log("(9)=====================================================(9)");

class Cajafuerte {
  #codigoSecreto = 234042042304224423;

  get codigo() {
    return this.#codigoSecreto;
  }
}

const box = new Cajafuerte();

console.log(box.codigo);

console.log("(10)=====================================================(10)");

const volador = {
  volar() {
    console.log("¡Estoy volando!");
  },
};

const nadador = {
  nadar() {
    console.log("Estoy nadando");
  },
};

function crearSuperMascota(nombre) {
  return { nombre, ...volador, ...nadador };
}

const miMascota = crearSuperMascota("Ankor");

miMascota.volar();
miMascota.nadar();

console.log("(11)=====================================================(11)");

const animal = {
  sonido() {
    console.log("Hace un sonido");
  },
};

const gato = Object.create(animal);

gato.maullar = () => {
  console.log("Miau");
};

gato.sonido();
gato.maullar();

console.log("(12)=====================================================(12)");

const a = { a: 1, b: 2 };
const b = { c: 3, d: 4 };
const c = { e: 5, f: 6 };
const combinado = Object.assign({}, a, b, c);
console.log(combinado);

console.log("(13)=====================================================(13)");

const caja = {x:2,y:5}
caja.j = 3
console.log(caja);

Object.seal(caja)

caja.y += 3;
caja.h = 1;
console.log(caja);

console.log("(14)=====================================================(14)");

console.log(gato.hasOwnProperty("maullar"));
console.log(gato.hasOwnProperty("sonido"));

  