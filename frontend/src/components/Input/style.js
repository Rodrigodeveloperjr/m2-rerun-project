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
                        padding: 15px;

                        border-radius: 3px;
                        border: 1px solid #dcdcdc;
                        
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
                
                case "payment_large":
                    return css`
                        width: 100%;
                        max-width: 350px;
                        padding: 15px;

                        border-radius: 3px;
                        border: 1px solid #dcdcdc;
                        
                        background: transparent;
                        align-items: center;
                        flex: 1;
                        color: var(--color-background);
                    `
                
                case "payment_small":
                    return css`
                        width: 100%;
                        max-width: 150px;
                        padding: 15px;

                        border-radius: 3px;
                        border: 1px solid #dcdcdc;
                        
                        background: transparent;
                        align-items: center;
                        flex: 1;
                        color: var(--color-background);
                    `
                
                default:
                    return false
            } 
        }}
    }
`
