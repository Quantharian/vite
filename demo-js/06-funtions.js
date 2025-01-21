// declaración de una función

function makeFoo(param) {
        console.log(param);
    }


// asignación de una función

const makeBaz = function (param) { //expresión funcional anónima
    console.log(param);
};

// arrow function

const makeBazArrow = (param) => console.log(param);//expresión funcional anónima arrow

//ejemplo de uso arrow

[1,2,3].map(item => item ** 2); // [1, 8, 27]

// arrow y objetos

// const makeObject = (name, age) => {return {name:name, age:age}};
// const makeObject = (name, age) => ({name:name, age:age});
const makeObject = (name, age) => ({name, age}); //sintaxis simplificada
console.log(makeObject('John', 30)); // {name: 'John', age: 30}

const fooX = makeObject;
console.log(fooX); // [Function: makeObject]
const fooY = makeObject();
console.log(fooY); // {name: undefined, age: undefined}




// invocación de la función

const foo = makeFoo('Welcome to Hell!');
console.log(typeof foo); // undefined   

makeBaz('Fire and Blood');

const modifyValue = (x) => {
    x = x * 10;
};

const modifyObject = ({...obj}) => {
    obj.job = 'none';
};

const user = {
    name: 'Pepe',
    age: 22,
    job: 'developer'
}

const x = 22
modifyValue(x);
console.log(x); // 22   
console.log(modifyValue(x)); // undefined   

modifyObject(user);
console.log(user.job); // none
console.log(user); // {name: 'Pepe', age: 22, job: 'developer'}

{
const modifyObject = (_obj) => {
    // const obj = JSON.parse(JSON.stringify(_obj));
    const obj = structuredClone(_obj);
    obj.job = 'none';
    obj.address.city = 'Teruel';
};
const user = {
    name: 'Pepe',
    age: 22,
    job: 'developer',
    address: {
        street: 'c/ Pez',
        city: 'Soria'
    }
}
modifyObject(user);
console.log('User', user); // none
}