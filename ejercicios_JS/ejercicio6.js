console.log("1.1 Bucle de 0 a 9 mostrando i");
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

console.log("1.2 Mostrar i solo cuando el resto entre 2 sea 0 (números pares)");
for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("1.3 Contar ovejas para dormir");
for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log("¡Dormido!");
  } else {
    console.log("Intentando dormir 🐑");
  }
}
