let person = new Object();

person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
person.sayName = function() {
    console.log(this.name);
};

let person = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName: function() {
    console.log(this.name);
  }
};

///////////////////////////////////////////////////

person.name = "Nicholas"
person.name // "Nicholas"

const variable = person.name
variable // "Nicholas"

person['name'] = "Nicholas"
person['name'] // "Nicholas"

const variable = person['name']
variable // "Nicholas"

////////////////////////////////////////////////

{ name, age, job, sayName } = person
name // "Nicholas"
age // 29
job // "Software Engineer"
sayName() // "Nicholas"

////////////////////////////////////////////

const name = "Nicholas"
const age = 29
const job = "Software Engineer"

let person = { name, age, job, sayName }

///////////////////////////////////////////////

var a = 1;
var b = 3;

[a, b] = [b, a];

/////////////////////////////////////////////////

object?.prop
object?.[prop]
object?.[prop]()
object?.first?.['second']

let x = 0
(null)?.[x++]
x // 0

/////////////////////////////////////////////

delete object.property
delete object['property']
delete object[index]
delete property

//////////////////////////////////////////////

const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    return this.log.at(-1)
  }
}

obj.latest // "c"

/////////////////////////////////////////////

const obj = { log: ['a', 'b', 'c'] }

Object.defineProperty(obj, 'latest', {
  get: function(){
    return this.log.at(-1)
  }
})

obj.latest // "c"

/////////////////////////////////////////////

const a = { a: 1 }
const b = { b: 2 }

const c = Object.assign(a, b)
const d = { ...a, ...b }
c // { a: 1, b: 2 }
d // { a: 1, b: 2 }

///////////////////////////////////////////////

const a = { child: { a: 1 } }
const child = a.child

Object.assign(a.child, { b: 2 })
a.child // { a: 1, b: 2 }
child // { a: 1, b: 2 }

a.child === child // true

a.child = {
  ...a.child,
  b: 2
}
a.child // { a: 1, b: 2 }
child // { a: 1 }

a.child === child // false

///////////////////////////////////////////////

const a = { x: 10 }
const b = { ...a }

a.x = 20
a // { x: 20 }
b // { x: 10 }

///////////////////////////////////////////////

const a = { x: { z: 10 } }
const b = { ...a }

a.x.z = 20
a.x // { z: 20 }
b.x // { z: 20 }

////////////////////////////////////////////////

const a = { x: { z: 10 } }
const b = structuredClone(a)

a.x.z = 20
a.x // { z: 20 }
b.x // { z: 10 }

const a = {}
a.itself = a

const b = structuredClone(a)

a.itself === a // true
b.itself === b // true

/////////////////////////////////////////////////

var obj = { a: 1, b: 2, c: 3 }

for (var prop in obj)
  console.log(obj[prop])

Object
  .keys(obj)
  .forEach((key) => console.log(obj[key]))

Object
  .getOwnPropertyNames(obj)
  .forEach((key) => console.log(obj[key]))

for (const [key, value] of Object.entries(obj))
  console.log(value)

///////////////////////////////////////////////////////

function Person() {
  this.sayHello = function() {
    console.log('Hello');
  };
}

let person_1 = new Person
let person_2 = new Person
person_1.sayName === person_2.sayName // false

//////////////////////////////////////////////

function Person() {}

Person.prototype.sayHello = function() {
  console.log('Hello');
};

let person_1 = new Person
let person_2 = new Person

person_1.sayName === person_2.sayName // true

/////////////////////////////////////////////////

const a = { name: 'a' }
const b = {}
// const b = Object.create(a)

b.__proto__ = a

b // {}
b.name // 'a'

//////////////////////////////////////////////////

function A(a) {
  this.a = a
}

A.prototype = {
  getA: function () {
    return this.a
  }
}

const obj = new A(10)
obj // { a: 10 }
obj.getA() // 10

//////////////////////////////////////

// объявление класса
class Person {}

// классовое выражение
const Person = class {}

////////////////////////////////////////

{
  function FunctionDeclaration() {}
  class ClassDeclaration {}
}

 // FunctionDeclaration() {}
console.log(FunctionDeclaration);
// ReferenceError: ClassDeclaration
// is not defined
console.log(ClassDeclaration);

//////////////////////////////////////////////////////////

let Person = class PersonСlass {
  identify() {
    console.log(Person.name, PersonСlass.name);
  }
}

let p = new Person();

p.identify(); // PersonСlass, PersonСlass

console.log(Person.name);// PersonСlass

// ReferenceError: PersonСlass is not defined
console.log(PersonСlass);

//////////////////////////////////////////

class Person {
  constructor(override) {
    this.foo = 'foo';
    if (override)
      return { bar: 'bar' };
  }
}

let p1 = new Person(),
  p2 = new Person(true);

p1 // Person{ foo: 'foo' }
p1 instanceof Person // true

p2 // { bar: 'bar' }
p2 instanceof Person // false

//////////////////////////////////////////////////

class Person {}

Person // class Person {}
typeof Person // function
Person.prototype // // { constructor: f() }
Person === Person.prototype.constructor // true

let p = new Person()
p instanceof Person // true

/////////////////////////////////////////////////////

class Person {}
let p1 = new Person()

p1.constructor === Person // true
p1 instanceof Person // true
p1 instanceof Person.constructor // false

let p2 = new Person.constructor()
p2.constructor === Person // false
p2 instanceof Person // false
p2 instanceof Person.constructor // true

/////////////////////////////////////////////////

let classList = [
  class {
    constructor(id) {
      this.id_ = id;
    }
  }
];

function createInstance(classDefinition, id) {
  return new classDefinition(id);
}

