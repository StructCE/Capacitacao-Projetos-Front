import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 90vh;

    .top-image {
        height: 20rem;
        background-image: url(${props => props.image});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    h1 {
        flex: 1;
        font-family: 'Dr Sugiyama';
        text-align: center;
        font-size: 5rem;
        font-weight: normal;
        position: relative;
        top: -4rem;
        display: flex;
        justify-content: center;
    }

    .actions {
        display: flex;
        justify-content: space-between;

        svg {
            font-size: 1.5rem;
            margin: .2rem;
            z-index: 10;
    
            &:hover {
                cursor: pointer;
            }
        }
    }


    section {
        flex: 2;
    }
`;

export const ImageInput = styled.form`
    height: 20rem;
    width: 100%;
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
        font-size: 1.5rem;

        &:hover {
            background: var(--bege);
            cursor: pointer;
        }
    }
`;