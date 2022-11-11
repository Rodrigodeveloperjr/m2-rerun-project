import { Container } from "./style"
import React from "react"


const InputDashboard = ({ icon: Icon, ...rest }) => {

    return (
        <Container>
            { Icon && <Icon size={ 18 } /> }
            <input {...rest} />
        </Container>
    )
}

export default InputDashboard
