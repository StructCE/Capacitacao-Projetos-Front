import styled from "styled-components";

export const Container = styled.section`
    .container {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
        justify-content: center;
        align-items: center;
        padding: 20px;
        flex-direction: row;
        
        &::-webkit-scrollbar {
            display: none;
        }
    }
`