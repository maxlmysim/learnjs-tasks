/*
Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.
 */

const obj ={
  //something
}
function A() { return obj }
function B() { return obj }


/*
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
 */

function Calculator() {
  this.read = function () {
    this.x = +prompt('x?', 0);
    this.y = +prompt('y?', 0);
  }

  this.sum = function () { return this.x + this.y; };
  this.mul = function () { return this.x * this.y; };
}

/*
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
 */

function Accumulator(num) {
  this.value = num;

  this.read = function() {
    this.value += +prompt('number')
  }
}