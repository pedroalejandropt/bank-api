abstract class Card {
    bank: string;
    number: number;
    pin: number;
    cvv: number;
    type: string;
    balance: number;
    limit: number;

    expirationDate: Date;

    constructor(number: number, pin: number, cvv: number) {
        this.number = number;
        this.pin = pin;
        this.cvv = cvv;
    }

    setNumber(number: number) {
        this.number = number;
    }

    getNumber(): number {
        return this.number;
    }

    setPin(pin: number) {
        this.pin = pin;
    }

    getPin(): number {
        return this.pin;
    }

    setCvv(cvv: number) {
        this.cvv = cvv;
    }

    getCvv(): number {
        return this.cvv;
    }

    validate(transaction: string, amount: number, bank: string): boolean {
        if(this.expirationDate < new Date()) return false;
        switch (transaction) {
            case 'withdraw':
                if (this.type == TYPES.CREDIT) return amount < this.limit;
                if (this.type == TYPES.DEBIT) return amount < this.balance;
                break;
            case 'deposit':
                return this.bank == bank;
                break;
            default:
                break
        }
        
    }
}

const TYPES = {
    DEBIT: 'debit',
    CREDIT: 'credit',
}

export default Card;