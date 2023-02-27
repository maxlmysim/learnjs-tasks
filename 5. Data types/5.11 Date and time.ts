/*
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.
 */

alert(new Date(2012, 1, 20, 3, 12))


/*
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
 */

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()]
}

/*
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
 */

function getLocalDay(date) {
  const day = date.getDay();

  return day === 0 ? 7 : day
}

/*
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
 */
function getDateAgo(date, days) {
  let newDate = new Date(date)

  newDate.setDate(date.getDate() - days)

  return newDate.getDate();
}

/*
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
 */

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

/*
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
 */

function getSecondsToday() {
  const now = new Date(Date.now())

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  return (now - today) / 1000
}


/*
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
 */

function getSecondsToTomorrow() {
  const now = new Date(Date.now())

  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

  return (tomorrow - now) / 1000
}


/*
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
 */

function formatDate(date) {
  const now = Date.now()

  if (date - now < 1000) {
    return "прямо сейчас"
  } else if (date - now < 1000 * 60) {
    return `${(date - now) * 1000} сек. назад`
  } else if (date - now < 1000 * 60 * 60) {
    return `${(date - now) * 1000 * 60} мин. назад`
  } else {
    let newDate = date
    newDate = [
      '0' + newDate.getDate(),
      '0' + (newDate.getMonth() + 1),
      '' + newDate.getFullYear(),
      '0' + newDate.getHours(),
      '0' + newDate.getMinutes()
    ].map(component => component.slice(-2));

    return newDate.slice(0, 3).join('.') + ' ' + newDate.slice(3).join(':');
  }
}