/*
bridge (мост) - это порождающий паттерн, который разделяет один или несколько классов на несколько отдельных иерархий, которые
называются абстракция и реализация, что, в свою очередь, помогает изменять их без зависимости друг от друга.

абстракция - это специальная обертка, которая сама не выполняет работу, а делегирует ее одному из объектов реализации.

реализация - это объект, в котором написана непосредственно сама реализация.
*/

class Model {
	constructor(color) {
		this.color = color;
	}
};

class Color {
	constructor(type) {
		this.type = type;
	}
	get() {
		return this.type;
	}
};

class BlackColor extends Color {
	constructor() {
		super("dark-black");
	}
};

class SilbrigColor extends Color {
	constructor() {
		super("Silbermetallic");
	}
};

class Audi extends Model {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Auto: Audi, Color: ${this.color.get()}`;
	}
};

class Bmw extends Model {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Auto: Bmw, Color: ${this.color.get()}`;
	}
};

// We avoided creation of very  specific class:
// const blackBmw = new BlackColorBmv();

//Instead
const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint()); // 'Auto: Bmw, Color: dark-black'

/*
паттерн Мост нужен для разделения не прикасающихся функциональностей в одном классе. Он позволяет поместить всю реализацию в классы:
абстракция и реализация.
*/
