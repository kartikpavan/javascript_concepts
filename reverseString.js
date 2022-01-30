const reverseString = (str) => {
  var rev = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i]
  }
  return rev;
}

console.log(reverseString('Kartik PAVAN'));