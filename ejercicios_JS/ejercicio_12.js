const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(listDuplicates) {
  const listaNueva = [];

  for (let i = 0; i < listDuplicates.length; i++) {
    if (!listaNueva.includes(listDuplicates[i])) {
      listaNueva.push(listDuplicates[i]);
    }
  }

  console.log(listaNueva);
}

removeDuplicates(duplicates);
