
// const add = (a, b) => {
//     const result = `sum of ${a} and ${b} is ${a + b}`;
//     console.log(result);
// };
// add(3,5);


// const add = (a, b) => {
//     console.log( `sum of ${a} and ${b} is ${a + b}` );
// };
// add(3,5);



// задание на годы

// const add = (a) => {
//     if (a === 1) {
//         console.log(`«${a} год»`)
//     } else if (a === 2 || a === 3 || a === 4) {
//         console.log(`«${a} года»`)
//     } else {
//         console.log(`«${a} лет»`)
//     }

// };
// add(4);


// вариант более правильный

// const age = (a) => {
//     if (a === 1) {
//         return `${a} год`;
//     } else if ( a > 1 && a < 5 ) {
//         return `${a} года`;
//     } else {
//         return `${a} лет`;
//     }

// };
// console.log(age(4));



// const age = (a) => {
//     if (typeof a !== "number"){
//         return "введенное значание не является числом"
//     }
//     if (a === 1) {
//         return `${a} год`;
//     } else if ( a > 1 && a < 5 ) {
//         return `${a} года`;
//     } else {
//         return `${a} лет`;
//     }

// };
// console.log(age(9));


// const a = [["a", 1], ["b", 2], ["c", 3]];
// const b = a.map((el, i) => {
//     return el;
// })
// console.log(b)



// Homework:
// const a = [["a", 1], ["b", 2], ["c", 3]]; // tuple
// const b = a.map((el) => {
//     return {
//         [el[0]]: el[1]
//     };
// })
// console.log(b); // [{a: 1}, {b: 2}, {c: 3}]*/



// Homework 06.10

// const a = [1, 4, 8, 2, 10, 18, 3, 35, 12];

// const b = a.filter((el) => {

//     return el > 5

// }).map((el)=>{
//     return `${el} is bigger than 5`
// });

// console.log(b);


// Homework 07.10

// const a = [-1,0, 1, false, 2, undefined, '', 3, null];

// const b = a.filter((el) => {

//     return !!el 
// });


// короткая записть когда в теле функции только return
// const c = a.filter((el) => !!el)


// console.log(b);

// const a = ['Andrey', 'Anton', 'Pavel'];

// const b = a.map((el,i) => {
//     return {
//        id: i+1,
//        name: el,
//        value:el.toUpperCase(),
//     }
// })

// console.log(b); // [{ id: 1, name: 'Andrey', value: 'ANDREY' }, { id: 2, name: 'Anton', value: 'ANTON' }, { id: 3, name: 'Pavel', value: 'PAVEL' },]


const array = [
    {
        id: 0,
        firstName: 'Andrey',
        lastName: 'Kashin',
        age: 30,
        address: {
            country: 'Russia',
            city: 'Novosibirsk',
            street: 'Gogolya',
        },
        isMarried: false,
        weight: 101,
        hasCar: true,
    },
    {
        id: 1,
        firstName: 'Pavel',
        lastName: 'Scherbakov',
        age: 32,
        address: {
            country: 'Russia',
            city: 'Novosibirsk',
            street: 'Zhukovskogo',
        },
        isMarried: false,
        weight: 80,
        hasCar: true,
    },
    {
        id: 2,
        firstName: 'Anton',
        lastName: 'Zakharov',
        age: 36,
        address: {
            country: 'Poland',
            city: 'Wroclaw',
            street: 'Dmowskiego',
        },
        isMarried: true,
        weight: 105,
        hasCar: false,
    },
];

// Task 1.
// Вывести в консоль массив следующего вида. Отфильтровать по стране - России.
/*[
    {
        id: 0,
        name: 'Andrey Kashin',
        country: 'Russia'
    },
    {
        id: 1,
        name: 'Pavel Scherbakov',
        country: 'Russia'
    }
]*/

// const b = array.map((el) => {
//     if (el.address.country === "Russia") {
//         return {
//             id: el.id,
//             name:`${el.firstName} ${el.lastName}`,
//             country: el.address.country,
//         }
//     };
// })
// console.log(b);

// Task 2.
// Вывести в консоль массив следующего вида. Новый ключ - fat, принимает булевое значение weight > 100.
/*[
    {
        id: 0,
        name: 'Andrey',
        fat: true, // weight > 100
    },
    {
        id: 1,
        name: 'Pavel',
        fat: false,
    },
    {
        id: 2,
        name: 'Anton',
        fat: true,
    }
]*/
const b = array.map((el) => {
        return {
            id: el.id,
            name:el.firstName,
        }
})
console.log(b);
