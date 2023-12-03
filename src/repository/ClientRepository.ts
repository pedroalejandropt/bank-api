import Client from "../models/Client";
import IClientRepository from "./ClientRepository";

class ClientRepository implements IClientRepository {
    constructor() {
        console.log("ClientRepository");
    }

    viewStatement(client: Client): Promise<Client> {
        return new Promise<Client>((resolve, reject) => {});
    };

    deposit(amount: number, bank: string): Promise<Number> {
        return new Promise<Number>((resolve, reject) => {});
    };

    withdraw(type: string, amount: number, bank: string): Promise<Number> {
        return new Promise<Number>((resolve, reject) => {});
    };

    modifyPin(newPin: string): Promise<Client | null> {
        // TODO: validate PIN, make sure it is encrypted.
        return new Promise<Client>((resolve, reject) => {});
    };
}

export default ClientRepository;

