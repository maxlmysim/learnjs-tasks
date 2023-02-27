/*
Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?
 */

// 4


/*
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
 */

const styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
styles[Math.floor((styles.length - 1) / 2)] = 'Классика'
alert(styles.shift())
styles.unshift('Рэп', 'Регги')


/*
Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
 */

//выведет сам массив


/*
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 */

function sumInput() {
  const arr = []

  while (true) {
    const input = prompt('input num')

    if (input && isFinite(input)) {
      arr.push(+input)
    } else {
      break
    }
  }

  return arr.reduce((pre, cur) => pre + cur, 0)
}


/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.
 */

function getMaxSubSum(arr) {
  let maxSum = 0
  let currentSum = 0

  arr.forEach(num => {
    currentSum += num

    if (currentSum > maxSum) maxSum = currentSum

    if (currentSum < 0) currentSum = 0
  })
}