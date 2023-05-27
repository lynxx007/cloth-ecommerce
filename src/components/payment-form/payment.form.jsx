import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { BUTTON_TYPE_CLASS, Button } from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment.style";

export const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()



    const paymentHandler = (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

    }
    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment :</h2>
                <CardElement />
                <Button buttonType={BUTTON_TYPE_CLASS.inverted}>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}