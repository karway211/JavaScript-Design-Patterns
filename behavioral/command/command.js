/*
command (Команда) - это поведенческий паттерн, который помогает инкапсулировать некоторые действия и необходимые для них
данные и т.о. позволяет отделить клиента от получателя.
Он превращает запросы в объекты, что позволяет передавать их как аргументы в методы.
Между интерфейсом и бизнес логикой появляется прослойка, которая называется паттерном команда в котором инкапсулирована
логика уникального запроса.
*/

class Driver {
	constructor(command) {
		this.command = command;
	}

	execute() {
		this.command.execute();
	}
};

class Engine {
	constructor() {
		this.state = false;
	}

	on() { // двигатель включен
		this.state = true;
	}

	off() { // двигатель выключен
		this.state = false;
	}
};

class OnStartCommand { // старт двигателя
	constructor(engine) {
		this.engine = engine;
	}

	execute() { // этим методом дергается тот или иной метод двигателя
		this.engine.on();
	}
};

class onSwitchOffCommand { // остановка двигателя
	constructor(engine) {
		this.engine = engine;
	}

	execute() { // этим методом дергается тот или иной метод двигателя
		this.engine.off();
	}
};

// Check Engine status
const engine = new Engine();

console.log(engine);
/*
Object {
  state: false
}
*/

// Start Engine
const onStartCommand = new OnStartCommand(engine);
const driver = new Driver(onStartCommand);
driver.execute();

console.log(engine);
/*
Object {
  state: true
}
*/
