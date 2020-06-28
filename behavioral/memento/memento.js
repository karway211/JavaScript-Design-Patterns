/*
memento (Снимок) - это поведенческий паттерн, который позволяет сохранять и восстанавливать предыдущее состояние объекта.
*/

class Memento {
	constructor(value) {
		this.value = value;
	}
};

const creator = {
  save: val => new Memento(val), // передаем текущее состояние, которое хотим сохранить
  
  restore: memento => memento.value, // передаем структуру данных, которая хранит все наши сохраненные состояния
                                    // и обращаемся к какому-либо элементу этой структуры, т.е восстанавливаем предыдущее сохраненное значение
};

class Caretaker {
	constructor() {
		this.values = []; // определяем структуру, в которой будем хранить наши снимки
	}

	addMemento(memento) {
		this.values.push(memento); // делаем снимок текущих данных и сохраняем его
	}

	getMemento(index) {
    return this.values[index]; // обращаемся к тому или иному элементу массива и возвращаем его, т.о.
                                // восстанавливаем предыдущее сохраненное значение
	}
};

const careTaker = new Caretaker(); // создаем экземпляр хранителя

//создаем и сохраняем 3 состояния
careTaker.addMemento(creator.save('hello'));
careTaker.addMemento(creator.save('hello world'));
careTaker.addMemento(creator.save('hello world !!!'));

// выводим первый сохраненный элемент в массиве values
console.log(creator.restore(careTaker.getMemento(1)));
// 'hello world'
