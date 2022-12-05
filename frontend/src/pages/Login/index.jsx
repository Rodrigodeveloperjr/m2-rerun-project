import { Link, Redirect, useHistory } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useForm } from "react-hook-form"
import React, { useState } from "react"
import { toast } from "react-toastify"
import api from "../../services/api"
import { Container } from "./style"
import * as yup from "yup"


const Login = ({ authentication, setAuthentication }) => {

    const [ load, setLoad ] = useState(false)

    const history = useHistory()

    const schema = yup.object().shape({

        email: yup
            .string()
            .email("Email inválido")
            .required("Campo obrigatório!"),
        password: yup
            .string()
            .required("Campo obrigatório!")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunc = data => {

        setLoad(true)

        api.post("/auth/login", data, {
            
            headers: {
                "Content-Type": "application/json",
            }
            })
            .then(res => {
                
                localStorage.setItem("Capstone-M2: token", res.data)

                toast.success("Login realizado")

                setAuthentication(true)

                history.push("/dashboard")

            })
            .catch(_ => toast.error("Ops! Algo deu errado"))
            .finally(_ => setLoad(false))
    }

    if(authentication) {

        return <Redirect to="/dashboard" />
    }

    return (
        <Container>
        <form onSubmit={ handleSubmit(onSubmitFunc) }>
            
            <h1>Login</h1>
            
            <div>
                <Input
                tamanho="login"
                placeholder="Email" 
                label="Email" 
                type="email" 
                register={ register } 
                name="email" 
                error={ errors.email?.message }
                />
                
                <Input
                tamanho="login"
                placeholder="Senha" 
                label="Senha" 
                type="password" 
                register={ register } 
                name="password" 
                error={ errors.password?.message } 
                />
            </div>

            <Button type="submit" color="login" disabled={ load }>{
                load ? "Entrando..." : "Entrar"
            }</Button>

            <p>Ainda não tem uma conta? <Link to="/cadastro" >Cadastre-se</Link>.</p>
        </form>
    </Container>
    )
}

export default Login
