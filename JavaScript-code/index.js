function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce(function(accumulator, currentNumber) {
      return accumulator + currentNumber;
    }, 0);

    if (new Set(nums).size !== n || nums.some(num => num > n)) {
      console.log("Error: Duplicate number or number greater than n found.");
      return null; 
    }

    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}
const nums =  [9,6,4,2,3,5,7,0,1];

const missing = missingNumber(nums);
if (missing !== null) {
  console.log(missing); 
}
