// option1
// const capitalize = function (str) {
//   let strArr = str.split("");
//   let first = strArr[0].toUpperCase();
//   let capitalize=first;
//   for(let i=1;i<strArr.length;i++){
// capitalize+=strArr[i];
//   }

//   return capitalize
// };

// const capitalize = function (text) {
//   let textArr = text.split("");
//   let capArr = [];
//   textArr.forEach((element) => {
//     capArr.push(element.toUpperCase());
//   });
//   return capArr.join("");
// };
// the big O notation for this piece of code is 0(N) while the space compexity of this code is 0(1)
const capitalize = function (text) {
  return text.toUpperCase();
};
console.log(capitalize("eddy"));
