let arr1 = [3, 6];
let arr2 = [1, 2, 2, 3, 4];
let p1 = 0;
let p2 = 0;
let resultarr = [];
// the time complexity for this code is O(N+M) while the space complexity for this code  O(N)
const mergeSort = function (arr1, arr2, resultarr) {
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      resultarr.push(arr1[p1]);
      p1++;
    } else {
      resultarr.push(arr2[p2]);
      p2++;
    }
  }
  while (p1 < arr1.length) {
    resultarr.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    resultarr.push(arr2[p2]);
    p2++;
  }
  console.log(resultarr);
};

mergeSort(arr1, arr2, resultarr);
