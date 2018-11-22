import printGreeting, { sayHello, sayGoodbye } from './static-module'

const whos = ['omniverse', 'megaverse', 'ultraverse']

import('./dynamic-module').then(module => {
  const sayHello = module.sayHello
  const printHello = module.default

  console.warn(sayHello())

  const [first, ...rest] = whos
  printGreeting(sayGoodbye)(first)
  rest.forEach(printHello) // short-circuited function
})

console.error(sayHello())
printGreeting(sayHello)('universe')
printGreeting(sayGoodbye)('cruel world')

const sayHowdy = who => `Howdy ${who}!!!`

const printHowdy = printGreeting(sayHowdy)

whos.forEach(printHowdy)

const handleErrors = (type, id) => response => {
  if (!response.ok) {
    console.warn(`${type} - ${id} not found`)
    // throw new Error(`${response.status} - ${response.statusText}`)
  }
  return response
}

const fetchStarWarsData = type => (id = 1) =>
  fetch(`https://swapi.co/api/${type}/${id}`)
    .then(handleErrors(type, id))
    .then(response => response.json())

const fetchStarWarsCharacter = fetchStarWarsData('people')
const fetchStarWarsStarship = fetchStarWarsData('starships')

async function fetchC3PO() {
  try {
    const c3po = await fetchStarWarsCharacter(2)
    console.log(c3po)
  } catch (error) {
    alert(error)
  }
}

fetchC3PO()

const totalCostOfStarhips = async (...ids) => {
  const promises = ids.map(fetchStarWarsStarship)

  try {
    const results = await Promise.all(promises)
    const starships = results.filter(({ name }) => name != null)
    const total = starships.reduce(
      (acc, { cost_in_credits }) => (acc += parseInt(cost_in_credits, 10)),
      0,
    )
    console.log(total)
  } catch (error) {
    console.warn(error)
  }
}

totalCostOfStarhips(1, 2, 3)

const NEW_METHOD = 'sayMyAgeInDogYears'

const person = {
  age: 0,

  sayMyAge() {
    return `My age is ${this.age}`
  },

  get ageInDogYears() {
    return Math.round((this.age / 7) * 10) / 10
  },

  set ageInDogYears(age) {
    this.age = age * 7
  },

  [NEW_METHOD]() {
    return `If I was a dog it would be about ${this.ageInDogYears} years`
  },

  printGreeting,
}

person.ageInDogYears = 5.1
console.log(person.ageInDogYears)
console.log(person.sayMyAgeInDogYears())

person.printGreeting(sayHowdy)('neighbours')
