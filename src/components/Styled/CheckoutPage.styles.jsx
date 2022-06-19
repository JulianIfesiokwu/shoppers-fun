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

    .card-input, .address-input {
        padding: 0.5rem;
        width: 48.75%;
        margin-right: 0.5rem;
        margin-bottom: 1rem;
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
`

export default StyledCheckoutPage;