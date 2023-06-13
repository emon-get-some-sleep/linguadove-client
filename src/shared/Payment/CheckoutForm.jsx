import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import './CheckoutForm.css'
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";


const CheckoutForm = ({ classData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [cardError, setCardError] = useState('');
    const [studentSecret, setStudentSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const price = classData.price
    // console.log(price);
    useEffect(() => {
        if (classData.price > 0) {
            axios.post('http://localhost:5000/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setStudentSecret(res.data.clientSecret);
                })
        }
    }, [classData])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            studentSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const availableSeat = classData.available_seat == 0 ? 0 : classData.available_seat - 1;
            const payment = {

                email: user?.email,
                transactionId: paymentIntent.id,
                price: classData.price,
                date: new Date(),
                name: classData.name,
                classId: classData.selectedClassId,
                deleteId: classData._id,
                image: classData.image,
                instructor_name: classData.instructor_name,
                available_seat: availableSeat,
                number_of_lesson: classData.number_of_lesson



                
            }
            axios.post('http://localhost:5000/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // display confirm
                    }
                })
        }


    }

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                        
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 w-full" type="submit" disabled={!stripe || !studentSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && 
            <p className="text-green-500">Transaction Successful with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;