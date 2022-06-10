import StyledProductCard from "../Styled/ProductCard.styled"
import { MdAddShoppingCart, MdAddCircleOutline } from "react-icons/md";

const ProductCard = ({product, addToFavourites}) => {
    const { title, image, rating } = product
    return (
        <StyledProductCard >
            <div className="img-container">
                <img src={image} alt={title} />
            </div>
            <div className="card-details">
                <p className="name">{title.length < 15 ? title : title.slice(0, 15).concat('...')}</p>
                <p className="rating">{rating.rate}</p>
            </div>
            <div className="interactions">
                <MdAddCircleOutline className='icon' size='30' onClick={() => addToFavourites(product)} />
                <MdAddShoppingCart className='icon' size='30' />
            </div>       
        </StyledProductCard>
    )
}

export default ProductCard