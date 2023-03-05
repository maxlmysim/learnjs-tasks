/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
 */

function printNumbers(from, to) {
  let current = from
  const interval = setInterval(() => {
    console.log(current)

    if (current === to) {
      clearInterval(interval)
    }
    current++
  }, 1000)
}

function printNumbers2(from, to) {
  let current = from


  function call() {
    setTimeout(() => {
      console.log(current)
      if(current < to) {
        call()
      }
      current++
    }, 1000)
  }

  return call()
}


/*
Что покажет setTimeout?
важность: 5
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}
 */

// после, код ассинхронный