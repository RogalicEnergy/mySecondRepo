'use strict'


const title = prompt('Как называется ваш проект?');
console.log('Проект назыввается: ' + title);
const screens  = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
console.log('Нужно разобрать экран: ' + screens);
const screenPrice = +prompt('Сколько будет стоить данная работа?', "12000");
console.log('Работа будет стоить: ' + screenPrice);
const rollback  = 70;
const adaptive = confirm('Нужен ли адаптив на сайте?');
  if (adaptive) {
    console.log('Нужен адаптив');
  } else {
    console.log('Не нужен адаптив');
  }

const service1 = prompt('Какой дополнительный тип услуги нужен?');
  console.log(service1);
const servicePrice1 = +prompt('Сколько это будет стоить?');
  console.log(servicePrice1);
const service2 = prompt('Какой дополнительный тип услуги нужен?');
  console.log(service2);
const servicePrice2 = +prompt('Сколько это будет стоить?');
  console.log(servicePrice2);

const fullPrice = (screenPrice + servicePrice1 + servicePrice2);
console.log('Итоговая стоимость работ: ' + fullPrice);
const rollbackIntermediary = (fullPrice * (rollback / 100));
const servicePercentPrice = (fullPrice - rollbackIntermediary);
console.log("Процент отката посреднику за работу: " + Math.ceil(rollbackIntermediary));
console.log('Итоговая стоимость работ с учётом процентов: ' + servicePercentPrice);

switch (true) {
  case fullPrice >= 30000: console.log("Даем скидку в 10%");
      break;
  case fullPrice >= 15000 && fullPrice < 30000: console.log("Даем скидку в 5%");
      break;
  case fullPrice >= 0 && fullPrice < 15000: console.log("Скидка не предусмотрена");
      break;
  default: console.log("Что то пошло не так");
};

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");


console.log(screens.toLowerCase().split(', '));
