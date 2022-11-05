const Contenedor = require('./Contenedor');

async function main() {
    const product = new Contenedor('productos.json');

    console.log('Productos actuales: ', await product.getAll());
    console.log(
        await product.save({
            title: 'Celular',
            price: 2000,
            thumbnail: 'https://samsungpe.vtexassets.com/arquivos/ids/176427-800-auto?width=800&height=auto&aspect=true'
        })
    );
    console.log(
        await product.save({
            title: 'Celular',
            price: 2000,
            thumbnail: 'https://samsungpe.vtexassets.com/arquivos/ids/176427-800-auto?width=800&height=auto&aspect=true'
        })
    );

    console.log(
        await product.save({
            title: 'Laptop',
            price: 9000,
            thumbnail: 'https://www.wepc.com/wp-content/uploads/2022/01/Pink-Laptop-1200x900.jpg',
        })
    );

    console.log(
        await product.save({
            title: 'Teclado',
            price: 300,
            thumbnail: 'https://www.wepc.com/wp-content/uploads/2022/01/Pink-Laptop-1200x900.jpg',
        })
    );

    console.log(await product.getById(1));
    console.log(await product.getById(10));
    console.log(await product.deleteById(1));
    console.log(await product.deleteById(0));
    console.log(await product.deleteById(5));

    console.log('Productos actuales: ', await product.getAll());
    console.log(await product.deleteAll());
}

main();