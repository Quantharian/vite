function Person(name, age) {
    this.name = name;
    this.age = age;
    Person.prototype.greet = function () {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    };
}

function User(name, age, role) {
    this.role = role;
    User.countUsers();
    Person.call(this, name, age);
}

User.usersNumber = 0;
User.countUsers = function () {
    User.usersNumber++;
};

Object.setPrototypeOf(User.prototype, Person.prototype);
// User.prototype.__proto__ = Person.prototype;

const user1 = new User('Pepe', 22, 'admin');
const user2 = new User('Juan', 23, 'user');
const user3 = new User('Luis', 24, 'user');

// console.log(user1, user2, user3)
// user1.address = 'Soria'
// user1.name = 'Jose'
// delete user1.age
// console.log(user1)

user1.greet();
user2.greet();
user3.greet();

// console.log(User.usersNumber)
