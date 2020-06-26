/*
adapter - оборачивает несовместимый с чем-то объект и делает его совместимым не изменяя исходного кода объекта
*/

class Engine2 {
	simpleInterface() { console.log('Engine 2.0 - tr-tr-tr') }
};

class EngineV8 {
	complecatedInterface() { console.log('Engine V8! - wroom wroom!') }
};

class EngineV8Adapter {
	constructor(engine) {
		this.engine = engine;
	}
     
	simpleInterface() {
		this.engine.complecatedInterface();
	}
};

class Auto {
	startEngine(engine) {
		engine.simpleInterface()
	}
};

// Engine 2.0
const myCar = new Auto();
const oldEngine = new Engine2();
myCar.startEngine(oldEngine); //'Engine 2.0 - tr-tr-tr'

//Engine V8 with adapter
const myCar1 = new Auto();
const engineAdapter1 = new EngineV8Adapter(new EngineV8());
myCar.startEngine(engineAdapter1); //'Engine V8! - wroom wroom!'

//Engine V8 without adapter
const myCar2 = new Auto();
const engineAdapter2 = new EngineV8();
myCar.startEngine(engineAdapter2); // ERROR
