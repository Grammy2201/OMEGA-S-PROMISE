require('dotenv').config()

const express = require("express")
const app = express

app.use(express.json())

const stripe = require("stripe")(process.env.
    STRIPE_PRIVATE_KEY)

    const storeItems = new Map([
        [1, { priceInCents: 10000, name: "Thank You For Your Donation" }],
        [2, { priceInCents: 20050, name: "You Rock!"}],
        [3, { priceInCents: 50000, name: "Your Amazing!"}],
        [4, { priceInCents: 100000, name: "Never Stop Being Yourself!"}] 

    ])

    app.listen(3000)