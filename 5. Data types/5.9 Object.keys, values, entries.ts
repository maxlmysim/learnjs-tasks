/*
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.
 */

function sumSalaries(salaries) {
  const salaryList = salaries.values()
  let sum = 0

  for (let salary of salaryList) {
    sum += salary
  }

  return sum
}


/*
Напишите функцию count(obj), которая возвращает количество свойств объекта:
 */

const count = (obj) => Object.keys(obj).length