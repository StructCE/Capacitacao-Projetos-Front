import { useState } from 'react'
import { Container } from './style'

const Input = ({ Icon, ...props }) => {

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
            <input
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                {...props}
            />
        </Container>
    )
}

export default Input
