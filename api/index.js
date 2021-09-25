// noinspection JSValidateTypes,JSCheckFunctionSignatures

// Node.js has a built-in module called HTTP, which allows Node.js
// to transfer data over the Hyper Text Transfer Protocol (HTTP)
// To include the HTTP module, use the require() method:
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const cors = require('cors');

// - API

// - API config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API route
app.post('/create-payment-intent', async (req, res) => {
    try {

        // Create paymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: req.body.currency,
        });

        // Store Client Secret
        const clientSecret = paymentIntent.client_secret;

        // Send Client Secret
        res.json({
            clientSecret: clientSecret
        });

    } catch (e) {

        // If there is an error catch it and display the error message
        res.json({
            error: e.message
        });

    }
});

// Listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));




