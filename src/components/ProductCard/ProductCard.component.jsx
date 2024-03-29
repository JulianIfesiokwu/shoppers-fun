import React from "react";
import StyledProductCard from "../Styled/ProductCard.styled";

const ProductCard = (props) => {
  const { title, image, rating } = props;

  return (
    <StyledProductCard>
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <div className="card-details">
        <p className="name">
          {title.length < 15 ? title : title.slice(0, 20).concat("...")}
        </p>
        <p className="rating">
          {rating.rate} from {rating.count} reviews
        </p>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
