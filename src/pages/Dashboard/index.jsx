import ModalCriarProduto from "../../components/ModalCriarProduto"
import ProductDashboard from "../../components/ProductDashboard"
import InputDashboard from "../../components/InputDashboard"
import { HeaderStyled, ProductList } from "../Home/style"
import ModalExcluir from "../../components/ModalExcluir"
import ModalEditar from "../../components/ModalEditar"
import React, { useEffect, useState } from "react"
import TelaLoad from "../../components/TelaLoad"
import anonimo from "../../assets/anonimo.png"
import { useHistory } from "react-router-dom"
import { Container, Content } from "./style"
import Button from "../../components/Button"
import Titulo from "../../assets/titulo.png"
import { FiSearch } from "react-icons/fi"
import Menu from "../../assets/menu.png"
import api from "../../services/api"


const Dashboard = ({ setAuthentication }) => {

    const [ load, setLoad ] = useState(false)

    const [ abrirMenu, setAbrirMenu ] = useState(false)

    const [ abrirMenuAnonimo, setAbrirMenuAnonimo ] = useState(false)

    const [ filterProducts, setFilterProducts ] = useState([])

    const [ products, setProducts ] = useState([])

    const [ productAtual, setProductAtual ] = useState({})

    const [ abrirModal, setAbrirModal ] = useState(false)

    const [ abrirModalEditar, setAbrirModalEditar ] = useState(false)

    const [ abrirModalExcluir, setAbrirModalExcluir ] = useState(false)

    const history = useHistory()

    useEffect(() => {

        setLoad(true)

        api.get("/my/products", {
        
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("Capstone-M2: token") }`
            }
        })
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
        .finally(_ => setLoad(false))

    }, [])

    const addProduct = product => setProducts([ ...products, product ])

    return (
        <>
            {
                load && <TelaLoad />
            }
            {
                abrirModal && 
                <ModalCriarProduto
                setAbrirModal={ setAbrirModal }
                addProduct={ addProduct }
                />
            }
            {
                abrirModalExcluir &&
                <ModalExcluir
                productAtual={ productAtual }
                setAbrirModalExcluir={ setAbrirModalExcluir }
                setProducts={ setProducts }
                products={ products }
                />
            }
            {
                abrirModalEditar && 
                <ModalEditar 
                productAtual={ productAtual } 
                setProductAtual={ setProductAtual } 
                setAbrirModalEditar={ setAbrirModalEditar } 
                setProducts={ setProducts }
                products={ products }
                />
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
                                            setFilterProducts([])

                                            setAbrirMenu(false)
                                        } }>
                                            Todos
                                        </li>
                                        <li onClick={ () => {
                                            setFilterProducts(products.filter(card => card.categoria === "Panificadora"))

                                            setAbrirMenu(false)
                                        } }>
                                            Panificadora
                                        </li>
                                        <li onClick={ () => {
                                            setFilterProducts(products.filter(card => card.categoria === "Frutas"))

                                            setAbrirMenu(false)
                                        } }>
                                            Frutas
                                        </li>
                                        <li onClick={ () => {
                                            setFilterProducts(products.filter(card => card.categoria === "Bebidas"))

                                            setAbrirMenu(false)
                                        } }>
                                            Bebidas
                                        </li>
                                        <hr />
                                        <li onClick={ () => {
                                            history.push("/login")

                                            localStorage.clear()

                                            setAbrirMenu(false)

                                            setAuthentication(false)
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
                    onChange={ e => setFilterProducts(products.filter(card => card.categoria.toLowerCase().includes(e.target.value.toLowerCase()) || card.nome.toLowerCase().includes(e.target.value.toLowerCase()) )) }
                    />

                    <img className="imgAnonimo" src={ anonimo } alt="user" onClick={ () => setAbrirMenuAnonimo(true) } />

                    {
                        abrirMenuAnonimo && 
                        <div className='divAnonimo'>
                            <ul>
                                <li className='user'>User</li>
                                <hr />
                                <li className='botaoLogout' onClick={ () => {
                                    history.push("/login")

                                    localStorage.clear()

                                    setAbrirMenu(false)
                                    
                                    setAuthentication(false)
                                } }>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </HeaderStyled>
            
            <Container onClick={ () => {

                setAbrirMenu(false)
                setAbrirMenuAnonimo(false)

                } }>
                <Content>
                    <div>
                        <Button color="todos" onClick={ () => setFilterProducts([]) }>
                            Todos
                        </Button>
                        <Button color="panificadora" onClick={ () => setFilterProducts(products.filter(card => card.categoria === "Panificadora")) }>
                            Panificadora
                        </Button>
                        <Button color="frutas" onClick={ () => setFilterProducts(products.filter(card => card.categoria === "Frutas")) }>
                            Frutas
                        </Button>
                        <Button color="bebidas" onClick={ () => setFilterProducts(products.filter(card => card.categoria === "Bebidas")) }>
                            Bebidas
                        </Button>
                    </div>

                    <Button color="criaProduto" onClick={ () => setAbrirModal(true) }>Adicionar novo produto</Button>
                </Content>

                <ProductList>
                    {
                        filterProducts.length > 0 ? (

                            filterProducts.map(product => 
                            <ProductDashboard 
                            key={ product.id } 
                            product={ product } 
                            setProductAtual={ setProductAtual } 
                            setAbrirModalEditar={ setAbrirModalEditar } 
                            setAbrirModalExcluir={ setAbrirModalExcluir } 
                            />)
                        
                        ) : (

                            products.map(product => 
                            <ProductDashboard 
                            key={ product.id } 
                            product={ product } 
                            setProductAtual={ setProductAtual } 
                            setAbrirModalEditar={ setAbrirModalEditar } 
                            setAbrirModalExcluir={ setAbrirModalExcluir } 
                            />)
                        )
                    }
                </ProductList>
            </Container>
        </>
    )
}

export default Dashboard
