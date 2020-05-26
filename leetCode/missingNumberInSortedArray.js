function missingNumberInSortedArr(nums) {
    var left     = 0;
    var right    = nums.length - 1;
    while(left <= right) {
        var mid = Math.floor((left + right) / 2);
        
        if(nums[mid] !== (nums[mid - 1] + 1)) return nums[mid - 1] + 1;
        if(nums[mid] !== (nums[mid + 1] - 1)) return nums[mid + 1] - 1;
        if(nums[mid] - mid == nums[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

console.log(missingNumberInSortedArr([0]));
console.log(missingNumberInSortedArr([0, 1, 2, 4, 5]));
console.log(missingNumberInSortedArr([1, 2, 3, 4, 5, 6, 7, 8, 10]));