import styled, { keyframes } from "styled-components"


export const AnimateModal = keyframes`

    from {
        opacity: 0;
        transform: translatey(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`

export const HeaderModal = styled.header`

    height: 70px;
    padding: 20px;

    border-radius: 8px 8px 0 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--background-cart);

    button {
        width: 31px;
        height: 30px;

        border-radius: 4px;
        background: var(--background-input);

        color: var(--gray);
    }
`

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
