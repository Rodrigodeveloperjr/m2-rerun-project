import { yupResolver } from "@hookform/resolvers/yup"
import { HeaderModal } from "../ModalEditar/style"
import { Container } from "../ModalCart/style"
import { useForm } from "react-hook-form"
import React, { useState } from "react"
import { toast } from "react-toastify"
import api from "../../services/api"
import { Content } from "./style"
import Button from "../Button"
import Input from "../Input"
import * as yup from "yup"


const ModalCriarProduto = ({ setAbrirModal, addProduct }) => {

    const [ load, setLoad ] = useState(false)

    const [ categoria, setCategoria ] = useState("Panificadora")

    const schema = yup.object().shape({

        nome: yup
            .string()
            .required("Campo obrigatório!"),
        descricao: yup
            .string()
            .required("Campo obrigatório!"),
        preco: yup
            .string()
            .required("Campo obrigatório!"),
        imagem: yup
            .string()
            .required("Campo obrigatório!"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunc = data => {

        setLoad(true)

        const newData = { ...data, categoria }

        api.post("/my/products", newData, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("Capstone-M2: token") }`
            }
        })
        .then(res => {

            toast.success("Produto criado com sucesso!")

            setAbrirModal(false)

            addProduct(res.data)
        })
        .catch(_ => toast.error("Ops! produto não foi criado"))
        .finally(_ => setLoad(false))
    }

    return (
        <Container>
            <Content>
                <HeaderModal>
                    <p>Cadastro de produto</p>

                    <button onClick={ () => setAbrirModal(false) }>x</button>
                </HeaderModal>

                <div>
                    <form onSubmit={ handleSubmit(onSubmitFunc) }>
                        
                        <Input
                        tamanho="modal"
                        label="Nome do Produto"
                        type="text"
                        placeholder="Digitar o nome"
                        register={ register }
                        name="nome" 
                        error={ errors.nome?.message }
                        />
                        <Input
                        tamanho="modalTextarea"
                        label="Descrição"
                        type="text"
                        placeholder="Digitar a descrição"
                        register={ register }
                        name="descricao" 
                        error={ errors.descricao?.message }
                        />

                        <div className='divCategoria'>
                            <label>Categorias</label>

                            <select onChange={ e => setCategoria(e.target.value) }>
                                <option name="Panificadora">Panificadora</option>
                                <option name="Frutas">Frutas</option>
                                <option name="Bebidas">Bebidas</option>
                            </select>
                        </div>
                        
                        <Input
                        tamanho="modal"
                        label="Valor do Produto"
                        type="number"
                        placeholder="Digitar o valor aqui"
                        register={ register }
                        name="preco" 
                        error={ errors.preco?.message }
                        />
                        <Input
                        tamanho="modal"
                        label="Link da imagem"
                        type="text"
                        placeholder="Inserir link"
                        register={ register }
                        name="imagem" 
                        error={ errors.imagem?.message }
                        />

                        <Button color="editarProduto" type="submit" disabled={ load }>{
                        
                            load ? "Cadastrando..." : "Cadastrar Produto"
                        
                        }</Button>
                    </form>
                </div>
            </Content>
        </Container>
    )
}

export default ModalCriarProduto
