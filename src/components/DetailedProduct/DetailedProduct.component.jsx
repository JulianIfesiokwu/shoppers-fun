import { Link, useParams } from "react-router-dom"
import ProductCard from "../ProductCard/ProductCard.component";
import DetailedProductComponent from "../Styled/DetailedProduct.styled"
import { MdArrowBack, MdOutlineFavoriteBorder, MdOutlineAddShoppingCart } from "react-icons/md";
import CategoryList from "../CategoryList/CategoryList.component";
import Button from "../Styled/Button.styled";

const DetailedProduct = ({ products, addToCart, quantity, setQuantity, addToFavourites }) => {
    const { productId } = useParams()    

    const allProductsArray = Array.from(products)
    // get product info
    const product = allProductsArray.find((product) => product.id === parseInt(productId)) 
    // get similar products
    const similarProducts = allProductsArray.filter((item) => item.category === product.category)
    // destructure products
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
                    <p className="price"> &#8358; {(price * 600).toLocaleString('en-US')}</p>
                    <p className="description">{description}</p>
                    <p className="category">Category: {category}</p>
                    <p className="rating">{rating.rate} from {rating.count} reviews</p>
                </article>
                <article className="preferences">
                    <label htmlFor="quantity">
                        Quantity: 
                        <input type="number" placeholder='1' value={product.quantity} onChange={(e) => setQuantity(e.target.value)} className="quantity" min='1' max='99' maxLength='1' required/>
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
                    <Link to='/checkout'><Button className="bigger-button" onClick={() => addToCart(product)}> Buy it now</Button></Link>
                    <Button onClick={() => addToCart(product)}>< MdOutlineAddShoppingCart className="icon" size='15' /> Add to cart</Button>
                    <Button onClick={() => addToFavourites(product)}><MdOutlineFavoriteBorder className="icon" size='15' /> Add to Favourites</Button>
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