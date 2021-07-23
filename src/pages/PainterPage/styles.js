import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    color: var(--blue);
    flex: 1;
    padding: 2rem;
`;

export const InfoContainer = styled.div`
    width: 100%;

    img {
        margin-left: 2.5rem;
        max-height: 30rem;
        max-width: 25rem;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    div {
        position: absolute;
        top: 29rem;
        left: 22rem;
    }

    h1 {
        font-family: Parisienne;
        font-size: 4rem;
        font-weight: normal;
    }

    span {
        font-family: Parisienne;
        font-size: 2rem;
    }

    p {
        margin-top: 7rem;
        margin-left: 5rem;
        max-width: 50rem;
        font-size: 1.2rem;
    }
`;