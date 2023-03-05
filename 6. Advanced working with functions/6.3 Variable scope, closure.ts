/*
Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?
 */

// 0
// 1


/*
Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?
 */

// будет,  1, 2, 1


/*
Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
 */

// ошибка


/*
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
 */

function sum(a: number) {
  return function (b) {
    return a + b
  }
}


/*
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
 */

function inBetween(a, b) {
  return function (item) {
    return item >= a && item <= b
  }
}

function inArray(arr) {
  return function (item) {
    return arr.includes(item)
  }
}


/*
У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
Обычный способ был бы таким:

// по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Можем ли мы сделать его короче, например вот таким?

users.sort(byField('name'));
users.sort(byField('age'));
То есть чтобы вместо функции мы просто писали byField(fieldName).

Напишите функцию byField, которая может быть использована для этого.
 */

function byField(fieldName) {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1
  }
}


/*
Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
 */

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    const num = i

    let shooter = function() {
      alert( num );
    };

    shooters.push(shooter);
    i++;
  }

  return shooters;
}