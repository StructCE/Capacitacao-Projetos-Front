import styled, { css } from "styled-components";


export const InputContainer = styled.div`
    background: #fff;
    width: 90%;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    max-height: 6.25rem;
    min-height: 4rem;
    min-height: 2rem;
    align-items: center;
    margin: 5px;
    border: 1px solid var(--grey);
    transition: all .5s;

    svg {
        color: var(--grey);
        transition: all .5s;
    }

    textarea {
        resize: none;
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

    ${
        props => (props.failed) && 
        css`
            border-color: #c00;

            svg {
                color: #c00;
            }

            input {
                color: #c00;
            }
        `
    }

`

export const Container = styled.div`
    transition: all .2s;

    span {
        padding-left: 10px;
        color: #c00;
    }
`
