abstract class BaseEntity {
    id: string;

    constructor(id: string = ''){
        this.id = id;
    }

    setId(id: string): void {
        this.id = id;
    }

    getId(): string {
        return this.id;
    }

    abstract clone(id: string): BaseEntity;
}

export default BaseEntity;