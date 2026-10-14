//4 задание
function checkObj(obj) {
    return Object.hasOwn(obj, 'particle');
}

console.log(checkObj({id: 1, particle: 10}));
console.log(checkObj({id: 2, name: "tag"}));