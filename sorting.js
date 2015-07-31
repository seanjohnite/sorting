function bubbleSort(array) {
	var numSwap = 1;
	while( numSwap > 0) {
		numSwap = 0;
		for(var i = 0; i < array.length - 1; i++) {
			if(isBigger(array[i], array[i + 1])) { 
				swap(array, i);
				numSwap++;
			}
		}
	}

	return array;

}

function swap(array, index) {
	var first = array[index];
	array[index] = array[index + 1];
	array[index + 1] = first;
}

function isBigger(num1, num2) {
  if (num1 === 0) num1 = -1;
  if (num2 === 0) num2 = -1;
	if (!num1 || num2 === 0) return true;
	if (!num2 || num1 === 0) return false;
	return num1 > num2;
}

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
  var right = arr.splice(middle)
	return [arr, right];
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


for(var i=12; i <= 17; i++) {
    var num_items = Math.pow(2,i);
    var native_test_array = [];
    var b_test_array = [];
    var m_test_array = [];
    for(var j=0; j < num_items; j++) {
        var rand = Math.floor(Math.random() * num_items);
        native_test_array.push(rand);
        b_test_array.push(rand);
        m_test_array.push(rand);
    }

    console.time(num_items + " native");
    native_test_array.sort(function(a,b){ return a-b; });
    console.timeEnd(num_items + " native");
    
    console.time(num_items + " bubble");
    bubbleSort(b_test_array);
    console.timeEnd(num_items + " bubble");

    console.time(num_items + " merge");
    mergeSort(m_test_array);
    console.timeEnd(num_items + " merge");  
}












