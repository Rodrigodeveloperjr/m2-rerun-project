import carrinho_hover from "../../assets/botaoCarrinhoHover.png"
import carrinho from "../../assets/botaoCarrinho.png"
import styled from "styled-components"


export const Container = styled.div`

    width: 294px;
    height: 397px;
    margin: 10px;

    & > img {
        width: 100%;
        height: 194px;
        border-radius: 5px;

        transition: transform 0.6s ease;
        object-fit: contain;

        :hover {
            transform: scale(1.05);
        }
    }

    & > div {
        padding: 10px;
    }

    div > h3 {
        font-size: 16px;
        line-height: 27px;
    }

    div > p {
        font-size: 14px;
        line-height: 24px;

        color: var(--gray);

        margin: 18px 0;

        height: 2.6rem;
        overflow: hidden;

        :hover {
            transition: 1s;
            color: var(--color-background);
        }
    }

    & > div > span {
        padding: 7px;
        width: min-content;
        border-radius: 12px;
        
        background: var(--background-input);
        color: var(--gray);
        overflow: hidden;
    }

    div > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-top: 10px;
    }

    div > div > span {

        font-weight: 700;
        font-size: 14px;
    }

    div > div > button {

        width: 38px;
        height: 38px;

        border-radius: 50%;
        background: url(${ carrinho });

        transition: 1s;

        :hover {
            background: url(${ carrinho_hover });
        }
    }

    @media (max-width: 320px) {

        width: 100%;
        max-width: 294px;
    }
`
