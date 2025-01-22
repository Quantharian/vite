

function User (name, age) {
    this.name = name
    this.age = age
    User.countUsers()
}

User.prototype.greet = function() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    };

User.usersNumber = 0
User.countUsers = function() {
    User.usersNumber++
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