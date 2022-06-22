//Implement Binary Search
function binarySearch(arr, value) {

	
	let l = 0;
	let r = arr.length - 1;
	let med;

	while(r >= l){

		mid = l + Math.floor((r - l) / 2);

		//if the value found at the middle itself return middle index
		if(arr[mid] === value )
			return mid;

		//the value smaller than the mid, then the value cand found in the
		// left subarray, otherwise the value can found in the rigth subarray
		if(arr[mid] > value){
			r = mid - 1;
		}
		else{
			l = mid + 1;
		}


	}


	// return -1 when the key not found in the array
	return -1;
}


//test array
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70];

//print result
console.log( binarySearch(testArray, 70) );