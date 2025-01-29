import { readFromDisk, writeToDisk } from './helpers';

export class ORMLite<T extends WithID> implements TypeODM<T> {
    file: string;
    collection: string;
    constructor(file: string, collection: string) {
        this.file = file;
        this.collection = collection;
        this.updateByID = this.updateById;
        this.deleteByID = this.deleteById;
    }

    private readDB(): Record<string, T[]> {
        const txtData = readFromDisk(this.file);
        return JSON.parse(txtData);
    }

       private writeDB(data: Record<string, T[]>): void {
        writeToDisk(this.file, JSON.stringify(data));
    }

    read(collection: string): T[] {
    const allData = this.readDB()
    const collectionData = allData[collection];
    return collectionData
}

readById(collection: string, id: string): T {
       const allData = this.readDB();
        const collectionData = allData[collection]
        const item = collectionData.find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        return item;
    }

    create(collection: string, data: Omit<T, 'id'>): T {
        const allData = this.readDB();
        const collectionData = allData[collection]
        const itemData = {
            ...data,
            id: crypto.randomUUID().substring(0, 8),
        } as T;
        collectionData.push(itemData);
        this.writeDB(allData);
        return itemData;
    }

        updateById(collection: string, id: string, data: Omit<Partial<T>, 'id'>) {
        // const txtData = readFromDisk();
        // const allData = JSON.parse(txtData);
        const allData = this.readDB();
        let item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        item = Object.assign(item, data);
        // item = { ...item ...data }; // Otra forma de hacerlo
        // writeToDisk(JSON.stringify(allData));
        this.writeDB(allData);
        return item;
    }

deleteById(collection: string, id: string) {
        // const txtData = readFromDisk();
        // const allData = JSON.parse(txtData);
        const allData = this.readDB();
        const item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        allData[collection] = allData[collection].filter(
            (item: T) => item.id !== id
        );
        // writeToDisk(JSON.stringify(allData));
        this.writeDB(allData);
        return item;
    }

    updateByID: (collection: string, id: T['id'], data: Omit<Partial<T>, 'id'>) => T;
    deleteByID: (collection: string, id: T['id']) => T;

    

 

    

    

    



    
}
