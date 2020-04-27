var merge = function(nums1, m, nums2, n) {
    var mergedArr = []
    
    var p1 = 0;
    var p2 = 0;
    
    while(p1 < m && p2 < n) {
        if(nums1[p1] < nums2[p2]) {
            mergedArr.push(nums1[p1]);
            p1++;
        } else {
            mergedArr.push(nums2[p2]);
            p2++;
        }
    }
    
    while(p1 < m) {
        mergedArr.push(nums1[p1]);
        p1++;
    }
    
    while(p2 < n) {
        mergedArr.push(nums2[p2]);
        p2++;
    }
    
    nums1 = mergedArr;
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));