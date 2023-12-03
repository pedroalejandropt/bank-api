import BaseEntity from '../models/BaseEntity';

interface IBaseRepository {
    create(item: BaseEntity): Promise<BaseEntity>;
    update(itemId: string, props: Object): Promise<BaseEntity | null>;
    delete(itemId: string): Promise<Boolean>;
    get(itemId: string): Promise<BaseEntity | null>;
    findBy(props: Object): Promise<BaseEntity[]>;
}

export default IBaseRepository;