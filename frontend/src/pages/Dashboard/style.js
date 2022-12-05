import styled from "styled-components"


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 72px 20px 20px 20px;
`

export const Content = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1300px;

    & > div {
        padding: 50px 0;

        @media (max-width: 990px) {
            
            display: flex;
            justify-content: center;
        }

        @media (max-width: 480px) {
            
            display: none;

        }
    }
    
    @media (max-width: 768px) {

        flex-direction: column;
        padding: 50px 0 30px 0;

        & > div {
            padding: 20px 0;
        }
    }

    @media (max-width: 550px) {

        padding-top: 80px;
    }
`
