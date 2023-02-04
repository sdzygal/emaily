import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';



class Payments extends Component {
    render() {

        return (
         <StripeCheckout
             name="Emaily"
             description="5$ for 5 email credits"
             amount={500} //money in US 500 cents = 5 dollars
             token={token => console.log(token)} //callback which works after stripe tells us we got money
             stripeKey={process.env.REACT_APP_STRIPE_KEY}
         >
             <button className="btn">
                 Add Credits
             </button>
         </StripeCheckout>
        );
    }
}

export default Payments;