import { Container } from "./style"
import React from "react"


const Input = ({ label, register, name, error, tamanho, ...rest }) => {

    return (
        <Container tamanho={ tamanho }>
            <div>{ label } {!!error && <span> - { error }</span>}</div>

            <input {...register(name)} {...rest} />
            
        </Container>
    )
}

export default Input
