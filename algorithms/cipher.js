// const cipher=function(str,step){
// // eg abc=bcd ie step=1;
// // eg abc=cde step=2

// let alphabet="abcdefghijklmnopqrstuvwxyz"
// let aphaArr=alphabet.split("")
// let newString="";
// for(let i=0;i<str.length;i++){
//        let current=str[i]

//        let index= aphaArr.indexOf(current)

//        newString+=aphaArr[(index+step)%26]
// }
// return newString

// }
const cipher = function (string, step) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let stringArr = string.split("");
  let newStr = "";
  stringArr.forEach((element) => {
    let index;
    index = (alpha.indexOf(element) + step) % alpha.length;

    newStr += alpha.charAt(index);
  });
  return newStr;
};
console.log(cipher("abcd", 27));
