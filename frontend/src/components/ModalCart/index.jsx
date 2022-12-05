import cart from "../../assets/carrinhoBranco.png"
import Bag from "../../assets/shopping-bag.png"
import { Container, Content } from "./style"
import CartTotal from "../CartTotal"
import React from "react"


const ModalCart = ({ children, currentSale, setAbrirModal }) => {

    return (
        <Container>
            <Content>
                <div className='cartHeader'>
                    <div>
                        <img src={ cart } alt="cart" />
                        <p>Carrinho</p>
                    </div>

                    <button onClick={ () => setAbrirModal(false) }>x</button>
                </div>

                <menu>
                    {
                        currentSale.length > 0 ? (
                            <>
                                <div className="listProductCart">
                                    {
                                        children
                                    }
                                </div>
                                <CartTotal currentSale={ currentSale } />
                            </>
                        ) : (

                            <div className="containerCart">
                                <img src={ Bag } alt="bag" />

                                <p>Por enquanto não temos produtos no carrinho</p>
                            </div>
                        )
                    }
                </menu>
            </Content>
        </Container>
    )
}

export default ModalCart
