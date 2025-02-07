'use strict';

const array = [1, 3, 4, 4, 6, 2, 5, 4, 7];

function removeElement(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            arr.splice(i, 1);
            i--;
        }
    }

}
removeElement(array, 4);
console.log(array);

// const array = [1, 3, 4, 4, 6, 2, 5, 4, 7];
// removeElement(array, 4);
// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]

