const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  const counter = {};

  for (let i = 0; i < list.length; i++) {
    const word = list[i];

    if (counter[word]) {
      counter[word]++;        // si ya existe, + 1
    } else {
      counter[word] = 1;      // si no existe, se inicia a 1
    }
  }

  console.log(counter);
}

repeatCounter(words);
