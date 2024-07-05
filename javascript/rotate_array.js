function rotateArray(arr, k) {
  const newArr = arr
  for (let i = 0; k > i; ++i) {
    newArr.unshift(arr[arr.length - 1])
    newArr.pop()
  }
  return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution

// the function takes in the array and k
// the function loops as much as k, and for each one it takes the length of the array
// using that length, takes an index and unshifts and deletes from the array and returns that array
