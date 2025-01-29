type WithID = {id: string};

type Item = WithID & {name:string}

interface TypeODM<T extends WithID> {
        read: (collection: string) => T[];
        readById: (collection: string, id: T['id']) => T; // Errores => throw Error
        create: (collection: string, data: Omit<T, 'id'>) => T;
        updateByID: (collection: string, id: T['id'], data: Omit<Partial<T>, 'id'>) => T;
        deleteByID: (collection: string, id: T['id']) => T;
    }




