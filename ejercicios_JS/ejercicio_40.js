function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (index !== -1) {
    console.log(`El personaje "${text}" está en el índice ${index}, procedo a eliminarlo.`);
    array.splice(index, 1);
  } else {
    console.log(`El personaje "${text}" no está en el array, no se elimina nada.`);
  }

  return array;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log("Buscando el índice de Chewbacca:");
console.log(findArrayIndex(mainCharacters, "Chewbacca"));

console.log("Buscando el índice de Yoda (no existe):");
console.log(findArrayIndex(mainCharacters, "Yoda"));

console.log("Eliminando a Luke del array:");
console.log(removeItem(mainCharacters, "Luke"));

console.log("Eliminando a Rey del array:");
console.log(removeItem(mainCharacters, "Rey"));

console.log("Intentando eliminar a Yoda (no existe):");
console.log(removeItem(mainCharacters, "Yoda"));
