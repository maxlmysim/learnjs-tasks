/*
Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
 */

function spy(func) {
  const arr = []

  function wrapper(...args) {
    wrapper.calls.push(args)
    func.apply(this, args)
  }

  wrapper.calls = []

  return wrapper
}


/*
Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
 */

function delay(f, ms) {
  return function (...args) {
    setTimeout(f.apply(this, args), ms)
  }
}


/*
Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
 */

function debounce(f, ms) {
  let isAllow = true

  return function (...args) {
    if (isAllow) {
      isAllow = false
      f.apply(this, args)

      setTimeout(() => {
        isAllow = true
      }, ms)
    }
  }
}


/*
Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.
 */

function throttle(f, ms) {
  let isAllow = true
  let saveArgs

  return function fun(...args) {
    saveArgs = args

    if (isAllow) {
      isAllow = false
      f.apply(this, args)

      setTimeout(() => {
        isAllow = true
        fun.apply(this, saveArgs)
      }, ms)
    }
  }
}
