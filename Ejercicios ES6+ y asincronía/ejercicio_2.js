const pointsList = [32, 54, 21, 64, 75, 43];

const pointsCopy = [...pointsList];

console.log(pointsCopy);



const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };

const toyCopy = { ...toy };

console.log(toyCopy);



/**
  pointsList original está arriba del todo
 */
const pointsLis2 = [54, 87, 99, 65, 32];

const mergedPoints = [...pointsList, ...pointsLis2];

console.log(mergedPoints);




/**
  toy original está más arriba
**/
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };

const toyMerged = { ...toy, ...toyUpdate };

console.log(toyMerged);



const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colorsCopy);
