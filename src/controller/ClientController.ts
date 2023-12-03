import { Request, Response } from 'express';
import Client from "../models/Client";
import IClientRepository from "../repository/IClientRepository";

// TODO: return the status code depends on the business logic.
// TODO: return a message or object according to the business logic.
class ClientController {
    private readonly clientRepository: IClientRepository;

    constructor(clientRepository: IClientRepository) {
        this.clientRepository = clientRepository;
    }

    async get(req: Request, res: Response): Promise<void> {
        res.status(200);
        res.send({ message: 'Your Statement: ...' });
    }

    async deposit(req: Request, res: Response): Promise<void> {
        const { amount, bank } : any = req.body as any;
        await this.clientRepository.deposit(amount, bank);
        res.status(201);
        res.send({ message: 'Deposit was successful' });
    }

    async withdraw(req: Request, res: Response): Promise<void> {
        const { type, amount, bank } : any = req.body as any;
        await this.clientRepository.withdraw(type, amount, bank);
        res.status(201);
        res.send({ message: 'Withdraw was successful' });
    }

    async changePin(req: Request, res: Response): Promise<void> {
        const { pin } : any = req.body as any;
        await this.clientRepository.modifyPin(pin);
        res.status(201);
        res.send({ message: 'Entity created successfully' });
    }

}

export default ClientController;

