import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .info-section {
        flex: 3;
        display: flex;
        padding: 2rem;

        img {
            flex: 1;
            max-width: 20rem;
            max-height: 40rem;
            object-fit: cover;
        }

        div {
            flex: 4;
            display: flex;
            align-content: center;
            justify-content: center;
            flex-direction: column;
            padding: 2rem;
            color: var(--grey);

            .admin-actions {
                flex: 0;
                display: flex;
                flex-direction: row;

                svg {
                    align-self: flex-end;
                    font-size: 1.5rem;
    
                    &:hover {
                        cursor: pointer;
                    }
                }
            }


            p {
                font-size: 1.2rem;
                white-space: pre-wrap;
                text-align: center;
                width: clamp(50ch, 75%, 75ch);
                align-self: center;
            }

            h1 {
                font-size: 3rem;
                font-family: 'Parisienne';
            }
        }
    }

    section {
        flex: 1;
    }
`;
