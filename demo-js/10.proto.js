const user = {
    name: 'Pepe',
    age: 22,
    address: {},
    greet: function() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    }
};
console.log(user.__proto__); // {}
console.log(user.__proto__.__proto__); // null

const mammal = {
    hasFur: true,
}

const person = {
    teeth: 32,
}

user.__proto__ = person;

console.log(user.teeth); // 32
console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('teeth')); // false