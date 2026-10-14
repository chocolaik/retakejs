// Задание 3
let prices = [
    'Цена товара - 1200$',
    'Стоимость - 500$',
    'Цена не определена',
    '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$'
];

function getInfo(prices) {
    let startsWithPrice = prices.filter(item => item.startsWith('Цена')).length;
    let endsWithDollar = prices.filter(item => item.endsWith('$')).length;

    return [startsWithPrice, endsWithDollar];
}

console.log(getInfo(prices));