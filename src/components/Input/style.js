import styled, { css } from "styled-components"


export const Container = styled.div`

    text-align: left;
    font-size: 14px;

    div {
        padding: 4px 0;
        
        span {
            color: var(--red);
        }
    }
    
    input {

        transition: 0.4s;

        &:focus::-webkit-input-placeholder {
            color: transparent;
        }

        &::placeholder {
            color: var(--gray);
        }
        
        ${ props => {
            
            switch(props.tamanho) {

                case "login":
                    return css`
                        width: 100%;
                        max-width: 250px;
                        padding: 10px 1rem;
                        border-radius: 8px;
                        border: 2px solid var(--gray);
                        
                        background: transparent;
                        align-items: center;
                        flex: 1;
                        color: var(--color-background);
                    `
                
                case "modal":
                    return css`
                        width: 100%;
                        max-width: 440px;
                        height: 52px;

                        border-radius: 12px;

                        padding-left: 10px;

                        background: var(--background-cart);
                        border: 1.5px solid var(--border-input);

                        outline: none;
                    `

                case "modalTextarea":
                    return css`
                        width: 100%;
                        max-width: 440px;
                        height: 80px;

                        border-radius: 12px;

                        padding-left: 10px;

                        background: var(--background-cart);
                        border: 1.5px solid var(--border-input);

                        outline: none;
                    `
                
                default:
                    return false
            } 
        }}
    }
`
