import styled from "styled-components"


export const HeaderStyled = styled.header`

    position: fixed;

    height: 72px;
    width: 100%;

    background: var(--background-header);
    box-shadow: 0px 0px 40px -18px var(--color-box-shadow-header);

    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 20px;

    & > div {
        display: flex;
        align-items: center;
        

        div {
            margin-right: 15px;
            
            @media (max-width: 480px) {
            
                margin: 0;
                
            }
        }

        @media (max-width: 480px) {
            
            .imgAnonimo {
                display: none;
            }
        }
    }

    .divAnonimo {
        background: var(--white);
        border-radius: 5px;
        box-shadow: 0px 0px 40px -18px var(--color-box-shadow-header);
        
        position: fixed;
        width: 206px;
        height: 127px;

        right: 0;
        margin-top: 185px;

        ul {
            list-style: none;
            
            hr {
                height: 0.5px;
                background: var(--background-input);
            }

            .user {
                text-align: start;
                padding: 20px 0 20px 10px;
            }

            .botaoLogout {
                width: 175px;
                height: 48px;
                padding-top: 12px;

                border-radius: 32px;

                background: var(--background-cart);
                border: 1.5px solid var(--background-cart);
                
                text-align: center;

                margin: 10px auto;
                cursor: pointer;

                :hover {
                    background: var(--border-input);
                }
            }

        }
    }

    & > menu {
        display: flex;
        justify-content: center;
        align-items: center;
    }


    & menu > div {
        display: none;

        img {
            width: 25px;
        }

        div {
            background: var(--white);
            border-radius: 5px;
            box-shadow: 0px 0px 40px -18px var(--color-box-shadow-header);
            
            position: fixed;
            left: 55%;
            
            ul {
                list-style: none;
                text-align: center;

                hr {
                    width: 80%;
                    height: 0.5px;
                    background: var(--background-input);
                    margin: 0 auto;
                    border-radius: 50%;
                }

                li {
                    padding: 10px;

                    :hover {
                        background: var(--background);
                    }
                }
            }
        }
    }

    @media (max-width: 550px) {

        flex-direction: column;
        height: auto;
        padding: 20px;

        & > div {
            padding-top: 15px;
        }
    }

    @media (max-width: 480px) {

        & > menu {
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 100%;
            max-width: 260px;
        }

        & menu > div {
            display: block;
        }
    }

    @media (min-width: 1550px) {

        justify-content: space-around;
    }
`

export const Container = styled.div`

    display: flex;
    justify-content: center;

    padding: 72px 10px 10px 10px;
    
    & > aside {
        
        height: 60px;
        width: 100%;
        
        position: fixed;
        bottom: 0;

        background: var(--button-principal);

        display: none;
        justify-content: center;
        align-items: center;

        img {
            padding: 0 10px;
        }

        p {
            color: var(--white);
            font-weight: 700;
            font-size: 17.1px;
        }
    }

    @media (max-width: 990px) {

        & > aside {

            display: flex;
        }
    }

    @media (max-width: 550px) {

        padding-top: 134px;
    }

    @media (max-width: 480px) {
        
        padding-top: 150px;
    }
`

export const Content = styled.div`

    & > div {
        padding: 50px 0;

        @media (max-width: 990px) {
            
            display: flex;
            justify-content: center;
        }

        @media (max-width: 480px) {
            
            display: none;
        }
    }

    menu {
        display: flex;
        flex-direction: row;
    }
`

export const ProductList = styled.div`

    width: 100%;
    min-width: 965px;
    max-width: 1024px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 990px) {
        
        justify-content: center;
    }

    @media (max-width: 1310px) {

        min-width: unset;
    }

    @media (min-width: 990px) and (max-width: 1310px) {

        min-width: 650px;
    }
`
