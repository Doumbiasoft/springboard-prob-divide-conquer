function findFloor(arr, x) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let floor = -1; // Initialize the floor to -1 in case no such element exists
  
    while (leftIndex <= rightIndex) {
      const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  
      if (arr[middleIndex] === x) {
        return arr[middleIndex]; // Found an exact match, so the floor is x itself
      } else if (arr[middleIndex] < x) {
        floor = arr[middleIndex]; // Update the current floor to the smaller element
        leftIndex = middleIndex + 1;
      } else {
        rightIndex = middleIndex - 1;
      }
    }
  
    return floor; // Return the largest element smaller than or equal to x
  }
  
  // Test cases
  console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // Output: 8
  console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // Output: 19
  console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // Output: -1
  
module.exports = findFloor