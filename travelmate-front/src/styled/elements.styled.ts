import styled from "styled-components";

export const MainStyled = styled.main`
    width: 100%;
    max-width: 1024px;
    margin: auto;
    padding: 1rem;

`

export const ListStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    list-style: none;
    gap: 1rem;
    
    a {
        text-decoration: none;
    }
`