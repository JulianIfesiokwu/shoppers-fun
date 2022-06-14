import React from "react";
import { useEffect } from "react";
import { MdRemove, MdAdd } from "react-icons/md";
import StyledCartPage from "../../components/Styled/Cart.Page.styled";

const CartPage = ({ cartItems, setCartItems, addToCart, removeFromCart }) => {

    return (
        <StyledCartPage>
            {cartItems.length === 0 && 
                <div className="empty-cart">
                    <h2>Sorry, your cart is empty.</h2>    
                </div>
            }
            {cartItems.length < 0 && 
            <table>
                <tr className="cart-items">
                    <th>Item</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
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
                                <span onClick={() => removeFromCart(product)}><MdRemove size='20' className="icon" /></span>
                                <input type='number' />
                                <span onClick={addToCart}><MdAdd size='20' className="icon" /></span>
                            </td>
                            <td className="price">&#8358;{price * 600}</td>
                        </tr>
                    )
                })}
            </table>
        }
        </StyledCartPage>
    )
}

export default CartPage