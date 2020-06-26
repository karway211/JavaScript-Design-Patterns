/*
prototype - это паттерн, с помощью которого мы можем создать копию объекта везде где нам это потребуется с минимальными затратами
памяти, т.к. создается копия на основании уже существующей структуры. И, в случае необходимости, модифицировать каждый экземпляр точечно
под определенные нужды не изменяя базовой структуры.
*/

class TeslaCar {

	constructor(model, price, interior, autopilot) {
		this.model = model;
		this.price = price;
		this.interior = interior;
		this.autopilot = autopilot;
	}

	produce() {
		return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
	}
};

const prototypeCar = new TeslaCar('S', 80000, 'black', false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();

car1.interior = 'white';
car1.autopilot = 'true';
car2.interior = 'black';
car2.autopilot = 'false';
