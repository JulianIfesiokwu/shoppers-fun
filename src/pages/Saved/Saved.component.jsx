import React from "react";
import { MdRemove, MdAdd } from "react-icons/md";
import StyledSavedPage from "../../components/Styled/SavedPage.styled";

const SavedPage = ({ favourites }) => {

    return (
        <StyledSavedPage>
            {favourites.length === 0 && 
                <div className="empty-cart">
                    <h2>Sorry, you have no saved products.</h2>    
                </div>
            }
            {favourites.length > 0 && 
            <table>
                <tr className="cart-items">
                    <th>Item</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr> 
                {favourites.map((product) => {
                    const {title, image, price, id} = product

                    return (
                        <tr className='product-info' key={id}>
                            <td className="img">
                                <img src={image} alt='' />
                            </td>
                            <td className="details">
                                <p>{title}</p>
                            </td>
                            {/* <td className="quantity">
                                <span onClick={() => removeFromCart(product)}><MdRemove size='20' className="icon" /></span>
                                <input type='number' value={product.quantity} className='product-quantity' />
                                <span onClick={() => addToCart(product)}><MdAdd size='20' className="icon" /></span>
                            </td>
                            <td className="price">&#8358;{price * 600 * product.quantity}</td> */}
                        </tr>
                    )
                })}
            </table>
        }
        </StyledSavedPage>
    )
}

export default SavedPage