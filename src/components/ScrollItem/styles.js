import styled from "styled-components";

export const Container = styled.div`
    margin: 1.2rem;
    position: relative;
    min-width: 20rem;
    min-height: 20rem;
    background: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    transition: 500ms all;

    &:hover {
        transform: scale(110%);
    }

    div {
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 500ms;

        h3 {
            display: none;
        }

        &:hover {
            background: #4a58599f;

            h3 {
                display: block;
            }
        }
    }
`