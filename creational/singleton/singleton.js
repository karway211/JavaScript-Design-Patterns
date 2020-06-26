/* 
singleton - это простой объект, который есть в системе в одном экземпляре + к нему есть какая-то глобальная точка доступа
Он нужен каждый раз, когда у нас в системе должен быть объект в едином экземпляре и к которому может быть доступ из разных
частей программы.
Каждый раз, когда мы создаем объект с помощью литерала, мы получаем singleton.
*/

class Counter {

	constructor() {
		if (typeof Counter.instance === 'object') {
			return Counter.instance;
		}
		this.count = 0;
		Counter.instance = this;
		return this;
	}
  
	getCount() {
		return this.count;
	}
  
	increaseCount() {
		return this.count++;
  }
  
};

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount()); //4
console.log(myCount2.getCount()); //4

// два разных объекта ссылаются на один singleton и изменяют его 4 раза