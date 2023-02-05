const keys = require('../config/keys');
const stripe = require('stripe')('keys.stripeSecretKey');
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