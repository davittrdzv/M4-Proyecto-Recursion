// Problema: Buscar un objeto en una lista de regalos
// Es Navidad y estás buscando un regalo específico en una lista de regalos que te dio tu familia. La lista puede ser bastante larga, y para encontrar el regalo que buscas, necesitas usar recursión. Este proyecto se enfoca únicamente en usar recursión para buscar un elemento en un arreglo simple.

// Solución:

const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota", "Libro de cuentos", "Juego de mesa", "Avión de juguete", "Robot", "Bicicleta", "Peluche", "Cámara de juguete", "Microscopio", "Set de arte", "Cubo Rubik", "Puzzle 3D", "Estación de tren", "Kit de ciencia", "Drone", "Guitarra de juguete"];

const findGift = (gifts, gifToFind, index = 0) => {
    // Caso base para evitar un ciclo infinito
    if (index === gifts.length) {
        return `"${gifToFind}" no está en la lista.`
    }
    // Caso para cuando encuentre el regalo
    if (gifts[index] === gifToFind) {
        return `"${gifToFind}" está en el índice ${index}.`
    }
    // Llamada recursiva
    return findGift(gifts, gifToFind, index + 1);
}

// El primer console.log busca aleatoriamente un regalo (de los que sí están en la lista).
// El console.log 2 y 3 son de regalos que no están en la lista.
console.log(findGift(gifts, gifts[Math.floor(Math.random() * gifts.length)]));
console.log(findGift(gifts, "Perro"));
console.log(findGift(gifts, "Gato"));