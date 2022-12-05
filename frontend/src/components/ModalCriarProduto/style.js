import { AnimateModal } from "../ModalEditar/style"
import styled from "styled-components"


export const Content = styled.div`

    width: 100%;
    max-width: 496px;
    background: var(--white);

    margin: auto;

    border-radius: 8px;
    animation: ${AnimateModal} .4s forwards;

    & > div {
        padding: 10px;

        display: flex;
        justify-content: center;

        form {

            width: 100%;
            max-width: 450px;

            div {
                margin: 8px 0 0 0;
            }

            .divCategoria {
                
                display: flex;
                flex-direction: column;
                
                & > select {
                    width: 125px;
                    padding: 10px 5px;
                    margin-top: 5px;

                    border-radius: 4px;

                    background: var(--background-cart);
                    border: 1.5px solid var(--border-input);

                    outline: none;
                }
            }
        }
    }

    @media (max-width: 520px) {

        margin: 10px;
    }
`
