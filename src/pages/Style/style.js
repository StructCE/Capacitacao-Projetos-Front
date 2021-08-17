import styled from "styled-components";

export const Container = styled.section`
    display: block;
    flex: 1;
    height: 100vh;
    text-align: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

`;

export const Title = styled.p`
    margin: auto;
    margin-top: 1rem;
    font: Parisienne;
    font-size: 4rem;
    color: #415A77;
`;


export const LeftSector = styled.div`
    @media screen and (min-width: 768px) {
        float: left;
        width: 50%;
        img{
            margin-top: -4rem;
            max-width: 50%;
            max-height: 40%;
        }
    }
    width: 100%;
    align-self: center;
    img{
        max-width: 50%;
        max-height: 40%;
    }
`;
export const RightSector = styled.div`
    @media screen and (min-width: 768px) {
        float: right;
        width: 50%;
        p{  
        max-width: 60%;
        text-align: left;

    }
    }
    width: 100%;
    align-self: center;
    p{  
        max-width: 100%;
        margin: 0 0.5rem;
        text-align: center;
        font-size: 1.25rem;
        color: #415A77;

    }
    
`;

