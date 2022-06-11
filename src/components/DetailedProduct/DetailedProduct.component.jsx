import { Link, useParams, useLocation } from "react-router-dom"
import ProductCard from "../ProductCard/ProductCard.component";
import DetailedProductComponent from "../Styled/DetailedProduct.styled"
import { MdArrowBack, MdOutlineFavoriteBorder, MdOutlineAddShoppingCart } from "react-icons/md";
import CategoryList from "../CategoryList/CategoryList.component";
import Button from "../Styled/Button.styled";

const DetailedProduct = ({ products }) => {
    const location = useLocation()
    const { from } = location.state

    const allProductsArray = Array.from(products)
    console.log(from)

    // get product info
    const product = allProductsArray.find((product) => product.id === from )    
    // get similar products
    const similarProducts = allProductsArray.filter((item) => item.category === product.category)

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
                    <Button className="bigger-button"> Buy it now</Button>
                    <Button>< MdOutlineAddShoppingCart className="icon" size='15' /> Add to cart</Button>
                    <Button><MdOutlineFavoriteBorder className="icon" size='15'/> Add to Favourites</Button>
                </article>
                </div>
            </div>
            <div>
                <h2 className="similar-title">Explore similar products</h2>
                <div className="similar-container">
                    {similarProducts.map((product, index) => {
                        const { id } = product
                        return (
                            <Link to={`/products/${id}`} key={index}>
                                <ProductCard {...product} key={index} className='similar-items'/>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <CategoryList />
        </DetailedProductComponent>
    )
}

export default DetailedProduct