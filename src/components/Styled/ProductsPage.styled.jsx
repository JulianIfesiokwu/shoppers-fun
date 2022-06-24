import styled from "styled-components";

const StyledProductsPage = styled.section`
    display: flex;
    padding: 2rem 0;
    gap: 2%;

    .filters {
        min-width: 18%;
        display: inline-block;
    }

    .search-title {
        color: var(--primary-color);
        margin-bottom: 2rem;
    }

    label {
        margin-bottom: 0.5rem;
        display: block;

        p {
            display: inline;
            margin-left: 0.5rem;    
        }
    }

    .title {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        font-weight: 700;
    }

    svg {
        cursor: pointer;

        &.not-fill g{
            fill: #ddd;
        }

        &.fill g{
            fill: red;
        }
    }

    .products-container {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1%;
        width: 100%;

        a {
            display: flex;
            width: 19%;
        }
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;

            .products-container {
                margin-top: 2rem;
                flex-direction: column;
                justify-content: space-between;
                gap: 1%;
            a {
                display: flex;
                width: 100%;
            }
        }
    }
`

export default StyledProductsPage