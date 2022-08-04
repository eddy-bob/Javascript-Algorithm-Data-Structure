// option1
// const palindrome = (string) => {
//   let stringArr = string.split("");
//   let reverseArr = [];
//   let reverseString = "";

//   for (let i = stringArr.length - 1; i >= 0; i--) {
//     reverseArr.push(stringArr[i]);
//   }
//   reverseString = reverseArr.join("");
//   if (string === reverseString) {
//     return true;
//   } else {
//     return false;
//   }
// };

// option2
// the big O notaion for this code is O(N) while the space complexity of this code is O(N)
// const palindrome = (string) => {
//   let reverseString = string.split("").reverse().join("");
//   if (string === reverseString) {
//     return true;
//   } else {
//     return false;
//   }
// };
// the big O notation for this code is O(N) while the time compexity of this code is 0(N)
const palindrome = (string) => {
  let rev;
  string.split("").reduce((prev, curr) => {
    prev = curr + prev;
    return (rev = prev);
  }, "");
  console.log(rev);
  if (rev === string) {
    return true;
  } else {
    return false;
  }
};
console.log(palindrome("pop"));
