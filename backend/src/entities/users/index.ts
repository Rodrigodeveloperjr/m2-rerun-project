import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm'
import { Product } from '../products'


@Entity('users')

class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(_ => Product, product => product.user)
    products: Product[]

    @CreateDateColumn()
    created_at: Date
}

export { User }
