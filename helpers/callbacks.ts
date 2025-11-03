const numbers: number[] = [4, 1, -20, -7, 5, 9, -6];

const posNumbers = removeNeg(numbers, (x: number) => x >= 0);

function removeNeg(array: number[], callback: (x: number) => boolean) {
  const myArray = [];

  for (const num of array) {
    if (callback(num)) {
      myArray.push(num);
    }
  }

  return myArray;
}

console.log(posNumbers);
