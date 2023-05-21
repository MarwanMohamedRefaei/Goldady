function sum(arr) {
  let totalSum = 0;

  // Flatten the array
  const flattenedArr = arr.flat(Infinity);
  // Note Infinity Is the Level of Depth of the Array

  // Iterate over each string
  for (let i = 0; i < flattenedArr.length; i++) {
    const string = flattenedArr[i];
    
    // Extract numbers using regular expression
    const numbers = string.match(/-?\d+/g);

    // Convert and sum the extracted numbers
    if (numbers !== null) {
      for (let j = 0; j < numbers.length; j++) {
        totalSum += parseInt(numbers[j]);
      }
    }
  }

  return totalSum;
}

const myArray1 = [["1", "five", "2wenty", "thr33"]];
const myArray2 = [[["1X2", "t3n"],["1024", "5", "64"]]];
const myArray3 = [[[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]];

const result1 = sum(myArray1);
const result2 = sum(myArray2);
const result3 = sum(myArray3);

console.log(result1);
console.log(result2);
console.log(result3);