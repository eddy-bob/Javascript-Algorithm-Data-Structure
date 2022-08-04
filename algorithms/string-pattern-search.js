let count = 0;
let level = 0;
pending = 0;
let string = "hannah";
let stringArr = string.split("");
let pattern = "ol";
let stringLevel = 0;
// the time complexity for this code is 0(N^2) while the space complexity of this code of O(N)
const patternSearch = function (stringArr, pattern, pending, count) {
  if (stringArr.length === 0) {
    console.log("done");
    console.log(count);
  } else {
    for (let i = 0; i < pattern.length && stringArr.length !== 0; i++) {
      if (stringArr[0] === pattern[i]) {
        stringArr.splice(stringArr.indexOf(stringArr[0]), 1);

        pending = pending + 1;

        if (pending == pattern.length) {
          count = count + 1;
          pending = 0;
          patternSearch(stringArr, pattern, pending, count);
        }
      } else {
        stringArr.splice(stringArr.indexOf(stringArr[0]), 1);

        patternSearch(stringArr, pattern, pending, count);
      }
    }
  }
};
patternSearch(stringArr, pattern, pending, count);
