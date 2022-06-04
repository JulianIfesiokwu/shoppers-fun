import { Link } from "react-router-dom"
import ProductCard from "../../components/ProductCard/ProductCard.component"
import StyledProductsPage from "../../components/Styled/ProductsPage.styled"
import { MdStarOutline } from "react-icons/md";

const ProductsPage = (props) => {
    const { products } = props
    console.log(products)

    return (
        <StyledProductsPage>
            <aside className="filters">
                <p>Refine your Search</p>
                <form action="">
                    <div>
                        <p className="title">By price</p >
                        <select name="price" id="price">
                            <option value="10000">less than 10, 000</option>
                            <option value="20000">less than 20, 000</option> 
                            <option value="30000">less than 30, 000</option>
                            <option value="40000">less than 40, 000</option>
                            <option value="50000">less than 50, 000</option>
                            <option value="60000">less than 60, 000</option>
                            <option value="70000">less than 70, 000</option>
                            <option value="80000">less than 80, 000</option>
                            <option value="90000">less than 90, 000</option>
                            <option value="100000">less than 100, 000</option>
                            <option value="100000+">above 100, 000</option>
                        </select>
                    </div>
                    <div>
                        <p className="title">By category</p>
                        <label htmlFor="men">Men
                            <input type="radio" id="men" name="category" value="men" />
                        </label>
                        <label htmlFor="women">Women
                            <input type="radio" id="women" name="category" value="women" />
                        </label>
                        <label htmlFor="jewellery">Jewellery
                            <input type="radio" id="jewellery" name="category" value="jewellery" />
                        </label>
                        <label htmlFor="electronics">Electronics
                            <input type="radio" id="electronics" name="category" value="electronics" />
                        </label>
                    </div>
                    <div>
                        <p className="title">By rating</p>
                        <p><MdStarOutline className="icon" size='25' /></p>
                        <p><MdStarOutline className="icon" size='25' /><MdStarOutline className="icon" size='25' /></p>
                        <p><MdStarOutline className="icon" size='25' /><MdStarOutline className="icon" size='25' /><MdStarOutline className="icon" size='25' /></p>
                        <p><MdStarOutline className="icon" size='25' /><MdStarOutline className="icon" size='25' /><MdStarOutline className="icon" size='25' /><MdStarOutline className="icon" size='25' /></p>
                        <p><MdStarOutline className="icon" size='25' /><MdStarOutline className="icon" size='25' /><MdStarOutline className="icon" size='25' /><MdStarOutline className="icon" size='25' /><MdStarOutline className="icon" size='25' /></p>
                    </div>
                </form>
                
            </aside>
            <section className="product-list">
                <h2 className="title">All products</h2>
                <article className="products-container">
                    {products.map((product, index) => {
                        const { id } = product
                        return (
                            <Link to={`/products/${id}`} key={index}>
                                <ProductCard {...product} />
                            </Link>
                        )
                    })}                                    
                </article>
                </section>
        </StyledProductsPage>
    )
}

export default ProductsPage