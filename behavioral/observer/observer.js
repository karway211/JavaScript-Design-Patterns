/*
observer (Наблюдатель) - это поведенческий паттерн проектирования, который создает механизм подписки, позволяющий
одним объектам следить за изменениями других объектов.
С ростом приложения может понадобиться хранить данные от которых зависят несколько компонентов в одном объекте или
классе, этот класс играет роль store или хранителя, в сою очередь он содержит определенные свойства от изменения
которых зависит логика определенных компонентов. Он соответственно содержит список этих зависящих компонентов, которые
в данном кейсе называются подписчиками. Так же у этого класса есть методы с помощью которых можно изменять наблюдаемые
свойства и методы, которые оповещают о том, что свойство изменилось и на это не плохо было бы отреагировать.
*/

class AutoNews {
  
	constructor() {
		this.news = ''; // свойство для новости
		this.actions = []; // массив подписчиков
	}

	setNews(text) { // принимает строковое значение новости
		this.news = text;
		this.notifyAll();
	}

	notifyAll() { // пробегается по массиву подписчиков и дергает в них метод inform, внутрь кот. передается контекст
		return this.actions.forEach(subs => subs.inform(this));
	}

	register(observer) { // для подписки наблюдателя
		this.actions.push(observer);
	}

	unregister(observer) { // для отписки наблюдателя
		this.actions = this.actions.filter(el => !(el instanceof observer));
	}
};

class Jack {
	inform(message) {
		console.log(`Jack has been informed about: ${message.news}`);
	}
};

class Max {
	inform(message) {
		console.log(`Max has been informed about: ${message.news}`);
	}
};

const autoNews = new AutoNews();

autoNews.register(new Jack());
autoNews.register(new Max());

autoNews.setNews('New Tesla price is 40000');
/*
`Jack has been informed about: New Tesla price is 40000`
`Max has been informed about: New Tesla price is 40000`
*/
