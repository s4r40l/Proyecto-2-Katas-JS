const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// Mostrar "Tendo"
console.log(aldeanos[3]);

// Añadir "Cervasio" al final
aldeanos.push("Cervasio");

// Cambiar el primer elemento por "Bambina"
aldeanos[0] = "Bambina";

// Dar la vuelta al array
aldeanos.reverse();

// Cambiar "Narciso" por "Canela"
const indiceNarciso = aldeanos.indexOf("Narciso");
if (indiceNarciso !== -1) aldeanos.splice(indiceNarciso, 1, "Canela");

// Mostrar el último elemento sin usar posición explícita
console.log(aldeanos[aldeanos.length - 1]);

console.log(aldeanos);
