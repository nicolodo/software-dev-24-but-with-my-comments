// brute force solution

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // console.log(`In the first loop: ${nums[i]}, the index is ${i}`)
        for (let j = i + 1; j < nums.length; j++) {
            // console.log(`In the second loop: ${nums[j]} on index ${j}`)
            if (nums[i] + nums[j] === target) {
                return [i , j]
            }
        }
    }
}

twoSum([4,1,5,6,19,2], 10) // [0, 3] -> target 10
// console.log(twoSum([4,1,5,6,19,2], 10) )
// console.log(twoSum([4,3,5,1,19], 24)) // [2,4] => target 24


// using a Map 
function twoSumTwo(nums, target) {
    const seen = new Map()

    for (let i = 0; i < nums.length; i++) {
        // I know the number I'm looking for
        const complement = target - nums[i]
        if (seen.has(complement)) {
            return [seen.get(complement), i]
        }
        seen.set(nums[i], i) // {4 => 0}
    }
    console.log(seen)
}

console.log(twoSumTwo([4,1,5,6,19,2], 10))