import styled from "styled-components";

const StyledCheckoutPage = styled.div`

    .payment-form {
        display: flex;
        gap: 2%;
        margin: 1rem 0;
    }

    .personal-info {
        width: 60%;
        border: 1px solid #ddd;
        padding: 1rem;
    }

    .title, .address-title, .shipping-title {
        margin-bottom: 0.5rem;
    }

    .payment-type {
        margin-right: 1rem;
    }

    .payment-label {
        display: block;
        margin-bottom: 0.5rem;
    }

    .contact-title, .address-title {
        display: block;
        width: 100%;
        margin-bottom: 0.5rem;
    }

    .card-input {
        padding: 0.5rem;
        width: 48.75%;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }
    .address-input {
        padding: 0.5rem;
        width: 98.5%;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .sub-total {
        width: 40%;
        border: 1px solid #ddd;
        padding: 1rem;
    }

    .row {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1rem;
    }

    .total-amount, .total-cost {
        font-weight: 700;
        font-size: 1.2rem;
    }

    .final {
        border-top: 1px solid #ddd;
        padding-top: 0.5rem;
    }

    .disabled {
        pointer-events: none;
        background-color: #ddd;
        padding: 0.5rem;
    }

    .contact-details, .shipping-info {
        background-color: white;
        pointer-events: auto;
        padding: 0.5rem;
    }

    .delivery-info {
        color: red;
        margin: 0.5rem 0;
        font-size: 0.8rem;
    }

    .error-message {
        font-size: 0.7rem;
        color: red;
        margin-bottom: 1rem;
    }

    #address {
        width: 98.5%;
    }

    .total-quantity {
        font-weight: 700;
        font-size: 1.4rem;
    }

    .shipping-details {
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 600px) {
        .payment-form {
            flex-direction: column;
        }

        .personal-info, .sub-total {
            width: 100%;
        }

        .card-input, .address-input {
            width: 100%;
        }
    }
`

export default StyledCheckoutPage;