//6 задание
let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34}
];

function addUser(name, lastname, age) {
    let id = users.length
        ? Math.max(...users.map(user => user.id)) + 1
        : 1;

    let user = {id, name, lastname, age};
    users.push(user);

    return user;
}

function updateUser(id, name, lastname, age) {
    let user = users.find(user => user.id === id);

    if (user) {
        user.name = name;
        user.lastname = lastname;
        user.age = age;
        return user;
    }

    return false;
}

function deleteUser(id) {
    let index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }

    return false;
}

addUser('John', 'Smith', 25);
console.log('После добавления:', users);

updateUser(1, 'Alexander', 'Williams', 21);
console.log('После изменения:', users);

deleteUser(2);
console.log('После удаления:', users);