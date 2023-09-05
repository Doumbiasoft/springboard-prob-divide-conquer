function sortedFrequency(arr, num) {
    function findFirst(arr, num) {
      let leftIndex = 0;
      let rightIndex = arr.length - 1;
      let firstIdx = -1;
  
      while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  
        if (arr[middleIndex] === num) {
          firstIdx = middleIndex;
          rightIndex = middleIndex - 1;
        } else if (arr[middleIndex] < num) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
      }
  
      return firstIdx;
    }
  
    function findLast(arr, num) {
      let leftIndex = 0;
      let rightIndex = arr.length - 1;
      let lastIdx = -1;
  
      while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  
        if (arr[middleIndex] === num) {
          lastIdx = middleIndex;
          leftIndex = middleIndex + 1;
        } else if (arr[middleIndex] < num) {
            leftIndex = middleIndex + 1;
        } else {
          rightIndex = middleIndex - 1;
        }
      }
  
      return lastIdx;
    }
  
    const firstOccurrence = findFirst(arr, num);
    const lastOccurrence = findLast(arr, num);
  
    if (firstOccurrence === -1) {
      return -1; //If number not found in the array
    }
  
    return lastOccurrence - firstOccurrence + 1;
  }
  

module.exports = sortedFrequency



  // Test cases
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // Output: 4
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // Output: 1
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // Output: 2
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // Output: -1
  