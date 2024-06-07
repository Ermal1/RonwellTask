
import { DataSource } from 'typeorm';
import { Product } from '../models/Product';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Product],
    synchronize: true
});

AppDataSource.initialize().then(() => {
            console.log("Succesfull initialization of Data Source");
        }).catch((error) => {
            console.log("Unable to initialize Data Source.", error);
        });
