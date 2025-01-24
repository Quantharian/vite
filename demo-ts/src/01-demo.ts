/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// Inferencia de tipos

// Declaración const / let
let x = 22;
// x = 'Pepe' // Error de TS

// Tipo inferido es any
let z;
z = 22;
z = "Pepe";

// Anotación de tipo --> : tipo
{
    let z: number;
    z = 22;
    // z = 'Pepe'; Error de TS
}

// Declaración const / let NO SE ANOTA
{
    let x: number = 22; // SOBRA number
}

// Anotamos los parámetros

function add(a: number, b: number): number {
    return a + b;
}

const s = (a: number, b: number): number => a - b;

// conversion / asercion de tipos

const z1 = document.querySelector("h1") as HTMLHeadingElement;
const z2 = document.querySelector("h1") as unknown as number;

z1.addEventListener("click", (event) => {
    const element = event.target as HTMLButtonElement;
    element.disabled = false;
});

// Objetos, Arrays y Tuplas

const user: {
    name: string;
    age: number;
    job?: string;
} = {
    name: "Pepe",
    age: 22,
};

//Propiedades opcionales

user.job = "Developer";
delete user.job;

if (user.job) {
    console.log(`Trabajo de ${user.job}`);
} else {
    console.log("No tiene trabajo");
}
{
    // Parametros opcionales
    //Narrowing: restricción del tipo
    const foo = (a?: string) => {
        if (!a) return;
        console.log(a.toLocaleLowerCase());
    };
}
foo("a");

// Arrays
{
    const data = [1, 2, 3];
    data.push(23);
    // data.push('Pepe') Error de tipo

    const foo = (data: number[]) => {
        data.map((item) => item * item);
    };
    // const foo 2 = (data: Array<number>) => {
    //     data.map((item)=>item*item);
    // }
}

//Tupla

{
    const t: number[] = [1, 2];
    t.push(5);
    console.log(t.length);

    const t1: [number, string] = ["Pepe", 2];
    const t2: [string, number] = ["Juan", 4];
}

const user1: { [key: string]: string | string | boolean } = {
    name: "Pepe",
    age: 23,
    hasJob: true,
};

const p = "patata";
