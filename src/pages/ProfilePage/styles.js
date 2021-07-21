import styled from "styled-components";

export const InformationContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;

    img {
        height: 10rem;
        width: 10rem;
        border-radius: 50%;
        object-fit: cover;
    }

    .info {
        padding: .5rem;
        min-width: 40vw;

        h3 {
            font-size: 2.5rem;
            font-family: Atma;
        }
    }
`;

export const ImageInput = styled.form`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    position: absolute;
    background: #415a7799;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all .5s;
    opacity: 0;

    input[type="file"] {
        display: none;
    }

    &:hover {
        opacity: 1;
    }

    .custom-file-input:hover {
        cursor: pointer;
    }

    button {
        background: #fff0;
        font-family: inherit;
        color: var(--red);
        border: 2px var(--red) solid;
        border-radius: 5px;
        padding: 4px;
        transition: all .2s;

        &:hover {
            background: var(--bege);
            cursor: pointer;
        }
    }
`;

export const Container = styled.section`

`;

export const NoUser = styled.section`

`;
