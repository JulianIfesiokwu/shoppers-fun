import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Button from "../../components/Styled/Button.styled";
import ProductCard from "../../components/ProductCard/ProductCard.component"
import StyledProductsPage from "../../components/Styled/ProductsPage.styled"
import { MdStarRate } from "react-icons/md";
import Loading from '../../assets/Loading.gif'

const ProductsPage = ({ setFiltered, products, filtered, filterValue, setFilterValue, loading, categoryFilter, setCategoryFilter, cart, setCart }) => {
    // for star rating
    const possibleRating = [1, 2, 3, 4, 5]
    const [selectedRate, setSelectedRate] = useState(null)
    const [hoveredRate, setHoveredRate] = useState(null)

    useEffect(() => {        
        let filteredProducts = products.filter((product) => {
            return product.price*600 < filterValue
        })

        if(filterValue) {
            setFiltered(filteredProducts)
            return
        }
        if(!filterValue) {
            setFiltered(products)
            return
        }
    }, [filterValue, products, setFiltered])

    useEffect(() => {
        let filteredProducts = products.filter((product) => {
            return product.category.includes(categoryFilter)
        })

        if(categoryFilter === 'men') {
            setFiltered(filteredProducts)
            return
        }
        if(categoryFilter === 'women') {
            setFiltered(filteredProducts)
            return
        }
        if(categoryFilter === 'jewelery') {
            setFiltered(filteredProducts)
            return
        }
        if(categoryFilter === 'electronics') {
            setFiltered(filteredProducts)
            return
        }
    }, [categoryFilter, products, setFiltered])

    return (
        <StyledProductsPage>
            <aside className="filters">
                <h2 className="search-title">Refine your Search</h2>
                    <div className="filter-form">
                        <p className="title">By price</p >
                        <select name="price" id="price" onChange={(e) => setFilterValue(e.target.value)}>
                            <option value="">choose a price range</option>
                            <option value="10000">less than 10K</option>
                            <option value="20000">less than 20K</option>
                            <option value="40000">less than 40K</option>
                            <option value="60000">less than 60K</option>
                            <option value="80000">less than 80K</option>
                            <option value="100000">less than 100K</option>
                        </select>
                    </div>
                    <div>
                        <p className="title">By category</p>
                        <label htmlFor="men">
                            <input type="radio" id="men" name='products' value="men" onChange={(e) => setCategoryFilter(e.target.value)} />
                            <p>Men</p>
                        </label>
                        <label htmlFor="women">
                            <input type="radio" id="women" name='products' value="women" onChange={(e) => setCategoryFilter(e.target.value)}/>
                            <p>Women</p>
                        </label>
                        <label htmlFor="jewellery">
                            <input type="radio" id="jewelery" name='products' value="jewelery" onChange={(e) => setCategoryFilter(e.target.value)}/>
                            <p>Jewelery</p>
                        </label>
                        <label htmlFor="electronics">
                            <input type="radio" id="electronics" name='products' value="electronics" onChange={(e) => setCategoryFilter(e.target.value)}/>
                            <p>Electronics</p>
                        </label>
                    </div>
                    <div>
                        <p className="title">By rating</p>
                        {possibleRating.map((rate) => {
                            return (
                            <MdStarRate key={rate} size='25' className={rate <= selectedRate ? 'star-rating fill' : 'star-rating not-fill'} 
                            onClick={() => {
                                setSelectedRate(selectedRate)}}
                            onMouseEnter={() => setHoveredRate(hoveredRate)}
                            onMouseLeave={() => setHoveredRate(null)} />
                            )
                        })}
                        <p>{selectedRate}</p>
                    </div>
                    <div className="clear-all">
                        <Button onClick={() => setFiltered(products)}>Clear all filters</Button></div>             
            </aside>
            <section className="product-list">
                <h2 className="search-title">All products</h2>
                <article className="products-container">
                    {loading && 
                        <div className="loading">
                            <h2>Fetching products...</h2>
                            <img src={Loading} alt='' />
                        </div>}
                    {filtered.map((product) => {
                        const {id} = product
                        return (
                            <Link to={`/products/${id}`} key={id}>
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