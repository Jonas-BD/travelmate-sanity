import styled from "styled-components";

export const NavStyled = styled.nav`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        display: flex;
        list-style: none;
        gap: 1rem;
    }

    li {
        display: flex;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: #333;
        font-weight: bold;
        border-radius: 4px;
        padding: 0.5rem 1rem;

        &:hover, &.active {
            background-color: #e8f1ff;
            color: #1677ff;
        }
    }
`