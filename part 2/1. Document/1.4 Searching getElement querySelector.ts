/*
Вот документ с таблицей и формой.

Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
 */

document.getElementById('age-table')
document.querySelectorAll('label')
table.querySelector('td')
document.getElementsByName('search')
form.querySelector('input')
const inputs = form.querySelectorAll('input')
inputs[inputs.length - 1]

