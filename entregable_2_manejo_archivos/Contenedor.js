const fs = require('fs');

class Contenedor {

    constructor(fileName) {
        this.fileName = fileName;
    }

    async save(obj) {
        const getAllProducts = await this.getAll();
        const newObject = { ...obj, id: this.generateId(getAllProducts) };

        if (!(await this.isRepeatedObj(newObject))) {
            getAllProducts.push(newObject);

            try {
                await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(getAllProducts, null, 2));
                return `!El producto ${newObject.title} fue agregado! con id generado: ${newObject.id}`;

            } catch (error) {
                console.log(error);
            }
        } else {
            return `!El producto ${newObject.title} ya existe existe en la lista`;
        }
    }

    async getById(id) {
        const getAllProducts = await this.getAll();
        const productFound = getAllProducts.find((product) => product.id == id);
        return `Producto encontrado: \n ${!productFound ? null : JSON.stringify(productFound)}`;
    }

    async getAll() {
        try {
            const products = JSON.parse(await fs.promises.readFile(`./${this.fileName}`, 'utf-8'), null, 2);
            return products;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        let getAllProducts = await this.getAll();
        let productFound = getAllProducts.find((product) => product.id == id);
        let index = getAllProducts.indexOf(productFound);
        if (index !== -1) getAllProducts.splice(index, 1);

        await this.updateFile(getAllProducts, `El producto eliminado es: ${!productFound ? 'null' : productFound.title}`);

        try {
            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(getAllProducts, null, 2));
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll() {
        await this.updateFile([], 'Productos eliminados');
    }

    async updateFile(newValue, msg) {
        try {
            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(newValue, null, 2));
            console.log(msg);
        } catch (error) {
            console.log(error);
        }
    }

    generateId(array) {
        let newId;
        if (array.length == 0) {
            newId = 0;
        } else {
            newId = array[array.length - 1].id + 1;
        }

        return newId;
    }

    async isRepeatedObj(newProduct) {
        const getAllProducts = await this.getAll();

        // return !getAllProducts.find((product) => product.title == newProduct.title)? false : true;
        return getAllProducts.map(product => product.title).indexOf(newProduct.title) == -1 ? false : true;
    }

}

module.exports = Contenedor;