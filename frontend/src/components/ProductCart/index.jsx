import { Container } from "./style"
import React from "react"


const ProductCart = ({ product, removerProduct, addCart, removeProductCount }) => {

    return (
        <Container>
            <img src={ product.imagem } alt={ product.nome } />

            <div>
                <h4>{ product.nome }</h4>

                <p>{ product.categoria }</p>

                <span>R$ { product.preco.toFixed(2) }</span>
            </div>

            <section>
                <p onClick={ () => removerProduct(product) }>
                    <button></button>
                </p>

                <div>
                    <button onClick={ () => addCart(product) }>+</button>
                    <span>{ product.count }</span>
                    <button onClick={ () => removeProductCount(product) }>-</button>
                </div>
            </section>
        </Container>
    )
}

export default ProductCart
