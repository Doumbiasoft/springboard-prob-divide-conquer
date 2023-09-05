
function findRotatedIndex(arr, num) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
  
    while (leftIndex <= rightIndex) {
      const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  
      if (arr[middleIndex] === num) {
        return middleIndex;
      }
  
      if (arr[leftIndex] <= arr[middleIndex]) {
        // Left half is sorted
        if (arr[leftIndex] <= num && num < arr[middleIndex]) {
          // If num is within the left half, search the left half
          rightIndex = middleIndex - 1;
        } else {
          // Otherwise, search the right half
          leftIndex = middleIndex + 1;
        }
      } else {
        // Right half is sorted
        if (arr[middleIndex] < num && num <= arr[rightIndex]) {
          // If num is within the right half, search the right half
          leftIndex = middleIndex + 1;
        } else {
          // Otherwise, search the left half
          rightIndex = middleIndex - 1;
        }
      }
    }
  
    return -1; // Number not found in the array
  }

module.exports = findRotatedIndex


  
  // Test cases
  console.log(findRotatedIndex([3, 4, 1, 2], 4)); // Output: 1
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // Output: 2
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // Output: 6
  console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // Output: -1
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // Output: -1
  