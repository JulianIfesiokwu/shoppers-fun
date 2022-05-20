import React from "react";
import StyledCategoryCard from "../Styled/CategoryCard.styled";

const CategoryCard = (props) => {
    const {item} = props
    return (
        <StyledCategoryCard >
            <div className="img-container">
                <img src={item.img} alt='' />
            </div>
            <h2>{item.name}</h2>

        </StyledCategoryCard>
    )
}

export default CategoryCard