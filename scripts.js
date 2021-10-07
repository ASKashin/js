
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

