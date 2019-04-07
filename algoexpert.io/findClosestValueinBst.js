function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closetValue) {
    if(tree == null) return closetValue;
    
    var closetSubstract     = Math.abs(target - closetValue),
        currentSubstract    = Math.abs(target - tree.value);
    
    if(closetSubstract > currentSubstract) {
        closetValue = tree.value;
    }    
        
    if(target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closetValue);
    } else if(target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closetValue);
    } else {
        return tree.value;
    }
  
}