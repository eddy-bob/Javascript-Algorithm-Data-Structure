let arr1 = [3, 6];
let arr2 = [8, 2,1,2, 3, 4];
let arr = [...arr1, ...arr2];
let p1 = 0;
let p2 = 0;

const swap = function (arr, i, j) {
  let next = arr[j];
  arr[j] = arr[i];
  arr[i] = next;
  return arr;
};
// the big O notation for this algorithm is O(N^2) while the space complexity of this code is O(N+M)
const mergeSortH = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  console.log(arr);
};

mergeSortH(arr);
