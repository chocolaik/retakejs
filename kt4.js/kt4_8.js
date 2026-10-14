//Задание 8
class Email {
    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
}

let email1 = new Email('alex@example.com');
let email2 = new Email('steven@example.com');

console.log(email1.email);
console.log(email2.email);

email1.email = 'alex123@example.com';

console.log(email1.email);