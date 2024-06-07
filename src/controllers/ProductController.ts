import { Request, Response } from 'express';
import { AppDataSource } from '../config/data-source';
import { Product } from '../models/Product';

const productRepository = AppDataSource.getRepository(Product);

export class ProductController {
    async getAll(req: Request, res: Response) {
        const products = await productRepository.find();
        res.json(products);
    }

    async getOne(req: Request, res: Response) {
        const product = await productRepository.findOneBy({ id: parseInt(req.params.id) });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }

    async create(req: Request, res: Response) {
        const newProduct = productRepository.create(req.body);
        const result = await productRepository.save(newProduct);
        res.json(result);
    }
    
    async update(req: Request, res: Response) {
        const product = await productRepository.findOneBy({ id: parseInt(req.params.id) });
        if (product) {
            productRepository.merge(product, req.body);
            const result = await productRepository.save(product);
            res.json(result);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }

    async delete(req: Request, res: Response) {
        const result = await productRepository.delete(req.params.id);
        res.json(result);
    }
    
}
