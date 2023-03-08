/*
Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
 */

let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join(', ')
    }
  }
});


/*
Давайте создадим новый объект rabbit:

Все эти вызовы делают одно и тоже или нет?
 */

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();

//не одно и тоже, 1 отличается от 3(они одинаковые) остальных