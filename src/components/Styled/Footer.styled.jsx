import styled from "styled-components";

const StyledFooter = styled.footer`
    border-top: 1px solid #ddd;

    .all-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 1rem;
    }

    ul {
        list-style-type: none;
    }

    li {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }

    .icon {
        vertical-align: middle;
    }

    .list-title {
        font-size: 1rem;
        font-weight: bold;
    }

    .copyright {
        text-align: center;
        font-size: 0.8rem;
        margin-top: 1rem;
    }
    `;

export default StyledFooter