//7 Задание
const task_1 = products.filter(product => product.count > 10);

const task_2 = products.find(
    product => product.price >= 800 && product.price <= 900
);

const task_3 = [...products].sort((a, b) => b.price - a.price);

const task_4 = products.reduce(
    (sum, product) => sum + product.price * product.count,
    0
);

const task_5 = products
    .map(product => {
        const {marks, ...rest} = product;

        return {
            ...rest,
            marks_total: marks.reduce((sum, mark) => sum + mark, 0)
        };
    })
    .sort((a, b) => a.marks_total - b.marks_total);

console.log('Задание 1:', task_1);
console.log('Задание 2:', task_2);
console.log('Задание 3:', task_3);
console.log('Задание 4:', task_4);
console.log('Задание 5:', task_5);