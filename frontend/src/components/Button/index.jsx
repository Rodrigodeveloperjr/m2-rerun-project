import { Container } from "./style"
import React from "react"


const Button = ({ children, color, ...rest }) => {

    return (
        <Container color={ color } {...rest}>
            { children }
        </Container>
    )
}

export default Button
