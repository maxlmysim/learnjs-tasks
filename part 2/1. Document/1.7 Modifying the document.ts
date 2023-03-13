/*
У нас есть пустой DOM-элемент elem и строка text.

Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text
 */

//1 and 3

/*
Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
 */

function clear(elem) {
  elem.innerHTML = '';
}


/*
В примере ниже вызов table.remove() удаляет таблицу из документа.

Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
 */

// "aaa" будет содержаться вне таблицы


/*
Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги, они должны обрабатываться как текст.
 */

while (true) {
  const text = prompt('your text')

  if (!text) break;

  const li = document.createElement('li')
  li.textContent = text

  document.querySelector('ul').appendChild(li)
}


/*
Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
 */

function createTree(parent, data) {

}

function createNode(parent, data) {

  for (let value of data) {

    if(value.keys.length > 0) {
      const ul = document.createElement('ul');
      createTree(ul, data[value])
    }

    const li = document.createElement('li')
    li.textContent = data[value]
  }

  parent.append(ul)
}


/*

 */


