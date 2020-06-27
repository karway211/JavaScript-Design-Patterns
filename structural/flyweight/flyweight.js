/*
flyweight (легковес) - это структурный паттерн, который позволяет вместить большее количество определенных объектов в 
выделенную оперативную память. Т.е. он позволяет экономить ресурсы, разделяя общее состояние объектов между собой, вместо
хранения одинаковых данных в каждом объекте, что похоже на кеширование данных.
Все свое внутриннее состояние он должен получить через параметры конструктора и у него не должно быть никаких публичных
полей и сеттеров.
Создавать легковесы и работать с ними намного удобнее с помощью 'фабрик' - это порождающий паттерн, который предоставляет
общий интерфейс создания объектов и может принимать различные аргументы, которые влияют на конечный вид созданного объекта.
Если объект еще не создан, то он создает его и помещает в свой внутринний пул, если объект уже создан, т.е. содержится в 
пуле, то просто возвращает ссылку на него
*/

class Auto {
	constructor(model) {
		this.model = model;
	}
}

class AutoFactory {
	constructor(name) {
		this.models = {};
	}

	create(name) {
		let model = this.models[name];
    if (model) return model;
    console.count('model');  // <-- console counter
		this.models[name] = new Auto(name);
		return this.models[name];
  }
  
  getModels() { // <-- new method
    console.table(this.models);
  }
};

const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla'); // мы получаем ссылку на уже существующую модель

console.log(factory.getModels());
/*
model: 1
model: 2
model: 3

Object {
  Audi: Object {model: 'Audi'}
  BMW: Object {model: 'BMW'}
  Tesla: Object {model: 'Tesla'}
}
*/
