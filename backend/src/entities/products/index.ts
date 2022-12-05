import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from '../users'


@Entity('products')

class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    image: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    category: string

    @Column()
    price: number

    @ManyToOne(_ => User, user => user.products)
    user: User
}

export { Product }
