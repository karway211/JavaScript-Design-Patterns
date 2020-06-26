/*
composite(компоновщик) - это структурный паттерн проектирования, который позволяет сгруппировать множество объектов в
древовидную структуру и работать с этой структурой так, как будто это один единственный объект.
Ключевая структура данного паттерна - это дерево. В кейсе программирования это объект со специфическим интерфейсом.
Особенность данного интерфейса в том, что сам объект мало что знает о вложенных в него структурах, он просто реализует
те же методы, что и вложенные в него компоненты. Но вместо непосредственного вызова своего метода он передает вызовы
всем вложенным компонентам, а те компоненты, в свою очередь, передают эти вызовы в собственные вложенные структуры.
Т.е. один исходный класс содержит компоненты, которые, в свою очередь, так же содержат компоненты.

Еще одна особенность этого паттерна, это единый интерфейс вызова. В самом корневом компоненте никаких действий не происходит,
вызовы он передает(делегирует) во все вложенный компоненты по цепочке и методы вызываются непосредственно в каждом из них.
*/

class Equipment {
	getPrice() {
		return this.price || 0;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	setPrice(price) {
		this.price = price;
	}
};

class Engine extends Equipment {
	constructor() {
		super();
		this.setName('Engine');
		this.setPrice(800);
	}
};

class Body extends Equipment {
	constructor() {
		super();
		this.setName('Body');
		this.setPrice(3000);
	}
};

class Tools extends Equipment {
	constructor() {
		super();
		this.setName('Tools');
		this.setPrice(4000);
	}
};

class Composite extends Equipment {
	constructor() {
		super();
		this.equipments = [];
	}

	add(equipment) {
		this.equipments.push(equipment);
	}

	getPrice() {
		return this.equipments
			.map(equipment => equipment.getPrice())
			.reduce((a, b) => a + b);
	}
};

class Car extends Composite {
	constructor() {
		super();
		this.setName('Audi');
	}
};

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}$`); // 'Audi price is 7800$'
