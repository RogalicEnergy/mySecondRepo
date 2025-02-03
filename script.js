'use strict'

let title = prompt('Как называется ваш проект?');
let screens  = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', "12000");
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback  = 70; // откат посреднику
let fullPrice = (screenPrice + servicePrice1 + servicePrice2);  // итоговая стоимость
let allServicePrices, servicePercentPrice, formattedTitle

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

const getAllServicePrices = function(allServicePrices) {
  return screenPrice + servicePrice1 + servicePrice2;
}

allServicePrices = getAllServicePrices();

function getFullPrice() {
  return screenPrice + allServicePrices;
}

fullPrice = getFullPrice();

const getTitle = function(title) {
  title = title.trim();
  if (title.length === 0) return '';
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase(); 
};

formattedTitle = getTitle(title);

const getServicePercentPrices = function(servicePercentPrice) {
  return fullPrice - (fullPrice * (rollback / 100));
}

servicePercentPrice = getServicePercentPrices();

const getRollbackMessage = function(price) {
  switch (true) {
    case price >= 30000:
      return"Даем скидку в 10%"
        break;
    case price >= 15000 && price < 30000: 
      return "Даем скидку в 5%"
        break;
    case price >= 0 && price < 15000: 
      return "Скидка не предусмотрена"
        break;
    default: 
      return "Что то пошло не так"
  };
}

showTypeOf(title)
showTypeOf(screenPrice)

console.log(allServicePrices);
console.log(fullPrice);
console.log(formattedTitle);
console.log(Math.ceil(servicePercentPrice));
console.log(getRollbackMessage(fullPrice));
