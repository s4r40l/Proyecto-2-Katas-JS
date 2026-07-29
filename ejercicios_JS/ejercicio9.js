const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let total = 0;

  for (let i = 0; i < numberList.length; i++) {
    total += numberList[i];
  }

  console.log(total);
}

sumNumbers(numbers);
