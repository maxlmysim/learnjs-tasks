/*
У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
 */

document.querySelectorAll('li').forEach(li => console.log(li.firstChild.data))

document.querySelectorAll('li').length

/*
Что выведет этот код?

<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>

</html>
 */

// 1
