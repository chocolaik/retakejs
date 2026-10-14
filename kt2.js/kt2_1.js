// 1задание
let word = 'Арнольд'
let result = ''

for (let char of word) {
    let lower = char.toLowerCase();

    if (lower !=='а' && lower !== 'о') {
        result += char;
    }
}
console.log(result)