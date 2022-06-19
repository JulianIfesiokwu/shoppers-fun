import React from "react";
import { Link } from "react-router-dom";
import { MdRemove, MdAdd } from "react-icons/md";
import Button from "../../components/Styled/Button.styled";
import StyledCartPage from "../../components/Styled/Cart.Page.styled";

const CartPage = ({ cartItems, setCartItems, addToCart, removeFromCart }) => {

    const getPrices = cartItems.map((cartItem) => cartItem.price * 600 *cartItem.quantity)

    const totalAmount = getPrices.reduce((accumulator, currentValue) => {
        return accumulator + currentValue        
    }, 0)

    return (
        <StyledCartPage>
            {cartItems.length === 0 && 
                <div className="empty-cart">
                    <h2>Sorry, your cart is empty.</h2>    
                </div>
            }
            {cartItems.length > 0 && 
            <table className="table">
                <thead>
                <tr className="cart-items">
                    <th>Item</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price (&#8358;)</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map((product) => {
                    const {title, image, price, id} = product

                    return (
                        <tr className='product-info' key={id}>
                            <td className="img">
                                <img src={image} alt='' />
                            </td>
                            <td className="details">
                                <p>{title}</p>
                            </td>
                            <td className="quantity">
                                <span className='minus' onClick={() => removeFromCart(product)}><MdRemove size='20' className="icon" /></span>
                                <input type='number' value={product.quantity} onChange={(value) => value = product.quantity}className='product-quantity' />
                                <span className='add' onClick={() => addToCart(product)}><MdAdd size='20' className="icon" /></span>
                            </td>
                            <td className="price"> {(price * 600 * product.quantity).toLocaleString('en-US')}</td>
                        </tr>
                    )
                })}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td>Total payable: </td>
                        <td><Link to='/checkout'><Button className="pay-btn">go to checkout</Button></Link></td>
                        <td className="total-amount">{totalAmount.toLocaleString('en-US')}</td>
                    </tr>
                </tfoot>
            </table>
        }
        </StyledCartPage>
    )
}

export default CartPage