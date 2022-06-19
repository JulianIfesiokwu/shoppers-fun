
import Button from "../../components/Styled/Button.styled"
import StyledCheckoutPage from "../../components/Styled/CheckoutPage.styles"

const CheckOutPage = ({cartItems}) => {
    const getPrices = cartItems.map((cartItem) => cartItem.price * 600 *cartItem.quantity)

    const totalAmount = getPrices.reduce((accumulator, currentValue) => {
        return accumulator + currentValue        
    }, 0)

    const shippingPrice = totalAmount * .05

    const totalCost = totalAmount + shippingPrice

    return (
        <StyledCheckoutPage>
         <form className="payment-form">
            <div className="personal-info">
                <div className="payment-method">
                    <h3 className="title">Pay With</h3>
                    <label htmlFor="payment-type" className="payment-label">
                        <input type="radio" name="payment-type" className="payment-type"/>
                        Pay on delivery
                    </label>
                    <label htmlFor="payment-type" className="payment-label">
                        <input type="radio" name="payment-type" className="payment-type"/>
                        Pay with card
                    </label>
                </div>
                <div className="contact-details">
                    <p className="contact-title">Your payment is secure. Your card details will not be shared with sellers.</p>
                    <input type="number" placeholder="card number" className="card-input" />
                    <input type="number" placeholder="expiration date" className="card-input" />
                    <input type="number" placeholder="security code" className="card-input" />
                    <input type="text" placeholder="first name" className="card-input" />
                    <input type="text" placeholder="last name" className="card-input" />
                </div>
                <div className="shipping-details">
                    <h3 className="address-title">Billing Address</h3>
                    <input type="text" placeholder="address" className="address-input" />
                    <input type="text" placeholder="state" className="address-input" />
                    <input type="text" placeholder="country" className="address-input" />
                    <input type="number" placeholder="phone" className="address-input" />
                    <input type="email" placeholder="email" className="address-input" />
                </div>
                <div className="review">
                    <h3 className="shipping-title">Review & Shipping</h3>
                    <p>Send to this address</p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div className="sub-total">
                <div className="row">
                    <p>Subtotal ( cartitmes.length) items</p>
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
        </StyledCheckoutPage>
    )
}

export default CheckOutPage