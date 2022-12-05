import { Container } from "./style"
import React from "react"


const CartTotal = ({ currentSale }) => {

    return (
        <Container>
            <div className="quantidade">
                <p>Quantidade:</p>

                <span>{ currentSale.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.count, 0) }</span>
            </div>
            
            <div>
                <p>Preço:</p>

                <span>R$ { currentSale.reduce((valorAnterior, valorAtual) => valorAnterior + Number(valorAtual.preco) * valorAtual.count, 0).toFixed(2).replace(".", ",") }</span>
            </div>
        </Container>
    )
}

export default CartTotal
