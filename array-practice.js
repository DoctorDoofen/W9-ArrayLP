const findMinimum = arr => {
  let min = Infinity
  if (arr.length === 0) return undefined
  else {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] < min) min = arr[i]
    }
    return min
  }

};

const runningSum = arr => {

  // Your code here 
};

const evenNumOfChars = arr => {

  // Your code here 
};

const smallerThanCurr = arr => {

  // Your code here 

};

const twoSum = (arr, target) => {

  // Your code here 
};

const secondLargest = arr => {

  // Your code here 
};

const shuffle = (arr) => {

  // Your code here 
};



let arr = [7, 5, 2, 3, 4, 1]
console.log(findMinimum(arr))
module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
