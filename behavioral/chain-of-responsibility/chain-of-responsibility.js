/*
chain-of-responsibility (Цепочка обязанностей) - это поведенческий паттерн, который позволяет передавать запросы последовательно
по цепочке обработчиков, причем его особенность в том, что каждый последующий обработчик решает задачу того, может ли он сам обработать
запрос либо его нужно передать дальше по цепочке.
*/

class Account {
  pay(orderPrice) { // на вход принимает транзакцию оплаты и прогоняет через условие, если выбранная платежная система
                    // может оплатить счет, то сообщение об оплате ыводится в консоль, если нет, то запускаем следующее условие,
                    // проверяем есть ли у данной системы приемник(есть ли в цепочке следующая система оплаты), если есть, то
                    // выводится сообщение о том, что с помощью текущей системы оплата не может быть проведена и ответственность
                    // переадрессована на следующую систему и погружаемся на уровень ниже, где проводим те же операции.
                    // и, в конечном итоге, если баланса по-прежнему нехватает и вложенных систем так же нет, то выводится сообщение о том,
                    // что нехватает денег
		if (this.canPay(orderPrice)) {
			console.log(`Paid ${orderPrice} using ${this.name}`);
		} else if (this.incomer) {
			console.log(`Cannot pay using ${this.name}`);
			this.incomer.pay(orderPrice)
		} else {
			console.log('Unfortunately, not enough money');
		}
	}

	canPay(amount) { // сравнивает поступающее значение транзакции на оплату с текущим значением баланса
		return this.balance >= amount;
	}

	setNext(account) { // устанавливает приемника
		this.incomer = account;
  }
  
  show() { // <-- new method to see the chain
    console.log(this);
  }
};

class Master extends Account {
	constructor(balance) {
		super();
		this.name = 'Master Card';
		this.balance = balance;
  }
};

class Paypal extends Account {
	constructor(balance) {
		super();
		this.name = 'Paypal';
		this.balance = balance;
    }
};

class Qiwi extends Account {
	constructor(balance) {
		super();
		this.name = 'Qiwi';
		this.balance = balance;
	}
};

// Set system balance
const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

// Define chain
master.setNext(paypal);
paypal.setNext(qiwi);

// Start payment
master.pay(438);
/*
`Cannot pay using Master Card`
`Cannot pay using Paypal`
`Paid 438 using Qiwi`
*/

master.show();
/*
Master {
  name: 'Master Card'
  balance: 100
  incomer: Paypal
    name: 'Paypal'
    balance: 200
    incomer: Qiwi
      name: 'Qiwi'
      balance: 500
}
*/
