import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import { Container } from './style'
import { Icon } from '@iconify/react'
import * as yup from 'yup'


const Payment = () => {

    const schema = yup.object().shape({

        name: yup
            .string()
            .required('Name required'),
        card_number: yup
            .string()
            .required('Card Number required')
            .max(16, 'Only numbers'),
        expiration: yup
            .string()
            .required('Expiration required')
            .max(5, 'just numbers and the "/" between them'),
        security_code: yup
            .string()
            .required('Security Code required')
            .max(3, 'Maximum 3 numbers')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSubmitFuncition = data => {

        console.log(data)
    }

    return (
       <Container>
            <form onSubmit={ handleSubmit(onSubmitFuncition) }>
                
                <h1>Payment Information</h1>
                
                <div className="acceptedCard">
                    <p>Accepted Card</p>
                    <Icon icon="fa:cc-paypal" color="#003087" style={{ fontSize: "25px" }} />
                </div>

                <Input
                tamanho="payment_large"
                label="Name" 
                type="text" 
                register={ register } 
                name="name" 
                error={ errors.name?.message }
                />
                <Input
                tamanho="payment_large"
                label="Card Number"
                type="text"
                register={ register } 
                name="card_number" 
                error={ errors.card_number?.message }
                />

                <div className='divPayment'>
                    <Input
                    tamanho="payment_small"
                    label="Expiration (mm/yy)" 
                    type="text"
                    register={ register } 
                    name="expiration" 
                    error={ errors.expiration?.message }
                    />
                    <Input
                    tamanho="payment_small" 
                    label="Security Code"
                    type="text" 
                    register={ register } 
                    name="security_code"
                    error={ errors.security_code?.message }
                    />
                </div>

                <Button type="submit" color="payment">SUBMIT</Button>
            </form>
       </Container>
    )
}

export { Payment }
