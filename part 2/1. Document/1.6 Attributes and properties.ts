/*
Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
 */
document.querySelector('[data-widget-name]');

/*
Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
 */

const link = 'http://internal.com'
document.querySelectorAll('a').forEach(elem => {
  if(elem.href.includes('://') && elem.href.slice(link.length) !== link) {
    elem.style.color = 'orange';
  }
})
