// string, boolean, number

let x: number = 10;
x = 16;
console.log(x);

// inferencia x annotation

let y = 12;

let z: number = 12;

// tipos basicos

let fistName: string = "Jorge";
let age: number = 30;
const isAdmin: boolean = true;

console.log(typeof fistName);

fistName = "João";

console.log(fistName);

const myNumbers: number[] = [1, 2, 3, 4, 5, 6];

console.log(myNumbers);
console.log(myNumbers.length);

console.log(fistName.toUpperCase);

console.log(myNumbers.splice(0, 3));

// tuplas tuple

let myTuple: [number, string, string[]] = [25, "Jorge", ["a", "b", "c"]];

// object literals -> {prop: value}

const user: { name: string; age: number; isAdmin: boolean } = {
  name: "Jorge",
  age: 30,
  isAdmin: true,
};

console.log(user);

console.log(user.name);

// user.job = 'Developer';

// any

let a: any = 0;

a = "Jorge";
a = true;
a = 10;
a = ["a", "b", "c"];

// union type

let id: string | number = 10;

id = "Leonardo";

// type alias

type myIdtype = number | string;

const userId: myIdtype = 10;
const productId: myIdtype = "10";
const shirId: myIdtype = 10;

// enum
// tamanho de roupas (size: MediaSource, size: pequeno)

enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  name: "Camisa Polo",
  price: 20,
  size: Size.G,
};

console.log(camisa);

// literal types
let teste: "Jorge" | null;

// teste = 'Outro';
teste = "Jorge";
teste = null;

// funções

function soma(x: number, y: number): number {
  return x + y;
}

const result = soma(2, 2);
// console.log(soma("12", true))

function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHelloTo("Jorge"));

function logger(msg: string): void {
  console.log(msg);
}

logger("Teste");

function greeting(name: string, greet?: string) {
  console.log(`Olá ${greet} ${name}`);
}

greeting("Jorge");

function greeting2(name: string, greet?: string) {
  if (greet) {
    console.log(`${greet} ${name}`);
  } else {
    console.log(`Olá ${name}`);
  }
}

greeting2("Jorge");

greeting2("Jorge", "Bom dia");

// interfaces

interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 10, n2: 20 }));

function multiplyNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

console.log(multiplyNumbers({ n1: 10, n2: 20 }));

const someNumbers: MathFunctionParams = {
  n1: 10,
  n2: 20,
};

console.log(sumNumbers(someNumbers));

// narrowing
// checagem de tipos

function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`É um número ${info}`);
    return;
  }
  console.log(`É um boolean ${info}`);
}

doSomething(10);
doSomething(true);

// generics

function showArraysItems<T>(arr: T[]) {
  arr.forEach((item) => console.log(`Item: ${item})`));
}

const a1 = [1, 2, 3, 4, 5];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

// classes

class User {
  name;
  age;
  isAdmin;
  role;

  constructor(name: string, age: number, isAdmin: boolean, role: string) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
    this.role = role;
  }
  // metodos
  showUserName() {
    console.log(`O nome do usuário é ${this.name}`);
  }
  showUserAge() {
    console.log(`A idade do usuário é ${this.age}`);
  }
  showUserIsAdmin() {
    console.log(`O usuário é admin? ${this.isAdmin}`);
  }
  showUserRole(canShowRole: boolean) {
    if (canShowRole) {
      console.log(`O usuário é ${this.role}`);
      return;
    }
    console.log(`Acesso Restrito`);
  }
}

const user1 = new User("Jorge", 30, true, "Admin");

// console.log(user1);

const user2 = new User("João", 20, false, "User");
user2.showUserRole(false);

// interfaces em classes

interface Ivehicle {
  brand: string;
  year: number;
  showBrand(): void;
}

class Car implements Ivehicle {
  brand;
  year;
  wheels;

  constructor(brand: string, year: number, wheels: number) {
    this.brand = brand;
    this.year = year;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`Marca do carro é: ${this.brand}`);
  }
}

const car1 = new Car("Ford", 2020, 4);

car1.showBrand();

// herança

class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, year: number, engine: string) {
    super(brand, year, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2020, "V8");
console.log(a4);
a4.showBrand();

// decorators

// construtor decoration
function BaseParameters() {
    return function<T extends {new (...args: any[]): {}}>(constructor:T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();

        }
    }
  
}

@BaseParameters()
class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");
console.log(sam);


// Map
const meuMap = new Map();

meuMap.set("chave1", "Valor1");
meuMap.set("chave2", "Valor2");
meuMap.set("chave3", "Valor3");
meuMap.set("chave4", "Valor4");

console.log(meuMap);

const Valor1 = meuMap.get("chave1");
console.log(Valor1);

meuMap.forEach(function(valor, chave) {
  console.log(chave,valor);
})

meuMap.forEach((valor, chave) => console.log(chave,valor))

for (const [chave, valor] of meuMap){
  console.log(chave, valor);
}

meuMap.delete("chave1");

console.log(meuMap);

const temChave1 = meuMap.has("chave2");
console.log(temChave1);

const meuMap2 = new Map<string, number>();

meuMap2.set("chave1", 1);
meuMap2.set("chave2", 2);
meuMap2.set("chave3", 3);
meuMap2.set("chave4", 4);

console.log(meuMap2);

type MeuTipo = {
  name: string;
  idade: number;
};

const meuMap3 = new Map<string, MeuTipo>();

meuMap3.set("chave1", { name: "Jorge", idade: 30 });
meuMap3.set("chave2", { name: "João", idade: 20 });
meuMap3.set("chave3", { name: "Maria", idade: 40 });

console.log(meuMap3);





