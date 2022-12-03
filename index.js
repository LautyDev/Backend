class User {
	constructor(name, surname, age, films, pets) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.films = films;
		this.pets = pets;
	}

	//Add
	addFilm(name, autor, year) {
		const newFilm = { name: name, autor: autor, year: year };
		console.log(newFilm);
		this.films.push(newFilm);
	}
	addPet(name, age, type) {
		const newPet = { name: name, age: age, type: type };
		console.log(newPet);
		this.pets.push(newPet);
	}

	//Delete
	deleteFilm(name) {
		this.films = this.films.filter((film) => film.name !== name);

		return this.films;
	}
	deletePet(name) {
		this.pets = this.pets.filter((pet) => pet.name !== name);

		return this.pets;
	}

	//Update
	updateFilm(name, autor, year) {
		const newFilm = { name: name, autor: autor, year: year };
		this.films = this.films.map((film) =>
			film.name === name ? newFilm : film
		);

		return this.films;
	}
	updatePet(name, age, type) {
		const newPet = { name: name, age: age, type: type };
		this.pets = this.pets.map((pet) => (pet.name === name ? newPet : pet));

		return this.pets;
	}

	//Get all info
	getAllInfo() {
		console.log(
			`Nombre: ${this.name} - Apellido: ${this.surname} - Edad: ${this.age} - Películas: ${this.films} - Mascotas: ${this.pets}`
		);
	}
	getAllInfoFilms() {
		return this.films;
	}
	getAllInfoPets() {
		return this.pets;
	}

	//Get only one value
	getFullName() {
		return this.name + ' ' + this.surname;
	}
	getName() {
		return this.name;
	}
	getSurname() {
		return this.surname;
	}
	getAge() {
		return this.age;
	}
	getNameFilms() {
		return this.films.map((film) => film.name);
	}
	getNamePets() {
		return this.pets.map((pet) => pet.name);
	}

	//Get count
	getCountFilms() {
		return this.films.length;
	}
	getCountPets() {
		return this.pets.length;
	}

	//Get count by type
	getCountFilmsByAutor(autor) {
		return this.films.filter((film) => film.autor === autor).length;
	}
	getCountPetsByType(type) {
		return this.pets.filter((pet) => pet.type === type).length;
	}

	//Get count by year
	getCountFilmsByYear(year) {
		return this.films.filter((film) => film.year === year).length;
	}
	getCountPetsByAge(age) {
		return this.pets.filter((pet) => pet.age === age).length;
	}

	//Get custom info
	getInfoFilm(name) {
		const film = this.films.filter((film) => film.name === name);

		return `Nombre: ${film[0].name} - Autor: ${film[0].autor}\n - Año: ${film[0].year}`;
	}
	getInfoPet(name) {
		const pet = this.pets.filter((pet) => pet.name === name);

		return `Nombre: ${pet[0].name} - Edad: ${pet[0].age} - Tipo: ${pet[0].type}`;
	}
}

const lautyUser = new User(
	'Lautaro',
	'Chavero',
	15,
	[
		{
			name: 'The Batman',
			autor: 'DC',
			year: 2022
		},
		{
			name: 'Spider-Man: No Way Home',
			autor: 'Marvel',
			year: 2022
		},
		{
			name: 'Top Gun: Maverick',
			autor: 'Paramount',
			year: 2022
		}
	],
	[
		{
			name: 'Ámbar',
			age: 5,
			type: 'Perro'
		},
		{
			name: 'Luna',
			age: 4,
			type: 'Perro'
		},
		{
			name: 'Kitty',
			age: 7,
			type: 'Gato'
		},
		{
			name: 'Perla',
			age: 4,
			type: 'Gato'
		},
		{
			name: 'Cromo',
			age: 3,
			type: 'Gato'
		},
		{
			name: 'Tigre',
			age: 2,
			type: 'Gato'
		},
		{
			name: 'Fanta',
			age: 1,
			type: 'Gato'
		}
	]
);
console.log(lautyUser);
