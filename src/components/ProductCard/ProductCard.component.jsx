import StyledProductCard from "../Styled/ProductCard.styled"
import { MdAddShoppingCart, MdAddCircleOutline } from "react-icons/md";

const ProductCard = (props) => {
    const { title, image, rating } = props
    console.log(props)

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
                <MdAddCircleOutline className='icon' size='30'  />
                <MdAddShoppingCart className='icon' size='30' />
            </div>       
        </StyledProductCard>
    )
}

export default ProductCard