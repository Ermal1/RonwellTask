import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price!: number;

    @Column('int')
    inventory!: number;
}
