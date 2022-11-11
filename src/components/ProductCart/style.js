import lixeira from "../../assets/trash.png"
import styled from "styled-components"


export const Container = styled.div`

    height: 83px;

    display: flex;
    justify-content: space-between;

    img {
        width: 70px;
        height: 70px;
        border-radius: 8px;

        object-fit: cover;
    }

    div {

        display: flex;
        flex-direction: column;
        text-align: start;
        display: grid;

        width: 100%;
        max-width: 180px;
        padding: 0 5px;

        h4 {
            font-size: 14px;

            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        p {
            font-size: 12px;
            color: var(--gray);
            padding: 0;
        }

        span {
            font-size: 14px;
        }
    }

    & > section > p {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 25px;
        height: 25px;

        background: var(--background-cart);
        cursor: pointer;

        border-radius: 4px;

        :hover {
            background: var(--background-input);
            transition: background 300ms ease 0s;
        }
    }

    p > button {
        width: 10px;
        height: 10px;

        background: url(${ lixeira });
        background-repeat: no-repeat;
    }

    & > section {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    & > section > div {
        
        margin-top: 10px;
        display: flex;
        flex-direction: row;

        span {
            border-top: 1px solid var(--background-input);
            border-bottom: 1px solid var(--background-input);
            padding: 0.9px 5px;
            font-size: 15px;
        }

        button {
            border: 1px solid var(--background-input);
            padding: 0 4px;
            background: transparent;

            :hover {
                transition: background 300ms ease 0s;
                background: var(--gray);
                color: var(--white);
            }
        }
    }
`
