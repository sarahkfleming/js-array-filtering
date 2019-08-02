const createAnimal = (stuffingMaterial, furMaterial, eyeballMaterial, color, hasClothing, species) => {
    return {
        toString () {
            // We're determining how the content will be represented but not how it is structured in the DOM
         return `The ${this.color} ${this.species} filled with ${this.material.stuffing}.`
        },
        material: {
            stuffing: stuffingMaterial,
            fur: furMaterial,
            eyeball: eyeballMaterial
        },
        color: color,
        hasClothing: hasClothing,
        species: species
    }
}

const sonic = createAnimal(
    "beans",
    "tortilla",
    "human",
    "fuschia",
    false,
    "Hedgehog"
)

const kitty = createAnimal(
    "cotton",
    "felt",
    "glass",
    "goldenrod",
    false,
    "Cat"
)

const fluffy = createAnimal(
    "packing peanuts",
    "wool",
    "plastic",
    "black",
    true,
    "Dog"
)

const animals = [sonic, kitty, fluffy]

// animals.forEach(animal => {
//     animal.color = `Dark ${animal.color}`
// })
// console.log(animals)

// With .map, whatever is returned out of callback function is put into the new array
// Extract only the information you want into a new array
const evilAnimals = animals.map(animal => {
    // return animal.color = `Dark ${animal.color}`
    return {
        material: {
            stuffing: animal.material.stuffingMaterial,
            fur: animal.material.furMaterial,
            eyeball: animal.material.eyeballMaterial
        },
        color: `Dark ${animal.color}`,
        hasClothing: animal.hasClothing,
        species: animal.species
    }
})
console.log(animals)
console.log(evilAnimals)

const animalsWithClothes = animals.filter(animal => !animal.hasClothing)
console.log(animalsWithClothes)


