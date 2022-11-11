import remover from "../../assets/trash.png"
import editar from "../../assets/editar.png"
import styled from "styled-components"


export const Container = styled.div`

    width: 100%;
    max-width: 1370px;
    height: 62px;

    margin: 10px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid var(--background-input);

    padding: 10px;

    border-radius: 12px;

    @media (max-width: 768px) {

        .categoriaProduto, .descricaoProduto {
            display: none;
        }

        .divBotoesEditarRemover {
            display: flex;
            justify-content: flex-end;
        }
    }

    @media (max-width: 425px) {

        .nomeProduto {
            display: none;
        }
    }

    & > div {

        width: 100%;
        max-width: 450px; 

        padding: 0 10px 0 10px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            border-radius: 8px;

            background: var(--background-cart);
            color: var(--gray);

            padding: 10px;
        }

        .nomeProduto {
            
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .descricaoProduto {
            color: var(--gray);

            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }

    & div > div {
        
        display: flex;
        align-items: center;

        img {
            padding-right: 10px;

            width: 32px;
            height: 32px;
            border-radius: 50%;

            object-fit: contain;
        }
    }

    & > div > div > div {
    
        width: 38px;
        height: 38px;

        border-radius: 50%;

        background: var(--background-cart);

        margin: 0 5px;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        :hover {
            background: var(--background-input);
        }

        .botaoEditar {
            width: 16px;
            height: 14px;

            background: url(${ editar });
            background-repeat: no-repeat;
        }

        .botaoRemover {
            width: 16px;
            height: 14px;

            margin-left: 5px;
            margin-top: 5px;

            background: url(${ remover });
            background-repeat: no-repeat;
        }
    }
`
