const createArray = () => [1,2]
const createObject = () => ({name: 'Pepe', age: 22, address: {street: 'c/ Pez', city: 'Soria'}})

// const data = createArray();
// const first = data[0];
// const second = data[1];

const [first, second] = createArray(); // destructuring
const {
    name: userName, 
    age, 
    address: {street, city}} = createObject(); // destructuring

console.log(userName, age, street, city); // Pepe 22 c/ Pez Soria

/**********************************************/

function makeFoo({name, age}) {
    console.log('Desde makeFoo', name, age);
 }

 const obj = {
        name: 'Pepe',
        age: 22,
        address: {street: 'c/ Pez', city: 'Soria'}
    };

    makeFoo(obj); // {name: 'Pepe', age: 22} 

    function makeFooWithData ([a,b]) {
        console.log('Desde makeFooWithData', a, b);
    }

    makeFooWithData(['Pepe', 'Juan ']);// Pepe Juan

    const add = (a,b) => a+b;

    const data = [12,10];
    console.log(add(data[0], data[1])); // 22 // array 
    console.log(add(...data)); // 22 // spread operator
   
    const addPlus = (a,b, ...rest) => { // rest operator
        console.log(rest);
       console.log(a + b);
    }


    addPlus(2,3,4,5,6); // 5 [4,5,6]

    const media = (...values) => {
        const flatValues = values.flat();
        const total = flatValues.reduce((a,b) => a+b, 0);
        return total / flatValues.length;
    }

    console.log(media(2,3,[4,5],6)); // 4  

    const media2 = (...values) => {
        const flatValues = values.flat(i);
        const recursive = (total, [first, ...rest]) => {
            if (first === undefined) { 
                return total / flatValues.length; 
            }
            return recursive(total + first, rest); 
        }
        const total = recursive(0, flatValues);
        return total / flatValues.length;
    }

    console.log(media2 ([[2,[3,4],[5],6]]))

    const media3 = (...values) => {
        const flatValues = values.flat(Infinity);
        const total = flatValues.reduce((a,b) => a+b, 0);
        return total / flatValues.length;
    }

     console.log(media3 ([[[2,[3,4]],[5],6]]))