{
    function identity<T>(value: T): T {
        return value;
    }

    let foo = "Hola mundo";
    console.log(identity(foo));
    let n = 22;
    console.log(identity(n));
    let r = identity(n);
    console.log(r);
}

{
    interface User {
        id: number;
        name: string;
        username: string;
        email: string;
        address: Address;
        phone: string;
        website: string;
        company: Company;
    }

    interface Company {
        name: string;
        catchPhrase: string;
        bs: string;
    }

    interface Address {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: Geo;
    }

    interface Geo {
        lat: string;
        lng: string;
    }

    async function getData(): Promise<User[]> {
        const url = "http://jsonplaceholder.typicode.com/users";
        const r = await fetch(url);
        return r.json();
    }

    async function main() {
        const data = await getData();
        data[0].name;
    }
}

{
    class Box<T> {
        content: T;

        constructor(content: T) {
            this.content = content;
        }

        getContent(): T {
            return this.content;
        }
    }

    const numberBox = new Box<number>(123);
    const stringBox = new Box<string>("Hello");

    console.log(numberBox.getContent()); // 123
    console.log(stringBox.getContent()); // Hello
}
