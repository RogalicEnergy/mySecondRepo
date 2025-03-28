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

  start: function() {
    
    this.addScreens()
    this.addServices()
    this.addPrice()
    
    console.log(this);
    this.showResult()
    this.disabled();

  },

  init: function() {
    this.addTitle()
    calculate.addEventListener('click', this.checkError);
    screenBtn.addEventListener('click', this.addScreenBlock);
    input.addEventListener('input', this.addRollback);
    reset.addEventListener("click", this.reset);
  },

  checkError: function () {
    screens = document.querySelectorAll('.screen');
    this.isError = false

    screens.forEach((screen) => {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')

      if (select.value === '' || input.value === '') {
        this.isError = true;
      }
      });

      if (!this.isError) {
        appData.start();
      }
  },

  blockingSelect: function () {
    // Блокируем select, input и кнопку plus при нажатии кнопки рассчитать
    const select = document.querySelectorAll('select');
    const input = document.querySelectorAll('.screen input[type="text"]');

    select.forEach((item) => {
        item.disabled = 'true';
    })
    input.forEach((item) => {
        item.disabled = 'true';
    })

    screenBtn.disabled = 'true';

    calculate.style.display = "none";
    reset.style.display = "block";
  },

  showResult: function() {
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    totalFullCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.countInputs;
  },

  addTitle: function() {
    document.title = title.textContent;
    this.title = title.textContent;
  
  },
  addScreens: function() {
    screens = document.querySelectorAll('.screen');

    screens.forEach(function(screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      
      appData.screens.push({
        id: index, 
        name: selectName, 
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
    
    console.log(this.screens);
  },

  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if(check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if(check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
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

    this.rollback = +rollbackInput
  
  },

  addPrice: function() {
    this.countInputs = 0; 

    for(let screen of this.screens) {
      this.screenPrice += +screen.price
      this.countInputs += screen.count
    }

    for(let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key]
    }
    for(let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));

  },
  disabled: function () {
    calculate.style.display = "none";
    reset.style.display = "flex";
    screens = document.querySelectorAll(".screen");
    screenBtn.disabled = true;
    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      for (let i = 0; i < screens.length; i++) {
        select.disabled = true;
        input.disabled = true;
      }
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector("label");
      const input = item.querySelector('input[type="text"]');
      check.disabled = true;
      label.draggable = true;
      input.disabled = true;
    });
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector("label");
      check.disabled = true;
      label.draggable = true;
    });
  },
  reset: function () {
    calculate.style.display = "flex";
    reset.style.display = "none";
    screenBtn.disabled = false;
    screens = document.querySelectorAll(".screen");
    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      for (let i = screens.length - 1; i >= 1; i--) {
        screens[i].remove();
      }
      select.disabled = false;
      input.disabled = false;
      select.value = "";
      input.value = "";
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector("label");
      const input = item.querySelector('input[type="text"]');
      check.disabled = false;
      label.draggable = false;
      input.disabled = false;
      if (check.checked) {
        check.checked = false;
        this.servicesNumber[label.textContent] = 0;
      }
    });
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector("label");
      const input = item.querySelector('input[type="text"]');
      check.disabled = false;
      label.draggable = false;
      input.disabled = false;
      if (check.checked) {
        check.checked = false;
        this.servicesPercent[label.textContent] = 0;
      }
    });
    this.screenPrice = 0;
    total.value = "";
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    totalCountOther.value = "";
    this.fullPrice = 0;
    totalFullCount.value = "";
    this.servicePercentPrice = 0;
    totalCountRollback.value = "";
    this.countInputs = 0;
    totalCount.value = "";
  },
  logger: function () {
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
    console.log(this.screens);
  }
};

appData.init()
