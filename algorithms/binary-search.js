var arr = [5, 3, 6, 0, 2, 1];
const sortedArr = arr.sort((a, b) => {
  return a - b;
});

var end = Math.round((sortedArr.length - 1) / 2);
start = 0;
// recursion method
const searchAlgoRec = function (start, end, search) {
  if (sortedArr[start] === search) {
    console.log(true, search);
    return true;
  }

  if (start > end) {
    console.log(false, search);
    return false;
  }
  if (search > sortedArr[end]) {
    start = end + 1;
    end = sortedArr.length - 1;
    searchAlgoRec(start, end, search);
  } else {
    start = start + 1;
    searchAlgoRec(start, end, search);
  }
};
// searchAlgoRec(start, end, 24);

// for loop
const searchAlgoFor = function (start, end, search) {
  for (let i = start; i < sortedArr.length; i++) {
    if (sortedArr[start] === search) {
      console.log(true, search);
      break;
    }
    if (start > end) {
      console.log(false, search);
      break;
    }
    if (search > sortedArr[end]) {
      start = end + 1;
      end = sortedArr.length - 1;
    } else {
      start = start + 1;
    }
  }
};
searchAlgoFor(start, end, 1);
// var sortedArr = arr.sort((a,b)=>{return a-b});
// console.log(sortedArr)
// function recursion(arr, x, start, end) {
//   //       check if start of array >end
//   if (start > end) {
//    console.log(
//       "number not found.the big O notation of this code is O(logN)"
//     );

//     return "array end  smaller  than start ";
//   }
//     // find middle index
//     var middleIndex = Math.floor((end + start) / 2);
//     let middleVal=sortedArr[middleIndex]

//     if (middleVal === x) {
//      console.log(
//         "number found and is :" +
//          middleVal,
//           "the big O notation of this code is O(logN)"
//       );

//       return sortedArr[middleIndex]
//     }
//       if (middleVal > x) {
//         // search toward the left

//         recursion(arr, x, start, middleIndex - 1);
//       } else {
//         // search toward the left

//         recursion(arr, x, middleIndex + 1, end);

//     }

// }
// console.log((10+7)%16)
// recursion(sortedArr, 6, 0, sortedArr.length - 1);
