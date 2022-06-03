import React from "react";
import StyledCategoryCard from "../Styled/CategoryCard.styled";

const CategoryCard = (props) => {

    return (
        <StyledCategoryCard >
            <div className="img-container">
                <img src={props.img} alt='' />
            </div>
            <h2>{props.name}</h2>

        </StyledCategoryCard>
    )
}

export default CategoryCard