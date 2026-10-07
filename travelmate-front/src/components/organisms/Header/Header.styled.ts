import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;

    > section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    h1 {
        display: flex;
        align-items: center;

        & span {
            color: blue;
        }
    }

    svg {
        fill: black;
        stroke: black;
        width: 4rem;
        height: 4rem;
    }

    a {
        text-decoration: none;
        color: black;
    }
`