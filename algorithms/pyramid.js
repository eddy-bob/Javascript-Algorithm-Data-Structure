// the time complexity of this code is O(N^2) while the space complexity is O(N)
const pyramid = function (step) {
  for (let i = 1; i <= step; i++) {
    let pad = " ".repeat(step - i);

    formular = 1 + (i - 1) * 2;

    console.log(pad + "#".repeat(formular) + pad);
  }
};
pyramid(100);
