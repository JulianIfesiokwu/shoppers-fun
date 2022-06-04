import StyledProductCard from "../Styled/ProductCard.styled"

const ProductCard = (props) => {
    const { title, image, rating} = props
    return (
        <StyledProductCard >
            <div className="img-container">
                <img src={image} alt={title} />
            </div>
            <div className="card-details">
                <p className="name">{title.length < 14 ? title : title.slice(0, 14).concat('...')}</p>
                <p className="rating">{rating.rate}</p>
            </div>        
        </StyledProductCard>
    )
}

export default ProductCard