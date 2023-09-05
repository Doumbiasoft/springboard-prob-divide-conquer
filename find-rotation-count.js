function findRotationCount(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
  
    while (leftIndex <= rightIndex) {
      if (arr[leftIndex] <= arr[rightIndex]) {
        return leftIndex; // The array is not rotated
      }
  
      const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      const nextIndex = (middleIndex + 1) % arr.length;
      const prevIndex = (middleIndex - 1 + arr.length) % arr.length;
  
      if (arr[middleIndex] <= arr[nextIndex] && arr[middleIndex] <= arr[prevIndex]) {
        return middleIndex; // Found the rotation point
      }
  
      if (arr[middleIndex] <= arr[rightIndex]) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    }
  
    return -1; // Invalid input or array not rotated
  }
  
  // Test cases
  console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // Output: 2
  console.log(findRotationCount([7, 9, 11, 12, 5])); // Output: 4
  console.log(findRotationCount([7, 9, 11, 12, 15])); // Output: 0
  

module.exports = findRotationCount