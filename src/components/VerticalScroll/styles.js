import styled from "styled-components";

export const Container = styled.section`
    .container {
        display: flex;
        flex-wrap: nowrap;
        max-height: 90vh;
        flex-direction: column;
        overflow-x: scroll;
        justify-content: center;
        align-items: center;
        padding: 20px;
        flex: 0;
        
        &::-webkit-scrollbar {
            display: none;
        }
    }
`