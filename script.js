'use strict';

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  services: {},
  start: function() {
    appData.asking()
    appData.addPrice()
    appData.getFullPrice()
    appData.getServicePercentPrices()
    appData.getTitle()

    appData.logger()
  },
  isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  isString: function (str) {
    return isNaN(str);
  },

  asking: function() {
    do {
      appData.title = prompt('Как называется ваш проект?',"Калькулятор вёрстки"); 
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let name = ''
      let price = 0

      do {
        name = prompt('Какие типы экранов нужно разработать?');
      } while (appData.isNumber(name))

      do {
        price = prompt('Сколько будет стоить данная работа?');
      } while (!appData.isNumber(price))

        appData.screens.push({id: i, name: name, price: price})
    };
      

      for (let i = 0; i < 2; i++) {
        let name = ''
        let price = 0

        do {
          name = prompt('Какой дополнительный тип услуги нужен?');
        } while (appData.isNumber(name))

        do {
          price = prompt('Сколько это будет стоить?');
        } while (!appData.isNumber(price));
    
        appData.services[name] = +price
      }
    
  
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    
  },
  addPrice: function() {
    for(let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for(let key in appData.services) {
      appData.allServicePrices += appData.services[key]
    }
  },

  getFullPrice: function() {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function() {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase(); 
  },
  getServicePercentPrices: function() {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },
  getRollbackMessage: function(price) {
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
    }
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  }
};

appData.start()
