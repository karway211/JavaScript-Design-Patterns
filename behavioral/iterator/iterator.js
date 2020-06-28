/*
iterator - это поведенческий паттерн, который дает возможность последовательно обходить элементы составных объектов не раскрывая
их внутриннее представление. Визуально это похоже на то, как плейер перебирает песни когда мы нажимаем на кнопки перемотки
вперед и назад.
Умный перебор коллекции без раскрытия внутриннего представления элементов. Т.о. мы не позволяем изменять что-то внутри наших
объектов.
*/

class ArrayIterator {
	constructor(el) {
		this.index = 0;
		this.elements = el;
	}

	next() { // обращается к коллекции к n-му элементу
		return this.elements[this.index++];
	}

	hasNext() { // проверяет наличие n-го элемента в коллекции
		return this.index < this.elements.length;
	}
};

class ObjectIterator {
	constructor(el) {
		this.index = 0;
		this.keys = Object.keys(el),
		this.elements = el;
	}

	next() {
		return this.elements[this.keys[this.index++]];
	}

	hasNext() {
		return this.index < this.keys.length;
	}
};

const collectionArr = new ArrayIterator(['Audi', 'Bmw', 'Tesla', 'Mersedes']);

while (collectionArr.hasNext()) {
  console.log(collectionArr.next());
};

/*
'Audi'
'Bmw'
'Tesla'
'Mersedes'
*/

const autos = {
  audi: {model: 'Audi', color: 'black', price: '20000'},
  bmw: {model: 'Bmw', color: 'white', price: '30000'},
  tesla: {model: 'Tesla', color: 'gray', price: '40000'},
};

const collectionObj = new ObjectIterator(autos);

while (collectionObj.hasNext()) {
  console.log(collectionObj.next());
};

/*
Object {
  model: 'Audi', color: 'black', price: '20000'
}
Object {
  model: 'Bmw', color: 'white', price: '30000'
}
Object {
  model: 'Tesla', color: 'gray', price: '40000'
}
*/
