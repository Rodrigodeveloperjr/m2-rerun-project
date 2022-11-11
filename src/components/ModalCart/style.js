import { AnimateModal } from "../ModalEditar/style"
import styled from "styled-components"


export const Container = styled.div`
    
    display: flex;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: var(--background-modal);
`

export const Content = styled.div`

    width: 100%;
    max-width: 345px;
    height: 628.55px;
    margin: auto;
    
    animation: ${AnimateModal} .4s forwards;

    display: flex;
    justify-content: center;
    flex-direction: column;

    .cartHeader {
        background: var(--button-principal);
        
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 20px;

        border-radius: 15.0938px 15.0938px 0px 0px;

        & > div {
            display: flex;
            align-items: center;
        }

        div > img {
            padding-right: 10px;
        }

        div > p {
            color: var(--white);
        }

        & > button {
            color: var(--white);
            background: transparent;

            font-weight: 700;
            font-size: 16px;
        }
    }

    menu {

        .listProductCart {

            height: 296px;
            padding: 10px;
            overflow-y: auto;

            background: var(--white);

            &::-webkit-scrollbar {
                width: 5px;
            }

            &::-webkit-scrollbar-thumb {
                background: var(--background-input);
                border-radius: 25px;

                :hover {
                    background: var(--gray);
                }
            }

            &::-webkit-scrollbar-track-piece {
                background: transparent;
            }
        }

        .containerCart {
        
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            background: var(--background-cart);

            height: 296px;
            text-align: center;

            padding: 20px;

            border-radius: 0px 0px 12px 12px;

            p {
                padding-top: 25px;
                font-size: 14px;
                color: var(--gray);
            }
        }
    }

    @media (max-width: 360px) {

        margin: 0 10px;
    }
`
