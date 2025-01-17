'use strict';

{
    //Datos y sus tipos

console.log('pepe', typeof 'pepe');
console.log(22, typeof 22);
console.log(true, typeof true);
console.log(22n, typeof 22n);
console.log(undefined, typeof undefined);
console.log(null, typeof null, 'MENTIRA, ES UN BUG del lenguaje original');
console.log(Symbol(), typeof Symbol());

console.log({}, typeof {});
console.log(() => {}, typeof (() => {}));
}

{
    //Demostración de que null no es un objeto

    console.log(({}.foo = 22));
// console.log(('Pepe'.foo = 22));
// console.log((22).foo = 22);
// console.log((undefined).foo = 22);
// console.log((null).foo = 22);
}

{
    //Variables

    // Declararlas y asignarles un valor

    let foo; // Declarar (reservar espacio en memoria o inicializar a undefined)
    foo = 22; // Asignar (reasignación)
    console.log({foo});

    let baz = 22 // Declarar y asignar = inicializar
    console.log(baz);

    const pi = 3.14; // const siempre se inicializa
}

{
    // Variables con let -> reasignarse y opcionalmente CAMBIAR DE TIPO
    
    // El tipo depende del valor
    // El tipo cambia dinámicamente

    let foo;
    console.log({foo}, typeof foo);
    foo = 'Pepe';
    console.log({foo}, typeof foo);
    foo = 22;
    console.log({foo}, typeof foo);
    foo = true;
    console.log({foo}, typeof foo);
    foo = 22n;
    console.log({foo}, typeof foo);
    foo = undefined;
    console.log({foo}, typeof foo);
    foo = null;
    console.log({foo}, typeof foo);
    foo = Symbol();
    console.log({foo}, typeof foo);
    foo = {};
    console.log({foo}, typeof foo);
    foo = () => {};
    console.log({foo}, typeof foo);

}

// El scope de let y const es el bloque en el que están declaradas

//  console.log(foo); // ReferenceError: foo is not defined

{

    const IVA_VALUES = {
        base: 1.22,
        reducido: 1.10,
        superReducido: 1.04,
    }
    let price = 22;
    let total = price * IVA_VALUES.base;
    console.log({total});
}