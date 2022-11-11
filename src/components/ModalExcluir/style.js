import { AnimateModal } from "../ModalEditar/style"
import styled from "styled-components"


export const Content = styled.div`

    width: 100%;
    max-width: 496px;
    height: 283px;

    background: var(--white);

    margin: 50px auto;

    border-radius: 8px;
    animation: ${AnimateModal} .4s forwards;

    .bodyModal {
        padding: 10px;

        p {
            font-size: 16px;
            font-weight: 500;
            padding: 50px 0;
            text-align: center;

            @media (max-width: 375px) {

                font-size: 13px;
            }
        }

        div {
            display: flex;
            justify-content: center;

            button:first-child {
                margin-right: 5px;
            }
        }
    }

    @media (max-width: 520px) {

        margin: 50px 10px;
    }
`
