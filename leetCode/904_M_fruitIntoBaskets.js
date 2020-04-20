// In a row of trees, the i-th tree produces fruit with type tree[i].

// You start at any tree of your choice, then repeatedly perform the following steps:

// Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
// Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

// What is the total amount of fruit you can collect with this procedure?

 

// Example 1:

// Input: [1,2,1]
// Output: 3
// Explanation: We can collect [1,2,1].
// Example 2:

// Input: [0,1,2,2]
// Output: 3
// Explanation: We can collect [1,2,2].
// If we started at the first tree, we would only collect [0, 1].
// Example 3:

// Input: [1,2,3,2,2]
// Output: 4
// Explanation: We can collect [2,3,2,2].
// If we started at the first tree, we would only collect [1, 2].
// Example 4:

// Input: [3,3,3,1,2,1,1,2,3,3,4]
// Output: 5
// Explanation: We can collect [1,2,1,1,2].
// If we started at the first tree or the eighth tree, we would only collect 4 fruits.

/**
 * @param {number[]} tree
 * @return {number}
 */
 
 
// totalFruit([1,0,1,4,1,4,1,2,3])
 
// O(n^3)
// var totalFruit = function(treeArr) {
//     var maxFruit = 0;
    
//     for(var i = 0; i < treeArr.length; i++) {
//         var basket = {};

//         for(var j = i; j < treeArr.length; j++) {
//             if(Object.keys(basket).length <= 2) {
//                 basket[treeArr[j]] = (basket[treeArr[j]] || 0) + 1;
//             }
            
//             if(Object.keys(basket).length > 2) {
//                 break;
//             }
            
//             var countFruit = 0;
            
//             for(var key in basket) {
//                 countFruit += basket[key];
//             }
            
//             maxFruit = Math.max(maxFruit, countFruit);
//         }
        
//     }
    
//     return maxFruit;
// };


// O(n^2)
// var totalFruit = function(treeArr) {
//     var maxFruit = 0;
    
//     for(var i = 0; i < treeArr.length; i++) {
//         var basket = {};
//         var basketSize = 0;
//         var firstFruit;
//         var secondFruit;
        
//         for(var j = i; j < treeArr.length; j++) {
//             if(basketSize <= 2 ) {
//                 if(!(treeArr[j] in basket)) {
//                     basketSize++;
//                 }
//                 if(basketSize <= 1) {
//                     firstFruit = treeArr[j];
//                 } else if (basketSize == 2 && firstFruit !== treeArr[j]) {
//                     secondFruit = treeArr[j];
//                 }
//                 basket[treeArr[j]] = (basket[treeArr[j]] || 0) + 1;
//             }
            
//             if(basketSize > 2) {
//                 break;
//             }
            
//             var countFruit = (basketSize < 2) ? basket[firstFruit] : basket[firstFruit] + basket[secondFruit];

//             maxFruit = Math.max(maxFruit, countFruit);
//         }
        
//     }
    
//     return maxFruit;
// };

// O(n)
// var totalFruit = function(tree) {
    
//     let result = 0;
//     let basket = new Map(); // Contains a list of types of fruit we currently carry
    
//     // Pointers:
//     //  l (left) - Start index of the current sub-array of trees (two types)
//     //  m (medium) - Index of the tree with the latest type of fruit 
//     //  r (right) - Index of the current tree
    
//     for(var l = 0, m = 0, r = 0; r < tree.length; r++) {
//         // Add every unique type of fruit to the basket
//         if(!basket.has(tree[r])) basket.set(tree[r], true);
        
//         // Basket overflow 
//         if(basket.size > 2) {
//             // Summarize
//             result = Math.max(result, r - l);
//             // Empty the basket and put previous and current types of fruits there
//             basket.clear();
//             l = m;
//             basket.set(tree[l], true);
//             basket.set(tree[r], true);

//         }
            
//         // Keep in mind the tree where we meet the latest type of fruit
//         if(tree[m] !== tree[r]) {
//             m = r;
//         }
        
//         // console.log('left: ' + l);
//         // console.log('middle: ' + m);
//         // console.log('right: ' + r);
//         // console.log('basket: ');
//         // console.log(basket);
//     }
    
//     // Final decision
//     return Math.max(result, r - l);
// };

var totalFruit = function(tree) {
    
    let result = 0;
    // Contains a list of types of fruit we currently carry
    let basket = new Map(); 
    
    // Pointers:
    //  l (left) - Start index of the current sub-array of trees (two types)
    //  m (medium) - Index of the tree with the latest type of fruit 
    //  r (right) - Index of the current tree
    
    var l = 0;
    var m = 0; 
    var r = 0;
    
    while(r < tree.length) {
        // Add every unique type of fruit to the basket
        basket.set(tree[r], true);
        
        // Basket overflow 
        if(basket.size > 2) {
            // Empty the basket and put previous and current types of fruits there
            basket.clear();
            l = m;
            basket.set(tree[l], true);
            basket.set(tree[r], true);
        }
            
        // Keep in mind the tree where we meet the latest type of fruit
        if(tree[m] !== tree[r]) {
            m = r;
        }
        
        result = Math.max(result, r - l + 1);
        r++;
    }
    
    // Final decision
    return result;
};

console.log(totalFruit([1]));
console.log(totalFruit([1,0,1,4,1,4,1,2,3]));

console.log(totalFruit([1,0,2,3,4]));
console.log(totalFruit([1,2,1]));
console.log(totalFruit([0,1,2,2]));
console.log(totalFruit([1,2,3,2,2,5]));
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));