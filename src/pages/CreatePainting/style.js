import styled from "styled-components";
import LeftImage from '../../assets/Scream.jpg'
import RightImage from '../../assets/barco.jpg'

export const Container = styled.section`
    display: flex;
    flex: 1;
    height: 100vh;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const LeftSector = styled.div`
    display: flex;
    flex: 1;
    background: url(${LeftImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .transparent {
        display: flex;
        flex: 4;
    }

    .gradient {
        display: flex;
        flex: 1;
        background: linear-gradient(to right,#ffffff00, var(--bege));
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;

        .gradient {
            background: linear-gradient(to bottom,#ffffff00, var(--bege));
        }
    }
`;

export const CenterSector = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;

    h1 {
        margin-bottom: 10%;
        text-align: center;
        font-size: 4rem;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

export const InputSection = styled.form`
    width: 70%;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const RightSector = styled.div`
    display: flex;
    flex: 1;
    background: url(${RightImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .transparent {
        display: flex;
        flex: 4;
    }

    .gradient {
        display: flex;
        flex: 1;
        background: linear-gradient(to left,#ffffff00, var(--bege));
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;

        .gradient {
            background: linear-gradient(to top,#ffffff00, var(--bege));
        }
    }
`;

export const selectStyle = {
    container: (provided, state) => ({
        ...provided,
        borderRadius: '8px',
        border: state.isSelected ? 
        '1px solid #4a5859' :
        '1px solid #581f18',
        width: '95%',
        outline: 'none',
        '&:hover': {
            borderColor: '#581f18'
        },
        margin: '.2rem'
    }),

    controller: (provided) => ({
        ...provided,
        border: 'none',
        '&:hover': {
            borderColor: '#581f18'
        },
    })
}
