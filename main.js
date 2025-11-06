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

const caja = { x: 2, y: 5 };
caja.j = 3;
console.log(caja);

Object.seal(caja);

caja.y += 3;
caja.h = 1;
console.log(caja);

console.log("(14)=====================================================(14)");

console.log(gato.hasOwnProperty("maullar"));
console.log(gato.hasOwnProperty("sonido"));

console.log("(15)=====================================================(15)");

const numeros = new Set([1, 2, 2, 3, 4]);
console.log(numeros);
numeros.delete(3);
console.log(numeros);
console.log(numeros.has(4));

console.log("(16)=====================================================(16)");

numeros.add(5);
console.log([...numeros]);

console.log("(17)=====================================================(17)");

const ws = new WeakSet();

const obj1 = { nombre: "A" };
const obj2 = { nombre: "B" };
ws.add(obj1);
ws.add(obj2);

console.log(ws);

console.log("(18)=====================================================(18)");

const animalsMap = new Map();

animalsMap.set("perro", "mamífero");
animalsMap.set("Gato", "mamífero");
animalsMap.set("Leon", "mamífero");

console.log(animalsMap);
console.log("El tamaño del map es de ", animalsMap.size);

console.log("(19)=====================================================(19)");

const numbersMap = new Map();

numbersMap.set({ a: 1 }, "Alberto");
numbersMap.set({ a: 2 }, "Pedro");
numbersMap.set({ a: 3 }, "Antonio");

console.log(numbersMap);

console.log("(20)=====================================================(20)");

const wm = new WeakMap();

const usuario = { nombre: "Víctor" };

wm.set(usuario, "abc123");

console.log("(21)=====================================================(21)");

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const combinados = [...arr1, ...arr2, ...arr3];

console.log(combinados);

console.log("(22)=====================================================(22)");

const arr22 = [10, 20, 30, 40];

const [m, n, ...resto] = arr22;

console.log(m);
console.log(n);
console.log(resto);

console.log("(23)=====================================================(23)");

const arr23 = [1, [2, [3, [4]]]];

console.log(arr23.flat(3));

console.log("(24)=====================================================(24)");

const arr24 = [2, 5, 8];

const arr24div = arr24.flatMap((n) => [n, n * 2]);

console.log(arr24div);

console.log("(25)=====================================================(25)");

const numbers25Map = new Map();
numbers25Map.set({ a: 1 }, "Alioli");
numbers25Map.set({ a: 2 }, "Mayonesa");
numbers25Map.set({ a: 3 }, "Ketchup");

const map25 = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

for (const [k, v] of numbers25Map) {
  console.log(k, v);
}

for (const [k, v] of map25) {
  console.log(k, v * 2);
}

console.log("(26)=====================================================(26)");

let countersum = 0;
function counter() {
  countersum++;
  console.log(countersum);
  if (countersum >= 5) {
    clearInterval(myinterval);
  }
}
const myinterval = setInterval(() => {
  counter();
}, 1000);

console.log("(27)=====================================================(27)");

const mySetTimeout = setTimeout(() => {
  console.log("¡Hola!");
}, 3000);

clearTimeout(mySetTimeout);

console.log("(28)=====================================================(28)");

// const sayHello = () => {
//   console.log("Hello");
//   removeaddEventListener();
// };

// document.addEventListener("click", sayHello);

// function removeaddEventListener() {
//   document.removeEventListener("click", sayHello);
// }

// function sayHello(){
//   console.log("Hello");
//   removeaddEventListener();
// }

console.log("(29)=====================================================(29)");

const exercise29 = () => {
  try {
    const ex29text = "Hola";
    const ex29num = Number(ex29text);
    if (isNaN(ex29num))
      throw new Error("No se puede convertir a un numero un texto");
  } catch (error) {
    console.error(error);
  }
};

exercise29();

console.log("(30)=====================================================(30)");

class ProductoError extends Error {
  constructor(msj) {
    super(msj);
    this.name = "ProductoError";
  }
}

const validarPrecio = (precio) => {
  if (precio < 0)
    throw new ProductoError("El precio no puede ser inferior a 0");
};

try {
  validarPrecio(-1);
} catch (error) {
  if (error instanceof ProductoError) {
    console.error(`Error en el precio: | ${error.message} |`);
  } else {
    console.error(`El error no está en el precio: ${error.message}`);
  }
}
console.log("(31)=====================================================(31)");

function abrirAchivo(nombre) {
  if (!nombre) {
    throw new Error("¡Debes introducir el nombre del archivo!");
  }
}

try {
  abrirAchivo("");
} catch (error) {
  console.error(error.message);
}

console.log("(32)=====================================================(32)");

function exercise32(n) {
  if (n < 5) {
    throw new Error("¡El número debe ser mayor de 5!");
  }
  console.log("El número es mayor de 5");
}

try {
  exercise32(2);
} catch (error) {
  console.error(error.message);
} finally {
  console.log(`El proceso está finalizado`);
}

console.log("(33)=====================================================(33)");

try {
  throw new Error("Algo salió mal");
} catch (error) {
  console.log(error.name, error.message);
}

console.log("(34)=====================================================(34)");

const cargarDatos = (callback, tiempo) => {
  //Callback es el parametro funciónQuePaso, que dentro pues le paso el string
  setTimeout(() => {
    callback("Datos cargados");
  }, tiempo * 1000);
};

const funcionQuePaso = (resultado) => console.log(resultado);

function funcionquepaso1(resultado) {
  console.log(resultado);
}

cargarDatos(funcionQuePaso, 2);

// cargarDatos((resultado) => console.log(resultado),2);

console.log("(35)=====================================================(35)");

const promesa25 = new Promise((resolve, reject) => {
  const isGood = true;
  if (isGood) setTimeout(() => resolve("Promesa lista"), 150);
  else reject("Promesa no lista");
});

promesa25.then((res) => console.log(res)).catch((error) => console.log(error));

console.log("(36)=====================================================(36)");

let n26 = 7;
const promesa26failed = new Promise((resolve, reject) => {
  if (n26 < 5) resolve(`${n26} es menor que 5`);
  else reject(`${n26} es mayor que 5 | Está mal |`);
});

promesa26failed
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

console.log("(37)=====================================================(37)");

const espera = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

const functionAEsperar = async (tiempo) => {
  try {
    console.log("¡Ha comenzado!");
    await espera(tiempo * 1000);
    console.log("!Proceso terminado!");
  } catch (error) {
    console.log("No ha funcionado", error);
  }
};

functionAEsperar(3);
console.log("(37)=====================================================(37)");

const asyncAwaitPromise = new Promise((resolve, reject) => {
  const sucess = true;
  if (sucess) {
    setTimeout(() => resolve("Terminado"), 2000);
  } else reject("No terminado");
});

async function getPromiseResponse() {
  try {
    const response = await asyncAwaitPromise;
    if (!response) throw new Error("Promesa fallida");
    console.log("Respuesta a la promesa asíncrona", response);
  } catch (error) {
    console.log("El fallo: ", error);
  }
}
getPromiseResponse();
