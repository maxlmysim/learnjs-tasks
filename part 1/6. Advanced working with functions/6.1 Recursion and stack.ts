/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
 */

function sumTo1(n) {
  let result = 0

  for (let i = 0; i <= n; i++) {
    result += i
  }

  return result
}

function sumTo2(n) {
  if (n === 0) return 0

  return n + sumTo2(n - 1)
}

function sumTo3(n) {
  return n * (n + 1) / 2
}


/*
написать функцию factorial(n), которая возвращает n!, используя рекурсию.
 */

function factorial(n) {
  if (n === 1) return 1
  return n * factorial(n - 1);
}


/*
Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
 */

function fib(n: number) {
  if (n === 1 || n === 2) return 1
  return fib(n - 2) + fib(n - 1)
}

function fib1(n) {
  const fibList = [1, 1]

  while (fibList.length <= n) {
    fibList.push(fibList[fibList.length - 1] + fibList[fibList.length - 2])
  }

  return fibList[n- 1]
}


/*
Напишите функцию printList(list), которая выводит элементы списка по одному.
 */

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let current = list

  while(current.next) {
    console.log(current.value)
    current = current.next
  }

  console.log(current.value)
}

function printList2(list) {
  if(!list.next) {
    console.log(list.value)
    return
  }
  console.log(list.value)

  return printList2(list.next)
}


/*
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
 */

function printListUp (list) {
  if (list.next) {
    printListUp(list.next)
  }
  console.log(list.value)
}

function printListUp1 (list) {
  const saveValue = []
  if (list.next) {
    printListUp(list.next)
  }
  console.log(list.value)
}