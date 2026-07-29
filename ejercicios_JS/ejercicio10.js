function average(numberList) {
  let total = 0;

  for (let i = 0; i < numberList.length; i++) {
    total += numberList[i];
  }

  console.log(total / numberList.length);
}

average(numbers);
