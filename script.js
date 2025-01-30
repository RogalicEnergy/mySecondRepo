const title = "mySecondRepo";
const screens  = "Простые, Сложные, Интерактивные";
const screenPrice = 5000;
const rollback  = 70;
const fullPrice = 100000;
const adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");


console.log(screens.toLowerCase().split(', '));

console.log("Процент отката посреднику за работу " + (fullPrice * (rollback/100)));