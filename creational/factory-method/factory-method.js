/*
factory-method - основная цель и задача данного шаблона создание класса, который в свою очередь будет помогать создавать нам определенные объекты
на основании каких-либо входных данных. Исходный класс можно называть супер-классом.
Его нужно использовать тогда, когда нам нужно создавать множество однотипных объектов с одинаковой структурой, но разными данными, причем эти 
объекты могут содержать как свойства, так и методы.
*/

class Bmw {

	constructor(model, price, maxSpeed) {
		this.model = model;
		this.price = price;
		this.maxSpeed = maxSpeed;
  }
  
};

class BmwFactory {

	create(type) {
		if (type === 'X5')
			return new Bmw(type, 108000, 300);
		if (type === 'X6')
			return new Bmw(type, 111000, 320);
  }
  
};

const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');
