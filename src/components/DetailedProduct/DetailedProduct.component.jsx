import { Link, useParams } from "react-router-dom"
import DetailedProductComponent from "../Styled/DetailedProduct.styled"
import { MdArrowBack, MdOutlineFavoriteBorder, MdOutlineAddShoppingCart } from "react-icons/md";
import Button from "../Styled/Button.styled";

const DetailedProduct = (props) => {
    const { products } = props
    const allProductsArray = Array.from(products)

    // get product id
    const { productId } = useParams()
    // get product info
    const product = allProductsArray.find((product) => product.id === parseInt(productId) )
        console.log(product)  

    const { category, price, title, description, rating, image } = product

    return (
        <DetailedProductComponent>
            <Link to='/products'><MdArrowBack className="icon" size='25' />back to products</Link>
            <div className="product">
                <article className="img-container">
                    <img src={image} alt={title} />
                </article>
                <div className="product-details">
                <article className="product-info">
                    <p className="title">{title}</p>
                    <p className="price"> &#8358; {price * 600}</p>
                    <p className="description">{description}</p>
                    <p className="category">{category}</p>
                    <p className="rating">{rating.rate} from {rating.count}</p>
                </article>
                <article className="preferences">
                    <label htmlFor="quantity">
                        qty:
                        <input type="number" />
                    </label>
                    <label htmlFor="colour">
                        Colour:
                        <select>
                            <option value="blue">blue</option>
                            <option value="black">black</option>
                            <option value="red">red</option>
                            <option value="brown">brown</option>
                        </select>
                    </label>
                </article>
                <article className="interact">
                    <Button> Buy it now</Button>
                    <Button>< MdOutlineAddShoppingCart className="icon" size='25' /> Add to cart</Button>
                    <Button><MdOutlineFavoriteBorder className="icon" size='25'/> Add to watchlist</Button>
                </article>
                </div>
            </div>
            <div className="similar"></div>
        </DetailedProductComponent>
    )
}

export default DetailedProduct