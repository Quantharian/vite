// Patrones de ejecución de funciones

const foo = function () {
    console.log('Soy foo');
    console.log('this:', this);
}

const fooArrow =  () =>{
    console.log('Soy fooArrow');
    console.log('this:', this);
}

//Function Invocation Pattern

foo(); //this: global object
fooArrow(); //this: {}
// console.log(globalThis);

// Method Invocation Pattern

const obj1 = {
    title: 'Soy obj1',
    foo: foo,
    fooArrow: fooArrow,
}

obj1.foo(); //this: obj1
obj1.fooArrow(); //this: obj1

// Constructor Invocation Pattern

const nObj = new foo()
console.log(nObj); //foo {}

// Apply Pattern

const obj2 = {
    title: 'Soy obj2',
};

foo.apply(obj2); //this: obj2
