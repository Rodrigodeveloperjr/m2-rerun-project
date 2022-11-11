import styled, { keyframes } from "styled-components"


const AnimateLoading = keyframes`

    to {

        transform: rotate(1turn);
    }
`

export const Container = styled.div`

    height: 100vh;
    width: 100%;
    background: var(--color-box-shadow-header);
    z-index: 2000;
    position: fixed;
    backdrop-filter: blur(2px);

    transform: scale(2);

    display: flex;
    justify-content: center;
    align-items: center;
    
    & > div {
        
        animation: ${AnimateLoading} 1s infinite;
        border: 4px solid transparent;
        border-radius: 50%;
        border-top-color: var(--button-principal);
        height: 50px;
        width: 50px;
    }
`
