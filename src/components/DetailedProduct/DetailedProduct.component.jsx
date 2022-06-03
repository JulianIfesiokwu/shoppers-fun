import { Link, useParams } from "react-router-dom"

const DetailedProduct = () => {
    const { productId } = useParams()

    return (
        <div className="product-details">
            <p className="">{productId}</p>
            <Link to='/products'>back to products</Link>
        </div>
    )
}

export default DetailedProduct