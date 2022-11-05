class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(newMascota) {
        this.mascotas.push(newMascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    mascotaNames() {
        return this.mascotas;
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor });
    }

    getBookNames() {
        return this.libros.map((book) => book.nombre);
    }
}

const user1 = new Usuario(
    'Liz',
    'Pariona',
    [
        {
            nombre: 'Mujercitas',
            autor: 'Louisa May Alcott'
        },
        {
            nombre: 'Harry Potter',
            autor: 'J. K. Rowling'
        }
    ],
    ['Lucas', 'Estrella', 'Rosita']
)

console.log(`Total de mascotas: ${user1.countMascotas()}`); // 3
console.log(`Mascotas: ${user1.mascotaNames()}`); // ['Lucas', 'Estrella', 'Rosita']
console.log(`Libros: ${user1.getBookNames()}`); // ['Mujercitas', 'Harry Potter']
console.log(`Nombre completo: ${user1.getFullName()}`) // Liz Pariona

user1.addMascota('Zeus');
console.log(`Total de mascotas: ${user1.countMascotas()}`); // 4
console.log(`Mascotas: ${user1.mascotaNames()}`); // ['Lucas', 'Estrella', 'Rosita', 'Zeus']

user1.addBook('El principito', 'Antoine de Saint-Exupéry');
console.log(`Libros: ${user1.getBookNames()}`);  // ['Mujercitas', 'Harry Potter', 'El principito']
