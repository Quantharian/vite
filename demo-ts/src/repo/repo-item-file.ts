import { ORMLite } from './odm-lite';
import { Repository } from './repository-interface'; // Adjust the import path as necessary

export class RepoItemFile implements Repository<Item> {
    orm: TypeODM<Item> = new ORMLite<Item>('items.json', 'items');
    collection = 'items';
    read() {
        return this.orm.read(this.collection);
    }
    readById(id: string) {
        return this.orm.readById(this.collection, id);
    }
    create(data: Omit<Item, 'id'>) {
        return this.orm.create(this.collection, data);
    }
    update(id: string, data: Partial<Item>) {
        return this.orm.updateByID(this.collection, id, data);
    }
    delete(id: string) {
        return this.orm.deleteByID(this.collection, id);
    }
}
