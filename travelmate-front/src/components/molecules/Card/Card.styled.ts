import styled from "styled-components";

export const CardStyled = styled.article`
    width: 100%;
    max-width: 300px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #e7e2d9;
    border-radius: 18px;
    background: #fffdf8;
    box-shadow: 0 8px 24px rgba(39, 48, 42, 0.08);
    transition: transform 180ms ease, box-shadow 180ms ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 16px 34px rgba(39, 48, 42, 0.15);
    }

    img {
        display: block;
        width: 100%;
        aspect-ratio: 1.35;
        object-fit: cover;
    }

    h3 {
        margin: 1.1rem 1.15rem 0.4rem;
        color: #27302a;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 1.35rem;
        font-weight: 600;
        line-height: 1.1;
    }

    p {
        margin: 0 1.15rem 1.2rem;
        color: #69736c;
        font-size: 0.92rem;
        line-height: 1.5;
    }

    ul {
        list-style: none;
    }
`