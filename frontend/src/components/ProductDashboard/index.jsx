import { Container } from "./style"
import React from "react"


const ProductDashboard = ({ product, setProductAtual, setAbrirModalEditar, setAbrirModalExcluir }) => {

    const handleClickEditar = () => {

        setProductAtual(product)

        setAbrirModalEditar(true)
    }

    const handleClickExcluir = () => {

        setProductAtual(product)

        setAbrirModalExcluir(true)
    }

    return (
        <Container>
            <div>
                <div>
                    <img src={ product.imagem } alt={ product.nome } />

                    <p className='nomeProduto'>{ product.nome }</p>
                </div>

                <span className='categoriaProduto'>{ product.categoria }</span>
            </div>

            <div className='divBotoesEditarRemover'>
                <p className='descricaoProduto'>{ product.descricao }</p>

                <div>
                    <div onClick={ handleClickEditar }>
                        <button className='botaoEditar'></button>
                    </div>
                    <div onClick={ handleClickExcluir }>
                        <button className='botaoRemover'></button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProductDashboard
