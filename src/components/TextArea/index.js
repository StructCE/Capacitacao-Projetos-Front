
import { InputContainer, Container } from './style'
import { useState } from 'react';

const TextArea = ({ Icon, failed, failureMessage, ...props }) => {
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
                <textarea
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    {...props}
                />
            </InputContainer>
            { failed && <span>{failureMessage}</span> }
        </Container>
    )
}

export default TextArea
