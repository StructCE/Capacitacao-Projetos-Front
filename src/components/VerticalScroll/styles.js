import styled from "styled-components";

export const Container = styled.section`
    //max-height: 90vh;

    .swiper-container {
        width: 100%;
        height: 100%;
        max-height: 90vh;

        .swiper-slide {
            //margin: 1.2rem;
            position: relative;
            width: 25rem;
            background: url(${props => props.image});
            background-repeat: no-repeat;
            background-size: cover;
            transition: 500ms all;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                transform: scale(110%);
            }

            div {
                position: absolute;
                z-index: 100;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 500ms;

                h3 {
                    display: none;
                }

                &:hover {
                    background: #4a58599f;

                    h3 {
                        display: block;
                        color: var(--red);
                    }
                }
            }

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
`