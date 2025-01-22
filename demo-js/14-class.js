class User {
    constructor(name, age) {
        this.name = name
        this.age = age
        User.countUsers()
    }
    greet() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    }
    static usersNumber = 0
    static countUsers() {
        User.usersNumber++
    }
}

const user1 = new User('Pepe', 22)
const user2 = new User('Juan', 23)
const user3 = new User('Luis', 24)

console.log(user1, user2, user3)
user1.address = 'Soria'
user1.name = 'Jose'
delete user1.age
console.log(user1)

user1.greet()
user2.greet()
user3.greet()

console.log(User.usersNumber)