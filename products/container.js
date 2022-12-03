const fs = require('fs');

class Container {
	constructor(nameFile) {
		this.nameFile = nameFile;
	}

	save = async (product) => {
		try {
			if (fs.existsSync(this.nameFile)) {
				const content = await fs.promises.readFile(
					this.nameFile,
					'utf8'
				);
				if (content) {
					const products = JSON.parse(content);
					const lastIdAdded = products.reduce(
						(acc, item) => (item.id > acc ? (acc = item.id) : acc),
						0
					);
					const newProduct = {
						id: lastIdAdded + 1,
						...product
					};
					products.push(newProduct);
					await fs.promises.writeFile(
						this.nameFile,
						JSON.stringify(products, null, 2)
					);
				} else {
					const newProduct = {
						id: 1,
						...product
					};
					await fs.promises.writeFile(
						this.nameFile,
						JSON.stringify([newProduct], null, 2)
					);
				}
			} else {
				const newProduct = {
					id: 1,
					...product
				};
				await fs.promises.writeFile(
					this.nameFile,
					JSON.stringify([newProduct], null, 2)
				);
			}
		} catch (error) {
			console.log(error);
		}
	};

	getById = async (id) => {
		try {
			if (fs.existsSync(this.nameFile)) {
				const content = await fs.promises.readFile(
					this.nameFile,
					'utf8'
				);
				if (content) {
					const products = JSON.parse(content);
					const product = products.find((item) => item.id === id);
					return product;
				} else {
					return 'El archivo esta vacio';
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	getAll = async () => {
		try {
			const content = await fs.promises.readFile(this.nameFile, 'utf8');
			const products = JSON.parse(content);
			return products;
		} catch (error) {
			console.log(error);
		}
	};

	deleteById = async (id) => {
		try {
			const content = await fs.promises.readFile(this.nameFile, 'utf8');
			const products = JSON.parse(content);
			const newProducts = products.filter((item) => item.id !== id);
			await fs.promises.writeFile(
				this.nameFile,
				JSON.stringify(newProducts, null, 2)
			);
		} catch (error) {
			console.log(error);
		}
	};

	deleteAll = async () => {
		try {
			await fs.promises.writeFile(this.nameFile, JSON.stringify([]));
		} catch (error) {
			console.log(error);
		}
	};
}

const listProducts = new Container('./list.txt');
const product1 = {
	title: 'Camisa',
	price: 300,
	thumbnail:
		'https://arturocalle.vtexassets.com/arquivos/ids/473103/HOMBRE-CAMISA-10122546-AZUL-780_1.jpg?v=637950736212900000'
};
const repeadProduct = {
	title: 'camisa',
	price: 300,
	thumbnail:
		'https://arturocalle.vtexassets.com/arquivos/ids/473103/HOMBRE-CAMISA-10122546-AZUL-780_1.jpg?v=637950736212900000'
};
const product2 = {
	title: 'Zapatos',
	price: 100,
	thumbnail:
		'https://arturocalle.vtexassets.com/arquivos/ids/473103/HOMBRE-CAMISA-10122546-AZUL-780_1.jpg?v=637950736212900000'
};

const product3 = {
	title: 'Sombrero',
	price: 200,
	thumbnail:
		'https://arturocalle.vtexassets.com/arquivos/ids/473103/HOMBRE-CAMISA-10122546-AZUL-780_1.jpg?v=637950736212900000'
};

const createProduct = async () => {
	await listProducts.save(product1);
	await listProducts.save(product2);
	await listProducts.save(product3);
	const resultadoId = await listProducts.getById(1);
	console.log(resultadoId);
	const products = await listProducts.getAll();
	console.log(products);
	await listProducts.deleteById(2);
	await listProducts.save(product2);
};

createProduct();
