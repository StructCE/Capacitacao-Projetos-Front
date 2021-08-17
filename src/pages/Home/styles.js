import styled from "styled-components";

export const Container = styled.section`
    text-align: center;

    .intro-text {
        font-size: 1.5rem;
        margin: 3rem auto;
        text-align: center;
        max-width: 75ch;
    }
`;

export const ImageSection = styled.section`
    background: url(${props => props.image});
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex: 1;
    flex-direction: column;

    .top-bar {
        display: flex;
        flex: 1;
        background: linear-gradient(to top, #fff0, var(--bege));
    }

    .middle {
        display: flex;
        flex: 3;
        align-items: center;
        justify-content: center;

        h1 {
            color: var(--bege);
            font-size: 4rem;
            font-family: 'Merienda One';
        }
    }

    .bottom-bar {
        display: flex;
        flex: 1;
        background: linear-gradient(to bottom, #fff0, var(--bege));
    }
`;

export const ScrollSection = styled.section`
    h2 {
        font-size: 3rem;
        font-family: 'Marck Script';
        font-weight: normal;
    }
`;