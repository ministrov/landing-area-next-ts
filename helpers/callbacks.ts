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

export function bubleSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[1]) {
      const temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    }
  }
}
