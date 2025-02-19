'use strict';

const listsBooks = document.querySelectorAll('.books');
const listBook = document.querySelectorAll('.book');
const h2 = document.querySelectorAll('h2');
const adv = document.querySelectorAll('.adv');
const item = document.querySelectorAll('ul');
const list = document.querySelectorAll('li');



listsBooks[0].prepend(listBook[1])
listsBooks[0].append(listBook[2])
listBook[3].before(listBook[4])

document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";


h2.a[4].innerHTML = '<span style = "font-weight: normal; color: darkkhaki">Книга 3. this и <strong>Прототипы</strong> Объектов</span>'

adv[0].remove()

list[3].after(list[6])
list[6].after(list[8])
list[10].before(list[2])
list[9].before(list[7])


list[47].after(list[55])
list[55].after(list[49])
list[48].before(list[50])
list[48].after(list[52])
list[52].after(list[53])


const cloneElm = list[25].cloneNode(true)
cloneElm.innerHTML = '<strong>Глава 8: За пределами ES6</strong> '
item[2].append(cloneElm)
item[2].append(list[26])




// const h1 = document.getElementsByTagName('h1');
// const handlerBtn = document.getElementsByClassName('handler_btn');
// const screenBtn = document.querySelector('.screen-btn');
// const  otherItems1 = document.querySelectorAll('.other-items.percent');
// const  otherItems2 = document.querySelectorAll('.other-items.number');
// const input = document.querySelector('.rollback input');
// const span = document.querySelector('.rollback span');
// let screen = document.querySelectorAll('.screen');
// const calculate = handlerBtn[0];
// const reset = handlerBtn[1];

// Array.from(document.getElementsByClassName('total-input')).forEach(el => {
//   console.log(el)
// });

// console.log(h1[0]);
// console.log(calculate);
// console.log(reset);
// console.log(screenBtn);
// console.log(otherItems1);
// console.log(otherItems2);
// console.log(input);
// console.log(span);
// console.log(screen);

// const appData = {
//   title: '',
//   screens: [],
//   screenPrice: 0,
//   adaptive: true,
//   rollback: 10,
//   fullPrice: 0,
//   allServicePrices: 0,
//   servicePercentPrice: 0,
//   services: {},
//   start: function() {
//     appData.asking()
//     appData.addPrice()
//     appData.getFullPrice()
//     appData.getServicePercentPrices()
//     appData.getTitle()

//     appData.logger()
//   },
//   isNumber: function(num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
//   },
//   isString: function (str) {
//     return isNaN(str);
//   },

//   asking: function() {
//     do {
//       appData.title = prompt('Как называется ваш проект?',"Калькулятор вёрстки"); 
//     } while (appData.isNumber(appData.title));

//     for (let i = 0; i < 2; i++) {
//       let name = ''
//       let price = 0

//       do {
//         name = prompt('Какие типы экранов нужно разработать?');
//       } while (appData.isNumber(name))

//       do {
//         price = prompt('Сколько будет стоить данная работа?');
//       } while (!appData.isNumber(price))

//         appData.screens.push({id: i, name: name, price: price})
//     };
      

//       for (let i = 0; i < 2; i++) {
//         let name = ''
//         let price = 0

//         do {
//           name = prompt('Какой дополнительный тип услуги нужен?');
//         } while (appData.isNumber(name))

//         do {
//           price = prompt('Сколько это будет стоить?');
//         } while (!appData.isNumber(price));
    
//         appData.services[name] = +price
//       }
    
  
//     appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    
//   },
//   addPrice: function() {
//     for(let screen of appData.screens) {
//       appData.screenPrice += +screen.price
//     }

//     for(let key in appData.services) {
//       appData.allServicePrices += appData.services[key]
//     }
//   },

//   getFullPrice: function() {
//     appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
//   },
//   getTitle: function() {
//     appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase(); 
//   },
//   getServicePercentPrices: function() {
//     appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
//   },
//   getRollbackMessage: function(price) {
//     switch (true) {
//       case price >= 30000:
//         return"Даем скидку в 10%"
//           break;
//       case price >= 15000 && price < 30000: 
//         return "Даем скидку в 5%"
//           break;
//       case price >= 0 && price < 15000: 
//         return "Скидка не предусмотрена"
//           break;
//       default: 
//         return "Что то пошло не так"
//     }
//   },
//   logger: function () {
//     console.log(appData.fullPrice);
//     console.log(appData.servicePercentPrice);
//     console.log(appData.screens);
//   }
// };

// appData.start()
