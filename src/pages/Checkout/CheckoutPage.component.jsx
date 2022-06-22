import { useState } from "react"
import { useForm } from 'react-hook-form'
import Modal from 'react-modal';
import { MdClose } from "react-icons/md";
import Button from "../../components/Styled/Button.styled"
import StyledCheckoutPage from "../../components/Styled/CheckoutPage.styles"

Modal.setAppElement('#root')
const CheckOutPage = ({cartItems}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const [delivery, setDelivery] = useState(false)
    const [disabled, setDisabled] = useState(false)
    // for modal
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const onSubmit = (data) => {        
        // Payment on delivery chosen
        if(disabled) {
            // validate only the bottom part
            console.log('leave card alone')
            console.log(disabled, delivery)
        }
        // Payment by card chosen
        if(!disabled && delivery===false) {
            // validate card payments
            console.log('yes check card')
            console.log(disabled, delivery)
        }
        // choose a payment method
        // if (!disabled ) {
        //     console.log('please choose a payment method')
        //     return
        // }
        setModalIsOpen(true)
        console.log(data)
    }
    // watch for shipping address to be shown in modal
    const address = watch('address')
    const state = watch('state')
    const country = watch('country')
    const phone = watch('phone')
    const email = watch('email')

    const choosePayMethod = (e) => {
        const methodChosen = e.target.value
        if(methodChosen === 'delivery') {
            setDelivery(true)
            setDisabled(true)
            return
        }
        if(methodChosen === 'card') {
            setDelivery(false)
            setDisabled(false)
            return
        }
    }

    const getPrices = cartItems.map((cartItem) => cartItem.price * 600 *cartItem.quantity)

    const totalAmount = getPrices.reduce((accumulator, currentValue) => {
        return accumulator + currentValue        
    }, 0)

    const getQuantities = cartItems.map((cartItem) => cartItem.quantity)
    const totalQuantity = getQuantities.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })

    const shippingPrice = totalAmount * .05

    const totalCost = totalAmount + shippingPrice

    return (
        <StyledCheckoutPage>
         <form className="payment-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="personal-info">
                <div className="payment-method">
                    <h3 className="title">Pay With</h3>
                    <label htmlFor="payment-type" className="payment-label">
                        <input type="radio" name="payment-type" className="payment-type" value='delivery' onChange={(e) => choosePayMethod(e)}/>
                        Pay on delivery
                    </label>
                    <label htmlFor="payment-type" className="payment-label">
                        <input type="radio" name="payment-type" className="payment-type" value='card' onChange={(e) => choosePayMethod(e)}/>
                        Pay with card
                    </label>
                </div>
                <div className={ disabled ? 'disabled' : 'contact-details' }>
                    <p className="contact-title">Your payment is secure. Your card details will not be shared with sellers.</p>
                    <input type="number" placeholder="16 digit card number" className="card-input" />
                    <input type="date" placeholder="expiration date" className="card-input" />
                    <input type="number" placeholder="CVV code" className="card-input" />
                    <input type="text" placeholder="Name on card" className="card-input" />
                </div>
                {delivery && <div className="delivery-details">
                    <p className="delivery-info">Please ensure you have the total amount on hand i.e. the order total as described on the right of your screen when the items arrive.</p>
                </div>}
                <div className="shipping-details">
                    <h3 className="address-title">Shipping Address</h3>
                    <div className="shipping-info">
                        <input {...register('address', {required: `Please fill an address for delivery.`})} type="text" placeholder="address" className="address-input" id="address"/>
                        <p className="error-message">{errors.address?.message}</p>
                        <input {...register('state', {required: `State/Province.`})} type="text" placeholder="state" className="address-input" />
                        <p className="error-message">{errors.state?.message}</p>
                        <input {...register('country', {required: `Country you reside.`})} type="text" placeholder="country" className="address-input" />
                        <p className="error-message">{errors.country?.message}</p>
                        <input {...register('phone', {required: `Phone number we can reach you on.`})} type="number" placeholder="phone" className="address-input" />
                        <p className="error-message">{errors.phone?.message}</p>
                        <input {...register('email', {required: `Enter a valid email.`})}type="email" placeholder="email" className="address-input" />
                        <p className="error-message">{errors.email?.message}</p>
                    </div>
                </div>
            </div>
            <div className="sub-total">
                <div className="row">
                    <p>Subtotal <span className="total-quantity">{totalQuantity}</span> items</p>
                    <p className="total-amount">&#8358; {totalAmount.toLocaleString('en-US')}</p>
                </div>
                <div className="row">
                    <p>Shipping & delivery cost</p>
                    <p>&#8358; {shippingPrice.toLocaleString('en-US')}</p>
                </div>
                <div className="row">
                    <p>Discount(if any)</p>
                    <p>--</p>
                </div>
                <div className="row final">
                    <p>Order total</p>
                    <p className="total-cost">&#8358; {totalCost.toLocaleString('en-US')}</p>
                </div>
                <Button>confirm & pay</Button>
            </div>
         </form>
         <Modal isOpen={modalIsOpen}onRequestClose={() => setModalIsOpen(false)} style={{
            content: {
                position: 'absolute',
                top: '3rem',
                left: '40px',
                right: '40px',
                bottom: '40px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
                }
         }}>
            <div className="modal-header">
                <p>shoppers-fun</p>
                <MdClose onClick={() => setModalIsOpen(false)} />
            </div>
            <div className="modal-body">
                <p className="shipping-details">Your items have been shipped to:</p>
                <p className="shipping-details">{address}</p>
                <p className="shipping-details">{state}</p>
                <p className="shipping-details">{country}</p>
                <p className="shipping-details">{phone}</p>
                <p className="shipping-details">{email}</p>
            </div>
            <Button onClick={() => setModalIsOpen(false)}>close modal</Button>
        </Modal>
        </StyledCheckoutPage>
    )
}

export default CheckOutPage