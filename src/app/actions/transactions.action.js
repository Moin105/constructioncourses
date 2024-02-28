"use server"

import Stripe from "stripe"

export  const checkoutPlan = async (transaction)=>{
    const stripe = new Stripe(env.process.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
    const amount = Number(transaction.amount);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: transaction.plan,
                    },
                    unit_amount: amount ,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${env.process.NEXT_PUBLIC_DOMAIN}/success`,
        cancel_url: `${env.process.NEXT_PUBLIC_DOMAIN}/cancel`,
    });

}
