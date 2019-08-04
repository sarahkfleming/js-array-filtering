// const createAnimal = (stuffingMaterial, furMaterial, eyeballMaterial, color, hasClothing, species) => {
//     return {
//         toString () {
//             // We're determining how the content will be represented but not how it is structured in the DOM
//          return `The ${this.color} ${this.species} filled with ${this.material.stuffing}.`
//         },
//         material: {
//             stuffing: stuffingMaterial,
//             fur: furMaterial,
//             eyeball: eyeballMaterial
//         },
//         color: color,
//         hasClothing: hasClothing,
//         species: species
//     }
// }

// const sonic = createAnimal(
//     "beans",
//     "tortilla",
//     "human",
//     "fuschia",
//     false,
//     "Hedgehog"
// )

// const kitty = createAnimal(
//     "cotton",
//     "felt",
//     "glass",
//     "goldenrod",
//     false,
//     "Cat"
// )

// const fluffy = createAnimal(
//     "packing peanuts",
//     "wool",
//     "plastic",
//     "black",
//     true,
//     "Dog"
// )

// const animals = [sonic, kitty, fluffy]

// // animals.forEach(animal => {
// //     animal.color = `Dark ${animal.color}`
// // })
// // console.log(animals)

// // With .map, whatever is returned out of callback function is put into the new array
// // Extract only the information you want into a new array
// const evilAnimals = animals.map(animal => {
//     // return animal.color = `Dark ${animal.color}`
//     return {
//         material: {
//             stuffing: animal.material.stuffingMaterial,
//             fur: animal.material.furMaterial,
//             eyeball: animal.material.eyeballMaterial
//         },
//         color: `Dark ${animal.color}`,
//         hasClothing: animal.hasClothing,
//         species: animal.species
//     }
// })
// console.log(animals)
// console.log(evilAnimals)

// const animalsWithClothes = animals.filter(animal => !animal.hasClothing)
// console.log(animalsWithClothes)


// Below content is from Jenna's Array Methods Repo - Material covered Friday 08/02/2019

// iterators
  // foreach() - iterates the array and preforms an action on each item in the array. Does not generate anything
  // map() - iterates the array and returns a new array from the values

  // filter() - iterates the array and returns a new array with values that meet the condition
  // find() - iterates the array and returns the first item in the array that meets the condition or returns undefined.

// sorting
  // sort()- iterates and sorts the array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down). Sorts the values as strings in alphabetical and ascending order by default.

// Returns True or False
  // every() -iterates the array and returns true if every item in the array meets the condition and false if it does not.
  // some() -iterates the array and returns true if one item in the array meets the condition and false if it does not.
  // includes()- iterates the array and returns true if the array includes a certain element and false if it does not.

// reduce - iterates the array and preforms an action on each item in the array and reduces the array to a single value

const createAnimal = (
    stuffingMaterial,
    furMaterial,
    eyeballMaterial,
    color,
    hasClothing,
    species,
    price
  ) => {
    return {
      material: {
        stuffing: stuffingMaterial,
        fur: furMaterial,
        eyeball: eyeballMaterial
      },
      color: color,
      hasClothing: hasClothing,
      species: species,
      price: price
    }
  }
  
  const diggy = createAnimal(
    "cotton",
    "wool",
    "felt",
    "goldenrod",
    false,
    "Iguana",
    109
  )
  
  const sonic = createAnimal(
    "beans",
    "tortilla",
    "human",
    "fuschia",
    true,
    "Hedgehog",
    200
  )
  
  const barry = createAnimal(
    "acorns",
    "vines",
    "plastic",
    "purple",
    false,
    "Kangaroo",
    223
  )
  
  const truthy = createAnimal(
    "bees",
    "snakeskin",
    "coal",
    "green",
    true,
    "Honey Badger",
    49
  )
  
  const jeff = createAnimal(
    "grass",
    "bark",
    "giraffe",
    "teal",
    false,
    "Giraffe",
    1
  )
  
  const tom = createAnimal(
    "feathers",
    "peanut butter",
    "chocolate chips",
    "seafoam green",
    false,
    "Duck",
    5
  )
  
  const animals = [tom, jeff, sonic, barry, truthy, diggy]
  // console.table(animals)
  
  // if the hasClothing property value is true, change it to false and if false, change to true for each item in the array.
  
  animals.forEach(animal => {
    // Change true to false and false to true
     animal.hasClothing = !animal.hasClothing
  })
  
  // console.table(animals)
  
  // return a new array of just colors called animalColors
  const animalColors = animals.map(animal => animal.color)
  // console.log(animalColors)
  
  // return a new array of just prices called animalPrices
  const animalPrices = animals.map(animal => animal.price)
  // console.log("animalPrices", animalPrices)
  
  // return a new array of animals where the price is over 100
  const animalPricesOver100 = animals.filter(animal => animal.price > 100)
  // console.log("Animals that cost over $100", animalPricesOver100)
  
  // return the animal that has coal for eyeballs.
  const animalCoalEyes = animals.find(animal => animal.material.eyeball === "coal")
  // console.log("Animal with coal for eyes:", animalCoalEyes)
  
  // sort animalColors alphabetically - sort mutates the original array
  animalColors.sort()
  // console.table(animalColors)
  // .reverse() just reverses the order of the array but doesn't sort it in reverse order
  animalColors.reverse()
  // console.table(animalColors)
  
  // sort the animalPrices
  animalPrices.sort((a, b) => a - b)
  // console.table(animalPrices)
  
  // return the sum of animalPrices
  const animalPriceSum = animalPrices.reduce((total, currentPrice) => total + currentPrice, 0)
  // console.log("Animal Prices Sum:", animalPriceSum)
  
  const newArray = animals.reduce((accumulator, currentAnimal) => {
    if (currentAnimal.price > 100) {
      accumulator.push(currentAnimal.price)
    }
    return accumulator
  }, [])
  
  console.log("New Array: ", newArray)