'use strict'

let title = prompt('Как называется ваш проект?')
let screens  = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные")
let screenPrice = +prompt('Сколько будет стоить данная работа?', "12000")
let adaptive = confirm('Нужен ли адаптив на сайте?')

let rollback  = 70
let fullPrice
let allServicePrices, servicePercentPrice, formattedTitle

let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')


const getAllServicePrices = function() {
  return servicePrice1 + servicePrice2;
}

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

const getFullPrice = function() {
  return screenPrice + allServicePrices;
}

const getTitle = function() {
  return title.trim()[0].toUpperCase() + title.slice(1).toLowerCase(); 
};

const getServicePercentPrices = function(servicePercentPrice) {
  return fullPrice - (fullPrice * (rollback / 100));
}

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

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(allServicePrices)
console.log(fullPrice)
console.log(title)
console.log(Math.ceil(servicePercentPrice))
console.log(getRollbackMessage(fullPrice))
