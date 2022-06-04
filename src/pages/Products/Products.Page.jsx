import { Link } from "react-router-dom"
import ProductCard from "../../components/ProductCard/ProductCard.component"
import StyledProductsPage from "../../components/Styled/ProductsPage.styled"

const ProductsPage = (props) => {
    const { products } = props

    return (
        <StyledProductsPage>
            <aside className="filters">
                <div>
                    <p className="title">Filter by price</p >
                </div>
                <div>
                    <p className="title">Filter by category</p>
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