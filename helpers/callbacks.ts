export const numbers: number[] = [4, 1, -20, -7, 5, 9, -6];

export function removeNeg(array: number[], callback: (x: number) => boolean) {
  const myArray = [];

  for (const num of array) {
    if (callback(num)) {
      myArray.push(num);
    }
  }

  return myArray;
}

export function bubbleSort(arr: number[]) {
  const n = arr.length - 1;

  console.log(n);

  for (let pass = 0; pass < n; pass++) {
    for (let i = 0; i < n - pass; i++) {
      if (arr[i] > arr[i + 1]) {
        // eslint-disable-next-line prefer-const
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
}
