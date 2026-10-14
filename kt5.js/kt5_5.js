//Задание 5
function iIstFridayToday() {
    let today = new Date().getDay();

    if (today === 5) {
        console.log('Сегодня пятница!');
    } else if (today === 4) {
        console.log('Завтра пятница!');
    } else if (today === 6) {
        console.log('Пятница была вчера');
    } else {
        let days = (5 - today + 7) % 7;

        let word = 'дней';

        if (days === 2 || days === 3 || days === 4) {
            word = 'дня';
        }

        console.log(`Пятница будет через ${days} ${word}`);
    }
}

iIstFridayToday();