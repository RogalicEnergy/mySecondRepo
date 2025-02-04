'use strict'

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 70;
let fullPrice;
let allServicePrices;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
  title = prompt('Как называется ваш проект?',"Калькулятор вёрстки")
  screens  = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные")

  do {
    screenPrice = +prompt('Сколько будет стоить данная работа?');

  } while(!isNumber(screenPrice))

  adaptive = confirm('Нужен ли адаптив на сайте?');
  
}

function getAllServicePrices() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

    let priceList;
    do {
      priceList = prompt('Сколько это будет стоить?');
      
      } while (!isNumber(priceList));

    sum += +priceList; 
  }

  return sum;
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

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log("allServicePrices", allServicePrices);

console.log(allServicePrices);
console.log(fullPrice);
console.log(title);
console.log(Math.ceil(servicePercentPrice));
console.log(getRollbackMessage(fullPrice));
