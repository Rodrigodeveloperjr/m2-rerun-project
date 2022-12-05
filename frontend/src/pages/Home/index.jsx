import { HeaderStyled, Container, Content, ProductList } from "./style"
import InputDashboard from "../../components/InputDashboard"
import ProductCart from "../../components/ProductCart"
import useLocalStorage from "../../components/Hook"
import React, { useEffect, useState } from "react"
import ModalCart from "../../components/ModalCart"
import cart from "../../assets/carrinhoBranco.png"
import TelaLoad from "../../components/TelaLoad"
import Product from "../../components/Product"
import { useHistory } from "react-router-dom"
import Button from "../../components/Button"
import Titulo from "../../assets/titulo.png"
import { FiSearch } from "react-icons/fi"
import Cart from "../../components/Cart"
import Menu from "../../assets/menu.png"
import api from "../../services/api"


const Home = () => {

    const [ cards, setCards ] = useState([])

    const [ currentSale, setCurrentSale ] = useLocalStorage("Capstone-M2: carrinho", [])

    const [ filteredProducts, setFilteredProducts ] = useState([])

    const [ load, setLoad ] = useState(false)

    const [ abrirModal, setAbrirModal ] = useState(false)

    const [ abrirMenu, setAbrirMenu ] = useState(false)

    const history = useHistory()

    useEffect(() => {

        setLoad(true)

        api.get("/products/", {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => setCards(res.data))
        .catch(err => console.log(err))
        .finally(_ => setLoad(false))
    }, [])

    const addCart = product => {

        const findProduct = currentSale.find(p => p.id === product.id)

        if(!findProduct) {
  
          const newProduct = {...product, count: 1}
          
          setCurrentSale([...currentSale, newProduct])
        }

        else {
  
          const indexProduct = currentSale.indexOf(findProduct)
  
          const newCurrentSale = [...currentSale]
  
          newCurrentSale[indexProduct].count++
  
          setCurrentSale(newCurrentSale)
        }
    }

    const removeProductCount = product => {

        if(product.count > 1) {
    
          const indexProduct = currentSale.indexOf(product)
    
          const newCurrentSale = [...currentSale]
    
          newCurrentSale[indexProduct].count--
    
          setCurrentSale(newCurrentSale)
        }

        else {
          
          // eslint-disable-next-line no-restricted-globals
          if(confirm("Deseja excluir mesmo?")) {
            
            const newCurrentSale = currentSale.filter(p => p.id !== product.id)
            
            setCurrentSale(newCurrentSale)
            }
        }
    }

    const removerProduct = card => setCurrentSale(currentSale.filter(x => x.id !== card.id))

    return (
        <>
            {
                load && <TelaLoad />
            }
            {
                abrirModal && <ModalCart setAbrirModal={ setAbrirModal } currentSale={ currentSale } children={ 
                
                    currentSale.map(product => 
                    <ProductCart 
                    key={ product.id } 
                    product={ product } 
                    removerProduct={ removerProduct } 
                    addCart={ addCart } 
                    removeProductCount={ removeProductCount } 
                    />)
                    
                } />
            }
            
            <HeaderStyled>
                <menu>
                    <img src={ Titulo } alt="Kenzie Food" />

                    <div>
                        <img src={ Menu } alt="menu" onClick={ () => setAbrirMenu(true) } />

                        {
                            abrirMenu && (
                                <div>
                                    <ul>
                                        <li onClick={ () => {
                                            setFilteredProducts([])

                                            setAbrirMenu(false)
                                        } }>
                                            Todos
                                        </li>
                                        <li onClick={ () => {
                                            setFilteredProducts(cards.filter(card => card.categoria === "Panificadora"))

                                            setAbrirMenu(false)
                                        } }>
                                            Panificadora
                                        </li>
                                        <li onClick={ () => {
                                            setFilteredProducts(cards.filter(card => card.categoria === "Frutas"))

                                            setAbrirMenu(false)
                                        } }>
                                            Frutas
                                        </li>
                                        <li onClick={ () => {
                                            setFilteredProducts(cards.filter(card => card.categoria === "Bebidas"))

                                            setAbrirMenu(false)
                                        } }>
                                            Bebidas
                                        </li>
                                        <hr />
                                        <li onClick={ () => {
                                            history.push("/login")

                                            setAbrirMenu(false)
                                        } }>
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </menu>

                <div onClick={ () => setAbrirMenu(false) }>
                    <InputDashboard 
                    icon={ FiSearch } 
                    placeholder="Pesquisar por produto"
                    onChange={ e => setFilteredProducts(cards.filter(card => card.categoria.toLowerCase().includes(e.target.value.toLowerCase()) || card.nome.toLowerCase().includes(e.target.value.toLowerCase()) )) }
                    />

                    <Button color="logout" onClick={ () => history.push("/login") }>Logout</Button>
                </div>
            </HeaderStyled>

            <Container  onClick={ () => setAbrirMenu(false) }>
                <Content>
                    <div>
                        <Button color="todos" onClick={ () => setFilteredProducts([]) }>
                            Todos
                        </Button>
                        <Button color="panificadora" onClick={ () => setFilteredProducts(cards.filter(card => card.categoria === "Panificadora")) }>
                            Panificadora
                        </Button>
                        <Button color="frutas" onClick={ () => setFilteredProducts(cards.filter(card => card.categoria === "Frutas")) }>
                            Frutas
                        </Button>
                        <Button color="bebidas" onClick={ () => setFilteredProducts(cards.filter(card => card.categoria === "Bebidas")) }>
                            Bebidas
                        </Button>
                    </div>

                    <menu>
                        <ProductList>
                            {
                                filteredProducts.length > 0 ? (

                                    filteredProducts.map(product => <Product key={ product.id } product={ product } addCart={ addCart } />)

                                ) : (

                                    cards.map(product => <Product key={ product.id } product={ product } addCart={ addCart } />)
                                )
                            }
                        </ProductList>

                        <Cart currentSale={ currentSale } children={

                            currentSale.map(product => 
                            <ProductCart 
                            key={ product.id } 
                            product={ product } 
                            removerProduct={ removerProduct } 
                            addCart={ addCart } 
                            removeProductCount={ removeProductCount } 
                            />)

                        } />
                    </menu>
                </Content>

                <aside onClick={ () => setAbrirModal(true) }>
                    <img src={ cart } alt="cart" />
                    <p>Cart</p>
                </aside>
            </Container>
        </>
    )
}

export default Home
