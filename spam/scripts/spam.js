// Practice: Spam, spam, spam, spam

import customers from "./customerData.js"

// From the customers array, extract just the customers' contact email addresses and store them in a new array. You will need a nested array method - meaning one iteration inside another one - since you need to iterate the entire array of customers, and then iterate the array of emails for each one.

const customerEmailAddresses = []

customers.forEach(customer => {
    customer.contacts.email.map(emailAddress => {
        customerEmailAddresses.push(emailAddress)
        return customerEmailAddresses
    })
})

console.log(customerEmailAddresses)