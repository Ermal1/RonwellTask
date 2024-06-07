// src/app.ts
import 'reflect-metadata';
import express from 'express';
import productRoutes from './routes/productRoutes';
import { AppDataSource } from './config/data-source';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/products', productRoutes);

AppDataSource.initialize()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Error during Data Source initialization', error);
    });
