class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    }
}

class User extends Person {
    static usersNumber = 0;
    static countUsers() {
        User.usersNumber++;
    }

    constructor(name, age, role) {
        super(name, age);
        this.role = role;
        User.countUsers();
    }
    greet() {
        super.greet();
        console.log(`Mi nivel de usuario es ${this.role}`);
    }
}

const user1 = new User('Pepe', 22, 'admin');
const user2 = new User('Juan', 23, 'user');
const user3 = new User('Luis', 24, 'user');

user1.greet();
user2.greet();
user3.greet();
