import styled from "styled-components";

const StyledHomepage = styled.div`
    margin: 1rem 0;

    .carousel{
        width: 100%;
        position: relative;
    }

    .slide {
        opacity: 0;
        transition-duration: 1s ease;
    }

    .slide.active {
        opacity: 1;
        transition-duration: 1s ease;
    }

    .slide::before {
        content: "";
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .left-chevron {
        position: absolute;
        top: 40%;
        left: 0;
        cursor: pointer;
        user-select: none;
        color: white;
        z-index: 6;
    }
    .right-chevron {
        position: absolute;
        top: 40%;
        right: 0;
        cursor: pointer;
        user-select: none;
        color: white;
        z-index: 6;
    }

    img-container {
        width: 100%
    }

    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }

    .icon {
        vertical-align: top;
        margin-left: 0.5rem;
    }

    .section-info {
        position: absolute;
        top: 60%;
        left: 2%;
        color: white;
        z-index: 5;
    }

    .select-category {
        background-color: transparent;
        color: white;
        border: 1px solid white;
        text-align: center;
        font-size: 2rem;

        :hover {
            color: white;
            background-color: var(--secondary-color);
            border: 1px solid var(--secondary-color);
        }
    }

    p {
        width: 60%;
        margin-top: 0.5rem;
        font-size: 1.1rem;
        line height: 30px;
    }

    @media only screen and (max-width: 600px) {
        .section-info {
            width: 100%;
            top: 70%;  
            left: 50%; 
            transform: translate(-50%, -50%);
            text-align: center;
        }

        .select-category {
            font-size: 1.5rem;
        }

        .about-image {
            font-size: 1rem;
            width: 80%;
            margin: 0 auto;
            margin-top: 1rem;
        }
    }
`;

export default StyledHomepage