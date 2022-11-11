import { yupResolver } from "@hookform/resolvers/yup"
import { Content, HeaderModal } from "./style"
import { Container } from "../ModalCart/style"
import { useForm } from "react-hook-form"
import React, { useState } from "react"
import { toast } from "react-toastify"
import api from "../../services/api"
import Button from "../Button"
import Input from "../Input"
import * as yup from "yup"


const ModalEditar = ({ productAtual, setProductAtual, setAbrirModalEditar, products, setProducts }) => {

    const [ loadEditar, setLoadEditar ] = useState(false)

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
            .required("Campo obrigatório!")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunc = data => {

        setLoadEditar(true)

        const newData = { ...data, categoria }
        
        api.patch(`/my/products/${ productAtual.id }`, newData, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("Capstone-M2: token") }`
            }
        })
        .then(_ => {

            toast.success("Produto editado com sucesso!")

            setAbrirModalEditar(false)

            const newList = products.filter(p => p.id !== productAtual.id)

            setProductAtual({})

            setProducts([ ...newList, newData ])
        })
        .catch(_ => toast.error("Ops! produto não foi editado"))
        .finally(_ => setLoadEditar(false))
    }

    return (
        <Container>
            <Content>
                <HeaderModal>
                    <p>Edição de produto</p>

                    <button onClick={ () => setAbrirModalEditar(false) } >x</button>
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
                        value={ productAtual.nome }
                        />
                        <Input
                        tamanho="modalTextarea"
                        label="Descrição"
                        type="text"
                        placeholder="Digitar a descrição"
                        register={ register }
                        name="descricao" 
                        error={ errors.descricao?.message }
                        value={ productAtual.descricao }
                        />

                        <div className='divCategoria'>
                            <label>Categorias</label>

                            <select onChange={ e => setCategoria(e.target.value) }>
                                {
                                    productAtual.categoria === "Panificadora" ? (
                                        <>
                                            <option name="Panificadora">Panificadora</option>
                                            <option name="Frutas">Frutas</option>
                                            <option name="Bebidas">Bebidas</option>
                                        </>
                                        
                                    ) : productAtual.categoria === "Fruta" ? (
                                        <>
                                            <option name="Frutas">Frutas</option>
                                            <option name="Panificadora">Panificadora</option>
                                            <option name="Bebidas">Bebidas</option>
                                        </>

                                    ) : (
                                        <>  
                                            <option name="Bebidas">Bebidas</option>
                                            <option name="Frutas">Frutas</option>
                                            <option name="Panificadora">Panificadora</option>
                                        </>
                                    )
                                }
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
                        value={ productAtual.preco }
                        />
                        <Input
                        tamanho="modal"
                        label="Link da imagem"
                        type="text"
                        placeholder="Inserir link"
                        register={ register }
                        name="imagem" 
                        error={ errors.imagem?.message }
                        value={ productAtual.imagem }
                        />

                        <Button color="editarProduto" type="submit" disabled={ loadEditar }>{
                        
                            loadEditar ? "Salvando..." : "Salvar alterações"
                        
                        }</Button>
                    </form>
                </div>
            </Content>
        </Container>
    )
}

export default ModalEditar
