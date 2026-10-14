let price = 1000
let range = "day"
const ranges = {
    day: "день",
    month: "месяц",
    week: "неделя"
}

console.log(price + "P в " + ranges[range]);

let temp = 25 
let weather = "clear"
let activity
if (temp >= 25 && weather === "clear") {activity = "golf";
} else if (10 <= temp <= 24 && weather === "cloudy") {activity = "bowling";
} else {activity = "hiking";}
console.log(activity)

let a = 2
let b = 6
let sign = "*"

if (sign === "-") {console.log(a-b);
}else if (sign === "+") {console.log(a+b);
}else if (sign === "/") {console.log(a/b);
}else if (sign === "*") {console.log(a*b);
}else if (sign === "/") if (b===0){console.log("на ноль делить нельзя");}

let word = 'меню'
let result 
if (Number.isInteger(Math.sqrt(word.length))) {
    result = 1;}
    else {
        result = 0;
    }
console.log(result)
