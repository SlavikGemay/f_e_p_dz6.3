'use strict';


function removeElement() {

    const array = [1, 3, 4, 4, 6, 2, 5, 4, 7];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 4) {
            array.splice(i, 1);
            i--;
        }
    }

    console.log(array);
    // return array;
}


// console.log(removeElement);


// const array = [1, 3, 4, 4, 6, 2, 5, 4, 7];
// removeElement(array, 4);
// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]
