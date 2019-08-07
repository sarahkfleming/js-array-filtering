// Advanced Challenge: Car Dealership

// Copy the JSON from cars.json and assign it to a variable in a new application. This data holds sales information for a car dealership. Your job is to produce the following reports for the dealership based on their total 2017 sales.

// Total profit for 2017
// In which month did they sell the most cars?
// Which salesperson sold the most cars?
// Which salesperson made the most profit?
// Which model was the most popular?
// Which bank provided the most loans to our customers?

import cars from "./carsData.js"

// console.log(cars)

// Total profit for 2017
const carsSold2017 = cars.filter(car => car.purchase_date.includes("2017"))

const grossProfit2017 = carsSold2017.reduce((accumulator, currentCar) => accumulator + currentCar.gross_profit, 0)
console.log("Gross Profit for 2017:", grossProfit2017)

// In which month did they sell the most cars?

const d = new Date()
console.log(d)

const getPurchaseDates = []

carsSold2017.forEach(car => {
    const purchaseDate = car.purchase_date
    const monthsList = purchaseDate.split("-")[1]
    getPurchaseDates.push(monthsList)  
})

console.log(getPurchaseDates)
// Use a hash table
// Create an empty object
const monthCount = {}

// Iterate over the array of months
// Check to see if the month exists as a key in the object
    // If the month does not exist, add it as a key and set the value to 1
    // If the month exists as a key in the object, increment the count by 1

// getPurchaseDates.forEach(month => {
//     if (!monthCount.includes(month)) {
//         monthCount.monthNumber = month
//         monthCount.value = 1
//     } else {
//         monthCount.value++
//     }
// })

// console.log(monthCount)

// Which salesperson sold the most cars?


// Which salesperson made the most profit?


// Which model was the most popular?


// Which bank provided the most loans to our customers?




