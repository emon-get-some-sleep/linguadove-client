import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const priceInfo = useLoaderData();
    console.log(priceInfo);
    return (
        <div>
            <h2>Welcome to Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm classData={priceInfo}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;