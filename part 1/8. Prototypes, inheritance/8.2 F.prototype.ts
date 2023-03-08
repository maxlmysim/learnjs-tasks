/*
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
 */

function Rabbit() {
}

Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true

Rabbit.prototype = {
  eats: true
};

Rabbit.prototype = {};

alert(rabbit.eats); // true

Rabbit.prototype.eats = false;

alert(rabbit.eats); // false

delete rabbit.eats;

alert(rabbit.eats); // не удалит

delete Rabbit.prototype.eats;

alert(rabbit.eats); // удалит


/*
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.
 */


const obj = {
  isObject: true
}

let obj2 = new obj.constructor()
let obj3 = new obj2.constructor()
// корректно работает и наследуется от одного

function Obj(){
  this.name = 'obj'
}

let obj2 = new Obj()
let obj3 = new obj2.constructor()
//разные конструкторы