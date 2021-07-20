import styled from "styled-components";

export const Container = styled.button`
    margin: auto;
    align-self: center;
    width: 80%;
    background-color: var(--bege);
    height: 3.125rem;
    font-size: 1.1rem;
    font-family: 'Merienda One';
    transition: all .3s;
    border-radius: 5px;
    border: 2px var(--red) solid;
    color: var(--red);

    &:hover {
        background-color: var(--red);
        cursor: pointer;
        color: var(--bege);
    }
`