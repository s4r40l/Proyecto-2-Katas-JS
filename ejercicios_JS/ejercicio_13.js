const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind);

  if (index !== -1) {
    console.log(true, index);
  } else {
    console.log(false);
  }
}

nameFinder(names, "Tony");     // true 2
nameFinder(names, "Jessica");  // true 9
nameFinder(names, "Sara");     // false
