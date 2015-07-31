function bubbleSort(array) {
	var numSwap = 1;
	while( numSwap > 0) {
		numSwap = 0;
		for(var i = 0; i < array.length - 1; i++) {
			if(isBigger(array[i], array[i + 1])) { 
				swap(array, i, i + 1);
				numSwap++;
			};
		};
	};

	return array;

};

function swap(array, index1, index2) {
	var first = array[index1];
	array[index1] = array[index2];
	array[index2] = first;
};

function isBigger(num1, num2) {
	if (!num1 || num2 == 0) return true;
	if (!num2 || num1 == 0) return false;
	return num1 > num2;
};

function merge(arr1, arr2) {
	var returnArr = [];
	var arr1i = 0;
	var arr2j = 0;

	while (arr1.length > arr1i || arr2.length > arr2j) {
		if (isBigger(arr1[arr1i], arr2[arr2j])) {
			returnArr.push(arr2[arr2j]);
			arr2j++;
		}
		else {
			returnArr.push(arr1[arr1i]);
			arr1i++;
		}
	}
	return returnArr;
}

function split(arr) {
	var middle = Math.ceil(arr.length / 2);
	return [arr.slice(0, middle), arr.slice(middle)];
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;

	var splitArr = split(arr);
	var left = splitArr[0];
	var right = splitArr[1];

	var leftSorted = mergeSort(left);
	var rightSorted = mergeSort(right);

	return merge(leftSorted, rightSorted);
}















