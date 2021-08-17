import styled from "styled-components";

export const Container = styled.section`
    background: url(${props => props.image && `http://127.0.0.1:3000${props.image}`});
    height: 100%;
    width: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .initial-area {
        height: 100vh;
        width: 100%;
    }

    .info-area {
        height: 100vh;
        width: 100%;

        .transition {
            background: linear-gradient(to top, #2F3838cf, #fff0);
            width: 100%;
            height: 10%;
        }

        .rest {
            background: #2F3838cf;
            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: column;
            color: var(--bege);

            h1 {
                text-align: center;
                color: var(--green);
                font-size: 3rem;
                justify-self: top;
            }

            p {
                text-align: center;
                margin: auto;
                font-size: 1.5rem;
                width: clamp(50ch, 75%, 75ch);
                justify-self: center;
                white-space: pre-wrap;

                @media (max-width: 768px) {
                    width: 100%;
                }
            }

            .bottom {
                justify-self: flex-end;
                display: flex;
                justify-content: space-between;
                color: var(--blue);
                text-shadow: 0 0 4px #000;

                @media (max-width: 768px) {
                    flex-direction: column;
                }

                div {
                    width: 10rem;
                    height: 15rem;
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;

                    h3 {
                        font-size: 2rem;
                        text-align: center;
                    }

                    @media (max-width: 768px) {
                        width: 100%;
                        height: 100%;
                        min-height: 10rem;
                    }
                }

                .center-div {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    color: var(--bege);

                    .time {
                        font-size: 1.5rem;
                    }
                }
            }

        }
    }
`;

export const Painter = styled.div`
    background: url(${props => props.image && `http://127.0.0.1:3000${props.image}`})
`;

export const Style = styled.div`
    background: url(${props => props.image && `http://127.0.0.1:3000${props.image}`})
`;