import styled from "styled-components"


export const Container = styled.div`

    width: 312px;
    height: 49px;
    padding: 15px, 18px, 15px, 16px;
    border-radius: 12px;
    background: var(--background-input);
    border: 1.5px solid var(--background-input);

    display: flex;
    align-items: center;
    
    svg {
        color: var(--gray);
        margin-left: 10px;
    }

    input {
        background: transparent;
        align-items: center;
        padding: 13px;
        flex: 1;
        color: var(--color-background);

        outline: none;

        &::placeholder {
            color: var(--gray);
        }
    }

    @media (max-width: 340px) {

        width: 100%;
        max-width: 312px;
    }
`
