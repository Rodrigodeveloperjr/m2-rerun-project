import { Container, HeaderCart, BodyCart } from "./style"
import Cart_white from "../../assets/carrinhoBranco.png"
import Bag from "../../assets/shopping-bag.png"
import CartTotal from "../CartTotal"
import React from "react"


const Cart = ({ children, currentSale }) => {

    return (
        <Container>
            <HeaderCart>
                <img src={ Cart_white } alt="cart" />
                
                <p>Carrinho</p>
            </HeaderCart>

            <BodyCart>
                {
                    currentSale.length > 0 ? (
                        <>
                            <div className="listProduct">
                                {
                                    children
                                }
                            </div>
                            <CartTotal currentSale={ currentSale } />
                        </>
                    ) : (

                        <div className="container">
                            <img src={ Bag } alt="bag" />

                            <p>Por enquanto não temos produtos no carrinho</p>
                        </div>
                    )
                }
            </BodyCart>
        </Container>
    )
}

export default Cart
