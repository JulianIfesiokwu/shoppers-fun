import { useState } from "react";
import { Link } from "react-router-dom"
import ProductCard from "../../components/ProductCard/ProductCard.component"
import StyledProductsPage from "../../components/Styled/ProductsPage.styled"
import { MdStarRate } from "react-icons/md";

const ProductsPage = (props) => {
    const { products } = props
    // for star rating
    const possibleRating = [1, 2, 3, 4, 5]
    const [selectedRate, setSelectedRate] = useState(null)
    const [hoveredRate, setHoveredRate] = useState(null)

    return (
        <StyledProductsPage>
            <aside className="filters">
                <h2 className="search-title">Refine your Search</h2>
                    <div className="filter-form">
                        <p className="title">By price</p >
                            <label htmlFor="10000">
                                <input type="radio" value='10000' id='10000' name="price" />
                                Less than 10 K
                            </label>
                            <label htmlFor="20000">
                                <input type="radio" value='20000' id='20000' name="price" />
                                Less than 20 K
                            </label>
                            <label htmlFor="30000">
                                <input type="radio" value='30000' id='30000' name="price" />
                                Less than 30 K
                            </label>
                            <label htmlFor="40000">
                                <input type="radio" value='40000' id='40000' name="price" />
                                Less than 40 K
                            </label>
                            <label htmlFor="50000">
                                <input type="radio" value='50000' id='50000' name="price" />
                                Less than 50 K
                            </label>
                            <label htmlFor="60000">
                                <input type="radio" value='60000' id='60000' name="price" />
                                Less than 60 K
                            </label>
                            <label htmlFor="70000">
                                <input type="radio" value='70000' id='70000' name="price" />
                                Less than 70 K
                            </label>
                            <label htmlFor="80000">
                                <input type="radio" value='80000' id='80000' name="price" />
                                Less than 80 K
                            </label>
                            <label htmlFor="90000">
                                <input type="radio" value='90000' id='90000' name="price" />
                                Less than 90 K
                            </label>
                            <label htmlFor="100000">
                                <input type="radio" value='100000' id='100000' name="price" />
                                More than 100 K
                            </label>
                    </div>
                    <div>
                        <p className="title">By category</p>
                        <label htmlFor="men">
                            <input type="radio" id="men" name="category" value="men" />
                            Men
                        </label>
                        <label htmlFor="women">
                            <input type="radio" id="women" name="category" value="women" />
                            Women
                        </label>
                        <label htmlFor="jewellery">
                            <input type="radio" id="jewellery" name="category" value="jewellery" />
                            Jewellery
                        </label>
                        <label htmlFor="electronics">
                            <input type="radio" id="electronics" name="category" value="electronics" />
                            Electronics
                        </label>
                    </div>
                    <div>
                        <p className="title">By rating</p>
                        {possibleRating.map((rate) => {
                            return (
                            <MdStarRate key={rate} size='25' className={rate <= selectedRate ? 'star-rating fill' : 'star-rating not-fill'} 
                            onClick={() => {
                                setSelectedRate(selectedRate)
                                 console.log(rate)}}
                            onMouseEnter={() => setHoveredRate(hoveredRate)}
                            onMouseLeave={() => setHoveredRate(null)} />
                            )
                        })}
                        <>{selectedRate}</>
                    </div>                
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