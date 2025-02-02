'use strict';

const removeElement = getRemoveElement('Введіть числові значення:');
function getRemoveElement(remove) {
    let data;
    let result = prompt(remove);
    result = result.split(',');
    for (let i = 0; i < result.length; i++) {
        if (result[i].trim() === '4') {
            result.splice(i, 1);
            i--;
        }
    }
    data = result.flat();
    return data;
}
console.log(removeElement);