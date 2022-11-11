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


const Cadastro = ({ authentication }) => {

    const [ load, setLoad ] = useState(false)

    const history = useHistory()

    const schema = yup.object().shape({

        name: yup
            .string()
            .required("Campo obrigátorio!")
            .min(2, "Minimo 2 caracteres"),
        email: yup
            .string()
            .required("Campo obrigátorio!")
            .email("Email invalido"),
        password: yup
            .string()
            .required("Campo obrigátorio!")
            .min(8, "Minimo 8 caracteres")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunc = data => {

        setLoad(true)
        
        console.log(data)

        api.post("/auth/register", data, {
            
            headers: {
                "Content-Type": "application/json",
            }
            })
            .then(_ => {

                toast.success("Cadastro realizado")
                
                history.push("/login")
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
                <h1>Cadastro</h1>

                <div>
                    <Input
                    tamanho="login"
                    placeholder="Nome"
                    label="Nome"
                    type="text"
                    register={ register }
                    name="name"
                    error={ errors.nome?.message }
                    />
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
                    error={ errors.senha?.message }
                    />
                </div>

                <Button type="submit" color="login" disabled={ load }>{
                    load ? "Registrando..." : "Registrar"
                }</Button>

                <p>Já tem uma conta? <Link to="/login">Entre</Link>.</p>
            </form>
        </Container>
    )
}

export default Cadastro
