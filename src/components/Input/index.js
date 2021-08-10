import { useState } from 'react'
import { InputContainer, Container } from './style'

const Input = ({ Icon, failed, failureMessage, ...props }) => {

    const [isFocused, setIsFocoused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleOnFocus = () => {
        setIsFocoused(true);
    }

    const handleOnBlur = (event) => {
        setIsFocoused(false);
        setIsFilled(!!event.target.value);
    }

    return (
        <Container>
            <InputContainer isFilled={isFilled} isFocused={isFocused} failed={failed}>
                <Icon size={18} />
                <input
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    {...props}
                />
            </InputContainer>
            { failed && <span>{failureMessage}</span> }
        </Container>
    )
}

export default Input
