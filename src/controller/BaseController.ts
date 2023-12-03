import { Request, Response } from 'express';
import BaseEntity from "../models/BaseEntity";
import IBaseRepository from "../repository/IBaseRepository";

class BaseController {
    private readonly baseRepository: IBaseRepository;

    constructor(baseRepository: IBaseRepository) {
        this.baseRepository = baseRepository;
    }

    async get(req: Request, res: Response): Promise<void> {
        await this.baseRepository.get('');
        res.status(200);
        res.send({ message: 'Entity was found' });
    }

    async create(req: Request, res: Response): Promise<void> {
        const entity: BaseEntity = req.body as unknown as BaseEntity;
        await this.baseRepository.create(entity);
        res.status(201);
        res.send({ message: 'Entity created successfully' });
    }

}

export default BaseController;

