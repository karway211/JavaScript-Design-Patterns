/*
proxy (заместитель) - это структурный паттерн, который вместо реальных объектов предоставляет специальные объекты-заменители.
Эти объекты перехватывают вызов к оригиналам и позволяют сделать что-то до или после обращения к оригинальному объекту.
Т.е. это своего рода прослойка, которая помогает произвести какие-либо дополнительные манипуляции до того как отдать
дальнейший контроль.
Например в зависимости от авторизации у нас может быть полный доступ к функционалу либо частичный.
*/

class CarAccess {
	open() {
		console.log('Opening car door')
	}

	close() {
		console.log('Closing the car door')
	}
};

class SecuritySystem {
	constructor(door) {
		this.door = door;
	}

	open(password) {
		if (this.authenticate(password)) {
			this.door.open();
		} else {
			console.log('Access denied!');
		}
	}

	authenticate(password) {
		return password === 'Ilon';
	}

	close() {
		this.door.close()
	}
};

const door = new SecuritySystem(new CarAccess());
door.open('Jack'); // 'Access denied!'
door.open('Ilon'); // 'Opening car door'
door.close(); // 'Closing the car door'
