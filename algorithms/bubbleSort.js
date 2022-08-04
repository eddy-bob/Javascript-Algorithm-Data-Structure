// the big O notation for this algorithm is O(N^2) while the space complexity of this code is O(N)
const swap = function (arr, i, j) {
  let next = arr[j];
  arr[j] = arr[i];
  arr[i] = next;
  return arr;
};

const bubbleSort = function () {
  arr = [5, 2, 5, 10, 3, 4, 6, 1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  console.log(arr);
};
bubbleSort();
