import React from "react";
import Button from "../../components/Styled/Button.styled";
import StyledSavedPage from "../../components/Styled/SavedPage.styled";

const SavedPage = ({ favourites, addToCart, removeFromFavourites }) => {

    return (
        <StyledSavedPage>
            {favourites.length === 0 && 
                <div className="empty-cart">
                    <h2>Sorry, you have no saved products.</h2>    
                </div>
            }
            {favourites.length > 0 && 
            <table className="table">
                <thead>
                    <tr className="cart-items">
                        <th>Item</th>
                        <th>Name</th>
                        <th>Include</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
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
                            <td className="quantity">
                                <Button  onClick={() => removeFromFavourites(product)}><span>Remove from favourites</span></Button>
                                <Button onClick={() => {
                                    addToCart(product)
                                removeFromFavourites(product)}
                                }><span>Add to cart</span></Button>
                            </td>
                            <td className="price">&#8358; {(price * 600).toLocaleString('en-US')}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        }
        </StyledSavedPage>
    )
}

export default SavedPage