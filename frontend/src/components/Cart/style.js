import styled from "styled-components"


export const Container = styled.div`

    width: 100%;
    max-width: 320px;
    height: 352px;

    margin-top: -50px;

    border-radius: 12px 12px 0px 0px;

    @media (max-width: 990px) {
        display: none;
    }
`

export const HeaderCart = styled.div`

    height: 56px;

    display: flex;
    align-items: center;
    padding: 10px;

    background: var(--button-principal);
    border-radius: 12px 12px 0px 0px;

    img {
        padding: 0 15px;
    }

    p {
        color: var(--background);
    }
`

export const BodyCart = styled.div`

    .listProduct {

        height: 259px;
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

    .container {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background: var(--background-cart);

        height: 296px;
        text-align: center;

        p {
            padding: 25px 20px 0 20px;
            font-size: 14px;
            color: var(--gray);
        }
    }
`
