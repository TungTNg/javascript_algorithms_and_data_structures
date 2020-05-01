// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 
// Merge + Sort 2 arrays into 1 array then find the median of the new merged sorted array
// O(n) time
//  var findMedianSortedArrays = function(nums1, nums2) {
//     var mergedSortedArr = [];
    
//     var p1 = 0;
//     var p2 = 0;
//     var median = 0;
    
//     while(p1 < nums1.length && p2 < nums2.length) {
//         if(nums1[p1] < nums2[p2]) {
//             mergedSortedArr.push(nums1[p1]);
//             p1++;
//         } else {
//             mergedSortedArr.push(nums2[p2]);
//             p2++;
//         }
//     }
    
//     while(p1 < nums1.length) {
//         mergedSortedArr.push(nums1[p1]);
//         p1++;
//     }
    
//     while(p2 < nums2.length) {
//         mergedSortedArr.push(nums2[p2]);
//         p2++;
//     }
    
//     if(mergedSortedArr.length % 2 !== 0) {
//         median = mergedSortedArr[(mergedSortedArr.length - 1) / 2];
//     } else {
//         median = (mergedSortedArr[(mergedSortedArr.length) / 2] + mergedSortedArr[Math.floor((mergedSortedArr.length - 1) / 2)]) / 2;
//     }
    
//     return median;
// };


// O(log(n)) time solution
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    var nums1Length = nums1.length;
    var nums2Length = nums2.length;
    
    var low = 0;
    var high = nums1Length;
    
    while (low <= high) {
        
        // basic selection of the partitioner
        var partitionNums1 = Math.floor((low + high) / 2);

        // partitioning of the second array
        // number of elements in left side must roughly the same in right side
        var partitionNums2 = Math.floor((nums1Length + nums2Length + 1) / 2 - partitionNums1);

        // declar variables of min and max values of each partitions
        var maxLeftPartitionNums1;
        var minRightPartitionNums1;
        
        var maxLeftPartitionNums2;
        var minRightPartitionNums2;

        // if partitionNums1 is 0 it means nothing is there on left side of partitionNums1. Use -Infinity for maxLeftPartitionNums1
        if(partitionNums1 == 0) {
            maxLeftPartitionNums1 = -Infinity;
        } else {
            maxLeftPartitionNums1 = nums1[partitionNums1 - 1];
        }
        // if partitionNums1 is at the end of nums1 it means nothing is there on the right side of partitionNums1. Use +Infinity for minRightPartitionNums1
        if(partitionNums1 == nums1Length) {
            minRightPartitionNums1 = +Infinity;
        } else {
            minRightPartitionNums1 = nums1[partitionNums1];
        }
        
        // if partitionNums2 is 0 it means nothing is there on left side of partitionNums2. Use -Infinity for maxLeftPartitionNums2
        if(partitionNums2 == 0) {
            maxLeftPartitionNums2 = -Infinity;
        } else {
            maxLeftPartitionNums2 = nums2[partitionNums2 - 1];
        }
        // if partitionNums2 is at the end of nums2 it means nothing is there on the right side of partitionNums2. Use +Infinity for minRightPartitionNums2
        if(partitionNums2 == nums2Length) {
            minRightPartitionNums2 = +Infinity;
        } else {
            minRightPartitionNums2 = nums2[partitionNums2];
        }
        
        // check if partitions are at correct places
        
        // if at correct places
        if(maxLeftPartitionNums1 <= minRightPartitionNums2 && maxLeftPartitionNums2 <= minRightPartitionNums1) {
            if ((nums1Length + nums2Length) % 2 == 0) {
                return (Math.max(maxLeftPartitionNums1, maxLeftPartitionNums2) + Math.min(minRightPartitionNums1, minRightPartitionNums2)) / 2;
            } else {
                return Math.max(maxLeftPartitionNums1, maxLeftPartitionNums2);
            }

        }
        
        // if we're too far on the right side on partitionNums1 -> go to left
        else if(maxLeftPartitionNums1 > minRightPartitionNums2) {
            high = partitionNums1 - 1;
        }
        
        // else -> go to the right side of nums1
        else {
            low = partitionNums1 + 1;
        }
        
    }
    
};

var nums1 = [1, 2];
var nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2));

// https://youtu.be/LPFhl65R7ww

// explaination in discussion: https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2481/Share-my-O(log(min(mn)))-solution-with-explanation