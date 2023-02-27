/*
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
 */

let user = {name: "John", years: 30};

// ваш код должен быть с левой стороны:
const {name, years: age, isAdmin = false} = user


/*
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
 */

function topSalary(salaries) {
  if (Object.keys(salaries).length === 0) return null;

  let maxSalary = 0
  let nameWithMaxSalary = null

  for (const [name, salary] of Object.keys(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      nameWithMaxSalary = name
    }
  }

  return nameWithMaxSalary
}