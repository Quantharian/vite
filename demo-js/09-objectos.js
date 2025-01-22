const user = {
    name: 'Pepe',
    age: 22,
    address: {},
    greet: function() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    },
};

const user2 = {
    name: 'Juan',
    age: 23,
    greet() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    },
};

user.greet(); // Hola, soy Pepe y tengo 22 años
user2.greet(); // Hola, soy Juan y tengo 23 años

const user3 = new Object({
    name: 'Pepe',
    age: 22,
    address: {},
    greet: function() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    },
});


console.log(user);
console.log(user3); // { name: 'Pepe', age: 22, greet: [Function: greet] }

// Acceder a las propiedades de un objeto

const propName = 'name';

console.log(user.name); // Pepe
console.log(user[propName]); // Pepe  // user['name']

const obj = {
    name: 'Pepe',
    age: 22,
};

obj.LastName = 'Perez'; 
obj.name = 'Jose';
delete obj.age;
console.log(obj);

{
    let foo;
    console.log(foo); // undefined

    let baz = {};
    console.log(baz.address); // undefined
    // console.log(baz.address.street); // TypeError: Cannot read property 'x' of undefined
    console.log(baz.name?.street); // undefined
}
{

const obj = {
    name: 'Pepe',
    age: 22,
};

for (const key in obj) {
    const value = obj[key];
    console.log(key, obj[key]);

}

Object.entries(obj).forEach(([key, value]) => console.log(key, value));
}