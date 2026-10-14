//2 задание
function changeElem(array, n) {
    return array.map(elem => elem * n);
}

let array = [1, 2, 3, 4];
let result = changeElem(array, 3);

console.log(result);
console.log(array);