import styled, { css } from "styled-components";

export const Container = styled.div`
    background: #fff;
    width: 90%;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    max-height: 3.125rem;
    min-height: 2rem;
    align-items: center;
    margin: 5px;
    border: 1px solid var(--grey);
    transition: all .5s;

    svg {
        color: var(--grey);
        transition: all .5s;
    }

    input {
        margin-left: .3rem;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-family: 'Merienda One';
        font-size: .8rem;
        color: var(--grey);
    }

    ${
        props => (props.isFocused || props.isFilled) && 
        css`
            border-color: var(--red);

            svg {
                color: var(--red);
            }

            input {
                color: var(--red);
            }
        `
    }
`