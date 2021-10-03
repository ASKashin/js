
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

// const agi = (a) => {
//     if (a === 1) {
//         console.log(`«${a} год»`)
//     } else if ( a > 1 && a < 5 ) {
//         console.log(`«${a} года»`)
//     } else {
//         console.log(`«${a} лет»`)
//     }

// };
// add(4);



const add = (a) => {
    if (typeof a === 'number') {
            if (a === 1) {
                console.log(`«${a} год»`)
            } else if (a === 2 || a === 3 || a === 4) {
                console.log(`«${a} года»`)
            } else {
                console.log(`«${a} лет»`)
            }
    } else {
        console.log ('введенные данные не являются числом')
    }
}
add(5);



