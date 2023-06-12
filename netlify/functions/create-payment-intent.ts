import * as dotenv from 'dotenv'
import Stripe from 'stripe'

dotenv.config()
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`,{
    apiVersion : '2022-11-15'
})

type StripeEvent = {
    body : string
}
exports.handler = async (event : StripeEvent) => {
    try {
        const { amount } = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"],
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent }),
        };
    } catch (error) {
        console.log({ error });

        return {
            statusCode: 400,
            body: JSON.stringify({ error }),
        };
    }
};