const anagram = function (string) {
  string = string.replace(/[\W_]+/g, "");
  let stringArr = string.split("");
  let anagram = stringArr.reverse().join("").toLowerCase();
 
  if (anagram === string.toLowerCase()) {
    return true;
  }
  return false;
};
console.log(anagram("LOLi"));
