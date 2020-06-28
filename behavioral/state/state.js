/*
state (Состояние) - это поведенческий паттерн, который позволяет менять объектам свое поведение в зависимовти от состояния,
что со стороны выглядит как будто бы в работу включился другой класс.
Программа может находиться в одном из нескольких состояний и в зависимости от этого программа может реагировать на одно и 
то же событие по-разному. Переход между этими состояниями может быть как ручным (управляемым), так и автоматическим, когда в
зависимости от того или иного условия включается следующее состояние.
*/

class OrderStatus {
	constructor(name, nextStatus) {
		this.name = name; // текущий статус заказа
		this.nextStatus = nextStatus; // следующий шаг заказа
	}

	next() { // перемещает нас на следующий шаг
		return new this.nextStatus();
	}
}
// шаги доставки
class WaitingForPayment extends OrderStatus { // оплата
	constructor() {
		super('waitingForPayment', Shipping); // имя текущего шага и какойшаг будет следующий
	}
}

class Shipping extends OrderStatus { // нахождение заказа в пути
	constructor() {
		super('shipping', Delivered); // имя текущего шага и какойшаг будет следующий
	}
}

class Delivered extends OrderStatus { // доставка заказчику
	constructor() {
		super('delivered', Delivered); // имя текущего шага и какойшаг будет следующий
	}
}

class Order { // объект заказа
	constructor() {
		this.state = new WaitingForPayment(); // начальное состояние- шаг оплаты
	}

	nextState() { // метод, который будет изменять наше состояние
		this.state = this.state.next();
  }
  
  cancelOrder() {   // <-- New method for cancelling order
    this.state.name === 'waitingForPayment'
    ? console.log('Order is canceled!')
    : console.log('Order can not be canceled!');
  }
}

const myOrder = new Order();

console.log(myOrder.state.name); // 'waitingForPayment'
// Try to cancel order
myOrder.nextState(); // 'Order is canceled!'

myOrder.nextState();
console.log(myOrder.state.name); // 'shipping'
// Try to cancel order
myOrder.nextState(); // 'Order can not be canceled!'

myOrder.nextState();
console.log(myOrder.state.name); // 'delivered'
