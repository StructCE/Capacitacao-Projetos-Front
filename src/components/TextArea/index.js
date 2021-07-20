import { useState } from 'react'
import { Container } from './style'

const TextArea = ({ Icon, ...props }) => {

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
        <Container isFilled={isFilled} isFocused={isFocused}>
            <Icon size={18} />
            <textarea
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                {...props}
            />
        </Container>
    )
}

export default TextArea
