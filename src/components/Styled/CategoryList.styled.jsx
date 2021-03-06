import styled from "styled-components";

const StyledCategoryList = styled.div`
    margin-top: 2rem;

    h2 {
        display: inline-block;
    }

    Button {
        margin-left: 1rem;
        font-size: 1.3rem;
    }

    icon {
        vertical-align: top;
    }

    .all-categories {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1%;
        margin-top: 2rem; 

        a {
            width: 20%;
        }
    }

    @media only screen and (max-width: 600px) {
        h2 {
            margin-bottom: 1.5rem;
        }

        Button {
            margin-left: 0;
        }

        .all-categories {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 1%;
            margin-top: 2rem; 

        a {
            width: 100%;
            margin-bottom: 1.5rem;
        }
    }

    `;

export default StyledCategoryList