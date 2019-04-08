function findClosestValueInBst(tree, target) {
	var closetValue = tree.value;		

	function findClosestValueInBstHelper(tree, target) {
		if(tree == null) return;

		var closetSubstract     = Math.abs(target - closetValue),
			currentSubstract    = Math.abs(target - tree.value);

		if(closetSubstract > currentSubstract) {
			closetValue = tree.value;
		}    

		if(target > tree.value) {
			findClosestValueInBstHelper(tree.right, target);
		} else if(target < tree.value) {
			findClosestValueInBstHelper(tree.left, target);
		} else {
			return;
		}

	}
	
	findClosestValueInBstHelper(tree, target);
	
	return closetValue;
}