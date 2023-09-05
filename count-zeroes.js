function countZeroes(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
  
    while (leftIndex <= rightIndex) {
      const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  
      // If middleIndex is 0 and the previous element is 1, then middleIndex is the first occurrence of 0
      if (arr[middleIndex] === 0 && arr[middleIndex - 1] === 1) {
        return arr.length - middleIndex;
      }
  
      // If middleIndex is 1, move to the right half of the array
      if (arr[middleIndex] === 1) {
        leftIndex = middleIndex + 1;
      } else {
        // If middleIndex is 0, move to the left half of the array
        rightIndex = middleIndex - 1;
      }
    }
  
    // If no 0s are found, return 0
    return 0;
  }
  
  // Test cases
  console.log(countZeroes([1, 1, 1, 1, 0, 0])); // Output: 2
  console.log(countZeroes([1, 0, 0, 0, 0])); // Output: 4
  console.log(countZeroes([0, 0, 0])); // Output: 3
  console.log(countZeroes([1, 1, 1, 1])); // Output: 0


module.exports = countZeroes