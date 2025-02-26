'use strict';

const h1 = document.getElementsByTagName('h1')[0];
const screenBtn = document.querySelector('.screen-btn');
const  otherItemsPercent = document.querySelectorAll('.other-items.percent');
const  otherItemsNumber = document.querySelectorAll('.other-items.number');


const calculate = document.getElementsByClassName('handler_btn')[0];
const reset = document.getElementsByClassName('handler_btn')[1];

let input = document.querySelector('.rollback input');
const span = document.querySelector('.rollback span');

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const totalFullCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  fullPrice: 0,
  count: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function() {
    appData.addTitle()

    calculate.addEventListener('click', appData.checkError)
    screenBtn.addEventListener('click', appData.addScreenBlock)
    input.addEventListener('input', appData.addRollback);
  },

  checkError: function () {
    screens = document.querySelectorAll('.screen');

    appData.isError = false

    screens.forEach(function(screen) {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')

      if (select.value === '' || input.value === '') {
        appData.isError = true;
      }
      });

      if (!appData.isError) {
        appData.start();
      }
  },

  start: function() {
    
    appData.addScreens()
    appData.addServices()

    appData.addPrice()

    // appData.logger()
    
    console.log(appData);
    appData.showResult()
    
  },
  showResult: function() {
    total.value = appData.screenPrice
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
    totalFullCount.value = appData.fullPrice
    totalCountRollback.value = appData.servicePercentPrice
    totalCount.value = appData.countInputs
  },
  addTitle: function() {
    document.title = title.textContent
  
  },
  addScreens: function() {
    screens = document.querySelectorAll('.screen');

    screens.forEach(function(screen, index) {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      const selectName = select.options[select.selectedIndex].textContent

      
      appData.screens.push({
        id: index, 
        name: selectName, 
        price: +select.value * +input.value,
        count: +input.value,
      })
      
    })
    
    console.log(appData.screens);
    
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if(check.checked) {
        appData.servicesPercent[label.textContent] = +input.value
      }
    })

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if(check.checked) {
        appData.servicesNumber[label.textContent] = +input.value
      }
    })

  },

  addScreenBlock: function() {
    const cloneScreen = screens[0].cloneNode(true)
    screens[screens.length - 1].after(cloneScreen)
    
  },
  addRollback: function(event) {
    input = document.querySelector('.rollback input');

    const rollbackInput = this.value
    span.textContent = event.target.value + '%'

    appData.rollback = +rollbackInput
  
  },

  addPrice: function() {
    appData.countInputs = 0; 

    for(let screen of appData.screens) {
      appData.screenPrice += +screen.price
      appData.countInputs += screen.count
      
    }

    for(let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key]
    }
    for(let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));

  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  }
};

appData.init()
