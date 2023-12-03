import BaseEntity from "../models/BaseEntity";
import IBaseRepository from "./IBaseRepository";

class BaseRepository implements IBaseRepository {
    constructor() {
        console.log("BaseRepository");
    }

    create(entity: BaseEntity): Promise<BaseEntity> {
        return new Promise<BaseEntity>((resolve, reject) => {});
    };

    update(id: string, props: Object): Promise<BaseEntity | null> {
        return new Promise<BaseEntity>((resolve, reject) => {});
    };

    delete(id: string): Promise<Boolean> {
        return new Promise<Boolean>((resolve, reject) => {});
    };

    get(id: string): Promise<BaseEntity | null> {
        return new Promise<BaseEntity>((resolve, reject) => {});
    };

    findBy(props: Object): Promise<BaseEntity[]> {
        return new Promise<BaseEntity[]>((resolve, reject) => {});
    };
}

export default BaseRepository;

