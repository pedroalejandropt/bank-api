import Client from '../models/Client';

interface IClientRepository {
    viewStatement(item: Client): Promise<Client>;
    deposit(amount: number, bank: string): Promise<Number>;
    withdraw(type: string, amount: number, bank: string): Promise<Number>;
    modifyPin(newPin: string): Promise<Client | null>;
}

export default IClientRepository;