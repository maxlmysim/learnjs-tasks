/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.
 */

const camelize = (str) => str
  .split('-')
  .map((item, index) => index === 0 ? item : item[0].toUpperCase + item.slice(1))
  .join('')


/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.
 */

const filterRange = (arr, a, b) => arr.filter(item => (item >= a && item <= b));

/*
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
 */

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] >= a && arr[i] <= b) {
      arr.splice(i, 1);
      i--
    }
  }
}

/*
Сортировать в порядке по убыванию
 */

function sortArr(arr) {
  return arr.sort((a, b) => b - a)
}


/*
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.
 */

function copySorted(arr) {
  return arr
    .slice()
    .sort()
}


/*
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
 */

function Calculator() {
  this['-'] = (a, b) => a - b
  this['+'] = (a, b) => a + b

  this.calculate = function (str) {
    const arr = str.split(' ')

    if (this[arr[1]]) {
      return this[arr[1]](+arr[0], +arr[2])
    } else {
      return NaN
    }
  }

  this.addMethod = function (name, func) {
    this[name] = func
  }
}

/*
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
 */

let vasya = {name: "Вася", age: 25, surname: "Пупкин", id: 1};
let petya = {name: "Петя", age: 30, surname: "Иванов", id: 2};
let masha = {name: "Маша", age: 28, surname: "Петрова", id: 3};

let users = [vasya, petya, masha];

let names = users.map(user => user.name)


/*
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
 */

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}))

/*
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
 */

function sortByAge(users) {
  return users.sort((user1, user2) => user2.age - user1.age)
}

/*
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
 */

function shuffle(array) {
  array.sort((a, b) => {
    const num = Math.random()

    if (num === 0) return 0
    if (num > 0.5) return 1
    if (num > 0) return -1
  });
}

/*
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
 */

function getAverageAge(users) {
  return users.reduce((pre, cur) => pre + cur.age, 0) / users.length;
}

/*
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
 */

function unique(arr) {
  return Array.from(new Set(arr))
}

/*
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
 */

function groupById(users) {
  return users.reduce((obj, item) => obj[item.id] = item, {})
}