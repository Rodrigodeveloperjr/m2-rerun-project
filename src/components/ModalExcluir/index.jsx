import { HeaderModal } from "../ModalEditar/style"
import { Container } from "../ModalCart/style"
import React, { useState } from "react"
import { toast } from "react-toastify"
import api from "../../services/api"
import { Content } from "./style"
import Button from "../Button"


const ModalExcluir = ({ productAtual, setAbrirModalExcluir, products, setProducts }) => {

    const [ loadExcluir, setLoadExcluir ] = useState(false)

    const handleClick = () => {

        setLoadExcluir(true)

        api.delete(`/my/products/${ productAtual.id }`, {
                headers: {
                    Authorization: `Bearer ${ localStorage.getItem("Capstone-M2: token") }`
                }
            })
            .then(_ => {
                
                toast.success("Produto excluído com sucesso!")
                
                setAbrirModalExcluir(false)

                const newList = products.filter(p => p.id !== productAtual.id)

                setProducts(newList)
            })
            .catch(_ => toast.error("Ops! produto não foi excluído"))
            .finally(_ => setLoadExcluir(false))
    }

    return (
        <Container>
            <Content>
                <HeaderModal>
                    <p>Exclusão de produto</p>

                    <button onClick={ () => setAbrirModalExcluir(false) }>x</button>
                </HeaderModal>

                <div className='bodyModal'>
                    <p>Tem certeza que deseja exluir este produto?</p>

                    <div>
                        <Button color="excluirProduto" onClick={ handleClick } disabled={ loadExcluir }>{
                            loadExcluir ? "Excluindo..." : "Sim"
                        }</Button>
                        <Button color="excluirProduto" onClick={ () => setAbrirModalExcluir(false) }>Não</Button>
                    </div>
                </div>
            </Content>
        </Container>
    )
}

export default ModalExcluir
