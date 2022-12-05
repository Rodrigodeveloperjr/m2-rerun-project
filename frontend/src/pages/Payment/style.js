import styled from 'styled-components'


const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h1 {
        padding-bottom: 20px;
    }

    div {
        margin-top: 5px;
    }

    .acceptedCard {
        display: flex;
        align-items: center;
        flex-direction: column;

        p {
            margin-bottom: 10px;
        }
    }

    .divPayment {
        display: flex;
        justify-content: space-between;
    }
`

export { Container }
