{
function foo (a,b, ...rest) {
  console.log(a,b, rest.length);
}

const foo2 =  function (a,b, ...rest) {
  console.log(a,b, rest.length);
};

console.log(foo, foo2); //[Function: foo] [Function: foo2]

foo.title = 'Soy foo';
foo2.title = 'Soy foo2';

console.log(foo, foo2); //{ [Function: foo] title: 'Soy foo' } { [Function: foo2] title: 'Soy foo2' }

foo.foo2 = foo2;

console.log(foo, foo2); //{ [Function: foo] title: 'Soy foo', foo2: [Function: foo2] } { [Function: foo2] title: 'Soy foo2' }

foo.foo2(1,2,3,4,5,6,7,8,9,10); // 1 2 8
}

{

const makeFoo = function (a,b, ...rest) {
    const r =[a];
    const innerFoo =  () => {
    console.log(r);
    console.log('Soy innerFoo');
    };
    
    return innerFoo;

};

makeFoo(1)();

}

{

  //IIFE

(function (a) {
  const r =[a];

  return () => {
    console.log(r);
    console.log('Soy innerFoo');
  }
})(12)();

}

const counterCreator = () => {
    let value = 0;

    const increase =() => {
        value++;
        console.log(value);
    }

        const decrease =() => {
        value--;
        console.log(value);
    };

    return {increase, decrease};
};

const counter1 = counterCreator();
counter1.increase();
counter1.increase();

const counter2 = counterCreator();
counter2.decrease();
counter2.decrease();


