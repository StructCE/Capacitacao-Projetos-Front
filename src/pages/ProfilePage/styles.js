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
        display: flex;
        flex-direction: column;

        h3 {
            font-size: 2.5rem;
            font-family: Atma;
        }

        a {
            justify-self: flex-end;
            align-self: flex-end;
            color: var(--red);
            
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

export const GalleryContainer = styled.section`
    display: flex;
    flex-direction: column;

    .gallery-wraper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    button {
        width: 15rem;
    }
`;

export const GalleryItem = styled.div`
    height: 20rem;
    width: 20rem;
    margin: 2rem;
    background: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    transition: all .5s;

    div {
        height: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        transition: all .5s;

        h3 {
            text-align: center;
            display: none;
            transition: all .5s;
        }
    }
    

    &:hover {
        transform: scale(110%);

        div {
            background: #415a77af
        }

        h3 {
            display: block;
        }
    }
`;
