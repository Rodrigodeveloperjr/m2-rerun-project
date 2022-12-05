import { Container } from "./style"
import React from "react"


const Product = ({ product, addCart }) => {

    return (
        <Container>
            <img src={ product.imagem } alt={ product.nome } />

            <div>
                <h3>{ product.nome }</h3>

                <p>{ product.descricao }</p>

                <span>{ product.categoria }</span>

                <div>
                    <span>R$ { product.preco.toFixed(2) }</span>

                    <button onClick={ () => addCart(product) }></button>
                </div>
            </div>
        </Container>
    )
}

export default Product
