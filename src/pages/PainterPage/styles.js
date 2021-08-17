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
    min-height: 70vh;
    max-width: 100vw;

    img {
        margin-left: 2.5rem;
        height: 30rem;
        width: 20rem;
        object-fit: cover;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 1024px) {
            margin: auto;
            max-width: 80vw;
            max-height: 40vh;
        }
    }

    form {
        position: absolute;
        height: 30rem;
        width: 20rem;
        background: #415a77aa;
        margin-left: 2.5rem;
        opacity: 0;
        transition: all .5s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &:hover {
            opacity: 1;
        }

        label {
            color: var(--red);

            input[type="file"] {
                display: none;
            }

            &:hover {
                cursor: pointer;
            }
        }

        button {
            background: #fff0;
            margin: 0;
        }
    }

    div {
        position: relative;
        left: 18rem;
        top: -3rem;
        max-width: 50%;

        @media screen and (max-width: 1024px) {
            left: 0;
            top: 0;
            max-width: 100%;
        }

        .admin-actions {
            display: flex;
            flex: 1;

            svg {
                font-size: 2rem;

                &:hover {
                    cursor: pointer;
                }
            }
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
        word-break: break-word;

        @media screen and (max-width: 768px) {
            width: 100%;
            max-width: 80vw;
            font-size: 1rem;
        }
    }
`;