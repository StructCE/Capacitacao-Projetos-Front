import styled from "styled-components";
import LeftImage from '../../../assets/LeftImage.jpg'
import RightImage from '../../../assets/RightImage.jpg'

export const Container = styled.section`
    display: flex;
    flex: 1;
    height: 100vh;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    img {
        align-self: center;
        height: 15rem;
        width: 15rem;
        border-radius: 10%;
        object-fit: cover;
    }

`;

export const ImageInput = styled.form`

    height: 15rem;
    width: 15rem;
    border-radius: 10%;
    position: absolute;
    background: #415a7799;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all .5s;
    opacity: 0;
    margin-top: 4rem;
    align-self: center;

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

export const LeftSector = styled.div`
    display: flex;
    flex: 1;
    background: url(${LeftImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .transparent {
        display: flex;
        flex: 4;
    }

    .gradient {
        display: flex;
        flex: 1;
        background: linear-gradient(to right,#ffffff00, var(--bege));
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;

        .gradient {
            background: linear-gradient(to bottom,#ffffff00, var(--bege));
        }
    }
`;

export const CenterSector = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;

    h1 {
        margin-bottom: 10%;
        text-align: center;
        font-size: 4rem;
    }

    @media screen and (max-width: 768px) {
        flex: 2;
        
        h1 {
            font-size: 2rem;
            margin-bottom: 2%;
        }
    }
`;

export const InputSection = styled.form`
    width: 70%;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ErrorSection = styled.span`
    color: #c00;
    font-family: 'Merienda One';
    text-align: center;
`;

export const RightSector = styled.div`
    display: flex;
    flex: 1;
    background: url(${RightImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .transparent {
        display: flex;
        flex: 4;
    }

    .gradient {
        display: flex;
        flex: 1;
        background: linear-gradient(to left,#ffffff00, var(--bege));
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;

        .gradient {
            background: linear-gradient(to top,#ffffff00, var(--bege));
        }
    }
`;
