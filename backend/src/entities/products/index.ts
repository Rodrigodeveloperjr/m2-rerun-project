import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'


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
}

export { Product }
