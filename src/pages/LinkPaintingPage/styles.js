import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    justify-content: space-around;
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