const stripe = require('stripe')('sk_test_51MXbYgF22jvvw2zVk0jkBKQv2O1Km6FX4D2S2O0u4J6QKrdPQGeN5WjETw51nZgIYGhwsR5YwAxuH6uDSwvHf6rt00F3QaVpqZ');
const requireLogin = require('../middlewares/requireLogin');


//create charge and send res to our api
module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
      const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        req.user.credits += 5; //current user assigns by passport
        const user = await req.user.save();


        res.send(user);
    });
};