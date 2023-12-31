// 1.1 Basandote en el array siguiente, crea una lista ul > li  dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const list = document.createElement('ul')

for (const country of countries) {
  const liCountry = document.createElement('li')
  liCountry.textContent = country
  list.appendChild(liCountry)
}

document.body.append(list)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminados = document.querySelector('.fn-remove-me')
eliminados.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos  en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const carsList = document.createElement('ul')

for (const car of cars) {
  const p = document.createElement('li')
  p.textContent = car
  carsList.appendChild(p)
}

document.querySelector('[data-function="printHere"]').append(carsList)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const country of countries2) {
  const div = document.createElement('div')
  const title = document.createElement('h4')
  const img = document.createElement('img')

  title.textContent = country.title
  img.src = country.imgUrl
  div.append(title, img)
  document.body.append(div)
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último  elemento de la serie de divs.

function eliminarDato() {
  const divs = document.querySelectorAll('div')
  const ultimoDiv = divs[divs.length - 1]
  if (ultimoDiv) {
    ultimoDiv.remove()
  }
}
const button = document.createElement('button')
button.textContent = 'click'
document.body.append(button)
button.onclick = eliminarDato
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los  divs que elimine ese mismo elemento del html.
const divs = document.querySelectorAll('div')
const buttonIndividual = document.createElement('button')
buttonIndividual.textContent = 'Delete'

divs.forEach((div) => {
  const buttonIndividual = document.createElement('button')
  buttonIndividual.textContent = 'Delete'

  buttonIndividual.onclick = () => eliminarDato(div)

  div.append(buttonIndividual)
})

function eliminarDato(elemento) {
  elemento.remove()
}
