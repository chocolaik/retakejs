// Задание 9
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

class Contact extends Email {
    constructor(email, phone) {
        super(email);
        this._phone = phone;
    }

    get phone() {
        if (!this._phone.startsWith('+')) {
            return 'Неизвестный';
        }

        const phoneLength = this._phone.replace(/\+/g, '').length;

        if (phoneLength === 12) {
            return 'Мобильный';
        }

        if (phoneLength === 18) {
            return 'Городской';
        }

        return 'Неизвестный';
    }

    set phone(value) {
        this._phone = value;
    }
}

let contact1 = new Contact('alex@example.com', '+123456789012');
let contact2 = new Contact('steven@example.com', '+123456789012345678');

console.log(contact1.email);
console.log(contact1.phone);

console.log(contact2.email);
console.log(contact2.phone);

contact1.email = 'new@example.com';
contact1.phone = '123456789012';

console.log(contact1.email);
console.log(contact1.phone);