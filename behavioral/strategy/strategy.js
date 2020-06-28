/*
strategy - это поведенческий паттерн, который определяет схожие алгоритмы и помещает их в каждый отдельный класс, после чего
между этими алгоритмами можно автоматически переключаться в ходе выполнения программы.
Используется при расширении возможностей приложения, чтобы не превратить код в нечитаемое или трудно поддерживаемое полотно.
*/

function baseStrategy(amount) {
  return amount;
};

function premiumStrategy(amount) {
  return amount * 0.85;
};

function platinumStrategy(amount) {
  return amount * 0.65;
};

class AutoCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
};

const baseCustomer = new AutoCart(baseStrategy);
const premiumCustomer = new AutoCart(premiumStrategy);
const platinumCustomer = new AutoCart(platinumStrategy);

baseCustomer.setAmount(50000);
console.log(baseCustomer.checkout()); // 50000

premiumCustomer.setAmount(50000);
console.log(premiumCustomer.checkout()); // 42500

platinumCustomer.setAmount(50000);
console.log(platinumCustomer.checkout()); // 32500
