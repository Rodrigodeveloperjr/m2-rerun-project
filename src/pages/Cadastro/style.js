import styled from "styled-components"


export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0 10px;

    form {

        text-align: center;

        width: 100%;
        max-width: 400px;

        box-shadow: 0px 0px 40px -18px var(--color-box-shadow-header);

        border-radius: 8px;

        padding: 20px;

        h1 {
            padding: 10px 0;
        }

        > div {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        > div > div {
            padding: 10px 0;
        }

        button {
            margin-top: 20px;
        }

        p {
            padding: 30px 0;

            a {
                color: var(--button-principal);

                :hover {
                    text-decoration: underline;
                }
            }
        }
    }
`
