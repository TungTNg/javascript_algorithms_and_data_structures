// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var nums1EndIndex = m - 1;
    var nums2EndIndex = n - 1;
    var mergeEndIndex = m + n - 1;
    
    while(nums1EndIndex >= 0 && nums2EndIndex >= 0) {
        if(nums1[nums1EndIndex] > nums2[nums2EndIndex]) {
            nums1[mergeEndIndex] = nums1[nums1EndIndex];
            nums1EndIndex--;
        } else {
            nums1[mergeEndIndex] = nums2[nums2EndIndex];
            nums2EndIndex--;
        } 
        mergeEndIndex--;
    }
    
    while(nums2EndIndex >= 0) {
        nums1[mergeEndIndex] = nums2[nums2EndIndex];
        mergeEndIndex--;
        nums2EndIndex--;
    }
    
    return nums1;
};