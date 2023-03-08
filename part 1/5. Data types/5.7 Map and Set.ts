/*
Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
 */

function unique(arr) {
  return Array.from(new Set(arr))
}

/*
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
 */

function aclean(arr) {
  return arr
    .reduce((obj, item) => {
    const word = item.toLowerCase().split('').sort().join()
    return obj[word] = item
  }, {})
    .values()
}

/*
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
 */

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");