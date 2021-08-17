import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 90vh;

    .top-image {
        flex: 2;
        background: url(${props => props.image});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    h1 {
        flex: 1;
        font-family: 'Dr Sugiyama';
        text-align: center;
        font-size: 5rem;
        font-weight: normal;
        position: relative;
        top: -2rem;
    }

    section {
        flex: 2;
    }
`;