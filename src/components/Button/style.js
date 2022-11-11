import styled, { css } from "styled-components"


export const Container = styled.button`

    transition: 0.4s;

    :disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${ props => {

        switch(props.color) {

            case "todos":
                return css`

                    background: var(--button-todos);

                    padding: 15px 20px;
                    gap: 15px;
                    height: 48px;
                    border-radius: 32px;

                    margin-right: 15px;

                    :hover {
                        color: var(--background);
                        background: var(--button-principal);
                    }
                `

            case "panificadora":
                return css`

                    background: var(--button-panificadora);

                    padding: 15px 20px;
                    gap: 15px;
                    height: 48px;
                    border-radius: 32px;

                    margin-right: 15px;

                    :hover {
                        color: var(--background);
                        background: var(--button-principal);
                    }
                `
            
            case "frutas":
                return css`

                    background: var(--button-frutas);

                    padding: 15px 20px;
                    gap: 15px;
                    height: 48px;
                    border-radius: 32px;

                    margin-right: 15px;

                    :hover {
                        color: var(--background);
                        background: var(--button-principal);
                    }
                `

            case "bebidas":
                return css`

                    background: var(--button-bebidas);
                    
                    padding: 15px 20px;
                    gap: 15px;
                    height: 48px;
                    border-radius: 32px;

                    :hover {
                        color: var(--background);
                        background: var(--button-principal);
                    }
                `

            case "login":
                return css`

                    padding: .8rem 3rem;
                    border-radius: 4px;

                    color: var(--background);
                    background: var(--button-principal);

                    border: 1px solid var(--button-principal);

                    :hover {
                        background: var(--button-principal-hover);
                        border-color: var(--button-principal-hover);
                    }
                `
            
            case "logout":
                return css`

                    height: 48px;
                    padding: 10px 20px;
                    border-radius: 32px;

                    background: var(--background-cart);
                    border: 1.5px solid var(--background-cart);
                    
                    :hover {
                        background: var(--background-input);
                        border-color: var(--background-input);
                    }

                    @media (max-width: 480px) {
            
                        display: none;
                        margin: 0;
                    }
                `

            case "criaProduto":
                return css`

                    height: 48px;
                    width: 217px;

                    background: var(--button-principal);
                    border: 1.5px solid var(--button-principal);
                    color: var(--white);

                    border-radius: 32px;

                    :hover {
                        background: var(--button-principal-hover);
                        border-color: var(--button-principal-hover);
                    }
                `
            
            case "categoriaProduto":
                return css`

                    height: 40px;
                    width: 100%;
                    max-width: 136px;
                    border-radius: 32px;
                    padding: 10px;

                    margin: 0 8px;

                    color: var(--gray);
                    background: var(--background-cart);
                    border: 1.5px solid var(--background-cart);

                    :hover {
                        color: var(--background);
                        background: var(--button-principal);
                    }

                    
                    @media (max-width: 375px) {
                     
                        margin: 0;
                    }
                `

            case "editarProduto":
                return css`
                    width: 100%;
                    height: 52px;
                    padding: 10px;
                    margin-top: 20px;
                    margin-bottom: 10px;

                    border-radius: 32px;

                    font-size: 16px;
                    font-weight: 500;
                    
                    color: var(--white);
                    background: var(--button-principal);
                    border: 1.5px solid var(--button-principal);

                    :hover {
                        background: var(--button-principal-hover);
                        border-color: var(--button-principal-hover);
                    }
                `

            case "excluirProduto":
                return css`

                    width: 100%;
                    max-width: 210px;
                    height: 52px;
                    padding: 10px;

                    background: var(--background-cart);
                    border: 1.5px solid var(--background-cart);

                    color: var(--gray);

                    border-radius: 32px;

                    :hover {
                        background: var(--background-input);
                    }
                `

            case "botaoNotFound":
                return css`
                    width: 100%;
                    max-width: 342px;
                    height: 60px;

                    border-radius: 8px;

                    padding: 10px;
                    background: var(--button-principal);
                    border: 2px solid var(--button-principal);

                    color: var(--white);
                    font-size: 18px;

                    :hover {
                        background: var(--button-principal-hover);
                        border-color: var(--button-principal-hover);
                    }
                `

            default:
                return false
        }
    }}
`
