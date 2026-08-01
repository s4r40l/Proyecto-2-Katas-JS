const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
}

console.log("Objeto original: ", fantasticFour)

console.log("Intercambiando posición 0 y 3:");
console.log(swap(fantasticFour, 0, 3));

console.log("Intercambiando posición 1 y 2:");
console.log(swap(fantasticFour, 1, 2));