// экземпляр 3141
let foo = createInstance(classList[0], 3141);

let p = new class Foo {
  constructor(x) {
    this.x = x
  }
}('bar')

p // Foo { x: 'bar' }

////////////////////////////////////////////////////

class Person {
  constructor() {
    this.name = new String('Jack');
    this.sayName = () => console.log(this.name);
    this.nicknames = ['Jake', 'J-Dog']
  }
}

let p1 = new Person(), p2 = new Person()
p1.sayName(); // Jack
p2.sayName(); // Jack

p1.name === p2.name // false
p1.sayName === p2.sayName // false
p1.nicknames === p2.nicknames // false

///////////////////////////////////////////////

class Person {
  constructor() {
    this.locate = () => console.log('instance');
  }
  
  locate() {
    console.log('prototype');
  }
}

let p = new Person();
p.locate(); // instance
Person.prototype.locate(); // prototype

////////////////////////////////////////////

class Person {
  set name(newName) {
    this.name_ = newName;
  }
  get name() {
    return this.name_;
  }
  ['trim' + 'Name']() {
    return this.name_.trim()
  }
}

let p = new Person()
p.name = ' Jake ';
p.trimName() // 'Jake'

///////////////////////////////////////////////////////

class Person {
  constructor() {
    this.locate = () => console.log('instance', this);
  }
  locate() {
    console.log('prototype', this);
  }
  static locate() {
    console.log('class', this);
  }
}

let p = new Person();
p.locate(); // instance Person
Person.prototype.locate(); // prototype {}
Person.locate(); // class [class Person]

//////////////////////////////////////////////////////

class Person {
  constructor(age) {
    this.age_ = age;
  }
  sayAge() {
    console.log(this.age_);
  }
  static create() {
    // Создает и возвращает экземпляр person со случайным age
    return new Person(Math.floor(Math.random()*100));
  }
}

Person.create() // Person { age_:... }

//////////////////////////////////////////////////////

class Person {
  sayName() {
    console.log(`${Person.greeting} ${this.name}`);
  }
}

// Определение данных-членов класса
Person.greeting = 'My name is';
// Определение данных-членов прототипа  
Person.prototype.name = 'Jake';

let p = new Person();
p.sayName(); // My name is Jake

///////////////////////////////////////////////

class Vehicle {}
// Наследование от класса
class Bus extends Vehicle {}

let b = new Bus();
b instanceof Bus // true
b instanceof Vehicle // true

//////////////////////////////////////////////

function Person() {}
// Наследование от конструктора функции
class Engineer extends Person {}

let e = new Engineer();
e instanceof Engineer // true
e instanceof Person // true

////////////////////////////////////////////////

class Vehicle {
  identifyPrototype(id) {
    console.log(id, this);
  }
  static identifyClass(id) {
    console.log(id, this);
  }
}
class Bus extends Vehicle {}

let v = new Vehicle();
let b = new Bus();
b.identifyPrototype('bus'); // bus, Bus {}
v.identifyPrototype('vehicle'); // vehicle, Vehicle {}
Bus.identifyClass('bus'); // bus [class Bus extends Vehicle]
Vehicle.identifyClass('vehicle'); // vehicle [class Vehicle]

////////////////////////////////////////////////////

class Vehicle {
  constructor() {
    this.hasEngine = true;
  }
}
class Bus extends Vehicle {
  constructor() {
    super(); // то же, что и super.constructor()
    
    console.log(this instanceof Vehicle); // true
    console.log(this); // Bus { hasEngine: true }
  }
}
new Bus();

/////////////////////////////////////////////////

class Vehicle {
  static identify() {
    console.log('vehicle');
  }
}
class Bus extends Vehicle {
  static identify() {
    super.identify();
  }
}

Bus.identify(); // vehicle

/////////////////////////////////////////////

class Vehicle {
  constructor(licensePlate) {
    this.licensePlate = licensePlate;
  }
}
class Bus extends Vehicle {
  constructor(licensePlate) {
    super(licensePlate);
  }
}

new Bus('1337H4X')
// Bus { licensePlate: '1337H4X' }

////////////////////////////////////////////

// Абстрактный базовый класс
class Vehicle {
  constructor() {
    console.log(new.target);
      if (new.target === Vehicle)
        throw new Error('Vehicle cannot be directly instantiated');
  }
}
// Производный класс
class Bus extends Vehicle {}

new Bus(); // class Bus {}

// Error: Vehicle cannot be directly instantiated
new Vehicle(); // class Vehicle {}

/////////////////////////////////////////////////

class Vehicle {
  constructor() {
    if (new.target === Vehicle)
      throw new Error('Vehicle cannot be directly instantiated');
    if (!this.foo)
      throw new Error('Inheriting class must define foo()');
  }
}
class Bus extends Vehicle {
  foo() {}
}
class Van extends Vehicle {}

new Bus();
new Van(); // Error: Inheriting class must define foo()

//////////////////////////////////////////////

class SuperArray extends Array {
  last() {
    return this[this.length - 1]
  }
}

let arr = new SuperArray(1, 2, 3);

arr instanceof SuperArray // true
arr instanceof Array // true

arr // SuperArray(5) [1, 2, 3]
arr.last() // 3

////////////////////////////////////

class Vehicle {}

let FooMixin = (Superclass) => class extends Superclass {
  foo() { console.log('foo') }
}

let BarMixin = (Superclass) => class extends Superclass {
  bar() { console.log('bar') }
}

class Bus extends FooMixin(BarMixin(Vehicle)) {}

let b = new Bus();
b.foo(); // foo
b.bar(); // bar


