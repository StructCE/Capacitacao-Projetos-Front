import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    color: var(--blue);
    flex: 1;
    padding: 2rem;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;

    img {
        margin-left: 2.5rem;
        max-height: 30rem;
        max-width: 20rem;
        height: 100%;
        width: 100%;
        object-fit: cover;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 1024px) {
            margin: auto;
            max-width: 80vw;
            max-height: 40vh;
        }
    }

    div {
        position: relative;
        left: 18rem;
        top: -3rem;

        @media screen and (max-width: 1024px) {
            left: 0;
            top: 0;
        }
    }

    h1 {
        font-family: Parisienne;
        font-size: 4rem;
        font-weight: normal;
    }

    span {
        font-family: Parisienne;
        font-size: 1.25rem;
        top: -1rem;
        position: relative;
    }

    p {
        font-size: 1.2rem;
        margin: auto;
        text-align: center;
        width: clamp(50ch, 100%, 75ch);
        white-space: pre-wrap;

        @media screen and (max-width: 768px) {
            width: 100%;
            font-size: 1rem;
        }
    }
`;