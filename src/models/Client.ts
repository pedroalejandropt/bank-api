import Card from "./Card";

abstract class Client {
    id: string;
    name: string;
    lastName: string;
    cards: Card[];

    constructor(id: string = '', name: string = '', lastName: string = '', cards: Card[]){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.cards = cards;
    }

    setId(id: string): void {
        this.id = id;
    }

    getId(): string {
        return this.id;
    }

    setName(name: string): void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setCard(cards: Card[]): void {
        this.cards = cards;
    }

    getCard(): Card[] {
        return this.cards;
    }

}

export default Client;