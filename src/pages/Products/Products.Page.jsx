import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Button from "../../components/Styled/Button.styled";
import ProductCard from "../../components/ProductCard/ProductCard.component"
import StyledProductsPage from "../../components/Styled/ProductsPage.styled"
import { MdStarRate } from "react-icons/md";

const ProductsPage = ({ setFiltered, products, filtered, filterValue, setFilterValue }) => {
    // for star rating
    const possibleRating = [1, 2, 3, 4, 5]
    const [selectedRate, setSelectedRate] = useState(null)
    const [hoveredRate, setHoveredRate] = useState(null)

    useEffect(() => {        
        let filteredProducts = products.filter((product) => {
            return product.price*600 < filterValue
        })
        console.log(filteredProducts)
        
        setFiltered(filteredProducts)

    }, [products, setFiltered, filterValue])

    return (
        <StyledProductsPage>
            <aside className="filters">
                <h2 className="search-title">Refine your Search</h2>
                    <div className="filter-form">
                        <p className="title">By price</p >
                        <select name="price" id="price" onChange={(e) => setFilterValue(e.target.value)}>
                            <option value="10000">less than 10K</option>
                            <option value="20000">less than 20K</option>
                            <option value="40000">less than 40K</option>
                            <option value="60000">less than 60K</option>
                            <option value="80000">less than 80K</option>
                            <option value="100000">less than 100K</option>
                            <option value="all">all</option>
                        </select>
                    </div>
                    <div>
                        <p className="title">By category</p>
                        <label htmlFor="men">
                            <input type="checkbox" id="men" value="men" />
                            <p>Men</p>
                        </label>
                        <label htmlFor="women">
                            <input type="checkbox" id="women" value="women" />
                            <p>Women</p>
                        </label>
                        <label htmlFor="jewellery">
                            <input type="checkbox" id="jewellery" value="jewellery" />
                            <p>Jewellery</p>
                        </label>
                        <label htmlFor="electronics">
                            <input type="checkbox" id="electronics" value="electronics" />
                            <p>Electronics</p>
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
                        <p>{selectedRate}</p>
                    </div>
                    <div className="clear-all">
                        <Button>Clear all filters</Button></div>             
            </aside>
            <section className="product-list">
                <h2 className="search-title">All products</h2>
                <article className="products-container">
                    {filtered.map((product, index) => {
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