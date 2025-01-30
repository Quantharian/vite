type WithID = { id: string };

type Item = WithID & { name: string };

interface TypeODM<T extends WithID> {
    read: (collection: string) => T[];
    readById: (collection: string, id: T['id']) => T; // Errores => throw Error
    create: (collection: string, data: Omit<T, 'id'>) => T;
    updateByID: (
        collection: string,
        id: T['id'],
        data: Omit<Partial<T>, 'id'>,
    ) => T;
    deleteByID: (collection: string, id: T['id']) => T;
}
interface Repository<T> {
    read: () => T[];
    readById: (id: string) => T;
    create: (data: Omit<T, 'id'>) => T;
    update: (id: string, data: Partial<Omit<T, 'id'>>) => T;
    delete: (id: string) => T;
}
