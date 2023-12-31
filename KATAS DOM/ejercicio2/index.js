// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement('div')
document.body.appendChild(newDiv)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const secondDiv = document.createElement('div')
const p = document.createElement('p')
secondDiv.appendChild(p)
document.body.append(secondDiv)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un	loop con javascript.

const thirdDiv = document.createElement('div')

for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')

  thirdDiv.appendChild(p)
}
document.body.append(thirdDiv)
// 1.4 Inserta dinamicamente con javascript en un html una p con el	texto 'Soy dinámico!'.

const dinamicP = document.createElement('p')
dinamicP.textContent = 'Soy dináico'
document.body.append(dinamicP)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2Insert = document.querySelector('.fn-insert-here')
h2Insert.innerHTML = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const appList = document.createElement('ul')

for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  appList.append(li)
}
document.body.append(appList)
// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
// document.body.remove('.fn-remove-me')
const eliminados = document.querySelectorAll('.fn-remove-me')

for (const eliminado of eliminados) {
  eliminado.remove()
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.	Recuerda que no solo puedes insertar elementos con .appendChild.

const middle = document.createElement('p')
middle.innerHTML = 'voy en medio'
document.body.insertBefore(middle, thirdDiv)
// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase	.fn-insert-here

const divs = document.querySelectorAll('.fn-insert-here')
divs.forEach((element) => {
  const inside = document.createElement('p')
  inside.innerHTML = 'Voy dentro'
  element.appendChild(inside)
})
